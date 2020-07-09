import useTranslation from 'next-translate/useTranslation'
import Navbar from 'components/Navbar/index';
import NavigationButton from 'components/Navigation';
import Head from 'next/head';

export default function Home() {
  const { t } = useTranslation()

  return (<>
    <Head>
      <title>{t('common:board')} - Milla Rose Agency</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>  
    <NavigationButton 
      left={false}
      href="/contact"
      src="/img/airplane-architecture-buildings-1157255.png"
      alt="skylane with a plane"
      name={t('common:contact')}
    />
    <NavigationButton 
      left={true}
      href="/about"
      src="/img/darling_hat.png"
      alt="multiple hat in a store"
      name={t('common:about')}
    />
    
    <Navbar/>
  </>)
}
