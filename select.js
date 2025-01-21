System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.0.4/hooks", "@beyond-js/reactive@1.1.14/model", "uuid@9.0.1", "pragmate-ui@0.1.2/icons", "pragmate-ui@0.1.2/components"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Select, __beyond_pkg, hmr;
  _export("Select", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_3 = _beyondJsReact18Widgets104Hooks;
    }, function (_beyondJsReactive1114Model) {
      dependency_4 = _beyondJsReactive1114Model;
    }, function (_uuid2) {
      dependency_5 = _uuid2;
    }, function (_pragmateUi012Icons) {
      dependency_6 = _pragmateUi012Icons;
    }, function (_pragmateUi012Components) {
      dependency_7 = _pragmateUi012Components;
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
          "vspecifier": "sgs-workflow@1.0.0/select"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/react-18-widgets/hooks', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['uuid', dependency_5], ['pragmate-ui/icons', dependency_6], ['pragmate-ui/components', dependency_7]]);
      brequire('@beyond-js/kernel/styles').styles.register('sgs-workflow@1.0.0/select');
      ims = new Map();
      /************************
      INTERNAL MODULE: ./contex
      ************************/
      ims.set('./contex', {
        hash: 22400080,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSelectContext = exports.SelectContext = void 0;
          var _react = require("react");
          const SelectContext = exports.SelectContext = (0, _react.createContext)({});
          const useSelectContext = () => (0, _react.useContext)(SelectContext);
          exports.useSelectContext = useSelectContext;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./hooks/use-outside-click
      *****************************************/

      ims.set('./hooks/use-outside-click', {
        hash: 1101358615,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useOutsideClick = useOutsideClick;
          var _react = require("react");
          function useOutsideClick(callback) {
            const ref = (0, _react.useRef)(null);
            (0, _react.useEffect)(() => {
              const handleClick = event => {
                const {
                  current
                } = ref;
                if (!current) return; // Si la referencia no está inicializada, no hacer nada
                // Verificar si el clic fue dentro del nodo o sus hijos
                const isSameNode = current === event.target || current === event.currentTarget || event.composedPath()[0] === current;
                const isAChildren = current?.contains(event.composedPath()[0]);
                if (!isSameNode && !isAChildren) {
                  callback(); // Ejecutar el callback si el clic fue fuera del nodo
                }
              };
              // Agregar el evento de clic en el document
              document.addEventListener("mousedown", handleClick); // Usamos mousedown para mayor precisión
              return () => {
                // Limpiar el evento cuando el componente se desmonta
                document.removeEventListener("mousedown", handleClick);
              };
            }, [callback]); // Reejecutar si el callback cambia
            return ref;
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3672977171,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Select = Select;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var React = require("react");
          var _contex = require("./contex");
          var _useOutsideClick = require("./hooks/use-outside-click");
          var _manager = require("./manager");
          var _observer = require("./observer");
          var _options = require("./options");
          var _search = require("./search");
          /*bundle*/ // Tu hook actualizado

          function Select(props) {
            const [upd, setUpd] = React.useState({});
            const optionsRef = React.useRef(null); // Referencia a las opciones
            const {
              current: manager
            } = React.useRef(new _manager.Manager({
              ...props,
              optionsRef
            }));
            const ref = (0, _useOutsideClick.useOutsideClick)(() => manager.closeOptions()); // Usamos `useOutsideClick` para manejar clics fuera
            React.useEffect(() => {
              if (!manager.optionsRef?.current) manager.optionsRef = optionsRef;
              if (manager.showOptions && optionsRef.current) {
                optionsRef.current.focus(); // Mover el foco a las opciones cuando se abren
                manager.focusOption();
              } else if (ref.current) {
                ref.current.focus(); // Devolver el foco al contenedor del select si se cierran las opciones
              }
            }, [manager.showOptions]);
            React.useEffect(() => {
              if (props.disabled === manager.disabled) return;
              manager.disabled = !!props.disabled;
              manager.triggerEvent();
            }, [props.disabled]);
            React.useEffect(() => {
              const options = props.options || [];
              manager.options = options;
              manager.originalOptions = options;
              manager.loadOptions();
            }, [props.options]);
            React.useEffect(() => {
              manager.updateValue({
                props
              });
            }, [props.value, manager.originalOptions, props.options]);
            React.useEffect(() => {
              if (!optionsRef.current) return;
              manager.loadOptions();
              const element = optionsRef.current;
              const observer = new _observer.StyleObserver({
                node: element,
                callback: manager.handleScroll
              });
              observer.startObserving();
              return () => observer.stopObserving();
            }, [optionsRef.current]);
            (0, _hooks.useBinder)([manager], () => setUpd({}));
            const value = {
              ...props,
              manager,
              ref,
              options: manager.options,
              optionsRef,
              disabled: manager.disabled
            };
            let cls = `${manager.showOptions ? 'container-select-component container-select-component--menu-is-open' : 'container-select-component'}`;
            cls += ` ${manager.disabled ? 'container-select-component--is-disabled' : ''} `;
            return React.createElement(_contex.SelectContext.Provider, {
              value: value
            }, React.createElement("div", {
              className: cls
            }, props.label && React.createElement("label", null, props.label), React.createElement("div", {
              className: "content-select",
              ref: ref
            }, React.createElement(_search.Search, null), React.createElement(_options.Options, null))));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./interfaces/index
      **********************************/

      ims.set('./interfaces/index', {
        hash: 2769365720,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          ;
        }
      });

      /*******************************
      INTERNAL MODULE: ./manager/index
      *******************************/

      ims.set('./manager/index', {
        hash: 1478457887,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Manager = void 0;
          var _model = require("@beyond-js/reactive/model");
          class Manager extends _model.ReactiveModel {
            showOptions = false;
            options;
            originalOptions;
            selected = {};
            value = '';
            valueInput = '';
            confirmDelete = false;
            itemDelete;
            props = {};
            focusedIndex = 0;
            endIndex = 15;
            itemsPerPage = 15;
            canCreate = false;
            isCreating = false;
            optionsRef; // Ref
            disabled;
            focusedOption = false;
            constructor(props) {
              super();
              const options = props.options || [];
              this.options = options.slice(0, this.endIndex);
              this.originalOptions = options;
              this.props = props;
              this.findValue(props.value);
              this.optionsRef = props.optionsRef || {
                current: null
              };
              this.disabled = props.disabled;
              this.canCreate = !!props.canCreate;
            }
            findValue = value => {
              if (value === undefined) return;
              const item = this.options.find(option => option.value === value);
              if (!item) return;
              this.value = item.value;
              this.valueInput = item.label;
              this.selected = item;
            };
            handleShow = event => {
              event.stopPropagation();
              this.showOptions = !this.showOptions;
              this.triggerEvent();
            };
            handleKeyDown = event => {
              if (['Tab'].includes(event.key) && !this.showOptions) {
                return;
              }
              ;
              if (!["ArrowDown", 'ArrowUp', 'Escape', 'Enter', 'Tab'].includes(event.key)) return;
              const totalOptions = this.options.length;
              const totalOriginalOptions = this.originalOptions.length;
              event.preventDefault();
              if (!this.showOptions && (event.key === 'Enter' || event.key === 'ArrowDown')) {
                this.showOptions = true;
                this.triggerEvent();
                return;
              }
              ;
              if (this.showOptions) {
                // Navegar con ArrowDown
                if (event.key === 'ArrowDown') {
                  if (this.focusedIndex < totalOptions - 1) {
                    // Mover a la siguiente opción si no está en la última cargada
                    this.focusedIndex += 1;
                  } else if (this.endIndex < totalOriginalOptions) {
                    // Si está en la última opción cargada y hay más opciones para cargar
                    this.loadMoreOptions(); // Cargar más opciones
                  } else {
                    // Si ya se cargaron todas las opciones, ir a la primera opción
                    this.focusedIndex = 0;
                  }
                }
                // Navegar con ArrowUp
                if (event.key === 'ArrowUp') {
                  if (this.focusedIndex > 0) {
                    // Mover a la opción anterior si no está en la primera opción
                    this.focusedIndex -= 1;
                  } else {
                    // Si está en la primera opción, ir a la última opción cargada
                    this.focusedIndex = totalOptions - 1;
                  }
                }
                // Asegurar que la opción seleccionada esté visible
                this.ensureOptionVisible(this.focusedIndex);
                // Seleccionar opción con Enter o Tab
                if (event.key === 'Enter' || event.key === 'Tab') {
                  if (this.focusedIndex >= 0) {
                    this.selectOptionByIndex(this.focusedIndex);
                  }
                }
                // Cerrar el menú con Escape
                if (event.key === 'Escape') {
                  this.showOptions = false;
                  this.triggerEvent();
                }
                this.triggerEvent();
              }
            };
            selectOptionByIndex = index => {
              const item = this.options[index];
              if (!item) return;
              const hasInOriginalOptions = this.originalOptions.some(option => item.value === option.value);
              this.selected = item;
              this.value = item.value;
              this.valueInput = hasInOriginalOptions ? item.label : item.value.toString();
              this.showOptions = false; // Cerrar las opciones al seleccionar
              this.isCreating = false;
              if (this.props.onChange && typeof this.props.onChange === 'function') {
                this.props.onChange({
                  target: {
                    ...item,
                    name: this.props.name
                  },
                  currentTarget: {
                    ...item,
                    name: this.props.name
                  }
                });
              }
              this.triggerEvent();
            };
            ensureOptionVisible = index => {
              if (!this.optionsRef || !this.optionsRef.current) return; // Asegúrate de que la referencia está disponible
              const optionElement = this.optionsRef.current.querySelectorAll('.option')[index];
              if (optionElement) {
                const containerTop = this.optionsRef.current.scrollTop;
                const containerBottom = containerTop + this.optionsRef.current.clientHeight;
                const optionTop = optionElement.offsetTop;
                const optionBottom = optionTop + optionElement.clientHeight;
                // Si la opción no es visible, desplázate hacia ella
                if (optionTop < containerTop) {
                  this.optionsRef.current.scrollTop = optionTop;
                } else if (optionBottom > containerBottom) {
                  this.optionsRef.current.scrollTop = optionBottom - this.optionsRef.current.clientHeight;
                }
              }
            };
            closeOptions = () => {
              if (!this.valueInput && !!this.value || !this.originalOptions.some(item => item.value === this.valueInput)) {
                this.valueInput = this.selected.label;
                this.endIndex = 15;
                this.options = this.originalOptions.slice(0, this.endIndex);
              }
              this.showOptions = false;
              this.triggerEvent();
            };
            openOptions = () => {
              this.showOptions = true;
              this.triggerEvent();
            };
            select = event => {
              event.stopPropagation();
              const {
                value
              } = event.currentTarget.dataset;
              const item = JSON.parse(value);
              const hasInOriginalOptions = this.originalOptions.some(option => item.value === option.value);
              this.selected = item;
              this.value = item.value;
              this.showOptions = false;
              this.valueInput = hasInOriginalOptions ? item.label : item.value.toString();
              const index = this.options.findIndex(item => item.value === this.value);
              this.focusedIndex = index;
              this.isCreating = false;
              if (this.props.onChange && typeof this.props.onChange === 'function') {
                this.props.onChange({
                  target: {
                    ...item,
                    name: this.props.name
                  },
                  currentTarget: {
                    ...item,
                    name: this.props.name
                  }
                });
              }
              this.triggerEvent();
            };
            handleChange = event => {
              this.valueInput = event.currentTarget.value;
              this.isCreating = false;
              if (!this.valueInput) {
                this.options = this.originalOptions.slice(0, this.endIndex);
                this.focusedIndex = 0; // Resetear el foco al filtrar opciones
                this.triggerEvent();
                return;
              }
              let orderedOptions = this.originalOptions.filter(item => {
                if (!item || !item.label) return false;
                return item.label.toLowerCase().includes(this.valueInput.toLowerCase().trim());
              }).slice(0, this.endIndex);
              orderedOptions = orderedOptions.sort((optionA, optionB) => {
                // Si optionA o optionB no tienen label, los consideramos como el menor
                if (!optionA.label) return 1;
                if (!optionB.label) return -1;
                // Comparar si el label empieza con el valor de entrada
                let aStartsWith = optionA.label.toLowerCase().startsWith(this.valueInput.toLowerCase());
                let bStartsWith = optionB.label.toLowerCase().startsWith(this.valueInput.toLowerCase());
                if (aStartsWith && !bStartsWith) {
                  return -1;
                }
                if (!aStartsWith && bStartsWith) {
                  return 1;
                }
                // Comparar si el label incluye el valor de entrada
                let aIncludes = optionA.label.toLowerCase().includes(this.valueInput.toLowerCase());
                let bIncludes = optionB.label.toLowerCase().includes(this.valueInput.toLowerCase());
                if (aIncludes && !bIncludes) {
                  return -1;
                }
                if (!aIncludes && bIncludes) {
                  return 1;
                }
                // Si son iguales, devolver 0
                return 0;
              });
              if (this.canCreate && this.valueInput.length >= 2) {
                orderedOptions = [...orderedOptions.slice(0, -1), {
                  value: this.valueInput,
                  label: `Crear "${this.valueInput}"`
                }];
                this.focusedIndex = 0;
                this.isCreating = true;
              }
              this.options = orderedOptions;
              this.focusedIndex = 0; // Resetear el foco al filtrar opciones
              this.triggerEvent();
            };
            loadOptions = () => {
              // Filtra las opciones iniciales si es necesario
              const newOptionsToShow = this.originalOptions.slice(0, this.endIndex);
              this.options = newOptionsToShow;
              // Después de cargar las opciones, asegúrate de enfocar el índice correspondiente al valor inicial
              if (this.selected && this.selected.value) {
                const index = this.originalOptions.findIndex(item => item.value === this.selected.value);
                this.focusedIndex = index !== -1 ? index - 1 : 0; // Si no se encuentra el valor, enfocar la primera opción
              } else {
                this.focusedIndex = 0; // Si no hay valor seleccionado, enfocar la primera opción
              }
              this.ensureOptionVisible(this.focusedIndex); // Asegura que la opción enfocada sea visible
              this.focusedOption = false;
              this.triggerEvent(); // Actualiza la UI después de cargar las opciones y establecer el foco
            };
            handleScroll = event => {
              const bottom = Math.round(event.currentTarget.scrollHeight - event.currentTarget.scrollTop) === event.currentTarget.clientHeight;
              const displayingOpts = this.options.length;
              const instanceOpts = this.originalOptions.length;
              if (bottom && displayingOpts < instanceOpts) {
                if (this.canCreate && this.isCreating) {
                  this.options = [this.options.at(-1)];
                  this.focusedIndex = 0;
                  this.triggerEvent();
                  return;
                }
                this.loadMoreOptions();
              }
            };
            loadMoreOptions = () => {
              if (this.canCreate && this.isCreating) return;
              const newIndex = this.endIndex + this.itemsPerPage;
              const instanceOpts = this.originalOptions.length;
              if (this.endIndex >= instanceOpts) return; // No hay más opciones para cargar
              const newOptionsToShow = this.originalOptions.slice(0, newIndex);
              this.endIndex = newIndex;
              this.options = newOptionsToShow;
              this.triggerEvent();
            };
            updateValue = ({
              props
            }) => {
              const valueIsObject = typeof props.value === "object" && !!props.value;
              const isReturn = valueIsObject ? props.value.value === this.value : props.value === this.value && this.originalOptions.length === props.options.length;
              // if (isReturn) return
              const hasInOriginalOptions = this.originalOptions.some(option => valueIsObject ? props.value.value : props.value === option.value);
              const option = this.originalOptions.find(option => {
                const value = valueIsObject ? props.value.value : props.value;
                return value === option.value;
              });
              const valueSelected = option || {
                label: this.canCreate ? props?.value : "",
                value: this.canCreate ? props?.value : ""
              };
              const value = hasInOriginalOptions ? option : valueIsObject ? props.value : valueSelected || {};
              this.selected = value;
              this.value = props?.value;
              this.valueInput = value?.label;
              this.focusedOption = false;
              this.focusOption();
            };
            focusOption = () => {
              if (!this.selected || !this.selected.value || !!this.focusedOption) {
                if (this.valueInput === '') this.triggerEvent();
                return;
              }
              ;
              // Encuentra el índice de la opción seleccionada
              const index = this.originalOptions.findIndex(item => item.value === this.selected.value);
              if (index > this.originalOptions.length) {
                this.options = this.originalOptions.slice(0, index + 1);
                this.focusedOption = true;
              }
              // Si se encuentra la opción, establece el índice y asegúrate de que sea visible
              if (index !== -1) {
                this.focusedIndex = index;
                this.ensureOptionVisible(index);
              } else {
                this.focusedIndex = 0; // Si no se encuentra la opción, enfoca la primera
              }
              this.triggerEvent(); // Actualiza la UI
            };
          }
          exports.Manager = Manager;
        }
      });

      /**************************
      INTERNAL MODULE: ./observer
      **************************/

      ims.set('./observer', {
        hash: 3097258972,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StyleObserver = void 0;
          class StyleObserver {
            observer;
            node;
            constructor({
              node,
              callback
            }) {
              this.node = node;
              this.observer = new MutationObserver(mutations => {
                mutations.forEach(mutation => {
                  if (mutation.type !== 'childList') return;
                  const element = node;
                  if (!element) return;
                  element.addEventListener('scroll', callback);
                });
              });
            }
            startObserving() {
              if (!this.node) return;
              const config = {
                childList: true
              };
              this.observer.observe(this.node, config);
            }
            stopObserving() {
              this.observer.disconnect();
            }
          }
          exports.StyleObserver = StyleObserver;
        }
      });

      /*******************************
      INTERNAL MODULE: ./options/empty
      *******************************/

      ims.set('./options/empty', {
        hash: 986554283,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Empty = Empty;
          var _react = require("react");
          var _contex = require("../contex");
          function Empty() {
            const {
              manager
            } = (0, _contex.useSelectContext)();
            return _react.default.createElement("div", {
              className: "option"
            }, "No hay opciones");
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./options/index
      *******************************/

      ims.set('./options/index', {
        hash: 2586614062,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Options = Options;
          var _react = require("react");
          var _contex = require("../contex");
          var _empty = require("./empty");
          var _item = require("./item");
          var _uuid = require("uuid");
          function Options() {
            const {
              options,
              manager,
              optionsRef,
              ref
            } = (0, _contex.useSelectContext)();
            const [style, setStyle] = (0, _react.useState)({
              maxWidth: ref?.current?.offsetWidth
            });
            (0, _react.useEffect)(() => {
              if (!ref.current) return;
              const resizeObserver = new ResizeObserver(entries => {
                for (let entry of entries) {
                  setStyle({
                    maxWidth: entry.contentRect.width
                  });
                }
              });
              resizeObserver.observe(ref.current);
              return () => {
                resizeObserver.disconnect();
              };
            }, [ref]);
            const output = [];
            if (!options || !Array.isArray(options) || !options.length) output.push(_react.default.createElement(_empty.Empty, {
              key: (0, _uuid.v4)()
            }));else {
              options.forEach((item, index) => {
                const isFocused = manager.focusedIndex === index;
                output.push(_react.default.createElement(_item.Item, {
                  key: (0, _uuid.v4)(),
                  item: item,
                  isFocused: isFocused
                }));
              });
            }
            ;
            const cls = `${manager.showOptions ? "options-select show" : "options-select hide"}`;
            return _react.default.createElement("div", {
              className: cls,
              ref: optionsRef,
              //   tabIndex={-1} 
              role: "listbox",
              style: style
            }, output);
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./options/item
      ******************************/

      ims.set('./options/item', {
        hash: 634304533,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _contex = require("../contex");
          function Item({
            item,
            isFocused
          }) {
            const {
              manager
            } = (0, _contex.useSelectContext)();
            if (item.isDisabled) return null;
            const isSelected = !!manager.selected && manager.selected.value === item.value && manager.selected.label === item.label;
            const cls = `${isSelected ? "active option" : "option"} ${isFocused ? "focused" : ""}`;
            const handleMouseEnter = () => {
              const index = manager.options.findIndex(opt => opt.value === item.value);
              manager.focusedIndex = index;
              manager.triggerEvent();
            };
            return _react.default.createElement("div", {
              className: cls,
              "data-value": JSON.stringify(item),
              onClick: manager.select,
              role: "option",
              "aria-selected": isSelected
            }, item.label);
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./search/icon-down
      **********************************/

      ims.set('./search/icon-down', {
        hash: 341889629,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.iconDown = void 0;
          const iconDown = exports.iconDown = {
            icon: `<path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>`,
            viewBox: "0 0 512 512"
          };
        }
      });

      /******************************
      INTERNAL MODULE: ./search/index
      ******************************/

      ims.set('./search/index', {
        hash: 75438577,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Search = Search;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _iconDown = require("./icon-down");
          var _contex = require("../contex");
          var _uuid = require("uuid");
          var _loading = require("./loading");
          function Search() {
            const {
              manager,
              placeholder,
              disabled,
              name,
              isLoading
            } = (0, _contex.useSelectContext)();
            return _react.default.createElement("div", {
              className: "search-select",
              onKeyDown: manager.handleKeyDown
            }, _react.default.createElement("input", {
              type: "text",
              placeholder: placeholder ?? "Select...",
              onChange: manager.handleChange,
              value: manager.valueInput || '',
              onClick: manager.openOptions,
              tabIndex: 0,
              "aria-haspopup": "listbox",
              "aria-expanded": manager.showOptions,
              "aria-controls": "select-options",
              role: "combobox",
              disabled: disabled,
              name: name || (0, _uuid.v4)(),
              autoComplete: "off"
            }), _react.default.createElement(_loading.Loading, null), _react.default.createElement("div", {
              tabIndex: -1,
              className: "icon-search"
            }, _react.default.createElement(_icons.IconButton, {
              onClick: manager.handleShow,
              icon: _iconDown.iconDown.icon,
              viewBox: _iconDown.iconDown.viewBox,
              tabIndex: -1,
              "aria-label": "Toggle options"
            })));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./search/loading
      ********************************/

      ims.set('./search/loading', {
        hash: 3889696121,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Loading = Loading;
          var _react = require("react");
          var _contex = require("../contex");
          var _components = require("pragmate-ui/components");
          function Loading() {
            const {
              isLoading
            } = (0, _contex.useSelectContext)();
            if (!isLoading) return null;
            return _react.default.createElement(_components.Spinner, {
              active: true
            });
          }
          ;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Select",
        "name": "Select"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Select') && _export("Select", Select = require ? require('./index').Select : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiU2VsZWN0Q29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlU2VsZWN0Q29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VPdXRzaWRlQ2xpY2siLCJjYWxsYmFjayIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJjdXJyZW50IiwiaXNTYW1lTm9kZSIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJjb21wb3NlZFBhdGgiLCJpc0FDaGlsZHJlbiIsImNvbnRhaW5zIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9ob29rcyIsIlJlYWN0IiwiX2NvbnRleCIsIl91c2VPdXRzaWRlQ2xpY2siLCJfbWFuYWdlciIsIl9vYnNlcnZlciIsIl9vcHRpb25zIiwiX3NlYXJjaCIsIlNlbGVjdCIsInByb3BzIiwidXBkIiwic2V0VXBkIiwidXNlU3RhdGUiLCJvcHRpb25zUmVmIiwibWFuYWdlciIsIk1hbmFnZXIiLCJjbG9zZU9wdGlvbnMiLCJzaG93T3B0aW9ucyIsImZvY3VzIiwiZm9jdXNPcHRpb24iLCJkaXNhYmxlZCIsInRyaWdnZXJFdmVudCIsIm9wdGlvbnMiLCJvcmlnaW5hbE9wdGlvbnMiLCJsb2FkT3B0aW9ucyIsInVwZGF0ZVZhbHVlIiwidmFsdWUiLCJlbGVtZW50Iiwib2JzZXJ2ZXIiLCJTdHlsZU9ic2VydmVyIiwibm9kZSIsImhhbmRsZVNjcm9sbCIsInN0YXJ0T2JzZXJ2aW5nIiwic3RvcE9ic2VydmluZyIsInVzZUJpbmRlciIsImNscyIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsImNsYXNzTmFtZSIsImxhYmVsIiwiU2VhcmNoIiwiT3B0aW9ucyIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJzZWxlY3RlZCIsInZhbHVlSW5wdXQiLCJjb25maXJtRGVsZXRlIiwiaXRlbURlbGV0ZSIsImZvY3VzZWRJbmRleCIsImVuZEluZGV4IiwiaXRlbXNQZXJQYWdlIiwiY2FuQ3JlYXRlIiwiaXNDcmVhdGluZyIsImZvY3VzZWRPcHRpb24iLCJjb25zdHJ1Y3RvciIsInNsaWNlIiwiZmluZFZhbHVlIiwidW5kZWZpbmVkIiwiaXRlbSIsImZpbmQiLCJvcHRpb24iLCJoYW5kbGVTaG93Iiwic3RvcFByb3BhZ2F0aW9uIiwiaGFuZGxlS2V5RG93biIsImluY2x1ZGVzIiwia2V5IiwidG90YWxPcHRpb25zIiwibGVuZ3RoIiwidG90YWxPcmlnaW5hbE9wdGlvbnMiLCJwcmV2ZW50RGVmYXVsdCIsImxvYWRNb3JlT3B0aW9ucyIsImVuc3VyZU9wdGlvblZpc2libGUiLCJzZWxlY3RPcHRpb25CeUluZGV4IiwiaW5kZXgiLCJoYXNJbk9yaWdpbmFsT3B0aW9ucyIsInNvbWUiLCJ0b1N0cmluZyIsIm9uQ2hhbmdlIiwibmFtZSIsIm9wdGlvbkVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29udGFpbmVyVG9wIiwic2Nyb2xsVG9wIiwiY29udGFpbmVyQm90dG9tIiwiY2xpZW50SGVpZ2h0Iiwib3B0aW9uVG9wIiwib2Zmc2V0VG9wIiwib3B0aW9uQm90dG9tIiwib3Blbk9wdGlvbnMiLCJzZWxlY3QiLCJkYXRhc2V0IiwiSlNPTiIsInBhcnNlIiwiZmluZEluZGV4IiwiaGFuZGxlQ2hhbmdlIiwib3JkZXJlZE9wdGlvbnMiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsInRyaW0iLCJzb3J0Iiwib3B0aW9uQSIsIm9wdGlvbkIiLCJhU3RhcnRzV2l0aCIsInN0YXJ0c1dpdGgiLCJiU3RhcnRzV2l0aCIsImFJbmNsdWRlcyIsImJJbmNsdWRlcyIsIm5ld09wdGlvbnNUb1Nob3ciLCJib3R0b20iLCJNYXRoIiwicm91bmQiLCJzY3JvbGxIZWlnaHQiLCJkaXNwbGF5aW5nT3B0cyIsImluc3RhbmNlT3B0cyIsImF0IiwibmV3SW5kZXgiLCJ2YWx1ZUlzT2JqZWN0IiwiaXNSZXR1cm4iLCJ2YWx1ZVNlbGVjdGVkIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsImZvckVhY2giLCJtdXRhdGlvbiIsInR5cGUiLCJjb25maWciLCJjaGlsZExpc3QiLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsIkVtcHR5IiwiZGVmYXVsdCIsIl9lbXB0eSIsIl9pdGVtIiwiX3V1aWQiLCJzdHlsZSIsInNldFN0eWxlIiwibWF4V2lkdGgiLCJvZmZzZXRXaWR0aCIsInJlc2l6ZU9ic2VydmVyIiwiUmVzaXplT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjb250ZW50UmVjdCIsIndpZHRoIiwib3V0cHV0IiwiQXJyYXkiLCJpc0FycmF5IiwicHVzaCIsInY0IiwiaXNGb2N1c2VkIiwiSXRlbSIsInJvbGUiLCJpc0Rpc2FibGVkIiwiaXNTZWxlY3RlZCIsImhhbmRsZU1vdXNlRW50ZXIiLCJvcHQiLCJzdHJpbmdpZnkiLCJvbkNsaWNrIiwiaWNvbkRvd24iLCJpY29uIiwidmlld0JveCIsIl9pY29ucyIsIl9pY29uRG93biIsIl9sb2FkaW5nIiwicGxhY2Vob2xkZXIiLCJpc0xvYWRpbmciLCJvbktleURvd24iLCJ0YWJJbmRleCIsImF1dG9Db21wbGV0ZSIsIkxvYWRpbmciLCJJY29uQnV0dG9uIiwiX2NvbXBvbmVudHMiLCJTcGlubmVyIiwiYWN0aXZlIl0sInNvdXJjZXMiOlsiL2NvZGUvdHMvY29udGV4LnRzIiwiL2NvZGUvdHMvaG9va3MvdXNlLW91dHNpZGUtY2xpY2sudHMiLCIvY29kZS90cy9pbmRleC50c3giLCIvY29kZS90cy9pbnRlcmZhY2VzL2luZGV4LnRzIiwiL2NvZGUvdHMvbWFuYWdlci9pbmRleC50cyIsIi9jb2RlL3RzL29ic2VydmVyLnRzIiwiL2NvZGUvdHMvb3B0aW9ucy9lbXB0eS50c3giLCIvY29kZS90cy9vcHRpb25zL2luZGV4LnRzeCIsIi9jb2RlL3RzL29wdGlvbnMvaXRlbS50c3giLCIvY29kZS90cy9zZWFyY2gvaWNvbi1kb3duLnRzIiwiL2NvZGUvdHMvc2VhcmNoL2luZGV4LnRzeCIsIi9jb2RlL3RzL3NlYXJjaC9sb2FkaW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBR08sTUFBTUMsYUFBYSxHQUFBQyxPQUFBLENBQUFELGFBQUEsR0FBb0IsSUFBQUYsTUFBQSxDQUFBSSxhQUFhLEVBQUMsRUFBRSxDQUFDO1VBQ3hELE1BQU1DLGdCQUFnQixHQUFpQkEsQ0FBQSxLQUFjLElBQUFMLE1BQUEsQ0FBQU0sVUFBVSxFQUFDSixhQUFhLENBQUM7VUFBQ0MsT0FBQSxDQUFBRSxnQkFBQSxHQUFBQSxnQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKdEYsSUFBQUwsTUFBQSxHQUFBQyxPQUFBO1VBRU0sU0FBVU0sZUFBZUEsQ0FBd0JDLFFBQW9CO1lBQ3ZFLE1BQU1DLEdBQUcsR0FBRyxJQUFBVCxNQUFBLENBQUFVLE1BQU0sRUFBSSxJQUFJLENBQUM7WUFFM0IsSUFBQVYsTUFBQSxDQUFBVyxTQUFTLEVBQUMsTUFBSztjQUNYLE1BQU1DLFdBQVcsR0FBSUMsS0FBSyxJQUFVO2dCQUNoQyxNQUFNO2tCQUFFQztnQkFBTyxDQUFFLEdBQUdMLEdBQUc7Z0JBRXZCLElBQUksQ0FBQ0ssT0FBTyxFQUFFLE9BQU8sQ0FBQztnQkFFdEI7Z0JBQ0EsTUFBTUMsVUFBVSxHQUNaRCxPQUFPLEtBQUtELEtBQUssQ0FBQ0csTUFBTSxJQUN4QkYsT0FBTyxLQUFLRCxLQUFLLENBQUNJLGFBQWEsSUFDL0JKLEtBQUssQ0FBQ0ssWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUtKLE9BQU87Z0JBQ3ZDLE1BQU1LLFdBQVcsR0FBWUwsT0FBTyxFQUFFTSxRQUFRLENBQzFDUCxLQUFLLENBQUNLLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FB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