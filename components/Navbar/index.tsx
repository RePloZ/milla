import useTranslation from 'next-translate/useTranslation'
import { list, Button, Modal } from './data';
import React, {useState} from 'react';
import styles from "styles/navbar.module.scss";
import { Twirl as Hamburger } from 'hamburger-react';
import { useRouter } from 'next/router';

export default function Navbar() {
    const {t, lang} = useTranslation();
    const [isOpen, setOpen] = useState(false);

    const router = useRouter();

    const Lang = () => (<Button 
        name={lang === 'fr' ? 'English' : 'Français'} 
        href={router.pathname}
        selectable={false} 
        path={lang === 'fr' ? '/' : '/'}
        lang={lang === 'fr' ? 'en' : 'fr'}
        img={lang === 'fr' ? '/img' : '/img'}
    />) 

    const final_list = list.map((val, index) => {
        const pre_lang = lang === "fr" ? "" : "/en"
        const pre_href = val.path === "/" ? "" : val.path
        const href = pre_lang + pre_href === "" ? "/" : pre_lang + pre_href
        return Button({...val, href, lang}, index);
    });

    return (<>
        <div className={styles["navbar-light"]}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>

        <Modal isOpen={isOpen} setOpen={setOpen}> 
            {final_list}
            <Lang />              
        </Modal>
    </>)
}