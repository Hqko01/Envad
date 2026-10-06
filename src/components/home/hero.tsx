import Link from 'next/link';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function Hero({ params }: Props) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Hero' });

    return (
        <section className="relative overflow-hidden bg-[--background] pt-24 pb-16 lg:pt-32 lg:pb-24">
            {/* Arka Plan Glow / Derinlik Efekti */}
            <div
                aria-hidden="true"
                className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-linear-to-b from-indigo-500/10 via-purple-500/5 to-transparent blur-3xl pointer-events-none"
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto">

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md">
                        <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
                        <span>{t('badge')}</span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[--foreground] leading-[1.1] mb-6">
                        {t('titleStart')}{' '}
                        <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            {t('titleHighlight')}
                        </span>{' '}
                        {t('titleEnd')}
                    </h1>

                    <p className="text-lg sm:text-xl text-[--foreground] max-w-2xl mx-auto font-normal leading-relaxed mb-10">
                        {t('description')}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <Link
                            href="/dashboard"
                            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all shadow-lg shadow-indigo-600/25 text-center"
                        >
                            {t('primaryCta')}
                        </Link>
                        <a
                            href="https://github.com/Hqko01"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800/80 text-slate-200 font-semibold transition-all backdrop-blur-sm text-center flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                            <span>{t('secondaryCta')}</span>
                        </a>
                    </div>

                </div>

                {/* Mockup Önizleme - High LCP / Responsive Image */}
                <div className="relative max-w-5xl mx-auto rounded-2xl p-2 bg-linear-to-b from-slate-800 to-slate-900/50 border border-slate-800 shadow-2xl">
                    <div className="relative rounded-xl overflow-hidden bg-slate-950 aspect-video">
                        <Image
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                            alt={t('imageAlt')}
                            fill
                            priority // LCP skorunu artırmak için kritik resimlerde priority kullanın
                            className="object-cover object-top"
                            sizes="(max-width: 1280px) 100vw, 1280px"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}