function Card(props) {
    const {Poster, Title, Type, Year} = props
    // import image from poster;
    return (
        // <div className="row">
            <div className="col s12 m7">
                <div className="card">
                    <div className="card-image">
                        {
                            Poster === 'N/A' ? <img src={`https://via.placeholder.com/300x425?text=${Title}`} alt={Title} /> : <img src={Poster} alt={Title} />
                        }
                            <span className="card-title">{Title}</span>
                    </div>
                    <div className="card-content">
                        <span>
                            <span>{Year}</span>
                            <span className="right">{Type}</span>
                        </span>
                    </div>
                    {/*<div className="card-action">*/}
                    {/*    <a href="#">This is a link</a>*/}
                    {/*</div>*/}
                </div>
            {/*</div>*/}
        </div>)
}

export {Card};