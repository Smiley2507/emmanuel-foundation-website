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
