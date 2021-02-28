import React from 'react';

import ArticleItem from '../article-item/article-item.component';

import './read-article.styles.scss';

const ReadArticle = ({ title, items }) => (
  <div className='read-article'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='read'>
   {/*} ReadArticle.map(({id,title,ImageUrl}) => (
    <ArticleItem key={id} title={title} imageUrl={ImageUrl}/>)*/}

      {/*{items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <ArticleItem key={id} {...otherItemProps} />
        ))}*/}
    </div>
  </div>
);

export default ReadArticle;
