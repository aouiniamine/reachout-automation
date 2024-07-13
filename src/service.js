const nodemailer = require("nodemailer");

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
const sendEmail = async (email) => {
    try {

        const info = await transporter.sendMail({
            from: process.env.FROM, // sender address
            to: "", // list of receivers
            subject: process.env.SUBJECT, // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        })   
        console.log("Email is sent:", info.messageId, ":" , email)
    } catch (err) {
        console.log(err)
    }
}

module.exports = sendEmail