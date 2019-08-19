import { storiesOf } from "@storybook/html";

import { withKnobs, text, number, array } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { forModule } from "storybook-addon-angularjs";

storiesOf("Demo Component", module)
  .addDecorator(withKnobs)
  .add(
    "default",
    forModule("myApp").createElement(compile => {
      const name = text("Name", "Jane");
      const someString = text("Some String", "It works too!");

      const foo = {
        bar: number("Value", 20, { range: true, min: 0, max: 30, step: 1 })
      };

      const things = array("Things", ["a", "b", "c"], ",");

      const onEvt = action("clicked");

      return compile`<demo-component name="${name}" some-string="{{${someString}}}" foo="${foo}" things="${things}" on-event="${onEvt}(item)"></demo-component>`;
    })
    )
    .add(
      "default with a border",
      forModule("myApp").createElement(compile => {
        const name = text("Name", "Jane");
        const someString = text("Some String", "It works too!");

        const foo = {
          bar: number("Value", 20, { range: true, min: 0, max: 30, step: 1 })
        };

        const things = array("Things", ["a", "b", "c"], ",");

        const onEvt = action("clicked");

        return compile`<demo-decorated-component name="${name}" some-string="{{${someString}}}" foo="${foo}" things="${things}" on-event="${onEvt}(item)"></demo-decorated-component>`;
    })
  )
  .add(
    "with simple transclusion",
    forModule("myApp").createElement(compile => {
      const name = text("Name", "Jane");
      const someString = text("Some String", "It works too!");

      const foo = {
        bar: number("Value", 20, { range: true, min: 0, max: 30, step: 1 })
      };

      const things = array("Things", ["a", "b", "c"], ",");

      const onEvt = action("clicked");

      return compile`
        <simple-transclusion>
          <demo-component name="${name}" some-string="{{${someString}}}" foo="${foo}" things="${things}" on-event="${onEvt}(item)"></demo-component>
        </simple-transclusion>
      `;
    })
  )
  .add(
    "with multi transclusion",
    forModule("myApp").createElement(compile => {
      const name = text("Name", "Jane");
      const someString = text("Some String", "It works too!");

      const foo = {
        bar: number("Value", 20, { range: true, min: 0, max: 30, step: 1 })
      };

      const things = array("Things", ["a", "b", "c"], ",");

      const onEvt = action("clicked");

      return compile`
        <multi-transclusion>
          <left>
            <simple-transclusion>
              <demo-component name="${name}" some-string="{{${someString}}}" foo="${foo}" things="${things}" on-event="${onEvt}(item)"></demo-component>
            </simple-transclusion>
          </left>
          <right>
            <demo-component name="${name}" some-string="{{${someString}}}" foo="${foo}" things="${things}" on-event="${onEvt}(item)"></demo-component>
          </right>
        </multi-transclusion>
      `;
    })
  )
  .add(
    "mix simple and multi transclusion",
    forModule("myApp").createElement(compile => {
      const name = text("Name", "Jane");
      const someString = text("Some String", "It works too!");

      const foo = {
        bar: number("Value", 20, { range: true, min: 0, max: 30, step: 1 })
      };

      const things = array("Things", ["a", "b", "c"], ",");

      const onEvt = action("clicked");

      return compile`
        <multi-transclusion>
          <left>
            <simple-transclusion>
              <demo-component name="${name}" some-string="{{${someString}}}" foo="${foo}" things="${things}" on-event="${onEvt}(item)"></demo-component>
            </simple-transclusion>
          </left>
          <right>
            <demo-decorated-component name="${name}" some-string="{{${someString}}}" foo="${foo}" things="${things}" on-event="${onEvt}(item)"></demo-decorated-component>
          </right>
        </multi-transclusion>
      `;
    })
  );
