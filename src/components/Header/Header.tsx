'use client';

import React, { useEffect, useState } from 'react';

import styles from './Header.module.scss';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import Burger from './Burger/Burger';
import { usePathname } from 'next/navigation';
import CloseBtn from './CloseBtn/CloseBtn';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const pathname = usePathname();

    const handleCloseMenu = () => {
        setIsMenuOpen(false)
    }

    useEffect(() => {
        setIsMenuOpen(false)
    }, [pathname])

    return (
        <div className={styles["header-container"]}>
            <div className={styles["header"]}>
                <Logo mainTitleText='Converter' subTitleText='App' />
                <div className={styles['burger-and-menu-block']}>
                    <Burger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                    {isMenuOpen &&
                        (<div className={styles['menu-container']}>
                            <div className={styles['menu-block']}>
                                <Menu isMenuBurger={true}/>
                                <CloseBtn handleCloseMenu={handleCloseMenu} text='x' />
                            </div>
                        </div>)
                    }
                </div>
                <div className={styles["menu"]}>
                    <Menu isMenuBurger={false} />
                </div>
            </div>
        </div>
    )
}

export default Header