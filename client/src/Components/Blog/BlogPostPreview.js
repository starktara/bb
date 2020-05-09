import React from 'react';

import './BlogPost.css';

import { Link } from "react-router-dom";

const post = (props) => (
    <article className="Post">
        <h5>{(props.title).replace(/[\uE000-\uF8FF]/g, '')}</h5>
        <div className="Info">
            <div dangerouslySetInnerHTML= {{__html: props.excerpt}}/>
        </div>
        <div className='paddingTop12px'>
            <Link to={'/blog/'+props.postId} className='btn btn-secondary ButtonColor float-right'>Read More</Link>
        </div>
    </article> 
);

export default post;