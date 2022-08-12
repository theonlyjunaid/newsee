import React, { Component } from 'react'

export class NewsItem extends Component {


    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props
        return (
            <div>
                <div className="card my-3" >
                    <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left: "85%", zIndex: "1" }}>
                        {source}

                    </span>
                    <img src={imageUrl ? imageUrl : "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"} className="card-img-top" alt="..." style={{ maxHeight: '160px' }} />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        {/* <span className='badge bg-secondary py-2'>{source}</span> */}
                        <p className="card-text">{description}..</p>
                        <p className="card-text"><small className='text-muted'>by {!author ? "Unknown" : author} on {new Date(date).toLocaleDateString()} , {new Date(date).toLocaleTimeString()} </small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark" rel="noreferrer" >Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem