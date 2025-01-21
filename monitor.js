System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.4/page", "@bg/jadmin@0.0.1/sidebar-header.code", "sgs-workflow@1.0.0/task-instances-monitor", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
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
    }, function (_react2) {
      dependency_5 = _react2;
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
          "vspecifier": "sgs-workflow@1.0.0/monitor"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@bg/jadmin/sidebar-header.code', dependency_3], ['sgs-workflow/task-instances-monitor', dependency_4], ['react', dependency_5]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "monitor-page",
        "vspecifier": "sgs-workflow@1.0.0/monitor",
        "is": "page",
        "route": "/monitor",
        "layout": "main-app-layout"
      }]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 555562947,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _view = require("./view");
          var _sidebarHeader = require("@bg/jadmin/sidebar-header.code");
          var _manager = require("./manager");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _manager.Store();
              return this.#store;
            }
            get Widget() {
              return _view.Page;
            }
            /**
             * this method is executed when the widget is showd
             */
            show() {
              if (!this.#store) return;
              const breadCrumbItems = [['/monitor', 'Monitor']];
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
              //	mainLayoutManager.setBreadCrumb({ title: "", items: [] })
            }
          }
          exports.Controller = Controller;
        }
      });

      /*******************************
      INTERNAL MODULE: ./manager/index
      *******************************/

      ims.set('./manager/index', {
        hash: 1363215484,
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
                isTacks: false,
                view: 'monitor'
              });
            }
          }
          exports.Store = Store;
        }
      });

      /****************************
      INTERNAL MODULE: ./view/index
      ****************************/

      ims.set('./view/index', {
        hash: 2581721347,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Page = Page;
          var _react = require("react");
          var _taskInstancesMonitor = require("sgs-workflow/task-instances-monitor");
          function Page({
            store
          }) {
            return _react.default.createElement(_taskInstancesMonitor.TaskInstancesMonitor, {
              manager: store,
              view: "monitor"
            });
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlldyIsIl9zaWRlYmFySGVhZGVyIiwiX21hbmFnZXIiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZSIsIldpZGdldCIsIlBhZ2UiLCJzaG93IiwiYnJlYWRDcnVtYkl0ZW1zIiwibWFpbkxheW91dE1hbmFnZXIiLCJzZXRCcmVhZENydW1iIiwidGl0bGUiLCJpdGVtcyIsImxvYWQiLCJoaWRlIiwiZXhwb3J0cyIsIl90YXNrSW5zdGFuY2VzTW9uaXRvciIsIk1hbmFnZXIiLCJjb25zdHJ1Y3RvciIsImlzVGFja3MiLCJ2aWV3IiwiX3JlYWN0IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJUYXNrSW5zdGFuY2VzTW9uaXRvciIsIm1hbmFnZXIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9tYW5hZ2VyL2luZGV4LnRzIiwiL3RzL3ZpZXcvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLGNBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFFBQUEsR0FBQUgsT0FBQTtVQUNPO1VBQVUsTUFDWEksVUFBVyxTQUFRTCxLQUFBLENBQUFNLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILFFBQUEsQ0FBQUssS0FBSyxFQUFFO2NBQ3pCLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1IsS0FBQSxDQUFBUyxJQUFJO1lBQ1o7WUFFQTs7O1lBR0FDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFMLEtBQU0sRUFBRTtjQUNsQixNQUFNTSxlQUFlLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztjQUNqRFYsY0FBQSxDQUFBVyxpQkFBaUIsQ0FBQ0MsYUFBYSxDQUFDO2dCQUFFQyxLQUFLLEVBQUUsUUFBUTtnQkFBRUMsS0FBSyxFQUFFSjtjQUFlLENBQUUsQ0FBQztjQUM1RSxJQUFJLENBQUMsQ0FBQU4sS0FBTSxDQUFDVyxJQUFJLEVBQUU7WUFDbkI7WUFFQTs7O1lBR0FDLElBQUlBLENBQUE7Y0FDSDtZQUFBOztVQUVEQyxPQUFBLENBQUFmLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQkQsSUFBQWdCLHFCQUFBLEdBQUFwQixPQUFBO1VBRU0sTUFBT1EsS0FBTSxTQUFRWSxxQkFBQSxDQUFBQyxPQUFPO1lBQ2pDQyxZQUFBO2NBQ0MsS0FBSyxDQUFDO2dCQUNMQyxPQUFPLEVBQUUsS0FBSztnQkFDZEMsSUFBSSxFQUFFO2VBQ04sQ0FBQztZQUNIOztVQUNBTCxPQUFBLENBQUFYLEtBQUEsR0FBQUEsS0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNURCxJQUFBaUIsTUFBQSxHQUFBekIsT0FBQTtVQUNBLElBQUFvQixxQkFBQSxHQUFBcEIsT0FBQTtVQUNNLFNBQVVVLElBQUlBLENBQUM7WUFBRUo7VUFBSyxDQUFFO1lBQzdCLE9BQU9tQixNQUFBLENBQUFDLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUCxxQkFBQSxDQUFBUSxvQkFBb0I7Y0FBQ0MsT0FBTyxFQUFFdkIsS0FBSztjQUFFa0IsSUFBSSxFQUFDO1lBQVMsRUFBRztVQUMvRCIsImlnbm9yZUxpc3QiOltdfQ==