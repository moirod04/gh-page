System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","@popperjs/core@2.11.8","tippy.js@6.3.7","@beyond-js/kernel@0.1.9/core","@beyond-js/kernel@0.1.9/routing","@beyond-js/kernel@0.1.9/styles","pragmate-ui@0.1.2/ripple","pragmate-ui@0.1.2/icons"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["react","18.2.0"],["@popperjs/core","2.11.8"],["tippy.js","6.3.7"],["pragmate-ui","0.1.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('@popperjs/core@2.11.8', dep), dep => dependencies.set('tippy.js@6.3.7', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/routing', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep), dep => dependencies.set('pragmate-ui@0.1.2/ripple', dep), dep => dependencies.set('pragmate-ui@0.1.2/icons', dep)],
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

// .beyond/uimport/pragmate-ui/image.0.1.2.js
var image_0_1_2_exports = {};
__export(image_0_1_2_exports, {
  Image: () => Image,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(image_0_1_2_exports);

// node_modules/pragmate-ui/image/image.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("react@18.2.0"), 0);
var dependency_2 = __toESM(require("pragmate-ui@0.1.2/icons"), 0);
var dependency_3 = __toESM(require("@beyond-js/kernel@0.1.9/styles"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "pragmate-ui@0.1.2/image"
  },
  "type": "code",
  "name": "image"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["react", dependency_1], ["pragmate-ui/icons", dependency_2], ["@beyond-js/kernel/styles", dependency_3]]);
brequire("@beyond-js/kernel/styles").styles.register("pragmate-ui@0.1.2/image");
var ims = /* @__PURE__ */new Map();
ims.set("./context", {
  hash: 818759056,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.useImageContext = exports.ImageContext = void 0;
    var React = require2("react");
    const ImageContext = exports.ImageContext = React.createContext({});
    const useImageContext = () => React.useContext(ImageContext);
    exports.useImageContext = useImageContext;
  }
});
ims.set("./error/index", {
  hash: 1634346444,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Error = Error2;
    var _react = require2("react");
    var _context = require2("../context");
    var _icons = require2("pragmate-ui/icons");
    function Error2() {
      const {
        src,
        onError
      } = (0, _context.useImageContext)();
      const onClickError = event => {
        event.stopPropagation();
        if (onError && typeof onError === "function") onError(event);
      };
      return _react.default.createElement("div", {
        "data-src": src,
        className: "content-error"
      }, onError && _react.default.createElement(_icons.IconButton, {
        onClick: onClickError,
        icon: "refresh"
      }));
    }
  }
});
ims.set("./hooks/use-loading", {
  hash: 971814615,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.useLoading = useLoading;
    var _react = require2("react");
    function useLoading(props) {
      const initialState = {
        size: "200x200",
        loaded: false
      };
      const [image, setImage] = (0, _react.useState)();
      const [state, setState] = (0, _react.useState)(initialState);
      const loadImage = (url, size) => {
        let finalSrc = url;
        const newImage = new globalThis.Image();
        newImage.onload = () => setState({
          ...state,
          loaded: true,
          error: false
        });
        newImage.onerror = () => setState({
          ...state,
          error: true,
          loaded: false
        });
        newImage.src = finalSrc;
        setImage(newImage);
        setState({
          ...state,
          url,
          size,
          src: finalSrc,
          loaded: true
        });
      };
      (0, _react.useEffect)(() => {
        const currentSrc = props.src;
        if (state.url !== currentSrc) {
          let size = props.size ?? state.size;
          loadImage(currentSrc, size);
        }
        return () => setImage({
          ...state,
          onload: void 0,
          onerror: void 0
        });
      }, [props.src]);
      return [state, setState];
    }
    ;
  }
});
ims.set("./img", {
  hash: 2913122704,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Img = Img;
    var _react = require2("react");
    var _context = require2("./context");
    function Img() {
      const {
        src,
        setState,
        state,
        loading,
        alt
      } = (0, _context.useImageContext)();
      const onLoad = () => setState({
        ...state,
        error: false,
        htmlLoaded: true
      });
      const loadingIMG = loading && loading === "eager" || loading === "lazy" ? loading : "eager";
      const altIMG = alt ?? " ";
      return _react.default.createElement("img", {
        src,
        onLoad,
        loading: loadingIMG,
        alt: altIMG
      });
    }
  }
});
ims.set("./index", {
  hash: 52781161,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Image = Image2;
    var _react = require2("react");
    var _context = require2("./context");
    var _error = require2("./error");
    var _img = require2("./img");
    var _sources = require2("./sources");
    var _useLoading = require2("./hooks/use-loading");
    function Image2(props) {
      const {
        className,
        onClick,
        children,
        sizeLoading
      } = props;
      const [state, setState] = (0, _useLoading.useLoading)(props);
      const {
        error,
        loaded,
        htmlLoaded
      } = state;
      let cls = `pui-image ${className ? ` ${className}` : ""}`;
      if (!loaded && !htmlLoaded) cls += " pui-image-preload";
      if (error) cls += " pui-image-error";
      const Content = error ? _error.Error : _img.Img;
      const properties = {
        ...props,
        className: cls,
        onClick
      };
      ["src", "alt", "onError", "children", "size", "loading", "error", "sources", "sizeLoading"].forEach(prop => delete properties[prop]);
      const value = {
        ...props,
        state,
        src: props.src,
        setState
      };
      const styles = {};
      if ((!loaded || !htmlLoaded || error) && !!sizeLoading && typeof sizeLoading === "object" && sizeLoading.height && sizeLoading.width) {
        styles.height = sizeLoading.height;
        styles.width = sizeLoading.width;
      }
      return _react.default.createElement(_context.ImageContext.Provider, {
        value
      }, _react.default.createElement("picture", {
        ...properties,
        style: styles,
        "data-src": props.src
      }, _react.default.createElement(_sources.Sources, null), _react.default.createElement(Content, null), children));
    }
  }
});
ims.set("./interfaces/index", {
  hash: 3464374419,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./sources/index", {
  hash: 1995365142,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Sources = Sources;
    var _react = require2("react");
    var _context = require2("../context");
    var _item = require2("./item");
    function Sources() {
      const {
        sources
      } = (0, _context.useImageContext)();
      if (!sources || !Array.isArray(sources) || !sources.length) return null;
      const output = sources.map(item => _react.default.createElement(_item.Item, {
        key: item.srcSet,
        ...item
      }));
      return _react.default.createElement(_react.default.Fragment, null, output);
    }
  }
});
ims.set("./sources/item", {
  hash: 377065182,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Item = Item;
    var _react = require2("react");
    function Item(props) {
      if (!props.srcSet) return null;
      let media = "";
      const {
        maxWidth,
        minWidth
      } = props;
      if (!maxWidth && !!minWidth) media = `(min-width: ${minWidth}px)`;
      if (!!maxWidth && !minWidth) media = `(max-width: ${maxWidth}px)`;
      if (!!maxWidth && !!minWidth) media = `(min-width: ${minWidth}px) and (max-width: ${maxWidth}px)`;
      const properties = {
        ...props
      };
      ["maxWidth", "minWidth"].forEach(item => delete properties[item]);
      return _react.default.createElement("source", {
        media,
        ...properties
      });
    }
    ;
  }
});
__pkg.exports.descriptor = [{
  "im": "./index",
  "from": "Image",
  "name": "Image"
}];
var Image;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "Image") && (Image = require2 ? require2("./index").Image : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9wcmFnbWF0ZS11aS9pbWFnZS4wLjEuMi5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmFnbWF0ZS11aS9pbWFnZS9fX3NvdXJjZXMvaW1hZ2UvdHMvY29udGV4dC50cyIsIi4uL25vZGVfbW9kdWxlcy9wcmFnbWF0ZS11aS9pbWFnZS9fX3NvdXJjZXMvaW1hZ2UvdHMvZXJyb3IvaW5kZXgudHN4IiwiLi4vbm9kZV9tb2R1bGVzL3ByYWdtYXRlLXVpL2ltYWdlL19fc291cmNlcy9pbWFnZS90cy9ob29rcy91c2UtbG9hZGluZy50cyIsIi4uL25vZGVfbW9kdWxlcy9wcmFnbWF0ZS11aS9pbWFnZS9fX3NvdXJjZXMvaW1hZ2UvdHMvaW1nLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9wcmFnbWF0ZS11aS9pbWFnZS9fX3NvdXJjZXMvaW1hZ2UvdHMvaW5kZXgudHN4IiwiLi4vbm9kZV9tb2R1bGVzL3ByYWdtYXRlLXVpL2ltYWdlL19fc291cmNlcy9pbWFnZS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9wcmFnbWF0ZS11aS9pbWFnZS9fX3NvdXJjZXMvaW1hZ2UvdHMvc291cmNlcy9pbmRleC50c3giLCIuLi9ub2RlX21vZHVsZXMvcHJhZ21hdGUtdWkvaW1hZ2UvX19zb3VyY2VzL2ltYWdlL3RzL3NvdXJjZXMvaXRlbS50c3giXSwibmFtZXMiOlsiaW1hZ2VfMF8xXzJfZXhwb3J0cyIsIl9fZXhwb3J0IiwiSW1hZ2UiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiUmVhY3QiLCJyZXF1aXJlMiIsIkltYWdlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VJbWFnZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3JlYWN0IiwiX2NvbnRleHQiLCJfaWNvbnMiLCJFcnJvcjIiLCJzcmMiLCJvbkVycm9yIiwib25DbGlja0Vycm9yIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkljb25CdXR0b24iLCJvbkNsaWNrIiwiaWNvbiIsInVzZUxvYWRpbmciLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsInNpemUiLCJsb2FkZWQiLCJpbWFnZSIsInNldEltYWdlIiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwibG9hZEltYWdlIiwidXJsIiwiZmluYWxTcmMiLCJuZXdJbWFnZSIsImdsb2JhbFRoaXMiLCJvbmxvYWQiLCJlcnJvciIsIm9uZXJyb3IiLCJ1c2VFZmZlY3QiLCJjdXJyZW50U3JjIiwiSW1nIiwibG9hZGluZyIsImFsdCIsIm9uTG9hZCIsImh0bWxMb2FkZWQiLCJsb2FkaW5nSU1HIiwiYWx0SU1HIiwiX2Vycm9yIiwiX2ltZyIsIl9zb3VyY2VzIiwiX3VzZUxvYWRpbmciLCJJbWFnZTIiLCJjaGlsZHJlbiIsInNpemVMb2FkaW5nIiwiY2xzIiwiQ29udGVudCIsIkVycm9yIiwicHJvcGVydGllcyIsImZvckVhY2giLCJwcm9wIiwidmFsdWUiLCJzdHlsZXMiLCJoZWlnaHQiLCJ3aWR0aCIsIlByb3ZpZGVyIiwic3R5bGUiLCJTb3VyY2VzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfaXRlbSIsInNvdXJjZXMiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJvdXRwdXQiLCJtYXAiLCJpdGVtIiwiSXRlbSIsImtleSIsInNyY1NldCIsIkZyYWdtZW50IiwibWVkaWEiLCJtYXhXaWR0aCIsIm1pbldpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG1CQUFBO0FBQUFDLFFBQUEsQ0FBQUQsbUJBQUE7RUFBQUUsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFB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