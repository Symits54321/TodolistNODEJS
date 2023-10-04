


const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);

router.post('/create', homeController.addTask);

router.post('/delete', homeController.deleteTask);


module.exports = router;









