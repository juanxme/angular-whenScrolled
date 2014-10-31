angular-whenScrolled (version 1.1.2)
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
    $scope.items = [];
    $scope.totalItems=0;    
    $scope.startList = 0;
    $scope.stopLoadingData = false;

    $scope.more = function () {
        if (!$scope.stopLoadingData) {
            $scope.loading = true;
            $http.post("/app/items", {"startList": $scope.startList}).success(function (data) {
                $scope.totalItems=data.totalItems;
                angular.forEach(data.items,function (key) {
                    $scope.items.push(key);                    
                });      
                $scope.stopLoadingData = ($scope.items.length === $scope.totalItems);
                $scope.startList += 10;
            });
        };
        $scope.loading = false;
    };
    $scope.more();//twice execute-> controller:load and scroll:load
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
