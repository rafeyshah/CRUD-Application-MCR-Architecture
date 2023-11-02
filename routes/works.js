const workController = require("../controllers/work");

module.exports = function(router) {
    router.post('/create', workController.createWork);
    router.get('/get', workController.getWorks);
    router.get('/get/:name', workController.getWork);
    router.put('/update/:id', workController.updateWork);
    router.delete('/remove/:id', workController.removeWork);
}
