'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/lib/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { routing } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Header() {
    const t = useTranslations('Navigation');
    const pathname = usePathname();
    const currentLocale = useLocale();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: t('home'), href: '/' },
        { name: t('about'), href: '/about' },
        { name: t('projects'), href: '/projects' }, // Keeping standard URL structure
        { name: t('blog'), href: '/blog' },
        { name: t('contact'), href: '/contact' },
    ];

    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 60);
    });

    const isBlogPage = pathname.startsWith('/blog');
    const isTransparent = !isScrolled && !isBlogPage;

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 h-[64px] md:h-[72px] transition-all duration-300",
                    isTransparent
                        ? "bg-transparent"
                        : "bg-white/85 shadow-md backdrop-blur-md"
                )}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                    <div className="flex justify-between items-center h-full">
                        {/* Logo */}
                        <Link href="/" className="flex items-center group">
                            <img
                                src={isTransparent ? "/logov3.png" : "/logov3-black.png"}
                                alt="Jeannine and Emmanuel Foundation"
                                className={cn(
                                    "h-8 sm:h-10 w-auto max-w-[60vw] sm:max-w-none object-contain transition-all",
                                    isTransparent ? "brightness-0 invert" : ""
                                )}
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center">
                            <nav className="flex items-center space-x-[32px]">
                                {navItems.map((item) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={cn(
                                                "font-sans text-[15px] font-medium transition-colors h-[72px] flex items-center border-b-2",
                                                isActive
                                                    ? (isTransparent ? "text-white border-white" : "text-[var(--color-text-primary)] border-[var(--color-primary)]")
                                                    : (isTransparent ? "text-white/80 border-transparent hover:text-white" : "text-[var(--color-text-secondary)] border-transparent hover:text-[var(--color-primary)]")
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    );
                                })}
                            </nav>

                            {/* Language Switcher */}
                            <div className={cn("flex items-center space-x-2 border-l ml-[32px] pl-[32px] transition-colors", isTransparent ? "border-white/30" : "border-[var(--color-border)]")}>
                                {routing.locales.map((l, idx) => (
                                    <div key={l} className="flex items-center">
                                        <Link
                                            href={pathname}
                                            locale={l}
                                            className={cn(
                                                "text-[13px] transition-colors",
                                                currentLocale === l
                                                    ? (isTransparent ? "font-bold text-white" : "font-bold text-[var(--color-text-primary)]")
                                                    : (isTransparent ? "font-medium text-white/70 hover:text-white" : "font-medium text-[var(--color-text-muted)] hover:text-[var(--color-primary)]")
                                            )}
                                        >
                                            {l.toUpperCase()}
                                        </Link>
                                        {idx < routing.locales.length - 1 && (
                                            <span className={cn("mx-2 text-[13px] transition-colors", isTransparent ? "text-white/30" : "text-[var(--color-border)]")}>|</span>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Donate Button */}
                            <Link href="/donate" className="ml-6">
                                <button className={cn("flex items-center justify-center !py-[10px] !px-[22px]", isTransparent ? "btn-inverse" : "btn-primary")}>
                                    {t('donate')}
                                </button>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className={cn("md:hidden p-2 -mr-2 sm:mr-0 focus-visible:outline-none transition-colors", isTransparent ? "text-white" : "text-[var(--color-text-primary)]")}
                            onClick={() => setIsMenuOpen(true)}
                            aria-label="Open menu"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <div className="md:hidden">
                        {/* Overlay backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-[var(--color-bg-overlay)] z-[60]"
                            onClick={() => setIsMenuOpen(false)}
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 right-0 w-full max-w-sm bg-[var(--color-bg-white)] z-[70] shadow-2xl flex flex-col overflow-y-auto"
                        >
                            <div className="flex justify-end p-4 border-b border-[var(--color-border)] h-[64px] items-center">
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-2 text-[var(--color-text-primary)]"
                                    aria-label="Close menu"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <nav className="flex flex-col px-6 py-4">
                                {navItems.map((item) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={cn(
                                                "flex items-center h-12 text-[16px] font-medium transition-colors border-b border-[var(--color-border)]",
                                                isActive ? "text-[var(--color-primary)] font-semibold" : "text-[var(--color-text-secondary)]"
                                            )}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    );
                                })}
                            </nav>

                            <div className="mt-auto p-6 flex flex-col space-y-6 bg-[var(--color-bg-light)]">
                                <div className="flex justify-center items-center space-x-4">
                                    {routing.locales.map((l, idx) => (
                                        <div key={l} className="flex items-center">
                                            <Link
                                                href={pathname}
                                                locale={l}
                                                className={cn(
                                                    "text-[14px] transition-colors",
                                                    currentLocale === l
                                                        ? "font-bold text-[var(--color-text-primary)]"
                                                        : "font-medium text-[var(--color-text-muted)]"
                                                )}
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {l.toUpperCase()}
                                            </Link>
                                            {idx < routing.locales.length - 1 && (
                                                <span className="text-[var(--color-border-strong)] mx-4">|</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <Link href="/donate" className="w-full block" onClick={() => setIsMenuOpen(false)}>
                                    <button className="btn-primary w-full shadow-md">
                                        {t('donate')}
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
