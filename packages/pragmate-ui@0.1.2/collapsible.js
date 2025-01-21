System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core","@beyond-js/kernel@0.1.9/styles","react@18.2.0","@popperjs/core@2.11.8","tippy.js@6.3.7","@beyond-js/kernel@0.1.9/routing","pragmate-ui@0.1.2/ripple","pragmate-ui@0.1.2/icons"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["react","18.2.0"],["@popperjs/core","2.11.8"],["tippy.js","6.3.7"],["pragmate-ui","0.1.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('@popperjs/core@2.11.8', dep), dep => dependencies.set('tippy.js@6.3.7', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/routing', dep), dep => dependencies.set('pragmate-ui@0.1.2/ripple', dep), dep => dependencies.set('pragmate-ui@0.1.2/icons', dep)],
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

// .beyond/uimport/pragmate-ui/collapsible.0.1.2.js
var collapsible_0_1_2_exports = {};
__export(collapsible_0_1_2_exports, {
  Accordion: () => Accordion,
  CollapsibleContainer: () => CollapsibleContainer,
  CollapsibleContent: () => CollapsibleContent,
  CollapsibleHeader: () => CollapsibleHeader,
  Container: () => Container,
  Header: () => Header,
  Item: () => Item,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(collapsible_0_1_2_exports);

// node_modules/pragmate-ui/collapsible/collapsible.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/styles"), 0);
var dependency_2 = __toESM(require("react@18.2.0"), 0);
var dependency_3 = __toESM(require("pragmate-ui@0.1.2/icons"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "pragmate-ui@0.1.2/collapsible"
  },
  "type": "code"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/styles", dependency_1], ["react", dependency_2], ["pragmate-ui/icons", dependency_3]]);
brequire("@beyond-js/kernel/styles").styles.register("pragmate-ui@0.1.2/collapsible");
var ims = /* @__PURE__ */new Map();
ims.set("./accordion", {
  hash: 3055160805,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.AccordionContext = exports.Accordion = void 0;
    exports.Container = Container2;
    exports.Header = Header2;
    exports.Item = Item2;
    exports.useAccordionContext = void 0;
    var _react = require2("react");
    var _icons = require2("pragmate-ui/icons");
    const AccordionContext = exports.AccordionContext = _react.default.createContext({});
    const useAccordionContext = () => _react.default.useContext(AccordionContext);
    exports.useAccordionContext = useAccordionContext;
    function Header2({
      disabled,
      children,
      index
    }) {
      const {
        setOpened,
        opened
      } = useAccordionContext();
      const onClick = event => {
        event.stopPropagation();
        event.currentTarget.classList.toggle("accordion-item__header-icon--opened");
        setOpened(index === opened ? false : index);
      };
      const attrs = {};
      if (!disabled) attrs.onClick = onClick;
      return _react.default.createElement("header", {
        ...attrs,
        className: "accordion-item__header"
      }, children, _react.default.createElement("div", {
        className: "accordion-item__header-icon"
      }, _react.default.createElement(_icons.IconButton, {
        icon: "chevronRight",
        className: "circle"
      })));
    }
    function Item2({
      disabled,
      children,
      title,
      index
    }) {
      const {
        opened
      } = useAccordionContext();
      let cls = `accordion-item${index === opened ? ` accordion-item--opened` : ``}`;
      if (disabled) cls += ` accordion-item--disabled`;
      return _react.default.createElement("article", {
        className: cls
      }, title && _react.default.createElement(Header2, {
        disabled,
        index
      }, title), _react.default.createElement("div", {
        className: "accordion-item__content"
      }, children));
    }
    function Container2({
      children,
      active = 0
    }) {
      const [opened, setOpened] = _react.default.useState(active);
      const onChange = event => {};
      const value = {
        onChange,
        opened,
        setOpened
      };
      _react.default.useEffect(() => setOpened(active), [active]);
      const output = _react.default.Children.map(children, (child, index) => {
        return _react.default.cloneElement(child, {
          index
        });
      });
      return _react.default.createElement(AccordionContext.Provider, {
        value
      }, _react.default.createElement("div", {
        className: "accordion"
      }, output));
    }
    const Accordion2 = exports.Accordion = {
      Header: Header2,
      Item: Item2,
      Container: Container2
    };
  }
});
ims.set("./content", {
  hash: 878084793,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CollapsibleContent = CollapsibleContent2;
    var _react = require2("react");
    var _context = require2("./context");
    function CollapsibleContent2({
      className,
      children
    }) {
      const {
        open
      } = (0, _context.useCollapsibleContext)();
      const cls = `collapsible__content${className ? ` ${className}` : ""} ${open ? " collapsible__content--opened" : ""}`;
      return _react.default.createElement("section", {
        className: cls
      }, children);
    }
  }
});
ims.set("./context", {
  hash: 4042704803,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.useCollapsibleContext = exports.CollapsibleContext = void 0;
    var _react = require2("react");
    const CollapsibleContext = exports.CollapsibleContext = _react.default.createContext(null);
    const useCollapsibleContext = () => _react.default.useContext(CollapsibleContext);
    exports.useCollapsibleContext = useCollapsibleContext;
  }
});
ims.set("./header", {
  hash: 1351256156,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CollapsibleHeader = CollapsibleHeader2;
    var _react = require2("react");
    var _context = require2("./context");
    var _icons = require2("pragmate-ui/icons");
    function CollapsibleHeader2({
      children,
      className,
      toggleTitle = true
    }) {
      const {
        setOpen,
        onToggle,
        open
      } = (0, _context.useCollapsibleContext)();
      const onClick = async () => {
        if (onToggle) await onToggle(!open);
        setOpen(!open);
      };
      const cls = `collapsible__header ${className ? ` ${className}` : ""} ${open ? "open" : ""}`;
      const clsButton = `collapsible__button ${open ? " collapsible__button--opened" : ""}`;
      const attrs = {
        className: cls
      };
      if (toggleTitle) {
        attrs.onClick = onClick;
      }
      return _react.default.createElement("header", {
        ...attrs
      }, _react.default.createElement("div", {
        className: "collapsible__header-content"
      }, children), _react.default.createElement(_icons.IconButton, {
        onClick,
        className: clsButton,
        icon: "left"
      }));
    }
  }
});
ims.set("./index", {
  hash: 939190616,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CollapsibleContainer = CollapsibleContainer2;
    var _react = require2("react");
    var _context = require2("./context");
    function CollapsibleContainer2({
      children,
      onToggle,
      open = false,
      className
    }) {
      open;
      const [opened, setOpen] = _react.default.useState(open);
      const value = {
        open: opened,
        setOpen,
        onToggle
      };
      const cls = `collapsible__container ${className ? ` ${className}` : ""} `;
      return _react.default.createElement(_context.CollapsibleContext.Provider, {
        value
      }, _react.default.createElement("article", {
        className: cls
      }, children));
    }
  }
});
__pkg.exports.descriptor = [{
  "im": "./accordion",
  "from": "Header",
  "name": "Header"
}, {
  "im": "./accordion",
  "from": "Item",
  "name": "Item"
}, {
  "im": "./accordion",
  "from": "Container",
  "name": "Container"
}, {
  "im": "./accordion",
  "from": "Accordion",
  "name": "Accordion"
}, {
  "im": "./content",
  "from": "CollapsibleContent",
  "name": "CollapsibleContent"
}, {
  "im": "./header",
  "from": "CollapsibleHeader",
  "name": "CollapsibleHeader"
}, {
  "im": "./index",
  "from": "CollapsibleContainer",
  "name": "CollapsibleContainer"
}];
var Header, Item, Container, Accordion, CollapsibleContent, CollapsibleHeader, CollapsibleContainer;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "Header") && (Header = require2 ? require2("./accordion").Header : value);
  (require2 || prop === "Item") && (Item = require2 ? require2("./accordion").Item : value);
  (require2 || prop === "Container") && (Container = require2 ? require2("./accordion").Container : value);
  (require2 || prop === "Accordion") && (Accordion = require2 ? require2("./accordion").Accordion : value);
  (require2 || prop === "CollapsibleContent") && (CollapsibleContent = require2 ? require2("./content").CollapsibleContent : value);
  (require2 || prop === "CollapsibleHeader") && (CollapsibleHeader = require2 ? require2("./header").CollapsibleHeader : value);
  (require2 || prop === "CollapsibleContainer") && (CollapsibleContainer = require2 ? require2("./index").CollapsibleContainer : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9wcmFnbWF0ZS11aS9jb2xsYXBzaWJsZS4wLjEuMi5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmFnbWF0ZS11aS9jb2xsYXBzaWJsZS9fX3NvdXJjZXMvY29sbGFwc2libGUvdHMvYWNjb3JkaW9uLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9wcmFnbWF0ZS11aS9jb2xsYXBzaWJsZS9fX3NvdXJjZXMvY29sbGFwc2libGUvdHMvY29udGVudC50c3giLCIuLi9ub2RlX21vZHVsZXMvcHJhZ21hdGUtdWkvY29sbGFwc2libGUvX19zb3VyY2VzL2NvbGxhcHNpYmxlL3RzL2NvbnRleHQudHN4IiwiLi4vbm9kZV9tb2R1bGVzL3ByYWdtYXRlLXVpL2NvbGxhcHNpYmxlL19fc291cmNlcy9jb2xsYXBzaWJsZS90cy9oZWFkZXIudHN4IiwiLi4vbm9kZV9tb2R1bGVzL3ByYWdtYXRlLXVpL2NvbGxhcHNpYmxlL19fc291cmNlcy9jb2xsYXBzaWJsZS90cy9pbmRleC50c3giXSwibmFtZXMiOlsiY29sbGFwc2libGVfMF8xXzJfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQWNjb3JkaW9uIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJDb2xsYXBzaWJsZUhlYWRlciIsIkNvbnRhaW5lciIsIkhlYWRlciIsIkl0ZW0iLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiX3JlYWN0IiwicmVxdWlyZTIiLCJfaWNvbnMiLCJBY2NvcmRpb25Db250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VBY2NvcmRpb25Db250ZXh0IiwidXNlQ29udGV4dCIsIkhlYWRlcjIiLCJkaXNhYmxlZCIsImNoaWxkcmVuIiwiaW5kZXgiLCJzZXRPcGVuZWQiLCJvcGVuZWQiLCJvbkNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50VGFyZ2V0IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiYXR0cnMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbkJ1dHRvbiIsImljb24iLCJJdGVtMiIsInRpdGxlIiwiY2xzIiwiQ29udGFpbmVyMiIsImFjdGl2ZSIsInVzZVN0YXRlIiwib25DaGFuZ2UiLCJ2YWx1ZSIsInVzZUVmZmVjdCIsIm91dHB1dCIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJjbG9uZUVsZW1lbnQiLCJQcm92aWRlciIsIkFjY29yZGlvbjIiLCJfY29udGV4dCIsIkNvbGxhcHNpYmxlQ29udGVudDIiLCJvcGVuIiwidXNlQ29sbGFwc2libGVDb250ZXh0IiwiQ29sbGFwc2libGVDb250ZXh0IiwiQ29sbGFwc2libGVIZWFkZXIyIiwidG9nZ2xlVGl0bGUiLCJzZXRPcGVuIiwib25Ub2dnbGUiLCJjbHNCdXR0b24iLCJDb2xsYXBzaWJsZUNvbnRhaW5lcjIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEseUJBQUE7QUFBQUMsUUFBQSxDQUFBRCx5QkFBQTtFQUFBRSxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxvQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG9CQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBYix5QkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJ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SUFTa0IsU0FBVWtELHNCQUFxQjtNQUNoRHpDLFFBQUE7TUFDQXVDLFFBQUE7TUFDQU4sSUFBQSxHQUFPO01BQ1ByQjtJQUFTLEdBQ1E7TUFDakJxQixJQUFBO01BQ0EsTUFBTSxDQUFDOUIsTUFBQSxFQUFRbUMsT0FBTyxJQUFJaEQsTUFBQSxDQUFBSSxPQUFBLENBQU0wQixRQUFBLENBQVNhLElBQUk7TUFDN0MsTUFBTVgsS0FBQSxHQUFRO1FBQUVXLElBQUEsRUFBTTlCLE1BQUE7UUFBUW1DLE9BQUE7UUFBU0M7TUFBUTtNQUMvQyxNQUFNdEIsR0FBQSxHQUFNLDBCQUEwQkwsU0FBQSxHQUFZLElBQUlBLFNBQUEsS0FBYztNQUVwRSxPQUNDdEIsTUFBQSxDQUFBSSxPQUFBLENBQUFpQixhQUFBLENBQUNvQixRQUFBLENBQUFJLGtCQUFBLENBQW1CTixRQUFBLEVBQVE7UUFBQ1A7TUFBWSxHQUN4Q2hDLE1BQUEsQ0FBQUksT0FBQSxDQUFBaUIsYUFBQTtRQUFTQyxTQUFBLEVBQVdLO01BQUcsR0FBR2pCLFFBQVEsQ0FBVztJQUdoRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3dvcmtmbG93L291dCJ9