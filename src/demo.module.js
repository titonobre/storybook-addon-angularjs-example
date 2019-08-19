import angular from "angular";

import demoComponent from "./demo.component";
import demoDecoratedComponent from "./demo-decorated.component";
import simpleTransclusionComponent from "./simple-transclusion.component";
import multiTransclusionComponent from "./multi-transclusion.component";

const MyAppModule = angular
  .module("myApp", [])
  .component(...simpleTransclusionComponent)
  .component(...multiTransclusionComponent)
  .component(...demoDecoratedComponent)
  .component(...demoComponent);

export { MyAppModule };
