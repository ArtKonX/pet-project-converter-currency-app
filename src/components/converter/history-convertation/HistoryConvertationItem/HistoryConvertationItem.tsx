import React from 'react';

import { HistoryConvertationItemProps } from '@/interfaces/converter/history-convertation/history-convertation.interface';

import styles from './HistoryConvertationItem.module.scss';
import HistoryRemoveItemBtn from '../HistoryRemoveItemBtn/HistoryRemoveItemBtn';

const HistoryConvertationItem = (
    {   id,
        currencyFirstData,
        currencySecondData,
        price,
        date,
        onRemove
    }:
    HistoryConvertationItemProps
) => {

    return (
        <div className={styles['history-convertation-item']}>
            <div className={styles["first-currency"]}>
                <span className={styles['first-currency__currency-count']}>
                    {currencyFirstData.currencyCount}
                </span>
                <span className={styles['first-currency__currency-name']}>
                    {currencyFirstData.currencyName}
                </span>
            </div>
            <span className={styles['dash']}>IN</span>
            <div className={styles["second-currency"]}>
                <span className={styles['second-currency__currency-name']}>
                    {currencySecondData.currencyName}
                </span>
            </div>
            <div className={styles["price"]}>
                <span className={styles['price__value']}>{price}</span>
                <span className={styles['price__currency']}>{currencySecondData.currencyName}</span>
            </div>
            <div className={styles['date']}>
                <span className={styles['date__value']}>{date}</span>
            </div>
            <HistoryRemoveItemBtn onRemove={onRemove} text='Удалить' id={id} />
        </div>
    )
}

export default HistoryConvertationItem