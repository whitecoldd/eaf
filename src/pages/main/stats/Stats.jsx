import React from 'react'
import "./stats.scss"

import StatsBg from "../../../assets/img/StatsBg.jpg"
import { useSelector } from 'react-redux'

export default function Stats() {

    let stats = useSelector((stats) => stats.globalReducer.stats)

    return (
        <div className="Stats">

            <div className="Stats_header">
                <h4>our statistics</h4>
                <h3>We provide help</h3>
            </div>
            <div className="Stats_w">
                {stats.map((stat) => {
                    return (
                        <div key={stat.id} className="Stats_item">
                            <span className="num">{stat.value}</span>
                            <span className="text">{stat.title}</span>
                        </div>
                    )
                })}
            </div>
            <button className="Stats_volunteer_btn">
                <div className="plus">
                    <svg viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="14" y1="1" x2="14" y2="27" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        <line x1="28" y1="14" x2="1" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </div>
                <span>Become a Volunteer</span>
            </button>
        </div>
    )
}