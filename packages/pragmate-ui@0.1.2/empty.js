System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core","@beyond-js/kernel@0.1.9/styles","react@18.2.0","@popperjs/core@2.11.8","tippy.js@6.3.7","@beyond-js/kernel@0.1.9/routing","pragmate-ui@0.1.2/ripple","pragmate-ui@0.1.2/icons"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["react","18.2.0"],["@popperjs/core","2.11.8"],["tippy.js","6.3.7"],["pragmate-ui","0.1.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('@popperjs/core@2.11.8', dep), dep => dependencies.set('tippy.js@6.3.7', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/routing', dep), dep => dependencies.set('pragmate-ui@0.1.2/ripple', dep), dep => dependencies.set('pragmate-ui@0.1.2/icons', dep)],
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

// .beyond/uimport/pragmate-ui/empty.0.1.2.js
var empty_0_1_2_exports = {};
__export(empty_0_1_2_exports, {
  Empty: () => Empty,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(empty_0_1_2_exports);

// node_modules/pragmate-ui/empty/empty.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/styles"), 0);
var dependency_2 = __toESM(require("react@18.2.0"), 0);
var dependency_3 = __toESM(require("pragmate-ui@0.1.2/icons"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "pragmate-ui@0.1.2/empty"
  },
  "type": "code"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/styles", dependency_1], ["react", dependency_2], ["pragmate-ui/icons", dependency_3]]);
brequire("@beyond-js/kernel/styles").styles.register("pragmate-ui@0.1.2/empty");
var ims = /* @__PURE__ */new Map();
ims.set("./empty", {
  hash: 1254695097,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Empty = Empty2;
    var _react = require2("react");
    var _icons = require2("pragmate-ui/icons");
    function Empty2(props) {
      const cls = `${props.className ?? ""} pui-empty-section`;
      return _react.default.createElement("div", {
        className: cls
      }, _react.default.createElement("div", {
        className: "content"
      }, props.icon && _react.default.createElement(_icons.Icon, {
        className: "pui-empty__icon",
        icon: props.icon
      }), props.text && _react.default.createElement("h3", null, props.text), props.children && props.children));
    }
  }
});
__pkg.exports.descriptor = [{
  "im": "./empty",
  "from": "Empty",
  "name": "Empty"
}];
var Empty;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "Empty") && (Empty = require2 ? require2("./empty").Empty : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9wcmFnbWF0ZS11aS9lbXB0eS4wLjEuMi5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmFnbWF0ZS11aS9lbXB0eS9fX3NvdXJjZXMvZW1wdHkvdHMvZW1wdHkudHN4Il0sIm5hbWVzIjpbImVtcHR5XzBfMV8yX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkVtcHR5IiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9yZWFjdCIsInJlcXVpcmUyIiwiX2ljb25zIiwiRW1wdHkyIiwicHJvcHMiLCJjbHMiLCJjbGFzc05hbWUiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImljb24iLCJJY29uIiwidGV4dCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG1CQUFBO0FBQUFDLFFBQUEsQ0FBQUQsbUJBQUE7RUFBQUUsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVAsbUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBLElBQUFRLE1BQUEsR0FBQUMsUUFBQTtJQUNBLElBQUFDLE1BQUEsR0FBQUQsUUFBQTtJQVFpQixTQUNSRSxPQUFNQyxLQUFBLEVBQWE7TUFDM0IsTUFBTUMsR0FBQSxHQUFNLEdBQUdELEtBQUEsQ0FBTUUsU0FBQSxJQUFhO01BRWxDLE9BQ0NOLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBO1FBQUtGLFNBQUEsRUFBV0Q7TUFBRyxHQUNsQkwsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUE7UUFBS0YsU0FBQSxFQUFVO01BQVMsR0FDdEJGLEtBQUEsQ0FBTUssSUFBQSxJQUFRVCxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixNQUFBLENBQUFRLElBQUEsRUFBSTtRQUFDSixTQUFBLEVBQVU7UUFBa0JHLElBQUEsRUFBTUwsS0FBQSxDQUFNSztNQUFJLElBQ2hFTCxLQUFBLENBQU1PLElBQUEsSUFBUVgsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsYUFBS0osS0FBQSxDQUFNTyxJQUFJLEdBQzdCUCxLQUFBLENBQU1RLFFBQUEsSUFBWVIsS0FBQSxDQUFNUSxRQUFRLENBQzVCO0lBR1QiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii93b3JrZmxvdy9vdXQifQ==