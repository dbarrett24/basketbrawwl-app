var express = require('express');
var cors = require('cors');
var massive = require('massive');
var winston = require('winston');
var expressWinston = require('express-winston');

var app = module.exports = express();
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/public'));
// app.use('/static/', express.static(__dirname + '/node_modules/'));

const logConfiguration = {
    'transports': [
        new winston.transports.File({
            filename: './logs/example.log'
        })
    ]
}
const logger = winston.createLogger(logConfiguration);


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
    logger.info(req.params.teamId);
    console.log(req.params.teamId, "server request parameter: teamID");
    db.get_specific_team([req.params.teamId], function(error, data) {
        if(error) {
            res.statusCode(500).json(error);
            logger.info(res);
            
        }
        else {
            res.json(data);
            logger.info(res);
        }
    })
});


app.listen(config.port, function(){
    console.log('connected on port ', config.port);
});

