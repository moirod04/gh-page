System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.4/base", "@beyond-js/reactive@1.1.14/model", "@bg/auth-api@1.0.0/wrapper.ts", "@bg/jadmin@0.0.1/config", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing", "@jadmin/ui@1.0.0/hooks", "@bg/jadmin@0.0.1/loading-page", "pragmate-ui@0.1.2/form", "pragmate-ui@0.1.2/image", "@bg/jadmin@0.0.1/alert", "@bg/jadmin@0.0.1/wrapper", "pragmate-ui@0.1.2/components"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Controller, Page, __beyond_pkg, hmr;
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
    }, function (_bgJadmin001Config) {
      dependency_5 = _bgJadmin001Config;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_beyondJsKernel019Routing) {
      dependency_7 = _beyondJsKernel019Routing;
    }, function (_jadminUi100Hooks) {
      dependency_8 = _jadminUi100Hooks;
    }, function (_bgJadmin001LoadingPage) {
      dependency_9 = _bgJadmin001LoadingPage;
    }, function (_pragmateUi012Form) {
      dependency_10 = _pragmateUi012Form;
    }, function (_pragmateUi012Image) {
      dependency_11 = _pragmateUi012Image;
    }, function (_bgJadmin001Alert) {
      dependency_12 = _bgJadmin001Alert;
    }, function (_bgJadmin001Wrapper) {
      dependency_13 = _bgJadmin001Wrapper;
    }, function (_pragmateUi012Components) {
      dependency_14 = _pragmateUi012Components;
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
          "vspecifier": "@bg/jadmin@0.0.1/auth-login",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/base', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@bg/auth-api/wrapper.ts', dependency_4], ['@bg/jadmin/config', dependency_5], ['react', dependency_6], ['@beyond-js/kernel/routing', dependency_7], ['@jadmin/ui/hooks', dependency_8], ['@bg/jadmin/loading-page', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/image', dependency_11], ['@bg/jadmin/alert', dependency_12], ['@bg/jadmin/wrapper', dependency_13], ['pragmate-ui/components', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "jadmin-auth-login-page",
        "vspecifier": "@bg/jadmin@0.0.1/auth-login.widget",
        "is": "page",
        "route": "/auth/login"
      }]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3088529587,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _views = require("./views");
          var _model = require("./model");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            get Widget() {
              return _views.Page;
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
        hash: 300451831,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Manager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _wrapper = require("@bg/auth-api/wrapper.ts");
          var _config = require("@bg/jadmin/config");
          class Manager extends _model.ReactiveModel {
            #message;
            get message() {
              return this.#message;
            }
            #invalid;
            get invalid() {
              return this.#invalid;
            }
            #error;
            get error() {
              return this.#error;
            }
            login = async fields => {
              this.fetching = true;
              this.#error = false;
              this.triggerEvent();
              try {
                const response = await _wrapper.session.login({
                  ...fields,
                  isAdmin: true,
                  appToken: _config.default.params.application.token
                });
                if (response?.error) throw new Error(response.error);
                return {
                  status: true
                };
              } catch (error) {
                this.#error = true;
                return {
                  status: false,
                  error
                };
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
        hash: 240144534,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 4235462158,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Page = Page;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _hooks = require("@jadmin/ui/hooks");
          var _loadingPage = require("@bg/jadmin/loading-page");
          var _beyond_context = require("beyond_context");
          var _image = require("pragmate-ui/image");
          var _form = require("pragmate-ui/form");
          var _alert = require("@bg/jadmin/alert");
          var _wrapper = require("@bg/jadmin/wrapper");
          var _config = require("@bg/jadmin/config");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function Page({
            store
          }) {
            const [ready, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const init = {
              email: '',
              password: '',
              isRemember: false
            };
            const {
              getInput,
              fields,
              error,
              setError,
              dispatch,
              getCheckbox
            } = (0, _hooks.useForm)({
              init
            });
            const [upd, setUpdate] = (0, _react.useState)({});
            const [show, setShow] = _react.default.useState(false);
            const [fetching, setFetching] = (0, _react.useState)(false);
            (0, _hooks.useBinder)([store], () => {
              if (store.error) setError({
                error: 'Usuario o clave incorrectos'
              });else setError({
                error: ''
              });
              setFetching(store.fetching);
            });
            (0, _hooks.useBinder)([_wrapper.appWrapper], () => setUpdate({}), 'change.theme');
            (0, _hooks.useBinder)([store], () => {
              dispatch({
                type: 'reset'
              });
              setError({});
            }, 'hide');
            const formDisabled = {};
            const {
              email,
              password
            } = fields;
            (0, _hooks.useBinder)([_wrapper.appWrapper], () => {
              setShow(true);
            }, 'change.password');
            const themeStorage = localStorage.getItem('theme');
            if (!ready) return _react.default.createElement(_loadingPage.LoadingPage, null);
            if (!email || !password || fetching) formDisabled.disabled = true;
            const handleSubmit = async () => {
              try {
                const response = await store.login(fields);
                if (!response?.status) throw response?.error;
                dispatch({
                  type: 'reset'
                });
                _routing.routing.pushState('/');
                setTimeout(() => {
                  _wrapper.appWrapper.triggerEvent('login');
                }, 200);
              } catch (error) {
                if (error?.message === 'INVALID_EMAIL') setError({
                  error: texts.invalidEmail
                });
                console.error(error);
              }
            };
            const navigate = () => {
              dispatch({
                type: 'reset'
              });
              _routing.routing.pushState('/auth/forget/password');
            };
            const handleModal = () => {
              setShow(!show);
            };
            const isPassword = !_config.default.params.application.isPassword;
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
              className: 'title-login'
            }, texts.login), _react.default.createElement("div", {
              className: 'content-inputs'
            }, _react.default.createElement(_form.Input, {
              disabled: fetching,
              type: 'email',
              pattern: '^[a-zA-Z0-9]+(?:\\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\\.[a-zA-Z0-9]+)*$',
              loading: fetching,
              hasError: !!error.error,
              errorMessage: error?.error,
              ...getInput('email', texts.email, 'email', fetching)
            }), _react.default.createElement(_form.Input, {
              disabled: fetching,
              type: 'password',
              password: true,
              loading: fetching,
              hasError: !!error.error,
              errorMessage: error?.error,
              ...getInput('password', texts.password, 'password', fetching)
            })), isPassword && _react.default.createElement("div", {
              className: 'content-forget-remember'
            }, _react.default.createElement("a", {
              onClick: navigate,
              className: 'btn-link forget-password'
            }, texts.forgetPassword)), _react.default.createElement("div", {
              className: 'form__actions'
            }, _react.default.createElement(_components.Button, {
              type: 'submit',
              variant: 'primary',
              loading: fetching,
              ...formDisabled
            }, texts.init)))), _react.default.createElement(_alert.Alert, {
              confirm: texts.confirm,
              show: show,
              onClose: handleModal,
              title: texts.titleModal,
              text: texts.success_recoverPassword
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
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
        (require || prop === 'Page') && _export("Page", Page = require ? require('./views/index').Page : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfbW9kZWwiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiUGFnZSIsIm1hbmFnZXIiLCJjcmVhdGVTdG9yZSIsIk1hbmFnZXIiLCJoaWRlIiwiZXhwb3J0cyIsIl93cmFwcGVyIiwiX2NvbmZpZyIsIlJlYWN0aXZlTW9kZWwiLCJtZXNzYWdlIiwiaW52YWxpZCIsImVycm9yIiwibG9naW4iLCJmaWVsZHMiLCJmZXRjaGluZyIsInRyaWdnZXJFdmVudCIsInJlc3BvbnNlIiwic2Vzc2lvbiIsImlzQWRtaW4iLCJhcHBUb2tlbiIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcHBsaWNhdGlvbiIsInRva2VuIiwiRXJyb3IiLCJzdGF0dXMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX3JlYWN0IiwiX3JvdXRpbmciLCJfaG9va3MiLCJfbG9hZGluZ1BhZ2UiLCJfYmV5b25kX2NvbnRleHQiLCJfaW1hZ2UiLCJfZm9ybSIsIl9hbGVydCIsIl9jb21wb25lbnRzIiwic3RvcmUiLCJyZWFkeSIsInRleHRzIiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJpbml0IiwiZW1haWwiLCJwYXNzd29yZCIsImlzUmVtZW1iZXIiLCJnZXRJbnB1dCIsInNldEVycm9yIiwiZGlzcGF0Y2giLCJnZXRDaGVja2JveCIsInVzZUZvcm0iLCJ1cGQiLCJzZXRVcGRhdGUiLCJ1c2VTdGF0ZSIsInNob3ciLCJzZXRTaG93Iiwic2V0RmV0Y2hpbmciLCJ1c2VCaW5kZXIiLCJhcHBXcmFwcGVyIiwidHlwZSIsImZvcm1EaXNhYmxlZCIsInRoZW1lU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjcmVhdGVFbGVtZW50IiwiTG9hZGluZ1BhZ2UiLCJkaXNhYmxlZCIsImhhbmRsZVN1Ym1pdCIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJzZXRUaW1lb3V0IiwiaW52YWxpZEVtYWlsIiwiY29uc29sZSIsIm5hdmlnYXRlIiwiaGFuZGxlTW9kYWwiLCJpc1Bhc3N3b3JkIiwibG9nbyIsImNsYXNzTmFtZSIsIkltYWdlIiwic3JjIiwiZ2xvYmFsVGhpcyIsImJhc2VEaXIiLCJhbHQiLCJGb3JtIiwib25TdWJtaXQiLCJJbnB1dCIsInBhdHRlcm4iLCJsb2FkaW5nIiwiaGFzRXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJvbkNsaWNrIiwiZm9yZ2V0UGFzc3dvcmQiLCJCdXR0b24iLCJ2YXJpYW50IiwiQWxlcnQiLCJjb25maXJtIiwib25DbG9zZSIsInRpdGxlIiwidGl0bGVNb2RhbCIsInRleHQiLCJzdWNjZXNzX3JlY292ZXJQYXNzd29yZCJdLCJzb3VyY2VzIjpbIi93aWRnZXQvdHMvY29udHJvbGxlci50cyIsIi93aWRnZXQvdHMvbW9kZWwudHMiLCIvdHlwZXMudHMiLCIvd2lkZ2V0L3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDVkcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM5QyxJQUFJQyxNQUFNQSxDQUFBO2NBQ1QsT0FBT0osTUFBQSxDQUFBSyxJQUFJO1lBQ1o7WUFFQSxDQUFBQyxPQUFRO1lBRVJDLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsT0FBUSxHQUFHLElBQUlMLE1BQUEsQ0FBQU8sT0FBTyxFQUFFO2NBQzdCLE9BQU8sSUFBSSxDQUFDLENBQUFGLE9BQVE7WUFDckI7WUFFQUcsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBSCxP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