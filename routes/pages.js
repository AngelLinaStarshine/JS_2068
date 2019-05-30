const router = require('express').Router();

//creates routes

//router.get('/about', (req, res) => {

  //  res.send(`Hey there world!`) });

// router.get('/about', (req, res) => {

   // res.send(`I like long walks on teh beach.`) });



   const PagesController = require('../Controllers/pageControllers');
router.get(`/`, PagesController.show);
router.get(`/about`, PagesController.show);
router.get(`/contact`, PagesController.show);



module.exports = router;

