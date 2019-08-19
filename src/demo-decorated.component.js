const componentName = "demoDecoratedComponent";

const component = {
  template: `
    <simple-transclusion>
      <demo-component name="$ctrl.name" some-string="{{$ctrl.someString}}" foo="$ctrl.foo" things="$ctrl.things" on-event="$ctrl.onClick(item)"></demo-component>
    </simple-transclusion>
  `,
  bindings: {
    name: "<",
    someString: "@",
    foo: "<",
    things: "<",
    onEvent: "&"
  },
  controller: class {
    $onInit() {
      console.log("$onInit");
    }

    $onChanges(changes) {
      console.log("$onChanges", changes);
    }

    onClick(item) {
      console.log("onClick", item);
      this.onEvent({ item });
    }
  }
};

export default [componentName, component];
