(function(){
    var app = angular.module('MainModule', ['MessageModule']);

    app.controller('MainCtrl', function($scope, messageService){

        $scope.sendMessage = function(number){
            messageService.get(number);
        }

        $scope.friends = [
            {
                name: 'bill',
                number: '18014555679'
            },
            {
                name: 'james',
                number: '18014555679'
            },
            {
                name: 'david',
                number: '18014555679'
            }
        ];

    });

})();