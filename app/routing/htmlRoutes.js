// help direct users. When they click on the link

var path = require("path");

module.exports = function(app) {

    // send a file using express and node
    app.get('/survey', function(req,res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

    app.use(function(req,res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
}