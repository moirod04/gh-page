System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/backend","0.1.9"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep)],
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

// .beyond/uimport/@beyond-js/backend/client.0.1.9.js
var client_0_1_9_exports = {};
__export(client_0_1_9_exports, {
  ActionsBridge: () => ActionsBridge,
  Backend: () => Backend,
  __beyond_pkg: () => __beyond_pkg,
  backends: () => backends,
  hmr: () => hmr
});
module.exports = __toCommonJS(client_0_1_9_exports);

// node_modules/@beyond-js/backend/client/client.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/core"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/backend@0.1.7/client"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./action/bridge", {
  hash: 1745530134,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ActionsBridge = void 0;
    var _ = require2("./");
    var _backends = require2("../backends");
    class ActionsBridge2 {
      #distribution;
      #bundle;
      #pkg;
      #backend;
      get backend() {
        return _backends.backends.get(this.#pkg);
      }
      constructor(distribution, bundle) {
        this.#distribution = distribution;
        this.#bundle = bundle.specifier;
        this.#pkg = bundle.module.pkg;
        this.#backend = `${bundle.module.pkg}/${this.#distribution}`;
      }
      async execute(action, ...params) {
        const a = new _.default(this.#backend, this.#bundle, action, ...params);
        return await a.execute();
      }
    }
    exports.ActionsBridge = ActionsBridge2;
  }
});
ims.set("./action/execution-error", {
  hash: 3368390780,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ExecutionError = void 0;
    const ExecutionError = class {
      #message;
      get message() {
        return this.#message;
      }
      #stack;
      get stack() {
        return this.#stack;
      }
      constructor(message, stack) {
        this.#message = message;
        this.#stack = stack;
      }
    };
    exports.ExecutionError = ExecutionError;
  }
});
ims.set("./action/index", {
  hash: 501662521,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _core = require2("@beyond-js/kernel/core");
    var _backends = require2("../backends");
    var _executionError = require2("./execution-error");
    let autoincrement = 0;
    class _default extends _core.Events {
      #pkg;
      #request;
      #module;
      get module() {
        return this.#module;
      }
      #action;
      get action() {
        return this.#action;
      }
      #params;
      get params() {
        return this.#params;
      }
      constructor(backend, module2, action, ...params) {
        super();
        const id = this.#id;
        const pkg = this.#pkg = (() => {
          const split = backend.split("/");
          split.pop();
          return split.join("/");
        })();
        this.#module = module2;
        this.#action = action;
        this.#params = params;
        this.#request = {
          id,
          pkg,
          module: module2,
          action,
          params
        };
      }
      #id = ++autoincrement;
      get id() {
        return this.#id;
      }
      #channel = `response-v2-${this.#id}`;
      get channel() {
        return this.#channel;
      }
      #executed = false;
      get executed() {
        return this.#executed;
      }
      #executing = false;
      get executing() {
        return this.#executing;
      }
      #error = false;
      get error() {
        return this.#error;
      }
      #timer;
      #attempts = 0;
      #promise = new _core.PendingPromise();
      #send = socket => {
        this.#attempts && this.trigger("retrying", this.#attempts);
        this.#attempts++;
        try {
          socket.emit("rpc-v2", this.#request);
        } catch (exc) {
          this.#executing = false;
          this.#executed = true;
          this.#error = true;
          this.#promise.reject(exc);
        }
      };
      async execute() {
        if (this.#executing || this.#executed) return this.#promise;
        this.#executing = true;
        const backend = await _backends.backends.get(this.#pkg);
        if (!backend) throw new Error(`Project "${this.#pkg}" does not have a backend configured`);
        try {
          const socket = await backend.socket;
          if (!socket) {
            const message = `Error getting socket on "${backend.pkg}" backend. `;
            this.#promise.reject(new Error(message));
            return;
          }
          const onresponse = response => {
            this.#executed = true;
            this.#executing = false;
            clearTimeout(this.#timer);
            socket.off(this.#channel, onresponse);
            const {
              error,
              message,
              source,
              processingTime
            } = response;
            error ? this.#promise.reject(new _executionError.ExecutionError(error.message, error.stack)) : this.#promise.resolve(message);
          };
          const onError = error => {
            this.#executed = true;
            this.#executing = false;
            clearTimeout(this.#timer);
            this.#promise.reject(new Error("Socket disconnected"));
          };
          socket.on(this.#channel, onresponse);
          socket.on("disconnect", onError);
          socket.on("connect_error", onError);
          this.#send(socket);
        } catch (exc) {
          this.#promise.reject(exc);
          return;
        }
        return this.#promise;
      }
    }
    exports.default = _default;
  }
});
ims.set("./backend", {
  hash: 486330626,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Backend = void 0;
    var _io = require2("./io");
    var _socket = require2("./socket");
    class Backend2 {
      #pkg;
      get pkg() {
        return this.#pkg;
      }
      #host;
      get host() {
        return this.#host;
      }
      #local;
      get local() {
        return this.#local;
      }
      #socket;
      #io = new _io.ServiceIOConfiguration();
      get io() {
        return this.#io;
      }
      constructor(pkg, host, local) {
        this.#pkg = pkg;
        this.#host = host;
        this.#local = local;
        this.#socket = new _socket.default(this);
      }
      get socket() {
        return this.#socket.get();
      }
    }
    exports.Backend = Backend2;
  }
});
ims.set("./backends", {
  hash: 1705909413,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.backends = void 0;
    var _backend = require2("./backend");
    const backends2 = new class {
      #hosts = /* @__PURE__ */new Map();
      register(pkg, host) {
        !this.#hosts.has(pkg) && this.#hosts.set(pkg, new _backend.Backend(pkg, host));
      }
      async get(pkg) {
        if (this.#hosts.has(pkg)) return this.#hosts.get(pkg);
        try {
          const {
            backend: config
          } = (await bimport(`${pkg}/config`)).default;
          if (!config) {
            console.log(`Backend configuration not set on package "${pkg}"`);
            this.#hosts.set(pkg, void 0);
            return;
          }
          const {
            host,
            local
          } = config;
          if (this.#hosts.has(pkg)) return this.#hosts.get(pkg);
          const backend = new _backend.Backend(pkg, host, local);
          this.#hosts.set(pkg, backend);
          return this.#hosts.get(pkg);
        } catch (exc) {
          console.log(`Error importing package "${pkg}" configuration: ${exc.message}`);
          this.#hosts.set(pkg, void 0);
        }
      }
      async execute(pkg, distribution, module2, action, ...params) {
        const a = new (require2("./action").default)(`${pkg}/${distribution}`, module2, action, ...params);
        return await a.execute();
      }
    }();
    exports.backends = backends2;
  }
});
ims.set("./io", {
  hash: 2941830475,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ServiceIOConfiguration = void 0;
    class ServiceIOConfiguration {
      querystring;
    }
    exports.ServiceIOConfiguration = ServiceIOConfiguration;
  }
});
ims.set("./socket/index", {
  hash: 1119353765,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _core = require2("@beyond-js/kernel/core");
    var _initiator = require2("./initiator");
    var __decorate = function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    class default_1 {
      #backend;
      #initiator;
      #socket;
      constructor(backend) {
        this.#backend = backend;
        this.#initiator = new _initiator.default(backend);
      }
      async get() {
        if (this.#socket) return this.#socket;
        const backend = this.#backend;
        const {
          pkg
        } = backend;
        pkg !== "@beyond-js/local" && (await this.#initiator.check());
        const {
          io
        } = await bimport("socket.io-client");
        let query = backend.io.querystring && (await backend.io.querystring());
        const {
          host
        } = this.#backend;
        return this.#socket = io(host, {
          transports: ["websocket"],
          "query": query
        });
      }
    }
    exports.default = default_1;
    __decorate([_core.SingleCall], default_1.prototype, "get", null);
  }
});
ims.set("./socket/initiator", {
  hash: 4260137755,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class _default {
      #backend;
      #local;
      constructor(backend) {
        this.#backend = backend;
      }
      #promise;
      #initialise = async () => {
        if (this.#promise) {
          await this.#promise;
          return;
        }
        this.#promise = new _core.PendingPromise();
        if (!this.#backend.local || this.#local) return;
        this.#local = (await bimport("@beyond-js/local/main")).local;
        this.#promise.resolve();
      };
      async check() {
        await this.#initialise();
        if (!this.#local) return;
        const {
          pkg,
          local
        } = this.#backend;
        const id = `${pkg}/${local}`;
        const launcher = this.#local.launchers.get(id);
        const status = await launcher.status;
        if (status === "running") return;
        await launcher.start();
        await new Promise(resolve => setTimeout(resolve, 2e3));
      }
    }
    exports.default = _default;
  }
});
__pkg.exports.descriptor = [{
  "im": "./action/bridge",
  "from": "ActionsBridge",
  "name": "ActionsBridge"
}, {
  "im": "./backend",
  "from": "Backend",
  "name": "Backend"
}, {
  "im": "./backends",
  "from": "backends",
  "name": "backends"
}];
var ActionsBridge, Backend, backends;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "ActionsBridge") && (ActionsBridge = require2 ? require2("./action/bridge").ActionsBridge : value);
  (require2 || prop === "Backend") && (Backend = require2 ? require2("./backend").Backend : value);
  (require2 || prop === "backends") && (backends = require2 ? require2("./backends").backends : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL2JhY2tlbmQvY2xpZW50LjAuMS45LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvYmFja2VuZC9jbGllbnQvX19zb3VyY2VzL2NsaWVudC9hY3Rpb24vYnJpZGdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvYmFja2VuZC9jbGllbnQvX19zb3VyY2VzL2NsaWVudC9hY3Rpb24vZXhlY3V0aW9uLWVycm9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvYmFja2VuZC9jbGllbnQvX19zb3VyY2VzL2NsaWVudC9hY3Rpb24vaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9iYWNrZW5kL2NsaWVudC9fX3NvdXJjZXMvY2xpZW50L2JhY2tlbmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9iYWNrZW5kL2NsaWVudC9fX3NvdXJjZXMvY2xpZW50L2JhY2tlbmRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvYmFja2VuZC9jbGllbnQvX19zb3VyY2VzL2NsaWVudC9pby50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2JhY2tlbmQvY2xpZW50L19fc291cmNlcy9jbGllbnQvc29ja2V0L2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvYmFja2VuZC9jbGllbnQvX19zb3VyY2VzL2NsaWVudC9zb2NrZXQvaW5pdGlhdG9yLnRzIl0sIm5hbWVzIjpbImNsaWVudF8wXzFfOV9leHBvcnRzIiwiX19leHBvcnQiLCJBY3Rpb25zQnJpZGdlIiwiQmFja2VuZCIsIl9fYmV5b25kX3BrZyIsImJhY2tlbmRzIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl8iLCJyZXF1aXJlMiIsIl9iYWNrZW5kcyIsIkFjdGlvbnNCcmlkZ2UyIiwiZGlzdHJpYnV0aW9uIiwiYnVuZGxlIiwicGtnIiwiYmFja2VuZCIsImdldCIsImNvbnN0cnVjdG9yIiwic3BlY2lmaWVyIiwiZXhlY3V0ZSIsImFjdGlvbiIsInBhcmFtcyIsImEiLCJkZWZhdWx0IiwiRXhlY3V0aW9uRXJyb3IiLCJtZXNzYWdlIiwic3RhY2siLCJfY29yZSIsIl9leGVjdXRpb25FcnJvciIsImF1dG9pbmNyZW1lbnQiLCJfZGVmYXVsdCIsIkV2ZW50cyIsInJlcXVlc3QiLCJtb2R1bGUyIiwiaWQiLCJzcGxpdCIsInBvcCIsImpvaW4iLCJjaGFubmVsIiwiZXhlY3V0ZWQiLCJleGVjdXRpbmciLCJlcnJvciIsInRpbWVyIiwiYXR0ZW1wdHMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJzZW5kIiwic29ja2V0IiwidHJpZ2dlciIsImVtaXQiLCJleGMiLCJyZWplY3QiLCJFcnJvciIsIm9ucmVzcG9uc2UiLCJyZXNwb25zZSIsImNsZWFyVGltZW91dCIsIm9mZiIsInNvdXJjZSIsInByb2Nlc3NpbmdUaW1lIiwicmVzb2x2ZSIsIm9uRXJyb3IiLCJvbiIsIl9pbyIsIl9zb2NrZXQiLCJCYWNrZW5kMiIsImhvc3QiLCJsb2NhbCIsImlvIiwiU2VydmljZUlPQ29uZmlndXJhdGlvbiIsIl9iYWNrZW5kIiwiYmFja2VuZHMyIiwiaG9zdHMiLCJNYXAiLCJyZWdpc3RlciIsImhhcyIsInNldCIsImNvbmZpZyIsImJpbXBvcnQiLCJjb25zb2xlIiwibG9nIiwicXVlcnlzdHJpbmciLCJfaW5pdGlhdG9yIiwiZGVmYXVsdF8xIiwiaW5pdGlhdG9yIiwiY2hlY2siLCJxdWVyeSIsInRyYW5zcG9ydHMiLCJfX2RlY29yYXRlIiwiU2luZ2xlQ2FsbCIsInByb3RvdHlwZSIsImluaXRpYWxpc2UiLCIjaW5pdGlhbGlzZSIsImxhdW5jaGVyIiwibGF1bmNoZXJzIiwic3RhdHVzIiwic3RhcnQiLCJQcm9taXNlIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Q0FBQyxLQUFLLENBQUF4QixLQUFBLEVBQVE7UUFFbEIsTUFBTTtVQUFDcEQsR0FBQTtVQUFLb0Q7UUFBSyxJQUFJLEtBQUssQ0FBQW5ELE9BQUE7UUFDMUIsTUFBTW1CLEVBQUEsR0FBSyxHQUFHcEIsR0FBQSxJQUFPb0QsS0FBQTtRQUNyQixNQUFNMEIsUUFBQSxHQUFXLEtBQUssQ0FBQTFCLEtBQUEsQ0FBTzJCLFNBQUEsQ0FBVTdFLEdBQUEsQ0FBSWtCLEVBQUU7UUFDN0MsTUFBTTRELE1BQUEsR0FBUyxNQUFNRixRQUFBLENBQVNFLE1BQUE7UUFDOUIsSUFBSUEsTUFBQSxLQUFXLFdBQVc7UUFFMUIsTUFBTUYsUUFBQSxDQUFTRyxLQUFBLENBQUs7UUFDcEIsTUFBTSxJQUFJQyxPQUFBLENBQVFyQyxPQUFBLElBQVdzQyxVQUFBLENBQVd0QyxPQUFBLEVBQVMsR0FBSSxDQUFDO01BQzFEOztJQUNIckQsT0FBQSxDQUFBaUIsT0FBQSxHQUFBTyxRQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvd29ya2Zsb3cvb3V0In0=