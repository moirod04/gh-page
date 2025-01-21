System.register(["@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, RFSettings, WFSettings, __beyond_pkg, hmr;
  _export({
    RFSettings: void 0,
    WFSettings: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.3"], ["@beyond-js/reactive", "1.1.9"], ["mathjs", "12.4.1"], ["pragmate-ui", "0.1.2"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.42"], ["@types/react-dom", "18.2.17"], ["typedoc", "0.25.12"], ["@bgroup/wise-form", "0.0.4"], ["sgs-workflow", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@bgroup/wise-form@0.0.4/settings"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 627390969,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WFSettings = exports.RFSettings = void 0;
          /*bundle*/
          class RFSettings {
            #types = {};
            get types() {
              return this.#types;
            }
            setFields(specs) {
              this.#types = {
                ...this.#types,
                ...specs
              };
            }
          }
          exports.RFSettings = RFSettings;
          /*bundle */
          const WFSettings = exports.WFSettings = new RFSettings();
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "RFSettings",
        "name": "RFSettings"
      }, {
        "im": "./index",
        "from": "WFSettings",
        "name": "WFSettings"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'RFSettings') && _export("RFSettings", RFSettings = require ? require('./index').RFSettings : value);
        (require || prop === 'WFSettings') && _export("WFSettings", WFSettings = require ? require('./index').WFSettings : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSRlNldHRpbmdzIiwidHlwZXMiLCJzZXRGaWVsZHMiLCJzcGVjcyIsImV4cG9ydHMiLCJXRlNldHRpbmdzIl0sInNvdXJjZXMiOlsiL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFPO1VBQVUsTUFBT0EsVUFBVTtZQUNqQyxDQUFBQyxLQUFNLEdBQXdCLEVBQUU7WUFDaEMsSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQUMsU0FBU0EsQ0FBQ0MsS0FBSztjQUNkLElBQUksQ0FBQyxDQUFBRixLQUFNLEdBQUc7Z0JBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtnQkFBRSxHQUFHRTtjQUFLLENBQUU7WUFDM0M7O1VBQ0FDLE9BQUEsQ0FBQUosVUFBQSxHQUFBQSxVQUFBO1VBRU07VUFBWSxNQUFNSyxVQUFVLEdBQUFELE9BQUEsQ0FBQUMsVUFBQSxHQUFHLElBQUlMLFVBQVUsRUFBRSIsImlnbm9yZUxpc3QiOltdfQ==