const userController = require("../controllers/user");

module.exports = function(router) {
    router.post('/signup', userController.createUser);
    router.post('/login', userController.getUser);
    router.get('/allusers', userController.getUsers)
}
