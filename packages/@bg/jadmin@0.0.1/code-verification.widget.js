System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/base", "@beyond-js/reactive@1.1.14/model", "react@18.2.0", "pragmate-ui@0.1.2/form", "pragmate-ui@0.1.2/components", "@bg/jadmin@0.0.1/loading-page", "@jadmin/ui@1.0.0/hooks", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.2/code-verification", "pragmate-ui@0.1.2/image", "@bg/auth-api@1.0.0/wrapper.ts", "@bg/jadmin@0.0.1/wrapper", "@bg/jadmin@0.0.1/config"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets016Render) {
      dependency_0 = _beyondJsWidgets016Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets104Base) {
      dependency_3 = _beyondJsReact18Widgets104Base;
    }, function (_beyondJsReactive1114Model) {
      dependency_4 = _beyondJsReactive1114Model;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_pragmateUi012Form) {
      dependency_6 = _pragmateUi012Form;
    }, function (_pragmateUi012Components) {
      dependency_7 = _pragmateUi012Components;
    }, function (_bgJadmin001LoadingPage) {
      dependency_8 = _bgJadmin001LoadingPage;
    }, function (_jadminUi100Hooks) {
      dependency_9 = _jadminUi100Hooks;
    }, function (_beyondJsKernel019Routing) {
      dependency_10 = _beyondJsKernel019Routing;
    }, function (_pragmateUi012CodeVerification) {
      dependency_11 = _pragmateUi012CodeVerification;
    }, function (_pragmateUi012Image) {
      dependency_12 = _pragmateUi012Image;
    }, function (_bgAuthApi100WrapperTs) {
      dependency_13 = _bgAuthApi100WrapperTs;
    }, function (_bgJadmin001Wrapper) {
      dependency_14 = _bgJadmin001Wrapper;
    }, function (_bgJadmin001Config) {
      dependency_15 = _bgJadmin001Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@bg/auth-api", "1.0.0"], ["@jadmin/ui", "1.0.0"], ["@bg/auth-models", null], ["@bgroup/jview", "1.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/widgets", "0.1.6"], ["@bgroup/data-model", "1.0.11"], ["@bgroup/ui", "0.0.38"], ["chart.js", "4.4.4"], ["dayjs", "1.11.13"], ["dotenv", "16.4.5"], ["framer-motion", "6.5.1"], ["googleapis", "120.0.0"], ["mysql2", "3.11.0"], ["perfect-scrollbar", "1.5.5"], ["pragmate-ui", "0.1.2"], ["prism-react-renderer", "2.4.0"], ["prismjs", "1.29.0"], ["react-is", "18.3.1"], ["react-select", "5.8.0"], ["sequelize", "6.37.3"], ["socket.io-client", "4.7.5"], ["swiper", "11.1.12"], ["tippy.js", "6.3.7"], ["uuid", "9.0.1"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["@bg/jadmin", "0.0.1"], ["sgs-workflow", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@bg/jadmin@0.0.1/code-verification",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['react', dependency_5], ['pragmate-ui/form', dependency_6], ['pragmate-ui/components', dependency_7], ['@bg/jadmin/loading-page', dependency_8], ['@jadmin/ui/hooks', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['pragmate-ui/code-verification', dependency_11], ['pragmate-ui/image', dependency_12], ['@bg/auth-api/wrapper.ts', dependency_13], ['@bg/jadmin/wrapper', dependency_14], ['@bg/jadmin/config', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "jadmin-auth-code-verification",
        "vspecifier": "@bg/jadmin@0.0.1/code-verification.widget",
        "is": "page",
        "route": "/auth/code/${token}"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/jadmin@0.0.1/code-verification.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3527394635,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _view = require("./views/view");
          var _model = require("./model");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            get Widget() {
              return _view.View;
            }
            #manager;
            createStore() {
              this.#manager = new _model.Manager();
              return this.#manager;
            }
            hide() {
              this.#manager.hide();
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./model
      ***********************/

      ims.set('./model', {
        hash: 4065541015,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Manager = void 0;
          var _model = require("@beyond-js/reactive/model");
          class Manager extends _model.ReactiveModel {
            #count = 0;
            get count() {
              return this.#count;
            }
            set count(value) {
              this.#count = value;
              this.triggerEvent('hide');
            }
            hide = () => {
              this.#count = this.#count + 1;
              this.triggerEvent('hide');
            };
          }
          exports.Manager = Manager;
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 651962926,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************
      INTERNAL MODULE: ./views/view
      ****************************/

      ims.set('./views/view', {
        hash: 3877773614,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var React = _react;
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _loadingPage = require("@bg/jadmin/loading-page");
          var _hooks = require("@jadmin/ui/hooks");
          var _beyond_context = require("beyond_context");
          var _routing = require("@beyond-js/kernel/routing");
          var _codeVerification = require("pragmate-ui/code-verification");
          var _image = require("pragmate-ui/image");
          var _wrapper = require("@bg/auth-api/wrapper.ts");
          var _wrapper2 = require("@bg/jadmin/wrapper");
          var _config = require("@bg/jadmin/config");
          function View(specs) {
            const token = specs.uri.vars.get('token');
            const [ready, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [code, setCode] = (0, _react.useState)(false);
            const [error, setError] = (0, _react.useState)('');
            const [loading, setIsLoading] = React.useState(false);
            const [reset, setReset] = React.useState(0);
            const [upd, setUpdate] = React.useState({});
            (0, _hooks.useBinder)([_wrapper2.appWrapper], () => setUpdate({}), 'change.theme');
            (0, _hooks.useBinder)([specs.store], () => {
              setReset(specs.store.count);
              setError('');
            }, 'hide');
            if (!ready) return React.createElement(_loadingPage.LoadingPage, null);
            async function resend() {
              setIsLoading(true);
              await _wrapper.session.resendCode({
                appToken: _config.default.params.application.token,
                token
              });
              setIsLoading(false);
            }
            async function validate() {
              setIsLoading(true);
              try {
                const response = await _wrapper.session.validateCode({
                  code,
                  token,
                  appToken: _config.default.params.application.token
                });
                if (response.error) throw new Error(response.error);
                specs.store.count = specs.store.count + 1;
                _routing.routing.pushState(`/auth/set-forgotten-password/${token}`);
              } catch (error) {
                if (error.message === 'INVALID_CODE') setError(texts.invalidCode);
              } finally {
                setIsLoading(false);
              }
            }
            const handleOnCodeFull = code => setCode(code ?? false);
            const disabled = {};
            if (loading) disabled.disabled = true;
            const themeStorage = localStorage.getItem('theme');
            const logo = themeStorage ? themeStorage === 'dark' ? 'logo-auth-dark' : 'logo-auth' : 'logo-auth-dark';
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: "page__container"
            }, React.createElement("div", {
              className: "content-auth"
            }, React.createElement(_image.Image, {
              src: `${globalThis.baseDir}assets/${logo}.png`,
              alt: "logo",
              className: "logo-header"
            }), React.createElement(_form.Form, {
              onSubmit: validate
            }, React.createElement("h1", {
              className: "title-login"
            }, texts.title), React.createElement("span", {
              className: "texts-subtitle texts-subtitle__code"
            }, texts.subtitle, React.createElement("strong", {
              className: "break"
            }, _wrapper.session.email)), React.createElement("strong", {
              className: "info"
            }, texts.info), React.createElement(_codeVerification.InputCode, {
              reset: reset,
              onlyNumber: true,
              length: 6,
              onCodeFull: handleOnCodeFull
            }), React.createElement("span", {
              className: "code-error"
            }, " ", error), React.createElement("div", {
              className: "form__actions two-actions-code"
            }, React.createElement(_components.Button, {
              onClick: resend,
              variant: "secondary",
              loading: loading,
              disabled: loading
            }, texts.resend), React.createElement(_components.Button, {
              type: "submit",
              variant: "primary",
              loading: loading,
              disabled: loading
            }, texts.verify))))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlldyIsIl9tb2RlbCIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJWaWV3IiwibWFuYWdlciIsImNyZWF0ZVN0b3JlIiwiTWFuYWdlciIsImhpZGUiLCJleHBvcnRzIiwiUmVhY3RpdmVNb2RlbCIsImNvdW50IiwidmFsdWUiLCJ0cmlnZ2VyRXZlbnQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWFjdCIsIlJlYWN0IiwiX2Zvcm0iLCJfY29tcG9uZW50cyIsIl9sb2FkaW5nUGFnZSIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIl9yb3V0aW5nIiwiX2NvZGVWZXJpZmljYXRpb24iLCJfaW1hZ2UiLCJfd3JhcHBlciIsIl93cmFwcGVyMiIsIl9jb25maWciLCJzcGVjcyIsInRva2VuIiwidXJpIiwidmFycyIsImdldCIsInJlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImNvZGUiLCJzZXRDb2RlIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwibG9hZGluZyIsInNldElzTG9hZGluZyIsInJlc2V0Iiwic2V0UmVzZXQiLCJ1cGQiLCJzZXRVcGRhdGUiLCJ1c2VCaW5kZXIiLCJhcHBXcmFwcGVyIiwic3RvcmUiLCJjcmVhdGVFbGVtZW50IiwiTG9hZGluZ1BhZ2UiLCJyZXNlbmQiLCJzZXNzaW9uIiwicmVzZW5kQ29kZSIsImFwcFRva2VuIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwcGxpY2F0aW9uIiwidmFsaWRhdGUiLCJyZXNwb25zZSIsInZhbGlkYXRlQ29kZSIsIkVycm9yIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIm1lc3NhZ2UiLCJpbnZhbGlkQ29kZSIsImhhbmRsZU9uQ29kZUZ1bGwiLCJkaXNhYmxlZCIsInRoZW1lU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsb2dvIiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJJbWFnZSIsInNyYyIsImdsb2JhbFRoaXMiLCJiYXNlRGlyIiwiYWx0IiwiRm9ybSIsIm9uU3VibWl0IiwidGl0bGUiLCJzdWJ0aXRsZSIsImVtYWlsIiwiaW5mbyIsIklucHV0Q29kZSIsIm9ubHlOdW1iZXIiLCJsZW5ndGgiLCJvbkNvZGVGdWxsIiwiQnV0dG9uIiwib25DbGljayIsInZhcmlhbnQiLCJ0eXBlIiwidmVyaWZ5Il0sInNvdXJjZXMiOlsiL3dpZGdldC90cy9jb250cm9sbGVyLnRzIiwiL3dpZGdldC90cy9tb2RlbC50cyIsIi90eXBlcy50cyIsIi93aWRnZXQvdHMvdmlld3Mvdmlldy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFFQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1ZHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyxxQkFBcUI7WUFDOUMsSUFBSUMsTUFBTUEsQ0FBQTtjQUNULE9BQU9KLEtBQUEsQ0FBQUssSUFBSTtZQUNaO1lBRUEsQ0FBQUMsT0FBUTtZQUVSQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELE9BQVEsR0FBRyxJQUFJTCxNQUFBLENBQUFPLE9BQU8sRUFBRTtjQUM3QixPQUFPLElBQUksQ0FBQyxDQUFBRixPQUFRO1lBQ3JCO1lBRUFHLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUgsT0FBUSxDQUFDRyxJQUFJLEVBQUU7WUFDckI7O1VBQ0FDLE9BQUEsQ0FBQVIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCRCxJQUFBRCxNQUFBLEdBQUFGLE9BQUE7VUFFTSxNQUFPUyxPQUFRLFNBQVFQ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