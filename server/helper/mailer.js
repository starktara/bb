const nodemailer = require('nodemailer');

async function mailer(output) {      
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

 module.exports = mailer;