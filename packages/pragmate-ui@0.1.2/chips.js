System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core","@beyond-js/kernel@0.1.9/styles","react@18.2.0","pragmate-ui@0.1.2/ripple","@popperjs/core@2.11.8","tippy.js@6.3.7","@beyond-js/kernel@0.1.9/routing","pragmate-ui@0.1.2/icons"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["react","18.2.0"],["pragmate-ui","0.1.2"],["@popperjs/core","2.11.8"],["tippy.js","6.3.7"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('pragmate-ui@0.1.2/ripple', dep), dep => dependencies.set('@popperjs/core@2.11.8', dep), dep => dependencies.set('tippy.js@6.3.7', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/routing', dep), dep => dependencies.set('pragmate-ui@0.1.2/icons', dep)],
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

// .beyond/uimport/pragmate-ui/chips.0.1.2.js
var chips_0_1_2_exports = {};
__export(chips_0_1_2_exports, {
  Chip: () => Chip,
  Chips: () => Chips,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(chips_0_1_2_exports);

// node_modules/pragmate-ui/chips/chips.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/styles"), 0);
var dependency_2 = __toESM(require("react@18.2.0"), 0);
var dependency_3 = __toESM(require("pragmate-ui@0.1.2/ripple"), 0);
var dependency_4 = __toESM(require("tippy.js@6.3.7"), 0);
var dependency_5 = __toESM(require("pragmate-ui@0.1.2/icons"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "pragmate-ui@0.1.2/chips"
  },
  "type": "code"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/styles", dependency_1], ["react", dependency_2], ["pragmate-ui/ripple", dependency_3], ["tippy.js", dependency_4], ["pragmate-ui/icons", dependency_5]]);
brequire("@beyond-js/kernel/styles").styles.register("pragmate-ui@0.1.2/chips");
var ims = /* @__PURE__ */new Map();
ims.set("./badge", {
  hash: 3444524587,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Chip = Chip2;
    var _react = require2("react");
    var _ripple = require2("pragmate-ui/ripple");
    var _tippy = require2("tippy.js");
    var _icons = require2("pragmate-ui/icons");
    function Chip2(props) {
      const {
        item,
        type,
        className,
        title,
        children,
        icon
      } = props;
      const properties = {
        ...props
      };
      const ref = _react.default.useRef(null);
      ["children", "type", "className"].forEach(key => delete properties[key]);
      _react.default.useEffect(() => {
        if (properties.onClick) {
          const ripple = new _ripple.RippleEffect();
          ripple.addRippleEffect(ref.current);
        }
        if (title) (0, _tippy.default)(ref.current);
      }, [properties.onClick, title]);
      if (title) properties["data-tippy-content"] = title;
      let cls = `pui-chip${type ? ` pui-chip--${type}` : ""}${className ? ` ${className}` : ""}`;
      if (properties.onClick) {
        cls += ` is-clickable`;
      }
      const showIcon = icon && _react.default.createElement(_icons.Icon, {
        icon
      });
      return _react.default.createElement("span", {
        ref,
        className: cls,
        ...properties
      }, item, children, showIcon);
    }
  }
});
ims.set("./index", {
  hash: 1542096823,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Chips = Chips2;
    var _react = require2("react");
    function Chips2(props) {
      const {
        children
      } = props;
      const properties = {
        ...props
      };
      ["items", "type"].forEach(key => delete properties[key]);
      const cls = `${props.type ? `pui-chip__container--${props.type}` : ""}`;
      properties.className = `pui-chip__container${properties.className ? ` ${properties.className}` : ""} ${cls}`;
      return _react.default.createElement("div", {
        ...properties
      }, _react.default.createElement("div", {
        className: "content-chip"
      }, children));
    }
  }
});
__pkg.exports.descriptor = [{
  "im": "./badge",
  "from": "Chip",
  "name": "Chip"
}, {
  "im": "./index",
  "from": "Chips",
  "name": "Chips"
}];
var Chip, Chips;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "Chip") && (Chip = require2 ? require2("./badge").Chip : value);
  (require2 || prop === "Chips") && (Chips = require2 ? require2("./index").Chips : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9wcmFnbWF0ZS11aS9jaGlwcy4wLjEuMi5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmFnbWF0ZS11aS9jaGlwcy9fX3NvdXJjZXMvY2hpcHMvdHMvYmFkZ2UudHN4IiwiLi4vbm9kZV9tb2R1bGVzL3ByYWdtYXRlLXVpL2NoaXBzL19fc291cmNlcy9jaGlwcy90cy9pbmRleC50c3giXSwibmFtZXMiOlsiY2hpcHNfMF8xXzJfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQ2hpcCIsIkNoaXBzIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9yZWFjdCIsInJlcXVpcmUyIiwiX3JpcHBsZSIsIl90aXBweSIsIl9pY29ucyIsIkNoaXAyIiwicHJvcHMiLCJpdGVtIiwidHlwZSIsImNsYXNzTmFtZSIsInRpdGxlIiwiY2hpbGRyZW4iLCJpY29uIiwicHJvcGVydGllcyIsInJlZiIsImRlZmF1bHQiLCJ1c2VSZWYiLCJmb3JFYWNoIiwia2V5IiwidXNlRWZmZWN0Iiwib25DbGljayIsInJpcHBsZSIsIlJpcHBsZUVmZmVjdCIsImFkZFJpcHBsZUVmZmVjdCIsImN1cnJlbnQiLCJjbHMiLCJzaG93SWNvbiIsImNyZWF0ZUVsZW1lbnQiLCJJY29uIiwiQ2hpcHMyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG1CQUFBO0FBQUFDLFFBQUEsQ0FBQUQsbUJBQUE7RUFBQUUsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVIsbUJBQUE7Ozs7Ozs7Ozs7Ozs7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