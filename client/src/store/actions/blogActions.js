import axios from "axios";
import * as actionTypes from './actionTypes';

export const blogsList = (blogs) => {
    return {
        type: actionTypes.BLOG_LIST,
        blogs: blogs,
        isLoading: false
    };
};

export const blogById = (blog) => {
    return {
        type: actionTypes.BLOG_BY_ID,
        blog: blog,
        isLoading: false
    };
};

export const getBlogsForThePage = (pageNumber) => {
  let url = "/apis/blogs/getBlogsByPage?pageNumber=" + pageNumber;

  return (dispatch) => {
    axios
      .get(url)
      .then((response) => {
        dispatch(blogsList(response));
      });
  };
};


export const getBlogForTheBlogId = (blogId) => {
    let url = "/apis/blogs/getBlogByBlogId?blogId=" + blogId;
  
    return (dispatch) => {
      axios
        .get(url)
        .then((response) => {
          dispatch(blogById(response));
        });
    };
  };

// export const getVehicleData = (vehicleid) => {
//     return dispatch => {
//         let url = "/apis/seedData/searchBike?vehicleid=" + vehicleid;
//         axios.get(url)
//             .then(response => {
//                 dispatch(vehicleData(response.data));
//             })
//             .catch(err => {
//                 dispatch(apiFail(err));
//             });
//     };
// };
