import React from 'react';
import Snipper from './Snipper';
import FindSessions from "./FindSession";

class LocationFetched extends React.Component {
    
    state = { lat: null, log: null, errorMessage: ""}
    contentRendering(){
        if (this.state.errorMessage && !this.state.lat) {
            return (<div>
                        <style>{'body { background-color:  #77C4FE }'}</style>
                        <div className="container border-0 text-center">
                            <div className="card border-0">
                              <h5 className="card-header border-0">Location Not Fetched</h5>
                              <div className="card-body border-0 bg-warning rounded-pill">
                                <div className="card-title text-bold border-0">Your Location is not fetched properly</div>
                                <div className="card-text text-danger border-0">We are not able to know your location because of {this.state.errorMessage}</div>
                              </div>
                            </div>
                        </div>
                    </div>
            );
        }
        if (!this.state.errorMessage && this.state.lat) {
            return (<div>
                        
                        <div className="container border-0 text-center">
                            <div className="card border-0" style={{ backgroundColor:  '#B8FAFF' }}>
                              <div className="card-body rounded-pill border-0">
                                <div className="card-title border-0"><FindSessions lat={this.state.lat}/></div>
                              </div>
                            </div>
                        </div>
                    </div>
            );
        }
        return (<div><Snipper text="Your location is being fetched please wait"/></div>);
    }
    render() { 
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude}),
            (err) => this.setState({ errorMessage: err.message }),
            (log) => this.setState({ log: log.coords.long })
        );
    return (
            <div className="container-lg">
                <div style={{height: '100px'}}></div>
                <div className="container-lg">
                    {this.contentRendering()}
                </div>
            </div>
        );
    }
}

export default LocationFetched;