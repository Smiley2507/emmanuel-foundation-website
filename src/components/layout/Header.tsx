'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/lib/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { routing } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';


export default function Header() {
    const t = useTranslations('Navigation');
    const pathname = usePathname();
    const currentLocale = useLocale();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: t('home'), href: '/' },
        { name: t('about'), href: '/about' },
        { name: t('projects'), href: '/projects' },
        { name: t('blog'), href: '/blog' },
        { name: t('contact'), href: '/contact' },
    ];

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
            isScrolled ? "bg-primary shadow-xl h-20" : "bg-transparent h-24"
        )}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex justify-between items-center h-full">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                            <div className="w-5 h-5 bg-primary rounded-sm rotate-45" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-heading font-black tracking-tighter text-white leading-none">
                                EMMANUEL
                            </span>
                            <span className="text-[10px] font-sans font-bold tracking-[0.3em] text-white/50 leading-snug uppercase">
                                Foundation
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <nav className="flex items-center space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "text-sm font-bold transition-all hover:text-secondary",
                                        pathname === item.href
                                            ? "text-secondary border-b-2 border-secondary pb-1"
                                            : isScrolled ? "text-white" : "text-gray-100"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Language Switcher */}
                        <div className="flex items-center space-x-3 border-l border-white/20 pl-8">
                            <Globe className="w-4 h-4 text-white/50" />
                            <div className="flex space-x-3 text-[11px] font-bold uppercase tracking-wider">
                                {routing.locales.map((l) => (
                                    <Link
                                        key={l}
                                        href={pathname}
                                        locale={l}
                                        className={cn(
                                            "hover:text-secondary transition-colors",
                                            currentLocale === l ? "text-secondary" : "text-white/40"
                                        )}
                                    >
                                        {l}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Donate Button - Solid Primary or Secondary */}
                        <Link href="/donate">
                            <button className="bg-secondary text-primary px-7 py-3 rounded-md font-heading font-bold text-sm hover:bg-white hover:text-primary transition-all shadow-lg active:scale-95">
                                Donate Now
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2 focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="md:hidden fixed inset-0 z-50 bg-primary flex flex-col p-8 pt-24"
                    >
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute top-8 right-8 text-white p-2"
                        >
                            <X size={32} />
                        </button>

                        <nav className="flex flex-col space-y-10">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-5xl font-heading font-black text-white hover:text-secondary transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        <div className="mt-auto pb-12 flex flex-col space-y-8">
                            <div className="flex items-center space-x-6">
                                <Globe className="text-white/30" />
                                <div className="flex space-x-6">
                                    {routing.locales.map((l) => (
                                        <Link
                                            key={l}
                                            href={pathname}
                                            locale={l}
                                            className={cn(
                                                "text-xl uppercase font-bold",
                                                currentLocale === l ? "text-secondary underline underline-offset-8" : "text-white/40"
                                            )}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {l}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <Link href="/donate" className="w-full">
                                <button className="w-full bg-secondary text-primary py-5 rounded-md font-heading font-bold text-xl shadow-2xl active:scale-95 transition-transform">
                                    Donate Now
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
