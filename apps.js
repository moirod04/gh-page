System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@bg/jadmin@0.0.1/sidebar-header.code", "@beyond-js/reactive@1.1.14/model", "sgs-workflow@1.0.0/entities", "react@18.2.0", "pragmate-ui@0.1.2/components", "framer-motion@10.18.0", "sgs-workflow@1.0.0/task-instances-monitor"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets016Render) {
      dependency_0 = _beyondJsWidgets016Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets104Page) {
      dependency_3 = _beyondJsReact18Widgets104Page;
    }, function (_bgJadmin001SidebarHeaderCode) {
      dependency_4 = _bgJadmin001SidebarHeaderCode;
    }, function (_beyondJsReactive1114Model) {
      dependency_5 = _beyondJsReactive1114Model;
    }, function (_sgsWorkflow100Entities) {
      dependency_6 = _sgsWorkflow100Entities;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi012Components) {
      dependency_8 = _pragmateUi012Components;
    }, function (_framerMotion2) {
      dependency_9 = _framerMotion2;
    }, function (_sgsWorkflow100TaskInstancesMonitor) {
      dependency_10 = _sgsWorkflow100TaskInstancesMonitor;
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
          "vspecifier": "sgs-workflow@1.0.0/apps"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@bg/jadmin/sidebar-header.code', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['sgs-workflow/entities', dependency_6], ['react', dependency_7], ['pragmate-ui/components', dependency_8], ['framer-motion', dependency_9], ['sgs-workflow/task-instances-monitor', dependency_10]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "apps-page",
        "vspecifier": "sgs-workflow@1.0.0/apps",
        "is": "page",
        "route": "/apps",
        "layout": "main-app-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('sgs-workflow@1.0.0/apps');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3706397841,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _view = require("./view");
          var _manager = require("./manager");
          var _sidebarHeader = require("@bg/jadmin/sidebar-header.code");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _manager.Manager();
              return this.#store;
            }
            get Widget() {
              return _view.Page;
            }
            /**
             * this method is executed when the widget is showd
             */
            show() {
              if (!this.#store) return;
              const breadCrumbItems = [['/apps', 'Aplicaciones']];
              _sidebarHeader.mainLayoutManager.setBreadCrumb({
                title: "Inicio",
                items: breadCrumbItems
              });
            }
            /**
             * this method is executed when the widget is hidden
             */
            hide() {
              //	mainLayoutManager.setBreadCrumb({ title: "", items: [] })
            }
          }
          exports.Controller = Controller;
        }
      });

      /*******************************
      INTERNAL MODULE: ./manager/index
      *******************************/

      ims.set('./manager/index', {
        hash: 3150824355,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Manager = void 0;
          var _model = require("@beyond-js/reactive/model");
          class Manager extends _model.ReactiveModel {}
          exports.Manager = Manager;
        }
      });

      /*************************************
      INTERNAL MODULE: ./view/dropdown/index
      *************************************/

      ims.set('./view/dropdown/index', {
        hash: 4013010513,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Dropdown = Dropdown;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          var _items = require("./items");
          var _useOutsideHover = require("./use-outside-hover");
          function Dropdown({
            item
          }) {
            const [isOpen, setIsOpen] = _react.default.useState(false);
            const handleMouseEnter = () => {
              console.log("555555555");
              setIsOpen(true);
            };
            const ref = (0, _useOutsideHover.useOutsideHover)(handleMouseEnter);
            const handleMouseLeave = () => setIsOpen(false);
            return _react.default.createElement(_framerMotion.AnimatePresence, null, _react.default.createElement("div", {
              className: "dropdown-container",
              onMouseLeave: handleMouseLeave
            }, _react.default.createElement("div", {
              ref: ref,
              onMouseEnter: handleMouseEnter,
              onMouseDown: handleMouseEnter,
              onMouseMove: handleMouseEnter,
              className: "dropdown-button"
            }, item.label), _react.default.createElement(_items.Items, {
              isOpen: isOpen,
              item: item
            })));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./view/dropdown/item
      ************************************/

      ims.set('./view/dropdown/item', {
        hash: 2214330653,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          function Item({
            item
          }) {
            return _react.default.createElement(_framerMotion.motion.div, {
              initial: {
                opacity: 0,
                y: 16
              },
              animate: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.3,
                  ease: [0.4, 0.98, 0.92, 0.87]
                }
              },
              exit: {
                opacity: 0,
                y: 16,
                transition: {
                  delay: 0.3
                }
              },
              className: 'dropdown-item'
            }, _react.default.createElement("span", null, item.label));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./view/dropdown/items
      *************************************/

      ims.set('./view/dropdown/items', {
        hash: 3121517185,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Items = Items;
          var _react = require("react");
          var _item = require("./item");
          function Items({
            isOpen,
            item
          }) {
            if (!isOpen) return null;
            const output = item.items.map((option, index) => {
              return _react.default.createElement(_item.Item, {
                key: index,
                item: option
              });
            });
            return _react.default.createElement("div", {
              className: "dropdown-items"
            }, output);
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./view/dropdown/use-outside-hover
      *************************************************/

      ims.set('./view/dropdown/use-outside-hover', {
        hash: 3191692977,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useOutsideHover = useOutsideHover;
          var _react = require("react");
          function useOutsideHover(callback = () => {}) {
            const ref = (0, _react.useRef)(null);
            (0, _react.useEffect)(() => {
              const handleMouseLeave = event => {
                const {
                  current
                } = ref;
                const isSameNode = current === event.target || current === event.relatedTarget;
                const isAChildren = current?.contains(event.relatedTarget);
                console.log("🚀 ~ handleMouseLeave ~ isAChildren:", isAChildren);
                console.log("🚀 ~ handleMouseLeave ~ isSameNode:", isSameNode);
                if (isSameNode || isAChildren) callback();
              };
              // Listener para detectar cuando el mouse abandona el componente
              ref.current?.addEventListener("onmouseenter", handleMouseLeave);
              return () => ref.current?.removeEventListener("onmouseenter", handleMouseLeave);
            }, []);
            return ref;
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./view/index
      ****************************/

      ims.set('./view/index', {
        hash: 1912841633,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Page = Page;
          var _react = require("react");
          var _menuData = require("./menu-data");
          var _dropdown = require("./dropdown");
          function Page() {
            const output = _menuData.menuData.map((menu, index) => {
              return _react.default.createElement(_dropdown.Dropdown, {
                key: index,
                item: menu
              });
            });
            return _react.default.createElement("div", {
              className: 'page__container page-apps'
            }, _react.default.createElement("div", {
              className: 'page__content_buttons'
            }, output));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./view/menu-data
      ********************************/

      ims.set('./view/menu-data', {
        hash: 2432115753,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.menuData = void 0;
          const menuData = exports.menuData = [{
            label: "Seguimiento de la Producción",
            items: [{
              label: "Crear trabajo y asignar talleres",
              value: 1
            }, {
              label: "Validar producción",
              value: 2
            }, {
              label: "Actualizar fechas",
              value: 3
            }, {
              label: "Validar finalización de ingresos",
              value: 4
            }]
          }, {
            label: "Traslado de Papel",
            items: [{
              label: "Registrar traslado",
              value: 5
            }, {
              label: "Preparar papel",
              value: 6
            }, {
              label: "Despachar papel",
              value: 7
            }]
          }, {
            label: "Reportes",
            items: [{
              label: "Registrar comprobante",
              value: 8
            }, {
              label: "Compras pendientes de fondo fijo",
              value: 9
            }]
          }, {
            label: "Registración",
            items: [{
              label: "Tratar excepción",
              value: 10
            }, {
              label: "Presupuesto financiero",
              value: 11
            }, {
              label: "Autorizar pago",
              value: 12
            }, {
              label: "Registrar orden de pago",
              value: 13
            }, {
              label: "Aviso a proveedores",
              value: 14
            }]
          }, {
            label: "ABMS y Procesos",
            items: [{
              label: "Cerrar saldo",
              value: 15
            }, {
              label: "Cerrar saldo masivo",
              value: 16
            }, {
              label: "Administración de ítems",
              value: 17
            }, {
              label: "Administración de promotores y colaboradores",
              value: 18
            }, {
              label: "Administración de datos del pagador",
              value: 19
            }, {
              label: "Administración de costos de proveedores y papeles",
              value: 20
            }, {
              label: "Gestión de usuarios",
              value: 21
            }, {
              label: "Gestión proceso de liquidaciones",
              value: 22
            }, {
              label: "Gestión proceso de compras",
              value: 23
            }, {
              label: "Gestión proceso de alta de material",
              value: 24
            }, {
              label: "Gestión proceso de seguimiento",
              value: 25
            }, {
              label: "Gestión proceso de anticipo",
              value: 26
            }, {
              label: "Gestión proceso de PRG",
              value: 27
            }, {
              label: "Gestión proceso de rendición",
              value: 28
            }]
          }, {
            label: "Otras Aplicaciones",
            items: [{
              label: "Calculadora de costos gráficos",
              value: 29
            }]
          }];
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlldyIsIl9tYW5hZ2VyIiwiX3NpZGViYXJIZWFkZXIiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJNYW5hZ2VyIiwiV2lkZ2V0IiwiUGFnZSIsInNob3ciLCJicmVhZENydW1iSXRlbXMiLCJtYWluTGF5b3V0TWFuYWdlciIsInNldEJyZWFkQ3J1bWIiLCJ0aXRsZSIsIml0ZW1zIiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJSZWFjdGl2ZU1vZGVsIiwiX3JlYWN0IiwiX2ZyYW1lck1vdGlvbiIsIl9pdGVtcyIsIl91c2VPdXRzaWRlSG92ZXIiLCJEcm9wZG93biIsIml0ZW0iLCJpc09wZW4iLCJzZXRJc09wZW4iLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJoYW5kbGVNb3VzZUVudGVyIiwiY29uc29sZSIsImxvZyIsInJlZiIsInVzZU91dHNpZGVIb3ZlciIsImhhbmRsZU1vdXNlTGVhdmUiLCJjcmVhdGVFbGVtZW50IiwiQW5pbWF0ZVByZXNlbmNlIiwiY2xhc3NOYW1lIiwib25Nb3VzZUxlYXZlIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZURvd24iLCJvbk1vdXNlTW92ZSIsImxhYmVsIiwiSXRlbXMiLCJJdGVtIiwibW90aW9uIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJleGl0IiwiZGVsYXkiLCJfaXRlbSIsIm91dHB1dCIsIm1hcCIsIm9wdGlvbiIsImluZGV4Iiwia2V5IiwiY2FsbGJhY2siLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJldmVudCIsImN1cnJlbnQiLCJpc1NhbWVOb2RlIiwidGFyZ2V0IiwicmVsYXRlZFRhcmdldCIsImlzQUNoaWxkcmVuIiwiY29udGFpbnMiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9tZW51RGF0YSIsIl9kcm9wZG93biIsIm1lbnVEYXRhIiwibWVudSIsInZhbHVlIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvbWFuYWdlci9pbmRleC50cyIsIi90cy92aWV3L2Ryb3Bkb3duL2luZGV4LnRzeCIsIi90cy92aWV3L2Ryb3Bkb3duL2l0ZW0udHN4IiwiL3RzL3ZpZXcvZHJvcGRvd24vaXRlbXMudHN4IiwiL3RzL3ZpZXcvZHJvcGRvd24vdXNlLW91dHNpZGUtaG92ZXIudHMiLCIvdHMvdmlldy9pbmRleC50c3giLCIvdHMvdmlldy9tZW51LWRhdGEudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsY0FBQSxHQUFBSCxPQUFBO1VBQ087VUFBVSxNQUNWSSxVQUFXLFNBQVFMLEtBQUEsQ0FBQU0seUJBQXlCO1lBQ2xELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosUUFBQSxDQUFBTSxPQUFPLEVBQUU7Y0FDM0IsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPUixLQUFBLENBQUFTLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQUwsS0FBTSxFQUFFO2NBQ2xCLE1BQU1NLGVBQWUsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO2NBQ25EVCxjQUFBLENBQUFVLGlCQUFpQixDQUFDQyxhQUFhLENBQUM7Z0JBQUVDLEtBQUssRUFBRSxRQUFRO2dCQUFFQyxLQUFLLEVBQUVKO2NBQWUsQ0FBRSxDQUFDO1lBQzdFO1lBRUE7OztZQUdBSyxJQUFJQSxDQUFBO2NBQ0g7WUFBQTs7VUFFREMsT0FBQSxDQUFBZCxVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUJELElBQUFlLE1BQUEsR0FBQW5CLE9BQUE7VUFHTSxNQUFPUSxPQUFRLFNBQVFXLE1BQUEsQ0FBQUMsYUFBc0I7VUFHbERGLE9BQUEsQ0FBQVYsT0FBQSxHQUFBQSxPQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ05ELElBQUFhLE1BQUEsR0FBQXJCLE9BQUE7VUFFQSxJQUFBc0IsYUFBQSxHQUFBdEIsT0FBQTtVQUNBLElBQUF1QixNQUFBLEdBQUF2QixPQUFBO1VBQ0EsSUFBQXdCLGdCQUFBLEdBQUF4QixPQUFBO1VBRU0sU0FBVXlCLFFBQVFBLENBQUM7WUFBRUM7VUFBSSxDQUFFO1lBQzdCLE1BQU0sQ0FBQ0MsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBR1AsTUFBQSxDQUFBUSxPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDakQsTUFBTUMsZ0JBQWdCLEdBQUdBLENBQUEsS0FBSztjQUMxQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO2NBQ3hCTCxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQ25CLENBQUM7WUFDRCxNQUFNTSxHQUFHLEdBQUcsSUFBQVYsZ0JBQUEsQ0FBQVcsZUFBZSxFQUFpQkosZ0JBQWdCLENBQUM7WUFHN0QsTUFBTUssZ0JBQWdCLEdBQUdBLENBQUEsS0FBTVIsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUUvQyxPQUNJUCxNQUFBLENBQUFRLE9BQUEsQ0FBQVEsYUFBQSxDQUFDZixhQUFBLENBQUFnQixlQUFlLFFBQ1pqQixNQUFBLENBQUFRLE9BQUEsQ0FBQVEsYUFBQTtjQUNJRSxTQUFTLEVBQUMsb0JBQW9CO2NBRTlCQyxZQUFZLEVBQUVKO1lBQWdCLEdBRTlCZixNQUFBLENBQUFRLE9BQUEsQ0FBQVEsYUFBQTtjQUFLSCxHQUFHLEVBQUVBLEdBQUc7Y0FBRU8sWUFBWSxFQUFFVixnQkFBZ0I7Y0FBRVcsV0FBVyxFQUFFWCxnQkFBZ0I7Y0FBRVksV0FBVyxFQUFFWixnQkFBZ0I7Y0FDdkdRLFNBQVMsRUFBQztZQUFpQixHQUMxQmIsSUFBSSxDQUFDa0IsS0FBSyxDQUNULEVBQ052QixNQUFBLENBQUFRLE9BQUEsQ0FBQVEsYUFBQSxDQUFDZCxNQUFBLENBQUFzQixLQUFLO2NBQUNsQixNQUFNLEVBQUVBLE1BQU07Y0FBRUQsSUFBSSxFQUFFQTtZQUFJLEVBQUksQ0FDbkMsQ0FDUTtVQUUxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQ0EsSUFBQUwsTUFBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFzQixhQUFBLEdBQUF0QixPQUFBO1VBRU0sU0FBVThDLElBQUlBLENBQUM7WUFBRXBCO1VBQUksQ0FBOEM7WUFFckUsT0FFSUwsTUFBQSxDQUFBUSxPQUFBLENBQUFRLGFBQUEsQ0FBQ2YsYUFBQSxDQUFBeUIsTUFBTSxDQUFDQyxHQUFHO2NBQ1BDLE9BQU8sRUFBRTtnQkFDTEMsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZDLENBQUMsRUFBRTtlQUNOO2NBQ0RDLE9BQU8sRUFBRTtnQkFDTEYsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZDLENBQUMsRUFBRSxDQUFDO2dCQUNKRSxVQUFVLEVBQUU7a0JBQ1JDLFFBQVEsRUFBRSxHQUFHO2tCQUNiQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJOztlQUVuQztjQUNEQyxJQUFJLEVBQUU7Z0JBQ0ZOLE9BQU8sRUFBRSxDQUFDO2dCQUNWQyxDQUFDLEVBQUUsRUFBRTtnQkFDTEUsVUFBVSxFQUFFO2tCQUNSSSxLQUFLLEVBQUU7O2VBRWQ7Y0FDRGxCLFNBQVMsRUFBQztZQUFlLEdBRXpCbEIsTUFBQSxDQUFBUSxPQUFBLENBQUFRLGFBQUEsZUFBT1gsSUFBSSxDQUFDa0IsS0FBSyxDQUFRLENBRWhCO1VBSXJCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25DQSxJQUFBdkIsTUFBQSxHQUFBckIsT0FBQTtVQUNBLElBQUEwRCxLQUFBLEdBQUExRCxPQUFBO1VBRU0sU0FBVTZDLEtBQUtBLENBQUM7WUFBRWxCLE1BQU07WUFBRUQ7VUFBSSxDQUFFO1lBQ2xDLElBQUksQ0FBQ0MsTUFBTSxFQUFFLE9BQU8sSUFBSTtZQUV4QixNQUFNZ0MsTUFBTSxHQUFHakMsSUFBSSxDQUFDVixLQUFLLENBQUM0QyxHQUFHLENBQUMsQ0FBQ0MsTUFBTSxFQUFFQyxLQUFLLEtBQUk7Y0FDNUMsT0FBT3pDLE1BQUEsQ0FBQVEsT0FBQSxDQUFBUSxhQUFBLENBQUNxQixLQUFBLENBQUFaLElBQUk7Z0JBQUNpQixHQUFHLEVBQUVELEtBQUs7Z0JBQUVwQyxJQUFJLEVBQUVtQztjQUFNLEVBQUk7WUFDN0MsQ0FBQyxDQUFDO1lBRUYsT0FBT3hDLE1BQUEsQ0FBQVEsT0FBQSxDQUFBUSxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUFFb0IsTUFBTSxDQUFPO1VBQ3pEOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1hBLElBQUF0QyxNQUFBLEdBQUFyQixPQUFBO1VBRU0sU0FBVW1DLGVBQWVBLENBQUk2QixRQUFRLEdBQUdBLENBQUEsS0FBSyxDQUFHLENBQUM7WUFDbkQsTUFBTTlCLEdBQUcsR0FBd0IsSUFBQWIsTUFBQSxDQUFBNEMsTUFBTSxFQUFDLElBQUksQ0FBQztZQUU3QyxJQUFBNUMsTUFBQSxDQUFBNkMsU0FBUyxFQUFDLE1BQW1CO2NBQ3pCLE1BQU05QixnQkFBZ0IsR0FBSStCLEtBQWlCLElBQVU7Z0JBQ2pELE1BQU07a0JBQUVDO2dCQUFPLENBQUUsR0FBUWxDLEdBQUc7Z0JBRTVCLE1BQU1tQyxVQUFVLEdBQ1pELE9BQU8sS0FBS0QsS0FBSyxDQUFDRyxNQUFNLElBQUlGLE9BQU8sS0FBS0QsS0FBSyxDQUFDSSxhQUFhO2dCQUMvRCxNQUFNQyxXQUFXLEdBQUdKLE9BQU8sRUFBRUssUUFBUSxDQUFDTixLQUFLLENBQUNJLGFBQWEsQ0FBQztnQkFDMUR2QyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxzQ0FBc0MsRUFBRXVDLFdBQVcsQ0FBQztnQkFDaEV4QyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQ0FBcUMsRUFBRW9DLFVBQVUsQ0FBQztnQkFDOUQsSUFBSUEsVUFBVSxJQUFJRyxXQUFXLEVBQUVSLFFBQVEsRUFBRTtjQUM3QyxDQUFDO2NBRUQ7Y0FDQTlCLEdBQUcsQ0FBQ2tDLE9BQU8sRUFBRU0sZ0JBQWdCLENBQUMsY0FBYyxFQUFFdEMsZ0JBQWdCLENBQUM7Y0FDL0QsT0FBTyxNQUFZRixHQUFHLENBQUNrQyxPQUFPLEVBQUVPLG1CQUFtQixDQUFDLGNBQWMsRUFBRXZDLGdCQUFnQixDQUFDO1lBQ3pGLENBQUMsRUFBRSxFQUFFLENBQUM7WUFHTixPQUFPRixHQUFHO1VBQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJBLElBQUFiLE1BQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBNEUsU0FBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUE2RSxTQUFBLEdBQUE3RSxPQUFBO1VBRU0sU0FBVVUsSUFBSUEsQ0FBQTtZQUNoQixNQUFNaUQsTUFBTSxHQUFHaUIsU0FBQSxDQUFBRSxRQUFRLENBQUNsQixHQUFHLENBQUMsQ0FBQ21CLElBQUksRUFBRWpCLEtBQUssS0FBSTtjQUN4QyxPQUFPekMsTUFBQSxDQUFBUSxPQUFBLENBQUFRLGFBQUEsQ0FBQ3dDLFNBQUEsQ0FBQXBELFFBQVE7Z0JBQUNzQyxHQUFHLEVBQUVELEtBQUs7Z0JBQUVwQyxJQUFJLEVBQUVxRDtjQUFJLEVBQUk7WUFDL0MsQ0FBQyxDQUFDO1lBQ0YsT0FDSTFELE1BQUEsQ0FBQVEsT0FBQSxDQUFBUSxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUEyQixHQUN0Q2xCLE1BQUEsQ0FBQVEsT0FBQSxDQUFBUSxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUF1QixHQUNqQ29CLE1BQU0sQ0FFTCxDQUNKO1VBRWQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJPLE1BQU1tQixRQUFRLEdBQUE1RCxPQUFBLENBQUE0RCxRQUFBLEdBQUcsQ0FDcEI7WUFDSWxDLEtBQUssRUFBRSw4QkFBOEI7WUFDckM1QixLQUFLLEVBQUUsQ0FDSDtjQUFFNEIsS0FBSyxFQUFFLGtDQUFrQztjQUFFb0MsS0FBSyxFQUFFO1lBQUMsQ0FBRSxFQUN2RDtjQUFFcEMsS0FBSyxFQUFFLG9CQUFvQjtjQUFFb0MsS0FBSyxFQUFFO1lBQUMsQ0FBRSxFQUN6QztjQUFFcEMsS0FBSyxFQUFFLG1CQUFtQjtjQUFFb0MsS0FBSyxFQUFFO1lBQUMsQ0FBRSxFQUN4QztjQUFFcEMsS0FBSyxFQUFFLGtDQUFrQztjQUFFb0MsS0FBSyxFQUFFO1lBQUMsQ0FBRTtXQUU5RCxFQUNEO1lBQ0lwQyxLQUFLLEVBQUUsbUJBQW1CO1lBQzFCNUIsS0FBSyxFQUFFLENBQ0g7Y0FBRTRCLEtBQUssRUFBRSxvQkFBb0I7Y0FBRW9DLEtBQUssRUFBRTtZQUFDLENBQUUsRUFDekM7Y0FBRXBDLEtBQUssRUFBRSxnQkFBZ0I7Y0FBRW9DLEtBQUssRUFBRTtZQUFDLENBQUUsRUFDckM7Y0FBRXBDLEtBQUssRUFBRSxpQkFBaUI7Y0FBRW9DLEtBQUssRUFBRTtZQUFDLENBQUU7V0FFN0MsRUFDRDtZQUNJcEMsS0FBSyxFQUFFLFVBQVU7WUFDakI1QixLQUFLLEVBQUUsQ0FDSDtjQUFFNEIsS0FBSyxFQUFFLHVCQUF1QjtjQUFFb0MsS0FBSyxFQUFFO1lBQUMsQ0FBRSxFQUM1QztjQUFFcEMsS0FBSyxFQUFFLGtDQUFrQztjQUFFb0MsS0FBSyxFQUFFO1lBQUMsQ0FBRTtXQUU5RCxFQUNEO1lBQ0lwQyxLQUFLLEVBQUUsY0FBYztZQUNyQjVCLEtBQUssRUFBRSxDQUNIO2NBQUU0QixLQUFLLEVBQUUsa0JBQWtCO2NBQUVvQyxLQUFLLEVBQUU7WUFBRSxDQUFFLEVBQ3hDO2NBQUVwQyxLQUFLLEVBQUUsd0JBQXdCO2NBQUVvQyxLQUFLLEVBQUU7WUFBRSxDQUFFLEVBQzlDO2NBQUVwQyxLQUFLLEVBQUUsZ0JBQWdCO2NBQUVvQyxLQUFLLEVBQUU7WUFBRSxDQUFFLEVBQ3RDO2NBQUVwQyxLQUFLLEVBQUUseUJBQXlCO2NBQUVvQyxLQUFLLEVBQUU7WUFBRSxDQUFFLEVBQy9DO2NBQUVwQyxLQUFLLEVBQUUscUJBQXFCO2NBQUVvQyxLQUFLLEVBQUU7WUFBRSxDQUFFO1dBRWxELEVBQ0Q7WUFDSXBDLEtBQUssRUFBRSxpQkFBaUI7WUFDeEI1QixLQUFLLEVBQUUsQ0FDSDtjQUFFNEIsS0FBSyxFQUFFLGNBQWM7Y0FBRW9DLEtBQUssRUFBRTtZQUFFLENBQUUsRUFDcEM7Y0FBRXBDLEtBQUssRUFBRSxxQkFBcUI7Y0FBRW9DLEtBQUssRUFBRTtZQUFFLENBQUUsRUFDM0M7Y0FBRXBDLEtBQUssRUFBRSx5QkFBeUI7Y0FBRW9DLEtBQUssRUFBRTtZQUFFLENBQUUsRUFDL0M7Y0FBRXBDLEtBQUssRUFBRSw4Q0FBOEM7Y0FBRW9DLEtBQUssRUFBRTtZQUFFLENBQUUsRUFDcEU7Y0FBRXBDLEtBQUssRUFBRSxxQ0FBcUM7Y0FBRW9DLEtBQUssRUFBRTtZQUFFLENBQUUsRUFDM0Q7Y0FBRXBDLEtBQUssRUFBRSxtREFBbUQ7Y0FBRW9DLEtBQUssRUFBRTtZQUFFLENBQUUsRUFDekU7Y0FBRXBDLEtBQUssRUFBRSxxQkFBcUI7Y0FBRW9DLEtBQUssRUFBRTtZQUFFLENBQUUsRUFDM0M7Y0FBRXBDLEtBQUssRUFBRSxrQ0FBa0M7Y0FBRW9DLEtBQUssRUFBRTtZQUFFLENBQUUsRUFDeEQ7Y0FBRXBDLEtBQUssRUFBRSw0QkFBNEI7Y0FBRW9DLEtBQUssRUFBRTtZQUFFLENBQUUsRUFDbEQ7Y0FBRXBDLEtBQUssRUFBRSxxQ0FBcUM7Y0FBRW9DLEtBQUssRUFBRTtZQUFFLENBQUUsRUFDM0Q7Y0FBRXBDLEtBQUssRUFBRSxnQ0FBZ0M7Y0FBRW9DLEtBQUssRUFBRTtZQUFFLENBQUUsRUFDdEQ7Y0FBRXBDLEtBQUssRUFBRSw2QkFBNkI7Y0FBRW9DLEtBQUssRUFBRTtZQUFFLENBQUUsRUFDbkQ7Y0FBRXBDLEtBQUssRUFBRSx3QkFBd0I7Y0FBRW9DLEtBQUssRUFBRTtZQUFFLENBQUUsRUFDOUM7Y0FBRXBDLEtBQUssRUFBRSw4QkFBOEI7Y0FBRW9DLEtBQUssRUFBRTtZQUFFLENBQUU7V0FFM0QsRUFDRDtZQUNJcEMsS0FBSyxFQUFFLG9CQUFvQjtZQUMzQjVCLEtBQUssRUFBRSxDQUNIO2NBQUU0QixLQUFLLEVBQUUsZ0NBQWdDO2NBQUVvQyxLQUFLLEVBQUU7WUFBRSxDQUFFO1dBRTdELENBQ0oiLCJpZ25vcmVMaXN0IjpbXX0=