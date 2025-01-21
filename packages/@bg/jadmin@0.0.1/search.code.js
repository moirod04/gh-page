System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@jadmin/ui@1.0.0/utils", "pragmate-ui@0.1.2/form", "@jadmin/ui@1.0.0/hooks", "pragmate-ui@0.1.2/components", "@bg/jadmin@0.0.1/app-icon", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Search, __beyond_pkg, hmr;
  _export("Search", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_jadminUi100Utils) {
      dependency_2 = _jadminUi100Utils;
    }, function (_pragmateUi012Form) {
      dependency_3 = _pragmateUi012Form;
    }, function (_jadminUi100Hooks) {
      dependency_4 = _jadminUi100Hooks;
    }, function (_pragmateUi012Components) {
      dependency_5 = _pragmateUi012Components;
    }, function (_bgJadmin001AppIcon) {
      dependency_6 = _bgJadmin001AppIcon;
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
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@bg/jadmin@0.0.1/search",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@jadmin/ui/utils', dependency_2], ['pragmate-ui/form', dependency_3], ['@jadmin/ui/hooks', dependency_4], ['pragmate-ui/components', dependency_5], ['@bg/jadmin/app-icon', dependency_6], ['@beyond-js/kernel/styles', dependency_7]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/jadmin@0.0.1/search.code');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 1623483698,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSearchContext = exports.SearchContext = void 0;
          var _react = require("react");
          const SearchContext = exports.SearchContext = (0, _react.createContext)({});
          const useSearchContext = () => (0, _react.useContext)(SearchContext);
          exports.useSearchContext = useSearchContext;
        }
      });

      /***********************
      INTERNAL MODULE: ./dates
      ***********************/

      ims.set('./dates', {
        hash: 251305086,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Dates = Dates;
          var React = require("react");
          var _utils = require("@jadmin/ui/utils");
          var _context = require("./context");
          var _form = require("pragmate-ui/form");
          function Dates({
            handleChange
          }) {
            const {
              state,
              texts
            } = (0, _context.useSearchContext)();
            return React.createElement("div", {
              className: "fields-date"
            }, React.createElement("div", {
              className: "fieldset"
            }, React.createElement(_form.Input, {
              type: "date",
              name: "startDate",
              value: state.startDate,
              max: (0, _utils.getCurrentDate)(),
              onChange: handleChange,
              label: texts.from
            })), React.createElement("div", {
              className: "fieldset"
            }, React.createElement(_form.Input, {
              type: "date",
              name: "endDate",
              value: state.endDate,
              max: (0, _utils.getCurrentDate)(),
              onChange: handleChange,
              label: texts.to
            })));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 996454290,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Search = Search;
          var _react = require("react");
          var React = _react;
          var _context = require("./context");
          var _view = require("./view");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@jadmin/ui/hooks");
          /*bundle*/
          function Search(props) {
            const {
              dialogTitle,
              filter,
              initValues,
              children,
              onSearch,
              onClear,
              isClear,
              placeholder,
              type,
              date,
              searchableList = true
            } = props;
            const ref = (0, _react.useRef)(null);
            const button = (0, _react.useRef)(null);
            const initialState = Object.assign({
              startDate: '',
              endDate: '',
              search: ''
            }, initValues);
            const [ready, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [state, setState] = (0, _react.useState)(initialState);
            const [show, setShow] = (0, _react.useState)(false);
            (0, _react.useEffect)(() => {
              const handleClick = event => {
                const {
                  current
                } = ref;
                const isSameNode = event.composedPath()[0] === current;
                const isAChildren = current?.contains(event.composedPath()[0]);
                const istButton = button.current?.isSameNode(event.composedPath()[0]) || event.target.isSameNode(event.composedPath()[0]) || event.currentTarget.isSameNode(event.composedPath()[0]);
                const isChildrenButton = button.current?.contains(event.composedPath()[0]) || event.target.contains(event.composedPath()[0]) || event.currentTarget.contains(event.composedPath()[0]);
                if (!isSameNode && !isAChildren && !istButton && !isChildrenButton) {
                  setShow(false);
                }
              };
              document.addEventListener('click', handleClick);
              return () => document.removeEventListener('click', handleClick);
            }, []);
            if (!ready) return null;
            const value = {
              state,
              show,
              setShow,
              setState,
              initValues,
              filter,
              button,
              ref,
              onSearch,
              onClear,
              isClear,
              placeholder,
              initialState,
              type,
              dialogTitle,
              date,
              searchableList,
              texts
            };
            return React.createElement(_context.SearchContext.Provider, {
              value: value
            }, React.createElement(_view.View, {
              element: children
            }));
          }
          Search.defaultProps = {
            type: 'search',
            date: true
          };
        }
      });

      /**********************
      INTERNAL MODULE: ./view
      **********************/

      ims.set('./view', {
        hash: 3087818849,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _dates = require("./dates");
          var _context = require("./context");
          var _appIcon = require("@bg/jadmin/app-icon");
          var _form = require("pragmate-ui/form");
          function View({
            element
          }) {
            const {
              state,
              setShow,
              show,
              setState,
              initialState,
              filter,
              button,
              ref,
              onSearch,
              onClear,
              isClear,
              placeholder,
              type,
              dialogTitle,
              searchableList,
              date,
              texts
            } = (0, _context.useSearchContext)();
            const handleShow = () => setShow(!show);
            const cls = show ? 'show' : 'hide-fields';
            const handleSubmit = async event => {
              event.preventDefault();
              onSearch && (await onSearch(state));
              setShow(false);
            };
            const handleClear = async event => {
              event.stopPropagation();
              setState(initialState);
              onClear && (await onClear());
              setShow(false);
            };
            const handleChange = event => {
              const target = event.currentTarget;
              setState({
                ...state,
                [target.name]: target.value
              });
            };
            const isFilter = !!filter && Array.isArray(filter) && !!filter.length;
            const output = isFilter && filter.map(item => {
              return _react.default.createElement(_form.Input, {
                key: item.id,
                type: "text",
                name: item.identifier,
                label: item.name,
                value: state[item.identifier] ?? '',
                onChange: handleChange
              });
            });
            const isClearValues = state.search && isClear || isClear && Object.keys(state).some(item => !!state[item]);
            const clearableCls = isClearValues ? 'clearable' : 'not-clearable';
            const hide = () => setShow(false);
            return _react.default.createElement("form", {
              onSubmit: handleSubmit,
              autoComplete: "off",
              className: "search-operations"
            }, _react.default.createElement("div", {
              className: "content-search"
            }, _react.default.createElement(_appIcon.AppIconButton, {
              icon: "search",
              className: "icon-search",
              type: "submit",
              onClick: handleSubmit
            }), _react.default.createElement("input", {
              type: type,
              placeholder: placeholder ?? texts.search,
              value: state.search,
              name: "search",
              onChange: handleChange
            }), _react.default.createElement("div", {
              className: "icon-buttons"
            }, searchableList && _react.default.createElement(_appIcon.AppIconButton, {
              icon: "list-search",
              className: "list-search",
              onClick: handleShow,
              ref: button
            }), _react.default.createElement(_appIcon.AppIconButton, {
              icon: "close",
              className: `close ${clearableCls}`,
              type: "button",
              onClick: handleClear
            }))), _react.default.createElement("fieldset", {
              className: cls,
              ref: ref
            }, _react.default.createElement("div", {
              className: "content-title"
            }, _react.default.createElement("span", null, dialogTitle), _react.default.createElement(_appIcon.AppIconButton, {
              icon: "close",
              onClick: hide
            })), _react.default.createElement("div", {
              className: "content-inputs"
            }, date && _react.default.createElement(_dates.Dates, {
              handleChange: handleChange
            }), element, isFilter ? output : null), _react.default.createElement(_components.Button, {
              label: texts.accept,
              className: "btn btn-primary",
              type: "submit"
            })));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Search",
        "name": "Search"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Search') && _export("Search", Search = require ? require('./index').Search : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiU2VhcmNoQ29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlU2VhcmNoQ29udGV4dCIsInVzZUNvbnRleHQiLCJSZWFjdCIsIl91dGlscyIsIl9jb250ZXh0IiwiX2Zvcm0iLCJEYXRlcyIsImhhbmRsZUNoYW5nZSIsInN0YXRlIiwidGV4dHMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSW5wdXQiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwic3RhcnREYXRlIiwibWF4IiwiZ2V0Q3VycmVudERhdGUiLCJvbkNoYW5nZSIsImxhYmVsIiwiZnJvbSIsImVuZERhdGUiLCJ0byIsIl92aWV3IiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzIiwiU2VhcmNoIiwicHJvcHMiLCJkaWFsb2dUaXRsZSIsImZpbHRlciIsImluaXRWYWx1ZXMiLCJjaGlsZHJlbiIsIm9uU2VhcmNoIiwib25DbGVhciIsImlzQ2xlYXIiLCJwbGFjZWhvbGRlciIsImRhdGUiLCJzZWFyY2hhYmxlTGlzdCIsInJlZiIsInVzZVJlZiIsImJ1dHRvbiIsImluaXRpYWxTdGF0ZSIsIk9iamVjdCIsImFzc2lnbiIsInNlYXJjaCIsInJlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRTdGF0ZSIsInVzZVN0YXRlIiwic2hvdyIsInNldFNob3ciLCJ1c2VFZmZlY3QiLCJoYW5kbGVDbGljayIsImV2ZW50IiwiY3VycmVudCIsImlzU2FtZU5vZGUiLCJjb21wb3NlZFBhdGgiLCJpc0FDaGlsZHJlbiIsImNvbnRhaW5zIiwiaXN0QnV0dG9uIiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImlzQ2hpbGRyZW5CdXR0b24iLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiUHJvdmlkZXIiLCJWaWV3IiwiZWxlbWVudCIsImRlZmF1bHRQcm9wcyIsIl9jb21wb25lbnRzIiwiX2RhdGVzIiwiX2FwcEljb24iLCJoYW5kbGVTaG93IiwiY2xzIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVDbGVhciIsInN0b3BQcm9wYWdhdGlvbiIsImlzRmlsdGVyIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwib3V0cHV0IiwibWFwIiwiaXRlbSIsImRlZmF1bHQiLCJrZXkiLCJpZCIsImlkZW50aWZpZXIiLCJpc0NsZWFyVmFsdWVzIiwia2V5cyIsInNvbWUiLCJjbGVhcmFibGVDbHMiLCJoaWRlIiwib25TdWJtaXQiLCJhdXRvQ29tcGxldGUiLCJBcHBJY29uQnV0dG9uIiwiaWNvbiIsIm9uQ2xpY2siLCJCdXR0b24iLCJhY2NlcHQiXSwic291cmNlcyI6WyIvY29kZS90cy9jb250ZXh0LnRzeCIsIi9jb2RlL3RzL2RhdGVzLnRzeCIsIi9jb2RlL3RzL2luZGV4LnRzeCIsIi9jb2RlL3RzL3ZpZXcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFTyxNQUFNQyxhQUFhLEdBQUFDLE9BQUEsQ0FBQUQsYUFBQSxHQUFpQixJQUFBRixNQUFBLENBQUFJLGFBQWEsRUFBQyxFQUFHLENBQUM7VUFDdEQsTUFBTUMsZ0JBQWdCLEdBQWNBLENBQUEsS0FBVyxJQUFBTCxNQUFBLENBQUFNLFVBQVUsRUFBQ0osYUFBYSxDQUFDO1VBQUNDLE9BQUEsQ0FBQUUsZ0JBQUEsR0FBQUEsZ0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSGhGLElBQUFFLEtBQUEsR0FBQU4sT0FBQTtVQUNBLElBQUFPLE1BQUEsR0FBQVAsT0FBQTtVQUNBLElBQUFRLFFBQUEsR0FBQVIsT0FBQTtVQUNBLElBQUFTLEtBQUEsR0FBQVQsT0FBQTtVQUNNLFNBQVVVLEtBQUtBLENBQUM7WUFBRUM7VUFB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