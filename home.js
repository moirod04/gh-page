System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.4/page", "@bg/jadmin@0.0.1/sidebar-header.code", "sgs-workflow@1.0.0/task-instances-monitor", "react@18.2.0"], function (_export, _context) {
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
    }, function (_beyondJsReact18Widgets104Page) {
      dependency_2 = _beyondJsReact18Widgets104Page;
    }, function (_bgJadmin001SidebarHeaderCode) {
      dependency_3 = _bgJadmin001SidebarHeaderCode;
    }, function (_sgsWorkflow100TaskInstancesMonitor) {
      dependency_4 = _sgsWorkflow100TaskInstancesMonitor;
    }, function (_react) {
      dependency_5 = _react;
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
          "vspecifier": "sgs-workflow@1.0.0/home"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@bg/jadmin/sidebar-header.code', dependency_3], ['sgs-workflow/task-instances-monitor', dependency_4], ['react', dependency_5]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "home-page",
        "vspecifier": "sgs-workflow@1.0.0/home",
        "is": "page",
        "route": "/",
        "layout": "main-app-layout"
      }]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 987039815,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          var _sidebarHeader = require("@bg/jadmin/sidebar-header.code");
          var _store = require("./store");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            get Widget() {
              return _views.View;
            }
            createStore() {
              this.#store = new _store.Store();
              return this.#store;
            }
            /**
             * this method is executed when the widget is showd
             */
            show() {
              const breadCrumbItems = [['/', 'Mis tareas']];
              _sidebarHeader.mainLayoutManager.setBreadCrumb({
                title: 'Inicio',
                items: breadCrumbItems
              });
              this.#store.load();
            }
            /**
             * this method is executed when the widget is hidden
             */
            hide() {
              //mainLayoutManager.setBreadCrumb({ title: "", items: [] })
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 454867192,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Store = void 0;
          var _taskInstancesMonitor = require("sgs-workflow/task-instances-monitor");
          class Store extends _taskInstancesMonitor.Manager {
            constructor() {
              super({
                isTacks: true,
                view: 'tasks'
              });
            }
          }
          exports.Store = Store;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 4177560776,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _taskInstancesMonitor = require("sgs-workflow/task-instances-monitor");
          /*bundle*/
          function View({
            widget,
            store
          }) {
            return React.createElement(_taskInstancesMonitor.TaskInstancesMonitor, {
              isTacks: true,
              widget: widget,
              manager: store,
              view: "tasks"
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc2lkZWJhckhlYWRlciIsIl9zdG9yZSIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJXaWRnZXQiLCJWaWV3IiwiY3JlYXRlU3RvcmUiLCJTdG9yZSIsInNob3ciLCJicmVhZENydW1iSXRlbXMiLCJtYWluTGF5b3V0TWFuYWdlciIsInNldEJyZWFkQ3J1bWIiLCJ0aXRsZSIsIml0ZW1zIiwibG9hZCIsImhpZGUiLCJleHBvcnRzIiwiX3Rhc2tJbnN0YW5jZXNNb25pdG9yIiwiTWFuYWdlciIsImNvbnN0cnVjdG9yIiwiaXNUYWNrcyIsInZpZXciLCJSZWFjdCIsIndpZGdldCIsImNyZWF0ZUVsZW1lbnQiLCJUYXNrSW5zdGFuY2VzTW9uaXRvciIsIm1hbmFnZXIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsY0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsTUFBQSxHQUFBSCxPQUFBO1VBQ087VUFBVSxNQUNYSSxVQUFXLFNBQVFMLEtBQUEsQ0FBQU0seUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTixJQUFJQyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQUMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBSCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBTyxLQUFLLEVBQUU7Y0FDekIsT0FBTyxJQUFJLENBQUMsQ0FBQUosS0FBTTtZQUNuQjtZQUVBOzs7WUFHQUssSUFBSUEsQ0FBQTtjQUNILE1BQU1DLGVBQWUsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO2NBQzdDVixjQUFBLENBQUFXLGlCQUFpQixDQUFDQyxhQUFhLENBQUM7Z0JBQy9CQyxLQUFLLEVBQUUsUUFBUTtnQkFDZkMsS0FBSyxFQUFFSjtlQUNQLENBQUM7Y0FDRixJQUFJLENBQUMsQ0FBQU4sS0FBTSxDQUFDVyxJQUFJLEVBQUU7WUFDbkI7WUFFQTs7O1lBR0FDLElBQUlBLENBQUE7Y0FDSDtZQUFBOztVQUVEQyxPQUFBLENBQUFmLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQ0QsSUFBQWdCLHFCQUFBLEdBQUFwQixPQUFBO1VBRU0sTUFBT1UsS0FBTSxTQUFRVSxxQkFBQSxDQUFBQyxPQUFPO1lBQ2pDQyxZQUFBO2NBQ0MsS0FBSyxDQUFDO2dCQUNMQyxPQUFPLEVBQUUsSUFBSTtnQkFDYkMsSUFBSSxFQUFFO2VBQ04sQ0FBQztZQUNIOztVQUNBTCxPQUFBLENBQUFULEtBQUEsR0FBQUEsS0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNURCxJQUFBZSxLQUFBLEdBQUF6QixPQUFBO1VBQ0EsSUFBQW9CLHFCQUFBLEdBQUFwQixPQUFBO1VBRU87VUFBVSxTQUNQUSxJQUFJQSxDQUFDO1lBQUVrQixNQUFNO1lBQUVwQjtVQUFLLENBQUU7WUFDL0IsT0FBT21CLEtBQUEsQ0FBQUUsYUFBQSxDQUFDUCxxQkFBQSxDQUFBUSxvQkFBb0I7Y0FBQ0wsT0FBTyxFQUFFLElBQUk7Y0FBRUcsTUFBTSxFQUFFQSxNQUFNO2NBQUVHLE9BQU8sRUFBRXZCLEtBQUs7Y0FBRWtCLElBQUksRUFBQztZQUFPLEVBQUc7VUFDNUYiLCJpZ25vcmVMaXN0IjpbXX0=