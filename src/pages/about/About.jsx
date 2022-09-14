import React, { useState } from 'react'
import Breadcrumbs from '../../components/ui/breadcrumbs/Breadcrumbs'
import Stats from '../main/stats/Stats'
import "./about.scss"
import History from './history/History'
import Mission from './mission/Mission'

export default function About() {

    let breadcrumbsItems = [
        {
            slug: '/',
            title: 'Home',
        },
        {
            slug: '/about',
            title: 'About US',
        },
    ]

    let [aboutPage, setaboutPage] = useState({
        mission: [
            {
                id: 1,
                images: ['aboutSectionImg1.jpg', 'aboutSectionImg2.jpg'],
                smallTitle: 'mission',
                bigTitle: 'Our mission',
                text: 'We can\'t achieve our goals on our own.We work together with businesses, government, and nonprofits, and each partner plays a specific role in accelerating progress. In many cases, the private and public sectors, acting either separately or together, meet people’s needs.But there are gaps, spaces where some people don’t get what they need to live healthy, productive lives.',
            },
            {
                id: 2,
                video: 'video1.mp4',
                text: 'We can\'t achieve our goals on our own.We work together with businesses, government, and nonprofits, and each partner plays a specific role in accelerating progress. In many cases, the private and public sectors, acting either separately or together, meet people’s needs.But there are gaps, spaces where some people don’t get what they need to live healthy, productive lives.',
            },
        ],
        history: [
            {
                year: '2008',
                img: 'newsIMG.jpg',
                title: 'First cause after registration.2008',
                text: 'We can\'t achieve our goals on our own.We work together with businesses, government, and nonprofits, and each partner plays a specific role in accelerating progress.In many cases, the private and public sectors, acting either separately or together, meet people’s needs.But there are gaps, spaces where some people don’t get what they need to live healthy, productive lives. We can\'t achieve our goals on our own. We work together with businesses, In many cases, the private and public sectors, acting either separately or together, meet people’s needs. But there are gaps, spaces where some people don’t get what they need to live healthy, productive lives. We can\'t achieve our goals on our own. We work together with businesses, ',
            },
            {
                year: '2012',
                img: 'newsIMG.jpg',
                title: 'First cause after registration.2012',
                text: 'We can\'t achieve our goals on our own.We work together with businesses, government, and nonprofits, and each partner plays a specific role in accelerating progress.In many cases, the private and public sectors, acting either separately or together, meet people’s needs.But there are gaps, spaces where some people don’t get what they need to live healthy, productive lives. We can\'t achieve our goals on our own. We work together with businesses, In many cases, the private and public sectors, acting either separately or together, meet people’s needs. But there are gaps, spaces where some people don’t get what they need to live healthy, productive lives. We can\'t achieve our goals on our own. We work together with businesses, ',
            },
            {
                year: '2016',
                img: 'newsIMG.jpg',
                title: 'First cause after registration.2016',
                text: 'We can\'t achieve our goals on our own.We work together with businesses, government, and nonprofits, and each partner plays a specific role in accelerating progress.In many cases, the private and public sectors, acting either separately or together, meet people’s needs.But there are gaps, spaces where some people don’t get what they need to live healthy, productive lives. We can\'t achieve our goals on our own. We work together with businesses, In many cases, the private and public sectors, acting either separately or together, meet people’s needs. But there are gaps, spaces where some people don’t get what they need to live healthy, productive lives. We can\'t achieve our goals on our own. We work together with businesses, ',
            },
            {
                year: '2019',
                img: 'newsIMG.jpg',
                title: 'First cause after registration.2019',
                text: 'We can\'t achieve our goals on our own.We work together with businesses, government, and nonprofits, and each partner plays a specific role in accelerating progress.In many cases, the private and public sectors, acting either separately or together, meet people’s needs.But there are gaps, spaces where some people don’t get what they need to live healthy, productive lives. We can\'t achieve our goals on our own. We work together with businesses, In many cases, the private and public sectors, acting either separately or together, meet people’s needs. But there are gaps, spaces where some people don’t get what they need to live healthy, productive lives. We can\'t achieve our goals on our own. We work together with businesses, ',
            },
            {
                year: '2022',
                img: 'newsIMG.jpg',
                title: 'First cause after registration.2022',
                text: 'We can\'t achieve our goals on our own.We work together with businesses, government, and nonprofits, and each partner plays a specific role in accelerating progress.In many cases, the private and public sectors, acting either separately or together, meet people’s needs.But there are gaps, spaces where some people don’t get what they need to live healthy, productive lives. We can\'t achieve our goals on our own. We work together with businesses, In many cases, the private and public sectors, acting either separately or together, meet people’s needs. But there are gaps, spaces where some people don’t get what they need to live healthy, productive lives. We can\'t achieve our goals on our own. We work together with businesses, ',
            },
        ]
    })

    return (
        <main className="main">
            <Breadcrumbs items={breadcrumbsItems} />
            <Mission mission={aboutPage.mission} />
            <Stats />
            <History history={aboutPage.history} />
        </main>
    )
}