System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["fraction.js","4.3.4"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [],
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
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
    exports: {}
  }).exports, mod), mod.exports;
};
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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// node_modules/fraction.js/fraction.js
var require_fraction = __commonJS({
  "node_modules/fraction.js/fraction.js"(exports, module2) {
    (function (root) {
      "use strict";

      var MAX_CYCLE_LEN = 2e3;
      var P = {
        "s": 1,
        "n": 0,
        "d": 1
      };
      function assign(n, s) {
        if (isNaN(n = parseInt(n, 10))) {
          throw InvalidParameter();
        }
        return n * s;
      }
      function newFraction(n, d) {
        if (d === 0) {
          throw DivisionByZero();
        }
        var f = Object.create(Fraction.prototype);
        f["s"] = n < 0 ? -1 : 1;
        n = n < 0 ? -n : n;
        var a = gcd(n, d);
        f["n"] = n / a;
        f["d"] = d / a;
        return f;
      }
      function factorize(num) {
        var factors = {};
        var n = num;
        var i = 2;
        var s = 4;
        while (s <= n) {
          while (n % i === 0) {
            n /= i;
            factors[i] = (factors[i] || 0) + 1;
          }
          s += 1 + 2 * i++;
        }
        if (n !== num) {
          if (n > 1) factors[n] = (factors[n] || 0) + 1;
        } else {
          factors[num] = (factors[num] || 0) + 1;
        }
        return factors;
      }
      var parse = function (p1, p2) {
        var n = 0,
          d = 1,
          s = 1;
        var v = 0,
          w = 0,
          x = 0,
          y = 1,
          z = 1;
        var A = 0,
          B = 1;
        var C = 1,
          D = 1;
        var N = 1e7;
        var M;
        if (p1 === void 0 || p1 === null) {} else if (p2 !== void 0) {
          n = p1;
          d = p2;
          s = n * d;
          if (n % 1 !== 0 || d % 1 !== 0) {
            throw NonIntegerParameter();
          }
        } else switch (typeof p1) {
          case "object":
            {
              if ("d" in p1 && "n" in p1) {
                n = p1["n"];
                d = p1["d"];
                if ("s" in p1) n *= p1["s"];
              } else if (0 in p1) {
                n = p1[0];
                if (1 in p1) d = p1[1];
              } else {
                throw InvalidParameter();
              }
              s = n * d;
              break;
            }
          case "number":
            {
              if (p1 < 0) {
                s = p1;
                p1 = -p1;
              }
              if (p1 % 1 === 0) {
                n = p1;
              } else if (p1 > 0) {
                if (p1 >= 1) {
                  z = Math.pow(10, Math.floor(1 + Math.log(p1) / Math.LN10));
                  p1 /= z;
                }
                while (B <= N && D <= N) {
                  M = (A + C) / (B + D);
                  if (p1 === M) {
                    if (B + D <= N) {
                      n = A + C;
                      d = B + D;
                    } else if (D > B) {
                      n = C;
                      d = D;
                    } else {
                      n = A;
                      d = B;
                    }
                    break;
                  } else {
                    if (p1 > M) {
                      A += C;
                      B += D;
                    } else {
                      C += A;
                      D += B;
                    }
                    if (B > N) {
                      n = C;
                      d = D;
                    } else {
                      n = A;
                      d = B;
                    }
                  }
                }
                n *= z;
              } else if (isNaN(p1) || isNaN(p2)) {
                d = n = NaN;
              }
              break;
            }
          case "string":
            {
              B = p1.match(/\d+|./g);
              if (B === null) throw InvalidParameter();
              if (B[A] === "-") {
                s = -1;
                A++;
              } else if (B[A] === "+") {
                A++;
              }
              if (B.length === A + 1) {
                w = assign(B[A++], s);
              } else if (B[A + 1] === "." || B[A] === ".") {
                if (B[A] !== ".") {
                  v = assign(B[A++], s);
                }
                A++;
                if (A + 1 === B.length || B[A + 1] === "(" && B[A + 3] === ")" || B[A + 1] === "'" && B[A + 3] === "'") {
                  w = assign(B[A], s);
                  y = Math.pow(10, B[A].length);
                  A++;
                }
                if (B[A] === "(" && B[A + 2] === ")" || B[A] === "'" && B[A + 2] === "'") {
                  x = assign(B[A + 1], s);
                  z = Math.pow(10, B[A + 1].length) - 1;
                  A += 3;
                }
              } else if (B[A + 1] === "/" || B[A + 1] === ":") {
                w = assign(B[A], s);
                y = assign(B[A + 2], 1);
                A += 3;
              } else if (B[A + 3] === "/" && B[A + 1] === " ") {
                v = assign(B[A], s);
                w = assign(B[A + 2], s);
                y = assign(B[A + 4], 1);
                A += 5;
              }
              if (B.length <= A) {
                d = y * z;
                s = n = x + d * v + z * w;
                break;
              }
            }
          default:
            throw InvalidParameter();
        }
        if (d === 0) {
          throw DivisionByZero();
        }
        P["s"] = s < 0 ? -1 : 1;
        P["n"] = Math.abs(n);
        P["d"] = Math.abs(d);
      };
      function modpow(b, e, m) {
        var r = 1;
        for (; e > 0; b = b * b % m, e >>= 1) {
          if (e & 1) {
            r = r * b % m;
          }
        }
        return r;
      }
      function cycleLen(n, d) {
        for (; d % 2 === 0; d /= 2) {}
        for (; d % 5 === 0; d /= 5) {}
        if (d === 1) return 0;
        var rem = 10 % d;
        var t = 1;
        for (; rem !== 1; t++) {
          rem = rem * 10 % d;
          if (t > MAX_CYCLE_LEN) return 0;
        }
        return t;
      }
      function cycleStart(n, d, len) {
        var rem1 = 1;
        var rem2 = modpow(10, len, d);
        for (var t = 0; t < 300; t++) {
          if (rem1 === rem2) return t;
          rem1 = rem1 * 10 % d;
          rem2 = rem2 * 10 % d;
        }
        return 0;
      }
      function gcd(a, b) {
        if (!a) return b;
        if (!b) return a;
        while (1) {
          a %= b;
          if (!a) return b;
          b %= a;
          if (!b) return a;
        }
      }
      ;
      function Fraction(a, b) {
        parse(a, b);
        if (this instanceof Fraction) {
          a = gcd(P["d"], P["n"]);
          this["s"] = P["s"];
          this["n"] = P["n"] / a;
          this["d"] = P["d"] / a;
        } else {
          return newFraction(P["s"] * P["n"], P["d"]);
        }
      }
      var DivisionByZero = function () {
        return new Error("Division by Zero");
      };
      var InvalidParameter = function () {
        return new Error("Invalid argument");
      };
      var NonIntegerParameter = function () {
        return new Error("Parameters must be integer");
      };
      Fraction.prototype = {
        "s": 1,
        "n": 0,
        "d": 1,
        "abs": function () {
          return newFraction(this["n"], this["d"]);
        },
        "neg": function () {
          return newFraction(-this["s"] * this["n"], this["d"]);
        },
        "add": function (a, b) {
          parse(a, b);
          return newFraction(this["s"] * this["n"] * P["d"] + P["s"] * this["d"] * P["n"], this["d"] * P["d"]);
        },
        "sub": function (a, b) {
          parse(a, b);
          return newFraction(this["s"] * this["n"] * P["d"] - P["s"] * this["d"] * P["n"], this["d"] * P["d"]);
        },
        "mul": function (a, b) {
          parse(a, b);
          return newFraction(this["s"] * P["s"] * this["n"] * P["n"], this["d"] * P["d"]);
        },
        "div": function (a, b) {
          parse(a, b);
          return newFraction(this["s"] * P["s"] * this["n"] * P["d"], this["d"] * P["n"]);
        },
        "clone": function () {
          return newFraction(this["s"] * this["n"], this["d"]);
        },
        "mod": function (a, b) {
          if (isNaN(this["n"]) || isNaN(this["d"])) {
            return new Fraction(NaN);
          }
          if (a === void 0) {
            return newFraction(this["s"] * this["n"] % this["d"], 1);
          }
          parse(a, b);
          if (0 === P["n"] && 0 === this["d"]) {
            throw DivisionByZero();
          }
          return newFraction(this["s"] * (P["d"] * this["n"]) % (P["n"] * this["d"]), P["d"] * this["d"]);
        },
        "gcd": function (a, b) {
          parse(a, b);
          return newFraction(gcd(P["n"], this["n"]) * gcd(P["d"], this["d"]), P["d"] * this["d"]);
        },
        "lcm": function (a, b) {
          parse(a, b);
          if (P["n"] === 0 && this["n"] === 0) {
            return newFraction(0, 1);
          }
          return newFraction(P["n"] * this["n"], gcd(P["n"], this["n"]) * gcd(P["d"], this["d"]));
        },
        "ceil": function (places) {
          places = Math.pow(10, places || 0);
          if (isNaN(this["n"]) || isNaN(this["d"])) {
            return new Fraction(NaN);
          }
          return newFraction(Math.ceil(places * this["s"] * this["n"] / this["d"]), places);
        },
        "floor": function (places) {
          places = Math.pow(10, places || 0);
          if (isNaN(this["n"]) || isNaN(this["d"])) {
            return new Fraction(NaN);
          }
          return newFraction(Math.floor(places * this["s"] * this["n"] / this["d"]), places);
        },
        "round": function (places) {
          places = Math.pow(10, places || 0);
          if (isNaN(this["n"]) || isNaN(this["d"])) {
            return new Fraction(NaN);
          }
          return newFraction(Math.round(places * this["s"] * this["n"] / this["d"]), places);
        },
        "inverse": function () {
          return newFraction(this["s"] * this["d"], this["n"]);
        },
        "pow": function (a, b) {
          parse(a, b);
          if (P["d"] === 1) {
            if (P["s"] < 0) {
              return newFraction(Math.pow(this["s"] * this["d"], P["n"]), Math.pow(this["n"], P["n"]));
            } else {
              return newFraction(Math.pow(this["s"] * this["n"], P["n"]), Math.pow(this["d"], P["n"]));
            }
          }
          if (this["s"] < 0) return null;
          var N = factorize(this["n"]);
          var D = factorize(this["d"]);
          var n = 1;
          var d = 1;
          for (var k in N) {
            if (k === "1") continue;
            if (k === "0") {
              n = 0;
              break;
            }
            N[k] *= P["n"];
            if (N[k] % P["d"] === 0) {
              N[k] /= P["d"];
            } else return null;
            n *= Math.pow(k, N[k]);
          }
          for (var k in D) {
            if (k === "1") continue;
            D[k] *= P["n"];
            if (D[k] % P["d"] === 0) {
              D[k] /= P["d"];
            } else return null;
            d *= Math.pow(k, D[k]);
          }
          if (P["s"] < 0) {
            return newFraction(d, n);
          }
          return newFraction(n, d);
        },
        "equals": function (a, b) {
          parse(a, b);
          return this["s"] * this["n"] * P["d"] === P["s"] * P["n"] * this["d"];
        },
        "compare": function (a, b) {
          parse(a, b);
          var t = this["s"] * this["n"] * P["d"] - P["s"] * P["n"] * this["d"];
          return (0 < t) - (t < 0);
        },
        "simplify": function (eps) {
          if (isNaN(this["n"]) || isNaN(this["d"])) {
            return this;
          }
          eps = eps || 1e-3;
          var thisABS = this["abs"]();
          var cont = thisABS["toContinued"]();
          for (var i = 1; i < cont.length; i++) {
            var s = newFraction(cont[i - 1], 1);
            for (var k = i - 2; k >= 0; k--) {
              s = s["inverse"]()["add"](cont[k]);
            }
            if (Math.abs(s["sub"](thisABS).valueOf()) < eps) {
              return s["mul"](this["s"]);
            }
          }
          return this;
        },
        "divisible": function (a, b) {
          parse(a, b);
          return !(!(P["n"] * this["d"]) || this["n"] * P["d"] % (P["n"] * this["d"]));
        },
        "valueOf": function () {
          return this["s"] * this["n"] / this["d"];
        },
        "toFraction": function (excludeWhole) {
          var whole,
            str = "";
          var n = this["n"];
          var d = this["d"];
          if (this["s"] < 0) {
            str += "-";
          }
          if (d === 1) {
            str += n;
          } else {
            if (excludeWhole && (whole = Math.floor(n / d)) > 0) {
              str += whole;
              str += " ";
              n %= d;
            }
            str += n;
            str += "/";
            str += d;
          }
          return str;
        },
        "toLatex": function (excludeWhole) {
          var whole,
            str = "";
          var n = this["n"];
          var d = this["d"];
          if (this["s"] < 0) {
            str += "-";
          }
          if (d === 1) {
            str += n;
          } else {
            if (excludeWhole && (whole = Math.floor(n / d)) > 0) {
              str += whole;
              n %= d;
            }
            str += "\\frac{";
            str += n;
            str += "}{";
            str += d;
            str += "}";
          }
          return str;
        },
        "toContinued": function () {
          var t;
          var a = this["n"];
          var b = this["d"];
          var res = [];
          if (isNaN(a) || isNaN(b)) {
            return res;
          }
          do {
            res.push(Math.floor(a / b));
            t = a % b;
            a = b;
            b = t;
          } while (a !== 1);
          return res;
        },
        "toString": function (dec) {
          var N = this["n"];
          var D = this["d"];
          if (isNaN(N) || isNaN(D)) {
            return "NaN";
          }
          dec = dec || 15;
          var cycLen = cycleLen(N, D);
          var cycOff = cycleStart(N, D, cycLen);
          var str = this["s"] < 0 ? "-" : "";
          str += N / D | 0;
          N %= D;
          N *= 10;
          if (N) str += ".";
          if (cycLen) {
            for (var i = cycOff; i--;) {
              str += N / D | 0;
              N %= D;
              N *= 10;
            }
            str += "(";
            for (var i = cycLen; i--;) {
              str += N / D | 0;
              N %= D;
              N *= 10;
            }
            str += ")";
          } else {
            for (var i = dec; N && i--;) {
              str += N / D | 0;
              N %= D;
              N *= 10;
            }
          }
          return str;
        }
      };
      if (typeof exports === "object") {
        Object.defineProperty(Fraction, "__esModule", {
          "value": true
        });
        Fraction["default"] = Fraction;
        Fraction["Fraction"] = Fraction;
        module2["exports"] = Fraction;
      } else {
        root["Fraction"] = Fraction;
      }
    })(exports);
  }
});

