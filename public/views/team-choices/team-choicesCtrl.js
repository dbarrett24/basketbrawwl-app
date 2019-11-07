angular.module("brawlApp").controller("team-choicesCtrl", ['$scope','mainService','$stateParams','$document', '$timeout', function ($scope, mainService, $stateParams, $document, $timeout) {
    $(document).ready(function () {
        $('.player-header-1').css('position', 'relative');


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

}]);