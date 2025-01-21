System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","@popperjs/core@2.11.8","tippy.js@6.3.7","@beyond-js/kernel@0.1.9/core","@beyond-js/kernel@0.1.9/routing","@beyond-js/kernel@0.1.9/styles","pragmate-ui@0.1.2/ripple","pragmate-ui@0.1.2/icons"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["react","18.2.0"],["@popperjs/core","2.11.8"],["tippy.js","6.3.7"],["pragmate-ui","0.1.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('@popperjs/core@2.11.8', dep), dep => dependencies.set('tippy.js@6.3.7', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/routing', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep), dep => dependencies.set('pragmate-ui@0.1.2/ripple', dep), dep => dependencies.set('pragmate-ui@0.1.2/icons', dep)],
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

// .beyond/uimport/pragmate-ui/alert.0.1.2.js
var alert_0_1_2_exports = {};
__export(alert_0_1_2_exports, {
  Alert: () => Alert,
  IAlertTypes: () => IAlertTypes,
  ITypes: () => ITypes,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(alert_0_1_2_exports);

// node_modules/pragmate-ui/alert/alert.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("react@18.2.0"), 0);
var dependency_2 = __toESM(require("pragmate-ui@0.1.2/icons"), 0);
var dependency_3 = __toESM(require("@beyond-js/kernel@0.1.9/styles"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "pragmate-ui@0.1.2/alert"
  },
  "type": "code",
  "name": "alert"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["react", dependency_1], ["pragmate-ui/icons", dependency_2], ["@beyond-js/kernel/styles", dependency_3]]);
brequire("@beyond-js/kernel/styles").styles.register("pragmate-ui@0.1.2/alert");
var ims = /* @__PURE__ */new Map();
ims.set("./alert", {
  hash: 2270589349,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Alert = Alert2;
    var _react = require2("react");
    var _icons = require2("pragmate-ui/icons");
    var _content = require2("./content");
    function Alert2({
      message,
      className,
      type,
      title,
      children,
      closable,
      onClose,
      icon
    }) {
      const [show, setShow] = _react.default.useState(true);
      if (!show || !message && !children) return null;
      const onClick = async event => {
        event.stopPropagation();
        if (onClose) await onClose();
        setShow(false);
      };
      let cls = `${className ? `${className} ` : ""} alert${type ? ` alert--${type}` : ""}`;
      cls = icon ? `${cls} alert--icon` : cls;
      const icons = {
        error: "error",
        warning: "circle-exclamation",
        success: "circle-check",
        info: "info"
      };
      const defaultIcon = icons[type ?? "success"];
      const hasIcon = !!icon;
      const attributes = {
        className: cls
      };
      if (closable) attributes.onClick = onClick;
      return _react.default.createElement("div", {
        ...attributes
      }, icon && _react.default.createElement("section", null, _react.default.createElement(_icons.Icon, {
        icon: defaultIcon
      })), _react.default.createElement(_content.Content, {
        message,
        title,
        icon: hasIcon
      }, children), closable && _react.default.createElement(_icons.IconButton, {
        icon: "close",
        onClick
      }));
    }
  }
});
ims.set("./content", {
  hash: 205551790,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Content = Content;
    var _react = require2("react");
    function Content({
      message,
      children,
      title,
      icon
    }) {
      let output = [];
      if (title) {
        output.push(_react.default.createElement("header", {
          key: "title",
          className: "alert__title"
        }, _react.default.createElement("h3", {
          className: "alert__title-span",
          dangerouslySetInnerHTML: {
            __html: title
          }
        })));
      }
      if (message) {
        output.push(_react.default.createElement("span", {
          key: "message",
          dangerouslySetInnerHTML: {
            __html: message
          }
        }));
      }
      const Control = icon ? "section" : _react.default.Fragment;
      return _react.default.createElement(Control, null, output, children);
    }
  }
});
ims.set("./types", {
  hash: 2963857065,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ITypes = exports.IAlertTypes = void 0;
    var ITypes2;
    (function (ITypes3) {
      ITypes3["Error"] = "error";
      ITypes3["Warning"] = "warning";
      ITypes3["Success"] = "success";
      ITypes3["Info"] = "info";
    })(ITypes2 || (exports.ITypes = ITypes2 = {}));
    const IAlertTypes2 = exports.IAlertTypes = ITypes2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./alert",
  "from": "Alert",
  "name": "Alert"
}, {
  "im": "./types",
  "from": "ITypes",
  "name": "ITypes"
}, {
  "im": "./types",
  "from": "IAlertTypes",
  "name": "IAlertTypes"
}];
var Alert, ITypes, IAlertTypes;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "Alert") && (Alert = require2 ? require2("./alert").Alert : value);
  (require2 || prop === "ITypes") && (ITypes = require2 ? require2("./types").ITypes : value);
  (require2 || prop === "IAlertTypes") && (IAlertTypes = require2 ? require2("./types").IAlertTypes : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9wcmFnbWF0ZS11aS9hbGVydC4wLjEuMi5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmFnbWF0ZS11aS9hbGVydC9fX3NvdXJjZXMvYWxlcnQvdHMvYWxlcnQudHN4IiwiLi4vbm9kZV9tb2R1bGVzL3ByYWdtYXRlLXVpL2FsZXJ0L19fc291cmNlcy9hbGVydC90cy9jb250ZW50LnRzeCIsIi4uL25vZGVfbW9kdWxlcy9wcmFnbWF0ZS11aS9hbGVydC9fX3NvdXJjZXMvYWxlcnQvdHMvdHlwZXMudHMiXSwibmFtZXMiOlsiYWxlcnRfMF8xXzJfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQWxlcnQiLCJJQWxlcnRUeXBlcyIsIklUeXBlcyIsIl9fYmV5b25kX3BrZyIsImhtciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJfcmVhY3QiLCJyZXF1aXJlMiIsIl9pY29ucyIsIl9jb250ZW50IiwiQWxlcnQyIiwibWVzc2FnZSIsImNsYXNzTmFtZSIsInR5cGUiLCJ0aXRsZSIsImNoaWxkcmVuIiwiY2xvc2FibGUiLCJvbkNsb3NlIiwiaWNvbiIsInNob3ciLCJzZXRTaG93IiwiZGVmYXVsdCIsInVzZVN0YXRlIiwib25DbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2xzIiwiaWNvbnMiLCJlcnJvciIsIndhcm5pbmciLCJzdWNjZXNzIiwiaW5mbyIsImRlZmF1bHRJY29uIiwiaGFzSWNvbiIsImF0dHJpYnV0ZXMiLCJjcmVhdGVFbGVtZW50IiwiSWNvbiIsIkNvbnRlbnQiLCJJY29uQnV0dG9uIiwib3V0cHV0IiwicHVzaCIsImtleSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiQ29udHJvbCIsIkZyYWdtZW50IiwiSVR5cGVzMiIsIklUeXBlczMiLCJJQWxlcnRUeXBlczIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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