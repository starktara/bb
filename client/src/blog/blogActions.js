import axios from "axios";

export const getAllBlogsForThePage = (pageNumber = null) => {
  let url;
  url =
    "http://localhost/wordpress/index.php/wp-json/wp/v2/posts?page=" +
    pageNumber;

  return (dispatch) => {
    axios
      .get(url)
      .then((response) => {
        dispatch(storeData(response.data)); //CHANGE TO blogData
      })
      .catch((err) => {
        dispatch(apiFail(err));
      });
  };
};

export const getBlogPostForId = (blogId = null) => {
  let url;
  url =
    "http://localhost:8080/blogs/index.php/wp-json/wp/v2/posts/" +
    blogId;

  return (dispatch) => {
    axios
      .get(url)
      .then((response) => {
        dispatch(storeData(response.data));  //CHANGE TO blogData
      })
      .catch((err) => {
        dispatch(apiFail(err));
      });
  };
};
