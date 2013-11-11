/**
 * Created by liuyixi on 13-11-11.
 */

angular.module('diigoApp').
    controller('noteMainCtrl',function($scope,ItemsModel){
        $scope.$on('item.update',function(event){
            $scope.items = ItemsModel.items;
            console.log($scope);
            console.log($scope.items.length);
        });
        console.log($scope);
        $scope.items = ItemsModel.items
    });