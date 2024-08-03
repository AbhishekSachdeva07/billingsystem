import nodemailer from 'nodemailer'
import dotenv from "dotenv"

dotenv.config();

const sendWelcomemail = (email)=>{
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
    });
    async function main() {
    // send mail with defined transport object
        const info = await transporter.sendMail({
            from: 'utinder1@gmail.com', // sender address
            to: email, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: `You successfully created your account at <b>http://localhost:5173</b>`, // html body
        });
      
        console.log("Message sent: %s", info.messageId);
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
    }
      
    main().catch(console.error);
      
}

export default sendWelcomemail;