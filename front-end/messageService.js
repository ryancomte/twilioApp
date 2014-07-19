(function(){

    var app = angular.module('MessageModule', ['ngResource']);

    app.factory('messageService', function($resource){
        return $resource('https://d067732.ngrok.com/sendMessage',{},{
            get: {method:'GET'}
        })
    });

}());