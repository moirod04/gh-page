System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.4/page", "@beyond-js/reactive@1.1.14/model", "sgs-workflow@1.0.0/wrappers", "react@18.2.0", "sgs-workflow@1.0.0/hooks", "sgs-workflow@1.0.0/loading-page", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.2/image", "pragmate-ui@0.1.2/form", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@0.1.2/components", "pragmate-ui@0.1.2/alert", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
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
    }, function (_beyondJsReact18Widgets104Page) {
      dependency_2 = _beyondJsReact18Widgets104Page;
    }, function (_beyondJsReactive1114Model) {
      dependency_3 = _beyondJsReactive1114Model;
    }, function (_sgsWorkflow100Wrappers) {
      dependency_4 = _sgsWorkflow100Wrappers;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_sgsWorkflow100Hooks) {
      dependency_6 = _sgsWorkflow100Hooks;
    }, function (_sgsWorkflow100LoadingPage) {
      dependency_7 = _sgsWorkflow100LoadingPage;
    }, function (_beyondJsKernel019Routing) {
      dependency_8 = _beyondJsKernel019Routing;
    }, function (_pragmateUi012Image) {
      dependency_9 = _pragmateUi012Image;
    }, function (_pragmateUi012Form) {
      dependency_10 = _pragmateUi012Form;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_11 = _beyondJsReact18Widgets104Hooks;
    }, function (_pragmateUi012Components) {
      dependency_12 = _pragmateUi012Components;
    }, function (_pragmateUi012Alert) {
      dependency_13 = _pragmateUi012Alert;
    }, function (_beyondJsKernel019Styles) {
      dependency_14 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@bg/jadmin", "0.0.1"], ["@bg/auth-api", "1.0.0"], ["@jadmin/ui", "1.0.0"], ["@bgroup/jview", "1.0.3"], ["@bgroup/helpers", "1.0.7"], ["@bgroup/wise-form", "0.0.4"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/bee", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/reactive", "1.1.14"], ["@bgroup/http-suite", "1.0.5"], ["chart.js", "4.4.1"], ["dayjs", "1.11.10"], ["dotenv", "16.4.4"], ["express", "4.18.2"], ["framer-motion", "10.18.0"], ["googleapis", "129.0.0"], ["javascript-time-ago", "2.5.10"], ["jsonwebtoken", "9.0.2"], ["mathjs", "12.4.1"], ["moment", "2.30.1"], ["perfect-scrollbar", "1.5.5"], ["pragmate-ui", "0.1.2"], ["prismjs", "1.29.0"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-google-recaptcha", "3.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["swiper", "11.0.6"], ["tippy.js", "6.3.7"], ["use-debounce", "10.0.0"], ["uuid", "9.0.1"], ["wise-form", "0.0.4"], ["@babel/core", "7.23.9"], ["@babel/preset-env", "7.23.9"], ["@babel/preset-typescript", "7.23.3"], ["@types/react", "18.2.55"], ["@types/react-dom", "18.2.19"], ["babel-jest", "29.7.0"], ["jest", "29.7.0"], ["ts-jest", "29.1.2"], ["sgs-workflow", "1.0.0"], ["sgs-workflow", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "sgs-workflow@1.0.0/auth/login",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['sgs-workflow/wrappers', dependency_4], ['react', dependency_5], ['sgs-workflow/hooks', dependency_6], ['sgs-workflow/loading-page', dependency_7], ['@beyond-js/kernel/routing', dependency_8], ['pragmate-ui/image', dependency_9], ['pragmate-ui/form', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/alert', dependency_13], ['@beyond-js/kernel/styles', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "auth-login-page",
        "vspecifier": "sgs-workflow@1.0.0/auth/login.widget",
        "is": "page",
        "route": "/login"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('sgs-workflow@1.0.0/auth/login.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2891245409,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          var _manager = require("./manager");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            get Widget() {
              return _views.Page;
            }
            #manager;
            createStore() {
              this.#manager = new _manager.Manager();
              return this.#manager;
            }
            hide() {
              this.#manager.hide();
            }
          }
          exports.Controller = Controller;
        }
      });

      /*************************
      INTERNAL MODULE: ./manager
      *************************/

      ims.set('./manager', {
        hash: 3970189908,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Manager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _wrappers = require("sgs-workflow/wrappers");
          class Manager extends _model.ReactiveModel {
            #message;
            get message() {
              return this.#message;
            }
            #invalid;
            get invalid() {
              return this.#invalid;
            }
            #error = '';
            get error() {
              return this.#error;
            }
            login = async fields => {
              this.#error = '';
              this.fetching = true;
              try {
                const responseToken = await _wrappers.session.login(fields);
                if (!responseToken.status) throw responseToken.error;
                return {
                  status: true
                };
              } catch (error) {
                this.#error = error;
                this.triggerEvent();
                return {
                  status: false,
                  error
                };
              } finally {
                this.fetching = false;
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
        hash: 2758782137,
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
        hash: 1203702509,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Page = Page;
          var _react = require("react");
          var _hooks = require("sgs-workflow/hooks");
          var _loadingPage = require("sgs-workflow/loading-page");
          var _beyond_context = require("beyond_context");
          var _routing = require("@beyond-js/kernel/routing");
          var _image = require("pragmate-ui/image");
          var _form = require("pragmate-ui/form");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var _alert = require("pragmate-ui/alert");
          var _wrappers = require("sgs-workflow/wrappers");
          const init = {
            username: '',
            password: ''
          };
          /*bundle*/
          function Page({
            store
          }) {
            const [ready, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            const [type, setType] = (0, _react.useState)('');
            const {
              getInput,
              fields,
              error,
              setError,
              dispatch
            } = (0, _hooks.useForm)({
              init
            });
            const [fetching, setFetching] = (0, _react.useState)(false);
            const messageInvalidToken = () => {
              const storage = localStorage.getItem('token.invalid');
              if (!storage || !ready) return;
              setType('error');
              setError({
                error: texts.noSession
              });
              localStorage.removeItem('token.invalid');
            };
            (0, _react.useEffect)(messageInvalidToken, [ready]);
            (0, _hooks2.useBinder)([_wrappers.session], messageInvalidToken, 'token.expired');
            (0, _hooks2.useBinder)([store], () => {
              setFetching(store.fetching);
            });
            (0, _hooks2.useBinder)([store], () => {
              dispatch({
                type: 'reset'
              });
              setError({});
              setType('');
            }, 'hide');
            const formDisabled = {};
            const {
              username,
              password
            } = fields;
            if (!ready) return _react.default.createElement(_loadingPage.LoadingPage, null);
            if (!username || !password || fetching) formDisabled.disabled = true;
            const handleSubmit = async () => {
              const regex = /\s/;
              setType('');
              if (regex.test(fields.username) || regex.test(fields.password)) {
                setType('error');
                setError({
                  error: texts.invalidEmail
                });
                return;
              }
              try {
                const response = await store.login(fields);
                if (!response?.status) throw response?.error;
                _routing.routing.pushState('/');
                dispatch({
                  type: 'reset'
                });
              } catch (error) {
                const message = error === 'SOMETHING_WENT_WRONG' ? texts.somethingWentWrong : texts.invalidEmail;
                setError({
                  error: message
                });
                setType('error');
              }
            };
            const preText = type === 'error' ? 'Error: ' : '';
            return _react.default.createElement("div", {
              className: "page__container"
            }, _react.default.createElement("div", {
              className: "content-auth"
            }, _react.default.createElement(_image.Image, {
              src: `${globalThis.baseDir}assets/logo-auth-light.png`,
              alt: "logo",
              className: "logo-header"
            }), !!type && !!error.error && _react.default.createElement(_alert.Alert, {
              type: type
            }, _react.default.createElement("h3", {
              className: "alert__title-span"
            }, preText && _react.default.createElement("strong", {
              className: "pre-text"
            }, preText), error.error)), _react.default.createElement(_form.Form, {
              onSubmit: handleSubmit
            }, _react.default.createElement("h1", {
              className: "title-login"
            }, texts.login), _react.default.createElement("span", {
              className: "texts-subtitle"
            }, texts.subTitle), _react.default.createElement("div", {
              className: "content-inputs"
            }, _react.default.createElement(_form.Input, {
              disabled: fetching,
              type: "text",
              loading: fetching,
              icon: "user-header",
              ...getInput('username', texts.email, 'username', fetching)
            }), _react.default.createElement(_form.Input, {
              disabled: fetching,
              type: "password",
              password: true,
              loading: fetching,
              ...getInput('password', texts.password, 'password', fetching)
            })), _react.default.createElement("div", {
              className: "content-forget-remember"
            }, _react.default.createElement(_components.Link, {
              className: "forget-password",
              href: "/auth/forgot-password",
              target: "_blank"
            }, texts.forgetPassword)), _react.default.createElement("div", {
              className: "form__actions"
            }, _react.default.createElement(_components.Button, {
              type: "submit",
              variant: "primary",
              loading: fetching,
              ...formDisabled
            }, texts.init)))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfbWFuYWdlciIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiUGFnZSIsIm1hbmFnZXIiLCJjcmVhdGVTdG9yZSIsIk1hbmFnZXIiLCJoaWRlIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl93cmFwcGVycyIsIlJlYWN0aXZlTW9kZWwiLCJtZXNzYWdlIiwiaW52YWxpZCIsImVycm9yIiwibG9naW4iLCJmaWVsZHMiLCJmZXRjaGluZyIsInJlc3BvbnNlVG9rZW4iLCJzZXNzaW9uIiwic3RhdHVzIiwidHJpZ2dlckV2ZW50IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9yZWFjdCIsIl9ob29rcyIsIl9sb2FkaW5nUGFnZSIsIl9iZXlvbmRfY29udGV4dCIsIl9yb3V0aW5nIiwiX2ltYWdlIiwiX2Zvcm0iLCJfaG9va3MyIiwiX2NvbXBvbmVudHMiLCJfYWxlcnQiLCJpbml0IiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInN0b3JlIiwicmVhZHkiLCJ0ZXh0cyIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidHlwZSIsInNldFR5cGUiLCJ1c2VTdGF0ZSIsImdldElucHV0Iiwic2V0RXJyb3IiLCJkaXNwYXRjaCIsInVzZUZvcm0iLCJzZXRGZXRjaGluZyIsIm1lc3NhZ2VJbnZhbGlkVG9rZW4iLCJzdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm5vU2Vzc2lvbiIsInJlbW92ZUl0ZW0iLCJ1c2VFZmZlY3QiLCJ1c2VCaW5kZXIiLCJmb3JtRGlzYWJsZWQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkxvYWRpbmdQYWdlIiwiZGlzYWJsZWQiLCJoYW5kbGVTdWJtaXQiLCJyZWdleCIsInRlc3QiLCJpbnZhbGlkRW1haWwiLCJyZXNwb25zZSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJzb21ldGhpbmdXZW50V3JvbmciLCJwcmVUZXh0IiwiY2xhc3NOYW1lIiwiSW1hZ2UiLCJzcmMiLCJnbG9iYWxUaGlzIiwiYmFzZURpciIsImFsdCIsIkFsZXJ0IiwiRm9ybSIsIm9uU3VibWl0Iiwic3ViVGl0bGUiLCJJbnB1dCIsImxvYWRpbmciLCJpY29uIiwiZW1haWwiLCJMaW5rIiwiaHJlZiIsInRhcmdldCIsImZvcmdldFBhc3N3b3JkIiwiQnV0dG9uIiwidmFyaWFudCJdLCJzb3VyY2VzIjpbIi93aWRnZXQvdHMvY29udHJvbGxlci50cyIsIi93aWRnZXQvdHMvbWFuYWdlci50cyIsIi90eXBlcy50cyIsIi93aWRnZXQvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVBLElBQUFFLFFBQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxJQUFJQyxNQUFNQSxDQUFBO2NBQ1QsT0FBT0osTUFBQSxDQUFBSyxJQUFJO1lBQ1o7WUFFQSxDQUFBQyxPQUFRO1lBRVJDLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsT0FBUSxHQUFHLElBQUlMLFFBQUEsQ0FBQU8sT0FBTyxFQUFFO2NBQzdCLE9BQU8sSUFBSSxDQUFDLENBQUFGLE9BQVE7WUFDckI7WUFFQUcsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBSCxPQUFRLENBQUNHLElBQUksRUFBRTtZQUNyQjs7VUFDQUMsT0FBQSxDQUFBUixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckJELElBQUFTLE1BQUEsR0FBQVosT0FBQTtVQUVBLElBQUFhLFNBQUEsR0FBQWIs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