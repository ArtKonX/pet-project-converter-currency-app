import React from 'react';

import styles from './Menu.module.scss';

import tabsMenu from '@/data-app/tabs/tabs-menu.json';
import MenuElem from './MenuElem/MenuElem';

const Menu = ({isMenuBurger}: {isMenuBurger: boolean}) => {

    return (
        <nav className={styles['menu']}>
            <ul className={ `${styles['menu__list']} ${isMenuBurger && styles['menu__list_column']}`}>
                {tabsMenu.map(tab => (
                    <li key={tab.id} className={styles['menu-elem']}>
                        <MenuElem dataLinkElem={tab} />
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Menu