require("dotenv").config()
const nodemailer = require("nodemailer")

let userController = {
    index:(req,res)=> {
        return res.render("home")
    },
    email:(req,res)=> {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL, 
                pass: process.env.PASSWORD
            }
        });
        let mailOptions = {        
            from:req.body.email ,             
            to:process.env.EMAIL ,
            subject:`Message from ${req.body.name}`,
            text: `${req.body.message}`
        
        };
        transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
                console.log('Error al enviar',err);
            } else {
            console.log('Email enviado!!!');
            }
        });
        return res.redirect("/")        
    }            
}

module.exports = userController