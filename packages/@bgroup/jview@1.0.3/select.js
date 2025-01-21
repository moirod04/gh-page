System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.0.4/hooks", "@beyond-js/reactive@1.1.14/model", "uuid@9.0.1", "pragmate-ui@0.1.2/modal", "pragmate-ui@0.1.2/icons"], function (_export, _context) {
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
    }, function (_pragmateUi012Modal) {
      dependency_6 = _pragmateUi012Modal;
    }, function (_pragmateUi012Icons) {
      dependency_7 = _pragmateUi012Icons;
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
          "vspecifier": "@bgroup/jview@1.0.3/select"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/react-18-widgets/hooks', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['uuid', dependency_5], ['pragmate-ui/modal', dependency_6], ['pragmate-ui/icons', dependency_7]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bgroup/jview@1.0.3/select');
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
        hash: 3860022010,
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
              document.addEventListener("click", handleClick);
              return () => document.removeEventListener("click", handleClick);
            }, []);
            return ref;
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3547375079,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Select = Select;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _search = require("./search");
          var _contex = require("./contex");
          var _options = require("./options");
          var _manager = require("./manager");
          var _useOutsideClick = require("./hooks/use-outside-click");
          /*bundle*/
          function Select(props) {
            const [upd, setUpd] = React.useState({});
            const {
              current: manager
            } = React.useRef(new _manager.Manager({
              ...props
            }));
            const ref = (0, _useOutsideClick.useOutsideClick)(manager.closeOptions);
            React.useEffect(() => {
              manager.options = props.options;
              manager.originalOptions = props.options;
              manager.findValue(props.value);
              manager.triggerEvent();
            }, [props.options, props.value]);
            (0, _hooks.useBinder)([manager], () => setUpd({}));
            const value = {
              ...props,
              manager,
              ref,
              options: manager.options
            };
            return React.createElement(_contex.SelectContext.Provider, {
              value: value
            }, React.createElement("div", {
              className: 'container-select',
              ref: ref
            }, React.createElement(_search.Search, null), React.createElement(_options.Options, null)));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./interfaces/index
      **********************************/

      ims.set('./interfaces/index', {
        hash: 1906341848,
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
        hash: 502009099,
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
            selected;
            value = '';
            confirmDelete = false;
            itemDelete;
            props = {};
            constructor(props) {
              super();
              this.options = props.options;
              this.originalOptions = props.options;
              this.props = props;
              this.findValue(props.value);
            }
            findValue = value => {
              if (!value && value !== undefined) return;
              const item = this.options.find(option => option.value === value);
              if (!item) return;
              this.value = item.label;
              this.selected = item;
            };
            handleShow = () => {
              this.showOptions = !this.showOptions;
              this.triggerEvent();
            };
            handleChange = event => {
              this.value = event.currentTarget.value;
              this.options = this.originalOptions.filter(item => item.label.toLocaleLowerCase().includes(this.value.toLocaleLowerCase().trim()));
              this.triggerEvent();
            };
            handleFocus = () => {
              if (this.showOptions) return;
              this.showOptions = true;
              this.triggerEvent();
            };
            closeOptions = () => {
              this.showOptions = false;
              this.triggerEvent();
            };
            select = event => {
              event.stopPropagation();
              const {
                value
              } = event.currentTarget.dataset;
              const item = JSON.parse(value);
              this.selected = item;
              this.value = item.label;
              if (this.props.onChange && typeof this.props.onChange === 'function') this.props.onChange(item);
              this.showOptions = false;
              this.triggerEvent();
            };
            deleteOption = () => {
              this.options = this.originalOptions.filter(entry => entry.label !== this.itemDelete.label);
              this.originalOptions = this.options;
              const isSelected = !!this.selected && this.itemDelete.value === this.selected.value && this.itemDelete.label === this.selected.label;
              if (isSelected) this.selected = null;
              if (this.value === this.itemDelete.name) this.value = '';
              if (this.props.deleteOption && typeof this.props.deleteOption === 'function') this.props.deleteOption(this.options);
              this.confirmDelete = false;
              this.triggerEvent();
            };
            selectDelete = item => {
              this.itemDelete = item;
              this.confirmDelete = true;
              this.triggerEvent();
            };
            handleConfirmDelete = () => {
              this.itemDelete = null;
              this.confirmDelete = !this.confirmDelete;
              this.triggerEvent();
            };
          }
          exports.Manager = Manager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./options/empty
      *******************************/

      ims.set('./options/empty', {
        hash: 3067954071,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Empty = Empty;
          var _react = require("react");
          function Empty({
            styles
          }) {
            return _react.default.createElement("div", {
              style: styles,
              className: "options options__empty"
            }, _react.default.createElement("div", {
              className: "option"
            }, "No hay opciones"));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./options/index
      *******************************/

      ims.set('./options/index', {
        hash: 3393185946,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Options = Options;
          var _react = require("react");
          var _uuid = require("uuid");
          var _contex = require("../contex");
          var _empty = require("./empty");
          var _modal = require("pragmate-ui/modal");
          var _item = require("./item");
          function Options() {
            const {
              options,
              manager,
              ref
            } = (0, _contex.useSelectContext)();
            const styles = {
              maxWidth: ref?.current?.offsetWidth
            };
            if (!options || !Array.isArray(options) || !options.length) return _react.default.createElement(_empty.Empty, {
              styles: styles
            });
            const output = options.map(item => {
              return _react.default.createElement(_item.Item, {
                key: (0, _uuid.v4)(),
                item: item
              });
            });
            const cls = `${manager.showOptions ? "options show" : "options hide"}`;
            return _react.default.createElement("div", {
              className: cls,
              style: styles
            }, output, manager.confirmDelete && _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              className: "beauty-modal",
              title: "Eliminar",
              text: "Seguro que desea eliminar la configuraci\u00F3n",
              onClose: manager.handleConfirmDelete,
              onCancel: manager.handleConfirmDelete,
              onConfirm: manager.deleteOption
            }));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./options/item
      ******************************/

      ims.set('./options/item', {
        hash: 3086148806,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _contex = require("../contex");
          function Item({
            item
          }) {
            const {
              manager,
              isDeleteItem
            } = (0, _contex.useSelectContext)();
            const isSelected = !!manager.selected && manager.selected.value === item.value && manager.selected.label === item.label;
            const cls = `${isSelected ? "active option" : "option"}`;
            const deleteOption = event => {
              event.stopPropagation();
              manager.selectDelete(item);
              //    manager.deleteOption();
            };
            return _react.default.createElement("div", {
              className: cls,
              "data-value": JSON.stringify(item),
              onClick: manager.select
            }, item.label, isDeleteItem && _react.default.createElement(_icons.IconButton, {
              icon: "delete",
              "data-value": JSON.stringify(item),
              onClick: deleteOption
            }));
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
        hash: 3477818225,
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
          function Search() {
            const {
              manager,
              placeholder
            } = (0, _contex.useSelectContext)();
            return _react.default.createElement("div", {
              className: "select-search"
            }, _react.default.createElement("input", {
              type: "text",
              placeholder: placeholder ?? "Select",
              onChange: manager.handleChange,
              onFocus: manager.handleFocus,
              value: manager.value
            }), _react.default.createElement("div", {
              className: "icon-search"
            }, _react.default.createElement(_icons.IconButton, {
              onClick: manager.handleShow,
              icon: _iconDown.iconDown.icon,
              viewBox: _iconDown.iconDown.viewBox
            })));
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiU2VsZWN0Q29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlU2VsZWN0Q29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VPdXRzaWRlQ2xpY2siLCJjYWxsYmFjayIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJjdXJyZW50IiwiaXNTYW1lTm9kZSIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJjb21wb3NlZFBhdGgiLCJpc0FDaGlsZHJlbiIsImNvbnRhaW5zIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlJlYWN0IiwiX2hvb2tzIiwiX3NlYXJjaCIsIl9jb250ZXgiLCJfb3B0aW9ucyIsIl9tYW5hZ2VyIiwiX3VzZU91dHNpZGVDbGljayIsIlNlbGVjdCIsInByb3BzIiwidXBkIiwic2V0VXBkIiwidXNlU3RhdGUiLCJtYW5hZ2VyIiwiTWFuYWdlciIsImNsb3NlT3B0aW9ucyIsIm9wdGlvbnMiLCJvcmlnaW5hbE9wdGlvbnMiLCJmaW5kVmFsdWUiLCJ2YWx1ZSIsInRyaWdnZXJFdmVudCIsInVzZUJpbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsImNsYXNzTmFtZSIsIlNlYXJjaCIsIk9wdGlvbnMiLCJfbW9kZWwiLCJSZWFjdGl2ZU1vZGVsIiwic2hvd09wdGlvbnMiLCJzZWxlY3RlZCIsImNvbmZpcm1EZWxldGUiLCJpdGVtRGVsZXRlIiwiY29uc3RydWN0b3IiLCJ1bmRlZmluZWQiLCJpdGVtIiwiZmluZCIsIm9wdGlvbiIsImxhYmVsIiwiaGFuZGxlU2hvdyIsImhhbmRsZUNoYW5nZSIsImZpbHRlciIsInRvTG9jYWxlTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ0cmltIiwiaGFuZGxlRm9jdXMiLCJzZWxlY3QiLCJzdG9wUHJvcGFnYXRpb24iLCJkYXRhc2V0IiwiSlNPTiIsInBhcnNlIiwib25DaGFuZ2UiLCJkZWxldGVPcHRpb24iLCJlbnRyeSIsImlzU2VsZWN0ZWQiLCJuYW1lIiwic2VsZWN0RGVsZXRlIiwiaGFuZGxlQ29uZmlybURlbGV0ZSIsIkVtcHR5Iiwic3R5bGVzIiwiZGVmYXVsdCIsInN0eWxlIiwiX3V1aWQiLCJfZW1wdHkiLCJfbW9kYWwiLCJfaXRlbSIsIm1heFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJvdXRwdXQiLCJtYXAiLCJJdGVtIiwia2V5IiwidjQiLCJjbHMiLCJDb25maXJtTW9kYWwiLCJzaG93IiwidGl0bGUiLCJ0ZXh0Iiwib25DbG9zZSIsIm9uQ2FuY2VsIiwib25Db25maXJtIiwiX2ljb25zIiwiaXNEZWxldGVJdGVtIiwic3RyaW5naWZ5Iiwib25DbGljayIsIkljb25CdXR0b24iLCJpY29uIiwiaWNvbkRvd24iLCJ2aWV3Qm94IiwiX2ljb25Eb3duIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwib25Gb2N1cyJdLCJzb3VyY2VzIjpbIi9jb2RlL3RzL2NvbnRleC50cyIsIi9jb2RlL3RzL2hvb2tzL3VzZS1vdXRzaWRlLWNsaWNrLnRzIiwiL2NvZGUvdHMvaW5kZXgudHN4IiwiL2NvZGUvdHMvaW50ZXJmYWNlcy9pbmRleC50cyIsIi9jb2RlL3RzL21hbmFnZXIvaW5kZXgudHMiLCIvY29kZS90cy9vcHRpb25zL2VtcHR5LnRzeCIsIi9jb2RlL3RzL29wdGlvbnMvaW5kZXgudHN4IiwiL2NvZGUvdHMvb3B0aW9ucy9pdGVtLnRzeCIsIi9jb2RlL3RzL3NlYXJjaC9pY29uLWRvd24udHMiLCIvY29kZS90cy9zZWFyY2gvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FB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