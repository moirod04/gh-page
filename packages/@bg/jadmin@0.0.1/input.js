System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.1.2/form", "@bg/jadmin@0.0.1/app-icon"], function (_export, _context) {
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
    }, function (_bgJadmin001AppIcon) {
      dependency_4 = _bgJadmin001AppIcon;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@bg/auth-api", "1.0.0"], ["@jadmin/ui", "1.0.0"], ["@bg/auth-models", null], ["@bgroup/jview", "1.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/widgets", "0.1.6"], ["@bgroup/data-model", "1.0.11"], ["@bgroup/ui", "0.0.38"], ["chart.js", "4.4.4"], ["dayjs", "1.11.13"], ["dotenv", "16.4.5"], ["framer-motion", "6.5.1"], ["googleapis", "120.0.0"], ["mysql2", "3.11.0"], ["perfect-scrollbar", "1.5.5"], ["pragmate-ui", "0.1.2"], ["prism-react-renderer", "2.4.0"], ["prismjs", "1.29.0"], ["react-is", "18.3.1"], ["react-select", "5.8.0"], ["sequelize", "6.37.3"], ["socket.io-client", "4.7.5"], ["swiper", "11.1.12"], ["tippy.js", "6.3.7"], ["uuid", "9.0.1"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["@bg/jadmin", "0.0.1"], ["sgs-workflow", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@bg/jadmin@0.0.1/input"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/form', dependency_3], ['@bg/jadmin/app-icon', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/jadmin@0.0.1/input');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1927909495,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Input = Input;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          ;
          /*bundle*/
          function Input(props) {
            const {
              label
            } = props;
            const properties = Object.assign({}, props);
            delete properties.label;
            const badgeRequired = props.label && props.required && _react.default.createElement("span", {
              className: "pragmate-input__required-label"
            }, "(*)");
            return _react.default.createElement("div", {
              className: 'jadmin-input'
            }, _react.default.createElement("label", {
              className: 'label-jadmin'
            }, label, " ", badgeRequired), _react.default.createElement(_form.Input, {
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
        hash: 658509874,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Select = Select;
          var _react = require("react");
          var _appIcon = require("@bg/jadmin/app-icon");
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
            const badgeRequired = props.required && _react.default.createElement("span", {
              className: "input__required-label"
            }, "(*)");
            const cls = `${className ?? "form-group-select"}`;
            const properties = Object.assign({}, props);
            delete properties.className;
            delete properties.label;
            delete properties.options;
            delete properties.firstOption;
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("label", {
              className: "label"
            }, label, badgeRequired), _react.default.createElement("select", {
              className: "select",
              title: label,
              ...properties,
              id: properties.name,
              value: properties.value ?? ""
            }, firstOption !== null && _react.default.createElement("option", {
              value: ""
            }, firstOption ?? label), output), _react.default.createElement(_appIcon.AppIcon, {
              icon: "down"
            }));
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./textarea
      **************************/

      ims.set('./textarea', {
        hash: 2489769669,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TextArea = TextArea;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          ;
          /*bundle*/
          function TextArea(props) {
            const {
              label
            } = props;
            const properties = Object.assign({}, props);
            delete properties.label;
            const badgeRequired = props.label && props.required && _react.default.createElement("span", {
              className: "pragmate-input__required-label"
            }, "(*)");
            return _react.default.createElement("div", {
              className: 'jadmin-input'
            }, _react.default.createElement("label", {
              className: 'label-jadmin'
            }, label, " ", badgeRequired), _react.default.createElement(_form.Textarea, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2Zvcm0iLCJJbnB1dCIsInByb3BzIiwibGFiZWwiLCJwcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiYmFkZ2VSZXF1aXJlZCIsInJlcXVpcmVkIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJfYXBwSWNvbiIsIlNlbGVjdCIsIm9wdGlvbnMiLCJmaXJzdE9wdGlvbiIsIm91dHB1dCIsIm1hcCIsIml0ZW0iLCJrZXkiLCJ2YWx1ZSIsImNscyIsInRpdGxlIiwiaWQiLCJuYW1lIiwiQXBwSWNvbiIsImljb24iLCJUZXh0QXJlYSIsIlRleHRhcmVhIl0sInNvdXJjZXMiOlsiL2NvZGUvdHMvaW5kZXgudHN4IiwiL2NvZGUvdHMvc2VsZWN0LnRzeCIsIi9jb2RlL3RzL3RleHRhcmVhLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQVlDO1VBRU07VUFBVSxTQUFVRSxLQUFLQSxDQUFDQyxLQUFZO1lBQ3pDLE1BQU07Y0FBRUM7WUFBSyxDQUFFLEdBQUdELEtBQUs7WUFDdkIsTUFBTUUsVUFBVSxHQUFXQyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxFQUFFLEVBQUVKLEtBQUssQ0FBQztZQUNuRCxPQUFPRSxVQUFVLENBQUNELEtBQUs7WUFFdkIsTUFBTUksYUFBYSxHQUFHTCxLQUFLLENBQUNDLEtBQUssSUFBSUQsS0FBSyxDQUFDTSxRQUFRLElBQU1WLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFnQyxTQUFhO1lBQ3RILE9BQ0liLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFjLEdBQ3pCYixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFPQyxTQUFTLEVBQUM7WUFBYyxHQUFFUixLQUFLLEUsS0FBR0ksYUFBYSxDQUFTLEVBQy9EVCxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVixLQUFBLENBQUFDLEtBQVE7Y0FBQSxHQUFLRztZQUFVLEVBQUksQ0FDMUI7VUFFZDtVQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNCRCxJQUFBTixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBYSxRQUFBLEdBQUFiLE9BQUE7VUFZTztVQUFVLFNBQVVjLE1BQU1BLENBQUNYLEtBQWE7WUFDN0MsTUFBTTtjQUFFQyxLQUFLO2NBQUVXLE9BQU87Y0FBRUgsU0FBUztjQUFFSTtZQUFXLENBQUMsR0FBR2IsS0FBSztZQUV2RCxNQUFNYyxNQUFNLEdBQWtCRixPQUFPLENBQUNHLEdBQUcsQ0FDdENDLElBQVksSUFDWHBCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBO2NBQVFTLEdBQUcsRUFBRUQsSUFBSSxDQUFDRSxLQUFLO2NBQUVBLEtBQUssRUFBRUYsSUFBSSxDQUFDRTtZQUFLLEdBQ3ZDRixJQUFJLENBQUNmLEtBQUssQ0FFZCxDQUNGO1lBRUQsTUFBTUksYUFBYSxHQUFHTCxLQUFLLENBQUNNLFFBQVEsSUFBTVYsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQXVCLFNBQWE7WUFDOUYsTUFBTVUsR0FBRyxHQUFXLEdBQUdWLFNBQVMsSUFBSSxtQkFBbUIsRUFBRTtZQUN6RCxNQUFNUCxVQUFVLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLEVBQUUsRUFBRUosS0FBSyxDQUFDO1lBQzNDLE9BQU9FLFVBQVUsQ0FBQ08sU0FBUztZQUMzQixPQUFPUCxVQUFVLENBQUNELEtBQUs7WUFDdkIsT0FBT0MsVUFBVSxDQUFDVSxPQUFPO1lBQ3pCLE9BQU9WLFVBQVUsQ0FBQ1csV0FBVztZQUU3QixPQUNFakIsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFFVTtZQUFHLEdBQ2pCdkIsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBT0MsU0FBUyxFQUFDO1lBQU8sR0FBRVIsS0FBSyxFQUM1QkksYUFBYSxDQUNSLEVBQ1JULE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBO2NBQ0VDLFNBQVMsRUFBQyxRQUFRO2NBQ2xCVyxLQUFLLEVBQUVuQixLQUFLO2NBQUEsR0FDUkMsVUFBVTtjQUNkbUIsRUFBRSxFQUFFbkIsVUFBVSxDQUFDb0IsSUFBSTtjQUNuQkosS0FBSyxFQUFFaEIsVUFBVSxDQUFDZ0IsS0FBSyxJQUFJO1lBQUUsR0FFNUJMLFdBQVcsS0FBSyxJQUFJLElBQUlqQixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFRVSxLQUFLLEVBQUM7WUFBRSxHQUFFTCxXQUFXLElBQUlaLEtBQUssQ0FBVSxFQUN4RWEsTUFBTSxDQUNBLEVBQ1RsQixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDRSxRQUFBLENBQUFhLE9BQU87Y0FBQ0MsSUFBSSxFQUFDO1lBQU0sRUFBRyxDQUdsQjtVQUVYOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BEQSxJQUFBNUIsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBU0M7VUFFTTtVQUFVLFNBQVU0QixRQUFRQSxDQUFDekIsS0FBWTtZQUM1QyxNQUFNO2NBQUVDO1lBQUssQ0FBRSxHQUFHRCxLQUFLO1lBQ3ZCLE1BQU1FLFVBQVUsR0FBVUMsTUFBTSxDQUFDQyxNQUFNLENBQUMsRUFBRSxFQUFFSixLQUFLLENBQUM7WUFDbEQsT0FBT0UsVUFBVSxDQUFDRCxLQUFLO1lBQ3ZCLE1BQU1JLGFBQWEsR0FBR0wsS0FBSyxDQUFDQyxLQUFLLElBQUlELEtBQUssQ0FBQ00sUUFBUSxJQUFLVixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBZ0MsU0FBWTtZQUNwSCxPQUNJYixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBYyxHQUN6QmIsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBT0MsU0FBUyxFQUFDO1lBQWMsR0FBRVIsS0FBSyxFLEtBQUdJLGFBQWEsQ0FBUyxFQUMvRFQsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1YsS0FBQSxDQUFBNEIsUUFBUTtjQUFBLEdBQUt4QjtZQUFVLEVBQUksQ0FDMUI7VUFFZDtVQUFDIiwiaWdub3JlTGlzdCI6W119