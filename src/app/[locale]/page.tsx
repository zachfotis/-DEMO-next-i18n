import ExampleClientComponent from '@/components/ExampleClientComponent';
import LanguageChanger from '@/components/LanguageChanger';
import TestComponent from '@/components/TestComponent';
import TranslationsProvider from '@/components/TranslationsProvider';
import Link from 'next/link';
import initTranslations from '../i18n';

const i18nNamespaces = ['home'];

async function Home({ params: { locale } }: { params: { locale: string } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main className="flex flex-col items-center justify-center min-h-screen gap-10">
        <h1 className='text-3xl'>{t('header')}</h1>
        <ExampleClientComponent />
        <TestComponent />
        <Link href="/about">{t('page2')}</Link>
        <LanguageChanger />
      </main>
    </TranslationsProvider>
  );
}

export default Home;