'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/lib/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { routing } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

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
    const navShadow = useTransform(
        scrollY,
        [0, 60],
        ['0 0 0 0 rgba(0,0,0,0)', '0 2px 16px rgba(0,0,0,0.08)']
    );

    return (
        <motion.header 
            style={{ boxShadow: navShadow }} 
            className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-white)] h-[64px] md:h-[72px]"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex justify-between items-center h-full">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group">
                        <img
                            src="/logov3.png"
                            alt="Emmanuel Foundation"
                            className="h-10 w-auto"
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
                                                ? "text-[var(--color-text-primary)] border-[var(--color-primary)]" 
                                                : "text-[var(--color-text-secondary)] border-transparent hover:text-[var(--color-primary)]"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Language Switcher */}
                        <div className="flex items-center space-x-2 border-l border-[var(--color-border)] ml-[32px] pl-[32px]">
                            {routing.locales.map((l, idx) => (
                                <div key={l} className="flex items-center">
                                    <Link
                                        href={pathname}
                                        locale={l}
                                        className={cn(
                                            "text-[13px] transition-colors",
                                            currentLocale === l 
                                                ? "font-bold text-[var(--color-text-primary)]" 
                                                : "font-medium text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
                                        )}
                                    >
                                        {l.toUpperCase()}
                                    </Link>
                                    {idx < routing.locales.length - 1 && (
                                        <span className="text-[var(--color-border)] mx-2 text-[13px]">|</span>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Donate Button */}
                        <Link href="/donate" className="ml-6">
                            <button className="btn-primary flex items-center justify-center !py-[10px] !px-[22px]">
                                Donate Now
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-[var(--color-text-primary)] p-2 focus-visible:outline-none"
                        onClick={() => setIsMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </div>

            {/* Mobile Navigation overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Overlay backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-[var(--color-bg-overlay)] z-[60] md:hidden"
                            onClick={() => setIsMenuOpen(false)}
                        />
                        
                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 right-0 w-full max-w-sm bg-[var(--color-bg-white)] z-[70] shadow-2xl flex flex-col md:hidden overflow-y-auto"
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
                                <Link href="/donate" className="w-[100%] block">
                                    <button className="btn-primary w-full shadow-md">
                                        Donate Now
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
