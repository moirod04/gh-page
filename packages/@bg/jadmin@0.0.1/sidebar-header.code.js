System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.1.2/image", "@bg/jadmin@0.0.1/dropdown", "@jadmin/ui@1.0.0/hooks", "@bg/jadmin@0.0.1/config", "@bg/jadmin@0.0.1/app-icon", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.2/toast", "pragmate-ui@0.1.2/form", "@bg/jadmin@0.0.1/wrapper", "pragmate-ui@0.1.2/icons", "@bg/jadmin@0.0.1/breadcrumb", "@bg/jadmin@0.0.1/loading-page", "@bg/auth-api@1.0.0/wrapper.ts", "@beyond-js/reactive@1.1.14/model", "@bg/jadmin@0.0.1/utils", "pragmate-ui@0.1.2/perfect-scrollbar"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, UserMenu, SidebarHeader, mainLayoutManager, __beyond_pkg, hmr;
  _export({
    UserMenu: void 0,
    SidebarHeader: void 0,
    mainLayoutManager: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi012Image) {
      dependency_3 = _pragmateUi012Image;
    }, function (_bgJadmin001Dropdown) {
      dependency_4 = _bgJadmin001Dropdown;
    }, function (_jadminUi100Hooks) {
      dependency_5 = _jadminUi100Hooks;
    }, function (_bgJadmin001Config) {
      dependency_6 = _bgJadmin001Config;
    }, function (_bgJadmin001AppIcon) {
      dependency_7 = _bgJadmin001AppIcon;
    }, function (_beyondJsKernel019Routing) {
      dependency_8 = _beyondJsKernel019Routing;
    }, function (_pragmateUi012Toast) {
      dependency_9 = _pragmateUi012Toast;
    }, function (_pragmateUi012Form) {
      dependency_10 = _pragmateUi012Form;
    }, function (_bgJadmin001Wrapper) {
      dependency_11 = _bgJadmin001Wrapper;
    }, function (_pragmateUi012Icons) {
      dependency_12 = _pragmateUi012Icons;
    }, function (_bgJadmin001Breadcrumb) {
      dependency_13 = _bgJadmin001Breadcrumb;
    }, function (_bgJadmin001LoadingPage) {
      dependency_14 = _bgJadmin001LoadingPage;
    }, function (_bgAuthApi100WrapperTs) {
      dependency_15 = _bgAuthApi100WrapperTs;
    }, function (_beyondJsReactive1114Model) {
      dependency_16 = _beyondJsReactive1114Model;
    }, function (_bgJadmin001Utils) {
      dependency_17 = _bgJadmin001Utils;
    }, function (_pragmateUi012PerfectScrollbar) {
      dependency_18 = _pragmateUi012PerfectScrollbar;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@bg/auth-api", "1.0.0"], ["@jadmin/ui", "1.0.0"], ["@bg/auth-models", null], ["@bgroup/jview", "1.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/widgets", "0.1.6"], ["@bgroup/data-model", "1.0.11"], ["@bgroup/ui", "0.0.38"], ["chart.js", "4.4.4"], ["dayjs", "1.11.13"], ["dotenv", "16.4.5"], ["framer-motion", "6.5.1"], ["googleapis", "120.0.0"], ["mysql2", "3.11.0"], ["perfect-scrollbar", "1.5.5"], ["pragmate-ui", "0.1.2"], ["prism-react-renderer", "2.4.0"], ["prismjs", "1.29.0"], ["react-is", "18.3.1"], ["react-select", "5.8.0"], ["sequelize", "6.37.3"], ["socket.io-client", "4.7.5"], ["swiper", "11.1.12"], ["tippy.js", "6.3.7"], ["uuid", "9.0.1"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["@bg/jadmin", "0.0.1"], ["sgs-workflow", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@bg/jadmin@0.0.1/sidebar-header",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/image', dependency_3], ['@bg/jadmin/dropdown', dependency_4], ['@jadmin/ui/hooks', dependency_5], ['@bg/jadmin/config', dependency_6], ['@bg/jadmin/app-icon', dependency_7], ['@beyond-js/kernel/routing', dependency_8], ['pragmate-ui/toast', dependency_9], ['pragmate-ui/form', dependency_10], ['@bg/jadmin/wrapper', dependency_11], ['pragmate-ui/icons', dependency_12], ['@bg/jadmin/breadcrumb', dependency_13], ['@bg/jadmin/loading-page', dependency_14], ['@bg/auth-api/wrapper.ts', dependency_15], ['@beyond-js/reactive/model', dependency_16], ['@bg/jadmin/utils', dependency_17], ['pragmate-ui/perfect-scrollbar', dependency_18]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/jadmin@0.0.1/sidebar-header.code');
      ims = new Map();
      /*********************************
      INTERNAL MODULE: ./auth-menu/index
      *********************************/
      ims.set('./auth-menu/index', {
        hash: 3365095447,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AuthMenu = AuthMenu;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _dropdown = require("@bg/jadmin/dropdown");
          var _userMenu = require("./user-menu");
          var _hooks = require("@jadmin/ui/hooks");
          var _config = require("@bg/jadmin/config");
          var _context = require("../context");
          function AuthMenu() {
            const ref = _react.default.useRef(null);
            const {
              texts,
              wrapper
            } = (0, _context.useSidebarContext)();
            const [update, setUpdate] = _react.default.useState({});
            const [user, setUser] = _react.default.useState(wrapper.user);
            const [isClose, setIsClose] = _react.default.useState(ref.current?.classList?.contains('active'));
            (0, _hooks.useBinder)([wrapper.user, wrapper], () => {
              setUpdate({});
              setUser(wrapper.user);
            }, ["user.changed", "change", "user.change", "changeImage"]);
            const onToggle = () => {
              ref.current.classList.toggle('active');
              setIsClose(ref.current.classList.contains('active'));
            };
            const cls = !!user.profileImage ? "" : "default-image";
            const img = user.profileImage ? `${_config.default.params.mediaServer}/display/image/${user.profileImage}/150x150/${_config.default.params.token}/user` : `${globalThis.baseDir}assets/default-user.png`;
            const userName = `${`${user.names ?? ""}`} ${user.lastNames ?? ""}`;
            return _react.default.createElement(_dropdown.DropdownProvider, {
              onToggle: onToggle,
              isToggle: true,
              isClose: isClose
            }, _react.default.createElement(_dropdown.DropdownToggle, null, _react.default.createElement("div", {
              className: "content-user"
            }, _react.default.createElement("h6", null, userName), _react.default.createElement(_image.Image, {
              className: cls,
              alt: " ",
              src: img
            }))), _react.default.createElement(_dropdown.DropDownMenu, null, _react.default.createElement(_userMenu.UserMenu, {
              ref: ref,
              setIsClose: setIsClose
            })));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./auth-menu/paths
      *********************************/

      ims.set('./auth-menu/paths', {
        hash: 3678062611,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.pathsHeader = void 0;
          const pathsHeader = exports.pathsHeader = {
            "profile": "/profile/view",
            "password": "/auth/password"
          };
        }
      });

      /*************************************
      INTERNAL MODULE: ./auth-menu/user-menu
      *************************************/

      ims.set('./auth-menu/user-menu', {
        hash: 2753813766,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserMenu = void 0;
          var _react = require("react");
          var _appIcon = require("@bg/jadmin/app-icon");
          var _routing = require("@beyond-js/kernel/routing");
          var _dropdown = require("@bg/jadmin/dropdown");
          var _config = require("@bg/jadmin/config");
          var _toast = require("pragmate-ui/toast");
          var _image = require("pragmate-ui/image");
          var _context = require("../context");
          var _paths = require("./paths");
          /*bundle*/
          const UserMenu = exports.UserMenu = (0, _react.forwardRef)((props, ref) => {
            const {
              user,
              texts,
              wrapper
            } = (0, _context.useSidebarContext)();
            const {
              setIsClose
            } = props;
            const navigate = event => {
              const {
                dataset
              } = event.currentTarget;
              ref.current.classList.toggle("active");
              setIsClose(ref.current.classList.contains("active"));
              _routing.routing.pushState(dataset.navigate);
            };
            // TODO
            async function handleClick() {
              try {
                const response = await wrapper.logout();
                if (!response.status) throw new Error(response.error.message);
                _routing.routing.pushState("/auth/login");
              } catch (error) {
                _toast.toast.error("Ha ocurrido un error");
              }
            }
            const userName = `${`${user.names ?? ""}`} ${user.lastNames ?? ""}`;
            const img = wrapper.user.profileImage ? `${_config.default.params.mediaServer}/display/image/${wrapper.user.profileImage}/150x150/${_config.default.params.token}/user` : `${globalThis.baseDir}assets/default-user.png`;
            const cls = !!user.profileImage ? "" : "default-image";
            //const isChangePassword: boolean = config.params.application.isChangePassword;
            const isChangePassword = false;
            //const isProfile: boolean = config.params.application.isProfile;
            const isProfile = false;
            const pathsHeaderMenu = _config.default.params.application.pathsHeader ?? _paths.pathsHeader;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "action"
            }, _react.default.createElement("div", {
              className: "menu",
              ref: ref
            }, _react.default.createElement("div", {
              className: "user-info"
            }, _react.default.createElement(_image.Image, {
              className: cls,
              alt: " ",
              src: img
            }), _react.default.createElement("h3", null, (user.names || user.lastNames) && _react.default.createElement("strong", null, userName), _react.default.createElement("div", null, user.email))), _react.default.createElement("ul", null, isProfile && _react.default.createElement(_dropdown.DropdownLink, {
              tag: "li",
              "data-navigate": pathsHeaderMenu.profile,
              onClick: navigate
            }, _react.default.createElement(_appIcon.AppIcon, {
              icon: "user"
            }), _react.default.createElement("a", {
              className: "dropdown-item"
            }, texts.profile)), isChangePassword && _react.default.createElement(_dropdown.DropdownLink, {
              tag: "li",
              "data-navigate": pathsHeaderMenu.password,
              onClick: navigate,
              className: "nav-item"
            }, _react.default.createElement(_appIcon.AppIcon, {
              icon: "key"
            }), _react.default.createElement("a", {
              className: "dropdown-item"
            }, texts.changePassword)), _react.default.createElement(_dropdown.DropdownLink, {
              onClick: handleClick,
              tag: "li",
              className: "nav-item"
            }, _react.default.createElement(_appIcon.AppIcon, {
              icon: "right-from-bracket"
            }), _react.default.createElement("a", {
              className: "dropdown-item"
            }, texts.logout))))));
          });
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 866171360,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSidebarContext = exports.SidebarContext = void 0;
          var _react = require("react");
          const SidebarContext = exports.SidebarContext = (0, _react.createContext)({});
          const useSidebarContext = () => (0, _react.useContext)(SidebarContext);
          exports.useSidebarContext = useSidebarContext;
        }
      });

      /*********************************
      INTERNAL MODULE: ./dark-light-mode
      *********************************/

      ims.set('./dark-light-mode', {
        hash: 3222942510,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DarKLightMode = DarKLightMode;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _appIcon = require("@bg/jadmin/app-icon");
          var _context = require("./context");
          var _wrapper = require("@bg/jadmin/wrapper");
          var _config = require("@bg/jadmin/config");
          function DarKLightMode() {
            const {
              texts,
              isDark,
              setIsDark
            } = (0, _context.useSidebarContext)();
            const themeStorage = localStorage.getItem("theme");
            const isDarkMode = _config.default.params?.application?.isDarkMode;
            function handleChange({
              target
            }) {
              const container = document.querySelector("html");
              const body = document.querySelector("body");
              const theme = isDark ? "light" : "dark";
              body.setAttribute("data-beyond-mode", theme);
              container.setAttribute("data-beyond-mode", theme);
              localStorage.setItem("theme", theme);
              setIsDark(target.checked);
              _wrapper.appWrapper.triggerEvent("change.theme");
            }
            _react.default.useEffect(() => {
              if (!themeStorage) return;
              const container = document.querySelector("html");
              const body = document.querySelector("body");
              container.setAttribute("data-beyond-mode", themeStorage);
              body.setAttribute("data-beyond-mode", themeStorage);
              _wrapper.appWrapper.triggerEvent("change.theme");
            }, []);
            if (!isDarkMode) return null;
            const icon = isDark ? "moon" : "sun";
            const text = `${texts.theme} ${isDark ? texts.light : texts.dark}`;
            return _react.default.createElement("div", {
              className: "content-dark-mode"
            }, _react.default.createElement(_appIcon.AppIcon, {
              icon: icon
            }), _react.default.createElement(_form.Switch, {
              checked: isDark,
              onChange: handleChange
            }), _react.default.createElement("span", {
              className: "text-mode"
            }, text));
          }
        }
      });

      /************************
      INTERNAL MODULE: ./header
      ************************/

      ims.set('./header', {
        hash: 3915020975,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _authMenu = require("./auth-menu");
          var _config = require("@bg/jadmin/config");
          var _context = require("./context");
          var _icons = require("pragmate-ui/icons");
          var _breadcrumb = require("@bg/jadmin/breadcrumb");
          function Header() {
            const {
              show,
              showDate,
              breadCrumb
            } = (0, _context.useSidebarContext)();
            const [currentTime, setCurrenTime] = _react.default.useState(new Date());
            const cls = show ? "jadmin-jeader" : "jadmin-jeader hide-header";
            const isNotifications = _config.default.params?.application?.isNotifications;
            const date = new Date();
            const options = {
              month: "long",
              day: "numeric",
              weekday: "long"
            };
            const hour = date.getHours();
            const nameMonth = date.toLocaleDateString("es-ES", options);
            const isDay = hour >= 6 && hour < 20;
            const icon = isDay ? "sun" : "moon";
            _react.default.useEffect(() => {
              const intervalId = setInterval(() => {
                setCurrenTime(new Date());
              }, 60000);
              return () => clearInterval(intervalId);
            }, []);
            const formattedTime = currentTime.toLocaleTimeString("es-ES", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true
            });
            const isBreadCrumb = breadCrumb?.title && Array.isArray(breadCrumb?.items) && breadCrumb?.items.length;
            return _react.default.createElement("div", {
              className: cls
            }, isBreadCrumb && _react.default.createElement(_breadcrumb.BreadCrumb, {
              title: breadCrumb?.title,
              items: breadCrumb?.items
            }), showDate && _react.default.createElement("div", {
              className: "jadmin-jeader__content-date"
            }, _react.default.createElement("p", null, nameMonth, " | ", formattedTime), _react.default.createElement(_icons.Icon, {
              icon: icon,
              className: "md"
            })), !isBreadCrumb && !showDate ? _react.default.createElement("span", null) : null, _react.default.createElement("div", {
              className: "jadmin-jeader__content-theme"
            }, _react.default.createElement(_authMenu.AuthMenu, null)));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3781947782,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SidebarHeader = SidebarHeader;
          var _react = require("react");
          var _header = require("./header");
          var _sidebar = require("./sidebar");
          var _loadingPage = require("@bg/jadmin/loading-page");
          var _hooks = require("@jadmin/ui/hooks");
          var _wrapper = require("@bg/auth-api/wrapper.ts");
          var _context = require("./context");
          var _toast = require("pragmate-ui/toast");
          var _beyond_context = require("beyond_context");
          var _items = require("./items");
          var _manager = require("./manager");
          var _wrapper2 = require("@bg/jadmin/wrapper");
          /*bundle*/
          function SidebarHeader({
            children,
            items,
            onClickItems,
            sessionWrapper,
            version,
            showDate
          }) {
            const [show, setShow] = _react.default.useState(true);
            const [state, setState] = _react.default.useState({});
            const wrapper = sessionWrapper ?? _wrapper.session;
            const [user, setUser] = _react.default.useState(wrapper.user);
            const [upd, setUp] = _react.default.useState({});
            const [fetching, setFetching] = _react.default.useState(false);
            const [ready, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            (0, _hooks.useBinder)([wrapper], () => setUser(wrapper.user), ["user-changed", "user.loading", "change"]);
            const [menuItems, setMenuItems] = _react.default.useState(_manager.mainLayoutManager.menuItems);
            const [breadCrumb, setBreadCrumb] = _react.default.useState(_manager.mainLayoutManager.breadCrumb);
            (0, _hooks.useBinder)([_manager.mainLayoutManager], () => {
              setMenuItems(_manager.mainLayoutManager.menuItems);
              setBreadCrumb(_manager.mainLayoutManager.breadCrumb);
              setUp({});
            });
            (0, _hooks.useBinder)([_wrapper2.appWrapper], () => setState({}));
            const handleShow = () => setShow(!show);
            const theme = globalThis?.matchMedia("(prefers-color-scheme: dark)").matches;
            const themeStorage = localStorage.getItem("theme");
            const defaultTheme = theme ? "dark" : "light";
            const userTheme = themeStorage ? themeStorage === "dark" : defaultTheme === "dark";
            const [isDark, setIsDark] = _react.default.useState(userTheme);
            const cls = show ? "main-content" : "main-content main-content__hide";
            if (!ready || !_wrapper2.appWrapper.ready) return _react.default.createElement(_loadingPage.LoadingPage, null);
            items = items ?? menuItems ?? (0, _items.getItems)(texts);
            const value = {
              show,
              user,
              handleShow,
              fetching,
              setFetching,
              texts,
              items,
              onClickItems,
              isDark,
              setIsDark,
              wrapper,
              version,
              showDate,
              breadCrumb
            };
            return _react.default.createElement(_context.SidebarContext.Provider, {
              value: value
            }, _react.default.createElement("div", {
              className: "content-sidebar-header"
            }, _react.default.createElement(_sidebar.Sidebar, null), _react.default.createElement(_header.Header, null)), _react.default.createElement("main", {
              className: cls
            }, children), _react.default.createElement(_toast.Toasts, {
              position: {
                bottom: "2rem",
                right: "2rem"
              }
            }));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./interfaces/index
      **********************************/

      ims.set('./interfaces/index', {
        hash: 3761040972,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************
      INTERNAL MODULE: ./items
      ***********************/

      ims.set('./items', {
        hash: 1722417582,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getItems = void 0;
          const getItems = texts => [{
            name: 'Dashboard',
            icon: 'house',
            path: '/'
          }, {
            name: texts.users,
            icon: 'profile',
            path: `/users`
          }, {
            name: texts.profiles,
            icon: 'idcard',
            path: `/profiles`
          }, {
            name: texts.notifications,
            icon: 'bell',
            path: `/notifications`
          }, {
            name: texts.gallery,
            icon: 'gallery',
            path: '/gallery'
          }];
          exports.getItems = getItems;
        }
      });

      /*************************
      INTERNAL MODULE: ./manager
      *************************/

      ims.set('./manager', {
        hash: 2283987575,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.mainLayoutManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          ;
          class MainLayoutManager extends _model.ReactiveModel {
            #menuItems;
            get menuItems() {
              return this.#menuItems;
            }
            #breadCrumb;
            get breadCrumb() {
              return this.#breadCrumb;
            }
            setMenuItems(arr) {
              this.#menuItems = arr;
              this.triggerEvent();
            }
            setBreadCrumb(value) {
              this.#breadCrumb = value;
              this.triggerEvent();
            }
          }
          /* bundle */
          const mainLayoutManager = exports.mainLayoutManager = new MainLayoutManager();
        }
      });

      /******************************
      INTERNAL MODULE: ./notification
      ******************************/

      ims.set('./notification', {
        hash: 1908883747,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.itemsNotifications = exports.Notification = void 0;
          var _model = require("@beyond-js/reactive/model");
          class Notification extends _model.ReactiveModel {
            #read;
            get read() {
              return this.#read;
            }
            #notification;
            get notification() {
              return this.#notification;
            }
            #image;
            get image() {
              return this.#image;
            }
            #name;
            get name() {
              return this.#name;
            }
            #seen;
            get seen() {
              return this.#seen;
            }
            constructor(data) {
              super();
              this.#name = data.name;
              this.#image = data.image;
              this.#read = data.read;
              this.#notification = data.notification;
              this.#seen = data.seen;
            }
          }
          exports.Notification = Notification;
          const data = [{
            name: "lorem ipsum",
            notification: "marked the task done",
            read: true,
            image: `${globalThis.baseDir}assets/person_1.jpg`,
            seen: new Date('2023-02-10')
          }, {
            name: "lorem ipsum",
            notification: "marked the task done",
            read: false,
            image: `${globalThis.baseDir}assets/person_1.jpg`,
            seen: new Date('2023-02-10')
          }, {
            name: "lorem ipsum",
            notification: "marked the task done",
            read: false,
            image: `${globalThis.baseDir}assets/person_1.jpg`,
            seen: new Date('2023-02-10')
          }, {
            name: "lorem ipsum",
            notification: "marked the task done",
            read: false,
            image: `${globalThis.baseDir}assets/person_1.jpg`,
            seen: new Date('2023-02-10')
          }, {
            name: "lorem ipsum",
            notification: "marked the task done",
            read: false,
            image: `${globalThis.baseDir}assets/person_1.jpg`,
            seen: new Date('2023-02-10')
          }];
          const itemsNotifications = exports.itemsNotifications = data.map(item => new Notification(item));
        }
      });

      /*************************************
      INTERNAL MODULE: ./notifications/index
      *************************************/

      ims.set('./notifications/index', {
        hash: 2538992133,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Notifications = Notifications;
          var React = require("react");
          var _appIcon = require("@bg/jadmin/app-icon");
          var _dropdown = require("@bg/jadmin/dropdown");
          var _items = require("./items");
          var _notification = require("../notification");
          function Notifications() {
            const noReadNotifications = _notification.itemsNotifications.filter(item => !item.read);
            return React.createElement("div", {
              className: "container-bell"
            }, React.createElement(_dropdown.DropdownProvider, null, React.createElement(_dropdown.DropdownToggle, null, React.createElement("div", {
              className: "content-bell"
            }, React.createElement(_appIcon.AppIconButton, {
              icon: "bell",
              className: "circle"
            }, React.createElement("span", {
              className: "badge-bell"
            }, noReadNotifications.length)))), React.createElement(_dropdown.DropDownMenu, null, React.createElement(_items.Items, null))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./notifications/item
      ************************************/

      ims.set('./notifications/item', {
        hash: 3546190736,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var React = require("react");
          var _image = require("pragmate-ui/image");
          function Item({
            item
          }) {
            const {
              image,
              name,
              notification,
              read,
              seen
            } = item;
            const cls = read ? 'unread' : '';
            const now = new Date();
            const differenceInDates = now - seen;
            const differenceInDays = Math.floor(differenceInDates / (1000 * 60 * 60 * 24));
            return React.createElement("li", {
              className: cls
            }, React.createElement("a", {
              href: "#",
              className: "d-flex"
            }, React.createElement("div", {
              className: "img mr-3"
            }, React.createElement(_image.Image, {
              src: image,
              alt: "Image",
              className: name
            })), React.createElement("div", {
              className: "content-info d-flex"
            }, React.createElement("div", {
              className: "text"
            }, React.createElement("strong", null, name), "\u00A0", notification), React.createElement("div", {
              className: "seen"
            }, differenceInDays, " days ago"))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./notifications/items
      *************************************/

      ims.set('./notifications/items', {
        hash: 2324499719,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Items = Items;
          var React = require("react");
          var _notification = require("../notification");
          var _item = require("./item");
          var _perfectScrollbar = require("pragmate-ui/perfect-scrollbar");
          function Items() {
            const output = _notification.itemsNotifications.map((item, index) => React.createElement(_item.Item, {
              key: index,
              item: item
            }));
            return React.createElement("div", {
              className: "dropdown-menu-bell"
            }, React.createElement("div", {
              className: "title-wrap d-flex align-center"
            }, React.createElement("h3", {
              className: "title-notifications"
            }, "Notifications"), React.createElement("a", {
              href: "#",
              className: "all-read"
            }, "Mark all as read")), React.createElement(_perfectScrollbar.ScrollContainer, null, React.createElement("ul", {
              className: "custom-notifications"
            }, output)), React.createElement("p", {
              className: "read-all"
            }, React.createElement("a", {
              href: "#",
              className: "small"
            }, "View All")));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./sidebar/contacts
      **********************************/

      ims.set('./sidebar/contacts', {
        hash: 4224738129,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Contact = Contact;
          var React = require("react");
          var _context = require("../context");
          function Contact() {
            const {
              texts
            } = (0, _context.useSidebarContext)();
            return React.createElement("div", {
              className: "contact-sidebar"
            });
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./sidebar/index
      *******************************/

      ims.set('./sidebar/index', {
        hash: 3424092640,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Sidebar = Sidebar;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _appIcon = require("@bg/jadmin/app-icon");
          var _perfectScrollbar = require("pragmate-ui/perfect-scrollbar");
          var _index = require("./menu/index");
          var _context = require("../context");
          var _routing = require("@beyond-js/kernel/routing");
          var _config = require("@bg/jadmin/config");
          function Sidebar() {
            const {
              show,
              handleShow,
              isDark,
              version
            } = (0, _context.useSidebarContext)();
            const cls = show ? "sidebar-jadmin" : "sidebar-jadmin hide-sidebar";
            const navigate = () => _routing.routing.pushState("/");
            const logo = show ? isDark ? "logo-dark" : "logo" : isDark ? "logo-sidebar-dark" : "logo-sidebar";
            const isSupport = _config.default.params?.application?.isSupport;
            //console.log("config", config, isSupport);
            const textVersion = `${show ? "Version" : ""} ${version}`;
            const icon = show ? "left" : "right";
            return _react.default.createElement("aside", {
              className: cls
            }, _react.default.createElement("div", {
              className: "sidebar-logo"
            }, _react.default.createElement(_image.Image, {
              onClick: navigate,
              src: `${globalThis.baseDir}assets/${logo}.png`,
              alt: "logo",
              className: "logo-header"
            }), version && show && _react.default.createElement("span", null, textVersion)), _react.default.createElement("div", {
              className: "expand-sidebar"
            }, _react.default.createElement(_appIcon.AppIconButton, {
              icon: icon,
              onClick: handleShow
            })), _react.default.createElement(_perfectScrollbar.ScrollContainer, {
              "data-perfect-scrollbar": "",
              "data-suppress-scroll-x": "true",
              className: "content-sidebar"
            }, _react.default.createElement("div", {
              className: "sidebar-elements"
            }, _react.default.createElement("div", null, _react.default.createElement(_index.Menu, null)))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./sidebar/menu/index
      ************************************/

      ims.set('./sidebar/menu/index', {
        hash: 291640429,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Menu = Menu;
          var _react = require("react");
          var _context = require("../../context");
          var _item = require("./item");
          var _routing = require("@beyond-js/kernel/routing");
          var _wrapper = require("@bg/jadmin/wrapper");
          var _hooks = require("@jadmin/ui/hooks");
          function Menu() {
            const {
              items
            } = (0, _context.useSidebarContext)();
            const [selectedItem, setSelectedItem] = _react.default.useState(_routing.routing.uri.pathname);
            (0, _hooks.useBinder)([_wrapper.appWrapper, _routing.routing], () => setSelectedItem(_routing.routing.uri.pathname), ['login', 'change']);
            const output = items.map(item => _react.default.createElement(_item.Item, {
              item: item,
              key: item.path,
              setSelectedItem: setSelectedItem,
              selectedItem: selectedItem
            }));
            return _react.default.createElement("ul", {
              className: "menu-jadmin"
            }, output);
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./sidebar/menu/item
      ***********************************/

      ims.set('./sidebar/menu/item', {
        hash: 417044649,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _appIcon = require("@bg/jadmin/app-icon");
          var _routing = require("@beyond-js/kernel/routing");
          var _context = require("../../context");
          function Item({
            item,
            selectedItem,
            setSelectedItem
          }) {
            const {
              onClickItems
            } = (0, _context.useSidebarContext)();
            const isSubItems = item.hasOwnProperty("subMenu");
            const [show, setShow] = _react.default.useState(true);
            const icon = show ? "angle-up" : "angle-down";
            const handleShow = () => setShow(!show);
            const navigate = event => {
              const {
                dataset
              } = event.currentTarget;
              setSelectedItem(dataset.navigate);
              _routing.routing.pushState(dataset.navigate);
            };
            const onClick = item.isEventClick ? event => onClickItems(event, item) : navigate;
            const isActive = selectedItem === item.path;
            const activeCls = isActive ? 'active' : '';
            const subItems = isSubItems && _react.default.createElement("li", {
              className: `item-with-sub-items ${activeCls}`
            }, _react.default.createElement("div", {
              className: "content-item",
              onClick: handleShow
            }, _react.default.createElement("span", null, item.name), _react.default.createElement(_appIcon.AppIconButton, {
              icon: icon,
              onClick: handleShow
            })), _react.default.createElement("div", {
              className: "content-sub-item"
            }, _react.default.createElement("ul", null, show && item.subMenu.map(menu => {
              const cls = menu?.isBold ? "font-bold" : "font-normal";
              return _react.default.createElement("li", {
                onClick: navigate,
                "data-navigate": menu.path,
                key: menu.id
              }, _react.default.createElement(_appIcon.AppIcon, {
                icon: menu.icon
              }), _react.default.createElement("span", {
                className: cls
              }, menu.name));
            }))));
            return _react.default.createElement(_react.default.Fragment, null, isSubItems ? subItems : _react.default.createElement("li", {
              onClick: onClick,
              "data-navigate": item.path,
              className: activeCls
            }, _react.default.createElement(_appIcon.AppIcon, {
              icon: item.icon
            }), _react.default.createElement("span", null, item.name)));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./sidebar/menu/logout
      *************************************/

      ims.set('./sidebar/menu/logout', {
        hash: 232302716,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Logout = Logout;
          var React = require("react");
          var _appIcon = require("@bg/jadmin/app-icon");
          var _context = require("../../context");
          function Logout() {
            const {
              wrapper
            } = (0, _context.useSidebarContext)();
            async function handleClick() {
              await wrapper.logout();
              //	routing.pushState('/auth/login');
            }
            return React.createElement("li", {
              onClick: handleClick
            }, React.createElement(_appIcon.AppIcon, {
              icon: "off"
            }), React.createElement("span", null, "Cerrar de sesi\u00F3n"));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./auth-menu/user-menu",
        "from": "UserMenu",
        "name": "UserMenu"
      }, {
        "im": "./index",
        "from": "SidebarHeader",
        "name": "SidebarHeader"
      }, {
        "im": "./manager",
        "from": "mainLayoutManager",
        "name": "mainLayoutManager"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'UserMenu') && _export("UserMenu", UserMenu = require ? require('./auth-menu/user-menu').UserMenu : value);
        (require || prop === 'SidebarHeader') && _export("SidebarHeader", SidebarHeader = require ? require('./index').SidebarHeader : value);
        (require || prop === 'mainLayoutManager') && _export("mainLayoutManager", mainLayoutManager = require ? require('./manager').mainLayoutManager : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ltYWdlIiwiX2Ryb3Bkb3duIiwiX3VzZXJNZW51IiwiX2hvb2tzIiwiX2NvbmZpZyIsIl9jb250ZXh0IiwiQXV0aE1lbnUiLCJyZWYiLCJkZWZhdWx0IiwidXNlUmVmIiwidGV4dHMiLCJ3cmFwcGVyIiwidXNlU2lkZWJhckNvbnRleHQiLCJ1cGRhdGUiLCJzZXRVcGRhdGUiLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwiaXNDbG9zZSIsInNldElzQ2xvc2UiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJ1c2VCaW5kZXIiLCJvblRvZ2dsZSIsInRvZ2dsZSIsImNscyIsInByb2ZpbGVJbWFnZSIsImltZyIsInBhcmFtcyIsIm1lZGlhU2VydmVyIiwidG9rZW4iLCJnbG9iYWxUaGlzIiwiYmFzZURpciIsInVzZXJOYW1lIiwibmFtZXMiLCJsYXN0TmFtZXMiLCJjcmVhdGVFbGVtZW50IiwiRHJvcGRvd25Qcm92aWRlciIsImlzVG9nZ2xlIiwiRHJvcGRvd25Ub2dnbGUiLCJjbGFzc05hbWUiLCJJbWFnZSIsImFsdCIsInNyYyIsIkRyb3BEb3duTWVudSIsIlVzZXJNZW51IiwicGF0aHNIZWFkZXIiLCJleHBvcnRzIiwiX2FwcEljb24iLCJfcm91dGluZyIsIl90b2FzdCIsIl9wYXRocyIsImZvcndhcmRSZWYiLCJwcm9wcyIsIm5hdmlnYXRlIiwiZXZlbnQiLCJkYXRhc2V0IiwiY3VycmVudFRhcmdldCIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJoYW5kbGVDbGljayIsInJlc3BvbnNlIiwibG9nb3V0Iiwic3RhdHVzIiwiRXJyb3IiLCJlcnJvciIsIm1lc3NhZ2UiLCJ0b2FzdCIsImlzQ2hhbmdlUGFzc3dvcmQiLCJpc1Byb2ZpbGUiLCJwYXRoc0hlYWRlck1lbnUiLCJhcHBsaWNhdGlvbiIsIkZyYWdtZW50IiwiZW1haWwiLCJEcm9wZG93bkxpbmsiLCJ0YWciLCJwcm9maWxlIiwib25DbGljayIsIkFwcEljb24iLCJpY29uIiwicGFzc3dvcmQiLCJjaGFuZ2VQYXNzd29yZCIsIlNpZGViYXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfZm9ybSIsIl93cmFwcGVyIiwiRGFyS0xpZ2h0TW9kZSIsImlzRGFyayIsInNldElzRGFyayIsInRoZW1lU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpc0RhcmtNb2RlIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYm9keSIsInRoZW1lIiwic2V0QXR0cmlidXRlIiwic2V0SXRlbSIsImNoZWNrZWQiLCJhcHBXcmFwcGVyIiwidHJpZ2dlckV2ZW50IiwidXNlRWZmZWN0IiwidGV4dCIsImxpZ2h0IiwiZGFyayIsIlN3aXRjaCIsIm9uQ2hhbmdlIiwiX2F1dGhNZW51IiwiX2ljb25zIiwiX2JyZWFkY3J1bWIiLCJIZWFkZXIiLCJzaG93Iiwic2hvd0RhdGUiLCJicmVhZENydW1iIiwiY3VycmVudFRpbWUiLCJzZXRDdXJyZW5UaW1lIiwiRGF0ZSIsImlzTm90aWZpY2F0aW9ucyIsImRhdGUiLCJvcHRpb25zIiwibW9udGgiLCJkYXkiLCJ3ZWVrZGF5IiwiaG91ciIsImdldEhvdXJzIiwibmFtZU1vbnRoIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiaXNEYXkiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZm9ybWF0dGVkVGltZSIsInRvTG9jYWxlVGltZVN0cmluZyIsIm1pbnV0ZSIsImhvdXIxMiIsImlzQnJlYWRDcnVtYiIsInRpdGxlIiwiQXJyYXkiLCJpc0FycmF5IiwiaXRlbXMiLCJsZW5ndGgiLCJCcmVhZENydW1iIiwiSWNvbiIsIl9oZWFkZXIiLCJfc2lkZWJhciIsIl9sb2FkaW5nUGFnZSIsIl9iZXlvbmRfY29udGV4dCIsIl9pdGVtcyIsIl9tYW5hZ2VyIiwiX3dyYXBwZXIyIiwiU2lkZWJhckhlYWRlciIsImNoaWxkcmVuIiwib25DbGlja0l0ZW1zIiwic2Vzc2lvbldyYXBwZXIiLCJ2ZXJzaW9uIiwic2V0U2hvdyIsInN0YXRlIiwic2V0U3RhdGUiLCJzZXNzaW9uIiwidXBkIiwic2V0VXAiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwicmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsIm1lbnVJdGVtcyIsInNldE1lbnVJdGVtcyIsIm1haW5MYXlvdXRNYW5hZ2VyIiwic2V0QnJlYWRDcnVtYiIsImhhbmRsZVNob3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImRlZmF1bHRUaGVtZSIsInVzZXJUaGVtZSIsIkxvYWRpbmdQYWdlIiwiZ2V0SXRlbXMiLCJ2YWx1ZSIsIlByb3ZpZGVyIiwiU2lkZWJhciIsIlRvYXN0cyIsInBvc2l0aW9uIiwiYm90dG9tIiwicmlnaHQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIm5hbWUiLCJwYXRoIiwidXNlcnMiLCJwcm9maWxlcyIsIm5vdGlmaWNhdGlvbnMiLCJnYWxsZXJ5IiwiX21vZGVsIiwiTWFpbkxheW91dE1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwiYXJyIiwiTm90aWZpY2F0aW9uIiwicmVhZCIsIm5vdGlmaWNhdGlvbiIsImltYWdlIiwic2VlbiIsImNvbnN0cnVjdG9yIiwiZGF0YSIsIml0ZW1zTm90aWZpY2F0aW9ucyIsIm1hcCIsIml0ZW0iLCJSZWFjdCIsIl9ub3RpZmljYXRpb24iLCJOb3RpZmljYXRpb25zIiwibm9SZWFkTm90aWZpY2F0aW9ucyIsImZpbHRlciIsIkFwcEljb25CdXR0b24iLCJJdGVtcyIsIkl0ZW0iLCJub3ciLCJkaWZmZXJlbmNlSW5EYXRlcyIsImRpZmZlcmVuY2VJbkRheXMiLCJNYXRoIiwiZmxvb3IiLCJocmVmIiwiX2l0ZW0iLCJfcGVyZmVjdFNjcm9sbGJhciIsIm91dHB1dCIsImluZGV4Iiwia2V5IiwiU2Nyb2xsQ29udGFpbmVyIiwiQ29udGFjdCIsIl9pbmRleCIsImxvZ28iLCJpc1N1cHBvcnQiLCJ0ZXh0VmVyc2lvbiIsIk1lbnUiLCJzZWxlY3RlZEl0ZW0iLCJzZXRTZWxlY3RlZEl0ZW0iLCJ1cmkiLCJwYXRobmFtZSIsImlzU3ViSXRlbXMiLCJoYXNPd25Qcm9wZXJ0eSIsImlzRXZlbnRDbGljayIsImlzQWN0aXZlIiwiYWN0aXZlQ2xzIiwic3ViSXRlbXMiLCJzdWJNZW51IiwibWVudSIsImlzQm9sZCIsImlkIiwiTG9nb3V0Il0sInNvdXJjZXMiOlsiL2NvZGUvdHMvYXV0aC1tZW51L2luZGV4LnRzeCIsIi9jb2RlL3RzL2F1dGgtbWVudS9wYXRocy50cyIsIi9jb2RlL3RzL2F1dGgtbWVudS91c2VyLW1lbnUudHN4IiwiL2NvZGUvdHMvY29udGV4dC50c3giLCIvY29kZS90cy9kYXJrLWxpZ2h0LW1vZGUudHN4IiwiL2NvZGUvdHMvaGVhZGVyLnRzeCIsIi9jb2RlL3RzL2luZGV4LnRzeCIsIi9pbmRleC50cyIsIi9jb2RlL3RzL2l0ZW1zLnRzIiwiL2NvZGUvdHMvbWFuYWdlci50cyIsIi9jb2RlL3RzL25vdGlmaWNhdGlvbi50cyIsIi9jb2RlL3RzL25vdGlmaWNhdGlvbnMvaW5kZXgudHN4IiwiL2NvZGUvdHMvbm90aWZpY2F0aW9ucy9pdGVtLnRzeCIsIi9jb2RlL3RzL25vdGlmaWNhdGlvbnMvaXRlbXMudHN4IiwiL2NvZGUvdHMvc2lkZWJhci9jb250YWN0cy50c3giLCIvY29kZS90cy9zaWRlYmFyL2luZGV4LnRzeCIsIi9jb2RlL3RzL3NpZGViYXIvbWVudS9pbmRleC50c3giLCIvY29kZS90cy9zaWRlYmFyL21lbnUvaXRlbS50c3giLCIvY29kZS90cy9zaWRlYmFyL21lbnUvbG9nb3V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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SUFBSTtnQkFBRXFDLEdBQUcsRUFBRW1CLElBQUksQ0FBQ0U7Y0FBRSxHQUM1RDlQLE1BQUEsQ0FBQVUsT0FBQSxDQUFBNkIsYUFBQSxDQUFDWSxRQUFBLENBQUE4QixPQUFPO2dCQUFDQyxJQUFJLEVBQUUwSyxJQUFJLENBQUMxSztjQUFJLEVBQUksRUFDNUJsRixNQUFBLENBQUFVLE9BQUEsQ0FBQTZCLGFBQUE7Z0JBQU1JLFNBQVMsRUFBRWY7Y0FBRyxHQUFHZ08sSUFBSSxDQUFDekQsSUFBSSxDQUFRLENBQ3BDO1lBRVAsQ0FBQyxDQUFDLENBQ0MsQ0FDQSxDQUVQO1lBRUQsT0FDQ25NLE1BQUEsQ0FBQVUsT0FBQSxDQUFBNkIsYUFBQSxDQUFBdkMsTUFBQSxDQUFBVSxPQUFBLENBQUFpRSxRQUFBLFFBQ0UwSyxVQUFVLEdBQ1ZLLFFBQVEsR0FFUjFQLE1BQUEsQ0FBQVUsT0FBQSxDQUFBNkIsYUFBQTtjQUFJeUMsT0FBTyxFQUFFQSxPQUFPO2NBQUEsaUJBQWlCc0ksSUFBSSxDQUFDbEIsSUFBSTtjQUFFekosU0FBUyxFQUFFOE07WUFBUyxHQUNuRXpQLE1BQUEsQ0FBQVUsT0FBQSxDQUFBNkIsYUFBQSxDQUFDWSxRQUFBLENBQUE4QixPQUFPO2NBQUNDLElBQUksRUFBRW9JLElBQUksQ0FBQ3BJO1lBQUksRUFBSSxFQUM1QmxGLE1BQUEsQ0FBQVUsT0FBQSxDQUFBNkIsYUFBQSxlQUFPK0ssSUFBSSxDQUFDbkIsSUFBSSxDQUFRLENBRXpCLENBQ0M7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1REEsSUFBQW9CLEtBQUEsR0FBQXROLE9BQUE7VUFDQSxJQUFBa0QsUUFBQSxHQUFBbEQsT0FBQTtVQUNBLElBQUFNLFFBQUEsR0FBQU4sT0FBQTtVQUVNLFNBQVU4UCxNQUFNQSxDQUFBO1lBQ3JCLE1BQU07Y0FBRWxQO1lBQU8sQ0FBRSxHQUFHLElBQUFOLFFBQUEsQ0FBQU8saUJBQWlCLEdBQUU7WUFDdkMsZUFBZWlELFdBQVdBLENBQUE7Y0FDekIsTUFBTWxELE9BQU8sQ0FBQ29ELE1BQU0sRUFBRTtjQUN0QjtZQUNEO1lBRUEsT0FDQ3NKLEtBQUEsQ0FBQWhMLGFBQUE7Y0FBSXlDLE9BQU8sRUFBRWpCO1lBQVcsR0FDdkJ3SixLQUFBLENBQUFoTCxhQUFBLENBQUNZLFFBQUEsQ0FBQThCLE9BQU87Y0FBQ0MsSUFBSSxFQUFDO1lBQUssRUFBRyxFQUN0QnFJLEtBQUEsQ0FBQWhMLGFBQUEsdUNBQTZCLENBQ3pCO1VBRVAiLCJpZ25vcmVMaXN0IjpbXX0=