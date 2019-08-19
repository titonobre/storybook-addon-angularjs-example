const componentName = "multiTransclusion";

const component = {
  template: `
      <div style="border: 15px solid Silver; display: flex;">
        <div style="border: 15px solid Green; flex: 1;" ng-transclude="left">Fallback Left</div>
        <div style="border: 15px solid Red; flex: 1;" ng-transclude="right">Fallback Right</div>
      </div>
  `,
  transclude: {
    'left': '?left',
    'right': '?right'
  },
};

export default [componentName, component];
