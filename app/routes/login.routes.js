module.exports = (app) => {
    const login = require('./../controllers/login.controller');

    app.post('/loginCreate', login.create);
    app.post('/login', login.findOne);
};