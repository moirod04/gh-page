System.register(["@beyond-js/kernel@0.1.9/bundle", "sgs-workflow@1.0.0/api", "@bgroup/helpers@1.0.5/utils", "@beyond-js/reactive@1.1.14/entities", "sgs-workflow@1.0.0/config", "@beyond-js/reactive@1.1.14/model", "@beyond-js/kernel@0.1.9/routing", "sgs-workflow@1.0.0/wrappers"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, AreasCollection, AreaItem, BusinessCollection, BusinessItem, CommentsCollection, CommentItem, FormItem, IndicatorsCollection, IndicatorItem, InstancesCollection, InstanceItem, ProcessCollection, ProcessItem, Requests, TasksStatesCollection, TaskStateItem, TasksCollection, TaskItem, __beyond_pkg, hmr;
  _export({
    AreasCollection: void 0,
    AreaItem: void 0,
    BusinessCollection: void 0,
    BusinessItem: void 0,
    CommentsCollection: void 0,
    CommentItem: void 0,
    FormItem: void 0,
    IndicatorsCollection: void 0,
    IndicatorItem: void 0,
    InstancesCollection: void 0,
    InstanceItem: void 0,
    ProcessCollection: void 0,
    ProcessItem: void 0,
    Requests: void 0,
    TasksStatesCollection: void 0,
    TaskStateItem: void 0,
    TasksCollection: void 0,
    TaskItem: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_sgsWorkflow100Api) {
      dependency_1 = _sgsWorkflow100Api;
    }, function (_bgroupHelpers105Utils) {
      dependency_2 = _bgroupHelpers105Utils;
    }, function (_beyondJsReactive1114Entities) {
      dependency_3 = _beyondJsReactive1114Entities;
    }, function (_sgsWorkflow100Config) {
      dependency_4 = _sgsWorkflow100Config;
    }, function (_beyondJsReactive1114Model) {
      dependency_5 = _beyondJsReactive1114Model;
    }, function (_beyondJsKernel019Routing) {
      dependency_6 = _beyondJsKernel019Routing;
    }, function (_sgsWorkflow100Wrappers) {
      dependency_7 = _sgsWorkflow100Wrappers;
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
          "vspecifier": "sgs-workflow@1.0.0/entities"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['sgs-workflow/api', dependency_1], ['@bgroup/helpers/utils', dependency_2], ['@beyond-js/reactive/entities', dependency_3], ['sgs-workflow/config', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['sgs-workflow/wrappers', dependency_7]]);
      ims = new Map();
      /************************************************************
      INTERNAL MODULE: ./areas/collection/areas-collection-provider
      ************************************************************/
      ims.set('./areas/collection/areas-collection-provider', {
        hash: 575986106,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AreasCollectionProvider = void 0;
          var _api = require("sgs-workflow/api");
          var _utils = require("@bgroup/helpers/utils");
          class AreasCollectionProvider {
            #api = new _api.Api();
            list = params => {
              const query = _utils.Utils.convertObjectToQuery({
                ...params.where,
                start: params.start,
                limit: params.limit
              });
              return this.#api.get('areas' + query);
            };
          }
          exports.AreasCollectionProvider = AreasCollectionProvider;
        }
      });

      /***************************************************
      INTERNAL MODULE: ./areas/collection/areas-collection
      ***************************************************/

      ims.set('./areas/collection/areas-collection', {
        hash: 2898754221,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AreasCollection = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _config = require("sgs-workflow/config");
          var _areasCollectionProvider = require("./areas-collection-provider");
          var _areaItem = require("../item/area-item");
          /*bundle*/
          class AreasCollection extends _entities.Collection {
            constructor() {
              super({
                provider: _areasCollectionProvider.AreasCollectionProvider,
                storeName: 'areas',
                db: _config.default.params.application.localDB,
                item: _areaItem.AreaItem
              });
            }
          }
          exports.AreasCollection = AreasCollection;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./areas/item/area-item-provider
      ***********************************************/

      ims.set('./areas/item/area-item-provider', {
        hash: 3503829400,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AreaItemProvider = void 0;
          var _api = require("sgs-workflow/api");
          var _utils = require("@bgroup/helpers/utils");
          ;
          class AreaItemProvider {
            #api = new _api.Api();
            load = params => {
              const query = _utils.Utils.convertObjectToQuery({
                id: params.id
              });
              return this.#api.get('area' + query);
            };
          }
          exports.AreaItemProvider = AreaItemProvider;
        }
      });

      /**************************************
      INTERNAL MODULE: ./areas/item/area-item
      **************************************/

      ims.set('./areas/item/area-item', {
        hash: 3675549241,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AreaItem = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _config = require("sgs-workflow/config");
          var _areaItemProvider = require("./area-item-provider");
          /*bundle*/
          class AreaItem extends _entities.Item {
            properties = ['id', 'name', 'description', 'creatorUserId', 'modifierUserId', 'timeCreated', 'timeUpdated'];
            constructor(params = {
              id: undefined
            }) {
              super({
                provider: _areaItemProvider.AreaItemProvider,
                storeName: 'areas',
                db: _config.default.params.application.localDB,
                ...params
              });
            }
          }
          exports.AreaItem = AreaItem;
        }
      });

      /******************************************************************
      INTERNAL MODULE: ./business/collection/business-collection-provider
      ******************************************************************/

      ims.set('./business/collection/business-collection-provider', {
        hash: 2814196340,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BusinessCollectionProvider = void 0;
          var _api = require("sgs-workflow/api");
          var _utils = require("@bgroup/helpers/utils");
          class BusinessCollectionProvider {
            #api = new _api.Api();
            list = params => {
              const query = _utils.Utils.convertObjectToQuery({
                ...params.where,
                start: params.start,
                limit: params.limit
              });
              return this.#api.get('business' + query);
            };
          }
          exports.BusinessCollectionProvider = BusinessCollectionProvider;
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./business/collection/business-collection
      *********************************************************/

      ims.set('./business/collection/business-collection', {
        hash: 2218932679,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BusinessCollection = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _config = require("sgs-workflow/config");
          var _businesItem = require("../item/busines-item");
          var _businessCollectionProvider = require("./business-collection-provider");
          /*bundle*/
          class BusinessCollection extends _entities.Collection {
            constructor() {
              super({
                provider: _businessCollectionProvider.BusinessCollectionProvider,
                storeName: 'business',
                db: _config.default.params.application.localDB,
                item: _businesItem.BusinessItem
              });
            }
          }
          exports.BusinessCollection = BusinessCollection;
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./business/item/busines-item-provider
      *****************************************************/

      ims.set('./business/item/busines-item-provider', {
        hash: 2415597397,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BusinessItemProvider = void 0;
          var _api = require("sgs-workflow/api");
          var _utils = require("@bgroup/helpers/utils");
          class BusinessItemProvider {
            #api = new _api.Api();
            load = params => {
              const query = _utils.Utils.convertObjectToQuery({
                id: params.id
              });
              return this.#api.get("processBusinessInformation" + query);
            };
          }
          exports.BusinessItemProvider = BusinessItemProvider;
        }
      });

      /********************************************
      INTERNAL MODULE: ./business/item/busines-item
      ********************************************/

      ims.set('./business/item/busines-item', {
        hash: 1222915693,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BusinessItem = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _config = require("sgs-workflow/config");
          var _businesItemProvider = require("./busines-item-provider");
          /*bundle*/
          class BusinessItem extends _entities.Item {
            properties = ['id', 'name', 'description', 'creatorUserId', 'modifierUserId', 'timeCreated', 'timeUpdated'];
            constructor(params = {
              id: undefined
            }) {
              super({
                provider: _businesItemProvider.BusinessItemProvider,
                storeName: 'business',
                db: _config.default.params.application.localDB,
                ...params
              });
            }
          }
          exports.BusinessItem = BusinessItem;
        }
      });

      /******************************************************************
      INTERNAL MODULE: ./comments/collection/comments-collection-provider
      ******************************************************************/

      ims.set('./comments/collection/comments-collection-provider', {
        hash: 809034482,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CommentsCollectionProvider = void 0;
          var _api = require("sgs-workflow/api");
          var _utils = require("@bgroup/helpers/utils");
          class CommentsCollectionProvider {
            #api = new _api.Api();
            list = async params => {
              const query = _utils.Utils.convertObjectToQuery({
                ...params.where,
                start: params.start,
                limit: params.limit
              });
              return this.#api.get('comments' + query);
            };
          }
          exports.CommentsCollectionProvider = CommentsCollectionProvider;
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./comments/collection/comments-collection
      *********************************************************/

      ims.set('./comments/collection/comments-collection', {
        hash: 1379989510,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CommentsCollection = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _config = require("sgs-workflow/config");
          var _commentsCollectionProvider = require("./comments-collection-provider");
          var _commentItem = require("../item/comment-item");
          /*bundle*/
          class CommentsCollection extends _entities.Collection {
            constructor() {
              super({
                provider: _commentsCollectionProvider.CommentsCollectionProvider,
                storeName: 'comments',
                db: _config.default.params.application.localDB,
                item: _commentItem.CommentItem
              });
            }
          }
          exports.CommentsCollection = CommentsCollection;
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./comments/item/comment-item-provider
      *****************************************************/

      ims.set('./comments/item/comment-item-provider', {
        hash: 137363370,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CommentItemProvider = void 0;
          var _api = require("sgs-workflow/api");
          class CommentItemProvider {
            #api = new _api.Api();
            publish = params => {
              const method = params.isNew ? 'post' : 'put';
              return this.#api[method]('comment', params);
            };
            delete = id => {
              return this.#api.delete(`comment/${id}`);
            };
          }
          exports.CommentItemProvider = CommentItemProvider;
        }
      });

      /********************************************
      INTERNAL MODULE: ./comments/item/comment-item
      ********************************************/

      ims.set('./comments/item/comment-item', {
        hash: 3685874206,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CommentItem = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _config = require("sgs-workflow/config");
          var _commentItemProvider = require("./comment-item-provider");
          /*bundle*/
          class CommentItem extends _entities.Item {
            properties = ['id', 'comment', 'userId', 'taskId', 'creatorUserId', 'user', 'modifierUserId', 'timeCreated', 'timeUpdated', 'instanceId'];
            constructor(params = {
              id: undefined
            }) {
              super({
                provider: _commentItemProvider.CommentItemProvider,
                storeName: 'comments',
                db: _config.default.params.application.localDB,
                ...params
              });
            }
          }
          exports.CommentItem = CommentItem;
        }
      });

      /**********************************************
      INTERNAL MODULE: ./form/item/form-item-provider
      **********************************************/

      ims.set('./form/item/form-item-provider', {
        hash: 3821408962,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormItemProvider = void 0;
          var _api = require("sgs-workflow/api");
          var _config = require("sgs-workflow/config");
          class FormItemProvider {
            #api = new _api.Api();
            #securityApi = new _api.Api(_config.default.params.securityServer);
            data = params => {
              return this.#api.get(`form/get/${params.processId}`);
            };
            publish = async params => {
              const url = params?.instanceId ? `workflow/${params.instanceId}` : `workflow`;
              return this.#api.post(url, params.data);
            };
            getSelects = ({
              id,
              select,
              dependencyId,
              ...query
            }) => {
              return this.#api.get(`form/${id}/selects/${select}/${dependencyId}?parentId=${query.parentId}`);
            };
            getChildsValues = ({
              id,
              name,
              dependencyId
            }) => {
              return this.#api.get(`form/${id}/get-childs-value/${name}/${dependencyId}`);
            };
            getInstanceForm = params => {
              return this.#api.get(`form/get-instance/${params.id}`);
            };
            validate = params => {
              return this.#api.post(`form/validate`, params);
            };
            getDerivationUsers = params => {
              return this.#securityApi.get(`derivation-users/${params.processId}`);
            };
          }
          exports.FormItemProvider = FormItemProvider;
        }
      });

      /*************************************
      INTERNAL MODULE: ./form/item/form-item
      *************************************/

      ims.set('./form/item/form-item', {
        hash: 3159700733,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormItem = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _config = require("sgs-workflow/config");
          var _formItemProvider = require("./form-item-provider");
          /*bundle*/
          class FormItem extends _entities.Item {
            properties = ['id', 'data', 'name', 'identifier', 'creatorUserId', 'modifierUserId', 'timeCreated', 'timeUpdated', 'instance'];
            constructor(params = {
              id: undefined
            }) {
              super({
                provider: _formItemProvider.FormItemProvider,
                storeName: 'forms',
                db: _config.default.params.application.localDB,
                ...params
              });
            }
            getSelects = params => {
              return this.provider.getSelects(params);
            };
            getChildsValues = params => {
              return this.provider.getChildsValues(params);
            };
            getInstanceForm = async ({
              id
            }) => {
              try {
                const response = await this.provider.getInstanceForm({
                  id
                });
                if (!response) throw response.error;
                this.set(response.data);
                return {
                  status: true,
                  data: response.data
                };
              } catch (error) {
                return {
                  status: false,
                  error
                };
              }
            };
            getDerivationUsers = params => {
              return this.provider.getDerivationUsers(params);
            };
            validate = params => {
              return this.provider.validate(params);
            };
          }
          exports.FormItem = FormItem;
        }
      });

      /**********************************************************************
      INTERNAL MODULE: ./indicators/collection/indicators-collection-provider
      **********************************************************************/

      ims.set('./indicators/collection/indicators-collection-provider', {
        hash: 884930038,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.IndicatorsCollectionProvider = void 0;
          var _api = require("sgs-workflow/api");
          class IndicatorsCollectionProvider {
            #api = new _api.Api();
            list = async params => {
              const response = await this.#api.get(`indicators/${params.where.instanceId}`);
              return response;
            };
          }
          exports.IndicatorsCollectionProvider = IndicatorsCollectionProvider;
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./indicators/collection/indicators-collection
      *************************************************************/

      ims.set('./indicators/collection/indicators-collection', {
        hash: 20042596,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.IndicatorsCollection = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _config = require("sgs-workflow/config");
          var _indicatorItem = require("../item/indicator-item");
          var _indicatorsCollectionProvider = require("./indicators-collection-provider");
          /*bundle*/
          class IndicatorsCollection extends _entities.Collection {
            constructor() {
              super({
                provider: _indicatorsCollectionProvider.IndicatorsCollectionProvider,
                storeName: 'indicators',
                db: _config.default.params.application.localDB,
                item: _indicatorItem.IndicatorItem
              });
            }
          }
          exports.IndicatorsCollection = IndicatorsCollection;
        }
      });

      /************************************************
      INTERNAL MODULE: ./indicators/item/indicator-item
      ************************************************/

      ims.set('./indicators/item/indicator-item', {
        hash: 2585524929,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.IndicatorItem = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _config = require("sgs-workflow/config");
          var _indicatorsItemProvider = require("./indicators-item-provider");
          /*bundle*/
          class IndicatorItem extends _entities.Item {
            properties = ['id', 'name', 'description', 'valueType', 'creatorUserId', 'modifierUserId', 'timeCreated', 'timeUpdated', 'group', 'value', 'percentage', 'color'];
            constructor(params = {
              id: undefined
            }) {
              super({
                provider: _indicatorsItemProvider.IndicatorItemProvider,
                storeName: 'indicators',
                db: _config.default.params.application.localDB,
                ...params
              });
            }
          }
          exports.IndicatorItem = IndicatorItem;
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./indicators/item/indicators-item-provider
      **********************************************************/

      ims.set('./indicators/item/indicators-item-provider', {
        hash: 2617434583,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.IndicatorItemProvider = void 0;
          var _api = require("sgs-workflow/api");
          var _utils = require("@bgroup/helpers/utils");
          class IndicatorItemProvider {
            #api = new _api.Api();
            load = params => {
              const query = _utils.Utils.convertObjectToQuery({
                id: params.id
              });
              return this.#api.get('indicators' + query);
            };
          }
          exports.IndicatorItemProvider = IndicatorItemProvider;
        }
      });

      /********************************************************************
      INTERNAL MODULE: ./instances/collection/instances-collection-provider
      ********************************************************************/

      ims.set('./instances/collection/instances-collection-provider', {
        hash: 311816297,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InstancesCollectionProvider = void 0;
          var _api = require("sgs-workflow/api");
          var _utils = require("@bgroup/helpers/utils");
          class InstancesCollectionProvider {
            #api = new _api.Api();
            list = params => {
              const endpoint = params?.where?.historical ? 'instances/historical' : 'instances';
              const query = _utils.Utils.convertObjectToQuery(params);
              return this.#api.get(endpoint + query);
            };
            business = async params => {
              try {
                if (!params || typeof params !== "object") throw new Error("INVALID PARAMS");
                if (!params.instanceId) throw new Error("INVALID PARAMS NOT PROVIDED instanceId");
                if (!params.processId) throw new Error("INVALID PARAMS NOT PROVIDED processId");
                const endpoint = 'instances/business';
                const query = `${endpoint}/${params.instanceId}/${params.processId}`;
                return await this.#api.get(query);
              } catch (error) {
                throw new Error(error.message);
              }
            };
            getCountSegProd = async params => {
              try {
                return await this.#api.get('count-seg-prod');
              } catch (error) {
                throw new Error(error.message);
              }
            };
          }
          exports.InstancesCollectionProvider = InstancesCollectionProvider;
        }
      });

      /***********************************************************
      INTERNAL MODULE: ./instances/collection/instances-collection
      ***********************************************************/

      ims.set('./instances/collection/instances-collection', {
        hash: 2720290200,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InstancesCollection = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _config = require("sgs-workflow/config");
          var _instancesCollectionProvider = require("./instances-collection-provider");
          var _instanceItem = require("../item/instance-item");
          /*bundle*/
          class InstancesCollection extends _entities.Collection {
            constructor() {
              super({
                provider: _instancesCollectionProvider.InstancesCollectionProvider,
                storeName: 'instances',
                db: _config.default.params.application.localDB,
                item: _instanceItem.InstanceItem
              });
            }
            business = async params => {
              try {
                if (!params || typeof params !== "object") throw new Error("INVALID PARAMS");
                if (!params.instanceId) throw new Error("INVALID PARAMS NOT PROVIDED instanceId");
                if (!params.processId) throw new Error("INVALID PARAMS NOT PROVIDED processId");
                return await this.provider.business(params);
              } catch (error) {
                throw new Error(error.message);
              }
            };
            getCountSegProd = async () => {
              try {
                return await this.provider.getCountSegProd();
              } catch (error) {
                throw new Error(error.message);
              }
            };
          }
          exports.InstancesCollection = InstancesCollection;
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./instances/item/instance-item-provider
      *******************************************************/

      ims.set('./instances/item/instance-item-provider', {
        hash: 3715332902,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InstanceItemProvider = void 0;
          var _api = require("sgs-workflow/api");
          class InstanceItemProvider {
            #api = new _api.Api();
            load = ({
              id
            }) => {
              return this.#api.get(`instances/${id}`);
            };
            publish = params => {
              return this.#api.post('instance', {
                body: params
              });
            };
          }
          exports.InstanceItemProvider = InstanceItemProvider;
        }
      });

      /**********************************************
      INTERNAL MODULE: ./instances/item/instance-item
      **********************************************/

      ims.set('./instances/item/instance-item', {
        hash: 2505961431,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InstanceItem = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _config = require("sgs-workflow/config");
          var _instanceItemProvider = require("./instance-item-provider");
          /*bundle*/
          class InstanceItem extends _entities.Item {
            properties = ["id", "name", "description", "processId", "areaId", "workflowStateId", "taskId", "userId", "data", "esgasto", "creatorUserId", "modifierUserId", "timeCreated", "timeUpdated", "expiration", "task", "taskState", "taskStateId", "user", "action", "actionId", "workflowState", "requestNumber", "instanceId", "process", "processId", "creatorUser", "user", "request", "area", "startDate", "endDate", "workflowState", "comments", "assignedUser", "assignedRol", "assignedUsers", "canRefuse", "isReturned"];
            constructor(params = {
              id: undefined
            }) {
              super({
                provider: _instanceItemProvider.InstanceItemProvider,
                storeName: "instances",
                db: _config.default.params.application.localDB,
                ...params
              });
            }
          }
          exports.InstanceItem = InstanceItem;
        }
      });

      /****************************************************************
      INTERNAL MODULE: ./process/collection/process-collection-provider
      ****************************************************************/

      ims.set('./process/collection/process-collection-provider', {
        hash: 1885857126,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProcessCollectionProvider = void 0;
          var _api = require("sgs-workflow/api");
          var _utils = require("@bgroup/helpers/utils");
          class ProcessCollectionProvider {
            #api = new _api.Api();
            list = async params => {
              const query = _utils.Utils.convertObjectToQuery({
                ...params.where,
                start: params.start,
                limit: params.limit
              });
              const response = await this.#api.get('processes' + query);
              return response;
            };
          }
          exports.ProcessCollectionProvider = ProcessCollectionProvider;
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./process/collection/process-collection
      *******************************************************/

      ims.set('./process/collection/process-collection', {
        hash: 2163607200,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProcessCollection = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _config = require("sgs-workflow/config");
          var _processCollectionProvider = require("./process-collection-provider");
          var _processItem = require("../item/process-item");
          /*bundle*/
          class ProcessCollection extends _entities.Collection {
            constructor() {
              super({
                provider: _processCollectionProvider.ProcessCollectionProvider,
                storeName: 'processes',
                db: _config.default.params.application.localDB,
                item: _processItem.ProcessItem
              });
            }
          }
          exports.ProcessCollection = ProcessCollection;
        }
      });

      /****************************************************
      INTERNAL MODULE: ./process/item/process-item-provider
      ****************************************************/

      ims.set('./process/item/process-item-provider', {
        hash: 3163487130,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProcessItemProvider = void 0;
          var _api = require("sgs-workflow/api");
          class ProcessItemProvider {
            #api = new _api.Api();
            load = () => {
              return this.#api.get();
            };
          }
          exports.ProcessItemProvider = ProcessItemProvider;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./process/item/process-item
      *******************************************/

      ims.set('./process/item/process-item', {
        hash: 1851484577,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProcessItem = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _config = require("sgs-workflow/config");
          var _processItemProvider = require("./process-item-provider");
          /*bundle*/
          class ProcessItem extends _entities.Item {
            properties = ['id', 'name', 'description', 'workflowStateId', 'creatorUserId', 'modifierUserId', 'timeCreated', 'timeUpdated'];
            constructor(params = {
              id: undefined
            }) {
              super({
                provider: _processItemProvider.ProcessItemProvider,
                storeName: 'processes',
                db: _config.default.params.application.localDB,
                ...params
              });
            }
          }
          exports.ProcessItem = ProcessItem;
        }
      });

      /**********************************
      INTERNAL MODULE: ./request/requests
      **********************************/

      ims.set('./request/requests', {
        hash: 1654566370,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Requests = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("sgs-workflow/api");
          var _routing = require("@beyond-js/kernel/routing");
          var _wrappers = require("sgs-workflow/wrappers");
          var _config = require("sgs-workflow/config");
          /*bundle*/
          class Requests extends _model.ReactiveModel {
            #api = new _api.Api();
            #items = [];
            get items() {
              return this.#items;
            }
            #limit = _config.default.params.application.tables.rows;
            get limit() {
              return this.#limit;
            }
            #total = 0;
            get total() {
              return this.#total;
            }
            #userId = _wrappers.session.user.id;
            #start = 0;
            #currentPage = 1;
            get currentPage() {
              return this.#currentPage;
            }
            #processId = 0;
            get processId() {
              return this.#processId;
            }
            set processId(value) {
              this.#processId = value;
              this.triggerEvent();
            }
            #selected;
            get selected() {
              return this.#selected;
            }
            set selected(value) {
              this.#selected = value;
              this.triggerEvent();
            }
            loadItems = async (params = {}) => {
              let {
                page
              } = params;
              this.fetching = true;
              this.#start = page ? this.#limit * (parseInt(page) - 1) : 0;
              this.#currentPage = page ? parseInt(page) : this.#currentPage;
              try {
                const response = await this.#api.get(`instances?userId=${_wrappers.session.user.id}&limit=${this.#limit}&start=${this.#start}`);
                if (!response.status) throw 'Error load requests';
                this.#total = response.data.total;
                this.#items = response.data.entries; // TODO: Gabriel CHANGE WHEN ITS SOLVED;
              } catch (error) {
                console.error(error);
              } finally {
                this.fetching = false;
                this.ready = true;
              }
            };
            delete = async () => {
              if (!this.#selected) return;
              this.fetching = true;
              try {
                const response = await this.#api.delete(`instances/${this.#selected.id}`);
                if (!response.status) throw 'Error delete requests';
                await this.loadItems();
              } catch (error) {
                console.error(error);
              } finally {
                this.fetching = false;
              }
            };
            new = async () => {
              this.fetching = true;
              const params = {
                userId: _wrappers.session.user.id,
                processId: this.#processId
              };
              try {
                const response = await this.#api.post(`startWorkflow`, params);
                if (!response.status) throw 'Error startWorkflow requests';
                this.loadItems();
                _routing.routing.pushState(`/request/management/${response.data.id}`);
              } catch (error) {
                console.error(error);
              } finally {
                this.fetching = false;
              }
            };
            search = async params => {
              try {
                this.fetching = true;
                let query = '?';
                if (params.workflowStateId) query += `workflowStateId=${params.workflowStateId}&`;
                if (params.id) query += `id=${params.id}&`;
                if (params.name) query += `name=${params.name}&`;
                if (params.search) query = `name=${params.search}`;
                const response = await this.#api.get(`instances${query}userId=${_wrappers.session.user.id}&limit=${this.#limit}&start=${this.#start}`);
                this.#items = response.data.entries;
              } catch (error) {
                console.error(error);
                return error;
              } finally {
                this.fetching = false;
              }
            };
            changeEntries = async ({
              limit,
              total,
              pages
            }) => {
              this.fetching = true;
              const newPages = Math.ceil(total / limit);
              this.#currentPage = 1;
              this.#limit = limit;
              this.#start = 0;
              const response = await this.#api.get(`instances?userId=${_wrappers.session.user.id}&limit=${this.#limit}&start=${this.#start}`);
              if (!response.status) throw 'Error load requests';
              this.#total = response.data.total;
              this.#items = response.data.entries; // TODO: Gabriel CHANGE WHEN ITS SOLVED;
              this.fetching = false;
              return this.#currentPage;
            };
            reset = () => {
              this.#limit = _config.default.params.application.tables.rows;
              this.#start = 0;
              this.#currentPage = 1;
              this.#items = [];
              this.#selected = undefined;
              this.triggerEvent();
            };
          }
          exports.Requests = Requests;
        }
      });

      /*******************************
      INTERNAL MODULE: ./request/types
      *******************************/

      ims.set('./request/types', {
        hash: 1396791585,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./states/collection/state-collection-provider
      *************************************************************/

      ims.set('./states/collection/state-collection-provider', {
        hash: 2077191472,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StatesCollectionProvider = void 0;
          var _api = require("sgs-workflow/api");
          var _utils = require("@bgroup/helpers/utils");
          class StatesCollectionProvider {
            #api = new _api.Api();
            list = params => {
              const query = _utils.Utils.convertObjectToQuery({
                ...params.where,
                start: params.start,
                limit: params.limit
              });
              return this.#api.get('tasks/states' + query);
            };
          }
          exports.StatesCollectionProvider = StatesCollectionProvider;
        }
      });

      /****************************************************
      INTERNAL MODULE: ./states/collection/state-collection
      ****************************************************/

      ims.set('./states/collection/state-collection', {
        hash: 1178269178,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TasksStatesCollection = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _config = require("sgs-workflow/config");
          var _stateCollectionProvider = require("./state-collection-provider");
          var _stateItem = require("../item/state-item");
          /*bundle*/
          class TasksStatesCollection extends _entities.Collection {
            constructor() {
              super({
                provider: _stateCollectionProvider.StatesCollectionProvider,
                storeName: 'states',
                db: _config.default.params.application.localDB,
                item: _stateItem.TaskStateItem
              });
            }
          }
          exports.TasksStatesCollection = TasksStatesCollection;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./states/item/state-item-provider
      *************************************************/

      ims.set('./states/item/state-item-provider', {
        hash: 2316798053,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TaskStateItemProvider = void 0;
          var _api = require("sgs-workflow/api");
          class TaskStateItemProvider {
            #api = new _api.Api();
            load = () => {
              return this.#api.get();
            };
          }
          exports.TaskStateItemProvider = TaskStateItemProvider;
        }
      });

      /****************************************
      INTERNAL MODULE: ./states/item/state-item
      ****************************************/

      ims.set('./states/item/state-item', {
        hash: 2724891410,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TaskStateItem = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _config = require("sgs-workflow/config");
          var _stateItemProvider = require("./state-item-provider");
          /*bundle*/
          class TaskStateItem extends _entities.Item {
            properties = ['id', 'name', 'statusId', 'creatorUserId', 'modifierUserId', 'timeCreated', 'timeUpdated'];
            constructor(params = {
              id: undefined
            }) {
              super({
                provider: _stateItemProvider.TaskStateItemProvider,
                storeName: 'states',
                db: _config.default.params.application.localDB,
                ...params
              });
            }
          }
          exports.TaskStateItem = TaskStateItem;
        }
      });

      /************************************************************
      INTERNAL MODULE: ./tasks/collection/tasks-collection-provider
      ************************************************************/

      ims.set('./tasks/collection/tasks-collection-provider', {
        hash: 342950448,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TasksCollectionProvider = void 0;
          var _api = require("sgs-workflow/api");
          var _utils = require("@bgroup/helpers/utils");
          class TasksCollectionProvider {
            #api = new _api.Api();
            list = params => {
              const query = _utils.Utils.convertObjectToQuery({
                ...params.where,
                start: params.start,
                limit: params.limit
              });
              return this.#api.get('tasks' + query);
            };
          }
          exports.TasksCollectionProvider = TasksCollectionProvider;
        }
      });

      /***************************************************
      INTERNAL MODULE: ./tasks/collection/tasks-collection
      ***************************************************/

      ims.set('./tasks/collection/tasks-collection', {
        hash: 2275191065,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TasksCollection = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _config = require("sgs-workflow/config");
          var _tasksCollectionProvider = require("./tasks-collection-provider");
          var _taskItem = require("../item/task-item");
          /*bundle*/
          class TasksCollection extends _entities.Collection {
            constructor() {
              super({
                provider: _tasksCollectionProvider.TasksCollectionProvider,
                storeName: 'tasks',
                db: _config.default.params.application.localDB,
                item: _taskItem.TaskItem
              });
            }
          }
          exports.TasksCollection = TasksCollection;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./tasks/item/task-item-provider
      ***********************************************/

      ims.set('./tasks/item/task-item-provider', {
        hash: 1300186217,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TaskItemProvider = void 0;
          var _api = require("sgs-workflow/api");
          ;
          class TaskItemProvider {
            #api = new _api.Api();
            load = () => {
              return this.#api.get();
            };
          }
          exports.TaskItemProvider = TaskItemProvider;
        }
      });

      /**************************************
      INTERNAL MODULE: ./tasks/item/task-item
      **************************************/

      ims.set('./tasks/item/task-item', {
        hash: 741033458,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TaskItem = void 0;
          var _entities = require("@beyond-js/reactive/entities");
          var _config = require("sgs-workflow/config");
          var _taskItemProvider = require("./task-item-provider");
          /*bundle*/
          class TaskItem extends _entities.Item {
            properties = ['id', 'name', 'description', 'statusId', 'creatorUserId', 'modifierUserId', 'timeCreated', 'timeUpdated'];
            constructor(params = {
              id: undefined
            }) {
              super({
                provider: _taskItemProvider.TaskItemProvider,
                storeName: 'tasks',
                db: _config.default.params.application.localDB,
                ...params
              });
            }
          }
          exports.TaskItem = TaskItem;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./areas/collection/areas-collection",
        "from": "AreasCollection",
        "name": "AreasCollection"
      }, {
        "im": "./areas/item/area-item",
        "from": "AreaItem",
        "name": "AreaItem"
      }, {
        "im": "./business/collection/business-collection",
        "from": "BusinessCollection",
        "name": "BusinessCollection"
      }, {
        "im": "./business/item/busines-item",
        "from": "BusinessItem",
        "name": "BusinessItem"
      }, {
        "im": "./comments/collection/comments-collection",
        "from": "CommentsCollection",
        "name": "CommentsCollection"
      }, {
        "im": "./comments/item/comment-item",
        "from": "CommentItem",
        "name": "CommentItem"
      }, {
        "im": "./form/item/form-item",
        "from": "FormItem",
        "name": "FormItem"
      }, {
        "im": "./indicators/collection/indicators-collection",
        "from": "IndicatorsCollection",
        "name": "IndicatorsCollection"
      }, {
        "im": "./indicators/item/indicator-item",
        "from": "IndicatorItem",
        "name": "IndicatorItem"
      }, {
        "im": "./instances/collection/instances-collection",
        "from": "InstancesCollection",
        "name": "InstancesCollection"
      }, {
        "im": "./instances/item/instance-item",
        "from": "InstanceItem",
        "name": "InstanceItem"
      }, {
        "im": "./process/collection/process-collection",
        "from": "ProcessCollection",
        "name": "ProcessCollection"
      }, {
        "im": "./process/item/process-item",
        "from": "ProcessItem",
        "name": "ProcessItem"
      }, {
        "im": "./request/requests",
        "from": "Requests",
        "name": "Requests"
      }, {
        "im": "./states/collection/state-collection",
        "from": "TasksStatesCollection",
        "name": "TasksStatesCollection"
      }, {
        "im": "./states/item/state-item",
        "from": "TaskStateItem",
        "name": "TaskStateItem"
      }, {
        "im": "./tasks/collection/tasks-collection",
        "from": "TasksCollection",
        "name": "TasksCollection"
      }, {
        "im": "./tasks/item/task-item",
        "from": "TaskItem",
        "name": "TaskItem"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AreasCollection') && _export("AreasCollection", AreasCollection = require ? require('./areas/collection/areas-collection').AreasCollection : value);
        (require || prop === 'AreaItem') && _export("AreaItem", AreaItem = require ? require('./areas/item/area-item').AreaItem : value);
        (require || prop === 'BusinessCollection') && _export("BusinessCollection", BusinessCollection = require ? require('./business/collection/business-collection').BusinessCollection : value);
        (require || prop === 'BusinessItem') && _export("BusinessItem", BusinessItem = require ? require('./business/item/busines-item').BusinessItem : value);
        (require || prop === 'CommentsCollection') && _export("CommentsCollection", CommentsCollection = require ? require('./comments/collection/comments-collection').CommentsCollection : value);
        (require || prop === 'CommentItem') && _export("CommentItem", CommentItem = require ? require('./comments/item/comment-item').CommentItem : value);
        (require || prop === 'FormItem') && _export("FormItem", FormItem = require ? require('./form/item/form-item').FormItem : value);
        (require || prop === 'IndicatorsCollection') && _export("IndicatorsCollection", IndicatorsCollection = require ? require('./indicators/collection/indicators-collection').IndicatorsCollection : value);
        (require || prop === 'IndicatorItem') && _export("IndicatorItem", IndicatorItem = require ? require('./indicators/item/indicator-item').IndicatorItem : value);
        (require || prop === 'InstancesCollection') && _export("InstancesCollection", InstancesCollection = require ? require('./instances/collection/instances-collection').InstancesCollection : value);
        (require || prop === 'InstanceItem') && _export("InstanceItem", InstanceItem = require ? require('./instances/item/instance-item').InstanceItem : value);
        (require || prop === 'ProcessCollection') && _export("ProcessCollection", ProcessCollection = require ? require('./process/collection/process-collection').ProcessCollection : value);
        (require || prop === 'ProcessItem') && _export("ProcessItem", ProcessItem = require ? require('./process/item/process-item').ProcessItem : value);
        (require || prop === 'Requests') && _export("Requests", Requests = require ? require('./request/requests').Requests : value);
        (require || prop === 'TasksStatesCollection') && _export("TasksStatesCollection", TasksStatesCollection = require ? require('./states/collection/state-collection').TasksStatesCollection : value);
        (require || prop === 'TaskStateItem') && _export("TaskStateItem", TaskStateItem = require ? require('./states/item/state-item').TaskStateItem : value);
        (require || prop === 'TasksCollection') && _export("TasksCollection", TasksCollection = require ? require('./tasks/collection/tasks-collection').TasksCollection : value);
        (require || prop === 'TaskItem') && _export("TaskItem", TaskItem = require ? require('./tasks/item/task-item').TaskItem : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYXBpIiwicmVxdWlyZSIsIl91dGlscyIsIkFyZWFzQ29sbGVjdGlvblByb3ZpZGVyIiwiYXBpIiwiQXBpIiwibGlzdCIsInBhcmFtcyIsInF1ZXJ5IiwiVXRpbHMiLCJjb252ZXJ0T2JqZWN0VG9RdWVyeSIsIndoZXJlIiwic3RhcnQiLCJsaW1pdCIsImdldCIsImV4cG9ydHMiLCJfZW50aXRpZXMiLCJfY29uZmlnIiwiX2FyZWFzQ29sbGVjdGlvblByb3ZpZGVyIiwiX2FyZWFJdGVtIiwiQXJlYXNDb2xsZWN0aW9uIiwiQ29sbGVjdGlvbiIsImNvbnN0cnVjdG9yIiwicHJvdmlkZXIiLCJzdG9yZU5hbWUiLCJkYiIsImRlZmF1bHQiLCJhcHBsaWNhdGlvbiIsImxvY2FsREIiLCJpdGVtIiwiQXJlYUl0ZW0iLCJBcmVhSXRlbVByb3ZpZGVyIiwibG9hZCIsImlkIiwiX2FyZWFJdGVtUHJvdmlkZXIiLCJJdGVtIiwicHJvcGVydGllcyIsInVuZGVmaW5lZCIsIkJ1c2luZXNzQ29sbGVjdGlvblByb3ZpZGVyIiwiX2J1c2luZXNJdGVtIiwiX2J1c2luZXNzQ29sbGVjdGlvblByb3ZpZGVyIiwiQnVzaW5lc3NDb2xsZWN0aW9uIiwiQnVzaW5lc3NJdGVtIiwiQnVzaW5lc3NJdGVtUHJvdmlkZXIiLCJfYnVzaW5lc0l0ZW1Qcm92aWRlciIsIkNvbW1lbnRzQ29sbGVjdGlvblByb3ZpZGVyIiwiX2NvbW1lbnRzQ29sbGVjdGlvblByb3ZpZGVyIiwiX2NvbW1lbnRJdGVtIiwiQ29tbWVudHNDb2xsZWN0aW9uIiwiQ29tbWVudEl0ZW0iLCJDb21tZW50SXRlbVByb3ZpZGVyIiwicHVibGlzaCIsIm1ldGhvZCIsImlzTmV3IiwiZGVsZXRlIiwiX2NvbW1lbnRJdGVtUHJvdmlkZXIiLCJGb3JtSXRlbVByb3ZpZGVyIiwic2VjdXJpdHlBcGkiLCJzZWN1cml0eVNlcnZlciIsImRhdGEiLCJwcm9jZXNzSWQiLCJ1cmwiLCJpbnN0YW5jZUlkIiwicG9zdCIsImdldFNlbGVjdHMiLCJzZWxlY3QiLCJkZXBlbmRlbmN5SWQiLCJwYXJlbnRJZCIsImdldENoaWxkc1ZhbHVlcyIsIm5hbWUiLCJnZXRJbnN0YW5jZUZvcm0iLCJ2YWxpZGF0ZSIsImdldERlcml2YXRpb25Vc2VycyIsIl9mb3JtSXRlbVByb3ZpZGVyIiwiRm9ybUl0ZW0iLCJyZXNwb25zZSIsImVycm9yIiwic2V0Iiwic3RhdHVzIiwiSW5kaWNhdG9yc0NvbGxlY3Rpb25Qcm92aWRlciIsIl9pbmRpY2F0b3JJdGVtIiwiX2luZGljYXRvcnNDb2xsZWN0aW9uUHJvdmlkZXIiLCJJbmRpY2F0b3JzQ29sbGVjdGlvbiIsIkluZGljYXRvckl0ZW0iLCJfaW5kaWNhdG9yc0l0ZW1Qcm92aWRlciIsIkluZGljYXRvckl0ZW1Qcm92aWRlciIsIkluc3RhbmNlc0NvbGxlY3Rpb25Qcm92aWRlciIsImVuZHBvaW50IiwiaGlzdG9yaWNhbCIsImJ1c2luZXNzIiwiRXJyb3IiLCJtZXNzYWdlIiwiZ2V0Q291bnRTZWdQcm9kIiwiX2luc3RhbmNlc0NvbGxlY3Rpb25Qcm92aWRlciIsIl9pbnN0YW5jZUl0ZW0iLCJJbnN0YW5jZXNDb2xsZWN0aW9uIiwiSW5zdGFuY2VJdGVtIiwiSW5zdGFuY2VJdGVtUHJvdmlkZXIiLCJib2R5IiwiX2luc3RhbmNlSXRlbVByb3ZpZGVyIiwiUHJvY2Vzc0NvbGxlY3Rpb25Qcm92aWRlciIsIl9wcm9jZXNzQ29sbGVjdGlvblByb3ZpZGVyIiwiX3Byb2Nlc3NJdGVtIiwiUHJvY2Vzc0NvbGxlY3Rpb24iLCJQcm9jZXNzSXRlbSIsIlByb2Nlc3NJdGVtUHJvdmlkZXIiLCJfcHJvY2Vzc0l0ZW1Qcm92aWRlciIsIl9tb2RlbCIsIl9yb3V0aW5nIiwiX3dyYXBwZXJzIiwiUmVxdWVzdHMiLCJSZWFjdGl2ZU1vZGVsIiwiaXRlbXMiLCJ0YWJsZXMiLCJyb3dzIiwidG90YWwiLCJ1c2VySWQiLCJzZXNzaW9uIiwidXNlciIsImN1cnJlbnRQYWdlIiwidmFsdWUiLCJ0cmlnZ2VyRXZlbnQiLCJzZWxlY3RlZCIsImxvYWRJdGVtcyIsInBhZ2UiLCJmZXRjaGluZyIsInBhcnNlSW50IiwiZW50cmllcyIsImNvbnNvbGUiLCJyZWFkeSIsIm5ldyIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJzZWFyY2giLCJ3b3JrZmxvd1N0YXRlSWQiLCJjaGFuZ2VFbnRyaWVzIiwicGFnZXMiLCJuZXdQYWdlcyIsIk1hdGgiLCJjZWlsIiwicmVzZXQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIlN0YXRlc0NvbGxlY3Rpb25Qcm92aWRlciIsIl9zdGF0ZUNvbGxlY3Rpb25Qcm92aWRlciIsIl9zdGF0ZUl0ZW0iLCJUYXNrc1N0YXRlc0NvbGxlY3Rpb24iLCJUYXNrU3RhdGVJdGVtIiwiVGFza1N0YXRlSXRlbVByb3ZpZGVyIiwiX3N0YXRlSXRlbVByb3ZpZGVyIiwiVGFza3NDb2xsZWN0aW9uUHJvdmlkZXIiLCJfdGFza3NDb2xsZWN0aW9uUHJvdmlkZXIiLCJfdGFza0l0ZW0iLCJUYXNrc0NvbGxlY3Rpb24iLCJUYXNrSXRlbSIsIlRhc2tJdGVtUHJvdmlkZXIiLCJfdGFza0l0ZW1Qcm92aWRlciJdLCJzb3VyY2VzIjpbIi9hcmVhcy9jb2xsZWN0aW9uL2FyZWFzLWNvbGxlY3Rpb24tcHJvdmlkZXIudHMiLCIvYXJlYXMvY29sbGVjdGlvbi9hcmVhcy1jb2xsZWN0aW9uLnRzIiwiL2FyZWFzL2l0ZW0vYXJlYS1pdGVtLXByb3ZpZGVyLnRzIiwiL2FyZWFzL2l0ZW0vYXJlYS1pdGVtLnRzIiwiL2J1c2luZXNzL2NvbGxlY3Rpb24vYnVzaW5lc3MtY29sbGVjdGlvbi1wcm92aWRlci50cyIsIi9idXNpbmVzcy9jb2xsZWN0aW9uL2J1c2luZXNzLWNvbGxlY3Rpb24udHMiLCIvYnVzaW5lc3MvaXRlbS9idXNpbmVzLWl0ZW0tcHJvdmlkZXIudHMiLCIvYnVzaW5lc3MvaXRlbS9idXNpbmVzLWl0ZW0udHMiLCIvY29tbWVudHMvY29sbGVjdGlvbi9jb21tZW50cy1jb2xsZWN0aW9uLXByb3ZpZGVyLnRzIiwiL2NvbW1lbnRzL2NvbGxlY3Rpb24vY29tbWVudHMtY29sbGVjdGlvbi50cyIsIi9jb21tZW50cy9pdGVtL2NvbW1lbnQtaXRlbS1wcm92aWRlci50cyIsIi9jb21tZW50cy9pdGVtL2NvbW1lbnQtaXRlbS50cyIsIi9mb3JtL2l0ZW0vZm9ybS1pdGVtLXByb3ZpZGVyLnRzIiwiL2Zvcm0vaXRlbS9mb3JtLWl0ZW0udHMiLCIvaW5kaWNhdG9ycy9jb2xsZWN0aW9uL2luZGljYXRvcnMtY29sbGVjdGlvbi1wcm92aWRlci50cyIsIi9pbmRpY2F0b3JzL2NvbGxlY3Rpb24vaW5kaWNhdG9ycy1jb2xsZWN0aW9uLnRzIiwiL2luZGljYXRvcnMvaXRlbS9pbmRpY2F0b3ItaXRlbS50cyIsIi9pbmRpY2F0b3JzL2l0ZW0vaW5kaWNhdG9ycy1pdGVtLXByb3ZpZGVyLnRzIiwiL2luc3RhbmNlcy9jb2xsZWN0aW9uL2luc3RhbmNlcy1jb2xsZWN0aW9uLXByb3ZpZGVyLnRzIiwiL2luc3RhbmNlcy9jb2xsZWN0aW9uL2luc3RhbmNlcy1jb2xsZWN0aW9uLnRzIiwiL2luc3RhbmNlcy9pdGVtL2luc3RhbmNlLWl0ZW0tcHJvdmlkZXIudHMiLCIvaW5zdGFuY2VzL2l0ZW0vaW5zdGFuY2UtaXRlbS50cyIsIi9wcm9jZXNzL2NvbGxlY3Rpb24vcHJvY2Vzcy1jb2xsZWN0aW9uLXByb3ZpZGVyLnRzIiwiL3Byb2Nlc3MvY29sbGVjdGlvbi9wcm9jZXNzLWNvbGxlY3Rpb24udHMiLCIvcHJvY2Vzcy9pdGVtL3Byb2Nlc3MtaXRlbS1wcm92aWRlci50cyIsIi9wcm9jZXNzL2l0ZW0vcHJvY2Vzcy1pdGVtLnRzIiwiL3JlcXVlc3QvcmVxdWVzdHMudHMiLCIvdHlwZXMudHMiLCIvc3RhdGVzL2NvbGxlY3Rpb24vc3RhdGUtY29sbGVjdGlvbi1wcm92aWRlci50cyIsIi9zdGF0ZXMvY29sbGVjdGlvbi9zdGF0ZS1jb2xsZWN0aW9uLnRzIiwiL3N0YXRlcy9pdGVtL3N0YXRlLWl0ZW0tcHJvdmlkZXIudHMiLCIvc3RhdGVzL2l0ZW0vc3RhdGUtaXRlbS50cyIsIi90YXNrcy9jb2xsZWN0aW9uL3Rhc2tzLWNvbGxlY3Rpb24tcHJvdmlkZXIudHMiLCIvdGFza3MvY29sbGVjdGlvbi90YXNrcy1jb2xsZWN0aW9uLnRzIiwiL3Rhc2tzL2l0ZW0vdGFzay1pdGVtLXByb3ZpZGVyLnRzIiwiL3Rhc2tzL2l0ZW0vdGFzay1pdGVtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxJQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDTSxNQUFPRSx1QkFBdUI7WUFDbkMsQ0FBQUMsR0FBSSxHQUFHLElBQUlKLElBQUEsQ0FBQUssR0FBRyxFQUFFO1lBRWhCQyxJQUFJLEdBQUlDLE1BSVAsSUFBSTtjQUNKLE1BQU1DLEtBQUssR0FBR04sTUFBQSxDQUFBTyxLQUFLLENBQUNDLG9CQUFvQixDQUFDO2dCQUFFLEdBQUdILE1BQU0sQ0FBQ0ksS0FBSztnQkFBRUMsS0FBSyxFQUFFTCxNQUFNLENBQUNLLEtBQUs7Z0JBQUVDLEtBQUssRUFBRU4sTUFBTSxDQUFDTTtjQUFLLENBQUUsQ0FBQztjQUN2RyxPQUFPLElBQUksQ0FBQyxDQUFBVCxHQUFJLENBQUNVLEdBQUcsQ0FBQyxPQUFPLEdBQUdOLEtBQUssQ0FBQztZQUN0QyxDQUFDOztVQUNETyxPQUFBLENBQUFaLHVCQUFBLEdBQUFBLHVCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2JELElBQUFh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VUFDQSxJQUFBdUosU0FBQSxHQUFBdkosT0FBQTtVQUVPO1VBQVUsTUFBT3dKLGVBQWdCLFNBQVF6SSxTQUFBLENBQUFLLFVBQVU7WUFDekRDLFlBQUE7Y0FDQyxLQUFLLENBQUM7Z0JBQ0xDLFFBQVEsRUFBRWdJLHdCQUFBLENBQUFELHVCQUF1QjtnQkFDakM5SCxTQUFTLEVBQUUsT0FBTztnQkFDbEJDLEVBQUUsRUFBRVIsT0FBQSxDQUFBUyxPQUFNLENBQUNuQixNQUFNLENBQUNvQixXQUFXLENBQUNDLE9BQU87Z0JBQ3JDQyxJQUFJLEVBQUUySCxTQUFBLENBQUFFO2VBQ04sQ0FBQztZQUNIOztVQUNBM0ksT0FBQSxDQUFBMEksZUFBQSxHQUFBQSxlQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2RELElBQUF6SixJQUFBLEdBQUFDLE9BQUE7VUFBdUM7VUFJakMsTUFBTzBKLGdCQUFnQjtZQUM1QixDQUFBdkosR0FBSSxHQUFRLElBQUlKLElBQUEsQ0FBQUssR0FBRyxFQUFFO1lBRXJCMkIsSUFBSSxHQUFHQSxDQUFBLEtBQUs7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBNUIsR0FBSSxDQUFDVSxHQUFHLEVBQUU7WUFDdkIsQ0FBQzs7VUFDREMsT0FBQSxDQUFBNEksZ0JBQUEsR0FBQUEsZ0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVkQsSUFBQTNJLFNBQUEsR0FBQWYsT0FBQTtVQUNBLElBQUFnQixPQUFBLEdBQUFoQixPQUFBO1VBQ0EsSUFBQTJKLGlCQUFBLEdBQUEzSixPQUFBO1VBRU87VUFBVSxNQUFPeUosUUFBUyxTQUFRMUksU0FBQSxDQUFBbUIsSUFBYztZQUM1Q0MsVUFBVSxHQUFHLENBQ3RCLElBQUksRUFDSixNQUFNLEVBQ04sYUFBYSxFQUNiLFVBQVUsRUFDVixlQUFlLEVBQ2YsZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDYixhQUFhLENBQ2I7WUFFRGQsWUFBWWYsTUFBQSxHQUFxQztjQUFFMEIsRUFBRSxFQUFFSTtZQUFTLENBQUU7Y0FDakUsS0FBSyxDQUFDO2dCQUNMZCxRQUFRLEVBQUVxSSxpQkFBQSxDQUFBRCxnQkFBZ0I7Z0JBQzFCbkksU0FBUyxFQUFFLE9BQU87Z0JBQ2xCQyxFQUFFLEVBQUVSLE9BQUEsQ0FBQVMsT0FBTSxDQUFDbkIsTUFBTSxDQUFDb0IsV0FBVyxDQUFDQyxPQUFPO2dCQUNyQyxHQUFHckI7ZUFDSCxDQUFDO1lBQ0g7O1VBQ0FRLE9BQUEsQ0FBQTJJLFFBQUEsR0FBQUEsUUFBQSIsImlnbm9yZUxpc3QiOltdfQ==