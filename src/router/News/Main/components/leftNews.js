// React
import React  from 'react';

// Routes
import { Link } from 'react-router-dom'


// BootStrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

// 연습


// CSS
import '../CSS/head.css'

// Images
// 왼쪽 상단 이미지
import image1 from '../../../../asset/news/News_Example.jpeg'

// 왼쪽 하단
// import image2 from '../img/img010.jpeg'

// DB

// 좌측상단 뉴스 Title, Content
// import leftTitle1 form './title/leftTitle01'
// import leftContent1 form './content/leftContent01'

// 좌측하단 뉴스 Title, Content
// import leftTitle2 form './title/leftTitle02'
// import leftContent2 form './content/leftContent02'

function LeftNews() {
    return (
        <div className='left'>
            <div className='left1'>
                <Card style={{ width: '18rem', height: '22rem'}}>
                    <img src={image1} className='img1' />
                    <Card.Body>
                        <Card.Title style={{fontSize : 18}}>좌측 상단 기사제목 1</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card`s content.
                        </Card.Text>
                        <Button variant="primary">
                            <Link to="/News/NewsView" style={{color : 'white'}}>기사 더보기</Link>
                        </Button>
                    </Card.Body>
                </Card>
            </div>
            <div className='left2'>
                <Card style={{ width: '18rem', height: '22rem' }}>
                    <img src={image1} className='img1' />
                    <Card.Body>
                        <Card.Title style={{fontSize : 18}}>좌측 하단 기사제목2</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card`s content.
                        </Card.Text>
                        <Button variant="primary">
                        <Link to="/left2" style={{color : 'white'}}>기사 더보기</Link>
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default LeftNews