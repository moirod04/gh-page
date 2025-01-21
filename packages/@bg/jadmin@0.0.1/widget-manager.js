System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/reactive@1.1.14/model", "uuid@9.0.1", "@beyond-js/react-18-widgets@1.0.4/hooks", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.2/empty"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, IWidget, widgetStore, WidgetManager, __beyond_pkg, hmr;
  _export({
    IWidget: void 0,
    widgetStore: void 0,
    WidgetManager: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_beyondJsReactive1114Model) {
      dependency_3 = _beyondJsReactive1114Model;
    }, function (_uuid2) {
      dependency_4 = _uuid2;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_5 = _beyondJsReact18Widgets104Hooks;
    }, function (_beyondJsKernel019Routing) {
      dependency_6 = _beyondJsKernel019Routing;
    }, function (_pragmateUi012Empty) {
      dependency_7 = _pragmateUi012Empty;
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
          "vspecifier": "@bg/jadmin@0.0.1/widget-manager"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['uuid', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['pragmate-ui/empty', dependency_7]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/jadmin@0.0.1/widget-manager');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2224315704,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.widgetStore = void 0;
          var _model = require("@beyond-js/reactive/model");
          class WidgetStore extends _model.ReactiveModel {
            #widgets = new Map();
            get widgets() {
              return this.#widgets;
            }
            defineWidgets = widgets => {
              const map = new Map();
              widgets.forEach(widget => {
                Object.keys(widget).forEach(key => {
                  map.set(key, widget[key]);
                });
              });
              this.#widgets = map;
            };
          }
          /*bundle*/
          const widgetStore = exports.widgetStore = new WidgetStore();
        }
      });

      /********************************
      INTERNAL MODULE: ./view/component
      ********************************/

      ims.set('./view/component', {
        hash: 60831077,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WidgetManager = WidgetManager;
          var _react = require("react");
          var _uuid = require("uuid");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _routing = require("@beyond-js/kernel/routing");
          var _empty = require("pragmate-ui/empty");
          var _index = require("../index");
          /*bundle*/
          function WidgetManager({
            data
          }) {
            const [widgets, setWidgets] = _react.default.useState(_index.widgetStore.widgets);
            (0, _hooks.useBinder)([_index.widgetStore], () => setWidgets(_index.widgetStore.widgets));
            data.sort((a, b) => a.order - b.order);
            const output = data.map(widget => {
              if (!widget.active) return null;
              const WidgetComponent = widgets.get(widget.identifier);
              if (!WidgetComponent) {
                console.warn(`${widget.identifier} isnt registered as a widget.`);
                return null;
              }
              const metadata = typeof widget.metadata === 'object' ? widget.metadata : widget.metadata ? JSON.parse(widget.metadata) : {};
              return _react.default.createElement(WidgetComponent, {
                key: (0, _uuid.v4)(),
                metadata: metadata
              });
            });
            if (!widgets.size) return _routing.routing.pushState('/404');
            const control = data.length ? _react.default.createElement(_react.default.Fragment, null, output) : _react.default.createElement(_empty.Empty, {
              text: "No hay Informacion para mostrar",
              icon: "info"
            });
            return _react.default.createElement("div", {
              className: "container-dashboard"
            }, control);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "IWidget",
        "name": "IWidget"
      }, {
        "im": "./index",
        "from": "widgetStore",
        "name": "widgetStore"
      }, {
        "im": "./view/component",
        "from": "WidgetManager",
        "name": "WidgetManager"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'IWidget') && _export("IWidget", IWidget = require ? require('./index').IWidget : value);
        (require || prop === 'widgetStore') && _export("widgetStore", widgetStore = require ? require('./index').widgetStore : value);
        (require || prop === 'WidgetManager') && _export("WidgetManager", WidgetManager = require ? require('./view/component').WidgetManager : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiV2lkZ2V0U3RvcmUiLCJSZWFjdGl2ZU1vZGVsIiwid2lkZ2V0cyIsIk1hcCIsImRlZmluZVdpZGdldHMiLCJtYXAiLCJmb3JFYWNoIiwid2lkZ2V0IiwiT2JqZWN0Iiwia2V5cyIsImtleSIsInNldCIsIndpZGdldFN0b3JlIiwiZXhwb3J0cyIsIl9yZWFjdCIsIl91dWlkIiwiX2hvb2tzIiwiX3JvdXRpbmciLCJfZW1wdHkiLCJfaW5kZXgiLCJXaWRnZXRNYW5hZ2VyIiwiZGF0YSIsInNldFdpZGdldHMiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsIm91dHB1dCIsImFjdGl2ZSIsIldpZGdldENvbXBvbmVudCIsImdldCIsImlkZW50aWZpZXIiLCJjb25zb2xlIiwid2FybiIsIm1ldGFkYXRhIiwiSlNPTiIsInBhcnNlIiwiY3JlYXRlRWxlbWVudCIsInY0Iiwic2l6ZSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJjb250cm9sIiwibGVuZ3RoIiwiRnJhZ21lbnQiLCJFbXB0eSIsInRleHQiLCJpY29uIiwiY2xhc3NOYW1lIl0sInNvdXJjZXMiOlsiL3RzL2luZGV4LnRzIiwiL3RzL3ZpZXcvY29tcG9uZW50LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFTQSxNQUFNQyxXQUFZLFNBQVFGLE1BQUEsQ0FBQUcsYUFBMEI7WUFDbkQsQ0FBQUMsT0FBUSxHQUE0RCxJQUFJQyxHQUFHLEVBQUU7WUFDN0UsSUFBSUQsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFBLE9BQVE7WUFDckI7WUFFQUUsYUFBYSxHQUFJRixPQUF3RSxJQUFJO2NBQzVGLE1BQU1HLEdBQUcs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