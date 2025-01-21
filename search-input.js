System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "react@18.2.0", "sgs-workflow@1.0.0/input-filter"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets016Render) {
      dependency_0 = _beyondJsWidgets016Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets104Page) {
      dependency_3 = _beyondJsReact18Widgets104Page;
    }, function (_react) {
      dependency_4 = _react;
    }, function (_sgsWorkflow100InputFilter) {
      dependency_5 = _sgsWorkflow100InputFilter;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@bg/jadmin", "0.0.1"], ["@bg/auth-api", "1.0.0"], ["@jadmin/ui", "1.0.0"], ["@bgroup/jview", "1.0.3"], ["@bgroup/helpers", "1.0.7"], ["@bgroup/wise-form", "0.0.4"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/bee", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/reactive", "1.1.14"], ["@bgroup/http-suite", "1.0.5"], ["chart.js", "4.4.1"], ["dayjs", "1.11.10"], ["dotenv", "16.4.4"], ["express", "4.18.2"], ["framer-motion", "10.18.0"], ["googleapis", "129.0.0"], ["javascript-time-ago", "2.5.10"], ["jsonwebtoken", "9.0.2"], ["mathjs", "12.4.1"], ["moment", "2.30.1"], ["perfect-scrollbar", "1.5.5"], ["pragmate-ui", "0.1.2"], ["prismjs", "1.29.0"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-google-recaptcha", "3.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["swiper", "11.0.6"], ["tippy.js", "6.3.7"], ["use-debounce", "10.0.0"], ["uuid", "9.0.1"], ["wise-form", "0.0.4"], ["@babel/core", "7.23.9"], ["@babel/preset-env", "7.23.9"], ["@babel/preset-typescript", "7.23.3"], ["@types/react", "18.2.55"], ["@types/react-dom", "18.2.19"], ["babel-jest", "29.7.0"], ["jest", "29.7.0"], ["ts-jest", "29.1.2"], ["sgs-workflow", "1.0.0"], ["sgs-workflow", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "sgs-workflow@1.0.0/search-input"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['sgs-workflow/input-filter', dependency_5]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "search-input",
        "vspecifier": "sgs-workflow@1.0.0/search-input",
        "is": "page",
        "route": "/search-input"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('sgs-workflow@1.0.0/search-input');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1927493790,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            /**
             * this method is executed when the widget is showd
             */
            show() {}
            /**
             * this method is executed when the widget is hidden
             */
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 1793251939,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          class StoreManager {}
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 887203262,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _inputFilter = require("sgs-workflow/input-filter");
          /*bundle*/
          function View() {
            const [data, setData] = React.useState(['Apple', 'Orange', 'Banana', 'Strawberry', 'Grapes', 'Watermelon', 'Pineapple']);
            const [filteredData, setFilteredData] = React.useState(data);
            const handleFilter = ({
              term,
              criteria
            }) => {
              let filteredResult = [];
              if (criteria === 'contains') {
                filteredResult = data.filter(item => item.toLowerCase().includes(term.toLowerCase()));
              } else if (criteria === 'equals') {
                filteredResult = data.filter(item => item.toLowerCase() === term.toLowerCase());
              } else if (criteria === 'starts') {
                filteredResult = data.filter(item => item.toLowerCase().startsWith(term.toLowerCase()));
              }
              setFilteredData(filteredResult);
            };
            const criterias = [{
              value: "contains",
              label: "Contains"
            }, {
              value: "equals",
              label: "Equals"
            }, {
              value: "starts",
              label: "Starts with"
            }];
            return React.createElement("main", {
              className: "content-filter"
            }, React.createElement("h2", {
              className: "title-page"
            }, "Input Filter"), React.createElement(_inputFilter.SearchInputFilter, {
              placeholder: 'Insert term...',
              onFilter: handleFilter,
              listOptions: criterias
            }), React.createElement("div", {
              className: "items"
            }, React.createElement("ul", null, filteredData.map((item, index) => React.createElement("li", {
              key: index
            }, item)))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiUmVhY3QiLCJfaW5wdXRGaWx0ZXIiLCJkYXRhIiwic2V0RGF0YSIsInVzZVN0YXRlIiwiZmlsdGVyZWREYXRhIiwic2V0RmlsdGVyZWREYXRhIiwiaGFuZGxlRmlsdGVyIiwidGVybSIsImNyaXRlcmlhIiwiZmlsdGVyZWRSZXN1bHQiLCJmaWx0ZXIiLCJpdGVtIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInN0YXJ0c1dpdGgiLCJjcml0ZXJpYXMiLCJ2YWx1ZSIsImxhYmVsIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIlNlYXJjaElucHV0RmlsdGVyIiwicGxhY2Vob2xkZXIiLCJvbkZpbHRlciIsImxpc3RPcHRpb25zIiwibWFwIiwiaW5kZXgiLCJrZXkiXSwic291cmNlcyI6WyIvd2lkZ2V0L3RzL2NvbnRyb2xsZXIudHMiLCIvd2lkZ2V0L3RzL3N0b3JlLnRzIiwiL3dpZGdldC90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFB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