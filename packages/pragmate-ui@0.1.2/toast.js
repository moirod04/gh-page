System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core","@beyond-js/kernel@0.1.9/styles","react@18.2.0","@beyond-js/kernel@0.1.9/texts","@beyond-js/react-18-widgets@1.0.4/hooks","@beyond-js/events@0.0.7/events","@beyond-js/reactive@1.1.14/model","@popperjs/core@2.11.8","tippy.js@6.3.7","@beyond-js/kernel@0.1.9/routing","pragmate-ui@0.1.2/ripple","pragmate-ui@0.1.2/icons"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["react","18.2.0"],["@beyond-js/react-18-widgets","1.0.4"],["@beyond-js/events","0.0.7"],["@beyond-js/reactive","1.1.14"],["@popperjs/core","2.11.8"],["tippy.js","6.3.7"],["pragmate-ui","0.1.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/texts', dep), dep => dependencies.set('@beyond-js/react-18-widgets@1.0.4/hooks', dep), dep => dependencies.set('@beyond-js/events@0.0.7/events', dep), dep => dependencies.set('@beyond-js/reactive@1.1.14/model', dep), dep => dependencies.set('@popperjs/core@2.11.8', dep), dep => dependencies.set('tippy.js@6.3.7', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/routing', dep), dep => dependencies.set('pragmate-ui@0.1.2/ripple', dep), dep => dependencies.set('pragmate-ui@0.1.2/icons', dep)],
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

// .beyond/uimport/pragmate-ui/toast.0.1.2.js
var toast_0_1_2_exports = {};
__export(toast_0_1_2_exports, {
  IToast: () => IToast,
  Toast: () => Toast,
  ToastTypes: () => ToastTypes,
  Toasts: () => Toasts,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  toast: () => toast
});
module.exports = __toCommonJS(toast_0_1_2_exports);

