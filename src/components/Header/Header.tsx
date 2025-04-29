'use client';

import styles from './Header.module.scss';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';

const Header = () => {

    return (
        <div className={styles["header-container"]}>
            <div className={styles["header"]}>
                <Logo mainTitleText='Converter' subTitleText='App' />
                <Menu />
            </div>
        </div>
    )
}

export default Header