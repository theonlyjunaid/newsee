import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <div className='container my-3'>
                <h2>News Monkey - top headlines</h2>
                <div className="row">
                    <div className="col-md-3">   <NewsItem title={'title'} description={'descripe'} imageUrl={'https://live-production.wcms.abc-cdn.net.au/ad67b952bbcdb4bc90e8decf6d171b3b?impolicy=wcms_crop_resize&cropH=2807&cropW=4991&xPos=0&yPos=105&width=862&height=485'} /></div>
                    <div className="col-md-3">   <NewsItem title={'title'} description={'descripe'} /></div>
                    <div className="col-md-3">   <NewsItem title={'title'} description={'descripe'} /></div>
                    <div className="col-md-3">   <NewsItem title={'title'} description={'descripe'} /></div>

                </div>

            </div>
        )
    }
}

export default News