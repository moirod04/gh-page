System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.4/base", "react@18.2.0", "@bg/jadmin@0.0.1/input", "pragmate-ui@0.1.2/form", "pragmate-ui@0.1.2/components", "@jadmin/ui@1.0.0/hooks", "@bg/jadmin@0.0.1/utils-app", "@jadmin/ui@1.0.0/header", "@bg/jadmin@0.0.1/loading-page", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets016Render) {
      dependency_0 = _beyondJsWidgets016Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets104Base) {
      dependency_2 = _beyondJsReact18Widgets104Base;
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_bgJadmin001Input) {
      dependency_4 = _bgJadmin001Input;
    }, function (_pragmateUi012Form) {
      dependency_5 = _pragmateUi012Form;
    }, function (_pragmateUi012Components) {
      dependency_6 = _pragmateUi012Components;
    }, function (_jadminUi100Hooks) {
      dependency_7 = _jadminUi100Hooks;
    }, function (_bgJadmin001UtilsApp) {
      dependency_8 = _bgJadmin001UtilsApp;
    }, function (_jadminUi100Header) {
      dependency_9 = _jadminUi100Header;
    }, function (_bgJadmin001LoadingPage) {
      dependency_10 = _bgJadmin001LoadingPage;
    }, function (_beyondJsKernel019Styles) {
      dependency_11 = _beyondJsKernel019Styles;
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
          "vspecifier": "@bg/jadmin@0.0.1/notifications/management",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/base', dependency_2], ['react', dependency_3], ['@bg/jadmin/input', dependency_4], ['pragmate-ui/form', dependency_5], ['pragmate-ui/components', dependency_6], ['@jadmin/ui/hooks', dependency_7], ['@bg/jadmin/utils-app', dependency_8], ['@jadmin/ui/header', dependency_9], ['@bg/jadmin/loading-page', dependency_10], ['@beyond-js/kernel/styles', dependency_11]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "notifications-management",
        "vspecifier": "@bg/jadmin@0.0.1/notifications/management.widget",
        "is": "page",
        "route": "/notifications/management/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/jadmin@0.0.1/notifications/management.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2532661387,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            get Widget() {
              return _views.View;
            }
          }
          exports.Controller = Controller;
        }
      });

      /****************************
      INTERNAL MODULE: ./views/form
      ****************************/

      ims.set('./views/form', {
        hash: 1224726601,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Form = Form;
          var _react = require("react");
          var _input = require("@bg/jadmin/input");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@jadmin/ui/hooks");
          var _utilsApp = require("@bg/jadmin/utils-app");
          function Form({
            texts
          }) {
            const init = {
              name: "",
              time: "",
              description: "",
              status: "",
              diary: "Diario",
              date: ""
            };
            const [dates, setDate] = (0, _react.useState)([]);
            const handleChange = target => {
              if (target.name !== "date") return;
              const date = new Date(target.value).toISOString().split('T')[0].split('-').reverse().join("/");
              setDate(dates.concat([date]));
            };
            const {
              getInput,
              getCheckbox,
              getRadio,
              fields
            } = (0, _hooks.useForm)({
              init,
              onChange: handleChange
            });
            const deleteDate = event => {
              event.stopPropagation();
              const {
                dataset: {
                  date
                }
              } = event.currentTarget;
              const datesFilter = dates.filter(item => item !== date);
              setDate(datesFilter);
            };
            const output = dates.map((item, index) => _react.default.createElement("div", {
              key: `${item}-${index}`,
              className: "badge"
            }, item, _react.default.createElement("span", {
              "data-date": item,
              onClick: deleteDate
            }, "x")));
            const {
              status
            } = fields;
            const statusText = status ? texts.active : texts.inactive;
            return _react.default.createElement(_form.Form, {
              className: "content-form"
            }, _react.default.createElement("div", {
              className: "form-group form-group-first-large"
            }, _react.default.createElement("div", {
              className: "form-colum-large"
            }, " ", _react.default.createElement(_form.Input, {
              ...getInput("name", texts.name)
            }), _react.default.createElement(_form.Input, {
              type: "time",
              ...getInput("time", texts.name)
            })), _react.default.createElement("div", {
              className: "form-group-switch"
            }, _react.default.createElement("label", null, texts.status), _react.default.createElement("div", {
              className: "d-flex gap-16 align-end"
            }, _react.default.createElement(_form.Switch, {
              ...getCheckbox("status")
            }), _react.default.createElement("span", {
              className: "status-text"
            }, statusText)))), _react.default.createElement("div", {
              className: "form-group"
            }, _react.default.createElement(_input.TextArea, {
              ...getInput("email", texts.description)
            }), _react.default.createElement("div", {
              className: "form-group-notifications"
            }, _react.default.createElement("div", {
              className: "form-group form-group-big"
            }, _react.default.createElement("div", {
              className: "form-group-switch"
            }, _react.default.createElement("label", null, texts.status), _react.default.createElement("div", {
              className: "d-flex gap-16 align-end"
            }, _react.default.createElement(_form.Switch, {
              ...getCheckbox("status")
            }), _react.default.createElement("span", {
              className: "status-text"
            }, statusText))), _react.default.createElement(_form.Radio, {
              ...getRadio("diary", "diary", texts.diary)
            }), _react.default.createElement(_form.Radio, {
              ...getRadio("diary", "weekly", texts.weekly)
            }), _react.default.createElement(_form.Radio, {
              ...getRadio("diary", "monthly", texts.monthly)
            })), _react.default.createElement("div", {
              className: "gap-16 d-flex flex-colum"
            }, _react.default.createElement(_form.Input, {
              type: "date",
              ...getInput("date", texts.dates),
              min: (0, _utilsApp.getCurrentDate)()
            }), _react.default.createElement("div", {
              className: "d-flex flex-wrap gap-16"
            }, output)))), _react.default.createElement(_components.Button, {
              label: texts.save,
              className: "btn btn-primary"
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2218975152,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _header = require("@jadmin/ui/header");
          var _hooks = require("@jadmin/ui/hooks");
          var _loadingPage = require("@bg/jadmin/loading-page");
          var _beyond_context = require("beyond_context");
          var _form = require("./form");
          /*bundle*/
          function View() {
            const [ready, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            if (!ready) return React.createElement(_loadingPage.LoadingPage, null);
            return React.createElement("div", null, React.createElement(_header.Header, {
              title: texts.title
            }), React.createElement("div", {
              className: "card-page"
            }, React.createElement(_form.Form, {
              texts: texts
            })));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/types
      *****************************/

      ims.set('./views/types', {
        hash: 3176048080,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          ;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiVmlldyIsImV4cG9ydHMiLCJfcmVhY3QiLCJfaW5wdXQiLCJfZm9ybSIsIl9jb21wb25lbnRzIiwiX2hvb2tzIiwiX3V0aWxzQXBwIiwiRm9ybSIsInRleHRzIiwiaW5pdCIsIm5hbWUiLCJ0aW1lIiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJkaWFyeSIsImRhdGUiLCJkYXRlcyIsInNldERhdGUiLCJ1c2VTdGF0ZSIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsIkRhdGUiLCJ2YWx1ZSIsInRvSVNPU3RyaW5nIiwic3BsaXQiLCJyZXZlcnNlIiwiam9pbiIsImNvbmNhdCIsImdldElucHV0IiwiZ2V0Q2hlY2tib3giLCJnZXRSYWRpbyIsImZpZWxkcyIsInVzZUZvcm0iLCJvbkNoYW5nZSIsImRlbGV0ZURhdGUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImRhdGFzZXQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0ZXNGaWx0ZXIiLCJmaWx0ZXIiLCJpdGVtIiwib3V0cHV0IiwibWFwIiwiaW5kZXgiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImtleSIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzdGF0dXNUZXh0IiwiYWN0aXZlIiwiaW5hY3RpdmUiLCJJbnB1dCIsInR5cGUiLCJTd2l0Y2giLCJUZXh0QXJlYSIsIlJhZGlvIiwid2Vla2x5IiwibW9udGhseSIsIm1pbiIsImdldEN1cnJlbnREYXRlIiwiQnV0dG9uIiwibGFiZWwiLCJzYXZlIiwiUmVhY3QiLCJfaGVhZGVyIiwiX2xvYWRpbmdQYWdlIiwiX2JleW9uZF9jb250ZXh0IiwicmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsIkxvYWRpbmdQYWdlIiwiSGVhZGVyIiwidGl0bGUiXSwic291cmNlcyI6WyIvd2lkZ2V0L3RzL2NvbnRyb2xsZXIudHMiLCIvd2lkZ2V0L3RzL3ZpZXdzL2Zvcm0udHN4IiwiL3dpZGdldC90cy92aWV3cy9pbmRleC50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLE1BQ1BFLFVBQVcsU0FBUUgsS0FBQSxDQUFBSSxxQkFBcUI7WUFDOUMsSUFBSUMsTUFBTUEsQ0FBQTtjQUNOLE9BQU9ILE1BQUEsQ0FBQUksSUFBSTtZQUNmOztVQUNIQyxPQUFBLENBQUFKLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSRCxJQUFBSyxNQUFBLEdBQUFQLE9BQUE7VUFDQSxJQUFBUSxNQUFBLEdBQUFSLE9BQUE7VUFDQSxJQUFBUyxLQUFBLEdBQUFULE9BQUE7VUFFQSxJQUFBVSxXQUFBLEdBQUFWLE9BQUE7VUFDQSxJQUFBVyxNQUFBLEdBQUFYLE9BQUE7VUFFQSxJQUFBWSxTQUFBLEdBQUFaLE9BQUE7VUFDTSxTQUFVYSxJQUFJQSxDQUFDO1lBQUVDO1VBQUssQ0FBb0I7WUFDOUMsTUFBTUMsSUFBSSxHQUFTO2NBQ2pCQyxJQUFJLEVBQUUsRUFBRTtjQUNSQyxJQUFJLEVBQUUsRUFBRTtjQUNSQyxXQUFXLEVBQUUsRUFBRTtjQUNmQyxNQUFNLEVBQUUsRUFBRTtjQUNWQyxLQUFLLEVBQUUsUUFBUTtjQUNmQyxJQUFJLEVBQUU7YUFDUDtZQUNELE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxPQUFPLENBQUMsR0FBRyxJQUFBaEIsTUFBQSxDQUFBaUIsUUFBUSxFQUFXLEVBQUUsQ0FBQztZQUMvQyxNQUFNQyxZQUFZLEdBQUlDLE1BQXdCLElBQVU7Y0FDdEQsSUFBSUEsTUFBTSxD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