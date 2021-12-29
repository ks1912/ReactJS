import React, {useState, useEffect} from 'react'
import unsplash from '../API/Unsplash'
// import ImageDisplay from './ImageDisplay';

const SearchBar = ({onReasults, onSetReasults}) => {
    const [term, setTerm] = useState('');
    useEffect(() => {
        const search = async () => {
            const {data} = await unsplash.get("/search/photos",{
                params : {
                    query: term,
                }});
                
                // {console.log(data.results)}
            onSetReasults(data.results);
        }
        if (!term){
            return null;
        }
        else{
            const timeoutId = setTimeout(() => {
                if (term) {
                    search()
                    {console.log('Called after 5 sec')}
                }
            }, 500);
            return (()=> {clearTimeout(timeoutId)})
        }
    }, [term])
    return (<div className='container'>
                <form>
                    <input className="input" value={term} onChange={e=> setTerm(e.target.value)}></input>
                </form>                
                {console.log("TERM IS:",term)}
                {console.log("RESULT IS :",onReasults)}
        </div>);
}
 
export default SearchBar;
