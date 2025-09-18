//IMPORTO EXPRESS
const express = require('express');

//CHIAMO LA FUNZIONE EXPRESS E NE RESTITUISCO IL VALORE IN UNA VARIABILE APP
const app = express();

//DEFINISCO LA PORTA 3000
const port = 3000;

//IMPORTO IL MIDDLEWARE NOTFOUND
const notFound = require('./middlewares/notFound.js');
//IMPORTO IL MIDDLEWARE ERRORHADLER
const errorsHandler = require('./middlewares/errorsHandler.js');

//IMPORTO IL FILE ROUTER PER I POST
const postsRouter = require('./routers/postRouter');

//INSERIMENTO DEL MIDDLEWARE PER I FILE STATICI
app.use(express.static('public'));

//UTILIZZO IL BODY PARSER JSON PER RECUPERARE LE INFORMAZIONI DAL BODY DI UNA RISCHIESTA
app.use(express.json());

//DEFINISCO LE ROTTE DEI POST
app.use('/posts', postsRouter);

//UTILIZZO FLOBALE NOTFOUND
app.use(notFound);
//UTILIZZO FLOBALE ERRORHANDLER
app.use(errorsHandler);

//DEFINISCO LA ROTTA BASE
app.get('/', (req, res) => {
  res.send("Benvenuti nei post");
})

//DICHIARO ALLA NOSTRA APPLICAZIONE DI RESTARE IN ASCOLTO SULLA PORTA DEFINITA IN ALTO
app.listen(port, () => {
  console.log(`Server dei miei post sulla porta ${port}`);
})