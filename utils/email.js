const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config({path:"./config.env"});

const sendEmail = async options => {
let transporter = nodemailer.createTransport({
service: process.env.EMAIL_HOST,
auth: {
    
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
}});

const mailOptions = {
    from: "rickvdeijk@gmail.com",
    to: options.to,
    subject: options.subject,
    text: options.text
};

await transporter.sendMail(mailOptions)
}

module.exports = sendEmail;

/*
auth: {

    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
    user: "rickvdeijk@gmail.com",
    pass: "Ditraadjeniet11!",
}});
*/