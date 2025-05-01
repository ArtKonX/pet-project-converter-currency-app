import React from 'react';

import styles from './HistoryRemoveItemBtn.module.scss';
import { HistoryRemoveItemBtnProps } from '@/interfaces/converter/history-removeI-iem-btn/history-removeI-iem-btn.interface';

const HistoryRemoveItemBtn = ({text, id, onRemove}: HistoryRemoveItemBtnProps) => {

    return (
        <button className={styles['btn-remove-item-history']} onClick={onRemove.bind(this, id)}>
            {text}
        </button>
    )
}

export default HistoryRemoveItemBtn