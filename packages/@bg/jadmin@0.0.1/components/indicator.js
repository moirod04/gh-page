System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.1.2/link", "pragmate-ui@0.1.2/icons", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Indicator, __beyond_pkg, hmr;
  _export("Indicator", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi012Link) {
      dependency_2 = _pragmateUi012Link;
    }, function (_pragmateUi012Icons) {
      dependency_3 = _pragmateUi012Icons;
    }, function (_beyondJsKernel019Styles) {
      dependency_4 = _beyondJsKernel019Styles;
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
          "vspecifier": "@bg/jadmin@0.0.1/components/indicator"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/link', dependency_2], ['pragmate-ui/icons', dependency_3], ['@beyond-js/kernel/styles', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/jadmin@0.0.1/components/indicator');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2420452489,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Indicator = Indicator;
          var _react = require("react");
          var _link = require("pragmate-ui/link");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          function Indicator({
            icon,
            title,
            total,
            to
          }) {
            const isRedirectionable = !!to;
            const Wrapper = isRedirectionable ? _link.Link : 'div';
            const props = isRedirectionable ? {
              href: to
            } : {};
            const cls = isRedirectionable ? 'is-redirectionable' : '';
            return _react.default.createElement(Wrapper, {
              className: `card-indicator ${cls}`,
              ...props
            }, _react.default.createElement("div", {
              className: "d-flex justify-between align-center wrapper"
            }, _react.default.createElement("div", {
              className: "total-section"
            }, _react.default.createElement("h6", null, title), _react.default.createElement("span", null, total)), _react.default.createElement("div", {
              className: "icon-wrapper mt-1"
            }, _react.default.createElement(_icons.Icon, {
              icon: icon
            }))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Indicator",
        "name": "Indicator"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Indicator') && _export("Indicator", Indicator = require ? require('./index').Indicator : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2xpbmsiLCJfaWNvbnMiLCJJbmRpY2F0b3IiLCJpY29uIiwidGl0bGUiLCJ0b3RhbCIsInRvIiwiaXNSZWRpcmVjdGlvbmFibGUiLCJXcmFwcGVyIiwiTGluayIsInByb3BzIiwiaHJlZiIsImNscyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiJdLCJzb3VyY2VzIjpbIi90cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBUU87VUFBVSxTQUFVRyxTQUFTQSxDQUFDO1lBQUVDLElBQUk7WUFBRUMsS0FBSztZQUFFQyxLQUFLO1lBQUVDO1VBQUUsQ0FBVTtZQUN0RSxNQUFNQyxpQkFBaUIsR0FBRyxDQUFDLENBQUNELEVBQUU7WUFFOUIsTUFBTUUsT0FBTyxHQUFHRCxpQkFBaUIsR0FBR1AsS0FBQSxDQUFBUyxJQUFJLEdBQUcsS0FBSztZQUNoRCxNQUFNQyxLQUFLLEdBQUdILGlCQUFpQixHQUFHO2NBQUVJLElBQUksRUFBRUw7WUFBRSxDQUFFLEdBQUcsRUFBRTtZQUNuRCxNQUFNTSxHQUFHLEdBQUdMLGlCQUFpQixHQUFHLG9CQUFvQixHQUFHLEVBQUU7WUFFekQsT0FDQ1QsTUFBQSxDQUFBZSxPQUFBLENBQUFDLGFBQUEsQ0FBQ04sT0FBTztjQUFDTyxTQUFTLEVBQUUsa0JBQWtCSCxHQUFHLEVBQUU7Y0FBQSxHQUFNRjtZQUFLLEdBQ3JEWixNQUFBLENBQUFlLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBNkMsR0FDM0RqQixNQUFBLENBQUFlLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBZSxHQUM3QmpCLE1BQUEsQ0FBQWUsT0FBQSxDQUFBQyxhQUFBLGFBQUtWLEtBQUssQ0FBTSxFQUNoQk4sTUFBQSxDQUFBZSxPQUFBLENBQUFDLGFBQUEsZUFBT1QsS0FBSyxDQUFRLENBQ2YsRUFFTlAsTUFBQSxDQUFBZSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQW1CLEdBQ2pDakIsTUFBQSxDQUFBZSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2IsTUFBQSxDQUFBZSxJQUFJO2NBQUNiLElBQUksRUFBRUE7WUFBSSxFQUFJLENBQ2YsQ0FDRCxDQUVHO1VBRVoiLCJpZ25vcmVMaXN0IjpbXX0=