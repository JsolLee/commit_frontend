import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown, Form, Button } from 'react-bootstrap';
// import { AgGridReact } from 'ag-grid-react';
// import "ag-grid-community/styles/ag-grid.css"; // Core CSS
// import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import Pagination from '../../components/js/Pagination';
import "./Job.css";
import { Link } from 'react-router-dom';

const Job = () => {
  const degree = ['학력 무관', '고졸', '초대졸', '대졸', '대학원 이상'];
  const career = ['신입', '3~5년', '5년 이상'];
  const loc = ['서울', '경기', '인천'];
  const sort = ['등록일순', '마감일순'];

  const [data, setData] = useState([
    { companyname: '' },
    { title: '' },
    { career: '' },
    { degree: '' },
    { location: '' },
    { finishDate: '' }
  ]);

  useEffect(() => {
    axios.get('/Job')
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <div>
      {/* RECRUIT 배경이미지 */}
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
          <h1 className="display-2 text-white fw-bold mb-4 animated slideInDown">RECRUIT</h1>
        </div>
      </div>
      <div className="main-container">
        {/* 조건선택 : 경력 급여 근무지역 학력 검색버튼  */}
        <div className="filter-container">
          <div className="filter-wrap">
            <Navbar expand="lg" className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <a className="navbar-brand">조건 검색</a>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Container>
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <div className="filter-container-wrap navbar-nav">
                        <NavDropdown title="학력" id="basic-nav-dropdown" data-bs-theme="light">
                          {
                            degree.map((degree) => (
                              <div key={`${degree}`} className="mb-3">
                                <Form.Check // prettier-ignore
                                  type={`checkbox`}
                                  id={`${degree}`}
                                  label={`${degree}`}
                                />
                              </div>
                            ))
                          }
                        </NavDropdown>

                        <NavDropdown title="경력" id="basic-nav-dropdown" data-bs-theme="light">
                          {
                            career.map((career) => (
                              <div key={`${career}`} className="mb-3">
                                <Form.Check // prettier-ignore
                                  type={`checkbox`}
                                  id={`${career}`}
                                  label={`${career}`}
                                />
                              </div>
                            ))
                          }
                        </NavDropdown>
                        <NavDropdown title="지역" id="basic-nav-dropdown" data-bs-theme="light">
                          {
                            loc.map((loc) => (
                              <div key={`${loc}`} className="mb-3">
                                <Form.Check // prettier-ignore
                                  type={`checkbox`}
                                  id={`${loc}`}
                                  label={`${loc}`}
                                />
                              </div>
                            ))
                          }
                        </NavDropdown>
                        <NavDropdown title="정렬" id="basic-nav-dropdown" data-bs-theme="light">
                          {
                            sort.map((sort) => (
                              <div key={`${sort}`} className="mb-3">
                                <Form.Check // prettier-ignore
                                  type={`radio`}
                                  id={`${sort}`}
                                  name='sort'
                                  label={`${sort}`}
                                />
                              </div>
                            ))
                          }
                        </NavDropdown>
                      </div>
                      <div className="d-flex">
                        <Form.Control
                          className="form-control me-2"
                          placeholder="Search"
                          aria-label="Search"
                          aria-describedby="basic-addon1"
                        />
                        <Button variant="outline-success" type="submit">검색</Button>
                      </div>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </div>
            </Navbar>
          </div>
        </div>
        {/* 채용 공고 리스트 : jsp 이용해서 목록 리스트로 가져옴 */}
        <div className="job-list">
          <ul className="list-group list-group-flush">
            {data.map((lists) => (
              <li key={`${lists}`}className="list-group-item list-group-li">
                {<div className="list-group-company"><a>{lists.companyname}</a></div>}
                {<div className="list-group-title"><Link to={'/JobView'}>{lists.title}</Link></div>}
                {<div className="list-group-conditions">
                  <a>{lists.degree}</a>
                  <a>{lists.career}</a>
                  <a>{lists.location}</a>
                </div>}
                {<div className="list-group-upToDate"><a>{lists.finishDate}</a></div>}
              </li>
            ))
            }
          </ul>
        </div>
      </div>
      <Pagination />
    </div>
  );
}

export default Job;