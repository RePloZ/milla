import useTranslation from 'next-translate/useTranslation'
import Navbar from 'components/Navbar/index';
import NavigationButton from 'components/Navigation';
import Head from 'next/head';

export default function Home() {
  const { t } = useTranslation()

  return (<>
    <Head>
      <title>{t('common:contact')} - Milla Rose Agency</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>  
    <NavigationButton 
      left={true}
      href="/board"
      src="/img/8e6d282e-6c70-467b-9a8d-793f1154fd6a.png"
      alt="skyline with a building"
      name={t('common:board')}
    />
    <Navbar/>
  </>)
}
