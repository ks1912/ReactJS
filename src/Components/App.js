import React,{useState} from 'react';
import SearchBar from './SearchBar';
import ImageDisplay from './ImageDisplay';

const App = () => {
    const [reasults, setReasults] = useState([]);
    return(<div>
        <SearchBar onReasults={reasults} onSetReasults={setReasults} />
        <ImageDisplay reasults={reasults}/>
            </div>)
}

export default App;

// {display()}