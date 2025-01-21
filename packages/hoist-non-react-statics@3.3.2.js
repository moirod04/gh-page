System.register(["react-is@16.13.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react-is","16.13.1"],["hoist-non-react-statics","3.3.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react-is@16.13.1', dep)],
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

// node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var require_hoist_non_react_statics_cjs = __commonJS({
  "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, module2) {
    "use strict";

    var reactIs = require("react-is@16.13.1");
    var REACT_STATICS = {
      childContextTypes: true,
      contextType: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromError: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
    };
    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
    };
    var FORWARD_REF_STATICS = {
      "$$typeof": true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
    };
    var MEMO_STATICS = {
      "$$typeof": true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
    function getStatics(component) {
      if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
      }
      return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
    }
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;
    function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== "string") {
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);
          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
          }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
          keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
            try {
              defineProperty(targetComponent, key, descriptor);
            } catch (e) {}
          }
        }
      }
      return targetComponent;
    }
    module2.exports = hoistNonReactStatics;
  }
});

// .beyond/uimport/hoist-non-react-statics.3.3.2.js
var hoist_non_react_statics_3_3_2_exports = {};
__export(hoist_non_react_statics_3_3_2_exports, {
  default: () => hoist_non_react_statics_3_3_2_default
});
module.exports = __toCommonJS(hoist_non_react_statics_3_3_2_exports);
__reExport(hoist_non_react_statics_3_3_2_exports, __toESM(require_hoist_non_react_statics_cjs()), module.exports);
var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());
var hoist_non_react_statics_3_3_2_default = import_hoist_non_react_statics.default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9kaXN0L2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzLmNqcy5qcyIsIi4uLy5iZXlvbmQvdWltcG9ydC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy4zLjMuMi5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlX2hvaXN0X25vbl9yZWFjdF9zdGF0aWNzX2NqcyIsIl9fY29tbW9uSlMiLCJub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCJleHBvcnRzIiwibW9kdWxlMiIsInJlYWN0SXMiLCJyZXF1aXJlIiwiUkVBQ1RfU1RBVElDUyIsImNoaWxkQ29udGV4dFR5cGVzIiwiY29udGV4dFR5cGUiLCJjb250ZXh0VHlwZXMiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSIsImdldERlZmF1bHRQcm9wcyIsImdldERlcml2ZWRTdGF0ZUZyb21FcnJvciIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsIm1peGlucyIsInByb3BUeXBlcyIsInR5cGUiLCJLTk9XTl9TVEFUSUNTIiwibmFtZSIsImxlbmd0aCIsInByb3RvdHlwZSIsImNhbGxlciIsImNhbGxlZSIsImFyZ3VtZW50cyIsImFyaXR5IiwiRk9SV0FSRF9SRUZfU1RBVElDUyIsInJlbmRlciIsIk1FTU9fU1RBVElDUyIsImNvbXBhcmUiLCJUWVBFX1NUQVRJQ1MiLCJGb3J3YXJkUmVmIiwiTWVtbyIsImdldFN0YXRpY3MiLCJjb21wb25lbnQiLCJpc01lbW8iLCJkZWZpbmVQcm9wZXJ0eSIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRQcm90b3R5cGVPZiIsIm9iamVjdFByb3RvdHlwZSIsImhvaXN0Tm9uUmVhY3RTdGF0aWNzIiwidGFyZ2V0Q29tcG9uZW50Iiwic291cmNlQ29tcG9uZW50IiwiYmxhY2tsaXN0IiwiaW5oZXJpdGVkQ29tcG9uZW50Iiwia2V5cyIsImNvbmNhdCIsInRhcmdldFN0YXRpY3MiLCJzb3VyY2VTdGF0aWNzIiwiaSIsImtleSIsImRlc2NyaXB0b3IiLCJlIiwiaG9pc3Rfbm9uX3JlYWN0X3N0YXRpY3NfM18zXzJfZXhwb3J0cyIsIl9fZXhwb3J0IiwiZGVmYXVsdCIsImhvaXN0X25vbl9yZWFjdF9zdGF0aWNzXzNfM18yX2RlZmF1bHQiLCJtb2R1bGUiLCJfX3RvQ29tbW9uSlMiLCJfX3JlRXhwb3J0IiwiX190b0VTTSIsImltcG9ydF9ob2lzdF9ub25fcmVhY3Rfc3RhdGljcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxtQ0FBQSxHQUFBQyxVQUFBO0VBQUEsMEVBQUFDLENBQUFDLE9BQUEsRUFBQUMsT0FBQTtJQUFBOztJQUVBLElBQUlDLE9BQUEsR0FBVUMsT0FBQSxDQUFRO0lBTXRCLElBQUlDLGFBQUEsR0FBZ0I7TUFDbEJDLGlCQUFBLEVBQW1CO01BQ25CQyxXQUFBLEVBQWE7TUFDYkMsWUFBQSxFQUFjO01BQ2RDLFlBQUEsRUFBYztNQUNkQyxXQUFBLEVBQWE7TUFDYkMsZUFBQSxFQUFpQjtNQUNqQkMsd0JBQUEsRUFBMEI7TUFDMUJDLHdCQUFBLEVBQTBCO01BQzFCQyxNQUFBLEVBQVE7TUFDUkMsU0FBQSxFQUFXO01BQ1hDLElBQUEsRUFBTTtJQUNSO0lBQ0EsSUFBSUMsYUFBQSxHQUFnQjtNQUNsQkMsSUFBQSxFQUFNO01BQ05DLE1BQUEsRUFBUTtNQUNSQyxTQUFBLEVBQVc7TUFDWEMsTUFBQSxFQUFRO01BQ1JDLE1BQUEsRUFBUTtNQUNSQyxTQUFBLEVBQVc7TUFDWEMsS0FBQSxFQUFPO0lBQ1Q7SUFDQSxJQUFJQyxtQkFBQSxHQUFzQjtNQUN4QixZQUFZO01BQ1pDLE1BQUEsRUFBUTtNQUNSakIsWUFBQSxFQUFjO01BQ2RDLFdBQUEsRUFBYTtNQUNiSyxTQUFBLEVBQVc7SUFDYjtJQUNBLElBQUlZLFlBQUEsR0FBZTtNQUNqQixZQUFZO01BQ1pDLE9BQUEsRUFBUztNQUNUbkIsWUFBQSxFQUFjO01BQ2RDLFdBQUEsRUFBYTtNQUNiSyxTQUFBLEVBQVc7TUFDWEMsSUFBQSxFQUFNO0lBQ1I7SUFDQSxJQUFJYSxZQUFBLEdBQWUsQ0FBQztJQUNwQkEsWUFBQSxDQUFhMUIsT0FBQSxDQUFRMkIsVUFBQSxJQUFjTCxtQkFBQTtJQUNuQ0ksWUFBQSxDQUFhMUIsT0FBQSxDQUFRNEIsSUFBQSxJQUFRSixZQUFBO0lBRTdCLFNBQVNLLFdBQVdDLFNBQUEsRUFBVztNQUU3QixJQUFJOUIsT0FBQSxDQUFRK0IsTUFBQSxDQUFPRCxTQUFTLEdBQUc7UUFDN0IsT0FBT04sWUFBQTtNQUNUO01BR0EsT0FBT0UsWUFBQSxDQUFhSSxTQUFBLENBQVUsZ0JBQWdCNUIsYUFBQTtJQUNoRDtJQUVBLElBQUk4QixjQUFBLEdBQWlCQyxNQUFBLENBQU9ELGNBQUE7SUFDNUIsSUFBSUUsbUJBQUEsR0FBc0JELE1BQUEsQ0FBT0MsbUJBQUE7SUFDakMsSUFBSUMscUJBQUEsR0FBd0JGLE1BQUEsQ0FBT0UscUJBQUE7SUFDbkMsSUFBSUMsd0JBQUEsR0FBMkJILE1BQUEsQ0FBT0csd0JBQUE7SUFDdEMsSUFBSUMsY0FBQSxHQUFpQkosTUFBQSxDQUFPSSxjQUFBO0lBQzVCLElBQUlDLGVBQUEsR0FBa0JMLE1BQUEsQ0FBT2hCLFNBQUE7SUFDN0IsU0FBU3NCLHFCQUFxQkMsZUFBQSxFQUFpQkMsZUFBQSxFQUFpQkMsU0FBQSxFQUFXO01BQ3pFLElBQUksT0FBT0QsZUFBQSxLQUFvQixVQUFVO1FBRXZDLElBQUlILGVBQUEsRUFBaUI7VUFDbkIsSUFBSUssa0JBQUEsR0FBcUJOLGNBQUEsQ0FBZUksZUFBZTtVQUV2RCxJQUFJRSxrQkFBQSxJQUFzQkEsa0JBQUEsS0FBdUJMLGVBQUEsRUFBaUI7WUFDaEVDLG9CQUFBLENBQXFCQyxlQUFBLEVBQWlCRyxrQkFBQSxFQUFvQkQsU0FBUztVQUNyRTtRQUNGO1FBRUEsSUFBSUUsSUFBQSxHQUFPVixtQkFBQSxDQUFvQk8sZUFBZTtRQUU5QyxJQUFJTixxQkFBQSxFQUF1QjtVQUN6QlMsSUFBQSxHQUFPQSxJQUFBLENBQUtDLE1BQUEsQ0FBT1YscUJBQUEsQ0FBc0JNLGVBQWUsQ0FBQztRQUMzRDtRQUVBLElBQUlLLGFBQUEsR0FBZ0JqQixVQUFBLENBQVdXLGVBQWU7UUFDOUMsSUFBSU8sYUFBQSxHQUFnQmxCLFVBQUEsQ0FBV1ksZUFBZTtRQUU5QyxTQUFTTyxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJSixJQUFBLENBQUs1QixNQUFBLEVBQVEsRUFBRWdDLENBQUEsRUFBRztVQUNwQyxJQUFJQyxHQUFBLEdBQU1MLElBQUEsQ0FBS0ksQ0FBQTtVQUVmLElBQUksQ0FBQ2xDLGFBQUEsQ0FBY21DLEdBQUEsS0FBUSxFQUFFUCxTQUFBLElBQWFBLFNBQUEsQ0FBVU8sR0FBQSxNQUFTLEVBQUVGLGFBQUEsSUFBaUJBLGFBQUEsQ0FBY0UsR0FBQSxNQUFTLEVBQUVILGFBQUEsSUFBaUJBLGFBQUEsQ0FBY0csR0FBQSxJQUFPO1lBQzdJLElBQUlDLFVBQUEsR0FBYWQsd0JBQUEsQ0FBeUJLLGVBQUEsRUFBaUJRLEdBQUc7WUFFOUQsSUFBSTtjQUVGakIsY0FBQSxDQUFlUSxlQUFBLEVBQWlCUyxHQUFBLEVBQUtDLFVBQVU7WUFDakQsU0FBU0MsQ0FBQSxFQUFQLENBQVc7VUFDZjtRQUNGO01BQ0Y7TUFFQSxPQUFPWCxlQUFBO0lBQ1Q7SUFFQXpDLE9BQUEsQ0FBT0QsT0FBQSxHQUFVeUMsb0JBQUE7RUFBQTtBQUFBOzs7QUN0R2pCLElBQUFhLHFDQUFBO0FBQUFDLFFBQUEsQ0FBQUQscUNBQUE7RUFBQUUsT0FBQSxFQUFBQSxDQUFBLEtBQUFDO0FBQUE7QUFBQUMsTUFBQSxDQUFBMUQsT0FBQSxHQUFBMkQsWUFBQSxDQUFBTCxxQ0FBQTtBQUFBTSxVQUFBLENBQUFOLHFDQUFBLEVBQWNPLE9BQUEsQ0FBQWhFLG1DQUFBLEtBQWQ2RCxNQUFBLENBQUExRCxPQUFBO0FBRUEsSUFBQThELDhCQUFBLEdBQXFCRCxPQUFBLENBQUFoRSxtQ0FBQTtBQUNyQixJQUFPNEQscUNBQUEsR0FBUUssOEJBQUEsQ0FBQU4sT0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3dvcmtmbG93L291dCJ9