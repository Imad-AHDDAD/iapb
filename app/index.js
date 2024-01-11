const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "imadahddad02@gmail.com",
    pass: "kdngylkeqrgbttjp",
  },
});

app.use(cors());
app.use(express.json());

app.post("/sendEmail", async (req, res, next) => {
  const { name, email, message } = req.body;

  await transporter.sendMail({
    from: email,
    to: "imadahddad01@gmail.com", 
    subject: "Message from your portfolio ✔",
    html: `<div>sender name : <b>${name}</b></div><br/>
    <div>sender email : <b>${email}</b></div><br/>
    <div>message : <b>${message}</b></div><br/>`
  });
  res.send({message: "Message sent successfully, thank you"});
});

app.get("/", async (req, res, next) => {
  res.send("Welcome");
});

app.listen(5000, () => {
  console.log("Server is running on prot 5000 ...");
});
