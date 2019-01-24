const componentName = "demoComponent";

const component = {
  template: `

  <md-card>
    <md-card-content>
      <h2>It works {{$ctrl.name}}</h2>
      <p>{{$ctrl.foo.bar}}</p>
    </md-card-content>
    <md-card-actions layout="row" layout-align="end center">
      <md-button class="md-primary md-raised"  ng-click="$ctrl.onClick()">Hit Me!</md-button>
    </md-card-actions>
  </md-card>


    `,
  bindings: {
    name: "<",
    foo: "<",
    onEv: "&"
  },
  controller: class {

    constructor($rootElement) {
      console.log($rootElement);
    }

    $onInit() {
      console.log("$onInit");
    }

    $onChanges(changes) {
      console.log("$onChanges", changes);
    }

    onClick() {
      console.log("onClick", this);
      this.onEv({ num: this.foo.bar, name: this.name });
    }
  }
};

export default [componentName, component];
