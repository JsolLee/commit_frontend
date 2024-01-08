import React from 'react';


// axios


// React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import LeftNews from '../components/leftNews'
import MiddleNews from '../components/middleNews';
import RightNews from '../components/rightNews';
import Category from '../components/category';


function News() {
  return (
    <div>
      <br/>
      <div className='total'>
        <div className='main'>
          <LeftNews />
          <MiddleNews />
          <RightNews />
        </div>
        <Category />
      </div>
      
    </div>

  );
}

export default News;
