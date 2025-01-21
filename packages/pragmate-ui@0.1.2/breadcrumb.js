System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core","@beyond-js/kernel@0.1.9/styles","react@18.2.0","@beyond-js/kernel@0.1.9/routing","@beyond-js/kernel@0.1.9/texts","@beyond-js/react-18-widgets@1.0.4/hooks","uuid@9.0.1","@popperjs/core@2.11.8","tippy.js@6.3.7","pragmate-ui@0.1.2/ripple","pragmate-ui@0.1.2/icons","pragmate-ui@0.1.2/spinner","pragmate-ui@0.1.2/components"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["react","18.2.0"],["@beyond-js/react-18-widgets","1.0.4"],["uuid","9.0.1"],["@popperjs/core","2.11.8"],["tippy.js","6.3.7"],["pragmate-ui","0.1.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/routing', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/texts', dep), dep => dependencies.set('@beyond-js/react-18-widgets@1.0.4/hooks', dep), dep => dependencies.set('uuid@9.0.1', dep), dep => dependencies.set('@popperjs/core@2.11.8', dep), dep => dependencies.set('tippy.js@6.3.7', dep), dep => dependencies.set('pragmate-ui@0.1.2/ripple', dep), dep => dependencies.set('pragmate-ui@0.1.2/icons', dep), dep => dependencies.set('pragmate-ui@0.1.2/spinner', dep), dep => dependencies.set('pragmate-ui@0.1.2/components', dep)],
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

// .beyond/uimport/temp/pragmate-ui/breadcrumb.0.1.2.js
var breadcrumb_0_1_2_exports = {};
__export(breadcrumb_0_1_2_exports, {
  BreadCrumb: () => BreadCrumb,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(breadcrumb_0_1_2_exports);

// node_modules/pragmate-ui/breadcrumb/breadcrumb.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/styles"), 0);
var dependency_2 = __toESM(require("react@18.2.0"), 0);
var dependency_3 = __toESM(require("@beyond-js/kernel@0.1.9/routing"), 0);
var dependency_4 = __toESM(require("@beyond-js/react-18-widgets@1.0.4/hooks"), 0);
var dependency_5 = __toESM(require("uuid@9.0.1"), 0);
var dependency_6 = __toESM(require("pragmate-ui@0.1.2/components"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "pragmate-ui@0.1.2/breadcrumb"
  },
  "type": "code"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/styles", dependency_1], ["react", dependency_2], ["@beyond-js/kernel/routing", dependency_3], ["@beyond-js/react-18-widgets/hooks", dependency_4], ["uuid", dependency_5], ["pragmate-ui/components", dependency_6]]);
brequire("@beyond-js/kernel/styles").styles.register("pragmate-ui@0.1.2/breadcrumb");
var ims = /* @__PURE__ */new Map();
ims.set("./index", {
  hash: 1198919866,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BreadCrumb = BreadCrumb2;
    var _react = require2("react");
    var _routing = require2("@beyond-js/kernel/routing");
    var _hooks = require2("@beyond-js/react-18-widgets/hooks");
    var _uuid = require2("uuid");
    var _item = require2("./item");
    function BreadCrumb2({
      items,
      separator,
      className,
      children,
      ...props
    }) {
      const [currentRouting, setCurrentRouting] = _react.default.useState(_routing.routing.uri.pathname);
      (0, _hooks.useBinder)([_routing.routing], () => setCurrentRouting(_routing.routing.uri.pathname));
      const total = items.length;
      const breadcrumbOutput = items.map(([label, link], index) => _react.default.createElement(_item.Item, {
        key: (0, _uuid.v4)(),
        total,
        index,
        separator,
        link,
        label,
        currentRouting
      }));
      let cls = `pui-breadcrumb__container${className ? ` ${className}` : ""}`;
      return _react.default.createElement("header", {
        className: cls,
        ...props
      }, breadcrumbOutput.length > 0 && _react.default.createElement("ul", {
        className: "breadcrumb"
      }, breadcrumbOutput), _react.default.createElement("div", null, children));
    }
  }
});
ims.set("./item", {
  hash: 1761258708,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Item = Item;
    var _react = require2("react");
    var _components = require2("pragmate-ui/components");
    function Item({
      link,
      label,
      currentRouting,
      index,
      total,
      separator = ">"
    }) {
      const isChecked = link === currentRouting ? "breadcrumbs__item--checked" : "breadcrumbs__item";
      return _react.default.createElement("li", {
        key: `${link} ${label}`
      }, _react.default.createElement(_components.Link, {
        className: isChecked,
        href: link
      }, label, total > index + 1 && _react.default.createElement("span", {
        className: "pui-breadcrumb__separator"
      }, separator)));
    }
  }
});
ims.set("./types", {
  hash: 3856179362,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
__pkg.exports.descriptor = [{
  "im": "./index",
  "from": "BreadCrumb",
  "name": "BreadCrumb"
}];
var BreadCrumb;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "BreadCrumb") && (BreadCrumb = require2 ? require2("./index").BreadCrumb : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3ByYWdtYXRlLXVpL2JyZWFkY3J1bWIuMC4xLjIuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJhZ21hdGUtdWkvYnJlYWRjcnVtYi9fX3NvdXJjZXMvYnJlYWRjcnVtYi90cy9pbmRleC50c3giLCIuLi9ub2RlX21vZHVsZXMvcHJhZ21hdGUtdWkvYnJlYWRjcnVtYi9fX3NvdXJjZXMvYnJlYWRjcnVtYi90cy9pdGVtLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9wcmFnbWF0ZS11aS9icmVhZGNydW1iL19fc291cmNlcy9icmVhZGNydW1iL3R5cGVzLnRzIl0sIm5hbWVzIjpbImJyZWFkY3J1bWJfMF8xXzJfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQnJlYWRDcnVtYiIsIl9fYmV5b25kX3BrZyIsImhtciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJfcmVhY3QiLCJyZXF1aXJlMiIsIl9yb3V0aW5nIiwiX2hvb2tzIiwiX3V1aWQiLCJfaXRlbSIsIkJyZWFkQ3J1bWIyIiwiaXRlbXMiLCJzZXBhcmF0b3IiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInByb3BzIiwiY3VycmVudFJvdXRpbmciLCJzZXRDdXJyZW50Um91dGluZyIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInJvdXRpbmciLCJ1cmkiLCJwYXRobmFtZSIsInVzZUJpbmRlciIsInRvdGFsIiwibGVuZ3RoIiwiYnJlYWRjcnVtYk91dHB1dCIsIm1hcCIsImxhYmVsIiwibGluayIsImluZGV4IiwiY3JlYXRlRWxlbWVudCIsIkl0ZW0iLCJrZXkiLCJ2NCIsImNscyIsIl9jb21wb25lbnRzIiwiaXNDaGVja2VkIiwiTGluayIsImhyZWYiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHdCQUFBO0FBQUFD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