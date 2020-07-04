import Link from 'next-translate/Link'
import Trans from 'next-translate/Trans'
import useTranslation from 'next-translate/useTranslation'
import styles from "styles/home.module.scss";
import Navbar from 'components/Navbar';
import NavigationButton from 'components/Navigation';
import Head from 'next/head';

export default function Home() {
  const { t } = useTranslation()

  return (<>
    <Head>
      <title>Milla Rose Agency</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>  
    <NavigationButton 
      left={false}
      href="/perception"
      src={"/img/black_hat_man.png"}
      alt={"men with black hat"}
      name={t('common:perception')}
    />
    <Navbar/>
    <div className={styles.parent}>
      <img className={styles.image} src="/img/milla_rose_logo.png" alt="Milla Rose Logo"/>
      <h1 className={styles.text}>{t('home:title')}</h1>
    </div>
  </>)
}
