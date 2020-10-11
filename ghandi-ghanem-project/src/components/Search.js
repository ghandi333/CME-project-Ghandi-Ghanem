import React from 'react';
import './App.css';

class Search extends React.Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        
        return (
            <>
            <div className='searchBar'>
                <form onSubmit={this.handleSubmit}>
                    <div className='field'>
                        <label><em>Search :</em></label>
                        <input onChange={this.handleChange} name='videoSearch' type="text" placeholder="Type anything you need..."/>
                    </div>
                </form>
            </div>
            </>
        )
    }
}
export default Search;



