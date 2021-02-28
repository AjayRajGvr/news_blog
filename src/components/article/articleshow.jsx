import React from 'react';
import {Link} from 'react-router-dom';
import Article1 from './article1';
import Article2 from './article2';
import Article3 from './article3';
import NotFound from './notfound';

function ArticleShow(id) {
  
    switch(id) {
        case 1 :
            return <Article1/>;
        case 2 :
            return <Article2/>;
         case 3 :
                return <Article3/>;
        default :
            return <NotFound/>;
    }
}

export default ArticleShow;