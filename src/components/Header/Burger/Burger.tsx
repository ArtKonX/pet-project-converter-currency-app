import React from 'react';

import styles from './Burger.module.scss';

interface BurgerProps {
    isMenuOpen: boolean,
    setIsMenuOpen: (isMenu: boolean) => void
}

const Burger = ({isMenuOpen, setIsMenuOpen}: BurgerProps) => {

    const onActionMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <button className={styles['burger']} onClick={onActionMenu}>≡</button>
    )
}

export default Burger