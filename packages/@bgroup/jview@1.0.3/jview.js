System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.1.2/empty", "@bgroup/jview@1.0.3/input", "@bgroup/jview@1.0.3/selection-panel", "pragmate-ui@0.1.2/components", "pragmate-ui@0.1.2/spinner", "@beyond-js/reactive@1.1.14/model", "@bgroup/jview@1.0.3/api", "pragmate-ui@0.1.2/icons", "pragmate-ui@0.1.2/form", "@beyond-js/kernel@0.1.9/routing", "uuid@9.0.1", "@bgroup/jview@1.0.3/loading-page", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, JView, Manager, Search, View, __beyond_pkg, hmr;
  _export({
    JView: void 0,
    Manager: void 0,
    Search: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi012Empty) {
      dependency_2 = _pragmateUi012Empty;
    }, function (_bgroupJview103Input) {
      dependency_3 = _bgroupJview103Input;
    }, function (_bgroupJview103SelectionPanel) {
      dependency_4 = _bgroupJview103SelectionPanel;
    }, function (_pragmateUi012Components) {
      dependency_5 = _pragmateUi012Components;
    }, function (_pragmateUi012Spinner) {
      dependency_6 = _pragmateUi012Spinner;
    }, function (_beyondJsReactive1114Model) {
      dependency_7 = _beyondJsReactive1114Model;
    }, function (_bgroupJview103Api) {
      dependency_8 = _bgroupJview103Api;
    }, function (_pragmateUi012Icons) {
      dependency_9 = _pragmateUi012Icons;
    }, function (_pragmateUi012Form) {
      dependency_10 = _pragmateUi012Form;
    }, function (_beyondJsKernel019Routing) {
      dependency_11 = _beyondJsKernel019Routing;
    }, function (_uuid2) {
      dependency_12 = _uuid2;
    }, function (_bgroupJview103LoadingPage) {
      dependency_13 = _bgroupJview103LoadingPage;
    }, function (_beyondJsKernel019Styles) {
      dependency_14 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "0.1.2"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["uuid", "9.0.1"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["@bgroup/jview", "1.0.3"], ["sgs-workflow", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@bgroup/jview@1.0.3/jview"
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/empty', dependency_2], ['@bgroup/jview/input', dependency_3], ['@bgroup/jview/selection-panel', dependency_4], ['pragmate-ui/components', dependency_5], ['pragmate-ui/spinner', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@bgroup/jview/api', dependency_8], ['pragmate-ui/icons', dependency_9], ['pragmate-ui/form', dependency_10], ['@beyond-js/kernel/routing', dependency_11], ['uuid', dependency_12], ['@bgroup/jview/loading-page', dependency_13], ['@beyond-js/kernel/styles', dependency_14]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bgroup/jview@1.0.3/jview');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 2943250275,
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

      /*************************
      INTERNAL MODULE: ./control
      *************************/

      ims.set('./control', {
        hash: 507412661,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Control = Control;
          var _react = require("react");
          var _context = require("./context");
          var _emptyView = require("./empty-view");
          var _grid = require("./grid");
          var _table = require("./table");
          function Control() {
            const {
              entries,
              rows,
              current,
              state,
              view,
              isVisibleHeader
            } = (0, _context.useJViewContext)();
            let cropStart = current === 1 ? 0 : (current - 1) * rows;
            const pageEntries = state?.controller?.pager ? entries : entries.slice(cropStart, cropStart + rows);
            const control = (0, _react.useMemo)(() => {
              const entry = view === "grid" ? _react.default.createElement(_grid.Grid, null) : _react.default.createElement(_table.Table, null);
              return entry;
            }, [pageEntries]);
            if (!entries.length && !isVisibleHeader) return _react.default.createElement(_emptyView.EmptyView, null);
            return _react.default.createElement(_react.default.Fragment, null, control);
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./empty-view
      ****************************/

      ims.set('./empty-view', {
        hash: 4102248093,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyView = EmptyView;
          var _react = require("react");
          var _empty = require("pragmate-ui/empty");
          var _context = require("./context");
          function EmptyView() {
            const {
              texts,
              textEmpty,
              loading,
              fetching
            } = (0, _context.useJViewContext)();
            if (fetching || loading) return null;
            return _react.default.createElement(_empty.Empty, {
              className: "empty-jview",
              icon: "circle-exclamation"
            }, _react.default.createElement("h3", null, textEmpty ?? texts.empty), ' ');
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./footer/index
      ******************************/

      ims.set('./footer/index', {
        hash: 4014929911,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Footer = Footer;
          var _react = require("react");
          var _context = require("../context");
          var _selectEntries = require("./select-entries");
          var _pager = require("./pager");
          function Footer() {
            const {
              total,
              showSelect,
              texts,
              current,
              rows,
              pages,
              entries,
              loading,
              state
            } = (0, _context.useJViewContext)();
            const rowsJView = rows ?? 5;
            const from = _react.default.useMemo(() => (current - 1) * rowsJView + 1, [rowsJView, current]);
            const to = _react.default.useMemo(() => from + rowsJView - 1, [rowsJView, from]);
            const showing = `${texts.showing} ${from} ${texts.to} ${to > total ? total : to} ${texts.of} ${total} ${texts.items}`;
            const isFooter = _react.default.useMemo(() => total >= 5 && showSelect, [total, rowsJView]);
            const isLoading = loading || state.controller.fetching;
            if (!pages) return null;
            const cls = `content-pager ${isLoading ? "content-pager__loading" : ""}`;
            return _react.default.createElement("div", {
              className: cls
            }, !!isFooter && _react.default.createElement("div", {
              className: "footer-jivew"
            }, showSelect && _react.default.createElement(_selectEntries.SelectEntries, null), !!entries.length && showing), _react.default.createElement(_pager.Pager, null));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./footer/pager/index
      ************************************/

      ims.set('./footer/pager/index', {
        hash: 686301081,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Pager = Pager;
          var _react = require("react");
          var _context = require("../../context");
          var _shortcutLink = require("./shortcut-link");
          function Pager() {
            const {
              state,
              entries,
              current,
              pages,
              texts
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
              let cls = 'pager-item';
              if (i === current) cls += ' item-current';
              output.push(_react.default.createElement("button", {
                type: "button",
                className: cls,
                "data-page": i,
                key: `item-${i}`,
                onClick: navigate
              }, i));
            }
            if (current !== pages && pages > 2 && current !== pages - 1 && current + 2 !== pages) {
              output.push(_react.default.createElement("button", {
                type: "button",
                key: "last",
                "data-page": pages,
                onClick: navigate,
                className: "pager-item "
              }, pages));
            }
            const cleanedPages = pages !== 0 && !pages ? 0 : pages;
            const showingPage = `${texts.page} ${current} ${texts.of} ${cleanedPages}`;
            return _react.default.createElement("div", {
              className: "jview-component-pager"
            }, _react.default.createElement("div", {
              className: "content-pager"
            }, _react.default.createElement(_shortcutLink.ShorcutLink, {
              "data-page": 1,
              label: "<<",
              className: "pager-item first-page",
              condition: pages > 1 && current > 2
            }), _react.default.createElement(_shortcutLink.ShorcutLink, {
              "data-page": current - 1,
              label: "<",
              className: "pager-item prev-page",
              condition: pages > 1 && current > 1
            }), output, _react.default.createElement(_shortcutLink.ShorcutLink, {
              "data-page": current + 1,
              label: ">",
              className: "pager-item next-page",
              condition: pages > 1 && current !== pages
            }), _react.default.createElement(_shortcutLink.ShorcutLink, {
              "data-page": pages,
              label: ">>",
              className: "pager-item next-page",
              condition: pages > 1 && current !== pages
            })));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./footer/pager/pages
      ************************************/

      ims.set('./footer/pager/pages', {
        hash: 3405365313,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Pages = Pages;
          var _react = require("react");
          var _shortcutLink = require("./shortcut-link");
          var _context = require("../../context");
          function Pages() {
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
              let cls = 'pager-item';
              if (i === current) cls += ' item-current';
              output.push(_react.default.createElement("li", {
                className: cls,
                "data-page": i,
                key: `item-${i}`,
                onClick: navigate
              }, i));
            }
            if (current !== pages && pages > 2 && current !== pages - 1 && current + 2 !== pages) {
              output.push(_react.default.createElement("li", {
                key: "last",
                "data-page": pages,
                onClick: navigate,
                className: "pager-item "
              }, pages));
            }
            return _react.default.createElement("div", {
              className: "jview-component-pager"
            }, _react.default.createElement("div", {
              className: "content-pager"
            }, _react.default.createElement(_shortcutLink.ShorcutLink, {
              "data-page": 1,
              label: "<<",
              className: "pager-item first-page",
              condition: pages > 1 && current > 2
            }), _react.default.createElement(_shortcutLink.ShorcutLink, {
              "data-page": current - 1,
              label: "<",
              className: "pager-item prev-page",
              condition: pages > 1 && current > 1
            }), _react.default.createElement(_shortcutLink.ShorcutLink, {
              "data-page": current + 1,
              label: ">",
              className: "pager-item next-page",
              condition: pages > 1 && current !== pages
            })));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./footer/pager/shortcut-link
      ********************************************/

      ims.set('./footer/pager/shortcut-link', {
        hash: 384734769,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ShorcutLink = ShorcutLink;
          var React = require("react");
          var _context = require("../../context");
          function ShorcutLink(props) {
            const {
              state,
              entries,
              fetching
            } = (0, _context.useJViewContext)();
            const navigate = event => {
              const target = event.currentTarget;
              const {
                page
              } = target.dataset;
              state.controller.getPage(page ?? parseInt(page), entries);
            };
            const {
              condition,
              label
            } = props;
            if (!condition) return null;
            const attrs = {
              ...props
            };
            ['condition', 'label'].forEach(attr => delete attrs[attr]);
            return React.createElement("button", {
              disabled: fetching,
              onClick: navigate,
              ...attrs
            }, label);
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./footer/select-entries
      ***************************************/

      ims.set('./footer/select-entries', {
        hash: 525505875,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SelectEntries = SelectEntries;
          var _react = require("react");
          var _context = require("../context");
          var _input = require("@bgroup/jview/input");
          function SelectEntries() {
            const {
              load,
              total,
              state,
              texts,
              rows,
              optionsChangeRows
            } = (0, _context.useJViewContext)();
            const rowsJView = _react.default.useMemo(() => rows ?? 5, [rows]);
            const [value, setValue] = _react.default.useState(rowsJView);
            const options = _react.default.useMemo(() => optionsChangeRows ?? [rowsJView, 25, 50, 100, 250], []);
            _react.default.useEffect(() => {
              setValue(rowsJView);
            }, [rows]);
            const entiresNumber = _react.default.useMemo(() => {
              return options.map(item => ({
                value: item,
                label: item
              }));
            }, []);
            const handleChange = ({
              currentTarget
            }) => {
              const limit = parseInt(currentTarget.value);
              state.controller.handleChangeRows({
                limit
              });
              setValue(limit);
            };
            return _react.default.createElement("div", {
              className: "d-flex align-center select-items"
            }, texts.show, " \u00A0", _react.default.createElement(_input.Select, {
              onChange: handleChange,
              title: "Select entries",
              options: entiresNumber,
              value: value,
              firstOption: null
            }), "\u00A0", texts.rows, ". \u00A0");
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./grid
      **********************/

      ims.set('./grid', {
        hash: 483793512,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Grid = Grid;
          var _react = require("react");
          var _items = require("./table/items");
          function Grid() {
            return _react.default.createElement("div", {
              className: 'content-grid'
            }, _react.default.createElement(_items.Items, null));
          }
        }
      });

      /************************
      INTERNAL MODULE: ./header
      ************************/

      ims.set('./header', {
        hash: 2065560785,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _selectionPanel = require("@bgroup/jview/selection-panel");
          var _context = require("./context");
          var _components = require("pragmate-ui/components");
          var _search = require("./search");
          function Header() {
            const {
              title,
              search,
              actions,
              panel,
              texts
            } = (0, _context.useJViewContext)();
            const clsHeader = !!actions?.create && !!actions?.create?.label || !!panel || !!search ? 'search-create' : 'search-create header-top';
            const handleClick = event => {
              event.stopPropagation();
              const {
                action
              } = event.currentTarget.dataset;
              if (!actions[action] || !actions[action]?.onClick || typeof actions[action]?.onClick !== 'function') return;
              actions[action].onClick(event);
            };
            return _react.default.createElement("header", null, title && _react.default.createElement("h4", {
              className: "title-jview"
            }, title, ":"), _react.default.createElement("div", {
              className: clsHeader
            }, _react.default.createElement(_search.Search, {
              ...search
            }), _react.default.createElement("div", {
              className: "d-flex head-buttons"
            }, !!panel && _react.default.createElement(_selectionPanel.SelectionPanel, {
              ...panel
            }), actions?.export && _react.default.createElement(_components.Button, {
              label: texts.export,
              className: "btn btn-primary create-button",
              onClick: handleClick,
              "data-action": "export"
            }), !!actions?.create && _react.default.createElement(_components.Button, {
              onClick: handleClick,
              label: actions?.create.label,
              "data-action": "create",
              className: "btn btn-primary create-button"
            }))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./hooks/custom-hooks
      ************************************/

      ims.set('./hooks/custom-hooks', {
        hash: 3713754223,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.customHooks = customHooks;
          var _react = require("react");
          var _context = require("../context");
          var _manager = require("../manager");
          function customHooks() {
            const {
              setState,
              total,
              setCurrent,
              props,
              rows,
              state,
              action,
              onPrev,
              onNext,
              setTotal,
              setEntries,
              setPages
            } = (0, _context.useJViewContext)();
            const propsController = {
              ...props,
              total: props.total,
              rows,
              action,
              current: props.current,
              entries: props.entries,
              onPrev,
              onNext
            };
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
              const controller = new _manager.Manager(propsController);
              controller.bind("change", update);
              update();
              return () => controller.unbind("change", update);
            }, []);
            (0, _react.useEffect)(() => {
              if (props.total !== total) {
                setTotal(props.total);
                if (state.controller) {
                  state.controller.current = 1;
                  state.controller.total = props.total;
                }
                ;
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
            (0, _react.useEffect)(() => {
              if (total <= rows) setPages(1);else setPages(Math.ceil(total / rows));
            }, [total, rows]);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1958045788,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.JView = JView;
          var _react = require("react");
          var _context = require("./context");
          var _view = require("./view");
          var _texts = require("./texts");
          /*bundle*/
          function JView(props) {
            const [state, setState] = (0, _react.useState)({});
            let [total, setTotal] = (0, _react.useState)(props.total);
            let [entries, setEntries] = (0, _react.useState)(props.entries);
            const [current, setCurrent] = (0, _react.useState)(props.currentPage ?? 1);
            const [pages, setPages] = (0, _react.useState)();
            const texts = (0, _texts.Texts)("es");
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
              texts,
              fetching: state?.controller?.fetching,
              setTotal,
              setEntries,
              setState,
              setCurrent,
              showSelect: props?.showSelect === false ? false : true,
              isVisibleHeader: props?.isVisibleHeader ?? false
            };
            return _react.default.createElement(_context.JViewContext.Provider, {
              value: value
            }, _react.default.createElement(_view.View, null));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./interfaces/index
      **********************************/

      ims.set('./interfaces/index', {
        hash: 1241693495,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*************************
      INTERNAL MODULE: ./loading
      *************************/

      ims.set('./loading', {
        hash: 3503084736,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Loading = Loading;
          var _react = require("react");
          var _spinner = require("pragmate-ui/spinner");
          var _context = require("./context");
          function Loading() {
            const {
              loading,
              state: {
                controller: {
                  fetching
                }
              }
            } = (0, _context.useJViewContext)();
            if (!fetching && !loading) return null;
            return _react.default.createElement("div", {
              className: "jview-fetching"
            }, _react.default.createElement(_spinner.Spinner, {
              active: true,
              type: "primary",
              className: "spinner"
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./manager/index
      *******************************/

      ims.set('./manager/index', {
        hash: 2697740865,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Manager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@bgroup/jview/api");
          /*bundle*/
          class Manager extends _model.ReactiveModel {
            #total;
            get total() {
              return this.#total;
            }
            set total(value) {
              this.#total = value;
            }
            #rows;
            get rows() {
              return this.#rows;
            }
            #action;
            get action() {
              return this.#action;
            }
            #current;
            get current() {
              return this.#current;
            }
            set current(value) {
              if (value === this.#current) return;
              this.#current = value;
              this.triggerEvent();
            }
            #entries = [];
            #allEntries = [];
            get entries() {
              return this.#entries.slice(this.#current - 1, this.#current * this.#rows);
            }
            ready = !this.entries && !!this.total && !!this.rows;
            #pages;
            get pages() {
              return this.#pages;
            }
            #pager;
            get pager() {
              return this.#pager;
            }
            #onPrev;
            #onNext;
            #caller = new _api.JCall();
            #props;
            #reverse = {};
            icon = key => {
              return this.#reverse[key] ? "arrowDropUp" : "arrowDropDown";
            };
            constructor(props) {
              super();
              const {
                total,
                rows,
                action,
                current,
                entries,
                onNext,
                onPrev,
                dataHead
              } = props;
              this.#total = total;
              this.#rows = rows;
              this.#action = action;
              this.#current = current ?? 1;
              this.#entries = entries ?? [];
              this.#allEntries = entries ?? [];
              if (total <= rows) this.#pages = 1;else this.#pages = Math.ceil(total / rows);
              this.#onNext = onNext;
              this.#onPrev = onPrev;
              if (dataHead && Array.isArray(dataHead)) {
                dataHead.forEach(item => this.#reverse[item.id] = false);
              }
              ;
              this.#props = props;
            }
            #ajaxCall = async next => {
              const response = await this.#caller.get(this.#action, {
                next: next,
                limit: this.#rows
              });
              if (response.status !== "ok" || !response.data) {
                console.warn("there is no data");
                return [];
              }
              return response.data;
            };
            changeOrder = event => {
              const {
                dataset: {
                  key
                }
              } = event.currentTarget;
              const sort = (a, b) => {
                if (!a[key] || !b[key]) return;
                if (this.#reverse[key]) return b[key].toLowerCase().localeCompare(a[key].toLowerCase());
                return a[key].toLowerCase().localeCompare(b[key].toLowerCase());
              };
              this.#entries = this.#allEntries.sort(sort);
              this.#reverse[key] = !this.#reverse[key];
              this.triggerEvent();
            };
            /*
             * Este metodo espera recibir la data de la llamada o del metodo que ejecuta
             *
             * @param page
             * @param entries
             * @returns {Promise<void>}
             */
            getPage = async (page, entries) => {
              this.fetching = true;
              this.triggerEvent();
              if (page < this.#current) {
                this.#current = page;
                if (this.#onPrev && typeof this.#onPrev === "function") {
                  await this.#onPrev({
                    page
                  });
                }
                this.fetching = false;
                this.triggerEvent();
                return;
              }
              const next = this.#rows * this.#current;
              const localItems = entries.length;
              if (localItems > next) {
                this.#current = page;
                this.fetching = false;
                this.triggerEvent();
                return;
              }
              const call = this.#onNext ?? this.#ajaxCall;
              const data = await call({
                next,
                page
              });
              entries = data;
              this.#current = page;
              this.fetching = false;
              this.triggerEvent();
            };
            changeItems = async ({
              limit: newLimit,
              pages: newPages
            }) => {
              this.#pages = newPages;
              this.#rows = newLimit;
              this.triggerEvent();
            };
            handleChangeRows = async ({
              limit
            }) => {
              this.#rows = limit;
              let pages;
              if (this.#total <= limit) pages = 1;else pages = Math.ceil(this.#total / limit);
              this.#current = 1;
              this.#pages = pages;
              if (this.#props.load && typeof this.#props.load === "function") {
                const current = await this.#props.load({
                  limit,
                  total: this.#total,
                  pages
                });
                if (current) this.#current = parseInt(current);
              }
              this.triggerEvent();
            };
          }
          exports.Manager = Manager;
        }
      });

      /********************************
      INTERNAL MODULE: ./search/buttons
      ********************************/

      ims.set('./search/buttons', {
        hash: 1285634986,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Buttons = Buttons;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("./context");
          function Buttons({
            isOnSubmited,
            setIsOnSubmited
          }) {
            const {
              state,
              setShow,
              show,
              setState,
              initialState,
              button,
              onClear,
              isClear,
              searchableList
            } = (0, _context.useSearchContext)();
            const handleShow = event => {
              event.stopPropagation();
              setShow(!show);
            };
            const handleClear = async event => {
              event.stopPropagation();
              setIsOnSubmited(false);
              setState(initialState);
              onClear && (await onClear());
              setShow(false);
            };
            const isClearValues = state.search || isClear && Object.keys(state).some(item => !!state[item]);
            const clearableCls = isClearValues || isOnSubmited ? "close clearable" : "close not-clearable";
            const cls = searchableList ? "show" : "hide";
            return _react.default.createElement("div", {
              className: "icon-buttons"
            }, _react.default.createElement("span", {
              ref: button,
              className: cls
            }, _react.default.createElement(_icons.IconButton, {
              icon: "list-search",
              className: "list-search",
              onClick: handleShow
            })), _react.default.createElement(_icons.IconButton, {
              icon: "close",
              className: clearableCls,
              type: "button",
              onClick: handleClear
            }));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./search/context
      ********************************/

      ims.set('./search/context', {
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

      /*************************************
      INTERNAL MODULE: ./search/filter/dates
      *************************************/

      ims.set('./search/filter/dates', {
        hash: 1103283365,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Dates = Dates;
          var _react = require("react");
          var _context = require("../context");
          var _input = require("@bgroup/jview/input");
          function Dates() {
            const {
              state,
              texts,
              handleChange,
              date
            } = (0, _context.useSearchContext)();
            if (!date) return null;
            const getCurrentDate = () => new Date().toLocaleDateString("en-CA", {
              month: "2-digit",
              day: "2-digit",
              year: "numeric"
            }).split("/").reverse().join("-");
            return _react.default.createElement("div", {
              className: "fields-date"
            }, _react.default.createElement("div", {
              className: "fieldset"
            }, _react.default.createElement(_input.Input, {
              type: "date",
              name: "startDate",
              value: state.startDate,
              max: getCurrentDate(),
              onChange: handleChange,
              label: texts.from
            })), _react.default.createElement("div", {
              className: "fieldset"
            }, _react.default.createElement(_input.Input, {
              type: "date",
              name: "endDate",
              value: state.endDate,
              max: getCurrentDate(),
              onChange: handleChange,
              label: texts.to
            })));
          }
          ;
        }
      });

      /*************************************
      INTERNAL MODULE: ./search/filter/index
      *************************************/

      ims.set('./search/filter/index', {
        hash: 63742516,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = Filter;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          var _components = require("pragmate-ui/components");
          var _dates = require("./dates");
          var _items = require("./items");
          function Filter() {
            const {
              setShow,
              show,
              ref,
              dialogTitle,
              texts,
              element
            } = (0, _context.useSearchContext)();
            if (!show) return null;
            const textFilter = dialogTitle ?? texts.filter;
            const hide = () => setShow(false);
            return _react.default.createElement("fieldset", {
              className: "show",
              ref: ref
            }, _react.default.createElement("div", {
              className: "content-title"
            }, _react.default.createElement("span", null, textFilter), _react.default.createElement(_icons.IconButton, {
              icon: "close",
              onClick: hide
            })), _react.default.createElement("div", {
              className: "content-inputs"
            }, _react.default.createElement(_dates.Dates, null), element, _react.default.createElement(_items.Items, null)), _react.default.createElement(_components.Button, {
              variant: "primary",
              type: "submit"
            }, texts.accept));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./search/filter/item
      ************************************/

      ims.set('./search/filter/item', {
        hash: 3251694713,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _input = require("@bgroup/jview/input");
          var _context = require("../context");
          var _form = require("pragmate-ui/form");
          function Item({
            item
          }) {
            const {
              state,
              handleChange
            } = (0, _context.useSearchContext)();
            if (item.type === "select") {
              return _react.default.createElement(_input.Select, {
                name: item.identifier,
                options: item.options,
                label: item.name,
                value: state[item.identifier] ?? "",
                onChange: handleChange
              });
            }
            return _react.default.createElement(_form.Input, {
              type: "text",
              name: item.identifier,
              label: item.name,
              value: state[item.identifier] ?? "",
              onChange: handleChange
            });
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./search/filter/items
      *************************************/

      ims.set('./search/filter/items', {
        hash: 2314467119,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Items = Items;
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          function Items() {
            const {
              isFilter,
              filter
            } = (0, _context.useSearchContext)();
            if (!isFilter) return null;
            const output = filter.map(item => _react.default.createElement(_item.Item, {
              key: item.id,
              item: item
            }));
            return _react.default.createElement(_react.default.Fragment, null, output);
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./search/form
      *****************************/

      ims.set('./search/form', {
        hash: 1292062033,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Form = Form;
          var _react = require("react");
          var _context = require("./context");
          var _icons = require("pragmate-ui/icons");
          var _form = require("pragmate-ui/form");
          var _filter = require("./filter");
          var _buttons = require("./buttons");
          function Form() {
            const [isOnSubmited, setIsOnSubmited] = _react.default.useState(false);
            const {
              state,
              setShow,
              onSearch,
              placeholder,
              type,
              texts,
              handleChange
            } = (0, _context.useSearchContext)();
            const handleSubmit = async () => {
              setIsOnSubmited(true);
              if (onSearch) await onSearch(state);
              setShow(false);
            };
            return _react.default.createElement(_form.Form, {
              onSubmit: handleSubmit,
              autoComplete: "off",
              className: "search-operations"
            }, _react.default.createElement("div", {
              className: "content-search"
            }, _react.default.createElement(_icons.IconButton, {
              icon: "search",
              className: "icon-search",
              type: "submit"
            }), _react.default.createElement("input", {
              type: type,
              placeholder: placeholder ?? texts.search,
              value: state.search,
              name: "search",
              onChange: handleChange
            }), _react.default.createElement(_buttons.Buttons, {
              isOnSubmited: isOnSubmited,
              setIsOnSubmited: setIsOnSubmited
            })), _react.default.createElement(_filter.default, null));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./search/index
      ******************************/

      ims.set('./search/index', {
        hash: 2685602445,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Search = Search;
          var React = require("react");
          var _context = require("./context");
          var _form = require("./form");
          var _context2 = require("../context");
          var _useOutsideClick = require("./use-outside-click");
          /*bundle*/
          function Search(props) {
            const {
              dialogTitle,
              filter,
              initValues,
              element,
              onSearch,
              onClear,
              isClear,
              placeholder,
              type,
              date,
              searchableList
            } = props;
            const ref = React.useRef(null);
            const button = React.useRef(null);
            const initialState = Object.assign({
              startDate: "",
              endDate: "",
              search: ""
            }, initValues);
            const {
              texts: {
                search: texts
              },
              isSearch
            } = (0, _context2.useJViewContext)();
            const [state, setState] = React.useState(initialState);
            const [show, setShow] = React.useState(false);
            (0, _useOutsideClick.useOutsideClick)({
              ref,
              button,
              setShow
            });
            if (!isSearch) return null;
            const handleChange = event => {
              const target = event.currentTarget;
              setState({
                ...state,
                [target.name]: target.value
              });
            };
            const isFilter = !!filter && Array.isArray(filter) && !!filter.length;
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
              type: type ?? "search",
              dialogTitle,
              date,
              searchableList,
              texts,
              element,
              handleChange,
              isFilter
            };
            return React.createElement(_context.SearchContext.Provider, {
              value: value
            }, React.createElement(_form.Form, null));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./search/use-outside-click
      ******************************************/

      ims.set('./search/use-outside-click', {
        hash: 2280609224,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useOutsideClick = useOutsideClick;
          var React = require("react");
          function useOutsideClick({
            ref,
            button,
            setShow
          }) {
            React.useEffect(() => {
              const handleClick = event => {
                const {
                  current
                } = ref;
                const isSameNode = event.composedPath()[0] === current;
                const isAChildren = current?.contains(event.composedPath()[0]);
                const istButton = button.current?.isSameNode(event.composedPath()[0]);
                const isChildrenButton = button.current?.contains(event.composedPath()[0]);
                if (!isSameNode && !isAChildren && !istButton && !isChildrenButton) {
                  setShow(false);
                }
              };
              document.addEventListener("click", handleClick);
              return () => document.removeEventListener("click", handleClick);
            }, []);
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./table/head
      ****************************/

      ims.set('./table/head', {
        hash: 414785283,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Head = Head;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          function Head() {
            const {
              dataHead,
              actions,
              state
            } = (0, _context.useJViewContext)();
            const handleClick = event => {
              event.stopPropagation();
              if (!actions.order || !actions.order?.onClick || typeof actions.order?.onClick !== "function") {
                state.controller.changeOrder(event);
                return;
              }
              actions.order.onClick(event);
            };
            const heads = dataHead && dataHead.map(item => {
              return _react.default.createElement("th", {
                key: item.id
              }, _react.default.createElement("span", {
                className: "arrow-order"
              }, item.label, !!actions?.order && _react.default.createElement(_icons.IconButton, {
                icon: state.controller.icon(item.id),
                "data-key": item.id,
                onClick: handleClick
              })));
            });
            return _react.default.createElement(_react.default.Fragment, null, heads);
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./table/header
      ******************************/

      ims.set('./table/header', {
        hash: 2952987802,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _context = require("../context");
          var _head = require("./head");
          function Header() {
            const {
              header,
              isActions
            } = (0, _context.useJViewContext)();
            const heads = header ?? _react.default.createElement(_head.Head, null);
            return _react.default.createElement("thead", null, _react.default.createElement("tr", null, heads, isActions && _react.default.createElement("th", null)));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./table/index
      *****************************/

      ims.set('./table/index', {
        hash: 871213789,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Table = Table;
          var _react = require("react");
          var _header = require("./header");
          var _items = require("./items");
          var _context = require("../context");
          var _emptyView = require("../empty-view");
          function Table() {
            const {
              entries
            } = (0, _context.useJViewContext)();
            const cls = !entries.length ? 'empty' : '';
            return _react.default.createElement("div", {
              className: "table-content-container"
            }, _react.default.createElement("table", {
              className: `table ${cls}`
            }, _react.default.createElement(_header.Header, null), !!entries.length && _react.default.createElement("tbody", null, _react.default.createElement(_items.Items, null))), !entries.length && _react.default.createElement(_emptyView.EmptyView, null));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./table/item/actions
      ************************************/

      ims.set('./table/item/actions', {
        hash: 2351716740,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Actions = Actions;
          var _react = require("react");
          var _context = require("../../context");
          var _icons = require("pragmate-ui/icons");
          var _form = require("pragmate-ui/form");
          var _routing = require("@beyond-js/kernel/routing");
          function Actions({
            item
          }) {
            const {
              actions,
              permissions,
              actionsItem
            } = (0, _context.useJViewContext)();
            let isEdit = true;
            let isDelete = true;
            if (permissions && typeof permissions === "object") {
              const isPermissionWithState = !!permissions.stateId;
              const permission = isPermissionWithState ? permissions.statesPermissions.get(item.stateId) : permissions;
              isEdit = !!permission.writeP && (permissions.additional ? !permissions.additional.includes(item.stateId) : true);
              isDelete = !!permission.deleteP;
            }
            if (!actions || typeof actions !== "object") return null;
            const handleOnEdit = () => {
              const url = `${actions.edit.url}/${item.id}${!isEdit ? "?read=true" : ""}`;
              _routing.routing.pushState(url);
            };
            const handleClick = event => {
              event.stopPropagation();
              const {
                action
              } = event.currentTarget.dataset;
              if (action === "edit" && !actions[action]?.onClick) {
                handleOnEdit();
                return;
              }
              if (!actions[action] || !actions[action]?.onClick || typeof actions[action]?.onClick !== "function") return;
              actions[action].onClick(item);
            };
            const icon = isEdit ? "pencil" : "eye";
            const defaultAction = () => null;
            const ActionsItem = actionsItem ?? defaultAction;
            return _react.default.createElement("td", null, _react.default.createElement("div", {
              className: "d-flex align-center actions-jview"
            }, !!actions.status && isEdit && _react.default.createElement(_form.Switch, null), !!actions.delete && isDelete && _react.default.createElement(_icons.IconButton, {
              icon: "delete",
              "data-action": "delete",
              onClick: handleClick
            }), !!actions.edit && _react.default.createElement(_icons.IconButton, {
              "data-action": "edit",
              icon: icon,
              onClick: handleClick
            }), _react.default.createElement(ActionsItem, {
              item: item
            })));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./table/item/format-date
      ****************************************/

      ims.set('./table/item/format-date', {
        hash: 3292015575,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.formatDate = formatDate;
          function formatDate(date) {
            // Opción 1: Ajusta la zona horaria a UTC
            const dateUTC = new Date(date);
            // Opción 2: Ajusta la zona horaria a tu zona horaria local
            const dateLocal = new Date(date);
            dateLocal.setMinutes(dateLocal.getMinutes() - dateLocal.getTimezoneOffset());
            // Formatea la fecha y hora según tu preferencia
            const options = {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true // Habilita el formato de a.m. y p.m.
            };
            const dateFormatUTC = dateUTC.toLocaleString("es-ES", options); // Cambia "es-ES" a tu configuración de idioma y zona horaria
            const dateFormatLocal = dateLocal.toLocaleString("es-ES", options); // Cambia "es-ES" a tu configuración de idioma y zona horaria
            return dateFormatUTC;
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./table/item/index
      **********************************/

      ims.set('./table/item/index', {
        hash: 1087233062,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemTable = ItemTable;
          var _react = require("react");
          var _context = require("../../context");
          var _actions = require("./actions");
          var _uuid = require("uuid");
          var _formatDate = require("./format-date");
          function ItemTable({
            item
          }) {
            const {
              keys
            } = (0, _context.useJViewContext)();
            const entries = keys.map(key => {
              if (typeof key === "object" && !!key.keys && Array.isArray(key.keys)) {
                let entry = item;
                key.keys.forEach(access => {
                  entry = entry[access];
                });
                if (key.type && key.type === "date") {
                  const date = (0, _formatDate.formatDate)(entry);
                  return _react.default.createElement("td", {
                    className: "td-items",
                    key: (0, _uuid.v4)()
                  }, _react.default.createElement("span", null, entry ? date : "Sin valor"));
                }
                if (key.type && key.type === "slice") {
                  const isString = entry && typeof entry === 'string';
                  const length = 25;
                  entry = isString ? entry.length > length ? `${entry.slice(0, length)}...` : entry : 'No posee información asociada';
                  return _react.default.createElement("td", {
                    className: "td-items",
                    key: (0, _uuid.v4)()
                  }, _react.default.createElement("span", null, entry ?? "Sin valor"));
                }
                return _react.default.createElement("td", {
                  className: "td-items",
                  key: (0, _uuid.v4)()
                }, _react.default.createElement("span", null, !!entry ? entry : "Sin valor"));
              }
              return _react.default.createElement("td", {
                className: "td-items",
                key: (0, _uuid.v4)()
              }, _react.default.createElement("span", null, !!item[key] ? item[key] : "Sin valor"));
            });
            return _react.default.createElement("tr", null, entries, _react.default.createElement(_actions.Actions, {
              item: item
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./table/items
      *****************************/

      ims.set('./table/items', {
        hash: 1017937615,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Items = Items;
          var React = require("react");
          var _context = require("../context");
          var _item = require("./item");
          var _emptyView = require("../empty-view");
          function Items() {
            const {
              item,
              entries,
              state,
              rows,
              current,
              rowProps,
              isVisibleHeader
            } = (0, _context.useJViewContext)();
            const Item = item ?? _item.ItemTable;
            let cropStart = current === 1 ? 0 : (current - 1) * rows;
            const pageEntries = state?.controller?.pager ? entries : entries.slice(cropStart, cropStart + rows);
            const showedEntries = !!pageEntries.length ? pageEntries : entries;
            if (!showedEntries.length && !!isVisibleHeader) return React.createElement("tr", {
              className: 'tr-empty'
            }, React.createElement("td", null, React.createElement(_emptyView.EmptyView, null)));
            const output = showedEntries.map((item, index) => React.createElement(Item, {
              item: item,
              key: index,
              ...rowProps,
              index: index
            }));
            return React.createElement(React.Fragment, null, output);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./texts
      ***********************/

      ims.set('./texts', {
        hash: 2851560772,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Texts = Texts;
          function Texts(language) {
            const texts = {
              es: {
                "empty": "No hay elementos asociados a este listado",
                "showing": "Mostrando del",
                "to": "al",
                "of": "de",
                "items": "elementos",
                "show": "Mostrar",
                "rows": "filas",
                "export": "Exportar",
                "search": {
                  "Search": "Buscar",
                  "from": "Desde",
                  "to": "Hasta",
                  "accept": "Aceptar",
                  "filter": "Filtros"
                }
              },
              en: {
                "empty": "There are no items associated with this listing",
                "showing": "Showing ",
                "to": "to",
                "of": "of",
                "items": "items",
                "show": "Show",
                "rows": "rows",
                "export": "Export",
                "search": {
                  "search": "Search",
                  "from": "From",
                  "to": "To",
                  "filter": "Filters",
                  "accept": "Aceptar"
                }
              }
            };
            return texts[language];
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./view
      **********************/

      ims.set('./view', {
        hash: 53137274,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _context = require("./context");
          var _header = require("./header");
          var _loading = require("./loading");
          var _footer = require("./footer");
          var _customHooks = require("./hooks/custom-hooks");
          var _loadingPage = require("@bgroup/jview/loading-page");
          var _control = require("./control");
          /*bundle*/
          function View() {
            const {
              entries,
              state,
              loading,
              isVisibleHeader
            } = (0, _context.useJViewContext)();
            (0, _customHooks.customHooks)();
            if (!state.controller) return _react.default.createElement(_loadingPage.LoadingPage, {
              content: true
            });
            const isLoading = loading || state.controller.fetching;
            let cls = isLoading && !entries.length ? "container-table container-table-fetching table-fetching " : "container-table";
            cls += !entries.length ? " container-table-empty" : "";
            cls += isLoading && !!entries.length ? " container-table-loading table-fetched" : "";
            cls += isVisibleHeader ? " not-hide-header" : "";
            return _react.default.createElement("div", {
              className: "jview-container"
            }, _react.default.createElement(_header.Header, null), _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement(_control.Control, null), _react.default.createElement(_loading.Loading, null)), _react.default.createElement(_footer.Footer, null));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "JView",
        "name": "JView"
      }, {
        "im": "./manager/index",
        "from": "Manager",
        "name": "Manager"
      }, {
        "im": "./search/index",
        "from": "Search",
        "name": "Search"
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
        (require || prop === 'JView') && _export("JView", JView = require ? require('./index').JView : value);
        (require || prop === 'Manager') && _export("Manager", Manager = require ? require('./manager/index').Manager : value);
        (require || prop === 'Search') && _export("Search", Search = require ? require('./search/index').Search : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiSlZpZXdDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VKVmlld0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbnRleHQiLCJfZW1wdHlWaWV3IiwiX2dyaWQiLCJfdGFibGUiLCJDb250cm9sIiwiZW50cmllcyIsInJvd3MiLCJjdXJyZW50Iiwic3RhdGUiLCJ2aWV3IiwiaXNWaXNpYmxlSGVhZGVyIiwiY3JvcFN0YXJ0IiwicGFnZUVudHJpZXMiLCJjb250cm9sbGVyIiwicGFnZXIiLCJzbGljZSIsImNvbnRyb2wiLCJ1c2VNZW1vIiwiZW50cnkiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkdyaWQiLCJUYWJsZSIsImxlbmd0aCIsIkVtcHR5VmlldyIsIkZyYWdtZW50IiwiX2VtcHR5IiwidGV4dHMiLCJ0ZXh0RW1wdHkiLCJsb2FkaW5nIiwiZmV0Y2hpbmciLCJFbXB0eSIsImNsYXNzTmFtZSIsImljb24iLCJlbXB0eSIsIl9zZWxlY3RFbnRyaWVzIiwiX3BhZ2VyIiwiRm9vdGVyIiwidG90YWwiLCJzaG93U2VsZWN0IiwicGFnZXMiLCJyb3dzSlZpZXciLCJmcm9tIiwidG8iLCJzaG93aW5nIiwib2YiLCJpdGVtcyIsImlzRm9vdGVyIiwiaXNMb2FkaW5nIiwiY2xzIiwiU2VsZWN0RW50cmllcyIsIlBhZ2VyIiwiX3Nob3J0Y3V0TGluayIsInBhZ2VzU2hvd2VkIiwibmF2aWdhdGUiLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJwYWdlIiwiZGF0YXNldCIsImdldFBhZ2UiLCJwYXJzZUludCIsIm91dHB1dCIsIm1pZGRsZSIsImxhc3QiLCJmaXJzdCIsIk1hdGgiLCJjZWlsIiwiaSIsInB1c2giLCJ0eXBlIiwia2V5Iiwib25DbGljayIsImNsZWFuZWRQYWdlcyIsInNob3dpbmdQYWdlIiwiU2hvcmN1dExpbmsiLCJsYWJlbCIsImNvbmRpdGlvbiIsIlBhZ2VzIiwiUmVhY3QiLCJwcm9wcyIsImF0dHJzIiwiZm9yRWFjaCIsImF0dHIiLCJkaXNhYmxlZCIsIl9pbnB1dCIsImxvYWQiLCJvcHRpb25zQ2hhbmdlUm93cyIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsIm9wdGlvbnMiLCJ1c2VFZmZlY3QiLCJlbnRpcmVzTnVtYmVyIiwibWFwIiwiaXRlbSIsImhhbmRsZUNoYW5nZSIsImxpbWl0IiwiaGFuZGxlQ2hhbmdlUm93cyIsInNob3ciLCJTZWxlY3QiLCJvbkNoYW5nZSIsInRpdGxlIiwiZmlyc3RPcHRpb24iLCJfaXRlbXMiLCJJdGVtcyIsIl9zZWxlY3Rpb25QYW5lbCIsIl9jb21wb25lbnRzIiwiX3NlYXJjaCIsIkhlYWRlciIsInNlYXJjaCIsImFjdGlvbnMiLCJwYW5lbCIsImNsc0hlYWRlciIsImNyZWF0ZSIsImhhbmRsZUNsaWNrIiwic3RvcFByb3BhZ2F0aW9uIiwiYWN0aW9uIiwiU2VhcmNoIiwiU2VsZWN0aW9uUGFuZWwiLCJleHBvcnQiLCJCdXR0b24iLCJfbWFuYWdlciIsImN1c3RvbUhvb2tzIiwic2V0U3RhdGUiLCJzZXRDdXJyZW50Iiwib25QcmV2Iiwib25OZXh0Iiwic2V0VG90YWwiLCJzZXRFbnRyaWVzIiwic2V0UGFnZXMiLCJwcm9wc0NvbnRyb2xsZXIiLCJ1cGRhdGUiLCJzcGVjcyIsIk1hbmFnZXIiLCJiaW5kIiwidW5iaW5kIiwic2V0VGltZW91dCIsImN1cnJlbnRQYWdlIiwiX3ZpZXciLCJfdGV4dHMiLCJKVmlldyIsIlRleHRzIiwiUHJvdmlkZXIiLCJWaWV3IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfc3Bpbm5lciIsIkxvYWRpbmciLCJTcGlubmVyIiwiYWN0aXZlIiwiX21vZGVsIiwiX2FwaSIsIlJlYWN0aXZlTW9kZWwiLCJ0cmlnZ2VyRXZlbnQiLCJhbGxFbnRyaWVzIiwicmVhZHkiLCJjYWxsZXIiLCJKQ2FsbCIsInJldmVyc2UiLCJjb25zdHJ1Y3RvciIsImRhdGFIZWFkIiwiQXJyYXkiLCJpc0FycmF5IiwiaWQiLCJhamF4Q2FsbCIsIm5leHQiLCJyZXNwb25zZSIsImdldCIsInN0YXR1cyIsImRhdGEiLCJjb25zb2xlIiwid2FybiIsImNoYW5nZU9yZGVyIiwic29ydCIsImEiLCJiIiwidG9Mb3dlckNhc2UiLCJsb2NhbGVDb21wYXJlIiwibG9jYWxJdGVtcyIsImNhbGwiLCJjaGFuZ2VJdGVtcyIsIm5ld0xpbWl0IiwibmV3UGFnZXMiLCJfaWNvbnMiLCJCdXR0b25zIiwiaXNPblN1Ym1pdGVkIiwic2V0SXNPblN1Ym1pdGVkIiwic2V0U2hvdyIsImluaXRpYWxTdGF0ZSIsImJ1dHRvbiIsIm9uQ2xlYXIiLCJpc0NsZWFyIiwic2VhcmNoYWJsZUxpc3QiLCJ1c2VTZWFyY2hDb250ZXh0IiwiaGFuZGxlU2hvdyIsImhhbmRsZUNsZWFyIiwiaXNDbGVhclZhbHVlcyIsImtleXMiLCJzb21lIiwiY2xlYXJhYmxlQ2xzIiwicmVmIiwiSWNvbkJ1dHRvbiIsIlNlYXJjaENvbnRleHQiLCJEYXRlcyIsImRhdGUiLCJnZXRDdXJyZW50RGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJtb250aCIsImRheSIsInllYXIiLCJzcGxpdCIsImpvaW4iLCJJbnB1dCIsIm5hbWUiLCJzdGFydERhdGUiLCJtYXgiLCJlbmREYXRlIiwiX2RhdGVzIiwiRmlsdGVyIiwiZGlhbG9nVGl0bGUiLCJlbGVtZW50IiwidGV4dEZpbHRlciIsImZpbHRlciIsImhpZGUiLCJ2YXJpYW50IiwiYWNjZXB0IiwiX2Zvcm0iLCJJdGVtIiwiaWRlbnRpZmllciIsIl9pdGVtIiwiaXNGaWx0ZXIiLCJfZmlsdGVyIiwiX2J1dHRvbnMiLCJGb3JtIiwib25TZWFyY2giLCJwbGFjZWhvbGRlciIsImhhbmRsZVN1Ym1pdCIsIm9uU3VibWl0IiwiYXV0b0NvbXBsZXRlIiwiX2NvbnRleHQyIiwiX3VzZU91dHNpZGVDbGljayIsImluaXRWYWx1ZXMiLCJ1c2VSZWYiLCJhc3NpZ24iLCJpc1NlYXJjaCIsInVzZU91dHNpZGVDbGljayIsImlzU2FtZU5vZGUiLCJjb21wb3NlZFBhdGgiLCJpc0FDaGlsZHJlbiIsImNvbnRhaW5zIiwiaXN0QnV0dG9uIiwiaXNDaGlsZHJlbkJ1dHRvbiIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJIZWFkIiwib3JkZXIiLCJoZWFkcyIsIl9oZWFkIiwiaGVhZGVyIiwiaXNBY3Rpb25zIiwiX2hlYWRlciIsIl9yb3V0aW5nIiwiQWN0aW9ucyIsInBlcm1pc3Npb25zIiwiYWN0aW9uc0l0ZW0iLCJpc0VkaXQiLCJpc0RlbGV0ZSIsImlzUGVybWlzc2lvbldpdGhTdGF0ZSIsInN0YXRlSWQiLCJwZXJtaXNzaW9uIiwic3RhdGVzUGVybWlzc2lvbnMiLCJ3cml0ZVAiLCJhZGRpdGlvbmFsIiwiaW5jbHVkZXMiLCJkZWxldGVQIiwiaGFuZGxlT25FZGl0IiwidXJsIiwiZWRpdCIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJkZWZhdWx0QWN0aW9uIiwiQWN0aW9uc0l0ZW0iLCJTd2l0Y2giLCJkZWxldGUiLCJmb3JtYXREYXRlIiwiZGF0ZVVUQyIsImRhdGVMb2NhbCIsInNldE1pbnV0ZXMiLCJnZXRNaW51dGVzIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJob3VyIiwibWludXRlIiwiaG91cjEyIiwiZGF0ZUZvcm1hdFVUQyIsInRvTG9jYWxlU3RyaW5nIiwiZGF0ZUZvcm1hdExvY2FsIiwiX2FjdGlvbnMiLCJfdXVpZCIsIl9mb3JtYXREYXRlIiwiSXRlbVRhYmxlIiwiYWNjZXNzIiwidjQiLCJpc1N0cmluZyIsInJvd1Byb3BzIiwic2hvd2VkRW50cmllcyIsImluZGV4IiwibGFuZ3VhZ2UiLCJlcyIsImVuIiwiX2xvYWRpbmciLCJfZm9vdGVyIiwiX2N1c3RvbUhvb2tzIiwiX2xvYWRpbmdQYWdlIiwiX2NvbnRyb2wiLCJMb2FkaW5nUGFnZSIsImNvbnRlbnQiXSwic291cmNlcyI6WyIvY29kZS90cy9jb250ZXh0LnRzeCIsIi9jb2RlL3RzL2NvbnRyb2wudHN4IiwiL2NvZGUvdHMvZW1wdHktdmlldy50c3giLCIvY29kZS90cy9mb290ZXIvaW5kZXgudHN4IiwiL2NvZGUvdHMvZm9vdGVyL3BhZ2VyL2luZGV4LnRzeCIsIi9jb2RlL3RzL2Zvb3Rlci9wYWdlci9wYWdlcy50c3giLCIvY29kZS90cy9mb290ZXIvcGFnZXIvc2hvcnRjdXQtbGluay50c3giLCIvY29kZS90cy9mb290ZXIvc2VsZWN0LWVudHJpZXMudHN4IiwiL2NvZGUvdHMvZ3JpZC50c3giLCIvY29kZS90cy9oZWFkZXIudHN4IiwiL2NvZGUvdHMvaG9va3MvY3VzdG9tLWhvb2tzLnRzeCIsIi9jb2RlL3RzL2luZGV4LnRzeCIsIi9pbmRleC50cyIsIi9jb2RlL3RzL2xvYWRpbmcudHN4IiwiL2NvZGUvdHMvbWFuYWdlci9pbmRleC50cyIsIi9jb2RlL3RzL3NlYXJjaC9idXR0b25zLnRzeCIsIi9jb2RlL3RzL3NlYXJjaC9jb250ZXh0LnRzeCIsIi9jb2RlL3RzL3NlYXJjaC9maWx0ZXIvZGF0ZXMudHN4IiwiL2NvZGUvdHMvc2VhcmNoL2ZpbHRlci9pbmRleC50c3giLCIvY29kZS90cy9zZWFyY2gvZmlsdGVyL2l0ZW0udHN4IiwiL2NvZGUvdHMvc2VhcmNoL2ZpbHRlci9pdGVtcy50c3giLCIvY29kZS90cy9zZWFyY2gvZm9ybS50c3giLCIvY29kZS90cy9zZWFyY2gvaW5kZXgudHN4IiwiL2NvZGUvdHMvc2VhcmNoL3VzZS1vdXRzaWRlLWNsaWNrLnRzeCIsIi9jb2RlL3RzL3RhYmxlL2hlYWQudHN4IiwiL2NvZGUvdHMvdGFibGUvaGVhZGVyLnRzeCIsIi9jb2RlL3RzL3RhYmxlL2luZGV4LnRzeCIsIi9jb2RlL3RzL3RhYmxlL2l0ZW0vYWN0aW9ucy50c3giLCIvY29kZS90cy90YWJsZS9pdGVtL2Zvcm1hdC1kYXRlLnRzIiwiL2NvZGUvdHMvdGFibGUvaXRlbS9pbmRleC50c3giLCIvY29kZS90cy90YWJsZS9pdGVtcy50c3giLCIvY29kZS90cy90ZXh0cy50cyIsIi9jb2RlL3RzL3ZpZXcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBR08sTUFBTUMsWUFBWSxHQUFBQyxPQUFBLENBQUFELFlBQUEsR0FBb0IsSUFBQUYsTUFBQSxDQUFBSSxhQUFhLEVBQUMsRUFBRSxDQUFDO1VBQ3ZELE1BQU1DLGVBQWUsR0FBaUJBLENBQUEsS0FBYyxJQUFBTCxNQUFBLENBQUFNLFVBQVUsRUFBQ0osWUFBWSxDQUFDO1VBQUNDLE9BQUEsQ0FBQUUsZUFBQSxHQUFBQSxlQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pwRixJQUFBTCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBTSxRQUFBLEdBQUFOLE9BQUE7VUFDQSxJQUFBTyxVQUFBLEdBQUFQLE9BQUE7VUFDQSxJQUFBUSxLQUFBLEdBQUFSLE9BQUE7VUFDQSxJQUFBUyxNQUFBLEdBQUFULE9BQUE7VUFFTSxTQUFVVSxPQUFPQSxDQUFBO1lBQ3JCLE1BQU07Y0FBRUMsT0FBTztjQUFFQyxJQUFJO2NBQUVDLE9BQU87Y0FBRUMsS0FBSztjQUFFQyxJQUFJO2NBQUVDO1lBQWUsQ0FBRSxHQUM1RCxJQUFBVixRQUFBLENBQUFGLGVBQWUsR0FBRTtZQUNuQixJQUFJYSxTQUFTLEdBQVdKLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUNBLE9BQU8sR0FBRyxDQUFDLElBQUlELElBQUk7WUFFaEUsTUFBTU0sV0FBVyxHQUFVSixLQUFLLEVBQUVLLFVBQVUs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