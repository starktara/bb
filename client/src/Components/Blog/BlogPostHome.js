import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import Header from "../Header/Header";
import MainMenu from "../MainMenu/MainMenu";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import M from "materialize-css";
import axios from "axios";
import BlogPostPreview from "./BlogPostPreview";

import * as actionTypes from '../../store/actions/actionTypes';

const BlogPostHome = (props) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [lastPageNumber, setLastPageNumber] = useState(null);
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

  // Fetch blog posts for the given page number
  useEffect(() => {
    window.scrollTo(0, 0);
    if (props.currentPageNumber !== null) {
      setIsLoading(true);
      async function fetchData() {
        const result = await axios
          .get(
            "http://localhost/wordpress/index.php/wp-json/wp/v2/posts?page=" +
              props.currentPageNumber
          )
          .then(response => {
            setLastPageNumber(response.headers["x-wp-totalpages"]);
            setBlogPosts(response.data);
            setIsLoading(false);
          })
          .catch(error => {
            setError(true);
            setIsLoading(false);
            console.log(error);
          });
      }
      fetchData();
    }
  }, [props.currentPageNumber]);

  let pageNumbersArray = [];
  for (let i = 1; i <= lastPageNumber; i++) {
    pageNumbersArray.push(i);
  }

  // Blog Post Preview Div
  let blogPostPreviewDiv;
  if (error === true){
    blogPostPreviewDiv = <div className="locateDropdownCard"><p style={{ textAlign: "center" }}>Something went wrong!</p></div>;
  } else if (error === false && isLoading === false) {
    blogPostPreviewDiv = blogPosts.map(post => {
      return (
        <div className="locateDropdownCard marginBottom40px paddingBottom1px">
          <div className="row">
            <BlogPostPreview
              key={post.id}
              postId={post.id}
              title={post.title.rendered}
              excerpt={post.excerpt.rendered}
            />
          </div>
        </div>
      );
    });
  } else {
    blogPostPreviewDiv = <div className="locateDropdownCard"><p style={{ textAlign: "center" }}>Loading Blog Posts!</p></div>;
  }

  // Pagination Element
  let paginationElement = '';
  if(error === false && isLoading === false) {
    paginationElement =  <div className='paginationDiv'>
    <ul className="pagination">
      {props.currentPageNumber === 1 ? (<li className="disabled waves-effect"><i className="material-icons">chevron_left</i></li>) : (<li onClick={() => {props.onSetCurrentPage(parseInt(props.currentPageNumber)-1)}} className="disabled waves-effect"><i className="material-icons">chevron_left</i></li>)}
      {pageNumbersArray.map(pageNumber => {
        return pageNumber == props.currentPageNumber ? (
          <li onClick={() => {props.onSetCurrentPage(pageNumber)}} className="active">
            <a>{pageNumber}</a>
          </li>
        ) : (
          <li onClick={() => {props.onSetCurrentPage(pageNumber)}} className="waves-effect">
            <a>{pageNumber}</a>
          </li>
        );
      })}
      {props.currentPageNumber === lastPageNumber ? (<li className="disabled waves-effect"><i className="material-icons">chevron_right</i></li>) : (<li onClick={() => {props.onSetCurrentPage(parseInt(props.currentPageNumber)+1)}} className="disabled waves-effect"><i className="material-icons">chevron_right</i></li>)}
    </ul>
  </div>
  }

  // Blog Post Container
  let blogPostContainerDiv = (
    <>
      <Banner
        navigation="Blog"
        heading="Bike Bazaar Blogs"
        text=""
        path={props.location.pathname}
      />
      {blogPostPreviewDiv}
      {paginationElement}
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
          {blogPostContainerDiv}
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentPageNumber: state.blogDetails.currentPageNumber
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSetCurrentPage: (currentPage) => dispatch({type: actionTypes.SET_CURRENT_PAGE, currentPageNumber: currentPage})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostHome);
