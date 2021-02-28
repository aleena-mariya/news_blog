import React from 'react';
import ARTICLE_DATA from './article.data.js'
//embedding collection preview to shop component
import ReadArticle from '../../components/read-article/read-article.component'

//class component as we need to deal with data/state
class ArticlePage extends React.Component{
    constructor(){
        super();
        this.state = {
            collections:ARTICLE_DATA
        }
    }
  
    render(){
        const {collections} = this.state;
        return (<div className="article-page">
                {
                    collections.map(({id,title,ImageUrl}) => (
                        <ReadArticle key={id} title={title} imageUrl={ImageUrl}/>
                    ))
                }
            </div>
            )
    }
}

export default ArticlePage;