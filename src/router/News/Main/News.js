import React from 'react';

// axios
import use_Get_NewsMain from './hooks/use_get_NewsMain';

// Routes


// React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import LeftNews from './components/left/leftNews2';
import LeftNews2 from './components/left/leftNews2';

import MiddleNews from './components/middleNews';

import RightNews from './components/right/rightNews';
import RightNews2 from './components/right/rightNews2';

import Category from './components/category';



function News() {

  const { data: newsData1 } = use_Get_NewsMain(4);
  const { data: newsData2 } = use_Get_NewsMain(3);


  if (!newsData1) return <div>No data found</div>;
  if (!newsData2) return <div>No data found</div>;

  return (
    <div>
      <br />
      <div className='total'>
        <div className='main'>
          <div>
            <LeftNews title={newsData1.title} content={newsData1.content} />
            <LeftNews2 title={newsData2.title} content={newsData2.content} />
          </div>
          <MiddleNews />
          <div>
            <RightNews title={newsData1.title} content={newsData1.content}/>
            <RightNews2 title={newsData2.title} content={newsData2.content}/>
          </div>
        </div>
        <Category />
      </div>

    </div>

  );
}

export default News;
