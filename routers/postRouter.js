//importo express
const express = require('express');

//definisco un' istanza della classe Router di express
const router = express.Router();

//Importo il controllers
const postControllers = require('../controllers/postController.js');

//definisco le rotte per i post
//INDEX
router.get('/', postControllers.index);

//SHOW
router.get('/:id', postControllers.show);

//STORE 
router.post('/', postControllers.store);

//UPDATE
router.put('/:id', postControllers.update);

//MODIFY
router.patch('/:id', postControllers.modify)

//DESTROY
router.delete('/:id', postControllers.destroy);


//Esporto il router
module.exports = router;