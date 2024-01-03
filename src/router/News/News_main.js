import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

// hooks
import use_Get_Category from './Main/hooks/use_Get_Category'
import use_Get_News from './Main/hooks/use_Get_News'

// Main
import News from './Main/JS/News'

// View
import NewsView from './View/NewsView'

// List
import News_Conference from './List/News_Conference'
import News_Company from './List/News_Company'
import News_Issue from './List/News_Issue'


const News_main = () => {

  const location = useLocation();
  const pathSegments = location.pathname.split('/');
  const category = pathSegments[2];

  const { data: cartegoryDate, loading: categoryLoading, error: categoryError } = use_Get_Category(category)
  const { data: newsData, loading: newsDataLoading, error: newsError } = use_Get_News(7)

  if (categoryLoading || newsDataLoading) return <div>Loading...</div>
  if (categoryError) return <div>Error fetching news: {categoryError.message}</div>
  if (newsError) return <div>Error fetching news: {newsError.message}</div>
  if (!cartegoryDate || !newsData) return <div>No data found</div>

  const { popularNews, latestNews } = newsData

  return (

    <div>
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/User_check" element />
        <Route path="/Name_edit" element />

        <Route path="IT" element=
          {<News_Issue
            listNews={cartegoryDate.listNews}
            topNews={cartegoryDate.topNews}
            popularNews={popularNews}
            latestNews={latestNews}
          />}
        />
        <Route path="Company" element=
          {<News_Company
            listNews={cartegoryDate.listNews}
            topNews={cartegoryDate.topNews}
            popularNews={popularNews}
            latestNews={latestNews}
          />}
        />
        <Route path="Conference" element=
          {<News_Conference
            listNews={cartegoryDate.listNews}
            topNews={cartegoryDate.topNews}
            popularNews={popularNews}
            latestNews={latestNews}
          />}
        />

        <Route path="NewsView" element={< NewsView />} />
      </Routes>
    </div>
  )
}

export default News_main