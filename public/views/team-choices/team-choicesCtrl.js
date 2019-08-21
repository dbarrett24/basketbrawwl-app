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
    }



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
});