import React from 'react';
import {Card} from './Card'
import Search from '../Components/Search'

class Main extends React.Component{
    // constructor() {
    //     super();
    //
    //     this.state = {
    //         loading: true,
    //         search: [],
    //     }
    // }

    state = {
        loading: true,
        search: [],
    }

    apiKey = "http://www.omdbapi.com/?apikey=84a015b3"

    componentDidMount() {
        // const apiKey = "http://www.omdbapi.com/?apikey=84a015b3"

        this.search('matrix')

        // const searchLink = this.apiKey + "&s=matrix"
        //
        // fetch(searchLink)
        //     .then(response => response.json())
        //     .then(data => this.setState({search: data.Search, loading: false}))
    }

    search = (text = 'matrix', type = '') => {
        const searchLink = this.apiKey + "&s=" + text + "&type=" + type

        fetch(searchLink)
            .then(response => response.json())
            .then(data => this.setState({search: data.Search, loading: false}))
    }


    render() {
        const {search, loading} = this.state;

        return(
            <div className='container content'>

            <Search
            search={this.search}
            key="search"
            />

            {/*<main className='movies'>*/}
                {loading ? <div className="progress s12">
                    <div className="indeterminate"></div>
                </div> : <div className='movies'>
                    {search ? search.map(data => (
                        <Card
                            key={data.imdbID}
                            {...data}
                        />
                    )) : <p>Searc did not found anything</p>}
                </div>}
            </div>
        )
    }
}

export default Main;