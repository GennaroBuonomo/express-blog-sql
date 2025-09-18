// stabilisco la connessione al db
const connection = require('../data/db.js');

//definisco le rotte per i post
//INDEX
const index = (req, res) => {
  const sql = "SELECT * FROM posts"
}

//SHOW
const show = (req, res) => {
  const id = parseInt(req.params.id);
  
  //recupero il post con l'id
  const post = posts.find(item => item.id === id);

  res.json(post);
}

//STORE
const store = (req, res) => {
  //genero il nuovo id
  const newId = posts[posts.length - 1].id + 1;

    //recupero i dati nel body della richiesta
  const { titolo, contenuto, immagine, tags} = req.body;
  
  //Creo l'oggetto nell'array
  const newPost = {
    id: newId,
    titolo,
    contenuto,
    immagine,
    tags
  }

   //pusho l'oggetto nell'array
   posts.push(newPost);

   res.status(201).json(newPost);
}

//UPDATE
const update = (req, res) => {
  const id = parseInt(req.params.id);

  //recupero i dati passati tramite il body della richiesta
  const { titolo, contenuto, immagine, tags} = req.body;

  //Recupero il post con l'id passato come parametro
  const post = posts.find(item => item.id === id)

  post.titolo = titolo;
  post.contenuto = contenuto;
  post.immagine = immagine;
  post.tags = tags;

  res.send(post);
}

//MODIFY
const modify = (req, res) => {
  const id = req.params.id;

  const post = posts.find(item => item.id === id)
  res.send(`Modifica parziale del post con id ${id}`)
}

//DESTROY
const destroy = (req, res) => {
  const id = parseInt(req.params.id);

  const post = posts.find(item => item.id === id)

  //Cancellare il post dall array
  posts.splice(posts.indexOf(post), 1);
  //restituisco lo status 204
  res.sendStatus(204);
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}