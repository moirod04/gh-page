System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@beyond-js/kernel@0.1.9/texts"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, useBinder, useFields, useForm, DocsContext, useDocsContext, useTexts, useWindowSize, __beyond_pkg, hmr;
  _export({
    useBinder: void 0,
    useFields: void 0,
    useForm: void 0,
    DocsContext: void 0,
    useDocsContext: void 0,
    useTexts: void 0,
    useWindowSize: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_beyondJsKernel019Texts) {
      dependency_2 = _beyondJsKernel019Texts;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/widgets", "0.1.5"], ["pragmate-ui", "0.0.3"], ["socket.io", "4.5.4"], ["socket.io-client", "4.5.4"], ["@types/react", "18.0.26"], ["@types/react-dom", "18.0.10"], ["@jadmin/ui", "1.0.0"], ["sgs-workflow", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@jadmin/ui@1.0.0/hooks"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/kernel/texts', dependency_2]]);
      ims = new Map();
      /************************
      INTERNAL MODULE: ./binder
      ************************/
      ims.set('./binder', {
        hash: 547385063,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useBinder = useBinder;
          var React = require("react");
          /*bundle*/ /***
                      * Executes a useEffect hook binging the event defined in all
                      * objects passed
                      *
                      * @param {array} objects Objects to bind
                      * @param {function} onBinder function to be executed when the event is fired
                      * @param {string} event the event to be listened, by default is event change
                      */
          function useBinder(objects, onBinder, events = 'change') {
            const bindEvents = typeof events === 'string' ? [events] : events;
            React.useEffect(() => {
              objects.forEach(object => {
                if (!object?.bind) return;
                bindEvents.forEach(event => object.bind(event, onBinder));
              });
              return () => objects.forEach(object => {
                if (!object?.unbind) return;
                bindEvents.forEach(event => object.unbind(event, onBinder));
              });
            }, []);
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./use-fields/index
      **********************************/

      ims.set('./use-fields/index', {
        hash: 1445338527,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useFields = useFields;
          var _binder = require("../binder");
          var _react = require("react");
          /*bundle */
          function useFields(object) {
            const [item, setItem] = (0, _react.useState)(object);
            const [fields, setFields] = (0, _react.useState)(() => {
              const fields = object.getProperties();
              for (const field in fields) {
                if (!isNaN(parseInt(fields[field]))) fields[field] = parseInt(fields[field]);
              }
              ;
              return fields;
            });
            (0, _binder.useBinder)([item], () => setFields(item.getProperties()));
            (0, _react.useEffect)(() => {
              setItem(object);
              const fields = object.getProperties();
              for (const field in fields) {
                if (isNaN(parseInt(fields[field]))) return;
                fields[field] = parseInt(fields[field]);
              }
              ;
              setFields(fields);
            }, [object]);
            const disabled = {
              disabled: false
            };
            if (item.fetching || item.processing) disabled.disabled = true;
            const onFieldChange = event => {
              const {
                value,
                name,
                type,
                checked
              } = event.target;
              const propertyValue = type === 'checkbox' ? checked : value;
              item.set({
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
                checked: !!fields[name],
                onChange: onFieldChange,
                ...disabled
              }),
              getRadio: (name, value, label) => ({
                name,
                value,
                checked: fields[name] === value,
                onChange: onFieldChange,
                label: label ?? value,
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

      /**********************************
      INTERNAL MODULE: ./use-fields/types
      **********************************/

      ims.set('./use-fields/types', {
        hash: 3997766479,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**************************
      INTERNAL MODULE: ./use-form
      **************************/

      ims.set('./use-form', {
        hash: 1823647467,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useForm = void 0;
          var _react = require("react");
          /*bundle*/ /**
                      * It's a hook that returns an object with a bunch of functions that return objects that are used to
                      * render form elements.
                      * @param {params}  - params
                      * @returns An object with the following properties:
                      */
          const useForm = ({
            init,
            isDisabled,
            onChange
          }) => {
            const reducer = (state, payload) => {
              switch (payload.type) {
                case "reset":
                  return init;
                case "change":
                  return {
                    ...state,
                    [payload.name]: payload.value
                  };
                case "changes":
                  return {
                    ...state,
                    ...payload.data
                  };
                default:
                  return;
              }
            };
            const [fields, dispatch] = (0, _react.useReducer)(reducer, init);
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
                value: type === "checkbox" ? checked : value,
                type: "change"
              });
              onChange && onChange(event.target);
              setError({});
            };
            return {
              fields,
              onFieldChange,
              getInput: (name, label, id, disabled) => ({
                name,
                value: fields[name],
                onChange: onFieldChange,
                label: label ?? name,
                id: name ?? id,
                disabled: disabled ?? isDisabled,
                loading: disabled ?? isDisabled
              }),
              getCheckbox: (name, disabled) => ({
                name,
                checked: fields[name],
                onChange: onFieldChange,
                disabled: disabled ?? isDisabled
              }),
              getRadio: (name, value, label, disabled) => ({
                name,
                value,
                checked: fields[name] === value,
                onChange: onFieldChange,
                label: label ?? value,
                disabled: disabled ?? isDisabled
              }),
              getSelect: (name, disabledField) => ({
                name,
                value: fields[name],
                onChange: onFieldChange,
                disabled: disabledField ?? isDisabled
              }),
              error,
              setError,
              dispatch
            };
          };
          exports.useForm = useForm;
        }
      });

      /***************************
      INTERNAL MODULE: ./use-texts
      ***************************/

      ims.set('./use-texts', {
        hash: 1692275935,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useDocsContext = exports.DocsContext = void 0;
          exports.useTexts = useTexts;
          var _react = require("react");
          var _texts = require("@beyond-js/kernel/texts");
          ;
          const value = {};
          /*bundle*/
          const DocsContext = exports.DocsContext = (0, _react.createContext)(value);
          /*bundle*/
          const useDocsContext = () => (0, _react.useContext)(DocsContext);
          /**
           * It returns a boolean and an object. The boolean is true when the object is ready.
           * The object is a collection of strings.
           * @param {string} moduleId - string - the module id of the texts you want to use
           * @returns An array of two elements. The first element is a boolean, the second element is an object.
           */
          exports.useDocsContext = useDocsContext;
          /*bundle*/
          function useTexts(moduleId) {
            const [ready, setReady] = (0, _react.useState)(false);
            const [texts, setTexts] = (0, _react.useState)();
            (0, _react.useEffect)(() => {
              const modelTexts = new _texts.CurrentTexts(moduleId);
              const triggerEvent = () => {
                const texts = modelTexts.value;
                setReady(modelTexts.ready);
                setTexts(texts);
              };
              modelTexts.bind('change', triggerEvent);
              triggerEvent();
              return () => {
                modelTexts.unbind('change', triggerEvent);
              };
            }, []);
            const isReady = ready && !!texts;
            return [isReady, texts];
          }
          ;
        }
      });

      /*********************************
      INTERNAL MODULE: ./use-window-size
      *********************************/

      ims.set('./use-window-size', {
        hash: 724534883,
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
        "im": "./binder",
        "from": "useBinder",
        "name": "useBinder"
      }, {
        "im": "./use-fields/index",
        "from": "useFields",
        "name": "useFields"
      }, {
        "im": "./use-form",
        "from": "useForm",
        "name": "useForm"
      }, {
        "im": "./use-texts",
        "from": "DocsContext",
        "name": "DocsContext"
      }, {
        "im": "./use-texts",
        "from": "useDocsContext",
        "name": "useDocsContext"
      }, {
        "im": "./use-texts",
        "from": "useTexts",
        "name": "useTexts"
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
        (require || prop === 'useBinder') && _export("useBinder", useBinder = require ? require('./binder').useBinder : value);
        (require || prop === 'useFields') && _export("useFields", useFields = require ? require('./use-fields/index').useFields : value);
        (require || prop === 'useForm') && _export("useForm", useForm = require ? require('./use-form').useForm : value);
        (require || prop === 'DocsContext') && _export("DocsContext", DocsContext = require ? require('./use-texts').DocsContext : value);
        (require || prop === 'useDocsContext') && _export("useDocsContext", useDocsContext = require ? require('./use-texts').useDocsContext : value);
        (require || prop === 'useTexts') && _export("useTexts", useTexts = require ? require('./use-texts').useTexts : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJ1c2VCaW5kZXIiLCJvYmplY3RzIiwib25CaW5kZXIiLCJldmVudHMiLCJiaW5kRXZlbnRzIiwidXNlRWZmZWN0IiwiZm9yRWFjaCIsIm9iamVjdCIsImJpbmQiLCJldmVudCIsInVuYmluZCIsIl9iaW5kZXIiLCJfcmVhY3QiLCJ1c2VGaWVsZHMiLCJpdGVtIiwic2V0SXRlbSIsInVzZVN0YXRlIiwiZmllbGRzIiwic2V0RmllbGRzIiwiZ2V0UHJvcGVydGllcyIsImZpZWxkIiwiaXNOYU4iLCJwYXJzZUludCIsImRpc2FibGVkIiwiZmV0Y2hpbmciLCJwcm9jZXNzaW5nIiwib25GaWVsZENoYW5nZSIsInZhbHVlIiwibmFtZSIsInR5cGUiLCJjaGVja2VkIiwidGFyZ2V0IiwicHJvcGVydHlWYWx1ZSIsInNldCIsImdldElucHV0IiwibGFiZWwiLCJpZCIsIm9uQ2hhbmdlIiwiZ2V0Q2hlY2tib3giLCJnZXRSYWRpbyIsImdldFNlbGVjdCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInVzZUZvcm0iLCJpbml0IiwiaXNEaXNhYmxlZCIsInJlZHVjZXIiLCJzdGF0ZSIsInBheWxvYWQiLCJkYXRhIiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwiZXJyb3IiLCJzZXRFcnJvciIsImxvYWRpbmciLCJkaXNhYmxlZEZpZWxkIiwiX3RleHRzIiwiRG9jc0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlRG9jc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlVGV4dHMiLCJtb2R1bGVJZCIsInJlYWR5Iiwic2V0UmVhZHkiLCJ0ZXh0cyIsInNldFRleHRzIiwibW9kZWxUZXh0cyIsIkN1cnJlbnRUZXh0cyIsInRyaWdnZXJFdmVudCIsImlzUmVhZHkiLCJ1c2VXaW5kb3dTaXplIiwid2luZG93U2l6ZSIsInNldFdpbmRvd1NpemUiLCJ3aWR0aCIsInVuZGVmaW5lZCIsImhlaWdodCIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sInNvdXJjZXMiOlsiL2NvZGUvdHMvYmluZGVyLnRzIiwiL2NvZGUvdHMvdXNlLWZpZWxkcy9pbmRleC50cyIsIi90eXBlcy50cyIsIi9jb2RlL3RzL3VzZS1mb3JtLnRzIiwiL2NvZGUvdHMvdXNlLXRleHRzLnRzIiwiL2NvZGUvdHMvdXNlLXdpbmRvdy1zaXplLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFTUSxXQVJSOzs7Ozs7OztVQVFrQixTQUNSQyxTQUFTQSxDQUFDQyxPQUFjLEVBQUVDLFFBQW9CLEVBQUVDLE1BQUEsR0FBNEIsUUFBUTtZQUMzRixNQUFNQyxVQUFVLEdBQWMsT0FBT0QsTUFBTSxLQUFLLFFBQVEsR0FBRyxDQUFDQSxNQUFNLENBQUMsR0FBR0EsTUFBTTtZQUMzRUwsS0FBSyxDQUFDTyxTQUFTLENBQUMsTUFBSztjQUNqQkosT0FBTyxDQUFDSyxPQUFPLENBQUNDLE1BQU0sSUFBRztnQkFDckIsSUFBRyxDQUFDQSxNQUFNLEVBQUVDLElBQUksRUFBRTtnQkFDbEJKLFVBQVUsQ0FBQ0UsT0FBTyxDQUFDRyxLQUFLLElBQUlGLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLEVBQUVQLFFBQVEsQ0FBQyxDQUFDO2NBQzdELENBQUMsQ0FBQztjQUVGLE9BQU8sTUFBTUQsT0FBTyxDQUFDSyxPQUFPLENBQUNDLE1BQU0sSUFBRztnQkFDbEMsSUFBRyxDQUFDQSxNQUFNLEVBQUVHLE1BQU0sRUFBRTtnQkFDcEJOLFVBQVUsQ0FBQ0UsT0FBTyxDQUFDRyxLQUFLLElBQUlGLE1BQU0sQ0FBQ0csTUFBTSxDQUFDRCxLQUFLLEVBQUVQ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