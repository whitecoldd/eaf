import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CausesCard from '../../components/CausesCard/CausesCard'
import Sidebar from '../../components/sidebar/Sidebar'
import Breadcrumbs from '../../components/ui/breadcrumbs/Breadcrumbs'
import MuiPagination from '../../components/ui/pagination/Pagination'
import { getLatestNews, getNewsByCategory, getSearchedNews, useCurrentPagePosts } from '../../functions/helpers'
import "./causes.scss"

export default function Causes({ searchQuery, setsearchQuery }) {

    let breadcrumbsItems = [
        {
            slug: '/',
            title: 'Home',
        },
        {
            slug: '/causes',
            title: 'Causes',
        },
    ]

    let filter = useSelector((state) => state.globalReducer.selectedNewsCategs)

    let causes = useSelector((state) => state.globalReducer.causes)
    let causesCategs = useSelector((state) => state.globalReducer.causesCategories)

    let [sortedFilteredNews, setsortedFilteredNews] = useState([])

    useEffect(() => {
        setsortedFilteredNews([...getNewsByCategory(getSearchedNews(causes, searchQuery), filter)])
    }, [filter, searchQuery, causes])

    // Индекс текущей страницы
    let [currentPage, setcurrentPage] = useState(1)
    // Количество элементов на страницу
    let [ItemsPerPage, setItemsPerPage] = useState(2)
    // Количество страниц
    let [pagesCount, setpagesCount] = useState(0)

    // Рассчитывает количество страниц
    useEffect(() => {
        setpagesCount(Math.ceil(getNewsByCategory(getSearchedNews(causes, searchQuery), filter).length / ItemsPerPage))
        setsearchQuery('')
    }, [causes])

    let [paginationItems] = useCurrentPagePosts(currentPage, ItemsPerPage, sortedFilteredNews)

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
            <div className="Causes_w">
                <div className="Causes_bgText">Popular causes</div>
                <h4>our causes</h4>
                <h3>Сauses</h3>
                <div className="CausesPage_2cols">
                    <div className="CausesPage_content">
                        {(paginationItems.length > 0) ?
                            paginationItems.map((item) => {
                                return <CausesCard key={item.id} cause={item} />
                            })
                            :
                            <div className="CausesPage_content_noPosts">There is no causes</div>
                        }
                    </div>
                    <Sidebar
                        news={causes}
                        categs={causesCategs}
                        setsearchQuery={setsearchQuery}
                        page={'causes'}
                    />
                </div>
                {(sortedFilteredNews.length > ItemsPerPage) &&
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