import useTranslation from 'next-translate/useTranslation'
import Navbar from 'components/Navbar/index';

export default function Home() {
  const { t } = useTranslation()

  return (<>
    <Navbar/>
  </>)
}
