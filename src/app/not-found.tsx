'use client';

import React from 'react';

import SpanResult from "@/components/ui/SpanResult/SpanResult";
import styles from "./page.module.scss";
import HeadingWithContent from "@/components/HeadingWithContent/HeadingWithContent";

export default function ConverterPage() {

    return (
        <div className={styles['not-found-page']}>
            <HeadingWithContent
                classNameText='main-content'
                headingText='Ошибка 404:('>
                <div className={styles['error-result-container']}>
                    <SpanResult
                        text='Эта страница не существует, перейдите на другую, которая есть в навигации!'
                        nameClass='result'
                        isError={true}
                    />
                </div>
            </HeadingWithContent>
        </div>
    )
}