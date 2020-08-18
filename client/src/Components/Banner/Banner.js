import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = (props) =>  {

    return (
        <div className="pageDtl">
					<ul>
						<li><Link to="/">Home</Link></li>
						<li className="current"><Link to={props.path}>{props.navigation}</Link></li>
					</ul>
					<h1>{props.heading}</h1>
					<p>{props.text}</p>
				</div>
    );
}

export default Banner;