import React from 'react';
import winterLogo from './img/Winter.png';
import summerLogo from './img/sun.png'

const fetchSession = (lat, month) => {
    if (month > 2 && month < 9) {
         return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const seasonConfig = {
    summer: {
        text: "It's hot!",
    },
    winter: {
        text: "It's cold!",
        iconName: <img src={winterLogo} alt="COLD" />
    }
}

const displayMonth = (latMonth, text) => {
        if (latMonth === 'winter') {
            return (<div>
                <style>{'body { background-color:  #B8FAFF }'}</style>
                <div className={`season-display ${latMonth}`}>
                    <div className="container-fluid border-0">
                        <div className="row">
                        <div className="col">
                            <img src={winterLogo} className="float-end" style={{height : '150px'}} alt="COLD" />
                        </div>
                        <div className="col-md-5">
                            <h1 className="display-1 text-center">It's Cold</h1>
                        </div>
                        <div className="col">
                            <img src={winterLogo} className="float-start" style={{height : '150px'}} alt="COLD" />
                        </div>
                    </div>
                </div>                
                
            </div></div>)
        }
        if (latMonth === 'summer') {
            return(<div>
                    <style>{'body { background-color:  #FFFDC3 }'}</style>
                    <div className={`season-display ${latMonth}`}>
                    <img src={summerLogo} className="float-start" style={{height : '150px'}} alt="SUMMER" />
                    <h1  className="text-center">{text}</h1>
                </div></div>)
        }
}

const FindSessions = (props) => {

    const currentMonth = new Date().getMonth();
    const latMonth = fetchSession(props.lat , currentMonth);
    const text = seasonConfig[currentMonth];
    const finalOutput = displayMonth(latMonth, text);

    return ( <div>
        {finalOutput}
        </div>);
}
 
export default FindSessions;


// get the season based on latitude and current month
// const getSeason = (lat, month) => {
//     if (month > 2 && month < 9) { return lat > 0 ? 'summer' : 'winter';
//     } else {
//         return lat > 0 ? 'winter' : 'summer';
//     }
// }
// const seasonConfig = {
//     summer: {
//         text: "It's hot!",
//         iconName: 'sun'
//     },
//     winter: {
//         text: "It's cold!",
//         iconName: 'snowflake'
//     }
// }
 
// // functional component
// const FinalSeason = (props) => {
//     const lati = getSeason(props.lat, new Date().getMonth());
//     const { text, iconName } = seasonConfig[lati];
//     return (
//         <div className={`season-display ${lati}`}>
//             <i className={`massive icon-left ${iconName} icon`} />
//             <h1>{text}</h1>
//             <i className={`massive icon-right ${iconName} icon`} />
//         </div>
//     );
// };
 
// export default FinalSeason;