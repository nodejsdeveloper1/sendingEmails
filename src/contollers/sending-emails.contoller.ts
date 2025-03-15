
import {config} from "../config/appconfig"
const nodemailer = require("nodemailer");

let sendEmail = (req, res) => {             
   
    let transporter = nodemailer.createTransport({
        service:config.mailOptions.service,
        auth:{
            user:config.mailOptions.auth.user,
            pass:config.mailOptions.auth.pass
        },
    })
    
    const mailOptions = {
        from: config.mailOptions.auth.user,
        to: req.body.to,
        subject: config.mailOptions.subject,
        // subject: req.body.subject,
        text: config.mailOptions.text
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.status(500).send(error);
        } else {
            console.log('Email sent Successfully: ' + info.response);
            res.status(200).send(info.response);
        }
    });
}

module.exports = {  sendEmail}