// node_modules/pragmate-ui/toast/toast.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/styles"), 0);
var dependency_2 = __toESM(require("react@18.2.0"), 0);
var dependency_3 = __toESM(require("@beyond-js/react-18-widgets@1.0.4/hooks"), 0);
var dependency_4 = __toESM(require("@beyond-js/reactive@1.1.14/model"), 0);
var dependency_5 = __toESM(require("pragmate-ui@0.1.2/icons"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "pragmate-ui@0.1.2/toast"
  },
  "type": "code"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/styles", dependency_1], ["react", dependency_2], ["@beyond-js/react-18-widgets/hooks", dependency_3], ["@beyond-js/reactive/model", dependency_4], ["pragmate-ui/icons", dependency_5]]);
brequire("@beyond-js/kernel/styles").styles.register("pragmate-ui@0.1.2/toast");
var ims = /* @__PURE__ */new Map();
ims.set("./index", {
  hash: 182626329,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Toasts = Toasts2;
    var _react = require2("react");
    var _hooks = require2("@beyond-js/react-18-widgets/hooks");
    var _model = require2("./model");
    var _toast = require2("./toast");
    function Toasts2({
      position = {
        bottom: "1rem",
        right: "1rem"
      },
      className,
      ...props
    }) {
      const [items, setItems] = _react.default.useState([]);
      (0, _hooks.useBinder)([_model.toast], () => setItems(_model.toast.current), "current.toast.changed");
      const elements = items.map(item => _react.default.createElement(_toast.Toast, {
        key: item.id,
        ...item
      }));
      return _react.default.createElement("div", {
        style: position,
        className: `pui-toast__container`,
        ...props
      }, elements);
    }
  }
});
ims.set("./model", {
  hash: 1270696975,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.toast = void 0;
    var _model = require2("@beyond-js/reactive/model");
    class Toast2 extends _model.ReactiveModel {
      #current;
      get current() {
        return this.#current;
      }
      set current(newValue) {
        this.#current = newValue;
        this.triggerEvent("current.toast.changed");
      }
      constructor() {
        super();
        this.#current = [];
      }
      #generateUniqueId() {
        return crypto.getRandomValues(new Uint8Array(16)).toString();
      }
      #add(type, message, duration) {
        const newToast = {
          id: this.#generateUniqueId(),
          message,
          type,
          duration
        };
        this.#current = [...this.#current, newToast];
        this.triggerEvent("current.toast.changed");
        return newToast.id;
      }
      remove(toastId) {
        this.#current = this.#current.filter(toast3 => toast3.id !== toastId);
        this.triggerEvent("current.toast.changed");
      }
      success(message, duration) {
        return this.#add("success", message, duration);
      }
      error(message, duration) {
        return this.#add("error", message, duration);
      }
      warning(message, duration) {
        return this.#add("warning", message, duration);
      }
      info(message, duration) {
        return this.#add("info", message, duration);
      }
      loading(message, duration) {
        return this.#add("loading", message, duration);
      }
    }
    const toast2 = exports.toast = new Toast2();
  }
});
ims.set("./toast", {
  hash: 2244319811,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Toast = Toast2;
    var _react = require2("react");
    var _model = require2("./model");
    var _icons = require2("pragmate-ui/icons");
    const DEFAULT_DURATION = 3e3;
    const ANIMATION_MARGIN = 300;
    function Toast2({
      type,
      message,
      duration,
      id
    }) {
      const toastRef = _react.default.useRef(null);
      _react.default.useEffect(() => {
        if (toastRef.current) {
          toastRef.current.classList.add("enter");
        }
        return () => {
          if (toastRef.current) toastRef.current.classList.remove("enter");
        };
      }, [toastRef.current]);
      _react.default.useEffect(() => {
        duration = duration ?? DEFAULT_DURATION;
        setTimeout(() => {
          toastRef.current.classList.remove("enter");
          toastRef.current.classList.add("exit");
        }, duration);
        const timeout = setTimeout(() => {
          _model.toast.current = _model.toast.current.filter(item => item.id !== id);
        }, duration + ANIMATION_MARGIN);
        return () => clearTimeout(timeout);
      }, [duration, id]);
      const icons = {
        error: "triangle-exclamation",
        success: "tickCircle",
        info: "infoCircle",
        loading: "refreshCircle",
        warning: "warning"
      };
      return _react.default.createElement("article", {
        ref: toastRef,
        className: `toast ${type}`
      }, _react.default.createElement(_icons.Icon, {
        icon: icons[type],
        className: "icon"
      }), _react.default.createElement("p", {
        className: "message"
      }, message));
    }
  }
});
__pkg.exports.descriptor = [{
  "im": "./index",
  "from": "Toasts",
  "name": "Toasts"
}, {
  "im": "./model",
  "from": "ToastTypes",
  "name": "ToastTypes"
}, {
  "im": "./model",
  "from": "IToast",
  "name": "IToast"
}, {
  "im": "./model",
  "from": "toast",
  "name": "toast"
}, {
  "im": "./toast",
  "from": "Toast",
  "name": "Toast"
}];
var Toasts, ToastTypes, IToast, toast, Toast;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "Toasts") && (Toasts = require2 ? require2("./index").Toasts : value);
  (require2 || prop === "ToastTypes") && (ToastTypes = require2 ? require2("./model").ToastTypes : value);
  (require2 || prop === "IToast") && (IToast = require2 ? require2("./model").IToast : value);
  (require2 || prop === "toast") && (toast = require2 ? require2("./model").toast : value);
  (require2 || prop === "Toast") && (Toast = require2 ? require2("./toast").Toast : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9wcmFnbWF0ZS11aS90b2FzdC4wLjEuMi5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmFnbWF0ZS11aS90b2FzdC9fX3NvdXJjZXMvdG9hc3QvY29kZS90cy9pbmRleC50c3giLCIuLi9ub2RlX21vZHVsZXMvcHJhZ21hdGUtdWkvdG9hc3QvX19zb3VyY2VzL3RvYXN0L2NvZGUvdHMvbW9kZWwudHMiLCIuLi9ub2RlX21vZHVsZXMvcHJhZ21hdGUtdWkvdG9hc3QvX19zb3VyY2VzL3RvYXN0L2NvZGUvdHMvdG9hc3QudHN4Il0sIm5hbWVzIjpbInRvYXN0XzBfMV8yX2V4cG9ydHMiLCJfX2V4cG9ydCIsIklUb2FzdCIsIlRvYXN0IiwiVG9hc3RUeXBlcyIsIlRvYXN0cyIsIl9fYmV5b25kX3BrZyIsImhtciIsInRvYXN0IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9yZWFjdCIsInJlcXVpcmUyIiwiX2hvb2tzIiwiX21vZGVsIiwiX3RvYXN0IiwiVG9hc3RzMiIsInBvc2l0aW9uIiwiYm90dG9tIiwicmlnaHQiLCJjbGFzc05hbWUiLCJwcm9wcyIsIml0ZW1zIiwic2V0SXRlbXMiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJjdXJyZW50IiwiZWxlbWVudHMiLCJtYXAiLCJpdGVtIiwiY3JlYXRlRWxlbWVudCIsImtleSIsImlkIiwic3R5bGUiLCJUb2FzdDIiLCJSZWFjdGl2ZU1vZGVsIiwibmV3VmFsdWUiLCJ0cmlnZ2VyRXZlbnQiLCJjb25zdHJ1Y3RvciIsImdlbmVyYXRlVW5pcXVlSWQiLCIjZ2VuZXJhdGVVbmlxdWVJZCIsImNyeXB0byIsImdldFJhbmRvbVZhbHVlcyIsIlVpbnQ4QXJyYXkiLCJ0b1N0cmluZyIsImFkZCIsIiNhZGQiLCJ0eXBlIiwibWVzc2FnZSIsImR1cmF0aW9uIiwibmV3VG9hc3QiLCJyZW1vdmUiLCJ0b2FzdElkIiwiZmlsdGVyIiwidG9hc3QzIiwic3VjY2VzcyIsImVycm9yIiwid2FybmluZyIsImluZm8iLCJsb2FkaW5nIiwidG9hc3QyIiwiX2ljb25zIiwiREVGQVVMVF9EVVJBVElPTiIsIkFOSU1BVElPTl9NQVJHSU4iLCJ0b2FzdFJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImNsYXNzTGlzdCIsInNldFRpbWVvdXQiLCJ0aW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiaWNvbnMiLCJyZWYiLCJJY29uIiwiaWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxtQkFBQTtBQUFBQyxRQUFBLENBQUFELG1CQUFBO0VBQUFFLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxHQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFYLG1CQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBLElBQUFZLE1BQUEsR0FBQUMsUUFBQTtJQUNBLElBQUFDLE1BQUEsR0FBQUQsUUFBQTtJQUNBLElBQUFFLE1BQUEsR0FBQUYsUUFBQTtJQUNBLElBQUFHLE1BQUEsR0FBQUgsUUFBQTtJQWNpQixTQUFVSSxRQUFPO01BQ2pDQyxRQUFBLEdBQVc7UUFBRUMsTUFBQSxFQUFRO1FBQVFDLEtBQUEsRUFBTztNQUFNO01BQzFDQyxTQUFBO1NBQ0dDO0lBQUssR0FDUTtNQUNoQixNQUFNLENBQUNDLEtBQUEsRUFBT0MsUUFBUSxJQUFJWixNQUFBLENBQUFhLE9BQUEsQ0FBTUMsUUFBQSxDQUFvQyxFQUFFO01BRXRFLElBQUFaLE1BQUEsQ0FBQWEsU0FBQSxFQUFVLENBQUNaLE1BQUEsQ0FBQVAsS0FBSyxHQUFHLE1BQU1nQixRQUFBLENBQVNULE1BQUEsQ0FBQVAsS0FBQSxDQUFNb0IsT0FBTyxHQUFHLHVCQUF1QjtNQUV6RSxNQUFNQyxRQUFBLEdBQVdOLEtBQUEsQ0FBTU8sR0FBQSxDQUFLQyxJQUFBLElBQWlCbkIsTUFBQSxDQUFBYSxPQUFBLENBQUFPLGFBQUEsQ0FBQ2hCLE1BQUEsQ0FBQWIsS0FBQSxFQUFLO1FBQUM4QixHQUFBLEVBQUtGLElBQUEsQ0FBS0csRUFBQTtRQUFFLEdBQU1IO01BQUksRUFBSTtNQUU5RSxPQUNDbkIsTUFBQSxDQUFBYSxPQUFBLENBQUFPLGFBQUE7UUFBS0csS0FBQSxFQUFPakIsUUFBQTtRQUFVRyxTQUFBLEVBQVc7UUFBc0IsR0FBTUM7TUFBSyxHQUNoRU8sUUFBUTtJQUdaOzs7Ozs7Ozs7Ozs7SUNqQ0EsSUFBQWQsTUFBQSxHQUFBRixRQUFBO0lBVUEsTUFBTXVCLE1BQUEsU0FBY3JCLE1BQUEsQ0FBQXNCLGFBQUEsQ0FBa0I7TUFDckMsQ0FBQVQsT0FBQTtNQUVBLElBQUlBLFFBQUEsRUFBTztRQUNWLE9BQU8sS0FBSyxDQUFBQSxPQUFBO01BQ2I7TUFFQSxJQUFJQSxRQUFRVSxRQUFBLEVBQW1DO1FBQzlDLEtBQUssQ0FBQVYsT0FBQSxHQUFXVSxRQUFBO1FBQ2hCLEtBQUtDLFlBQUEsQ0FBYSx1QkFBdUI7TUFDMUM7TUFFQUMsWUFBQTtRQUNDLE1BQUs7UUFDTCxLQUFLLENBQUFaLE9BQUEsR0FBVztNQUNqQjtNQUNBLENBQUFhLGdCQUFBQyxDQUFBLEVBQWlCO1FBQ2hCLE9BQU9DLE1BQUEsQ0FBT0MsZUFBQSxDQUFnQixJQUFJQyxVQUFBLENBQVcsRUFBRSxDQUFDLEVBQUVDLFFBQUEsQ0FBUTtNQUMzRDtNQUNBLENBQUFDLEdBQUFDLENBQUtDLElBQUEsRUFBa0JDLE9BQUEsRUFBaUJDLFFBQUEsRUFBZ0I7UUFDdkQsTUFBTUMsUUFBQSxHQUFtQjtVQUN4QmxCLEVBQUEsRUFBSSxLQUFLLENBQUFPLGdCQUFBLENBQWlCO1VBQzFCUyxPQUFBO1VBQ0FELElBQUE7VUFDQUU7O1FBR0QsS0FBSyxDQUFBdkIsT0FBQSxHQUFXLENBQUMsR0FBRyxLQUFLLENBQUFBLE9BQUEsRUFBVXdCLFFBQVE7UUFDM0MsS0FBS2IsWUFBQSxDQUFhLHVCQUF1QjtRQUN6QyxPQUFPYSxRQUFBLENBQVNsQixFQUFBO01BQ2pCO01BRUFtQixPQUFPQyxPQUFBLEVBQWU7UUFDckIsS0FBSyxDQUFBMUIsT0FBQSxHQUFXLEtBQUssQ0FBQUEsT0FBQSxDQUFTMkIsTUFBQSxDQUFRQyxNQUFBLElBQWtCQSxNQUFBLENBQU10QixFQUFBLEtBQU9vQixPQUFPO1FBQzVFLEtBQUtmLFlBQUEsQ0FBYSx1QkFBdUI7TUFDMUM7TUFFQWtCLFFBQVFQLE9BQUEsRUFBaUJDLFFBQUEsRUFBaUI7UUFDekMsT0FBTyxLQUFLLENBQUFKLEdBQUEsQ0FBSyxXQUFXRyxPQUFBLEVBQVNDLFFBQVE7TUFDOUM7TUFFQU8sTUFBTVIsT0FBQSxFQUFpQkMsUUFBQSxFQUFpQjtRQUN2QyxPQUFPLEtBQUssQ0FBQUosR0FBQSxDQUFLLFNBQVNHLE9BQUEsRUFBU0MsUUFBUTtNQUM1QztNQUVBUSxRQUFRVCxPQUFBLEVBQWlCQyxRQUFBLEVBQWlCO1FBQ3pDLE9BQU8sS0FBSyxDQUFBSixHQUFBLENBQUssV0FBV0csT0FBQSxFQUFTQyxRQUFRO01BQzlDO01BRUFTLEtBQUtWLE9BQUEsRUFBaUJDLFFBQUEsRUFBaUI7UUFDdEMsT0FBTyxLQUFLLENBQUFKLEdBQUEsQ0FBSyxRQUFRRyxPQUFBLEVBQVNDLFFBQVE7TUFDM0M7TUFFQVUsUUFBUVgsT0FBQSxFQUFpQkMsUUFBQSxFQUFpQjtRQUN6QyxPQUFPLEtBQUssQ0FBQUosR0FBQSxDQUFLLFdBQVdHLE9BQUEsRUFBU0MsUUFBUTtNQUM5Qzs7SUFHaUIsTUFBTVcsTUFBQSxHQUFLcEQsT0FBQSxDQUFBRixLQUFBLEdBQUcsSUFBSTRCLE1BQUEsQ0FBSzs7Ozs7Ozs7Ozs7O0lDcEV6QyxJQUFBeEIsTUFBQSxHQUFBQyxRQUFBO0lBQ0EsSUFBQUUsTUFBQSxHQUFBRixRQUFBO0lBQ0EsSUFBQWtELE1BQUEsR0FBQWxELFFBQUE7SUFTQSxNQUFNbUQsZ0JBQUEsR0FBbUI7SUFDekIsTUFBTUMsZ0JBQUEsR0FBbUI7SUFFUixTQUFVN0IsT0FBTTtNQUFFYSxJQUFBO01BQU1DLE9BQUE7TUFBU0MsUUFBQTtNQUFVakI7SUFBRSxHQUFTO01BQ3RFLE1BQU1nQyxRQUFBLEdBQVd0RCxNQUFBLENBQUFhLE9BQUEsQ0FBTTBDLE1BQUEsQ0FBdUIsSUFBSTtNQUVsRHZELE1BQUEsQ0FBQWEsT0FBQSxDQUFNMkMsU0FBQSxDQUFVLE1BQUs7UUFDcEIsSUFBSUYsUUFBQSxDQUFTdEMsT0FBQSxFQUFTO1VBQ3JCc0MsUUFBQSxDQUFTdEMsT0FBQSxDQUFReUMsU0FBQSxDQUFVdEIsR0FBQSxDQUFJLE9BQU87O1FBRXZDLE9BQU8sTUFBSztVQUNYLElBQUltQixRQUFBLENBQVN0QyxPQUFBLEVBQVNzQyxRQUFBLENBQVN0QyxPQUFBLENBQVF5QyxTQUFBLENBQVVoQixNQUFBLENBQU8sT0FBTztRQUNoRTtNQUNELEdBQUcsQ0FBQ2EsUUFBQSxDQUFTdEMsT0FBTyxDQUFDO01BRXJCaEIsTUFBQSxDQUFBYSxPQUFBLENBQU0yQyxTQUFBLENBQVUsTUFBSztRQUNwQmpCLFFBQUEsR0FBV0EsUUFBQSxJQUFZYSxnQkFBQTtRQUV2Qk0sVUFBQSxDQUFXLE1BQUs7VUFDZkosUUFBQSxDQUFTdEMsT0FBQSxDQUFReUMsU0FBQSxDQUFVaEIsTUFBQSxDQUFPLE9BQU87VUFDekNhLFFBQUEsQ0FBU3RDLE9BQUEsQ0FBUXlDLFNBQUEsQ0FBVXRCLEdBQUEsQ0FBSSxNQUFNO1FBQ3RDLEdBQUdJLFFBQVE7UUFFWCxNQUFNb0IsT0FBQSxHQUFVRCxVQUFBLENBQVcsTUFBSztVQUMvQnZELE1BQUEsQ0FBQVAsS0FBQSxDQUFNb0IsT0FBQSxHQUFVYixNQUFBLENBQUFQLEtBQUEsQ0FBTW9CLE9BQUEsQ0FBUTJCLE1BQUEsQ0FBUXhCLElBQUEsSUFBaUJBLElBQUEsQ0FBS0csRUFBQSxLQUFPQSxFQUFFO1FBQ3RFLEdBQUdpQixRQUFBLEdBQVdjLGdCQUFnQjtRQUU5QixPQUFPLE1BQU1PLFlBQUEsQ0FBYUQsT0FBTztNQUNsQyxHQUFHLENBQUNwQixRQUFBLEVBQVVqQixFQUFFLENBQUM7TUFDakIsTUFBTXVDLEtBQUEsR0FBUTtRQUNiZixLQUFBLEVBQU87UUFDUEQsT0FBQSxFQUFTO1FBQ1RHLElBQUEsRUFBTTtRQUNOQyxPQUFBLEVBQVM7UUFDVEYsT0FBQSxFQUFTOztNQUVWLE9BQ0MvQyxNQUFBLENBQUFhLE9BQUEsQ0FBQU8sYUFBQTtRQUFTMEMsR0FBQSxFQUFLUixRQUFBO1FBQVU3QyxTQUFBLEVBQVcsU0FBUzRCLElBQUE7TUFBTSxHQUNqRHJDLE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBLENBQUMrQixNQUFBLENBQUFZLElBQUEsRUFBSTtRQUFDQyxJQUFBLEVBQU1ILEtBQUEsQ0FBTXhCLElBQUE7UUFBTzVCLFNBQUEsRUFBVTtNQUFNLElBQ3pDVCxNQUFBLENBQUFhLE9BQUEsQ0FBQU8sYUFBQTtRQUFHWCxTQUFBLEVBQVU7TUFBUyxHQUFFNkIsT0FBTyxDQUFLO0lBR3ZDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvd29ya2Zsb3cvb3V0In0=