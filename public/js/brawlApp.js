angular.module("brawlApp", ['ui.router', 'ngAnimate'])
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){
        // var mainState = {
        //     name: 'main',
        //     views: {
        //         header: 'headerComponent',
        //         header2: "header2",
        //         nav: 'navComponent',
        //         content: 'mainComponent',
        //     }
        // };
        
        $stateProvider
            .state('home', {
                url: '/',
                views:{
                    'home-header':{
                        // templateUrl: "/views/home-header/home-header.html"
                        templateUrl: "/views/home-header.html"
                    },
                    // 'player-header':{
                    //     templateUrl: "./views/player-header/player-header.html",
                    //     controller: "player-headerCtrl"
                    // },
                    'team-choices':{
                        // templateUrl: "/views/team-choices/team-choices.html",
                        templateUrl: "/views/team-choices.html",
                        controller: "team-choicesCtrl"
                    }
                }
            })
            .state('team-select', {
                url: '/team-select',
                views:{
                    'player-header':{
                        // templateUrl: "/views/player-header/player-header.html",
                        templateUrl: "/views/player-header.html",
                        controller: "player-headerCtrl"
                    },
                    'team-choices':{
                        // templateUrl: "/views/team-choices/team-choices.html",
                        templateUrl: "/views/team-choices.html",
                        controller: "team-choicesCtrl"
                    }
                }
            })
            .state('team-roster', {
                url: '/team-roster/:teamId',
                views:{
                    'player-header':{
                        // templateUrl: "/views/player-header/player-header.html",
                        templateUrl: "/views/player-header.html",
                        controller: "rosterCtrl"
                    },
                    'roster':{
                        // templateUrl: "/views/roster/roster.html",
                        templateUrl: "/views/roster.html",
                        controller: "rosterCtrl"
                        
                    }
                }
            })
            .state('fight-view', {
                url: '/fight',
                views:{
                    // 'player-header':{
                    //     templateUrl: "/views/player-header/player-header.html",
                    //     controller: "player-headerCtrl"
                        
                    // },
                    'fight':{
                        // templateUrl: "/views/fight/fight.html",
                        templateUrl: "/views/fight.html",
                        controller: "fightCtrl"
                        
                    }
                }
            })
            .state('results-view', {
                url: '/results',
                views:{
                    // 'player-header':{
                    //     templateUrl: "/views/player-header/player-header.html",
                    //     controller: "player-headerCtrl"
                    
                    // },
                    'results':{
                        // templateUrl: "/views/results/results.html",
                        templateUrl: "/views/results.html",
                        controller: "fightCtrl"
                        
                    }
                }
            })
            // .state('fight-view', {
            //     url: '/fight',
            //     parent: 'roster',
            //     templateUrl: '/views/fight/fight.html'
            // })
            // .state('results', {
            //     url: '/results/:id',
            //     parent: "fight",
            //     templateUrl: '/views/results/results.html'
            // })

        $urlRouterProvider
            .otherwise('/');
    }])