// .beyond/uimport/fraction.js.4.3.4.js
var fraction_js_4_3_4_exports = {};
__export(fraction_js_4_3_4_exports, {
  default: () => fraction_js_4_3_4_default
});
module.exports = __toCommonJS(fraction_js_4_3_4_exports);
__reExport(fraction_js_4_3_4_exports, __toESM(require_fraction()), module.exports);
var import_fraction = __toESM(require_fraction());
var fraction_js_4_3_4_default = import_fraction.default;
/**
 * @license Fraction.js v4.3.0 20/08/2023
 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2023, Robert Eisele (robert@raw.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9mcmFjdGlvbi5qcy9mcmFjdGlvbi5qcyIsIi4uLy5iZXlvbmQvdWltcG9ydC9mcmFjdGlvbi5qcy40LjMuNC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlX2ZyYWN0aW9uIiwiX19jb21tb25KUyIsIm5vZGVfbW9kdWxlcy9mcmFjdGlvbi5qcy9mcmFjdGlvbi5qcyIsImV4cG9ydHMiLCJtb2R1bGUyIiwicm9vdCIsIk1BWF9DWUNMRV9MRU4iLCJQIiwiYXNzaWduIiwibiIsInMiLCJpc05hTiIsInBhcnNlSW50IiwiSW52YWxpZFBhcmFtZXRlciIsIm5ld0ZyYWN0aW9uIiwiZCIsIkRpdmlzaW9uQnlaZXJvIiwiZiIsIk9iamVjdCIsImNyZWF0ZSIsIkZyYWN0aW9uIiwicHJvdG90eXBlIiwiYSIsImdjZCIsImZhY3Rvcml6ZSIsIm51bSIsImZhY3RvcnMiLCJpIiwicGFyc2UiLCJwMSIsInAyIiwidiIsInciLCJ4IiwieSIsInoiLCJBIiwiQiIsIkMiLCJEIiwiTiIsIk0iLCJOb25JbnRlZ2VyUGFyYW1ldGVyIiwiTWF0aCIsInBvdyIsImZsb29yIiwibG9nIiwiTE4xMCIsIk5hTiIsIm1hdGNoIiwibGVuZ3RoIiwiYWJzIiwibW9kcG93IiwiYiIsImUiLCJtIiwiciIsImN5Y2xlTGVuIiwicmVtIiwidCIsImN5Y2xlU3RhcnQiLCJsZW4iLCJyZW0xIiwicmVtMiIsIkVycm9yIiwibmVnIiwiYWRkIiwic3ViIiwibXVsIiwiZGl2IiwiY2xvbmUiLCJtb2QiLCJsY20iLCJjZWlsIiwicGxhY2VzIiwicm91bmQiLCJpbnZlcnNlIiwiayIsImVxdWFscyIsImNvbXBhcmUiLCJzaW1wbGlmeSIsImVwcyIsInRoaXNBQlMiLCJjb250IiwidmFsdWVPZiIsImRpdmlzaWJsZSIsInRvRnJhY3Rpb24iLCJleGNsdWRlV2hvbGUiLCJ3aG9sZSIsInN0ciIsInRvTGF0ZXgiLCJ0b0NvbnRpbnVlZCIsInJlcyIsInB1c2giLCJ0b1N0cmluZyIsImRlYyIsImN5Y0xlbiIsImN5Y09mZiIsImRlZmluZVByb3BlcnR5IiwiZnJhY3Rpb25fanNfNF8zXzRfZXhwb3J0cyIsIl9fZXhwb3J0IiwiZGVmYXVsdCIsImZyYWN0aW9uX2pzXzRfM180X2RlZmF1bHQiLCJtb2R1bGUiLCJfX3RvQ29tbW9uSlMiLCJfX3JlRXhwb3J0IiwiX190b0VTTSIsImltcG9ydF9mcmFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxnQkFBQSxHQUFBQyxVQUFBO0VBQUEsc0NBQUFDLENBQUFDLE9BQUEsRUFBQUMsT0FBQTtJQXVDQSxDQUFDLFVBQVNDLElBQUEsRUFBTTtNQUVkOztNQUtBLElBQUlDLGFBQUEsR0FBZ0I7TUFHcEIsSUFBSUMsQ0FBQSxHQUFJO1FBQ04sS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO01BQ1A7TUFFQSxTQUFTQyxPQUFPQyxDQUFBLEVBQUdDLENBQUEsRUFBRztRQUVwQixJQUFJQyxLQUFBLENBQU1GLENBQUEsR0FBSUcsUUFBQSxDQUFTSCxDQUFBLEVBQUcsRUFBRSxDQUFDLEdBQUc7VUFDOUIsTUFBTUksZ0JBQUEsQ0FBaUI7UUFDekI7UUFDQSxPQUFPSixDQUFBLEdBQUlDLENBQUE7TUFDYjtNQUdBLFNBQVNJLFlBQVlMLENBQUEsRUFBR00sQ0FBQSxFQUFHO1FBRXpCLElBQUlBLENBQUEsS0FBTSxHQUFHO1VBQ1gsTUFBTUMsY0FBQSxDQUFlO1FBQ3ZCO1FBRUEsSUFBSUMsQ0FBQSxHQUFJQyxNQUFBLENBQU9DLE1BQUEsQ0FBT0MsUUFBQSxDQUFTQyxTQUFTO1FBQ3hDSixDQUFBLENBQUUsT0FBT1IsQ0FBQSxHQUFJLElBQUksS0FBSztRQUV0QkEsQ0FBQSxHQUFJQSxDQUFBLEdBQUksSUFBSSxDQUFDQSxDQUFBLEdBQUlBLENBQUE7UUFFakIsSUFBSWEsQ0FBQSxHQUFJQyxHQUFBLENBQUlkLENBQUEsRUFBR00sQ0FBQztRQUVo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