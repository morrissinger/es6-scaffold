import 'angular-ui-router';
import { ApplicationController } from './controllers/application-controller';
import tpl from 'modules/application/templates/application-template.html!';

angular.module('Application', ['ui.router'])
		.config(($stateProvider) => {

			$stateProvider.state('home', {
				url: '/home',
				views: {
					application: {
						template: tpl,
						controller: ApplicationController,
						controllerAs: 'controller'
					}
				}
			});

		})
		.controller('ApplicationController', ApplicationController);