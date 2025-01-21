System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.1.2/form", "pragmate-ui@0.1.2/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Input, Select, TextArea, __beyond_pkg, hmr;
  _export({
    Input: void 0,
    Select: void 0,
    TextArea: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi012Form) {
      dependency_3 = _pragmateUi012Form;
    }, function (_pragmateUi012Icons) {
      dependency_4 = _pragmateUi012Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "0.1.2"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["uuid", "9.0.1"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["@bgroup/jview", "1.0.3"], ["sgs-workflow", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@bgroup/jview@1.0.3/input"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/form', dependency_3], ['pragmate-ui/icons', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bgroup/jview@1.0.3/input');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 4074862097,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Input = Input;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          /*bundle*/
          function Input(props) {
            const {
              label
            } = props;
            const properties = Object.assign({}, props);
            delete properties.label;
            return _react.default.createElement("div", {
              className: 'jadmin-input'
            }, _react.default.createElement("label", {
              className: 'label-jadmin'
            }, label), _react.default.createElement(_form.Input, {
              ...properties
            }));
          }
          ;
        }
      });

      /************************
      INTERNAL MODULE: ./select
      ************************/

      ims.set('./select', {
        hash: 314281430,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Select = Select;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          function Select(props) {
            const {
              label,
              options,
              className,
              firstOption
            } = props;
            const output = options.map(item => _react.default.createElement("option", {
              key: item.value,
              value: item.value
            }, item.label));
            const cls = `${className ?? "form-group-select"}`;
            const properties = Object.assign({}, props);
            delete properties.className;
            delete properties.label;
            delete properties.options;
            delete properties.firstOption;
            const down = {
              icon: `<path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>`,
              viewBox: "0 0 512 512"
            };
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("label", null, label), _react.default.createElement("select", {
              className: "select",
              title: label,
              ...properties,
              id: properties.name,
              value: properties.value ?? "",
              name: properties.name
            }, firstOption !== null && _react.default.createElement("option", {
              value: ""
            }, firstOption ?? label), output), _react.default.createElement(_icons.Icon, {
              icon: down
            }), properties.required && _react.default.createElement("span", {
              className: "beyond-input__required-label"
            }, "(*)"));
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./textarea
      **************************/

      ims.set('./textarea', {
        hash: 984988157,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TextArea = TextArea;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          /*bundle*/
          function TextArea(props) {
            const {
              label
            } = props;
            const properties = Object.assign({}, props);
            delete properties.label;
            return _react.default.createElement("div", {
              className: 'jadmin-input'
            }, _react.default.createElement("label", {
              className: 'label-jadmin'
            }, label), _react.default.createElement(_form.Textarea, {
              ...properties
            }));
          }
          ;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Input",
        "name": "Input"
      }, {
        "im": "./select",
        "from": "Select",
        "name": "Select"
      }, {
        "im": "./textarea",
        "from": "TextArea",
        "name": "TextArea"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Input') && _export("Input", Input = require ? require('./index').Input : value);
        (require || prop === 'Select') && _export("Select", Select = require ? require('./select').Select : value);
        (require || prop === 'TextArea') && _export("TextArea", TextArea = require ? require('./textarea').TextArea : value);
      };
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2Zvcm0iLCJJbnB1dCIsInByb3BzIiwibGFiZWwiLCJwcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJfaWNvbnMiLCJTZWxlY3QiLCJvcHRpb25zIiwiZmlyc3RPcHRpb24iLCJvdXRwdXQiLCJtYXAiLCJpdGVtIiwia2V5IiwidmFsdWUiLCJjbHMiLCJkb3duIiwiaWNvbiIsInZpZXdCb3giLCJ0aXRsZSIsImlkIiwibmFtZSIsIkljb24iLCJyZXF1aXJlZCIsIlRleHRBcmVhIiwiVGV4dGFyZWEiXSwic291cmNlcyI6WyIvY29kZS90cy9pbmRleC50c3giLCIvY29kZS90cy9zZWxlY3QudHN4IiwiL2NvZGUvdHMvdGV4dGFyZWEudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBY087VUFBVSxTQUFVRSxLQUFLQSxDQUFDQyxLQUFhO1lBQzFDLE1BQU07Y0FBRUM7WUFBSyxDQUFFLEdBQUdELEtBQUs7WUFDdkIsTUFBTUUsVUFBVSxHQUFXQyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxFQUFFLEVBQUVKLEtBQUssQ0FBQztZQUNuRCxPQUFPRSxVQUFVLENBQUNELEtBQUs7WUFFdkIsT0FDSUwsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWMsR0FDekJYLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQU9DLFNBQVMsRUFBQztZQUFjLEdBQUVOLEtBQUssQ0FBUyxFQUMvQ0wsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1IsS0FBQSxDQUFBQyxLQUFRO2NBQUEsR0FB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