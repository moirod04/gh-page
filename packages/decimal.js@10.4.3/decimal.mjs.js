System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["decimal.js","10.4.3"]]);
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
var __toCommonJS = mod2 => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod2);

// .beyond/uimport/decimal.js/decimal.mjs.10.4.3.js
var decimal_mjs_10_4_3_exports = {};
__export(decimal_mjs_10_4_3_exports, {
  Decimal: () => Decimal,
  default: () => decimal_mjs_10_4_3_default
});
module.exports = __toCommonJS(decimal_mjs_10_4_3_exports);

// node_modules/decimal.js/decimal.mjs
var EXP_LIMIT = 9e15,
  MAX_DIGITS = 1e9,
  NUMERALS = "0123456789abcdef",
  LN10 = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
  PI = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
  DEFAULTS = {
    precision: 20,
    rounding: 4,
    modulo: 1,
    toExpNeg: -7,
    toExpPos: 21,
    minE: -EXP_LIMIT,
    maxE: EXP_LIMIT,
    crypto: false
  },
  inexact,
  quadrant,
  external = true,
  decimalError = "[DecimalError] ",
  invalidArgument = decimalError + "Invalid argument: ",
  precisionLimitExceeded = decimalError + "Precision limit exceeded",
  cryptoUnavailable = decimalError + "crypto unavailable",
  tag = "[object Decimal]",
  mathfloor = Math.floor,
  mathpow = Math.pow,
  isBinary = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
  isHex = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
  isOctal = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
  isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  BASE = 1e7,
  LOG_BASE = 7,
  MAX_SAFE_INTEGER = 9007199254740991,
  LN10_PRECISION = LN10.length - 1,
  PI_PRECISION = PI.length - 1,
  P = {
    toStringTag: tag
  };
