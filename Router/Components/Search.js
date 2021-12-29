import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('india');
    const [results, setResults] = useState([]);
    useEffect(() => {
        // console.log("Search Bar");
        const search = async ()=>{
            // JSON Deconstruction
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            })
            console.log(data);
            setResults(data.query.search)
        }
        if (term && !results.length) {
            search()
        }
        else{
            const timeoutId = setTimeout(() => {
                if (term) {
                    search()
                }
            }, 500);
            return () => {clearTimeout(timeoutId)}
            }
        }
        ,[term])

    const resultList = results.map((result) => {
        return(
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org/curlid=${result.pageid}`}>
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML = {{ __html: result.snippet}}></span><br/>          
                </div>
            </div>
        )
    })
    return(<div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search term</label>
                    <input className="input" value={term} onChange={e=> setTerm(e.target.value)}></input>
                </div>
                <div className="ui celled list">
                    {resultList}
                </div>
            </div>
        </div>);
}

export default Search;


