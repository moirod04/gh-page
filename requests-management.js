System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.4/page", "@beyond-js/reactive@1.1.14/model", "react@18.2.0", "sgs-workflow@1.0.0/api", "sgs-workflow@1.0.0/config", "sgs-workflow@1.0.0/input", "dayjs@1.11.10", "pragmate-ui@0.1.2/components", "@bgroup/jview@1.0.3/hooks", "pragmate-ui@0.1.2/modal", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.2/breadcrumb", "pragmate-ui@0.1.2/form", "pragmate-ui@0.1.2/icons", "@bgroup/jview@1.0.3/jview", "@beyond-js/react-18-widgets@1.0.4/hooks", "@bgroup/jview@1.0.3/loading-page", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets016Render) {
      dependency_0 = _beyondJsWidgets016Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets104Page) {
      dependency_2 = _beyondJsReact18Widgets104Page;
    }, function (_beyondJsReactive1114Model) {
      dependency_3 = _beyondJsReactive1114Model;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_sgsWorkflow100Api) {
      dependency_5 = _sgsWorkflow100Api;
    }, function (_sgsWorkflow100Config) {
      dependency_6 = _sgsWorkflow100Config;
    }, function (_sgsWorkflow100Input) {
      dependency_7 = _sgsWorkflow100Input;
    }, function (_dayjs2) {
      dependency_8 = _dayjs2;
    }, function (_pragmateUi012Components) {
      dependency_9 = _pragmateUi012Components;
    }, function (_bgroupJview103Hooks) {
      dependency_10 = _bgroupJview103Hooks;
    }, function (_pragmateUi012Modal) {
      dependency_11 = _pragmateUi012Modal;
    }, function (_beyondJsKernel019Routing) {
      dependency_12 = _beyondJsKernel019Routing;
    }, function (_pragmateUi012Breadcrumb) {
      dependency_13 = _pragmateUi012Breadcrumb;
    }, function (_pragmateUi012Form) {
      dependency_14 = _pragmateUi012Form;
    }, function (_pragmateUi012Icons) {
      dependency_15 = _pragmateUi012Icons;
    }, function (_bgroupJview103Jview) {
      dependency_16 = _bgroupJview103Jview;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_17 = _beyondJsReact18Widgets104Hooks;
    }, function (_bgroupJview103LoadingPage) {
      dependency_18 = _bgroupJview103LoadingPage;
    }, function (_beyondJsKernel019Styles) {
      dependency_19 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@bg/jadmin", "0.0.1"], ["@bg/auth-api", "1.0.0"], ["@jadmin/ui", "1.0.0"], ["@bgroup/jview", "1.0.3"], ["@bgroup/helpers", "1.0.7"], ["@bgroup/wise-form", "0.0.4"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/bee", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/reactive", "1.1.14"], ["@bgroup/http-suite", "1.0.5"], ["chart.js", "4.4.1"], ["dayjs", "1.11.10"], ["dotenv", "16.4.4"], ["express", "4.18.2"], ["framer-motion", "10.18.0"], ["googleapis", "129.0.0"], ["javascript-time-ago", "2.5.10"], ["jsonwebtoken", "9.0.2"], ["mathjs", "12.4.1"], ["moment", "2.30.1"], ["perfect-scrollbar", "1.5.5"], ["pragmate-ui", "0.1.2"], ["prismjs", "1.29.0"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-google-recaptcha", "3.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["swiper", "11.0.6"], ["tippy.js", "6.3.7"], ["use-debounce", "10.0.0"], ["uuid", "9.0.1"], ["wise-form", "0.0.4"], ["@babel/core", "7.23.9"], ["@babel/preset-env", "7.23.9"], ["@babel/preset-typescript", "7.23.3"], ["@types/react", "18.2.55"], ["@types/react-dom", "18.2.19"], ["babel-jest", "29.7.0"], ["jest", "29.7.0"], ["ts-jest", "29.1.2"], ["sgs-workflow", "1.0.0"], ["sgs-workflow", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "sgs-workflow@1.0.0/requests-management"
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['react', dependency_4], ['sgs-workflow/api', dependency_5], ['sgs-workflow/config', dependency_6], ['sgs-workflow/input', dependency_7], ['dayjs', dependency_8], ['pragmate-ui/components', dependency_9], ['@bgroup/jview/hooks', dependency_10], ['pragmate-ui/modal', dependency_11], ['@beyond-js/kernel/routing', dependency_12], ['pragmate-ui/breadcrumb', dependency_13], ['pragmate-ui/form', dependency_14], ['pragmate-ui/icons', dependency_15], ['@bgroup/jview/jview', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17], ['@bgroup/jview/loading-page', dependency_18], ['@beyond-js/kernel/styles', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "request-management",
        "vspecifier": "sgs-workflow@1.0.0/requests-management",
        "is": "page",
        "route": "/request/management/${id}",
        "layout": "main-app-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('sgs-workflow@1.0.0/requests-management');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3040747849,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          var _manager = require("./manager");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            get Widget() {
              return _views.View;
            }
            #model;
            createStore() {
              this.#model = new _manager.Model();
              return this.#model;
            }
            show() {
              this.#model.load(this.uri.vars.get('id'));
            }
            hide() {
              //	this.#model.hide();
            }
          }
          exports.Controller = Controller;
        }
      });

      /*************************
      INTERNAL MODULE: ./manager
      *************************/

      ims.set('./manager', {
        hash: 3063747169,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Model = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("sgs-workflow/api");
          var _config = require("sgs-workflow/config");
          ;
          class Model extends _model.ReactiveModel {
            #id;
            get id() {
              return this.#id;
            }
            #api = new _api.Api(_config.default.params.server);
            #taskId = 57;
            #item = {};
            get item() {
              return this.#item;
            }
            #showModal = false;
            get showModal() {
              return this.#showModal;
            }
            #userId = localStorage.getItem('session') ? JSON.parse(localStorage.getItem('session')).userId : 1;
            #items = [{
              id: 1,
              name: 'libro de ingles',
              quantity: 1,
              price: 100
            }, {
              id: 2,
              name: 'libro de biología',
              quantity: 1,
              price: 100
            }, {
              id: 3,
              name: 'libro de fisica',
              quantity: 1,
              price: 100
            }];
            get items() {
              return this.#items;
            }
            set showModal(value) {
              if (this.#showModal === value) return;
              this.#showModal = value;
              this.triggerEvent();
            }
            #selected = new Map();
            get selected() {
              return this.#selected;
            }
            load = async id => {
              this.#id = parseInt(id);
              try {
                const response = await this.#api.get(`instances/${id}`);
                if (!response.status) throw new Error(response.error.message);
                this.#taskId = response.data.taskId;
                this.#item = response.data;
                const formatedResponse = JSON.parse(response.data.data);
                const items = formatedResponse.items;
                if (response.data.data) {
                  items.forEach(item => {
                    this.#selected.set(item.id, {
                      ...item
                    });
                  });
                }
              } catch (error) {
                console.error('error', error);
              } finally {
                this.ready = true;
              }
            };
            handleModal = () => {
              this.#showModal = !this.#showModal;
              this.triggerEvent();
            };
            setProduct = async event => {
              const id = parseInt(event.currentTarget.dataset.id);
              event.stopPropagation();
              if (this.#selected.has(id)) {
                this.#selected.delete(id);
                this.triggerEvent();
                return;
              }
              const item = this.#items.find(item => item.id === id);
              if (!item) return;
              this.selected.set(id, {
                ...item
              });
              this.triggerEvent();
            };
            changeQuantity = event => {
              event.stopPropagation();
              const value = parseInt(event.currentTarget.value);
              const id = parseInt(event.currentTarget.name);
              if (!this.#selected.has(id)) return;
              this.#selected.get(id).quantity = value;
              this.triggerEvent();
            };
            advanceWorkflow = async ({
              values
            }) => {
              this.fetching = true;
              try {
                const params = {
                  userId: this.#userId,
                  processId: 4,
                  taskActionId: values.taskActionId,
                  taskId: values.taskId,
                  data: {
                    user: 'Jean',
                    userId: this.#userId,
                    total: values.total,
                    instanceId: this.#id,
                    date: values.date,
                    items: Array.from(this.#selected.values())
                  },
                  instanceId: this.#id,
                  NivelDeAprobacion: values.NivelDeAprobacion
                };
                if (values.taskId === 103) {
                  params.esGasto = true;
                  params.data.budget = values.budget;
                }
                const response = await this.#api.post(`advanceWorkflow`, params);
                if (!response.status) throw new Error(response.error.message);
                this.#item = response.data;
              } catch (error) {
                console.error('error', error);
              } finally {
                this.fetching = false;
              }
            };
          }
          exports.Model = Model;
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 2664649691,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.arr = void 0;
          const arr = exports.arr = [];
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/application-entry/form
      **********************************************/

      ims.set('./views/application-entry/form', {
        hash: 3678564372,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormEntrance = FormEntrance;
          var _react = require("react");
          var _input = require("sgs-workflow/input");
          var _dayjs = require("dayjs");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _hooks = require("@bgroup/jview/hooks");
          var _selects = require("../selects");
          var _modal = require("pragmate-ui/modal");
          var _routing = require("@beyond-js/kernel/routing");
          var _products = require("./products");
          var _breadcrumb = require("pragmate-ui/breadcrumb");
          const getCurrentDate = () => new Date().toLocaleDateString('en-CA', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric'
          }).split('/').reverse().join('-');
          function FormEntrance() {
            const {
              manager
            } = (0, _context.useRequestContext)();
            const [show, setShow] = _react.default.useState(false);
            const [reject, setReject] = _react.default.useState(false);
            function handleModal() {
              setShow(!show);
            }
            function handleReject() {
              setReject(!reject);
            }
            const format = 'YYYY-MM-DD';
            const init = {
              date: manager.item.data?.date ? (0, _dayjs.default)(manager.item.data?.date).format(format) : (0, _dayjs.default)().format(format),
              instanceId: manager.id,
              user: manager.item.data?.user ?? 'Jean'
            };
            const {
              getInput,
              fields
            } = (0, _hooks.useForm)({
              init
            });
            const subTotal = Array.from(manager.selected.values()).map(item => {
              return item.price * item.quantity;
            });
            const total = subTotal.reduce((accumulator, subtotal) => accumulator + subtotal, 0);
            const disabled = !total;
            const onConfirm = () => manager.advanceWorkflow({
              values: {
                ...fields,
                taskId: 57,
                NivelDeAprobacion: "'N22'",
                taskActionId: 1,
                total
              }
            });
            const onReject = () => manager.advanceWorkflow({
              values: {
                ...fields,
                taskId: 57,
                NivelDeAprobacion: "'N22'",
                taskActionId: 3,
                total
              }
            });
            const listItems = [['Home', `/`], ['Editar Solicitud', `${_routing.routing.uri.pathname}`]];
            return _react.default.createElement("div", {
              className: "content-form"
            }, _react.default.createElement(_breadcrumb.BreadCrumb, {
              items: listItems,
              separator: "/"
            }), _react.default.createElement("span", {
              className: "title-form"
            }, manager.item.task.name), _react.default.createElement("div", {
              className: "form-group "
            }, _react.default.createElement(_input.Input, {
              ...getInput('date'),
              label: "Fecha",
              className: "has-icon",
              required: true,
              type: "date",
              min: getCurrentDate()
            }), _react.default.createElement(_input.Input, {
              label: "id de la instancia",
              ...getInput('instanceId'),
              disabled: true
            }), _react.default.createElement(_input.Input, {
              className: "has-icon",
              required: true,
              label: "Usuario",
              ...getInput('user'),
              disabled: true
            }), _react.default.createElement(_input.Input, {
              className: "has-icon",
              required: true,
              type: "number",
              label: "monto total",
              disabled: true,
              value: total
            }), _react.default.createElement(_selects.Select, null)), _react.default.createElement("div", {
              className: "actions-form"
            }, _react.default.createElement(_components.Button, {
              variant: "secondary",
              onClick: handleReject
            }, "Rechazar"), _react.default.createElement(_components.Button, {
              onClick: handleModal,
              variant: "primary",
              disabled: disabled
            }, "Aceptar")), _react.default.createElement(_products.Products, null), show && _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              title: "Aceptar solicitud",
              text: "\u00BFDesea avanzar en el proceso de la solicitud?",
              onClose: handleModal,
              onCancel: handleModal,
              onConfirm: onConfirm
            }), reject && _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              title: "Rechazar solicitud",
              text: "\u00BFDesea avanzar en el proceso de la solicitud?",
              onClose: handleReject,
              onCancel: handleReject,
              onConfirm: onReject
            }));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./views/application-entry/products/index
      ********************************************************/

      ims.set('./views/application-entry/products/index', {
        hash: 1027520230,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Products = Products;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../../context");
          var _table = require("./table");
          function Products() {
            const {
              manager
            } = (0, _context.useRequestContext)();
            if (!manager.showModal) return null;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "beauty-modal list-modal",
              onClose: manager.handleModal
            }, _react.default.createElement(_table.Table, null));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./views/application-entry/products/item
      *******************************************************/

      ims.set('./views/application-entry/products/item', {
        hash: 1947344945,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var React = require("react");
          var _context = require("../../context");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          function Item({
            item
          }) {
            const {
              manager
            } = (0, _context.useRequestContext)();
            const isSelected = manager.selected.has(item.id);
            const cls = isSelected ? 'active item-product' : 'item-product';
            const value = isSelected ? manager.selected.get(item.id).quantity : 1;
            const icon = isSelected ? 'close' : 'check';
            return React.createElement("tr", {
              className: cls
            }, React.createElement("td", null, React.createElement("span", null, item.name)), React.createElement("td", {
              className: "td-input"
            }, isSelected ? React.createElement(_form.Input, {
              value: value,
              name: item.id,
              onChange: manager.changeQuantity,
              type: "number",
              min: 0
            }) : React.createElement("span", null, item.quantity)), React.createElement("td", null, React.createElement("span", null, item.price)), React.createElement("td", null, React.createElement("span", null, React.createElement(_icons.IconButton, {
              "data-id": item.id,
              icon: icon,
              onClick: manager.setProduct
            }))));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./views/application-entry/products/table
      ********************************************************/

      ims.set('./views/application-entry/products/table', {
        hash: 615303176,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Table = Table;
          var React = require("react");
          var _jview = require("@bgroup/jview/jview");
          var _item = require("./item");
          var _context = require("../../context");
          function Table() {
            const {
              manager
            } = (0, _context.useRequestContext)();
            const value = {
              dataHead: [{
                label: 'Nombre',
                id: '1'
              }, {
                label: 'Cantidad',
                id: '2'
              }, {
                label: 'Precio',
                id: '3'
              }],
              entries: manager.items,
              rows: 5,
              total: manager.items.length,
              pagerNext: true,
              isSearch: false,
              showSelect: false,
              title: 'Seleccione los productos que desea',
              item: _item.Item
            };
            return React.createElement("div", {
              className: "table"
            }, React.createElement(_jview.JView, {
              ...value
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 593945551,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useRequestContext = exports.RequestContext = void 0;
          var React = require("react");
          const RequestContext = exports.RequestContext = React.createContext({});
          const useRequestContext = () => React.useContext(RequestContext);
          exports.useRequestContext = useRequestContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 968978754,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _context = require("./context");
          var _form = require("./application-entry/form");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _loadingPage = require("@bgroup/jview/loading-page");
          var _form2 = require("./validate-amount/form");
          var _form3 = require("./validate-request/form");
          var _form4 = require("./validate-budget/form");
          var _form5 = require("./validate-purchased/form");
          var _form6 = require("./validate-rejected/form");
          /*bundle*/
          function View({
            store: manager
          }) {
            const [upd, setUpdate] = React.useState({});
            (0, _hooks.useBinder)([manager], () => setUpdate({}));
            if (!manager.ready) return React.createElement(_loadingPage.LoadingPage, null);
            const tasks = {
              57: _form.FormEntrance,
              100: _form2.FormValidateAmount,
              106: _form3.FormValidateRequest,
              103: _form4.FormValidateBudget,
              88: _form5.FormValidatePurchased,
              89: _form6.FormValidateRejected
            };
            const Control = tasks[manager.item.taskId];
            if (!Control) return null;
            return React.createElement(_context.RequestContext.Provider, {
              value: {
                manager
              }
            }, React.createElement(Control, null));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/selects
      *******************************/

      ims.set('./views/selects', {
        hash: 1671016708,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Select = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("./context");
          const Select = ({
            disabled
          }) => {
            const {
              manager
            } = (0, _context.useRequestContext)();
            let cls = manager.fetching ? "outside-selector outside-selector-fetching" : "outside-selector";
            if (disabled) cls += " disabled";
            return _react.default.createElement("div", {
              className: cls,
              onClick: manager.handleModal
            }, _react.default.createElement("label", {
              className: "label"
            }, "Seleccione productos"), _react.default.createElement("div", {
              className: "selector"
            }, _react.default.createElement("span", null, "Seleccione ...")), _react.default.createElement(_icons.IconButton, {
              className: "right",
              icon: "chevronRight"
            }));
          };
          exports.Select = Select;
        }
      });

      /******************************
      INTERNAL MODULE: ./views/titles
      ******************************/

      ims.set('./views/titles', {
        hash: 1155077049,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.title = void 0;
          const title = exports.title = {
            57: ' Ingreso Solicitud'
          };
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/validate-amount/form
      ********************************************/

      ims.set('./views/validate-amount/form', {
        hash: 290184238,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormValidateAmount = FormValidateAmount;
          var _react = require("react");
          var _input = require("sgs-workflow/input");
          var _dayjs = require("dayjs");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _hooks = require("@bgroup/jview/hooks");
          var _selects = require("../selects");
          var _modal = require("pragmate-ui/modal");
          var _products = require("./products");
          var _routing = require("@beyond-js/kernel/routing");
          var _breadcrumb = require("pragmate-ui/breadcrumb");
          const getCurrentDate = () => new Date().toLocaleDateString('en-CA', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric'
          }).split('/').reverse().join('-');
          function FormValidateAmount() {
            const {
              manager
            } = (0, _context.useRequestContext)();
            const [show, setShow] = _react.default.useState(false);
            const [reject, setReject] = _react.default.useState(false);
            function handleModal() {
              setShow(!show);
            }
            function handleReject() {
              setReject(!reject);
            }
            const format = 'YYYY-MM-DD';
            const init = {
              date: manager.item.data?.date ? (0, _dayjs.default)(manager.item.data?.date).format(format) : (0, _dayjs.default)().format(format),
              instanceId: manager.id,
              user: manager.item.data?.user ?? 'Jean',
              budget: 1
            };
            const {
              getInput,
              fields
            } = (0, _hooks.useForm)({
              init
            });
            const subTotal = Array.from(manager.selected.values()).map(item => {
              return item.price * item.quantity;
            });
            const total = subTotal.reduce((accumulator, subtotal) => accumulator + subtotal, 0);
            const disabled = !total;
            const onConfirm = () => manager.advanceWorkflow({
              values: {
                ...fields,
                taskId: 100,
                NivelDeAprobacion: "'N22'",
                taskActionId: 1
              }
            });
            const onReject = () => manager.advanceWorkflow({
              values: {
                ...fields,
                taskId: 100,
                NivelDeAprobacion: "'N33'",
                taskActionId: 2,
                total
              }
            });
            const listItems = [['Home', `/`], ['Editar Solicitud', `${_routing.routing.uri.pathname}`]];
            return _react.default.createElement("div", {
              className: "content-form"
            }, _react.default.createElement(_breadcrumb.BreadCrumb, {
              items: listItems,
              separator: "/"
            }), _react.default.createElement("span", {
              className: "title-form"
            }, manager.item.task.name), _react.default.createElement("div", {
              className: "form-group "
            }, _react.default.createElement(_input.Input, {
              ...getInput('date'),
              disabled: true,
              label: "Fecha",
              className: "has-icon",
              required: true,
              type: "date",
              min: getCurrentDate()
            }), _react.default.createElement(_input.Input, {
              label: "id de la instancia",
              ...getInput('instanceId'),
              disabled: true
            }), _react.default.createElement(_input.Input, {
              className: "has-icon",
              required: true,
              label: "Usuario",
              ...getInput('user'),
              disabled: true
            }), _react.default.createElement(_input.Input, {
              className: "has-icon",
              required: true,
              type: "number",
              label: "monto total",
              disabled: true,
              value: total
            }), _react.default.createElement(_selects.Select, null)), _react.default.createElement("div", {
              className: "actions-form"
            }, _react.default.createElement(_components.Button, {
              variant: "secondary",
              onClick: handleReject
            }, "Rechazar"), _react.default.createElement(_components.Button, {
              onClick: handleModal,
              variant: "primary",
              disabled: disabled
            }, "Aceptar")), _react.default.createElement(_products.Products, null), show && _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              title: "Aceptar solicitud",
              text: "\u00BFDesea avanzar en el proceso de la solicitud?",
              onClose: handleModal,
              onCancel: handleModal,
              onConfirm: onConfirm
            }), reject && _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              title: "Rechazar solicitud",
              text: "\u00BFDesea avanzar en el proceso de la solicitud?",
              onClose: handleReject,
              onCancel: handleReject,
              onConfirm: onReject
            }));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/validate-amount/products/index
      ******************************************************/

      ims.set('./views/validate-amount/products/index', {
        hash: 1027520230,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Products = Products;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../../context");
          var _table = require("./table");
          function Products() {
            const {
              manager
            } = (0, _context.useRequestContext)();
            if (!manager.showModal) return null;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "beauty-modal list-modal",
              onClose: manager.handleModal
            }, _react.default.createElement(_table.Table, null));
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./views/validate-amount/products/item
      *****************************************************/

      ims.set('./views/validate-amount/products/item', {
        hash: 1004910600,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var React = require("react");
          var _context = require("../../context");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          function Item({
            item
          }) {
            const {
              manager
            } = (0, _context.useRequestContext)();
            const isSelected = manager.selected.has(item.id);
            const cls = isSelected ? 'active item-product' : 'item-product';
            const value = isSelected ? manager.selected.get(item.id).quantity : 1;
            const icon = isSelected ? "close" : "check";
            return React.createElement("tr", {
              className: cls
            }, React.createElement("td", null, React.createElement("span", null, item.name)), React.createElement("td", {
              className: 'td-input'
            }, isSelected ? React.createElement(_form.Input, {
              value: value,
              name: item.id,
              onChange: manager.changeQuantity,
              min: 1,
              type: 'number'
            }) : React.createElement("span", null, item.quantity)), React.createElement("td", null, React.createElement("span", null, item.price)), React.createElement("td", null, React.createElement("span", null, React.createElement(_icons.IconButton, {
              "data-id": item.id,
              icon: icon,
              onClick: manager.setProduct
            }))));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/validate-amount/products/table
      ******************************************************/

      ims.set('./views/validate-amount/products/table', {
        hash: 615303176,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Table = Table;
          var React = require("react");
          var _jview = require("@bgroup/jview/jview");
          var _item = require("./item");
          var _context = require("../../context");
          function Table() {
            const {
              manager
            } = (0, _context.useRequestContext)();
            const value = {
              dataHead: [{
                label: 'Nombre',
                id: '1'
              }, {
                label: 'Cantidad',
                id: '2'
              }, {
                label: 'Precio',
                id: '3'
              }],
              entries: manager.items,
              rows: 5,
              total: manager.items.length,
              pagerNext: true,
              isSearch: false,
              showSelect: false,
              title: 'Seleccione los productos que desea',
              item: _item.Item
            };
            return React.createElement("div", {
              className: "table"
            }, React.createElement(_jview.JView, {
              ...value
            }));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/validate-budget/form
      ********************************************/

      ims.set('./views/validate-budget/form', {
        hash: 1502891806,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormValidateBudget = FormValidateBudget;
          var _react = require("react");
          var _input = require("sgs-workflow/input");
          var _dayjs = require("dayjs");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _hooks = require("@bgroup/jview/hooks");
          var _selects = require("../selects");
          var _modal = require("pragmate-ui/modal");
          var _products = require("./products");
          var _breadcrumb = require("pragmate-ui/breadcrumb");
          var _routing = require("@beyond-js/kernel/routing");
          const getCurrentDate = () => new Date().toLocaleDateString('en-CA', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric'
          }).split('/').reverse().join('-');
          function FormValidateBudget() {
            const {
              manager
            } = (0, _context.useRequestContext)();
            const [show, setShow] = _react.default.useState(false);
            const [reject, setReject] = _react.default.useState(false);
            function handleReject() {
              setReject(!reject);
            }
            function handleModal() {
              setShow(!show);
            }
            const format = 'YYYY-MM-DD';
            const init = {
              date: manager.item.data?.date ? (0, _dayjs.default)(manager.item.data?.date).format(format) : (0, _dayjs.default)().format(format),
              instanceId: manager.id,
              user: manager.item.data?.user ?? 'Jean',
              budget: manager.item.data?.budget ?? 1
            };
            const {
              getInput,
              fields,
              error,
              setError
            } = (0, _hooks.useForm)({
              init
            });
            const subTotal = Array.from(manager.selected.values()).map(item => {
              return item.price * item.quantity;
            });
            const total = subTotal.reduce((accumulator, subtotal) => accumulator + subtotal, 0);
            const disabled = !total;
            const onConfirm = () => {
              if (parseInt(fields.budget) < total) {
                setError({
                  error: 'El presupuesto no puede ser menor al total'
                });
                handleModal();
                return;
              }
              manager.advanceWorkflow({
                values: {
                  ...fields,
                  taskId: 103,
                  NivelDeAprobacion: "'N22'",
                  taskActionId: 1
                }
              });
            };
            const onReject = () => {
              if (parseInt(fields.budget) < total) {
                setError({
                  error: 'El presupuesto no puede ser menor al total'
                });
                handleModal();
                return;
              }
              manager.advanceWorkflow({
                values: {
                  ...fields,
                  taskId: 103,
                  NivelDeAprobacion: "'N11'",
                  taskActionId: 2,
                  total
                }
              });
            };
            const listItems = [['Home', `/`], ['Editar Solicitud', `${_routing.routing.uri.pathname}`]];
            return _react.default.createElement("div", {
              className: "content-form"
            }, _react.default.createElement(_breadcrumb.BreadCrumb, {
              items: listItems,
              separator: "/"
            }), _react.default.createElement("span", {
              className: "title-form"
            }, manager.item.task.name), _react.default.createElement("div", {
              className: "form-group "
            }, _react.default.createElement(_input.Input, {
              ...getInput('date'),
              disabled: true,
              label: "Fecha",
              className: "has-icon",
              required: true,
              type: "date",
              min: getCurrentDate()
            }), _react.default.createElement(_input.Input, {
              label: "id de la instancia",
              ...getInput('instanceId'),
              disabled: true
            }), _react.default.createElement(_input.Input, {
              className: "has-icon",
              required: true,
              label: "Usuario",
              ...getInput('user'),
              disabled: true
            }), _react.default.createElement(_input.Input, {
              className: "has-icon",
              required: true,
              type: "number",
              label: "monto total",
              disabled: true,
              value: total
            }), _react.default.createElement(_input.Input, {
              type: "number",
              ...getInput('budget'),
              min: 0,
              label: "Presupuesto",
              errorMessage: error.error,
              hasError: !!error.error
            }), _react.default.createElement(_selects.Select, null)), _react.default.createElement("div", {
              className: "actions-form"
            }, _react.default.createElement(_components.Button, {
              variant: "secondary",
              onClick: handleReject
            }, "Rechazar"), _react.default.createElement(_components.Button, {
              onClick: handleModal,
              variant: "primary",
              disabled: disabled
            }, "Aceptar")), _react.default.createElement(_products.Products, null), show && _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              title: "Aceptar solicitud",
              text: "\u00BFDesea avanzar en el proceso de la solicitud?",
              onClose: handleModal,
              onCancel: handleModal,
              onConfirm: onConfirm
            }), reject && _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              title: "Rechazar solicitud",
              text: "\u00BFDesea avanzar en el proceso de la solicitud?",
              onClose: handleReject,
              onCancel: handleReject,
              onConfirm: onReject
            }));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/validate-budget/products/index
      ******************************************************/

      ims.set('./views/validate-budget/products/index', {
        hash: 1027520230,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Products = Products;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../../context");
          var _table = require("./table");
          function Products() {
            const {
              manager
            } = (0, _context.useRequestContext)();
            if (!manager.showModal) return null;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "beauty-modal list-modal",
              onClose: manager.handleModal
            }, _react.default.createElement(_table.Table, null));
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./views/validate-budget/products/item
      *****************************************************/

      ims.set('./views/validate-budget/products/item', {
        hash: 2728068563,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var React = require("react");
          var _context = require("../../context");
          function Item({
            item
          }) {
            const {
              manager
            } = (0, _context.useRequestContext)();
            const isSelected = manager.selected.has(item.id);
            const cls = isSelected ? 'active item-product' : 'item-product';
            const value = isSelected ? manager.selected.get(item.id).quantity : 1;
            const icon = isSelected ? 'close' : 'check';
            return React.createElement("tr", {
              className: cls
            }, React.createElement("td", null, React.createElement("span", null, item.name)), React.createElement("td", {
              className: "td-input"
            }, React.createElement("span", null, value)), React.createElement("td", null, React.createElement("span", null, item.price)));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/validate-budget/products/table
      ******************************************************/

      ims.set('./views/validate-budget/products/table', {
        hash: 615303176,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Table = Table;
          var React = require("react");
          var _jview = require("@bgroup/jview/jview");
          var _item = require("./item");
          var _context = require("../../context");
          function Table() {
            const {
              manager
            } = (0, _context.useRequestContext)();
            const value = {
              dataHead: [{
                label: 'Nombre',
                id: '1'
              }, {
                label: 'Cantidad',
                id: '2'
              }, {
                label: 'Precio',
                id: '3'
              }],
              entries: manager.items,
              rows: 5,
              total: manager.items.length,
              pagerNext: true,
              isSearch: false,
              showSelect: false,
              title: 'Seleccione los productos que desea',
              item: _item.Item
            };
            return React.createElement("div", {
              className: "table"
            }, React.createElement(_jview.JView, {
              ...value
            }));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/validate-purchased/form
      ***********************************************/

      ims.set('./views/validate-purchased/form', {
        hash: 967208555,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormValidatePurchased = FormValidatePurchased;
          var _react = require("react");
          var _input = require("sgs-workflow/input");
          var _dayjs = require("dayjs");
          var _context = require("../context");
          var _hooks = require("@bgroup/jview/hooks");
          var _selects = require("../selects");
          var _products = require("./products");
          var _breadcrumb = require("pragmate-ui/breadcrumb");
          var _routing = require("@beyond-js/kernel/routing");
          const getCurrentDate = () => new Date().toLocaleDateString('en-CA', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric'
          }).split('/').reverse().join('-');
          function FormValidatePurchased() {
            const {
              manager
            } = (0, _context.useRequestContext)();
            const format = 'YYYY-MM-DD';
            const init = {
              date: manager.item.data?.date ? (0, _dayjs.default)(manager.item.data?.date).format(format) : (0, _dayjs.default)().format(format),
              instanceId: manager.id,
              user: manager.item.data?.user ?? 'Jean',
              budget: manager.item.data?.budget ?? 1
            };
            const {
              getInput
            } = (0, _hooks.useForm)({
              init
            });
            const subTotal = Array.from(manager.selected.values()).map(item => {
              return item.price * item.quantity;
            });
            const total = subTotal.reduce((accumulator, subtotal) => accumulator + subtotal, 0);
            const listItems = [[`/`, 'Home'], [_routing.routing.uri.pathname, 'Editar Solicitud']];
            return _react.default.createElement("div", {
              className: "content-form"
            }, _react.default.createElement(_breadcrumb.BreadCrumb, {
              items: listItems,
              separator: "/"
            }), _react.default.createElement("span", {
              className: "title-form"
            }, manager.item.task.name), _react.default.createElement("div", {
              className: "form-group "
            }, _react.default.createElement(_input.Input, {
              ...getInput('date'),
              disabled: true,
              label: "Fecha",
              className: "has-icon",
              required: true,
              type: "date",
              min: getCurrentDate()
            }), _react.default.createElement(_input.Input, {
              label: "id de la instancia",
              ...getInput('instanceId'),
              disabled: true
            }), _react.default.createElement(_input.Input, {
              className: "has-icon",
              required: true,
              label: "Usuario",
              ...getInput('user'),
              disabled: true
            }), _react.default.createElement(_input.Input, {
              className: "has-icon",
              required: true,
              type: "number",
              label: "monto total",
              disabled: true,
              value: total
            }), _react.default.createElement(_input.Input, {
              type: "number",
              ...getInput('budget'),
              min: 0,
              label: "Presupuesto",
              disabled: true
            }), _react.default.createElement(_selects.Select, null), _react.default.createElement(_products.Products, null)));
          }
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./views/validate-purchased/products/index
      *********************************************************/

      ims.set('./views/validate-purchased/products/index', {
        hash: 1027520230,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Products = Products;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../../context");
          var _table = require("./table");
          function Products() {
            const {
              manager
            } = (0, _context.useRequestContext)();
            if (!manager.showModal) return null;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "beauty-modal list-modal",
              onClose: manager.handleModal
            }, _react.default.createElement(_table.Table, null));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./views/validate-purchased/products/item
      ********************************************************/

      ims.set('./views/validate-purchased/products/item', {
        hash: 1679233677,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var React = require("react");
          var _context = require("../../context");
          function Item({
            item
          }) {
            const {
              manager
            } = (0, _context.useRequestContext)();
            const isSelected = manager.selected.has(item.id);
            const cls = isSelected ? 'active item-product' : 'item-product';
            const value = isSelected ? manager.selected.get(item.id).quantity : 1;
            const icon = isSelected ? 'close' : 'check';
            return React.createElement("tr", {
              className: cls
            }, React.createElement("td", null, React.createElement("span", null, item.name)), React.createElement("td", {
              className: "td-input"
            }, React.createElement("span", null, value)), React.createElement("td", null, React.createElement("span", null, item.price)));
          }
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./views/validate-purchased/products/table
      *********************************************************/

      ims.set('./views/validate-purchased/products/table', {
        hash: 615303176,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Table = Table;
          var React = require("react");
          var _jview = require("@bgroup/jview/jview");
          var _item = require("./item");
          var _context = require("../../context");
          function Table() {
            const {
              manager
            } = (0, _context.useRequestContext)();
            const value = {
              dataHead: [{
                label: 'Nombre',
                id: '1'
              }, {
                label: 'Cantidad',
                id: '2'
              }, {
                label: 'Precio',
                id: '3'
              }],
              entries: manager.items,
              rows: 5,
              total: manager.items.length,
              pagerNext: true,
              isSearch: false,
              showSelect: false,
              title: 'Seleccione los productos que desea',
              item: _item.Item
            };
            return React.createElement("div", {
              className: "table"
            }, React.createElement(_jview.JView, {
              ...value
            }));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/validate-rejected/form
      **********************************************/

      ims.set('./views/validate-rejected/form', {
        hash: 2784666168,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormValidateRejected = FormValidateRejected;
          var _react = require("react");
          var _input = require("sgs-workflow/input");
          var _dayjs = require("dayjs");
          var _context = require("../context");
          var _hooks = require("@bgroup/jview/hooks");
          var _selects = require("../selects");
          var _products = require("./products");
          var _breadcrumb = require("pragmate-ui/breadcrumb");
          var _routing = require("@beyond-js/kernel/routing");
          const getCurrentDate = () => new Date().toLocaleDateString('en-CA', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric'
          }).split('/').reverse().join('-');
          function FormValidateRejected() {
            const {
              manager
            } = (0, _context.useRequestContext)();
            const format = 'YYYY-MM-DD';
            const init = {
              date: manager.item.data?.date ? (0, _dayjs.default)(manager.item.data?.date).format(format) : (0, _dayjs.default)().format(format),
              instanceId: manager.id,
              user: manager.item.data?.user ?? 'Jean'
            };
            const {
              getInput
            } = (0, _hooks.useForm)({
              init
            });
            const subTotal = Array.from(manager.selected.values()).map(item => {
              return item.price * item.quantity;
            });
            const total = subTotal.reduce((accumulator, subtotal) => accumulator + subtotal, 0);
            const listItems = [[`/`, 'Home'], [_routing.routing.uri.pathname, 'Editar Solicitud']];
            return _react.default.createElement("div", {
              className: "content-form"
            }, _react.default.createElement(_breadcrumb.BreadCrumb, {
              items: listItems,
              separator: ">"
            }), _react.default.createElement("span", {
              className: "title-form"
            }, manager.item.task.name), _react.default.createElement("div", {
              className: "form-group "
            }, _react.default.createElement(_input.Input, {
              ...getInput('date'),
              disabled: true,
              label: "Fecha",
              className: "has-icon",
              required: true,
              type: "date",
              min: getCurrentDate()
            }), _react.default.createElement(_input.Input, {
              label: "id de la instancia",
              ...getInput('instanceId'),
              disabled: true
            }), _react.default.createElement(_input.Input, {
              className: "has-icon",
              required: true,
              label: "Usuario",
              ...getInput('user'),
              disabled: true
            }), _react.default.createElement(_input.Input, {
              className: "has-icon",
              required: true,
              type: "number",
              label: "monto total",
              disabled: true,
              value: total
            }), _react.default.createElement(_selects.Select, null), _react.default.createElement(_products.Products, null)));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./views/validate-rejected/products/index
      ********************************************************/

      ims.set('./views/validate-rejected/products/index', {
        hash: 1027520230,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Products = Products;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../../context");
          var _table = require("./table");
          function Products() {
            const {
              manager
            } = (0, _context.useRequestContext)();
            if (!manager.showModal) return null;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "beauty-modal list-modal",
              onClose: manager.handleModal
            }, _react.default.createElement(_table.Table, null));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./views/validate-rejected/products/item
      *******************************************************/

      ims.set('./views/validate-rejected/products/item', {
        hash: 1679233677,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var React = require("react");
          var _context = require("../../context");
          function Item({
            item
          }) {
            const {
              manager
            } = (0, _context.useRequestContext)();
            const isSelected = manager.selected.has(item.id);
            const cls = isSelected ? 'active item-product' : 'item-product';
            const value = isSelected ? manager.selected.get(item.id).quantity : 1;
            const icon = isSelected ? 'close' : 'check';
            return React.createElement("tr", {
              className: cls
            }, React.createElement("td", null, React.createElement("span", null, item.name)), React.createElement("td", {
              className: "td-input"
            }, React.createElement("span", null, value)), React.createElement("td", null, React.createElement("span", null, item.price)));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./views/validate-rejected/products/table
      ********************************************************/

      ims.set('./views/validate-rejected/products/table', {
        hash: 615303176,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Table = Table;
          var React = require("react");
          var _jview = require("@bgroup/jview/jview");
          var _item = require("./item");
          var _context = require("../../context");
          function Table() {
            const {
              manager
            } = (0, _context.useRequestContext)();
            const value = {
              dataHead: [{
                label: 'Nombre',
                id: '1'
              }, {
                label: 'Cantidad',
                id: '2'
              }, {
                label: 'Precio',
                id: '3'
              }],
              entries: manager.items,
              rows: 5,
              total: manager.items.length,
              pagerNext: true,
              isSearch: false,
              showSelect: false,
              title: 'Seleccione los productos que desea',
              item: _item.Item
            };
            return React.createElement("div", {
              className: "table"
            }, React.createElement(_jview.JView, {
              ...value
            }));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/validate-request/form
      *********************************************/

      ims.set('./views/validate-request/form', {
        hash: 2725201569,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormValidateRequest = FormValidateRequest;
          var _react = require("react");
          var _input = require("sgs-workflow/input");
          var _dayjs = require("dayjs");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _hooks = require("@bgroup/jview/hooks");
          var _selects = require("../selects");
          var _modal = require("pragmate-ui/modal");
          var _breadcrumb = require("pragmate-ui/breadcrumb");
          var _products = require("./products");
          var _routing = require("@beyond-js/kernel/routing");
          const getCurrentDate = () => new Date().toLocaleDateString('en-CA', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric'
          }).split('/').reverse().join('-');
          function FormValidateRequest() {
            const {
              manager
            } = (0, _context.useRequestContext)();
            const [show, setShow] = _react.default.useState(false);
            const [reject, setReject] = _react.default.useState(false);
            function handleReject() {
              setReject(!reject);
            }
            function handleModal() {
              setShow(!show);
            }
            const format = 'YYYY-MM-DD';
            const init = {
              date: manager.item.data?.date ? (0, _dayjs.default)(manager.item.data?.date).format(format) : (0, _dayjs.default)().format(format),
              instanceId: manager.id,
              user: manager.item.data?.user ?? 'Jean',
              budget: manager.item.data?.budget ?? 1
            };
            const {
              getInput,
              fields
            } = (0, _hooks.useForm)({
              init
            });
            const subTotal = Array.from(manager.selected.values()).map(item => {
              return item.price * item.quantity;
            });
            const total = subTotal.reduce((accumulator, subtotal) => accumulator + subtotal, 0);
            const disabled = !total;
            const onConfirm = () => manager.advanceWorkflow({
              values: {
                ...fields,
                taskId: 106,
                NivelDeAprobacion: "'N11'",
                taskActionId: 1,
                total
              }
            });
            const onReject = () => manager.advanceWorkflow({
              values: {
                ...fields,
                taskId: 106,
                NivelDeAprobacion: "'N11'",
                taskActionId: 2,
                total
              }
            });
            const listItems = [[`/`, 'Home'], [`${_routing.routing.uri.pathname}`, 'Editar Solicitud']];
            return _react.default.createElement("div", {
              className: "content-form"
            }, _react.default.createElement(_breadcrumb.BreadCrumb, {
              items: listItems,
              separator: ">"
            }), _react.default.createElement("span", {
              className: "title-form"
            }, manager.item.task.name), _react.default.createElement("div", {
              className: "form-group "
            }, _react.default.createElement(_input.Input, {
              ...getInput('date'),
              disabled: true,
              label: "Fecha",
              className: "has-icon",
              required: true,
              type: "date",
              min: getCurrentDate()
            }), _react.default.createElement(_input.Input, {
              label: "id de la instancia",
              ...getInput('instanceId'),
              disabled: true
            }), _react.default.createElement(_input.Input, {
              className: "has-icon",
              required: true,
              label: "Usuario",
              ...getInput('user'),
              disabled: true
            }), _react.default.createElement(_input.Input, {
              className: "has-icon",
              required: true,
              type: "number",
              label: "monto total",
              disabled: true,
              value: total
            }), _react.default.createElement(_selects.Select, null)), _react.default.createElement("div", {
              className: "actions-form"
            }, _react.default.createElement(_components.Button, {
              variant: "secondary",
              onClick: handleReject
            }, "Rechazar"), _react.default.createElement(_components.Button, {
              onClick: handleModal,
              variant: "primary",
              disabled: disabled
            }, "Aceptar")), _react.default.createElement(_products.Products, null), show && _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              title: "Aceptar solicitud",
              text: "\u00BFDesea avanzar en el proceso de la solicitud?",
              onClose: handleModal,
              onCancel: handleModal,
              onConfirm: onConfirm
            }), reject && _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              title: "Rechazar solicitud",
              text: "\u00BFDesea avanzar en el proceso de la solicitud?",
              onClose: handleReject,
              onCancel: handleReject,
              onConfirm: onReject
            }));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./views/validate-request/products/index
      *******************************************************/

      ims.set('./views/validate-request/products/index', {
        hash: 1027520230,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Products = Products;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../../context");
          var _table = require("./table");
          function Products() {
            const {
              manager
            } = (0, _context.useRequestContext)();
            if (!manager.showModal) return null;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "beauty-modal list-modal",
              onClose: manager.handleModal
            }, _react.default.createElement(_table.Table, null));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/validate-request/products/item
      ******************************************************/

      ims.set('./views/validate-request/products/item', {
        hash: 889026603,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var React = require("react");
          var _context = require("../../context");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          function Item({
            item
          }) {
            const {
              manager
            } = (0, _context.useRequestContext)();
            const isSelected = manager.selected.has(item.id);
            const cls = isSelected ? 'active item-product' : 'item-product';
            const value = isSelected ? manager.selected.get(item.id).quantity : 1;
            const icon = isSelected ? 'close' : 'check';
            return React.createElement("tr", {
              className: cls
            }, React.createElement("td", null, React.createElement("span", null, item.name)), React.createElement("td", {
              className: "td-input"
            }, isSelected ? React.createElement(_form.Input, {
              value: value,
              name: item.id,
              onChange: manager.changeQuantity,
              min: 1,
              type: "number"
            }) : React.createElement("span", null, item.quantity)), React.createElement("td", null, React.createElement("span", null, item.price)), React.createElement("td", null, React.createElement("span", null, React.createElement(_icons.IconButton, {
              "data-id": item.id,
              icon: icon,
              onClick: manager.setProduct
            }))));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./views/validate-request/products/table
      *******************************************************/

      ims.set('./views/validate-request/products/table', {
        hash: 615303176,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Table = Table;
          var React = require("react");
          var _jview = require("@bgroup/jview/jview");
          var _item = require("./item");
          var _context = require("../../context");
          function Table() {
            const {
              manager
            } = (0, _context.useRequestContext)();
            const value = {
              dataHead: [{
                label: 'Nombre',
                id: '1'
              }, {
                label: 'Cantidad',
                id: '2'
              }, {
                label: 'Precio',
                id: '3'
              }],
              entries: manager.items,
              rows: 5,
              total: manager.items.length,
              pagerNext: true,
              isSearch: false,
              showSelect: false,
              title: 'Seleccione los productos que desea',
              item: _item.Item
            };
            return React.createElement("div", {
              className: "table"
            }, React.createElement(_jview.JView, {
              ...value
            }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfbWFuYWdlciIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiVmlldyIsIm1vZGVsIiwiY3JlYXRlU3RvcmUiLCJNb2RlbCIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX21vZGVsIiwiX2FwaSIsIl9jb25maWciLCJSZWFjdGl2ZU1vZGVsIiwiaWQiLCJhcGkiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwic2VydmVyIiwidGFza0lkIiwiaXRlbSIsInNob3dNb2RhbCIsInVzZXJJZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJpdGVtcyIsIm5hbWUiLCJxdWFudGl0eSIsInByaWNlIiwidmFsdWUiLCJ0cmlnZ2VyRXZlbnQiLCJzZWxlY3RlZCIsIk1hcCIsInBhcnNlSW50IiwicmVzcG9uc2UiLCJzdGF0dXMiLCJFcnJvciIsImVycm9yIiwibWVzc2FnZSIsImRhdGEiLCJmb3JtYXRlZFJlc3BvbnNlIiwiZm9yRWFjaCIsInNldCIsImNvbnNvbGUiLCJyZWFkeSIsImhhbmRsZU1vZGFsIiwic2V0UHJvZHVjdCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJzdG9wUHJvcGFnYXRpb24iLCJoYXMiLCJkZWxldGUiLCJmaW5kIiwiY2hhbmdlUXVhbnRpdHkiLCJhZHZhbmNlV29ya2Zsb3ciLCJ2YWx1ZXMiLCJmZXRjaGluZyIsInByb2Nlc3NJZCIsInRhc2tBY3Rpb25JZCIsInVzZXIiLCJ0b3RhbCIsImluc3RhbmNlSWQiLCJkYXRlIiwiQXJyYXkiLCJmcm9tIiwiTml2ZWxEZUFwcm9iYWNpb24iLCJlc0dhc3RvIiwiYnVkZ2V0IiwicG9zdCIsImFyciIsIl9yZWFjdCIsIl9pbnB1dCIsIl9kYXlqcyIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfaG9va3MiLCJfc2VsZWN0cyIsIl9tb2RhbCIsIl9yb3V0aW5nIiwiX3Byb2R1Y3RzIiwiX2JyZWFkY3J1bWIiLCJnZXRDdXJyZW50RGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJtb250aCIsImRheSIsInllYXIiLCJzcGxpdCIsInJldmVyc2UiLCJqb2luIiwiRm9ybUVudHJhbmNlIiwibWFuYWdlciIsInVzZVJlcXVlc3RDb250ZXh0Iiwic2V0U2hvdyIsInVzZVN0YXRlIiwicmVqZWN0Iiwic2V0UmVqZWN0IiwiaGFuZGxlUmVqZWN0IiwiZm9ybWF0IiwiaW5pdCIsImdldElucHV0IiwiZmllbGRzIiwidXNlRm9ybSIsInN1YlRvdGFsIiwibWFwIiwicmVkdWNlIiwiYWNjdW11bGF0b3IiLCJzdWJ0b3RhbCIsImRpc2FibGVkIiwib25Db25maXJtIiwib25SZWplY3QiLCJsaXN0SXRlbXMiLCJyb3V0aW5nIiwicGF0aG5hbWUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiQnJlYWRDcnVtYiIsInNlcGFyYXRvciIsInRhc2siLCJJbnB1dCIsImxhYmVsIiwicmVxdWlyZWQiLCJ0eXBlIiwibWluIiwiU2VsZWN0IiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJQcm9kdWN0cyIsIkNvbmZpcm1Nb2RhbCIsInRpdGxlIiwidGV4dCIsIm9uQ2xvc2UiLCJvbkNhbmNlbCIsIl90YWJsZSIsIk1vZGFsIiwiVGFibGUiLCJSZWFjdCIsIl9mb3JtIiwiX2ljb25zIiwiSXRlbSIsImlzU2VsZWN0ZWQiLCJjbHMiLCJpY29uIiwib25DaGFuZ2UiLCJJY29uQnV0dG9uIiwiX2p2aWV3IiwiX2l0ZW0iLCJkYXRhSGVhZCIsImVudHJpZXMiLCJyb3dzIiwibGVuZ3RoIiwicGFnZXJOZXh0IiwiaXNTZWFyY2giLCJzaG93U2VsZWN0IiwiSlZpZXciLCJSZXF1ZXN0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2xvYWRpbmdQYWdlIiwiX2Zvcm0yIiwiX2Zvcm0zIiwiX2Zvcm00IiwiX2Zvcm01IiwiX2Zvcm02Iiwic3RvcmUiLCJ1cGQiLCJzZXRVcGRhdGUiLCJ1c2VCaW5kZXIiLCJMb2FkaW5nUGFnZSIsInRhc2tzIiwiRm9ybVZhbGlkYXRlQW1vdW50IiwiRm9ybVZhbGlkYXRlUmVxdWVzdCIsIkZvcm1WYWxpZGF0ZUJ1ZGdldCIsIkZvcm1WYWxpZGF0ZVB1cmNoYXNlZCIsIkZvcm1WYWxpZGF0ZVJlamVjdGVkIiwiQ29udHJvbCIsIlByb3ZpZGVyIiwic2V0RXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJoYXNFcnJvciJdLCJzb3VyY2VzIjpbIi93aWRnZXQvdHMvY29udHJvbGxlci50cyIsIi93aWRnZXQvdHMvbWFuYWdlci50cyIsIi93aWRnZXQvdHMvdHlwZXMudHMiLCIvd2lkZ2V0L3RzL3ZpZXdzL2FwcGxpY2F0aW9uLWVudHJ5L2Zvcm0udHN4IiwiL3dpZGdldC90cy92aWV3cy9hcHBsaWNhdGlvbi1lbnRyeS9wcm9kdWN0cy9pbmRleC50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL2FwcGxpY2F0aW9uLWVudHJ5L3Byb2R1Y3RzL2l0ZW0udHN4IiwiL3dpZGdldC90cy92aWV3cy9hcHBsaWNhdGlvbi1lbnRyeS9wcm9kdWN0cy90YWJsZS50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3dpZGdldC90cy92aWV3cy9pbmRleC50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL3NlbGVjdHMudHN4IiwiL3dpZGdldC90cy92aWV3cy90aXRsZXMudHMiLCIvd2lkZ2V0L3RzL3ZpZXdzL3ZhbGlkYXRlLWFtb3VudC9mb3JtLnRzeCIsIi93aWRnZXQvdHMvdmlld3MvdmFsaWRhdGUtYW1vdW50L3Byb2R1Y3RzL2luZGV4LnRzeCIsIi93aWRnZXQvdHMvdmlld3MvdmFsaWRhdGUtYW1vdW50L3Byb2R1Y3RzL2l0ZW0udHN4IiwiL3dpZGdldC90cy92aWV3cy92YWxpZGF0ZS1hbW91bnQvcHJvZHVjdHMvdGFibGUudHN4IiwiL3dpZGdldC90cy92aWV3cy92YWxpZGF0ZS1idWRnZXQvZm9ybS50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL3ZhbGlkYXRlLWJ1ZGdldC9wcm9kdWN0cy9pbmRleC50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL3ZhbGlkYXRlLWJ1ZGdldC9wcm9kdWN0cy9pdGVtLnRzeCIsIi93aWRnZXQvdHMvdmlld3MvdmFsaWRhdGUtYnVkZ2V0L3Byb2R1Y3RzL3RhYmxlLnRzeCIsIi93aWRnZXQvdHMvdmlld3MvdmFsaWRhdGUtcHVyY2hhc2VkL2Zvcm0udHN4IiwiL3dpZGdldC90cy92aWV3cy92YWxpZGF0ZS1wdXJjaGFzZWQvcHJvZHVjdHMvaW5kZXgudHN4IiwiL3dpZGdldC90cy92aWV3cy92YWxpZGF0ZS1wdXJjaGFzZWQvcHJvZHVjdHMvaXRlbS50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL3ZhbGlkYXRlLXB1cmNoYXNlZC9wcm9kdWN0cy90YWJsZS50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL3ZhbGlkYXRlLXJlamVjdGVkL2Zvcm0udHN4IiwiL3dpZGdldC90cy92aWV3cy92YWxpZGF0ZS1yZWplY3RlZC9wcm9kdWN0cy9pbmRleC50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL3ZhbGlkYXRlLXJlamVjdGVkL3Byb2R1Y3RzL2l0ZW0udHN4IiwiL3dpZGdldC90cy92aWV3cy92YWxpZGF0ZS1yZWplY3RlZC9wcm9kdWN0cy90YWJsZS50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL3ZhbGlkYXRlLXJlcXVlc3QvZm9ybS50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL3ZhbGlkYXRlLXJlcXVlc3QvcHJvZHVjdHMvaW5kZXgudHN4IiwiL3dpZGdldC90cy92aWV3cy92YWxpZGF0ZS1yZXF1ZXN0L3Byb2R1Y3RzL2l0ZW0udHN4IiwiL3dpZGdldC90cy92aWV3cy92YWxpZGF0ZS1yZXF1ZXN0L3Byb2R1Y3RzL3RhYmxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBRUEsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELElBQUlDLE1BQU1BLENBQUE7Y0FDVCxPQUFPSixNQUFBLENBQUFLLElBQUk7WUFDWjtZQUVBLENBQUFDLEtBQU07WUFFTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUwsUUFBQSxDQUFBTyxLQUFLLEVBQUU7Y0FDekIsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUVBRyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFILEtBQU0sQ0FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQztZQUVBQyxJQUFJQSxDQUFBO2NBQ0g7WUFBQTs7VUFFREMsT0FBQSxDQUFBYixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekJELElBQUFjLE1BQUEsR0FBQWpCLE9BQUE7VUFFQSxJQUFBa0IsSUFBQSxHQUFBbEIsT0FBQTtVQUNBLElBQUFtQixPQUFBLEdBQUFuQixPQUFBO1VBRHVDO1VBRWpDLE1BQU9TLEtBQU0sU0FBUVEsTUFBQSxDQUFBRyxhQUFvQjtZQUM5QyxDQUFBQyxFQUFHO1lBQ0gsSUFBSUEsRUFBRUEsQ0FBQTtjQUNMLE9BQU8sSUFBSSxDQUFDLENBQUFB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