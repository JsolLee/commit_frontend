import React from 'react'

import Footer_main from './footer/components/Footer_main'
//import Footer_main_member from './footer/components/Footer_main_member'
import Footer_category from './footer/components/Footer_category'
import Footer_popular from './footer/components/Footer_popular'
import Footer_info from './footer/components/Footer_info'

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
