import React from 'react';

const AnsCards = (props) => {
  const ansToDisplay = () => {
    return( <div key={props.item.id}>
        <div className="container text-center" >
          <div className="card text-dark bg-info mb-3">
            <div className="card-body" style={{height: '350px'}}>
              <h5 className="card-title display-5">Employee {props.item.empId}</h5>
              <div className="card-text text-start mt-4">
                <p> <strong>Name:-</strong> {props.item.name}<br/>
                    <strong>Position:-</strong>{props.item.position}<br/>
                    <strong>Gender:-</strong>{props.item.gender}<br/>
                    <strong>Company :-</strong>{props.item.Company}<br/>
                    <strong>Description :-</strong>{props.item.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>)
}
  return (<div>
    {ansToDisplay(props)}
    </div>);
}
 
export default AnsCards;

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