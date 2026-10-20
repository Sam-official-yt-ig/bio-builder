const express = require('express');
const app = express();

// 🗄️ Step 1: Our Database
const db = {
  "alex_dev": {
    bioText: "Creator & Developer 🚀",
    instagramId: "alex.codes",
    themeColor: "#4A90E2"
  },
  "samridh_creates": {
    bioText: "Building cool web apps! 💻",
    instagramId: "samridh_.creates",
    themeColor: "#ff5733"
  }
};

// 📝 Step 2: The Home Page
app.get('/', (req, res) => {
  res.send(`
    <div style="font-family: Arial; padding: 20px;">
      <h2>Welcome to the Bio Generator! 🚀</h2>
      <p>Try visiting a saved profile by typing one of these at the end of your browser's URL:</p>
      <ul>
        <li><code>/samridh_creates</code></li>
        <li><code>/alex_dev</code></li>
      </ul>
    </div>
  `);
});

// 🎨 Step 3: The Dynamic Template Route
app.get('/:username', (req, res) => {
  const user = req.params.username; // Get the name from the URL
  const userData = db[user];        // Look it up in the database

  if (userData) {
    // If user exists, inject their data into the HTML + CSS!
    res.send(`
      <style>
        body { 
          font-family: Arial, sans-serif; 
          display: flex; 
          justify-content: center; 
          align-items: center; 
          height: 100vh; 
          background: #f4f4f9; 
          margin: 0; 
        }
        .card { 
          background-color: ${userData.themeColor}; 
          color: white; 
          padding: 30px; 
          border-radius: 15px; 
          text-align: center; 
          width: 300px; 
          box-shadow: 0 4px 10px rgba(0,0,0,0.2); 
        }
        .btn { 
          display: inline-block; 
          margin-top: 15px; 
          padding: 10px 15px; 
          background: white; 
          color: #333; 
          text-decoration: none; 
          border-radius: 5px; 
          font-weight: bold; 
        }
      </style>
      
      <div class="card">
        <h1>${user}</h1>
        <p>${userData.bioText}</p>
        <a class="btn" href="https://instagram.com/${userData.instagramId}" target="_blank">Follow on Instagram 📱</a>
      </div>
    `);
  } else {
    // If the user isn't in the database
    res.status(404).send(`
      <div style="font-family: Arial; text-align: center; margin-top: 50px;">
        <h1>User not found! 😢</h1>
        <p>Make sure you added them to the <code>db</code> object in <code>index.js</code>.</p>
      </div>
    `);
  }
});

// ⚙️ Step 4: Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});