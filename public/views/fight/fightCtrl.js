angular.module("brawlApp").controller("fightCtrl", function($scope, mainService, $stateParams){
    $scope.leftPlyrImgState = $scope.main.leftPlayer.restimg;
    $scope.rightPlyrImgState = $scope.main.rightPlayer.restimg;
    $scope.leftGameResult = "";
    $scope.rightGameResult = "";
    
    var fadeOutTransition = function(){
        $('.player-card-container-left').children(".player-card").addClass("result-card-left");
        $('.player-card-container-right').children(".player-card").addClass("result-card-right");
        $(".result-stats-wrapper-left").addClass("slide-out-left");
        $(".result-stats-wrapper-right").addClass("slide-out-right");
        $(".vs").addClass("vs-small");
        $(".game-result-left").addClass("fadeIn");
        $(".game-result-right").addClass("fadeIn");
        $('.fight-btn').fadeOut(500);
        
    }
    
    var fadeInTransition = function(){
        $('.play-again-btn, .player-card img').stop(true,true).hide().fadeIn();
    }
    
    var brawlProcess = function (){

        if($scope.leftPlayerGameStats.ppg > $scope.rightPlayerGameStats.ppg){
            $scope.leftGameResult = "Win";
            $scope.rightGameResult = "Lose";
            $scope.leftPlyrImgState = $scope.main.leftPlayer.winimg;
            $scope.rightPlyrImgState = $scope.main.rightPlayer.loseimg;
        } else if($scope.leftPlayerGameStats.ppg < $scope.rightPlayerGameStats.ppg){
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
        
    }


    $scope.brawl = function (){
        fadeOutTransition();
        
        brawlProcess();
        
        fadeInTransition();
        
    }


    $scope.leftPlayerGameStats = {
        ppg: $scope.main.leftPlayer.ppg,
        rpg: $scope.main.leftPlayer.rpg,
        apg: $scope.main.leftPlayer.apg,
        bpg: $scope.main.leftPlayer.bpg,
        stls: $scope.main.leftPlayer.stls,
        fgPct: $scope.main.leftPlayer.fgpct
    }

    $scope.rightPlayerGameStats = {
        ppg: $scope.main.rightPlayer.ppg,
        rpg: $scope.main.rightPlayer.rpg,
        apg: $scope.main.rightPlayer.apg,
        bpg: $scope.main.rightPlayer.bpg,
        stls: $scope.main.rightPlayer.stls,
        fgPct: $scope.main.rightPlayer.fgpct
    }
    
    function generateStatVariation(stat,value){
        var modifier;
        var statLow;
        var statHigh;
        var list;
        value = parseFloat(value).toFixed(1);
      

        switch(stat){
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
            default: 0;
        }
        statLow = preventNegatives(value - modifier);
        statHigh = preventNegatives(value + modifier);

        return list = randomList(5,statLow,statHigh);
    }
    function preventNegatives(num){
        if(Math.sign(num) === -1){
            return 0;
        } else{
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
        
        function generateGameStats(playerObj){
            for(var key in playerObj){

                switch(key){
                    case "ppg": playerObj.ppg = Math.round(descriptives(generateStatVariation("ppg",playerObj.ppg)).mean);
                    break;
                    case "rpg": playerObj.rpg = Math.round(descriptives(generateStatVariation("rpg",playerObj.rpg)).mean);
                    break;
                    case "bpg": playerObj.bpg = Math.round(descriptives(generateStatVariation("bpg",playerObj.bpg)).mean);
                    break;
                    case "stls": playerObj.stls = Math.round(descriptives(generateStatVariation("stls",playerObj.stls)).mean);
                    break;
                    case "fgPct": playerObj.fgPct = Math.round(descriptives(generateStatVariation("fgPct",playerObj.fgPct)).mean);
                    break;
                    default: 0;

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