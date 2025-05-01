import React from 'react';

import { SpanResultProps } from '@/interfaces/ui/span-result/span-result.interface';
import styles from './SpanResult.module.scss';

const SpanResult = ({ text, nameClass, isError }: SpanResultProps) => {

    return (
        <span className={
            `${styles[nameClass]}
            ${isError && styles[`${nameClass}_error`]}`
        }>
            {text}
        </span>
    )
}

export default SpanResult