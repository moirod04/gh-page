System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.4/hooks", "react@18.2.0", "@beyond-js/kernel@0.1.9/texts"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, useFields, useForm, DocsContext, useDocsContext, useTexts, useWindowSize, __beyond_pkg, hmr;
  _export({
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
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_1 = _beyondJsReact18Widgets104Hooks;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_beyondJsKernel019Texts) {
      dependency_3 = _beyondJsKernel019Texts;
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
          "vspecifier": "sgs-workflow@1.0.0/hooks"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/react-18-widgets/hooks', dependency_1], ['react', dependency_2], ['@beyond-js/kernel/texts', dependency_3]]);
      ims = new Map();
      /**********************************
      INTERNAL MODULE: ./use-fields/index
      **********************************/
      ims.set('./use-fields/index', {
        hash: 2131132474,
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
            const [item, setItem] = (0, _react.useState)(object);
            const [fields, setFields] = (0, _react.useState)(item.getProperties());
            (0, _hooks.useBinder)([item], () => setFields(item.getProperties()));
            (0, _react.useEffect)(() => {
              setItem(object);
              setFields(object.getProperties());
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
        hash: 2130437480,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useDocsContext = exports.DocsContext = void 0;
          exports.useTexts = useTexts;
          var _react = require("react");
          var _texts = require("@beyond-js/kernel/texts");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaG9va3MiLCJyZXF1aXJlIiwiX3JlYWN0IiwidXNlRmllbGRzIiwib2JqZWN0IiwiaXRlbSIsInNldEl0ZW0iLCJ1c2VTdGF0ZSIsImZpZWxkcyIsInNldEZpZWxkcyIsImdldFByb3BlcnRpZXMiLCJ1c2VCaW5kZXIiLCJ1c2VFZmZlY3QiLCJkaXNhYmxlZCIsImZldGNoaW5nIiwicHJvY2Vzc2luZyIsIm9uRmllbGRDaGFuZ2UiLCJldmVudCIsInZhbHVlIiwibmFtZSIsInR5cGUiLCJjaGVja2VkIiwidGFyZ2V0IiwicHJvcGVydHlWYWx1ZSIsInNldCIsImdldElucHV0IiwibGFiZWwiLCJpZCIsIm9uQ2hhbmdlIiwiZ2V0Q2hlY2tib3giLCJnZXRSYWRpbyIsImdldFNlbGVjdCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInVzZUZvcm0iLCJpbml0IiwiaXNEaXNhYmxlZCIsInJlZHVjZXIiLCJzdGF0ZSIsInBheWxvYWQiLCJkYXRhIiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwiZXJyb3IiLCJzZXRFcnJvciIsImxvYWRpbmciLCJkaXNhYmxlZEZpZWxkIiwiX3RleHRzIiwiRG9jc0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlRG9jc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlVGV4dHMiLCJtb2R1bGVJZCIsInJlYWR5Iiwic2V0UmVhZHkiLCJ0ZXh0cyIsInNldFRleHRzIiwibW9kZWxUZXh0cyIsIkN1cnJlbnRUZXh0cyIsInRyaWdnZXJFdmVudCIsImJpbmQiLCJ1bmJpbmQiLCJpc1JlYWR5IiwidXNlV2luZG93U2l6ZSIsIndpbmRvd1NpemUiLCJzZXRXaW5kb3dTaXplIiwid2lkdGgiLCJ1bmRlZmluZWQiLCJoZWlnaHQiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VzIjpbIi9jb2RlL3RzL3VzZS1maWVsZHMvaW5kZXgudHMiLCIvdHlwZXMudHMiLCIvY29kZS90cy91c2UtZm9ybS50cyIsIi9jb2RlL3RzL3VzZS10ZXh0cy50cyIsIi9jb2RlL3RzL3VzZS13aW5kb3ctc2l6ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFFTztVQUFXLFNBQVVFLFNBQVNBLENBQUNDLE1BQU07WUFFM0MsTUFBTSxDQUFDQyxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHLElBQUFKLE1BQUEsQ0FBQUssUUFBUSxFQUFDSCxNQUFNLENBQUM7WUFDeEMsTUFBTSxDQUFDSSxNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHLElBQUFQLE1BQUEsQ0FBQUssUUFBUSxFQUF5QkYsSUFBSSxDQUFDSyxhQUFhLEVBQUUsQ0FBQztZQUVsRixJQUFBVixNQUFBLENBQUFXLFNBQVMsRUFBQyxDQUFDTixJQUFJLENBQUMsRUFBRSxNQUFNSSxTQUFTLENBQUNKLElBQUksQ0FBQ0ssYUFBYSxFQUFFLENBQUMsQ0FBQztZQUN4RCxJQUFBUixNQUFBLENBQUFVLFNBQVMsRUFBQyxNQUFLO2NBRWROLE9BQU8sQ0FBQ0YsTUFBTSxDQUFDO2NBQ2ZLLFNBQVMsQ0FBQ0wsTUFBTSxDQUFDTSxhQUFhLEVBQUUsQ0FBQztZQUNsQyxDQUFDLEVBQUUsQ0FBQ04sTUFBTSxDQUFDLENBQUM7WUFDWixNQUFNUyxRQUFRLEdBQUc7Y0FBRUEsUUFBUSxFQUFFO1lBQUssQ0FBRTtZQUNwQyxJQUFJUixJQUFJLENBQUNTLFFBQVEsSUFBSVQsSUFBSSxDQUFDVSxVQUFVLEVBQUVGLFFBQVEsQ0FBQ0EsUUFBUSxHQUFHLElBQUk7WUFDOUQsTUFBTUcsYUFBYSxHQUFJQyxLQUF1QixJQUFVO2NBQ3ZELE1BQU07Z0JBQUVDLEtBQUs7Z0JBQUVDLElBQUk7Z0JBQUVDLElBQUk7Z0JBQUVDO2NBQU8sQ0FBRSxHQUFHSixLQUFLLENBQUNLLE1BQU07Y0FFbkQsTUFBTUMsYUFBYSxHQUFHSCxJQUFJLEtBQUssVUFBVSxHQUFHQyxPQUFPLEdBQUdILEtBQUs7Y0FDM0RiLElBQUksQ0FBQ21CLEdBQUcsQ0FBQztnQkFBRSxDQUFDTCxJQUFJLEdBQUdJO2NBQWEsQ0FBRSxDQUFDO1lBQ3BDLENBQUM7WUFFRCxPQUFPO2NBQ05FLFFBQVEsRUFBRUEsQ0FBQ04sSUFBYSxFQUFFTyxLQUFjLEVBQUVDLEVBQVcsTUFBZ0I7Z0JBQ3BFUixJQUFJO2dCQUNKRCxLQUFLLEVBQUVWLE1BQU0sQ0FBQ1csSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDekJTLFFBQVEsRUFBRVosYUFBYTtnQkFDdkJVLEtBQUssRUFBRUEsS0FBSyxJQUFJUCxJQUFJO2dCQUNwQlEsRUFBRSxFQUFFUixJQUFJLElBQUlRLEVBQUU7Z0JBQ2QsR0FBR2Q7ZUFDSCxDQUFDO2NBQ0ZnQixXQUFXLEVBQUdWLElBQVksS0FBbUI7Z0JBQzVDQSxJQUFJO2dCQUNKRSxPQUFPLEVBQUUsQ0FBQyxDQUFDYixNQUFNLENBQUNXLElBQUksQ0FBQztnQkFDdkJTLFFBQVEsRUFBRVosYUFBYTtnQkFDdkIsR0FBR0g7ZUFDSCxDQUFDO2NBQ0ZpQixRQUFRLEVBQUVBLENBQUNYLElBQVksRUFBRUQsS0FBYSxFQUFFUSxLQUFhLE1BQWdCO2dCQUNwRVAsSUFBSTtnQkFDSkQsS0FBSztnQkFDTEcsT0FBTyxFQUFFYixNQUFNLENBQUNXLElBQUksQ0FBQyxLQUFLRCxLQUFLO2dCQUMvQlUsUUFBUSxFQUFFWixhQUFhO2dCQUN2QlUsS0FBSyxFQUFFQSxLQUFLLElBQUlSLEtBQUs7Z0JBQ3JCLEdBQUdMO2VBQ0gsQ0FBQztjQUNGa0IsU0FBUyxFQUFHWixJQUFhLElBQWU7Z0JBQ3ZDLE9BQU87a0JBQ05BLElBQUk7a0JBQ0pELEtBQUssRUFBRVYsTUFBTSxDQUFDVyxJQUFJLENBQUM7a0JBQ25CUyxRQUFRLEVBQUVaLGFBQWE7a0JBQ3ZCLEdBQUdIO2lCQUNIO2NBQ0YsQ0FBQztjQUNETDthQUNBO1VBQ0Y7Ozs7Ozs7Ozs7O1VDeERBOztVQUVBd0IsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQWhCLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBaEIsTUFBQSxHQUFBRCxPQUFBO1VBaUVPLFdBTlA7Ozs7OztVQU9FLE1BQU1rQyxPQUFPLEdBQUdBLENBQUk7WUFBRUMsSUFBSTtZQUFFQyxVQUFVO1lBQUVUO1VBQVEsQ0FBYSxLQUFnQjtZQUUzRSxNQUFNVSxPQUFPLEdBQUdBLENBQUNDLEtBQVEsRUFBRUMsT0FBWSxLQUFTO2NBQzlDLFFBQVFBLE9BQU8sQ0FBQ3BCLElBQUk7Z0JBQ2xCLEtBQUssT0FBTztrQkFDVixPQUFPZ0IsSUFBSTtnQkFDYixLQUFLLFFBQVE7a0JBQ1gsT0FBTztvQkFDTCxHQUFHRyxLQUFLO29CQUNSLENBQUNDLE9BQU8sQ0FBQ3JCLElBQUksR0FBR3FCLE9BQU8sQ0FBQ3RCO21CQUN6QjtnQkFDSCxLQUFLLFNBQVM7a0JBQ1osT0FBTztvQkFDTCxHQUFHcUIsS0FBSztvQkFDUixHQUFHQyxPQUFPLENBQUNDO21CQUNaO2dCQUNIO2tCQUNFOztZQUVOLENBQUM7WUFDRCxNQUFNLENBQUNqQyxNQUFNLEVBQUVrQyxRQUFRLENBQUMsR0FBRyxJQUFBeEMsTUFBQSxDQUFBeUMsVUFBVSxFQUFDTCxPQUFPLEVBQUVGLElBQUksQ0FBQztZQUNwRCxNQUFNLENBQUNRLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUcsSUFBQTNDLE1BQUEsQ0FBQUssUUFBUSxFQUFNLEVBQUUsQ0FBQztZQUUzQyxNQUFNUyxhQUFhLEdBQUlDLEtBQXVCLElBQVU7Y0FDdEQsTUFBTTtnQkFBRUMsS0FBSztnQkFBRUMsSUFBSTtnQkFBRUMsSUFBSTtnQkFBRUM7Y0FBTyxDQUFFLEdBQ2xDSixLQUFLLENBQUNLLE1BQU07Y0FDZG9CLFFBQVEsQ0FBQztnQkFDUHZCLElBQUk7Z0JBQ0pELEtBQUssRUFBRUUsSUFBSSxLQUFLLFVBQVUsR0FBR0MsT0FBTyxHQUFHSCxLQUFLO2dCQUM1Q0UsSUFBSSxFQUFFO2VBQ1AsQ0FBQztjQUNGUSxRQUFRLElBQUlBLFFBQVEsQ0FBQ1gsS0FBSyxDQUFDSyxNQUFNLENBQUM7Y0FDbEN1QixRQUFRLENBQUMsRUFBRSxDQUFDO1lBQ2QsQ0FBQztZQUVELE9BQU87Y0FDTHJDLE1BQU07Y0FDTlEsYUFBYTtjQUNiUyxRQUFRLEVBQUVBLENBQ1JOLElBQWEsRUFDYk8sS0FBYyxFQUNkQyxFQUFXLEVBQ1hkLFFBQWtCLE1BQ0o7Z0JBQ2RNLElBQUk7Z0JBQ0pELEtBQUssRUFBRVYsTUFBTSxDQUFDVyxJQUFJLENBQUM7Z0JBQ25CUyxRQUFRLEVBQUVaLGFBQWE7Z0JBQ3ZCVSxLQUFLLEVBQUVBLEtBQUssSUFBSVAsSUFBSTtnQkFDcEJRLEVBQUUsRUFBRVIsSUFBSSxJQUFJUSxFQUFFO2dCQUNkZCxRQUFRLEVBQUVBLFFBQVEsSUFBSXdCLFVBQVU7Z0JBQ2hDUyxPQUFPLEVBQUVqQyxRQUFRLElBQUl3QjtlQUN0QixDQUFDO2NBQ0ZSLFdBQVcsRUFBRUEsQ0FBQ1YsSUFBWSxFQUFFTixRQUFrQixNQUFtQjtnQkFDL0RNLElBQUk7Z0JBQ0pFLE9BQU8sRUFBRWIsTUFBTSxDQUFDVyxJQUFJLENBQUM7Z0JBQ3JCUyxRQUFRLEVBQUVaLGFBQWE7Z0JBQ3ZCSCxRQUFRLEVBQUVBLFFBQVEsSUFBSXdCO2VBQ3ZCLENBQUM7Y0FDRlAsUUFBUSxFQUFFQSxDQUNSWCxJQUFZLEVBQ1pELEtBQWEsRUFDYlEsS0FBYSxFQUNiYixRQUFrQixNQUNKO2dCQUNkTSxJQUFJO2dCQUNKRCxLQUFLO2dCQUNMRyxPQUFPLEVBQUViLE1BQU0sQ0FBQ1csSUFBSSxDQUFDLEtBQUtELEtBQUs7Z0JBQy9CVSxRQUFRLEVBQUVaLGFBQWE7Z0JBQ3ZCVSxLQUFLLEVBQUVBLEtBQUssSUFBSVIsS0FBSztnQkFDckJMLFFBQVEsRUFBRUEsUUFBUSxJQUFJd0I7ZUFDdkIsQ0FBQztjQUNGTixTQUFTLEVBQUVBLENBQUNaLElBQWEsRUFBRTRCLGFBQXVCLE1BQWlCO2dCQUNqRTVCLElBQUk7Z0JBQ0pELEtBQUssRUFBRVYsTUFBTSxDQUFDVyxJQUFJLENBQUM7Z0JBQ25CUyxRQUFRLEVBQUVaLGFBQWE7Z0JBQ3ZCSCxRQUFRLEVBQUVrQyxhQUFhLElBQUlWO2VBQzVCLENBQUM7Y0FDRk8sS0FBSztjQUNMQyxRQUFRO2NBQ1JIO2FBQ0Q7VUFDSCxDQUFDO1VBQUNSLE9BQUEsQ0FBQUMsT0FBQSxHQUFBQSxPQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuSkosSUFBQWpDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUErQyxNQUFBLEdBQUEvQyxPQUFBO1VBT0EsTUFBTWlCLEtBQUssR0FBZSxFQUFFO1VBQ3JCO1VBQVcsTUFBTStCLFdBQVcsR0FBQWYsT0FBQSxDQUFBZSxXQUFBLEdBQXdCLElBQUEvQyxNQUFBLENBQUFnRCxhQUFhLEVBQWFoQyxLQUFLLENBQUM7VUFDcEY7VUFBVyxNQUFNaUMsY0FBYyxHQUFxQkEsQ0FBQSxLQUFrQixJQUFBakQsTUFBQSxDQUFBa0QsVUFBVSxFQUFhSCxXQUFXLENBQUM7VUFFaEg7Ozs7OztVQUFBZixPQUFBLENBQUFpQixjQUFBLEdBQUFBLGNBQUE7VUFNTztVQUFVLFNBQ1JFLFFBQVFBLENBQUlDLFFBQWdCO1lBQ3BDLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBRyxJQUFBdEQsTUFBQSxDQUFBSyxRQUFRLEVBQVUsS0FBSyxDQUFDO1lBQ2xELE1BQU0sQ0FBQ2tELEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUcsSUFBQXhELE1BQUEsQ0FBQUssUUFBUSxHQUFLO1lBRXZDLElBQUFMLE1BQUEsQ0FBQVUsU0FBUyxFQUFDLE1BQW1CO2NBQzVCLE1BQU0rQyxVQUFVLEdBQTBCLElBQUlYLE1BQUEsQ0FBQVksWUFBWSxDQUFDTixRQUFRLENBQUM7Y0FDcEUsTUFBTU8sWUFBWSxHQUFlQSxDQUFBLEtBQVc7Z0JBQzNDLE1BQU1KLEtBQUssR0FBU0UsVUFBVSxDQUFDekMsS0FBSztnQkFDcENzQyxRQUFRLENBQUNHLFVBQVUsQ0FBQ0osS0FBSyxDQUFDO2dCQUMxQkcsUUFBUSxDQUFDRCxLQUFLLENBQUM7Y0FDaEIsQ0FBQztjQUNERSxVQUFVLENBQUNHLElBQUksQ0FBQyxRQUFRLEVBQUVELFlBQVksQ0FBQztjQUN2Q0EsWUFBWSxFQUFFO2NBQ2QsT0FBTyxNQUFXO2dCQUNqQkYsVUFBVSxDQUFDSSxNQUFNLENBQUMsUUFBUSxFQUFFRixZQUFZLENBQUM7Y0FDMUMsQ0FBQztZQUNGLENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTixNQUFNRyxPQUFPLEdBQVlULEtBQUssSUFBSSxDQUFDLENBQUNFLEtBQUs7WUFFekMsT0FBTyxDQUFDTyxPQUFPLEVBQUVQLEtBQUssQ0FBQztVQUN4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4Q0EsSUFBQXZELE1BQUEsR0FBQUQsT0FBQTtVQVdPLFdBSlA7Ozs7VUFJaUIsU0FDTmdFLGFBQWFBLENBQUE7WUFFdEIsTUFBTSxDQUFDQyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHLElBQUFqRSxNQUFBLENBQUFLLFFBQVEsRUFBYTtjQUN2RDZELEtBQUssRUFBRUMsU0FBUztjQUNoQkMsTUFBTSxFQUFFRDthQUNULENBQUM7WUFDRixJQUFBbkUsTUFBQSxDQUFBVSxTQUFTLEVBQUMsTUFBaUI7Y0FFekIsTUFBTTJELFlBQVksR0FBZUEsQ0FBQSxLQUFXO2dCQUUxQ0osYUFBYSxDQUFDO2tCQUNaQyxLQUFLLEVBQUVJLE1BQU0sQ0FBQ0MsVUFBVTtrQkFDeEJILE1BQU0sRUFBRUUsTUFBTSxDQUFDRTtpQkFDaEIsQ0FBQztjQUNKLENBQUM7Y0FFREYsTUFBTSxDQUFDRyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVKLFlBQVksQ0FBQztjQUUvQ0EsWUFBWSxFQUFFO2NBRWQsT0FBTyxNQUFZQyxNQUFNLENBQUNJLG1CQUFtQixDQUFDLFFBQVEsRUFBRUwsWUFBWSxDQUFDO1lBQ3ZFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDTixPQUFPTCxVQUFVO1VBQ25CO1VBQUMiLCJpZ25vcmVMaXN0IjpbXX0=