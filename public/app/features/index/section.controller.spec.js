'use strict';
var $compile, $scope, element;

describe('Template Controller ', function() {

    beforeEach(function() {
        module('templateApp.main');

        $scope = $rootScope.$new();
        
        controller = $controller('templateController', {
            $scope: $scope
        });

        $scope.$apply();
    });

    it('Template Controller should exist', inject(function() {
        expect($scope.foo).to.be.defined;
    }));
});