import angular from "angular";
import "angular-aria";
import "angular-animate";
import "angular-material";

import "angular-material/angular-material.min.css"

import demoComponent from "./demo.component";
import otherComponent from "./other.component";

const MyAppModule = angular
  .module("myApp", ["ngMaterial", "ngAria", "ngAnimate"])
  .component(...demoComponent)
  .component(...otherComponent);

export { MyAppModule };
