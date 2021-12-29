import React from 'react';
import Accordian from './Accordian';

const items = [
    {head: "content 1", body: "Body of Content 1"},
    {head: "content 2", body: "Body of Content 2"},
    {head: "content 3", body: "Body of Content 3"},
    {head: "content 4", body: "Body of Content 4"}
]

const App = () => {
    return ( <div>
        <Accordian items={items}/>
        </div> );
}
 
export default App;