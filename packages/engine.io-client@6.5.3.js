System.register(["engine.io-parser@5.2.2","@socket.io/component-emitter@3.1.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["engine.io-parser","5.2.2"],["@socket.io/component-emitter","3.1.0"],["engine.io-client","6.5.3"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('engine.io-parser@5.2.2', dep), dep => dependencies.set('@socket.io/component-emitter@3.1.0', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/engine.io-client.6.5.3.js
var engine_io_client_6_5_3_exports = {};
__export(engine_io_client_6_5_3_exports, {
  Socket: () => Socket,
  Transport: () => Transport,
  TransportError: () => TransportError,
  installTimerFunctions: () => installTimerFunctions,
  nextTick: () => nextTick,
  parse: () => parse,
  protocol: () => protocol2,
  transports: () => transports
});
module.exports = __toCommonJS(engine_io_client_6_5_3_exports);

// node_modules/engine.io-client/build/esm/globalThis.browser.js
var globalThisShim = (() => {
  if (typeof self !== "undefined") {
    return self;
  } else if (typeof window !== "undefined") {
    return window;
  } else {
    return Function("return this")();
  }
})();

// node_modules/engine.io-client/build/esm/util.js
function pick(obj, ...attr) {
  return attr.reduce((acc, k) => {
    if (obj.hasOwnProperty(k)) {
      acc[k] = obj[k];
    }
    return acc;
  }, {});
}
var NATIVE_SET_TIMEOUT = globalThisShim.setTimeout;
var NATIVE_CLEAR_TIMEOUT = globalThisShim.clearTimeout;
function installTimerFunctions(obj, opts) {
  if (opts.useNativeTimers) {
    obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
    obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
  } else {
    obj.setTimeoutFn = globalThisShim.setTimeout.bind(globalThisShim);
    obj.clearTimeoutFn = globalThisShim.clearTimeout.bind(globalThisShim);
  }
}
var BASE64_OVERHEAD = 1.33;
function byteLength(obj) {
  if (typeof obj === "string") {
    return utf8Length(obj);
  }
  return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
function utf8Length(str) {
  let c = 0,
    length2 = 0;
  for (let i2 = 0, l = str.length; i2 < l; i2++) {
    c = str.charCodeAt(i2);
    if (c < 128) {
      length2 += 1;
    } else if (c < 2048) {
      length2 += 2;
    } else if (c < 55296 || c >= 57344) {
      length2 += 3;
    } else {
      i2++;
      length2 += 4;
    }
  }
  return length2;
}

// node_modules/engine.io-client/build/esm/contrib/parseqs.js
function encode(obj) {
  let str = "";
  for (let i2 in obj) {
    if (obj.hasOwnProperty(i2)) {
      if (str.length) str += "&";
      str += encodeURIComponent(i2) + "=" + encodeURIComponent(obj[i2]);
    }
  }
  return str;
}
function decode(qs) {
  let qry = {};
  let pairs = qs.split("&");
  for (let i2 = 0, l = pairs.length; i2 < l; i2++) {
    let pair = pairs[i2].split("=");
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
}

// node_modules/engine.io-client/build/esm/transport.js
var import_engine = require("engine.io-parser@5.2.2");
var import_component_emitter = require("@socket.io/component-emitter@3.1.0");
var TransportError = class extends Error {
  constructor(reason, description, context) {
    super(reason);
    this.description = description;
    this.context = context;
    this.type = "TransportError";
  }
};
var Transport = class extends import_component_emitter.Emitter {
  constructor(opts) {
    super();
    this.writable = false;
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.query = opts.query;
    this.socket = opts.socket;
  }
  onError(reason, description, context) {
    super.emitReserved("error", new TransportError(reason, description, context));
    return this;
  }
  open() {
    this.readyState = "opening";
    this.doOpen();
    return this;
  }
  close() {
    if (this.readyState === "opening" || this.readyState === "open") {
      this.doClose();
      this.onClose();
    }
    return this;
  }
  send(packets) {
    if (this.readyState === "open") {
      this.write(packets);
    } else {}
  }
  onOpen() {
    this.readyState = "open";
    this.writable = true;
    super.emitReserved("open");
  }
  onData(data) {
    const packet = (0, import_engine.decodePacket)(data, this.socket.binaryType);
    this.onPacket(packet);
  }
  onPacket(packet) {
    super.emitReserved("packet", packet);
  }
  onClose(details) {
    this.readyState = "closed";
    super.emitReserved("close", details);
  }
  pause(onPause) {}
  createUri(schema, query = {}) {
    return schema + "://" + this._hostname() + this._port() + this.opts.path + this._query(query);
  }
  _hostname() {
    const hostname = this.opts.hostname;
    return hostname.indexOf(":") === -1 ? hostname : "[" + hostname + "]";
  }
  _port() {
    if (this.opts.port && (this.opts.secure && Number(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80)) {
      return ":" + this.opts.port;
    } else {
      return "";
    }
  }
  _query(query) {
    const encodedQuery = encode(query);
    return encodedQuery.length ? "?" + encodedQuery : "";
  }
};

// node_modules/engine.io-client/build/esm/contrib/yeast.js
var alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
  length = 64,
  map = {};
var seed = 0,
  i = 0,
  prev;
function encode2(num) {
  let encoded = "";
  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);
  return encoded;
}
function decode2(str) {
  let decoded = 0;
  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }
  return decoded;
}
function yeast() {
  const now = encode2(+new Date());
  if (now !== prev) return seed = 0, prev = now;
  return now + "." + encode2(seed++);
}
for (; i < length; i++) map[alphabet[i]] = i;

// node_modules/engine.io-client/build/esm/contrib/has-cors.js
var value = false;
try {
  value = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
} catch (err) {}
var hasCORS = value;

// node_modules/engine.io-client/build/esm/transports/xmlhttprequest.browser.js
function XHR(opts) {
  const xdomain = opts.xdomain;
  try {
    if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) {}
  if (!xdomain) {
    try {
      return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e) {}
  }
}
function createCookieJar() {}

// node_modules/engine.io-client/build/esm/transports/polling.js
var import_engine2 = require("engine.io-parser@5.2.2");
var import_component_emitter2 = require("@socket.io/component-emitter@3.1.0");
function empty() {}
var hasXHR2 = function () {
  const xhr = new XHR({
    xdomain: false
  });
  return null != xhr.responseType;
}();
var Polling = class extends Transport {
  constructor(opts) {
    super(opts);
    this.polling = false;
    if (typeof location !== "undefined") {
      const isSSL = "https:" === location.protocol;
      let port = location.port;
      if (!port) {
        port = isSSL ? "443" : "80";
      }
      this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
    }
    const forceBase64 = opts && opts.forceBase64;
    this.supportsBinary = hasXHR2 && !forceBase64;
    if (this.opts.withCredentials) {
      this.cookieJar = createCookieJar();
    }
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this.poll();
  }
  pause(onPause) {
    this.readyState = "pausing";
    const pause = () => {
      this.readyState = "paused";
      onPause();
    };
    if (this.polling || !this.writable) {
      let total = 0;
      if (this.polling) {
        total++;
        this.once("pollComplete", function () {
          --total || pause();
        });
      }
      if (!this.writable) {
        total++;
        this.once("drain", function () {
          --total || pause();
        });
      }
    } else {
      pause();
    }
  }
  poll() {
    this.polling = true;
    this.doPoll();
    this.emitReserved("poll");
  }
  onData(data) {
    const callback = packet => {
      if ("opening" === this.readyState && packet.type === "open") {
        this.onOpen();
      }
      if ("close" === packet.type) {
        this.onClose({
          description: "transport closed by the server"
        });
        return false;
      }
      this.onPacket(packet);
    };
    (0, import_engine2.decodePayload)(data, this.socket.binaryType).forEach(callback);
    if ("closed" !== this.readyState) {
      this.polling = false;
      this.emitReserved("pollComplete");
      if ("open" === this.readyState) {
        this.poll();
      } else {}
    }
  }
  doClose() {
    const close = () => {
      this.write([{
        type: "close"
      }]);
    };
    if ("open" === this.readyState) {
      close();
    } else {
      this.once("open", close);
    }
  }
  write(packets) {
    this.writable = false;
    (0, import_engine2.encodePayload)(packets, data => {
      this.doWrite(data, () => {
        this.writable = true;
        this.emitReserved("drain");
      });
    });
  }
  uri() {
    const schema = this.opts.secure ? "https" : "http";
    const query = this.query || {};
    if (false !== this.opts.timestampRequests) {
      query[this.opts.timestampParam] = yeast();
    }
    if (!this.supportsBinary && !query.sid) {
      query.b64 = 1;
    }
    return this.createUri(schema, query);
  }
  request(opts = {}) {
    Object.assign(opts, {
      xd: this.xd,
      cookieJar: this.cookieJar
    }, this.opts);
    return new Request(this.uri(), opts);
  }
  doWrite(data, fn) {
    const req = this.request({
      method: "POST",
      data
    });
    req.on("success", fn);
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr post error", xhrStatus, context);
    });
  }
  doPoll() {
    const req = this.request();
    req.on("data", this.onData.bind(this));
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr poll error", xhrStatus, context);
    });
    this.pollXhr = req;
  }
};
var Request = class extends import_component_emitter2.Emitter {
  constructor(uri, opts) {
    super();
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.method = opts.method || "GET";
    this.uri = uri;
    this.data = void 0 !== opts.data ? opts.data : null;
    this.create();
  }
  create() {
    var _a;
    const opts = pick(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    opts.xdomain = !!this.opts.xd;
    const xhr = this.xhr = new XHR(opts);
    try {
      xhr.open(this.method, this.uri, true);
      try {
        if (this.opts.extraHeaders) {
          xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
          for (let i2 in this.opts.extraHeaders) {
            if (this.opts.extraHeaders.hasOwnProperty(i2)) {
              xhr.setRequestHeader(i2, this.opts.extraHeaders[i2]);
            }
          }
        }
      } catch (e) {}
      if ("POST" === this.method) {
        try {
          xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch (e) {}
      }
      try {
        xhr.setRequestHeader("Accept", "*/*");
      } catch (e) {}
      (_a = this.opts.cookieJar) === null || _a === void 0 ? void 0 : _a.addCookies(xhr);
      if ("withCredentials" in xhr) {
        xhr.withCredentials = this.opts.withCredentials;
      }
      if (this.opts.requestTimeout) {
        xhr.timeout = this.opts.requestTimeout;
      }
      xhr.onreadystatechange = () => {
        var _a2;
        if (xhr.readyState === 3) {
          (_a2 = this.opts.cookieJar) === null || _a2 === void 0 ? void 0 : _a2.parseCookies(xhr);
        }
        if (4 !== xhr.readyState) return;
        if (200 === xhr.status || 1223 === xhr.status) {
          this.onLoad();
        } else {
          this.setTimeoutFn(() => {
            this.onError(typeof xhr.status === "number" ? xhr.status : 0);
          }, 0);
        }
      };
      xhr.send(this.data);
    } catch (e) {
      this.setTimeoutFn(() => {
        this.onError(e);
      }, 0);
      return;
    }
    if (typeof document !== "undefined") {
      this.index = Request.requestsCount++;
      Request.requests[this.index] = this;
    }
  }
  onError(err) {
    this.emitReserved("error", err, this.xhr);
    this.cleanup(true);
  }
  cleanup(fromError) {
    if ("undefined" === typeof this.xhr || null === this.xhr) {
      return;
    }
    this.xhr.onreadystatechange = empty;
    if (fromError) {
      try {
        this.xhr.abort();
      } catch (e) {}
    }
    if (typeof document !== "undefined") {
      delete Request.requests[this.index];
    }
    this.xhr = null;
  }
  onLoad() {
    const data = this.xhr.responseText;
    if (data !== null) {
      this.emitReserved("data", data);
      this.emitReserved("success");
      this.cleanup();
    }
  }
  abort() {
    this.cleanup();
  }
};
Request.requestsCount = 0;
Request.requests = {};
if (typeof document !== "undefined") {
  if (typeof attachEvent === "function") {
    attachEvent("onunload", unloadHandler);
  } else if (typeof addEventListener === "function") {
    const terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
    addEventListener(terminationEvent, unloadHandler, false);
  }
}
function unloadHandler() {
  for (let i2 in Request.requests) {
    if (Request.requests.hasOwnProperty(i2)) {
      Request.requests[i2].abort();
    }
  }
}

// node_modules/engine.io-client/build/esm/transports/websocket-constructor.browser.js
var nextTick = (() => {
  const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
  if (isPromiseAvailable) {
    return cb => Promise.resolve().then(cb);
  } else {
    return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
  }
})();
var WebSocket = globalThisShim.WebSocket || globalThisShim.MozWebSocket;
var usingBrowserWebSocket = true;
var defaultBinaryType = "arraybuffer";

// node_modules/engine.io-client/build/esm/transports/websocket.js
var import_engine3 = require("engine.io-parser@5.2.2");
var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
var WS = class extends Transport {
  constructor(opts) {
    super(opts);
    this.supportsBinary = !opts.forceBase64;
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check()) {
      return;
    }
    const uri = this.uri();
    const protocols = this.opts.protocols;
    const opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    if (this.opts.extraHeaders) {
      opts.headers = this.opts.extraHeaders;
    }
    try {
      this.ws = usingBrowserWebSocket && !isReactNative ? protocols ? new WebSocket(uri, protocols) : new WebSocket(uri) : new WebSocket(uri, protocols, opts);
    } catch (err) {
      return this.emitReserved("error", err);
    }
    this.ws.binaryType = this.socket.binaryType;
    this.addEventListeners();
  }
  addEventListeners() {
    this.ws.onopen = () => {
      if (this.opts.autoUnref) {
        this.ws._socket.unref();
      }
      this.onOpen();
    };
    this.ws.onclose = closeEvent => this.onClose({
      description: "websocket connection closed",
      context: closeEvent
    });
    this.ws.onmessage = ev => this.onData(ev.data);
    this.ws.onerror = e => this.onError("websocket error", e);
  }
  write(packets) {
    this.writable = false;
    for (let i2 = 0; i2 < packets.length; i2++) {
      const packet = packets[i2];
      const lastPacket = i2 === packets.length - 1;
      (0, import_engine3.encodePacket)(packet, this.supportsBinary, data => {
        const opts = {};
        if (!usingBrowserWebSocket) {
          if (packet.options) {
            opts.compress = packet.options.compress;
          }
          if (this.opts.perMessageDeflate) {
            const len = "string" === typeof data ? Buffer.byteLength(data) : data.length;
            if (len < this.opts.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        }
        try {
          if (usingBrowserWebSocket) {
            this.ws.send(data);
          } else {
            this.ws.send(data, opts);
          }
        } catch (e) {}
        if (lastPacket) {
          nextTick(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  doClose() {
    if (typeof this.ws !== "undefined") {
      this.ws.close();
      this.ws = null;
    }
  }
  uri() {
    const schema = this.opts.secure ? "wss" : "ws";
    const query = this.query || {};
    if (this.opts.timestampRequests) {
      query[this.opts.timestampParam] = yeast();
    }
    if (!this.supportsBinary) {
      query.b64 = 1;
    }
    return this.createUri(schema, query);
  }
  check() {
    return !!WebSocket;
  }
};

// node_modules/engine.io-client/build/esm/transports/webtransport.js
var import_engine4 = require("engine.io-parser@5.2.2");
var WT = class extends Transport {
  get name() {
    return "webtransport";
  }
  doOpen() {
    if (typeof WebTransport !== "function") {
      return;
    }
    this.transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    this.transport.closed.then(() => {
      this.onClose();
    }).catch(err => {
      this.onError("webtransport error", err);
    });
    this.transport.ready.then(() => {
      this.transport.createBidirectionalStream().then(stream => {
        const decoderStream = (0, import_engine4.createPacketDecoderStream)(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
        const reader = stream.readable.pipeThrough(decoderStream).getReader();
        const encoderStream = (0, import_engine4.createPacketEncoderStream)();
        encoderStream.readable.pipeTo(stream.writable);
        this.writer = encoderStream.writable.getWriter();
        const read = () => {
          reader.read().then(({
            done,
            value: value2
          }) => {
            if (done) {
              return;
            }
            this.onPacket(value2);
            read();
          }).catch(err => {});
        };
        read();
        const packet = {
          type: "open"
        };
        if (this.query.sid) {
          packet.data = `{"sid":"${this.query.sid}"}`;
        }
        this.writer.write(packet).then(() => this.onOpen());
      });
    });
  }
  write(packets) {
    this.writable = false;
    for (let i2 = 0; i2 < packets.length; i2++) {
      const packet = packets[i2];
      const lastPacket = i2 === packets.length - 1;
      this.writer.write(packet).then(() => {
        if (lastPacket) {
          nextTick(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  doClose() {
    var _a;
    (_a = this.transport) === null || _a === void 0 ? void 0 : _a.close();
  }
};

// node_modules/engine.io-client/build/esm/transports/index.js
var transports = {
  websocket: WS,
  webtransport: WT,
  polling: Polling
};

// node_modules/engine.io-client/build/esm/contrib/parseuri.js
var re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
function parse(str) {
  if (str.length > 2e3) {
    throw "URI too long";
  }
  const src = str,
    b = str.indexOf("["),
    e = str.indexOf("]");
  if (b != -1 && e != -1) {
    str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ";") + str.substring(e, str.length);
  }
  let m = re.exec(str || ""),
    uri = {},
    i2 = 14;
  while (i2--) {
    uri[parts[i2]] = m[i2] || "";
  }
  if (b != -1 && e != -1) {
    uri.source = src;
    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
    uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
    uri.ipv6uri = true;
  }
  uri.pathNames = pathNames(uri, uri["path"]);
  uri.queryKey = queryKey(uri, uri["query"]);
  return uri;
}
function pathNames(obj, path) {
  const regx = /\/{2,9}/g,
    names = path.replace(regx, "/").split("/");
  if (path.slice(0, 1) == "/" || path.length === 0) {
    names.splice(0, 1);
  }
  if (path.slice(-1) == "/") {
    names.splice(names.length - 1, 1);
  }
  return names;
}
function queryKey(uri, query) {
  const data = {};
  query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
    if ($1) {
      data[$1] = $2;
    }
  });
  return data;
}

// node_modules/engine.io-client/build/esm/socket.js
var import_component_emitter3 = require("@socket.io/component-emitter@3.1.0");
var import_engine5 = require("engine.io-parser@5.2.2");
var Socket = class extends import_component_emitter3.Emitter {
  constructor(uri, opts = {}) {
    super();
    this.binaryType = defaultBinaryType;
    this.writeBuffer = [];
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = null;
    }
    if (uri) {
      uri = parse(uri);
      opts.hostname = uri.host;
      opts.secure = uri.protocol === "https" || uri.protocol === "wss";
      opts.port = uri.port;
      if (uri.query) opts.query = uri.query;
    } else if (opts.host) {
      opts.hostname = parse(opts.host).host;
    }
    installTimerFunctions(this, opts);
    this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
    if (opts.hostname && !opts.port) {
      opts.port = this.secure ? "443" : "80";
    }
    this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
    this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
    this.transports = opts.transports || ["polling", "websocket", "webtransport"];
    this.writeBuffer = [];
    this.prevBufferLen = 0;
    this.opts = Object.assign({
      path: "/engine.io",
      agent: false,
      withCredentials: false,
      upgrade: true,
      timestampParam: "t",
      rememberUpgrade: false,
      addTrailingSlash: true,
      rejectUnauthorized: true,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: false
    }, opts);
    this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "");
    if (typeof this.opts.query === "string") {
      this.opts.query = decode(this.opts.query);
    }
    this.id = null;
    this.upgrades = null;
    this.pingInterval = null;
    this.pingTimeout = null;
    this.pingTimeoutTimer = null;
    if (typeof addEventListener === "function") {
      if (this.opts.closeOnBeforeunload) {
        this.beforeunloadEventListener = () => {
          if (this.transport) {
            this.transport.removeAllListeners();
            this.transport.close();
          }
        };
        addEventListener("beforeunload", this.beforeunloadEventListener, false);
      }
      if (this.hostname !== "localhost") {
        this.offlineEventListener = () => {
          this.onClose("transport close", {
            description: "network connection lost"
          });
        };
        addEventListener("offline", this.offlineEventListener, false);
      }
    }
    this.open();
  }
  createTransport(name) {
    const query = Object.assign({}, this.opts.query);
    query.EIO = import_engine5.protocol;
    query.transport = name;
    if (this.id) query.sid = this.id;
    const opts = Object.assign({}, this.opts, {
      query,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[name]);
    return new transports[name](opts);
  }
  open() {
    let transport;
    if (this.opts.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
      transport = "websocket";
    } else if (0 === this.transports.length) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else {
      transport = this.transports[0];
    }
    this.readyState = "opening";
    try {
      transport = this.createTransport(transport);
    } catch (e) {
      this.transports.shift();
      this.open();
      return;
    }
    transport.open();
    this.setTransport(transport);
  }
  setTransport(transport) {
    if (this.transport) {
      this.transport.removeAllListeners();
    }
    this.transport = transport;
    transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", reason => this.onClose("transport close", reason));
  }
  probe(name) {
    let transport = this.createTransport(name);
    let failed = false;
    Socket.priorWebsocketSuccess = false;
    const onTransportOpen = () => {
      if (failed) return;
      transport.send([{
        type: "ping",
        data: "probe"
      }]);
      transport.once("packet", msg => {
        if (failed) return;
        if ("pong" === msg.type && "probe" === msg.data) {
          this.upgrading = true;
          this.emitReserved("upgrading", transport);
          if (!transport) return;
          Socket.priorWebsocketSuccess = "websocket" === transport.name;
          this.transport.pause(() => {
            if (failed) return;
            if ("closed" === this.readyState) return;
            cleanup();
            this.setTransport(transport);
            transport.send([{
              type: "upgrade"
            }]);
            this.emitReserved("upgrade", transport);
            transport = null;
            this.upgrading = false;
            this.flush();
          });
        } else {
          const err = new Error("probe error");
          err.transport = transport.name;
          this.emitReserved("upgradeError", err);
        }
      });
    };
    function freezeTransport() {
      if (failed) return;
      failed = true;
      cleanup();
      transport.close();
      transport = null;
    }
    const onerror = err => {
      const error = new Error("probe error: " + err);
      error.transport = transport.name;
      freezeTransport();
      this.emitReserved("upgradeError", error);
    };
    function onTransportClose() {
      onerror("transport closed");
    }
    function onclose() {
      onerror("socket closed");
    }
    function onupgrade(to) {
      if (transport && to.name !== transport.name) {
        freezeTransport();
      }
    }
    const cleanup = () => {
      transport.removeListener("open", onTransportOpen);
      transport.removeListener("error", onerror);
      transport.removeListener("close", onTransportClose);
      this.off("close", onclose);
      this.off("upgrading", onupgrade);
    };
    transport.once("open", onTransportOpen);
    transport.once("error", onerror);
    transport.once("close", onTransportClose);
    this.once("close", onclose);
    this.once("upgrading", onupgrade);
    if (this.upgrades.indexOf("webtransport") !== -1 && name !== "webtransport") {
      this.setTimeoutFn(() => {
        if (!failed) {
          transport.open();
        }
      }, 200);
    } else {
      transport.open();
    }
  }
  onOpen() {
    this.readyState = "open";
    Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
    this.emitReserved("open");
    this.flush();
    if ("open" === this.readyState && this.opts.upgrade) {
      let i2 = 0;
      const l = this.upgrades.length;
      for (; i2 < l; i2++) {
        this.probe(this.upgrades[i2]);
      }
    }
  }
  onPacket(packet) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.emitReserved("packet", packet);
      this.emitReserved("heartbeat");
      this.resetPingTimeout();
      switch (packet.type) {
        case "open":
          this.onHandshake(JSON.parse(packet.data));
          break;
        case "ping":
          this.sendPacket("pong");
          this.emitReserved("ping");
          this.emitReserved("pong");
          break;
        case "error":
          const err = new Error("server error");
          err.code = packet.data;
          this.onError(err);
          break;
        case "message":
          this.emitReserved("data", packet.data);
          this.emitReserved("message", packet.data);
          break;
      }
    } else {}
  }
  onHandshake(data) {
    this.emitReserved("handshake", data);
    this.id = data.sid;
    this.transport.query.sid = data.sid;
    this.upgrades = this.filterUpgrades(data.upgrades);
    this.pingInterval = data.pingInterval;
    this.pingTimeout = data.pingTimeout;
    this.maxPayload = data.maxPayload;
    this.onOpen();
    if ("closed" === this.readyState) return;
    this.resetPingTimeout();
  }
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer);
    this.pingTimeoutTimer = this.setTimeoutFn(() => {
      this.onClose("ping timeout");
    }, this.pingInterval + this.pingTimeout);
    if (this.opts.autoUnref) {
      this.pingTimeoutTimer.unref();
    }
  }
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen);
    this.prevBufferLen = 0;
    if (0 === this.writeBuffer.length) {
      this.emitReserved("drain");
    } else {
      this.flush();
    }
  }
  flush() {
    if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const packets = this.getWritablePackets();
      this.transport.send(packets);
      this.prevBufferLen = packets.length;
      this.emitReserved("flush");
    }
  }
  getWritablePackets() {
    const shouldCheckPayloadSize = this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
    if (!shouldCheckPayloadSize) {
      return this.writeBuffer;
    }
    let payloadSize = 1;
    for (let i2 = 0; i2 < this.writeBuffer.length; i2++) {
      const data = this.writeBuffer[i2].data;
      if (data) {
        payloadSize += byteLength(data);
      }
      if (i2 > 0 && payloadSize > this.maxPayload) {
        return this.writeBuffer.slice(0, i2);
      }
      payloadSize += 2;
    }
    return this.writeBuffer;
  }
  write(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }
  send(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }
  sendPacket(type, data, options, fn) {
    if ("function" === typeof data) {
      fn = data;
      data = void 0;
    }
    if ("function" === typeof options) {
      fn = options;
      options = null;
    }
    if ("closing" === this.readyState || "closed" === this.readyState) {
      return;
    }
    options = options || {};
    options.compress = false !== options.compress;
    const packet = {
      type,
      data,
      options
    };
    this.emitReserved("packetCreate", packet);
    this.writeBuffer.push(packet);
    if (fn) this.once("flush", fn);
    this.flush();
  }
  close() {
    const close = () => {
      this.onClose("forced close");
      this.transport.close();
    };
    const cleanupAndClose = () => {
      this.off("upgrade", cleanupAndClose);
      this.off("upgradeError", cleanupAndClose);
      close();
    };
    const waitForUpgrade = () => {
      this.once("upgrade", cleanupAndClose);
      this.once("upgradeError", cleanupAndClose);
    };
    if ("opening" === this.readyState || "open" === this.readyState) {
      this.readyState = "closing";
      if (this.writeBuffer.length) {
        this.once("drain", () => {
          if (this.upgrading) {
            waitForUpgrade();
          } else {
            close();
          }
        });
      } else if (this.upgrading) {
        waitForUpgrade();
      } else {
        close();
      }
    }
    return this;
  }
  onError(err) {
    Socket.priorWebsocketSuccess = false;
    this.emitReserved("error", err);
    this.onClose("transport error", err);
  }
  onClose(reason, description) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.clearTimeoutFn(this.pingTimeoutTimer);
      this.transport.removeAllListeners("close");
      this.transport.close();
      this.transport.removeAllListeners();
      if (typeof removeEventListener === "function") {
        removeEventListener("beforeunload", this.beforeunloadEventListener, false);
        removeEventListener("offline", this.offlineEventListener, false);
      }
      this.readyState = "closed";
      this.id = null;
      this.emitReserved("close", reason, description);
      this.writeBuffer = [];
      this.prevBufferLen = 0;
    }
  }
  filterUpgrades(upgrades) {
    const filteredUpgrades = [];
    let i2 = 0;
    const j = upgrades.length;
    for (; i2 < j; i2++) {
      if (~this.transports.indexOf(upgrades[i2])) filteredUpgrades.push(upgrades[i2]);
    }
    return filteredUpgrades;
  }
};
Socket.protocol = import_engine5.protocol;

// node_modules/engine.io-client/build/esm/index.js
var protocol2 = Socket.protocol;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9lbmdpbmUuaW8tY2xpZW50LjYuNS4zLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2dsb2JhbFRoaXMuYnJvd3Nlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS91dGlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2NvbnRyaWIvcGFyc2Vxcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnQuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vY29udHJpYi95ZWFzdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS9jb250cmliL2hhcy1jb3JzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3RyYW5zcG9ydHMveG1saHR0cHJlcXVlc3QuYnJvd3Nlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL3BvbGxpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vdHJhbnNwb3J0cy93ZWJzb2NrZXQtY29uc3RydWN0b3IuYnJvd3Nlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL3dlYnNvY2tldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL3dlYnRyYW5zcG9ydC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2NvbnRyaWIvcGFyc2V1cmkuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vc29ja2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2luZGV4LmpzIl0sIm5hbWVzIjpbImVuZ2luZV9pb19jbGllbnRfNl81XzNfZXhwb3J0cyIsIl9fZXhwb3J0IiwiU29ja2V0IiwiVHJhbnNwb3J0IiwiVHJhbnNwb3J0RXJyb3IiLCJpbnN0YWxsVGltZXJGdW5jdGlvbnMiLCJuZXh0VGljayIsInBhcnNlIiwicHJvdG9jb2wiLCJwcm90b2NvbDIiLCJ0cmFuc3BvcnRzIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImdsb2JhbFRoaXNTaGltIiwic2VsZiIsIndpbmRvdyIsIkZ1bmN0aW9uIiwicGljayIsIm9iaiIsImF0dHIiLCJyZWR1Y2UiLCJhY2MiLCJrIiwiaGFzT3duUHJvcGVydHkiLCJOQVRJVkVfU0VUX1RJTUVPVVQiLCJzZXRUaW1lb3V0IiwiTkFUSVZFX0NMRUFSX1RJTUVPVVQiLCJjbGVhclRpbWVvdXQiLCJvcHRzIiwidXNlTmF0aXZlVGltZXJzIiwic2V0VGltZW91dEZuIiwiYmluZCIsImNsZWFyVGltZW91dEZuIiwiQkFTRTY0X09WRVJIRUFEIiwiYnl0ZUxlbmd0aCIsInV0ZjhMZW5ndGgiLCJNYXRoIiwiY2VpbCIsInNpemUiLCJzdHIiLCJjIiwibGVuZ3RoMiIsImkyIiwibCIsImxlbmd0aCIsImNoYXJDb2RlQXQiLCJlbmNvZGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJkZWNvZGUiLCJxcyIsInFyeSIsInBhaXJzIiwic3BsaXQiLCJwYWlyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiaW1wb3J0X2VuZ2luZSIsInJlcXVpcmUiLCJpbXBvcnRfY29tcG9uZW50X2VtaXR0ZXIiLCJFcnJvciIsImNvbnN0cnVjdG9yIiwicmVhc29uIiwiZGVzY3JpcHRpb24iLCJjb250ZXh0IiwidHlwZSIsIkVtaXR0ZXIiLCJ3cml0YWJsZSIsInF1ZXJ5Iiwic29ja2V0Iiwib25FcnJvciIsImVtaXRSZXNlcnZlZCIsIm9wZW4iLCJyZWFkeVN0YXRlIiwiZG9PcGVuIiwiY2xvc2UiLCJkb0Nsb3NlIiwib25DbG9zZSIsInNlbmQiLCJwYWNrZXRzIiwid3JpdGUiLCJvbk9wZW4iLCJvbkRhdGEiLCJkYXRhIiwicGFja2V0IiwiZGVjb2RlUGFja2V0IiwiYmluYXJ5VHlwZSIsIm9uUGFja2V0IiwiZGV0YWlscyIsInBhdXNlIiwib25QYXVzZSIsImNyZWF0ZVVyaSIsInNjaGVtYSIsIl9ob3N0bmFtZSIsIl9wb3J0IiwicGF0aCIsIl9xdWVyeSIsImhvc3RuYW1lIiwiaW5kZXhPZiIsInBvcnQiLCJzZWN1cmUiLCJOdW1iZXIiLCJlbmNvZGVkUXVlcnkiLCJhbHBoYWJldCIsIm1hcCIsInNlZWQiLCJpIiwicHJldiIsImVuY29kZTIiLCJudW0iLCJlbmNvZGVkIiwiZmxvb3IiLCJkZWNvZGUyIiwiZGVjb2RlZCIsImNoYXJBdCIsInllYXN0Iiwibm93IiwiRGF0ZSIsInZhbHVlIiwiWE1MSHR0cFJlcXVlc3QiLCJlcnIiLCJoYXNDT1JTIiwiWEhSIiwieGRvbWFpbiIsImUiLCJjb25jYXQiLCJqb2luIiwiY3JlYXRlQ29va2llSmFyIiwiaW1wb3J0X2VuZ2luZTIiLCJpbXBvcnRfY29tcG9uZW50X2VtaXR0ZXIyIiwiZW1wdHkiLCJoYXNYSFIyIiwieGhyIiwicmVzcG9uc2VUeXBlIiwiUG9sbGluZyIsInBvbGxpbmciLCJsb2NhdGlvbiIsImlzU1NMIiwieGQiLCJmb3JjZUJhc2U2NCIsInN1cHBvcnRzQmluYXJ5Iiwid2l0aENyZWRlbnRpYWxzIiwiY29va2llSmFyIiwibmFtZSIsInBvbGwiLCJ0b3RhbCIsIm9uY2UiLCJkb1BvbGwiLCJjYWxsYmFjayIsImRlY29kZVBheWxvYWQiLCJmb3JFYWNoIiwiZW5jb2RlUGF5bG9hZCIsImRvV3JpdGUiLCJ1cmkiLCJ0aW1lc3RhbXBSZXF1ZXN0cyIsInRpbWVzdGFtcFBhcmFtIiwic2lkIiwiYjY0IiwicmVxdWVzdCIsIk9iamVjdCIsImFzc2lnbiIsIlJlcXVlc3QiLCJmbiIsInJlcSIsIm1ldGhvZCIsIm9uIiwieGhyU3RhdHVzIiwicG9sbFhociIsImNyZWF0ZSIsIl9hIiwiZXh0cmFIZWFkZXJzIiwic2V0RGlzYWJsZUhlYWRlckNoZWNrIiwic2V0UmVxdWVzdEhlYWRlciIsImFkZENvb2tpZXMiLCJyZXF1ZXN0VGltZW91dCIsInRpbWVvdXQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJfYTIiLCJwYXJzZUNvb2tpZXMiLCJzdGF0dXMiLCJvbkxvYWQiLCJkb2N1bWVudCIsImluZGV4IiwicmVxdWVzdHNDb3VudCIsInJlcXVlc3RzIiwiY2xlYW51cCIsImZyb21FcnJvciIsImFib3J0IiwicmVzcG9uc2VUZXh0IiwiYXR0YWNoRXZlbnQiLCJ1bmxvYWRIYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRlcm1pbmF0aW9uRXZlbnQiLCJpc1Byb21pc2VBdmFpbGFibGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNiIiwidGhlbiIsIldlYlNvY2tldCIsIk1veldlYlNvY2tldCIsInVzaW5nQnJvd3NlcldlYlNvY2tldCIsImRlZmF1bHRCaW5hcnlUeXBlIiwiaW1wb3J0X2VuZ2luZTMiLCJpc1JlYWN0TmF0aXZlIiwibmF2aWdhdG9yIiwicHJvZHVjdCIsInRvTG93ZXJDYXNlIiwiV1MiLCJjaGVjayIsInByb3RvY29scyIsImhlYWRlcnMiLCJ3cyIsImFkZEV2ZW50TGlzdGVuZXJzIiwib25vcGVuIiwiYXV0b1VucmVmIiwiX3NvY2tldCIsInVucmVmIiwib25jbG9zZSIsImNsb3NlRXZlbnQiLCJvbm1lc3NhZ2UiLCJldiIsIm9uZXJyb3IiLCJsYXN0UGFja2V0IiwiZW5jb2RlUGFja2V0Iiwib3B0aW9ucyIsImNvbXByZXNzIiwicGVyTWVzc2FnZURlZmxhdGUiLCJsZW4iLCJCdWZmZXIiLCJ0aHJlc2hvbGQiLCJpbXBvcnRfZW5naW5lNCIsIldUIiwiV2ViVHJhbnNwb3J0IiwidHJhbnNwb3J0IiwidHJhbnNwb3J0T3B0aW9ucyIsImNsb3NlZCIsImNhdGNoIiwicmVhZHkiLCJjcmVhdGVCaWRpcmVjdGlvbmFsU3RyZWFtIiwic3RyZWFtIiwiZGVjb2RlclN0cmVhbSIsImNyZWF0ZVBhY2tldERlY29kZXJTdHJlYW0iLCJNQVhfU0FGRV9JTlRFR0VSIiwicmVhZGVyIiwicmVhZGFibGUiLCJwaXBlVGhyb3VnaCIsImdldFJlYWRlciIsImVuY29kZXJTdHJlYW0iLCJjcmVhdGVQYWNrZXRFbmNvZGVyU3RyZWFtIiwicGlwZVRvIiwid3JpdGVyIiwiZ2V0V3JpdGVyIiwicmVhZCIsImRvbmUiLCJ2YWx1ZTIiLCJ3ZWJzb2NrZXQiLCJ3ZWJ0cmFuc3BvcnQiLCJyZSIsInBhcnRzIiwic3JjIiwiYiIsInN1YnN0cmluZyIsInJlcGxhY2UiLCJtIiwiZXhlYyIsInNvdXJjZSIsImhvc3QiLCJhdXRob3JpdHkiLCJpcHY2dXJpIiwicGF0aE5hbWVzIiwicXVlcnlLZXkiLCJyZWd4IiwibmFtZXMiLCJzbGljZSIsInNwbGljZSIsIiQwIiwiJDEiLCIkMiIsImltcG9ydF9jb21wb25lbnRfZW1pdHRlcjMiLCJpbXBvcnRfZW5naW5lNSIsIndyaXRlQnVmZmVyIiwicHJldkJ1ZmZlckxlbiIsImFnZW50IiwidXBncmFkZSIsInJlbWVtYmVyVXBncmFkZSIsImFkZFRyYWlsaW5nU2xhc2giLCJyZWplY3RVbmF1dGhvcml6ZWQiLCJjbG9zZU9uQmVmb3JldW5sb2FkIiwiaWQiLCJ1cGdyYWRlcyIsInBpbmdJbnRlcnZhbCIsInBpbmdUaW1lb3V0IiwicGluZ1RpbWVvdXRUaW1lciIsImJlZm9yZXVubG9hZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJvZmZsaW5lRXZlbnRMaXN0ZW5lciIsImNyZWF0ZVRyYW5zcG9ydCIsIkVJTyIsInByaW9yV2Vic29ja2V0U3VjY2VzcyIsInNoaWZ0Iiwic2V0VHJhbnNwb3J0Iiwib25EcmFpbiIsInByb2JlIiwiZmFpbGVkIiwib25UcmFuc3BvcnRPcGVuIiwibXNnIiwidXBncmFkaW5nIiwiZmx1c2giLCJmcmVlemVUcmFuc3BvcnQiLCJlcnJvciIsIm9uVHJhbnNwb3J0Q2xvc2UiLCJvbnVwZ3JhZGUiLCJ0byIsInJlbW92ZUxpc3RlbmVyIiwib2ZmIiwicmVzZXRQaW5nVGltZW91dCIsIm9uSGFuZHNoYWtlIiwiSlNPTiIsInNlbmRQYWNrZXQiLCJjb2RlIiwiZmlsdGVyVXBncmFkZXMiLCJtYXhQYXlsb2FkIiwiZ2V0V3JpdGFibGVQYWNrZXRzIiwic2hvdWxkQ2hlY2tQYXlsb2FkU2l6ZSIsInBheWxvYWRTaXplIiwicHVzaCIsImNsZWFudXBBbmRDbG9zZSIsIndhaXRGb3JVcGdyYWRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZpbHRlcmVkVXBncmFkZXMiLCJqIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDhCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsOEJBQUE7RUFBQUUsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUMsU0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBYiw4QkFBQTs7O0FDQU8sSUFBTWMsY0FBQSxJQUFrQixNQUFNO0VBQ2pDLElBQUksT0FBT0MsSUFBQSxLQUFTLGFBQWE7SUFDN0IsT0FBT0EsSUFBQTtFQUNYLFdBQ1MsT0FBT0MsTUFBQSxLQUFXLGFBQWE7SUFDcEMsT0FBT0EsTUFBQTtFQUNYLE9BQ0s7SUFDRCxPQUFPQyxRQUFBLENBQVMsYUFBYSxFQUFFO0VBQ25DO0FBQ0osR0FBRzs7O0FDVEksU0FBU0MsS0FBS0MsR0FBQSxLQUFRQyxJQUFBLEVBQU07RUFDL0IsT0FBT0EsSUFBQSxDQUFLQyxNQUFBLENBQU8sQ0FBQ0MsR0FBQSxFQUFLQyxDQUFBLEtBQU07SUFDM0IsSUFBSUosR0FBQSxDQUFJSyxjQUFBLENBQWVELENBQUMsR0FBRztNQUN2QkQsR0FBQSxDQUFJQyxDQUFBLElBQUtKLEdBQUEsQ0FBSUksQ0FBQTtJQUNqQjtJQUNBLE9BQU9ELEdBQUE7RUFDWCxHQUFHLENBQUMsQ0FBQztBQUNUO0FBRUEsSUFBTUcsa0JBQUEsR0FBcUJYLGNBQUEsQ0FBV1ksVUFBQTtBQUN0QyxJQUFNQyxvQkFBQSxHQUF1QmIsY0FBQSxDQUFXYyxZQUFBO0FBQ2pDLFNBQVN2QixzQkFBc0JjLEdBQUEsRUFBS1UsSUFBQSxFQUFNO0VBQzdDLElBQUlBLElBQUEsQ0FBS0MsZUFBQSxFQUFpQjtJQUN0QlgsR0FBQSxDQUFJWSxZQUFBLEdBQWVOLGtCQUFBLENBQW1CTyxJQUFBLENBQUtsQixjQUFVO0lBQ3JESyxHQUFBLENBQUljLGNBQUEsR0FBaUJOLG9CQUFBLENBQXFCSyxJQUFBLENBQUtsQixjQUFVO0VBQzdELE9BQ0s7SUFDREssR0FBQSxDQUFJWSxZQUFBLEdBQWVqQixjQUFBLENBQVdZLFVBQUEsQ0FBV00sSUFBQSxDQUFLbEIsY0FBVTtJQUN4REssR0FBQSxDQUFJYyxjQUFBLEdBQWlCbkIsY0FBQSxDQUFXYyxZQUFBLENBQWFJLElBQUEsQ0FBS2xCLGNBQVU7RUFDaEU7QUFDSjtBQUVBLElBQU1vQixlQUFBLEdBQWtCO0FBRWpCLFNBQVNDLFdBQVdoQixHQUFBLEVBQUs7RUFDNUIsSUFBSSxPQUFPQSxHQUFBLEtBQVEsVUFBVTtJQUN6QixPQUFPaUIsVUFBQSxDQUFXakIsR0FBRztFQUN6QjtFQUVBLE9BQU9rQixJQUFBLENBQUtDLElBQUEsRUFBTW5CLEdBQUEsQ0FBSWdCLFVBQUEsSUFBY2hCLEdBQUEsQ0FBSW9CLElBQUEsSUFBUUwsZUFBZTtBQUNuRTtBQUNBLFNBQVNFLFdBQVdJLEdBQUEsRUFBSztFQUNyQixJQUFJQyxDQUFBLEdBQUk7SUFBR0MsT0FBQSxHQUFTO0VBQ3BCLFNBQVNDLEVBQUEsR0FBSSxHQUFHQyxDQUFBLEdBQUlKLEdBQUEsQ0FBSUssTUFBQSxFQUFRRixFQUFBLEdBQUlDLENBQUEsRUFBR0QsRUFBQSxJQUFLO0lBQ3hDRixDQUFBLEdBQUlELEdBQUEsQ0FBSU0sVUFBQSxDQUFXSCxFQUFDO0lBQ3BCLElBQUlGLENBQUEsR0FBSSxLQUFNO01BQ1ZDLE9BQUEsSUFBVTtJQUNkLFdBQ1NELENBQUEsR0FBSSxNQUFPO01BQ2hCQyxPQUFBLElBQVU7SUFDZCxXQUNTRCxDQUFBLEdBQUksU0FBVUEsQ0FBQSxJQUFLLE9BQVE7TUFDaENDLE9BQUEsSUFBVTtJQUNkLE9BQ0s7TUFDREMsRUFBQTtNQUNBRCxPQUFBLElBQVU7SUFDZDtFQUNKO0VBQ0EsT0FBT0EsT0FBQTtBQUNYOzs7QUMzQ08sU0FBU0ssT0FBTzVCLEdBQUEsRUFBSztFQUN4QixJQUFJcUIsR0FBQSxHQUFNO0VBQ1YsU0FBU0csRUFBQSxJQUFLeEIsR0FBQSxFQUFLO0lBQ2YsSUFBSUEsR0FBQSxDQUFJSyxjQUFBLENBQWVtQixFQUFDLEdBQUc7TUFDdkIsSUFBSUgsR0FBQSxDQUFJSyxNQUFBLEVBQ0pMLEdBQUEsSUFBTztNQUNYQSxHQUFBLElBQU9RLGtCQUFBLENBQW1CTCxFQUFDLElBQUksTUFBTUssa0JBQUEsQ0FBbUI3QixHQUFBLENBQUl3QixFQUFBLENBQUU7SUFDbEU7RUFDSjtFQUNBLE9BQU9ILEdBQUE7QUFDWDtBQU9PLFNBQVNTLE9BQU9DLEVBQUEsRUFBSTtFQUN2QixJQUFJQyxHQUFBLEdBQU0sQ0FBQztFQUNYLElBQUlDLEtBQUEsR0FBUUYsRUFBQSxDQUFHRyxLQUFBLENBQU0sR0FBRztFQUN4QixTQUFTVixFQUFBLEdBQUksR0FBR0MsQ0FBQSxHQUFJUSxLQUFBLENBQU1QLE1BQUEsRUFBUUYsRUFBQSxHQUFJQyxDQUFBLEVBQUdELEVBQUEsSUFBSztJQUMxQyxJQUFJVyxJQUFBLEdBQU9GLEtBQUEsQ0FBTVQsRUFBQSxFQUFHVSxLQUFBLENBQU0sR0FBRztJQUM3QkYsR0FBQSxDQUFJSSxrQkFBQSxDQUFtQkQsSUFBQSxDQUFLLEVBQUUsS0FBS0Msa0JBQUEsQ0FBbUJELElBQUEsQ0FBSyxFQUFFO0VBQ2pFO0VBQ0EsT0FBT0gsR0FBQTtBQUNYOzs7QUNqQ0EsSUFBQUssYUFBQSxHQUE2QkMsT0FBQTtBQUM3QixJQUFBQyx3QkFBQSxHQUF3QkQsT0FBQTtBQUdqQixJQUFNckQsY0FBQSxHQUFOLGNBQTZCdUQsS0FBQSxDQUFNO0VBQ3RDQyxZQUFZQyxNQUFBLEVBQVFDLFdBQUEsRUFBYUMsT0FBQSxFQUFTO0lBQ3RDLE1BQU1GLE1BQU07SUFDWixLQUFLQyxXQUFBLEdBQWNBLFdBQUE7SUFDbkIsS0FBS0MsT0FBQSxHQUFVQSxPQUFBO0lBQ2YsS0FBS0MsSUFBQSxHQUFPO0VBQ2hCO0FBQ0o7QUFDTyxJQUFNN0QsU0FBQSxHQUFOLGNBQXdCdUQsd0JBQUEsQ0FBQU8sT0FBQSxDQUFRO0VBT25DTCxZQUFZL0IsSUFBQSxFQUFNO0lBQ2QsTUFBTTtJQUNOLEtBQUtxQyxRQUFBLEdBQVc7SUFDaEI3RCxxQkFBQSxDQUFzQixNQUFNd0IsSUFBSTtJQUNoQyxLQUFLQSxJQUFBLEdBQU9BLElBQUE7SUFDWixLQUFLc0MsS0FBQSxHQUFRdEMsSUFBQSxDQUFLc0MsS0FBQTtJQUNsQixLQUFLQyxNQUFBLEdBQVN2QyxJQUFBLENBQUt1QyxNQUFBO0VBQ3ZCO0VBVUFDLFFBQVFSLE1BQUEsRUFBUUMsV0FBQSxFQUFhQyxPQUFBLEVBQVM7SUFDbEMsTUFBTU8sWUFBQSxDQUFhLFNBQVMsSUFBSWxFLGNBQUEsQ0FBZXlELE1BQUEsRUFBUUMsV0FBQSxFQUFhQyxPQUFPLENBQUM7SUFDNUUsT0FBTztFQUNYO0VBSUFRLEtBQUEsRUFBTztJQUNILEtBQUtDLFVBQUEsR0FBYTtJQUNsQixLQUFLQyxNQUFBLENBQU87SUFDWixPQUFPO0VBQ1g7RUFJQUMsTUFBQSxFQUFRO0lBQ0osSUFBSSxLQUFLRixVQUFBLEtBQWUsYUFBYSxLQUFLQSxVQUFBLEtBQWUsUUFBUTtNQUM3RCxLQUFLRyxPQUFBLENBQVE7TUFDYixLQUFLQyxPQUFBLENBQVE7SUFDakI7SUFDQSxPQUFPO0VBQ1g7RUFNQUMsS0FBS0MsT0FBQSxFQUFTO0lBQ1YsSUFBSSxLQUFLTixVQUFBLEtBQWUsUUFBUTtNQUM1QixLQUFLTyxLQUFBLENBQU1ELE9BQU87SUFDdEIsT0FDSyxDQUVMO0VBQ0o7RUFNQUUsT0FBQSxFQUFTO0lBQ0wsS0FBS1IsVUFBQSxHQUFhO0lBQ2xCLEtBQUtOLFFBQUEsR0FBVztJQUNoQixNQUFNSSxZQUFBLENBQWEsTUFBTTtFQUM3QjtFQU9BVyxPQUFPQyxJQUFBLEVBQU07SUFDVCxNQUFNQyxNQUFBLE9BQVMzQixhQUFBLENBQUE0QixZQUFBLEVBQWFGLElBQUEsRUFBTSxLQUFLZCxNQUFBLENBQU9pQixVQUFVO0lBQ3hELEtBQUtDLFFBQUEsQ0FBU0gsTUFBTTtFQUN4QjtFQU1BRyxTQUFTSCxNQUFBLEVBQVE7SUFDYixNQUFNYixZQUFBLENBQWEsVUFBVWEsTUFBTTtFQUN2QztFQU1BUCxRQUFRVyxPQUFBLEVBQVM7SUFDYixLQUFLZixVQUFBLEdBQWE7SUFDbEIsTUFBTUYsWUFBQSxDQUFhLFNBQVNpQixPQUFPO0VBQ3ZDO0VBTUFDLE1BQU1DLE9BQUEsRUFBUyxDQUFFO0VBQ2pCQyxVQUFVQyxNQUFBLEVBQVF4QixLQUFBLEdBQVEsQ0FBQyxHQUFHO0lBQzFCLE9BQVF3QixNQUFBLEdBQ0osUUFDQSxLQUFLQyxTQUFBLENBQVUsSUFDZixLQUFLQyxLQUFBLENBQU0sSUFDWCxLQUFLaEUsSUFBQSxDQUFLaUUsSUFBQSxHQUNWLEtBQUtDLE1BQUEsQ0FBTzVCLEtBQUs7RUFDekI7RUFDQXlCLFVBQUEsRUFBWTtJQUNSLE1BQU1JLFFBQUEsR0FBVyxLQUFLbkUsSUFBQSxDQUFLbUUsUUFBQTtJQUMzQixPQUFPQSxRQUFBLENBQVNDLE9BQUEsQ0FBUSxHQUFHLE1BQU0sS0FBS0QsUUFBQSxHQUFXLE1BQU1BLFFBQUEsR0FBVztFQUN0RTtFQUNBSCxNQUFBLEVBQVE7SUFDSixJQUFJLEtBQUtoRSxJQUFBLENBQUtxRSxJQUFBLEtBQ1IsS0FBS3JFLElBQUEsQ0FBS3NFLE1BQUEsSUFBVUMsTUFBQSxDQUFPLEtBQUt2RSxJQUFBLENBQUtxRSxJQUFBLEtBQVMsR0FBRyxLQUM5QyxDQUFDLEtBQUtyRSxJQUFBLENBQUtzRSxNQUFBLElBQVVDLE1BQUEsQ0FBTyxLQUFLdkUsSUFBQSxDQUFLcUUsSUFBSSxNQUFNLEtBQU07TUFDM0QsT0FBTyxNQUFNLEtBQUtyRSxJQUFBLENBQUtxRSxJQUFBO0lBQzNCLE9BQ0s7TUFDRCxPQUFPO0lBQ1g7RUFDSjtFQUNBSCxPQUFPNUIsS0FBQSxFQUFPO0lBQ1YsTUFBTWtDLFlBQUEsR0FBZXRELE1BQUEsQ0FBT29CLEtBQUs7SUFDakMsT0FBT2tDLFlBQUEsQ0FBYXhELE1BQUEsR0FBUyxNQUFNd0QsWUFBQSxHQUFlO0VBQ3REO0FBQ0o7OztBQzFJQSxJQUFNQyxRQUFBLEdBQVcsbUVBQW1FakQsS0FBQSxDQUFNLEVBQUU7RUFBR1IsTUFBQSxHQUFTO0VBQUkwRCxHQUFBLEdBQU0sQ0FBQztBQUNuSCxJQUFJQyxJQUFBLEdBQU87RUFBR0MsQ0FBQSxHQUFJO0VBQUdDLElBQUE7QUFRZCxTQUFTQyxRQUFPQyxHQUFBLEVBQUs7RUFDeEIsSUFBSUMsT0FBQSxHQUFVO0VBQ2QsR0FBRztJQUNDQSxPQUFBLEdBQVVQLFFBQUEsQ0FBU00sR0FBQSxHQUFNL0QsTUFBQSxJQUFVZ0UsT0FBQTtJQUNuQ0QsR0FBQSxHQUFNdkUsSUFBQSxDQUFLeUUsS0FBQSxDQUFNRixHQUFBLEdBQU0vRCxNQUFNO0VBQ2pDLFNBQVMrRCxHQUFBLEdBQU07RUFDZixPQUFPQyxPQUFBO0FBQ1g7QUFRTyxTQUFTRSxRQUFPdkUsR0FBQSxFQUFLO0VBQ3hCLElBQUl3RSxPQUFBLEdBQVU7RUFDZCxLQUFLUCxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJakUsR0FBQSxDQUFJSyxNQUFBLEVBQVE0RCxDQUFBLElBQUs7SUFDN0JPLE9BQUEsR0FBVUEsT0FBQSxHQUFVbkUsTUFBQSxHQUFTMEQsR0FBQSxDQUFJL0QsR0FBQSxDQUFJeUUsTUFBQSxDQUFPUixDQUFDO0VBQ2pEO0VBQ0EsT0FBT08sT0FBQTtBQUNYO0FBT08sU0FBU0UsTUFBQSxFQUFRO0VBQ3BCLE1BQU1DLEdBQUEsR0FBTVIsT0FBQSxDQUFPLENBQUMsSUFBSVMsSUFBQSxDQUFLLENBQUM7RUFDOUIsSUFBSUQsR0FBQSxLQUFRVCxJQUFBLEVBQ1IsT0FBT0YsSUFBQSxHQUFPLEdBQUdFLElBQUEsR0FBT1MsR0FBQTtFQUM1QixPQUFPQSxHQUFBLEdBQU0sTUFBTVIsT0FBQSxDQUFPSCxJQUFBLEVBQU07QUFDcEM7QUFJQSxPQUFPQyxDQUFBLEdBQUk1RCxNQUFBLEVBQVE0RCxDQUFBLElBQ2ZGLEdBQUEsQ0FBSUQsUUFBQSxDQUFTRyxDQUFBLEtBQU1BLENBQUE7OztBQ2hEdkIsSUFBSVksS0FBQSxHQUFRO0FBQ1osSUFBSTtFQUNBQSxLQUFBLEdBQVEsT0FBT0MsY0FBQSxLQUFtQixlQUM5QixxQkFBcUIsSUFBSUEsY0FBQSxDQUFlO0FBQ2hELFNBQ09DLEdBQUEsRUFBUCxDQUdBO0FBQ08sSUFBTUMsT0FBQSxHQUFVSCxLQUFBOzs7QUNQaEIsU0FBU0ksSUFBSTVGLElBQUEsRUFBTTtFQUN0QixNQUFNNkYsT0FBQSxHQUFVN0YsSUFBQSxDQUFLNkYsT0FBQTtFQUVyQixJQUFJO0lBQ0EsSUFBSSxnQkFBZ0IsT0FBT0osY0FBQSxLQUFtQixDQUFDSSxPQUFBLElBQVdGLE9BQUEsR0FBVTtNQUNoRSxPQUFPLElBQUlGLGNBQUEsQ0FBZTtJQUM5QjtFQUNKLFNBQ09LLENBQUEsRUFBUCxDQUFZO0VBQ1osSUFBSSxDQUFDRCxPQUFBLEVBQVM7SUFDVixJQUFJO01BQ0EsT0FBTyxJQUFJNUcsY0FBQSxDQUFXLENBQUMsUUFBUSxFQUFFOEcsTUFBQSxDQUFPLFFBQVEsRUFBRUMsSUFBQSxDQUFLLEdBQUcsR0FBRyxtQkFBbUI7SUFDcEYsU0FDT0YsQ0FBQSxFQUFQLENBQVk7RUFDaEI7QUFDSjtBQUNPLFNBQVNHLGdCQUFBLEVBQWtCLENBQUU7OztBQ2pCcEMsSUFBQUMsY0FBQSxHQUE2Q3RFLE9BQUE7QUFFN0MsSUFBQXVFLHlCQUFBLEdBQXdCdkUsT0FBQTtBQUd4QixTQUFTd0UsTUFBQSxFQUFRLENBQUU7QUFDbkIsSUFBTUMsT0FBQSxHQUFXLFlBQVk7RUFDekIsTUFBTUMsR0FBQSxHQUFNLElBQUlWLEdBQUEsQ0FBZTtJQUMzQkMsT0FBQSxFQUFTO0VBQ2IsQ0FBQztFQUNELE9BQU8sUUFBUVMsR0FBQSxDQUFJQyxZQUFBO0FBQ3ZCLEVBQUc7QUFDSSxJQUFNQyxPQUFBLEdBQU4sY0FBc0JsSSxTQUFBLENBQVU7RUFPbkN5RCxZQUFZL0IsSUFBQSxFQUFNO0lBQ2QsTUFBTUEsSUFBSTtJQUNWLEtBQUt5RyxPQUFBLEdBQVU7SUFDZixJQUFJLE9BQU9DLFFBQUEsS0FBYSxhQUFhO01BQ2pDLE1BQU1DLEtBQUEsR0FBUSxhQUFhRCxRQUFBLENBQVMvSCxRQUFBO01BQ3BDLElBQUkwRixJQUFBLEdBQU9xQyxRQUFBLENBQVNyQyxJQUFBO01BRXBCLElBQUksQ0FBQ0EsSUFBQSxFQUFNO1FBQ1BBLElBQUEsR0FBT3NDLEtBQUEsR0FBUSxRQUFRO01BQzNCO01BQ0EsS0FBS0MsRUFBQSxHQUNBLE9BQU9GLFFBQUEsS0FBYSxlQUNqQjFHLElBQUEsQ0FBS21FLFFBQUEsS0FBYXVDLFFBQUEsQ0FBU3ZDLFFBQUEsSUFDM0JFLElBQUEsS0FBU3JFLElBQUEsQ0FBS3FFLElBQUE7SUFDMUI7SUFJQSxNQUFNd0MsV0FBQSxHQUFjN0csSUFBQSxJQUFRQSxJQUFBLENBQUs2RyxXQUFBO0lBQ2pDLEtBQUtDLGNBQUEsR0FBaUJULE9BQUEsSUFBVyxDQUFDUSxXQUFBO0lBQ2xDLElBQUksS0FBSzdHLElBQUEsQ0FBSytHLGVBQUEsRUFBaUI7TUFDM0IsS0FBS0MsU0FBQSxHQUFZZixlQUFBLENBQWdCO0lBQ3JDO0VBQ0o7RUFDQSxJQUFJZ0IsS0FBQSxFQUFPO0lBQ1AsT0FBTztFQUNYO0VBT0FyRSxPQUFBLEVBQVM7SUFDTCxLQUFLc0UsSUFBQSxDQUFLO0VBQ2Q7RUFPQXZELE1BQU1DLE9BQUEsRUFBUztJQUNYLEtBQUtqQixVQUFBLEdBQWE7SUFDbEIsTUFBTWdCLEtBQUEsR0FBUUEsQ0FBQSxLQUFNO01BQ2hCLEtBQUtoQixVQUFBLEdBQWE7TUFDbEJpQixPQUFBLENBQVE7SUFDWjtJQUNBLElBQUksS0FBSzZDLE9BQUEsSUFBVyxDQUFDLEtBQUtwRSxRQUFBLEVBQVU7TUFDaEMsSUFBSThFLEtBQUEsR0FBUTtNQUNaLElBQUksS0FBS1YsT0FBQSxFQUFTO1FBQ2RVLEtBQUE7UUFDQSxLQUFLQyxJQUFBLENBQUssZ0JBQWdCLFlBQVk7VUFDbEMsRUFBRUQsS0FBQSxJQUFTeEQsS0FBQSxDQUFNO1FBQ3JCLENBQUM7TUFDTDtNQUNBLElBQUksQ0FBQyxLQUFLdEIsUUFBQSxFQUFVO1FBQ2hCOEUsS0FBQTtRQUNBLEtBQUtDLElBQUEsQ0FBSyxTQUFTLFlBQVk7VUFDM0IsRUFBRUQsS0FBQSxJQUFTeEQsS0FBQSxDQUFNO1FBQ3JCLENBQUM7TUFDTDtJQUNKLE9BQ0s7TUFDREEsS0FBQSxDQUFNO0lBQ1Y7RUFDSjtFQU1BdUQsS0FBQSxFQUFPO0lBQ0gsS0FBS1QsT0FBQSxHQUFVO0lBQ2YsS0FBS1ksTUFBQSxDQUFPO0lBQ1osS0FBSzVFLFlBQUEsQ0FBYSxNQUFNO0VBQzVCO0VBTUFXLE9BQU9DLElBQUEsRUFBTTtJQUNULE1BQU1pRSxRQUFBLEdBQVloRSxNQUFBLElBQVc7TUFFekIsSUFBSSxjQUFjLEtBQUtYLFVBQUEsSUFBY1csTUFBQSxDQUFPbkIsSUFBQSxLQUFTLFFBQVE7UUFDekQsS0FBS2dCLE1BQUEsQ0FBTztNQUNoQjtNQUVBLElBQUksWUFBWUcsTUFBQSxDQUFPbkIsSUFBQSxFQUFNO1FBQ3pCLEtBQUtZLE9BQUEsQ0FBUTtVQUFFZCxXQUFBLEVBQWE7UUFBaUMsQ0FBQztRQUM5RCxPQUFPO01BQ1g7TUFFQSxLQUFLd0IsUUFBQSxDQUFTSCxNQUFNO0lBQ3hCO0lBRUEsSUFBQTRDLGNBQUEsQ0FBQXFCLGFBQUEsRUFBY2xFLElBQUEsRUFBTSxLQUFLZCxNQUFBLENBQU9pQixVQUFVLEVBQUVnRSxPQUFBLENBQVFGLFFBQVE7SUFFNUQsSUFBSSxhQUFhLEtBQUszRSxVQUFBLEVBQVk7TUFFOUIsS0FBSzhELE9BQUEsR0FBVTtNQUNmLEtBQUtoRSxZQUFBLENBQWEsY0FBYztNQUNoQyxJQUFJLFdBQVcsS0FBS0UsVUFBQSxFQUFZO1FBQzVCLEtBQUt1RSxJQUFBLENBQUs7TUFDZCxPQUNLLENBQ0w7SUFDSjtFQUNKO0VBTUFwRSxRQUFBLEVBQVU7SUFDTixNQUFNRCxLQUFBLEdBQVFBLENBQUEsS0FBTTtNQUNoQixLQUFLSyxLQUFBLENBQU0sQ0FBQztRQUFFZixJQUFBLEVBQU07TUFBUSxDQUFDLENBQUM7SUFDbEM7SUFDQSxJQUFJLFdBQVcsS0FBS1EsVUFBQSxFQUFZO01BQzVCRSxLQUFBLENBQU07SUFDVixPQUNLO01BR0QsS0FBS3VFLElBQUEsQ0FBSyxRQUFRdkUsS0FBSztJQUMzQjtFQUNKO0VBT0FLLE1BQU1ELE9BQUEsRUFBUztJQUNYLEtBQUtaLFFBQUEsR0FBVztJQUNoQixJQUFBNkQsY0FBQSxDQUFBdUIsYUFBQSxFQUFjeEUsT0FBQSxFQUFVSSxJQUFBLElBQVM7TUFDN0IsS0FBS3FFLE9BQUEsQ0FBUXJFLElBQUEsRUFBTSxNQUFNO1FBQ3JCLEtBQUtoQixRQUFBLEdBQVc7UUFDaEIsS0FBS0ksWUFBQSxDQUFhLE9BQU87TUFDN0IsQ0FBQztJQUNMLENBQUM7RUFDTDtFQU1Ba0YsSUFBQSxFQUFNO0lBQ0YsTUFBTTdELE1BQUEsR0FBUyxLQUFLOUQsSUFBQSxDQUFLc0UsTUFBQSxHQUFTLFVBQVU7SUFDNUMsTUFBTWhDLEtBQUEsR0FBUSxLQUFLQSxLQUFBLElBQVMsQ0FBQztJQUU3QixJQUFJLFVBQVUsS0FBS3RDLElBQUEsQ0FBSzRILGlCQUFBLEVBQW1CO01BQ3ZDdEYsS0FBQSxDQUFNLEtBQUt0QyxJQUFBLENBQUs2SCxjQUFBLElBQWtCeEMsS0FBQSxDQUFNO0lBQzVDO0lBQ0EsSUFBSSxDQUFDLEtBQUt5QixjQUFBLElBQWtCLENBQUN4RSxLQUFBLENBQU13RixHQUFBLEVBQUs7TUFDcEN4RixLQUFBLENBQU15RixHQUFBLEdBQU07SUFDaEI7SUFDQSxPQUFPLEtBQUtsRSxTQUFBLENBQVVDLE1BQUEsRUFBUXhCLEtBQUs7RUFDdkM7RUFPQTBGLFFBQVFoSSxJQUFBLEdBQU8sQ0FBQyxHQUFHO0lBQ2ZpSSxNQUFBLENBQU9DLE1BQUEsQ0FBT2xJLElBQUEsRUFBTTtNQUFFNEcsRUFBQSxFQUFJLEtBQUtBLEVBQUE7TUFBSUksU0FBQSxFQUFXLEtBQUtBO0lBQVUsR0FBRyxLQUFLaEgsSUFBSTtJQUN6RSxPQUFPLElBQUltSSxPQUFBLENBQVEsS0FBS1IsR0FBQSxDQUFJLEdBQUczSCxJQUFJO0VBQ3ZDO0VBUUEwSCxRQUFRckUsSUFBQSxFQUFNK0UsRUFBQSxFQUFJO0lBQ2QsTUFBTUMsR0FBQSxHQUFNLEtBQUtMLE9BQUEsQ0FBUTtNQUNyQk0sTUFBQSxFQUFRO01BQ1JqRjtJQUNKLENBQUM7SUFDRGdGLEdBQUEsQ0FBSUUsRUFBQSxDQUFHLFdBQVdILEVBQUU7SUFDcEJDLEdBQUEsQ0FBSUUsRUFBQSxDQUFHLFNBQVMsQ0FBQ0MsU0FBQSxFQUFXdEcsT0FBQSxLQUFZO01BQ3BDLEtBQUtNLE9BQUEsQ0FBUSxrQkFBa0JnRyxTQUFBLEVBQVd0RyxPQUFPO0lBQ3JELENBQUM7RUFDTDtFQU1BbUYsT0FBQSxFQUFTO0lBQ0wsTUFBTWdCLEdBQUEsR0FBTSxLQUFLTCxPQUFBLENBQVE7SUFDekJLLEdBQUEsQ0FBSUUsRUFBQSxDQUFHLFFBQVEsS0FBS25GLE1BQUEsQ0FBT2pELElBQUEsQ0FBSyxJQUFJLENBQUM7SUFDckNrSSxHQUFBLENBQUlFLEVBQUEsQ0FBRyxTQUFTLENBQUNDLFNBQUEsRUFBV3RHLE9BQUEsS0FBWTtNQUNwQyxLQUFLTSxPQUFBLENBQVEsa0JBQWtCZ0csU0FBQSxFQUFXdEcsT0FBTztJQUNyRCxDQUFDO0lBQ0QsS0FBS3VHLE9BQUEsR0FBVUosR0FBQTtFQUNuQjtBQUNKO0FBQ08sSUFBTUYsT0FBQSxHQUFOLGNBQXNCaEMseUJBQUEsQ0FBQS9ELE9BQUEsQ0FBUTtFQU9qQ0wsWUFBWTRGLEdBQUEsRUFBSzNILElBQUEsRUFBTTtJQUNuQixNQUFNO0lBQ054QixxQkFBQSxDQUFzQixNQUFNd0IsSUFBSTtJQUNoQyxLQUFLQSxJQUFBLEdBQU9BLElBQUE7SUFDWixLQUFLc0ksTUFBQSxHQUFTdEksSUFBQSxDQUFLc0ksTUFBQSxJQUFVO0lBQzdCLEtBQUtYLEdBQUEsR0FBTUEsR0FBQTtJQUNYLEtBQUt0RSxJQUFBLEdBQU8sV0FBY3JELElBQUEsQ0FBS3FELElBQUEsR0FBT3JELElBQUEsQ0FBS3FELElBQUEsR0FBTztJQUNsRCxLQUFLcUYsTUFBQSxDQUFPO0VBQ2hCO0VBTUFBLE9BQUEsRUFBUztJQUNMLElBQUlDLEVBQUE7SUFDSixNQUFNM0ksSUFBQSxHQUFPWCxJQUFBLENBQUssS0FBS1csSUFBQSxFQUFNLFNBQVMsT0FBTyxPQUFPLGNBQWMsUUFBUSxNQUFNLFdBQVcsc0JBQXNCLFdBQVc7SUFDNUhBLElBQUEsQ0FBSzZGLE9BQUEsR0FBVSxDQUFDLENBQUMsS0FBSzdGLElBQUEsQ0FBSzRHLEVBQUE7SUFDM0IsTUFBTU4sR0FBQSxHQUFPLEtBQUtBLEdBQUEsR0FBTSxJQUFJVixHQUFBLENBQWU1RixJQUFJO0lBQy9DLElBQUk7TUFDQXNHLEdBQUEsQ0FBSTVELElBQUEsQ0FBSyxLQUFLNEYsTUFBQSxFQUFRLEtBQUtYLEdBQUEsRUFBSyxJQUFJO01BQ3BDLElBQUk7UUFDQSxJQUFJLEtBQUszSCxJQUFBLENBQUs0SSxZQUFBLEVBQWM7VUFDeEJ0QyxHQUFBLENBQUl1QyxxQkFBQSxJQUF5QnZDLEdBQUEsQ0FBSXVDLHFCQUFBLENBQXNCLElBQUk7VUFDM0QsU0FBUy9ILEVBQUEsSUFBSyxLQUFLZCxJQUFBLENBQUs0SSxZQUFBLEVBQWM7WUFDbEMsSUFBSSxLQUFLNUksSUFBQSxDQUFLNEksWUFBQSxDQUFhakosY0FBQSxDQUFlbUIsRUFBQyxHQUFHO2NBQzFDd0YsR0FBQSxDQUFJd0MsZ0JBQUEsQ0FBaUJoSSxFQUFBLEVBQUcsS0FBS2QsSUFBQSxDQUFLNEksWUFBQSxDQUFhOUgsRUFBQSxDQUFFO1lBQ3JEO1VBQ0o7UUFDSjtNQUNKLFNBQ09nRixDQUFBLEVBQVAsQ0FBWTtNQUNaLElBQUksV0FBVyxLQUFLd0MsTUFBQSxFQUFRO1FBQ3hCLElBQUk7VUFDQWhDLEdBQUEsQ0FBSXdDLGdCQUFBLENBQWlCLGdCQUFnQiwwQkFBMEI7UUFDbkUsU0FDT2hELENBQUEsRUFBUCxDQUFZO01BQ2hCO01BQ0EsSUFBSTtRQUNBUSxHQUFBLENBQUl3QyxnQkFBQSxDQUFpQixVQUFVLEtBQUs7TUFDeEMsU0FDT2hELENBQUEsRUFBUCxDQUFZO01BQ1osQ0FBQzZDLEVBQUEsR0FBSyxLQUFLM0ksSUFBQSxDQUFLZ0gsU0FBQSxNQUFlLFFBQVEyQixFQUFBLEtBQU8sU0FBUyxTQUFTQSxFQUFBLENBQUdJLFVBQUEsQ0FBV3pDLEdBQUc7TUFFakYsSUFBSSxxQkFBcUJBLEdBQUEsRUFBSztRQUMxQkEsR0FBQSxDQUFJUyxlQUFBLEdBQWtCLEtBQUsvRyxJQUFBLENBQUsrRyxlQUFBO01BQ3BDO01BQ0EsSUFBSSxLQUFLL0csSUFBQSxDQUFLZ0osY0FBQSxFQUFnQjtRQUMxQjFDLEdBQUEsQ0FBSTJDLE9BQUEsR0FBVSxLQUFLakosSUFBQSxDQUFLZ0osY0FBQTtNQUM1QjtNQUNBMUMsR0FBQSxDQUFJNEMsa0JBQUEsR0FBcUIsTUFBTTtRQUMzQixJQUFJQyxHQUFBO1FBQ0osSUFBSTdDLEdBQUEsQ0FBSTNELFVBQUEsS0FBZSxHQUFHO1VBQ3RCLENBQUN3RyxHQUFBLEdBQUssS0FBS25KLElBQUEsQ0FBS2dILFNBQUEsTUFBZSxRQUFRbUMsR0FBQSxLQUFPLFNBQVMsU0FBU0EsR0FBQSxDQUFHQyxZQUFBLENBQWE5QyxHQUFHO1FBQ3ZGO1FBQ0EsSUFBSSxNQUFNQSxHQUFBLENBQUkzRCxVQUFBLEVBQ1Y7UUFDSixJQUFJLFFBQVEyRCxHQUFBLENBQUkrQyxNQUFBLElBQVUsU0FBUy9DLEdBQUEsQ0FBSStDLE1BQUEsRUFBUTtVQUMzQyxLQUFLQyxNQUFBLENBQU87UUFDaEIsT0FDSztVQUdELEtBQUtwSixZQUFBLENBQWEsTUFBTTtZQUNwQixLQUFLc0MsT0FBQSxDQUFRLE9BQU84RCxHQUFBLENBQUkrQyxNQUFBLEtBQVcsV0FBVy9DLEdBQUEsQ0FBSStDLE1BQUEsR0FBUyxDQUFDO1VBQ2hFLEdBQUcsQ0FBQztRQUNSO01BQ0o7TUFDQS9DLEdBQUEsQ0FBSXRELElBQUEsQ0FBSyxLQUFLSyxJQUFJO0lBQ3RCLFNBQ095QyxDQUFBLEVBQVA7TUFJSSxLQUFLNUYsWUFBQSxDQUFhLE1BQU07UUFDcEIsS0FBS3NDLE9BQUEsQ0FBUXNELENBQUM7TUFDbEIsR0FBRyxDQUFDO01BQ0o7SUFDSjtJQUNBLElBQUksT0FBT3lELFFBQUEsS0FBYSxhQUFhO01BQ2pDLEtBQUtDLEtBQUEsR0FBUXJCLE9BQUEsQ0FBUXNCLGFBQUE7TUFDckJ0QixPQUFBLENBQVF1QixRQUFBLENBQVMsS0FBS0YsS0FBQSxJQUFTO0lBQ25DO0VBQ0o7RUFNQWhILFFBQVFrRCxHQUFBLEVBQUs7SUFDVCxLQUFLakQsWUFBQSxDQUFhLFNBQVNpRCxHQUFBLEVBQUssS0FBS1ksR0FBRztJQUN4QyxLQUFLcUQsT0FBQSxDQUFRLElBQUk7RUFDckI7RUFNQUEsUUFBUUMsU0FBQSxFQUFXO0lBQ2YsSUFBSSxnQkFBZ0IsT0FBTyxLQUFLdEQsR0FBQSxJQUFPLFNBQVMsS0FBS0EsR0FBQSxFQUFLO01BQ3REO0lBQ0o7SUFDQSxLQUFLQSxHQUFBLENBQUk0QyxrQkFBQSxHQUFxQjlDLEtBQUE7SUFDOUIsSUFBSXdELFNBQUEsRUFBVztNQUNYLElBQUk7UUFDQSxLQUFLdEQsR0FBQSxDQUFJdUQsS0FBQSxDQUFNO01BQ25CLFNBQ08vRCxDQUFBLEVBQVAsQ0FBWTtJQUNoQjtJQUNBLElBQUksT0FBT3lELFFBQUEsS0FBYSxhQUFhO01BQ2pDLE9BQU9wQixPQUFBLENBQVF1QixRQUFBLENBQVMsS0FBS0YsS0FBQTtJQUNqQztJQUNBLEtBQUtsRCxHQUFBLEdBQU07RUFDZjtFQU1BZ0QsT0FBQSxFQUFTO0lBQ0wsTUFBTWpHLElBQUEsR0FBTyxLQUFLaUQsR0FBQSxDQUFJd0QsWUFBQTtJQUN0QixJQUFJekcsSUFBQSxLQUFTLE1BQU07TUFDZixLQUFLWixZQUFBLENBQWEsUUFBUVksSUFBSTtNQUM5QixLQUFLWixZQUFBLENBQWEsU0FBUztNQUMzQixLQUFLa0gsT0FBQSxDQUFRO0lBQ2pCO0VBQ0o7RUFNQUUsTUFBQSxFQUFRO0lBQ0osS0FBS0YsT0FBQSxDQUFRO0VBQ2pCO0FBQ0o7QUFDQXhCLE9BQUEsQ0FBUXNCLGFBQUEsR0FBZ0I7QUFDeEJ0QixPQUFBLENBQVF1QixRQUFBLEdBQVcsQ0FBQztBQU1wQixJQUFJLE9BQU9ILFFBQUEsS0FBYSxhQUFhO0VBRWpDLElBQUksT0FBT1EsV0FBQSxLQUFnQixZQUFZO0lBRW5DQSxXQUFBLENBQVksWUFBWUMsYUFBYTtFQUN6QyxXQUNTLE9BQU9DLGdCQUFBLEtBQXFCLFlBQVk7SUFDN0MsTUFBTUMsZ0JBQUEsR0FBbUIsZ0JBQWdCakwsY0FBQSxHQUFhLGFBQWE7SUFDbkVnTCxnQkFBQSxDQUFpQkMsZ0JBQUEsRUFBa0JGLGFBQUEsRUFBZSxLQUFLO0VBQzNEO0FBQ0o7QUFDQSxTQUFTQSxjQUFBLEVBQWdCO0VBQ3JCLFNBQVNsSixFQUFBLElBQUtxSCxPQUFBLENBQVF1QixRQUFBLEVBQVU7SUFDNUIsSUFBSXZCLE9BQUEsQ0FBUXVCLFFBQUEsQ0FBUy9KLGNBQUEsQ0FBZW1CLEVBQUMsR0FBRztNQUNwQ3FILE9BQUEsQ0FBUXVCLFFBQUEsQ0FBUzVJLEVBQUEsRUFBRytJLEtBQUEsQ0FBTTtJQUM5QjtFQUNKO0FBQ0o7OztBQ3BZTyxJQUFNcEwsUUFBQSxJQUFZLE1BQU07RUFDM0IsTUFBTTBMLGtCQUFBLEdBQXFCLE9BQU9DLE9BQUEsS0FBWSxjQUFjLE9BQU9BLE9BQUEsQ0FBUUMsT0FBQSxLQUFZO0VBQ3ZGLElBQUlGLGtCQUFBLEVBQW9CO0lBQ3BCLE9BQVFHLEVBQUEsSUFBT0YsT0FBQSxDQUFRQyxPQUFBLENBQVEsRUFBRUUsSUFBQSxDQUFLRCxFQUFFO0VBQzVDLE9BQ0s7SUFDRCxPQUFPLENBQUNBLEVBQUEsRUFBSXBLLFlBQUEsS0FBaUJBLFlBQUEsQ0FBYW9LLEVBQUEsRUFBSSxDQUFDO0VBQ25EO0FBQ0osR0FBRztBQUNJLElBQU1FLFNBQUEsR0FBWXZMLGNBQUEsQ0FBV3VMLFNBQUEsSUFBYXZMLGNBQUEsQ0FBV3dMLFlBQUE7QUFDckQsSUFBTUMscUJBQUEsR0FBd0I7QUFDOUIsSUFBTUMsaUJBQUEsR0FBb0I7OztBQ1JqQyxJQUFBQyxjQUFBLEdBQTZCaEosT0FBQTtBQUU3QixJQUFNaUosYUFBQSxHQUFnQixPQUFPQyxTQUFBLEtBQWMsZUFDdkMsT0FBT0EsU0FBQSxDQUFVQyxPQUFBLEtBQVksWUFDN0JELFNBQUEsQ0FBVUMsT0FBQSxDQUFRQyxXQUFBLENBQVksTUFBTTtBQUNqQyxJQUFNQyxFQUFBLEdBQU4sY0FBaUIzTSxTQUFBLENBQVU7RUFPOUJ5RCxZQUFZL0IsSUFBQSxFQUFNO0lBQ2QsTUFBTUEsSUFBSTtJQUNWLEtBQUs4RyxjQUFBLEdBQWlCLENBQUM5RyxJQUFBLENBQUs2RyxXQUFBO0VBQ2hDO0VBQ0EsSUFBSUksS0FBQSxFQUFPO0lBQ1AsT0FBTztFQUNYO0VBQ0FyRSxPQUFBLEVBQVM7SUFDTCxJQUFJLENBQUMsS0FBS3NJLEtBQUEsQ0FBTSxHQUFHO01BRWY7SUFDSjtJQUNBLE1BQU12RCxHQUFBLEdBQU0sS0FBS0EsR0FBQSxDQUFJO0lBQ3JCLE1BQU13RCxTQUFBLEdBQVksS0FBS25MLElBQUEsQ0FBS21MLFNBQUE7SUFFNUIsTUFBTW5MLElBQUEsR0FBTzZLLGFBQUEsR0FDUCxDQUFDLElBQ0R4TCxJQUFBLENBQUssS0FBS1csSUFBQSxFQUFNLFNBQVMscUJBQXFCLE9BQU8sT0FBTyxjQUFjLFFBQVEsTUFBTSxXQUFXLHNCQUFzQixnQkFBZ0IsbUJBQW1CLFVBQVUsY0FBYyxVQUFVLHFCQUFxQjtJQUN6TixJQUFJLEtBQUtBLElBQUEsQ0FBSzRJLFlBQUEsRUFBYztNQUN4QjVJLElBQUEsQ0FBS29MLE9BQUEsR0FBVSxLQUFLcEwsSUFBQSxDQUFLNEksWUFBQTtJQUM3QjtJQUNBLElBQUk7TUFDQSxLQUFLeUMsRUFBQSxHQUNEWCxxQkFBQSxJQUF5QixDQUFDRyxhQUFBLEdBQ3BCTSxTQUFBLEdBQ0ksSUFBSVgsU0FBQSxDQUFVN0MsR0FBQSxFQUFLd0QsU0FBUyxJQUM1QixJQUFJWCxTQUFBLENBQVU3QyxHQUFHLElBQ3JCLElBQUk2QyxTQUFBLENBQVU3QyxHQUFBLEVBQUt3RCxTQUFBLEVBQVduTCxJQUFJO0lBQ2hELFNBQ08wRixHQUFBLEVBQVA7TUFDSSxPQUFPLEtBQUtqRCxZQUFBLENBQWEsU0FBU2lELEdBQUc7SUFDekM7SUFDQSxLQUFLMkYsRUFBQSxDQUFHN0gsVUFBQSxHQUFhLEtBQUtqQixNQUFBLENBQU9pQixVQUFBO0lBQ2pDLEtBQUs4SCxpQkFBQSxDQUFrQjtFQUMzQjtFQU1BQSxrQkFBQSxFQUFvQjtJQUNoQixLQUFLRCxFQUFBLENBQUdFLE1BQUEsR0FBUyxNQUFNO01BQ25CLElBQUksS0FBS3ZMLElBQUEsQ0FBS3dMLFNBQUEsRUFBVztRQUNyQixLQUFLSCxFQUFBLENBQUdJLE9BQUEsQ0FBUUMsS0FBQSxDQUFNO01BQzFCO01BQ0EsS0FBS3ZJLE1BQUEsQ0FBTztJQUNoQjtJQUNBLEtBQUtrSSxFQUFBLENBQUdNLE9BQUEsR0FBV0MsVUFBQSxJQUFlLEtBQUs3SSxPQUFBLENBQVE7TUFDM0NkLFdBQUEsRUFBYTtNQUNiQyxPQUFBLEVBQVMwSjtJQUNiLENBQUM7SUFDRCxLQUFLUCxFQUFBLENBQUdRLFNBQUEsR0FBYUMsRUFBQSxJQUFPLEtBQUsxSSxNQUFBLENBQU8wSSxFQUFBLENBQUd6SSxJQUFJO0lBQy9DLEtBQUtnSSxFQUFBLENBQUdVLE9BQUEsR0FBV2pHLENBQUEsSUFBTSxLQUFLdEQsT0FBQSxDQUFRLG1CQUFtQnNELENBQUM7RUFDOUQ7RUFDQTVDLE1BQU1ELE9BQUEsRUFBUztJQUNYLEtBQUtaLFFBQUEsR0FBVztJQUdoQixTQUFTdkIsRUFBQSxHQUFJLEdBQUdBLEVBQUEsR0FBSW1DLE9BQUEsQ0FBUWpDLE1BQUEsRUFBUUYsRUFBQSxJQUFLO01BQ3JDLE1BQU13QyxNQUFBLEdBQVNMLE9BQUEsQ0FBUW5DLEVBQUE7TUFDdkIsTUFBTWtMLFVBQUEsR0FBYWxMLEVBQUEsS0FBTW1DLE9BQUEsQ0FBUWpDLE1BQUEsR0FBUztNQUMxQyxJQUFBNEosY0FBQSxDQUFBcUIsWUFBQSxFQUFhM0ksTUFBQSxFQUFRLEtBQUt3RCxjQUFBLEVBQWlCekQsSUFBQSxJQUFTO1FBRWhELE1BQU1yRCxJQUFBLEdBQU8sQ0FBQztRQUNkLElBQUksQ0FBQzBLLHFCQUFBLEVBQXVCO1VBQ3hCLElBQUlwSCxNQUFBLENBQU80SSxPQUFBLEVBQVM7WUFDaEJsTSxJQUFBLENBQUttTSxRQUFBLEdBQVc3SSxNQUFBLENBQU80SSxPQUFBLENBQVFDLFFBQUE7VUFDbkM7VUFDQSxJQUFJLEtBQUtuTSxJQUFBLENBQUtvTSxpQkFBQSxFQUFtQjtZQUM3QixNQUFNQyxHQUFBLEdBRU4sYUFBYSxPQUFPaEosSUFBQSxHQUFPaUosTUFBQSxDQUFPaE0sVUFBQSxDQUFXK0MsSUFBSSxJQUFJQSxJQUFBLENBQUtyQyxNQUFBO1lBQzFELElBQUlxTCxHQUFBLEdBQU0sS0FBS3JNLElBQUEsQ0FBS29NLGlCQUFBLENBQWtCRyxTQUFBLEVBQVc7Y0FDN0N2TSxJQUFBLENBQUttTSxRQUFBLEdBQVc7WUFDcEI7VUFDSjtRQUNKO1FBSUEsSUFBSTtVQUNBLElBQUl6QixxQkFBQSxFQUF1QjtZQUV2QixLQUFLVyxFQUFBLENBQUdySSxJQUFBLENBQUtLLElBQUk7VUFDckIsT0FDSztZQUNELEtBQUtnSSxFQUFBLENBQUdySSxJQUFBLENBQUtLLElBQUEsRUFBTXJELElBQUk7VUFDM0I7UUFDSixTQUNPOEYsQ0FBQSxFQUFQLENBQ0E7UUFDQSxJQUFJa0csVUFBQSxFQUFZO1VBR1p2TixRQUFBLENBQVMsTUFBTTtZQUNYLEtBQUs0RCxRQUFBLEdBQVc7WUFDaEIsS0FBS0ksWUFBQSxDQUFhLE9BQU87VUFDN0IsR0FBRyxLQUFLdkMsWUFBWTtRQUN4QjtNQUNKLENBQUM7SUFDTDtFQUNKO0VBQ0E0QyxRQUFBLEVBQVU7SUFDTixJQUFJLE9BQU8sS0FBS3VJLEVBQUEsS0FBTyxhQUFhO01BQ2hDLEtBQUtBLEVBQUEsQ0FBR3hJLEtBQUEsQ0FBTTtNQUNkLEtBQUt3SSxFQUFBLEdBQUs7SUFDZDtFQUNKO0VBTUExRCxJQUFBLEVBQU07SUFDRixNQUFNN0QsTUFBQSxHQUFTLEtBQUs5RCxJQUFBLENBQUtzRSxNQUFBLEdBQVMsUUFBUTtJQUMxQyxNQUFNaEMsS0FBQSxHQUFRLEtBQUtBLEtBQUEsSUFBUyxDQUFDO0lBRTdCLElBQUksS0FBS3RDLElBQUEsQ0FBSzRILGlCQUFBLEVBQW1CO01BQzdCdEYsS0FBQSxDQUFNLEtBQUt0QyxJQUFBLENBQUs2SCxjQUFBLElBQWtCeEMsS0FBQSxDQUFNO0lBQzVDO0lBRUEsSUFBSSxDQUFDLEtBQUt5QixjQUFBLEVBQWdCO01BQ3RCeEUsS0FBQSxDQUFNeUYsR0FBQSxHQUFNO0lBQ2hCO0lBQ0EsT0FBTyxLQUFLbEUsU0FBQSxDQUFVQyxNQUFBLEVBQVF4QixLQUFLO0VBQ3ZDO0VBT0E0SSxNQUFBLEVBQVE7SUFDSixPQUFPLENBQUMsQ0FBQ1YsU0FBQTtFQUNiO0FBQ0o7OztBQ3JKQSxJQUFBZ0MsY0FBQSxHQUFzRTVLLE9BQUE7QUFDL0QsSUFBTTZLLEVBQUEsR0FBTixjQUFpQm5PLFNBQUEsQ0FBVTtFQUM5QixJQUFJMkksS0FBQSxFQUFPO0lBQ1AsT0FBTztFQUNYO0VBQ0FyRSxPQUFBLEVBQVM7SUFFTCxJQUFJLE9BQU84SixZQUFBLEtBQWlCLFlBQVk7TUFDcEM7SUFDSjtJQUVBLEtBQUtDLFNBQUEsR0FBWSxJQUFJRCxZQUFBLENBQWEsS0FBSzdJLFNBQUEsQ0FBVSxPQUFPLEdBQUcsS0FBSzdELElBQUEsQ0FBSzRNLGdCQUFBLENBQWlCLEtBQUszRixJQUFBLENBQUs7SUFDaEcsS0FBSzBGLFNBQUEsQ0FBVUUsTUFBQSxDQUNWdEMsSUFBQSxDQUFLLE1BQU07TUFDWixLQUFLeEgsT0FBQSxDQUFRO0lBQ2pCLENBQUMsRUFDSStKLEtBQUEsQ0FBT3BILEdBQUEsSUFBUTtNQUNoQixLQUFLbEQsT0FBQSxDQUFRLHNCQUFzQmtELEdBQUc7SUFDMUMsQ0FBQztJQUVELEtBQUtpSCxTQUFBLENBQVVJLEtBQUEsQ0FBTXhDLElBQUEsQ0FBSyxNQUFNO01BQzVCLEtBQUtvQyxTQUFBLENBQVVLLHlCQUFBLENBQTBCLEVBQUV6QyxJQUFBLENBQU0wQyxNQUFBLElBQVc7UUFDeEQsTUFBTUMsYUFBQSxPQUFnQlYsY0FBQSxDQUFBVyx5QkFBQSxFQUEwQjVJLE1BQUEsQ0FBTzZJLGdCQUFBLEVBQWtCLEtBQUs3SyxNQUFBLENBQU9pQixVQUFVO1FBQy9GLE1BQU02SixNQUFBLEdBQVNKLE1BQUEsQ0FBT0ssUUFBQSxDQUFTQyxXQUFBLENBQVlMLGFBQWEsRUFBRU0sU0FBQSxDQUFVO1FBQ3BFLE1BQU1DLGFBQUEsT0FBZ0JqQixjQUFBLENBQUFrQix5QkFBQSxFQUEwQjtRQUNoREQsYUFBQSxDQUFjSCxRQUFBLENBQVNLLE1BQUEsQ0FBT1YsTUFBQSxDQUFPNUssUUFBUTtRQUM3QyxLQUFLdUwsTUFBQSxHQUFTSCxhQUFBLENBQWNwTCxRQUFBLENBQVN3TCxTQUFBLENBQVU7UUFDL0MsTUFBTUMsSUFBQSxHQUFPQSxDQUFBLEtBQU07VUFDZlQsTUFBQSxDQUNLUyxJQUFBLENBQUssRUFDTHZELElBQUEsQ0FBSyxDQUFDO1lBQUV3RCxJQUFBO1lBQU12SSxLQUFBLEVBQUF3STtVQUFNLE1BQU07WUFDM0IsSUFBSUQsSUFBQSxFQUFNO2NBQ047WUFDSjtZQUNBLEtBQUt0SyxRQUFBLENBQVN1SyxNQUFLO1lBQ25CRixJQUFBLENBQUs7VUFDVCxDQUFDLEVBQ0loQixLQUFBLENBQU9wSCxHQUFBLElBQVEsQ0FDcEIsQ0FBQztRQUNMO1FBQ0FvSSxJQUFBLENBQUs7UUFDTCxNQUFNeEssTUFBQSxHQUFTO1VBQUVuQixJQUFBLEVBQU07UUFBTztRQUM5QixJQUFJLEtBQUtHLEtBQUEsQ0FBTXdGLEdBQUEsRUFBSztVQUNoQnhFLE1BQUEsQ0FBT0QsSUFBQSxHQUFPLFdBQVcsS0FBS2YsS0FBQSxDQUFNd0YsR0FBQTtRQUN4QztRQUNBLEtBQUs4RixNQUFBLENBQU8xSyxLQUFBLENBQU1JLE1BQU0sRUFBRWlILElBQUEsQ0FBSyxNQUFNLEtBQUtwSCxNQUFBLENBQU8sQ0FBQztNQUN0RCxDQUFDO0lBQ0wsQ0FBQztFQUNMO0VBQ0FELE1BQU1ELE9BQUEsRUFBUztJQUNYLEtBQUtaLFFBQUEsR0FBVztJQUNoQixTQUFTdkIsRUFBQSxHQUFJLEdBQUdBLEVBQUEsR0FBSW1DLE9BQUEsQ0FBUWpDLE1BQUEsRUFBUUYsRUFBQSxJQUFLO01BQ3JDLE1BQU13QyxNQUFBLEdBQVNMLE9BQUEsQ0FBUW5DLEVBQUE7TUFDdkIsTUFBTWtMLFVBQUEsR0FBYWxMLEVBQUEsS0FBTW1DLE9BQUEsQ0FBUWpDLE1BQUEsR0FBUztNQUMxQyxLQUFLNE0sTUFBQSxDQUFPMUssS0FBQSxDQUFNSSxNQUFNLEVBQUVpSCxJQUFBLENBQUssTUFBTTtRQUNqQyxJQUFJeUIsVUFBQSxFQUFZO1VBQ1p2TixRQUFBLENBQVMsTUFBTTtZQUNYLEtBQUs0RCxRQUFBLEdBQVc7WUFDaEIsS0FBS0ksWUFBQSxDQUFhLE9BQU87VUFDN0IsR0FBRyxLQUFLdkMsWUFBWTtRQUN4QjtNQUNKLENBQUM7SUFDTDtFQUNKO0VBQ0E0QyxRQUFBLEVBQVU7SUFDTixJQUFJNkYsRUFBQTtJQUNKLENBQUNBLEVBQUEsR0FBSyxLQUFLZ0UsU0FBQSxNQUFlLFFBQVFoRSxFQUFBLEtBQU8sU0FBUyxTQUFTQSxFQUFBLENBQUc5RixLQUFBLENBQU07RUFDeEU7QUFDSjs7O0FDbkVPLElBQU1oRSxVQUFBLEdBQWE7RUFDdEJvUCxTQUFBLEVBQVdoRCxFQUFBO0VBQ1hpRCxZQUFBLEVBQWN6QixFQUFBO0VBQ2RoRyxPQUFBLEVBQVNEO0FBQ2I7OztBQ1lBLElBQU0ySCxFQUFBLEdBQUs7QUFDWCxJQUFNQyxLQUFBLEdBQVEsQ0FDVixVQUFVLFlBQVksYUFBYSxZQUFZLFFBQVEsWUFBWSxRQUFRLFFBQVEsWUFBWSxRQUFRLGFBQWEsUUFBUSxTQUFTLFNBQ3pJO0FBQ08sU0FBUzFQLE1BQU1pQyxHQUFBLEVBQUs7RUFDdkIsSUFBSUEsR0FBQSxDQUFJSyxNQUFBLEdBQVMsS0FBTTtJQUNuQixNQUFNO0VBQ1Y7RUFDQSxNQUFNcU4sR0FBQSxHQUFNMU4sR0FBQTtJQUFLMk4sQ0FBQSxHQUFJM04sR0FBQSxDQUFJeUQsT0FBQSxDQUFRLEdBQUc7SUFBRzBCLENBQUEsR0FBSW5GLEdBQUEsQ0FBSXlELE9BQUEsQ0FBUSxHQUFHO0VBQzFELElBQUlrSyxDQUFBLElBQUssTUFBTXhJLENBQUEsSUFBSyxJQUFJO0lBQ3BCbkYsR0FBQSxHQUFNQSxHQUFBLENBQUk0TixTQUFBLENBQVUsR0FBR0QsQ0FBQyxJQUFJM04sR0FBQSxDQUFJNE4sU0FBQSxDQUFVRCxDQUFBLEVBQUd4SSxDQUFDLEVBQUUwSSxPQUFBLENBQVEsTUFBTSxHQUFHLElBQUk3TixHQUFBLENBQUk0TixTQUFBLENBQVV6SSxDQUFBLEVBQUduRixHQUFBLENBQUlLLE1BQU07RUFDcEc7RUFDQSxJQUFJeU4sQ0FBQSxHQUFJTixFQUFBLENBQUdPLElBQUEsQ0FBSy9OLEdBQUEsSUFBTyxFQUFFO0lBQUdnSCxHQUFBLEdBQU0sQ0FBQztJQUFHN0csRUFBQSxHQUFJO0VBQzFDLE9BQU9BLEVBQUEsSUFBSztJQUNSNkcsR0FBQSxDQUFJeUcsS0FBQSxDQUFNdE4sRUFBQSxLQUFNMk4sQ0FBQSxDQUFFM04sRUFBQSxLQUFNO0VBQzVCO0VBQ0EsSUFBSXdOLENBQUEsSUFBSyxNQUFNeEksQ0FBQSxJQUFLLElBQUk7SUFDcEI2QixHQUFBLENBQUlnSCxNQUFBLEdBQVNOLEdBQUE7SUFDYjFHLEdBQUEsQ0FBSWlILElBQUEsR0FBT2pILEdBQUEsQ0FBSWlILElBQUEsQ0FBS0wsU0FBQSxDQUFVLEdBQUc1RyxHQUFBLENBQUlpSCxJQUFBLENBQUs1TixNQUFBLEdBQVMsQ0FBQyxFQUFFd04sT0FBQSxDQUFRLE1BQU0sR0FBRztJQUN2RTdHLEdBQUEsQ0FBSWtILFNBQUEsR0FBWWxILEdBQUEsQ0FBSWtILFNBQUEsQ0FBVUwsT0FBQSxDQUFRLEtBQUssRUFBRSxFQUFFQSxPQUFBLENBQVEsS0FBSyxFQUFFLEVBQUVBLE9BQUEsQ0FBUSxNQUFNLEdBQUc7SUFDakY3RyxHQUFBLENBQUltSCxPQUFBLEdBQVU7RUFDbEI7RUFDQW5ILEdBQUEsQ0FBSW9ILFNBQUEsR0FBWUEsU0FBQSxDQUFVcEgsR0FBQSxFQUFLQSxHQUFBLENBQUksT0FBTztFQUMxQ0EsR0FBQSxDQUFJcUgsUUFBQSxHQUFXQSxRQUFBLENBQVNySCxHQUFBLEVBQUtBLEdBQUEsQ0FBSSxRQUFRO0VBQ3pDLE9BQU9BLEdBQUE7QUFDWDtBQUNBLFNBQVNvSCxVQUFVelAsR0FBQSxFQUFLMkUsSUFBQSxFQUFNO0VBQzFCLE1BQU1nTCxJQUFBLEdBQU87SUFBWUMsS0FBQSxHQUFRakwsSUFBQSxDQUFLdUssT0FBQSxDQUFRUyxJQUFBLEVBQU0sR0FBRyxFQUFFek4sS0FBQSxDQUFNLEdBQUc7RUFDbEUsSUFBSXlDLElBQUEsQ0FBS2tMLEtBQUEsQ0FBTSxHQUFHLENBQUMsS0FBSyxPQUFPbEwsSUFBQSxDQUFLakQsTUFBQSxLQUFXLEdBQUc7SUFDOUNrTyxLQUFBLENBQU1FLE1BQUEsQ0FBTyxHQUFHLENBQUM7RUFDckI7RUFDQSxJQUFJbkwsSUFBQSxDQUFLa0wsS0FBQSxDQUFNLEVBQUUsS0FBSyxLQUFLO0lBQ3ZCRCxLQUFBLENBQU1FLE1BQUEsQ0FBT0YsS0FBQSxDQUFNbE8sTUFBQSxHQUFTLEdBQUcsQ0FBQztFQUNwQztFQUNBLE9BQU9rTyxLQUFBO0FBQ1g7QUFDQSxTQUFTRixTQUFTckgsR0FBQSxFQUFLckYsS0FBQSxFQUFPO0VBQzFCLE1BQU1lLElBQUEsR0FBTyxDQUFDO0VBQ2RmLEtBQUEsQ0FBTWtNLE9BQUEsQ0FBUSw2QkFBNkIsVUFBVWEsRUFBQSxFQUFJQyxFQUFBLEVBQUlDLEVBQUEsRUFBSTtJQUM3RCxJQUFJRCxFQUFBLEVBQUk7TUFDSmpNLElBQUEsQ0FBS2lNLEVBQUEsSUFBTUMsRUFBQTtJQUNmO0VBQ0osQ0FBQztFQUNELE9BQU9sTSxJQUFBO0FBQ1g7OztBQzNEQSxJQUFBbU0seUJBQUEsR0FBd0I1TixPQUFBO0FBQ3hCLElBQUE2TixjQUFBLEdBQXlCN04sT0FBQTtBQUVsQixJQUFNdkQsTUFBQSxHQUFOLGNBQXFCbVIseUJBQUEsQ0FBQXBOLE9BQUEsQ0FBUTtFQU9oQ0wsWUFBWTRGLEdBQUEsRUFBSzNILElBQUEsR0FBTyxDQUFDLEdBQUc7SUFDeEIsTUFBTTtJQUNOLEtBQUt3RCxVQUFBLEdBQWFtSCxpQkFBQTtJQUNsQixLQUFLK0UsV0FBQSxHQUFjLEVBQUM7SUFDcEIsSUFBSS9ILEdBQUEsSUFBTyxhQUFhLE9BQU9BLEdBQUEsRUFBSztNQUNoQzNILElBQUEsR0FBTzJILEdBQUE7TUFDUEEsR0FBQSxHQUFNO0lBQ1Y7SUFDQSxJQUFJQSxHQUFBLEVBQUs7TUFDTEEsR0FBQSxHQUFNakosS0FBQSxDQUFNaUosR0FBRztNQUNmM0gsSUFBQSxDQUFLbUUsUUFBQSxHQUFXd0QsR0FBQSxDQUFJaUgsSUFBQTtNQUNwQjVPLElBQUEsQ0FBS3NFLE1BQUEsR0FBU3FELEdBQUEsQ0FBSWhKLFFBQUEsS0FBYSxXQUFXZ0osR0FBQSxDQUFJaEosUUFBQSxLQUFhO01BQzNEcUIsSUFBQSxDQUFLcUUsSUFBQSxHQUFPc0QsR0FBQSxDQUFJdEQsSUFBQTtNQUNoQixJQUFJc0QsR0FBQSxDQUFJckYsS0FBQSxFQUNKdEMsSUFBQSxDQUFLc0MsS0FBQSxHQUFRcUYsR0FBQSxDQUFJckYsS0FBQTtJQUN6QixXQUNTdEMsSUFBQSxDQUFLNE8sSUFBQSxFQUFNO01BQ2hCNU8sSUFBQSxDQUFLbUUsUUFBQSxHQUFXekYsS0FBQSxDQUFNc0IsSUFBQSxDQUFLNE8sSUFBSSxFQUFFQSxJQUFBO0lBQ3JDO0lBQ0FwUSxxQkFBQSxDQUFzQixNQUFNd0IsSUFBSTtJQUNoQyxLQUFLc0UsTUFBQSxHQUNELFFBQVF0RSxJQUFBLENBQUtzRSxNQUFBLEdBQ1B0RSxJQUFBLENBQUtzRSxNQUFBLEdBQ0wsT0FBT29DLFFBQUEsS0FBYSxlQUFlLGFBQWFBLFFBQUEsQ0FBUy9ILFFBQUE7SUFDbkUsSUFBSXFCLElBQUEsQ0FBS21FLFFBQUEsSUFBWSxDQUFDbkUsSUFBQSxDQUFLcUUsSUFBQSxFQUFNO01BRTdCckUsSUFBQSxDQUFLcUUsSUFBQSxHQUFPLEtBQUtDLE1BQUEsR0FBUyxRQUFRO0lBQ3RDO0lBQ0EsS0FBS0gsUUFBQSxHQUNEbkUsSUFBQSxDQUFLbUUsUUFBQSxLQUNBLE9BQU91QyxRQUFBLEtBQWEsY0FBY0EsUUFBQSxDQUFTdkMsUUFBQSxHQUFXO0lBQy9ELEtBQUtFLElBQUEsR0FDRHJFLElBQUEsQ0FBS3FFLElBQUEsS0FDQSxPQUFPcUMsUUFBQSxLQUFhLGVBQWVBLFFBQUEsQ0FBU3JDLElBQUEsR0FDdkNxQyxRQUFBLENBQVNyQyxJQUFBLEdBQ1QsS0FBS0MsTUFBQSxHQUNELFFBQ0E7SUFDbEIsS0FBS3pGLFVBQUEsR0FBYW1CLElBQUEsQ0FBS25CLFVBQUEsSUFBYyxDQUNqQyxXQUNBLGFBQ0EsZUFDSjtJQUNBLEtBQUs2USxXQUFBLEdBQWMsRUFBQztJQUNwQixLQUFLQyxhQUFBLEdBQWdCO0lBQ3JCLEtBQUszUCxJQUFBLEdBQU9pSSxNQUFBLENBQU9DLE1BQUEsQ0FBTztNQUN0QmpFLElBQUEsRUFBTTtNQUNOMkwsS0FBQSxFQUFPO01BQ1A3SSxlQUFBLEVBQWlCO01BQ2pCOEksT0FBQSxFQUFTO01BQ1RoSSxjQUFBLEVBQWdCO01BQ2hCaUksZUFBQSxFQUFpQjtNQUNqQkMsZ0JBQUEsRUFBa0I7TUFDbEJDLGtCQUFBLEVBQW9CO01BQ3BCNUQsaUJBQUEsRUFBbUI7UUFDZkcsU0FBQSxFQUFXO01BQ2Y7TUFDQUssZ0JBQUEsRUFBa0IsQ0FBQztNQUNuQnFELG1CQUFBLEVBQXFCO0lBQ3pCLEdBQUdqUSxJQUFJO0lBQ1AsS0FBS0EsSUFBQSxDQUFLaUUsSUFBQSxHQUNOLEtBQUtqRSxJQUFBLENBQUtpRSxJQUFBLENBQUt1SyxPQUFBLENBQVEsT0FBTyxFQUFFLEtBQzNCLEtBQUt4TyxJQUFBLENBQUsrUCxnQkFBQSxHQUFtQixNQUFNO0lBQzVDLElBQUksT0FBTyxLQUFLL1AsSUFBQSxDQUFLc0MsS0FBQSxLQUFVLFVBQVU7TUFDckMsS0FBS3RDLElBQUEsQ0FBS3NDLEtBQUEsR0FBUWxCLE1BQUEsQ0FBTyxLQUFLcEIsSUFBQSxDQUFLc0MsS0FBSztJQUM1QztJQUVBLEtBQUs0TixFQUFBLEdBQUs7SUFDVixLQUFLQyxRQUFBLEdBQVc7SUFDaEIsS0FBS0MsWUFBQSxHQUFlO0lBQ3BCLEtBQUtDLFdBQUEsR0FBYztJQUVuQixLQUFLQyxnQkFBQSxHQUFtQjtJQUN4QixJQUFJLE9BQU9yRyxnQkFBQSxLQUFxQixZQUFZO01BQ3hDLElBQUksS0FBS2pLLElBQUEsQ0FBS2lRLG1CQUFBLEVBQXFCO1FBSS9CLEtBQUtNLHlCQUFBLEdBQTRCLE1BQU07VUFDbkMsSUFBSSxLQUFLNUQsU0FBQSxFQUFXO1lBRWhCLEtBQUtBLFNBQUEsQ0FBVTZELGtCQUFBLENBQW1CO1lBQ2xDLEtBQUs3RCxTQUFBLENBQVU5SixLQUFBLENBQU07VUFDekI7UUFDSjtRQUNBb0gsZ0JBQUEsQ0FBaUIsZ0JBQWdCLEtBQUtzRyx5QkFBQSxFQUEyQixLQUFLO01BQzFFO01BQ0EsSUFBSSxLQUFLcE0sUUFBQSxLQUFhLGFBQWE7UUFDL0IsS0FBS3NNLG9CQUFBLEdBQXVCLE1BQU07VUFDOUIsS0FBSzFOLE9BQUEsQ0FBUSxtQkFBbUI7WUFDNUJkLFdBQUEsRUFBYTtVQUNqQixDQUFDO1FBQ0w7UUFDQWdJLGdCQUFBLENBQWlCLFdBQVcsS0FBS3dHLG9CQUFBLEVBQXNCLEtBQUs7TUFDaEU7SUFDSjtJQUNBLEtBQUsvTixJQUFBLENBQUs7RUFDZDtFQVFBZ08sZ0JBQWdCekosSUFBQSxFQUFNO0lBQ2xCLE1BQU0zRSxLQUFBLEdBQVEyRixNQUFBLENBQU9DLE1BQUEsQ0FBTyxDQUFDLEdBQUcsS0FBS2xJLElBQUEsQ0FBS3NDLEtBQUs7SUFFL0NBLEtBQUEsQ0FBTXFPLEdBQUEsR0FBTWxCLGNBQUEsQ0FBQTlRLFFBQUE7SUFFWjJELEtBQUEsQ0FBTXFLLFNBQUEsR0FBWTFGLElBQUE7SUFFbEIsSUFBSSxLQUFLaUosRUFBQSxFQUNMNU4sS0FBQSxDQUFNd0YsR0FBQSxHQUFNLEtBQUtvSSxFQUFBO0lBQ3JCLE1BQU1sUSxJQUFBLEdBQU9pSSxNQUFBLENBQU9DLE1BQUEsQ0FBTyxDQUFDLEdBQUcsS0FBS2xJLElBQUEsRUFBTTtNQUN0Q3NDLEtBQUE7TUFDQUMsTUFBQSxFQUFRO01BQ1I0QixRQUFBLEVBQVUsS0FBS0EsUUFBQTtNQUNmRyxNQUFBLEVBQVEsS0FBS0EsTUFBQTtNQUNiRCxJQUFBLEVBQU0sS0FBS0E7SUFDZixHQUFHLEtBQUtyRSxJQUFBLENBQUs0TSxnQkFBQSxDQUFpQjNGLElBQUEsQ0FBSztJQUNuQyxPQUFPLElBQUlwSSxVQUFBLENBQVdvSSxJQUFBLEVBQU1qSCxJQUFJO0VBQ3BDO0VBTUEwQyxLQUFBLEVBQU87SUFDSCxJQUFJaUssU0FBQTtJQUNKLElBQUksS0FBSzNNLElBQUEsQ0FBSzhQLGVBQUEsSUFDVnpSLE1BQUEsQ0FBT3VTLHFCQUFBLElBQ1AsS0FBSy9SLFVBQUEsQ0FBV3VGLE9BQUEsQ0FBUSxXQUFXLE1BQU0sSUFBSTtNQUM3Q3VJLFNBQUEsR0FBWTtJQUNoQixXQUNTLE1BQU0sS0FBSzlOLFVBQUEsQ0FBV21DLE1BQUEsRUFBUTtNQUVuQyxLQUFLZCxZQUFBLENBQWEsTUFBTTtRQUNwQixLQUFLdUMsWUFBQSxDQUFhLFNBQVMseUJBQXlCO01BQ3hELEdBQUcsQ0FBQztNQUNKO0lBQ0osT0FDSztNQUNEa0ssU0FBQSxHQUFZLEtBQUs5TixVQUFBLENBQVc7SUFDaEM7SUFDQSxLQUFLOEQsVUFBQSxHQUFhO0lBRWxCLElBQUk7TUFDQWdLLFNBQUEsR0FBWSxLQUFLK0QsZUFBQSxDQUFnQi9ELFNBQVM7SUFDOUMsU0FDTzdHLENBQUEsRUFBUDtNQUNJLEtBQUtqSCxVQUFBLENBQVdnUyxLQUFBLENBQU07TUFDdEIsS0FBS25PLElBQUEsQ0FBSztNQUNWO0lBQ0o7SUFDQWlLLFNBQUEsQ0FBVWpLLElBQUEsQ0FBSztJQUNmLEtBQUtvTyxZQUFBLENBQWFuRSxTQUFTO0VBQy9CO0VBTUFtRSxhQUFhbkUsU0FBQSxFQUFXO0lBQ3BCLElBQUksS0FBS0EsU0FBQSxFQUFXO01BQ2hCLEtBQUtBLFNBQUEsQ0FBVTZELGtCQUFBLENBQW1CO0lBQ3RDO0lBRUEsS0FBSzdELFNBQUEsR0FBWUEsU0FBQTtJQUVqQkEsU0FBQSxDQUNLcEUsRUFBQSxDQUFHLFNBQVMsS0FBS3dJLE9BQUEsQ0FBUTVRLElBQUEsQ0FBSyxJQUFJLENBQUMsRUFDbkNvSSxFQUFBLENBQUcsVUFBVSxLQUFLOUUsUUFBQSxDQUFTdEQsSUFBQSxDQUFLLElBQUksQ0FBQyxFQUNyQ29JLEVBQUEsQ0FBRyxTQUFTLEtBQUsvRixPQUFBLENBQVFyQyxJQUFBLENBQUssSUFBSSxDQUFDLEVBQ25Db0ksRUFBQSxDQUFHLFNBQVV2RyxNQUFBLElBQVcsS0FBS2UsT0FBQSxDQUFRLG1CQUFtQmYsTUFBTSxDQUFDO0VBQ3hFO0VBT0FnUCxNQUFNL0osSUFBQSxFQUFNO0lBQ1IsSUFBSTBGLFNBQUEsR0FBWSxLQUFLK0QsZUFBQSxDQUFnQnpKLElBQUk7SUFDekMsSUFBSWdLLE1BQUEsR0FBUztJQUNiNVMsTUFBQSxDQUFPdVMscUJBQUEsR0FBd0I7SUFDL0IsTUFBTU0sZUFBQSxHQUFrQkEsQ0FBQSxLQUFNO01BQzFCLElBQUlELE1BQUEsRUFDQTtNQUNKdEUsU0FBQSxDQUFVM0osSUFBQSxDQUFLLENBQUM7UUFBRWIsSUFBQSxFQUFNO1FBQVFrQixJQUFBLEVBQU07TUFBUSxDQUFDLENBQUM7TUFDaERzSixTQUFBLENBQVV2RixJQUFBLENBQUssVUFBVytKLEdBQUEsSUFBUTtRQUM5QixJQUFJRixNQUFBLEVBQ0E7UUFDSixJQUFJLFdBQVdFLEdBQUEsQ0FBSWhQLElBQUEsSUFBUSxZQUFZZ1AsR0FBQSxDQUFJOU4sSUFBQSxFQUFNO1VBQzdDLEtBQUsrTixTQUFBLEdBQVk7VUFDakIsS0FBSzNPLFlBQUEsQ0FBYSxhQUFha0ssU0FBUztVQUN4QyxJQUFJLENBQUNBLFNBQUEsRUFDRDtVQUNKdE8sTUFBQSxDQUFPdVMscUJBQUEsR0FBd0IsZ0JBQWdCakUsU0FBQSxDQUFVMUYsSUFBQTtVQUN6RCxLQUFLMEYsU0FBQSxDQUFVaEosS0FBQSxDQUFNLE1BQU07WUFDdkIsSUFBSXNOLE1BQUEsRUFDQTtZQUNKLElBQUksYUFBYSxLQUFLdE8sVUFBQSxFQUNsQjtZQUNKZ0gsT0FBQSxDQUFRO1lBQ1IsS0FBS21ILFlBQUEsQ0FBYW5FLFNBQVM7WUFDM0JBLFNBQUEsQ0FBVTNKLElBQUEsQ0FBSyxDQUFDO2NBQUViLElBQUEsRUFBTTtZQUFVLENBQUMsQ0FBQztZQUNwQyxLQUFLTSxZQUFBLENBQWEsV0FBV2tLLFNBQVM7WUFDdENBLFNBQUEsR0FBWTtZQUNaLEtBQUt5RSxTQUFBLEdBQVk7WUFDakIsS0FBS0MsS0FBQSxDQUFNO1VBQ2YsQ0FBQztRQUNMLE9BQ0s7VUFDRCxNQUFNM0wsR0FBQSxHQUFNLElBQUk1RCxLQUFBLENBQU0sYUFBYTtVQUVuQzRELEdBQUEsQ0FBSWlILFNBQUEsR0FBWUEsU0FBQSxDQUFVMUYsSUFBQTtVQUMxQixLQUFLeEUsWUFBQSxDQUFhLGdCQUFnQmlELEdBQUc7UUFDekM7TUFDSixDQUFDO0lBQ0w7SUFDQSxTQUFTNEwsZ0JBQUEsRUFBa0I7TUFDdkIsSUFBSUwsTUFBQSxFQUNBO01BRUpBLE1BQUEsR0FBUztNQUNUdEgsT0FBQSxDQUFRO01BQ1JnRCxTQUFBLENBQVU5SixLQUFBLENBQU07TUFDaEI4SixTQUFBLEdBQVk7SUFDaEI7SUFFQSxNQUFNWixPQUFBLEdBQVdyRyxHQUFBLElBQVE7TUFDckIsTUFBTTZMLEtBQUEsR0FBUSxJQUFJelAsS0FBQSxDQUFNLGtCQUFrQjRELEdBQUc7TUFFN0M2TCxLQUFBLENBQU01RSxTQUFBLEdBQVlBLFNBQUEsQ0FBVTFGLElBQUE7TUFDNUJxSyxlQUFBLENBQWdCO01BQ2hCLEtBQUs3TyxZQUFBLENBQWEsZ0JBQWdCOE8sS0FBSztJQUMzQztJQUNBLFNBQVNDLGlCQUFBLEVBQW1CO01BQ3hCekYsT0FBQSxDQUFRLGtCQUFrQjtJQUM5QjtJQUVBLFNBQVNKLFFBQUEsRUFBVTtNQUNmSSxPQUFBLENBQVEsZUFBZTtJQUMzQjtJQUVBLFNBQVMwRixVQUFVQyxFQUFBLEVBQUk7TUFDbkIsSUFBSS9FLFNBQUEsSUFBYStFLEVBQUEsQ0FBR3pLLElBQUEsS0FBUzBGLFNBQUEsQ0FBVTFGLElBQUEsRUFBTTtRQUN6Q3FLLGVBQUEsQ0FBZ0I7TUFDcEI7SUFDSjtJQUVBLE1BQU0zSCxPQUFBLEdBQVVBLENBQUEsS0FBTTtNQUNsQmdELFNBQUEsQ0FBVWdGLGNBQUEsQ0FBZSxRQUFRVCxlQUFlO01BQ2hEdkUsU0FBQSxDQUFVZ0YsY0FBQSxDQUFlLFNBQVM1RixPQUFPO01BQ3pDWSxTQUFBLENBQVVnRixjQUFBLENBQWUsU0FBU0gsZ0JBQWdCO01BQ2xELEtBQUtJLEdBQUEsQ0FBSSxTQUFTakcsT0FBTztNQUN6QixLQUFLaUcsR0FBQSxDQUFJLGFBQWFILFNBQVM7SUFDbkM7SUFDQTlFLFNBQUEsQ0FBVXZGLElBQUEsQ0FBSyxRQUFROEosZUFBZTtJQUN0Q3ZFLFNBQUEsQ0FBVXZGLElBQUEsQ0FBSyxTQUFTMkUsT0FBTztJQUMvQlksU0FBQSxDQUFVdkYsSUFBQSxDQUFLLFNBQVNvSyxnQkFBZ0I7SUFDeEMsS0FBS3BLLElBQUEsQ0FBSyxTQUFTdUUsT0FBTztJQUMxQixLQUFLdkUsSUFBQSxDQUFLLGFBQWFxSyxTQUFTO0lBQ2hDLElBQUksS0FBS3RCLFFBQUEsQ0FBUy9MLE9BQUEsQ0FBUSxjQUFjLE1BQU0sTUFDMUM2QyxJQUFBLEtBQVMsZ0JBQWdCO01BRXpCLEtBQUsvRyxZQUFBLENBQWEsTUFBTTtRQUNwQixJQUFJLENBQUMrUSxNQUFBLEVBQVE7VUFDVHRFLFNBQUEsQ0FBVWpLLElBQUEsQ0FBSztRQUNuQjtNQUNKLEdBQUcsR0FBRztJQUNWLE9BQ0s7TUFDRGlLLFNBQUEsQ0FBVWpLLElBQUEsQ0FBSztJQUNuQjtFQUNKO0VBTUFTLE9BQUEsRUFBUztJQUNMLEtBQUtSLFVBQUEsR0FBYTtJQUNsQnRFLE1BQUEsQ0FBT3VTLHFCQUFBLEdBQXdCLGdCQUFnQixLQUFLakUsU0FBQSxDQUFVMUYsSUFBQTtJQUM5RCxLQUFLeEUsWUFBQSxDQUFhLE1BQU07SUFDeEIsS0FBSzRPLEtBQUEsQ0FBTTtJQUdYLElBQUksV0FBVyxLQUFLMU8sVUFBQSxJQUFjLEtBQUszQyxJQUFBLENBQUs2UCxPQUFBLEVBQVM7TUFDakQsSUFBSS9PLEVBQUEsR0FBSTtNQUNSLE1BQU1DLENBQUEsR0FBSSxLQUFLb1AsUUFBQSxDQUFTblAsTUFBQTtNQUN4QixPQUFPRixFQUFBLEdBQUlDLENBQUEsRUFBR0QsRUFBQSxJQUFLO1FBQ2YsS0FBS2tRLEtBQUEsQ0FBTSxLQUFLYixRQUFBLENBQVNyUCxFQUFBLENBQUU7TUFDL0I7SUFDSjtFQUNKO0VBTUEyQyxTQUFTSCxNQUFBLEVBQVE7SUFDYixJQUFJLGNBQWMsS0FBS1gsVUFBQSxJQUNuQixXQUFXLEtBQUtBLFVBQUEsSUFDaEIsY0FBYyxLQUFLQSxVQUFBLEVBQVk7TUFDL0IsS0FBS0YsWUFBQSxDQUFhLFVBQVVhLE1BQU07TUFFbEMsS0FBS2IsWUFBQSxDQUFhLFdBQVc7TUFDN0IsS0FBS29QLGdCQUFBLENBQWlCO01BQ3RCLFFBQVF2TyxNQUFBLENBQU9uQixJQUFBO1FBQUEsS0FDTjtVQUNELEtBQUsyUCxXQUFBLENBQVlDLElBQUEsQ0FBS3JULEtBQUEsQ0FBTTRFLE1BQUEsQ0FBT0QsSUFBSSxDQUFDO1VBQ3hDO1FBQUEsS0FDQztVQUNELEtBQUsyTyxVQUFBLENBQVcsTUFBTTtVQUN0QixLQUFLdlAsWUFBQSxDQUFhLE1BQU07VUFDeEIsS0FBS0EsWUFBQSxDQUFhLE1BQU07VUFDeEI7UUFBQSxLQUNDO1VBQ0QsTUFBTWlELEdBQUEsR0FBTSxJQUFJNUQsS0FBQSxDQUFNLGNBQWM7VUFFcEM0RCxHQUFBLENBQUl1TSxJQUFBLEdBQU8zTyxNQUFBLENBQU9ELElBQUE7VUFDbEIsS0FBS2IsT0FBQSxDQUFRa0QsR0FBRztVQUNoQjtRQUFBLEtBQ0M7VUFDRCxLQUFLakQsWUFBQSxDQUFhLFFBQVFhLE1BQUEsQ0FBT0QsSUFBSTtVQUNyQyxLQUFLWixZQUFBLENBQWEsV0FBV2EsTUFBQSxDQUFPRCxJQUFJO1VBQ3hDO01BQUE7SUFFWixPQUNLLENBQ0w7RUFDSjtFQU9BeU8sWUFBWXpPLElBQUEsRUFBTTtJQUNkLEtBQUtaLFlBQUEsQ0FBYSxhQUFhWSxJQUFJO0lBQ25DLEtBQUs2TSxFQUFBLEdBQUs3TSxJQUFBLENBQUt5RSxHQUFBO0lBQ2YsS0FBSzZFLFNBQUEsQ0FBVXJLLEtBQUEsQ0FBTXdGLEdBQUEsR0FBTXpFLElBQUEsQ0FBS3lFLEdBQUE7SUFDaEMsS0FBS3FJLFFBQUEsR0FBVyxLQUFLK0IsY0FBQSxDQUFlN08sSUFBQSxDQUFLOE0sUUFBUTtJQUNqRCxLQUFLQyxZQUFBLEdBQWUvTSxJQUFBLENBQUsrTSxZQUFBO0lBQ3pCLEtBQUtDLFdBQUEsR0FBY2hOLElBQUEsQ0FBS2dOLFdBQUE7SUFDeEIsS0FBSzhCLFVBQUEsR0FBYTlPLElBQUEsQ0FBSzhPLFVBQUE7SUFDdkIsS0FBS2hQLE1BQUEsQ0FBTztJQUVaLElBQUksYUFBYSxLQUFLUixVQUFBLEVBQ2xCO0lBQ0osS0FBS2tQLGdCQUFBLENBQWlCO0VBQzFCO0VBTUFBLGlCQUFBLEVBQW1CO0lBQ2YsS0FBS3pSLGNBQUEsQ0FBZSxLQUFLa1EsZ0JBQWdCO0lBQ3pDLEtBQUtBLGdCQUFBLEdBQW1CLEtBQUtwUSxZQUFBLENBQWEsTUFBTTtNQUM1QyxLQUFLNkMsT0FBQSxDQUFRLGNBQWM7SUFDL0IsR0FBRyxLQUFLcU4sWUFBQSxHQUFlLEtBQUtDLFdBQVc7SUFDdkMsSUFBSSxLQUFLclEsSUFBQSxDQUFLd0wsU0FBQSxFQUFXO01BQ3JCLEtBQUs4RSxnQkFBQSxDQUFpQjVFLEtBQUEsQ0FBTTtJQUNoQztFQUNKO0VBTUFxRixRQUFBLEVBQVU7SUFDTixLQUFLckIsV0FBQSxDQUFZTixNQUFBLENBQU8sR0FBRyxLQUFLTyxhQUFhO0lBSTdDLEtBQUtBLGFBQUEsR0FBZ0I7SUFDckIsSUFBSSxNQUFNLEtBQUtELFdBQUEsQ0FBWTFPLE1BQUEsRUFBUTtNQUMvQixLQUFLeUIsWUFBQSxDQUFhLE9BQU87SUFDN0IsT0FDSztNQUNELEtBQUs0TyxLQUFBLENBQU07SUFDZjtFQUNKO0VBTUFBLE1BQUEsRUFBUTtJQUNKLElBQUksYUFBYSxLQUFLMU8sVUFBQSxJQUNsQixLQUFLZ0ssU0FBQSxDQUFVdEssUUFBQSxJQUNmLENBQUMsS0FBSytPLFNBQUEsSUFDTixLQUFLMUIsV0FBQSxDQUFZMU8sTUFBQSxFQUFRO01BQ3pCLE1BQU1pQyxPQUFBLEdBQVUsS0FBS21QLGtCQUFBLENBQW1CO01BQ3hDLEtBQUt6RixTQUFBLENBQVUzSixJQUFBLENBQUtDLE9BQU87TUFHM0IsS0FBSzBNLGFBQUEsR0FBZ0IxTSxPQUFBLENBQVFqQyxNQUFBO01BQzdCLEtBQUt5QixZQUFBLENBQWEsT0FBTztJQUM3QjtFQUNKO0VBT0EyUCxtQkFBQSxFQUFxQjtJQUNqQixNQUFNQyxzQkFBQSxHQUF5QixLQUFLRixVQUFBLElBQ2hDLEtBQUt4RixTQUFBLENBQVUxRixJQUFBLEtBQVMsYUFDeEIsS0FBS3lJLFdBQUEsQ0FBWTFPLE1BQUEsR0FBUztJQUM5QixJQUFJLENBQUNxUixzQkFBQSxFQUF3QjtNQUN6QixPQUFPLEtBQUszQyxXQUFBO0lBQ2hCO0lBQ0EsSUFBSTRDLFdBQUEsR0FBYztJQUNsQixTQUFTeFIsRUFBQSxHQUFJLEdBQUdBLEVBQUEsR0FBSSxLQUFLNE8sV0FBQSxDQUFZMU8sTUFBQSxFQUFRRixFQUFBLElBQUs7TUFDOUMsTUFBTXVDLElBQUEsR0FBTyxLQUFLcU0sV0FBQSxDQUFZNU8sRUFBQSxFQUFHdUMsSUFBQTtNQUNqQyxJQUFJQSxJQUFBLEVBQU07UUFDTmlQLFdBQUEsSUFBZWhTLFVBQUEsQ0FBVytDLElBQUk7TUFDbEM7TUFDQSxJQUFJdkMsRUFBQSxHQUFJLEtBQUt3UixXQUFBLEdBQWMsS0FBS0gsVUFBQSxFQUFZO1FBQ3hDLE9BQU8sS0FBS3pDLFdBQUEsQ0FBWVAsS0FBQSxDQUFNLEdBQUdyTyxFQUFDO01BQ3RDO01BQ0F3UixXQUFBLElBQWU7SUFDbkI7SUFDQSxPQUFPLEtBQUs1QyxXQUFBO0VBQ2hCO0VBU0F4TSxNQUFNaU8sR0FBQSxFQUFLakYsT0FBQSxFQUFTOUQsRUFBQSxFQUFJO0lBQ3BCLEtBQUs0SixVQUFBLENBQVcsV0FBV2IsR0FBQSxFQUFLakYsT0FBQSxFQUFTOUQsRUFBRTtJQUMzQyxPQUFPO0VBQ1g7RUFDQXBGLEtBQUttTyxHQUFBLEVBQUtqRixPQUFBLEVBQVM5RCxFQUFBLEVBQUk7SUFDbkIsS0FBSzRKLFVBQUEsQ0FBVyxXQUFXYixHQUFBLEVBQUtqRixPQUFBLEVBQVM5RCxFQUFFO0lBQzNDLE9BQU87RUFDWDtFQVVBNEosV0FBVzdQLElBQUEsRUFBTWtCLElBQUEsRUFBTTZJLE9BQUEsRUFBUzlELEVBQUEsRUFBSTtJQUNoQyxJQUFJLGVBQWUsT0FBTy9FLElBQUEsRUFBTTtNQUM1QitFLEVBQUEsR0FBSy9FLElBQUE7TUFDTEEsSUFBQSxHQUFPO0lBQ1g7SUFDQSxJQUFJLGVBQWUsT0FBTzZJLE9BQUEsRUFBUztNQUMvQjlELEVBQUEsR0FBSzhELE9BQUE7TUFDTEEsT0FBQSxHQUFVO0lBQ2Q7SUFDQSxJQUFJLGNBQWMsS0FBS3ZKLFVBQUEsSUFBYyxhQUFhLEtBQUtBLFVBQUEsRUFBWTtNQUMvRDtJQUNKO0lBQ0F1SixPQUFBLEdBQVVBLE9BQUEsSUFBVyxDQUFDO0lBQ3RCQSxPQUFBLENBQVFDLFFBQUEsR0FBVyxVQUFVRCxPQUFBLENBQVFDLFFBQUE7SUFDckMsTUFBTTdJLE1BQUEsR0FBUztNQUNYbkIsSUFBQTtNQUNBa0IsSUFBQTtNQUNBNkk7SUFDSjtJQUNBLEtBQUt6SixZQUFBLENBQWEsZ0JBQWdCYSxNQUFNO0lBQ3hDLEtBQUtvTSxXQUFBLENBQVk2QyxJQUFBLENBQUtqUCxNQUFNO0lBQzVCLElBQUk4RSxFQUFBLEVBQ0EsS0FBS2hCLElBQUEsQ0FBSyxTQUFTZ0IsRUFBRTtJQUN6QixLQUFLaUosS0FBQSxDQUFNO0VBQ2Y7RUFJQXhPLE1BQUEsRUFBUTtJQUNKLE1BQU1BLEtBQUEsR0FBUUEsQ0FBQSxLQUFNO01BQ2hCLEtBQUtFLE9BQUEsQ0FBUSxjQUFjO01BQzNCLEtBQUs0SixTQUFBLENBQVU5SixLQUFBLENBQU07SUFDekI7SUFDQSxNQUFNMlAsZUFBQSxHQUFrQkEsQ0FBQSxLQUFNO01BQzFCLEtBQUtaLEdBQUEsQ0FBSSxXQUFXWSxlQUFlO01BQ25DLEtBQUtaLEdBQUEsQ0FBSSxnQkFBZ0JZLGVBQWU7TUFDeEMzUCxLQUFBLENBQU07SUFDVjtJQUNBLE1BQU00UCxjQUFBLEdBQWlCQSxDQUFBLEtBQU07TUFFekIsS0FBS3JMLElBQUEsQ0FBSyxXQUFXb0wsZUFBZTtNQUNwQyxLQUFLcEwsSUFBQSxDQUFLLGdCQUFnQm9MLGVBQWU7SUFDN0M7SUFDQSxJQUFJLGNBQWMsS0FBSzdQLFVBQUEsSUFBYyxXQUFXLEtBQUtBLFVBQUEsRUFBWTtNQUM3RCxLQUFLQSxVQUFBLEdBQWE7TUFDbEIsSUFBSSxLQUFLK00sV0FBQSxDQUFZMU8sTUFBQSxFQUFRO1FBQ3pCLEtBQUtvRyxJQUFBLENBQUssU0FBUyxNQUFNO1VBQ3JCLElBQUksS0FBS2dLLFNBQUEsRUFBVztZQUNoQnFCLGNBQUEsQ0FBZTtVQUNuQixPQUNLO1lBQ0Q1UCxLQUFBLENBQU07VUFDVjtRQUNKLENBQUM7TUFDTCxXQUNTLEtBQUt1TyxTQUFBLEVBQVc7UUFDckJxQixjQUFBLENBQWU7TUFDbkIsT0FDSztRQUNENVAsS0FBQSxDQUFNO01BQ1Y7SUFDSjtJQUNBLE9BQU87RUFDWDtFQU1BTCxRQUFRa0QsR0FBQSxFQUFLO0lBQ1RySCxNQUFBLENBQU91UyxxQkFBQSxHQUF3QjtJQUMvQixLQUFLbk8sWUFBQSxDQUFhLFNBQVNpRCxHQUFHO0lBQzlCLEtBQUszQyxPQUFBLENBQVEsbUJBQW1CMkMsR0FBRztFQUN2QztFQU1BM0MsUUFBUWYsTUFBQSxFQUFRQyxXQUFBLEVBQWE7SUFDekIsSUFBSSxjQUFjLEtBQUtVLFVBQUEsSUFDbkIsV0FBVyxLQUFLQSxVQUFBLElBQ2hCLGNBQWMsS0FBS0EsVUFBQSxFQUFZO01BRS9CLEtBQUt2QyxjQUFBLENBQWUsS0FBS2tRLGdCQUFnQjtNQUV6QyxLQUFLM0QsU0FBQSxDQUFVNkQsa0JBQUEsQ0FBbUIsT0FBTztNQUV6QyxLQUFLN0QsU0FBQSxDQUFVOUosS0FBQSxDQUFNO01BRXJCLEtBQUs4SixTQUFBLENBQVU2RCxrQkFBQSxDQUFtQjtNQUNsQyxJQUFJLE9BQU9rQyxtQkFBQSxLQUF3QixZQUFZO1FBQzNDQSxtQkFBQSxDQUFvQixnQkFBZ0IsS0FBS25DLHlCQUFBLEVBQTJCLEtBQUs7UUFDekVtQyxtQkFBQSxDQUFvQixXQUFXLEtBQUtqQyxvQkFBQSxFQUFzQixLQUFLO01BQ25FO01BRUEsS0FBSzlOLFVBQUEsR0FBYTtNQUVsQixLQUFLdU4sRUFBQSxHQUFLO01BRVYsS0FBS3pOLFlBQUEsQ0FBYSxTQUFTVCxNQUFBLEVBQVFDLFdBQVc7TUFHOUMsS0FBS3lOLFdBQUEsR0FBYyxFQUFDO01BQ3BCLEtBQUtDLGFBQUEsR0FBZ0I7SUFDekI7RUFDSjtFQU9BdUMsZUFBZS9CLFFBQUEsRUFBVTtJQUNyQixNQUFNd0MsZ0JBQUEsR0FBbUIsRUFBQztJQUMxQixJQUFJN1IsRUFBQSxHQUFJO0lBQ1IsTUFBTThSLENBQUEsR0FBSXpDLFFBQUEsQ0FBU25QLE1BQUE7SUFDbkIsT0FBT0YsRUFBQSxHQUFJOFIsQ0FBQSxFQUFHOVIsRUFBQSxJQUFLO01BQ2YsSUFBSSxDQUFDLEtBQUtqQyxVQUFBLENBQVd1RixPQUFBLENBQVErTCxRQUFBLENBQVNyUCxFQUFBLENBQUUsR0FDcEM2UixnQkFBQSxDQUFpQkosSUFBQSxDQUFLcEMsUUFBQSxDQUFTclAsRUFBQSxDQUFFO0lBQ3pDO0lBQ0EsT0FBTzZSLGdCQUFBO0VBQ1g7QUFDSjtBQUNBdFUsTUFBQSxDQUFPTSxRQUFBLEdBQVc4USxjQUFBLENBQUE5USxRQUFBOzs7QUMva0JYLElBQU1DLFNBQUEsR0FBV1AsTUFBQSxDQUFPTSxRQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvd29ya2Zsb3cvb3V0In0=