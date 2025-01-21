System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["escape-latex","1.2.0"]]);
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

// node_modules/escape-latex/dist/index.js
var require_dist = __commonJS({
  "node_modules/escape-latex/dist/index.js"(exports, module2) {
    "use strict";

    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var defaultEscapes = {
      "{": "\\{",
      "}": "\\}",
      "\\": "\\textbackslash{}",
      "#": "\\#",
      $: "\\$",
      "%": "\\%",
      "&": "\\&",
      "^": "\\textasciicircum{}",
      _: "\\_",
      "~": "\\textasciitilde{}"
    };
    var formatEscapes = {
      "\u2013": "\\--",
      "\u2014": "\\---",
      " ": "~",
      "	": "\\qquad{}",
      "\r\n": "\\newline{}",
      "\n": "\\newline{}"
    };
    var defaultEscapeMapFn = function defaultEscapeMapFn2(defaultEscapes2, formatEscapes2) {
      return _extends({}, defaultEscapes2, formatEscapes2);
    };
    module2.exports = function (str) {
      var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        _ref$preserveFormatti = _ref.preserveFormatting,
        preserveFormatting = _ref$preserveFormatti === void 0 ? false : _ref$preserveFormatti,
        _ref$escapeMapFn = _ref.escapeMapFn,
        escapeMapFn = _ref$escapeMapFn === void 0 ? defaultEscapeMapFn : _ref$escapeMapFn;
      var runningStr = String(str);
      var result = "";
      var escapes = escapeMapFn(_extends({}, defaultEscapes), preserveFormatting ? _extends({}, formatEscapes) : {});
      var escapeKeys = Object.keys(escapes);
      var _loop = function _loop2() {
        var specialCharFound = false;
        escapeKeys.forEach(function (key, index) {
          if (specialCharFound) {
            return;
          }
          if (runningStr.length >= key.length && runningStr.slice(0, key.length) === key) {
            result += escapes[escapeKeys[index]];
            runningStr = runningStr.slice(key.length, runningStr.length);
            specialCharFound = true;
          }
        });
        if (!specialCharFound) {
          result += runningStr.slice(0, 1);
          runningStr = runningStr.slice(1, runningStr.length);
        }
      };
      while (runningStr) {
        _loop();
      }
      return result;
    };
  }
});

// .beyond/uimport/escape-latex.1.2.0.js
var escape_latex_1_2_0_exports = {};
__export(escape_latex_1_2_0_exports, {
  default: () => escape_latex_1_2_0_default
});
module.exports = __toCommonJS(escape_latex_1_2_0_exports);
__reExport(escape_latex_1_2_0_exports, __toESM(require_dist()), module.exports);
var import_escape_latex = __toESM(require_dist());
var escape_latex_1_2_0_default = import_escape_latex.default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9lc2NhcGUtbGF0ZXgvZGlzdC9pbmRleC5qcyIsIi4uLy5iZXlvbmQvdWltcG9ydC9lc2NhcGUtbGF0ZXguMS4yLjAuanMiXSwibmFtZXMiOlsicmVxdWlyZV9kaXN0IiwiX19jb21tb25KUyIsIm5vZGVfbW9kdWxlcy9lc2NhcGUtbGF0ZXgvZGlzdC9pbmRleC5qcyIsImV4cG9ydHMiLCJtb2R1bGUyIiwiX2V4dGVuZHMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YXJnZXQiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic291cmNlIiwia2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVmYXVsdEVzY2FwZXMiLCIkIiwiXyIsImZvcm1hdEVzY2FwZXMiLCJkZWZhdWx0RXNjYXBlTWFwRm4iLCJkZWZhdWx0RXNjYXBlTWFwRm4yIiwiZGVmYXVsdEVzY2FwZXMyIiwiZm9ybWF0RXNjYXBlczIiLCJzdHIiLCJfcmVmIiwiX3JlZiRwcmVzZXJ2ZUZvcm1hdHRpIiwicHJlc2VydmVGb3JtYXR0aW5nIiwiX3JlZiRlc2NhcGVNYXBGbiIsImVzY2FwZU1hcEZuIiwicnVubmluZ1N0ciIsIlN0cmluZyIsInJlc3VsdCIsImVzY2FwZXMiLCJlc2NhcGVLZXlzIiwia2V5cyIsIl9sb29wIiwiX2xvb3AyIiwic3BlY2lhbENoYXJGb3VuZCIsImZvckVhY2giLCJpbmRleCIsInNsaWNlIiwiZXNjYXBlX2xhdGV4XzFfMl8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsImRlZmF1bHQiLCJlc2NhcGVfbGF0ZXhfMV8yXzBfZGVmYXVsdCIsIm1vZHVsZSIsIl9fdG9Db21tb25KUyIsIl9fcmVFeHBvcnQiLCJfX3RvRVNNIiwiaW1wb3J0X2VzY2FwZV9sYXRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxZQUFBLEdBQUFDLFVB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QUFDO1VBQy9CWCxVQUFBLEdBQWFBLFVBQUEsQ0FBV1csS0FBQSxDQUFNLEdBQUdYLFVBQUEsQ0FBV3BCLE1BQU07UUFDcEQ7TUFDRjtNQUVBLE9BQU9vQixVQUFBLEVBQVk7UUFDakJNLEtBQUEsQ0FBTTtNQUNSO01BQ0EsT0FBT0osTUFBQTtJQUNUO0VBQUE7QUFBQTs7O0FDL0VBLElBQUFVLDBCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsMEJBQUE7RUFBQUUsT0FBQSxFQUFBQSxDQUFBLEtBQUFDO0FBQUE7QUFBQUMsTUFBQSxDQUFBNUMsT0FBQSxHQUFBNkMsWUFBQSxDQUFBTCwwQkFBQTtBQUFBTSxVQUFBLENBQUFOLDBCQUFBLEVBQWNPLE9BQUEsQ0FBQWxELFlBQUEsS0FBZCtDLE1BQUEsQ0FBQTVDLE9BQUE7QUFFQSxJQUFBZ0QsbUJBQUEsR0FBcUJELE9BQUEsQ0FBQWxELFlBQUE7QUFDckIsSUFBTzhDLDBCQUFBLEdBQVFLLG1CQUFBLENBQUFOLE9BQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii93b3JrZmxvdy9vdXQifQ==