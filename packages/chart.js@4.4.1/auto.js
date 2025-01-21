System.register(["@kurkle/color@0.3.2","chart.js@4.4.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@kurkle/color","0.3.2"],["chart.js","4.4.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@kurkle/color@0.3.2', dep), dep => dependencies.set('chart.js@4.4.1', dep)],
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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/temp/chart.js/auto.4.4.1.js
var auto_4_4_1_exports = {};
__export(auto_4_4_1_exports, {
  default: () => auto_4_4_1_default
});
module.exports = __toCommonJS(auto_4_4_1_exports);

// node_modules/chart.js/auto/auto.js
var auto_exports = {};
__export(auto_exports, {
  default: () => auto_default
});
var import_chart = require("chart.js@4.4.1");
__reExport(auto_exports, require("chart.js@4.4.1"));
import_chart.Chart.register(...import_chart.registerables);
var auto_default = import_chart.Chart;

// .beyond/uimport/temp/chart.js/auto.4.4.1.js
__reExport(auto_4_4_1_exports, auto_exports, module.exports);
var auto_4_4_1_default = auto_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL2NoYXJ0LmpzL2F1dG8uNC40LjEuanMiLCIuLi9ub2RlX21vZHVsZXMvY2hhcnQuanMvYXV0by9hdXRvLmpzIl0sIm5hbWVzIjpbImF1dG9fNF80XzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiZGVmYXVsdCIsImF1dG9fNF80XzFfZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJhdXRvX2V4cG9ydHMiLCJhdXRvX2RlZmF1bHQiLCJpbXBvcnRfY2hhcnQiLCJyZXF1aXJlIiwiX19yZUV4cG9ydCIsIkNoYXJ0IiwicmVnaXN0ZXIiLCJyZWdpc3RlcmFibGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxrQkFBQTtBQUFBQyxRQUFBLENBQUFELGtCQUFBO0VBQUFFLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQztBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFOLGtCQUFBOzs7QUNBQSxJQUFBTyxZQUFBO0FBQUFOLFFBQUEsQ0FBQU0sWUFBQTtFQUFBTCxPQUFBLEVBQUFBLENBQUEsS0FBQU07QUFBQTtBQUFBLElBQUFDLFlBQUEsR0FBbUNDLE9BQUE7QUFJbkNDLFVBQUEsQ0FBQUosWUFBQSxFQUFjRyxPQUFBO0FBRmRELFlBQUEsQ0FBQUcsS0FBQSxDQUFNQyxRQUFBLENBQVMsR0FBR0osWUFBQSxDQUFBSyxhQUFhO0FBRy9CLElBQU9OLFlBQUEsR0FBUUMsWUFBQSxDQUFBRyxLQUFBOzs7QURMZkQsVUFBQSxDQUFBWCxrQkFBQSxFQUFjTyxZQUFBLEVBQWRILE1BQUEsQ0FBQUMsT0FBQTtBQUdBLElBQU9GLGtCQUFBLEdBQVFLLFlBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii93b3JrZmxvdy9vdXQifQ==