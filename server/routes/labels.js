const express = require('express');
const router = express.Router();

const Labels = require('../lib/models/labelsSchema');

/* GET labels. */

router.post('/', (req, res) => {
  Labels.find(req.body, (err, data) => {
    res.json(data);
  });
});


module.exports = router;