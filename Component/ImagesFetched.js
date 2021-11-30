import React from 'react';

const renderImage = (props) => {
    if(props.images.length > 0)
    {
        return(<div>
            console.log({props.images.length});
            <img className="ui medium image centered" src={props.images[0].urls.regular} alt={props.images[0]["alt_description"]}/></div>);
    } else {
        return "This is not a valid Search";
    }
};

const ImageFetched = (props) => {
    return (<div className="ui segment">
                {renderImage(props)}
        </div>);
};

export default ImageFetched;