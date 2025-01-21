System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.1.2/components", "react-dom@18.2.0", "framer-motion@10.18.0", "pragmate-ui@0.1.2/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, AlertModal, ConfirmModal, Modal, __beyond_pkg, hmr;
  _export({
    AlertModal: void 0,
    ConfirmModal: void 0,
    Modal: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi012Components) {
      dependency_2 = _pragmateUi012Components;
    }, function (_reactDom2) {
      dependency_3 = _reactDom2;
    }, function (_framerMotion) {
      dependency_4 = _framerMotion;
    }, function (_pragmateUi012Icons) {
      dependency_5 = _pragmateUi012Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@bg/auth-api", "1.0.0"], ["@jadmin/ui", "1.0.0"], ["@bg/auth-models", null], ["@bgroup/jview", "1.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/widgets", "0.1.6"], ["@bgroup/data-model", "1.0.11"], ["@bgroup/ui", "0.0.38"], ["chart.js", "4.4.4"], ["dayjs", "1.11.13"], ["dotenv", "16.4.5"], ["framer-motion", "6.5.1"], ["googleapis", "120.0.0"], ["mysql2", "3.11.0"], ["perfect-scrollbar", "1.5.5"], ["pragmate-ui", "0.1.2"], ["prism-react-renderer", "2.4.0"], ["prismjs", "1.29.0"], ["react-is", "18.3.1"], ["react-select", "5.8.0"], ["sequelize", "6.37.3"], ["socket.io-client", "4.7.5"], ["swiper", "11.1.12"], ["tippy.js", "6.3.7"], ["uuid", "9.0.1"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["@bg/jadmin", "0.0.1"], ["sgs-workflow", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@bg/jadmin@0.0.1/modal"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/components', dependency_2], ['react-dom', dependency_3], ['framer-motion', dependency_4], ['pragmate-ui/icons', dependency_5]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./alert
      ***********************/
      ims.set('./alert', {
        hash: 2935002337,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AlertModal = void 0;
          var _react = require("react");
          var _modal = require("./modal");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          const AlertModal = exports.AlertModal = (0, _react.forwardRef)((props, ref) => {
            const close = event => {
              event.stopPropagation();
              if (props.onClose) props.onClose();
            };
            const {
              text,
              title,
              btn,
              className
            } = props;
            let btnLabel = "Confirmar";
            const cls = `pragmate-confirm-dialog modal-confirm ${className ?? ""}`;
            if (btn && typeof btn === "object") {
              btnLabel = btn.label ? btn.label : "Confirmar";
            }
            const disabled = {};
            return _react.default.createElement(_modal.Modal, {
              ref: ref,
              className: cls,
              onClose: props.onClose
            }, _react.default.createElement("div", {
              className: "alert-dialog-content"
            }, title && _react.default.createElement("h3", {
              dangerouslySetInnerHTML: {
                __html: title
              }
            }), text && _react.default.createElement("div", {
              dangerouslySetInnerHTML: {
                __html: text
              }
            }), props.children ? props.children : null), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              label: btnLabel,
              onClick: close,
              ...disabled,
              className: "btn btn-primary"
            })));
          });
        }
      });

      /*************************
      INTERNAL MODULE: ./confirm
      *************************/

      ims.set('./confirm', {
        hash: 483326843,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmModal = void 0;
          var _react = require("react");
          var _modal = require("./modal");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          const ConfirmModal = exports.ConfirmModal = (0, _react.forwardRef)((props, ref) => {
            const {
              className,
              onCancel,
              title,
              text,
              children,
              btnConfirm,
              btnCancel,
              onConfirm,
              onClose
            } = props;
            const [state, setState] = (0, _react.useState)({
              fetching: false
            });
            const cls = `pragmate-confirm-dialog modal-confirm ${className ?? ''}`;
            const process = async event => {
              event.stopPropagation();
              if (!onConfirm) {
                console.warn('there is no confirm funciton defined');
                return;
              }
              setState({
                fetching: true
              });
              await onConfirm();
              setState({
                fetching: false
              });
              onClose && onClose();
            };
            let cancelLabel = 'Cancelar';
            let confirmLabel = state.fetching ? _react.default.createElement(_components.Spinner, {
              active: true,
              color: "var(--element-bg)",
              className: "button-spinner"
            }) : 'Confirmar';
            let clsCancel = 'btn btn-default btn-cancel';
            let clsConfirm = 'btn btn-primary btn-confirm';
            if (btnConfirm && typeof btnConfirm === 'object') {
              confirmLabel = btnConfirm.label ? state.fetching ? _react.default.createElement(_components.Spinner, {
                active: true,
                color: "var(--element-bg)",
                className: "button-spinner"
              }) : btnConfirm.label : state.fetching ? _react.default.createElement(_components.Spinner, {
                active: true,
                color: "var(--element-bg)",
                className: "button-spinner"
              }) : confirmLabel;
              clsConfirm = btnConfirm.className ? btnConfirm.className : clsConfirm;
            }
            if (btnCancel && typeof btnCancel === 'object') {
              cancelLabel = btnCancel.label ? btnCancel.label : cancelLabel;
              clsCancel = btnCancel.className ? btnCancel.className : clsCancel;
            }
            const disabled = {};
            if (state.fetching) disabled.disabled = true;
            return _react.default.createElement(_modal.Modal, {
              ref: ref,
              className: cls,
              onClose: onCancel
            }, _react.default.createElement("div", {
              className: "confirm-dialog-content"
            }, title && _react.default.createElement("summary", null, title), text && _react.default.createElement("p", null, text), children), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              className: clsCancel,
              label: cancelLabel,
              ...disabled,
              onClick: onCancel
            }), _react.default.createElement(_components.Button, {
              className: clsConfirm,
              label: confirmLabel,
              ...disabled,
              onClick: process
            })));
          });
        }
      });

      /***********************
      INTERNAL MODULE: ./modal
      ***********************/

      ims.set('./modal', {
        hash: 4080265086,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Modal = void 0;
          var _react = require("react");
          var _reactDom = require("react-dom");
          var motion = require("framer-motion");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          const Modal = exports.Modal = (0, _react.forwardRef)((props, ref) => {
            const cls = props.className ? `${props.className} modal-content-wrapper` : "modal-content-wrapper";
            const [open, setOpen] = (0, _react.useState)(false);
            const [state, setState] = (0, _react.useState)({});
            (0, _react.useEffect)(() => {
              const container = document.createElement("div");
              setState({
                container
              });
              const body = document.querySelector("body");
              body.appendChild(container);
              return () => {
                (() => body.removeChild(container))();
              };
            }, []);
            const handleClose = () => setOpen(false);
            const closeModal = event => {
              event.stopPropagation();
              props.onClose && props.onClose(event);
              handleClose();
            };
            (0, _react.useImperativeHandle)(ref, () => {
              return {
                open: () => setOpen(true),
                close: handleClose
              };
            });
            if (!state.container) return null;
            return (0, _reactDom.createPortal)(_react.default.createElement(motion.AnimatePresence, null, open && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(motion.motion.div, {
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                opacity: 0,
                transition: {
                  delay: 0.3
                }
              },
              onClick: closeModal,
              className: "modal-backdrop"
            }), _react.default.createElement(motion.motion.div, {
              initial: {
                scale: 0
              },
              animate: {
                scale: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                scale: 0,
                transition: {
                  delay: 0.3
                }
              },
              className: cls
            }, _react.default.createElement(_icons.IconButton, {
              className: "close-modal",
              icon: "close",
              onClick: closeModal
            }), _react.default.createElement(motion.motion.div, {
              className: "modal-content",
              initial: {
                x: 0,
                opacity: 0
              },
              animate: {
                x: 0,
                opacity: 1,
                transition: {
                  delay: 0.3,
                  duration: 0.3
                }
              },
              exit: {
                x: 0,
                opacity: 0,
                transition: {
                  duration: 0.3
                }
              }
            }, props.children)))), state.container);
          });
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 2797387920,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          ;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./alert",
        "from": "AlertModal",
        "name": "AlertModal"
      }, {
        "im": "./confirm",
        "from": "ConfirmModal",
        "name": "ConfirmModal"
      }, {
        "im": "./modal",
        "from": "Modal",
        "name": "Modal"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AlertModal') && _export("AlertModal", AlertModal = require ? require('./alert').AlertModal : value);
        (require || prop === 'ConfirmModal') && _export("ConfirmModal", ConfirmModal = require ? require('./confirm').ConfirmModal : value);
        (require || prop === 'Modal') && _export("Modal", Modal = require ? require('./modal').Modal : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX21vZGFsIiwiX2NvbXBvbmVudHMiLCJBbGVydE1vZGFsIiwiZXhwb3J0cyIsImZvcndhcmRSZWYiLCJwcm9wcyIsInJlZiIsImNsb3NlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJvbkNsb3NlIiwidGV4dCIsInRpdGxlIiwiYnRuIiwiY2xhc3NOYW1lIiwiYnRuTGFiZWwiLCJjbHMiLCJsYWJlbCIsImRpc2FibGVkIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJNb2RhbCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiY2hpbGRyZW4iLCJCdXR0b24iLCJvbkNsaWNrIiwiQ29uZmlybU1vZGFsIiwib25DYW5jZWwiLCJidG5Db25maXJtIiwiYnRuQ2FuY2VsIiwib25Db25maXJtIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZVN0YXRlIiwiZmV0Y2hpbmciLCJwcm9jZXNzIiwiY29uc29sZSIsIndhcm4iLCJjYW5jZWxMYWJlbCIsImNvbmZpcm1MYWJlbCIsIlNwaW5uZXIiLCJhY3RpdmUiLCJjb2xvciIsImNsc0NhbmNlbCIsImNsc0NvbmZpcm0iLCJfcmVhY3REb20iLCJtb3Rpb24iLCJfaWNvbnMiLCJvcGVuIiwic2V0T3BlbiIsInVzZUVmZmVjdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUNoaWxkIiwiaGFuZGxlQ2xvc2UiLCJjbG9zZU1vZGFsIiwidXNlSW1wZXJhdGl2ZUhhbmRsZSIsImNyZWF0ZVBvcnRhbCIsIkFuaW1hdGVQcmVzZW5jZSIsIkZyYWdtZW50IiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsImRlbGF5Iiwic2NhbGUiLCJJY29uQnV0dG9uIiwiaWNvbiIsIngiXSwic291cmNlcyI6WyIvY29kZS90cy9hbGVydC50c3giLCIvY29kZS90cy9jb25maXJtLnRzeCIsIi9jb2RlL3RzL21vZGFsLnRzeCIsIi9jb2RlL3RzL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBRU87VUFBVyxNQUFNRyxVQUFVLEdBQUFDLE9BQUEsQ0FBQUQsVUFBQSxHQUU5QixJQUFBSixNQUFBLENBQUFNLFVBQVUsRUFBQyxDQUFDQyxLQUFvQyxFQUFFQyxHQUFRLEtBQWlCO1lBRTNFLE1BQU1DLEtBQUssR0FBSUMsS0FBSyxJQUFJO2NBQ3BCQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QixJQUFJSixLQUFLLENBQUNLLE9BQU8sRUFBRUwsS0FBSyxDQUFDSyxPQUFPLEVBQUU7WUFDdEMsQ0FBQztZQUNELE1BQU07Y0FBRUMsSUFBSTtjQUFFQyxLQUFLO2NBQUVDLEdBQUc7Y0FBRUM7WUFBUyxDQUFFLEdBQUdULEtBQUs7WUFDN0MsSUFBSVUsUUFBUSxHQUFZLFdBQVc7WUFFbkMsTUFBTUMsR0FBRyxHQUFHLHlDQUF5Q0YsU0FBUyxJQUFJLEVBQUUsRUFBRTtZQUN0RSxJQUFJRCxHQUFHLElBQUksT0FBT0EsR0FBRyxLQUFLLFFBQVEsRUFBRTtjQUNoQ0UsUUFBUSxHQUFHRixHQUFHLENBQUNJLEtBQUssR0FBR0osR0FBRyxDQUFDSSxLQUFLLEdBQUcsV0FBVzs7WUFFbEQsTUFBTUMsUUFBUSxHQUEyQixFQUFFO1lBQzNDLE9BQ0lwQixNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUEsQ0FBQ3BCLE1BQUEsQ0FBQXFCLEtBQUs7Y0FBQ2YsR0FBRyxFQUFFQSxHQUFHO2NBQUVRLFNBQVMsRUFBRUUsR0FBRztjQUFFTixPQUFPLEVBQUVM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