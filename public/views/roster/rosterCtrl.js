angular.module("brawlApp").controller("rosterCtrl", function($scope, $timeout, mainService, $stateParams){
    // $scope.test1 = "RosterCTRL WORKING";
    // console.log("rosterCtrl");
    
    $scope.leftPlayer = {};
    $scope.rightPlayer = {};

    // $scope.main.leftShow = true;
    // $scope.main.leftShow = !$scope.leftShow;
    
        
    mainService.getDbData(url).then(function(response){
        // console.log("Player Stats of Selected Team", response);
        $scope.currentTeamData = response;
        // return response;
    });

    $scope.addPlayerLeft = function(player) {
       
        $scope.main.leftPlayer = player;
        console.log($scope.main.leftPlayer);
        $(".selectPlayer").css("display", "none");
        $(".player-information-wrapper-left").css("display", "inline-block");
       
    }


    $scope.addPlayerRight = function(player) {
      
        $scope.main.rightPlayer = player;
        console.log($scope.main.rightPlayer);
        $(".selectPlayer").css("display", "none");
        $(".player-information-wrapper-right").css("display", "inline-block");
      
    }


// *********************************************************
    //gets player information: names, stats, based on team-url
    var url = $stateParams.teamId;
    
    
    $scope.getTeamInfo = function(url){
        mainService.getDbData(url).then(function(response){
            // console.log("Player Stats of Selected Team", response);
            $scope.selectedTeam = response;
            // return response;
            
        });
    }
    $scope.getTeamInfo(url);
    // ---------------------------------------

//Returns correct URL ending for what is team is selected.
    mainService.getTeams()
    
        .then(function(teamData){
            $scope.teamData = teamData;
            // console.log("teamJSON", $scope.teamData);
            var team = teamData.find(function(team){
                return team.name === $stateParams.teamId;
            });
            
            if(team) {
                $scope.teamSlug = team.name;
                $scope.logo = team.logo;
            } else {
                return 'Atlanta Hawks';
            }
            return team.name;
    });
   
//On click, display player image.

    // $scope.addPlayerRight = function(){
        
    //     return playerData;
    // }
    


});