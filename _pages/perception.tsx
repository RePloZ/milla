import useTranslation from 'next-translate/useTranslation'
import Navbar from 'components/Navbar/index';
import NavigationButton from 'components/Navigation';

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
  </>)
}
