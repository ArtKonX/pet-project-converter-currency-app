import React from 'react';

import { HistoryConvertationListProps } from '@/interfaces/converter/history-convertation/history-convertation.interface';
import styles from './HistoryConvertationList.module.scss';
import HistoryConvertationItem from '../HistoryConvertationItem/HistoryConvertationItem';

const HistoryConvertationList = (
    {
        dataHistoryConvertation,
        onRemove
    }:
        HistoryConvertationListProps
) => {
    return (
        <ul className={styles['history-convertation-list']}>
            {dataHistoryConvertation.map((item) => (
                <li key={item.id} className={styles['history-convertation-elem']}>
                    <HistoryConvertationItem onRemove={onRemove} {...item} />
                </li>
            ))}
        </ul>
    )
}

export default HistoryConvertationList