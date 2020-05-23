import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import Header from "../Header/Header";
import MainMenu from "../MainMenu/MainMenu";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import M from "materialize-css";
import BlogPostPreview from "./BlogPostPreview";

import * as actionTypes from "../../store/actions/actionTypes";

import * as actions from "../../store/actions/index";

const BlogPostHome = (props) => {
  const [error, setError] = useState(false);
  useEffect(() => {
    try {
      window.scroll({
        top: 70,
        left: 0,
        behavior: "smooth",
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
      async function fetchData() {
        props.getBlogsForThePage(props.currentPageNumber);
      }
      fetchData();
    }
  }, [props.currentPageNumber]);

  let pageNumbersArray = [];
  if (props.blogs)
    for (
      let i = 1;
      i <= Object.values(props.blogs.data)[0]["totalPagesInBlog"];
      i++
    ) {
      pageNumbersArray.push(i);
    }

  // Blog Post Preview Div
  let blogPostPreviewDiv;
  if (error === true) {
    blogPostPreviewDiv = (
      <div className="locateDropdownCard marginRight0">
        <p style={{ textAlign: "center" }}>Something went wrong!</p>
      </div>
    );
  } else if (error === false && props.isLoading === false) {
    if (props && props.blogs && props.blogs.data)
      blogPostPreviewDiv = Object.values(props.blogs.data).map((post) => {
        return (
          <div className="locateDropdownCard marginRight0 marginBottom40px paddingBottom1px">
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
    blogPostPreviewDiv = (
      <div className="locateDropdownCard marginRight0">
        <p style={{ textAlign: "center" }}>Loading Blog Posts!</p>
      </div>
    );
  }

  // Pagination Element
  let paginationElement = "";
  if (error === false && props.isLoading === false) {
    paginationElement = (
      <div className="paginationDiv">
        <ul className="pagination">
          {props.currentPageNumber === 1 ? (
            <li className="disabled waves-effect">
              <i className="material-icons">chevron_left</i>
            </li>
          ) : (
            <li
              onClick={() => {
                props.onSetCurrentPage(parseInt(props.currentPageNumber) - 1);
              }}
              className="disabled waves-effect"
            >
              <i className="material-icons">chevron_left</i>
            </li>
          )}
          {pageNumbersArray.map((pageNumber) => {
            return pageNumber == props.currentPageNumber ? (
              <li
                onClick={() => {
                  props.onSetCurrentPage(pageNumber);
                }}
                className="active"
              >
                <a>{pageNumber}</a>
              </li>
            ) : (
              <li
                onClick={() => {
                  props.onSetCurrentPage(pageNumber);
                }}
                className="waves-effect"
              >
                <a>{pageNumber}</a>
              </li>
            );
          })}
          {props && props.blogs && props.blogs.data && props.currentPageNumber ===
          Object.values(props.blogs.data)[0]["totalPagesInBlog"] ? (
            <li className="disabled waves-effect">
              <i className="material-icons">chevron_right</i>
            </li>
          ) : (
            <li
              onClick={() => {
                props.onSetCurrentPage(parseInt(props.currentPageNumber) + 1);
              }}
              className="disabled waves-effect"
            >
              <i className="material-icons">chevron_right</i>
            </li>
          )}
          }
        </ul>
      </div>
    );
  }

  // Blog Post Container
  let blogPostContainerDiv = (
    <>
      <Banner
        navigation="Blog"
        heading="BikeBazaar Blogs"
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

const mapStateToProps = (state) => {
  return {
    currentPageNumber: state.blogDetails.currentPageNumber,
    blogs: state.blogDetails.blogs,
    isLoading: state.blogDetails.isLoading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getBlogsForThePage: (pageNummber) =>
      dispatch(actions.getBlogsForThePage(pageNummber)),
    onSetCurrentPage: (currentPage) =>
      dispatch({
        type: actionTypes.SET_CURRENT_PAGE,
        currentPageNumber: currentPage,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostHome);
