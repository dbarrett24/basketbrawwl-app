angular.module("brawlApp").controller("player-headerCtrl", function($scope, mainService, $stateParams){
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

});