/**
 * Created by liuyixi on 13-11-11.
 */

angular.module('diigoApp').
    controller('MainCtrl',function($scope){

    })
    .controller('NavBarCtrl',function($scope,DIIGO_NAVS,$location){
        $scope.navs = DIIGO_NAVS;
        $scope.redirect = function(href){
            $location.path(href);
        }
    });