import React, {useState} from "react";
import Cards from "./Cards";


const App = () => {
    const [card, setCard] = useState(null);
    console.log(card);
    return ( <div className="container">
        <Cards />
        <div className="container">
                <button className="btn btn-secondary" type="button" onClick={() => setCard(card - 1)}>Previous</button>
                
                <button className="btn btn-primary me-md-2 float-end" type="button" onClick={() => setCard(card + 1)}>Next</button>
        </div>
        </div> );
}
 
export default App;