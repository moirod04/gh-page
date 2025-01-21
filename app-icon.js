System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@0.1.2/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, AppIconButton, AppIcon, APP_ICONS, __beyond_pkg, hmr;
  _export({
    AppIconButton: void 0,
    AppIcon: void 0,
    APP_ICONS: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi012Icons) {
      dependency_2 = _pragmateUi012Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@bg/jadmin", "0.0.1"], ["@bg/auth-api", "1.0.0"], ["@jadmin/ui", "1.0.0"], ["@bgroup/jview", "1.0.3"], ["@bgroup/helpers", "1.0.7"], ["@bgroup/wise-form", "0.0.4"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/bee", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/reactive", "1.1.14"], ["@bgroup/http-suite", "1.0.5"], ["chart.js", "4.4.1"], ["dayjs", "1.11.10"], ["dotenv", "16.4.4"], ["express", "4.18.2"], ["framer-motion", "10.18.0"], ["googleapis", "129.0.0"], ["javascript-time-ago", "2.5.10"], ["jsonwebtoken", "9.0.2"], ["mathjs", "12.4.1"], ["moment", "2.30.1"], ["perfect-scrollbar", "1.5.5"], ["pragmate-ui", "0.1.2"], ["prismjs", "1.29.0"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-google-recaptcha", "3.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["swiper", "11.0.6"], ["tippy.js", "6.3.7"], ["use-debounce", "10.0.0"], ["uuid", "9.0.1"], ["wise-form", "0.0.4"], ["@babel/core", "7.23.9"], ["@babel/preset-env", "7.23.9"], ["@babel/preset-typescript", "7.23.3"], ["@types/react", "18.2.55"], ["@types/react-dom", "18.2.19"], ["babel-jest", "29.7.0"], ["jest", "29.7.0"], ["ts-jest", "29.1.2"], ["sgs-workflow", "1.0.0"], ["sgs-workflow", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "sgs-workflow@1.0.0/app-icon"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2]]);
      ims = new Map();
      /*********************************
      INTERNAL MODULE: ./app-icon-button
      *********************************/
      ims.set('./app-icon-button', {
        hash: 2491627295,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AppIconButton = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("./icons");
          /*bundle*/
          const AppIconButton = exports.AppIconButton = (0, _react.forwardRef)((props, ref) => {
            const icons = _icons2.APP_ICONS;
            const {
              icon
            } = props;
            const attrs = Object.assign({}, props);
            delete attrs.icon;
            if (!icons.hasOwnProperty(icon)) {
              attrs.icon = icon;
            } else {
              attrs.icon = icons[icon].icon;
              attrs.viewBox = icons[icon].viewBox;
            }
            return _react.default.createElement(_icons.IconButton, {
              ref: ref,
              ...attrs
            });
          });
        }
      });

      /**********************
      INTERNAL MODULE: ./icon
      **********************/

      ims.set('./icon', {
        hash: 149378699,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AppIcon = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("./icons");
          /*bundle*/
          const AppIcon = props => {
            const icons = _icons2.APP_ICONS;
            const {
              icon
            } = props;
            const attrs = Object.assign({}, props);
            delete attrs.icon;
            if (!icons.hasOwnProperty(icon)) {
              attrs.icon = icon;
            } else {
              attrs.icon = icons[icon].icon;
              attrs.viewBox = icons[icon].viewBox;
            }
            return _react.default.createElement(_icons.Icon, {
              ...attrs
            });
          };
          exports.AppIcon = AppIcon;
        }
      });

      /***********************
      INTERNAL MODULE: ./icons
      ***********************/

      ims.set('./icons', {
        hash: 1987778968,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.APP_ICONS = void 0;
          /*bundle*/
          const APP_ICONS = exports.APP_ICONS = {
            add: {
              viewBox: '0 0 22 22',
              icon: `<g>
                <path id="Trazado_11008" data-name="Trazado 11008" d="M11,22A11,11,0,1,0,0,11,11,11,0,0,0,11,22Zm-.77-6.325a.825.825,0,1,0,1.65,0v-3.8h3.8a.825.825,0,0,0,0-1.65h-3.8v-3.9a.825.825,0,1,0-1.65,0v3.9H6.325a.825.825,0,0,0,0,1.65H10.23Z" fill-rule="evenodd"/>
            </g>
            `
            },
            filter: {
              viewBox: '0 0 28.645 22',
              icon: `<g>
                <path id="Unión_2" data-name="Unión 2" d="M12.312,21.7l-4-4a.966.966,0,0,1-.3-.7V9.407L.312,1.7A.905.905,0,0,1,.093.61.937.937,0,0,1,1.015,0h20a.937.937,0,0,1,.922.61,1.075,1.075,0,0,1,.091.507c-.176-.01-.36-.015-.547-.015A9.914,9.914,0,0,0,14.015,17.54V21a.937.937,0,0,1-.61.922,1.084,1.084,0,0,1-.391.078A.936.936,0,0,1,12.312,21.7Zm8.368-3.532a.291.291,0,0,1-.278-.205l-.478-1.611a5.524,5.524,0,0,1-1.1-.45l-1.477.789A.29.29,0,0,1,17,16.641L15.86,15.5a.3.3,0,0,1-.053-.345l.784-1.5a5.552,5.552,0,0,1-.478-1.113l-1.592-.478a.294.294,0,0,1-.205-.278V10.168a.293.293,0,0,1,.205-.278L16.1,9.413a5.553,5.553,0,0,1,.479-1.133l-.775-1.434A.3.3,0,0,1,15.86,6.5l1.162-1.132a.291.291,0,0,1,.344-.053L18.8,6.09a5.512,5.512,0,0,1,1.138-.478l.478-1.578a.292.292,0,0,1,.278-.205h1.615a.292.292,0,0,1,.283.2l.478,1.582a5.54,5.54,0,0,1,1.128.478l1.458-.779A.292.292,0,0,1,26,5.359l1.143,1.147a.292.292,0,0,1,.053.344l-.784,1.468a5.574,5.574,0,0,1,.454,1.113l1.6.479a.291.291,0,0,1,.177.282v1.63a.292.292,0,0,1-.206.278l-1.611.478a5.539,5.539,0,0,1-.454,1.1l.794,1.481a.293.293,0,0,1-.053.345l-1.143,1.142a.292.292,0,0,1-.344.053L24.141,15.9a5.616,5.616,0,0,1-1.09.449l-.478,1.616a.29.29,0,0,1-.278.205ZM18.872,11A2.63,2.63,0,1,0,21.5,8.371,2.63,2.63,0,0,0,18.872,11Z" transform="translate(0)"/>
            </g>
            `
            },
            apply: {
              viewBox: '0 0 22.032 22',
              icon: `<g>
                <path id="Trazado_11016" data-name="Trazado 11016" d="M21.9.609A.9.9,0,0,1,21.684,1.7l-7.7,7.7V21a.934.934,0,0,1-.609.922,1.086,1.086,0,0,1-.391.078.928.928,0,0,1-.7-.3l-4-4a.961.961,0,0,1-.3-.7V9.406L.278,1.7A.9.9,0,0,1,.059.609.934.934,0,0,1,.981,0h20A.934.934,0,0,1,21.9.609Z" transform="translate(0.035)" />
            </g>
            `
            },
            refresh: {
              viewBox: '0 0 20 22',
              icon: `<g>
                    <path id="Trazado_11015" data-name="Trazado 11015" d="M19.674,13.292a.268.268,0,0,1-.013.1,11.342,11.342,0,0,1-3.49,6.223A9.02,9.02,0,0,1,9.948,22a8.986,8.986,0,0,1-3.678-.788A9.89,9.89,0,0,1,3.1,18.964l-1.68,1.848a.767.767,0,0,1-1.172,0A.926.926,0,0,1,0,20.167V13.75a.926.926,0,0,1,.247-.645.767.767,0,0,1,.586-.272H6.667a.767.767,0,0,1,.586.272.963.963,0,0,1,0,1.289L5.469,16.357a6.67,6.67,0,0,0,2.1,1.461A5.984,5.984,0,0,0,10,18.333a6.093,6.093,0,0,0,3.255-.931,6.893,6.893,0,0,0,2.422-2.564q.143-.243.69-1.676a.4.4,0,0,1,.391-.329h2.5a.383.383,0,0,1,.293.136A.463.463,0,0,1,19.674,13.292ZM20,1.833V8.25a.926.926,0,0,1-.247.645.767.767,0,0,1-.586.272H13.333a.767.767,0,0,1-.586-.272.963.963,0,0,1,0-1.289l1.8-1.977A6.162,6.162,0,0,0,10,3.667,6.093,6.093,0,0,0,6.745,4.6,6.893,6.893,0,0,0,4.323,7.161q-.143.243-.69,1.676a.4.4,0,0,1-.391.329H.651a.383.383,0,0,1-.293-.136.463.463,0,0,1-.124-.322v-.1A11.376,11.376,0,0,1,3.75,2.385,9.083,9.083,0,0,1,10,0a9.051,9.051,0,0,1,3.7.795,10.027,10.027,0,0,1,3.19,2.242l1.693-1.848a.767.767,0,0,1,1.172,0A.926.926,0,0,1,20,1.833Z" />
                </g>
                `
            },
            watch: {
              viewBox: '0 0 18.7 22',
              icon: `<g viewBox="0 0 18.7 22">
                <path id="Trazado_11043" data-name="Trazado 11043" d="M22.3,16.625A9.35,9.35,0,1,1,6.037,10.279L4.667,8.9a.836.836,0,0,1,0-1.176.82.82,0,0,1,1.167,0L7.253,9.151a9.293,9.293,0,0,1,11.395,0l1.419-1.431a.82.82,0,0,1,1.167,0,.836.836,0,0,1,0,1.176l-1.371,1.382A9.433,9.433,0,0,1,22.3,16.625ZM12.95,10.8a.828.828,0,0,1,.825.832v5.2l3.058,3.083a.836.836,0,0,1,0,1.176.82.82,0,0,1-1.167,0l-3.542-3.57V11.635A.828.828,0,0,1,12.95,10.8Z" transform="translate(-3.6 -4.05)"  fill-rule="evenodd"/>
                <path id="Trazado_11044" data-name="Trazado 11044" d="M18.188,0a.788.788,0,0,0,0,1.575h4.2a.788.788,0,0,0,0-1.575Z" transform="translate(-10.938)" />
            </g>
            `
            },
            'magnifying-glass': {
              viewBox: '0 0 16.641 17',
              icon: `<g>
                <path id="Trazado_11020" data-name="Trazado 11020" d="M15.163,4.988A6.868,6.868,0,0,0,9.28,15.4L5.951,18.729l.012.012a1.891,1.891,0,0,0,1.319,3.247,1.9,1.9,0,0,0,1.362-.566l.008.008,3.435-3.435A6.867,6.867,0,1,0,15.163,4.988ZM15.2,16.022A4.292,4.292,0,1,1,19.5,11.73,4.292,4.292,0,0,1,15.2,16.022Z" transform="translate(-5.389 -4.988)" />
            </g>
            `
            },
            down: {
              icon: `<g  aria-hidden="true" focusable="false" class="css-tj5bde-Svg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></g>`,
              viewBox: '0 0 20 20'
            },
            up: {
              viewBox: '0 0 512 512',
              icon: `<g >
                <path opacity="1" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/>
            </g>`
            },
            cleanFilter: {
              icon: `<g><path d="M3.9 22.9C10.5 8.9 24.5 0 40 0H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L396.4 195.6C316.2 212.1 256 283 256 368c0 27.4 6.3 53.4 17.5 76.5c-1.6-.8-3.2-1.8-4.7-2.9l-64-48c-8.1-6-12.8-15.5-12.8-25.6V288.9L9 65.3C-.7 53.4-2.8 36.8 3.9 22.9zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm59.3 107.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L432 345.4l-36.7-36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L409.4 368l-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L432 390.6l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L454.6 368l36.7-36.7z"></path></g>`,
              viewBox: '0 0 576 512'
            },
            file: {
              icon: `<g><path d="M2 4.75C2 3.784 2.784 3 3.75 3h4.965a1.75 1.75 0 0 1 1.456.78l1.406 2.109a.25.25 0 0 0 .208.111h8.465c.966 0 1.75.784 1.75 1.75v11.5A1.75 1.75 0 0 1 20.25 21H3.75A1.75 1.75 0 0 1 2 19.25Zm12.78 4.97a.749.749 0 0 0-1.275.326.749.749 0 0 0 .215.734l1.72 1.72H6.75a.75.75 0 0 0 0 1.5h8.69l-1.72 1.72a.749.749 0 0 0 .326 1.275.749.749 0 0 0 .734-.215l3-3a.75.75 0 0 0 0-1.06Z"></path></g>`,
              viewBox: '0 0 24 24'
            },
            comments: {
              viewBox: '0 0 16.038 16',
              icon: `<g >
        <path id="Trazado_11031" data-name="Trazado 11031" d="M14.423.333A1.559,1.559,0,0,1,15.568.8a1.515,1.515,0,0,1,.469,1.108v9.615a1.6,1.6,0,0,1-1.615,1.615H3.192L0,16.333V1.911A1.515,1.515,0,0,1,.469.8,1.559,1.559,0,0,1,1.615.333Z" transform="translate(0 -0.333)" />
      </g>
      `
            },
            user: {
              viewBox: "0 0 448 512",
              icon: `<g><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></g>`
            }
          };
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./app-icon-button",
        "from": "AppIconButton",
        "name": "AppIconButton"
      }, {
        "im": "./icon",
        "from": "AppIcon",
        "name": "AppIcon"
      }, {
        "im": "./icons",
        "from": "APP_ICONS",
        "name": "APP_ICONS"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AppIconButton') && _export("AppIconButton", AppIconButton = require ? require('./app-icon-button').AppIconButton : value);
        (require || prop === 'AppIcon') && _export("AppIcon", AppIcon = require ? require('./icon').AppIcon : value);
        (require || prop === 'APP_ICONS') && _export("APP_ICONS", APP_ICONS = require ? require('./icons').APP_ICONS : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIkFwcEljb25CdXR0b24iLCJleHBvcnRzIiwiZm9yd2FyZFJlZiIsInByb3BzIiwicmVmIiwiaWNvbnMiLCJBUFBfSUNPTlMiLCJpY29uIiwiYXR0cnMiLCJPYmplY3QiLCJhc3NpZ24iLCJoYXNPd25Qcm9wZXJ0eSIsInZpZXdCb3giLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkljb25CdXR0b24iLCJBcHBJY29uIiwiSWNvbiIsImFkZCIsImZpbHRlciIsImFwcGx5IiwicmVmcmVzaCIsIndhdGNoIiwiZG93biIsInVwIiwiY2xlYW5GaWx0ZXIiLCJmaWxlIiwiY29tbWVudHMiLCJ1c2VyIl0sInNvdXJjZXMiOlsiL2NvZGUvdHMvYXBwLWljb24tYnV0dG9uLnRzeCIsIi9jb2RlL3RzL2ljb24udHN4IiwiL2NvZGUvdHMvaWNvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBUUEsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsT0FBQSxHQUFBRixPQUFBO1VBWU87VUFBVyxNQUFNRyxhQUFhLEdBQUFDLE9BQUEsQ0FBQUQsYUFBQSxHQUVqQyxJQUFBSixNQUFBLENBQUFNLFVBQVUsRUFBQyxDQUFDQyxLQUFZLEVBQUVDLEdBQTJCLEtBQWlCO1lBQ3pFLE1BQU1DLEtBQUssR0FBR04sT0FBQSxDQUFBTyxTQUFTO1lBRXZCLE1BQU07Y0FBRUM7WUFBSSxDQUFFLEdBQUdKLEtBQUs7WUFDdEIsTUFBTUssS0FBSyxHQUFVQyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxFQUFFLEVBQUVQLEtBQUssQ0FBQztZQUM3QyxPQUFPSyxLQUFLLENBQUNELElBQUk7WUFFakIsSUFBSSxDQUFDRixLQUFLLENBQUNNLGNBQWMsQ0FBQ0osSUFBSSxDQUFDLEVBQUU7Y0FDaENDLEtBQUssQ0FBQ0QsSUFBSSxHQUFHQSxJQUFJO2FBQ2pCLE1BQU07Y0FDTkMsS0FBSyxDQUFDRCxJQUFJLEdBQUdGLEtBQUssQ0FBQ0UsSUFBSSxDQUFDLENBQUNBLElBQUk7Y0FDN0JDLEtBQUssQ0FBQ0ksT0FBTyxHQUFHUCxLQUFLLENBQUNFLElBQUksQ0FBQyxDQUFDSyxPQUFPOztZQUdwQyxPQUFPaEIsTUFBQSxDQUFBaUIsT0FBQSxDQUFBQyxhQUFBLENBQUNoQixNQUFBLENBQUFpQixVQUFVO2NBQUNYLEdBQUcsRUFBRUEsR0FBRztjQUFBLEdBQU1JO1lBQUssRUFBSTtVQUMzQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdENGLElBQUFaLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE9BQUEsR0FBQUYsT0FBQTtVQVVPO1VBQVcsTUFBTW1CLE9BQU8sR0FBSWIsS0FBWSxJQUFpQjtZQUMvRCxNQUFNRSxLQUFLLEdBQVdOLE9BQUEsQ0FBQU8sU0FBUztZQUUvQixNQUFNO2NBQUVDO1lBQUksQ0FBRSxHQUFHSixLQUFLO1lBQ3RCLE1BQU1LLEtBQUssR0FBVUMsTUFBTSxDQUFDQyxNQUFNLENBQUMsRUFBRSxFQUFFUCxLQUFLLENBQUM7WUFDN0MsT0FBT0ssS0FBSyxDQUFDRCxJQUFJO1lBRWpCLElBQUksQ0FBQ0YsS0FBSyxDQUFDTSxjQUFjLENBQUNKLElBQUksQ0FBQyxFQUFFO2NBQ2hDQyxLQUFLLENBQUNELElBQUksR0FBR0EsSUFBSTthQUNqQixNQUFNO2NBQ05DLEtBQUssQ0FBQ0QsSUFBSSxHQUFHRixLQUFLLENBQUNFLElBQUksQ0FBQyxDQUFDQSxJQUFJO2NBQzdCQyxLQUFLLENBQUNJLE9BQU8sR0FBR1AsS0FBSyxDQUFDRSxJQUFJLENBQUMsQ0FBQ0ssT0FBTzs7WUFHcEMsT0FBT2hCLE1BQUEsQ0FBQWlCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDaEIsTUFBQSxDQUFBbUIsSUFBSTtjQUFBLEdBQUtUO1lBQUssRUFBSTtVQUMzQixDQUFDO1VBQUNQLE9BQUEsQ0FBQWUsT0FBQSxHQUFBQSxPQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNCSztVQUFXLE1BQU1WLFNBQVMsR0FBQUwsT0FBQSxDQUFBSyxTQUFBLEdBQVc7WUFDMUNZLEdBQUcsRUFBRTtjQUNITixPQUFPLEVBQUUsV0FBVztjQUNwQkwsSUFBSSxFQUFFOzs7O2FBSVA7WUFDRFksTUFBTSxFQUFFO2NBQ05QLE9BQU8sRUFBRSxlQUFlO2NBQ3hCTCxJQUFJLEVBQUU7Ozs7YUFJUDtZQUNEYSxLQUFLLEVBQUU7Y0FDTFIsT0FBTyxFQUFFLGVBQWU7Y0FDeEJMLElBQUksRUFBRTs7OzthQUlQO1lBQ0RjLE9BQU8sRUFBRTtjQUNQVCxPQUFPLEVBQUUsV0FBVztjQUNwQkwsSUFBSSxFQUFFOzs7O2FBSVA7WUFDRGUsS0FBSyxFQUFFO2NBQ0xWLE9BQU8sRUFBRSxhQUFhO2NBQ3RCTCxJQUFJLEVBQUU7Ozs7O2FBS1A7WUFDRCxrQkFBa0IsRUFBRTtjQUNsQkssT0FBTyxFQUFFLGVBQWU7Y0FDeEJMLElBQUksRUFBRTs7OzthQUlQO1lBQ0RnQixJQUFJLEVBQUU7Y0FDSmhCLElBQUksRUFBRSw2V0FBNlc7Y0FDblhLLE9BQU8sRUFBRTthQUNWO1lBQ0RZLEVBQUUsRUFBRTtjQUNGWixPQUFPLEVBQUUsYUFBYTtjQUN0QkwsSUFBSSxFQUFFOzs7YUFHUDtZQUNEa0IsV0FBVyxFQUFFO2NBQ1hsQixJQUFJLEVBQUUsaWtCQUFpa0I7Y0FDdmtCSyxPQUFPLEVBQUU7YUFDVjtZQUNEYyxJQUFJLEVBQUU7Y0FDSm5CLElBQUksRUFBRSw4WUFBOFk7Y0FDcFpLLE9BQU8sRUFBRTthQUNWO1lBQ0RlLFFBQVEsRUFBRTtjQUNSZixPQUFPLEVBQUUsZUFBZTtjQUN4QkwsSUFBSSxFQUFFOzs7O2FBSVA7WUFDRHFCLElBQUksRUFBRTtjQUNKaEIsT0FBTyxFQUFFLGFBQWE7Y0FDdEJMLElBQUksRUFBRTs7V0FFVCIsImlnbm9yZUxpc3QiOltdfQ==