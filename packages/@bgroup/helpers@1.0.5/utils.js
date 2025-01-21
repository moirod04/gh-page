System.register(["@beyond-js/kernel@0.1.9/bundle", "@bgroup/helpers@1.0.5/md5"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, Utils, __beyond_pkg, hmr;
  _export("Utils", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_bgroupHelpers105Md) {
      dependency_1 = _bgroupHelpers105Md;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@babel/preset-typescript", "7.23.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.3"], ["dotenv", "16.3.1"], ["express", "4.18.2"], ["jsonwebtoken", "9.0.2"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["socket.io-client", "4.7.2"], ["@babel/core", "7.23.3"], ["@babel/preset-env", "7.23.3"], ["@beyond-js/local", "0.1.3"], ["@types/jest", "29.5.8"], ["@types/react", "18.2.37"], ["@types/react-dom", "18.2.15"], ["babel-jest", "29.7.0"], ["jest", "29.7.0"], ["@bgroup/helpers", "1.0.5"], ["sgs-workflow", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@bgroup/helpers@1.0.5/utils"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@bgroup/helpers/md5', dependency_1]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2989037873,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Utils = void 0;
          var _md = require("@bgroup/helpers/md5");
          /**
           * The server actions
           */
          class Model {
            generateToken(length, onlyNumbers) {
              let result = '';
              const characters = onlyNumbers ? '0123456789' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
              const charactersLength = characters.length;
              for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
              }
              return result;
            }
            md5(str) {
              return (0, _md.MD5)(str);
            }
            toCamelCase(key) {
              const keyArray = key.split(/\_/.test(key) ? '_' : '-');
              for (let i = 0; i < keyArray.length; i++) {
                if (i === 0) {
                  keyArray[i] = keyArray[i].toLowerCase();
                  continue;
                }
                keyArray[i] = keyArray[i].replace(/(^|\s)\S/g, letter => letter.toUpperCase());
              }
              return keyArray.join('');
            }
            toUnderscore(key) {
              const keyArray = key.split('');
              for (let i = 0; i < keyArray.length; i++) {
                if (keyArray[i] === keyArray[i].toUpperCase()) keyArray.splice(i++, 0, '_');
              }
              return keyArray.join('').toLowerCase();
            }
            objectProcessor(data, fn) {
              const newObject = {};
              let newKey = '';
              for (let key in data) {
                newKey = fn(key);
                const value = data[key];
                newObject[newKey] = value && typeof value === 'object' && !['time_created', 'time_updated', 'date_created', 'date_estimate'].includes(key) ? this.objectProcessor(data[key], fn) : value;
              }
              return newObject;
            }
            underscoreToCamelCase(data) {
              return this.objectProcessor(data, this.toCamelCase);
            }
            camelCaseToUnderscore(data) {
              return this.objectProcessor(data, this.toUnderscore);
            }
            processAdditional(item, model) {
              const record = {};
              for (const key in item) {
                const isField = model.rawAttributes.hasOwnProperty(key);
                if (isField) record[key] = item.dataValues[key];
              }
              return record;
            }
            processQueryItem(item, model, additionalAttributes, additionalModels) {
              const record = {};
              for (let key in item.dataValues) {
                const isField = model.rawAttributes.hasOwnProperty(key);
                const isAdditional = additionalAttributes?.length && additionalAttributes.includes(key) && additionalModels?.length;
                if (isField || isAdditional) {
                  const itemValue = item.dataValues[key];
                  if (!isAdditional) record[key] = itemValue;else {
                    const modelIndex = additionalAttributes.indexOf(key);
                    if (modelIndex < 0) continue;
                    const additionalModel = additionalModels[modelIndex];
                    record[key] = this.processAdditional(itemValue, additionalModel);
                  }
                }
              }
              return record;
            }
            processQueryArray(data, model, additionalAttributes, additionalModel) {
              return data.map(item => this.processQueryItem(item, model, additionalAttributes, additionalModel));
            }
            processItems(data) {
              return data.map(item => this.underscoreToCamelCase(item));
            }
            convertObjectToQuery = object => {
              if (typeof object !== 'object') throw 'PARAM MUST BE AN OBJECT';
              let query = '';
              Object.entries(object).forEach(([key, value], index) => {
                value = typeof value === "object" ? JSON.stringify(value) : value;
                if (index === 0) return query += `?${key}=${value}`;
                query += `&${key}=${value}`;
              });
              return query;
            };
          }
          /*bundle*/
          const Utils = exports.Utils = new Model();
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Utils",
        "name": "Utils"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Utils') && _export("Utils", Utils = require ? require('./index').Utils : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbWQiLCJyZXF1aXJlIiwiTW9kZWwiLCJnZW5lcmF0ZVRva2VuIiwibGVuZ3RoIiwib25seU51bWJlcnMiLCJyZXN1bHQiLCJjaGFyYWN0ZXJzIiwiY2hhcmFjdGVyc0xlbmd0aCIsImkiLCJjaGFyQXQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJtZDUiLCJzdHIiLCJNRDUiLCJ0b0NhbWVsQ2FzZSIsImtleSIsImtleUFycmF5Iiwic3BsaXQiLCJ0ZXN0IiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwibGV0dGVyIiwidG9VcHBlckNhc2UiLCJqb2luIiwidG9VbmRlcnNjb3JlIiwic3BsaWNlIiwib2JqZWN0UHJvY2Vzc29yIiwiZGF0YSIsImZuIiwibmV3T2JqZWN0IiwibmV3S2V5IiwidmFsdWUiLCJpbmNsdWRlcyIsInVuZGVyc2NvcmVUb0NhbWVsQ2FzZSIsImNhbWVsQ2FzZVRvVW5kZXJzY29yZSIsInByb2Nlc3NBZGRpdGlvbmFsIiwiaXRlbSIsIm1vZGVsIiwicmVjb3JkIiwiaXNGaWVsZCIsInJhd0F0dHJpYnV0ZXMiLCJoYXNPd25Qcm9wZXJ0eSIsImRhdGFWYWx1ZXMiLCJwcm9jZXNzUXVlcnlJdGVtIiwiYWRkaXRpb25hbEF0dHJpYnV0ZXMiLCJhZGRpdGlvbmFsTW9kZWxzIiwiaXNBZGRpdGlvbmFsIiwiaXRlbVZhbHVlIiwibW9kZWxJbmRleCIsImluZGV4T2YiLCJhZGRpdGlvbmFsTW9kZWwiLCJwcm9jZXNzUXVlcnlBcnJheSIsIm1hcCIsInByb2Nlc3NJdGVtcyIsImNvbnZlcnRPYmplY3RUb1F1ZXJ5Iiwib2JqZWN0IiwicXVlcnkiLCJPYmplY3QiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImluZGV4IiwiSlNPTiIsInN0cmluZ2lmeSIsIlV0aWxzIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LENBQUM7a0JBQ3RDLElBQUksQ0FBQytCLFlBQVksRUFBRVIsTUFBTSxDQUFDdkIsR0FBRyxDQUFDLEdBQUdnQyxTQUFTLENBQUMsS0FDdEM7b0JBQ0osTUFBTUMsVUFBVSxHQUFHSixvQkFBb0IsQ0FBQ0ssT0FBTyxDQUFDbEMsR0FBRyxDQUFDO29CQUNwRCxJQUFJaUMsVUFBVSxHQUFHLENBQUMsRUFBRTtvQkFDcEIsTUFBTUUsZUFBZSxHQUFHTCxnQkFBZ0IsQ0FBQ0csVUFBVSxDQUFDO29CQUNwRFYsTUFBTSxDQUFDdkIsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDb0IsaUJBQWlCLENBQUNZLFNBQVMsRUFBRUcsZUFBZSxDQUFDOzs7O2NBS25FLE9BQU9aLE1BQU07WUFDZDtZQUVBYSxpQkFBaUJBLENBQUN4QixJQUFJLEVBQUVVLEtBQUssRUFBRU8sb0JBQXFCLEVBQUVNLGVBQWdCO2NBQ3JFLE9BQU92QixJQUFJLENBQUN5QixHQUFHLENBQUNoQixJQUFJLElBQUksSUFBSSxDQUFDTyxnQkFBZ0IsQ0FBQ1AsSUFBSSxFQUFFQyxLQUFLLEVBQUVPLG9CQUFvQixFQUFFTSxlQUFlLENBQUMsQ0FBQztZQUNuRztZQUVBRyxZQUFZQSxDQUFDMUIsSUFBYztjQUMxQixPQUFPQSxJQUFJLENBQUN5QixHQUFHLENBQUNoQixJQUFJLElBQUksSUFBSSxDQUFDSCxxQkFBcUIsQ0FBQ0csSUFBSSxDQUFDLENBQUM7WUFDMUQ7WUFFQWtCLG9CQUFvQixHQUFJQyxNQUFjLElBQUk7Y0FDekMsSUFBSSxPQUFPQSxNQUFNLEtBQUssUUFBUSxFQUFFLE1BQU0seUJBQXlCO2NBQy9ELElBQUlDLEtBQUssR0FBRyxFQUFFO2NBQ2RDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDSCxNQUFNLENBQUMsQ0FBQ0ksT0FBTyxDQUFDLENBQUMsQ0FBQzVDLEdBQUcsRUFBRWdCLEtBQUssQ0FBQyxFQUFFNkIsS0FBSyxLQUFJO2dCQUN0RDdCLEtBQUssR0FBRyxPQUFPQSxLQUFLLEtBQUssUUFBUSxHQUFHOEIsSUFBSSxDQUFDQyxTQUFTLENBQUMvQixLQUFLLENBQUMsR0FBR0EsS0FBSztnQkFDakUsSUFBSTZCLEtBQUssS0FBSyxDQUFDLEVBQUUsT0FBUUosS0FBSyxJQUFJLElBQUl6QyxHQUFHLElBQUlnQixLQUFLLEVBQUU7Z0JBQ3BEeUIsS0FBSyxJQUFJLElBQUl6QyxHQUFHLElBQUlnQixLQUFLLEVBQUU7Y0FDNUIsQ0FBQyxDQUFDO2NBQ0YsT0FBT3lCLEtBQUs7WUFDYixDQUFDOztVQUdLO1VBQ04sTUFBTU8sS0FBSyxHQUFBQyxPQUFBLENBQUFELEtBQUEsR0FBRyxJQUFJaEUsS0FBSyxFQUFFIiwiaWdub3JlTGlzdCI6W119