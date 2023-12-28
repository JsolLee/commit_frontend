import React from 'react';

// Routes


// React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import LeftNews from './Main/JS/leftNews'
import MiddleNews from './Main/JS/middleNews';
import RightNews from './Main/JS/rightNews';
import Category from './Main/JS/category';



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
