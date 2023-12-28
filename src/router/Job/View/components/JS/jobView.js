import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, ToggleButton, Table, NavDropdown, Badge, Button, Form, Modal, Card, Alert } from 'react-bootstrap';
import { FaRegHeart, FaHeart, FaDiscord, FaInstagram, FaFacebook, FaLink, FaRegStar, FaStar, FaRegCopy, FaCalendar } from 'react-icons/fa';
import { IoWarningOutline, IoShareSocialOutline } from 'react-icons/io5';
import { BsPeopleFill } from 'react-icons/bs';
import "../CSS/jobView.css";

<script type="text/javascript" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=b9db355519fa67ef41f4ffe1d442d564&libraries=services"></script>

const options = {
  center: new window.kakao.maps.LatLng(37.498832, 127.031755),
  level: 3,
};

function jobView() {
  const [followed, setFollowed] = useState(false);
  const [scraped, setScraped] = useState(false);
  const [show, setShow] = useState(false);
  const companyAddressRef = useRef(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCopyLink = () => {
    const currentURL = window.location.href;
    try {
      navigator.clipboard.writeText(currentURL);
      alert('URL이 복사되었습니다.');
    } catch (error) {
      alert('URL 복사에 실패했습니다.');
    }
  };

  const handleFollowToggle = () => {
    setFollowed(!followed);
  };

  const handleScrapToggle = () => {
    setScraped(!scraped);
  };

  const handleCopyAddress = () => {
    const addressText = companyAddressRef.current.innerText.trim();
    if (addressText) {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(addressText)
          .then(() => alert('주소가 복사되었습니다.'))
          .catch((error) => {
            console.error('주소 복사 오류:', error);
            alert('주소 복사에 실패했습니다.');
          });
      } else {
        // navigator.clipboard를 지원하지 않는 브라우저를 위한 대체 방법
        const textarea = document.createElement('textarea');
        textarea.value = addressText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('주소가 복사되었습니다.');
      }
    }
  };

  const container = useRef(null);

  useEffect(() => {
    const map = new window.kakao.maps.Map(container.current, options);

    // 마커 추가
    const markerPosition = new window.kakao.maps.LatLng(37.498832, 127.031755);
    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);
  }, []);

  return (
    <Container fluid>
      <Container className='position-relative my-5'>
        <Row xs='auto' className='text-nowrap align-items-center'>
          <Col>
            <Row className='align-items-center'>
              <Col className='pb-1'>
                <span>(주)진솔</span>
                <ToggleButton
                  className='ms-2'
                  id='toggle-check'
                  type='checkbox'
                  variant='outline-primary'
                  checked={followed}
                  value='follow'
                  onChange={handleFollowToggle}
                  size='sm'
                >
                  {followed ? (
                    <>
                      <FaHeart className='mb-1' /> 팔로잉
                    </>
                  ) : (
                    <>
                      <FaRegHeart className='mb-1' /> 팔로우
                    </>
                  )}
                </ToggleButton>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className='fs-1'>진솔컴퍼니 프론트 개발자 채용</Col>
        </Row>
        <Row xs='auto' className='position-absolute end-0 text-secondary'>
          <Col>
            <BsPeopleFill className='mb-1' /> 조회수 216
          </Col>
          <Col>
            <NavDropdown id='share' title={<><IoShareSocialOutline className='mb-1' id='share' /> 공유</>}>
              <NavDropdown.Item href='#action/3.1'>
                <FaDiscord /> Discord
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                <FaInstagram /> Instagram
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>
                <FaFacebook /> Facebook
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleCopyLink}>
                <FaLink /> 링크 복사
              </NavDropdown.Item>
            </NavDropdown>
          </Col>
          <Col onClick={handleShow} id='report'>
            <IoWarningOutline id='report' className='mb-1' /> 신고
          </Col>
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>
                <IoWarningOutline /> 신고
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                  <Form.Label>신고 사유</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option value="spam">스팸/홍보/도배</option>
                    <option value="illegal">불법 정보</option>
                    <option value="abuse">욕설/비하/혐오/차별</option>
                    <option value="discomfort">불쾌한 내용</option>
                    <option value="porn">음란물</option>
                    <option value="copyright">저작권</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                  <Form.Label>상세 내용</Form.Label>
                  <Form.Control as='textarea' />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={handleClose}>
                취소
              </Button>
              <Button variant='primary' onClick={handleClose}>
                보내기
              </Button>
            </Modal.Footer>
          </Modal>
        </Row>
      </Container>
      <Container fluid id='condition' className='borderless'>
        <Row className='justify-content-md-center border-top border-bottom p-3'>
          <Col md="auto" className='mx-5 my-3'>
            <Table>
              <thead>
                <tr><th className='fs-4 p-1'>지원 자격</th></tr>
              </thead>
              <tbody>
                <tr><td className='p-1 ps-3'>경  력 : 신입</td></tr>
                <tr><td className='p-1 ps-3'>학  력 : 초대졸 이상</td></tr>
                <tr><td className='p-1 ps-3'>핵심역량 : React, Vue, Node</td></tr>
              </tbody>
            </Table>
          </Col>
          <Col md="auto" className='mx-5 my-3'>
            <Table>
              <thead>
                <tr><th className='fs-4 p-1'>근무 조건</th></tr>
              </thead>
              <tbody>
                <tr><td className='p-1 ps-3'>고용형태 : 정규직</td></tr>
                <tr><td className='p-1 ps-3'>급  여 : 면접 후 결정</td></tr>
                <tr>
                  <td className='p-1 ps-3'>
                    지  역 : 서울특별시 강남구 <a href='#Company'><Badge bg="secondary">지도 &gt;</Badge></a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>

      <Container fluid id='condition' className='my-5 d-flex justify-content-md-center'>
        <div className='mx-3 mb-5'>
          <Button variant="primary" size="lg">
            홈페이지 이동 &gt;
          </Button>
        </div>
        <div className='mx-3 mb-5'>
          <Button variant="secondary" size="lg" onClick={handleScrapToggle}>
            {scraped ? <><FaStar className='mb-1' /> Saved </> : <><FaRegStar className='mb-1' /> 스크랩</>}
          </Button>
        </div>
      </Container>

      <div
        className='mb-5'
        style={{
          width: '60%',
          height: '800px',
          backgroundColor: 'rgba(0, 255, 255, 0.2)', // cyan with 30% transparency
          margin: '0 auto', // Center the box
          textAlign: 'center',
        }}
      ></div>

      <Alert key="primary" variant="primary" className='text-center'>
        <FaCalendar className='mb-1' /> 공고 기한 : 2023.12.01 ~ 2023.12.31
      </Alert>


      <Container id='Company' className='my-5 d-flex -content-'>
        <Card style={{ width: '70rem' }}>
          <Card.Body>
            <Row>
              <Card.Title>회사 소개</Card.Title>
            </Row>
            <Row className>
              <Col>
                <Card.Text className='ms-3'>
                  <Row><Col>회  사</Col></Row>
                  <Row className='ms-1'><Col> - 진솔 컴퍼니</Col></Row>
                  <Row><Col>규  모</Col></Row>
                  <Row className='ms-1'><Col> - 중소기업</Col></Row>
                  <Row><Col>email </Col></Row>
                  <Row className='ms-1'><Col> - realBrush@naver.com</Col></Row>
                  <Row><Col>주  소 </Col></Row>
                  <Row className='ms-1'>
                    <Col ref={companyAddressRef}> - 서울특별시 강남구 테헤란로 124 삼원타워 <FaRegCopy onClick={handleCopyAddress} /></Col>
                  </Row>
                </Card.Text>
              </Col>
              <Col className='pb-3 pe-3'>
                <div className="map" style={{ width: "400px", height: "250px" }} ref={container}></div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
      
    </Container>

  );
}

export default jobView;
