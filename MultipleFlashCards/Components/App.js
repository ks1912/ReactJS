import React from "react";
import PresentCard from "./PresentCard";


const items = [ {id:0, name: "Divya",        desc: "Currently working as Trainee Engineer in Feuji",    position:"Trainee Engineer",    gender:"Female",    empId: "FS101", Company:"Fujiyama Software Solution Pvt. Ltd."},
                {id:1, name: "Kavya",        desc: "Currently working as Trainee Engineer in Feuji",    position:"Trainee Engineer",    gender:"Female",    empId: "FS102", Company:"Fujiyama Software Solution Pvt. Ltd."}, 
                {id:2, name: "Vineetha",     desc: "Currently working as Trainee Engineer in Feuji",    position:"Trainee Engineer",    gender:"Female",    empId: "FS103", Company:"Fujiyama Software Solution Pvt. Ltd."}, 
                {id:3, name: "Dinesh",       desc: "Currently working as Trainee Engineer in Feuji",    position:"Trainee Engineer",    gender:"Male",      empId: "FS104", Company:"Fujiyama Software Solution Pvt. Ltd."},  
                {id:4, name: "Naga Devi",    desc: "Currently working as Trainee Engineer in Feuji",    position:"Trainee Engineer",    gender:"Female",    empId: "FS105", Company:"Fujiyama Software Solution Pvt. Ltd."}, 
                {id:5, name: "Preeti",       desc: "Currently working as Trainee Engineer in Feuji",    position:"Trainee Engineer",    gender:"Female",    empId: "FS106", Company:"Fujiyama Software Solution Pvt. Ltd."},
                {id:6, name: "Srija",        desc: "Currently working as Trainee Engineer in Feuji",    position:"Trainee Engineer",    gender:"Female",    empId: "FS107", Company:"Fujiyama Software Solution Pvt. Ltd."}
            ]


const App = () => {
    return (
        <div className="container bgImage">
            <style>{`body{background-color: #014182}`}</style>
            <PresentCard items={items} />
        </div> );
}
 
export default App;
