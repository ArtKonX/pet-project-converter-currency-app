import React from 'react';
import { TextAboutUsProps } from '@/interfaces/about-us/text-about-us/text-about-us.interface';
import styles from './TextAboutUs.module.scss';

const TextAboutUs = ({ text, bold }: TextAboutUsProps) => {

    if (!text) return null

    return (
        <p className={`${styles['text-about-us']} ${bold && styles['text-about-us_bold']}`}>{text}</p>
    )
}

export default TextAboutUs