System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.2/form", "@beyond-js/kernel@0.1.9/core", "pragmate-ui@0.1.2/icons", "pragmate-ui@0.1.2/perfect-scrollbar", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, AppLogo, AppMenu, __beyond_pkg, hmr;
  _export({
    AppLogo: void 0,
    AppMenu: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_beyondJsKernel019Routing) {
      dependency_2 = _beyondJsKernel019Routing;
    }, function (_pragmateUi012Form) {
      dependency_3 = _pragmateUi012Form;
    }, function (_beyondJsKernel019Core) {
      dependency_4 = _beyondJsKernel019Core;
    }, function (_pragmateUi012Icons) {
      dependency_5 = _pragmateUi012Icons;
    }, function (_pragmateUi012PerfectScrollbar) {
      dependency_6 = _pragmateUi012PerfectScrollbar;
    }, function (_beyondJsKernel019Styles) {
      dependency_7 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/widgets", "0.1.5"], ["pragmate-ui", "0.0.3"], ["socket.io", "4.5.4"], ["socket.io-client", "4.5.4"], ["@types/react", "18.0.26"], ["@types/react-dom", "18.0.10"], ["@jadmin/ui", "1.0.0"], ["sgs-workflow", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@jadmin/ui@1.0.0/menu"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/kernel/routing', dependency_2], ['pragmate-ui/form', dependency_3], ['@beyond-js/kernel/core', dependency_4], ['pragmate-ui/icons', dependency_5], ['pragmate-ui/perfect-scrollbar', dependency_6], ['@beyond-js/kernel/styles', dependency_7]]);
      brequire('@beyond-js/kernel/styles').styles.register('@jadmin/ui@1.0.0/menu');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 1653831888,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContextMenu = void 0;
          var _react = require("react");
          const ContextMenu = exports.ContextMenu = (0, _react.createContext)({});
        }
      });

      /**********************
      INTERNAL MODULE: ./logo
      **********************/

      ims.set('./logo', {
        hash: 3717318990,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AppLogo = AppLogo;
          var React = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _form = require("pragmate-ui/form");
          /*bundle*/
          function AppLogo() {
            const navigate = event => {
              event.stopPropagation();
              _routing.routing.pushState('/');
            };
            //const {application}: params = beyond.params;
            return React.createElement("div", {
              className: "logo",
              onClick: navigate
            }, React.createElement(_form.Input, {
              src: `${globalThis.baseDir}assets/logo.png`,
              alt: "logo",
              className: "logo-header",
              onClick: navigate
            }));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./menu
      **********************/

      ims.set('./menu', {
        hash: 1454775160,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AppMenu = AppMenu;
          var React = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _icons = require("pragmate-ui/icons");
          var _client = require("./options/client");
          var _context = require("./context");
          var _perfectScrollbar = require("pragmate-ui/perfect-scrollbar");
          /*bundle*/
          function AppMenu(props) {
            const {
              open,
              menu
            } = props;
            const [subMenu, setSubMenu] = React.useState([]);
            const submenu = React.useRef(null);
            const container = React.useRef(null);
            const cls = `app-menu rtl-ps-none sidebar-left ps${open ? " open" : ""}`;
            React.useEffect(() => {
              const ele = container.current;
              const handleOver = event => {
                let {
                  target
                } = event;
                target = target.nodeName.toLowerCase() !== "li" ? target.closest("li") : target;
                if (!target) return;
                if (target.classList.contains('tab-sub-container') || submenu.current.contains(target)) return;
                if (!target.dataset.children) {
                  submenu.current.classList.add('hide');
                  setSubMenu([]);
                  return;
                }
                const child = JSON.parse(target.dataset.children);
                setSubMenu(child);
                submenu.current.classList.remove('hide');
              };
              const handleLeave = () => submenu.current.classList.add('hide');
              ele.addEventListener("mouseover", handleOver);
              ele.addEventListener("mouseleave", handleLeave);
              return () => {
                ele.removeEventListener("mouseover", handleOver);
                ele.removeEventListener("mouseleave", handleLeave);
              };
            }, []);
            const navigate = event => {
              event.preventDefault();
              const target = event.currentTarget;
              const page = target.dataset.navigate;
              if (!page) return;
              _routing.routing.pushState(page);
            };
            const value = {
              navigate
            };
            const output = !!subMenu.length && subMenu.map(option => {
              return React.createElement("li", {
                "data-navigate": option.path,
                key: option.id,
                className: "list-sub-option",
                onClick: navigate
              }, React.createElement("a", {
                className: "a-sub-option"
              }, React.createElement(_icons.Icon, {
                className: "sub-icon",
                icon: option.icon
              }), React.createElement("span", null, option.name)));
            });
            return React.createElement(_context.ContextMenu.Provider, {
              value: value
            }, React.createElement("div", {
              ref: container
            }, React.createElement(_perfectScrollbar.ScrollContainer, {
              className: cls,
              "data-perfect-scrollbar": "",
              "data-suppress-scroll-x": "true"
            }, React.createElement("ul", {
              className: "navigation-left"
            }, React.createElement(_client.Client, {
              menu: menu
            })), React.createElement("div", {
              className: "ps__rail-x"
            }, React.createElement("div", {
              className: "ps__thumb-x",
              tabIndex: 0
            })), React.createElement("div", {
              className: "ps__rail-y"
            }, React.createElement("div", {
              className: " ps__thumb-y",
              tabIndex: 0
            }))), React.createElement("ul", {
              ref: submenu,
              className: "tab-sub-container hide"
            }, output)));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./options/client
      ********************************/

      ims.set('./options/client', {
        hash: 3679561394,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Client = Client;
          var React = require("react");
          var _item = require("./item");
          function Client({
            menu
          }) {
            const output = menu.map(item => {
              return React.createElement(_item.Item, {
                key: item.id,
                item: item
              });
            });
            return React.createElement(React.Fragment, null, output);
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./options/item
      ******************************/

      ims.set('./options/item', {
        hash: 1851201556,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var React = _react;
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          function Item({
            item
          }) {
            const {
              navigate
            } = (0, _react.useContext)(_context.ContextMenu);
            return React.createElement("li", {
              onClick: navigate,
              className: "nav-item",
              "data-navigate": item.path,
              "data-children": !!item.submenu.length ? JSON.stringify(item.submenu) : ""
            }, React.createElement(_icons.Icon, {
              icon: item.icon,
              "data-children": !!item.submenu.length ? JSON.stringify(item.submenu) : "",
              className: item.icon
            }), React.createElement("span", {
              "data-children": !!item.submenu.length ? JSON.stringify(item.submenu) : ""
            }, item.name));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./logo",
        "from": "AppLogo",
        "name": "AppLogo"
      }, {
        "im": "./menu",
        "from": "AppMenu",
        "name": "AppMenu"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AppLogo') && _export("AppLogo", AppLogo = require ? require('./logo').AppLogo : value);
        (require || prop === 'AppMenu') && _export("AppMenu", AppMenu = require ? require('./menu').AppMenu : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQ29udGV4dE1lbnUiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsIlJlYWN0IiwiX3JvdXRpbmciLCJfZm9ybSIsIkFwcExvZ28iLCJuYXZpZ2F0ZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiSW5wdXQiLCJzcmMiLCJnbG9iYWxUaGlzIiwiYmFzZURpciIsImFsdCIsIl9pY29ucyIsIl9jbGllbnQiLCJfY29udGV4dCIsIl9wZXJmZWN0U2Nyb2xsYmFyIiwiQXBwTWVudSIsInByb3BzIiwib3BlbiIsIm1lbnUiLCJzdWJNZW51Iiwic2V0U3ViTWVudSIsInVzZVN0YXRlIiwic3VibWVudSIsInVzZVJlZiIsImNvbnRhaW5lciIsImNscyIsInVzZUVmZmVjdCIsImVsZSIsImN1cnJlbnQiLCJoYW5kbGVPdmVyIiwidGFyZ2V0Iiwibm9kZU5hbWUiLCJ0b0xvd2VyQ2FzZSIsImNsb3Nlc3QiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImRhdGFzZXQiLCJjaGlsZHJlbiIsImFkZCIsImNoaWxkIiwiSlNPTiIsInBhcnNlIiwicmVtb3ZlIiwiaGFuZGxlTGVhdmUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudFRhcmdldCIsInBhZ2UiLCJ2YWx1ZSIsIm91dHB1dCIsImxlbmd0aCIsIm1hcCIsIm9wdGlvbiIsInBhdGgiLCJrZXkiLCJpZCIsIkljb24iLCJpY29uIiwibmFtZSIsIlByb3ZpZGVyIiwicmVmIiwiU2Nyb2xsQ29udGFpbmVyIiwiQ2xpZW50IiwidGFiSW5kZXgiLCJfaXRlbSIsIml0ZW0iLCJJdGVtIiwiRnJhZ21lbnQiLCJ1c2VDb250ZXh0Iiwic3RyaW5naWZ5Il0sInNvdXJjZXMiOlsiL2NvZGUvdHMvY29udGV4dC50c3giLCIvY29kZS90cy9sb2dvLnRzeCIsIi9jb2RlL3RzL21lbnUudHN4IiwiL2NvZGUvdHMvb3B0aW9ucy9jbGllbnQudHN4IiwiL2NvZGUvdHMvb3B0aW9ucy9pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNPLE1BQU1DLFdBQVcsR0FBQUMsT0FBQSxDQUFBRCxXQUFBLEdBQWtCLElBQUFGLE1BQUEsQ0FBQUksYUFBYSxFQUFDLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNEM0QsSUFBQUMsS0FBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQUssUUFBQSxHQUFBTCxPQUFBO1VBQ0EsSUFBQU0sS0FBQSxHQUFBTixPQUFBO1VBR087VUFBVSxTQUNSTyxPQUFPQSxDQUFBO1lBRVosTUFBTUMsUUFBUSxHQUFJQyxLQUFLLElBQVU7Y0FDN0JBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCTCxRQUFBLENBQUFNLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDLEdBQUcsQ0FBQztZQUMxQixDQUFDO1lBSUQ7WUFDQSxPQUNJUixLQUFBLENBQUFTLGFBQUE7Y0FBS0MsU0FBUyxFQUFDLE1BQU07Y0FBQ0MsT0FBTyxFQUFFUDtZQUFRLEdBQ25DSixLQUFBLENBQUFTLGFBQUEsQ0FBQ1AsS0FBQSxDQUFBVSxLQUFLO2NBQUNDLEdBQUcsRUFBRSxHQUFHQyxVQUFVLENBQUNDLE9BQU8saUJBQWlCO2NBQUVDLEdBQUcsRUFBQyxNQUFNO2NBQUNOLFNBQVMsRUFBQyxhQUFhO2NBQUNDLE9BQU8sRUFBRVA7WUFBUSxFQUFHLENBQ3pHO1VBR2Q7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEJBLElBQUFKLEtBQUEsR0FBQUosT0FBQTtVQUNBLElBQUFLLFFBQUEsR0FBQUwsT0FBQTtVQUNBLElBQUFxQixNQUFBLEdB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