import { DefaultSeo } from 'next-seo'; // Corrige a importação do DefaultSeo
import SEOConfig from '@/next-seo.config'; // Importa o arquivo de configuração corretamente
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEOConfig} />
      <Component {...pageProps} />
    </>
  );
}
