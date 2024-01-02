import { useState, useEffect } from 'react';
import axios from 'axios';

const use_Get_News = (id) => {
  const [data, setData] = useState({ news: null, popularNews: [], latestNews: [], relatedNews: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:9999/news/${id}`)
      .then(response => {
        setData({
          news: response.data.news,
          popularNews: response.data.popularNews,
          latestNews: response.data.latestNews,
          relatedNews : response.data.relatedNews
        });
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  return { data, loading, error };
};

export default use_Get_News
