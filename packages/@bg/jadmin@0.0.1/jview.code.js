System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/kernel@0.1.9/core", "@bg/jadmin@0.0.1/api", "@jadmin/ui@1.0.0/hooks", "pragmate-ui@0.1.2/empty", "pragmate-ui@0.1.2/components"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Controller, JView, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    JView: void 0,
    View: void 0
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
    }, function (_bgJadmin001Api) {
      dependency_4 = _bgJadmin001Api;
    }, function (_jadminUi100Hooks) {
      dependency_5 = _jadminUi100Hooks;
    }, function (_pragmateUi012Empty) {
      dependency_6 = _pragmateUi012Empty;
    }, function (_pragmateUi012Components) {
      dependency_7 = _pragmateUi012Components;
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
          "vspecifier": "@bg/jadmin@0.0.1/jview",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/kernel/core', dependency_3], ['@bg/jadmin/api', dependency_4], ['@jadmin/ui/hooks', dependency_5], ['pragmate-ui/empty', dependency_6], ['pragmate-ui/components', dependency_7]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/jadmin@0.0.1/jview.code');
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
        hash: 1926642991,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = Controller;
          var _core = require("@beyond-js/kernel/core");
          var _api = require("@bg/jadmin/api");
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

      /**********************
      INTERNAL MODULE: ./grid
      **********************/

      ims.set('./grid', {
        hash: 2929663970,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Grid = Grid;
          var React = require("react");
          function Grid({
            output
          }) {
            return React.createElement("div", {
              className: "content-grid"
            }, output);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1925923784,
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
          var _beyond_context = require("beyond_context");
          var _hooks = require("@jadmin/ui/hooks");
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
            const [ready, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            (0, _react.useEffect)(() => {
              const update = (specs = {}) => {
                setState({
                  ...state,
                  ...specs,
                  controller
                });
                const page = typeof controller.current === 'string' ? parseInt(controller.current) : controller.current;
                setCurrent(page);
              };
              const controller = new _controller.Controller(propsController);
              controller.bind('change', update);
              update();
              return () => controller.unbind('change', update);
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
                  const page = typeof props.currentPage === 'string' ? parseInt(props.currentPage) : props.currentPage;
                  setCurrent(page);
                }
              }, 500);
              setEntries(props.entries);
            }, [props.total, props.entries, props.currentPage]);
            if (!state.controller || !ready) return null;
            const value = {
              ...props,
              state,
              props,
              current,
              pages,
              total,
              entries,
              setPages,
              loading: props.loading,
              texts
            };
            return _react.default.createElement(_context.JViewContext.Provider, {
              value: value
            }, _react.default.createElement(_view.View, null));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 1035077996,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemTable = ItemTable;
          var _react = require("react");
          var _context = require("./context");
          function ItemTable({
            item
          }) {
            const {
              keys
            } = (0, _context.useJViewContext)();
            const entries = keys.map(key => _react.default.createElement("td", {
              key: key
            }, _react.default.createElement("span", null, item[key])));
            return _react.default.createElement("tr", null, entries);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./pager
      ***********************/

      ims.set('./pager', {
        hash: 685982207,
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
            const pagesShowed = 2;
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
            if (pages > 1 && current !== pages) {
              output.splice(output.length - 1, 0, _react.default.createElement("li", {
                "data-page": current + 1,
                className: "pager-item first-item",
                key: `item-${current + 1}-prev`,
                onClick: navigate
              }, ">"));
            }
            if (pages > 1 && current > 1) {
              output.splice(1, 0, _react.default.createElement("li", {
                "data-page": current - 1,
                className: "pager-item first-item",
                key: `item-${current - 1}-next`,
                onClick: navigate
              }, "<"));
            }
            if (pages > 1 && current > 2) {
              output.unshift(_react.default.createElement("li", {
                key: "first",
                "data-page": 1,
                onClick: navigate,
                className: "pager-item first-item"
              }, "<<"));
            }
            if (current !== pages && pages > 2 && current !== pages - 1 && current + 2 !== pages) {
              output.push(_react.default.createElement("li", {
                key: "last",
                "data-page": pages,
                onClick: navigate,
                className: "pager-item last-item"
              }, pages));
            }
            return _react.default.createElement("div", {
              className: "jview-component-pager"
            }, _react.default.createElement("ul", null, output));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./table
      ***********************/

      ims.set('./table', {
        hash: 3616570210,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Table = Table;
          var React = require("react");
          function Table({
            heads,
            output
          }) {
            return React.createElement("table", {
              className: "table responsive-table"
            }, React.createElement("thead", null, React.createElement("tr", null, heads)), React.createElement("tbody", null, output));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 3470538478,
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
        hash: 543145432,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _context = require("./context");
          var _pager = require("./pager");
          var _item = require("./item");
          var _table = require("./table");
          var _empty = require("pragmate-ui/empty");
          var _grid = require("./grid");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function View() {
            const {
              dataHead,
              entries,
              title,
              total,
              rows,
              setPages,
              current,
              state,
              item,
              rowProps,
              loading,
              view,
              texts
            } = (0, _context.useJViewContext)();
            const heads = dataHead && dataHead.map(item => {
              return _react.default.createElement("th", {
                key: item.id
              }, _react.default.createElement("span", null, item.label));
            });
            (0, _react.useEffect)(() => {
              if (total <= rows) setPages(1);else setPages(Math.ceil(total / rows));
            }, [total, rows]);
            let cropStart = current === 1 ? 0 : (current - 1) * rows;
            const pageEntries = state?.controller?.pager ? entries : entries.slice(cropStart, cropStart + rows);
            const Item = item ?? _item.ItemTable;
            const from = (current - 1) * rows + 1;
            const to = from + rows - 1;
            const control = (0, _react.useMemo)(() => {
              const showedEntries = !!pageEntries.length ? pageEntries : entries;
              const output = showedEntries.map((item, index) => _react.default.createElement(Item, {
                item: item,
                key: index,
                ...rowProps,
                index: index
              }));
              const entry = view === 'grid' ? _react.default.createElement(_grid.Grid, {
                output: output
              }) : _react.default.createElement(_table.Table, {
                heads: heads,
                output: output
              });
              return entry;
            }, [pageEntries]);
            if (!entries.length) return _react.default.createElement(_empty.Empty, {
              className: "empty-jview",
              text: texts.empty,
              icon: "circle-exclamation"
            });
            const cls = loading ? 'container-table container-table-fetching ' : 'container-table';
            const showing = `${texts.showing} ${from} ${texts.to} ${to > total ? total : to} ${texts.of} ${total} ${texts.items}`;
            return _react.default.createElement("div", {
              className: cls
            }, title && _react.default.createElement("h4", null, title, ":"), control, _react.default.createElement("div", {
              className: "content-pager"
            }, showing, _react.default.createElement(_pager.Pager, null)), loading && _react.default.createElement("div", {
              className: "jview-fetching"
            }, _react.default.createElement(_components.Spinner, {
              className: "spinner"
            })));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./index",
        "from": "JView",
        "name": "JView"
      }, {
        "im": "./view",
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
        (require || prop === 'JView') && _export("JView", JView = require ? require('./index').JView : value);
        (require || prop === 'View') && _export("View", View = require ? require('./view').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiSlZpZXdDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VKVmlld0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvcmUiLCJfYXBpIiwiQ29udHJvbGxlciIsInByb3BzIiwiZXZlbnRzIiwiRXZlbnRzIiwiYmluZCIsInRyaWdnZXJFdmVudCIsImV2ZW50IiwidHJpZ2dlciIsInRvdGFsIiwicm93cyIsImFjdGlvbiIsImN1cnJlbnQiLCJlbnRyaWVzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJwYWdlcyIsIk1hdGgiLCJjZWlsIiwicGFnZXIiLCJzZXQiLCJ2YWx1ZSIsInNsaWNlIiwiZmV0Y2hpbmciLCJjYWxsZXIiLCJKQ2FsbCIsImFqYXhDYWxsIiwibmV4dCIsInJlc3BvbnNlIiwibGltaXQiLCJzdGF0dXMiLCJkYXRhIiwiY29uc29sZSIsIndhcm4iLCJnZXRQYWdlIiwicGFnZSIsIm9uUHJldiIsImxvY2FsSXRlbXMiLCJsZW5ndGgiLCJjYWxsIiwib25OZXh0IiwicHVzaCIsIlJlYWN0IiwiR3JpZCIsIm91dHB1dCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJfY29udHJvbGxlciIsIl9jb250ZXh0IiwiX3ZpZXciLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MiLCJKVmlldyIsInByb3BzQ29udHJvbGxlciIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsInNldFRvdGFsIiwic2V0RW50cmllcyIsInNldEN1cnJlbnQiLCJjdXJyZW50UGFnZSIsInNldFBhZ2VzIiwicmVhZHkiLCJ0ZXh0cyIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidXNlRWZmZWN0IiwidXBkYXRlIiwic3BlY3MiLCJjb250cm9sbGVyIiwicGFyc2VJbnQiLCJ1bmJpbmQiLCJzZXRUaW1lb3V0IiwibG9hZGluZyIsImRlZmF1bHQiLCJQcm92aWRlciIsIlZpZXciLCJJdGVtVGFibGUiLCJpdGVtIiwia2V5cyIsIm1hcCIsImtleSIsIlBhZ2VyIiwicGFnZXNTaG93ZWQiLCJuYXZpZ2F0ZSIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwibWlkZGxlIiwibGFzdCIsImZpcnN0IiwiaSIsImNscyIsIm9uQ2xpY2siLCJzcGxpY2UiLCJ1bnNoaWZ0IiwiVGFibGUiLCJoZWFkcyIsIl9wYWdlciIsIl9pdGVtIiwiX3RhYmxlIiwiX2VtcHR5IiwiX2dyaWQiLCJfY29tcG9uZW50cyIsImRhdGFIZWFkIiwidGl0bGUiLCJyb3dQcm9wcyIsInZpZXciLCJpZCIsImxhYmVsIiwiY3JvcFN0YXJ0IiwicGFnZUVudHJpZXMiLCJJdGVtIiwiZnJvbSIsInRvIiwiY29udHJvbCIsInVzZU1lbW8iLCJzaG93ZWRFbnRyaWVzIiwiaW5kZXgiLCJlbnRyeSIsIkVtcHR5IiwidGV4dCIsImVtcHR5IiwiaWNvbiIsInNob3dpbmciLCJvZiIsIml0ZW1zIiwiU3Bpbm5lciJdLCJzb3VyY2VzIjpbIi9jb2RlL3RzL2NvbnRleHQudHN4IiwiL2NvZGUvdHMvY29udHJvbGxlci50cyIsIi9jb2RlL3RzL2dyaWQudHN4IiwiL2NvZGUvdHMvaW5kZXgudHN4IiwiL2NvZGUvdHMvaXRlbS50c3giLCIvY29kZS90cy9wYWdlci50c3giLCIvY29kZS90cy90YWJsZS50c3giLCIvdHlwZXMudHMiLCIvY29kZS90cy92aWV3LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFHTyxNQUFNQyxZQUFZLEdBQUFDLE9BQUEsQ0FBQUQsWUFBQSxHQUFvQixJQUFBRixNQUFBLENBQUFJLGFBQWEsRUFBQyxFQUFHLENBQUM7VUFDeEQsTUFBTUMsZUFB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