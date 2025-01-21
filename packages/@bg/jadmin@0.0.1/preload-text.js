System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, PreloadText, __beyond_pkg, hmr;
  _export("PreloadText", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@bg/auth-api", "1.0.0"], ["@jadmin/ui", "1.0.0"], ["@bg/auth-models", null], ["@bgroup/jview", "1.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/widgets", "0.1.6"], ["@bgroup/data-model", "1.0.11"], ["@bgroup/ui", "0.0.38"], ["chart.js", "4.4.4"], ["dayjs", "1.11.13"], ["dotenv", "16.4.5"], ["framer-motion", "6.5.1"], ["googleapis", "120.0.0"], ["mysql2", "3.11.0"], ["perfect-scrollbar", "1.5.5"], ["pragmate-ui", "0.1.2"], ["prism-react-renderer", "2.4.0"], ["prismjs", "1.29.0"], ["react-is", "18.3.1"], ["react-select", "5.8.0"], ["sequelize", "6.37.3"], ["socket.io-client", "4.7.5"], ["swiper", "11.1.12"], ["tippy.js", "6.3.7"], ["uuid", "9.0.1"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["@bg/jadmin", "0.0.1"], ["sgs-workflow", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@bg/jadmin@0.0.1/preload-text"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/jadmin@0.0.1/preload-text');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 303814806,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PreloadText = PreloadText;
          var _react = require("react");
          /* bundle */
          function PreloadText({
            className,
            width = "100%",
            height = "100%",
            color
          }) {
            const styles = {
              width,
              height
            };
            if (color) styles.background = color;
            const cls = `preload-text${className ? ` ${className}` : ''}`;
            return _react.default.createElement("span", {
              className: cls,
              style: styles
            }, _react.default.createElement("span", null));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "PreloadText",
        "name": "PreloadText"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'PreloadText') && _export("PreloadText", PreloadText = require ? require('./index').PreloadText : value);
      };
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUHJlbG9hZFRleHQiLCJjbGFzc05hbWUiLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIiwic3R5bGVzIiwiYmFja2dyb3VuZCIsImNscyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiXSwic291cmNlcyI6WyIvY29kZS90cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFTztVQUFZLFNBQVVDLFdBQVdBLENBQUM7WUFBRUMsU0FBUztZQUFFQyxLQUFLLEdBQUcsTUFBTTtZQUFFQyxNQUFNLEdBQUcsTUFBTTtZQUFFQztVQUFLLENBQUU7WUFDMUYsTUFBTUMsTUFBTSxHQUF3QjtjQUNoQ0gsS0FBSztjQUNMQzthQUNIO1lBQ0QsSUFBSUMsS0FBSyxFQUFFQyxNQUFNLENBQUNDLFVBQVUsR0FBR0YsS0FBSztZQUNwQyxNQUFNRyxHQUFHLEdBQUcsZUFBZU4sU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUM3RCxPQUNJSCxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFNUixTQUFTLEVBQUVNLEdBQUc7Y0FBRUcsS0FBSyxFQUFFTDtZQUFNLEdBQy9CUCxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxjQUFRLENBQ0w7VUFHZiIsImlnbm9yZUxpc3QiOltdfQ==