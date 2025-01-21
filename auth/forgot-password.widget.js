System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@beyond-js/reactive@1.1.14/model", "sgs-workflow@1.0.0/wrappers", "react@18.2.0", "pragmate-ui@0.1.2/alert", "sgs-workflow@1.0.0/config", "uuid@9.0.1", "sgs-workflow@1.0.0/input", "pragmate-ui@0.1.2/icons", "pragmate-ui@0.1.2/form", "pragmate-ui@0.1.2/components", "sgs-workflow@1.0.0/hooks", "@beyond-js/react-18-widgets@1.0.4/hooks", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.2/image"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets104Page) {
      dependency_3 = _beyondJsReact18Widgets104Page;
    }, function (_beyondJsReactive1114Model) {
      dependency_4 = _beyondJsReactive1114Model;
    }, function (_sgsWorkflow100Wrappers) {
      dependency_5 = _sgsWorkflow100Wrappers;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi012Alert) {
      dependency_7 = _pragmateUi012Alert;
    }, function (_sgsWorkflow100Config) {
      dependency_8 = _sgsWorkflow100Config;
    }, function (_uuid2) {
      dependency_9 = _uuid2;
    }, function (_sgsWorkflow100Input) {
      dependency_10 = _sgsWorkflow100Input;
    }, function (_pragmateUi012Icons) {
      dependency_11 = _pragmateUi012Icons;
    }, function (_pragmateUi012Form) {
      dependency_12 = _pragmateUi012Form;
    }, function (_pragmateUi012Components) {
      dependency_13 = _pragmateUi012Components;
    }, function (_sgsWorkflow100Hooks) {
      dependency_14 = _sgsWorkflow100Hooks;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_15 = _beyondJsReact18Widgets104Hooks;
    }, function (_beyondJsKernel019Routing) {
      dependency_16 = _beyondJsKernel019Routing;
    }, function (_pragmateUi012Image) {
      dependency_17 = _pragmateUi012Image;
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
          "vspecifier": "sgs-workflow@1.0.0/auth/forgot-password",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['sgs-workflow/wrappers', dependency_5], ['react', dependency_6], ['pragmate-ui/alert', dependency_7], ['sgs-workflow/config', dependency_8], ['uuid', dependency_9], ['sgs-workflow/input', dependency_10], ['pragmate-ui/icons', dependency_11], ['pragmate-ui/form', dependency_12], ['pragmate-ui/components', dependency_13], ['sgs-workflow/hooks', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15], ['@beyond-js/kernel/routing', dependency_16], ['pragmate-ui/image', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "forgot-password",
        "vspecifier": "sgs-workflow@1.0.0/auth/forgot-password.widget",
        "is": "page",
        "route": "/auth/forgot-password"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('sgs-workflow@1.0.0/auth/forgot-password.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 4244085807,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            /**
             * this method is executed when the widget is showd
             */
            show() {}
            /**
             * this method is executed when the widget is hidden
             */
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 532905869,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _wrappers = require("sgs-workflow/wrappers");
          class StoreManager extends _model.ReactiveModel {
            #feedback = false;
            get feedback() {
              return this.#feedback;
            }
            #error = '';
            get error() {
              return this.#error;
            }
            #email = '';
            get email() {
              return this.#email;
            }
            send = async fields => {
              try {
                this.fetching = true;
                const response = await _wrappers.session.forgotPassword(fields);
                if (!response.status) throw response.error;
                this.#feedback = true;
                this.#email = response.data.email;
                return {
                  status: true,
                  data: {
                    email: response.data.email
                  }
                };
              } catch (error) {
                console.error(error);
                if (error === 'ACTIVE_DIRECTORY_USER') this.#feedback = true;
                this.#error = error;
                return {
                  status: false,
                  error
                };
              } finally {
                this.fetching = false;
              }
            };
          }
          exports.StoreManager = StoreManager;
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/components/ad-feedback
      **********************************************/

      ims.set('./views/components/ad-feedback', {
        hash: 3905378709,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ADFeedback = void 0;
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          var _config = require("sgs-workflow/config");
          var _uuid = require("uuid");
          const ADFeedback = ({
            texts
          }) => {
            const {
              title,
              apologies,
              from
            } = texts.aDError;
            const email = _config.default.params.application.ad.email;
            const instructions = texts.aDError.instructions.split(' ').map(text => {
              const cls = text.includes('{{email}}') ? 'underline' : '';
              const content = text.includes('{{email}}') ? text.replace('{{email}}', email) : text;
              return _react.default.createElement("span", {
                key: (0, _uuid.v4)(),
                className: cls
              }, content, ' ');
            });
            const content = [title, instructions, apologies, from].map(text => {
              return _react.default.createElement(_react.default.Fragment, {
                key: (0, _uuid.v4)()
              }, _react.default.createElement("span", null, text), _react.default.createElement("br", null));
            });
            return _react.default.createElement(_alert.Alert, {
              type: _alert.ITypes.Info,
              closable: false
            }, _react.default.createElement("h3", {
              className: "alert__title-span"
            }, _react.default.createElement("strong", {
              className: "pre-text"
            }, texts.aDError.pretext, " "), content));
          };
          exports.ADFeedback = ADFeedback;
        }
      });

      /****************************************************
      INTERNAL MODULE: ./views/components/captcha-generator
      ****************************************************/

      ims.set('./views/components/captcha-generator', {
        hash: 100584316,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.validateCaptcha = exports.loadCaptchaEnginge = exports.LoadCanvasTemplate = void 0;
          var _react = require("react");
          // This was a library called react-simply-captcha but Bryant wanted to use with beyond but beyond is wonderful so he used his brain and now the code its here, (your welcome)
          let captcha_value = '';
          let captcha_number = '';
          let backgroundColor_value = '';
          let fontColor_value = '';
          let charMap_value = '';
          let LoadCanvasTemplate_HTML = '<div><canvas id="canv"></canvas><div><a id="reload_href"  style="cursor: pointer; color: blue">Reload Captcha</a></div></div>';
          let LoadCanvasTemplateNoReload_HTML = '<div><canvas id="canv"></canvas><div><a id="reload_href"  style="cursor: pointer; color: blue"></a></div></div>';
          const loadCaptchaEnginge = ({
            numberOfCharacters,
            backgroundColor = 'white',
            fontColor = 'black',
            charMap = '',
            ref = null
          }) => {
            if (!ref || !ref?.current) return;
            backgroundColor_value = backgroundColor;
            fontColor_value = fontColor;
            charMap_value = charMap;
            captcha_number = numberOfCharacters;
            let retVal = '';
            let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            if (charMap === 'upper') {
              charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            } else if (charMap === 'lower') {
              charset = 'abcdefghijklmnopqrstuvwxyz0123456789';
            } else if (charMap === 'numbers') {
              charset = '0123456789';
            } else if (charMap === 'special_char') {
              charset = "~`!@#$%^&*()_+-=[]{}|:'<>,.?/";
            }
            let length = parseInt(numberOfCharacters);
            for (let i = 0, n = charset.length; i < length; ++i) {
              retVal += charset.charAt(Math.floor(Math.random() * n));
            }
            let captcha = retVal;
            captcha_value = captcha;
            let length_height_canvas = Math.round(parseInt(`${length}`) / 3);
            let canvas = ref.current;
            let ctx = canvas?.getContext('2d');
            let img = document.getElementById('image');
            let text = captcha;
            let x = 12.5;
            let y = 15;
            let lineheight = 30;
            let canvas_height = (parseInt(`${length}`) - parseInt(`${length_height_canvas}`)) * 20;
            let lines = text.split('\n');
            let lineLengthOrder = lines.slice(0).sort(function (a, b) {
              return b.length - a.length;
            });
            ctx.canvas.width = parseInt(`${length}`) * 25;
            ctx.canvas.height = lines.length * lineheight;
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.textBaseline = 'middle';
            ctx.font = 'italic 16px Arial';
            ctx.fillStyle = fontColor;
            let num = 0;
            for (let i = 0; i < parseInt(`${length}`); i++) {
              num = parseInt(`${num}`) + 1;
              let heigt_num = 16 * num;
              ctx.fillText(retVal[i], heigt_num, Math.round(Math.random() * (15 - 12) + 12));
            }
          };
          exports.loadCaptchaEnginge = loadCaptchaEnginge;
          const validateCaptcha = userValue => {
            return userValue === captcha_value;
          };
          exports.validateCaptcha = validateCaptcha;
          const LoadCanvasTemplate = props => {
            return _react.default.createElement("canvas", {
              ref: props?.canvRef,
              id: "canv",
              style: {
                backgroundColor: 'white'
              }
            });
          };
          exports.LoadCanvasTemplate = LoadCanvasTemplate;
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/components/captcha
      ******************************************/

      ims.set('./views/components/captcha', {
        hash: 905938245,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Captcha = void 0;
          var _react = require("react");
          var _captchaGenerator = require("./captcha-generator");
          var _input = require("sgs-workflow/input");
          var _icons = require("pragmate-ui/icons");
          const Captcha = props => {
            const canvRef = _react.default.useRef(null);
            const refresh = () => (0, _captchaGenerator.loadCaptchaEnginge)({
              numberOfCharacters: 6,
              ref: canvRef,
              backgroundColor: "#b5b3b3"
            });
            _react.default.useEffect(() => {
              if (!canvRef || !canvRef?.current) return;
              refresh();
            }, [canvRef]);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: 'captcha-refresh'
            }, _react.default.createElement(_captchaGenerator.LoadCanvasTemplate, {
              canvRef: canvRef
            }), _react.default.createElement(_icons.IconButton, {
              icon: "refresh",
              onClick: refresh
            })), _react.default.createElement(_input.Input, {
              className: "input-captcha",
              ...props
            }));
          };
          exports.Captcha = Captcha;
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/components/form
      ***************************************/

      ims.set('./views/components/form', {
        hash: 3731853605,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Form = void 0;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _hooks = require("sgs-workflow/hooks");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../context");
          var _captchaGenerator = require("./captcha-generator");
          var _captcha = require("./captcha");
          var _alert = require("pragmate-ui/alert");
          const DEFUALT_VALUE = {
            username: '',
            captcha: ''
          };
          const Form = () => {
            const {
              texts,
              store
            } = (0, _context.useForgotPasswordContext)();
            const {
              getInput,
              fields,
              dispatch,
              error: message,
              setError: setMessage
            } = (0, _hooks.useForm)({
              init: DEFUALT_VALUE
            });
            const [loading, setIsLoading] = _react.default.useState(false);
            (0, _hooks2.useBinder)([store], () => {
              setIsLoading(store.fetching);
            });
            const reset = () => {
              dispatch({
                type: 'reset'
              });
              setMessage({});
            };
            const handleSubmit = async () => {
              if (!(0, _captchaGenerator.validateCaptcha)(fields.captcha)) {
                setMessage({
                  message: texts.noMatch,
                  error: true
                });
                return;
              }
              const response = await store.send(fields);
              if (!response.status) {
                setMessage({
                  error: true,
                  message: texts.userRegister.replace('{{username}}', fields.username)
                });
                return;
              }
              reset();
            };
            const formDisabled = !fields.username || loading;
            const closeAndBack = () => window.close();
            const type = message.error ? _alert.ITypes.Error : _alert.ITypes.Success;
            const preText = 'Error: ';
            return _react.default.createElement(_react.default.Fragment, null, !!message.message && _react.default.createElement(_alert.Alert, {
              type: type,
              closable: false
            }, _react.default.createElement("h3", {
              className: "alert__title-span"
            }, preText && _react.default.createElement("strong", {
              className: "pre-text"
            }, preText), message.message)), _react.default.createElement(_form.Form, {
              onSubmit: handleSubmit
            }, _react.default.createElement("h1", {
              className: "title-login"
            }, texts.title), _react.default.createElement("span", {
              className: "texts-subtitle"
            }, texts.subtitle), _react.default.createElement("div", {
              className: "content-inputs"
            }, _react.default.createElement(_form.Input, {
              loading: loading,
              type: "text",
              icon: "user-header",
              ...getInput('username', texts.username, 'username', loading)
            }), _react.default.createElement(_captcha.Captcha, {
              ...getInput('captcha', texts.captcha, 'captcha', loading)
            })), _react.default.createElement("div", {
              className: "form__actions two-actions"
            }, _react.default.createElement(_components.Button, {
              variant: "secondary",
              disabled: loading,
              onClick: closeAndBack
            }, texts.cancel), _react.default.createElement(_components.Button, {
              type: "submit",
              variant: "primary",
              loading: loading,
              disabled: formDisabled
            }, texts.verify))));
          };
          exports.Form = Form;
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/components/success-feedback
      ***************************************************/

      ims.set('./views/components/success-feedback', {
        hash: 3985036475,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SuccessFeedback = void 0;
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          const SuccessFeedback = ({
            message,
            email
          }) => {
            const [, domain] = email.split('@');
            const hideEmail = `${email.slice(0, 2)}*******@${domain}`;
            const content = message.replace('{{email}}', hideEmail);
            return _react.default.createElement(_alert.Alert, {
              type: _alert.ITypes.Success,
              closable: false
            }, _react.default.createElement("h3", {
              className: "alert__title-span"
            }, content));
          };
          exports.SuccessFeedback = SuccessFeedback;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 2069009436,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useForgotPasswordContext = exports.ForgotPasswordContext = void 0;
          var _react = require("react");
          const ForgotPasswordContext = exports.ForgotPasswordContext = _react.default.createContext({});
          const useForgotPasswordContext = () => _react.default.useContext(ForgotPasswordContext);
          exports.useForgotPasswordContext = useForgotPasswordContext;
        }
      });

      /********************************
      INTERNAL MODULE: ./views/feedback
      ********************************/

      ims.set('./views/feedback', {
        hash: 611722580,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FeedBack = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _adFeedback = require("./components/ad-feedback");
          var _successFeedback = require("./components/success-feedback");
          const FeedBack = ({
            texts,
            store
          }) => {
            const closeAndBack = () => window.close();
            const alertOutput = store.error ? _react.default.createElement(_adFeedback.ADFeedback, {
              texts: texts
            }) : _react.default.createElement(_successFeedback.SuccessFeedback, {
              message: texts.success,
              email: store.email
            });
            return _react.default.createElement("div", {
              className: "page__container feedback"
            }, alertOutput, _react.default.createElement("div", {
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
        hash: 298991086,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _hooks = require("sgs-workflow/hooks");
          var _beyond_context = require("beyond_context");
          var _context = require("./context");
          var _image = require("pragmate-ui/image");
          var _form = require("./components/form");
          var _feedback = require("./feedback");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [update, setUpdate] = React.useState({});
            (0, _hooks2.useBinder)([store], () => setUpdate({}));
            if (!ready) return null;
            if (store.feedback) return React.createElement(_feedback.FeedBack, {
              texts: texts,
              store: store
            });
            const contextValue = {
              texts,
              store
            };
            return React.createElement(_context.ForgotPasswordContext.Provider, {
              value: contextValue
            }, React.createElement("div", {
              className: "page__container"
            }, React.createElement("div", {
              className: "content-auth"
            }, React.createElement(_image.Image, {
              src: `${globalThis.baseDir}assets/logo-auth-light.png`,
              alt: "logo",
              className: "logo-header"
            }), React.createElement(_form.Form, null))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/types
      *****************************/

      ims.set('./views/types', {
        hash: 1844131315,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
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
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiX21vZGVsIiwiX3dyYXBwZXJzIiwiUmVhY3RpdmVNb2RlbCIsImZlZWRiYWNrIiwiZXJyb3IiLCJlbWFpbCIsInNlbmQiLCJmaWVsZHMiLCJmZXRjaGluZyIsInJlc3BvbnNlIiwic2Vzc2lvbiIsImZvcmdvdFBhc3N3b3JkIiwic3RhdHVzIiwiZGF0YSIsImNvbnNvbGUiLCJfcmVhY3QiLCJfYWxlcnQiLCJfY29uZmlnIiwiX3V1aWQiLCJBREZlZWRiYWNrIiwidGV4dHMiLCJ0aXRsZSIsImFwb2xvZ2llcyIsImZyb20iLCJhREVycm9yIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwcGxpY2F0aW9uIiwiYWQiLCJpbnN0cnVjdGlvbnMiLCJzcGxpdCIsIm1hcCIsInRleHQiLCJjbHMiLCJpbmNsdWRlcyIsImNvbnRlbnQiLCJyZXBsYWNlIiwiY3JlYXRlRWxlbWVudCIsImtleSIsInY0IiwiY2xhc3NOYW1lIiwiRnJhZ21lbnQiLCJBbGVydCIsInR5cGUiLCJJVHlwZXMiLCJJbmZvIiwiY2xvc2FibGUiLCJwcmV0ZXh0IiwiY2FwdGNoYV92YWx1ZSIsImNhcHRjaGFfbnVtYmVyIiwiYmFja2dyb3VuZENvbG9yX3ZhbHVlIiwiZm9udENvbG9yX3ZhbHVlIiwiY2hhck1hcF92YWx1ZSIsIkxvYWRDYW52YXNUZW1wbGF0ZV9IVE1MIiwiTG9hZENhbnZhc1RlbXBsYXRlTm9SZWxvYWRfSFRNTCIsImxvYWRDYXB0Y2hhRW5naW5nZSIsIm51bWJlck9mQ2hhcmFjdGVycyIsImJhY2tncm91bmRDb2xvciIsImZvbnRDb2xvciIsImNoYXJNYXAiLCJyZWYiLCJjdXJyZW50IiwicmV0VmFsIiwiY2hhcnNldCIsImxlbmd0aCIsInBhcnNlSW50IiwiaSIsIm4iLCJjaGFyQXQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjYXB0Y2hhIiwibGVuZ3RoX2hlaWdodF9jYW52YXMiLCJyb3VuZCIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJpbWciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwieCIsInkiLCJsaW5laGVpZ2h0IiwiY2FudmFzX2hlaWdodCIsImxpbmVzIiwibGluZUxlbmd0aE9yZGVyIiwic2xpY2UiLCJzb3J0IiwiYSIsImIiLCJ3aWR0aCIsImhlaWdodCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwidGV4dEJhc2VsaW5lIiwiZm9udCIsIm51bSIsImhlaWd0X251bSIsImZpbGxUZXh0IiwidmFsaWRhdGVDYXB0Y2hhIiwidXNlclZhbHVlIiwiTG9hZENhbnZhc1RlbXBsYXRlIiwicHJvcHMiLCJjYW52UmVmIiwiaWQiLCJzdHlsZSIsIl9jYXB0Y2hhR2VuZXJhdG9yIiwiX2lucHV0IiwiX2ljb25zIiwiQ2FwdGNoYSIsInVzZVJlZiIsInJlZnJlc2giLCJ1c2VFZmZlY3QiLCJJY29uQnV0dG9uIiwiaWNvbiIsIm9uQ2xpY2siLCJJbnB1dCIsIl9mb3JtIiwiX2NvbXBvbmVudHMiLCJfaG9va3MiLCJfaG9va3MyIiwiX2NvbnRleHQiLCJfY2FwdGNoYSIsIkRFRlVBTFRfVkFMVUUiLCJ1c2VybmFtZSIsIkZvcm0iLCJ1c2VGb3Jnb3RQYXNzd29yZENvbnRleHQiLCJnZXRJbnB1dCIsImRpc3BhdGNoIiwibWVzc2FnZSIsInNldEVycm9yIiwic2V0TWVzc2FnZSIsInVzZUZvcm0iLCJpbml0IiwibG9hZGluZyIsInNldElzTG9hZGluZyIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwicmVzZXQiLCJoYW5kbGVTdWJtaXQiLCJub01hdGNoIiwidXNlclJlZ2lzdGVyIiwiZm9ybURpc2FibGVkIiwiY2xvc2VBbmRCYWNrIiwid2luZG93IiwiY2xvc2UiLCJFcnJvciIsIlN1Y2Nlc3MiLCJwcmVUZXh0Iiwib25TdWJtaXQiLCJzdWJ0aXRsZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJkaXNhYmxlZCIsImNhbmNlbCIsInZlcmlmeSIsIlN1Y2Nlc3NGZWVkYmFjayIsImRvbWFpbiIsImhpZGVFbWFpbCIsIkZvcmdvdFBhc3N3b3JkQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2FkRmVlZGJhY2siLCJfc3VjY2Vzc0ZlZWRiYWNrIiwiRmVlZEJhY2siLCJhbGVydE91dHB1dCIsInN1Y2Nlc3MiLCJSZWFjdCIsIl9iZXlvbmRfY29udGV4dCIsIl9pbWFnZSIsIl9mZWVkYmFjayIsInJlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ1cGRhdGUiLCJzZXRVcGRhdGUiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsInZhbHVlIiwiSW1hZ2UiLCJzcmMiLCJnbG9iYWxUaGlzIiwiYmFzZURpciIsImFsdCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL3dpZGdldC90cy9jb250cm9sbGVyLnRzIiwiL3dpZGdldC90cy9zdG9yZS50cyIsIi93aWRnZXQvdHMvdmlld3MvY29tcG9uZW50cy9hZC1mZWVkYmFjay50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL2NvbXBvbmVudHMvY2FwdGNoYS1nZW5lcmF0b3IudHN4IiwiL3dpZGdldC90cy92aWV3cy9jb21wb25lbnRzL2NhcHRjaGEudHN4IiwiL3dpZGdldC90cy92aWV3cy9jb21wb25lbnRzL2Zvcm0udHN4IiwiL3dpZGdldC90cy92aWV3cy9jb21wb25lbnRzL3N1Y2Nlc3MtZmVlZGJhY2sudHN4IiwiL3dpZGdldC90cy92aWV3cy9jb250ZXh0LnRzIiwiL3dpZGdldC90cy92aWV3cy9mZWVkYmFjay50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51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