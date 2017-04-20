var requestApp = angular.module('requestApp', []);

requestApp.controller('requestController',
    function($scope) {


        $scope.submitForm = function (isValid) {
            if (isValid) {
                showSuccess();
                hideForm();
            }
            if (!isValid) {
                alert("Fejl: Din information er ikke valideret, eller sendt!");
            }

        };

        function showSuccess() {
            var ele = document.getElementById('success-message');
            ele.style.display = 'block';
        }
        function hideForm() {
            var ele2 = document.getElementById('main-form');
            ele2.style.display = 'none';
        }
    });

