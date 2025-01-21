System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.1.2/icons", "sgs-workflow@1.0.0/config", "uuid@9.0.1", "pragmate-ui@0.1.2/components", "pragmate-ui@0.1.2/modal", "pragmate-ui@0.1.2/alert", "@bgroup/http-suite@1.0.5/api", "sgs-workflow@1.0.0/wrappers", "pragmate-ui@0.1.2/form", "@bgroup/helpers@1.0.5/hooks", "@bgroup/wise-form@0.0.4/form", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@0.1.2/empty", "@beyond-js/reactive@1.1.14/model", "sgs-workflow@1.0.0/entities", "sgs-workflow@1.0.0/select", "dayjs@1.11.10", "@bgroup/jview@1.0.3/jview", "sgs-workflow@1.0.0/uploader", "sgs-workflow@1.0.0/helpers", "react-select@5.8.0/creatable", "mathjs@12.4.1", "tippy.js@6.3.7", "pragmate-ui@0.1.2/collapsible"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, bimport, __Bundle, __pkg, ims, IContext, DinamycFormContext, useDinamycFormContext, Hr, AddFile, AlertModal, ButtonGroup, Button, Checkbox, Comments, CurrencyInput, CompleteDate, Decimal, DataServicePages, FormulaCalculator, FieldsWrapper, Tree, IconCheckInput, InputDate, JView, MaterialDischargeQuoation, InputNumber, PercentageInput, PlusInput, InputReferenceNumber, Select, TextField, InputText, TopLabel, InputTrafficLight, TrafficLight, Uploader, ValidationModal, ATMTitles, IndicatorsField, JViewTitle, LoadInstance, Collapsible, CollapsibleContent, CollapsibleHeader, DependentCollapsible, Div, Label, Modal, Section, ContainerTooltip, Tooltip, TotalizerAFA, Totalizer, __beyond_pkg, hmr;
  _export({
    IContext: void 0,
    DinamycFormContext: void 0,
    useDinamycFormContext: void 0,
    Hr: void 0,
    AddFile: void 0,
    AlertModal: void 0,
    ButtonGroup: void 0,
    Button: void 0,
    Checkbox: void 0,
    Comments: void 0,
    CurrencyInput: void 0,
    CompleteDate: void 0,
    Decimal: void 0,
    DataServicePages: void 0,
    FormulaCalculator: void 0,
    FieldsWrapper: void 0,
    Tree: void 0,
    IconCheckInput: void 0,
    InputDate: void 0,
    JView: void 0,
    MaterialDischargeQuoation: void 0,
    InputNumber: void 0,
    PercentageInput: void 0,
    PlusInput: void 0,
    InputReferenceNumber: void 0,
    Select: void 0,
    TextField: void 0,
    InputText: void 0,
    TopLabel: void 0,
    InputTrafficLight: void 0,
    TrafficLight: void 0,
    Uploader: void 0,
    ValidationModal: void 0,
    ATMTitles: void 0,
    IndicatorsField: void 0,
    JViewTitle: void 0,
    LoadInstance: void 0,
    Collapsible: void 0,
    CollapsibleContent: void 0,
    CollapsibleHeader: void 0,
    DependentCollapsible: void 0,
    Div: void 0,
    Label: void 0,
    Modal: void 0,
    Section: void 0,
    ContainerTooltip: void 0,
    Tooltip: void 0,
    TotalizerAFA: void 0,
    Totalizer: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi012Icons) {
      dependency_3 = _pragmateUi012Icons;
    }, function (_sgsWorkflow100Config) {
      dependency_4 = _sgsWorkflow100Config;
    }, function (_uuid2) {
      dependency_5 = _uuid2;
    }, function (_pragmateUi012Components) {
      dependency_6 = _pragmateUi012Components;
    }, function (_pragmateUi012Modal) {
      dependency_7 = _pragmateUi012Modal;
    }, function (_pragmateUi012Alert) {
      dependency_8 = _pragmateUi012Alert;
    }, function (_bgroupHttpSuite105Api) {
      dependency_9 = _bgroupHttpSuite105Api;
    }, function (_sgsWorkflow100Wrappers) {
      dependency_10 = _sgsWorkflow100Wrappers;
    }, function (_pragmateUi012Form) {
      dependency_11 = _pragmateUi012Form;
    }, function (_bgroupHelpers105Hooks) {
      dependency_12 = _bgroupHelpers105Hooks;
    }, function (_bgroupWiseForm004Form) {
      dependency_13 = _bgroupWiseForm004Form;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_14 = _beyondJsReact18Widgets104Hooks;
    }, function (_pragmateUi012Empty) {
      dependency_15 = _pragmateUi012Empty;
    }, function (_beyondJsReactive1114Model) {
      dependency_16 = _beyondJsReactive1114Model;
    }, function (_sgsWorkflow100Entities) {
      dependency_17 = _sgsWorkflow100Entities;
    }, function (_sgsWorkflow100Select) {
      dependency_18 = _sgsWorkflow100Select;
    }, function (_dayjs2) {
      dependency_19 = _dayjs2;
    }, function (_bgroupJview103Jview) {
      dependency_20 = _bgroupJview103Jview;
    }, function (_sgsWorkflow100Uploader) {
      dependency_21 = _sgsWorkflow100Uploader;
    }, function (_sgsWorkflow100Helpers) {
      dependency_22 = _sgsWorkflow100Helpers;
    }, function (_reactSelect580Creatable) {
      dependency_23 = _reactSelect580Creatable;
    }, function (_mathjs2) {
      dependency_24 = _mathjs2;
    }, function (_tippyJs) {
      dependency_25 = _tippyJs;
    }, function (_pragmateUi012Collapsible) {
      dependency_26 = _pragmateUi012Collapsible;
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
          "vspecifier": "sgs-workflow@1.0.0/components/dinamyc-form"
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['sgs-workflow/config', dependency_4], ['uuid', dependency_5], ['pragmate-ui/components', dependency_6], ['pragmate-ui/modal', dependency_7], ['pragmate-ui/alert', dependency_8], ['@bgroup/http-suite/api', dependency_9], ['sgs-workflow/wrappers', dependency_10], ['pragmate-ui/form', dependency_11], ['@bgroup/helpers/hooks', dependency_12], ['@bgroup/wise-form/form', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/empty', dependency_15], ['@beyond-js/reactive/model', dependency_16], ['sgs-workflow/entities', dependency_17], ['sgs-workflow/select', dependency_18], ['dayjs', dependency_19], ['@bgroup/jview/jview', dependency_20], ['sgs-workflow/uploader', dependency_21], ['sgs-workflow/helpers', dependency_22], ['react-select/creatable', dependency_23], ['mathjs', dependency_24], ['tippy.js', dependency_25], ['pragmate-ui/collapsible', dependency_26]]);
      brequire('@beyond-js/kernel/styles').styles.register('sgs-workflow@1.0.0/components/dinamyc-form');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 1316569648,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useDinamycFormContext = exports.DinamycFormContext = void 0;
          var _react = require("react");
          /*bundle*/
          const DinamycFormContext = exports.DinamycFormContext = _react.default.createContext({});
          /*bundle*/
          const useDinamycFormContext = () => _react.default.useContext(DinamycFormContext);
          exports.useDinamycFormContext = useDinamycFormContext;
        }
      });

      /**************************
      INTERNAL MODULE: ./hr/index
      **************************/

      ims.set('./hr/index', {
        hash: 3467046278,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Hr = void 0;
          var _react = require("react");
          /*bundle*/
          const Hr = () => {
            return _react.default.createElement("hr", {
              className: 'line-hr'
            });
          };
          exports.Hr = Hr;
        }
      });

      /***************************************************
      INTERNAL MODULE: ./inputs/add-file/attachments/index
      ***************************************************/

      ims.set('./inputs/add-file/attachments/index', {
        hash: 2805089867,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Attachments = Attachments;
          var _react = require("react");
          var _items = require("./items");
          function Attachments({
            label,
            nameStorage
          }) {
            return _react.default.createElement("div", {
              className: 'attachments'
            }, _react.default.createElement("span", {
              className: 'title-attachment'
            }, label), _react.default.createElement("div", {
              className: 'list-attachments'
            }, _react.default.createElement(_items.Items, {
              nameStorage: nameStorage
            })));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./inputs/add-file/attachments/item
      **************************************************/

      ims.set('./inputs/add-file/attachments/item', {
        hash: 3500181678,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _icons = require("pragmate-ui/icons");
          var _react = require("react");
          var _config = require("sgs-workflow/config");
          var _processImage = require("../process-image");
          function Item({
            item,
            setUpdate,
            nameStorage
          }) {
            const onClick = () => {
              const url = `${_config.default.params.filesServer}download?pathFile=${item.url}&filename=${item.fileName}`;
              window.open(url, '_blank');
            };
            const deleteItem = event => {
              event.stopPropagation();
              (0, _processImage.deleteImage)({
                ...item,
                nameStorage
              });
              setUpdate({});
            };
            return _react.default.createElement("div", {
              className: 'item-attachment'
            }, _react.default.createElement("a", {
              onClick: onClick
            }, item.fileName, " ", `(${item.fileSizeKB.toFixed(2)}KB)`, ' '), _react.default.createElement(_icons.IconButton, {
              icon: 'delete',
              onClick: deleteItem
            }));
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./inputs/add-file/attachments/items
      ***************************************************/

      ims.set('./inputs/add-file/attachments/items', {
        hash: 1778386049,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Items = Items;
          var _react = require("react");
          var _item = require("./item");
          var _uuid = require("uuid");
          function Items({
            nameStorage
          }) {
            const [upd, setUpdate] = _react.default.useState({});
            let imagesLocal = localStorage.getItem(nameStorage);
            if (!imagesLocal) return null;
            imagesLocal = JSON.parse(imagesLocal);
            if (!Array.isArray(imagesLocal)) return;
            const output = imagesLocal.map(item => {
              return _react.default.createElement(_item.Item, {
                key: (0, _uuid.v4)(),
                item: item,
                setUpdate: setUpdate,
                nameStorage: nameStorage
              });
            });
            return _react.default.createElement(_react.default.Fragment, null, output);
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./inputs/add-file/index
      ***************************************/

      ims.set('./inputs/add-file/index', {
        hash: 1890293388,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AddFile = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _modal = require("./modal");
          var _attachments = require("./attachments");
          /*bundle*/
          const AddFile = props => {
            const {
              labelButton,
              label,
              children,
              nameStorage
            } = props;
            const [isModalOpen, setIsModalOpen] = _react.default.useState(false);
            const handleModal = () => setIsModalOpen(!isModalOpen);
            return _react.default.createElement("section", {
              className: "material-discharge-quotation"
            }, children, _react.default.createElement(_components.Button, {
              onClick: handleModal,
              variant: "primary",
              className: 'form-button'
            }, labelButton), _react.default.createElement(_attachments.Attachments, {
              label: label,
              nameStorage: nameStorage
            }), _react.default.createElement(_modal.ModalFile, {
              nameStorage: nameStorage,
              show: isModalOpen,
              handleModal: handleModal,
              setIsModalOpen: setIsModalOpen
            }));
          };
          exports.AddFile = AddFile;
          AddFile.defaultProps = {
            labelButton: "Agregar",
            label: "Adjuntos",
            nameStorage: "images"
          };
        }
      });

      /***************************************
      INTERNAL MODULE: ./inputs/add-file/modal
      ***************************************/

      ims.set('./inputs/add-file/modal', {
        hash: 2331513474,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalFile = ModalFile;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _alert = require("pragmate-ui/alert");
          var _api = require("@bgroup/http-suite/api");
          var _config = require("sgs-workflow/config");
          var _wrappers = require("sgs-workflow/wrappers");
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var _processImage = require("./process-image");
          function ModalFile({
            show,
            handleModal,
            setIsModalOpen,
            nameStorage
          }) {
            const [file, setFile] = _react.default.useState();
            const [error, setError] = _react.default.useState();
            if (!show) return null;
            const onChange = event => {
              const file = event.currentTarget.files[0];
              setFile(file);
            };
            const createInput = () => {
              // Crear el elemento de entrada de archivo
              const fileInput = document.createElement('input');
              fileInput.type = 'file';
              fileInput.style.display = 'none';
              fileInput.accept = '.pdf, .jpg, .bmp, .png, .gif, .jpeg, .xls, .xlsx, .doc, .docx'; // Solo se aceptarán esos archivos .
              // Agregar el elemento de entrada de archivo al documento
              document.body.appendChild(fileInput);
              // Simular un clic en el elemento de entrada de archivo
              fileInput.click();
              // Agregar un evento para manejar la selección del archivo
              fileInput.addEventListener('change', onChange);
            };
            const cancel = () => {
              handleModal();
              setFile(undefined);
              setError(undefined);
            };
            const onSubmit = async () => {
              setError(undefined);
              if (!file) {
                setError('Extension de Archivo invalida o Tamaño de Archivo excede el permitido.');
                return;
              }
              const fileName = file?.name;
              const fileExtension = fileName.slice((fileName.lastIndexOf(".") - 1 >>> 0) + 2);
              const fileExtensions = ['pdf', 'jpg', 'bmp', 'png', 'gif', 'jpeg', 'xls', 'xlsx', 'doc', 'docx'];
              const fileSize = file?.size; // Tamaño en bytes
              // Convertir el tamaño a kilobytes
              const fileSizeKB = fileSize / 1024;
              // Tamaño máximo permitido (976,56 KB)
              const maxSizeKB = 976.56;
              if (!fileExtensions.includes(fileExtension) || fileSizeKB > maxSizeKB) {
                setError('Extension de Archivo invalida o Tamaño de Archivo excede el permitido.');
                setFile(undefined);
                return;
              }
              ;
              const api = new _api.Api(_config.default.params.filesServer).bearer(_wrappers.session.token);
              try {
                const response = await api.post('upload', {
                  multipart: true,
                  file
                });
                if (!response?.status) throw response?.error;
                const url = response.data.urls?.original ?? response.data.urls[0];
                (0, _processImage.processImage)({
                  url,
                  fileSizeKB,
                  fileName,
                  nameStorage
                });
                cancel();
              } catch (error) {
                // Manejo de errores
                console.error(error);
              }
            };
            const onDelete = async () => {
              const api = new _api.Api(_config.default.params.filesServer).bearer(_wrappers.session.token);
              try {
                const response = await api.post('remove/images', {
                  id: 'FILE_ID'
                });
                if (!response.status) throw response.error;
                // Manejo de la imagen arrecho
              } catch (error) {
                // Manejo de errores
                console.error(error);
              }
            };
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "file-modal modal-sgs",
              onClose: () => setIsModalOpen(true),
              closeClicked: false
            }, _react.default.createElement("div", {
              className: "form-file"
            }, _react.default.createElement("fieldset", null, _react.default.createElement("h3", {
              className: 'modal-title'
            }, "Agregar archivos"), _react.default.createElement("section", {
              className: "input-button"
            }, _react.default.createElement("span", {
              onClick: createInput
            }, _react.default.createElement(_form.Input, {
              disabled: true,
              value: file?.name
            })), _react.default.createElement(_components.Button, {
              variant: "primary",
              label: "Examinar",
              onClick: createInput
            })), _react.default.createElement(_alert.Alert, {
              type: "info"
            }, _react.default.createElement("h4", {
              className: "alert__title-span"
            }, "Extensiones de archivos permitidas: .xls;.xlsx;.doc;.docx;.pdf;.jpg;.bmp;.png;.gif;.jpeg. ", _react.default.createElement("br", null), "Tama\u00F1o total permitido de archivos: 976,56 KB'")), error && _react.default.createElement(_alert.Alert, {
              type: _alert.ITypes.Error
            }, _react.default.createElement("h3", {
              className: "alert__title-span"
            }, error))), _react.default.createElement("footer", {
              className: "footer-file"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              type: "button",
              onClick: onSubmit
            }, "Aceptar"), _react.default.createElement(_components.Button, {
              variant: "secondary",
              type: "reset",
              onClick: cancel
            }, "Cancelar"))));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./inputs/add-file/process-image
      ***********************************************/

      ims.set('./inputs/add-file/process-image', {
        hash: 70626578,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.deleteImage = deleteImage;
          exports.processImage = processImage;
          function processImage({
            url,
            fileSizeKB,
            fileName,
            nameStorage
          }) {
            const imagesLocal = localStorage.getItem(nameStorage);
            const imagesStorage = imagesLocal ? JSON.parse(imagesLocal) : [];
            imagesStorage.push({
              url,
              fileSizeKB,
              fileName
            });
            localStorage.setItem(nameStorage, JSON.stringify(imagesStorage));
          }
          ;
          function deleteImage({
            url,
            nameStorage
          }) {
            let imagesStorage = JSON.parse(localStorage.getItem(nameStorage));
            imagesStorage = imagesStorage.filter(image => image.url !== url);
            localStorage.setItem(nameStorage, JSON.stringify(imagesStorage));
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./inputs/add-material-discharge/index
      *****************************************************/

      ims.set('./inputs/add-material-discharge/index', {
        hash: 2976737209,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AddMaterialDischarge = AddMaterialDischarge;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _modal = require("./modal");
          function AddMaterialDischarge() {
            const [show, setShow] = _react.default.useState(false);
            const handleModal = () => setShow(!show);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_components.Button, {
              variant: 'primary'
            }, "Agregar"), _react.default.createElement(_modal.ModalAddMaterialDischarge, {
              show: show,
              handleModal: handleModal
            }));
          }
          ;
        }
      });

      /***********************************************************
      INTERNAL MODULE: ./inputs/add-material-discharge/modal/index
      ***********************************************************/

      ims.set('./inputs/add-material-discharge/modal/index', {
        hash: 1301506910,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalAddMaterialDischarge = ModalAddMaterialDischarge;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _form = require("pragmate-ui/form");
          function ModalAddMaterialDischarge({
            handleModal,
            show
          }) {
            if (!show) return null;
            const init = {
              title: "",
              author: "",
              materialCode: "",
              seal: "",
              collection: "",
              AFRequest: ""
            };
            return _react.default.createElement(_modal.Modal, {
              show: true,
              onClose: handleModal,
              className: 'modal-sgs'
            }, _react.default.createElement(_form.Form, {
              className: 'form-request'
            }, _react.default.createElement("h3", {
              className: "modal-title"
            }, "Agregar art\u00EDculo"), _react.default.createElement("div", null, _react.default.createElement(_form.Input, {
              type: "text",
              label: ""
            }))));
          }
          ;
        }
      });

      /******************************************
      INTERNAL MODULE: ./inputs/alert-modal/index
      ******************************************/

      ims.set('./inputs/alert-modal/index', {
        hash: 2655514602,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AlertModal = AlertModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _components = require("pragmate-ui/components");
          var _form = require("@bgroup/wise-form/form");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function AlertModal(props) {
            const {
              model
            } = (0, _form.useWiseFormContext)();
            const instance = model.getField(props.name);
            (0, _hooks.useBinder)([instance], () => {
              setOpen(instance.open);
            });
            const [open, setOpen] = _react.default.useState(instance.open);
            if (!open) return null;
            const onClose = () => instance.set({
              open: false
            });
            const message = instance.message ?? instance.specs.message;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "beauty-modal save-success modal-sgs alert-modal",
              onClose: onClose,
              closeClicked: false
            }, ' ', _react.default.createElement("h3", {
              className: "modal-title"
            }, instance.specs.title), " ", _react.default.createElement("p", {
              dangerouslySetInnerHTML: {
                __html: message
              }
            }), _react.default.createElement("div", {
              className: "actions"
            }, ' ', _react.default.createElement(_components.Button, {
              variant: "primary",
              label: "Aceptar",
              className: "form-button",
              onClick: onClose
            }), ' '), ' ');
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./inputs/button-group/index
      *******************************************/

      ims.set('./inputs/button-group/index', {
        hash: 3409750206,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ButtonGroup = void 0;
          var _react = require("react");
          var _button = require("../button");
          var _form = require("@bgroup/wise-form/form");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          const ButtonGroup = ({
            options,
            label,
            ...props
          }) => {
            const {
              model
            } = (0, _form.useWiseFormContext)();
            const instance = model.getField(props.name);
            const [selected, setSelected] = _react.default.useState(instance.value || instance.options[0]?.value);
            (0, _hooks.useBinder)([instance], () => setSelected(instance.value));
            _react.default.useEffect(() => {
              instance.set({
                value: selected
              });
              setSelected(instance.value);
            }, []);
            const handleClick = event => {
              let value = Number(event.target.id);
              value = !isNaN(value) ? value : event.target.id;
              setSelected(value);
              instance.set({
                value
              });
            };
            const {
              disabledOptions,
              onClicks,
              events
            } = instance.specs;
            const output = _react.default.useMemo(() => options.map((item, index) => {
              const variant = selected === item.value ? 'primary' : 'secondary';
              const className = selected === item.value ? item.className : `${item.className} outline`;
              let disabled = false;
              if (instance.disabled) disabled = instance.disabled;else {
                disabled = !!disabledOptions && Array.isArray(disabledOptions) ? disabledOptions.includes(item.value) : false;
              }
              const onClick = !!onClicks && Array.isArray(onClicks) ? onClicks.find(record => item.value === record.value)?.onClick : !!events && events?.onClick?.hasOwnProperty(item.value) ? events.onClick[item.value] : null;
              return _react.default.createElement(_button.Button, {
                key: item.label ?? index,
                id: item.value,
                handleClick: handleClick,
                ...item,
                className: className,
                variant: variant,
                disabled: disabled,
                onClick: onClick
              });
            }), [selected]);
            const cls = instance.disabled ? 'disabled' : '';
            return _react.default.createElement("div", {
              className: `button-group-container ${cls}`
            }, label && _react.default.createElement("label", {
              htmlFor: ""
            }, _react.default.createElement("span", {
              className: "label-content"
            }, label)), _react.default.createElement("div", {
              className: "container-buttons"
            }, output));
          };
          exports.ButtonGroup = ButtonGroup;
        }
      });

      /*************************************
      INTERNAL MODULE: ./inputs/button/index
      *************************************/

      ims.set('./inputs/button/index', {
        hash: 3307054536,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Button = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _form = require("@bgroup/wise-form/form");
          /*bundle*/
          const Button = ({
            label,
            ...props
          }) => {
            const {
              model
            } = (0, _form.useWiseFormContext)();
            const instance = model.getField(props.name);
            const onClick = async event => {
              const params = instance?.specs?.onClick || props.onClick;
              if (params && params.condition) {
                let canExecute = false;
                if (params?.condition?.hasValue) {
                  canExecute = params.condition.hasValue.every(item => {
                    const field = model.getField(item);
                    return field?.value;
                  });
                }
                if (!canExecute) return;
                params.field.forEach(action => {
                  const field = model.getField(action.to);
                  field.set({
                    [action.property]: action.value
                  });
                  field[action.property] = action.value;
                });
                return;
              }
              if (params && Array.isArray(params)) {
                params.forEach(async action => {
                  if (action?.type && action.type === 'event') {
                    model.callbacks[action.callback]({
                      ...action,
                      form: model
                    });
                    return;
                  }
                  if (action?.callback) {
                    const dependency = await model.getField(action.dependency);
                    await dependency?.isReady;
                    model.callbacks[action.callback]({
                      ...action,
                      dependency,
                      form: model
                    });
                    return;
                  }
                  if (action.type === 'reset') {
                    if (Array.isArray(action.to)) {
                      action.to.forEach(async key => {
                        const field = model.getField(key);
                        if (!field) return;
                        await field.isReady;
                        field.clear();
                      });
                      return;
                    }
                    model.getField(action.to).clear();
                    return;
                  }
                  if (!action?.to) return;
                  const field = model.getField(action.to);
                  if (!field) return;
                  await field.isReady;
                  field.set({
                    [action.property]: action.value
                  });
                  if (action.property === "disabled") field[action.property] = action.value;
                  //	field.triggerEvent('value.change');
                });
              }
              if (props.handleClick) props.handleClick(event);
              instance?.triggerEvent();
            };
            const {
              handleClick,
              dependentOn,
              ...properties
            } = props;
            const style = instance?.specs?.style ? instance.specs.style : {};
            const onClickHandler = props.type === 'submit' ? {} : {
              onClick
            };
            const disabled = instance?.disabled || instance === undefined && props.disabled || instance?.fetching;
            return _react.default.createElement(_components.Button, {
              ...properties,
              style: style,
              icon: instance?.specs?.icon,
              ...onClickHandler,
              disabled: disabled,
              fetching: instance?.fetching
            }, label);
          };
          exports.Button = Button;
        }
      });

      /***************************************
      INTERNAL MODULE: ./inputs/checkbox/index
      ***************************************/

      ims.set('./inputs/checkbox/index', {
        hash: 1064130899,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Checkbox = Checkbox;
          var _form = require("pragmate-ui/form");
          var _react = require("react");
          var _form2 = require("@bgroup/wise-form/form");
          /*bundle*/
          function Checkbox(props) {
            const {
              model
            } = (0, _form2.useWiseFormContext)();
            const instance = model.getField(props.name);
            const [checked, setChecked] = _react.default.useState(instance.value);
            _react.default.useEffect(() => {
              if (!!instance.notOnCheck) return;
              toggleAction(instance.value);
            }, [props.value, instance.value]);
            const onChange = event => {
              toggleAction(event.target.checked);
              if (instance.specs.onChange && Array.isArray(instance.specs.onChange) && !!instance.specs.onChange.length) {
                for (const item of instance.specs.onChange) {
                  const callback = model.callbacks[item.callback];
                  if (!callback || typeof callback !== 'function') return;
                  callback({
                    dependency: instance,
                    form: model,
                    ...item
                  });
                }
                ;
              }
              ;
            };
            const toggleAction = checked => {
              if (instance.disabled) return;
              instance.checked = checked;
              instance.value = checked;
              setChecked(instance.checked);
              const onCheck = instance.specs.onCheck;
              if (!onCheck) return;
              if (Array.isArray(onCheck)) {
                onCheck.forEach(action => {
                  const {
                    to,
                    property
                  } = action;
                  if (action.callback) {
                    const dependency = model.getField(action.dependency);
                    model.callbacks[action.callback]({
                      ...action,
                      dependency,
                      form: model,
                      checked
                    });
                    return;
                  }
                  if (action.type === 'reset') {
                    model.getField(action.to).clear();
                    return;
                  }
                  const toAffect = model.getField(to);
                  const oldValue = toAffect[property];
                  const value = typeof action?.value !== 'boolean' ? action.value : !oldValue;
                  toAffect.set({
                    [property]: value
                  });
                  toAffect[property] = value;
                  toAffect.triggerEvent();
                  toAffect.set({
                    value: oldValue ? action?.value || '' : ''
                  });
                });
                return;
              }
              if (onCheck.callback) return model.callbacks[onCheck.callback]({
                ...onCheck,
                form: model,
                checked
              });
              const {
                to,
                property
              } = onCheck;
              const toAffect = model.getField(to);
              const oldValue = toAffect[property];
              toAffect.set({
                [property]: !oldValue
              });
              toAffect[property] = !oldValue;
              toAffect.triggerEvent();
              toAffect.set({
                value: oldValue ? onCheck?.value || '' : ''
              });
            };
            const className = `${props.className ?? ''}`;
            const style = props.style ?? {};
            const disabled = instance.specs.hasOwnProperty('forceDisabled') ? instance.specs.forceDisabled : instance.disabled;
            return _react.default.createElement(_form.Checkbox, {
              style: style,
              checked: instance.value,
              label: props.label,
              onChange: onChange,
              disabled: disabled,
              className: className
            });
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./inputs/comments/context
      *****************************************/

      ims.set('./inputs/comments/context', {
        hash: 375280143,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useCommentsContext = exports.CommentsContext = void 0;
          var _react = require("react");
          const CommentsContext = exports.CommentsContext = _react.default.createContext({});
          const useCommentsContext = () => _react.default.useContext(CommentsContext);
          exports.useCommentsContext = useCommentsContext;
        }
      });

      /****************************************
      INTERNAL MODULE: ./inputs/comments/delete
      ****************************************/

      ims.set('./inputs/comments/delete', {
        hash: 2704077722,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DeleteComment = DeleteComment;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _components = require("pragmate-ui/components");
          function DeleteComment({
            manager
          }) {
            const handleClose = () => {
              manager.commentSelected = null;
              manager.showDelete = false;
            };
            if (!manager.showDelete) return null;
            const btnCancel = {
              variant: 'secondary',
              className: 'asda'
            };
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "beauty-modal comment-managment delete-comment modal-sgs pui-confirm-dialog",
              onClose: handleClose,
              closeClicked: false
            }, _react.default.createElement("div", {
              className: "pui-confirm-dialog-content"
            }, _react.default.createElement("h3", {
              className: "modal-title"
            }, "Eliminar comentario"), _react.default.createElement("p", {
              className: "pui-confirm-dialog-content__text"
            }, "\u00BFSeguro que desea eliminar el comentario?"), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              onClick: handleClose,
              type: "reset",
              label: "Cancelar",
              variant: "secondary"
            }), _react.default.createElement(_components.Button, {
              onClick: manager.delete,
              type: "button",
              label: "Confimar",
              variant: "primary"
            }))));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./inputs/comments/icons
      ***************************************/

      ims.set('./inputs/comments/icons', {
        hash: 264158562,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.icons = void 0;
          const icons = exports.icons = {
            comments: {
              viewBox: '0 0 16.038 16',
              icon: `<g >
        <path id="Trazado_11031" data-name="Trazado 11031" d="M14.423.333A1.559,1.559,0,0,1,15.568.8a1.515,1.515,0,0,1,.469,1.108v9.615a1.6,1.6,0,0,1-1.615,1.615H3.192L0,16.333V1.911A1.515,1.515,0,0,1,.469.8,1.559,1.559,0,0,1,1.615.333Z" transform="translate(0 -0.333)" />
      </g>
      `
            }
          };
        }
      });

      /***************************************
      INTERNAL MODULE: ./inputs/comments/index
      ***************************************/

      ims.set('./inputs/comments/index', {
        hash: 1037323345,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Comments = Comments;
          var _react = require("react");
          var _wrappers = require("sgs-workflow/wrappers");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _item = require("./item");
          var _delete = require("./delete");
          var _newComment = require("./new-comment");
          var _manager = require("./manager");
          var _context = require("./context");
          var _icons = require("./icons");
          var _empty = require("pragmate-ui/empty");
          var _form = require("@bgroup/wise-form/form");
          var _uuid = require("uuid");
          /*bundle*/
          function Comments(params) {
            const {
              model: formModel
            } = (0, _form.useWiseFormContext)();
            const model = formModel.getField(params.name);
            _react.default.useEffect(() => {
              model.validateReview = manager.validateReview;
              const existingComment = model.entries.find(item => item.userId === _wrappers.session.user.id);
              if (!existingComment) return;
              model.value = [...model.entries, {
                ...existingComment,
                creatorUserId: 'ref:userId',
                idHistoria: null,
                instanceId: 'ref:instanceId',
                modifierUserId: 'ref:userId',
                taskId: 'ref:taskId',
                userId: 'ref:userId'
              }];
            }, []);
            const managerRef = _react.default.useRef(new _manager.CommentsManager(model));
            const manager = managerRef.current;
            const [, setState] = _react.default.useState({});
            (0, _hooks.useBinder)([manager], () => setState({}));
            const isAlreadyCommented = model.entries.find(item => item.userId === _wrappers.session.user.id && item.taskId === model.parent.form.settings.taskId);
            const disabled = model.disabled || isAlreadyCommented;
            const output = model.entries.map(item => {
              return _react.default.createElement(_item.Item, {
                item: item,
                key: (0, _uuid.v4)()
              });
            });
            const contextValue = {
              manager,
              model
            };
            const cls = params.title ? 'with-header' : '';
            return _react.default.createElement(_context.CommentsContext.Provider, {
              value: contextValue
            }, _react.default.createElement("div", {
              className: `form-jview-container jview-comments ${cls}`
            }, params.title && _react.default.createElement("header", {
              className: "jview-header"
            }, _react.default.createElement("h3", null, params.title)), _react.default.createElement("div", {
              className: "container-comments form-comments "
            }, _react.default.createElement("div", {
              className: "header-comments"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              disabled: disabled,
              onClick: manager.handleModal,
              icon: _icons.icons.comments,
              className: "reversed"
            }, "Agregar Comentario")), output.length ? _react.default.createElement("div", {
              className: "list-entries"
            }, output) : _react.default.createElement(_empty.Empty, {
              className: "empty-jview empty-comments",
              icon: "circle-exclamation"
            }, "No existe informaci\u00F3n para mostrar"), _react.default.createElement(_delete.DeleteComment, {
              manager: manager
            }), _react.default.createElement(_newComment.NewComment, {
              manager: manager,
              name: params.name,
              model: model
            }))));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./inputs/comments/item
      **************************************/

      ims.set('./inputs/comments/item', {
        hash: 385168284,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          var _wrappers = require("sgs-workflow/wrappers");
          var _context = require("./context");
          function Item({
            item
          }) {
            const {
              manager,
              model
            } = (0, _context.useCommentsContext)();
            const dt = new Date(item.timeCreated);
            let date = `${dt.getDate()}/${dt.getMonth() + 1}/${dt.getFullYear()} ${dt.getUTCHours()}:${dt.getUTCMinutes()}`;
            if (item.instanceId === 'ref:instanceId') {
              date = `${dt.getDate()}/${dt.getMonth() + 1}/${dt.getFullYear()} ${dt.getHours()}:${dt.getMinutes()}`;
            }
            const getText = value => value ?? 'Sin valor';
            const handleDelete = () => {
              manager.commentSelected = item;
              manager.showDelete = true;
            };
            const handleEdit = () => {
              manager.commentSelected = item;
              manager.show = true;
              manager.value = item.comment;
              manager.isEditing = true;
            };
            const disabled = model.disabled || item.userId !== _wrappers.session.user.id || item.taskId !== model.parent.form.settings.taskId;
            const userName = _wrappers.session.userId === item.userId ? 'Yo' : `${getText(item?.user?.nombre)} ${getText(item?.user?.apellido)}`;
            return React.createElement("div", {
              className: "comment-item-list"
            }, React.createElement("div", {
              className: "comment-content"
            }, React.createElement("header", {
              className: "header"
            }, React.createElement("span", {
              className: "username"
            }, userName), React.createElement("span", {
              className: "time-created"
            }, date)), React.createElement("p", {
              className: "comment"
            }, item.comment)), React.createElement("div", {
              className: "actions"
            }, React.createElement(_icons.IconButton, {
              icon: "edit",
              onClick: handleEdit,
              disabled: disabled
            }), React.createElement(_icons.IconButton, {
              icon: "delete",
              onClick: handleDelete,
              disabled: disabled
            })));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./inputs/comments/manager
      *****************************************/

      ims.set('./inputs/comments/manager', {
        hash: 1700380896,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CommentsManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _entities = require("sgs-workflow/entities");
          var _wrappers = require("sgs-workflow/wrappers");
          var _uuid = require("uuid");
          class CommentsManager extends _model.ReactiveModel {
            #collection = new _entities.CommentsCollection();
            get collection() {
              return this.#collection;
            }
            selected;
            #show = false;
            get show() {
              return this.#show;
            }
            set show(value) {
              this.#show = value;
              this.triggerEvent();
            }
            #showDelete = false;
            get showDelete() {
              return this.#showDelete;
            }
            set showDelete(value) {
              this.#showDelete = value;
              this.triggerEvent();
            }
            #commentSelected;
            get commentSelected() {
              return this.#commentSelected;
            }
            set commentSelected(value) {
              this.#commentSelected = value;
              this.triggerEvent();
            }
            isEditing;
            #value = '';
            get value() {
              return this.#value;
            }
            set value(value) {
              this.#value = value;
              this.triggerEvent();
            }
            #items = [];
            get items() {
              return this.#items;
            }
            set items(value) {
              this.#items = value;
              this.triggerEvent();
            }
            #fieldModel;
            constructor(fieldModel) {
              super();
              this.#fieldModel = fieldModel;
              this.#fieldModel.set({
                value: this.#fieldModel.entries
              });
            }
            handleModal = () => {
              this.#show = !this.#show;
              this.#value = '';
              this.commentSelected = {
                comment: '',
                id: (0, _uuid.v4)(),
                creatorUserId: _wrappers.session.user.id,
                idHistoria: null,
                instanceId: 'ref:instanceId',
                modifierUserId: _wrappers.session.user.id,
                taskId: this.#fieldModel.parent.form.settings.taskId,
                userId: _wrappers.session.user.id,
                timeCreated: new Date(),
                timeUpdated: new Date(),
                user: {
                  nombre: _wrappers.session.user.names,
                  apellido: _wrappers.session.user.lastNames
                }
              };
              this.triggerEvent();
            };
            handleChange = event => {
              event.stopPropagation();
              this.#value = event.target.value;
              this.triggerEvent();
            };
            save = async () => {
              this.fetching = true;
              try {
                const newComment = this.#commentSelected;
                const currentTaskId = this.#fieldModel.parent.form.settings.taskId;
                const editingItem = this.#fieldModel.entries.find(item => item.userId === _wrappers.session.user.id && item.taskId === currentTaskId);
                if (this.isEditing && editingItem) {
                  const entries = this.#fieldModel.entries.filter(item => editingItem.id !== item.id);
                  newComment.id = editingItem.id;
                  newComment.comment = this.#value;
                  this.#fieldModel.set({
                    value: [newComment, ...entries],
                    entries: [newComment, ...entries]
                  });
                  this.handleModal();
                  return;
                }
                newComment.comment = this.#value;
                this.#fieldModel.set({
                  value: [newComment, ...this.#fieldModel.entries],
                  entries: [newComment, ...this.#fieldModel.entries]
                });
                this.handleModal();
              } catch (error) {
                console.error(error);
              } finally {
                this.fetching = false;
              }
            };
            delete = async () => {
              this.fetching = true;
              try {
                // await this.commentSelected.delete({ id: this.#commentSelected.id });
                const entries = this.#fieldModel.entries.filter(item => this.commentSelected.id !== item.id);
                this.#fieldModel.set({
                  value: entries,
                  entries
                });
                this.#commentSelected = null;
                this.#showDelete = false;
                // await this.load();
                this.triggerEvent();
              } catch (error) {
                console.error(error);
              } finally {
                this.fetching = false;
              }
            };
            validateReview = () => {
              const entries = this.#fieldModel.value;
              const isCorrect = entries.some(item => {
                if (item.taskId === this.#fieldModel.parent.form.taskId && item.userId === _wrappers.session.user.id) return true;
                return false;
              });
              if (!isCorrect) return {
                errorMessage: 'Debe ingresar un comentario para poder revisar'
              };
              return {};
            };
          }
          exports.CommentsManager = CommentsManager;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./inputs/comments/new-comment
      *********************************************/

      ims.set('./inputs/comments/new-comment', {
        hash: 816086679,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NewComment = NewComment;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          function NewComment({
            manager,
            name,
            model
          }) {
            if (!manager.show) return null;
            const title = manager.commentSelected ? 'Editar comentario' : 'Agregar comentario';
            const onSave = () => {
              manager.save();
            };
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "beauty-modal comment-managment modal-sgs",
              onClose: manager.handleModal,
              closeClicked: false
            }, _react.default.createElement("div", {
              className: "form-request",
              onSubmit: manager.save
            }, _react.default.createElement("h3", {
              className: "modal-title"
            }, title), _react.default.createElement(_form.Textarea, {
              disabled: manager.fetching,
              onChange: manager.handleChange,
              label: "Comentario",
              value: manager.value
            }), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              onClick: onSave,
              type: "button",
              label: "Guardar",
              disabled: !manager.value,
              variant: "primary",
              loading: manager.fetching
            }), _react.default.createElement(_components.Button, {
              onClick: manager.handleModal,
              type: "reset",
              label: "Cancelar",
              variant: "secondary",
              disabled: manager.fetching
            }))));
          }
        }
      });

      /****************************************************
      INTERNAL MODULE: ./inputs/currency-input/fixed-number
      ****************************************************/

      ims.set('./inputs/currency-input/fixed-number', {
        hash: 3930900205,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.parseFix = void 0;
          const parseFix = (value, decimalsLimit) => {
            if (!value) return value;
            const valueString = value.toString();
            const valueParts = valueString.includes('.') ? valueString.split('.') : valueString.split(',');
            const currentDecimals = valueParts.length > 1 ? valueParts[1].length : 0;
            const ints = valueParts[0];
            const currentDecimalsVal = valueParts[1] || '';
            if (!decimalsLimit) return ints;
            // Si ya tiene el número correcto de decimales, retornar el valor original
            //	if (currentDecimals === decimalsLimit) return value;
            // Calcular los decimales faltantes
            const missingDecimals = decimalsLimit - currentDecimals;
            const paddedValueString = `${ints},${currentDecimalsVal}${missingDecimals > 0 ? '0'.repeat(missingDecimals) : ''}`;
            // Convertir de nuevo a número. Nota: Esto es más para fines de consistencia,
            // ya que agregar ceros a la derecha no cambia el valor.
            return paddedValueString;
          };
          exports.parseFix = parseFix;
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./inputs/currency-input/format-to-display
      *********************************************************/

      ims.set('./inputs/currency-input/format-to-display', {
        hash: 734174598,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.formatToDisplay = void 0;
          const formatToDisplay = (input, decimalsLimit, noDecimals, allowNegative) => {
            if (!input && input !== 0) return input;
            if (input === '-') return '-';
            const isAllowNegative = !!allowNegative && input?.toString()?.startsWith('-');
            let number = Number(input);
            if (decimalsLimit === 0 || noDecimals) number = Math.floor(number);
            let formattedInput = typeof input === 'number' && !noDecimals ? number.toLocaleString('es-ES', {
              minimumFractionDigits: decimalsLimit,
              maximumFractionDigits: decimalsLimit
            }) : input;
            formattedInput = typeof formattedInput === 'string' ? formattedInput : formattedInput.toString();
            let numbersAndCommaOnly = formattedInput.replace(/[^\d,]/g, '');
            let [integerPart, decimalPart] = numbersAndCommaOnly.split(',', 2);
            integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
            const decimals = decimalsLimit && decimalPart ? decimalPart.substring(0, decimalsLimit) : decimalPart;
            formattedInput = decimalPart !== undefined && !noDecimals ? `${isAllowNegative ? '-' : ''}${integerPart},${decimals}` : `${isAllowNegative ? '-' : ''}${integerPart}`;
            return formattedInput;
          };
          exports.formatToDisplay = formatToDisplay;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./inputs/currency-input/index
      *********************************************/

      ims.set('./inputs/currency-input/index', {
        hash: 764656286,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CurrencyInput = void 0;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _react = require("react");
          var _fixedNumber = require("./fixed-number");
          var _formatToDisplay = require("./format-to-display");
          var _form = require("@bgroup/wise-form/form");
          /*bundle*/
          const CurrencyInput = props => {
            const {
              model
            } = (0, _form.useWiseFormContext)();
            const instance = model.getField(props.name);
            let {
              decimalsLimit,
              noDecimals,
              roundUp,
              toFixed,
              label,
              isSetDefaultValue,
              removeValueWhenFocus,
              dependentOn,
              allowNegative,
              prevValues,
              forceDisabled,
              ...properties
            } = instance.specs;
            decimalsLimit = decimalsLimit === undefined ? 2 : decimalsLimit;
            const value = (0, _formatToDisplay.formatToDisplay)(instance.value, decimalsLimit, noDecimals, allowNegative);
            const [displayValue, setDisplayValue] = _react.default.useState(value);
            const [instanceVal, setInstanceVal] = _react.default.useState(instance.value);
            const [defaultValue] = _react.default.useState(value);
            const onReset = () => {
              const valuePrev = instance?.value || instance === 0 ? instance?.value : defaultValue;
              const value = (0, _formatToDisplay.formatToDisplay)(valuePrev, decimalsLimit, noDecimals, allowNegative);
              setDisplayValue(value);
            };
            //useBinder([instance], onBinder, ['change']);
            (0, _hooks.useBinder)([model], onReset, ['reset']);
            const onBinder = () => {
              if (isNaN(parseInt(instance.value)) && instance.value !== '') return;
              const isAlreadyRounded = Number.isInteger(instance.value);
              let value = instance.value ?? '';
              if (roundUp && !isAlreadyRounded) {
                value = value ? Math.round(parseFloat(value?.toString())) : value;
                instance.value = value;
              }
              ;
              setDisplayValue((0, _formatToDisplay.formatToDisplay)(value ? parseFloat(value) : value, decimalsLimit, noDecimals, allowNegative));
              setInstanceVal(instance.value);
            };
            (0, _hooks.useBinder)([instance], () => {
              onBinder();
            });
            (0, _react.useEffect)(() => {
              onBinder();
            }, []);
            const convertDisplayToNumeric = display => {
              if (!display) return '';
              const numeric = display.replace(/\./g, '').replace(',', '.');
              return parseFloat(numeric);
            };
            const onBlur = () => {
              // if (!displayValue) {
              // 	setDisplayValue(defaultValue);
              // 	instance.set({ value: convertDisplayToNumeric(defaultValue) });
              // 	instance.triggerEvent('blur');
              // 	instance.triggerEvent();
              // 	return;
              // }
              if (isNaN(parseInt(instanceVal))) {
                if (instance.specs.value === 0) {
                  instance.set({
                    value: 0
                  });
                }
                if (instanceVal === '') {
                  instance.set({
                    value: ''
                  });
                }
                instance.triggerEvent('blur');
                instance.triggerEvent('change');
                return;
              }
              let adjustedNumericValue = instanceVal;
              if ((adjustedNumericValue || adjustedNumericValue === 0) && !isNaN(Number(adjustedNumericValue)) && Number(adjustedNumericValue) <= 0 && !!instance.specs.notZero) {
                instance.set({
                  value: ''
                });
                setDisplayValue('');
                instance.triggerEvent('blur');
                return;
              }
              if (roundUp) {
                adjustedNumericValue = Math.round(parseFloat(adjustedNumericValue?.toString()));
                setDisplayValue((0, _formatToDisplay.formatToDisplay)(adjustedNumericValue, decimalsLimit, noDecimals, allowNegative));
                instance.set({
                  value: adjustedNumericValue
                });
              }
              if (toFixed) {
                const value = (0, _fixedNumber.parseFix)(displayValue, decimalsLimit);
                setDisplayValue(value);
                instance.set({
                  value: adjustedNumericValue
                });
              }
              instance.value = instanceVal;
              instance.triggerEvent('blur');
            };
            const onFocus = () => {
              if (defaultValue != displayValue || !removeValueWhenFocus) return;
              setDisplayValue('');
            };
            const onChange = event => {
              const inputDisplayValue = event.target.value;
              if (isNaN(parseInt(inputDisplayValue)) && inputDisplayValue !== '') {
                instance.triggerEvent('change');
                return;
              }
              const value = convertDisplayToNumeric(inputDisplayValue);
              const toDisplay = (0, _formatToDisplay.formatToDisplay)(inputDisplayValue, decimalsLimit, noDecimals, allowNegative);
              setDisplayValue(toDisplay);
              setInstanceVal(value);
              if (instance.specs.onChange && Array.isArray(instance.specs.onChange) && !!instance.specs.onChange.length) {
                for (const item of instance.specs.onChange) {
                  const callback = model.callbacks[item.callback];
                  if (!callback || typeof callback !== 'function') return;
                  callback({
                    dependency: instance,
                    form: model,
                    ...item
                  });
                }
                ;
              }
              ;
            };
            ['notZero', 'isPercent', 'decimalLimit', 'idTrabajo'].forEach(property => delete properties[property]);
            const disabled = instance.specs.hasOwnProperty('forceDisabled') ? forceDisabled : instance.disabled;
            return _react.default.createElement("div", {
              className: `pui-input currency ${instance.className}`
            }, _react.default.createElement("input", {
              className: "currency-input",
              id: "currency",
              type: "text",
              ...properties,
              autoComplete: "off",
              onBlur: onBlur,
              onFocus: onFocus,
              onChange: onChange,
              title: instance.specs?.title,
              disabled: disabled,
              value: displayValue ?? ''
            }), label && _react.default.createElement("label", {
              className: "pui-input__label",
              htmlFor: "currency"
            }, _react.default.createElement("span", {
              className: "label-content"
            }, label)));
          };
          exports.CurrencyInput = CurrencyInput;
        }
      });

      /*************************************
      INTERNAL MODULE: ./inputs/date/get-min
      *************************************/

      ims.set('./inputs/date/get-min', {
        hash: 1824075168,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getCurrentDateMin = getCurrentDateMin;
          function getCurrentDateMin() {
            const today = new Date();
            const dateStr = today.toISOString().substring(0, 10); // Formato 'YYYY-MM-DD'
            return dateStr;
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./inputs/date/getter
      ************************************/

      ims.set('./inputs/date/getter', {
        hash: 1964137119,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.get = void 0;
          const get = date => {
            let value = date ? date.split('T') : '';
            if (!value) return value;
            if (value.length === 2) return value[0];
            value = date.split(' ');
            return value[0];
          };
          exports.get = get;
        }
      });

      /***********************************
      INTERNAL MODULE: ./inputs/date/index
      ***********************************/

      ims.set('./inputs/date/index', {
        hash: 2920065104,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CompleteDate = void 0;
          var _react = require("react");
          var _form = require("@bgroup/wise-form/form");
          var _form2 = require("pragmate-ui/form");
          var _getMin = require("./get-min");
          var _parser = require("./parser");
          var _getter = require("./getter");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          const CompleteDate = props => {
            const {
              model
            } = (0, _form.useWiseFormContext)();
            const instance = model.getField(props.name);
            const [value, setValue] = _react.default.useState((0, _getter.get)(instance.value || ''));
            (0, _hooks.useBinder)([instance], () => {
              setValue((0, _getter.get)(instance.value || ''));
            });
            _react.default.useEffect(() => {
              if (!instance.specs.setDateDefault || !!instance.value) return;
              const date = new Date();
              instance.set({
                value: date.toISOString()
              });
              setValue((0, _getter.get)(instance.value || ''));
            }, []);
            const onChange = event => {
              const value = (0, _parser.formatDate)(event.target.value);
              instance.set({
                value
              });
              setValue((0, _getter.get)(value || ''));
              if (instance.specs.onChange && Array.isArray(instance.specs.onChange) && !!instance.specs.onChange.length) {
                for (const item of instance.specs.onChange) {
                  const callback = model.callbacks[item.callback];
                  if (!callback || typeof callback !== 'function') return;
                  callback({
                    dependency: instance,
                    form: model,
                    ...item
                  });
                }
                ;
              }
              ;
            };
            const attrs = {};
            if (instance.specs.minNow) attrs.min = (0, _getMin.getCurrentDateMin)();
            return _react.default.createElement(_form2.Input, {
              ...props,
              value: value,
              onChange: onChange,
              type: "date",
              ...attrs
            });
          };
          exports.CompleteDate = CompleteDate;
        }
      });

      /************************************
      INTERNAL MODULE: ./inputs/date/parser
      ************************************/

      ims.set('./inputs/date/parser', {
        hash: 245760386,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.formatDate = formatDate;
          function formatDate(dateString) {
            const [year, month, day] = dateString.split('-');
            const date = new Date();
            date.setFullYear(parseInt(year, 10));
            date.setMonth(parseInt(month, 10) - 1);
            date.setDate(parseInt(day, 10));
            const currentDate = new Date();
            date.setHours(currentDate.getHours());
            date.setMinutes(currentDate.getMinutes());
            const formattedDate = date instanceof Date && !isNaN(date) ? date.toISOString() : '';
            return formattedDate;
          }
        }
      });

      /****************************************************
      INTERNAL MODULE: ./inputs/decimals-input/fixed-number
      ****************************************************/

      ims.set('./inputs/decimals-input/fixed-number', {
        hash: 1622760409,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.parseFix = void 0;
          const parseFix = (value, decimalsLimit) => {
            if (!value) return value;
            const valueParts = value.toString().split(',');
            const currentDecimals = valueParts.length > 1 ? valueParts[1].length : 0;
            const ints = valueParts[0];
            const currentDecimalsVal = valueParts[1] || '';
            // Si ya tiene el número correcto de decimales, retornar el valor original
            if (currentDecimals === decimalsLimit) return value;
            // Calcular los decimales faltantes
            const missingDecimals = decimalsLimit - currentDecimals;
            const paddedValueString = `${ints},${currentDecimalsVal + '0'.repeat(missingDecimals)}`;
            // Convertir de nuevo a número. Nota: Esto es más para fines de consistencia,
            // ya que agregar ceros a la derecha no cambia el valor.
            return paddedValueString;
          };
          exports.parseFix = parseFix;
        }
      });

      /**********************************************
      INTERNAL MODULE: ./inputs/decimals-input/index,
      **********************************************/

      ims.set('./inputs/decimals-input/index,', {
        hash: 401449232,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Decimal = void 0;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("@bgroup/wise-form/form");
          var _fixedNumber = require("./fixed-number");
          const DECIMAL_REGEX = /^[0-9,]+$/;
          /*bundle*/
          const Decimal = props => {
            const {
              model
            } = (0, _form.useWiseFormContext)();
            const instance = model.getField(props.name);
            const decimalsLimit = instance.specs.decimalsLimit;
            const value = instance.value ? instance.value.toLocaleString('es-ES', {
              minimumFractionDigits: decimalsLimit,
              maximumFractionDigits: decimalsLimit
            }) : '';
            const [displayValue, setDisplayValue] = _react.default.useState(value);
            const {
              label,
              toFixed
            } = instance.specs;
            const onBinder = () => {
              if (!instance.value && instance !== 0) {
                setDisplayValue('');
                return;
              }
              ;
              setDisplayValue(value);
            };
            (0, _hooks.useBinder)([instance], onBinder);
            const onChange = event => {
              const parts = event.target.value.split(',');
              if (event.target.value.includes('.')) return;
              if (!DECIMAL_REGEX.test(event.target.value) && event.target.value !== '') return;
              if (event.target.value.startsWith(',')) return;
              const passTheDecimalsLimit = parts?.length && parts[1] && parts[1].length > decimalsLimit;
              if (passTheDecimalsLimit) return;
              instance.value = event.target.value;
              setDisplayValue(event.target.value.toLocaleString('es-ES', {
                minimumFractionDigits: decimalsLimit,
                maximumFractionDigits: decimalsLimit
              }));
              if (instance.specs.onChange && Array.isArray(instance.specs.onChange) && !!instance.specs.onChange.length) {
                for (const item of instance.specs.onChange) {
                  const callback = model.callbacks[item.callback];
                  if (!callback || typeof callback !== 'function') return;
                  callback({
                    dependency: instance,
                    form: model,
                    ...item
                  });
                }
                ;
              }
              ;
            };
            const onBlur = () => {
              const adjustedNumericValue = instance.value;
              if (toFixed) {
                const value = (0, _fixedNumber.parseFix)(displayValue, decimalsLimit);
                setDisplayValue(value);
                instance.set({
                  value: adjustedNumericValue
                });
              }
            };
            return _react.default.createElement("div", {
              className: `pui-input currency ${instance.className}`
            }, _react.default.createElement("input", {
              className: "currency-input",
              id: "currency",
              type: "text",
              autoComplete: "off",
              ...props,
              onChange: onChange,
              disabled: instance.disabled,
              onBlur: onBlur,
              value: displayValue ?? ''
            }), label && _react.default.createElement("label", {
              className: "pui-input__label",
              htmlFor: "currency"
            }, _react.default.createElement("span", {
              className: "label-content"
            }, label)));
          };
          exports.Decimal = Decimal;
        }
      });

      /**************************************************
      INTERNAL MODULE: ./inputs/fields-wrapper/arr-equals
      **************************************************/

      ims.set('./inputs/fields-wrapper/arr-equals', {
        hash: 753600763,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.arraysAreEqual = arraysAreEqual;
          function deepEqual(obj1, obj2) {
            if (obj1 === obj2) return true;
            if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
              return false;
            }
            const keys1 = Object.keys(obj1);
            const keys2 = Object.keys(obj2);
            if (keys1.length !== keys2.length) {
              return false;
            }
            for (const key of keys1) {
              if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
                return false;
              }
            }
            return true;
          }
          function arraysAreEqual(arr1, arr2) {
            if (arr1.length !== arr2.length) {
              return false;
            }
            for (let i = 0; i < arr1.length; i++) {
              if (!deepEqual(arr1[i], arr2[i])) {
                return false;
              }
            }
            return true;
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./inputs/fields-wrapper/context
      ***********************************************/

      ims.set('./inputs/fields-wrapper/context', {
        hash: 3330276743,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useFieldsWrapperContext = exports.FieldsWrapperContext = void 0;
          var _react = require("react");
          const FieldsWrapperContext = exports.FieldsWrapperContext = _react.default.createContext({});
          const useFieldsWrapperContext = () => _react.default.useContext(FieldsWrapperContext);
          exports.useFieldsWrapperContext = useFieldsWrapperContext;
        }
      });

      /*****************************************************************************
      INTERNAL MODULE: ./inputs/fields-wrapper/data-service-pages/get-fields-configs
      *****************************************************************************/

      ims.set('./inputs/fields-wrapper/data-service-pages/get-fields-configs', {
        hash: 4098760148,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getFieldConfigs = getFieldConfigs;
          function getFieldConfigs() {
            return [{
              field: 'idColorLt',
              id: 'proveedoresCostos',
              where: values => ({
                id_proveedor_ci: 1,
                id_color_impresion: values.idColorLt
              }),
              query: {
                db: 'sgs',
                tableName: 'analisis_factibilidad.proveedores_costos',
                fields: ['id', 'demasia_fija', 'demasia_variable', 'costo_ctp', 'costo_entrada_maquina', 'costo_variable']
              },
              targets: [{
                name: 'demasiaFijaTapa',
                valueProperty: 'demasia_fija'
              }, {
                name: 'demasiaVariableTapa',
                valueProperty: 'demasia_variable'
              }, {
                name: 'costoCtp',
                valueProperty: 'costo_ctp'
              }, {
                name: 'costoEntradaMaquina',
                valueProperty: 'costo_entrada_maquina'
              }, {
                name: 'costoVariable',
                valueProperty: 'costo_variable'
              }, {
                name: 'idProveerdorCosto',
                valueProperty: 'id'
              }],
              defaultValues: {
                demasiaFijaTapa: 0,
                demasiaVariableTapa: 0,
                costoCtp: 0,
                costoEntradaMaquina: 0,
                costoVariable: 0,
                idProveerdorCosto: null
              }
            }, {
              field: 'idGramajeLt',
              id: 'gramajes',
              where: values => ({
                id: values.idGramajeLt
              }),
              query: {
                db: 'sgs',
                tableName: 'analisis_factibilidad.gramajes',
                fields: ['valor']
              },
              targets: [{
                name: 'valorTapa',
                valueProperty: 'valor'
              }],
              defaultValues: {
                valorTapa: 0
              }
            }, {
              field: 'idTipoPapelLt',
              id: 'tiposPapeles',
              where: values => ({
                id: values.idTipoPapelLt
              }),
              query: {
                db: 'sgs',
                tableName: 'analisis_factibilidad.tipos_papeles',
                fields: ['costo_papel']
              },
              targets: [{
                name: 'costoPapelTapaInFormula',
                valueProperty: 'costo_papel'
              }],
              defaultValues: {
                costoPapelTapaInFormula: 0
              }
            }, {
              field: 'idColorLt',
              id: 'coloresImpresiones',
              where: values => ({
                id: values.idColorLt
              }),
              query: {
                db: 'sgs',
                tableName: 'analisis_factibilidad.colores_impresiones',
                fields: ['color_total']
              },
              targets: [{
                name: 'colorTotalTapa',
                valueProperty: 'color_total'
              }],
              defaultValues: {
                colorTotalTapa: 0
              }
            }, {
              field: 'idPlastificado',
              id: 'proveedoresPlastificados',
              where: values => ({
                id_proveedor: 1,
                id_plastificado: values.idPlastificado
              }),
              query: {
                db: 'sgs',
                tableName: 'analisis_factibilidad.proveedores_plastificados',
                fields: ['costo_m2']
              },
              targets: [{
                name: 'costoM2',
                valueProperty: 'costo_m2'
              }],
              defaultValues: {
                costoM2: 0
              }
            }, {
              field: 'idEncuadernado',
              id: 'proveedoresEncuadernados',
              where: values => ({
                id_proveedor: 1,
                id_encuadernado: values.idEncuadernado
              }),
              query: {
                db: 'sgs',
                tableName: 'analisis_factibilidad.proveedores_encuadernados',
                fields: ['id', 'cantidad_pliegos_base', 'precio_rango', 'precio_solapa', 'precio_adicional']
              },
              targets: [{
                name: 'cantidadPliegosBase',
                valueProperty: 'cantidad_pliegos_base'
              }, {
                name: 'precioRango',
                valueProperty: 'precio_rango'
              }, {
                name: 'precioSolapa',
                valueProperty: 'precio_solapa'
              }, {
                name: 'precioAdicional',
                valueProperty: 'precio_adicional'
              }, {
                name: 'idProveerdorEncudernado',
                valueProperty: 'id'
              }],
              defaultValues: {
                cantidadPliegosBase: 0,
                precioRango: 0,
                precioSolapa: 0,
                precioAdicional: 0,
                idProveerdorEncudernado: null
              }
            }, {
              field: 'widthHeight',
              id: 'medidasLibros',
              where: values => ({
                id: values.widthHeight
              }),
              query: {
                db: 'sgs',
                tableName: 'analisis_factibilidad.medidas_libros',
                fields: ['pp_ci', 'pp_ct', 'pt_ancho', 'pt_alto']
              },
              targets: [{
                name: 'pp_ci',
                valueProperty: 'pp_ci'
              }, {
                name: 'pp_ct',
                valueProperty: 'pp_ct'
              }, {
                name: 'pt_ancho',
                valueProperty: 'pt_ancho'
              }, {
                name: 'pt_alto',
                valueProperty: 'pt_alto'
              }],
              defaultValues: {
                pp_ci: 0,
                pp_ct: 0,
                pt_ancho: 0,
                pt_alto: 0
              }
            }, {
              field: 'idFormato',
              id: 'solapa',
              where: values => ({
                id: values.idFormato
              }),
              query: {
                db: 'sgs',
                tableName: 'analisis_factibilidad.formatos',
                fields: ['solapa']
              },
              targets: [{
                name: 'tieneSolapa',
                valueProperty: 'solapa',
                isBoolean: true
              }],
              defaultValues: {
                tieneSolapa: false
              }
            }, {
              field: 'idFormato',
              id: 'costoGraficoAdicionales',
              where: values => ({
                id: values.idFormato,
                inactivo: 0
              }),
              query: {
                db: 'sgs',
                tableName: 'analisis_factibilidad.formatos',
                fields: ['fga.sobrecubierta', 'fga.retractilado', 'fga.perforado', 'fga.faja', 'fga.puntillado'],
                joinTable: 'analisis_factibilidad.formatos_costos_graficos_adicionales fga',
                joinCondition: 'f.id = fga.id'
              },
              targets: [{
                name: 'retractilado',
                valueProperty: 'retractilado',
                isBoolean: true
              }, {
                name: 'perforado',
                valueProperty: 'perforado',
                isBoolean: true
              }, {
                name: 'faja',
                valueProperty: 'faja',
                isBoolean: true
              }, {
                name: 'sobrecubierta',
                valueProperty: 'sobrecubierta',
                isBoolean: true
              }, {
                name: 'puntillado',
                valueProperty: 'puntillado',
                isBoolean: true
              }],
              defaultValues: {
                retractilado: false,
                perforado: false,
                faja: false,
                sobrecubierta: false,
                puntillado: false
              }
            }, {
              field: 'idProveerdorEncudernado',
              id: 'proveedoresEncuadernadosMedidas',
              where: values => ({
                id_proveedor_encuadernado: values.idProveerdorEncudernado,
                id_medida_libro: values.widthHeight
              }),
              query: {
                db: 'sgs',
                tableName: 'analisis_factibilidad.proveedores_encuadernados_medidas_libros',
                fields: ['ppe']
              },
              targets: [{
                name: 'ppe',
                valueProperty: 'ppe'
              }],
              defaultValues: {
                ppe: 0
              },
              dependencies: ['idProveerdorEncudernado', 'widthHeight']
            }, {
              field: 'idProveerdorCosto',
              id: 'proveedoresCostosMedidas',
              where: values => ({
                id_medida_libro: values.widthHeight,
                id_proveedor_costo: values.idProveerdorCosto
              }),
              query: {
                db: 'sgs',
                tableName: 'analisis_factibilidad.proveedores_costos_medidas_libros',
                fields: ['ppi']
              },
              targets: [{
                name: 'ppi',
                valueProperty: 'ppi'
              }],
              defaultValues: {
                ppi: 0
              },
              dependencies: ['widthHeight', 'idProveerdorCosto']
            }];
          }
        }
      });

      /****************************************************************
      INTERNAL MODULE: ./inputs/fields-wrapper/data-service-pages/index
      ****************************************************************/

      ims.set('./inputs/fields-wrapper/data-service-pages/index', {
        hash: 1618203783,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DataServicePages = void 0;
          var _apiService = require("../formula-calculator/api-service");
          var _getFieldsConfigs = require("./get-fields-configs");
          /*bundle*/
          class DataServicePages {
            databaseService;
            model;
            fieldConfigs;
            cache = {};
            productionModal;
            titlesTable;
            constructor({
              model
            }) {
              if (!model || typeof model !== 'object' || model.settings.processId !== 2 && model.settings.processId !== 14) return;
              this.databaseService = new _apiService.SgsDatabaseService();
              this.model = model;
              this.productionModal = model.getField('productionModal');
              this.fieldConfigs = (0, _getFieldsConfigs.getFieldConfigs)();
              this.titlesTable = model.getField('titlesTable');
              this.setupTitles();
              this.setupListeners();
            }
            setupListeners() {
              this.fieldConfigs.forEach(config => {
                const field = this.model.getField(config.field);
                if (!field) {
                  console.error(`FIELD DOES NOT EXIST ${config.field}`);
                  return;
                }
                if (config.dependencies && config.dependencies.length > 0) {
                  config.dependencies.forEach(dep => {
                    const depField = this.model.getField(dep);
                    depField.on('change', async () => {
                      const values = await this.getDependencyValues(config.dependencies);
                      const data = await this.fetchData(config, values);
                      this.updateModelFields(config, data);
                    });
                  });
                } else {
                  field.on('change', async () => {
                    if (!this.productionModal.open && config.field === 'idFormato') return;
                    await this.onChange(config);
                  });
                }
              });
            }
            onChange = async config => {
              const modelField = this.model.getField(config.field);
              await modelField.isReady;
              if (!!modelField.notFetch) return;
              const value = modelField.value;
              const data = await this.fetchData(config, {
                [config.field]: value
              });
              this.updateModelFields(config, data);
            };
            async setupTitles() {
              if (!this.titlesTable || !this.titlesTable?.entries.length) return;
              const fetchPromises = this.titlesTable.entries.flatMap(item => this.fieldConfigs.map(config => {
                if (item.hasOwnProperty(config.field)) {
                  const value = item[config.field];
                  return this.fetchData(config, {
                    [config.field]: value
                  });
                }
              }));
              await Promise.all(fetchPromises);
            }
            async getDependencyValues(dependencies) {
              const values = {};
              for (const dep of dependencies) {
                const field = this.model.getField(dep);
                await field.isReady;
                values[dep] = field.value;
              }
              return values;
            }
            async fetchData(config, values) {
              const cacheKey = `${config.id}_${JSON.stringify(values)}`;
              if (!values[config.field]) {
                this.cache[cacheKey] = config.defaultValues;
                return this.cache[cacheKey];
              }
              if (this.cache.hasOwnProperty(cacheKey)) {
                return this.cache[cacheKey];
              }
              const where = config.where(values);
              const query = config.query;
              const result = (await this.fetchFromDatabase(where, query))[0] || config.defaultValues;
              this.cache[cacheKey] = result;
              return result;
            }
            async fetchFromDatabase(where, query) {
              return this.databaseService.fetchFromDatabase(where, query);
            }
            updateModelFields(config, data) {
              config.targets.forEach(target => {
                const modelField = this.model.getField(target.name);
                if (!modelField || !data) return;
                const value = target.isBoolean ? !!data[target.valueProperty] : data[target.valueProperty];
                modelField.value = value;
                //	if (value || value === 0) modelField.triggerEvent();
              });
            }
          }
          exports.DataServicePages = DataServicePages;
        }
      });

      /*********************************************************************
      INTERNAL MODULE: ./inputs/fields-wrapper/data-service-pages/interfaces
      *********************************************************************/

      ims.set('./inputs/fields-wrapper/data-service-pages/interfaces', {
        hash: 3643997441,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************************************
      INTERNAL MODULE: ./inputs/fields-wrapper/default-item
      ****************************************************/

      ims.set('./inputs/fields-wrapper/default-item', {
        hash: 2154012055,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DEFAULT_ITEM = void 0;
          const DEFAULT_ITEM = exports.DEFAULT_ITEM = {
            id: "d31de27e-dc18-4fe8-ac11-2e99a2b28cab",
            idTipoPapel: '',
            idGramaje: '',
            idColor: '',
            paginas: 0
          };
        }
      });

      /**********************************************************************
      INTERNAL MODULE: ./inputs/fields-wrapper/formula-calculator/api-service
      **********************************************************************/

      ims.set('./inputs/fields-wrapper/formula-calculator/api-service', {
        hash: 3687893422,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SgsDatabaseService = void 0;
          var _api = require("@bgroup/http-suite/api");
          var _config = require("sgs-workflow/config");
          const cache = {};
          class SgsDatabaseService {
            apiService = new _api.Api(`${_config.default.params.server}`);
            async fetchFromDatabase(where, query) {
              const url = `form/tables/2?where=${JSON.stringify(where)}&query=${JSON.stringify(query)}`;
              if (cache[url]) {
                return cache[url];
              }
              const data = await this.apiService.get(url);
              if (!data.status) {
                throw new Error('Error fetching data or no data returned');
              }
              ;
              cache[url] = data.data.entries;
              return data.data.entries;
            }
          }
          exports.SgsDatabaseService = SgsDatabaseService;
        }
      });

      /********************************************************************
      INTERNAL MODULE: ./inputs/fields-wrapper/formula-calculator/calculate
      ********************************************************************/

      ims.set('./inputs/fields-wrapper/formula-calculator/calculate', {
        hash: 2692520286,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DefaultCalculationService = void 0;
          class DefaultCalculationService {
            calculatePliegosAEnviar(params) {
              const {
                pliegosII,
                demasia_fija,
                demasia_variable,
                pliegosIINoRedondeo,
                tirada
              } = params;
              let pliegosAEnviar = pliegosII * tirada * (1 + demasia_variable) + pliegosIINoRedondeo * demasia_fija;
              pliegosAEnviar = Math.ceil(pliegosAEnviar / 100) * 100;
              if (pliegosAEnviar <= 0) return 0;
              if (pliegosAEnviar > 0 && pliegosAEnviar <= 250) return Math.max(pliegosAEnviar, 250);
              if (pliegosAEnviar > 250) return pliegosAEnviar;
              return pliegosAEnviar;
            }
            calculateCostoPapelInterior(params) {
              const {
                pi_alto,
                pi_ancho,
                costo_papel,
                valor,
                pliegosAEnviar
              } = params;
              const costoPapelInterior = pliegosAEnviar * (pi_ancho / 100 * (pi_alto / 100) * (valor / 1000)) * costo_papel;
              return Number(costoPapelInterior.toFixed(2));
            }
            calculateCostoImpresionInterior(params) {
              const {
                pliegosII,
                costo_ctp,
                costo_entrada_maquina,
                costo_variable,
                color_total,
                tirada
              } = params;
              const costoPlanchas = Math.ceil(pliegosII * 2) / 2 * color_total * costo_ctp;
              const costoImpresionFijo = Math.ceil(pliegosII) * costo_entrada_maquina;
              const costoImpresionVariable = Math.ceil(pliegosII * 2) / 2 * (tirada / 1000) * costo_variable;
              const costoImpresionInterior = costoPlanchas + costoImpresionFijo + costoImpresionVariable;
              return Number(costoImpresionInterior.toFixed(2));
            }
          }
          exports.DefaultCalculationService = DefaultCalculationService;
        }
      });

      /***********************************************************************
      INTERNAL MODULE: ./inputs/fields-wrapper/formula-calculator/data-service
      ***********************************************************************/

      ims.set('./inputs/fields-wrapper/formula-calculator/data-service', {
        hash: 2751876016,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DataService = void 0;
          var _apiService = require("./api-service");
          class DataService {
            databaseService;
            cache;
            constructor() {
              this.databaseService = new _apiService.SgsDatabaseService();
              this.cache = {};
            }
            generateCacheKey(method, params) {
              const paramKey = JSON.stringify(params);
              return `${method}-${paramKey}`;
            }
            async fetchFromDatabase(where, query) {
              return this.databaseService.fetchFromDatabase(where, query);
            }
            async getMedidasLibroData({
              widthHeight
            }) {
              const cacheKey = this.generateCacheKey('getMedidasLibroData', {
                widthHeight
              });
              if (this.cache[cacheKey]) return this.cache[cacheKey];
              if (!widthHeight) {
                this.cache[cacheKey] = {
                  pp_ci: 0,
                  pi_alto: 0,
                  pi_ancho: 0
                };
                return this.cache[cacheKey];
              }
              const where = {
                id: widthHeight
              };
              const query = {
                db: 'sgs',
                tableName: 'analisis_factibilidad.medidas_libros',
                fields: ['pp_ci', 'pi_alto', 'pi_ancho']
              };
              this.cache[cacheKey] = (await this.fetchFromDatabase(where, query))[0];
              return this.cache[cacheKey];
            }
            async getProveedoresCostos(idColorII) {
              const cacheKey = this.generateCacheKey('getProveedoresCostos', {
                idColorII
              });
              if (this.cache[cacheKey]) return this.cache[cacheKey];
              if (!idColorII) {
                this.cache[cacheKey] = {
                  demasia_fija: 0,
                  demasia_variable: 0,
                  id: null
                };
                return this.cache[cacheKey];
              }
              const where = {
                id_proveedor_ci: 1,
                id_color_impresion: idColorII
              };
              const query = {
                db: 'sgs',
                tableName: 'analisis_factibilidad.proveedores_costos',
                fields: ['demasia_fija', 'demasia_variable', 'id']
              };
              this.cache[cacheKey] = (await this.fetchFromDatabase(where, query))[0];
              return this.cache[cacheKey];
            }
            async getGramageData(idGramageII) {
              const cacheKey = this.generateCacheKey('getGramageData', {
                idGramageII
              });
              if (this.cache[cacheKey]) return this.cache[cacheKey];
              if (!idGramageII) {
                this.cache[cacheKey] = {
                  valor: 0
                };
                return this.cache[cacheKey];
              }
              const where = {
                id: idGramageII
              };
              const query = {
                db: 'sgs',
                tableName: 'analisis_factibilidad.gramajes',
                fields: ['valor']
              };
              this.cache[cacheKey] = (await this.fetchFromDatabase(where, query))[0];
              return this.cache[cacheKey];
            }
            async getPapelData(idTipoPapelII) {
              const cacheKey = this.generateCacheKey('getPapelData', {
                idTipoPapelII
              });
              if (this.cache[cacheKey]) return this.cache[cacheKey];
              if (!idTipoPapelII) {
                this.cache[cacheKey] = {
                  costo_papel: 0
                };
                return this.cache[cacheKey];
              }
              const where = {
                id: idTipoPapelII
              };
              const query = {
                db: 'sgs',
                tableName: 'analisis_factibilidad.tipos_papeles',
                fields: ['costo_papel']
              };
              this.cache[cacheKey] = (await this.fetchFromDatabase(where, query))[0];
              return this.cache[cacheKey];
            }
            async getColoresImpresionData(idColor) {
              const cacheKey = this.generateCacheKey('getColoresImpresionData', {
                idColor
              });
              if (this.cache[cacheKey]) return this.cache[cacheKey];
              if (!idColor) {
                this.cache[cacheKey] = {
                  color_total: 0
                };
                return this.cache[cacheKey];
              }
              const where = {
                id: idColor
              };
              const query = {
                db: 'sgs',
                tableName: 'analisis_factibilidad.colores_impresiones',
                fields: ['color_total']
              };
              this.cache[cacheKey] = (await this.fetchFromDatabase(where, query))[0];
              return this.cache[cacheKey];
            }
            async getProveedoresCIData(idColorImpresion) {
              const cacheKey = this.generateCacheKey('getProveedoresCIData', {
                idColorImpresion
              });
              if (this.cache[cacheKey]) return this.cache[cacheKey];
              if (!idColorImpresion) {
                this.cache[cacheKey] = {
                  costo_ctp: 0,
                  costo_entrada_maquina: 0,
                  costo_variable: 0
                };
                return this.cache[cacheKey];
              }
              const where = {
                id_proveedor_ci: 1,
                id_color_impresion: idColorImpresion
              };
              const query = {
                db: 'sgs',
                tableName: 'analisis_factibilidad.proveedores_costos',
                fields: ['costo_ctp', 'costo_entrada_maquina', 'costo_variable']
              };
              this.cache[cacheKey] = (await this.fetchFromDatabase(where, query))[0];
              return this.cache[cacheKey];
            }
            async getPPIInterior(proveedorCostoId, widthHeight) {
              const cacheKey = this.generateCacheKey('getPPIInterior', {
                proveedorCostoId,
                widthHeight
              });
              if (this.cache[cacheKey]) return this.cache[cacheKey];
              if (!proveedorCostoId || !widthHeight) {
                this.cache[cacheKey] = {
                  ppi: 0
                };
                return this.cache[cacheKey];
              }
              const where = {
                id_medida_libro: widthHeight,
                id_proveedor_costo: proveedorCostoId
              };
              const query = {
                db: 'sgs',
                tableName: 'analisis_factibilidad.proveedores_costos_medidas_libros ',
                fields: ['ppi']
              };
              this.cache[cacheKey] = (await this.fetchFromDatabase(where, query))[0];
              return this.cache[cacheKey];
            }
          }
          exports.DataService = DataService;
        }
      });

      /****************************************************************
      INTERNAL MODULE: ./inputs/fields-wrapper/formula-calculator/index
      ****************************************************************/

      ims.set('./inputs/fields-wrapper/formula-calculator/index', {
        hash: 1573213481,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormulaCalculator = void 0;
          var _calculate = require("./calculate");
          var _dataService = require("./data-service");
          var _totals = require("./totals");
          /*bundle*/
          class FormulaCalculator {
            model;
            fieldsToOn = ['interiorPaperRepeater', 'tirada', 'widthHeight'];
            isChange = false;
            calculationService;
            dataService;
            totals;
            tirada;
            widthHeight;
            interiorPaperRepeater;
            interiorPaperRepeaterField;
            tiradaField;
            widthHeightField;
            titlesTable;
            oldData = [];
            constructor({
              model
            }) {
              if (!model || typeof model !== 'object' || model.settings.processId !== 2 && model.settings.processId !== 14) return;
              this.model = model;
              this.tiradaField = model.getField('tirada');
              this.widthHeightField = model.getField('widthHeight');
              this.titlesTable = model.getField('titlesTable');
              this.calculationService = new _calculate.DefaultCalculationService();
              this.dataService = new _dataService.DataService();
              this.totals = new _totals.Totals(model);
              this.initializeFields();
              this.setupListeners();
              this.setupTitles();
            }
            initializeFields() {
              this.fieldsToOn.forEach(field => {
                this[field] = this.model.getField(field)?.value;
              });
            }
            setupListeners() {
              this.interiorPaperRepeaterField = this.model.getField('interiorPaperRepeater');
              const onChange = async () => {
                await this.totals.calculateTotalPages();
                await this.calculate();
                await this.totals.calculateTotalGrafico();
                this.totals.calculateTotalProductionCost();
              };
              this.interiorPaperRepeaterField?.on('change', onChange);
              this.model.on('calculate.formulas.production', onChange);
              this.tiradaField.on('change', onChange);
              this.widthHeightField.on('change', onChange);
            }
            async setupTitles() {
              if (!this.titlesTable || !this.titlesTable?.entries.length) return;
              const promises = this.titlesTable?.entries.flatMap(title => {
                if (!title.interiorPaperRepeater || !Array.isArray(title.interiorPaperRepeater) || !title.interiorPaperRepeater.length) return;
                return title.interiorPaperRepeater.map(async item => {
                  const [{
                    demasia_fija,
                    demasia_variable,
                    id
                  }, {
                    valor
                  }, {
                    costo_papel
                  }, {
                    color_total
                  }, {
                    costo_ctp,
                    costo_entrada_maquina,
                    costo_variable
                  }] = await Promise.all([this.dataService.getProveedoresCostos(item.idColor), this.dataService.getGramageData(item.idGramaje), this.dataService.getPapelData(item.idTipoPapel), this.dataService.getColoresImpresionData(item.idColor), this.dataService.getProveedoresCIData(item.idColor)]);
                  return {
                    item,
                    demasia_fija,
                    demasia_variable,
                    valor,
                    costo_papel,
                    color_total,
                    costo_ctp,
                    costo_entrada_maquina,
                    costo_variable,
                    id
                  };
                });
              });
              const resolvedPromises = await Promise.all(promises);
              const promisesPPI = [];
              for (const [index, value] of resolvedPromises.entries()) {
                if (!value?.id) continue;
                const widthHeight = this.titlesTable?.entries[index].widthHeight;
                promisesPPI.push(this.dataService.getPPIInterior(value.id, widthHeight));
              }
              await Promise.all(promisesPPI);
            }
            calculate = async () => {
              this.isChange = false;
              this.fieldsToOn.forEach(field => {
                const value = this.model.getField(field)?.value;
                if (value == this[field]) return;
                this[field] = value;
                this.isChange = true;
              });
              if (!this.isChange) return;
              const results = await this.calculateFormulas();
              if (!results) return;
              await this.setValues({
                costoPapelInterior: results.costoPapelInteriorTotal,
                costoImpresionInterior: results.costoImpresionInteriorTotal
              });
            };
            calcularCantidadPliegos(paginas, ppi) {
              if (ppi === 0) return 0;
              let valorPrevio = paginas / ppi;
              let valor = Math.floor(valorPrevio);
              if (valorPrevio - valor === 0) {
                return valorPrevio;
              } else {
                let response = valorPrevio - valor;
                if (response >= 0.01 && response <= 0.25) {
                  response = valor + 0.25;
                } else if (response >= 0.26 && response <= 0.5) {
                  response = valor + 0.5;
                } else if (response >= 0.51 && response < 1) {
                  response = valor + 1;
                }
                return response;
              }
            }
            async calculateFormulas() {
              if (!this.interiorPaperRepeater || !Array.isArray(this.interiorPaperRepeater) || !this.interiorPaperRepeater.length) return;
              const results = [];
              let costoPapelInteriorTotal = 0;
              let costoImpresionInteriorTotal = 0;
              const items = structuredClone([...this.interiorPaperRepeater]);
              const medidasLibroData = await this.dataService.getMedidasLibroData({
                widthHeight: this.widthHeight
              });
              // Preparar todas las promesas de datos necesarios
              const promises = items.map(async item => {
                const [{
                  demasia_fija,
                  demasia_variable,
                  id
                }, {
                  valor
                }, {
                  costo_papel
                }, {
                  color_total
                }, {
                  costo_ctp,
                  costo_entrada_maquina,
                  costo_variable
                }] = await Promise.all([this.dataService.getProveedoresCostos(item.idColor), this.dataService.getGramageData(item.idGramaje), this.dataService.getPapelData(item.idTipoPapel), this.dataService.getColoresImpresionData(item.idColor), this.dataService.getProveedoresCIData(item.idColor)]);
                return {
                  item,
                  demasia_fija,
                  demasia_variable,
                  valor,
                  costo_papel,
                  color_total,
                  costo_ctp,
                  costo_entrada_maquina,
                  costo_variable,
                  id
                };
              });
              const resolvedPromises = await Promise.all(promises);
              const promisesPPI = [];
              for (const {
                id
              } of resolvedPromises) {
                promisesPPI.push(this.dataService.getPPIInterior(id, this.widthHeight));
              }
              const resolvedPromisesPPI = await Promise.all(promisesPPI);
              for (const [index, {
                item,
                demasia_fija,
                demasia_variable,
                valor,
                costo_papel,
                color_total,
                costo_ctp,
                costo_entrada_maquina,
                costo_variable
              }] of resolvedPromises.entries()) {
                const {
                  pp_ci,
                  pi_alto,
                  pi_ancho
                } = medidasLibroData;
                const {
                  ppi
                } = resolvedPromisesPPI[index];
                const paginas = item.paginas ? Number(item.paginas) : 0;
                const pliegosII = this.calcularCantidadPliegos(paginas, pp_ci);
                const pliegosIIPPI = this.calcularCantidadPliegos(paginas, ppi);
                const pliegosIINoRedondeo = pp_ci === 0 ? 0 : paginas / pp_ci;
                const pliegosAEnviar = this.calculationService.calculatePliegosAEnviar({
                  pliegosII,
                  demasia_fija,
                  demasia_variable,
                  pliegosIINoRedondeo,
                  tirada: this.tirada
                });
                const costoPapelInterior = this.calculationService.calculateCostoPapelInterior({
                  pi_alto,
                  pi_ancho,
                  costo_papel,
                  valor,
                  pliegosAEnviar
                });
                const costoImpresionInterior = this.calculationService.calculateCostoImpresionInterior({
                  pliegosII: pliegosIIPPI,
                  costo_ctp,
                  costo_entrada_maquina,
                  costo_variable,
                  color_total,
                  tirada: this.tirada
                });
                costoPapelInteriorTotal += costoPapelInterior;
                costoImpresionInteriorTotal += costoImpresionInterior;
                results.push({
                  pliegosII,
                  costoPapelInterior,
                  costoImpresionInterior
                });
              }
              this.oldData = items;
              return {
                results,
                costoPapelInteriorTotal,
                costoImpresionInteriorTotal
              };
            }
            async setValues(results) {
              const fields = ['costoImpresionInterior', 'costoPapelInterior'];
              for (const key of fields) {
                const field = this.model.getField(key);
                if (!field) continue;
                await field.isReady;
                const value = results[key] || 0;
                field.set({
                  value
                });
                //		if (results[key] || value === 0) field.triggerEvent();
              }
            }
          }
          exports.FormulaCalculator = FormulaCalculator;
        }
      });

      /*****************************************************************
      INTERNAL MODULE: ./inputs/fields-wrapper/formula-calculator/totals
      *****************************************************************/

      ims.set('./inputs/fields-wrapper/formula-calculator/totals', {
        hash: 2947513536,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Totals = void 0;
          class Totals {
            model;
            tiradaField;
            total;
            totalProductionCost;
            constructor(model) {
              this.model = model;
              this.tiradaField = model.getField('tirada');
              this.total = this.model.getField('total');
              this.totalProductionCost = this.model.getField('totalProductionCost');
            }
            async calculateTotalGrafico() {
              const formulaField = ['costoPapelInterior', 'costoPapelTapa', 'costoImpresionInterior', 'costoImpresionTapa', 'costoPlastificado', 'costoEncuadernacion', 'costoEspiralado'];
              let sum = 0;
              setTimeout(async () => {
                for (const item of formulaField) {
                  const formula = await this.model.getFormula(item);
                  if (formula) {
                    await formula.isReady;
                    sum += formula.value || 0;
                    continue;
                  }
                  const field = await this.model.getField(item);
                  await field.isReady;
                  if (field) {
                    sum += field.value || 0;
                  }
                  ;
                }
                const value = this.tiradaField.value ? Number(sum.toFixed(3)) || 0 : 0;
                this.total.set({
                  value
                });
              }, 100);
            }
            async calculateTotalProductionCost() {
              const formulaField = ['total', 'totalComponents', 'totalgraphicCost'];
              let sum = 0;
              setTimeout(async () => {
                for (const item of formulaField) {
                  const formula = await this.model.getFormula(item);
                  if (formula) {
                    await formula.isReady;
                    sum += formula.value || 0;
                    continue;
                  }
                  const field = await this.model.getField(item);
                  await field.isReady;
                  sum += field.value || 0;
                }
                await this.totalProductionCost.set({
                  value: this.tiradaField.value ? sum || 0 : 0
                });
              }, 200);
            }
            async calculateTotalPages() {
              const field = this.model.getField('paginas');
              await field.isReady;
              let interiorPaperRepeater = this.model.getField('interiorPaperRepeater');
              await interiorPaperRepeater.isReady;
              interiorPaperRepeater = interiorPaperRepeater.value;
              if (!interiorPaperRepeater) {
                field.set({
                  value: 0
                });
                return;
              }
              const totalPages = interiorPaperRepeater.reduce((prev, value) => prev + (parseInt(value?.paginas) || 0), 0);
              field.set({
                value: totalPages
              });
            }
          }
          exports.Totals = Totals;
        }
      });

      /**************************************************************
      INTERNAL MODULE: ./inputs/fields-wrapper/hooks/use-make-request
      **************************************************************/

      ims.set('./inputs/fields-wrapper/hooks/use-make-request', {
        hash: 2287745332,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useMakeRequest = useMakeRequest;
          var _react = require("react");
          var _entities = require("sgs-workflow/entities");
          var _context = require("../context");
          var _context2 = require("../../../context");
          const formItem = new _entities.FormItem();
          const requestCache = new Map();
          function useMakeRequest(model, item) {
            const {
              instance
            } = (0, _context.useFieldsWrapperContext)();
            const {
              manager
            } = (0, _context2.useDinamycFormContext)();
            const formatSelect = model.getField('productDetail.firstSection.idFormato');
            const acceptProductionModal = model.getField('acceptProductionModal');
            const cancelProductionModal = model.getField('cancelProductionModal');
            const [disabled, setDisabled] = _react.default.useState(!formatSelect.value);
            const [fetching, setFetching] = _react.default.useState(false);
            const makeRequest = async params => {
              const {
                updateOptionsOnly = false,
                pk,
                pid,
                name
              } = params;
              if (!pk) return;
              const cacheKey = `${name}_${pk}_${pid}`;
              if (requestCache.has(cacheKey) && !updateOptionsOnly && model.flagProductionInversion) {
                const cachedResponse = requestCache.get(cacheKey);
                const newValue = instance.value.map(record => {
                  if (record.id === item.id) return {
                    ...record,
                    [name]: cachedResponse.value
                  };
                  return record;
                });
                const specs = {
                  options: {
                    ...instance.options,
                    [name]: {
                      ...instance.options[name],
                      [item.id]: cachedResponse.options
                    }
                  }
                };
                if (model.flagProductionInversion) specs.value = newValue;
                instance.set({
                  ...specs
                });
                setDisabled(false);
                setFetching(false);
                return cachedResponse.value;
              }
              try {
                setFetching(true);
                const productionModal = model.getField('productionModal');
                const specs = {
                  id: model.settings.processId,
                  select: name,
                  dependencyId: pk,
                  parentId: pid
                };
                const response = await formItem.getSelects(specs);
                if (!response.status) return;
                const {
                  options,
                  value
                } = response.data;
                // Set options if required
                if (!updateOptionsOnly) {
                  instance.set({
                    options: {
                      ...instance.options,
                      [name]: {
                        ...instance.options[name],
                        [item.id]: options
                      }
                    }
                  });
                  instance.disabled = false;
                }
                if (!value || updateOptionsOnly) {
                  setDisabled(false);
                  setFetching(false);
                  return value;
                }
                ;
                const newValue = instance.value.map(record => {
                  if (record.id === item.id) return {
                    ...record,
                    [name]: value
                  };
                  return record;
                });
                if (productionModal.open && model.flagProductionInversion) {
                  requestCache.set(cacheKey, {
                    options,
                    value
                  });
                  instance.set({
                    value: newValue
                  });
                  instance.disabled = false;
                }
                ;
                setDisabled(false);
                setFetching(false);
                return value;
              } catch (error) {
                return {
                  status: false
                };
              } finally {
                setDisabled(false);
                setFetching(false);
              }
            };
            const updateDependencies = async ({
              idTipoPapel,
              updateOptionsOnly
            }) => {
              await makeRequest({
                pk: idTipoPapel,
                pid: formatSelect.value,
                name: 'idGramaje',
                updateOptionsOnly
              });
              await makeRequest({
                pk: idTipoPapel,
                pid: formatSelect.value,
                name: 'idColor',
                updateOptionsOnly
              });
            };
            _react.default.useEffect(() => {
              const onChange = async () => {
                model.fetching = true;
                model.parent.fetching = true;
                acceptProductionModal.loading = true;
                acceptProductionModal.disabled = true;
                cancelProductionModal.loading = true;
                cancelProductionModal.disabled = true;
                const value = await makeRequest({
                  pk: formatSelect.value,
                  pid: undefined,
                  name: 'idTipoPapel'
                });
                await updateDependencies({
                  idTipoPapel: value
                });
                acceptProductionModal.loading = false;
                acceptProductionModal.disabled = false;
                cancelProductionModal.loading = false;
                cancelProductionModal.disabled = false;
                model.fetching = false;
                model.parent.fetching = false;
              };
              const onChangeDependenciesOnly = async () => {
                model.fetching = true;
                model.parent.fetching = true;
                await makeRequest({
                  updateOptionsOnly: false,
                  pk: formatSelect.value,
                  pid: undefined,
                  name: 'idTipoPapel'
                });
                await updateDependencies({
                  idTipoPapel: item.idTipoPapel,
                  updateOptionsOnly: false
                });
                model.fetching = false;
                model.parent.fetching = false;
              };
              if (formatSelect.value && !item.idTipoPapel) onChange();
              if (item.idTipoPapel && !instance.options.idTipoPapel[item.id]) onChangeDependenciesOnly();
              formatSelect.on('change.select', onChange);
              return () => formatSelect.off('change.select', onChange);
            }, []);
            return {
              disabled,
              fetching,
              updateDependencies
            };
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./inputs/fields-wrapper/index
      *********************************************/

      ims.set('./inputs/fields-wrapper/index', {
        hash: 3934257513,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FieldsWrapper = FieldsWrapper;
          var _form = require("@bgroup/wise-form/form");
          var _react = require("react");
          var _uuid = require("uuid");
          var _context = require("./context");
          var _defaultItem = require("./default-item");
          var _item = require("./item");
          /*bundle*/
          function FieldsWrapper(props) {
            const {
              model
            } = (0, _form.useWiseFormContext)();
            const instance = model.getField(props.name);
            const formatSelect = model.getField('productDetail.firstSection.idFormato');
            const formatSelectValue = (0, _react.useRef)(formatSelect.value);
            (0, _react.useEffect)(() => {
              if (instance.disabled === props.disabled) return;
              instance.disabled = props.disabled;
            }, [props.disabled]);
            (0, _react.useEffect)(() => {
              if (!formatSelect.value && !formatSelectValue.current) {
                instance.set({
                  value: [_defaultItem.DEFAULT_ITEM],
                  options: {
                    idTipoPapel: {
                      'd31de27e-dc18-4fe8-ac11-2e99a2b28cab': []
                    },
                    idGramaje: {
                      'd31de27e-dc18-4fe8-ac11-2e99a2b28cab': []
                    },
                    idColor: {
                      'd31de27e-dc18-4fe8-ac11-2e99a2b28cab': []
                    }
                  }
                });
              }
              if (formatSelect.value === formatSelectValue.current) return;
              //	instance.set({ value: [DEFAULT_ITEM] });
              formatSelectValue.current = formatSelect.value;
            }, [formatSelect.value]);
            const addItem = () => {
              model.flagProductionInversion = true;
              const id = (0, _uuid.v4)();
              instance.set({
                value: [...instance.value, {
                  ..._defaultItem.DEFAULT_ITEM,
                  id
                }],
                options: {
                  idTipoPapel: {
                    ...instance.options.idTipoPapel,
                    [id]: []
                  },
                  idGramaje: {
                    ...instance.options.idGramaje,
                    [id]: []
                  },
                  idColor: {
                    ...instance.options.idColor,
                    [id]: []
                  }
                }
              });
            };
            const output = instance.value?.map((item, index) => _react.default.createElement(_item.ItemForm, {
              key: item.id,
              item: item,
              index: index
            }));
            const contextValue = {
              addItem,
              instance,
              disabled: instance.disabled,
              value: instance.value
            };
            return _react.default.createElement(_context.FieldsWrapperContext.Provider, {
              value: contextValue
            }, _react.default.createElement("div", {
              className: "fields-wrapper d-flex flex-column gap-1"
            }, output));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./inputs/fields-wrapper/item
      ********************************************/

      ims.set('./inputs/fields-wrapper/item', {
        hash: 4232238733,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemForm = ItemForm;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          var _select = require("sgs-workflow/select");
          var _form = require("@bgroup/wise-form/form");
          var _useMakeRequest = require("./hooks/use-make-request");
          function ItemForm({
            item,
            index
          }) {
            const {
              addItem,
              disabled: fieldDisabled,
              value: formData,
              instance
            } = (0, _context.useFieldsWrapperContext)();
            const {
              model
            } = (0, _form.useWiseFormContext)();
            const {
              disabled,
              fetching,
              updateDependencies
            } = (0, _useMakeRequest.useMakeRequest)(model, item);
            const onRemove = () => {
              const newValue = formData.filter(record => record.id !== item.id);
              instance.set({
                value: newValue
              });
            };
            const onChange = async event => {
              let {
                name,
                value
              } = event.target;
              model.flagProductionInversion = true;
              if (name === 'paginas') {
                const valuePages = parseInt(value.replace(/[^0-9]/g, ''));
                value = isNaN(valuePages) ? '' : valuePages.toString();
              }
              const newValue = instance.value.map(record => {
                if (record.id === item.id) return {
                  ...record,
                  [name]: value
                };
                return record;
              });
              instance.set({
                value: newValue
              });
              if (name === 'idTipoPapel') updateDependencies({
                idTipoPapel: value
              });
            };
            let interiorPaperValue = [];
            if (instance.options.idTipoPapel[item.id]) {
              interiorPaperValue = instance.options.idTipoPapel[item.id].find(option => option.value === item.idTipoPapel);
            }
            let grammageValue = [];
            if (instance.options.idGramaje[item.id]) {
              grammageValue = instance.options.idGramaje[item.id].find(option => option.value === item.idGramaje);
            }
            let coverColorsValue = [];
            if (instance.options.idColor[item.id]) {
              coverColorsValue = instance.options.idColor[item.id].find(option => option.value === item.idColor);
            }
            const theresOthers = formData.length > 1;
            const interiorPaperLabel = theresOthers ? `Papel interior: ${index + 1} ` : `Papel interior: `;
            const disabledInput = fieldDisabled || disabled;
            const disabledField = instance.specs.hasOwnProperty("forceDisabled") ? instance.specs.forceDisabled : disabledInput;
            return _react.default.createElement("div", {
              className: 'item'
            }, _react.default.createElement(_select.Select, {
              disabled: disabledField,
              onChange: onChange,
              className: 'sgs-react-select',
              name: 'idTipoPapel',
              label: interiorPaperLabel,
              isLoading: fetching,
              options: instance.options.idTipoPapel[item.id],
              value: interiorPaperValue
            }), _react.default.createElement(_select.Select, {
              disabled: disabledField,
              onChange: onChange,
              isLoading: fetching,
              className: 'sgs-react-select',
              classNamePrefix: 'sgs-react-select',
              name: 'idGramaje',
              label: 'Gramaje: ',
              options: instance.options.idGramaje[item.id],
              value: grammageValue
            }), _react.default.createElement(_select.Select, {
              disabled: disabledField,
              isLoading: fetching,
              onChange: onChange,
              className: 'sgs-react-select',
              classNamePrefix: 'sgs-react-select',
              name: 'idColor',
              label: 'Colores interior: ',
              options: instance.options.idColor[item.id],
              value: coverColorsValue
            }), _react.default.createElement("div", {
              className: 'item-actions'
            }, _react.default.createElement("div", {
              className: 'pui-input'
            }, _react.default.createElement("input", {
              title: 'Llene las paginas',
              id: 'paginas',
              placeholder: '',
              value: item.paginas,
              onChange: onChange,
              name: 'paginas',
              type: 'text',
              disabled: disabledField
            }), _react.default.createElement("label", {
              className: 'pui-input__label '
            }, _react.default.createElement("span", {
              className: 'label-content'
            }, " P\u00E1ginas:"))), _react.default.createElement(_components.Button, {
              onClick: addItem,
              className: 'plus-icon-button',
              icon: 'plus',
              name: 'additionalDetails',
              disabled: disabledField
            }), theresOthers ? _react.default.createElement(_components.Button, {
              onClick: onRemove,
              className: 'plus-icon-button',
              icon: 'close',
              name: 'removeDetails',
              disabled: disabledField
            }) : _react.default.createElement("div", null)));
          }
        }
      });

      /****************************************************
      INTERNAL MODULE: ./inputs/hierarchical-tree/find-node
      ****************************************************/

      ims.set('./inputs/hierarchical-tree/find-node', {
        hash: 2191716233,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.findNodePathById = findNodePathById;
          function findNodePathById(node, id, path = []) {
            if (node.id === id) {
              return [...path, node];
            }
            if (node.children) {
              for (let child of node.children) {
                const result = findNodePathById(child, id, [...path, node]);
                if (result) {
                  return result;
                }
              }
            }
            return null;
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./inputs/hierarchical-tree/icons
      ************************************************/

      ims.set('./inputs/hierarchical-tree/icons', {
        hash: 1774404367,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.iconRight = exports.iconDownRight = void 0;
          const iconRight = exports.iconRight = {
            icon: `<g stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 6l6 6l-6 6"></path></g>`,
            viewBox: '0 0 24 24'
          };
          const iconDownRight = exports.iconDownRight = {
            icon: `<g stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M16 8v8h-8"></path></g>`,
            viewBox: '0 0 24 24'
          };
        }
      });

      /************************************************
      INTERNAL MODULE: ./inputs/hierarchical-tree/index
      ************************************************/

      ims.set('./inputs/hierarchical-tree/index', {
        hash: 3142955880,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Tree = Tree;
          var _react = require("react");
          var _treeNode = require("./tree-node");
          var _form = require("@bgroup/wise-form/form");
          var _findNode = require("./find-node");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function Tree(props) {
            const [currentSelected, setCurrentSelected] = _react.default.useState(null);
            const [openNodes, setOpenNodes] = _react.default.useState({});
            const {
              model
            } = (0, _form.useWiseFormContext)();
            const instance = model.getField(props.name);
            const structureOfArt = model.getField('structureOfArt');
            const onBinder = () => {
              const targetId = structureOfArt.value; // El ID que quieres encontrar y abrir
              if (!targetId) return;
              const rootNode = instance.specs.data[0];
              const path = (0, _findNode.findNodePathById)(rootNode, targetId);
              if (path) {
                const openNodes = path.reduce((acc, node) => {
                  acc[node.id] = true;
                  if (acc[node.id] && node.level > 6) setCurrentSelected(node.id);
                  return acc;
                }, {});
                setOpenNodes(openNodes);
              }
            };
            (0, _hooks.useBinder)([structureOfArt], onBinder);
            (0, _react.useEffect)(() => {
              onBinder();
            }, []);
            const output = _react.default.useMemo(() => {
              return instance.specs.data.map(rootNode => _react.default.createElement(_treeNode.TreeNode, {
                key: rootNode.id,
                currentSelected: currentSelected,
                setCurrentSelected: setCurrentSelected,
                instance: instance,
                node: rootNode,
                isOpen: !!openNodes[rootNode.id],
                setOpenNodes: setOpenNodes,
                openNodes: openNodes
              }));
            }, [structureOfArt.value, openNodes]);
            return _react.default.createElement("ul", {
              className: "tree"
            }, output);
          }
        }
      });

      /****************************************************
      INTERNAL MODULE: ./inputs/hierarchical-tree/tree-node
      ****************************************************/

      ims.set('./inputs/hierarchical-tree/tree-node', {
        hash: 994111823,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TreeNode = TreeNode;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("./icons");
          function TreeNode({
            node,
            instance,
            currentSelected,
            setCurrentSelected,
            isOpen: propsIsOpen,
            setOpenNodes,
            openNodes
          }) {
            const [isOpen, setIsOpen] = _react.default.useState(propsIsOpen || false);
            const hasChildren = node.children && node.children.length > 0;
            const iSelected = currentSelected === node.id;
            (0, _react.useEffect)(() => {
              setIsOpen(propsIsOpen);
            }, [propsIsOpen]);
            const handleToggle = () => {
              const newIsOpen = !isOpen;
              setIsOpen(newIsOpen);
              setOpenNodes(prev => ({
                ...prev,
                [node.id]: newIsOpen
              }));
              if (!hasChildren && node.level > 6) {
                setCurrentSelected(node.id);
                instance.set({
                  value: node.id
                });
              }
            };
            const renderIcon = () => {
              if (hasChildren) {
                return isOpen ? _react.default.createElement(_icons.Icon, {
                  className: "xs",
                  ..._icons2.iconDownRight
                }) : _react.default.createElement(_icons.Icon, {
                  className: "xs",
                  ..._icons2.iconRight
                });
              }
              return null;
            };
            const renderChildren = () => {
              if (isOpen && node.children) {
                return _react.default.createElement("ul", null, node.children.map(child => _react.default.createElement(TreeNode, {
                  key: child.id,
                  node: child,
                  instance: instance,
                  currentSelected: currentSelected,
                  setCurrentSelected: setCurrentSelected,
                  isOpen: !!openNodes[child.id],
                  setOpenNodes: setOpenNodes,
                  openNodes: openNodes
                })));
              }
              return null;
            };
            const nodeCls = `${iSelected ? 'selected' : ''} ${node.level > 6 ? "selectable" : ""}`;
            return _react.default.createElement("li", {
              className: isOpen ? 'node-open' : 'node-closed'
            }, _react.default.createElement("div", {
              className: `node ${nodeCls}`,
              onClick: handleToggle
            }, renderIcon(), node.name), renderChildren());
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./inputs/hierarchical-tree/types
      ************************************************/

      ims.set('./inputs/hierarchical-tree/types', {
        hash: 2115697577,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************************************
      INTERNAL MODULE: ./inputs/icon-check-input/index
      ***********************************************/

      ims.set('./inputs/icon-check-input/index', {
        hash: 3302941504,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.IconCheckInput = void 0;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          /*bundle*/
          const IconCheckInput = ({
            label,
            checkbox,
            icon,
            ...propsToSsend
          }) => {
            return _react.default.createElement("div", {
              className: "icon-check-input"
            }, _react.default.createElement("div", {
              className: "label-container"
            }, _react.default.createElement(_form.Checkbox, {
              ...checkbox
            }), label && _react.default.createElement("label", null, label)), _react.default.createElement(_form.Input, {
              ...propsToSsend,
              icon: icon
            }));
          };
          exports.IconCheckInput = IconCheckInput;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./inputs/input-date/index
      *****************************************/

      ims.set('./inputs/input-date/index', {
        hash: 1175472806,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InputDate = InputDate;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _form2 = require("@bgroup/wise-form/form");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _dayjs = require("dayjs");
          const formatValue = value => {
            if (!value) return;
            value = typeof value === "string" ? value.replace(/([AP]M)$/, ' $1').replace(/([ap]m)$/, ' $1') : value;
            const date = new Date(value);
            const year = date.getFullYear();
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            return `${year}-${month}`;
          };
          /*bundle*/
          function InputDate(props) {
            const {
              model
            } = (0, _form2.useWiseFormContext)();
            const instance = model.getField(props.name);
            const [value, setValue] = _react.default.useState(formatValue(instance.value || ''));
            (0, _hooks.useBinder)([instance], () => setValue(formatValue(instance.value || '')));
            _react.default.useEffect(() => {
              if (!instance.specs.setDateDefault && !instance.value) return;
              const date = new Date();
              setValue((0, _dayjs.default)().format('DD/MM/YYYY'));
              instance.set({
                value: date
              });
            }, []);
            const onChange = event => {
              event.stopPropagation();
              let value = event.currentTarget.value;
              setValue(value);
              // Convertir la cadena de entrada a un objeto Date para obtener año y mes
              const [year, month] = value.split('-');
              // Crear un nuevo objeto Date con el año y mes obtenidos, estableciendo el día en 1
              const formatedValue = new Date(parseInt(year, 10), parseInt(month, 10) - 1, 1);
              instance.set({
                value: formatedValue
              });
              if (instance.specs.onChange && Array.isArray(instance.specs.onChange) && !!instance.specs.onChange.length) {
                for (const item of instance.specs.onChange) {
                  const callback = model.callbacks[item.callback];
                  if (!callback || typeof callback !== 'function') return;
                  callback({
                    dependency: instance,
                    form: model,
                    ...item
                  });
                }
                ;
              }
              ;
            };
            return _react.default.createElement(_form.Input, {
              ...props,
              value: value,
              onChange: onChange,
              type: instance.specs.inputType
            });
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./inputs/jview/index
      ************************************/

      ims.set('./inputs/jview/index', {
        hash: 4271055951,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.JView = void 0;
          var _react = require("react");
          var _jview = require("@bgroup/jview/jview");
          var _form = require("@bgroup/wise-form/form");
          /*bundle*/
          const JView = props => {
            const {
              model
            } = (0, _form.useWiseFormContext)();
            const instance = model.getField(props.name);
            const {
              title,
              entries,
              className,
              ...jviewProps
            } = instance.specs;
            const cls = title ? 'with-header' : '';
            return _react.default.createElement("div", {
              className: `form-jview-container ${cls}`
            }, title && _react.default.createElement("header", {
              className: "jview-header"
            }, _react.default.createElement("h3", null, title)), _react.default.createElement(_jview.JView, {
              ...jviewProps,
              classNames: `${className} form-jview`,
              entries: entries
            }));
          };
          exports.JView = JView;
        }
      });

      /***********************************************************************
      INTERNAL MODULE: ./inputs/material-discharge-quotation/add-files/display
      ***********************************************************************/

      ims.set('./inputs/material-discharge-quotation/add-files/display', {
        hash: 4059514006,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Display = Display;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          var _components = require("pragmate-ui/components");
          var _icons2 = require("../icons");
          function Display() {
            const {
              containerClass,
              loadingComponent,
              ref,
              draggable
            } = (0, _context.useUploaderCreateContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
              ref: draggable,
              className: "draggable"
            }, loadingComponent, _react.default.createElement("div", {
              className: `actions-upload ${containerClass}`
            }, _react.default.createElement("div", {
              className: "draggable__file"
            }, _react.default.createElement("div", {
              className: "content-action"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              className: `expand ${containerClass}`,
              ref: ref
            }, _react.default.createElement(_icons.Icon, {
              ..._icons2.iconUpload
            }), "Agregar Archivo"), _react.default.createElement("span", null, "o arr\u00E1strelo hasta aqu\u00ED"))))));
          }
        }
      });

      /***********************************************************************
      INTERNAL MODULE: ./inputs/material-discharge-quotation/attachments/index
      ***********************************************************************/

      ims.set('./inputs/material-discharge-quotation/attachments/index', {
        hash: 3274503977,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Attachments = Attachments;
          var _react = require("react");
          var _items = require("./items");
          function Attachments() {
            return _react.default.createElement("div", {
              className: 'attachments'
            }, _react.default.createElement("div", {
              className: 'list-attachments'
            }, _react.default.createElement(_items.Items, null)));
          }
        }
      });

      /***********************************************************************
      INTERNAL MODULE: ./inputs/material-discharge-quotation/attachments/items
      ***********************************************************************/

      ims.set('./inputs/material-discharge-quotation/attachments/items', {
        hash: 3676937655,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Items = Items;
          var _react = require("react");
          var _context = require("../context");
          var _preview = require("./preview");
          function Items() {
            const {
              items
            } = (0, _context.useUploaderCreateContext)();
            const preview = items.map(file => _react.default.createElement(_preview.Preview, {
              name: file.name,
              src: file.src,
              size: file.size,
              key: file.name,
              file: file
            }));
            return _react.default.createElement(_react.default.Fragment, null, preview);
          }
        }
      });

      /*************************************************************************
      INTERNAL MODULE: ./inputs/material-discharge-quotation/attachments/message
      *************************************************************************/

      ims.set('./inputs/material-discharge-quotation/attachments/message', {
        hash: 380312441,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MessageRenderer = MessageRenderer;
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          function MessageRenderer({
            detailsError,
            success
          }) {
            const succesInfo = success && _react.default.createElement(_alert.Alert, {
              closable: true,
              type: _alert.ITypes.Success
            }, _react.default.createElement("h4", {
              className: "alert__title-span"
            }, success));
            const detailsErrorInfo = detailsError && _react.default.createElement(_alert.Alert, {
              closable: true,
              type: _alert.ITypes.Error
            }, _react.default.createElement("h4", {
              className: "alert__title-span"
            }, detailsError));
            return _react.default.createElement("div", {
              className: "container-message"
            }, _react.default.createElement(_alert.Alert, {
              type: _alert.ITypes.Info
            }, _react.default.createElement("h4", {
              className: "alert__title-span"
            }, "Extensiones de archivos permitidas: .xls;.xlsx;.doc;.docx;.pdf;.jpg;.bmp;.png;.gif;.jpeg. ", _react.default.createElement("br", null), "Tama\u00F1o total permitido de archivos: 976,56 KB'")), succesInfo, detailsErrorInfo);
          }
        }
      });

      /*************************************************************************
      INTERNAL MODULE: ./inputs/material-discharge-quotation/attachments/preview
      *************************************************************************/

      ims.set('./inputs/material-discharge-quotation/attachments/preview', {
        hash: 2412885727,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Preview = Preview;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../context");
          function Preview(props) {
            const {
              name,
              src,
              size,
              file
            } = props;
            const {
              removeFile
            } = (0, _context.useUploaderCreateContext)();
            function bytesToKB(bytes) {
              return (bytes / 1024).toFixed(2);
            }
            const remove = event => {
              event.stopPropagation();
              removeFile(name);
            };
            const onClick = () => {
              if (!file) return null;
              const downloadUrl = URL.createObjectURL(file);
              const link = document.createElement('a');
              link.href = downloadUrl;
              link.setAttribute('download', file.name);
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              key: name,
              className: 'drop-file-preview__item'
            }, _react.default.createElement("strong", null, name), _react.default.createElement("p", null, bytesToKB(size), "KB"), _react.default.createElement("span", {
              className: "drop-file-preview__item__del"
            }, _react.default.createElement(_icons.Icon, {
              icon: "download",
              onClick: onClick,
              className: "xs"
            }), _react.default.createElement(_icons.Icon, {
              icon: "close",
              onClick: remove,
              className: "xs"
            }))));
          }
        }
      });

      /***************************************************************
      INTERNAL MODULE: ./inputs/material-discharge-quotation/container
      ***************************************************************/

      ims.set('./inputs/material-discharge-quotation/container', {
        hash: 3433841552,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContainerBox = ContainerBox;
          var _react = require("react");
          function ContainerBox({
            title,
            className,
            children
          }) {
            const cls = className ? `container-box ${className}` : 'container-box';
            return _react.default.createElement("section", {
              className: cls
            }, _react.default.createElement("header", {
              className: "container-box__header"
            }, _react.default.createElement("h3", {
              className: "header__h3--title"
            }, title)), _react.default.createElement("article", {
              className: "container-box__article"
            }, children));
          }
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./inputs/material-discharge-quotation/context
      *************************************************************/

      ims.set('./inputs/material-discharge-quotation/context', {
        hash: 1875288610,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useUploaderCreateContext = exports.UploaderCreateContext = void 0;
          var _react = require("react");
          const UploaderCreateContext = exports.UploaderCreateContext = _react.default.createContext({});
          const useUploaderCreateContext = () => _react.default.useContext(UploaderCreateContext);
          exports.useUploaderCreateContext = useUploaderCreateContext;
        }
      });

      /***********************************************************
      INTERNAL MODULE: ./inputs/material-discharge-quotation/icons
      ***********************************************************/

      ims.set('./inputs/material-discharge-quotation/icons', {
        hash: 1473330837,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.iconUpload = exports.iconFile = exports.iconDrap = void 0;
          const iconDrap = exports.iconDrap = {
            icon: `<g class="box__icon" xmlns="http://www.w3.org/2000/svg" width="50" height="43" viewBox="0 0 50 43"><path d="M48.4 26.5c-.9 0-1.7.7-1.7 1.7v11.6h-43.3v-11.6c0-.9-.7-1.7-1.7-1.7s-1.7.7-1.7 1.7v13.2c0 .9.7 1.7 1.7 1.7h46.7c.9 0 1.7-.7 1.7-1.7v-13.2c0-1-.7-1.7-1.7-1.7zm-24.5 6.1c.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5l10-11.6c.7-.7.7-1.7 0-2.4s-1.7-.7-2.4 0l-7.1 8.3v-25.3c0-.9-.7-1.7-1.7-1.7s-1.7.7-1.7 1.7v25.3l-7.1-8.3c-.7-.7-1.7-.7-2.4 0s-.7 1.7 0 2.4l10 11.6z"></path></g>`,
            viewBox: '0 0 50 43'
          };
          const iconUpload = exports.iconUpload = {
            icon: `<g id="upload" xmlns="http://www.w3.org/2000/svg" width="16.64" height="16" viewBox="0 0 16.64 16"><path id="Trazado_11086" data-name="Trazado 11086" d="M12.8,14.08a.649.649,0,1,0-.19.45A.615.615,0,0,0,12.8,14.08Zm2.56,0a.649.649,0,1,0-.19.45A.615.615,0,0,0,15.36,14.08Zm1.28-2.24v3.2a.956.956,0,0,1-.96.96H.96a.926.926,0,0,1-.68-.28A.926.926,0,0,1,0,15.04v-3.2a.926.926,0,0,1,.28-.68.926.926,0,0,1,.68-.28H5.23a1.974,1.974,0,0,0,.7.92,1.834,1.834,0,0,0,1.105.36H9.6a1.834,1.834,0,0,0,1.1-.36,1.974,1.974,0,0,0,.7-.92h4.27a.956.956,0,0,1,.96.96ZM13.39,5.36a.6.6,0,0,1-.59.4H10.24v4.48a.649.649,0,0,1-.64.64H7.04a.649.649,0,0,1-.64-.64V5.76H3.84a.6.6,0,0,1-.59-.4.569.569,0,0,1,.14-.69L7.87.19a.628.628,0,0,1,.9,0l4.48,4.48A.569.569,0,0,1,13.39,5.36Z" fill="#fffbff"/></g>`,
            viewBox: '0 0 16.64 16'
          };
          const iconFile = exports.iconFile = {
            icon: `<g id="file" xmlns="http://www.w3.org/2000/svg" width="17.008" height="24" viewBox="0 0 17.008 24"><path id="Path_11088" data-name="Path 11088" d="M11.513,0,6.992,4.365V5.844h6.052V0ZM15.1,0V7.825H6.992V24H24V0Z" transform="translate(-6.992)" fill="#00687a"/></g>`,
            viewBox: '0 0 17.008 24'
          };
        }
      });

      /***********************************************************
      INTERNAL MODULE: ./inputs/material-discharge-quotation/index
      ***********************************************************/

      ims.set('./inputs/material-discharge-quotation/index', {
        hash: 2210859377,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MaterialDischargeQuoation = void 0;
          var _react = require("react");
          var _input = require("./input");
          var _uploader = require("../uploader");
          /*bundle*/
          const MaterialDischargeQuoation = () => {
            return _react.default.createElement("section", {
              className: "material-discharge-quotation"
            }, _react.default.createElement("div", {
              className: "content-budget"
            }, _react.default.createElement(_input.BudgetInput, null)), _react.default.createElement(_uploader.Uploader, null));
          };
          exports.MaterialDischargeQuoation = MaterialDischargeQuoation;
        }
      });

      /***********************************************************
      INTERNAL MODULE: ./inputs/material-discharge-quotation/input
      ***********************************************************/

      ims.set('./inputs/material-discharge-quotation/input', {
        hash: 1521170208,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BudgetInput = void 0;
          var _react = require("react");
          const BudgetInput = () => {
            const [value, setValue] = (0, _react.useState)('0,00');
            const formatNumber = input => {
              let numbersAndCommaOnly = input.replace(/[^\d,]/g, '');
              let [integerPart, decimalPart] = numbersAndCommaOnly.split(',', 2);
              integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
              const formattedInput = decimalPart !== undefined ? `${integerPart},${decimalPart}` : integerPart;
              return formattedInput;
            };
            const onBlur = () => {
              if (!value && value.includes(',')) return;
              setValue(value || '0' + ',00');
            };
            const onChange = event => {
              const {
                value
              } = event.target;
              const cleanValue = value.split('').map(item => {
                const allowedSymbols = [',', '.'];
                if (allowedSymbols.includes(item)) return item;
                if (Number(item) >= 0) return item;
              });
              setValue(formatNumber(cleanValue.join('')));
            };
            return _react.default.createElement("div", {
              className: "pui-input left-label"
            }, _react.default.createElement("input", {
              id: "budget",
              type: "text",
              value: value,
              onChange: onChange,
              onBlur: onBlur
            }), _react.default.createElement("label", {
              htmlFor: "budget"
            }, "Presupuesto"));
          };
          exports.BudgetInput = BudgetInput;
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./inputs/material-discharge-quotation/message
      *************************************************************/

      ims.set('./inputs/material-discharge-quotation/message', {
        hash: 2539781977,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MessageRenderer = MessageRenderer;
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          function MessageRenderer({
            error,
            detailsError,
            success
          }) {
            const errorInfo = error && _react.default.createElement(_alert.Alert, {
              closable: true,
              type: _alert.ITypes.Error
            }, _react.default.createElement("h4", {
              className: "alert__title-span"
            }, error));
            const succesInfo = success && _react.default.createElement(_alert.Alert, {
              closable: true,
              type: _alert.ITypes.Success
            }, _react.default.createElement("h4", {
              className: "alert__title-span"
            }, success));
            const detailsErrorInfo = detailsError && _react.default.createElement(_alert.Alert, {
              closable: true,
              type: _alert.ITypes.Error
            }, _react.default.createElement("h4", {
              className: "alert__title-span"
            }, detailsError));
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_alert.Alert, {
              type: "info"
            }, _react.default.createElement("h4", {
              className: "alert__title-span"
            }, "Extensiones de archivos permitidas: .xls;.xlsx;.doc;.docx;.pdf;.jpg;.bmp;.png;.gif;.jpeg. ", _react.default.createElement("br", null), "Tama\u00F1o total permitido de archivos: 976,56 KB'")), errorInfo, succesInfo, detailsErrorInfo);
          }
        }
      });

      /***********************************************************
      INTERNAL MODULE: ./inputs/material-discharge-quotation/modal
      ***********************************************************/

      ims.set('./inputs/material-discharge-quotation/modal', {
        hash: 3716315535,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalFile = ModalFile;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _alert = require("pragmate-ui/alert");
          var _api = require("@bgroup/http-suite/api");
          var _config = require("sgs-workflow/config");
          var _wrappers = require("sgs-workflow/wrappers");
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var _processImage = require("./process-image");
          function ModalFile({
            show,
            handleModal,
            setIsModalOpen
          }) {
            const [file, setFile] = _react.default.useState();
            const [error, setError] = _react.default.useState();
            if (!show) return null;
            const onChange = event => {
              const file = event.currentTarget.files[0];
              setFile(file);
            };
            const createInput = () => {
              // Crear el elemento de entrada de archivo
              const fileInput = document.createElement('input');
              fileInput.type = 'file';
              fileInput.style.display = 'none';
              fileInput.accept = '.pdf, .jpg, .bmp, .png, .gif, .jpeg, .xls, .xlsx, .doc, .docx'; // Solo se aceptarán esos archivos .
              // Agregar el elemento de entrada de archivo al documento
              document.body.appendChild(fileInput);
              // Simular un clic en el elemento de entrada de archivo
              fileInput.click();
              // Agregar un evento para manejar la selección del archivo
              fileInput.addEventListener('change', onChange);
            };
            const cancel = () => {
              handleModal();
              setFile(undefined);
              setError(undefined);
            };
            const onSubmit = async () => {
              setError(undefined);
              if (!file) {
                setError('Extension de Archivo invalida o Tamaño de Archivo excede el permitido.');
                return;
              }
              const fileName = file?.name;
              const fileExtension = fileName.slice((fileName.lastIndexOf('.') - 1 >>> 0) + 2);
              const fileExtensions = ['pdf', 'jpg', 'bmp', 'png', 'gif', 'jpeg', 'xls', 'xlsx', 'doc', 'docx'];
              const fileSize = file?.size; // Tamaño en bytes
              // Convertir el tamaño a kilobytes
              const fileSizeKB = fileSize / 1024;
              // Tamaño máximo permitido (976,56 KB)
              const maxSizeKB = 976.56;
              if (!fileExtensions.includes(fileExtension) || fileSizeKB > maxSizeKB) {
                setError('Extension de Archivo invalida o Tamaño de Archivo excede el permitido.');
                setFile(undefined);
                return;
              }
              const api = new _api.Api(_config.default.params.filesServer).bearer(_wrappers.session.token);
              try {
                const response = await api.post('upload', {
                  multipart: true,
                  file
                });
                if (!response?.status) throw response?.error;
                const url = response.data.urls?.original ?? response.data.urls[0];
                (0, _processImage.processImage)({
                  url,
                  fileSizeKB,
                  fileName
                });
                cancel();
              } catch (error) {
                // Manejo de errores
                console.error(error);
              }
            };
            const onDelete = async () => {
              const api = new _api.Api(_config.default.params.filesServer).bearer(_wrappers.session.token);
              try {
                const response = await api.post('remove/images', {
                  id: 'FILE_ID'
                });
                if (!response.status) throw response.error;
                // Manejo de la imagen arrecho
              } catch (error) {
                // Manejo de errores
                console.error(error);
              }
            };
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "file-modal modal-sgs",
              onClose: () => setIsModalOpen(true),
              closeClicked: false
            }, _react.default.createElement("div", {
              className: "form-file"
            }, _react.default.createElement("fieldset", null, _react.default.createElement("h3", {
              className: "modal-title"
            }, "Agregar archivos"), _react.default.createElement("section", {
              className: "input-button"
            }, _react.default.createElement("span", {
              onClick: createInput
            }, _react.default.createElement(_form.Input, {
              disabled: true,
              value: file?.name
            })), _react.default.createElement(_components.Button, {
              variant: "primary",
              label: "Examinar",
              onClick: createInput
            })), _react.default.createElement(_alert.Alert, {
              type: "info"
            }, _react.default.createElement("h4", {
              className: "alert__title-span"
            }, "Extensiones de archivos permitidas: .xls;.xlsx;.doc;.docx;.pdf;.jpg;.bmp;.png;.gif;.jpeg.", ' ', _react.default.createElement("br", null), "Tama\u00F1o total permitido de archivos: 976,56 KB'")), error && _react.default.createElement(_alert.Alert, {
              type: _alert.ITypes.Error
            }, _react.default.createElement("h3", {
              className: "alert__title-span"
            }, error))), _react.default.createElement("footer", {
              className: "footer-file"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              type: "button",
              onClick: onSubmit
            }, "Aceptar"), _react.default.createElement(_components.Button, {
              variant: "secondary",
              type: "reset",
              onClick: cancel
            }, "Cancelar"))));
          }
        }
      });

      /*******************************************************************
      INTERNAL MODULE: ./inputs/material-discharge-quotation/process-image
      *******************************************************************/

      ims.set('./inputs/material-discharge-quotation/process-image', {
        hash: 70626578,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.deleteImage = deleteImage;
          exports.processImage = processImage;
          function processImage({
            url,
            fileSizeKB,
            fileName,
            nameStorage
          }) {
            const imagesLocal = localStorage.getItem(nameStorage);
            const imagesStorage = imagesLocal ? JSON.parse(imagesLocal) : [];
            imagesStorage.push({
              url,
              fileSizeKB,
              fileName
            });
            localStorage.setItem(nameStorage, JSON.stringify(imagesStorage));
          }
          ;
          function deleteImage({
            url,
            nameStorage
          }) {
            let imagesStorage = JSON.parse(localStorage.getItem(nameStorage));
            imagesStorage = imagesStorage.filter(image => image.url !== url);
            localStorage.setItem(nameStorage, JSON.stringify(imagesStorage));
          }
        }
      });

      /*******************************************************************
      INTERNAL MODULE: ./inputs/material-discharge-quotation/uploader-form
      *******************************************************************/

      ims.set('./inputs/material-discharge-quotation/uploader-form', {
        hash: 3007039789,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UploaderForm = UploaderForm;
          var _react = require("react");
          var _attachments = require("./attachments");
          var _message = require("./attachments/message");
          var _context = require("./context");
          var _display = require("./add-files/display");
          function UploaderForm() {
            const {
              detailsError,
              success
            } = (0, _context.useUploaderCreateContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "form-uploader"
            }, _react.default.createElement("div", {
              className: "form-uploader__column"
            }, _react.default.createElement(_display.Display, null), _react.default.createElement(_attachments.Attachments, null)), _react.default.createElement(_message.MessageRenderer, {
              detailsError: detailsError,
              success: success
            })));
          }
        }
      });

      /******************************************************************
      INTERNAL MODULE: ./inputs/material-discharge-quotation/use-uploader
      ******************************************************************/

      ims.set('./inputs/material-discharge-quotation/use-uploader', {
        hash: 4274057714,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useUploader = useUploader;
          var _react = require("react");
          var _uploader = require("sgs-workflow/uploader");
          var _config = require("sgs-workflow/config");
          function useUploader() {
            const ref = _react.default.useRef(null);
            const draggable = _react.default.useRef(null);
            const [uploader, setUploader] = _react.default.useState(null);
            const [success, setSuccess] = _react.default.useState();
            const [detailsError, setDetailsError] = _react.default.useState();
            const [items, setItems] = _react.default.useState([]);
            const [loading, setLoading] = _react.default.useState(false);
            _react.default.useEffect(() => {
              if (!ref?.current) return;
              const instance = new _uploader.Uploader({
                name: 'file',
                url: `${_config.default.params.filesServer}upload`,
                multiple: true
              });
              setUploader(instance);
              instance.create(ref.current, draggable.current);
              const onChange = () => {
                notAllow();
                setItems(instance?.files?.entries);
              };
              const notAllow = () => {
                const maxSizeKB = 976.56;
                const allowedExtensions = ['.xls', '.xlsx', '.doc', '.docx', '.pdf', '.jpg', '.bmp', '.png', '.gif', '.jpeg'];
                let invalidFiles = [];
                for (const item of instance.files.entries) {
                  const fileSizeKB = item.size / 1024;
                  if (fileSizeKB > maxSizeKB || !instance.files.validateExtension(item, allowedExtensions)) {
                    invalidFiles.push(item.name);
                  }
                }
                if (invalidFiles.length > 0) {
                  const invalidFileNames = invalidFiles.join(', ');
                  setDetailsError('La extensión del archivo es inválida o el tamaño del archivo excede el permitido');
                  invalidFiles.forEach(file => instance.doNotAllow(file));
                } else {
                  setDetailsError(undefined);
                }
                setItems(instance?.files?.entries);
              };
              instance.on('items.loaded', onChange);
              instance.on('item.delete', onChange);
              return () => {
                instance.off('items.loaded', onChange);
                instance.off('item.delete', onChange);
              };
            }, [ref]);
            const onSubmit = async () => {
              if (!uploader) return;
              try {
                setLoading(true);
                await uploader.publish({
                  folder: 'beyondjs'
                });
                setSuccess('Archivos publicados correctamente.');
              } catch (error) {
                console.error(`Error al publicar archivos: ${error}`);
              } finally {
                setLoading(false);
              }
            };
            const removeFile = fileName => {
              uploader.delete(fileName);
            };
            return {
              ready: !!uploader,
              uploader: uploader,
              onSubmit: onSubmit,
              ref: ref,
              draggable: draggable,
              items: items,
              removeFile: removeFile,
              detailsError: detailsError,
              loading: loading,
              success: success
            };
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./inputs/number/index
      *************************************/

      ims.set('./inputs/number/index', {
        hash: 295262249,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InputNumber = void 0;
          var _react = require("react");
          var _form = require("@bgroup/wise-form/form");
          var _form2 = require("pragmate-ui/form");
          /*bundle*/
          const InputNumber = props => {
            const {
              model
            } = (0, _form.useWiseFormContext)();
            const instance = model.getField(props.name);
            const onChange = event => {
              const value = event.target.value;
              instance.set({
                value: value ? Number(value) : value
              });
              if (instance.specs.onChange && Array.isArray(instance.specs.onChange) && !!instance.specs.onChange.length) {
                for (const item of instance.specs.onChange) {
                  const callback = model.callbacks[item.callback];
                  if (!callback || typeof callback !== 'function') return;
                  callback({
                    dependency: instance,
                    form: model,
                    ...item
                  });
                }
                ;
              }
              ;
            };
            return _react.default.createElement(_form2.Input, {
              ...props,
              onChange: onChange,
              autoComplete: "off"
            });
          };
          exports.InputNumber = InputNumber;
        }
      });

      /************************************************************
      INTERNAL MODULE: ./inputs/percentage-input/fix-number-display
      ************************************************************/

      ims.set('./inputs/percentage-input/fix-number-display', {
        hash: 2079728587,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.parseFix = void 0;
          const parseFix = (value, decimalsLimit) => {
            if (!value && value !== 0) return value;
            const valueParts = value.toString().split(',');
            const currentDecimals = valueParts.length > 1 ? valueParts[1].length : 0;
            const ints = valueParts[0];
            const currentDecimalsVal = valueParts[1] || '';
            // Si ya tiene el número correcto de decimales, retornar el valor original
            if (currentDecimals === decimalsLimit) return value;
            // Calcular los decimales faltantes
            const missingDecimals = decimalsLimit - currentDecimals;
            const paddedValueString = `${ints},${currentDecimalsVal + '0'.repeat(missingDecimals)}`;
            // Convertir de nuevo a número. Nota: Esto es más para fines de consistencia,
            // ya que agregar ceros a la derecha no cambia el valor.
            return paddedValueString;
          };
          exports.parseFix = parseFix;
        }
      });

      /***********************************************************
      INTERNAL MODULE: ./inputs/percentage-input/format-to-display
      ***********************************************************/

      ims.set('./inputs/percentage-input/format-to-display', {
        hash: 3577879805,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.formatToDisplay = void 0;
          const formatToDisplay = (input, decimalsLimit, noDecimals, allowNegative) => {
            if (!input && input !== 0) return input;
            if (input === '-') return '-';
            const isAllowNegative = !!allowNegative && input?.toString()?.startsWith('-');
            let number = Number(input);
            let formattedInput = typeof input === 'number' && !noDecimals ? number.toLocaleString('es-ES', {
              minimumFractionDigits: decimalsLimit,
              maximumFractionDigits: decimalsLimit
            }) : input;
            formattedInput = typeof formattedInput === 'string' ? formattedInput : formattedInput.toString();
            let numbersAndCommaOnly = formattedInput.replace(/[^\d,]/g, '');
            let [integerPart, decimalPart] = numbersAndCommaOnly.split(',', 2);
            integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
            const decimals = decimalsLimit && decimalPart ? decimalPart.substring(0, decimalsLimit) : decimalPart;
            formattedInput = decimalPart !== undefined && !noDecimals ? `${isAllowNegative ? '-' : ''}${integerPart},${decimals}` : `${isAllowNegative ? '-' : ''}${integerPart}`;
            return formattedInput;
          };
          exports.formatToDisplay = formatToDisplay;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./inputs/percentage-input/index
      ***********************************************/

      ims.set('./inputs/percentage-input/index', {
        hash: 3702700189,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PercentageInput = void 0;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _fixNumberDisplay = require("./fix-number-display");
          var _formatToDisplay = require("./format-to-display");
          var _form = require("@bgroup/wise-form/form");
          /*bundle*/
          const PercentageInput = props => {
            const {
              model
            } = (0, _form.useWiseFormContext)();
            const instance = model.getField(props.name);
            const decimalsLimit = instance.specs.decimalsLimit === undefined ? 2 : instance.specs.decimalsLimit;
            let value = instance.value;
            if (instance.specs.roundValue && value) value = Math.round(value);
            value = (0, _formatToDisplay.formatToDisplay)(value, decimalsLimit, instance.specs.noDecimals, instance.specs.allowNegative);
            if (instance.specs.toFixed) value = (0, _fixNumberDisplay.parseFix)(value, decimalsLimit);
            const [displayValue, setDisplayValue] = _react.default.useState(value);
            const [instanceVal, setInstanceVal] = _react.default.useState(instance.value);
            const onReset = () => instance.clear();
            (0, _hooks.useBinder)([model], onReset, ['reset']);
            const onBinder = () => {
              if (instance.isChange) return;
              let value = instance.value;
              if (instance.specs.roundValue && value) value = Math.round(value);
              value = instance.value ? (0, _formatToDisplay.formatToDisplay)(value, decimalsLimit, instance.specs.noDecimals, instance.specs.allowNegative) : '';
              if (instance.specs.toFixed && !!value) value = (0, _fixNumberDisplay.parseFix)(value, decimalsLimit);
              setDisplayValue(value);
            };
            (0, _hooks.useBinder)([instance], onBinder, ['change']);
            const convertDisplayToNumeric = display => {
              if (!display) return '';
              const numeric = display.replace(/\./g, '').replace(',', '.');
              return parseFloat(numeric);
            };
            const onBlur = () => {
              let adjustedNumericValue = instanceVal;
              if (adjustedNumericValue && !isNaN(Number(adjustedNumericValue)) && Number(adjustedNumericValue) <= 0 && !!instance.specs.notZero) {
                instance.set({
                  value: '',
                  isChange: false
                });
                setDisplayValue('');
                return;
              }
              if (instance.specs.roundUp) {
                adjustedNumericValue = Math.round(parseFloat(adjustedNumericValue?.toString()));
                instance.set({
                  value: adjustedNumericValue
                });
              }
              const toDisplayVal = (0, _formatToDisplay.formatToDisplay)(adjustedNumericValue, decimalsLimit, instance.specs.noDecimals, instance.specs.allowNegative);
              if (instance.specs.toFixed) {
                const value = (0, _fixNumberDisplay.parseFix)(toDisplayVal, decimalsLimit);
                setDisplayValue(value);
              } else setDisplayValue(toDisplayVal);
              instance.triggerEvent();
              instance.value = instanceVal;
              instance.set({
                isChange: false
              });
              instance.triggerEvent('blur');
            };
            const onChange = event => {
              const inputDisplayValue = event.target.value;
              const inputNumericValue = convertDisplayToNumeric(inputDisplayValue);
              setDisplayValue(inputDisplayValue);
              setInstanceVal(inputNumericValue);
              instance.set({
                isChange: true
              });
              if (instance.specs.onChange && Array.isArray(instance.specs.onChange) && !!instance.specs.onChange.length) {
                for (const item of instance.specs.onChange) {
                  const callback = model.callbacks[item.callback];
                  if (!callback || typeof callback !== 'function') return;
                  callback({
                    dependency: instance,
                    form: model,
                    ...item
                  });
                }
                ;
              }
              ;
            };
            const cls = `pui-input percentage ${instance.specs.className ?? ''} ${displayValue ? 'padding-percent' : ''} `;
            const properties = {
              ...props
            };
            ['isChange', 'isSetDefaultValue'].forEach(item => delete properties[item]);
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("input", {
              className: "percetange-input",
              id: "percetange",
              type: "text",
              ...properties,
              // onFocus={onFocus}
              onChange: onChange,
              onBlur: onBlur,
              title: instance.specs?.title,
              value: displayValue || ''
            }), instance.specs.label && _react.default.createElement("label", {
              className: "pui-input__label",
              htmlFor: "percetange"
            }, _react.default.createElement("span", {
              className: "label-content"
            }, instance.specs.label)), !!displayValue && _react.default.createElement("span", {
              className: "symbol-percent"
            }, "%"));
          };
          exports.PercentageInput = PercentageInput;
          PercentageInput.defaultProps = {
            isSetDefaultValue: true
          };
        }
      });

      /*****************************************
      INTERNAL MODULE: ./inputs/plus-input/index
      *****************************************/

      ims.set('./inputs/plus-input/index', {
        hash: 2639221436,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PlusInput = void 0;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          const PlusInput = props => {
            return _react.default.createElement("div", {
              className: "plus-input"
            }, _react.default.createElement(_form.Input, {
              ...props
            }), _react.default.createElement(_icons.IconButton, {
              icon: "plus"
            }));
          };
          exports.PlusInput = PlusInput;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./inputs/reference-number/index
      ***********************************************/

      ims.set('./inputs/reference-number/index', {
        hash: 508285426,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InputReferenceNumber = void 0;
          var _react = require("react");
          var _form = require("@bgroup/wise-form/form");
          var _form2 = require("pragmate-ui/form");
          var _helpers = require("sgs-workflow/helpers");
          /*bundle*/
          const InputReferenceNumber = props => {
            const {
              model
            } = (0, _form.useWiseFormContext)();
            const instance = model.getField(props.name);
            const value = (0, _helpers.generateNumeroReferencia)(instance.value, model.processId);
            return _react.default.createElement(_form2.Input, {
              ...props,
              disabled: instance.disabled,
              value: value
            });
          };
          exports.InputReferenceNumber = InputReferenceNumber;
        }
      });

      /**************************************
      INTERNAL MODULE: ./inputs/select/arr-eq
      **************************************/

      ims.set('./inputs/select/arr-eq', {
        hash: 172924697,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.arraysEqual = arraysEqual;
          function deepEqual(obj1, obj2) {
            // Comprueba si son estrictamente iguales
            if (obj1 === obj2) return true;
            // Comprueba si son null o no son objetos
            if (obj1 == null || typeof obj1 != "object" || obj2 == null || typeof obj2 != "object") return false;
            // Obtiene las claves de ambos objetos
            let keysA = Object.keys(obj1);
            let keysB = Object.keys(obj2);
            // Comprueba si tienen el mismo número de propiedades
            if (keysA.length != keysB.length) return false;
            // Comprueba cada propiedad
            for (let key of keysA) {
              if (!keysB.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
            }
            return true;
          }
          function arraysEqual(arr1, arr2) {
            // Comprueba si los arrays tienen la misma longitud
            if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1?.length !== arr2?.length) return false;
            // Compara cada objeto en los arrays
            for (let i = 0; i < arr1.length; i++) {
              if (!deepEqual(arr1[i], arr2[i])) return false;
            }
            return true;
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./inputs/select/controller
      ******************************************/

      ims.set('./inputs/select/controller', {
        hash: 737070488,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _model = require("@beyond-js/reactive/model");
          class Controller extends _model.ReactiveModel {
            #options = [];
            get options() {
              return this.#options;
            }
            set options(value) {
              this.#options = value;
              this.triggerEvent();
            }
            defaultOptions = [];
            instance;
            generalModel;
            props;
            canCreate = false;
            get value() {
              if (!this.instance) return '';
              const selectableValue = this.instance.options.find(option => option.value === this.instance?.value);
              let value = this.instance.value || this.instance.value === 0 ? selectableValue : '';
              if (typeof this.instance.value === 'boolean') value = selectableValue;
              if (this.canCreate && !selectableValue) value = {
                label: this.instance.value,
                value: this.instance.value
              };
              return value;
            }
            get customNoOptionsMessage() {
              return () => 'No hay opciones';
            }
            constructor(props) {
              super();
              this.#options = props.options;
              this.instance = props.instance;
              this.generalModel = props.generalModel;
              this.props = props;
              this.defaultOptions = this.instance.options;
              this.canCreate = props.canCreate;
            }
            onChange = async event => {
              const value = event.target.value;
              if (this.instance.specs.onChange && Array.isArray(this.instance.specs.onChange) && !!this.instance.specs.onChange.length) {
                for (const item of this.instance.specs.onChange) {
                  const callback = this.generalModel.callbacks[item.callback];
                  if (!callback || typeof callback !== 'function') return;
                  await callback({
                    dependency: this.instance,
                    form: this.generalModel,
                    ...item
                  });
                }
                ;
              }
              ;
              this.instance.set({
                selectedOptionLabel: event.target.label,
                value: value
              });
              this.instance.triggerEvent('change.select');
              if (!this.props.onSelect && typeof this.props.onSelect !== 'object') return;
              const updatedProps = {
                ...this.props,
                value: value
              };
              const properties = Object.keys(this.props).map(item => `this.${item}`);
              this.props.onSelect.forEach(action => {
                const isAnInternalValue = properties.includes(action?.value);
                const value = isAnInternalValue ? updatedProps[action.value.split('.')[1]] : action.value;
                this.generalModel.getField(action.to).set({
                  [action.property]: value
                });
              });
            };
            customFilter = search => {
              if (!search) {
                this.defaultOptions = this.instance.options.filter(item => !item.isDisabled);
                this.#options = this.defaultOptions;
                this.triggerEvent();
                return;
              }
              const searchingOptions = [...this.instance.options.filter(item => !item.isDisabled)];
              let orderedOptions = searchingOptions.sort((optionA, optionB) => {
                let aStartsWith = optionA.label.toLowerCase().startsWith(search.toLowerCase());
                let bStartsWith = optionB.label.toLowerCase().startsWith(search.toLowerCase());
                if (aStartsWith && !bStartsWith) {
                  return -1;
                }
                if (!aStartsWith && bStartsWith) {
                  return 1;
                }
                let aIncludes = optionA.label.toLowerCase().includes(search.toLowerCase());
                let bIncludes = optionB.label.toLowerCase().includes(search.toLowerCase());
                if (aIncludes && !bIncludes) {
                  return -1;
                }
                if (!aIncludes && bIncludes) {
                  return 1;
                }
                return 0;
              });
              orderedOptions = orderedOptions;
              this.options = orderedOptions;
              this.triggerEvent();
            };
          }
          exports.Controller = Controller;
        }
      });

      /*************************************
      INTERNAL MODULE: ./inputs/select/index
      *************************************/

      ims.set('./inputs/select/index', {
        hash: 818024504,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Select = void 0;
          var _react = require("react");
          var _form = require("@bgroup/wise-form/form");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _icons = require("pragmate-ui/icons");
          var _creatable = require("react-select/creatable");
          var _controller = require("./controller");
          var _select = require("sgs-workflow/select");
          var _arrEq = require("./arr-eq");
          /*bundle*/
          const Select = props => {
            const {
              model: generalModel
            } = (0, _form.useWiseFormContext)();
            const [, setUpdate] = _react.default.useState({});
            const instance = generalModel.getField(props.name);
            const {
              current: controller
            } = _react.default.useRef(new _controller.Controller({
              ...instance.specs,
              generalModel,
              instance
            }));
            let {
              options,
              disabled,
              name,
              icon
            } = instance;
            const {
              label,
              forceDisabled
            } = instance.specs;
            (0, _hooks.useBinder)([instance], () => {
              const isEqualsOptions = (0, _arrEq.arraysEqual)(instance?.options, controller.options);
              if (isEqualsOptions) return;
              controller.options = instance?.options;
              setUpdate({});
            });
            (0, _react.useEffect)(() => {
              if (!instance.value) return;
              if (!instance.specs.notTrigger) instance.triggerEvent('value.change');
              if (!!instance.options.length && !instance.options.some(option => option.value === instance.value) && !instance.specs.canCreate) {
                instance.set({
                  value: ''
                });
              }
            }, [instance.value]);
            (0, _hooks.useBinder)([controller], () => setUpdate({}));
            let cls = instance.className || instance.className === "" ? instance.className : instance.specs.className;
            cls = `${cls ?? ''}  pui-react-select`;
            if (!options || !options?.find) {
              console.error(`No options provided for ${name}`);
              return null;
            }
            const onCreateOption = props => {
              controller.onChange({
                target: {
                  value: props
                }
              });
            };
            const onChange = props => {
              controller.onChange(props);
            };
            const formatCreateLabel = inputValue => {
              return `Crear "${inputValue}"`;
            };
            const {
              canCreate,
              dependentOn,
              ...selectProps
            } = instance.specs;
            const Control = canCreate ? _creatable.default : _select.Select;
            // @todo Remove property label,alredy on pui
            delete selectProps.label;
            delete selectProps.className;
            const iconTootip = typeof icon === 'object' ? {
              ...icon
            } : {};
            let controllerOptions = controller.options;
            if (instance.removeOptions) {
              controllerOptions = instance.options.filter(item => item.value === instance.value);
            }
            const selectDisabled = instance.specs.hasOwnProperty('forceDisabled') ? forceDisabled : disabled;
            const onClick = event => event.stopPropagation();
            return _react.default.createElement("div", {
              className: cls,
              onClick: onClick
            }, _react.default.createElement("div", {
              onClick: onClick,
              className: 'select-label'
            }, _react.default.createElement("span", {
              onClick: onClick
            }, label, icon && _react.default.createElement("span", {
              onClick: onClick,
              ...iconTootip
            }, _react.default.createElement(_icons.Icon, {
              onClick: onClick,
              ...icon
            }))), _react.default.createElement(_select.Select, {
              ...selectProps,
              onChange: onChange,
              value: instance.value,
              className: "sgs-react-select",
              isLoading: instance?.fetching,
              options: controllerOptions,
              disabled: selectDisabled,
              canCreate: canCreate
            })));
          };
          exports.Select = Select;
        }
      });

      /****************************************
      INTERNAL MODULE: ./inputs/select/observer
      ****************************************/

      ims.set('./inputs/select/observer', {
        hash: 1892440827,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StyleObserver = void 0;
          class StyleObserver {
            observer;
            node;
            constructor({
              node,
              callback
            }) {
              this.node = node;
              this.observer = new MutationObserver(mutations => {
                mutations.forEach(mutation => {
                  if (mutation.type !== 'childList') return;
                  const element = node.querySelector('.sgs-react-select__menu > .sgs-react-select__menu-list');
                  if (!element) return;
                  element.addEventListener('scroll', callback);
                });
              });
            }
            startObserving() {
              if (!this.node) return;
              const config = {
                childList: true
              };
              this.observer.observe(this.node, config);
            }
            stopObserving() {
              this.observer.disconnect();
            }
          }
          exports.StyleObserver = StyleObserver;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./inputs/text-field/index
      *****************************************/

      ims.set('./inputs/text-field/index', {
        hash: 327318126,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TextField = TextField;
          var _react = require("react");
          var _form = require("@bgroup/wise-form/form");
          /* bundle */
          function TextField({
            name
          }) {
            const {
              model
            } = (0, _form.useWiseFormContext)();
            const instance = model.getField(name);
            const {
              className
            } = instance.specs;
            const cls = `${className ?? ''} text-field`;
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("strong", {
              className: 'text-label'
            }, instance.label), _react.default.createElement("div", {
              className: 'text-input'
            }, instance.value));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./inputs/text/index
      ***********************************/

      ims.set('./inputs/text/index', {
        hash: 1390872310,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InputText = InputText;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _form2 = require("@bgroup/wise-form/form");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function InputText(props) {
            const {
              model
            } = (0, _form2.useWiseFormContext)();
            const instance = model.getField(props.name);
            const [value, setValue] = _react.default.useState(instance.value);
            (0, _hooks.useBinder)([instance], () => setValue(instance.value));
            const disabled = instance.specs.hasOwnProperty('forceDisabled') ? instance.specs.forceDisabled : instance.disabled;
            const onChange = event => {
              event.stopPropagation();
              let value = event.currentTarget.value;
              setValue(value);
              instance.set({
                value
              });
              if (instance.specs.onChange && Array.isArray(instance.specs.onChange) && !!instance.specs.onChange.length) {
                for (const item of instance.specs.onChange) {
                  const callback = model.callbacks[item.callback];
                  if (!callback || typeof callback !== 'function') return;
                  callback({
                    dependency: instance,
                    form: model,
                    ...item
                  });
                }
                ;
              }
              ;
            };
            return _react.default.createElement(_form.Input, {
              ...props,
              value: value,
              onChange: onChange,
              type: instance.specs.inputType,
              disabled: disabled,
              autoComplete: "off"
            });
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./inputs/top-label/index
      ****************************************/

      ims.set('./inputs/top-label/index', {
        hash: 44280913,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TopLabel = void 0;
          var _react = require("react");
          var _context = require("../../context");
          var _form = require("pragmate-ui/form");
          var _containerTooltip = require("../../wrappers/tooltip/container-tooltip");
          var _form2 = require("@bgroup/wise-form/form");
          /*bundle*/
          const TopLabel = props => {
            const {
              model
            } = (0, _form2.useWiseFormContext)();
            const instance = model.getField(props.name);
            const {
              types
            } = (0, _context.useDinamycFormContext)();
            const {
              items,
              labels,
              className
            } = instance.specs;
            const inputs = items.map((item, index) => {
              const output = item.fields.map((entry, i) => {
                if (entry.type === 'label') return _react.default.createElement(_containerTooltip.ContainerTooltip, {
                  data: {
                    ...entry
                  }
                }, _react.default.createElement("span", {
                  className: "label-top label-content",
                  key: i
                }, entry.label));
                const Control = types[entry.type] || _form.Input;
                return _react.default.createElement(Control, {
                  key: i,
                  ...entry
                });
              });
              return _react.default.createElement("div", {
                className: "row-inputs",
                key: index
              }, output);
            });
            const output = labels.map(item => {
              return _react.default.createElement("span", {
                className: "label-top",
                key: item.label
              }, item.label);
            });
            const cls = `${className ?? ''} content-to-label`;
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("div", {
              className: "content-inputs"
            }, ' ', _react.default.createElement("span", null), " ", output), _react.default.createElement("div", {
              className: "rows-inputs"
            }, inputs));
          };
          exports.TopLabel = TopLabel;
        }
      });

      /********************************************************
      INTERNAL MODULE: ./inputs/traffic-ligth/format-to-display
      ********************************************************/

      ims.set('./inputs/traffic-ligth/format-to-display', {
        hash: 387728663,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.formatToDisplay = void 0;
          const formatToDisplay = ({
            input,
            isPercent,
            roundUp,
            decimalsLimit = 2
          }) => {
            if (!input && input !== 0) return input;
            input = typeof input === "string" && input.includes(",") ? input.replaceAll(",", '.') : input;
            let formattedInput = Number(input);
            if (roundUp) formattedInput = Math.round(formattedInput);
            formattedInput = formattedInput.toLocaleString('es-ES', {
              minimumFractionDigits: decimalsLimit,
              maximumFractionDigits: decimalsLimit
            });
            return `${formattedInput}${isPercent ? '%' : ''}`;
          };
          exports.formatToDisplay = formatToDisplay;
        }
      });

      /********************************************
      INTERNAL MODULE: ./inputs/traffic-ligth/index
      ********************************************/

      ims.set('./inputs/traffic-ligth/index', {
        hash: 3263642358,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InputTrafficLight = InputTrafficLight;
          var _react = require("react");
          var _form = require("@bgroup/wise-form/form");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form2 = require("pragmate-ui/form");
          var _light = require("./light");
          var _useCalculate = require("./use-calculate");
          var _formatToDisplay = require("./format-to-display");
          /* bundle */
          function InputTrafficLight({
            name,
            ...props
          }) {
            const {
              model
            } = (0, _form.useWiseFormContext)();
            const instance = model.getField(name);
            const {
              className,
              isPercent,
              decimalsLimit,
              showParameter
            } = instance.specs;
            const value = (0, _formatToDisplay.formatToDisplay)({
              input: instance.value,
              isPercent,
              roundUp: instance.specs.roundUp,
              decimalsLimit
            });
            const [valueToDisplay, setValueToDisplay] = _react.default.useState(value);
            (0, _hooks.useBinder)([instance], () => {
              const value = (0, _formatToDisplay.formatToDisplay)({
                input: instance.value,
                isPercent,
                roundUp: instance.specs.roundUp,
                decimalsLimit
              });
              setValueToDisplay(value);
            });
            const [color] = (0, _useCalculate.useCalculate)({
              name,
              instance
            });
            const cls = `${className ?? ''} container__traffic-light`;
            ['decimalsLimit', 'isPercent'].forEach(property => delete props[property]);
            const parameter = showParameter ? `(${(0, _formatToDisplay.formatToDisplay)({
              input: instance.parameter,
              isPercent: false,
              roundUp: false,
              decimalsLimit: 2
            })})` : "";
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement(_form2.Input, {
              type: "text",
              ...props,
              name: name,
              value: valueToDisplay || ""
            }), _react.default.createElement(_light.TrafficLight, {
              color: color
            }), _react.default.createElement("strong", {
              className: 'parameter'
            }, parameter));
          }
          InputTrafficLight.defaultProps = {
            isPercent: true
          };
        }
      });

      /********************************************
      INTERNAL MODULE: ./inputs/traffic-ligth/light
      ********************************************/

      ims.set('./inputs/traffic-ligth/light', {
        hash: 2668749552,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TrafficLight = TrafficLight;
          var _react = require("react");
          /* bundle */
          function TrafficLight({
            color
          }) {
            let cls = color ? `border-traffic-light ${color}` : 'border-traffic-light';
            return _react.default.createElement("div", {
              className: cls
            });
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./inputs/traffic-ligth/types
      ********************************************/

      ims.set('./inputs/traffic-ligth/types', {
        hash: 731306246,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************************************
      INTERNAL MODULE: ./inputs/traffic-ligth/use-calculate
      ****************************************************/

      ims.set('./inputs/traffic-ligth/use-calculate', {
        hash: 2070241390,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useCalculate = useCalculate;
          var _form = require("@bgroup/wise-form/form");
          var _verification = require("./verification");
          var _react = require("react");
          const colors = {
            green: '0',
            yellow: '1',
            red: '2',
            grey: '9'
          };
          const colorsNumber = {
            '0': 'green',
            '1': 'yellow',
            '2': 'red',
            '9': 'grey'
          };
          function useCalculate({
            name,
            instance
          }) {
            const {
              model
            } = (0, _form.useWiseFormContext)();
            const [color, setColor] = _react.default.useState(colorsNumber[instance.color || '0']);
            const verify = async () => {
              const field = model.getField(name);
              await field.isReady;
              if (!field || !field?.condition) return;
              const isValues = !!field?.condition.values;
              const {
                isPercent,
                isNotDefault
              } = instance.specs;
              const firstValue = isValues ? field?.condition.values.find(item => {
                const fieldValue = model.getField(item);
                if (!fieldValue) return;
                const value = parseFloat(fieldValue.value);
                return !isNaN(value);
              }) : 0;
              const firsValueInput = firstValue ? parseFloat(model.getField(firstValue).value) : undefined;
              let value = !!field?.condition.values ? field.condition.values?.reduce((accumulator, item) => {
                const fieldValue = model.getField(item);
                if (!fieldValue) return;
                return firsValueInput;
              }, firsValueInput ?? 0) : '';
              const parameterValue = !isNaN(parseFloat(field.value)) ? parseFloat(field.value) : '';
              const parameter = field.parameter ? isPercent ? field.parameter * 100 : field.parameter : parameterValue;
              if (!field.condition.yellow && !field.condition.red && !field.condition.green) {
                const color = field.specs.condition.traffic || "grey";
                field.set({
                  color: colors[color]
                });
                setColor(color);
                return;
              }
              const config = {
                parameter,
                value: value || value === 0 ? value : isNotDefault || field.parameter ? "" : 0,
                red: field.condition.red,
                yellow: field.condition.yellow,
                green: field.condition.green,
                traffic: field.condition.traffic
              };
              const verificationCondition = new _verification.VerificationCondition(config);
              const color = verificationCondition.verify();
              if (field.color) field.set({
                color: colors[color]
              });
              setColor(color);
            };
            _react.default.useEffect(() => {
              if (!instance.specs.isNotDefault) verify();
              if (!instance.specs.isNotModelOn) model.on('calculate.traffics', verify);
              let field;
              if (instance.condition) {
                field = model.getField(instance.condition.values[0]);
                if (field) field.on('change', verify);
              }
              ;
              return () => {
                if (!instance.specs.isNotModelOn) model.off('calculate.traffics', verify);
                if (instance.condition && field) instance.off('change', verify);
              };
            }, []);
            return [color, setColor];
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./inputs/traffic-ligth/verification
      ***************************************************/

      ims.set('./inputs/traffic-ligth/verification', {
        hash: 472755250,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.VerificationCondition = void 0;
          class VerificationCondition {
            parameter;
            red;
            yellow;
            green;
            value;
            traffic = 'grey';
            defaultColor = 'grey';
            constructor({
              parameter,
              red,
              yellow,
              green,
              value,
              traffic
            }) {
              this.parameter = parameter;
              this.red = this.processString(red);
              this.yellow = this.processString(yellow);
              this.green = this.processString(green);
              this.value = value;
              this.traffic = traffic ?? this.defaultColor;
              this.defaultColor = traffic ?? this.defaultColor;
            }
            processString(inputString) {
              const withoutPercentage = inputString.replaceAll(/%/g, '');
              const processedString = withoutPercentage.replaceAll(/y/g, '&&');
              return processedString;
            }
            processAndCondition({
              string,
              value
            }) {
              const regex = new RegExp(/&&/g);
              if (!string.match(regex)) return string;
              return string.replaceAll(regex, `&& ${value}`);
            }
            validate({
              color
            }) {
              try {
                if (!this.value && this.value !== 0 || !this.parameter && this.parameter !== 0) {
                  this.traffic = this.defaultColor;
                  return;
                }
                ;
                const subtraction = Number(this.value) - Number(this.parameter);
                const operation = `${subtraction} ${this.processAndCondition({
                  string: this[color],
                  value: subtraction
                })}`;
                if (eval(operation)) this.traffic = color;
              } catch (error) {
                this.traffic = this.defaultColor;
              }
            }
            verify() {
              this.validate({
                color: 'red'
              });
              this.validate({
                color: 'yellow'
              });
              this.validate({
                color: 'green'
              });
              return this.traffic ?? this.defaultColor;
            }
          }
          // Ejemplo de uso
          // const condiciones = new VerificationCondition({
          //     parameter: 33,
          //     red: '<= -2%',
          //     yellow: '< 0 y > - 2%',
          //     green: '>= 0%',
          //     value: 27,
          // });
          // const resultado = condiciones.verify();
          exports.VerificationCondition = VerificationCondition;
        }
      });

      /***************************************************
      INTERNAL MODULE: ./inputs/uploader/add-files/display
      ***************************************************/

      ims.set('./inputs/uploader/add-files/display', {
        hash: 4121085690,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Display = Display;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          var _components = require("pragmate-ui/components");
          var _icons2 = require("../icons");
          function Display() {
            const {
              disabled,
              containerClass,
              loadingComponent,
              ref,
              draggable
            } = (0, _context.useUploaderCreateContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
              ref: draggable,
              className: "draggable"
            }, loadingComponent, _react.default.createElement("div", {
              className: `actions-upload ${containerClass}`
            }, _react.default.createElement("div", {
              className: "draggable__file"
            }, _react.default.createElement("div", {
              className: "content-action"
            }, _react.default.createElement(_components.Button, {
              disabled: disabled,
              variant: "primary",
              className: `expand ${containerClass}`,
              ref: ref
            }, _react.default.createElement(_icons.Icon, {
              ..._icons2.iconUpload
            }), "Agregar Archivo"), _react.default.createElement("span", null, "o arr\u00E1strelo hasta aqu\u00ED"))))));
          }
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./inputs/uploader/attachments/image-config
      **********************************************************/

      ims.set('./inputs/uploader/attachments/image-config', {
        hash: 399738909,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ImageConfig = void 0;
          const ImageConfig = exports.ImageConfig = {
            default: `${globalThis.baseDir}assets/file-blank-solid-240.png`
          };
        }
      });

      /***************************************************
      INTERNAL MODULE: ./inputs/uploader/attachments/index
      ***************************************************/

      ims.set('./inputs/uploader/attachments/index', {
        hash: 499497381,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Attachments = Attachments;
          var _react = require("react");
          var _items = require("./items");
          function Attachments() {
            return _react.default.createElement("div", {
              className: 'attachments'
            }, _react.default.createElement("div", {
              className: 'list-attachments'
            }, _react.default.createElement(_items.Items, null)));
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./inputs/uploader/attachments/items
      ***************************************************/

      ims.set('./inputs/uploader/attachments/items', {
        hash: 801209322,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Items = Items;
          var _react = require("react");
          var _context = require("../context");
          var _preview = require("./preview");
          function Items() {
            const {
              items
            } = (0, _context.useUploaderCreateContext)();
            if (!items) return null;
            const preview = items?.map(file => _react.default.createElement(_preview.Preview, {
              file: file,
              key: file.fileId
            }));
            return _react.default.createElement(_react.default.Fragment, null, preview);
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./inputs/uploader/attachments/message
      *****************************************************/

      ims.set('./inputs/uploader/attachments/message', {
        hash: 1112760094,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MessageRenderer = MessageRenderer;
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          var _context = require("../context");
          function MessageRenderer() {
            const {
              detailsError,
              success,
              allowedExtensions,
              onCloseAlertError
            } = (0, _context.useUploaderCreateContext)();
            const succesInfo = success && _react.default.createElement(_alert.Alert, {
              closable: true,
              type: "success"
            }, _react.default.createElement("h4", {
              className: "alert__title-span"
            }, success));
            const detailsErrorInfo = detailsError && _react.default.createElement(_alert.Alert, {
              closable: true,
              type: "error",
              onClose: onCloseAlertError
            }, _react.default.createElement("h4", {
              className: "alert__title-span"
            }, detailsError));
            const message = ` Extensiones de archivos permitidas: ${allowedExtensions.join(', ')}. <br /> Tamaño total permitido por archivo: 976,56 KB`;
            return _react.default.createElement("div", {
              className: "container-message"
            }, _react.default.createElement(_alert.Alert, {
              type: "info"
            }, _react.default.createElement("h4", {
              className: "alert__title-span",
              dangerouslySetInnerHTML: {
                __html: message
              }
            })), succesInfo, detailsErrorInfo);
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./inputs/uploader/attachments/preview
      *****************************************************/

      ims.set('./inputs/uploader/attachments/preview', {
        hash: 3182359787,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Preview = Preview;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../context");
          var _config = require("sgs-workflow/config");
          function Preview(props) {
            const {
              file: {
                data,
                id,
                name,
                length
              }
            } = props;
            const {
              removeFile,
              disabled
            } = (0, _context.useUploaderCreateContext)();
            function bytesToKB(bytes) {
              return (bytes / 1024).toFixed(2);
            }
            const remove = event => {
              event.stopPropagation();
              removeFile(name);
            };
            const srcDownload = `${_config.default.params.filesServer}download?pathFile=${data}&filename=${name}`;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              key: name,
              className: "drop-file-preview__item"
            }, _react.default.createElement("strong", null, name), _react.default.createElement("p", null, bytesToKB(length), "KB"), _react.default.createElement("span", {
              className: "drop-file-preview__item__del"
            }, _react.default.createElement("a", {
              href: srcDownload,
              target: "_blank",
              rel: "noopener noreferrer",
              title: "download"
            }, _react.default.createElement(_icons.Icon, {
              icon: "download",
              className: "xs"
            })), !disabled && _react.default.createElement(_icons.Icon, {
              icon: "close",
              onClick: remove,
              className: "xs"
            }))));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./inputs/uploader/container
      *******************************************/

      ims.set('./inputs/uploader/container', {
        hash: 3433841552,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContainerBox = ContainerBox;
          var _react = require("react");
          function ContainerBox({
            title,
            className,
            children
          }) {
            const cls = className ? `container-box ${className}` : 'container-box';
            return _react.default.createElement("section", {
              className: cls
            }, _react.default.createElement("header", {
              className: "container-box__header"
            }, _react.default.createElement("h3", {
              className: "header__h3--title"
            }, title)), _react.default.createElement("article", {
              className: "container-box__article"
            }, children));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./inputs/uploader/context
      *****************************************/

      ims.set('./inputs/uploader/context', {
        hash: 1875288610,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useUploaderCreateContext = exports.UploaderCreateContext = void 0;
          var _react = require("react");
          const UploaderCreateContext = exports.UploaderCreateContext = _react.default.createContext({});
          const useUploaderCreateContext = () => _react.default.useContext(UploaderCreateContext);
          exports.useUploaderCreateContext = useUploaderCreateContext;
        }
      });

      /***************************************
      INTERNAL MODULE: ./inputs/uploader/icons
      ***************************************/

      ims.set('./inputs/uploader/icons', {
        hash: 1473330837,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.iconUpload = exports.iconFile = exports.iconDrap = void 0;
          const iconDrap = exports.iconDrap = {
            icon: `<g class="box__icon" xmlns="http://www.w3.org/2000/svg" width="50" height="43" viewBox="0 0 50 43"><path d="M48.4 26.5c-.9 0-1.7.7-1.7 1.7v11.6h-43.3v-11.6c0-.9-.7-1.7-1.7-1.7s-1.7.7-1.7 1.7v13.2c0 .9.7 1.7 1.7 1.7h46.7c.9 0 1.7-.7 1.7-1.7v-13.2c0-1-.7-1.7-1.7-1.7zm-24.5 6.1c.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5l10-11.6c.7-.7.7-1.7 0-2.4s-1.7-.7-2.4 0l-7.1 8.3v-25.3c0-.9-.7-1.7-1.7-1.7s-1.7.7-1.7 1.7v25.3l-7.1-8.3c-.7-.7-1.7-.7-2.4 0s-.7 1.7 0 2.4l10 11.6z"></path></g>`,
            viewBox: '0 0 50 43'
          };
          const iconUpload = exports.iconUpload = {
            icon: `<g id="upload" xmlns="http://www.w3.org/2000/svg" width="16.64" height="16" viewBox="0 0 16.64 16"><path id="Trazado_11086" data-name="Trazado 11086" d="M12.8,14.08a.649.649,0,1,0-.19.45A.615.615,0,0,0,12.8,14.08Zm2.56,0a.649.649,0,1,0-.19.45A.615.615,0,0,0,15.36,14.08Zm1.28-2.24v3.2a.956.956,0,0,1-.96.96H.96a.926.926,0,0,1-.68-.28A.926.926,0,0,1,0,15.04v-3.2a.926.926,0,0,1,.28-.68.926.926,0,0,1,.68-.28H5.23a1.974,1.974,0,0,0,.7.92,1.834,1.834,0,0,0,1.105.36H9.6a1.834,1.834,0,0,0,1.1-.36,1.974,1.974,0,0,0,.7-.92h4.27a.956.956,0,0,1,.96.96ZM13.39,5.36a.6.6,0,0,1-.59.4H10.24v4.48a.649.649,0,0,1-.64.64H7.04a.649.649,0,0,1-.64-.64V5.76H3.84a.6.6,0,0,1-.59-.4.569.569,0,0,1,.14-.69L7.87.19a.628.628,0,0,1,.9,0l4.48,4.48A.569.569,0,0,1,13.39,5.36Z" fill="#fffbff"/></g>`,
            viewBox: '0 0 16.64 16'
          };
          const iconFile = exports.iconFile = {
            icon: `<g id="file" xmlns="http://www.w3.org/2000/svg" width="17.008" height="24" viewBox="0 0 17.008 24"><path id="Path_11088" data-name="Path 11088" d="M11.513,0,6.992,4.365V5.844h6.052V0ZM15.1,0V7.825H6.992V24H24V0Z" transform="translate(-6.992)" fill="#00687a"/></g>`,
            viewBox: '0 0 17.008 24'
          };
        }
      });

      /***************************************
      INTERNAL MODULE: ./inputs/uploader/index
      ***************************************/

      ims.set('./inputs/uploader/index', {
        hash: 1206563966,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Uploader = void 0;
          var _react = require("react");
          var _uploaderForm = require("./uploader-form");
          var _context = require("./context");
          var _useUploader = require("./use-uploader");
          var _components = require("pragmate-ui/components");
          var _form = require("@bgroup/wise-form/form");
          /*bundle*/
          const Uploader = props => {
            const {
              loading,
              detailsError,
              success,
              onSubmit,
              ref,
              draggable,
              removeFile,
              allowedExtensions,
              onCloseAlertError
            } = (0, _useUploader.useUploader)(props.name);
            const storedFiles = localStorage.getItem('uploadedFiles');
            const {
              model
            } = (0, _form.useWiseFormContext)();
            const instance = model.getField(props.name);
            const items = instance.value;
            const filesNames = !items?.length ? '' : items.map((item, index) => _react.default.createElement("div", {
              key: index,
              className: "container-files__item"
            }, _react.default.createElement("span", {
              className: "file-name"
            }, item.name)));
            const containerClass = loading ? 'hidden' : '';
            const loadingComponent = loading && _react.default.createElement(_components.Spinner, {
              type: "primary",
              size: "xl",
              active: true
            });
            const values = {
              loading,
              detailsError,
              success,
              onSubmit,
              ref,
              draggable,
              items,
              removeFile,
              containerClass,
              loadingComponent,
              storedFiles,
              filesNames,
              name: props.name,
              disabled: props.disabled,
              allowedExtensions,
              onCloseAlertError
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_context.UploaderCreateContext.Provider, {
              value: values
            }, _react.default.createElement("section", {
              className: "container-uploader-material"
            }, _react.default.createElement(_uploaderForm.UploaderForm, null))));
          };
          exports.Uploader = Uploader;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./inputs/uploader/uploader-form
      ***********************************************/

      ims.set('./inputs/uploader/uploader-form', {
        hash: 2022037341,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UploaderForm = UploaderForm;
          var _react = require("react");
          var _attachments = require("./attachments");
          var _message = require("./attachments/message");
          var _display = require("./add-files/display");
          function UploaderForm() {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "form-uploader"
            }, _react.default.createElement("div", {
              className: "form-uploader__column"
            }, _react.default.createElement(_display.Display, null), _react.default.createElement(_attachments.Attachments, null)), _react.default.createElement(_message.MessageRenderer, null)));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./inputs/uploader/use-uploader
      **********************************************/

      ims.set('./inputs/uploader/use-uploader', {
        hash: 457996741,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useUploader = useUploader;
          var _react = require("react");
          var _uploader = require("sgs-workflow/uploader");
          var _config = require("sgs-workflow/config");
          var _uuid = require("uuid");
          var _form = require("@bgroup/wise-form/form");
          function useUploader(name) {
            const ref = _react.default.useRef(null);
            const draggable = _react.default.useRef(null);
            const {
              model: generalFormModel
            } = (0, _form.useWiseFormContext)();
            const model = generalFormModel.getField(name);
            const [uploader, setUploader] = _react.default.useState(null);
            const [success, setSuccess] = _react.default.useState();
            const [detailsError, setDetailsError] = _react.default.useState();
            const [items, setItems] = _react.default.useState([]);
            const [loading, setLoading] = _react.default.useState(false);
            const allowedExtensionsDefault = ['.xls', '.xlsx', '.doc', '.docx', '.pdf', '.jpg', '.bmp', '.png', '.gif', '.jpeg'];
            const allowedExtensions = model.specs.allowedExtensions || allowedExtensionsDefault;
            _react.default.useEffect(() => {
              if (!ref?.current) return;
              const instance = new _uploader.Uploader({
                name: 'file',
                url: _config.default.params.filesServer,
                multiple: true
              });
              instance.uploadedFiles = model.value;
              setUploader(instance);
              instance.create(ref.current, draggable.current);
              const onChange = () => {
                notAllow();
                onSubmit();
              };
              const onSubmit = async () => {
                if (!instance) return;
                onUpload();
              };
              const onUpload = async () => {
                if (!instance) return;
                try {
                  setLoading(true);
                  if (instance.files.entries.length === 0) return;
                  const response = await instance.publish({});
                  if (!response.status) throw new Error(response.error);
                  const items = response.data.map(item => ({
                    id: (0, _uuid.v4)(),
                    name: item.name,
                    fileId: item.id,
                    data: Array.isArray(item.urls) ? item.urls[0] : item.urls.original,
                    length: item.length,
                    attachedTypeId: model.specs.attachedTypeId
                  }));
                  model.value = model.value.concat([...items]);
                  instance.uploadedFiles = model.value;
                  localStorage.setItem('added_files', JSON.stringify(model.value));
                  if (model.specs.onChange && Array.isArray(model.specs.onChange) && !!model.specs.onChange.length) {
                    for (const item of model.specs.onChange) {
                      const callback = generalFormModel.callbacks[item.callback];
                      if (!callback || typeof callback !== 'function') return;
                      callback({
                        dependency: model,
                        form: generalFormModel,
                        ...item
                      });
                    }
                    ;
                  }
                  ;
                  setSuccess('Archivos publicados correctamente.');
                } catch (error) {
                  console.error(`Error al publicar archivos: ${error}`);
                } finally {
                  setLoading(false);
                  globalThis.setTimeout(() => {
                    setDetailsError(undefined);
                    setSuccess(undefined);
                  }, 3500);
                }
              };
              const onDelete = async () => {
                if (!instance) return;
                try {
                  setLoading(true);
                  // Find the element that was removed
                  const originalIds = model.value.map(item => item.fileId);
                  const currentIds = instance.uploadedFiles.map(item => item.fileId);
                  const removedItems = originalIds.filter(item => !currentIds.includes(item));
                  const removedIds = model.value.filter(file => removedItems.includes(file.fileId)).map(file => file.fileId);
                  const newValue = model.value.filter(item => !removedItems.includes(item.fileId));
                  model.value = newValue;
                  let removedOldIds = localStorage.getItem('removed_files');
                  const removedAllIds = removedOldIds ? JSON.parse(removedOldIds).concat(removedIds) : removedIds;
                  localStorage.setItem('removed_files', JSON.stringify(removedAllIds));
                  if (model.specs.onChange && Array.isArray(model.specs.onChange) && !!model.specs.onChange.length) {
                    for (const item of model.specs.onChange) {
                      const callback = generalFormModel.callbacks[item.callback];
                      if (!callback || typeof callback !== 'function') return;
                      callback({
                        dependency: model,
                        form: generalFormModel,
                        ...item
                      });
                    }
                    ;
                  }
                  ;
                  // await instance.remove(removedIds);
                  return;
                } catch (error) {
                  console.error(`Error al publicar archivos: ${error}`);
                } finally {
                  setLoading(false);
                }
              };
              const notAllow = () => {
                const maxSizeKB = 976.56;
                let invalidFiles = [];
                if (!Array.isArray(model.value)) model.value = [];
                let files = {};
                let alreadyExists;
                for (const item of instance.files.entries) {
                  const fileSizeKB = item.size / 1024;
                  const passTheSize = fileSizeKB > maxSizeKB;
                  const isExtensionInvalid = !instance.files.validateExtension(item, allowedExtensions);
                  // Check if the file is repeated in model.value
                  alreadyExists = model.value.some(file => item.name === file.name);
                  const isInvalid = passTheSize || isExtensionInvalid || alreadyExists;
                  if (isInvalid) {
                    invalidFiles.push(item.name);
                  }
                }
                if (invalidFiles.length > 0) {
                  const message = alreadyExists ? "El archivo ya fue cargado" : "La extensión del archivo es inválida o el tamaño del archivo excede el permitido";
                  setDetailsError(message);
                  invalidFiles.forEach(file => instance.doNotAllow(file));
                } else {
                  setDetailsError(undefined);
                }
                // Only filters the valid files
              };
              instance.on('items.loaded', onChange);
              instance.on('item.delete', onDelete);
              return () => {
                instance.off('items.loaded', onChange);
                instance.off('item.delete', onDelete);
              };
            }, [ref]);
            const onCloseAlertError = () => {
              setDetailsError(undefined);
            };
            const onSubmit = async () => {
              // if (!uploader) return;
              // try {
              // 	setLoading(true);
              // 	const response = await uploader.publish({
              // 		folder: 'beyondjs',
              // 	});
              // 	setSuccess('Archivos publicados correctamente.');
              // } catch (error) {
              // 	console.error(`Error al publicar archivos: ${error}`);
              // } finally {
              // 	setLoading(false);
              // }
            };
            const removeFile = id => {
              uploader.delete(id);
            };
            return {
              ready: !!uploader,
              uploader: uploader,
              onSubmit: onSubmit,
              ref: ref,
              draggable: draggable,
              items: items,
              removeFile: removeFile,
              detailsError: detailsError,
              loading: loading,
              success: success,
              allowedExtensions,
              onCloseAlertError
            };
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./inputs/validation-modal/index
      ***********************************************/

      ims.set('./inputs/validation-modal/index', {
        hash: 1212246034,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ValidationModal = ValidationModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _components = require("pragmate-ui/components");
          var _form = require("@bgroup/wise-form/form");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _useItems = require("./use-items");
          var _list = require("./list");
          /*bundle*/
          function ValidationModal(props) {
            const {
              model
            } = (0, _form.useWiseFormContext)();
            const instance = model.getField(props.name);
            const [open, setOpen] = _react.default.useState(instance.open);
            (0, _hooks.useBinder)([instance], () => {
              setOpen(instance.open);
            });
            const items = (0, _useItems.useItems)({
              instance
            });
            if (!open) return null;
            const onClose = () => instance.set({
              open: false
            });
            const description = instance.description;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: `beauty-modal save-success modal-sgs alert-modal validation-modal ${props.className}`,
              onClose: onClose,
              closeClicked: false
            }, ' ', _react.default.createElement("h3", {
              className: "modal-title"
            }, instance.specs.title), description && _react.default.createElement("p", null, description), _react.default.createElement("div", {
              className: "items-list"
            }, _react.default.createElement(_list.List, {
              items: items,
              instance: instance
            })), _react.default.createElement("div", {
              className: "actions"
            }, ' ', _react.default.createElement(_components.Button, {
              variant: "primary",
              label: "Aceptar",
              className: "form-button",
              onClick: onClose
            }), ' '), ' ');
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./inputs/validation-modal/item
      **********************************************/

      ims.set('./inputs/validation-modal/item', {
        hash: 625925883,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = Item;
          var _react = require("react");
          var _uuid = require("uuid");
          function Item({
            group,
            messages,
            subGroups,
            groupIndex
          }) {
            const output = subGroups?.size ? Array.from(subGroups.keys()).map(key => {
              const sub = subGroups.get(key);
              return _react.default.createElement("div", {
                key: (0, _uuid.v4)()
              }, _react.default.createElement("h4", null, "- ", key), _react.default.createElement("ul", null, sub.messages.map(message => _react.default.createElement("li", {
                key: (0, _uuid.v4)()
              }, message))));
            }) : [];
            const groupText = `${group ? `${groupIndex + 1}-{group}` : ""}`;
            return _react.default.createElement("div", null, group !== 'generic' && !!group && _react.default.createElement("h3", null, groupIndex + 1, "-", group), _react.default.createElement("ul", null, messages.map((message, index) => _react.default.createElement("li", {
              key: (0, _uuid.v4)()
            }, message)), output));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./inputs/validation-modal/list
      **********************************************/

      ims.set('./inputs/validation-modal/list', {
        hash: 957896444,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = void 0;
          var _react = require("react");
          var _uuid = require("uuid");
          var _item = require("./item");
          const List = ({
            items,
            instance
          }) => {
            const theresNoGroups = items.every(([group]) => typeof group === 'undefined');
            if (theresNoGroups) {
              return _react.default.createElement("ul", null, instance.items.map((item, index) => _react.default.createElement("li", {
                key: (0, _uuid.v4)()
              }, item.message)));
            }
            return items.map(([group, {
              messages,
              subGroups
            }], groupIndex) => _react.default.createElement(_item.default, {
              group: group,
              messages: messages,
              subGroups: subGroups,
              groupIndex: groupIndex
            }));
          };
          exports.List = List;
        }
      });

      /***************************************************
      INTERNAL MODULE: ./inputs/validation-modal/use-items
      ***************************************************/

      ims.set('./inputs/validation-modal/use-items', {
        hash: 1536412372,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useItems = useItems;
          var _react = require("react");
          function useItems({
            instance
          }) {
            const groupedErrors = _react.default.useMemo(() => {
              const groupedErrors = new Map();
              instance.items.forEach(item => {
                if (typeof item === 'string') {
                  if (!groupedErrors.has('generic')) {
                    groupedErrors.set('generic', {
                      messages: []
                    });
                  }
                  groupedErrors.get('generic').messages.push(item);
                } else {
                  if (!groupedErrors.has(item.group)) {
                    groupedErrors.set(item.group, {
                      order: item.order,
                      messages: [],
                      subGroups: new Map()
                    });
                  }
                  const group = groupedErrors.get(item.group);
                  if (item.subGroup) {
                    if (!group.subGroups.has(item.subGroup)) {
                      group.subGroups.set(item.subGroup, {
                        messages: []
                      });
                    }
                    const subGroup = group.subGroups.get(item.subGroup);
                    if (!subGroup.messages.includes(item.message)) {
                      subGroup.messages.push(item.message);
                    }
                  } else {
                    if (!group.messages.includes(item.message)) {
                      group.messages.push(item.message);
                    }
                  }
                }
              });
              return groupedErrors;
            }, [instance.items]);
            return Array.from(groupedErrors.entries()).reverse().sort(([, a], [, b]) => a?.order - b?.order);
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./specific/atm-titles/index
      *******************************************/

      ims.set('./specific/atm-titles/index', {
        hash: 2338785588,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ATMTitles = void 0;
          var _jview = require("@bgroup/jview/jview");
          var _form = require("@bgroup/wise-form/form");
          var _react = require("react");
          var _editorialData = require("./items/editorial-date/editorial-data");
          var _promotional = require("./items/promotional");
          /*bundle*/
          const ATMTitles = props => {
            const {
              model
            } = (0, _form.useWiseFormContext)();
            const instance = model.getField(props.name);
            const {
              title,
              onCheck,
              onDelete,
              ...jviewProps
            } = instance.specs;
            const [state, setState] = (0, _react.useState)({});
            const items = {
              altaMaterialJView: _editorialData.ItemEditorialData,
              altaMaterialJViewPromotional: _promotional.ItemEditorialDataPromotional
            };
            const itemTable = instance.itemTable ?? instance.specs.itemTable;
            const item = items[itemTable];
            const [selected, setSelected] = (0, _react.useState)(new Map());
            const cls = `${jviewProps.className} ${title ? "with-header" : ""}`;
            instance.toSend = instance.entries.length >= 1 ? instance.entries.slice(1, instance.entries.length) : instance.entries;
            const rows = instance.specs?.limitDepdentOnItems ? instance.entries.length : instance.rows;
            (0, _react.useEffect)(() => {
              instance.specs.toSend = instance.toSend;
              instance.specs.entries = instance.entries;
              instance.triggerEvent("value.change.table");
              instance.triggerEvent("value.change");
              instance.triggerEvent("change.items");
            }, []);
            const value = {
              ...jviewProps,
              item,
              rowProps: {
                ...props,
                ...instance.specs,
                setSelected,
                selected,
                model,
                onCheck,
                onDelete,
                instance,
                setState,
                value: instance.value
              },
              entries: instance.entries,
              rows,
              total: instance.total,
              loading: instance.loading,
              selected: instance.selected,
              dataHead: instance.dataHead ?? instance.specs.dataHead
            };
            return _react.default.createElement("div", {
              className: `form-jview-container jview-titles ${cls}`
            }, title && _react.default.createElement("header", {
              className: "jview-header"
            }, _react.default.createElement("h5", null, title)), _react.default.createElement(_jview.JView, {
              ...value
            }));
          };
          exports.ATMTitles = ATMTitles;
        }
      });

      /*************************************************************************
      INTERNAL MODULE: ./specific/atm-titles/items/editorial-date/editorial-data
      *************************************************************************/

      ims.set('./specific/atm-titles/items/editorial-date/editorial-data', {
        hash: 1767228267,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemEditorialData = ItemEditorialData;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _form = require("pragmate-ui/form");
          var _loadInstance = require("../../../load-instance");
          function ItemEditorialData({
            item,
            model,
            name,
            instance,
            index
          }) {
            const [tipoProducto, setTipoProducto] = (0, _react.useState)(item.tipoProducto);
            const [disabledCodeMaterial, setDisabledCodeMaterial] = (0, _react.useState)(true);
            const [disabledCodeMaterialMdm, setDisabledCodeMaterialDmd] = (0, _react.useState)(true);
            const button = model.getField("addMaterialDischargeMaterial");
            (0, _react.useEffect)(() => {
              if (!item.tipoProducto) return;
              const index = instance.entries.findIndex(entry => entry.id ? entry.id === item.id : item.idTitulo === entry.idTitulo);
              if (index === 0) {
                setTipoProducto(`${item.tipoProducto}`);
                return;
              }
              setTipoProducto(`-- ${item.tipoProducto}`);
            }, [item.tipoProducto]);
            (0, _react.useEffect)(() => {
              const disabledCodeMaterial = !!instance.specs.notDisabledMaterialCode ? instance.specs.forceDisabled || item.prevCodigoMaterial : true;
              const disabledCodeMaterialMdm = !!instance.specs.notDisabledMaterialCode ? instance.specs.forceDisabled || item.prevCodigoMdm : true;
              setDisabledCodeMaterial(disabledCodeMaterial);
              setDisabledCodeMaterialDmd(disabledCodeMaterialMdm);
            }, []);
            const handleClick = event => {
              event.stopPropagation();
              button.disabled = false;
              if (item.id === "product" || index === 0) {
                if (instance.specs.deleteCallbacks && Array.isArray(instance.specs.deleteCallbacks) && !!instance.specs.deleteCallbacks.length) {
                  for (const item of instance.specs.deleteCallbacks) {
                    const callback = model.callbacks[item.callback];
                    if (!callback || typeof callback !== 'function') return;
                    callback({
                      dependency: instance,
                      form: model,
                      ...item
                    });
                  }
                  ;
                }
                ;
                instance.set({
                  entries: []
                });
                instance.triggerEvent("value.change.table");
                instance.triggerEvent("value.change");
                instance.triggerEvent("change.items");
                instance.triggerEvent();
                return;
              }
              let entries = instance.entries.filter(record => record.id !== item.id);
              if (entries.length === 1) {
                entries = instance.entries.filter((record, i) => record.id !== "product" && i !== 0);
              }
              if (entries.length === 2) {
                entries = entries.filter((record, i) => record.id !== "product" && i !== 0);
              }
              if (entries.length === 0) {
                if (instance.specs.deleteCallbacks && Array.isArray(instance.specs.deleteCallbacks) && !!instance.specs.deleteCallbacks.length) {
                  for (const item of instance.specs.deleteCallbacks) {
                    const callback = model.callbacks[item.callback];
                    if (!callback || typeof callback !== 'function') return;
                    callback({
                      dependency: instance,
                      form: model,
                      ...item
                    });
                  }
                  ;
                }
                ;
              }
              instance.set({
                entries
              });
              instance.triggerEvent("value.change.table");
              instance.triggerEvent("value.change");
              instance.triggerEvent("change.items");
              instance.triggerEvent();
            };
            const handleChange = event => {
              const name = event.currentTarget.name;
              const value = event.currentTarget.value;
              item[name] = value;
              const entries = instance.entries.map(entry => {
                return {
                  ...entry,
                  [name]: item.id === entry.id ? value : entry[name]
                };
              });
              instance.set({
                entries
              });
              instance.triggerEvent("value.change");
            };
            const sizeExceeded = item.titulo.length > 41;
            return _react.default.createElement("tr", null, _react.default.createElement("td", {
              className: "td-items"
            }, _react.default.createElement("span", null, tipoProducto)), _react.default.createElement("td", {
              className: "td-items td-icon"
            }, _react.default.createElement("div", {
              className: "input-waring"
            }, _react.default.createElement(_form.Input, {
              value: item.titulo || "",
              name: "titulo",
              onChange: handleChange,
              disabled: instance.disabled
            }), sizeExceeded && _react.default.createElement("div", {
              title: "El t\u00EDtulo ingresado no puede ser mayor a 41 caracteres"
            }, _react.default.createElement(_icons.Icon, {
              icon: "triangle-exclamation"
            })))), _react.default.createElement("td", {
              className: "td-items"
            }, _react.default.createElement(_form.Input, {
              value: item.codigoMaterialMdm,
              name: "codigoMaterialMdm",
              disabled: disabledCodeMaterialMdm,
              onChange: handleChange
            })), _react.default.createElement("td", {
              className: "td-items"
            }, _react.default.createElement(_form.Input, {
              value: item.codigoMaterial,
              name: "codigoMaterial",
              disabled: disabledCodeMaterial,
              onChange: handleChange
            })), _react.default.createElement("td", {
              className: "td-items"
            }, item.idInstancia), _react.default.createElement("td", {
              className: "td-items"
            }, item.idInstancia && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_loadInstance.LoadInstance, {
              instanceId: item.idInstancia,
              processId: 2,
              taskId: 87
            }))), instance.specs.deleteItems && _react.default.createElement("td", null, _react.default.createElement(_icons.IconButton, {
              icon: "close",
              "data-id": item.id,
              onClick: handleClick
            })));
          }
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./specific/atm-titles/items/promotional/index
      *************************************************************/

      ims.set('./specific/atm-titles/items/promotional/index', {
        hash: 3898219136,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemEditorialDataPromotional = ItemEditorialDataPromotional;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _form = require("pragmate-ui/form");
          function ItemEditorialDataPromotional({
            item,
            model,
            name,
            instance
          }) {
            const [value, setValue] = _react.default.useState(item.titulo);
            const [disabledCodeMaterial, setDisabledCodeMaterial] = (0, _react.useState)(true);
            const [disabledCodeMaterialMdm, setDisabledCodeMaterialDmd] = (0, _react.useState)(true);
            (0, _react.useEffect)(() => {
              setValue(item.titulo);
            }, [item.titulo]);
            const handleChange = event => {
              const name = event.currentTarget.name;
              const value = event.currentTarget.value;
              const entries = instance.entries.map(entry => {
                return {
                  ...entry,
                  [name]: item.id === entry.id ? value : entry[name]
                };
              });
              instance.set({
                entries
              });
              instance.triggerEvent("value.change");
              setValue(value);
            };
            const sizeExceeded = value.length >= 41;
            (0, _react.useEffect)(() => {
              const disabledCodeMaterial = !!instance.specs.notDisabledMaterialCode ? item.prevCodigoMaterial : true;
              const disabledCodeMaterialMdm = !!instance.specs.notDisabledMaterialCode ? item.prevCodigoMdm : true;
              setDisabledCodeMaterial(disabledCodeMaterial);
              setDisabledCodeMaterialDmd(disabledCodeMaterialMdm);
            }, []);
            return _react.default.createElement("tr", null, _react.default.createElement("td", {
              className: "td-items"
            }, _react.default.createElement("span", null, item.tipoProducto)), _react.default.createElement("td", {
              className: "td-items td-icon"
            }, _react.default.createElement("div", {
              className: "input-waring"
            }, _react.default.createElement(_form.Input, {
              value: value,
              name: "titulo",
              maxLength: 41,
              onChangeCapture: handleChange
            }), sizeExceeded && _react.default.createElement("div", {
              title: "El t\u00EDtulo ingresado no puede ser mayor a 41 caracteres"
            }, _react.default.createElement(_icons.Icon, {
              icon: "triangle-exclamation"
            })))), _react.default.createElement("td", {
              className: "td-items"
            }, _react.default.createElement(_form.Input, {
              value: item.codigoMaterialMdm,
              name: "codigoMaterialMdm",
              disabled: disabledCodeMaterialMdm,
              onChange: handleChange
            })), _react.default.createElement("td", {
              className: "td-items"
            }, _react.default.createElement(_form.Input, {
              value: item.codigoMaterial,
              name: "codigoMaterial",
              disabled: disabledCodeMaterial,
              onChange: handleChange
            })), _react.default.createElement("td", {
              className: "td-items"
            }, item.idInstancia), _react.default.createElement("td", {
              className: "td-items"
            }, item.idInstancia && _react.default.createElement(_icons.IconButton, {
              icon: "search",
              className: "icon-primary",
              title: "Ver detalle"
            })));
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./specific/atm-titles/process-items
      ***************************************************/

      ims.set('./specific/atm-titles/process-items', {
        hash: 866399162,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.processItems = processItems;
          var _uuid = require("uuid");
          function processItems({
            materialCode,
            businessPanelMaterialCode,
            componentType,
            title,
            codigoMaterialMDM,
            afaId
          }) {
            let materialCodeArray = [];
            let componentTypeArray = [];
            let titleArray = [];
            let codigoMaterialMDMArray = [];
            let afaIdArray = [];
            // Validar si cada variable es una cadena
            if (typeof businessPanelMaterialCode === 'string') {
              materialCodeArray = businessPanelMaterialCode.split('/');
            } else {
              materialCodeArray = [materialCode];
            }
            if (typeof componentType === 'string') {
              componentTypeArray = componentType.split('/');
            } else {
              return [];
            }
            if (typeof title === 'string') {
              titleArray = title.split(' / ');
            } else {
              titleArray = new Array(componentTypeArray.length).fill('');
            }
            if (typeof afaId === 'string') {
              afaIdArray = afaId.split(' / ');
            } else {
              afaIdArray = new Array(componentTypeArray.length).fill('');
            }
            if (typeof codigoMaterialMDM === 'string') {
              codigoMaterialMDMArray = codigoMaterialMDM.split(';');
            } else {
              codigoMaterialMDMArray = new Array(componentTypeArray.length).fill('');
            }
            // Validar si el tamaño de los arrays coincide
            if (materialCodeArray.length !== componentTypeArray.length) {
              let difference = componentTypeArray.length - materialCodeArray.length;
              for (let i = 0; i < difference; i++) {
                materialCodeArray.push('');
              }
              materialCodeArray[0] = materialCode;
            }
            // Crear el array de objetos resultantes
            let result = [];
            for (let i = 0; i < componentTypeArray.length; i++) {
              result.push({
                id: componentTypeArray.length > 1 && i === 0 ? 'product' : (0, _uuid.v4)(),
                codigoMaterial: materialCodeArray[i] ? materialCodeArray[i].trim() : '',
                tipoProducto: componentTypeArray[i] ? componentTypeArray[i].trim() : '',
                titulo: titleArray[i] ? titleArray[i].trim() : '',
                codigoMaterialMdm: codigoMaterialMDMArray[i] ? codigoMaterialMDMArray[i].trim() : '',
                idInstancia: afaIdArray[i] ? afaIdArray[i].trim() : ''
              });
            }
            return result;
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./specific/indicators/calculator
      ************************************************/

      ims.set('./specific/indicators/calculator', {
        hash: 1406660384,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormulaCalculator = void 0;
          var _mathjs = require("mathjs");
          class FormulaCalculator {
            formulas;
            math = (0, _mathjs.create)(_mathjs.all);
            constructor(formulas) {
              this.formulas = formulas;
            }
            calculate(name, values, entries = [], field = '') {
              const formula = this.formulas.find(f => f.name === name);
              if (!formula) {
                throw new Error(`Formula ${name} not found`);
              }
              if (formula.type === 'array') {
                return this.evaluateArrayFormula(formula, values, entries, field);
              }
              return this.evaluateBasicFormula(formula, values);
            }
            evaluateArrayFormula(formula, values, entries, field) {
              return entries.reduce((acc, entry) => {
                const entryValues = {
                  value: this.validateValue(entry[field])
                };
                formula.params.forEach(param => {
                  entryValues[param] = this.validateValue(entry[param]);
                });
                return this.math.evaluate(formula.formula, {
                  acc,
                  ...{
                    ...entryValues,
                    ...values
                  }
                });
              }, 0);
            }
            evaluateBasicFormula(formula, values) {
              return this.math.evaluate(formula.formula, values);
            }
            validateValue(value) {
              return [NaN, '', undefined, null].includes(value) || isNaN(parseInt(value)) ? 0 : Number(value);
            }
          }
          exports.FormulaCalculator = FormulaCalculator;
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./specific/indicators/color-evaluator
      *****************************************************/

      ims.set('./specific/indicators/color-evaluator', {
        hash: 3832850274,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ColorEvaluator = void 0;
          class ColorEvaluator {
            parameters;
            constructor(parameters) {
              this.parameters = parameters;
            }
            evaluateCondition(value, condition) {
              if (condition.includes(' y ')) {
                const [firstCondition, secondCondition] = condition.split(' y ');
                return this.evaluateSingleCondition(value, firstCondition) && this.evaluateSingleCondition(value, secondCondition);
              }
              return this.evaluateSingleCondition(value, condition);
            }
            evaluateSingleCondition(value, condition) {
              const [operator, thresholdStr] = condition.split(' ');
              const threshold = parseFloat(thresholdStr);
              switch (operator) {
                case '>':
                  return value > threshold;
                case '<':
                  return value < threshold;
                case '>=':
                  return value >= threshold;
                case '<=':
                  return value <= threshold;
                case '==':
                  return value === threshold;
                case '!=':
                  return value !== threshold;
                default:
                  throw new Error(`Unknown operator ${operator}`);
              }
            }
            evaluateColor(value, claveParametro, percent = 100) {
              const parameter = this.parameters.find(param => param.claveParametro === claveParametro);
              if (!parameter) {
                throw new Error(`Parameter ${claveParametro} not found`);
              }
              const diff = value - parameter.parametro * percent;
              if (isNaN(diff)) return 9;
              if (this.evaluateCondition(diff, parameter.green)) {
                return 0; // green
              }
              if (this.evaluateCondition(diff, parameter.yellow)) {
                return 1; // yellow
              }
              if (this.evaluateCondition(diff, parameter.red)) {
                return 2; // red
              }
            }
          }
          exports.ColorEvaluator = ColorEvaluator;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./specific/indicators/index
      *******************************************/

      ims.set('./specific/indicators/index', {
        hash: 539366375,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.IndicatorsField = void 0;
          var _react = require("react");
          var _form = require("@bgroup/wise-form/form");
          var _indicators = require("./indicators");
          /*bundle*/
          const IndicatorsField = props => {
            const {
              model
            } = (0, _form.useWiseFormContext)();
            const formulas = [{
              name: 'sum',
              type: 'array',
              formula: 'acc + value',
              params: []
            }, {
              name: 'rentabilidad',
              type: 'basic',
              formula: 'rentabilidad * invGranTotal / 100',
              params: ['rentabilidad', 'invGranTotal']
            }, {
              name: 'rentabilidadAjustada',
              type: 'basic',
              formula: 'rentabilidadAjustada * invGranTotal',
              params: ['rentabilidadAjustada', 'invGranTotal']
            }, {
              name: 'parametroMultiplicadorPonderado',
              type: 'array',
              formula: 'acc + ((value * parametroValor) / tirada)',
              params: ['parametroValor', 'tirada']
            }, {
              name: 'porcentajeMultiplicador',
              type: 'basic',
              formula: '(multiplicador - parametroMultiplicadorPonderado) / parametroMultiplicadorPonderado',
              params: ['multiplicador', 'parametroMultiplicadorPonderado']
            }, {
              name: 'ventaNetaTotal',
              type: 'array',
              formula: 'acc + (pvp * venta12M) + (pvpDigital * venta12MDigital)',
              params: ['pvp', 'venta12M', 'pvpDigital', 'venta12MDigital']
            }, {
              name: 'valorMargenBruto',
              type: 'basic',
              formula: 'porcentajeMargenBruto / 100 * ventaNetaTotal',
              params: ['porcentajeMargenBruto', 'ventaNetaTotal']
            }, {
              name: 'valorDescuento',
              type: 'basic',
              formula: 'porcentajeDescuento * ventaNetaTotal',
              params: ['porcentajeDescuento', 'ventaNetaTotal']
            }, {
              name: 'valorCosto',
              type: 'array',
              formula: 'acc + inversionProduccion + ((materialAlmacen + materialConsignado) * ultimoCostoStock)',
              params: ['inversionProduccion', 'materialAlmacen', 'materialConsignado', 'ultimoCostoStock']
            }, {
              name: 'tiradaStockConsignados',
              type: 'array',
              formula: 'acc + tirada + (materialAlmacen + materialConsignado)',
              params: ['tirada', 'materialAlmacen', 'materialConsignado']
            }, {
              name: 'porcentajeCosto',
              type: 'basic',
              formula: 'valorCosto / tiradaStockConsignados / pvpPromedio * 100',
              params: ['valorCosto', 'tiradaStockConsignados', 'pvpPromedio']
            }, {
              name: 'derechoAutorTotal',
              type: 'array',
              formula: 'acc + (pvp * venta12M * porcentajeDerechoAutor) + (pvpDigital * venta12MDigital * porcentajeDerechoAutorDigital)',
              params: ['pvp', 'venta12M', 'porcentajeDerechoAutor', 'pvpDigital', 'venta12MDigital', 'porcentajeDerechoAutorDigital']
            }, {
              name: 'porcentajeDerechoAutor',
              type: 'basic',
              formula: 'valorDerechoAutor / ventaNetaTotal',
              params: ['valorDerechoAutor', 'ventaNetaTotal']
            }];
            const wrapper = model?.getField("second-part");
            const wrapperParameters = model?.getField("indicators");
            const parameters = wrapper?.specs?.parameters.concat(wrapperParameters.specs.parameters);
            const {
              current: indicators
            } = (0, _react.useRef)(new _indicators.Indicators({
              model,
              name: props.name,
              formulas,
              parameters
            }));
            (0, _react.useEffect)(() => {
              indicators.setupListeners();
              return indicators.downListeners;
            }, []);
            return _react.default.createElement(_react.default.Fragment, null);
          };
          exports.IndicatorsField = IndicatorsField;
        }
      });

      /************************************************
      INTERNAL MODULE: ./specific/indicators/indicators
      ************************************************/

      ims.set('./specific/indicators/indicators', {
        hash: 2673747475,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Indicators = void 0;
          var _mathjs = require("mathjs");
          var _calculator = require("./calculator");
          var _colorEvaluator = require("./color-evaluator");
          const math = (0, _mathjs.create)(_mathjs.all);
          class Indicators {
            model;
            titlesTable;
            indicatorsField;
            formulaCalculator;
            colorEvaluator;
            parameters;
            invalidValues = ['', null, NaN, undefined];
            fieldToOn = ['titlesTable', 'porcentajeDescuentoHeader', 'porcentajeMargenBrutoHeader', 'multiplicadorHeader', 'porcentajeRentabilidad', 'rentabilidadHeader', 'porcentajeVenta12mHeader'];
            constructor({
              model,
              name,
              formulas,
              parameters
            }) {
              if (!model || typeof model !== 'object' || model?.specs?.processId !== 2) return;
              this.model = model;
              this.titlesTable = model.getField('titlesTable');
              this.indicatorsField = model.getField(name);
              this.formulaCalculator = new _calculator.FormulaCalculator(formulas);
              this.colorEvaluator = new _colorEvaluator.ColorEvaluator(parameters);
              this.parameters = parameters;
              this.onChange();
            }
            onChange = async () => {
              const existingIndicators = this.indicatorsField.value || [];
              const newIndicators = await this.getIndicators();
              const indicatorsWithIds = newIndicators.map(indicator => {
                const existing = existingIndicators.find(e => e.indicatorProcessId === indicator.indicatorProcessId);
                if (existing && existing.id) {
                  return {
                    ...indicator,
                    id: existing.id
                  };
                }
                return indicator;
              });
              this.indicatorsField.set({
                value: indicatorsWithIds
              });
            };
            setupListeners() {
              if (!this.titlesTable) return;
              this.fieldToOn.forEach(field => {
                const modelField = this.model.getField(field);
                if (!modelField) return;
                modelField.on('change', this.onChange);
              });
            }
            downListeners = () => {
              if (!this.titlesTable) return;
              this.titlesTable.off('change', this.onChange);
            };
            validateValue(value, defaultValue = 0) {
              return [NaN, '', undefined, null].includes(value) || isNaN(parseInt(value)) ? defaultValue : Number(value);
            }
            sumEntries(entries = [], field) {
              entries = Array.isArray(entries) ? entries : [];
              return this.formulaCalculator.calculate('sum', {}, entries, field);
            }
            roundValue(value, divide = false) {
              if (!value || isNaN(Number(value))) return 0;
              const divider = divide ? 100 : 1;
              return math.round(value / divider);
            }
            formatNumber(value, decimals = 0) {
              const options = {
                minimumFractionDigits: decimals,
                maximumFractionDigits: decimals,
                style: 'decimal',
                useGrouping: true
              };
              const formatter = new Intl.NumberFormat('es-ES', options);
              return formatter.format(value);
            }
            getField(fieldName, property = 'value') {
              const field = this.model.getField(fieldName);
              return field && field[property] ? field[property] : 0;
            }
            getParameters() {
              return this.parameters ? this.parameters : [];
            }
            getParameter(key) {
              const parameters = this.getParameters();
              return parameters.find(param => param.claveParametro === key);
            }
            validateValueForColor(value, color) {
              if ([NaN, '', null, undefined].includes(value)) return 9;
              return color;
            }
            validatePercentage(value, percentage) {
              return this.invalidValues.includes(value) ? 'NA' : percentage;
            }
            async calculateVentas() {
              const entries = this.getField('titlesTable', 'entries');
              const valorVentas = this.sumEntries(entries, 'venta12M');
              const porcentajeVentas = this.getField('porcentajeVenta12mHeader');
              const percentage = this.validatePercentage(porcentajeVentas, `${this.formatNumber(this.validateValue(porcentajeVentas), 2)}%`);
              const isGrey = entries.every(item => this.invalidValues.includes(item.venta12M)) || this.invalidValues.includes(porcentajeVentas);
              const color = isGrey ? 9 : this.colorEvaluator.evaluateColor(this.validateValue(porcentajeVentas), 'PorcentajeVta12M');
              return {
                value: this.formatNumber(this.roundValue(valorVentas)),
                percentage,
                color,
                visibilityInbox: '',
                group: 'Izquierda'
              };
            }
            calculateRentabilidad() {
              const rentabilidad = this.getField('rentabilidadHeader');
              const invGranTotal = this.getField('totalInversion');
              const valorRentabilidad = this.formulaCalculator.calculate('rentabilidad', {
                rentabilidad: this.validateValue(rentabilidad),
                invGranTotal: this.validateValue(invGranTotal)
              });
              const isGrey = [invGranTotal, rentabilidad].some(item => this.invalidValues.includes(item));
              const porcentajeRentabilidad = this.validateValue(rentabilidad);
              const color = isGrey ? 9 : this.colorEvaluator.evaluateColor(this.roundValue(porcentajeRentabilidad), 'Rentabilidad');
              const percentage = this.validatePercentage(rentabilidad, `${this.formatNumber(porcentajeRentabilidad, 2)}%`);
              return {
                value: this.formatNumber(this.roundValue(valorRentabilidad)),
                percentage,
                color,
                visibilityInbox: '',
                group: 'Izquierda'
              };
            }
            calculateRentabilidadAjustada() {
              const rentabilidadAjustada = this.getField('porcentajeRentabilidad');
              const invGranTotal = this.getField('totalInversion');
              const valorRentabilidadAjustada = this.formulaCalculator.calculate('rentabilidadAjustada', {
                rentabilidadAjustada: this.validateValue(rentabilidadAjustada),
                invGranTotal: this.validateValue(invGranTotal)
              });
              const porcentajeRentabilidadAjustada = this.validateValue(rentabilidadAjustada);
              const isGrey = [invGranTotal, rentabilidadAjustada].some(item => this.invalidValues.includes(item));
              const color = isGrey ? 9 : this.colorEvaluator.evaluateColor(porcentajeRentabilidadAjustada, 'RentabilidadAXPorc');
              const percentage = this.validatePercentage(rentabilidadAjustada, `${this.formatNumber(porcentajeRentabilidadAjustada, 2)}%`);
              return {
                value: this.formatNumber(this.roundValue(math.divide(valorRentabilidadAjustada, 100))),
                percentage,
                color,
                visibilityInbox: '',
                group: 'Izquierda'
              };
            }
            calculateMultiplicador() {
              const multiplicador = this.getField('multiplicadorHeader');
              const parametro = this.getParameter('Multiplicador');
              const parametroValor = this.validateValue(parametro.parametro);
              const entries = this.getField('titlesTable', 'entries');
              const parametroMultiplicadorPonderado = this.formulaCalculator.calculate('parametroMultiplicadorPonderado', {
                parametroValor
              }, entries, 'tirada');
              const porcentajeMultiplicador = this.formulaCalculator.calculate('porcentajeMultiplicador', {
                multiplicador: this.validateValue(multiplicador),
                parametroMultiplicadorPonderado
              });
              const isValidTirada = entries.every(item => ['tirada'].every(param => this.invalidValues.includes(item[param])));
              const isGrey = [multiplicador].some(item => this.invalidValues.includes(item)) || isValidTirada;
              const color = isGrey ? 9 : this.colorEvaluator.evaluateColor(this.validateValue(porcentajeMultiplicador), 'Multiplicador', 1);
              const percentage = isValidTirada ? 'NA' : this.validatePercentage(multiplicador, `${this.formatNumber(porcentajeMultiplicador, 2)}%`);
              return {
                value: this.formatNumber(this.validateValue(multiplicador)),
                percentage,
                color,
                visibilityInbox: '',
                group: 'Izquierda'
              };
            }
            calculateMargenBruto() {
              const entries = this.getField('titlesTable', 'entries');
              const porcentajeMargenBruto = this.getField('porcentajeMargenBrutoHeader');
              const ventaNetaTotal = this.formulaCalculator.calculate('ventaNetaTotal', {}, entries);
              const valorMargenBruto = this.formulaCalculator.calculate('valorMargenBruto', {
                porcentajeMargenBruto: this.validateValue(porcentajeMargenBruto),
                ventaNetaTotal: this.validateValue(ventaNetaTotal)
              });
              const isGrey = [porcentajeMargenBruto].some(item => this.invalidValues.includes(item));
              const color = isGrey ? 9 : this.colorEvaluator.evaluateColor(this.validateValue(porcentajeMargenBruto), 'PorcentajeMB');
              const percentage = this.validatePercentage(porcentajeMargenBruto, `${this.formatNumber(this.validateValue(porcentajeMargenBruto), 2)}%`);
              return {
                value: this.formatNumber(this.roundValue(valorMargenBruto)),
                percentage,
                color,
                visibilityInbox: '',
                group: 'Derecha'
              };
            }
            calculateDescuento() {
              const entries = this.getField('titlesTable', 'entries');
              const porcentajeDescuento = this.getField('porcentajeDescuentoHeader');
              const ventaNetaTotal = this.formulaCalculator.calculate('ventaNetaTotal', {}, entries);
              const valorDescuento = this.formulaCalculator.calculate('valorDescuento', {
                porcentajeDescuento: this.validateValue(porcentajeDescuento),
                ventaNetaTotal: this.validateValue(ventaNetaTotal)
              });
              const isGrey = [porcentajeDescuento].some(item => this.invalidValues.includes(item));
              const color = isGrey ? 9 : this.colorEvaluator.evaluateColor(this.validateValue(porcentajeDescuento), 'PorcentajeDescuento');
              const percentage = this.validatePercentage(porcentajeDescuento, `${this.formatNumber(this.validateValue(porcentajeDescuento), 2)}%`);
              return {
                value: this.formatNumber(this.roundValue(valorDescuento, true)),
                percentage,
                color,
                visibilityInbox: '',
                group: 'Derecha'
              };
            }
            calculateCosto() {
              const entries = this.getField('titlesTable', 'entries');
              const pvpPromedio = this.getField('pvpPromedio');
              const valorCosto = this.formulaCalculator.calculate('valorCosto', {}, entries);
              const tiradaStockConsignados = this.formulaCalculator.calculate('tiradaStockConsignados', {}, entries);
              const porcentajeCosto = this.formulaCalculator.calculate('porcentajeCosto', {
                valorCosto,
                tiradaStockConsignados,
                pvpPromedio: this.validateValue(pvpPromedio)
              });
              const isGrey = entries.every(item => ['ultimoCostoStock', 'materialConsignado', 'materialAlmacen', 'inversionProduccion'].every(param => this.invalidValues.includes(item[param])));
              const color = isGrey ? 9 : this.colorEvaluator.evaluateColor(porcentajeCosto, 'PorcentajeCU');
              const percentage = this.validatePercentage(pvpPromedio, `${this.formatNumber(porcentajeCosto, 2)}%`);
              return {
                value: this.formatNumber(this.roundValue(valorCosto)),
                percentage,
                color,
                visibilityInbox: '',
                group: 'Derecha'
              };
            }
            calculateDerechosAutor() {
              const entries = this.getField('titlesTable', 'entries');
              const anticipoDA = this.sumEntries(entries, 'inversionAnticipoDa');
              const derechoAutorTotal = this.formulaCalculator.calculate('derechoAutorTotal', {}, entries);
              const valorDerechoAutor = math.max(derechoAutorTotal, this.validateValue(anticipoDA));
              const ventaNetaTotal = this.formulaCalculator.calculate('ventaNetaTotal', {}, entries);
              const porcentajeDerechoAutor = this.formulaCalculator.calculate('porcentajeDerechoAutor', {
                valorDerechoAutor,
                ventaNetaTotal
              });
              const isGrey = entries.every(item => ['porcentajeDerechoAutorDigital', 'venta12MDigital', 'pvpDigital', 'porcentajeDerechoAutor', 'venta12M', 'pvp', 'inversionAnticipoDa'].every(param => this.invalidValues.includes(item[param])));
              const color = isGrey ? 9 : this.colorEvaluator.evaluateColor(porcentajeDerechoAutor, 'PorcentajeDA');
              const percentage = isGrey ? 'NA' : `${this.formatNumber(porcentajeDerechoAutor, 2)}%`;
              return {
                value: this.formatNumber(this.roundValue(valorDerechoAutor, true)),
                percentage,
                color,
                visibilityInbox: '',
                group: 'Derecha'
              };
            }
            async getIndicators() {
              return [{
                data: JSON.stringify(await this.calculateVentas()),
                indicatorProcessId: 9,
                label: 'ventas'
              }, {
                data: JSON.stringify(this.calculateRentabilidad()),
                indicatorProcessId: 6,
                label: 'RENTABILIDAD'
              }, {
                data: JSON.stringify(this.calculateRentabilidadAjustada()),
                indicatorProcessId: 10,
                label: 'AXPOR'
              }, {
                data: JSON.stringify(this.calculateMultiplicador()),
                indicatorProcessId: 8,
                label: 'MULTIPLICADOR'
              }, {
                data: JSON.stringify(this.calculateMargenBruto()),
                indicatorProcessId: 4,
                label: 'MB'
              }, {
                data: JSON.stringify(this.calculateDescuento()),
                indicatorProcessId: 3,
                label: 'DESCUENTO'
              }, {
                data: JSON.stringify(this.calculateCosto()),
                indicatorProcessId: 7,
                label: 'COSTO'
              }, {
                data: JSON.stringify(this.calculateDerechosAutor()),
                indicatorProcessId: 11,
                label: 'DA'
              }];
            }
          }
          exports.Indicators = Indicators;
        }
      });

      /************************************************
      INTERNAL MODULE: ./specific/indicators/interfaces
      ************************************************/

      ims.set('./specific/indicators/interfaces', {
        hash: 614667662,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**************************************************
      INTERNAL MODULE: ./specific/jview-titles/delete-all
      **************************************************/

      ims.set('./specific/jview-titles/delete-all', {
        hash: 4271758779,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DeleteTitles = DeleteTitles;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _components = require("pragmate-ui/components");
          var _form = require("@bgroup/wise-form/form");
          function DeleteTitles({
            instance
          }) {
            const {
              model
            } = (0, _form.useWiseFormContext)();
            if (!instance.isDeleteAll) return null;
            const handleClose = () => {
              instance.set({
                isDeleteAll: false
              });
            };
            const onConfirm = () => {
              const actionsItem = instance.specs.actions.deleteAll;
              actionsItem.forEach(item => {
                const callback = model.callbacks[item.callback];
                if (!callback || typeof callback !== 'function') return;
                callback({
                  dependency: instance,
                  form: model,
                  item: instance.selectedDelete,
                  ...item
                });
              });
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_modal.Modal, {
              show: true,
              className: "beauty-modal comment-managment delete-comment modal-sgs pui-confirm-dialog",
              onClose: handleClose,
              closeClicked: false
            }, _react.default.createElement("div", {
              className: "pui-confirm-dialog-content"
            }, _react.default.createElement("h3", {
              className: "modal-title"
            }, "Eliminar t\u00EDtulos"), _react.default.createElement("p", {
              className: "pui-confirm-dialog-content__text"
            }, "\u00BFSeguro que desea eliminar todos los t\u00EDtulos?"), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              onClick: handleClose,
              type: "reset",
              label: "Cancelar",
              variant: "secondary"
            }), _react.default.createElement(_components.Button, {
              onClick: onConfirm,
              type: "button",
              label: "Confimar",
              variant: "primary"
            })))));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./specific/jview-titles/delete
      **********************************************/

      ims.set('./specific/jview-titles/delete', {
        hash: 2509233656,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DeleteTitle = DeleteTitle;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _components = require("pragmate-ui/components");
          var _form = require("@bgroup/wise-form/form");
          function DeleteTitle({
            instance
          }) {
            const {
              model
            } = (0, _form.useWiseFormContext)();
            if (!instance.selectedDelete) return null;
            const handleClose = () => {
              instance.set({
                selectedDelete: null
              });
            };
            const onConfirm = () => {
              const actionsItem = instance.specs.actions.delete;
              actionsItem.forEach(item => {
                const callback = model.callbacks[item.callback];
                if (!callback || typeof callback !== 'function') return;
                callback({
                  dependency: instance,
                  form: model,
                  item: instance.selectedDelete,
                  id: instance.selectedDelete.id,
                  ...item
                });
              });
              instance.set({
                selectedDelete: null
              });
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_modal.Modal, {
              show: true,
              className: "beauty-modal comment-managment delete-comment modal-sgs pui-confirm-dialog",
              onClose: handleClose,
              closeClicked: false
            }, _react.default.createElement("div", {
              className: "pui-confirm-dialog-content"
            }, _react.default.createElement("h3", {
              className: "modal-title"
            }, "Eliminar t\u00EDtulo"), _react.default.createElement("p", {
              className: "pui-confirm-dialog-content__text"
            }, "\u00BFSeguro que desea eliminar el t\u00EDtulo?"), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              onClick: handleClose,
              type: "reset",
              label: "Cancelar",
              variant: "secondary"
            }), _react.default.createElement(_components.Button, {
              onClick: onConfirm,
              type: "button",
              label: "Confimar",
              variant: "primary"
            })))));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./specific/jview-titles/find-map
      ************************************************/

      ims.set('./specific/jview-titles/find-map', {
        hash: 2829023928,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.findMapByKeyRecursive = findMapByKeyRecursive;
          function findMapByKeyRecursive(keyToFind, outerMap) {
            function searchInMap(map) {
              if (map.has(keyToFind)) return map.get(keyToFind);
              for (const value of map.values()) {
                if (value && value.fields instanceof Map) {
                  const result = searchInMap(value.fields);
                  if (result) return result;
                }
              }
              return undefined;
            }
            return searchInMap(outerMap.fields);
          }
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./specific/jview-titles/format-to-display
      *********************************************************/

      ims.set('./specific/jview-titles/format-to-display', {
        hash: 387728663,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.formatToDisplay = void 0;
          const formatToDisplay = ({
            input,
            isPercent,
            roundUp,
            decimalsLimit = 2
          }) => {
            if (!input && input !== 0) return input;
            input = typeof input === "string" && input.includes(",") ? input.replaceAll(",", '.') : input;
            let formattedInput = Number(input);
            if (roundUp) formattedInput = Math.round(formattedInput);
            formattedInput = formattedInput.toLocaleString('es-ES', {
              minimumFractionDigits: decimalsLimit,
              maximumFractionDigits: decimalsLimit
            });
            return `${formattedInput}${isPercent ? '%' : ''}`;
          };
          exports.formatToDisplay = formatToDisplay;
        }
      });

      /***************************************************************
      INTERNAL MODULE: ./specific/jview-titles/header/books-production
      ***************************************************************/

      ims.set('./specific/jview-titles/header/books-production', {
        hash: 2244103346,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HeaderProductionBooks = HeaderProductionBooks;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _form = require("@bgroup/wise-form/form");
          function HeaderProductionBooks(props) {
            const {
              instance,
              head
            } = props;
            const {
              model
            } = (0, _form.useWiseFormContext)();
            const heads = head?.map(item => {
              return _react.default.createElement("th", {
                key: item.id
              }, _react.default.createElement("span", {
                className: "arrow-order"
              }, item.label));
            });
            const selected = instance.entries;
            const handleClick = event => {
              event.stopPropagation();
              instance.set({
                isDeleteAll: true
              });
            };
            const addMaterialDischarge = model.getField('addMaterialDischarge');
            return _react.default.createElement(_react.default.Fragment, null, heads, _react.default.createElement("th", null, selected.length && !addMaterialDischarge?.disabled ? _react.default.createElement(_icons.IconButton, {
              onClick: handleClick,
              icon: "close"
            }) : ''));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./specific/jview-titles/header/generic
      ******************************************************/

      ims.set('./specific/jview-titles/header/generic', {
        hash: 2795913133,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          function Header({
            head
          }) {
            const heads = head?.map(item => {
              return _react.default.createElement("th", {
                key: item.id
              }, _react.default.createElement("span", {
                className: "arrow-order"
              }, item.label));
            });
            return _react.default.createElement(_react.default.Fragment, null, heads);
          }
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./specific/jview-titles/header/production
      *********************************************************/

      ims.set('./specific/jview-titles/header/production', {
        hash: 2720611227,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HeaderProduction = HeaderProduction;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          function HeaderProduction({
            instance,
            head
          }) {
            const [state, setState] = (0, _react.useState)({});
            const heads = head?.map(item => {
              return _react.default.createElement("th", {
                key: item.id
              }, _react.default.createElement("span", {
                className: "arrow-order"
              }, item.label));
            });
            const selected = instance.entries.filter(item => !!item.isHabilitado);
            const onChange = event => {
              event.stopPropagation();
              instance.set({
                selected: event.currentTarget.checked ? selected : []
              });
              setState({});
            };
            const checked = selected.length === instance.selected.length && instance.selected.length;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("th", null, selected.length ? _react.default.createElement(_form.Checkbox, {
              name: "all",
              onChange: onChange,
              checked: checked
            }) : ''), heads);
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./specific/jview-titles/index
      *********************************************/

      ims.set('./specific/jview-titles/index', {
        hash: 1330878271,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.JViewTitle = void 0;
          var _react = require("react");
          var _form = require("@bgroup/wise-form/form");
          var _jview = require("@bgroup/jview/jview");
          var _addArticle = require("./item/add-article");
          var _itemProd = require("./item/item-prod");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _itemAfa = require("./item/titles-afa/item-afa");
          var _historical = require("./item/historical");
          var _delete = require("./delete");
          var _article = require("./item/article");
          var _authorsTitles = require("./item/authors-titles");
          var _addArticle2 = require("./item/article-produccion/add-article");
          var _generic = require("./header/generic");
          var _production = require("./header/production");
          var _booksProduction = require("./header/books-production");
          var _deleteAll = require("./delete-all");
          var _titlesProd = require("./item/titles-prod");
          /*bundle*/
          const JViewTitle = props => {
            const {
              model
            } = (0, _form.useWiseFormContext)();
            const instance = model.getField(props.name);
            const {
              title,
              onCheck,
              onDelete,
              ...jviewProps
            } = instance.specs;
            const [state, setState] = (0, _react.useState)({});
            (0, _hooks.useBinder)([instance], () => setState({}));
            const items = {
              titleBooks: _itemProd.ItemProd,
              booksAltaMaterial: _addArticle.ItemArticle,
              titleJview: _addArticle.ItemArticle,
              titlesTable: _itemAfa.ItemTitlesAFA,
              historial: _historical.Historical,
              articlesJView: _article.ItemArticleAFA,
              authorsTitles: _authorsTitles.AuthorsTitles,
              articleProduction: _addArticle2.ItemArticleProduction,
              titlesProd: _titlesProd.ItemTitlesProd
            };
            const itemTable = instance.itemTable ?? instance.specs.itemTable;
            const item = items[itemTable];
            const [selected, setSelected] = (0, _react.useState)(new Map());
            const cls = `${jviewProps.className} ${title ? 'with-header' : ''}`;
            const rows = instance.specs?.limitDepdentOnItems ? instance.entries.length : instance.rows;
            const headers = {
              'titleJview': _production.HeaderProduction,
              "titleBooks": _booksProduction.HeaderProductionBooks
            };
            const HeaderTable = headers[props.name] || _generic.Header;
            const head = instance.dataHead ?? instance.specs.dataHead;
            (0, _react.useEffect)(() => {
              instance.triggerEvent();
              if (itemTable !== "titleBooks" || !instance.entries.length) return;
              const articles = instance.entries.map(item => {
                return {
                  ...item,
                  productions: [item],
                  articleFiles: JSON.parse(item.articleFiles),
                  articles: item.codigoMaterialPack ? [JSON.parse(item.pack)].concat(JSON.parse(item.packArticles)) : null,
                  interiorPaperRepeater: item.interiorPaperRepeater ? JSON.parse(item.interiorPaperRepeater) : []
                };
              });
              instance.set({
                entries: articles
              });
              instance.specs.entries = articles;
              instance.specs.value = articles;
              instance.triggerEvent();
            }, []);
            const value = {
              ...jviewProps,
              item,
              rowProps: {
                ...props,
                ...instance.specs,
                setSelected,
                selected,
                model,
                onCheck,
                onDelete,
                instance,
                setState,
                value: instance.value
              },
              entries: instance.entries,
              rows,
              total: instance.total,
              loading: instance.loading,
              selected: instance.selected,
              dataHead: head,
              header: _react.default.createElement(HeaderTable, {
                ...instance.specs,
                instance: instance,
                head: head
              })
            };
            return _react.default.createElement("div", {
              className: `form-jview-container jview-titles ${cls}`
            }, title && _react.default.createElement("header", {
              className: "jview-header"
            }, _react.default.createElement("h5", null, title)), _react.default.createElement(_jview.JView, {
              ...value
            }), _react.default.createElement(_delete.DeleteTitle, {
              instance: instance
            }), _react.default.createElement(_deleteAll.DeleteTitles, {
              instance: instance
            }));
          };
          exports.JViewTitle = JViewTitle;
        }
      });

      /********************************************************
      INTERNAL MODULE: ./specific/jview-titles/item/add-article
      ********************************************************/

      ims.set('./specific/jview-titles/item/add-article', {
        hash: 687363650,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemArticle = ItemArticle;
          var _react = require("react");
          var _uuid = require("uuid");
          var _form = require("pragmate-ui/form");
          var _findMap = require("../find-map");
          function ItemArticle({
            item,
            setSelected,
            selected,
            model,
            name
          }) {
            const keys = ['titulo', 'esProdDigital', 'autor', 'sello', 'coleccion', 'isbn', 'codigoMaterial', 'pack', 'idInstancia'];
            const wrapper = model.getField('hardware');
            const newTitle = model.getField('newTitle');
            const newTitleValue = model.getField('newTitleValue');
            _react.default.useEffect(() => {
              return () => {
                const wrapperFields = [];
                wrapper.fields.forEach(field => wrapperFields.push(field));
                newTitle.disabled = false;
                wrapperFields.forEach(item => item.disabled = false);
              };
            }, []);
            const isPack = !item?.esProdDigital && (item.cdDevCantidad && item.cdDvd || item.fichas && item.fichasCantidad);
            const entries = keys.map(key => {
              if (key === 'esProdDigital') {
                return _react.default.createElement("td", {
                  className: "td-items",
                  key: (0, _uuid.v4)()
                }, _react.default.createElement("span", null, !!item[key] ? 'Si' : 'No'));
              }
              if (key === 'pack') {
                return _react.default.createElement("td", {
                  className: "td-items",
                  key: (0, _uuid.v4)()
                }, _react.default.createElement("span", null, !!item[key] || isPack ? 'Si' : 'No'));
              }
              if (key === 'codigoMaterial') {
                return _react.default.createElement("td", {
                  className: "td-items",
                  key: (0, _uuid.v4)()
                }, _react.default.createElement("span", null, !!item[key] ? item[key].replace(/^0+/, '') : ''));
              }
              if (key === 'isbn') {
                return _react.default.createElement("td", {
                  className: "td-items text-ellipsis",
                  key: (0, _uuid.v4)()
                }, _react.default.createElement("span", null, !!item[key] ? item[key] : ''));
              }
              return _react.default.createElement("td", {
                className: "td-items",
                key: (0, _uuid.v4)()
              }, _react.default.createElement("span", null, !!item[key] ? item[key] : ''));
            });
            const field = (0, _findMap.findMapByKeyRecursive)(name, model);
            const hasItem = field.selected.some(entry => entry.id === item.id);
            const onChange = event => {
              event.stopPropagation();
              const wrapperFields = [];
              wrapper.fields.forEach(field => wrapperFields.push(field));
              const id = parseInt(event.currentTarget.name);
              if (name === 'booksAltaMaterial') {
                selected.clear();
                selected.set(id, item);
                setSelected(selected);
                field.set({
                  selected: Array.from(selected.values())
                });
                if (item.esProdDigital) {
                  const checkedFields = wrapperFields.filter(field => field.checked);
                  checkedFields.forEach(field => field.set({
                    checked: false,
                    value: false
                  }));
                  newTitle.set({
                    checked: false,
                    value: false
                  });
                  newTitle.disabled = true;
                  newTitleValue.disabled = true;
                  wrapperFields.forEach(field => field.disabled = true);
                  newTitleValue.set({
                    value: ''
                  });
                  if (hasItem) {
                    selected.delete(id);
                    newTitle.disabled = false;
                    wrapperFields.forEach(item => item.disabled = false);
                  } else selected.set(id, item);
                } else {
                  newTitle.disabled = false;
                  wrapperFields.forEach(item => item.disabled = false);
                }
              }
              if (hasItem) {
                selected.delete(id);
                newTitle.disabled = false;
                wrapperFields.forEach(item => item.disabled = false);
              } else selected.set(id, item);
              setSelected(selected);
              field.set({
                selected: Array.from(selected.values())
              });
            };
            return _react.default.createElement("tr", null, _react.default.createElement("td", {
              className: "td-check"
            }, _react.default.createElement(_form.Checkbox, {
              name: item.id,
              onChange: onChange,
              checked: hasItem
            })), entries);
          }
        }
      });

      /***************************************************************************
      INTERNAL MODULE: ./specific/jview-titles/item/article-produccion/add-article
      ***************************************************************************/

      ims.set('./specific/jview-titles/item/article-produccion/add-article', {
        hash: 2415003838,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemArticleProduction = ItemArticleProduction;
          var _react = require("react");
          var _uuid = require("uuid");
          var _form = require("pragmate-ui/form");
          function ItemArticleProduction({
            item,
            instance,
            setState
          }) {
            const keys = ['titulo', 'esProdDigital', 'autorNames', 'sello', 'coleccion', 'codigoIsbn', 'codigoMaterial', 'pack', 'idInstancia'];
            const entries = keys.map(key => {
              if (key === 'esProdDigital' || key === 'pack') {
                return _react.default.createElement("td", {
                  className: "td-items",
                  key: (0, _uuid.v4)()
                }, _react.default.createElement("span", null, !!item[key] ? 'Si' : 'No'));
              }
              if (key === 'codigoMaterial') {
                return _react.default.createElement("td", {
                  className: "td-items",
                  key: (0, _uuid.v4)()
                }, _react.default.createElement("span", null, !!item[key] ? item[key].replace(/^0+/, '') : ''));
              }
              if (key === 'codigoIsbn') {
                return _react.default.createElement("td", {
                  className: "td-items text-ellipsis",
                  key: (0, _uuid.v4)()
                }, _react.default.createElement("span", null, !!item[key] ? item[key] : ''));
              }
              return _react.default.createElement("td", {
                className: "td-items",
                key: (0, _uuid.v4)()
              }, _react.default.createElement("span", null, !!item[key] ? item[key] : ''));
            });
            const hasItem = instance.selected.some(entry => entry.id === item.id);
            const onChange = event => {
              event.stopPropagation();
              if (!item.isHabilitado) return;
              let selected = instance.selected;
              if (hasItem) selected = selected.filter(entry => item.id !== entry.id);else selected = selected.concat([item]);
              instance.set({
                selected
              });
              setState({});
            };
            return _react.default.createElement("tr", null, _react.default.createElement("td", {
              className: "td-check"
            }, _react.default.createElement(_form.Checkbox, {
              onChange: onChange,
              disabled: !item.isHabilitado,
              checked: hasItem,
              name: item.id
            })), entries);
          }
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./specific/jview-titles/item/article/index
      **********************************************************/

      ims.set('./specific/jview-titles/item/article/index', {
        hash: 2821899295,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemArticleAFA = ItemArticleAFA;
          var _react = require("react");
          function ItemArticleAFA(props) {
            const {
              item,
              model,
              name,
              actions
            } = props;
            const handleClick = event => {
              event.stopPropagation();
              let id = event.currentTarget.dataset.id;
              id = isNaN(Number(id)) ? id : Number(id);
              const action = event.currentTarget.dataset.action;
              const dependency = model.getField(name);
              const actionsItem = actions[action];
              if (!actionsItem || !Array.isArray(actionsItem)) return;
              actionsItem.forEach(item => {
                const callback = model.callbacks[item.callback];
                if (!callback || typeof callback !== 'function') return;
                callback({
                  dependency,
                  form: model,
                  id,
                  ...props,
                  ...item
                });
              });
            };
            const isSelected = props.instance.value?.uuid === item.uuid;
            const cls = `${isSelected ? 'selected' : ''} `;
            return _react.default.createElement("tr", {
              "data-action": "selected",
              onClick: handleClick,
              className: cls
            }, _react.default.createElement("td", {
              className: "td-items"
            }, _react.default.createElement("span", null, item.codigoMaterial?.replace(/^0+/, ''))), _react.default.createElement("td", {
              className: "td-items"
            }, _react.default.createElement("span", null, item.titulo)), _react.default.createElement("td", {
              className: "td-items"
            }, _react.default.createElement("span", null, item.autorNames)), _react.default.createElement("td", {
              className: "td-items"
            }, _react.default.createElement("span", null, item.selloDescripcion)), _react.default.createElement("td", {
              className: "td-items"
            }, _react.default.createElement("span", null, item.coleccionDescripcion)), _react.default.createElement("td", {
              className: "td-items"
            }, _react.default.createElement("span", null, item.isbn)), _react.default.createElement("td", {
              className: "td-items"
            }, _react.default.createElement("span", null, item.tipoProducto)));
          }
        }
      });

      /*****************************************************************
      INTERNAL MODULE: ./specific/jview-titles/item/authors-titles/index
      *****************************************************************/

      ims.set('./specific/jview-titles/item/authors-titles/index', {
        hash: 3107487236,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AuthorsTitles = AuthorsTitles;
          var React = require("react");
          var _form = require("pragmate-ui/form");
          function AuthorsTitles({
            item,
            instance,
            setState,
            setSelected,
            selected,
            value
          }) {
            const autores = `${item.autores ? item.autores.join(", ") + (item.ilustrador ? `, ${item.ilustrador}` : '') : item.ilustrador}`;
            const hasItem = value?.some(entry => entry.idObra === item.idObra);
            const onChange = event => {
              event.stopPropagation();
              const value = event.currentTarget.checked ? [item] : null;
              instance.set({
                value,
                entries: [...instance.entries]
              });
              selected.clear();
              if (event.currentTarget.checked) selected.set(item.idObra, item);
              setSelected(selected);
              setState({});
              instance.triggerEvent();
            };
            return React.createElement("tr", null, React.createElement("td", {
              className: "td-check"
            }, React.createElement(_form.Checkbox, {
              name: item.idObra,
              id: item.idObra,
              onChange: onChange,
              checked: hasItem
            })), React.createElement("td", {
              className: "td-items"
            }, React.createElement("span", null, item.titulo)), React.createElement("td", {
              className: "td-items"
            }, React.createElement("span", null, autores)));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./specific/jview-titles/item/historical
      *******************************************************/

      ims.set('./specific/jview-titles/item/historical', {
        hash: 3144366642,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Historical = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _dayjs = require("dayjs");
          var _useTooltip = require("./use-tooltip");
          const Historical = ({
            item
          }) => {
            const getText = value => value ?? "Sin valor";
            const [ref] = (0, _useTooltip.useTooltip)({
              data: item?.action?.name
            });
            const icons = {
              1: {
                icon: {
                  viewBox: "0 0 512 512",
                  icon: `<g stroke-width="0" ><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></g>`
                },
                className: "approved"
              },
              2: {
                icon: {
                  icon: `<g stroke-width="0" ><path d="M19.828 18.256l-.002.015c249.642 36.995 371.904 169.983 397.32 278.01-2.094 5.977-4.496 11.044-7.068 14.968-17.29 26.383-62.522 40.075-101.654 28.596 5.984-19.75 10.132-39.834 12.07-59.12-95.46 8.177-212.544 8.42-301.207-22.642 41.727 95.317 99.325 164.465 164.983 230.08 18.296-2.164 35.807-11.35 51.837-25.37 85.218 34.667 188.066-2.555 226.748-60.68 46.922-70.5 74.07-317.52-167.462-383.856H232.81c160.326 54.874 195.73 167.74 191.573 239.03-37.15-93.627-137.68-191.855-312.38-239.03H19.83z"></path></g>`,
                  viewBox: "0 0 512 512"
                },
                className: "enter"
              },
              3: {
                icon: "close",
                className: "rejected"
              },
              4: {
                icon: {
                  icon: `<g  >
                        <path opacity="1" d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/>
                    </g>`,
                  viewBox: "0 0 320 512"
                },
                className: "enter"
              }
            };
            const format = "DD/MM/YYYY HH:mm";
            const startDate = item.startDate ? (0, _dayjs.default)(item.startDate).format(format) : "SIN VALOR";
            const endDate = item.endDate ? (0, _dayjs.default)(item.endDate?.slice(0, 19)?.replace("T", " ")).format(format) : "SIN VALOR";
            return _react.default.createElement("tr", {
              className: "item-list historical"
            }, _react.default.createElement("td", null, startDate), _react.default.createElement("td", null, endDate), _react.default.createElement("td", null, getText(item?.task?.description)), _react.default.createElement("td", {
              className: "user-icon-table"
            }, _react.default.createElement("div", {
              className: "d-flex "
            }, getText(item.user?.username), _react.default.createElement("span", {
              ref: ref
            }, item?.actionId && _react.default.createElement(_icons.Icon, {
              ...icons[item.actionId]
            })))));
          };
          exports.Historical = Historical;
        }
      });

      /******************************************************
      INTERNAL MODULE: ./specific/jview-titles/item/item-prod
      ******************************************************/

      ims.set('./specific/jview-titles/item/item-prod', {
        hash: 2171873804,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemProd = ItemProd;
          var _react = require("react");
          var _uuid = require("uuid");
          var _icons = require("pragmate-ui/icons");
          var _formatToDisplay = require("../format-to-display");
          function ItemProd(props) {
            const {
              item,
              instance,
              name,
              model,
              actions
            } = props;
            const keys = ['pvpActual', 'costoUnitarioActual', 'Multiplicador', 'Ratio'];
            const entries = keys.map(key => {
              return _react.default.createElement("td", {
                className: 'td-items',
                key: (0, _uuid.v4)()
              }, _react.default.createElement("span", null, !!item[key] || item[key] === 0 ? (0, _formatToDisplay.formatToDisplay)({
                input: item[key],
                isPercent: false,
                roundUp: false
              }) : ''));
            });
            const handleClick = event => {
              event.stopPropagation();
              let id = event.currentTarget.dataset.id;
              id = isNaN(Number(id)) ? id : Number(id);
              const action = event.currentTarget.dataset.action;
              const dependency = model.getField(name);
              const actionsItem = actions[action];
              if (!actionsItem || !Array.isArray(actionsItem)) return;
              actionsItem.forEach(item => {
                const callback = model.callbacks[item.callback];
                if (!callback || typeof callback !== 'function') return;
                callback({
                  dependency,
                  form: model,
                  id,
                  ...props,
                  ...item
                });
              });
            };
            const isSelected = props.instance.selectedItem?.id === item.id;
            const cls = `${isSelected ? 'selected item-prod' : 'item-prod'} `;
            const addMaterialDischarge = model.getField('addMaterialDischarge');
            return _react.default.createElement("tr", {
              "data-action": "selected",
              onClick: handleClick,
              className: cls
            }, _react.default.createElement("td", {
              className: 'td-items'
            }, _react.default.createElement("span", null, item.titulo)), entries, _react.default.createElement("td", {
              className: 'td-items'
            }, _react.default.createElement("span", null, item.tiradaActual)), _react.default.createElement("td", null, !addMaterialDischarge.disabled && _react.default.createElement(_icons.IconButton, {
              icon: "close",
              "data-id": item.id,
              "data-action": "selectedDelete",
              onClick: handleClick
            })));
          }
        }
      });

      /***************************************************************
      INTERNAL MODULE: ./specific/jview-titles/item/titles-afa/formats
      ***************************************************************/

      ims.set('./specific/jview-titles/item/titles-afa/formats', {
        hash: 2107107452,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Formater = void 0;
          class Formater {
            static monthMap = {
              1: 'Enero',
              2: 'Febrero',
              3: 'Marzo',
              4: 'Abril',
              5: 'Mayo',
              6: 'Junio',
              7: 'Julio',
              8: 'Agosto',
              9: 'Septiembre',
              10: 'Octubre',
              11: 'Noviembre',
              12: 'Diciembre'
            };
            static getDate(date) {
              if (!date) return '';
              if (typeof date === 'string') {
                if (date.includes('-')) {
                  const parts = date.split('-');
                  let [year, month] = parts;
                  return `${Formater.monthMap[Number(month)]} ${year}`;
                }
                date = date.replace(/([AP]M)$/, ' $1').replace(/([ap]m)$/, ' $1');
                var fecha = new Date(date);
                var numeroMes = fecha.getMonth(); // Los meses van de 0 (enero) a 11 (diciembre)
                var anio = fecha.getFullYear();
                var meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
                var mesEnEspanol = meses[numeroMes];
                return mesEnEspanol + ' ' + anio;
              } else {
                const month = Formater.monthMap[date.getMonth() + 1];
                return `${month} ${date.getFullYear()}`;
              }
            }
            static currency = (input, decimalsLimit, noDecimals) => {
              if (input === null) return '';
              if (!input && input !== 0) return input;
              let number = Number(input);
              if (decimalsLimit === 0 || noDecimals) number = Math.floor(number);
              let formattedInput = typeof input === 'number' && !noDecimals ? number.toLocaleString('es-ES', {
                minimumFractionDigits: decimalsLimit,
                maximumFractionDigits: decimalsLimit
              }) : input;
              formattedInput = typeof formattedInput === 'string' ? formattedInput : formattedInput.toString();
              let numbersAndCommaOnly = formattedInput.replace(/[^\d,]/g, '');
              let [integerPart, decimalPart] = numbersAndCommaOnly.split(',', 2);
              integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
              const decimals = decimalsLimit && decimalPart ? decimalPart.substring(0, decimalsLimit) : decimalPart;
              formattedInput = decimalPart !== undefined && !noDecimals ? `${integerPart},${decimals}` : integerPart;
              return formattedInput;
            };
            static percentage = (input, decimalsLimit, noDecimals) => {
              if (!input) return '';
              input = typeof input === 'string' ? input : input.toString().replace('.', ',');
              let numbersAndCommaOnly = input.replace(/[^\d,]/g, '');
              let [integerPart, decimalPart] = numbersAndCommaOnly.split(',', 2);
              integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
              const decimals = decimalsLimit && decimalPart ? decimalPart.substring(0, decimalsLimit) : decimalPart;
              const formattedInput = decimalPart !== undefined && !noDecimals ? `${integerPart},${decimals}` : integerPart;
              return formattedInput;
            };
          }
          exports.Formater = Formater;
        }
      });

      /****************************************************************
      INTERNAL MODULE: ./specific/jview-titles/item/titles-afa/item-afa
      ****************************************************************/

      ims.set('./specific/jview-titles/item/titles-afa/item-afa', {
        hash: 255332551,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemTitlesAFA = ItemTitlesAFA;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _formats = require("./formats");
          var _context = require("../../../../context");
          function ItemTitlesAFA(props) {
            const {
              item,
              model,
              name,
              actions
            } = props;
            const disabled = props.disabled;
            const {
              manager
            } = (0, _context.useDinamycFormContext)();
            const handleClick = async event => {
              event.stopPropagation();
              let id = event.currentTarget.dataset.id;
              id = isNaN(Number(id)) ? id : Number(id);
              const action = event.currentTarget.dataset.action;
              const dependency = model.getField(name);
              const actionsItem = actions[action];
              if (!actionsItem || !Array.isArray(actionsItem)) return;
              //	model.form.fetching = true
              for (const item of actionsItem) {
                const callback = model.callbacks[item.callback];
                if (!callback || typeof callback !== 'function') continue;
                await callback({
                  dependency,
                  form: model,
                  id,
                  ...props,
                  ...item
                });
              }
              //	model.form.fetching = false
            };
            const isSelected = props.instance.selectedItem?.id === item.id;
            const cls = `${isSelected ? 'selected' : ''} `;
            const pvp = _formats.Formater.currency(item.pvp, 2, false);
            const tiradaDecimalsLength = String(item.tirada).split('.')[1]?.length || 0;
            const tirada = _formats.Formater.currency(item.tirada, tiradaDecimalsLength, false);
            const porcentajeVenta12M = _formats.Formater.percentage(item.porcentajeVenta12M, 0, true);
            const porcentajeMargenBruto = _formats.Formater.percentage(item.porcentajeMargenBruto, 2, false);
            const inversionTotalTitulo = _formats.Formater.currency(item.inversionTotalTitulo, 2, true);
            const rentabilidad = _formats.Formater.currency(item.rentabilidad, 2, false);
            const rentabilidadAXPorciento = _formats.Formater.percentage(item.rentabilidadAxPorciento, 2, false);
            return _react.default.createElement("tr", {
              "data-action": "selected",
              onClick: handleClick,
              className: cls
            }, _react.default.createElement("td", {
              className: "td-items"
            }, _react.default.createElement("span", null, item.titulo)), _react.default.createElement("td", {
              className: "td-items"
            }, _react.default.createElement("span", null, _formats.Formater.getDate(item.mesAnio))), _react.default.createElement("td", {
              className: "td-items"
            }, _react.default.createElement("span", null, pvp)), _react.default.createElement("td", {
              className: "td-items"
            }, _react.default.createElement("span", null, tirada)), _react.default.createElement("td", {
              className: "td-items"
            }, _react.default.createElement("span", null, porcentajeVenta12M, " ", !!porcentajeVenta12M && '%')), _react.default.createElement("td", {
              className: "td-items"
            }, _react.default.createElement("span", null, porcentajeMargenBruto, " ", !!porcentajeMargenBruto && '%')), _react.default.createElement("td", {
              className: "td-items"
            }, _react.default.createElement("span", null, inversionTotalTitulo)), _react.default.createElement("td", {
              className: "td-items"
            }, _react.default.createElement("span", null, rentabilidad, " ", !!rentabilidad && '%')), _react.default.createElement("td", {
              className: "td-items"
            }, _react.default.createElement("span", null, rentabilidadAXPorciento, " ", rentabilidadAXPorciento && '%')), _react.default.createElement("td", {
              className: "actions-item"
            }, actions?.duplicate && _react.default.createElement(_icons.IconButton, {
              disabled: disabled,
              icon: "add",
              "data-id": item.id,
              "data-action": "duplicate",
              onClick: handleClick,
              className: "add"
            }), actions?.delete && _react.default.createElement(_icons.IconButton, {
              disabled: disabled,
              icon: "close",
              "data-action": "selectedDelete",
              "data-id": item.id,
              onClick: handleClick
            })));
          }
        }
      });

      /**************************************************************
      INTERNAL MODULE: ./specific/jview-titles/item/titles-prod/index
      **************************************************************/

      ims.set('./specific/jview-titles/item/titles-prod/index', {
        hash: 356669188,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemTitlesProd = ItemTitlesProd;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _loadInstance = require("../../../load-instance");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function ItemTitlesProd({
            item,
            instance,
            model
          }) {
            const [tipoProducto, setTipoProducto] = (0, _react.useState)(item.tipoProducto);
            const tableFather = model.getField(instance.specs.tableFather);
            const [state, setState] = (0, _react.useState)({});
            (0, _react.useEffect)(() => {
              if (!item.tipoProducto) return;
              const index = instance.entries.findIndex(entry => entry.id ? entry.id === item.id : item.idTitulo === entry.idTitulo);
              if (index === 0) {
                setTipoProducto(`${item.tipoProducto}`);
                return;
              }
              setTipoProducto(`-- ${item.tipoProducto}`);
            }, [item.tipoProducto]);
            (0, _hooks.useBinder)([tableFather], () => setState({}));
            const cls = tableFather?.selectedItem?.idArticulo ? tableFather?.selectedItem?.articles?.some(article => item.codigoMaterial === article.codigoMaterial && tableFather?.selectedItem?.codigoMaterial === item.codigoMaterial) ? 'selected-title' : '' : "";
            return _react.default.createElement("tr", {
              className: 'tr-articles'
            }, _react.default.createElement("td", {
              className: "td-items"
            }, _react.default.createElement("span", null, tipoProducto)), _react.default.createElement("td", {
              className: "td-items td-icon"
            }, _react.default.createElement(_form.Input, {
              value: item.titulo || '',
              disabled: true,
              className: cls
            })), _react.default.createElement("td", {
              className: "td-items"
            }, _react.default.createElement(_form.Input, {
              value: item.codigoMaterialMdm || item.codigoMaterialMdmArt,
              disabled: true
            })), _react.default.createElement("td", {
              className: "td-items"
            }, _react.default.createElement(_form.Input, {
              value: item.codigoMaterial,
              disabled: true
            })), _react.default.createElement("td", {
              className: "td-items"
            }, item.idInstancia || item.idInstanciaAfa), _react.default.createElement("td", {
              className: "td-items",
              style: {
                width: "90px",
                padding: 0
              }
            }, item.idInstancia || item.idInstanciaAfa ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_loadInstance.LoadInstance, {
              instanceId: item.idInstancia || item.idInstanciaAfa,
              processId: 2,
              taskId: 87
            })) : ''));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./specific/jview-titles/item/use-tooltip
      ********************************************************/

      ims.set('./specific/jview-titles/item/use-tooltip', {
        hash: 2734787028,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTooltip = useTooltip;
          var _react = require("react");
          var _tippy = require("tippy.js");
          function useTooltip({
            data
          }) {
            const refTippy = _react.default.useRef(null);
            const tooltipInstance = _react.default.useRef(null);
            _react.default.useEffect(() => {
              if (!data) {
                if (tooltipInstance.current?.destroy && typeof tooltipInstance.current?.destroy === "function") tooltipInstance.current?.destroy();
                tooltipInstance.current = null;
                return;
              }
              const tooltipContent = data;
              if (tooltipInstance.current && typeof tooltipInstance.current.setContent === 'function') {
                tooltipInstance.current.setContent(`<span style="font-size: 12px">${tooltipContent}</span>`);
              } else {
                tooltipInstance.current = (0, _tippy.default)(refTippy.current, {
                  content: `<span style="font-size: 12px">${tooltipContent}</span>`,
                  allowHTML: true
                });
              }
            }, [data]);
            return [refTippy];
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./specific/load-instance/index
      **********************************************/

      ims.set('./specific/load-instance/index', {
        hash: 3720148270,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LoadInstance = LoadInstance;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../../context");
          /*bundle*/
          function LoadInstance({
            instanceId,
            taskId,
            processId
          }) {
            const {
              manager
            } = (0, _context.useDinamycFormContext)();
            if (!instanceId) return null;
            const handleMagnifier = async event => {
              event.stopPropagation();
              await manager.formManager.loadInstance({
                id: instanceId,
                taskId,
                processId
              });
            };
            return _react.default.createElement(_icons.IconButton, {
              onClick: handleMagnifier,
              icon: "search",
              className: "icon-primary",
              title: "Ver detalle"
            });
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./use-model
      ***************************/

      ims.set('./use-model', {
        hash: 3145459518,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModel = void 0;
          var _form = require("@bgroup/wise-form/form");
          const useModel = () => {
            const {
              model: parentModel
            } = (0, _form.useWiseFormContext)();
            const {
              model: wrapperModel
            } = (0, _form.useWrappedWiseFormContext)();
            return {
              model: wrapperModel || parentModel
            };
          };
          exports.useModel = useModel;
        }
      });

      /********************************************
      INTERNAL MODULE: ./wrappers/collapsible/index
      ********************************************/

      ims.set('./wrappers/collapsible/index', {
        hash: 3862498879,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Collapsible = void 0;
          var _react = require("react");
          var _collapsible = require("pragmate-ui/collapsible");
          var _form = require("@bgroup/wise-form/form");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          const Collapsible = ({
            model
          }) => {
            const {
              types
            } = (0, _context.useDinamycFormContext)();
            const {
              title,
              className
            } = model.specs;
            const [state, setState] = _react.default.useState({});
            (0, _hooks.useBinder)([model], () => {
              setState({});
            }, ['change', 'clear']);
            const open = model.fields.get(model?.name)?.value;
            let cls = model.className || className;
            cls = `${cls || ''}`;
            delete model.specs.className;
            return _react.default.createElement(_collapsible.CollapsibleContainer, {
              className: cls,
              open: open
            }, _react.default.createElement(_collapsible.CollapsibleHeader, null, _react.default.createElement("h3", null, title)), _react.default.createElement(_collapsible.CollapsibleContent, {
              ...model.specs
            }, _react.default.createElement(_form.WrappedForm, {
              types: types,
              name: model.name
            })));
          };
          exports.Collapsible = Collapsible;
        }
      });

      /********************************************************
      INTERNAL MODULE: ./wrappers/dependent-collapsible/content
      ********************************************************/

      ims.set('./wrappers/dependent-collapsible/content', {
        hash: 3144920717,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollapsibleContent = CollapsibleContent;
          var _react = require("react");
          var _context = require("./context");
          /*bundle */
          function CollapsibleContent({
            className,
            children
          }) {
            const {
              open
            } = (0, _context.useCollapsibleContext)();
            const cls = `collapsible__content${className ? ` ${className}` : ''} ${open ? ' collapsible__content--opened' : ''}`;
            return _react.default.createElement("section", {
              className: cls
            }, children);
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./wrappers/dependent-collapsible/context
      ********************************************************/

      ims.set('./wrappers/dependent-collapsible/context', {
        hash: 3417031257,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useCollapsibleContext = exports.CollapsibleContext = void 0;
          var _react = require("react");
          const CollapsibleContext = exports.CollapsibleContext = _react.default.createContext(null);
          const useCollapsibleContext = () => _react.default.useContext(CollapsibleContext);
          exports.useCollapsibleContext = useCollapsibleContext;
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./wrappers/dependent-collapsible/header
      *******************************************************/

      ims.set('./wrappers/dependent-collapsible/header', {
        hash: 1676854823,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollapsibleHeader = CollapsibleHeader;
          var _react = require("react");
          var _context = require("./context");
          /*bundle */
          function CollapsibleHeader({
            children,
            className
          }) {
            const {
              open
            } = (0, _context.useCollapsibleContext)();
            const cls = `collapsible__header ${className ? ` ${className}` : ''} ${open ? 'open' : ''}`;
            // const clsButton = `collapsible__button ${open ? ' collapsible__button--opened' : ''}`;
            const attrs = {
              className: cls
            };
            return _react.default.createElement("header", {
              ...attrs
            }, _react.default.createElement("div", {
              className: "collapsible__header-content"
            }, children));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./wrappers/dependent-collapsible/index
      ******************************************************/

      ims.set('./wrappers/dependent-collapsible/index', {
        hash: 2817639330,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DependentCollapsible = DependentCollapsible;
          var _react = require("react");
          var _context = require("./context");
          var _header = require("./header");
          var _form = require("@bgroup/wise-form/form");
          var _content = require("./content");
          var _context2 = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle */
          function DependentCollapsible({
            model
          }) {
            const [state, setState] = _react.default.useState({});
            const {
              types
            } = (0, _context2.useDinamycFormContext)();
            (0, _hooks.useBinder)([model], () => {
              setState({});
            }, ['change', 'clear']);
            const {
              title,
              className
            } = model.specs;
            const value = {
              open: model?.opened,
              state
            };
            let cls = model.className || model.className === "" ? model.className : className;
            cls = `collapsible__container ${cls ? ` ${cls}` : ''} `;
            return _react.default.createElement(_context.CollapsibleContext.Provider, {
              value: value
            }, _react.default.createElement("article", {
              className: cls
            }, _react.default.createElement(_header.CollapsibleHeader, null, _react.default.createElement("h3", null, title)), model.opened && _react.default.createElement(_content.CollapsibleContent, null, _react.default.createElement(_form.WrappedForm, {
              types: types,
              name: model.name
            }))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./wrappers/div/index
      ************************************/

      ims.set('./wrappers/div/index', {
        hash: 4006888003,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Div = void 0;
          var _react = require("react");
          var _form = require("@bgroup/wise-form/form");
          var _context = require("../../context");
          /*bundle*/
          const Div = ({
            model
          }) => {
            const {
              types
            } = (0, _context.useDinamycFormContext)();
            const styles = model.specs?.style ? {
              ...model.specs.style
            } : {};
            let cls = model.className || model.className === "" ? model.className : model.specs.className;
            cls = `separator ${cls ? ` ${cls}` : ''} `;
            return _react.default.createElement("div", {
              style: styles,
              className: cls
            }, _react.default.createElement(_form.WrappedForm, {
              types: types,
              name: model.name
            }));
          };
          exports.Div = Div;
        }
      });

      /**************************************
      INTERNAL MODULE: ./wrappers/label/index
      **************************************/

      ims.set('./wrappers/label/index', {
        hash: 790558085,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Label = void 0;
          var _react = require("react");
          var _form = require("@bgroup/wise-form/form");
          var _context = require("../../context");
          /*bundle*/
          const Label = ({
            model
          }) => {
            const {
              types
            } = (0, _context.useDinamycFormContext)();
            const cls = `${model.specs?.className ?? ""} `;
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("label", {
              className: "label-wrapper"
            }, _react.default.createElement("span", {
              className: "label-content"
            }, model.specs?.value), " "), _react.default.createElement(_form.WrappedForm, {
              types: types,
              name: model.name
            }));
          };
          exports.Label = Label;
        }
      });

      /**************************************
      INTERNAL MODULE: ./wrappers/modal/index
      **************************************/

      ims.set('./wrappers/modal/index', {
        hash: 1039350591,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Modal = void 0;
          var _react = require("react");
          var _form = require("@bgroup/wise-form/form");
          var _context = require("../../context");
          var _modal = require("pragmate-ui/modal");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          const Modal = ({
            model
          }) => {
            const [open, setOpen] = _react.default.useState(model.open);
            const {
              types
            } = (0, _context.useDinamycFormContext)();
            const [, setUpdate] = _react.default.useState({});
            (0, _hooks.useBinder)([model], () => {
              setOpen(model.open);
              setUpdate({});
            });
            (0, _hooks.useBinder)([model], () => setUpdate({}), ["clear"]);
            _react.default.useEffect(() => {
              if (model.open || !model?.specs?.resetWhenClosed) return;
              model.clear();
            }, [model.open, model?.specs?.resetWhenClosed]);
            if (!open) return null;
            const onClose = () => {
              model.set({
                open: false
              });
              model.triggerEvent("value.change");
            };
            return _react.default.createElement(_modal.Modal, {
              closeClicked: false,
              show: open,
              onClose: onClose,
              className: `beauty-modal modal-sgs ${model?.specs?.className}`
            }, model?.specs?.title && _react.default.createElement("h3", {
              className: "modal-title"
            }, model?.specs?.title), _react.default.createElement("div", {
              className: "content"
            }, _react.default.createElement(_form.WrappedForm, {
              types: types,
              name: model.name
            })));
          };
          exports.Modal = Modal;
        }
      });

      /****************************************
      INTERNAL MODULE: ./wrappers/section/index
      ****************************************/

      ims.set('./wrappers/section/index', {
        hash: 3598932310,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Section = void 0;
          var _react = require("react");
          var _form = require("@bgroup/wise-form/form");
          var _context = require("../../context");
          /*bundle*/
          const Section = ({
            model
          }) => {
            const {
              types
            } = (0, _context.useDinamycFormContext)();
            let {
              className,
              title
            } = model.specs;
            title = model.title ?? title;
            return _react.default.createElement("section", {
              className: `${className} section`
            }, title && _react.default.createElement("header", null, _react.default.createElement("h3", null, title)), _react.default.createElement("div", {
              className: "content"
            }, _react.default.createElement(_form.WrappedForm, {
              name: model.name,
              types: types
            })));
          };
          exports.Section = Section;
        }
      });

      /****************************************************
      INTERNAL MODULE: ./wrappers/tooltip/container-tooltip
      ****************************************************/

      ims.set('./wrappers/tooltip/container-tooltip', {
        hash: 2838906444,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContainerTooltip = ContainerTooltip;
          var _react = require("react");
          var _item = require("./item");
          /*bundle*/
          function ContainerTooltip(props) {
            const tooltip = props.data?.tooltip;
            const className = `container-tooltip ${props.data?.className ?? ""}`;
            return _react.default.createElement("span", {
              className: className
            }, !!tooltip && _react.default.createElement("div", {
              className: 'tooltip-content',
              dangerouslySetInnerHTML: {
                __html: tooltip
              }
            }), _react.default.createElement(_item.Item, {
              item: props.data?.tooltipData
            }), props.children);
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./wrappers/tooltip/index
      ****************************************/

      ims.set('./wrappers/tooltip/index', {
        hash: 2150523814,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Tooltip = Tooltip;
          var _react = require("react");
          var _form = require("@bgroup/wise-form/form");
          var _context = require("../../context");
          var _item = require("./item");
          /*bundle*/
          function Tooltip({
            model
          }) {
            const {
              types
            } = (0, _context.useDinamycFormContext)();
            const tooltip = model.specs.tooltip;
            const className = `container-tooltip ${model.specs.className ?? ''}`;
            return _react.default.createElement("span", {
              className: className
            }, !!tooltip && _react.default.createElement("div", {
              className: "tooltip-content",
              dangerouslySetInnerHTML: {
                __html: tooltip
              }
            }), _react.default.createElement(_item.Item, {
              item: model.specs.tooltipData
            }), _react.default.createElement(_form.WrappedForm, {
              types: types,
              name: model.name
            }));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./wrappers/tooltip/item
      ***************************************/

      ims.set('./wrappers/tooltip/item', {
        hash: 1140230975,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _subItem = require("./sub-item");
          var _uuid = require("uuid");
          function Item({
            item
          }) {
            if (!item || typeof item !== 'object') return null;
            const title = item.title;
            const isSubItems = !!item.items && Array.isArray(item.items);
            const outputs = isSubItems ? item.items.map(subItem => {
              return _react.default.createElement(_subItem.SubItem, {
                key: (0, _uuid.v4)(),
                item: subItem
              });
            }) : [];
            let content = title?.replaceAll('Gráfico', '<sub>Gráfico</sub>');
            content = content?.replaceAll('Digital', '<sub>Digital</sub>');
            return _react.default.createElement("div", {
              className: "tooltip-content"
            }, item.title && _react.default.createElement("p", null, _react.default.createElement("b", null, _react.default.createElement("span", {
              dangerouslySetInnerHTML: {
                __html: content
              }
            }))), isSubItems && _react.default.createElement("div", {
              className: "sub-item"
            }, outputs));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./wrappers/tooltip/sub-item
      *******************************************/

      ims.set('./wrappers/tooltip/sub-item', {
        hash: 1697546812,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SubItem = SubItem;
          var _react = require("react");
          var _uuid = require("uuid");
          function SubItem({
            item
          }) {
            const title = item.title;
            const outputs = !!item.items && Array.isArray(item.items) ? item.items.map(subItem => {
              return _react.default.createElement(SubItem, {
                key: (0, _uuid.v4)(),
                item: subItem
              });
            }) : [];
            let content = title.replaceAll('Gráfico', "<sub>Gráfico</sub>");
            content = content.replaceAll('Digital', "<sub>Digital</sub>");
            const level = item.level;
            const bulletStyles = ['●', '■', '▶', '□', '○', '★', '⚫' // Círculo grande sólido
            ];
            const bulletStyle = bulletStyles[level];
            return _react.default.createElement("div", {
              className: 'content-sub-item'
            }, _react.default.createElement("p", null, bulletStyle && _react.default.createElement("span", {
              className: 'bull'
            }, bulletStyle), _react.default.createElement("span", {
              dangerouslySetInnerHTML: {
                __html: content
              }
            })), _react.default.createElement("div", {
              className: 'sub-item'
            }, outputs));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./wrappers/totalizer-afa/index
      **********************************************/

      ims.set('./wrappers/totalizer-afa/index', {
        hash: 2024271201,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TotalizerAFA = void 0;
          var _react = require("react");
          var _form = require("@bgroup/wise-form/form");
          var _uuid = require("uuid");
          var _context = require("../../context");
          /*bundle*/
          const TotalizerAFA = ({
            model
          }) => {
            const data = model.specs;
            const {
              types
            } = (0, _context.useDinamycFormContext)();
            const output = data.dataHead.map(item => _react.default.createElement("span", {
              key: (0, _uuid.v4)()
            }, item));
            return _react.default.createElement("section", {
              className: `totalizer-container ${data.className}`
            }, _react.default.createElement("div", {
              className: "totalizer"
            }, !!data.dataHead.length && _react.default.createElement("header", null, output), _react.default.createElement(_form.WrappedForm, {
              types: types,
              name: model.name
            })));
          };
          exports.TotalizerAFA = TotalizerAFA;
        }
      });

      /******************************************
      INTERNAL MODULE: ./wrappers/totalizer/index
      ******************************************/

      ims.set('./wrappers/totalizer/index', {
        hash: 1812899054,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Totalizer = void 0;
          var _react = require("react");
          var _form = require("@bgroup/wise-form/form");
          var _uuid = require("uuid");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _useTotal = require("./use-total");
          /*bundle*/
          const Totalizer = ({
            model
          }) => {
            const ref = _react.default.useRef(null);
            const data = model.specs;
            const {
              types
            } = (0, _context.useDinamycFormContext)();
            (0, _useTotal.useTotal)(data.displayTotalIn, model);
            (0, _hooks.useBinder)([model], () => {
              data.fields.forEach(field => {
                model.fields.get(field.name).disabled = model.disabled;
              });
            });
            _react.default.useEffect(() => {
              if (!model.specs.value.length) return;
              const currentVals = new Map();
              model.specs.value.forEach(item => currentVals.set(item.idTrabajo, {
                value: item.value,
                id: item.id
              }));
              model.fields.forEach(field => {
                const record = currentVals.get(field.idTrabajo);
                field.set({
                  value: record.value,
                  id: record.id
                });
                field.triggerEvent('value.change');
              });
              model.value = model.specs.value;
              model.triggerEvent();
            }, []);
            const output = data.dataHead.map(item => _react.default.createElement("span", {
              key: (0, _uuid.v4)()
            }, item));
            const value = [];
            model.fields.forEach(item => value.push({
              id: item.id,
              value: item.value || 0,
              idTrabajo: item.idTrabajo
            }));
            model.value = value;
            return _react.default.createElement("section", {
              className: `totalizer-container ${data.className}`
            }, _react.default.createElement("div", {
              ref: ref,
              className: "totalizer"
            }, !!data.dataHead.length && _react.default.createElement("header", null, output), _react.default.createElement(_form.WrappedForm, {
              types: types,
              name: model.name
            })));
          };
          exports.Totalizer = Totalizer;
        }
      });

      /**********************************************
      INTERNAL MODULE: ./wrappers/totalizer/use-total
      **********************************************/

      ims.set('./wrappers/totalizer/use-total', {
        hash: 1049216309,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTotal = void 0;
          var _react = require("react");
          const useTotal = (totalName, model) => {
            _react.default.useEffect(() => {
              const totalInput = model.form.getField(totalName);
              const onChange = () => {
                let total = 0;
                model.fields.forEach(element => total += element.value || 0);
                totalInput.set({
                  value: total
                });
              };
              model.fields.forEach(item => item.on('change', onChange));
              return () => model.fields.forEach(item => item.off('change', onChange));
            }, []);
          };
          exports.useTotal = useTotal;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./context",
        "from": "IContext",
        "name": "IContext"
      }, {
        "im": "./context",
        "from": "DinamycFormContext",
        "name": "DinamycFormContext"
      }, {
        "im": "./context",
        "from": "useDinamycFormContext",
        "name": "useDinamycFormContext"
      }, {
        "im": "./hr/index",
        "from": "Hr",
        "name": "Hr"
      }, {
        "im": "./inputs/add-file/index",
        "from": "AddFile",
        "name": "AddFile"
      }, {
        "im": "./inputs/alert-modal/index",
        "from": "AlertModal",
        "name": "AlertModal"
      }, {
        "im": "./inputs/button-group/index",
        "from": "ButtonGroup",
        "name": "ButtonGroup"
      }, {
        "im": "./inputs/button/index",
        "from": "Button",
        "name": "Button"
      }, {
        "im": "./inputs/checkbox/index",
        "from": "Checkbox",
        "name": "Checkbox"
      }, {
        "im": "./inputs/comments/index",
        "from": "Comments",
        "name": "Comments"
      }, {
        "im": "./inputs/currency-input/index",
        "from": "CurrencyInput",
        "name": "CurrencyInput"
      }, {
        "im": "./inputs/date/index",
        "from": "CompleteDate",
        "name": "CompleteDate"
      }, {
        "im": "./inputs/decimals-input/index,",
        "from": "Decimal",
        "name": "Decimal"
      }, {
        "im": "./inputs/fields-wrapper/data-service-pages/index",
        "from": "DataServicePages",
        "name": "DataServicePages"
      }, {
        "im": "./inputs/fields-wrapper/formula-calculator/index",
        "from": "FormulaCalculator",
        "name": "FormulaCalculator"
      }, {
        "im": "./inputs/fields-wrapper/index",
        "from": "FieldsWrapper",
        "name": "FieldsWrapper"
      }, {
        "im": "./inputs/hierarchical-tree/index",
        "from": "Tree",
        "name": "Tree"
      }, {
        "im": "./inputs/icon-check-input/index",
        "from": "IconCheckInput",
        "name": "IconCheckInput"
      }, {
        "im": "./inputs/input-date/index",
        "from": "InputDate",
        "name": "InputDate"
      }, {
        "im": "./inputs/jview/index",
        "from": "JView",
        "name": "JView"
      }, {
        "im": "./inputs/material-discharge-quotation/index",
        "from": "MaterialDischargeQuoation",
        "name": "MaterialDischargeQuoation"
      }, {
        "im": "./inputs/number/index",
        "from": "InputNumber",
        "name": "InputNumber"
      }, {
        "im": "./inputs/percentage-input/index",
        "from": "PercentageInput",
        "name": "PercentageInput"
      }, {
        "im": "./inputs/plus-input/index",
        "from": "PlusInput",
        "name": "PlusInput"
      }, {
        "im": "./inputs/reference-number/index",
        "from": "InputReferenceNumber",
        "name": "InputReferenceNumber"
      }, {
        "im": "./inputs/select/index",
        "from": "Select",
        "name": "Select"
      }, {
        "im": "./inputs/text-field/index",
        "from": "TextField",
        "name": "TextField"
      }, {
        "im": "./inputs/text/index",
        "from": "InputText",
        "name": "InputText"
      }, {
        "im": "./inputs/top-label/index",
        "from": "TopLabel",
        "name": "TopLabel"
      }, {
        "im": "./inputs/traffic-ligth/index",
        "from": "InputTrafficLight",
        "name": "InputTrafficLight"
      }, {
        "im": "./inputs/traffic-ligth/light",
        "from": "TrafficLight",
        "name": "TrafficLight"
      }, {
        "im": "./inputs/uploader/index",
        "from": "Uploader",
        "name": "Uploader"
      }, {
        "im": "./inputs/validation-modal/index",
        "from": "ValidationModal",
        "name": "ValidationModal"
      }, {
        "im": "./specific/atm-titles/index",
        "from": "ATMTitles",
        "name": "ATMTitles"
      }, {
        "im": "./specific/indicators/index",
        "from": "IndicatorsField",
        "name": "IndicatorsField"
      }, {
        "im": "./specific/jview-titles/index",
        "from": "JViewTitle",
        "name": "JViewTitle"
      }, {
        "im": "./specific/load-instance/index",
        "from": "LoadInstance",
        "name": "LoadInstance"
      }, {
        "im": "./wrappers/collapsible/index",
        "from": "Collapsible",
        "name": "Collapsible"
      }, {
        "im": "./wrappers/dependent-collapsible/content",
        "from": "CollapsibleContent",
        "name": "CollapsibleContent"
      }, {
        "im": "./wrappers/dependent-collapsible/header",
        "from": "CollapsibleHeader",
        "name": "CollapsibleHeader"
      }, {
        "im": "./wrappers/dependent-collapsible/index",
        "from": "DependentCollapsible",
        "name": "DependentCollapsible"
      }, {
        "im": "./wrappers/div/index",
        "from": "Div",
        "name": "Div"
      }, {
        "im": "./wrappers/label/index",
        "from": "Label",
        "name": "Label"
      }, {
        "im": "./wrappers/modal/index",
        "from": "Modal",
        "name": "Modal"
      }, {
        "im": "./wrappers/section/index",
        "from": "Section",
        "name": "Section"
      }, {
        "im": "./wrappers/tooltip/container-tooltip",
        "from": "ContainerTooltip",
        "name": "ContainerTooltip"
      }, {
        "im": "./wrappers/tooltip/index",
        "from": "Tooltip",
        "name": "Tooltip"
      }, {
        "im": "./wrappers/totalizer-afa/index",
        "from": "TotalizerAFA",
        "name": "TotalizerAFA"
      }, {
        "im": "./wrappers/totalizer/index",
        "from": "Totalizer",
        "name": "Totalizer"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'IContext') && _export("IContext", IContext = require ? require('./context').IContext : value);
        (require || prop === 'DinamycFormContext') && _export("DinamycFormContext", DinamycFormContext = require ? require('./context').DinamycFormContext : value);
        (require || prop === 'useDinamycFormContext') && _export("useDinamycFormContext", useDinamycFormContext = require ? require('./context').useDinamycFormContext : value);
        (require || prop === 'Hr') && _export("Hr", Hr = require ? require('./hr/index').Hr : value);
        (require || prop === 'AddFile') && _export("AddFile", AddFile = require ? require('./inputs/add-file/index').AddFile : value);
        (require || prop === 'AlertModal') && _export("AlertModal", AlertModal = require ? require('./inputs/alert-modal/index').AlertModal : value);
        (require || prop === 'ButtonGroup') && _export("ButtonGroup", ButtonGroup = require ? require('./inputs/button-group/index').ButtonGroup : value);
        (require || prop === 'Button') && _export("Button", Button = require ? require('./inputs/button/index').Button : value);
        (require || prop === 'Checkbox') && _export("Checkbox", Checkbox = require ? require('./inputs/checkbox/index').Checkbox : value);
        (require || prop === 'Comments') && _export("Comments", Comments = require ? require('./inputs/comments/index').Comments : value);
        (require || prop === 'CurrencyInput') && _export("CurrencyInput", CurrencyInput = require ? require('./inputs/currency-input/index').CurrencyInput : value);
        (require || prop === 'CompleteDate') && _export("CompleteDate", CompleteDate = require ? require('./inputs/date/index').CompleteDate : value);
        (require || prop === 'Decimal') && _export("Decimal", Decimal = require ? require('./inputs/decimals-input/index,').Decimal : value);
        (require || prop === 'DataServicePages') && _export("DataServicePages", DataServicePages = require ? require('./inputs/fields-wrapper/data-service-pages/index').DataServicePages : value);
        (require || prop === 'FormulaCalculator') && _export("FormulaCalculator", FormulaCalculator = require ? require('./inputs/fields-wrapper/formula-calculator/index').FormulaCalculator : value);
        (require || prop === 'FieldsWrapper') && _export("FieldsWrapper", FieldsWrapper = require ? require('./inputs/fields-wrapper/index').FieldsWrapper : value);
        (require || prop === 'Tree') && _export("Tree", Tree = require ? require('./inputs/hierarchical-tree/index').Tree : value);
        (require || prop === 'IconCheckInput') && _export("IconCheckInput", IconCheckInput = require ? require('./inputs/icon-check-input/index').IconCheckInput : value);
        (require || prop === 'InputDate') && _export("InputDate", InputDate = require ? require('./inputs/input-date/index').InputDate : value);
        (require || prop === 'JView') && _export("JView", JView = require ? require('./inputs/jview/index').JView : value);
        (require || prop === 'MaterialDischargeQuoation') && _export("MaterialDischargeQuoation", MaterialDischargeQuoation = require ? require('./inputs/material-discharge-quotation/index').MaterialDischargeQuoation : value);
        (require || prop === 'InputNumber') && _export("InputNumber", InputNumber = require ? require('./inputs/number/index').InputNumber : value);
        (require || prop === 'PercentageInput') && _export("PercentageInput", PercentageInput = require ? require('./inputs/percentage-input/index').PercentageInput : value);
        (require || prop === 'PlusInput') && _export("PlusInput", PlusInput = require ? require('./inputs/plus-input/index').PlusInput : value);
        (require || prop === 'InputReferenceNumber') && _export("InputReferenceNumber", InputReferenceNumber = require ? require('./inputs/reference-number/index').InputReferenceNumber : value);
        (require || prop === 'Select') && _export("Select", Select = require ? require('./inputs/select/index').Select : value);
        (require || prop === 'TextField') && _export("TextField", TextField = require ? require('./inputs/text-field/index').TextField : value);
        (require || prop === 'InputText') && _export("InputText", InputText = require ? require('./inputs/text/index').InputText : value);
        (require || prop === 'TopLabel') && _export("TopLabel", TopLabel = require ? require('./inputs/top-label/index').TopLabel : value);
        (require || prop === 'InputTrafficLight') && _export("InputTrafficLight", InputTrafficLight = require ? require('./inputs/traffic-ligth/index').InputTrafficLight : value);
        (require || prop === 'TrafficLight') && _export("TrafficLight", TrafficLight = require ? require('./inputs/traffic-ligth/light').TrafficLight : value);
        (require || prop === 'Uploader') && _export("Uploader", Uploader = require ? require('./inputs/uploader/index').Uploader : value);
        (require || prop === 'ValidationModal') && _export("ValidationModal", ValidationModal = require ? require('./inputs/validation-modal/index').ValidationModal : value);
        (require || prop === 'ATMTitles') && _export("ATMTitles", ATMTitles = require ? require('./specific/atm-titles/index').ATMTitles : value);
        (require || prop === 'IndicatorsField') && _export("IndicatorsField", IndicatorsField = require ? require('./specific/indicators/index').IndicatorsField : value);
        (require || prop === 'JViewTitle') && _export("JViewTitle", JViewTitle = require ? require('./specific/jview-titles/index').JViewTitle : value);
        (require || prop === 'LoadInstance') && _export("LoadInstance", LoadInstance = require ? require('./specific/load-instance/index').LoadInstance : value);
        (require || prop === 'Collapsible') && _export("Collapsible", Collapsible = require ? require('./wrappers/collapsible/index').Collapsible : value);
        (require || prop === 'CollapsibleContent') && _export("CollapsibleContent", CollapsibleContent = require ? require('./wrappers/dependent-collapsible/content').CollapsibleContent : value);
        (require || prop === 'CollapsibleHeader') && _export("CollapsibleHeader", CollapsibleHeader = require ? require('./wrappers/dependent-collapsible/header').CollapsibleHeader : value);
        (require || prop === 'DependentCollapsible') && _export("DependentCollapsible", DependentCollapsible = require ? require('./wrappers/dependent-collapsible/index').DependentCollapsible : value);
        (require || prop === 'Div') && _export("Div", Div = require ? require('./wrappers/div/index').Div : value);
        (require || prop === 'Label') && _export("Label", Label = require ? require('./wrappers/label/index').Label : value);
        (require || prop === 'Modal') && _export("Modal", Modal = require ? require('./wrappers/modal/index').Modal : value);
        (require || prop === 'Section') && _export("Section", Section = require ? require('./wrappers/section/index').Section : value);
        (require || prop === 'ContainerTooltip') && _export("ContainerTooltip", ContainerTooltip = require ? require('./wrappers/tooltip/container-tooltip').ContainerTooltip : value);
        (require || prop === 'Tooltip') && _export("Tooltip", Tooltip = require ? require('./wrappers/tooltip/index').Tooltip : value);
        (require || prop === 'TotalizerAFA') && _export("TotalizerAFA", TotalizerAFA = require ? require('./wrappers/totalizer-afa/index').TotalizerAFA : value);
        (require || prop === 'Totalizer') && _export("Totalizer", Totalizer = require ? require('./wrappers/totalizer/index').Totalizer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiRGluYW15Y0Zvcm1Db250ZXh0IiwiZXhwb3J0cyIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlRGluYW15Y0Zvcm1Db250ZXh0IiwidXNlQ29udGV4dCIsIkhyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIl9pdGVtcyIsIkF0dGFjaG1lbnRzIiwibGFiZWwiLCJuYW1lU3RvcmFnZSIsIkl0ZW1zIiwiX2ljb25zIiwiX2NvbmZpZyIsIl9wcm9jZXNzSW1hZ2UiLCJJdGVtIiwiaXRlbSIsInNldFVwZGF0ZSIsIm9uQ2xpY2siLCJ1cmwiLCJwYXJhbXMiLCJmaWxlc1NlcnZlciIsImZpbGVOYW1lIiwid2luZG93Iiwib3BlbiIsImRlbGV0ZUl0ZW0iLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImRlbGV0ZUltYWdlIiwiZmlsZVNpemVLQiIsInRvRml4ZWQiLCJJY29uQnV0dG9uIiwiaWNvbiIsIl9pdGVtIiwiX3V1aWQiLCJ1cGQiLCJ1c2VTdGF0ZSIsImltYWdlc0xvY2FsIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsIkFycmF5IiwiaXNBcnJheSIsIm91dHB1dCIsIm1hcCIsImtleSIsInY0IiwiRnJhZ21lbnQiLCJfY29tcG9uZW50cyIsIl9tb2RhbCIsIl9hdHRhY2htZW50cyIsIkFkZEZpbGUiLCJwcm9wcyIsImxhYmVsQnV0dG9uIiwiY2hpbGRyZW4iLCJpc01vZGFsT3BlbiIsInNldElzTW9kYWxPcGVuIiwiaGFuZGxlTW9kYWwiLCJCdXR0b24iLCJ2YXJpYW50IiwiTW9kYWxGaWxlIiwic2hvdyIsImRlZmF1bHRQcm9wcyIsIl9hbGVydCIsIl9hcGkiLCJfd3JhcHBlcnMiLCJfZm9ybSIsImZpbGUiLCJzZXRGaWxlIiwiZXJyb3IiLCJzZXRFcnJvciIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsImZpbGVzIiwiY3JlYXRlSW5wdXQiLCJmaWxlSW5wdXQiLCJkb2N1bWVudCIsInR5cGUiLCJzdHlsZSIsImRpc3BsYXkiLCJhY2NlcHQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW5jZWwiLCJ1bmRlZmluZWQiLCJvblN1Ym1pdCIsIm5hbWUiLCJmaWxlRXh0ZW5zaW9uIiwic2xpY2UiLCJsYXN0SW5kZXhPZiIsImZpbGVFeHRlbnNpb25zIiwiZmlsZVNpemUiLCJzaXplIiwibWF4U2l6ZUtCIiwiaW5jbHVkZXMiLCJhcGkiLCJBcGkiLCJiZWFyZXIiLCJzZXNzaW9uIiwidG9rZW4iLCJyZXNwb25zZSIsInBvc3QiLCJtdWx0aXBhcnQiLCJzdGF0dXMiLCJkYXRhIiwidXJscyIsIm9yaWdpbmFsIiwicHJvY2Vzc0ltYWdlIiwiY29uc29sZSIsIm9uRGVsZXRlIiwiaWQiLCJNb2RhbCIsIm9uQ2xvc2UiLCJjbG9zZUNsaWNrZWQiLCJJbnB1dCIsImRpc2FibGVkIiwidmFsdWUiLCJBbGVydCIsIklUeXBlcyIsIkVycm9yIiwiaW1hZ2VzU3RvcmFnZSIsInB1c2giLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZmlsdGVyIiwiaW1hZ2UiLCJBZGRNYXRlcmlhbERpc2NoYXJnZSIsInNldFNob3ciLCJNb2RhbEFkZE1hdGVyaWFsRGlzY2hhcmdlIiwiaW5pdCIsInRpdGxlIiwiYXV0aG9yIiwibWF0ZXJpYWxDb2RlIiwic2VhbCIsImNvbGxlY3Rpb24iLCJBRlJlcXVlc3QiLCJGb3JtIiwiX2hvb2tzIiwiQWxlcnRNb2RhbCIsIm1vZGVsIiwidXNlV2lzZUZvcm1Db250ZXh0IiwiaW5zdGFuY2UiLCJnZXRGaWVsZCIsInVzZUJpbmRlciIsInNldE9wZW4iLCJzZXQiLCJtZXNzYWdlIiwic3BlY3MiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIl9idXR0b24iLCJCdXR0b25Hcm91cCIsIm9wdGlvbnMiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwidXNlRWZmZWN0IiwiaGFuZGxlQ2xpY2siLCJOdW1iZXIiLCJ0YXJnZXQiLCJpc05hTiIsImRpc2FibGVkT3B0aW9ucyIsIm9uQ2xpY2tzIiwiZXZlbnRzIiwidXNlTWVtbyIsImluZGV4IiwiZmluZCIsInJlY29yZCIsImhhc093blByb3BlcnR5IiwiY2xzIiwiaHRtbEZvciIsImNvbmRpdGlvbiIsImNhbkV4ZWN1dGUiLCJoYXNWYWx1ZSIsImV2ZXJ5IiwiZmllbGQiLCJmb3JFYWNoIiwiYWN0aW9uIiwidG8iLCJwcm9wZXJ0eSIsImNhbGxiYWNrcyIsImNhbGxiYWNrIiwiZm9ybSIsImRlcGVuZGVuY3kiLCJpc1JlYWR5IiwiY2xlYXIiLCJ0cmlnZ2VyRXZlbnQiLCJkZXBlbmRlbnRPbiIsInByb3BlcnRpZXMiLCJvbkNsaWNrSGFuZGxlciIsImZldGNoaW5nIiwiX2Zvcm0yIiwiQ2hlY2tib3giLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsIm5vdE9uQ2hlY2siLCJ0b2dnbGVBY3Rpb24iLCJsZW5ndGgiLCJvbkNoZWNrIiwidG9BZmZlY3QiLCJvbGRWYWx1ZSIsImZvcmNlRGlzYWJsZWQiLCJDb21tZW50c0NvbnRleHQiLCJ1c2VDb21tZW50c0NvbnRleHQiLCJEZWxldGVDb21tZW50IiwibWFuYWdlciIsImhhbmRsZUNsb3NlIiwiY29tbWVudFNlbGVjdGVkIiwic2hvd0RlbGV0ZSIsImJ0bkNhbmNlbCIsImRlbGV0ZSIsImljb25zIiwiY29tbWVudHMiLCJ2aWV3Qm94IiwiX2RlbGV0ZSIsIl9uZXdDb21tZW50IiwiX21hbmFnZXIiLCJfY29udGV4dCIsIl9lbXB0eSIsIkNvbW1lbnRzIiwiZm9ybU1vZGVsIiwidmFsaWRhdGVSZXZpZXciLCJleGlzdGluZ0NvbW1lbnQiLCJlbnRyaWVzIiwidXNlcklkIiwidXNlciIsImNyZWF0b3JVc2VySWQiLCJpZEhpc3RvcmlhIiwiaW5zdGFuY2VJZCIsIm1vZGlmaWVyVXNlcklkIiwidGFza0lkIiwibWFuYWdlclJlZiIsInVzZVJlZiIsIkNvbW1lbnRzTWFuYWdlciIsImN1cnJlbnQiLCJzZXRTdGF0ZSIsImlzQWxyZWFkeUNvbW1lbnRlZCIsInBhcmVudCIsInNldHRpbmdzIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJFbXB0eSIsIk5ld0NvbW1lbnQiLCJSZWFjdCIsImR0IiwiRGF0ZSIsInRpbWVDcmVhdGVkIiwiZGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiZ2V0VVRDSG91cnMiLCJnZXRVVENNaW51dGVzIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0VGV4dCIsImhhbmRsZURlbGV0ZSIsImhhbmRsZUVkaXQiLCJjb21tZW50IiwiaXNFZGl0aW5nIiwidXNlck5hbWUiLCJub21icmUiLCJhcGVsbGlkbyIsIl9tb2RlbCIsIl9lbnRpdGllcyIsIlJlYWN0aXZlTW9kZWwiLCJDb21tZW50c0NvbGxlY3Rpb24iLCJpdGVtcyIsImZpZWxkTW9kZWwiLCJjb25zdHJ1Y3RvciIsInRpbWVVcGRhdGVkIiwibmFtZXMiLCJsYXN0TmFtZXMiLCJoYW5kbGVDaGFuZ2UiLCJzYXZlIiwibmV3Q29tbWVudCIsImN1cnJlbnRUYXNrSWQiLCJlZGl0aW5nSXRlbSIsImlzQ29ycmVjdCIsInNvbWUiLCJlcnJvck1lc3NhZ2UiLCJvblNhdmUiLCJUZXh0YXJlYSIsImxvYWRpbmciLCJwYXJzZUZpeCIsImRlY2ltYWxzTGltaXQiLCJ2YWx1ZVN0cmluZyIsInRvU3RyaW5nIiwidmFsdWVQYXJ0cyIsInNwbGl0IiwiY3VycmVudERlY2ltYWxzIiwiaW50cyIsImN1cnJlbnREZWNpbWFsc1ZhbCIsIm1pc3NpbmdEZWNpbWFscyIsInBhZGRlZFZhbHVlU3RyaW5nIiwicmVwZWF0IiwiZm9ybWF0VG9EaXNwbGF5IiwiaW5wdXQiLCJub0RlY2ltYWxzIiwiYWxsb3dOZWdhdGl2ZSIsImlzQWxsb3dOZWdhdGl2ZSIsInN0YXJ0c1dpdGgiLCJudW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJmb3JtYXR0ZWRJbnB1dCIsInRvTG9jYWxlU3RyaW5nIiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwibnVtYmVyc0FuZENvbW1hT25seSIsInJlcGxhY2UiLCJpbnRlZ2VyUGFydCIsImRlY2ltYWxQYXJ0IiwiZGVjaW1hbHMiLCJzdWJzdHJpbmciLCJfZml4ZWROdW1iZXIiLCJfZm9ybWF0VG9EaXNwbGF5IiwiQ3VycmVuY3lJbnB1dCIsInJvdW5kVXAiLCJpc1NldERlZmF1bHRWYWx1ZSIsInJlbW92ZVZhbHVlV2hlbkZvY3VzIiwicHJldlZhbHVlcyIsImRpc3BsYXlWYWx1ZSIsInNldERpc3BsYXlWYWx1ZSIsImluc3RhbmNlVmFsIiwic2V0SW5zdGFuY2VWYWwiLCJkZWZhdWx0VmFsdWUiLCJvblJlc2V0IiwidmFsdWVQcmV2Iiwib25CaW5kZXIiLCJwYXJzZUludCIsImlzQWxyZWFkeVJvdW5kZWQiLCJpc0ludGVnZXIiLCJyb3VuZCIsInBhcnNlRmxvYXQiLCJjb252ZXJ0RGlzcGxheVRvTnVtZXJpYyIsIm51bWVyaWMiLCJvbkJsdXIiLCJhZGp1c3RlZE51bWVyaWNWYWx1ZSIsIm5vdFplcm8iLCJvbkZvY3VzIiwiaW5wdXREaXNwbGF5VmFsdWUiLCJ0b0Rpc3BsYXkiLCJhdXRvQ29tcGxldGUiLCJnZXRDdXJyZW50RGF0ZU1pbiIsInRvZGF5IiwiZGF0ZVN0ciIsInRvSVNPU3RyaW5nIiwiZ2V0IiwiX2dldE1pbiIsIl9wYXJzZXIiLCJfZ2V0dGVyIiwiQ29tcGxldGVEYXRlIiwic2V0VmFsdWUiLCJzZXREYXRlRGVmYXVsdCIsImZvcm1hdERhdGUiLCJhdHRycyIsIm1pbk5vdyIsIm1pbiIsImRhdGVTdHJpbmciLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJzZXRGdWxsWWVhciIsInNldE1vbnRoIiwic2V0RGF0ZSIsImN1cnJlbnREYXRlIiwic2V0SG91cnMiLCJzZXRNaW51dGVzIiwiZm9ybWF0dGVkRGF0ZSIsIkRFQ0lNQUxfUkVHRVgiLCJEZWNpbWFsIiwicGFydHMiLCJ0ZXN0IiwicGFzc1RoZURlY2ltYWxzTGltaXQiLCJkZWVwRXF1YWwiLCJvYmoxIiwib2JqMiIsImtleXMxIiwiT2JqZWN0Iiwia2V5cyIsImtleXMyIiwiYXJyYXlzQXJlRXF1YWwiLCJhcnIxIiwiYXJyMiIsImkiLCJGaWVsZHNXcmFwcGVyQ29udGV4dCIsInVzZUZpZWxkc1dyYXBwZXJDb250ZXh0IiwiZ2V0RmllbGRDb25maWdzIiwid2hlcmUiLCJ2YWx1ZXMiLCJpZF9wcm92ZWVkb3JfY2kiLCJpZF9jb2xvcl9pbXByZXNpb24iLCJpZENvbG9yTHQiLCJxdWVyeSIsImRiIiwidGFibGVOYW1lIiwiZmllbGRzIiwidGFyZ2V0cyIsInZhbHVlUHJvcGVydHkiLCJkZWZhdWx0VmFsdWVzIiwiZGVtYXNpYUZpamFUYXBhIiwiZGVtYXNpYVZhcmlhYmxlVGFwYSIsImNvc3RvQ3RwIiwiY29zdG9FbnRyYWRhTWFxdWluYSIsImNvc3RvVmFyaWFibGUiLCJpZFByb3ZlZXJkb3JDb3N0byIsImlkR3JhbWFqZUx0IiwidmFsb3JUYXBhIiwiaWRUaXBvUGFwZWxMdCIsImNvc3RvUGFwZWxUYXBhSW5Gb3JtdWxhIiwiY29sb3JUb3RhbFRhcGEiLCJpZF9wcm92ZWVkb3IiLCJpZF9wbGFzdGlmaWNhZG8iLCJpZFBsYXN0aWZpY2FkbyIsImNvc3RvTTIiLCJpZF9lbmN1YWRlcm5hZG8iLCJpZEVuY3VhZGVybmFkbyIsImNhbnRpZGFkUGxpZWdvc0Jhc2UiLCJwcmVjaW9SYW5nbyIsInByZWNpb1NvbGFwYSIsInByZWNpb0FkaWNpb25hbCIsImlkUHJvdmVlcmRvckVuY3VkZXJuYWRvIiwid2lkdGhIZWlnaHQiLCJwcF9jaSIsInBwX2N0IiwicHRfYW5jaG8iLCJwdF9hbHRvIiwiaWRGb3JtYXRvIiwiaXNCb29sZWFuIiwidGllbmVTb2xhcGEiLCJpbmFjdGl2byIsImpvaW5UYWJsZSIsImpvaW5Db25kaXRpb24iLCJyZXRyYWN0aWxhZG8iLCJwZXJmb3JhZG8iLCJmYWphIiwic29icmVjdWJpZXJ0YSIsInB1bnRpbGxhZG8iLCJpZF9wcm92ZWVkb3JfZW5jdWFkZXJuYWRvIiwiaWRfbWVkaWRhX2xpYnJvIiwicHBlIiwiZGVwZW5kZW5jaWVzIiwiaWRfcHJvdmVlZG9yX2Nvc3RvIiwicHBpIiwiX2FwaVNlcnZpY2UiLCJfZ2V0RmllbGRzQ29uZmlncyIsIkRhdGFTZXJ2aWNlUGFnZXMiLCJkYXRhYmFzZVNlcnZpY2UiLCJmaWVsZENvbmZpZ3MiLCJjYWNoZSIsInByb2R1Y3Rpb25Nb2RhbCIsInRpdGxlc1RhYmxlIiwicHJvY2Vzc0lkIiwiU2dzRGF0YWJhc2VTZXJ2aWNlIiwic2V0dXBUaXRsZXMiLCJzZXR1cExpc3RlbmVycyIsImNvbmZpZyIsImRlcCIsImRlcEZpZWxkIiwib24iLCJnZXREZXBlbmRlbmN5VmFsdWVzIiwiZmV0Y2hEYXRhIiwidXBkYXRlTW9kZWxGaWVsZHMiLCJtb2RlbEZpZWxkIiwibm90RmV0Y2giLCJmZXRjaFByb21pc2VzIiwiZmxhdE1hcCIsIlByb21pc2UiLCJhbGwiLCJjYWNoZUtleSIsInJlc3VsdCIsImZldGNoRnJvbURhdGFiYXNlIiwiZGVmaW5lUHJvcGVydHkiLCJERUZBVUxUX0lURU0iLCJpZFRpcG9QYXBlbCIsImlkR3JhbWFqZSIsImlkQ29sb3IiLCJwYWdpbmFzIiwiYXBpU2VydmljZSIsInNlcnZlciIsIkRlZmF1bHRDYWxjdWxhdGlvblNlcnZpY2UiLCJjYWxjdWxhdGVQbGllZ29zQUVudmlhciIsInBsaWVnb3NJSSIsImRlbWFzaWFfZmlqYSIsImRlbWFzaWFfdmFyaWFibGUiLCJwbGllZ29zSUlOb1JlZG9uZGVvIiwidGlyYWRhIiwicGxpZWdvc0FFbnZpYXIiLCJjZWlsIiwibWF4IiwiY2FsY3VsYXRlQ29zdG9QYXBlbEludGVyaW9yIiwicGlfYWx0byIsInBpX2FuY2hvIiwiY29zdG9fcGFwZWwiLCJ2YWxvciIsImNvc3RvUGFwZWxJbnRlcmlvciIsImNhbGN1bGF0ZUNvc3RvSW1wcmVzaW9uSW50ZXJpb3IiLCJjb3N0b19jdHAiLCJjb3N0b19lbnRyYWRhX21hcXVpbmEiLCJjb3N0b192YXJpYWJsZSIsImNvbG9yX3RvdGFsIiwiY29zdG9QbGFuY2hhcyIsImNvc3RvSW1wcmVzaW9uRmlqbyIsImNvc3RvSW1wcmVzaW9uVmFyaWFibGUiLCJjb3N0b0ltcHJlc2lvbkludGVyaW9yIiwiRGF0YVNlcnZpY2UiLCJnZW5lcmF0ZUNhY2hlS2V5IiwibWV0aG9kIiwicGFyYW1LZXkiLCJnZXRNZWRpZGFzTGlicm9EYXRhIiwiZ2V0UHJvdmVlZG9yZXNDb3N0b3MiLCJpZENvbG9ySUkiLCJnZXRHcmFtYWdlRGF0YSIsImlkR3JhbWFnZUlJIiwiZ2V0UGFwZWxEYXRhIiwiaWRUaXBvUGFwZWxJSSIsImdldENvbG9yZXNJbXByZXNpb25EYXRhIiwiZ2V0UHJvdmVlZG9yZXNDSURhdGEiLCJpZENvbG9ySW1wcmVzaW9uIiwiZ2V0UFBJSW50ZXJpb3IiLCJwcm92ZWVkb3JDb3N0b0lkIiwiX2NhbGN1bGF0ZSIsIl9kYXRhU2VydmljZSIsIl90b3RhbHMiLCJGb3JtdWxhQ2FsY3VsYXRvciIsImZpZWxkc1RvT24iLCJpc0NoYW5nZSIsImNhbGN1bGF0aW9uU2VydmljZSIsImRhdGFTZXJ2aWNlIiwidG90YWxzIiwiaW50ZXJpb3JQYXBlclJlcGVhdGVyIiwiaW50ZXJpb3JQYXBlclJlcGVhdGVyRmllbGQiLCJ0aXJhZGFGaWVsZCIsIndpZHRoSGVpZ2h0RmllbGQiLCJvbGREYXRhIiwiVG90YWxzIiwiaW5pdGlhbGl6ZUZpZWxkcyIsImNhbGN1bGF0ZVRvdGFsUGFnZXMiLCJjYWxjdWxhdGUiLCJjYWxjdWxhdGVUb3RhbEdyYWZpY28iLCJjYWxjdWxhdGVUb3RhbFByb2R1Y3Rpb25Db3N0IiwicHJvbWlzZXMiLCJyZXNvbHZlZFByb21pc2VzIiwicHJvbWlzZXNQUEkiLCJyZXN1bHRzIiwiY2FsY3VsYXRlRm9ybXVsYXMiLCJzZXRWYWx1ZXMiLCJjb3N0b1BhcGVsSW50ZXJpb3JUb3RhbCIsImNvc3RvSW1wcmVzaW9uSW50ZXJpb3JUb3RhbCIsImNhbGN1bGFyQ2FudGlkYWRQbGllZ29zIiwidmFsb3JQcmV2aW8iLCJzdHJ1Y3R1cmVkQ2xvbmUiLCJtZWRpZGFzTGlicm9EYXRhIiwicmVzb2x2ZWRQcm9taXNlc1BQSSIsInBsaWVnb3NJSVBQSSIsInRvdGFsIiwidG90YWxQcm9kdWN0aW9uQ29zdCIsImZvcm11bGFGaWVsZCIsInN1bSIsInNldFRpbWVvdXQiLCJmb3JtdWxhIiwiZ2V0Rm9ybXVsYSIsInRvdGFsUGFnZXMiLCJyZWR1Y2UiLCJwcmV2IiwiX2NvbnRleHQyIiwiZm9ybUl0ZW0iLCJGb3JtSXRlbSIsInJlcXVlc3RDYWNoZSIsIk1hcCIsInVzZU1ha2VSZXF1ZXN0IiwiZm9ybWF0U2VsZWN0IiwiYWNjZXB0UHJvZHVjdGlvbk1vZGFsIiwiY2FuY2VsUHJvZHVjdGlvbk1vZGFsIiwic2V0RGlzYWJsZWQiLCJzZXRGZXRjaGluZyIsIm1ha2VSZXF1ZXN0IiwidXBkYXRlT3B0aW9uc09ubHkiLCJwayIsInBpZCIsImhhcyIsImZsYWdQcm9kdWN0aW9uSW52ZXJzaW9uIiwiY2FjaGVkUmVzcG9uc2UiLCJuZXdWYWx1ZSIsInNlbGVjdCIsImRlcGVuZGVuY3lJZCIsInBhcmVudElkIiwiZ2V0U2VsZWN0cyIsInVwZGF0ZURlcGVuZGVuY2llcyIsIm9uQ2hhbmdlRGVwZW5kZW5jaWVzT25seSIsIm9mZiIsIl9kZWZhdWx0SXRlbSIsIkZpZWxkc1dyYXBwZXIiLCJmb3JtYXRTZWxlY3RWYWx1ZSIsImFkZEl0ZW0iLCJJdGVtRm9ybSIsIl9zZWxlY3QiLCJfdXNlTWFrZVJlcXVlc3QiLCJmaWVsZERpc2FibGVkIiwiZm9ybURhdGEiLCJvblJlbW92ZSIsInZhbHVlUGFnZXMiLCJpbnRlcmlvclBhcGVyVmFsdWUiLCJvcHRpb24iLCJncmFtbWFnZVZhbHVlIiwiY292ZXJDb2xvcnNWYWx1ZSIsInRoZXJlc090aGVycyIsImludGVyaW9yUGFwZXJMYWJlbCIsImRpc2FibGVkSW5wdXQiLCJkaXNhYmxlZEZpZWxkIiwiU2VsZWN0IiwiaXNMb2FkaW5nIiwiY2xhc3NOYW1lUHJlZml4IiwicGxhY2Vob2xkZXIiLCJmaW5kTm9kZVBhdGhCeUlkIiwibm9kZSIsInBhdGgiLCJjaGlsZCIsImljb25SaWdodCIsImljb25Eb3duUmlnaHQiLCJfdHJlZU5vZGUiLCJfZmluZE5vZGUiLCJUcmVlIiwiY3VycmVudFNlbGVjdGVkIiwic2V0Q3VycmVudFNlbGVjdGVkIiwib3Blbk5vZGVzIiwic2V0T3Blbk5vZGVzIiwic3RydWN0dXJlT2ZBcnQiLCJ0YXJnZXRJZCIsInJvb3ROb2RlIiwiYWNjIiwibGV2ZWwiLCJUcmVlTm9kZSIsImlzT3BlbiIsIl9pY29uczIiLCJwcm9wc0lzT3BlbiIsInNldElzT3BlbiIsImhhc0NoaWxkcmVuIiwiaVNlbGVjdGVkIiwiaGFuZGxlVG9nZ2xlIiwibmV3SXNPcGVuIiwicmVuZGVySWNvbiIsIkljb24iLCJyZW5kZXJDaGlsZHJlbiIsIm5vZGVDbHMiLCJJY29uQ2hlY2tJbnB1dCIsImNoZWNrYm94IiwicHJvcHNUb1NzZW5kIiwiX2RheWpzIiwiZm9ybWF0VmFsdWUiLCJwYWRTdGFydCIsIklucHV0RGF0ZSIsImZvcm1hdCIsImZvcm1hdGVkVmFsdWUiLCJpbnB1dFR5cGUiLCJfanZpZXciLCJKVmlldyIsImp2aWV3UHJvcHMiLCJjbGFzc05hbWVzIiwiRGlzcGxheSIsImNvbnRhaW5lckNsYXNzIiwibG9hZGluZ0NvbXBvbmVudCIsInJlZiIsImRyYWdnYWJsZSIsInVzZVVwbG9hZGVyQ3JlYXRlQ29udGV4dCIsImljb25VcGxvYWQiLCJfcHJldmlldyIsInByZXZpZXciLCJQcmV2aWV3Iiwic3JjIiwiTWVzc2FnZVJlbmRlcmVyIiwiZGV0YWlsc0Vycm9yIiwic3VjY2VzcyIsInN1Y2Nlc0luZm8iLCJjbG9zYWJsZSIsIlN1Y2Nlc3MiLCJkZXRhaWxzRXJyb3JJbmZvIiwiSW5mbyIsInJlbW92ZUZpbGUiLCJieXRlc1RvS0IiLCJieXRlcyIsInJlbW92ZSIsImRvd25sb2FkVXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwibGluayIsImhyZWYiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVDaGlsZCIsIkNvbnRhaW5lckJveCIsIlVwbG9hZGVyQ3JlYXRlQ29udGV4dCIsImljb25EcmFwIiwiaWNvbkZpbGUiLCJfaW5wdXQiLCJfdXBsb2FkZXIiLCJNYXRlcmlhbERpc2NoYXJnZVF1b2F0aW9uIiwiQnVkZ2V0SW5wdXQiLCJVcGxvYWRlciIsImZvcm1hdE51bWJlciIsImNsZWFuVmFsdWUiLCJhbGxvd2VkU3ltYm9scyIsImpvaW4iLCJlcnJvckluZm8iLCJfbWVzc2FnZSIsIl9kaXNwbGF5IiwiVXBsb2FkZXJGb3JtIiwidXNlVXBsb2FkZXIiLCJ1cGxvYWRlciIsInNldFVwbG9hZGVyIiwic2V0U3VjY2VzcyIsInNldERldGFpbHNFcnJvciIsInNldEl0ZW1zIiwic2V0TG9hZGluZyIsIm11bHRpcGxlIiwiY3JlYXRlIiwibm90QWxsb3ciLCJhbGxvd2VkRXh0ZW5zaW9ucyIsImludmFsaWRGaWxlcyIsInZhbGlkYXRlRXh0ZW5zaW9uIiwiaW52YWxpZEZpbGVOYW1lcyIsImRvTm90QWxsb3ciLCJwdWJsaXNoIiwiZm9sZGVyIiwicmVhZHkiLCJJbnB1dE51bWJlciIsIl9maXhOdW1iZXJEaXNwbGF5IiwiUGVyY2VudGFnZUlucHV0Iiwicm91bmRWYWx1ZSIsInRvRGlzcGxheVZhbCIsImlucHV0TnVtZXJpY1ZhbHVlIiwiUGx1c0lucHV0IiwiX2hlbHBlcnMiLCJJbnB1dFJlZmVyZW5jZU51bWJlciIsImdlbmVyYXRlTnVtZXJvUmVmZXJlbmNpYSIsImtleXNBIiwia2V5c0IiLCJhcnJheXNFcXVhbCIsIkNvbnRyb2xsZXIiLCJkZWZhdWx0T3B0aW9ucyIsImdlbmVyYWxNb2RlbCIsImNhbkNyZWF0ZSIsInNlbGVjdGFibGVWYWx1ZSIsImN1c3RvbU5vT3B0aW9uc01lc3NhZ2UiLCJzZWxlY3RlZE9wdGlvbkxhYmVsIiwib25TZWxlY3QiLCJ1cGRhdGVkUHJvcHMiLCJpc0FuSW50ZXJuYWxWYWx1ZSIsImN1c3RvbUZpbHRlciIsInNlYXJjaCIsImlzRGlzYWJsZWQiLCJzZWFyY2hpbmdPcHRpb25zIiwib3JkZXJlZE9wdGlvbnMiLCJzb3J0Iiwib3B0aW9uQSIsIm9wdGlvbkIiLCJhU3RhcnRzV2l0aCIsInRvTG93ZXJDYXNlIiwiYlN0YXJ0c1dpdGgiLCJhSW5jbHVkZXMiLCJiSW5jbHVkZXMiLCJfY3JlYXRhYmxlIiwiX2NvbnRyb2xsZXIiLCJfYXJyRXEiLCJjb250cm9sbGVyIiwiaXNFcXVhbHNPcHRpb25zIiwibm90VHJpZ2dlciIsIm9uQ3JlYXRlT3B0aW9uIiwiZm9ybWF0Q3JlYXRlTGFiZWwiLCJpbnB1dFZhbHVlIiwic2VsZWN0UHJvcHMiLCJDb250cm9sIiwiaWNvblRvb3RpcCIsImNvbnRyb2xsZXJPcHRpb25zIiwicmVtb3ZlT3B0aW9ucyIsInNlbGVjdERpc2FibGVkIiwiU3R5bGVPYnNlcnZlciIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsIm11dGF0aW9uIiwiZWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdGFydE9ic2VydmluZyIsImNoaWxkTGlzdCIsIm9ic2VydmUiLCJzdG9wT2JzZXJ2aW5nIiwiZGlzY29ubmVjdCIsIlRleHRGaWVsZCIsIklucHV0VGV4dCIsIl9jb250YWluZXJUb29sdGlwIiwiVG9wTGFiZWwiLCJ0eXBlcyIsImxhYmVscyIsImlucHV0cyIsImVudHJ5IiwiQ29udGFpbmVyVG9vbHRpcCIsImlzUGVyY2VudCIsInJlcGxhY2VBbGwiLCJfbGlnaHQiLCJfdXNlQ2FsY3VsYXRlIiwiSW5wdXRUcmFmZmljTGlnaHQiLCJzaG93UGFyYW1ldGVyIiwidmFsdWVUb0Rpc3BsYXkiLCJzZXRWYWx1ZVRvRGlzcGxheSIsImNvbG9yIiwidXNlQ2FsY3VsYXRlIiwicGFyYW1ldGVyIiwiVHJhZmZpY0xpZ2h0IiwiX3ZlcmlmaWNhdGlvbiIsImNvbG9ycyIsImdyZWVuIiwieWVsbG93IiwicmVkIiwiZ3JleSIsImNvbG9yc051bWJlciIsInNldENvbG9yIiwidmVyaWZ5IiwiaXNWYWx1ZXMiLCJpc05vdERlZmF1bHQiLCJmaXJzdFZhbHVlIiwiZmllbGRWYWx1ZSIsImZpcnNWYWx1ZUlucHV0IiwiYWNjdW11bGF0b3IiLCJwYXJhbWV0ZXJWYWx1ZSIsInRyYWZmaWMiLCJ2ZXJpZmljYXRpb25Db25kaXRpb24iLCJWZXJpZmljYXRpb25Db25kaXRpb24iLCJpc05vdE1vZGVsT24iLCJkZWZhdWx0Q29sb3IiLCJwcm9jZXNzU3RyaW5nIiwiaW5wdXRTdHJpbmciLCJ3aXRob3V0UGVyY2VudGFnZSIsInByb2Nlc3NlZFN0cmluZyIsInByb2Nlc3NBbmRDb25kaXRpb24iLCJzdHJpbmciLCJyZWdleCIsIlJlZ0V4cCIsIm1hdGNoIiwidmFsaWRhdGUiLCJzdWJ0cmFjdGlvbiIsIm9wZXJhdGlvbiIsImV2YWwiLCJJbWFnZUNvbmZpZyIsImdsb2JhbFRoaXMiLCJiYXNlRGlyIiwiZmlsZUlkIiwib25DbG9zZUFsZXJ0RXJyb3IiLCJzcmNEb3dubG9hZCIsInJlbCIsIl91cGxvYWRlckZvcm0iLCJfdXNlVXBsb2FkZXIiLCJzdG9yZWRGaWxlcyIsImZpbGVzTmFtZXMiLCJTcGlubmVyIiwiYWN0aXZlIiwiZ2VuZXJhbEZvcm1Nb2RlbCIsImFsbG93ZWRFeHRlbnNpb25zRGVmYXVsdCIsInVwbG9hZGVkRmlsZXMiLCJvblVwbG9hZCIsImF0dGFjaGVkVHlwZUlkIiwiY29uY2F0Iiwib3JpZ2luYWxJZHMiLCJjdXJyZW50SWRzIiwicmVtb3ZlZEl0ZW1zIiwicmVtb3ZlZElkcyIsInJlbW92ZWRPbGRJZHMiLCJyZW1vdmVkQWxsSWRzIiwiYWxyZWFkeUV4aXN0cyIsInBhc3NUaGVTaXplIiwiaXNFeHRlbnNpb25JbnZhbGlkIiwiaXNJbnZhbGlkIiwiX3VzZUl0ZW1zIiwiX2xpc3QiLCJWYWxpZGF0aW9uTW9kYWwiLCJ1c2VJdGVtcyIsImRlc2NyaXB0aW9uIiwiTGlzdCIsImdyb3VwIiwibWVzc2FnZXMiLCJzdWJHcm91cHMiLCJncm91cEluZGV4IiwiZnJvbSIsInN1YiIsImdyb3VwVGV4dCIsInRoZXJlc05vR3JvdXBzIiwiZ3JvdXBlZEVycm9ycyIsIm9yZGVyIiwic3ViR3JvdXAiLCJyZXZlcnNlIiwiYSIsImIiLCJfZWRpdG9yaWFsRGF0YSIsIl9wcm9tb3Rpb25hbCIsIkFUTVRpdGxlcyIsInN0YXRlIiwiYWx0YU1hdGVyaWFsSlZpZXciLCJJdGVtRWRpdG9yaWFsRGF0YSIsImFsdGFNYXRlcmlhbEpWaWV3UHJvbW90aW9uYWwiLCJJdGVtRWRpdG9yaWFsRGF0YVByb21vdGlvbmFsIiwiaXRlbVRhYmxlIiwidG9TZW5kIiwicm93cyIsImxpbWl0RGVwZGVudE9uSXRlbXMiLCJyb3dQcm9wcyIsImRhdGFIZWFkIiwiX2xvYWRJbnN0YW5jZSIsInRpcG9Qcm9kdWN0byIsInNldFRpcG9Qcm9kdWN0byIsImRpc2FibGVkQ29kZU1hdGVyaWFsIiwic2V0RGlzYWJsZWRDb2RlTWF0ZXJpYWwiLCJkaXNhYmxlZENvZGVNYXRlcmlhbE1kbSIsInNldERpc2FibGVkQ29kZU1hdGVyaWFsRG1kIiwiYnV0dG9uIiwiZmluZEluZGV4IiwiaWRUaXR1bG8iLCJub3REaXNhYmxlZE1hdGVyaWFsQ29kZSIsInByZXZDb2RpZ29NYXRlcmlhbCIsInByZXZDb2RpZ29NZG0iLCJkZWxldGVDYWxsYmFja3MiLCJzaXplRXhjZWVkZWQiLCJ0aXR1bG8iLCJjb2RpZ29NYXRlcmlhbE1kbSIsImNvZGlnb01hdGVyaWFsIiwiaWRJbnN0YW5jaWEiLCJMb2FkSW5zdGFuY2UiLCJkZWxldGVJdGVtcyIsIm1heExlbmd0aCIsIm9uQ2hhbmdlQ2FwdHVyZSIsInByb2Nlc3NJdGVtcyIsImJ1c2luZXNzUGFuZWxNYXRlcmlhbENvZGUiLCJjb21wb25lbnRUeXBlIiwiY29kaWdvTWF0ZXJpYWxNRE0iLCJhZmFJZCIsIm1hdGVyaWFsQ29kZUFycmF5IiwiY29tcG9uZW50VHlwZUFycmF5IiwidGl0bGVBcnJheSIsImNvZGlnb01hdGVyaWFsTURNQXJyYXkiLCJhZmFJZEFycmF5IiwiZmlsbCIsImRpZmZlcmVuY2UiLCJ0cmltIiwiX21hdGhqcyIsImZvcm11bGFzIiwibWF0aCIsImYiLCJldmFsdWF0ZUFycmF5Rm9ybXVsYSIsImV2YWx1YXRlQmFzaWNGb3JtdWxhIiwiZW50cnlWYWx1ZXMiLCJ2YWxpZGF0ZVZhbHVlIiwicGFyYW0iLCJldmFsdWF0ZSIsIk5hTiIsIkNvbG9yRXZhbHVhdG9yIiwicGFyYW1ldGVycyIsImV2YWx1YXRlQ29uZGl0aW9uIiwiZmlyc3RDb25kaXRpb24iLCJzZWNvbmRDb25kaXRpb24iLCJldmFsdWF0ZVNpbmdsZUNvbmRpdGlvbiIsIm9wZXJhdG9yIiwidGhyZXNob2xkU3RyIiwidGhyZXNob2xkIiwiZXZhbHVhdGVDb2xvciIsImNsYXZlUGFyYW1ldHJvIiwicGVyY2VudCIsImRpZmYiLCJwYXJhbWV0cm8iLCJfaW5kaWNhdG9ycyIsIkluZGljYXRvcnNGaWVsZCIsIndyYXBwZXIiLCJ3cmFwcGVyUGFyYW1ldGVycyIsImluZGljYXRvcnMiLCJJbmRpY2F0b3JzIiwiZG93bkxpc3RlbmVycyIsIl9jYWxjdWxhdG9yIiwiX2NvbG9yRXZhbHVhdG9yIiwiaW5kaWNhdG9yc0ZpZWxkIiwiZm9ybXVsYUNhbGN1bGF0b3IiLCJjb2xvckV2YWx1YXRvciIsImludmFsaWRWYWx1ZXMiLCJmaWVsZFRvT24iLCJleGlzdGluZ0luZGljYXRvcnMiLCJuZXdJbmRpY2F0b3JzIiwiZ2V0SW5kaWNhdG9ycyIsImluZGljYXRvcnNXaXRoSWRzIiwiaW5kaWNhdG9yIiwiZXhpc3RpbmciLCJlIiwiaW5kaWNhdG9yUHJvY2Vzc0lkIiwic3VtRW50cmllcyIsImRpdmlkZSIsImRpdmlkZXIiLCJ1c2VHcm91cGluZyIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJmaWVsZE5hbWUiLCJnZXRQYXJhbWV0ZXJzIiwiZ2V0UGFyYW1ldGVyIiwidmFsaWRhdGVWYWx1ZUZvckNvbG9yIiwidmFsaWRhdGVQZXJjZW50YWdlIiwicGVyY2VudGFnZSIsImNhbGN1bGF0ZVZlbnRhcyIsInZhbG9yVmVudGFzIiwicG9yY2VudGFqZVZlbnRhcyIsImlzR3JleSIsInZlbnRhMTJNIiwidmlzaWJpbGl0eUluYm94IiwiY2FsY3VsYXRlUmVudGFiaWxpZGFkIiwicmVudGFiaWxpZGFkIiwiaW52R3JhblRvdGFsIiwidmFsb3JSZW50YWJpbGlkYWQiLCJwb3JjZW50YWplUmVudGFiaWxpZGFkIiwiY2FsY3VsYXRlUmVudGFiaWxpZGFkQWp1c3RhZGEiLCJyZW50YWJpbGlkYWRBanVzdGFkYSIsInZhbG9yUmVudGFiaWxpZGFkQWp1c3RhZGEiLCJwb3JjZW50YWplUmVudGFiaWxpZGFkQWp1c3RhZGEiLCJjYWxjdWxhdGVNdWx0aXBsaWNhZG9yIiwibXVsdGlwbGljYWRvciIsInBhcmFtZXRyb1ZhbG9yIiwicGFyYW1ldHJvTXVsdGlwbGljYWRvclBvbmRlcmFkbyIsInBvcmNlbnRhamVNdWx0aXBsaWNhZG9yIiwiaXNWYWxpZFRpcmFkYSIsImNhbGN1bGF0ZU1hcmdlbkJydXRvIiwicG9yY2VudGFqZU1hcmdlbkJydXRvIiwidmVudGFOZXRhVG90YWwiLCJ2YWxvck1hcmdlbkJydXRvIiwiY2FsY3VsYXRlRGVzY3VlbnRvIiwicG9yY2VudGFqZURlc2N1ZW50byIsInZhbG9yRGVzY3VlbnRvIiwiY2FsY3VsYXRlQ29zdG8iLCJwdnBQcm9tZWRpbyIsInZhbG9yQ29zdG8iLCJ0aXJhZGFTdG9ja0NvbnNpZ25hZG9zIiwicG9yY2VudGFqZUNvc3RvIiwiY2FsY3VsYXRlRGVyZWNob3NBdXRvciIsImFudGljaXBvREEiLCJkZXJlY2hvQXV0b3JUb3RhbCIsInZhbG9yRGVyZWNob0F1dG9yIiwicG9yY2VudGFqZURlcmVjaG9BdXRvciIsIkRlbGV0ZVRpdGxlcyIsImlzRGVsZXRlQWxsIiwib25Db25maXJtIiwiYWN0aW9uc0l0ZW0iLCJhY3Rpb25zIiwiZGVsZXRlQWxsIiwic2VsZWN0ZWREZWxldGUiLCJEZWxldGVUaXRsZSIsImZpbmRNYXBCeUtleVJlY3Vyc2l2ZSIsImtleVRvRmluZCIsIm91dGVyTWFwIiwic2VhcmNoSW5NYXAiLCJIZWFkZXJQcm9kdWN0aW9uQm9va3MiLCJoZWFkIiwiaGVhZHMiLCJhZGRNYXRlcmlhbERpc2NoYXJnZSIsIkhlYWRlciIsIkhlYWRlclByb2R1Y3Rpb24iLCJpc0hhYmlsaXRhZG8iLCJfYWRkQXJ0aWNsZSIsIl9pdGVtUHJvZCIsIl9pdGVtQWZhIiwiX2hpc3RvcmljYWwiLCJfYXJ0aWNsZSIsIl9hdXRob3JzVGl0bGVzIiwiX2FkZEFydGljbGUyIiwiX2dlbmVyaWMiLCJfcHJvZHVjdGlvbiIsIl9ib29rc1Byb2R1Y3Rpb24iLCJfZGVsZXRlQWxsIiwiX3RpdGxlc1Byb2QiLCJKVmlld1RpdGxlIiwidGl0bGVCb29rcyIsIkl0ZW1Qcm9kIiwiYm9va3NBbHRhTWF0ZXJpYWwiLCJJdGVtQXJ0aWNsZSIsInRpdGxlSnZpZXciLCJJdGVtVGl0bGVzQUZBIiwiaGlzdG9yaWFsIiwiSGlzdG9yaWNhbCIsImFydGljbGVzSlZpZXciLCJJdGVtQXJ0aWNsZUFGQSIsImF1dGhvcnNUaXRsZXMiLCJBdXRob3JzVGl0bGVzIiwiYXJ0aWNsZVByb2R1Y3Rpb24iLCJJdGVtQXJ0aWNsZVByb2R1Y3Rpb24iLCJ0aXRsZXNQcm9kIiwiSXRlbVRpdGxlc1Byb2QiLCJoZWFkZXJzIiwiSGVhZGVyVGFibGUiLCJhcnRpY2xlcyIsInByb2R1Y3Rpb25zIiwiYXJ0aWNsZUZpbGVzIiwiY29kaWdvTWF0ZXJpYWxQYWNrIiwicGFjayIsInBhY2tBcnRpY2xlcyIsImhlYWRlciIsIl9maW5kTWFwIiwibmV3VGl0bGUiLCJuZXdUaXRsZVZhbHVlIiwid3JhcHBlckZpZWxkcyIsImlzUGFjayIsImVzUHJvZERpZ2l0YWwiLCJjZERldkNhbnRpZGFkIiwiY2REdmQiLCJmaWNoYXMiLCJmaWNoYXNDYW50aWRhZCIsImhhc0l0ZW0iLCJjaGVja2VkRmllbGRzIiwiZGF0YXNldCIsImlzU2VsZWN0ZWQiLCJ1dWlkIiwiYXV0b3JOYW1lcyIsInNlbGxvRGVzY3JpcGNpb24iLCJjb2xlY2Npb25EZXNjcmlwY2lvbiIsImlzYm4iLCJhdXRvcmVzIiwiaWx1c3RyYWRvciIsImlkT2JyYSIsIl91c2VUb29sdGlwIiwidXNlVG9vbHRpcCIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJ0YXNrIiwidXNlcm5hbWUiLCJhY3Rpb25JZCIsInNlbGVjdGVkSXRlbSIsInRpcmFkYUFjdHVhbCIsIkZvcm1hdGVyIiwibW9udGhNYXAiLCJmZWNoYSIsIm51bWVyb01lcyIsImFuaW8iLCJtZXNlcyIsIm1lc0VuRXNwYW5vbCIsImN1cnJlbmN5IiwiX2Zvcm1hdHMiLCJwdnAiLCJ0aXJhZGFEZWNpbWFsc0xlbmd0aCIsIlN0cmluZyIsInBvcmNlbnRhamVWZW50YTEyTSIsImludmVyc2lvblRvdGFsVGl0dWxvIiwicmVudGFiaWxpZGFkQVhQb3JjaWVudG8iLCJyZW50YWJpbGlkYWRBeFBvcmNpZW50byIsIm1lc0FuaW8iLCJkdXBsaWNhdGUiLCJ0YWJsZUZhdGhlciIsImlkQXJ0aWN1bG8iLCJhcnRpY2xlIiwiY29kaWdvTWF0ZXJpYWxNZG1BcnQiLCJpZEluc3RhbmNpYUFmYSIsIndpZHRoIiwicGFkZGluZyIsIl90aXBweSIsInJlZlRpcHB5IiwidG9vbHRpcEluc3RhbmNlIiwiZGVzdHJveSIsInRvb2x0aXBDb250ZW50Iiwic2V0Q29udGVudCIsImNvbnRlbnQiLCJhbGxvd0hUTUwiLCJoYW5kbGVNYWduaWZpZXIiLCJmb3JtTWFuYWdlciIsImxvYWRJbnN0YW5jZSIsInVzZU1vZGVsIiwicGFyZW50TW9kZWwiLCJ3cmFwcGVyTW9kZWwiLCJ1c2VXcmFwcGVkV2lzZUZvcm1Db250ZXh0IiwiX2NvbGxhcHNpYmxlIiwiQ29sbGFwc2libGUiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiQ29sbGFwc2libGVDb250ZW50IiwiV3JhcHBlZEZvcm0iLCJ1c2VDb2xsYXBzaWJsZUNvbnRleHQiLCJDb2xsYXBzaWJsZUNvbnRleHQiLCJfaGVhZGVyIiwiX2NvbnRlbnQiLCJEZXBlbmRlbnRDb2xsYXBzaWJsZSIsIm9wZW5lZCIsIkRpdiIsInN0eWxlcyIsIkxhYmVsIiwicmVzZXRXaGVuQ2xvc2VkIiwiU2VjdGlvbiIsInRvb2x0aXAiLCJ0b29sdGlwRGF0YSIsIlRvb2x0aXAiLCJfc3ViSXRlbSIsImlzU3ViSXRlbXMiLCJvdXRwdXRzIiwic3ViSXRlbSIsIlN1Ykl0ZW0iLCJidWxsZXRTdHlsZXMiLCJidWxsZXRTdHlsZSIsIlRvdGFsaXplckFGQSIsIl91c2VUb3RhbCIsIlRvdGFsaXplciIsInVzZVRvdGFsIiwiZGlzcGxheVRvdGFsSW4iLCJjdXJyZW50VmFscyIsImlkVHJhYmFqbyIsInRvdGFsTmFtZSIsInRvdGFsSW5wdXQiXSwic291cmNlcyI6WyIvY29kZS90cy9jb250ZXh0LnRzIiwiL2NvZGUvdHMvaHIvaW5kZXgudHN4IiwiL2NvZGUvdHMvaW5wdXRzL2FkZC1maWxlL2F0dGFjaG1lbnRzL2luZGV4LnRzeCIsIi9jb2RlL3RzL2lucHV0cy9hZGQtZmlsZS9hdHRhY2htZW50cy9pdGVtLnRzeCIsIi9jb2RlL3RzL2lucHV0cy9hZGQtZmlsZS9hdHRhY2htZW50cy9pdGVtcy50c3giLCIvY29kZS90cy9pbnB1dHMvYWRkLWZpbGUvaW5kZXgudHN4IiwiL2NvZGUvdHMvaW5wdXRzL2FkZC1maWxlL21vZGFsLnRzeCIsIi9jb2RlL3RzL2lucHV0cy9hZGQtZmlsZS9wcm9jZXNzLWltYWdlLnRzIiwiL2NvZGUvdHMvaW5wdXRzL2FkZC1tYXRlcmlhbC1kaXNjaGFyZ2UvaW5kZXgudHN4IiwiL2NvZGUvdHMvaW5wdXRzL2FkZC1tYXRlcmlhbC1kaXNjaGFyZ2UvbW9kYWwvaW5kZXgudHN4IiwiL2NvZGUvdHMvaW5wdXRzL2FsZXJ0LW1vZGFsL2luZGV4LnRzeCIsIi9jb2RlL3RzL2lucHV0cy9idXR0b24tZ3JvdXAvaW5kZXgudHN4IiwiL2NvZGUvdHMvaW5wdXRzL2J1dHRvbi9pbmRleC50c3giLCIvY29kZS90cy9pbnB1dHMvY2hlY2tib3gvaW5kZXgudHN4IiwiL2NvZGUvdHMvaW5wdXRzL2NvbW1lbnRzL2NvbnRleHQudHMiLCIvY29kZS90cy9pbnB1dHMvY29tbWVudHMvZGVsZXRlLnRzeCIsIi9jb2RlL3RzL2lucHV0cy9jb21tZW50cy9pY29ucy50cyIsIi9jb2RlL3RzL2lucHV0cy9jb21tZW50cy9pbmRleC50c3giLCIvY29kZS90cy9pbnB1dHMvY29tbWVudHMvaXRlbS50c3giLCIvY29kZS90cy9pbnB1dHMvY29tbWVudHMvbWFuYWdlci50cyIsIi9jb2RlL3RzL2lucHV0cy9jb21tZW50cy9uZXctY29tbWVudC50c3giLCIvY29kZS90cy9pbnB1dHMvY3VycmVuY3ktaW5wdXQvZml4ZWQtbnVtYmVyLnRzIiwiL2NvZGUvdHMvaW5wdXRzL2N1cnJlbmN5LWlucHV0L2Zvcm1hdC10by1kaXNwbGF5LnRzIiwiL2NvZGUvdHMvaW5wdXRzL2N1cnJlbmN5LWlucHV0L2luZGV4LnRzeCIsIi9jb2RlL3RzL2lucHV0cy9kYXRlL2dldC1taW4udHMiLCIvY29kZS90cy9pbnB1dHMvZGF0ZS9nZXR0ZXIudHMiLCIvY29kZS90cy9pbnB1dHMvZGF0ZS9pbmRleC50c3giLCIvY29kZS90cy9pbnB1dHMvZGF0ZS9wYXJzZXIudHMiLCIvY29kZS90cy9pbnB1dHMvZGVjaW1hbHMtaW5wdXQvZml4ZWQtbnVtYmVyLnRzIiwiL2NvZGUvdHMvaW5wdXRzL2RlY2ltYWxzLWlucHV0L2luZGV4LC50c3giLCIvY29kZS90cy9pbnB1dHMvZmllbGRzLXdyYXBwZXIvYXJyLWVxdWFscy50cyIsIi9jb2RlL3RzL2lucHV0cy9maWVsZHMtd3JhcHBlci9jb250ZXh0LnRzIiwiL2NvZGUvdHMvaW5wdXRzL2ZpZWxkcy13cmFwcGVyL2RhdGEtc2VydmljZS1wYWdlcy9nZXQtZmllbGRzLWNvbmZpZ3MudHMiLCIvY29kZS90cy9pbnB1dHMvZmllbGRzLXdyYXBwZXIvZGF0YS1zZXJ2aWNlLXBhZ2VzL2luZGV4LnRzIiwiL2ludGVyZmFjZXMudHMiLCIvY29kZS90cy9pbnB1dHMvZmllbGRzLXdyYXBwZXIvZGVmYXVsdC1pdGVtLnRzIiwiL2NvZGUvdHMvaW5wdXRzL2ZpZWxkcy13cmFwcGVyL2Zvcm11bGEtY2FsY3VsYXRvci9hcGktc2VydmljZS50cyIsIi9jb2RlL3RzL2lucHV0cy9maWVsZHMtd3JhcHBlci9mb3JtdWxhLWNhbGN1bGF0b3IvY2FsY3VsYXRlLnRzIiwiL2NvZGUvdHMvaW5wdXRzL2ZpZWxkcy13cmFwcGVyL2Zvcm11bGEtY2FsY3VsYXRvci9kYXRhLXNlcnZpY2UudHMiLCIvY29kZS90cy9pbnB1dHMvZmllbGRzLXdyYXBwZXIvZm9ybXVsYS1jYWxjdWxhdG9yL2luZGV4LnRzIiwiL2NvZGUvdHMvaW5wdXRzL2ZpZWxkcy13cmFwcGVyL2Zvcm11bGEtY2FsY3VsYXRvci90b3RhbHMudHMiLCIvY29kZS90cy9pbnB1dHMvZmllbGRzLXdyYXBwZXIvaG9va3MvdXNlLW1ha2UtcmVxdWVzdC50cyIsIi9jb2RlL3RzL2lucHV0cy9maWVsZHMtd3JhcHBlci9pbmRleC50c3giLCIvY29kZS90cy9pbnB1dHMvZmllbGRzLXdyYXBwZXIvaXRlbS50c3giLCIvY29kZS90cy9pbnB1dHMvaGllcmFyY2hpY2FsLXRyZWUvZmluZC1ub2RlLnRzIiwiL2NvZGUvdHMvaW5wdXRzL2hpZXJhcmNoaWNhbC10cmVlL2ljb25zLnRzIiwiL2NvZGUvdHMvaW5wdXRzL2hpZXJhcmNoaWNhbC10cmVlL2luZGV4LnRzeCIsIi9jb2RlL3RzL2lucHV0cy9oaWVyYXJjaGljYWwtdHJlZS90cmVlLW5vZGUudHN4IiwiL3R5cGVzLnRzIiwiL2NvZGUvdHMvaW5wdXRzL2ljb24tY2hlY2staW5wdXQvaW5kZXgudHN4IiwiL2NvZGUvdHMvaW5wdXRzL2lucHV0LWRhdGUvaW5kZXgudHN4IiwiL2NvZGUvdHMvaW5wdXRzL2p2aWV3L2luZGV4LnRzeCIsIi9jb2RlL3RzL2lucHV0cy9tYXRlcmlhbC1kaXNjaGFyZ2UtcXVvdGF0aW9uL2FkZC1maWxlcy9kaXNwbGF5LnRzeCIsIi9jb2RlL3RzL2lucHV0cy9tYXRlcmlhbC1kaXNjaGFyZ2UtcXVvdGF0aW9uL2F0dGFjaG1lbnRzL2luZGV4LnRzeCIsIi9jb2RlL3RzL2lucHV0cy9tYXRlcmlhbC1kaXNjaGFyZ2UtcXVvdGF0aW9uL2F0dGFjaG1lbnRzL2l0ZW1zLnRzeCIsIi9jb2RlL3RzL2lucHV0cy9tYXRlcmlhbC1kaXNjaGFyZ2UtcXVvdGF0aW9uL2F0dGFjaG1lbnRzL21lc3NhZ2UudHN4IiwiL2NvZGUvdHMvaW5wdXRzL21hdGVyaWFsLWRpc2NoYXJnZS1xdW90YXRpb24vYXR0YWNobWVudHMvcHJldmlldy50c3giLCIvY29kZS90cy9pbnB1dHMvbWF0ZXJpYWwtZGlzY2hhcmdlLXF1b3RhdGlvbi9jb250YWluZXIudHN4IiwiL2NvZGUvdHMvaW5wdXRzL21hdGVyaWFsLWRpc2NoYXJnZS1xdW90YXRpb24vY29udGV4dC50cyIsIi9jb2RlL3RzL2lucHV0cy9tYXRlcmlhbC1kaXNjaGFyZ2UtcXVvdGF0aW9uL2ljb25zLnRzIiwiL2NvZGUvdHMvaW5wdXRzL21hdGVyaWFsLWRpc2NoYXJnZS1xdW90YXRpb24vaW5kZXgudHN4IiwiL2NvZGUvdHMvaW5wdXRzL21hdGVyaWFsLWRpc2NoYXJnZS1xdW90YXRpb24vaW5wdXQudHN4IiwiL2NvZGUvdHMvaW5wdXRzL21hdGVyaWFsLWRpc2NoYXJnZS1xdW90YXRpb24vbWVzc2FnZS50c3giLCIvY29kZS90cy9pbnB1dHMvbWF0ZXJpYWwtZGlzY2hhcmdlLXF1b3RhdGlvbi9tb2RhbC50c3giLCIvY29kZS90cy9pbnB1dHMvbWF0ZXJpYWwtZGlzY2hhcmdlLXF1b3RhdGlvbi9wcm9jZXNzLWltYWdlLnRzIiwiL2NvZGUvdHMvaW5wdXRzL21hdGVyaWFsLWRpc2NoYXJnZS1xdW90YXRpb24vdXBsb2FkZXItZm9ybS50c3giLCIvY29kZS90cy9pbnB1dHMvbWF0ZXJpYWwtZGlzY2hhcmdlLXF1b3RhdGlvbi91c2UtdXBsb2FkZXIudHN4IiwiL2NvZGUvdHMvaW5wdXRzL251bWJlci9pbmRleC50c3giLCIvY29kZS90cy9pbnB1dHMvcGVyY2VudGFnZS1pbnB1dC9maXgtbnVtYmVyLWRpc3BsYXkudHMiLCIvY29kZS90cy9pbnB1dHMvcGVyY2VudGFnZS1pbnB1dC9mb3JtYXQtdG8tZGlzcGxheS50cyIsIi9jb2RlL3RzL2lucHV0cy9wZXJjZW50YWdlLWlucHV0L2luZGV4LnRzeCIsIi9jb2RlL3RzL2lucHV0cy9wbHVzLWlucHV0L2luZGV4LnRzeCIsIi9jb2RlL3RzL2lucHV0cy9yZWZlcmVuY2UtbnVtYmVyL2luZGV4LnRzeCIsIi9jb2RlL3RzL2lucHV0cy9zZWxlY3QvYXJyLWVxLnRzIiwiL2NvZGUvdHMvaW5wdXRzL3NlbGVjdC9jb250cm9sbGVyLnRzIiwiL2NvZGUvdHMvaW5wdXRzL3NlbGVjdC9pbmRleC50c3giLCIvY29kZS90cy9pbnB1dHMvc2VsZWN0L29ic2VydmVyLnRzIiwiL2NvZGUvdHMvaW5wdXRzL3RleHQtZmllbGQvaW5kZXgudHN4IiwiL2NvZGUvdHMvaW5wdXRzL3RleHQvaW5kZXgudHN4IiwiL2NvZGUvdHMvaW5wdXRzL3RvcC1sYWJlbC9pbmRleC50c3giLCIvY29kZS90cy9pbnB1dHMvdHJhZmZpYy1saWd0aC9mb3JtYXQtdG8tZGlzcGxheS50cyIsIi9jb2RlL3RzL2lucHV0cy90cmFmZmljLWxpZ3RoL2luZGV4LnRzeCIsIi9jb2RlL3RzL2lucHV0cy90cmFmZmljLWxpZ3RoL2xpZ2h0LnRzeCIsIi9jb2RlL3RzL2lucHV0cy90cmFmZmljLWxpZ3RoL3VzZS1jYWxjdWxhdGUudHMiLCIvY29kZS90cy9pbnB1dHMvdHJhZmZpYy1saWd0aC92ZXJpZmljYXRpb24udHMiLCIvY29kZS90cy9pbnB1dHMvdXBsb2FkZXIvYWRkLWZpbGVzL2Rpc3BsYXkudHN4IiwiL2NvZGUvdHMvaW5wdXRzL3VwbG9hZGVyL2F0dGFjaG1lbnRzL2ltYWdlLWNvbmZpZy50cyIsIi9jb2RlL3RzL2lucHV0cy91cGxvYWRlci9hdHRhY2htZW50cy9pbmRleC50c3giLCIvY29kZS90cy9pbnB1dHMvdXBsb2FkZXIvYXR0YWNobWVudHMvaXRlbXMudHN4IiwiL2NvZGUvdHMvaW5wdXRzL3VwbG9hZGVyL2F0dGFjaG1lbnRzL21lc3NhZ2UudHN4IiwiL2NvZGUvdHMvaW5wdXRzL3VwbG9hZGVyL2F0dGFjaG1lbnRzL3ByZXZpZXcudHN4IiwiL2NvZGUvdHMvaW5wdXRzL3VwbG9hZGVyL2NvbnRhaW5lci50c3giLCIvY29kZS90cy9pbnB1dHMvdXBsb2FkZXIvY29udGV4dC50cyIsIi9jb2RlL3RzL2lucHV0cy91cGxvYWRlci9pY29ucy50cyIsIi9jb2RlL3RzL2lucHV0cy91cGxvYWRlci9pbmRleC50c3giLCIvY29kZS90cy9pbnB1dHMvdXBsb2FkZXIvdXBsb2FkZXItZm9ybS50c3giLCIvY29kZS90cy9pbnB1dHMvdXBsb2FkZXIvdXNlLXVwbG9hZGVyLnRzeCIsIi9jb2RlL3RzL2lucHV0cy92YWxpZGF0aW9uLW1vZGFsL2luZGV4LnRzeCIsIi9jb2RlL3RzL2lucHV0cy92YWxpZGF0aW9uLW1vZGFsL2l0ZW0udHN4IiwiL2NvZGUvdHMvaW5wdXRzL3ZhbGlkYXRpb24tbW9kYWwvbGlzdC50c3giLCIvY29kZS90cy9pbnB1dHMvdmFsaWRhdGlvbi1tb2RhbC91c2UtaXRlbXMudHMiLCIvY29kZS90cy9zcGVjaWZpYy9hdG0tdGl0bGVzL2luZGV4LnRzeCIsIi9jb2RlL3RzL3NwZWNpZmljL2F0bS10aXRsZXMvaXRlbXMvZWRpdG9yaWFsLWRhdGUvZWRpdG9yaWFsLWRhdGEudHN4IiwiL2NvZGUvdHMvc3BlY2lmaWMvYXRtLXRpdGxlcy9pdGVtcy9wcm9tb3Rpb25hbC9pbmRleC50c3giLCIvY29kZS90cy9zcGVjaWZpYy9hdG0tdGl0bGVzL3Byb2Nlc3MtaXRlbXMudHMiLCIvY29kZS90cy9zcGVjaWZpYy9pbmRpY2F0b3JzL2NhbGN1bGF0b3IudHMiLCIvY29kZS90cy9zcGVjaWZpYy9pbmRpY2F0b3JzL2NvbG9yLWV2YWx1YXRvci50cyIsIi9jb2RlL3RzL3NwZWNpZmljL2luZGljYXRvcnMvaW5kZXgudHN4IiwiL2NvZGUvdHMvc3BlY2lmaWMvaW5kaWNhdG9ycy9pbmRpY2F0b3JzLnRzIiwiL2NvZGUvdHMvc3BlY2lmaWMvanZpZXctdGl0bGVzL2RlbGV0ZS1hbGwudHN4IiwiL2NvZGUvdHMvc3BlY2lmaWMvanZpZXctdGl0bGVzL2RlbGV0ZS50c3giLCIvY29kZS90cy9zcGVjaWZpYy9qdmlldy10aXRsZXMvZmluZC1tYXAudHMiLCIvY29kZS90cy9zcGVjaWZpYy9qdmlldy10aXRsZXMvZm9ybWF0LXRvLWRpc3BsYXkudHMiLCIvY29kZS90cy9zcGVjaWZpYy9qdmlldy10aXRsZXMvaGVhZGVyL2Jvb2tzLXByb2R1Y3Rpb24udHN4IiwiL2NvZGUvdHMvc3BlY2lmaWMvanZpZXctdGl0bGVzL2hlYWRlci9nZW5lcmljLnRzeCIsIi9jb2RlL3RzL3NwZWNpZmljL2p2aWV3LXRpdGxlcy9oZWFkZXIvcHJvZHVjdGlvbi50c3giLCIvY29kZS90cy9zcGVjaWZpYy9qdmlldy10aXRsZXMvaW5kZXgudHN4IiwiL2NvZGUvdHMvc3BlY2lmaWMvanZpZXctdGl0bGVzL2l0ZW0vYWRkLWFydGljbGUudHN4IiwiL2NvZGUvdHMvc3BlY2lmaWMvanZpZXctdGl0bGVzL2l0ZW0vYXJ0aWNsZS1wcm9kdWNjaW9uL2FkZC1hcnRpY2xlLnRzeCIsIi9jb2RlL3RzL3NwZWNpZmljL2p2aWV3LXRpdGxlcy9pdGVtL2FydGljbGUvaW5kZXgudHN4IiwiL2NvZGUvdHMvc3BlY2lmaWMvanZpZXctdGl0bGVzL2l0ZW0vYXV0aG9ycy10aXRsZXMvaW5kZXgudHN4IiwiL2NvZGUvdHMvc3BlY2lmaWMvanZpZXctdGl0bGVzL2l0ZW0vaGlzdG9yaWNhbC50c3giLCIvY29kZS90cy9zcGVjaWZpYy9qdmlldy10aXRsZXMvaXRlbS9pdGVtLXByb2QudHN4IiwiL2NvZGUvdHMvc3BlY2lmaWMvanZpZXctdGl0bGVzL2l0ZW0vdGl0bGVzLWFmYS9mb3JtYXRzLnRzIiwiL2NvZGUvdHMvc3BlY2lmaWMvanZpZXctdGl0bGVzL2l0ZW0vdGl0bGVzLWFmYS9pdGVtLWFmYS50c3giLCIvY29kZS90cy9zcGVjaWZpYy9qdmlldy10aXRsZXMvaXRlbS90aXRsZXMtcHJvZC9pbmRleC50c3giLCIvY29kZS90cy9zcGVjaWZpYy9qdmlldy10aXRsZXMvaXRlbS91c2UtdG9vbHRpcC50c3giLCIvY29kZS90cy9zcGVjaWZpYy9sb2FkLWluc3RhbmNlL2luZGV4LnRzeCIsIi9jb2RlL3RzL3VzZS1tb2RlbC50cyIsIi9jb2RlL3RzL3dyYXBwZXJzL2NvbGxhcHNpYmxlL2luZGV4LnRzeCIsIi9jb2RlL3RzL3dyYXBwZXJzL2RlcGVuZGVudC1jb2xsYXBzaWJsZS9jb250ZW50LnRzeCIsIi9jb2RlL3RzL3dyYXBwZXJzL2RlcGVuZGVudC1jb2xsYXBzaWJsZS9jb250ZXh0LnRzeCIsIi9jb2RlL3RzL3dyYXBwZXJzL2RlcGVuZGVudC1jb2xsYXBzaWJsZS9oZWFkZXIudHN4IiwiL2NvZGUvdHMvd3JhcHBlcnMvZGVwZW5kZW50LWNvbGxhcHNpYmxlL2luZGV4LnRzeCIsIi9jb2RlL3RzL3dyYXBwZXJzL2Rpdi9pbmRleC50c3giLCIvY29kZS90cy93cmFwcGVycy9sYWJlbC9pbmRleC50c3giLCIvY29kZS90cy93cmFwcGVycy9tb2RhbC9pbmRleC50c3giLCIvY29kZS90cy93cmFwcGVycy9zZWN0aW9uL2luZGV4LnRzeCIsIi9jb2RlL3RzL3dyYXBwZXJzL3Rvb2x0aXAvY29udGFpbmVyLXRvb2x0aXAudHN4IiwiL2NvZGUvdHMvd3JhcHBlcnMvdG9vbHRpcC9pbmRleC50c3giLCIvY29kZS90cy93cmFwcGVycy90b29sdGlwL2l0ZW0udHN4IiwiL2NvZGUvdHMvd3JhcHBlcnMvdG9vbHRpcC9zdWItaXRlbS50c3giLCIvY29kZS90cy93cmFwcGVycy90b3RhbGl6ZXItYWZhL2luZGV4LnRzeCIsIi9jb2RlL3RzL3dyYXBwZXJzL3RvdGFsaXplci9pbmRleC50c3giLCIvY29kZS90cy93cmFwcGVycy90b3RhbGl6ZXIvdXNlLXRvdGFsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFTTztVQUFXLE1BQU1DLGtCQUFrQixHQUFBQyxP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