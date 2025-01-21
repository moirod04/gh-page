System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.1.2/image", "pragmate-ui@0.1.2/components"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Error, __beyond_pkg, hmr;
  _export("Error", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi012Image) {
      dependency_3 = _pragmateUi012Image;
    }, function (_pragmateUi012Components) {
      dependency_4 = _pragmateUi012Components;
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
          "vspecifier": "sgs-workflow@1.0.0/error"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/image', dependency_3], ['pragmate-ui/components', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('sgs-workflow@1.0.0/error');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1988585679,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Error = Error;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function Error({
            type,
            onClose
          }) {
            const errorType = type || "404";
            const typeErrors = {
              "404": {
                title: "Página no encontrada",
                error: "404"
              },
              "500": {
                title: "Error interno del servidor",
                error: "500"
              }
            };
            const image = `${globalThis.baseDir}assets/${typeErrors[errorType].error}.svg`;
            const handleClose = event => {
              if (!onClose) return;
              onClose(event);
            };
            return _react.default.createElement("div", {
              className: 'container-404'
            }, _react.default.createElement("div", {
              className: "content-404"
            }, _react.default.createElement("h4", null, typeErrors[errorType].title), _react.default.createElement("span", null, typeErrors[errorType].error), _react.default.createElement(_image.Image, {
              src: image,
              alt: `${typeErrors[errorType].error} error`
            }), _react.default.createElement(_components.Button, {
              variant: 'primary',
              onClick: handleClose
            }, "Cerrar")));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Error",
        "name": "Error"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Error') && _export("Error", Error = require ? require('./index').Error : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ltYWdlIiwiX2NvbXBvbmVudHMiLCJFcnJvciIsInR5cGUiLCJvbkNsb3NlIiwiZXJyb3JUeXBlIiwidHlwZUVycm9ycyIsInRpdGxlIiwiZXJyb3IiLCJpbWFnZSIsImdsb2JhbFRoaXMiLCJiYXNlRGlyIiwiaGFuZGxlQ2xvc2UiLCJldmVudCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSW1hZ2UiLCJzcmMiLCJhbHQiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayJdLCJzb3VyY2VzIjpbIi9jb2RlL3RzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFRTztVQUFVLFNBQVVHLEtBQUtBLENBQUM7WUFBRUMsSUFBSTtZQUFFQztVQUFPLENBQVU7WUFDekQsTUFBTUMsU0FBUyxHQUFHRixJQUFJLElBQUksS0FBSztZQUMvQixNQUFNRyxVQUFVLEdBQUc7Y0FDbEIsS0FBSyxFQUFFO2dCQUNOQyxLQUFLLEVBQUUsc0JBQXNCO2dCQUM3QkMsS0FBSyxFQUFFO2VBQ1A7Y0FDRCxLQUFLLEVBQUU7Z0JBQ05ELEtBQUssRUFBRSw0QkFBNEI7Z0JBQ25DQyxLQUFLLEVBQUU7O2FBRVI7WUFDRCxNQUFNQyxLQUFLLEdBQUcsR0FBR0MsVUFBVSxDQUFDQyxPQUFPLFVBQVVMLFVBQVUsQ0FBQ0QsU0FBUyxDQUFDLENBQUNHLEtBQUssTUFBTTtZQUM5RSxNQUFNSSxXQUFXLEdBQUlDLEtBQW9DLElBQUk7Y0FDNUQsSUFBSSxDQUFDVCxPQUFPLEVBQUU7Y0FDZEEsT0FBTyxDQUFDUyxLQUFLLENBQUM7WUFDZixDQUFDO1lBQ0QsT0FDQ2YsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFlLEdBQzdCbEIsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFhLEdBQzNCbEIsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBLGFBQUtULFVBQVUsQ0FBQ0QsU0FBUyxDQUFDLENBQUNFLEtBQUssQ0FBTSxFQUN0Q1QsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBLGVBQU9ULFVBQVUsQ0FBQ0QsU0FBUyxDQUFDLENBQUNHLEtBQUssQ0FBUSxFQUMxQ1YsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBLENBQUNmLE1BQUEsQ0FBQWlCLEtBQUs7Y0FDTEMsR0FBRyxFQUFFVCxLQUFLO2NBQ1ZVLEdBQUcsRUFBRSxHQUFHYixVQUFVLENBQUNELFNBQVMsQ0FBQyxDQUFDRyxLQUFLO1lBQVEsRUFDMUMsRUFDRlYsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBLENBQUNkLFdBQUEsQ0FBQW1CLE1BQU07Y0FBQ0MsT0FBTyxFQUFDLFNBQVM7Y0FBQ0MsT0FBTyxFQUFFVjtZQUFXLFlBRXJDLENBQ0osQ0FDRDtVQUdSIiwiaWdub3JlTGlzdCI6W119