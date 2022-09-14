import React from 'react'
import "./causesCard.scss"

import Btn1 from '../../components/ui/btn1/Btn1'
import Btn2 from '../../components/ui/btn2/Btn2'
import { getCuttedString, getRaisedIndex } from '../../functions/helpers'
import { Link } from 'react-router-dom'

export default function CausesCard({ cause }) {

    return (
        <div className="Causes_card">
            <div className="Causes_card_img">
                <img src={'./img/' + cause.img} alt="" />
            </div>
            <div className="Causes_card_donateBtn">
                <Btn1 text={'donate now'} func={() => { }} />
            </div>
            <div className="Causes_card_content">
                <h4>{cause.title}</h4>
                <div className="text">
                    <p>{getCuttedString(cause.text, 130)}</p>
                </div>
                <div className="slider">
                    <span className="range">
                        <span className="raised" style={{ width: getRaisedIndex(cause.goal, cause.raised) * 377}}></span>
                        <div className="thumb"><span>{(getRaisedIndex(cause.goal, cause.raised) * 100).toFixed()}%</span></div>
                    </span>
                </div>
                <Link to={'/causes/' + cause.id}>
                    <Btn2 text={'Read More'} func={() => { }} />
                </Link>
            </div>
            <div className="Causes_card_bottom">
                <div className="item">
                    <span className="left">Raised:</span>
                    <span className="right">${cause.raised}</span>
                </div>
                <div className="item">
                    <span className="left">Goal:</span>
                    <span className="right">${cause.goal}</span>
                </div>
            </div>
        </div>
    )
}