System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.1.2/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, CardInformation, __beyond_pkg, hmr;
  _export("CardInformation", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_pragmateUi012Icons) {
      dependency_3 = _pragmateUi012Icons;
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
          "vspecifier": "@bg/jadmin@0.0.1/card"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/jadmin@0.0.1/card');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2422413732,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CardInformation = CardInformation;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          /* bundle */
          function CardInformation(props) {
            const {
              icon,
              title,
              total
            } = props;
            const CAPITALIZE = title[0].toUpperCase() + title.slice(1).toLowerCase();
            return React.createElement("div", {
              className: "container-card"
            }, React.createElement("div", {
              className: "card-single"
            }, React.createElement("h2", null, CAPITALIZE), React.createElement("div", {
              className: "content-icon-number"
            }, React.createElement("div", {
              className: "content-icon"
            }, React.createElement(_icons.Icon, {
              icon: icon
            })), React.createElement("span", null, total))));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 387025082,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "CardInformation",
        "name": "CardInformation"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'CardInformation') && _export("CardInformation", CardInformation = require ? require('./index').CardInformation : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfaWNvbnMiLCJDYXJkSW5mb3JtYXRpb24iLCJwcm9wcyIsImljb24iLCJ0aXRsZSIsInRvdGFsIiwiQ0FQSVRBTElaRSIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ0b0xvd2VyQ2FzZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJJY29uIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiXSwic291cmNlcyI6WyIvY29kZS90cy9pbmRleC50c3giLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBWSxTQUFVRSxlQUFlQSxDQUFDQyxLQUFhO1lBQ3hELE1BQU07Y0FBRUMsSUFBSTtjQUFFQyxLQUFLO2NBQUVDO1lBQUssQ0FBRSxHQUFHSCxLQUFLO1lBRXBDLE1BQU1JLFVBQVUsR0FBR0YsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDRyxXQUFXLEVBQUUsR0FBR0gsS0FBSyxDQUFDSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNDLFdBQVcsRUFBRTtZQUV4RSxPQUNFWCxLQUFBLENBQUFZLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWdCLEdBQzdCYixLQUFBLENBQUFZLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWEsR0FDMUJiLEtBQUEsQ0FBQVksYUFBQSxhQUFLSixVQUFVLENBQU0sRUFDckJSLEtBQUEsQ0FBQVksYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBcUIsR0FDbENiLEtBQUEsQ0FBQVksYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBYyxHQUMzQmIsS0FBQSxDQUFBWSxhQUFBLENBQUNWLE1BQUEsQ0FBQVksSUFBSTtjQUFDVCxJQUFJLEVBQUVBO1lBQUksRUFBSSxDQUNoQixFQUNOTCxLQUFBLENBQUFZLGFBQUEsZUFBT0wsS0FBSyxDQUFRLENBQ2hCLENBQ0YsQ0FDRjtVQUVWOzs7Ozs7Ozs7OztVQ3JCQTs7VUFFQVEsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBIiwiaWdub3JlTGlzdCI6W119