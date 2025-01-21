System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/transversals", "@beyond-js/widgets@0.1.6/render", "@beyond-js/reactive@1.1.14/database", "sgs-workflow@1.0.0/config", "sgs-workflow@1.0.0/wrappers", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, Transversal, __beyond_transversal, widgets, bundles;
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Transversals) {
      dependency_1 = _beyondJsKernel019Transversals;
    }, function (_beyondJsWidgets016Render) {
      dependency_2 = _beyondJsWidgets016Render;
    }, function (_beyondJsReactive1114Database) {
      dependency_3 = _beyondJsReactive1114Database;
    }, function (_sgsWorkflow100Config) {
      dependency_4 = _sgsWorkflow100Config;
    }, function (_sgsWorkflow100Wrappers) {
      dependency_5 = _sgsWorkflow100Wrappers;
    }, function (_beyondJsKernel019Routing) {
      dependency_6 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      ({
        Transversal
      } = brequire('@beyond-js/kernel/transversals'));
      _export("__beyond_transversal", __beyond_transversal = new Transversal('start', ''));
      __beyond_transversal.dependencies.update([['@beyond-js/kernel/transversals', dependency_1], ['@beyond-js/widgets/render', dependency_2], ['@beyond-js/reactive/database', dependency_3], ['sgs-workflow/config', dependency_4], ['sgs-workflow/wrappers', dependency_5], ['@beyond-js/kernel/routing', dependency_6]]);

      /*************
      BUNDLE: WIDGET
      *************/
      ({
        widgets
      } = brequire('@beyond-js/widgets/render'));
      widgets.register([{
        "name": "layout-login",
        "vspecifier": "@bg/jadmin@0.0.1/layout-login",
        "is": "layout"
      }, {
        "name": "main-layout",
        "vspecifier": "@bg/jadmin@0.0.1/main.widget",
        "is": "layout"
      }, {
        "name": "jadmin-auth-change-password",
        "vspecifier": "@bg/jadmin@0.0.1/change-password.widget",
        "is": "page",
        "route": "/auth/password",
        "layout": "main-layout"
      }, {
        "name": "jadmin-auth-code-verification",
        "vspecifier": "@bg/jadmin@0.0.1/code-verification.widget",
        "is": "page",
        "route": "/auth/code/${token}"
      }, {
        "name": "jadmin-auth-forget-password",
        "vspecifier": "@bg/jadmin@0.0.1/forget-password.widget",
        "is": "page",
        "route": "/auth/forget/password"
      }, {
        "name": "jadmin-auth-login-page",
        "vspecifier": "@bg/jadmin@0.0.1/auth-login.widget",
        "is": "page",
        "route": "/auth/login"
      }, {
        "name": "jadmin-auth-profile",
        "vspecifier": "@bg/jadmin@0.0.1/profile-view.widget",
        "is": "page",
        "route": "/profile/view",
        "layout": "main-layout"
      }, {
        "name": "jadmin-auth-set-forgotten-password",
        "vspecifier": "@bg/jadmin@0.0.1/set-forgotten-password.widget",
        "is": "page",
        "route": "/auth/set-forgotten-password/${token}"
      }, {
        "name": "error-404",
        "vspecifier": "@bg/jadmin@0.0.1/error-404.widget",
        "is": "page",
        "route": "/404"
      }, {
        "name": "error-500",
        "vspecifier": "@bg/jadmin@0.0.1/error-500.widget",
        "is": "page",
        "route": "/500",
        "layout": "layout-login"
      }, {
        "name": "gallery-page",
        "vspecifier": "@bg/jadmin@0.0.1/gallery.widget",
        "is": "page",
        "route": "/gallery",
        "layout": "main-layout"
      }, {
        "name": "admin-home",
        "vspecifier": "@bg/jadmin@0.0.1/admin-home",
        "is": "page",
        "route": "/admin-home",
        "layout": "main-layout"
      }, {
        "name": "notifications-list",
        "vspecifier": "@bg/jadmin@0.0.1/notifications/list.widget",
        "is": "page",
        "route": "/notifications",
        "layout": "main-layout"
      }, {
        "name": "notifications-management",
        "vspecifier": "@bg/jadmin@0.0.1/notifications/management.widget",
        "is": "page",
        "route": "/notifications/management/${id}",
        "layout": "main-layout"
      }, {
        "name": "users-profiles",
        "vspecifier": "@bg/jadmin@0.0.1/users/profiles.widget",
        "is": "page",
        "route": "/profiles",
        "layout": "main-layout"
      }, {
        "name": "test-page",
        "vspecifier": "@bg/jadmin@0.0.1/test",
        "is": "page",
        "route": "/test",
        "layout": "main-layout"
      }, {
        "name": "users-list",
        "vspecifier": "@bg/jadmin@0.0.1/users-list.widget",
        "is": "page",
        "route": "/users",
        "layout": "main-layout"
      }, {
        "name": "users-management",
        "vspecifier": "@bg/jadmin@0.0.1/users/management.widget",
        "is": "page",
        "route": "/users/management/${id}",
        "layout": "main-layout"
      }, {
        "name": "main-jview-layout",
        "vspecifier": "@bgroup/jview@1.0.3/main-jview-layout",
        "is": "layout"
      }, {
        "name": "layout-login-app",
        "vspecifier": "sgs-workflow@1.0.0/layout-login-app",
        "is": "layout"
      }, {
        "name": "main-app-layout",
        "vspecifier": "sgs-workflow@1.0.0/layout-main",
        "is": "layout"
      }, {
        "name": "admin-page",
        "vspecifier": "sgs-workflow@1.0.0/admin",
        "is": "page",
        "route": "/admin",
        "layout": "main-app-layout"
      }, {
        "name": "apps-page",
        "vspecifier": "sgs-workflow@1.0.0/apps",
        "is": "page",
        "route": "/apps",
        "layout": "main-app-layout"
      }, {
        "name": "auth-change-password-page",
        "vspecifier": "sgs-workflow@1.0.0/auth/change-password.widget",
        "is": "page",
        "route": "/auth/change-password/${token}"
      }, {
        "name": "forgot-password",
        "vspecifier": "sgs-workflow@1.0.0/auth/forgot-password.widget",
        "is": "page",
        "route": "/auth/forgot-password"
      }, {
        "name": "auth-login-page",
        "vspecifier": "sgs-workflow@1.0.0/auth/login.widget",
        "is": "page",
        "route": "/login"
      }, {
        "name": "request-management",
        "vspecifier": "sgs-workflow@1.0.0/requests-management",
        "is": "page",
        "route": "/request/management/${id}",
        "layout": "main-app-layout"
      }, {
        "name": "home-page",
        "vspecifier": "sgs-workflow@1.0.0/home",
        "is": "page",
        "route": "/",
        "layout": "main-app-layout"
      }, {
        "name": "indicators-page",
        "vspecifier": "sgs-workflow@1.0.0/indicators",
        "is": "page",
        "route": "/indicators",
        "layout": "main-app-layout"
      }, {
        "name": "input-date",
        "vspecifier": "sgs-workflow@1.0.0/input-date-page",
        "is": "page",
        "route": "/input-date"
      }, {
        "name": "instances-page",
        "vspecifier": "sgs-workflow@1.0.0/instances",
        "is": "page",
        "route": "/instances",
        "layout": "main-app-layout"
      }, {
        "name": "monitor-page",
        "vspecifier": "sgs-workflow@1.0.0/monitor",
        "is": "page",
        "route": "/monitor",
        "layout": "main-app-layout"
      }, {
        "name": "search-input",
        "vspecifier": "sgs-workflow@1.0.0/search-input",
        "is": "page",
        "route": "/search-input"
      }, {
        "name": "tooltips-page",
        "vspecifier": "sgs-workflow@1.0.0/tooltips",
        "is": "page",
        "route": "/tooltips",
        "layout": "main-app-layout"
      }, {
        "name": "traffic-ligt-page",
        "vspecifier": "sgs-workflow@1.0.0/traffic-light",
        "is": "page",
        "route": "/input/traffic-light"
      }]);
      bundles = [];
      /************************
      MODULE: sgs-workflow/init
      ************************/
      bundles.push([{
        "module": {
          "vspecifier": "sgs-workflow@1.0.0/init"
        },
        "type": "start"
      }, function (ims, exports) {
        const bimport = specifier => {
          const dependencies = new Map([["@bg/jadmin", "0.0.1"], ["@bg/auth-api", "1.0.0"], ["@jadmin/ui", "1.0.0"], ["@bgroup/jview", "1.0.3"], ["@bgroup/helpers", "1.0.7"], ["@bgroup/wise-form", "0.0.4"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/bee", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/reactive", "1.1.14"], ["@bgroup/http-suite", "1.0.5"], ["chart.js", "4.4.1"], ["dayjs", "1.11.10"], ["dotenv", "16.4.4"], ["express", "4.18.2"], ["framer-motion", "10.18.0"], ["googleapis", "129.0.0"], ["javascript-time-ago", "2.5.10"], ["jsonwebtoken", "9.0.2"], ["mathjs", "12.4.1"], ["moment", "2.30.1"], ["perfect-scrollbar", "1.5.5"], ["pragmate-ui", "0.1.2"], ["prismjs", "1.29.0"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-google-recaptcha", "3.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["swiper", "11.0.6"], ["tippy.js", "6.3.7"], ["use-debounce", "10.0.0"], ["uuid", "9.0.1"], ["wise-form", "0.0.4"], ["@babel/core", "7.23.9"], ["@babel/preset-env", "7.23.9"], ["@babel/preset-typescript", "7.23.3"], ["@types/react", "18.2.55"], ["@types/react-dom", "18.2.19"], ["babel-jest", "29.7.0"], ["jest", "29.7.0"], ["ts-jest", "29.1.2"], ["sgs-workflow", "1.0.0"], ["sgs-workflow", "1.0.0"]]);
          return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
        };
        /**********************
        INTERNAL MODULE: ./menu
        **********************/

        ims.set('./menu', {
          hash: 1798364246,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.createMenu = createMenu;
            async function createMenu() {
              const {
                mainLayoutManager
              } = await globalThis.bimport("@bg/jadmin@0.0.1/sidebar-header.code");
              const {
                session,
                appWrapper
              } = await globalThis.bimport("sgs-workflow/wrappers");
              session.on("change", createMenu);
              appWrapper.on("change", createMenu);
              //const always = ["mis tareas", "mis instancias", "administración"];
              const always = ["mis tareas", "mis instancias"];
              let menuItems = JSON.parse(appWrapper.configuration?.menu.data || "[]");
              menuItems.sort((a, b) => a.order - b.order);
              const toShow = menuItems.filter(item => {
                const itemAlways = always.includes(item.name.toLowerCase());
                const itemOptional = session.roles.some(rol => item.name.toLowerCase().includes(rol.name.toLowerCase()));
                const found = itemAlways || itemOptional;
                return found;
              });
              mainLayoutManager.setMenuItems(toShow);
            }
          }
        });

        /********************************
        INTERNAL MODULE: ./registry/index
        ********************************/

        ims.set('./registry/index', {
          hash: 2815475228,
          creator: function (require, exports) {
            "use strict";

            var _database = require("@beyond-js/reactive/database");
            var _config = require("sgs-workflow/config");
            var _menu = require("../menu");
            const dbName = _config.default.params.application.localDB;
            const dbVersion = _config.default.params.application.localDBVersion;
            async function inializeApp() {
              try {
                const db = await _database.DBManager.config(`${dbName}@${dbVersion}`, {
                  areas: '&id',
                  comments: '&id',
                  instances: '&id',
                  request: '&id',
                  states: '&id',
                  tasks: '&id',
                  processes: '&id',
                  business: '&id',
                  indicators: '&id',
                  forms: '&id'
                });
              } catch (e) {
                console.error('error', e);
              }
            }
            inializeApp();
            (0, _menu.createMenu)();
          }
        });

        /*************************
        INTERNAL MODULE: ./servers
        *************************/

        ims.set('./servers', {
          hash: 1856173060,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
          }
        });
        return {
          dependencies: ['@beyond-js/reactive/database', 'sgs-workflow/config']
        };
      }]);

      /*******************************
      MODULE: sgs-workflow/routing-app
      *******************************/

      bundles.push([{
        "module": {
          "vspecifier": "sgs-workflow@1.0.0/routing-app"
        },
        "type": "start"
      }, function (ims, exports) {
        const bimport = specifier => {
          const dependencies = new Map([["@bg/jadmin", "0.0.1"], ["@bg/auth-api", "1.0.0"], ["@jadmin/ui", "1.0.0"], ["@bgroup/jview", "1.0.3"], ["@bgroup/helpers", "1.0.7"], ["@bgroup/wise-form", "0.0.4"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/bee", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/reactive", "1.1.14"], ["@bgroup/http-suite", "1.0.5"], ["chart.js", "4.4.1"], ["dayjs", "1.11.10"], ["dotenv", "16.4.4"], ["express", "4.18.2"], ["framer-motion", "10.18.0"], ["googleapis", "129.0.0"], ["javascript-time-ago", "2.5.10"], ["jsonwebtoken", "9.0.2"], ["mathjs", "12.4.1"], ["moment", "2.30.1"], ["perfect-scrollbar", "1.5.5"], ["pragmate-ui", "0.1.2"], ["prismjs", "1.29.0"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-google-recaptcha", "3.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.4"], ["swiper", "11.0.6"], ["tippy.js", "6.3.7"], ["use-debounce", "10.0.0"], ["uuid", "9.0.1"], ["wise-form", "0.0.4"], ["@babel/core", "7.23.9"], ["@babel/preset-env", "7.23.9"], ["@babel/preset-typescript", "7.23.3"], ["@types/react", "18.2.55"], ["@types/react-dom", "18.2.19"], ["babel-jest", "29.7.0"], ["jest", "29.7.0"], ["ts-jest", "29.1.2"], ["sgs-workflow", "1.0.0"], ["sgs-workflow", "1.0.0"]]);
          return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
        };
        /***************************************
        INTERNAL MODULE: ./controller/controller
        ***************************************/

        ims.set('./controller/controller', {
          hash: 3321946717,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.Router = void 0;
            var _session = require("./handlers/session");
            var _pipeline = require("./pipeline");
            class Router {
              #isDefault;
              get isDefault() {
                return this.#pathname === "/";
              }
              #pathname;
              get pathname() {
                return this.#pathname;
              }
              #data;
              get data() {
                return this.#data;
              }
              #pipeline;
              constructor() {
                this.#pipeline = new _pipeline.PipeLine([_session.SessionHandler]);
              }
              load = async pathname => {
                return await this.#pipeline.validate(pathname);
              };
            }
            exports.Router = Router;
          }
        });

        /*******************************************
        INTERNAL MODULE: ./controller/handlers/roles
        *******************************************/

        ims.set('./controller/handlers/roles', {
          hash: 2243975800,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.RoleHandler = RoleHandler;
            var _wrappers = require("sgs-workflow/wrappers");
            const noSession = ["/login", "/auth/forgot-password", "/auth/change-password", "/testing", "/components"];
            async function RoleHandler(route) {
              const items = await _wrappers.appWrapper.checkMenu();
              const isANoSessionRoute = noSession.some(path => route.startsWith(path));
              const isPermission = !!items && Array.isArray(items) && items.some(item => item.path === route);
              if (!isANoSessionRoute && !isPermission) return {
                pathname: "/"
              };
              return {
                pathname: route
              };
            }
          }
        });

        /*********************************************
        INTERNAL MODULE: ./controller/handlers/session
        *********************************************/

        ims.set('./controller/handlers/session', {
          hash: 3484224811,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.SessionHandler = SessionHandler;
            var _wrappers = require("sgs-workflow/wrappers");
            var _roles = require("./roles");
            const noSession = ["/login", "/auth/forgot-password", "/auth/change-password", "/tests/buttonGroup"];
            async function SessionHandler(route) {
              const isANoSessionRoute = noSession.some(path => route.startsWith(path));
              const isSessionActive = await _wrappers.session.isLogged;
              if (route.includes("tests/")) return {
                pathname: route
              };
              if (route.includes("/auth/change-password")) return {
                pathname: route
              };
              if (route.includes("/auth/login")) return {
                pathname: "/login"
              };
              if (!isSessionActive && !isANoSessionRoute) return {
                pathname: "/login"
              };
              if (isSessionActive && isANoSessionRoute) return {
                pathname: "/"
              };
              if (route.includes("/auth/login")) return {
                pathname: "/login"
              };
              return (0, _roles.RoleHandler)(route);
            }
          }
        });

        /*************************************
        INTERNAL MODULE: ./controller/pipeline
        *************************************/

        ims.set('./controller/pipeline', {
          hash: 1042748229,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.PipeLine = void 0;
            class PipeLine {
              #pathname;
              get pathname() {
                return this.#parent?.pathname;
              }
              #data;
              get data() {
                return this.#parent?.data;
              }
              #parent;
              #handlers = [];
              constructor(handlers) {
                this.#parent = parent;
                this.#handlers = handlers;
              }
              validate = async path => {
                for (let handler of this.#handlers) {
                  if (handler === undefined) continue;
                  let response = await handler(path);
                  if (response && typeof response === 'object') {
                    return response;
                    break;
                  }
                }
                return {
                  pathname: path
                };
              };
            }
            exports.PipeLine = PipeLine;
          }
        });

        /*************************
        INTERNAL MODULE: ./routing
        *************************/

        ims.set('./routing', {
          hash: 1116296192,
          creator: function (require, exports) {
            "use strict";

            var _routing = require("@beyond-js/kernel/routing");
            var _controller = require("./controller/controller");
            const router = new _controller.Router();
            _routing.routing.redirect = async function redirect(uri) {
              const response = await router.load(uri.pathname);
              return response.pathname;
            };
            // routing.missing = async (pathname: String) => {
            // 	let error404: boolean = false;
            // 	if (error404) return;
            // 	error404 = true;
            // 	return "surveys-page";
            // };
          }
        });
        return {
          dependencies: ['sgs-workflow/wrappers', '@beyond-js/kernel/routing']
        };
      }]);
      __beyond_transversal.initialise(bundles);
    }
  };
});