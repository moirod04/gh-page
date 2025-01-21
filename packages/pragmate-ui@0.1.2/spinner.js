System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","@beyond-js/kernel@0.1.9/core","@beyond-js/kernel@0.1.9/styles"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["react","18.2.0"],["pragmate-ui","0.1.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep)],
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

// .beyond/uimport/pragmate-ui/spinner.0.1.2.js
var spinner_0_1_2_exports = {};
__export(spinner_0_1_2_exports, {
  Spinner: () => Spinner,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(spinner_0_1_2_exports);

// node_modules/pragmate-ui/spinner/spinner.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("react@18.2.0"), 0);
var dependency_2 = __toESM(require("@beyond-js/kernel@0.1.9/styles"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "pragmate-ui@0.1.2/spinner"
  },
  "type": "code",
  "name": "spinner"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["react", dependency_1], ["@beyond-js/kernel/styles", dependency_2]]);
brequire("@beyond-js/kernel/styles").styles.register("pragmate-ui@0.1.2/spinner");
var ims = /* @__PURE__ */new Map();
ims.set("./spinner", {
  hash: 1129442560,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Spinner = void 0;
    var _react = require2("react");
    const Spinner2 = exports.Spinner = (0, _react.forwardRef)((props, ref) => {
      let {
        color,
        className,
        size,
        type,
        active
      } = props;
      const types = ["on-primary", "on-secondary", "on-surface", "on-error", "primary", "secondary", "tertiary"];
      const clsType = types.includes(type) ? type : "primary";
      const style = {};
      if (color) style.stroke = color;
      className = `${clsType}${className ? ` ${className}` : ""}`;
      let cls = className ? `${className} pragmate-element-spinner` : "pragmate-element-spinner";
      if (active) cls += " is-active";
      const sizes = {
        xs: 30,
        md: 40,
        lg: 50,
        xl: 60
      };
      const circleSize = sizes[size] || 30;
      return _react.default.createElement("div", {
        className: cls,
        ref
      }, _react.default.createElement("svg", {
        viewBox: "0 0 100 100"
      }, _react.default.createElement("circle", {
        cx: "50",
        cy: "50",
        r: circleSize,
        style
      })));
    });
  }
});
__pkg.exports.descriptor = [{
  "im": "./spinner",
  "from": "Spinner",
  "name": "Spinner"
}];
var Spinner;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "Spinner") && (Spinner = require2 ? require2("./spinner").Spinner : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9wcmFnbWF0ZS11aS9zcGlubmVyLjAuMS4yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByYWdtYXRlLXVpL3NwaW5uZXIvX19zb3VyY2VzL3NwaW5uZXIvdHMvc3Bpbm5lci50c3giXSwibmFtZXMiOlsic3Bpbm5lcl8wXzFfMl9leHBvcnRzIiwiX19leHBvcnQiLCJTcGlubmVyIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9yZWFjdCIsInJlcXVpcmUyIiwiU3Bpbm5lcjIiLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJyZWYiLCJjb2xvciIsImNsYXNzTmFtZSIsInNpemUiLCJ0eXBlIiwiYWN0aXZlIiwidHlwZXMiLCJjbHNUeXBlIiwiaW5jbHVkZXMiLCJzdHlsZSIsInN0cm9rZSIsImNscyIsInNpemVzIiwieHMiLCJtZCIsImxnIiwieGwiLCJjaXJjbGVTaXplIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJ2aWV3Qm94IiwiY3giLCJjeSIsInIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQUE7QUFBQUMsUUFBQSxDQUFBRCxxQkFBQTtFQUFBRSxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBUCxxQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUEsSUFBQVEsTUFBQSxHQUFBQyxRQUFBO0lBU0EsTUFBTUMsUUFBQSxHQUFPSixPQUFBLENBQUFKLE9BQUEsSUFBa0QsR0FBQU0sTUFBQSxDQUFBRyxVQUFBLEVBQzlELENBQUNDLEtBQUEsRUFBbUJDLEdBQUEsS0FBK0M7TUFDbEUsSUFBSTtRQUFFQyxLQUFBO1FBQU9DLFNBQUE7UUFBV0MsSUFBQTtRQUFNQyxJQUFBO1FBQU1DO01BQU0sSUFBS04sS0FBQTtNQUUvQyxNQUFNTyxLQUFBLEdBQVEsQ0FBQyxjQUFjLGdCQUFnQixjQUFjLFlBQVksV0FBVyxhQUFhLFVBQVU7TUFDekcsTUFBTUMsT0FBQSxHQUFVRCxLQUFBLENBQU1FLFFBQUEsQ0FBU0osSUFBSSxJQUFJQSxJQUFBLEdBQU87TUFFOUMsTUFBTUssS0FBQSxHQUE2QjtNQUNuQyxJQUFJUixLQUFBLEVBQU9RLEtBQUEsQ0FBTUMsTUFBQSxHQUFTVCxLQUFBO01BQzFCQyxTQUFBLEdBQVksR0FBR0ssT0FBQSxHQUFVTCxTQUFBLEdBQVksSUFBSUEsU0FBQSxLQUFjO01BQ3ZELElBQUlTLEdBQUEsR0FBY1QsU0FBQSxHQUFZLEdBQUdBLFNBQUEsOEJBQXVDO01BQ3hFLElBQUlHLE1BQUEsRUFBUU0sR0FBQSxJQUFPO01BRW5CLE1BQU1DLEtBQUEsR0FBUTtRQUNiQyxFQUFBLEVBQUk7UUFDSkMsRUFBQSxFQUFJO1FBQ0pDLEVBQUEsRUFBSTtRQUNKQyxFQUFBLEVBQUk7O01BRUwsTUFBTUMsVUFBQSxHQUFhTCxLQUFBLENBQU1ULElBQUEsS0FBUztNQUVsQyxPQUNDUixNQUFBLENBQUF1QixPQUFBLENBQUFDLGFBQUE7UUFBS2pCLFNBQUEsRUFBV1MsR0FBQTtRQUFLWDtNQUFRLEdBQzVCTCxNQUFBLENBQUF1QixPQUFBLENBQUFDLGFBQUE7UUFBS0MsT0FBQSxFQUFRO01BQWEsR0FDekJ6QixNQUFBLENBQUF1QixPQUFBLENBQUFDLGFBQUE7UUFBUUUsRUFBQSxFQUFHO1FBQUtDLEVBQUEsRUFBRztRQUFLQyxDQUFBLEVBQUdOLFVBQUE7UUFBWVI7TUFBWSxFQUFJLENBQ2xEO0lBR1QsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3dvcmtmbG93L291dCJ9