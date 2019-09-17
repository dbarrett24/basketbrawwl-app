var express = require('express');
var cors = require('cors');
var massive = require('massive');
var angularFlickity = require('angular-flickity');
var flickity = require('flickity');
var flickityImagesLoaded = require('flickity-imagesloaded');

var app = module.exports = express();
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/public'));
app.use('/scripts', express.static(__dirname + '/node_modules/'));
app.use(angularFlickity());
app.use(flickity());
app.use(flickityImagesLoaded());

var config = require('./config.js');
var db = massive.connectSync({connectionString : config.elephantSQL});

app.set('db', db);
db.set_schema(function(error, data){
    if (error)console.log(error);
    else console.log("All tables successfully reset");
});

// app.get('/getLogo', function(req, res, next) {
//     db.get_teams(function(error, data) {
//         if(error) {
//             res.statusCode(500).json(error);
//         }
//         else {
//             res.json(data);
//         }
//     })
// });

app.get('/getTeamInfo/:teamId', function(req, res, next) {
    console.log(req.params.teamId);
    db.get_specific_team([req.params.teamId], function(error, data) {
        if(error) {
            res.statusCode(500).json(error);
        
        }
        else {
            res.json(data);
        }
    })
});











app.listen(config.port, function(){
    console.log('connected on port ', config.port);
});

