'use client';

import { useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';
import { Link } from '@/lib/navigation';

interface VideoFeatureCta {
    label: string;
    href: string;
}

interface VideoFeatureProps {
    eyebrow: string;
    title: string;
    description: string;
    youtubeId: string;
    youtubeUrl: string;
    primaryCta: VideoFeatureCta;
    secondaryCta: VideoFeatureCta;
    watchLabel: string;
    iframeTitle: string;
}

export function VideoFeature({
    eyebrow,
    title,
    description,
    youtubeId,
    youtubeUrl,
    primaryCta,
    secondaryCta,
    watchLabel,
    iframeTitle,
}: VideoFeatureProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
    const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;

    return (
        <section className="py-[96px] bg-[var(--color-bg-dark)] relative overflow-hidden">
            <div className="absolute inset-0 bg-black/25" />
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-[840px] mx-auto text-center mb-[48px]">
                    <span className="overline-label !text-white/70">
                        {eyebrow}
                    </span>
                    <h2 className="h2 text-white mt-2 mb-[24px]">
                        {title}
                    </h2>
                    <p className="body-large text-white/80">
                        {description}
                    </p>
                </div>

                <div className="max-w-[980px] mx-auto">
                    <div className="relative aspect-video overflow-hidden rounded-[var(--radius-ui)] bg-black shadow-2xl shadow-black/30 border border-white/10">
                        {isPlaying ? (
                            <iframe
                                src={embedUrl}
                                title={iframeTitle}
                                className="absolute inset-0 w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        ) : (
                            <button
                                type="button"
                                onClick={() => setIsPlaying(true)}
                                className="group absolute inset-0 w-full h-full cursor-pointer"
                                aria-label={iframeTitle}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={thumbnailUrl}
                                    alt=""
                                    className="w-full h-full object-cover opacity-85 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                                />
                                <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />
                                <span className="absolute inset-0 flex items-center justify-center">
                                    <span className="w-[76px] h-[76px] sm:w-[88px] sm:h-[88px] rounded-full bg-white text-[var(--color-primary)] flex items-center justify-center shadow-xl transition duration-300 group-hover:scale-105">
                                        <Play size={34} fill="currentColor" strokeWidth={1.8} className="ml-1" />
                                    </span>
                                </span>
                            </button>
                        )}
                    </div>

                    <div className="mt-[32px] flex flex-col sm:flex-row items-center justify-center gap-[16px]">
                        <Link href={primaryCta.href}>
                            <button className="btn-inverse">
                                {primaryCta.label}
                            </button>
                        </Link>
                        <Link href={secondaryCta.href}>
                            <button className="btn-inverse !bg-transparent !border !border-white !text-white hover:!bg-white/10">
                                {secondaryCta.label}
                            </button>
                        </Link>
                        <a
                            href={youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 text-[15px] font-medium text-white/85 hover:text-white transition-colors"
                        >
                            {watchLabel}
                            <ExternalLink size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
