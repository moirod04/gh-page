System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@babel/runtime","7.24.1"]]);
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

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/@babel/runtime/helpers/esm/extends.7.24.1.js
var extends_7_24_1_exports = {};
__export(extends_7_24_1_exports, {
  default: () => extends_7_24_1_default
});
module.exports = __toCommonJS(extends_7_24_1_exports);

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return _extends.apply(this, arguments);
}

// .beyond/uimport/@babel/runtime/helpers/esm/extends.7.24.1.js
var extends_7_24_1_default = _extends;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLjcuMjQuMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIl0sIm5hbWVzIjpbImV4dGVuZHNfN18yNF8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsImRlZmF1bHQiLCJleHRlbmRzXzdfMjRfMV9kZWZhdWx0IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9leHRlbmRzIiwiT2JqZWN0IiwiYXNzaWduIiwiYmluZCIsInRhcmdldCIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxzQkFBQTtBQUFBQyxRQUFBLENBQUFELHNCQUFBO0VBQUFFLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQztBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFOLHNCQUFBOzs7QUNBZSxTQUFSTyxTQUFBLEVBQTRCO0VBQ2pDQSxRQUFBLEdBQVdDLE1BQUEsQ0FBT0MsTUFBQSxHQUFTRCxNQUFBLENBQU9DLE1BQUEsQ0FBT0MsSUFBQSxDQUFLLElBQUksVUFBVUMsTUFBQSxFQUFRO0lBQ2xFLFNBQVNDLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlDLFNBQUEsQ0FBVUMsTUFBQSxFQUFRRixDQUFBLElBQUs7TUFDekMsSUFBSUcsTUFBQSxHQUFTRixTQUFBLENBQVVELENBQUE7TUFDdkIsU0FBU0ksR0FBQSxJQUFPRCxNQUFBLEVBQVE7UUFDdEIsSUFBSVAsTUFBQSxDQUFPUyxTQUFBLENBQVVDLGNBQUEsQ0FBZUMsSUFBQSxDQUFLSixNQUFBLEVBQVFDLEdBQUcsR0FBRztVQUNyREwsTUFBQSxDQUFPSyxHQUFBLElBQU9ELE1BQUEsQ0FBT0MsR0FBQTtRQUN2QjtNQUNGO0lBQ0Y7SUFDQSxPQUFPTCxNQUFBO0VBQ1Q7RUFDQSxPQUFPSixRQUFBLENBQVNhLEtBQUEsQ0FBTSxNQUFNUCxTQUFTO0FBQ3ZDOzs7QURWQSxJQUFPVixzQkFBQSxHQUFRSSxRQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvd29ya2Zsb3cvb3V0In0=