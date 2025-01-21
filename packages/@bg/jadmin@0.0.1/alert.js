System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.1.2/modal", "pragmate-ui@0.1.2/components"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Alert, __beyond_pkg, hmr;
  _export("Alert", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_pragmateUi012Modal) {
      dependency_2 = _pragmateUi012Modal;
    }, function (_pragmateUi012Components) {
      dependency_3 = _pragmateUi012Components;
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
          "vspecifier": "@bg/jadmin@0.0.1/alert"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/modal', dependency_2], ['pragmate-ui/components', dependency_3]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 101845829,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Alert = Alert;
          var React = require("react");
          var _modal = require("pragmate-ui/modal");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function Alert({
            text,
            title,
            onClose,
            confirm,
            show
          }) {
            if (!show) return null;
            return React.createElement(_modal.Modal, {
              className: "modal-jadmin",
              show: true,
              onClose: onClose
            }, React.createElement("div", {
              className: "conf-modal success"
            }, React.createElement("div", {
              className: "title-text"
            }, React.createElement("h1", null, title)), React.createElement("p", null, text), React.createElement("div", {
              className: "modal-footer"
            }, React.createElement(_components.Button, {
              onClick: onClose,
              variant: 'primary',
              className: "btn btn-primary"
            }, confirm))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Alert",
        "name": "Alert"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Alert') && _export("Alert", Alert = require ? require('./index').Alert : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfbW9kYWwiLCJfY29tcG9uZW50cyIsIkFsZXJ0IiwidGV4dCIsInRpdGxlIiwib25DbG9zZSIsImNvbmZpcm0iLCJzaG93IiwiY3JlYXRlRWxlbWVudCIsIk1vZGFsIiwiY2xhc3NOYW1lIiwiQnV0dG9uIiwib25DbGljayIsInZhcmlhbnQiXSwic291cmNlcyI6WyIvY29kZS90cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBQ087VUFBVSxTQUFVRyxLQUFLQSxDQUFDO1lBQUVDLElBQUk7WUFBRUMsS0FBSztZQUFFQyxPQUFPO1lBQUVDLE9BQU87WUFBRUM7VUFBSSxDQUFFO1lBQ3ZFLElBQUksQ0FBQ0EsSUFBSSxFQUFFLE9BQU8sSUFBSTtZQUN0QixPQUNDVCxLQUFBLENBQUFVLGFBQUEsQ0FBQ1IsTUFBQSxDQUFBUyxLQUFLO2NBQUNDLFNBQVMsRUFBQyxjQUFjO2NBQUNILElBQUk7Y0FBQ0YsT0FBTyxFQUFFQTtZQUFPLEdBQ3BEUCxLQUFBLENBQUFVLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQW9CLEdBQ2xDWixLQUFBLENBQUFVLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQVksR0FDMUJaLEtBQUEsQ0FBQVUsYUFBQSxhQUFLSixLQUFLLENBQU0sQ0FDWCxFQUNOTixLQUFBLENBQUFVLGFBQUEsWUFBSUwsSUFBSSxDQUFLLEVBQ2JMLEtBQUEsQ0FBQVUsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBYyxHQUM1QlosS0FBQSxDQUFBVSxhQUFBLENBQUNQLFdBQUEsQ0FBQVUsTUFBTTtjQUFDQyxPQUFPLEVBQUVQLE9BQU87Y0FBRVEsT0FBTyxFQUFDLFNBQVM7Y0FBQ0gsU0FBUyxFQUFDO1lBQWlCLEdBQ3JFSixPQUFPLENBQ0EsQ0FDSixDQUNELENBQ0M7VUFFViIsImlnbm9yZUxpc3QiOltdfQ==