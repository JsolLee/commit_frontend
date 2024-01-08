// React
import React, { useState, useEffect } from 'react';

// Routes
import { Link } from 'react-router-dom'

// axios
import axios from 'axios';

// BootStrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

// CSS
import '../CSS/head.css'


function LeftNews() {

    const [data, setData] = useState({
        id: '',
        category: '',
        title: '',
        subtitle: '',
        content: '',
        origin: '',
        image: '',
        writer: '',
        viewcount: '',
        likecount: '',
        originDate: '',
        createDate: '',
        deleteYN: ''
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`/news`);
                setData(response.data);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading) return <div>데이터를 로딩 중입니다...</div>;
    if (error) return <div>데이터 로딩 중 에러가 발생했습니다.</div>;
    if (!data) return null;

    return (
        <div className='left'>
            <div className='left1'>
                <Card style={{ width: '18rem', height: '380px' }}>
                    <img src={data[3].image} className='img1' style={{ width: '286.4px', height: '168.38px' }} />
                    <Card.Body>
                        <Card.Title style={{
                            fontSize: 18,
                            display: '-webkit-box',
                            WebkitLineClamp: '3',
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            lineHeight: '1.5rem', // 원하는 줄 간격으로 조정해주세요
                            '-webkit-box-orient': 'vertical', // 줄 바꿈이 발생할 때 "..."이 생기는 문제를 해결하기 위한 추가 스타일
                            '-webkit-line-clamp': '2'
                        }}><div>{data[3].title}</div></Card.Title>
                        <Card.Text style={{
                            display: '-webkit-box',
                            WebkitLineClamp: '3',
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            lineHeight: '1.5rem', // 원하는 줄 간격으로 조정해주세요
                            '-webkit-box-orient': 'vertical', // 줄 바꿈이 발생할 때 "..."이 생기는 문제를 해결하기 위한 추가 스타일
                            '-webkit-line-clamp': '3' // 줄 바꿈이 발생할 때 "..."이 생기는 문제를 해결하기 위한 추가 스타일
                        }}>
                            {data[3].subtitle}<br />
                            줄은 최대 3줄이고  ㅇㅇㅇㅇㅇㅇ더 넘어가면 ... 처리ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
                        </Card.Text>
                        <Button variant="primary">
                            <Link to={`/news/article/${data[3].id}`} style={{ color: 'white' }}>기사 더보기</Link>
                        </Button>
                    </Card.Body>
                </Card>
            </div>
            <div className='left2'>
                <Card style={{ width: '18rem', height: '380px' }}>
                    <img src={data[4].image} className='img1' style={{ width: '286.4px', height: '168.38px' }} />
                    <Card.Body>
                        <Card.Title style={{
                            fontSize: 18,
                            display: '-webkit-box',
                            WebkitLineClamp: '3',
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            lineHeight: '1.5rem', // 원하는 줄 간격으로 조정해주세요
                            '-webkit-box-orient': 'vertical', // 줄 바꿈이 발생할 때 "..."이 생기는 문제를 해결하기 위한 추가 스타일
                            '-webkit-line-clamp': '2'
                        }}>{data[4].title}</Card.Title>
                        <Card.Text style={{
                            display: '-webkit-box',
                            WebkitLineClamp: '3',
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            lineHeight: '1.2rem', // 원하는 줄 간격으로 조정해주세요
                            '-webkit-box-orient': 'vertical', // 줄 바꿈이 발생할 때 "..."이 생기는 문제를 해결하기 위한 추가 스타일
                            '-webkit-line-clamp': '3' // 줄 바꿈이 발생할 때 "..."이 생기는 문제를 해결하기 위한 추가 스타일

                        }}>
                            {data[4].subtitle}
                        </Card.Text>
                        <Button variant="primary">
                            <Link to={`/news/article/${data[4].id}`} style={{ color: 'white' }}>기사 더보기</Link>
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default LeftNews