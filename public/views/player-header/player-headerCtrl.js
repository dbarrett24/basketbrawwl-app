angular.module("brawlApp").controller("player-headerCtrl", ['$scope','mainService','$stateParams', function($scope, mainService, $stateParams){
 


   
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

    if($scope.main.leftPlayer && $scope.main.rightPlayer){
        $(".roster-logo").show();
    } else{
        $(".roster-logo").hide();
    }

}]);