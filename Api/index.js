const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");

// Connect to MongoDB database
const URI = 'mongodb+srv://sksharujan27:SKsharu2708@cluster0.nbvtgdr.mongodb.net';
//  'mongodb+srv://sharujanvirat1219:Sksharu1127@cluster0.skb9owg.mongodb.net'


mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected To MongoDB");
  })
  .catch((err) => {
    console.log("Error Connection To MongoDB", err.message);
  });

app.listen(port, () => {
  console.log("Server Is Running On Port 8000");
});


// Corrected file path assuming it's a JavaScript file
const Users = require('./Models/User');
const Orders = require('./Models/Order');


// Function To sendVerification To User
const sendVerification = async (email,verificationToken) => {
    // Create nodemailer TransPort
    const transporter = nodemailer.createTransport({
      // Configure the Email Service
      service: 'Gmail',
      auth: {
        user: "sksharujan27@gmail.com",
        pass: "sksharu2708",
      }
    })
  
    // Compose The Email Message
    const mailoptions = {
      from: 'amazon.com',
      to: email,
      subject: 'Verify Your Email',
      text: `Please click the following link to verify your email: http://localhost:8000/verify/${verificationToken}`,
    } ;
  
    // send The Email
    try {
      await transporter.sendMail(mailoptions)
      console.log("Verification email sent successfully");
    } catch (err) {
      console.log('Error Sending Verification Email', err)
    }
    
  }
  // Register a new user
// ... existing imports and setup ...
  
  // Endpoint To Register In The App
  app.post('/register', async (request, response) => {
    try {
      const { name, email, password } = request.body;
  
      // Check if the email is Already Registered
      const existingUser = await Users.findOne({ email });
      if (existingUser) {
        return response.status(400).json({ message: 'Email Already Registered' });
      }
  
      // create A New User
      const newUser = new Users({ name, email, password });
  
      // Generate and store the Verification Token
      newUser.verificationToken = crypto.randomBytes(20).toString('hex');
  
      // Save The User To The Database
      await newUser.save();

      // Debugging statement to verify data
      console.log("New User Registered:", newUser);
  
      // Send Verification Email To the User
      sendVerification(newUser.email, newUser.verificationToken)
  
      response.status(201).json({ message: 'Registration Successful' });
    } catch (err) {
      console.log('Error SignUp User', err);
      response.status(500).json({ message: 'Registration Failed' });
    }
  });
  
  
  // Endpoint Verify Email
  app.get('verify/:token', async(req, res) => {
    try {
      const token = req.params.token;
  
      // Find The User With The Given Verification Token
      const user = await Users.findOne({verificationToken: token})
      if (!user) {
        return res.status(400).json({ message: 'Invalid Token' });
      }
  
      // Mark Teh User As Verified
      user.verified = true;
      user.verificationToken = undefined;
  
      await user.save();
      
      res.status(200).json({ message: 'Email Verified Successfully'})
    } catch (err) {
      res.status(500).json({ message: 'Email Verification Failed'})
    }
  })

  // const generateSecretKey = () => {
  //   const secretKey = crypto.randomBytes(32).toString("hex");
  
  //   return secretKey;
  // };
  
  // const secretKey = generateSecretKey();