System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","@beyond-js/kernel@0.1.9/core","@beyond-js/kernel@0.1.9/styles","@popperjs/core@2.11.8","tippy.js@6.3.7","@beyond-js/kernel@0.1.9/routing","pragmate-ui@0.1.2/ripple","pragmate-ui@0.1.2/icons","pragmate-ui@0.1.2/spinner","pragmate-ui@0.1.2/components"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["react","18.2.0"],["@popperjs/core","2.11.8"],["tippy.js","6.3.7"],["pragmate-ui","0.1.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep), dep => dependencies.set('@popperjs/core@2.11.8', dep), dep => dependencies.set('tippy.js@6.3.7', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/routing', dep), dep => dependencies.set('pragmate-ui@0.1.2/ripple', dep), dep => dependencies.set('pragmate-ui@0.1.2/icons', dep), dep => dependencies.set('pragmate-ui@0.1.2/spinner', dep), dep => dependencies.set('pragmate-ui@0.1.2/components', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
"use strict";

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/pragmate-ui/modal.0.1.2.js
var modal_0_1_2_exports = {};
__export(modal_0_1_2_exports, {
  AlertModal: () => AlertModal,
  ConfirmModal: () => ConfirmModal,
  Modal: () => Modal,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(modal_0_1_2_exports);

// node_modules/pragmate-ui/modal/modal.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("react@18.2.0"), 0);
var dependency_2 = __toESM(require("pragmate-ui@0.1.2/components"), 0);
var dependency_3 = __toESM(require("pragmate-ui@0.1.2/icons"), 0);
var dependency_4 = __toESM(require("@beyond-js/kernel@0.1.9/styles"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "pragmate-ui@0.1.2/modal"
  },
  "type": "code"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["react", dependency_1], ["pragmate-ui/components", dependency_2], ["pragmate-ui/icons", dependency_3], ["@beyond-js/kernel/styles", dependency_4]]);
brequire("@beyond-js/kernel/styles").styles.register("pragmate-ui@0.1.2/modal");
var ims = /* @__PURE__ */new Map();
ims.set("./alert", {
  hash: 3726852541,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.AlertModal = AlertModal2;
    var _react = require2("react");
    var _modal = require2("./modal");
    var _components = require2("pragmate-ui/components");
    function AlertModal2(props) {
      const [state, setState] = _react.default.useState({
        fetching: false
      });
      const close = event => {
        setState({
          fetching: true
        });
        if (props.onConfirm) props.onConfirm();
        setState({
          fetching: false
        });
        if (props.onClose) props.onClose();
      };
      const {
        text,
        title,
        btn,
        centered
      } = props;
      let btnLabel = typeof btn === "string" ? btn : "Confirmar";
      let cls = `pui-alert-dialog${centered ? " pui-alert-dialog-centered" : ""}`;
      if (props.className) cls += ` ${props.className}`;
      let clsCancel = "btn btn-default btn-cancel";
      if (btn && typeof btn === "object") {
        btnLabel = btn.label ?? btn;
        clsCancel = btn.className ?? clsCancel;
      }
      const disabled = {};
      if (state.fetching) disabled.disabled = true;
      return _react.default.createElement(_modal.Modal, {
        show: true,
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
        className: clsCancel,
        label: btnLabel,
        onClick: close,
        ...disabled
      })));
    }
  }
});
ims.set("./children", {
  hash: 1989640400,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.useModalContext = exports.ModalContext = exports.Children = void 0;
    var _react = require2("react");
    var _icons = require2("pragmate-ui/icons");
    const ModalContext = exports.ModalContext = (0, _react.createContext)({});
    const useModalContext = () => (0, _react.useContext)(ModalContext);
    exports.useModalContext = useModalContext;
    const Children = ({
      children,
      close,
      dismiss
    }) => {
      const output = [];
      if (dismiss !== false) {
        output.push(_react.default.createElement(_icons.IconButton, {
          className: "close-icon",
          onClick: close,
          "data-dismiss": "modal",
          "aria-label": "Close",
          key: "dismiss-button",
          icon: "close"
        }));
      }
      const childrenWithProps = _react.default.Children.map(children, child => {
        if ((0, _react.isValidElement)(child)) {
          const specs = {};
          return (0, _react.cloneElement)(child, specs);
        }
        return child;
      });
      output.push(childrenWithProps);
      return _react.default.createElement(ModalContext.Provider, {
        value: {
          close,
          dismiss
        }
      }, output);
    };
    exports.Children = Children;
  }
});
ims.set("./confirm/index", {
  hash: 30477597,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ConfirmModal = void 0;
    var React = require2("react");
    var _components = require2("pragmate-ui/components");
    var _modal = require2("../modal");
    var _useActionProperties = require2("./use-action-properties");
    const ConfirmModal2 = properties => {
      const [state, setState] = React.useState({
        fetching: false
      });
      const {
        text,
        title,
        onCancel,
        centered,
        onClose
      } = properties;
      let cls = `pui-confirm-dialog${centered ? " pui-confirm-dialog-centered" : ""}`;
      if (properties.className) cls += ` ${properties.className}`;
      const props = Object.assign({}, properties);
      ["text", "title", "className", "centering", "btnCancel", "btnConfirm", "onCancel"].forEach(prop => delete props[prop]);
      const [confirmProps, cancelProps] = (0, _useActionProperties.useActionProperties)(properties, setState);
      const disabled = {};
      if (state.fetching) disabled.disabled = true;
      const handleClose = onClose ?? onCancel;
      return React.createElement(_modal.Modal, {
        show: true,
        className: cls,
        onClose: handleClose
      }, React.createElement("div", {
        className: "pui-confirm-dialog-content"
      }, title && React.createElement("h3", null, title), text && React.createElement("div", {
        className: "pui-confirm-dialog-content__text"
      }, text), properties.children), React.createElement("div", {
        className: "actions"
      }, React.createElement(_components.Button, {
        ...cancelProps,
        ...disabled
      }), React.createElement(_components.Button, {
        ...disabled,
        ...confirmProps
      })));
    };
    exports.ConfirmModal = ConfirmModal2;
  }
});
ims.set("./confirm/interfaces", {
  hash: 4185920130,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./confirm/use-action-properties", {
  hash: 895556506,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.useActionProperties = useActionProperties;
    function useActionProperties(properties, setState) {
      const onProcessConfirm = callback => {
        return async event => {
          event.stopPropagation();
          setState({
            fetching: true
          });
          await callback();
          setState({
            fetching: false
          });
        };
      };
      if (properties.actions) {
        const confirmProps = {
          ...properties.actions.confirm
        };
        const cancelProps = {
          ...properties.actions.cancel
        };
        if (!confirmProps.onClick && !properties.onConfirm) {
          throw new Error("ConfirmModal: No confirm function defined");
        }
        if (!cancelProps.onClick && !properties.onCancel) {
          throw new Error("ConfirmModal: No cancel function defined");
        }
        confirmProps.onClick = onProcessConfirm(confirmProps.onClick ?? properties.onConfirm);
        cancelProps.onClick = cancelProps.onClick ?? properties.onCancel;
        return [confirmProps, cancelProps];
      }
      const {
        onCancel,
        onConfirm,
        btnConfirm,
        btnCancel
      } = properties;
      const defaultConfirm = {
        label: "Confirm",
        variant: "primary",
        onClick: onProcessConfirm(onConfirm)
      };
      const defaultCancel = {
        label: "Cancel",
        variant: "primary",
        onClick: onCancel,
        bordered: true
      };
      const actions = {
        confirm: typeof btnConfirm === "object" ? {
          ...defaultConfirm,
          ...btnConfirm
        } : defaultConfirm,
        cancel: typeof btnCancel === "object" ? {
          ...defaultCancel,
          ...btnCancel
        } : defaultCancel
      };
      return [actions.confirm, actions.cancel];
    }
  }
});
ims.set("./modal", {
  hash: 1241708018,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Modal = Modal2;
    var _react = require2("react");
    var React = _react;
    var _children = require2("./children");
    function Modal2(props) {
      const [state, setState] = (0, _react.useState)({
        show: props?.show ?? false,
        closeClicked: props.closeClicked ?? true,
        container: null
      });
      const modal = (0, _react.useRef)(null);
      const close = async event => {
        if (event) event.stopPropagation();
        const body = document.querySelector("body");
        modal.current.classList.add("modal-hidden");
        window.setTimeout(async () => {
          setState({
            ...state,
            show: false,
            closeClicked: true
          });
          body.setAttribute("style", "");
          body.classList.remove("body-custom-modal-opened");
          const {
            onClose
          } = props;
          if (!onClose || typeof onClose !== "function") return;
          onClose(event);
        }, 300);
      };
      const onClickBackdrop = event => {
        event.stopPropagation();
        if (!state.closeClicked) return;
        close(event);
      };
      const show = state.show;
      let cls = "pui-modal ";
      cls += props.className ? props.className : "";
      if (show) cls += " show-modal";
      const output = [];
      if (show) {
        output.push(React.createElement("div", {
          key: "modal-content-wrapper",
          className: "modal-wrapper"
        }, React.createElement("div", {
          className: "modal-content",
          onClick: event => {
            event.stopPropagation();
          }
        }, React.createElement(_children.Children, {
          ...props,
          close,
          key: "children-content"
        }))));
      }
      return React.createElement("div", {
        ref: modal,
        onClick: onClickBackdrop,
        className: cls
      }, output);
    }
  }
});
__pkg.exports.descriptor = [{
  "im": "./alert",
  "from": "AlertModal",
  "name": "AlertModal"
}, {
  "im": "./confirm/index",
  "from": "ConfirmModal",
  "name": "ConfirmModal"
}, {
  "im": "./modal",
  "from": "Modal",
  "name": "Modal"
}];
var AlertModal, ConfirmModal, Modal;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "AlertModal") && (AlertModal = require2 ? require2("./alert").AlertModal : value);
  (require2 || prop === "ConfirmModal") && (ConfirmModal = require2 ? require2("./confirm/index").ConfirmModal : value);
  (require2 || prop === "Modal") && (Modal = require2 ? require2("./modal").Modal : value);
};
var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;
  this.off = (event, listener) => void 0;
}();
__pkg.initialise(ims);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9wcmFnbWF0ZS11aS9tb2RhbC4wLjEuMi5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmFnbWF0ZS11aS9tb2RhbC9fX3NvdXJjZXMvbW9kYWwvdHMvYWxlcnQudHN4IiwiLi4vbm9kZV9tb2R1bGVzL3ByYWdtYXRlLXVpL21vZGFsL19fc291cmNlcy9tb2RhbC90cy9jaGlsZHJlbi50c3giLCIuLi9ub2RlX21vZHVsZXMvcHJhZ21hdGUtdWkvbW9kYWwvX19zb3VyY2VzL21vZGFsL3RzL2NvbmZpcm0vaW5kZXgudHN4IiwiLi4vbm9kZV9tb2R1bGVzL3ByYWdtYXRlLXVpL21vZGFsL19fc291cmNlcy9tb2RhbC9pbnRlcmZhY2VzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3ByYWdtYXRlLXVpL21vZGFsL19fc291cmNlcy9tb2RhbC90cy9jb25maXJtL3VzZS1hY3Rpb24tcHJvcGVydGllcy50c3giLCIuLi9ub2RlX21vZHVsZXMvcHJhZ21hdGUtdWkvbW9kYWwvX19zb3VyY2VzL21vZGFsL3RzL21vZGFsLnRzeCJdLCJuYW1lcyI6WyJtb2RhbF8wXzFfMl9leHBvcnRzIiwiX19leHBvcnQiLCJBbGVydE1vZGFsIiwiQ29uZmlybU1vZGFsIiwiTW9kYWwiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiX3JlYWN0IiwicmVxdWlyZTIiLCJfbW9kYWwiLCJfY29tcG9uZW50cyIsIkFsZXJ0TW9kYWwyIiwicHJvcHMiLCJzdGF0ZSIsInNldFN0YXRlIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwiZmV0Y2hpbmciLCJjbG9zZSIsImV2ZW50Iiwib25Db25maXJtIiwib25DbG9zZSIsInRleHQiLCJ0aXRsZSIsImJ0biIsImNlbnRlcmVkIiwiYnRuTGFiZWwiLCJjbHMiLCJjbGFzc05hbWUiLCJjbHNDYW5jZWwiLCJsYWJlbCIsImRpc2FibGVkIiwiY3JlYXRlRWxlbWVudCIsInNob3ciLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImNoaWxkcmVuIiwiQnV0dG9uIiwib25DbGljayIsIl9pY29ucyIsIk1vZGFsQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2RhbENvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ2hpbGRyZW4iLCJkaXNtaXNzIiwib3V0cHV0IiwicHVzaCIsIkljb25CdXR0b24iLCJrZXkiLCJpY29uIiwiY2hpbGRyZW5XaXRoUHJvcHMiLCJtYXAiLCJjaGlsZCIsImlzVmFsaWRFbGVtZW50Iiwic3BlY3MiLCJjbG9uZUVsZW1lbnQiLCJQcm92aWRlciIsInZhbHVlIiwiUmVhY3QiLCJfdXNlQWN0aW9uUHJvcGVydGllcyIsIkNvbmZpcm1Nb2RhbDIiLCJwcm9wZXJ0aWVzIiwib25DYW5jZWwiLCJPYmplY3QiLCJhc3NpZ24iLCJmb3JFYWNoIiwicHJvcCIsImNvbmZpcm1Qcm9wcyIsImNhbmNlbFByb3BzIiwidXNlQWN0aW9uUHJvcGVydGllcyIsImhhbmRsZUNsb3NlIiwiZGVmaW5lUHJvcGVydHkiLCJvblByb2Nlc3NDb25maXJtIiwiY2FsbGJhY2siLCJzdG9wUHJvcGFnYXRpb24iLCJhY3Rpb25zIiwiY29uZmlybSIsImNhbmNlbCIsIkVycm9yIiwiYnRuQ29uZmlybSIsImJ0bkNhbmNlbCIsImRlZmF1bHRDb25maXJtIiwidmFyaWFudCIsImRlZmF1bHRDYW5jZWwiLCJib3JkZXJlZCIsIl9jaGlsZHJlbiIsIk1vZGFsMiIsImNsb3NlQ2xpY2tlZCIsImNvbnRhaW5lciIsIm1vZGFsIiwidXNlUmVmIiwiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0Iiwic2V0QXR0cmlidXRlIiwicmVtb3ZlIiwib25DbGlja0JhY2tkcm9wIiwicmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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