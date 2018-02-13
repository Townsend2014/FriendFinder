
// Load Data. Determine what data the user sees and post to server to store
var friendData = require("../data/friends.js");

module.exports = function(app) {
    app.get('api/survey', function(req, res) {
        res.json(friendData);
    });
}