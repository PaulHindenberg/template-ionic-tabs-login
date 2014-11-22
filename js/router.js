/**
 * Created with JetBrains WebStorm.
 * User: paulhindenberg
 * Date: 27.05.14
 * Time: 22:35
 * To change this template use File | Settings | File Templates.
 */
oDataApp.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    $stateProvider
        .state('login', {
            url:'/login',
            templateUrl:'parts/login/login.html',
            controller: 'LoginCtrl'
        })

        .state('tab', {
            url: "/tab",
            abstract: true,
            templateUrl: "tabs.html"
        })

        // Each tab has its own nav history stack:

        .state('tab.dash', {
            url: '/dash',
            views: {
                'tab-dash': {
                    templateUrl: 'parts/dashboard/tab-dash.html',
                    controller: 'DashCtrl'
                }
            }
        })

        .state('tab.main', {
            url: '/main',
            views: {
                'tab-main': {
                    templateUrl: 'parts/main/main.html',
                    controller: 'MainCtrl'
                }
            }
        })
        .state('tab.main-detail', {
            url: '/main/:mainId',
            views: {
                'tab-main': {
                    templateUrl: 'parts/main.details/maindetails.html',
                    controller: 'MainDetailsCtrl'
                }
            }
        })

        .state('tab.account', {
            url: '/account',
            views: {
                'tab-account': {
                    templateUrl: 'parts/account/tab-account.html',
                    controller: 'AccountCtrl'
                }
            }
        });

        $urlRouterProvider.otherwise('/login');





    // if none of the above states are matched, use this as the fallback

});

