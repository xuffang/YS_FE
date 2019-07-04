const nodemailer = require("nodemailer");
const { 
	email, 
	password, 
	emailFrom, 
	emailTo, 
	emailSubject
}  = require('./config');
const { generateHTML } = require('./utils');

async function main(commitsInfo){

  let transporter = nodemailer.createTransport({
    host: "smtp.exmail.qq.com",
    port: 465,
    secure: true,
    auth: {
      user: email,
      pass: password
    }
  });

	try {
		let html = generateHTML(commitsInfo);
		let info = await transporter.sendMail({
			from: emailFrom, // sender address
			to: emailTo, // list of receivers
			subject: emailSubject, // Subject line
			html
		});
		console.log("邮件发送成功: %s", info.messageId);
	} catch (error) {
		throw error;
	}
}

module.exports = main;