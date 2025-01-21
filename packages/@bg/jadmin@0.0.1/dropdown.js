System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, DropdownProvider, DropdownLink, DropDownMenu, DropdownToggle, __beyond_pkg, hmr;
  _export({
    DropdownProvider: void 0,
    DropdownLink: void 0,
    DropDownMenu: void 0,
    DropdownToggle: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
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
          "vspecifier": "@bg/jadmin@0.0.1/dropdown"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/jadmin@0.0.1/dropdown');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 4270738753,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DropdownProvider = DropdownProvider;
          exports.useDropdownContext = void 0;
          var _react = require("react");
          const DropdownContext = _react.default.createContext(null);
          const useDropdownContext = () => (0, _react.useContext)(DropdownContext);
          exports.useDropdownContext = useDropdownContext;
          /*bundle*/
          function DropdownProvider(props) {
            const {
              children,
              isToggle,
              onToggle,
              isClose
            } = props;
            const [showMenu, setShowMenu] = _react.default.useState(false);
            const value = {
              showMenu,
              setShowMenu,
              isToggle,
              onToggle,
              isClose
            };
            return _react.default.createElement(DropdownContext.Provider, {
              value: value
            }, children);
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./link
      **********************/

      ims.set('./link', {
        hash: 3487775132,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DropdownLink = DropdownLink;
          var _react = require("react");
          var _context = require("./context");
          /*bundle*/
          function DropdownLink(props) {
            const {
              setShowMenu
            } = (0, _context.useDropdownContext)();
            const {
              children,
              className,
              onClick,
              tag,
              id
            } = props;
            const handleClick = async event => {
              event.stopPropagation();
              if (!!onClick && typeof onClick === "function") await onClick(event);
              setShowMenu(false);
            };
            const TagLink = tag ?? "div";
            const cls = `${className ?? ""} dropdown-link`;
            const properties = Object.assign({}, props);
            delete properties.className;
            delete properties.onClick;
            delete properties.tag;
            delete properties.id;
            return _react.default.createElement(TagLink, {
              id: id,
              className: cls,
              onClick: handleClick,
              ...properties
            }, children);
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./menu
      **********************/

      ims.set('./menu', {
        hash: 2701893925,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DropDownMenu = DropDownMenu;
          var _react = require("react");
          var _context = require("./context");
          /*bundle*/
          function DropDownMenu({
            children,
            className
          }) {
            const {
              showMenu,
              setShowMenu,
              isToggle,
              onToggle,
              isClose
            } = (0, _context.useDropdownContext)();
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              const handleClick = event => {
                const {
                  current
                } = ref;
                const isSameNode = current === event.target || current === event.currentTarget || event.composedPath()[0] === current;
                const isAChildren = current?.contains(event.composedPath()[0]);
                if (!isSameNode && !isAChildren) {
                  setShowMenu(false);
                  if (!!onToggle && isToggle && typeof onToggle === "function" && isClose) {
                    onToggle();
                  }
                }
                ;
              };
              document.addEventListener("click", handleClick);
              return () => document.removeEventListener("click", handleClick);
            }, [isClose]);
            if (!showMenu && !isToggle) return null;
            const cls = `${className ?? ""} dropdown-menu-container`;
            return _react.default.createElement("div", {
              ref: ref,
              className: cls
            }, children);
          }
        }
      });

      /************************
      INTERNAL MODULE: ./toggle
      ************************/

      ims.set('./toggle', {
        hash: 2970189459,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DropdownToggle = DropdownToggle;
          var React = require("react");
          var _context = require("./context");
          /*bundle*/
          function DropdownToggle({
            children,
            className
          }) {
            const cls = `${className ?? ''} dropdown-toggle`;
            const {
              showMenu,
              setShowMenu,
              isToggle,
              onToggle
            } = (0, _context.useDropdownContext)();
            const handleClick = event => {
              event.stopPropagation();
              if (!isToggle) setShowMenu(!showMenu);
              if (!!onToggle && isToggle && typeof onToggle === 'function') onToggle();
            };
            return React.createElement("div", {
              onClick: handleClick,
              className: cls
            }, children);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./context",
        "from": "DropdownProvider",
        "name": "DropdownProvider"
      }, {
        "im": "./link",
        "from": "DropdownLink",
        "name": "DropdownLink"
      }, {
        "im": "./menu",
        "from": "DropDownMenu",
        "name": "DropDownMenu"
      }, {
        "im": "./toggle",
        "from": "DropdownToggle",
        "name": "DropdownToggle"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'DropdownProvider') && _export("DropdownProvider", DropdownProvider = require ? require('./context').DropdownProvider : value);
        (require || prop === 'DropdownLink') && _export("DropdownLink", DropdownLink = require ? require('./link').DropdownLink : value);
        (require || prop === 'DropDownMenu') && _export("DropDownMenu", DropDownMenu = require ? require('./menu').DropDownMenu : value);
        (require || prop === 'DropdownToggle') && _export("DropdownToggle", DropdownToggle = require ? require('./toggle').DropdownToggle : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiRHJvcGRvd25Db250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VEcm9wZG93bkNvbnRleHQiLCJ1c2VDb250ZXh0IiwiZXhwb3J0cyIsIkRyb3Bkb3duUHJvdmlkZXIiLCJwcm9wcyIsImNoaWxkcmVuIiwiaXNUb2dnbGUiLCJvblRvZ2dsZSIsImlzQ2xvc2UiLCJzaG93TWVudSIsInNldFNob3dNZW51IiwidXNlU3RhdGUiLCJ2YWx1ZSIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsIl9jb250ZXh0IiwiRHJvcGRvd25MaW5rIiwiY2xhc3NOYW1lIiwib25DbGljayIsInRhZyIsImlkIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIlRhZ0xpbmsiLCJjbHMiLCJwcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiRHJvcERvd25NZW51IiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImlzU2FtZU5vZGUiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiY29tcG9zZWRQYXRoIiwiaXNBQ2hpbGRyZW4iLCJjb250YWlucyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJSZWFjdCIsIkRyb3Bkb3duVG9nZ2xlIl0sInNvdXJjZXMiOlsiL2NvZGUvdHMvY29udGV4dC50c3giLCIvY29kZS90cy9saW5rLnRzeCIsIi9jb2RlL3RzL21lbnUudHN4IiwiL2NvZGUvdHMvdG9nZ2xlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLE1BQU1DLGVBQWUsR0FBR0YsTUFBQSxDQUFBRyxPQUFLLENBQUNDLGFBQWEsQ0FB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