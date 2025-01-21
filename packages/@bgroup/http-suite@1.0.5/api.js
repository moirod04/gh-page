System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core","@beyond-js/events@0.0.7/events","@beyond-js/reactive@1.1.14/model"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/events","0.0.7"],["@beyond-js/reactive","1.1.14"],["@bgroup/http-suite","1.0.5"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/events@0.0.7/events', dep), dep => dependencies.set('@beyond-js/reactive@1.1.14/model', dep)],
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

// .beyond/uimport/@bgroup/http-suite/api.1.0.5.js
var api_1_0_5_exports = {};
__export(api_1_0_5_exports, {
  Api: () => Api,
  JCall: () => JCall,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(api_1_0_5_exports);

// node_modules/@bgroup/http-suite/api/api.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/core"), 0);
var dependency_2 = __toESM(require("@beyond-js/reactive@1.1.14/model"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@bgroup/http-suite@0.0.1/api"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1], ["@beyond-js/reactive/model", dependency_2]]);
var ims = /* @__PURE__ */new Map();
ims.set("./api", {
  hash: 3516067986,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Api = void 0;
    var _core = require2("@beyond-js/kernel/core");
    var _jcall = require2("./jcall");
    class Api2 extends _core.Events {
      #url;
      get url() {
        return this.#url ?? "";
      }
      #fetcher;
      get actions() {
        return this.#fetcher.actions;
      }
      get streamResponse() {
        return this.#fetcher.streamResponse;
      }
      get metadata() {
        return this.#fetcher.metadata;
      }
      constructor(url) {
        super();
        this.#url = url;
        this.#fetcher = new _jcall.JCall();
        this.#fetcher.on("action.received", () => this.trigger("action.received"));
        this.#fetcher.on("stream.response", this.#getResponse);
      }
      #getResponse = () => {
        this.trigger("stream.response");
      };
      async action(method = "get", route, specs = {}) {
        return this.#fetcher[method](this.getURL(route), specs);
      }
      getURL(route) {
        return `${this.#url}${route}`;
      }
      bearer(bearer) {
        this.#fetcher.bearer(bearer);
        return this;
      }
      get(route, specs) {
        return this.action("get", route, specs);
      }
      post(route, specs) {
        return this.action("post", route, specs);
      }
      put(route, specs) {
        return this.action("put", route, specs);
      }
      delete(route, specs) {
        return this.action("delete", route, specs);
      }
      stream(route, specs = {}) {
        return this.action("stream", route, specs);
      }
    }
    exports.Api = Api2;
  }
});
ims.set("./jcall", {
  hash: 3581339992,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.JCall = void 0;
    var _model = require2("@beyond-js/reactive/model");
    var _stream = require2("./stream");
    class JCall2 extends _model.ReactiveModel {
      get actions() {
        return this.#streamer.actions;
      }
      get streamResponse() {
        return this.#streamer.response;
      }
      #bearer;
      bearer(bearer) {
        if (bearer) this.#bearer = bearer;
        return this;
      }
      #streamer;
      constructor() {
        super();
        this.#streamer = new _stream.Stream(this);
      }
      getHeaders = (specs, multipart) => {
        let headers = new Headers();
        const bearer = specs.bearer || this.#bearer;
        if (bearer) {
          headers.append("Authorization", `Bearer ${bearer}`);
        }
        if (specs.bearer) delete specs.bearer;
        const keys = Object.keys(specs);
        keys.forEach(key => {
          if (key === "bearer") return;
          headers.append(key, specs[key]);
        });
        if (multipart) {
          headers.delete("Content-Type");
        }
        return headers;
      };
      #formData;
      formData = specs => {
        this.#formData = new FormData();
        const keys = Object.keys(specs);
        keys.forEach(key => {
          this.#formData.append(key, specs[key]);
        });
        return this.#formData;
      };
      #processGetParams(params) {
        const emptyParams = Object.entries(params).length === 0 && params.constructor === Object;
        if (emptyParams) return "";
        const parameters = new URLSearchParams();
        for (const key in params) {
          if (![NaN, void 0, ""].includes(params[key])) {
            parameters.append(key, params[key]);
          }
        }
        return parameters;
      }
      #processPostParams = (params, multipart) => {
        const emptyParams = Object.entries(params).length === 0 && params.constructor === Object;
        if (emptyParams) return;
        if (multipart) {
          const data = this.formData(params);
          return data;
        }
        return JSON.stringify(params);
      };
      execute = async (url, method = "get", params = {}, headersSpecs, stream, data) => {
        try {
          if (!headersSpecs) {
            headersSpecs = {};
          }
          const multipart = params.multipart;
          let headers = this.getHeaders({
            ...headersSpecs,
            bearer: params.bearer
          }, multipart);
          delete params.multipart;
          delete params.bearer;
          const specs = {
            method,
            headers,
            mode: "cors"
          };
          if (params.bearer) delete params.bearer;
          if (method === "post" || method === "put" || method === "DELETE") {
            specs.body = this.#processPostParams(params, multipart);
          } else if (method === "get") {
            const queryString = this.#processGetParams(params).toString();
            if (queryString) url += `?${queryString}`;
          }
          if (stream) return this.#streamer.execute(url, specs);
          const response = await fetch(url, specs);
          return response.json();
        } catch (e) {
          console.error("error jcall", e);
        }
      };
      stream = (url, params, headers = {
        "Content-Type": "application/json"
      }) => this.execute(url, "post", params, headers, true);
      get = (url, params, headers) => {
        return this.execute(url, "get", params);
      };
      post = (url, params, headers = {
        "Content-Type": "application/json"
      }) => this.execute(url, "post", params, headers);
      delete = (url, params, headers = {
        "Content-Type": "application/json"
      }) => {
        this.execute(url, "DELETE", params, headers);
      };
      put = (url, params, headers = {
        "Content-Type": "application/json"
      }) => this.execute(url, "put", params, headers);
    }
    exports.JCall = JCall2;
  }
});
ims.set("./stream", {
  hash: 3091227484,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Stream = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class Stream {
      #SEPARATORS = {
        METADATA: "\xFF",
        START: "\u{1F638}",
        END: "\u{1F58B}\uFE0F"
      };
      #metadata = {
        started: false,
        value: "",
        parsed: {
          value: void 0
        }
      };
      get metadata() {
        return this.#metadata.parsed;
      }
      #actions = [];
      get actions() {
        return this.#actions;
      }
      #response = "";
      get response() {
        return this.#response;
      }
      #parent;
      #currentTool = {
        started: false,
        value: "",
        parsed: {
          value: void 0
        }
      };
      constructor(parent) {
        this.#parent = parent;
      }
      #processResponse = promise => {
        const metadata = this.#metadata;
        try {
          this.#metadata.parsed.value = JSON.parse(metadata.value);
        } catch (exc) {
          console.log(metadata);
          console.error(exc);
          this.#metadata.parsed.error = "Error parsing metadata";
        }
        promise.resolve({
          value: this.#response,
          ...metadata.parsed.value
        });
        this.#response = void 0;
      };
      #cleanCurrentTool() {
        this.#currentTool = {
          started: false,
          value: "",
          parsed: {
            value: void 0
          }
        };
      }
      async #handleMetadata(chunk, response) {
        this.#metadata.started = true;
        const split = chunk.split(this.#SEPARATORS.METADATA);
        this.#metadata.value += split[1];
        return split[0] ? response += split[0] : response;
      }
      handleStart(chunk, response) {
        const splitted = chunk.split(this.#SEPARATORS.START);
        this.#currentTool.started = true;
        chunk = "";
        if (splitted[1].includes(this.#SEPARATORS.END)) {
          const splitted2 = splitted[1].split(this.#SEPARATORS.END);
          this.#currentTool.value = splitted2[0];
          this.#actions.push(splitted2[0]);
          response += this.#SEPARATORS.START + this.#currentTool.value + this.#SEPARATORS.END;
        } else {
          response += splitted[0];
          this.#currentTool.value += splitted[1];
        }
        return response;
      }
      handleEnd(chunk, response) {
        const splitted = chunk.split(this.#SEPARATORS.END);
        this.#currentTool.value += splitted[0];
        this.#currentTool.started = false;
        this.#actions.push(this.#currentTool.value);
        this.#response += this.#SEPARATORS.START + this.#currentTool.value + this.#SEPARATORS.END;
        return splitted[1];
      }
      async #read(response, promise) {
        const reader = response.body?.getReader();
        while (true) {
          const {
            done,
            value
          } = await reader.read();
          let chunk = new TextDecoder().decode(value);
          if (done) return this.#processResponse(promise);
          if (chunk.includes(this.#SEPARATORS.METADATA)) {
            this.#handleMetadata(chunk, this.#response);
            continue;
          }
          if (this.#metadata.started) {
            this.#metadata.value += chunk;
            this.#parent.trigger("stream.response");
            return;
          }
          if (chunk.includes(this.#SEPARATORS.START)) {
            this.handleStart(chunk, this.#response);
          } else if (this.#currentTool.started && chunk.includes(this.#SEPARATORS.END)) {
            this.handleEnd(chunk, this.#response);
            this.#cleanCurrentTool();
          }
          this.#response += chunk;
          this.#parent.triggerEvent("action.received");
          this.#parent.triggerEvent("stream.response");
        }
      }
      async execute(url, specs) {
        try {
          const promise = new _core.PendingPromise();
          this.#response = "";
          const response = await fetch(url, specs);
          if (!response.ok) {
            throw new Error("error in stream");
          }
          this.#read(response, promise);
          return promise;
        } catch (e) {
          console.error(e);
        }
      }
    }
    exports.Stream = Stream;
  }
});
__pkg.exports.descriptor = [{
  "im": "./api",
  "from": "Api",
  "name": "Api"
}, {
  "im": "./jcall",
  "from": "JCall",
  "name": "JCall"
}];
var Api, JCall;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "Api") && (Api = require2 ? require2("./api").Api : value);
  (require2 || prop === "JCall") && (JCall = require2 ? require2("./jcall").JCall : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmdyb3VwL2h0dHAtc3VpdGUvYXBpLjEuMC41LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZ3JvdXAvaHR0cC1zdWl0ZS9hcGkvX19zb3VyY2VzL2FwaS9hcGkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJncm91cC9odHRwLXN1aXRlL2FwaS9fX3NvdXJjZXMvYXBpL2pjYWxsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZ3JvdXAvaHR0cC1zdWl0ZS9hcGkvX19zb3VyY2VzL2FwaS9zdHJlYW0udHMiXSwibmFtZXMiOlsiYXBpXzFfMF81X2V4cG9ydHMiLCJfX2V4cG9ydCIsIkFwaSIsIkpDYWxsIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9jb3JlIiwicmVxdWlyZTIiLCJfamNhbGwiLCJBcGkyIiwiRXZlbnRzIiwidXJsIiwiZmV0Y2hlciIsImFjdGlvbnMiLCJzdHJlYW1SZXNwb25zZSIsIm1ldGFkYXRhIiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXIiLCJnZXRSZXNwb25zZSIsIiNnZXRSZXNwb25zZSIsImFjdGlvbiIsIm1ldGhvZCIsInJvdXRlIiwic3BlY3MiLCJnZXRVUkwiLCJiZWFyZXIiLCJnZXQiLCJwb3N0IiwicHV0IiwiZGVsZXRlIiwic3RyZWFtIiwiX21vZGVsIiwiX3N0cmVhbSIsIkpDYWxsMiIsIlJlYWN0aXZlTW9kZWwiLCJzdHJlYW1lciIsInJlc3BvbnNlIiwiU3RyZWFtIiwiZ2V0SGVhZGVycyIsIm11bHRpcGFydCIsImhlYWRlcnMiLCJIZWFkZXJzIiwiYXBwZW5kIiwia2V5cyIsIk9iamVjdCIsImZvckVhY2giLCJrZXkiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwicHJvY2Vzc0dldFBhcmFtcyIsIiNwcm9jZXNzR2V0UGFyYW1zIiwicGFyYW1zIiwiZW1wdHlQYXJhbXMiLCJlbnRyaWVzIiwibGVuZ3RoIiwicGFyYW1ldGVycyIsIlVSTFNlYXJjaFBhcmFtcyIsIk5hTiIsImluY2x1ZGVzIiwicHJvY2Vzc1Bvc3RQYXJhbXMiLCIjcHJvY2Vzc1Bvc3RQYXJhbXMiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImV4ZWN1dGUiLCJoZWFkZXJzU3BlY3MiLCJtb2RlIiwiYm9keSIsInF1ZXJ5U3RyaW5nIiwidG9TdHJpbmciLCJmZXRjaCIsImpzb24iLCJlIiwiY29uc29sZSIsImVycm9yIiwiU0VQQVJBVE9SUyIsIk1FVEFEQVRBIiwiU1RBUlQiLCJFTkQiLCJzdGFydGVkIiwidmFsdWUiLCJwYXJzZWQiLCJwYXJlbnQiLCJjdXJyZW50VG9vbCIsInByb2Nlc3NSZXNwb25zZSIsInByb21pc2UiLCJwYXJzZSIsImV4YyIsImxvZyIsInJlc29sdmUiLCJjbGVhbkN1cnJlbnRUb29sIiwiI2NsZWFuQ3VycmVudFRvb2wiLCJoYW5kbGVNZXRhZGF0YSIsIiNoYW5kbGVNZXRhZGF0YSIsImNodW5rIiwic3BsaXQiLCJoYW5kbGVTdGFydCIsInNwbGl0dGVkIiwic3BsaXR0ZWQyIiwicHVzaCIsImhhbmRsZUVuZCIsInJlYWQiLCIjcmVhZCIsInJlYWRlciIsImdldFJlYWRlciIsImRvbmUiLCJUZXh0RGVjb2RlciIsImRlY29kZSIsInRyaWdnZXJFdmVudCIsIlBlbmRpbmdQcm9taXNlIiwib2siLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxpQkFBQTtBQUFBQyxRQUFBLENBQUFELGlCQUFBO0VBQUFFLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxHQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFSLGlCQUFBOzs7Ozs7Ozs7Ozs7Ozs7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QUEsQ0FBWUMsUUFBUSxHQUFHO1lBQzlDLEtBQUssQ0FBQWdCLGNBQUEsQ0FBZ0JFLEtBQUEsRUFBTyxLQUFLLENBQUExRCxRQUFTO1lBQzFDOztVQUdELElBQUksS0FBSyxDQUFBdEIsUUFBQSxDQUFVaUUsT0FBQSxFQUFTO1lBQzNCLEtBQUssQ0FBQWpFLFFBQUEsQ0FBVWtFLEtBQUEsSUFBU2MsS0FBQTtZQUN4QixLQUFLLENBQUFaLE1BQUEsQ0FBUWpFLE9BQUEsQ0FBUSxpQkFBaUI7WUFDdEM7O1VBR0QsSUFBSTZFLEtBQUEsQ0FBTXBDLFFBQUEsQ0FBUyxLQUFLLENBQUFpQixVQUFBLENBQVlFLEtBQUssR0FBRztZQUMzQyxLQUFLbUIsV0FBQSxDQUFZRixLQUFBLEVBQU8sS0FBSyxDQUFBMUQsUUFBUztxQkFDNUIsS0FBSyxDQUFBK0MsV0FBQSxDQUFhSixPQUFBLElBQVdlLEtBQUEsQ0FBTXBDLFFBQUEsQ0FBUyxLQUFLLENBQUFpQixVQUFBLENBQVlHLEdBQUcsR0FBRztZQUU3RSxLQUFLc0IsU0FBQSxDQUFVTixLQUFBLEVBQU8sS0FBSyxDQUFBMUQsUUFBUztZQUNwQyxLQUFLLENBQUFzRCxnQkFBQSxDQUFpQjs7VUFHdkIsS0FBSyxDQUFBdEQsUUFBQSxJQUFhMEQsS0FBQTtVQUNsQixLQUFLLENBQUFaLE1BQUEsQ0FBUTBCLFlBQUEsQ0FBYSxpQkFBaUI7VUFDM0MsS0FBSyxDQUFBMUIsTUFBQSxDQUFRMEIsWUFBQSxDQUFhLGlCQUFpQjs7TUFFN0M7TUFFQSxNQUFNNUMsUUFBUXRELEdBQUEsRUFBS2EsS0FBQSxFQUFLO1FBQ3ZCLElBQUk7VUFDSCxNQUFNOEQsT0FBQSxHQUFVLElBQUloRixLQUFBLENBQUF3RyxjQUFBLENBQWM7VUFDbEMsS0FBSyxDQUFBekUsUUFBQSxHQUFZO1VBQ2pCLE1BQU1BLFFBQUEsR0FBcUIsTUFBTWtDLEtBQUEsQ0FBTTVELEdBQUEsRUFBS2EsS0FBSztVQUVqRCxJQUFJLENBQUNhLFFBQUEsQ0FBUzBFLEVBQUEsRUFBSTtZQUNqQixNQUFNLElBQUlDLEtBQUEsQ0FBTSxpQkFBaUI7O1VBR2xDLEtBQUssQ0FBQVYsSUFBQSxDQUFNakUsUUFBQSxFQUFVaUQsT0FBTztVQUM1QixPQUFPQSxPQUFBO2lCQUNDYixDQUFBLEVBQVA7VUFDREMsT0FBQSxDQUFRQyxLQUFBLENBQU1GLENBQUM7O01BRWpCOztJQUNBckUsT0FBQSxDQUFBa0MsTUFBQSxHQUFBQSxNQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvd29ya2Zsb3cvb3V0In0=