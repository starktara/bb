const express = require("express");
const nodemailer = require('nodemailer');
const router = express.Router();
const { Client } = require("@elastic/elasticsearch");
const client = new Client({ node: "http://localhost:9200" });
//details of seller and bike from sell page
router.get("/createSellerDetail", (req, res) => {
  async function run() {
    await client.indices.create(
      {
        index: "leadDetail",
        body: {
          mappings: {
            properties: {
              id: { type: "integer" },
              name: { type: "text" },
              type: { type: "integer" },
              brand: { type: "integer" },
              model: { type: "integer" },
              regnumber: { type: "text" },
              descr: { type: "text" },
              price: { type: "integer" },
              state: { type: "text" },
              city: { type: "text" },
              loc: { type: "text" },
              location: { type: "geo_point" },
              myear: { type: "integer" },
              mmonth: { type: "integer" },
              kmdriven: { type: "integer" },
              images: { type: "string" },
              mimage: { type: "string" },
              owner: { type: "string" },
              cc: { type: "integer" },
              bhp: { type: "integer" },
              category: { type: "integer" },
              mileage: { type: "integer" },
              phone:{ type: "integer" },
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

//details of buyer and bike from product detail page
router.get("/createBuyerIndex", (req, res) => {
  async function run() {
    await client.indices.create(
      {
        index: "buyerDetail",
        body: {
          mappings: {
            properties: {
              id: { type: "integer" },
              buyerName: { type: "text" },
              emailId: { type: "text" },
              phone: { type: "integer" },
              isEmi: { type: "integer" },
              vehicleId: { type: "integer" }
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

//details of buyer and bike from product detail page
router.get("/createFranchiseIndex", (req, res) => {
  async function run() {
    await client.indices.create(
      {
        index: "franchisedetail",
        body: {
          mappings: {
            properties: {
              name: { type: "text" },
              emailId: { type: "text" },
              phone: { type: "text" },
              city: { type: "text" },
              address: { type: "text" },
              pincode: { type: "integer" }
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

//details of buyer and bike from product detail page
router.get("/createSellerIndex", (req, res) => {
  async function run() {
    await client.indices.create(
      {
        index: "sellerdetails",
        body: {
          mappings: {
            properties: {
              name: { type: "text"},
              city: { type: "text"},
              brand:{ type: "text"},
              variant: {type: "text"},
              manufactureYear: { type: "integer"},
              mobile:{ type: "text"},
              address: {type: "text"},
              model: {type: "text"},
              kmsdriven: { type: "text"}
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

router.post("/insertFranchiseRequest", (req, res) => {
  let formData = req.body;
  //console.log(formData);
  async function upload() {
    const dataset = [
      {
        name: formData.name.value,
        emailId: formData.email.value,
        phone: formData.mobile.value,
        city: formData.city.value,
        address: formData.address.value,
        pincode: formData.pin.value
      }
    ];
     const data = dataset[0];
    // console.log(output);
    const output = `
      <table border='1' style='width:100%'>
        <tr>
          <td> Name </td>
          <td> ${data.name} </td>
        </tr>
        <tr>
          <td> Mobile No. </td>
          <td> ${data.phone} </td>
        </tr>
        <tr>
          <td> Email </td>
          <td> ${data.emailId} </td>
        </tr>
        <tr>
          <td> City </td>
          <td> ${data.city} </td>
        </tr>
        <tr>
          <td> Address </td>
          <td> ${data.address} </td>
        </tr>
        <tr>
          <td> Pincode </td>
          <td> ${data.pincode} </td>
        </tr>
      </table>
    `;

    async function main() {      
      let transporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'webadmin@bikebazaar.com',
          pass: 'bikebaz@1981'
        }
      });

      let info = await transporter.sendMail({
        from: '"Trial" <webadmin@bikebazaar.com>', // sender address
        to: 'ankit@tekonika.co', 
        subject: "Franchise request", // Subject line
        text: '', // plain text body
        html: output // html body
      });
    
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
    main().catch(console.error);

    const body = dataset.flatMap(doc => [
      { index: { _index: "franchisedetail" } },
      doc
    ]);

    const { body: bulkResponse } = await client.bulk({ refresh: true, body });

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

router.post("/insertSellrequest",(req,res) => {
  let formData = req.body;
  console.log(formData);
  async function upload() {
    const dataset = [
      {
        name: formData.name.value,
        city: formData.city.value,
        brand:formData.make.value ,
        variant: formData.variant,
        mobile:formData.mobile.value ,
        address: formData.address,
        model: formData.model.value,
        kmsdriven: formData.kmsdriven,
        manufactureYear: formData.yom.value
      }
    ];
    const body = dataset.flatMap(doc => [
      { index: { _index: "sellerdetails" } },
      doc
    ]);

    const { body: bulkResponse } = await client.bulk({ refresh: true, body });

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

})

module.exports = router;
