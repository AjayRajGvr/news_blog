import React from 'react';
import {Link} from 'react-router-dom';
import ArticleShow from './articleshow.jsx';


const ArticlePreview = ({title,id,imageUrl}) => (
    <div class='article' >
        <div  >
       
            <img src={imageUrl} style={{width:'80%'}} />   
            <h2>{title}</h2>
           
            <button onClick={ () => { ArticleShow({id})}}> Read More..</button>
           
            
        </div>

    </div>
)






export default ArticlePreview;