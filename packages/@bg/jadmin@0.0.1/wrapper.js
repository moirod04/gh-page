System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.14/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, appWrapper, __beyond_pkg, hmr;
  _export("appWrapper", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive1114Model) {
      dependency_1 = _beyondJsReactive1114Model;
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
          "vspecifier": "@bg/jadmin@0.0.1/wrapper"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1]]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./app-wraper
      ****************************/
      ims.set('./app-wraper', {
        hash: 3274711244,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.appWrapper = void 0;
          var _model = require("@beyond-js/reactive/model");
          class Wrapper extends _model.ReactiveModel {
            constructor() {
              super();
              this.init();
            }
            init = async () => {
              const promises = [
                // this.#profiles.load({ limit: 1000 }),
                // this.#modules.load(),
                // this.#permissions.load(),
                // this.#states.load()
              ];
              await Promise.all(promises);
              this.ready = true;
            };
          }
          /*bundle*/
          const appWrapper = exports.appWrapper = new Wrapper();
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./app-wraper",
        "from": "appWrapper",
        "name": "appWrapper"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'appWrapper') && _export("appWrapper", appWrapper = require ? require('./app-wraper').appWrapper : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiV3JhcHBlciIsIlJlYWN0aXZlTW9kZWwiLCJjb25zdHJ1Y3RvciIsImluaXQiLCJwcm9taXNlcyIsIlByb21pc2UiLCJhbGwiLCJyZWFkeSIsImFwcFdyYXBwZXIiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiL2FwcC13cmFwZXIudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFQSxNQUFNQyxPQUFRLFNBQVFGLE1BQUEsQ0FBQUcsYUFBaUI7WUFFckNDLFlBQUE7Y0FDRSxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUNDLElBQUksRUFBRTtZQUNiO1lBRUFBLElBQUksR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDaEIsTUFBTUMsUUFBUSxHQUFHO2dCQUNmO2dCQUNBO2dCQUNBO2dCQUNBO2NBQUEsQ0FDRDtjQUNELE1BQU1DLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixRQUFRLENBQUM7Y0FDM0IsSUFBSSxDQUFDRyxLQUFLLEdBQUcsSUFBSTtZQUNuQixDQUFDOztVQUdJO1VBQ0wsTUFBTUMsVUFBVSxHQUFBQyxPQUFBLENBQUFELFVBQUEsR0FBRyxJQUFJUixPQUFPLEVBQUUiLCJpZ25vcmVMaXN0IjpbXX0=