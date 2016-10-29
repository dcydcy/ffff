/**
 * Created by Administrator on 2016/10/24.
 */


(function(){
    var serviceModule = angular.module('doubanApp.serviceModule',[]);
    //创建服务 service
    serviceModule.service('JsonpService',['$window',function($window){

        this.jsonp = function(url,params,fn){

            var queryString = '?';
            //1.拼接参数
            for(key in params){
                queryString += key + '=' + params[key] +'&';
            }

            //2.生成包裹函数的名称 callback返回的名字 后面拼接了时间戳 new date
            var funname = "my_jsonp"+new Date().getTime();
            queryString +='callback' + '=' +funname;

            //3.挂载函数
            $window[funname] = function (data) {
                fn(data);
            };

            //4.添加script标签，加载数据
            var script = $window.document.createElement('script');
            script.src = url + queryString;
            $window.document.body.appendChild(script);
        }
    }]);
})();