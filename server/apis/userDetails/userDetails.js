const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { Client } = require("@elastic/elasticsearch");
const client = new Client({ node: "http://localhost:9200" });
//details of seller and bike from sell page
router.get("/createUser", (req, res) => {
  async function run() {
    await client.indices.create(
      {
        index: "user-detail",
        body: {
          mappings: {
            properties: {
              id: { type: "integer" },
              name: { type: "text" },
              email: { type: "integer" },
              gender: { type: "text" },
              phone: { type: "integer" },
              interests: { type: "string" },
              userName: { type: "string" },
              password: { type: "string" }
            }
          }
        }
      },
      { ignore: [400] }
    );
  }
  run().catch(console.log);
  res.json({ msg: "Index Created Sucessfully" });
});

router.post("/insertUserDetails", (req, res) => {
  let formData = req.body;
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(formData.password.value, salt, (err, hash) => {
      if (err) throw err;
      async function upload() {
        const dataset = [
          {
            name: formData.name.value,
            emailId: formData.email.value,
            phone: formData.mobile.value,
            gender: formData.gender.value,
            interests: formData.interest.value,
            userName: formData.loginid.value,
            password: hash
          }
        ];
        const body = dataset.flatMap(doc => [
          { index: { _index: "user-detail" } },
          doc
        ]);

        const { body: bulkResponse } = await client.bulk({
          refresh: true,
          body
        });

        if (bulkResponse.errors) {
          const erroredDocuments = [];
          bulkResponse.items.forEach((action, i) => {
            const operation = Object.keys(action)[0];
            if (action[operation].error) {
              erroredDocuments.push({
                status: action[operation].status,
                error: action[operation].error,
                operation: body[i * 2],
                document: body[i * 2 + 1]
              });
            }
          });
          console.log(erroredDocuments);
        }
        res.send("successfully inserted");
      }
      upload().catch(console.log);
    });
  });
});

module.exports = router;
