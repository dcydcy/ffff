/**
 * Created by Administrator on 2016/10/23.
 */
(function(){
    var doubanApp = angular.module('doubanApp',['ngRoute','doubanApp.willModule','doubanApp.topModule','doubanApp.hotModule']);

    doubanApp.config(['$routeProvider',function($routeProvider){
        $routeProvider.
            when('/hot/:page?',{
                templateUrl:'hot/hot.html',
                controller:'HotCtrl'
            }).
            when('/will',{
                templateUrl:'will/will.html',
                controller:'WillCtrl'
            }).
            when('/top',{
                templateUrl:'top/top.html',
                controller:'TopCtrl'
            }).
            otherwise({
                redirectTo:'/hot/1'
            })
    }]);
})();