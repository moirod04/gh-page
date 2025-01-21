System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/base", "@beyond-js/reactive@1.1.14/model", "react@18.2.0", "@bg/jadmin@0.0.1/app-icon", "pragmate-ui@0.1.2/form", "@jadmin/ui@1.0.0/hooks", "@bg/jadmin@0.0.1/loading-page", "@bg/auth-api@1.0.0/wrapper.ts", "pragmate-ui@0.1.2/toast", "@bg/jadmin@0.0.1/config", "@bg/jadmin@0.0.1/breadcrumb", "pragmate-ui@0.1.2/components"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_pragmateUi012Form) {
      dependency_7 = _pragmateUi012Form;
    }, function (_jadminUi100Hooks) {
      dependency_8 = _jadminUi100Hooks;
    }, function (_bgJadmin001LoadingPage) {
      dependency_9 = _bgJadmin001LoadingPage;
    }, function (_bgAuthApi100WrapperTs) {
      dependency_10 = _bgAuthApi100WrapperTs;
    }, function (_pragmateUi012Toast) {
      dependency_11 = _pragmateUi012Toast;
    }, function (_bgJadmin001Config) {
      dependency_12 = _bgJadmin001Config;
    }, function (_bgJadmin001Breadcrumb) {
      dependency_13 = _bgJadmin001Breadcrumb;
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
          "vspecifier": "@bg/jadmin@0.0.1/change-password",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['react', dependency_5], ['@bg/jadmin/app-icon', dependency_6], ['pragmate-ui/form', dependency_7], ['@jadmin/ui/hooks', dependency_8], ['@bg/jadmin/loading-page', dependency_9], ['@bg/auth-api/wrapper.ts', dependency_10], ['pragmate-ui/toast', dependency_11], ['@bg/jadmin/config', dependency_12], ['@bg/jadmin/breadcrumb', dependency_13], ['pragmate-ui/components', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "jadmin-auth-change-password",
        "vspecifier": "@bg/jadmin@0.0.1/change-password.widget",
        "is": "page",
        "route": "/auth/password",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/jadmin@0.0.1/change-password.widget');
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
        hash: 31480207,
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
        hash: 1784071921,
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
            }, _react.default.createElement("span", null, texts.newPassword), _react.default.createElement("ul", null, output));
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
        hash: 68860088,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _hooks = require("@jadmin/ui/hooks");
          var _loadingPage = require("@bg/jadmin/loading-page");
          var _beyond_context = require("beyond_context");
          var _wrapper = require("@bg/auth-api/wrapper.ts");
          var _toast = require("pragmate-ui/toast");
          var _config = require("@bg/jadmin/config");
          var _validatePassword = require("./validate-password");
          var _breadcrumb = require("@bg/jadmin/breadcrumb");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function View(specs) {
            const [ready, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const init = {
              repeatPassword: "",
              currentPassword: "",
              newPassword: ""
            };
            const [currentError, setCurrentError] = _react.default.useState("");
            const [loading, setLoading] = (0, _react.useState)(false);
            const {
              getInput,
              fields,
              error,
              setError,
              dispatch
            } = (0, _hooks.useForm)({
              init,
              isDisabled: loading
            });
            const hide = () => {
              dispatch({
                type: "reset"
              });
              setError({});
            };
            (0, _hooks.useBinder)([specs.store], hide, "hide");
            const formDisabled = {};
            const {
              repeatPassword,
              currentPassword,
              newPassword
            } = fields;
            if (!ready) return _react.default.createElement(_loadingPage.LoadingPage, null);
            if (!repeatPassword || !currentPassword || loading || !newPassword) {
              formDisabled.disabled = true;
            }
            const handleSubmit = async () => {
              setCurrentError("");
              if (repeatPassword !== newPassword) {
                setError({
                  password: texts.passwordError
                });
                return;
              }
              setLoading(true);
              const results = await _wrapper.session.changePassword({
                newPassword,
                currentPassword,
                appToken: _config.default.params.application.token,
                url: _config.default.params.application.url
              });
              if (results?.error === "INCORRECT_PASSWORD") {
                setCurrentError(texts.currentPasswordError);
                setLoading(false);
                return;
              }
              if (results?.error === "SAME_PASSWORD") {
                setCurrentError(texts.samePassword);
                setLoading(false);
                return;
              }
              if (results.error) {
                setLoading(false);
                setError({
                  error: texts.error
                });
                return;
              }
              setLoading(false);
              dispatch({
                type: "reset"
              });
              _toast.toast.success("Contraseña cambiada correctamente");
            };
            return _react.default.createElement("div", null, _react.default.createElement(_breadcrumb.BreadCrumb, {
              title: texts.title.edit
            }), _react.default.createElement("div", {
              className: "card-page"
            }, _react.default.createElement(_form.Form, {
              className: "content-form",
              onSubmit: handleSubmit
            }, _react.default.createElement("div", {
              className: "form-group"
            }, _react.default.createElement(_form.Input, {
              type: "password",
              pattern: "^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\\d]){1,})(?=(.*[\\W]){1,})(?!.*\\s).{8,}$",
              password: true,
              loading: loading,
              hasError: !!currentError,
              errorMessage: currentError,
              ...getInput("currentPassword", texts.password, "password"),
              required: true
            }), _react.default.createElement(_form.Input, {
              password: true,
              hasError: !!error?.password,
              errorMessage: error?.password,
              pattern: "^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\\d]){1,})(?=(.*[\\W]){1,})(?!.*\\s).{8,}$",
              loading: loading,
              type: "password",
              ...getInput("newPassword", texts.newPassword, "password"),
              required: true
            }), _react.default.createElement(_form.Input, {
              type: "password",
              hasError: !!error?.password,
              pattern: "^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\\d]){1,})(?=(.*[\\W]){1,})(?!.*\\s).{8,}$",
              errorMessage: error?.password,
              password: true,
              loading: loading,
              required: true,
              ...getInput("repeatPassword", texts.repeatPassword, "currentPassword")
            })), _react.default.createElement(_components.Button, {
              type: "submit",
              variant: "primary",
              ...formDisabled,
              loading: loading
            }, texts.save)), _react.default.createElement(_validatePassword.ValidatePassword, {
              texts: texts,
              validate: newPassword
            })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlldyIsIl9tb2RlbCIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJWaWV3IiwibWFuYWdlciIsImNyZWF0ZVN0b3JlIiwiTWFuYWdlciIsImhpZGUiLCJleHBvcnRzIiwiUmVhY3RpdmVNb2RlbCIsInRyaWdnZXJFdmVudCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfcmVhY3QiLCJfaXRlbSIsIlZhbGlkYXRlUGFzc3dvcmQiLCJ0ZXh0cyIsInZhbGlkYXRlIiwiZGF0YVZhbGlkYXRlIiwibGFiZWwiLCJsb3dlcmNhc2UiLCJyZWdFeHAiLCJ1cHBlcmNhc2UiLCJudW1iZXIiLCJzcGVjaWFsQ2hhcmFjdGVyIiwiZWlnaHRDaGFyYWN0ZXJzIiwib3V0cHV0IiwibWFwIiwiaXRlbSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50Iiwia2V5IiwiY2xhc3NOYW1lIiwibmV3UGFzc3dvcmQiLCJfYXBwSWNvbiIsIkl0ZW0iLCJyZWYiLCJ1c2VSZWYiLCJpY29uIiwic2V0SWNvbiIsInVzZVN0YXRlIiwiUmVnRXhwIiwidXNlRWZmZWN0IiwidGVzdCIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJBcHBJY29uIiwiX2Zvcm0iLCJfaG9va3MiLCJfbG9hZGluZ1BhZ2UiLCJfYmV5b25kX2NvbnRleHQiLCJfd3JhcHBlciIsIl90b2FzdCIsIl9jb25maWciLCJfdmFsaWRhdGVQYXNzd29yZCIsIl9icmVhZGNydW1iIiwiX2NvbXBvbmVudHMiLCJzcGVjcyIsInJlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJpbml0IiwicmVwZWF0UGFzc3dvcmQiLCJjdXJyZW50UGFzc3dvcmQiLCJjdXJyZW50RXJyb3IiLCJzZXRDdXJyZW50RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImdldElucHV0IiwiZmllbGRzIiwiZXJyb3IiLCJzZXRFcnJvciIsImRpc3BhdGNoIiwidXNlRm9ybSIsImlzRGlzYWJsZWQiLCJ0eXBlIiwidXNlQmluZGVyIiwic3RvcmUiLCJmb3JtRGlzYWJsZWQiLCJMb2FkaW5nUGFnZSIsImRpc2FibGVkIiwiaGFuZGxlU3VibWl0IiwicGFzc3dvcmQiLCJwYXNzd29yZEVycm9yIiwicmVzdWx0cyIsInNlc3Npb24iLCJjaGFuZ2VQYXNzd29yZCIsImFwcFRva2VuIiwicGFyYW1zIiwiYXBwbGljYXRpb24iLCJ0b2tlbiIsInVybCIsImN1cnJlbnRQYXNzd29yZEVycm9yIiwic2FtZVBhc3N3b3JkIiwidG9hc3QiLCJzdWNjZXNzIiwiQnJlYWRDcnVtYiIsInRpdGxlIiwiZWRpdCIsIkZvcm0iLCJvblN1Ym1pdCIsIklucHV0IiwicGF0dGVybiIsImhhc0Vycm9yIiwiZXJyb3JNZXNzYWdlIiwicmVxdWlyZWQiLCJCdXR0b24iLCJ2YXJpYW50Iiwic2F2ZSJdLCJzb3VyY2VzIjpbIi93aWRnZXQvdHMvY29udHJvbGxlci50cyIsIi93aWRnZXQvdHMvbW9kZWwudHMiLCIvdHlwZXMudHMiLCIvd2lkZ2V0L3RzL3ZpZXdzL3ZhbGlkYXRlLXBhc3N3b3JkL2luZGV4LnRzeCIsIi93aWRnZXQvdHMvdmlld3MvdmFsaWRhdGUtcGFzc3dvcmQvaXRlbS50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL3ZpZXcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBRUEsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNWRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsscUJBQXFCO1lBQzlDLElBQUlDLE1BQU1B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