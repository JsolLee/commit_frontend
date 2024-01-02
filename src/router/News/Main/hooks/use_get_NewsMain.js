import { useState, useEffect } from 'react';
import axios from 'axios';

const use_Get_NewsMain = (N_IDX) => {
  const [data, setData] = useState(null);
  

  useEffect(() => {
    axios.get(`http://localhost:9999/news/${N_IDX}`)
      .then(response => {
        setData(response.data);
      })
  }, [N_IDX]); // ID가 변경될 때마다 새로운 데이터를 가져옴

  return { data };
};

export default use_Get_NewsMain;
