System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Header, __beyond_pkg, hmr;
  _export("Header", void 0);
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
          "vspecifier": "@bg/jadmin@0.0.1/header"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/jadmin@0.0.1/header');
      ims = new Map();
      /**************************************
      INTERNAL MODULE: ./view/capitalize-name
      **************************************/
      ims.set('./view/capitalize-name', {
        hash: 269752094,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.capitalizeName = capitalizeName;
          function capitalizeName(name) {
            const capitalize = word => {
              if (!word) return '';
              return word[0].toUpperCase() + word.slice(1).toLowerCase();
            };
            const nameParts = name.split(' ');
            const firstName = capitalize(nameParts[0]);
            const lastName = capitalize(nameParts[1]);
            return firstName + ' ' + lastName;
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./view/index
      ****************************/

      ims.set('./view/index', {
        hash: 445275749,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _capitalizeName = require("./capitalize-name");
          /* bundle */
          function Header({
            name
          }) {
            const NAME_CAPITALIZE = (0, _capitalizeName.capitalizeName)(name);
            return _react.default.createElement("header", {
              className: "container__header"
            }, _react.default.createElement("div", {
              className: "header__message"
            }, _react.default.createElement("h1", {
              className: "message__h1"
            }, "Good Morning, ", _react.default.createElement("span", {
              className: "message__span-color"
            }, NAME_CAPITALIZE)), _react.default.createElement("p", {
              className: "message__p"
            }, "Have a nice day at work")), _react.default.createElement("div", {
              className: "header__content-img"
            }, _react.default.createElement("img", {
              src: "assets/say-hello.png",
              alt: "icono de feliz de saludar",
              className: "content__img-day"
            })));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./view/index",
        "from": "Header",
        "name": "Header"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Header') && _export("Header", Header = require ? require('./view/index').Header : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjYXBpdGFsaXplTmFtZSIsIm5hbWUiLCJjYXBpdGFsaXplIiwid29yZCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ0b0xvd2VyQ2FzZSIsIm5hbWVQYXJ0cyIsInNwbGl0IiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJfcmVhY3QiLCJyZXF1aXJlIiwiX2NhcGl0YWxpemVOYW1lIiwiSGVhZGVyIiwiTkFNRV9DQVBJVEFMSVpFIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiXSwic291cmNlcyI6WyIvY29kZS90cy92aWV3L2NhcGl0YWxpemUtbmFtZS50cyIsIi9jb2RlL3RzL3ZpZXcvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBTSxTQUFVQSxjQUFjQSxDQUFDQyxJQUFJO1lBQ2xDLE1BQU1DLFVBQVUsR0FBR0MsSUFBSSxJQUFHO2NBQ3pCLElBQUksQ0FBQ0EsSUFBSSxFQUFFLE9BQU8sRUFBRTtjQUNwQixPQUFPQSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNDLFdBQVcsRUFBRSxHQUFHRCxJQUFJLENBQUNFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsV0FBVyxFQUFFO1lBQzNELENBQUM7WUFFRCxNQUFNQyxTQUFTLEdBQUdOLElBQUksQ0FBQ08sS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUVqQyxNQUFNQyxTQUFTLEdBQUdQLFVBQVUsQ0FBQ0ssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRTFDLE1BQU1HLFFBQVEsR0FBR1IsVUFBVSxDQUFDSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFekMsT0FBT0UsU0FBUyxHQUFHLEdBQUcsR0FBR0MsUUFBUTtVQUNsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiQSxJQUFBQyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxlQUFBLEdBQUFELE9BQUE7VUFDTztVQUFZLFNBQVVFLE1BQU1BLENBQUM7WUFBRWI7VUFBSSxDQUFFO1lBQzNDLE1BQU1jLGVBQWUsR0FBRyxJQUFBRixlQUFBLENBQUFiLGNBQWMsRUFBQ0MsSUFBSSxDQUFDO1lBRTVDLE9BQ0NVLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBO2NBQVFDLFNBQVMsRUFBQztZQUFtQixHQUNwQ1AsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWlCLEdBQy9CUCxNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtjQUFJQyxTQUFTLEVBQUM7WUFBYSxHLGtCQUNaUCxNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBcUIsR0FBRUgsZUFBZSxDQUFRLENBQ3hFLEVBQ0xKLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBO2NBQUdDLFNBQVMsRUFBQztZQUFZLDZCQUE0QixDQUNoRCxFQUNOUCxNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBcUIsR0FDbkNQLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBO2NBQUtFLEdBQUcsRUFBQyxzQkFBc0I7Y0FBQ0MsR0FBRyxFQUFDLDJCQUEyQjtjQUFDRixTQUFTLEVBQUM7WUFBa0IsRUFBRyxDQUMxRixDQUNFO1VBRVgiLCJpZ25vcmVMaXN0IjpbXX0=