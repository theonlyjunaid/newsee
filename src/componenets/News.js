import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 5,
        catogary: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        catogary: PropTypes.string
    }


    constructor() {
        super()
        this.state = {
            articles: [],
            loading: false,
            page: 1

        }
    }
    async updatePage() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catogary}&apiKey=a2c7a5fb20f749e08f16f846eb639220&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({
            loading: true
        })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalArticles: parsedData.totalResults,
            loading: false
        })
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catogary}&apiKey=a2c7a5fb20f749e08f16f846eb639220&page=1&pageSize=${this.props.pageSize}`
        this.setState({
            loading: true
        })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalArticles: parsedData.totalResults,
            loading: false
        })

    }
    handleNextClick = async () => {



        this.setState({
            page: this.state.page + 1
        })
        this.updatePage()



    }
    handlePrevClick = async () => {

        this.setState({
            page: this.state.page - 1
        })

        this.updatePage()


    }

    render() {
        return (
            <div className='container my-3'>
                <h1 className="text-center " style={{ margin: '30px 0px' }}>News Monkey - top headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row container">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return (
                            <div className="col-md-3" key={element.url} >
                                <NewsItem title={element.description ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>)
                    })}


                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr;  Previous page</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next Page  &rarr;</button>
                </div>

            </div>
        )
    }
}

export default News