P.absoluteValue = P.abs = function () {
  var x = new this.constructor(this);
  if (x.s < 0) x.s = 1;
  return finalise(x);
};
P.ceil = function () {
  return finalise(new this.constructor(this), this.e + 1, 2);
};
P.clampedTo = P.clamp = function (min2, max2) {
  var k,
    x = this,
    Ctor = x.constructor;
  min2 = new Ctor(min2);
  max2 = new Ctor(max2);
  if (!min2.s || !max2.s) return new Ctor(NaN);
  if (min2.gt(max2)) throw Error(invalidArgument + max2);
  k = x.cmp(min2);
  return k < 0 ? min2 : x.cmp(max2) > 0 ? max2 : new Ctor(x);
};
P.comparedTo = P.cmp = function (y) {
  var i,
    j,
    xdL,
    ydL,
    x = this,
    xd = x.d,
    yd = (y = new x.constructor(y)).d,
    xs = x.s,
    ys = y.s;
  if (!xd || !yd) {
    return !xs || !ys ? NaN : xs !== ys ? xs : xd === yd ? 0 : !xd ^ xs < 0 ? 1 : -1;
  }
  if (!xd[0] || !yd[0]) return xd[0] ? xs : yd[0] ? -ys : 0;
  if (xs !== ys) return xs;
  if (x.e !== y.e) return x.e > y.e ^ xs < 0 ? 1 : -1;
  xdL = xd.length;
  ydL = yd.length;
  for (i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i) {
    if (xd[i] !== yd[i]) return xd[i] > yd[i] ^ xs < 0 ? 1 : -1;
  }
  return xdL === ydL ? 0 : xdL > ydL ^ xs < 0 ? 1 : -1;
};
P.cosine = P.cos = function () {
  var pr,
    rm,
    x = this,
    Ctor = x.constructor;
  if (!x.d) return new Ctor(NaN);
  if (!x.d[0]) return new Ctor(1);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
  Ctor.rounding = 1;
  x = cosine(Ctor, toLessThanHalfPi(Ctor, x));
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(quadrant == 2 || quadrant == 3 ? x.neg() : x, pr, rm, true);
};
P.cubeRoot = P.cbrt = function () {
  var e,
    m,
    n,
    r,
    rep,
    s,
    sd,
    t,
    t3,
    t3plusx,
    x = this,
    Ctor = x.constructor;
  if (!x.isFinite() || x.isZero()) return new Ctor(x);
  external = false;
  s = x.s * mathpow(x.s * x, 1 / 3);
  if (!s || Math.abs(s) == 1 / 0) {
    n = digitsToString(x.d);
    e = x.e;
    if (s = (e - n.length + 1) % 3) n += s == 1 || s == -2 ? "0" : "00";
    s = mathpow(n, 1 / 3);
    e = mathfloor((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2));
    if (s == 1 / 0) {
      n = "5e" + e;
    } else {
      n = s.toExponential();
      n = n.slice(0, n.indexOf("e") + 1) + e;
    }
    r = new Ctor(n);
    r.s = x.s;
  } else {
    r = new Ctor(s.toString());
  }
  sd = (e = Ctor.precision) + 3;
  for (;;) {
    t = r;
    t3 = t.times(t).times(t);
    t3plusx = t3.plus(x);
    r = divide(t3plusx.plus(x).times(t), t3plusx.plus(t3), sd + 2, 1);
    if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
      n = n.slice(sd - 3, sd + 1);
      if (n == "9999" || !rep && n == "4999") {
        if (!rep) {
          finalise(t, e + 1, 0);
          if (t.times(t).times(t).eq(x)) {
            r = t;
            break;
          }
        }
        sd += 4;
        rep = 1;
      } else {
        if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
          finalise(r, e + 1, 1);
          m = !r.times(r).times(r).eq(x);
        }
        break;
      }
    }
  }
  external = true;
  return finalise(r, e, Ctor.rounding, m);
};
P.decimalPlaces = P.dp = function () {
  var w,
    d = this.d,
    n = NaN;
  if (d) {
    w = d.length - 1;
    n = (w - mathfloor(this.e / LOG_BASE)) * LOG_BASE;
    w = d[w];
    if (w) for (; w % 10 == 0; w /= 10) n--;
    if (n < 0) n = 0;
  }
  return n;
};
P.dividedBy = P.div = function (y) {
  return divide(this, new this.constructor(y));
};
P.dividedToIntegerBy = P.divToInt = function (y) {
  var x = this,
    Ctor = x.constructor;
  return finalise(divide(x, new Ctor(y), 0, 1, 1), Ctor.precision, Ctor.rounding);
};
P.equals = P.eq = function (y) {
  return this.cmp(y) === 0;
};
P.floor = function () {
  return finalise(new this.constructor(this), this.e + 1, 3);
};
P.greaterThan = P.gt = function (y) {
  return this.cmp(y) > 0;
};
P.greaterThanOrEqualTo = P.gte = function (y) {
  var k = this.cmp(y);
  return k == 1 || k === 0;
};
P.hyperbolicCosine = P.cosh = function () {
  var k,
    n,
    pr,
    rm,
    len,
    x = this,
    Ctor = x.constructor,
    one = new Ctor(1);
  if (!x.isFinite()) return new Ctor(x.s ? 1 / 0 : NaN);
  if (x.isZero()) return one;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
  Ctor.rounding = 1;
  len = x.d.length;
  if (len < 32) {
    k = Math.ceil(len / 3);
    n = (1 / tinyPow(4, k)).toString();
  } else {
    k = 16;
    n = "2.3283064365386962890625e-10";
  }
  x = taylorSeries(Ctor, 1, x.times(n), new Ctor(1), true);
  var cosh2_x,
    i = k,
    d8 = new Ctor(8);
  for (; i--;) {
    cosh2_x = x.times(x);
    x = one.minus(cosh2_x.times(d8.minus(cosh2_x.times(d8))));
  }
  return finalise(x, Ctor.precision = pr, Ctor.rounding = rm, true);
};
P.hyperbolicSine = P.sinh = function () {
  var k,
    pr,
    rm,
    len,
    x = this,
    Ctor = x.constructor;
  if (!x.isFinite() || x.isZero()) return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
  Ctor.rounding = 1;
  len = x.d.length;
  if (len < 3) {
    x = taylorSeries(Ctor, 2, x, x, true);
  } else {
    k = 1.4 * Math.sqrt(len);
    k = k > 16 ? 16 : k | 0;
    x = x.times(1 / tinyPow(5, k));
    x = taylorSeries(Ctor, 2, x, x, true);
    var sinh2_x,
      d5 = new Ctor(5),
      d16 = new Ctor(16),
      d20 = new Ctor(20);
    for (; k--;) {
      sinh2_x = x.times(x);
      x = x.times(d5.plus(sinh2_x.times(d16.times(sinh2_x).plus(d20))));
    }
  }
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(x, pr, rm, true);
};
P.hyperbolicTangent = P.tanh = function () {
  var pr,
    rm,
    x = this,
    Ctor = x.constructor;
  if (!x.isFinite()) return new Ctor(x.s);
  if (x.isZero()) return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 7;
  Ctor.rounding = 1;
  return divide(x.sinh(), x.cosh(), Ctor.precision = pr, Ctor.rounding = rm);
};
P.inverseCosine = P.acos = function () {
  var halfPi,
    x = this,
    Ctor = x.constructor,
    k = x.abs().cmp(1),
    pr = Ctor.precision,
    rm = Ctor.rounding;
  if (k !== -1) {
    return k === 0 ? x.isNeg() ? getPi(Ctor, pr, rm) : new Ctor(0) : new Ctor(NaN);
  }
  if (x.isZero()) return getPi(Ctor, pr + 4, rm).times(0.5);
  Ctor.precision = pr + 6;
  Ctor.rounding = 1;
  x = x.asin();
  halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return halfPi.minus(x);
};
P.inverseHyperbolicCosine = P.acosh = function () {
  var pr,
    rm,
    x = this,
    Ctor = x.constructor;
  if (x.lte(1)) return new Ctor(x.eq(1) ? 0 : NaN);
  if (!x.isFinite()) return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(Math.abs(x.e), x.sd()) + 4;
  Ctor.rounding = 1;
  external = false;
  x = x.times(x).minus(1).sqrt().plus(x);
  external = true;
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.ln();
};
P.inverseHyperbolicSine = P.asinh = function () {
  var pr,
    rm,
    x = this,
    Ctor = x.constructor;
  if (!x.isFinite() || x.isZero()) return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 2 * Math.max(Math.abs(x.e), x.sd()) + 6;
  Ctor.rounding = 1;
  external = false;
  x = x.times(x).plus(1).sqrt().plus(x);
  external = true;
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.ln();
};
P.inverseHyperbolicTangent = P.atanh = function () {
  var pr,
    rm,
    wpr,
    xsd,
    x = this,
    Ctor = x.constructor;
  if (!x.isFinite()) return new Ctor(NaN);
  if (x.e >= 0) return new Ctor(x.abs().eq(1) ? x.s / 0 : x.isZero() ? x : NaN);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  xsd = x.sd();
  if (Math.max(xsd, pr) < 2 * -x.e - 1) return finalise(new Ctor(x), pr, rm, true);
  Ctor.precision = wpr = xsd - x.e;
  x = divide(x.plus(1), new Ctor(1).minus(x), wpr + pr, 1);
  Ctor.precision = pr + 4;
  Ctor.rounding = 1;
  x = x.ln();
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.times(0.5);
};
P.inverseSine = P.asin = function () {
  var halfPi,
    k,
    pr,
    rm,
    x = this,
    Ctor = x.constructor;
  if (x.isZero()) return new Ctor(x);
  k = x.abs().cmp(1);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (k !== -1) {
    if (k === 0) {
      halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
      halfPi.s = x.s;
      return halfPi;
    }
    return new Ctor(NaN);
  }
  Ctor.precision = pr + 6;
  Ctor.rounding = 1;
  x = x.div(new Ctor(1).minus(x.times(x)).sqrt().plus(1)).atan();
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.times(2);
};
P.inverseTangent = P.atan = function () {
  var i,
    j,
    k,
    n,
    px,
    t,
    r,
    wpr,
    x2,
    x = this,
    Ctor = x.constructor,
    pr = Ctor.precision,
    rm = Ctor.rounding;
  if (!x.isFinite()) {
    if (!x.s) return new Ctor(NaN);
    if (pr + 4 <= PI_PRECISION) {
      r = getPi(Ctor, pr + 4, rm).times(0.5);
      r.s = x.s;
      return r;
    }
  } else if (x.isZero()) {
    return new Ctor(x);
  } else if (x.abs().eq(1) && pr + 4 <= PI_PRECISION) {
    r = getPi(Ctor, pr + 4, rm).times(0.25);
    r.s = x.s;
    return r;
  }
  Ctor.precision = wpr = pr + 10;
  Ctor.rounding = 1;
  k = Math.min(28, wpr / LOG_BASE + 2 | 0);
  for (i = k; i; --i) x = x.div(x.times(x).plus(1).sqrt().plus(1));
  external = false;
  j = Math.ceil(wpr / LOG_BASE);
  n = 1;
  x2 = x.times(x);
  r = new Ctor(x);
  px = x;
  for (; i !== -1;) {
    px = px.times(x2);
    t = r.minus(px.div(n += 2));
    px = px.times(x2);
    r = t.plus(px.div(n += 2));
    if (r.d[j] !== void 0) for (i = j; r.d[i] === t.d[i] && i--;);
  }
  if (k) r = r.times(2 << k - 1);
  external = true;
  return finalise(r, Ctor.precision = pr, Ctor.rounding = rm, true);
};
P.isFinite = function () {
  return !!this.d;
};
P.isInteger = P.isInt = function () {
  return !!this.d && mathfloor(this.e / LOG_BASE) > this.d.length - 2;
};
P.isNaN = function () {
  return !this.s;
};
P.isNegative = P.isNeg = function () {
  return this.s < 0;
};
P.isPositive = P.isPos = function () {
  return this.s > 0;
};
P.isZero = function () {
  return !!this.d && this.d[0] === 0;
};
P.lessThan = P.lt = function (y) {
  return this.cmp(y) < 0;
};
P.lessThanOrEqualTo = P.lte = function (y) {
  return this.cmp(y) < 1;
};
P.logarithm = P.log = function (base) {
  var isBase10,
    d,
    denominator,
    k,
    inf,
    num,
    sd,
    r,
    arg = this,
    Ctor = arg.constructor,
    pr = Ctor.precision,
    rm = Ctor.rounding,
    guard = 5;
  if (base == null) {
    base = new Ctor(10);
    isBase10 = true;
  } else {
    base = new Ctor(base);
    d = base.d;
    if (base.s < 0 || !d || !d[0] || base.eq(1)) return new Ctor(NaN);
    isBase10 = base.eq(10);
  }
  d = arg.d;
  if (arg.s < 0 || !d || !d[0] || arg.eq(1)) {
    return new Ctor(d && !d[0] ? -1 / 0 : arg.s != 1 ? NaN : d ? 0 : 1 / 0);
  }
  if (isBase10) {
    if (d.length > 1) {
      inf = true;
    } else {
      for (k = d[0]; k % 10 === 0;) k /= 10;
      inf = k !== 1;
    }
  }
  external = false;
  sd = pr + guard;
  num = naturalLogarithm(arg, sd);
  denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
  r = divide(num, denominator, sd, 1);
  if (checkRoundingDigits(r.d, k = pr, rm)) {
    do {
      sd += 10;
      num = naturalLogarithm(arg, sd);
      denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
      r = divide(num, denominator, sd, 1);
      if (!inf) {
        if (+digitsToString(r.d).slice(k + 1, k + 15) + 1 == 1e14) {
          r = finalise(r, pr + 1, 0);
        }
        break;
      }
    } while (checkRoundingDigits(r.d, k += 10, rm));
  }
  external = true;
  return finalise(r, pr, rm);
};
P.minus = P.sub = function (y) {
  var d,
    e,
    i,
    j,
    k,
    len,
    pr,
    rm,
    xd,
    xe,
    xLTy,
    yd,
    x = this,
    Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.d) {
    if (!x.s || !y.s) y = new Ctor(NaN);else if (x.d) y.s = -y.s;else y = new Ctor(y.d || x.s !== y.s ? x : NaN);
    return y;
  }
  if (x.s != y.s) {
    y.s = -y.s;
    return x.plus(y);
  }
  xd = x.d;
  yd = y.d;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (!xd[0] || !yd[0]) {
    if (yd[0]) y.s = -y.s;else if (xd[0]) y = new Ctor(x);else return new Ctor(rm === 3 ? -0 : 0);
    return external ? finalise(y, pr, rm) : y;
  }
  e = mathfloor(y.e / LOG_BASE);
  xe = mathfloor(x.e / LOG_BASE);
  xd = xd.slice();
  k = xe - e;
  if (k) {
    xLTy = k < 0;
    if (xLTy) {
      d = xd;
      k = -k;
      len = yd.length;
    } else {
      d = yd;
      e = xe;
      len = xd.length;
    }
    i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;
    if (k > i) {
      k = i;
      d.length = 1;
    }
    d.reverse();
    for (i = k; i--;) d.push(0);
    d.reverse();
  } else {
    i = xd.length;
    len = yd.length;
    xLTy = i < len;
    if (xLTy) len = i;
    for (i = 0; i < len; i++) {
      if (xd[i] != yd[i]) {
        xLTy = xd[i] < yd[i];
        break;
      }
    }
    k = 0;
  }
  if (xLTy) {
    d = xd;
    xd = yd;
    yd = d;
    y.s = -y.s;
  }
  len = xd.length;
  for (i = yd.length - len; i > 0; --i) xd[len++] = 0;
  for (i = yd.length; i > k;) {
    if (xd[--i] < yd[i]) {
      for (j = i; j && xd[--j] === 0;) xd[j] = BASE - 1;
      --xd[j];
      xd[i] += BASE;
    }
    xd[i] -= yd[i];
  }
  for (; xd[--len] === 0;) xd.pop();
  for (; xd[0] === 0; xd.shift()) --e;
  if (!xd[0]) return new Ctor(rm === 3 ? -0 : 0);
  y.d = xd;
  y.e = getBase10Exponent(xd, e);
  return external ? finalise(y, pr, rm) : y;
};
P.modulo = P.mod = function (y) {
  var q,
    x = this,
    Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.s || y.d && !y.d[0]) return new Ctor(NaN);
  if (!y.d || x.d && !x.d[0]) {
    return finalise(new Ctor(x), Ctor.precision, Ctor.rounding);
  }
  external = false;
  if (Ctor.modulo == 9) {
    q = divide(x, y.abs(), 0, 3, 1);
    q.s *= y.s;
  } else {
    q = divide(x, y, 0, Ctor.modulo, 1);
  }
  q = q.times(y);
  external = true;
  return x.minus(q);
};
P.naturalExponential = P.exp = function () {
  return naturalExponential(this);
};
P.naturalLogarithm = P.ln = function () {
  return naturalLogarithm(this);
};
P.negated = P.neg = function () {
  var x = new this.constructor(this);
  x.s = -x.s;
  return finalise(x);
};
P.plus = P.add = function (y) {
  var carry,
    d,
    e,
    i,
    k,
    len,
    pr,
    rm,
    xd,
    yd,
    x = this,
    Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.d) {
    if (!x.s || !y.s) y = new Ctor(NaN);else if (!x.d) y = new Ctor(y.d || x.s === y.s ? x : NaN);
    return y;
  }
  if (x.s != y.s) {
    y.s = -y.s;
    return x.minus(y);
  }
  xd = x.d;
  yd = y.d;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (!xd[0] || !yd[0]) {
    if (!yd[0]) y = new Ctor(x);
    return external ? finalise(y, pr, rm) : y;
  }
  k = mathfloor(x.e / LOG_BASE);
  e = mathfloor(y.e / LOG_BASE);
  xd = xd.slice();
  i = k - e;
  if (i) {
    if (i < 0) {
      d = xd;
      i = -i;
      len = yd.length;
    } else {
      d = yd;
      e = k;
      len = xd.length;
    }
    k = Math.ceil(pr / LOG_BASE);
    len = k > len ? k + 1 : len + 1;
    if (i > len) {
      i = len;
      d.length = 1;
    }
    d.reverse();
    for (; i--;) d.push(0);
    d.reverse();
  }
  len = xd.length;
  i = yd.length;
  if (len - i < 0) {
    i = len;
    d = yd;
    yd = xd;
    xd = d;
  }
  for (carry = 0; i;) {
    carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
    xd[i] %= BASE;
  }
  if (carry) {
    xd.unshift(carry);
    ++e;
  }
  for (len = xd.length; xd[--len] == 0;) xd.pop();
  y.d = xd;
  y.e = getBase10Exponent(xd, e);
  return external ? finalise(y, pr, rm) : y;
};
P.precision = P.sd = function (z) {
  var k,
    x = this;
  if (z !== void 0 && z !== !!z && z !== 1 && z !== 0) throw Error(invalidArgument + z);
  if (x.d) {
    k = getPrecision(x.d);
    if (z && x.e + 1 > k) k = x.e + 1;
  } else {
    k = NaN;
  }
  return k;
};
P.round = function () {
  var x = this,
    Ctor = x.constructor;
  return finalise(new Ctor(x), x.e + 1, Ctor.rounding);
};
P.sine = P.sin = function () {
  var pr,
    rm,
    x = this,
    Ctor = x.constructor;
  if (!x.isFinite()) return new Ctor(NaN);
  if (x.isZero()) return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
  Ctor.rounding = 1;
  x = sine(Ctor, toLessThanHalfPi(Ctor, x));
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(quadrant > 2 ? x.neg() : x, pr, rm, true);
};
P.squareRoot = P.sqrt = function () {
  var m,
    n,
    sd,
    r,
    rep,
    t,
    x = this,
    d = x.d,
    e = x.e,
    s = x.s,
    Ctor = x.constructor;
  if (s !== 1 || !d || !d[0]) {
    return new Ctor(!s || s < 0 && (!d || d[0]) ? NaN : d ? x : 1 / 0);
  }
  external = false;
  s = Math.sqrt(+x);
  if (s == 0 || s == 1 / 0) {
    n = digitsToString(d);
    if ((n.length + e) % 2 == 0) n += "0";
    s = Math.sqrt(n);
    e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);
    if (s == 1 / 0) {
      n = "5e" + e;
    } else {
      n = s.toExponential();
      n = n.slice(0, n.indexOf("e") + 1) + e;
    }
    r = new Ctor(n);
  } else {
    r = new Ctor(s.toString());
  }
  sd = (e = Ctor.precision) + 3;
  for (;;) {
    t = r;
    r = t.plus(divide(x, t, sd + 2, 1)).times(0.5);
    if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
      n = n.slice(sd - 3, sd + 1);
      if (n == "9999" || !rep && n == "4999") {
        if (!rep) {
          finalise(t, e + 1, 0);
          if (t.times(t).eq(x)) {
            r = t;
            break;
          }
        }
        sd += 4;
        rep = 1;
      } else {
        if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
          finalise(r, e + 1, 1);
          m = !r.times(r).eq(x);
        }
        break;
      }
    }
  }
  external = true;
  return finalise(r, e, Ctor.rounding, m);
};
P.tangent = P.tan = function () {
  var pr,
    rm,
    x = this,
    Ctor = x.constructor;
  if (!x.isFinite()) return new Ctor(NaN);
  if (x.isZero()) return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 10;
  Ctor.rounding = 1;
  x = x.sin();
  x.s = 1;
  x = divide(x, new Ctor(1).minus(x.times(x)).sqrt(), pr + 10, 0);
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(quadrant == 2 || quadrant == 4 ? x.neg() : x, pr, rm, true);
};
P.times = P.mul = function (y) {
  var carry,
    e,
    i,
    k,
    r,
    rL,
    t,
    xdL,
    ydL,
    x = this,
    Ctor = x.constructor,
    xd = x.d,
    yd = (y = new Ctor(y)).d;
  y.s *= x.s;
  if (!xd || !xd[0] || !yd || !yd[0]) {
    return new Ctor(!y.s || xd && !xd[0] && !yd || yd && !yd[0] && !xd ? NaN : !xd || !yd ? y.s / 0 : y.s * 0);
  }
  e = mathfloor(x.e / LOG_BASE) + mathfloor(y.e / LOG_BASE);
  xdL = xd.length;
  ydL = yd.length;
  if (xdL < ydL) {
    r = xd;
    xd = yd;
    yd = r;
    rL = xdL;
    xdL = ydL;
    ydL = rL;
  }
  r = [];
  rL = xdL + ydL;
  for (i = rL; i--;) r.push(0);
  for (i = ydL; --i >= 0;) {
    carry = 0;
    for (k = xdL + i; k > i;) {
      t = r[k] + yd[i] * xd[k - i - 1] + carry;
      r[k--] = t % BASE | 0;
      carry = t / BASE | 0;
    }
    r[k] = (r[k] + carry) % BASE | 0;
  }
  for (; !r[--rL];) r.pop();
  if (carry) ++e;else r.shift();
  y.d = r;
  y.e = getBase10Exponent(r, e);
  return external ? finalise(y, Ctor.precision, Ctor.rounding) : y;
};
P.toBinary = function (sd, rm) {
  return toStringBinary(this, 2, sd, rm);
};
P.toDecimalPlaces = P.toDP = function (dp, rm) {
  var x = this,
    Ctor = x.constructor;
  x = new Ctor(x);
  if (dp === void 0) return x;
  checkInt32(dp, 0, MAX_DIGITS);
  if (rm === void 0) rm = Ctor.rounding;else checkInt32(rm, 0, 8);
  return finalise(x, dp + x.e + 1, rm);
};
P.toExponential = function (dp, rm) {
  var str,
    x = this,
    Ctor = x.constructor;
  if (dp === void 0) {
    str = finiteToString(x, true);
  } else {
    checkInt32(dp, 0, MAX_DIGITS);
    if (rm === void 0) rm = Ctor.rounding;else checkInt32(rm, 0, 8);
    x = finalise(new Ctor(x), dp + 1, rm);
    str = finiteToString(x, true, dp + 1);
  }
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toFixed = function (dp, rm) {
  var str,
    y,
    x = this,
    Ctor = x.constructor;
  if (dp === void 0) {
    str = finiteToString(x);
  } else {
    checkInt32(dp, 0, MAX_DIGITS);
    if (rm === void 0) rm = Ctor.rounding;else checkInt32(rm, 0, 8);
    y = finalise(new Ctor(x), dp + x.e + 1, rm);
    str = finiteToString(y, false, dp + y.e + 1);
  }
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toFraction = function (maxD) {
  var d,
    d0,
    d1,
    d2,
    e,
    k,
    n,
    n0,
    n1,
    pr,
    q,
    r,
    x = this,
    xd = x.d,
    Ctor = x.constructor;
  if (!xd) return new Ctor(x);
  n1 = d0 = new Ctor(1);
  d1 = n0 = new Ctor(0);
  d = new Ctor(d1);
  e = d.e = getPrecision(xd) - x.e - 1;
  k = e % LOG_BASE;
  d.d[0] = mathpow(10, k < 0 ? LOG_BASE + k : k);
  if (maxD == null) {
    maxD = e > 0 ? d : n1;
  } else {
    n = new Ctor(maxD);
    if (!n.isInt() || n.lt(n1)) throw Error(invalidArgument + n);
    maxD = n.gt(d) ? e > 0 ? d : n1 : n;
  }
  external = false;
  n = new Ctor(digitsToString(xd));
  pr = Ctor.precision;
  Ctor.precision = e = xd.length * LOG_BASE * 2;
  for (;;) {
    q = divide(n, d, 0, 1, 1);
    d2 = d0.plus(q.times(d1));
    if (d2.cmp(maxD) == 1) break;
    d0 = d1;
    d1 = d2;
    d2 = n1;
    n1 = n0.plus(q.times(d2));
    n0 = d2;
    d2 = d;
    d = n.minus(q.times(d2));
    n = d2;
  }
  d2 = divide(maxD.minus(d0), d1, 0, 1, 1);
  n0 = n0.plus(d2.times(n1));
  d0 = d0.plus(d2.times(d1));
  n0.s = n1.s = x.s;
  r = divide(n1, d1, e, 1).minus(x).abs().cmp(divide(n0, d0, e, 1).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];
  Ctor.precision = pr;
  external = true;
  return r;
};
P.toHexadecimal = P.toHex = function (sd, rm) {
  return toStringBinary(this, 16, sd, rm);
};
P.toNearest = function (y, rm) {
  var x = this,
    Ctor = x.constructor;
  x = new Ctor(x);
  if (y == null) {
    if (!x.d) return x;
    y = new Ctor(1);
    rm = Ctor.rounding;
  } else {
    y = new Ctor(y);
    if (rm === void 0) {
      rm = Ctor.rounding;
    } else {
      checkInt32(rm, 0, 8);
    }
    if (!x.d) return y.s ? x : y;
    if (!y.d) {
      if (y.s) y.s = x.s;
      return y;
    }
  }
  if (y.d[0]) {
    external = false;
    x = divide(x, y, 0, rm, 1).times(y);
    external = true;
    finalise(x);
  } else {
    y.s = x.s;
    x = y;
  }
  return x;
};
P.toNumber = function () {
  return +this;
};
P.toOctal = function (sd, rm) {
  return toStringBinary(this, 8, sd, rm);
};
P.toPower = P.pow = function (y) {
  var e,
    k,
    pr,
    r,
    rm,
    s,
    x = this,
    Ctor = x.constructor,
    yn = +(y = new Ctor(y));
  if (!x.d || !y.d || !x.d[0] || !y.d[0]) return new Ctor(mathpow(+x, yn));
  x = new Ctor(x);
  if (x.eq(1)) return x;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (y.eq(1)) return finalise(x, pr, rm);
  e = mathfloor(y.e / LOG_BASE);
  if (e >= y.d.length - 1 && (k = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
    r = intPow(Ctor, x, k, pr);
    return y.s < 0 ? new Ctor(1).div(r) : finalise(r, pr, rm);
  }
  s = x.s;
  if (s < 0) {
    if (e < y.d.length - 1) return new Ctor(NaN);
    if ((y.d[e] & 1) == 0) s = 1;
    if (x.e == 0 && x.d[0] == 1 && x.d.length == 1) {
      x.s = s;
      return x;
    }
  }
  k = mathpow(+x, yn);
  e = k == 0 || !isFinite(k) ? mathfloor(yn * (Math.log("0." + digitsToString(x.d)) / Math.LN10 + x.e + 1)) : new Ctor(k + "").e;
  if (e > Ctor.maxE + 1 || e < Ctor.minE - 1) return new Ctor(e > 0 ? s / 0 : 0);
  external = false;
  Ctor.rounding = x.s = 1;
  k = Math.min(12, (e + "").length);
  r = naturalExponential(y.times(naturalLogarithm(x, pr + k)), pr);
  if (r.d) {
    r = finalise(r, pr + 5, 1);
    if (checkRoundingDigits(r.d, pr, rm)) {
      e = pr + 10;
      r = finalise(naturalExponential(y.times(naturalLogarithm(x, e + k)), e), e + 5, 1);
      if (+digitsToString(r.d).slice(pr + 1, pr + 15) + 1 == 1e14) {
        r = finalise(r, pr + 1, 0);
      }
    }
  }
  r.s = s;
  external = true;
  Ctor.rounding = rm;
  return finalise(r, pr, rm);
};
P.toPrecision = function (sd, rm) {
  var str,
    x = this,
    Ctor = x.constructor;
  if (sd === void 0) {
    str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  } else {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0) rm = Ctor.rounding;else checkInt32(rm, 0, 8);
    x = finalise(new Ctor(x), sd, rm);
    str = finiteToString(x, sd <= x.e || x.e <= Ctor.toExpNeg, sd);
  }
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toSignificantDigits = P.toSD = function (sd, rm) {
  var x = this,
    Ctor = x.constructor;
  if (sd === void 0) {
    sd = Ctor.precision;
    rm = Ctor.rounding;
  } else {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0) rm = Ctor.rounding;else checkInt32(rm, 0, 8);
  }
  return finalise(new Ctor(x), sd, rm);
};
P.toString = function () {
  var x = this,
    Ctor = x.constructor,
    str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.truncated = P.trunc = function () {
  return finalise(new this.constructor(this), this.e + 1, 1);
};
P.valueOf = P.toJSON = function () {
  var x = this,
    Ctor = x.constructor,
    str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  return x.isNeg() ? "-" + str : str;
};
function digitsToString(d) {
  var i,
    k,
    ws,
    indexOfLastWord = d.length - 1,
    str = "",
    w = d[0];
  if (indexOfLastWord > 0) {
    str += w;
    for (i = 1; i < indexOfLastWord; i++) {
      ws = d[i] + "";
      k = LOG_BASE - ws.length;
      if (k) str += getZeroString(k);
      str += ws;
    }
    w = d[i];
    ws = w + "";
    k = LOG_BASE - ws.length;
    if (k) str += getZeroString(k);
  } else if (w === 0) {
    return "0";
  }
  for (; w % 10 === 0;) w /= 10;
  return str + w;
}
function checkInt32(i, min2, max2) {
  if (i !== ~~i || i < min2 || i > max2) {
    throw Error(invalidArgument + i);
  }
}
function checkRoundingDigits(d, i, rm, repeating) {
  var di, k, r, rd;
  for (k = d[0]; k >= 10; k /= 10) --i;
  if (--i < 0) {
    i += LOG_BASE;
    di = 0;
  } else {
    di = Math.ceil((i + 1) / LOG_BASE);
    i %= LOG_BASE;
  }
  k = mathpow(10, LOG_BASE - i);
  rd = d[di] % k | 0;
  if (repeating == null) {
    if (i < 3) {
      if (i == 0) rd = rd / 100 | 0;else if (i == 1) rd = rd / 10 | 0;
      r = rm < 4 && rd == 99999 || rm > 3 && rd == 49999 || rd == 5e4 || rd == 0;
    } else {
      r = (rm < 4 && rd + 1 == k || rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 100 | 0) == mathpow(10, i - 2) - 1 || (rd == k / 2 || rd == 0) && (d[di + 1] / k / 100 | 0) == 0;
    }
  } else {
    if (i < 4) {
      if (i == 0) rd = rd / 1e3 | 0;else if (i == 1) rd = rd / 100 | 0;else if (i == 2) rd = rd / 10 | 0;
      r = (repeating || rm < 4) && rd == 9999 || !repeating && rm > 3 && rd == 4999;
    } else {
      r = ((repeating || rm < 4) && rd + 1 == k || !repeating && rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 1e3 | 0) == mathpow(10, i - 3) - 1;
    }
  }
  return r;
}
function convertBase(str, baseIn, baseOut) {
  var j,
    arr = [0],
    arrL,
    i = 0,
    strL = str.length;
  for (; i < strL;) {
    for (arrL = arr.length; arrL--;) arr[arrL] *= baseIn;
    arr[0] += NUMERALS.indexOf(str.charAt(i++));
    for (j = 0; j < arr.length; j++) {
      if (arr[j] > baseOut - 1) {
        if (arr[j + 1] === void 0) arr[j + 1] = 0;
        arr[j + 1] += arr[j] / baseOut | 0;
        arr[j] %= baseOut;
      }
    }
  }
  return arr.reverse();
}
function cosine(Ctor, x) {
  var k, len, y;
  if (x.isZero()) return x;
  len = x.d.length;
  if (len < 32) {
    k = Math.ceil(len / 3);
    y = (1 / tinyPow(4, k)).toString();
  } else {
    k = 16;
    y = "2.3283064365386962890625e-10";
  }
  Ctor.precision += k;
  x = taylorSeries(Ctor, 1, x.times(y), new Ctor(1));
  for (var i = k; i--;) {
    var cos2x = x.times(x);
    x = cos2x.times(cos2x).minus(cos2x).times(8).plus(1);
  }
  Ctor.precision -= k;
  return x;
}
var divide = function () {
  function multiplyInteger(x, k, base) {
    var temp,
      carry = 0,
      i = x.length;
    for (x = x.slice(); i--;) {
      temp = x[i] * k + carry;
      x[i] = temp % base | 0;
      carry = temp / base | 0;
    }
    if (carry) x.unshift(carry);
    return x;
  }
  function compare(a, b, aL, bL) {
    var i, r;
    if (aL != bL) {
      r = aL > bL ? 1 : -1;
    } else {
      for (i = r = 0; i < aL; i++) {
        if (a[i] != b[i]) {
          r = a[i] > b[i] ? 1 : -1;
          break;
        }
      }
    }
    return r;
  }
  function subtract(a, b, aL, base) {
    var i = 0;
    for (; aL--;) {
      a[aL] -= i;
      i = a[aL] < b[aL] ? 1 : 0;
      a[aL] = i * base + a[aL] - b[aL];
    }
    for (; !a[0] && a.length > 1;) a.shift();
  }
  return function (x, y, pr, rm, dp, base) {
    var cmp,
      e,
      i,
      k,
      logBase,
      more,
      prod,
      prodL,
      q,
      qd,
      rem,
      remL,
      rem0,
      sd,
      t,
      xi,
      xL,
      yd0,
      yL,
      yz,
      Ctor = x.constructor,
      sign2 = x.s == y.s ? 1 : -1,
      xd = x.d,
      yd = y.d;
    if (!xd || !xd[0] || !yd || !yd[0]) {
      return new Ctor(!x.s || !y.s || (xd ? yd && xd[0] == yd[0] : !yd) ? NaN : xd && xd[0] == 0 || !yd ? sign2 * 0 : sign2 / 0);
    }
    if (base) {
      logBase = 1;
      e = x.e - y.e;
    } else {
      base = BASE;
      logBase = LOG_BASE;
      e = mathfloor(x.e / logBase) - mathfloor(y.e / logBase);
    }
    yL = yd.length;
    xL = xd.length;
    q = new Ctor(sign2);
    qd = q.d = [];
    for (i = 0; yd[i] == (xd[i] || 0); i++);
    if (yd[i] > (xd[i] || 0)) e--;
    if (pr == null) {
      sd = pr = Ctor.precision;
      rm = Ctor.rounding;
    } else if (dp) {
      sd = pr + (x.e - y.e) + 1;
    } else {
      sd = pr;
    }
    if (sd < 0) {
      qd.push(1);
      more = true;
    } else {
      sd = sd / logBase + 2 | 0;
      i = 0;
      if (yL == 1) {
        k = 0;
        yd = yd[0];
        sd++;
        for (; (i < xL || k) && sd--; i++) {
          t = k * base + (xd[i] || 0);
          qd[i] = t / yd | 0;
          k = t % yd | 0;
        }
        more = k || i < xL;
      } else {
        k = base / (yd[0] + 1) | 0;
        if (k > 1) {
          yd = multiplyInteger(yd, k, base);
          xd = multiplyInteger(xd, k, base);
          yL = yd.length;
          xL = xd.length;
        }
        xi = yL;
        rem = xd.slice(0, yL);
        remL = rem.length;
        for (; remL < yL;) rem[remL++] = 0;
        yz = yd.slice();
        yz.unshift(0);
        yd0 = yd[0];
        if (yd[1] >= base / 2) ++yd0;
        do {
          k = 0;
          cmp = compare(yd, rem, yL, remL);
          if (cmp < 0) {
            rem0 = rem[0];
            if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);
            k = rem0 / yd0 | 0;
            if (k > 1) {
              if (k >= base) k = base - 1;
              prod = multiplyInteger(yd, k, base);
              prodL = prod.length;
              remL = rem.length;
              cmp = compare(prod, rem, prodL, remL);
              if (cmp == 1) {
                k--;
                subtract(prod, yL < prodL ? yz : yd, prodL, base);
              }
            } else {
              if (k == 0) cmp = k = 1;
              prod = yd.slice();
            }
            prodL = prod.length;
            if (prodL < remL) prod.unshift(0);
            subtract(rem, prod, remL, base);
            if (cmp == -1) {
              remL = rem.length;
              cmp = compare(yd, rem, yL, remL);
              if (cmp < 1) {
                k++;
                subtract(rem, yL < remL ? yz : yd, remL, base);
              }
            }
            remL = rem.length;
          } else if (cmp === 0) {
            k++;
            rem = [0];
          }
          qd[i++] = k;
          if (cmp && rem[0]) {
            rem[remL++] = xd[xi] || 0;
          } else {
            rem = [xd[xi]];
            remL = 1;
          }
        } while ((xi++ < xL || rem[0] !== void 0) && sd--);
        more = rem[0] !== void 0;
      }
      if (!qd[0]) qd.shift();
    }
    if (logBase == 1) {
      q.e = e;
      inexact = more;
    } else {
      for (i = 1, k = qd[0]; k >= 10; k /= 10) i++;
      q.e = i + e * logBase - 1;
      finalise(q, dp ? pr + q.e + 1 : pr, rm, more);
    }
    return q;
  };
}();
function finalise(x, sd, rm, isTruncated) {
  var digits,
    i,
    j,
    k,
    rd,
    roundUp,
    w,
    xd,
    xdi,
    Ctor = x.constructor;
  out: if (sd != null) {
    xd = x.d;
    if (!xd) return x;
    for (digits = 1, k = xd[0]; k >= 10; k /= 10) digits++;
    i = sd - digits;
    if (i < 0) {
      i += LOG_BASE;
      j = sd;
      w = xd[xdi = 0];
      rd = w / mathpow(10, digits - j - 1) % 10 | 0;
    } else {
      xdi = Math.ceil((i + 1) / LOG_BASE);
      k = xd.length;
      if (xdi >= k) {
        if (isTruncated) {
          for (; k++ <= xdi;) xd.push(0);
          w = rd = 0;
          digits = 1;
          i %= LOG_BASE;
          j = i - LOG_BASE + 1;
        } else {
          break out;
        }
      } else {
        w = k = xd[xdi];
        for (digits = 1; k >= 10; k /= 10) digits++;
        i %= LOG_BASE;
        j = i - LOG_BASE + digits;
        rd = j < 0 ? 0 : w / mathpow(10, digits - j - 1) % 10 | 0;
      }
    }
    isTruncated = isTruncated || sd < 0 || xd[xdi + 1] !== void 0 || (j < 0 ? w : w % mathpow(10, digits - j - 1));
    roundUp = rm < 4 ? (rd || isTruncated) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || isTruncated || rm == 6 && (i > 0 ? j > 0 ? w / mathpow(10, digits - j) : 0 : xd[xdi - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
    if (sd < 1 || !xd[0]) {
      xd.length = 0;
      if (roundUp) {
        sd -= x.e + 1;
        xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
        x.e = -sd || 0;
      } else {
        xd[0] = x.e = 0;
      }
      return x;
    }
    if (i == 0) {
      xd.length = xdi;
      k = 1;
      xdi--;
    } else {
      xd.length = xdi + 1;
      k = mathpow(10, LOG_BASE - i);
      xd[xdi] = j > 0 ? (w / mathpow(10, digits - j) % mathpow(10, j) | 0) * k : 0;
    }
    if (roundUp) {
      for (;;) {
        if (xdi == 0) {
          for (i = 1, j = xd[0]; j >= 10; j /= 10) i++;
          j = xd[0] += k;
          for (k = 1; j >= 10; j /= 10) k++;
          if (i != k) {
            x.e++;
            if (xd[0] == BASE) xd[0] = 1;
          }
          break;
        } else {
          xd[xdi] += k;
          if (xd[xdi] != BASE) break;
          xd[xdi--] = 0;
          k = 1;
        }
      }
    }
    for (i = xd.length; xd[--i] === 0;) xd.pop();
  }
  if (external) {
    if (x.e > Ctor.maxE) {
      x.d = null;
      x.e = NaN;
    } else if (x.e < Ctor.minE) {
      x.e = 0;
      x.d = [0];
    }
  }
  return x;
}
function finiteToString(x, isExp, sd) {
  if (!x.isFinite()) return nonFiniteToString(x);
  var k,
    e = x.e,
    str = digitsToString(x.d),
    len = str.length;
  if (isExp) {
    if (sd && (k = sd - len) > 0) {
      str = str.charAt(0) + "." + str.slice(1) + getZeroString(k);
    } else if (len > 1) {
      str = str.charAt(0) + "." + str.slice(1);
    }
    str = str + (x.e < 0 ? "e" : "e+") + x.e;
  } else if (e < 0) {
    str = "0." + getZeroString(-e - 1) + str;
    if (sd && (k = sd - len) > 0) str += getZeroString(k);
  } else if (e >= len) {
    str += getZeroString(e + 1 - len);
    if (sd && (k = sd - e - 1) > 0) str = str + "." + getZeroString(k);
  } else {
    if ((k = e + 1) < len) str = str.slice(0, k) + "." + str.slice(k);
    if (sd && (k = sd - len) > 0) {
      if (e + 1 === len) str += ".";
      str += getZeroString(k);
    }
  }
  return str;
}
function getBase10Exponent(digits, e) {
  var w = digits[0];
  for (e *= LOG_BASE; w >= 10; w /= 10) e++;
  return e;
}
function getLn10(Ctor, sd, pr) {
  if (sd > LN10_PRECISION) {
    external = true;
    if (pr) Ctor.precision = pr;
    throw Error(precisionLimitExceeded);
  }
  return finalise(new Ctor(LN10), sd, 1, true);
}
function getPi(Ctor, sd, rm) {
  if (sd > PI_PRECISION) throw Error(precisionLimitExceeded);
  return finalise(new Ctor(PI), sd, rm, true);
}
function getPrecision(digits) {
  var w = digits.length - 1,
    len = w * LOG_BASE + 1;
  w = digits[w];
  if (w) {
    for (; w % 10 == 0; w /= 10) len--;
    for (w = digits[0]; w >= 10; w /= 10) len++;
  }
  return len;
}
function getZeroString(k) {
  var zs = "";
  for (; k--;) zs += "0";
  return zs;
}
function intPow(Ctor, x, n, pr) {
  var isTruncated,
    r = new Ctor(1),
    k = Math.ceil(pr / LOG_BASE + 4);
  external = false;
  for (;;) {
    if (n % 2) {
      r = r.times(x);
      if (truncate(r.d, k)) isTruncated = true;
    }
    n = mathfloor(n / 2);
    if (n === 0) {
      n = r.d.length - 1;
      if (isTruncated && r.d[n] === 0) ++r.d[n];
      break;
    }
    x = x.times(x);
    truncate(x.d, k);
  }
  external = true;
  return r;
}
function isOdd(n) {
  return n.d[n.d.length - 1] & 1;
}
function maxOrMin(Ctor, args, ltgt) {
  var y,
    x = new Ctor(args[0]),
    i = 0;
  for (; ++i < args.length;) {
    y = new Ctor(args[i]);
    if (!y.s) {
      x = y;
      break;
    } else if (x[ltgt](y)) {
      x = y;
    }
  }
  return x;
}
function naturalExponential(x, sd) {
  var denominator,
    guard,
    j,
    pow2,
    sum2,
    t,
    wpr,
    rep = 0,
    i = 0,
    k = 0,
    Ctor = x.constructor,
    rm = Ctor.rounding,
    pr = Ctor.precision;
  if (!x.d || !x.d[0] || x.e > 17) {
    return new Ctor(x.d ? !x.d[0] ? 1 : x.s < 0 ? 0 : 1 / 0 : x.s ? x.s < 0 ? 0 : x : 0 / 0);
  }
  if (sd == null) {
    external = false;
    wpr = pr;
  } else {
    wpr = sd;
  }
  t = new Ctor(0.03125);
  while (x.e > -2) {
    x = x.times(t);
    k += 5;
  }
  guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0;
  wpr += guard;
  denominator = pow2 = sum2 = new Ctor(1);
  Ctor.precision = wpr;
  for (;;) {
    pow2 = finalise(pow2.times(x), wpr, 1);
    denominator = denominator.times(++i);
    t = sum2.plus(divide(pow2, denominator, wpr, 1));
    if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
      j = k;
      while (j--) sum2 = finalise(sum2.times(sum2), wpr, 1);
      if (sd == null) {
        if (rep < 3 && checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
          Ctor.precision = wpr += 10;
          denominator = pow2 = t = new Ctor(1);
          i = 0;
          rep++;
        } else {
          return finalise(sum2, Ctor.precision = pr, rm, external = true);
        }
      } else {
        Ctor.precision = pr;
        return sum2;
      }
    }
    sum2 = t;
  }
}
function naturalLogarithm(y, sd) {
  var c,
    c0,
    denominator,
    e,
    numerator,
    rep,
    sum2,
    t,
    wpr,
    x1,
    x2,
    n = 1,
    guard = 10,
    x = y,
    xd = x.d,
    Ctor = x.constructor,
    rm = Ctor.rounding,
    pr = Ctor.precision;
  if (x.s < 0 || !xd || !xd[0] || !x.e && xd[0] == 1 && xd.length == 1) {
    return new Ctor(xd && !xd[0] ? -1 / 0 : x.s != 1 ? NaN : xd ? 0 : x);
  }
  if (sd == null) {
    external = false;
    wpr = pr;
  } else {
    wpr = sd;
  }
  Ctor.precision = wpr += guard;
  c = digitsToString(xd);
  c0 = c.charAt(0);
  if (Math.abs(e = x.e) < 15e14) {
    while (c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3) {
      x = x.times(y);
      c = digitsToString(x.d);
      c0 = c.charAt(0);
      n++;
    }
    e = x.e;
    if (c0 > 1) {
      x = new Ctor("0." + c);
      e++;
    } else {
      x = new Ctor(c0 + "." + c.slice(1));
    }
  } else {
    t = getLn10(Ctor, wpr + 2, pr).times(e + "");
    x = naturalLogarithm(new Ctor(c0 + "." + c.slice(1)), wpr - guard).plus(t);
    Ctor.precision = pr;
    return sd == null ? finalise(x, pr, rm, external = true) : x;
  }
  x1 = x;
  sum2 = numerator = x = divide(x.minus(1), x.plus(1), wpr, 1);
  x2 = finalise(x.times(x), wpr, 1);
  denominator = 3;
  for (;;) {
    numerator = finalise(numerator.times(x2), wpr, 1);
    t = sum2.plus(divide(numerator, new Ctor(denominator), wpr, 1));
    if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
      sum2 = sum2.times(2);
      if (e !== 0) sum2 = sum2.plus(getLn10(Ctor, wpr + 2, pr).times(e + ""));
      sum2 = divide(sum2, new Ctor(n), wpr, 1);
      if (sd == null) {
        if (checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
          Ctor.precision = wpr += guard;
          t = numerator = x = divide(x1.minus(1), x1.plus(1), wpr, 1);
          x2 = finalise(x.times(x), wpr, 1);
          denominator = rep = 1;
        } else {
          return finalise(sum2, Ctor.precision = pr, rm, external = true);
        }
      } else {
        Ctor.precision = pr;
        return sum2;
      }
    }
    sum2 = t;
    denominator += 2;
  }
}
function nonFiniteToString(x) {
  return String(x.s * x.s / 0);
}
function parseDecimal(x, str) {
  var e, i, len;
  if ((e = str.indexOf(".")) > -1) str = str.replace(".", "");
  if ((i = str.search(/e/i)) > 0) {
    if (e < 0) e = i;
    e += +str.slice(i + 1);
    str = str.substring(0, i);
  } else if (e < 0) {
    e = str.length;
  }
  for (i = 0; str.charCodeAt(i) === 48; i++);
  for (len = str.length; str.charCodeAt(len - 1) === 48; --len);
  str = str.slice(i, len);
  if (str) {
    len -= i;
    x.e = e = e - i - 1;
    x.d = [];
    i = (e + 1) % LOG_BASE;
    if (e < 0) i += LOG_BASE;
    if (i < len) {
      if (i) x.d.push(+str.slice(0, i));
      for (len -= LOG_BASE; i < len;) x.d.push(+str.slice(i, i += LOG_BASE));
      str = str.slice(i);
      i = LOG_BASE - str.length;
    } else {
      i -= len;
    }
    for (; i--;) str += "0";
    x.d.push(+str);
    if (external) {
      if (x.e > x.constructor.maxE) {
        x.d = null;
        x.e = NaN;
      } else if (x.e < x.constructor.minE) {
        x.e = 0;
        x.d = [0];
      }
    }
  } else {
    x.e = 0;
    x.d = [0];
  }
  return x;
}
function parseOther(x, str) {
  var base, Ctor, divisor, i, isFloat, len, p, xd, xe;
  if (str.indexOf("_") > -1) {
    str = str.replace(/(\d)_(?=\d)/g, "$1");
    if (isDecimal.test(str)) return parseDecimal(x, str);
  } else if (str === "Infinity" || str === "NaN") {
    if (!+str) x.s = NaN;
    x.e = NaN;
    x.d = null;
    return x;
  }
  if (isHex.test(str)) {
    base = 16;
    str = str.toLowerCase();
  } else if (isBinary.test(str)) {
    base = 2;
  } else if (isOctal.test(str)) {
    base = 8;
  } else {
    throw Error(invalidArgument + str);
  }
  i = str.search(/p/i);
  if (i > 0) {
    p = +str.slice(i + 1);
    str = str.substring(2, i);
  } else {
    str = str.slice(2);
  }
  i = str.indexOf(".");
  isFloat = i >= 0;
  Ctor = x.constructor;
  if (isFloat) {
    str = str.replace(".", "");
    len = str.length;
    i = len - i;
    divisor = intPow(Ctor, new Ctor(base), i, i * 2);
  }
  xd = convertBase(str, base, BASE);
  xe = xd.length - 1;
  for (i = xe; xd[i] === 0; --i) xd.pop();
  if (i < 0) return new Ctor(x.s * 0);
  x.e = getBase10Exponent(xd, xe);
  x.d = xd;
  external = false;
  if (isFloat) x = divide(x, divisor, len * 4);
  if (p) x = x.times(Math.abs(p) < 54 ? mathpow(2, p) : Decimal.pow(2, p));
  external = true;
  return x;
}
function sine(Ctor, x) {
  var k,
    len = x.d.length;
  if (len < 3) {
    return x.isZero() ? x : taylorSeries(Ctor, 2, x, x);
  }
  k = 1.4 * Math.sqrt(len);
  k = k > 16 ? 16 : k | 0;
  x = x.times(1 / tinyPow(5, k));
  x = taylorSeries(Ctor, 2, x, x);
  var sin2_x,
    d5 = new Ctor(5),
    d16 = new Ctor(16),
    d20 = new Ctor(20);
  for (; k--;) {
    sin2_x = x.times(x);
    x = x.times(d5.plus(sin2_x.times(d16.times(sin2_x).minus(d20))));
  }
  return x;
}
function taylorSeries(Ctor, n, x, y, isHyperbolic) {
  var j,
    t,
    u,
    x2,
    i = 1,
    pr = Ctor.precision,
    k = Math.ceil(pr / LOG_BASE);
  external = false;
  x2 = x.times(x);
  u = new Ctor(y);
  for (;;) {
    t = divide(u.times(x2), new Ctor(n++ * n++), pr, 1);
    u = isHyperbolic ? y.plus(t) : y.minus(t);
    y = divide(t.times(x2), new Ctor(n++ * n++), pr, 1);
    t = u.plus(y);
    if (t.d[k] !== void 0) {
      for (j = k; t.d[j] === u.d[j] && j--;);
      if (j == -1) break;
    }
    j = u;
    u = y;
    y = t;
    t = j;
    i++;
  }
  external = true;
  t.d.length = k + 1;
  return t;
}
function tinyPow(b, e) {
  var n = b;
  while (--e) n *= b;
  return n;
}
function toLessThanHalfPi(Ctor, x) {
  var t,
    isNeg = x.s < 0,
    pi = getPi(Ctor, Ctor.precision, 1),
    halfPi = pi.times(0.5);
  x = x.abs();
  if (x.lte(halfPi)) {
    quadrant = isNeg ? 4 : 1;
    return x;
  }
  t = x.divToInt(pi);
  if (t.isZero()) {
    quadrant = isNeg ? 3 : 2;
  } else {
    x = x.minus(t.times(pi));
    if (x.lte(halfPi)) {
      quadrant = isOdd(t) ? isNeg ? 2 : 3 : isNeg ? 4 : 1;
      return x;
    }
    quadrant = isOdd(t) ? isNeg ? 1 : 4 : isNeg ? 3 : 2;
  }
  return x.minus(pi).abs();
}
function toStringBinary(x, baseOut, sd, rm) {
  var base,
    e,
    i,
    k,
    len,
    roundUp,
    str,
    xd,
    y,
    Ctor = x.constructor,
    isExp = sd !== void 0;
  if (isExp) {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0) rm = Ctor.rounding;else checkInt32(rm, 0, 8);
  } else {
    sd = Ctor.precision;
    rm = Ctor.rounding;
  }
  if (!x.isFinite()) {
    str = nonFiniteToString(x);
  } else {
    str = finiteToString(x);
    i = str.indexOf(".");
    if (isExp) {
      base = 2;
      if (baseOut == 16) {
        sd = sd * 4 - 3;
      } else if (baseOut == 8) {
        sd = sd * 3 - 2;
      }
    } else {
      base = baseOut;
    }
    if (i >= 0) {
      str = str.replace(".", "");
      y = new Ctor(1);
      y.e = str.length - i;
      y.d = convertBase(finiteToString(y), 10, base);
      y.e = y.d.length;
    }
    xd = convertBase(str, 10, base);
    e = len = xd.length;
    for (; xd[--len] == 0;) xd.pop();
    if (!xd[0]) {
      str = isExp ? "0p+0" : "0";
    } else {
      if (i < 0) {
        e--;
      } else {
        x = new Ctor(x);
        x.d = xd;
        x.e = e;
        x = divide(x, y, sd, rm, 0, base);
        xd = x.d;
        e = x.e;
        roundUp = inexact;
      }
      i = xd[sd];
      k = base / 2;
      roundUp = roundUp || xd[sd + 1] !== void 0;
      roundUp = rm < 4 ? (i !== void 0 || roundUp) && (rm === 0 || rm === (x.s < 0 ? 3 : 2)) : i > k || i === k && (rm === 4 || roundUp || rm === 6 && xd[sd - 1] & 1 || rm === (x.s < 0 ? 8 : 7));
      xd.length = sd;
      if (roundUp) {
        for (; ++xd[--sd] > base - 1;) {
          xd[sd] = 0;
          if (!sd) {
            ++e;
            xd.unshift(1);
          }
        }
      }
      for (len = xd.length; !xd[len - 1]; --len);
      for (i = 0, str = ""; i < len; i++) str += NUMERALS.charAt(xd[i]);
      if (isExp) {
        if (len > 1) {
          if (baseOut == 16 || baseOut == 8) {
            i = baseOut == 16 ? 4 : 3;
            for (--len; len % i; len++) str += "0";
            xd = convertBase(str, base, baseOut);
            for (len = xd.length; !xd[len - 1]; --len);
            for (i = 1, str = "1."; i < len; i++) str += NUMERALS.charAt(xd[i]);
          } else {
            str = str.charAt(0) + "." + str.slice(1);
          }
        }
        str = str + (e < 0 ? "p" : "p+") + e;
      } else if (e < 0) {
        for (; ++e;) str = "0" + str;
        str = "0." + str;
      } else {
        if (++e > len) for (e -= len; e--;) str += "0";else if (e < len) str = str.slice(0, e) + "." + str.slice(e);
      }
    }
    str = (baseOut == 16 ? "0x" : baseOut == 2 ? "0b" : baseOut == 8 ? "0o" : "") + str;
  }
  return x.s < 0 ? "-" + str : str;
}
function truncate(arr, len) {
  if (arr.length > len) {
    arr.length = len;
    return true;
  }
}
function abs(x) {
  return new this(x).abs();
}
function acos(x) {
  return new this(x).acos();
}
function acosh(x) {
  return new this(x).acosh();
}
function add(x, y) {
  return new this(x).plus(y);
}
function asin(x) {
  return new this(x).asin();
}
function asinh(x) {
  return new this(x).asinh();
}
function atan(x) {
  return new this(x).atan();
}
function atanh(x) {
  return new this(x).atanh();
}
function atan2(y, x) {
  y = new this(y);
  x = new this(x);
  var r,
    pr = this.precision,
    rm = this.rounding,
    wpr = pr + 4;
  if (!y.s || !x.s) {
    r = new this(NaN);
  } else if (!y.d && !x.d) {
    r = getPi(this, wpr, 1).times(x.s > 0 ? 0.25 : 0.75);
    r.s = y.s;
  } else if (!x.d || y.isZero()) {
    r = x.s < 0 ? getPi(this, pr, rm) : new this(0);
    r.s = y.s;
  } else if (!y.d || x.isZero()) {
    r = getPi(this, wpr, 1).times(0.5);
    r.s = y.s;
  } else if (x.s < 0) {
    this.precision = wpr;
    this.rounding = 1;
    r = this.atan(divide(y, x, wpr, 1));
    x = getPi(this, wpr, 1);
    this.precision = pr;
    this.rounding = rm;
    r = y.s < 0 ? r.minus(x) : r.plus(x);
  } else {
    r = this.atan(divide(y, x, wpr, 1));
  }
  return r;
}
function cbrt(x) {
  return new this(x).cbrt();
}
function ceil(x) {
  return finalise(x = new this(x), x.e + 1, 2);
}
function clamp(x, min2, max2) {
  return new this(x).clamp(min2, max2);
}
function config(obj) {
  if (!obj || typeof obj !== "object") throw Error(decimalError + "Object expected");
  var i,
    p,
    v,
    useDefaults = obj.defaults === true,
    ps = ["precision", 1, MAX_DIGITS, "rounding", 0, 8, "toExpNeg", -EXP_LIMIT, 0, "toExpPos", 0, EXP_LIMIT, "maxE", 0, EXP_LIMIT, "minE", -EXP_LIMIT, 0, "modulo", 0, 9];
  for (i = 0; i < ps.length; i += 3) {
    if (p = ps[i], useDefaults) this[p] = DEFAULTS[p];
    if ((v = obj[p]) !== void 0) {
      if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2]) this[p] = v;else throw Error(invalidArgument + p + ": " + v);
    }
  }
  if (p = "crypto", useDefaults) this[p] = DEFAULTS[p];
  if ((v = obj[p]) !== void 0) {
    if (v === true || v === false || v === 0 || v === 1) {
      if (v) {
        if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
          this[p] = true;
        } else {
          throw Error(cryptoUnavailable);
        }
      } else {
        this[p] = false;
      }
    } else {
      throw Error(invalidArgument + p + ": " + v);
    }
  }
  return this;
}
function cos(x) {
  return new this(x).cos();
}
function cosh(x) {
  return new this(x).cosh();
}
function clone(obj) {
  var i, p, ps;
  function Decimal2(v) {
    var e,
      i2,
      t,
      x = this;
    if (!(x instanceof Decimal2)) return new Decimal2(v);
    x.constructor = Decimal2;
    if (isDecimalInstance(v)) {
      x.s = v.s;
      if (external) {
        if (!v.d || v.e > Decimal2.maxE) {
          x.e = NaN;
          x.d = null;
        } else if (v.e < Decimal2.minE) {
          x.e = 0;
          x.d = [0];
        } else {
          x.e = v.e;
          x.d = v.d.slice();
        }
      } else {
        x.e = v.e;
        x.d = v.d ? v.d.slice() : v.d;
      }
      return;
    }
    t = typeof v;
    if (t === "number") {
      if (v === 0) {
        x.s = 1 / v < 0 ? -1 : 1;
        x.e = 0;
        x.d = [0];
        return;
      }
      if (v < 0) {
        v = -v;
        x.s = -1;
      } else {
        x.s = 1;
      }
      if (v === ~~v && v < 1e7) {
        for (e = 0, i2 = v; i2 >= 10; i2 /= 10) e++;
        if (external) {
          if (e > Decimal2.maxE) {
            x.e = NaN;
            x.d = null;
          } else if (e < Decimal2.minE) {
            x.e = 0;
            x.d = [0];
          } else {
            x.e = e;
            x.d = [v];
          }
        } else {
          x.e = e;
          x.d = [v];
        }
        return;
      } else if (v * 0 !== 0) {
        if (!v) x.s = NaN;
        x.e = NaN;
        x.d = null;
        return;
      }
      return parseDecimal(x, v.toString());
    } else if (t !== "string") {
      throw Error(invalidArgument + v);
    }
    if ((i2 = v.charCodeAt(0)) === 45) {
      v = v.slice(1);
      x.s = -1;
    } else {
      if (i2 === 43) v = v.slice(1);
      x.s = 1;
    }
    return isDecimal.test(v) ? parseDecimal(x, v) : parseOther(x, v);
  }
  Decimal2.prototype = P;
  Decimal2.ROUND_UP = 0;
  Decimal2.ROUND_DOWN = 1;
  Decimal2.ROUND_CEIL = 2;
  Decimal2.ROUND_FLOOR = 3;
  Decimal2.ROUND_HALF_UP = 4;
  Decimal2.ROUND_HALF_DOWN = 5;
  Decimal2.ROUND_HALF_EVEN = 6;
  Decimal2.ROUND_HALF_CEIL = 7;
  Decimal2.ROUND_HALF_FLOOR = 8;
  Decimal2.EUCLID = 9;
  Decimal2.config = Decimal2.set = config;
  Decimal2.clone = clone;
  Decimal2.isDecimal = isDecimalInstance;
  Decimal2.abs = abs;
  Decimal2.acos = acos;
  Decimal2.acosh = acosh;
  Decimal2.add = add;
  Decimal2.asin = asin;
  Decimal2.asinh = asinh;
  Decimal2.atan = atan;
  Decimal2.atanh = atanh;
  Decimal2.atan2 = atan2;
  Decimal2.cbrt = cbrt;
  Decimal2.ceil = ceil;
  Decimal2.clamp = clamp;
  Decimal2.cos = cos;
  Decimal2.cosh = cosh;
  Decimal2.div = div;
  Decimal2.exp = exp;
  Decimal2.floor = floor;
  Decimal2.hypot = hypot;
  Decimal2.ln = ln;
  Decimal2.log = log;
  Decimal2.log10 = log10;
  Decimal2.log2 = log2;
  Decimal2.max = max;
  Decimal2.min = min;
  Decimal2.mod = mod;
  Decimal2.mul = mul;
  Decimal2.pow = pow;
  Decimal2.random = random;
  Decimal2.round = round;
  Decimal2.sign = sign;
  Decimal2.sin = sin;
  Decimal2.sinh = sinh;
  Decimal2.sqrt = sqrt;
  Decimal2.sub = sub;
  Decimal2.sum = sum;
  Decimal2.tan = tan;
  Decimal2.tanh = tanh;
  Decimal2.trunc = trunc;
  if (obj === void 0) obj = {};
  if (obj) {
    if (obj.defaults !== true) {
      ps = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"];
      for (i = 0; i < ps.length;) if (!obj.hasOwnProperty(p = ps[i++])) obj[p] = this[p];
    }
  }
  Decimal2.config(obj);
  return Decimal2;
}
function div(x, y) {
  return new this(x).div(y);
}
function exp(x) {
  return new this(x).exp();
}
function floor(x) {
  return finalise(x = new this(x), x.e + 1, 3);
}
function hypot() {
  var i,
    n,
    t = new this(0);
  external = false;
  for (i = 0; i < arguments.length;) {
    n = new this(arguments[i++]);
    if (!n.d) {
      if (n.s) {
        external = true;
        return new this(1 / 0);
      }
      t = n;
    } else if (t.d) {
      t = t.plus(n.times(n));
    }
  }
  external = true;
  return t.sqrt();
}
function isDecimalInstance(obj) {
  return obj instanceof Decimal || obj && obj.toStringTag === tag || false;
}
function ln(x) {
  return new this(x).ln();
}
function log(x, y) {
  return new this(x).log(y);
}
function log2(x) {
  return new this(x).log(2);
}
function log10(x) {
  return new this(x).log(10);
}
function max() {
  return maxOrMin(this, arguments, "lt");
}
function min() {
  return maxOrMin(this, arguments, "gt");
}
function mod(x, y) {
  return new this(x).mod(y);
}
function mul(x, y) {
  return new this(x).mul(y);
}
function pow(x, y) {
  return new this(x).pow(y);
}
function random(sd) {
  var d,
    e,
    k,
    n,
    i = 0,
    r = new this(1),
    rd = [];
  if (sd === void 0) sd = this.precision;else checkInt32(sd, 1, MAX_DIGITS);
  k = Math.ceil(sd / LOG_BASE);
  if (!this.crypto) {
    for (; i < k;) rd[i++] = Math.random() * 1e7 | 0;
  } else if (crypto.getRandomValues) {
    d = crypto.getRandomValues(new Uint32Array(k));
    for (; i < k;) {
      n = d[i];
      if (n >= 429e7) {
        d[i] = crypto.getRandomValues(new Uint32Array(1))[0];
      } else {
        rd[i++] = n % 1e7;
      }
    }
  } else if (crypto.randomBytes) {
    d = crypto.randomBytes(k *= 4);
    for (; i < k;) {
      n = d[i] + (d[i + 1] << 8) + (d[i + 2] << 16) + ((d[i + 3] & 127) << 24);
      if (n >= 214e7) {
        crypto.randomBytes(4).copy(d, i);
      } else {
        rd.push(n % 1e7);
        i += 4;
      }
    }
    i = k / 4;
  } else {
    throw Error(cryptoUnavailable);
  }
  k = rd[--i];
  sd %= LOG_BASE;
  if (k && sd) {
    n = mathpow(10, LOG_BASE - sd);
    rd[i] = (k / n | 0) * n;
  }
  for (; rd[i] === 0; i--) rd.pop();
  if (i < 0) {
    e = 0;
    rd = [0];
  } else {
    e = -1;
    for (; rd[0] === 0; e -= LOG_BASE) rd.shift();
    for (k = 1, n = rd[0]; n >= 10; n /= 10) k++;
    if (k < LOG_BASE) e -= LOG_BASE - k;
  }
  r.e = e;
  r.d = rd;
  return r;
}
function round(x) {
  return finalise(x = new this(x), x.e + 1, this.rounding);
}
function sign(x) {
  x = new this(x);
  return x.d ? x.d[0] ? x.s : 0 * x.s : x.s || NaN;
}
function sin(x) {
  return new this(x).sin();
}
function sinh(x) {
  return new this(x).sinh();
}
function sqrt(x) {
  return new this(x).sqrt();
}
function sub(x, y) {
  return new this(x).sub(y);
}
function sum() {
  var i = 0,
    args = arguments,
    x = new this(args[i]);
  external = false;
  for (; x.s && ++i < args.length;) x = x.plus(args[i]);
  external = true;
  return finalise(x, this.precision, this.rounding);
}
function tan(x) {
  return new this(x).tan();
}
function tanh(x) {
  return new this(x).tanh();
}
function trunc(x) {
  return finalise(x = new this(x), x.e + 1, 1);
}
P[Symbol.for("nodejs.util.inspect.custom")] = P.toString;
P[Symbol.toStringTag] = "Decimal";
var Decimal = P.constructor = clone(DEFAULTS);
LN10 = new Decimal(LN10);
PI = new Decimal(PI);
var decimal_default = Decimal;

