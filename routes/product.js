var express = require('express');
var router = express.Router();
var axios = require('axios').default;


// router.get('/', function(req, res, next) {
//     res.render('product', { title: 'E-Commerce' });
//   });
 
  // module.exports = router;

/* GET users listing. */

router.get('/', (req, res, next) => {
  axios.get("https://dummyjson.com/products").then((prod) => {
   
      console.log(prod.data);
  
  res.render('product', { title: 'E-Commerce',products:data.data });
});
});
// res.render('products',{title: 'preduct page here',products:data.data})
module.exports = router;


