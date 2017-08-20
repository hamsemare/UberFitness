(function() {
    'use strict';

    // PasswordValidator service used for testing the password strength
    angular
        .module('users.services')
        .factory('PasswordValidator', PasswordValidator);

    PasswordValidator.$inject = ['$window'];

    function PasswordValidator($window) {
        var owaspPasswordStrengthTest = $window.owaspPasswordStrengthTest;

        var service = {
            getResult: getResult,
            getPopoverMsg: getPopoverMsg
        };

        return service;

        function getResult(password) {
            var result = owaspPasswordStrengthTest.test(password);
            return result;
        }

        function getPopoverMsg() {
            var popoverMsg = 'Please enter a password or passphrase with ' + owaspPasswordStrengthTest.configs.minLength + ' or more characters, and with at least 1 uppercase letter.';

            return popoverMsg;
        }
    }

}());
