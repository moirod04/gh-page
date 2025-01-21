System.register(["@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, Api, JCall, __beyond_pkg, hmr;
  _export({
    Api: void 0,
    JCall: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
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
          "vspecifier": "@bg/jadmin@0.0.1/api"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /*********************
      INTERNAL MODULE: ./api
      *********************/
      ims.set('./api', {
        hash: 3176858363,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Api = void 0;
          var _jcall = require("./jcall");
          /*bundle*/
          class Api {
            async action(method = 'get', route, specs = {}) {
              const call = new _jcall.JCall();
              return call[method](this.getURL(route), specs);
            }
            getURL(route) {
              return route;
            }
            get(route, specs) {
              return this.action('get', route, specs);
            }
            post(route, specs) {
              return this.action('post', route, specs);
            }
          }
          exports.Api = Api;
        }
      });

      /***********************
      INTERNAL MODULE: ./jcall
      ***********************/

      ims.set('./jcall', {
        hash: 1958602913,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.JCall = JCall;
          /*bundle*/
          function JCall() {
            this.checkToken = headers => {
              if (typeof window === 'undefined') return headers;
              let session = window.localStorage.getItem('session');
              if (!session) return headers;
              const sessionObject = JSON.parse(session);
              headers.append('Authorization', `Bearer ${sessionObject.accessToken}`);
              return headers;
            };
            this.execute = async (url, method = 'get', params = {}, headersSpecs = {}) => {
              try {
                const keys = Object.keys(headersSpecs);
                let headers = new Headers();
                keys.forEach(key => headers.append(key, headersSpecs[key]));
                const specs = {
                  method,
                  headers,
                  mode: 'cors'
                };
                const emptyParams = Object.entries(params).length === 0 && params.constructor === Object;
                if (method === 'post' && !emptyParams) specs.body = JSON.stringify(params);else if (!emptyParams && method === 'get') {
                  const parameters = Object.keys(params);
                  if (parameters.length) {
                    url += "?";
                    parameters.forEach(key => {
                      if ([NaN, undefined, ''].includes(params[key])) return;
                      url += `&${key}=${params[key]}`;
                    });
                  }
                }
                const response = await fetch(url, specs);
                return response.json();
              } catch (e) {
                console.error("error jcall", e);
              }
            };
            this.get = (url, params, headers) => this.execute(url, 'get', params, headers);
            this.post = (url, params, headers = {
              'Content-Type': 'application/json'
            }) => this.execute(url, 'post', params, headers);
          }
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
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Api') && _export("Api", Api = require ? require('./api').Api : value);
        (require || prop === 'JCall') && _export("JCall", JCall = require ? require('./jcall').JCall : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfamNhbGwiLCJyZXF1aXJlIiwiQXBpIiwiYWN0aW9uIiwibWV0aG9kIiwicm91dGUiLCJzcGVjcyIsImNhbGwiLCJKQ2FsbCIsImdldFVSTCIsImdldCIsInBvc3QiLCJleHBvcnRzIiwiY2hlY2tUb2tlbiIsImhlYWRlcnMiLCJ3aW5kb3ciLCJzZXNzaW9uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNlc3Npb25PYmplY3QiLCJKU09OIiwicGFyc2UiLCJhcHBlbmQiLCJhY2Nlc3NUb2tlbiIsImV4ZWN1dGUiLCJ1cmwiLCJwYXJhbXMiLCJoZWFkZXJzU3BlY3MiLCJrZXlzIiwiT2JqZWN0IiwiSGVhZGVycyIsImZvckVhY2giLCJrZXkiLCJtb2RlIiwiZW1wdHlQYXJhbXMiLCJlbnRyaWVzIiwibGVuZ3RoIiwiY29uc3RydWN0b3IiLCJib2R5Iiwic3RyaW5naWZ5IiwicGFyYW1ldGVycyIsIk5hTiIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJlIiwiY29uc29sZSIsImVycm9yIl0sInNvdXJjZXMiOlsiL2FwaS50cyIsIi9qY2FsbC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVRO1VBQVUsTUFDWkMsR0FBRztZQUVMLE1BQU1DLE1BQU1BLENBQUNDLE1BQU0sR0FBRyxLQUFLLEVBQUVDLEtBQWEsRUFBRUMsS0FBQSxHQUFnQixFQUFFO2NBQzFELE1BQU1DLElBQUksR0FBUyxJQUFJUCxNQUFBLENBQUFRLEtBQUssRUFBRTtjQUM5QixPQUFPRCxJQUFJLENBQUNILE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQ0ssTUFBTSxDQUFDSixLQUFLLENBQUMsRUFBRUMsS0FBSyxDQUFDO1lBQ2xEO1lBRUFHLE1BQU1BLENBQUNKLEtBQWE7Y0FDaEIs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