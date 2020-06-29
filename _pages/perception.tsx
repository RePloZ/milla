import useTranslation from 'next-translate/useTranslation'
import Navbar from 'components/Navbar/index';
import NavigationButton from 'components/Navigation';
import styles from 'styles/perception.module.scss';

export default function Home() {
  const { t, lang } = useTranslation()

  return (<>
    <NavigationButton 
      left={true}
      href="/"
      src={"/img/milla_rose_logo.png"}
      alt={"men with black hat"}
      name={t('common:home')}
    />
    <Navbar/>
    <div id="page-title">
      <h1>{t('common:perception')}</h1>
    </div>
    <div className={styles.page}>
      <img className={styles.hat} src="/img/black_hat_man.png" alt=""/>
      <p className={styles["text-bloc-left"]}>
        {t("perception:p1")}
      </p>
    </div>
  </>)
}
