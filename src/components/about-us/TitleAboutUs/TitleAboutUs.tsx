import React from 'react';

import { TitleAboutUsProps } from '@/interfaces/about-us/title-about-us/title-about-us.interface';
import styles from './TitleAboutUs.module.scss';

const TitleAboutUs = ({ text }: TitleAboutUsProps) => {

    if (!text) return null

    return (
        <h3 className={styles['title-about-us']}>
            {text}
        </h3>
    )
}

export default TitleAboutUs