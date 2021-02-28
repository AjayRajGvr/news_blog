import React from 'react';
import './article.css';
import ArticlePreview from './articlepreview';
class ArticleShort extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            articleTitle: [
                {
                    title : 'India win thriller, eliminate England in race to WTC final ',
                    imageUrl : 'https://www.cricket.com.au/~/-/media/News/2017/02/14India-squad.ashx?w=1600',
                    id:1
                
                },
                {
                    title : 'New TATA safari Launched',
                    imageUrl : 'https://images.financialexpress.com/2021/02/2020-tata-safari-review-2.jpg?w=692',
                    id:2

                },
                {
                    title: 'Kerala election date:2021',
                    imageUrl: 'https://imgk.timesnownews.com/story/Election_Commission_of_India_1200_IANS_5.jpg?tr=w-600,h-450,fo-auto',
                    id:3
                }
            ]
        }

      }

      render() {
        return(
            <div className='articles'>
                { 
                  this.state.articleTitle.map(({title,id,imageUrl}) => (
                    <ArticlePreview key={id} title={title} imageUrl={imageUrl}/>
                  ))
                  
                }
            </div>
        )
    }

    

     


 
}

export default ArticleShort;