import React from 'react';

import { HeadingWithContentProps } from '@/interfaces/heading-with-content/heading-with-content.interface';
import styles from './HeadingWithContent.module.scss';

const HeadingWithContent = ({ classNameText, headingText, children }: HeadingWithContentProps) => {

    return (
        <section className={`${styles[classNameText]}`}>
            <h2 className={`${styles[classNameText + '__title']}`}>{headingText}</h2>
            {children}
        </section>
    )
}

export default HeadingWithContent