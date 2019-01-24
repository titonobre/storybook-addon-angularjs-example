import angular from "angular";

import { MyAppModule } from "../src/demo.module";

MyAppModule
    .provider({
        $rootElement: function () {
            this.$get = function () {
                return document.body; // the same element used in angular.bootstrap()
            };
        }
    });

angular.bootstrap(document.body, [MyAppModule.name]);
