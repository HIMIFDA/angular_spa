angular.module('ContactController', [])

.controller('ContactController', function($scope) {

        $scope.tagline = 'CONTACT';

        $scope.customers = [
            { name: 'Pramesti Hatta K.', city: 'DKI Jakarta'}
        ];

});