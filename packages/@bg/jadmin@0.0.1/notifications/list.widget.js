System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.4/base", "@beyond-js/reactive@1.1.14/model", "react@18.2.0", "@jadmin/ui@1.0.0/hooks", "@bg/jadmin@0.0.1/loading-page", "@bgroup/jview@1.0.3/jview", "@bg/jadmin@0.0.1/breadcrumb", "@bg/auth-api@1.0.0/wrapper.ts", "@beyond-js/kernel@0.1.9/routing", "@bg/jadmin@0.0.1/search.code", "pragmate-ui@0.1.2/components", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReactive1114Model) {
      dependency_3 = _beyondJsReactive1114Model;
    }, function (_react) {
      dependency_4 = _react;
    }, function (_jadminUi100Hooks) {
      dependency_5 = _jadminUi100Hooks;
    }, function (_bgJadmin001LoadingPage) {
      dependency_6 = _bgJadmin001LoadingPage;
    }, function (_bgroupJview103Jview) {
      dependency_7 = _bgroupJview103Jview;
    }, function (_bgJadmin001Breadcrumb) {
      dependency_8 = _bgJadmin001Breadcrumb;
    }, function (_bgAuthApi100WrapperTs) {
      dependency_9 = _bgAuthApi100WrapperTs;
    }, function (_beyondJsKernel019Routing) {
      dependency_10 = _beyondJsKernel019Routing;
    }, function (_bgJadmin001SearchCode) {
      dependency_11 = _bgJadmin001SearchCode;
    }, function (_pragmateUi012Components) {
      dependency_12 = _pragmateUi012Components;
    }, function (_beyondJsKernel019Styles) {
      dependency_13 = _beyondJsKernel019Styles;
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
          "vspecifier": "@bg/jadmin@0.0.1/notifications/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/base', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['react', dependency_4], ['@jadmin/ui/hooks', dependency_5], ['@bg/jadmin/loading-page', dependency_6], ['@bgroup/jview/jview', dependency_7], ['@bg/jadmin/breadcrumb', dependency_8], ['@bg/auth-api/wrapper.ts', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['@bg/jadmin/search.code', dependency_11], ['pragmate-ui/components', dependency_12], ['@beyond-js/kernel/styles', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "notifications-list",
        "vspecifier": "@bg/jadmin@0.0.1/notifications/list.widget",
        "is": "page",
        "route": "/notifications",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/jadmin@0.0.1/notifications/list.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 14212000,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _views = require("./views");
          var _manager = require("./manager");
          var _keys = require("./views/keys");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            get Widget() {
              return _views.View;
            }
            #manager;
            createStore() {
              this.#manager = new _manager.Manager();
              this.#manager.load();
              return this.#manager;
            }
            show() {
              if (!this.#manager) return;
              const {
                userId
              } = JSON.parse(localStorage.getItem("session"));
              const entity = `${userId}-notifications`;
              const confTables = !!localStorage.getItem(entity) ? JSON.parse(localStorage.getItem(entity)) : _keys.head.slice(0, 9);
              this.#manager.heads = confTables;
              this.#manager.keys = confTables.map(item => item.id);
            }
            hide() {
              this.#manager.clean();
            }
          }
          exports.Controller = Controller;
        }
      });

      /*************************
      INTERNAL MODULE: ./manager
      *************************/

      ims.set('./manager', {
        hash: 928958818,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Manager = void 0;
          var _model = require("@beyond-js/reactive/model");
          class Manager extends _model.ReactiveModel {
            #items = [];
            HARDCODED_ITEM = {
              id: 1,
              content: 'This is an notification',
              to: 'HARDCODED_USER',
              from: 'HARDCODED_USER',
              timeCreated: '28-02-23',
              deliveryTime: '01-03-23',
              deliveryFrecuency: '',
              status: 0
            };
            get items() {
              return this.#items;
            }
            #next = 0;
            #total;
            get total() {
              return this.#total;
            }
            #keys;
            get keys() {
              return this.#keys;
            }
            set keys(value) {
              this.#keys = value;
              this.triggerEvent();
            }
            #heads;
            get heads() {
              return this.#heads;
            }
            set heads(value) {
              this.#heads = value;
              this.triggerEvent();
            }
            constructor() {
              super();
            }
            load = async () => {
              try {
                this.fetching = true;
                this.triggerEvent('fetching');
                // await this.#users.load({ statusId: 1, start: this.#next });
                // this.#total = this.#users.counters.total;
                // this.#next = this.#users.next;
                // this.#items = this.#users.items;
                let items = [this.HARDCODED_ITEM, this.HARDCODED_ITEM, this.HARDCODED_ITEM, this.HARDCODED_ITEM, this.HARDCODED_ITEM];
                this.#items = items;
                this.triggerEvent('items-changed');
              } catch (error) {
                console.error(error);
              } finally {
                this.fetching = false;
                this.triggerEvent('fetching');
              }
            };
            search = async search => {
              try {
                // TODO CUANDO SE REALICE UNA BUSQUEDA SETEAR PAG => 1
                this.fetching = true;
                this.triggerEvent('fetching');
                // await this.#users.load({
                // 	statusId: 1,
                // 	user: search,
                // 	names: search,
                // 	lastNames: search,
                // 	email: search,
                // 	operand: 6,
                // 	additionalOperand: 7,
                // });
                // this.#total = this.#users.counters.total;
                // this.#next = this.#users.next;
                // this.#items = this.#users.items;
                this.triggerEvent('items-changed');
              } catch (error) {
                console.error(error);
              } finally {
                this.fetching = false;
                this.triggerEvent('fetching');
              }
            };
            clean = () => {};
          }
          exports.Manager = Manager;
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 425841144,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 2904632846,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useNotificationsContext = exports.NotificationsContext = void 0;
          var React = require("react");
          const NotificationsContext = exports.NotificationsContext = React.createContext({});
          const useNotificationsContext = () => React.useContext(NotificationsContext);
          exports.useNotificationsContext = useNotificationsContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 412093575,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _hooks = require("@jadmin/ui/hooks");
          var _loadingPage = require("@bg/jadmin/loading-page");
          var _jview = require("@bgroup/jview/jview");
          var _beyond_context = require("beyond_context");
          var _context = require("./context");
          var _row = require("./jview/row");
          var _breadcrumb = require("@bg/jadmin/breadcrumb");
          var _wrapper = require("@bg/auth-api/wrapper.ts");
          var _routing = require("@beyond-js/kernel/routing");
          var _keys = require("./keys");
          /*bundle*/
          function View(specs) {
            const store = specs.store;
            const [ready, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [items, setItems] = React.useState(store.items);
            const [isLoading, setIsLoading] = React.useState({});
            const ref = React.useRef(null);
            const {
              width
            } = (0, _hooks.useWindowSize)();
            (0, _hooks.useBinder)([store], () => setItems(store.items), 'items-changed');
            (0, _hooks.useBinder)([store], () => setIsLoading({}));
            if (!ready) return React.createElement(_loadingPage.LoadingPage, null);
            const navigate = () => _routing.routing.pushState('/notifications/management/create');
            const value = {
              dataHead: store.heads,
              entries: items,
              total: store.total,
              onNext: store.load,
              pagerNext: true,
              rows: width > 1280 ? 10 : 6,
              item: _row.Row,
              loading: store.fetching,
              isSearch: true,
              search: {
                onSearch: store.search,
                onClear: store.load,
                placeholder: texts.searchPlaceholder
              },
              actions: {
                create: {
                  label: texts.goToCreate,
                  onClick: navigate
                }
              },
              panel: {
                tables: _keys.head,
                entity: `${_wrapper.session.user.id}-notifications`,
                max: 4,
                isMax: true,
                ref,
                save: tables => {
                  store.keys = tables.map(item => item.id);
                  store.heads = tables;
                }
              }
            };
            const breadcrumb = [[`/users`, 'Listado']];
            return React.createElement(_context.NotificationsContext.Provider, {
              value: {
                store,
                items,
                setItems,
                texts
              }
            }, React.createElement("div", null, React.createElement(_breadcrumb.BreadCrumb, {
              title: texts.title,
              items: breadcrumb
            }), React.createElement(_jview.JView, {
              ...value
            })));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/jview/row
      *********************************/

      ims.set('./views/jview/row', {
        hash: 290228581,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Row = Row;
          var React = require("react");
          var _context = require("../context");
          function Row({
            item
          }) {
            const {
              store
            } = (0, _context.useNotificationsContext)();
            const entries = store.keys.map(key => {
              return React.createElement("td", {
                key: key
              }, React.createElement("span", null, item[key] ?? 'Sin valor'));
            });
            return React.createElement("tr", {
              className: "table__row"
            }, entries);
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/keys
      ****************************/

      ims.set('./views/keys', {
        hash: 2815302894,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.head = void 0;
          const head = exports.head = [{
            label: "Entregado el",
            id: 'deliveryTime'
          }, {
            label: "Contenido",
            id: 'content'
          }, {
            label: "Desde",
            id: 'from'
          }, {
            label: "Para",
            id: 'to'
          }];
        }
      });

      /******************************
      INTERNAL MODULE: ./views/search
      ******************************/

      ims.set('./views/search', {
        hash: 3680694442,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Searchbar = Searchbar;
          var React = require("react");
          var _search = require("@bg/jadmin/search.code");
          var _context = require("./context");
          var _components = require("pragmate-ui/components");
          var _routing = require("@beyond-js/kernel/routing");
          function Searchbar() {
            const {
              store,
              setItems,
              texts
            } = (0, _context.useUsersContext)();
            async function handleSearch(params) {
              let {
                search
              } = params;
              search = search && search.toLowerCase();
              await store.search(search);
              return store.items;
            }
            async function handleClear() {
              setItems(store.items);
            }
            const navigate = () => {
              _routing.routing.pushState(`/notifications/management/create`);
            };
            return React.createElement("div", {
              className: "search__card"
            }, React.createElement(_search.Search, {
              date: false,
              onSearch: handleSearch,
              placeholder: texts.searchPlaceholder,
              isClear: true,
              onClear: handleClear,
              dialogTitle: texts.searchDialogTitle,
              searchableList: false
            }), React.createElement(_components.Button, {
              className: "create-user__button btn btn-primary",
              onClick: navigate,
              icon: "edit"
            }, texts.create));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfbWFuYWdlciIsIl9rZXlzIiwiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJtYW5hZ2VyIiwiY3JlYXRlU3RvcmUiLCJNYW5hZ2VyIiwibG9hZCIsInNob3ciLCJ1c2VySWQiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZW50aXR5IiwiY29uZlRhYmxlcyIsImhlYWQiLCJzbGljZSIsImhlYWRzIiwia2V5cyIsIm1hcCIsIml0ZW0iLCJpZCIsImhpZGUiLCJjbGVhbiIsImV4cG9ydHMiLCJfbW9kZWwiLCJSZWFjdGl2ZU1vZGVsIiwiaXRlbXMiLCJIQVJEQ09ERURfSVRFTSIsImNvbnRlbnQiLCJ0byIsImZyb20iLCJ0aW1lQ3JlYXRlZCIsImRlbGl2ZXJ5VGltZSIsImRlbGl2ZXJ5RnJlY3VlbmN5Iiwic3RhdHVzIiwibmV4dCIsInRvdGFsIiwidmFsdWUiLCJ0cmlnZ2VyRXZlbnQiLCJjb25zdHJ1Y3RvciIsImZldGNoaW5nIiwiZXJyb3IiLCJjb25zb2xlIiwic2VhcmNoIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJSZWFjdCIsIk5vdGlmaWNhdGlvbnNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZU5vdGlmaWNhdGlvbnNDb250ZXh0IiwidXNlQ29udGV4dCIsIl9ob29rcyIsIl9sb2FkaW5nUGFnZSIsIl9qdmlldyIsIl9iZXlvbmRfY29udGV4dCIsIl9jb250ZXh0IiwiX3JvdyIsIl9icmVhZGNydW1iIiwiX3dyYXBwZXIiLCJfcm91dGluZyIsInNwZWNzIiwic3RvcmUiLCJyZWFkeSIsInRleHRzIiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRJdGVtcyIsInVzZVN0YXRlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwicmVmIiwidXNlUmVmIiwid2lkdGgiLCJ1c2VXaW5kb3dTaXplIiwidXNlQmluZGVyIiwiY3JlYXRlRWxlbWVudCIsIkxvYWRpbmdQYWdlIiwibmF2aWdhdGUiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiZGF0YUhlYWQiLCJlbnRyaWVzIiwib25OZXh0IiwicGFnZXJOZXh0Iiwicm93cyIsIlJvdyIsImxvYWRpbmciLCJpc1NlYXJjaCIsIm9uU2VhcmNoIiwib25DbGVhciIsInBsYWNlaG9sZGVyIiwic2VhcmNoUGxhY2Vob2xkZXIiLCJhY3Rpb25zIiwiY3JlYXRlIiwibGFiZWwiLCJnb1RvQ3JlYXRlIiwib25DbGljayIsInBhbmVsIiwidGFibGVzIiwic2Vzc2lvbiIsInVzZXIiLCJtYXgiLCJpc01heCIsInNhdmUiLCJicmVhZGNydW1iIiwiUHJvdmlkZXIiLCJCcmVhZENydW1iIiwidGl0bGUiLCJKVmlldyIsImtleSIsImNsYXNzTmFtZSIsIl9zZWFyY2giLCJfY29tcG9uZW50cyIsIlNlYXJjaGJhciIsInVzZVVzZXJzQ29udGV4dCIsImhhbmRsZVNlYXJjaCIsInBhcmFtcyIsInRvTG93ZXJDYXNlIiwiaGFuZGxlQ2xlYXIiLCJTZWFyY2giLCJkYXRlIiwiaXNDbGVhciIsImRpYWxvZ1RpdGxlIiwic2VhcmNoRGlhbG9nVGl0bGUiLCJzZWFyY2hhYmxlTGlzdCIsIkJ1dHRvbiIsImljb24iXSwic291cmNlcyI6WyIvd2lkZ2V0L3RzL2NvbnRyb2xsZXIudHMiLCIvd2lkZ2V0L3RzL21hbmFnZXIudHMiLCIvdHlwZXMudHMiLCIvd2lkZ2V0L3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvd2lkZ2V0L3RzL3ZpZXdzL2luZGV4LnRzeCIsIi93aWRnZXQvdHMvdmlld3MvanZpZXcvcm93LnRzeCIsIi93aWRnZXQvdHMvdmlld3Mva2V5cy50cyIsIi93aWRnZXQvdHMvdmlld3Mvc2VhcmNoLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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