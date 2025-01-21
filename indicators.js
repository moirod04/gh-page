System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@bg/jadmin@0.0.1/sidebar-header.code", "@beyond-js/reactive@1.1.14/model", "sgs-workflow@1.0.0/entities", "react@18.2.0", "sgs-workflow@1.0.0/task-instances-monitor"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets016Render) {
      dependency_0 = _beyondJsWidgets016Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets104Page) {
      dependency_3 = _beyondJsReact18Widgets104Page;
    }, function (_bgJadmin001SidebarHeaderCode) {
      dependency_4 = _bgJadmin001SidebarHeaderCode;
    }, function (_beyondJsReactive1114Model) {
      dependency_5 = _beyondJsReactive1114Model;
    }, function (_sgsWorkflow100Entities) {
      dependency_6 = _sgsWorkflow100Entities;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_sgsWorkflow100TaskInstancesMonitor) {
      dependency_8 = _sgsWorkflow100TaskInstancesMonitor;
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
          "vspecifier": "sgs-workflow@1.0.0/indicators"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@bg/jadmin/sidebar-header.code', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['sgs-workflow/entities', dependency_6], ['react', dependency_7], ['sgs-workflow/task-instances-monitor', dependency_8]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "indicators-page",
        "vspecifier": "sgs-workflow@1.0.0/indicators",
        "is": "page",
        "route": "/indicators",
        "layout": "main-app-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('sgs-workflow@1.0.0/indicators');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 959457737,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _view = require("./view");
          var _manager = require("./manager");
          var _sidebarHeader = require("@bg/jadmin/sidebar-header.code");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _manager.Manager();
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
              const breadCrumbItems = [['/indicators', 'Indicadores']];
              _sidebarHeader.mainLayoutManager.setBreadCrumb({
                title: 'Inicio',
                items: breadCrumbItems
              });
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
        hash: 3150824355,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Manager = void 0;
          var _model = require("@beyond-js/reactive/model");
          class Manager extends _model.ReactiveModel {}
          exports.Manager = Manager;
        }
      });

      /****************************
      INTERNAL MODULE: ./view/index
      ****************************/

      ims.set('./view/index', {
        hash: 2118423458,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Page = Page;
          var _react = require("react");
          var _taskInstancesMonitor = require("sgs-workflow/task-instances-monitor");
          function Page() {
            return _react.default.createElement("div", {
              className: 'page__container '
            }, _react.default.createElement("div", {
              className: 'card-page page-backup'
            }, _react.default.createElement("div", {
              className: 'drop-header'
            }, _react.default.createElement(_taskInstancesMonitor.Dropdown, null))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlldyIsIl9tYW5hZ2VyIiwiX3NpZGViYXJIZWFkZXIiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJNYW5hZ2VyIiwiV2lkZ2V0IiwiUGFnZSIsInNob3ciLCJicmVhZENydW1iSXRlbXMiLCJtYWluTGF5b3V0TWFuYWdlciIsInNldEJyZWFkQ3J1bWIiLCJ0aXRsZSIsIml0ZW1zIiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJSZWFjdGl2ZU1vZGVsIiwiX3JlYWN0IiwiX3Rhc2tJbnN0YW5jZXNNb25pdG9yIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJEcm9wZG93biJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL21hbmFnZXIvaW5kZXgudHMiLCIvdHMvdmlldy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFFBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLGNBQUEsR0FBQUgsT0FBQTtVQUNPO1VBQVUsTUFDWEksVUFBVyxTQUFRTCxLQUFBLENBQUFNLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLFFBQUEsQ0FBQU0sT0FBTyxFQUFFO2NBQzNCLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1IsS0FBQSxDQUFBUyxJQUFJO1lBQ1o7WUFFQTs7O1lBR0FDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFMLEtBQU0sRUFBRTtjQUNsQixNQUFNTSxlQUFlLEdBQUcsQ0FBQyxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztjQUN4RFQsY0FBQSxDQUFBVSxpQkFBaUIsQ0FBQ0MsYUFBYSxDQUFDO2dCQUFFQyxLQUFLLEVBQUUsUUFBUTtnQkFBRUMsS0FBSyxFQUFFSjtjQUFlLENBQUUsQ0FBQztZQUM3RTtZQUVBOzs7WUFHQUssSUFBSUEsQ0FBQTtjQUNIO1lBQUE7O1VBRURDLE9BQUEsQ0FBQWQsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlCRCxJQUFBZSxNQUFBLEdBQUFuQixPQUFBO1VBR00sTUFBT1EsT0FBUSxTQUFRVyxNQUFBLENBQUFDLGFBQXNCO1VBR2xERixPQUFBLENBQUFWLE9BQUEsR0FBQUEsT0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNORCxJQUFBYSxNQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQXNCLHFCQUFBLEdBQUF0QixPQUFBO1VBQ00sU0FBVVUsSUFBSUEsQ0FBQTtZQUVoQixPQUNJVyxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBa0IsR0FDN0JKLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUF1QixHQUNsQ0osTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWEsR0FDeEJKLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUNGLHFCQUFBLENBQUFJLFFBQVEsT0FBRyxDQUNWLENBQ0osQ0FDSjtVQUVkIiwiaWdub3JlTGlzdCI6W119