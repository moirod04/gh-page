System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","@beyond-js/kernel@0.1.9/core","@beyond-js/kernel@0.1.9/texts"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["react","18.2.0"],["@beyond-js/react-18-widgets","1.0.4"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/texts', dep)],
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

// .beyond/uimport/@beyond-js/react-18-widgets/hooks.1.0.4.js
var hooks_1_0_4_exports = {};
__export(hooks_1_0_4_exports, {
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  useBinder: () => useBinder,
  useTexts: () => useTexts
});
module.exports = __toCommonJS(hooks_1_0_4_exports);

// node_modules/@beyond-js/react-18-widgets/hooks/hooks.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("react@18.2.0"), 0);
var dependency_2 = __toESM(require("@beyond-js/kernel@0.1.9/texts"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/react-18-widgets@1.0.4/hooks"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["react", dependency_1], ["@beyond-js/kernel/texts", dependency_2]]);
var ims = /* @__PURE__ */new Map();
ims.set("./index", {
  hash: 2896174166,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.useBinder = useBinder2;
    var _react = require2("react");
    function useBinder2(objects, onBinder, events = "change") {
      const bindEvents = typeof events === "string" ? [events] : events;
      _react.default.useEffect(() => {
        objects.forEach(object => {
          if (!object?.on) return;
          bindEvents.forEach(event => object.on(event, onBinder));
        });
        return () => objects.forEach(object => {
          if (!object?.off) return;
          bindEvents.forEach(event => object.off(event, onBinder));
        });
      }, []);
    }
  }
});
ims.set("./use-texts", {
  hash: 2200528805,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.useTexts = useTexts2;
    var React = require2("react");
    var _texts = require2("@beyond-js/kernel/texts");
    function useTexts2(specifier, key) {
      const [ready, setReady] = React.useState(false);
      const [texts, setTexts] = React.useState({});
      React.useEffect(() => {
        const modelTexts = new _texts.CurrentTexts(specifier);
        const triggerEvent = () => {
          let value = modelTexts.value;
          if (modelTexts.ready && key) {
            if (!value.hasOwnProperty(key)) {
              console.warn(`the key specified for texts was not found. Key passed: ${key}, module specifier: ${specifier}`);
            }
            value = modelTexts.value[key];
          }
          setTexts(value);
          setReady(modelTexts.ready);
        };
        modelTexts.on("change", triggerEvent);
        triggerEvent();
        return () => {
          modelTexts.on("change", triggerEvent);
        };
      }, []);
      const isReady = ready && !!texts;
      return [isReady, texts];
    }
  }
});
__pkg.exports.descriptor = [{
  "im": "./index",
  "from": "useBinder",
  "name": "useBinder"
}, {
  "im": "./use-texts",
  "from": "useTexts",
  "name": "useTexts"
}];
var useBinder, useTexts;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "useBinder") && (useBinder = require2 ? require2("./index").useBinder : value);
  (require2 || prop === "useTexts") && (useTexts = require2 ? require2("./use-texts").useTexts : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvaG9va3MuMS4wLjQuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdC0xOC13aWRnZXRzL2hvb2tzL19fc291cmNlcy9ob29rcy9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvaG9va3MvX19zb3VyY2VzL2hvb2tzL3VzZS10ZXh0cy50cyJdLCJuYW1lcyI6WyJob29rc18xXzBfNF9leHBvcnRzIiwiX19leHBvcnQiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJ1c2VCaW5kZXIiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJfcmVhY3QiLCJyZXF1aXJlMiIsInVzZUJpbmRlcjIiLCJvYmplY3RzIiwib25CaW5kZXIiLCJldmVudHMiLCJiaW5kRXZlbnRzIiwiZGVmYXVsdCIsInVzZUVmZmVjdCIsImZvckVhY2giLCJvYmplY3QiLCJvbiIsImV2ZW50Iiwib2ZmIiwiUmVhY3QiLCJfdGV4dHMiLCJ1c2VUZXh0czIiLCJzcGVjaWZpZXIiLCJrZXkiLCJyZWFkeSIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ0ZXh0cyIsInNldFRleHRzIiwibW9kZWxUZXh0cyIsIkN1cnJlbnRUZXh0cyIsInRyaWdnZXJFdmVudCIsInZhbHVlIiwiaGFzT3duUHJvcGVydHkiLCJjb25zb2xlIiwid2FybiIsImlzUmVhZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsbUJBQUE7QUFBQUMsUUFBQSxDQUFBRCxtQkFBQTtFQUFBRSxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUEsR0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFB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