var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service:'gmail',
	auth:{
		user: "xxxxx@gmail.com",
		pass: "xxxxxx"
	}
});

var mailOptions = {
	from: 'xxxxxxxx@gmail.com',
	to: 'xxxxxx@gmail.com',
	subject: 'sending Email using Node.js',
	text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
	if (error) {
		console.log(error);
	} else {
		console.log('Email sent:' + info.response);
	}
})