import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import ShareLinks from '../../components/ShareLinks/ShareLinks'
import Timer from '../../components/Timer/Timer'
import Breadcrumbs from '../../components/ui/breadcrumbs/Breadcrumbs'
import Btn1 from '../../components/ui/btn1/Btn1'
import { getDayMonth, getPostByID, getTimePeriod } from '../../functions/helpers'
import "./singleEvent.scss"

export default function SingleEvent() {

    let params = useParams()

    let events = useSelector((state) => state.globalReducer.events)

    let [currEvent, setCurrEvent] = useState(getPostByID(params.id, events))

    let [breadcrumbsItems, setbreadcrumbsItems] = useState([
        {
            slug: '/',
            title: 'Home',
        },
        {
            slug: '/events',
            title: 'Events',
        },
        {
            slug: '/events/' + currEvent.id,
            title: currEvent.title,
        },
    ])

    return (
        <main className="main">
            <Breadcrumbs items={breadcrumbsItems}/>

            <div className="SingleEvent">
                <div className="SingleEvent_img">
                    <img src={'../img/' + currEvent.img} alt="" />

                    <div className="SingleEvent_timer_w">
                        <Timer
                            timestamp={currEvent.eventStart}
                        />
                        
                        <Btn1 text={'donate now'} func={() => { }} />
                    </div>
                </div>

                <div className="SingleEvent_content_w">
                    <h2>Sending humanitarian aid to Kyiv</h2>
                    <div className="SingleEvent_time">
                        <div className="SingleEvent_date">
                            <span className="num">{getDayMonth(currEvent.eventStart, 'num', false)}</span>
                            <span className="month">{getDayMonth(currEvent.eventStart, 'month', true)}</span>
                        </div>
                        <div className="time">
                            <span className="icon">
                                <svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.4984 0C4.70904 0.0030654 0 4.71197 0 10.5016C0 16.2912 4.70894 21 10.4984 21C16.2879 21 20.9969 16.288 20.9969 10.5016C20.9969 4.71218 16.2879 0.00313901 10.4984 0ZM10.4984 19.7821C5.38362 19.7821 1.22108 15.6194 1.22108 10.5047C1.22108 5.39 5.38372 1.22735 10.4984 1.22422C15.6132 1.22422 19.7758 5.38686 19.7758 10.5016C19.7758 15.6163 15.6131 19.7789 10.4984 19.7821Z" fill="#0AABC1" />
                                    <path d="M11.109 3.28381H9.88831V10.1473C9.88831 10.5836 10.1203 10.9866 10.4987 11.2032L16.4435 14.6365L17.0539 13.5806L11.1086 10.1473L11.109 3.28381Z" fill="#0AABC1" />
                                </svg>
                            </span>
                            <span className="text">{getTimePeriod(currEvent.eventStart, currEvent.eventEnd)}</span>
                        </div>
                    </div>

                    <div className="SingleEvent_content_text">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model.

                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.

                            If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem.

                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model.

                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.

                            If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem.</p>
                    </div>

                    <h2>Event location</h2>

                    <div className="SingleEvent_map">
                        {currEvent.map}
                    </div>

                    <ShareLinks title={currEvent.title} />
                </div>
            </div>
        </main>
    )
}