angular.module("brawlApp").service("mainService", function($http){
    // *********************************** 
    //                TEST
    this.test1 = "Service is working";
    // *********************************** 


// ****************************************
//     this.getPlayers = function(){
//         return $http ({
//             method: 'GET',
//             url:"https://api.stattleship.com/basketball/nba/players",
//             headers: {
//                 'Content-Type' : 'application/json',
//                 'Authorization' : 'Token token=46dbbda6eb33623048fb17208f8bea1c',
//                 'Accept': 'application/vnd.stattleship.com; version=1'
//             }
//         }).then(function(response){
//             // console.log(response.data)
//             return response.data;
//         })
//     }

//    this.getPlayerStats = function(){
//         return $http ({
//             method: 'GET',
//             url:"https://api.stattleship.com/basketball/nba/player_season_stats/?season_id=" + "nba-2015-2016" + "&player_id="  + "nba-arron-afflalo",
//             headers: {
//                 'Content-Type' : 'application/json',
//                 'Authorization' : 'Token token=46dbbda6eb33623048fb17208f8bea1c',
//                 'Accept': 'application/vnd.stattleship.com; version=1'
//             }
//         }).then(function(response){
//             // console.log(response.data)
//             return response.data;
//         })
//     }



//     this.getRosters = function(teamSlug){
//         return $http ({
//             method: 'GET',
//             url:"https://api.stattleship.com/basketball/nba/rosters/?team_id=" + teamSlug,
//             headers: {
//                 'Content-Type' : 'application/json',
//                 'Authorization' : 'Token token=46dbbda6eb33623048fb17208f8bea1c',
//                 'Accept': 'application/vnd.stattleship.com; version=1'
//             }
//         }).then(function(response){
//             // console.log(response.data)
//             return response.data;
//         })
//     }
// ****************************************

this.getDbData = function(id){
    return $http ({
        method: 'GET',
        url: '/getTeamInfo/' + id

    }).then(function(response){
        // console.log("hello" + response);
        return response.data;
    })
}

 //get team-select logos
    this.getTeams = function(){
        return $http ({
            method: 'GET',
            url:"../JSON/teams.json",
        }).then(function(response){
            // console.log(response.data)
            return response.data
        })
    }





//******************DATABASE****************** */
this.dbGetTeams = function(){
    return $http ({
            method: 'GET',
            url:"http://localhost:3000/getLogo",
        }).then(function(response){
            // console.log(response.data)
            return response.data
        })
    }

});