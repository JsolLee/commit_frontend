import { useState, useEffect } from 'react'
import axios from 'axios'

const use_Get_API = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!url) {
            setData(null)
            setLoading(false)
            setError(null)
        } else {
            setLoading(true)
            axios.get(url)
                .then(response => {
                    setData(response.data)
                    setLoading(false)
                })
                .catch(err => {
                    setError(err)
                    setLoading(false)
                })
        }
    }, [url])

    return { data, loading, error }
}

const use_Get_Category = (category) => {
    const apiUrl = category ? `/news/category/${category}` : null
    const { data, loading, error } = apiUrl ? use_Get_API(apiUrl) : { data: null, loading: false, error: null }
    
    
    const topNews = data ? data.topNews : null
    const listNews = data ? data.listNews : []
    const latestNews = data ? data.latestNews : []
    const popularNews = data ? data.popularNews : []

    return { popularNews, latestNews, listNews, topNews, loading, error }
}

const use_Get_News = (id) => {
    const apiUrl = id ? `/news/article/${id}` : null
    const { data, loading, error } = apiUrl ? use_Get_API(apiUrl) : { data: null, loading: false, error: null }
    
    const news = data ? data.news : null
    const latestNews = data ? data.latestNews : []
    const popularNews = data ? data.popularNews : []
    const relatedNews = data ? data.relatedNews : []

    return { news, popularNews, latestNews, relatedNews, loading, error }
}

export {use_Get_Category, use_Get_News}
