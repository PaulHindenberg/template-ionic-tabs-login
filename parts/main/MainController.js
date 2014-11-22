/**
 * Created by paulhindenberg on 21.11.14.
 */
oDataApp.controller('MainCtrl', function($scope, $log, LoginService, $state, ConfigService){

$scope.openDetails = function(){
    $log.log('asdasd');
    $state.go('tab.main-detail', {mainId:1});
}
})
