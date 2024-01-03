import { useState, useEffect } from 'react';
import axios from 'axios';

const use_Get_Category = (category) => {
  const [data, setData] = useState({ category: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get(`/news/category/${category}`)
      .then(response => {
        setData({
          category: response.data
        });
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [category]);

  return { data, loading, error };
};

export default use_Get_Category
