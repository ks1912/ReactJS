import React from "react";
import Link from "./Link"
const Header = () =>{
    return(
        <div className="ui secondary pointing menu">
            <Link href="/" className="item">Accordian</Link>
            <Link href="/Search" className="item">Search</Link>
            <Link href="/Translate" className="item">Translate</Link>
            <Link href="/Dropdown" className="item">Dropdown</Link>
        </div>
    )

}
export default Header