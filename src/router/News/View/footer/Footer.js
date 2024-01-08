
/*
* 기능 : 비회원 => Footer_main // 회원 => Footer_main_member로 전환할 수 있도록
*/

import React from 'react'

import Footer_main from './components/Footer_main'
//import Footer_main_member from './components/Footer_main_member'
import Footer_category from './components/Footer_category'
import Footer_popular from './components/Footer_popular'
import Footer_info from './components/Footer_info'

const Footer = () => {

    return (
        <div className="container-fluid py-3">
            <div className="container">
                <Footer_main /> 
                {/* <Footer_main_member /> */}
                <hr />

                <div className="col-12">
                    <div className="row justify-content-start">
                        <Footer_category />
                        <Footer_popular />
                    </div>
                </div>

                <div className="row mt-3">
                    <Footer_info />
                </div>
            </div>
        </div>
    )
}

export default Footer