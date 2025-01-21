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
        const dependencies = new Map([["@bg/jadmin", "0.0.1"], ["@bg/auth-api", "1.0.0"], ["@jadmin/ui", "1.0.0"], ["@bgroup/jview", "1.0.3"], ["@bgroup/helpers", "1.0.7"], ["@bgroup/wise-form", "0.0.4"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/bee", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/reactive", "1.1.14"], ["@bgroup/http-suite", "1.0.5"], ["chart.js", "4.4.1"], ["dayjs", "1.11.10"], ["dotenv", "16.4.4"], ["express", "4.18.2"], ["framer-motion", "10.18.0"], ["googleapis", "129.0.0"], ["javascript-time-ago", "2.5.10"], ["jsonwebtoken", "9.0.2"], ["mathjs", "12.4.1"], ["moment", "2.30.1"], ["perfect-scrollbar", "1.5.5"], ["pragmate-ui", "0.1.2"], ["prismjs", "1.29.0"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-google-recaptcha", "3.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["swiper", "11.0.6"], ["tippy.js", "6.3.7"], ["use-debounce", "10.0.0"], ["uuid", "9.0.1"], ["wise-form", "0.0.4"], ["@babel/core", "7.23.9"], ["@babel/preset-env", "7.23.9"], ["@babel/preset-typescript", "7.23.3"], ["@types/react", "18.2.55"], ["@types/react-dom", "18.2.19"], ["babel-jest", "29.7.0"], ["jest", "29.7.0"], ["ts-jest", "29.1.2"], ["sgs-workflow", "1.0.0"], ["sgs-workflow", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "sgs-workflow@1.0.0/input"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/form', dependency_3], ['pragmate-ui/icons', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('sgs-workflow@1.0.0/input');
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
        hash: 120857564,
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
            }, firstOption ?? label), output), _react.default.createElement(_icons.Icon, {
              icon: "down"
            }));
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./textarea
      **************************/

      ims.set('./textarea', {
        hash: 3611783980,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2Zvcm0iLCJJbnB1dCIsInByb3BzIiwibGFiZWwiLCJwcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiYmFkZ2VSZXF1aXJlZCIsInJlcXVpcmVkIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJfaWNvbnMiLCJTZWxlY3QiLCJvcHRpb25zIiwiZmlyc3RPcHRpb24iLCJvdXRwdXQiLCJtYXAiLCJpdGVtIiwia2V5IiwidmFsdWUiLCJjbHMiLCJ0aXRsZSIsImlkIiwibmFtZSIsIkljb24iLCJpY29uIiwiVGV4dEFyZWEiLCJUZXh0YXJlYSJdLCJzb3VyY2VzIjpbIi90cy9pbmRleC50c3giLCIvdHMvc2VsZWN0LnRzeCIsIi90cy90ZXh0YXJlYS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFZQztVQUVNO1VBQVUsU0FBVUUsS0FBS0EsQ0FBQ0MsS0FBWTtZQUN6QyxNQUFNO2NBQUVDO1lBQUssQ0FBRSxHQUFHRCxLQUFLO1lBQ3ZCLE1BQU1FLFVBQVUsR0FBV0MsTUFBTSxDQUFDQyxNQUFNLENBQUMsRUFBRSxFQUFFSixLQUFLLENBQUM7WUFDbkQsT0FBT0UsVUFBVSxDQUFDRCxLQUFLO1lBRXZCLE1BQU1JLGFBQWEsR0FBR0wsS0FBSyxDQUFDQyxLQUFLLElBQUlELEtBQUssQ0FBQ00sUUFBUSxJQUFNVixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBZ0MsU0FBYTtZQUN0SCxPQUNJYixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBYyxHQUN6QmIsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBT0MsU0FBUyxFQUFDO1lBQWMsR0FBRVIsS0FBSyxFLEtBQUdJLGFBQWEsQ0FBUyxFQUMvRFQsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1YsS0FBQSxDQUFBQyxLQUFRO2NBQUEsR0FBS0c7WUFBVSxFQUFJLENBQzFCO1VBRWQ7VUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQkQsSUFBQU4sTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQWEsTUFBQSxHQUFBYixPQUFBO1VBWU87VUFBVSxTQUFVYyxNQUFNQSxDQUFDWCxLQUFhO1lBQzdDLE1BQU07Y0FBRUMsS0FBSztjQUFFVyxPQUFPO2NBQUVILFNBQVM7Y0FBRUk7WUFBVyxDQUFFLEdBQUdiLEtBQUs7WUFFeEQsTUFBTWMsTUFBTSxHQUFrQkYsT0FBTyxDQUFDRyxHQUFHLENBQ3RDQyxJQUFZLElBQ1hwQixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFRUyxHQUFHLEVBQUVELElBQUksQ0FBQ0UsS0FBSztjQUFFQSxLQUFLLEVBQUVGLElBQUksQ0FBQ0U7WUFBSyxHQUN2Q0YsSUFBSSxDQUFDZixLQUFLLENBRWQsQ0FDRjtZQUVELE1BQU1JLGFBQWEsR0FBR0wsS0FBSyxDQUFDTSxRQUFRLElBQUtWLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUF1QixTQUFZO1lBQzVGLE1BQU1VLEdBQUcsR0FBVyxHQUFHVixTQUFTLElBQUksbUJBQW1CLEVBQUU7WUFDekQsTUFBTVAsVUFBVSxHQUFHQyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxFQUFFLEVBQUVKLEtBQUssQ0FBQztZQUMzQyxPQUFPRSxVQUFVLENBQUNPLFNBQVM7WUFDM0IsT0FBT1AsVUFBVSxDQUFDRCxLQUFLO1lBQ3ZCLE9BQU9DLFVBQVUsQ0FBQ1UsT0FBTztZQUN6QixPQUFPVixVQUFVLENBQUNXLFdBQVc7WUFFN0IsT0FDRWpCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBRVU7WUFBRyxHQUNqQnZCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBO2NBQU9DLFNBQVMsRUFBQztZQUFPLEdBQUVSLEtBQUssRUFDNUJJLGFBQWEsQ0FDUixFQUNSVCxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUNFQyxTQUFTLEVBQUMsUUFBUTtjQUNsQlcsS0FBSyxFQUFFbkIsS0FBSztjQUFBLEdBQ1JDLFVBQVU7Y0FDZG1CLEVBQUUsRUFBRW5CLFVBQVUsQ0FBQ29CLElBQUk7Y0FDbkJKLEtBQUssRUFBRWhCLFVBQVUsQ0FBQ2dCLEtBQUssSUFBSTtZQUFFLEdBRTVCTCxXQUFXLEtBQUssSUFBSSxJQUFJakIsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBUVUsS0FBSyxFQUFDO1lBQUUsR0FBRUwsV0FBVyxJQUFJWixLQUFLLENBQVUsRUFDeEVhLE1BQU0sQ0FDQSxFQUNUbEIsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ0UsTUFBQSxDQUFBYSxJQUFJO2NBQUNDLElBQUksRUFBQztZQUFNLEVBQUcsQ0FHZjtVQUVYOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BEQSxJQUFBNUIsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBU0c7VUFFSTtVQUFVLFNBQVU0QixRQUFRQSxDQUFDekIsS0FBYTtZQUM3QyxNQUFNO2NBQUVDO1lBQUssQ0FBRSxHQUFHRCxLQUFLO1lBQ3ZCLE1BQU1FLFVBQVUsR0FBV0MsTUFBTSxDQUFDQyxNQUFNLENBQUMsRUFBRSxFQUFFSixLQUFLLENBQUM7WUFDbkQsT0FBT0UsVUFBVSxDQUFDRCxLQUFLO1lBQ3ZCLE1BQU1JLGFBQWEsR0FBR0wsS0FBSyxDQUFDQyxLQUFLLElBQUlELEtBQUssQ0FBQ00sUUFBUSxJQUFNVixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBZ0MsU0FBYTtZQUN0SCxPQUNJYixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBYyxHQUN6QmIsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBT0MsU0FBUyxFQUFDO1lBQWMsR0FBRVIsS0FBSyxDQUFTLEVBQy9DTCxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVixLQUFBLENBQUE0QixRQUFRO2NBQUEsR0FBS3hCO1lBQVUsRUFBRyxDQUN6QjtVQUVkO1VBQUMiLCJpZ25vcmVMaXN0IjpbXX0=