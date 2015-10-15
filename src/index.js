import angular from 'angular';
import 'modules/application/application-module';

angular.element(document).ready(function() {
    angular.bootstrap(document, ['Application']);
});