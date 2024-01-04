import React from 'react'

// Components
import News_Category_Main from './components/News_Category_Main.js'
import News_Category_List from './components/News_Category_List.js'
import News_acticle_newest from '../../News/View/news_view/News_acticle_newest.js'
import News_article_popular from '../../News/View/news_view/News_acticle_popular.js'

// Pagination
import Pagination from '../../../components/js/Pagination.js'

const News_Category = ({ topNews, listNews, latestNews, popularNews }) => {

    return (
        <>
            <div className="container px-4 py-5">
                <News_Category_Main topNews={topNews} />
            </div>
            <div className="container my-5">
                <div className="row my-5">
                    <News_acticle_newest latestNews={latestNews} />
                    <News_article_popular popularNews={popularNews} />
                </div>
            </div>
            <div className="container mt-4">
                <div className="row my-5">
                    <News_Category_List listNews={listNews} />
                </div>
            </div>
            <Pagination />
        </>
    )
}

export default News_Category
