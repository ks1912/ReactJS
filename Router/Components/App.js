import React,{useState} from "react";
import Accordian from "./Accordian";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Route from "./Router";
import Header from "./Header";
const items=[
    {title:"Title1", content:"content1"},
    {title:"Title2", content:"content2"},
    {title:"Title3", content:"content3"}
]
const option=[
    {label:"this is red ", value:"red"},
    {label:"this is  green", value:"green"},
    {label:"this is  yellow", value:"yellow"}
]
// const showAccordian=()=>{
//     if(window.location.pathname==='/')
//     {
//         return <Accordian/>
//     }
// }
// const showSearch=()=>{
//     if(window.location.pathname==='/Search')
//     {
//         return <Search/>
//     }
// }
// const showDropDown=()=>{
//     if(window.location.pathname==='/DropDown')
//     {
//         return <Dropdown/>
//     }
// }
// const showTranslate=()=>{
//     if(window.location.pathname==='/Translate')
//     {
//         return <Dropdown/>
//     }
// }
const App = ()=> {
    const[selected,setSelected] =useState(option[0])
   
    return (
        <div>
            <Header/>
           {/* <Accordion items={items}/>  */}
           {/* <Search/> */}
           {/* <DropDown options={option} label="Select a color" selected={selected} onSelectedChange={setSelected}/> */}
           {/* <Translate/> */}
           {/* {showAccordian()}
           {showSearch()}
           {showDropDown()} */}
           <Route path='/'><Accordian items={items}></Accordian></Route>
           <Route path='/Search'><Search></Search></Route>
           <Route path='/Dropdown'><Dropdown option={option} label="Select a color" selected={selected} onSelectedChange={setSelected}></Dropdown></Route>
           <Route path='/Translate'><Translate></Translate></Route>
        </div>
    )
}

export default App
