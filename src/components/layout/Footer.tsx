import { useTranslations } from 'next-intl';
import { Link } from '@/lib/navigation';

export default function Footer() {
    const t = useTranslations('Navigation');

    return (
        <footer className="bg-primary text-white py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                    {/* Brand Section */}
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center space-x-3 group w-fit">
                            <img
                                src="/logov3.png"
                                alt="Emmanuel Foundation"
                                className="h-12 w-auto transition-transform group-hover:scale-105"
                            />
                        </Link>
                        <p className="text-gray-300 font-sans font-medium leading-relaxed">
                            Dedicated to improving social wellbeing and safeguarding the environment for present and future generations in Rwanda.
                        </p>
                        <Link href="/donate" className="inline-block mt-4">
                            <button className="bg-secondary text-primary px-8 py-3 rounded-md font-heading font-bold hover:bg-white transition-all shadow-lg active:scale-95">
                                Donate Now
                            </button>
                        </Link>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:pl-10">
                        <h4 className="text-lg font-heading font-black mb-8 text-secondary">Quick Links</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'About', href: '/about' },
                                { name: 'Programs', href: '/projects' },
                                { name: 'Blog', href: '/blog' },
                                { name: 'Contact', href: '/contact' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-400 hover:text-secondary transition-colors font-sans font-medium"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-lg font-heading font-black mb-8 text-secondary">Support Us</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Donate', href: '/donate' },
                                { name: 'Volunteer', href: '/volunteer' },
                                { name: 'Partnerships', href: '/partnerships' },
                                { name: 'Work with us', href: '/work-with-us' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-400 hover:text-secondary transition-colors font-sans font-medium"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-heading font-black mb-8 text-secondary">Connect</h4>
                        <p className="text-gray-400 font-sans font-medium mb-6">
                            Kigali, Rwanda<br />
                            info@emmanuelfoundation.org
                        </p>
                        {/* Social links will be added when official handles are confirmed */}
                    </div>
                </div>

                <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm font-sans font-medium">
                        © {new Date().getFullYear()} Emmanuel Foundation. All rights reserved.
                    </p>
                    <div className="flex space-x-8 text-sm text-gray-500 font-sans font-medium">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
