// -signup  Get  signup page
// /login     Get.   Log in page
// -signup   POST.  Create new user in db
// /login.     POST authenticate a current user



const {Router} =require('express')
const authController = require('../controllers/authController');

const router = Router();

router.get('/signup', authController.signup_get)
router.post('/signup', authController.signup_post)
router.get('/login', authController.login_get)
router.post('/login', authController.login_post)
router.get('/logout', authController.logout_get)

module.exports = router;