const nodemailer = require("nodemailer");
const {html} = require('./data')
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER,
  port: process.env.SMTP_PORT,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.MY_EMAIL,
    pass: process.env.MY_PASS,
  },
  
})
transporter.verify((err, success) => {
    if (err) {
        console.log("Error:", err);
    } else {
    console.log("Server is ready to take our messages");
    }
})
const sendEmail = async (to) => {
    try {

        const info = await transporter.sendMail({
            from: process.env.FROM, // sender address
            to, // reciever
            subject: process.env.SUBJECT, // Subject line
            html // html body
        })   
        console.log("Email is sent:", info.messageId, ":" , to)
    } catch (err) {
        console.log(err)
    }
}

module.exports = sendEmail