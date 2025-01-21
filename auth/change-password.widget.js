System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.4/page", "@beyond-js/reactive@1.1.14/model", "sgs-workflow@1.0.0/wrappers", "@beyond-js/kernel@0.1.9/routing", "react@18.2.0", "pragmate-ui@0.1.2/alert", "pragmate-ui@0.1.2/components", "sgs-workflow@1.0.0/hooks", "sgs-workflow@1.0.0/loading-page", "pragmate-ui@0.1.2/image", "pragmate-ui@0.1.2/form", "@beyond-js/react-18-widgets@1.0.4/hooks", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
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
    }, function (_beyondJsKernel019Routing) {
      dependency_5 = _beyondJsKernel019Routing;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi012Alert) {
      dependency_7 = _pragmateUi012Alert;
    }, function (_pragmateUi012Components) {
      dependency_8 = _pragmateUi012Components;
    }, function (_sgsWorkflow100Hooks) {
      dependency_9 = _sgsWorkflow100Hooks;
    }, function (_sgsWorkflow100LoadingPage) {
      dependency_10 = _sgsWorkflow100LoadingPage;
    }, function (_pragmateUi012Image) {
      dependency_11 = _pragmateUi012Image;
    }, function (_pragmateUi012Form) {
      dependency_12 = _pragmateUi012Form;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_13 = _beyondJsReact18Widgets104Hooks;
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
          "vspecifier": "sgs-workflow@1.0.0/auth/change-password",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['sgs-workflow/wrappers', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['react', dependency_6], ['pragmate-ui/alert', dependency_7], ['pragmate-ui/components', dependency_8], ['sgs-workflow/hooks', dependency_9], ['sgs-workflow/loading-page', dependency_10], ['pragmate-ui/image', dependency_11], ['pragmate-ui/form', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['@beyond-js/kernel/styles', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "auth-change-password-page",
        "vspecifier": "sgs-workflow@1.0.0/auth/change-password.widget",
        "is": "page",
        "route": "/auth/change-password/${token}"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('sgs-workflow@1.0.0/auth/change-password.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2059221388,
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
            show() {
              const token = this.uri.vars.get('token');
              this.#manager.token = token;
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
        hash: 3898331601,
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
            token = '';
            #invalid;
            get invalid() {
              return this.#invalid;
            }
            #error;
            get error() {
              return this.#error;
            }
            #feedback = false;
            get feedback() {
              return this.#feedback;
            }
            validateToken = async () => {
              try {
                const response = await _wrappers.session.validateResetToken({
                  token: this.token
                });
                if (!response.status) throw response.error;
                return {
                  status: true
                };
              } catch (error) {
                console.error('VALIDATE_TOKEN_ERROR', error);
                this.#error = error;
                this.#feedback = true;
                this.triggerEvent('error');
                return {
                  status: false,
                  error
                };
              } finally {
                this.ready = true;
              }
            };
            resetPassword = async fields => {
              this.fetching = true;
              const response = await _wrappers.session.resetPassword({
                ...fields,
                token: this.token
              });
              if (!response.status) {
                this.#error = response.error;
                this.triggerEvent('error');
                this.fetching = false;
                return {
                  status: false,
                  error: response.error
                };
              }
              this.#feedback = true;
              this.fetching = false;
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
        hash: 2852296036,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /********************************
      INTERNAL MODULE: ./views/feedback
      ********************************/

      ims.set('./views/feedback', {
        hash: 1283480959,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FeedBack = void 0;
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          var _components = require("pragmate-ui/components");
          const FeedBack = ({
            texts,
            store,
            type
          }) => {
            const errors = {
              SOMETHING_WENT_WRONG: texts.somethingWentWrong,
              TOKEN_EXPIRED: texts.tokenExpired
            };
            type = store.error ? _alert.ITypes.Error : _alert.ITypes.Success;
            const initialMessage = store.error || texts.success_recoverPassword;
            const customMessage = initialMessage in errors ? errors[initialMessage] : initialMessage;
            const closeAndBack = () => {
              window.close();
            };
            const preText = type === _alert.ITypes.Error && 'Error: ';
            return _react.default.createElement("div", {
              className: "page__container feedback"
            }, _react.default.createElement(_alert.Alert, {
              type: type,
              closable: false
            }, _react.default.createElement("h3", {
              className: "alert__title-span"
            }, _react.default.createElement("strong", {
              className: "pre-text"
            }, preText), customMessage)), _react.default.createElement("div", {
              className: "form__actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: closeAndBack
            }, texts.close)));
          };
          exports.FeedBack = FeedBack;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3846235181,
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
          var _image = require("pragmate-ui/image");
          var _form = require("pragmate-ui/form");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var _alert = require("pragmate-ui/alert");
          var _routing = require("@beyond-js/kernel/routing");
          var _feedback = require("./feedback");
          const init = {
            newPassword: '',
            password: ''
          };
          /*bundle*/
          function Page({
            store
          }) {
            const [ready, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            // Se usa any porque Alert no acepta pasar solo success por tipado
            const [type, setType] = _react.default.useState('');
            const {
              getInput,
              fields,
              error,
              setError,
              dispatch
            } = (0, _hooks.useForm)({
              init
            });
            const [update, setUpdate] = _react.default.useState({});
            const [fetching, setFetching] = (0, _react.useState)(false);
            (0, _hooks2.useBinder)([store], () => setUpdate({}));
            (0, _hooks2.useBinder)([store], () => {
              setError({
                error: store.error
              });
              setType(_alert.ITypes.Error);
            }, 'error');
            (0, _hooks2.useBinder)([store], () => {
              dispatch({
                type: 'reset'
              });
              setError({});
            }, 'hide');
            _react.default.useEffect(() => {
              store.validateToken();
            }, []);
            const formDisabled = {};
            const {
              newPassword,
              password
            } = fields;
            if (!ready || !store.ready) return _react.default.createElement(_loadingPage.LoadingPage, null);
            if (!newPassword || !password || fetching) formDisabled.disabled = true;
            if (store.feedback) return _react.default.createElement(_feedback.FeedBack, {
              texts: texts,
              store: store,
              type: type
            });
            const handleSubmit = async () => {
              if (fields.newPassword !== fields.password) {
                setType('error');
                setError({
                  error: texts.notMath
                });
                return;
              }
              if (fields.newPassword.length < 8 || fields.password < 8) {
                setType('error');
                setError({
                  error: texts.lengthPassword
                });
                return;
              }
              store.resetPassword(fields);
            };
            const closeAndBack = () => {
              // Cierra la ventana actual
              window.close();
              // Vuelve a la pestaña original
              window.focus();
              _routing.routing.pushState('/auth/login');
            };
            const errors = {
              SOMETHING_WENT_WRONG: texts.somethingWentWrong,
              TOKEN_EXPIRED: texts.tokenExpired
            };
            const initialError = error.error || store.error;
            const customMessage = initialError in errors ? errors[initialError] : initialError;
            return _react.default.createElement("div", {
              className: "page__container"
            }, _react.default.createElement("div", {
              className: "content-auth"
            }, _react.default.createElement(_image.Image, {
              src: `${globalThis.baseDir}assets/logo-auth-light.png`,
              alt: "logo",
              className: "logo-header"
            }), !!type && error.error && _react.default.createElement(_alert.Alert, {
              type: type,
              closable: false
            }, _react.default.createElement("h3", {
              className: "alert__title-span"
            }, _react.default.createElement("strong", {
              className: "pre-text"
            }, "Error: "), " ", customMessage)), _react.default.createElement(_form.Form, {
              onSubmit: handleSubmit
            }, _react.default.createElement("h1", {
              className: "title-login"
            }, texts.login), _react.default.createElement("span", {
              className: "texts-subtitle"
            }, texts.subTitle), _react.default.createElement("div", {
              className: "content-inputs"
            }, _react.default.createElement(_form.Input, {
              disabled: fetching,
              type: "password",
              loading: fetching,
              password: true,
              ...getInput('newPassword', texts.newPassword, 'newPassword', fetching)
            }), _react.default.createElement(_form.Input, {
              disabled: fetching,
              type: "password",
              password: true,
              loading: fetching,
              ...getInput('password', texts.confirmPassword, 'password', fetching)
            })), _react.default.createElement("div", {
              className: "form__actions two-actions"
            }, _react.default.createElement(_components.Button, {
              type: "reset",
              variant: "secondary",
              disabled: fetching,
              onClick: closeAndBack
            }, texts.cancel), _react.default.createElement(_components.Button, {
              type: "submit",
              variant: "primary",
              loading: store.fetching,
              ...formDisabled
            }, texts.accept)))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfbWFuYWdlciIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiUGFnZSIsIm1hbmFnZXIiLCJjcmVhdGVTdG9yZSIsIk1hbmFnZXIiLCJzaG93IiwidG9rZW4iLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJfd3JhcHBlcnMiLCJSZWFjdGl2ZU1vZGVsIiwibWVzc2FnZSIsImludmFsaWQiLCJlcnJvciIsImZlZWRiYWNrIiwidmFsaWRhdGVUb2tlbiIsInJlc3BvbnNlIiwic2Vzc2lvbiIsInZhbGlkYXRlUmVzZXRUb2tlbiIsInN0YXR1cyIsImNvbnNvbGUiLCJ0cmlnZ2VyRXZlbnQiLCJyZWFkeSIsInJlc2V0UGFzc3dvcmQiLCJmaWVsZHMiLCJmZXRjaGluZyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfcmVhY3QiLCJfYWxlcnQiLCJfY29tcG9uZW50cyIsIkZlZWRCYWNrIiwidGV4dHMiLCJzdG9yZSIsInR5cGUiLCJlcnJvcnMiLCJTT01FVEhJTkdfV0VOVF9XUk9ORyIsInNvbWV0aGluZ1dlbnRXcm9uZyIsIlRPS0VOX0VYUElSRUQiLCJ0b2tlbkV4cGlyZWQiLCJJVHlwZXMiLCJFcnJvciIsIlN1Y2Nlc3MiLCJpbml0aWFsTWVzc2FnZSIsInN1Y2Nlc3NfcmVjb3ZlclBhc3N3b3JkIiwiY3VzdG9tTWVzc2FnZSIsImNsb3NlQW5kQmFjayIsIndpbmRvdyIsImNsb3NlIiwicHJlVGV4dCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiQWxlcnQiLCJjbG9zYWJsZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiX2hvb2tzIiwiX2xvYWRpbmdQYWdlIiwiX2JleW9uZF9jb250ZXh0IiwiX2ltYWdlIiwiX2Zvcm0iLCJfaG9va3MyIiwiX3JvdXRpbmciLCJfZmVlZGJhY2siLCJpbml0IiwibmV3UGFzc3dvcmQiLCJwYXNzd29yZCIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0VHlwZSIsInVzZVN0YXRlIiwiZ2V0SW5wdXQiLCJzZXRFcnJvciIsImRpc3BhdGNoIiwidXNlRm9ybSIsInVwZGF0ZSIsInNldFVwZGF0ZSIsInNldEZldGNoaW5nIiwidXNlQmluZGVyIiwidXNlRWZmZWN0IiwiZm9ybURpc2FibGVkIiwiTG9hZGluZ1BhZ2UiLCJkaXNhYmxlZCIsImhhbmRsZVN1Ym1pdCIsIm5vdE1hdGgiLCJsZW5ndGgiLCJsZW5ndGhQYXNzd29yZCIsImZvY3VzIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImluaXRpYWxFcnJvciIsIkltYWdlIiwic3JjIiwiZ2xvYmFsVGhpcyIsImJhc2VEaXIiLCJhbHQiLCJGb3JtIiwib25TdWJtaXQiLCJsb2dpbiIsInN1YlRpdGxlIiwiSW5wdXQiLCJsb2FkaW5nIiwiY29uZmlybVBhc3N3b3JkIiwiY2FuY2VsIiwiYWNjZXB0Il0sInNvdXJjZXMiOlsiL3dpZGdldC90cy9jb250cm9sbGVyLnRzIiwiL3dpZGdldC90cy9tYW5hZ2VyLnRzIiwiL3R5cGVzLnRzIiwiL3dpZGdldC90cy92aWV3cy9mZWVkYmFjay50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVBLElBQUFFLFFBQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxJQUFJQyxNQUFNQSxDQUFBO2NBQ1QsT0FBT0osTUFBQSxDQUFB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