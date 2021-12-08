import React from 'react';
// import axios from "axios";
// import ApiCall from '../API/ApiCall';
import Map from './Map'

const items = [{id: 1, 
                content: 'Kunal', 
                details:[{
                        conId: 101,
                        from: 'Hyderabad', 
                        to: 'Delhi'}]
                },
                {id:2 ,
                content: 'Kuna', 
                details:[{
                        conId: 102,
                        from: 'Hyderabad', 
                        to: 'Delhi'}]
                },
                {id:3 ,
                content: 'Kun', 
                details:[{
                        conId: 103,
                        from: 'Hyderabad', 
                        to: 'Delhi'}]
                },
                {id:4 ,
                content: 'Ku', 
                details:[{
                        conId: 104,
                        from: 'Hyderabad', 
                        to: 'Delhi'}]
                }
            ]
const App = () => {
    return(<div>
        {console.log(items)};
        <Map items={items} />
        </div>)
}

export default App;