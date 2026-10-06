import Link from 'next/link';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function Middle({ params }: Props) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Middle' });

    const features = [
        {
            icon: (
                <svg className="w-6 h-6 text-indigo-500 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: t('feature1Title'),
            description: t('feature1Desc'),
        },
        {
            icon: (
                <svg className="w-6 h-6 text-purple-500 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            title: t('feature2Title'),
            description: t('feature2Desc'),
        },
        {
            icon: (
                <svg className="w-6 h-6 text-pink-500 dark:text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            ),
            title: t('feature3Title'),
            description: t('feature3Desc'),
        },
        {
            icon: (
                <svg className="w-6 h-6 text-emerald-500 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            ),
            title: t('feature4Title'),
            description: t('feature4Desc'),
        },
    ];

    const testimonials = [
        {
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
            name: t('review1Name'),
            role: t('review1Role'),
            text: t('review1Text'),
            rating: 5,
        },
        {
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
            name: t('review2Name'),
            role: t('review2Role'),
            text: t('review2Text'),
            rating: 5,
        },
        {
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
            name: t('review3Name'),
            role: t('review3Role'),
            text: t('review3Text'),
            rating: 5,
        },
    ];

    return (
        <section className="relative py-20 lg:py-28 bg-[--background] overflow-hidden transition-colors duration-300">
            {/* Arka Plan Glow Efektleri */}
            <div
                aria-hidden="true"
                className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/5 blur-3xl pointer-events-none rounded-full"
            />
            <div
                aria-hidden="true"
                className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 blur-3xl pointer-events-none rounded-full"
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* İstatistikler */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 p-8 rounded-2xl bg-card-bg border border-card-border text-center shadow-xs">
                    <div>
                        <div className="text-3xl sm:text-4xl font-extrabold text-foregorund mb-1">
                            {t('stat1Number')}
                        </div>
                        <div className="text-sm text-[--text-muted]">{t('stat1Label')}</div>
                    </div>
                    <div className="border-t md:border-t-0 md:border-l border-card-border pt-6 md:pt-0">
                        <div className="text-3xl sm:text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-1">
                            {t('stat2Number')}
                        </div>
                        <div className="text-sm text-[--text-muted]">{t('stat2Label')}</div>
                    </div>
                    <div className="border-t md:border-t-0 md:border-l border-card-border pt-6 md:pt-0">
                        <div className="text-3xl sm:text-4xl font-extrabold text-purple-600 dark:text-purple-400 mb-1">
                            {t('stat3Number')}
                        </div>
                        <div className="text-sm text-[--text-muted]">{t('stat3Label')}</div>
                    </div>
                </div>

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-indigo-600 dark:text-indigo-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 block">
                        {t('featuresBadge')}
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-bold text-foregorund tracking-tight mb-4">
                        {t('featuresTitle')}
                    </h2>
                    <p className="text-base sm:text-lg text-[--text-muted]">
                        {t('featuresDesc')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-28">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-6 rounded-2xl bg-card-bg border border-card-border hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-xs"
                        >
                            <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-slate-800 border border-indigo-100 dark:border-slate-700/50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-foregorund mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-[--text-muted] leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mb-28">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-purple-600 dark:text-purple-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 block">
                            {t('testimonialsBadge')}
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-bold text-foregorund tracking-tight mb-4">
                            {t('testimonialsTitle')}
                        </h2>
                        <p className="text-base sm:text-lg text-[--text-muted]">
                            {t('testimonialsDesc')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col justify-between p-8 rounded-2xl bg-card-bg border border-card-border shadow-xs hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div>
                                    {/* Yıldızlar */}
                                    <div className="flex items-center gap-1 text-amber-400 mb-6">
                                        {[...Array(item.rating)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>

                                    {/* Yorum */}
                                    <p className="text-sm sm:text-base text-foregorund italic leading-relaxed mb-8">
                                        &ldquo;{item.text}&rdquo;
                                    </p>
                                </div>

                                {/* Profil Bilgisi */}
                                <div className="flex items-center gap-4 pt-4 border-t border-card-border">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-indigo-500/30">
                                        <Image
                                            src={item.avatar}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                            sizes="48px"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-foregorund">
                                            {item.name}
                                        </h4>
                                        <p className="text-xs text-[--text-muted]">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-linear-to-r from-indigo-600 via-indigo-700 to-purple-800 text-white shadow-2xl">
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="text-center lg:text-left max-w-2xl">
                            <h3 className="text-2xl sm:text-4xl font-bold mb-3">
                                {t('ctaTitle')}
                            </h3>
                            <p className="text-indigo-100 text-sm sm:text-base">
                                {t('ctaDesc')}
                            </p>
                        </div>
                        <Link
                            href="/register"
                            className="px-8 py-4 rounded-xl bg-white text-indigo-950 hover:bg-indigo-50 font-bold transition-all shadow-lg text-center shrink-0"
                        >
                            {t('ctaButton')}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}