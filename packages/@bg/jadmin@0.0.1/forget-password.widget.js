System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.4/base", "@beyond-js/reactive@1.1.14/model", "@bg/auth-api@1.0.0/wrapper.ts", "@beyond-js/kernel@0.1.9/routing", "@bg/jadmin@0.0.1/config", "react@18.2.0", "pragmate-ui@0.1.2/form", "@jadmin/ui@1.0.0/hooks", "@bg/jadmin@0.0.1/loading-page", "pragmate-ui@0.1.2/image", "@bg/jadmin@0.0.1/wrapper", "pragmate-ui@0.1.2/components"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, Controller, Page, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Page: void 0
  });
  return {
    setters: [function (_beyondJsWidgets016Render) {
      dependency_0 = _beyondJsWidgets016Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets104Base) {
      dependency_2 = _beyondJsReact18Widgets104Base;
    }, function (_beyondJsReactive1114Model) {
      dependency_3 = _beyondJsReactive1114Model;
    }, function (_bgAuthApi100WrapperTs) {
      dependency_4 = _bgAuthApi100WrapperTs;
    }, function (_beyondJsKernel019Routing) {
      dependency_5 = _beyondJsKernel019Routing;
    }, function (_bgJadmin001Config) {
      dependency_6 = _bgJadmin001Config;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi012Form) {
      dependency_8 = _pragmateUi012Form;
    }, function (_jadminUi100Hooks) {
      dependency_9 = _jadminUi100Hooks;
    }, function (_bgJadmin001LoadingPage) {
      dependency_10 = _bgJadmin001LoadingPage;
    }, function (_pragmateUi012Image) {
      dependency_11 = _pragmateUi012Image;
    }, function (_bgJadmin001Wrapper) {
      dependency_12 = _bgJadmin001Wrapper;
    }, function (_pragmateUi012Components) {
      dependency_13 = _pragmateUi012Components;
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
          "vspecifier": "@bg/jadmin@0.0.1/forget-password",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/base', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@bg/auth-api/wrapper.ts', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['@bg/jadmin/config', dependency_6], ['react', dependency_7], ['pragmate-ui/form', dependency_8], ['@jadmin/ui/hooks', dependency_9], ['@bg/jadmin/loading-page', dependency_10], ['pragmate-ui/image', dependency_11], ['@bg/jadmin/wrapper', dependency_12], ['pragmate-ui/components', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "jadmin-auth-forget-password",
        "vspecifier": "@bg/jadmin@0.0.1/forget-password.widget",
        "is": "page",
        "route": "/auth/forget/password"
      }]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3208116199,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _page = require("./views/page");
          var _model = require("./model");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            get Widget() {
              return _page.Page;
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
        hash: 2897851967,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Manager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _wrapper = require("@bg/auth-api/wrapper.ts");
          var _routing = require("@beyond-js/kernel/routing");
          var _config = require("@bg/jadmin/config");
          class Manager extends _model.ReactiveModel {
            #error;
            get error() {
              return this.#error;
            }
            #success;
            get success() {
              return this.#success;
            }
            send = async (params, hide) => {
              this.fetching = true;
              this.#error = false;
              this.#success = false;
              this.triggerEvent();
              try {
                const response = await _wrapper.session.recoverPassword({
                  ...params,
                  appToken: _config.default.params.application.token
                });
                if (response.error) throw new Error(response.error.message);
                localStorage.setItem('__temp', params.email);
                _routing.routing.pushState(`/auth/code/${response.token}?forget=true`);
                hide();
                this.#success = true;
              } catch (error) {
                this.#error = true;
              } finally {
                this.fetching = false;
                this.triggerEvent();
              }
            };
            hide = () => this.triggerEvent('hide');
          }
          exports.Manager = Manager;
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 2640927676,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          ;
        }
      });

      /****************************
      INTERNAL MODULE: ./views/page
      ****************************/

      ims.set('./views/page', {
        hash: 2447848565,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Page = Page;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _hooks = require("@jadmin/ui/hooks");
          var _loadingPage = require("@bg/jadmin/loading-page");
          var _beyond_context = require("beyond_context");
          var _config = require("@bg/jadmin/config");
          var _image = require("pragmate-ui/image");
          var _wrapper = require("@bg/jadmin/wrapper");
          var _components = require("pragmate-ui/components");
          const init = {
            email: ''
          };
          /*bundle*/
          function Page({
            store
          }) {
            const [ready, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [loading, setIsLoading] = _react.default.useState(false);
            const {
              getInput,
              fields,
              error,
              setError,
              dispatch
            } = (0, _hooks.useForm)({
              init
            });
            const [upd, setUpdate] = _react.default.useState({});
            (0, _hooks.useBinder)([_wrapper.appWrapper], () => setUpdate({}), 'change.theme');
            (0, _hooks.useBinder)([store], () => {
              setIsLoading(store.fetching);
              if (store.error) setError({
                error: true,
                message: 'Usuario no registrado'
              });else if (store.success) setError({
                error: false,
                message: 'Se ha envíado un email a su correo electrónico con los pasos para recuperar su contraseña'
              });
            });
            const hide = () => {
              dispatch({
                type: 'reset'
              });
              setError({});
            };
            (0, _hooks.useBinder)([store], hide, 'hide');
            const formDisabled = {};
            const {
              email
            } = fields;
            if (!ready) return _react.default.createElement(_loadingPage.LoadingPage, null);
            if (!email || loading) formDisabled.disabled = true;
            const params = {
              email,
              appToken: _config.default.params.application.token
            };
            const handleSubmit = async () => await store.send(params, hide);
            const mode = error?.error ? 'error' : 'success';
            const themeStorage = localStorage.getItem('theme');
            const logo = themeStorage ? themeStorage === 'dark' ? 'logo-auth-dark' : 'logo-auth' : 'logo-auth-dark';
            return _react.default.createElement("div", {
              className: 'page__container'
            }, _react.default.createElement("div", {
              className: 'content-auth'
            }, _react.default.createElement(_image.Image, {
              src: `${globalThis.baseDir}assets/${logo}.png`,
              alt: 'logo',
              className: 'logo-header'
            }), _react.default.createElement(_form.Form, {
              onSubmit: handleSubmit
            }, _react.default.createElement("h1", {
              className: 'title-login title-form'
            }, texts.title), _react.default.createElement("span", {
              className: 'texts-subtitle'
            }, texts.subtitle), _react.default.createElement("div", {
              className: 'content-inputs'
            }, _react.default.createElement(_form.Input, {
              loading: loading,
              type: 'email',
              hasError: !!error.message,
              errorMessage: error?.message,
              ...getInput('email', texts.email, 'email', loading)
            })), _react.default.createElement("div", {
              className: 'form__actions'
            }, _react.default.createElement(_components.Button, {
              type: 'submit',
              variant: 'primary',
              loading: loading,
              ...formDisabled
            }, texts.verify)))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/page",
        "from": "Page",
        "name": "Page"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Page') && _export("Page", Page = require ? require('./views/page').Page : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfcGFnZSIsIl9tb2RlbCIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJQYWdlIiwibWFuYWdlciIsImNyZWF0ZVN0b3JlIiwiTWFuYWdlciIsImhpZGUiLCJleHBvcnRzIiwiX3dyYXBwZXIiLCJfcm91dGluZyIsIl9jb25maWciLCJSZWFjdGl2ZU1vZGVsIiwiZXJyb3IiLCJzdWNjZXNzIiwic2VuZCIsInBhcmFtcyIsImZldGNoaW5nIiwidHJpZ2dlckV2ZW50IiwicmVzcG9uc2UiLCJzZXNzaW9uIiwicmVjb3ZlclBhc3N3b3JkIiwiYXBwVG9rZW4iLCJkZWZhdWx0IiwiYXBwbGljYXRpb24iLCJ0b2tlbiIsIkVycm9yIiwibWVzc2FnZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJlbWFpbCIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJfcmVhY3QiLCJfZm9ybSIsIl9ob29rcyIsIl9sb2FkaW5nUGFnZSIsIl9iZXlvbmRfY29udGV4dCIsIl9pbWFnZSIsIl9jb21wb25lbnRzIiwiaW5pdCIsInN0b3JlIiwicmVhZHkiLCJ0ZXh0cyIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwibG9hZGluZyIsInNldElzTG9hZGluZyIsInVzZVN0YXRlIiwiZ2V0SW5wdXQiLCJmaWVsZHMiLCJzZXRFcnJvciIsImRpc3BhdGNoIiwidXNlRm9ybSIsInVwZCIsInNldFVwZGF0ZSIsInVzZUJpbmRlciIsImFwcFdyYXBwZXIiLCJ0eXBlIiwiZm9ybURpc2FibGVkIiwiY3JlYXRlRWxlbWVudCIsIkxvYWRpbmdQYWdlIiwiZGlzYWJsZWQiLCJoYW5kbGVTdWJtaXQiLCJtb2RlIiwidGhlbWVTdG9yYWdlIiwiZ2V0SXRlbSIsImxvZ28iLCJjbGFzc05hbWUiLCJJbWFnZSIsInNyYyIsImdsb2JhbFRoaXMiLCJiYXNlRGlyIiwiYWx0IiwiRm9ybSIsIm9uU3VibWl0IiwidGl0bGUiLCJzdWJ0aXRsZSIsIklucHV0IiwiaGFzRXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJCdXR0b24iLCJ2YXJpYW50IiwidmVyaWZ5Il0sInNvdXJjZXMiOlsiL3dpZGdldC90cy9jb250cm9sbGVyLnRzIiwiL3dpZGdldC90cy9tb2RlbC50cyIsIi93aWRnZXQvdHMvdHlwZXMudHMiLCIvd2lkZ2V0L3RzL3ZpZXdzL3BhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUVBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDVkcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM5QyxJQUFJQyxNQUFNQSxDQUFBO2NBQ1QsT0FBT0osS0FBQSxDQUFBSyxJQUFJO1lBQ1o7WUFFQSxDQUFBQyxPQUFRO1lBRVJDLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsT0FBUSxHQUFHLElBQUlMLE1BQUEsQ0FBQU8sT0FBTyxFQUFFO2NBQzdCLE9BQU8sSUFBSSxDQUFDLENBQUFGLE9BQVE7WUFDckI7WUFFQUcsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBSCxPQUFRLENBQUNHLElBQUksRUFBRTtZQUNyQjs7VUFDQUMsT0FBQSxDQUFBUixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckJELElBQUFELE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFZLFFBQUEsR0FBQVosT0FBQTtVQUNBLElBQUFhLFFBQUEsR0FBQWIsT0FBQTtVQUNBLElBQUFjLE9BQUEsR0FBQWQsT0FBQTtVQUNNLE1BQU9TLE9BQVEsU0FBUVAsTUFBQSxDQUFBYSxhQUFpQjtZQUM3QyxDQUFBQyxLQUFNO1lB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