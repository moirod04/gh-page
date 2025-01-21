System.register(["@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, generateNumeroReferencia, __beyond_pkg, hmr;
  _export("generateNumeroReferencia", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
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
          "vspecifier": "sgs-workflow@1.0.0/helpers"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /*******************************************
      INTERNAL MODULE: ./generare-reference-number
      *******************************************/
      ims.set('./generare-reference-number', {
        hash: 1565636139,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.generateNumeroReferencia = generateNumeroReferencia;
          /*bundle*/
          function generateNumeroReferencia(number, processId) {
            // Map of process IDs to their respective ending strings
            const processIdMapping = {
              2: '04',
              1: '05' // atm
            };
            if (!(processId in processIdMapping)) {
              return '';
            }
            if (!number) return number;
            // Prepend zeros to the number to match the required format
            const numStr = '0000000000000' + number.toString();
            const endingStr = processIdMapping[processId];
            // Prepare the number for check digit calculation
            const numberForCheckDigit = number.toString() + endingStr;
            // Calculate the check digit using the Luhn algorithm
            const checkDigit = getCheckDigit(numberForCheckDigit);
            // Concatenate the number, ending string, and check digit
            const concatenated = numStr + endingStr + checkDigit.toString();
            // Get the last 13 characters as the reference number
            const referenceNumber = concatenated.slice(-13);
            return referenceNumber;
          }
          function getCheckDigit(numberString) {
            let multiplier = 2;
            let sum = 0;
            // Reverse the digits for processing
            const digits = numberString.split('').reverse();
            for (const digitStr of digits) {
              const digit = parseInt(digitStr, 10);
              // Calculate the value for the current position
              const res = calculatePositionValue(multiplier, digit);
              sum += res;
              // Alternate the multiplier between 2 and 1
              multiplier = multiplier === 2 ? 1 : 2;
            }
            // Calculate the remainder and determine the check digit
            const remainder = 10 - sum % 10;
            return remainder === 10 ? 0 : remainder;
          }
          function calculatePositionValue(multiplier, digit) {
            if (multiplier === 2 && digit >= 5) {
              return 2 * digit - 9;
            } else {
              return digit * multiplier;
            }
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./generare-reference-number",
        "from": "generateNumeroReferencia",
        "name": "generateNumeroReferencia"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'generateNumeroReferencia') && _export("generateNumeroReferencia", generateNumeroReferencia = require ? require('./generare-reference-number').generateNumeroReferencia : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJnZW5lcmF0ZU51bWVyb1JlZmVyZW5jaWEiLCJudW1iZXIiLCJwcm9jZXNzSWQiLCJwcm9jZXNzSWRNYXBwaW5nIiwibnVtU3RyIiwidG9TdHJpbmciLCJlbmRpbmdTdHIiLCJudW1iZXJGb3JDaGVja0RpZ2l0IiwiY2hlY2tEaWdpdCIsImdldENoZWNrRGlnaXQiLCJjb25jYXRlbmF0ZWQiLCJyZWZlcmVuY2VOdW1iZXIiLCJzbGljZSIsIm51bWJlclN0cmluZyIsIm11bHRpcGxpZXIiLCJzdW0iLCJkaWdpdHMiLCJzcGxpdCIsInJldmVyc2UiLCJkaWdpdFN0ciIsImRpZ2l0IiwicGFyc2VJbnQiLCJyZXMiLCJjYWxjdWxhdGVQb3NpdGlvblZhbHVlIiwicmVtYWluZGVyIl0sInNvdXJjZXMiOlsiL2NvZGUvZ2VuZXJhcmUtcmVmZXJlbmNlLW51bWJlci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBUTtVQUFVLFNBQVdBLHdCQUF3QkEsQ0FBQ0MsTUFBYyxFQUFFQyxTQUFpQjtZQUNuRjtZQUNBLE1BQU1DLGdCQUFnQixHQUE4QjtjQUNoRCxDQUFDLEVBQUUsSUFBSTtjQUNQLENBQUMsRUFBRSxJQUFJLENBQUU7YUFDWjtZQUVELElBQUksRUFBRUQsU0FBUyxJQUFJQyxnQkFBZ0IsQ0FBQyxFQUFFO2NBQ2xDLE9BQU8sRUFBRTs7WUFFYixJQUFJLENBQUNGLE1BQU0sRUFBRSxPQUFPQSxNQUFNO1lBQzFCO1lBQ0EsTUFBTUcsTUFBTSxHQUFHLGVBQWUsR0FBR0gsTUFBTSxDQUFDSSxRQUFRLEVBQUU7WUFDbEQsTUFBTUMsU0FBUyxHQUFHSCxnQkFBZ0IsQ0FBQ0QsU0FBUyxDQUFDO1lBRTdDO1lBQ0EsTUFBTUssbUJBQW1CLEdBQUdOLE1BQU0sQ0FBQ0ksUUFBUSxFQUFFLEdBQUdDLFNBQVM7WUFFekQ7WUFDQSxNQUFNRSxVQUFVLEdBQUdDLGFBQWEsQ0FBQ0YsbUJBQW1CLENBQUM7WUFFckQ7WUFDQSxNQUFNRyxZQUFZLEdBQUdOLE1BQU0sR0FBR0UsU0FBUyxHQUFHRSxVQUFVLENBQUNILFFBQVEsRUFBRTtZQUUvRDtZQUNBLE1BQU1NLGVBQWUsR0FBR0QsWUFBWSxDQUFDRSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFFL0MsT0FBT0QsZUFBZTtVQUMxQjtVQUVBLFNBQVNGLGFBQWFBLENBQUNJLFlBQW9CO1lBQ3ZDLElBQUlDLFVBQVUsR0FBRyxDQUFDO1lBQ2xCLElBQUlDLEdBQUcsR0FBRyxDQUFDO1lBRVg7WUFDQSxNQUFNQyxNQUFNLEdBQUdILFlBQVksQ0FBQ0ksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDQyxPQUFPLEVBQUU7WUFFL0MsS0FBSyxNQUFNQyxRQUFRLElBQUlILE1BQU0sRUFBRTtjQUMzQixNQUFNSSxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0YsUUFBUSxFQUFFLEVBQUUsQ0FBQztjQUVwQztjQUNBLE1BQU1HLEdBQUcsR0FBR0Msc0JBQXNCLENBQUNULFVBQVUsRUFBRU0sS0FBSyxDQUFDO2NBRXJETCxHQUFHLElBQUlPLEdBQUc7Y0FFVjtjQUNBUixVQUFVLEdBQUdBLFVBQVUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7O1lBR3pDO1lBQ0EsTUFBTVUsU0FBUyxHQUFHLEVBQUUsR0FBSVQsR0FBRyxHQUFHLEVBQUc7WUFFakMsT0FBT1MsU0FBUyxLQUFLLEVBQUUsR0FBRyxDQUFDLEdBQUdBLFNBQVM7VUFDM0M7VUFFQSxTQUFTRCxzQkFBc0JBLENBQUNULFVBQWtCLEVBQUVNLEtBQWE7WUFDN0QsSUFBSU4sVUFBVSxLQUFLLENBQUMsSUFBSU0sS0FBSyxJQUFJLENBQUMsRUFBRTtjQUNoQyxPQUFPLENBQUMsR0FBR0EsS0FBSyxHQUFHLENBQUM7YUFDdkIsTUFBTTtjQUNILE9BQU9BLEtBQUssR0FBR04sVUFBVTs7VUFFakMiLCJpZ25vcmVMaXN0IjpbXX0=