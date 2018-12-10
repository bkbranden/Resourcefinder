import React from 'react';
import '../../static/frontend/css/searchbartext.css';

class SearchBar extends React.Component{
    constructor(){
        super();
        this.state = {
            term:''
        }
    }

    onInputChange(term){
        this.setState({term});
        this.props.onTermChange(term);
    }

    render(){
        return(
            <div className="search">
                <h1 className = "searchtext">Please enter the resource that you want to search!</h1>
                <input className="txt" placeholder="Enter the resource you want to search!" onChange={event => this.onInputChange(event.target.value)} />
            </div>
        )
    }
}

export default SearchBar;