'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/lib/navigation';
import { routing } from '@/i18n/routing';
import { cn } from '@/lib/utils';

export default function Footer() {
    const t = useTranslations('Footer');
    const pathname = usePathname();
    const currentLocale = useLocale();

    return (
        <footer className="bg-[var(--color-bg-dark)] text-white pt-16 pb-8 font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="space-y-6 lg:pr-8">
                        <Link href="/" className="inline-block">
                            <img
                                src="/logov3.png"
                                alt="Jeannine and Emmanuel Foundation"
                                className="h-12 w-auto"
                            />
                        </Link>
                        <p className="text-[15px] text-[#a1a1a1] leading-relaxed">
                            {t('about_desc')}
                        </p>
                        <Link href="/donate" className="inline-block pt-2">
                            <button className="btn-inverse text-sm !px-6 !py-3">
                                {t('btn_donate')}
                            </button>
                        </Link>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="h4 !text-[14px] uppercase tracking-widest mb-6 opacity-90">{t('quick_links')}</h4>
                        <ul className="space-y-3">
                            {[
                                { name: t('link_home'), href: '/' },
                                { name: t('link_about'), href: '/about' },
                                { name: t('link_programs'), href: '/projects' },
                                { name: t('link_stories'), href: '/blog' },
                                { name: t('link_contact'), href: '/contact' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-[#a1a1a1] hover:text-white transition-colors text-[15px]"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Us */}
                    <div>
                        <h4 className="text-[14px] font-bold uppercase tracking-widest mb-6 opacity-90">{t('support_us')}</h4>
                        <ul className="space-y-3">
                            {[
                                { name: t('link_support_donate'), href: '/donate' },
                                { name: t('link_volunteer'), href: '/contact' },
                                { name: t('link_partnerships'), href: '/contact' },
                                { name: t('link_work'), href: '/contact' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-[#a1a1a1] hover:text-white transition-colors text-[15px]"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect Info */}
                    <div>
                        <h4 className="text-[14px] font-bold uppercase tracking-widest mb-6 opacity-90">{t('connect')}</h4>
                        <p className="text-[#a1a1a1] text-[15px] mb-4">
                            {t('connect_location')}<br />
                            <a href="mailto:info@jef-foundation.org" className="hover:text-white transition-colors mt-2 inline-block">
                                info@jef-foundation.org
                            </a>
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 mt-5">
                            {[
                                {
                                    href: 'https://www.instagram.com/jefoundationorg/',
                                    label: 'Instagram',
                                    icon: (
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                            <circle cx="12" cy="12" r="4" />
                                            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                                        </svg>
                                    ),
                                },
                                {
                                    href: 'https://x.com/jefoundationorg',
                                    label: 'X (Twitter)',
                                    icon: (
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-[16px] h-[16px]">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    ),
                                },
                                {
                                    href: 'https://www.facebook.com/jefoundationorg',
                                    label: 'Facebook',
                                    icon: (
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                                            <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073c0 6.029 4.388 11.029 10.125 11.927v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.313 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796v8.437C19.612 23.102 24 18.102 24 12.073z" />
                                        </svg>
                                    ),
                                },
                                {
                                    href: 'https://www.linkedin.com/company/jefoundationorg/',
                                    label: 'LinkedIn',
                                    icon: (
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    ),
                                },
                            ].map(({ href, label, icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-[#a1a1a1] hover:text-white hover:border-white/40 hover:bg-white/8 transition-all duration-200"
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                <div className="mt-20 pt-6 border-t border-[rgba(255,255,255,0.1)] flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[13px] text-white/50">
                        {t('rights', { year: new Date().getFullYear() })}
                    </p>
                    <div className="flex items-center space-x-6 text-[13px] text-white/50">
                        <Link href="#" className="hover:text-white transition-colors">{t('policy')}</Link>
                        <Link href="#" className="hover:text-white transition-colors">{t('terms')}</Link>
                        <div className="flex items-center space-x-2 border-l border-[rgba(255,255,255,0.2)] pl-6 ml-2">
                            {routing.locales.map((l, idx) => (
                                <div key={l} className="flex items-center">
                                    <Link
                                        href={pathname}
                                        locale={l}
                                        className={cn(
                                            "uppercase transition-colors",
                                            currentLocale === l ? "text-white font-bold" : "hover:text-white"
                                        )}
                                    >
                                        {l}
                                    </Link>
                                    {idx < routing.locales.length - 1 && (
                                        <span className="mx-2 text-white/20">|</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
