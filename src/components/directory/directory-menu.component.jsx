import React from 'react';
import NewsArticles from '../news-articles/news-articles.component';
import './directory-menu.styles.scss';

//class component as we need to store the state value
class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections : [
                {
                  title: 'Scientists Begin Building Highly Accurate Digital Twin of Our Planet',
                  imageUrl: 'https://i.ibb.co/1rfTgpM/planets.jpg',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'New Wearable Device Turns the Body Into a Battery',
                  imageUrl: 'https://i.ibb.co/vkDSpg8/battery.jpg',
                  id: 2,
                  linkUrl: 'shop/jackets'
                }
              ]
        }
    }

    render() {
        return(
            <div className='directory-menu'>
                {
                  this.state.sections.map(({title,id,imageUrl}) => (
                    <NewsArticles key={id} title={title} imageUrl={imageUrl} />
                  ))
                  
                }
            </div>
        )
    }
}

export default Directory;