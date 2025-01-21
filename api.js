System.register(["@beyond-js/kernel@0.1.9/bundle", "@bgroup/http-suite@1.0.5/api", "sgs-workflow@1.0.0/wrappers", "sgs-workflow@1.0.0/config"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Api, __beyond_pkg, hmr;
  _export("Api", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_bgroupHttpSuite105Api) {
      dependency_1 = _bgroupHttpSuite105Api;
    }, function (_sgsWorkflow100Wrappers) {
      dependency_2 = _sgsWorkflow100Wrappers;
    }, function (_sgsWorkflow100Config) {
      dependency_3 = _sgsWorkflow100Config;
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
          "vspecifier": "sgs-workflow@1.0.0/api"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@bgroup/http-suite/api', dependency_1], ['sgs-workflow/wrappers', dependency_2], ['sgs-workflow/config', dependency_3]]);
      ims = new Map();
      /*********************
      INTERNAL MODULE: ./api
      *********************/
      ims.set('./api', {
        hash: 3361196090,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Api = void 0;
          var _api = require("@bgroup/http-suite/api");
          var _wrappers = require("sgs-workflow/wrappers");
          var _config = require("sgs-workflow/config");
          /*bundle*/
          class Api extends _api.Api {
            messageErrorTokenJWT = "TOKEN_EXPIRED";
            constructor(baseUrl) {
              const url = baseUrl ?? _config.default.params.server;
              super(url);
              _wrappers.session.on("login", () => {
                this.sessionToken(_wrappers.session.token);
              });
              this.sessionToken(_wrappers.session.token);
            }
            sessionToken(bearer) {
              return super.bearer(bearer);
            }
            // Método para realizar la acción específica en caso de error
            handleSpecificError(response) {
              if (!response.message.includes(this.messageErrorTokenJWT)) return;
              _wrappers.session.tokenExpired();
            }
            // Método para manejar la respuesta y llamar a handleSpecificError si es necesario
            handleResponse(response) {
              if (!response || typeof response !== "object" || !response.message) return;
              this.handleSpecificError(response);
            }
            // Sobrescribir los métodos específicos para manejar la respuesta de manera centralizada
            async get(url) {
              try {
                const response = await super.get(url);
                this.handleResponse(response);
                return response;
              } catch (error) {
                console.error("Error:", error);
                throw error;
              }
            }
            async post(url, data) {
              try {
                const response = await super.post(url, data);
                this.handleResponse(response);
                return response;
              } catch (error) {
                console.error("Error:", error);
                throw error;
              }
            }
            async put(url, data) {
              try {
                const response = await super.put(url, data);
                this.handleResponse(response);
                return response;
              } catch (error) {
                console.error("Error:", error);
                throw error;
              }
            }
            async delete(url, data) {
              try {
                const response = await super.delete(url, data);
                this.handleResponse(response);
                return response;
              } catch (error) {
                console.error("Error:", error);
                throw error;
              }
            }
            async stream(url) {
              try {
                const response = await super.stream(url);
                this.handleResponse(response);
                return response;
              } catch (error) {
                console.error("Error:", error);
                throw error;
              }
            }
          }
          exports.Api = Api;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./api",
        "from": "Api",
        "name": "Api"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Api') && _export("Api", Api = require ? require('./api').Api : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYXBpIiwicmVxdWlyZSIsIl93cmFwcGVycyIsIl9jb25maWciLCJBcGkiLCJtZXNzYWdlRXJyb3JUb2tlbkpXVCIsImNvbnN0cnVjdG9yIiwiYmFzZVVybCIsInVybCIsImRlZmF1bHQiLCJwYXJhbXMiLCJzZXJ2ZXIiLCJzZXNzaW9uIiwib24iLCJzZXNzaW9uVG9rZW4iLCJ0b2tlbiIsImJlYXJlciIsImhhbmRsZVNwZWNpZmljRXJyb3IiLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJpbmNsdWRlcyIsInRva2VuRXhwaXJlZCIsImhhbmRsZVJlc3BvbnNlIiwiZ2V0IiwiZXJyb3IiLCJjb25zb2xlIiwicG9zdCIsImRhdGEiLCJwdXQiLCJkZWxldGUiLCJzdHJlYW0iLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiL2FwaS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxJQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxTQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxPQUFBLEdBQUFGLE9BQUE7VUFDTztVQUFVLE1BQU9HLEdBQUksU0FBUUosSUFBQSxDQUFBSSxHQUFPO1lBQ2xDQyxvQkFBb0IsR0FBRyxlQUFlO1lBRTlDQyxZQUFZQyxPQUFnQjtjQUMzQixNQUFNQyxHQUFHLEdBQUdELE9BQU8sSUFBSUosT0FBQSxDQUFBTSxPQUFNLENBQUNDLE1BQU0sQ0FBQ0MsTUFBTTtjQUMzQyxLQUFLLENBQUNILEdBQUcsQ0FBQztjQUNWTixTQUFBLENBQUFVLE9BQU8sQ0FBQ0MsRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFLO2dCQUN4QixJQUFJLENBQUNDLFlBQVksQ0FBQ1osU0FBQSxDQUFBVSxPQUFPLENBQUNHLEtBQUssQ0FBQztjQUNqQyxDQUFDLENBQUM7Y0FDRixJQUFJLENBQUNELFlBQVksQ0FBQ1osU0FBQSxDQUFBVSxPQUFPLENBQUNH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