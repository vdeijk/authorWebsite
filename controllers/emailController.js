const sendEmail = require('../utils/email');
const util = require('util');

exports.sendeBook = (req,res) => {  
  const body = util.inspect(req.body,false,null);
     sendEmail({
      to: body,
      subject: "Free Space Wizard E-Book",
      text: "You can download it here!"
    });
        
      res.status(200).json({
        status: 'success',
        message: 'Email sent!'
      });
}
