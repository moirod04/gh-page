System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.14/model", "sgs-workflow@1.0.0/entities", "sgs-workflow@1.0.0/wrappers", "react@18.2.0", "uuid@9.0.1", "sgs-workflow@1.0.0/api", "@bgroup/helpers@1.0.5/utils", "dayjs@1.11.10", "@bgroup/http-suite@1.0.5/api", "sgs-workflow@1.0.0/config", "@bgroup/wise-form@0.0.4/model", "sgs-workflow@1.0.0/uploader", "@beyond-js/kernel@0.1.9/routing", "sgs-workflow@1.0.0/helpers", "pragmate-ui@0.1.2/components", "pragmate-ui@0.1.2/icons", "framer-motion@10.18.0", "pragmate-ui@0.1.2/modal", "pragmate-ui@0.1.2/form", "pragmate-ui@0.1.2/empty", "sgs-workflow@1.0.0/select", "@beyond-js/react-18-widgets@1.0.4/hooks", "tippy.js@6.3.7", "@bgroup/jview@1.0.3/loading-page", "sgs-workflow@1.0.0/components/dinamyc-form", "sgs-workflow@1.0.0/input-date", "pragmate-ui@0.1.2/ripple", "sgs-workflow@1.0.0/input-filter", "@bgroup/jview@1.0.3/jview", "@bgroup/wise-form@0.0.4/form", "pragmate-ui@0.1.2/image", "@bg/jadmin@0.0.1/wrapper", "sgs-workflow@1.0.0/app-icon"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, dependency_29, dependency_30, dependency_31, dependency_32, dependency_33, bimport, __Bundle, __pkg, ims, Manager, Dropdown, TaskInstancesMonitor, LoadInstance, __beyond_pkg, hmr;
  _export({
    Manager: void 0,
    Dropdown: void 0,
    TaskInstancesMonitor: void 0,
    LoadInstance: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive1114Model) {
      dependency_1 = _beyondJsReactive1114Model;
    }, function (_sgsWorkflow100Entities) {
      dependency_2 = _sgsWorkflow100Entities;
    }, function (_sgsWorkflow100Wrappers) {
      dependency_3 = _sgsWorkflow100Wrappers;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_uuid2) {
      dependency_5 = _uuid2;
    }, function (_sgsWorkflow100Api) {
      dependency_6 = _sgsWorkflow100Api;
    }, function (_bgroupHelpers105Utils) {
      dependency_7 = _bgroupHelpers105Utils;
    }, function (_dayjs2) {
      dependency_8 = _dayjs2;
    }, function (_bgroupHttpSuite105Api) {
      dependency_9 = _bgroupHttpSuite105Api;
    }, function (_sgsWorkflow100Config) {
      dependency_10 = _sgsWorkflow100Config;
    }, function (_bgroupWiseForm004Model) {
      dependency_11 = _bgroupWiseForm004Model;
    }, function (_sgsWorkflow100Uploader) {
      dependency_12 = _sgsWorkflow100Uploader;
    }, function (_beyondJsKernel019Routing) {
      dependency_13 = _beyondJsKernel019Routing;
    }, function (_sgsWorkflow100Helpers) {
      dependency_14 = _sgsWorkflow100Helpers;
    }, function (_pragmateUi012Components) {
      dependency_15 = _pragmateUi012Components;
    }, function (_pragmateUi012Icons) {
      dependency_16 = _pragmateUi012Icons;
    }, function (_framerMotion2) {
      dependency_17 = _framerMotion2;
    }, function (_pragmateUi012Modal) {
      dependency_18 = _pragmateUi012Modal;
    }, function (_pragmateUi012Form) {
      dependency_19 = _pragmateUi012Form;
    }, function (_pragmateUi012Empty) {
      dependency_20 = _pragmateUi012Empty;
    }, function (_sgsWorkflow100Select) {
      dependency_21 = _sgsWorkflow100Select;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_22 = _beyondJsReact18Widgets104Hooks;
    }, function (_tippyJs) {
      dependency_23 = _tippyJs;
    }, function (_bgroupJview103LoadingPage) {
      dependency_24 = _bgroupJview103LoadingPage;
    }, function (_sgsWorkflow100ComponentsDinamycForm) {
      dependency_25 = _sgsWorkflow100ComponentsDinamycForm;
    }, function (_sgsWorkflow100InputDate) {
      dependency_26 = _sgsWorkflow100InputDate;
    }, function (_pragmateUi012Ripple) {
      dependency_27 = _pragmateUi012Ripple;
    }, function (_sgsWorkflow100InputFilter) {
      dependency_28 = _sgsWorkflow100InputFilter;
    }, function (_bgroupJview103Jview) {
      dependency_29 = _bgroupJview103Jview;
    }, function (_bgroupWiseForm004Form) {
      dependency_30 = _bgroupWiseForm004Form;
    }, function (_pragmateUi012Image) {
      dependency_31 = _pragmateUi012Image;
    }, function (_bgJadmin001Wrapper) {
      dependency_32 = _bgJadmin001Wrapper;
    }, function (_sgsWorkflow100AppIcon) {
      dependency_33 = _sgsWorkflow100AppIcon;
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
          "vspecifier": "sgs-workflow@1.0.0/task-instances-monitor"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['sgs-workflow/entities', dependency_2], ['sgs-workflow/wrappers', dependency_3], ['react', dependency_4], ['uuid', dependency_5], ['sgs-workflow/api', dependency_6], ['@bgroup/helpers/utils', dependency_7], ['dayjs', dependency_8], ['@bgroup/http-suite/api', dependency_9], ['sgs-workflow/config', dependency_10], ['@bgroup/wise-form/model', dependency_11], ['sgs-workflow/uploader', dependency_12], ['@beyond-js/kernel/routing', dependency_13], ['sgs-workflow/helpers', dependency_14], ['pragmate-ui/components', dependency_15], ['pragmate-ui/icons', dependency_16], ['framer-motion', dependency_17], ['pragmate-ui/modal', dependency_18], ['pragmate-ui/form', dependency_19], ['pragmate-ui/empty', dependency_20], ['sgs-workflow/select', dependency_21], ['@beyond-js/react-18-widgets/hooks', dependency_22], ['tippy.js', dependency_23], ['@bgroup/jview/loading-page', dependency_24], ['sgs-workflow/components/dinamyc-form', dependency_25], ['sgs-workflow/input-date', dependency_26], ['pragmate-ui/ripple', dependency_27], ['sgs-workflow/input-filter', dependency_28], ['@bgroup/jview/jview', dependency_29], ['@bgroup/wise-form/form', dependency_30], ['pragmate-ui/image', dependency_31], ['@bg/jadmin/wrapper', dependency_32], ['sgs-workflow/app-icon', dependency_33]]);
      brequire('@beyond-js/kernel/styles').styles.register('sgs-workflow@1.0.0/task-instances-monitor');
      ims = new Map();
      /**********************************
      INTERNAL MODULE: ./manager/business
      **********************************/
      ims.set('./manager/business', {
        hash: 1550128090,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Business = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _entities = require("sgs-workflow/entities");
          class Business extends _model.ReactiveModel {
            #collection = new _entities.CommentsCollection();
            get collection() {
              return this.#collection;
            }
            #parent;
            #items = [];
            get items() {
              return this.#items;
            }
            set items(value) {
              this.#items = value;
              this.triggerEvent();
            }
            constructor(parent) {
              super();
              this.#parent = parent;
            }
            load = async () => {
              if (!this.#parent.selected?.id) return this.#items = [];
              this.fetching = true;
              try {
                const response = await this.#collection.load({
                  where: {
                    instanceId: this.#parent.selected?.id
                  },
                  start: 0
                });
                if (!response.status) throw new Error(response.error.message);
                this.#items = response.data;
              } catch (error) {
                console.error(error);
              } finally {
                this.fetching = false;
              }
            };
          }
          exports.Business = Business;
        }
      });

      /**********************************
      INTERNAL MODULE: ./manager/comments
      **********************************/

      ims.set('./manager/comments', {
        hash: 4184726550,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Comments = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _entities = require("sgs-workflow/entities");
          var _wrappers = require("sgs-workflow/wrappers");
          class Comments extends _model.ReactiveModel {
            #collection = new _entities.CommentsCollection();
            get collection() {
              return this.#collection;
            }
            #parent;
            #show = false;
            get show() {
              return this.#show;
            }
            set show(value) {
              this.#show = value;
              this.triggerEvent();
            }
            #showDelete = false;
            get showDelete() {
              return this.#showDelete;
            }
            set showDelete(value) {
              this.#showDelete = value;
              this.triggerEvent();
            }
            #commentSelected;
            get commentSelected() {
              return this.#commentSelected;
            }
            set commentSelected(value) {
              this.#commentSelected = value;
              this.triggerEvent();
            }
            #value = '';
            get value() {
              return this.#value;
            }
            set value(value) {
              this.#value = value;
              this.triggerEvent();
            }
            #items = [];
            get items() {
              return this.#items;
            }
            set items(value) {
              this.#items = value;
              this.triggerEvent();
            }
            constructor(parent) {
              super();
              this.#parent = parent;
            }
            load = async () => {
              if (!this.#parent.selected?.id) return this.#items = [];
              this.fetching = true;
              try {
                const response = await this.#collection.load({
                  where: {
                    instanceId: this.#parent.selected?.id
                  },
                  start: 0
                });
                if (!response.status) throw new Error(response.error.message);
                this.#items = response.data;
                const pickedInstances = this.#parent.picked;
                const instanceId = this.#parent.selected?.id;
                if (pickedInstances.has(instanceId)) {
                  const instance = pickedInstances.get(instanceId);
                  instance.set({
                    comments: this.#items
                  });
                  pickedInstances.set(instanceId, instance);
                  this.#parent.picked = pickedInstances;
                }
              } catch (error) {
                console.error(error);
              } finally {
                this.fetching = false;
              }
            };
            handleModal = () => {
              this.#show = !this.#show;
              this.#commentSelected = null;
              this.#value = '';
              this.triggerEvent();
            };
            handleChange = event => {
              event.stopPropagation();
              this.#value = event.target.value;
              this.triggerEvent();
            };
            save = async () => {
              this.fetching = true;
              try {
                const item = this.#commentSelected ?? new _entities.CommentItem();
                const params = {
                  instanceId: this.#parent.selected?.id,
                  userId: _wrappers.session.user.id,
                  comment: this.#value,
                  taskId: this.#parent.selected?.taskId,
                  timeCreated: new Date(),
                  timeUpdated: new Date()
                };
                await item.set({
                  ...params
                });
                await item.publish();
                const pickedInstances = this.#parent.picked;
                const instanceId = this.#parent.selected?.id;
                if (pickedInstances.has(instanceId)) {
                  const instance = pickedInstances.get(instanceId);
                  instance.comments = [item];
                  pickedInstances.set(instanceId, instance);
                  this.#parent.picked = pickedInstances;
                }
                await this.load();
                this.handleModal();
              } catch (error) {
                console.error(error);
              } finally {
                this.fetching = false;
              }
            };
            delete = async () => {
              this.fetching = true;
              try {
                await this.commentSelected.delete({
                  id: this.#commentSelected.id
                });
                setTimeout(async () => {
                  this.#items = this.#items.filter(item => item.id !== this.#commentSelected.id);
                  this.#commentSelected = null;
                  this.#showDelete = false;
                  await this.load();
                }, 500);
                this.triggerEvent();
              } catch (error) {
                console.error(error);
              } finally {
                this.fetching = false;
              }
            };
          }
          exports.Comments = Comments;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./manager/filters/default
      *****************************************/

      ims.set('./manager/filters/default', {
        hash: 1323502556,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.valueDefault = exports.optionDefaultOp = exports.numberValueDefault = void 0;
          const valueDefault = exports.valueDefault = {
            value: 'like',
            label: 'Contiene'
          };
          const numberValueDefault = exports.numberValueDefault = {
            value: 'eq',
            label: 'Igual'
          };
          const optionDefaultOp = exports.optionDefaultOp = {
            datetime: numberValueDefault,
            int: numberValueDefault,
            varchar: valueDefault,
            decimal: numberValueDefault,
            nvarchar: valueDefault
          };
        }
      });

      /***************************************
      INTERNAL MODULE: ./manager/filters/index
      ***************************************/

      ims.set('./manager/filters/index', {
        hash: 3159811551,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Filters = void 0;
          var _uuid = require("uuid");
          var _model = require("@beyond-js/reactive/model");
          var _wrappers = require("sgs-workflow/wrappers");
          var _options = require("../../views/filters/procesess/options");
          class Filters extends _model.ReactiveModel {
            #showModal = false;
            get showModal() {
              return this.#showModal;
            }
            #filtersApply = '';
            get filtersApply() {
              return this.#filtersApply;
            }
            #processes = _wrappers.appWrapper.processAvailable;
            #processSelected = _wrappers.appWrapper.processAvailable[0];
            get processSelected() {
              return this.#processSelected;
            }
            get process() {
              return this.#processes[this.#processSelected.value];
            }
            #filtersSelected = new Map();
            get filtersSelected() {
              return this.#filtersSelected;
            }
            get isApply() {
              return this.#valueApply === "Aplicar";
            }
            #valueApply = 'Aplicar';
            get valueApply() {
              return this.#valueApply;
            }
            set valueApply(value) {
              this.#valueApply = value;
            }
            handleShow = () => {
              this.#showModal = !this.#showModal;
              this.triggerEvent();
            };
            handleChangeProcess = option => {
              this.#processSelected = option.target;
              this.filtersSelected.clear();
              this.triggerEvent();
            };
            addFilter = () => {
              const id = (0, _uuid.v4)();
              const type = this.#processSelected.camposFiltros[0].tipoDato;
              const op = _options.optionsOp[type][0];
              this.#filtersSelected.set(id, {
                value: this.#processSelected.camposFiltros[0],
                id: id,
                op,
                or: new Map(),
                inputValue: "",
                type
              });
              this.triggerEvent();
            };
            deleteFilter = event => {
              const {
                key
              } = event.currentTarget.dataset;
              this.#filtersSelected.delete(key);
              this.triggerEvent();
            };
            handleChangeValue = ({
              id,
              value
            }) => {
              const newValue = this.processSelected.camposFiltros.find(option => option.value === value);
              const type = newValue.tipoDato;
              const op = _options.optionsOp[type][0];
              this.#filtersSelected.set(id, {
                value: newValue,
                id: id,
                op,
                or: new Map(),
                inputValue: "",
                type
              });
              this.triggerEvent();
            };
            handleChangeFilter = ({
              id,
              value,
              key,
              idChild
            }) => {
              const item = this.#filtersSelected.get(id);
              if (idChild) item.or.get(idChild)[key] = value;else item[key] = value;
              const event = idChild ? "subFilter" : "filter";
              this.triggerEvent(event);
            };
            handleAddOp = event => {
              const {
                id
              } = event.currentTarget.dataset;
              const key = (0, _uuid.v4)();
              const item = this.#filtersSelected.get(id);
              const type = item.type;
              const op = _options.optionsOp[type][0];
              item.or.set(key, {
                op,
                id: key,
                idFather: id,
                inputValue: "",
                type
              });
              this.triggerEvent();
            };
            deleteSubFilter = event => {
              const {
                father,
                id
              } = event.currentTarget.dataset;
              this.#filtersSelected.get(father).or.delete(id);
              this.triggerEvent();
            };
            applyFilter = async () => {
              if (!this.#filtersSelected.size) return;
              if (this.isApply) this.applyFilterModal();else this.#filtersApply = '';
              this.#valueApply = this.isApply ? 'Quitar' : 'Aplicar';
              this.triggerEvent();
              ///	await this.load();
            };
            clear = () => {
              this.#filtersSelected.clear();
              this.#processSelected = _wrappers.appWrapper.processAvailable[0];
              this.#valueApply = "Aplicar";
              this.#filtersApply = '';
              this.#showModal = false;
              this.triggerEvent();
            };
            applyFilterModal = () => {
              if (!this.#filtersSelected.size) {
                this.#filtersApply = '';
                this.#showModal = false;
                this.triggerEvent();
                return;
              }
              ;
              this.#filtersApply = {
                view: this.#processSelected.vista,
                values: {}
              };
              this.#filtersSelected.forEach(item => {
                const or = [];
                if (item.or.size) {
                  item.or.forEach(orItem => {
                    or.push({
                      value: orItem.inputValue,
                      op: orItem.op.value
                    });
                  });
                }
                ;
                if (!this.#filtersApply.values[item.value.value]) this.#filtersApply.values[item.value.value] = [];
                this.#filtersApply.values[item.value.value].push({
                  op: item.op.value,
                  value: item.inputValue,
                  ...(item.or.size && {
                    or
                  })
                });
              });
              this.#showModal = false;
              this.triggerEvent();
            };
            apply = () => {
              this.#valueApply = !this.#filtersSelected.size ? 'Aplicar' : 'Quitar';
              this.applyFilterModal();
            };
          }
          exports.Filters = Filters;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./manager/filters/process
      *****************************************/

      ims.set('./manager/filters/process', {
        hash: 2196976381,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.rendition = exports.registration = exports.quotation = exports.purchases = exports.productionFollowUp = exports.production = exports.processOptions = exports.payments = exports.materialModification = exports.materialCreation = exports.feasibilityAnalysis = exports.expensive = exports.advancePayment = void 0;
          const processOptions = exports.processOptions = [{
            label: 'Alta de Material',
            value: 'materialCreation'
          }, {
            label: 'Análisis de Factibilidad',
            value: 'feasibilityAnalysis'
          }, {
            label: 'Anticipo',
            value: 'advancePayment'
          }, {
            label: 'Compras',
            value: 'purchases'
          }, {
            label: 'Cotizacion',
            value: 'quotation'
          }, {
            label: 'Gastos',
            value: 'expensive'
          }, {
            label: 'Modificación de Materiales',
            value: 'materialModification'
          }, {
            label: 'Pagos',
            value: 'payments'
          }, {
            label: 'Producción',
            value: 'production'
          }, {
            label: 'Registración',
            value: 'registration'
          }, {
            label: 'Rendición',
            value: 'rendition'
          }, {
            label: 'Seguimiento de la Producción',
            value: 'productionFollowUp'
          }];
          const materialCreation = exports.materialCreation = [{
            label: 'Asignado A',
            value: 'assignedTo'
          }, {
            label: 'Centro de Beneficio',
            value: 'profitCenter'
          }, {
            label: 'Código de Material',
            value: 'materialCode'
          }, {
            label: 'Creado Por',
            value: 'createdBy'
          }, {
            label: 'Empresa Editora',
            value: 'publishingCompany'
          }, {
            label: 'Estado',
            value: 'status'
          }, {
            label: 'Número de Referencia',
            value: 'referenceNumber'
          }, {
            label: 'Presupuesto AF',
            value: 'budgetAF'
          }, {
            label: 'Presupuesto AM',
            value: 'budgetAM'
          }, {
            label: 'Subproducto',
            value: 'subproduct'
          }, {
            label: 'Tarea',
            value: 'task'
          }, {
            label: 'Tipo de Componente',
            value: 'componentType'
          }, {
            label: 'Título',
            value: 'title'
          }, {
            label: 'Unidad de Negocio',
            value: 'businessUnit'
          }];
          const feasibilityAnalysis = exports.feasibilityAnalysis = [{
            label: 'Asignado A',
            value: 'assignedTo'
          }, {
            label: 'Cant. Producción',
            value: 'productionQuantity'
          }, {
            label: 'Creado Por',
            value: 'createdBy'
          }, {
            label: 'Descripción Solicitud',
            value: 'requestDescription'
          }, {
            label: 'Estado',
            value: 'status'
          }, {
            label: 'Inversión total',
            value: 'totalInvestment'
          }, {
            label: 'Número de Referencia',
            value: 'referenceNumber'
          }, {
            label: 'PVP Promedio',
            value: 'averageSellingPrice'
          }, {
            label: 'Tarea',
            value: 'task'
          }, {
            label: 'Título',
            value: 'title'
          }, {
            label: 'Venta líquida total',
            value: 'totalNetSales'
          }];
          const advancePayment = exports.advancePayment = [{
            label: 'Asignado A',
            value: 'assignedTo'
          }, {
            label: 'Creado Por',
            value: 'createdBy'
          }, {
            label: 'Descripción',
            value: 'description'
          }, {
            label: 'Descripción Solicitud',
            value: 'requestDescription'
          }, {
            label: 'Empresa',
            value: 'company'
          }, {
            label: 'Estado',
            value: 'status'
          }, {
            label: 'Fecha Anticipo',
            value: 'advanceDate'
          }, {
            label: 'Importe',
            value: 'amount'
          }, {
            label: "Item",
            value: "item"
          }, {
            label: 'Moneda',
            value: 'currency'
          }, {
            label: 'Número de Referencia',
            value: 'referenceNumber'
          }, {
            label: 'Origen',
            value: 'origin'
          }, {
            label: 'Proveedor',
            value: 'supplier'
          }, {
            label: 'Tarea',
            value: 'task'
          }, {
            label: 'Tipo',
            value: 'type'
          }];
          const purchases = exports.purchases = [{
            label: 'Asignado A',
            value: 'assignedTo'
          }, {
            label: 'Cantidad Item',
            value: 'itemQuantity'
          }, {
            label: 'Centro de Costo',
            value: 'costCenter'
          }, {
            label: 'Creado Por',
            value: 'createdBy'
          }, {
            label: 'Descripción Item',
            value: 'itemDescription'
          }, {
            label: 'Descripción Solicitud',
            value: 'requestDescription'
          }, {
            label: 'Estado',
            value: 'status'
          }, {
            label: 'Fecha Anticipo',
            value: 'advanceDate'
          }, {
            label: 'Gesfil',
            value: 'gesfil'
          }, {
            label: 'Grupo Compras',
            value: 'purchasingGroup'
          }, {
            label: 'Moneda',
            value: 'currency'
          }, {
            label: 'Número de Referencia',
            value: 'referenceNumber'
          }, {
            label: 'Orden de Compra',
            value: 'purchaseOrder'
          }, {
            label: 'Orden de Inversión',
            value: 'investmentOrder'
          }, {
            label: 'Precio Unitario',
            value: 'unitPrice'
          }, {
            label: 'Proveedor',
            value: 'supplier'
          }, {
            label: 'Sociedad',
            value: 'company'
          }, {
            label: 'Tarea',
            value: 'task'
          }, {
            label: 'Tipo',
            value: 'type'
          }, {
            label: 'Total Item',
            value: 'totalItems'
          }, {
            label: 'Total Solicitud',
            value: 'totalRequest'
          }];
          const quotation = exports.quotation = [{
            label: 'Alumnos SC',
            value: 'studentsSC'
          }, {
            label: 'Asignado A',
            value: 'assignedTo'
          }, {
            label: 'Aulas Digitales',
            value: 'digitalClassrooms'
          }, {
            label: 'Aulas Itinerantes',
            value: 'itinerantClassrooms'
          }, {
            label: 'Campaña',
            value: 'campaign'
          }, {
            label: 'Colegio',
            value: 'school'
          }, {
            label: 'Creado Por',
            value: 'createdBy'
          }, {
            label: 'Descripción Solicitud',
            value: 'requestDescription'
          }, {
            label: 'Descuento',
            value: 'discount'
          }, {
            label: 'Estado',
            value: 'status'
          }, {
            label: 'Fecha Firma Contrato',
            value: 'contractSigningDate'
          }, {
            label: 'Fecha Real de Solicitud',
            value: 'actualRequestDate'
          }, {
            label: 'Gastos Promocion',
            value: 'promotionExpenses'
          }, {
            label: 'Id Cotizacion SC',
            value: 'quotationIdSC'
          }, {
            label: 'Monto (con IVA) por alumno',
            value: 'amountWithIVAperStudent'
          }, {
            label: 'Monto (con IVA) Total',
            value: 'totalAmountWithIVA'
          }, {
            label: 'Monto (sin IVA) por alumno',
            value: 'amountWithoutIVAperStudent'
          }, {
            label: 'Monto (sin IVA) Total',
            value: 'totalAmountWithoutIVA'
          }, {
            label: 'Nro. Cliente',
            value: 'customerNumber'
          }, {
            label: 'Solicitud Original',
            value: 'originalRequest'
          }, {
            label: 'Tarea',
            value: 'task'
          }, {
            label: 'Venta Neta Acumulada',
            value: 'accumulatedNetSales'
          }];
          const expensive = exports.expensive = [{
            label: 'Asignado A',
            value: 'assignedTo'
          }, {
            label: 'Centro de Costo',
            value: 'costCenter'
          }, {
            label: 'Creado Por',
            value: 'createdBy'
          }, {
            label: 'Descripción Item',
            value: 'itemDescription'
          }, {
            label: 'Descripción Solicitud',
            value: 'requestDescription'
          }, {
            label: 'Estado',
            value: 'status'
          }, {
            label: 'Gesfil',
            value: 'gesfil'
          }, {
            label: 'Grupo Compras',
            value: 'purchasingGroup'
          }, {
            label: 'Importe',
            value: 'amount'
          }, {
            label: 'Moneda',
            value: 'currency'
          }, {
            label: 'Número de Referencia',
            value: 'referenceNumber'
          }, {
            label: 'Sociedad',
            value: 'company'
          }, {
            label: 'Tarea',
            value: 'task'
          }, {
            label: 'Tipo',
            value: 'type'
          }, {
            label: 'Total Solicitud',
            value: 'totalRequest'
          }];
          const materialModification = exports.materialModification = [{
            label: 'Asignado A',
            value: 'assignedTo'
          }, {
            label: 'Creado Por',
            value: 'createdBy'
          }, {
            label: 'Estado',
            value: 'status'
          }, {
            label: 'Tarea',
            value: 'task'
          }, {
            label: 'Título',
            value: 'title'
          }];
          const payments = exports.payments = [{
            label: 'Asignado A',
            value: 'assignedTo'
          }, {
            label: 'Comprobante',
            value: 'voucher'
          }, {
            label: 'Creado Por',
            value: 'createdBy'
          }, {
            label: 'Descripción',
            value: 'description'
          }, {
            label: 'Descripción Solicitud',
            value: 'requestDescription'
          }, {
            label: 'Empresa',
            value: 'company'
          }, {
            label: 'Estado',
            value: 'status'
          }, {
            label: 'Fecha Anticipo',
            value: 'advanceDate'
          }, {
            label: 'Fecha Estimada de Pago',
            value: 'estimatedPaymentDate'
          }, {
            label: 'Fecha Sello',
            value: 'sealDate'
          }, {
            label: 'Fecha Vencimiento',
            value: 'dueDate'
          }, {
            label: 'Grupo de Compras',
            value: 'purchasingGroup'
          }, {
            label: 'Importe',
            value: 'amount'
          }, {
            label: 'Item',
            value: 'item'
          }, {
            label: 'Moneda',
            value: 'currency'
          }, {
            label: 'Orden de Inversión',
            value: 'investmentOrder'
          }, {
            label: 'Origen',
            value: 'origin'
          }, {
            label: 'Proveedor',
            value: 'supplier'
          }, {
            label: 'Tarea',
            value: 'task'
          }, {
            label: 'Tipo',
            value: 'type'
          }, {
            label: 'Título',
            value: 'title'
          }];
          const production = exports.production = [{
            label: 'Asignado A',
            value: 'assignedTo'
          }, {
            label: 'Cant. Producción',
            value: 'productionQuantity'
          }, {
            label: 'Códigos de Material',
            value: 'materialCodes'
          }, {
            label: 'Creado Por',
            value: 'createdBy'
          }, {
            label: 'Descripción Solicitud',
            value: 'requestDescription'
          }, {
            label: 'Empresa',
            value: 'company'
          }, {
            label: 'Estado',
            value: 'status'
          }, {
            label: 'Inversión Total',
            value: 'totalInvestment'
          }, {
            label: 'Necesidad Almacén',
            value: 'warehouseNeeds'
          }, {
            label: 'Número de Referencia',
            value: 'referenceNumber'
          }, {
            label: 'Tarea',
            value: 'task'
          }, {
            label: 'Título',
            value: 'title'
          }, {
            label: 'Unidad de Negocio',
            value: 'businessUnit'
          }];
          const registration = exports.registration = [{
            label: 'Asignado A',
            value: 'assignedTo'
          }, {
            label: 'Comprobante',
            value: 'voucher'
          }, {
            label: 'Creado Por',
            value: 'createdBy'
          }, {
            label: 'Descripción',
            value: 'description'
          }, {
            label: 'Descripción Solicitud',
            value: 'requestDescription'
          }, {
            label: 'Empresa',
            value: 'company'
          }, {
            label: 'Estado',
            value: 'status'
          }, {
            label: 'Fecha Estimada de Pago',
            value: 'estimatedPaymentDate'
          }, {
            label: 'Fecha Sello',
            value: 'sealDate'
          }, {
            label: 'Fecha Vencimiento',
            value: 'dueDate'
          }, {
            label: 'Grupo de Compras',
            value: 'purchasingGroup'
          }, {
            label: 'Importe',
            value: 'amount'
          }, {
            label: 'Item',
            value: 'item'
          }, {
            label: 'Moneda',
            value: 'currency'
          }, {
            label: 'Número de Referencia',
            value: 'referenceNumber'
          }, {
            label: 'Orden de Inversión',
            value: 'investmentOrder'
          }, {
            label: 'Origen',
            value: 'origin'
          }, {
            label: 'Proveedor',
            value: 'supplier'
          }, {
            label: 'Tarea',
            value: 'task'
          }, {
            label: 'Tipo',
            value: 'type'
          }, {
            label: 'Título',
            value: 'title'
          }];
          const rendition = exports.rendition = [{
            label: 'Asignado A',
            value: 'assignedTo'
          }, {
            label: 'Creado Por',
            value: 'createdBy'
          }, {
            label: 'Descripción',
            value: 'description'
          }, {
            label: 'Descripción Solicitud',
            value: 'requestDescription'
          }, {
            label: 'Empresa',
            value: 'company'
          }, {
            label: 'Estado',
            value: 'status'
          }, {
            label: 'Fecha Estimada de Pago',
            value: 'estimatedPaymentDate'
          }, {
            label: 'Fecha Sello',
            value: 'sealDate'
          }, {
            label: 'Grupo de Compras',
            value: 'purchasingGroup'
          }, {
            label: 'Importe',
            value: 'amount'
          }, {
            label: 'Item',
            value: 'item'
          }, {
            label: 'Moneda',
            value: 'currency'
          }, {
            label: 'Número de Referencia',
            value: 'referenceNumber'
          }, {
            label: 'Origen',
            value: 'origin'
          }, {
            label: 'Proveedor',
            value: 'supplier'
          }, {
            label: 'Tarea',
            value: 'task'
          }, {
            label: 'Tipo',
            value: 'type'
          }];
          const productionFollowUp = exports.productionFollowUp = [{
            label: 'Asignado A',
            value: 'assignedTo'
          }, {
            label: 'Código de Material',
            value: 'materialCode'
          }, {
            label: 'Creado Por',
            value: 'createdBy'
          }, {
            label: 'Descripción Solicitud',
            value: 'requestDescription'
          }, {
            label: 'Estado',
            value: 'status'
          }, {
            label: 'ISBN',
            value: 'isbn'
          }, {
            label: 'Nota de Entrega',
            value: 'deliveryNote'
          }, {
            label: 'Número de OF',
            value: 'orderFormNumber'
          }, {
            label: 'Número de Referencia',
            value: 'referenceNumber'
          }, {
            label: 'Proveedor',
            value: 'supplier'
          }, {
            label: 'Tarea',
            value: 'task'
          }, {
            label: 'Tirada',
            value: 'printRun'
          }, {
            label: 'Título',
            value: 'title'
          }];
        }
      });

      /**********************************************
      INTERNAL MODULE: ./manager/form/_action-manager
      **********************************************/

      ims.set('./manager/form/_action-manager', {
        hash: 1777868777,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActionManagerOld = void 0;
          var _findMap = require("./_find-map");
          var _api = require("sgs-workflow/api");
          var _utils = require("@bgroup/helpers/utils");
          var _entities = require("sgs-workflow/entities");
          var _wrappers = require("sgs-workflow/wrappers");
          var _uuid = require("uuid");
          const api = new _api.Api();
          class ActionManagerOld {
            static cache = {};
            static onSelectFetch = async ({
              dependency,
              field,
              form
            }) => {
              const productionModal = form.getField('productionModal');
              try {
                if (!dependency.value) {
                  field.set({
                    value: ''
                  });
                  field.disabled = true;
                  return;
                }
                field.fetching = true;
                let parentDependency;
                if (dependency.specs.dependentOn && dependency.specs.dependentOn.length) {
                  const parentFieldName = dependency.specs.dependentOn[0].field;
                  parentDependency = form.getField(parentFieldName);
                }
                let url = `form/:id/selects/:select/:dependencyId?parentId=:parentId`;
                const params = {
                  url,
                  method: 'get',
                  data: {
                    id: form.settings.id,
                    select: field.name,
                    dependencyId: dependency.value,
                    parentId: null
                  },
                  required: ['id', 'select', 'dependencyId']
                };
                if (parentDependency?.value) params.data.parentId = parentDependency?.value;
                const response = await ActionManagerOld.fetch(params);
                if (!response.status) throw response.error;
                const options = response.data.options;
                field.set({
                  options
                });
                if (productionModal.open) field.set({
                  value: response?.data?.value || ''
                });
                field.disabled = false;
                field.triggerEvent('value.change');
                return params;
              } catch (error) {
                console.error('ERROR GETTING OPTIONS', error);
                return {
                  status: false,
                  error
                };
              } finally {
                field.fetching = false;
              }
            };
            static fetchData = specs => {
              try {
                if (!specs.settings.action) throw 'ACTION_REQUIRED';
                const callback = ActionManagerOld[specs.settings.action];
                if (!callback) console.error('url to call not found');
                callback(specs);
              } catch (error) {
                console.error(error);
                return {
                  status: false,
                  error
                };
              }
            };
            static fetch = async ({
              data,
              required,
              method,
              url
            }) => {
              try {
                const missingFields = [];
                required?.forEach(field => {
                  if (!data?.hasOwnProperty(field)) missingFields.push(field);
                });
                if (missingFields.length) throw `MISSING_${missingFields.join('_')}_VALUES`;
                const dynamicUrl = url.replace(/:([a-zA-Z]+)/g, (_, key) => {
                  if (key in data) return encodeURIComponent(data[key]);
                  throw `MISSING_${key}_VALUE_TO_PROCESS_URL_AT:${url}`;
                });
                //	if (this.cache[dynamicUrl]) return this.cache[dynamicUrl]
                const response = await api[method](dynamicUrl, data);
                if (!response.status) throw response.error;
                //	this.cache[dynamicUrl] = response
                return response;
              } catch (error) {
                console.error('Error httpCall: ', error);
                return {
                  status: false,
                  error
                };
              }
            };
            static onButtonGroupFetch = async ({
              dependency,
              field,
              form
            }) => {
              if (!dependency.value) return;
              const url = 'form/:id/selects/:select/:dependencyId';
              const params = {
                url,
                method: 'get',
                data: {
                  id: form.settings.id,
                  select: field.name,
                  dependencyId: dependency.value
                },
                required: ['id', 'select', 'dependencyId']
              };
              const response = await ActionManagerOld.fetch(params);
              if (!response.status) return;
              const options = response.data.options;
              field.set({
                options
              });
            };
            static async getChildsValues({
              dependency,
              field: wrapper,
              form,
              settings
            }) {
              if (!dependency?.value) return;
              const item = new _entities.FormItem();
              const response = await item.getChildsValues({
                id: form.settings.id,
                name: wrapper.name,
                dependencyId: dependency.value
              });
              settings.target.forEach(element => {
                const fields = form.getField(element.name);
                if (!response.data) return;
                const value = response.data[element.valueProperty];
                fields.set({
                  [settings.property]: element.isBoolean ? !!value : value
                });
              });
            }
            static hidde = ({
              dependency,
              value,
              checked
            }) => {
              const className = dependency.type === 'wrapper' ? dependency.className : dependency.specs.className;
              const bool = typeof value === 'object' ? checked : value;
              const cls = bool ? `${className} hidden` : className.replaceAll(/\bhidden\b/g, '').trim();
              dependency.set({
                className: cls
              });
              dependency.triggerEvent();
            };
            static onSearch = async params => {
              const {
                dependency,
                form,
                to,
                wrapperTo
              } = params;
              const wrapperSet = form.getField(wrapperTo);
              const prevEntries = form.getField(params.prevEntries);
              const fields = (0, _findMap.findMapByKeyRecursive)(to, form);
              if (!fields) return;
              const api = new _api.Api();
              const values = {};
              for (const value in fields.values) {
                if (!!fields.values[value]) values[value] = fields.values[value].trim();
              }
              if (!Object.keys(values).length) return;
              const where = {
                ...values
              };
              const query = _utils.Utils.convertObjectToQuery({
                where,
                field: dependency.name
              });
              wrapperSet.fields.forEach(field => {
                field.set({
                  loading: true,
                  disabled: true
                });
                field.disabled = true;
              });
              const response = await api.get(`titles/${query}`);
              if (!response.status) {
                wrapperSet.fields.forEach(field => {
                  field.disabled = false;
                  field.set({
                    loading: false,
                    disabled: false
                  });
                });
                return;
              }
              let entries = response.data.entries.filter(item => !prevEntries.entries.some(entry => entry.isbn ? entry.isbn === item.isbn : item.idTitulo === entry.idTitulo));
              entries = entries.map(item => {
                return {
                  ...item,
                  id: (0, _uuid.v4)()
                };
              });
              dependency.set({
                entries,
                total: response.data.total,
                rows: response.data.entries.length,
                selected: []
              });
              wrapperSet.fields.forEach(field => {
                field.disabled = false;
                field.set({
                  loading: false,
                  disabled: false
                });
              });
            };
            static setItems = async params => {
              const {
                dependency,
                form,
                to
              } = params;
              const fields = (0, _findMap.findMapByKeyRecursive)(to, form);
              if (!fields) return;
              const selected = fields.selected[0];
              const bookData = (0, _findMap.findMapByKeyRecursive)('bookData', form);
              const infoBook = (0, _findMap.findMapByKeyRecursive)('infoBook', form);
              const reprintData = (0, _findMap.findMapByKeyRecursive)('reprintData', form);
              reprintData.fields.get('copies').set({
                value: selected.ejemplaresEq
              });
              infoBook.fields.get('tituloBook').set({
                value: selected.titulo
              });
              bookData.set({
                opened: true
              });
              dependency.set({
                entries: fields.selected,
                total: fields.total,
                selected: fields.selected[0],
                rows: fields.selected.length
              });
              fields.clear();
            };
            static setItemsMaterial = async params => {
              const {
                dependency,
                form,
                to
              } = params;
              const fields = (0, _findMap.findMapByKeyRecursive)(to, form);
              const product = {
                titulo: '',
                tipoProducto: 'Producto',
                isbn: 'product'
              };
              const newTitleDivValue = (0, _findMap.findMapByKeyRecursive)('newTitleDivValue', form);
              const hardware = newTitleDivValue.fields.get('hardware');
              const newTitle = newTitleDivValue.fields.get('newTitleValue');
              const newTitleValue = newTitle.value;
              let newItems = Array.from(hardware.fields.values()).filter(field => field.checked).map(item => {
                return {
                  codigoSello: item.label,
                  titulo: item.label,
                  tipoProducto: item.label,
                  isbn: (0, _uuid.v4)()
                };
              });
              if (newTitleValue) {
                newItems = newItems.concat([{
                  titulo: newTitleValue,
                  tipoProducto: 'Libro',
                  isbn: (0, _uuid.v4)()
                }]);
              }
              let entries = dependency.entries.concat(fields.selected).concat(newItems);
              product.titulo = entries.map(item => item.titulo).join(' + ');
              if (!entries.some(item => item.isbn === 'product') && entries.length > 1) {
                entries = [product].concat(entries);
              } else if (entries.length > 1) entries[0].titulo = product.titulo;
              entries = entries.map(item => {
                return {
                  ...item,
                  id: (0, _uuid.v4)()
                };
              });
              dependency.set({
                entries,
                total: fields.total,
                selected: fields.selected[0],
                rows: entries.length
              });
              fields.clear();
            };
            static onSelectWidthHeight = ({
              dependency,
              field,
              form
            }) => {
              const onChange = async () => {
                const option = dependency.options.find(item => item.value === dependency.value);
                if (!option) return;
                let [width, height] = option.label.split('x');
                width = width.trim();
                height = height.trim();
                const widthNumber = Number(width.replace(',', '.'));
                const heightNumber = Number(height.replace(',', '.'));
                if (field.name === dependency.sizes.height) field.set({
                  value: heightNumber
                });
                if (field.name === dependency.sizes.width) field.set({
                  value: widthNumber
                });
              };
              dependency.on('change', onChange);
            };
            static onSelectSeal = ({
              dependency,
              form,
              settings
            }) => {
              const onChange = async () => {
                if (!dependency.value) {
                  settings.fields.forEach(item => {
                    Object.values(item).forEach(async value => {
                      const currentField = form.getField(value);
                      if (!currentField) return;
                      await currentField.isReady;
                      ActionManagerOld.handleMissingParameter(currentField, form, settings);
                    });
                  });
                  form.triggerEvent(settings.event);
                  return;
                }
                const api = new _api.Api();
                const option = dependency.options.find(item => item.value === dependency.value);
                if (!option) return;
                const value = option.label;
                const query = _utils.Utils.convertObjectToQuery({
                  field: dependency.name,
                  where: {
                    claveSelloUn: value
                  }
                });
                const querySellos = _utils.Utils.convertObjectToQuery({
                  field: 'materialVtaUltAnio',
                  where: {
                    id: dependency.value
                  }
                });
                const isApplicable = value !== settings.notApplicable;
                try {
                  const response = await api.get(`form/tables/${form.processId}${query}`);
                  const data = response.data.entries;
                  if (isApplicable) {
                    const responseSellos = await api.get(`form/tables/${form.processId}${querySellos}`);
                    const idUnSgs = responseSellos.data.entries[0].idUnSgs;
                    const queryVarX = _utils.Utils.convertObjectToQuery({
                      field: settings.rentabilidadAxPorcientoValorX,
                      where: {
                        claveParametro: 'rentabilidadAXPorcValorX',
                        claveSelloUn: idUnSgs
                      }
                    });
                    const responseVarX = await api.get(`form/tables/${form.processId}${queryVarX}`);
                    if (!!responseVarX?.data?.entries?.length) {
                      const dataVarX = responseVarX?.data?.entries[0].valorReferencia;
                      if (dataVarX) {
                        const varX = form.getField(settings.rentabilidadAxPorcientoValorX);
                        varX.set({
                          value: dataVarX
                        });
                      }
                    }
                  }
                  const isBusinessUnit = isApplicable ? _wrappers.session.isSealInBusinessUnit({
                    denominacion: value
                  }) : true;
                  settings.fields.forEach(item => {
                    Object.entries(item).forEach(async ([key, value]) => {
                      const currentField = form.getField(value);
                      if (!currentField) return;
                      await currentField.isReady;
                      const parameter = data.find(item => item.claveParametro === (key === settings.yields.RentabilidadAXPorc ? settings.yields.Rentabilidad : key));
                      if (!parameter) {
                        await ActionManagerOld.handleMissingParameter(currentField, form, settings);
                        return;
                      }
                      await ActionManagerOld.setFieldValues(form, currentField, parameter, settings);
                    });
                  });
                  form.triggerEvent(settings.event);
                  if (!isBusinessUnit) {
                    dependency.set(settings.warning);
                  } else dependency.set({
                    icon: undefined
                  });
                } catch (error) {
                  console.error('Error fetching data:', error);
                }
              };
              dependency.on('change', onChange);
            };
            static async handleMissingParameter(field, form, settings) {
              const traffic = ['puntoEquilibrioParam', 'coberturaDaParamCalculado'].concat(settings.divideInTwo).includes(field.name) ? 'red' : 'grey';
              field.set({
                condition: {
                  ...field.condition,
                  red: '',
                  yellow: '',
                  green: '',
                  traffic
                },
                value: ''
              });
              if (['puntoEquilibrioParamCalculado', 'coberturaDaParamCalculado'].concat(settings.divideInTwo).includes(field.name)) {
                await ActionManagerOld.resetRelatedFields(form, settings);
              }
            }
            static async setFieldValues(form, field, parameter, settings) {
              const isPercent = !settings.notPercent.includes(parameter.claveParametro.toLowerCase());
              let value = isPercent ? parameter.valorReferencia * 100 : parameter.valorReferencia;
              const fixed = !isPercent ? 2 : 1;
              value = (settings.divideInTwo.includes(parameter.claveParametro) ? value * 2 : value).toFixed(fixed);
              if (value) value = Number(value);
              field.set({
                condition: {
                  ...field.condition,
                  red: parameter.valorRojo,
                  yellow: parameter.valorAmarillo,
                  green: parameter.valorVerde
                },
                value
              });
              if (settings.divideInTwo.some(item => item === parameter.claveParametro)) {
                await ActionManagerOld.setRelatedFieldValues(form, parameter, settings);
              }
            }
            static resetRelatedFields(form, settings) {
              ['puntoEquilibrioParamCalculado', 'coberturaDaParam', 'coberturaDaParamCalculado', 'puntoEquilibrioParam'].forEach(async key => {
                const field = form.getField(key);
                await field.isReady;
                field.set({
                  condition: {
                    ...field.condition,
                    red: '',
                    yellow: '',
                    green: '',
                    traffic: 'red'
                  },
                  value: ''
                });
              });
            }
            static async setRelatedFieldValues(form, parameter, settings) {
              const fieldDA = form.getField(settings.fieldsRelatives.CoberturaDAVentas);
              const fieldPtoQ = form.getField(settings.fieldsRelatives.ptoEQVentas);
              await fieldDA.isReady;
              await fieldPtoQ.isReady;
              const relatedField = parameter.claveParametro === settings.CoberturaDA ? fieldDA : fieldPtoQ;
              let value = parameter.valorReferencia * 100;
              relatedField.set({
                condition: {
                  ...relatedField.condition,
                  red: parameter.valorRojo,
                  yellow: parameter.valorAmarillo,
                  green: parameter.valorVerde
                },
                value
              });
            }
            static onSimulate({
              form,
              event
            }) {
              form.triggerEvent(event);
            }
            static triggerEvent({
              form,
              event,
              to
            }) {
              const field = form.getField(to);
              field.triggerEvent(event);
            }
            static togglePropertiesValue({
              to,
              value,
              form,
              checked
            }) {
              const field = form.getField(to);
              if (!field) return;
              const valuesToSet = checked ? value[1] : value[0];
              const propsToSet = {};
              valuesToSet.forEach(element => {
                const {
                  property,
                  value
                } = element;
                propsToSet[property] = value;
              });
              if (propsToSet.hasOwnProperty('disabled')) field.disabled = propsToSet?.disabled;
              field.set(propsToSet);
            }
            static copyValue = params => {
              const {
                settings,
                form,
                field,
                fields
              } = params;
              const {
                to,
                from
              } = settings;
              const fromField = fields[from];
              const toField = form.getField(to);
              const fieldToSet = toField ?? field;
              const propertyToCopy = settings?.propertyToCopy || 'value';
              let value = fromField[propertyToCopy];
              if (settings.valueSeparator) {
                value = value.split(settings.valueSeparator)[1];
              }
              fieldToSet.set({
                value
              });
            };
            static copyValueFromThird = ({
              to,
              from,
              form,
              property,
              regexpReplace,
              as
            }) => {
              const field = form.getField(to);
              if (!field) return;
              const key = property ?? 'value';
              const fromField = form.getField(from);
              if (!fromField) return;
              if (typeof fromField[key] === 'object') {
                const value = Array.isArray(fromField[key]) ? fromField[key][0] : fromField[key];
                Object.entries(value).forEach(([key, value]) => {
                  const newKey = as ? as[key] : key;
                  const field = form.getField(newKey);
                  if (!field) return;
                  const fieldValue = !regexpReplace || !regexpReplace[key] ? value : value.replace(new RegExp(regexpReplace[key]), '');
                  field.set({
                    value: fieldValue
                  });
                });
                return;
              }
              field.set({
                [key]: fromField[key]
              });
            };
            static async totalizerAFA(params) {
              const {
                dependency,
                field,
                form
              } = params;
              await dependency.isReady;
              const fields = Array.from(dependency.fields.values());
              const value = fields.map(input => {
                return {
                  value: input.value,
                  id: input.id
                };
              });
              dependency.set({
                value
              });
              const total = value.reduce((total, num) => total + num.value, 0);
              const input = form.getField(field);
              input.set({
                value: Math.round(total)
              });
            }
            static async prevValues(params) {
              const {
                dependency,
                form
              } = params;
              await dependency.isReady;
              if (!dependency.fields) return;
              const fields = Array.from(dependency.fields.values());
              if (!dependency.value.length) {
                fields.forEach(item => {
                  item.set({
                    value: 0
                  });
                });
                return;
              }
              dependency.value.forEach(async input => {
                const field = fields.find(item => item.id === input.id);
                if (!field) return;
                await field.isReady;
                field.set({
                  value: input.value
                });
              });
            }
            static clear(params) {
              const {
                dependency: wrapper,
                form
              } = params;
              wrapper.fields.forEach(field => {
                field.set({
                  value: '0,00'
                });
              });
              form.triggerEvent('reset');
            }
            static copyToTable = async ({
              to,
              structure,
              form,
              error,
              conditionalField
            }) => {
              const table = form.getField(to);
              const selectedItem = table.selectedItem || {};
              const values = {
                id: (0, _uuid.v4)(),
                ...selectedItem
              };
              for (const key in structure) {
                const field = form.getField(key);
                await field.isReady;
                if (!!structure[key] && !Array.isArray(structure[key]) && typeof structure[key] === 'object') {
                  values[key] = {};
                  Object.keys(structure[key]).forEach(property => {
                    values[key][property] = field[property];
                  });
                  continue;
                }
                if (field.required && !field.value) {
                  const errorField = form.getField(error.name);
                  errorField.set({
                    open: true
                  });
                  return;
                }
                const value = field.value;
                values[key] = value;
              }
              let entries = table.entries;
              if (selectedItem.id) {
                const index = entries.findIndex(item => item.id === table.selectedItem?.id);
                values.id = table.selectedItem?.id;
                entries[index] = values;
              } else entries = [...table.entries, values];
              const field = form.getField(conditionalField);
              field.clear();
              field.set({
                opened: false
              });
              table.set({
                entries
              });
              table.triggerEvent();
            };
            static deleteItemInJView = params => {
              const {
                dependency,
                id,
                item,
                form,
                close
              } = params;
              const entries = dependency.entries.filter(item => item.id !== id);
              const values = {
                entries,
                total: entries.length,
                rows: entries.length
              };
              if (id === dependency.selectedItem?.id) {
                Object.keys(item).forEach(key => {
                  const field = form.getField(key);
                  if (!field) return;
                  field.set({
                    value: ''
                  });
                });
                ActionManagerOld.setValueField({
                  form,
                  ...close
                });
                values.selectedItem = null;
              }
              dependency.set({
                ...values
              });
            };
            static duplicateItemJView = params => {
              const {
                dependency,
                item
              } = params;
              const newItem = {
                ...item,
                id: (0, _uuid.v4)()
              };
              if (params.ignore) params.ignore.forEach(prop => newItem[prop] = undefined);
              const entries = dependency.entries.concat([newItem]);
              dependency.set({
                entries,
                total: entries.length,
                rows: entries.length
              });
            };
            static selectItemJView = params => {
              const {
                item,
                form,
                dependency,
                isSetInputs,
                property
              } = params;
              if (isSetInputs) Object.entries(item).forEach(async ([key, value]) => {
                const field = form.getField(key);
                if (!field) return;
                await field.isReady;
                const valueIsADate = value instanceof Date;
                const isMultiValue = !!value && !Array.isArray(value) && typeof value === 'object' && !valueIsADate;
                if (isMultiValue) {
                  Object.entries(value).forEach(([prop, value]) => {
                    field.set({
                      [prop]: value
                    });
                  });
                  return;
                }
                field.set({
                  value
                });
                field.triggerEvent();
                form.triggerEvent('percent.field');
              });
              dependency.set({
                [property ?? 'selectedItem']: item
              });
            };
            static setValueField = params => {
              const {
                form,
                property,
                to,
                value,
                notSet
              } = params;
              const field = form.getField(to);
              if (!field) return;
              if (['disabled'].includes(property)) {
                field[property] = value;
              }
              if (!notSet) field.set({
                [property]: value
              });else field[property] = value;
            };
            static setValueFields = params => {
              const {
                form,
                fields
              } = params;
              fields.forEach(field => {
                ActionManagerOld.setValueField({
                  form,
                  ...field
                });
              });
            };
            static onSimulateAFA = params => {
              const {
                form,
                event,
                validation
              } = params;
              const field = form.getField(validation.field);
              const validateField = form.getField(validation.validateField);
              const validated = validation.values.includes(field.value) && !validateField.value;
              if (validated) {
                const alert = form.getField(validation.alert);
                alert.set({
                  open: true
                });
                return;
              }
              form.triggerEvent(event);
            };
            static selectedDelete = params => {
              const {
                item,
                dependency,
                key
              } = params;
              dependency.set({
                [key]: item
              });
            };
            static closeFormModal = (formManager, parent) => {
              formManager.displayRequestForm = {
                show: false,
                processId: 0
              };
              formManager.reset();
              if (localStorage.getItem('added_files')) parent.rollback();
              localStorage.removeItem('added_files');
              localStorage.removeItem('removed_files');
            };
            static getDerivationUsers = async ({
              form,
              field,
              ...config
            }) => {
              try {
                const item = new _entities.FormItem();
                const response = await item.getDerivationUsers({
                  processId: form.processId
                });
                if (!response.status) throw response.error;
                const options = response.data.entries.map(user => ({
                  label: `${user.nombre}, ${user.apellido}`,
                  value: user.id
                }));
                field.set({
                  options
                });
              } catch (error) {
                console.error('ERROR GETTING DERIVATION USERS', error);
              }
            };
            static setPrevValues = params => {
              const {
                form,
                isSaved,
                fields
              } = params;
              fields.forEach(async to => {
                const field = form.getField(to.field);
                if (!field) return;
                await field.isReady;
                if (!field?.prevValues) return;
                const key = to.property ?? 'value';
                if (isSaved) {
                  field.set({
                    prevValues: {
                      ...field.prevValues,
                      [key]: field[key]
                    }
                  });
                  return;
                }
                field.set({
                  [key]: field?.prevValues[key]
                });
              });
            };
            static searchTables = async params => {
              const {
                form,
                endpoint,
                fields,
                toSet,
                fieldType,
                emptyValue
              } = params;
              const values = {};
              fields.forEach(item => {
                const field = form.getField(item);
                if (!field) return;
                values[item] = typeof field.value === 'boolean' ? field.value ? 1 : 0 : field.value.trim();
              });
              if (!Object.keys(values).length) return;
              const api = new _api.Api();
              const query = _utils.Utils.convertObjectToQuery({
                where: values
              });
              const field = form.getField(toSet);
              field.set({
                loading: true
              });
              const response = await api.get(`${endpoint}${query}`);
              if (!response.status) {
                field.set({
                  loading: false
                });
                return;
              }
              if (fieldType === 'table') field.set({
                entries: response.data.entries,
                total: response.data.total,
                rows: response.data.total,
                loading: false,
                value: null
              });else {
                Object.entries(response.data).forEach(([key, value]) => {
                  const field = form.getField(key);
                  if (!field) return;
                  const valueField = value ? value : ![undefined].includes(emptyValue) ? emptyValue : '';
                  field.set({
                    value: valueField
                  });
                });
              }
              field.set({
                loading: false
              });
            };
            static setClear = params => {
              const {
                form,
                to
              } = params;
              const field = form.getField(to);
              if (!field) return;
              field.clear();
            };
            static acceptProductionModal = async params => {
              const {
                form,
                fieldsNotEmpty,
                alertModal,
                fieldPaperRepeater,
                callbacks
              } = params;
              const alertField = form.getField(alertModal);
              for (const item of fieldsNotEmpty) {
                const field = form.getField(item);
                await field.isReady;
                if (!field.value) {
                  alertField.set({
                    open: true,
                    message: `El valor del campo ${item} no puede estar vacío`
                  });
                  return;
                }
              }
              const interiorPaperRepeater = form.getField(fieldPaperRepeater);
              await fieldPaperRepeater.isReady;
              for (const item of interiorPaperRepeater.value) {
                const paginas = parseInt(item.paginas);
                if (isNaN(paginas) || paginas <= 0) {
                  alertField.set({
                    open: true,
                    message: 'Páginas debe ser mayor a 0 para la medida seleccionada.'
                  });
                  return;
                }
              }
              for (const item of callbacks) {
                ActionManagerOld[item.callback]({
                  ...item,
                  form
                });
              }
            };
          }
          exports.ActionManagerOld = ActionManagerOld;
        }
      });

      /****************************************
      INTERNAL MODULE: ./manager/form/_find-map
      ****************************************/

      ims.set('./manager/form/_find-map', {
        hash: 2829023928,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.findMapByKeyRecursive = findMapByKeyRecursive;
          function findMapByKeyRecursive(keyToFind, outerMap) {
            function searchInMap(map) {
              if (map.has(keyToFind)) return map.get(keyToFind);
              for (const value of map.values()) {
                if (value && value.fields instanceof Map) {
                  const result = searchInMap(value.fields);
                  if (result) return result;
                }
              }
              return undefined;
            }
            return searchInMap(outerMap.fields);
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./manager/form/action-manager/afa
      *************************************************/

      ims.set('./manager/form/action-manager/afa', {
        hash: 2627713109,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.totalizerAFA = exports.toggleFlagSelectItemJView = exports.selectedItemAfa = exports.onSimulateAFA = exports.getDerivationUsers = exports.acceptProductionModal = void 0;
          var _entities = require("sgs-workflow/entities");
          const totalizerAFA = async params => {
            const {
              dependency,
              field,
              form
            } = params;
            await dependency.isReady;
            const fields = Array.from(dependency.fields.values());
            const value = fields.map(input => {
              return {
                value: input.value,
                id: input.id
              };
            });
            dependency.set({
              value
            });
            const total = value.reduce((total, num) => total + parseFloat(num.value), 0);
            const input = form.getField(field);
            input.set({
              value: Math.round(total)
            });
          };
          exports.totalizerAFA = totalizerAFA;
          const onSimulateAFA = params => {
            const {
              form,
              event,
              validation
            } = params;
            const field = form.getField(validation.field);
            const validateField = form.getField(validation.validateField);
            const validated = validation.values.includes(field.value) && !validateField.value;
            if (validated) {
              const alert = form.getField(validation.alert);
              alert.set({
                open: true
              });
              return;
            }
            form.triggerEvent(event);
          };
          exports.onSimulateAFA = onSimulateAFA;
          const getDerivationUsers = async ({
            form,
            field,
            ...config
          }) => {
            try {
              const item = new _entities.FormItem();
              const fieldSelect = form.getField(field);
              form.fetching = true;
              const response = await item.getDerivationUsers({
                processId: form.processId
              });
              if (!response.status) throw response.error;
              const options = response.data.entries.map(user => ({
                label: `${user.nombre}, ${user.apellido}`,
                value: user.id
              }));
              fieldSelect.set({
                options
              });
              fieldSelect.triggerEvent();
            } catch (error) {
              console.error("ERROR GETTING DERIVATION USERS", error);
            } finally {
              form.fetching = false;
            }
          };
          exports.getDerivationUsers = getDerivationUsers;
          const acceptProductionModal = async (ActionManager, params) => {
            const {
              form,
              fieldsNotEmpty,
              alertModal,
              fieldPaperRepeater,
              callbacks
            } = params;
            const alertField = form.getField(alertModal);
            for (const item of fieldsNotEmpty) {
              const field = form.getField(item);
              await field.isReady;
              if (!field.value) {
                alertField.set({
                  open: true,
                  message: `El valor del campo ${item} no puede estar vacío`
                });
                return;
              }
            }
            const interiorPaperRepeater = form.getField(fieldPaperRepeater);
            await fieldPaperRepeater.isReady;
            for (const item of interiorPaperRepeater.value) {
              const paginas = parseInt(item.paginas);
              if (isNaN(paginas) || paginas <= 0) {
                alertField.set({
                  open: true,
                  message: 'Páginas debe ser mayor a 0 para la medida seleccionada.'
                });
                return;
              }
            }
            for (const item of callbacks) {
              ActionManager[item.callback]({
                ...item,
                form
              });
            }
          };
          exports.acceptProductionModal = acceptProductionModal;
          let isThrottled = false;
          const selectedItemAfa = async (params, ActionManager, parent) => {
            if (isThrottled) return;
            isThrottled = true;
            const {
              form,
              callbacks,
              dependency,
              item
            } = params;
            if (!ActionManager.flagSelectItemJView && dependency.selectedItem.id === item.id) {
              isThrottled = false;
              return;
            }
            parent.fetching = true;
            for (const callback of callbacks) {
              const specs = {
                ...params,
                ...callback,
                form,
                item: params.item
              };
              await ActionManager[callback.callback](specs);
            }
            ;
            ActionManager.flagSelectItemJView = false;
            setTimeout(() => {
              isThrottled = false;
              parent.fetching = false;
            }, 300);
          };
          exports.selectedItemAfa = selectedItemAfa;
          const toggleFlagSelectItemJView = async (ActionManager, {
            value,
            form
          }) => {
            ActionManager.flagSelectItemJView = value;
            form.flagSelectItemJView = value;
          };
          exports.toggleFlagSelectItemJView = toggleFlagSelectItemJView;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./manager/form/action-manager/atm
      *************************************************/

      ims.set('./manager/form/action-manager/atm', {
        hash: 3332616110,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.setProductType = exports.setFromTable = exports.setFieldArticle = exports.acceptAuthorTitle = void 0;
          exports.validateArticles = validateArticles;
          var _utils = require("@bgroup/helpers/utils");
          var _api = require("sgs-workflow/api");
          const acceptAuthorTitle = async params => {
            const api = new _api.Api();
            const {
              form,
              table,
              to,
              setIdTo
            } = params;
            const fieldTable = form.getField(table);
            const cesionDe = form.getField(params.cesionDe);
            const [value] = fieldTable.value;
            // fieldTable.set({ entries: [value], value: [value] })
            const response = await api.get(`contracts/${value.idObra}`);
            const data = response.data.entries;
            const contracts = data.map(item => `${item.idContrato} - ${item.descripcion}`);
            const fieldValue = contracts.length > 0 ? `${value.titulo} (${contracts.join('|')})` : value.titulo;
            const field = form.getField(to);
            const idField = form.getField(setIdTo);
            idField.set({
              value: value.idObra
            });
            field.set({
              value: fieldValue
            });
            cesionDe.disabled = false;
          };
          exports.acceptAuthorTitle = acceptAuthorTitle;
          function parseDate(dateString) {
            if (!dateString) return;
            let date = new Date(dateString);
            if (date.toString() !== 'Invalid Date') return date;
            const months = {
              Jan: 0,
              Feb: 1,
              Mar: 2,
              Apr: 3,
              May: 4,
              Jun: 5,
              Jul: 6,
              Aug: 7,
              Sep: 8,
              Oct: 9,
              Nov: 10,
              Dec: 11
            };
            const parts = dateString.split(' ');
            const month = months[parts[0]];
            const day = parseInt(parts[1]);
            const year = parseInt(parts[2]);
            return new Date(year, month, day);
          }
          const setFromTable = async (parent, params) => {
            const {
              form,
              fieldsMapping,
              validateField,
              field,
              works,
              dependentFields,
              isDigitalAndAfa,
              structureOfArt,
              copyright
            } = params;
            const fieldModel = form.getField(field);
            const table = form.getField(validateField?.field);
            const selectedValue = fieldModel.selected[0];
            if (!selectedValue || table[validateField?.property].filter(item => !item.ignore).length) return;
            parent.fetching = true;
            const api = new _api.Api();
            const query = _utils.Utils.convertObjectToQuery({
              where: {
                codigoMaterial: selectedValue.codigoMaterial?.replace(/^0+/, ''),
                idTitle: selectedValue.idTitulo
              }
            });
            const response = await api.get(`titles/info${query}`);
            const data = response.data;
            Object.keys(fieldsMapping).forEach(fieldName => {
              const mappingConfig = fieldsMapping[fieldName];
              let fieldValue;
              let enableIfDisabled = false;
              if (typeof mappingConfig === 'string') {
                fieldValue = data ? data[mappingConfig] : undefined;
              } else {
                const {
                  sourceFields,
                  type,
                  enableIfDisabled: enableOption,
                  fixedValue
                } = mappingConfig;
                enableIfDisabled = enableOption || false;
                if (sourceFields) {
                  for (const sourceField of sourceFields) {
                    if (data && ![null, undefined].includes(data[sourceField])) {
                      fieldValue = data[sourceField];
                      break;
                    }
                  }
                }
                if (fixedValue !== undefined && !fieldValue) {
                  fieldValue = fixedValue;
                }
                if (type === 'boolean') {
                  fieldValue = fieldValue === 1;
                }
                if (type === 'date') {
                  fieldValue = parseDate(fieldValue);
                  fieldValue = fieldValue ? fieldValue.getFullYear().toString() : '';
                }
              }
              const targetField = form.getField(fieldName);
              if (targetField) {
                targetField.set({
                  value: fieldValue === undefined ? targetField.specs.value : fieldValue
                });
                if (enableIfDisabled && !!fieldValue) {
                  targetField.disabled = false;
                }
              }
            });
            if (selectedValue.idTitulo) {
              const worksFields = form.getField(works);
              for (const field of worksFields.fields.values()) {
                const work = data.works.find(item => item.idTrabajo === field.idTrabajo);
                if (!work) continue;
                field.set({
                  value: work.importe
                });
              }
              ;
              if (selectedValue.esProdDigital) {
                if (data.porcentajeDerechoAutorDigital) {
                  form.getField("copyright").set({
                    value: 1
                  });
                  form.getField("PVP").set({
                    value: data.pvpDigital
                  });
                }
              } else {
                if (data.porcentajeDerechoAutor) {
                  form.getField("copyright").set({
                    value: 1
                  });
                  form.getField("PVP").set({
                    value: data.pvp
                  });
                }
              }
            }
            for (const conf of isDigitalAndAfa) {
              const isAFA = selectedValue[conf.afa];
              const isDigital = selectedValue[conf.digital];
              const field = form.getField(conf.field);
              let value = data[conf.field];
              if (isAFA && isDigital) value = conf.value;
              field.set({
                value
              });
            }
            if (data[structureOfArt.sourceField]) {
              const field = form.getField(structureOfArt.fieldTree);
              const node = findNodePathById(field.specs.data[0], data[structureOfArt.sourceField]);
              if (node) {
                const fieldArt = form.getField(structureOfArt.field);
                fieldArt.set({
                  value: data[structureOfArt.sourceField]
                });
                field.set({
                  value: data[structureOfArt.sourceField]
                });
              }
            }
            if (!selectedValue.idTitulo) {
              const field = form.getField(copyright.field);
              const table = form.getField(copyright.table);
              field.set({
                value: copyright.value
              });
              const associatedWork = await api.post(`associated-work/sap`, {
                codigoMaterial: selectedValue.codigoMaterial
              });
              if (!associatedWork?.data) {
                parent.fetching = false;
                return;
              }
              const work = associatedWork.data.obra;
              const data = associatedWork.data.contratos;
              const contracts = data.map(item => `${item.idContrato} - ${item.descripcion}`);
              const fieldValue = contracts.length > 0 ? `${work.titulo} (${contracts.join('|')})` : work.titulo;
              const associatedWorkField = form.getField(copyright.associatedWork);
              const associatedWorkIdField = form.getField(copyright.associatedWorkId);
              const cesionDeField = form.getField(copyright.cesion);
              const works = [work];
              const tableInfo = {
                entries: works,
                total: works.length,
                rows: works.length,
                value: works
              };
              table.set({
                ...tableInfo,
                prevValues: {
                  ...tableInfo
                }
              });
              associatedWorkField.set({
                value: fieldValue
              });
              associatedWorkIdField.set({
                value: work.idObra
              });
              cesionDeField.set({
                value: 1,
                checked: true
              });
              cesionDeField.disabled = true;
            }
            parent.fetching = false;
          };
          exports.setFromTable = setFromTable;
          const setProductType = params => {
            const {
              dependency,
              settings,
              field,
              form
            } = params;
            const entries = dependency.entries;
            let value = '';
            let disabled = false;
            const active = form.getField(settings.isActive);
            if (!entries?.length || active.value === 'I') {
              field.set({
                value
              });
              field.disabled = field.specs.disabled || disabled;
              return;
            }
            const isDigital = !!entries[0][settings.isDigital.isDigital];
            const isPack = entries?.length > 1;
            if (isDigital) value = settings.isDigital.value;else if (isPack) {
              value = settings.isPack;
              disabled = true;
            } else value = settings.default;
            field.set({
              value
            });
            field.disabled = field.specs.disabled || disabled;
          };
          exports.setProductType = setProductType;
          const setFieldArticle = params => {
            const {
              dependency,
              settings: {
                fieldsMapping
              },
              form
            } = params;
            const entries = dependency.entries;
            const selectedValue = entries[0];
            for (const field in fieldsMapping) {
              const mappingConfig = fieldsMapping[field];
              let fieldName;
              let fieldValue;
              if (typeof mappingConfig === 'string') {
                fieldName = mappingConfig;
                fieldValue = selectedValue ? selectedValue[fieldName] : '';
                if (!fieldValue && fieldValue !== false && fieldValue !== 0) {
                  fieldValue = '';
                }
              } else {
                const {
                  sourceField,
                  default: defaultValue
                } = mappingConfig;
                fieldName = sourceField;
                fieldValue = selectedValue ? selectedValue[fieldName] : '';
                if (!fieldValue && defaultValue) fieldValue = defaultValue;
              }
              const targetField = form.getField(field);
              if (!targetField) continue;
              targetField.set({
                value: fieldValue
              });
            }
          };
          exports.setFieldArticle = setFieldArticle;
          function findNodePathById(node, id, path = []) {
            if (node.id === id) {
              return node;
            }
            if (node.children) {
              for (let child of node.children) {
                const result = findNodePathById(child, id, [...path, node]);
                if (result) {
                  return result;
                }
              }
            }
            return null;
          }
          function validateArticles(params) {
            const {
              settings: {
                cases
              },
              field,
              dependency,
              form
            } = params;
            const items = dependency.entries;
            const entries = items.filter(item => item.idTipoArticulo !== 6); // when is pack
            let selected = items.find(item => !!item.selected);
            selected = selected || dependency.entries.length > 1 ? entries[0] : dependency.entries[0];
            const isPackSapAfa = items.length > 1 && selected?.idTipoArticulo === 3 && entries.some(item => item.idTipoArticulo === 1);
            const isPackAfaSap = items.length > 1 && selected?.idTipoArticulo === 1 && entries.some(item => item.idTipoArticulo === 3);
            const validations = {
              isTitlesAfa: items.length === 1 && selected?.idTipoArticulo === 1,
              isTitleSap: selected?.idTipoArticulo === 3 && !entries.some(item => item.idTipoArticulo === 4) && items.length === 1,
              isPackFromSap: items.some(record => record.idTipoArticulo === 6) && entries.every(record => record.idTipoArticulo === 3),
              isPackFromAfa: items.length > 1 && selected?.idTipoArticulo === 1 && (!!selected?.fichas && !!selected?.fichasCantidad || !!selected?.cdDvd && !!selected?.cdDevCantidad),
              isPackSapAfa,
              isPackAfaSap,
              isComponents: entries.every(item => item.idTipoArticulo === 4) && !!entries.length,
              isAfaSapComponent: items.length > 1 && (selected?.idTipoArticulo === 3 || selected?.idTipoArticulo === 1) && entries.some(item => item.idTipoArticulo === 4) && !isPackSapAfa && !isPackAfaSap
            };
            let validate = '';
            for (const param in validations) {
              if (validations[param]) {
                validate = cases[param];
                break;
              }
            }
            field.set({
              value: validate
            });
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./manager/form/action-manager/copy
      **************************************************/

      ims.set('./manager/form/action-manager/copy', {
        hash: 3347599692,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.copyValueFromThird = exports.copyValue = exports.copyToTable = void 0;
          var _uuid = require("uuid");
          const copyValue = params => {
            const {
              settings,
              form,
              field,
              fields
            } = params;
            const {
              to,
              from
            } = settings;
            const fromField = fields[from];
            const toField = form.getField(to);
            const fieldToSet = toField ?? field;
            const propertyToCopy = settings?.propertyToCopy || 'value';
            let value = fromField[propertyToCopy];
            if (settings.valueSeparator) {
              value = value.split(settings.valueSeparator)[1];
            }
            fieldToSet.set({
              value
            });
          };
          exports.copyValue = copyValue;
          const copyValueFromThird = ({
            to,
            from,
            form,
            property,
            regexpReplace,
            as,
            propertyToSet,
            conserveItems,
            propertySelectedTable
          }) => {
            const field = form.getField(to);
            if (!field) return;
            const key = property ?? 'value';
            const fromField = form.getField(from);
            if (!fromField) return;
            const toSet = propertyToSet || key;
            if (typeof fromField[key] === 'object' && !Array.isArray(fromField[key])) {
              const value = Array.isArray(fromField[key]) ? fromField[key][0] : fromField[key];
              Object.entries(value).forEach(([key, value]) => {
                const newKey = as ? as[key] : key;
                const field = form.getField(newKey);
                if (!field) return;
                let fieldValue = !regexpReplace || !regexpReplace[key] ? value : value.replace(new RegExp(regexpReplace[key]), '');
                if (conserveItems) {
                  fieldValue = [...field[toSet], ...fieldValue];
                }
                field.set({
                  [toSet]: fieldValue
                });
              });
              return;
            }
            let values = {
              [toSet]: fromField[key]
            };
            if (conserveItems) {
              if (propertySelectedTable) values[propertySelectedTable] = values[toSet][0];
              values[toSet] = [...field[toSet], ...values[toSet]];
            }
            field.set({
              ...values
            });
          };
          exports.copyValueFromThird = copyValueFromThird;
          const copyToTable = ({
            to,
            structure,
            form,
            error,
            conditionalField
          }) => {
            const table = form.getField(to);
            const selectedItem = table.selectedItem || {};
            const values = {
              id: (0, _uuid.v4)(),
              ...selectedItem
            };
            for (const key in structure) {
              const field = form.getField(key);
              if (!!structure[key] && !Array.isArray(structure[key]) && typeof structure[key] === 'object') {
                values[key] = {};
                Object.keys(structure[key]).forEach(property => {
                  values[key][property] = field[property];
                });
                continue;
              }
              if (field.required && !field.value) {
                const errorField = form.getField(error.name);
                errorField.set({
                  open: true
                });
                return;
              }
              const value = field.value;
              values[structure[key]] = value === undefined ? '' : value;
            }
            let entries = table.entries;
            if (selectedItem.id) {
              const index = entries.findIndex(item => item.id === table.selectedItem?.id);
              const item = entries.find(item => item.id === table.selectedItem?.id);
              values.id = table.selectedItem?.id;
              entries[index] = {
                ...item,
                ...values
              };
            } else entries = [...table.entries, values];
            if (conditionalField) {
              const field = form.getField(conditionalField);
              field.clear();
              field.set({
                opened: false
              });
            }
            table.set({
              entries
            });
            table.triggerEvent();
            table.triggerEvent("value.change");
          };
          exports.copyToTable = copyToTable;
        }
      });

      /***************************************************
      INTERNAL MODULE: ./manager/form/action-manager/fetch
      ***************************************************/

      ims.set('./manager/form/action-manager/fetch', {
        hash: 3542475031,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.toggleFlagProductionInversion = exports.onSelectFetch = exports.onButtonGroupFetch = exports.fetchData = exports.fetch = void 0;
          var _api = require("sgs-workflow/api");
          const api = new _api.Api();
          const cache = {};
          const fetch = async ({
            data,
            required,
            method,
            url
          }) => {
            try {
              const missingFields = [];
              required?.forEach(field => {
                if (!data?.hasOwnProperty(field)) missingFields.push(field);
              });
              if (missingFields.length) throw `MISSING_${missingFields.join("_")}_VALUES`;
              const dynamicUrl = url.replace(/:([a-zA-Z]+)/g, (_, key) => {
                if (key in data) return encodeURIComponent(data[key]);
                throw `MISSING_${key}_VALUE_TO_PROCESS_URL_AT:${url}`;
              });
              if (cache[dynamicUrl]) {
                return cache[dynamicUrl];
              }
              const response = await api[method](dynamicUrl, data);
              if (!response.status) throw response.error;
              cache[dynamicUrl] = response;
              return response;
            } catch (error) {
              console.error("Error httpCall: ", error);
              return {
                status: false,
                error
              };
            }
          };
          exports.fetch = fetch;
          const fetchData = (ActionManager, specs) => {
            try {
              if (!specs.settings.action) throw "ACTION_REQUIRED";
              const callback = ActionManager[specs.settings.action];
              if (!callback) console.error("url to call not found");
              callback(specs);
            } catch (error) {
              console.error(error);
              return {
                status: false,
                error
              };
            }
          };
          exports.fetchData = fetchData;
          const onSelectFetch = async ({
            parent,
            ActionManager
          }, params) => {
            if (!params) return;
            const {
              dependency,
              field,
              form
            } = params;
            const productionModal = form.getField('productionModal');
            try {
              if (!dependency.value) {
                field.set({
                  value: ''
                });
                field.disabled = true;
                return;
              }
              parent.fetching = true;
              form.parent.fetching = true;
              field.fetching = true;
              let parentDependency;
              if (dependency.specs.dependentOn && dependency.specs.dependentOn.length) {
                const parentFieldName = dependency.specs.dependentOn[0].field;
                parentDependency = form.getField(parentFieldName);
              }
              let url = `form/:id/selects/:select/:dependencyId?parentId=:parentId`;
              const params = {
                url,
                method: 'get',
                data: {
                  id: form.settings.processId,
                  select: field.name,
                  dependencyId: dependency.value,
                  parentId: null
                },
                required: ['id', 'select', 'dependencyId']
              };
              if (parentDependency?.value) params.data.parentId = parentDependency?.value;
              const response = await fetch(params);
              if (!response.status) throw response.error;
              const options = response.data.options;
              field.set({
                options
              });
              if (productionModal.open && ActionManager.flagProductionInversion) field.set({
                value: response?.data?.value || ''
              });
              field.disabled = false;
              field.triggerEvent('value.change');
              parent.fetching = false;
              form.parent.fetching = false;
              return params;
            } catch (error) {
              console.error('ERROR GETTING OPTIONS', error);
              return {
                status: false,
                error
              };
            } finally {
              field.fetching = false;
            }
          };
          exports.onSelectFetch = onSelectFetch;
          const onButtonGroupFetch = async (ActionManager, {
            dependency,
            field,
            form
          }) => {
            if (!dependency.value) return;
            const url = "form/:id/selects/:select/:dependencyId";
            const params = {
              url,
              method: "get",
              data: {
                id: form.settings.processId,
                select: field.name,
                dependencyId: dependency.value
              },
              required: ["id", "select", "dependencyId"]
            };
            const response = await ActionManager.fetch(params);
            if (!response.status) return;
            const options = response.data.options;
            field.set({
              options
            });
          };
          exports.onButtonGroupFetch = onButtonGroupFetch;
          const toggleFlagProductionInversion = async (ActionManager, {
            value,
            form
          }) => {
            ActionManager.flagProductionInversion = value;
            form.flagProductionInversion = value;
          };
          exports.toggleFlagProductionInversion = toggleFlagProductionInversion;
        }
      });

      /******************************************************
      INTERNAL MODULE: ./manager/form/action-manager/find-map
      ******************************************************/

      ims.set('./manager/form/action-manager/find-map', {
        hash: 2829023928,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.findMapByKeyRecursive = findMapByKeyRecursive;
          function findMapByKeyRecursive(keyToFind, outerMap) {
            function searchInMap(map) {
              if (map.has(keyToFind)) return map.get(keyToFind);
              for (const value of map.values()) {
                if (value && value.fields instanceof Map) {
                  const result = searchInMap(value.fields);
                  if (result) return result;
                }
              }
              return undefined;
            }
            return searchInMap(outerMap.fields);
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./manager/form/action-manager/index
      ***************************************************/

      ims.set('./manager/form/action-manager/index', {
        hash: 3725575539,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActionManagerClass = exports.ActionManager = void 0;
          var _afa = require("./afa");
          var _atm = require("./atm");
          var _copy = require("./copy");
          var _fetch = require("./fetch");
          var _items = require("./items");
          var _prod = require("./prod");
          var _searchers = require("./searchers");
          var _select = require("./select");
          var _selectSeal = require("./select-seal");
          var _setters = require("./setters");
          var _table = require("./table");
          var _traffict = require("./traffict");
          var _utils = require("./utils");
          class ActionManagerClass {
            flagProductionInversion = false;
            flagSelectItemJView = true;
            cache = {};
            fetch = params => (0, _fetch.fetch)(params);
            fetchData = params => (0, _fetch.fetchData)(this, params);
            onButtonGroupFetch = params => (0, _fetch.onButtonGroupFetch)(this, params);
            onSearch = params => (0, _searchers.onSearch)(params);
            setItems = params => (0, _items.setItems)(params);
            setItemsMaterial = params => (0, _items.setItemsMaterial)(params);
            getChildsValues = params => (0, _select.getChildsValues)(params);
            hidde = params => (0, _utils.hidde)(params);
            onSelectWidthHeight = params => (0, _select.onSelectWidthHeight)(this, params);
            onSelectSeal = params => (0, _selectSeal.onSelectSeal)(this, params);
            handleMissingParameter = params => (0, _selectSeal.handleMissingParameter)(this, params);
            resetRelatedFields = params => (0, _selectSeal.resetRelatedFields)(params);
            setRelatedFieldValues = params => (0, _selectSeal.setRelatedFieldValues)(params);
            setFieldValues = params => (0, _selectSeal.setFieldValues)(this, params);
            onSimulate = ({
              form,
              event
            }) => form.triggerEvent(event);
            triggerEvent = ({
              form,
              event,
              to
            }) => {
              const field = form.getField(to);
              field.triggerEvent(event);
            };
            togglePropertiesValue = params => (0, _setters.togglePropertiesValue)(params);
            copyValue = params => (0, _copy.copyValue)(params);
            copyValueFromThird = params => (0, _copy.copyValueFromThird)(params);
            totalizerAFA = params => (0, _afa.totalizerAFA)(params);
            prevValues = params => (0, _setters.prevValues)(params);
            clear = params => (0, _utils.clear)(params);
            copyToTable = params => (0, _copy.copyToTable)(params);
            deleteItemInJView = params => (0, _table.deleteItemInJView)(this, params);
            duplicateItemJView = params => (0, _table.duplicateItemJView)(params);
            selectItemJView = params => (0, _table.selectItemJView)(params, this);
            setValueField = params => (0, _setters.setValueField)(params);
            setValueFields = params => (0, _setters.setValueFields)(this, params);
            onSimulateAFA = params => (0, _afa.onSimulateAFA)(params);
            selectedDelete = params => (0, _utils.selectedDelete)(params);
            closeFormModal = params => (0, _utils.closeFormModal)(params);
            getDerivationUsers = params => (0, _afa.getDerivationUsers)(params);
            setPrevValues = params => (0, _setters.setPrevValues)(params);
            searchTables = params => (0, _searchers.searchTables)(params);
            setClear = params => (0, _utils.setClear)(params);
            acceptProductionModal = params => (0, _afa.acceptProductionModal)(this, params);
            dependValueField = params => (0, _utils.dependValueField)(this, params);
            acceptAuthorTitle = params => (0, _atm.acceptAuthorTitle)(params);
            setFromTable = (parent, params) => (0, _atm.setFromTable)(parent, params);
            separateItemsProperty = _items.separateItemsProperty;
            setProductType = _atm.setProductType;
            setFieldArticle = _atm.setFieldArticle;
            setItemsProd = (parent, params) => (0, _prod.setItemsProd)(parent, params, this);
            listenSelectedItem = (parent, params) => (0, _prod.listenSelectedItem)(parent, params, this);
            toggleFlagProductionInversion = params => (0, _fetch.toggleFlagProductionInversion)(this, params);
            toggleFlagSelectItemJView = params => (0, _afa.toggleFlagSelectItemJView)(this, params);
            onSelectFetch = (parent, params) => {
              return (0, _fetch.onSelectFetch)({
                parent,
                ActionManager: this
              }, params);
            };
            getParametersTraffic = (parent, params) => (0, _traffict.getParametersTraffic)(parent, params);
            validateArticles = params => (0, _atm.validateArticles)(params);
            listenNeededInWarehouse = _prod.listenNeededInWarehouse;
            removeAllFiles = _prod.removeAllFiles;
            selectedItemAfa = (params, parent) => (0, _afa.selectedItemAfa)(params, this, parent);
            eventField = _utils.eventField;
          }
          exports.ActionManagerClass = ActionManagerClass;
          const ActionManager = exports.ActionManager = new ActionManagerClass();
        }
      });

      /***************************************************
      INTERNAL MODULE: ./manager/form/action-manager/items
      ***************************************************/

      ims.set('./manager/form/action-manager/items', {
        hash: 2964449270,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.setItemsMaterial = exports.setItems = exports.separateItemsProperty = void 0;
          var _uuid = require("uuid");
          var _findMap = require("./find-map");
          var _api = require("sgs-workflow/api");
          var _utils = require("@bgroup/helpers/utils");
          const COMPONENTS_PACKS = {
            Fasículo: "Fasículo",
            Gadgets: "Gadgets",
            CD: "CD",
            "CD-ROM": "CD-ROM",
            Libro: "Libro",
            Ficha: "Ficha",
            DVD: "DVD",
            Producto: "Producto"
          };
          const TIPOS_ARTICULOS = {
            1: "AnalisisDeFactibilidad",
            2: "AltaDeMaterial",
            3: "MaterialDeSAP",
            4: "Componente",
            5: "TituloNuevo",
            6: "Producto",
            7: "MaterialPromocional",
            8: "AMAntiguoRegenerado"
          };
          const setItems = async params => {
            const {
              dependency,
              form,
              to
            } = params;
            const fields = (0, _findMap.findMapByKeyRecursive)(to, form);
            if (!fields) return;
            const selected = fields.selected[0];
            const bookData = (0, _findMap.findMapByKeyRecursive)("bookData", form);
            const infoBook = (0, _findMap.findMapByKeyRecursive)("infoBook", form);
            const reprintData = (0, _findMap.findMapByKeyRecursive)("reprintData", form);
            reprintData.fields.get("copies").set({
              value: selected.ejemplaresEq
            });
            infoBook.fields.get("tituloBook").set({
              value: selected.titulo
            });
            bookData.set({
              opened: true
            });
            dependency.set({
              entries: fields.selected,
              total: fields.total,
              selected: fields.selected[0],
              rows: fields.selected.length
            });
            fields.clear();
          };
          exports.setItems = setItems;
          const setItemsMaterial = async params => {
            const {
              dependency,
              form,
              to,
              buttonToDisabled,
              articlesTypes,
              componentsTypes
            } = params;
            const fields = form.getField(to);
            await fields.isReady;
            const prevCodigoMaterialField = form.getField("prevCodigoMaterial");
            const prevCodigoMdmField = form.getField("prevCodigoMdm");
            const product = {
              titulo: "",
              tipoProducto: "Producto",
              isbn: "product",
              id: "product",
              ignore: true,
              idTipoArticulo: 6,
              prevCodigoMaterial: false,
              prevCodigoMdm: false
            };
            const selected = fields.selected.map(item => {
              return {
                ...item,
                tipoProducto: item.ACTIVOINACTIVO2 === "I" || !item.tipoProducto ? "Libro" : item.tipoProducto,
                isSap: !item.idAnalisisFactibilidad,
                id: (0, _uuid.v4)(),
                selected: !dependency.entries.filter(item => item?.selected)?.length // solo el primer articulo sera el seleccionado, al buscar mas y seleccionar mas el primer articulo seleccionado se mantiene como el seleccionado
              };
            });
            const select = selected[0];
            const hardware = form.getField("hardware");
            const newTitleCheck = form.getField("newTitle");
            const newTitle = form.getField("newTitleValue");
            const newTitleValue = newTitle.value;
            let newItems = Array.from(hardware.fields.values()).filter(field => field.checked).map(item => {
              return {
                titulo: item.label,
                tipoProducto: item.label,
                isbn: (0, _uuid.v4)(),
                id: (0, _uuid.v4)(),
                idComponente: item.specs.idComponente,
                ignore: true,
                idTipoProducto: item.specs.idTipoProducto,
                isSap: false,
                isComponent: true
              };
            });
            if (newTitleValue) {
              newItems = newItems.concat([{
                titulo: newTitleValue,
                isNewTitle: true,
                ignore: true,
                tipoProducto: "Libro",
                isbn: (0, _uuid.v4)(),
                id: (0, _uuid.v4)(),
                codigoMaterial: "",
                codigoMaterialMdm: "",
                idTituloAFacti: null,
                idTipoProducto: 0,
                isSap: false,
                isComponent: true,
                prevCodigoMaterial: false,
                prevCodigoMdm: false
              }]);
            }
            let entries = [];
            const isPack = !select?.esProdDigital && select?.pack && !Array.from(hardware.fields.values()).some(field => field.checked) && !newTitleValue;
            if (isPack) {
              const api = new _api.Api();
              const query = _utils.Utils.convertObjectToQuery({
                where: {
                  codigoMaterial: select.codigoMaterial
                }
              });
              const response = await api.get(`titles/articles/sap/${query}`);
              const data = response.data;
              entries = data.sort((a, b) => {
                if (a.tipoComponente === "Producto" && b.tipoComponente !== "Producto") {
                  return -1;
                }
                if (a.tipoComponente !== "Producto" && b.tipoComponente === "Producto") {
                  return 1;
                }
                return 0;
              }).map(item => {
                const isProduct = item.tipoComponente === "Producto";
                const id = isProduct ? item.id || "product" : (0, _uuid.v4)();
                return {
                  id: id,
                  selected: isProduct ? true : false,
                  tipoProducto: item.tipoComponente,
                  codigoMaterial: item.codigoMaterialArt,
                  codigoMaterialMdm: item.codigoMaterialMdmArt,
                  idTituloAFacti: null,
                  idComponente: item.idComponente,
                  idTipoArticulo: isProduct ? 6 : 3,
                  titulo: item.titulo,
                  esProdDigitalAfa: 0,
                  prevCodigoMaterial: item.codigoMaterialArt ? true : false,
                  prevCodigoMdm: item.codigoMaterialMdmArt ? true : false
                };
              });
              const tipoProducto = form.getField("productType");
              setTimeout(() => {
                tipoProducto.disabled = true;
                tipoProducto.set({
                  value: 11
                });
              }, 500);
            } else {
              if (select && !select?.esProdDigital) {
                if (select.cdDevCantidad && select.cdDvd) {
                  newItems = newItems.concat([{
                    titulo: "CD",
                    ignore: true,
                    tipoProducto: "CD",
                    isbn: (0, _uuid.v4)(),
                    id: (0, _uuid.v4)(),
                    codigoMaterial: "",
                    codigoMaterialMdm: "",
                    idTituloAFacti: null,
                    idComponente: 3,
                    isSap: false,
                    prevCodigoMaterial: false,
                    prevCodigoMdm: false
                  }]);
                }
                if (select.fichasCantidad && select.fichas) {
                  newItems = newItems.concat([{
                    titulo: "Ficha",
                    ignore: true,
                    tipoProducto: "Ficha",
                    isbn: (0, _uuid.v4)(),
                    id: (0, _uuid.v4)(),
                    codigoMaterial: "",
                    codigoMaterialMdm: "",
                    idTituloAFacti: null,
                    idComponente: 6,
                    isSap: false,
                    prevCodigoMaterial: false,
                    prevCodigoMdm: false
                  }]);
                }
              }
              entries = dependency.entries.concat(selected).concat(newItems);
              product.titulo = entries.filter(item => item.idTipoArticulo !== 6).map(item => item.titulo).join(" + ");
              if (!entries.some(item => item.idTipoArticulo === 6) && entries.length > 1) {
                entries = [product].concat(entries);
              } else if (entries.length > 1) entries[0].titulo = product.titulo;
              // Save the father id bc i want to die
              if (entries.length > 1) {
                entries = entries.map(entry => {
                  let idTipoArticulo;
                  const isAFA = !!entry?.idAnalisisFactibilidad;
                  const isNewTitle = !!entry.isNewTitle;
                  const isSap = entry?.isSap && !entry?.idAnalisisFactibilidad;
                  const isComponent = !entry?.idAnalisisFactibilidad && !isNewTitle && !isSap;
                  if (isAFA) idTipoArticulo = articlesTypes.afa;else if (isSap) idTipoArticulo = articlesTypes.sap;else if (isComponent) idTipoArticulo = articlesTypes.component;else if (isNewTitle) idTipoArticulo = articlesTypes.newTitle;
                  entry.idTipoArticulo = idTipoArticulo;
                  entry.idTituloAFacti = entry.idTitulo || null;
                  if (isAFA || isSap || isNewTitle) entry.idComponente = componentsTypes.book;
                  entry.esProdDigitalAfa = 0;
                  return entry;
                });
              }
              let idTipoArticulo;
              const isAFA = !!fields.selected[0]?.idAnalisisFactibilidad;
              const isNewTitle = !!newTitleValue;
              const isProduct = entries.length > 1 || !!dependency.entries.length;
              const isSap = !fields.selected[0]?.idAnalisisFactibilidad && !entries[0].idComponente && !isProduct && !isNewTitle;
              const isComponent = !fields.selected[0]?.idAnalisisFactibilidad && !newTitleValue && !isSap && entries[0].idComponente && !isProduct;
              if (isAFA) idTipoArticulo = articlesTypes.afa;else if (isSap) idTipoArticulo = articlesTypes.sap;else if (isComponent) idTipoArticulo = articlesTypes.component;else if (isNewTitle) idTipoArticulo = articlesTypes.newTitle;else if (isProduct) idTipoArticulo = articlesTypes.product;
              entries[0].idTipoArticulo = idTipoArticulo;
              entries[0].esProdDigitalAfa = entries.length === 1 && fields.selected.length === 1 && !dependency.entries.length && !newTitleValue && !!fields.selected[0]?.idAnalisisFactibilidad && fields.selected[0].esProdDigital ? 1 : 0;
              if (isProduct) entries[0].idComponente = componentsTypes.product;else if (isAFA || isSap || isNewTitle) entries[0].idComponente = componentsTypes.book;
              entries[0].idTituloAFacti = entries[0].idTitulo || null;
            }
            const button = form.getField(buttonToDisabled);
            const isDigital = fields.selected.some(item => !!item.esProdDigital);
            entries = isDigital ? selected : entries;
            entries = entries.map((item, index) => {
              item.prevCodigoMaterial = item.codigoMaterial ? true : false;
              item.prevCodigoMdm = item.codigoMaterialMdm ? true : false;
              if (index === 0) {
                if (prevCodigoMaterialField) prevCodigoMaterialField.set({
                  value: item.prevCodigoMaterial
                });
                if (prevCodigoMdmField) prevCodigoMdmField.set({
                  value: item.prevCodigoMdm
                });
                return item;
              }
              if (dependency.specs.entries && dependency.specs.entries?.length && item.id === dependency.specs.entries[0].id) item.id = (0, _uuid.v4)();
              return item;
            });
            if (button) button.disabled = isDigital;
            dependency.set({
              entries,
              total: fields.total,
              selected: fields.selected[0],
              rows: entries.length
            });
            dependency.triggerEvent("value.change");
            dependency.triggerEvent("value.change.table");
            dependency.triggerEvent("change.items");
            fields.clear();
            hardware.clear();
            newTitle.clear();
            newTitleCheck.clear();
            newTitle.disabled = true;
          };
          exports.setItemsMaterial = setItemsMaterial;
          const separateItemsProperty = ({
            dependency: table,
            settings,
            field: to,
            ...props
          }) => {
            const entries = table.entries;
            if (!settings.separator) throw `Separator is not defined for callback separateItemsProperty in: ${table.name}`;
            if (!settings.property) throw `Property is not defined for callback separateItemsProperty in: ${table.name}`;
            let value = "";
            entries.forEach(element => {
              let elementValue = element[settings.property];
              // TODO: For a while we are using this bc the SP isnt working correctly, isnt returning the tipoProducto proerpty to AFA titles
              if (!elementValue && elementValue !== 0) {
                elementValue = " ";
              }
              elementValue = String(elementValue) || " ";
              let firstLetter = elementValue.substr(0, 1);
              let rest = elementValue.substr(1, elementValue.length);
              firstLetter = firstLetter.toUpperCase();
              elementValue = `${firstLetter}${rest.toLowerCase()}`;
              if (!value) value = elementValue;else value = `${value}${settings.separator}${elementValue}`;
            });
            to.set({
              value: value.trim()
            });
          };
          exports.separateItemsProperty = separateItemsProperty;
        }
      });

      /**************************************************
      INTERNAL MODULE: ./manager/form/action-manager/prod
      **************************************************/

      ims.set('./manager/form/action-manager/prod', {
        hash: 1197743497,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.validateDates = exports.setItemsProd = exports.removeAllFiles = exports.listenSelectedItem = exports.listenNeededInWarehouse = void 0;
          var _utils = require("@bgroup/helpers/utils");
          var _api = require("sgs-workflow/api");
          var _uuid = require("uuid");
          var _dayjs = require("dayjs");
          const api = new _api.Api();
          const checks = ['dieCuttingPages', 'otherUnitsCostDetail', 'puntillado', 'sobrecubierta', 'sobrecubierta', "faja", 'perforado', 'retractilado', 'tieneSolapa'];
          const checksGraphicCost = ['dieCuttingPages', 'otherUnitsCostDetail', 'puntillado', 'sobrecubierta', 'sobrecubierta', "faja", 'perforado', 'retractilado', 'dottedPagesValue', 'otherUnitsCostDetailNumber', 'otherUnitsCostDetailValue', 'dieCuttingPagesValue', 'sale-type'];
          // const checksValues = ['dottedPagesValue', 'otherUnitsCostDetailNumber', 'otherUnitsCostDetailValue', 'dieCuttingPagesValue']
          const defaultInteriorPaperRepeater = [{
            "id": "d31de27e-dc18-4fe8-ac11-2e99a2b28cab",
            "idTipoPapel": "",
            "idGramaje": "",
            "idColor": "",
            "paginas": 0
          }];
          const checksValues = {
            dieCuttingPages: ['dieCuttingPagesValue'],
            otherUnitsCostDetail: ['otherUnitsCostDetailValue', 'otherUnitsCostDetailNumber'],
            puntillado: ['dottedPagesValue']
          };
          const getInfoSap = async (params, propertiesFromSp, inversionProduccion, formatOptions) => {
            const {
              codigoMaterial,
              idInstancia,
              claveTipoTitulo,
              idTitulo
            } = params;
            if (!codigoMaterial) return;
            const query = _utils.Utils.convertObjectToQuery({
              where: {
                codigoMaterial,
                proviene: idInstancia ? "AFA" : "SAP",
                claveTipoTitulo: claveTipoTitulo || "RENO",
                idTitulo: idTitulo || null
              }
            });
            const url = `titles/production/info${query}`;
            const response = await api.get(url);
            if (!response.status) return;
            const item = Object.assign(params, {});
            for (const prop in propertiesFromSp) {
              const fieldProp = propertiesFromSp[prop];
              item[fieldProp] = response.data[prop];
            }
            ;
            const isFormatInOptions = formatOptions.some(option => option.value === response.data.idFormato);
            if (isFormatInOptions || response.data['sale-type'] !== 1) {
              for (const prop in inversionProduccion) {
                const fieldProp = inversionProduccion[prop];
                item[fieldProp] = prop === "interiorPaperRepeater" ? JSON.parse(response.data[prop]).length ? JSON.parse(response.data[prop]) : defaultInteriorPaperRepeater : response.data[prop];
              }
              ;
            } else {
              for (const prop in inversionProduccion) {
                const fieldProp = inversionProduccion[prop];
                item[fieldProp] = prop === "interiorPaperRepeater" ? defaultInteriorPaperRepeater : '';
                if (checks.includes(fieldProp)) item[fieldProp] = false;
                if (checksGraphicCost.includes(fieldProp)) {
                  item[fieldProp] = response.data[prop];
                }
              }
              ;
            }
            return item;
          };
          const setItemsProd = async (parent, params, ActionManager) => {
            const {
              to,
              from,
              form,
              property,
              propertyToSet,
              propertySelectedTable,
              propertiesToAdd,
              propertiesFromSp,
              callbacksSelect,
              callbacks,
              inversionProduccion
            } = params;
            const field = form.getField(to);
            const fromField = form.getField(from);
            const formatOptions = form.getField("idFormato").options;
            if (!field || !fromField) return;
            parent.fetching = true;
            const key = property ?? "value";
            const toSet = propertyToSet || key;
            const selected = fromField[key];
            let newEntries = [];
            let requests = [];
            for (const item of selected) {
              item.inversionProduccion = 0;
              if (!item.pack) {
                for (const param in propertiesToAdd) {
                  item[param] = !item[param] ? propertiesToAdd[param] : item[param];
                }
                requests.push(getInfoSap(item, propertiesFromSp, inversionProduccion, formatOptions).then(newItem => {
                  newEntries.push({
                    ...item,
                    ...newItem,
                    productions: [item]
                  });
                }));
              } else {
                const api = new _api.Api();
                const query = _utils.Utils.convertObjectToQuery({
                  where: {
                    codigoMaterial: item.codigoMaterial
                  }
                });
                const response = await api.get(`titles/production/pack/${query}`);
                const data = response.data;
                if (data?.length) {
                  const articles = response.data.filter(item => item.tipoProducto !== "Producto");
                  for (const article of articles) {
                    for (const param in propertiesToAdd) {
                      article[param] = !article[param] ? propertiesToAdd[param] : article[param];
                    }
                    delete propertiesFromSp.codigoMaterialMdm;
                    requests.push(getInfoSap(article, propertiesFromSp, inversionProduccion, formatOptions).then(newItem => {
                      newEntries.push({
                        ...item,
                        ...article,
                        ...newItem,
                        id: (0, _uuid.v4)(),
                        articles: data,
                        productions: [item],
                        codigoMaterialPack: item.codigoMaterial,
                        idArticuloAltaMaterial: article.idArticulo,
                        idArticuloProd: (0, _uuid.v4)()
                      });
                    }));
                  }
                } else {
                  for (const param in propertiesToAdd) {
                    item[param] = !item[param] ? propertiesToAdd[param] : item[param];
                  }
                  requests.push(getInfoSap(item, propertiesFromSp, inversionProduccion, formatOptions).then(newItem => {
                    newEntries.push({
                      ...item,
                      ...newItem,
                      productions: [item]
                    });
                  }));
                }
              }
            }
            await Promise.all(requests);
            newEntries = await getReferenceValue(newEntries);
            const items = field.entries.concat(newEntries);
            const values = {
              [toSet]: items
            };
            values[propertySelectedTable] = newEntries[0];
            field.set({
              ...values
            });
            // for (const item of items) {
            // 	parent.fetching = true;
            // 	for (let i = 0; i < callbacksSelect.length; i++) {
            // 		const callback = callbacksSelect[i];
            // 		parent.fetching = true;
            // 		// Introduce a 800ms delay before executing the second callback
            // 		if (i === 1) {
            // 			form.triggerEvent("calculate.formulas.production")
            // 			await new Promise((resolve) => setTimeout(resolve, 800));
            // 		}
            // 		parent.fetching = true;
            // 		await ActionManager[callback.callback]({ form, dependency: field, id: item.id, item, ...callback });
            // 		parent.fetching = true;
            // 	}
            // };
            parent.fetching = true;
            for (let i = 0; i < callbacks.length; i++) {
              const callback = callbacks[i];
              await ActionManager[callback.callback]({
                form,
                dependency: field,
                ...callback
              });
            }
            form.triggerEvent("calculate.formulas.production");
            field.triggerEvent("value.change");
            parent.fetching = false;
          };
          exports.setItemsProd = setItemsProd;
          const listenSelectedItem = async (parent, params, ActionManager) => {
            const {
              dependency,
              settings: {
                fieldsMapping,
                forTable,
                description,
                fieldsDisabledInNoveReed,
                callbacks
              },
              field,
              form
            } = params;
            const item = dependency.entries.find(item => dependency.selectedItem?.id === item.id);
            if (!item) {
              let articlesToSave = validateDates({
                entries: dependency.entries,
                form
              });
              articlesToSave = articlesToSave.map(item => ({
                ...item,
                productions: [item]
              }));
              dependency.entries = articlesToSave;
              return;
            }
            parent.fetching = true;
            for (const fieldName in fieldsMapping) {
              const mappingConfig = fieldsMapping[fieldName];
              let fieldValue;
              if (typeof mappingConfig === 'string') {
                fieldValue = item ? item[mappingConfig] : undefined;
                const targetField = form.getField(fieldName);
                if (targetField) {
                  targetField.set({
                    value: [null, undefined].includes(fieldValue) ? targetField.specs.value : fieldValue
                  });
                  if (['NOVE', 'REED'].includes(item.claveTipoTitulo)) {
                    if (fieldsDisabledInNoveReed.includes(fieldName)) {
                      targetField.disabled = true;
                    }
                  } else {
                    if (fieldsDisabledInNoveReed.includes(fieldName)) {
                      targetField.disabled = targetField.specs.disabled || false;
                    }
                  }
                  if (checks.includes(mappingConfig)) {
                    targetField.set({
                      checked: [null, undefined].includes(fieldValue) ? targetField.specs.checked : fieldValue
                    });
                    if (!fieldValue) {
                      const checkValues = checksValues[mappingConfig];
                      if (checkValues?.length) {
                        for (const checkValue of checkValues) {
                          const target = form.getField(checkValue);
                          target.disabled = true;
                        }
                      }
                    }
                  }
                  ;
                }
              } else if (Array.isArray(item[fieldName])) {
                const field = form.getField(fieldName);
                field.set({
                  value: item[fieldName]
                });
                if (['NOVE', 'REED'].includes(item.claveTipoTitulo)) {
                  if (fieldsDisabledInNoveReed.includes(fieldName)) {
                    field.disabled = true;
                  }
                } else {
                  if (fieldsDisabledInNoveReed.includes(fieldName)) {
                    field.disabled = field.specs.disabled || false;
                  }
                }
              } else {
                if (!item) continue;
                const field = form.getField(fieldName);
                Object.entries(mappingConfig).forEach(([prop]) => {
                  field.set({
                    [prop]: item[fieldName] ? item[fieldName][prop] : field.specs[prop]
                  });
                  if (['NOVE', 'REED'].includes(item.claveTipoTitulo)) {
                    if (fieldsDisabledInNoveReed.includes(fieldName)) {
                      field.disabled = true;
                    }
                  } else {
                    if (fieldsDisabledInNoveReed.includes(fieldName)) {
                      field.disabled = field.specs.disabled || false;
                    }
                  }
                });
              }
            }
            //	form.triggerEvent("calculate.formulas.production")
            const entriesTitles = [];
            if (item.pack && item.articles && Array.isArray(item.articles) && item.articles.length) {
              const articles = item.articles.sort((a, b) => {
                if (a.tipoProducto === 'Producto' && b.tipoProducto !== 'Producto') {
                  return -1;
                }
                if (a.tipoProducto !== 'Producto' && b.tipoProducto === 'Producto') {
                  return 1;
                }
                return 0;
              });
              for (const article of articles) {
                entriesTitles.push(article);
              }
            } else {
              const values = {};
              for (const fieldName in forTable.fields) {
                let fieldValue = item ? item[fieldName] : undefined;
                values[fieldName] = fieldValue;
              }
              entriesTitles.push(values);
            }
            let articlesToSave = validateDates({
              entries: dependency.entries,
              form
            });
            articlesToSave = articlesToSave.map(item => ({
              ...item,
              productions: [item]
            }));
            dependency.entries = articlesToSave;
            const table = form.getField(forTable.field);
            table.set({
              entries: entriesTitles.map(item => ({
                ...item,
                productions: [item]
              }))
            });
            const descriptionField = form.getField(description);
            if (!descriptionField.value) descriptionField.set({
              value: articlesToSave[0].titulo
            });
            for (const callback of callbacks) {
              ActionManager[callback.callback]({
                form,
                ...callback
              });
            }
            parent.fetching = false;
          };
          exports.listenSelectedItem = listenSelectedItem;
          const listenNeededInWarehouse = params => {
            const {
              dependency,
              field,
              settings: {
                multiplier
              },
              form
            } = params;
            const oldestDate = dependency.entries.map(item => new Date(item.neededInWarehouse)) // Convertimos el string a Date
            .filter(date => !isNaN(date)) // Filtramos solo las fechas válidas
            .sort((a, b) => a - b)[0]; // Ordenamos y obtenemos la más antigua
            field.set({
              value: oldestDate ? oldestDate.toISOString().split('T')[0] : ''
            });
          };
          exports.listenNeededInWarehouse = listenNeededInWarehouse;
          const removeAllFiles = params => {
            const {
              dependency,
              propertyFiles
            } = params;
            const propFiles = propertyFiles || 'titleFiles';
            for (const item of dependency.entries) {
              if (item[propFiles] && Array.isArray(item[propFiles]) && item[propFiles].length) {
                localStorage.setItem('removed_files', JSON.stringify(item[propFiles].map(item => item.fileId)));
              }
            }
            dependency.set({
              entries: []
            });
          };
          exports.removeAllFiles = removeAllFiles;
          const validateDates = ({
            form,
            entries
          }) => {
            const actualDate = (0, _dayjs.default)(form.getField('date-prod').value);
            const newEntries = entries.map(item => {
              // Validar si neededInWarehouse es inválido
              const neededInWarehouseInvalid = !item.neededInWarehouse ? true : (0, _dayjs.default)(item.neededInWarehouse).isSame(actualDate, 'day') || (0, _dayjs.default)(item.neededInWarehouse).isAfter(actualDate, 'day');
              // Validar si pdfToProduction es inválido
              const pdfToProductionInvalid = !item.pdfToProduction ? true : (0, _dayjs.default)(item.pdfToProduction).isSame(actualDate, 'day') || (0, _dayjs.default)(item.pdfToProduction).isAfter(actualDate, 'day');
              // Validar si neededInWarehouse es mayor o igual que pdfToProduction
              const lowerDatePdf = !item.pdfToProduction || !item.neededInWarehouse ? true : (0, _dayjs.default)(item.neededInWarehouse).isSame((0, _dayjs.default)(item.pdfToProduction), 'day') ? false : (0, _dayjs.default)(item.neededInWarehouse).isAfter((0, _dayjs.default)(item.pdfToProduction), 'day');
              return {
                ...item,
                neededInWarehouseInvalid: neededInWarehouseInvalid || null,
                pdfToProductionInvalid: pdfToProductionInvalid || null,
                lowerDatePdf: lowerDatePdf || null
              };
            });
            return newEntries;
          };
          exports.validateDates = validateDates;
          const getReferenceValue = async entries => {
            const keys = {
              Multiplicador: "indiceMValorReferencia",
              Ratio: "indiceRatioValorReferencia"
            };
            const query = {
              db: "sgs",
              tableName: "analisis_factibilidad.parametros",
              fields: ["clave_parametro", "valor_referencia"]
            };
            // Almacenamos todas las promesas de las consultas
            const requests = entries.map(async item => {
              const where = {
                clave_parametro: "in ('Multiplicador', 'Ratio')",
                clave_sello_un: item.sello
              };
              const url = `form/tables/14?query=${JSON.stringify(query)}&where=${JSON.stringify(where)}`;
              const response = await api.get(url);
              if (!response.status) return item;
              const data = response.data.entries;
              for (const parameter of data) {
                item[keys[parameter.clave_parametro]] = parameter.valor_referencia;
              }
              return item;
            });
            const output = await Promise.all(requests);
            return output;
          };
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./manager/form/action-manager/searchers
      *******************************************************/

      ims.set('./manager/form/action-manager/searchers', {
        hash: 3693192758,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.searchTables = exports.onSearch = void 0;
          var _api = require("sgs-workflow/api");
          var _uuid = require("uuid");
          var _utils = require("@bgroup/helpers/utils");
          const onSearch = async params => {
            const {
              dependency,
              form,
              to,
              wrapperTo
            } = params;
            const wrapperSet = form.getField(wrapperTo);
            const prevEntries = form.getField(params.prevEntries);
            const fields = form.getField(to);
            if (!fields) return;
            const api = new _api.Api();
            const values = {};
            for (const value in fields.values) {
              if (!!fields.values[value]) {
                const key = value === "codigoMaterialSearch" ? 'codigoMaterial' : value;
                values[key] = fields.values[value];
                if (typeof values[key] === 'string') values[key] = values[key].trim();
              }
            }
            if (!Object.keys(values).length) return;
            const where = {
              ...values
            };
            const query = _utils.Utils.convertObjectToQuery({
              where,
              field: dependency.name
            });
            wrapperSet.fields.forEach(field => {
              field.set({
                loading: true,
                disabled: true
              });
              field.disabled = true;
            });
            const response = await api.get(`titles/${query}`);
            if (!response.status) {
              wrapperSet.fields.forEach(field => {
                field.disabled = false;
                field.set({
                  loading: false,
                  disabled: false
                });
              });
              return;
            }
            const hasAfa = prevEntries.entries.some(entry => !!entry.idInstancia);
            let entries = response.data.entries;
            entries = entries.filter(item => {
              if (hasAfa && !!item.idInstancia) return false;else {
                const codigoMaterial = item.codigoMaterial ? item.codigoMaterial?.replace(/^0+/, '') : '';
                return !prevEntries.entries.some(entry => codigoMaterial === entry.codigoMaterial && item.titulo === entry.titulo);
              }
            });
            entries = entries.map(item => {
              return {
                ...item,
                id: (0, _uuid.v4)(),
                idArticuloProd: (0, _uuid.v4)(),
                codigoMaterial: item.codigoMaterial ? item.codigoMaterial?.replace(/^0+/, '') : ''
              };
            });
            dependency.set({
              entries,
              total: entries.length,
              rows: entries.length,
              selected: []
            });
            wrapperSet.fields.forEach(field => {
              field.disabled = false;
              field.set({
                loading: false,
                disabled: false
              });
            });
          };
          exports.onSearch = onSearch;
          const searchTables = async params => {
            const {
              form,
              endpoint,
              fields,
              toSet,
              fieldType,
              emptyValue,
              alreadyValue,
              alreadySet
            } = params;
            const values = {};
            fields.forEach(item => {
              const field = form.getField(item);
              if (!field) return;
              values[item] = [false, true, 1, 0].includes(field.value) ? field.value ? 1 : 0 : typeof field.value === "string" ? field.value?.trim() : field.value || null;
            });
            if (!Object.keys(values).length) return;
            const api = new _api.Api();
            const query = encodeURIComponent(JSON.stringify(values));
            const field = form.getField(toSet);
            field.set({
              loading: true
            });
            const response = await api.get(`${endpoint}?where=${query}`);
            ;
            if (!response.status) {
              field.set({
                loading: false
              });
              return;
            }
            if (fieldType === 'table') {
              const isValue = alreadyValue && field.value ? response.data.entries.find(item => field.value.map(entry => entry[alreadyValue]).includes(item[alreadyValue])) : false;
              let entries = response.data.entries.map(item => ({
                ...item,
                id: (0, _uuid.v4)()
              }));
              if (alreadySet) {
                const fieldSet = form.getField(alreadySet.field);
                const prevEntries = fieldSet.entries;
                if (prevEntries.length) {
                  entries = entries.filter(item => {
                    const isAFA = !!item.idTitulo;
                    const isPack = !!item.pack;
                    if (isPack) return !prevEntries.some(entry => !!entry.articles && entry.articles?.some(article => article?.codigoMaterial === item.codigoMaterial));else if (isAFA) return !prevEntries.some(entry => {
                      return entry.titulo === item.titulo && item.idTitulo === entry.idTitulo && !(!!entry.articles && entry.articles?.some(article => article?.codigoMaterial === item.codigoMaterial === entry.codigoMaterial));
                    });else return !prevEntries.some(entry => {
                      return entry.titulo === item.titulo && item.codigoMaterial === entry.codigoMaterial && !(!!entry.articles && entry.articles?.some(article => article?.codigoMaterial === item.codigoMaterial));
                    });
                  });
                }
              }
              field.set({
                entries,
                total: entries.total,
                rows: entries.total,
                loading: false,
                value: isValue ? field.value : null
              });
            } else {
              Object.entries(response.data).forEach(([key, value]) => {
                const field = form.getField(key);
                if (!field) return;
                const valueField = value ? value : ![undefined].includes(emptyValue) ? emptyValue : '';
                field.set({
                  value: valueField
                });
              });
            }
            field.set({
              loading: false
            });
            field.triggerEvent("change");
          };
          exports.searchTables = searchTables;
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./manager/form/action-manager/select-seal
      *********************************************************/

      ims.set('./manager/form/action-manager/select-seal', {
        hash: 2541481238,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.setRelatedFieldValues = exports.setFieldValues = exports.resetRelatedFields = exports.onSelectSeal = exports.handleMissingParameter = void 0;
          var _api = require("sgs-workflow/api");
          var _utils = require("@bgroup/helpers/utils");
          var _wrappers = require("sgs-workflow/wrappers");
          const cache = {
            parametros: {},
            sellos: {},
            varibleX: {}
          };
          const handleMissingParameter = async (ActionManager, {
            field,
            form,
            settings
          }) => {
            const traffic = ['puntoEquilibrioParam', 'coberturaDaParamCalculado'].concat(settings.divideInTwo).includes(field.name) ? 'red' : 'grey';
            field.set({
              condition: {
                ...field.condition,
                red: '',
                yellow: '',
                green: '',
                traffic
              },
              value: ''
            });
            const calculates = ['puntoEquilibrioParamCalculado', 'coberturaDaParamCalculado'];
            if (calculates.concat(settings.divideInTwo).includes(field.name)) {
              await ActionManager.resetRelatedFields({
                form,
                settings
              });
            }
          };
          exports.handleMissingParameter = handleMissingParameter;
          const setFieldValues = async (ActionManager, {
            form,
            field,
            parameter,
            settings
          }) => {
            const isPercent = !settings.notPercent.includes(parameter.claveParametro.toLowerCase());
            let value = isPercent ? parameter.valorReferencia * 100 : parameter.valorReferencia;
            const fixed = !isPercent ? 2 : 1;
            value = (settings.divideInTwo.includes(parameter.claveParametro) ? value * 2 : value).toFixed(fixed);
            if (value) value = Number(value);
            field.set({
              condition: {
                ...field.condition,
                red: parameter.valorRojo,
                yellow: parameter.valorAmarillo,
                green: parameter.valorVerde
              },
              value
            });
            if (settings.divideInTwo.some(item => item === parameter.claveParametro)) {
              await ActionManager.setRelatedFieldValues({
                form,
                parameter,
                settings
              });
            }
          };
          exports.setFieldValues = setFieldValues;
          const resetRelatedFields = ({
            form,
            settings
          }) => {
            ['puntoEquilibrioParamCalculado', 'coberturaDaParam', 'coberturaDaParamCalculado', 'puntoEquilibrioParam'].forEach(async key => {
              const field = form.getField(key);
              await field.isReady;
              field.set({
                condition: {
                  ...field.condition,
                  red: '',
                  yellow: '',
                  green: '',
                  traffic: 'red'
                },
                value: ''
              });
            });
          };
          exports.resetRelatedFields = resetRelatedFields;
          const setRelatedFieldValues = async ({
            form,
            parameter,
            settings
          }) => {
            const fieldDA = form.getField(settings.fieldsRelatives.CoberturaDAVentas);
            const fieldPtoQ = form.getField(settings.fieldsRelatives.ptoEQVentas);
            await fieldDA.isReady;
            await fieldPtoQ.isReady;
            const relatedField = parameter.claveParametro === settings.CoberturaDA ? fieldDA : fieldPtoQ;
            let value = parameter.valorReferencia * 100;
            relatedField.set({
              condition: {
                ...relatedField.condition,
                red: parameter.valorRojo,
                yellow: parameter.valorAmarillo,
                green: parameter.valorVerde
              },
              value
            });
          };
          exports.setRelatedFieldValues = setRelatedFieldValues;
          const onSelectSeal = (ActionManager, {
            dependency,
            form,
            settings
          }) => {
            const onChange = async () => {
              if (!dependency.value) {
                settings.fields.forEach(item => {
                  Object.values(item).forEach(async value => {
                    const currentField = form.getField(value);
                    if (!currentField) return;
                    await currentField.isReady;
                    ActionManager.handleMissingParameter({
                      field: currentField,
                      form,
                      settings
                    });
                  });
                });
                form.triggerEvent(settings.event);
                return;
              }
              const api = new _api.Api();
              const option = dependency.options.find(item => item.value === dependency.value);
              if (!option) return;
              const value = option.label;
              const query = _utils.Utils.convertObjectToQuery({
                field: dependency.name,
                where: {
                  claveSelloUn: value
                }
              });
              const querySellos = _utils.Utils.convertObjectToQuery({
                field: 'materialVtaUltAnio',
                where: {
                  id: dependency.value
                }
              });
              const isApplicable = value !== settings.notApplicable;
              try {
                form.fetching = true;
                let data = cache.parametros[dependency.value];
                if (!data) {
                  const response = await api.get(`form/tables/${form.processId}${query}`);
                  data = response.data.entries;
                  cache.parametros[dependency.value] = data;
                }
                if (isApplicable) {
                  let idUnSgs = cache.sellos[dependency.value];
                  if (!idUnSgs) {
                    const responseSellos = await api.get(`form/tables/${form.processId}${querySellos}`);
                    idUnSgs = responseSellos.data.entries[0].idUnSgs;
                    cache.sellos[dependency.value] = idUnSgs;
                  }
                  const queryVarX = _utils.Utils.convertObjectToQuery({
                    field: settings.rentabilidadAxPorcientoValorX,
                    where: {
                      claveParametro: 'rentabilidadAXPorcValorX',
                      claveSelloUn: idUnSgs
                    }
                  });
                  let dataVar = cache.varibleX[dependency.value];
                  if (!dataVar) {
                    const responseVarX = await api.get(`form/tables/${form.processId}${queryVarX}`);
                    dataVar = responseVarX?.data?.entries;
                    cache.varibleX[dependency.value] = dataVar;
                  }
                  if (!!dataVar?.length) {
                    let dataVarX = dataVar[0].valorReferencia;
                    if (dataVarX) {
                      const varX = form.getField(settings.rentabilidadAxPorcientoValorX);
                      varX.set({
                        value: dataVarX
                      });
                    }
                  }
                }
                const isBusinessUnit = isApplicable ? _wrappers.session.isSealInBusinessUnit({
                  denominacion: value
                }) : true;
                settings.fields.forEach(item => {
                  Object.entries(item).forEach(async ([key, value]) => {
                    const currentField = form.getField(value);
                    if (!currentField) return;
                    await currentField.isReady;
                    const parameter = data.find(item => item.claveParametro === (key === settings.yields.RentabilidadAXPorc ? settings.yields.Rentabilidad : key));
                    if (!parameter) {
                      await ActionManager.handleMissingParameter({
                        field: currentField,
                        form,
                        settings
                      });
                      return;
                    }
                    await ActionManager.setFieldValues({
                      form,
                      field: currentField,
                      parameter,
                      settings
                    });
                  });
                });
                form.triggerEvent(settings.eventListen);
                if (!isBusinessUnit) {
                  dependency.set(settings.warning);
                } else dependency.set({
                  icon: undefined
                });
              } catch (error) {
                console.error('Error fetching data:', error);
              } finally {
                form.fetching = false;
              }
            };
            onChange();
          };
          exports.onSelectSeal = onSelectSeal;
        }
      });

      /****************************************************
      INTERNAL MODULE: ./manager/form/action-manager/select
      ****************************************************/

      ims.set('./manager/form/action-manager/select', {
        hash: 2772634986,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.onSelectWidthHeight = exports.getChildsValues = void 0;
          var _entities = require("sgs-workflow/entities");
          const onSelectWidthHeight = (ActionManager, {
            dependency,
            field
          }) => {
            const onChange = async () => {
              if (!ActionManager.flagProductionInversion) return;
              const option = dependency.options.find(item => item.value === dependency.value);
              if (!option) return;
              let [width, height] = option.label.split("x");
              width = width.trim();
              height = height.trim();
              const widthNumber = Number(width.replace(",", "."));
              const heightNumber = Number(height.replace(",", "."));
              if (field.name === dependency.sizes.height) field.set({
                value: heightNumber
              });
              if (field.name === dependency.sizes.width) field.set({
                value: widthNumber
              });
            };
            dependency.on("change", onChange);
          };
          exports.onSelectWidthHeight = onSelectWidthHeight;
          const getChildsValues = async ({
            dependency,
            field: wrapper,
            form,
            settings
          }) => {
            if (!dependency?.value) return;
            const item = new _entities.FormItem();
            const response = await item.getChildsValues({
              id: form.settings.processId,
              name: wrapper.name,
              dependencyId: dependency.value
            });
            settings.target.forEach(element => {
              const fields = form.getField(element.name);
              const value = response.data[element.valueProperty];
              fields.set({
                [settings.property]: element.isBoolean ? !!value : value
              });
            });
          };
          exports.getChildsValues = getChildsValues;
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./manager/form/action-manager/setters
      *****************************************************/

      ims.set('./manager/form/action-manager/setters', {
        hash: 1060651723,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.togglePropertiesValue = exports.setValueFields = exports.setValueField = exports.setPrevValues = exports.prevValues = void 0;
          const setValueField = params => {
            const {
              form,
              property,
              to,
              value,
              notSet
            } = params;
            const field = form.getField(to);
            if (!field) return;
            if (['disabled'].includes(property)) {
              field[property] = value;
            }
            if (!notSet) field.set({
              [property]: value
            });else field[property] = value;
            field.triggerEvent("value.change");
          };
          exports.setValueField = setValueField;
          const setValueFields = (ActionManager, params) => {
            const {
              form,
              fields
            } = params;
            fields.forEach(field => {
              ActionManager.setValueField({
                form,
                ...field
              });
            });
          };
          exports.setValueFields = setValueFields;
          const prevValues = async params => {
            const {
              dependency,
              form
            } = params;
            await dependency.isReady;
            if (!dependency.fields) return;
            const fields = Array.from(dependency.fields.values());
            if (!dependency.value.length) {
              fields.forEach(item => {
                item.set({
                  value: 0
                });
              });
              return;
            }
            dependency.value.forEach(async input => {
              const field = fields.find(item => item.id === input.id);
              if (!field) return;
              await field.isReady;
              field.set({
                value: input.value
              });
            });
          };
          exports.prevValues = prevValues;
          const togglePropertiesValue = ({
            to,
            value,
            form,
            checked
          }) => {
            const field = form.getField(to);
            if (!field) return;
            const valuesToSet = checked ? value[1] : value[0];
            const propsToSet = {};
            valuesToSet.forEach(element => {
              const {
                property,
                value
              } = element;
              propsToSet[property] = value;
            });
            if (propsToSet.hasOwnProperty('disabled')) field.disabled = propsToSet?.disabled;
            field.set(propsToSet);
          };
          exports.togglePropertiesValue = togglePropertiesValue;
          const setPrevValues = async params => {
            const {
              form,
              isSaved,
              fields
            } = params;
            for (const to of fields) {
              const field = form.getField(to.field);
              if (!field) return;
              await field.isReady;
              if (!field?.prevValues) continue;
              const key = to.property ?? 'value';
              if (isSaved) {
                field.set({
                  prevValues: {
                    ...field.prevValues,
                    [key]: field[key]
                  }
                });
                continue;
              }
              if (field?.prevValues[key] === field[key]) continue;
              field.set({
                [key]: field?.prevValues[key]
              });
            }
          };
          exports.setPrevValues = setPrevValues;
        }
      });

      /***************************************************
      INTERNAL MODULE: ./manager/form/action-manager/table
      ***************************************************/

      ims.set('./manager/form/action-manager/table', {
        hash: 1570756618,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.arraysAreEqual = arraysAreEqual;
          exports.selectItemJView = exports.duplicateItemJView = exports.deleteItemInJView = void 0;
          var _uuid = require("uuid");
          const deleteItemInJView = (ActionManager, params) => {
            const {
              dependency,
              id,
              item,
              form,
              close,
              propertyFiles,
              callbacks
            } = params;
            const entries = dependency.entries.filter(item => item.id !== id);
            const values = {
              entries,
              total: entries.length,
              rows: entries.length
            };
            if (id === dependency.selectedItem?.id) {
              Object.keys(item).forEach(key => {
                const field = form.getField(key);
                if (!field) return;
                field.set({
                  value: ''
                });
              });
              ActionManager.setValueField({
                form,
                ...close
              });
              ActionManager.setClear({
                form,
                ...close
              });
              if (callbacks && Array.isArray(callbacks)) {
                for (const callback of callbacks) {
                  ActionManager[callback.callback]({
                    form,
                    ...callback
                  });
                }
              }
              values.selectedItem = null;
            }
            ;
            const propFiles = propertyFiles || 'titleFiles';
            if (item[propFiles] && Array.isArray(item[propFiles]) && item[propFiles].length) {
              localStorage.setItem('removed_files', JSON.stringify(item[propFiles].map(item => item.fileId)));
            }
            dependency.set({
              ...values
            });
          };
          exports.deleteItemInJView = deleteItemInJView;
          const duplicateItemJView = params => {
            const {
              dependency,
              item
            } = params;
            const newItem = {
              ...item,
              id: (0, _uuid.v4)()
            };
            if (params.ignore) params.ignore.forEach(prop => newItem[prop] = undefined);
            const entries = dependency.entries.concat([newItem]);
            dependency.set({
              entries,
              total: entries.length,
              rows: entries.length
            });
          };
          exports.duplicateItemJView = duplicateItemJView;
          const selectItemJView = async (params, ActionManager) => {
            const {
              item,
              form,
              dependency,
              isSetInputs,
              property,
              callbacksItem
            } = params;
            if (isSetInputs) {
              for (const [key, value] of Object.entries(item)) {
                const field = form.getField(key);
                if (!field) continue;
                await field.isReady;
                const valueIsADate = value instanceof Date;
                const isMultiValue = !!value && !Array.isArray(value) && typeof value === 'object' && !valueIsADate;
                if (isMultiValue) {
                  for (const [prop, valueObj] of Object.entries(value)) {
                    field.set({
                      [prop]: valueObj
                    });
                  }
                  continue;
                }
                field.set({
                  value
                });
                field.triggerEvent();
                form.triggerEvent('percent.field');
              }
              ;
              if (callbacksItem && Array.isArray(callbacksItem)) {
                for (const callback of callbacksItem) {
                  await ActionManager[callback.callback]({
                    form,
                    ...callback
                  });
                }
              }
            }
            dependency.set({
              [property ?? 'selectedItem']: item
            });
            dependency.triggerEvent('change');
          };
          exports.selectItemJView = selectItemJView;
          function deepEqual(obj1, obj2) {
            if (obj1 === obj2) return true;
            if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
              return false;
            }
            const keys1 = Object.keys(obj1);
            const keys2 = Object.keys(obj2);
            if (keys1.length !== keys2.length) {
              return false;
            }
            for (const key of keys1) {
              if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
                return false;
              }
            }
            return true;
          }
          function arraysAreEqual(arr1, arr2) {
            if (arr1.length !== arr2.length) {
              return false;
            }
            for (let i = 0; i < arr1.length; i++) {
              if (!deepEqual(arr1[i], arr2[i])) {
                return false;
              }
            }
            return true;
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./manager/form/action-manager/traffict
      ******************************************************/

      ims.set('./manager/form/action-manager/traffict', {
        hash: 849383077,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getParametersTraffic = getParametersTraffic;
          var _api = require("sgs-workflow/api");
          const api = new _api.Api();
          async function getParametersTraffic(parent, params) {
            const {
              dependency,
              settings,
              field,
              form
            } = params;
            if (!dependency.value) return;
            parent.fetching = true;
            form.fetching = true;
            const where = {
              ...settings.where,
              clave_sello_un: dependency.value
            };
            const url = `${settings.endpoint}?query=${JSON.stringify(settings.query)}&where=${JSON.stringify(where)}`;
            const response = await api.get(url);
            if (!response.status) return;
            const data = response.data.entries;
            for (const item of data) {
              const field = form.getField(item.clave_parametro);
              field.set({
                parameter: item.valor_referencia,
                condition: {
                  ...field.condition,
                  red: item.valor_rojo,
                  yellow: item.valor_amarillo,
                  green: item.valor_verde
                }
              });
            }
            ;
            parent.fetching = false;
            form.fetching = false;
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./manager/form/action-manager/utils
      ***************************************************/

      ims.set('./manager/form/action-manager/utils', {
        hash: 1792259860,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.setClear = exports.selectedDelete = exports.hidde = exports.eventField = exports.evaluations = exports.dependValueField = exports.closeFormModal = exports.clear = void 0;
          const hidde = ({
            dependency,
            value,
            checked
          }) => {
            const className = dependency.type === 'wrapper' ? dependency.className : dependency.specs.className;
            const bool = typeof value === 'object' ? checked : value;
            const cls = bool ? `${className} hidden` : className.replaceAll(/\bhidden\b/g, '').trim();
            dependency.set({
              className: cls
            });
            dependency.triggerEvent();
          };
          exports.hidde = hidde;
          const clear = params => {
            const {
              dependency: wrapper,
              form
            } = params;
            wrapper.fields.forEach(field => {
              field.set({
                value: '0,00'
              });
            });
            form.triggerEvent('reset');
          };
          exports.clear = clear;
          const selectedDelete = params => {
            const {
              item,
              dependency,
              key
            } = params;
            dependency.set({
              [key]: item
            });
          };
          exports.selectedDelete = selectedDelete;
          const closeFormModal = parent => {
            parent.displayRequestForm = {
              show: false,
              processId: 0
            };
            parent.reset();
            if (localStorage.getItem('added_files')) parent.rollback();
            localStorage.removeItem('added_files');
            localStorage.removeItem('removed_files');
          };
          exports.closeFormModal = closeFormModal;
          const setClear = params => {
            const {
              form,
              to
            } = params;
            const field = form.getField(to);
            if (!field) return;
            field.clear();
          };
          exports.setClear = setClear;
          const evaluations = exports.evaluations = {
            equal: (value, comparisonValue) => value == comparisonValue,
            lower: (value, comparisonValue) => value < comparisonValue,
            upper: (value, comparisonValue) => value > comparisonValue,
            between: (value, [min, max]) => {
              const numValue = Number(value);
              return numValue >= Number(min) && numValue <= Number(max);
            },
            different: (value, comparisonValue) => value != comparisonValue,
            hasValue: value => ![undefined, null, '', false].includes(value),
            empty: value => [undefined, null, ''].includes(value),
            lessOrEqual: (value, comparisonValue) => Number(value) <= Number(comparisonValue),
            greaterOrEqual: (value, comparisonValue) => Number(value) >= Number(comparisonValue),
            emptyArray: value => Array.isArray(value) && value.length === 0,
            theresAValueWith: (entries, comparisonValue, property) => {
              return entries.some(item => item[property] === comparisonValue);
            },
            lowerDate: (value, comparisonValue) => {
              const init = new Date(comparisonValue);
              const end = new Date(value);
              const date1 = new Date(init.getFullYear(), init.getMonth(), init.getDate());
              const date2 = new Date(end.getFullYear(), end.getMonth(), end.getDate());
              return date1 < date2;
            },
            equalInclude: (value, comparisonValue) => comparisonValue.includes(value)
          };
          const arrayTypes = ['theresAValueWith'];
          const dependValueField = async (ActionManager, params) => {
            const {
              form,
              dependency,
              settings: {
                values,
                callbacksFulfilled,
                callbacksFailed,
                validations,
                property
              }
            } = params;
            const newDependency = form.getField(dependency.name);
            await newDependency.isReady;
            let isFulfilled;
            if (!validations) isFulfilled = values.includes(newDependency.value);else for (const item of validations) {
              const field = form.getField(item.field);
              await field.isReady;
              const prop = item.property || 'value';
              let validation;
              let value;
              if (!!item.valueField) {
                const valueField = form.getField(item.valueField);
                await valueField.isReady;
                value = valueField.value;
              } else value = item.value;
              if (arrayTypes.includes(item.condition)) {
                validation = evaluations[item.condition](field[property], value, prop);
              } else {
                validation = evaluations[item.condition](field[prop], value);
              }
              if (validation) {
                isFulfilled = true;
                break;
              }
            }
            const callbacks = isFulfilled ? callbacksFulfilled : callbacksFailed;
            for (const item of callbacks) {
              const dependency = form.getField(item.dependency);
              if (dependency) await dependency.isReady;
              ActionManager[item.callback]({
                ...item,
                form,
                dependency
              });
            }
          };
          exports.dependValueField = dependValueField;
          const eventField = params => {
            let {
              form,
              event,
              field
            } = params;
            field = form.getField(field);
            field.triggerEvent(event || "change");
          };
          exports.eventField = eventField;
        }
      });

      /**************************************************
      INTERNAL MODULE: ./manager/form/condition-validator
      **************************************************/

      ims.set('./manager/form/condition-validator', {
        hash: 3238147054,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConditionValidator = void 0;
          var _wrappers = require("sgs-workflow/wrappers");
          class ConditionValidator {
            #parent;
            constructor(parent) {
              this.#parent = parent;
            }
            // Ejecuta las validaciones basadas en las condiciones del campo
            execute = ({
              field,
              fieldValue,
              config
            }) => {
              const conditions = config.conditions;
              // Si no es un array, validamos el item individual
              if (!Array.isArray(fieldValue)) {
                return this.#checkIndividualItem(fieldValue, conditions, config);
              }
              // Si el campo es requerido y está vacío, lanzamos error
              if (config.required && !field?.disabled && !fieldValue?.length) return {
                status: false,
                errors: [config.errorMessage]
              };
              const errors = [];
              // Validamos cada item dentro del array
              const theresSome = fieldValue.some(item => {
                const response = this.#checkBulkItem(item, conditions, config);
                const hasError = response.errors?.length !== 0;
                if (hasError) {
                  errors.push(response.errors);
                  return;
                }
              });
              // Si no hay ningún item válido, retornamos error
              if (!theresSome) return {
                status: false,
                errors: errors.flat()
              };
              return {
                status: true,
                errors: []
              };
            };
            // Valida cada item del array de valores
            #checkBulkItem = (item, conditions, config) => {
              const keys = Object.keys(conditions);
              let errors = [];
              const conditionChain = this.#evaluateConditions(item, conditions, config);
              if (conditionChain.errors.length) {
                errors = conditionChain.errors;
              }
              for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                const condition = conditions[key];
                const value = item[key];
                // Saltar si el item no contiene la clave a validar
                if (!item.hasOwnProperty(key)) continue;
                // Validar la condición
                const response = this.#checkCondition(condition, value);
                if (!response.status) {
                  const errorMessage = condition?.errorMessage || config.errorMessage;
                  if (errorMessage && !errors.length) errors.push(errorMessage);
                }
              }
              return {
                errors
              };
            };
            // Valida un solo ítem, evaluando las condiciones de manera recursiva
            #checkIndividualItem = (value, conditions, config) => {
              const conditionChain = this.#evaluateConditions(value, conditions, config);
              // Si la cadena de condiciones falla, retornamos el mensaje de error
              if (!conditionChain.status) {
                return {
                  status: false,
                  errors: conditionChain.errors
                };
              }
              return {
                status: true,
                errors: []
              };
            };
            // Lógica recursiva para evaluar el bloque "if-else"
            #evaluateConditions = (value, conditions, config) => {
              const {
                if: ifCondition,
                then,
                else: elseCondition
              } = conditions;
              // Verificar la condición "if"
              if (ifCondition && this.#checkLogicalCondition(ifCondition, value)) {
                if (then.if) {
                  return this.#evaluateConditions(value, then, config);
                }
                ;
                delete then.if;
                delete then.else;
                delete then.then;
                return this.#applyActions(then, value, config);
              }
              // Si no se cumple el "if", procesar el "else"
              if (elseCondition && elseCondition.if) {
                return this.#evaluateConditions(value, elseCondition, config);
              }
              // Si no hay más condiciones, aplicar el "else" final
              if (elseCondition && elseCondition.then) {
                return this.#applyActions(elseCondition.then, value, config);
              }
              return {
                status: true,
                errors: []
              };
            };
            // Aplica las acciones del bloque "then"
            #applyActions = (actions, item, config) => {
              const errors = [];
              Object.entries(actions).forEach(([fieldKey, action]) => {
                let itemValue;
                if (typeof item === "object" && !!item && item.hasOwnProperty(fieldKey)) {
                  itemValue = item[fieldKey];
                  const isRequiredAndDoesntHasValue = action.required && !itemValue && typeof itemValue !== 'boolean' && typeof itemValue !== 'number';
                  const isForceRequired = action.forceRequired;
                  if (isRequiredAndDoesntHasValue || isForceRequired) {
                    errors.push({
                      message: action.errorMessage || `Field ${fieldKey} is required.`,
                      order: action.order || config.order,
                      group: action.group || config.group,
                      subGroup: config.subGroup,
                      property: item[config.property]
                    });
                  }
                  if (!this.#checkCondition(action, itemValue).status) {
                    errors.push({
                      message: action.errorMessage || `Field ${fieldKey} is required.`,
                      order: action.order || config.order,
                      group: action.group || config.group,
                      subGroup: config.subGroup,
                      property: item[config.property]
                    });
                  }
                } else {
                  const field = this.#parent.getField(fieldKey);
                  let fieldConfig = Object.entries(this.#parent.currentMapping).find(([key, value]) => key === field.name || value.as === field.name);
                  if (!fieldConfig && !fieldConfig.length) return;
                  const mappingConfig = fieldConfig[1];
                  const isRequiredAndDoesntHasValue =
                  //action.required &&
                  !field.value && !field.disabled && typeof field.value !== 'boolean' && typeof field.value !== 'number';
                  const isForceRequired = action.forceRequired;
                  if (isRequiredAndDoesntHasValue || isForceRequired) {
                    errors.push({
                      message: action.errorMessage || `Field ${fieldKey} is required.`,
                      order: action.order || mappingConfig.order,
                      group: action.group || mappingConfig.group,
                      subGroup: config.subGroup
                    });
                  }
                  if (!this.#checkCondition(action, field.value).status) {
                    errors.push({
                      message: action.errorMessage || `Field ${fieldKey} is required.`,
                      order: action.order || mappingConfig.order,
                      group: action.group || mappingConfig.group,
                      subGroup: config.subGroup
                    });
                  }
                }
              });
              return {
                status: errors.length === 0,
                errors
              };
            };
            // Verifica una condición lógica
            #checkLogicalCondition = (condition, item) => {
              // Procesar "and" y "or"
              if (condition.or) {
                const okConditions = [];
                condition.or.forEach(cond => {
                  const internalConditionsOk = [];
                  Object.entries(cond).forEach(([key, value]) => {
                    let itemValue;
                    if (typeof item === "object" && !!item && item.hasOwnProperty(key)) {
                      itemValue = item[key];
                    } else {
                      const field = this.#parent.getField(key);
                      if (!field) {
                        console.error(`Field ${key} not found its conf is: ${value}`);
                        return;
                      }
                      itemValue = field.value;
                    }
                    const isConditionOk = this.#checkCondition(value, itemValue);
                    internalConditionsOk.push(isConditionOk.status);
                  });
                  okConditions.push(internalConditionsOk.every(ok => ok));
                });
                return okConditions.some(ok => ok);
              } else {
                const results = [];
                Object.entries(condition).forEach(([key, value]) => {
                  let itemValue;
                  if (typeof item === "object" && !!item && item.hasOwnProperty(key)) {
                    itemValue = item[key];
                  } else {
                    const field = this.#parent.getField(key);
                    if (!field) {
                      console.error(`Field ${key} not found its conf is: ${value}`);
                      return;
                    }
                    itemValue = field.value;
                  }
                  ;
                  const isConditionOk = this.#checkCondition(value, itemValue);
                  results.push(isConditionOk.status);
                });
                return results.every(ok => ok);
              }
            };
            // Valida la condición en base al valor
            #checkCondition = (condition, value) => {
              let found = false;
              const validations = ['eq', 'gt', 'gte', 'typeof', 'ne', 'isCharLengthGt'];
              if (!validations.some(validation => condition.hasOwnProperty(validation))) return {
                status: true
              };
              if (condition.eq !== undefined && condition.eq === value) {
                found = true;
              } else if (condition.eq && condition.eq !== value && typeof condition.eq === 'string' && condition.eq.includes('ref:')) {
                found = value === this.#getRef(condition.eq);
              }
              if (condition.ne !== undefined && condition.ne !== value) {
                found = true;
              } else if (condition.ne && condition.ne === value && typeof condition.ne === 'string' && condition.ne.includes('ref:')) {
                found = value !== this.#getRef(condition.ne);
              }
              if (condition.typeof && condition.typeof === typeof value) {
                found = true;
              }
              if (condition.hasOwnProperty('gt') && typeof value === 'number' && value > condition.gt) {
                found = true;
              }
              if (condition.hasOwnProperty('gte') && typeof value === 'number' && value >= condition.gte) {
                found = true;
              }
              ;
              if (condition.hasOwnProperty('isCharLengthGt') && typeof value === 'string' && value.length > condition.isCharLengthGt) {
                found = true;
              }
              if (found) return {
                status: true
              };
              return {
                status: false
              };
            };
            #getRef = value => {
              const property = value.split(':')[1];
              if (!property) return;
              const global = {
                userId: _wrappers.session.user.id
              };
              return global[property];
            };
          }
          exports.ConditionValidator = ConditionValidator;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./manager/form/form-manager
      *******************************************/

      ims.set('./manager/form/form-manager', {
        hash: 342193174,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _uuid = require("uuid");
          var _entities = require("sgs-workflow/entities");
          var _wrappers = require("sgs-workflow/wrappers");
          var _formModel = require("./form-model");
          var _api = require("@bgroup/http-suite/api");
          var _config = require("sgs-workflow/config");
          const api = new _api.Api(_config.default.params.filesServer);
          api.bearer(_wrappers.session.token);
          class FormManager extends _model.ReactiveModel {
            #form = new _entities.FormItem();
            get form() {
              return this.#form;
            }
            #instanciatedForm;
            get instanciatedForm() {
              return this.#instanciatedForm;
            }
            #displayRequestForm = {
              show: false,
              processId: 1
            };
            get displayRequestForm() {
              return this.#displayRequestForm;
            }
            set displayRequestForm(value) {
              this.#displayRequestForm = value;
              this.triggerEvent();
            }
            #data;
            get data() {
              return this.#data;
            }
            #parent;
            get manager() {
              return this.#parent;
            }
            #forms = [];
            get forms() {
              return this.#forms;
            }
            #feedbackMessage;
            get feedbackMessage() {
              return this.#feedbackMessage;
            }
            set feedbackMessage(value) {
              this.#feedbackMessage = value;
            }
            #currentFormId;
            constructor(parent) {
              super();
              this.#parent = parent;
            }
            load = async params => {
              try {
                const form = new _entities.FormItem();
                this.#parent.fetching = true;
                const response = await form.load(params);
                await form.isReady;
                if (!response.status) throw response.error;
                const formParsed = JSON.parse(form.data);
                const instanciatedForm = new _formModel.FormModel(formParsed, {
                  processId: params.processId,
                  userId: _wrappers.session.user.id,
                  taskId: formParsed.taskId
                }, this);
                const displayRequestForm = {
                  processId: params.processId,
                  show: true
                };
                this.#currentFormId = (0, _uuid.v4)();
                await instanciatedForm.isReady;
                this.#forms = this.#forms.concat([{
                  requestForm: displayRequestForm,
                  instanciatedForm,
                  data: formParsed,
                  id: this.#currentFormId
                }]);
                globalThis.fi = instanciatedForm;
              } catch (error) {
                console.error(error);
              } finally {
                this.#parent.fetching = false;
                this.triggerEvent();
              }
            };
            loadInstance = async ({
              id,
              processId,
              taskId
            }) => {
              try {
                this.#parent.fetching = true;
                this.fetching = true;
                const form = new _entities.FormItem();
                const response = await form.getInstanceForm({
                  id
                });
                if (!response.status) throw response.error;
                const formParsed = JSON.parse(form.data);
                form.update = true;
                const instanciatedForm = new _formModel.FormModel(formParsed, {
                  processId: processId,
                  userId: _wrappers.session.user.id,
                  update: id,
                  instanceId: id,
                  taskId: taskId,
                  creatorUser: response.data.instance.creatorUser
                }, this);
                const displayRequestForm = {
                  show: true,
                  processId: processId
                };
                this.#currentFormId = (0, _uuid.v4)();
                await instanciatedForm.isReady;
                this.#forms = this.forms.concat([{
                  requestForm: displayRequestForm,
                  instanciatedForm,
                  data: formParsed,
                  id: this.#currentFormId
                }]);
                globalThis.fi = instanciatedForm;
                return {
                  status: true
                };
              } catch (error) {
                console.error('ERROR GETTING INSTANCE FORM ', error);
                return {
                  status: false,
                  error
                };
              } finally {
                this.#parent.fetching = false;
                this.fetching = false;
              }
            };
            reset = () => {
              this.#forms = this.#forms.filter(item => item.id !== this.#currentFormId);
              this.#currentFormId = this.#forms.at(-1)?.id || undefined;
              globalThis.fi = this.#forms.at(-1)?.instanciatedForm;
              this.triggerEvent();
              this.#parent.triggerEvent();
            };
            resetSaved() {
              this.#feedbackMessage = '';
              this.#parent.triggerEvent('form.saved');
            }
            rollback = async () => {
              await api.post("rollback", {});
            };
          }
          exports.FormManager = FormManager;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./manager/form/form-model-types
      ***********************************************/

      ims.set('./manager/form/form-model-types', {
        hash: 4101614166,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************************
      INTERNAL MODULE: ./manager/form/form-model
      *****************************************/

      ims.set('./manager/form/form-model', {
        hash: 226605857,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormModel = void 0;
          var _model = require("@bgroup/wise-form/model");
          var _uploader = require("sgs-workflow/uploader");
          var _wrappers = require("sgs-workflow/wrappers");
          var _actionManager = require("./action-manager");
          var _conditionValidator = require("./condition-validator");
          var _api = require("@bgroup/http-suite/api");
          var _config = require("sgs-workflow/config");
          var _bulks = require("./get-reference-number/bulks");
          var _value = require("./get-reference-number/value");
          var _validations = require("./validations/validations");
          var _api2 = require("sgs-workflow/api");
          const api = new _api.Api(_config.default.params.filesServer);
          const apiSGS = new _api2.Api();
          api.bearer(_wrappers.session.token);
          class FormModel extends _model.FormModel {
            flagProductionInversion = false;
            #processId;
            get processId() {
              return this.#processId;
            }
            #userId;
            #uploader = new _uploader.Uploader({
              name: "file",
              url: _config.default.params.filesServer,
              multiple: true
            });
            #isSaved = false;
            get isSaved() {
              return this.#isSaved;
            }
            #instanceId = 0;
            #taskId = 0;
            get taskId() {
              return this.#taskId;
            }
            #requestSaved = null;
            get requestSaved() {
              return this.#requestSaved;
            }
            #feedbackMessage;
            get feedbackMessage() {
              return this.#feedbackMessage;
            }
            parent;
            #action = "save";
            #update;
            #creatorUser = {};
            #error = {
              description: "No se puede crear la instancia por los siguientes errores: ",
              items: [],
              displayOnceErrors: {}
            };
            get errors() {
              return this.#error;
            }
            #conditionValidator = new _conditionValidator.ConditionValidator(this);
            #valuesToApplyInRoot = {};
            #validationModal = "validationModal";
            #currentMapping;
            get currentMapping() {
              return this.#currentMapping;
            }
            constructor(settings, params, parent) {
              super({
                ...settings,
                ...params,
                callbacks: {
                  ..._actionManager.ActionManager,
                  onSelectFetch: params => {
                    return _actionManager.ActionManager.onSelectFetch(parent, params);
                  },
                  closeFormModal: () => _actionManager.ActionManager.closeFormModal(parent),
                  setFromTable: params => _actionManager.ActionManager.setFromTable(parent, params),
                  listenSelectedItem: params => _actionManager.ActionManager.listenSelectedItem(parent, params),
                  setItemsProd: params => _actionManager.ActionManager.setItemsProd(parent, params),
                  getParametersTraffic: params => _actionManager.ActionManager.getParametersTraffic(parent, params),
                  selectedItemAfa: params => _actionManager.ActionManager.selectedItemAfa(params, parent)
                }
              });
              this.parent = parent;
              this.#update = params?.update;
              this.#processId = params.processId;
              this.#userId = params.userId;
              this.#instanceId = params.instanceId;
              this.#creatorUser = params.creatorUser;
              this.#taskId = params.taskId;
            }
            /**
             * Handles form submission, managing button states and processing form data.
             * @param event - The form submission event.
             */
            async onSubmit(event) {
              const actionButtons = ["save-form", "derivate", "accept", "acceptDerivationModalBtn", "cancel", "returns", "reviewBtn", "acceptDeclineModalBtn", "decline"];
              this.parent.fetching = true;
              try {
                const action = event.nativeEvent.submitter.id;
                this.#action = action;
                const descriptionField = this.getField("description");
                const values = await this.getValues(this.#action);
                if (this.#action === "accept" && !!descriptionField && !!descriptionField.specs.requiredField && !descriptionField.value) {
                  this.errors.items.push(descriptionField.specs.errorMessage);
                }
                if (this.#action === "review") {
                  const commentsField = this.getField("comment");
                  const errorsReviewComments = commentsField.validateReview();
                  if (errorsReviewComments.errorMessage) {
                    this.errors.items.push(errorsReviewComments.errorMessage);
                  }
                }
                const description = this.getField("description") ? {
                  description: this.getField("description").value
                } : {};
                const derivationUserId = this.getField("derivedUserId") ? {
                  derivationUserId: this.getField("derivedUserId").value
                } : {};
                const valuesToSend = {
                  ...values,
                  actionId: action,
                  processId: this.processId,
                  ...derivationUserId,
                  ...description,
                  ...this.#valuesToApplyInRoot
                };
                if (action === "accept") await (0, _validations.specificValidations)({
                  parent: this,
                  values
                });
                if (this.#error.items.length) {
                  this.parent.fetching = false;
                  this.getField(this.#validationModal).set({
                    open: true,
                    items: this.#error.items,
                    description: this.#error.description
                  });
                  return {
                    status: false
                  };
                }
                actionButtons.forEach(button => {
                  const field = this.getField(button);
                  if (field) field.fetching = true;
                });
                // const validationResponse = await item.validate({ data: valuesToSend, instanceId: this.#instanceId });
                const url = this.#instanceId ? `workflow/${this.#instanceId}` : "workflow";
                const response = await apiSGS.post(url, valuesToSend);
                actionButtons.forEach(button => {
                  const field = this.getField(button);
                  if (field) field.fetching = false;
                });
                //LOGICA PARA MENEJAR Y MOSTRAR LAS VALIDACIONES DEL BACKEND
                if (!response.status && response?.validations) {
                  this.parent.fetching = false;
                  this.getField(this.#validationModal).set({
                    open: true,
                    items: response.validations,
                    description: "La acción no se pudo lanzar:"
                  });
                  return {
                    status: false
                  };
                }
                if (!response.status) throw new Error(response);
                this.#requestSaved = response.data;
                const removedIds = JSON.parse(localStorage.getItem("removed_files") || "[]");
                if (removedIds && removedIds.length) {
                  await this.#uploader.remove(removedIds);
                }
                if (localStorage.getItem("added_files")) {
                  await api.post("commit", {});
                }
                localStorage.removeItem("added_files");
                localStorage.removeItem("removed_files");
                this.handleSaved();
                this.#valuesToApplyInRoot = {};
                this.parent.fetching = false;
                return {
                  status: true
                };
              } catch (error) {
                console.error("Error submit: =====> ", error);
                actionButtons.forEach(button => {
                  const field = this.getField(button);
                  if (field) field.fetching = false;
                });
                if (localStorage.getItem("added_files")) this.rollback();
                localStorage.removeItem("added_files");
                localStorage.removeItem("removed_files");
                this.parent.fetching = false;
                return {
                  status: false,
                  error
                };
              } finally {
                this.#error.items = [];
                this.#error.displayOnceErrors = {};
              }
            }
            rollback = async () => {
              await api.post("rollback", {});
            };
            /**
             * Retrieves and processes form values based on action.
             * @param action - The current action identifier.
             */
            async getValues(action) {
              const toSend = {
                actionId: action,
                data: []
              };
              if (!this.settings.structure[action]) return {};
              const values = [...this.settings.structure[action]];
              if (!values) return;
              const filteredRequests = this.#filterUselessRequests(values);
              for (const element of filteredRequests) {
                const identifiers = element.identifier?.split(":");
                const action = identifiers[1] ?? "";
                element.action = action;
                const isBulk = element.action === "bulkInsert";
                this.#currentMapping = isBulk ? element : element.fields;
                let fields = isBulk ? await this.#getBulkFields(element, filteredRequests) : await this.#getFields(element, element.fields);
                if (element.removeItem) continue;
                toSend.data.push({
                  ...element,
                  data: fields
                });
              }
              return toSend;
            }
            #filterUselessRequests(values) {
              const checkFields = item => {
                return !Object.entries(item.fields).some(([name, config]) => {
                  const fieldName = config.as || name;
                  const field = this.getField(fieldName);
                  const prop = config.value || "value";
                  if (config.primary && (!field || !field[prop])) {
                    return true;
                  }
                  return config.required && !config.errorMessage && !config.value && !field[prop] && !config.canDelete;
                });
              };
              return values.filter(checkFields);
            }
            async #getFields(element, fields) {
              let values = {};
              for (const [name, config] of Object.entries(fields)) {
                const fieldName = config.as || name;
                const field = this.getField(fieldName);
                if (!field) {
                  values[name] = this.#getSpecialValues(config);
                  if (!values[name]) {
                    values[name] = config.ref;
                  }
                } else {
                  const prop = config.value || "value";
                  let value = field[prop] === "" ? null : field[prop];
                  const isRequiredAndDoesntHasValue = config.required && !field.disabled && !value && typeof value !== "boolean" && typeof value !== "number" && !config.canDelete;
                  if (isRequiredAndDoesntHasValue) {
                    this.#error.items = [...this.#error.items, {
                      message: config.errorMessage,
                      group: config.group,
                      order: config.order
                    }];
                    continue;
                  }
                  if (config.conditions) {
                    const response = this.#conditionValidator.execute({
                      field,
                      fieldValue: value,
                      config
                    });
                    if (!!response.errors?.length) {
                      const errors = response.errors.map(item => ({
                        message: item.message,
                        group: item.group || config.group,
                        order: item.order || config.order,
                        subGroup: item.subGroup || config.subGroup
                      }));
                      this.#error.items = [...this.#error.items, ...errors];
                      continue;
                    }
                  }
                  if (config.applyInTheRootObject) {
                    this.#valuesToApplyInRoot[name] = value;
                  }
                  //logica para indicarle al backend que se va a eliminar el registro
                  if (name === "id" && !!field.specs.value && (!field.value || typeof field.value === "string")) {
                    element.deleteId = field.specs.value;
                  }
                  //logica para indicar que no hay nada vacio y se debe eliminar del mapeo a enviar al backend
                  if (name === "id" && !field?.specs?.value && !field.value) {
                    element.removeItem = true;
                  }
                  if (name === "numeroReferencia" && !value) value = await (0, _value.getReferenceNumberValue)({
                    processId: this.processId,
                    actionId: this.#action,
                    form: this
                  });
                  values[name] = value;
                }
              }
              return values;
            }
            #getSpecialValues(config) {
              const values = {
                userId: this.#userId,
                processId: this.processId,
                username: _wrappers.session.user.username
              };
              if (config.value) return values[config.value];
              return config.ref || null;
            }
            async #getBulkFields(element, otherRequests) {
              let values = [];
              const fields = element.fields;
              try {
                for (const [name, config] of Object.entries(fields)) {
                  if (config.isSubBulk && !config.isDeleteItems) {
                    values = element.data || [];
                    continue;
                  }
                  const field = this.getField(name);
                  const prop = config.getTheValueFrom || "value";
                  let fieldValue = field[prop];
                  if (!fieldValue) throw new Error(`NOT FOUND FIELD ${prop}`);
                  if (config.conditions) {
                    const response = this.#conditionValidator.execute({
                      field,
                      fieldValue,
                      config
                    });
                    if (!!response.errors?.length) {
                      const errors = response.errors.map(item => ({
                        message: item
                      }));
                      this.#error.items = [...this.#error.items, ...errors];
                      continue;
                    }
                  }
                  if (config.required && !field.disabled && !fieldValue.length) {
                    this.#error.items.push({
                      message: config.errorMessage,
                      group: config.group,
                      order: config.order,
                      subGroup: config.subGroup
                    });
                    this.#error.description = config.errorDescription || this.#error.description;
                  }
                  if (!config.isSubBulk && !config.notDeleteItems) {
                    let allIds = field.specs[config.getTheValueFrom || "entries"].map(item => {
                      let idKey = "id";
                      const fields = config.fields;
                      if (fields?.id?.as) idKey = fields.id?.as;
                      return item[idKey];
                    });
                    element.ids = allIds;
                  }
                  if (!config.isSubBulk) fieldValue = await (0, _bulks.getReferenceNumberBulk)({
                    processId: this.processId,
                    actionId: this.#action,
                    data: fieldValue,
                    config
                  });
                  if (config.subBulks) {
                    config.subBulks.forEach(subBulkConfig => {
                      const hasValue = !!fieldValue && !!Array.isArray(fieldValue) && !!fieldValue.length && fieldValue.some(item => {
                        const isArray = Array.isArray(item[subBulkConfig.getTheValueFrom]);
                        if (isArray) return !!item[subBulkConfig.getTheValueFrom].length;
                        return !!item[subBulkConfig.getTheValueFrom]?.value?.length;
                      });
                      const fieldValueBulk = hasValue ? fieldValue : field.specs[prop];
                      const targetIndex = otherRequests.findIndex(req => req.identifier === subBulkConfig.identifier);
                      otherRequests[targetIndex].data = [];
                      fieldValueBulk.forEach((item, index) => {
                        const subBulkData = this.#processSubBulk(subBulkConfig, name, item[subBulkConfig.getTheValueFrom] || [], index, otherRequests);
                        const targetIndex = otherRequests.findIndex(req => req.identifier === subBulkConfig.identifier);
                        if (targetIndex !== -1) {
                          const subBulk = otherRequests[targetIndex];
                          let ids = [];
                          let notDeleteItems = false;
                          for (const param in subBulk.fields) {
                            const fields = subBulk.fields[param].fields;
                            notDeleteItems = subBulk.fields[param].notDeleteItems;
                            const idKey = fields.id?.as || "id";
                            const valueField = field.specs.value || fieldValue;
                            valueField.forEach(spec => {
                              const isArrayValue = Array.isArray(spec[subBulkConfig.getTheValueFrom]);
                              const value = isArrayValue ? spec[subBulkConfig.getTheValueFrom] : spec[subBulkConfig.getTheValueFrom]?.value;
                              value?.forEach(subItem => ids.push(subItem[idKey]));
                            });
                          }
                          if (hasValue) otherRequests[targetIndex].data.push(...subBulkData);
                          if (!notDeleteItems) otherRequests[targetIndex].ids = ids;
                        }
                      });
                    });
                  }
                  const mappedItems = fieldValue.map((item, index) => {
                    const newItem = this.#mapFieldValues(item, config, otherRequests, index, fieldValue);
                    const tempId = element.tempId ? `${element.tempId}-${index}` : null;
                    return {
                      ...newItem,
                      tempId
                    }; // Attaching tempId to each item
                  });
                  values.push(...mappedItems);
                }
                return values;
              } catch (error) {
                console.error("ERROR IN getBulkFields: ", error);
              }
            }
            #processSubBulk(subBulkConfig, parentName, items, index, otherRequests) {
              const subBulkSettings = this.settings.structure[this.#action].find(config => config.identifier === subBulkConfig.identifier);
              if (!items) return [];
              if (!Array.isArray(items) && typeof items === "object") items = items.value;
              return items.map(item => this.#mapFieldValues(item, {
                ...subBulkSettings.fields[parentName]
              }, otherRequests, index, items));
            }
            #mapFieldValues(item, config, otherRequests, index, items) {
              const newItem = {};
              for (const [key, fieldConfig] of Object.entries(config.fields)) {
                const identifier = fieldConfig?.as || key;
                let field = fieldConfig.hasOwnProperty("ref") ? fieldConfig.ref : item[identifier];
                let value = field;
                // validations by property
                if (fieldConfig.conditions) {
                  const response = this.#conditionValidator.execute({
                    field,
                    fieldValue: items,
                    config: fieldConfig
                  });
                  if (!!response.errors?.length) {
                    const errors = response.errors.map(error => {
                      let errorMessage = error.message;
                      let group = error.group;
                      for (const prop of Object.keys(item)) {
                        errorMessage = errorMessage.replaceAll(`{{${prop}}}`, error.property || item[prop]);
                        group = group ? group.replaceAll(`{{${prop}}}`, error.property || item[prop]) : group;
                      }
                      return {
                        message: errorMessage,
                        group: group,
                        order: fieldConfig.order,
                        subGroup: fieldConfig.subGroup
                      };
                    });
                    this.#error.items = [...this.#error.items, ...errors];
                    continue;
                  }
                }
                if (fieldConfig.required && !value) {
                  const uniqueErrorId = `${config.id}${identifier}`;
                  const wasAlreadyDisplayed = this.#error.displayOnceErrors[uniqueErrorId];
                  let errorMessage = fieldConfig.errorMessage;
                  let group = fieldConfig.group;
                  for (const prop of Object.keys(item)) {
                    errorMessage = errorMessage.replaceAll(`{{${prop}}}`, item[prop]);
                    group = group ? group.replaceAll(`{{${prop}}}`, item[prop]) : group;
                  }
                  if (fieldConfig.displayErrorOnce) {
                    if (!wasAlreadyDisplayed) {
                      this.#error.displayOnceErrors[uniqueErrorId] = true;
                      this.#error.items.push({
                        message: errorMessage,
                        group: group,
                        subGroup: fieldConfig.subGroup
                      });
                    }
                  } else {
                    this.#error.items.push({
                      message: errorMessage,
                      group: group,
                      subGroup: fieldConfig.subGroup
                    });
                  }
                }
                if (!!field && !Array.isArray(field) && typeof field === "object" && Object.entries(field).length && !fieldConfig.hasOwnProperty("ref")) {
                  value = field.value;
                }
                newItem[key] = value === "" ? null : value;
              }
              for (let [key, value] of Object.entries(config)) {
                const isRef = typeof value === "string" && value.split("ref:").length > 1;
                if (isRef) {
                  const tempElement = isRef && otherRequests.find(req => req.tempId === value.split(":")[1]);
                  const action = tempElement?.identifier && tempElement?.identifier.split(":")[1] || "";
                  value = isRef && action === "bulkInsert" ? `${value}-${index}` : value;
                  newItem[key] = value === "" ? null : value;
                }
              }
              return newItem;
            }
            handleSaved() {
              this.parent.reset();
              const instance = this.#requestSaved.instance;
              const segProdInstances = this.#requestSaved.segProdInstances;
              let SAVE_MESSAGE = `El procedimiento ${instance.request} de ${instance.process.description} pasó a ${instance.task.description} con éxito.`;
              if (segProdInstances) {
                const segProdInstancesIds = segProdInstances.map(item => `sep-${item.id}`);
                SAVE_MESSAGE += `<br /> <br /> Se crearon los siguientes procedimientos de Seguimiento de la producción: ${segProdInstancesIds.join(", ")}`;
              }
              const messages = {
                save: SAVE_MESSAGE,
                derive: SAVE_MESSAGE + ` y derivada a: ${this.getField("derivedUserId")?.selectedOptionLabel}`,
                review: `El procedimiento ${instance.request} de ${instance.process.description} se mando a Revisión`,
                accept: SAVE_MESSAGE
              };
              if (this.#action === "returns" || this.#action === "decline") {
                this.parent.manager.load();
                return;
              }
              this.parent.feedbackMessage = messages[this.#action];
              this.parent.triggerEvent("form.saved");
            }
          }
          exports.FormModel = FormModel;
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./manager/form/get-reference-number/bulks
      *********************************************************/

      ims.set('./manager/form/get-reference-number/bulks', {
        hash: 183235605,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getReferenceNumberBulk = getReferenceNumberBulk;
          var _api = require("sgs-workflow/api");
          const api = new _api.Api();
          async function getReferenceNumberBulk(params) {
            const {
              processId,
              actionId,
              data,
              config
            } = params;
            if (![1, 2].includes(processId) || !config.fields.numeroReferencia) return data;
            if (actionId !== 'accept') return data;
            if (processId === 2) {
              const response = await api.post('form/reference-number', {
                data,
                processId
              });
              if (!response.status) return data;
              return response.data;
            }
          }
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./manager/form/get-reference-number/value
      *********************************************************/

      ims.set('./manager/form/get-reference-number/value', {
        hash: 203967212,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getReferenceNumberValue = getReferenceNumberValue;
          var _api = require("sgs-workflow/api");
          const api = new _api.Api();
          async function getReferenceNumberValue(params) {
            const {
              processId,
              actionId,
              form
            } = params;
            if (actionId !== 'accept') return null;
            const data = {
              works: form.getField('finance-project-data').value
            };
            const response = await api.post('form/reference-number', {
              data,
              processId
            });
            if (!response.status) return null;
            return response.data.numeroReferencia;
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./manager/form/validations/accept/atm
      *****************************************************/

      ims.set('./manager/form/validations/accept/atm', {
        hash: 1774150196,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.atmValidation = atmValidation;
          async function atmValidation({
            parent,
            values
          }) {
            try {
              const instance = parent.getField("altaMaterialJView");
              const itemTable = instance.itemTable ?? instance.specs.itemTable;
              if (itemTable === "altaMaterialJView") {
                const uniqueProperties = ["codigoMaterialMdm", "codigoMaterial"];
                const errors = {
                  codigoMaterial: `El código de Material`,
                  codigoMaterialMdm: "El código de Material MDM"
                };
                const codesMap = new Map();
                instance.entries.forEach(entry => {
                  uniqueProperties.forEach(prop => {
                    if (!entry[prop]) return;
                    if (!codesMap.has(prop)) {
                      codesMap.set(prop, new Map());
                    }
                    const subMap = codesMap.get(prop);
                    if (!subMap.has(entry[prop])) {
                      subMap.set(entry[prop], entry);
                      codesMap.set(prop, subMap);
                      return;
                    }
                    parent.errors.items.push({
                      message: `${errors[prop]} ${entry[prop]} ya existe en la solicitud`,
                      order: 1,
                      group: "Agregar título (parte superior de datos editoriales)"
                    });
                  });
                });
              }
              return {
                status: true
              };
            } catch (exc) {
              console.error("exc", exc);
              return {
                status: false,
                error: exc
              };
            }
          }
        }
      });

      /************************************************************
      INTERNAL MODULE: ./manager/form/validations/accept/production
      ************************************************************/

      ims.set('./manager/form/validations/accept/production', {
        hash: 2613270868,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.productionValidation = productionValidation;
          async function productionValidation({
            parent,
            values
          }) {
            try {
              if (![111, 57, 1111].includes(parent.taskId)) return {
                status: true
              };
              const instance = parent.getField("titleBooks");
              const itemTable = instance.itemTable ?? instance.specs.itemTable;
              if (itemTable === "titleBooks") {
                const productionModal = parent.getField("productionModal");
                const salesButtons = productionModal.getField("sale-type");
                const properties = ["sale-type"];
                const types = new Map();
                instance.entries.forEach(entry => {
                  properties.forEach(prop => {
                    if (!entry[prop]) return;
                    const saleType = salesButtons.options.find(type => type.value === entry[prop]);
                    types.set(saleType.value, saleType);
                  });
                });
                if (types.size > 1) {
                  const errors = [];
                  types.forEach(type => errors.push(type.label));
                  parent.errors.items.push({
                    message: `La solicitud que está queriendo crear contiene solicitudes de ${errors.join(" / ")}`,
                    order: 1
                  });
                }
              }
              return {
                status: true
              };
            } catch (exc) {
              console.error("exc", exc);
              return {
                status: false,
                error: exc
              };
            }
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./manager/form/validations/validations
      ******************************************************/

      ims.set('./manager/form/validations/validations', {
        hash: 206606952,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.specificValidations = specificValidations;
          var _atm = require("./accept/atm");
          var _production = require("./accept/production");
          async function specificValidations({
            parent,
            values
          }) {
            const {
              processId
            } = parent;
            try {
              if (processId === 1) await (0, _atm.atmValidation)({
                parent,
                values
              });
              if (processId === 14) await (0, _production.productionValidation)({
                parent,
                values
              });
              return {
                status: true
              };
            } catch (exc) {
              return {
                status: false,
                error: exc
              };
            }
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./manager/index
      *******************************/

      ims.set('./manager/index', {
        hash: 2528259410,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Manager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _entities = require("sgs-workflow/entities");
          var _comments = require("./comments");
          var _instances = require("./instances");
          var _filters = require("./filters");
          var _formManager = require("./form/form-manager");
          var _wrappers = require("sgs-workflow/wrappers");
          /*bundle*/
          class Manager extends _model.ReactiveModel {
            get business() {
              return Array.from(Array(15)).map((_, i) => {
                return {
                  keys: ['name', 'description'],
                  name: `business ${i}`,
                  description: `description ${i}`
                };
              });
            }
            #areasCollection = new _entities.AreasCollection();
            get areasCollection() {
              return this.#areasCollection;
            }
            selectedProcessId;
            #processCollection = new _entities.ProcessCollection();
            get processCollection() {
              return this.#processCollection;
            }
            #selected = {};
            get selected() {
              return this.#selected;
            }
            #indicators = new _entities.IndicatorsCollection();
            get indicators() {
              return this.#indicators;
            }
            #picked = new Map();
            get picked() {
              return this.#picked;
            }
            set picked(value) {
              this.#picked = value;
              this.triggerEvent();
            }
            #comments = new _comments.Comments(this);
            get comments() {
              return this.#comments;
            }
            #tasksCollection = new _entities.TasksCollection();
            get tasksCollection() {
              return this.#tasksCollection;
            }
            #error = {
              show: false,
              message: ''
            };
            get error() {
              return this.#error;
            }
            set error(value) {
              this.#error = value;
              this.triggerEvent();
            }
            #instancesCollection = new _entities.InstancesCollection();
            get instancesCollection() {
              return this.#instancesCollection;
            }
            #tasksStatesCollection = new _entities.TasksStatesCollection();
            get tasksStatesCollection() {
              return this.#tasksStatesCollection;
            }
            #historyItems = [];
            get historyItems() {
              return this.#historyItems;
            }
            #instances = new _instances.Instances(this);
            get instances() {
              return this.#instances;
            }
            #taskItems = [];
            get taskItems() {
              return this.#taskItems;
            }
            #tasksStatesItems = [];
            get tasksStatesItems() {
              return this.#tasksStatesItems;
            }
            #areaItems = [];
            get areaItems() {
              return this.#areaItems;
            }
            #indicatorsItems = [];
            get indicatorsItems() {
              return this.#indicatorsItems;
            }
            #processItems;
            get processItems() {
              return this.#processItems;
            }
            #formManager = new _formManager.FormManager(this);
            get formManager() {
              return this.#formManager;
            }
            #filters = new _filters.Filters();
            get filters() {
              return this.#filters;
            }
            #params;
            #isTacks;
            get isTacks() {
              return this.#isTacks;
            }
            #view;
            get view() {
              return this.#view;
            }
            #processIds = _wrappers.appWrapper.processAvailable.map(item => item.value);
            get processIds() {
              return this.#processIds;
            }
            constructor({
              isTacks,
              view
            }) {
              super();
              this.#comments.on('change', () => {
                if (this.fetching == this.#comments.fetching) this.fetching = this.#comments.fetching;
              });
              this.#isTacks = isTacks;
              this.#view = view;
              if (view === 'tasks') {
                this.#processIds = _wrappers.appWrapper.processAvailable.filter(item => item.value !== 20).map(item => item.value);
              }
            }
            load = async () => {
              this.fetching = true;
              const promises = [];
              const isFirsLoad = !this.#areaItems?.length;
              if (isFirsLoad) {
                promises.push(this.#areasCollection.load({
                  limit: 10000,
                  start: 0
                }));
                promises.push(this.#processCollection.load({
                  limit: 10000,
                  start: 0,
                  where: {
                    id: this.processIds
                  }
                }));
                promises.push(this.#tasksCollection.load({
                  limit: 10000,
                  start: 0
                }));
                promises.push(this.tasksStatesCollection.load({
                  limit: 10000,
                  start: 0
                }));
              }
              promises.push(this.#instances.load());
              try {
                const responses = await Promise.all(promises);
                if (isFirsLoad) {
                  this.#areaItems = responses[0].data;
                  this.#processItems = responses[1].data;
                  this.#taskItems = responses[2].data;
                  this.#tasksStatesItems = responses[3].data;
                }
                this.triggerEvent();
              } catch (error) {
                console.error(error);
              } finally {
                this.fetching = false;
                this.ready = true;
              }
            };
            selectClick = async event => {
              event.stopPropagation();
              const {
                id
              } = event.currentTarget.dataset;
              this.fetching = true;
              try {
                const item = this.#instances.items.find(item => item.id === parseInt(id));
                if (item.id === this.#selected.id) {
                  this.#selected = {};
                  this.#comments.items = [];
                  this.#indicatorsItems = [];
                  this.#comments.commentSelected = null;
                  this.#historyItems = [];
                  this.#instances.business = [];
                } else {
                  this.#selected = item;
                  this.#comments.items = [];
                  this.#indicatorsItems = [];
                  this.#instancesCollection.items = [];
                  const responses = await Promise.all([this.#instancesCollection.load({
                    where: {
                      historical: true,
                      instanceId: this.#selected.id
                    }
                  }), this.#indicators.load({
                    where: {
                      instanceId: item.id
                    }
                  }), this.#comments.load(), this.#instances.loadBusiness({
                    processId: item.processId,
                    instanceId: item.id
                  })]);
                  this.#indicatorsItems = responses[1].data;
                  this.#historyItems = responses[0].data;
                }
              } catch (error) {
                console.error(error);
              } finally {
                this.fetching = false;
              }
            };
            refreshSelected = async () => {
              const id = this.#selected?.id;
              const item = this.#instances.items.find(item => item.id === this.#selected?.id);
              if (!item) {
                this.#selected = {};
                this.#comments.items = [];
                this.#indicatorsItems = [];
                this.#comments.commentSelected = null;
                this.#historyItems = [];
                this.#instances.business = [];
                this.#picked.delete(id);
                return id;
              }
              const responses = await Promise.all([this.#instancesCollection.load({
                where: {
                  historical: true,
                  instanceId: item.id
                }
              }), this.#indicators.load({
                where: {
                  instanceId: item.id
                }
              }), this.#comments.load(), this.#instances.loadBusiness({
                processId: this.#selected.processId,
                instanceId: item.id
              })]);
              this.#indicatorsItems = responses[1].data;
              this.#historyItems = responses[0].data;
              this.triggerEvent();
            };
            handleChangeChecked = async event => {
              const {
                checked,
                name
              } = event.currentTarget;
              this.fetching = true;
              try {
                const item = this.#instances.items.find(item => item.id === parseInt(name));
                if (checked) {
                  this.#selected = item;
                  const responses = await Promise.all([this.#instancesCollection.load({
                    where: {
                      historical: true,
                      instanceId: this.#selected.id
                    }
                  }), this.#indicators.load({
                    where: {
                      instanceId: item.id
                    }
                  }), this.#instances.loadBusiness({
                    processId: item.processId,
                    instanceId: item.id
                  })]);
                  this.#indicatorsItems = responses[1].data;
                  this.#historyItems = responses[0].data;
                } else {
                  this.#selected = {};
                  this.#comments.items = [];
                  this.#comments.commentSelected = null;
                  this.#historyItems = [];
                  this.#indicatorsItems = [];
                  this.#instances.business = [];
                  this.triggerEvent();
                }
                if (this.#picked.has(item.id)) {
                  this.#picked.delete(item.id);
                  this.#comments.items = [];
                  this.triggerEvent();
                  return;
                }
                this.#picked.set(item.id, item);
                await this.#comments.load();
                this.triggerEvent();
              } catch (error) {
                console.error(error);
              } finally {
                this.fetching = false;
              }
            };
            changeEntries = async ({
              limit,
              total,
              pages
            }) => {
              this.fetching = true;
              try {
                const page = await this.#instances.changeEntries({
                  limit,
                  total,
                  pages
                });
                this.#selected = this.#instances.items.find(entry => entry.id === this.#selected.id) ? this.#selected : {};
                this.triggerEvent();
                return page;
              } catch (error) {
                console.error(error);
              } finally {
                this.fetching = false;
              }
            };
            loadInstance = async instanceId => {
              return this.#formManager.loadInstance(instanceId);
            };
            selectAll = event => {
              const {
                checked
              } = event.currentTarget;
              this.#instances.items.forEach(item => {
                if (checked) this.#picked.set(item.id, item);else this.#picked.delete(item.id);
              });
              this.triggerEvent();
            };
            onFilter = params => {
              this.#params = {
                ...this.#params,
                [params.name]: params.op ? {
                  value: params.value,
                  op: params.op ?? 'in'
                } : params.value
              };
              if (!this.#params[params.name] || !!params.hasOwnProperty('op') && !params.op) delete this.#params[params.name];
            };
            reset = async () => {
              this.#picked = new Map();
              this.#comments.items = [];
              this.#comments.commentSelected = null;
              this.#historyItems = [];
              this.#indicatorsItems = [];
              this.#selected = {};
              this.#instances.business = [];
              this.#filters.clear();
              this.instances.reset();
              await this.load();
              this.triggerEvent();
            };
            refreshView = async () => {
              await this.instances.refreshInstances();
              this.#picked = new Map();
              this.#comments.items = [];
              this.#comments.commentSelected = null;
              this.#historyItems = [];
              this.#selected = {};
              this.#indicatorsItems = [];
              this.#instances.business = [];
              this.#filters.valueApply = 'Aplicar';
              this.triggerEvent();
            };
            approve = async () => {
              try {
                this.fetching = true;
                const formItem = new _entities.FormItem();
                const promises = [];
                this.#picked.forEach(item => {
                  const data = {
                    userId: _wrappers.session.user.id,
                    actionId: 'accept',
                    data: []
                  };
                  promises.push(formItem.publish({
                    data,
                    instanceId: item.id
                  }));
                });
                await Promise.all(promises);
                this.fetching = false;
                this.refreshView();
                return {
                  status: true
                };
              } catch (error) {
                return {
                  status: false,
                  error
                };
              }
            };
            review = async () => {
              try {
                this.fetching = true;
                const formItem = new _entities.FormItem();
                const promises = [];
                this.#picked.forEach(item => {
                  const data = {
                    userId: _wrappers.session.user.id,
                    actionId: 'review',
                    data: []
                  };
                  const isValid = item.comments.some(comment => comment.taskId === item.taskId && comment.userId === _wrappers.session.user.id);
                  if (!isValid) {
                    this.#error = {
                      show: true,
                      message: `Recuerde que para Revisar debe ingresar un comentario en la instancia: ${item.id}`
                    };
                    this.triggerEvent();
                    return;
                  }
                  this.#picked.delete(item.id);
                  promises.push(formItem.publish({
                    data,
                    instanceId: item.id
                  }));
                });
                await Promise.all(promises);
                this.fetching = false;
                if (promises.length) {
                  this.load();
                }
                return {
                  status: true
                };
              } catch (error) {
                return {
                  status: false,
                  error
                };
              }
            };
            clean = () => {
              this.#picked = new Map();
              this.#comments.items = [];
              this.#comments.commentSelected = null;
              this.#historyItems = [];
              this.#selected = {};
              this.#indicatorsItems = [];
              this.#instances.business = [];
              this.instances.clean();
              this.triggerEvent();
            };
          }
          exports.Manager = Manager;
        }
      });

      /***********************************
      INTERNAL MODULE: ./manager/instances
      ***********************************/

      ims.set('./manager/instances', {
        hash: 3449477149,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Instances = void 0;
          var _routing = require("@beyond-js/kernel/routing");
          var _model = require("@beyond-js/reactive/model");
          var _entities = require("sgs-workflow/entities");
          var _config = require("sgs-workflow/config");
          var _dayjs = require("dayjs");
          var _wrappers = require("sgs-workflow/wrappers");
          class Instances extends _model.ReactiveModel {
            #collection = new _entities.InstancesCollection();
            get collection() {
              return this.#collection;
            }
            #parent;
            #items = [];
            get items() {
              return this.#items;
            }
            set items(value) {
              this.#items = value;
              this.triggerEvent();
            }
            #limit = _config.default.params.application.tables.rows;
            get limit() {
              return this.#limit;
            }
            #validRoutes = ["/instances", "/", "/login"];
            #params = {
              start: 0,
              limit: this.#limit,
              order: "timeCreated",
              des: "DES",
              creatorUserId: _wrappers.session.user.id,
              session: {
                userId: _wrappers.session.user.id,
                username: _wrappers.session.user.username
              }
            };
            get params() {
              return this.#params;
            }
            #currentPage = 1;
            get currentPage() {
              return this.#currentPage;
            }
            get isFiltering() {
              const keys = ["start", "limit", "order", "des", "processId", "creatorUserId", "view", "assignedUserId", 'filters', 'session'];
              const keysFilters = Object.keys(this.#params).filter(item => !keys.includes(item));
              return !!keysFilters.length || typeof this.#params.processId === "number";
            }
            get isParamsUserId() {
              const validRoutes = ["/instances", "/"];
              return validRoutes.some(item => _routing.routing.uri.pathname === item);
            }
            #view;
            get view() {
              return this.#view;
            }
            #business = [];
            get business() {
              return this.#business;
            }
            set business(value) {
              this.#business = value;
              this.triggerEvent();
            }
            #countSegProd = 0;
            get countSegProd() {
              return this.#countSegProd;
            }
            constructor(parent) {
              super();
              this.#parent = parent;
            }
            load = async () => {
              this.#parent.fetching = true;
              this.fetching = true;
              this.#params = {
                start: 0,
                limit: this.#limit,
                order: "timeCreated",
                des: "DES",
                view: this.#parent.view,
                processId: {
                  value: this.#parent.processIds,
                  op: "in"
                },
                session: {
                  userId: _wrappers.session.user.id,
                  username: _wrappers.session.user.username
                },
                filters: this.#parent.filters.filtersApply
              };
              const isParamsUserId = this.#validRoutes.some(item => window.location.pathname === item);
              const userSession = JSON.parse(localStorage.getItem("sgs-session"));
              const userId = _wrappers.session?.user?.id ?? userSession.id;
              if (isParamsUserId && this.#parent.view === "tasks") this.#params.creatorUserId = userId;
              if (isParamsUserId && this.#parent.view === "instances") this.#params.assignedUserId = userId;
              this.#currentPage = 1;
              try {
                const [response, reCount] = await Promise.all([this.#collection.load(this.#params), this.getCountSegProd()]);
                if (!response?.data) throw new Error(response.error?.message ?? "ERROR_LOADING_INSTANCES");
                this.#items = response.data;
              } catch (error) {
                console.error(error);
              } finally {
                this.fetching = false;
                this.#parent.fetching = false;
              }
            };
            refreshInstances = async () => {
              this.#parent.fetching = true;
              this.fetching = true;
              this.#params = {
                start: 0,
                limit: this.#limit,
                order: "timeCreated",
                des: "DES",
                view: this.#parent.view,
                processId: {
                  value: this.#parent.processIds,
                  op: "in"
                },
                session: {
                  userId: _wrappers.session.user.id,
                  username: _wrappers.session.user.username
                }
              };
              const isParamsUserId = this.#validRoutes.some(item => window.location.pathname === item);
              const userSession = JSON.parse(localStorage.getItem("sgs-session"));
              const userId = _wrappers.session?.user?.id ?? userSession.id;
              if (isParamsUserId && this.#parent.view === "tasks") this.#params.creatorUserId = userId;
              if (isParamsUserId && this.#parent.view === "instances") this.#params.assignedUserId = userId;
              this.#currentPage = 1;
              try {
                const [response, reCount] = await Promise.all([this.#collection.load(this.#params), this.getCountSegProd()]);
                if (!response?.data) throw new Error(response.error?.message ?? "ERROR_LOADING_INSTANCES");
                this.#items = response.data;
              } catch (error) {
                console.error(error);
              } finally {
                this.fetching = false;
                this.#parent.fetching = false;
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
                const response = await this.#collection.load(this.#params);
                if (!response?.data) throw new Error(response.error);
                this.#items = response.data;
                this.#currentPage = page;
                this.triggerEvent();
                return this.#collection.items;
              } catch (error) {
                console.error("error", error);
              } finally {
                this.fetching = false;
              }
            };
            changeEntries = async ({
              limit
            }) => {
              this.fetching = true;
              this.#currentPage = 1;
              this.#limit = limit;
              this.#params = {
                ...this.#params,
                limit: this.#limit,
                start: 0
              };
              const response = await this.#collection.load(this.#params);
              this.#items = response.data;
              this.fetching = false;
              this.triggerEvent();
              return this.#currentPage;
            };
            filter = async params => {
              const isDate = params.name === "expirationDate" || params.name === "startDate";
              this.#currentPage = 1;
              this.#params = {
                ...this.#params,
                limit: this.#limit,
                start: this.#limit * (this.#currentPage - 1),
                [params.name]: params.op ? {
                  value: isDate ? params.value : params.value.toString(),
                  op: params.op
                } : params.value
              };
              const isEmptyValue = !this.#params[params.name] || isDate && this.#params[params.name].value.every(item => !item) || !!params.hasOwnProperty("op") && !params.op;
              if (isEmptyValue) {
                if (params.name !== "processId") delete this.#params[params.name];else this.#params.processId = {
                  value: this.#parent.processIds,
                  op: "in"
                };
              }
              ;
              if (isDate && !!this.#params[params.name] && !this.#params[params.name].value.at(0)) this.#params[params.name].value[0] = "1800-01-01";
              if (isDate && !!this.#params[params.name] && !this.#params[params.name].value.at(1)) this.#params[params.name].value[1] = (0, _dayjs.default)().add(200, "year").format("YYYY-MM-DD");
              this.fetching = true;
              try {
                const response = await this.#collection.load(this.#params);
                if (!response?.data) throw new Error(response.error.message);
                this.#parent.clean();
                this.#items = response.data;
              } catch (error) {
                console.error(error);
              } finally {
                this.fetching = false;
              }
            };
            reset = () => {
              this.#limit = _config.default.params.application.tables.rows;
              this.#params = {
                start: 0,
                limit: this.#limit,
                order: "timeCreated",
                des: "DES",
                processId: {
                  value: this.#parent.processIds,
                  op: "in"
                },
                session: {
                  userId: _wrappers.session.user.id,
                  username: _wrappers.session.user.username
                }
              };
              if (this.isParamsUserId && this.#parent.view === "tasks") this.#params.creatorUserId = _wrappers.session.user.id;
              if (this.isParamsUserId && this.#parent.view === "instances") this.#params.assignedUserId = _wrappers.session.user.id;
              this.#currentPage = 1;
              this.#items = [];
              this.triggerEvent();
            };
            clean = () => {
              this.#currentPage = 1;
              this.#items = [];
              this.triggerEvent();
            };
            loadBusiness = async params => {
              try {
                const response = await this.#collection.business(params);
                if (!response.status) throw new Error(response.error.message);
                this.#business = response.data.entries;
              } catch (error) {
                console.error(error);
              }
            };
            filterModal = async () => {
              this.fetching = true;
              try {
                this.#params = {
                  ...this.#params,
                  filters: this.#parent.filters.filtersApply
                };
                const response = await this.#collection.load(this.#params);
                if (!response?.data) throw new Error(response.error.message);
                this.#parent.clean();
                this.#items = response.data;
              } catch (error) {
                console.error(error);
              } finally {
                this.fetching = false;
              }
            };
            getCountSegProd = async () => {
              try {
                const response = await this.#collection.getCountSegProd();
                if (!response.status) throw new Error(response.error.message);
                this.#countSegProd = response.data;
                this.triggerEvent();
              } catch (error) {
                console.error(error);
              }
            };
          }
          exports.Instances = Instances;
        }
      });

      /**********************************
      INTERNAL MODULE: ./manager/trim-map
      **********************************/

      ims.set('./manager/trim-map', {
        hash: 283476647,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.trimMap = trimMap;
          function trimMap(originalMap, items) {
            const newMap = new Map();
            if (!originalMap) return newMap;
            // Iterar sobre el mapa original
            for (const [key, value] of originalMap) {
              const item = items.find(entry => entry.id === value.id);
              if (item) newMap.set(key, value);
            }
            return newMap;
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/bottom-panel
      ************************************/

      ims.set('./views/bottom-panel', {
        hash: 2300772340,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BottomPanel = BottomPanel;
          var _comments = require("./comments");
          var _react = require("react");
          var _historical = require("./historical");
          var _container = require("./indicators/container");
          var _context = require("./context");
          var _sectionContainer = require("./section-container");
          var _business = require("./business");
          function BottomPanel() {
            const {
              manager
            } = (0, _context.useHomeContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: 'middle-section'
            }, _react.default.createElement(_sectionContainer.SectionContainer, null, _react.default.createElement(_business.Business, null)), _react.default.createElement(_sectionContainer.SectionContainer, null, _react.default.createElement(_container.IndicatorsContainer, null))), _react.default.createElement("div", {
              className: 'bottom-section'
            }, _react.default.createElement(_sectionContainer.SectionContainer, null, _react.default.createElement(_comments.Comments, null)), _react.default.createElement(_sectionContainer.SectionContainer, null, _react.default.createElement(_historical.Historical, null))));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/business/format-to-display
      **************************************************/

      ims.set('./views/business/format-to-display', {
        hash: 1593726472,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.formatToDisplay = void 0;
          const formatToDisplay = ({
            value,
            isDecimal = true
          }) => {
            if (!value && value !== 0) return "";
            if (isNaN(parseInt(value)) || typeof value === "string" && value.includes(' ')) return value;
            const decimalsLimit = value.includes(".") && isDecimal ? 2 : 0;
            const valueToDisplay = parseFloat(value);
            const options = {
              minimumFractionDigits: decimalsLimit,
              maximumFractionDigits: decimalsLimit,
              style: 'decimal',
              useGrouping: true
            };
            const formatter = new Intl.NumberFormat('es-ES', options);
            return formatter.format(valueToDisplay);
          };
          exports.formatToDisplay = formatToDisplay;
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/business/index
      **************************************/

      ims.set('./views/business/index', {
        hash: 3106618976,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Business = Business;
          var _react = require("react");
          var _list = require("../list");
          var _context = require("../context");
          var _item = require("./item");
          function Business() {
            const {
              manager
            } = (0, _context.useHomeContext)();
            return _react.default.createElement(_list.List, {
              items: manager.instances.business,
              title: 'Negocio',
              className: 'business-list',
              bgHeader: true,
              item: _item.Item
            });
          }
          ;
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/business/item
      *************************************/

      ims.set('./views/business/item', {
        hash: 2635790608,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _formatToDisplay = require("./format-to-display");
          var _helpers = require("sgs-workflow/helpers");
          var _context = require("../context");
          function Item({
            item
          }) {
            const label = item.label.toLocaleLowerCase();
            const {
              manager
            } = (0, _context.useHomeContext)();
            let value = label.includes('código') ? item.value : (0, _formatToDisplay.formatToDisplay)({
              value: item.value,
              isDecimal: item.type === 'decimal'
            });
            value = item.label.includes('Presupuesto') && !!value ? `$ ${value}` : value;
            value = item.type === 'date' ? item.value : value;
            value = item.label === "Número de Referencia" && item.value ? item.value.split('/').map(number => number ? (0, _helpers.generateNumeroReferencia)(Number(number), manager.selected?.processId) : '').join(' / ') : value;
            const cls = `item-list ${label.includes('título') || label.includes('códigos') || label.includes('Número de Referencia') ? 'item-title' : ''} ${label.includes('tipo de componente') ? 'font-bold' : ''}`;
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("span", null, item.label, ":"), _react.default.createElement("span", {
              className: "text-end"
            }, value));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/buttons/dropdown/index
      **********************************************/

      ims.set('./views/buttons/dropdown/index', {
        hash: 355373748,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Dropdown = Dropdown;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("../icons");
          var _icons2 = require("pragmate-ui/icons");
          var _framerMotion = require("framer-motion");
          var _item = require("./item");
          var _useOutsideClick = require("./use-outside-click");
          function Dropdown() {
            const [isOpen, setIsOpen] = _react.default.useState(false);
            const onToggle = () => setIsOpen(!isOpen);
            const ref = (0, _useOutsideClick.useOutsideClick)(() => setIsOpen(false));
            const icon = isOpen ? _icons.icons.up : _icons.icons.down;
            return _react.default.createElement(_framerMotion.AnimatePresence, null, _react.default.createElement("div", {
              className: 'dropdown-container',
              ref: ref
            }, _react.default.createElement(_components.Button, {
              onClick: onToggle,
              variant: 'primary',
              icon: _icons.icons.watch
            }, "Pendientes", _react.default.createElement(_icons2.Icon, {
              icon: icon
            })), _react.default.createElement(_item.Item, {
              isOpen: isOpen
            })));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/buttons/dropdown/item
      *********************************************/

      ims.set('./views/buttons/dropdown/item', {
        hash: 1193823469,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          var _context = require("../../context");
          function Item({
            isOpen
          }) {
            const {
              manager: {
                instances
              }
            } = (0, _context.useHomeContext)();
            if (!isOpen) return null;
            return _react.default.createElement(_framerMotion.motion.div, {
              initial: {
                opacity: 0,
                y: 16
              },
              animate: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.3,
                  ease: [0.4, 0.98, 0.92, 0.87]
                }
              },
              exit: {
                opacity: 0,
                y: 16,
                transition: {
                  delay: 0.3
                }
              },
              className: 'dropdown-item'
            }, _react.default.createElement("span", null, "Crear trabajos y asignar talleres"), _react.default.createElement("div", {
              className: 'badge'
            }, " ", instances.countSegProd));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/buttons/dropdown/items
      **********************************************/

      ims.set('./views/buttons/dropdown/items', {
        hash: 1751428570,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Items = Items;
          var _react = require("react");
          var _context = require("../../context");
          var _item = require("./item");
          function Items({
            isOpen
          }) {
            const {
              manager: {
                instances
              }
            } = (0, _context.useHomeContext)();
            if (!isOpen) return null;
            const output = instances.countsSegProd.tasks.map((item, index) => {
              return _react.default.createElement(_item.Item, {
                key: index,
                item: item
              });
            });
            return _react.default.createElement("div", {
              className: 'dropdown-items'
            }, output);
          }
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./views/buttons/dropdown/use-outside-click
      **********************************************************/

      ims.set('./views/buttons/dropdown/use-outside-click', {
        hash: 2420379609,
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
              document.addEventListener("mousedown", handleClick);
              return () => document.removeEventListener("mousedown", handleClick);
            }, []);
            return ref;
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/buttons/icons
      *************************************/

      ims.set('./views/buttons/icons', {
        hash: 3643068443,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.icons = void 0;
          const icons = exports.icons = {
            add: {
              viewBox: '0 0 22 22',
              icon: `<g>
                <path id="Trazado_11008" data-name="Trazado 11008" d="M11,22A11,11,0,1,0,0,11,11,11,0,0,0,11,22Zm-.77-6.325a.825.825,0,1,0,1.65,0v-3.8h3.8a.825.825,0,0,0,0-1.65h-3.8v-3.9a.825.825,0,1,0-1.65,0v3.9H6.325a.825.825,0,0,0,0,1.65H10.23Z" fill-rule="evenodd"/>
            </g>
            `
            },
            filter: {
              viewBox: '0 0 28.645 22',
              icon: `<g>
                <path id="Unión_2" data-name="Unión 2" d="M12.312,21.7l-4-4a.966.966,0,0,1-.3-.7V9.407L.312,1.7A.905.905,0,0,1,.093.61.937.937,0,0,1,1.015,0h20a.937.937,0,0,1,.922.61,1.075,1.075,0,0,1,.091.507c-.176-.01-.36-.015-.547-.015A9.914,9.914,0,0,0,14.015,17.54V21a.937.937,0,0,1-.61.922,1.084,1.084,0,0,1-.391.078A.936.936,0,0,1,12.312,21.7Zm8.368-3.532a.291.291,0,0,1-.278-.205l-.478-1.611a5.524,5.524,0,0,1-1.1-.45l-1.477.789A.29.29,0,0,1,17,16.641L15.86,15.5a.3.3,0,0,1-.053-.345l.784-1.5a5.552,5.552,0,0,1-.478-1.113l-1.592-.478a.294.294,0,0,1-.205-.278V10.168a.293.293,0,0,1,.205-.278L16.1,9.413a5.553,5.553,0,0,1,.479-1.133l-.775-1.434A.3.3,0,0,1,15.86,6.5l1.162-1.132a.291.291,0,0,1,.344-.053L18.8,6.09a5.512,5.512,0,0,1,1.138-.478l.478-1.578a.292.292,0,0,1,.278-.205h1.615a.292.292,0,0,1,.283.2l.478,1.582a5.54,5.54,0,0,1,1.128.478l1.458-.779A.292.292,0,0,1,26,5.359l1.143,1.147a.292.292,0,0,1,.053.344l-.784,1.468a5.574,5.574,0,0,1,.454,1.113l1.6.479a.291.291,0,0,1,.177.282v1.63a.292.292,0,0,1-.206.278l-1.611.478a5.539,5.539,0,0,1-.454,1.1l.794,1.481a.293.293,0,0,1-.053.345l-1.143,1.142a.292.292,0,0,1-.344.053L24.141,15.9a5.616,5.616,0,0,1-1.09.449l-.478,1.616a.29.29,0,0,1-.278.205ZM18.872,11A2.63,2.63,0,1,0,21.5,8.371,2.63,2.63,0,0,0,18.872,11Z" transform="translate(0)"/>
            </g>
            `
            },
            apply: {
              viewBox: '0 0 22.032 22',
              icon: `<g>
                <path id="Trazado_11016" data-name="Trazado 11016" d="M21.9.609A.9.9,0,0,1,21.684,1.7l-7.7,7.7V21a.934.934,0,0,1-.609.922,1.086,1.086,0,0,1-.391.078.928.928,0,0,1-.7-.3l-4-4a.961.961,0,0,1-.3-.7V9.406L.278,1.7A.9.9,0,0,1,.059.609.934.934,0,0,1,.981,0h20A.934.934,0,0,1,21.9.609Z" transform="translate(0.035)" />
            </g>
            `
            },
            refresh: {
              viewBox: '0 0 20 22',
              icon: `<g>
                    <path id="Trazado_11015" data-name="Trazado 11015" d="M19.674,13.292a.268.268,0,0,1-.013.1,11.342,11.342,0,0,1-3.49,6.223A9.02,9.02,0,0,1,9.948,22a8.986,8.986,0,0,1-3.678-.788A9.89,9.89,0,0,1,3.1,18.964l-1.68,1.848a.767.767,0,0,1-1.172,0A.926.926,0,0,1,0,20.167V13.75a.926.926,0,0,1,.247-.645.767.767,0,0,1,.586-.272H6.667a.767.767,0,0,1,.586.272.963.963,0,0,1,0,1.289L5.469,16.357a6.67,6.67,0,0,0,2.1,1.461A5.984,5.984,0,0,0,10,18.333a6.093,6.093,0,0,0,3.255-.931,6.893,6.893,0,0,0,2.422-2.564q.143-.243.69-1.676a.4.4,0,0,1,.391-.329h2.5a.383.383,0,0,1,.293.136A.463.463,0,0,1,19.674,13.292ZM20,1.833V8.25a.926.926,0,0,1-.247.645.767.767,0,0,1-.586.272H13.333a.767.767,0,0,1-.586-.272.963.963,0,0,1,0-1.289l1.8-1.977A6.162,6.162,0,0,0,10,3.667,6.093,6.093,0,0,0,6.745,4.6,6.893,6.893,0,0,0,4.323,7.161q-.143.243-.69,1.676a.4.4,0,0,1-.391.329H.651a.383.383,0,0,1-.293-.136.463.463,0,0,1-.124-.322v-.1A11.376,11.376,0,0,1,3.75,2.385,9.083,9.083,0,0,1,10,0a9.051,9.051,0,0,1,3.7.795,10.027,10.027,0,0,1,3.19,2.242l1.693-1.848a.767.767,0,0,1,1.172,0A.926.926,0,0,1,20,1.833Z" />
                </g>
                `
            },
            watch: {
              viewBox: '0 0 18.7 22',
              icon: `<g viewBox="0 0 18.7 22">
                <path id="Trazado_11043" data-name="Trazado 11043" d="M22.3,16.625A9.35,9.35,0,1,1,6.037,10.279L4.667,8.9a.836.836,0,0,1,0-1.176.82.82,0,0,1,1.167,0L7.253,9.151a9.293,9.293,0,0,1,11.395,0l1.419-1.431a.82.82,0,0,1,1.167,0,.836.836,0,0,1,0,1.176l-1.371,1.382A9.433,9.433,0,0,1,22.3,16.625ZM12.95,10.8a.828.828,0,0,1,.825.832v5.2l3.058,3.083a.836.836,0,0,1,0,1.176.82.82,0,0,1-1.167,0l-3.542-3.57V11.635A.828.828,0,0,1,12.95,10.8Z" transform="translate(-3.6 -4.05)"  fill-rule="evenodd"/>
                <path id="Trazado_11044" data-name="Trazado 11044" d="M18.188,0a.788.788,0,0,0,0,1.575h4.2a.788.788,0,0,0,0-1.575Z" transform="translate(-10.938)" />
            </g>
            `
            },
            'magnifying-glass': {
              viewBox: '0 0 16.641 17',
              icon: `<g>
                <path id="Trazado_11020" data-name="Trazado 11020" d="M15.163,4.988A6.868,6.868,0,0,0,9.28,15.4L5.951,18.729l.012.012a1.891,1.891,0,0,0,1.319,3.247,1.9,1.9,0,0,0,1.362-.566l.008.008,3.435-3.435A6.867,6.867,0,1,0,15.163,4.988ZM15.2,16.022A4.292,4.292,0,1,1,19.5,11.73,4.292,4.292,0,0,1,15.2,16.022Z" transform="translate(-5.389 -4.988)" />
            </g>
            `
            },
            down: {
              icon: `<g  aria-hidden="true" focusable="false" class="css-tj5bde-Svg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></g>`,
              viewBox: '0 0 20 20'
            },
            up: {
              viewBox: '0 0 512 512',
              icon: `<g >
                <path opacity="1" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/>
            </g>`
            },
            cleanFilter: {
              icon: `<g>
		<path id="Unión_2" data-name="Unión 2" d="M9.465,16a.679.679,0,0,1-.511-.216L6.046,12.875a.7.7,0,0,1-.216-.511V6.841l-5.6-5.6a.658.658,0,0,1-.159-.8A.681.681,0,0,1,.739,0H15.284a.681.681,0,0,1,.671.443.779.779,0,0,1,.066.368C15.892.8,15.759.8,15.622.8a7.211,7.211,0,0,0-5.429,11.955v2.516a.681.681,0,0,1-.443.671A.784.784,0,0,1,9.465,16Z" transform="translate(0 0)" />
		<path id="Exclusión_1" data-name="Exclusión 1" d="M5.5,11A5.5,5.5,0,1,1,11,5.5,5.508,5.508,0,0,1,5.5,11Zm0-4.829h0L6.986,7.654a.459.459,0,0,0,.324.135.448.448,0,0,0,.322-.135.442.442,0,0,0,.133-.319.449.449,0,0,0-.133-.328L6.148,5.518,7.676,3.985a.442.442,0,0,0,.133-.319.449.449,0,0,0-.133-.328.454.454,0,0,0-.322-.132.465.465,0,0,0-.324.132L5.5,4.871,3.973,3.339a.458.458,0,0,0-.781.328.452.452,0,0,0,.135.319L4.855,5.518,3.369,7.008a.459.459,0,0,0-.135.328.457.457,0,0,0,.781.319L5.5,6.169Z" transform="translate(9.998 2.501)" />
	  </g>
	  `,
              viewBox: '0 0 21 16'
            },
            file: {
              icon: `<g><path d="M2 4.75C2 3.784 2.784 3 3.75 3h4.965a1.75 1.75 0 0 1 1.456.78l1.406 2.109a.25.25 0 0 0 .208.111h8.465c.966 0 1.75.784 1.75 1.75v11.5A1.75 1.75 0 0 1 20.25 21H3.75A1.75 1.75 0 0 1 2 19.25Zm12.78 4.97a.749.749 0 0 0-1.275.326.749.749 0 0 0 .215.734l1.72 1.72H6.75a.75.75 0 0 0 0 1.5h8.69l-1.72 1.72a.749.749 0 0 0 .326 1.275.749.749 0 0 0 .734-.215l3-3a.75.75 0 0 0 0-1.06Z"></path></g>`,
              viewBox: '0 0 24 24'
            },
            comments: {
              viewBox: '0 0 16.038 16',
              icon: `<g >
        <path id="Trazado_11031" data-name="Trazado 11031" d="M14.423.333A1.559,1.559,0,0,1,15.568.8a1.515,1.515,0,0,1,.469,1.108v9.615a1.6,1.6,0,0,1-1.615,1.615H3.192L0,16.333V1.911A1.515,1.515,0,0,1,.469.8,1.559,1.559,0,0,1,1.615.333Z" transform="translate(0 -0.333)" />
      </g>
      `
            },
            check: {
              viewBox: "0 0 512 512",
              icon: `<g stroke-width="0" ><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></g>`
            }
          };
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/buttons/index
      *************************************/

      ims.set('./views/buttons/index', {
        hash: 2445420521,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Buttons = Buttons;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("./icons");
          var _dropdown = require("./dropdown");
          var _context = require("../context");
          var _filters = require("../filters");
          var _newRequest = require("../new-request");
          function Buttons() {
            const {
              picked,
              manager,
              initialState,
              setDateRange,
              setPicked
            } = (0, _context.useHomeContext)();
            const selectedItemsAreFromCurrentPage = manager.instances.items.some(item => picked.has(item.id));
            const isSelected = selectedItemsAreFromCurrentPage;
            const icon = manager.filters.isApply ? _icons.icons.apply : _icons.icons.cleanFilter;
            const refresh = () => {
              setDateRange(initialState);
              picked.clear();
              setPicked(picked);
              manager.refreshView();
            };
            const approve = () => {
              manager.approve();
            };
            const review = () => {
              manager.review();
            };
            const applyFilter = () => {
              manager.filters.applyFilter();
              manager.instances.filterModal();
            };
            return _react.default.createElement("div", {
              className: "buttons-list"
            }, _react.default.createElement("div", {
              className: "filter-buttons"
            }, _react.default.createElement(_newRequest.NewRequest, null), _react.default.createElement(_filters.Filters, null), _react.default.createElement(_components.Button, {
              className: "apply-button reversed",
              variant: "primary",
              disabled: manager.instances.fetching,
              translate: "no",
              onClick: applyFilter,
              icon: icon
            }, manager.filters.valueApply), _react.default.createElement(_components.Button, {
              disabled: manager.instances.fetching,
              translate: "no",
              variant: "primary",
              className: "reversed",
              onClick: refresh,
              icon: _icons.icons.refresh
            }, "Refrescar"), !!isSelected && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_components.Button, {
              onClick: approve,
              disabled: manager.instances.fetching,
              className: "reversed",
              variant: "primary"
            }, "Aprobar"), _react.default.createElement(_components.Button, {
              onClick: review,
              className: "reversed",
              variant: "primary"
            }, "Revisar"))), _react.default.createElement(_dropdown.Dropdown, null));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/comments/delete
      ***************************************/

      ims.set('./views/comments/delete', {
        hash: 3762336229,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DeleteComment = DeleteComment;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../context");
          function DeleteComment() {
            const {
              manager: {
                comments
              }
            } = (0, _context.useHomeContext)();
            const handleClose = () => {
              comments.commentSelected = null;
              comments.showDelete = false;
            };
            if (!comments.showDelete) return null;
            const btnConfirm = {
              variant: "primary",
              label: "Confirmar"
            };
            const btnCancel = {
              variant: "secondary",
              label: "Cancelar",
              bordered: false
            };
            return _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              title: "Eliminar comentario",
              text: "\u00BFSeguro que desea eliminar el comentario?",
              onClose: handleClose,
              className: "beauty-modal modal-sgs",
              onCancel: handleClose,
              onConfirm: comments.delete,
              btnConfirm: btnConfirm,
              btnCancel: btnCancel
            });
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/comments/format-date
      ********************************************/

      ims.set('./views/comments/format-date', {
        hash: 3658241897,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.formatDate = formatDate;
          function formatDate(date) {
            const currentDate = new Date();
            const pastDate = new Date(date);
            const timeUnits = ['minute', 'hour', 'day', 'week'];
            const limits = [60, 24, 7];
            const diffInMilliseconds = currentDate - pastDate;
            const diffInSeconds = diffInMilliseconds / 1000; // Convertir a segundos
            let elapsedTime;
            for (let i = 0; i < limits.length; i++) {
              const limit = limits[i];
              const amount = diffInSeconds / (i < 2 ? 1 : 60); // Convertir segundos a minutos, horas, días o semanas según sea necesario
              if (amount < limit || i === limits.length - 1) {
                elapsedTime = `${Math.floor(amount)} ${timeUnits[i]}${Math.floor(amount) !== 1 ? 's' : ''} ago`;
                break;
              }
            }
            return elapsedTime;
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/comments/index
      **************************************/

      ims.set('./views/comments/index', {
        hash: 636969447,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Comments = Comments;
          var _react = require("react");
          var _wrappers = require("sgs-workflow/wrappers");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _item = require("./item");
          var _delete = require("./delete");
          var _newComment = require("./new-comment");
          var _empty = require("../empty");
          var _icons = require("../buttons/icons");
          function Comments() {
            const {
              manager,
              isTacks
            } = (0, _context.useHomeContext)();
            const isAlreadyCommented = manager.comments.items.some(item => item.taskId === manager.selected.taskId && item.userId === _wrappers.session.user.id);
            const disabled = !manager.selected.id || isAlreadyCommented;
            const output = manager.comments.items.map(item => {
              return _react.default.createElement(_item.Item, {
                item: item,
                key: item.id
              });
            });
            return _react.default.createElement("div", {
              className: "container-comments"
            }, _react.default.createElement("div", {
              className: "header-comments"
            }, _react.default.createElement("header", {
              className: "content-header"
            }, _react.default.createElement("h5", null, "Comentarios")), isTacks && _react.default.createElement(_components.Button, {
              variant: "primary",
              disabled: disabled,
              onClick: manager.comments.handleModal,
              icon: _icons.icons.comments,
              className: "reversed"
            }, "Agregar Comentario")), _react.default.createElement("div", {
              className: "content list-items"
            }, output.length ? _react.default.createElement("div", {
              className: "list-entries"
            }, output) : _react.default.createElement("div", {
              className: "empty-comments"
            }, _react.default.createElement(_empty.Empty, null))), _react.default.createElement(_delete.DeleteComment, null), _react.default.createElement(_newComment.NewComment, null));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/comments/item
      *************************************/

      ims.set('./views/comments/item', {
        hash: 1252140784,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../context");
          var _wrappers = require("sgs-workflow/wrappers");
          function Item({
            item
          }) {
            const {
              isTacks,
              manager: {
                comments
              }
            } = (0, _context.useHomeContext)();
            const dt = new Date(item.timeCreated);
            const date = `${dt.getDate()}/${dt.getMonth() + 1}/${dt.getFullYear()} ${dt.getUTCHours()}:${dt.getUTCMinutes()}`;
            // Format the adjusted date
            const getText = value => value ?? 'Sin valor';
            const handleDelete = () => {
              comments.commentSelected = item;
              comments.showDelete = true;
            };
            const handleEdit = () => {
              comments.commentSelected = item;
              comments.show = true;
              comments.value = item.comment;
            };
            const disabled = item.userId !== _wrappers.session.user.id;
            const displayActions = isTacks && item.userId === _wrappers.session.user.id;
            const userName = _wrappers.session.userId === item.userId ? 'Yo' : `${getText(item?.user?.name)} ${getText(item?.user?.lastname)}`;
            return React.createElement("div", {
              className: "comment-item-list"
            }, React.createElement("div", {
              className: "comment-content"
            }, React.createElement("header", {
              className: "header"
            }, React.createElement("span", {
              className: "username"
            }, userName), React.createElement("span", {
              className: "time-created"
            }, date)), React.createElement("p", {
              className: "comment"
            }, item.comment)), displayActions && React.createElement("div", {
              className: "actions"
            }, React.createElement(_icons.IconButton, {
              icon: "edit",
              onClick: handleEdit,
              disabled: disabled
            }), React.createElement(_icons.IconButton, {
              icon: "delete",
              onClick: handleDelete,
              disabled: disabled
            })));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/comments/new-comment
      ********************************************/

      ims.set('./views/comments/new-comment', {
        hash: 3556626719,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NewComment = NewComment;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../context");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          function NewComment() {
            const {
              manager: {
                comments
              }
            } = (0, _context.useHomeContext)();
            if (!comments.show) return null;
            const title = comments.commentSelected ? 'Editar comentario' : 'Agregar comentario';
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "beauty-modal modal-sgs",
              onClose: comments.handleModal
            }, _react.default.createElement(_form.Form, {
              className: "form-request",
              onSubmit: comments.save
            }, _react.default.createElement("h3", {
              className: "modal-title"
            }, title), _react.default.createElement(_form.Textarea, {
              disabled: comments.fetching,
              onChange: comments.handleChange,
              label: "Comentario",
              value: comments.value
            }), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              type: "submit",
              label: "Guardar",
              disabled: !comments.value,
              variant: "primary",
              loading: comments.fetching
            }), _react.default.createElement(_components.Button, {
              onClick: comments.handleModal,
              type: "reset",
              label: "Cancelar",
              variant: "secondary",
              disabled: comments.fetching
            }))));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 2610487290,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useHomeContext = exports.HomeContext = void 0;
          var React = require("react");
          const HomeContext = exports.HomeContext = React.createContext({});
          const useHomeContext = () => React.useContext(HomeContext);
          exports.useHomeContext = useHomeContext;
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/empty/index
      ***********************************/

      ims.set('./views/empty/index', {
        hash: 2314290340,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Empty = Empty;
          var _react = require("react");
          var _empty = require("pragmate-ui/empty");
          function Empty() {
            return _react.default.createElement(_empty.Empty, {
              className: "empty-jview",
              icon: "circle-exclamation"
            }, _react.default.createElement("h3", null, "No existe informaci\u00F3n para mostrar"), " ");
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/error-modal
      ***********************************/

      ims.set('./views/error-modal', {
        hash: 773613008,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ErrorModal = ErrorModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          function ErrorModal() {
            const {
              manager
            } = (0, _context.useHomeContext)();
            if (!manager.error.show) return null;
            const onClose = () => {
              manager.error = {
                show: false,
                message: ''
              };
            };
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "beauty-modal modal-sgs save-success",
              onClose: onClose
            }, _react.default.createElement("h3", {
              className: "modal-title"
            }, "Error"), _react.default.createElement("p", null, manager.error.message), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              onClick: onClose,
              type: "submit",
              label: "Aceptar",
              variant: "primary"
            }), _react.default.createElement(_components.Button, {
              onClick: onClose,
              type: "reset",
              label: "Cancelar",
              variant: "secondary"
            })));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/filters/index
      *************************************/

      ims.set('./views/filters/index', {
        hash: 1604193034,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Filters = Filters;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("../buttons/icons");
          var _modal = require("./modal");
          var _context = require("../context");
          function Filters() {
            const {
              manager: {
                filters,
                instances
              }
            } = (0, _context.useHomeContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_components.Button, {
              disabled: instances.fetching,
              translate: "no",
              onClick: filters.handleShow,
              className: "reversed",
              variant: "primary",
              icon: _icons.icons.filter
            }, "Configurar Filtros"), _react.default.createElement(_modal.FilterModal, null));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/filters/modal
      *************************************/

      ims.set('./views/filters/modal', {
        hash: 193722946,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FilterModal = FilterModal;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _modal = require("pragmate-ui/modal");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _select = require("sgs-workflow/select");
          var _procesess = require("./procesess");
          var _wrappers = require("sgs-workflow/wrappers");
          function FilterModal() {
            const {
              manager: {
                filters,
                instances
              },
              widget
            } = (0, _context.useHomeContext)();
            if (!filters.showModal) return;
            const onFilter = () => {
              filters.apply();
              instances.filterModal();
            };
            const onClear = () => {
              filters.clear();
              instances.filterModal();
            };
            const options = _wrappers.appWrapper.processAvailable.filter(option => !option.onlyFilterInbox);
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "container-filter-modal modal-sgs",
              onClose: filters.handleShow,
              closeClicked: false
            }, _react.default.createElement("h3", {
              className: "modal-title"
            }, "Seleccione el Proceso"), _react.default.createElement("div", {
              className: "row-select"
            }, _react.default.createElement(_select.Select, {
              options: options,
              value: filters.processSelected,
              onChange: filters.handleChangeProcess,
              name: "filtersView"
            }), _react.default.createElement(_icons.IconButton, {
              icon: "plus",
              onClick: filters.addFilter,
              className: "plus"
            })), _react.default.createElement(_procesess.Processes, null), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onFilter
            }, "Aplicar Filtros"), _react.default.createElement(_components.Button, {
              variant: "secondary",
              onClick: onClear
            }, "Limpiar")));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/filters/procesess/get-type
      **************************************************/

      ims.set('./views/filters/procesess/get-type', {
        hash: 3577861467,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.parseToNumber = exports.getType = void 0;
          const includesAnyWord = (label, words) => words.some(word => label.includes(word));
          const getType = label => {
            const lowercaseLabel = label.toLowerCase();
            const typeMap = {
              'fecha': 'date',
              'presupuesto': 'number',
              'precio': 'number',
              "cant": "number",
              "inversión Total": "number",
              "pvp": "number",
              "venta": "number",
              "importe": "number",
              'total': "number",
              'alumnos': "number",
              "aulas": "number",
              "descuento": "number",
              "gastos": "number",
              "id cotizacion": "number",
              "monto": "number",
              "solicitud original": "number",
              "Necesidad Almacén": "date",
              "tirada": "number"
            };
            const matchedType = Object.entries(typeMap).find(([word]) => includesAnyWord(lowercaseLabel, [word]));
            return matchedType ? matchedType[1] : 'text';
          };
          exports.getType = getType;
          const parseToNumber = val => {
            if (!val) return '';
            // Paso 1: Eliminar caracteres no válidos excepto dígitos, puntos, comas y el signo negativo
            let sanitizedValue = val.toString().replace(/[^0-9.,-]/g, '');
            // Paso 2: Asegurarse de que el signo negativo solo esté al inicio
            if (sanitizedValue.includes('-') && sanitizedValue.indexOf('-') !== 0) {
              return ''; // Formato inválido si el signo negativo no está al principio
            }
            // Paso 3: Manejar combinaciones de puntos y comas
            if (sanitizedValue.includes('.') && sanitizedValue.includes(',')) {
              // Última coma como separador decimal
              const lastCommaIndex = sanitizedValue.lastIndexOf(',');
              sanitizedValue = sanitizedValue.slice(0, lastCommaIndex) // Parte antes de la última coma
              .replace(/\./g, '') +
              // Elimina puntos como separadores de miles
              '.' + sanitizedValue.slice(lastCommaIndex + 1); // Convierte la última coma en punto
            } else if (sanitizedValue.includes(',')) {
              // Reemplazar comas por puntos como separadores decimales
              sanitizedValue = sanitizedValue.replace(/,/g, '.');
            } else {
              // Eliminar puntos como separadores de miles
              sanitizedValue = sanitizedValue.replace(/\./g, '');
            }
            // Paso 4: Convertir a número flotante
            const number = parseFloat(sanitizedValue);
            return isNaN(number) ? '' : number;
          };
          exports.parseToNumber = parseToNumber;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/filters/procesess/index
      ***********************************************/

      ims.set('./views/filters/procesess/index', {
        hash: 3133270318,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Processes = Processes;
          var _react = require("react");
          var _context = require("../../context");
          var _item = require("./item");
          var _uuid = require("uuid");
          function Processes() {
            const {
              manager: {
                filters
              }
            } = (0, _context.useHomeContext)();
            const output = Array.from(filters.filtersSelected.values()).map(item => {
              return _react.default.createElement(_item.Item, {
                key: (0, _uuid.v4)(),
                item: item
              });
            });
            return _react.default.createElement("div", {
              className: 'content-filters'
            }, output);
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/filters/procesess/item
      **********************************************/

      ims.set('./views/filters/procesess/item', {
        hash: 902281004,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _select = require("sgs-workflow/select");
          var _context = require("../../context");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          var _uuid = require("uuid");
          var _subItem = require("./sub-item");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _getType = require("./get-type");
          var _options = require("./options");
          var _number = require("./number");
          function Item({
            item
          }) {
            const {
              widget,
              manager: {
                filters
              }
            } = (0, _context.useHomeContext)();
            const [upd, setUpdate] = _react.default.useState({});
            (0, _hooks.useBinder)([filters], () => {
              setUpdate({});
            }, 'filter');
            const handleChangeValue = ({
              target
            }) => {
              filters.handleChangeValue({
                id: item.id,
                value: target.value
              });
            };
            const handleChangeOp = option => filters.handleChangeFilter({
              id: item.id,
              value: option.target,
              key: 'op'
            });
            const handleChangeInput = event => {
              event.stopPropagation();
              let inputValue = event.target.value;
              if (['int', "decimal"].includes(item.type)) inputValue = (0, _getType.parseToNumber)(inputValue);
              filters.handleChangeFilter({
                id: item.id,
                value: inputValue,
                key: 'inputValue'
              });
            };
            const subItems = Array.from(item.or.values()).map(item => {
              return _react.default.createElement(_subItem.SubItem, {
                key: (0, _uuid.v4)(),
                item: item
              });
            });
            const type = item.type;
            const inputType = _options.optionsInput[type];
            const options = _options.optionsOp[type];
            const cls = `container-row ${item.or.size ? "has-sub-item" : ""}`;
            const camposFiltros = filters.processSelected.camposFiltros.sort((a, b) => a.label.localeCompare(b.label));
            const control = ['int', "decimal"].includes(type) ? _react.default.createElement(_number.InputNumber, {
              item: item,
              handleChangeInput: handleChangeInput,
              allowDecimals: type === "decimal"
            }) : _react.default.createElement(_form.Input, {
              value: item.inputValue,
              onChange: handleChangeInput,
              type: inputType
            });
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("div", {
              className: 'row-filter'
            }, _react.default.createElement("span", null, "y"), _react.default.createElement("div", {
              className: 'row-filter__add'
            }, _react.default.createElement(_select.Select, {
              widget: widget,
              options: camposFiltros,
              value: item.value.value,
              onChange: handleChangeValue
            }), _react.default.createElement(_icons.IconButton, {
              icon: 'plus',
              className: 'plus',
              onClick: filters.handleAddOp,
              "data-id": item.id
            })), _react.default.createElement(_select.Select, {
              widget: widget,
              options: options,
              onChange: handleChangeOp,
              value: item.op.value
            }), control, _react.default.createElement(_icons.IconButton, {
              icon: 'close',
              className: 'close-filter',
              "data-key": item.id,
              onClick: filters.deleteFilter
            })), subItems);
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/filters/procesess/number
      ************************************************/

      ims.set('./views/filters/procesess/number', {
        hash: 2026853473,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InputNumber = InputNumber;
          var _react = require("react");
          function InputNumber({
            item,
            handleChangeInput,
            allowDecimals = true
          }) {
            const formatValue = val => {
              if (val === null || val === undefined || val === "") return "";
              let number;
              if (typeof val === "string") {
                // Paso 1: Limpiar y convertir strings con formato a números
                const sanitizedValue = val.replace(/\./g, '') // Elimina puntos como separadores de miles
                .replace(/,/g, '.'); // Convierte comas a puntos (separador decimal)
                number = parseFloat(sanitizedValue);
                // Si no es un número válido, devolvemos el valor original formateado correctamente
                if (isNaN(number)) return val;
              } else if (typeof val === "number") {
                number = val; // Si ya es un número, no requiere conversión
              } else {
                return ""; // Si es otro tipo, no lo procesamos
              }
              // Paso 2: Configuración para formatear el número
              const options = {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                style: 'decimal',
                useGrouping: true
              };
              const formatter = new Intl.NumberFormat('es-ES', options);
              return formatter.format(number);
            };
            const [value, setValue] = _react.default.useState(item.inputValue ? formatValue(item.inputValue) : "");
            const handleInputChange = event => {
              let inputValue = event.target.value;
              inputValue = inputValue.replaceAll(/[^\d,-]/g, '');
              setValue(inputValue);
              handleChangeInput(event);
            };
            const handleBlur = () => {
              const formattedValue = formatValue(value);
              setValue(formattedValue);
            };
            return _react.default.createElement("div", {
              className: 'pui-input'
            }, _react.default.createElement("input", {
              onChange: handleInputChange,
              onBlur: handleBlur,
              type: "text",
              value: value
            }));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/filters/procesess/options
      *************************************************/

      ims.set('./views/filters/procesess/options', {
        hash: 2287153917,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.optionsOp = exports.optionsInput = exports.OpOptionsNumber = exports.OpOptions = void 0;
          const OpOptions = exports.OpOptions = [{
            value: 'like',
            label: 'Contiene'
          }, {
            value: "notIn",
            label: "No contiene"
          }, {
            value: 'eq',
            label: 'Igual'
          }, {
            value: 'gt',
            label: 'Mayor'
          }, {
            value: 'lt',
            label: 'Menor'
          }, {
            value: 'gte',
            label: 'Mayor o Igual'
          }, {
            value: 'lte',
            label: 'Menor o igual'
          }];
          const OpOptionsNumber = exports.OpOptionsNumber = [{
            value: 'eq',
            label: 'Igual'
          }, {
            value: 'gt',
            label: 'Mayor'
          }, {
            value: 'lt',
            label: 'Menor'
          }, {
            value: 'gte',
            label: 'Mayor o Igual'
          }, {
            value: 'lte',
            label: 'Menor o igual'
          }];
          const optionsOp = exports.optionsOp = {
            datetime: OpOptionsNumber,
            int: OpOptionsNumber,
            varchar: OpOptions,
            decimal: OpOptionsNumber,
            nvarchar: OpOptions
          };
          const optionsInput = exports.optionsInput = {
            datetime: 'date',
            int: 'number',
            varchar: 'text',
            decimal: 'number',
            nvarchar: 'text'
          };
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/filters/procesess/sub-item
      **************************************************/

      ims.set('./views/filters/procesess/sub-item', {
        hash: 2401803782,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SubItem = SubItem;
          var _react = require("react");
          var _select = require("sgs-workflow/select");
          var _context = require("../../context");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _getType = require("./get-type");
          var _options = require("./options");
          var _number = require("./number");
          function SubItem({
            item
          }) {
            const {
              widget,
              manager: {
                filters
              }
            } = (0, _context.useHomeContext)();
            const [upd, setUpdate] = _react.default.useState({});
            (0, _hooks.useBinder)([filters], () => {
              setUpdate({});
            }, 'subFilter');
            const handleChangeOp = option => {
              filters.handleChangeFilter({
                id: item.idFather,
                value: option.target,
                key: 'op',
                idChild: item.id
              });
            };
            const handleChangeInput = event => {
              event.stopPropagation();
              let inputValue = event.target.value;
              if (['int', "decimal"].includes(item.type)) inputValue = (0, _getType.parseToNumber)(inputValue);
              filters.handleChangeFilter({
                idChild: item.id,
                value: inputValue,
                key: 'inputValue',
                id: item.idFather
              });
            };
            const lowercaseLabel = filters.filtersSelected.get(item.idFather).value.label.toLowerCase();
            const type = item.type;
            const options = _options.optionsOp[type];
            const customNoOptionsMessage = () => {
              return "No hay opciones";
            };
            const inputType = _options.optionsInput[type];
            const control = ['int', "decimal"].includes(type) ? _react.default.createElement(_number.InputNumber, {
              item: item,
              handleChangeInput: handleChangeInput,
              allowDecimals: type === "decimal"
            }) : _react.default.createElement(_form.Input, {
              value: item.inputValue,
              onChange: handleChangeInput,
              type: inputType
            });
            return _react.default.createElement("div", {
              className: 'row-filter row-sub-filter'
            }, _react.default.createElement("span", null), _react.default.createElement("span", {
              className: 'indicator'
            }, "o"), _react.default.createElement(_select.Select, {
              widget: widget,
              options: options,
              onChange: handleChangeOp,
              value: item.op.value
            }), control, _react.default.createElement(_icons.IconButton, {
              icon: 'close',
              className: 'close-filter',
              "data-father": item.idFather,
              "data-id": item.id,
              onClick: filters.deleteSubFilter
            }));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/historical/index
      ****************************************/

      ims.set('./views/historical/index', {
        hash: 733291896,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Historical = Historical;
          var _react = require("react");
          var _list = require("../list");
          var _context = require("../context");
          var _item = require("./item");
          function Historical() {
            const {
              manager
            } = (0, _context.useHomeContext)();
            const headerHistory = [{
              label: 'Inicio'
            }, {
              label: 'Fin'
            }, {
              label: 'Tarea'
            }, {
              label: 'Usuario'
            }];
            return _react.default.createElement(_list.List, {
              items: manager.historyItems,
              title: "Historial",
              className: "historical-list",
              header: {
                items: headerHistory,
                className: 'header-historical '
              },
              item: _item.Item,
              bgHeader: true
            });
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/historical/item
      ***************************************/

      ims.set('./views/historical/item', {
        hash: 2952457129,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _dayjs = require("dayjs");
          var _icons = require("pragmate-ui/icons");
          var _useTooltip = require("./use-tooltip");
          function Item({
            item
          }) {
            const getText = value => value ?? 'Sin valor';
            const [ref] = (0, _useTooltip.useTooltip)({
              data: item?.action?.name
            });
            const icons = {
              1: {
                icon: {
                  viewBox: '0 0 512 512',
                  icon: `<g stroke-width="0" ><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></g>`
                },
                className: 'approved'
              },
              2: {
                icon: {
                  icon: `<g stroke-width="0" ><path d="M19.828 18.256l-.002.015c249.642 36.995 371.904 169.983 397.32 278.01-2.094 5.977-4.496 11.044-7.068 14.968-17.29 26.383-62.522 40.075-101.654 28.596 5.984-19.75 10.132-39.834 12.07-59.12-95.46 8.177-212.544 8.42-301.207-22.642 41.727 95.317 99.325 164.465 164.983 230.08 18.296-2.164 35.807-11.35 51.837-25.37 85.218 34.667 188.066-2.555 226.748-60.68 46.922-70.5 74.07-317.52-167.462-383.856H232.81c160.326 54.874 195.73 167.74 191.573 239.03-37.15-93.627-137.68-191.855-312.38-239.03H19.83z"></path></g>`,
                  viewBox: '0 0 512 512'
                },
                className: 'enter'
              },
              3: {
                icon: 'close',
                className: 'rejected'
              },
              4: {
                icon: {
                  icon: `<g  >
                        <path opacity="1" d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/>
                    </g>`,
                  viewBox: '0 0 320 512'
                },
                className: 'enter'
              }
            };
            const format = 'DD/MM/YYYY HH:mm';
            const startDate = item.startDate ? (0, _dayjs.default)(item.startDate).format(format) : 'SIN VALOR';
            const endDate = item.endDate ? (0, _dayjs.default)(item.endDate?.slice(0, 19)?.replace('T', ' ')).format(format) : 'SIN VALOR';
            return _react.default.createElement("div", {
              className: "item-list"
            }, _react.default.createElement("span", null, startDate), _react.default.createElement("span", null, endDate), _react.default.createElement("span", null, getText(item?.task?.description)), _react.default.createElement("span", null, getText(item.user?.username)), _react.default.createElement("span", {
              className: "icons-historical"
            }, _react.default.createElement("span", {
              ref: ref
            }, item?.actionId && _react.default.createElement(_icons.Icon, {
              ...icons[item.actionId]
            }))));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/historical/use-tooltip
      **********************************************/

      ims.set('./views/historical/use-tooltip', {
        hash: 2734787028,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTooltip = useTooltip;
          var _react = require("react");
          var _tippy = require("tippy.js");
          function useTooltip({
            data
          }) {
            const refTippy = _react.default.useRef(null);
            const tooltipInstance = _react.default.useRef(null);
            _react.default.useEffect(() => {
              if (!data) {
                if (tooltipInstance.current?.destroy && typeof tooltipInstance.current?.destroy === "function") tooltipInstance.current?.destroy();
                tooltipInstance.current = null;
                return;
              }
              const tooltipContent = data;
              if (tooltipInstance.current && typeof tooltipInstance.current.setContent === 'function') {
                tooltipInstance.current.setContent(`<span style="font-size: 12px">${tooltipContent}</span>`);
              } else {
                tooltipInstance.current = (0, _tippy.default)(refTippy.current, {
                  content: `<span style="font-size: 12px">${tooltipContent}</span>`,
                  allowHTML: true
                });
              }
            }, [data]);
            return [refTippy];
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 588773451,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TaskInstancesMonitor = TaskInstancesMonitor;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _loadingPage = require("@bgroup/jview/loading-page");
          var _context = require("./context");
          var _jview = require("./jview");
          var _wrappers = require("sgs-workflow/wrappers");
          var _requestForm = require("./request-form");
          var _useSession = require("./use-session");
          var _bottomPanel = require("./bottom-panel");
          var _saveSuccess = require("./request-form/save-success");
          var _errorModal = require("./error-modal");
          /*bundle*/
          function TaskInstancesMonitor({
            isTacks,
            widget,
            manager
          }) {
            const [upd, setUpdate] = React.useState({});
            const [requestForm, setRequestForm] = React.useState(manager.formManager.displayRequestForm);
            const [confirm, setConfirm] = React.useState(false);
            const handleConfirm = () => setConfirm(!confirm);
            const {
              setPicked,
              picked,
              setDateRange,
              dateRange,
              initialState
            } = (0, _useSession.useSession)(manager);
            (0, _hooks.useBinder)([manager.instances, manager, manager.comments, manager.filters, _wrappers.appWrapper, manager.formManager], () => {
              setUpdate({});
              setRequestForm(manager.formManager.displayRequestForm);
            });
            React.useEffect(() => {
              if (!manager.instances.params.startDate && !manager.instances.params.expirationDate) {
                setDateRange({
                  ...initialState
                });
                return;
              }
              if (!manager.instances.params.startDate) setDateRange({
                ...dateRange,
                startDate: initialState.startDate
              });
              if (!manager.instances.params.expirationDate) setDateRange({
                ...dateRange,
                expirationDate: initialState.expirationDate
              });
            }, [manager.instances.params.startDate, manager.instances.params.expirationDate]);
            if (!manager.ready) return React.createElement(_loadingPage.LoadingPage, null);
            const cls = `page__container page__container--dashboard container__page ${isTacks ? '' : 'page-tasks'}`;
            const value = {
              confirm,
              handleConfirm,
              manager,
              isTacks,
              setPicked,
              picked,
              dateRange,
              setDateRange,
              initialState,
              widget,
              requestForm,
              setRequestForm
            };
            return React.createElement(_context.HomeContext.Provider, {
              value: value
            }, React.createElement("main", {
              className: cls
            }, React.createElement(_jview.Table, null), React.createElement(_bottomPanel.BottomPanel, null), React.createElement(_requestForm.RequestForm, null), React.createElement(_saveSuccess.SavedSuccess, null), React.createElement(_errorModal.ErrorModal, null)));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/indicators/container
      ********************************************/

      ims.set('./views/indicators/container', {
        hash: 1378821041,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.IndicatorsContainer = void 0;
          var _react = require("react");
          var _item = require("./item");
          var _list = require("../list");
          var _context = require("../context");
          const IndicatorsContainer = () => {
            const {
              manager
            } = (0, _context.useHomeContext)();
            const headerPercent = [{
              label: 'Nombre'
            }, {
              label: 'Valor'
            }, {
              label: 'Porcentaje'
            }, {
              label: ''
            }];
            const items = manager.indicatorsItems;
            const leftItems = items.filter(item => item.group === 'Izquierda');
            const rightItems = items.filter(item => item.group === 'Derecha');
            return _react.default.createElement("div", {
              className: "list-percent"
            }, _react.default.createElement("header", {
              className: 'content-header'
            }, _react.default.createElement("h5", null, "Indicadores")), _react.default.createElement("div", {
              className: 'container-indicators'
            }, _react.default.createElement(_list.List, {
              className: "list-indicators",
              items: leftItems,
              header: {
                items: headerPercent
              },
              item: _item.IndicatorItem,
              title: "",
              bgHeader: false
            }), _react.default.createElement(_list.List, {
              className: "list-indicators",
              items: rightItems,
              item: _item.IndicatorItem,
              header: {
                items: headerPercent
              },
              title: "",
              bgHeader: false
            })));
          };
          exports.IndicatorsContainer = IndicatorsContainer;
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/indicators/item
      ***************************************/

      ims.set('./views/indicators/item', {
        hash: 973409602,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.IndicatorItem = void 0;
          var _react = require("react");
          var _dinamycForm = require("sgs-workflow/components/dinamyc-form");
          const COLORS = {
            0: 'green',
            1: 'yellow',
            2: 'red',
            9: 'grey'
          };
          const IndicatorItem = ({
            item
          }) => {
            const getText = value => value ?? 'Sin valor';
            const colorCls = COLORS[item.color] ? COLORS[item.color] : 'gray';
            return _react.default.createElement("div", {
              className: "item-list"
            }, _react.default.createElement("span", null, getText(item.description)), _react.default.createElement("span", {
              className: "number-value"
            }, getText(item.value)), _react.default.createElement("span", {
              className: "number-value"
            }, getText(item.percentage)), _react.default.createElement("span", {
              className: "indicator"
            }, _react.default.createElement(_dinamycForm.TrafficLight, {
              color: colorCls
            })));
          };
          exports.IndicatorItem = IndicatorItem;
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/interface/index
      ***************************************/

      ims.set('./views/interface/index', {
        hash: 1737169885,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          ;
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/jview/header/dates
      ******************************************/

      ims.set('./views/jview/header/dates', {
        hash: 1179652887,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Dates = Dates;
          var React = require("react");
          var _inputDate = require("sgs-workflow/input-date");
          var _context = require("../../context");
          function Dates() {
            const {
              manager,
              setPicked,
              picked,
              dateRange,
              setDateRange,
              initialState
            } = (0, _context.useHomeContext)();
            const onFilter = async params => {
              await manager.instances.filter({
                name: params.name,
                value: [params.fromDate, params.toDate],
                op: "between"
              });
              setDateRange({
                ...dateRange,
                [params.name]: {
                  fromDate: params.fromDate,
                  toDate: params.toDate
                }
              });
              picked.clear();
              setPicked(picked);
            };
            return React.createElement(React.Fragment, null, React.createElement("th", null, React.createElement("div", {
              className: "column-select"
            }, React.createElement("span", {
              className: "arrow-order"
            }, "Inicio"), React.createElement(_inputDate.InputDate, {
              onFilter: onFilter,
              name: "startDate",
              dates: dateRange.startDate
            }))), React.createElement("th", {
              className: "th-dates"
            }, React.createElement("div", {
              className: "column-with-clear"
            }, React.createElement("div", {
              className: "column-select"
            }, React.createElement("span", {
              className: "arrow-order"
            }, "Vencimiento"), React.createElement(_inputDate.InputDate, {
              onFilter: onFilter,
              name: "expirationDate",
              dates: dateRange.expirationDate
            })))));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/jview/header/equal-arrs
      ***********************************************/

      ims.set('./views/jview/header/equal-arrs', {
        hash: 376975425,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.equalArs = equalArs;
          function equalObj(obj1, obj2) {
            for (let key in obj1) {
              if (obj1.hasOwnProperty(key) !== obj2.hasOwnProperty(key)) {
                return false;
              }
              if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
                if (!equalObj(obj1[key], obj2[key])) {
                  return false;
                }
              } else if (obj1[key] !== obj2[key]) {
                return false;
              }
            }
            for (let key in obj2) {
              if (obj1.hasOwnProperty(key) !== obj2.hasOwnProperty(key)) {
                return false;
              }
            }
            return true;
          }
          function equalArs(arr1, arr2) {
            if (arr1.length !== arr2.length) {
              return false;
            }
            for (let i = 0; i < arr1.length; i++) {
              if (!equalObj(arr1[i], arr2[i])) {
                return false;
              }
            }
            return true;
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/jview/header/icon-filter
      ************************************************/

      ims.set('./views/jview/header/icon-filter', {
        hash: 368768348,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.iconFilter = void 0;
          const iconFilter = exports.iconFilter = {
            icon: `<g>
    <path id="Unión_2" data-name="Unión 2" d="M9.465,16a.679.679,0,0,1-.511-.216L6.046,12.875a.7.7,0,0,1-.216-.511V6.841l-5.6-5.6a.658.658,0,0,1-.159-.8A.681.681,0,0,1,.739,0H15.284a.681.681,0,0,1,.671.443.779.779,0,0,1,.066.368C15.892.8,15.759.8,15.622.8a7.211,7.211,0,0,0-5.429,11.955v2.516a.681.681,0,0,1-.443.671A.784.784,0,0,1,9.465,16Z" transform="translate(0 0)" />
    <path id="Exclusión_1" data-name="Exclusión 1" d="M5.5,11A5.5,5.5,0,1,1,11,5.5,5.508,5.508,0,0,1,5.5,11Zm0-4.829h0L6.986,7.654a.459.459,0,0,0,.324.135.448.448,0,0,0,.322-.135.442.442,0,0,0,.133-.319.449.449,0,0,0-.133-.328L6.148,5.518,7.676,3.985a.442.442,0,0,0,.133-.319.449.449,0,0,0-.133-.328.454.454,0,0,0-.322-.132.465.465,0,0,0-.324.132L5.5,4.871,3.973,3.339a.458.458,0,0,0-.781.328.452.452,0,0,0,.135.319L4.855,5.518,3.369,7.008a.459.459,0,0,0-.135.328.457.457,0,0,0,.781.319L5.5,6.169Z" transform="translate(9.998 2.501)" />
  </g>
  `,
            viewBox: '0 0 21 16'
          };
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/jview/header/index
      ******************************************/

      ims.set('./views/jview/header/index', {
        hash: 929644460,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var React = require("react");
          var _select = require("./select");
          var _context = require("../../context");
          var _form = require("pragmate-ui/form");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _options = require("./options");
          var _dates = require("./dates");
          var _iconFilter = require("./icon-filter");
          var _icons = require("pragmate-ui/icons");
          var _ripple = require("pragmate-ui/ripple");
          var _tippy = require("tippy.js");
          function Header() {
            const {
              manager,
              isTacks,
              setPicked,
              picked,
              setDateRange,
              initialState
            } = (0, _context.useHomeContext)();
            const [count, setCount] = React.useState({});
            (0, _hooks.useBinder)([manager.instances, manager, manager.comments], () => setCount({}));
            const buttonRef = React.useRef(null);
            React.useEffect(() => {
              const ripple = new _ripple.RippleEffect();
              ripple.addRippleEffect(buttonRef.current);
              (0, _tippy.default)(buttonRef.current, {
                content: 'Limpiar filtros'
              });
            }, []);
            const columns = isTacks ? (0, _options.columnWidthSelect)(manager) : (0, _options.columnsMonitorAndInstances)(manager);
            const output = columns.map(item => {
              return React.createElement(_select.SelectColumn, {
                item: item,
                key: item.label
              });
            });
            const isSelectedAll = manager.instances.items.filter(item => picked.has(item.id)).length === manager.instances.items.length && !!manager.instances.items.length;
            const handleChange = event => {
              event.stopPropagation();
              const {
                checked
              } = event.currentTarget;
              if (checked) {
                manager.instances.items.forEach(item => {
                  if (picked.has(item.id)) {
                    picked.set(item.id, item);
                  } else {
                    picked.set(item.id, item);
                  }
                });
              } else {
                manager.instances.items.forEach(item => {
                  picked.delete(item.id);
                });
              }
              setPicked(picked);
              manager.selectAll(event);
            };
            const disabled = manager.instances.fetching || manager.fetching || manager.comments.fetching || !manager.instances.items.length;
            const onClear = () => {
              setDateRange(initialState);
              manager.instances.load();
            };
            return React.createElement(React.Fragment, null, React.createElement("th", {
              className: 'td-check'
            }, React.createElement("div", {
              className: 'select-all'
            }, React.createElement("div", {
              className: 'check-all'
            }, isTacks && React.createElement(_form.Checkbox, {
              checked: isSelectedAll,
              onChange: handleChange,
              name: 'select-all',
              disabled: disabled
            }), React.createElement("span", {
              ref: buttonRef
            }, React.createElement(_icons.IconButton, {
              disabled: !manager.instances.isFiltering,
              ..._iconFilter.iconFilter,
              className: 'filter-button ',
              onClick: onClear
            }))))), output, React.createElement(_dates.Dates, null));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/jview/header/options
      ********************************************/

      ims.set('./views/jview/header/options', {
        hash: 2134008982,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.columnsMonitorAndInstances = exports.columnWidthSelect = void 0;
          const order = (a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          };
          const processOptions = (arr, value, label) => {
            const defaultArr = [{
              id: undefined,
              name: ""
            }];
            if (!arr || !Array.isArray(arr)) return defaultArr;
            const arrOrdered = arr.sort(order);
            return defaultArr.concat(arrOrdered).map(item => {
              return {
                value: item[value],
                label: item[label]
              };
            });
          };
          const columnWidthSelect = manager => [{
            label: "Proceso",
            options: processOptions(manager.processItems, "id", "description"),
            name: "processId"
          }, {
            label: "Solicitud",
            name: "request"
          }, {
            label: "Descripción",
            name: "description"
          }, {
            label: "Tarea",
            options: processOptions(manager.taskItems, "id", "description"),
            name: "taskId"
          }, {
            label: "Creado por",
            name: "creatorUser"
          }, {
            label: "Área",
            options: processOptions(manager.areaItems, "id", "name"),
            name: "areaId"
          }];
          exports.columnWidthSelect = columnWidthSelect;
          const columnsMonitorAndInstances = manager => [{
            label: "Proceso",
            options: processOptions(manager.processItems, "id", "description"),
            name: "processId"
          }, {
            label: "Solicitud",
            name: "request"
          }, {
            label: "Descripción",
            name: "description"
          }, {
            label: "Tarea",
            options: processOptions(manager.taskItems, "id", "description"),
            name: "taskId"
          }, {
            label: "Estado",
            options: processOptions(manager.tasksStatesItems, "id", "name"),
            name: "taskStateId"
          }, {
            label: "Creado por",
            name: "creatorUser"
          }, {
            label: "Asignado A",
            name: "assignedUser"
          }, {
            label: "Área",
            options: processOptions(manager.areaItems, "id", "name"),
            name: "areaId"
          }];
          exports.columnsMonitorAndInstances = columnsMonitorAndInstances;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/jview/header/select
      *******************************************/

      ims.set('./views/jview/header/select', {
        hash: 3579079038,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SelectColumn = SelectColumn;
          var _react = require("react");
          var _inputFilter = require("sgs-workflow/input-filter");
          var _context = require("../../context");
          var _select = require("sgs-workflow/select");
          function SelectColumn({
            item
          }) {
            const {
              manager,
              picked,
              setPicked,
              widget
            } = (0, _context.useHomeContext)();
            const criterias = [{
              value: '',
              label: 'Sin filtro'
            }, {
              value: 'like',
              label: 'Contiene'
            }, {
              value: 'eq',
              label: 'Igual'
            }, {
              value: 'gt',
              label: 'Mayor'
            }, {
              value: 'lt',
              label: 'Menor'
            }, {
              value: 'gte',
              label: 'Mayor o Igual'
            }, {
              value: 'lte',
              label: 'Menor o igual'
            }];
            const isSelect = !!item.options;
            const onFilter = async ({
              target
            }) => {
              manager.instances.filter({
                name: item.name,
                value: target.value
              });
              picked.clear();
              setPicked(picked);
            };
            const onFilterInput = async params => {
              await manager.instances.filter(params);
              picked.clear();
              setPicked(picked);
            };
            const valueParams = manager.instances.params[item.name];
            const value = isSelect ? item.options.find(item => item.value === valueParams) : valueParams?.value;
            const valueProcess = item.name === "processId" ? typeof value?.value === "number" ? value : "" : value;
            const customNoOptionsMessage = () => {
              return 'No hay opciones';
            };
            return _react.default.createElement("th", null, _react.default.createElement("div", {
              className: 'column-select'
            }, _react.default.createElement("span", {
              className: 'arrow-order'
            }, item.label), isSelect ? _react.default.createElement(_select.Select, {
              classNamePrefix: 'sgs-react-select',
              noOptionsMessage: customNoOptionsMessage,
              widget: widget,
              options: item.options,
              onChange: onFilter,
              placeholder: ' ',
              value: valueProcess,
              name: item.name
            }) : _react.default.createElement("div", null, _react.default.createElement(_inputFilter.SearchInputFilter, {
              placeholder: ' ',
              listOptions: criterias,
              name: item.name,
              onFilter: onFilterInput,
              value: value,
              selectValue: value?.op
            }))));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/jview/index
      ***********************************/

      ims.set('./views/jview/index', {
        hash: 2433007965,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Table = Table;
          var React = require("react");
          var _jview = require("@bgroup/jview/jview");
          var _context = require("../context");
          var _item = require("./item");
          var _buttons = require("../buttons");
          var _header = require("./header");
          function Table() {
            const {
              manager
            } = (0, _context.useHomeContext)();
            const value = {
              entries: manager.instances.items,
              currentPage: manager.instances.currentPage,
              rows: manager.instances.limit,
              total: manager.instances.collection.total,
              pagerNext: true,
              onNext: manager.instances.navigation,
              onPrev: manager.instances.navigation,
              loading: manager.fetching || manager.comments.fetching || manager.instances.fetching,
              item: _item.ItemTable,
              header: React.createElement(_header.Header, null),
              showSelect: true,
              load: manager.changeEntries,
              optionsChangeRows: [4, 10, 20, 50],
              isVisibleHeader: true,
              className: 'instances-jview'
            };
            return React.createElement("div", {
              className: "dashboard-top-section"
            }, React.createElement("div", null, React.createElement(_buttons.Buttons, null)), React.createElement("div", {
              className: "container-buttons-jview"
            }, React.createElement(_jview.JView, {
              ...value
            })));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/jview/item/check
      ****************************************/

      ims.set('./views/jview/item/check', {
        hash: 2246803890,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Check = Check;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _context = require("../../context");
          function Check({
            item
          }) {
            const {
              isTacks,
              picked,
              manager,
              setPicked
            } = (0, _context.useHomeContext)();
            if (!isTacks || item.isReturned) return null;
            const isSelected = picked.has(item.id);
            const handleChange = event => {
              event.stopPropagation();
              manager.handleChangeChecked(event);
              if (picked.has(item.id)) {
                picked.delete(item.id);
              } else {
                picked.set(item.id, item);
                setPicked(picked);
                return;
              }
              setPicked(picked);
            };
            const handleClick = event => event.stopPropagation();
            return _react.default.createElement(_form.Checkbox, {
              name: item.id,
              checked: isSelected,
              onChange: handleChange,
              onClick: handleClick
            });
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/jview/item/index
      ****************************************/

      ims.set('./views/jview/item/index', {
        hash: 3560784595,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemTable = ItemTable;
          var _react = require("react");
          var _context = require("../../context");
          var _check = require("./check");
          var _useTooltip = require("./use-tooltip");
          var _loadInstance = require("../../load-instance");
          function ItemTable({
            item
          }) {
            const {
              manager,
              isTacks,
              picked,
              setRequestForm
            } = (0, _context.useHomeContext)();
            const isSelected = picked.has(item.id);
            let assingedUsers = {};
            if (item.assignedRol && item.taskState !== 'Finalizado' && item.taskId !== 57) item.assignedUsers.forEach(record => assingedUsers[record.userId] = record);
            const [refTippy] = (0, _useTooltip.useTooltip)({
              data: Object.values(assingedUsers)
            });
            const getText = value => value ?? '';
            const [show, setShow] = _react.default.useState(false);
            let cls = `${isSelected ? 'picked' : ''}`;
            cls += ` ${manager.selected.id === item.id ? 'selected' : ''}`;
            const handleMagnifier = event => {
              event.stopPropagation();
              manager.formManager.loadInstance(item.id);
            };
            const handleMouseOver = () => setShow(true);
            const handleMouseLeave = () => setShow(false);
            const clsIcon = `${show ? 'show-glass' : 'hide-glass'}`;
            const isApplicationEntry = item.taskId === 57 || item.taskId === 1111;
            let assigned = getText(item.assignedRol ?? 'Sin Asignar');
            if (item.taskState === 'Finalizado' || item.taskId === 57) {
              assigned = 'Sin Asignar';
            }
            return _react.default.createElement("tr", {
              className: cls,
              "data-id": item.id,
              onClick: manager.selectClick,
              onMouseOver: handleMouseOver,
              onMouseLeave: handleMouseLeave
            }, _react.default.createElement("td", {
              className: " td-check"
            }, _react.default.createElement("div", {
              className: "check-item"
            }, isTacks && (!isApplicationEntry ? _react.default.createElement(_check.Check, {
              item: item
            }) : _react.default.createElement("div", {
              className: "check-placeholder"
            })), _react.default.createElement(_loadInstance.LoadInstance, {
              className: clsIcon,
              instanceId: item.id,
              taskId: item.taskId,
              processId: item.processId
            }))), _react.default.createElement("td", {
              translate: "no",
              className: "td-items"
            }, _react.default.createElement("span", null, getText(item.process.name))), _react.default.createElement("td", {
              translate: "no",
              className: "td-items"
            }, _react.default.createElement("span", null, getText(item.request))), _react.default.createElement("td", {
              translate: "no",
              className: "td-items"
            }, _react.default.createElement("span", null, getText(item.description))), _react.default.createElement("td", {
              className: "td-items"
            }, _react.default.createElement("span", null, getText(item?.task?.name))), !isTacks && _react.default.createElement("td", {
              className: "td-items"
            }, _react.default.createElement("span", null, getText(item.taskState))), _react.default.createElement("td", {
              className: "td-items"
            }, _react.default.createElement("span", null, getText(item?.creatorUser?.username))), !isTacks && _react.default.createElement("td", {
              className: "td-items"
            }, _react.default.createElement("span", {
              ref: refTippy
            }, assigned)), _react.default.createElement("td", {
              className: "td-items"
            }, _react.default.createElement("span", null, getText(item.area?.name))), _react.default.createElement("td", {
              className: "td-items"
            }, _react.default.createElement("span", null, getText(item.startDate))), _react.default.createElement("td", {
              className: "td-items"
            }, _react.default.createElement("span", null, getText(item.expiration))));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/jview/item/use-tooltip
      **********************************************/

      ims.set('./views/jview/item/use-tooltip', {
        hash: 1643175608,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTooltip = useTooltip;
          var _react = require("react");
          var _tippy = require("tippy.js");
          function useTooltip({
            data
          }) {
            const refTippy = _react.default.useRef(null);
            const tooltipInstance = _react.default.useRef(null);
            _react.default.useEffect(() => {
              if (!data || !Array.isArray(data) || data?.length === 0) {
                if (tooltipInstance.current?.destroy && typeof tooltipInstance.current?.destroy === "function") {
                  tooltipInstance.current?.destroy();
                }
                tooltipInstance.current = null;
                return;
              }
              const tooltipContent = data ? data.map(user => user.username).join("<br />") : "";
              if (tooltipInstance.current && typeof tooltipInstance.current.setContent === "function") {
                tooltipInstance.current.setContent(`<span style="font-size: 12px">${tooltipContent}</span>`);
              } else if (refTippy.current) {
                // Asegúrate de que refTippy.current no sea null
                tooltipInstance.current = (0, _tippy.default)(refTippy.current, {
                  content: `<span style="font-size: 12px">${tooltipContent}</span>`,
                  allowHTML: true
                });
              }
            }, [data]);
            return [refTippy];
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/list/header
      ***********************************/

      ims.set('./views/list/header', {
        hash: 1988349172,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _uuid = require("uuid");
          function Header({
            items,
            className
          }) {
            if (!items && !Array.isArray(items)) return null;
            const output = items.map(item => {
              return _react.default.createElement("span", {
                translate: "no",
                key: (0, _uuid.v4)()
              }, item.label);
            });
            const cls = `${className ?? ""} list-header`;
            return _react.default.createElement("div", {
              translate: "no",
              className: cls
            }, output);
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/list/index
      **********************************/

      ims.set('./views/list/index', {
        hash: 1875115271,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var _react = require("react");
          var _header = require("./header");
          var _item = require("./item");
          var _uuid = require("uuid");
          var _empty = require("../empty");
          function List({
            header,
            items,
            title,
            item,
            className,
            bgHeader
          }) {
            const Item = item ?? _item.ItemList;
            const output = Array.isArray(items) ? items.map(item => {
              return _react.default.createElement(Item, {
                item: item,
                key: (0, _uuid.v4)()
              });
            }) : [];
            const cls = `${bgHeader && "content-header"}`;
            return _react.default.createElement("div", {
              className: `list-items ${className}`
            }, _react.default.createElement("header", {
              translate: "no",
              className: cls
            }, title && _react.default.createElement("h5", {
              translate: "no"
            }, title)), _react.default.createElement("div", {
              className: 'content-items-header'
            }, _react.default.createElement(_header.Header, {
              ...header
            }), _react.default.createElement("div", {
              className: "list-entries"
            }, output.length ? output : _react.default.createElement(_empty.Empty, null))));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/list/item
      *********************************/

      ims.set('./views/list/item', {
        hash: 2096976086,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemList = ItemList;
          var _react = require("react");
          var _uuid = require("uuid");
          function ItemList({
            item
          }) {
            const entries = item.keys.map(key => {
              if (key === 'status') {
                const statuses = {
                  1: 'inactive',
                  2: 'active'
                };
                const cls = `status ${statuses[item.status]}`;
                return _react.default.createElement("span", {
                  translate: "no",
                  key: (0, _uuid.v4)(),
                  className: cls
                });
              }
              return _react.default.createElement("span", {
                translate: "no",
                key: (0, _uuid.v4)()
              }, item[key]);
            });
            return _react.default.createElement("div", {
              translate: "no",
              className: "item-list"
            }, entries);
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/load-instance
      *************************************/

      ims.set('./views/load-instance', {
        hash: 1744492880,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LoadInstance = LoadInstance;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("./context");
          var _icons2 = require("./buttons/icons");
          /*bundle*/
          function LoadInstance({
            instanceId,
            className,
            taskId,
            processId,
            ...props
          }) {
            const {
              manager
            } = (0, _context.useHomeContext)();
            if (!instanceId || processId === 20 && manager.view === "monitor") return null;
            const handleMagnifier = event => {
              event.stopPropagation();
              if (processId === 20) return;
              manager.formManager.loadInstance({
                id: instanceId,
                taskId,
                processId
              });
            };
            return _react.default.createElement(_icons.Icon, {
              onClick: handleMagnifier,
              icon: _icons2.icons['magnifying-glass'],
              className: className
            });
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/new-request/index
      *****************************************/

      ims.set('./views/new-request/index', {
        hash: 1956296093,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NewRequest = NewRequest;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("../buttons/icons");
          var _modal = require("./modal");
          function NewRequest() {
            const [show, setShow] = _react.default.useState(false);
            const handleModal = () => setShow(!show);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_components.Button, {
              translate: "no",
              variant: 'primary',
              className: 'reversed',
              icon: _icons.icons.add,
              onClick: handleModal
            }, "Crear Solicitud"), _react.default.createElement(_modal.ModalNewRequest, {
              handleModal: handleModal,
              show: show
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/new-request/modal
      *****************************************/

      ims.set('./views/new-request/modal', {
        hash: 2923405820,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalNewRequest = ModalNewRequest;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../context");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _select = require("sgs-workflow/select");
          var _wrappers = require("sgs-workflow/wrappers");
          function ModalNewRequest({
            show,
            handleModal
          }) {
            const {
              manager,
              widget
            } = (0, _context.useHomeContext)();
            const [selectedProcessId, setSelectedProcessId] = _react.default.useState(manager.selectedProcessId);
            (0, _react.useEffect)(() => {
              if (!show) setSelectedProcessId(undefined);
            }, [show]);
            if (!show) return null;
            let options = _wrappers.appWrapper.processAvailable;
            options = options.filter(option => _wrappers.session.processApplicant.some(opt => option.value === opt.processId && !option.onlyFilterInbox));
            const handleChange = ({
              target: {
                value
              }
            }) => setSelectedProcessId(value);
            const onSubmit = async () => {
              manager.selectedProcessId = selectedProcessId;
              handleModal();
              manager.formManager.load({
                processId: selectedProcessId
              });
            };
            const disabled = !selectedProcessId || manager.fetching;
            const value = options.find(item => item.value === selectedProcessId);
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "beauty-modal new-request modal-sgs",
              onClose: handleModal
            }, _react.default.createElement(_form.Form, {
              className: "form-request",
              onSubmit: onSubmit
            }, _react.default.createElement("h3", {
              className: "modal-title"
            }, "Seleccione el workflow"), _react.default.createElement(_select.Select, {
              onChange: handleChange,
              options: options,
              value: value,
              placeholder: "Seleccione el workflow"
            }), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              type: "submit",
              label: "Abrir",
              variant: "primary",
              disabled: disabled
            }), _react.default.createElement(_components.Button, {
              type: "reset",
              label: "Cerrar",
              variant: "secondary",
              disabled: manager.fetching,
              onClick: handleModal
            }))));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/request-form/actions
      ********************************************/

      ims.set('./views/request-form/actions', {
        hash: 2321554774,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Actions = void 0;
          var _react = require("react");
          var _context = require("../context");
          var _actions = require("./forms-TEMPORAL/alta-material/actions");
          var _actions2 = require("./forms-TEMPORAL/factibilidad/actions");
          const Actions = ({
            onClose
          }) => {
            const {
              manager
            } = (0, _context.useHomeContext)();
            const Content = manager.formManager.data?.name === 'Alta de Material' ? _actions.MaterialActions : _actions2.FactibilityActions;
            return _react.default.createElement("div", {
              className: "right"
            }, _react.default.createElement(Content, {
              onClose: onClose
            }));
          };
          exports.Actions = Actions;
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/request-form/context
      ********************************************/

      ims.set('./views/request-form/context', {
        hash: 3511870721,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useRequestFormContext = exports.RequestFormContext = void 0;
          var _react = require("react");
          const RequestFormContext = exports.RequestFormContext = _react.default.createContext({});
          const useRequestFormContext = () => _react.default.useContext(RequestFormContext);
          exports.useRequestFormContext = useRequestFormContext;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/request-form/fetching
      *********************************************/

      ims.set('./views/request-form/fetching', {
        hash: 2718207917,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Fetching = Fetching;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function Fetching({
            instanciatedForm
          }) {
            const {
              manager
            } = (0, _context.useHomeContext)();
            const [update, setUpdate] = (0, _react.useState)({});
            const [fetching, setFetching] = (0, _react.useState)(manager.formManager.fetching);
            (0, _hooks.useBinder)([manager.formManager, manager, instanciatedForm], () => {
              setUpdate({});
              setFetching(manager.formManager.fetching || instanciatedForm.fetching);
            });
            if (!fetching) return null;
            return _react.default.createElement("div", {
              className: 'fetching-form'
            }, _react.default.createElement("div", {
              className: 'fetching-content'
            }, _react.default.createElement(_components.Spinner, {
              type: "primary",
              active: true
            })));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/request-form/form-content
      *************************************************/

      ims.set('./views/request-form/form-content', {
        hash: 2334670282,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormContent = void 0;
          var _react = require("react");
          var _context = require("../context");
          var _header = require("./header");
          var _form = require("@bgroup/wise-form/form");
          var _types = require("./types");
          var _useTabTrapper = require("./use-tab-trapper");
          var _actions = require("./forms-TEMPORAL/alta-material/actions");
          var _actions2 = require("./forms-TEMPORAL/factibilidad/actions");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _actions3 = require("./forms-TEMPORAL/produccion/actions");
          var _fetching = require("./fetching");
          const FormContent = exports.FormContent = (0, _react.memo)(({
            item,
            fetching
          }) => {
            const {
              requestForm,
              instanciatedForm,
              data
            } = item;
            const {
              manager
            } = (0, _context.useHomeContext)();
            const modalRef = _react.default.useRef(null);
            const [form, setForm] = _react.default.useState(data);
            (0, _useTabTrapper.useTabTrapper)(modalRef, [requestForm.show, form]);
            (0, _hooks.useBinder)([manager], () => setForm(data));
            _react.default.useEffect(() => {
              if (!modalRef.current || !form) return;
              modalRef.current.focus();
            }, [requestForm.show, modalRef, form]);
            if (!requestForm.show || !form) return null;
            const onClose = () => manager.formManager.reset();
            const actions = {
              "Alta de Material": _actions.MaterialActions,
              Produccion: _actions3.ProductionActions,
              Factiblidad: _actions2.FactibilityActions
            };
            const ActionContent = actions[form.name] ?? null;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "general-container",
              ref: modalRef,
              "aria-modal": "true",
              role: "dialog",
              tabIndex: -1
            }, _react.default.createElement(_header.Header, null), _react.default.createElement("div", {
              className: "form-instances"
            }, _react.default.createElement("div", {
              className: "form"
            }, _react.default.createElement(_form.WiseForm, {
              types: _types.types,
              model: instanciatedForm
            }))), _react.default.createElement(_fetching.Fetching, {
              instanciatedForm: instanciatedForm
            })));
          });
        }
      });

      /*************************************************************************
      INTERNAL MODULE: ./views/request-form/forms-TEMPORAL/alta-material/actions
      *************************************************************************/

      ims.set('./views/request-form/forms-TEMPORAL/alta-material/actions', {
        hash: 518017589,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MaterialActions = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          const MaterialActions = ({
            onClose
          }) => {
            return null;
            return _react.default.createElement("div", {
              className: "rf-fields-container"
            }, _react.default.createElement(_components.Button, {
              className: "form-button",
              variant: "primary"
            }, "Guardar"), _react.default.createElement(_components.Button, {
              className: "form-button",
              variant: "primary"
            }, "Aceptar"), _react.default.createElement(_components.Button, {
              className: "form-button",
              variant: "secondary",
              "data-last-item": "true",
              onClick: onClose
            }, "Cancelar"));
          };
          exports.MaterialActions = MaterialActions;
        }
      });

      /************************************************************************
      INTERNAL MODULE: ./views/request-form/forms-TEMPORAL/factibilidad/actions
      ************************************************************************/

      ims.set('./views/request-form/forms-TEMPORAL/factibilidad/actions', {
        hash: 4082950234,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FactibilityActions = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../../../context");
          //
          const FactibilityActions = ({
            onClose
          }) => {
            const {
              manager
            } = (0, _context.useHomeContext)();
            const save = async () => {
              await manager.formManager?.instanciatedForm?.onSubmit();
              manager.formManager.reset();
              onClose();
              manager.instances.load();
            };
            return null;
            return _react.default.createElement("div", {
              className: "rf-fields-container"
            }, _react.default.createElement(_components.Button, {
              className: "form-button",
              variant: "primary"
            }, "Derivar"), _react.default.createElement(_components.Button, {
              className: "form-button",
              variant: "primary",
              type: "submit",
              onClick: save
            }, "Guardar"), _react.default.createElement(_components.Button, {
              className: "form-button",
              variant: "primary"
            }, "Aceptar"), _react.default.createElement(_components.Button, {
              className: "form-button",
              variant: "secondary",
              "data-last-item": "true",
              onClick: onClose
            }, "Cancelar"));
          };
          // {
          // 			type: 'wrapper',
          // 			control: 'div',
          // 			className: 'right',
          // 			template: [],
          // 			items: {
          // 				name: 'Title data',
          // 				template: [[4, 'repeat(3, 1fr)']],
          // 				fields: [
          // 					{
          // 						type: 'button',
          // 						className: 'form-button',
          // 						variant: 'primary',
          // 						label: 'Derivar',
          // 					},
          // 					{
          // 						className: 'form-button',
          // 						variant: 'primary',
          // 						label: 'Guardar',
          // 						type: 'submit',
          // 					},
          // 					{
          // 						type: 'button',
          // 						className: 'form-button',
          // 						variant: 'primary',
          // 						label: 'Aceptar',
          // 					},
          // 					{
          // 						'data-last-item': 'true',
          // 						type: 'button',
          // 						className: 'form-button',
          // 						variant: 'secondary',
          // 						label: 'Cancelar',
          // 					},
          // 				],
          // 			},
          // 		},
          exports.FactibilityActions = FactibilityActions;
        }
      });

      /**********************************************************************
      INTERNAL MODULE: ./views/request-form/forms-TEMPORAL/produccion/actions
      **********************************************************************/

      ims.set('./views/request-form/forms-TEMPORAL/produccion/actions', {
        hash: 3578063092,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProductionActions = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../../../context");
          const ProductionActions = ({
            onClose
          }) => {
            const {
              manager
            } = (0, _context.useHomeContext)();
            return _react.default.createElement("div", {
              className: "rf-fields-container"
            }, _react.default.createElement(_components.Button, {
              className: "form-button",
              variant: "primary",
              type: "submit"
            }, "Guardar"), _react.default.createElement(_components.Button, {
              className: "form-button",
              variant: "primary"
            }, "Aceptar"), _react.default.createElement(_components.Button, {
              className: "form-button",
              variant: "secondary",
              "data-last-item": "true",
              onClick: onClose
            }, "Cancelar"));
          };
          exports.ProductionActions = ProductionActions;
        }
      });

      /*************************************************************************
      INTERNAL MODULE: ./views/request-form/forms-TEMPORAL/produccion/produccion
      *************************************************************************/

      ims.set('./views/request-form/forms-TEMPORAL/produccion/produccion', {
        hash: 1715018048,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Produccion = void 0;
          const Produccion = exports.Produccion = {
            name: 'Produccion',
            template: ['1fr', '1fr', '1fr', '1fr', '150px', '1fr'],
            fields: [{
              type: 'wrapper',
              control: 'div',
              name: 'firstSection',
              className: 'fields-prod',
              template: [[3, '1fr 1fr 1fr'], [3, '1fr 1fr 1fr'], [3, '1fr 1fr 1fr'], [3, '1fr 1fr 1fr']],
              fields: [{
                type: 'text',
                name: 'description',
                label: 'Descripción',
                className: 'with-icon'
              }, {
                type: 'text',
                name: 'un',
                label: 'UN ',
                disabled: true,
                className: 'with-icon'
              }, {
                type: 'number',
                name: 'request-prod',
                label: 'Solicitud',
                value: 0,
                disabled: true
              }, {
                type: 'wrapper',
                control: 'tooltip',
                name: 'tooltip-average-pvp',
                template: ['1fr'],
                tooltipData: {
                  title: 'Multiplicador = sumatoria (PVP del título * Tirada del título) / sumatoria (Costo del título * Tirada del título)'
                },
                fields: [{
                  type: 'traficLight',
                  name: 'multiplier',
                  label: 'Multplicador',
                  disabled: true,
                  value: '0.00',
                  condition: {
                    operator: '=',
                    baseCondition: 0
                  },
                  isPercent: false,
                  className: 'value-left'
                }]
              }, {
                type: 'wrapper',
                control: 'tooltip',
                name: 'tooltip-average-pvp',
                template: ['1fr'],
                tooltipData: {
                  title: 'Ratio = sumatoria (Tirada equivalente) / sumatoria (Venta equivalente)'
                },
                fields: [{
                  type: 'traficLight',
                  name: 'un',
                  label: 'Ratio ',
                  disabled: true,
                  value: '0.00',
                  condition: {
                    operator: '=',
                    baseCondition: 0
                  },
                  isPercent: false,
                  className: 'value-left'
                }]
              }, {
                type: 'date',
                name: 'date-prod',
                label: 'Fecha',
                value: 0,
                disabled: true,
                icon: 'date'
              }, {
                type: 'wrapper',
                control: 'tooltip',
                name: 'tooltip-average-pvp',
                template: ['1fr'],
                tooltipData: {
                  title: 'Cantidad de Producción = Sumatoria (Tirada)'
                },
                fields: [{
                  type: 'number',
                  name: 'quantity-prod',
                  label: 'Cant producción',
                  disabled: true,
                  value: '0',
                  className: 'with-icon'
                }]
              }, {
                type: 'wrapper',
                control: 'tooltip',
                name: 'tooltip-average-pvp',
                template: ['1fr'],
                tooltipData: {
                  title: 'Inversión total = sumatoria (Inversión total) + Inversión adicional'
                },
                fields: [{
                  type: 'text',
                  name: 'totalInvestment',
                  label: 'Inv total ',
                  disabled: true,
                  value: '0',
                  className: 'with-icon'
                }]
              }, {
                type: 'date',
                name: 'warehouse-requirement',
                label: 'Fec. necesidad almacén',
                disabled: true,
                icon: 'date'
              }, {
                type: 'number',
                name: 'WeightedUnitCost',
                label: 'Costo unitario ponderado',
                value: '0.00',
                disabled: true,
                className: 'with-icon'
              }, {
                name: 'hide',
                label: 'hide',
                value: '',
                className: 'hide'
              }, {
                name: 'hide',
                label: 'hide',
                value: '',
                className: 'hide'
              }]
            }, {
              type: 'wrapper',
              control: 'div',
              className: 'firsColumnLarge',
              name: 'divJview',
              template: ['1fr'],
              fields: [{
                type: 'jViewTitle',
                entries: [],
                keys: ['start', 'end', 'task', 'user'],
                isVisibleHeader: true,
                name: 'titleBooks',
                properties: ['entries', 'total', 'selected'],
                selected: {},
                dataHead: [{
                  label: 'Título',
                  id: '1'
                }, {
                  label: 'PVP',
                  id: '2'
                }, {
                  label: 'C. unitario',
                  id: '3'
                }, {
                  label: 'multip',
                  id: '4'
                }, {
                  label: 'ratio',
                  id: '5'
                }, {
                  label: 'tirada',
                  id: '6'
                }, {
                  label: '',
                  id: '7'
                }]
              }]
            }, {
              type: 'wrapper',
              control: 'div',
              className: 'addArticle',
              name: 'actionsAddTitleDiv',
              template: ['1fr', 'auto'],
              fields: [{
                name: 'addMaterialDischarge',
                type: 'button',
                variant: 'primary',
                label: 'Agregar',
                className: 'form-button',
                gap: 0,
                onClick: [{
                  to: 'actionsAddTitleDiv.addMaterialDischargeModal',
                  property: 'open',
                  value: true
                }]
              }, {
                type: 'wrapper',
                control: 'modal',
                className: 'lg add-article',
                name: 'addMaterialDischargeModal',
                properties: ['open'],
                title: 'Agregar artículo',
                open: false,
                template: ['1fr', '1fr', '1fr', '1fr'],
                fields: [{
                  type: 'wrapper',
                  control: 'div',
                  name: 'addProductFields',
                  template: [[6, 'repeat(auto-fit, minmax(150px, 1fr))']],
                  className: 'align-end card-form',
                  fields: [{
                    type: 'text',
                    name: 'titulo',
                    label: 'Título:'
                  }, {
                    type: 'text',
                    name: 'author',
                    label: 'Autor:'
                  }, {
                    type: 'text',
                    name: 'materialCode',
                    label: 'Cod. Material:'
                  }, {
                    type: 'text',
                    name: 'seal',
                    label: 'Sello:'
                  }, {
                    type: 'text',
                    name: 'collection',
                    label: 'Colección:'
                  }, {
                    type: 'text',
                    name: 'AFRequest',
                    label: 'Solicitud AF:'
                  }]
                }, {
                  type: 'button',
                  label: 'Buscar',
                  variant: 'primary',
                  className: 'form-button',
                  name: 'searchButton',
                  onClick: [{
                    callback: 'onSearch',
                    dependency: 'divJviewModal.titleJview',
                    field: 'addMaterialDischargeModal.searchButton',
                    values: ['title', 'author', 'materialCode', 'AFRequest', 'collection', 'seal'],
                    to: 'addProductFields',
                    query: {
                      bd: 'sgs',
                      model: 'analisisFactibilidad.Titulos'
                    }
                  }]
                }, {
                  type: 'wrapper',
                  control: 'div',
                  className: 'firsColumnLarge table-check',
                  name: 'divJviewModal',
                  template: ['1fr'],
                  fields: [{
                    type: 'jViewTitle',
                    entries: [],
                    isVisibleHeader: true,
                    className: 'firsColumnLarge table-check',
                    name: 'titleJview',
                    total: 0,
                    rows: 10,
                    properties: ['entries', 'total', 'selected', 'rows'],
                    selected: [],
                    showSelect: false,
                    query: {
                      bd: 'sgs',
                      tableName: 'analisis_factibilidad.titulos',
                      fields: ['id', 'titulo']
                    },
                    dataHead: [{
                      label: '',
                      id: '0'
                    }, {
                      label: 'Título',
                      id: '1'
                    }, {
                      label: 'Prod dig',
                      id: '2'
                    }, {
                      label: 'Autor',
                      id: '3'
                    }, {
                      label: 'Sello',
                      id: '4'
                    }, {
                      label: 'colección',
                      id: '5'
                    }, {
                      label: 'ISBN',
                      id: '6'
                    }, {
                      label: 'Cod Material',
                      id: '7'
                    }, {
                      label: 'Pack',
                      id: '8'
                    }, {
                      label: 'Solicitud AF',
                      id: '9'
                    }]
                  }]
                }, {
                  type: 'wrapper',
                  control: 'div',
                  className: 'right',
                  name: 'actionsAddTitle',
                  template: [[2, ' 1fr 1fr']],
                  fields: [{
                    type: 'button',
                    label: 'Aceptar',
                    variant: 'primary',
                    className: 'form-button',
                    name: 'actionsAddTituelAccept',
                    onClick: [{
                      callback: 'setItems',
                      dependency: 'divJview.titleBooks',
                      values: ['title', 'author', 'materialCode', 'AFRequest', 'collection', 'seal'],
                      to: 'titleJview'
                    }, {
                      to: 'actionsAddTitleDiv.addMaterialDischargeModal',
                      property: 'open',
                      value: false
                    }, {
                      type: 'reset',
                      to: 'actionsAddTitleDiv.addMaterialDischargeModal'
                    }]
                  }, {
                    type: 'button',
                    label: 'Cancelar',
                    variant: 'secondary',
                    name: 'actionsAddTituelCancel',
                    className: 'form-button',
                    onClick: [{
                      to: 'actionsAddTitleDiv.addMaterialDischargeModal',
                      property: 'open',
                      value: false
                    }]
                  }]
                }]
              }]
            }, {
              type: 'wrapper',
              control: 'dependentCollapsible',
              name: 'bookData',
              properties: ['opened'],
              opened: false,
              template: ['1fr', [3, '1fr 1fr 1fr'], [3, '1fr 1fr 1fr'], '1fr', '1fr', '1fr', '1fr'],
              title: 'Datos del libro',
              className: 'books-data',
              fields: [{
                type: 'wrapper',
                name: 'infoBook',
                control: 'div',
                className: 'firs-section-books',
                template: [[6, '180px 1fr 1fr 1fr 1fr 35px']],
                fields: [{
                  label: 'Tipo de componente: ',
                  disabled: true,
                  name: 'componentTypeBook',
                  value: ''
                }, {
                  label: 'Nombre: ',
                  disabled: true,
                  name: 'tituloBook'
                }, {
                  label: 'Codigo Material MDM: ',
                  disabled: true,
                  type: 'number',
                  name: 'materialCodeMDMBook'
                }, {
                  label: 'Codigo Material: ',
                  type: 'number',
                  disabled: true,
                  name: 'materialCodeBook'
                }, {
                  label: 'Solicitud AF: ',
                  disabled: true,
                  type: 'number',
                  name: 'AFrequestBook'
                }, {
                  type: 'button',
                  variant: 'primary',
                  name: 'AFrequestBookButton',
                  bordered: true,
                  icon: 'search'
                }]
              }, {
                label: 'Empresa: ',
                name: 'company',
                disabled: true
              }, {
                label: 'Sello: ',
                name: 'stamp',
                disabled: true
              }, {
                label: 'Coleccion: ',
                name: 'collection',
                disabled: true
              }, {
                label: 'Autor: ',
                name: 'autor',
                disabled: true
              }, {
                name: 'isbn',
                label: 'ISBN: ',
                type: 'number'
              }, {
                label: ' ',
                name: 'empty',
                disabled: true
              }, {
                type: 'uploader',
                name: 'uploader',
                nameStorage: 'images-ficheros',
                label: 'Adjuntos:'
              }, {
                type: 'wrapper',
                control: 'section',
                name: 'productionData',
                title: 'Datos Producción',
                template: [[2, '1fr 1fr']],
                className: 'production-data',
                fields: [{
                  type: 'topLabel',
                  name: 'afInputs',
                  labels: [{
                    label: 'AF'
                  }, {
                    label: 'Actual'
                  }],
                  items: [{
                    fields: [{
                      type: 'label',
                      label: 'PVP:',
                      name: 'pvp'
                    }, {
                      type: 'number',
                      disabled: true,
                      name: 'pvpValue'
                    }, {
                      type: 'number',
                      name: 'pvpValue2'
                    }]
                  }, {
                    fields: [{
                      type: 'label',
                      label: 'Tirada:',
                      name: 'throw'
                    }, {
                      type: 'number',
                      name: 'throwValue',
                      disabled: true
                    }, {
                      type: 'number',
                      name: 'throwValue2'
                    }]
                  }, {
                    fields: [{
                      type: 'label',
                      label: 'Total:',
                      name: 'total'
                    }, {
                      type: 'number',
                      name: 'totalValue',
                      disabled: true
                    }, {
                      name: 'totalTraffic',
                      type: 'number',
                      disabled: true
                    }]
                  }, {
                    fields: [{
                      type: 'label',
                      label: 'C. Unitario:',
                      name: 'costUnitario',
                      className: 'right-tooltip',
                      tooltipData: {
                        title: 'Costo unitario = Inversión Producción / Tirada'
                      }
                    }, {
                      name: 'costUnitarioValue',
                      type: 'number',
                      disabled: true
                    }, {
                      name: 'costUnitarioTraffic',
                      type: 'number',
                      disabled: true
                    }]
                  }]
                }, {
                  type: 'topLabel',
                  name: 'afInputs',
                  labels: [{
                    label: 'AF'
                  }, {
                    label: 'Actual'
                  }],
                  items: [{
                    fields: [{
                      type: 'label',
                      label: 'M:',
                      name: 'm',
                      tooltipData: {
                        title: 'Multiplicador = PVP / costo unitario',
                        className: 'right-tooltip',
                        items: [{
                          title: 'Si el título es Novedad (Reimpresión = 0, es decir, es la primera solicitud de Impresión de dicho título)',
                          level: 0
                        }, {
                          title: 'Tirada equivalente = Tirada',
                          level: 0
                        }, {
                          title: 'Venta equivalente = Venta 02 meses (de la solicitud de Análisis de Factibilidad)',
                          level: 0
                        }, {
                          title: 'Tirada equivalente = (Tirada + Consignados + Stock)',
                          level: 0
                        }, {
                          title: 'Tirada equivalente = (Tirada + Consignados + Stock)',
                          level: 0
                        }]
                      }
                    }, {
                      type: 'number',
                      name: 'mValue',
                      disabled: true
                    }, {
                      name: 'mTrafficLight',
                      type: 'traficLight',
                      disabled: true
                    }]
                  }, {
                    fields: [{
                      type: 'label',
                      label: 'Ratio:',
                      name: 'ratio',
                      tooltipData: {
                        title: 'Ratio = Tirada equivalente / Venta equivalente',
                        className: 'right-tooltip'
                      }
                    }, {
                      name: 'ratioValue',
                      type: 'number',
                      disabled: true
                    }, {
                      name: 'ratioTraficLight',
                      type: 'traficLight',
                      disabled: true
                    }]
                  }]
                }]
              }, {
                type: 'wrapper',
                control: 'section',
                name: 'reprintData',
                title: 'Datos de Reimpresión',
                template: [[4, '1fr 1fr 1fr 1fr'], [4, '1fr 1fr 1fr 1fr']],
                fields: [{
                  name: 'lastReprint',
                  type: 'date',
                  label: 'Última Reimpresión:',
                  icon: 'date'
                }, {
                  name: 'salesLast12Months',
                  type: 'number',
                  label: 'Venta Últimos 12 meses:',
                  value: 0,
                  disabled: true
                }, {
                  name: 'stock',
                  type: 'number',
                  label: 'Stock:',
                  value: 0,
                  disabled: true
                }, {
                  name: 'copies',
                  type: 'number',
                  label: 'Ejemplares:',
                  value: 15 // Assuming the value is editable, hence no 'disabled' property
                }, {
                  name: 'lastMonthSales',
                  type: 'number',
                  label: 'Venta Último mes:',
                  value: 0,
                  disabled: true // Disabled because of the non-white background
                }, {
                  name: 'consignments',
                  type: 'number',
                  label: 'Consignados:',
                  value: 0,
                  disabled: true // Disabled because of the non-white background
                }, {
                  name: 'reprintNumber',
                  type: 'number',
                  label: 'Reimpresión N°:',
                  value: 2,
                  disabled: true // Disabled because of the non-white background
                }, {
                  type: 'wrapper',
                  control: 'div',
                  fields: [],
                  name: 'void',
                  template: []
                }]
              }, {
                type: 'wrapper',
                control: 'section',
                name: 'datesSection',
                title: 'Fechas',
                template: [[2, '1fr 1fr 1fr 1fr']],
                fields: [{
                  name: 'pdfToProduction',
                  type: 'date',
                  icon: 'date',
                  label: 'PDF a Producción:',
                  disabled: true // Disabled because of the icon suggesting it's not editable
                }, {
                  name: 'neededInWarehouse',
                  type: 'date',
                  label: 'Necesario en Almacén:',
                  value: '',
                  disabled: true,
                  icon: 'date'
                }, {
                  type: 'wrapper',
                  control: 'div',
                  fields: [],
                  name: 'void',
                  template: []
                }, {
                  type: 'wrapper',
                  control: 'div',
                  fields: [],
                  name: 'void',
                  template: []
                }]
              }]
            }, {
              type: 'wrapper',
              control: 'collapsible',
              template: [[2, '1fr 1fr']],
              name: 'comments-historical',
              title: 'Comentarios/Historial',
              className: 'd-flex',
              fields: [{
                type: 'comments',
                title: 'Comentarios',
                name: 'comments',
                fields: []
              }
              // {
              // 	type: 'jview',
              // 	entries: [],
              // 	name: 'historical',
              // 	keys: ['start', 'end', 'task', 'user'],
              // 	dataHead: [
              // 		{
              // 			label: 'Inicio',
              // 			id: '1',
              // 		},
              // 		{
              // 			label: 'Fin',
              // 			id: '2',
              // 		},
              // 		{
              // 			label: 'Tarea',
              // 			id: '3',
              // 		},
              // 		{
              // 			label: 'Usuario',
              // 			id: '4',
              // 		},
              // 	],
              // 	title: 'Historial',
              // },
              ]
            }]
          };
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/request-form/header
      *******************************************/

      ims.set('./views/request-form/header', {
        hash: 4222913361,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = void 0;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _wrapper = require("@bg/jadmin/wrapper");
          var _config = require("sgs-workflow/config");
          var _wrappers = require("sgs-workflow/wrappers");
          var _appIcon = require("sgs-workflow/app-icon");
          const Header = () => {
            const theme = globalThis?.matchMedia('(prefers-color-scheme: dark)').matches;
            const themeStorage = localStorage.getItem('theme');
            const defaultTheme = theme ? 'dark' : 'light';
            const userTheme = themeStorage ? themeStorage === 'dark' : defaultTheme === 'dark';
            const [isDark, setIsDark] = _react.default.useState(userTheme);
            const [user, setUser] = _react.default.useState(_wrappers.session.user);
            const logo = isDark ? 'logo-dark' : 'logo';
            (0, _hooks.useBinder)([_wrapper.appWrapper], () => {
              const value = themeStorage ? themeStorage === 'dark' : defaultTheme === 'dark';
              setIsDark(value);
            });
            (0, _hooks.useBinder)([_wrappers.session], () => setUser(_wrappers.session.user));
            const img = user?.profileImage ? `${_config.default.params.mediaServer}/display/image/${user.profileImage}/150x150/${_config.default.params.token}/user` : `${globalThis.baseDir}assets/default-user.png`;
            const userName = `${`${user.names ?? ''}`} ${user.lastNames ?? ''}`;
            const cls = !!user.profileImage ? '' : 'default-image';
            return _react.default.createElement("header", {
              className: "general-header"
            }, _react.default.createElement("div", {
              className: "sidebar-logo"
            }, _react.default.createElement(_image.Image, {
              src: `${globalThis.baseDir}assets/${logo}.png`,
              alt: "logo",
              className: "logo-header"
            })), _react.default.createElement("div", {
              className: "jadmin-jeader__content-theme"
            }, _react.default.createElement("div", {
              className: "content-user"
            }, _react.default.createElement("h6", null, userName), _react.default.createElement("div", {
              className: 'user-default'
            }, _react.default.createElement(_appIcon.AppIcon, {
              icon: "user"
            })))));
          };
          exports.Header = Header;
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/request-form/index
      ******************************************/

      ims.set('./views/request-form/index', {
        hash: 1059993544,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RequestForm = void 0;
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          const RequestForm = () => {
            const {
              manager
            } = (0, _context.useHomeContext)();
            const [update, setUpdate] = (0, _react.useState)({});
            const [forms, setForms] = (0, _react.useState)(manager.formManager.forms);
            (0, _hooks.useBinder)([manager.formManager], () => {
              setForms(manager.formManager.forms);
            });
            const output = _react.default.useMemo(() => {
              return forms.map((item, index) => {
                return _react.default.createElement(_item.RequestFormItem, {
                  item: item,
                  key: item.id
                });
              });
            }, [forms.length]);
            return _react.default.createElement(_react.default.Fragment, null, output);
          };
          exports.RequestForm = RequestForm;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/request-form/item
      *****************************************/

      ims.set('./views/request-form/item', {
        hash: 3052818489,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RequestFormItem = void 0;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../context");
          var _types = require("./types");
          var _dinamycForm = require("sgs-workflow/components/dinamyc-form");
          var _useTabTrapper = require("./use-tab-trapper");
          var _formContent = require("./form-content");
          const RequestFormItem = exports.RequestFormItem = (0, _react.memo)(({
            item
          }) => {
            const {
              requestForm,
              data,
              instanciatedForm
            } = item;
            const {
              manager
            } = (0, _context.useHomeContext)();
            const modalRef = _react.default.useRef(null);
            const [form, setForm] = _react.default.useState(data);
            (0, _useTabTrapper.useTabTrapper)(modalRef, [requestForm.show, form]);
            // useBinder([manager], () => setForm(data));
            const formulaPages = _react.default.useMemo(() => new _dinamycForm.FormulaCalculator({
              model: instanciatedForm
            }), []);
            const dataServicePages = _react.default.useMemo(() => new _dinamycForm.DataServicePages({
              model: instanciatedForm
            }), []);
            _react.default.useEffect(() => {
              if (!modalRef.current || !form) return;
              modalRef.current.focus();
            }, [requestForm.show, modalRef, form]);
            if (!requestForm.show || !form) return null;
            const onClose = () => {
              manager.formManager.reset();
            };
            const isErrorForm = false; // ! Importante, aca estara la validacion para mostrar el formulario o el componente de error;
            const cls = `beauty-modal request-form ${isErrorForm ? 'error-form' : ''} ${manager.formManager.fetching ? "fetching-modal" : ""}`;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: cls,
              onClose: onClose,
              closeClicked: false
            }, _react.default.createElement(_dinamycForm.DinamycFormContext.Provider, {
              value: {
                types: _types.types,
                manager
              }
            }, _react.default.createElement(_formContent.FormContent, {
              item: item
            })));
          });
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/request-form/save-success
      *************************************************/

      ims.set('./views/request-form/save-success', {
        hash: 2152367918,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SavedSuccess = SavedSuccess;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          function SavedSuccess() {
            const {
              manager,
              picked,
              setPicked
            } = (0, _context.useHomeContext)();
            const [, setUpdate] = _react.default.useState({});
            (0, _hooks.useBinder)([manager.formManager], async () => {
              setUpdate({});
              await manager.load();
              const response = await manager.refreshSelected();
              if (!!response) {
                picked.delete(response);
                setPicked(picked);
              }
            }, 'form.saved');
            if (!manager.formManager?.feedbackMessage) return null;
            const onClose = async () => {
              manager.formManager.resetSaved();
              await manager.load();
            };
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "beauty-modal save-success modal-sgs",
              onClose: onClose,
              closeClicked: false
            }, _react.default.createElement("h3", {
              className: "modal-title"
            }, "Guardar"), _react.default.createElement("p", {
              dangerouslySetInnerHTML: {
                __html: manager.formManager?.feedbackMessage
              }
            }), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              label: "Aceptar",
              className: "form-button",
              onClick: onClose
            })));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/request-form/types
      ******************************************/

      ims.set('./views/request-form/types', {
        hash: 2108713242,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.types = void 0;
          var _dinamycForm = require("sgs-workflow/components/dinamyc-form");
          // import { Button } from 'pragmate-ui/components';
          const types = exports.types = {
            traficLight: _dinamycForm.InputTrafficLight,
            buttonGroup: _dinamycForm.ButtonGroup,
            iconCheckInput: _dinamycForm.IconCheckInput,
            select: _dinamycForm.Select,
            button: _dinamycForm.Button,
            submit: _dinamycForm.Button,
            collapsible: _dinamycForm.Collapsible,
            section: _dinamycForm.Section,
            div: _dinamycForm.Div,
            jview: _dinamycForm.JView,
            comments: _dinamycForm.Comments,
            hr: _dinamycForm.Hr,
            'material-discharge-quotation': _dinamycForm.MaterialDischargeQuoation,
            plusInput: _dinamycForm.PlusInput,
            uploader: _dinamycForm.Uploader,
            currency: _dinamycForm.CurrencyInput,
            totalizer: _dinamycForm.Totalizer,
            percentage: _dinamycForm.PercentageInput,
            dependentCollapsible: _dinamycForm.DependentCollapsible,
            modal: _dinamycForm.Modal,
            addFile: _dinamycForm.AddFile,
            wiseCheckbox: _dinamycForm.Checkbox,
            tooltip: _dinamycForm.Tooltip,
            topLabel: _dinamycForm.TopLabel,
            jViewTitle: _dinamycForm.JViewTitle,
            label: _dinamycForm.Label,
            tree: _dinamycForm.Tree,
            totalizerAFA: _dinamycForm.TotalizerAFA,
            alertModal: _dinamycForm.AlertModal,
            date: _dinamycForm.CompleteDate,
            inputDate: _dinamycForm.InputDate,
            decimal: _dinamycForm.Decimal,
            fieldsWrapper: _dinamycForm.FieldsWrapper,
            atmTitles: _dinamycForm.ATMTitles,
            validationModal: _dinamycForm.ValidationModal,
            indicatorsField: _dinamycForm.IndicatorsField,
            textField: _dinamycForm.TextField,
            number: _dinamycForm.InputNumber,
            inputReferenceNumber: _dinamycForm.InputReferenceNumber,
            inputText: _dinamycForm.InputText
          };
        }
      });

      /****************************************************
      INTERNAL MODULE: ./views/request-form/use-tab-trapper
      ****************************************************/

      ims.set('./views/request-form/use-tab-trapper', {
        hash: 4205594682,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTabTrapper = void 0;
          var _react = require("react");
          const getDeepActiveElement = () => {
            let activeElement = document.activeElement;
            while (activeElement.shadowRoot && activeElement.shadowRoot.activeElement) {
              activeElement = activeElement.shadowRoot.activeElement;
            }
            return activeElement;
          };
          const useTabTrapper = (ref, display) => {
            _react.default.useEffect(() => {
              if (!display.includes(true)) return;
              const trap = event => {
                if (event.key !== 'Tab') return;
                const focusable = ref.current.querySelector('[data-last-item="true"]');
                const activeElement = getDeepActiveElement();
                const selectFirstElement = activeElement === focusable;
                if (selectFirstElement) ref.current.focus();
              };
              if (!ref.current) {
                window.removeEventListener('keydown', trap);
                return;
              }
              window.addEventListener('keydown', trap);
            }, [ref, display]);
          };
          exports.useTabTrapper = useTabTrapper;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/section-container
      *****************************************/

      ims.set('./views/section-container', {
        hash: 2057540202,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SectionContainer = SectionContainer;
          var _react = require("react");
          function SectionContainer({
            children,
            className
          }) {
            const cls = `section-container ${className ? ` ${className}` : ''}`;
            return _react.default.createElement("div", {
              className: 'section-container'
            }, children);
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/use-session
      ***********************************/

      ims.set('./views/use-session', {
        hash: 2444617724,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSession = useSession;
          var _react = require("react");
          var _wrappers = require("sgs-workflow/wrappers");
          function useSession(manager) {
            const initialState = {
              startDate: {
                fromDate: "",
                toDate: ""
              },
              expirationDate: {
                fromDate: "",
                toDate: ""
              }
            };
            const [picked, setPicked] = _react.default.useState(new Map());
            const [dateRange, setDateRange] = _react.default.useState(initialState);
            _react.default.useEffect(() => {
              manager.load();
              const reset = async () => {
                setPicked(new Map());
                setDateRange(initialState);
                await manager.reset();
              };
              _wrappers.session.on("login", reset);
              return () => {
                _wrappers.session.off("login", reset);
              };
            }, []);
            return {
              picked,
              setPicked,
              dateRange,
              setDateRange,
              initialState
            };
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./manager/index",
        "from": "Manager",
        "name": "Manager"
      }, {
        "im": "./views/buttons/dropdown/index",
        "from": "Dropdown",
        "name": "Dropdown"
      }, {
        "im": "./views/index",
        "from": "TaskInstancesMonitor",
        "name": "TaskInstancesMonitor"
      }, {
        "im": "./views/load-instance",
        "from": "LoadInstance",
        "name": "LoadInstance"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Manager') && _export("Manager", Manager = require ? require('./manager/index').Manager : value);
        (require || prop === 'Dropdown') && _export("Dropdown", Dropdown = require ? require('./views/buttons/dropdown/index').Dropdown : value);
        (require || prop === 'TaskInstancesMonitor') && _export("TaskInstancesMonitor", TaskInstancesMonitor = require ? require('./views/index').TaskInstancesMonitor : value);
        (require || prop === 'LoadInstance') && _export("LoadInstance", LoadInstance = require ? require('./views/load-instance').LoadInstance : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2VudGl0aWVzIiwiQnVzaW5lc3MiLCJSZWFjdGl2ZU1vZGVsIiwiY29sbGVjdGlvbiIsIkNvbW1lbnRzQ29sbGVjdGlvbiIsInBhcmVudCIsIml0ZW1zIiwidmFsdWUiLCJ0cmlnZ2VyRXZlbnQiLCJjb25zdHJ1Y3RvciIsImxvYWQiLCJzZWxlY3RlZCIsImlkIiwiZmV0Y2hpbmciLCJyZXNwb25zZSIsIndoZXJlIiwiaW5zdGFuY2VJZCIsInN0YXJ0Iiwic3RhdHVzIiwiRXJyb3IiLCJlcnJvciIsIm1lc3NhZ2UiLCJkYXRhIiwiY29uc29sZSIsImV4cG9ydHMiLCJfd3JhcHBlcnMiLCJDb21tZW50cyIsInNob3ciLCJzaG93RGVsZXRlIiwiY29tbWVudFNlbGVjdGVkIiwicGlja2VkSW5zdGFuY2VzIiwicGlja2VkIiwiaGFzIiwiaW5zdGFuY2UiLCJnZXQiLCJzZXQiLCJjb21tZW50cyIsImhhbmRsZU1vZGFsIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0YXJnZXQiLCJzYXZlIiwiaXRlbSIsIkNvbW1lbnRJdGVtIiwicGFyYW1zIiwidXNlcklkIiwic2Vzc2lvbiIsInVzZXIiLCJjb21tZW50IiwidGFza0lkIiwidGltZUNyZWF0ZWQiLCJEYXRlIiwidGltZVVwZGF0ZWQiLCJwdWJsaXNoIiwiZGVsZXRlIiwic2V0VGltZW91dCIsImZpbHRlciIsInZhbHVlRGVmYXVsdCIsImxhYmVsIiwibnVtYmVyVmFsdWVEZWZhdWx0Iiwib3B0aW9uRGVmYXVsdE9wIiwiZGF0ZXRpbWUiLCJpbnQiLCJ2YXJjaGFyIiwiZGVjaW1hbCIsIm52YXJjaGFyIiwiX3V1aWQiLCJfb3B0aW9ucyIsIkZpbHRlcnMiLCJzaG93TW9kYWwiLCJmaWx0ZXJzQXBwbHkiLCJwcm9jZXNzZXMiLCJhcHBXcmFwcGVyIiwicHJvY2Vzc0F2YWlsYWJsZSIsInByb2Nlc3NTZWxlY3RlZCIsInByb2Nlc3MiLCJmaWx0ZXJzU2VsZWN0ZWQiLCJNYXAiLCJpc0FwcGx5IiwidmFsdWVBcHBseSIsImhhbmRsZVNob3ciLCJoYW5kbGVDaGFuZ2VQcm9jZXNzIiwib3B0aW9uIiwiY2xlYXIiLCJhZGRGaWx0ZXIiLCJ2NCIsInR5cGUiLCJjYW1wb3NGaWx0cm9zIiwidGlwb0RhdG8iLCJvcCIsIm9wdGlvbnNPcCIsIm9yIiwiaW5wdXRWYWx1ZSIsImRlbGV0ZUZpbHRlciIsImtleSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaGFuZGxlQ2hhbmdlVmFsdWUiLCJuZXdWYWx1ZSIsImZpbmQiLCJoYW5kbGVDaGFuZ2VGaWx0ZXIiLCJpZENoaWxkIiwiaGFuZGxlQWRkT3AiLCJpZEZhdGhlciIsImRlbGV0ZVN1YkZpbHRlciIsImZhdGhlciIsImFwcGx5RmlsdGVyIiwic2l6ZSIsImFwcGx5RmlsdGVyTW9kYWwiLCJ2aWV3IiwidmlzdGEiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwib3JJdGVtIiwicHVzaCIsImFwcGx5IiwicHJvY2Vzc09wdGlvbnMiLCJtYXRlcmlhbENyZWF0aW9uIiwiZmVhc2liaWxpdHlBbmFseXNpcyIsImFkdmFuY2VQYXltZW50IiwicHVyY2hhc2VzIiwicXVvdGF0aW9uIiwiZXhwZW5zaXZlIiwibWF0ZXJpYWxNb2RpZmljYXRpb24iLCJwYXltZW50cyIsInByb2R1Y3Rpb24iLCJyZWdpc3RyYXRpb24iLCJyZW5kaXRpb24iLCJwcm9kdWN0aW9uRm9sbG93VXAiLCJfZmluZE1hcCIsIl9hcGkiLCJfdXRpbHMiLCJhcGkiLCJBcGkiLCJBY3Rpb25NYW5hZ2VyT2xkIiwiY2FjaGUiLCJvblNlbGVjdEZldGNoIiwiZGVwZW5kZW5jeSIsImZpZWxkIiwiZm9ybSIsInByb2R1Y3Rpb25Nb2RhbCIsImdldEZpZWxkIiwiZGlzYWJsZWQiLCJwYXJlbnREZXBlbmRlbmN5Iiwic3BlY3MiLCJkZXBlbmRlbnRPbiIsImxlbmd0aCIsInBhcmVudEZpZWxkTmFtZSIsInVybCIsIm1ldGhvZCIsInNldHRpbmdzIiwic2VsZWN0IiwibmFtZSIsImRlcGVuZGVuY3lJZCIsInBhcmVudElkIiwicmVxdWlyZWQiLCJmZXRjaCIsIm9wdGlvbnMiLCJvcGVuIiwiZmV0Y2hEYXRhIiwiYWN0aW9uIiwiY2FsbGJhY2siLCJtaXNzaW5nRmllbGRzIiwiaGFzT3duUHJvcGVydHkiLCJqb2luIiwiZHluYW1pY1VybCIsInJlcGxhY2UiLCJfIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwib25CdXR0b25Hcm91cEZldGNoIiwiZ2V0Q2hpbGRzVmFsdWVzIiwid3JhcHBlciIsIkZvcm1JdGVtIiwiZWxlbWVudCIsImZpZWxkcyIsInZhbHVlUHJvcGVydHkiLCJwcm9wZXJ0eSIsImlzQm9vbGVhbiIsImhpZGRlIiwiY2hlY2tlZCIsImNsYXNzTmFtZSIsImJvb2wiLCJjbHMiLCJyZXBsYWNlQWxsIiwidHJpbSIsIm9uU2VhcmNoIiwidG8iLCJ3cmFwcGVyVG8iLCJ3cmFwcGVyU2V0IiwicHJldkVudHJpZXMiLCJmaW5kTWFwQnlLZXlSZWN1cnNpdmUiLCJPYmplY3QiLCJrZXlzIiwicXVlcnkiLCJVdGlscyIsImNvbnZlcnRPYmplY3RUb1F1ZXJ5IiwibG9hZGluZyIsImVudHJpZXMiLCJzb21lIiwiZW50cnkiLCJpc2JuIiwiaWRUaXR1bG8iLCJtYXAiLCJ0b3RhbCIsInJvd3MiLCJzZXRJdGVtcyIsImJvb2tEYXRhIiwiaW5mb0Jvb2siLCJyZXByaW50RGF0YSIsImVqZW1wbGFyZXNFcSIsInRpdHVsbyIsIm9wZW5lZCIsInNldEl0ZW1zTWF0ZXJpYWwiLCJwcm9kdWN0IiwidGlwb1Byb2R1Y3RvIiwibmV3VGl0bGVEaXZWYWx1ZSIsImhhcmR3YXJlIiwibmV3VGl0bGUiLCJuZXdUaXRsZVZhbHVlIiwibmV3SXRlbXMiLCJBcnJheSIsImZyb20iLCJjb2RpZ29TZWxsbyIsImNvbmNhdCIsIm9uU2VsZWN0V2lkdGhIZWlnaHQiLCJvbkNoYW5nZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3BsaXQiLCJ3aWR0aE51bWJlciIsIk51bWJlciIsImhlaWdodE51bWJlciIsInNpemVzIiwib24iLCJvblNlbGVjdFNlYWwiLCJjdXJyZW50RmllbGQiLCJpc1JlYWR5IiwiaGFuZGxlTWlzc2luZ1BhcmFtZXRlciIsImNsYXZlU2VsbG9VbiIsInF1ZXJ5U2VsbG9zIiwiaXNBcHBsaWNhYmxlIiwibm90QXBwbGljYWJsZSIsInByb2Nlc3NJZCIsInJlc3BvbnNlU2VsbG9zIiwiaWRVblNncyIsInF1ZXJ5VmFyWCIsInJlbnRhYmlsaWRhZEF4UG9yY2llbnRvVmFsb3JYIiwiY2xhdmVQYXJhbWV0cm8iLCJyZXNwb25zZVZhclgiLCJkYXRhVmFyWCIsInZhbG9yUmVmZXJlbmNpYSIsInZhclgiLCJpc0J1c2luZXNzVW5pdCIsImlzU2VhbEluQnVzaW5lc3NVbml0IiwiZGVub21pbmFjaW9uIiwicGFyYW1ldGVyIiwieWllbGRzIiwiUmVudGFiaWxpZGFkQVhQb3JjIiwiUmVudGFiaWxpZGFkIiwic2V0RmllbGRWYWx1ZXMiLCJ3YXJuaW5nIiwiaWNvbiIsInVuZGVmaW5lZCIsInRyYWZmaWMiLCJkaXZpZGVJblR3byIsImluY2x1ZGVzIiwiY29uZGl0aW9uIiwicmVkIiwieWVsbG93IiwiZ3JlZW4iLCJyZXNldFJlbGF0ZWRGaWVsZHMiLCJpc1BlcmNlbnQiLCJub3RQZXJjZW50IiwidG9Mb3dlckNhc2UiLCJmaXhlZCIsInRvRml4ZWQiLCJ2YWxvclJvam8iLCJ2YWxvckFtYXJpbGxvIiwidmFsb3JWZXJkZSIsInNldFJlbGF0ZWRGaWVsZFZhbHVlcyIsImZpZWxkREEiLCJmaWVsZHNSZWxhdGl2ZXMiLCJDb2JlcnR1cmFEQVZlbnRhcyIsImZpZWxkUHRvUSIsInB0b0VRVmVudGFzIiwicmVsYXRlZEZpZWxkIiwiQ29iZXJ0dXJhREEiLCJvblNpbXVsYXRlIiwidG9nZ2xlUHJvcGVydGllc1ZhbHVlIiwidmFsdWVzVG9TZXQiLCJwcm9wc1RvU2V0IiwiY29weVZhbHVlIiwiZnJvbUZpZWxkIiwidG9GaWVsZCIsImZpZWxkVG9TZXQiLCJwcm9wZXJ0eVRvQ29weSIsInZhbHVlU2VwYXJhdG9yIiwiY29weVZhbHVlRnJvbVRoaXJkIiwicmVnZXhwUmVwbGFjZSIsImFzIiwiaXNBcnJheSIsIm5ld0tleSIsImZpZWxkVmFsdWUiLCJSZWdFeHAiLCJ0b3RhbGl6ZXJBRkEiLCJpbnB1dCIsInJlZHVjZSIsIm51bSIsIk1hdGgiLCJyb3VuZCIsInByZXZWYWx1ZXMiLCJjb3B5VG9UYWJsZSIsInN0cnVjdHVyZSIsImNvbmRpdGlvbmFsRmllbGQiLCJ0YWJsZSIsInNlbGVjdGVkSXRlbSIsImVycm9yRmllbGQiLCJpbmRleCIsImZpbmRJbmRleCIsImRlbGV0ZUl0ZW1JbkpWaWV3IiwiY2xvc2UiLCJzZXRWYWx1ZUZpZWxkIiwiZHVwbGljYXRlSXRlbUpWaWV3IiwibmV3SXRlbSIsImlnbm9yZSIsInByb3AiLCJzZWxlY3RJdGVtSlZpZXciLCJpc1NldElucHV0cyIsInZhbHVlSXNBRGF0ZSIsImlzTXVsdGlWYWx1ZSIsIm5vdFNldCIsInNldFZhbHVlRmllbGRzIiwib25TaW11bGF0ZUFGQSIsInZhbGlkYXRpb24iLCJ2YWxpZGF0ZUZpZWxkIiwidmFsaWRhdGVkIiwiYWxlcnQiLCJzZWxlY3RlZERlbGV0ZSIsImNsb3NlRm9ybU1vZGFsIiwiZm9ybU1hbmFnZXIiLCJkaXNwbGF5UmVxdWVzdEZvcm0iLCJyZXNldCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyb2xsYmFjayIsInJlbW92ZUl0ZW0iLCJnZXREZXJpdmF0aW9uVXNlcnMiLCJjb25maWciLCJub21icmUiLCJhcGVsbGlkbyIsInNldFByZXZWYWx1ZXMiLCJpc1NhdmVkIiwic2VhcmNoVGFibGVzIiwiZW5kcG9pbnQiLCJ0b1NldCIsImZpZWxkVHlwZSIsImVtcHR5VmFsdWUiLCJ2YWx1ZUZpZWxkIiwic2V0Q2xlYXIiLCJhY2NlcHRQcm9kdWN0aW9uTW9kYWwiLCJmaWVsZHNOb3RFbXB0eSIsImFsZXJ0TW9kYWwiLCJmaWVsZFBhcGVyUmVwZWF0ZXIiLCJjYWxsYmFja3MiLCJhbGVydEZpZWxkIiwiaW50ZXJpb3JQYXBlclJlcGVhdGVyIiwicGFnaW5hcyIsInBhcnNlSW50IiwiaXNOYU4iLCJrZXlUb0ZpbmQiLCJvdXRlck1hcCIsInNlYXJjaEluTWFwIiwicmVzdWx0IiwicGFyc2VGbG9hdCIsImZpZWxkU2VsZWN0IiwiQWN0aW9uTWFuYWdlciIsImlzVGhyb3R0bGVkIiwic2VsZWN0ZWRJdGVtQWZhIiwiZmxhZ1NlbGVjdEl0ZW1KVmlldyIsInRvZ2dsZUZsYWdTZWxlY3RJdGVtSlZpZXciLCJhY2NlcHRBdXRob3JUaXRsZSIsInNldElkVG8iLCJmaWVsZFRhYmxlIiwiY2VzaW9uRGUiLCJpZE9icmEiLCJjb250cmFjdHMiLCJpZENvbnRyYXRvIiwiZGVzY3JpcGNpb24iLCJpZEZpZWxkIiwicGFyc2VEYXRlIiwiZGF0ZVN0cmluZyIsImRhdGUiLCJ0b1N0cmluZyIsIm1vbnRocyIsIkphbiIsIkZlYiIsIk1hciIsIkFwciIsIk1heSIsIkp1biIsIkp1bCIsIkF1ZyIsIlNlcCIsIk9jdCIsIk5vdiIsIkRlYyIsInBhcnRzIiwibW9udGgiLCJkYXkiLCJ5ZWFyIiwic2V0RnJvbVRhYmxlIiwiZmllbGRzTWFwcGluZyIsIndvcmtzIiwiZGVwZW5kZW50RmllbGRzIiwiaXNEaWdpdGFsQW5kQWZhIiwic3RydWN0dXJlT2ZBcnQiLCJjb3B5cmlnaHQiLCJmaWVsZE1vZGVsIiwic2VsZWN0ZWRWYWx1ZSIsImNvZGlnb01hdGVyaWFsIiwiaWRUaXRsZSIsImZpZWxkTmFtZSIsIm1hcHBpbmdDb25maWciLCJlbmFibGVJZkRpc2FibGVkIiwic291cmNlRmllbGRzIiwiZW5hYmxlT3B0aW9uIiwiZml4ZWRWYWx1ZSIsInNvdXJjZUZpZWxkIiwiZ2V0RnVsbFllYXIiLCJ0YXJnZXRGaWVsZCIsIndvcmtzRmllbGRzIiwid29yayIsImlkVHJhYmFqbyIsImltcG9ydGUiLCJlc1Byb2REaWdpdGFsIiwicG9yY2VudGFqZURlcmVjaG9BdXRvckRpZ2l0YWwiLCJwdnBEaWdpdGFsIiwicG9yY2VudGFqZURlcmVjaG9BdXRvciIsInB2cCIsImNvbmYiLCJpc0FGQSIsImFmYSIsImlzRGlnaXRhbCIsImRpZ2l0YWwiLCJmaWVsZFRyZWUiLCJub2RlIiwiZmluZE5vZGVQYXRoQnlJZCIsImZpZWxkQXJ0IiwiYXNzb2NpYXRlZFdvcmsiLCJwb3N0Iiwib2JyYSIsImNvbnRyYXRvcyIsImFzc29jaWF0ZWRXb3JrRmllbGQiLCJhc3NvY2lhdGVkV29ya0lkRmllbGQiLCJhc3NvY2lhdGVkV29ya0lkIiwiY2VzaW9uRGVGaWVsZCIsImNlc2lvbiIsInRhYmxlSW5mbyIsInNldFByb2R1Y3RUeXBlIiwiYWN0aXZlIiwiaXNBY3RpdmUiLCJpc1BhY2siLCJkZWZhdWx0Iiwic2V0RmllbGRBcnRpY2xlIiwiZGVmYXVsdFZhbHVlIiwicGF0aCIsImNoaWxkcmVuIiwiY2hpbGQiLCJ2YWxpZGF0ZUFydGljbGVzIiwiY2FzZXMiLCJpZFRpcG9BcnRpY3VsbyIsImlzUGFja1NhcEFmYSIsImlzUGFja0FmYVNhcCIsInZhbGlkYXRpb25zIiwiaXNUaXRsZXNBZmEiLCJpc1RpdGxlU2FwIiwiaXNQYWNrRnJvbVNhcCIsInJlY29yZCIsImV2ZXJ5IiwiaXNQYWNrRnJvbUFmYSIsImZpY2hhcyIsImZpY2hhc0NhbnRpZGFkIiwiY2REdmQiLCJjZERldkNhbnRpZGFkIiwiaXNDb21wb25lbnRzIiwiaXNBZmFTYXBDb21wb25lbnQiLCJ2YWxpZGF0ZSIsInBhcmFtIiwicHJvcGVydHlUb1NldCIsImNvbnNlcnZlSXRlbXMiLCJwcm9wZXJ0eVNlbGVjdGVkVGFibGUiLCJmbGFnUHJvZHVjdGlvbkludmVyc2lvbiIsInRvZ2dsZUZsYWdQcm9kdWN0aW9uSW52ZXJzaW9uIiwiX2FmYSIsIl9hdG0iLCJfY29weSIsIl9mZXRjaCIsIl9pdGVtcyIsIl9wcm9kIiwiX3NlYXJjaGVycyIsIl9zZWxlY3QiLCJfc2VsZWN0U2VhbCIsIl9zZXR0ZXJzIiwiX3RhYmxlIiwiX3RyYWZmaWN0IiwiQWN0aW9uTWFuYWdlckNsYXNzIiwiZGVwZW5kVmFsdWVGaWVsZCIsInNlcGFyYXRlSXRlbXNQcm9wZXJ0eSIsInNldEl0ZW1zUHJvZCIsImxpc3RlblNlbGVjdGVkSXRlbSIsImdldFBhcmFtZXRlcnNUcmFmZmljIiwibGlzdGVuTmVlZGVkSW5XYXJlaG91c2UiLCJyZW1vdmVBbGxGaWxlcyIsImV2ZW50RmllbGQiLCJDT01QT05FTlRTX1BBQ0tTIiwiRmFzw61jdWxvIiwiR2FkZ2V0cyIsIkNEIiwiTGlicm8iLCJGaWNoYSIsIkRWRCIsIlByb2R1Y3RvIiwiVElQT1NfQVJUSUNVTE9TIiwiYnV0dG9uVG9EaXNhYmxlZCIsImFydGljbGVzVHlwZXMiLCJjb21wb25lbnRzVHlwZXMiLCJwcmV2Q29kaWdvTWF0ZXJpYWxGaWVsZCIsInByZXZDb2RpZ29NZG1GaWVsZCIsInByZXZDb2RpZ29NYXRlcmlhbCIsInByZXZDb2RpZ29NZG0iLCJBQ1RJVk9JTkFDVElWTzIiLCJpc1NhcCIsImlkQW5hbGlzaXNGYWN0aWJpbGlkYWQiLCJuZXdUaXRsZUNoZWNrIiwiaWRDb21wb25lbnRlIiwiaWRUaXBvUHJvZHVjdG8iLCJpc0NvbXBvbmVudCIsImlzTmV3VGl0bGUiLCJjb2RpZ29NYXRlcmlhbE1kbSIsImlkVGl0dWxvQUZhY3RpIiwicGFjayIsInNvcnQiLCJhIiwiYiIsInRpcG9Db21wb25lbnRlIiwiaXNQcm9kdWN0IiwiY29kaWdvTWF0ZXJpYWxBcnQiLCJjb2RpZ29NYXRlcmlhbE1kbUFydCIsImVzUHJvZERpZ2l0YWxBZmEiLCJzYXAiLCJjb21wb25lbnQiLCJib29rIiwiYnV0dG9uIiwicHJvcHMiLCJzZXBhcmF0b3IiLCJlbGVtZW50VmFsdWUiLCJTdHJpbmciLCJmaXJzdExldHRlciIsInN1YnN0ciIsInJlc3QiLCJ0b1VwcGVyQ2FzZSIsIl9kYXlqcyIsImNoZWNrcyIsImNoZWNrc0dyYXBoaWNDb3N0IiwiZGVmYXVsdEludGVyaW9yUGFwZXJSZXBlYXRlciIsImNoZWNrc1ZhbHVlcyIsImRpZUN1dHRpbmdQYWdlcyIsIm90aGVyVW5pdHNDb3N0RGV0YWlsIiwicHVudGlsbGFkbyIsImdldEluZm9TYXAiLCJwcm9wZXJ0aWVzRnJvbVNwIiwiaW52ZXJzaW9uUHJvZHVjY2lvbiIsImZvcm1hdE9wdGlvbnMiLCJpZEluc3RhbmNpYSIsImNsYXZlVGlwb1RpdHVsbyIsInByb3ZpZW5lIiwiYXNzaWduIiwiZmllbGRQcm9wIiwiaXNGb3JtYXRJbk9wdGlvbnMiLCJpZEZvcm1hdG8iLCJKU09OIiwicGFyc2UiLCJwcm9wZXJ0aWVzVG9BZGQiLCJjYWxsYmFja3NTZWxlY3QiLCJuZXdFbnRyaWVzIiwicmVxdWVzdHMiLCJ0aGVuIiwicHJvZHVjdGlvbnMiLCJhcnRpY2xlcyIsImFydGljbGUiLCJjb2RpZ29NYXRlcmlhbFBhY2siLCJpZEFydGljdWxvQWx0YU1hdGVyaWFsIiwiaWRBcnRpY3VsbyIsImlkQXJ0aWN1bG9Qcm9kIiwiUHJvbWlzZSIsImFsbCIsImdldFJlZmVyZW5jZVZhbHVlIiwiaSIsImZvclRhYmxlIiwiZGVzY3JpcHRpb24iLCJmaWVsZHNEaXNhYmxlZEluTm92ZVJlZWQiLCJhcnRpY2xlc1RvU2F2ZSIsInZhbGlkYXRlRGF0ZXMiLCJjaGVja1ZhbHVlcyIsImNoZWNrVmFsdWUiLCJlbnRyaWVzVGl0bGVzIiwiZGVzY3JpcHRpb25GaWVsZCIsIm11bHRpcGxpZXIiLCJvbGRlc3REYXRlIiwibmVlZGVkSW5XYXJlaG91c2UiLCJ0b0lTT1N0cmluZyIsInByb3BlcnR5RmlsZXMiLCJwcm9wRmlsZXMiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZmlsZUlkIiwiYWN0dWFsRGF0ZSIsIm5lZWRlZEluV2FyZWhvdXNlSW52YWxpZCIsImlzU2FtZSIsImlzQWZ0ZXIiLCJwZGZUb1Byb2R1Y3Rpb25JbnZhbGlkIiwicGRmVG9Qcm9kdWN0aW9uIiwibG93ZXJEYXRlUGRmIiwiTXVsdGlwbGljYWRvciIsIlJhdGlvIiwiZGIiLCJ0YWJsZU5hbWUiLCJjbGF2ZV9wYXJhbWV0cm8iLCJjbGF2ZV9zZWxsb191biIsInNlbGxvIiwidmFsb3JfcmVmZXJlbmNpYSIsIm91dHB1dCIsImhhc0FmYSIsImFscmVhZHlWYWx1ZSIsImFscmVhZHlTZXQiLCJpc1ZhbHVlIiwiZmllbGRTZXQiLCJwYXJhbWV0cm9zIiwic2VsbG9zIiwidmFyaWJsZVgiLCJjYWxjdWxhdGVzIiwiZGF0YVZhciIsImV2ZW50TGlzdGVuIiwiY2FsbGJhY2tzSXRlbSIsInZhbHVlT2JqIiwiZGVlcEVxdWFsIiwib2JqMSIsIm9iajIiLCJrZXlzMSIsImtleXMyIiwiYXJyYXlzQXJlRXF1YWwiLCJhcnIxIiwiYXJyMiIsInZhbG9yX3Jvam8iLCJ2YWxvcl9hbWFyaWxsbyIsInZhbG9yX3ZlcmRlIiwiZXZhbHVhdGlvbnMiLCJlcXVhbCIsImNvbXBhcmlzb25WYWx1ZSIsImxvd2VyIiwidXBwZXIiLCJiZXR3ZWVuIiwibWluIiwibWF4IiwibnVtVmFsdWUiLCJkaWZmZXJlbnQiLCJoYXNWYWx1ZSIsImVtcHR5IiwibGVzc09yRXF1YWwiLCJncmVhdGVyT3JFcXVhbCIsImVtcHR5QXJyYXkiLCJ0aGVyZXNBVmFsdWVXaXRoIiwibG93ZXJEYXRlIiwiaW5pdCIsImVuZCIsImRhdGUxIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZGF0ZTIiLCJlcXVhbEluY2x1ZGUiLCJhcnJheVR5cGVzIiwiY2FsbGJhY2tzRnVsZmlsbGVkIiwiY2FsbGJhY2tzRmFpbGVkIiwibmV3RGVwZW5kZW5jeSIsImlzRnVsZmlsbGVkIiwiQ29uZGl0aW9uVmFsaWRhdG9yIiwiZXhlY3V0ZSIsImNvbmRpdGlvbnMiLCJjaGVja0luZGl2aWR1YWxJdGVtIiwiZXJyb3JzIiwiZXJyb3JNZXNzYWdlIiwidGhlcmVzU29tZSIsImNoZWNrQnVsa0l0ZW0iLCJoYXNFcnJvciIsImZsYXQiLCIjY2hlY2tCdWxrSXRlbSIsImNvbmRpdGlvbkNoYWluIiwiZXZhbHVhdGVDb25kaXRpb25zIiwiY2hlY2tDb25kaXRpb24iLCIjY2hlY2tJbmRpdmlkdWFsSXRlbSIsIiNldmFsdWF0ZUNvbmRpdGlvbnMiLCJpZiIsImlmQ29uZGl0aW9uIiwiZWxzZSIsImVsc2VDb25kaXRpb24iLCJjaGVja0xvZ2ljYWxDb25kaXRpb24iLCJhcHBseUFjdGlvbnMiLCIjYXBwbHlBY3Rpb25zIiwiYWN0aW9ucyIsImZpZWxkS2V5IiwiaXRlbVZhbHVlIiwiaXNSZXF1aXJlZEFuZERvZXNudEhhc1ZhbHVlIiwiaXNGb3JjZVJlcXVpcmVkIiwiZm9yY2VSZXF1aXJlZCIsIm9yZGVyIiwiZ3JvdXAiLCJzdWJHcm91cCIsImZpZWxkQ29uZmlnIiwiY3VycmVudE1hcHBpbmciLCIjY2hlY2tMb2dpY2FsQ29uZGl0aW9uIiwib2tDb25kaXRpb25zIiwiY29uZCIsImludGVybmFsQ29uZGl0aW9uc09rIiwiaXNDb25kaXRpb25PayIsIm9rIiwicmVzdWx0cyIsIiNjaGVja0NvbmRpdGlvbiIsImZvdW5kIiwiZXEiLCJnZXRSZWYiLCJuZSIsInR5cGVvZiIsImd0IiwiZ3RlIiwiaXNDaGFyTGVuZ3RoR3QiLCJnbG9iYWwiLCJfZm9ybU1vZGVsIiwiX2NvbmZpZyIsImZpbGVzU2VydmVyIiwiYmVhcmVyIiwidG9rZW4iLCJGb3JtTWFuYWdlciIsImluc3RhbmNpYXRlZEZvcm0iLCJtYW5hZ2VyIiwiZm9ybXMiLCJmZWVkYmFja01lc3NhZ2UiLCJjdXJyZW50Rm9ybUlkIiwiZm9ybVBhcnNlZCIsIkZvcm1Nb2RlbCIsInJlcXVlc3RGb3JtIiwiZ2xvYmFsVGhpcyIsImZpIiwibG9hZEluc3RhbmNlIiwiZ2V0SW5zdGFuY2VGb3JtIiwidXBkYXRlIiwiY3JlYXRvclVzZXIiLCJhdCIsInJlc2V0U2F2ZWQiLCJkZWZpbmVQcm9wZXJ0eSIsIl91cGxvYWRlciIsIl9hY3Rpb25NYW5hZ2VyIiwiX2NvbmRpdGlvblZhbGlkYXRvciIsIl9idWxrcyIsIl92YWx1ZSIsIl92YWxpZGF0aW9ucyIsIl9hcGkyIiwiYXBpU0dTIiwidXBsb2FkZXIiLCJVcGxvYWRlciIsIm11bHRpcGxlIiwicmVxdWVzdFNhdmVkIiwiZGlzcGxheU9uY2VFcnJvcnMiLCJjb25kaXRpb25WYWxpZGF0b3IiLCJ2YWx1ZXNUb0FwcGx5SW5Sb290IiwidmFsaWRhdGlvbk1vZGFsIiwib25TdWJtaXQiLCJhY3Rpb25CdXR0b25zIiwibmF0aXZlRXZlbnQiLCJzdWJtaXR0ZXIiLCJnZXRWYWx1ZXMiLCJyZXF1aXJlZEZpZWxkIiwiY29tbWVudHNGaWVsZCIsImVycm9yc1Jldmlld0NvbW1lbnRzIiwidmFsaWRhdGVSZXZpZXciLCJkZXJpdmF0aW9uVXNlcklkIiwidmFsdWVzVG9TZW5kIiwiYWN0aW9uSWQiLCJzcGVjaWZpY1ZhbGlkYXRpb25zIiwicmVtb3ZlZElkcyIsInJlbW92ZSIsImhhbmRsZVNhdmVkIiwidG9TZW5kIiwiZmlsdGVyZWRSZXF1ZXN0cyIsImZpbHRlclVzZWxlc3NSZXF1ZXN0cyIsImlkZW50aWZpZXJzIiwiaWRlbnRpZmllciIsImlzQnVsayIsImdldEJ1bGtGaWVsZHMiLCJnZXRGaWVsZHMiLCIjZmlsdGVyVXNlbGVzc1JlcXVlc3RzIiwiY2hlY2tGaWVsZHMiLCJwcmltYXJ5IiwiY2FuRGVsZXRlIiwiI2dldEZpZWxkcyIsImdldFNwZWNpYWxWYWx1ZXMiLCJyZWYiLCJhcHBseUluVGhlUm9vdE9iamVjdCIsImRlbGV0ZUlkIiwiZ2V0UmVmZXJlbmNlTnVtYmVyVmFsdWUiLCIjZ2V0U3BlY2lhbFZhbHVlcyIsInVzZXJuYW1lIiwiI2dldEJ1bGtGaWVsZHMiLCJvdGhlclJlcXVlc3RzIiwiaXNTdWJCdWxrIiwiaXNEZWxldGVJdGVtcyIsImdldFRoZVZhbHVlRnJvbSIsImVycm9yRGVzY3JpcHRpb24iLCJub3REZWxldGVJdGVtcyIsImFsbElkcyIsImlkS2V5IiwiaWRzIiwiZ2V0UmVmZXJlbmNlTnVtYmVyQnVsayIsInN1YkJ1bGtzIiwic3ViQnVsa0NvbmZpZyIsImZpZWxkVmFsdWVCdWxrIiwidGFyZ2V0SW5kZXgiLCJyZXEiLCJzdWJCdWxrRGF0YSIsInByb2Nlc3NTdWJCdWxrIiwic3ViQnVsayIsInNwZWMiLCJpc0FycmF5VmFsdWUiLCJzdWJJdGVtIiwibWFwcGVkSXRlbXMiLCJtYXBGaWVsZFZhbHVlcyIsInRlbXBJZCIsIiNwcm9jZXNzU3ViQnVsayIsInBhcmVudE5hbWUiLCJzdWJCdWxrU2V0dGluZ3MiLCIjbWFwRmllbGRWYWx1ZXMiLCJ1bmlxdWVFcnJvcklkIiwid2FzQWxyZWFkeURpc3BsYXllZCIsImRpc3BsYXlFcnJvck9uY2UiLCJpc1JlZiIsInRlbXBFbGVtZW50Iiwic2VnUHJvZEluc3RhbmNlcyIsIlNBVkVfTUVTU0FHRSIsInJlcXVlc3QiLCJ0YXNrIiwic2VnUHJvZEluc3RhbmNlc0lkcyIsIm1lc3NhZ2VzIiwiZGVyaXZlIiwic2VsZWN0ZWRPcHRpb25MYWJlbCIsInJldmlldyIsImFjY2VwdCIsIm51bWVyb1JlZmVyZW5jaWEiLCJhdG1WYWxpZGF0aW9uIiwiaXRlbVRhYmxlIiwidW5pcXVlUHJvcGVydGllcyIsImNvZGVzTWFwIiwic3ViTWFwIiwiZXhjIiwicHJvZHVjdGlvblZhbGlkYXRpb24iLCJzYWxlc0J1dHRvbnMiLCJwcm9wZXJ0aWVzIiwidHlwZXMiLCJzYWxlVHlwZSIsIl9wcm9kdWN0aW9uIiwiX2NvbW1lbnRzIiwiX2luc3RhbmNlcyIsIl9maWx0ZXJzIiwiX2Zvcm1NYW5hZ2VyIiwiTWFuYWdlciIsImJ1c2luZXNzIiwiYXJlYXNDb2xsZWN0aW9uIiwiQXJlYXNDb2xsZWN0aW9uIiwic2VsZWN0ZWRQcm9jZXNzSWQiLCJwcm9jZXNzQ29sbGVjdGlvbiIsIlByb2Nlc3NDb2xsZWN0aW9uIiwiaW5kaWNhdG9ycyIsIkluZGljYXRvcnNDb2xsZWN0aW9uIiwidGFza3NDb2xsZWN0aW9uIiwiVGFza3NDb2xsZWN0aW9uIiwiaW5zdGFuY2VzQ29sbGVjdGlvbiIsIkluc3RhbmNlc0NvbGxlY3Rpb24iLCJ0YXNrc1N0YXRlc0NvbGxlY3Rpb24iLCJUYXNrc1N0YXRlc0NvbGxlY3Rpb24iLCJoaXN0b3J5SXRlbXMiLCJpbnN0YW5jZXMiLCJJbnN0YW5jZXMiLCJ0YXNrSXRlbXMiLCJ0YXNrc1N0YXRlc0l0ZW1zIiwiYXJlYUl0ZW1zIiwiaW5kaWNhdG9yc0l0ZW1zIiwicHJvY2Vzc0l0ZW1zIiwiZmlsdGVycyIsImlzVGFja3MiLCJwcm9jZXNzSWRzIiwicHJvbWlzZXMiLCJpc0ZpcnNMb2FkIiwibGltaXQiLCJyZXNwb25zZXMiLCJyZWFkeSIsInNlbGVjdENsaWNrIiwiaGlzdG9yaWNhbCIsImxvYWRCdXNpbmVzcyIsInJlZnJlc2hTZWxlY3RlZCIsImhhbmRsZUNoYW5nZUNoZWNrZWQiLCJjaGFuZ2VFbnRyaWVzIiwicGFnZXMiLCJwYWdlIiwic2VsZWN0QWxsIiwib25GaWx0ZXIiLCJyZWZyZXNoVmlldyIsInJlZnJlc2hJbnN0YW5jZXMiLCJhcHByb3ZlIiwiZm9ybUl0ZW0iLCJpc1ZhbGlkIiwiY2xlYW4iLCJfcm91dGluZyIsImFwcGxpY2F0aW9uIiwidGFibGVzIiwidmFsaWRSb3V0ZXMiLCJkZXMiLCJjcmVhdG9yVXNlcklkIiwiY3VycmVudFBhZ2UiLCJpc0ZpbHRlcmluZyIsImtleXNGaWx0ZXJzIiwiaXNQYXJhbXNVc2VySWQiLCJyb3V0aW5nIiwidXJpIiwicGF0aG5hbWUiLCJjb3VudFNlZ1Byb2QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInVzZXJTZXNzaW9uIiwiYXNzaWduZWRVc2VySWQiLCJyZUNvdW50IiwiZ2V0Q291bnRTZWdQcm9kIiwibmF2aWdhdGlvbiIsImlzRGF0ZSIsImlzRW1wdHlWYWx1ZSIsImFkZCIsImZvcm1hdCIsImZpbHRlck1vZGFsIiwidHJpbU1hcCIsIm9yaWdpbmFsTWFwIiwibmV3TWFwIiwiX3JlYWN0IiwiX2hpc3RvcmljYWwiLCJfY29udGFpbmVyIiwiX2NvbnRleHQiLCJfc2VjdGlvbkNvbnRhaW5lciIsIl9idXNpbmVzcyIsIkJvdHRvbVBhbmVsIiwidXNlSG9tZUNvbnRleHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJTZWN0aW9uQ29udGFpbmVyIiwiSW5kaWNhdG9yc0NvbnRhaW5lciIsIkhpc3RvcmljYWwiLCJmb3JtYXRUb0Rpc3BsYXkiLCJpc0RlY2ltYWwiLCJkZWNpbWFsc0xpbWl0IiwidmFsdWVUb0Rpc3BsYXkiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJzdHlsZSIsInVzZUdyb3VwaW5nIiwiZm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsIl9saXN0IiwiX2l0ZW0iLCJMaXN0IiwidGl0bGUiLCJiZ0hlYWRlciIsIkl0ZW0iLCJfZm9ybWF0VG9EaXNwbGF5IiwiX2hlbHBlcnMiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsIm51bWJlciIsImdlbmVyYXRlTnVtZXJvUmVmZXJlbmNpYSIsIl9jb21wb25lbnRzIiwiX2ljb25zIiwiX2ljb25zMiIsIl9mcmFtZXJNb3Rpb24iLCJfdXNlT3V0c2lkZUNsaWNrIiwiRHJvcGRvd24iLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ1c2VTdGF0ZSIsIm9uVG9nZ2xlIiwidXNlT3V0c2lkZUNsaWNrIiwiaWNvbnMiLCJ1cCIsImRvd24iLCJBbmltYXRlUHJlc2VuY2UiLCJCdXR0b24iLCJvbkNsaWNrIiwidmFyaWFudCIsIndhdGNoIiwiSWNvbiIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwiZXhpdCIsImRlbGF5IiwiSXRlbXMiLCJjb3VudHNTZWdQcm9kIiwidGFza3MiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJoYW5kbGVDbGljayIsImN1cnJlbnQiLCJpc1NhbWVOb2RlIiwiY29tcG9zZWRQYXRoIiwiaXNBQ2hpbGRyZW4iLCJjb250YWlucyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ2aWV3Qm94IiwicmVmcmVzaCIsImNsZWFuRmlsdGVyIiwiZmlsZSIsImNoZWNrIiwiX2Ryb3Bkb3duIiwiX25ld1JlcXVlc3QiLCJCdXR0b25zIiwiaW5pdGlhbFN0YXRlIiwic2V0RGF0ZVJhbmdlIiwic2V0UGlja2VkIiwic2VsZWN0ZWRJdGVtc0FyZUZyb21DdXJyZW50UGFnZSIsImlzU2VsZWN0ZWQiLCJOZXdSZXF1ZXN0IiwidHJhbnNsYXRlIiwiX21vZGFsIiwiRGVsZXRlQ29tbWVudCIsImhhbmRsZUNsb3NlIiwiYnRuQ29uZmlybSIsImJ0bkNhbmNlbCIsImJvcmRlcmVkIiwiQ29uZmlybU1vZGFsIiwidGV4dCIsIm9uQ2xvc2UiLCJvbkNhbmNlbCIsIm9uQ29uZmlybSIsImZvcm1hdERhdGUiLCJjdXJyZW50RGF0ZSIsInBhc3REYXRlIiwidGltZVVuaXRzIiwibGltaXRzIiwiZGlmZkluTWlsbGlzZWNvbmRzIiwiZGlmZkluU2Vjb25kcyIsImVsYXBzZWRUaW1lIiwiYW1vdW50IiwiZmxvb3IiLCJfZGVsZXRlIiwiX25ld0NvbW1lbnQiLCJfZW1wdHkiLCJpc0FscmVhZHlDb21tZW50ZWQiLCJFbXB0eSIsIk5ld0NvbW1lbnQiLCJSZWFjdCIsImR0IiwiZ2V0VVRDSG91cnMiLCJnZXRVVENNaW51dGVzIiwiZ2V0VGV4dCIsImhhbmRsZURlbGV0ZSIsImhhbmRsZUVkaXQiLCJkaXNwbGF5QWN0aW9ucyIsInVzZXJOYW1lIiwibGFzdG5hbWUiLCJJY29uQnV0dG9uIiwiX2Zvcm0iLCJNb2RhbCIsIkZvcm0iLCJUZXh0YXJlYSIsIkhvbWVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJFcnJvck1vZGFsIiwiRmlsdGVyTW9kYWwiLCJfcHJvY2VzZXNzIiwid2lkZ2V0Iiwib25DbGVhciIsIm9ubHlGaWx0ZXJJbmJveCIsImNsb3NlQ2xpY2tlZCIsIlNlbGVjdCIsIlByb2Nlc3NlcyIsImluY2x1ZGVzQW55V29yZCIsIndvcmRzIiwid29yZCIsImdldFR5cGUiLCJsb3dlcmNhc2VMYWJlbCIsInR5cGVNYXAiLCJtYXRjaGVkVHlwZSIsInBhcnNlVG9OdW1iZXIiLCJ2YWwiLCJzYW5pdGl6ZWRWYWx1ZSIsImluZGV4T2YiLCJsYXN0Q29tbWFJbmRleCIsImxhc3RJbmRleE9mIiwic2xpY2UiLCJfc3ViSXRlbSIsIl9ob29rcyIsIl9nZXRUeXBlIiwiX251bWJlciIsInVwZCIsInNldFVwZGF0ZSIsInVzZUJpbmRlciIsImhhbmRsZUNoYW5nZU9wIiwiaGFuZGxlQ2hhbmdlSW5wdXQiLCJzdWJJdGVtcyIsIlN1Ykl0ZW0iLCJpbnB1dFR5cGUiLCJvcHRpb25zSW5wdXQiLCJsb2NhbGVDb21wYXJlIiwiY29udHJvbCIsIklucHV0TnVtYmVyIiwiYWxsb3dEZWNpbWFscyIsIklucHV0IiwiZm9ybWF0VmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlQmx1ciIsImZvcm1hdHRlZFZhbHVlIiwib25CbHVyIiwiT3BPcHRpb25zIiwiT3BPcHRpb25zTnVtYmVyIiwiY3VzdG9tTm9PcHRpb25zTWVzc2FnZSIsImhlYWRlckhpc3RvcnkiLCJoZWFkZXIiLCJfdXNlVG9vbHRpcCIsInVzZVRvb2x0aXAiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiX3RpcHB5IiwicmVmVGlwcHkiLCJ0b29sdGlwSW5zdGFuY2UiLCJkZXN0cm95IiwidG9vbHRpcENvbnRlbnQiLCJzZXRDb250ZW50IiwiY29udGVudCIsImFsbG93SFRNTCIsIl9sb2FkaW5nUGFnZSIsIl9qdmlldyIsIl9yZXF1ZXN0Rm9ybSIsIl91c2VTZXNzaW9uIiwiX2JvdHRvbVBhbmVsIiwiX3NhdmVTdWNjZXNzIiwiX2Vycm9yTW9kYWwiLCJUYXNrSW5zdGFuY2VzTW9uaXRvciIsInNldFJlcXVlc3RGb3JtIiwiY29uZmlybSIsInNldENvbmZpcm0iLCJoYW5kbGVDb25maXJtIiwiZGF0ZVJhbmdlIiwidXNlU2Vzc2lvbiIsImV4cGlyYXRpb25EYXRlIiwiTG9hZGluZ1BhZ2UiLCJQcm92aWRlciIsIlRhYmxlIiwiUmVxdWVzdEZvcm0iLCJTYXZlZFN1Y2Nlc3MiLCJoZWFkZXJQZXJjZW50IiwibGVmdEl0ZW1zIiwicmlnaHRJdGVtcyIsIkluZGljYXRvckl0ZW0iLCJfZGluYW15Y0Zvcm0iLCJDT0xPUlMiLCJjb2xvckNscyIsImNvbG9yIiwicGVyY2VudGFnZSIsIlRyYWZmaWNMaWdodCIsIl9pbnB1dERhdGUiLCJEYXRlcyIsImZyb21EYXRlIiwidG9EYXRlIiwiSW5wdXREYXRlIiwiZGF0ZXMiLCJlcXVhbE9iaiIsImVxdWFsQXJzIiwiaWNvbkZpbHRlciIsIl9kYXRlcyIsIl9pY29uRmlsdGVyIiwiX3JpcHBsZSIsIkhlYWRlciIsImNvdW50Iiwic2V0Q291bnQiLCJidXR0b25SZWYiLCJyaXBwbGUiLCJSaXBwbGVFZmZlY3QiLCJhZGRSaXBwbGVFZmZlY3QiLCJjb2x1bW5zIiwiY29sdW1uV2lkdGhTZWxlY3QiLCJjb2x1bW5zTW9uaXRvckFuZEluc3RhbmNlcyIsIlNlbGVjdENvbHVtbiIsImlzU2VsZWN0ZWRBbGwiLCJDaGVja2JveCIsImFyciIsImRlZmF1bHRBcnIiLCJhcnJPcmRlcmVkIiwiX2lucHV0RmlsdGVyIiwiY3JpdGVyaWFzIiwiaXNTZWxlY3QiLCJvbkZpbHRlcklucHV0IiwidmFsdWVQYXJhbXMiLCJ2YWx1ZVByb2Nlc3MiLCJjbGFzc05hbWVQcmVmaXgiLCJub09wdGlvbnNNZXNzYWdlIiwicGxhY2Vob2xkZXIiLCJTZWFyY2hJbnB1dEZpbHRlciIsImxpc3RPcHRpb25zIiwic2VsZWN0VmFsdWUiLCJfYnV0dG9ucyIsIl9oZWFkZXIiLCJwYWdlck5leHQiLCJvbk5leHQiLCJvblByZXYiLCJJdGVtVGFibGUiLCJzaG93U2VsZWN0Iiwib3B0aW9uc0NoYW5nZVJvd3MiLCJpc1Zpc2libGVIZWFkZXIiLCJKVmlldyIsIkNoZWNrIiwiaXNSZXR1cm5lZCIsIl9jaGVjayIsIl9sb2FkSW5zdGFuY2UiLCJhc3NpbmdlZFVzZXJzIiwiYXNzaWduZWRSb2wiLCJ0YXNrU3RhdGUiLCJhc3NpZ25lZFVzZXJzIiwic2V0U2hvdyIsImhhbmRsZU1hZ25pZmllciIsImhhbmRsZU1vdXNlT3ZlciIsImhhbmRsZU1vdXNlTGVhdmUiLCJjbHNJY29uIiwiaXNBcHBsaWNhdGlvbkVudHJ5IiwiYXNzaWduZWQiLCJvbk1vdXNlT3ZlciIsIm9uTW91c2VMZWF2ZSIsIkxvYWRJbnN0YW5jZSIsImFyZWEiLCJleHBpcmF0aW9uIiwiSXRlbUxpc3QiLCJzdGF0dXNlcyIsIk1vZGFsTmV3UmVxdWVzdCIsInNldFNlbGVjdGVkUHJvY2Vzc0lkIiwicHJvY2Vzc0FwcGxpY2FudCIsIm9wdCIsIl9hY3Rpb25zIiwiX2FjdGlvbnMyIiwiQWN0aW9ucyIsIkNvbnRlbnQiLCJNYXRlcmlhbEFjdGlvbnMiLCJGYWN0aWJpbGl0eUFjdGlvbnMiLCJSZXF1ZXN0Rm9ybUNvbnRleHQiLCJ1c2VSZXF1ZXN0Rm9ybUNvbnRleHQiLCJGZXRjaGluZyIsInNldEZldGNoaW5nIiwiU3Bpbm5lciIsIl90eXBlcyIsIl91c2VUYWJUcmFwcGVyIiwiX2FjdGlvbnMzIiwiX2ZldGNoaW5nIiwiRm9ybUNvbnRlbnQiLCJtZW1vIiwibW9kYWxSZWYiLCJzZXRGb3JtIiwidXNlVGFiVHJhcHBlciIsImZvY3VzIiwiUHJvZHVjY2lvbiIsIlByb2R1Y3Rpb25BY3Rpb25zIiwiRmFjdGlibGlkYWQiLCJBY3Rpb25Db250ZW50Iiwicm9sZSIsInRhYkluZGV4IiwiV2lzZUZvcm0iLCJtb2RlbCIsInRlbXBsYXRlIiwidG9vbHRpcERhdGEiLCJvcGVyYXRvciIsImJhc2VDb25kaXRpb24iLCJkYXRhSGVhZCIsImdhcCIsImJkIiwibmFtZVN0b3JhZ2UiLCJsYWJlbHMiLCJsZXZlbCIsIl9pbWFnZSIsIl93cmFwcGVyIiwiX2FwcEljb24iLCJ0aGVtZSIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwidGhlbWVTdG9yYWdlIiwiZGVmYXVsdFRoZW1lIiwidXNlclRoZW1lIiwiaXNEYXJrIiwic2V0SXNEYXJrIiwic2V0VXNlciIsImxvZ28iLCJpbWciLCJwcm9maWxlSW1hZ2UiLCJtZWRpYVNlcnZlciIsImJhc2VEaXIiLCJuYW1lcyIsImxhc3ROYW1lcyIsIkltYWdlIiwic3JjIiwiYWx0IiwiQXBwSWNvbiIsInNldEZvcm1zIiwidXNlTWVtbyIsIlJlcXVlc3RGb3JtSXRlbSIsIl9mb3JtQ29udGVudCIsImZvcm11bGFQYWdlcyIsIkZvcm11bGFDYWxjdWxhdG9yIiwiZGF0YVNlcnZpY2VQYWdlcyIsIkRhdGFTZXJ2aWNlUGFnZXMiLCJpc0Vycm9yRm9ybSIsIkRpbmFteWNGb3JtQ29udGV4dCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwidHJhZmljTGlnaHQiLCJJbnB1dFRyYWZmaWNMaWdodCIsImJ1dHRvbkdyb3VwIiwiQnV0dG9uR3JvdXAiLCJpY29uQ2hlY2tJbnB1dCIsIkljb25DaGVja0lucHV0Iiwic3VibWl0IiwiY29sbGFwc2libGUiLCJDb2xsYXBzaWJsZSIsInNlY3Rpb24iLCJTZWN0aW9uIiwiRGl2IiwianZpZXciLCJociIsIkhyIiwiTWF0ZXJpYWxEaXNjaGFyZ2VRdW9hdGlvbiIsInBsdXNJbnB1dCIsIlBsdXNJbnB1dCIsImN1cnJlbmN5IiwiQ3VycmVuY3lJbnB1dCIsInRvdGFsaXplciIsIlRvdGFsaXplciIsIlBlcmNlbnRhZ2VJbnB1dCIsImRlcGVuZGVudENvbGxhcHNpYmxlIiwiRGVwZW5kZW50Q29sbGFwc2libGUiLCJtb2RhbCIsImFkZEZpbGUiLCJBZGRGaWxlIiwid2lzZUNoZWNrYm94IiwidG9vbHRpcCIsIlRvb2x0aXAiLCJ0b3BMYWJlbCIsIlRvcExhYmVsIiwialZpZXdUaXRsZSIsIkpWaWV3VGl0bGUiLCJMYWJlbCIsInRyZWUiLCJUcmVlIiwiVG90YWxpemVyQUZBIiwiQWxlcnRNb2RhbCIsIkNvbXBsZXRlRGF0ZSIsImlucHV0RGF0ZSIsIkRlY2ltYWwiLCJmaWVsZHNXcmFwcGVyIiwiRmllbGRzV3JhcHBlciIsImF0bVRpdGxlcyIsIkFUTVRpdGxlcyIsIlZhbGlkYXRpb25Nb2RhbCIsImluZGljYXRvcnNGaWVsZCIsIkluZGljYXRvcnNGaWVsZCIsInRleHRGaWVsZCIsIlRleHRGaWVsZCIsImlucHV0UmVmZXJlbmNlTnVtYmVyIiwiSW5wdXRSZWZlcmVuY2VOdW1iZXIiLCJpbnB1dFRleHQiLCJJbnB1dFRleHQiLCJnZXREZWVwQWN0aXZlRWxlbWVudCIsImFjdGl2ZUVsZW1lbnQiLCJzaGFkb3dSb290IiwiZGlzcGxheSIsInRyYXAiLCJmb2N1c2FibGUiLCJxdWVyeVNlbGVjdG9yIiwic2VsZWN0Rmlyc3RFbGVtZW50Iiwib2ZmIl0sInNvdXJjZXMiOlsiL3RzL21hbmFnZXIvYnVzaW5lc3MudHMiLCIvdHMvbWFuYWdlci9jb21tZW50cy50cyIsIi90cy9tYW5hZ2VyL2ZpbHRlcnMvZGVmYXVsdC50cyIsIi90cy9tYW5hZ2VyL2ZpbHRlcnMvaW5kZXgudHMiLCIvdHMvbWFuYWdlci9maWx0ZXJzL3Byb2Nlc3MudHMiLCIvdHMvbWFuYWdlci9mb3JtL19hY3Rpb24tbWFuYWdlci50cyIsIi90cy9tYW5hZ2VyL2Zvcm0vX2ZpbmQtbWFwLnRzIiwiL3RzL21hbmFnZXIvZm9ybS9hY3Rpb24tbWFuYWdlci9hZmEudHMiLCIvdHMvbWFuYWdlci9mb3JtL2FjdGlvbi1tYW5hZ2VyL2F0bS50cyIsIi90cy9tYW5hZ2VyL2Zvcm0vYWN0aW9uLW1hbmFnZXIvY29weS50cyIsIi90cy9tYW5hZ2VyL2Zvcm0vYWN0aW9uLW1hbmFnZXIvZmV0Y2gudHMiLCIvdHMvbWFuYWdlci9mb3JtL2FjdGlvbi1tYW5hZ2VyL2ZpbmQtbWFwLnRzIiwiL3RzL21hbmFnZXIvZm9ybS9hY3Rpb24tbWFuYWdlci9pbmRleC50cyIsIi90cy9tYW5hZ2VyL2Zvcm0vYWN0aW9uLW1hbmFnZXIvaXRlbXMudHMiLCIvdHMvbWFuYWdlci9mb3JtL2FjdGlvbi1tYW5hZ2VyL3Byb2QudHMiLCIvdHMvbWFuYWdlci9mb3JtL2FjdGlvbi1tYW5hZ2VyL3NlYXJjaGVycy50cyIsIi90cy9tYW5hZ2VyL2Zvcm0vYWN0aW9uLW1hbmFnZXIvc2VsZWN0LXNlYWwudHMiLCIvdHMvbWFuYWdlci9mb3JtL2FjdGlvbi1tYW5hZ2VyL3NlbGVjdC50cyIsIi90cy9tYW5hZ2VyL2Zvcm0vYWN0aW9uLW1hbmFnZXIvc2V0dGVycy50cyIsIi90cy9tYW5hZ2VyL2Zvcm0vYWN0aW9uLW1hbmFnZXIvdGFibGUudHMiLCIvdHMvbWFuYWdlci9mb3JtL2FjdGlvbi1tYW5hZ2VyL3RyYWZmaWN0LnRzIiwiL3RzL21hbmFnZXIvZm9ybS9hY3Rpb24tbWFuYWdlci91dGlscy50cyIsIi90cy9tYW5hZ2VyL2Zvcm0vY29uZGl0aW9uLXZhbGlkYXRvci50cyIsIi90cy9tYW5hZ2VyL2Zvcm0vZm9ybS1tYW5hZ2VyLnRzIiwiL2Zvcm0tbW9kZWwtdHlwZXMudHMiLCIvdHMvbWFuYWdlci9mb3JtL2Zvcm0tbW9kZWwudHMiLCIvdHMvbWFuYWdlci9mb3JtL2dldC1yZWZlcmVuY2UtbnVtYmVyL2J1bGtzLnRzIiwiL3RzL21hbmFnZXIvZm9ybS9nZXQtcmVmZXJlbmNlLW51bWJlci92YWx1ZS50cyIsIi90cy9tYW5hZ2VyL2Zvcm0vdmFsaWRhdGlvbnMvYWNjZXB0L2F0bS50cyIsIi90cy9tYW5hZ2VyL2Zvcm0vdmFsaWRhdGlvbnMvYWNjZXB0L3Byb2R1Y3Rpb24udHMiLCIvdHMvbWFuYWdlci9mb3JtL3ZhbGlkYXRpb25zL3ZhbGlkYXRpb25zLnRzIiwiL3RzL21hbmFnZXIvaW5kZXgudHMiLCIvdHMvbWFuYWdlci9pbnN0YW5jZXMudHMiLCIvdHMvbWFuYWdlci90cmltLW1hcC50cyIsIi90cy92aWV3cy9ib3R0b20tcGFuZWwudHN4IiwiL3RzL3ZpZXdzL2J1c2luZXNzL2Zvcm1hdC10by1kaXNwbGF5LnRzIiwiL3RzL3ZpZXdzL2J1c2luZXNzL2luZGV4LnRzeCIsIi90cy92aWV3cy9idXNpbmVzcy9pdGVtLnRzeCIsIi90cy92aWV3cy9idXR0b25zL2Ryb3Bkb3duL2luZGV4LnRzeCIsIi90cy92aWV3cy9idXR0b25zL2Ryb3Bkb3duL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2J1dHRvbnMvZHJvcGRvd24vaXRlbXMudHN4IiwiL3RzL3ZpZXdzL2J1dHRvbnMvZHJvcGRvd24vdXNlLW91dHNpZGUtY2xpY2sudHMiLCIvdHMvdmlld3MvYnV0dG9ucy9pY29ucy50cyIsIi90cy92aWV3cy9idXR0b25zL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21tZW50cy9kZWxldGUudHN4IiwiL3RzL3ZpZXdzL2NvbW1lbnRzL2Zvcm1hdC1kYXRlLnRzIiwiL3RzL3ZpZXdzL2NvbW1lbnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21tZW50cy9pdGVtLnRzeCIsIi90cy92aWV3cy9jb21tZW50cy9uZXctY29tbWVudC50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS9pbmRleC50c3giLCIvdHMvdmlld3MvZXJyb3ItbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2ZpbHRlcnMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2ZpbHRlcnMvbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2ZpbHRlcnMvcHJvY2VzZXNzL2dldC10eXBlLnRzIiwiL3RzL3ZpZXdzL2ZpbHRlcnMvcHJvY2VzZXNzL2luZGV4LnRzeCIsIi90cy92aWV3cy9maWx0ZXJzL3Byb2Nlc2Vzcy9pdGVtLnRzeCIsIi90cy92aWV3cy9maWx0ZXJzL3Byb2Nlc2Vzcy9udW1iZXIudHN4IiwiL3RzL3ZpZXdzL2ZpbHRlcnMvcHJvY2VzZXNzL29wdGlvbnMudHMiLCIvdHMvdmlld3MvZmlsdGVycy9wcm9jZXNlc3Mvc3ViLWl0ZW0udHN4IiwiL3RzL3ZpZXdzL2hpc3RvcmljYWwvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2hpc3RvcmljYWwvaXRlbS50c3giLCIvdHMvdmlld3MvaGlzdG9yaWNhbC91c2UtdG9vbHRpcC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2luZGljYXRvcnMvY29udGFpbmVyLnRzeCIsIi90cy92aWV3cy9pbmRpY2F0b3JzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2ludGVyZmFjZS9pbmRleC50cyIsIi90cy92aWV3cy9qdmlldy9oZWFkZXIvZGF0ZXMudHN4IiwiL3RzL3ZpZXdzL2p2aWV3L2hlYWRlci9lcXVhbC1hcnJzLnRzIiwiL3RzL3ZpZXdzL2p2aWV3L2hlYWRlci9pY29uLWZpbHRlci50cyIsIi90cy92aWV3cy9qdmlldy9oZWFkZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2p2aWV3L2hlYWRlci9vcHRpb25zLnRzIiwiL3RzL3ZpZXdzL2p2aWV3L2hlYWRlci9zZWxlY3QudHN4IiwiL3RzL3ZpZXdzL2p2aWV3L2luZGV4LnRzeCIsIi90cy92aWV3cy9qdmlldy9pdGVtL2NoZWNrLnRzeCIsIi90cy92aWV3cy9qdmlldy9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9qdmlldy9pdGVtL3VzZS10b29sdGlwLnRzeCIsIi90cy92aWV3cy9saXN0L2hlYWRlci50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtLnRzeCIsIi90cy92aWV3cy9sb2FkLWluc3RhbmNlLnRzeCIsIi90cy92aWV3cy9uZXctcmVxdWVzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbmV3LXJlcXVlc3QvbW9kYWwudHN4IiwiL3RzL3ZpZXdzL3JlcXVlc3QtZm9ybS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9yZXF1ZXN0LWZvcm0vY29udGV4dC50cyIsIi90cy92aWV3cy9yZXF1ZXN0LWZvcm0vZmV0Y2hpbmcudHN4IiwiL3RzL3ZpZXdzL3JlcXVlc3QtZm9ybS9mb3JtLWNvbnRlbnQudHN4IiwiL3RzL3ZpZXdzL3JlcXVlc3QtZm9ybS9mb3Jtcy1URU1QT1JBTC9hbHRhLW1hdGVyaWFsL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL3JlcXVlc3QtZm9ybS9mb3Jtcy1URU1QT1JBTC9mYWN0aWJpbGlkYWQvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvcmVxdWVzdC1mb3JtL2Zvcm1zLVRFTVBPUkFML3Byb2R1Y2Npb24vYWN0aW9ucy50c3giLCIvdHMvdmlld3MvcmVxdWVzdC1mb3JtL2Zvcm1zLVRFTVBPUkFML3Byb2R1Y2Npb24vcHJvZHVjY2lvbi50cyIsIi90cy92aWV3cy9yZXF1ZXN0LWZvcm0vaGVhZGVyLnRzeCIsIi90cy92aWV3cy9yZXF1ZXN0LWZvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3JlcXVlc3QtZm9ybS9pdGVtLnRzeCIsIi90cy92aWV3cy9yZXF1ZXN0LWZvcm0vc2F2ZS1zdWNjZXNzLnRzeCIsIi90cy92aWV3cy9yZXF1ZXN0LWZvcm0vdHlwZXMudHMiLCIvdHMvdmlld3MvcmVxdWVzdC1mb3JtL3VzZS10YWItdHJhcHBlci50cyIsIi90cy92aWV3cy9zZWN0aW9uLWNvbnRhaW5lci50c3giLCIvdHMvdmlld3MvdXNlLXNlc3Npb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxT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