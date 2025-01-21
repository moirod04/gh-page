System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/base", "@beyond-js/reactive@1.1.14/model", "@bg/auth-api@1.0.0/wrapper.ts", "@bg/auth-api@1.0.0/entities.ts", "pragmate-ui@0.1.2/toast", "@bg/jadmin@0.0.1/config", "@bg/jadmin@0.0.1/media-manager", "react@18.2.0", "pragmate-ui@0.1.2/form", "pragmate-ui@0.1.2/components", "@jadmin/ui@1.0.0/hooks", "@bg/jadmin@0.0.1/breadcrumb", "@bg/jadmin@0.0.1/loading-page", "pragmate-ui@0.1.2/modal", "pragmate-ui@0.1.2/image", "pragmate-ui@0.1.2/icons", "@bg/jadmin@0.0.1/drag-and-drop"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, Controller, Page, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Page: void 0
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
    }, function (_bgAuthApi100WrapperTs) {
      dependency_5 = _bgAuthApi100WrapperTs;
    }, function (_bgAuthApi100EntitiesTs) {
      dependency_6 = _bgAuthApi100EntitiesTs;
    }, function (_pragmateUi012Toast) {
      dependency_7 = _pragmateUi012Toast;
    }, function (_bgJadmin001Config) {
      dependency_8 = _bgJadmin001Config;
    }, function (_bgJadmin001MediaManager) {
      dependency_9 = _bgJadmin001MediaManager;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_pragmateUi012Form) {
      dependency_11 = _pragmateUi012Form;
    }, function (_pragmateUi012Components) {
      dependency_12 = _pragmateUi012Components;
    }, function (_jadminUi100Hooks) {
      dependency_13 = _jadminUi100Hooks;
    }, function (_bgJadmin001Breadcrumb) {
      dependency_14 = _bgJadmin001Breadcrumb;
    }, function (_bgJadmin001LoadingPage) {
      dependency_15 = _bgJadmin001LoadingPage;
    }, function (_pragmateUi012Modal) {
      dependency_16 = _pragmateUi012Modal;
    }, function (_pragmateUi012Image) {
      dependency_17 = _pragmateUi012Image;
    }, function (_pragmateUi012Icons) {
      dependency_18 = _pragmateUi012Icons;
    }, function (_bgJadmin001DragAndDrop) {
      dependency_19 = _bgJadmin001DragAndDrop;
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
          "vspecifier": "@bg/jadmin@0.0.1/profile-view",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@bg/auth-api/wrapper.ts', dependency_5], ['@bg/auth-api/entities.ts', dependency_6], ['pragmate-ui/toast', dependency_7], ['@bg/jadmin/config', dependency_8], ['@bg/jadmin/media-manager', dependency_9], ['react', dependency_10], ['pragmate-ui/form', dependency_11], ['pragmate-ui/components', dependency_12], ['@jadmin/ui/hooks', dependency_13], ['@bg/jadmin/breadcrumb', dependency_14], ['@bg/jadmin/loading-page', dependency_15], ['pragmate-ui/modal', dependency_16], ['pragmate-ui/image', dependency_17], ['pragmate-ui/icons', dependency_18], ['@bg/jadmin/drag-and-drop', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "jadmin-auth-profile",
        "vspecifier": "@bg/jadmin@0.0.1/profile-view.widget",
        "is": "page",
        "route": "/profile/view",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/jadmin@0.0.1/profile-view.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2444097104,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _index = require("./views/index");
          var _model = require("./model");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            get Widget() {
              return _index.Page;
            }
            #manager;
            createStore() {
              this.#manager = new _model.Manager();
              return this.#manager;
            }
            show() {
              if (!this.#manager) return;
              this.#manager.load();
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
        hash: 64635018,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Manager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _wrapper = require("@bg/auth-api/wrapper.ts");
          var _toast = require("pragmate-ui/toast");
          var _config = require("@bg/jadmin/config");
          var _mediaManager = require("@bg/jadmin/media-manager");
          class Manager extends _model.ReactiveModel {
            #keys = ['names', 'lastNames', 'email', 'phone', 'active'];
            #init = {};
            get init() {
              return this.#init;
            }
            #user = _wrapper.session.user;
            get user() {
              return this.#user;
            }
            load = () => {
              this.#keys.forEach(key => {
                this.#init[key] = '';
                if (key === 'active') this.#init[key] = _wrapper.session.user.active;
              });
            };
            clean = () => {};
            update = async (fields, texts) => {
              try {
                this.fetching = true;
                this.triggerEvent('fetching');
                await this.#user.set(fields, false);
                await _wrapper.session.user.set(fields, false);
                await this.#user.publish();
                _toast.toast.success(texts.toast.edit);
              } catch (error) {
                console.error(error);
              } finally {
                this.fetching = false;
                this.triggerEvent('fetching');
              }
            };
            editImageProfile = async () => {
              const url = `${_config.default.params.mediaServer}/upload/images`;
              try {
                this.fetching = true;
                this.triggerEvent('fetching');
                const response = await _mediaManager.mediaDevice.publish(url, {
                  name: 'file',
                  token: _config.default.params.application.token,
                  identifier: _wrapper.session.user.id,
                  entity: 'users'
                });
                if (!response.status) throw new Error(response.error.message);
                await _wrapper.session.user.set({
                  profileImage: response.data.id
                });
                await _wrapper.session.user.publish();
                return {
                  status: true
                };
              } catch (error) {
                console.error(error);
                return {
                  status: false,
                  error
                };
              } finally {
                this.fetching = false;
                this.triggerEvent('fetching');
              }
            };
            hide = () => this.triggerEvent('hide');
          }
          exports.Manager = Manager;
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 1161275288,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 1724950711,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useProfileContext = exports.ProfileContext = void 0;
          var React = require("react");
          const specs = {};
          const ProfileContext = exports.ProfileContext = React.createContext([]);
          const useProfileContext = () => React.useContext(ProfileContext);
          exports.useProfileContext = useProfileContext;
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/form-view
      *********************************/

      ims.set('./views/form-view', {
        hash: 761953173,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormView = FormView;
          var React = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@jadmin/ui/hooks");
          var _wrapper = require("@bg/auth-api/wrapper.ts");
          function FormView({
            texts,
            store,
            fetching
          }) {
            const currentUser = _wrapper.session.user;
            const {
              getInput,
              fields,
              dispatch,
              setError
            } = (0, _hooks.useForm)({
              init: {
                names: currentUser.names ?? "",
                lastNames: currentUser.lastNames ?? "",
                phone: currentUser.phone ?? ""
              },
              isDisabled: fetching
            });
            (0, _hooks.useBinder)([store], () => {
              dispatch({
                type: "reset"
              });
              setError({});
            }, "hide");
            const isEdit = Object.keys(fields).every(key => currentUser[key] === fields[key]);
            const isButtonDisabled = !Object.values(fields).some(field => field) || fetching || isEdit;
            async function handleSubmit() {
              await store.update(fields, texts);
            }
            return React.createElement(_form.Form, {
              className: "content-form",
              onSubmit: handleSubmit
            }, React.createElement("span", {
              className: "title-form"
            }, texts.edit), React.createElement("div", {
              className: "form-group"
            }, React.createElement(_form.Input, {
              ...getInput("names", texts.name),
              loading: fetching
            }), React.createElement(_form.Input, {
              ...getInput("lastNames", texts.lastName),
              loading: fetching
            })), React.createElement("div", {
              className: "form-group"
            }, React.createElement(_form.Input, {
              ...getInput("phone", texts.phone),
              type: "tel"
            }), React.createElement("span", null)), React.createElement(_components.Button, {
              type: "submit",
              loading: fetching,
              disabled: isButtonDisabled,
              className: "btn btn-primary"
            }, texts.save));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2831604232,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Page = Page;
          var _react = require("react");
          var React = _react;
          var _breadcrumb = require("@bg/jadmin/breadcrumb");
          var _hooks = require("@jadmin/ui/hooks");
          var _loadingPage = require("@bg/jadmin/loading-page");
          var _beyond_context = require("beyond_context");
          var _formView = require("./form-view");
          var _context = require("./context");
          var _takeFromCamera = require("./take-from-camera");
          var _wrapper = require("@bg/auth-api/wrapper.ts");
          var _config = require("@bg/jadmin/config");
          /*bundle*/
          function Page({
            store
          }) {
            const [ready, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [fetching, setFetching] = (0, _react.useState)(store.fetching);
            const img = _wrapper.session.user.profileImage ? `${_config.default.params.mediaServer}/display/image/${_wrapper.session.user.profileImage}/150x150/${_config.default.params.token}/user` : `${globalThis.baseDir}assets/default-user.png`;
            const [image, setImage] = React.useState(img);
            const [update, setUpdate] = React.useState({});
            (0, _hooks.useBinder)([_wrapper.session.user, _wrapper.session], () => {
              setUpdate({});
              const img = _wrapper.session.user.profileImage ? `${_config.default.params.mediaServer}/display/image/${_wrapper.session.user.profileImage}/150x150/${_config.default.params.token}/user` : `${globalThis.baseDir}assets/default-user.png`;
              setImage(img);
            }, ['user.changed', 'change', 'user.change', 'changeImage']);
            const [show, setShow] = React.useState(false);
            const [idImage, setIdImage] = React.useState();
            (0, _hooks.useBinder)([store], () => {
              setFetching(store.fetching);
            }, 'fetching');
            if (!ready) return React.createElement(_loadingPage.LoadingPage, {
              content: true
            });
            const value = {
              image,
              setImage,
              idImage,
              setIdImage,
              store,
              show,
              setShow,
              fetching
            };
            const breadcrumb = [['/', 'Home'], [`/profile`, texts.title]];
            return React.createElement(_context.ProfileContext.Provider, {
              value: value
            }, React.createElement("main", null, React.createElement(_breadcrumb.BreadCrumb, {
              items: breadcrumb,
              title: texts.title
            }), React.createElement(_takeFromCamera.TakePhoto, null), React.createElement("div", {
              className: 'card-page'
            }, React.createElement(_formView.FormView, {
              texts: texts,
              store: store,
              fetching: fetching
            }))));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/take-from-camera/context
      ************************************************/

      ims.set('./views/take-from-camera/context', {
        hash: 1581179109,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTakePhotoContext = exports.TakePhotoContext = void 0;
          var React = require("react");
          const TakePhotoContext = exports.TakePhotoContext = React.createContext({});
          const useTakePhotoContext = () => React.useContext(TakePhotoContext);
          exports.useTakePhotoContext = useTakePhotoContext;
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/take-from-camera/index
      **********************************************/

      ims.set('./views/take-from-camera/index', {
        hash: 849160926,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TakePhoto = TakePhoto;
          var _react = require("react");
          var _context = require("./context");
          var _view = require("./view");
          function TakePhoto() {
            const [showVideo, setShowVideo] = _react.default.useState(false);
            const [isLoading, setIsLoading] = _react.default.useState(true);
            const value = {
              showVideo,
              setShowVideo,
              isLoading,
              setIsLoading
            };
            return _react.default.createElement(_context.TakePhotoContext.Provider, {
              value: value
            }, _react.default.createElement(_view.View, null));
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./views/take-from-camera/modal-camera
      *****************************************************/

      ims.set('./views/take-from-camera/modal-camera', {
        hash: 2991805498,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalCamera = ModalCamera;
          var React = require("react");
          var _context = require("../context");
          var _context2 = require("./context");
          var _rtcCamera = require("./rtc-camera");
          var _mediaManager = require("@bg/jadmin/media-manager");
          var _components = require("pragmate-ui/components");
          function ModalCamera() {
            const {
              showVideo,
              setShowVideo,
              setIsLoading,
              isLoading
            } = (0, _context2.useTakePhotoContext)();
            const {
              setImage,
              setIdImage,
              store
            } = (0, _context.useProfileContext)();
            const onClick = async event => {
              event.preventDefault();
              event.stopPropagation();
              const blob = await _mediaManager.mediaDevice.getPicture();
              const imageUrl = URL.createObjectURL(blob);
              setImage(imageUrl);
              setIdImage(undefined);
              setShowVideo(false);
              setIsLoading(true);
              await store.editImageProfile();
              _mediaManager.mediaDevice.desactivateCamera();
            };
            const cls = showVideo ? `modal-camera show-camera background-black` : "modal-camera ";
            const close = event => {
              event.stopPropagation();
              setShowVideo(false);
              setIsLoading(true);
              _mediaManager.mediaDevice.desactivateCamera();
            };
            return React.createElement("div", {
              className: cls,
              onClick: close
            }, React.createElement("div", {
              className: "modal-content"
            }, React.createElement("div", {
              className: "content-modal-video"
            }, React.createElement(_rtcCamera.RTCCamera, null), showVideo && React.createElement("div", {
              className: "actions-modal"
            }, React.createElement(_components.Button, {
              className: "btn",
              variant: "tertiary",
              onClick: close
            }, "Cancelar"), React.createElement(_components.Button, {
              className: "btn btn-primary",
              disabled: isLoading,
              onClick: onClick
            }, "Tomar Foto")))));
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/take-from-camera/rtc-camera
      ***************************************************/

      ims.set('./views/take-from-camera/rtc-camera', {
        hash: 412572838,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RTCCamera = RTCCamera;
          var React = require("react");
          var _context = require("./context");
          var _mediaManager = require("@bg/jadmin/media-manager");
          function RTCCamera() {
            const {
              showVideo,
              setIsLoading,
              isLoading
            } = (0, _context.useTakePhotoContext)();
            const video = React.useRef(null);
            const play = () => {
              if (!showVideo) return;
              (async () => {
                const constraits = {
                  video: true,
                  audio: false
                };
                await _mediaManager.mediaDevice.activateCamera(constraits, video.current);
              })();
              return () => {
                _mediaManager.mediaDevice.desactivateCamera();
              };
            };
            React.useEffect(play, [showVideo]);
            const handleLoadedData = () => setIsLoading(false);
            const cls = isLoading ? "fetching-video" : "";
            return React.createElement("video", {
              className: cls,
              onLoadedData: handleLoadedData,
              ref: video,
              autoPlay: true
            });
          }
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./views/take-from-camera/take-photo/index
      *********************************************************/

      ims.set('./views/take-from-camera/take-photo/index', {
        hash: 766007667,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TakePhotoModal = TakePhotoModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _components = require("pragmate-ui/components");
          var _context = require("../../context");
          var _context2 = require("../context");
          var _useUploader = require("./use-uploader");
          function TakePhotoModal() {
            const {
              setShowVideo
            } = (0, _context2.useTakePhotoContext)();
            const ref = _react.default.useRef(null);
            const {
              show,
              setShow,
              setImage,
              store
            } = (0, _context.useProfileContext)();
            const onload = async uploader => {
              setImage(uploader.files.entries[0].src);
              await store.editImageProfile();
              setShow(false);
            };
            (0, _useUploader.useUploader)(ref, onload, show);
            if (!show) return null;
            const onClose = () => setShow(false);
            const openCameraDesktop = event => {
              event.stopPropagation();
              setShowVideo(true);
              onClose();
            };
            return _react.default.createElement(_modal.Modal, {
              className: 'modal-take-container',
              show: true,
              onClose: onClose
            }, _react.default.createElement("div", {
              className: 'd-flex gap-16 modal-take'
            }, _react.default.createElement(_components.Button, {
              className: 'btn btn-primary',
              onClick: openCameraDesktop
            }, "Tomar foto"), _react.default.createElement("span", {
              ref: ref
            }, _react.default.createElement(_components.Button, {
              className: 'btn btn-secondary take-button'
            }, "Desde el dispostivo"))));
          }
        }
      });

      /****************************************************************
      INTERNAL MODULE: ./views/take-from-camera/take-photo/use-uploader
      ****************************************************************/

      ims.set('./views/take-from-camera/take-photo/use-uploader', {
        hash: 191250821,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useUploader = useUploader;
          var _mediaManager = require("@bg/jadmin/media-manager");
          var React = require("react");
          function useUploader(ref, onLoad, show) {
            const [uploader, setUploader] = React.useState(null);
            React.useEffect(() => {
              if (globalThis.phonegap || globalThis.ionic || globalThis.cordova) return;
              const uploader = _mediaManager.mediaDevice.setInputFile(ref.current);
              setUploader(uploader);
              const onload = () => onLoad(uploader);
              uploader.on("loadend", onload);
              return () => {
                uploader.off("loadend", onload);
              };
            }, [show]);
            return uploader;
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/take-from-camera/view
      *********************************************/

      ims.set('./views/take-from-camera/view', {
        hash: 3449733117,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _modalCamera = require("./modal-camera");
          var _context = require("../context");
          var _image = require("pragmate-ui/image");
          var _icons = require("pragmate-ui/icons");
          var _takePhoto = require("./take-photo");
          ;
          function View() {
            const {
              image,
              fetching,
              setShow,
              show
            } = (0, _context.useProfileContext)();
            const toggle = () => setShow(!show);
            const cls = fetching ? "image-result image-result-fetching" : "image-result";
            const clsImg = image ? cls : `${cls} default-image`;
            return _react.default.createElement("div", null, _react.default.createElement(_image.Image, {
              src: image,
              alt: " ",
              className: clsImg
            }, _react.default.createElement(_icons.IconButton, {
              icon: "camera",
              onClick: toggle
            })), _react.default.createElement(_modalCamera.ModalCamera, null), _react.default.createElement(_takePhoto.TakePhotoModal, null));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/user-photo
      **********************************/

      ims.set('./views/user-photo', {
        hash: 4169247938,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserPhoto = UserPhoto;
          var React = require("react");
          var _dragAndDrop = require("@bg/jadmin/drag-and-drop");
          var _wrapper = require("@bg/auth-api/wrapper.ts");
          function UserPhoto({
            texts
          }) {
            const onUpload = () => {};
            const userName = `${`${_wrapper.session.user.names ?? ''}`} ${_wrapper.session.user.lastNames ?? ''}`;
            return React.createElement("div", {
              className: "content-photo card-page"
            }, React.createElement(_dragAndDrop.DragAndDrop, {
              onUpload: onUpload,
              userPhoto: true,
              textUserPhoto: texts.click
            }), React.createElement("div", {
              className: "userInfo"
            }, (_wrapper.session.user.names || _wrapper.session.user.lastNames) && React.createElement("h4", null, userName), React.createElement("span", null, _wrapper.session.user.email)));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "Page",
        "name": "Page"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Page') && _export("Page", Page = require ? require('./views/index').Page : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfaW5kZXgiLCJfbW9kZWwiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiUGFnZSIsIm1hbmFnZXIiLCJjcmVhdGVTdG9yZSIsIk1hbmFnZXIiLCJzaG93IiwibG9hZCIsImhpZGUiLCJleHBvcnRzIiwiX3dyYXBwZXIiLCJfdG9hc3QiLCJfY29uZmlnIiwiX21lZGlhTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJrZXlzIiwiaW5pdCIsInVzZXIiLCJzZXNzaW9uIiwiZm9yRWFjaCIsImtleSIsImFjdGl2ZSIsImNsZWFuIiwidXBkYXRlIiwiZmllbGRzIiwidGV4dHMiLCJmZXRjaGluZyIsInRyaWdnZXJFdmVudCIsInNldCIsInB1Ymxpc2giLCJ0b2FzdCIsInN1Y2Nlc3MiLCJlZGl0IiwiZXJyb3IiLCJjb25zb2xlIiwiZWRpdEltYWdlUHJvZmlsZSIsInVybCIsImRlZmF1bHQiLCJwYXJhbXMiLCJtZWRpYVNlcnZlciIsInJlc3BvbnNlIiwibWVkaWFEZXZpY2UiLCJuYW1lIiwidG9rZW4iLCJhcHBsaWNhdGlvbiIsImlkZW50aWZpZXIiLCJpZCIsImVudGl0eSIsInN0YXR1cyIsIkVycm9yIiwibWVzc2FnZSIsInByb2ZpbGVJbWFnZSIsImRhdGEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiUmVhY3QiLCJzcGVjcyIsIlByb2ZpbGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZVByb2ZpbGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9mb3JtIiwiX2NvbXBvbmVudHMiLCJfaG9va3MiLCJGb3JtVmlldyIsInN0b3JlIiwiY3VycmVudFVzZXIiLCJnZXRJbnB1dCIsImRpc3BhdGNoIiwic2V0RXJyb3IiLCJ1c2VGb3JtIiwibmFtZXMiLCJsYXN0TmFtZXMiLCJwaG9uZSIsImlzRGlzYWJsZWQiLCJ1c2VCaW5kZXIiLCJ0eXBlIiwiaXNFZGl0IiwiZXZlcnkiLCJpc0J1dHRvbkRpc2FibGVkIiwidmFsdWVzIiwic29tZSIsImZpZWxkIiwiaGFuZGxlU3VibWl0IiwiY3JlYXRlRWxlbWVudCIsIkZvcm0iLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsIklucHV0IiwibG9hZGluZyIsImxhc3ROYW1lIiwiQnV0dG9uIiwiZGlzYWJsZWQiLCJzYXZlIiwiX3JlYWN0IiwiX2JyZWFkY3J1bWIiLCJfbG9hZGluZ1BhZ2UiLCJfYmV5b25kX2NvbnRleHQiLCJfZm9ybVZpZXciLCJfY29udGV4dCIsIl90YWtlRnJvbUNhbWVyYSIsInJlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwiaW1nIiwiZ2xvYmFsVGhpcyIsImJhc2VEaXIiLCJpbWFnZSIsInNldEltYWdlIiwic2V0VXBkYXRlIiwic2V0U2hvdyIsImlkSW1hZ2UiLCJzZXRJZEltYWdlIiwiTG9hZGluZ1BhZ2UiLCJjb250ZW50IiwiYnJlYWRjcnVtYiIsInRpdGxlIiwiUHJvdmlkZXIiLCJCcmVhZENydW1iIiwiaXRlbXMiLCJUYWtlUGhvdG8iLCJUYWtlUGhvdG9Db250ZXh0IiwidXNlVGFrZVBob3RvQ29udGV4dCIsIl92aWV3Iiwic2hvd1ZpZGVvIiwic2V0U2hvd1ZpZGVvIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiVmlldyIsIl9jb250ZXh0MiIsIl9ydGNDYW1lcmEiLCJNb2RhbENhbWVyYSIsIm9uQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiYmxvYiIsImdldFBpY3R1cmUiLCJpbWFnZVVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInVuZGVmaW5lZCIsImRlc2FjdGl2YXRlQ2FtZXJhIiwiY2xzIiwiY2xvc2UiLCJSVENDYW1lcmEiLCJ2YXJpYW50IiwidmlkZW8iLCJ1c2VSZWYiLCJwbGF5IiwiY29uc3RyYWl0cyIsImF1ZGlvIiwiYWN0aXZhdGVDYW1lcmEiLCJjdXJyZW50IiwidXNlRWZmZWN0IiwiaGFuZGxlTG9hZGVkRGF0YSIsIm9uTG9hZGVkRGF0YSIsInJlZiIsImF1dG9QbGF5IiwiX21vZGFsIiwiX3VzZVVwbG9hZGVyIiwiVGFrZVBob3RvTW9kYWwiLCJvbmxvYWQiLCJ1cGxvYWRlciIsImZpbGVzIiwiZW50cmllcyIsInNyYyIsInVzZVVwbG9hZGVyIiwib25DbG9zZSIsIm9wZW5DYW1lcmFEZXNrdG9wIiwiTW9kYWwiLCJvbkxvYWQiLCJzZXRVcGxvYWRlciIsInBob25lZ2FwIiwiaW9uaWMiLCJjb3Jkb3ZhIiwic2V0SW5wdXRGaWxlIiwib24iLCJvZmYiLCJfbW9kYWxDYW1lcmEiLCJfaW1hZ2UiLCJfaWNvbnMiLCJfdGFrZVBob3RvIiwidG9nZ2xlIiwiY2xzSW1nIiwiSW1hZ2UiLCJhbHQiLCJJY29uQnV0dG9uIiwiaWNvbiIsIl9kcmFnQW5kRHJvcCIsIlVzZXJQaG90byIsIm9uVXBsb2FkIiwidXNlck5hbWUiLCJEcmFnQW5kRHJvcCIsInVzZXJQaG90byIsInRleHRVc2VyUGhvdG8iLCJjbGljayIsImVtYWlsIl0sInNvdXJjZXMiOlsiL3dpZGdldC90cy9jb250cm9sbGVyLnRzIiwiL3dpZGdldC90cy9tb2RlbC50cyIsIi90eXBlcy50cyIsIi93aWRnZXQvdHMvdmlld3MvY29udGV4dC50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL2Zvcm0tdmlldy50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL2luZGV4LnRzeCIsIi93aWRnZXQvdHMvdmlld3MvdGFrZS1mcm9tLWNhbWVyYS9jb250ZXh0LnRzeCIsIi93aWRnZXQvdHMvdmlld3MvdGFrZS1mcm9tLWNhbWVyYS9pbmRleC50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL3Rha2UtZnJvbS1jYW1lcmEvbW9kYWwtY2FtZXJhLnRzeCIsIi93aWRnZXQvdHMvdmlld3MvdGFrZS1mcm9tLWNhbWVyYS9ydGMtY2FtZXJhLnRzeCIsIi93aWRnZXQvdHMvdmlld3MvdGFrZS1mcm9tLWNhbWVyYS90YWtlLXBob3RvL2luZGV4LnRzeCIsIi93aWRnZXQvdHMvdmlld3MvdGFrZS1mcm9tLWNhbWVyYS90YWtlLXBob3RvL3VzZS11cGxvYWRlci50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL3Rha2UtZnJvbS1jYW1lcmEvdmlldy50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL3VzZXItcGhvdG8udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFFQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1ZHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyxxQkFBcUI7WUFDOUMsSUFBSUMsTUFBTUEsQ0FBQTtjQUNULE9BQU9KLE1BQUEsQ0FBQUssSUFBSTtZQUNaO1lBRUEsQ0FBQUMsT0FBUTtZQUVSQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELE9BQVEsR0FBRyxJQUFJTCxNQUFBLENBQUFPLE9BQU8sRUFBRTtjQUM3QixPQUFPLElBQUksQ0FBQyxDQUFBRixPQUFRO1lBQ3JCO1lBRUFHLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFILE9BQVEsRUFBRTtjQUNwQixJQUFJLENBQUMsQ0FBQUEsT0FBUSxDQUFDSSxJQUFJLEVBQUU7WUFDckI7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxPQUFRLENBQUNLLElBQUksRUFBRTtZQUNyQjs7VUFDQUMsT0FBQSxDQUFBVixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUJELElBQUFELE1BQUEsR0FBQUYsT0FBQTtV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