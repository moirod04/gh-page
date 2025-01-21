System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/reactive@1.1.14/settings","@beyond-js/events@0.0.7/events","@beyond-js/reactive@1.1.14/model","dexie@3.2.5","@beyond-js/kernel@0.1.9/core","@beyond-js/reactive@1.1.14/database","uuid@9.0.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/reactive","1.1.14"],["@beyond-js/events","0.0.7"],["dexie","3.2.5"],["uuid","9.0.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/reactive@1.1.14/settings', dep), dep => dependencies.set('@beyond-js/events@0.0.7/events', dep), dep => dependencies.set('@beyond-js/reactive@1.1.14/model', dep), dep => dependencies.set('dexie@3.2.5', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/reactive@1.1.14/database', dep), dep => dependencies.set('uuid@9.0.1', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
"use strict";

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/@beyond-js/reactive/entities.1.1.14.js
var entities_1_1_14_exports = {};
__export(entities_1_1_14_exports, {
  Book: () => Book,
  Collection: () => Collection,
  CollectionLocalProvider: () => CollectionLocalProvider,
  CollectionProvider: () => CollectionProvider,
  IConfig: () => IConfig,
  IItem: () => IItem,
  IResponseAdapter: () => IResponseAdapter,
  Item: () => Item,
  ItemProvider: () => ItemProvider,
  LocalProvider: () => LocalProvider,
  RegistryFactory: () => RegistryFactory,
  StoreRecords: () => StoreRecords,
  TCustomAdapter: () => TCustomAdapter,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(entities_1_1_14_exports);

// node_modules/@beyond-js/reactive/entities/entities.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/reactive@1.1.14/settings"), 0);
var dependency_2 = __toESM(require("@beyond-js/reactive@1.1.14/model"), 0);
var dependency_3 = __toESM(require("@beyond-js/reactive@1.1.14/database"), 0);
var dependency_4 = __toESM(require("@beyond-js/kernel@0.1.9/core"), 0);
var dependency_5 = __toESM(require("dexie@3.2.5"), 0);
var dependency_6 = __toESM(require("@beyond-js/events@0.0.7/events"), 0);
var dependency_7 = __toESM(require("uuid@9.0.1"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/reactive@1.1.13/entities"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/reactive/settings", dependency_1], ["@beyond-js/reactive/model", dependency_2], ["@beyond-js/reactive/database", dependency_3], ["@beyond-js/kernel/core", dependency_4], ["dexie", dependency_5], ["@beyond-js/events/events", dependency_6], ["uuid", dependency_7]]);
var ims = /* @__PURE__ */new Map();
ims.set("./adapter/default", {
  hash: 351600073,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DefaultAdapter = void 0;
    class DefaultAdapter {
      toClient(data) {
        return Promise.resolve(data);
      }
      fromRemote(data) {
        return Promise.resolve(data);
      }
      fromRemoteList(data) {
        return Promise.resolve(data);
      }
    }
    exports.DefaultAdapter = DefaultAdapter;
  }
});
ims.set("./adapter/index", {
  hash: 1352406609,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ResponseAdapter = void 0;
    var _settings = require2("@beyond-js/reactive/settings");
    var _default = require2("./default");
    var _legacy = require2("./legacy");
    class ResponseAdapter {
      static get(parent, adapters) {
        adapters = adapters ? adapters : _settings.ReactiveConfig.adapter;
        const Adapter = adapters === "default" ? _default.DefaultAdapter : _legacy.LegacyAdapter;
        return new Adapter(parent);
      }
    }
    exports.ResponseAdapter = ResponseAdapter;
  }
});
ims.set("./adapter/interface", {
  hash: 2454168762,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./adapter/legacy", {
  hash: 961578630,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.LegacyAdapter = void 0;
    class LegacyAdapter {
      #parent;
      constructor(parent) {
        this.#parent = parent;
      }
      toClient({
        error,
        data
      } = {}) {
        if (error) {
          return {
            status: false,
            error: {
              message: error
            }
          };
        }
        return {
          status: true,
          data
        };
      }
      fromRemote(response) {
        const {
          status,
          data,
          error,
          message
        } = response;
        if (!status) {
          if (message) throw message;
          throw typeof error === "string" ? error : "ERROR_DATA_QUERY";
        }
        return data;
      }
      fromRemoteList(data) {
        return Promise.resolve(data);
      }
    }
    exports.LegacyAdapter = LegacyAdapter;
  }
});
ims.set("./cache/index", {
  hash: 4043341357,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CacheManager = void 0;
    var _model = require2("@beyond-js/reactive/model");
    class CacheManager extends _model.ReactiveModel {}
    exports.CacheManager = CacheManager;
  }
});
ims.set("./collection/index", {
  hash: 3926772970,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Collection = void 0;
    var _model = require2("@beyond-js/reactive/model");
    var _localProvider = require2("./local-provider");
    var _publish = require2("./publish");
    var _load = require2("./load");
    var _adapter = require2("../adapter");
    class Collection2 extends _model.ReactiveModel {
      db;
      item;
      #items = [];
      localdb = true;
      #elements = /* @__PURE__ */new Map();
      get elements() {
        return this.#elements;
      }
      get items() {
        return this.#items;
      }
      get isOnline() {
        return !this.localProvider ? true : this.localProvider.isOnline;
      }
      set items(value) {
        if (!Array.isArray(value)) {
          return;
        }
        this.#items = value;
        this.triggerEvent();
      }
      counters = {};
      total = 0;
      next;
      #localProvider;
      get localProvider() {
        return this.#localProvider;
      }
      #saveManager;
      #loadManager;
      #provider;
      get provider() {
        return this.#provider;
      }
      sortBy = "id";
      sortDirection = "asc";
      #responseAdapter;
      get responseAdapter() {
        return this.#responseAdapter;
      }
      #initialSpecs;
      constructor(specs) {
        super({
          properties: ["total", "next"]
        });
        const {
          provider,
          storeName,
          db,
          localdb,
          item
        } = specs;
        this.#initialSpecs = specs;
        if (storeName) this.storeName = storeName;
        if (db) this.db = db;
        if (localdb) this.localdb = localdb;
        if (item) this.item = item;
        if (provider) {
          if (typeof provider !== "function") {
            throw new Error("Provider must be a class object");
          }
          this.#provider = new provider();
        }
        this.reactiveProps(["next"]);
        this.init();
      }
      init() {
        const getProperty = property => {
          return this[property];
        };
        const setProperty = (property, value) => this[property] = value;
        const bridge = {
          get: getProperty,
          set: setProperty
        };
        this.#responseAdapter = _adapter.ResponseAdapter.get(this, this.#initialSpecs?.adapter);
        this.#localProvider = new _localProvider.CollectionLocalProvider(this, bridge);
        this.#saveManager = new _publish.CollectionSaveManager(this, bridge);
        this.#loadManager = new _load.CollectionLoadManager({
          parent: this,
          bridge,
          localdb: this.localdb
        });
        this.#localProvider.on("items.changed", this.#listenItems);
        this.localProvider.init();
      }
      #listenItems = async () => {
        if (!this.localdb) return;
        this.#items = await this.#loadManager.processEntries(this.#localProvider.items);
        this.trigger("change");
      };
      setOffline = value => this.localProvider.setOffline(value);
      setItems(values) {
        this.#items = values;
      }
      async store() {
        await this.#localProvider.init();
        return this.#localProvider.store;
      }
      async set(data) {
        const {
          items
        } = data;
        delete data.item;
        await super.set(data);
        if (!items) return;
        items.forEach(item => {
          if (item.id) this.#elements.set(item.id, item);
        });
      }
      async delete(ids) {
        try {
          if (this.#localProvider) await this.#localProvider.softDelete(ids);
          if (this.provider) {
            await this.provider.deleteItems(ids);
          }
        } catch (e) {
          console.error(e);
        }
      }
      load(args) {
        return this.#loadManager.load(args);
      }
      localLoad(args) {
        return this.#loadManager.localLoad(args);
      }
      filter = args => this.#loadManager.filter(args);
      save = (args, init) => this.#saveManager.save(args, init);
      sync = args => this.#saveManager.sync(args);
      publish = args => this.#saveManager.publish(args);
      toSync = () => this.#saveManager.toSync();
      async setEntries(entries) {
        await this.save(entries, true);
        const items = await this.#loadManager.processEntries(entries, true);
        items.forEach(item => this.#elements.set(item.id, item));
        this.#items = items;
        this.trigger("change");
        return items;
      }
    }
    exports.Collection = Collection2;
  }
});
ims.set("./collection/interfaces/children-constructor-props", {
  hash: 251458602,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./collection/interfaces/collection", {
  hash: 1873156359,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./collection/load", {
  hash: 3079767897,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CollectionLoadManager = void 0;
    var _factory = require2("../registry/factory");
    class CollectionLoadManager {
      filter;
      #localProvider;
      #provider;
      #loaded = /* @__PURE__ */new Map();
      #parentBridge;
      #parent;
      #registry;
      #adapter;
      #localdb;
      get parent() {
        return this.#parent;
      }
      remoteData = [];
      constructor({
        parent,
        bridge,
        localdb
      }) {
        this.#parent = parent;
        this.#parentBridge = bridge;
        this.#localdb = localdb;
        this.#adapter = this.#parent.responseAdapter;
        this.init();
      }
      init() {
        this.#localProvider = this.#parentBridge.get("localProvider");
        this.#provider = this.#parentBridge.get("provider");
        this.#registry = _factory.RegistryFactory.get(this.#parentBridge.get("storeName"));
      }
      #localLoad = async params => {
        if (!this.#localProvider) return;
        const localData = (await this.#localProvider.load(params)) ?? {
          data: []
        };
        const newItems = await this.processEntries(localData.data);
        let items = params.update === true ? this.parent.items.concat(newItems) : newItems;
        const properties = {
          localLoaded: true,
          fetching: false,
          total: localData.total ?? 0,
          next: !!localData.next,
          items
        };
        if (localData.next) properties.next = localData.next;
        this.#parent.loaded = true;
        this.parent.set(properties);
        return this.#adapter.toClient({
          data: items
        });
      };
      #page = 1;
      #remoteElements = [];
      localLoad = async (params = {}) => {
        try {
          return this.#localLoad(params);
        } catch (e) {
          console.error(e);
        }
      };
      load = async (params = {}) => {
        try {
          this.#parent.fetching = true;
          const {
            next
          } = this.parent;
          let {
            start = 0,
            update
          } = params;
          params.limit = params.limit ?? 30;
          start = update === true && next ? next : start;
          if (update) {
            this.#page++;
            params.start = start;
          }
          if (this.#parentBridge.get("localdb")) {
            const localResponse = await this.#localLoad(params);
            if (!this.#parent.isOnline || !this.#provider) return localResponse;
          }
          const {
            properties,
            items
          } = await this.#remoteLoad(params);
          this.parent.set(properties);
          this.parent.triggerEvent();
          return this.#adapter.toClient({
            data: items
          });
        } catch (exc) {
          this.parent.triggerEvent();
          console.error(exc);
          return this.#adapter.toClient({
            error: exc
          });
        } finally {
          this.#parent.fetching = false;
          this.#parent.fetched = true;
          this.#parent.landed = true;
        }
      };
      #remoteLoad = async params => {
        const response = await this.#provider.list(params);
        const data = this.#adapter.fromRemote(response);
        const items = await this.processRemoteEntries(data);
        this.remoteData = response;
        this.#remoteElements = params.update === true ? this.#remoteElements.concat(items) : items;
        const properties = {
          items: this.#remoteElements,
          next: data.next,
          loaded: true,
          fetching: false,
          total: data.total || 0
        };
        return {
          properties,
          items
        };
      };
      async processRemoteEntries(data) {
        if (!data.entries && !data.items) {
          throw new Error("The list method must return an object with an entries property");
        }
        const elements = data.items ? data.items : data.entries;
        if (data.deletedEntries) {
          this.#localProvider.softDelete(data.deletedEntries);
        }
        if (this.#localdb) await this.#localProvider.save(elements);
        return this.processEntries(elements);
      }
      processEntries = async (entries, updateLocalItems = false) => {
        const promises = [];
        const items = entries.map(record => {
          if (this.#loaded.has(record.id)) {
            const item2 = this.#loaded.get(record.id);
            promises.push(item2.isReady);
            return item2;
          }
          const specs = {
            id: record.id,
            ...record
          };
          if (updateLocalItems) specs.properties = record;
          const item = new this.parent.item(specs);
          promises.push(item.isReady);
          this.#loaded.set(record.id, item);
          return item;
        });
        await Promise.all(promises);
        items.forEach((item, index) => {
          item.set(entries[index], updateLocalItems);
        });
        return items;
      };
      remoteLoad = async params => {
        const response = await this.#provider.load(params);
        if (!response.status) throw "ERROR_DATA_QUERY";
        return response.data;
      };
    }
    exports.CollectionLoadManager = CollectionLoadManager;
  }
});
ims.set("./collection/local-provider/index", {
  hash: 1513158061,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CollectionLocalProvider = void 0;
    var _model = require2("@beyond-js/reactive/model");
    var _core = require2("@beyond-js/kernel/core");
    var _database = require2("@beyond-js/reactive/database");
    var _factory = require2("../../registry/factory");
    var _saver = require2("./saver");
    var _loader = require2("./loader");
    class CollectionLocalProvider2 extends _model.ReactiveModel {
      #isOnline = globalThis.navigator.onLine;
      #offline;
      #database;
      #storeName;
      #databaseName;
      #loadManager;
      #exists = false;
      #found = false;
      #db;
      #registryFactory;
      #parent;
      #saveManager;
      #localdb;
      #store;
      get store() {
        return this.#store;
      }
      #apply = true;
      get apply() {
        return this.#apply;
      }
      #active;
      get active() {
        return this.#active;
      }
      #items = [];
      get items() {
        return this.#items;
      }
      #setItems = items => {
        this.#items = items;
      };
      get isOnline() {
        return this.#isOnline && !this.#offline && !localStorage.getItem("reactive.offline");
      }
      constructor(parent, bridge) {
        super();
        const {
          db,
          storeName
        } = parent;
        this.#parent = parent;
        this.localdb = bridge.get("localdb");
        if (!this.localdb) {
          this.#apply = false;
          return;
        }
        if (db) this.#registryFactory = _factory.RegistryFactory.get(db);
        this.#databaseName = db;
        this.#storeName = storeName;
        globalThis.addEventListener("online", this.handleConnection);
        globalThis.addEventListener("offline", this.handleConnection);
        this.#loadManager = new _loader.LocalProviderLoader(this, {
          store: this.#store,
          setItems: this.#setItems
        });
      }
      setOffline(value) {
        this.#offline = value;
        this.triggerEvent();
      }
      #promiseInit;
      init = async () => {
        try {
          if (!this.#apply) {
            this.ready = true;
            return;
          }
          if (this.#promiseInit) return this.#promiseInit;
          this.#promiseInit = new _core.PendingPromise();
          if (!this.#databaseName || !this.#storeName) {
            this.#active = false;
            this.#promiseInit.resolve();
            return;
          }
          const database = await _database.DBManager.get(this.#databaseName);
          this.#database = database;
          this.#store = database.db[this.#storeName];
          if (!this.#store) {
            throw new Error(`The store ${this.#storeName} does not exists in the database ${this.#databaseName}`);
          }
          this.#saveManager = new _saver.LocalProviderSaver(this, {
            registryFactory: this.#registryFactory,
            storeName: this.#storeName,
            database: this.#database
          });
          this.ready = true;
          this.#promiseInit.resolve();
        } catch (e) {
          console.error(e);
        }
      };
      handleConnection = () => this.triggerEvent();
      async upsert(data, originalData) {
        if (!this.#apply) return;
        return this.#database.db.transaction("rw", this.store, async () => {
          const instanceIdToIdMap = /* @__PURE__ */new Map();
          data.forEach(item => {
            instanceIdToIdMap.set(item.instanceId, item.id);
          });
          await this.store.bulkPut(data);
        });
      }
      async softDelete(ids) {
        if (!this.#apply) return;
        if (!Array.isArray(ids)) {
          console.error("Expected an array of items for soft deletion");
          return {
            status: false,
            data: []
          };
        }
        try {
          const records = await this.store.bulkGet(ids);
          const existingRecords = records.filter(record => record !== void 0);
          if (!existingRecords.length) return;
          const itemsToUpdate = existingRecords.map(record => ({
            ...record,
            isDeleted: 1
          }));
          await this.#store.bulkPut(itemsToUpdate);
          return true;
        } catch (error) {
          console.error("Error occurred while performing a soft delete:", error);
          return {
            status: false,
            error: error.message
          };
        }
      }
      save = data => this.#saveManager.save(data);
      saveAll = (items, storeName) => this.#saveManager.saveAll(items, storeName);
      load = params => this.#loadManager.load(params);
    }
    exports.CollectionLocalProvider = CollectionLocalProvider2;
  }
});
ims.set("./collection/local-provider/loader", {
  hash: 588579742,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.LocalProviderLoader = void 0;
    var _core = require2("@beyond-js/kernel/core");
    var _dexie = require2("dexie");
    class LocalProviderLoader {
      #parent;
      #promiseLoad;
      #params;
      #listItems = /* @__PURE__ */new Map();
      #total;
      #page = 0;
      #ids = /* @__PURE__ */new Set();
      #conditions = ["or"];
      #setItems;
      #customWhere;
      #defaultWhere = store => store.orderBy("id");
      #currentLimit;
      #currentOffset;
      constructor(parent, parentPrivateProps) {
        this.#parent = parent;
        this.#setItems = parentPrivateProps.setItems;
      }
      #quantity = 0;
      async load(params) {
        if (!this.#parent.apply) return;
        const isSame = JSON.stringify(this.#params) === JSON.stringify(params);
        if (isSame || this.#promiseLoad) return this.#promiseLoad;
        this.#promiseLoad = new _core.PendingPromise();
        await this.#parent.init();
        return this.#performLoad(params);
      }
      async #performLoad(params) {
        try {
          if (!this.#total) this.#total = await this.#parent.store.count();
          let limit = params.limit ?? 30;
          const totalPages = Math.ceil(this.#total / limit);
          if (totalPages < this.#page) {
            this.#resolvePromiseLoad();
            return;
          }
          const live = (0, _dexie.liveQuery)(this.where(params, limit));
          this.#page++;
          return this.#subscribeToQuery(live, params, totalPages);
        } catch (error) {
          console.error("Error al cargar los elementos del store:", error);
          return {
            status: false,
            data: []
          };
        }
      }
      where = (params, limit) => {
        return async () => {
          let store = this.#parent.store;
          const {
            sortBy
          } = params;
          const offset = (this.#page - 1) * limit;
          let specs = {
            ...params
          };
          if (specs.hasOwnProperty("where")) {
            specs = {
              ...specs,
              ...specs.where
            };
            delete specs.where;
          }
          const indexes = store.schema.indexes.map(index => index.name);
          Object.keys(specs).forEach(key => {
            !indexes.includes(key) && delete specs[key];
          });
          const collection = Object.keys(specs).length === 0 ? store : store.where(specs);
          let query = collection;
          this.#currentLimit = limit;
          this.#currentOffset = offset;
          if (sortBy) await query.sortBy(sortBy);
          query = query.filter(i => i.isDeleted !== 1);
          const values = await query.offset(offset).limit(limit).toArray();
          return values;
        };
      };
      customFilter = callback => {
        this.#customWhere = callback;
        return this.#parent;
      };
      async #subscribeToQuery(liveQuery, params, totalPages) {
        let currentPage;
        liveQuery.subscribe({
          next: async items => {
            const response = await this.#handleQueryResponse(items, params, totalPages, currentPage);
            this.#resolvePromiseLoad(response);
          },
          error: err => {
            console.error(err);
            this.#resolvePromiseLoad({
              status: false,
              data: []
            });
          }
        });
        return this.#promiseLoad;
      }
      async #handleQueryResponse(items, params, totalPages, currentPage) {
        let sameQuery;
        this.#quantity++;
        if (params.sortBy) items.sort((a, b) => a[params.sortBy] - b[params.sortBy]);
        if (!globalThis.data) globalThis.data = [];
        if (currentPage === this.#page) sameQuery = true;else currentPage = this.#page;
        if (sameQuery && items.length === this.#parent.items.length) return;
        const currentMap = /* @__PURE__ */new Set();
        items.forEach(item => {
          this.#listItems.set(item.id, item);
          currentMap.add(item.id);
        });
        this.#cleanupItems(currentMap);
        this.#setItems([...this.#listItems.values()]);
        items.forEach(item => this.#ids.add(item.id));
        this.#parent.trigger("items.changed");
        this.#parent.trigger("change");
        return {
          status: true,
          data: items,
          total: this.#total,
          next: this.#page + 1 >= totalPages ? void 0 : true
        };
      }
      #cleanupItems(currentMap) {
        [...this.#listItems.keys()].forEach(id => {
          if (!currentMap.has(id)) {
            this.#listItems.delete(id);
          }
        });
      }
      #resolvePromiseLoad(response = {}) {
        if (!this.#promiseLoad) return;
        this.#promiseLoad.resolve(response);
        this.#promiseLoad = null;
      }
    }
    exports.LocalProviderLoader = LocalProviderLoader;
  }
});
ims.set("./collection/local-provider/saver", {
  hash: 3271791775,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.LocalProviderSaver = void 0;
    var _registry = require2("../../registry");
    class LocalProviderSaver {
      #batches = 200;
      #parent;
      #registryFactory;
      #storeName;
      #database;
      constructor(parent, parentBridge) {
        this.#parent = parent;
        this.#registryFactory = parentBridge.registryFactory;
        this.#storeName = parentBridge.storeName;
        this.#database = parentBridge.database;
      }
      async save(data) {
        const process = (entries, offline = 0) => {
          return entries.map(item => {
            const record = item.getProperties && typeof item.getProperties === "function" ? item.getProperties() : item;
            const toSave = {
              ...record,
              offline,
              instanceId: item.instanceId
            };
            return toSave;
          });
        };
        data = process(data, this.#parent.isOnline ? 0 : 1);
        if (!this.#parent.apply) return;
        await this.#registryFactory.init();
        await this.saveAll(data, this.#storeName);
      }
      async saveAll(items, storeName) {
        if (!this.#parent.apply) return;
        const elements = items.map(item => {
          const registry = new _registry.Registry(storeName);
          if (item.deleted) {
            registry.isDeleted = true;
          }
          registry.setValues(item);
          return registry;
        });
        const store = this.#database.db[storeName];
        const promises = [];
        const chunks = [];
        while (elements.length > 0) {
          const batch = elements.splice(0, this.#batches);
          const data = batch.map(item => item.getValues());
          chunks.push(data);
          promises.push(store.bulkPut(data));
        }
        try {
          const results = await Promise.allSettled(promises);
          const mappedFn = (result, index) => ({
            ...result,
            index,
            data: chunks[index]
          });
          const failed = results.map(mappedFn).filter(result => result.status === "rejected");
          if (!failed.length) return {
            status: true
          };else {
            return {
              status: false,
              failed
            };
          }
        } catch (e) {
          return {
            status: false,
            failed: e
          };
        }
      }
    }
    exports.LocalProviderSaver = LocalProviderSaver;
  }
});
ims.set("./collection/publish", {
  hash: 3613830967,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CollectionSaveManager = void 0;
    class CollectionSaveManager {
      #parent;
      #bridge;
      #localProvider;
      #provider;
      #localdb;
      MAX_RETRIES = 3;
      CHUNK_SIZE = 200;
      #adapter;
      constructor(parent, bridge) {
        this.#parent = parent;
        this.#bridge = bridge;
        this.#adapter = this.#parent.responseAdapter;
        this.init();
      }
      init() {
        this.#localdb = this.#bridge.get("localdb");
        if (this.#localdb) {
          this.#localProvider = this.#bridge.get("localProvider");
        } else {
          console.warn("The collection doesnt use LocalDB");
        }
        this.#provider = this.#bridge.get("provider");
      }
      save = async (data = [], init = false) => {
        if (!this.#localdb) return true;
        await this.#localProvider.init();
        await this.#localProvider.save(data);
      };
      publish = async (data = []) => {
        try {
          await this.save(data);
          if (!this.#provider || this.#bridge.get("isOffline")) return;
          const response = await this.#provider.bulkSave(data);
          if (!response.status) throw response.error;
          return this.#adapter.toClient({
            status: true
          });
        } catch (error) {
          console.error(error);
          return this.#adapter.toClient({
            error
          });
        }
      };
      sendChunk = async chunk => {
        const response = await this.#provider.bulkSave(chunk);
        if (response.status) {
          const data = response.data.entries.map(item => ({
            ...item,
            offline: 0,
            instanceId: void 0
          }));
          await this.#localProvider.upsert(data, chunk);
          return {
            success: true,
            chunk,
            response
          };
        }
        return {
          success: false,
          chunk,
          response
        };
      };
      splitDataIntoChunks = data => {
        const chunks = [];
        for (let i = 0; i < data.length; i += this.CHUNK_SIZE) {
          chunks.push(data.slice(i, i + this.CHUNK_SIZE));
        }
        return chunks;
      };
      sync = async data => {
        await this.#localProvider.init();
        if (!data) data = await this.#parent.localProvider.store.where("offline").equals(1).toArray();
        const chunks = this.splitDataIntoChunks(data);
        const failedChunks = [];
        const successChunks = [];
        for (const [, chunk] of chunks.entries()) {
          const result = await this.sendChunk(chunk);
          if (!result.success) {
            failedChunks.push(result);
          } else successChunks.push(result);
        }
        this.#bridge.set("items", []);
        await this.#parent.load();
        if (failedChunks.length) {
          const message = failedChunks.length === chunks.length ? "FAILED_SYNC" : "INCOMPLETE_SYNC";
          return this.#adapter.toClient({
            data: {
              failed: failedChunks,
              success: successChunks,
              error: message
            }
          });
        }
        return this.#adapter.toClient({
          data: successChunks
        });
      };
      toSync = async () => {
        try {
          await this.#localProvider.init();
          return this.#localProvider.store.where("offline").equals(1).toArray();
        } catch (e) {
          console.error(e);
        }
      };
    }
    exports.CollectionSaveManager = CollectionSaveManager;
  }
});
ims.set("./example/collection", {
  hash: 3039560133,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./example/index", {
  hash: 1295999388,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Book = void 0;
    var _index = require2("../item/index");
    class UserProvider {}
    class Book2 extends _index.Item {
      properties = ["id", "title", "author", "year"];
      constructor({
        id = void 0
      } = {}) {
        super({
          id,
          storeName: "book",
          db: "test"
        });
      }
    }
    exports.Book = Book2;
  }
});
ims.set("./interfaces/provider", {
  hash: 3176939875,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./item/index", {
  hash: 3295468663,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Item = void 0;
    var _model = require2("@beyond-js/reactive/model");
    var _localProvider = require2("./local-provider");
    var _save = require2("./save");
    var _load = require2("./load");
    var _core = require2("@beyond-js/kernel/core");
    var _adapter = require2("../adapter");
    class Item2 extends _model.ReactiveModel {
      id;
      localdb;
      #provider;
      storeName;
      db;
      localFields = [];
      #localData;
      #skeleton = [];
      localProvider;
      unique = [];
      #saveManager;
      get skeleton() {
        return this.#skeleton;
      }
      __get(property) {
        return this[property];
      }
      get provider() {
        return this.#provider;
      }
      #isDeleted = 0;
      get isDeleted() {
        return !!this.#isDeleted;
      }
      get store() {
        return this.localProvider.store;
      }
      get isOnline() {
        return this.localProvider.isOnline && !localStorage.getItem("reactive.offline");
      }
      get __instanceId() {
        return this.localProvider.__instanceId;
      }
      get isReady() {
        if (typeof this.checkReady !== "function") {
          console.warn("is not a function", this.checkReady, this.constructor.name);
          return;
        }
        return this.checkReady();
      }
      #loadManager;
      #objectReady = false;
      #promiseReady;
      #initPromise;
      #config;
      #responseAdapter;
      get responseAdapter() {
        return this.#responseAdapter;
      }
      constructor(config = {}) {
        super((() => config?.properties ? {
          properties: config.properties
        } : {})());
        const {
          db,
          storeName,
          localdb
        } = config;
        this.#config = config;
        this.#responseAdapter = _adapter.ResponseAdapter.get(this, this.#config?.adapter);
        if (db) this.db = db;
        if (storeName) this.storeName = storeName;
        this.localdb = localdb || !!(db && storeName);
        if (config.provider) {
          if (typeof config.provider !== "function") {
            throw new Error("Provider must be an function");
          }
          this.#provider = new config.provider(this);
        }
        this.#start(config);
        this.on("object.loaded", this.checkReady);
      }
      #start(config) {
        this.reactiveProps(["found", "landed"]);
        this.save = this.save.bind(this);
        this.checkReady = this.checkReady.bind(this);
        const getProperty = property => this.__get(property);
        const setProperty = (property, value) => this[property] = value;
        const bridge = {
          get: getProperty,
          set: setProperty
        };
        const spcs = {
          parent: this,
          bridge,
          localdb: this.localdb
        };
        this.localProvider = new _localProvider.LocalProvider(spcs);
        this.#saveManager = new _save.ItemSaveManager(spcs);
        this.#loadManager = new _load.ItemLoadManager(spcs);
        this.init(config);
      }
      async initialise() {
        this.init(this.#config);
      }
      checkReady() {
        if (this.ready) {
          return this.ready;
        }
        if (this.#promiseReady) return this.#promiseReady;
        this.#promiseReady = new _core.PendingPromise();
        if (this.objectReady) this.#promiseReady.resolve(this.#objectReady);
        const onReady = () => {
          this.#objectReady = true;
          this.#promiseReady.resolve(this.#objectReady);
        };
        this.on("object.loaded", onReady);
        return this.#promiseReady;
      }
      async init(config) {
        try {
          let id;
          if (this.#initPromise) return this.#initPromise;
          this.#initPromise = new _core.PendingPromise();
          if (config.id) id = config.id;
          this.id = config.id;
          if (this.localdb) {
            await this.localProvider.init(id);
            this.set(this.localProvider.registry.values);
          }
          if (this.#skeleton && this.#skeleton.length > 0) {
            this.properties = this.#skeleton;
          }
          if (config.properties) this.set(config.properties, true);
          this.ready = true;
          this.#initPromise.resolve(true);
          this.trigger("object.loaded");
        } catch (e) {
          console.error("error initializing", e);
        }
      }
      setOffline = value => this.localProvider.setOffline(value);
      async set(data, init = false) {
        if (typeof data !== "object") console.trace(data);
        if (!init) {
          await this.isReady;
        }
        if (init && this.localdb) {
          this.#localData = new Map(Object.entries(data));
          this.localProvider.save(data);
        }
        this.properties?.forEach(property => {
          if (typeof property === "object") {
            if (data.hasOwnProperty(property.name)) {}
            return;
          }
          if (data.hasOwnProperty(property)) this[property] = data[property];
        });
        this.triggerEvent();
      }
      getValues() {
        const values = {};
        const toIterate = this.skeleton.length ? this.skeleton : this.properties;
        toIterate.forEach(field => {
          if (this.hasOwnProperty(field)) values[field] = this[field];
        });
        return values;
      }
      getPropertyNames() {
        return this.properties;
      }
      save(data) {
        return this.#saveManager.save(data);
      }
      sync() {
        return this.#saveManager.sync();
      }
      forceSync() {
        return this.#saveManager.forceSync();
      }
      publish(data) {
        return this.#saveManager.publish(data);
      }
      load(params) {
        return this.#loadManager.load(params);
      }
      async delete() {
        try {
          this.#isDeleted = 1;
          if (this.localProvider) await this.localProvider.delete();
          if (this.provider) await this.provider.delete(this.id);
          this.triggerEvent();
          return true;
        } catch (e) {
          console.error("error", e);
        }
      }
    }
    exports.Item = Item2;
  }
});
ims.set("./item/interfaces/config", {
  hash: 306116134,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./item/interfaces/item", {
  hash: 983423751,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./item/load", {
  hash: 4141046561,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ItemLoadManager = void 0;
    class ItemLoadManager {
      #parent;
      #localProvider;
      #provider;
      #getProperty;
      #bridge;
      #adapter;
      #localdb;
      ready;
      constructor({
        parent,
        bridge,
        localdb
      }) {
        this.#parent = parent;
        this.#getProperty = bridge.get;
        this.#bridge = bridge;
        this.#localdb = localdb;
        this.#adapter = this.#parent.responseAdapter;
        this.init();
      }
      init = () => {
        this.#localProvider = this.#getProperty("localProvider");
        this.#provider = this.#getProperty("provider");
        this.ready = true;
      };
      load = async params => {
        try {
          await this.#getProperty("checkReady")();
          if (!params) {
            params = {
              id: this.#parent.id
            };
          }
          const localdb = await this.#getProperty("localdb");
          const localProvider = this.#getProperty("localProvider");
          if (!params && this.#parent.id) params = {
            id: this.#parent.id
          };
          if (localdb && localProvider) {
            const localData = await localProvider.load(params);
            if (localData?.status) {
              this.#parent.set(localData.data, true);
              if (localData.data.__instanceId) this.#localProvider.__instanceId = localData.data.__instanceId;
              if (!this.#localProvider.__instanceId) this.#localProvider.__instanceId = this.#localProvider.registry.__instanceId;
            }
          }
          if (localProvider && !localProvider.isOnline) return {
            status: true
          };
          if (!this.#provider) return;
          const remoteData = await this.remoteLoad(params);
          if (!remoteData) {
            this.#parent.found = false;
            return this.#adapter.toClient();
          }
          this.#parent.found = true;
          this.#parent.fetched = true;
          this.#parent.set(remoteData);
          if (localdb) {
            let same = true;
            this.#parent.landed = true;
            Object.keys(remoteData).forEach(key => {
              let original = localProvider.registry.values;
              if (original[key] !== remoteData[key]) same = false;
            });
            if (!same) {
              const id = !isNaN(this.#parent.id) ? parseInt(this.#parent.id) : this.#parent.id;
              await this.#localProvider.save({
                ...this.#parent.getProperties(),
                ...remoteData,
                id,
                __instanceId: this.#localProvider.__instanceId
              });
            }
          }
          return this.#adapter.toClient({
            data: remoteData
          });
        } catch (exc) {
          throw exc;
        } finally {
          this.#parent.fetching = false;
        }
      };
      remoteLoad = async params => {
        if (!this.#parent.isOnline) return;
        let loadMethod = this.#provider.data ? this.#provider.data.bind(this.#provider) : this.#provider.load.bind(this.#provider);
        if (typeof loadMethod !== "function") {
          console.error("The provider object is not defined correctly. It must have a data method");
          return;
        }
        const response = await loadMethod(params);
        return this.#adapter.fromRemote(response);
      };
    }
    exports.ItemLoadManager = ItemLoadManager;
  }
});
ims.set("./item/local-provider", {
  hash: 2040082601,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.LocalProvider = void 0;
    var _model = require2("@beyond-js/reactive/model");
    var _database = require2("@beyond-js/reactive/database");
    var _factory = require2("../registry/factory");
    class LocalProvider2 extends _model.ReactiveModel {
      #isOnline = globalThis.navigator.onLine;
      #store;
      #offline;
      #isNew = false;
      #database;
      #storeName;
      #databaseName;
      #originalData;
      #exists = false;
      get store() {
        return this.#store;
      }
      __instanceId;
      get originalData() {
        return this.#originalData;
      }
      #db;
      get isOnline() {
        return this.#isOnline && !this.#offline && !localStorage.getItem("reactive.offline");
      }
      #parent;
      #getProperty;
      #factoryRegistry;
      #registry;
      #localdb;
      get localdb() {
        return this.#parent.localdb;
      }
      #bridge;
      get registry() {
        return this.#registry;
      }
      #apply;
      constructor({
        parent,
        bridge,
        localdb
      }) {
        super();
        this.#getProperty = bridge.get;
        const {
          db,
          storeName
        } = parent;
        this.__id = Math.floor(Math.random() * (1e5 - 1e3 + 1)) + 1e3;
        this.#parent = parent;
        this.#apply = db && storeName;
        this.#databaseName = db;
        this.#storeName = storeName;
        this.#bridge = bridge;
        this.#localdb = localdb;
        this.#factoryRegistry = _factory.RegistryFactory.get(db, this.#localdb);
        this.load = this.load.bind(this);
      }
      setOffline(value) {
        this.#offline = value;
        this.triggerEvent();
      }
      init = async (id = void 0) => {
        try {
          if (this.#localdb) {
            const database = await _database.DBManager.get(this.#databaseName);
            this.#database = database;
            this.#store = database.db[this.#storeName];
          }
          this.#isNew = !!id;
          return this.#getRegistry(id);
        } catch (e) {
          console.error(e);
        }
      };
      deepCompare(obj1, obj2) {
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);
        if (keys1.length !== keys2.length) {
          return false;
        }
        for (let key of keys1) {
          const val1 = obj1[key];
          const val2 = obj2[key];
          const areObjects = this.isObject(val1) && this.isObject(val2);
          if (areObjects && !this.deepCompare(val1, val2) || !areObjects && val1 !== val2) {
            return false;
          }
        }
        return true;
      }
      isObject(object) {
        return object != null && typeof object === "object";
      }
      #isUnpublished(data) {
        const properties = Object.keys(data);
        const toCompare = {
          ...this.#registry.values
        };
        const areEqual = this.deepCompare(toCompare, data);
        return !areEqual;
      }
      async load(params = {}) {
        try {
          let id = params.id;
          id = id ?? this.registry.values?.id;
          if (!id) throw "ID IS REQUIRED";
          await this.#getRegistry(id);
          this.#parent.localLoaded = true;
          this.#parent.set(this.#registry.values);
          return {
            status: true,
            data: this.#registry.values
          };
        } catch (e) {
          console.error(e);
          return e;
        }
      }
      #getRegistry = async id => {
        let registry = await this.#factoryRegistry.get(this.#storeName, id);
        let data = {
          id
        };
        let found = !!registry;
        if (found) {
          this.#parent.set(registry.values);
          found = true;
          this.#registry = registry;
          this.#registry.on("change", this.#listenRegistry.bind(this));
          this.#isNew = this.#registry?.values?.isNew ? true : false;
          return;
        }
        if (!registry && this.localdb && id) {
          const store = this.#store;
          const localData = await store.get(id);
          if (localData) data = localData;
          found = true;
        }
        if (found) {
          this.#parent.found = found;
          this.#parent.loaded = true;
        }
        registry = this.#factoryRegistry.create(this.#storeName, data);
        this.#registry = registry;
        this.#registry.on("change", this.#listenRegistry.bind(this));
        this.#isNew = this.#registry?.values?.isNew ? true : false;
        return this.#registry.values;
      };
      #listenRegistry() {
        this.#parent.set(this.#registry.values);
      }
      async save(data) {
        try {
          if (!this.#isUnpublished(data)) return;
          data.offline = this.isOnline ? 0 : 1;
          data.isNew = !this.#isNew ? 0 : 1;
          const duplicated = await this.validateUniqueFields(data);
          if (duplicated.length) return {
            error: "duplicated",
            fields: duplicated
          };
          await this.#update(data);
          return this;
        } catch (e) {
          console.error("error saving", e.message);
        }
      }
      async validateUniqueFields(data) {
        if (!this.localdb) return [];
        if (!this.#getProperty("unique").length) return [];
        const checkPromises = this.#getProperty("unique").map(field => this.#store.where(field).equals(data[field]).count().then(count => {
          if (count) {
            return field;
          }
          return null;
        }));
        const duplicateFields = (await Promise.all(checkPromises)).filter(field => field !== null);
        return duplicateFields;
      }
      delete = async () => {
        if (!this.#database) return;
        const response = await this.deleteRegistry(this.#registry.values.id);
        return response;
      };
      deleteRegistry = async identifier => {
        const store = this.#database.db[this.#storeName];
        await store.delete(identifier);
        this.triggerEvent();
        return true;
      };
      isPlainObject(obj) {
        if (typeof obj !== "object" || obj === null) return false;
        for (const key in obj) {
          if (typeof obj[key] === "function") {
            return false;
          }
        }
        return true;
      }
      async #delete(data) {
        const store = this.#database.db[this.#storeName];
        await store.delete(data.id);
        return true;
      }
      async #update(data) {
        const updated = this.#registry.setValues(data);
        if (!updated) return;
        const store = this.#database.db[this.#storeName];
        const plain = this.isPlainObject(data);
        if (!plain) {
          console.warn("Data needs to be a plain object to be saved", data);
          throw new Error("Data needs to be a plain object to be saved");
        }
        await store.put({
          ...this.#registry.values,
          ...data
        });
        this.triggerEvent();
        return true;
      }
    }
    exports.LocalProvider = LocalProvider2;
  }
});
ims.set("./item/save", {
  hash: 4254661392,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ItemSaveManager = void 0;
    class ItemSaveManager {
      #parent;
      #getProperty;
      #bridge;
      #provider;
      #localProvider;
      #localdb;
      #adapter;
      constructor({
        parent,
        bridge,
        localdb
      }) {
        this.#parent = parent;
        this.#getProperty = bridge.get;
        this.#bridge = bridge;
        this.#localdb = localdb;
        this.#adapter = this.#parent.responseAdapter;
        this.init();
      }
      init() {
        this.#parent.localUpdate = this.localUpdate;
        this.#localProvider = this.#getProperty("localProvider");
        this.#provider = this.#getProperty("provider");
      }
      save = async data => {
        try {
          await this.#getProperty("checkReady")();
          if (data) {
            await this.#parent.set(data);
          }
          if (!this.#parent.isUnpublished) return;
          const properties = {
            ...data,
            ...this.#parent.getProperties()
          };
          properties.isNew = this.#localProvider.registry.isNew;
          properties.__instanceId = this.#localProvider.registry.__instanceId;
          let remoteResponse;
          if (this.#parent.isOnline && this.#provider) {
            const response = await this.#publish(properties);
            if (!response.status) throw response;
            this.#localProvider.registry.setValues(response.data);
            properties.id = response?.data?.id;
            remoteResponse = response;
            this.#localProvider.registry.isNew = false;
          }
          if (this.#localProvider) {
            await this.#localProvider.save(properties);
          }
          this.#parent.triggerEvent();
          return this.#adapter.toClient({
            data: remoteResponse
          });
        } catch (e) {
          return e;
        }
      };
      publish = this.save;
      #publish = async properties => {
        try {
          if (!this.#provider || !this.#bridge.get("isOnline")) return;
          let props = {
            ...properties
          };
          this.#parent.localFields.forEach(field => {
            delete props[field];
          });
          const response = await this.#provider.publish(props);
          const data = this.#adapter.fromRemote(response);
          await this.#parent.set(data);
          if (this.#localProvider) {
            this.#localProvider.save(data);
            if (props.id === this.#localProvider.registry.__instanceId) {
              this.#localProvider.deleteRegistry(props.id);
            }
            this.#localProvider.trigger("change");
          }
          return this.#adapter.toClient({
            data
          });
        } catch (error) {
          console.error("ERROR PUBLISHING", error);
          return this.#adapter.toClient({
            error
          });
        }
      };
      sync = () => {
        const provider = this.#getProperty("localProvider");
        if (!provider.registry.values.offline) {
          console.warn("registry already synced");
          return;
        }
        this.#publish(provider.registry.values);
      };
      forceSync() {
        const provider = this.#getProperty("localProvider");
        const props = {
          ...provider.registry.values
        };
        this.#parent.localFields.forEach(field => {
          delete props[field];
        });
        this.#provider.publish(props);
      }
      localUpdate = async (data = void 0) => {
        try {
          await this.#getProperty("checkReady")();
          if (data) {
            this.#parent.set(data);
          }
          const properties = this.#parent.getProperties();
          if (this.#localProvider) {
            await this.#localProvider.save(properties);
          }
          this.#parent.triggerEvent();
          return this.#adapter.toClient();
        } catch (e) {
          console.error("error updating locally", e);
        }
      };
    }
    exports.ItemSaveManager = ItemSaveManager;
  }
});
ims.set("./providers/collection", {
  hash: 1203865910,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CollectionProvider = void 0;
    class CollectionProvider2 {
      list(specs) {}
      publish(props) {}
      load(specs) {}
    }
    exports.CollectionProvider = CollectionProvider2;
  }
});
ims.set("./providers/item", {
  hash: 632847434,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ItemProvider = void 0;
    class ItemProvider2 {
      delete(id) {}
      publish(props) {}
      load(specs) {}
    }
    exports.ItemProvider = ItemProvider2;
  }
});
ims.set("./registry/factory", {
  hash: 2312446295,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.RegistryFactory = void 0;
    var _model = require2("@beyond-js/reactive/model");
    var _index = require2("./index");
    var _core = require2("@beyond-js/kernel/core");
    class RegistryFactory2 extends _model.ReactiveModel {
      #stores = /* @__PURE__ */new Map();
      #dbName;
      #localdb;
      constructor(dbName, localdb = true) {
        super();
        this.#dbName = dbName;
        this.#localdb = localdb;
        this.init();
      }
      #promiseReady;
      async init() {
        if (this.ready) return true;
        if (this.#promiseReady) return this.#promiseReady;
        this.#promiseReady = new _core.PendingPromise();
        this.#promiseReady.resolve();
        this.#promiseReady = void 0;
        this.ready = true;
      }
      registerList(storeName, items) {
        const registries = items.map(item => {
          if (this.hasItem(storeName, item.id)) {
            return this.getItem(storeName, item.id);
          }
          return this.create(storeName, item);
        });
      }
      hasItem(storeName, id) {
        return this.#stores.has(storeName) && this.#stores.get(storeName).has(id);
      }
      getItem(storeName, id) {
        if (!this.hasItem(storeName, id)) throw new Error(`Item ${id} does not exists in store ${storeName}`);
        return this.#stores.get(storeName).get(id);
      }
      #getStore(store) {
        if (!this.#stores.has(store)) this.#stores.set(store, /* @__PURE__ */new Map());
        return this.#stores.get(store);
      }
      create(storeName, data) {
        const registry = new _index.Registry(storeName, data);
        registry.setValues(data);
        this.#getStore(storeName).set(registry.values.id, registry);
        return registry;
      }
      async get(storeName, id = void 0) {
        if (!this.#stores.has(storeName)) this.#stores.set(storeName, /* @__PURE__ */new Map());
        if (this.#stores.has(storeName) && this.#stores.get(storeName).has(id)) {
          const registry = this.#stores.get(storeName).get(id);
          return registry;
        }
      }
      async has(storeName, id) {
        if (this.#stores.has(storeName) && this.#stores.get(storeName).has(id)) return true;
      }
      static #dbs = /* @__PURE__ */new Map();
      static get(dbName, localdb) {
        if (this.#dbs.has(dbName)) return this.#dbs.get(dbName);
        const db = new RegistryFactory2(dbName, localdb);
        this.#dbs.set(dbName, db);
        return db;
      }
    }
    exports.RegistryFactory = RegistryFactory2;
  }
});
ims.set("./registry/index", {
  hash: 738374833,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Registry = void 0;
    var _model = require2("@beyond-js/reactive/model");
    var _uuid = require2("uuid");
    class Registry extends _model.ReactiveModel {
      #values = {};
      get values() {
        return this.#values;
      }
      #id;
      #store;
      #isDeleted;
      #isNew;
      __instanceId;
      get isNew() {
        return this.#isNew;
      }
      set isNew(value) {
        this.#isNew = value;
        this.triggerEvent();
      }
      #keyId;
      get isDeleted() {
        return this.#isDeleted;
      }
      set isDeleted(value) {
        if (value === this.#isDeleted) return;
        this.#isDeleted = value;
        this.triggerEvent();
      }
      constructor(store, data = {
        id: void 0
      }) {
        super();
        const {
          id
        } = data;
        this.#store = store;
        this.#isNew = id === void 0;
        this.#id = id;
        this.__instanceId = data.__instanceId ?? (0, _uuid.v4)();
        if (!id) this.#id = this.__instanceId;
        if (this.#id) this.#values.id = this.#id;
      }
      setValues = data => {
        if (!data) {
          return;
        }
        const props = Object.keys(data);
        let updated = false;
        if (!data.id) data.id = this.#id;
        const newValues = {
          ...this.#values
        };
        props.forEach(property => {
          if (data[property] === newValues[property]) return;
          newValues[property] = data[property];
          updated = true;
        });
        if (data.__instanceId) this.__instanceId = data.instanceId;
        newValues.isDeleleted = this.isDeleted === 1;
        this.#values = newValues;
        this.triggerEvent();
        return updated;
      };
      getValues() {
        const values = {
          ...this.#values
        };
        if (this.__instanceId) values.__instanceId = this.__instanceId;
        return values;
      }
    }
    exports.Registry = Registry;
  }
});
ims.set("./registry/store", {
  hash: 51750468,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.StoreRecords = void 0;
    var _model = require2("@beyond-js/reactive/model");
    class StoreRecords2 extends _model.ReactiveModel {}
    exports.StoreRecords = StoreRecords2;
    const storeFactory = new StoreRecords2();
  }
});
__pkg.exports.descriptor = [{
  "im": "./adapter/index",
  "from": "TCustomAdapter",
  "name": "TCustomAdapter"
}, {
  "im": "./adapter/index",
  "from": "IConfig",
  "name": "IConfig"
}, {
  "im": "./adapter/interface",
  "from": "IResponseAdapter",
  "name": "IResponseAdapter"
}, {
  "im": "./collection/index",
  "from": "Collection",
  "name": "Collection"
}, {
  "im": "./collection/local-provider/index",
  "from": "CollectionLocalProvider",
  "name": "CollectionLocalProvider"
}, {
  "im": "./example/index",
  "from": "Book",
  "name": "Book"
}, {
  "im": "./item/index",
  "from": "Item",
  "name": "Item"
}, {
  "im": "./item/interfaces/item",
  "from": "IItem",
  "name": "IItem"
}, {
  "im": "./item/local-provider",
  "from": "LocalProvider",
  "name": "LocalProvider"
}, {
  "im": "./providers/collection",
  "from": "CollectionProvider",
  "name": "CollectionProvider"
}, {
  "im": "./providers/item",
  "from": "ItemProvider",
  "name": "ItemProvider"
}, {
  "im": "./registry/factory",
  "from": "RegistryFactory",
  "name": "RegistryFactory"
}, {
  "im": "./registry/store",
  "from": "StoreRecords",
  "name": "StoreRecords"
}];
var TCustomAdapter, IConfig, IResponseAdapter, Collection, CollectionLocalProvider, Book, Item, IItem, LocalProvider, CollectionProvider, ItemProvider, RegistryFactory, StoreRecords;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "TCustomAdapter") && (TCustomAdapter = require2 ? require2("./adapter/index").TCustomAdapter : value);
  (require2 || prop === "IConfig") && (IConfig = require2 ? require2("./adapter/index").IConfig : value);
  (require2 || prop === "IResponseAdapter") && (IResponseAdapter = require2 ? require2("./adapter/interface").IResponseAdapter : value);
  (require2 || prop === "Collection") && (Collection = require2 ? require2("./collection/index").Collection : value);
  (require2 || prop === "CollectionLocalProvider") && (CollectionLocalProvider = require2 ? require2("./collection/local-provider/index").CollectionLocalProvider : value);
  (require2 || prop === "Book") && (Book = require2 ? require2("./example/index").Book : value);
  (require2 || prop === "Item") && (Item = require2 ? require2("./item/index").Item : value);
  (require2 || prop === "IItem") && (IItem = require2 ? require2("./item/interfaces/item").IItem : value);
  (require2 || prop === "LocalProvider") && (LocalProvider = require2 ? require2("./item/local-provider").LocalProvider : value);
  (require2 || prop === "CollectionProvider") && (CollectionProvider = require2 ? require2("./providers/collection").CollectionProvider : value);
  (require2 || prop === "ItemProvider") && (ItemProvider = require2 ? require2("./providers/item").ItemProvider : value);
  (require2 || prop === "RegistryFactory") && (RegistryFactory = require2 ? require2("./registry/factory").RegistryFactory : value);
  (require2 || prop === "StoreRecords") && (StoreRecords = require2 ? require2("./registry/store").StoreRecords : value);
};
var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;
  this.off = (event, listener) => void 0;
}();
__pkg.initialise(ims);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0aXZlL2VudGl0aWVzLjEuMS4xNC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0aXZlL2VudGl0aWVzL19fc291cmNlcy9lbnRpdGllcy9hZGFwdGVyL2RlZmF1bHQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9lbnRpdGllcy9fX3NvdXJjZXMvZW50aXRpZXMvYWRhcHRlci9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0aXZlL2VudGl0aWVzL19fc291cmNlcy9lbnRpdGllcy9pbnRlcmZhY2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9lbnRpdGllcy9fX3NvdXJjZXMvZW50aXRpZXMvYWRhcHRlci9sZWdhY3kudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9lbnRpdGllcy9fX3NvdXJjZXMvZW50aXRpZXMvY2FjaGUvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9lbnRpdGllcy9fX3NvdXJjZXMvZW50aXRpZXMvY29sbGVjdGlvbi9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0aXZlL2VudGl0aWVzL19fc291cmNlcy9lbnRpdGllcy9jaGlsZHJlbi1jb25zdHJ1Y3Rvci1wcm9wcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0aXZlL2VudGl0aWVzL19fc291cmNlcy9lbnRpdGllcy9jb2xsZWN0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3RpdmUvZW50aXRpZXMvX19zb3VyY2VzL2VudGl0aWVzL2NvbGxlY3Rpb24vbG9hZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0aXZlL2VudGl0aWVzL19fc291cmNlcy9lbnRpdGllcy9jb2xsZWN0aW9uL2xvY2FsLXByb3ZpZGVyL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3RpdmUvZW50aXRpZXMvX19zb3VyY2VzL2VudGl0aWVzL2NvbGxlY3Rpb24vbG9jYWwtcHJvdmlkZXIvbG9hZGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3RpdmUvZW50aXRpZXMvX19zb3VyY2VzL2VudGl0aWVzL2NvbGxlY3Rpb24vbG9jYWwtcHJvdmlkZXIvc2F2ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9lbnRpdGllcy9fX3NvdXJjZXMvZW50aXRpZXMvY29sbGVjdGlvbi9wdWJsaXNoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3RpdmUvZW50aXRpZXMvX19zb3VyY2VzL2VudGl0aWVzL2V4YW1wbGUvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9lbnRpdGllcy9fX3NvdXJjZXMvZW50aXRpZXMvcHJvdmlkZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9lbnRpdGllcy9fX3NvdXJjZXMvZW50aXRpZXMvaXRlbS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0aXZlL2VudGl0aWVzL19fc291cmNlcy9lbnRpdGllcy9jb25maWcudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9lbnRpdGllcy9fX3NvdXJjZXMvZW50aXRpZXMvaXRlbS50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0aXZlL2VudGl0aWVzL19fc291cmNlcy9lbnRpdGllcy9pdGVtL2xvYWQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9lbnRpdGllcy9fX3NvdXJjZXMvZW50aXRpZXMvaXRlbS9sb2NhbC1wcm92aWRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0aXZlL2VudGl0aWVzL19fc291cmNlcy9lbnRpdGllcy9pdGVtL3NhdmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9lbnRpdGllcy9fX3NvdXJjZXMvZW50aXRpZXMvcHJvdmlkZXJzL2NvbGxlY3Rpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9lbnRpdGllcy9fX3NvdXJjZXMvZW50aXRpZXMvcHJvdmlkZXJzL2l0ZW0udHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9lbnRpdGllcy9fX3NvdXJjZXMvZW50aXRpZXMvcmVnaXN0cnkvZmFjdG9yeS50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0aXZlL2VudGl0aWVzL19fc291cmNlcy9lbnRpdGllcy9yZWdpc3RyeS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0aXZlL2VudGl0aWVzL19fc291cmNlcy9lbnRpdGllcy9yZWdpc3RyeS9zdG9yZS50cyJdLCJuYW1lcyI6WyJlbnRpdGllc18xXzFfMTRfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQm9vayIsIkNvbGxlY3Rpb24iLCJDb2xsZWN0aW9uTG9jYWxQcm92aWRlciIsIkNvbGxlY3Rpb25Qcm92aWRlciIsIklDb25maWciLCJJSXRlbSIsIklSZXNwb25zZUFkYXB0ZXIiLCJJdGVtIiwiSXRlbVByb3ZpZGVyIiwiTG9jYWxQcm92aWRlciIsIlJlZ2lzdHJ5RmFjdG9yeSIsIlN0b3JlUmVjb3JkcyIsIlRDdXN0b21BZGFwdGVyIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIkRlZmF1bHRBZGFwdGVyIiwidG9DbGllbnQiLCJkYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJmcm9tUmVtb3RlIiwiZnJvbVJlbW90ZUxpc3QiLCJfc2V0dGluZ3MiLCJyZXF1aXJlMiIsIl9kZWZhdWx0IiwiX2xlZ2FjeSIsIlJlc3BvbnNlQWRhcHRlciIsImdldCIsInBhcmVudCIsImFkYXB0ZXJzIiwiUmVhY3RpdmVDb25maWciLCJhZGFwdGVyIiwiQWRhcHRlciIsIkxlZ2FjeUFkYXB0ZXIiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiY29uc3RydWN0b3IiLCJlcnJvciIsInN0YXR1cyIsIm1lc3NhZ2UiLCJyZXNwb25zZSIsIl9tb2RlbCIsIkNhY2hlTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJfbG9jYWxQcm92aWRlciIsIl9wdWJsaXNoIiwiX2xvYWQiLCJfYWRhcHRlciIsIkNvbGxlY3Rpb24yIiwiZGIiLCJpdGVtIiwiaXRlbXMiLCJsb2NhbGRiIiwiZWxlbWVudHMiLCJNYXAiLCJpc09ubGluZSIsImxvY2FsUHJvdmlkZXIiLCJBcnJheSIsImlzQXJyYXkiLCJ0cmlnZ2VyRXZlbnQiLCJjb3VudGVycyIsInRvdGFsIiwibmV4dCIsInNhdmVNYW5hZ2VyIiwibG9hZE1hbmFnZXIiLCJwcm92aWRlciIsInNvcnRCeSIsInNvcnREaXJlY3Rpb24iLCJyZXNwb25zZUFkYXB0ZXIiLCJpbml0aWFsU3BlY3MiLCJzcGVjcyIsInByb3BlcnRpZXMiLCJzdG9yZU5hbWUiLCJFcnJvciIsInJlYWN0aXZlUHJvcHMiLCJpbml0IiwiZ2V0UHJvcGVydHkiLCJwcm9wZXJ0eSIsInNldFByb3BlcnR5IiwiYnJpZGdlIiwic2V0IiwiQ29sbGVjdGlvblNhdmVNYW5hZ2VyIiwiQ29sbGVjdGlvbkxvYWRNYW5hZ2VyIiwib24iLCJsaXN0ZW5JdGVtcyIsIiNsaXN0ZW5JdGVtcyIsInByb2Nlc3NFbnRyaWVzIiwidHJpZ2dlciIsInNldE9mZmxpbmUiLCJzZXRJdGVtcyIsInZhbHVlcyIsInN0b3JlIiwiZm9yRWFjaCIsImlkIiwiZGVsZXRlIiwiaWRzIiwic29mdERlbGV0ZSIsImRlbGV0ZUl0ZW1zIiwiZSIsImNvbnNvbGUiLCJsb2FkIiwiYXJncyIsImxvY2FsTG9hZCIsImZpbHRlciIsInNhdmUiLCJzeW5jIiwicHVibGlzaCIsInRvU3luYyIsInNldEVudHJpZXMiLCJlbnRyaWVzIiwiX2ZhY3RvcnkiLCJsb2FkZWQiLCJwYXJlbnRCcmlkZ2UiLCJyZWdpc3RyeSIsInJlbW90ZURhdGEiLCJwYXJhbXMiLCJsb2NhbERhdGEiLCJuZXdJdGVtcyIsInVwZGF0ZSIsImNvbmNhdCIsImxvY2FsTG9hZGVkIiwiZmV0Y2hpbmciLCJwYWdlIiwicmVtb3RlRWxlbWVudHMiLCJzdGFydCIsImxpbWl0IiwibG9jYWxSZXNwb25zZSIsInJlbW90ZUxvYWQiLCJleGMiLCJmZXRjaGVkIiwibGFuZGVkIiwibGlzdCIsInByb2Nlc3NSZW1vdGVFbnRyaWVzIiwiZGVsZXRlZEVudHJpZXMiLCJ1cGRhdGVMb2NhbEl0ZW1zIiwicHJvbWlzZXMiLCJtYXAiLCJyZWNvcmQiLCJoYXMiLCJpdGVtMiIsInB1c2giLCJpc1JlYWR5IiwiYWxsIiwiaW5kZXgiLCJfY29yZSIsIl9kYXRhYmFzZSIsIl9zYXZlciIsIl9sb2FkZXIiLCJDb2xsZWN0aW9uTG9jYWxQcm92aWRlcjIiLCJnbG9iYWxUaGlzIiwibmF2aWdhdG9yIiwib25MaW5lIiwib2ZmbGluZSIsImRhdGFiYXNlIiwiZGF0YWJhc2VOYW1lIiwiZXhpc3RzIiwiZm91bmQiLCJyZWdpc3RyeUZhY3RvcnkiLCJhcHBseSIsImFjdGl2ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ29ubmVjdGlvbiIsIkxvY2FsUHJvdmlkZXJMb2FkZXIiLCJwcm9taXNlSW5pdCIsInJlYWR5IiwiUGVuZGluZ1Byb21pc2UiLCJEQk1hbmFnZXIiLCJMb2NhbFByb3ZpZGVyU2F2ZXIiLCJ1cHNlcnQiLCJvcmlnaW5hbERhdGEiLCJ0cmFuc2FjdGlvbiIsImluc3RhbmNlSWRUb0lkTWFwIiwiaW5zdGFuY2VJZCIsImJ1bGtQdXQiLCJyZWNvcmRzIiwiYnVsa0dldCIsImV4aXN0aW5nUmVjb3JkcyIsImxlbmd0aCIsIml0ZW1zVG9VcGRhdGUiLCJpc0RlbGV0ZWQiLCJzYXZlQWxsIiwiX2RleGllIiwicHJvbWlzZUxvYWQiLCJsaXN0SXRlbXMiLCJTZXQiLCJjb25kaXRpb25zIiwiY3VzdG9tV2hlcmUiLCJkZWZhdWx0V2hlcmUiLCJvcmRlckJ5IiwiY3VycmVudExpbWl0IiwiY3VycmVudE9mZnNldCIsInBhcmVudFByaXZhdGVQcm9wcyIsInF1YW50aXR5IiwiaXNTYW1lIiwiSlNPTiIsInN0cmluZ2lmeSIsInBlcmZvcm1Mb2FkIiwiI3BlcmZvcm1Mb2FkIiwiY291bnQiLCJ0b3RhbFBhZ2VzIiwiTWF0aCIsImNlaWwiLCJyZXNvbHZlUHJvbWlzZUxvYWQiLCJsaXZlIiwibGl2ZVF1ZXJ5Iiwid2hlcmUiLCJzdWJzY3JpYmVUb1F1ZXJ5Iiwib2Zmc2V0IiwiaGFzT3duUHJvcGVydHkiLCJpbmRleGVzIiwic2NoZW1hIiwibmFtZSIsImtleXMiLCJrZXkiLCJpbmNsdWRlcyIsImNvbGxlY3Rpb24iLCJxdWVyeSIsImkiLCJ0b0FycmF5IiwiY3VzdG9tRmlsdGVyIiwiY2FsbGJhY2siLCIjc3Vic2NyaWJlVG9RdWVyeSIsImN1cnJlbnRQYWdlIiwic3Vic2NyaWJlIiwiaGFuZGxlUXVlcnlSZXNwb25zZSIsImVyciIsIiNoYW5kbGVRdWVyeVJlc3BvbnNlIiwic2FtZVF1ZXJ5Iiwic29ydCIsImEiLCJiIiwiY3VycmVudE1hcCIsImFkZCIsImNsZWFudXBJdGVtcyIsIiNjbGVhbnVwSXRlbXMiLCIjcmVzb2x2ZVByb21pc2VMb2FkIiwiX3JlZ2lzdHJ5IiwiYmF0Y2hlcyIsInByb2Nlc3MiLCJnZXRQcm9wZXJ0aWVzIiwidG9TYXZlIiwiUmVnaXN0cnkiLCJkZWxldGVkIiwic2V0VmFsdWVzIiwiY2h1bmtzIiwiYmF0Y2giLCJzcGxpY2UiLCJnZXRWYWx1ZXMiLCJyZXN1bHRzIiwiYWxsU2V0dGxlZCIsIm1hcHBlZEZuIiwicmVzdWx0IiwiZmFpbGVkIiwiTUFYX1JFVFJJRVMiLCJDSFVOS19TSVpFIiwid2FybiIsImJ1bGtTYXZlIiwic2VuZENodW5rIiwiY2h1bmsiLCJzdWNjZXNzIiwic3BsaXREYXRhSW50b0NodW5rcyIsInNsaWNlIiwiZXF1YWxzIiwiZmFpbGVkQ2h1bmtzIiwic3VjY2Vzc0NodW5rcyIsIl9pbmRleCIsIlVzZXJQcm92aWRlciIsIkJvb2syIiwiX3NhdmUiLCJJdGVtMiIsImxvY2FsRmllbGRzIiwic2tlbGV0b24iLCJ1bmlxdWUiLCJfX2dldCIsIl9faW5zdGFuY2VJZCIsImNoZWNrUmVhZHkiLCJvYmplY3RSZWFkeSIsInByb21pc2VSZWFkeSIsImluaXRQcm9taXNlIiwiY29uZmlnIiwiI3N0YXJ0IiwiYmluZCIsInNwY3MiLCJJdGVtU2F2ZU1hbmFnZXIiLCJJdGVtTG9hZE1hbmFnZXIiLCJpbml0aWFsaXNlIiwib25SZWFkeSIsInRyYWNlIiwidG9JdGVyYXRlIiwiZmllbGQiLCJnZXRQcm9wZXJ0eU5hbWVzIiwiZm9yY2VTeW5jIiwic2FtZSIsIm9yaWdpbmFsIiwiaXNOYU4iLCJwYXJzZUludCIsImxvYWRNZXRob2QiLCJMb2NhbFByb3ZpZGVyMiIsImlzTmV3IiwiZmFjdG9yeVJlZ2lzdHJ5IiwiX19pZCIsImZsb29yIiwicmFuZG9tIiwiZ2V0UmVnaXN0cnkiLCJkZWVwQ29tcGFyZSIsIm9iajEiLCJvYmoyIiwia2V5czEiLCJrZXlzMiIsInZhbDEiLCJ2YWwyIiwiYXJlT2JqZWN0cyIsImlzT2JqZWN0Iiwib2JqZWN0IiwiaXNVbnB1Ymxpc2hlZCIsIiNpc1VucHVibGlzaGVkIiwidG9Db21wYXJlIiwiYXJlRXF1YWwiLCJsaXN0ZW5SZWdpc3RyeSIsImNyZWF0ZSIsIiNsaXN0ZW5SZWdpc3RyeSIsImR1cGxpY2F0ZWQiLCJ2YWxpZGF0ZVVuaXF1ZUZpZWxkcyIsImZpZWxkcyIsImNoZWNrUHJvbWlzZXMiLCJ0aGVuIiwiZHVwbGljYXRlRmllbGRzIiwiZGVsZXRlUmVnaXN0cnkiLCJpZGVudGlmaWVyIiwiaXNQbGFpbk9iamVjdCIsIm9iaiIsIiNkZWxldGUiLCIjdXBkYXRlIiwidXBkYXRlZCIsInBsYWluIiwicHV0IiwibG9jYWxVcGRhdGUiLCJyZW1vdGVSZXNwb25zZSIsInByb3BzIiwiQ29sbGVjdGlvblByb3ZpZGVyMiIsIkl0ZW1Qcm92aWRlcjIiLCJSZWdpc3RyeUZhY3RvcnkyIiwic3RvcmVzIiwiZGJOYW1lIiwicmVnaXN0ZXJMaXN0IiwicmVnaXN0cmllcyIsImhhc0l0ZW0iLCJnZXRTdG9yZSIsIiNnZXRTdG9yZSIsImRicyIsIl91dWlkIiwia2V5SWQiLCJ2NCIsIm5ld1ZhbHVlcyIsImlzRGVsZWxldGVkIiwiU3RvcmVSZWNvcmRzMiIsInN0b3JlRmFjdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSx1QkFBQTtBQUFBQyxRQUFBLENBQUFELHVCQUFBO0VBQUFFLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLHVCQUFBLEVBQUFBLENBQUEsS0FBQUEsdUJBQUE7RUFBQUMsa0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxrQkFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFD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