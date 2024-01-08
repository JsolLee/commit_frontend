// React
import React, { useState, useEffect } from 'react';

// Routes
import { Link } from 'react-router-dom'

//axios
import axios from 'axios';

// BootStrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

// CSS
import '../CSS/head.css'

function middleNews() {

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
        <div className='middle'>

            <Carousel className='active'>
                <Carousel.Item style={{ border: '1px solid #ced4da' }}>
                    <Link to="/mainNews1">
                        <img src={data[0].image}
                            style={{ width: '768px', height: "430px" }} />
                        <Carousel.Caption>
                            <h3>{data[0].title}</h3>
                            <p>{data[0].subtitle}</p>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>
                <Carousel.Item style={{ border: '1px solid #ced4da' }}>
                    <Link to="/mainNews2">
                        <img src={data[1].image}
                            style={{ width: '768px', height: "430px" }} />
                        <Carousel.Caption>
                            <h3>{data[1].title}</h3>
                            <p>{data[1].subtitle}</p>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>
                <Carousel.Item style={{ border: '1px solid #ced4da' }}>
                    <Link to="/mainNews3">
                        <img src={data[2].image}
                            style={{ width: '768px', height: "430px" }} />
                        <Carousel.Caption style={{ color: 'white' }}>
                            <h3>{data[2].title}</h3>
                            <p>{data[2].subtitle}</p>
                        </Carousel.Caption>

                    </Link>
                </Carousel.Item>
            </Carousel>

            <Carousel interval={9999999}>
                <Carousel.Item>
                    <iframe width="768" height="337"
                        src={"https://www.youtube.com/embed/-8t0MwoNS2Q?si=hdfybiZXr-i4FzyN"}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                        className='video'>
                    </iframe>
                </Carousel.Item>
                <Carousel.Item>
                    <iframe width="768" height="337"
                        src={"https://www.youtube.com/embed/q55z_fh-wNg?si=Bn8U2vilvQXdRXkx"}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                        className='video'>
                    </iframe>
                </Carousel.Item>
                <Carousel.Item>
                    <iframe width="768" height="337"
                        src="https://www.youtube.com/embed/Ev0zck3n-VQ?si=oXNTVNjmc4-jWGKn"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                        className='video'>
                    </iframe>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default middleNews