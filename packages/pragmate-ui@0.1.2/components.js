System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core","@beyond-js/kernel@0.1.9/styles","react@18.2.0","@popperjs/core@2.11.8","tippy.js@6.3.7","@beyond-js/kernel@0.1.9/routing","pragmate-ui@0.1.2/ripple","pragmate-ui@0.1.2/icons","pragmate-ui@0.1.2/spinner"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["react","18.2.0"],["@popperjs/core","2.11.8"],["tippy.js","6.3.7"],["pragmate-ui","0.1.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('@popperjs/core@2.11.8', dep), dep => dependencies.set('tippy.js@6.3.7', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/routing', dep), dep => dependencies.set('pragmate-ui@0.1.2/ripple', dep), dep => dependencies.set('pragmate-ui@0.1.2/icons', dep), dep => dependencies.set('pragmate-ui@0.1.2/spinner', dep)],
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

// .beyond/uimport/pragmate-ui/components.0.1.2.js
var components_0_1_2_exports = {};
__export(components_0_1_2_exports, {
  Button: () => Button,
  ButtonGroup: () => ButtonGroup,
  HtmlWrapper: () => HtmlWrapper,
  Link: () => Link,
  Spinner: () => Spinner,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(components_0_1_2_exports);

// node_modules/pragmate-ui/components/components.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/styles"), 0);
var dependency_2 = __toESM(require("react@18.2.0"), 0);
var dependency_3 = __toESM(require("pragmate-ui@0.1.2/icons"), 0);
var dependency_4 = __toESM(require("pragmate-ui@0.1.2/spinner"), 0);
var dependency_5 = __toESM(require("pragmate-ui@0.1.2/ripple"), 0);
var dependency_6 = __toESM(require("tippy.js@6.3.7"), 0);
var dependency_7 = __toESM(require("@beyond-js/kernel@0.1.9/routing"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "pragmate-ui@0.1.2/components"
  },
  "type": "code"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/styles", dependency_1], ["react", dependency_2], ["pragmate-ui/icons", dependency_3], ["pragmate-ui/spinner", dependency_4], ["pragmate-ui/ripple", dependency_5], ["tippy.js", dependency_6], ["@beyond-js/kernel/routing", dependency_7]]);
brequire("@beyond-js/kernel/styles").styles.register("pragmate-ui@0.1.2/components");
var ims = /* @__PURE__ */new Map();
ims.set("./button-group/button-group", {
  hash: 3592527677,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ButtonGroup = ButtonGroup2;
    var _react = require2("react");
    var _context = require2("./context");
    function ButtonGroup2({
      orientation = "row",
      children,
      ...props
    }) {
      const [selected, setSelected] = _react.default.useState(props.selected);
      let cls = `pui-button-group`;
      cls += orientation ? ` pui-button-group ${orientation}` : "";
      let disabled = !!props.disabled;
      const childrenWithProps = _react.default.Children.map(children, (child, index) => {
        if (_react.default.isValidElement(child)) {
          return _react.default.cloneElement(child, {
            index,
            disabled
          });
        }
      });
      return _react.default.createElement(_context.ButtonGroupContext.Provider, {
        value: {
          selected,
          setSelected
        }
      }, _react.default.createElement("div", {
        className: cls
      }, childrenWithProps));
    }
  }
});
ims.set("./button-group/context", {
  hash: 2338960457,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.useButtonGroupContext = exports.ButtonGroupContext = void 0;
    var _react = require2("react");
    const ButtonGroupContext = exports.ButtonGroupContext = _react.default.createContext({});
    const useButtonGroupContext = () => _react.default.useContext(ButtonGroupContext);
    exports.useButtonGroupContext = useButtonGroupContext;
  }
});
ims.set("./button-group/type", {
  hash: 872288252,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./button/button", {
  hash: 2399192517,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Button = void 0;
    var _react = require2("react");
    var _icons = require2("pragmate-ui/icons");
    var _spinner = require2("pragmate-ui/spinner");
    var _ripple = require2("pragmate-ui/ripple");
    var _tippy = require2("tippy.js");
    var _context = require2("../button-group/context");
    const {
      forwardRef
    } = _react.default;
    const Button2 = exports.Button = forwardRef((props, ref) => {
      const {
        className,
        onClick,
        data,
        label,
        title,
        children,
        icon,
        loading,
        block,
        index,
        fetching = false,
        variant = "default",
        bordered = false,
        sizing = "md",
        disabled = false,
        ...otherProps
      } = props;
      const context = _react.default.useContext(_context.ButtonGroupContext);
      const [processing, setProcessing] = _react.default.useState(fetching || loading);
      const refObject = _react.default.useRef(null);
      const combinedRef = instance => {
        refObject.current = instance;
        if (typeof ref === "function") ref(instance);else if (ref) ref.current = instance;
      };
      const usingContext = typeof context?.setSelected === "function";
      const onClickButton = async event => {
        if (usingContext) {
          context.setSelected(index);
        }
        if (onClick && typeof onClick === "function") {
          setProcessing(true);
          await onClick(event);
          setProcessing(false);
          return;
        }
      };
      _react.default.useEffect(() => {
        const ripple = new _ripple.RippleEffect();
        ripple.addRippleEffect(refObject.current);
        if (title) {
          (0, _tippy.default)(refObject.current);
        }
      }, [title]);
      const properties = {
        ...otherProps,
        type: props.type ? props.type : "button"
      };
      if (title) properties["data-tippy-content"] = title;
      if (data) {
        Object.keys(data).forEach(entry => {
          properties[`data-${entry}`] = data[entry];
        });
      }
      let cls = `pui-button btn-${variant}`;
      cls += className ? ` ${className}` : "";
      cls += bordered ? " outline" : "";
      cls += icon ? " has-icon" : "";
      cls += block ? " btn--block" : "";
      cls += sizing ? ` btn--${sizing}` : "";
      cls += loading || fetching || processing ? " btn--loading" : "";
      const clsLoading = `button-label ${loading || processing ? "button-label--loading" : ""}`;
      if (usingContext && context.selected === index) cls += " pui-btn--active";
      if (usingContext) properties["data-index"] = index;
      return _react.default.createElement("button", {
        ref: combinedRef,
        className: cls,
        onClick: onClickButton,
        disabled: loading || disabled || processing,
        ...properties
      }, icon && _react.default.createElement(_icons.Icon, {
        icon
      }), label || children && _react.default.createElement("div", {
        className: clsLoading
      }, label || children), (loading || fetching || processing) && _react.default.createElement(_spinner.Spinner, {
        type: `on-${variant}`,
        active: true
      }));
    });
  }
});
ims.set("./button/interface", {
  hash: 2774588843,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./html-render", {
  hash: 1778164068,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.HtmlWrapper = HtmlWrapper2;
    var _react = require2("react");
    function HtmlWrapper2({
      children,
      tag = "span"
    }) {
      const Control = tag;
      return _react.default.createElement(Control, {
        dangerouslySetInnerHTML: {
          __html: children
        }
      });
    }
  }
});
ims.set("./link", {
  hash: 1920375694,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Link = Link2;
    var _react = require2("react");
    var _routing = require2("@beyond-js/kernel/routing");
    function Link2({
      href,
      ...props
    }) {
      const isExternal = props.target === "_blank";
      const onClick = async event => {
        if (isExternal) return;
        event.preventDefault();
        event.stopPropagation();
        if (props.onClick && typeof props.onClick === "function") {
          await props.onClick(event);
        }
        if (href) _routing.routing.pushState(href);
      };
      const properties = {
        ...props
      };
      ["href", "onClick"].forEach(prop => delete properties[prop]);
      return _react.default.createElement("a", {
        ...properties,
        href,
        onClick,
        target: props.target
      }, props.children);
    }
  }
});
ims.set("./spinner", {
  hash: 4243581074,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Spinner = void 0;
    var _react = require2("react");
    const Component = (props, ref) => {
      let {
        color,
        className,
        size,
        type,
        active
      } = props;
      size = size ? size : "xs";
      const types = ["on-primary", "on-secondary", "on-surface", "on-error", "primary", "secondary", "tertiary"];
      const clsType = types.includes(type) ? type : "primary";
      const style = {};
      if (color) style.stroke = color;
      className = `${clsType}${className ? ` ${className}` : ""}`;
      let cls = `${className ? `${className} ` : ""}pragmate-element-spinner spinner--${size}`;
      if (active) cls += " is-active";
      return _react.default.createElement("div", {
        className: cls,
        ref
      }, _react.default.createElement("svg", {
        viewBox: "0 0 100 100"
      }, _react.default.createElement("circle", {
        cx: "50",
        cy: "50",
        r: "30",
        style
      })));
    };
    const Spinner2 = exports.Spinner = (0, _react.forwardRef)(Component);
  }
});
__pkg.exports.descriptor = [{
  "im": "./button-group/button-group",
  "from": "ButtonGroup",
  "name": "ButtonGroup"
}, {
  "im": "./button/button",
  "from": "Button",
  "name": "Button"
}, {
  "im": "./html-render",
  "from": "HtmlWrapper",
  "name": "HtmlWrapper"
}, {
  "im": "./link",
  "from": "Link",
  "name": "Link"
}, {
  "im": "./spinner",
  "from": "Spinner",
  "name": "Spinner"
}];
var ButtonGroup, Button, HtmlWrapper, Link, Spinner;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "ButtonGroup") && (ButtonGroup = require2 ? require2("./button-group/button-group").ButtonGroup : value);
  (require2 || prop === "Button") && (Button = require2 ? require2("./button/button").Button : value);
  (require2 || prop === "HtmlWrapper") && (HtmlWrapper = require2 ? require2("./html-render").HtmlWrapper : value);
  (require2 || prop === "Link") && (Link = require2 ? require2("./link").Link : value);
  (require2 || prop === "Spinner") && (Spinner = require2 ? require2("./spinner").Spinner : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9wcmFnbWF0ZS11aS9jb21wb25lbnRzLjAuMS4yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByYWdtYXRlLXVpL2NvbXBvbmVudHMvX19zb3VyY2VzL2NvbXBvbmVudHMvdHMvYnV0dG9uLWdyb3VwL2J1dHRvbi1ncm91cC50c3giLCIuLi9ub2RlX21vZHVsZXMvcHJhZ21hdGUtdWkvY29tcG9uZW50cy9fX3NvdXJjZXMvY29tcG9uZW50cy90cy9idXR0b24tZ3JvdXAvY29udGV4dC50c3giLCIuLi9ub2RlX21vZHVsZXMvcHJhZ21hdGUtdWkvY29tcG9uZW50cy9fX3NvdXJjZXMvY29tcG9uZW50cy90eXBlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3ByYWdtYXRlLXVpL2NvbXBvbmVudHMvX19zb3VyY2VzL2NvbXBvbmVudHMvdHMvYnV0dG9uL2J1dHRvbi50c3giLCIuLi9ub2RlX21vZHVsZXMvcHJhZ21hdGUtdWkvY29tcG9uZW50cy9fX3NvdXJjZXMvY29tcG9uZW50cy9pbnRlcmZhY2UudHMiLCIuLi9ub2RlX21vZHVsZXMvcHJhZ21hdGUtdWkvY29tcG9uZW50cy9fX3NvdXJjZXMvY29tcG9uZW50cy90cy9odG1sLXJlbmRlci50c3giLCIuLi9ub2RlX21vZHVsZXMvcHJhZ21hdGUtdWkvY29tcG9uZW50cy9fX3NvdXJjZXMvY29tcG9uZW50cy90cy9saW5rLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9wcmFnbWF0ZS11aS9jb21wb25lbnRzL19fc291cmNlcy9jb21wb25lbnRzL3RzL3NwaW5uZXIudHN4Il0sIm5hbWVzIjpbImNvbXBvbmVudHNfMF8xXzJfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQnV0dG9uIiwiQnV0dG9uR3JvdXAiLCJIdG1sV3JhcHBlciIsIkxpbmsiLCJTcGlubmVyIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9yZWFjdCIsInJlcXVpcmUyIiwiX2NvbnRleHQiLCJCdXR0b25Hcm91cDIiLCJvcmllbnRhdGlvbiIsImNoaWxkcmVuIiwicHJvcHMiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwiY2xzIiwiZGlzYWJsZWQiLCJjaGlsZHJlbldpdGhQcm9wcyIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJpbmRleCIsImlzVmFsaWRFbGVtZW50IiwiY2xvbmVFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsIkJ1dHRvbkdyb3VwQ29udGV4dCIsIlByb3ZpZGVyIiwidmFsdWUiLCJjbGFzc05hbWUiLCJjcmVhdGVDb250ZXh0IiwidXNlQnV0dG9uR3JvdXBDb250ZXh0IiwidXNlQ29udGV4dCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2ljb25zIiwiX3NwaW5uZXIiLCJfcmlwcGxlIiwiX3RpcHB5IiwiZm9yd2FyZFJlZiIsIkJ1dHRvbjIiLCJyZWYiLCJvbkNsaWNrIiwiZGF0YSIsImxhYmVsIiwidGl0bGUiLCJpY29uIiwibG9hZGluZyIsImJsb2NrIiwiZmV0Y2hpbmciLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJzaXppbmciLCJvdGhlclByb3BzIiwiY29udGV4dCIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwicmVmT2JqZWN0IiwidXNlUmVmIiwiY29tYmluZWRSZWYiLCJpbnN0YW5jZSIsImN1cnJlbnQiLCJ1c2luZ0NvbnRleHQiLCJvbkNsaWNrQnV0dG9uIiwiZXZlbnQiLCJ1c2VFZmZlY3QiLCJyaXBwbGUiLCJSaXBwbGVFZmZlY3QiLCJhZGRSaXBwbGVFZmZlY3QiLCJwcm9wZXJ0aWVzIiwidHlwZSIsImtleXMiLCJmb3JFYWNoIiwiZW50cnkiLCJjbHNMb2FkaW5nIiwiSWNvbiIsImFjdGl2ZSIsIkh0bWxXcmFwcGVyMiIsInRhZyIsIkNvbnRyb2wiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIl9yb3V0aW5nIiwiTGluazIiLCJocmVmIiwiaXNFeHRlcm5hbCIsInRhcmdldCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicm91dGluZyIsInB1c2hTdGF0ZSIsInByb3AiLCJDb21wb25lbnQiLCJjb2xvciIsInNpemUiLCJ0eXBlcyIsImNsc1R5cGUiLCJpbmNsdWRlcyIsInN0eWxlIiwic3Ryb2tlIiwidmlld0JveCIsImN4IiwiY3kiLCJyIiwiU3Bpbm5lcjIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsd0JBQUE7QUFBQUMsUUFBQSxDQUFBRCx3QkFBQTtFQUFBRSxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBWCx3QkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBLElBQUFZLE1BQUEsR0FBQUMsUUFBQTtJQUVBLElBQUFDLFFBQUEsR0FBQUQsUUFBQTtJQUVpQixTQUFVRSxhQUFZO01BQUVDLFdBQUEsR0FBYztNQUFPQyxRQUFBO1NBQWFDO0lBQUssR0FBcUI7TUFDcEcsTUFBTSxDQUFDQyxRQUFBLEVBQVVDLFdBQVcsSUFBSVIsTUFBQSxDQUFBUyxPQUFBLENBQU1DLFFBQUEsQ0FBaUJKLEtBQUEsQ0FBTUMsUUFBUTtNQUNyRSxJQUFJSSxHQUFBLEdBQU07TUFDVkEsR0FBQSxJQUFPUCxXQUFBLEdBQWMscUJBQXFCQSxXQUFBLEtBQWdCO01BQzFELElBQUlRLFFBQUEsR0FBVyxDQUFDLENBQUNOLEtB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