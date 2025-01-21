System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.1.2/spinner", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, LoadingPage, __beyond_pkg, hmr;
  _export("LoadingPage", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_pragmateUi012Spinner) {
      dependency_2 = _pragmateUi012Spinner;
    }, function (_beyondJsKernel019Styles) {
      dependency_3 = _beyondJsKernel019Styles;
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
          "vspecifier": "@bgroup/jview@1.0.3/loading-page"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/spinner', dependency_2], ['@beyond-js/kernel/styles', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bgroup/jview@1.0.3/loading-page');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./loading
      *************************/
      ims.set('./loading', {
        hash: 1495971330,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LoadingPage = LoadingPage;
          var React = require("react");
          var _spinner = require("pragmate-ui/spinner");
          /*bundle*/
          function LoadingPage({
            loading,
            content
          }) {
            let cls = loading ? 'loading-page loading-proses' : 'loading-page main-loading';
            cls += content ? " loading-content" : "";
            return React.createElement("div", {
              className: cls
            }, React.createElement(_spinner.Spinner, {
              type: "primary",
              active: true,
              className: "loading-spinner"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfc3Bpbm5lciIsIkxvYWRpbmdQYWdlIiwibG9hZGluZyIsImNvbnRlbnQiLCJjbHMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiU3Bpbm5lciIsInR5cGUiLCJhY3RpdmUiXSwic291cmNlcyI6WyIvY29kZS90cy9sb2FkaW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBS087VUFBVSxTQUNKRSxXQUFXQSxDQUFDO1lBQUVDLE9BQU87WUFBRUM7VUFBTyxDQUFjO1lBQ2pELElBQUlDLEdBQUcsR0FBWUYsT0FBTyxHQUFHLDZCQUE2QixHQUFHLDJCQUEyQjtZQUN4RkUsR0FBRyxJQUFHRCxPQUFPLEdBQUcsa0JBQWtCLEdBQUcsRUFBRTtZQUMzQyxPQUNJTCxLQUFBLENBQUFPLGFBQUE7Y0FBS0MsU0FBUyxFQUFFRjtZQUFHLEdBQUVOLEtBQUEsQ0FBQU8sYUFBQSxDQUFDTCxRQUFBLENBQUFPLE9BQU87Y0FBQ0MsSUFBSSxFQUFDLFNBQVM7Y0FBQ0MsTUFBTTtjQUFDSCxTQUFTLEVBQUM7WUFBaUIsRUFBRyxDQUFNO1VBRWhHO1VBQUMiLCJpZ25vcmVMaXN0IjpbXX0=