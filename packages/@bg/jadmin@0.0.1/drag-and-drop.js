System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.1.2/image", "pragmate-ui@0.1.2/form", "pragmate-ui@0.1.2/components", "pragmate-ui@0.1.2/alert", "pragmate-ui@0.1.2/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, DragAndDrop, __beyond_pkg, hmr;
  _export("DragAndDrop", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi012Image) {
      dependency_3 = _pragmateUi012Image;
    }, function (_pragmateUi012Form) {
      dependency_4 = _pragmateUi012Form;
    }, function (_pragmateUi012Components) {
      dependency_5 = _pragmateUi012Components;
    }, function (_pragmateUi012Alert) {
      dependency_6 = _pragmateUi012Alert;
    }, function (_pragmateUi012Icons) {
      dependency_7 = _pragmateUi012Icons;
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
          "vspecifier": "@bg/jadmin@0.0.1/drag-and-drop"
        },
        "type": "code",
        "name": "drag-and-drop"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/image', dependency_3], ['pragmate-ui/form', dependency_4], ['pragmate-ui/components', dependency_5], ['pragmate-ui/alert', dependency_6], ['pragmate-ui/icons', dependency_7]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/jadmin@0.0.1/drag-and-drop');
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./area
      **********************/
      ims.set('./area', {
        hash: 1714062887,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Area = Area;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _context = require("./context");
          function Area() {
            const {
              files,
              count,
              formats,
              showMessage,
              state,
              dispatch,
              disabled
            } = (0, _context.useDragAndDropContext)();
            const accept = formats && Array.isArray(formats) && formats.map(item => `.${item}`);
            const cls = count && files.length < count && !disabled ? 'hover FilesDragAndDrop__area' : 'FilesDragAndDrop__area';
            const attrs = {};
            if (formats) attrs.accept = accept.join(', ');
            if (count && count > 1) attrs.multiple = true;
            const onFileDrop = event => {
              const newFile = [...event.target.files];
              if (count && count < newFile.length) {
                showMessage(`Solo puese cargar ${count} archivo${count !== 1 ? '' : ''} a la ves`, 'error', 2000);
                return;
              }
              if (newFile) {
                dispatch({
                  case: 'files',
                  files: state.files.concat(newFile)
                });
                showMessage(`Archivos${newFile.length > 1 ? '' : ''} cargado${newFile.length > 1 ? '' : ''} para importar`, 'success', 2000);
              }
            };
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement(_image.Image, {
              src: `${globalThis.baseDir}assets/images/cloud-upload-regular-240.png`,
              alt: ""
            }), count && files.length < count && !disabled && _react.default.createElement("input", {
              ...attrs,
              type: "file",
              onChange: onFileDrop
            }), _react.default.createElement("span", null, "Arrastra y suelta tu archivo"));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 2600666213,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useDragAndDropContext = exports.DragAndDropContext = void 0;
          var _react = require("react");
          const DragAndDropContext = exports.DragAndDropContext = (0, _react.createContext)({
            files: []
          });
          const useDragAndDropContext = () => (0, _react.useContext)(DragAndDropContext);
          exports.useDragAndDropContext = useDragAndDropContext;
        }
      });

      /******************************
      INTERNAL MODULE: ./image-config
      ******************************/

      ims.set('./image-config', {
        hash: 718796739,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ImageConfig = void 0;
          const ImageConfig = exports.ImageConfig = {
            default: `${globalThis.baseDir}assets/images/file-blank-solid-240.png`,
            pdf: `${globalThis.baseDir}assets/file-css-solid-240.png`,
            png: `${globalThis.baseDir}assets/file-pdf-solid-240.png`,
            css: `${globalThis.baseDir}assets/file-png-solid-240.png`
          };
        }
      });

      /*************************
      INTERNAL MODULE: ./imports
      *************************/

      ims.set('./imports', {
        hash: 934841467,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Imports = Imports;
          var _react = require("react");
          var _area = require("./area");
          var _context = require("./context");
          var _message = require("./message");
          var _preview = require("./preview");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          function Imports({
            children
          }) {
            const {
              state,
              count,
              drop,
              drag,
              formats,
              dispatch,
              onUpload,
              clean,
              alert
            } = (0, _context.useDragAndDropContext)();
            const handleSubmit = async () => {
              dispatch({
                case: 'dragging',
                dragging: true
              });
              await onUpload(state.files);
              dispatch({
                case: 'dragging',
                dragging: false
              });
              if (clean) dispatch({
                case: 'files',
                files: []
              });
            };
            const textFormats = formats && Array.isArray(formats) && `Formato${formats.length > 1 ? '' : ''} disponibles: ${formats.join(', ')}`;
            const textAlertInfo = `${alert ? `${alert} <br/>` : ''} ${count && count !== Infinity ? `Puede cargar un máximo de ${count} archivo${count !== 1 ? 's' : ''}` : ''} ${textFormats}`;
            const disabled = {};
            if (state.dragging || !state.files.length) disabled.disabled = true;
            return _react.default.createElement(_form.Form, {
              className: "drag-and-drop-container",
              onSubmit: handleSubmit
            }, _react.default.createElement("header", {
              className: "content-header"
            }, _react.default.createElement("h3", {
              className: "content-header__h3"
            }, "Importar archivos")), _react.default.createElement("div", {
              className: "alert-element--info"
            }, _react.default.createElement("p", {
              className: "alert__title-span",
              dangerouslySetInnerHTML: {
                __html: textAlertInfo
              }
            })), _react.default.createElement("div", {
              ref: drop,
              "data-type": "import",
              className: "FilesDragAndDrop"
            }, _react.default.createElement(_message.Message, null), state.dragging && _react.default.createElement("div", {
              ref: drag,
              className: "FilesDragAndDrop__placeholder"
            }, ' '), _react.default.createElement(_area.Area, null)), _react.default.createElement(_preview.Preview, null), _react.default.createElement("div", {
              className: "drop-file-button"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              type: "submit",
              ...disabled,
              label: "Importar"
            })), children);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2386768571,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DragAndDrop = void 0;
          var _react = require("react");
          var _context = require("./context");
          var _reducer = require("./reducer");
          var _view = require("./view");
          /*bundle*/
          const DragAndDrop = props => {
            const drop = (0, _react.useRef)(null);
            const [state, dispatch] = (0, _react.useReducer)(_reducer.reducer, _reducer.initialState);
            const {
              onUpload,
              count,
              formats,
              children,
              clean,
              userPhoto,
              textUserPhoto,
              disabled,
              alert
            } = props;
            const drag = (0, _react.useRef)(null);
            const showMessage = (text, type, timeout) => {
              dispatch({
                case: 'message',
                show: true,
                text,
                type
              });
              setTimeout(() => dispatch({
                case: 'hideMessage'
              }), timeout);
            };
            const handleDragEnter = event => {
              event.preventDefault();
              event.stopPropagation();
              if (disabled) return;
              if (event.target !== drag.current) dispatch({
                case: 'dragging',
                dragging: true
              });
            };
            const handleDragLeave = event => {
              event.preventDefault();
              event.stopPropagation();
              if (disabled) return;
              if (event.target === drag.current) dispatch({
                case: 'dragging',
                dragging: false
              });
            };
            const handleDragOver = event => {
              event.preventDefault();
              event.stopPropagation();
            };
            const handleDrop = event => {
              event.preventDefault();
              event.stopPropagation();
              if (disabled) return;
              dispatch({
                case: 'dragging',
                dragging: false
              });
              const newFiles = [...event.dataTransfer.files];
              const {
                dataset: {
                  type
                }
              } = event.currentTarget;
              if (type === 'photo' && newFiles.length > 1) {
                return;
              }
              if (count && count < newFiles.length) {
                showMessage(`Solo puese cargar ${count} archivo${count !== 1 ? '' : ''} a la ves`, 'error', 2000);
                return;
              }
              if (formats && newFiles.some(file => !formats.some(format => file.name.toLowerCase().endsWith(format.toLowerCase())))) {
                const filesFormats = newFiles.map(item => item.type.split('/')[1]);
                showMessage(`Los siguientes formatos no están disponibles: ${filesFormats.join(', ')}`, 'error', 2000);
                return;
              }
              if (newFiles && newFiles.length && type !== 'photo') {
                showMessage(`Archivo${newFiles.length > 1 ? '' : ''} cargado${newFiles.length > 1 ? '' : ''} para importar`, 'success', 2000);
                dispatch({
                  case: 'files',
                  files: state.files.concat(newFiles)
                });
                //   onUpload(newFiles)
              }
              if (type === 'photo') {
                const img = URL.createObjectURL(newFiles[0]);
                dispatch({
                  case: 'img',
                  img
                });
                onUpload(newFiles);
              }
            };
            (0, _react.useEffect)(() => {
              if (count && state.files.length >= count || !drop.current) return;
              drop.current.addEventListener('dragover', handleDragOver);
              drop.current.addEventListener('drop', handleDrop);
              drop.current.addEventListener('dragenter', handleDragEnter);
              drop.current.addEventListener('dragleave', handleDragLeave);
              return () => {
                if (!drop.current) return;
                drop.current.removeEventListener('dragover', handleDragOver);
                drop.current.removeEventListener('drop', handleDrop);
                drop.current.removeEventListener('dragenter', handleDragEnter);
                drop.current.removeEventListener('dragleave', handleDragLeave);
              };
            }, [state.files]);
            const value = {
              files: state.files,
              message: state.message,
              count,
              formats,
              showMessage,
              dispatch,
              onUpload,
              state,
              clean,
              drop,
              drag,
              userPhoto,
              textUserPhoto,
              disabled,
              alert
            };
            return _react.default.createElement(_context.DragAndDropContext.Provider, {
              value: value
            }, _react.default.createElement(_view.View, {
              children: children
            }));
          };
          exports.DragAndDrop = DragAndDrop;
          DragAndDrop.defaultProps = {
            clean: false,
            textUserPhoto: 'Haga clic o arraste su imagen para cambiar foto'
          };
        }
      });

      /*************************
      INTERNAL MODULE: ./message
      *************************/

      ims.set('./message', {
        hash: 3628827464,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Message = Message;
          var _react = require("react");
          var _context = require("./context");
          function Message() {
            const {
              message
            } = (0, _context.useDragAndDropContext)();
            return _react.default.createElement(_react.default.Fragment, null, "  ", message.show && _react.default.createElement("div", {
              className: `FilesDragAndDrop__placeholder FilesDragAndDrop__placeholder--${message.type}`
            }, message.text, _react.default.createElement("span", {
              role: 'img',
              "aria-label": 'emoji',
              className: 'area__icon'
            }, message.type === 'error' ? _react.default.createElement(_react.default.Fragment, null) : _react.default.createElement(_react.default.Fragment, null, "\uD83D\uDC4F"))));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./preview
      *************************/

      ims.set('./preview', {
        hash: 618685299,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Preview = Preview;
          var _react = require("react");
          var _context = require("./context");
          var _imageConfig = require("./image-config");
          function Preview() {
            const {
              files,
              dispatch
            } = (0, _context.useDragAndDropContext)();
            const deleteFile = event => {
              const {
                dataset
              } = event.currentTarget;
              const fileFilter = files.filter(file => file.name !== dataset.name);
              dispatch({
                case: 'files',
                files: [...fileFilter]
              });
            };
            const preview = files.map((item, index) => _react.default.createElement("div", {
              key: index,
              className: "drop-file-preview__item"
            }, _react.default.createElement("img", {
              src: _imageConfig.ImageConfig['default'],
              alt: ""
            }), _react.default.createElement("div", {
              className: "drop-file-preview__item__info"
            }, _react.default.createElement("p", null, item.name), _react.default.createElement("p", null, item.size, "B")), _react.default.createElement("span", {
              "data-name": item.name,
              onClick: deleteFile,
              className: "drop-file-preview__item__del"
            }, "x")));
            return _react.default.createElement(_react.default.Fragment, null, ' ', !!files.length && _react.default.createElement("div", {
              className: "drop-file-preview"
            }, _react.default.createElement("p", {
              className: "drop-file-preview__title"
            }, "Listo para Importar"), _react.default.createElement("div", {
              className: "drop-file-preview__content"
            }, preview)));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./reducer
      *************************/

      ims.set('./reducer', {
        hash: 3335817071,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.reducer = exports.initialState = void 0;
          const reducer = (state, payload) => {
            switch (payload.case) {
              case "dragging":
                {
                  return {
                    ...state,
                    dragging: payload.dragging
                  };
                }
                ;
              case "files":
                {
                  return {
                    ...state,
                    files: payload.files
                  };
                }
                ;
              case "message":
                {
                  return {
                    ...state,
                    message: {
                      show: payload.show,
                      text: payload.text,
                      type: payload.type
                    }
                  };
                }
                ;
              case "hideMessage":
                {
                  return {
                    ...state,
                    message: {
                      show: false,
                      text: null,
                      type: null
                    }
                  };
                }
                ;
              case "img":
                {
                  return {
                    ...state,
                    img: payload.img
                  };
                }
                ;
              default:
                return;
            }
            ;
          };
          exports.reducer = reducer;
          const initialState = exports.initialState = {
            dragging: false,
            files: [],
            message: {
              show: false,
              text: null,
              type: null
            },
            img: ""
          };
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 1143884093,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          ;
          ;
        }
      });

      /****************************
      INTERNAL MODULE: ./user-photo
      ****************************/

      ims.set('./user-photo', {
        hash: 623146599,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserPhoto = UserPhoto;
          var _react = require("react");
          var _context = require("./context");
          var _icons = require("pragmate-ui/icons");
          var _image = require("pragmate-ui/image");
          function UserPhoto() {
            const {
              drop,
              textUserPhoto,
              state,
              dispatch
            } = (0, _context.useDragAndDropContext)();
            const onImageChange = event => {
              const [file] = event.target.files;
              if (!file) return;
              const img = URL.createObjectURL(file);
              dispatch({
                case: "img",
                img
              });
            };
            const cls = state.img ? "drag-and-drop-container-user" : "drag-and-drop-container-user border";
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("div", {
              ref: drop,
              "data-type": "photo",
              className: "file-drag-and-drop-user"
            }, _react.default.createElement(_icons.Icon, {
              icon: "camera"
            }), _react.default.createElement("span", null, textUserPhoto), _react.default.createElement("input", {
              placeholder: "Select image",
              accept: "image/*",
              multiple: false,
              type: "file",
              onChange: onImageChange
            })), state.img && _react.default.createElement(_image.Image, {
              alt: "photo user",
              src: state.img
            }));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./view
      **********************/

      ims.set('./view', {
        hash: 3281426199,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _context = require("./context");
          var _imports = require("./imports");
          var _userPhoto = require("./user-photo");
          function View({
            children
          }) {
            const {
              userPhoto
            } = (0, _context.useDragAndDropContext)();
            const Control = userPhoto ? _userPhoto.UserPhoto : _imports.Imports;
            return _react.default.createElement(Control, {
              children: children
            });
          }
          ;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "DragAndDrop",
        "name": "DragAndDrop"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'DragAndDrop') && _export("DragAndDrop", DragAndDrop = require ? require('./index').DragAndDrop : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ltYWdlIiwiX2NvbnRleHQiLCJBcmVhIiwiZmlsZXMiLCJjb3VudCIsImZvcm1hdHMiLCJzaG93TWVzc2FnZSIsInN0YXRlIiwiZGlzcGF0Y2giLCJkaXNhYmxlZCIsInVzZURyYWdBbmREcm9wQ29udGV4dCIsImFjY2VwdCIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsIml0ZW0iLCJjbHMiLCJsZW5ndGgiLCJhdHRycyIsImpvaW4iLCJtdWx0aXBsZSIsIm9uRmlsZURyb3AiLCJldmVudCIsIm5ld0ZpbGUiLCJ0YXJnZXQiLCJjYXNlIiwiY29uY2F0IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJJbWFnZSIsInNyYyIsImdsb2JhbFRoaXMiLCJiYXNlRGlyIiwiYWx0IiwidHlwZSIsIm9uQ2hhbmdlIiwiRHJhZ0FuZERyb3BDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiSW1hZ2VDb25maWciLCJwZGYiLCJwbmciLCJjc3MiLCJfYXJlYSIsIl9tZXNzYWdlIiwiX3ByZXZpZXciLCJfZm9ybSIsIl9jb21wb25lbnRzIiwiSW1wb3J0cyIsImNoaWxkcmVuIiwiZHJvcCIsImRyYWciLCJvblVwbG9hZCIsImNsZWFuIiwiYWxlcnQiLCJoYW5kbGVTdWJtaXQiLCJkcmFnZ2luZyIsInRleHRGb3JtYXRzIiwidGV4dEFsZXJ0SW5mbyIsIkluZmluaXR5IiwiRm9ybSIsIm9uU3VibWl0IiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJyZWYiLCJNZXNzYWdlIiwiUHJldmlldyIsIkJ1dHRvbiIsInZhcmlhbnQiLCJsYWJlbCIsIl9yZWR1Y2VyIiwiX3ZpZXciLCJEcmFnQW5kRHJvcCIsInByb3BzIiwidXNlUmVmIiwidXNlUmVkdWNlciIsInJlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJ1c2VyUGhvdG8iLCJ0ZXh0VXNlclBob3RvIiwidGV4dCIsInRpbWVvdXQiLCJzaG93Iiwic2V0VGltZW91dCIsImhhbmRsZURyYWdFbnRlciIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudCIsImhhbmRsZURyYWdMZWF2ZSIsImhhbmRsZURyYWdPdmVyIiwiaGFuZGxlRHJvcCIsIm5ld0ZpbGVzIiwiZGF0YVRyYW5zZmVyIiwiZGF0YXNldCIsImN1cnJlbnRUYXJnZXQiLCJzb21lIiwiZmlsZSIsImZvcm1hdCIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImVuZHNXaXRoIiwiZmlsZXNGb3JtYXRzIiwic3BsaXQiLCJpbWciLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInZhbHVlIiwibWVzc2FnZSIsIlByb3ZpZGVyIiwiVmlldyIsImRlZmF1bHRQcm9wcyIsIkZyYWdtZW50Iiwicm9sZSIsIl9pbWFnZUNvbmZpZyIsImRlbGV0ZUZpbGUiLCJmaWxlRmlsdGVyIiwiZmlsdGVyIiwicHJldmlldyIsImluZGV4Iiwia2V5Iiwic2l6ZSIsIm9uQ2xpY2siLCJwYXlsb2FkIiwiX2ljb25zIiwiVXNlclBob3RvIiwib25JbWFnZUNoYW5nZSIsIkljb24iLCJpY29uIiwicGxhY2Vob2xkZXIiLCJfaW1wb3J0cyIsIl91c2VyUGhvdG8iLCJDb250cm9sIl0sInNvdXJjZXMiOlsiL3RzL2FyZWEudHN4IiwiL3RzL2NvbnRleHQudHN4IiwiL3RzL2ltYWdlLWNvbmZpZy50cyIsIi90cy9pbXBvcnRzLnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvbWVzc2FnZS50c3giLCIvdHMvcHJldmlldy50c3giLCIvdHMvcmVkdWNlci50cyIsIi90cy90eXBlcy50cyIsIi90cy91c2VyLXBob3RvLnRzeCIsIi90cy92aWV3LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVs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