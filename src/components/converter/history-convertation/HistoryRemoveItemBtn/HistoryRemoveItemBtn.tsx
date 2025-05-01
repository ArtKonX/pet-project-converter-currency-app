import React from 'react';

import styles from './HistoryRemoveItemBtn.module.scss';
import { HistoryRemoveItemBtnProps } from '@/interfaces/converter/history-removeI-iem-btn/history-removeI-iem-btn.interface';

const HistoryRemoveItemBtn = ({text, id, onRemove}: HistoryRemoveItemBtnProps) => {

    const handleClick = () => onRemove(id);

    return (
        <button className={styles['btn-remove-item-history']} onClick={handleClick}>
            {text}
        </button>
    )
}

export default HistoryRemoveItemBtn