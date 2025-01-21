System.register(["@beyond-js/kernel@0.1.9/bundle","dexie@3.2.5","@beyond-js/events@0.0.7/events","@beyond-js/kernel@0.1.9/core"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["dexie","3.2.5"],["@beyond-js/events","0.0.7"],["@beyond-js/reactive","1.1.14"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('dexie@3.2.5', dep), dep => dependencies.set('@beyond-js/events@0.0.7/events', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep)],
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

// .beyond/uimport/@beyond-js/reactive/database.1.1.14.js
var database_1_1_14_exports = {};
__export(database_1_1_14_exports, {
  DBManager: () => DBManager,
  DatabaseManager: () => DatabaseManager,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(database_1_1_14_exports);

// node_modules/@beyond-js/reactive/database/database.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("dexie@3.2.5"), 0);
var dependency_2 = __toESM(require("@beyond-js/events@0.0.7/events"), 0);
var dependency_3 = __toESM(require("@beyond-js/kernel@0.1.9/core"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/reactive@1.1.13/database"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["dexie", dependency_1], ["@beyond-js/events/events", dependency_2], ["@beyond-js/kernel/core", dependency_3]]);
var ims = /* @__PURE__ */new Map();
ims.set("./database", {
  hash: 1160722982,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Database = void 0;
    var _dexie = require2("dexie");
    var _events = require2("@beyond-js/events/events");
    var _core = require2("@beyond-js/kernel/core");
    class Database extends _events.Events {
      #version = 1;
      #db;
      get db() {
        return this.#db;
      }
      #promise;
      #currentVersion;
      static #instance;
      #ready;
      #name;
      get ready() {
        return this.#ready;
      }
      constructor(name, version) {
        super();
        this.#name = name;
        this.#version = version;
        this.create();
        this.#promise = new _core.PendingPromise();
        globalThis.db = this.#db;
      }
      async create() {
        this.#db = new _dexie.default(this.#name);
        this.#currentVersion = this.#db.version(this.#version);
      }
      #onReady = () => {
        this.#ready = true;
        this.#promise.resolve();
        this.#promise = void 0;
      };
      #onError = error => {
        this.#promise.resolve();
        this.#promise = void 0;
        throw new Error(error);
      };
      #nextVersion() {
        this.#version++;
        return this.#version;
      }
      register = async data => {
        Object.keys(data).forEach(store => {
          const items = data[store].split(",");
          const filter = new Set(items);
          filter.add("offline");
          filter.add("instanceId");
          filter.add("isDeleted");
          filter.add("isNew");
          data[store] = Array.from(filter).join(",");
        });
        this.#currentVersion.stores(data);
        try {
          await this.#db.open();
          return this.#db;
        } catch (e) {
          console.error("error registering", e);
        }
      };
    }
    exports.Database = Database;
  }
});
ims.set("./index", {
  hash: 1682080146,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DatabaseManager = exports.DBManager = void 0;
    var _dexie = require2("dexie");
    var _events = require2("@beyond-js/events/events");
    var _core = require2("@beyond-js/kernel/core");
    var _database = require2("./database");
    class DatabaseManager2 extends _events.Events {
      #promise;
      #ready;
      get ready() {
        return this.#ready;
      }
      #db;
      get db() {
        return this.#db;
      }
      #databases = /* @__PURE__ */new Map();
      constructor() {
        super();
        const db = new _dexie.default("ReactiveDatabase");
        this.#db = db;
        db.version(1).stores({
          schemas: "name, table, fields"
        });
        db.open().then(this.#onFinished).catch(this.#onError);
      }
      #onFinished = () => {
        this.trigger("loaded.reactive.database");
        if (this.#promise) this.#promise.resolve();
      };
      #onError = err => {
        this.trigger("error");
        console.error(err);
      };
      load() {
        if (this.ready) return this.ready;
        if (this.#promise) return this.#promise;
        this.#promise = new _core.PendingPromise();
        const onFinished = () => {
          this.#ready = true;
          this.#promise.resolve();
          this.#promise = void 0;
        };
        this.on("finished", onFinished);
        this.on("error", () => {
          this.#promise.reject();
          this.#promise = void 0;
        });
      }
      async open(identifier) {
        if (!identifier) {
          throw new Error(`Identifier ${identifier} was not defined correctly`);
        }
        let [name, version = 1] = identifier.split("@");
        if (!this.#databases.has(name)) {
          const schema = new _database.Database(name, version);
          this.#databases.set(name, schema);
          return schema;
        }
        return this.#databases.get(name);
      }
      get = name => this.open(name);
      async config(name, stores) {
        const schema = await this.open(name);
        return schema.register(stores);
      }
    }
    exports.DatabaseManager = DatabaseManager2;
    const DBManager2 = exports.DBManager = new DatabaseManager2();
  }
});
__pkg.exports.descriptor = [{
  "im": "./index",
  "from": "DatabaseManager",
  "name": "DatabaseManager"
}, {
  "im": "./index",
  "from": "DBManager",
  "name": "DBManager"
}];
var DatabaseManager, DBManager;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "DatabaseManager") && (DatabaseManager = require2 ? require2("./index").DatabaseManager : value);
  (require2 || prop === "DBManager") && (DBManager = require2 ? require2("./index").DBManager : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0aXZlL2RhdGFiYXNlLjEuMS4xNC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0aXZlL2RhdGFiYXNlL19fc291cmNlcy9kYXRhYmFzZS9kYXRhYmFzZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0aXZlL2RhdGFiYXNlL19fc291cmNlcy9kYXRhYmFzZS9pbmRleC50cyJdLCJuYW1lcyI6WyJkYXRhYmFzZV8xXzFfMTRfZXhwb3J0cyIsIl9fZXhwb3J0IiwiREJNYW5hZ2VyIiwiRGF0YWJhc2VNYW5hZ2VyIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9kZXhpZSIsInJlcXVpcmUyIiwiX2V2ZW50cyIsIl9jb3JlIiwiRGF0YWJhc2UiLCJFdmVudHMiLCJ2ZXJzaW9uIiwiZGIiLCJwcm9taXNlIiwiY3VycmVudFZlcnNpb24iLCJpbnN0YW5jZSIsInJlYWR5IiwibmFtZSIsImNvbnN0cnVjdG9yIiwiY3JlYXRlIiwiUGVuZGluZ1Byb21pc2UiLCJnbG9iYWxUaGlzIiwiZGVmYXVsdCIsIm9uUmVhZHkiLCIjb25SZWFkeSIsInJlc29sdmUiLCJvbkVycm9yIiwiZXJyb3IiLCJFcnJvciIsIm5leHRWZXJzaW9uIiwiI25leHRWZXJzaW9uIiwicmVnaXN0ZXIiLCJkYXRhIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJzdG9yZSIsIml0ZW1zIiwic3BsaXQiLCJmaWx0ZXIiLCJTZXQiLCJhZGQiLCJBcnJheSIsImZyb20iLCJqb2luIiwic3RvcmVzIiwib3BlbiIsImUiLCJjb25zb2xlIiwiX2RhdGFiYXNlIiwiRGF0YWJhc2VNYW5hZ2VyMiIsImRhdGFiYXNlcyIsIk1hcCIsInNjaGVtYXMiLCJ0aGVuIiwib25GaW5pc2hlZCIsImNhdGNoIiwiI29uRmluaXNoZWQiLCJ0cmlnZ2VyIiwiZXJyIiwibG9hZCIsIm9uIiwicmVqZWN0IiwiaWRlbnRpZmllciIsImhhcyIsInNjaGVtYSIsInNldCIsImdldCIsImNvbmZpZyIsIkRCTWFuYWdlcjIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsdUJBQUE7QUFBQUMsUUFBQSxDQUFBRCx1QkFBQTtFQUFBRSxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBUix1QkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQSxJQUFBUyxNQUFBLEdBQUFDLFFBQUE7SUFDQSxJQUFBQyxPQUFBLEdBQUFELFFBQUE7SUFDQSxJQUFBRSxLQUFBLEdBQUFGLFFBQUE7SUFFTSxNQUFPRyxRQUFBLFNBQWlCRixPQUFBLENBQUFHLE1BQUEsQ0FBTTtNQUNuQyxDQUFBQyxPQUFBLEdBQVc7TUFFWCxDQUFBQyxFQUFBO01BQ0EsSUFBSUEsR0FBQSxFQUFFO1FBQ0wsT0FBTyxLQUFLLENBQUFBLEVBQUE7TUFDYjtNQUNBLENBQUFDLE9BQUE7TUFDQSxDQUFBQyxjQUFBO01BQ0EsT0FBTyxDQUFBQyxRQUFBO01BQ1AsQ0FBQUMsS0FBQTtNQUVBLENBQUFDLElBQUE7TUFDQSxJQUFJRCxNQUFBLEVBQUs7UUFDUixPQUFPLEtBQUssQ0FBQUEsS0FBQTtNQUNiO01BRUFFLFlBQVlELElBQUEsRUFBTU4sT0FBQSxFQUFPO1FBQ3hCLE1BQUs7UUFFTCxLQUFLLENBQUFNLElBQUEsR0FBUUEsSUFBQTtRQUNiLEtBQUssQ0FBQU4sT0FBQSxHQUFXQSxPQUFBO1FBQ2hCLEtBQUtRLE1BQUEsQ0FBTTtRQUNYLEtBQUssQ0FBQU4sT0FBQSxHQUFX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