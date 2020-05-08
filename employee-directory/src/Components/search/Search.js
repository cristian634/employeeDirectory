import React, { Component } from "react";
import SearchForm from "../form/SearchForm";
import Results from "../results/Results"
import Data from "../../user.json";

class Search extends Component {
    state = {
        search: "",
        results: [],
        filterData: [],
        searchText: "",
        error: ""

    };

    getUsers() {
        return Data;
    };

    getUserByName(value) {
        const { results } = this.state;
        console.log(`RESULTS: ${JSON.stringify(results)}`)
        return results.filter(result => result.firstname.includes(value));
    }

    componentDidMount() {
        const users = this.getUsers();
        this.setState({ results: users });
       
    };

    handleInputChange = event => {
        // var searchString = 
        this.setState({ searchText: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const { searchText } = this.state;
        const filterData = this.getUserByName(searchText);

        this.setState({ filterData: filterData, search: searchText });
    };

    render() {
        const { search, results, filterData } = this.state;
        const searchStyle = {
            "margin-left":"20%"
        }
        return (
            <div style={searchStyle}>
                <h1>Search: </h1>
                <SearchForm
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    results={results}
                />
                {
                    search.length > 0 ? <Results results={filterData} />
                        : <Results results={results} />
                }
            </div>
        )
    }

}

export default Search; 