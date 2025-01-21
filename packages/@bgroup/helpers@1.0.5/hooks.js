System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@beyond-js/react-18-widgets@1.0.4/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, useFields, useForm, useWindowSize, __beyond_pkg, hmr;
  _export({
    useFields: void 0,
    useForm: void 0,
    useWindowSize: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_2 = _beyondJsReact18Widgets104Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@babel/preset-typescript", "7.23.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.3"], ["dotenv", "16.3.1"], ["express", "4.18.2"], ["jsonwebtoken", "9.0.2"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["socket.io-client", "4.7.2"], ["@babel/core", "7.23.3"], ["@babel/preset-env", "7.23.3"], ["@beyond-js/local", "0.1.3"], ["@types/jest", "29.5.8"], ["@types/react", "18.2.37"], ["@types/react-dom", "18.2.15"], ["babel-jest", "29.7.0"], ["jest", "29.7.0"], ["@bgroup/helpers", "1.0.5"], ["sgs-workflow", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@bgroup/helpers@1.0.5/hooks"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/react-18-widgets/hooks', dependency_2]]);
      ims = new Map();
      /**********************************
      INTERNAL MODULE: ./interfaces/index
      **********************************/
      ims.set('./interfaces/index', {
        hash: 1298067493,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          ;
          ;
          ;
          ;
          ;
          ;
          ;
        }
      });

      /**********************************
      INTERNAL MODULE: ./use-fields/index
      **********************************/

      ims.set('./use-fields/index', {
        hash: 4258767350,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useFields = useFields;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _react = require("react");
          /*bundle */
          function useFields(object) {
            const [fields, setFields] = (0, _react.useState)(object.getProperties());
            (0, _hooks.useBinder)([object], () => setFields(object.getProperties()));
            const disabled = {
              disabled: false
            };
            if (object.fetching || object.processing) disabled.disabled = true;
            const onFieldChange = event => {
              const {
                value,
                name,
                type,
                checked
              } = event.target;
              const propertyValue = type === 'checkbox' ? checked : value;
              object.set({
                [name]: propertyValue
              });
            };
            return {
              getInput: (name, label, id) => ({
                name,
                value: fields[name] ?? '',
                onChange: onFieldChange,
                label: label ?? name,
                id: name ?? id,
                ...disabled
              }),
              getCheckbox: name => ({
                name,
                checked: fields[name],
                onChange: onFieldChange,
                ...disabled
              }),
              getRadio: (name, value, label, id) => ({
                name,
                value,
                checked: fields[name] === value,
                onChange: onFieldChange,
                label: label ?? value,
                id: id ?? label,
                ...disabled
              }),
              getSelect: name => {
                return {
                  name,
                  value: fields[name],
                  onChange: onFieldChange,
                  ...disabled
                };
              },
              fields
            };
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./use-form
      **************************/

      ims.set('./use-form', {
        hash: 2214662718,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useForm = useForm;
          var _react = require("react");
          /*bundle*/ /**
                      * It's a hook that returns an object with a bunch of functions that you can use to get the values of
                      * your form fields, and to set the values of your form fields
                      * @param  - params<T>
                      * @returns An object with the following properties:
                      * fields: T
                      * onFieldChange: (event: ChangeEvent<any>) => void
                      * getInput: (name?: string, label?: string, id?: string, disabled?: boolean) => getInput
                      * getCheckbox: (name: string, disabled?: boolean) => getCheckbox
                      * getRadio: (name: string, value: string
                      */
          function useForm({
            init,
            isDisabled,
            onChange
          }) {
            const reducer = (state, payload) => {
              switch (payload.type) {
                case 'reset':
                  return init;
                case 'change':
                  return {
                    ...state,
                    [payload.name]: payload.value
                  };
                case 'changes':
                  return {
                    ...state,
                    ...payload.data
                  };
                default:
                  return;
              }
            };
            const getValue = value => value || value === null ? value : '';
            const properties = Object.keys(init).filter(property => property !== 'payload');
            const initialValues = {};
            properties.forEach(property => initialValues[property] = getValue(init[property]));
            const [fields, dispatch] = (0, _react.useReducer)(reducer, initialValues);
            const [error, setError] = (0, _react.useState)({});
            const onFieldChange = event => {
              const {
                value,
                name,
                type,
                checked
              } = event.target;
              dispatch({
                name,
                value: type === 'checkbox' ? checked : value,
                type: 'change'
              });
              onChange && onChange(event.target);
              setError({});
            };
            return {
              fields,
              onFieldChange,
              getInput: (name, label, id, disabled) => ({
                name,
                value: fields[name] ?? '',
                onChange: onFieldChange,
                label: label ?? name,
                id: name ?? id,
                disabled: disabled ?? isDisabled
              }),
              getCheckbox: (name, disabled) => ({
                name,
                checked: fields[name],
                onChange: onFieldChange,
                disabled: disabled ?? isDisabled
              }),
              getRadio: (name, value, label, disabled, id) => ({
                name,
                value,
                checked: fields[name] === value,
                onChange: onFieldChange,
                label: label ?? value,
                disabled: disabled ?? isDisabled,
                id: id ?? label
              }),
              getSelect: (name, disabledField) => {
                return {
                  name,
                  value: fields[name],
                  onChange: onFieldChange,
                  disabled: disabledField ?? isDisabled
                };
              },
              error,
              setError,
              dispatch
            };
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./use-window-size
      *********************************/

      ims.set('./use-window-size', {
        hash: 3971277139,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useWindowSize = useWindowSize;
          var _react = require("react");
          /*bundle*/ /**
                      * It returns an object with the current window width and height
                      * @returns A function that returns a windowSize object.
                      */
          function useWindowSize() {
            const [windowSize, setWindowSize] = (0, _react.useState)({
              width: undefined,
              height: undefined
            });
            (0, _react.useEffect)(() => {
              const handleResize = () => {
                setWindowSize({
                  width: window.innerWidth,
                  height: window.innerHeight
                });
              };
              window.addEventListener("resize", handleResize);
              handleResize();
              return () => window.removeEventListener("resize", handleResize);
            }, []);
            return windowSize;
          }
          ;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./use-fields/index",
        "from": "useFields",
        "name": "useFields"
      }, {
        "im": "./use-form",
        "from": "useForm",
        "name": "useForm"
      }, {
        "im": "./use-window-size",
        "from": "useWindowSize",
        "name": "useWindowSize"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'useFields') && _export("useFields", useFields = require ? require('./use-fields/index').useFields : value);
        (require || prop === 'useForm') && _export("useForm", useForm = require ? require('./use-form').useForm : value);
        (require || prop === 'useWindowSize') && _export("useWindowSize", useWindowSize = require ? require('./use-window-size').useWindowSize : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaG9va3MiLCJyZXF1aXJlIiwiX3JlYWN0IiwidXNlRmllbGRzIiwib2JqZWN0IiwiZmllbGRzIiwic2V0RmllbGRzIiwidXNlU3RhdGUiLCJnZXRQcm9wZXJ0aWVzIiwidXNlQmluZGVyIiwiZGlzYWJsZWQiLCJmZXRjaGluZyIsInByb2Nlc3NpbmciLCJvbkZpZWxkQ2hhbmdlIiwiZXZlbnQiLCJ2YWx1ZSIsIm5hbWUiLCJ0eXBlIiwiY2hlY2tlZCIsInRhcmdldCIsInByb3BlcnR5VmFsdWUiLCJzZXQiLCJnZXRJbnB1dCIsImxhYmVsIiwiaWQiLCJvbkNoYW5nZSIsImdldENoZWNrYm94IiwiZ2V0UmFkaW8iLCJnZXRTZWxlY3QiLCJ1c2VGb3JtIiwiaW5pdCIsImlzRGlzYWJsZWQiLCJyZWR1Y2VyIiwic3RhdGUiLCJwYXlsb2FkIiwiZGF0YSIsImdldFZhbHVlIiwicHJvcGVydGllcyIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJwcm9wZXJ0eSIsImluaXRpYWxWYWx1ZXMiLCJmb3JFYWNoIiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwiZXJyb3IiLCJzZXRFcnJvciIsImRpc2FibGVkRmllbGQiLCJ1c2VXaW5kb3dTaXplIiwid2luZG93U2l6ZSIsInNldFdpbmRvd1NpemUiLCJ3aWR0aCIsInVuZGVmaW5lZCIsImhlaWdodCIsInVzZUVmZmVjdCIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sInNvdXJjZXMiOlsiL2NvZGUvdHMvaW50ZXJmYWNlcy9pbmRleC50cyIsIi9jb2RlL3RzL3VzZS1maWVsZHMvaW5kZXgudHMiLCIvY29kZS90cy91c2UtZm9ybS50cyIsIi9jb2RlL3RzL3VzZS13aW5kb3ctc2l6ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7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