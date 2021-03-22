import React from 'react';

class Search extends React.Component{
    // constructor() {
    //     super();

        // this.state = {
        //     search: '',
        //     type: 'all',
        // }
    // }

    state ={
        search: '',
        type: '',
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.search(this.state.search)
        }
    }

    // handleFilter = (event) => {
    //     this.setState(
    //         () => ({type: event.target.value}),
    //         () => {
    //             this.props.search(this.state.search, this.state.type)
    //         }
    //
    //         )
    //
    // }

    // handleFilter = (event) => {
    //     this.setState(
    //         () => ({ type: event.target.dataset.type }),
    //         () => {
    //             this.props.searchMovies(this.state.search, this.state.type);
    //         }
    //     );
    // };

    handleFilter = (event) => {
        this.setState(
            () => ({ type: event.target.dataset.type}),
            () => {
                this.props.search(this.state.search, this.state.type)
            }
        )
    }


    render() {
        return (
            <div className="row">
                <div className="input-field col s12">
                    <input
                        type="text"
                        placeholder="Search"
                        value={this.state.search}
                        onChange={
                            (e) => this.setState({search: e.target.value})
                        }
                        onKeyDown={this.handleKey}
                    />

                    <button
                        className="btn search-btn"
                        onClick={() => this.props.search(this.state.search)}
                    >Search</button>
                </div>

                <div>
                    <label htmlFor="">
                        <input
                            className='with-gap'
                            name='type'
                            type="radio"
                            data-type=''
                            onChange={this.handleFilter}
                            checked={this.state.type == ''}
                        />
                        <span>All</span>
                    </label>
                    <label htmlFor="">
                        <input
                            className='with-gap'
                           name='type'
                           type="radio"
                           data-type='movie'
                           onChange={this.handleFilter}
                           checked={this.state.type == 'movie'}/>
                        <span>Movies</span>
                    </label>
                    <label htmlFor="">
                        <input
                            className='with-gap'
                            name='type'
                            type="radio"
                            data-type='series'
                            onChange={this.handleFilter}
                            checked={this.state.type == 'series'}
                        />
                        <span>Series</span>
                    </label>
                </div>
            </div>
    )
    }
}

export default Search;