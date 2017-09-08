"use strict";

angular.module("brawlApp", ["ui.router", "ngAnimate"]).config(function ($stateProvider, $urlRouterProvider) {
    // var mainState = {
    //     name: 'main',
    //     views: {
    //         header: 'headerComponent',
    //         header2: "header2",
    //         nav: 'navComponent',
    //         content: 'mainComponent',
    //     }
    // };

    $stateProvider.state('home', {
        url: '/',
        views: {
            'home-header': {
                templateUrl: "../views/home-header/home-header.html"
            },
            // 'player-header':{
            //     templateUrl: "../views/player-header/player-header.html",
            //     controller: "player-headerCtrl"
            // },
            'team-choices': {
                templateUrl: "../views/team-choices/team-choices.html",
                controller: "team-choicesCtrl"
            }
        }
    }).state('team-select', {
        url: '/team-select',
        views: {
            'player-header': {
                templateUrl: "../views/player-header/player-header.html",
                controller: "player-headerCtrl"
            },
            'team-choices': {
                templateUrl: "../views/team-choices/team-choices.html",
                controller: "team-choicesCtrl"
            }
        }
    }).state('team-roster', {
        url: '/team-roster/:teamId',
        views: {
            'player-header': {
                templateUrl: "../views/player-header/player-header.html",
                controller: "rosterCtrl"
            },
            'roster': {
                templateUrl: "../views/roster/roster.html",
                controller: "rosterCtrl"

            }
        }
    }).state('fight-view', {
        url: '/fight',
        views: {
            // 'player-header':{
            //     templateUrl: "../views/player-header/player-header.html",
            //     controller: "player-headerCtrl"

            // },
            'fight': {
                templateUrl: "../views/fight/fight.html",
                controller: "fightCtrl"

            }
        }
    }).state('results-view', {
        url: '/results',
        views: {
            // 'player-header':{
            //     templateUrl: "../views/player-header/player-header.html",
            //     controller: "player-headerCtrl"

            // },
            'results': {
                templateUrl: "../views/results/results.html",
                controller: "fightCtrl"

            }
        }
    });
    // .state('fight-view', {
    //     url: '/fight',
    //     parent: 'roster',
    //     templateUrl: '../views/fight/fight.html'
    // })
    // .state('results', {
    //     url: '/results/:id',
    //     parent: "fight",
    //     templateUrl: '../views/results/results.html'
    // })

    $urlRouterProvider.otherwise('/');
});
"use strict";

angular.module("brawlApp").controller("mainCtrl", function ($scope, mainService) {
    // ***********************************   
    //                TEST 
    $scope.test = "Controller is working";
    $scope.test1 = mainService.test1;

    // ***********************************  
    //    $scope.opened = true;
    //     $scope.toggle = () => $scope.opened = !$scope.opened;


    //*************DataBase************ */

});
"use strict";

angular.module("brawlApp").service("mainService", function ($http) {
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

    this.getDbData = function (id) {
        return $http({
            method: 'GET',
            url: '/getTeamInfo/' + id

        }).then(function (response) {
            // console.log("hello" + response);
            return response.data;
        });
    };

    //get team-select logos
    this.getTeams = function () {
        return $http({
            method: 'GET',
            url: "../JSON/teams.json"
        }).then(function (response) {
            // console.log(response.data)
            return response.data;
        });
    };

    //******************DATABASE****************** */
    this.dbGetTeams = function () {
        return $http({
            method: 'GET',
            url: "http://localhost:3000/getLogo"
        }).then(function (response) {
            // console.log(response.data)
            return response.data;
        });
    };
});
"use strict";

angular.module("brawlApp").directive("footerDir", function () {
    return {
        restrict: "E",
        templateUrl: "./directives/footer/footerDir.html"
    };
});
"use strict";

angular.module("brawlApp").directive("navDir", function () {
    return {
        restrict: "E",
        templateUrl: "./directives/nav/navDir.html"
    };
});
"use strict";

angular.module("brawlApp").directive("table-head-dir", function () {
    return {
        restrict: "E",
        templateUrl: "./directives/table-head-dir/table-head-dir.html"
    };
});
"use strict";

angular.module("brawlApp").controller("player-headerCtrl", function ($scope, mainService, $stateParams) {
    mainService.getTeams().then(function (teamData) {
        $scope.teamData = teamData;
        // console.log("teamJSON", $scope.teamData);
        var team = teamData.find(function (team) {
            return team.name === $stateParams.teamId;
        });
        if (team) {
            $scope.teamSlug = team.name;
            $scope.logo = team.logo;
        } else {
            return 'Atlanta Hawks';
        }
        return team.name;
    });
});
"use strict";

angular.module("brawlApp").controller("team-choicesCtrl", function ($scope, mainService, $stateParams) {
    $(document).ready(function () {
        $('.player-header-1').css('position', 'relative');
        $('.carousel-wrapper').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 2,
            autoplay: true,
            autoplaySpeed: 3500
        });
    });

    mainService.getTeams().then(function (teamData) {
        $scope.teamData = teamData;
    });
});
"use strict";

angular.module("brawlApp").controller("rosterCtrl", function ($scope, $timeout, mainService, $stateParams) {
    // $scope.test1 = "RosterCTRL WORKING";
    // console.log("rosterCtrl");

    $scope.leftPlayer = {};
    $scope.rightPlayer = {};

    // $scope.main.leftShow = true;
    // $scope.main.leftShow = !$scope.leftShow;


    mainService.getDbData(url).then(function (response) {
        // console.log("Player Stats of Selected Team", response);
        $scope.currentTeamData = response;
        // return response;
    });

    $scope.addPlayerLeft = function (player) {

        $scope.main.leftPlayer = player;
        console.log($scope.main.leftPlayer);
        $(".selectPlayer").css("display", "none");
        $(".player-information-wrapper-left").css("display", "inline-block");
    };

    $scope.addPlayerRight = function (player) {

        $scope.main.rightPlayer = player;
        console.log($scope.main.rightPlayer);
        $(".selectPlayer").css("display", "none");
        $(".player-information-wrapper-right").css("display", "inline-block");
    };

    // *********************************************************
    //gets player information: names, stats, based on team-url
    var url = $stateParams.teamId;

    $scope.getTeamInfo = function (url) {
        mainService.getDbData(url).then(function (response) {
            // console.log("Player Stats of Selected Team", response);
            $scope.selectedTeam = response;
            // return response;
        });
    };
    $scope.getTeamInfo(url);
    // ---------------------------------------

    //Returns correct URL ending for what is team is selected.
    mainService.getTeams().then(function (teamData) {
        $scope.teamData = teamData;
        // console.log("teamJSON", $scope.teamData);
        var team = teamData.find(function (team) {
            return team.name === $stateParams.teamId;
        });

        if (team) {
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
"use strict";

angular.module("brawlApp").controller("fightCtrl", function ($scope, mainService, $stateParams) {});