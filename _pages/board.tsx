import useTranslation from 'next-translate/useTranslation'
import Navbar from 'components/Navbar/index';
import NavigationButton from 'components/Navigation';
import Head from 'next/head';
import styles from 'styles/board.module.scss'

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
    <div id="page-title">
      <h1>{t('common:board')}</h1>
    </div>
    <div className={styles.page}>
        <div className={styles["text-bloc-top-left"]}>
          <p> {[t("board:p1_1_1"),t("board:p1_1_2"),t("board:p1_1_3")].map((value, index) => (<><span>{value}</span><br/></>))} </p>
          <p> {[t("board:p1_2_1"),t("board:p1_2_2"),t("board:p1_2_3")].map((value, index) => (<><span>{value}</span><br/></>))} </p>
          <p> {[t("board:p1_3_1"),t("board:p1_3_2"),t("board:p1_3_3")].map((value, index) => (<><span>{value}</span><br/></>))} </p>
        </div>
        <img className={styles["building"]} src="/img/8e6d282e-6c70-467b-9a8d-793f1154fd6a.png" alt="skyline with a building"/>
    </div>
    <div className={styles.page}>
        <div className={styles["text-bloc-bottom-right"]}>
          {[t("board:p2_1"),t("board:p2_2"),t("board:p2_3"),t("board:p2_4"),t("board:p2_5")].map((value, index) => (<p className={styles["text-mini"]}>{value}</p>))}
        </div>
        <img className={styles["wardrobe"]} src="/img/pexels-photo-2170387.png" alt="wardrobe"/>
    </div>
    <div className={styles.page}>
        <div className={styles["text-bloc-bottom-left"]}>
          <h2>{t("board:title_3")}</h2>
          {[t("board:p3_1"),t("board:p3_2")].map((value, index) => (<h3>{value}</h3>))}
        </div>
        <img className={styles["apparel"]} src="/img/apparel-boutique-colors-135620.png" alt="apparel"/>
    </div>

  </>)
}