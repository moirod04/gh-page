System.register(["@babel/runtime@7.24.1/helpers/esm/typeof","@babel/runtime@7.24.1/helpers/esm/toPrimitive","@babel/runtime@7.24.1/helpers/esm/toPropertyKey"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@babel/runtime","7.24.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@babel/runtime@7.24.1/helpers/esm/typeof', dep), dep => dependencies.set('@babel/runtime@7.24.1/helpers/esm/toPrimitive', dep), dep => dependencies.set('@babel/runtime@7.24.1/helpers/esm/toPropertyKey', dep)],
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

// .beyond/uimport/@babel/runtime/helpers/esm/defineProperty.7.24.1.js
var defineProperty_7_24_1_exports = {};
__export(defineProperty_7_24_1_exports, {
  default: () => defineProperty_7_24_1_default
});
module.exports = __toCommonJS(defineProperty_7_24_1_exports);

// node_modules/@babel/runtime/helpers/esm/defineProperty.js
var import_toPropertyKey = __toESM(require("@babel/runtime@7.24.1/helpers/esm/toPropertyKey"), 0);
function _defineProperty(obj, key, value) {
  key = (0, import_toPropertyKey.default)(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// .beyond/uimport/@babel/runtime/helpers/esm/defineProperty.7.24.1.js
var defineProperty_7_24_1_default = _defineProperty;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS43LjI0LjEuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiXSwibmFtZXMiOlsiZGVmaW5lUHJvcGVydHlfN18yNF8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsImRlZmF1bHQiLCJkZWZpbmVQcm9wZXJ0eV83XzI0XzFfZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfdG9Qcm9wZXJ0eUtleSIsIl9fdG9FU00iLCJyZXF1aXJlIiwiX2RlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwidmFsdWUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSw2QkFBQTtBQUFBQyxRQUFBLENBQUFELDZCQUFBO0VBQUFFLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQztBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFOLDZCQUFBOzs7QUNBQSxJQUFBTyxvQkFBQSxHQUEwQkMsT0FBQSxDQUFBQyxPQUFBO0FBQ1gsU0FBUkMsZ0JBQWlDQyxHQUFBLEVBQUtDLEdBQUEsRUFBS0MsS0FBQSxFQUFPO0VBQ3ZERCxHQUFBLE9BQU1MLG9CQUFBLENBQUFMLE9BQUEsRUFBY1UsR0FBRztFQUN2QixJQUFJQSxHQUFBLElBQU9ELEdBQUEsRUFBSztJQUNkRyxNQUFBLENBQU9DLGNBQUEsQ0FBZUosR0FBQSxFQUFLQyxHQUFBLEVBQUs7TUFDOUJDLEtBQUE7TUFDQUcsVUFBQSxFQUFZO01BQ1pDLFlBQUEsRUFBYztNQUNkQyxRQUFBLEVBQVU7SUFDWixDQUFDO0VBQ0gsT0FBTztJQUNMUCxHQUFBLENBQUlDLEdBQUEsSUFBT0MsS0FBQTtFQUNiO0VBQ0EsT0FBT0YsR0FBQTtBQUNUOzs7QURYQSxJQUFPUiw2QkFBQSxHQUFRTyxlQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvd29ya2Zsb3cvb3V0In0=