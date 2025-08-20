
const express= require('express');
const {getProductById,getAllProducts}= require('../controller/controller');
const router = express.Router();


router.get("/product/:id",getProductById);
router.get("/product",getAllProducts);

module.exports=router;
