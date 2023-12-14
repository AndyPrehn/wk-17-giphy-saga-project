const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = 'SELECT "gif_url" FROM "favorites";';
  pool.query(queryText)
    .then((result) => {res.send(result.rows)})
    .catch((error) => {
      console.log('Error retireving favorites from database', error);
      res.sendStatus(500);
    })
});

// add a new favorite
router.post('/', (req, res) => {
  console.log(`req.body:`, req.body.images.fixed_height.url);
  const queryText = 'INSERT INTO "favorites" ("gif_url") VALUES ($1);';
  const queryValues = [req.body.images.fixed_height.url];
  // console.log(`queryValues`, queryValues);
  pool.query(queryText, queryValues)
  .then(() => {res.sendStatus(201);})
  .catch((error) => {
    console.log('Error saving to favorites', error)
    res.sendStatus(500);
  })
});

// update a favorite's associated category
router.put('/:id', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/:id', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
