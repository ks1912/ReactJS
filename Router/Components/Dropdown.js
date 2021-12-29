import React, {useState, useEffect, useRef} from 'react'

const Dropdown=({option, label , selected, onSelectedChange})=>
{
    const[open,setOpen] =useState(false)
    const ref = useRef()
    useEffect(()=>{
            document.body.addEventListener("click",(event)=>{
            // console.log(event.target);
            if(ref.current.contains(event.target))
            {
                // console.log(`${event}`);
                return  null;
            }
            setOpen(false)},{capture:true})
    },[])
    const renderOptions = option.map((option)=>{
        if(option.value===selected.value)
        {
            // console.log(`${selected.value}`);
            return null;
        }
        return(<div key={option.value} className='item' onClick={()=>{
           
            onSelectedChange(option)}}>{option.label}</div>)
    })
    // console.log(ref.current)
    return(<div ref={ref} className='ui form'>
        <div className='field'>
            <label className='label'>{label}</label>
            <div onClick={()=>{ setOpen(!open)}} className={`ui selection  dropdown ${open ? "visible active":""}`} >
            <i className='dropdown icon'></i>
            <div className="text">{ selected.label}</div>
            <div className={`menu  ${open ? "visible transition":""}`}> {renderOptions}</div>
            </div>
        </div>
        </div>)
}

export default Dropdown;
