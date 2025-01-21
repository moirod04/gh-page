System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.4/page", "@bg/jadmin@0.0.1/sidebar-header.code", "sgs-workflow@1.0.0/task-instances-monitor", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Controller, Page, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Page: void 0
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
          "vspecifier": "sgs-workflow@1.0.0/instances"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@bg/jadmin/sidebar-header.code', dependency_3], ['sgs-workflow/task-instances-monitor', dependency_4], ['react', dependency_5]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "instances-page",
        "vspecifier": "sgs-workflow@1.0.0/instances",
        "is": "page",
        "route": "/instances",
        "layout": "main-app-layout"
      }]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 648474974,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _view = require("./view");
          var _sidebarHeader = require("@bg/jadmin/sidebar-header.code");
          var _store = require("./store");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.Store();
              return this.#store;
            }
            get Widget() {
              return _view.Page;
            }
            /**
             * this method is executed when the widget is showd
             */
            show() {
              const breadCrumbItems = [['/instances', 'Mis instancias']];
              _sidebarHeader.mainLayoutManager.setBreadCrumb({
                title: 'Inicio',
                items: breadCrumbItems
              });
              if (!this.#store) return;
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

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 3288025811,
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
                view: 'instances'
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
        hash: 3804390848,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Page = Page;
          var React = require("react");
          var _taskInstancesMonitor = require("sgs-workflow/task-instances-monitor");
          /*bundle*/
          function Page({
            store
          }) {
            return React.createElement(_taskInstancesMonitor.TaskInstancesMonitor, {
              view: "instances",
              manager: store
            });
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./view/index",
        "from": "Page",
        "name": "Page"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Page') && _export("Page", Page = require ? require('./view/index').Page : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlldyIsIl9zaWRlYmFySGVhZGVyIiwiX3N0b3JlIiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmUiLCJXaWRnZXQiLCJQYWdlIiwic2hvdyIsImJyZWFkQ3J1bWJJdGVtcyIsIm1haW5MYXlvdXRNYW5hZ2VyIiwic2V0QnJlYWRDcnVtYiIsInRpdGxlIiwiaXRlbXMiLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJfdGFza0luc3RhbmNlc01vbml0b3IiLCJNYW5hZ2VyIiwiY29uc3RydWN0b3IiLCJpc1RhY2tzIiwidmlldyIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIlRhc2tJbnN0YW5jZXNNb25pdG9yIiwibWFuYWdlciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXcvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLGNBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLE1BQUEsR0FBQUgsT0FBQTtVQUNPO1VBQVUsTUFDWEksVUFBVyxTQUFRTCxLQUFBLENBQUFNLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssS0FBSyxFQUFFO2NBQ3pCLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1IsS0FBQSxDQUFBUyxJQUFJO1lBQ1o7WUFFQTs7O1lBR0FDLElBQUlBLENBQUE7Y0FDSCxNQUFNQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2NBQzFEVixjQUFBLENBQUFXLGlCQUFpQixDQUFDQyxhQUFhLENBQUM7Z0JBQUVDLEtBQUssRUFBRSxRQUFRO2dCQUFFQyxLQUFLLEVBQUVKO2NBQWUsQ0FBRSxDQUFDO2NBQzVFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQU4sS0FBTSxFQUFFO2NBQ2xCLElBQUksQ0FBQyxDQUFBQSxLQUFNLENBQUNXLElBQUksRUFBRTtZQUNuQjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNIO1lBQUE7O1VBRURDLE9BQUEsQ0FBQWYsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9CRCxJQUFBZ0IscUJBQUEsR0FBQXBCLE9BQUE7VUFFTSxNQUFPUSxLQUFNLFNBQVFZLHFCQUFBLENBQUFDLE9BQU87WUFDakNDLFlBQUE7Y0FDQyxLQUFLLENBQUM7Z0JBQ0xDLE9BQU8sRUFBRSxLQUFLO2dCQUNkQyxJQUFJLEVBQUU7ZUFDTixDQUFDO1lBQ0g7O1VBQ0FMLE9BQUEsQ0FBQVgsS0FBQSxHQUFBQSxLQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1RELElBQUFpQixLQUFBLEdBQUF6QixPQUFBO1VBQ0EsSUFBQW9CLHFCQUFBLEdBQUFwQixPQUFBO1VBRU87VUFBVSxTQUNSVSxJQUFJQSxDQUFDO1lBQUVKO1VBQUssQ0FBRTtZQUN0QixPQUFPbUIsS0FBQSxDQUFBQyxhQUFBLENBQUNOLHFCQUFBLENBQUFPLG9CQUFvQjtjQUFDSCxJQUFJLEVBQUMsV0FBVztjQUFDSSxPQUFPLEVBQUV0QjtZQUFLLEVBQUk7VUFDakUiLCJpZ25vcmVMaXN0IjpbXX0=