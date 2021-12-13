import React from 'react';
import SearchVideo from './SearchVideo';

class App extends React.Component{
    render(){
        return(<div className='container border-rounded'>
                    <style>{`body{background-color: #74b9ff}`}</style>
                    <SearchVideo />
                </div>)
    }
}

export default App;