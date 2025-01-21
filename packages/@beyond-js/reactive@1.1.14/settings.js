System.register(["@beyond-js/kernel@0.1.9/bundle"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/reactive","1.1.14"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep)],
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

// .beyond/uimport/@beyond-js/reactive/settings.1.1.14.js
var settings_1_1_14_exports = {};
__export(settings_1_1_14_exports, {
  IConfig: () => IConfig,
  ReactiveConfig: () => ReactiveConfig,
  TCustomAdapter: () => TCustomAdapter,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(settings_1_1_14_exports);

// node_modules/@beyond-js/reactive/settings/settings.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/reactive@1.1.13/settings"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([]);
var ims = /* @__PURE__ */new Map();
ims.set("./index", {
  hash: 3044010697,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ReactiveConfig = void 0;
    class ReactiveConfig2 {
      static #config;
      static adapter = "legacy";
      static set(config) {
        this.#config = config;
        const properties = Object.keys(config);
        properties.forEach(property => {
          ReactiveConfig2[property] = config[property];
        });
      }
    }
    exports.ReactiveConfig = ReactiveConfig2;
  }
});
ims.set("./interface", {
  hash: 2607228355,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
__pkg.exports.descriptor = [{
  "im": "./index",
  "from": "ReactiveConfig",
  "name": "ReactiveConfig"
}, {
  "im": "./interface",
  "from": "TCustomAdapter",
  "name": "TCustomAdapter"
}, {
  "im": "./interface",
  "from": "IConfig",
  "name": "IConfig"
}];
var ReactiveConfig, TCustomAdapter, IConfig;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "ReactiveConfig") && (ReactiveConfig = require2 ? require2("./index").ReactiveConfig : value);
  (require2 || prop === "TCustomAdapter") && (TCustomAdapter = require2 ? require2("./interface").TCustomAdapter : value);
  (require2 || prop === "IConfig") && (IConfig = require2 ? require2("./interface").IConfig : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0aXZlL3NldHRpbmdzLjEuMS4xNC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0aXZlL3NldHRpbmdzL19fc291cmNlcy9zZXR0aW5ncy9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0aXZlL3NldHRpbmdzL19fc291cmNlcy9zZXR0aW5ncy9pbnRlcmZhY2UudHMiXSwibmFtZXMiOlsic2V0dGluZ3NfMV8xXzE0X2V4cG9ydHMiLCJfX2V4cG9ydCIsIklDb25maWciLCJSZWFjdGl2ZUNvbmZpZyIsIlRDdXN0b21BZGFwdGVyIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIlJlYWN0aXZlQ29uZmlnMiIsImNvbmZpZyIsImFkYXB0ZXIiLCJzZXQiLCJwcm9wZXJ0aWVzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJwcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsdUJBQUE7QUFBQUMsUUFBQSxDQUFBRCx1QkFBQTtFQUFBRSxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBVCx1QkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNFa0IsTUFBT1UsZUFBQSxDQUFjO01BQ3RDLE9BQU8sQ0FBQUMsTUFBQTtNQUNQLE9BQU9DLE9BQUEsR0FBOEI7TUFDckMsT0FBT0MsSUFBSUYsTUFBQSxFQUFlO1FBQ3pCLEtBQUssQ0FBQUEsTUFBQSxHQUFVQSxNQUFBO1FBQ2YsTUFBTUcsVUFBQSxHQUFhQyxNQUFBLENBQU9DLElBQUEsQ0FBS0wsTUFBTTtRQUNyQ0csVUFBQSxDQUFXRyxPQUFBLENBQVFDLFFBQUEsSUFBVztVQUM3QlIsZUFBQSxDQUFlUSxRQUFBLElBQVlQLE1BQUEsQ0FBT08sUUFBQTtRQUNuQyxDQUFDO01BQ0Y7O0lBSURWLE9BQUEsQ0FBQUwsY0FBQSxHQUFBTyxlQUFBOzs7Ozs7SUNmQTs7SUFFQUssTUFBQSxDQUFBSSxjQUFBLENBQUFYLE9BQUE7TUFDQVksS0FBQTtJQUNBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvd29ya2Zsb3cvb3V0In0=