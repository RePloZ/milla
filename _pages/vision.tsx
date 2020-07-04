import useTranslation from 'next-translate/useTranslation'
import Navbar from 'components/Navbar/index';
import NavigationButton from 'components/Navigation';

export default function Home() {
  const { t } = useTranslation()

  return (<>
    <NavigationButton 
      left={true}
      href="/perception"
      src={"/img/black_hat_man.png"}
      alt={"men with black hat"}
      name={t('common:perception')}
    />
    <NavigationButton 
      left={false}
      href="/about"
      src="/img/8f55dcb3-f5a3-4192-b0b9-99ab16d52456.png"
      alt="multiple hat in a store"
      name={t('common:about')}
    />
    <Navbar/>
  </>)
}
