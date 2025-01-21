System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.14/model", "@beyond-js/kernel@0.1.9/core", "sgs-workflow@1.0.0/wrappers"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Uploader, XHRLoader, __beyond_pkg, hmr;
  _export({
    Uploader: void 0,
    XHRLoader: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive1114Model) {
      dependency_1 = _beyondJsReactive1114Model;
    }, function (_beyondJsKernel019Core) {
      dependency_2 = _beyondJsKernel019Core;
    }, function (_sgsWorkflow100Wrappers) {
      dependency_3 = _sgsWorkflow100Wrappers;
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
          "vspecifier": "sgs-workflow@1.0.0/uploader"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/kernel/core', dependency_2], ['sgs-workflow/wrappers', dependency_3]]);
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./draggable
      ***************************/
      ims.set('./draggable', {
        hash: 104832952,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DraggableUploader = void 0;
          class DraggableUploader {
            #parent;
            #files;
            #isValidDrag = false;
            get isvalidDrag() {
              return this.#isValidDrag;
            }
            constructor(parent) {
              this.#parent = parent;
              this.#files = parent.files;
            }
            onDrop = event => {
              event.preventDefault();
              const {
                dataTransfer
              } = event;
              if (!dataTransfer.items.length) {
                return;
              }
              const files = [];
              for (let i = 0; i < dataTransfer.items.length; ++i) {
                const file = dataTransfer.items[i].getAsFile();
                if (file) {
                  files.push(file);
                }
              }
              this.#files.readLocal(files);
            };
            /**
             * This event runs only when are files on the draggable area.
             * @param event
             */
            onDragOver = event => {
              event.preventDefault();
              return this.#isValidDrag = true;
            };
            /**
             * Add the drag & drop events to the control
             * @param {HTMLInputElement} selector
             */
            add(selector) {
              selector.ondrop = this.onDrop;
              selector.ondragover = this.onDragOver;
            }
          }
          exports.DraggableUploader = DraggableUploader;
        }
      });

      /****************************
      INTERNAL MODULE: ./files/base
      ****************************/

      ims.set('./files/base', {
        hash: 6167283,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BaseFile = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _model = require("@beyond-js/reactive/model");
          class BaseFile extends _model.ReactiveModel {
            #loaded = 0;
            #specs;
            #type;
            regExp = /[^\w\d.]/g;
            #errors = [];
            get errors() {
              return this.#errors;
            }
            _total = 0;
            get total() {
              return this._total;
            }
            set total(value) {
              if (value === this._total) return;
              this._total = value;
            }
            _items = new Map();
            get items() {
              return this._items;
            }
            get entries() {
              return [...this._items.values()];
            }
            constructor(parent, specs) {
              super();
              this.#specs = specs;
              this.#type = specs.type ? specs.type : 'any';
            }
            // @todo: @jircdev add support for multiple files in extensible way
            FILE_TYPE = Object.freeze({
              document: ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf', 'application/vnd.ms-outlook', 'message/rfc822', 'text/plain'],
              image: ['image/jpeg', 'image/jpg', 'image/png', 'image/bmp', 'image/gif' // .gif
              ],
              json: ['application/json'],
              zip: ['application/x-zip-compressed', 'application/zip', 'application/x-rar-compressed' // .rar
              ],
              audio: ['audio/mpeg', 'audio/ogg', 'audio/wav', 'audio/webm', 'audio/aac', 'audio/flac', 'audio/x-m4a' // mp4 files, older version
              ]
            });
            #onload = event => {
              event.target.removeEventListener('load', this.#onload);
              if (this.#specs.onload && typeof this.#specs.onload === 'function') {
                this.#specs.onload(event);
              }
            };
            #onloadend = (event, file) => {
              this.#loaded = this.#loaded + 1;
              const name = file.name;
              file = this._items.get(name);
              file.src = event.target.result;
              this._items.set(name, file);
              event.target.removeEventListener('onloadend', this.#onloadend);
              this.triggerEvent('file.loaded');
              if (this.#loaded === this._items.size) this.triggerEvent('loadend');
              if (this.#specs.onloadend && typeof this.#specs.onloadend === 'function') {
                this.#specs.onload(event);
              }
            };
            #onerror = event => console.error(4, event);
            validate = file => {
              const isValid = !!this.FILE_TYPE[this.#type].find(item => item === file.type);
              if (!isValid) {
                this.#errors.push(file.name);
              }
              return isValid;
            };
            #readFile = async file => {
              const promise = new _core.PendingPromise();
              if (this.#type !== 'any') {
                const isValid = await this.validate(file);
                if (!isValid) {
                  this.triggerEvent('error');
                  return;
                }
              }
              const reader = new FileReader();
              reader.onload = event => this.#onload(event);
              reader.onloadend = event => {
                this.#onloadend(event, file);
                promise.resolve();
              };
              reader.onerror = event => this.#onerror(event);
              reader.readAsDataURL(file);
              return promise;
            };
            #validateLoad = () => {
              if (this.#loaded === this._items.size) {}
            };
            validateExtension = (file, allowedExtensions) => {
              const fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
              const isValidExtension = allowedExtensions.includes(fileExtension);
              if (!isValidExtension) {
                this.#errors.push(file.name);
              }
              return isValidExtension;
            };
            clean = () => {
              this._items = new Map();
              this.#loaded = 0;
              this.triggerEvent('items.loaded');
            };
            /**
             *
             * @param fileList
             */
            readLocal = async fileList => {
              this.fetching = true;
              const promises = [];
              for (let i = 0; i < fileList.length; ++i) {
                const file = fileList[i];
                this._items.set(file.name, file);
                promises.push(this.#readFile(file));
              }
              await Promise.all(promises);
              this.fetching = false;
              this.triggerEvent('items.loaded');
              //@todo trigger remove
            };
          }
          exports.BaseFile = BaseFile;
        }
      });

      /*****************************
      INTERNAL MODULE: ./files/index
      *****************************/

      ims.set('./files/index', {
        hash: 1840511701,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FilesUploader = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _mobile = require("./mobile");
          var _web = require("./web");
          class FilesUploader extends _model.ReactiveModel {
            static #instance;
            static getInstance(parent, specs) {
              if (this.#instance) return this.#instance;
              if (globalThis.phonegap) return new _mobile.MobileFilesUploader(parent);
              return new _web.WebFilesUploader(parent, specs);
            }
          }
          exports.FilesUploader = FilesUploader;
        }
      });

      /******************************
      INTERNAL MODULE: ./files/mobile
      ******************************/

      ims.set('./files/mobile', {
        hash: 4172311851,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileFilesUploader = void 0;
          var _model = require("@beyond-js/reactive/model");
          class MobileFilesUploader extends _model.ReactiveModel {
            _loaded = 0;
            files = new Map();
            base64;
            _specs;
            _errors = [];
            constructor(specs) {
              super();
              this._specs = specs;
            }
            clean = () => {
              this.files = new Map();
              this._loaded = 0;
            };
            getFiles = async data => {
              this.clean();
              this.base64 = data.url;
              this.triggerEvent('loading');
              /**
               * todo: @julio check
               */
              const [dir, filename] = data.name.split('com.jidadesarrollos.bovino/cache/');
              this.files.set(filename, data.url);
              this.triggerEvent('loadend');
            };
            get entries() {
              return this.files;
            }
            get total() {
              return this.files.size;
            }
          }
          exports.MobileFilesUploader = MobileFilesUploader;
        }
      });

      /***************************
      INTERNAL MODULE: ./files/web
      ***************************/

      ims.set('./files/web', {
        hash: 4019010510,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WebFilesUploader = void 0;
          var _base = require("./base");
          class WebFilesUploader extends _base.BaseFile {}
          exports.WebFilesUploader = WebFilesUploader;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2346350795,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Uploader = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _draggable = require("./draggable");
          var _files = require("./files");
          var _xhr = require("./xhr");
          /*bundle*/
          class Uploader extends _model.ReactiveModel {
            #files;
            get files() {
              return this.#files;
            }
            #fileInput = document.createElement('input');
            #selector;
            #attrs;
            #draggable;
            get draggable() {
              return this.#draggable;
            }
            #control;
            #specs;
            #errors;
            get errors() {
              return this.#errors;
            }
            #isValidDrag = false;
            get isvalidDrag() {
              return this.#isValidDrag;
            }
            constructor(specs = {}) {
              super();
              if (!specs.input) specs.input = {};
              /**
               * Manager of the files
               * @type {UploadFiles}
               */
              this.#files = _files.FilesUploader.getInstance(this, specs);
              this.#draggable = new _draggable.DraggableUploader(this);
              this.#files.on('change', this.#listenChanges);
              this.#files.on('items.loaded', this.#updateItems);
              this.#files.on('error', this.getErrors);
              this.#files.on('loadend', this.filesLoaded);
              const params = {
                ...specs.input
              };
              if (specs.hasOwnProperty('multiple')) params.multiple = specs.multiple;
              this.#specs = specs;
              this.setAttributes(params);
            }
            #listenChanges = () => {
              this.fetching = this.#files.fetching;
              this.ready = this.#files.ready;
              this.triggerEvent();
            };
            setAttributes = specs => {
              if (!specs) specs = {};
              let attrs = {
                type: 'file',
                style: 'display:none',
                name: 'input_upload',
                ...specs
              };
              if (attrs.multiple) this.#fileInput.accept = 'directory/*';
              for (let prop in attrs) {
                this.#fileInput.setAttribute(prop, attrs[prop]);
              }
              this.#attrs = attrs;
            };
            #updateItems = () => {
              this.triggerEvent('items.loaded');
            };
            uploadedFiles = [];
            openDialog = () => {
              this.#fileInput.click();
            };
            filesLoaded = () => this.triggerEvent('loadend');
            pictureLoaded = () => this.triggerEvent('pictureLoaded');
            pictureLoading = () => this.triggerEvent('pictureLoading');
            getErrors = () => this.#errors = this.files.errors;
            clean = async () => {
              await this.#files.clean();
            };
            delete = fileName => {
              this.#files.items.delete(fileName);
              this.uploadedFiles = this.uploadedFiles.filter(file => file.name !== fileName);
              this.triggerEvent('item.delete');
            };
            doNotAllow = fileName => {
              this.#files.items.delete(fileName);
              this.triggerEvent('item.delete');
            };
            isDrap = () => {
              return this.#draggable.onDragOver();
            };
            create = (selector, draggableSelector) => {
              /* if (mediaDevice.type === 'MOBILE') {
                  selector.addEventListener('click', mediaDevice.openGallery);
              } */
              this.#selector = selector;
              /**
               * Adds de click and change events into the input file
               */
              const addListeners = () => {
                if (!selector) return;
                selector.addEventListener('click', this.openDialog);
                this.#fileInput.addEventListener('change', this.#onChangeInput);
              };
              selector.after(this.#fileInput);
              addListeners();
              if (draggableSelector) this.#draggable.add(draggableSelector);
            };
            #onChangeInput = async event => {
              this.fetching = true;
              const target = event.currentTarget;
              window.setTimeout(async () => {
                this.#files.total = target.files.length;
                await this.#files.readLocal(target.files);
                this.fetching = false;
              }, 0);
            };
            publish = async (additionalParams = {}) => {
              const form = new FormData();
              //const collection = isCamera ? mobileFiles : files;
              const collection = this.#files;
              const specs = this.#specs;
              const name = collection.total > 1 ? `${specs.name}` : specs.name;
              const items = collection.entries.map(item => item);
              form.append(name, JSON.stringify(items));
              collection.entries.forEach(item => form.append(name, item));
              if (!specs.params) specs.params = {};
              const params = {
                ...specs.params,
                ...additionalParams
              };
              for (let param in params) {
                if (!params.hasOwnProperty(param)) continue;
                form.append(param, params[param]);
              }
              const xhr = new _xhr.XHRLoader();
              const response = await xhr.upload(form, `${specs.url}upload`);
              this.#files.clean();
              return response.json();
            };
            remove = async ids => {
              const xhr = new _xhr.XHRLoader();
              const response = await xhr.remove(ids, `${this.#specs.url}remove`);
              return response.json();
            };
            rollback = async () => {
              const xhr = new _xhr.XHRLoader();
              const response = await xhr.rollback(`${this.#specs.url}rollback`);
              return response.json();
            };
          }
          exports.Uploader = Uploader;
        }
      });

      /************************
      INTERNAL MODULE: ./resize
      ************************/

      ims.set('./resize', {
        hash: 1913477879,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.resizePicture = void 0;
          const resizePicture = (uri, specs) => new Promise(resolve => {
            specs = specs ? specs : {};
            const maxWidth = specs.maxWidth ? specs.maxWidth : 800;
            const maxHeight = specs.maxHeight ? specs.maxHeight : maxWidth / (4 / 3);
            const quality = specs.quality ? specs.quality : 0.8;
            const img = new Image();
            img.src = uri;
            img.onload = function () {
              let width = img.width;
              let height = img.height;
              let orientation;
              if (width < height) {
                orientation = "portrait";
                if (height > maxHeight) {
                  width *= maxHeight / height;
                  height = maxHeight;
                }
              } else {
                orientation = "landscape";
                if (width > maxWidth) {
                  height *= maxWidth / width;
                  width = maxWidth;
                }
              }
              const canvas = document.createElement("canvas");
              canvas.width = width;
              canvas.height = height;
              const ctx = canvas.getContext("2d");
              ctx.drawImage(img, 0, 0, width, height);
              let image = canvas.toDataURL("image/jpeg", quality);
              if (!specs.rotate) {
                resolve({
                  src: image,
                  width: width,
                  height: height,
                  orientation: orientation
                });
              }
              const rotateCanvas = document.createElement("canvas");
              let ctxRotate = rotateCanvas.getContext("2d");
              rotateCanvas.height = width;
              rotateCanvas.width = height;
              const imgRotate = new Image();
              imgRotate.onload = () => {
                ctxRotate.translate(rotateCanvas.width / 2, rotateCanvas.height / 2);
                ctxRotate.rotate(Math.PI / 2);
                ctxRotate.drawImage(imgRotate, -imgRotate.width / 2, -imgRotate.height / 2);
                ctxRotate.rotate(-Math.PI / 2);
                ctxRotate.translate(-imgRotate.width / 2, -imgRotate.height / 2);
                const imageRotated = rotateCanvas.toDataURL("image/jpg", 1);
                resolve({
                  src: imageRotated,
                  width: width,
                  height: height,
                  orientation: orientation,
                  aja: true
                });
              };
              imgRotate.src = image;
            };
          });
          exports.resizePicture = resizePicture;
        }
      });

      /*********************
      INTERNAL MODULE: ./xhr
      *********************/

      ims.set('./xhr', {
        hash: 2077671775,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.XHRLoader = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _wrappers = require("sgs-workflow/wrappers");
          /*bundle */
          class XHRLoader extends _model.ReactiveModel {
            promise;
            uploaded;
            progress;
            error;
            constructor() {
              super();
              this.promise = undefined;
              this.uploaded = false;
              this.progress = 0;
              this.error = false;
            }
            #bearer = _wrappers.session.token;
            bearer(bearer) {
              if (bearer) this.#bearer = bearer;
              return this;
            }
            get uploading() {
              return !!this.promise;
            }
            get isUploaded() {
              return this.uploaded;
            }
            get uploadProgress() {
              return this.progress;
            }
            get hasError() {
              return this.error;
            }
            onProgress(event) {
              if (event.lengthComputable) {
                const percent = Math.round(event.loaded * 100 / event.total);
                this.progress = parseInt(percent.toString());
              }
              this.triggerEvent('change');
            }
            onCompleted(event) {
              this.uploaded = true;
              this.promise.resolve();
              this.triggerEvent('change');
              setTimeout(() => {
                this.promise = undefined;
                this.triggerEvent('change');
              }, 100);
            }
            onError(event) {
              console.error('Error uploading picture', event);
              this.error = true;
              this.promise.reject();
              this.triggerEvent('change');
            }
            onAbort() {
              this.promise.resolve(false);
              this.triggerEvent('change');
            }
            getHeaders = specs => {
              let headers = new Headers();
              const bearer = specs.bearer || this.#bearer;
              if (bearer) {
                headers.append('Authorization', `Bearer ${bearer}`);
              }
              if (specs.bearer) delete specs.bearer;
              const keys = Object.keys(specs);
              keys.forEach(key => {
                if (key === 'bearer') return;
                headers.append(key, specs[key]);
              });
              return headers;
            };
            async upload(data, url) {
              try {
                let headers = this.getHeaders({});
                const specs = {
                  method: 'post',
                  headers,
                  body: data
                };
                return fetch(url, specs);
              } catch (e) {
                console.error('error', e);
              }
            }
            async remove(data, url) {
              try {
                let headers = this.getHeaders({
                  'Content-Type': 'application/json'
                });
                const specs = {
                  method: 'delete',
                  headers,
                  body: JSON.stringify({
                    id: data
                  })
                };
                return fetch(url, specs);
              } catch (e) {
                console.error('error', e);
              }
            }
            async rollback(url) {
              try {
                let headers = this.getHeaders({
                  'Content-Type': 'application/json'
                });
                const specs = {
                  method: 'post',
                  headers
                };
                return fetch(url, specs);
              } catch (e) {
                console.error('error', e);
              }
            }
            abort() {
              if (this.promise) {
                this.promise.reject();
                this.triggerEvent('change');
              }
            }
          }
          exports.XHRLoader = XHRLoader;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Uploader",
        "name": "Uploader"
      }, {
        "im": "./xhr",
        "from": "XHRLoader",
        "name": "XHRLoader"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Uploader') && _export("Uploader", Uploader = require ? require('./index').Uploader : value);
        (require || prop === 'XHRLoader') && _export("XHRLoader", XHRLoader = require ? require('./xhr').XHRLoader : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEcmFnZ2FibGVVcGxvYWRlciIsInBhcmVudCIsImZpbGVzIiwiaXNWYWxpZERyYWciLCJpc3ZhbGlkRHJhZyIsImNvbnN0cnVjdG9yIiwib25Ecm9wIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGFUcmFuc2ZlciIsIml0ZW1zIiwibGVuZ3RoIiwiaSIsImZpbGUiLCJnZXRBc0ZpbGUiLCJwdXNoIiwicmVhZExvY2FsIiwib25EcmFnT3ZlciIsImFkZCIsInNlbGVjdG9yIiwib25kcm9wIiwib25kcmFnb3ZlciIsImV4cG9ydHMiLCJfY29yZSIsInJlcXVpcmUiLCJfbW9kZWwiLCJCYXNlRmlsZSIsIlJlYWN0aXZlTW9kZWwiLCJsb2FkZWQiLCJzcGVjcyIsInR5cGUiLCJyZWdFeHAiLCJlcnJvcnMiLCJfdG90YWwiLCJ0b3RhbCIsInZhbHVlIiwiX2l0ZW1zIiwiTWFwIiwiZW50cmllcyIsInZhbHVlcyIsIkZJTEVfVFlQRSIsIk9iamVjdCIsImZyZWV6ZSIsImRvY3VtZW50IiwiaW1hZ2UiLCJqc29uIiwiemlwIiwiYXVkaW8iLCJvbmxvYWQiLCJ0YXJnZXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25sb2FkZW5kIiwiI29ubG9hZGVuZCIsIm5hbWUiLCJnZXQiLCJzcmMiLCJyZXN1bHQiLCJzZXQiLCJ0cmlnZ2VyRXZlbnQiLCJzaXplIiwib25lcnJvciIsImNvbnNvbGUiLCJlcnJvciIsInZhbGlkYXRlIiwiaXNWYWxpZCIsImZpbmQiLCJpdGVtIiwicmVhZEZpbGUiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVzb2x2ZSIsInJlYWRBc0RhdGFVUkwiLCJ2YWxpZGF0ZUxvYWQiLCIjdmFsaWRhdGVMb2FkIiwidmFsaWRhdGVFeHRlbnNpb24iLCJhbGxvd2VkRXh0ZW5zaW9ucyIsImZpbGVFeHRlbnNpb24iLCJzdWJzdHJpbmciLCJsYXN0SW5kZXhPZiIsInRvTG93ZXJDYXNlIiwiaXNWYWxpZEV4dGVuc2lvbiIsImluY2x1ZGVzIiwiY2xlYW4iLCJmaWxlTGlzdCIsImZldGNoaW5nIiwicHJvbWlzZXMiLCJQcm9taXNlIiwiYWxsIiwiX21vYmlsZSIsIl93ZWIiLCJGaWxlc1VwbG9hZGVyIiwiaW5zdGFuY2UiLCJnZXRJbnN0YW5jZSIsImdsb2JhbFRoaXMiLCJwaG9uZWdhcCIsIk1vYmlsZUZpbGVzVXBsb2FkZXIiLCJXZWJGaWxlc1VwbG9hZGVyIiwiX2xvYWRlZCIsImJhc2U2NCIsIl9zcGVjcyIsIl9lcnJvcnMiLCJnZXRGaWxlcyIsImRhdGEiLCJ1cmwiLCJkaXIiLCJmaWxlbmFtZSIsInNwbGl0IiwiX2Jhc2UiLCJfZHJhZ2dhYmxlIiwiX2ZpbGVzIiwiX3hociIsIlVwbG9hZGVyIiwiZmlsZUlucHV0IiwiY3JlYXRlRWxlbWVudCIsImF0dHJzIiwiZHJhZ2dhYmxlIiwiY29udHJvbCIsImlucHV0Iiwib24iLCJsaXN0ZW5DaGFuZ2VzIiwidXBkYXRlSXRlbXMiLCJnZXRFcnJvcnMiLCJmaWxlc0xvYWRlZCIsInBhcmFtcyIsImhhc093blByb3BlcnR5IiwibXVsdGlwbGUiLCJzZXRBdHRyaWJ1dGVzIiwiI2xpc3RlbkNoYW5nZXMiLCJyZWFkeSIsInN0eWxlIiwiYWNjZXB0IiwicHJvcCIsInNldEF0dHJpYnV0ZSIsIiN1cGRhdGVJdGVtcyIsInVwbG9hZGVkRmlsZXMiLCJvcGVuRGlhbG9nIiwiY2xpY2siLCJwaWN0dXJlTG9hZGVkIiwicGljdHVyZUxvYWRpbmciLCJkZWxldGUiLCJmaWxlTmFtZSIsImZpbHRlciIsImRvTm90QWxsb3ciLCJpc0RyYXAiLCJjcmVhdGUiLCJkcmFnZ2FibGVTZWxlY3RvciIsImFkZExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkNoYW5nZUlucHV0IiwiYWZ0ZXIiLCJjdXJyZW50VGFyZ2V0Iiwid2luZG93Iiwic2V0VGltZW91dCIsInB1Ymxpc2giLCJhZGRpdGlvbmFsUGFyYW1zIiwiZm9ybSIsIkZvcm1EYXRhIiwiY29sbGVjdGlvbiIsIm1hcCIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJmb3JFYWNoIiwicGFyYW0iLCJ4aHIiLCJYSFJMb2FkZXIiLCJyZXNwb25zZSIsInVwbG9hZCIsInJlbW92ZSIsImlkcyIsInJvbGxiYWNrIiwicmVzaXplUGljdHVyZSIsInVyaSIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwicXVhbGl0eSIsImltZyIsIkltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJvcmllbnRhdGlvbiIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJ0b0RhdGFVUkwiLCJyb3RhdGUiLCJyb3RhdGVDYW52YXMiLCJjdHhSb3RhdGUiLCJpbWdSb3RhdGUiLCJ0cmFuc2xhdGUiLCJNYXRoIiwiUEkiLCJpbWFnZVJvdGF0ZWQiLCJhamEiLCJfd3JhcHBlcnMiLCJ1cGxvYWRlZCIsInByb2dyZXNzIiwidW5kZWZpbmVkIiwiYmVhcmVyIiwic2Vzc2lvbiIsInRva2VuIiwidXBsb2FkaW5nIiwiaXNVcGxvYWRlZCIsInVwbG9hZFByb2dyZXNzIiwiaGFzRXJyb3IiLCJvblByb2dyZXNzIiwibGVuZ3RoQ29tcHV0YWJsZSIsInBlcmNlbnQiLCJyb3VuZCIsInBhcnNlSW50IiwidG9TdHJpbmciLCJvbkNvbXBsZXRlZCIsIm9uRXJyb3IiLCJyZWplY3QiLCJvbkFib3J0IiwiZ2V0SGVhZGVycyIsImhlYWRlcnMiLCJIZWFkZXJzIiwia2V5cyIsImtleSIsIm1ldGhvZCIsImJvZHkiLCJmZXRjaCIsImUiLCJpZCIsImFib3J0Il0sInNvdXJjZXMiOlsiL2RyYWdnYWJsZS50cyIsIi9maWxlcy9iYXNlLnRzIiwiL2ZpbGVzL2luZGV4LnRzIiwiL2ZpbGVzL21vYmlsZS50cyIsIi9maWxlcy93ZWIudHMiLCIvaW5kZXgudHMiLCIvcmVzaXplLnRzIiwiL3hoci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7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