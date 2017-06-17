angular.module('ToDoLi', []).
//Creates List items and object for data to be passed to the controller.
controller('toDoController', ['$scope', function ($scope) {
    //Object for the task
    $scope.toDos = [
        {
            'title': 'Add a New To Do Item.',
            'done': false
        }
];
    //Pushes the object to the view
    $scope.addItem = function () {
        $scope.toDos.push({
            'title': $scope.newItem,
            'done': false
        });
        $scope.newItem = '';
    };
    //clears object from the view
    $scope.clearItem = function () {
        $scope.toDos = $scope.toDos.filter(function (item) {
            return !item.done
        });
    };
}]);