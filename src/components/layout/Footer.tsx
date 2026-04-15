'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/lib/navigation';
import { routing } from '@/i18n/routing';
import { cn } from '@/lib/utils';

export default function Footer() {
    const t = useTranslations('Navigation');
    const pathname = usePathname();
    const currentLocale = useLocale();

    return (
        <footer className="bg-[var(--color-bg-dark)] text-white pt-16 pb-8 font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Newsletter Block (Fat Footer) */}
                <div className="mb-20 bg-white/5 border border-white/10 rounded-[var(--radius-ui)] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 -mr-24 -mt-24 w-72 h-72 bg-[var(--color-primary-vibrant)] rounded-full blur-[100px] opacity-40 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-72 h-72 bg-[var(--color-primary)] rounded-full blur-[100px] opacity-30 pointer-events-none" />
                    
                    <div className="relative z-10 max-w-xl text-center lg:text-left">
                        <h3 className="h3 text-white mb-2 font-fraunces">Join Our Movement</h3>
                        <p className="body-base text-white/70">
                            Subscribe to our newsletter to receive updates on our programmes, impact stories, and opportunities to support communities across Rwanda.
                        </p>
                    </div>
                    <div className="relative z-10 w-full lg:w-auto flex-1 max-w-md">
                        <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                            <input 
                                type="email" 
                                placeholder="Your email address" 
                                className="w-full px-5 py-4 bg-white/10 border border-white/10 rounded-[8px] text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
                                required
                            />
                            <button type="submit" className="bg-white text-[var(--color-primary-dark)] px-8 py-4 rounded-[8px] font-bold hover:bg-white/90 transition-all shrink-0 shadow-lg shadow-white/10">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="space-y-6 lg:pr-8">
                        <Link href="/" className="inline-block">
                            <img
                                src="/logov3.png"
                                alt="Jeanine and Emmanuel Foundation"
                                className="h-12 w-auto" 
                            />
                        </Link>
                        <p className="text-[15px] text-[#a1a1a1] leading-relaxed">
                            Dedicated to improving social wellbeing and safeguarding the environment for present and future generations in Rwanda. Our work protects the vulnerable and builds lasting independence.
                        </p>
                        <Link href="/donate" className="inline-block pt-2">
                            <button className="btn-inverse text-sm !px-6 !py-3">
                                Donate Now
                            </button>
                        </Link>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="h4 !text-[14px] uppercase tracking-widest mb-6 opacity-90">Quick Links</h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'About Us', href: '/about' },
                                { name: 'Programs', href: '/projects' },
                                { name: 'Stories & Updates', href: '/blog' },
                                { name: 'Contact', href: '/contact' }
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
                        <h4 className="text-[14px] font-bold uppercase tracking-widest mb-6 opacity-90">Support Us</h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'Donate', href: '/donate' },
                                { name: 'Volunteer', href: '/contact' },
                                { name: 'Partnerships', href: '/contact' },
                                { name: 'Work with us', href: '/contact' }
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
                        <h4 className="text-[14px] font-bold uppercase tracking-widest mb-6 opacity-90">Connect</h4>
                        <p className="text-[#a1a1a1] text-[15px] mb-4">
                            Kigali, Rwanda<br />
                            <a href="mailto:info@emmanuelfoundation.org" className="hover:text-white transition-colors mt-2 inline-block">
                                info@emmanuelfoundation.org
                            </a>
                        </p>
                    </div>
                </div>

                <div className="mt-20 pt-6 border-t border-[rgba(255,255,255,0.1)] flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[13px] text-white/50">
                        © {new Date().getFullYear()} Jeanine and Emmanuel Foundation. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-6 text-[13px] text-white/50">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
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
