import React from 'react'
// NESTED MAP and Map to read Nested Json and Json objects
const Map = (props) => {
    const innerArray = (item) => {
        return(item.details.map(detail => {
            return(<div key={detail.conId}>
                    <span className="badge rounded-pill bg-success">{detail.to}</span>
                    <span className="badge rounded-pill bg-success">{detail.from}</span>
                </div>)
        }))
    }
    return ( <div>
        {props.items.map(item => {
            return(
                <div className="container" key={item.id}>
                    <div className="row">
                        <div className="col-md-3">
                            <span className="badge rounded-pill bg-primary">{item.id}</span>
                        </div>
                        
                        <div className="col-md-3">
                            <span className="badge rounded-pill bg-secondary">{item.content}</span>
                        </div>
                        
                        <div className="col-md-3">
                            <span className="badge rounded-pill bg-success">{innerArray(item)}</span>
                            
                        </div>
                    </div>
                </div>
            )
        })}
        </div> );
}
 
export default Map;