System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core","@beyond-js/kernel@0.1.9/styles"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["pragmate-ui","0.1.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep)],
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

// .beyond/uimport/pragmate-ui/ripple.0.1.2.js
var ripple_0_1_2_exports = {};
__export(ripple_0_1_2_exports, {
  RippleEffect: () => RippleEffect,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(ripple_0_1_2_exports);

// node_modules/pragmate-ui/ripple/ripple.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/styles"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "pragmate-ui@0.1.2/ripple"
  },
  "type": "code"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/styles", dependency_1]]);
brequire("@beyond-js/kernel/styles").styles.register("pragmate-ui@0.1.2/ripple");
var ims = /* @__PURE__ */new Map();
ims.set("./index", {
  hash: 702158720,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.RippleEffect = void 0;
    class RippleEffect2 {
      elements;
      constructor(elements = void 0) {
        if (elements) this.add(elements);
      }
      add(elements) {
        this.elements = Array.isArray(elements) ? elements : [elements];
        this.elements.forEach(element => {
          element.classList.add("ripple");
          element.addEventListener("mousedown", this.onClick);
        });
      }
      addRippleEffect(ref) {
        this.add(ref);
      }
      onClick = event => {
        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const ripple = document.createElement("span");
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        event.target.appendChild(ripple);
        setTimeout(() => {
          ripple.remove();
        }, 1e3);
      };
      cleanup() {
        this.elements.forEach(element => {
          element.removeEventListener("mousedown", this.onClick);
        });
        this.elements = [];
      }
    }
    exports.RippleEffect = RippleEffect2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./index",
  "from": "RippleEffect",
  "name": "RippleEffect"
}];
var RippleEffect;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "RippleEffect") && (RippleEffect = require2 ? require2("./index").RippleEffect : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9wcmFnbWF0ZS11aS9yaXBwbGUuMC4xLjIuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJhZ21hdGUtdWkvcmlwcGxlL19fc291cmNlcy9yaXBwbGUvdHMvaW5kZXgudHMiXSwibmFtZXMiOlsicmlwcGxlXzBfMV8yX2V4cG9ydHMiLCJfX2V4cG9ydCIsIlJpcHBsZUVmZmVjdCIsIl9fYmV5b25kX3BrZyIsImhtciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJSaXBwbGVFZmZlY3QyIiwiZWxlbWVudHMiLCJjb25zdHJ1Y3RvciIsImFkZCIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uQ2xpY2siLCJhZGRSaXBwbGVFZmZlY3QiLCJyZWYiLCJldmVudCIsInJlY3QiLCJ0YXJnZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ4IiwiY2xpZW50WCIsImxlZnQiLCJ5IiwiY2xpZW50WSIsInRvcCIsInJpcHBsZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiYXBwZW5kQ2hpbGQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiY2xlYW51cCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxvQkFBQTtFQUFBRSxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBUCxvQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FpQixNQUFPUSxhQUFBLENBQVk7TUFDM0JDLFFBQUE7TUFFUkMsWUFBWUQsUUFBQSxHQUE0QyxRQUFTO1FBQ2hFLElBQUlBLFFBQUEsRUFBVSxLQUFLRSxHQUFBLENBQUlGLFFBQVE7TUFDaEM7TUFFUUUsSUFBSUYsUUFBQSxFQUFRO1FBQ25CLEtBQUtBLFFBQUEsR0FBV0csS0FBQSxDQUFNQyxPQUFBLENBQVFKLFFBQVEsSUFBSUEsUUFBQSxHQUFXLENBQUNBLFFBQVE7UUFDOUQsS0FBS0EsUUFBQSxDQUFTSyxPQUFBLENBQVFDLE9BQUEsSUFBVTtVQUMvQkEsT0FBQSxDQUFRQyxTQUFBLENBQVVMLEdBQUEsQ0FBSSxRQUFRO1VBQzlCSSxPQUFBLENBQVFFLGdCQUFBLENBQWlCLGFBQWEsS0FBS0MsT0FBTztRQUNuRCxDQUFDO01BQ0Y7TUFFT0MsZ0JBQWdCQyxHQUFBLEVBQVE7UUFDOUIsS0FBS1QsR0FBQSxDQUFJUyxHQUFHO01BQ2I7TUFFUUYsT0FBQSxHQUFXRyxLQUFBLElBQXFCO1FBQ3ZDLE1BQU1DLElBQUEsR0FBUUQsS0FBQSxDQUFNRSxNQUFBLENBQXVCQyxxQkFBQSxDQUFxQjtRQUNoRSxNQUFNQyxDQUFBLEdBQUlKLEtBQUEsQ0FBTUssT0FBQSxHQUFVSixJQUFBLENBQUtLLElBQUE7UUFDL0IsTUFBTUMsQ0FBQSxHQUFJUCxLQUFBLENBQU1RLE9BQUEsR0FBVVAsSUFBQSxDQUFLUSxHQUFBO1FBQy9CLE1BQU1DLE1BQUEsR0FBU0MsUUFBQSxDQUFTQyxhQUFBLENBQWMsTUFBTTtRQUM1Q0YsTUFBQSxDQUFPRyxLQUFBLENBQU1QLElBQUEsR0FBTyxHQUFHRixDQUFBO1FBQ3ZCTSxNQUFBLENBQU9HLEtBQUEsQ0FBTUosR0FBQSxHQUFNLEdBQUdGLENBQUE7UUFDckJQLEtBQUEsQ0FBTUUsTUFBQSxDQUF1QlksV0FBQSxDQUFZSixNQUFNO1FBQ2hESyxVQUFBLENBQVcsTUFBSztVQUNmTCxNQUFBLENBQU9NLE1BQUEsQ0FBTTtRQUNkLEdBQUcsR0FBSTtNQUNSO01BRU9DLFFBQUEsRUFBTztRQUNiLEtBQUs3QixRQUFBLENBQVNLLE9BQUEsQ0FBUUMsT0FBQSxJQUFVO1VBQy9CQSxPQUFBLENBQVF3QixtQkFBQSxDQUFvQixhQUFhLEtBQUtyQixPQUFPO1FBQ3RELENBQUM7UUFDRCxLQUFLVCxRQUFBLEdBQVc7TUFDakI7O0lBQ0FILE9BQUEsQ0FBQUosWUFBQSxHQUFBTSxhQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvd29ya2Zsb3cvb3V0In0=