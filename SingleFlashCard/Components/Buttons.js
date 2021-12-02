import React from 'react';

const Buttons = (props) => {
    return ( <div className="container">
                <button className="btn btn-secondary" type="button">Previous</button>
                <button className="btn btn-primary me-md-2 float-end" type="button">Next</button>
                <button className="btn btn-success me-md-2 float-end" type="button">Show Answer</button>
            </div> );
}
 
export default Buttons;