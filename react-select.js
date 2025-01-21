System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "react-select@5.8.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, ReactSelect, __beyond_pkg, hmr;
  _export("ReactSelect", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_reactSelect2) {
      dependency_3 = _reactSelect2;
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
          "vspecifier": "sgs-workflow@1.0.0/react-select"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['react-select', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('sgs-workflow@1.0.0/react-select');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2621867969,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ReactSelect = ReactSelect;
          var _react = require("react");
          var _reactSelect = require("react-select");
          var _observer = require("./observer");
          /*bundle*/
          function ReactSelect(props) {
            let properties = {
              ...props
            };
            delete properties.onChange;
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              const host = ref.current.getRootNode()?.host;
              if (!host) {
                console.warn('is not inside a web component');
              }
              const headStyles = document.head.querySelectorAll('style[data-emotion]');
              const insert = nodes => {
                nodes.forEach(node => {
                  if (node instanceof HTMLStyleElement) {
                    // Handle the new style element
                    const clonedStyle = node.cloneNode(true);
                    host.shadowRoot.appendChild(clonedStyle);
                  }
                });
              };
              const styleObserver = new _observer.StyleObserver({
                callback: insert
              });
              const targetNode = document.head;
              styleObserver.startObserving(targetNode);
              insert(headStyles);
              return () => styleObserver.stopObserving();
            }, []);
            // let value = props.options.find(item => item.value === props.value);
            const onChange = ({
              label,
              value
            }) => {
              if (!props.onChange) return;
              props.onChange({
                target: {
                  value,
                  name: props.name
                },
                currentTarget: {
                  value,
                  name: props.name
                }
              });
            };
            return _react.default.createElement("div", {
              className: "pui-select",
              ref: ref
            }, props.label && _react.default.createElement("label", null, props.label), _react.default.createElement(_reactSelect.default, {
              classNamePrefix: "pui-react-select",
              onChange: onChange,
              ...properties,
              value: props.value
            }));
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./observer
      **************************/

      ims.set('./observer', {
        hash: 3933443758,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StyleObserver = void 0;
          class StyleObserver {
            observer;
            constructor({
              callback
            }) {
              this.observer = new MutationObserver(mutations => {
                mutations.forEach(mutation => {
                  if (mutation.type !== 'childList') return;
                  callback(mutation.addedNodes);
                });
              });
            }
            startObserving(targetNode) {
              if (!targetNode) return;
              const config = {
                childList: true
              };
              this.observer.observe(targetNode, config);
            }
            stopObserving() {
              this.observer.disconnect();
            }
          }
          exports.StyleObserver = StyleObserver;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "ReactSelect",
        "name": "ReactSelect"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ReactSelect') && _export("ReactSelect", ReactSelect = require ? require('./index').ReactSelect : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3JlYWN0U2VsZWN0IiwiX29ic2VydmVyIiwiUmVhY3RTZWxlY3QiLCJwcm9wcyIsInByb3BlcnRpZXMiLCJvbkNoYW5nZSIsInJlZiIsImRlZmF1bHQiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJob3N0IiwiY3VycmVudCIsImdldFJvb3ROb2RlIiwiY29uc29sZSIsIndhcm4iLCJoZWFkU3R5bGVzIiwiZG9jdW1lbnQiLCJoZWFkIiwicXVlcnlTZWxlY3RvckFsbCIsImluc2VydCIsIm5vZGVzIiwiZm9yRWFjaCIsIm5vZGUiLCJIVE1MU3R5bGVFbGVtZW50IiwiY2xvbmVkU3R5bGUiLCJjbG9uZU5vZGUiLCJzaGFkb3dSb290IiwiYXBwZW5kQ2hpbGQiLCJzdHlsZU9ic2VydmVyIiwiU3R5bGVPYnNlcnZlciIsImNhbGxiYWNrIiwidGFyZ2V0Tm9kZSIsInN0YXJ0T2JzZXJ2aW5nIiwic3RvcE9ic2VydmluZyIsImxhYmVsIiwidmFsdWUiLCJ0YXJnZXQiLCJuYW1lIiwiY3VycmVudFRhcmdldCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjbGFzc05hbWVQcmVmaXgiLCJvYnNlcnZlciIsImNvbnN0cnVjdG9yIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsIm11dGF0aW9uIiwidHlwZSIsImFkZGVkTm9kZXMiLCJjb25maWciLCJjaGlsZExpc3QiLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIvdHMvaW5kZXgudHN4IiwiL3RzL29ic2VydmVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFlBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFNBQUEsR0FBQUYsT0FBQTtVQUVPO1VB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