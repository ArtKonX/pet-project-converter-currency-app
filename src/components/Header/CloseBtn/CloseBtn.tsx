import React from 'react';

import styles from './CloseBtn.module.scss';

interface CloseBtnProps {
    handleCloseMenu: () => void,
    text: string
}

const CloseBtn = ({handleCloseMenu, text}: CloseBtnProps) => {

    return (
        <button onClick={handleCloseMenu} className={styles['close-btn']}>{text}</button>
    )
}

export default CloseBtn