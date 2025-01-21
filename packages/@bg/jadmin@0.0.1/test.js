System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.4/base", "react@18.2.0", "@bg/jadmin@0.0.1/jview.code", "@bg/jadmin@0.0.1/search.code", "@bg/jadmin@0.0.1/input", "pragmate-ui@0.1.2/image", "pragmate-ui@0.1.2/components", "@bg/jadmin@0.0.1/app-icon", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_bgJadmin001JviewCode) {
      dependency_4 = _bgJadmin001JviewCode;
    }, function (_bgJadmin001SearchCode) {
      dependency_5 = _bgJadmin001SearchCode;
    }, function (_bgJadmin001Input) {
      dependency_6 = _bgJadmin001Input;
    }, function (_pragmateUi012Image) {
      dependency_7 = _pragmateUi012Image;
    }, function (_pragmateUi012Components) {
      dependency_8 = _pragmateUi012Components;
    }, function (_bgJadmin001AppIcon) {
      dependency_9 = _bgJadmin001AppIcon;
    }, function (_beyondJsKernel019Styles) {
      dependency_10 = _beyondJsKernel019Styles;
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
          "vspecifier": "@bg/jadmin@0.0.1/test"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/base', dependency_2], ['react', dependency_3], ['@bg/jadmin/jview.code', dependency_4], ['@bg/jadmin/search.code', dependency_5], ['@bg/jadmin/input', dependency_6], ['pragmate-ui/image', dependency_7], ['pragmate-ui/components', dependency_8], ['@bg/jadmin/app-icon', dependency_9], ['@beyond-js/kernel/styles', dependency_10]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "test-page",
        "vspecifier": "@bg/jadmin@0.0.1/test",
        "is": "page",
        "route": "/test",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/jadmin@0.0.1/test');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2532661387,
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
              return _views.View;
            }
          }
          exports.Controller = Controller;
        }
      });

      /****************************
      INTERNAL MODULE: ./views/data
      ****************************/

      ims.set('./views/data', {
        hash: 1043929055,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.data = void 0;
          const data = exports.data = Array.from(Array(100)).map((_, index) => {
            return {
              user: `lorem ipsum ${index + 1}`,
              email: `lorem ipsum ${index + 1}`,
              id: "1",
              lastName: `lorem ipsum ${index + 1}`
            };
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1572717505,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _data = require("./data");
          var _item = require("./item");
          var _jview = require("@bg/jadmin/jview.code");
          var _search = require("@bg/jadmin/search.code");
          var _input = require("@bg/jadmin/input");
          var _user = require("./user");
          /*bundle*/
          function View() {
            const value = {
              dataHead: [{
                label: "title 1",
                id: "1"
              }, {
                label: "title 2",
                id: "2"
              }, {
                label: "title 3",
                id: "3"
              }],
              entries: _data.data,
              //keys: ['user', 'email', 'lastName'],
              rows: 6,
              total: _data.data.length,
              pagerNext: true,
              item: _item.Item
            };
            const valueUser = {
              view: "grid",
              entries: _data.data,
              keys: ["user", "email", "lastName"],
              rows: 6,
              total: _data.data.length,
              pagerNext: true,
              item: _user.User
            };
            const filter = [{
              id: "1",
              name: "Lorem ipsum",
              identifier: "operator"
            }, {
              id: "2",
              name: "Lorem ipsum",
              identifier: "brand"
            }, {
              id: "3",
              name: "Lorem ipsum",
              identifier: "color"
            }, {
              id: "4",
              name: "Lorem ipsum",
              identifier: "size"
            }];
            const initValues = {
              user: "",
              brand: "",
              color: "",
              size: "",
              asin: "",
              startDate: "",
              endDate: ""
            };
            const options = [{
              label: "1",
              value: "value 1"
            }, {
              label: "2",
              value: "value 2"
            }];
            const option2 = [{
              label: "lorem ipsum 1",
              value: "value 1"
            }, {
              label: "lorem ipsum 2",
              value: "value 2"
            }];
            return _react.default.createElement("div", {
              className: "test-page"
            }, _react.default.createElement("div", null, _react.default.createElement("div", {
              className: "d-flex content-search-list"
            }, _react.default.createElement(_input.Select, {
              options: options,
              label: "Lorem ipsum"
            }), _react.default.createElement(_input.Select, {
              options: option2,
              label: "Lorem ipsum"
            }), _react.default.createElement(_search.Search, {
              filter: filter,
              initValues: initValues
            })), _react.default.createElement(_jview.JView, {
              ...value
            })), _react.default.createElement(_jview.JView, {
              ...valueUser
            }));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/item
      ****************************/

      ims.set('./views/item', {
        hash: 1976637939,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          function Item({
            item,
            index
          }) {
            const [show, setShow] = (0, _react.useState)(false);
            const keys = ["user", "email", "lastName"];
            const container = (0, _react.useRef)(null);
            const ref = (0, _react.useRef)(null);
            const handleShow = event => {
              const {
                dataset
              } = event.currentTarget;
              if (parseInt(dataset.index) !== index) return;
              setShow(!show);
            };
            (0, _react.useEffect)(() => {
              const handleClick = event => {
                const {
                  current
                } = container;
                event.stopPropagation();
                const isSameNode = current === event.target || current === event.currentTarget || event.composedPath()[0] === current || ref.current === event.target || ref.current === event.currentTarget || event.composedPath()[0] === ref.current;
                const isAChildren = current?.contains(event.composedPath()[0]) || ref.current.contains(event.composedPath()[0]);
                if (!isSameNode && !isAChildren) setShow(false);
              };
              document.addEventListener("click", handleClick);
              return () => document.removeEventListener("click", handleClick);
            }, []);
            const heads = {
              user: "Title 1",
              email: "Title 2",
              lastName: "Title 3 "
            };
            const entries = keys.map(key => _react.default.createElement("td", {
              key: key,
              "data-label": heads[key]
            }, _react.default.createElement("span", null, item[key])));
            const cls = show ? "actions-table" : "actions-table hide-cell";
            return _react.default.createElement("tr", null, entries, _react.default.createElement("td", {
              ref: container,
              "data-label": "Actions",
              onClick: handleShow,
              "data-index": index,
              className: "content-action"
            }, "...", _react.default.createElement("ul", {
              ref: ref,
              className: cls
            }, _react.default.createElement("li", null, "lorem ipsum"), _react.default.createElement("li", null, "lorem ipsum"))));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/user
      ****************************/

      ims.set('./views/user', {
        hash: 2334851909,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.User = User;
          var React = require("react");
          var _image = require("pragmate-ui/image");
          var _components = require("pragmate-ui/components");
          var _appIcon = require("@bg/jadmin/app-icon");
          function User({
            item,
            index
          }) {
            return React.createElement("div", {
              className: "content-user"
            }, React.createElement("div", {
              className: "content-image"
            }, React.createElement(_image.Image, {
              alt: " "
            }, React.createElement("span", {
              className: "badge"
            })), React.createElement("div", {
              className: "content-name"
            }, React.createElement("h4", null, item.user), React.createElement("span", null, "Cargo : lorem ipsum"))), React.createElement("div", {
              className: "user-buttons"
            }, React.createElement(_components.Button, {
              label: "Chat",
              className: "btn btn-primary"
            }), React.createElement(_components.Button, {
              label: "Perfil",
              className: "btn btn-secondary"
            })), React.createElement(_appIcon.AppIconButton, {
              icon: "delete"
            }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiVmlldyIsImV4cG9ydHMiLCJkYXRhIiwiQXJyYXkiLCJmcm9tIiwibWFwIiwiXyIsImluZGV4IiwidXNlciIsImVtYWlsIiwiaWQiLCJsYXN0TmFtZSIsIl9yZWFjdCIsIl9kYXRhIiwiX2l0ZW0iLCJfanZpZXciLCJfc2VhcmNoIiwiX2lucHV0IiwiX3VzZXIiLCJ2YWx1ZSIsImRhdGFIZWFkIiwibGFiZWwiLCJlbnRyaWVzIiwicm93cyIsInRvdGFsIiwibGVuZ3RoIiwicGFnZXJOZXh0IiwiaXRlbSIsIkl0ZW0iLCJ2YWx1ZVVzZXIiLCJ2aWV3Iiwia2V5cyIsIlVzZXIiLCJmaWx0ZXIiLCJuYW1lIiwiaWRlbnRpZmllciIsImluaXRWYWx1ZXMiLCJicmFuZCIsImNvbG9yIiwic2l6ZSIsImFzaW4iLCJzdGFydERhdGUiLCJlbmREYXRlIiwib3B0aW9ucyIsIm9wdGlvbjIiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIlNlbGVjdCIsIlNlYXJjaCIsIkpWaWV3Iiwic2hvdyIsInNldFNob3ciLCJ1c2VTdGF0ZSIsImNvbnRhaW5lciIsInVzZVJlZiIsInJlZiIsImhhbmRsZVNob3ciLCJldmVudCIsImRhdGFzZXQiLCJjdXJyZW50VGFyZ2V0IiwicGFyc2VJbnQiLCJ1c2VFZmZlY3QiLCJoYW5kbGVDbGljayIsImN1cnJlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJpc1NhbWVOb2RlIiwidGFyZ2V0IiwiY29tcG9zZWRQYXRoIiwiaXNBQ2hpbGRyZW4iLCJjb250YWlucyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoZWFkcyIsImtleSIsImNscyIsIm9uQ2xpY2siLCJSZWFjdCIsIl9pbWFnZSIsIl9jb21wb25lbnRzIiwiX2FwcEljb24iLCJJbWFnZSIsImFsdCIsIkJ1dHRvbiIsIkFwcEljb25CdXR0b24iLCJpY29uIl0sInNvdXJjZXMiOlsiL3dpZGdldC90cy9jb250cm9sbGVyLnRzIiwiL3dpZGdldC90cy92aWV3cy9kYXRhLnRzIiwiL3dpZGdldC90cy92aWV3cy9pbmRleC50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL2l0ZW0udHN4IiwiL3dpZGdldC90cy92aWV3cy91c2VyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLE1BQ1BFLFVBQVcsU0FBUUgsS0FBQSxDQUFBSSxxQkFBcUI7WUFDOUMsSUFBSUMsTUFBTUEsQ0FBQTtjQUNOLE9BQU9ILE1BQUEsQ0FBQUksSUFBSTtZQUNmOztVQUNIQyxPQUFBLENBQUFKLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSTSxNQUFNSyxJQUFJLEdBQUFELE9BQUEsQ0FBQUMsSUFBQSxHQUFHQyxLQUFLLENBQUNDLElBQUksQ0FBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNFLEdBQUcsQ0FBQyxDQUFDQyxDQUFDLEVBQUVDLEtBQUssS0FBSTtZQUN4RCxPQUFPO2NBQUVDLElBQUksRUFBRSxlQUFlRCxLQUFLLEdBQUcsQ0FBQyxFQUFFO2NBQUVFLEtBQUssRUFBRSxlQUFlRixLQUFLLEdBQUcsQ0FBQyxFQUFFO2NBQUVHLEVBQUUsRUFBRSxHQUFHO2NBQUVDLFFBQVEsRUFBRSxlQUFlSixLQUFLLEdBQUcsQ0FBQztZQUFFLENBQUU7VUFDakksQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0ZGLElBQUFLLE1BQUEsR0FBQWpCLE9BQUE7VUFDQSxJQUFBa0IsS0FBQSxHQUFBbEIsT0FBQTtVQUNBLElBQUFtQixLQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQW9CLE1BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBcUIsT0FBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFzQixNQUFBLEdBQUF0QixPQUFBO1VBQ0EsSUFBQXVCLEtBQUEsR0FBQXZCLE9BQUE7VUFDTztVQUFVLFNBQ1JLLElBQUlBLENBQUE7WUFDWCxNQUFNbUIsS0FBSyxHQUFHO2NBQ1pDLFFBQVEsRUFBRSxDQUNSO2dCQUFFQyxLQUFLLEVBQUUsU0FBUztnQkFBRVgsRUFBRSxFQUFFO2NBQUcsQ0FBRSxFQUM3QjtnQkFBRVcsS0FBSyxFQUFFLFNBQVM7Z0JBQUVYLEVBQUUsRUFBRTtjQUFHLENBQUUsRUFDN0I7Z0JBQUVXLEtBQUssRUFBRSxTQUFTO2dCQUFFWCxFQUFFLEVBQUU7Y0FBRyxDQUFFLENBQzlCO2NBQ0RZLE9BQU8sRUFBRVQsS0FBQSxDQUFBWCxJQUFJO2NBQ2I7Y0FDQXFCLElBQUksRUFBRSxDQUFDO2NBQ1BDLEtBQUssRUFBRVgsS0FBQSxDQUFBWCxJQUFJLENBQUN1QixNQUFNO2NBQ2xCQyxTQUFTLEVBQUUsSUFBSTtjQUNmQyxJQUFJLEVBQUViLEtBQUEsQ0FBQWM7YUFDUDtZQUNELE1BQU1DLFNBQVMsR0FBRztjQUNoQkMsSUFBSSxFQUFFLE1BQU07Y0FDWlIsT0FBTyxFQUFFVCxLQUFBLENBQUFYLElBQUk7Y0FDYjZCLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDO2NBQ25DUixJQUFJLEVBQUUsQ0FBQztjQUNQQyxLQUFLLEVBQUVYLEtBQUEsQ0FBQVgsSUFBSSxDQUFDdUIsTUFBTTtjQUNsQkMsU0FBUyxFQUFFLElBQUk7Y0FDZkMsSUFBSSxFQUFFVCxLQUFBLENBQUFjO2FBQ1A7WUFDRCxNQUFNQyxNQUFNLEdBQWUsQ0FDekI7Y0FBRXZCLEVBQUUsRUFBRSxHQUFHO2NBQUV3QixJQUFJLEVBQUUsYUFBYTtjQUFFQyxVQUFVLEVBQUU7WUFBVSxDQUFFLEVBQ3hEO2NBQUV6QixFQUFFLEVBQUUsR0FBRztjQUFFd0IsSUFBSSxFQUFFLGFBQWE7Y0FBRUMsVUFBVSxFQUFFO1lBQU8sQ0FBRSxFQUNyRDtjQUFFekIsRUFBRSxFQUFFLEdBQUc7Y0FBRXdCLElBQUksRUFBRSxhQUFhO2NBQUVDLFVBQVUsRUFBRTtZQUFPLENBQUUsRUFDckQ7Y0FBRXpCLEVBQUUsRUFBRSxHQUFHO2NBQUV3QixJQUFJLEVBQUUsYUFBYTtjQUFFQyxVQUFVLEVBQUU7WUFBTSxDQUFFLENBQ3JEO1lBRUQsTUFBTUMsVUFBVSxHQUFHO2NBQ2pCNUIsSUFBSSxFQUFFLEVBQUU7Y0FDUjZCLEtBQUssRUFBRSxFQUFFO2NBQ1RDLEtBQUssRUFBRSxFQUFFO2NBQ1RDLElBQUksRUFBRSxFQUFFO2NBQ1JDLElBQUksRUFBRSxFQUFFO2NBQ1JDLFNBQVMsRUFBRSxFQUFFO2NBQ2JDLE9BQU8sRUFBRTthQUNWO1lBRUQsTUFBTUMsT0FBTyxHQUFHLENBQ2Q7Y0FBRXRCLEtBQUssRUFBRSxHQUFHO2NBQUVGLEtBQUssRUFBRTtZQUFTLENBQUUsRUFDaEM7Y0FBRUUsS0FBSyxFQUFFLEdBQUc7Y0FBRUYsS0FBSyxFQUFFO1lBQVMsQ0FBRSxDQUNqQztZQUNELE1BQU15QixPQUFPLEdBQUcsQ0FDZDtjQUFFdkIsS0FBSyxFQUFFLGVBQWU7Y0FBRUYsS0FBSyxFQUFFO1lBQVMsQ0FBRSxFQUM1QztjQUFFRSxLQUFLLEVBQUUsZUFBZTtjQUFFRixLQUFLLEVBQUU7WUFBUyxDQUFFLENBQzdDO1lBRUQsT0FDRVAsTUFBQSxDQUFBaUMsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFXLEdBQ3hCbkMsTUFBQSxDQUFBaUMsT0FBQSxDQUFBQyxhQUFBLGNBQ0VsQyxNQUFBLENBQUFpQyxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQTRCLEdBQ3pDbkMsTUFBQSxDQUFBaUMsT0FBQSxDQUFBQyxhQUFBLENBQUM3QixNQUFBLENBQUErQixNQUFNO2NBQUNMLE9BQU8sRUFBRUEsT0FBTztjQUFFdEIsS0FBSyxFQUFDO1lBQWEsRUFBRyxFQUNoRFQsTUFBQSxDQUFBaUMsT0FBQSxDQUFBQyxhQUFBLENBQUM3QixNQUFBLENBQUErQixNQUFNO2NBQUNMLE9BQU8sRUFBRUMsT0FBTztjQUFFdkIsS0FBSyxFQUFDO1lBQWEsRUFBRyxFQUNoRFQsTUFBQSxDQUFBaUMsT0FBQSxDQUFBQyxhQUFBLENBQUM5QixPQUFBLENBQUFpQyxNQUFNO2NBQUNoQixNQUFNLEVBQUVBLE1BQU07Y0FBRUcsVUFBVSxFQUFFQTtZQUFVLEVBQUksQ0FDOUMsRUFDTnhCLE1BQUEsQ0FBQWlDLE9BQUEsQ0FBQUMsYUFBQSxDQUFDL0IsTUFBQSxDQUFBbUMsS0FBSztjQUFBLEdBQUsvQjtZQUFLLEVBQUksQ0FDaEIsRUFLTlAsTUFBQSxDQUFBaUMsT0FBQSxDQUFBQyxhQUFBLENBQUMvQixNQUFBLENBQUFtQyxLQUFLO2NBQUEsR0FBS3JCO1lBQVMsRUFBSSxDQUNwQjtVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFFQSxJQUFBakIsTUFBQSxHQUFBakIsT0FBQTtVQVFNLFNBQVVpQyxJQUFJQSxDQUFDO1lBQUVELElBQUk7WUFBRXBCO1VBQUssQ0FBRTtZQUNsQyxNQUFNLENBQUM0QyxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHLElBQUF4QyxNQUFBLENBQUF5QyxRQUFRLEVBQUMsS0FBSyxDQUFDO1lBQ3ZDLE1BQU10QixJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQztZQUMxQyxNQUFNdUIsU0FBUyxHQUEwQixJQUFBMUMsTUFBQSxDQUFBMkMsTUFBTSxFQUFNLElBQUksQ0FBQztZQUMxRCxNQUFNQyxHQUFHLEdBQTBCLElBQUE1QyxNQUFBLENBQUEyQyxNQUFNLEVBQU0sSUFBSSxDQUFDO1lBQ3BELE1BQU1FLFVBQVUsR0FBSUMsS0FBeUMsSUFBVTtjQUNyRSxNQUFNO2dCQUFFQztjQUFPLENBQUUsR0FBR0QsS0FBSyxDQUFDRSxhQUFhO2NBQ3ZDLElBQUlDLFFBQVEsQ0FBQ0YsT0FBTyxDQUFDcEQsS0FBSyxDQUFDLEtBQUtBLEtBQUssRUFBRTtjQUN2QzZDLE9BQU8sQ0FBQyxDQUFDRCxJQUFJLENBQUM7WUFDaEIsQ0FBQztZQUNELElBQUF2QyxNQUFBLENBQUFrRCxTQUFTLEVBQUMsTUFBbUI7Y0FDM0IsTUFBTUMsV0FBVyxHQUFJTCxLQUFVLElBQVU7Z0JBQ3ZDLE1BQU07a0JBQUVNO2dCQUFPLENBQUUsR0FBR1YsU0FBUztnQkFDN0JJLEtBQUssQ0FBQ08sZUFBZSxFQUFFO2dCQUV2QixNQUFNQyxVQUFVLEdBQ2RGLE9BQU8sS0FBS04sS0FBSyxDQUFDUyxNQUFNLElBQ3hCSCxPQUFPLEtBQUtOLEtBQUssQ0FBQ0UsYUFBYSxJQUMvQkYsS0FBSyxDQUFDVSxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBS0osT0FBTyxJQUNuQ1IsR0FBRyxDQUFDUSxPQUFPLEtBQUtOLEtBQUssQ0FBQ1MsTUFBTSxJQUM1QlgsR0FBRyxDQUFDUSxPQUFPLEtBQUtOLEtBQUssQ0FBQ0UsYUFBYSxJQUNuQ0YsS0FBSyxDQUFDVSxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBS1osR0FBRyxDQUFDUSxPQUFPO2dCQUN6QyxNQUFNSyxXQUFXLEdBQ2ZMLE9BQU8sRUFBRU0sUUFBUSxDQUFDWixLQUFLLENBQUNVLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQzFDWixHQUFHLENBQUNRLE9BQU8sQ0FBQ00sUUFBUSxDQUFDWixLQUFLLENBQUNVLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvQyxJQUFJLENBQUNGLFVBQVUsSUFBSSxDQUFDRyxXQUFXLEVBQUVqQixPQUFPLENBQUMsS0FBSyxDQUFDO2NBQ2pELENBQUM7Y0FDRG1CLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFVCxXQUFXLENBQUM7Y0FDL0MsT0FBTyxNQUFZUSxRQUFRLENBQUNFLG1CQUFtQixDQUFDLE9BQU8sRUFBRVYsV0FBVyxDQUFDO1lBQ3ZFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDTixNQUFNVyxLQUFLLEdBQUc7Y0FDWmxFLElBQUksRUFBRSxTQUFTO2NBQ2ZDLEtBQUssRUFBRSxTQUFTO2NBQ2hCRSxRQUFRLEVBQUU7YUFDWDtZQUNELE1BQU1XLE9BQU8sR0FBR1MsSUFBSSxDQUFDMUIsR0FBRyxDQUFFc0UsR0FBVyxJQUNuQy9ELE1BQUEsQ0FBQWlDLE9BQUEsQ0FBQUMsYUFBQTtjQUFJNkIsR0FBRyxFQUFFQSxHQUFHO2NBQUEsY0FBY0QsS0FBSyxDQUFDQyxHQUFHO1lBQUMsR0FDbEMvRCxNQUFBLENBQUFpQyxPQUFBLENBQUFDLGFBQUEsZUFBT25CLElBQUksQ0FBQ2dELEdBQUcsQ0FBQyxDQUFRLENBRTNCLENBQUM7WUFDRixNQUFNQyxHQUFHLEdBQUd6QixJQUFJLEdBQUcsZUFBZSxHQUFHLHlCQUF5QjtZQUM5RCxPQUNFdkMsTUFBQSxDQUFBaUMsT0FBQSxDQUFBQyxhQUFBLGFBQ0d4QixPQUFPLEVBRVJWLE1BQUEsQ0FBQWlDLE9BQUEsQ0FBQUMsYUFBQTtjQUNFVSxHQUFHLEVBQUVGLFNBQVM7Y0FBQSxjQUNILFNBQVM7Y0FDcEJ1QixPQUFPLEVBQUVwQixVQUFVO2NBQUEsY0FDUGxELEtBQUs7Y0FDakJ3QyxTQUFTLEVBQUM7WUFBZ0IsRyxPQUcxQm5DLE1BQUEsQ0FBQWlDLE9BQUEsQ0FBQUMsYUFBQTtjQUFJVSxHQUFHLEVBQUVBLEdBQUc7Y0FBRVQsU0FBUyxFQUFFNkI7WUFBRyxHQUMxQmhFLE1BQUEsQ0FBQWlDLE9BQUEsQ0FBQUMsYUFBQSwyQkFBb0IsRUFDcEJsQyxNQUFBLENBQUFpQyxPQUFBLENBQUFDLGFBQUEsMkJBQW9CLENBQ2pCLENBQ0YsQ0FDRjtVQUVUOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BFQSxJQUFBZ0MsS0FBQSxHQUFBbkYsT0FBQTtVQUNBLElBQUFvRixNQUFBLEdBQUFwRixPQUFBO1VBQ0EsSUFBQXFGLFdBQUEsR0FBQXJGLE9BQUE7VUFDQSxJQUFBc0YsUUFBQSxHQUFBdEYsT0FBQTtVQUNNLFNBQVVxQyxJQUFJQSxDQUFDO1lBQUVMLElBQUk7WUFBRXBCO1VBQUssQ0FBRTtZQUNuQyxPQUNDdUUsS0FBQSxDQUFBaEMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBYyxHQUM1QitCLEtBQUEsQ0FBQWhDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWUsR0FDN0IrQixLQUFBLENBQUFoQyxhQUFBLENBQUNpQyxNQUFBLENBQUFHLEtBQUs7Y0FBQ0MsR0FBRyxFQUFDO1lBQUcsR0FDYkwsS0FBQSxDQUFBaEMsYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBTyxFQUFHLENBQ25CLEVBQ1IrQixLQUFBLENBQUFoQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFjLEdBQzVCK0IsS0FBQSxDQUFBaEMsYUFBQSxhQUFLbkIsSUFBSSxDQUFDbkIsSUFBSSxDQUFNLEVBQ3BCc0UsS0FBQSxDQUFBaEMsYUFBQSxxQ0FBZ0MsQ0FDM0IsQ0FDRCxFQUNOZ0MsS0FBQSxDQUFBaEMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBYyxHQUM1QitCLEtBQUEsQ0FBQWhDLGFBQUEsQ0FBQ2tDLFdBQUEsQ0FBQUksTUFBTTtjQUFDL0QsS0FBSyxFQUFDLE1BQU07Y0FBQzBCLFNBQVMsRUFBQztZQUFpQixFQUFHLEVBQ25EK0IsS0FBQSxDQUFBaEMsYUFBQSxDQUFDa0MsV0FBQSxDQUFBSSxNQUFNO2NBQUMvRCxLQUFLLEVBQUMsUUFBUTtjQUFDMEIsU0FBUyxFQUFDO1lBQW1CLEVBQUcsQ0FDbEQsRUFDTitCLEtBQUEsQ0FBQWhDLGFBQUEsQ0FBQ21DLFFBQUEsQ0FBQUksYUFBYTtjQUFDQyxJQUFJLEVBQUM7WUFBUSxFQUFHLENBQzFCO1VBRVIiLCJpZ25vcmVMaXN0IjpbXX0=