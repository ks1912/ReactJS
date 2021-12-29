import React, { useState } from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert'

const options = [
    { label: "Afrikans", value: 'af' }, 
    { label: "Arabic", value: "ar" }, 
    { label: "Hindi", value: "hi" }
]

const Translate = () => {
    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState("")
    return (<div>
            <div className="ui form">
                <div className="field">
                    <label className="label">
                        Enter the text which you want to convert
                    </label>
                    <input value={text} onChange={(e) => setText(e.target.value)}></input>
                </div>
            </div>
            <Dropdown options={options} selected={language} onSelectedChange={setLanguage} dropDownLabel="Select a language"></Dropdown>
            <hr />
            <h1 className="ui header">Translated text</h1>
            <Convert language={language} text={text} />
        </div>
    )
}
export default Translate;

// <Dropdown options={option} label="Select a color" selected={selected} onSelectedChange={setSelected}/>