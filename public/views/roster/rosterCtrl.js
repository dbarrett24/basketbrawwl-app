angular.module("brawlApp").controller("rosterCtrl", ['$scope', '$timeout', 'mainService','$stateParams', function($scope, $timeout, mainService, $stateParams){
    // $scope.test1 = "RosterCTRL WORKING";
    // console.log("rosterCtrl");
    
    // $scope.leftPlayer = {};
    // $scope.rightPlayer = {};


        
    mainService.getDbData(url).then(function(response){
        // console.log("Player Stats of Selected Team", response);
        $scope.currentTeamData = response;
        // return response;
    });

    $(".selectPlayer").addClass("animate-flicker");


    function fadeEffect1 (){
        $(".portrait-wrapper-1").stop(true,true).hide().fadeIn();
    }
    function fadeEffect2 (){
        $(".portrait-wrapper-2").stop(true,true).hide().fadeIn();
    }
    
    if($scope.main.leftPlayer && $scope.main.rightPlayer){
        $(".roster-logo").show();
    } else{
        $(".roster-logo").hide();
    }

    $scope.addPlayerLeft = function(player) {
       
        $scope.main.leftPlayer = player;
        console.log($scope.main.leftPlayer);
        $(".player-portrait-1").children(".selectPlayer").css("display", "none");
        fadeEffect1();
        $(".player-information-wrapper-left").css("display", "inline-block");
        if($scope.main.leftPlayer && $scope.main.rightplayer){
            $(".roster-logo").show();
        } else{
            $(".roster-logo").hide();
        }
    }
    
    $scope.addPlayerRight = function(player) {
        
        $scope.main.rightPlayer = player;
        console.log($scope.main.rightPlayer);
        $(".player-portrait-2").children(".selectPlayer").css("display", "none");
        fadeEffect2();
        $(".player-information-wrapper-right").css("display", "inline-block");
        if($scope.main.leftPlayer && $scope.main.rightPlayer){
            $(".roster-logo").show();
        } else{
            $(".roster-logo").hide();
        }
      
    }


// *********************************************************
    //gets player information: names, stats, based on team-url
    var url = $stateParams.teamId;
    
    
    $scope.getTeamInfo = function(url){
        mainService.getDbData(url).then(function(response){
            console.log("Player Stats of Selected Team", response);
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
                console.log($stateParams.teamId)
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
   
    if($scope.main.leftPlayer){
        console.log("BEFORE HIDE")
        $(".player-portrait-1").children(".selectPlayer").hide();
        $(".player-information-wrapper-left").show();
    } else{
        $(".player-information-wrapper-left").hide();
    }
    if($scope.main.rightPlayer){
        $(".player-portrait-2").children(".selectPlayer").hide();
        $(".player-information-wrapper-right").show();
    } else{
        $(".player-information-wrapper-right").hide();
    }
    

}]);