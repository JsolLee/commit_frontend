import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import { use_Get_News, use_Get_Category} from './Main/hooks/use_Get_API'

// Component
import News from './Main/JS/News'
import News_View from './View/News_View'
import News_Category from './List/News_Category'

const News_main = () => {

  const { category, id } = useParams()

   // 로그 추가: useParams 값 확인
   console.log('useParams:', { category, id })

  const {
    topNews, 
    listNews,
    latestNews: categoryLatestNews, 
    popularNews: categoryPopularNews, 
    loading: categoryLoading, 
    error: categoryError 
  } = use_Get_Category(category || '')

  const { 
    news,
    relatedNews,
    latestNews: newsLatestNews, 
    popularNews: newsPopularNews, 
    loading: newsLoading, 
    error: newsError 
  } = use_Get_News(id || '')

    // 로그 추가: API 호출 결과 확인
    console.log('API Results:', { 
      topNews, 
      listNews, 
      categoryLatestNews, 
      categoryPopularNews, 
      news, 
      relatedNews, 
      newsLatestNews, 
      newsPopularNews 
    });

  if (categoryLoading || newsLoading) return <div>Loading...</div>
  if (categoryError) return <div>Error fetching news: {categoryError.message}</div>
  if (newsError) return <div>Error fetching news: {newsError.message}</div>
  if (!listNews || (!news && id)) return <div>No data found</div>

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
        <Route path="/news/article/:id" element=
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
