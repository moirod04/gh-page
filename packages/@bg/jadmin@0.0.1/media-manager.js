System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.1.14/model", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, getMedia, mediaDevice, __beyond_pkg, hmr;
  _export({
    getMedia: void 0,
    mediaDevice: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive1114Model) {
      dependency_1 = _beyondJsReactive1114Model;
    }, function (_beyondJsKernel019Core) {
      dependency_2 = _beyondJsKernel019Core;
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
          "vspecifier": "@bg/jadmin@0.0.1/media-manager"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/kernel/core', dependency_2]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./desktop
      *************************/
      ims.set('./desktop', {
        hash: 1750633276,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DesktopMediaDevice = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _files = require("./files");
          var _input = require("./input");
          var _xhr = require("./xhr");
          class MediaDevice extends _model.ReactiveModel {
            static instance;
            #selector;
            PLATFORM = 'DESKTOP';
            #stream;
            #constraints = {};
            #inputFile;
            #files;
            get isReady() {
              return true;
            }
            constructor() {
              super();
              this.#files = new _files.MediaFiles(this, {});
            }
            async getUserMedia(constraints) {
              if (JSON.stringify(this.#constraints) === JSON.stringify(constraints)) return this.#stream;
              this.#constraints = constraints;
              this.#stream = await navigator.mediaDevices.getUserMedia(constraints);
              return this.#stream;
            }
            newMediaFiles = () => this.#files = new _files.MediaFiles(this, {});
            async activateCamera(constraints, selector) {
              const stream = await this.getUserMedia(constraints);
              this.#stream = stream;
              selector.srcObject = stream;
              this.#selector = selector;
            }
            static getInstance() {
              MediaDevice.instance = new MediaDevice();
              return MediaDevice.instance;
            }
            desactivateCamera() {
              if (!this.#stream) {
                return;
              }
              this.#stream.getTracks().forEach(track => {
                track.stop();
                this.#stream.removeTrack(track);
              });
              if (this.#selector) {
                this.#selector.srcObject = undefined;
                this.#selector = undefined;
              }
              this.#constraints = undefined;
              this.#stream = undefined;
            }
            /**
             *
             * @param options
             * @returns
             */
            async getPicture() {
              const stream = await this.getUserMedia({
                video: true,
                audio: false
              });
              const imageCapture = new globalThis.ImageCapture(stream.getVideoTracks()[0]);
              const blob = await imageCapture.takePhoto();
              const img = URL.createObjectURL(blob);
              this.#files._items.set(img, blob);
              this.clean();
              return blob;
            }
            clean() {
              this.#constraints = {};
              if (!this.#stream) {
                return;
              }
              this.#stream.getTracks().forEach(track => {
                track.stop();
                this.#stream.removeTrack(track);
              });
              if (this.#selector) {
                this.#selector.srcObject = undefined;
                this.#selector = undefined;
              }
              this.#stream = undefined;
            }
            async getVideoStream() {
              return await this.getUserMedia({
                video: true,
                audio: false
              });
            }
            takePicture(options) {}
            openGallery(selector, specs = {}) {}
            upload(url, specs = {}) {
              const form = new FormData();
            }
            setInputFile(input) {
              this.#inputFile = new _input.InputFile(input, this.#files);
              return this.#inputFile;
            }
            cleanFiles = () => {
              this.#files.clean();
            };
            publish = async (url, params) => {
              try {
                const form = new FormData();
                const collection = this.#files;
                const name = collection.total > 1 ? `${params.name}[]` : params.name;
                collection.entries.forEach(item => form.append(name, item));
                for (let param in params) {
                  if (!params.hasOwnProperty(param)) continue;
                  form.append(param, params[param]);
                }
                ;
                const xhr = new _xhr.XHRLoader();
                const response = await xhr.upload(form, url);
                const json = await response.json();
                this.cleanFiles();
                return json;
              } catch (error) {
                console.error(error);
              }
            };
          }
          const DesktopMediaDevice = exports.DesktopMediaDevice = MediaDevice;
        }
      });

      /******************************
      INTERNAL MODULE: ./file-manager
      ******************************/

      ims.set('./file-manager', {
        hash: 4123506600,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getUrl = getUrl;
          var _core = require("@beyond-js/kernel/core");
          let promise;
          /**
           * REturns a valid url of the image loaded
           *
           * @platform mobile
           * @param data
           * @returns
           */
          function getUrl(data) {
            if (promise) return promise;
            promise = new _core.PendingPromise();
            const process = function processFile(entry) {
              entry.file(file => {
                const reader = new FileReader();
                reader.onloadend = a => {
                  promise.resolve(reader.result);
                  promise = undefined;
                };
                reader.readAsDataURL(file);
              });
            };
            globalThis.resolveLocalFileSystemURL(data, process);
            return promise;
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./files/index
      *****************************/

      ims.set('./files/index', {
        hash: 1928895660,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MediaFiles = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _model = require("@beyond-js/reactive/model");
          class MediaFiles extends _model.ReactiveModel {
            #loaded = 0;
            #specs;
            #type;
            regExp = /[^\w\d.]/g;
            #errors = [];
            #promise;
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
            FILE_TYPE = Object.freeze({
              document: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain', 'application/pdf'],
              image: ['image/png', 'image/jpeg', 'image/gif'],
              json: ['application/json'],
              zip: ['application/x-zip-compressed']
            });
            #onload = event => {
              if (event.target?.removeEventListener) {
                event.target.removeEventListener('load', this.#onload);
              }
              if (this.#specs.onload && typeof this.#specs.onload === 'function') {
                this.#specs.onload(event);
              }
            };
            #onloadend = (event, file) => {
              this.#loaded = this.#loaded + 1;
              file.src = event.target.result;
              this.#processFile(file);
              if (event.target?.removeEventListener) {
                event.target.removeEventListener('onloadend', this.#onloadend);
              }
              this.triggerEvent('file.loaded');
              if (this.#loaded === this._items.size) this.triggerEvent('loadend');
              if (this.#specs.onloadend && typeof this.#specs.onloadend === 'function') {
                this.#specs.onload(event);
              }
              ;
            };
            #processFile(file) {
              const name = file.name.replace(this.regExp, '');
              file = this._items.get(name);
              this._items.set(name, file);
            }
            #onerror = event => console.error(4, event);
            validate = file => {
              const isValid = !!this.FILE_TYPE[this.#type].find(item => item === file.type);
              if (!isValid) {
                this.#errors.push(file.name.replace(this.regExp, ''));
              }
              return isValid;
            };
            #readFile = async file => {
              if (this.#type !== 'any') {
                const isValid = await this.validate(file);
                if (!isValid) {
                  this.triggerEvent('error');
                  return;
                }
              }
              const reader = new FileReader();
              reader.onload = event => this.#onload(event);
              reader.onloadend = event => this.#onloadend(event, file);
              reader.onerror = event => this.#onerror(event);
              reader.readAsDataURL(file);
            };
            #validateLoad = () => {
              if (this.#loaded === this._items.size) {}
            };
            clean = () => {
              this._items = new Map();
              this.#loaded = 0;
              this.triggerEvent("update");
            };
            /**
             * Read Local files uploaded from an input file
             *
             * @param fileList
             */
            readLocal = async fileList => {
              const promises = [];
              for (let i = 0; i < fileList.length; ++i) {
                const file = fileList[i];
                this._items.set(file.name.replace(this.regExp, ''), file);
                promises.push(this.#readFile(file));
              }
              const response = await Promise.all(promises);
            };
            getMobileUrl(data) {
              if (this.#promise) return this.#promise;
              this.#promise = new _core.PendingPromise();
              const process = entry => {
                entry.file(file => {
                  const reader = new FileReader();
                  reader.onloadend = e => {
                    const imgBlob = new Blob([reader.result], {
                      type: file.type
                    });
                    const name = file.name.replace(this.regExp, '');
                    file.blob = imgBlob;
                    this._items.set(name, file);
                    //returns a valid element to show as image
                    this.#promise.resolve(URL.createObjectURL(imgBlob));
                    this.#promise = undefined;
                  };
                  this._items.set(file.name.replace(this.regExp, ''), file);
                  reader.readAsArrayBuffer(file);
                });
              };
              // cordova file plugin
              globalThis.resolveLocalFileSystemURL(data, process);
              return this.#promise;
            }
          }
          exports.MediaFiles = MediaFiles;
        }
      });

      /**************************
      INTERNAL MODULE: ./i-camera
      **************************/

      ims.set('./i-camera', {
        hash: 1945745868,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 492250194,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getMedia = getMedia;
          exports.mediaDevice = void 0;
          var _desktop = require("./desktop");
          var _mobile = require("./mobile");
          let media;
          /*bundle*/
          function getMedia(clean = false) {
            if (clean) media = undefined;
            if (media) return media;
            const types = Object.freeze({
              MOBILE: 0,
              DESKTOP: 1
            });
            const deviceType = globalThis.cordova ? types.MOBILE : types.DESKTOP;
            const models = Object.freeze({
              1: _desktop.DesktopMediaDevice.getInstance(),
              0: _mobile.MobileMediaDevice.getInstance()
            });
            media = models[deviceType];
            return media;
          }
          const /*bundle*/mediaDevice = exports.mediaDevice = getMedia();
        }
      });

      /***********************
      INTERNAL MODULE: ./input
      ***********************/

      ims.set('./input', {
        hash: 2597049908,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InputFile = void 0;
          var _model = require("@beyond-js/reactive/model");
          class InputFile extends _model.ReactiveModel {
            #input = document.createElement('input');
            get input() {
              return this.#input;
            }
            #errors;
            #selector;
            #files;
            get files() {
              return this.#files;
            }
            constructor(selector, files, specs = {}) {
              super();
              this.#selector = selector;
              this.#files = files;
              this.#files.on('error', this.getErrors);
              this.#files.on('loadend', this.filesLoaded);
              this.setAttributes(specs);
              if (selector) this.create();
            }
            filesLoaded = () => this.triggerEvent('loadend');
            pictureLoaded = () => this.triggerEvent('pictureLoaded');
            pictureLoading = () => this.triggerEvent('pictureLoading');
            // getErrors = () => (this.#errors = this.files.errors);
            getErrors = () => console.error('error');
            openDialog = () => {
              this.#input.click();
            };
            setAttributes = specs => {
              if (!specs) specs = {};
              let attrs = {
                type: 'file',
                style: 'display:none',
                name: 'input_upload',
                ...specs
              };
              for (let prop in attrs) {
                this.#input.setAttribute(prop, attrs[prop]);
              }
            };
            clean = async () => {
              return this.#files.clean();
              // await this.#mobileFiles.clean();
            };
            #onChangeInput = async event => {
              await this.clean();
              const target = event.currentTarget;
              this.#files.total = target.files.length;
              this.#files.readLocal(target.files);
            };
            create() {
              /**
               * Adds de click and change events into the input file
               */
              const addListeners = () => {
                if (!this.#selector) return;
                this.#selector.addEventListener('click', this.openDialog);
                this.#input.addEventListener('change', this.#onChangeInput);
              };
              this.#selector.after(this.#input);
              addListeners();
            }
            cleanInput = () => {
              this.#input.parentNode.removeChild(this.#input);
              this.#input = undefined;
            };
          }
          exports.InputFile = InputFile;
        }
      });

      /****************************
      INTERNAL MODULE: ./interfaces
      ****************************/

      ims.set('./interfaces', {
        hash: 2938605133,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /************************
      INTERNAL MODULE: ./mobile
      ************************/

      ims.set('./mobile', {
        hash: 2482904101,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileMediaDevice = exports.MediaCameraDevice = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@beyond-js/kernel/core");
          var _files = require("./files");
          var _xhr = require("./xhr");
          class MediaCameraDevice extends _model.ReactiveModel {
            #source;
            #selector;
            PLATFORM = 'MOBILE';
            static instance;
            #files;
            #DEFAULT_OPTIONS = {
              // Some common settings are 20, 50, and 100
              quality: 80,
              destinationType: globalThis.Camera?.DestinationType?.FILE_URI,
              // In this app, dynamically set the picture source, Camera or photo gallery
              sourceType: 1,
              encodingType: globalThis.Camera?.EncodingType.JPEG,
              mediaType: globalThis.Camera?.MediaType.PICTURE,
              allowEdit: false,
              correctOrientation: true
            };
            constructor() {
              super();
              this.#files = new _files.MediaFiles(this, {});
            }
            #promise;
            get isReady() {
              return !!globalThis.Camera;
            }
            get source() {
              return this.#source;
            }
            #sourceType = 0;
            get sourceType() {
              return this.#sourceType;
            }
            set sourceType(value) {
              if (this.#sourceType === value) return;
              this.#sourceType = value;
            }
            #mediaType = globalThis.Camera?.MediaType.PICTURE; // default
            get mediaType() {
              return this.#mediaType;
            }
            set mediaType(value) {
              if (this.#mediaType === value) return;
              this.#mediaType = value;
            }
            set source(value) {
              this.#source = value;
            }
            onSuccess = async function successCallback(data) {
              const response = await this.#files.getMobileUrl(data);
              this.#promise.resolve(response);
              this.#promise = undefined;
            };
            onFail = message => {
              console.error('Failed because: ' + message);
              this.#promise.reject();
              this.#promise = undefined;
            };
            /**
             *
             * @param srcType number 1 = camera, 0 = photolibrary
             * @returns
             */
            setOptions = overwrites => {
              return {
                ...this.#DEFAULT_OPTIONS,
                ...overwrites
              };
            };
            cleanFiles = () => {
              this.#files.clean();
            };
            getPicture = options => {
              if (this.#promise) return this.#promise;
              this.#promise = new _core.PendingPromise();
              navigator.camera?.getPicture(response => this.onSuccess(response), this.onFail, this.setOptions(options));
              return this.#promise;
            };
            openGallery(selector) {
              this.#selector = selector;
              return this.getPicture({
                sourceType: 0
              });
            }
            static getInstance() {
              MediaCameraDevice.instance = new MediaCameraDevice();
              return MediaCameraDevice.instance;
            }
            publish = async (url, params) => {
              try {
                const form = new FormData();
                const collection = this.#files;
                const name = collection.total > 1 ? `${params.name}[]` : params.name;
                collection.entries.forEach(item => {
                  form.append(name, item.blob, item.name);
                });
                for (let param in params) {
                  if (!params.hasOwnProperty(param)) continue;
                  form.append(param, params[param]);
                }
                const xhr = new _xhr.XHRLoader();
                const response = await xhr.upload(form, url);
                this.#files = new _files.MediaFiles(this, {});
                return response.json();
              } catch (error) {
                console.error(error);
              }
            };
          }
          exports.MediaCameraDevice = MediaCameraDevice;
          const MobileMediaDevice = exports.MobileMediaDevice = MediaCameraDevice;
        }
      });

      /*********************
      INTERNAL MODULE: ./xhr
      *********************/

      ims.set('./xhr', {
        hash: 434915502,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.XHRLoader = void 0;
          var _model = require("@beyond-js/reactive/model");
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
              this.triggerEvent("change");
            }
            onCompleted(event) {
              this.uploaded = true;
              this.promise.resolve();
              this.triggerEvent("change");
              setTimeout(() => {
                this.promise = undefined;
                this.triggerEvent("change");
              }, 100);
            }
            onError(event) {
              console.error("Error uploading picture", event);
              this.error = true;
              this.promise.reject();
              this.triggerEvent("change");
            }
            onAbort() {
              this.promise.resolve(false);
              this.triggerEvent("change");
            }
            async upload(data, url) {
              try {
                const specs = {
                  method: "post",
                  body: data
                };
                const response = await fetch(url, specs);
                return response;
              } catch (e) {
                console.error("error", e);
              }
            }
            abort() {
              if (this.promise) {
                this.promise.reject();
                this.triggerEvent("change");
              }
            }
          }
          exports.XHRLoader = XHRLoader;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "getMedia",
        "name": "getMedia"
      }, {
        "im": "./index",
        "from": "mediaDevice",
        "name": "mediaDevice"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'getMedia') && _export("getMedia", getMedia = require ? require('./index').getMedia : value);
        (require || prop === 'mediaDevice') && _export("mediaDevice", mediaDevice = require ? require('./index').mediaDevice : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2ZpbGVzIiwiX2lucHV0IiwiX3hociIsIk1lZGlhRGV2aWNlIiwiUmVhY3RpdmVNb2RlbCIsImluc3RhbmNlIiwic2VsZWN0b3IiLCJQTEFURk9STSIsInN0cmVhbSIsImNvbnN0cmFpbnRzIiwiaW5wdXRGaWxlIiwiZmlsZXMiLCJpc1JlYWR5IiwiY29uc3RydWN0b3IiLCJNZWRpYUZpbGVzIiwiZ2V0VXNlck1lZGlhIiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsIm5ld01lZGlhRmlsZXMiLCJhY3RpdmF0ZUNhbWVyYSIsInNyY09iamVjdCIsImdldEluc3RhbmNlIiwiZGVzYWN0aXZhdGVDYW1lcmEiLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJzdG9wIiwicmVtb3ZlVHJhY2siLCJ1bmRlZmluZWQiLCJnZXRQaWN0dXJlIiwidmlkZW8iLCJhdWRpbyIsImltYWdlQ2FwdHVyZSIsImdsb2JhbFRoaXMiLCJJbWFnZUNhcHR1cmUiLCJnZXRWaWRlb1RyYWNrcyIsImJsb2IiLCJ0YWtlUGhvdG8iLCJpbWciLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJfaXRlbXMiLCJzZXQiLCJjbGVhbiIsImdldFZpZGVvU3RyZWFtIiwidGFrZVBpY3R1cmUiLCJvcHRpb25zIiwib3BlbkdhbGxlcnkiLCJzcGVjcyIsInVwbG9hZCIsInVybCIsImZvcm0iLCJGb3JtRGF0YSIsInNldElucHV0RmlsZSIsImlucHV0IiwiSW5wdXRGaWxlIiwiY2xlYW5GaWxlcyIsInB1Ymxpc2giLCJwYXJhbXMiLCJjb2xsZWN0aW9uIiwibmFtZSIsInRvdGFsIiwiZW50cmllcyIsIml0ZW0iLCJhcHBlbmQiLCJwYXJhbSIsImhhc093blByb3BlcnR5IiwieGhyIiwiWEhSTG9hZGVyIiwicmVzcG9uc2UiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiRGVza3RvcE1lZGlhRGV2aWNlIiwiZXhwb3J0cyIsIl9jb3JlIiwicHJvbWlzZSIsImdldFVybCIsImRhdGEiLCJQZW5kaW5nUHJvbWlzZSIsInByb2Nlc3MiLCJwcm9jZXNzRmlsZSIsImVudHJ5IiwiZmlsZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJhIiwicmVzb2x2ZSIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJyZXNvbHZlTG9jYWxGaWxlU3lzdGVtVVJMIiwibG9hZGVkIiwidHlwZSIsInJlZ0V4cCIsImVycm9ycyIsIl90b3RhbCIsInZhbHVlIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJwYXJlbnQiLCJGSUxFX1RZUEUiLCJPYmplY3QiLCJmcmVlemUiLCJkb2N1bWVudCIsImltYWdlIiwiemlwIiwib25sb2FkIiwiZXZlbnQiLCJ0YXJnZXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiI29ubG9hZGVuZCIsInNyYyIsInRyaWdnZXJFdmVudCIsInNpemUiLCIjcHJvY2Vzc0ZpbGUiLCJyZXBsYWNlIiwiZ2V0Iiwib25lcnJvciIsInZhbGlkYXRlIiwiaXNWYWxpZCIsImZpbmQiLCJwdXNoIiwicmVhZEZpbGUiLCJ2YWxpZGF0ZUxvYWQiLCIjdmFsaWRhdGVMb2FkIiwicmVhZExvY2FsIiwiZmlsZUxpc3QiLCJwcm9taXNlcyIsImkiLCJsZW5ndGgiLCJQcm9taXNlIiwiYWxsIiwiZ2V0TW9iaWxlVXJsIiwiZSIsImltZ0Jsb2IiLCJCbG9iIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJkZWZpbmVQcm9wZXJ0eSIsIl9kZXNrdG9wIiwiX21vYmlsZSIsIm1lZGlhIiwiZ2V0TWVkaWEiLCJ0eXBlcyIsIk1PQklMRSIsIkRFU0tUT1AiLCJkZXZpY2VUeXBlIiwiY29yZG92YSIsIm1vZGVscyIsIk1vYmlsZU1lZGlhRGV2aWNlIiwibWVkaWFEZXZpY2UiLCJjcmVhdGVFbGVtZW50Iiwib24iLCJnZXRFcnJvcnMiLCJmaWxlc0xvYWRlZCIsInNldEF0dHJpYnV0ZXMiLCJjcmVhdGUiLCJwaWN0dXJlTG9hZGVkIiwicGljdHVyZUxvYWRpbmciLCJvcGVuRGlhbG9nIiwiY2xpY2siLCJhdHRycyIsInN0eWxlIiwicHJvcCIsInNldEF0dHJpYnV0ZSIsIm9uQ2hhbmdlSW5wdXQiLCJjdXJyZW50VGFyZ2V0IiwiYWRkTGlzdGVuZXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFmdGVyIiwiY2xlYW5JbnB1dCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIk1lZGlhQ2FtZXJhRGV2aWNlIiwic291cmNlIiwiREVGQVVMVF9PUFRJT05TIiwicXVhbGl0eSIsImRlc3RpbmF0aW9uVHlwZSIsIkNhbWVyYSIsIkRlc3RpbmF0aW9uVHlwZSIsIkZJTEVfVVJJIiwic291cmNlVHlwZSIsImVuY29kaW5nVHlwZSIsIkVuY29kaW5nVHlwZSIsIkpQRUciLCJtZWRpYVR5cGUiLCJNZWRpYVR5cGUiLCJQSUNUVVJFIiwiYWxsb3dFZGl0IiwiY29ycmVjdE9yaWVudGF0aW9uIiwib25TdWNjZXNzIiwic3VjY2Vzc0NhbGxiYWNrIiwib25GYWlsIiwibWVzc2FnZSIsInJlamVjdCIsInNldE9wdGlvbnMiLCJvdmVyd3JpdGVzIiwiY2FtZXJhIiwidXBsb2FkZWQiLCJwcm9ncmVzcyIsInVwbG9hZGluZyIsImlzVXBsb2FkZWQiLCJ1cGxvYWRQcm9ncmVzcyIsImhhc0Vycm9yIiwib25Qcm9ncmVzcyIsImxlbmd0aENvbXB1dGFibGUiLCJwZXJjZW50IiwiTWF0aCIsInJvdW5kIiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsIm9uQ29tcGxldGVkIiwic2V0VGltZW91dCIsIm9uRXJyb3IiLCJvbkFib3J0IiwibWV0aG9kIiwiYm9keSIsImZldGNoIiwiYWJvcnQiXSwic291cmNlcyI6WyIvY29kZS90cy9kZXNrdG9wLnRzIiwiL2NvZGUvdHMvZmlsZS1tYW5hZ2VyLnRzIiwiL2NvZGUvdHMvZmlsZXMvaW5kZXgudHMiLCIvaS1jYW1lcmEudHMiLCIvY29kZS90cy9pbmRleC50cyIsIi9jb2RlL3RzL2lucHV0LnRzIiwiL2ludGVyZmFjZXMudHMiLCIvY29kZS90cy9tb2JpbGUudHMiLCIvY29kZS90cy94aHIudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFFQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxJQUFBLEdBQUFILE9BQUE7VUFFQSxNQUFNSSxXQUFZLFNBQVFMLE1BQUEsQ0FBQU0sYUFBaUI7WUFDbEMsT0FBT0MsUUFBUTtZQUV2QixDQUFBQyxRQUFTO1lBQ0FDLFFBQVEsR0FBVyxTQUFTO1lBQ3JDLENBQUFDLE1BQU87WUFDUCxDQUFBQyxXQUFZLEdBQUcsRUFBRTtZQUNqQixDQUFBQyxTQUFVO1lBQ1YsQ0FBQUMsS0FBTTtZQUVOLElBQUlDLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUk7WUFDWjtZQUVBQyxZQUFBO2NBQ0MsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUFGLEtBQU0sR0FBRyxJQUFJWCxNQUFBLENBQUFjLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO1lBQ3ZDO1lBRVEsTUFBTUMsWUFBWUEsQ0FBQ04sV0FBbUM7Y0FDN0QsSUFBSU8sSUFBSSxDQUFDQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUFSLFdBQVksQ0FBQyxLQUFLTyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1IsV0FBVyxDQUFDLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQUQsTUFBTztjQUMxRixJQUFJLENBQUMsQ0FBQUMsV0FBWSxHQUFHQSxXQUFXO2NBQy9CLElBQUksQ0FBQyxDQUFBRCxNQUFPLEdBQUcsTUFBTVUsU0FBUyxDQUFDQyxZQUFZLENBQUNKLFlBQVksQ0FBQ04sV0FBVyxDQUFDO2NBQ3JFLE9BQU8sSUFBSSxDQUFDLENBQUFELE1BQU87WUFD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SyxDQUFDaEQsS0FBSyxDQUFDO2dCQUM5RCxJQUFJLENBQUMySSxRQUFRLEdBQUdVLFFBQVEsQ0FBQ0gsT0FBTyxDQUFDSSxRQUFRLEVBQUUsQ0FBQzs7Y0FHN0MsSUFBSSxDQUFDakcsWUFBWSxDQUFDLFFBQVEsQ0FBQztZQUM1QjtZQUVRa0csV0FBV0EsQ0FBQ3ZHLEtBQW9CO2NBQ3ZDLElBQUksQ0FBQzBGLFFBQVEsR0FBRyxJQUFJO2NBQ3BCLElBQUksQ0FBQzNILE9BQU8sQ0FBQ1ksT0FBTyxFQUFFO2NBQ3RCLElBQUksQ0FBQzBCLFlBQVksQ0FBQyxRQUFRLENBQUM7Y0FFM0JtRyxVQUFVLENBQUMsTUFBSztnQkFDZixJQUFJLENBQUN6SSxPQUFPLEdBQUdoRCxTQUFTO2dCQUN4QixJQUFJLENBQUNzRixZQUFZLENBQUMsUUFBUSxDQUFDO2NBQzVCLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDUjtZQUVRb0csT0FBT0EsQ0FBQ3pHLEtBQW9CO2NBQ25DckMsT0FBTyxDQUFDRCxLQUFLLENBQUMseUJBQXlCLEVBQUVzQyxLQUFLLENBQUM7Y0FDL0MsSUFBSSxDQUFDdEMsS0FBSyxHQUFHLElBQUk7Y0FDakIsSUFBSSxDQUFDSyxPQUFPLENBQUN1SCxNQUFNLEVBQUU7Y0FDckIsSUFBSSxDQUFDakYsWUFBWSxDQUFDLFFBQVEsQ0FBQztZQUM1QjtZQUVRcUcsT0FBT0EsQ0FBQTtjQUNkLElBQUksQ0FBQzNJLE9BQU8sQ0FBQ1ksT0FBTyxDQUFDLEtBQUssQ0FBQztjQUMzQixJQUFJLENBQUMwQixZQUFZLENBQUMsUUFBUSxDQUFDO1lBQzVCO1lBRU8sTUFBTWpFLE1BQU1BLENBQUM2QixJQUFjLEVBQUU1QixHQUFXO2NBQzlDLElBQUk7Z0JBQ0gsTUFBTUYsS0FBSyxHQUFHO2tCQUNid0ssTUFBTSxFQUFFLE1BQU07a0JBQ2RDLElBQUksRUFBRTNJO2lCQUNOO2dCQUNELE1BQU1ULFFBQVEsR0FBRyxNQUFNcUosS0FBSyxDQUFDeEssR0FBRyxFQUFFRixLQUFLLENBQUM7Z0JBQ3hDLE9BQU9xQixRQUFRO2VBQ2YsQ0FBQyxPQUFPa0UsQ0FBQyxFQUFFO2dCQUNYL0QsT0FBTyxDQUFDRCxLQUFLLENBQUMsT0FBTyxFQUFFZ0UsQ0FBQyxDQUFDOztZQUUzQjtZQUVPb0YsS0FBS0EsQ0FBQTtjQUNYLElBQUksSUFBSSxDQUFDL0ksT0FBTyxFQUFFO2dCQUNqQixJQUFJLENBQUNBLE9BQU8sQ0FBQ3VILE1BQU0sRUFBRTtnQkFDckIsSUFBSSxDQUFDakYsWUFBWSxDQUFDLFFBQVEsQ0FBQzs7WUFFN0I7O1VBQ0F4QyxPQUFBLENBQUFOLFNBQUEsR0FBQUEsU0FBQSIsImlnbm9yZUxpc3QiOltdfQ==