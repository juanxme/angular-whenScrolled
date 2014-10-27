angular-whenScrolled (version 1.0)
==================================

angular-whenScrolled is a directive that you can use to implement infinite scrolling in your AngularJS applications. 
(NO requires jQuery to run)

Getting Started
---------------

* Download [angular-whenScrolled.js](https://raw.githubusercontent.com/juanxme/angular-whenScrolled/master/angular-whenScrolled.js)
* Include the script tag on your page:

```html
<script type='text/javascript' src='path/to/angular-whenScrolled.js'></script>
```
* Ensure that your application module specifies **angular-whenScrolled** as a dependency:

```js
angular.module('myApplication', ['angular-whenScrolled']);
```

* Use the directive by specifying an **whenScrolled** attribute on an element.

```js
angular.controller("demo", function ($scope, $http) {
    $scope.users = [];
    
    $scope.more = function () {
        $scope.loading = true;
        $http.get("/app/js/models/users.json").success(function (data) {
            for (user in data.users) {
                $scope.users.push(user);
            }
            $scope.loading = false;
        });
    };
    $scope.more();
});
```
* html:
```html
<div ng-controller='demo'>
    <ANY when-scrolled="more()" >
    </ANY>
    <div ng-show='loading'>Loading Data ...</div>
<div>
```
