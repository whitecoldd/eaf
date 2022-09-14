import React, { useEffect, useState } from 'react'
import MuiSimpleSlider from '../../../components/ui/Mui_simpleSlider/Mui_simpleSlider'
import Slide from './slide/Slide'
import "./topBanner.scss"

export default function TopBanner() {

    let slides = [
        {
            id: 1,
            smallText: 'Help people 1',
            title: 'Little Efforts Make Big Changes',
            action: '/',
            bgImg: 'russia-ukraine-war.jpg',
        },
        {
            id: 2,
            smallText: 'Help people 2',
            title: 'Little Efforts Make Big Changes',
            action: '/',
            bgImg: 'russia-ukraine-war.jpg',
        },
        {
            id: 3,
            smallText: 'Help people 3',
            title: 'Little Efforts Make Big Changes',
            action: '/',
            bgImg: 'russia-ukraine-war.jpg',
        },
    ]

    let [Slides, setSlides] = useState([])

    useEffect(() => {
        let arr = slides.map((slide) => {
            return <Slide key={slide.id} slide={slide} />
        })
        setSlides(arr)
    }, [])

    

    return (
        <div className="TopBanner">
            <MuiSimpleSlider
                myclass={'TopBanner_slider'}
                slides={Slides}
            />
        </div>
    )
}