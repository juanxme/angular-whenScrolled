//version 1.0.1
var mod;
mod = angular.module('angular-whenScrolled', []);
mod.directive("whenScrolled", function ($window) {
    return{
        restrict: 'A',
        link: function (scope, elem, attrs) {
            raw = elem[0];
            var checkBounds = function (evt) {
                var rectObject = raw.getBoundingClientRect();
                if ($window.innerHeight >rectObject.bottom+100) {
                    scope.loading = true;
                    scope.$apply(attrs.whenScrolled);
                }
            };
            angular.element($window).bind('scroll load', checkBounds);
        }
    };
});
