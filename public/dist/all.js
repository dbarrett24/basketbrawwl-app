'use strict';

angular.module("brawlApp", ['ui.router', 'ngAnimate', 'bc.Flickity']).config(function ($stateProvider, $urlRouterProvider) {
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

angular.module("brawlApp").controller("mainCtrl", function ($scope, mainService, FlickityService, $timeout) {
    // ***********************************   
    //                TEST 
    $scope.test = "Controller is working";
    $scope.test1 = mainService.test1;

    // ***********************************  
    //    $scope.opened = true;
    //     $scope.toggle = () => $scope.opened = !$scope.opened;


    //*************DataBase************ */


    //THIS HAS to be in MainCTRL for the flickity slider to work.
    mainService.getTeams().then(function (teamData) {

        $scope.teamData = teamData;
        console.log($scope.teamData);

        // Get the element that should hold the slider
        var element = angular.element(document.getElementById('team-slider'));
        console.log(element);

        // NOTE: When fetching remote data, we initialize the Flickity
        // instance inside of a $timeout. This ensures that the slides
        // have already been assigned to scope before the slider is
        // initialized.
        $timeout(function () {
            // Initialize our Flickity instance
            FlickityService.create(element[0], element[0].id, $scope.flickityOptions);
        });
    });
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
            url: "http://localhost:8083/getLogo"
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

    if ($scope.main.leftPlayer) {
        console.log("BEFORE HIDE");
        $(".player-portrait-1").children(".selectPlayer").hide();
        $(".player-information-wrapper-left").show();
    } else {
        $(".player-information-wrapper-left").hide();
    }
    if ($scope.main.rightPlayer) {
        $(".player-portrait-2").children(".selectPlayer").hide();
        $(".player-information-wrapper-right").show();
    } else {
        $(".player-information-wrapper-right").hide();
    }

    if ($scope.main.leftPlayer && $scope.main.rightPlayer) {
        $(".roster-logo").show();
    } else {
        $(".roster-logo").hide();
    }
});
"use strict";

angular.module("brawlApp").controller("team-choicesCtrl", function ($scope, mainService, $stateParams, $document, $timeout, FlickityService) {
    $(document).ready(function () {
        $('.player-header-1').css('position', 'relative');
        // $('.carousel-wrapper').slick({
        //     infinite: true,
        //     slidesToShow: 5,
        //     slidesToScroll: 2,
        //     autoplay: true,
        //     autoplaySpeed: 3500
        // });

        $('.carousel-wrapper').flickity({
            // options
            cellSelector: '.carousel-cell',
            cellAlign: 'left',
            pageDots: false,
            // groupCells: 3,
            adaptiveHeight: false,
            imagesLoaded: true,
            autoPlay: true,
            contain: true
        });
    });
    $scope.flickityOptions = {
        // options
        cellSelector: '.carousel-cell',
        cellAlign: 'left',
        pageDots: false,
        // groupCells: 3,
        adaptiveHeight: false,
        imagesLoaded: true,
        autoPlay: true,
        contain: true

        // mainService.getTeams().then(function (teamData) {

        //     $scope.teamData = teamData;
        //     console.log($scope.teamData)

        //     // Get the element that should hold the slider
        //     var element = angular.element(document.getElementById('team-slider'));
        //     console.log(element);

        //     // NOTE: When fetching remote data, we initialize the Flickity
        //     // instance inside of a $timeout. This ensures that the slides
        //     // have already been assigned to scope before the slider is
        //     // initialized.
        //     $timeout(function () {
        //         // Initialize our Flickity instance
        //         FlickityService.create(element[0], element[0].id, $scope.flickityOptions);
        //     });
        // });
    };
});
"use strict";

angular.module("brawlApp").controller("rosterCtrl", function ($scope, $timeout, mainService, $stateParams) {
    // $scope.test1 = "RosterCTRL WORKING";
    // console.log("rosterCtrl");

    // $scope.leftPlayer = {};
    // $scope.rightPlayer = {};


    mainService.getDbData(url).then(function (response) {
        // console.log("Player Stats of Selected Team", response);
        $scope.currentTeamData = response;
        // return response;
    });

    $(".selectPlayer").addClass("animate-flicker");

    function fadeEffect1() {
        $(".portrait-wrapper-1").stop(true, true).hide().fadeIn();
    }
    function fadeEffect2() {
        $(".portrait-wrapper-2").stop(true, true).hide().fadeIn();
    }

    if ($scope.main.leftPlayer && $scope.main.rightPlayer) {
        $(".roster-logo").show();
    } else {
        $(".roster-logo").hide();
    }

    $scope.addPlayerLeft = function (player) {

        $scope.main.leftPlayer = player;
        console.log($scope.main.leftPlayer);
        $(".player-portrait-1").children(".selectPlayer").css("display", "none");
        fadeEffect1();
        $(".player-information-wrapper-left").css("display", "inline-block");
        if ($scope.main.leftPlayer && $scope.main.rightplayer) {
            $(".roster-logo").show();
        } else {
            $(".roster-logo").hide();
        }
    };

    $scope.addPlayerRight = function (player) {

        $scope.main.rightPlayer = player;
        console.log($scope.main.rightPlayer);
        $(".player-portrait-2").children(".selectPlayer").css("display", "none");
        fadeEffect2();
        $(".player-information-wrapper-right").css("display", "inline-block");
        if ($scope.main.leftPlayer && $scope.main.rightPlayer) {
            $(".roster-logo").show();
        } else {
            $(".roster-logo").hide();
        }
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
            console.log($stateParams.teamId);
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

    if ($scope.main.leftPlayer) {
        console.log("BEFORE HIDE");
        $(".player-portrait-1").children(".selectPlayer").hide();
        $(".player-information-wrapper-left").show();
    } else {
        $(".player-information-wrapper-left").hide();
    }
    if ($scope.main.rightPlayer) {
        $(".player-portrait-2").children(".selectPlayer").hide();
        $(".player-information-wrapper-right").show();
    } else {
        $(".player-information-wrapper-right").hide();
    }
});
"use strict";

angular.module("brawlApp").controller("fightCtrl", function ($scope, mainService, $stateParams) {
    $scope.leftPlyrImgState = $scope.main.leftPlayer.restimg;
    $scope.rightPlyrImgState = $scope.main.rightPlayer.restimg;
    $scope.leftGameResult = "";
    $scope.rightGameResult = "";

    var fadeOutTransition = function fadeOutTransition() {
        $('.player-card-container-left').children(".player-card").addClass("result-card-left");
        $('.player-card-container-right').children(".player-card").addClass("result-card-right");
        $(".result-stats-wrapper-left").addClass("slide-out-left");
        $(".result-stats-wrapper-right").addClass("slide-out-right");
        $(".vs").addClass("vs-small");
        $(".game-result-left").addClass("fadeIn");
        $(".game-result-right").addClass("fadeIn");
        $('.fight-btn').fadeOut(500);
    };

    var fadeInTransition = function fadeInTransition() {
        $('.play-again-btn, .player-card img').stop(true, true).hide().fadeIn();
    };

    var brawlProcess = function brawlProcess() {

        if ($scope.leftPlayerGameStats.ppg > $scope.rightPlayerGameStats.ppg) {
            $scope.leftGameResult = "Win";
            $scope.rightGameResult = "Lose";
            $scope.leftPlyrImgState = $scope.main.leftPlayer.winimg;
            $scope.rightPlyrImgState = $scope.main.rightPlayer.loseimg;
        } else if ($scope.leftPlayerGameStats.ppg < $scope.rightPlayerGameStats.ppg) {
            $scope.leftGameResult = "Lose";
            $scope.rightGameResult = "Win";
            $scope.leftPlyrImgState = $scope.main.leftPlayer.loseimg;
            $scope.rightPlyrImgState = $scope.main.rightPlayer.winimg;
        } else {
            $scope.leftGameResult = "Overtime";
            $scope.rightGameResult = "Overtime";
            $scope.leftPlyrImgState = $scope.main.leftPlayer.winimg;
            $scope.rightPlyrImgState = $scope.main.rightPlayer.winimg;
        }
    };

    $scope.brawl = function () {
        fadeOutTransition();

        brawlProcess();

        fadeInTransition();
    };

    $scope.leftPlayerGameStats = {
        ppg: $scope.main.leftPlayer.ppg,
        rpg: $scope.main.leftPlayer.rpg,
        apg: $scope.main.leftPlayer.apg,
        bpg: $scope.main.leftPlayer.bpg,
        stls: $scope.main.leftPlayer.stls,
        fgPct: $scope.main.leftPlayer.fgpct
    };

    $scope.rightPlayerGameStats = {
        ppg: $scope.main.rightPlayer.ppg,
        rpg: $scope.main.rightPlayer.rpg,
        apg: $scope.main.rightPlayer.apg,
        bpg: $scope.main.rightPlayer.bpg,
        stls: $scope.main.rightPlayer.stls,
        fgPct: $scope.main.rightPlayer.fgpct
    };

    function generateStatVariation(stat, value) {
        var modifier;
        var statLow;
        var statHigh;
        var list;
        value = parseFloat(value).toFixed(1);

        switch (stat) {
            case "ppg":
                modifier = 4;
                break;
            case "rpg":
                modifier = 3;

                break;
            case "bpg":
                modifier = 1;

                break;
            case "stls":
                modifier = 1;

                break;
            case "fgPct":
                modifier = 8;

                break;
            default:
                0;
        }
        statLow = preventNegatives(value - modifier);
        statHigh = preventNegatives(value + modifier);

        return list = randomList(5, statLow, statHigh);
    }
    function preventNegatives(num) {
        if (Math.sign(num) === -1) {
            return 0;
        } else {
            return num;
        }
    }

    function randomList(n, a, b) {
        // create a list of n numbers between a and b
        var list = [],
            i;
        for (i = 0; i < n; i++) {
            list[i] = Math.random() * (b - a) + a;
        }
        return list;
    }

    function descriptives(list) {
        // compute mean, sd and the interval range: [min, max]
        var mean,
            sd,
            i,
            len = list.length,
            sum,
            a = Infinity,
            b = -a;
        for (sum = i = 0; i < len; i++) {
            sum += list[i];
            a = Math.min(a, list[i]);
            b = Math.max(b, list[i]);
        }
        mean = sum / len;
        for (sum = i = 0; i < len; i++) {
            sum += (list[i] - mean) * (list[i] - mean);
        }
        sd = Math.sqrt(sum / (len - 1));
        return {
            mean: mean,
            sd: sd,
            range: [a, b]
        };
    }

    function generateGameStats(playerObj) {
        for (var key in playerObj) {

            switch (key) {
                case "ppg":
                    playerObj.ppg = Math.round(descriptives(generateStatVariation("ppg", playerObj.ppg)).mean);
                    break;
                case "rpg":
                    playerObj.rpg = Math.round(descriptives(generateStatVariation("rpg", playerObj.rpg)).mean);
                    break;
                case "bpg":
                    playerObj.bpg = Math.round(descriptives(generateStatVariation("bpg", playerObj.bpg)).mean);
                    break;
                case "stls":
                    playerObj.stls = Math.round(descriptives(generateStatVariation("stls", playerObj.stls)).mean);
                    break;
                case "fgPct":
                    playerObj.fgPct = Math.round(descriptives(generateStatVariation("fgPct", playerObj.fgPct)).mean);
                    break;
                default:
                    0;

            }
        }
    }

    generateGameStats($scope.leftPlayerGameStats);
    generateGameStats($scope.rightPlayerGameStats);

    //   function forceDescriptives(list, mean, sd) {
    //     // transfom a list to have an exact mean and sd
    //     var oldDescriptives = descriptives(list),
    //       oldMean = oldDescriptives.mean,
    //       oldSD = oldDescriptives.sd,
    //       newList = [],
    //       len = list.length,
    //       i;
    //     for (i = 0; i < len; i++) {
    //       newList[i] = sd * (list[i] - oldMean) / oldSD + mean;
    //     }
    //     return newList;
    //   }

});