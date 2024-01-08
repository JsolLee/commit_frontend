import React from 'react'
import { useParams } from 'react-router-dom'
import { use_Get_News, use_Get_Category } from './Main/hooks/use_Get_API'

// Component
import News from './Main/JS/News'
import News_View from './View/News_View'
import News_Category from './List/News_Category'

const News_Main = () => {

  const { category, id } = useParams()

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

  if (categoryLoading || newsLoading) return <div>Loading...</div>
  if (categoryError) return <div>Error fetching category data: {categoryError.message}</div>
  if (newsError) return <div>Error fetching news data: {newsError.message}</div>

  if (category) {
    return (
      <News_Category
        topNews={topNews}
        listNews={listNews}
        latestNews={categoryLatestNews}
        popularNews={categoryPopularNews}
      />
    )
  } else if (id) {
    return (
      <News_View
        news={news}
        relatedNews={relatedNews}
        latestNews={newsLatestNews}
        popularNews={newsPopularNews}
      />
    )
  } else {
    return <News />
  }
}

export default News_Main
