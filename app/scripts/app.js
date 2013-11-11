/**
 * Created by liuyixi on 13-11-11.
 */

angular.module('diigoApp',[
        'ngRoute',
        'diigoApp.constant',
        'diigoApp.Storage'
    ])
    .config(function($routeProvider){
        $routeProvider
            .when('/',{
               templateUrl:'views/main.html',
                controller:'MainCtrl'
            })
            .when('/Note',{
                templateUrl:'views/note.html',
                controller:"noteMainCtrl"
            })
            .otherwise({
                redirectTo:"/"
            });
    });