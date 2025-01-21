System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/base", "react@18.2.0", "@beyond-js/react-18-widgets@1.0.4/hooks", "@bg/jadmin@0.0.1/sidebar-header.code", "@bg/jadmin@0.0.1/offline-indicator", "sgs-workflow@1.0.0/wrappers", "sgs-workflow@1.0.0/config", "@bgroup/jview@1.0.3/loading-page"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets016Render) {
      dependency_0 = _beyondJsWidgets016Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets104Base) {
      dependency_3 = _beyondJsReact18Widgets104Base;
    }, function (_react) {
      dependency_4 = _react;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_5 = _beyondJsReact18Widgets104Hooks;
    }, function (_bgJadmin001SidebarHeaderCode) {
      dependency_6 = _bgJadmin001SidebarHeaderCode;
    }, function (_bgJadmin001OfflineIndicator) {
      dependency_7 = _bgJadmin001OfflineIndicator;
    }, function (_sgsWorkflow100Wrappers) {
      dependency_8 = _sgsWorkflow100Wrappers;
    }, function (_sgsWorkflow100Config) {
      dependency_9 = _sgsWorkflow100Config;
    }, function (_bgroupJview103LoadingPage) {
      dependency_10 = _bgroupJview103LoadingPage;
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
          "vspecifier": "sgs-workflow@1.0.0/layout-main"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['react', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['@bg/jadmin/sidebar-header.code', dependency_6], ['@bg/jadmin/offline-indicator', dependency_7], ['sgs-workflow/wrappers', dependency_8], ['sgs-workflow/config', dependency_9], ['@bgroup/jview/loading-page', dependency_10]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "main-app-layout",
        "vspecifier": "sgs-workflow@1.0.0/layout-main",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('sgs-workflow@1.0.0/layout-main');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1351914890,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            get Widget() {
              return _views.Layout;
            }
            show() {
              localStorage.removeItem('added_files');
              localStorage.removeItem('removed_files');
            }
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3233682003,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Layout = Layout;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _sidebarHeader = require("@bg/jadmin/sidebar-header.code");
          var _offlineIndicator = require("@bg/jadmin/offline-indicator");
          var _wrappers = require("sgs-workflow/wrappers");
          var _config = require("sgs-workflow/config");
          var _loadingPage = require("@bgroup/jview/loading-page");
          function Layout() {
            const [upd, setUpdate] = React.useState({});
            (0, _hooks.useBinder)([_wrappers.session], () => {
              _wrappers.session.init();
              setUpdate({});
            }, 'login');
            (0, _hooks.useBinder)([_wrappers.appWrapper], () => {
              setUpdate({});
            });
            if (!_wrappers.appWrapper.ready) return React.createElement(_loadingPage.LoadingPage, null);
            return React.createElement(React.Fragment, null, React.createElement(_sidebarHeader.SidebarHeader, {
              version: _config.default.params.application?.version,
              sessionWrapper: _wrappers.session
            }, React.createElement("beyond-layout-children", null)), React.createElement(_offlineIndicator.OfflineIndicator, null));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiTGF5b3V0Iiwic2hvdyIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJleHBvcnRzIiwiUmVhY3QiLCJfaG9va3MiLCJfc2lkZWJhckhlYWRlciIsIl9vZmZsaW5lSW5kaWNhdG9yIiwiX3dyYXBwZXJzIiwiX2NvbmZpZyIsIl9sb2FkaW5nUGFnZSIsInVwZCIsInNldFVwZGF0ZSIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwic2Vzc2lvbiIsImluaXQiLCJhcHBXcmFwcGVyIiwicmVhZHkiLCJjcmVhdGVFbGVtZW50IiwiTG9hZGluZ1BhZ2UiLCJGcmFnbWVudCIsIlNpZGViYXJIZWFkZXIiLCJ2ZXJzaW9uIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwcGxpY2F0aW9uIiwic2Vzc2lvbldyYXBwZXIiLCJPZmZsaW5lSW5kaWNhdG9yIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLE1BQ1hFLFVBQVcsU0FBUUgsS0FBQSxDQUFBSSxxQkFBcUI7WUFDN0MsSUFBSUMsTUFBTUEsQ0FBQTtjQUNULE9BQU9ILE1BQUEsQ0FBQUksTUFBTTtZQUNkO1lBRUFDLElBQUlBLENBQUE7Y0FDSEMsWUFBWSxDQUFDQyxVQUFVLENBQUMsYUFBYSxDQUFDO2NBQ3RDRCxZQUFZLENBQUNDLFVBQVUsQ0FBQyxlQUFlLENBQUM7WUFDekM7O1VBQ0FDLE9BQUEsQ0FBQVAsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2JELElBQUFRLEtBQUEsR0FBQVYsT0FBQTtVQUNBLElBQUFXLE1BQUEsR0FBQVgsT0FBQTtVQUNBLElBQUFZLGNBQUEsR0FBQVosT0FBQTtVQUNBLElBQUFhLGlCQUFBLEdBQUFiLE9BQUE7VUFDQSxJQUFBYyxTQUFBLEdBQUFkLE9BQUE7VUFDQSxJQUFBZSxPQUFBLEdBQUFmLE9BQUE7VUFFQSxJQUFBZ0IsWUFBQSxHQUFBaEIsT0FBQTtVQVVNLFNBQVVLLE1BQU1BLENBQUE7WUFDckIsTUFBTSxDQUFDWSxHQUFHLEVBQUVDLFNBQVMsQ0FBQyxHQUFHUixLQUFLLENBQUNTLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDM0MsSUFBQVIsTUFBQSxDQUFBUyxTQUFTLEVBQ1IsQ0FBQ04sU0FBQSxDQUFBTyxPQUFPLENBQUMsRUFDVCxNQUFLO2NBQ0pQLFNBQUEsQ0FBQU8sT0FBTyxDQUFDQyxJQUFJLEVBQUU7Y0FDZEosU0FBUyxDQUFDLEVBQUUsQ0FBQztZQUNkLENBQUMsRUFDRCxPQUFPLENBQ1A7WUFDRCxJQUFBUCxNQUFBLENBQUFTLFNBQVMsRUFBQyxDQUFDTixTQUFBLENBQUFTLFVBQVUsQ0FBQyxFQUFFLE1BQUs7Y0FDNUJMLFNBQVMsQ0FBQyxFQUFFLENBQUM7WUFDZCxDQUFDLENBQUM7WUFFRixJQUFJLENBQUNKLFNBQUEsQ0FBQVMsVUFBVSxDQUFDQyxLQUFLLEVBQUUsT0FBT2QsS0FBQSxDQUFBZSxhQUFBLENBQUNULFlBQUEsQ0FBQVUsV0FBVyxPQUFHO1lBQzdDLE9BQ0NoQixLQUFBLENBQUFlLGFBQUEsQ0FBQWYsS0FBQSxDQUFBaUIsUUFBQSxRQUNDakIsS0FBQSxDQUFBZSxhQUFBLENBQUNiLGNBQUEsQ0FBQWdCLGFBQWE7Y0FBQ0MsT0FBTyxFQUFFZCxPQUFBLENBQUFlLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxXQUFXLEVBQUVILE9BQU87Y0FBRUksY0FBYyxFQUFFbkIsU0FBQSxDQUFBTztZQUFPLEdBQ2xGWCxLQUFBLENBQUFlLGFBQUEsZ0NBQTBCLENBQ1gsRUFDaEJmLEtBQUEsQ0FBQWUsYUFBQSxDQUFDWixpQkFBQSxDQUFBcUIsZ0JBQWdCLE9BQUcsQ0FDbEI7VUFFTCIsImlnbm9yZUxpc3QiOltdfQ==