import React from 'react';

import { MenuElemProps } from '@/interfaces/header/menu/menu.interface';
import styles from './MenuElem.module.scss';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

const MenuElem = ({ dataLinkElem }: MenuElemProps) => {

    const pathname = usePathname();

    return (
        <Link className={`${styles['nav-link']} ${pathname == dataLinkElem.to && styles['active']}`} href={dataLinkElem.to}>{dataLinkElem.text}</Link>
    )
}

export default MenuElem