/**
 * Created by paulhindenberg on 06.08.14.
 */

    oDataApp.factory('LoginService', function($http, $q, ConfigService) {

        var rooms = [];
        var events = [];
        var loginCred = {token: ''};
        var aoRegistrations = [];
        return {
            login: function(cred) {
                var uri = '{"AUTH":{"login":"'+cred.u+'","password":"'+cred.p+'"}}';

                var promise = $http({
                    method:'POST',
                    url: ConfigService.getAPI(''),
                    data: 'request='+encodeURIComponent(uri),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}

                }).then(function(response){
                    if(response.data.AUTH.status !== 'rejected'){

                        /**
                         * @todo lets refactor this stuff to use our own login-backend via GET:/api/backend/:user/:pass or POST (s.a. api/index.php)
                         *
                         */

                        loginCred.token = response.data.AUTH.token;
                        loginCred.user = cred.u;
                        loginCred.pwd = cred.p;
                    }


                    return response.data;
                }, function(data){
                    if(navigator.connection.type == Connection.WIFI){
                        Logger.put({type:'Err-LoginService',message:'login Failed',reason:'No Internet Connection'})
                        return {error:'Please check the Wifi before you try to Login again'};
                    }else{
                        Logger.put({type:'Err-LoginService',message:'login Failed',reason:'LoginService not available - Device has Connection!'});
                        return {error:'The LoginService is currently not available'};
                    }
                })
                return promise;
            },
            /**
             * @deprecated
             * @returns {Array}
             */
            getRegistrations:function() {
              return aoRegistrations;
            },
            /**
             * @deprecated check for deprecation, rooms are now in datentonne
             * @returns {Array}
             */
            getRooms: function(){
                return rooms;
            },
            /**
             * @deprecated check for deprication, events are in datentonne
             * @returns {Array}
             */
            getEvents: function(){
                return events;
            },
            logout: function(){
                rooms = [];
                events = [];
                loginCred;
            },
            getLoginCred: function(){
                return loginCred;
            }
        }
    });