import React, { useEffect, useState, componentDidmount } from 'react'
import { useSelector } from 'react-redux'
import Sidebar from '../../components/sidebar/Sidebar'
import Breadcrumbs from '../../components/ui/breadcrumbs/Breadcrumbs'
import MuiPagination from '../../components/ui/pagination/Pagination'
import { getLatestNews, getNewsByCategory, getSearchedNews, useCurrentPagePosts } from '../../functions/helpers'
import NewsCard from '../main/news/NewsCard/NewsCard'
import "./news.scss"

export default function News({ searchQuery, setsearchQuery }) {

    let breadcrumbsItems = [
        {
            slug: '/',
            title: 'Home',
        },
        {
            slug: '/news',
            title: 'News',
        },
    ]

    let filter = useSelector((state) => state.globalReducer.selectedNewsCategs)

    // let [searchQuery, setsearchQuery] = useState('')

    let news = useSelector((state) => state.globalReducer.news)
    let newsCategs = useSelector((state) => state.globalReducer.newsCategories)

    let [sortedFilteredNews, setsortedFilteredNews] = useState([])

    useEffect(() => {
        setsortedFilteredNews([...getLatestNews(getNewsByCategory(getSearchedNews(news, searchQuery), filter), 'newDate')])
    }, [filter, searchQuery, news])

    // Индекс текущей страницы
    let [currentPage, setcurrentPage] = useState(1)
    // Количество элементов на страницу
    let [ItemsPerPage, setItemsPerPage] = useState(6)
    // Количество страниц
    let [pagesCount, setpagesCount] = useState(0)

    // Рассчитывает количество страниц
    useEffect(() => {
        setpagesCount(Math.ceil(getLatestNews(getNewsByCategory(getSearchedNews(news, searchQuery), filter), 'newDate').length / ItemsPerPage))
        setsearchQuery('')
    }, [news])

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
            <div className="News_w">
                <div className="News_bgText">Latest news</div>
                <h4>our blog</h4>
                <h3>Latest news</h3>
                <div className="NewsPage_2cols">
                    <div className="NewsPage_content">
                        {(paginationItems.length > 0) ?
                            paginationItems.map((item) => {
                                return <NewsCard key={item.id} item={item} />
                            })
                            :
                            <div className="NewsPage_content_noPosts">There is no news</div>
                        }
                    </div>

                    <Sidebar
                        news={news}
                        categs={newsCategs}
                        setsearchQuery={setsearchQuery}
                        page={'news'}
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