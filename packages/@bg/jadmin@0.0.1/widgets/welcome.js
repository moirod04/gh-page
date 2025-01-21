System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.1.2/image", "@bg/auth-api@1.0.0/wrapper.ts", "@beyond-js/kernel@0.1.9/routing", "@bg/jadmin@0.0.1/config"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, Welcome, __beyond_pkg, hmr;
  _export("Welcome", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi012Image) {
      dependency_3 = _pragmateUi012Image;
    }, function (_bgAuthApi100WrapperTs) {
      dependency_4 = _bgAuthApi100WrapperTs;
    }, function (_beyondJsKernel019Routing) {
      dependency_5 = _beyondJsKernel019Routing;
    }, function (_bgJadmin001Config) {
      dependency_6 = _bgJadmin001Config;
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
          "vspecifier": "@bg/jadmin@0.0.1/widgets/welcome"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/image', dependency_3], ['@bg/auth-api/wrapper.ts', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['@bg/jadmin/config', dependency_6]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/jadmin@0.0.1/widgets/welcome');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3991737427,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Welcome = Welcome;
          var _react = require("react");
          var _wrapper = require("@bg/auth-api/wrapper.ts");
          var _routing = require("@beyond-js/kernel/routing");
          var _config = require("@bg/jadmin/config");
          /*bundle*/
          function Welcome() {
            const goMyProfile = event => {
              event.preventDefault();
              _routing.routing.pushState('/profile');
            };
            const userName = `${`${_wrapper.session.user.names ?? ''}`} ${_wrapper.session.user.lastNames ?? ''}`;
            const img = _wrapper.session.user.profileImage ? `${_config.default.params.mediaServer}/display/image/${_wrapper.session.user.profileImage}/150x150/${_config.default.params.token}/user` : `${globalThis.baseDir}assets/default-user.png`;
            const cls = !!_wrapper.session.user.profileImage ? '' : 'default-image';
            return _react.default.createElement("div", {
              className: "card-welcome"
            }, _react.default.createElement("div", {
              className: "bg-primary-subtle welcome-section"
            }, _react.default.createElement("div", {
              className: "welcome--text"
            }, _react.default.createElement("h5", null, "Welcome Back ", _react.default.createElement("span", {
              className: "welcome--text__span"
            }, userName), "!"), _react.default.createElement("p", null, "Admin Dashboard"))), _react.default.createElement("div", {
              className: "img-fluid-container"
            }, _react.default.createElement("img", {
              src: "https://skote-v-light.react.themesbrand.com/static/media/profile-img.43b59e598ba15abe6eab.png",
              alt: "",
              className: "img-fluid"
            })));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Welcome",
        "name": "Welcome"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Welcome') && _export("Welcome", Welcome = require ? require('./index').Welcome : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3dyYXBwZXIiLCJfcm91dGluZyIsIl9jb25maWciLCJXZWxjb21lIiwiZ29NeVByb2ZpbGUiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwicm91dGluZyIsInB1c2hTdGF0ZSIsInVzZXJOYW1lIiwic2Vzc2lvbiIsInVzZXIiLCJuYW1lcyIsImxhc3ROYW1lcyIsImltZyIsInByb2ZpbGVJbWFnZSIsImRlZmF1bHQiLCJwYXJhbXMiLCJtZWRpYVNlcnZlciIsInRva2VuIiwiZ2xvYmFsVGhpcyIsImJhc2VEaXIiLCJjbHMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Il0sInNvdXJjZXMiOlsiL2NvZGUvdHMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxPQUFBLEdBQUFILE9BQUE7VUFFTztVQUFVLFNBQVVJLE9BQU9BLENBQUE7WUFDakMsTUFBTUMsV0FBVyxHQUFHQyxLQUFLLElBQUc7Y0FDM0JBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO2NBQ3RCTCxRQUFBLENBQUFNLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDLFVBQVUsQ0FBQztZQUM5QixDQUFDO1lBQ0QsTUFBTUMsUUFBUSxHQUFHLEdBQUcsR0FBR1QsUUFBQSxDQUFBVSxPQUFPLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxJQUFJLEVBQUUsRUFBRSxJQUFJWixRQUFBLENBQUFVLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDRSxTQUFTLElBQUksRUFBRSxFQUFFO1lBQ25GLE1BQU1DLEdBQUcsR0FBR2QsUUFBQSxDQUFBVSxPQUFPLENBQUNDLElBQUksQ0FBQ0ksWUFBWSxHQUNsQyxHQUFHYixPQUFBLENBQUFjLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxXQUFXLGtCQUFrQmxCLFFBQUEsQ0FBQVUsT0FBTyxDQUFDQyxJQUFJLENBQUNJLFlBQVksWUFBWWIsT0FBQSxDQUFBYyxPQUFNLENBQUNDLE1BQU0sQ0FBQ0UsS0FBSyxPQUFPLEdBQzdHLEdBQUdDLFVBQVUsQ0FBQ0MsT0FBTyx5QkFBeUI7WUFDakQsTUFBTUMsR0FBRyxHQUFHLENBQUMsQ0FBQ3RCLFFBQUEsQ0FBQVUsT0FBTyxDQUFDQyxJQUFJLENBQUNJLFlBQVksR0FBRyxFQUFFLEdBQUcsZUFBZTtZQUM5RCxPQUNDakIsTUFBQSxDQUFBa0IsT0FBQSxDQUFBTyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFjLEdBQzVCMUIsTUFBQSxDQUFBa0IsT0FBQSxDQUFBTyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFtQyxHQUNqRDFCLE1BQUEsQ0FBQWtCLE9BQUEsQ0FBQU8sYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBZSxHQUM3QjFCLE1BQUEsQ0FBQWtCLE9BQUEsQ0FBQU8sYUFBQSxhLGlCQUFpQnpCLE1BQUEsQ0FBQWtCLE9BQUEsQ0FBQU8sYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBcUIsR0FBRWYsUUFBUSxDQUFRLEUsSUFBTSxFQUM5RVgsTUFBQSxDQUFBa0IsT0FBQSxDQUFBTyxhQUFBLDhCQUFzQixDQUNqQixDQUNELEVBQ056QixNQUFBLENBQUFrQixPQUFBLENBQUFPLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXFCLEdBQ25DMUIsTUFBQSxDQUFBa0IsT0FBQSxDQUFBTyxhQUFBO2NBQ0NFLEdBQUcsRUFBQywrRkFBK0Y7Y0FDbkdDLEdBQUcsRUFBQyxFQUFFO2NBQ05GLFNBQVMsRUFBQztZQUFXLEVBQ3BCLENBQ0csQ0FDRDtVQUVSIiwiaWdub3JlTGlzdCI6W119