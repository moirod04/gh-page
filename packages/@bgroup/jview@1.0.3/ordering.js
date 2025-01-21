System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.1.2/components", "pragmate-ui@0.1.2/icons", "@bgroup/jview@1.0.3/select", "pragmate-ui@0.1.2/form", "pragmate-ui@0.1.2/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Ordering, IRef, __beyond_pkg, hmr;
  _export({
    Ordering: void 0,
    IRef: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi012Components) {
      dependency_3 = _pragmateUi012Components;
    }, function (_pragmateUi012Icons) {
      dependency_4 = _pragmateUi012Icons;
    }, function (_bgroupJview103Select) {
      dependency_5 = _bgroupJview103Select;
    }, function (_pragmateUi012Form) {
      dependency_6 = _pragmateUi012Form;
    }, function (_pragmateUi012Modal) {
      dependency_7 = _pragmateUi012Modal;
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
          "vspecifier": "@bgroup/jview@1.0.3/ordering"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/components', dependency_3], ['pragmate-ui/icons', dependency_4], ['@bgroup/jview/select', dependency_5], ['pragmate-ui/form', dependency_6], ['pragmate-ui/modal', dependency_7]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bgroup/jview@1.0.3/ordering');
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./add-item
      **************************/
      ims.set('./add-item', {
        hash: 1102410516,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AddItem = AddItem;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          function AddItem() {
            const {
              texts,
              setState,
              state
            } = (0, _context.useOrderingContext)();
            const handleClick = () => {
              const item = state.find(item => !item.show);
              item.show = true;
              const items = state.map(entry => entry.key === item.key ? item : entry);
              setState(items);
            };
            const itemsShowed = state.filter(item => item.show);
            const isAllShowed = itemsShowed.length === state.length;
            return _react.default.createElement("div", null, _react.default.createElement(_components.Button, {
              onClick: handleClick,
              className: 'add-column',
              label: texts.addColumn,
              disabled: isAllShowed
            }));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./buttons
      *************************/

      ims.set('./buttons', {
        hash: 1721714744,
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
              texts,
              close
            } = (0, _context.useOrderingContext)();
            return _react.default.createElement("div", {
              className: 'buttons-order'
            }, _react.default.createElement(_components.Button, {
              variant: 'secondary',
              label: texts.cancel,
              onClick: close
            }), _react.default.createElement(_components.Button, {
              variant: 'primary',
              label: texts.order,
              type: 'submit'
            }));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 3997418808,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useOrderingContext = exports.OrderingContext = void 0;
          var _react = require("react");
          const OrderingContext = exports.OrderingContext = (0, _react.createContext)({});
          const useOrderingContext = () => (0, _react.useContext)(OrderingContext);
          exports.useOrderingContext = useOrderingContext;
        }
      });

      /*************************
      INTERNAL MODULE: ./default
      *************************/

      ims.set('./default', {
        hash: 2595967914,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.defaultField = exports.defaultColumns = void 0;
          const defaultColumns = exports.defaultColumns = [{
            key: "timeCreated",
            order: "DESC",
            show: true,
            selected: "timeCreated",
            label: "Fecha"
          }];
          const defaultField = exports.defaultField = "timeCreated";
        }
      });

      /************************
      INTERNAL MODULE: ./header
      ************************/

      ims.set('./header', {
        hash: 2292992703,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _context = require("./context");
          function Header() {
            const {
              texts
            } = (0, _context.useOrderingContext)();
            return _react.default.createElement("header", {
              className: 'header-order'
            }, _react.default.createElement("h1", null, texts.title));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./icon
      **********************/

      ims.set('./icon', {
        hash: 1437159497,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.iconSort = void 0;
          const iconSort = exports.iconSort = {
            viewBox: "0 0 320 512",
            icon: `<g><path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"/></g>`
          };
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2731565705,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Ordering = void 0;
          var _react = require("react");
          var _texts = require("./texts");
          var _context = require("./context");
          var _default = require("./default");
          var _icons = require("pragmate-ui/icons");
          var _icon = require("./icon");
          var _view = require("./view");
          /*bundle*/
          const Ordering = exports.Ordering = (0, _react.forwardRef)(function (props, ref) {
            const [show, setShow] = (0, _react.useState)(false);
            const items = !!props.items && Array.isArray(props.items) ? props.items : [];
            const entries = items.map(item => {
              return {
                show: item.key === _default.defaultField,
                order: "DESC",
                key: item.key,
                selected: item.key,
                label: item.label
              };
            });
            const columns = entries.some(item => item.key === _default.defaultField) ? entries : [..._default.defaultColumns.concat([...entries])];
            const [state, setState] = _react.default.useState([...columns]);
            const texts = (0, _texts.Texts)("es");
            const handleModal = () => setShow(!show);
            (0, _react.useImperativeHandle)(ref, () => {
              return {
                open: () => setShow(true),
                close: () => setShow(false),
                handleModal
              };
            });
            const close = () => {
              setState(columns);
              handleModal();
            };
            const value = {
              texts,
              ...props,
              entries,
              setState,
              state,
              close,
              show,
              handleModal
            };
            return _react.default.createElement(_context.OrderingContext.Provider, {
              value: value
            }, _react.default.createElement("span", {
              className: "tooltip-item bottom",
              "data-tooltip": "Ordenar"
            }, _react.default.createElement(_icons.IconButton, {
              ..._icon.iconSort,
              onClick: handleModal,
              className: 'icon-header'
            })), _react.default.createElement(_view.View, null));
          });
        }
      });

      /**********************************
      INTERNAL MODULE: ./interfaces/index
      **********************************/

      ims.set('./interfaces/index', {
        hash: 617517809,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          ;
          ;
          ;
          ;
        }
      });

      /*****************************
      INTERNAL MODULE: ./items/index
      *****************************/

      ims.set('./items/index', {
        hash: 3689898307,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = Items;
          var _react = require("react");
          var _item = require("./item");
          var _context = require("../context");
          function Items() {
            const {
              state
            } = (0, _context.useOrderingContext)();
            const output = state.filter(item => item.show).map(item => {
              return _react.default.createElement(_item.Item, {
                key: item.key,
                field: item.key
              });
            });
            return _react.default.createElement("div", {
              className: 'order-items'
            }, output);
          }
          ;
        }
      });

      /****************************
      INTERNAL MODULE: ./items/item
      ****************************/

      ims.set('./items/item', {
        hash: 1527405414,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _context = require("../context");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          var _default = require("../default");
          function Item({
            field
          }) {
            const {
              texts,
              items,
              state,
              setState
            } = (0, _context.useOrderingContext)();
            const options = state.map(item => {
              return _react.default.createElement("option", {
                key: item.key,
                value: item.key
              }, item.label);
            });
            const order = state.find(item => item.key === field)?.order;
            const isTimeCreated = field !== _default.defaultField;
            const item = state.find(item => item.key === field);
            const handleChange = event => {
              const value = event.currentTarget.value;
              item.order = value;
              const items = state.map(entry => entry.key === item.key ? item : entry);
              setState(items);
            };
            const handleClick = () => {
              item.show = false;
              const items = state.map(entry => entry.key === item.key ? item : entry);
              setState(items);
            };
            const value = item.selected;
            const handleSelect = event => {
              item.selected = event.currentTarget.value;
              const items = state.map(entry => entry.key === item.key ? item : entry);
              setState(items);
            };
            return _react.default.createElement("div", {
              className: 'order-item'
            }, _react.default.createElement("span", null, texts.orderBy), _react.default.createElement("select", {
              value: value,
              onChange: handleSelect,
              id: "modal-select",
              name: field,
              title: item.label
            }, options), _react.default.createElement(_form.Radio, {
              name: field,
              value: "ASC",
              label: texts.ancestry,
              checked: order === "ASC",
              onChange: handleChange
            }), _react.default.createElement(_form.Radio, {
              name: field,
              value: "DESC",
              label: texts.descendant,
              checked: order === "DESC",
              onChange: handleChange
            }), isTimeCreated && _react.default.createElement(_icons.IconButton, {
              icon: "delete",
              onClick: handleClick
            }));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./texts
      ***********************/

      ims.set('./texts', {
        hash: 48375691,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Texts = Texts;
          function Texts(language) {
            const texts = {
              es: {
                "title": "Ordenar elementos",
                "orderBy": "Ordenar por",
                "descendant": "Descendiente",
                "ancestry": "Ascendiente",
                "addColumn": "Agregar otra columna de ordenación",
                "order": "Ordenar",
                "cancel": "Cancelar"
              },
              en: {
                "title": "Sort elements",
                "orderBy": "Sort by",
                "descendant": "Descendant",
                "ancestry": "Ancestry",
                "addColumn": "Add another sort column",
                "order": "Order",
                "cancel": "Cancel"
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
        hash: 2147007834,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _header = require("./header");
          var _items = require("./items");
          var _addItem = require("./add-item");
          var _buttons = require("./buttons");
          var _form = require("pragmate-ui/form");
          var _context = require("./context");
          function View() {
            const {
              state,
              onSubmit,
              show,
              handleModal
            } = (0, _context.useOrderingContext)();
            if (!show) return null;
            const handleSubmit = () => {
              const orders = state.filter(item => !!item.show).map(item => {
                return [item.selected, item.order];
              });
              if (onSubmit && typeof onSubmit === "function") onSubmit(orders);
              handleModal();
            };
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: 'container-ordering-modal',
              onClose: handleModal
            }, _react.default.createElement(_form.Form, {
              onSubmit: handleSubmit
            }, _react.default.createElement(_header.Header, null), _react.default.createElement(_items.default, null), _react.default.createElement(_addItem.AddItem, null), _react.default.createElement(_buttons.Buttons, null)));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Ordering",
        "name": "Ordering"
      }, {
        "im": "./interfaces/index",
        "from": "IRef",
        "name": "IRef"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Ordering') && _export("Ordering", Ordering = require ? require('./index').Ordering : value);
        (require || prop === 'IRef') && _export("IRef", IRef = require ? require('./interfaces/index').IRef : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIkFkZEl0ZW0iLCJ0ZXh0cyIsInNldFN0YXRlIiwic3RhdGUiLCJ1c2VPcmRlcmluZ0NvbnRleHQiLCJoYW5kbGVDbGljayIsIml0ZW0iLCJmaW5kIiwic2hvdyIsIml0ZW1zIiwibWFwIiwiZW50cnkiLCJrZXkiLCJpdGVtc1Nob3dlZCIsImZpbHRlciIsImlzQWxsU2hvd2VkIiwibGVuZ3RoIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJCdXR0b24iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwibGFiZWwiLCJhZGRDb2x1bW4iLCJkaXNhYmxlZCIsIkJ1dHRvbnMiLCJjbG9zZSIsInZhcmlhbnQiLCJjYW5jZWwiLCJvcmRlciIsInR5cGUiLCJPcmRlcmluZ0NvbnRleHQiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJkZWZhdWx0Q29sdW1ucyIsInNlbGVjdGVkIiwiZGVmYXVsdEZpZWxkIiwiSGVhZGVyIiwidGl0bGUiLCJpY29uU29ydCIsInZpZXdCb3giLCJpY29uIiwiX3RleHRzIiwiX2RlZmF1bHQiLCJfaWNvbnMiLCJfaWNvbiIsIl92aWV3IiwiT3JkZXJpbmciLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJyZWYiLCJzZXRTaG93IiwidXNlU3RhdGUiLCJBcnJheSIsImlzQXJyYXkiLCJlbnRyaWVzIiwiY29sdW1ucyIsInNvbWUiLCJjb25jYXQiLCJUZXh0cyIsImhhbmRsZU1vZGFsIiwidXNlSW1wZXJhdGl2ZUhhbmRsZSIsIm9wZW4iLCJ2YWx1ZSIsIlByb3ZpZGVyIiwiSWNvbkJ1dHRvbiIsIlZpZXciLCJfaXRlbSIsIkl0ZW1zIiwib3V0cHV0IiwiSXRlbSIsImZpZWxkIiwiX2Zvcm0iLCJvcHRpb25zIiwiaXNUaW1lQ3JlYXRlZCIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImhhbmRsZVNlbGVjdCIsIm9yZGVyQnkiLCJvbkNoYW5nZSIsImlkIiwibmFtZSIsIlJhZGlvIiwiYW5jZXN0cnkiLCJjaGVja2VkIiwiZGVzY2VuZGFudCIsImxhbmd1YWdlIiwiZXMiLCJlbiIsIl9tb2RhbCIsIl9oZWFkZXIiLCJfaXRlbXMiLCJfYWRkSXRlbSIsIl9idXR0b25zIiwib25TdWJtaXQiLCJoYW5kbGVTdWJtaXQiLCJvcmRlcnMiLCJNb2RhbCIsIm9uQ2xvc2UiLCJGb3JtIl0sInNvdXJjZXMiOlsiL3RzL2FkZC1pdGVtLnRzeCIsIi90cy9idXR0b25zLnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2RlZmF1bHQudHMiLCIvdHMvaGVhZGVyLnRzeCIsIi90cy9pY29uLnRzIiwiL3RzL2luZGV4LnRzeCIsIi90cy9pbnRlcmZhY2VzL2luZGV4LnRzIiwiL3RzL2l0ZW1zL2luZGV4LnRzeCIsIi90cy9pdGVtcy9pdGVtLnRzeCIsIi90cy90ZXh0cy50cyIsIi90cy92aWV3LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsV0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBRU0sU0FBVUcsT0FBT0EsQ0FBQTtZQUNuQixNQUFNO2NBQUVDLEtBQUs7Y0FBRUMsUUFBUTtjQUFFQztZQUFLLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGtCQUFrQixHQUFFO1lBQ3ZELE1BQU1DLFdBQVcsR0FBR0EsQ0FBQSxLQUFLO2NBQ3JCLE1BQU1DLElBQUksR0FBR0gsS0FBSyxDQUFDSSxJQUFJLENBQUNELElBQUksSUFBSSxDQUFDQSxJQUFJLENBQUNFLElBQUksQ0FBQztjQUMzQ0YsSUFBSSxDQUFDRSxJQUFJ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