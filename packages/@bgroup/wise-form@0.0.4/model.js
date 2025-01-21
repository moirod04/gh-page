System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.14/model", "@beyond-js/kernel@0.1.9/core", "mathjs@12.4.1", "@bgroup/wise-form@0.0.4/formulas"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, FormModel, ICallbackProps, IFormModelProps, WrappedFormModel, __beyond_pkg, hmr;
  _export({
    FormModel: void 0,
    ICallbackProps: void 0,
    IFormModelProps: void 0,
    WrappedFormModel: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive1114Model) {
      dependency_1 = _beyondJsReactive1114Model;
    }, function (_beyondJsKernel019Core) {
      dependency_2 = _beyondJsKernel019Core;
    }, function (_mathjs) {
      dependency_3 = _mathjs;
    }, function (_bgroupWiseForm004Formulas) {
      dependency_4 = _bgroupWiseForm004Formulas;
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
          "vspecifier": "@bgroup/wise-form@0.0.4/model"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/kernel/core', dependency_2], ['mathjs', dependency_3], ['@bgroup/wise-form/formulas', dependency_4]]);
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./base
      **********************/
      ims.set('./base', {
        hash: 3800752865,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BaseWiseModel = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@beyond-js/kernel/core");
          class BaseWiseModel extends _model.ReactiveModel {
            #settings;
            get settings() {
              return this.#settings;
            }
            set settings(value) {
              this.#settings = value;
            }
            #callbacks = {};
            get callbacks() {
              return this.#callbacks;
            }
            set callbacks(value) {
              this.#callbacks = value;
            }
            #initialValues = {};
            get originalValues() {
              return this.#initialValues;
            }
            get name() {
              return this.#settings.name;
            }
            get template() {
              return this.#settings.template;
            }
            #wrappers = new Map();
            get wrappers() {
              return this.#wrappers;
            }
            set wrappers(value) {
              this.#wrappers = value;
            }
            #fields = new Map();
            get fields() {
              return this.#fields;
            }
            get values() {
              const data = {};
              this.#fields.forEach((field, key) => {
                data[key] = field.value;
              });
              return data;
            }
            #specs;
            get specs() {
              return this.#specs;
            }
            set specs(value) {
              this.#specs = value;
            }
            #params = {};
            loadedPromise = new _core.PendingPromise();
            childWrappersReady = 0;
            constructor(settings, reactiveProps) {
              super(settings);
              this.#params = settings.params ?? {};
              this.#settings = settings;
              this.#callbacks = settings.callbacks ?? {};
            }
            /**
             * Sets the value of a specified field within the wrapper. If the field exists, its value is updated.
             * @param {string} name - The name of the field to update.
             * @param {any} value - The new value for the field.
             */
            setField(name, value) {
              if (!this.getField(name)) {
                console.error('Field not found', name, this.settings.name, this.fields.keys());
                return;
              }
              const field = this.getField(this.getFieldName(name));
              field.setValue(value);
            }
            /**
             * Retrieves a field or nested wrapper by name. Supports dot notation for accessing deeply nested fields.
             * @param {string} name - The name of the field or nested wrapper to retrieve.
             * @returns {FormField | WrappedFormModel | undefined} The requested instance, or undefined if not found.
             */
            getField(name) {
              if (!name) return console.warn('You need to provide a name to get a field in form ', this.#settings.name);
              if (!name.includes('.')) {
                let field = this.#fields.get(name);
                if (!field) {
                  this.#wrappers.forEach(item => {
                    const foundField = item.getField(name);
                    if (foundField) field = foundField;
                  });
                }
                return field;
              }
              const [wrapperName, ...others] = name.split('.');
              const currentWrapper = this.#wrappers.get(wrapperName);
              const otherWrapper = others.join('.');
              return currentWrapper.getField(otherWrapper);
            }
            /**
             * Extracts the field name from a FieldOrAlias type. The input can either be a string directly representing
             * the field name or an object where the key is the field name and the value is an alias.
             * This function returns the field name if it is a string, or the first key (field name) if it is an object,
             * assuming the object contains exactly one key-value pair.
             *
             * @param {FieldOrAlias} field - The field identifier which could be a string or an object with one key-value pair.
             * @returns {string} - The field name extracted from the input.
             * @throws {Error} - Throws an error if the input is an object that does not contain exactly one key.
             */
            getFieldName(field) {
              if (typeof field === 'object' && Object.keys(field).length !== 1) {
                throw new Error('Field object must contain exactly one key.');
              }
              if (typeof field === 'string') {
                return field;
              }
              return Object.keys(field)[0];
            }
            /**
             * Clears all fields within the wrapper, resetting their values to their initial state.
             */
            clear = () => {
              this.fields.forEach(field => field.clear());
              this.triggerEvent();
              this.triggerEvent('clear');
            };
            getParams(param) {
              return this.#params[param];
            }
          }
          exports.BaseWiseModel = BaseWiseModel;
        }
      });

      /**********************************
      INTERNAL MODULE: ./callback-manager
      **********************************/

      ims.set('./callback-manager', {
        hash: 3767541506,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CallbackManager = void 0;
          class CallbackManager {
            #field;
            #model;
            #callbacks = [];
            #listeners = [];
            constructor(model, field) {
              this.#field = field;
              this.#model = model;
              this.#callbacks = model.callbacks;
              this.initialize();
            }
            initialize() {
              const instance = this.#field;
              const checkField = async settings => {
                const dependency = this.#model.getField(this.#model.getFieldName(settings.field));
                await dependency.isReady;
                const required = ['field', 'callback'];
                required.forEach(prop => {
                  if (!settings[prop]) throw new Error(`${settings?.field} is missing ${prop}`);
                });
                if (!dependency) throw new Error(`${settings?.field} is not a registered field`);
                if (!this.#callbacks[settings.callback]) {
                  throw new Error(`${settings.callback} is not  a registered callback ${settings.name}`);
                }
                // saved in listener array to be able to remove the listener if is required.
                const event = settings.event || 'value.change';
                const caller = () => this.executeCallback(settings);
                this.#listeners.push(caller);
                dependency.on(event, caller);
                //callback({ dependency, settings, field: instance, form: this });
              };
              instance?.specs?.dependentOn.forEach(checkField);
            }
            executeCallback = async settings => {
              const params = {
                form: this.#model,
                field: this.#field,
                settings
              };
              if (!settings) {
                console.warn('the field does not have dependentOn settings');
              }
              const callback = this.#callbacks[settings.callback];
              const dependency = this.#model.getField(this.#model.getFieldName(settings.field));
              await dependency.isReady;
              const fields = {
                [dependency.name]: dependency
              };
              if (settings.hasOwnProperty('fields')) {
                for (const field of settings.fields) {
                  const instance = this.#model.getField(this.#model.getFieldName(field));
                  if (instance) await instance.isReady;
                  const propName = typeof field === 'string' ? field : field.alias;
                  fields[propName] = instance;
                }
                params.fields = fields;
              }
              params.dependency = dependency;
              //global wiseForm params
              if (settings.hasOwnProperty('params')) {
                const specs = {};
                settings.params.forEach(param => {
                  if (!this.#model?.getParams(param)) {
                    console.warn(`param ${param} is not registered in the form`);
                    return;
                  }
                  specs[param] = this.#model.getParams(param);
                });
                params.specs = specs;
              }
              callback(params);
            };
          }
          exports.CallbackManager = CallbackManager;
        }
      });

      /***********************
      INTERNAL MODULE: ./field
      ***********************/

      ims.set('./field', {
        hash: 2848305946,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormField = void 0;
          var _model = require("@beyond-js/reactive/model");
          /**
           * Represents a single form field within a `FormModel` or `WrappedFormModel`, providing mechanisms for data binding, validation, and interaction.
           * This class extends `ReactiveModel` to enable reactive updates and interactions within the form's lifecycle.
           *
           * @extends ReactiveModel<IFormField>
           */
          class FormField extends _model.ReactiveModel {
            // The parent model, either FormModel or WrappedFormModel, containing this field.
            #parent;
            get parent() {
              return this.#parent;
            }
            #NATIVE_ACTIONS = ['hide', 'disable', 'enable', 'show', 'reset'];
            #EVENTS = ['onClick', 'onChange', 'onKeyup'];
            setEvents(events) {
              this.#EVENTS.concat(events);
            }
            #isReady = false;
            // Can be a boolean or an object specifying dynamic disablingvas logic based on other fields' values.
            #disabled = false;
            /**
             * Evaluates and returns the disabled state of the field. If `#disabled` is an object, it checks the specified fields' values to determine the disabled state dynamically.
             * @returns {boolean} The disabled state of the field.
             */
            get disabled() {
              if (typeof this.#disabled !== 'object' || !this.#disabled?.fields) return this.#disabled;
              const validate = field => {
                if (typeof field !== 'object') return !this.#parent.form.getField(field).value;
                const {
                  name,
                  value
                } = field;
                const {
                  value: fieldValue
                } = this.#parent.getField(name);
                return value !== fieldValue;
              };
              return this.#disabled.fields.some(validate);
            }
            set disabled(value) {
              if (value === this.#disabled) return;
              this.#disabled = value;
              this.triggerEvent();
            }
            // Field specifications including its type, validation rules, and other metadata.
            #specs;
            get specs() {
              return this.#specs;
            }
            get attributes() {
              const props = this.getProperties();
              return {
                ...props,
                disabled: this.#disabled
              };
            }
            #value;
            get value() {
              return this.#value;
            }
            set value(value) {
              this.setValue(value);
            }
            // Tracks other fields this field listens to for changes, enabling reactive behavior and allowing the cleanup of event listeners.
            #listeningItems = new Map();
            /**
             * Constructs a FormField instance with specified properties and parent form model.
             * @param {Object} params - Construction parameters including the parent form model and field specifications.
             */
            constructor({
              parent,
              specs
            }) {
              let {
                properties,
                disabled,
                ...props
              } = specs;
              super({
                ...props,
                properties: ['name', 'type', 'placeholder', 'required', 'label', 'variant', 'options', 'className', 'checked', 'id', 'icon', ...properties]
              });
              this.__instanceID = `${specs.name}.${this.generateRandomNumber()}`;
              this.#specs = specs;
              this.#parent = parent;
              this.__instance = Math.random();
              const toSet = {};
              /**
               * @todo:  review this code
               */
              Object.keys(props).forEach(key => {
                if (key === 'properties') return;
                if (typeof props[key] === 'string' && props[key]?.includes('state:')) {
                  const state = props[key].split('state:')[1];
                  if (state === 'create' && !this.#parent.form.update) {
                    props[key] = true;
                  }
                }
                toSet[key] = props[key];
              });
              // this.#disabled = disabled;
              // this.set(toSet);
              this.set(specs);
            }
            getProperties() {
              const properties = super.getProperties();
              return {
                ...properties,
                value: this.#value
              };
            }
            /**
             *  This method is used to set the value property of the field and fire the value.change event
             *
             * @param value
             * @returns
             */
            setValue(value) {
              if (value === this.value) return;
              this.#value = value;
              this.trigger('change');
              this.trigger('value.change', this);
            }
            generateRandomNumber = () => {
              return Math.floor(Math.random() * (1000000 - 10000 + 1)) + 10000;
            };
            /**
             * Performs initial setup based on the field's specifications, setting up validation, default values, and any specified dynamic behavior.
             */
            initialize = () => {
              this.checkSettings(this.#specs);
              this.on('change', this.listenerEvents);
              // this.on('value.change', this.listenerEvents);
            };
            /**
             * Resets the field to its initial value and state, including resetting the disabled state if it's statically defined.
             */
            clear = () => {
              const initValues = this.initialValues();
              this.set(initValues);
              if (initValues.hasOwnProperty('disabled')) this.disabled = initValues.disabled;
              this.triggerEvent('clear');
            };
            /**
             * Listens to changes in sibling fields (specified in dynamic disabling logic) and updates its state accordingly.
             */
            #listenSiblings = () => {
              this.triggerEvent('change');
              this.triggerEvent();
              this.triggerEvent('value.change');
            };
            /**
             * Checks and applies the field's settings, particularly for dynamic disabling, establishing listeners on related fields as necessary.
             * @param {Object} props - The field's properties and settings to check and apply.
             */
            checkSettings(props) {
              if (props.hasOwnProperty('disabled')) {
                if (typeof props.disabled === 'boolean') {
                  this.#disabled = props.disabled;
                  return;
                }
                if (typeof props.disabled !== 'object') {
                  throw new Error(`The disabled property of the field ${props.name} must be a boolean or an object`);
                }
                if (!props.disabled.fields && !props.disabled.mode) {
                  throw new Error(`The disabled property of the field ${props.name} must have a fields property or a mode defined`);
                }
                if (props.disabled.mode) {
                  // posible modes : create, update;
                  this.#disabled = this.#parent.form.mode === props.disabled.mode;
                  return;
                }
                let allValid;
                props.disabled.fields.forEach(item => {
                  const name = typeof item === 'string' ? item : item.name;
                  const instance = this.#parent.form.getField(name);
                  allValid = instance;
                  if (!allValid) return;
                  instance.on('change', this.#listenSiblings);
                  instance.on('value.change', this.#listenSiblings);
                  this.#listeningItems.set(name, {
                    item: instance,
                    listener: this.#listenSiblings
                  });
                });
                if (!allValid) {
                  throw new Error(`the field ${allValid} does not exist in the form ${this.#parent.name}, field passed in invalid settings of field "${this.name}"`);
                }
                this.#disabled = props.disabled;
              }
            }
            /**
             * En este metodo se recorre el objeto asociado al evento y ejecuta cada una de las acciones asociadas
             * como las acciones nativas del FormModel (HIDE, SHOW, DISABLE, ENABLE), hace el seteo de propiedades
             * en caso de recibir field y ejecuta las callbacks asociadas
             * @param actions objeto  con las acciones que se van a realizar al ejecutarse el evento asociado
             * @returns
             */
            async #executeEvent(actions) {
              if (typeof actions !== 'object' || Array.isArray(actions)) return;
              const formModel = this.#parent.form;
              const sortedKeys = Object.keys(actions).sort((a, b) => actions[a]?.__order - actions[b]?.__order);
              for (let action of sortedKeys) {
                if (action === 'fields') {
                  for (let fieldName in actions[action]) {
                    const field = this.#parent.form.getField(fieldName);
                    if (!field) continue;
                    await field.isReady;
                    field.set(actions[action][fieldName]);
                  }
                  continue;
                }
                if (formModel.callbacks.hasOwnProperty(action)) {
                  formModel.callbacks[action]({
                    ...actions[action],
                    form: formModel
                  });
                  continue;
                }
                if (this.#NATIVE_ACTIONS.includes(action) && formModel.hasOwnProperty(action)) {
                  formModel[action](actions[action].target);
                }
              }
            }
            /**
             * Busca el evento configurado en el field
             * @param item objeto que tiene el evento
             * @returns
             */
            #getEvent(item) {
              let event;
              const keys = Object.keys(item);
              keys.forEach(key => {
                if (event) return;
                if (this.#EVENTS.includes(key)) event = key;
              });
              return event;
            }
            /**
             * Metodo para identificar si es field con multiples eventos configurados o solo es un evento configurado
             * hace la busqueda del evento lanzado al haber multiples
             * @returns
             */
            listenerEvents = event2 => {
              if (!this.#isReady) {
                this.#isReady = true;
                return;
              }
              if (!this.specs?.events) {
                const event = this.#getEvent(this.specs);
                if (!event) return;
                this.#executeEvent(this.specs[event]);
                return;
              }
              const event = this.#getEvent(this.specs.events);
              if (!event) return;
              const item = this.specs.events[event].hasOwnProperty(this.value) ? this.specs.events[event][this.value] : null;
              if (!item) return;
              this.#executeEvent(item);
            };
            /**
             * Cleans up any established listeners and internal state when the field is removed or the form is reset, ensuring no memory leaks or stale data.
             */
            cleanUp() {
              this.#listeningItems.forEach(({
                item,
                listener
              }) => item.off('change', listener));
              // todo: remove all events
            }
            /**
             * The `set` method sets one or more properties on the model.
             *
             *
             * This method overwrites the original reactiveModel set to pass the object as param
             * when the change event is fired.
             * Eventually this method will be removed and the original set method will be used, but
             * it requires an upgrade in the reactive model package.
             * @param {keyof ReactiveModelPublic<T>} property - The name of the property to set.
             * @param {*} value - The value to set the property to.
             * @returns {void}
             */
            set(properties) {
              let updated = false;
              try {
                Object.keys(properties).forEach(prop => {
                  const currentProperties = Object.keys(this.getProperties());
                  if (!currentProperties || !currentProperties.includes(prop)) return;
                  const sameObject = typeof properties[prop] === 'object' && JSON.stringify(properties[prop]) === JSON.stringify(this[prop]);
                  if (this[prop] === properties[prop] || sameObject) return;
                  const descriptor = Object.getOwnPropertyDescriptor(this, prop);
                  if (descriptor?.set) return;
                  this[prop] = properties[prop];
                  updated = true;
                });
              } catch (e) {
                console.error(`Error setting properties:`, e);
                throw new Error(`Error setting properties: ${e}`);
              } finally {
                if (updated) this.trigger('change', this);
              }
            }
            hide = () => {
              if (!this.className) this.className = '';
              const isHidden = this.className.includes('hidden');
              const cls = isHidden ? this.className : `${this.className} hidden`;
              if (cls !== this.className) this.set({
                className: cls
              });
            };
            show = () => {
              if (!this.className) this.className = '';
              const isHidden = this.className.includes('hidden');
              const cls = isHidden ? this.className.replaceAll(/\bhidden\b/g, '').trim() : this.className;
              if (cls !== this.className) this.set({
                className: cls
              });
            };
          }
          exports.FormField = FormField;
        }
      });

      /***********************
      INTERNAL MODULE: ./model
      ***********************/

      ims.set('./model', {
        hash: 2870275070,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormModel = void 0;
          var _field = require("./field");
          var _wrapper = require("./wrapper");
          var _base = require("./base");
          var _plugins = require("./plugins");
          var _callbackManager = require("./callback-manager");
          /*bundle*/
          class FormModel extends _base.BaseWiseModel {
            #childWrappers = 0;
            #plugins;
            get plugins() {
              return this.#plugins;
            }
            /**
             * since the fields can be children of the model or a
             * wrapper, this method is used to get the form model
             */
            get form() {
              return this;
            }
            #mode;
            get mode() {
              return this.#mode;
            }
            #update;
            #callbackManagers;
            get update() {
              return this.#update;
            }
            /**
             * Initializes a new instance of the `FormModel`, setting up the initial state, including field configurations,
             * callbacks, and reactive properties. This constructor also triggers the asynchronous setup process for the form.
             *
             * @param {Object} settings The configuration settings for the form, including fields, default values, and callbacks.
             * @param {Object} [reactiveProps] Optional reactive properties to enhance the form's reactivity.
             */
            constructor(settings, reactiveProps) {
              super(settings, reactiveProps);
              this.#startup(settings);
              if (!globalThis._wiseForms) globalThis._wiseForms = [];
              globalThis._wiseForms.push(this);
              this.#update = settings.update;
              this.#mode = this.#update ? 'update' : 'create';
            }
            #startup = async settings => {
              const values = settings?.values || {};
              const createItems = item => {
                const instance = this.#getFieldModel(item, values);
                const onChange = () => this[item.name] = instance.value;
                instance.on('change', onChange);
                this.fields.set(item.name, instance);
              };
              this.settings.fields.map(createItems);
              await this.#checkReady();
              this.#configFields();
              // todo: @everyone Define if is required to wait for the plugins to be ready.
              this.#plugins = new _plugins.PluginsManager(this);
              this.ready = true;
              this.specs = settings;
              this.trigger('change');
            };
            /**
             * Checks if all wrappers and fields within the form are loaded and sets the form to a loaded state. This method ensures that the form is fully operational before any interaction.
             * Its used for the start to listen the dependencies
             */
            #checkReady = () => {
              const onReady = () => {
                const areAllWrappersLoaded = this.childWrappersReady === this.#childWrappers;
                if (!areAllWrappersLoaded) {
                  this.childWrappersReady = this.childWrappersReady + 1;
                  return;
                }
                this.loaded = true;
                this.loadedPromise.resolve(true);
                this.off('wrappers.children.loaded', onReady);
              };
              if (this.loaded) return this.loaded;
              if (!this.wrappers.size) {
                onReady();
                return this.loaded;
              }
              this.on('wrappers.children.loaded', onReady);
              return this.loadedPromise;
            };
            /**
             * Configures all fields by initializing them and setting up dependencies. This method ensures that each field is ready for interaction and that any field dependencies are respected.
             */
            #configFields = () => {
              this.fields.forEach(this.#listenDependencies);
              this.fields.forEach(field => field.initialize());
            };
            /**
             * Creates a new instance of a field or a wrapper based on the provided item configuration. It initializes the field or wrapper with specified values and properties.
             * @param {Object} item - The field or wrapper configuration.
             * @param {Object} values - The initial values for the fields.
             * @returns {FormField|WrappedFormModel} A new field or wrapper instance.
             */
            #getFieldModel = (item, values) => {
              let externalValues = {};
              // @todo: @veD-tnayrB: Review this code and document it
              if (Array.isArray(item?.properties)) {
                item?.properties.forEach(item => externalValues[item.name] = item.value);
              }
              if (item.type === 'wrapper') return this.#getWrapper(item);
              const instance = new _field.FormField({
                parent: this,
                specs: {
                  ...item,
                  value: values[item.name] || item?.value,
                  properties: item?.properties || []
                }
              });
              /**
               * @todo: review it. why we need it.?
               */
              if (item?.properties) {
                let toSet = {};
                item?.properties.forEach(property => toSet[property] = item[property] || '');
                instance.set(toSet);
              }
              return instance;
            };
            /**
             * Examines each field for dependencies and sets up listeners to respond to changes in dependent fields. This ensures dynamic interactions within the form based on field dependencies.
             * @param {FormField|WrappedFormModel} instance - The field or wrapper instance to check for dependencies.
             */
            #listenDependencies = instance => {
              if (!instance?.specs?.dependentOn?.length) return;
              const manager = new _callbackManager.CallbackManager(this, instance);
            };
            /**
               * @param item
             * @param values
             * @returns
             */
            #getWrapper = item => {
              let instance;
              if (!item.fields) throw new Error(`Wrapper ${item.name} must have fields property`);
              const fieldsProperties = item.fields.map(item => item.name);
              const properties = [...fieldsProperties, ...(item?.properties || [])];
              const defaultValues = item.values || {};
              instance = new _wrapper.WrappedFormModel({
                parent: this,
                settings: {
                  ...item,
                  form: this
                },
                specs: {
                  properties: properties || [],
                  ...defaultValues
                }
              });
              let toSet = {};
              Object.keys(instance?.getProperties()).forEach(property => toSet[property] = item[property] || '');
              instance.set(toSet);
              this.registerWrapper(instance);
              this.#childWrappers = this.#childWrappers + 1;
              return instance;
            };
            /**
             * Registers a wrapper model within the form model, allowing for nested form structures.
             * This method is crucial for managing complex forms where fields might be grouped into sections or wrappers.
             * @param {WrappedFormModel} wrapper - The wrapper instance to register.
             */
            registerWrapper = wrapper => {
              this.wrappers.set(wrapper.name, wrapper);
            };
            getForm() {
              return this;
            }
            hide = fields => {
              fields.forEach(field => {
                const instance = this.getField(field);
                if (!instance) throw new Error(`Field ${field} does not exist in form ${this.name}`);
                instance.hide();
              });
            };
            show = fields => {
              fields.forEach(field => {
                const instance = this.getField(field);
                if (!instance) throw new Error(`Field ${field} does not exist in form ${this.name}`);
                instance.show();
              });
            };
            disable = fields => {
              fields.forEach(field => {
                const instance = this.getField(field);
                if (!instance) throw new Error(`Field ${field} does not exist in form ${this.name}`);
                instance.disabled = true;
              });
            };
            enable = fields => {
              fields.forEach(field => {
                const instance = this.getField(field);
                if (!instance) throw new Error(`Field ${field} does not exist in form ${this.name}`);
                instance.disabled = false;
              });
            };
            reset = fields => {
              fields.forEach(field => {
                const instance = this.getField(field);
                if (!instance) throw new Error(`Field ${field} does not exist in form ${this.name}`);
                instance.clear();
              });
            };
            static create = settings => {
              const properties = settings.fields.map(item => item.name);
              const values = settings.values || {};
              const instance = new FormModel(settings, {
                ...properties,
                ...values
              });
              return instance;
            };
            getFormula(name) {
              if (!name) return null;
              const formula = this.#plugins.instances.get("formula").formulas.get(name);
              if (!formula) return null;
              return formula;
            }
          }
          exports.FormModel = FormModel;
        }
      });

      /******************************
      INTERNAL MODULE: ./plugins/base
      ******************************/

      ims.set('./plugins/base', {
        hash: 1838368508,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WiseFormPluginBase = void 0;
          class WiseFormPluginBase {}
          exports.WiseFormPluginBase = WiseFormPluginBase;
        }
      });

      /*********************************
      INTERNAL MODULE: ./plugins/formula
      *********************************/

      ims.set('./plugins/formula', {
        hash: 388368509,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormulaPlugin = void 0;
          var _formulas = require("@bgroup/wise-form/formulas");
          var _base = require("./base");
          // pensar porque no manejarlo con eventos.
          class FormulaPlugin extends _base.WiseFormPluginBase {
            #form;
            get form() {
              return this.#form;
            }
            #settings;
            get name() {
              return 'formula';
            }
            get ready() {
              return true;
            }
            #formulas = new Map();
            get formulas() {
              return this.#formulas;
            }
            #value = 0;
            get value() {
              return this.#value;
            }
            set value(v) {
              if (v === this.#value) return;
              this.#value = v;
            }
            constructor(form, settings) {
              super();
              this.#form = form;
              this.#settings = settings;
            }
            async init() {
              if (!this.#form.settings?.observers) return;
              const promises = this.#form.settings.observers.map(this.create.bind(this));
              const formulas = await Promise.all(promises);
              formulas.forEach(formula => {
                this.#formulas.set(formula.name, formula);
              });
              this.#formulas.forEach(formula => {
                if (!formula.initialize) console.log(-1, formula);
                formula.initialize();
              });
            }
            async create(observer) {
              const {
                formula
              } = observer;
              if (!observer.name) {
                throw new Error(`Observer in form "${this.#form.name}" must have a name`);
              }
              if (!formula) {
                throw new Error(`Observer ${observer.name} in form "${this.#form.name}" must have a formula`);
              }
              return _formulas.FormulaManager.create(this, observer);
            }
            static async settings(model, settings) {
              try {
                const instance = new FormulaPlugin(model, settings);
                await instance.init();
                return instance;
              } catch (e) {
                console.error(e);
              }
            }
          }
          exports.FormulaPlugin = FormulaPlugin;
        }
      });

      /*******************************
      INTERNAL MODULE: ./plugins/index
      *******************************/

      ims.set('./plugins/index', {
        hash: 3063145647,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PluginsManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _plugins = require("./plugins");
          class PluginsManager extends _model.ReactiveModel {
            #plugins = ['formula'];
            static items = new Map();
            #instances = new Map();
            get instances() {
              return this.#instances;
            }
            static formulas = {};
            #model;
            constructor(model) {
              super();
              this.#model = model;
              globalThis.f = model;
              this.initialize();
            }
            async initialize() {
              const plugins = Object.keys(_plugins.PLUGINS);
              const promises = [];
              plugins.forEach(plugin => {
                const manager = _plugins.PLUGINS[plugin].object;
                const instance = manager.settings(this.#model);
                promises.push(instance);
              });
              const results = await Promise.allSettled(promises);
              const installed = results.filter(result => result.status === 'fulfilled').map(result => result.value);
              const failed = results.filter(result => result.status === 'rejected');
              if (failed.length) {
                console.warn('Failed to install plugins', failed);
              }
              installed.forEach(plugin => this.#instances.set(plugin.name, plugin));
              this.ready = true;
            }
          }
          exports.PluginsManager = PluginsManager;
        }
      });

      /*********************************
      INTERNAL MODULE: ./plugins/plugins
      *********************************/

      ims.set('./plugins/plugins', {
        hash: 1200095532,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PLUGINS = void 0;
          var _formula = require("./formula");
          const PLUGINS = exports.PLUGINS = {
            formula: {
              object: _formula.FormulaPlugin
            }
          };
        }
      });

      /*********************************
      INTERNAL MODULE: ./types/callbacks
      *********************************/

      ims.set('./types/callbacks', {
        hash: 3818491509,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /********************************
      INTERNAL MODULE: ./types/disabled
      ********************************/

      ims.set('./types/disabled', {
        hash: 1966322688,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**********************************
      INTERNAL MODULE: ./types/form-field
      **********************************/

      ims.set('./types/form-field', {
        hash: 2267576596,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./types/model
      *****************************/

      ims.set('./types/model', {
        hash: 2449878755,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*******************************
      INTERNAL MODULE: ./types/plugins
      *******************************/

      ims.set('./types/plugins', {
        hash: 1146226959,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /************************************************
      INTERNAL MODULE: ./types/wrapped-form-model-props
      ************************************************/

      ims.set('./types/wrapped-form-model-props', {
        hash: 1625000594,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*************************
      INTERNAL MODULE: ./wrapper
      *************************/

      ims.set('./wrapper', {
        hash: 3804076061,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WrappedFormModel = void 0;
          var _field = require("./field");
          var _callbackManager = require("./callback-manager");
          var _base = require("./base");
          /*bundle*/
          class WrappedFormModel extends _base.BaseWiseModel {
            get type() {
              return "wrapper";
            }
            get control() {
              return this.settings.control;
            }
            #form;
            get form() {
              return this.#form;
            }
            // Reference to the parent FormModel or WrappedFormModel.
            #parent;
            constructor({
              parent,
              settings,
              specs
            }) {
              const {
                properties,
                ...props
              } = specs;
              super({
                ...props,
                properties: ["name", "className", ...properties]
              });
              this.#parent = parent;
              this.callbacks = this.#parent.callbacks;
              this.settings = settings;
              this.#form = this.settings.form;
              this.#startup(settings);
            }
            /**
             * Initializes the wrapper model by setting up its fields and nested wrappers according to the provided settings.
             * @param {Object} settings - The settings object defining fields and wrapper configurations.
             */
            #startup = async settings => {
              const values = settings.values || {};
              const createItems = item => {
                const instance = this.#getInstance(item, values);
                const onChange = () => {
                  this[item.name] = instance.value;
                  this.triggerEvent(); // Posible performance improvement.
                };
                instance.on("change", onChange);
                this.fields.set(item.name, instance);
              };
              this.settings.fields.map(createItems);
              await this.#checkReady();
              this.#parent.triggerEvent("wrappers.children.loaded");
              this.#configFields();
              this.ready = true;
              this.specs = settings;
              this.set(settings);
              this.#parent.triggerEvent("wrappers.children.loaded");
            };
            /**
             * Creates an instance of a FormField or WrappedFormModel based on the provided item configuration.
             *
             * @param {Object} item - The configuration object for the field or nested wrapper.
             * @param {Record<string, unknown>} values - Initial values for the fields.
             * @returns {WrappedFormModel | FormField} The created instance.
             */
            #getInstance = (item, values) => {
              let instance;
              let externalValues = {};
              if (Array.isArray(item?.properties)) {
                item?.properties.forEach(item => externalValues[item.name] = item.value);
              }
              if (item.type === "wrapper") {
                if (!item.fields) throw new Error(`Wrapper ${item.name} must have fields property`);
                const fieldsProperties = item.fields.map(item => item.name);
                const properties = [...fieldsProperties, ...(item?.properties || [])];
                const values = item.values || {};
                instance = new WrappedFormModel({
                  parent: this,
                  settings: {
                    ...item,
                    form: this.#form
                  },
                  specs: {
                    properties: properties || [],
                    ...values
                  }
                });
                let toSet = {};
                Object.keys(instance?.getProperties()).forEach(property => toSet[property] = item[property] || "");
                instance.set(toSet);
                this.registerWrapper(instance);
                return instance;
              }
              instance = new _field.FormField({
                parent: this,
                specs: {
                  ...item,
                  value: values[item.name] || item?.value,
                  properties: item?.properties || []
                }
              });
              if (item?.properties) {
                let toSet = {};
                item?.properties.forEach(property => toSet[property] = item[property] || "");
                instance.set(toSet);
              }
              return instance;
            };
            /**
             * Retrieves a field or nested wrapper by name. Supports dot notation for accessing deeply nested fields.
             * @param {string} name - The name of the field or nested wrapper to retrieve.
             * @returns {FormField | WrappedFormModel | undefined} The requested instance, or undefined if not found.
             */
            getField(name) {
              if (!name) return console.warn("You need to provide a name to get a field in form ", this.settings.name);
              if (!name.includes(".")) {
                let field = this.fields.get(name);
                if (!field) {
                  this.wrappers.forEach(item => {
                    const foundField = item.getField(name);
                    if (foundField) field = foundField;
                  });
                }
                return field;
              }
              const [wrapperName, ...others] = name.split(".");
              const currentWrapper = this.wrappers.get(wrapperName);
              const otherWrapper = others.join(".");
              return currentWrapper.getField(otherWrapper);
            }
            /**
             * Checks whether all nested wrappers within this wrapper are loaded and sets the wrapper's state to loaded if so.
             */
            #checkReady = () => {
              const onReady = () => {
                const areAllWrappersLoaded = this.childWrappersReady === this.wrappers.size;
                if (!areAllWrappersLoaded) return this.childWrappersReady = this.childWrappersReady + 1;
                this.loaded = true;
                this.#parent.triggerEvent("wrappers.children.loaded");
                this.loadedPromise.resolve(true);
                this.off("wrappers.children.loaded", onReady);
              };
              if (this.loaded) return this.loaded;
              if (!this.wrappers.size) {
                onReady();
                return this.loaded;
              }
              this.on("wrappers.children.loaded", onReady);
              return this.loadedPromise;
            };
            /**
             * Configures the fields within the wrapper, setting up any dependencies they might have.
             */
            #configFields = () => {
              this.fields.forEach(this.#listenDependencies);
            };
            /**
             * Initializes all fields within the wrapper, preparing them for user interaction. Its used to know when the fields can start to listen for events or dependencies
             */
            initialize = () => {
              this.fields.forEach(field => field.initialize());
            };
            /**
             * Sets up dependency listeners for a field within the wrapper, allowing fields to react to changes in other fields.
             * @param {FormField | WrappedFormModel} instance - The field or nested wrapper instance to set dependencies for.
             */
            #listenDependencies = instance => {
              if (!instance?.specs?.dependentOn?.length) return;
              new _callbackManager.CallbackManager(this.#form, instance);
            };
            /**
             * Registers a nested wrapper within this wrapper, adding it to the internal map of child wrappers.
             * @param {WrappedFormModel} wrapper - The child wrapper to register.
             */
            registerWrapper = wrapper => {
              this.wrappers.set(wrapper.name, wrapper);
              this.#form.registerWrapper(wrapper);
            };
            cleanUp = this.clear;
            getForm() {
              return this.#parent;
            }
            hide = () => {
              if (!this.className) this.className = "";
              const isHidden = this.className.includes("hidden");
              const cls = isHidden ? this.className : `${this.className} hidden`;
              if (cls !== this.className) this.set({
                className: cls
              });
            };
            show = () => {
              if (!this.className) this.className = "";
              const isHidden = this.className.includes("hidden");
              const cls = isHidden ? this.className.replaceAll(/\bhidden\b/g, "").trim() : this.className;
              if (cls !== this.className) this.set({
                className: cls
              });
            };
          }
          exports.WrappedFormModel = WrappedFormModel;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./model",
        "from": "FormModel",
        "name": "FormModel"
      }, {
        "im": "./types/callbacks",
        "from": "ICallbackProps",
        "name": "ICallbackProps"
      }, {
        "im": "./types/model",
        "from": "IFormModelProps",
        "name": "IFormModelProps"
      }, {
        "im": "./wrapper",
        "from": "WrappedFormModel",
        "name": "WrappedFormModel"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'FormModel') && _export("FormModel", FormModel = require ? require('./model').FormModel : value);
        (require || prop === 'ICallbackProps') && _export("ICallbackProps", ICallbackProps = require ? require('./types/callbacks').ICallbackProps : value);
        (require || prop === 'IFormModelProps') && _export("IFormModelProps", IFormModelProps = require ? require('./types/model').IFormModelProps : value);
        (require || prop === 'WrappedFormModel') && _export("WrappedFormModel", WrappedFormModel = require ? require('./wrapper').WrappedFormModel : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2NvcmUiLCJCYXNlV2lzZU1vZGVsIiwiUmVhY3RpdmVNb2RlbCIsInNldHRpbmdzIiwidmFsdWUiLCJjYWxsYmFja3MiLCJpbml0aWFsVmFsdWVzIiwib3JpZ2luYWxWYWx1ZXMiLCJuYW1lIiwidGVtcGxhdGUiLCJ3cmFwcGVycyIsIk1hcCIsImZpZWxkcyIsInZhbHVlcyIsImRhdGEiLCJmb3JFYWNoIiwiZmllbGQiLCJrZXkiLCJzcGVjcyIsInBhcmFtcyIsImxvYWRlZFByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsImNoaWxkV3JhcHBlcnNSZWFkeSIsImNvbnN0cnVjdG9yIiwicmVhY3RpdmVQcm9wcyIsInNldEZpZWxkIiwiZ2V0RmllbGQiLCJjb25zb2xlIiwiZXJyb3IiLCJrZXlzIiwiZ2V0RmllbGROYW1lIiwic2V0VmFsdWUiLCJ3YXJuIiwiaW5jbHVkZXMiLCJnZXQiLCJpdGVtIiwiZm91bmRGaWVsZCIsIndyYXBwZXJOYW1lIiwib3RoZXJzIiwic3BsaXQiLCJjdXJyZW50V3JhcHBlciIsIm90aGVyV3JhcHBlciIsImpvaW4iLCJPYmplY3QiLCJsZW5ndGgiLCJFcnJvciIsImNsZWFyIiwidHJpZ2dlckV2ZW50IiwiZ2V0UGFyYW1zIiwicGFyYW0iLCJleHBvcnRzIiwiQ2FsbGJhY2tNYW5hZ2VyIiwibW9kZWwiLCJsaXN0ZW5lcnMiLCJpbml0aWFsaXplIiwiaW5zdGFuY2UiLCJjaGVja0ZpZWxkIiwiZGVwZW5kZW5jeSIsImlzUmVhZHkiLCJyZXF1aXJlZCIsInByb3AiLCJjYWxsYmFjayIsImV2ZW50IiwiY2FsbGVyIiwiZXhlY3V0ZUNhbGxiYWNrIiwicHVzaCIsIm9uIiwiZGVwZW5kZW50T24iLCJmb3JtIiwiaGFzT3duUHJvcGVydHkiLCJwcm9wTmFtZSIsImFsaWFzIiwiRm9ybUZpZWxkIiwicGFyZW50IiwiTkFUSVZFX0FDVElPTlMiLCJFVkVOVFMiLCJzZXRFdmVudHMiLCJldmVudHMiLCJjb25jYXQiLCJkaXNhYmxlZCIsInZhbGlkYXRlIiwiZmllbGRWYWx1ZSIsInNvbWUiLCJhdHRyaWJ1dGVzIiwicHJvcHMiLCJnZXRQcm9wZXJ0aWVzIiwibGlzdGVuaW5nSXRlbXMiLCJwcm9wZXJ0aWVzIiwiX19pbnN0YW5jZUlEIiwiZ2VuZXJhdGVSYW5kb21OdW1iZXIiLCJfX2luc3RhbmNlIiwiTWF0aCIsInJhbmRvbSIsInRvU2V0Iiwic3RhdGUiLCJ1cGRhdGUiLCJzZXQiLCJ0cmlnZ2VyIiwiZmxvb3IiLCJjaGVja1NldHRpbmdzIiwibGlzdGVuZXJFdmVudHMiLCJpbml0VmFsdWVzIiwibGlzdGVuU2libGluZ3MiLCIjbGlzdGVuU2libGluZ3MiLCJtb2RlIiwiYWxsVmFsaWQiLCJsaXN0ZW5lciIsImV4ZWN1dGVFdmVudCIsIiNleGVjdXRlRXZlbnQiLCJhY3Rpb25zIiwiQXJyYXkiLCJpc0FycmF5IiwiZm9ybU1vZGVsIiwic29ydGVkS2V5cyIsInNvcnQiLCJhIiwiYiIsIl9fb3JkZXIiLCJhY3Rpb24iLCJmaWVsZE5hbWUiLCJ0YXJnZXQiLCJnZXRFdmVudCIsIiNnZXRFdmVudCIsImV2ZW50MiIsImNsZWFuVXAiLCJvZmYiLCJ1cGRhdGVkIiwiY3VycmVudFByb3BlcnRpZXMiLCJzYW1lT2JqZWN0IiwiSlNPTiIsInN0cmluZ2lmeSIsImRlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJlIiwiaGlkZSIsImNsYXNzTmFtZSIsImlzSGlkZGVuIiwiY2xzIiwic2hvdyIsInJlcGxhY2VBbGwiLCJ0cmltIiwiX2ZpZWxkIiwiX3dyYXBwZXIiLCJfYmFzZSIsIl9wbHVnaW5zIiwiX2NhbGxiYWNrTWFuYWdlciIsIkZvcm1Nb2RlbCIsImNoaWxkV3JhcHBlcnMiLCJwbHVnaW5zIiwiY2FsbGJhY2tNYW5hZ2VycyIsInN0YXJ0dXAiLCJnbG9iYWxUaGlzIiwiX3dpc2VGb3JtcyIsImNyZWF0ZUl0ZW1zIiwiZ2V0RmllbGRNb2RlbCIsIm9uQ2hhbmdlIiwibWFwIiwiY2hlY2tSZWFkeSIsImNvbmZpZ0ZpZWxkcyIsIlBsdWdpbnNNYW5hZ2VyIiwicmVhZHkiLCIjY2hlY2tSZWFkeSIsIm9uUmVhZHkiLCJhcmVBbGxXcmFwcGVyc0xvYWRlZCIsImxvYWRlZCIsInJlc29sdmUiLCJzaXplIiwiI2NvbmZpZ0ZpZWxkcyIsImxpc3RlbkRlcGVuZGVuY2llcyIsIiNnZXRGaWVsZE1vZGVsIiwiZXh0ZXJuYWxWYWx1ZXMiLCJ0eXBlIiwiZ2V0V3JhcHBlciIsInByb3BlcnR5IiwibWFuYWdlciIsImZpZWxkc1Byb3BlcnRpZXMiLCJkZWZhdWx0VmFsdWVzIiwiV3JhcHBlZEZvcm1Nb2RlbCIsInJlZ2lzdGVyV3JhcHBlciIsIndyYXBwZXIiLCJnZXRGb3JtIiwiZGlzYWJsZSIsImVuYWJsZSIsInJlc2V0IiwiY3JlYXRlIiwiZ2V0Rm9ybXVsYSIsImZvcm11bGEiLCJpbnN0YW5jZXMiLCJmb3JtdWxhcyIsIldpc2VGb3JtUGx1Z2luQmFzZSIsIl9mb3JtdWxhcyIsIkZvcm11bGFQbHVnaW4iLCJ2IiwiaW5pdCIsIm9ic2VydmVycyIsInByb21pc2VzIiwiYmluZCIsIlByb21pc2UiLCJhbGwiLCJsb2ciLCJvYnNlcnZlciIsIkZvcm11bGFNYW5hZ2VyIiwiaXRlbXMiLCJmIiwiUExVR0lOUyIsInBsdWdpbiIsIm9iamVjdCIsInJlc3VsdHMiLCJhbGxTZXR0bGVkIiwiaW5zdGFsbGVkIiwiZmlsdGVyIiwicmVzdWx0Iiwic3RhdHVzIiwiZmFpbGVkIiwiX2Zvcm11bGEiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbnRyb2wiLCJnZXRJbnN0YW5jZSIsIiNnZXRJbnN0YW5jZSJdLCJzb3VyY2VzIjpbIi9iYXNlLnRzIiwiL2NhbGxiYWNrLW1hbmFnZXIudHMiLCIvZmllbGQudHMiLCIvbW9kZWwudHMiLCIvcGx1Z2lucy9iYXNlLnRzIiwiL3BsdWdpbnMvZm9ybXVsYS50cyIsIi9wbHVnaW5zL2luZGV4LnRzIiwiL3BsdWdpbnMvcGx1Z2lucy50cyIsIi9jYWxsYmFja3MudHMiLCIvZGlzYWJsZWQudHMiLCIvZm9ybS1maWVsZC50cyIsIi9wbHVnaW5zLnRzIiwiL3dyYXBwZWQtZm9ybS1tb2RlbC1wcm9wcy50cyIsIi93cmFwcGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUdBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUlNLE1BQU9FLGFBQWMsU0FBUUgsTUFBQSxDQUFBSSxhQUE0QjtZQUM5RCxDQUFBQyxRQUFTO1lBQ1QsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFFQSxJQUFJQSxRQUFRQSxDQUFDQyxLQUFLO2NBQ2pCLElBQUksQ0FBQyxDQUFBRCxRQUFTLEdBQUdDLEtBQUs7WUFDdkI7WUFFQSxDQUFBQyxTQUFVLEdBQXNDLEVBQUU7WUFDbEQsSUFBSUEsU0FBU0EsQ0FBQTtjQUNaLE9BQU8sSUFBSSxDQUFDLENBQUFBLFNBQVU7WUFDdkI7WUFFQSxJQUFJQSxTQUFTQSxDQUFDRCxLQUFLO2NBQ2xCLElBQUksQ0FBQyxDQUFBQyxTQUFVLEdBQUdELEtBQUs7WUFDeEI7WUFFQSxDQUFBRSxhQUFjLEdBQTJCLEVBQUU7WUFDM0MsSUFBSUMsY0FBY0EsQ0FBQTtjQUNqQixPQUFPLElBQUksQ0FBQyxDQUFBRCxhQUFjO1lBQzNCO1lBRUEsSUFBSUUsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUFMLFFBQVMsQ0FBQ0ssSUFBSTtZQUMzQjtZQUNBLElBQUlDLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBTixRQUFTLENBQUNNLFFBQVE7WUFDL0I7WUFFQSxDQUFBQyxRQUFTLEdBQWtDLElBQUlDLEdBQUcsRUFB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