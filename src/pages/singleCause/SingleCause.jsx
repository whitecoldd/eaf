import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import ShareLinks from '../../components/ShareLinks/ShareLinks'
import Sidebar from '../../components/sidebar/Sidebar'
import Breadcrumbs from '../../components/ui/breadcrumbs/Breadcrumbs'
import Btn1 from '../../components/ui/btn1/Btn1'
import MuiAccordion from '../../components/ui/MuiAccordion/Accordion'
import { getDateByTimeStamp, getPostByID, getRaisedIndex } from '../../functions/helpers'
import "./singleCause.scss"

export default function SingleCause() {

    let params = useParams()

    let causes = useSelector((state) => state.globalReducer.causes)
    let causesCategs = useSelector((state) => state.globalReducer.causesCategories)

    let [currCause, setcurrCause] = useState(getPostByID(params.id, causes))

    let [breadcrumbsItems, setbreadcrumbsItems] = useState([
        {
            slug: '/',
            title: 'Home',
        },
        {
            slug: '/causes',
            title: 'Causes',
        },
        {
            slug: '/causes/' + currCause.id,
            title: currCause.title,
        },
    ])

    useEffect(() => {
        let post = getPostByID(params.id, causes)
        setcurrCause(post)
        setbreadcrumbsItems([
            {
                slug: '/',
                title: 'Home',
            },
            {
                slug: '/causes',
                title: 'Causes',
            },
            {
                slug: '/causes/' + post.id,
                title: post.title,
            },
        ])
    }, [params.id])

    let questions = currCause.content.filter((item) => {
        if (item.type == 'question') {
            return true
        }
    })

    return (
        <main className="main">
            <Breadcrumbs items={breadcrumbsItems} />

            <div className="SingleCause_w">
                <div className="SingleCause_content_w">
                    
                    <div className="SingleCause_content_img">
                        <img src={'../img/' + currCause.img} alt="" />
                    </div>
                    <div className="slider">
                        <span className="range">
                            <span className="raised" style={{ width: getRaisedIndex(currCause.goal, currCause.raised) * 924 }}></span>
                            <div className="thumb"><span>{(getRaisedIndex(currCause.goal, currCause.raised) * 100).toFixed()}%</span></div>
                        </span>
                    </div>
                    <h1>{currCause.title}</h1>
                    <div className="SingleCause_content_details">
                        <div className="left">
                            <div className="item">
                                <span className="left">Goal:</span>
                                <span className="right">${currCause.goal}</span>
                            </div>
                            <div className="item">
                                <span className="left">Raised:</span>
                                <span className="right">${currCause.raised}</span>
                            </div>
                            <div className="item">
                                <span className="left">Supporter:</span>
                                <span className="right">${currCause.supporter}</span>
                            </div>
                            <div className="item">
                                <span className="left">Donators:</span>
                                <span className="right">${currCause.donators}</span>
                            </div>
                        </div>

                        <Btn1 text={'donate now'} />
                    </div>

                    <div className="SingleCause_content">
                        <h3>About this cause</h3>
                        {currCause.content.map((item, i) => {
                            if (item.type == 'text') {
                                return (
                                    <div key={i} className="text">
                                        {item.text}
                                    </div>
                                )
                            } else if (item.type == 'img') {
                                return (
                                    <div key={i} className="imgs">
                                        {item.imgs.map((img, i) => {
                                            return <img key={i} src={'../img/' + img} />
                                        })}
                                    </div>
                                )
                            }
                        })}
                        <div className="SingleCause_content_accordeon">
                            <MuiAccordion
                                sx={{
                                    width: '100%',
                                    backgroundColor: '#F0F0F0 !important',
                                    marginBottom: '20px',
                                    boxShadow: 0,
                                    borderRadius: '20px !important',

                                    '& .MuiAccordionSummary-expandIconWrapper': {
                                        width: '30px',
                                        height: '30px',
                                        color: '#0AABC1',

                                        '& .MuiSvgIcon-root': {
                                            width: '100%',
                                            height: '100%',
                                        }
                                    },
                                }}
                                rows={questions}
                            />
                        </div>
                    </div>

                    <ShareLinks title={currCause.title} />
                </div>

                <Sidebar
                    news={causes}
                    categs={causesCategs}
                    page={'causes'}
                />
            </div>
        </main>
    )
}