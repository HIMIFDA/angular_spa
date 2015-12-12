angular.module('StudentController', [])

.controller('StudentController', function($scope, $http, Student) {

        $scope.tagline = 'STUDENT';

        /**
         * digunakan untuk mengambil data student
         * gunakan fungsi yang sudah kita buat di StudentService
         */
	    Student.get()
	        .success(function (response) {
	            $scope.students = response;
	            $scope.loading = false;
	        });


	    /**
	     * digunakan untuk menyimpan data baru
	     * lewatkan parameter studentData yang sudah ditempel dari form
	     * gunakan fungsi yang sudah kita buat di StudentService
	     * jika berhasil, refresh data student
	     * @return {[success]} [refresh]
	     * @return {[error]} [console.log]
	     */
	    $scope.submitStudent = function () {
	    	$scope.loading = true;

	    	Student.save($scope.studentData)
	    		.success(function (response) {

	    			Student.get()
	    				.success(function (response) {
	    					$scope.students = response;
	    					$scope.loading = false;
	    					$scope.studentData = '';
	    				});

	    		})
	    		.error(function (response) {
	    			console.log(response);
	    		});
	    };

	    /**
	     * digunakan untuk menghapus data
	     * lewatkan parameter id
	     * gunakan fungsi yang sudah kita buat di StudentService
	     * jika berhasil, refresh data student
	     * @param  {[type]} $id [description]
	     * @return {[type]}     [description]
	     */
	    $scope.deleteStudent = function (id) {
	    	$scope.loading = true;

	    	Student.destroy(id)
	    		.success(function (data) {

	    			Student.get()
	    				.success(function (response) {
	    					$scope.students = response;
	    					$scope.loading = false;
	    				});

	    		});
	    };

	    $scope.editStudent = function (id) {
	    	$scope.loading = true;

	    	Student.edit(id)
	    		.success(function (response) {
	    			$scope.student = response;
	    			$scope.loading = false;
	    			$scope.formEdit = true;
	    		})
	    		.error(function (response) {
	    			console.log(response);
	    		});
	    };

	    $scope.updateStudent = function () {

	    	$scope.loading = true;
	    	console.log($scope.student);
	    	Student.update($scope.student)
	    		.success(function (response) {

	    			Student.get()
	    				.success(function (response) {
	    					$scope.students = response;
	    					$scope.loading = false;
	    					$scope.formEdit = false;
	    				});

	    		})
	    		.error(function (response) {
	    			console.log(response);
	    		});

	    };

});