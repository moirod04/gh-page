System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/kernel@0.1.9/core", "@jadmin/ui@1.0.0/api", "pragmate-ui@0.1.2/form", "@jadmin/ui@1.0.0/utils", "pragmate-ui@0.1.2/empty", "pragmate-ui@0.1.2/icons", "pragmate-ui@0.1.2/perfect-scrollbar", "pragmate-ui@0.1.2/components"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, Controller, JView, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    JView: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_beyondJsKernel019Core) {
      dependency_3 = _beyondJsKernel019Core;
    }, function (_jadminUi100Api) {
      dependency_4 = _jadminUi100Api;
    }, function (_pragmateUi012Form) {
      dependency_5 = _pragmateUi012Form;
    }, function (_jadminUi100Utils) {
      dependency_6 = _jadminUi100Utils;
    }, function (_pragmateUi012Empty) {
      dependency_7 = _pragmateUi012Empty;
    }, function (_pragmateUi012Icons) {
      dependency_8 = _pragmateUi012Icons;
    }, function (_pragmateUi012PerfectScrollbar) {
      dependency_9 = _pragmateUi012PerfectScrollbar;
    }, function (_pragmateUi012Components) {
      dependency_10 = _pragmateUi012Components;
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
          "vspecifier": "@jadmin/ui@1.0.0/jview"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/kernel/core', dependency_3], ['@jadmin/ui/api', dependency_4], ['pragmate-ui/form', dependency_5], ['@jadmin/ui/utils', dependency_6], ['pragmate-ui/empty', dependency_7], ['pragmate-ui/icons', dependency_8], ['pragmate-ui/perfect-scrollbar', dependency_9], ['pragmate-ui/components', dependency_10]]);
      brequire('@beyond-js/kernel/styles').styles.register('@jadmin/ui@1.0.0/jview');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 2788989128,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useJViewContext = exports.JViewContext = void 0;
          var _react = require("react");
          const JViewContext = exports.JViewContext = (0, _react.createContext)({});
          const useJViewContext = () => (0, _react.useContext)(JViewContext);
          exports.useJViewContext = useJViewContext;
        }
      });

      /****************************
      INTERNAL MODULE: ./controller
      ****************************/

      ims.set('./controller', {
        hash: 3173948521,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = Controller;
          var _core = require("@beyond-js/kernel/core");
          var _api = require("@jadmin/ui/api");
          /*bundle*/
          function Controller(props) {
            const events = new _core.Events({
              bind: this
            });
            const triggerEvent = (event = "change") => events.trigger(event);
            /*
             * {total}  int total rows registries.
             */
            const {
              total,
              rows,
              action
            } = props;
            let current = props.current ? props.current : 1;
            let entries = props.entries ? props.entries : [];
            Object.defineProperty(this, "ready", {
              get: () => !!entries && !!total && !!rows
            });
            let pages;
            if (total <= rows) pages = 1;else pages = Math.ceil(total / rows);
            let pager;
            Object.defineProperty(this, "pages", {
              get: () => pages
            });
            Object.defineProperty(this, "pager", {
              get: () => pager
            });
            Object.defineProperty(this, "rows", {
              get: () => rows
            });
            Object.defineProperty(this, "total", {
              get: () => total
            });
            Object.defineProperty(this, "current", {
              get: () => current,
              set: value => current = value
            });
            Object.defineProperty(this, "entries", {
              get: () => entries.slice(current - 1, current * rows)
            });
            let fetching;
            Object.defineProperty(this, "fetching", {
              get: () => fetching
            });
            const caller = new _api.JCall();
            const ajaxCall = async next => {
              const response = await caller.get(action, {
                next: next,
                limit: rows
              });
              if (response.status !== "ok" || !response.data) {
                console.warn("there is no data");
                return [];
              }
              return response.data;
            };
            /*
             * Este metodo espera recibir la data de la llamada o del metodo que ejecuta
             *
             * @param page
             * @param entries
             * @returns {Promise<void>}
             */
            this.getPage = async (page, entries) => {
              fetching = true;
              triggerEvent();
              pager = false;
              if (page < current) {
                current = page;
                if (props.onPrev && typeof props.onPrev === 'function') {
                  pager = true;
                  await props.onPrev(page);
                }
                ;
                fetching = false;
                triggerEvent();
                return;
              }
              const next = rows * current;
              const localItems = entries.length;
              if (localItems > next) {
                current = page;
                fetching = false;
                triggerEvent();
                return;
              }
              const call = props.onNext ?? ajaxCall;
              const data = await call(next, page);
              entries.push(...data);
              current = page;
              pager = true;
              fetching = false;
              triggerEvent();
            };
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./dates
      ***********************/

      ims.set('./dates', {
        hash: 1369734934,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Dates = Dates;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _utils = require("@jadmin/ui/utils");
          function Dates({
            values,
            error,
            handleChange
          }) {
            return _react.default.createElement("div", {
              className: "container-date"
            }, _react.default.createElement(_form.Input, {
              type: "date",
              className: "form-control",
              value: values.startDate,
              name: "startDate",
              max: (0, _utils.getCurrentDate)(),
              hasError: !!error?.date,
              errorMessage: error?.date,
              label: "Desde",
              onChange: handleChange
            }), _react.default.createElement(_form.Input, {
              type: "date",
              className: "form-control form-control-end",
              value: values.endDate,
              max: (0, _utils.getCurrentDate)(),
              hasError: !!error?.date,
              label: "hasta",
              errorMessage: error?.date,
              onChange: handleChange,
              name: "endDate"
            }));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./jview
      ***********************/

      ims.set('./jview', {
        hash: 3637632020,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.JView = JView;
          var _react = require("react");
          var _controller = require("./controller");
          var _context = require("./context");
          var _view = require("./view");
          /*bundle*/
          function JView(props) {
            const {
              rows,
              onPrev,
              onNext,
              action
            } = props;
            const propsController = {
              total: props.total,
              rows,
              action,
              current: props.current,
              entries: props.entries,
              onPrev,
              onNext
            };
            const [state, setState] = (0, _react.useState)({});
            let [total, setTotal] = (0, _react.useState)(props.total);
            let [entries, setEntries] = (0, _react.useState)(props.entries);
            const [current, setCurrent] = (0, _react.useState)(props.currentPage ?? 1);
            const [pages, setPages] = (0, _react.useState)();
            (0, _react.useEffect)(() => {
              const update = (specs = {}) => {
                setState({
                  ...state,
                  ...specs,
                  controller
                });
                const page = typeof controller.current === "string" ? parseInt(controller.current) : controller.current;
                setCurrent(page);
              };
              const controller = new _controller.Controller(propsController);
              controller.bind("change", update);
              update();
              return () => controller.unbind("change", update);
            }, []);
            (0, _react.useEffect)(() => {
              if (props.total !== total) {
                setTotal(props.total);
                if (state.controller) state.controller.current = 1;
                setCurrent(1);
              }
              setTimeout(() => {
                if (props.currentPage) {
                  if (state?.controller) state.controller.current = props.currentPage;
                  const page = typeof props.currentPage === "string" ? parseInt(props.currentPage) : props.currentPage;
                  setCurrent(page);
                }
              }, 500);
              setEntries(props.entries);
            }, [props.total, props.entries, props.currentPage]);
            if (!state.controller) return null;
            const value = {
              ...props,
              state,
              props,
              current,
              pages,
              total,
              entries,
              setPages
            };
            return _react.default.createElement(_context.JViewContext.Provider, {
              value: value
            }, _react.default.createElement(_view.View, null));
          }
          JView.defaultProps = {
            scroll: false,
            animation: false
          };
        }
      });

      /***********************
      INTERNAL MODULE: ./pager
      ***********************/

      ims.set('./pager', {
        hash: 368701377,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Pager = Pager;
          var _react = require("react");
          var _context = require("./context");
          function Pager() {
            const {
              state,
              entries,
              current,
              pages
            } = (0, _context.useJViewContext)();
            const pagesShowed = 4;
            const navigate = event => {
              const target = event.currentTarget;
              const {
                page
              } = target.dataset;
              state.controller.getPage(page ?? parseInt(page), entries);
            };
            const output = [];
            let middle, last, first;
            if (pages <= 1) return null;
            if (pages > 1 && pages >= current) {
              middle = Math.ceil(pagesShowed / 2);
              last = current + middle <= pages ? current + middle : pages;
              first = current > middle ? current - middle : 1;
            }
            for (let i = first; i <= last; ++i) {
              let cls = "pager-item";
              if (i === current) cls += " item-current";
              output.push(_react.default.createElement("li", {
                className: cls,
                "data-page": i,
                key: `item-${i}`,
                onClick: navigate
              }, i));
            }
            if (pages > 1 && current > 2) {
              output.unshift(_react.default.createElement("li", {
                key: "first",
                "data-page": 1,
                onClick: navigate,
                className: "pager-item"
              }, "<<"));
            }
            if (current !== pages && pages > 2 && current !== pages - 1 && current + 2 !== pages) {
              output.push(_react.default.createElement("li", {
                key: "last",
                "data-page": pages,
                onClick: navigate,
                className: "pager-item"
              }, pages));
            }
            return _react.default.createElement("div", {
              className: "jview-component-pager"
            }, _react.default.createElement("ul", null, output));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./rows
      **********************/

      ims.set('./rows', {
        hash: 1587702636,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Rows = Rows;
          var _react = require("react");
          var _empty = require("pragmate-ui/empty");
          var _context = require("./context");
          function Rows() {
            const {
              total,
              rows,
              entries,
              current,
              state,
              rowProps,
              row,
              isSearch,
              setPages
            } = (0, _context.useJViewContext)();
            (0, _react.useEffect)(() => {
              if (total <= rows) setPages(1);else setPages(Math.ceil(total / rows));
            }, [total, rows]);
            let cropStart = current === 1 ? 0 : (current - 1) * rows;
            const pageEntries = state?.controller?.pager ? entries : entries.slice(cropStart, cropStart + rows);
            const Row = row;
            const output = (0, _react.useMemo)(() => {
              const showedEntries = !!pageEntries.length ? pageEntries : entries;
              return showedEntries.map((item, i) => {
                return _react.default.createElement(Row, {
                  item: item,
                  index: i,
                  key: `${i}-${current}`,
                  ...rowProps
                });
              });
            }, [pageEntries]);
            const text = isSearch ? "No hay elementos en tu busqueda" : "No hay elementos para mostrar";
            return _react.default.createElement(_react.default.Fragment, null, output.length ? _react.default.createElement("div", {
              className: "card"
            }, output) : _react.default.createElement(_empty.Empty, {
              text: text,
              icon: "circle-exclamation"
            }));
          }
        }
      });

      /************************
      INTERNAL MODULE: ./search
      ************************/

      ims.set('./search', {
        hash: 3064055749,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Search = Search;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _dates = require("./dates");
          var _context = require("./context");
          function Search() {
            const {
              handleSearch,
              handleClear,
              date,
              initValues,
              isSearch
            } = (0, _context.useJViewContext)();
            const init = Object.assign({
              search: "",
              startDate: "",
              endDate: ""
            }, initValues ?? {});
            const [values, setValues] = (0, _react.useState)(init);
            const [error, setError] = (0, _react.useState)({});
            const handleChange = event => {
              const {
                name,
                value
              } = event.currentTarget;
              setValues({
                ...values,
                [name]: value
              });
            };
            const {
              search,
              startDate,
              endDate
            } = values;
            const clearSearch = () => {
              const specs = {};
              Object.keys(init).forEach(item => {
                specs[item] = '';
              });
              setValues({
                ...specs
              });
              setError({});
              handleClear && handleClear();
            };
            (0, _react.useEffect)(() => {
              return () => {
                setValues({
                  ...init
                });
              };
            }, []);
            const handleSubmit = event => {
              event.preventDefault();
              if (!search) return;
              const firstDate = new Date(startDate).getTime();
              const finallyDate = new Date(endDate).getTime();
              if (firstDate > finallyDate && date) {
                setError({
                  date: "La fecha de inicio no puede ser mayor a la fecha de fin"
                });
                return;
              }
              if (date) handleSearch && handleSearch(event, search.trim(), values);else handleSearch && handleSearch(event, search.trim());
            };
            const disabled = {};
            if (!search) disabled.disabled = true;
            const cls = date ? "date form-group-jview" : "form-group-jview";
            return _react.default.createElement("form", {
              onSubmit: handleSubmit,
              className: cls
            }, date && _react.default.createElement(_dates.Dates, {
              values: values,
              error: error,
              handleChange: handleChange
            }), _react.default.createElement("div", {
              id: "search-box"
            }, _react.default.createElement("div", {
              id: "search-form"
            }, _react.default.createElement("input", {
              id: "search-text",
              type: "search",
              className: "form-field",
              name: "search",
              autoComplete: "off",
              value: values.search,
              placeholder: "Buscar",
              onChange: handleChange
            }), (search || isSearch) && _react.default.createElement(_icons.IconButton, {
              icon: "close",
              className: date && "date",
              onClick: clearSearch
            }), _react.default.createElement("button", {
              id: "search-button",
              type: "submit"
            }, _react.default.createElement("span", null, "Buscar")))));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 2892264546,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**********************
      INTERNAL MODULE: ./view
      **********************/

      ims.set('./view', {
        hash: 2040303599,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _perfectScrollbar = require("pragmate-ui/perfect-scrollbar");
          var _components = require("pragmate-ui/components");
          var _pager = require("./pager");
          var _search = require("./search");
          var _context = require("./context");
          var _rows = require("./rows");
          function View() {
            const {
              header,
              additionalElement,
              state,
              title,
              search,
              props,
              scroll,
              fetching,
              animation
            } = (0, _context.useJViewContext)();
            const Header = header;
            const AdditionalElement = additionalElement;
            let cls = state.controller.fetching || fetching ? "jview-component is-fetching" : "jview-component";
            cls += ` ${animation && "animate__animated animate__fadeInUp"}`;
            const Component = scroll ? _perfectScrollbar.ScrollContainer : "div";
            return _react.default.createElement(Component, {
              "data-perfect-scrollbar": "",
              "data-suppress-scroll-x": "true",
              className: "perfect-scrollbar-view"
            }, _react.default.createElement("div", {
              className: cls
            }, title && _react.default.createElement("h3", {
              className: "jida-table-title"
            }, title), _react.default.createElement("div", {
              className: "jview-component__header__content-search"
            }, AdditionalElement && _react.default.createElement(AdditionalElement, {
              ...props
            }), search && _react.default.createElement(_search.Search, null)), _react.default.createElement("div", {
              className: "jview-component__header"
            }, header && _react.default.createElement(Header, {
              ...props
            })), _react.default.createElement(_rows.Rows, null), _react.default.createElement(_pager.Pager, null), _react.default.createElement("div", {
              className: "jview-fetching"
            }, _react.default.createElement(_components.Spinner, {
              className: "jview-loading",
              color: "var(--primary)"
            }))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./jview",
        "from": "JView",
        "name": "JView"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'JView') && _export("JView", JView = require ? require('./jview').JView : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiSlZpZXdDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VKVmlld0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvcmUiLCJfYXBpIiwiQ29udHJvbGxlciIsInByb3BzIiwiZXZlbnRzIiwiRXZlbnRzIiwiYmluZCIsInRyaWdnZXJFdmVudCIsImV2ZW50IiwidHJpZ2dlciIsInRvdGFsIiwicm93cyIsImFjdGlvbiIsImN1cnJlbnQiLCJlbnRyaWVzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJwYWdlcyIsIk1hdGgiLCJjZWlsIiwicGFnZXIiLCJzZXQiLCJ2YWx1ZSIsInNsaWNlIiwiZmV0Y2hpbmciLCJjYWxsZXIiLCJKQ2FsbCIsImFqYXhDYWxsIiwibmV4dCIsInJlc3BvbnNlIiwibGltaXQiLCJzdGF0dXMiLCJkYXRhIiwiY29uc29sZSIsIndhcm4iLCJnZXRQYWdlIiwicGFnZSIsIm9uUHJldiIsImxvY2FsSXRlbXMiLCJsZW5ndGgiLCJjYWxsIiwib25OZXh0IiwicHVzaCIsIl9mb3JtIiwiX3V0aWxzIiwiRGF0ZXMiLCJ2YWx1ZXMiLCJlcnJvciIsImhhbmRsZUNoYW5nZSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSW5wdXQiLCJ0eXBlIiwic3RhcnREYXRlIiwibmFtZSIsIm1heCIsImdldEN1cnJlbnREYXRlIiwiaGFzRXJyb3IiLCJkYXRlIiwiZXJyb3JNZXNzYWdlIiwibGFiZWwiLCJvbkNoYW5nZSIsImVuZERhdGUiLCJfY29udHJvbGxlciIsIl9jb250ZXh0IiwiX3ZpZXciLCJKVmlldyIsInByb3BzQ29udHJvbGxlciIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsInNldFRvdGFsIiwic2V0RW50cmllcyIsInNldEN1cnJlbnQiLCJjdXJyZW50UGFnZSIsInNldFBhZ2VzIiwidXNlRWZmZWN0IiwidXBkYXRlIiwic3BlY3MiLCJjb250cm9sbGVyIiwicGFyc2VJbnQiLCJ1bmJpbmQiLCJzZXRUaW1lb3V0IiwiUHJvdmlkZXIiLCJWaWV3IiwiZGVmYXVsdFByb3BzIiwic2Nyb2xsIiwiYW5pbWF0aW9uIiwiUGFnZXIiLCJwYWdlc1Nob3dlZCIsIm5hdmlnYXRlIiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJvdXRwdXQiLCJtaWRkbGUiLCJsYXN0IiwiZmlyc3QiLCJpIiwiY2xzIiwia2V5Iiwib25DbGljayIsInVuc2hpZnQiLCJfZW1wdHkiLCJSb3dzIiwicm93UHJvcHMiLCJyb3ciLCJpc1NlYXJjaCIsImNyb3BTdGFydCIsInBhZ2VFbnRyaWVzIiwiUm93IiwidXNlTWVtbyIsInNob3dlZEVudHJpZXMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ0ZXh0IiwiRnJhZ21lbnQiLCJFbXB0eSIsImljb24iLCJfaWNvbnMiLCJfZGF0ZXMiLCJTZWFyY2giLCJoYW5kbGVTZWFyY2giLCJoYW5kbGVDbGVhciIsImluaXRWYWx1ZXMiLCJpbml0IiwiYXNzaWduIiwic2VhcmNoIiwic2V0VmFsdWVzIiwic2V0RXJyb3IiLCJjbGVhclNlYXJjaCIsImtleXMiLCJmb3JFYWNoIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJmaXJzdERhdGUiLCJEYXRlIiwiZ2V0VGltZSIsImZpbmFsbHlEYXRlIiwidHJpbSIsImRpc2FibGVkIiwib25TdWJtaXQiLCJpZCIsImF1dG9Db21wbGV0ZSIsInBsYWNlaG9sZGVyIiwiSWNvbkJ1dHRvbiIsIl9wZXJmZWN0U2Nyb2xsYmFyIiwiX2NvbXBvbmVudHMiLCJfcGFnZXIiLCJfc2VhcmNoIiwiX3Jvd3MiLCJoZWFkZXIiLCJhZGRpdGlvbmFsRWxlbWVudCIsInRpdGxlIiwiSGVhZGVyIiwiQWRkaXRpb25hbEVsZW1lbnQiLCJDb21wb25lbnQiLCJTY3JvbGxDb250YWluZXIiLCJTcGlubmVyIiwiY29sb3IiXSwic291cmNlcyI6WyIvY29kZS90cy9jb250ZXh0LnRzeCIsIi9jb2RlL3RzL2NvbnRyb2xsZXIudHMiLCIvY29kZS90cy9kYXRlcy50c3giLCIvY29kZS90cy9qdmlldy50c3giLCIvY29kZS90cy9wYWdlci50c3giLCIvY29kZS90cy9yb3dzLnRzeCIsIi9jb2RlL3RzL3NlYXJjaC50c3giLCIvdHlwZXMudHMiLCIvY29kZS90cy92aWV3LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBR08sTUFBTUMsWUFBWSxHQUFBQyxPQUFBLENBQUFELFlBQUEsR0FBb0IsSUFBQUYsTUFBQSxDQUFBSSxhQUFhLEVBQUMsRUFBRyxDQUFDO1VBQ3hELE1BQU1DLGVBQWUsR0FBaUJBLENBQUEsS0FBYyxJQUFBTCxNQUFBLENBQUFNLFVBQVUsRUFBQ0osWUFBWSxDQUFDO1VBQUNDLE9BQUEsQ0FBQUUsZUFBQSxHQUFBQSxlQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pwRixJQUFBRSxLQUFBLEdBQUFOLE9BQUE7VUFDQSxJQUFBTyxJQUFBLEdBQUFQLE9BQUE7VUFHTztVQUFVLFNBQ1JRLFVBQVVBLENBQUNDLEtBQXNCO1lBQ3RDLE1BQU1DLE1BQU0sR0FBVyxJQUFJSixLQUFBLENBQUFLLE1BQU0sQ0FBQztjQUFDQyxJQUFJLEVBQUU7WUFBSSxDQUFDLENBQUM7WUFDL0MsTUFBTUMsWUFBWSxHQUFHQSxDQUFDQyxLQUFBLEdBQWdCLFFBQVEsS0FBVUosTUFBTSxDQUFDSyxPQUFPLENBQUNELEtBQUssQ0FBQztZQUM3RTs7O1lBR0EsTUFBTTtjQUFDRSxLQUFLO2NBQUVDLElBQUk7Y0FBRUM7WUFBTSxDQUFDLEdBQUdULEtBQUs7WUFDbkMsSUFBSVUsT0FBTyxHQUFXVixLQUFLLENBQUNVLE9BQU8sR0FBR1YsS0FBSyxD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