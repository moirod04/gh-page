System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/base", "react@18.2.0", "pragmate-ui@0.1.2/modal", "pragmate-ui@0.1.2/form", "pragmate-ui@0.1.2/components", "@jadmin/ui@1.0.0/hooks", "@jadmin/ui@1.0.0/header", "pragmate-ui@0.1.2/image", "framer-motion@10.18.0", "@bg/jadmin@0.0.1/app-icon", "@beyond-js/reactive@1.1.14/model"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets016Render) {
      dependency_0 = _beyondJsWidgets016Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets104Base) {
      dependency_3 = _beyondJsReact18Widgets104Base;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_pragmateUi012Modal) {
      dependency_5 = _pragmateUi012Modal;
    }, function (_pragmateUi012Form) {
      dependency_6 = _pragmateUi012Form;
    }, function (_pragmateUi012Components) {
      dependency_7 = _pragmateUi012Components;
    }, function (_jadminUi100Hooks) {
      dependency_8 = _jadminUi100Hooks;
    }, function (_jadminUi100Header) {
      dependency_9 = _jadminUi100Header;
    }, function (_pragmateUi012Image) {
      dependency_10 = _pragmateUi012Image;
    }, function (_framerMotion2) {
      dependency_11 = _framerMotion2;
    }, function (_bgJadmin001AppIcon) {
      dependency_12 = _bgJadmin001AppIcon;
    }, function (_beyondJsReactive1114Model) {
      dependency_13 = _beyondJsReactive1114Model;
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
          "vspecifier": "@bg/jadmin@0.0.1/gallery",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['react', dependency_4], ['pragmate-ui/modal', dependency_5], ['pragmate-ui/form', dependency_6], ['pragmate-ui/components', dependency_7], ['@jadmin/ui/hooks', dependency_8], ['@jadmin/ui/header', dependency_9], ['pragmate-ui/image', dependency_10], ['framer-motion', dependency_11], ['@bg/jadmin/app-icon', dependency_12], ['@beyond-js/reactive/model', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "gallery-page",
        "vspecifier": "@bg/jadmin@0.0.1/gallery.widget",
        "is": "page",
        "route": "/gallery",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/jadmin@0.0.1/gallery.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 271793609,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _view = require("./view");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            get Widget() {
              return _view.Page;
            }
          }
          exports.Controller = Controller;
        }
      });

      /******************************
      INTERNAL MODULE: ./view/confirm
      ******************************/

      ims.set('./view/confirm', {
        hash: 926604237,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Confirm = Confirm;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _context = require("./context");
          function Confirm() {
            const {
              modal,
              setModal,
              items,
              setItems,
              texts
            } = (0, _context.useGalleryContext)();
            const handleClose = () => setModal({
              ...modal,
              delete: {
                show: false,
                item: undefined
              }
            });
            const onConfirm = () => {
              const newItems = items.filter(item => item.id !== modal.delete.item.id);
              setItems(newItems);
              handleClose();
            };
            const btnConfirm = {
              label: texts.confirm
            };
            const btnCancel = {
              label: texts.cancel
            };
            return _react.default.createElement(_react.default.Fragment, null, modal.delete.show && _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              onClose: handleClose,
              onCancel: handleClose,
              onConfirm: onConfirm,
              className: "modal-jadmin",
              title: texts.delete,
              btnConfirm: btnConfirm,
              btnCancel: btnCancel
            }));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./view/context
      ******************************/

      ims.set('./view/context', {
        hash: 1004848788,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useGalleryContext = exports.GalleryContext = void 0;
          var _react = require("react");
          const GalleryContext = exports.GalleryContext = (0, _react.createContext)(null);
          const useGalleryContext = () => (0, _react.useContext)(GalleryContext);
          exports.useGalleryContext = useGalleryContext;
        }
      });

      /***************************
      INTERNAL MODULE: ./view/data
      ***************************/

      ims.set('./view/data', {
        hash: 3066135285,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.data = void 0;
          const data = exports.data = [{
            id: "1",
            name: "Mario Rossi",
            description: "",
            image: "https://source.unsplash.com/random/1"
          }, {
            id: "2",
            name: "Mario Rossi",
            description: "",
            image: "https://source.unsplash.com/random/2"
          }, {
            id: "3",
            name: "Mario Rossi",
            description: "",
            image: "https://source.unsplash.com/random/3"
          }, {
            id: "4",
            name: "Mario Rossi",
            description: "",
            image: "https://source.unsplash.com/random/4"
          }, {
            id: "5",
            name: "Mario Rossi",
            description: "",
            image: "https://source.unsplash.com/random/5"
          }, {
            id: "6",
            name: "Mario Rossi",
            description: "",
            image: "https://source.unsplash.com/random/6"
          }, {
            id: "7",
            name: "Mario Rossi",
            description: "",
            image: "https://source.unsplash.com/random/7"
          }, {
            id: "8",
            name: "Mario Rossi",
            description: "",
            image: "https://source.unsplash.com/random/8"
          }, {
            id: "9",
            name: "Mario Rossi",
            description: "",
            image: "https://source.unsplash.com/random/9"
          }, {
            id: "10",
            name: "Mario Rossi",
            description: "",
            image: "https://source.unsplash.com/random/10"
          }, {
            id: "11",
            name: "Mario Rossi",
            description: "",
            image: "https://source.unsplash.com/random/11"
          }, {
            id: "12",
            name: "Mario Rossi",
            description: "",
            image: "https://source.unsplash.com/random/12"
          }, {
            id: "13",
            name: "Mario Rossi",
            description: "",
            image: "https://source.unsplash.com/random/13"
          }];
        }
      });

      /***************************
      INTERNAL MODULE: ./view/edit
      ***************************/

      ims.set('./view/edit', {
        hash: 4242026415,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Edit = Edit;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _context = require("./context");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@jadmin/ui/hooks");
          function Edit() {
            const {
              modal,
              setModal,
              texts
            } = (0, _context.useGalleryContext)();
            const init = {
              name: "",
              description: ""
            };
            const {
              getInput,
              fields,
              dispatch
            } = (0, _hooks.useForm)({
              init
            });
            const handleClose = () => {
              dispatch({
                type: "reset"
              });
              setModal({
                ...modal,
                edit: {
                  show: false,
                  item: undefined
                }
              });
            };
            const onConfirm = () => {
              modal.edit.item.edit(fields);
              handleClose();
            };
            if (!modal.edit.show) return null;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "beauty-modal modal-jadmin",
              onClose: handleClose
            }, _react.default.createElement("div", null, _react.default.createElement("h3", {
              className: "title"
            }, texts.edit), _react.default.createElement(_form.Form, {
              onSubmit: onConfirm,
              className: "content-form"
            }, _react.default.createElement("div", {
              className: "form-group"
            }, _react.default.createElement(_form.Input, {
              ...getInput("name", texts.name)
            }), _react.default.createElement(_form.Input, {
              ...getInput("description", texts.description)
            })), _react.default.createElement(_components.Button, {
              type: "submit",
              label: texts.save,
              className: "btn btn-primary"
            }))));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./view/index
      ****************************/

      ims.set('./view/index', {
        hash: 1323169213,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Page = Page;
          var React = require("react");
          var _header = require("@jadmin/ui/header");
          var _item = require("./item");
          var _confirm = require("./confirm");
          var _context = require("./context");
          var _product = require("./product");
          var _edit = require("./edit");
          var _hooks = require("@jadmin/ui/hooks");
          var _beyond_context = require("beyond_context");
          function Page() {
            const [ready, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [modal, setModal] = React.useState({
              delete: {
                show: false,
                item: undefined
              },
              edit: {
                show: false,
                item: undefined
              }
            });
            const [items, setItems] = React.useState(_product.itemsGallery);
            if (!ready) return null;
            const output = items.map(item => {
              return React.createElement(_item.Item, {
                item: item,
                key: item.id
              });
            });
            const value = {
              modal,
              setModal,
              items,
              setItems,
              texts
            };
            return React.createElement(_context.GalleryContext.Provider, {
              value: value
            }, React.createElement(_header.Header, {
              title: texts.title
            }), React.createElement("div", {
              className: "masonry"
            }, output), React.createElement(_confirm.Confirm, null), React.createElement(_edit.Edit, null));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./view/item
      ***************************/

      ims.set('./view/item', {
        hash: 1181391310,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _framerMotion = require("framer-motion");
          var _appIcon = require("@bg/jadmin/app-icon");
          var _context = require("./context");
          function Item({
            item
          }) {
            const {
              image,
              name,
              description
            } = item;
            const {
              modal,
              setModal
            } = (0, _context.useGalleryContext)();
            const [hover, setHover] = _react.default.useState(false);
            const handleHover = () => setHover(true);
            const outHover = () => setHover(false);
            const handleClick = () => setModal({
              ...modal,
              delete: {
                show: true,
                item
              }
            });
            const handleEdit = () => setModal({
              ...modal,
              edit: {
                show: true,
                item
              }
            });
            return _react.default.createElement("div", {
              className: "grid",
              onMouseOver: handleHover,
              onMouseDown: handleHover,
              onMouseLeave: outHover
            }, _react.default.createElement(_image.Image, {
              alt: "",
              src: image
            }), _react.default.createElement("div", {
              className: "grid__body"
            }, _react.default.createElement("div", {
              className: "relative"
            }, _react.default.createElement("h1", {
              className: "grid__title"
            }, name), _react.default.createElement("p", {
              className: "grid__author"
            }, description)), hover && _react.default.createElement(_framerMotion.motion.div, {
              initial: {
                y: 40,
                opacity: 0
              },
              animate: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3,
                  delay: 0
                }
              },
              exit: {
                y: -40,
                opacity: 0,
                transition: {
                  duration: 0.3
                }
              },
              className: "actions"
            }, _react.default.createElement(_appIcon.AppIconButton, {
              onClick: handleClick,
              icon: "delete"
            }), _react.default.createElement(_appIcon.AppIconButton, {
              icon: "edit",
              onClick: handleEdit
            }))));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./view/product
      ******************************/

      ims.set('./view/product', {
        hash: 4042162802,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.itemsGallery = exports.Product = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _data = require("./data");
          class Product extends _model.ReactiveModel {
            #image;
            get image() {
              return this.#image;
            }
            #name;
            get name() {
              return this.#name;
            }
            set name(value) {
              this.#name = value;
              this.triggerEvent();
            }
            #description;
            get description() {
              return this.#description;
            }
            #id;
            get id() {
              return this.#id;
            }
            constructor(data) {
              super();
              this.#name = data.name;
              this.#image = data.image;
              this.#description = data.description;
              this.#id = data.id;
            }
            edit = ({
              name,
              description
            }) => {
              this.#name = name;
              this.#description = description;
              this.triggerEvent();
            };
          }
          exports.Product = Product;
          const itemsGallery = exports.itemsGallery = _data.data.map(item => new Product(item));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlldyIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJQYWdlIiwiZXhwb3J0cyIsIl9yZWFjdCIsIl9tb2RhbCIsIl9jb250ZXh0IiwiQ29uZmlybSIsIm1vZGFsIiwic2V0TW9kYWwiLCJpdGVtcyIsInNldEl0ZW1zIiwidGV4dHMiLCJ1c2VHYWxsZXJ5Q29udGV4dCIsImhhbmRsZUNsb3NlIiwiZGVsZXRlIiwic2hvdyIsIml0ZW0iLCJ1bmRlZmluZWQiLCJvbkNvbmZpcm0iLCJuZXdJdGVtcyIsImZpbHRlciIsImlkIiwiYnRuQ29uZmlybSIsImxhYmVsIiwiY29uZmlybSIsImJ0bkNhbmNlbCIsImNhbmNlbCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJDb25maXJtTW9kYWwiLCJvbkNsb3NlIiwib25DYW5jZWwiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIkdhbGxlcnlDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJkYXRhIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJfZm9ybSIsIl9jb21wb25lbnRzIiwiX2hvb2tzIiwiRWRpdCIsImluaXQiLCJnZXRJbnB1dCIsImZpZWxkcyIsImRpc3BhdGNoIiwidXNlRm9ybSIsInR5cGUiLCJlZGl0IiwiTW9kYWwiLCJGb3JtIiwib25TdWJtaXQiLCJJbnB1dCIsIkJ1dHRvbiIsInNhdmUiLCJSZWFjdCIsIl9oZWFkZXIiLCJfaXRlbSIsIl9jb25maXJtIiwiX3Byb2R1Y3QiLCJfZWRpdCIsIl9iZXlvbmRfY29udGV4dCIsInJlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ1c2VTdGF0ZSIsIml0ZW1zR2FsbGVyeSIsIm91dHB1dCIsIm1hcCIsIkl0ZW0iLCJrZXkiLCJ2YWx1ZSIsIlByb3ZpZGVyIiwiSGVhZGVyIiwiX2ltYWdlIiwiX2ZyYW1lck1vdGlvbiIsIl9hcHBJY29uIiwiaG92ZXIiLCJzZXRIb3ZlciIsImhhbmRsZUhvdmVyIiwib3V0SG92ZXIiLCJoYW5kbGVDbGljayIsImhhbmRsZUVkaXQiLCJvbk1vdXNlT3ZlciIsIm9uTW91c2VEb3duIiwib25Nb3VzZUxlYXZlIiwiSW1hZ2UiLCJhbHQiLCJzcmMiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwieSIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJleGl0IiwiQXBwSWNvbkJ1dHRvbiIsIm9uQ2xpY2siLCJpY29uIiwiX21vZGVsIiwiX2RhdGEiLCJQcm9kdWN0IiwiUmVhY3RpdmVNb2RlbCIsInRyaWdnZXJFdmVudCIsImNvbnN0cnVjdG9yIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvdmlldy9jb25maXJtLnRzeCIsIi90cy92aWV3L2NvbnRleHQudHN4IiwiL3RzL3ZpZXcvZGF0YS50cyIsIi90cy92aWV3L2VkaXQudHN4IiwiL3RzL3ZpZXcvaW5kZXgudHN4IiwiL3RzL3ZpZXcvaXRlbS50c3giLCIvdHMvdmlldy9wcm9kdWN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLE1BQ1ZFLFVBQVcsU0FBUUgsS0FBQSxDQUFBSSxxQkFBcUI7WUFDOUMsSUFBSUMsTUFBTUEsQ0FBQTtjQUNULE9BQU9ILEtBQUEsQ0FBQUksSUFBSTtZQUNaOztVQUNBQyxPQUFBLENBQUFKLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSRCxJQUFBSyxNQUFBLEdBQUFQLE9BQUE7VUFDQSxJ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