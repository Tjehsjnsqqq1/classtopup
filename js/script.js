// comingsoon.js

// Create container
const container = document.createElement('div');
container.style.height = '100vh';
container.style.background = 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)';
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';
container.style.fontFamily = '"Press Start 2P", cursive';
container.style.color = '#00ffcc';
container.style.textShadow = '0 0 10px #00ffcc, 0 0 20px #00ffcc';
document.body.style.margin = '0';
document.body.style.backgroundColor = '#000';
document.body.appendChild(container);

// Load Google Font (retro pixel style)
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

// Create animated heading
const heading = document.createElement('h1');
heading.textContent = 'COMING SOON';
heading.style.fontSize = '32px';
heading.style.animation = 'pulse 1.2s infinite alternate';
container.appendChild(heading);

// Create subtext
const subheading = document.createElement('p');
subheading.textContent = 'by Monon & Shimanto';
subheading.style.fontSize = '14px';
subheading.style.marginTop = '20px';
subheading.style.color = '#ff00ff';
subheading.style.textShadow = '0 0 8px #ff00ff';
container.appendChild(subheading);

// Add glow animation via JS
const style = document.createElement('style');
style.textContent = `
@keyframes pulse {
  0% { text-shadow: 0 0 5px #00ffcc, 0 0 10px #00ffcc; }
  100% { text-shadow: 0 0 15px #00ffcc, 0 0 30px #00ffcc; }
}
`;
document.head.appendChild(style);
