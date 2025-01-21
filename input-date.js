System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.1.2/icons", "pragmate-ui@0.1.2/components", "pragmate-ui@0.1.2/form"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, InputDate, __beyond_pkg, hmr;
  _export("InputDate", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi012Icons) {
      dependency_3 = _pragmateUi012Icons;
    }, function (_pragmateUi012Components) {
      dependency_4 = _pragmateUi012Components;
    }, function (_pragmateUi012Form) {
      dependency_5 = _pragmateUi012Form;
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
          "vspecifier": "sgs-workflow@1.0.0/input-date"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/form', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('sgs-workflow@1.0.0/input-date');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 1289358265,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useInputDateContext = exports.InputDateContext = void 0;
          var _react = require("react");
          const InputDateContext = exports.InputDateContext = _react.default.createContext({});
          const useInputDateContext = () => _react.default.useContext(InputDateContext);
          exports.useInputDateContext = useInputDateContext;
        }
      });

      /***************************
      INTERNAL MODULE: ./icon-down
      ***************************/

      ims.set('./icon-down', {
        hash: 979641009,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.iconDown = exports.iconDate = void 0;
          const iconDown = exports.iconDown = {
            icon: `<g  aria-hidden="true" focusable="false" class="css-tj5bde-Svg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></g>`,
            viewBox: "0 0 20 20"
          };
          const iconDate = exports.iconDate = {
            icon: `<g id="Componente_150_1" data-name="Componente 150 – 1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path id="Trazado_11052" data-name="Trazado 11052" d="M4,.5a.5.5,0,1,0-1,0V1H2A2,2,0,0,0,0,3V4H16V3a2,2,0,0,0-2-2H13V.5a.5.5,0,0,0-1,0V1H4ZM16,14V5H0v9a2,2,0,0,0,2,2H14A2,2,0,0,0,16,14ZM8.5,8.5V10H10a.5.5,0,0,1,0,1H8.5v1.5a.5.5,0,0,1-1,0V11H6a.5.5,0,0,1,0-1H7.5V8.5a.5.5,0,1,1,1,0Z" fill="#4c34ff"/></g>`,
            viewBox: "0 0 16 16"
          };
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1469394377,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InputDate = InputDate;
          var _react = require("react");
          var _context = require("./context");
          var _modalDate = require("./modal-date");
          var _icons = require("pragmate-ui/icons");
          var _useOurside = require("./use-ourside");
          var _iconDown = require("./icon-down");
          /* bundle */
          function InputDate({
            onFilter,
            name,
            dates
          }) {
            const [showModal, setShowModal] = _react.default.useState(false);
            const initialState = {
              fromDate: '',
              toDate: ''
            };
            const [dateRange, setDateRange] = _react.default.useState(dates ?? {
              fromDate: '',
              toDate: ''
            });
            _react.default.useEffect(() => {
              setDateRange(dates ?? initialState);
              return () => setDateRange(initialState);
            }, [dates]);
            const handleIconClick = () => setShowModal(!showModal);
            const onClose = () => setShowModal(false);
            const modalRef = (0, _useOurside.useOutsideClick)(onClose);
            const handleModalSave = (from, to) => {
              setDateRange({
                fromDate: from,
                toDate: to
              });
              setShowModal(false);
            };
            const fromParts = dateRange.fromDate.split('-');
            const from = dateRange.fromDate ? `${fromParts[2]}/${fromParts[1]}/${fromParts[0]}` : dateRange.fromDate;
            const toParts = dateRange.toDate.split('-');
            const to = dateRange.toDate ? `${toParts[2]}/${toParts[1]}/${toParts[0]}` : dateRange.toDate;
            const value = {
              handleModalSave,
              showModal,
              modalRef,
              onFilter,
              name,
              dates
            };
            const cls = `${showModal ? "active" : ""} container-input-date`;
            return _react.default.createElement(_context.InputDateContext.Provider, {
              value: value
            }, _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("div", {
              className: "date-show"
            }, _react.default.createElement("span", {
              translate: "no",
              className: "date-show__span"
            }, "Desde : ", from, " "), _react.default.createElement("span", {
              translate: "no",
              className: "date-show__span"
            }, "Hasta : ", to)), _react.default.createElement("div", {
              className: "modal-content",
              ref: modalRef
            }, _react.default.createElement(_modalDate.ModalDate, null), _react.default.createElement("button", {
              title: 'select',
              onClick: handleIconClick,
              className: "border-icon"
            }, _react.default.createElement(_icons.Icon, {
              className: "md",
              ..._iconDown.iconDown
            })))));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./modal-date
      ****************************/

      ims.set('./modal-date', {
        hash: 2645482837,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalDate = ModalDate;
          var _react = require("react");
          var _context = require("./context");
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          var _iconDown = require("./icon-down");
          function ModalDate() {
            const {
              handleModalSave,
              showModal,
              onFilter,
              name,
              dates
            } = (0, _context.useInputDateContext)();
            const [fromDate, setFromDate] = _react.default.useState(dates?.fromDate ?? '');
            const [toDate, setToDate] = _react.default.useState(dates.toDate ?? '');
            _react.default.useEffect(() => {
              setFromDate(dates?.fromDate ?? '');
              setToDate(dates.toDate ?? '');
            }, [dates]);
            const handleSave = () => {
              handleModalSave(fromDate, toDate);
              if (onFilter) onFilter({
                fromDate,
                toDate,
                name
              });
            };
            const dateSelectionFrom = event => setFromDate(event.target.value);
            const dateSelectionTo = event => setToDate(event.target.value);
            const inputFrom = (0, _react.useRef)(null);
            const inputTo = (0, _react.useRef)(null);
            if (!showModal) return null;
            return _react.default.createElement("div", {
              className: 'container-modal'
            }, _react.default.createElement("div", {
              className: 'input-date'
            }, _react.default.createElement("label", {
              className: 'input-date__label'
            }, _react.default.createElement("strong", null, "Desde:")), _react.default.createElement("div", {
              className: "content-input"
            }, _react.default.createElement("input", {
              type: 'date',
              onChange: dateSelectionFrom,
              value: fromDate,
              className: 'input-date--element',
              ref: inputFrom
            }), _react.default.createElement("div", {
              className: "border-icon--date"
            }, _react.default.createElement(_icons.IconButton, {
              key: 'icon',
              ..._iconDown.iconDate,
              className: 'xs',
              onClick: () => inputFrom.current.showPicker()
            })))), _react.default.createElement("div", {
              className: 'input-date'
            }, _react.default.createElement("label", {
              className: 'input-date__label'
            }, _react.default.createElement("strong", null, "Hasta:")), _react.default.createElement("div", {
              className: "content-input"
            }, _react.default.createElement("input", {
              type: 'date',
              onChange: dateSelectionTo,
              value: toDate,
              className: 'input-date--element',
              ref: inputTo
            }), _react.default.createElement("div", {
              className: "border-icon--date"
            }, _react.default.createElement(_icons.IconButton, {
              key: 'icon',
              ..._iconDown.iconDate,
              className: 'xs',
              onClick: () => inputTo.current.showPicker()
            })))), _react.default.createElement(_components.Button, {
              onClick: handleSave,
              variant: 'primary'
            }, "Aceptar"));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 460524831,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./use-ourside
      *****************************/

      ims.set('./use-ourside', {
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
        "from": "InputDate",
        "name": "InputDate"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'InputDate') && _export("InputDate", InputDate = require ? require('./index').InputDate : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiSW5wdXREYXRlQ29udGV4dCIsImV4cG9ydHMiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUlucHV0RGF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiaWNvbkRvd24iLCJpY29uIiwidmlld0JveCIsImljb25EYXRlIiwiX2NvbnRleHQiLCJfbW9kYWxEYXRlIiwiX2ljb25zIiwiX3VzZU91cnNpZGUiLCJfaWNvbkRvd24iLCJJbnB1dERhdGUiLCJvbkZpbHRlciIsIm5hbWUiLCJkYXRlcyIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInVzZVN0YXRlIiwiaW5pdGlhbFN0YXRlIiwiZnJvbURhdGUiLCJ0b0RhdGUiLCJkYXRlUmFuZ2UiLCJzZXREYXRlUmFuZ2UiLCJ1c2VFZmZlY3QiLCJoYW5kbGVJY29uQ2xpY2siLCJvbkNsb3NlIiwibW9kYWxSZWYiLCJ1c2VPdXRzaWRlQ2xpY2siLCJoYW5kbGVNb2RhbFNhdmUiLCJmcm9tIiwidG8iLCJmcm9tUGFydHMiLCJzcGxpdCIsInRvUGFydHMiLCJ2YWx1ZSIsImNscyIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsImNsYXNzTmFtZSIsInRyYW5zbGF0ZSIsInJlZiIsIk1vZGFsRGF0ZSIsInRpdGxlIiwib25DbGljayIsIkljb24iLCJfY29tcG9uZW50cyIsInNldEZyb21EYXRlIiwic2V0VG9EYXRlIiwiaGFuZGxlU2F2ZSIsImRhdGVTZWxlY3Rpb25Gcm9tIiwiZXZlbnQiLCJ0YXJnZXQiLCJkYXRlU2VsZWN0aW9uVG8iLCJpbnB1dEZyb20iLCJ1c2VSZWYiLCJpbnB1dFRvIiwidHlwZSIsIm9uQ2hhbmdlIiwiSWNvbkJ1dHRvbiIsImtleSIsImN1cnJlbnQiLCJzaG93UGlja2VyIiwiQnV0dG9uIiwidmFyaWFudCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiY2FsbGJhY2siLCJoYW5kbGVDbGljayIsImlzU2FtZU5vZGUiLCJjdXJyZW50VGFyZ2V0IiwiY29tcG9zZWRQYXRoIiwiaXNBQ2hpbGRyZW4iLCJjb250YWlucyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwic291cmNlcyI6WyIvdHMvY29udGV4dC50cyIsIi90cy9pY29uLWRvd24udHMiLCIvdHMvaW5kZXgudHN4IiwiL3RzL21vZGFsLWRhdGUudHN4IiwiL3R5cGVzLnRzIiwiL3RzL3VzZS1vdXJzaWRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVPLE1BQU1DLGdCQUFnQixHQUFBQyxPQUFBLENBQUFELGdCQUFBLEdBQUdGLE1BQUEsQ0FBQUksT0FBSyxDQUFDQyxhQUFhLENBQUMsRUFBUyxDQUFDO1VBQ3ZELE1BQU1DLG1CQUFtQixHQUFHQSxDQUFBLEtBQU1OLE1BQUEsQ0FBQUksT0FBSyxDQUFDRyxVQUFVLENBQUNMLGdCQUFnQixDQUFDO1VBQUNDLE9BQUEsQ0FBQUcsbUJBQUEsR0FBQUEsbUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSHJFLE1BQU1FLFFBQVEsR0FBQUwsT0FBQSxDQUFBSyxRQUFBLEdBQUc7WUFDcEJDLElBQUksRUFBRSw2V0FBNlc7WUFDblhDLE9BQU8sRUFBRTtXQUNaO1VBR00sTUFBTUMsUUFBUSxHQUFBUixPQUFBLENBQUFRLFFBQUEsR0FBRztZQUNwQkYsSUFBSSxFQUFFLHViQUF1YjtZQUM3YkMsT0FBTyxFQUFFO1dBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVEQsSUFBQVYsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQVcsUUFBQSxHQUFBWCxPQUFBO1VBQ0EsSUFBQVksVUFBQSxHQUFBWixPQUFBO1VBQ0EsSUFBQWEsTUFBQSxHQUFBYixPQUFBO1VBRUEsSUFBQWMsV0FBQSxHQUFBZCxPQUFB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