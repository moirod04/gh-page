System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.4/base", "react@18.2.0", "pragmate-ui@0.1.2/image", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.2/components", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets016Render) {
      dependency_0 = _beyondJsWidgets016Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets104Base) {
      dependency_2 = _beyondJsReact18Widgets104Base;
    }, function (_react) {
      dependency_3 = _react;
    }, function (_pragmateUi012Image) {
      dependency_4 = _pragmateUi012Image;
    }, function (_beyondJsKernel019Routing) {
      dependency_5 = _beyondJsKernel019Routing;
    }, function (_pragmateUi012Components) {
      dependency_6 = _pragmateUi012Components;
    }, function (_beyondJsKernel019Styles) {
      dependency_7 = _beyondJsKernel019Styles;
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
          "vspecifier": "@bg/jadmin@0.0.1/error-404",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/base', dependency_2], ['react', dependency_3], ['pragmate-ui/image', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['pragmate-ui/components', dependency_6], ['@beyond-js/kernel/styles', dependency_7]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "error-404",
        "vspecifier": "@bg/jadmin@0.0.1/error-404.widget",
        "is": "page",
        "route": "/404"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/jadmin@0.0.1/error-404.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1972898062,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _view = require("./views/view");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            get Widget() {
              return _view.View;
            }
          }
          exports.Controller = Controller;
        }
      });

      /****************************
      INTERNAL MODULE: ./views/view
      ****************************/

      ims.set('./views/view', {
        hash: 836464265,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _image = require("pragmate-ui/image");
          var _routing = require("@beyond-js/kernel/routing");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function View() {
            const navigate = () => _routing.routing.pushState("/");
            return React.createElement("div", {
              className: "container-404"
            }, React.createElement("div", {
              className: "content-404"
            }, React.createElement("h4", null, "P\u00E1gina no encontrada"), React.createElement("span", null, "404"), React.createElement(_image.Image, {
              src: `${globalThis.baseDir}assets/404.svg`,
              alt: "404 error"
            }), React.createElement(_components.Button, {
              className: "btn btn-primary",
              onClick: navigate
            }, "Regresar al home")));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/view",
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
        (require || prop === 'View') && _export("View", View = require ? require('./views/view').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlldyIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIlJlYWN0IiwiX2ltYWdlIiwiX3JvdXRpbmciLCJfY29tcG9uZW50cyIsIm5hdmlnYXRlIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJJbWFnZSIsInNyYyIsImdsb2JhbFRoaXMiLCJiYXNlRGlyIiwiYWx0IiwiQnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VzIjpbIi93aWRnZXQvdHMvY29udHJvbGxlci50cyIsIi93aWRnZXQvdHMvdmlld3Mvdmlldy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxNQUNWRSxVQUFXLFNBQVFILEtBQUEsQ0FBQUkscUJBQXFCO1lBQzlDLElBQUlDLE1BQU1BLENBQUE7Y0FDVCxPQUFPSCxLQUFBLENBQUFJLElBQUk7WUFDWjs7VUFDQUMsT0FBQSxDQUFBSixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUkQsSUFBQUssS0FBQSxHQUFBUCxPQUFBO1VBQ0EsSUFBQVEsTUFBQSxHQUFBUixPQUFBO1VBQ0EsSUFBQVMsUUFBQSxHQUFBVCxPQUFBO1VBQ0EsSUFBQVUsV0FBQSxHQUFBVixPQUFBO1VBQ087VUFBVSxTQUFVSyxJQUFJQSxDQUFBO1lBQzlCLE1BQU1NLFFBQVEsR0FBR0EsQ0FBQSxLQUFNRixRQUFBLENBQUFHLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDLEdBQUcsQ0FBQztZQUU3QyxPQUNDTixLQUFBLENBQUFPLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWUsR0FDN0JSLEtBQUEsQ0FBQU8sYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBYSxHQUMzQlIsS0FBQSxDQUFBTyxhQUFBLHlDQUE2QixFQUM3QlAsS0FBQSxDQUFBTyxhQUFBLHFCQUFnQixFQUNoQlAsS0FBQSxDQUFBTyxhQUFBLENBQUNOLE1BQUEsQ0FBQVEsS0FBSztjQUFDQyxHQUFHLEVBQUUsR0FBR0MsVUFBVSxDQUFDQyxPQUFPLGdCQUFnQjtjQUFFQyxHQUFHLEVBQUM7WUFBVyxFQUFHLEVBQ3JFYixLQUFBLENBQUFPLGFBQUEsQ0FBQ0osV0FBQSxDQUFBVyxNQUFNO2NBQUNOLFNBQVMsRUFBQyxpQkFBaUI7Y0FBQ08sT0FBTyxFQUFFWDtZQUFRLHNCQUU1QyxDQUNKLENBQ0Q7VUFFUiIsImlnbm9yZUxpc3QiOltdfQ==