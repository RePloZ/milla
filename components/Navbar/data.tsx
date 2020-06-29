import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import styles from "styles/navbar.module.scss";
import { Flipper, Flipped } from 'react-flip-toolkit';
import Link from 'next-translate/Link';

export const list = [
    {"img": "/img/milla_rose_logo.png" ,"path": "/","name":"common:home"},
    {"img": "/img/black_hat_man.png" ,"path": "/perception","name":"common:perception"},
    {"img": "" ,"path": "/vision", "name":"common:vision"},
    {"img": "" ,"path": "/about","name":"common:about"},
    {"img": "" ,"path": "/board","name":"common:board"},
    {"img": "" ,"path": "/contact","name":"common:contact"},
];

export const Button = ({href, name, path, img, lang, selectable=true}, index) => {
    const router = useRouter();
    const { t } = useTranslation();

    let classes = "";

    if (selectable) {
        classes = router.pathname === path ? styles.selected : "";
        if (classes === "" && lang === null) {
            classes = router.pathname === href ? styles.selected : "";
        }    
    }

    return (<li key={index}>
        <Link href={path} lang={lang}>
            <a className={classes}>
                {/* <img src={img} alt=""/> */}
                {t(name)}
            </a>        
        </Link>
    </li>)
}

export const Modal = ({isOpen, setOpen, children}) => {
    const toggleFullScreen = () => setOpen(prevState => !prevState);
  
    return (
      <Flipper flipKey={isOpen}>
        <Flipped flipId="square">
            <>
                <div
                    className={isOpen ? styles["modal-button"] : styles["modal-button-hidden"]}
                    onClick={toggleFullScreen}
                />
                <div className={isOpen ? styles.modal : styles["modal-hidden"]}>
                    {children}
                </div>
            </>
        </Flipped>
      </Flipper>
    )
}