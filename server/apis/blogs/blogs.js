const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/getBlogsByPage", async (req, res) => {
  async function getBlogsByPageNumber() {
    const result = await axios.get(
      "http://localhost:8080/wordpress/index.php/wp-json/wp/v2/posts?page=" +
        req.query.pageNumber
    );

    const resultData = result.data;
    let finalDataArray = resultData.map(function (item) {
      item.totalPagesInBlog = result.headers["x-wp-totalpages"];
      return item;
    });
    res.send(finalDataArray);
  }
  getBlogsByPageNumber().catch(console.log);
});


router.get("/getBlogByBlogId", async (req, res) => {
  async function getBlogById() {
    const result = await axios.get(
      "http://localhost:8080/wordpress/index.php/wp-json/wp/v2/posts/" +
        req.query.blogId
    );

    res.send(result.data);
  }
  getBlogById().catch(console.log);
}); 

module.exports = router;
