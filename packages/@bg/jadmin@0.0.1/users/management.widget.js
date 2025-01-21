System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.4/base", "@beyond-js/reactive@1.1.14/model", "@bg/auth-api@1.0.0/entities.ts", "@bg/jadmin@0.0.1/config", "@bg/auth-api@1.0.0/wrapper.ts", "@beyond-js/kernel@0.1.9/routing", "react@18.2.0", "pragmate-ui@0.1.2/modal", "pragmate-ui@0.1.2/form", "pragmate-ui@0.1.2/components", "@jadmin/ui@1.0.0/hooks", "@bg/jadmin@0.0.1/loading-page", "@bg/jadmin@0.0.1/breadcrumb", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReactive1114Model) {
      dependency_3 = _beyondJsReactive1114Model;
    }, function (_bgAuthApi100EntitiesTs) {
      dependency_4 = _bgAuthApi100EntitiesTs;
    }, function (_bgJadmin001Config) {
      dependency_5 = _bgJadmin001Config;
    }, function (_bgAuthApi100WrapperTs) {
      dependency_6 = _bgAuthApi100WrapperTs;
    }, function (_beyondJsKernel019Routing) {
      dependency_7 = _beyondJsKernel019Routing;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi012Modal) {
      dependency_9 = _pragmateUi012Modal;
    }, function (_pragmateUi012Form) {
      dependency_10 = _pragmateUi012Form;
    }, function (_pragmateUi012Components) {
      dependency_11 = _pragmateUi012Components;
    }, function (_jadminUi100Hooks) {
      dependency_12 = _jadminUi100Hooks;
    }, function (_bgJadmin001LoadingPage) {
      dependency_13 = _bgJadmin001LoadingPage;
    }, function (_bgJadmin001Breadcrumb) {
      dependency_14 = _bgJadmin001Breadcrumb;
    }, function (_beyondJsKernel019Styles) {
      dependency_15 = _beyondJsKernel019Styles;
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
          "vspecifier": "@bg/jadmin@0.0.1/users/management",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/base', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@bg/auth-api/entities.ts', dependency_4], ['@bg/jadmin/config', dependency_5], ['@bg/auth-api/wrapper.ts', dependency_6], ['@beyond-js/kernel/routing', dependency_7], ['react', dependency_8], ['pragmate-ui/modal', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/components', dependency_11], ['@jadmin/ui/hooks', dependency_12], ['@bg/jadmin/loading-page', dependency_13], ['@bg/jadmin/breadcrumb', dependency_14], ['@beyond-js/kernel/styles', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "users-management",
        "vspecifier": "@bg/jadmin@0.0.1/users/management.widget",
        "is": "page",
        "route": "/users/management/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/jadmin@0.0.1/users/management.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3453900099,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _views = require("./views");
          var _manager = require("./manager");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            get Widget() {
              return _views.View;
            }
            #manager;
            createStore() {
              this.#manager = new _manager.Manager();
              return this.#manager;
            }
            show() {
              if (!this.#manager) return;
              const id = this.uri.vars.get('id');
              this.#manager.load(id);
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
        hash: 2365604673,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Manager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _entities = require("@bg/auth-api/entities.ts");
          var _config = require("@bg/jadmin/config");
          var _wrapper = require("@bg/auth-api/wrapper.ts");
          var _routing = require("@beyond-js/kernel/routing");
          class Manager extends _model.ReactiveModel {
            #user = new _entities.User();
            #profiles = new _entities.Profiles();
            get profiles() {
              return this.#profiles;
            }
            get user() {
              return this.#user;
            }
            #error;
            get error() {
              return this.#error;
            }
            #isCreating;
            get isCreating() {
              return this.#isCreating;
            }
            texts;
            load = async userId => {
              this.#isCreating = userId === 'create';
              try {
                const promises = [this.#profiles.load({
                  limit: 1000
                })];
                if (!this.#isCreating) {
                  promises.push(this.#user.load({
                    id: parseInt(userId)
                  }));
                  promises.push(this.#user.getProfiles({
                    userId: parseInt(userId)
                  }));
                }
                await Promise.all(promises);
              } catch (error) {
                console.error(error);
              } finally {
                this.ready = true;
                this.triggerEvent();
              }
            };
            clean = () => {};
            create = async () => {
              this.#error = '';
              this.triggerEvent();
              try {
                const changePasswordUrl = `${_config.default.params.uploadUrl.development}auth/set-forgotten-password/`;
                this.fetching = true;
                const params = {
                  changePasswordUrl,
                  user: {
                    names: this.#user.names,
                    lastNames: this.#user.lastNames,
                    email: this.#user.email,
                    phone: this.#user.phone,
                    active: 1,
                    user: this.#user.email
                  },
                  appToken: _config.default.params.application.token,
                  profiles: Array.from(this.#user.profiles.keys()),
                  userId: _wrapper.session.user.id
                };
                const response = await this.#user.registerUser(params);
                if (!response.status) throw response.error;
                _routing.routing.pushState('/users');
              } catch (error) {
                console.error(error);
                if (error === 'INVALID_EMAIL') this.#error = this.texts.invalidEmail;
                if (error === 'USER_HASNT_REQUIRED_PERMISIONS') this.#error = this.texts.invalidPermisions;
                if (error === 'USER_ALREADY_EXISTS') this.#error = this.texts.errorForm;
                this.triggerEvent();
                return {
                  error
                };
              } finally {
                this.fetching = false;
              }
            };
            editProfiles = async () => {
              this.fetching = true;
              try {
                const response = await this.#user.editProfiles();
                if (!response.status) throw response.error;
                _routing.routing.pushState('/users');
              } catch (error) {
                console.error(error);
              } finally {
                this.fetching = false;
              }
            };
            hide = () => {
              this.#user = new _entities.User();
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
        hash: 16320023,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /************************************
      INTERNAL MODULE: ./views/cancel-modal
      ************************************/

      ims.set('./views/cancel-modal', {
        hash: 2818233054,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CancelModal = CancelModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _context = require("./context");
          var _routing = require("@beyond-js/kernel/routing");
          function CancelModal() {
            const {
              texts,
              manager,
              onCloseCancelModal
            } = (0, _context.useProfileContext)();
            async function handleConfirm() {
              onCloseCancelModal();
              manager.hide();
              _routing.routing.back();
            }
            return _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              className: "modal-jadmin",
              title: texts.cancelModal.title,
              text: texts.cancelModal.description,
              onCancel: onCloseCancelModal,
              onConfirm: handleConfirm
            });
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 1112208778,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useProfileContext = exports.ProfileContext = void 0;
          var _react = require("react");
          const ProfileContext = exports.ProfileContext = (0, _react.createContext)({});
          const useProfileContext = () => (0, _react.useContext)(ProfileContext);
          exports.useProfileContext = useProfileContext;
        }
      });

      /****************************
      INTERNAL MODULE: ./views/form
      ****************************/

      ims.set('./views/form', {
        hash: 1450300062,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormProfile = FormProfile;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@jadmin/ui/hooks");
          var _context = require("./context");
          var _profilesField = require("./profiles-field");
          var _routing = require("@beyond-js/kernel/routing");
          function FormProfile() {
            const {
              texts,
              manager,
              onCloseCancelModal
            } = (0, _context.useProfileContext)();
            const {
              isCreating,
              user,
              fetching,
              create,
              editProfiles,
              error
            } = manager;
            const {
              getInput,
              fields
            } = (0, _hooks.useFields)(manager.user);
            (0, _react.useEffect)(() => {
              manager.texts = texts;
            }, []);
            const onCancel = () => {
              const dontShowCancelModal = !Object.values(fields).some(field => field) || fetching || user.fetching || !user.isUnpublished;
              if (!dontShowCancelModal) {
                return onCloseCancelModal();
              }
              _routing.routing.back();
            };
            const isButtonDisabled = !Object.values(fields).some(field => field) || fetching || user.fetching || !user.isUnpublished;
            const save = isCreating ? create : editProfiles;
            return _react.default.createElement(_form.Form, {
              className: "content-form",
              onSubmit: save
            }, _react.default.createElement("div", {
              className: "form-group"
            }, _react.default.createElement(_form.Input, {
              className: "has-icon",
              required: true,
              ...getInput('names', texts.name),
              disabled: !isCreating
            }), _react.default.createElement(_form.Input, {
              ...getInput('lastNames', texts.lastName),
              disabled: !isCreating
            })), _react.default.createElement("div", {
              className: "form-group"
            }, _react.default.createElement(_form.Input, {
              className: "has-icon",
              hasError: !!error,
              errorMessage: error,
              required: true,
              type: "email",
              ...getInput('email', texts.email),
              disabled: !isCreating
            }), _react.default.createElement(_form.Input, {
              ...getInput('phone', texts.phone),
              disabled: !isCreating
            })), _react.default.createElement(_profilesField.ProfilesField, null), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              type: "reset",
              variant: "secondary",
              onClick: onCancel
            }, texts.cancel), _react.default.createElement(_components.Button, {
              type: "submit",
              loading: fetching || user.fetching,
              disabled: isButtonDisabled,
              variant: "primary"
            }, texts.save)));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 910277846,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _hooks = require("@jadmin/ui/hooks");
          var _loadingPage = require("@bg/jadmin/loading-page");
          var _beyond_context = require("beyond_context");
          var _form = require("./form");
          var _breadcrumb = require("@bg/jadmin/breadcrumb");
          var _routing = require("@beyond-js/kernel/routing");
          var _context = require("./context");
          var _cancelModal = require("./cancel-modal");
          /*bundle*/
          function View({
            store: manager
          }) {
            const [ready, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [state, setState] = React.useState({});
            const [modals, setModals] = React.useState({
              cancel: false
            });
            (0, _hooks.useBinder)([manager, manager.user], () => setState({}));
            if (!ready || !manager.ready) return React.createElement(_loadingPage.LoadingPage, null);
            const onCloseCancelModal = () => setModals(currentValue => ({
              ...currentValue,
              cancel: !currentValue.cancel
            }));
            const processLabel = manager.isCreating ? texts.create.title : texts.edit.title;
            const breadcrumb = [[`/users`, 'Listado'], [_routing.routing.uri.pathname, processLabel]];
            const value = {
              manager,
              texts,
              onCloseCancelModal
            };
            return React.createElement(_context.ProfileContext.Provider, {
              value: value
            }, React.createElement("div", {
              className: 'user-managment-view'
            }, React.createElement(_breadcrumb.BreadCrumb, {
              title: texts.title,
              items: breadcrumb
            }), React.createElement("div", {
              className: 'card-page'
            }, React.createElement(_form.FormProfile, null)), modals.cancel && React.createElement(_cancelModal.CancelModal, null)));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/profiles-field
      **************************************/

      ims.set('./views/profiles-field', {
        hash: 2024399271,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfilesField = ProfilesField;
          var React = require("react");
          var _context = require("./context");
          var _form = require("pragmate-ui/form");
          function ProfilesField() {
            const {
              manager: {
                profiles,
                user
              }
            } = (0, _context.useProfileContext)();
            const handleProfiles = event => {
              const id = parseInt(event.currentTarget.value);
              const profile = profiles.items.find(item => item.id === id);
              user.setProfiles([profile]);
            };
            const order = profiles.items.sort((a, b) => {
              return a.profile.toLowerCase().localeCompare(b.profile.toLowerCase());
            });
            const output = order.map(item => {
              const checked = user.profiles.has(item.id);
              return React.createElement(_form.Checkbox, {
                key: `${item.id}.${item.profile}`,
                checked: checked,
                value: item.id,
                onChange: handleProfiles,
                name: item.id,
                label: item.profile
              });
            });
            return React.createElement("div", {
              className: "profiles-content"
            }, output);
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfbWFuYWdlciIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJWaWV3IiwibWFuYWdlciIsImNyZWF0ZVN0b3JlIiwiTWFuYWdlciIsInNob3ciLCJpZCIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJfZW50aXRpZXMiLCJfY29uZmlnIiwiX3dyYXBwZXIiLCJfcm91dGluZyIsIlJlYWN0aXZlTW9kZWwiLCJ1c2VyIiwiVXNlciIsInByb2ZpbGVzIiwiUHJvZmlsZXMiLCJlcnJvciIsImlzQ3JlYXRpbmciLCJ0ZXh0cyIsInVzZXJJZCIsInByb21pc2VzIiwibGltaXQiLCJwdXNoIiwicGFyc2VJbnQiLCJnZXRQcm9maWxlcyIsIlByb21pc2UiLCJhbGwiLCJjb25zb2xlIiwicmVhZHkiLCJ0cmlnZ2VyRXZlbnQiLCJjbGVhbiIsImNyZWF0ZSIsImNoYW5nZVBhc3N3b3JkVXJsIiwiZGVmYXVsdCIsInBhcmFtcyIsInVwbG9hZFVybCIsImRldmVsb3BtZW50IiwiZmV0Y2hpbmciLCJuYW1lcyIsImxhc3ROYW1lcyIsImVtYWlsIiwicGhvbmUiLCJhY3RpdmUiLCJhcHBUb2tlbiIsImFwcGxpY2F0aW9uIiwidG9rZW4iLCJBcnJheSIsImZyb20iLCJrZXlzIiwic2Vzc2lvbiIsInJlc3BvbnNlIiwicmVnaXN0ZXJVc2VyIiwic3RhdHVzIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImludmFsaWRFbWFpbCIsImludmFsaWRQZXJtaXNpb25zIiwiZXJyb3JGb3JtIiwiZWRpdFByb2ZpbGVzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9yZWFjdCIsIl9tb2RhbCIsIl9jb250ZXh0IiwiQ2FuY2VsTW9kYWwiLCJvbkNsb3NlQ2FuY2VsTW9kYWwiLCJ1c2VQcm9maWxlQ29udGV4dCIsImhhbmRsZUNvbmZpcm0iLCJiYWNrIiwiY3JlYXRlRWxlbWVudCIsIkNvbmZpcm1Nb2RhbCIsImNsYXNzTmFtZSIsInRpdGxlIiwiY2FuY2VsTW9kYWwiLCJ0ZXh0IiwiZGVzY3JpcHRpb24iLCJvbkNhbmNlbCIsIm9uQ29uZmlybSIsIlByb2ZpbGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfZm9ybSIsIl9jb21wb25lbnRzIiwiX2hvb2tzIiwiX3Byb2ZpbGVzRmllbGQiLCJGb3JtUHJvZmlsZSIsImdldElucHV0IiwiZmllbGRzIiwidXNlRmllbGRzIiwidXNlRWZmZWN0IiwiZG9udFNob3dDYW5jZWxNb2RhbCIsInZhbHVlcyIsInNvbWUiLCJmaWVsZCIsImlzVW5wdWJsaXNoZWQiLCJpc0J1dHRvbkRpc2FibGVkIiwic2F2ZSIsIkZvcm0iLCJvblN1Ym1pdCIsIklucHV0IiwicmVxdWlyZWQiLCJuYW1lIiwiZGlzYWJsZWQiLCJsYXN0TmFtZSIsImhhc0Vycm9yIiwiZXJyb3JNZXNzYWdlIiwidHlwZSIsIlByb2ZpbGVzRmllbGQiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImNhbmNlbCIsImxvYWRpbmciLCJSZWFjdCIsIl9sb2FkaW5nUGFnZSIsIl9iZXlvbmRfY29udGV4dCIsIl9icmVhZGNydW1iIiwiX2NhbmNlbE1vZGFsIiwic3RvcmUiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsIm1vZGFscyIsInNldE1vZGFscyIsInVzZUJpbmRlciIsIkxvYWRpbmdQYWdlIiwiY3VycmVudFZhbHVlIiwicHJvY2Vzc0xhYmVsIiwiZWRpdCIsImJyZWFkY3J1bWIiLCJwYXRobmFtZSIsIlByb3ZpZGVyIiwiQnJlYWRDcnVtYiIsIml0ZW1zIiwiaGFuZGxlUHJvZmlsZXMiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJwcm9maWxlIiwiZmluZCIsIml0ZW0iLCJzZXRQcm9maWxlcyIsIm9yZGVyIiwic29ydCIsImEiLCJiIiwidG9Mb3dlckNhc2UiLCJsb2NhbGVDb21wYXJlIiwib3V0cHV0IiwibWFwIiwiY2hlY2tlZCIsImhhcyIsIkNoZWNrYm94Iiwia2V5Iiwib25DaGFuZ2UiLCJsYWJlbCJdLCJzb3VyY2VzIjpbIi93aWRnZXQvdHMvY29udHJvbGxlci50cyIsIi93aWRnZXQvdHMvbWFuYWdlci50cyIsIi90eXBlcy50cyIsIi93aWRnZXQvdHMvdmlld3MvY2FuY2VsLW1vZGFsLnRzeCIsIi93aWRnZXQvdHMvdmlld3MvY29udGV4dC50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL2Zvcm0udHN4IiwiL3dpZGdldC90cy92aWV3cy9pbmRleC50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL3Byb2ZpbGVzLWZpZWxkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVBLElBQUFFLFFBQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDVkcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM5QyxJQUFJQyxNQUFNQSxDQUFBO2NBQ1QsT0FBT0osTUFBQSxDQUFBSyxJQUFJO1lBQ1o7WUFFQSxDQUFBQyxPQUFRO1lBRVJDLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsT0FBUSxHQUFHLElBQUlMLFFBQUEsQ0FBQU8sT0FBTyxFQUFFO2NBQzdCLE9BQU8sSUFBSSxDQUFDLENBQUFGLE9BQVE7WUFDckI7WUFFQUcsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQUgsT0FBUSxFQUFFO2NBQ3BCLE1BQU1JLEVBQUUsR0FBRyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0Ms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