import React, {useState} from 'react';

const Accordian = (props) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const renderItems = props.items.map((item,index) =>{
        const active = index === activeIndex ? 'active' : '';
        return(<div className="accordion accordion-flush border-0 m-0 p-0 text-center bg-info" id="accordionFlushExample">
                    <div className="accordion-item border border-5 border-warning mb-3 p-2 rounded-3" style={{backgroundColor: '#D79D00'}}>
                        <h2 className="accordion-header" id={`flush-heading${index}`}>
                            <button className="accordion-button collapsed gap-2" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`} aria-expanded="false" aria-controls={`flush-collapse${index}`} style={{backgroundColor: '#D79D00'}}>
                                {item.title}
                            </button>
                        </h2>
                        <div id={`flush-collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${index}`} data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body text-center">{item.content}</div>
                        </div>
                    </div>
                </div>)
    })

    return(<div className="container col-md-6 col-xxl-12 col-sm-4" style={{marginTop: '15%'}}>
                    <style>{'body { background-color:  #F6CD4F }'}</style>
                    {renderItems}
            </div>);
}

export default Accordian;


// --------------------
// OLD CODE
// --------------------

// import React, {useState} from 'react';

// const Accordian = (props) => {
//     const [activeIndex, setActiveIndex] = useState(null);
//     const onTitledClicked = (i, active) => {
//             active === "active" ? setActiveIndex(null): setActiveIndex(i)  
//         }
//     const renderItems = props.items.map((item,index) =>{
//         const active = index === activeIndex ? 'active' : '';
//         return(
//         <React.Fragment key={item.title}>
//             <div className={`title ${active}`} onClick={()=>onTitledClicked(index, active)}>
//                     <i className="dropdown icon"></i>

//                     {item.title}
//             </div>
//             <div className={`content ${active}`}>
//                     <p>{item.content}</p>
//             </div>
//         </React.Fragment>)
//     })

//     return(<div className="ui styled accordion">
//             {renderItems}
//         </div>);
// }

// export default Accordian;

// ------------------------------------------------
// MIX Sementic UI and Bootstrap 5
// ------------------------------------------------

// import React, {useState} from 'react';

// const Accordian = (props) => {
//     const [activeIndex, setActiveIndex] = useState(null);
//     const onTitledClicked = (i, active) => {
//             active === "active" ? setActiveIndex(null): setActiveIndex(i)  
//         }
//     const renderItems = props.items.map((item,index) =>{
//         const active = index === activeIndex ? 'active' : '';
//         return(
//         <React.Fragment key={item.title}>
//             <div className="accordion">
//                 <div className="accordion-item">
//                     <div className="accordion-header">
//                         <div className={`title ${active}`} onClick={()=>onTitledClicked(index, active)}>
//                                 <i className="dropdown icon"></i>

//                                 {item.title}
//                         </div>
//                     </div>
//                     <div className="accordion-body">
//                         <div className={`content ${active}`}>
//                                 <p>{item.content}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </React.Fragment>)
//     })

//     return(<div className="ui styled accordion">
//             {renderItems}
//         </div>);
// }

// export default Accordian;