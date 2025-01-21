System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.1.2/components", "uuid@9.0.1", "pragmate-ui@0.1.2/icons", "pragmate-ui@0.1.2/modal", "pragmate-ui@0.1.2/form", "@bgroup/jview@1.0.3/select"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, SelectionPanel, __beyond_pkg, hmr;
  _export("SelectionPanel", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi012Components) {
      dependency_3 = _pragmateUi012Components;
    }, function (_uuid2) {
      dependency_4 = _uuid2;
    }, function (_pragmateUi012Icons) {
      dependency_5 = _pragmateUi012Icons;
    }, function (_pragmateUi012Modal) {
      dependency_6 = _pragmateUi012Modal;
    }, function (_pragmateUi012Form) {
      dependency_7 = _pragmateUi012Form;
    }, function (_bgroupJview103Select) {
      dependency_8 = _bgroupJview103Select;
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
          "vspecifier": "@bgroup/jview@1.0.3/selection-panel"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/components', dependency_3], ['uuid', dependency_4], ['pragmate-ui/icons', dependency_5], ['pragmate-ui/modal', dependency_6], ['pragmate-ui/form', dependency_7], ['@bgroup/jview/select', dependency_8]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bgroup/jview@1.0.3/selection-panel');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./buttons
      *************************/
      ims.set('./buttons', {
        hash: 3173106519,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Buttons = Buttons;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          function Buttons() {
            const {
              handleModal,
              setValues,
              init,
              setShow,
              setStates,
              states,
              isSaveConf
            } = (0, _context.usePanelContext)();
            const close = () => {
              setValues({
                ...init
              });
              setShow(false);
              setStates({
                ...states,
                items: states.originalItems
              });
            };
            const save = isSaveConf ? handleModal : close;
            const label = isSaveConf ? "Guardar" : "Cancelar";
            return _react.default.createElement("div", {
              className: "selection-buttons"
            }, _react.default.createElement(_components.Button, {
              variant: "secondary",
              label: label,
              onClick: save
            }), _react.default.createElement(_components.Button, {
              variant: "primary",
              label: "Aceptar",
              type: "submit"
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./checkbox/edit
      *******************************/

      ims.set('./checkbox/edit', {
        hash: 257364223,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Edit = Edit;
          var _react = require("react");
          function Edit({
            isEdit,
            table,
            value,
            setValue
          }) {
            const handleChange = event => {
              event.stopPropagation();
              const value = event.currentTarget.value;
              //  table.label = value
              setValue(value);
            };
            if (isEdit) {
              return _react.default.createElement("input", {
                placeholder: 'edit',
                value: value,
                onChange: handleChange
              });
            }
            return _react.default.createElement("span", null, !!value ? value : table.label);
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./checkbox/index
      ********************************/

      ims.set('./checkbox/index', {
        hash: 1186490152,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Checkboxes = Checkboxes;
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          var _uuid = require("uuid");
          function Checkboxes() {
            const {
              states
            } = (0, _context.usePanelContext)();
            const output = _react.default.useMemo(() => {
              return states.items.map(table => {
                return _react.default.createElement(_item.Item, {
                  key: (0, _uuid.v4)(),
                  table: table
                });
              });
            }, [states.count]);
            return _react.default.createElement("div", null, output);
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./checkbox/item
      *******************************/

      ims.set('./checkbox/item', {
        hash: 3351850182,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          var _edit = require("./edit");
          function Item({
            table
          }) {
            const {
              isEditColumns,
              max,
              setValues,
              values,
              states,
              setStates,
              entity
            } = (0, _context.usePanelContext)();
            const [value, setValue] = _react.default.useState(table.label);
            const [isEdit, setIsEdit] = _react.default.useState(false);
            const handleChange = event => {
              event.stopPropagation();
              const {
                name,
                type,
                checked
              } = event.currentTarget;
              if (type === 'checkbox' && name !== 'all') {
                const allValues = {
                  ...values
                };
                delete allValues.all;
                delete allValues.search;
                const validateChecks = Object.values(allValues).filter(table => table === true);
                if (validateChecks.length >= max && checked) return;
                setValues({
                  ...values,
                  [name]: checked,
                  all: validateChecks.length === max - 1
                });
              }
            };
            const handleEdit = event => {
              event.stopPropagation();
              if (isEdit && value) {
                const index = states.items.findIndex(entry => entry.id === table.id && table.label === entry.label);
                const item = structuredClone(table);
                item.label = value;
                const items = [...states.items];
                items[index] = item;
                setStates({
                  ...states,
                  items
                });
                localStorage.setItem(`tables-${entity}`, JSON.stringify(items));
              }
              setIsEdit(!isEdit);
            };
            const icon = isEdit ? "check" : "edit";
            return _react.default.createElement("div", {
              className: 'item-check'
            }, _react.default.createElement("div", {
              className: "pui-checkbox"
            }, _react.default.createElement("input", {
              style: {
                display: "none"
              },
              type: "checkbox",
              className: "pui-checkbox--input",
              id: table.id,
              name: table.id,
              checked: values[table.id] ?? "",
              onChange: handleChange
            }), _react.default.createElement("label", {
              className: "pui-checkbox--label",
              htmlFor: table.id
            }, _react.default.createElement("span", null, _react.default.createElement("svg", {
              width: "12px",
              height: "9px",
              viewBox: "0 0 12 9"
            }, _react.default.createElement("polyline", {
              points: "1 5 4 8 11 1"
            }))), _react.default.createElement(_edit.Edit, {
              table: table,
              value: value,
              setValue: setValue,
              isEdit: isEdit
            }))), isEditColumns && _react.default.createElement(_icons.IconButton, {
              icon: icon,
              onClick: handleEdit
            }));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./confi-list/new
      ********************************/

      ims.set('./confi-list/new', {
        hash: 3528566299,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.New = New;
          var React = require("react");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../context");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          function New() {
            const {
              configList,
              handleModal,
              states,
              values,
              setConfigList,
              keyConf
            } = (0, _context.usePanelContext)();
            const [value, setValue] = React.useState("");
            const [error, setError] = React.useState("");
            if (!configList.new) return null;
            const handleChange = ({
              currentTarget
            }) => {
              setValue(currentTarget.value);
              setError("");
            };
            const close = () => {
              setValue("");
              setError("");
            };
            const save = () => {
              if (!value) {
                setError("Complete el campo");
                return;
              }
              ;
              const items = states.items.map(item => {
                return {
                  ...item,
                  checked: values[item.id]
                };
              });
              const newConf = {
                name: value,
                items
              };
              let prevStorage = localStorage.getItem(keyConf);
              prevStorage = prevStorage ? JSON.parse(prevStorage) : null;
              const isInStorage = prevStorage ? prevStorage.some(item => item.name === newConf.name) : false;
              if (isInStorage) {
                setError("Ya existe una configuración con ese nombre");
                return;
              }
              const newStorage = prevStorage ? prevStorage.concat([newConf]) : [newConf];
              const options = newStorage.map(item => {
                return {
                  value: JSON.stringify(item.items),
                  label: item.name ?? item.label
                };
              });
              localStorage.setItem(keyConf, JSON.stringify(newStorage));
              setConfigList({
                ...configList,
                options,
                new: false
              });
              setValue("");
              setError("");
            };
            return React.createElement(_modal.Modal, {
              show: true,
              className: "new-config",
              onClose: handleModal
            }, React.createElement(_form.Form, {
              onSubmit: save
            }, React.createElement("fieldset", null, React.createElement("legend", null, "Configuraci\u00F3n nueva"), React.createElement(_form.Input, {
              type: "text",
              label: "Nombre",
              name: "name",
              onChange: handleChange
            }), error && React.createElement("span", {
              className: 'error-form'
            }, error)), React.createElement(_components.Button, {
              disabled: !value,
              variant: 'primary',
              type: 'submit'
            }, "Guardar")));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 282763052,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.usePanelContext = exports.PanelContext = void 0;
          var _react = require("react");
          const PanelContext = exports.PanelContext = (0, _react.createContext)({});
          const usePanelContext = () => (0, _react.useContext)(PanelContext);
          exports.usePanelContext = usePanelContext;
        }
      });

      /***********************************
      INTERNAL MODULE: ./hooks/cutom-hooks
      ***********************************/

      ims.set('./hooks/cutom-hooks', {
        hash: 2560004999,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.customHooks = customHooks;
          var _react = require("react");
          var _context = require("../context");
          function customHooks() {
            const {
              container,
              setShow,
              init,
              setValues,
              max,
              tables,
              setInit,
              entity
            } = (0, _context.usePanelContext)();
            (0, _react.useEffect)(() => {
              const confTables = !!localStorage.getItem(entity) ? JSON.parse(localStorage.getItem(entity)) : tables.slice(0, max);
              const keys = confTables.map(item => item.key ?? item.id);
              tables.forEach(table => {
                init[table.id] = keys.includes(table.id);
              });
              const allValues = {
                ...init
              };
              delete allValues.all;
              delete allValues.search;
              const checks = Object.values(allValues).filter(table => table === true);
              setInit({
                ...init,
                all: checks.length === max
              });
              setValues({
                ...init,
                all: checks.length === max
              });
            }, [tables]);
            (0, _react.useEffect)(() => {
              const handleClick = event => {
                const {
                  current
                } = container;
                const isSameNode = current === event.target || current === event.currentTarget || event.composedPath()[0] === current;
                const isAChildren = current?.contains(event.composedPath()[0]);
                if (!isSameNode && !isAChildren) setShow(false);
              };
              document.addEventListener("click", handleClick);
              return () => document.removeEventListener("click", handleClick);
            }, []);
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./icon
      **********************/

      ims.set('./icon', {
        hash: 404774168,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.iconPanel = void 0;
          const iconPanel = exports.iconPanel = {
            viewBox: "0 0 25.99 26.001",
            icon: `<g id="panel_de_control" data-name="panel de control" xmlns="http://www.w3.org/2000/svg">
            <path id="Trazado_11012" data-name="Trazado 11012" d="M11.046,19.406V14.029a.527.527,0,0,0-.2-.406A4.475,4.475,0,0,1,7.8,9.16,4.637,4.637,0,0,1,11.554,5a4.473,4.473,0,0,1,2.232,8.623c-.2.1-.3.2-.3.406V24.681a1.142,1.142,0,0,1-.812,1.217,1.126,1.126,0,0,1-1.623-1.116V19.406Z" transform="translate(-0.084 -0.116)" />
            <path id="Trazado_11013" data-name="Trazado 11013" d="M3.446,22.954V21.128c0-.2,0-.2-.2-.3a4.45,4.45,0,0,1,.71-8.623,4.6,4.6,0,0,1,5.174,3.551,4.43,4.43,0,0,1-2.942,4.971c-.2.1-.3.2-.2.406v3.449A1.2,1.2,0,0,1,4.765,25.9a1.172,1.172,0,0,1-1.217-1.217A9.282,9.282,0,0,1,3.446,22.954Z" transform="translate(-0.194 -0.011)" />
            <path id="Trazado_11014" data-name="Trazado 11014" d="M21.463,12.2a4.449,4.449,0,0,1,4.464,4.768,4.508,4.508,0,0,1-2.942,3.855c-.2.1-.3.2-.3.406v3.551A1.3,1.3,0,0,1,21.666,26a1.23,1.23,0,0,1-1.319-.812,1.1,1.1,0,0,1-.1-.507V21.229c0-.2-.1-.3-.2-.3A4.127,4.127,0,0,1,17.1,17.272,4.423,4.423,0,0,1,21.057,12.3C21.158,12.2,21.26,12.2,21.463,12.2Z" transform="translate(0.05 -0.011)" />
            <path id="Trazado_11015" data-name="Trazado 11015" d="M22.635,11.256H20.2V1.619A1.185,1.185,0,0,1,21.316.3a1.258,1.258,0,0,1,1.319,1.217v9.739Z" transform="translate(0.095 -0.183)" />
            <path id="Trazado_11016" data-name="Trazado 11016" d="M5.835,11.258H3.4V1.418A1.2,1.2,0,0,1,4.414.2a1.164,1.164,0,0,1,1.319.812c0,.1.1.3.1.406v9.536C5.835,11.156,5.835,11.156,5.835,11.258Z" transform="translate(-0.147 -0.185)" />
            <path id="Trazado_11017" data-name="Trazado 11017" d="M13.435,3.953H11V1.316A1.406,1.406,0,0,1,12.116.2a1.136,1.136,0,0,1,1.217,1.014A24.721,24.721,0,0,1,13.435,3.953Z" transform="translate(-0.037 -0.185)" />
          </g>`
          };
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 107461777,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SelectionPanel = SelectionPanel;
          var _react = require("react");
          var _context = require("./context");
          var _view = require("./view");
          var _new = require("./confi-list/new");
          /*bundle*/
          function SelectionPanel(props) {
            const {
              tables,
              entity
            } = props;
            const [show, setShow] = (0, _react.useState)(false);
            const [init, setInit] = (0, _react.useState)({
              search: "",
              all: false
            });
            const [values, setValues] = (0, _react.useState)({
              search: "",
              all: false
            });
            const tablesLocal = localStorage.getItem(`tables-${entity}`);
            const tablesStorage = !!tablesLocal ? [...JSON.parse(tablesLocal)] : [...tables];
            const [states, setStates] = (0, _react.useState)({
              items: structuredClone([...tablesStorage]),
              originalItems: structuredClone([...tables]),
              count: 0
            });
            const keyConf = `conf-${entity}`;
            const prevStorage = localStorage.getItem(keyConf);
            const storage = prevStorage ? JSON.parse(prevStorage) : [];
            const options = storage.map(item => {
              return {
                value: JSON.stringify(item.items),
                label: item.name
              };
            });
            const [configList, setConfigList] = _react.default.useState({
              options,
              selected: {},
              new: false
            });
            const container = (0, _react.useRef)(null);
            const handleModal = () => setConfigList({
              ...configList,
              new: !configList.new
            });
            const value = {
              values,
              setValues,
              states,
              setStates,
              show,
              setShow,
              container,
              setInit,
              init,
              configList,
              setConfigList,
              handleModal,
              keyConf,
              new: configList.new,
              ...props,
              tables
            };
            return _react.default.createElement(_context.PanelContext.Provider, {
              value: value
            }, _react.default.createElement(_view.View, null), _react.default.createElement(_new.New, null));
          }
          SelectionPanel.defaultProps = {
            entity: "operations",
            max: 9,
            isMax: true,
            selectAll: true
          };
        }
      });

      /*************************
      INTERNAL MODULE: ./message
      *************************/

      ims.set('./message', {
        hash: 691606123,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Message = Message;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("./context");
          function Message() {
            const {
              max,
              isMax
            } = (0, _context.usePanelContext)();
            if (!isMax) return null;
            return _react.default.createElement("div", {
              className: "content-alert"
            }, _react.default.createElement("div", {
              className: "alert-selection"
            }, _react.default.createElement(_icons.Icon, {
              icon: "exclamation-gt"
            }), _react.default.createElement("span", null, "Puede selecionar ", max, " columnas como m\u00E1ximo y una como m\u00EDnimo")));
          }
        }
      });

      /************************
      INTERNAL MODULE: ./search
      ************************/

      ims.set('./search', {
        hash: 3164824538,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Search = Search;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("./context");
          function Search() {
            const {
              values,
              setValues,
              setStates,
              states,
              tables
            } = (0, _context.usePanelContext)();
            const handleChange = event => {
              const {
                name,
                value
              } = event.currentTarget;
              const search = value.toLowerCase();
              const newStates = tables.filter(table => table.label.toLowerCase().includes(search));
              setValues({
                ...values,
                [name]: value
              });
              setStates({
                ...states,
                items: newStates,
                count: states.count + 1
              });
            };
            return _react.default.createElement("div", {
              className: "content-input"
            }, _react.default.createElement("input", {
              type: "search",
              name: "search",
              value: values.search ?? "",
              onChange: handleChange,
              placeholder: "Buscar columnas"
            }), _react.default.createElement(_icons.Icon, {
              icon: "search"
            }));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./select-all
      ****************************/

      ims.set('./select-all', {
        hash: 3237776622,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SelectAll = SelectAll;
          var _react = require("react");
          var _context = require("./context");
          var _form = require("pragmate-ui/form");
          function SelectAll() {
            const {
              selectAll,
              values,
              max,
              setValues
            } = (0, _context.usePanelContext)();
            const isAllChecked = () => {
              const allValues = structuredClone(values);
              delete allValues.all;
              delete allValues.search;
              const checks = Object.values(allValues).filter(table => table === true);
              const valid = checks.length === max ? true : false;
              return valid;
            };
            const handleChange = event => {
              const {
                name,
                checked
              } = event.currentTarget;
              if (name === "all") {
                const allValues = {
                  ...values
                };
                delete allValues.all;
                delete allValues.search;
                const sliceValues = Object.keys(allValues).slice(0, max);
                const endValues = Object.keys(allValues).slice(max, Object.keys(allValues).length);
                sliceValues.forEach(table => {
                  allValues[table] = checked;
                });
                endValues.forEach(table => {
                  allValues[table] = false;
                });
                setValues({
                  ...allValues,
                  all: checked,
                  search: values.search
                });
              }
            };
            return _react.default.createElement(_react.default.Fragment, null, selectAll && _react.default.createElement("div", {
              className: "item-select-all"
            }, _react.default.createElement(_form.Checkbox, {
              id: "all",
              name: "all",
              label: "Seleccionar todos",
              checked: values.all && isAllChecked(),
              onChange: handleChange
            })));
          }
          ;
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 2692296990,
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
        hash: 941243026,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _select = require("@bgroup/jview/select");
          var _context = require("./context");
          var _search = require("./search");
          var _selectAll = require("./select-all");
          var _message = require("./message");
          var _buttons = require("./buttons");
          var _icon = require("./icon");
          var _cutomHooks = require("./hooks/cutom-hooks");
          var _checkbox = require("./checkbox");
          function View() {
            (0, _cutomHooks.customHooks)();
            const {
              container,
              setShow,
              setStates,
              setValues,
              show,
              values,
              setInit,
              save,
              states,
              entity,
              select,
              configList,
              max,
              keyConf,
              setConfigList
            } = (0, _context.usePanelContext)();
            const handleClick = () => setShow(!show);
            const handleSubmit = async event => {
              event.preventDefault();
              const validCheck = states.items.some(table => values[table.id] === true);
              if (!validCheck) return;
              const newConfig = states.items.filter(table => values[table.id] === true);
              if (entity) localStorage.setItem(entity, JSON.stringify(newConfig));
              save && save(newConfig);
              setInit({
                ...values
              });
              setShow(false);
            };
            const cls = show ? 'show content-selection' : 'hide-selection content-selection';
            const clear = () => {
              states.items.forEach(table => {
                values[table.id] = false;
              });
              setValues({
                ...values,
                all: false,
                search: ''
              });
              setStates({
                ...states,
                items: states.originalItems,
                count: states.count + 1
              });
            };
            const handleSelect = item => {
              const items = JSON.parse(item.value);
              const specs = {
                all: items.length === max,
                search: values.search
              };
              items.forEach(table => {
                specs[table.id ?? table.key] = table.checked;
              });
              setStates({
                ...states,
                items
              });
              setValues({
                ...specs
              });
            };
            const deleteOption = options => {
              localStorage.setItem(keyConf, JSON.stringify(options));
              setConfigList({
                ...configList,
                options,
                new: false
              });
            };
            return _react.default.createElement("div", {
              ref: container,
              className: "container-selection"
            }, _react.default.createElement("span", {
              className: "tooltip-item bottom",
              "data-tooltip": "Panel de selecci\u00F3n"
            }, _react.default.createElement(_icons.IconButton, {
              ..._icon.iconPanel,
              onClick: handleClick,
              className: "icon-header button-panel",
              "data-tooltip": "Panel de selecci\u00F3n"
            })), _react.default.createElement("form", {
              className: cls,
              autoComplete: "off",
              onSubmit: handleSubmit
            }, !!select && _react.default.createElement(_select.Select, {
              options: configList.options,
              onChange: handleSelect,
              deleteOption: deleteOption
            }), _react.default.createElement(_search.Search, null), _react.default.createElement("div", {
              className: "all-clear"
            }, _react.default.createElement(_selectAll.SelectAll, null), _react.default.createElement("div", {
              className: "item-clear"
            }, _react.default.createElement(_icons.IconButton, {
              icon: "close",
              onClick: clear
            }), _react.default.createElement("span", {
              onClick: clear
            }, "Limpiar"))), _react.default.createElement("div", {
              className: "content-items"
            }, _react.default.createElement(_checkbox.Checkboxes, null)), _react.default.createElement(_message.Message, null), _react.default.createElement(_buttons.Buttons, null)));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "SelectionPanel",
        "name": "SelectionPanel"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'SelectionPanel') && _export("SelectionPanel", SelectionPanel = require ? require('./index').SelectionPanel : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIkJ1dHRvbnMiLCJoYW5kbGVNb2RhbCIsInNldFZhbHVlcyIsImluaXQiLCJzZXRTaG93Iiwic2V0U3RhdGVzIiwic3RhdGVzIiwiaXNTYXZlQ29uZiIsInVzZVBhbmVsQ29udGV4dCIsImNsb3NlIiwiaXRlbXMiLCJvcmlnaW5hbEl0ZW1zIiwic2F2ZSIsImxhYmVsIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsInR5cGUiLCJFZGl0IiwiaXNFZGl0IiwidGFibGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50VGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIl9pdGVtIiwiX3V1aWQiLCJDaGVja2JveGVzIiwib3V0cHV0IiwidXNlTWVtbyIsIm1hcCIsIkl0ZW0iLCJrZXkiLCJ2NCIsImNvdW50IiwiX2ljb25zIiwiX2VkaXQiLCJpc0VkaXRDb2x1bW5zIiwibWF4IiwidmFsdWVzIiwiZW50aXR5IiwidXNlU3RhdGUiLCJzZXRJc0VkaXQiLCJuYW1lIiwiY2hlY2tlZCIsImFsbFZhbHVlcyIsImFsbCIsInNlYXJjaCIsInZhbGlkYXRlQ2hlY2tzIiwiT2JqZWN0IiwiZmlsdGVyIiwibGVuZ3RoIiwiaGFuZGxlRWRpdCIsImluZGV4IiwiZmluZEluZGV4IiwiZW50cnkiLCJpZCIsIml0ZW0iLCJzdHJ1Y3R1cmVkQ2xvbmUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImljb24iLCJzdHlsZSIsImRpc3BsYXkiLCJodG1sRm9yIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwicG9pbnRzIiwiSWNvbkJ1dHRvbiIsIlJlYWN0IiwiX21vZGFsIiwiX2Zvcm0iLCJOZXciLCJjb25maWdMaXN0Iiwic2V0Q29uZmlnTGlzdCIsImtleUNvbmYiLCJlcnJvciIsInNldEVycm9yIiwibmV3IiwibmV3Q29uZiIsInByZXZTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlIiwiaXNJblN0b3JhZ2UiLCJzb21lIiwibmV3U3RvcmFnZSIsImNvbmNhdCIsIm9wdGlvbnMiLCJNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwiRm9ybSIsIm9uU3VibWl0IiwiSW5wdXQiLCJkaXNhYmxlZCIsIlBhbmVsQ29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsImN1c3RvbUhvb2tzIiwiY29udGFpbmVyIiwidGFibGVzIiwic2V0SW5pdCIsInVzZUVmZmVjdCIsImNvbmZUYWJsZXMiLCJzbGljZSIsImtleXMiLCJmb3JFYWNoIiwiaW5jbHVkZXMiLCJjaGVja3MiLCJoYW5kbGVDbGljayIsImN1cnJlbnQiLCJpc1NhbWVOb2RlIiwidGFyZ2V0IiwiY29tcG9zZWRQYXRoIiwiaXNBQ2hpbGRyZW4iLCJjb250YWlucyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpY29uUGFuZWwiLCJfdmlldyIsIl9uZXciLCJTZWxlY3Rpb25QYW5lbCIsInByb3BzIiwidGFibGVzTG9jYWwiLCJ0YWJsZXNTdG9yYWdlIiwic3RvcmFnZSIsInNlbGVjdGVkIiwidXNlUmVmIiwiUHJvdmlkZXIiLCJWaWV3IiwiZGVmYXVsdFByb3BzIiwiaXNNYXgiLCJzZWxlY3RBbGwiLCJNZXNzYWdlIiwiSWNvbiIsIlNlYXJjaCIsInRvTG93ZXJDYXNlIiwibmV3U3RhdGVzIiwiU2VsZWN0QWxsIiwiaXNBbGxDaGVja2VkIiwidmFsaWQiLCJzbGljZVZhbHVlcyIsImVuZFZhbHVlcyIsIkZyYWdtZW50IiwiQ2hlY2tib3giLCJkZWZpbmVQcm9wZXJ0eSIsIl9zZWxlY3QiLCJfc2VhcmNoIiwiX3NlbGVjdEFsbCIsIl9tZXNzYWdlIiwiX2J1dHRvbnMiLCJfaWNvbiIsIl9jdXRvbUhvb2tzIiwiX2NoZWNrYm94Iiwic2VsZWN0IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ2YWxpZENoZWNrIiwibmV3Q29uZmlnIiwiY2xzIiwiY2xlYXIiLCJoYW5kbGVTZWxlY3QiLCJzcGVjcyIsImRlbGV0ZU9wdGlvbiIsInJlZiIsImF1dG9Db21wbGV0ZSIsIlNlbGVjdCJdLCJzb3VyY2VzIjpbIi9jb2RlL3RzL2J1dHRvbnMudHN4IiwiL2NvZGUvdHMvY2hlY2tib3gvZWRpdC50c3giLCIvY29kZS90cy9jaGVja2JveC9pbmRleC50c3giLCIvY29kZS90cy9jaGVja2JveC9pdGVtLnRzeCIsIi9jb2RlL3RzL2NvbmZpLWxpc3QvbmV3LnRzeCIsIi9jb2RlL3RzL2NvbnRleHQudHN4IiwiL2NvZGUvdHMvaG9va3MvY3V0b20taG9va3MudHN4IiwiL2NvZGUvdHMvaWNvbi50cyIsIi9jb2RlL3RzL2luZGV4LnRzeCIsIi9jb2RlL3RzL21lc3NhZ2UudHN4IiwiL2NvZGUvdHMvc2VhcmNoLnRzeCIsIi9jb2RlL3RzL3NlbGVjdC1hbGwudHN4IiwiL3R5cGVzLnRzIiwiL2NvZGUvdHMvdmlldy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFdBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFFBQUEsR0FBQUYsT0FBQTtVQUVNLFNBQVVHLE9BQU9BLENBQUE7WUFDdEIsTUFBTTtjQUFFQyxXQUFXO2NBQUVDLFNBQVM7Y0FBRUMsSUFBSTtjQUFFQyxPQUFPO2NBQUVDLFNBQVM7Y0FBRUMsTUFBTTtjQUFFQztZQUFVLENBQUUsR0FBRyxJQUFBUixRQUFBLENB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