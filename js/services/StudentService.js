// public/js/services/commentService.js

angular.module('StudentService', [])

.factory('Student', function($http) {

    return {
        // get all the comments
        get: function () {
            return $http.get('http://langur.lc/api/students');
        },

        // save a comment (pass in comment data)
        save: function (studentData) {
                return $http({
                    method: 'POST',
                    url: 'http://langur.lc/api/students/store',
                    headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                    data: $.param(studentData)
                });
        },

        edit: function (id) {
        	return $http.get('http://langur.lc/api/students/edit/' + id);
        },

        update: function (student) {
            return $http({
                method: 'POST',
                url: 'http://langur.lc/api/students/update',
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: $.param(student)
            });
        },

        // destroy a comment
        destroy: function (id) {
            return $http.get('http://langur.lc/api/students/delete/' + id);
        }
    }

});