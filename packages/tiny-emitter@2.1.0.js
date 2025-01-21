System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["tiny-emitter","2.1.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [],
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
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
    exports: {}
  }).exports, mod), mod.exports;
};
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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// node_modules/tiny-emitter/index.js
var require_tiny_emitter = __commonJS({
  "node_modules/tiny-emitter/index.js"(exports, module2) {
    function E() {}
    E.prototype = {
      on: function (name, callback, ctx) {
        var e = this.e || (this.e = {});
        (e[name] || (e[name] = [])).push({
          fn: callback,
          ctx
        });
        return this;
      },
      once: function (name, callback, ctx) {
        var self = this;
        function listener() {
          self.off(name, listener);
          callback.apply(ctx, arguments);
        }
        ;
        listener._ = callback;
        return this.on(name, listener, ctx);
      },
      emit: function (name) {
        var data = [].slice.call(arguments, 1);
        var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
        var i = 0;
        var len = evtArr.length;
        for (i; i < len; i++) {
          evtArr[i].fn.apply(evtArr[i].ctx, data);
        }
        return this;
      },
      off: function (name, callback) {
        var e = this.e || (this.e = {});
        var evts = e[name];
        var liveEvents = [];
        if (evts && callback) {
          for (var i = 0, len = evts.length; i < len; i++) {
            if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
          }
        }
        liveEvents.length ? e[name] = liveEvents : delete e[name];
        return this;
      }
    };
    module2.exports = E;
    module2.exports.TinyEmitter = E;
  }
});

// .beyond/uimport/tiny-emitter.2.1.0.js
var tiny_emitter_2_1_0_exports = {};
__export(tiny_emitter_2_1_0_exports, {
  default: () => tiny_emitter_2_1_0_default
});
module.exports = __toCommonJS(tiny_emitter_2_1_0_exports);
__reExport(tiny_emitter_2_1_0_exports, __toESM(require_tiny_emitter()), module.exports);
var import_tiny_emitter = __toESM(require_tiny_emitter());
var tiny_emitter_2_1_0_default = import_tiny_emitter.default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy90aW55LWVtaXR0ZXIvaW5kZXguanMiLCIuLi8uYmV5b25kL3VpbXBvcnQvdGlueS1lbWl0dGVyLjIuMS4wLmpzIl0sIm5hbWVzIjpbInJlcXVpcmVfdGlueV9lbWl0dGVyIiwiX19jb21tb25KUyIsIm5vZGVfbW9kdWxlcy90aW55LWVtaXR0ZXIvaW5kZXguanMiLCJleHBvcnRzIiwibW9kdWxlMiIsIkUiLCJwcm90b3R5cGUiLCJvbiIsIm5hbWUiLCJjYWxsYmFjayIsImN0eCIsImUiLCJwdXNoIiwiZm4iLCJvbmNlIiwic2VsZiIsImxpc3RlbmVyIiwib2ZmIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfIiwiZW1pdCIsImRhdGEiLCJzbGljZSIsImNhbGwiLCJldnRBcnIiLCJpIiwibGVuIiwibGVuZ3RoIiwiZXZ0cyIsImxpdmVFdmVudHMiLCJUaW55RW1pdHRlciIsInRpbnlfZW1pdHRlcl8yXzFfMF9leHBvcnRzIiwiX19leHBvcnQiLCJkZWZhdWx0IiwidGlueV9lbWl0dGVyXzJfMV8wX2RlZmF1bHQiLCJtb2R1bGUiLCJfX3RvQ29tbW9uSlMiLCJfX3JlRXhwb3J0IiwiX190b0VTTSIsImltcG9ydF90aW55X2VtaXR0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQUEsR0FBQUMsVUFBQTtFQUFBLG9DQUFBQyxDQUFBQyxPQUFBLEVBQUFDLE9BQUE7SUFBQSxTQUFTQyxFQUFBLEVBQUssQ0FHZDtJQUVBQSxDQUFBLENBQUVDLFNBQUEsR0FBWTtNQUNaQyxFQUFBLEVBQUksU0FBQUEsQ0FBVUMsSUFBQSxFQUFNQyxRQUFBLEVBQVVDLEdBQUEsRUFBSztRQUNqQyxJQUFJQyxDQUFBLEdBQUksS0FBS0EsQ0FBQSxLQUFNLEtBQUtBLENBQUEsR0FBSSxDQUFDO1FBRTdCLENBQUNBLENBQUEsQ0FBRUgsSUFBQSxNQUFV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