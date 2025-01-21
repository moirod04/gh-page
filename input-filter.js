System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "sgs-workflow@1.0.0/wrappers", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.2/chips", "pragmate-ui@0.1.2/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, SearchInputFilter, __beyond_pkg, hmr;
  _export("SearchInputFilter", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_sgsWorkflow100Wrappers) {
      dependency_3 = _sgsWorkflow100Wrappers;
    }, function (_beyondJsKernel019Routing) {
      dependency_4 = _beyondJsKernel019Routing;
    }, function (_pragmateUi012Chips) {
      dependency_5 = _pragmateUi012Chips;
    }, function (_pragmateUi012Icons) {
      dependency_6 = _pragmateUi012Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@bg/jadmin", "0.0.1"], ["@bg/auth-api", "1.0.0"], ["@jadmin/ui", "1.0.0"], ["@bgroup/jview", "1.0.3"], ["@bgroup/helpers", "1.0.7"], ["@bgroup/wise-form", "0.0.4"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/bee", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/reactive", "1.1.14"], ["@bgroup/http-suite", "1.0.5"], ["chart.js", "4.4.1"], ["dayjs", "1.11.10"], ["dotenv", "16.4.4"], ["express", "4.18.2"], ["framer-motion", "10.18.0"], ["googleapis", "129.0.0"], ["javascript-time-ago", "2.5.10"], ["jsonwebtoken", "9.0.2"], ["mathjs", "12.4.1"], ["moment", "2.30.1"], ["perfect-scrollbar", "1.5.5"], ["pragmate-ui", "0.1.2"], ["prismjs", "1.29.0"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-google-recaptcha", "3.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["swiper", "11.0.6"], ["tippy.js", "6.3.7"], ["use-debounce", "10.0.0"], ["uuid", "9.0.1"], ["wise-form", "0.0.4"], ["@babel/core", "7.23.9"], ["@babel/preset-env", "7.23.9"], ["@babel/preset-typescript", "7.23.3"], ["@types/react", "18.2.55"], ["@types/react-dom", "18.2.19"], ["babel-jest", "29.7.0"], ["jest", "29.7.0"], ["ts-jest", "29.1.2"], ["sgs-workflow", "1.0.0"], ["sgs-workflow", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "sgs-workflow@1.0.0/input-filter"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['sgs-workflow/wrappers', dependency_3], ['@beyond-js/kernel/routing', dependency_4], ['pragmate-ui/chips', dependency_5], ['pragmate-ui/icons', dependency_6]]);
      brequire('@beyond-js/kernel/styles').styles.register('sgs-workflow@1.0.0/input-filter');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 728505991,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSearchInputContext = exports.SearchInputContext = void 0;
          var _react = require("react");
          const SearchInputContext = exports.SearchInputContext = _react.default.createContext({});
          const useSearchInputContext = () => _react.default.useContext(SearchInputContext);
          exports.useSearchInputContext = useSearchInputContext;
        }
      });

      /***************************
      INTERNAL MODULE: ./icon-down
      ***************************/

      ims.set('./icon-down', {
        hash: 429031287,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.iconDown = void 0;
          const iconDown = exports.iconDown = {
            icon: `<g  aria-hidden="true" focusable="false" class="css-tj5bde-Svg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></g>`,
            viewBox: "0 0 20 20"
          };
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 564292890,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SearchInputFilter = SearchInputFilter;
          var _react = require("react");
          var _context = require("./context");
          var _select = require("./select");
          var _input = require("./input");
          var _useOutside = require("./use-outside");
          var _wrappers = require("sgs-workflow/wrappers");
          var _routing = require("@beyond-js/kernel/routing");
          /* bundle */
          function SearchInputFilter(props) {
            const {
              onFilter,
              placeholder,
              listOptions,
              className,
              name,
              value: InputValue,
              selectValue
            } = props;
            const [show, setShow] = _react.default.useState(false);
            const [searchTerm, setSearchTerm] = _react.default.useState(InputValue ?? '');
            const [selectedIndex, setSelectedIndex] = _react.default.useState(0);
            const [filterCriteria, setFilterCriteria] = _react.default.useState(selectValue ?? '');
            const [selectedOption, setSelectedOption] = _react.default.useState('');
            _react.default.useEffect(() => {
              setSearchTerm(InputValue ?? '');
              setFilterCriteria(selectValue ?? '');
              return () => {
                setSearchTerm('');
                setFilterCriteria('');
              };
            }, [InputValue, selectValue]);
            _react.default.useEffect(() => {
              const reset = async () => {
                setSearchTerm('');
                setFilterCriteria('');
              };
              _wrappers.session.on("login", reset);
              _routing.routing.on("change", reset);
              return () => {
                _wrappers.session.off("login", reset);
                _routing.routing.off("change", reset);
              };
            }, []);
            const ref = (0, _useOutside.useOutsideClick)(() => setShow(false));
            const handleSearchChange = event => {
              event.stopPropagation();
              setSearchTerm(event.target.value);
            };
            const handlerValue = value => {
              if (!onFilter || typeof onFilter !== 'function' || !name || !searchTerm) return;
              onFilter({
                value: searchTerm,
                op: value,
                name
              });
              setShow(false);
              setSelectedIndex(0);
            };
            const handleCriteriaChange = event => {
              const {
                value
              } = event.currentTarget.dataset;
              event.stopPropagation();
              handlerValue(value);
            };
            const handleFilter = ({
              name
            }) => {
              if (!onFilter || typeof onFilter !== 'function' || !searchTerm || !filterCriteria || !name) return;
              onFilter({
                value: searchTerm,
                op: filterCriteria,
                name
              });
            };
            const cls = `${className ?? ''} container-search ${show ? "active" : ""}`;
            const value = {
              handleCriteriaChange,
              selectedOption,
              filterCriteria,
              handleFilter,
              placeholder,
              listOptions,
              handleSearchChange,
              name,
              searchTerm,
              setShow,
              show,
              ref,
              selectedIndex,
              handlerValue,
              setSelectedIndex
            };
            return _react.default.createElement(_context.SearchInputContext.Provider, {
              value: value
            }, _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement(_input.InputFilter, null), _react.default.createElement(_select.SelectCriteria, null)));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./input
      ***********************/

      ims.set('./input', {
        hash: 1773588742,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InputFilter = InputFilter;
          var _react = require("react");
          var _context = require("./context");
          var _chips = require("pragmate-ui/chips");
          function InputFilter() {
            const {
              searchTerm,
              handleSearchChange,
              selectedOption,
              placeholder,
              isShip
            } = (0, _context.useSearchInputContext)();
            const valuePlaceholder = placeholder ? placeholder : 'Search term';
            return _react.default.createElement("div", {
              className: "input-group--border"
            }, _react.default.createElement("input", {
              type: "text",
              className: "container-search__input-filter",
              value: searchTerm,
              onChange: handleSearchChange,
              placeholder: valuePlaceholder,
              autoComplete: "off"
            }), isShip && _react.default.createElement(_chips.Chip, {
              item: selectedOption,
              type: 'primary'
            }));
          }
        }
      });

      /************************
      INTERNAL MODULE: ./select
      ************************/

      ims.set('./select', {
        hash: 2528635906,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SelectCriteria = SelectCriteria;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("./context");
          var _iconDown = require("./icon-down");
          var _item = require("./select/item");
          function SelectCriteria() {
            const {
              listOptions,
              ref,
              show,
              setShow,
              setSelectedIndex,
              handlerValue,
              selectedIndex
            } = (0, _context.useSearchInputContext)();
            const listRef = (0, _react.useRef)(null);
            const selectedIndexRef = (0, _react.useRef)(null);
            const [ulStyles, setUlStyles] = (0, _react.useState)({});
            const output = listOptions.map((option, index) => _react.default.createElement(_item.Item, {
              item: option,
              key: option.value,
              index: index
            }));
            const handleShow = () => {
              setShow(!show);
              setSelectedIndex(0);
            };
            (0, _react.useEffect)(() => {
              selectedIndexRef.current = selectedIndex;
            }, [selectedIndex]);
            const handleKeyDown = event => {
              event.preventDefault();
              const keys = {
                ArrowDown: () => setSelectedIndex(prevIndex => (prevIndex + 1) % listOptions.length),
                ArrowUp: () => setSelectedIndex(prevIndex => prevIndex === 0 ? listOptions.length - 1 : (prevIndex - 1) % listOptions.length),
                Escape: handleShow,
                Enter: () => handlerValue(listOptions[selectedIndexRef.current].value)
              };
              if (!keys[event.key]) return;
              keys[event.key]();
            };
            (0, _react.useEffect)(() => {
              if (!show || !listRef.current || !ref.current) return;
              // Obtén la posición de .content-select
              const contentSelectRect = ref.current.getBoundingClientRect();
              // Calcula los estilos para el ul
              const styles = {
                position: 'fixed',
                top: `${contentSelectRect.bottom + 10}px`,
                left: `${contentSelectRect.left - 80}px`,
                width: `${contentSelectRect.width}px`
                // Puedes agregar más estilos si es necesario
              };
              // Aplica los estilos al ul
              setUlStyles(styles);
              // Enfoca el ul y añade el listener de teclado
              listRef.current.focus();
              listRef.current.addEventListener('keydown', handleKeyDown);
              const updatePosition = () => {
                if (!ref.current) return;
                const newRect = ref.current.getBoundingClientRect();
                setUlStyles(prevStyles => ({
                  ...prevStyles,
                  top: `${newRect.bottom}px`,
                  left: `${newRect.left - 80}px`
                }));
              };
              window.addEventListener('scroll', updatePosition);
              window.addEventListener('resize', updatePosition);
              return () => {
                if (!listRef.current) return;
                listRef.current.removeEventListener('keydown', handleKeyDown);
                window.removeEventListener('scroll', updatePosition);
                window.removeEventListener('resize', updatePosition);
              };
            }, [show]);
            const cls = `${!show ? 'hide' : ''}`;
            return _react.default.createElement("div", {
              className: 'content-select',
              ref: ref
            }, _react.default.createElement("ul", {
              className: cls,
              tabIndex: -1,
              ref: listRef,
              style: ulStyles
            }, output), _react.default.createElement("div", {
              onClick: handleShow,
              className: 'container-search__select'
            }, _react.default.createElement(_icons.Icon, {
              ..._iconDown.iconDown,
              className: 'bottom-icon'
            })));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./select/item
      *****************************/

      ims.set('./select/item', {
        hash: 3018247921,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _context = require("../context");
          function Item({
            item,
            index
          }) {
            const {
              selectedIndex,
              filterCriteria,
              handleCriteriaChange
            } = (0, _context.useSearchInputContext)();
            let cls = item.value === filterCriteria ? 'selected' : "";
            cls += ` ${selectedIndex === index ? "selectedKey" : ""}`;
            return _react.default.createElement("li", {
              className: cls,
              "data-value": item.value,
              onClick: handleCriteriaChange
            }, item.label);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 3090041964,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./use-outside
      *****************************/

      ims.set('./use-outside', {
        hash: 300722279,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useOutsideClick = useOutsideClick;
          var _react = require("react");
          function useOutsideClick(callback = () => {}) {
            const ref = (0, _react.useRef)(null);
            (0, _react.useEffect)(() => {
              const handleClick = event => {
                const {
                  current
                } = ref;
                const isSameNode = current === event.target || current === event.currentTarget || event.composedPath()[0] === current;
                const isAChildren = current?.contains(event.composedPath()[0]);
                if (!isSameNode && !isAChildren) callback();
              };
              document.addEventListener("click", handleClick);
              return () => document.removeEventListener("click", handleClick);
            }, []);
            return ref;
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "SearchInputFilter",
        "name": "SearchInputFilter"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'SearchInputFilter') && _export("SearchInputFilter", SearchInputFilter = require ? require('./index').SearchInputFilter : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiU2VhcmNoSW5wdXRDb250ZXh0IiwiZXhwb3J0cyIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlU2VhcmNoSW5wdXRDb250ZXh0IiwidXNlQ29udGV4dCIsImljb25Eb3duIiwiaWNvbiIsInZpZXdCb3giLCJfY29udGV4dCIsIl9zZWxlY3QiLCJfaW5wdXQiLCJfdXNlT3V0c2lkZSIsIl93cmFwcGVycyIsIl9yb3V0aW5nIiwiU2VhcmNoSW5wdXRGaWx0ZXIiLCJwcm9wcyIsIm9uRmlsdGVyIiwicGxhY2Vob2xkZXIiLCJsaXN0T3B0aW9ucyIsImNsYXNzTmFtZSIsIm5hbWUiLCJ2YWx1ZSIsIklucHV0VmFsdWUiLCJzZWxlY3RWYWx1ZSIsInNob3ciLCJzZXRTaG93IiwidXNlU3RhdGUiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInNlbGVjdGVkSW5kZXgiLCJzZXRTZWxlY3RlZEluZGV4IiwiZmlsdGVyQ3JpdGVyaWEiLCJzZXRGaWx0ZXJDcml0ZXJpYSIsInNlbGVjdGVkT3B0aW9uIiwic2V0U2VsZWN0ZWRPcHRpb24iLCJ1c2VFZmZlY3QiLCJyZXNldCIsInNlc3Npb24iLCJvbiIsInJvdXRpbmciLCJvZmYiLCJyZWYiLCJ1c2VPdXRzaWRlQ2xpY2siLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInRhcmdldCIsImhhbmRsZXJWYWx1ZSIsIm9wIiwiaGFuZGxlQ3JpdGVyaWFDaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImhhbmRsZUZpbHRlciIsImNscyIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsIklucHV0RmlsdGVyIiwiU2VsZWN0Q3JpdGVyaWEiLCJfY2hpcHMiLCJpc1NoaXAiLCJ2YWx1ZVBsYWNlaG9sZGVyIiwidHlwZSIsIm9uQ2hhbmdlIiwiYXV0b0NvbXBsZXRlIiwiQ2hpcCIsIml0ZW0iLCJfaWNvbnMiLCJfaWNvbkRvd24iLCJfaXRlbSIsImxpc3RSZWYiLCJ1c2VSZWYiLCJzZWxlY3RlZEluZGV4UmVmIiwidWxTdHlsZXMiLCJzZXRVbFN0eWxlcyIsIm91dHB1dCIsIm1hcCIsIm9wdGlvbiIsImluZGV4IiwiSXRlbSIsImtleSIsImhhbmRsZVNob3ciLCJjdXJyZW50IiwiaGFuZGxlS2V5RG93biIsInByZXZlbnREZWZhdWx0Iiwia2V5cyIsIkFycm93RG93biIsInByZXZJbmRleCIsImxlbmd0aCIsIkFycm93VXAiLCJFc2NhcGUiLCJFbnRlciIsImNvbnRlbnRTZWxlY3RSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwic3R5bGVzIiwicG9zaXRpb24iLCJ0b3AiLCJib3R0b20iLCJsZWZ0Iiwid2lkdGgiLCJmb2N1cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1cGRhdGVQb3NpdGlvbiIsIm5ld1JlY3QiLCJwcmV2U3R5bGVzIiwid2luZG93IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRhYkluZGV4Iiwic3R5bGUiLCJvbkNsaWNrIiwiSWNvbiIsImxhYmVsIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJjYWxsYmFjayIsImhhbmRsZUNsaWNrIiwiaXNTYW1lTm9kZSIsImNvbXBvc2VkUGF0aCIsImlzQUNoaWxkcmVuIiwiY29udGFpbnMiLCJkb2N1bWVudCJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzIiwiL3RzL2ljb24tZG93bi50cyIsIi90cy9pbmRleC50c3giLCIvdHMvaW5wdXQudHN4IiwiL3RzL3NlbGVjdC50c3giLCIvdHMvc2VsZWN0L2l0ZW0udHN4IiwiL3R5cGVzLnRzIiwiL3RzL3VzZS1vdXRzaWRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVPLE1B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