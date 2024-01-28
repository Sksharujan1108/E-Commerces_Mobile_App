const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const app = express();
const port = 8000;
const cors = require("cors");

const corsOptions = {
  origin: 'http://10.0.2.2:8000/register', // Replace with the actual URL of your frontend
  optionsSuccessStatus: 200,
};

app.use(cors());

// const cors = require("cors");
// app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");
// app.listen(port, () => {
//   console.log("Server is running on port 8000");
// });

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
        user: "sharujanvirat1219@gmail.com",
        pass: "ddtv lhox ifom xfln",
      }
    })
  
    // Compose The Email Message
    const mailoptions = {
      from: 'amazon.com',       
      to: email,
      subject: 'Verify Your Email',
      text: `Please click the following link to verify your email: http://192.168.83.198:8000/verify/${verificationToken}`,
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

      if(!name || !email || !password) {
        return response.status(401).json({ 
          status: 401,
          message: 'Bad Request',
          errorDiscription: [
            'Please Input All Details'
          ],
        })
      }
  
      // Check if the email is Already Registered
      const existingUser = await Users.findOne({ email });
      if (existingUser) {
        return response.status(401).json({ 
          status: 401,
          message: 'Bad Request',
          errorDiscription: [
            'Email already registered, Please choose a different email.'
          ], 
        });
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
  
      response.status(200).json({ 
        status: 200,
        responseDto: {
          message: 'Registration Successful'
        }
      });
    } catch (err) {
      console.log('Error SignUp User', err);
      response.status(500).json({ 
        status: 500,
        message: 'Internal Server Error', 
        errors: [
          'An error occurred while processing the registration.'
        ],
      });
    }
  });
  
  
  // Endpoint Verify Email
  app.get('/verify/:token', async (req, res) => {
    try {
      const token = req.params.token;
  
      // Find the user with the given verification token
      const user = await Users.findOne({ verificationToken: token });
  
      if (!user) {
        return res.status(401).json({
          status: 401,
          message: 'Bad Request',
          errors: [
            'Invalid Token'
          ]
        });
      }
  
      // Mark the user as verified
      user.verified = true;
      user.verificationToken = undefined;
  
      await user.save();
  
      res.status(200).json({
        status: 200,
        responseDto: {
          message: 'Email Verified Successfully'
        }
      });
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: 'Internal Server Error',
        errors: [
          'Email Verification Failed'
        ]
      });
    }
  });

  
  const generateSecretKey = () => {
    const secretKey = crypto.randomBytes(32).toString("hex");
  
    return secretKey;
  };
  
  const secretKey = generateSecretKey();


  // EndPoint To Login The USer
// Endpoint To Login The USer
// Endpoint To Login The USer
app.post('/login', async (request, response) => {
  try {
    const { email, password } = request.body;

    // Check if the user exists
    const user = await Users.findOne({ email });
    if (!user) {
      return response.status(401).json({
        status: 401,
        jwttoken: null,
        refreshToken: null,
        errors: [
          'Invalid Email'
        ],
      });
    }

    // Check if the password is correct
    if (user.password !== password) {
      return response.status(401).json({
        status: 401,
        jwttoken: null,
        refreshToken: null,
        errors: [
          'Invalid Password'
        ],
      });
    }

    // Generate Token
    const jwttoken = jwt.sign({ userID: user._id }, secretKey);

    // Simulated refresh token for the example
    const refreshToken = jwt.sign({ userID: user._id, refresh: true }, secretKey);

    response.status(200).json({
      status: 200,
      jwttoken,
      refreshToken,
      responseDto: {
        message: 'Login successfully 🤓',
      },
    });
  } catch (err) {
    console.error('Error during login:', err);
    response.status(500).json({
      status: 500,
      message: 'Internal Server Error',
      jwttoken: null,
      refreshToken: null,
      errorDiscription: [
        'Login Failed'
      ],
    });
  }
});




//endpoint to store a new address to the backend
app.post("/addresses", async (req, res) => {
  try {
    const { userId, address } = req.body;

    //find the user by the Userid
    const user = await Users.findById(userId);
    if (!user) {
      return res.status(404).json({ 
          status: 404,
          message: 'Bad Request',
          errors: [
            'User not found'
          ],
      });
    }

    //add the new address to the user's addresses array
    user.addresses.push(address);

    //save the updated user in te backend
    await user.save();

    res.status(200).json({ 
      status: 200,
      responseDto: {
          message: 'Address created Successfully'
      },
    });
    
  } catch (error) {
    res.status(500).json({ 
      status: 500,
      message: 'Internal Server Error',
        errorDiscription: [
            'User not found'
          ],
    });
  }
});

//endpoint to get all the addresses of a particular user
app.get("/addresses/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await Users.findById(userId);
    if (!user) {
      return res.status(404).json({
        status: 404,
        message: 'Not Found',
        errors: [
          'User not found'
        ]
      });
    }

    const addresses = user.addresses;
    res.status(200).json({
      status: 200,
      responseDto: {
        addresses
      }
    });

  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Internal Server Error',
      errorDiscription: [
        'Error retrieving the addresses'
      ]
    });
  }
});