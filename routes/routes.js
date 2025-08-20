const express= require('express');
const {getUserById,getAllUsers}= require('../controller/controller');
const router = express.Router();


router.get("/user/:id",getUserById);
router.get("/users",getAllUsers);

module.exports=router;
