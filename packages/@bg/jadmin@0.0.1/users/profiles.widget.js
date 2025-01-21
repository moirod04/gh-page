System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.4/base", "@beyond-js/reactive@1.1.14/model", "@bg/auth-api@1.0.0/entities.ts", "@bg/jadmin@0.0.1/config", "react@18.2.0", "@bg/jadmin@0.0.1/breadcrumb", "@jadmin/ui@1.0.0/hooks", "@bgroup/jview@1.0.3/jview", "@beyond-js/kernel@0.1.9/routing", "@bg/auth-api@1.0.0/wrapper.ts", "pragmate-ui@0.1.2/icons", "@bg/jadmin@0.0.1/search.code", "pragmate-ui@0.1.2/components", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_bgAuthApi100EntitiesTs) {
      dependency_4 = _bgAuthApi100EntitiesTs;
    }, function (_bgJadmin001Config) {
      dependency_5 = _bgJadmin001Config;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_bgJadmin001Breadcrumb) {
      dependency_7 = _bgJadmin001Breadcrumb;
    }, function (_jadminUi100Hooks) {
      dependency_8 = _jadminUi100Hooks;
    }, function (_bgroupJview103Jview) {
      dependency_9 = _bgroupJview103Jview;
    }, function (_beyondJsKernel019Routing) {
      dependency_10 = _beyondJsKernel019Routing;
    }, function (_bgAuthApi100WrapperTs) {
      dependency_11 = _bgAuthApi100WrapperTs;
    }, function (_pragmateUi012Icons) {
      dependency_12 = _pragmateUi012Icons;
    }, function (_bgJadmin001SearchCode) {
      dependency_13 = _bgJadmin001SearchCode;
    }, function (_pragmateUi012Components) {
      dependency_14 = _pragmateUi012Components;
    }, function (_beyondJsKernel019Styles) {
      dependency_15 = _beyondJsKernel019Styles;
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
          "vspecifier": "@bg/jadmin@0.0.1/users/profiles",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/base', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@bg/auth-api/entities.ts', dependency_4], ['@bg/jadmin/config', dependency_5], ['react', dependency_6], ['@bg/jadmin/breadcrumb', dependency_7], ['@jadmin/ui/hooks', dependency_8], ['@bgroup/jview/jview', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['@bg/auth-api/wrapper.ts', dependency_11], ['pragmate-ui/icons', dependency_12], ['@bg/jadmin/search.code', dependency_13], ['pragmate-ui/components', dependency_14], ['@beyond-js/kernel/styles', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "users-profiles",
        "vspecifier": "@bg/jadmin@0.0.1/users/profiles.widget",
        "is": "page",
        "route": "/profiles",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/jadmin@0.0.1/users/profiles.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3462383796,
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
            #store;
            createStore() {
              const model = new _manager.Manager();
              this.#store = model;
              return this.#store;
            }
            show() {
              if (!this.#store) return;
              this.#store.load();
              const {
                userId
              } = JSON.parse(localStorage.getItem('session'));
              const entity = `${userId}-profile`;
              const confTables = !!localStorage.getItem(entity) ? JSON.parse(localStorage.getItem(entity)) : _keys.head.slice(0, 9);
              this.#store.heads = confTables;
              this.#store.keys = confTables.map(item => item.id);
            }
            hide() {
              this.#store.clean();
            }
          }
          exports.Controller = Controller;
        }
      });

      /*************************
      INTERNAL MODULE: ./manager
      *************************/

      ims.set('./manager', {
        hash: 3927315263,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Manager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _entities = require("@bg/auth-api/entities.ts");
          var _config = require("@bg/jadmin/config");
          class Manager extends _model.ReactiveModel {
            #items = [];
            get items() {
              return this.#items;
            }
            #profiles;
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
            #currentPage = 1;
            get currentPage() {
              return this.#currentPage;
            }
            #reverse = {
              profile: false,
              description: false
            };
            icon = key => {
              return this.#reverse[key] ? 'arrowDropUp' : 'arrowDropDown';
            };
            #limit = _config.default.params.application.tables.rows;
            get limit() {
              return this.#limit;
            }
            #params = {
              limit: this.#limit,
              start: 0
            };
            constructor() {
              super();
              this.#profiles = new _entities.Profiles();
            }
            load = async () => {
              try {
                this.fetching = true;
                this.triggerEvent('fetching');
                await this.#profiles.load({
                  start: this.#next
                });
                this.#items = this.#profiles.items;
                this.#total = this.#profiles.counters.total;
                this.#next = this.#profiles.next;
                this.triggerEvent('items-changed');
              } catch (error) {
                console.error(error);
              } finally {
                this.fetching = false;
                this.ready = true;
                this.triggerEvent();
                this.triggerEvent('fetching');
              }
            };
            search = async ({
              search
            }) => {
              try {
                this.fetching = true;
                this.triggerEvent('fetching');
                await this.#profiles.load({
                  profile: search,
                  operand: 6,
                  additionalOperand: 7
                });
                this.#total = this.#profiles.counters.total;
                this.#next = this.#profiles.next;
                this.#items = this.#profiles.items;
                this.triggerEvent('items-changed');
              } catch (error) {
                console.error(error);
              } finally {
                this.fetching = false;
                this.triggerEvent('fetching');
              }
            };
            navigation = async ({
              page
            }) => {
              try {
                this.fetching = true;
                this.#params = {
                  ...this.#params,
                  limit: this.#limit,
                  start: this.#limit * (page - 1)
                };
                const response = await this.#profiles.load(this.#params);
                if (!response.status) throw new Error(response.error);
                this.#items = response.data;
                this.#currentPage = page;
                this.triggerEvent();
                return this.#profiles.items;
              } catch (error) {
                console.error('error', error);
              } finally {
                this.fetching = false;
              }
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
              this.#items = this.#profiles.items.sort(sort);
              this.#reverse[key] = !this.#reverse[key];
              this.triggerEvent();
            };
            changeEntries = async ({
              limit,
              total,
              pages
            }) => {
              this.fetching = true;
              const newPages = Math.ceil(total / limit);
              this.#currentPage = Math.min(Math.ceil(this.#currentPage * this.#limit / limit), newPages);
              this.#limit = limit;
              this.#params = {
                ...this.#params,
                limit: this.#limit,
                start: (this.#currentPage - 1) * limit
              };
              const response = await this.#profiles.load(this.#params);
              this.#items = response.data;
              this.#currentPage = Math.min(this.#currentPage, pages);
              this.fetching = false;
              this.triggerEvent();
              return this.#currentPage;
            };
            clean = () => {};
            clearSearch = async () => {
              this.#next = 0;
              this.fetching = true;
              this.triggerEvent('fetching');
              await this.#profiles.load({
                start: this.#next
              });
              this.#items = this.#profiles.items;
              this.triggerEvent('items-changed');
              this.fetching = false;
              this.triggerEvent('fetching');
            };
          }
          exports.Manager = Manager;
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 3819798354,
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
        hash: 2871745370,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useUsersContext = exports.UsersContext = void 0;
          var React = require("react");
          const UsersContext = exports.UsersContext = React.createContext({});
          const useUsersContext = () => React.useContext(UsersContext);
          exports.useUsersContext = useUsersContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3745233949,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _breadcrumb = require("@bg/jadmin/breadcrumb");
          var _hooks = require("@jadmin/ui/hooks");
          var _jview = require("@bgroup/jview/jview");
          var _beyond_context = require("beyond_context");
          var _context = require("./context");
          var _row = require("./jview/row");
          var _routing = require("@beyond-js/kernel/routing");
          var _wrapper = require("@bg/auth-api/wrapper.ts");
          var _keys = require("./keys");
          var _header = require("./jview/header");
          /*bundle*/
          function View({
            store: model
          }) {
            const [ready, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [items, setItems] = React.useState({});
            (0, _hooks.useBinder)([model], () => setItems({}));
            const ref = React.useRef(null);
            const navigate = () => _routing.routing.pushState('/profile/management/create');
            if (!ready) return null;
            const value = {
              dataHead: [{
                label: 'Nombre',
                id: '1'
              }, {
                label: 'description',
                id: '2'
              }],
              entries: model.items,
              currentPage: model.currentPage,
              item: _row.Row,
              rows: model.limit,
              total: model.total,
              pagerNext: true,
              onNext: model.navigation,
              onPrev: model.navigation,
              loading: model.fetching,
              isSearch: true,
              header: React.createElement(_header.Header, null),
              search: {
                onSearch: model.search,
                onClear: model.load,
                placeholder: texts.searchPlaceholder
              },
              panel: {
                tables: _keys.head,
                entity: `${_wrapper.session.user.id}-profile`,
                max: 2,
                isMax: true,
                ref,
                save: tables => {
                  model.keys = tables.map(item => item.id);
                  model.heads = tables;
                }
              },
              actions: {
                create: {
                  label: 'Crear perfil de usuario'
                }
              }
            };
            const breadcrumb = [[`/profiles`, 'Listado']];
            return React.createElement(_context.UsersContext.Provider, {
              value: {
                model,
                items: model.items,
                setItems,
                texts
              }
            }, React.createElement("div", {
              className: "table"
            }, React.createElement(_breadcrumb.BreadCrumb, {
              title: "Perfiles",
              items: breadcrumb
            }), React.createElement(_jview.JView, {
              ...value
            })));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/jview/header
      ************************************/

      ims.set('./views/jview/header', {
        hash: 3973652571,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../context");
          function Header() {
            const {
              model
            } = (0, _context.useUsersContext)();
            const heads = model.heads.map(item => {
              return React.createElement("th", {
                key: item.id
              }, React.createElement("span", {
                className: "arrow-order"
              }, item.label, React.createElement(_icons.IconButton, {
                icon: model.icon(item.id),
                "data-key": item.id,
                onClick: model.changeOrder
              })));
            });
            return React.createElement(React.Fragment, null, heads, React.createElement("th", null));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/jview/row
      *********************************/

      ims.set('./views/jview/row', {
        hash: 3886801023,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Row = Row;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _routing = require("@beyond-js/kernel/routing");
          var _context = require("../context");
          function Row({
            item
          }) {
            const {
              model
            } = (0, _context.useUsersContext)();
            const handleOnEdit = () => {
              _routing.routing.pushState(`/profile/management/${item.id}`);
            };
            const entries = model.keys.map(key => {
              return _react.default.createElement("td", {
                key: key
              }, _react.default.createElement("span", null, item[key] ?? 'Sin valor'));
            });
            return _react.default.createElement("tr", {
              className: "table__row"
            }, entries, _react.default.createElement("td", {
              className: "edit__container icon-container"
            }, _react.default.createElement("span", null, _react.default.createElement(_icons.IconButton, {
              onClick: handleOnEdit,
              icon: "pencil"
            }))));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/keys
      ****************************/

      ims.set('./views/keys', {
        hash: 128166538,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.head = void 0;
          const head = exports.head = [{
            label: "Nombre",
            id: "profile"
          }, {
            label: "Descripcion",
            id: "description"
          }];
        }
      });

      /******************************
      INTERNAL MODULE: ./views/search
      ******************************/

      ims.set('./views/search', {
        hash: 3981573951,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Searchbar = Searchbar;
          var _react = require("react");
          var _search = require("@bg/jadmin/search.code");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          function Searchbar() {
            const {
              model,
              setItems,
              texts
            } = (0, _context.useUsersContext)();
            async function handleSearch(params) {
              let {
                search,
                name,
                role
              } = params;
              search = search && search.toLowerCase();
              name = name && name.toLowerCase();
              model.search(search);
            }
            async function handleClear() {
              await model.clearSearch();
            }
            const filter = [{
              id: '1',
              name: texts.head.name,
              identifier: 'name'
            }];
            const initValues = {
              name: ''
            };
            return _react.default.createElement("div", {
              className: "search__card"
            }, _react.default.createElement(_search.Search, {
              filter: filter,
              date: false,
              initValues: initValues,
              onSearch: handleSearch,
              placeholder: "Buscar",
              isClear: true,
              onClear: handleClear,
              searchableList: false,
              dialogTitle: texts.searchDialogTitle
            }), _react.default.createElement(_components.Button, {
              navigate: "/profile/management/create",
              className: "create-user__button btn btn-primary",
              icon: "edit"
            }, texts.goToCreateProfile));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfbWFuYWdlciIsIl9rZXlzIiwiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwibW9kZWwiLCJNYW5hZ2VyIiwic2hvdyIsImxvYWQiLCJ1c2VySWQiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZW50aXR5IiwiY29uZlRhYmxlcyIsImhlYWQiLCJzbGljZSIsImhlYWRzIiwia2V5cyIsIm1hcCIsIml0ZW0iLCJpZCIsImhpZGUiLCJjbGVhbiIsImV4cG9ydHMiLCJfbW9kZWwiLCJfZW50aXRpZXMiLCJfY29uZmlnIiwiUmVhY3RpdmVNb2RlbCIsIml0ZW1zIiwicHJvZmlsZXMiLCJuZXh0IiwidG90YWwiLCJ2YWx1ZSIsInRyaWdnZXJFdmVudCIsImN1cnJlbnRQYWdlIiwicmV2ZXJzZSIsInByb2ZpbGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJrZXkiLCJsaW1pdCIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcHBsaWNhdGlvbiIsInRhYmxlcyIsInJvd3MiLCJzdGFydCIsImNvbnN0cnVjdG9yIiwiUHJvZmlsZXMiLCJmZXRjaGluZyIsImNvdW50ZXJzIiwiZXJyb3IiLCJjb25zb2xlIiwicmVhZHkiLCJzZWFyY2giLCJvcGVyYW5kIiwiYWRkaXRpb25hbE9wZXJhbmQiLCJuYXZpZ2F0aW9uIiwicGFnZSIsInJlc3BvbnNlIiwic3RhdHVzIiwiRXJyb3IiLCJkYXRhIiwiY2hhbmdlT3JkZXIiLCJldmVudCIsImRhdGFzZXQiLCJjdXJyZW50VGFyZ2V0Iiwic29ydCIsImEiLCJiIiwidG9Mb3dlckNhc2UiLCJsb2NhbGVDb21wYXJlIiwiY2hhbmdlRW50cmllcyIsInBhZ2VzIiwibmV3UGFnZXMiLCJNYXRoIiwiY2VpbCIsIm1pbiIsImNsZWFyU2VhcmNoIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJSZWFjdCIsIlVzZXJzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VVc2Vyc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2JyZWFkY3J1bWIiLCJfaG9va3MiLCJfanZpZXciLCJfYmV5b25kX2NvbnRleHQiLCJfY29udGV4dCIsIl9yb3ciLCJfcm91dGluZyIsIl93cmFwcGVyIiwiX2hlYWRlciIsInRleHRzIiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRJdGVtcyIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwicmVmIiwidXNlUmVmIiwibmF2aWdhdGUiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiZGF0YUhlYWQiLCJsYWJlbCIsImVudHJpZXMiLCJSb3ciLCJwYWdlck5leHQiLCJvbk5leHQiLCJvblByZXYiLCJsb2FkaW5nIiwiaXNTZWFyY2giLCJoZWFkZXIiLCJjcmVhdGVFbGVtZW50IiwiSGVhZGVyIiwib25TZWFyY2giLCJvbkNsZWFyIiwicGxhY2Vob2xkZXIiLCJzZWFyY2hQbGFjZWhvbGRlciIsInBhbmVsIiwic2Vzc2lvbiIsInVzZXIiLCJtYXgiLCJpc01heCIsInNhdmUiLCJhY3Rpb25zIiwiY3JlYXRlIiwiYnJlYWRjcnVtYiIsIlByb3ZpZGVyIiwiY2xhc3NOYW1lIiwiQnJlYWRDcnVtYiIsInRpdGxlIiwiSlZpZXciLCJfaWNvbnMiLCJJY29uQnV0dG9uIiwib25DbGljayIsIkZyYWdtZW50IiwiX3JlYWN0IiwiaGFuZGxlT25FZGl0IiwiX3NlYXJjaCIsIl9jb21wb25lbnRzIiwiU2VhcmNoYmFyIiwiaGFuZGxlU2VhcmNoIiwibmFtZSIsInJvbGUiLCJoYW5kbGVDbGVhciIsImZpbHRlciIsImlkZW50aWZpZXIiLCJpbml0VmFsdWVzIiwiU2VhcmNoIiwiZGF0ZSIsImlzQ2xlYXIiLCJzZWFyY2hhYmxlTGlzdCIsImRpYWxvZ1RpdGxlIiwic2VhcmNoRGlhbG9nVGl0bGUiLCJCdXR0b24iLCJnb1RvQ3JlYXRlUHJvZmlsZSJdLCJzb3VyY2VzIjpbIi93aWRnZXQvdHMvY29udHJvbGxlci50cyIsIi93aWRnZXQvdHMvbWFuYWdlci50cyIsIi90eXBlcy50cyIsIi93aWRnZXQvdHMvdmlld3MvY29udGV4dC50cyIsIi93aWRnZXQvdHMvdmlld3MvaW5kZXgudHN4IiwiL3dpZGdldC90cy92aWV3cy9qdmlldy9oZWFkZXIudHN4IiwiL3dpZGdldC90cy92aWV3cy9qdmlldy9yb3cudHN4IiwiL3dpZGdldC90cy92aWV3cy9rZXlzLnRzIiwiL3dpZGdldC90cy92aWV3cy9zZWFyY2gudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFFQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxLQUFBLEdBQUFILE9BQUE7VUFFTztVQUFVLE1BQ1ZJLFVBQVcsU0FBUUwsS0FBQSxDQUFBTSxxQkFBcUI7WUFDOUMsSUFBSUMsTUFBTUEsQ0FBQTtjQUNULE9BQU9MLE1BQUEsQ0FBQU0sSUFBSTtZQUNaO1lBRUEsQ0FBQUMsS0FBTTtZQUVOQyxXQUFXQSxDQUFBO2NBQ1YsTUFBTUMsS0FBSyxHQUFHLElBQUlSLFFBQUEsQ0FBQVMsT0FBTyxFQUFFO2NBQzNCLElBQUksQ0FBQyxDQUFBSCxLQUFNLEdBQUdFLEtBQUs7Y0FDbkIsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUVBSSxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBSixLQUFNLEVBQUU7Y0FDbEIsSUFBSSxDQUFDLENBQUFBLEtBQU0sQ0FBQ0ssSUFBSSxFQUFFO2NBQ2xCLE1BQU07Z0JBQUVDO2NBQU0sQ0FBRSxH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