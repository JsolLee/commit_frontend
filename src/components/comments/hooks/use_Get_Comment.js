import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

const use_Get_Comment = (newsId) => {
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const refetchComments = useCallback(async () => {
        try {
            const response = await axios.get(`/news/${newsId}/comments`)
            setComments(response.data)
            setLoading(false)
        } catch (err) {
            console.error('Error fetching comments:', err)
            setError(err)
            setLoading(false)
        }
    }, [newsId])

    useEffect(() => {
        refetchComments()
    }, [refetchComments, newsId])

    return { comments, loading, error, refetch: refetchComments }
}

export default use_Get_Comment
