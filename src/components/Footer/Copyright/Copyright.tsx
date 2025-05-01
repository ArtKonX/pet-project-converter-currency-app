import React from 'react';

import styles from './Copyright.module.scss';

const Copyright = ({text}: {text: string}) => {

    return (
        <div className={styles['copyright']}>
            <span>
                {text}
            </span>
        </div>
    )
}

export default Copyright