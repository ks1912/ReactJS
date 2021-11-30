import React from 'react';

class Searchbar extends React.Component {
    state = { term: ""};
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    };
    render() { 
        return (<div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <label>Immage Search</label>
                    <input type="text" className="field" value={this.state.term} onChange={(e) => this.setState({term: e.target.value})}></input>
                </form>
                </div>);
    }
}
 
export default Searchbar;

// class SearchBar extends React.Component {

//     state = { term: "" };
    
//     onFormSubmit = (event) => {
    
//     event.preventDefault();
    
//     this.props.onSubmit(this.state.term);
    
//     };
    
//     render() {
    
//     return (
    
//     <div className="ui segment">
    
//     <form className="ui form" onSubmit={this.onFormSubmit}>
    
//     <label>Image Search</label>
    
//     <input
    
//     type="text"
    
//     className="field"
    
//     value={this.state.term}
    
//     onChange={(e) => this.setState({ term: e.target.value })}
    
//     ></input>
    
//     </form>
    
//     </div>
    
//     );
    
//     }
    
//     }
    
    
// export default SearchBar;
