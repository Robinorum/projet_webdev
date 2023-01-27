const express = require('express');
const session = require('express-session');

const MongoClient = require('mongodb').MongoClient;
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
const { tacheGet, tachePost, tacheDelete, tachePut } = require('./tacheController');
const cors = require('cors');
const { signin, login, logout, isConnected } = require('./authController');

const url = "mongodb://127.0.0.1:27017/";
const app = express();
const port = 3000;

app.use(bodyParser.json());


app.use(cors({ credentials: true, origin: 'http://localhost:4200' }))

function checkSignIn(req, res, next) {
  if (req.session.user) {
    next();     //Si la session exist on passe à la callback suivante
  } else {
    res.status(401).send("Unauthorized");
  }
}

app.use(session({
  secret: "chut, c'est un secret",
  name: "cookieTacheApplication"
}));

app.post('/signin', signin);
app.post('/login', login);
app.post('/logout', logout);
app.get('/isconnected', checkSignIn, isConnected);

app.get('/taches', checkSignIn, tacheGet);
app.post('/taches', checkSignIn, tachePost);
app.delete('/taches/:id', checkSignIn, tacheDelete);
app.put('/taches/:id', checkSignIn, tachePut);

app.listen(port, () => {
  console.log(`L'application écoute le port ${port}`)
})