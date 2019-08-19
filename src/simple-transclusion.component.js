const componentName = "simpleTransclusion";

const component = {
  template: `
      <div style="border: 15px solid RebeccaPurple;" ng-transclude></div>
  `,
  transclude: true
};

export default [componentName, component];
