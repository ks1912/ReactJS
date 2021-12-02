import React, {useState} from 'react';

const Cards = (props) => {
  const [idCard, setIdCard] = useState(null);
  const cardToDisplay = (props) => {
    console.log(idCard);
    if (idCard === 1){
      return( <div className="container text-center" style={{paddingTop: '12%'}}>
                <div className="card text-dark bg-success mb-3">
                  <div className="card-header">Answer</div>
                  <div className="card-body">
                    <h5 className="card-title">Feuji is in India, USA and Costa Rica.</h5>
                    <p className="card-text">Mr. Manohar Reddy Sir is Feuji CEO.</p>
                    <button className="btn btn-warning me-md-2 float-end" type="button" onClick={() => setIdCard(idCard -1)}>Show Question</button>
                  </div>
                </div>
              </div> );
    }
    else {
      return( <div className="container text-center" style={{paddingTop: '12%'}}>
                <div className="card text-dark bg-info mb-3">
                  <div className="card-header">Question</div>
                  <div className="card-body">
                    <h5 className="card-title">Where is Feuji?</h5>
                    <p className="card-text">Feuji is in Hyderabad.</p>
                    <button className="btn btn-success me-md-2 float-end" type="button" onClick={() => setIdCard(idCard +1)}>Show Answer</button>
                  </div>
                </div>
              </div> );
    }
  };
  return(<div>
    {cardToDisplay(props)}
    </div>)
}
 
export default Cards;