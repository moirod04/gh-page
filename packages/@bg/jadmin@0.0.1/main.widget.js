System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/base", "react@18.2.0", "@bg/jadmin@0.0.1/sidebar-header.code", "@bg/auth-api@1.0.0/wrapper.ts", "@jadmin/ui@1.0.0/hooks", "@bg/jadmin@0.0.1/loading-page", "@bg/jadmin@0.0.1/offline-indicator", "@bg/jadmin@0.0.1/wrapper"], function (_export, _context) {
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
    }, function (_bgJadmin001SidebarHeaderCode) {
      dependency_5 = _bgJadmin001SidebarHeaderCode;
    }, function (_bgAuthApi100WrapperTs) {
      dependency_6 = _bgAuthApi100WrapperTs;
    }, function (_jadminUi100Hooks) {
      dependency_7 = _jadminUi100Hooks;
    }, function (_bgJadmin001LoadingPage) {
      dependency_8 = _bgJadmin001LoadingPage;
    }, function (_bgJadmin001OfflineIndicator) {
      dependency_9 = _bgJadmin001OfflineIndicator;
    }, function (_bgJadmin001Wrapper) {
      dependency_10 = _bgJadmin001Wrapper;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@bg/auth-api", "1.0.0"], ["@jadmin/ui", "1.0.0"], ["@bg/auth-models", null], ["@bgroup/jview", "1.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/widgets", "0.1.6"], ["@bgroup/data-model", "1.0.11"], ["@bgroup/ui", "0.0.38"], ["chart.js", "4.4.4"], ["dayjs", "1.11.13"], ["dotenv", "16.4.5"], ["framer-motion", "6.5.1"], ["googleapis", "120.0.0"], ["mysql2", "3.11.0"], ["perfect-scrollbar", "1.5.5"], ["pragmate-ui", "0.1.2"], ["prism-react-renderer", "2.4.0"], ["prismjs", "1.29.0"], ["react-is", "18.3.1"], ["react-select", "5.8.0"], ["sequelize", "6.37.3"], ["socket.io-client", "4.7.5"], ["swiper", "11.1.12"], ["tippy.js", "6.3.7"], ["uuid", "9.0.1"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["@bg/jadmin", "0.0.1"], ["sgs-workflow", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@bg/jadmin@0.0.1/main",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['react', dependency_4], ['@bg/jadmin/sidebar-header.code', dependency_5], ['@bg/auth-api/wrapper.ts', dependency_6], ['@jadmin/ui/hooks', dependency_7], ['@bg/jadmin/loading-page', dependency_8], ['@bg/jadmin/offline-indicator', dependency_9], ['@bg/jadmin/wrapper', dependency_10]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "main-layout",
        "vspecifier": "@bg/jadmin@0.0.1/main.widget",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/jadmin@0.0.1/main.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2041546563,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _layout = require("./view/layout");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            get Widget() {
              return _layout.Layout;
            }
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./view/layout
      *****************************/

      ims.set('./view/layout', {
        hash: 3379117493,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Layout = Layout;
          var React = require("react");
          var _sidebarHeader = require("@bg/jadmin/sidebar-header.code");
          var _wrapper = require("@bg/auth-api/wrapper.ts");
          var _hooks = require("@jadmin/ui/hooks");
          var _loadingPage = require("@bg/jadmin/loading-page");
          var _offlineIndicator = require("@bg/jadmin/offline-indicator");
          var _wrapper2 = require("@bg/jadmin/wrapper");
          function Layout() {
            const [fetching, setFetching] = React.useState(_wrapper.session.fetching);
            (0, _hooks.useBinder)([_wrapper.session, _wrapper2.appWrapper], () => setFetching({}), ['user.loading', 'change']);
            if (_wrapper.session.fetching || !_wrapper2.appWrapper.ready) return React.createElement(_loadingPage.LoadingPage, null);
            return React.createElement(React.Fragment, null, React.createElement(_sidebarHeader.SidebarHeader, null, React.createElement("beyond-layout-children", null)), React.createElement(_offlineIndicator.OfflineIndicator, null));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfbGF5b3V0IiwiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIkxheW91dCIsImV4cG9ydHMiLCJSZWFjdCIsIl9zaWRlYmFySGVhZGVyIiwiX3dyYXBwZXIiLCJfaG9va3MiLCJfbG9hZGluZ1BhZ2UiLCJfb2ZmbGluZUluZGljYXRvciIsIl93cmFwcGVyMiIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsInNlc3Npb24iLCJ1c2VCaW5kZXIiLCJhcHBXcmFwcGVyIiwicmVhZHkiLCJjcmVhdGVFbGVtZW50IiwiTG9hZGluZ1BhZ2UiLCJGcmFnbWVudCIsIlNpZGViYXJIZWFkZXIiLCJPZmZsaW5lSW5kaWNhdG9yIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvdmlldy9sYXlvdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsT0FBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxNQUNYRSxVQUFXLFNBQVFILEtBQUEsQ0FBQUkscUJBQXFCO1lBQzdDLElBQUlDLE1BQU1BLENBQUE7Y0FDVCxPQUFPSCxPQUFBLENBQUFJLE1BQU07WUFDZDs7VUFDQUMsT0FBQSxDQUFBSixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUkQsSUFBQUssS0FBQSxHQUFBUCxPQUFBO1VBQ0EsSUFBQVEsY0FBQSxHQUFBUixPQUFBO1VBQ0EsSUFBQVMsUUFBQSxHQUFBVCxPQUFBO1VBQ0EsSUFBQVUsTUFBQSxHQUFBVixPQUFBO1VBQ0EsSUFBQVcsWUFBQSxHQUFBWCxPQUFBO1VBQ0EsSUFBQVksaUJBQUEsR0FBQVosT0FBQTtVQUNBLElBQUFhLFNBQUEsR0FBQWIsT0FBQTtVQVNNLFNBQVVLLE1BQU1BLENBQUE7WUFDckIsTUFBTSxDQUFDUyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHUixLQUFLLENBQUNTLFFBQVEsQ0FBQ1AsUUFBQSxDQUFBUSxPQUFPLENBQUNILFFBQVEsQ0FBQztZQUVoRSxJQUFBSixNQUFBLENBQUFRLFNBQVMsRUFBQyxDQUFDVCxRQUFBLENBQUFRLE9BQU8sRUFBRUosU0FBQSxDQUFBTSxVQUFVLENBQUMsRUFBRSxNQUFZSixXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFFekYsSUFBSU4sUUFBQSxDQUFBUSxPQUFPLENBQUNILFFBQVEsSUFBSSxDQUFDRCxTQUFBLENBQUFNLFVBQVUsQ0FBQ0MsS0FBSyxFQUFFLE9BQU9iLEtBQUEsQ0FBQWMsYUFBQSxDQUFDVixZQUFBLENBQUFXLFdBQVcsT0FBRztZQUNqRSxPQUNDZixLQUFBLENBQUFjLGFBQUEsQ0FBQWQsS0FBQSxDQUFBZ0IsUUFBQSxRQUNDaEIsS0FBQSxDQUFBYyxhQUFBLENBQUNiLGNBQUEsQ0FBQWdCLGFBQWEsUUFDYmpCLEtBQUEsQ0FBQWMsYUFBQSxnQ0FBMEIsQ0FDWCxFQUNoQmQsS0FBQSxDQUFBYyxhQUFBLENBQUNULGlCQUFBLENBQUFhLGdCQUFnQixPQUFHLENBQ2xCO1VBR0wiLCJpZ25vcmVMaXN0IjpbXX0=