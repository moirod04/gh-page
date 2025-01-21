System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.1.2/image", "pragmate-ui@0.1.2/components", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, OfflineIndicator, __beyond_pkg, hmr;
  _export("OfflineIndicator", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_pragmateUi012Image) {
      dependency_2 = _pragmateUi012Image;
    }, function (_pragmateUi012Components) {
      dependency_3 = _pragmateUi012Components;
    }, function (_beyondJsKernel019Routing) {
      dependency_4 = _beyondJsKernel019Routing;
    }, function (_beyondJsKernel019Styles) {
      dependency_5 = _beyondJsKernel019Styles;
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
          "vspecifier": "@bg/jadmin@0.0.1/offline-indicator"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/image', dependency_2], ['pragmate-ui/components', dependency_3], ['@beyond-js/kernel/routing', dependency_4], ['@beyond-js/kernel/styles', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/jadmin@0.0.1/offline-indicator');
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./view
      **********************/
      ims.set('./view', {
        hash: 1205458902,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OfflineIndicator = OfflineIndicator;
          var React = require("react");
          var _image = require("pragmate-ui/image");
          var _components = require("pragmate-ui/components");
          var _routing = require("@beyond-js/kernel/routing");
          /*bundle*/
          function OfflineIndicator() {
            const [offline, setOffline] = React.useState(false);
            React.useEffect(() => {
              function goOnline() {
                setOffline(false);
              }
              function goOffline() {
                setOffline(true);
              }
              window.addEventListener('offline', goOffline);
              window.addEventListener('online', goOnline);
              return () => {
                window.removeEventListener('offline', goOffline);
                window.removeEventListener('online', goOnline);
              };
            }, []);
            const navigate = () => _routing.routing.pushState("/");
            const cls = offline ? 'container-404 container-internet ' : 'container-404 container-internet hide-page';
            return React.createElement("div", {
              className: cls
            }, React.createElement("div", {
              className: "content-404"
            }, React.createElement("h4", null, "Sin conexi\u00F3n a internet"), React.createElement("h5", null, "Revisa tu conexi\u00F3n a internet"), React.createElement(_image.Image, {
              src: `${globalThis.baseDir}assets/offline-indicator.svg`,
              alt: "404 error"
            }), React.createElement(_components.Button, {
              className: "btn btn-primary",
              onClick: navigate
            }, "Regresar al home")));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./view",
        "from": "OfflineIndicator",
        "name": "OfflineIndicator"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'OfflineIndicator') && _export("OfflineIndicator", OfflineIndicator = require ? require('./view').OfflineIndicator : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfaW1hZ2UiLCJfY29tcG9uZW50cyIsIl9yb3V0aW5nIiwiT2ZmbGluZUluZGljYXRvciIsIm9mZmxpbmUiLCJzZXRPZmZsaW5lIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnb09ubGluZSIsImdvT2ZmbGluZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibmF2aWdhdGUiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiY2xzIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkltYWdlIiwic3JjIiwiZ2xvYmFsVGhpcyIsImJhc2VEaXIiLCJhbHQiLCJCdXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZXMiOlsiL3dpZGdldC90cy92aWV3LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFdBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFFBQUEsR0FBQUgsT0FBQTtVQUVPO1VBQVUsU0FBVUksZ0JBQWdCQSxDQUFBO1lBQzFDLE1BQU0sQ0FBQ0MsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBR1AsS0FBSyxDQUFDUSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25EUixLQUFLLENBQUNTLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLFNBQVNDLFFBQVFBLENBQUE7Z0JBQ2hCSCxVQUFVLENBQUMsS0FBSyxDQUFDO2NBQ2xCO2NBQ0EsU0FBU0ksU0FBU0EsQ0FBQTtnQkFDakJKLFVBQVUsQ0FBQyxJQUFJLENBQUM7Y0FDakI7Y0FDQUssTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUVGLFNBQVMsQ0FBQztjQUM3Q0MsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVILFFBQVEsQ0FBQztjQUMzQyxPQUFPLE1BQUs7Z0JBQ1hFLE1BQU0sQ0FBQ0UsbUJBQW1CLENBQUMsU0FBUyxFQUFFSCxTQUFTLENBQUM7Z0JBQ2hEQyxNQUFNLENBQUNFLG1CQUFtQixDQUFDLFFBQVEsRUFBRUosUUFBUSxDQUFDO2NBQy9DLENBQUM7WUFDRixDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ04sTUFBTUssUUFBUSxHQUFHQSxDQUFBLEtBQU1YLFFBQUEsQ0FBQVksT0FBTyxDQUFDQyxTQUFTLENBQUMsR0FBRyxDQUFDO1lBQzdDLE1BQU1DLEdBQUcsR0FBR1osT0FBTyxHQUFHLG1DQUFtQyxHQUFHLDRDQUE0QztZQUN4RyxPQUNDTixLQUFBLENBQUFtQixhQUFBO2NBQUtDLFNBQVMsRUFBRUY7WUFBRyxHQUNsQmxCLEtBQUEsQ0FBQW1CLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWEsR0FDM0JwQixLQUFBLENBQUFtQixhQUFBLDRDQUFnQyxFQUNoQ25CLEtBQUEsQ0FBQW1CLGFBQUEsa0RBQXNDLEVBQ3RDbkIsS0FBQSxDQUFBbUIsYUFBQSxDQUFDakIsTUFBQSxDQUFBbUIsS0FBSztjQUFDQyxHQUFHLEVBQUUsR0FBR0MsVUFBVSxDQUFDQyxPQUFPLDhCQUE4QjtjQUFFQyxHQUFHLEVBQUM7WUFBVyxFQUFHLEVBQ25GekIsS0FBQSxDQUFBbUIsYUFBQSxDQUFDaEIsV0FBQSxDQUFBdUIsTUFBTTtjQUFDTixTQUFTLEVBQUMsaUJBQWlCO2NBQUNPLE9BQU8sRUFBRVo7WUFBUSxzQkFFNUMsQ0FDSixDQUNEO1VBRVIiLCJpZ25vcmVMaXN0IjpbXX0=