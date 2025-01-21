System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@beyond-js/kernel@0.1.9/texts"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, useBinder, useForm, useTexts, useWindowSize, __beyond_pkg, hmr;
  _export({
    useBinder: void 0,
    useForm: void 0,
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
        const dependencies = new Map([["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "0.1.2"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["uuid", "9.0.1"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["@bgroup/jview", "1.0.3"], ["sgs-workflow", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@bgroup/jview@1.0.3/hooks"
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
        hash: 1777227364,
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

      /**************************
      INTERNAL MODULE: ./use-form
      **************************/

      ims.set('./use-form', {
        hash: 1520442943,
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
                value: fields[name] ?? "",
                onChange: onFieldChange,
                label: label ?? name,
                id: name ?? id,
                disabled: disabled ?? isDisabled
              }),
              getCheckbox: (name, label, disabled) => ({
                name,
                checked: fields[name],
                onChange: onFieldChange,
                disabled: disabled ?? isDisabled,
                label: label
              }),
              getRadio: (name, value, label, disabled) => ({
                name,
                value,
                checked: fields[name] === value,
                onChange: onFieldChange,
                label: label ?? value,
                disabled: disabled ?? isDisabled
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
          ;
        }
      });

      /***************************
      INTERNAL MODULE: ./use-texts
      ***************************/

      ims.set('./use-texts', {
        hash: 725040176,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTexts = useTexts;
          var _react = require("react");
          var _texts = require("@beyond-js/kernel/texts");
          /*bundle*/ /**
                      * It returns a boolean and an object. The boolean is true when the object is ready.
                      * The object is a collection of strings.
                      * @param {string} moduleId - string - the module id of the texts you want to use
                      * @returns An array of two elements. The first element is a boolean, the second element is an object.
                      */
          function useTexts(moduleId) {
            const [ready, setReady] = (0, _react.useState)(false);
            const [texts, setTexts] = (0, _react.useState)();
            (0, _react.useEffect)(() => {
              const modelTexts = new _texts.CurrentTexts(moduleId);
              const triggerEvent = () => {
                setReady(modelTexts.ready);
                const texts = modelTexts.value;
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
        "im": "./use-form",
        "from": "useForm",
        "name": "useForm"
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
        (require || prop === 'useForm') && _export("useForm", useForm = require ? require('./use-form').useForm : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJ1c2VCaW5kZXIiLCJvYmplY3RzIiwib25CaW5kZXIiLCJldmVudHMiLCJiaW5kRXZlbnRzIiwidXNlRWZmZWN0IiwiZm9yRWFjaCIsIm9iamVjdCIsImJpbmQiLCJldmVudCIsInVuYmluZCIsIl9yZWFjdCIsInVzZUZvcm0iLCJpbml0IiwiaXNEaXNhYmxlZCIsIm9uQ2hhbmdlIiwicmVkdWNlciIsInN0YXRlIiwicGF5bG9hZCIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJkYXRhIiwiZmllbGRzIiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwiZXJyb3IiLCJzZXRFcnJvciIsInVzZVN0YXRlIiwib25GaWVsZENoYW5nZSIsImNoZWNrZWQiLCJ0YXJnZXQiLCJnZXRJbnB1dCIsImxhYmVsIiwiaWQiLCJkaXNhYmxlZCIsImdldENoZWNrYm94IiwiZ2V0UmFkaW8iLCJnZXRTZWxlY3QiLCJkaXNhYmxlZEZpZWxkIiwiX3RleHRzIiwidXNlVGV4dHMiLCJtb2R1bGVJZCIsInJlYWR5Iiwic2V0UmVhZHkiLCJ0ZXh0cyIsInNldFRleHRzIiwibW9kZWxUZXh0cyIsIkN1cnJlbnRUZXh0cyIsInRyaWdnZXJFdmVudCIsImlzUmVhZHkiLCJ1c2VXaW5kb3dTaXplIiwid2luZG93U2l6ZSIsInNldFdpbmRvd1NpemUiLCJ3aWR0aCIsInVuZGVmaW5lZCIsImhlaWdodCIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sInNvdXJjZXMiOlsiL2NvZGUvdHMvYmluZGVyLnRzIiwiL2NvZGUvdHMvdXNlLWZvcm0udHMiLCIvY29kZS90cy91c2UtdGV4dHMudHMiLCIvY29kZS90cy91c2Utd2luZG93LXNpemUudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7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