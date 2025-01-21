System.register(["@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, amount, getCurrentDate, getCurrentDateItems, rowsJView, __beyond_pkg, hmr;
  _export({
    amount: void 0,
    getCurrentDate: void 0,
    getCurrentDateItems: void 0,
    rowsJView: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/widgets", "0.1.5"], ["pragmate-ui", "0.0.3"], ["socket.io", "4.5.4"], ["socket.io-client", "4.5.4"], ["@types/react", "18.0.26"], ["@types/react-dom", "18.0.10"], ["@jadmin/ui", "1.0.0"], ["sgs-workflow", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@jadmin/ui@1.0.0/utils"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /************************
      INTERNAL MODULE: ./amount
      ************************/
      ims.set('./amount', {
        hash: 2188626780,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.amount = amount;
          /*bundle*/ /**
                      * This function takes a number and returns a string with the number formatted as a currency.
                      * @param {number} amount - number - The amount to be formatted
                      * @returns A function that takes a number and returns a string.
                      */
          function amount(amount) {
            const value = isNaN(amount) ? 0 : amount;
            const number = new Intl.NumberFormat('es-CL').format(value);
            const output = `$${number}`;
            return output;
          }
          ;
        }
      });

      /******************************
      INTERNAL MODULE: ./current-date
      ******************************/

      ims.set('./current-date', {
        hash: 1680781562,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getCurrentDateItems = exports.getCurrentDate = void 0;
          /*bundle*/ /**
                      * It returns the current date in the format of YYYY-MM-DD
                      */
          const getCurrentDate = () => new Date().toLocaleDateString("en-CA", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric"
          }).split("/").reverse().join("-");
          /**
           * It takes a string, converts it to a date, formats it to a locale date string, splits it, and joins
           * it
           * @param {string} timeCreated - string
           */
          exports.getCurrentDate = getCurrentDate;
          /*bundle*/
          const getCurrentDateItems = timeCreated => new Date(timeCreated).toLocaleDateString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric"
          });
          exports.getCurrentDateItems = getCurrentDateItems;
        }
      });

      /****************************
      INTERNAL MODULE: ./rows-jview
      ****************************/

      ims.set('./rows-jview', {
        hash: 3494454234,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.rowsJView = void 0;
          /*bundle*/
          const rowsJView = exports.rowsJView = 10;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./amount",
        "from": "amount",
        "name": "amount"
      }, {
        "im": "./current-date",
        "from": "getCurrentDate",
        "name": "getCurrentDate"
      }, {
        "im": "./current-date",
        "from": "getCurrentDateItems",
        "name": "getCurrentDateItems"
      }, {
        "im": "./rows-jview",
        "from": "rowsJView",
        "name": "rowsJView"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'amount') && _export("amount", amount = require ? require('./amount').amount : value);
        (require || prop === 'getCurrentDate') && _export("getCurrentDate", getCurrentDate = require ? require('./current-date').getCurrentDate : value);
        (require || prop === 'getCurrentDateItems') && _export("getCurrentDateItems", getCurrentDateItems = require ? require('./current-date').getCurrentDateItems : value);
        (require || prop === 'rowsJView') && _export("rowsJView", rowsJView = require ? require('./rows-jview').rowsJView : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJhbW91bnQiLCJ2YWx1ZSIsImlzTmFOIiwibnVtYmVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsImZvcm1hdCIsIm91dHB1dCIsImdldEN1cnJlbnREYXRlIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIm1vbnRoIiwiZGF5IiwieWVhciIsInNwbGl0IiwicmV2ZXJzZSIsImpvaW4iLCJleHBvcnRzIiwiZ2V0Q3VycmVudERhdGVJdGVtcyIsInRpbWVDcmVhdGVkIiwicm93c0pWaWV3Il0sInNvdXJjZXMiOlsiL2Ftb3VudC50cyIsIi9jdXJyZW50LWRhdGUudHMiLCIvcm93cy1qdmlldy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFNTyxXQUxQOzs7OztVQUtpQixTQUFVQSxNQUFNQSxDQUFDQSxNQUFjO1lBQzVDLE1BQU1DLEtBQUssR0FBV0MsS0FBSyxDQUFDRixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUdBLE1BQU07WUFDaEQsTUFBTUcsTUFBTSxHQUFXLElBQUlDLElBQUksQ0FBQ0MsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxNQUFNLENBQUNMLEtBQUssQ0FBQztZQUNuRSxNQUFNTSxNQUFNLEdBQVcsSUFBSUosTUFBTSxFQUFFO1lBQ25DLE9BQU9JLE1BQU07VUFDakI7VUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSTSxXQUhQOzs7VUFJSSxNQUFNQyxjQUFjLEdBQWlCQSxDQUFBLEtBQ2pDLElBQUlDLElBQUksRUFBRSxDQUFDQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7WUFDbkNDLEtBQUssRUFBRSxTQUFTO1lBQ2hCQyxHQUFHLEVBQUUsU0FBUztZQUNkQyxJQUFJLEVBQUU7V0FDVCxDQUFDLENBQUNDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsT0FBTyxFQUFFLENBQUNDLElBQUksQ0FBQyxHQUFHLENBQUM7VUFFekM7Ozs7O1VBQUFDLE9BQUEsQ0FBQVQsY0FBQSxHQUFBQSxjQUFBO1VBS087VUFDSCxNQUFNVSxtQkFBbUIsR0FBSUMsV0FBMEIsSUFDbkQsSUFBSVYsSUFBSSxDQUFDVSxXQUFXLENBQUMsQ0FDaEJULGtCQUFrQixDQUFDLE9BQU8sRUFBRTtZQUN6QkMsS0FBSyxFQUFFLFNBQVM7WUFDaEJDLEdBQUcsRUFBRSxTQUFTO1lBQ2RDLElBQUksRUFBRTtXQUNULENBQUM7VUFBQUksT0FBQSxDQUFBQyxtQkFBQSxHQUFBQSxtQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QlA7VUFBVyxNQUFNRSxTQUFTLEdBQUFILE9BQUEsQ0FBQUcsU0FBQSxHQUFXLEVBQUUiLCJpZ25vcmVMaXN0IjpbXX0=