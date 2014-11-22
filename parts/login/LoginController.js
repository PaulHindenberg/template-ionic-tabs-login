/**
 * Created by paulhindenberg on 21.11.14.
 */
oDataApp.controller('LoginCtrl', function($scope, $log, LoginService, $state, ConfigService){

    $scope.login = function(){
        $state.go('tab.main');
    }
})
