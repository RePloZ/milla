import useTranslation from 'next-translate/useTranslation'
import Navbar from 'components/Navbar/index';
import NavigationButton from 'components/Navigation';
import styles from 'styles/perception.module.scss';
import Head from 'next/head';
import classnames from 'classnames';

export default function Home() {
  const { t, lang } = useTranslation()

  return (<>
    <Head>
      <title>{t('common:perception')} - Milla Rose Agency</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>  
    
    <NavigationButton 
      left={false}
      href="/vision"
      src="/img/adult-art-artwork-1081685.png"
      alt="black women with makeup"
      name={t('common:vision')}
    />
    <NavigationButton 
      left={true}
      href="/"
      src="/img/milla_rose_logo.png"
      alt="men with black hat"
      name={t('common:home')}
    />
    <Navbar/>
    <div id="page-title">
      <h1>{t('common:perception')}</h1>
    </div>
    <div className={styles.page}>
      <img className={styles.hat} src="/img/black_hat_man.png" alt=""/>
      <div className={classnames(styles["bug"],styles["text-bloc-left"])}>
        {[t("perception:p1"), t("perception:p2")].map((value, index) => (<p key={index}>{value}</p>)) }
      </div> 
    </div>
    <div className={styles.page}>
        <div className={styles["text-bloc-middle-up"]}>
          <p>{t("perception:p3")}</p>
        </div>
        <img className={styles.person} src="/img/pavement-person-reflection-2479886.png" alt=""/>
    </div>
  </>)
}
