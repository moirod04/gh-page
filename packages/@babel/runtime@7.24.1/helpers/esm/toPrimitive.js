System.register(["@babel/runtime@7.24.1/helpers/esm/typeof"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@babel/runtime","7.24.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@babel/runtime@7.24.1/helpers/esm/typeof', dep)],
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

// .beyond/uimport/@babel/runtime/helpers/esm/toPrimitive.7.24.1.js
var toPrimitive_7_24_1_exports = {};
__export(toPrimitive_7_24_1_exports, {
  default: () => toPrimitive_7_24_1_default
});
module.exports = __toCommonJS(toPrimitive_7_24_1_exports);

// node_modules/@babel/runtime/helpers/esm/toPrimitive.js
var import_typeof = __toESM(require("@babel/runtime@7.24.1/helpers/esm/typeof"), 0);
function toPrimitive(t, r) {
  if ("object" != (0, import_typeof.default)(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0, import_typeof.default)(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

// .beyond/uimport/@babel/runtime/helpers/esm/toPrimitive.7.24.1.js
var toPrimitive_7_24_1_default = toPrimitive;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b1ByaW1pdGl2ZS43LjI0LjEuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9QcmltaXRpdmUuanMiXSwibmFtZXMiOlsidG9QcmltaXRpdmVfN18yNF8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsImRlZmF1bHQiLCJ0b1ByaW1pdGl2ZV83XzI0XzFfZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfdHlwZW9mIiwiX190b0VTTSIsInJlcXVpcmUiLCJ0b1ByaW1pdGl2ZSIsInQiLCJyIiwiZSIsIlN5bWJvbCIsImkiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiTnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDBCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsMEJBQUE7RUFBQUUsT0FBQSxFQUFBQSxDQUFBLEtBQUFDO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQU4sMEJBQUE7OztBQ0FBLElBQUFPLGFBQUEsR0FBb0JDLE9BQUEsQ0FBQUMsT0FBQTtBQUNMLFNBQVJDLFlBQTZCQyxDQUFBLEVBQUdDLENBQUEsRUFBRztFQUN4QyxJQUFJLGdCQUFZTCxhQUFBLENBQUFMLE9BQUEsRUFBUVMsQ0FBQyxLQUFLLENBQUNBLENBQUEsRUFBRyxPQUFPQSxDQUFBO0VBQ3pDLElBQUlFLENBQUEsR0FBSUYsQ0FBQSxDQUFFRyxNQUFBLENBQU9KLFdBQUE7RUFDakIsSUFBSSxXQUFXRyxDQUFBLEVBQUc7SUFDaEIsSUFBSUUsQ0FBQSxHQUFJRixDQUFBLENBQUVHLElBQUEsQ0FBS0wsQ0FBQSxFQUFHQyxDQUFBLElBQUssU0FBUztJQUNoQyxJQUFJLGdCQUFZTCxhQUFBLENBQUFMLE9BQUEsRUFBUWEsQ0FBQyxHQUFHLE9BQU9BLENBQUE7SUFDbkMsTUFBTSxJQUFJRSxTQUFBLENBQVUsOENBQThDO0VBQ3BFO0VBQ0EsUUFBUSxhQUFhTCxDQUFBLEdBQUlNLE1BQUEsR0FBU0MsTUFBQSxFQUFRUixDQUFDO0FBQzdDOzs7QURQQSxJQUFPUiwwQkFBQSxHQUFRTyxXQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvd29ya2Zsb3cvb3V0In0=