angular.module("brawlApp").controller("team-choicesCtrl", function($scope, mainService, $stateParams){
   $(document).ready(function(){
        $('.player-header-1').css('position', 'relative');
        $('.carousel-wrapper').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 2,
            autoplay: true,
            autoplaySpeed: 3500
        });

   });

    mainService.getTeams().then(function(teamData){
        $scope.teamData = teamData;
       
    });


   
    
    
});
