System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/base", "@beyond-js/reactive@1.1.14/model", "react@18.2.0", "@bg/jadmin@0.0.1/app-icon", "@jadmin/ui@1.0.0/hooks", "@bg/jadmin@0.0.1/loading-page", "@bg/auth-api@1.0.0/wrapper.ts", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.2/form", "pragmate-ui@0.1.2/image", "pragmate-ui@0.1.2/alert", "@bg/jadmin@0.0.1/wrapper", "pragmate-ui@0.1.2/components", "@bg/jadmin@0.0.1/config"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
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
    }, function (_bgJadmin001AppIcon) {
      dependency_6 = _bgJadmin001AppIcon;
    }, function (_jadminUi100Hooks) {
      dependency_7 = _jadminUi100Hooks;
    }, function (_bgJadmin001LoadingPage) {
      dependency_8 = _bgJadmin001LoadingPage;
    }, function (_bgAuthApi100WrapperTs) {
      dependency_9 = _bgAuthApi100WrapperTs;
    }, function (_beyondJsKernel019Routing) {
      dependency_10 = _beyondJsKernel019Routing;
    }, function (_pragmateUi012Form) {
      dependency_11 = _pragmateUi012Form;
    }, function (_pragmateUi012Image) {
      dependency_12 = _pragmateUi012Image;
    }, function (_pragmateUi012Alert) {
      dependency_13 = _pragmateUi012Alert;
    }, function (_bgJadmin001Wrapper) {
      dependency_14 = _bgJadmin001Wrapper;
    }, function (_pragmateUi012Components) {
      dependency_15 = _pragmateUi012Components;
    }, function (_bgJadmin001Config) {
      dependency_16 = _bgJadmin001Config;
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
          "vspecifier": "@bg/jadmin@0.0.1/set-forgotten-password",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['react', dependency_5], ['@bg/jadmin/app-icon', dependency_6], ['@jadmin/ui/hooks', dependency_7], ['@bg/jadmin/loading-page', dependency_8], ['@bg/auth-api/wrapper.ts', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['pragmate-ui/form', dependency_11], ['pragmate-ui/image', dependency_12], ['pragmate-ui/alert', dependency_13], ['@bg/jadmin/wrapper', dependency_14], ['pragmate-ui/components', dependency_15], ['@bg/jadmin/config', dependency_16]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "jadmin-auth-set-forgotten-password",
        "vspecifier": "@bg/jadmin@0.0.1/set-forgotten-password.widget",
        "is": "page",
        "route": "/auth/set-forgotten-password/${token}"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/jadmin@0.0.1/set-forgotten-password.widget');
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
        hash: 1479960075,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Manager = void 0;
          var _model = require("@beyond-js/reactive/model");
          class Manager extends _model.ReactiveModel {
            hide = () => this.triggerEvent('hide');
          }
          exports.Manager = Manager;
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 1015353799,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/validate-password/index
      ***********************************************/

      ims.set('./views/validate-password/index', {
        hash: 153653791,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ValidatePassword = ValidatePassword;
          var _react = require("react");
          var _item = require("./item");
          function ValidatePassword({
            texts,
            validate
          }) {
            const dataValidate = [{
              label: texts.lowercase,
              regExp: "(?=.*[a-z])"
            }, {
              label: texts.uppercase,
              regExp: "(?=.*[A-Z])"
            }, {
              label: texts.number,
              regExp: "(?=.*[0-9])"
            }, {
              label: texts.specialCharacter,
              regExp: "(?=.*[!@#$%^&*])"
            }, {
              label: texts.eightCharacters,
              regExp: "(?=.{8,})"
            }];
            const output = dataValidate.map(item => {
              return _react.default.createElement(_item.default, {
                key: item.regExp,
                item: item,
                validate: validate
              });
            });
            return _react.default.createElement("div", {
              className: "validation"
            }, _react.default.createElement("ul", null, output));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/validate-password/item
      **********************************************/

      ims.set('./views/validate-password/item', {
        hash: 2762411716,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = Item;
          var _react = require("react");
          var _appIcon = require("@bg/jadmin/app-icon");
          function Item({
            item,
            validate
          }) {
            const ref = (0, _react.useRef)(null);
            const [icon, setIcon] = (0, _react.useState)('circle');
            const regExp = new RegExp(item.regExp);
            (0, _react.useEffect)(() => {
              if (regExp.test(validate)) {
                ref.current.classList.add('valid');
                setIcon('check');
                return;
              }
              ref.current.classList.remove('valid');
              if (icon !== 'circle') setIcon('circle');
            }, [validate]);
            return _react.default.createElement("li", {
              ref: ref
            }, _react.default.createElement(_appIcon.AppIcon, {
              icon: icon
            }), item.label);
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/view
      ****************************/

      ims.set('./views/view', {
        hash: 3138209327,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _hooks = require("@jadmin/ui/hooks");
          var _loadingPage = require("@bg/jadmin/loading-page");
          var _beyond_context = require("beyond_context");
          var _wrapper = require("@bg/auth-api/wrapper.ts");
          var _routing = require("@beyond-js/kernel/routing");
          var _form = require("pragmate-ui/form");
          var _image = require("pragmate-ui/image");
          var _alert = require("pragmate-ui/alert");
          var _validatePassword = require("./validate-password");
          var _wrapper2 = require("@bg/jadmin/wrapper");
          var _components = require("pragmate-ui/components");
          var _config = require("@bg/jadmin/config");
          /*bundle*/
          function View(specs) {
            const [ready, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const init = {
              repeatPassword: '',
              newPassword: ''
            };
            const {
              getInput,
              fields,
              error,
              setError,
              dispatch
            } = (0, _hooks.useForm)({
              init
            });
            const token = specs.uri.vars.get('token');
            const isForget = !!specs.uri.qs.get('forget');
            const [upd, setUpdate] = _react.default.useState({});
            const [loading, setLoading] = (0, _react.useState)(false);
            const formDisabled = {};
            const {
              repeatPassword,
              newPassword
            } = fields;
            const hide = () => {
              dispatch({
                type: "reset"
              });
              setError({});
            };
            (0, _hooks.useBinder)([specs.store], hide, "hide");
            (0, _hooks.useBinder)([_wrapper2.appWrapper], () => setUpdate({}), 'change.theme');
            if (!ready) return _react.default.createElement(_loadingPage.LoadingPage, null);
            if (!repeatPassword || loading) {
              formDisabled.disabled = true;
            }
            const themeStorage = localStorage.getItem("theme");
            const logo = themeStorage ? themeStorage === "dark" ? "logo-auth-dark" : "logo-auth" : "logo-auth-dark";
            const handleSubmit = async () => {
              try {
                if (repeatPassword !== newPassword) {
                  setError({
                    password: texts.passwordError
                  });
                  return;
                }
                setLoading(true);
                const results = await _wrapper.session.setPassword({
                  newPassword,
                  token,
                  url: _config.default.params.uploadUrl.development,
                  isForget,
                  email: localStorage.getItem('__temp'),
                  appToken: _config.default.params.application.token
                });
                if (results.error) {
                  setLoading(false);
                  throw new Error(results.error);
                }
                ;
                dispatch({
                  type: "reset"
                });
                _routing.routing.pushState('/auth/login');
                setLoading(false);
                _wrapper2.appWrapper.triggerEvent("change.password");
              } catch (error) {
                setError({
                  error: texts.error
                });
                console.error(error);
              }
            };
            return _react.default.createElement("div", {
              className: "page__container"
            }, _react.default.createElement("div", {
              className: "content-auth"
            }, _react.default.createElement(_image.Image, {
              src: `${globalThis.baseDir}assets/${logo}.png`,
              alt: "logo",
              className: "logo-header"
            }), _react.default.createElement(_form.Form, {
              onSubmit: handleSubmit
            }, _react.default.createElement("h1", {
              className: "title-login"
            }, texts.title.edit), _react.default.createElement(_alert.Alert, {
              message: error.error,
              mode: "error",
              show: !!error.error,
              isClose: false
            }), _react.default.createElement("div", {
              className: "content-inputs"
            }, _react.default.createElement(_form.Input, {
              password: true,
              hasError: !!error?.password,
              errorMessage: error?.password,
              pattern: "^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\\d]){1,})(?=(.*[\\W]){1,})(?!.*\\s).{8,}$",
              type: "password",
              ...getInput('newPassword', texts.newPassword, 'password'),
              loading: loading
            }), _react.default.createElement(_form.Input, {
              type: "password",
              hasError: !!error?.password,
              pattern: "^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\\d]){1,})(?=(.*[\\W]){1,})(?!.*\\s).{8,}$",
              errorMessage: error?.password,
              password: true,
              loading: loading,
              ...getInput('repeatPassword', texts.repeatPassword, 'currentPassword')
            })), _react.default.createElement(_validatePassword.ValidatePassword, {
              texts: texts,
              validate: newPassword
            }), _react.default.createElement("div", {
              className: "form__actions"
            }, _react.default.createElement(_components.Button, {
              type: "submit",
              variant: "primary",
              loading: loading,
              ...formDisabled
            }, texts.save)))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/view",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/view').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlldyIsIl9tb2RlbCIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJWaWV3IiwibWFuYWdlciIsImNyZWF0ZVN0b3JlIiwiTWFuYWdlciIsImhpZGUiLCJleHBvcnRzIiwiUmVhY3RpdmVNb2RlbCIsInRyaWdnZXJFdmVudCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfcmVhY3QiLCJfaXRlbSIsIlZhbGlkYXRlUGFzc3dvcmQiLCJ0ZXh0cyIsInZhbGlkYXRlIiwiZGF0YVZhbGlkYXRlIiwibGFiZWwiLCJsb3dlcmNhc2UiLCJyZWdFeHAiLCJ1cHBlcmNhc2UiLCJudW1iZXIiLCJzcGVjaWFsQ2hhcmFjdGVyIiwiZWlnaHRDaGFyYWN0ZXJzIiwib3V0cHV0IiwibWFwIiwiaXRlbSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50Iiwia2V5IiwiY2xhc3NOYW1lIiwiX2FwcEljb24iLCJJdGVtIiwicmVmIiwidXNlUmVmIiwiaWNvbiIsInNldEljb24iLCJ1c2VTdGF0ZSIsIlJlZ0V4cCIsInVzZUVmZmVjdCIsInRlc3QiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiQXBwSWNvbiIsIl9ob29rcyIsIl9sb2FkaW5nUGFnZSIsIl9iZXlvbmRfY29udGV4dCIsIl93cmFwcGVyIiwiX3JvdXRpbmciLCJfZm9ybSIsIl9pbWFnZSIsIl9hbGVydCIsIl92YWxpZGF0ZVBhc3N3b3JkIiwiX3dyYXBwZXIyIiwiX2NvbXBvbmVudHMiLCJfY29uZmlnIiwic3BlY3MiLCJyZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiaW5pdCIsInJlcGVhdFBhc3N3b3JkIiwibmV3UGFzc3dvcmQiLCJnZXRJbnB1dCIsImZpZWxkcyIsImVycm9yIiwic2V0RXJyb3IiLCJkaXNwYXRjaCIsInVzZUZvcm0iLCJ0b2tlbiIsInVyaSIsInZhcnMiLCJnZXQiLCJpc0ZvcmdldCIsInFzIiwidXBkIiwic2V0VXBkYXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmb3JtRGlzYWJsZWQiLCJ0eXBlIiwidXNlQmluZGVyIiwic3RvcmUiLCJhcHBXcmFwcGVyIiwiTG9hZGluZ1BhZ2UiLCJkaXNhYmxlZCIsInRoZW1lU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsb2dvIiwiaGFuZGxlU3VibWl0IiwicGFzc3dvcmQiLCJwYXNzd29yZEVycm9yIiwicmVzdWx0cyIsInNlc3Npb24iLCJzZXRQYXNzd29yZCIsInVybCIsInBhcmFtcyIsInVwbG9hZFVybCIsImRldmVsb3BtZW50IiwiZW1haWwiLCJhcHBUb2tlbiIsImFwcGxpY2F0aW9uIiwiRXJyb3IiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiY29uc29sZSIsIkltYWdlIiwic3JjIiwiZ2xvYmFsVGhpcyIsImJhc2VEaXIiLCJhbHQiLCJGb3JtIiwib25TdWJtaXQiLCJ0aXRsZSIsImVkaXQiLCJBbGVydCIsIm1lc3NhZ2UiLCJtb2RlIiwic2hvdyIsImlzQ2xvc2UiLCJJbnB1dCIsImhhc0Vycm9yIiwiZXJyb3JNZXNzYWdlIiwicGF0dGVybiIsIkJ1dHRvbiIsInZhcmlhbnQiLCJzYXZlIl0sInNvdXJjZXMiOlsiL3dpZGdldC90cy9jb250cm9sbGVyLnRzIiwiL3dpZGdldC90cy9tb2RlbC50cyIsIi90eXBlcy50cyIsIi93aWRnZXQvdHMvdmlld3MvdmFsaWRhdGUtcGFzc3dvcmQvaW5kZXgudHN4IiwiL3dpZGdldC90cy92aWV3cy92YWxpZGF0ZS1wYXNzd29yZC9pdGVtLnRzeCIsIi93aWRnZXQvdHMvdmlld3Mvdmlldy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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