const dotenv = require('dotenv');

dotenv.config();


export  let config = {  
    port: process.env.PORT || 3000,
   mailOptions:{
        service: process.env.MAIL_SERVICE || 'gmail',
        auth: {
            user: process.env.MAIL_USER || '',
            pass: process.env.MAIL_PASS || ''
        },
        text: process.env.MAIL_TEXT || 'Hello, this is a test email!',
        subject: process.env.MAIL_SUBJECT || 'Test Email',
   },
    jwt: {
        secret: process.env.JWT_SECRET ? process.env.JWT_SECRET : 'your_jwt_secret_key',
        expiresIn: process.env.JWT_EXPIRES_IN || '1h',
    }
}