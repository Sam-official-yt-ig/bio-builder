// 1. Select DOM elements 🎯
const generateBtn = document.getElementById("generate-btn");
const outputBox = document.getElementById("output-box");
const generatedHtmlTextarea = document.getElementById("generated-html");
const copyBtn = document.getElementById("copy-btn");

// 2. Generate code event ⚡
generateBtn.addEventListener("click", () => {
  // Read main inputs 📝
  const cardColor = document.getElementById("card-color").value;
  const username = document.getElementById("username").value || "@alex";
  const tagline = document.getElementById("tagline").value || "Welcome to my page!";
  const link1Title = document.getElementById("link1-title").value || "My Website";
  const link1Url = document.getElementById("link1-url").value || "https://example.com";

  // Read social media inputs 🔗
  const instagramUrl = document.getElementById("instagram-url").value;
  const twitterUrl = document.getElementById("twitter-url").value;

  // Build social buttons HTML conditionally with Icons 🌐
  let socialLinksHtml = "";
  if (instagramUrl) {
    socialLinksHtml += `<a href="${instagramUrl}" target="_blank" class="glass-btn social-btn instagram"><span class="icon">📱</span> Instagram</a>\n    `;
  }
  if (twitterUrl) {
    socialLinksHtml += `<a href="${twitterUrl}" target="_blank" class="glass-btn social-btn twitter"><span class="icon">🐦</span> Twitter</a>\n    `;
  }

  // Build full HTML template with aesthetic image wallpaper 🏗️
  const generatedCode = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${username}'s Bio</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; }
    
    /* 1. Aesthetic Wallpaper Background 🌌 */
    body { 
      background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
                  url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop') no-repeat center center/cover;
      display: flex; justify-content: center; align-items: center; 
      min-height: 100vh; padding: 20px; color: white; 
    }

    /* 2. Glassmorphism Card 🥃 */
    .card { 
      background: rgba(255, 255, 255, 0.05);
      padding: 40px; border-radius: 24px; 
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
      max-width: 400px; width: 100%; text-align: center;
      border-bottom: 5px solid ${cardColor};
    }

    h1 { font-size: 2.2rem; margin-bottom: 0.5rem; color: #fff; }
    p { font-size: 1rem; color: #e6edf3; margin-bottom: 2rem; opacity: 0.9; }

    /* 3. Glass Buttons 💎 */
    .glass-btn { 
      display: flex; align-items: center; justify-content: center;
      margin: 15px 0; padding: 15px; border-radius: 12px;
      text-decoration: none; font-weight: bold; font-size: 1.1rem;
      transition: all 0.2s ease;
    }

    .main-link { 
      background: linear-gradient(135deg, #a78bfa, #f472b6);
      color: #fff; box-shadow: 0 5px 15px rgba(167, 139, 250, 0.3);
    }
    .main-link:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(167, 139, 250, 0.5); }

    .social-btn { 
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(5px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: #fff;
    }
    .social-btn:hover { background: rgba(255, 255, 255, 0.18); transform: scale(1.02); }

    .icon { margin-right: 12px; font-size: 1.2rem; display: inline-flex; align-items: center; }
  </style>
</head>
<body>
  <div class="card">
    <h1>${username}</h1>
    <p>${tagline}</p>
    <a href="${link1Url}" target="_blank" class="glass-btn main-link">${link1Title}</a>
    ${socialLinksHtml}
  </div>
</body>
</html>`.trim();

  // Show code in textarea and unhide box 📤
  generatedHtmlTextarea.value = generatedCode;
  outputBox.classList.remove("hidden");
});

// 3. Copy code event 📋
if (copyBtn) {
  copyBtn.addEventListener("click", () => {
    generatedHtmlTextarea.select();
    navigator.clipboard.writeText(generatedHtmlTextarea.value);
    
    copyBtn.textContent = "Copied! ✅";
    setTimeout(() => {
      copyBtn.textContent = "Copy Code 📋";
    }, 2000);
  })
}