import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Header from "../Header/Header";
import MainMenu from "../MainMenu/MainMenu";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import M from "materialize-css";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import './BlogPost.css';

const Blog = props => {
  const [blogPostData, setBlogPostData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      window.scroll({
        top: 70,
        left: 0,
        behavior: "smooth"
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }

    var elems = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(elems, {});
  }, []);

  const blogId = props.match.params.id;
  useEffect(() => {
    async function fetchData() {
      const result = await axios
        .get(
			"https://localhost/wordpress/index.php/wp-json/wp/v2/posts/" + blogId
        )
        .then(response => {
          setBlogPostData(response.data);
          setIsLoading(false);
        })
        .catch(error => {
          setError("true");
          setIsLoading(false);
          console.log(error);
        });
    }
    fetchData();
  }, []);

var blogPosts = "";
var blogPostDiv = '';

if (error === true){
  blogPostDiv = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
} else if (error === false && isLoading === false) {
	blogPostDiv = <div className="row">
	<article className="Post">
	  <div className="Info">
		<div
		  dangerouslySetInnerHTML={{
			__html: (blogPostData.content.rendered).replace(/[\uE000-\uF8FF]/g, '')
		  }}
		/>
	  </div>
	</article>
  </div>
}else {
  blogPostDiv = <p style={{ textAlign: "center" }}>Loading Blog Posts!</p>;
}

  blogPosts = (
    <>
      <Banner
        navigation="Blog"
        heading={blogPostData && blogPostData.title && (blogPostData.title.rendered).replace(/[\uE000-\uF8FF]/g, '')}
        text=""
        path="/blog"
      />
      <div className="locateDropdownCard">
	  	{blogPostDiv}
      </div>
    </>
  );

  return (
    <div id="Blog">
      <Header />
      <MainMenu />
      <Grid
        container
        component="div"
        direction="row"
        justify="center"
        className="mtop40"
      >
        <Grid item xs={11} md={11} sm={11} lg={11}>
          <div className="blogResetStyle">
            {blogPosts}
          </div>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};



export default (Blog);
