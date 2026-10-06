import Hero from '@/components/home/hero';
import Middle from '@/components/home/middle';
import { getTranslations } from 'next-intl/server';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata.home' });

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://liriandev.com/@envad';

    return {
        title: t('title'),
        description: t('description'),
        alternates: {
            canonical: `${baseUrl}/${locale}`,
            languages: {
                'tr': `${baseUrl}/tr`,
                'en': `${baseUrl}/en`,
                'x-default': `${baseUrl}/tr`
            }
        },
    }
}
export default async function Home({ params }: Props) {
    return (
        <main>
            <Hero params={params} />
            <Middle params={params} />
        </main>
    );
}