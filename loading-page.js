System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.1.2/components", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, LoadingPage, __beyond_pkg, hmr;
  _export("LoadingPage", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_pragmateUi012Components) {
      dependency_2 = _pragmateUi012Components;
    }, function (_beyondJsKernel019Styles) {
      dependency_3 = _beyondJsKernel019Styles;
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
          "vspecifier": "sgs-workflow@1.0.0/loading-page"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/components', dependency_2], ['@beyond-js/kernel/styles', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('sgs-workflow@1.0.0/loading-page');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./loading
      *************************/
      ims.set('./loading', {
        hash: 4201840443,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LoadingPage = LoadingPage;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function LoadingPage({
            loading,
            content
          }) {
            let cls = loading ? 'loading-page loading-proses' : 'loading-page main-loading';
            cls += content ? " loading-content" : "";
            return React.createElement("div", {
              className: cls
            }, React.createElement(_components.Spinner, {
              active: true
            }));
          }
          ;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./loading",
        "from": "LoadingPage",
        "name": "LoadingPage"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'LoadingPage') && _export("LoadingPage", LoadingPage = require ? require('./loading').LoadingPage : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfY29tcG9uZW50cyIsIkxvYWRpbmdQYWdlIiwibG9hZGluZyIsImNvbnRlbnQiLCJjbHMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiU3Bpbm5lciIsImFjdGl2ZSJdLCJzb3VyY2VzIjpbIi9jb2RlL3RzL2xvYWRpbmcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxXQUFBLEdBQUFELE9BQUE7VUFLTztVQUFVLFNBQ0pFLFdBQVdBLENBQUM7WUFBRUMsT0FBTztZQUFFQztVQUFPLENBQWM7WUFDakQsSUFBSUMsR0FBRyxHQUFZRixPQUFPLEdBQUcsNkJBQTZCLEdBQUcsMkJBQTJCO1lBQ3hGRSxHQUFHLElBQUdELE9BQU8sR0FBRyxrQkFBa0IsR0FBRyxFQUFFO1lBQzNDLE9BQ0lMLEtBQUEsQ0FBQU8sYUFBQTtjQUFLQyxTQUFTLEVBQUVGO1lBQUcsR0FBRU4sS0FBQSxDQUFBTyxhQUFBLENBQUNMLFdBQUEsQ0FBQU8sT0FBTztjQUFDQyxNQUFNO1lBQUEsRUFBRSxDQUFNO1VBRXBEO1VBQUMiLCJpZ25vcmVMaXN0IjpbXX0=