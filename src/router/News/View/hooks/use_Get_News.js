import { useState, useEffect } from 'react';
import axios from 'axios';

const use_Get_News = (N_IDX) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:8089/news/${N_IDX}`)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [N_IDX]); // ID가 변경될 때마다 새로운 데이터를 가져옴

  return { data, loading, error };
};

export default use_Get_News;
