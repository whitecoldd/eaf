import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Breadcrumbs from '../../components/ui/breadcrumbs/Breadcrumbs'
import MuiPagination from '../../components/ui/pagination/Pagination'
import { getUpcomingEvents, useCurrentPagePosts } from '../../functions/helpers'
import EventsCard from '../main/events/eventsCard/EventsCard'
import "./events.scss"

export default function Events() {

    let breadcrumbsItems = [
        {
            slug: '/',
            title: 'Home',
        },
        {
            slug: '/events',
            title: 'Events',
        },
    ]

    let events = useSelector((state) => state.globalReducer.events)

    let [sortedEvents, setsortedEvents] = useState([...getUpcomingEvents(events, 'eventStart')])

    // Индекс текущей страницы
    let [currentPage, setcurrentPage] = useState(1)
    // Количество элементов на страницу
    let [ItemsPerPage, setItemsPerPage] = useState(6)
    // Количество страниц
    let [pagesCount, setpagesCount] = useState(0)

    // Рассчитывает количество страниц
    useEffect(() => {
        setpagesCount(Math.ceil(getUpcomingEvents(events, 'eventStart').length / ItemsPerPage))
    }, [events])

    let [paginationItems] = useCurrentPagePosts(currentPage, ItemsPerPage, sortedEvents)

    let customPagesStyles = {
        '& .MuiPagination-ul': {
            gap: '0.9375vw'
        },
        '& .MuiPaginationItem-root.MuiPaginationItem-page': {
            width: '2.0833333333vw',
            height: '2.0833333333vw',
            backgroundColor: '#B1B2B3',
            borderRadius: '50%',
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '1.0416666667vw',
            lineHeight: '1.25vw',
            textAlign: 'center',
            color: '#FFFFFF',
            /* margin: '0 0.27778vw', */
            cursor: 'pointer',
            transition: '0.3s',
        },

        '& .MuiPaginationItem-root.MuiPaginationItem-page.Mui-selected': {
            backgroundColor: '#0AABC1',
            color: '#fff',
        },
        '& .MuiPaginationItem-root.MuiPaginationItem-previousNext': {

            width: '2.0833333333vw',
            height: '2.0833333333vw',
            backgroundColor: '#b1b2b36e',
            borderRadius: '50%',

            '& .MuiSvgIcon-root': {
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                fill: '#fff',
            }
        }
    }

    return (
        <main className="main">
            <Breadcrumbs items={breadcrumbsItems} />
            <div className="Events_w">
                <div className="Events_bgText">Our Events</div>
                <h4>upcoming events</h4>
                <h3>Our Events</h3>
                <div className="EventsPage_content">
                    {paginationItems.map((event) => {
                        return <EventsCard key={event.id} small={false} event={event} />
                    })}
                </div>
                {(paginationItems.length > 0) &&
                    <MuiPagination
                        pagesCount={pagesCount}
                        setPage={setcurrentPage}
                        sx={customPagesStyles}
                    />
                }
            </div>
        </main>
    )
}