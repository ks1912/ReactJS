import React, {useState} from 'react';
import QuesCards from './QuesCards';
import AnsCards from './AnsCards';
// import Buttons from './Buttons';

const PresentCard = (props) => {
  const [idCard, setIdCard] = useState(0);
  const [card, setCard] = useState(0);
  
  const cardToDisplay = (props, item) => {
    if (card === item.id)
    {
      if (idCard === 1){
        return( <div>
                  <style>{`body{background-color: #8AFF8A}`}</style>
                  <AnsCards item={item} />
                  <div className="container m-auto">
                    <button className="btn btn-warning me-md-2 float-start" type="button" onClick={() => setIdCard(idCard - 1)}>Hide Emp Details</button>
                  </div>
                </div> );
      }
      if (idCard === 0) {
        return( <div>
          <style>{`body{background-color: #014182}`}</style>
          <QuesCards item={item} />
          <div className="container">
          <button className="btn btn-success me-md-2 float-end" type="button" onClick={() => setIdCard(idCard + 1)}>Show Emp Details</button>
          </div>
          </div>
          
        );
      }
    };
  };

  const buttonToDisplay = (props, item) => {
    if (idCard === 0) {
      if (card === item.id) {
        if (card === 5) {
          return (<button className="btn btn-secondary" type="button" onClick={() => setCard(card - 1)}>Previous</button>)
        }
        if (card === 0) {
          return (<button className="btn btn-primary me-md-2 float-end" type="button" onClick={() => setCard(card + 1)}>Next</button>)
        }
        if (card !== 0 && card !== 6) {
          return (<div>
            <button className="btn btn-secondary" type="button" onClick={() => setCard(card - 1)}>Previous</button>
            <button className="btn btn-primary me-md-2 float-end" type="button" onClick={() => setCard(card + 1)}>Next</button>
            </div>)
        }
      }
    }
  }
  return(<div className="container" style={{paddingTop: '12%', width: '35%'}}>
            {props.items.map((item) => { return(
                      <div key={item.id}>
                        <div className="container">
                          {cardToDisplay(props, item)}
                          <div className="container ">
                            {buttonToDisplay(props, item)}
                          </div>
                          </div>
                      </div>)
              })} 
        </div>)
}
 
export default PresentCard;
// const PresentCard = (props) => 
// {
    
//   const [idCard, setIdCard] = useState(null);
//     const showCards = () => {
//         if (idCard === 1){
//             return (<AnsCard idCard={idCard} setIdCard={setIdCard}//>);
//         }
//         else{
//             return (<QuesCard idCard={idCard} setIdCard={setIdCard}//>);
//         }
//     }
//     return(<div>
//         {props.items.map((items) => 
//             {
//                 return(<div>
//                     {showCards(props)}
//                     </div>)
//             })}
//         </div>)  
// }
