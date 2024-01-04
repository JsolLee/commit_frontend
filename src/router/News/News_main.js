import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { use_Get_News, use_Get_Category} from './Main/hooks/use_Get_API'

// Component
import News from './Main/JS/News'
import News_View from './View/News_View'
import News_Category from './List/News_Category'

const News_main = () => {

  const location = useLocation()
  const pathSegments = location.pathname.split('/')
  const categoryPath = pathSegments[3]
  const newsId = pathSegments[4]

  const { 
    news, 
    popularNews: newsPopularNews, 
    latestNews: newsLatestNews, 
    relatedNews, 
    loading: newsDataLoading, 
    error: newsError 
  } = use_Get_News(newsId)

  const { 
    listNews, 
    popularNews: categoryPopularNews, 
    latestNews: categoryLatestNews, 
    topNews,
    loading: categoryLoading, 
    error: categoryError 
  } = use_Get_Category(categoryPath)

  if (categoryLoading || newsDataLoading) return <div>Loading...</div>
  if (categoryError) return <div>Error fetching news: {categoryError.message}</div>
  if (newsError) return <div>Error fetching news: {newsError.message}</div>
  if (!listNews || (!news && newsId)) return <div>No data found</div>

  return (
    <div>
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/User_check" element={<div />} />
        <Route path="/Name_edit" element={<div />} />
        <Route path="/news/category/:category" element=
          {<News_Category 
            topNews={topNews}
            listNews={listNews}
            latestNews={categoryLatestNews} 
            popularNews={categoryPopularNews} 
          />}
        />
        <Route path="/news/id/:id" element=
          {<News_View 
            news={news}
            relatedNews={relatedNews}
            latestNews={newsLatestNews}  
            popularNews={newsPopularNews}
          />} 
        />
      </Routes>
    </div>
  )
}

export default News_main
