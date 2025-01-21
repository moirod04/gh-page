System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@bgroup/wise-form@0.0.4/model", "react@18.2.0", "pragmate-ui@0.1.2/form", "@bgroup/wise-form@0.0.4/settings"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, WiseFormField, IWiseForm, IFormSettings, IFormTemplate, IWiseFormSpecs, WrappedForm, IWrappedFormContext, useWiseFormContext, useWrappedWiseFormContext, WiseForm, __beyond_pkg, hmr;
  _export({
    WiseFormField: void 0,
    IWiseForm: void 0,
    IFormSettings: void 0,
    IFormTemplate: void 0,
    IWiseFormSpecs: void 0,
    WrappedForm: void 0,
    IWrappedFormContext: void 0,
    useWiseFormContext: void 0,
    useWrappedWiseFormContext: void 0,
    WiseForm: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_bgroupWiseForm004Model) {
      dependency_2 = _bgroupWiseForm004Model;
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_pragmateUi012Form) {
      dependency_4 = _pragmateUi012Form;
    }, function (_bgroupWiseForm004Settings) {
      dependency_5 = _bgroupWiseForm004Settings;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.3"], ["@beyond-js/reactive", "1.1.9"], ["mathjs", "12.4.1"], ["pragmate-ui", "0.1.2"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.42"], ["@types/react-dom", "18.2.17"], ["typedoc", "0.25.12"], ["@bgroup/wise-form", "0.0.4"], ["sgs-workflow", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@bgroup/wise-form@0.0.4/form"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@bgroup/wise-form/model', dependency_2], ['react', dependency_3], ['pragmate-ui/form', dependency_4], ['@bgroup/wise-form/settings', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bgroup/wise-form@0.0.4/form');
      ims = new Map();
      /********************************************
      INTERNAL MODULE: ./interfaces/field-container
      ********************************************/
      ims.set('./interfaces/field-container', {
        hash: 2265840804,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***************************************
      INTERNAL MODULE: ./interfaces/interfaces
      ***************************************/

      ims.set('./interfaces/interfaces', {
        hash: 3878206935,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*************************************
      INTERNAL MODULE: ./interfaces/settings
      *************************************/

      ims.set('./interfaces/settings', {
        hash: 2310194644,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*************************************
      INTERNAL MODULE: ./interfaces/template
      *************************************/

      ims.set('./interfaces/template', {
        hash: 691312902,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /********************************************
      INTERNAL MODULE: ./interfaces/wise-form-specs
      ********************************************/

      ims.set('./interfaces/wise-form-specs', {
        hash: 371392954,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**************************************************
      INTERNAL MODULE: ./view/components/containers/index
      **************************************************/

      ims.set('./view/components/containers/index', {
        hash: 1871929736,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Containers = Containers;
          var _react = require("react");
          var _context = require("../../context");
          var _rowContainer = require("../rows/row-container");
          function Containers() {
            const {
              rows,
              model,
              template: {
                styles
              }
            } = (0, _context.useWiseFormContext)();
            const fields = [...model.fields.values()];
            return rows.map((num, index) => {
              const items = fields.splice(0, num[0]);
              return _react.default.createElement(_rowContainer.RowFieldContainer, {
                model: model,
                template: num,
                items: items,
                key: `rf-row--${index}.${num}`,
                styles: styles
              });
            });
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./view/components/error
      ***************************************/

      ims.set('./view/components/error', {
        hash: 3445939293,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ErrorRenderer = ErrorRenderer;
          var _react = require("react");
          function ErrorRenderer({
            error
          }) {
            _react.default.useEffect(() => {
              console.error(error);
            }, []);
            return _react.default.createElement("div", {
              className: 'alert alert--error pui-alert'
            }, error);
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./view/components/field/container
      *************************************************/

      ims.set('./view/components/field/container', {
        hash: 3947604747,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ControlFieldContainer = ControlFieldContainer;
          var _react = require("react");
          function ControlFieldContainer({
            children
          }) {
            return _react.default.createElement("div", {
              className: 'rf-field-container'
            }, children);
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./view/components/field/index
      *********************************************/

      ims.set('./view/components/field/index', {
        hash: 1590104588,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Control = void 0;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _selection = require("./selection");
          var _container = require("./container");
          var _context = require("../../context");
          var _useField = require("./use-field");
          /**
           *
           * @param props.field WiseForm Json config
           * @param props.index Index of the field
           * @param props.model Field or Wrapper Model.
           * @returns
           */
          const Control = exports.Control = _react.default.memo(({
            field,
            index,
            model
          }) => {
            const {
              formTypes
            } = (0, _context.useWiseFormContext)();
            const {
              attrs
            } = (0, _useField.useField)(model, field);
            const types = {
              ...{
                checkbox: _selection.SelectionField,
                radio: _selection.SelectionField,
                select: _selection.SelectionField,
                textarea: _form.Textarea,
                text: _form.Input,
                password: _form.Input,
                default: _form.Input
              },
              ...formTypes
            };
            const Control = types[field.type] ?? types.default;
            return _react.default.createElement(_container.ControlFieldContainer, null, _react.default.createElement(Control, {
              ...attrs
            }));
          });
        }
      });

      /*************************************************
      INTERNAL MODULE: ./view/components/field/selection
      *************************************************/

      ims.set('./view/components/field/selection', {
        hash: 2413916446,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SelectionField = SelectionField;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _error = require("../error");
          var _context = require("../../context");
          function SelectionField(props) {
            if (!props.options) return _react.default.createElement(_error.ErrorRenderer, {
              error: `the field does not have options, field: ${props.name}`
            });
            const {
              name
            } = (0, _context.useWiseFormContext)();
            const types = {
              checkbox: _form.Checkbox,
              radio: _form.Radio,
              select: SelectionField
            };
            if (!types.hasOwnProperty(props.type)) return _react.default.createElement(_error.ErrorRenderer, {
              error: 'the props type is not supported'
            });
            const Control = types[props.type];
            if (props.type === 'select') return _react.default.createElement(_form.Select, {
              ...props
            });
            if (props.type === 'checkbox') return _react.default.createElement(_form.CheckboxGroup, {
              ...props
            });
            const output = props.options.map((option, key) => {
              const attributes = {
                ...option,
                name: props.name
              };
              return _react.default.createElement(Control, {
                ...attributes,
                key: `${name}.${props.name}.${key}`
              });
            });
            return output;
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./view/components/field/use-field
      *************************************************/

      ims.set('./view/components/field/use-field', {
        hash: 871153364,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useField = useField;
          var _react = require("react");
          var _context = require("../../context");
          function useField(model, field) {
            const fieldModel = model.getField(field?.name);
            const {
              values
            } = (0, _context.useWiseFormContext)();
            const value = fieldModel?.value ?? values[field?.name];
            const [attributes, setAttributes] = _react.default.useState(fieldModel?.attributes);
            const onChange = event => model.setField(field.name, event.target.value);
            _react.default.useEffect(() => {
              if (!fieldModel) return;
              const onChange = () => {
                setAttributes({
                  ...fieldModel.attributes,
                  disabled: fieldModel.disabled
                });
              };
              fieldModel.on('change', onChange);
              const cleanUp = () => {
                fieldModel.off('change', onChange);
                fieldModel.cleanUp();
              };
              return cleanUp;
            }, [fieldModel.name]);
            /**
             * It's necessary to change the field spread.
             */
            const attrs = {
              value,
              ...attributes,
              onChange,
              disabled: fieldModel.disabled
            };
            return {
              attrs
            };
          }
        }
      });

      /****************************************************
      INTERNAL MODULE: ./view/components/rows/row-container
      ****************************************************/

      ims.set('./view/components/rows/row-container', {
        hash: 1853942247,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RowFieldContainer = RowFieldContainer;
          var _react = require("react");
          var _field = require("../field");
          var _wrapper = require("./wrapper");
          /**
           * Represents a container for form fields within a row, organizing them according to a specified grid style.
           * This component is used to group form fields dynamically based on the `template` property, allowing for
           * a flexible layout structure within the form. It supports wrapping fields in a div with a CSS grid layout
           * to align items as specified by the `template` and `styles` provided.
           *
           * @param {Object} props The properties passed to the RowFieldContainer component.
           * @param {[number, string]} props.template A tuple where the first element is the total number of fields in the row,
           * and the second element is a string representing the CSS grid template for the layout of these fields.
           * @param {WiseFormField[]} props.items An array of form field configurations that will be rendered within this row.
           * @param {any} [props.styles] Optional styles to be applied to the row container, allowing for further customization.
           * @param
          
          */
          function RowFieldContainer({
            template: [totalFields, gridStyle],
            items,
            styles,
            model
          }) {
            const output = items.map((field, index) => {
              if (field.type === 'wrapper') {
                return _react.default.createElement(_wrapper.FormSectionWrapper, {
                  key: `rf-row__item--${index}`,
                  data: field,
                  model: model
                });
              }
              return _react.default.createElement(_field.Control, {
                index: index,
                model: model,
                field: field,
                key: `rf-row__item--${index}`
              });
            });
            const attrs = {
              className: `rf-fields-container`,
              style: {}
            };
            attrs.style = {
              gridTemplateColumns: `${gridStyle}`,
              ...styles
            };
            return _react.default.createElement("div", {
              ...attrs
            }, output);
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./view/components/rows/wrapper
      **********************************************/

      ims.set('./view/components/rows/wrapper', {
        hash: 1630846346,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormSectionWrapper = FormSectionWrapper;
          var _react = require("react");
          var _context = require("../../context");
          /**
           *
           * @param data {WrappedFormModel}
           * @param model {FormModel} parent.
           * @returns
           */
          function FormSectionWrapper({
            data,
            model
          }) {
            const {
              formTypes
            } = (0, _context.useWiseFormContext)();
            const types = {
              ...formTypes
            };
            if (!data.control) throw new Error('Wrapper must have a control');
            if (!data.name) {
              console.error('Wrapper must have a name', data);
              return null;
            }
            const wrapperModel = model?.getField(data.name);
            const Control = types[data.control];
            // data = wrapperModel ? { ...data, ...wrapperModel.getProperties() } : data;
            return _react.default.createElement(Control, {
              model: wrapperModel
            });
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./view/components/wrapped-form
      **********************************************/

      ims.set('./view/components/wrapped-form', {
        hash: 2673694949,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WrappedForm = WrappedForm;
          var _react = require("react");
          var _context = require("../context");
          var _rowContainer = require("./rows/row-container");
          var _useTemplate = require("../hooks/use-template");
          /*bundle */
          function WrappedForm({
            children,
            name,
            types
          }) {
            const {
              model: parent
            } = (0, _context.useWiseFormContext)();
            const wrapper = parent.wrappers.get(name);
            const model = wrapper;
            const template = (0, _useTemplate.useTemplate)(model.settings);
            const fields = [...model.settings.fields];
            const Containers = template.items.map((num, index) => {
              const items = fields.splice(0, num[0]);
              return _react.default.createElement(_rowContainer.RowFieldContainer, {
                template: num,
                model: model,
                items: items,
                key: `rf-row--${index}.${num}`
              });
            });
            const value = {
              model,
              name,
              template,
              formTypes: types ?? {},
              parent
            };
            return _react.default.createElement(_context.WrappedWiseFormContext.Provider, {
              value: value
            }, Containers, children);
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./view/context
      ******************************/

      ims.set('./view/context', {
        hash: 1696540178,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useWrappedWiseFormContext = exports.useWiseFormContext = exports.WrappedWiseFormContext = exports.WiseFormContext = void 0;
          var _react = require("react");
          const value = {};
          const WiseFormContext = exports.WiseFormContext = _react.default.createContext(value);
          /*bundle*/
          const useWiseFormContext = () => _react.default.useContext(WiseFormContext);
          exports.useWiseFormContext = useWiseFormContext;
          const WrappedWiseFormContext = exports.WrappedWiseFormContext = _react.default.createContext(value);
          /*bundle*/
          const useWrappedWiseFormContext = () => _react.default.useContext(WrappedWiseFormContext);
          exports.useWrappedWiseFormContext = useWrappedWiseFormContext;
        }
      });

      /**************************************
      INTERNAL MODULE: ./view/hooks/use-model
      **************************************/

      ims.set('./view/hooks/use-model', {
        hash: 1626824620,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModel = useModel;
          var _react = require("react");
          var _model = require("@bgroup/wise-form/model");
          var _useTemplate = require("./use-template");
          function useModel(settings, form) {
            const [model, setModel] = _react.default.useState(form);
            const [ready, setReady] = _react.default.useState(false);
            const [values, setValues] = _react.default.useState(form?.values || {});
            const templateSpecs = settings ? settings : form;
            const {
              type,
              styles,
              items
            } = (0, _useTemplate.useTemplate)(templateSpecs, templateSpecs.gap);
            const startup = () => {
              setReady(false);
              const onChange = () => {
                setReady(form.ready);
                setValues({
                  ...form.values
                });
              };
              if (!form) {
                const properties = settings.fields.map(item => item.name);
                const values = settings.values || {};
                form = new _model.FormModel(settings, {
                  properties,
                  ...values
                });
              }
              setModel(form);
              form.on('change', onChange);
              onChange();
              return () => {
                form.off('change', onChange);
              };
            };
            _react.default.useEffect(startup, [form?.name]);
            return {
              ready,
              model,
              values,
              type,
              styles,
              items
            };
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./view/hooks/use-template
      *****************************************/

      ims.set('./view/hooks/use-template', {
        hash: 1402258832,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTemplate = useTemplate;
          /**
           * Applies a template to create a structured layout, optionally using a gap between elements.
           *
           * @param template - The template to be applied. Can be an array or an object conforming to the IFormTemplate interface.
           * @param gap - Specifies the gap between elements.
           * The `gap` parameter is deprecated and will be removed in a future version. Use the gap property within the template object instead.
           * @returns An object representing the structured layout with type, styles, and items.
           */
          function useTemplate(settings, gap = undefined) {
            if (!settings?.template) throw new Error(`${settings?.name} Doesn't have a template`);
            let template = settings?.template;
            let structure = template;
            let styles = {};
            if (!template) {
              return {
                type: 'grid',
                styles: {},
                items: settings.fields.map(item => [1, '1fr'])
              };
            }
            if (gap) {
              template = {
                structure: template,
                gap: gap
              };
            }
            const isArray = Array.isArray(template);
            if (!isArray) {
              if (typeof template !== 'object' || !template.structure || !Array.isArray(template.structure)) {
                throw new Error('Template must be an array or an object');
              }
              structure = template.structure;
              styles = template.gap ? {
                gap: template.gap
              } : {};
            }
            const processString = str => {
              if (typeof str === 'number') return [1, '1fr'];
              const [num, times] = str.split('x').map(Number);
              const tpl = times ? [times, Array(times).fill(num).reduce((acc, v) => `${acc} 1fr`, '')] : [1, '1fr'];
              return tpl;
            };
            return {
              type: 'grid',
              styles: styles,
              items: structure.map(item => {
                if (!Array.isArray(item)) return processString(item);
                return item;
              })
            };
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./view/hooks/use-types
      **************************************/

      ims.set('./view/hooks/use-types', {
        hash: 2762198992,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTypes = useTypes;
          var _react = require("react");
          var _settings = require("@bgroup/wise-form/settings");
          var _selection = require("../components/field/selection");
          var _form = require("pragmate-ui/form");
          function useTypes(types) {
            return _react.default.useMemo(() => {
              const defaultTypes = {
                checkbox: _selection.SelectionField,
                radio: _selection.SelectionField,
                select: _selection.SelectionField,
                textarea: _form.Textarea,
                text: _form.Input,
                password: _form.Input,
                default: _form.Input
              };
              return {
                ...defaultTypes,
                ..._settings.WFSettings.types,
                ...types
              };
            }, [types]);
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./view/index
      ****************************/

      ims.set('./view/index', {
        hash: 2511790201,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WiseForm = WiseForm;
          var _react = require("react");
          var _useModel = require("./hooks/use-model");
          var _context = require("./context");
          var _useTypes = require("./hooks/use-types");
          var _containers = require("./components/containers");
          /*bundle */
          function WiseForm({
            children,
            settings,
            types,
            model
          }) {
            const {
              ready,
              model: instance,
              type,
              styles,
              items
            } = (0, _useModel.useModel)(settings, model);
            const formTypes = (0, _useTypes.useTypes)(types);
            if (!ready) return null;
            if (!settings && !model) {
              console.error('the form does not have settings or model defined', settings);
            }
            const onSubmit = event => {
              event.preventDefault();
              instance.onSubmit(event);
            };
            const value = {
              model: instance,
              items,
              rows: items,
              values: instance.values,
              name: instance.name,
              template: {
                type,
                styles,
                items
              },
              formTypes
            };
            return _react.default.createElement(_context.WiseFormContext.Provider, {
              value: value
            }, _react.default.createElement("form", {
              className: "reactive-form-container",
              onSubmit: onSubmit
            }, _react.default.createElement(_containers.Containers, null), children));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./interfaces/interfaces",
        "from": "WiseFormField",
        "name": "WiseFormField"
      }, {
        "im": "./interfaces/interfaces",
        "from": "IWiseForm",
        "name": "IWiseForm"
      }, {
        "im": "./interfaces/settings",
        "from": "IFormSettings",
        "name": "IFormSettings"
      }, {
        "im": "./interfaces/template",
        "from": "IFormTemplate",
        "name": "IFormTemplate"
      }, {
        "im": "./interfaces/wise-form-specs",
        "from": "IWiseFormSpecs",
        "name": "IWiseFormSpecs"
      }, {
        "im": "./view/components/wrapped-form",
        "from": "WrappedForm",
        "name": "WrappedForm"
      }, {
        "im": "./view/context",
        "from": "IWrappedFormContext",
        "name": "IWrappedFormContext"
      }, {
        "im": "./view/context",
        "from": "useWiseFormContext",
        "name": "useWiseFormContext"
      }, {
        "im": "./view/context",
        "from": "useWrappedWiseFormContext",
        "name": "useWrappedWiseFormContext"
      }, {
        "im": "./view/index",
        "from": "WiseForm",
        "name": "WiseForm"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'WiseFormField') && _export("WiseFormField", WiseFormField = require ? require('./interfaces/interfaces').WiseFormField : value);
        (require || prop === 'IWiseForm') && _export("IWiseForm", IWiseForm = require ? require('./interfaces/interfaces').IWiseForm : value);
        (require || prop === 'IFormSettings') && _export("IFormSettings", IFormSettings = require ? require('./interfaces/settings').IFormSettings : value);
        (require || prop === 'IFormTemplate') && _export("IFormTemplate", IFormTemplate = require ? require('./interfaces/template').IFormTemplate : value);
        (require || prop === 'IWiseFormSpecs') && _export("IWiseFormSpecs", IWiseFormSpecs = require ? require('./interfaces/wise-form-specs').IWiseFormSpecs : value);
        (require || prop === 'WrappedForm') && _export("WrappedForm", WrappedForm = require ? require('./view/components/wrapped-form').WrappedForm : value);
        (require || prop === 'IWrappedFormContext') && _export("IWrappedFormContext", IWrappedFormContext = require ? require('./view/context').IWrappedFormContext : value);
        (require || prop === 'useWiseFormContext') && _export("useWiseFormContext", useWiseFormContext = require ? require('./view/context').useWiseFormContext : value);
        (require || prop === 'useWrappedWiseFormContext') && _export("useWrappedWiseFormContext", useWrappedWiseFormContext = require ? require('./view/context').useWrappedWiseFormContext : value);
        (require || prop === 'WiseForm') && _export("WiseForm", WiseForm = require ? require('./view/index').WiseForm : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9yZWFjdCIsInJlcXVpcmUiLCJfY29udGV4dCIsIl9yb3dDb250YWluZXIiLCJDb250YWluZXJzIiwicm93cyIsIm1vZGVsIiwidGVtcGxhdGUiLCJzdHlsZXMiLCJ1c2VXaXNlRm9ybUNvbnRleHQiLCJmaWVsZHMiLCJ2YWx1ZXMiLCJtYXAiLCJudW0iLCJpbmRleCIsIml0ZW1zIiwic3BsaWNlIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJSb3dGaWVsZENvbnRhaW5lciIsImtleSIsIkVycm9yUmVuZGVyZXIiLCJlcnJvciIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJjbGFzc05hbWUiLCJDb250cm9sRmllbGRDb250YWluZXIiLCJjaGlsZHJlbiIsIl9mb3JtIiwiX3NlbGVjdGlvbiIsIl9jb250YWluZXIiLCJfdXNlRmllbGQiLCJDb250cm9sIiwibWVtbyIsImZpZWxkIiwiZm9ybVR5cGVzIiwiYXR0cnMiLCJ1c2VGaWVsZCIsInR5cGVzIiwiY2hlY2tib3giLCJTZWxlY3Rpb25GaWVsZCIsInJhZGlvIiwic2VsZWN0IiwidGV4dGFyZWEiLCJUZXh0YXJlYSIsInRleHQiLCJJbnB1dCIsInBhc3N3b3JkIiwidHlwZSIsIl9lcnJvciIsInByb3BzIiwib3B0aW9ucyIsIm5hbWUiLCJDaGVja2JveCIsIlJhZGlvIiwiaGFzT3duUHJvcGVydHkiLCJTZWxlY3QiLCJDaGVja2JveEdyb3VwIiwib3V0cHV0Iiwib3B0aW9uIiwiYXR0cmlidXRlcyIsImZpZWxkTW9kZWwiLCJnZXRGaWVsZCIsInNldEF0dHJpYnV0ZXMiLCJ1c2VTdGF0ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJzZXRGaWVsZCIsInRhcmdldCIsImRpc2FibGVkIiwib24iLCJjbGVhblVwIiwib2ZmIiwiX2ZpZWxkIiwiX3dyYXBwZXIiLCJ0b3RhbEZpZWxkcyIsImdyaWRTdHlsZSIsIkZvcm1TZWN0aW9uV3JhcHBlciIsImRhdGEiLCJzdHlsZSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJjb250cm9sIiwiRXJyb3IiLCJ3cmFwcGVyTW9kZWwiLCJfdXNlVGVtcGxhdGUiLCJXcmFwcGVkRm9ybSIsInBhcmVudCIsIndyYXBwZXIiLCJ3cmFwcGVycyIsImdldCIsInVzZVRlbXBsYXRlIiwic2V0dGluZ3MiLCJXcmFwcGVkV2lzZUZvcm1Db250ZXh0IiwiUHJvdmlkZXIiLCJXaXNlRm9ybUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVdyYXBwZWRXaXNlRm9ybUNvbnRleHQiLCJfbW9kZWwiLCJ1c2VNb2RlbCIsImZvcm0iLCJzZXRNb2RlbCIsInJlYWR5Iiwic2V0UmVhZHkiLCJzZXRWYWx1ZXMiLCJ0ZW1wbGF0ZVNwZWNzIiwiZ2FwIiwic3RhcnR1cCIsInByb3BlcnRpZXMiLCJpdGVtIiwiRm9ybU1vZGVsIiwidW5kZWZpbmVkIiwic3RydWN0dXJlIiwiaXNBcnJheSIsIkFycmF5IiwicHJvY2Vzc1N0cmluZyIsInN0ciIsInRpbWVzIiwic3BsaXQiLCJOdW1iZXIiLCJ0cGwiLCJmaWxsIiwicmVkdWNlIiwiYWNjIiwidiIsIl9zZXR0aW5ncyIsInVzZVR5cGVzIiwidXNlTWVtbyIsImRlZmF1bHRUeXBlcyIsIldGU2V0dGluZ3MiLCJfdXNlTW9kZWwiLCJfdXNlVHlwZXMiLCJfY29udGFpbmVycyIsIldpc2VGb3JtIiwiaW5zdGFuY2UiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0Il0sInNvdXJjZXMiOlsiL2ZpZWxkLWNvbnRhaW5lci50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL3NldHRpbmdzLnRzIiwiL3RlbXBsYXRlLnRzIiwiL3dpc2UtZm9ybS1zcGVjcy50cyIsIi90cy92aWV3L2NvbXBvbmVudHMvY29udGFpbmVycy9pbmRleC50c3giLCIvdHMvdmlldy9jb21wb25lbnRzL2Vycm9yLnRzeCIsIi90cy92aWV3L2NvbXBvbmVudHMvZmllbGQvY29udGFpbmVyLnRzeCIsIi90cy92aWV3L2NvbXBvbmVudHMvZmllbGQvaW5kZXgudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9maWVsZC9zZWxlY3Rpb24udHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9maWVsZC91c2UtZmllbGQudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9yb3dzL3Jvdy1jb250YWluZXIudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9yb3dzL3dyYXBwZXIudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy93cmFwcGVkLWZvcm0udHN4IiwiL3RzL3ZpZXcvY29udGV4dC50c3giLCIvdHMvdmlldy9ob29rcy91c2UtbW9kZWwudHMiLCIvdHMvdmlldy9ob29rcy91c2UtdGVtcGxhdGUudHN4IiwiL3RzL3ZpZXcvaG9va3MvdXNlLXR5cGVzLnRzIiwiL3RzL3ZpZXcvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTs7VUFFQUEsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBOzs7Ozs7Ozs7OztVQ0pBOztVQUVBSCxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7O1VDSkE7O1VBRUFILE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQUgsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBOzs7Ozs7Ozs7OztVQ0pBOztVQUVBSCxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEs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