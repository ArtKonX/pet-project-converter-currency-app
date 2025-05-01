'use client'

import React from 'react';

import Link from 'next/link';

import styles from './Logo.module.scss';
import { LogoProps } from '@/interfaces/header/logo/logo.interface';

const Logo = ({ mainTitleText, subTitleText }: LogoProps) => {

    return (
        <Link href='/' className={styles["logo-link"]}>
            <span className={styles['logo-link__main-title']}>
                {mainTitleText}
            </span>
            <span className={styles['logo-link__sub-title']}>
                {subTitleText}
            </span>
        </Link>
    )
}

export default Logo