import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Btn2 from '../../../components/ui/btn2/Btn2'
import "./AboutSection.scss"

export default function AboutSection() {

    let [aboutSection, setaboutSection] = useState([
        {
            id: 1,
            images: ['aboutSectionImg1.jpg', 'aboutSectionImg2.jpg'],
            smallTitle: 'mission',
            bigTitle: 'Our mission',
            text: 'We can\'t achieve our goals on our own.We work together with businesses, government, and nonprofits, and each partner plays a specific role in accelerating progress. In many cases, the private and public sectors, acting either separately or together, meet people’s needs.But there are gaps, spaces where some people don’t get what they need to live healthy, productive lives.',
        },
        {
            id: 2,
            video: ['aboutSectionImg1.jpg'],
            text: 'We can\'t achieve our goals on our own.We work together with businesses, government, and nonprofits, and each partner plays a specific role in accelerating progress. In many cases, the private and public sectors, acting either separately or together, meet people’s needs.But there are gaps, spaces where some people don’t get what they need to live healthy, productive lives.',
        },
    ])



    return (
        <div className="AboutSection">
            <div className="AboutSection_bgText">about us</div>
            <div className="AboutSection_images">
                {aboutSection[0].images.map((img, i) => (<img key={i} src={'./img/' + img} alt="" className={"img" + (i + 1)} />))}
            </div>
            <div className="AboutSection_content">
                <h4>about us</h4>
                <h3>{aboutSection[0].bigTitle}</h3>
                <div className="text">
                    <p>{aboutSection[0].text}</p>
                </div>
                <Link to={'/about'}>
                    <Btn2 text={'Read more'} func={() => { }} />
                </Link>
            </div>
        </div>
    )
}