import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import styles from './BtnOffset.module.scss';
import { addOffset, addOffSetHistory } from '@/redux/slices/offSetSlice';

interface BtnOffsetProps {
    text: string,
    disabled: boolean
}

const BtnOffset = ({ text, disabled }: BtnOffsetProps) => {

    const dispatch = useDispatch();

    const [count, setCount] = useState(6)
    const [countCur, setCountCur] = useState(0)

    const getOffsetList = () => {

        setCount(count + 6);
        setCountCur(countCur + 6);

        dispatch(addOffset())
        dispatch(addOffSetHistory());
    }

    return (
        <button disabled={disabled}
            onClick={getOffsetList}
            type='button'
            className={styles['btn-offset']}>
            {text}
        </button>
    )
}

export default BtnOffset