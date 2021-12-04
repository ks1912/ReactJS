import React from 'react';
import EmpM from '../Img/emp.png'
import EmpF from '../Img/fEmp.png'

const QuesCards = (props) => {
  const imgDisplay = (props) => {
    if(props.item.gender === 'Male'){
      return <img className="img-fluid mt-4" src={EmpM} alt="props" />
    }
    else{
      return <img className="img-fluid mt-4" src={EmpF} alt="props" />
    }
  }
  const quesToDisplay = (props) => {
    return( <div key={props.item.id}>
              <div className="container text-center" >
                <div className="card text-dark bg-info mb-3">
                  <div className="card-body" style={{height: '350px'}}>
                    <h5 className="card-title display-5">Employee {props.item.empId}</h5>
                    <div className="row col m-0 p-0">
                      <div className="col m-0 p-0">
                        {imgDisplay(props)}
                      </div>
                      <div className="col">
                        <p className="card-text mt-5 pt-2 " style={{ fontSize: '25px'}}>{props.item.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>)
  }
  return (<div>
    {quesToDisplay(props)}
    </div>);
}
 
export default QuesCards;

// OLD CODE
// const Cards = (props) => {
//   const [idCard, setIdCard] = useState(null);
//   const cardToDisplay = (props) => {
//     console.log(idCard);
//     if (idCard === 1){
//       return( <div className="container text-center">
//                 <div className="card text-dark bg-success mb-3">
//                   <div className="card-header">Answer</div>
//                   <div className="card-body">
//                     <h5 className="card-title">Feuji is in India, USA and Costa Rica.</h5>
//                     <p className="card-text">Mr. Manohar Reddy Sir is Feuji CEO.</p>
//                     <button className="btn btn-warning me-md-2 float-end" type="button" onClick={() => setIdCard(idCard -1)}>Show Question</button>
//                   </div>
//                 </div>
//               </div> );
//     }
//     else {
//       return( <div className="container text-center">
//                 <div className="card text-dark bg-info mb-3">
//                   <div className="card-header">Question</div>
//                   <div className="card-body">
//                     <h5 className="card-title">Where is Feuji?</h5>
//                     <p className="card-text">Feuji is in Hyderabad.</p>
//                     <button className="btn btn-success me-md-2 float-end" type="button" onClick={() => setIdCard(idCard +1)}>Show Answer</button>
//                   </div>
//                 </div>
//               </div> );
//     }
//   };
//   return(<div>
//     {cardToDisplay(props)}
//     </div>)
// }
 
// export default Cards;
// OLD CODE