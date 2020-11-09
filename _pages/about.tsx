import useTranslation from 'next-translate/useTranslation'
import Navbar from 'components/Navbar/index';
import NavigationButton from 'components/Navigation';
import Head from 'next/head';
import styles from "styles/about.module.scss"
import classnames from 'classnames';

export default function Home() {
  const { t } = useTranslation()

  return (<>
    <Head>
      <title>{t('common:about')} - Milla Rose Agency</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>  
    <NavigationButton 
      left={true}
      href="/vision"
      src="/img/adult-art-artwork-1081685.png"
      alt="black women with makeup"
      name={t('common:vision')}
    />
    <NavigationButton 
      left={false}
      href="/board"
      src="/img/8e6d282e-6c70-467b-9a8d-793f1154fd6a.png"
      alt="skyline with a building"
      name={t('common:board')}
    />
    <Navbar/>
    <div id="page-title">
      <h1>{t('common:about')}</h1>
    </div>
    <div className={styles.page}>
        <div className={styles["text-bloc-bottom-middle"]}>
          <p>{t("about:p1_1")}</p>
        </div>
        <img className={styles["darling-hat"]} src="/img/darling_hat.png" alt="multiple hat in a store"/>
    </div>
    <div className={styles.doublepage}>
        <div className={classnames(styles["text-bloc-adjust-up"], styles["text-bloc-top-left"])}>
          {[t("about:p1_2"),t("about:p1_3"),].map((value, index) => (<p className={styles["text-mini"]} key={index}>{value}</p>))}
        </div>
        <div className={classnames(styles["text-bloc-adjust-down"], styles["text-bloc-bottom-right"])}>
          <p className={styles["text-mini"]}>{t("about:p1_4")}</p>
        </div>
    </div>
    <div className={styles.page}>
        <div className={classnames(styles["text-bloc-small"], styles["text-bloc-top-right"])}>
          <p>{t("about:p1_1")}</p>
        </div>
        <img className={styles["black-woman"]} src="/img/accessories-adult-attractive-935952.png" alt="multiple hat in a store"/>
    </div>
    <div className={styles.page}>
        <div className={classnames(styles["special"], styles["text-bloc-adjust-up"],styles["text-bloc-bottom-left"])}>
          <h2>{t("about:title_3")}</h2>
          {[t("about:p3_1"),t("about:p3_2"),t("about:p3_3"),].map((value, index) => (<p className={styles["text-ultra-mini"]} key={index}>{value}</p>))}
        </div>
        <img className={styles["white-woman"]} src="/img/beautiful-woman-fashion-fashion-model.png" alt="women mouth with yellow paint"/>
    </div>
  </>)
}


//