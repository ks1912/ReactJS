import React from 'react';
import ReactDom  from 'react-dom';
import LocationFetched from './LocationFetched';

const Session = (props) => {
    return (<div><LocationFetched />
        
        </div>
        );
}
 
// export default Session;

// class Session extends React.Component {
//     state = { lat: null, errorMessage: ""}
//     contentRendering(){
//         if (this.state.errorMessage && !this.state.lat) {
//             return (<div className="container text-center">
//                         <div className="card border-0">
//                           <h5 className="card-header">Location Not Fetched</h5>
//                           <div className="card-body bg-warning rounded-pill">
//                             <div className="card-title text-bold">Your Location is not fetched properly</div>
//                             <div className="card-text text-danger">We are not able to know your location because of {this.state.errorMessage}</div>
//                           </div>
//                         </div>
//                     </div>
                
//             );
//         }
//         if (!this.state.errorMessage && this.state.lat) {
//             return (<div className="container b-0 text-center">
//                         <div className="card border-0">
//                           <h5 className="card-header">Location Fetched</h5>
//                           <div className="card-body bg-success rounded-pill">
//                             <div className="card-title">Your location is : {this.state.lat}</div>
//                           </div>
//                         </div>
//                 </div>
//             );
//         }
//         return (<Snipper text="Your location is being fetched please wait"/>);
//     }
//     render() { 
//         window.navigator.geolocation.getCurrentPosition(
//             (position) => this.setState({ lat: position.coords.latitude}),
//             (err) => this.setState({ errorMessage:err.message })
//         );
//     return (
//             <div className="container-lg">
//                 <div style={{height: '200px'}}></div>
//                 <div className="container-lg">
//                     {this.contentRendering()}
//                 </div>
//             </div>
//         );
//     }
// }
 
ReactDom.render(<Session />,document.querySelector("#root"));

