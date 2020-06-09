const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const router = express.Router();
const { Client } = require("@elastic/elasticsearch");
const client = new Client({ node: "http://localhost:9200" });
const  mailer = require('../../helper/mailer');

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
              email: { type: "text" },
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
  async function insertRoot(){
    const dataset = [{
      name: 'root',
      email: 'root@bikebazaar.com',
      gender: 'NA',
      phone: '0000000000',
      interests: 'NA',
      userName: 'root',
      password: 'root'
    }];
    const body = dataset.flatMap(doc => [
      { index: { _index: "user-detail" } },
      doc
    ]);
    const { body: bulkResponse } = await client.bulk({ refresh: true, body });
    console.log(bulkResponse);
  }
  insertRoot().catch(console.log);
  res.json({ msg: "Index Created Sucessfully" });
});

//function to sign up
router.post("/insertUserDetails", (req, res) => {
  let formData = req.body;
  
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(formData.password.value, salt, (err, hash) => {
      if (err) throw err;
      async function upload() {
        const userName = await client.search({
          index: "user-detail",
          body: {
            from: 0,
            size: 1,
            query: {
              match_phrase: {
                userName: formData.loginid.value
              }
            }
          }
        });
        const emailId = await client.search({
          index: "user-detail",
          body: {
            from: 0,
            size: 1,
            query: {
              match_phrase: {
                email: formData.email.value
              }
            }
          }
        });
        if (
          emailId.body.hits.total.value == 0 &&
          userName.body.hits.total.value == 0
        ) {
          const dataset = [
            {
              name: formData.name.value,
              email: formData.email.value,
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
          res.send({ type: "success", msg: "User added successfully!" });
        } else {
          res.send({ type: "error", msg: "User already exists" });
        }
      }
      upload().catch(console.log);
    });
  });
});

//function to login user
router.post("/login", (req, res) => {
  async function loginUser() {
    const email = req.body.loginid;
    const password = req.body.password;
    console.log(email);
    const userName = await client.search({
      index: "user-detail",
      body: {
        from: 0,
        size: 1,
        query: {
          match_phrase: {
            userName: email.value
          }
        }
      }
    });

    const emailId = await client.search({
      index: "user-detail",
      body: {
        from: 0,
        size: 1,
        query: {
          match_phrase: {
            email: email.value
          }
        }
      }
    });
    if (
      emailId.body.hits.total.value == 0 &&
      userName.body.hits.total.value == 0
    ) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    let savedPassword =
      emailId.body.hits.total.value == 0
        ? userName.body.hits.hits[0]._source.password
        : emailId.body.hits.hits[0]._source.password;
    //Check password
    bcrypt.compare(password.value, savedPassword).then(isMatch => {
      if (isMatch) {
        // Create JWT Payload
        const payload = {
          id:
            emailId.body.hits.total.value == 0
              ? userName.body.hits.hits[0]._id
              : emailId.body.hits.hits[0]._id,
          name:
            emailId.body.hits.total.value == 0
              ? userName.body.hits.hits[0]._source.name
              : emailId.body.hits.hits[0]._source.name
        };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  }
  loginUser().catch(console.log);
});

router.post("/contactUs", (req, res) => {
  // res.send("success");
  let formData = req.body;
  async function contact () {
    const dataset = [
      {
        name: formData.name.value,
        mobile: formData.mobile.value,
        email: formData.email.value,
        interestedIn: formData.interestedIn,
        query: formData.query.value
      }
    ];
    const data = dataset[0];
    const dateTime = new Date();
    const output = `
      <h3>Details from Contact Us page</h3>
      <table border='1' style='width:100%'>
        <tr>
          <td> Name </td>
          <td> ${data.name} </td>
        </tr>
        <tr>
          <td> Mobile No. </td>
          <td> ${data.mobile} </td>
        </tr>
        <tr>
          <td> Email </td>
          <td> ${data.email} </td>
        </tr>
        <tr>
          <td> Query </td>
          <td> ${data.query} </td>
        </tr>
        <tr>
          <td> Date </td>
          <td> ${dateTime} </td>
        </tr>
      </table>
    `;
    const subject = data.interestedIn;

    const sendToEmail = 'rahul.khedkar@bikebazaar.com';
    mailer(output, subject, sendToEmail)
    .then(resp => res.send(resp))
    .catch(console.error);

  }
  contact().catch(console.log);
});

module.exports = router;
