import React from 'react'

// News_Issue : Components
import News_Issue_Main from './components/News_Issue/News_Issue_Main.js'
import News_Issue_List from './components/News_Issue/News_Issue_List.js'
import News_acticle_newest from '../../News/View/news_view/News_acticle_newest.js'
import News_article_popular from '../../News/View/news_view/News_acticle_popular.js'

// Pagination
import Pagination from '../../../components/js/Pagination.js'

const News_Issue = ({ latestNews, popularNews, listNews, topNews }) => {

  return (
    <>
      <div className="container px-4 py-5">
        <News_Issue_Main topNews={topNews}/>
      </div>

      <div className="container my-5">
        <div className="row my-5">
          <News_acticle_newest latestNews={latestNews}/>
          <News_article_popular popularNews={popularNews}/>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row my-5">
          <News_Issue_List listNews={listNews}/>
        </div>
      </div>

      <div>
        <Pagination />
      </div>
    </>
  )
}
export default News_Issue