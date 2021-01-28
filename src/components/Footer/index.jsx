import React, { Fragment } from 'react';


const TheFooter = () => {
    return (
        <Fragment>
            <div className="Footer">
                <div className="Footer-left">
                    <h4>
                        Some Content Here
                    </h4>
                    <i className = "Paypal-icon"></i> 
                </div>
                <div className="Footer-right">
                    <h3>
                        And Another <br/> Here
                    </h3>
                </div>
            </div>
            <div className="CopyRight">
                <h3>Software owned by <br/> <span> Noel Rodríguez </span> <br/> &copy; Copyright 2020</h3>
                {/* <img className="Header-img" src={LOGO} alt="" /> */}
            </div>
        </Fragment>
        
    )
} 

export default TheFooter