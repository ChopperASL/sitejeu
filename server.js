const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/font', express.static(path.join(__dirname, 'font')));
app.use('/documents', express.static(path.join(__dirname, 'documents')));

// routes vers chaque page HTML
app.get('/index.html', (req, res) => res.sendFile(path.join(__dirname, 'html', 'index.html')));
app.get('/apprendre.html', (req, res) => res.sendFile(path.join(__dirname, 'html', 'apprendre.html')));
app.get('/jouer.html', (req, res) => res.sendFile(path.join(__dirname, 'html', 'jouer.html')));
app.get('/mentions-legales.html', (req, res) => res.sendFile(path.join(__dirname, 'html', 'mentions-legales.html')));

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});