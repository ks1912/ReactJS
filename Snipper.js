import React from 'react';

const Snipper = (props) => {
    return (<div className="container">
                <div className="d-flex align-items-center">
                    <strong>{props.text}<i className="bi bi-pin-map-fill"></i></strong>
                    <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                </div>
                <div className="progress">
                    <div className="progress-bar bg-info" role="progressbar" style={{width: "80%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        Loading...
                    </div>
                </div>
            </div>)
}

Snipper.defaultProps = {
    text:"Loading"
}
 
export default Snipper;