const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = 8080;
const IMG = path.join(__dirname, 'Aniicone_Poster_Mobile.png');

const lanIP = Object.values(os.networkInterfaces()).flat()
  .filter(i => i.family === 'IPv4' && !i.internal)
  .map(i => i.address)[0] || 'localhost';

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Aniicone's Poster</title>
<script>
window.onload = function () {
  setTimeout(function () {
    var a = document.createElement('a');
    a.href = 'poster.png';
    a.download = 'Aniicone_Poster_Mobile.png';
    document.body.appendChild(a);
    a.click();
  }, 300);
};
</script>
<style>body{margin:0;background:#FFF6E9;display:flex;align-items:center;justify-content:center;min-height:100vh;}img{width:100%;max-width:500px;height:auto;display:block;}</style>
</head>
<body>
<img src="poster.png" alt="Aniicone's poster">
</body>
</html>`;

http.createServer((req, res) => {
  const url = req.url.split('?')[0];
  if (url === '/' || url === '/index.html') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(html);
  } else if (url === '/poster.png') {
    fs.readFile(IMG, (err, data) => {
      if (err) { res.writeHead(404); res.end('Not found'); return; }
      res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': data.length,
        'Content-Disposition': 'inline; filename="Aniicone_Poster_Mobile.png"'
      });
      res.end(data);
    });
  } else {
    res.writeHead(404); res.end('404');
  }
}).listen(PORT, () => {
  console.log('Aniicone poster server running on your network (no third party):');
  console.log('  Page + auto-download : http://' + lanIP + ':' + PORT + '/');
  console.log('  Direct image         : http://' + lanIP + ':' + PORT + '/poster.png');
});
