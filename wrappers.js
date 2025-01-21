System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.14/model", "@bgroup/http-suite@1.0.5/api", "sgs-workflow@1.0.0/config", "@beyond-js/kernel@0.1.9/core", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, appWrapper, session, __beyond_pkg, hmr;
  _export({
    appWrapper: void 0,
    session: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive1114Model) {
      dependency_1 = _beyondJsReactive1114Model;
    }, function (_bgroupHttpSuite105Api) {
      dependency_2 = _bgroupHttpSuite105Api;
    }, function (_sgsWorkflow100Config) {
      dependency_3 = _sgsWorkflow100Config;
    }, function (_beyondJsKernel019Core) {
      dependency_4 = _beyondJsKernel019Core;
    }, function (_beyondJsKernel019Routing) {
      dependency_5 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@bg/jadmin", "0.0.1"], ["@bg/auth-api", "1.0.0"], ["@jadmin/ui", "1.0.0"], ["@bgroup/jview", "1.0.3"], ["@bgroup/helpers", "1.0.7"], ["@bgroup/wise-form", "0.0.4"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/bee", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/reactive", "1.1.14"], ["@bgroup/http-suite", "1.0.5"], ["chart.js", "4.4.1"], ["dayjs", "1.11.10"], ["dotenv", "16.4.4"], ["express", "4.18.2"], ["framer-motion", "10.18.0"], ["googleapis", "129.0.0"], ["javascript-time-ago", "2.5.10"], ["jsonwebtoken", "9.0.2"], ["mathjs", "12.4.1"], ["moment", "2.30.1"], ["perfect-scrollbar", "1.5.5"], ["pragmate-ui", "0.1.2"], ["prismjs", "1.29.0"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-google-recaptcha", "3.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["swiper", "11.0.6"], ["tippy.js", "6.3.7"], ["use-debounce", "10.0.0"], ["uuid", "9.0.1"], ["wise-form", "0.0.4"], ["@babel/core", "7.23.9"], ["@babel/preset-env", "7.23.9"], ["@babel/preset-typescript", "7.23.3"], ["@types/react", "18.2.55"], ["@types/react-dom", "18.2.19"], ["babel-jest", "29.7.0"], ["jest", "29.7.0"], ["ts-jest", "29.1.2"], ["sgs-workflow", "1.0.0"], ["sgs-workflow", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "sgs-workflow@1.0.0/wrappers"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@bgroup/http-suite/api', dependency_2], ['sgs-workflow/config', dependency_3], ['@beyond-js/kernel/core', dependency_4], ['@beyond-js/kernel/routing', dependency_5]]);
      ims = new Map();
      /*********************
      INTERNAL MODULE: ./app
      *********************/
      ims.set('./app', {
        hash: 3982056474,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.appWrapper = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@bgroup/http-suite/api");
          var _config = require("sgs-workflow/config");
          var _session = require("./session");
          var _core = require("@beyond-js/kernel/core");
          //import { routing } from '@beyond-js/kernel/routing';
          class AppWrapper extends _model.ReactiveModel {
            #api = new _api.Api(_config.default.params.server).bearer(_session.session.token);
            #configuration;
            get configuration() {
              return this.#configuration;
            }
            #processAvailable;
            get processAvailable() {
              return this.#processAvailable || [];
            }
            get menuItems() {
              return JSON.parse(this.#configuration?.menu.data || "[]");
            }
            #menuToShow = [];
            get menuToShow() {
              return this.#menuToShow;
            }
            #isMenuItemsLoaded;
            get isMenuItemsLoaded() {
              return this.#isMenuItemsLoaded;
            }
            constructor() {
              super();
              const binder = () => {
                this.#api.bearer(_session.session.token);
                this.load();
              };
              _session.session.on("change", binder);
              _session.session.on("login", binder);
              this.load();
            }
            load = async () => {
              //	if (this.ready) return;
              try {
                if (!_session.session.isLogged) return;
                if (!this.#isMenuItemsLoaded) this.#isMenuItemsLoaded = new _core.PendingPromise();
                const response = await this.#api.get(`dashboard-configurations`);
                if (!response.data) throw new Error(response.message);
                this.#configuration = response.data;
                localStorage.setItem("app-menu", this.#configuration.menu.data);
                this.#processAvailable = JSON.parse(response.data.processAvailable.data);
                this.loaded = true;
                this.#isMenuItemsLoaded.resolve();
              } catch (error) {} finally {
                this.ready = true;
                this.triggerEvent();
              }
            };
            checkMenu = async () => {
              //const always = ['mis tareas', 'mis instancias', 'administración'];
              const always = ["mis tareas", "mis instancias"];
              const menu = localStorage.getItem("app-menu");
              const roles = localStorage.getItem("session-roles");
              const userRoles = roles ? JSON.parse(roles) : _session.session.roles;
              if (!this.loaded && !menu && !userRoles) return this.isMenuItemsLoaded;
              let menuItems = JSON.parse(menu ?? this.configuration?.menu.data ?? "[]");
              this.#menuToShow = menuItems.filter(item => {
                const itemAlways = always.includes(item.name.toLowerCase());
                const itemOptional = userRoles.some(rol => item.name.toLowerCase().includes(rol.name.toLowerCase()));
                const found = itemAlways || itemOptional;
                return found;
              });
              return this.#menuToShow;
            };
          }
          /*bundle*/
          const appWrapper = exports.appWrapper = new AppWrapper();
        }
      });

      /*************************
      INTERNAL MODULE: ./session
      *************************/

      ims.set('./session', {
        hash: 4021441957,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.session = exports.Session = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _config = require("sgs-workflow/config");
          var _api = require("@bgroup/http-suite/api");
          var _user = require("./user");
          var _routing = require("@beyond-js/kernel/routing");
          class Session extends _model.ReactiveModel {
            #api;
            #user = {
              id: ""
            };
            get user() {
              return this.#user;
            }
            set user(value) {
              this.#user = value;
              this.triggerEvent();
            }
            #token = JSON.parse(localStorage.getItem("sgs-session"))?.accessToken;
            get token() {
              const savedToken = JSON.parse(localStorage.getItem("sgs-session"));
              return this.#token || savedToken?.accessToken;
            }
            #isLogged = false || !!localStorage.getItem("sgs-session");
            get isLogged() {
              return this.#isLogged || !!localStorage.getItem("sgs-session");
            }
            #roles = [];
            get roles() {
              return this.#roles;
            }
            set roles(value) {
              this.#roles = value;
            }
            #hierarchy = [];
            get hierarchy() {
              return this.#hierarchy;
            }
            set hierarchy(value) {
              this.#hierarchy = value;
            }
            #processAvailable = [];
            get processAvailable() {
              return this.#processAvailable;
            }
            set processAvailable(newProcessAvailable) {
              this.#processAvailable = newProcessAvailable;
            }
            #processApplicant = [];
            get processApplicant() {
              return this.#processApplicant;
            }
            #stamps = [];
            get stamps() {
              return this.#stamps;
            }
            #businessUnits = [];
            get businessUnits() {
              return this.#businessUnits;
            }
            set ProcessApplicant(value) {
              this.#processApplicant = value;
            }
            constructor() {
              super();
              this.init();
            }
            init = async () => {
              this.#api = new _api.Api(_config.default.params.securityServer);
              const storage = localStorage.getItem("sgs-session");
              if (!storage) return;
              const apiSession = new _api.Api(_config.default.params.securityServer);
              const user = JSON.parse(storage);
              this.#user = new _user.User(user);
              apiSession.bearer(user.accessToken);
              try {
                const response = await apiSession.get("my-info");
                if (!response.status) return;
                this.#roles = response.data.roles;
                localStorage.setItem("session-roles", JSON.stringify(this.#roles));
                this.#hierarchy = response.data.hierarchy;
                this.#processApplicant = response.data.processApplicant;
                this.#processAvailable = response.data.processAvailable;
                this.#stamps = response.data.stampsCompany;
                this.#businessUnits = response.data.businessUnits;
              } catch (error) {
                return {
                  status: false,
                  error
                };
              }
              this.triggerEvent();
            };
            login = async fields => {
              this.fetching = true;
              try {
                const responseToken = await this.#api.post(`login`, fields);
                if (!responseToken.status) throw responseToken.message;
                localStorage.setItem("sgs-session", JSON.stringify({
                  accessToken: responseToken.data.token,
                  ...responseToken.data.user
                }));
                this.#isLogged = true;
                // TODO: NEXT LINE IS TEMPORAL:
                this.#user = new _user.User(responseToken.data.user);
                this.#token = responseToken.data.token;
                await this.init();
                this.triggerEvent("login");
                return {
                  status: true
                };
              } catch (error) {
                return {
                  status: false,
                  error
                };
              } finally {
                this.fetching = false;
              }
            };
            forgotPassword = async fields => {
              this.fetching = true;
              try {
                const responseToken = await this.#api.post(`forgot-password`, fields);
                if (!responseToken.status) throw responseToken.message;
                return {
                  status: true,
                  data: responseToken.data
                };
              } catch (error) {
                return {
                  status: false,
                  error
                };
              } finally {
                this.fetching = false;
              }
            };
            resetPassword = async fields => {
              this.fetching = true;
              try {
                const responseToken = await this.#api.post(`reset-password`, fields);
                if (!responseToken.status) throw responseToken.message;
                return {
                  status: true
                };
              } catch (error) {
                return {
                  status: false,
                  error
                };
              } finally {
                this.fetching = false;
              }
            };
            validateResetToken = async fields => {
              this.fetching = true;
              try {
                const responseToken = await this.#api.post(`check-reset-token`, fields);
                if (!responseToken.status) throw responseToken.message;
                return {
                  status: true
                };
              } catch (error) {
                return {
                  status: false,
                  error
                };
              } finally {
                this.fetching = false;
              }
            };
            logout = () => {
              localStorage.removeItem("sgs-session");
              localStorage.removeItem("session-roles");
              localStorage.removeItem("app-menu");
              this.#isLogged = false;
              this.triggerEvent();
              _routing.routing.pushState("/login");
            };
            tokenExpired = () => {
              localStorage.removeItem("sgs-session");
              this.#isLogged = false;
              this.triggerEvent("token.expired");
              localStorage.setItem("token.invalid", "true");
              _routing.routing.pushState("/login");
            };
            isSealInBusinessUnit = ({
              denominacion
            }) => {
              const seal = this.#stamps.find(item => item.denominacion === denominacion);
              const found = this.#businessUnits.some(item => item.id === seal.idUnSgs);
              return found;
            };
          }
          exports.Session = Session;
          /*bundle*/
          const session = exports.session = new Session();
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 3741923468,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**********************
      INTERNAL MODULE: ./user
      **********************/

      ims.set('./user', {
        hash: 290206934,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.User = void 0;
          var _model = require("@beyond-js/reactive/model");
          class User extends _model.ReactiveModel {
            #names;
            get names() {
              return this.#names;
            }
            #lastNames;
            get lastNames() {
              return this.#lastNames;
            }
            get fullName() {
              return `${`${this.names ?? ''}`} ${this.lastNames ?? ''}`;
            }
            #email;
            get email() {
              return this.#email;
            }
            #username;
            get username() {
              return this.#username;
            }
            #profileImage;
            get profileImage() {
              return this.#profileImage;
            }
            #id;
            get id() {
              return this.#id;
            }
            constructor(data) {
              super();
              this.#email = data.email;
              this.#names = data.nombre;
              this.#lastNames = data.apellido;
              this.#profileImage = data.profileImage;
              this.#id = data.id;
              this.#username = data.username;
            }
          }
          exports.User = User;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./app",
        "from": "appWrapper",
        "name": "appWrapper"
      }, {
        "im": "./session",
        "from": "session",
        "name": "session"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'appWrapper') && _export("appWrapper", appWrapper = require ? require('./app').appWrapper : value);
        (require || prop === 'session') && _export("session", session = require ? require('./session').session : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2FwaSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIl9jb3JlIiwiQXBwV3JhcHBlciIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwic2VydmVyIiwiYmVhcmVyIiwic2Vzc2lvbiIsInRva2VuIiwiY29uZmlndXJhdGlvbiIsInByb2Nlc3NBdmFpbGFibGUiLCJtZW51SXRlbXMiLCJKU09OIiwicGFyc2UiLCJtZW51IiwiZGF0YSIsIm1lbnVUb1Nob3ciLCJpc01lbnVJdGVtc0xvYWRlZCIsImNvbnN0cnVjdG9yIiwiYmluZGVyIiwibG9hZCIsIm9uIiwiaXNMb2dnZWQiLCJQZW5kaW5nUHJvbWlzZSIsInJlc3BvbnNlIiwiZ2V0IiwiRXJyb3IiLCJtZXNzYWdlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImxvYWRlZCIsInJlc29sdmUiLCJlcnJvciIsInJlYWR5IiwidHJpZ2dlckV2ZW50IiwiY2hlY2tNZW51IiwiYWx3YXlzIiwiZ2V0SXRlbSIsInJvbGVzIiwidXNlclJvbGVzIiwiZmlsdGVyIiwiaXRlbSIsIml0ZW1BbHdheXMiLCJpbmNsdWRlcyIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsIml0ZW1PcHRpb25hbCIsInNvbWUiLCJyb2wiLCJmb3VuZCIsImFwcFdyYXBwZXIiLCJleHBvcnRzIiwiX3VzZXIiLCJfcm91dGluZyIsIlNlc3Npb24iLCJ1c2VyIiwiaWQiLCJ2YWx1ZSIsImFjY2Vzc1Rva2VuIiwic2F2ZWRUb2tlbiIsImhpZXJhcmNoeSIsIm5ld1Byb2Nlc3NBdmFpbGFibGUiLCJwcm9jZXNzQXBwbGljYW50Iiwic3RhbXBzIiwiYnVzaW5lc3NVbml0cyIsIlByb2Nlc3NBcHBsaWNhbnQiLCJpbml0Iiwic2VjdXJpdHlTZXJ2ZXIiLCJzdG9yYWdlIiwiYXBpU2Vzc2lvbiIsIlVzZXIiLCJzdGF0dXMiLCJzdHJpbmdpZnkiLCJzdGFtcHNDb21wYW55IiwibG9naW4iLCJmaWVsZHMiLCJmZXRjaGluZyIsInJlc3BvbnNlVG9rZW4iLCJwb3N0IiwiZm9yZ290UGFzc3dvcmQiLCJyZXNldFBhc3N3b3JkIiwidmFsaWRhdGVSZXNldFRva2VuIiwibG9nb3V0IiwicmVtb3ZlSXRlbSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJ0b2tlbkV4cGlyZWQiLCJpc1NlYWxJbkJ1c2luZXNzVW5pdCIsImRlbm9taW5hY2lvbiIsInNlYWwiLCJmaW5kIiwiaWRVblNncyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwibmFtZXMiLCJsYXN0TmFtZXMiLCJmdWxsTmFtZSIsImVtYWlsIiwidXNlcm5hbWUiLCJwcm9maWxlSW1hZ2UiLCJub21icmUiLCJhcGVsbGlkbyJdLCJzb3VyY2VzIjpbIi9hcHAudHMiLCIvc2Vzc2lvbi50cyIsIi90eXBlcy50cyIsIi91c2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxJQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxPQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxRQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxLQUFBLEdBQUFKLE9BQUE7VUFDQTtVQUNBLE1BQU1LLFVBQVcsU0FBUU4sTUFBQSxDQUFBTyxhQUF5QjtZQUNqRCxDQUFBQyxHQUFJLEdBQVEsSUFBSU4sSUFBQSxDQUFBTyxHQUFHLENBQUNOLE9BQUEsQ0FBQU8sT0FBTSxDQUFDQyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxDQUFDQyxNQUFNLENBQUNULFFBQUEsQ0FBQVUsT0FBTyxDQUFDQyxLQUFLLENBQUM7WUFFL0QsQ0FBQUMsYUFBYztZQUNkLElBQUlBLGFBQWFBLENBQUE7Y0FDaEIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsYUFBYztZQUMzQjtZQUVBLENBQUFDLGdC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