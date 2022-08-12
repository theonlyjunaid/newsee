import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    // document.title = `${capitalizeFirstLetter(props.catogary)} - NewsMonkey`;
    // 

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    const updateNews = async () => {
        document.title = `${capitalizeFirstLetter(props.catogary)} - NewsMonkey`;

        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.catogary}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        // ({ loading: true });
        setLoading(true)
        props.setProgress(30)

        let data = await fetch(url);
        let parsedData = await data.json()
        props.setProgress(70)
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResult)
        setLoading(false)

        props.setProgress(100)

    }
    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.catogary)} - NewsMonkey`;
        updateNews();
    }, []);


    const handlePrevClick = async () => {
        document.title = `${capitalizeFirstLetter(props.catogary)} - NewsMonkey`;

        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.catogary}&apiKey=${props.apikey}&page=${page - 1}&pageSize=${props.pageSize}`;
        setLoading(true)
        setPage(page - 1)

        props.setProgress(50)

        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResult)
        setLoading(false)
        props.setProgress(100)

        // updateNews();
    }

    const handleNextClick = async () => {

        props.setProgress(10)

        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.catogary}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        setLoading(true)

        let data = await fetch(url);
        props.setProgress(50)

        let parsedData = await data.json()
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResult)
        setLoading(false)
        props.setProgress(100)

        // updateNews()
    }


    return (
        <div className="container my-3">
            <h1 className="text-center" style={{ margin: '35px 0px' }}>NewsMonkey - Top {capitalizeFirstLetter(props.catogary)} Headlines</h1>
            {loading && <Spinner />}
            <div className="row">
                {!loading && articles.map((element) => {
                    return <div className="col-md-3" key={element.url}>
                        <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 85) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                    </div>
                })}
            </div>
            <div className="container d-flex justify-content-between">
                <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}> &larr; Previous</button>
                <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
            </div>
        </div>
    )
}


export default News
News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

// a2c7a5fb20f749e08f16f846eb639220