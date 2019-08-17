import React from 'react';

import './Banner.css'

const Banner = (props) =>  {

    return (
        <div className="pageDtl">
		<ul>
			<li><a href="#">Home</a></li>
			<li className="current"><a href="#">{props.navigation}</a></li>
		</ul>
		<h1>{props.heading}</h1>
		<p>{props.text}</p>
	</div>
    );
}

export default Banner;