angular.module("brawlApp").controller("mainCtrl", function($scope, mainService, FlickityService, $timeout){
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
            console.log($scope.teamData)

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

