'use client';

import React from 'react';

import TitleAboutUs from "@/components/about-us/TitleAboutUs/TitleAboutUs";
import styles from "../page.module.scss";

import dataAboutUsLists from '@/data-app/about-us/data-about-us-lists.json';
import dataAboutUs from '@/data-app/about-us/data-about-us.json';

import ListAboutUs from "@/components/about-us/ListAboutUs/ListAboutUs";
import TextAboutUs from "@/components/about-us/TextAboutUs/TextAboutUs";
import HeadingWithContent from "@/components/HeadingWithContent/HeadingWithContent";

import { Fragment } from "react";

export default function AboutUsPage() {

    return (
        <div className={styles['about-us-page']}>
            <HeadingWithContent classNameText='main-content' headingText='О нас:'>
                <div className={styles['about-us__text']}>
                    {[0, 1].map((indx) => (<Fragment key={indx}><TitleAboutUs text={dataAboutUs[indx].text} /></Fragment>))}
                    {dataAboutUsLists.map(data => (
                        <div key={data.id}
                            className={styles['title-and-list-container']}>
                            <TitleAboutUs text={data.title} />
                            <ListAboutUs dataAboutUsList={data.list} />
                        </div>
                    ))}
                    {[2, 3, 4].map((indx) => (<Fragment key={indx}><TextAboutUs text={dataAboutUs[indx].text} bold={true} /></Fragment>))}
                </div>
            </HeadingWithContent>
        </div>
    )
}