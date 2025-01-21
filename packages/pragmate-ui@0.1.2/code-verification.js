System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core","@beyond-js/kernel@0.1.9/styles","react@18.2.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["react","18.2.0"],["pragmate-ui","0.1.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep), dep => dependencies.set('react@18.2.0', dep)],
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

// .beyond/uimport/temp/pragmate-ui/code-verification.0.1.2.js
var code_verification_0_1_2_exports = {};
__export(code_verification_0_1_2_exports, {
  InputCode: () => InputCode,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(code_verification_0_1_2_exports);

// node_modules/pragmate-ui/code-verification/code-verification.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/styles"), 0);
var dependency_2 = __toESM(require("react@18.2.0"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "pragmate-ui@0.1.2/code-verification"
  },
  "type": "code",
  "name": "code-verification"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/styles", dependency_1], ["react", dependency_2]]);
brequire("@beyond-js/kernel/styles").styles.register("pragmate-ui@0.1.2/code-verification");
var ims = /* @__PURE__ */new Map();
ims.set("./code-input", {
  hash: 2234384063,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.InputCode = InputCode2;
    var _react = require2("react");
    var _input = require2("./input");
    const defaultOnCodeFull = () => null;
    function InputCode2({
      length,
      onCodeFull,
      className,
      onlyNumber,
      reset
    }) {
      const [code, setCode] = (0, _react.useState)([]);
      const refs = (0, _react.useRef)(Array(length));
      const onClean = event => {
        window.setTimeout(() => {
          if (event.which === 8 || event.key?.toLowerCase() === "backspace") {
            if (code.length) setCode(code.slice(0, code.length - 1));
            return;
          }
        }, 0);
      };
      const preventDefault = event => {
        const target = event.currentTarget;
        if (target.value.length > 1) {
          target.value = target.value[1];
          event.preventDefault();
          return;
        }
        if (!target.value.match(/\d/g) && onlyNumber) {
          target.value = target.value.replace(/[^0-9.]+/g, "");
          event.preventDefault();
          return;
        }
        setCode(currentCode => [...currentCode, target.value]);
      };
      const setFocus = () => refs.current[code.length]?.focus();
      const cls = className ? `${className} code-inputs` : "code-inputs";
      (0, _react.useEffect)(() => {
        if (refs.current[code.length]) refs.current[code.length].focus();
        onCodeFull(code.join(""));
      }, [code, length]);
      (0, _react.useEffect)(() => {
        setCode([]);
      }, [reset]);
      const output = [...Array(length)].map((_, i) => _react.default.createElement(_input.default, {
        value: code[i] ?? "",
        key: i.toString(),
        ref: el => {
          refs.current[i] = el;
        },
        onChange: preventDefault,
        onKeyDown: onClean,
        onFocus: setFocus
      }));
      return _react.default.createElement("div", {
        className: cls
      }, output);
    }
    InputCode2.defaultPros = {
      onCodeFull: defaultOnCodeFull,
      length: 6
    };
  }
});
ims.set("./input", {
  hash: 31162077,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = require2("react");
    var _default = exports.default = _react.default.forwardRef(function Input(props, ref) {
      const className = _react.default.useMemo(() => {
        const propsClassName = props.className ?? "";
        const filledClassName = Boolean(String(props.value ?? "").length) ? "filled" : "";
        return `box ${propsClassName} ${filledClassName}`;
      }, [props.value, props.className]);
      return _react.default.createElement("input", {
        ...props,
        maxLength: 1,
        type: "text",
        inputMode: "numeric",
        className,
        ref
      });
    });
  }
});
__pkg.exports.descriptor = [{
  "im": "./code-input",
  "from": "InputCode",
  "name": "InputCode"
}];
var InputCode;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "InputCode") && (InputCode = require2 ? require2("./code-input").InputCode : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3ByYWdtYXRlLXVpL2NvZGUtdmVyaWZpY2F0aW9uLjAuMS4yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByYWdtYXRlLXVpL2NvZGUtdmVyaWZpY2F0aW9uL19fc291cmNlcy9jb2RlLXZlcmlmaWNhdGlvbi9jb2RlL3RzL2NvZGUtaW5wdXQudHN4IiwiLi4vbm9kZV9tb2R1bGVzL3ByYWdtYXRlLXVpL2NvZGUtdmVyaWZpY2F0aW9uL19fc291cmNlcy9jb2RlLXZlcmlmaWNhdGlvbi9jb2RlL3RzL2lucHV0LnRzeCJdLCJuYW1lcyI6WyJjb2RlX3ZlcmlmaWNhdGlvbl8wXzFfMl9leHBvcnRzIiwiX19leHBvcnQiLCJJbnB1dENvZGUiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiX3JlYWN0IiwicmVxdWlyZTIiLCJfaW5wdXQiLCJkZWZhdWx0T25Db2RlRnVsbCIsIklucHV0Q29kZTIiLCJsZW5ndGgiLCJvbkNvZGVGdWxsIiwiY2xhc3NOYW1lIiwib25seU51bWJlciIsInJlc2V0IiwiY29kZSIsInNldENvZGUiLCJ1c2VTdGF0ZSIsInJlZnMiLCJ1c2VSZWYiLCJBcnJheSIsIm9uQ2xlYW4iLCJldmVudCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJ3aGljaCIsImtleSIsInRvTG93ZXJDYXNlIiwic2xpY2UiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsIm1hdGNoIiwicmVwbGFjZSIsImN1cnJlbnRDb2RlIiwic2V0Rm9jdXMiLCJjdXJyZW50IiwiZm9jdXMiLCJjbHMiLCJ1c2VFZmZlY3QiLCJqb2luIiwib3V0cHV0IiwibWFwIiwiXyIsImkiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsInRvU3RyaW5nIiwicmVmIiwiZWwiLCJvbkNoYW5nZSIsIm9uS2V5RG93biIsIm9uRm9jdXMiLCJkZWZhdWx0UHJvcyIsIl9kZWZhdWx0IiwiZm9yd2FyZFJlZiIsIklucHV0IiwicHJvcHMiLCJ1c2VNZW1vIiwicHJvcHNDbGFzc05hbWUiLCJmaWxsZWRDbGFzc05hbWUiLCJCb29sZWFuIiwiU3RyaW5nIiwibWF4TGVuZ3RoIiwidHlwZSIsImlucHV0TW9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSwrQkFBQTtBQUFBQyxRQUFBLENBQUFELCtCQUFBO0VBQUFFLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFQLCtCQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQSxJQUFBUSxNQUFBLEdBQUFDLFFBQUE7SUFDQSxJQUFBQyxNQUFBLEdBQUFELFFBQUE7SUFRQSxNQUFNRSxpQkFBQSxHQUFvQ0EsQ0FBQSxLQUFNO0lBVS9CLFNBQVVDLFdBQVU7TUFBRUMsTUFBQTtNQUFRQyxVQUFBO01BQVlDLFNBQUE7TUFBV0MsVUFBQTtNQUFZQztJQUFLLEdBQVU7TUFFaEcsTUFBTSxDQUFDQyxJQUFBLEVBQU1DLE9BQU8sS0FBSSxHQUFBWCxNQUFBLENBQUFZLFFBQUEsRUFBZSxFQUFFO01BQ3pDLE1BQU1DLElBQUEsSUFBNkMsR0FBQWIsTUFBQSxDQUFBYyxNQUFBLEVBQTJCQyxLQUFBLENBQU1WLE1BQU0sQ0FBQztNQUMzRixNQUFNVyxPQUFBLEdBQVdDLEtBQUEsSUFBZ0Q7UUFDaEVDLE1BQUEsQ0FBT0MsVUFBQSxDQUFXLE1BQUs7VUFDdEIsSUFBSUYsS0FBQSxDQUFNRyxLQUFBLEtBQVUsS0FBS0gsS0FBQSxDQUFNSSxHQUFBLEVBQUtDLFdBQUEsQ0FBVyxNQUFPLGFBQWE7WUFDbEUsSUFBSVosSUFBQSxDQUFLTCxNQUFBLEVBQVFNLE9BQUEsQ0FBUUQsSUFBQSxDQUFLYSxLQUFBLENBQU0sR0FBR2IsSUFBQSxDQUFLTCxNQUFBLEdBQVMsQ0FBQyxDQUFDO1lBQ3ZEOztRQUVGLEdBQUcsQ0FBQztNQUNMO01BRUEsTUFBTW1CLGNBQUEsR0FBa0JQLEtBQUEsSUFBOEM7UUFDckUsTUFBTVEsTUFBQSxHQUF5Q1IsS0FBQSxDQUFNUyxhQUFBO1FBQ3JELElBQUlELE1BQUEsQ0FBT0UsS0FBQSxDQUFNdEIsTUFBQSxHQUFTLEdBQUc7VUFDNUJvQixNQUFBLENBQU9FLEtBQUEsR0FBUUYsTUFBQSxDQUFPRSxLQUFBLENBQU07VUFDNUJWLEtBQUEsQ0FBTU8sY0FBQSxDQUFjO1VBQ3BCOztRQUVELElBQUksQ0FBQ0MsTUFBQSxDQUFPRSxLQUFBLENBQU1DLEtBQUEsQ0FBTSxLQUFLLEtBQUtwQixVQUFBLEVBQVk7VUFDN0NpQixNQUFBLENBQU9FLEtBQUEsR0FBUUYsTUFBQSxDQUFPRSxLQUFBLENBQU1FLE9BQUEsQ0FBUSxhQUFhLEVBQUU7VUFDbkRaLEtBQUEsQ0FBTU8sY0FBQSxDQUFjO1VBQ3BCOztRQUVEYixPQUFBLENBQVNtQixXQUFBLElBQXFDLENBQUMsR0FBR0EsV0FBQSxFQUFhTCxNQUFBLENBQU9FLEtBQUssQ0FBQztNQUM3RTtNQUVBLE1BQU1JLFFBQUEsR0FBV0EsQ0FBQSxLQUFZbEIsSUFBQSxDQUFLbUIsT0FBQSxDQUFRdEIsSUFBQSxDQUFLTCxNQUFBLEdBQVM0QixLQUFBLENBQUs7TUFDN0QsTUFBTUMsR0FBQSxHQUFjM0IsU0FBQSxHQUFZLEdBQUdBLFNBQUEsaUJBQTBCO01BQzdELElBQUFQLE1BQUEsQ0FBQW1DLFNBQUEsRUFBVSxNQUFLO1FBQ2QsSUFBSXRCLElBQUEsQ0FBS21CLE9BQUEsQ0FBUXRCLElBQUEsQ0FBS0wsTUFBQSxHQUFTUSxJQUFBLENBQUttQixPQUFBLENBQVF0QixJQUFBLENBQUtMLE1BQUEsRUFBUTRCLEtBQUEsQ0FBSztRQUM5RDNCLFVBQUEsQ0FBV0ksSUFBQSxDQUFLMEIsSUFBQSxDQUFLLEVBQUUsQ0FBQztNQUN6QixHQUFHLENBQUMxQixJQUFBLEVBQU1MLE1BQU0sQ0FBQztNQUVqQixJQUFBTCxNQUFBLENBQUFtQyxTQUFBLEVBQVUsTUFBSztRQUNkeEIsT0FBQSxDQUFRLEVBQUU7TUFDWCxHQUFHLENBQUNGLEtBQUssQ0FBQztNQUNWLE1BQU00QixNQUFBLEdBQTZCLENBQUMsR0FBR3RCLEtBQUEsQ0FBTVYsTUFBTSxDQUFDLEVBQUVpQyxHQUFBLENBQ3JELENBQUNDLENBQUEsRUFBR0MsQ0FBQSxLQUNIeEMsTUFBQSxDQUFBeUMsT0FBQSxDQUFBQyxhQUFBLENBQUN4QyxNQUFBLENBQUF1QyxPQUFBLEVBQUs7UUFDTGQsS0FBQSxFQUFPakIsSUFBQSxDQUFLOEIsQ0FBQSxLQUFNO1FBQ2xCbkIsR0FBQSxFQUFLbUIsQ0FBQSxDQUFFRyxRQUFBLENBQVE7UUFDZkMsR0FBQSxFQUFNQyxFQUFBLElBQThCO1VBQ25DaEMsSUFBQSxDQUFLbUIsT0FBQSxDQUFRUSxDQUFBLElBQUtLLEVBQUE7UUFDbkI7UUFDQUMsUUFBQSxFQUFVdEIsY0FBQTtRQUNWdUIsU0FBQSxFQUFXL0IsT0FBQTtRQUNYZ0MsT0FBQSxFQUFTakI7TUFBUSxFQUVsQjtNQUdGLE9BQU8vQixNQUFBLENBQUF5QyxPQUFBLENBQUFDLGFBQUE7UUFBS25DLFNBQUEsRUFBVzJCO01BQUcsR0FBR0csTUFBTTtJQUNwQztJQUNBakMsVUFBQSxDQUFVNkMsV0FBQSxHQUFjO01BQ3ZCM0MsVUFBQSxFQUFZSCxpQkFBQTtNQUNaRSxNQUFBLEVBQVE7Ozs7Ozs7Ozs7Ozs7SUM1RVQsSUFBQUwsTUFBQSxHQUFBQyxRQUFBO0lBQTBCLElBQUFpRCxRQUFBLEdBQUFwRCxPQUFBLENBQUEyQyxPQUFBLEdBU1h6QyxNQUFBLENBQUF5QyxPQUFBLENBQU1VLFVBQUEsQ0FBVyxTQUFTQyxNQUFNQyxLQUFBLEVBQWVULEdBQUEsRUFBc0M7TUFDbkcsTUFBTXJDLFNBQUEsR0FBb0JQLE1BQUEsQ0FBQXlDLE9BQUEsQ0FBTWEsT0FBQSxDQUFRLE1BQWE7UUFDcEQsTUFBTUMsY0FBQSxHQUF5QkYsS0FBQSxDQUFNOUMsU0FBQSxJQUFhO1FBQ2xELE1BQU1pRCxlQUFBLEdBQWlDQyxPQUFBLENBQVFDLE1BQUEsQ0FBT0wsS0FBQSxDQUFNMUIsS0FBQSxJQUFTLEVBQUUsRUFBRXRCLE1BQU0sSUFBSSxXQUFXO1FBQzlGLE9BQU8sT0FBT2tELGNBQUEsSUFBa0JDLGVBQUE7TUFDakMsR0FBRyxDQUFDSCxLQUFBLENBQU0xQixLQUFBLEVBQU8wQixLQUFBLENBQU05QyxTQUFTLENBQUM7TUFFakMsT0FBT1AsTUFBQSxDQUFBeUMsT0FBQSxDQUFBQyxhQUFBO1FBQUEsR0FBV1csS0FBQTtRQUFPTSxTQUFBLEVBQVc7UUFBR0MsSUFBQSxFQUFLO1FBQU9DLFNBQUEsRUFBVTtRQUFVdEQsU0FBQTtRQUFzQnFDO01BQVE7SUFDdEcsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3dvcmtmbG93L291dCJ9