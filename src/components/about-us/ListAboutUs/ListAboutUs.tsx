import React from 'react';

import { ListAboutUsProps } from '@/interfaces/about-us/list-about-us/about-us-list.interface';
import TextAboutUs from '../TextAboutUs/TextAboutUs';
import styles from './ListAboutUs.module.scss';

const ListAboutUs = ({ dataAboutUsList }: ListAboutUsProps) => {

    if (!dataAboutUsList) return null
    if (dataAboutUsList.length === 0) return null

    return (
        <ul className={styles['list-about-us']}>
            {dataAboutUsList.map((text, indx) => (
                <li key={indx} className={styles['list-about-us__elem']}>
                    <TextAboutUs text={text} />
                </li>
            ))}
        </ul>
    )
}

export default ListAboutUs