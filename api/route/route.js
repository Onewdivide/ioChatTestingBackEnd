module.exports = function(app) {
    const Controller = require('../controller/controller');
    const Model = require('../model/model');

    app.route('/vote/:agenda_id')
        .get(Controller.test);

    app.route('/voteAll')
        .get(Controller.voteAll);

}