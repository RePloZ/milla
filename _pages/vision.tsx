import useTranslation from 'next-translate/useTranslation'
import Navbar from 'components/Navbar/index';
import NavigationButton from 'components/Navigation';
import Head from 'next/head';
import styles from 'styles/vision.module.scss';

export default function Home() {
  const { t } = useTranslation()

  return (<>
    <Head>
      <title>{t('common:vision')} - Milla Rose Agency</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>  
    <div id="parralax" />
    <NavigationButton 
      left={true}
      href="/perception"
      src="/img/black_hat_man.png"
      alt="men with black hat"
      name={t('common:perception')}
    />
    <NavigationButton 
      left={false}
      href="/about"
      src="/img/darling_hat.png"
      alt="multiple hat in a store"
      name={t('common:about')}
    />
    <Navbar/>
    <div id="page-title">
      <h1>{t('vision:title')}</h1>
    </div>
    <div className={styles.page}>
        <div className={styles["text-bloc-top-left"]}>
          <p>{t("vision:p1_1")}</p>
        </div>
        <img className={styles["black-woman-makeup"]} src="/img/adult-art-artwork-1081685.png" alt="Woman with blue makeup"/>
    </div>
    <div className={styles.page}>
        <div className={styles["text-bloc-bottom-right"]}>
          <h3>{t("vision:title_2")}</h3>
          {[t("vision:p2_1"),t("vision:p2_2"),t("vision:p2_3"),].map((value, index) => (<p key={index}>{value}</p>))}
        </div>
        <img className={styles["laptop-design"]} src="/img/laptop-text-mode.png" alt="Laptop with mode concept"/>
    </div>
    <div className={styles.page}>
        <div className={styles["text-bloc-bottom-left"]}>
          <h3>{t("vision:title_3")}</h3>
          {[t("vision:p3_1"),t("vision:p3_2"),t("vision:p3_3"),].map((value, index) => (<p key={index}>{value}</p>))}
        </div>
        <img className={styles["airplane-architecture"]} src="/img/airplane-architecture-buildings-1157255.png" alt="skyline of an airplane with building"/>
    </div>
    <div className={styles.page}>
        <div className={styles["text-bloc-bottom-middle"]}>
          <h3>{t("vision:title_4")}</h3>
          {[t("vision:p4_1"),t("vision:p4_2"),t("vision:p4_3"),].map((value, index) => (<p key={index}>{value}</p>))}
        </div>
        <img className={styles["yellow-mouth"]} src="/img/pexels-photo-922470.png" alt="women mouth with yellow paint"/>
    </div>
  </>)
}

//