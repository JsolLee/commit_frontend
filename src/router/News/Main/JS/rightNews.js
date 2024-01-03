import React from 'react';

// Routes
import { Link } from 'react-router-dom'

// BootStrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

// CSS
import '../CSS/head.css'

// Images
// 우측 상단 이미지
import image1 from '../../../../asset/news/News_Example.jpeg'

// 우측 하단 이미지
// import image2 from '../img/img010.jpeg'

// DB

// 우측상단 뉴스 Title, Content
// import rightTitle1 form './title/rightTitle01'
// import rightContent1 form './content/rightContent01'

// 우측하단 뉴스 Title, Content
// import rightTitle2 form './title/rightTitle02'
// import rightContent2 form './content/rightContent02'

function rightNews() {
    return (
        <div className='right'>
            <div className='right1'>
                <Card style={{ width: '18rem', height: '22rem' }}>
                    <img src={image1} className='img1' />
                    <Card.Body>
                        <Card.Title style={{fontSize : 18}}>우측 상단 기사제목</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card`s content.
                        </Card.Text>
                        <Button variant="primary">
                            <Link to="/right1" style={{ color: 'white' }}>기사 더보기</Link>
                        </Button>
                    </Card.Body>
                </Card>
            </div>
            <div className='right2'>
                <Card style={{ width: '18rem', height: '22rem' }}>
                    <img src={image1} className='img1' />
                    <Card.Body>
                        <Card.Title style={{fontSize : 18}}>우측 하단 기사제목</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card`s content.
                        </Card.Text>
                        <Button variant="primary">
                            <Link to="/right2" style={{ color: 'white' }}>기사 더보기</Link>
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default rightNews