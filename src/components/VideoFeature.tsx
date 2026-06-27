'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';

interface VideoFeatureProps {
    title: string;
    description: string;
    youtubeId: string;
    iframeTitle: string;
}

export function VideoFeature({
    title,
    description,
    youtubeId,
    iframeTitle,
}: VideoFeatureProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const posterImage = '/images/about-staff-lineup.jpg';
    const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;

    return (
        <section className="py-[96px] bg-[var(--color-bg-dark)] relative overflow-hidden isolate">
            <div className="absolute inset-0 opacity-30">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={posterImage}
                    alt=""
                    className="w-full h-full object-cover blur-[2px] scale-105"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-dark)] via-[var(--color-bg-dark)]/78 to-[var(--color-bg-dark)]" />
            <div className="absolute inset-x-0 top-0 h-[160px] bg-gradient-to-b from-[var(--color-bg-dark)] to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-[180px] bg-gradient-to-t from-[var(--color-bg-dark)] to-transparent" />
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-[840px] mx-auto text-center mb-[40px]">
                    <h2 className="h2 text-white mb-[24px]">
                        {title}
                    </h2>
                    <p className="body-large text-white/80">
                        {description}
                    </p>
                </div>

                <div className="relative max-w-[1080px] mx-auto">
                    <div className="hidden lg:block absolute -left-[54px] top-[68px] h-[58%] w-[148px] overflow-hidden rounded-[var(--radius-ui)] border border-white/10 opacity-45 shadow-2xl shadow-black/30">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/images/mission-community.jpg"
                            alt=""
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="hidden lg:block absolute -right-[54px] bottom-[92px] h-[46%] w-[148px] overflow-hidden rounded-[var(--radius-ui)] border border-white/10 opacity-45 shadow-2xl shadow-black/30">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/images/about-community-event.jpg"
                            alt=""
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="relative rounded-[var(--radius-ui)] border border-white/12 bg-white/[0.06] p-2 shadow-[0_32px_110px_rgba(0,0,0,0.48)] backdrop-blur-sm">
                        <div className="relative aspect-video overflow-hidden rounded-[calc(var(--radius-ui)-4px)] bg-black">
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
                                        src={posterImage}
                                        alt=""
                                        className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.025]"
                                    />
                                    <span className="absolute inset-0 bg-gradient-to-tr from-black/72 via-black/18 to-transparent" />
                                    <span className="absolute inset-0 bg-gradient-to-t from-black/58 via-transparent to-black/10" />
                                    <span className="absolute inset-0 flex items-center justify-center px-4">
                                        <span className="flex h-[76px] w-[76px] items-center justify-center rounded-full bg-white text-[var(--color-primary)] shadow-[0_18px_42px_rgba(0,0,0,0.35)] transition-colors duration-200 group-hover:bg-[var(--color-bg-light)] group-hover:text-[var(--color-primary-dark)] sm:h-[88px] sm:w-[88px]">
                                            <Play size={34} fill="currentColor" strokeWidth={1.8} className="ml-1" />
                                        </span>
                                    </span>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
