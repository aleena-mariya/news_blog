import React from 'react';
import './news-articles.styles.scss';
import {Link} from 'react-router-dom'

const NewsArticles = ({title, imageUrl}) => (
    <div style= {{
        backgroundImage: `url(${imageUrl})`
    }}  
    className='news-articles'>
                <div className='content'>
                    <h1 className='title'>{title}</h1>
                    <Link className="subtitle" to="/article">
                    <span className='subtitle'> Read More </span>
                    </Link>
                </div>
            </div> 
)
export default NewsArticles;