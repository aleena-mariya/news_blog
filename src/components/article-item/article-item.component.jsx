import React from 'react';
import './article-item.styles.scss';

//functional component

const ArticleItem = ({id,title,imageUrl}) => (
    <div className="article-item">
        <div className="image"
        style={{
            backgroundImage:`url(${imageUrl})`
        }}>
            <div className="article-footer">
                <span className='title'>{title}</span>
                
                </div>
          </div>
    </div>
)

export default ArticleItem;