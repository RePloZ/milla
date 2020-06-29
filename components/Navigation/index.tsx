import styles from 'styles/button.navigation.module.scss';
import {useState} from 'react';
import classnames from 'classnames';
import { Flipper, Flipped } from 'react-flip-toolkit';
import Link from 'next-translate/Link';
import useTranslation from 'next-translate/useTranslation'

interface Navigation {
    left: boolean
    src: string
    alt: string
    name: string
    href: string
}

const ButtonNavigation = ({left, src, alt, name, href}: Navigation) => {
    const {lang} = useTranslation();
    const [active, setActive] = useState(false);

    const bulleClasses = classnames(
        left === true ? styles.left : styles.right,
        active === true ? styles.active : styles.inactive
    )

    const titleclasses = classnames(
        styles["navigation-title"],
        active === true ? styles["navigation-active"] : styles["navigation-inactive"]
    )

    return (<>
        <Flipper flipKey="animation-bulle">
            <Flipped flipId="bulles"> 
                <div
                    className={bulleClasses}
                    onMouseOver={() => setActive(true)}
                    onMouseOut={() => setActive(false)}
                >
                    <Link lang={lang === 'fr' ? 'fr' : 'en'} href={href} >
                        <a>
                            <img src={src} alt={alt}/>
                        </a>
                    </Link>
                </div>
            </Flipped>
        </Flipper>
        <div className={titleclasses}>
            <h2>{name}</h2>
        </div>
    </>)
}

export default ButtonNavigation;