System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.4/base", "@beyond-js/reactive@1.1.14/model", "@bg/auth-api@1.0.0/entities.ts", "@bg/jadmin@0.0.1/config", "react@18.2.0", "pragmate-ui@0.1.2/modal", "@jadmin/ui@1.0.0/hooks", "@bgroup/jview@1.0.3/jview", "@bg/jadmin@0.0.1/breadcrumb", "@bg/auth-api@1.0.0/wrapper.ts", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.2/icons", "pragmate-ui@0.1.2/components", "@bg/jadmin@0.0.1/app-icon", "pragmate-ui@0.1.2/image", "@bg/jadmin@0.0.1/search.code", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_pragmateUi012Modal) {
      dependency_7 = _pragmateUi012Modal;
    }, function (_jadminUi100Hooks) {
      dependency_8 = _jadminUi100Hooks;
    }, function (_bgroupJview103Jview) {
      dependency_9 = _bgroupJview103Jview;
    }, function (_bgJadmin001Breadcrumb) {
      dependency_10 = _bgJadmin001Breadcrumb;
    }, function (_bgAuthApi100WrapperTs) {
      dependency_11 = _bgAuthApi100WrapperTs;
    }, function (_beyondJsKernel019Routing) {
      dependency_12 = _beyondJsKernel019Routing;
    }, function (_pragmateUi012Icons) {
      dependency_13 = _pragmateUi012Icons;
    }, function (_pragmateUi012Components) {
      dependency_14 = _pragmateUi012Components;
    }, function (_bgJadmin001AppIcon) {
      dependency_15 = _bgJadmin001AppIcon;
    }, function (_pragmateUi012Image) {
      dependency_16 = _pragmateUi012Image;
    }, function (_bgJadmin001SearchCode) {
      dependency_17 = _bgJadmin001SearchCode;
    }, function (_beyondJsKernel019Styles) {
      dependency_18 = _beyondJsKernel019Styles;
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
          "vspecifier": "@bg/jadmin@0.0.1/users-list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/base', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@bg/auth-api/entities.ts', dependency_4], ['@bg/jadmin/config', dependency_5], ['react', dependency_6], ['pragmate-ui/modal', dependency_7], ['@jadmin/ui/hooks', dependency_8], ['@bgroup/jview/jview', dependency_9], ['@bg/jadmin/breadcrumb', dependency_10], ['@bg/auth-api/wrapper.ts', dependency_11], ['@beyond-js/kernel/routing', dependency_12], ['pragmate-ui/icons', dependency_13], ['pragmate-ui/components', dependency_14], ['@bg/jadmin/app-icon', dependency_15], ['pragmate-ui/image', dependency_16], ['@bg/jadmin/search.code', dependency_17], ['@beyond-js/kernel/styles', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "users-list",
        "vspecifier": "@bg/jadmin@0.0.1/users-list.widget",
        "is": "page",
        "route": "/users",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/jadmin@0.0.1/users-list.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1127077195,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _views = require("./views");
          var _keys = require("./views/keys");
          var _manager = require("./manager");
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
              const entity = `${userId}-users`;
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
        hash: 1369541956,
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
            #users = new _entities.Users();
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
              name: false,
              lastName: false,
              email: false
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
            load = async () => {
              try {
                this.fetching = true;
                this.triggerEvent('fetching');
                await this.#users.load({
                  statusId: 1,
                  start: this.#next,
                  appToken: _config.default.params.application.token
                });
                this.#total = this.#users.counters.total;
                this.#next = this.#users.next;
                this.#items = this.#users.items;
                this.triggerEvent('items-changed');
              } catch (error) {
                console.error(error);
              } finally {
                this.fetching = false;
                this.triggerEvent('fetching');
                this.ready = true;
                this.triggerEvent();
              }
            };
            search = async ({
              search
            }) => {
              try {
                // TODO CUANDO SE REALICE UNA BUSQUEDA SETEAR PAG => 1
                this.fetching = true;
                this.triggerEvent('fetching');
                await this.#users.load({
                  statusId: 1,
                  user: search,
                  names: search,
                  lastNames: search,
                  email: search,
                  operand: 6,
                  additionalOperand: 7,
                  appToken: _config.default.params.application.token
                });
                this.#total = this.#users.counters.total;
                this.#next = this.#users.next;
                this.#items = this.#users.items;
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
                const response = await this.#users.load(this.#params);
                if (!response.status) throw new Error(response.error);
                this.#items = response.data;
                this.#currentPage = page;
                this.triggerEvent();
                return this.#users.items;
              } catch (error) {
                console.error('error', error);
              } finally {
                this.fetching = false;
              }
            };
            delete = async userId => {
              try {
                const DELETED_STATUS = 3;
                this.fetching = true;
                this.triggerEvent('fetching');
                const user = new _entities.User();
                await user.load({
                  id: userId
                });
                await user.set({
                  statusId: DELETED_STATUS
                });
                await user.publish();
                this.#items = this.#users.items.filter(user => user.id !== userId);
                this.triggerEvent('items-changed');
              } catch (error) {
                console.error(error);
              } finally {
                this.fetching = false;
                this.triggerEvent('fetching');
              }
            };
            clean = () => {};
            clearSearch = async () => {
              this.#next = 0;
              this.fetching = true;
              this.triggerEvent('fetching');
              await this.#users.load({
                statusId: 1,
                start: this.#next
              });
              this.#items = this.#users.items;
              this.triggerEvent('items-changed');
              this.fetching = false;
              this.triggerEvent('fetching');
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
              this.#items = this.#users.items.sort(sort);
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
              const response = await this.#users.load(this.#params);
              this.#items = response.data;
              this.#currentPage = Math.min(this.#currentPage, pages);
              this.fetching = false;
              this.triggerEvent();
              return this.#currentPage;
            };
          }
          exports.Manager = Manager;
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 3025822516,
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

      /************************************
      INTERNAL MODULE: ./views/delete-modal
      ************************************/

      ims.set('./views/delete-modal', {
        hash: 3367597159,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DeleteModal = DeleteModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _context = require("./context");
          function DeleteModal() {
            const {
              onCloseModal,
              store,
              texts,
              modal
            } = (0, _context.useUsersContext)();
            async function handleConfirm() {
              await store.delete(modal.payload);
              onCloseModal();
            }
            return _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              className: "modal-jadmin",
              title: texts.titleModal,
              text: texts.areYouSureDeleteUser,
              onCancel: onCloseModal,
              onConfirm: handleConfirm
            });
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 414588357,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _hooks = require("@jadmin/ui/hooks");
          var _jview = require("@bgroup/jview/jview");
          var _beyond_context = require("beyond_context");
          var _context = require("./context");
          var _row = require("./jview/row");
          var _deleteModal = require("./delete-modal");
          var _breadcrumb = require("@bg/jadmin/breadcrumb");
          var _header = require("./jview/header");
          var _wrapper = require("@bg/auth-api/wrapper.ts");
          var _routing = require("@beyond-js/kernel/routing");
          var _keys = require("./keys");
          /*bundle*/
          function View({
            store: model
          }) {
            const [ready, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [items, setItems] = React.useState({});
            const [modal, setModal] = React.useState(null);
            const {
              width
            } = (0, _hooks.useWindowSize)();
            (0, _hooks.useBinder)([model], () => setItems({}));
            const ref = React.useRef(null);
            const navigate = () => _routing.routing.pushState('/users/management/create');
            function onCloseModal() {
              setModal(null);
            }
            if (!ready) {
              return null;
            }
            const value = {
              dataHead: [{
                label: 'Nombre',
                id: '1'
              }, {
                label: 'Apellido',
                id: '2'
              }, {
                label: 'Apellido',
                id: '3'
              }],
              entries: model.items,
              currentPage: model.currentPage,
              total: model.total,
              onNext: model.navigation,
              pagerNext: true,
              rows: width > 1280 ? 10 : 6,
              item: _row.Row,
              onPrev: model.navigation,
              loading: model.fetching,
              isSearch: true,
              header: React.createElement(_header.Header, null),
              search: {
                onSearch: model.search,
                onClear: model.load,
                placeholder: texts.searchPlaceholder
              },
              actions: {
                create: {
                  label: texts.goToCreateUser,
                  onClick: navigate
                }
              },
              panel: {
                tables: _keys.head,
                entity: `${_wrapper.session.user.id}-users`,
                max: 3,
                isMax: true,
                ref,
                save: tables => {
                  model.keys = tables.map(item => item.id);
                  model.heads = tables;
                }
              }
            };
            const breadcrumb = [[`/users`, 'Listado']];
            return React.createElement(_context.UsersContext.Provider, {
              value: {
                model,
                items: model.items,
                setItems,
                texts,
                onCloseModal,
                modal,
                setModal
              }
            }, React.createElement("div", null, React.createElement(_breadcrumb.BreadCrumb, {
              title: texts.title,
              items: breadcrumb
            }), React.createElement(_jview.JView, {
              ...value
            })), modal?.type === 'delete' && React.createElement(_deleteModal.DeleteModal, null));
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
        hash: 2110176216,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Row = Row;
          var React = require("react");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          function Row({
            item
          }) {
            const {
              setModal
            } = (0, _context.useUsersContext)();
            const {
              model
            } = (0, _context.useUsersContext)();
            function openDeleteModal() {
              setModal({
                type: 'delete',
                payload: item.id
              });
            }
            const entries = model.keys.map(key => {
              return React.createElement("td", {
                key: key
              }, React.createElement("span", null, item[key] ?? 'Sin valor'));
            });
            return React.createElement("tr", {
              className: "table__row"
            }, entries, React.createElement("td", {
              className: "edit__container icon-container"
            }, React.createElement(_icons.IconButton, {
              className: "icon",
              icon: "delete",
              onClick: openDeleteModal
            }), React.createElement(_icons.IconButton, {
              className: "icon",
              icon: "edit",
              navigate: `/users/management/${item.id}`
            })));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/jview/user
      **********************************/

      ims.set('./views/jview/user', {
        hash: 3500731548,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.User = User;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _appIcon = require("@bg/jadmin/app-icon");
          var _image = require("pragmate-ui/image");
          var _context = require("../context");
          function User({
            item
          }) {
            const {
              setModal,
              texts
            } = (0, _context.useUsersContext)();
            function openDeleteModal() {
              setModal({
                type: 'delete',
                payload: item.id
              });
            }
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
            }, React.createElement("h4", null, item.names, " ", item.lastNames ?? ''), React.createElement("span", null, item.email))), React.createElement("div", {
              className: "user-buttons"
            }, React.createElement(_components.Button, {
              label: "Chat",
              disabled: true,
              className: "btn btn-primary"
            }), React.createElement(_components.Button, {
              label: item?.profile ?? texts.withoutProfile,
              className: "btn btn-secondary"
            })), React.createElement(_appIcon.AppIconButton, {
              icon: "delete",
              onClick: openDeleteModal
            }));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/keys
      ****************************/

      ims.set('./views/keys', {
        hash: 4006726828,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.head = void 0;
          const head = exports.head = [{
            label: "Nombre",
            id: "name"
          }, {
            label: "Apellido",
            id: "lastName"
          }, {
            label: "Correo",
            id: "email"
          }];
        }
      });

      /******************************
      INTERNAL MODULE: ./views/search
      ******************************/

      ims.set('./views/search', {
        hash: 2392705142,
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
                search,
                email,
                names
              } = params;
              search = search && search.toLowerCase();
              email = email && email.toLowerCase();
              names = names && names.toLowerCase();
              await store.search(search);
              return store.items;
            }
            async function handleClear() {
              await store.clearSearch();
            }
            const filter = [{
              id: '8',
              name: texts.head.names,
              identifier: 'names'
            }, {
              id: '5',
              name: texts.head.email,
              identifier: 'email'
            }];
            const initValues = {
              user: '',
              email: ''
            };
            const goToCreateUser = () => {
              _routing.routing.pushState('/users/management/create');
            };
            return React.createElement("div", {
              className: "search__card"
            }, React.createElement(_search.Search, {
              filter: filter,
              date: false,
              initValues: initValues,
              onSearch: handleSearch,
              placeholder: texts.searchPlaceholder,
              isClear: true,
              onClear: handleClear,
              dialogTitle: texts.searchDialogTitle,
              searchableList: false
            }), React.createElement(_components.Button, {
              onClick: goToCreateUser,
              className: "create-user__button btn btn-primary",
              icon: "edit"
            }, texts.goToCreateUser));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfa2V5cyIsIl9tYW5hZ2VyIiwiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwibW9kZWwiLCJNYW5hZ2VyIiwic2hvdyIsImxvYWQiLCJ1c2VySWQiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZW50aXR5IiwiY29uZlRhYmxlcyIsImhlYWQiLCJzbGljZSIsImhlYWRzIiwia2V5cyIsIm1hcCIsIml0ZW0iLCJpZCIsImhpZGUiLCJjbGVhbiIsImV4cG9ydHMiLCJfbW9kZWwiLCJfZW50aXRpZXMiLCJfY29uZmlnIiwiUmVhY3RpdmVNb2RlbCIsIml0ZW1zIiwidXNlcnMiLCJVc2VycyIsIm5leHQiLCJ0b3RhbCIsInZhbHVlIiwidHJpZ2dlckV2ZW50IiwiY3VycmVudFBhZ2UiLCJyZXZlcnNlIiwibmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJpY29uIiwia2V5IiwibGltaXQiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBwbGljYXRpb24iLCJ0YWJsZXMiLCJyb3dzIiwic3RhcnQiLCJmZXRjaGluZyIsInN0YXR1c0lkIiwiYXBwVG9rZW4iLCJ0b2tlbiIsImNvdW50ZXJzIiwiZXJyb3IiLCJjb25zb2xlIiwicmVhZHkiLCJzZWFyY2giLCJ1c2VyIiwibmFtZXMiLCJsYXN0TmFtZXMiLCJvcGVyYW5kIiwiYWRkaXRpb25hbE9wZXJhbmQiLCJuYXZpZ2F0aW9uIiwicGFnZSIsInJlc3BvbnNlIiwic3RhdHVzIiwiRXJyb3IiLCJkYXRhIiwiZGVsZXRlIiwiREVMRVRFRF9TVEFUVVMiLCJVc2VyIiwic2V0IiwicHVibGlzaCIsImZpbHRlciIsImNsZWFyU2VhcmNoIiwiY2hhbmdlT3JkZXIiLCJldmVudCIsImRhdGFzZXQiLCJjdXJyZW50VGFyZ2V0Iiwic29ydCIsImEiLCJiIiwidG9Mb3dlckNhc2UiLCJsb2NhbGVDb21wYXJlIiwiY2hhbmdlRW50cmllcyIsInBhZ2VzIiwibmV3UGFnZXMiLCJNYXRoIiwiY2VpbCIsIm1pbiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiUmVhY3QiLCJVc2Vyc0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlVXNlcnNDb250ZXh0IiwidXNlQ29udGV4dCIsIl9yZWFjdCIsIl9tb2RhbCIsIl9jb250ZXh0IiwiRGVsZXRlTW9kYWwiLCJvbkNsb3NlTW9kYWwiLCJ0ZXh0cyIsIm1vZGFsIiwiaGFuZGxlQ29uZmlybSIsInBheWxvYWQiLCJjcmVhdGVFbGVtZW50IiwiQ29uZmlybU1vZGFsIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJ0aXRsZU1vZGFsIiwidGV4dCIsImFyZVlvdVN1cmVEZWxldGVVc2VyIiwib25DYW5jZWwiLCJvbkNvbmZpcm0iLCJfaG9va3MiLCJfanZpZXciLCJfYmV5b25kX2NvbnRleHQiLCJfcm93IiwiX2RlbGV0ZU1vZGFsIiwiX2JyZWFkY3J1bWIiLCJfaGVhZGVyIiwiX3dyYXBwZXIiLCJfcm91dGluZyIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0SXRlbXMiLCJ1c2VTdGF0ZSIsInNldE1vZGFsIiwid2lkdGgiLCJ1c2VXaW5kb3dTaXplIiwidXNlQmluZGVyIiwicmVmIiwidXNlUmVmIiwibmF2aWdhdGUiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiZGF0YUhlYWQiLCJsYWJlbCIsImVudHJpZXMiLCJvbk5leHQiLCJwYWdlck5leHQiLCJSb3ciLCJvblByZXYiLCJsb2FkaW5nIiwiaXNTZWFyY2giLCJoZWFkZXIiLCJIZWFkZXIiLCJvblNlYXJjaCIsIm9uQ2xlYXIiLCJwbGFjZWhvbGRlciIsInNlYXJjaFBsYWNlaG9sZGVyIiwiYWN0aW9ucyIsImNyZWF0ZSIsImdvVG9DcmVhdGVVc2VyIiwib25DbGljayIsInBhbmVsIiwic2Vzc2lvbiIsIm1heCIsImlzTWF4Iiwic2F2ZSIsImJyZWFkY3J1bWIiLCJQcm92aWRlciIsIkJyZWFkQ3J1bWIiLCJKVmlldyIsInR5cGUiLCJfaWNvbnMiLCJJY29uQnV0dG9uIiwiRnJhZ21lbnQiLCJvcGVuRGVsZXRlTW9kYWwiLCJfY29tcG9uZW50cyIsIl9hcHBJY29uIiwiX2ltYWdlIiwiSW1hZ2UiLCJhbHQiLCJCdXR0b24iLCJkaXNhYmxlZCIsInByb2ZpbGUiLCJ3aXRob3V0UHJvZmlsZSIsIkFwcEljb25CdXR0b24iLCJfc2VhcmNoIiwiU2VhcmNoYmFyIiwiaGFuZGxlU2VhcmNoIiwiaGFuZGxlQ2xlYXIiLCJpZGVudGlmaWVyIiwiaW5pdFZhbHVlcyIsIlNlYXJjaCIsImRhdGUiLCJpc0NsZWFyIiwiZGlhbG9nVGl0bGUiLCJzZWFyY2hEaWFsb2dUaXRsZSIsInNlYXJjaGFibGVMaXN0Il0sInNvdXJjZXMiOlsiL3dpZGdldC90cy9jb250cm9sbGVyLnRzIiwiL3dpZGdldC90cy9tYW5hZ2VyLnRzIiwiL3R5cGVzLnRzIiwiL3dpZGdldC90cy92aWV3cy9jb250ZXh0LnRzIiwiL3dpZGdldC90cy92aWV3cy9kZWxldGUtbW9kYWwudHN4IiwiL3dpZGdldC90cy92aWV3cy9pbmRleC50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL2p2aWV3L2hlYWRlci50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL2p2aWV3L3Jvdy50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL2p2aWV3L3VzZXIudHN4IiwiL3dpZGdldC90cy92aWV3cy9rZXlzLnRzIiwiL3dpZGdldC90cy92aWV3cy9zZWFyY2gudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxH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