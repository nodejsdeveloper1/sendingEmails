const express = require('express');
const router = express.Router();
const { sendEmail } = require('../contollers/sending-emails.contoller');


router.post('/', sendEmail);

export default router;