// .beyond/uimport/decimal.js/decimal.mjs.10.4.3.js
var decimal_mjs_10_4_3_default = decimal_default;
/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9kZWNpbWFsLmpzL2RlY2ltYWwubWpzLjEwLjQuMy5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZWNpbWFsLmpzL2RlY2ltYWwubWpzIl0sIm5hbWVzIjpbImRlY2ltYWxfbWpzXzEwXzRfM19leHBvcnRzIiwiX19leHBvcnQiLCJEZWNpbWFsIiwiZGVmYXVsdCIsImRlY2ltYWxfbWpzXzEwXzRfM19kZWZhdWx0IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIkVYUF9MSU1JVCIsIk1BWF9ESUdJVFMiLCJOVU1FUkFMUyIsIkxOMTAiLCJQSSIsIkRFRkFVTFRTIiwicHJlY2lzaW9uIiwicm91bmRpbmciLCJtb2R1bG8iLCJ0b0V4cE5lZyIsInRvRXhwUG9zIiwibWluRSIsIm1heEUiLCJjcnlwdG8iLCJpbmV4YWN0IiwicXVhZHJhbnQiLCJleHRlcm5hbCIsImRlY2ltYWxFcnJvciIsImludmFsaWRBcmd1bWVudCIsInByZWNpc2lvbkxpbWl0RXhjZWVkZWQiLCJjcnlwdG9VbmF2YWlsYWJsZSIsInRhZyIsIm1hdGhmbG9vciIsIk1hdGgiLCJmbG9vciIsIm1hdGhwb3ciLCJwb3ciLCJpc0JpbmFyeSIsImlzSGV4IiwiaXNPY3RhbCIsImlzRGVjaW1hbCIsIkJBU0UiLCJMT0dfQkFTRSIsIk1BWF9TQUZFX0lOVEVHRVIiLCJMTjEwX1BSRUNJU0lPTiIsImxlbmd0aCIsIlBJX1BSRUNJU0lPTiIsIlAiLCJ0b1N0cmluZ1RhZyIsImFic29sdXRlVmFsdWUiLCJhYnMiLCJ4IiwiY29uc3RydWN0b3IiLCJzIiwiZmluYWxpc2UiLCJjZWlsIiwiZSIsImNsYW1wZWRUbyIsImNsYW1wIiwibWluMiIsIm1heDIiLCJrIiwiQ3RvciIsIk5hTiIsImd0IiwiRXJyb3IiLCJjbXAiLCJjb21wYXJlZFRvIiwieSIsImkiLCJqIiwieGRMIiwieWRMIiwieGQiLCJkIiwieWQiLCJ4cyIsInlzIiwiY29zaW5lIiwiY29zIiwicHIiLCJybSIsIm1heCIsInNkIiwidG9MZXNzVGhhbkhhbGZQaSIsIm5lZyIsImN1YmVSb290IiwiY2JydCIsIm0iLCJuIiwiciIsInJlcCIsInQiLCJ0MyIsInQzcGx1c3giLCJpc0Zpbml0ZSIsImlzWmVybyIsImRpZ2l0c1RvU3RyaW5nIiwidG9FeHBvbmVudGlhbCIsInNsaWNlIiwiaW5kZXhPZiIsInRvU3RyaW5nIiwidGltZXMiLCJwbHVzIiwiZGl2aWRlIiwiZXEiLCJjaGFyQXQiLCJkZWNpbWFsUGxhY2VzIiwiZHAiLCJ3IiwiZGl2aWRlZEJ5IiwiZGl2IiwiZGl2aWRlZFRvSW50ZWdlckJ5IiwiZGl2VG9JbnQiLCJlcXVhbHMiLCJncmVhdGVyVGhhbiIsImdyZWF0ZXJUaGFuT3JFcXVhbFRvIiwiZ3RlIiwiaHlwZXJib2xpY0Nvc2luZSIsImNvc2giLCJsZW4iLCJvbmUiLCJ0aW55UG93IiwidGF5bG9yU2VyaWVzIiwiY29zaDJfeCIsImQ4IiwibWludXMiLCJoeXBlcmJvbGljU2luZSIsInNpbmgiLCJzcXJ0Iiwic2luaDJfeCIsImQ1IiwiZDE2IiwiZDIwIiwiaHlwZXJib2xpY1RhbmdlbnQiLCJ0YW5oIiwiaW52ZXJzZUNvc2luZSIsImFjb3MiLCJoYWxmUGkiLCJpc05lZyIsImdldFBpIiwiYXNpbiIsImludmVyc2VIeXBlcmJvbGljQ29zaW5lIiwiYWNvc2giLCJsdGUiLCJsbiIsImludmVyc2VIeXBlcmJvbGljU2luZSIsImFzaW5oIiwiaW52ZXJzZUh5cGVyYm9saWNUYW5nZW50IiwiYXRhbmgiLCJ3cHIiLCJ4c2QiLCJpbnZlcnNlU2luZSIsImF0YW4iLCJpbnZlcnNlVGFuZ2VudCIsInB4IiwieDIiLCJtaW4iLCJpc0ludGVnZXIiLCJpc0ludCIsImlzTmFOIiwiaXNOZWdhdGl2ZSIsImlzUG9zaXRpdmUiLCJpc1BvcyIsImxlc3NUaGFuIiwibHQiLCJsZXNzVGhhbk9yRXF1YWxUbyIsImxvZ2FyaXRobSIsImxvZyIsImJhc2UiLCJpc0Jhc2UxMCIsImRlbm9taW5hdG9yIiwiaW5mIiwibnVtIiwiYXJnIiwiZ3VhcmQiLCJuYXR1cmFsTG9nYXJpdGhtIiwiZ2V0TG4xMCIsImNoZWNrUm91bmRpbmdEaWdpdHMiLCJzdWIiLCJ4ZSIsInhMVHkiLCJyZXZlcnNlIiwicHVzaCIsInBvcCIsInNoaWZ0IiwiZ2V0QmFzZTEwRXhwb25lbnQiLCJtb2QiLCJxIiwibmF0dXJhbEV4cG9uZW50aWFsIiwiZXhwIiwibmVnYXRlZCIsImFkZCIsImNhcnJ5IiwidW5zaGlmdCIsInoiLCJnZXRQcmVjaXNpb24iLCJyb3VuZCIsInNpbmUiLCJzaW4iLCJzcXVhcmVSb290IiwidGFuZ2VudCIsInRhbiIsIm11bCIsInJMIiwidG9CaW5hcnkiLCJ0b1N0cmluZ0JpbmFyeSIsInRvRGVjaW1hbFBsYWNlcyIsInRvRFAiLCJjaGVja0ludDMyIiwic3RyIiwiZmluaXRlVG9TdHJpbmciLCJ0b0ZpeGVkIiwidG9GcmFjdGlvbiIsIm1heEQiLCJkMCIsImQxIiwiZDIiLCJuMCIsIm4xIiwidG9IZXhhZGVjaW1hbCIsInRvSGV4IiwidG9OZWFyZXN0IiwidG9OdW1iZXIiLCJ0b09jdGFsIiwidG9Qb3dlciIsInluIiwiaW50UG93IiwidG9QcmVjaXNpb24iLCJ0b1NpZ25pZmljYW50RGlnaXRzIiwidG9TRCIsInRydW5jYXRlZCIsInRydW5jIiwidmFsdWVPZiIsInRvSlNPTiIsIndzIiwiaW5kZXhPZkxhc3RXb3JkIiwiZ2V0WmVyb1N0cmluZyIsInJlcGVhdGluZyIsImRpIiwicmQiLCJjb252ZXJ0QmFzZSIsImJhc2VJbiIsImJhc2VPdXQiLCJhcnIiLCJhcnJMIiwic3RyTCIsImNvczJ4IiwibXVsdGlwbHlJbnRlZ2VyIiwidGVtcCIsImNvbXBhcmUiLCJhIiwiYiIsImFMIiwiYkwiLCJzdWJ0cmFjdCIsImxvZ0Jhc2UiLCJtb3JlIiwicHJvZCIsInByb2RMIiwicWQiLCJyZW0iLCJyZW1MIiwicmVtMCIsInhpIiwieEwiLCJ5ZDAiLCJ5TCIsInl6Iiwic2lnbjIiLCJpc1RydW5jYXRlZCIsImRpZ2l0cyIsInJvdW5kVXAiLCJ4ZGkiLCJvdXQiLCJpc0V4cCIsIm5vbkZpbml0ZVRvU3RyaW5nIiwienMiLCJ0cnVuY2F0ZSIsImlzT2RkIiwibWF4T3JNaW4iLCJhcmdzIiwibHRndCIsInBvdzIiLCJzdW0yIiwiYyIsImMwIiwibnVtZXJhdG9yIiwieDEiLCJTdHJpbmciLCJwYXJzZURlY2ltYWwiLCJyZXBsYWNlIiwic2VhcmNoIiwic3Vic3RyaW5nIiwiY2hhckNvZGVBdCIsInBhcnNlT3RoZXIiLCJkaXZpc29yIiwiaXNGbG9hdCIsInAiLCJ0ZXN0IiwidG9Mb3dlckNhc2UiLCJzaW4yX3giLCJpc0h5cGVyYm9saWMiLCJ1IiwicGkiLCJhdGFuMiIsImNvbmZpZyIsIm9iaiIsInYiLCJ1c2VEZWZhdWx0cyIsImRlZmF1bHRzIiwicHMiLCJnZXRSYW5kb21WYWx1ZXMiLCJyYW5kb21CeXRlcyIsImNsb25lIiwiRGVjaW1hbDIiLCJpMiIsImlzRGVjaW1hbEluc3RhbmNlIiwicHJvdG90eXBlIiwiUk9VTkRfVVAiLCJST1VORF9ET1dOIiwiUk9VTkRfQ0VJTCIsIlJPVU5EX0ZMT09SIiwiUk9VTkRfSEFMRl9VUCIsIlJPVU5EX0hBTEZfRE9XTiIsIlJPVU5EX0hBTEZfRVZFTiIsIlJPVU5EX0hBTEZfQ0VJTCIsIlJPVU5EX0hBTEZfRkxPT1IiLCJFVUNMSUQiLCJzZXQiLCJoeXBvdCIsImxvZzEwIiwibG9nMiIsInJhbmRvbSIsInNpZ24iLCJzdW0iLCJoYXNPd25Qcm9wZXJ0eSIsImFyZ3VtZW50cyIsIlVpbnQzMkFycmF5IiwiY29weSIsIlN5bWJvbCIsImZvciIsImRlY2ltYWxfZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSwwQkFBQTtBQUFBQyxRQUFBLENBQUFELDBCQUFBO0VBQUFFLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQztBQUFBO0FBQUFDLE1BQUEs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