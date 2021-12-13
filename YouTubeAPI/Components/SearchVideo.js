import React from 'react';
// import axios from 'axios';

const channelId = 'UCXgGY0wkgOzynnHvSEVmE3A';
const maxResults = 5;
const baseURL = 'https://www.googleapis.com/youtube/v3/search?';
const key = 'AIzaSyCq-YatXEexWICEq6jgeO7mQe51SLvvJJI';

const url = `${baseURL}key=${key}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`

class SearchVideo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            resYt : []
        };
        this.clicked = this.clicked.bind(this);
    }
    async clicked(){
        // const respData =await axios.get(url);
        // console.log(respData)  
        // USING FETCH 
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          // console.log(responseJson);
          const resYt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
          this.setState({resYt});
        })
        .catch((error) => {
          console.error(error);
        });
    }
    
    render() { 
        return (<div className='container'>
            <div className='container' style={{marginTop:"5%"}}>
                <div className="container input-group m-2 d-grid gap-2">
                    <button className="btn btn-outline-secondary" type="button" onClick={this.clicked}>Search</button>
                    {this.state.resYt.map((link, index)=> {
                        const frame = <div className='container border-rounded' key={index}><iframe width="100%" height="150px" src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                        return frame;
                    })}
                </div>
                {this.frame}
            </div>
            </div>);
    }
}
 
export default SearchVideo;

// <input type="text" className="form-control" id="floatingInputInvalid" placeholder="Recipient's username" aria-label="Recipient's username with two button addons" />
                    