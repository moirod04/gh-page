System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["typed-function","4.1.1"]]);
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

// node_modules/typed-function/lib/umd/typed-function.js
var require_typed_function = __commonJS({
  "node_modules/typed-function/lib/umd/typed-function.js"(exports, module2) {
    (function (global, factory) {
      typeof exports === "object" && typeof module2 !== "undefined" ? module2.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global["'typed'"] = factory());
    })(exports, function () {
      "use strict";

      function ok() {
        return true;
      }
      function notOk() {
        return false;
      }
      function undef() {
        return void 0;
      }
      const NOT_TYPED_FUNCTION = "Argument is not a typed-function.";
      function create() {
        function isPlainObject(x) {
          return typeof x === "object" && x !== null && x.constructor === Object;
        }
        const _types = [{
          name: "number",
          test: function (x) {
            return typeof x === "number";
          }
        }, {
          name: "string",
          test: function (x) {
            return typeof x === "string";
          }
        }, {
          name: "boolean",
          test: function (x) {
            return typeof x === "boolean";
          }
        }, {
          name: "Function",
          test: function (x) {
            return typeof x === "function";
          }
        }, {
          name: "Array",
          test: Array.isArray
        }, {
          name: "Date",
          test: function (x) {
            return x instanceof Date;
          }
        }, {
          name: "RegExp",
          test: function (x) {
            return x instanceof RegExp;
          }
        }, {
          name: "Object",
          test: isPlainObject
        }, {
          name: "null",
          test: function (x) {
            return x === null;
          }
        }, {
          name: "undefined",
          test: function (x) {
            return x === void 0;
          }
        }];
        const anyType = {
          name: "any",
          test: ok,
          isAny: true
        };
        let typeMap;
        let typeList;
        let nConversions = 0;
        let typed = {
          createCount: 0
        };
        function findType(typeName) {
          const type = typeMap.get(typeName);
          if (type) {
            return type;
          }
          let message = 'Unknown type "' + typeName + '"';
          const name = typeName.toLowerCase();
          let otherName;
          for (otherName of typeList) {
            if (otherName.toLowerCase() === name) {
              message += '. Did you mean "' + otherName + '" ?';
              break;
            }
          }
          throw new TypeError(message);
        }
        function addTypes(types) {
          let beforeSpec = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "any";
          const beforeIndex = beforeSpec ? findType(beforeSpec).index : typeList.length;
          const newTypes = [];
          for (let i = 0; i < types.length; ++i) {
            if (!types[i] || typeof types[i].name !== "string" || typeof types[i].test !== "function") {
              throw new TypeError("Object with properties {name: string, test: function} expected");
            }
            const typeName = types[i].name;
            if (typeMap.has(typeName)) {
              throw new TypeError('Duplicate type name "' + typeName + '"');
            }
            newTypes.push(typeName);
            typeMap.set(typeName, {
              name: typeName,
              test: types[i].test,
              isAny: types[i].isAny,
              index: beforeIndex + i,
              conversionsTo: []
            });
          }
          const affectedTypes = typeList.slice(beforeIndex);
          typeList = typeList.slice(0, beforeIndex).concat(newTypes).concat(affectedTypes);
          for (let i = beforeIndex + newTypes.length; i < typeList.length; ++i) {
            typeMap.get(typeList[i]).index = i;
          }
        }
        function clear() {
          typeMap = /* @__PURE__ */new Map();
          typeList = [];
          nConversions = 0;
          addTypes([anyType], false);
        }
        clear();
        addTypes(_types);
        function clearConversions() {
          let typeName;
          for (typeName of typeList) {
            typeMap.get(typeName).conversionsTo = [];
          }
          nConversions = 0;
        }
        function findTypeNames(value) {
          const matches = typeList.filter(name => {
            const type = typeMap.get(name);
            return !type.isAny && type.test(value);
          });
          if (matches.length) {
            return matches;
          }
          return ["any"];
        }
        function isTypedFunction(entity) {
          return entity && typeof entity === "function" && "_typedFunctionData" in entity;
        }
        function findSignature(fn, signature, options) {
          if (!isTypedFunction(fn)) {
            throw new TypeError(NOT_TYPED_FUNCTION);
          }
          const exact = options && options.exact;
          const stringSignature = Array.isArray(signature) ? signature.join(",") : signature;
          const params = parseSignature(stringSignature);
          const canonicalSignature = stringifyParams(params);
          if (!exact || canonicalSignature in fn.signatures) {
            const match = fn._typedFunctionData.signatureMap.get(canonicalSignature);
            if (match) {
              return match;
            }
          }
          const nParams = params.length;
          let remainingSignatures;
          if (exact) {
            remainingSignatures = [];
            let name;
            for (name in fn.signatures) {
              remainingSignatures.push(fn._typedFunctionData.signatureMap.get(name));
            }
          } else {
            remainingSignatures = fn._typedFunctionData.signatures;
          }
          for (let i = 0; i < nParams; ++i) {
            const want = params[i];
            const filteredSignatures = [];
            let possibility;
            for (possibility of remainingSignatures) {
              const have = getParamAtIndex(possibility.params, i);
              if (!have || want.restParam && !have.restParam) {
                continue;
              }
              if (!have.hasAny) {
                const haveTypes = paramTypeSet(have);
                if (want.types.some(wtype => !haveTypes.has(wtype.name))) {
                  continue;
                }
              }
              filteredSignatures.push(possibility);
            }
            remainingSignatures = filteredSignatures;
            if (remainingSignatures.length === 0) break;
          }
          let candidate;
          for (candidate of remainingSignatures) {
            if (candidate.params.length <= nParams) {
              return candidate;
            }
          }
          throw new TypeError("Signature not found (signature: " + (fn.name || "unnamed") + "(" + stringifyParams(params, ", ") + "))");
        }
        function find(fn, signature, options) {
          return findSignature(fn, signature, options).implementation;
        }
        function convert(value, typeName) {
          const type = findType(typeName);
          if (type.test(value)) {
            return value;
          }
          const conversions = type.conversionsTo;
          if (conversions.length === 0) {
            throw new Error("There are no conversions to " + typeName + " defined.");
          }
          for (let i = 0; i < conversions.length; i++) {
            const fromType = findType(conversions[i].from);
            if (fromType.test(value)) {
              return conversions[i].convert(value);
            }
          }
          throw new Error("Cannot convert " + value + " to " + typeName);
        }
        function stringifyParams(params) {
          let separator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ",";
          return params.map(p => p.name).join(separator);
        }
        function parseParam(param) {
          const restParam = param.indexOf("...") === 0;
          const types = !restParam ? param : param.length > 3 ? param.slice(3) : "any";
          const typeDefs = types.split("|").map(s => findType(s.trim()));
          let hasAny = false;
          let paramName = restParam ? "..." : "";
          const exactTypes = typeDefs.map(function (type) {
            hasAny = type.isAny || hasAny;
            paramName += type.name + "|";
            return {
              name: type.name,
              typeIndex: type.index,
              test: type.test,
              isAny: type.isAny,
              conversion: null,
              conversionIndex: -1
            };
          });
          return {
            types: exactTypes,
            name: paramName.slice(0, -1),
            hasAny,
            hasConversion: false,
            restParam
          };
        }
        function expandParam(param) {
          const typeNames = param.types.map(t => t.name);
          const matchingConversions = availableConversions(typeNames);
          let hasAny = param.hasAny;
          let newName = param.name;
          const convertibleTypes = matchingConversions.map(function (conversion) {
            const type = findType(conversion.from);
            hasAny = type.isAny || hasAny;
            newName += "|" + conversion.from;
            return {
              name: conversion.from,
              typeIndex: type.index,
              test: type.test,
              isAny: type.isAny,
              conversion,
              conversionIndex: conversion.index
            };
          });
          return {
            types: param.types.concat(convertibleTypes),
            name: newName,
            hasAny,
            hasConversion: convertibleTypes.length > 0,
            restParam: param.restParam
          };
        }
        function paramTypeSet(param) {
          if (!param.typeSet) {
            param.typeSet = /* @__PURE__ */new Set();
            param.types.forEach(type => param.typeSet.add(type.name));
          }
          return param.typeSet;
        }
        function parseSignature(rawSignature) {
          const params = [];
          if (typeof rawSignature !== "string") {
            throw new TypeError("Signatures must be strings");
          }
          const signature = rawSignature.trim();
          if (signature === "") {
            return params;
          }
          const rawParams = signature.split(",");
          for (let i = 0; i < rawParams.length; ++i) {
            const parsedParam = parseParam(rawParams[i].trim());
            if (parsedParam.restParam && i !== rawParams.length - 1) {
              throw new SyntaxError('Unexpected rest parameter "' + rawParams[i] + '": only allowed for the last parameter');
            }
            if (parsedParam.types.length === 0) {
              return null;
            }
            params.push(parsedParam);
          }
          return params;
        }
        function hasRestParam(params) {
          const param = last(params);
          return param ? param.restParam : false;
        }
        function compileTest(param) {
          if (!param || param.types.length === 0) {
            return ok;
          } else if (param.types.length === 1) {
            return findType(param.types[0].name).test;
          } else if (param.types.length === 2) {
            const test0 = findType(param.types[0].name).test;
            const test1 = findType(param.types[1].name).test;
            return function or(x) {
              return test0(x) || test1(x);
            };
          } else {
            const tests = param.types.map(function (type) {
              return findType(type.name).test;
            });
            return function or(x) {
              for (let i = 0; i < tests.length; i++) {
                if (tests[i](x)) {
                  return true;
                }
              }
              return false;
            };
          }
        }
        function compileTests(params) {
          let tests, test0, test1;
          if (hasRestParam(params)) {
            tests = initial(params).map(compileTest);
            const varIndex = tests.length;
            const lastTest = compileTest(last(params));
            const testRestParam = function (args) {
              for (let i = varIndex; i < args.length; i++) {
                if (!lastTest(args[i])) {
                  return false;
                }
              }
              return true;
            };
            return function testArgs(args) {
              for (let i = 0; i < tests.length; i++) {
                if (!tests[i](args[i])) {
                  return false;
                }
              }
              return testRestParam(args) && args.length >= varIndex + 1;
            };
          } else {
            if (params.length === 0) {
              return function testArgs(args) {
                return args.length === 0;
              };
            } else if (params.length === 1) {
              test0 = compileTest(params[0]);
              return function testArgs(args) {
                return test0(args[0]) && args.length === 1;
              };
            } else if (params.length === 2) {
              test0 = compileTest(params[0]);
              test1 = compileTest(params[1]);
              return function testArgs(args) {
                return test0(args[0]) && test1(args[1]) && args.length === 2;
              };
            } else {
              tests = params.map(compileTest);
              return function testArgs(args) {
                for (let i = 0; i < tests.length; i++) {
                  if (!tests[i](args[i])) {
                    return false;
                  }
                }
                return args.length === tests.length;
              };
            }
          }
        }
        function getParamAtIndex(params, index) {
          return index < params.length ? params[index] : hasRestParam(params) ? last(params) : null;
        }
        function getTypeSetAtIndex(params, index) {
          const param = getParamAtIndex(params, index);
          if (!param) {
            return /* @__PURE__ */new Set();
          }
          return paramTypeSet(param);
        }
        function isExactType(type) {
          return type.conversion === null || type.conversion === void 0;
        }
        function mergeExpectedParams(signatures, index) {
          const typeSet = /* @__PURE__ */new Set();
          signatures.forEach(signature => {
            const paramSet = getTypeSetAtIndex(signature.params, index);
            let name;
            for (name of paramSet) {
              typeSet.add(name);
            }
          });
          return typeSet.has("any") ? ["any"] : Array.from(typeSet);
        }
        function createError(name, args, signatures) {
          let err, expected;
          const _name = name || "unnamed";
          let matchingSignatures = signatures;
          let index;
          for (index = 0; index < args.length; index++) {
            const nextMatchingDefs = [];
            matchingSignatures.forEach(signature => {
              const param = getParamAtIndex(signature.params, index);
              const test = compileTest(param);
              if ((index < signature.params.length || hasRestParam(signature.params)) && test(args[index])) {
                nextMatchingDefs.push(signature);
              }
            });
            if (nextMatchingDefs.length === 0) {
              expected = mergeExpectedParams(matchingSignatures, index);
              if (expected.length > 0) {
                const actualTypes = findTypeNames(args[index]);
                err = new TypeError("Unexpected type of argument in function " + _name + " (expected: " + expected.join(" or ") + ", actual: " + actualTypes.join(" | ") + ", index: " + index + ")");
                err.data = {
                  category: "wrongType",
                  fn: _name,
                  index,
                  actual: actualTypes,
                  expected
                };
                return err;
              }
            } else {
              matchingSignatures = nextMatchingDefs;
            }
          }
          const lengths = matchingSignatures.map(function (signature) {
            return hasRestParam(signature.params) ? Infinity : signature.params.length;
          });
          if (args.length < Math.min.apply(null, lengths)) {
            expected = mergeExpectedParams(matchingSignatures, index);
            err = new TypeError("Too few arguments in function " + _name + " (expected: " + expected.join(" or ") + ", index: " + args.length + ")");
            err.data = {
              category: "tooFewArgs",
              fn: _name,
              index: args.length,
              expected
            };
            return err;
          }
          const maxLength = Math.max.apply(null, lengths);
          if (args.length > maxLength) {
            err = new TypeError("Too many arguments in function " + _name + " (expected: " + maxLength + ", actual: " + args.length + ")");
            err.data = {
              category: "tooManyArgs",
              fn: _name,
              index: args.length,
              expectedLength: maxLength
            };
            return err;
          }
          const argTypes = [];
          for (let i = 0; i < args.length; ++i) {
            argTypes.push(findTypeNames(args[i]).join("|"));
          }
          err = new TypeError('Arguments of type "' + argTypes.join(", ") + '" do not match any of the defined signatures of function ' + _name + ".");
          err.data = {
            category: "mismatch",
            actual: argTypes
          };
          return err;
        }
        function getLowestTypeIndex(param) {
          let min = typeList.length + 1;
          for (let i = 0; i < param.types.length; i++) {
            if (isExactType(param.types[i])) {
              min = Math.min(min, param.types[i].typeIndex);
            }
          }
          return min;
        }
        function getLowestConversionIndex(param) {
          let min = nConversions + 1;
          for (let i = 0; i < param.types.length; i++) {
            if (!isExactType(param.types[i])) {
              min = Math.min(min, param.types[i].conversionIndex);
            }
          }
          return min;
        }
        function compareParams(param1, param2) {
          if (param1.hasAny) {
            if (!param2.hasAny) {
              return 1;
            }
          } else if (param2.hasAny) {
            return -1;
          }
          if (param1.restParam) {
            if (!param2.restParam) {
              return 1;
            }
          } else if (param2.restParam) {
            return -1;
          }
          if (param1.hasConversion) {
            if (!param2.hasConversion) {
              return 1;
            }
          } else if (param2.hasConversion) {
            return -1;
          }
          const typeDiff = getLowestTypeIndex(param1) - getLowestTypeIndex(param2);
          if (typeDiff < 0) {
            return -1;
          }
          if (typeDiff > 0) {
            return 1;
          }
          const convDiff = getLowestConversionIndex(param1) - getLowestConversionIndex(param2);
          if (convDiff < 0) {
            return -1;
          }
          if (convDiff > 0) {
            return 1;
          }
          return 0;
        }
        function compareSignatures(signature1, signature2) {
          const pars1 = signature1.params;
          const pars2 = signature2.params;
          const last1 = last(pars1);
          const last2 = last(pars2);
          const hasRest1 = hasRestParam(pars1);
          const hasRest2 = hasRestParam(pars2);
          if (hasRest1 && last1.hasAny) {
            if (!hasRest2 || !last2.hasAny) {
              return 1;
            }
          } else if (hasRest2 && last2.hasAny) {
            return -1;
          }
          let any1 = 0;
          let conv1 = 0;
          let par;
          for (par of pars1) {
            if (par.hasAny) ++any1;
            if (par.hasConversion) ++conv1;
          }
          let any2 = 0;
          let conv2 = 0;
          for (par of pars2) {
            if (par.hasAny) ++any2;
            if (par.hasConversion) ++conv2;
          }
          if (any1 !== any2) {
            return any1 - any2;
          }
          if (hasRest1 && last1.hasConversion) {
            if (!hasRest2 || !last2.hasConversion) {
              return 1;
            }
          } else if (hasRest2 && last2.hasConversion) {
            return -1;
          }
          if (conv1 !== conv2) {
            return conv1 - conv2;
          }
          if (hasRest1) {
            if (!hasRest2) {
              return 1;
            }
          } else if (hasRest2) {
            return -1;
          }
          const lengthCriterion = (pars1.length - pars2.length) * (hasRest1 ? -1 : 1);
          if (lengthCriterion !== 0) {
            return lengthCriterion;
          }
          const comparisons = [];
          let tc = 0;
          for (let i = 0; i < pars1.length; ++i) {
            const thisComparison = compareParams(pars1[i], pars2[i]);
            comparisons.push(thisComparison);
            tc += thisComparison;
          }
          if (tc !== 0) {
            return tc;
          }
          let c;
          for (c of comparisons) {
            if (c !== 0) {
              return c;
            }
          }
          return 0;
        }
        function availableConversions(typeNames) {
          if (typeNames.length === 0) {
            return [];
          }
          const types = typeNames.map(findType);
          if (typeNames.length > 1) {
            types.sort((t1, t2) => t1.index - t2.index);
          }
          let matches = types[0].conversionsTo;
          if (typeNames.length === 1) {
            return matches;
          }
          matches = matches.concat([]);
          const knownTypes = new Set(typeNames);
          for (let i = 1; i < types.length; ++i) {
            let newMatch;
            for (newMatch of types[i].conversionsTo) {
              if (!knownTypes.has(newMatch.from)) {
                matches.push(newMatch);
                knownTypes.add(newMatch.from);
              }
            }
          }
          return matches;
        }
        function compileArgsPreprocessing(params, fn) {
          let fnConvert = fn;
          if (params.some(p => p.hasConversion)) {
            const restParam = hasRestParam(params);
            const compiledConversions = params.map(compileArgConversion);
            fnConvert = function convertArgs() {
              const args = [];
              const last2 = restParam ? arguments.length - 1 : arguments.length;
              for (let i = 0; i < last2; i++) {
                args[i] = compiledConversions[i](arguments[i]);
              }
              if (restParam) {
                args[last2] = arguments[last2].map(compiledConversions[last2]);
              }
              return fn.apply(this, args);
            };
          }
          let fnPreprocess = fnConvert;
          if (hasRestParam(params)) {
            const offset = params.length - 1;
            fnPreprocess = function preprocessRestParams() {
              return fnConvert.apply(this, slice(arguments, 0, offset).concat([slice(arguments, offset)]));
            };
          }
          return fnPreprocess;
        }
        function compileArgConversion(param) {
          let test0, test1, conversion0, conversion1;
          const tests = [];
          const conversions = [];
          param.types.forEach(function (type) {
            if (type.conversion) {
              tests.push(findType(type.conversion.from).test);
              conversions.push(type.conversion.convert);
            }
          });
          switch (conversions.length) {
            case 0:
              return function convertArg(arg) {
                return arg;
              };
            case 1:
              test0 = tests[0];
              conversion0 = conversions[0];
              return function convertArg(arg) {
                if (test0(arg)) {
                  return conversion0(arg);
                }
                return arg;
              };
            case 2:
              test0 = tests[0];
              test1 = tests[1];
              conversion0 = conversions[0];
              conversion1 = conversions[1];
              return function convertArg(arg) {
                if (test0(arg)) {
                  return conversion0(arg);
                }
                if (test1(arg)) {
                  return conversion1(arg);
                }
                return arg;
              };
            default:
              return function convertArg(arg) {
                for (let i = 0; i < conversions.length; i++) {
                  if (tests[i](arg)) {
                    return conversions[i](arg);
                  }
                }
                return arg;
              };
          }
        }
        function splitParams(params) {
          function _splitParams(params2, index, paramsSoFar) {
            if (index < params2.length) {
              const param = params2[index];
              let resultingParams = [];
              if (param.restParam) {
                const exactTypes = param.types.filter(isExactType);
                if (exactTypes.length < param.types.length) {
                  resultingParams.push({
                    types: exactTypes,
                    name: "..." + exactTypes.map(t => t.name).join("|"),
                    hasAny: exactTypes.some(t => t.isAny),
                    hasConversion: false,
                    restParam: true
                  });
                }
                resultingParams.push(param);
              } else {
                resultingParams = param.types.map(function (type) {
                  return {
                    types: [type],
                    name: type.name,
                    hasAny: type.isAny,
                    hasConversion: type.conversion,
                    restParam: false
                  };
                });
              }
              return flatMap(resultingParams, function (nextParam) {
                return _splitParams(params2, index + 1, paramsSoFar.concat([nextParam]));
              });
            } else {
              return [paramsSoFar];
            }
          }
          return _splitParams(params, 0, []);
        }
        function conflicting(params1, params2) {
          const ii = Math.max(params1.length, params2.length);
          for (let i = 0; i < ii; i++) {
            const typeSet1 = getTypeSetAtIndex(params1, i);
            const typeSet2 = getTypeSetAtIndex(params2, i);
            let overlap = false;
            let name;
            for (name of typeSet2) {
              if (typeSet1.has(name)) {
                overlap = true;
                break;
              }
            }
            if (!overlap) {
              return false;
            }
          }
          const len1 = params1.length;
          const len2 = params2.length;
          const restParam1 = hasRestParam(params1);
          const restParam2 = hasRestParam(params2);
          return restParam1 ? restParam2 ? len1 === len2 : len2 >= len1 : restParam2 ? len1 >= len2 : len1 === len2;
        }
        function clearResolutions(functionList) {
          return functionList.map(fn => {
            if (isReferToSelf(fn)) {
              return referToSelf(fn.referToSelf.callback);
            }
            if (isReferTo(fn)) {
              return makeReferTo(fn.referTo.references, fn.referTo.callback);
            }
            return fn;
          });
        }
        function collectResolutions(references, functionList, signatureMap) {
          const resolvedReferences = [];
          let reference;
          for (reference of references) {
            let resolution = signatureMap[reference];
            if (typeof resolution !== "number") {
              throw new TypeError('No definition for referenced signature "' + reference + '"');
            }
            resolution = functionList[resolution];
            if (typeof resolution !== "function") {
              return false;
            }
            resolvedReferences.push(resolution);
          }
          return resolvedReferences;
        }
        function resolveReferences(functionList, signatureMap, self2) {
          const resolvedFunctions = clearResolutions(functionList);
          const isResolved = new Array(resolvedFunctions.length).fill(false);
          let leftUnresolved = true;
          while (leftUnresolved) {
            leftUnresolved = false;
            let nothingResolved = true;
            for (let i = 0; i < resolvedFunctions.length; ++i) {
              if (isResolved[i]) continue;
              const fn = resolvedFunctions[i];
              if (isReferToSelf(fn)) {
                resolvedFunctions[i] = fn.referToSelf.callback(self2);
                resolvedFunctions[i].referToSelf = fn.referToSelf;
                isResolved[i] = true;
                nothingResolved = false;
              } else if (isReferTo(fn)) {
                const resolvedReferences = collectResolutions(fn.referTo.references, resolvedFunctions, signatureMap);
                if (resolvedReferences) {
                  resolvedFunctions[i] = fn.referTo.callback.apply(this, resolvedReferences);
                  resolvedFunctions[i].referTo = fn.referTo;
                  isResolved[i] = true;
                  nothingResolved = false;
                } else {
                  leftUnresolved = true;
                }
              }
            }
            if (nothingResolved && leftUnresolved) {
              throw new SyntaxError("Circular reference detected in resolving typed.referTo");
            }
          }
          return resolvedFunctions;
        }
        function validateDeprecatedThis(signaturesMap) {
          const deprecatedThisRegex = /\bthis(\(|\.signatures\b)/;
          Object.keys(signaturesMap).forEach(signature => {
            const fn = signaturesMap[signature];
            if (deprecatedThisRegex.test(fn.toString())) {
              throw new SyntaxError("Using `this` to self-reference a function is deprecated since typed-function@3. Use typed.referTo and typed.referToSelf instead.");
            }
          });
        }
        function createTypedFunction(name, rawSignaturesMap) {
          typed.createCount++;
          if (Object.keys(rawSignaturesMap).length === 0) {
            throw new SyntaxError("No signatures provided");
          }
          if (typed.warnAgainstDeprecatedThis) {
            validateDeprecatedThis(rawSignaturesMap);
          }
          const parsedParams = [];
          const originalFunctions = [];
          const signaturesMap = {};
          const preliminarySignatures = [];
          let signature;
          for (signature in rawSignaturesMap) {
            if (!Object.prototype.hasOwnProperty.call(rawSignaturesMap, signature)) {
              continue;
            }
            const params = parseSignature(signature);
            if (!params) continue;
            parsedParams.forEach(function (pp) {
              if (conflicting(pp, params)) {
                throw new TypeError('Conflicting signatures "' + stringifyParams(pp) + '" and "' + stringifyParams(params) + '".');
              }
            });
            parsedParams.push(params);
            const functionIndex = originalFunctions.length;
            originalFunctions.push(rawSignaturesMap[signature]);
            const conversionParams = params.map(expandParam);
            let sp;
            for (sp of splitParams(conversionParams)) {
              const spName = stringifyParams(sp);
              preliminarySignatures.push({
                params: sp,
                name: spName,
                fn: functionIndex
              });
              if (sp.every(p => !p.hasConversion)) {
                signaturesMap[spName] = functionIndex;
              }
            }
          }
          preliminarySignatures.sort(compareSignatures);
          const resolvedFunctions = resolveReferences(originalFunctions, signaturesMap, theTypedFn);
          let s;
          for (s in signaturesMap) {
            if (Object.prototype.hasOwnProperty.call(signaturesMap, s)) {
              signaturesMap[s] = resolvedFunctions[signaturesMap[s]];
            }
          }
          const signatures = [];
          const internalSignatureMap = /* @__PURE__ */new Map();
          for (s of preliminarySignatures) {
            if (!internalSignatureMap.has(s.name)) {
              s.fn = resolvedFunctions[s.fn];
              signatures.push(s);
              internalSignatureMap.set(s.name, s);
            }
          }
          const ok0 = signatures[0] && signatures[0].params.length <= 2 && !hasRestParam(signatures[0].params);
          const ok1 = signatures[1] && signatures[1].params.length <= 2 && !hasRestParam(signatures[1].params);
          const ok2 = signatures[2] && signatures[2].params.length <= 2 && !hasRestParam(signatures[2].params);
          const ok3 = signatures[3] && signatures[3].params.length <= 2 && !hasRestParam(signatures[3].params);
          const ok4 = signatures[4] && signatures[4].params.length <= 2 && !hasRestParam(signatures[4].params);
          const ok5 = signatures[5] && signatures[5].params.length <= 2 && !hasRestParam(signatures[5].params);
          const allOk = ok0 && ok1 && ok2 && ok3 && ok4 && ok5;
          for (let i = 0; i < signatures.length; ++i) {
            signatures[i].test = compileTests(signatures[i].params);
          }
          const test00 = ok0 ? compileTest(signatures[0].params[0]) : notOk;
          const test10 = ok1 ? compileTest(signatures[1].params[0]) : notOk;
          const test20 = ok2 ? compileTest(signatures[2].params[0]) : notOk;
          const test30 = ok3 ? compileTest(signatures[3].params[0]) : notOk;
          const test40 = ok4 ? compileTest(signatures[4].params[0]) : notOk;
          const test50 = ok5 ? compileTest(signatures[5].params[0]) : notOk;
          const test01 = ok0 ? compileTest(signatures[0].params[1]) : notOk;
          const test11 = ok1 ? compileTest(signatures[1].params[1]) : notOk;
          const test21 = ok2 ? compileTest(signatures[2].params[1]) : notOk;
          const test31 = ok3 ? compileTest(signatures[3].params[1]) : notOk;
          const test41 = ok4 ? compileTest(signatures[4].params[1]) : notOk;
          const test51 = ok5 ? compileTest(signatures[5].params[1]) : notOk;
          for (let i = 0; i < signatures.length; ++i) {
            signatures[i].implementation = compileArgsPreprocessing(signatures[i].params, signatures[i].fn);
          }
          const fn0 = ok0 ? signatures[0].implementation : undef;
          const fn1 = ok1 ? signatures[1].implementation : undef;
          const fn2 = ok2 ? signatures[2].implementation : undef;
          const fn3 = ok3 ? signatures[3].implementation : undef;
          const fn4 = ok4 ? signatures[4].implementation : undef;
          const fn5 = ok5 ? signatures[5].implementation : undef;
          const len0 = ok0 ? signatures[0].params.length : -1;
          const len1 = ok1 ? signatures[1].params.length : -1;
          const len2 = ok2 ? signatures[2].params.length : -1;
          const len3 = ok3 ? signatures[3].params.length : -1;
          const len4 = ok4 ? signatures[4].params.length : -1;
          const len5 = ok5 ? signatures[5].params.length : -1;
          const iStart = allOk ? 6 : 0;
          const iEnd = signatures.length;
          const tests = signatures.map(s2 => s2.test);
          const fns = signatures.map(s2 => s2.implementation);
          const generic = function generic2() {
            for (let i = iStart; i < iEnd; i++) {
              if (tests[i](arguments)) {
                return fns[i].apply(this, arguments);
              }
            }
            return typed.onMismatch(name, arguments, signatures);
          };
          function theTypedFn(arg0, arg1) {
            if (arguments.length === len0 && test00(arg0) && test01(arg1)) {
              return fn0.apply(this, arguments);
            }
            if (arguments.length === len1 && test10(arg0) && test11(arg1)) {
              return fn1.apply(this, arguments);
            }
            if (arguments.length === len2 && test20(arg0) && test21(arg1)) {
              return fn2.apply(this, arguments);
            }
            if (arguments.length === len3 && test30(arg0) && test31(arg1)) {
              return fn3.apply(this, arguments);
            }
            if (arguments.length === len4 && test40(arg0) && test41(arg1)) {
              return fn4.apply(this, arguments);
            }
            if (arguments.length === len5 && test50(arg0) && test51(arg1)) {
              return fn5.apply(this, arguments);
            }
            return generic.apply(this, arguments);
          }
          try {
            Object.defineProperty(theTypedFn, "name", {
              value: name
            });
          } catch (err) {}
          theTypedFn.signatures = signaturesMap;
          theTypedFn._typedFunctionData = {
            signatures,
            signatureMap: internalSignatureMap
          };
          return theTypedFn;
        }
        function _onMismatch(name, args, signatures) {
          throw createError(name, args, signatures);
        }
        function initial(arr) {
          return slice(arr, 0, arr.length - 1);
        }
        function last(arr) {
          return arr[arr.length - 1];
        }
        function slice(arr, start, end) {
          return Array.prototype.slice.call(arr, start, end);
        }
        function findInArray(arr, test) {
          for (let i = 0; i < arr.length; i++) {
            if (test(arr[i])) {
              return arr[i];
            }
          }
          return void 0;
        }
        function flatMap(arr, callback) {
          return Array.prototype.concat.apply([], arr.map(callback));
        }
        function referTo() {
          const references = initial(arguments).map(s => stringifyParams(parseSignature(s)));
          const callback = last(arguments);
          if (typeof callback !== "function") {
            throw new TypeError("Callback function expected as last argument");
          }
          return makeReferTo(references, callback);
        }
        function makeReferTo(references, callback) {
          return {
            referTo: {
              references,
              callback
            }
          };
        }
        function referToSelf(callback) {
          if (typeof callback !== "function") {
            throw new TypeError("Callback function expected as first argument");
          }
          return {
            referToSelf: {
              callback
            }
          };
        }
        function isReferTo(objectOrFn) {
          return objectOrFn && typeof objectOrFn.referTo === "object" && Array.isArray(objectOrFn.referTo.references) && typeof objectOrFn.referTo.callback === "function";
        }
        function isReferToSelf(objectOrFn) {
          return objectOrFn && typeof objectOrFn.referToSelf === "object" && typeof objectOrFn.referToSelf.callback === "function";
        }
        function checkName(nameSoFar, newName) {
          if (!nameSoFar) {
            return newName;
          }
          if (newName && newName !== nameSoFar) {
            const err = new Error("Function names do not match (expected: " + nameSoFar + ", actual: " + newName + ")");
            err.data = {
              actual: newName,
              expected: nameSoFar
            };
            throw err;
          }
          return nameSoFar;
        }
        function getObjectName(obj) {
          let name;
          for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key) && (isTypedFunction(obj[key]) || typeof obj[key].signature === "string")) {
              name = checkName(name, obj[key].name);
            }
          }
          return name;
        }
        function mergeSignatures(dest, source) {
          let key;
          for (key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              if (key in dest) {
                if (source[key] !== dest[key]) {
                  const err = new Error('Signature "' + key + '" is defined twice');
                  err.data = {
                    signature: key,
                    sourceFunction: source[key],
                    destFunction: dest[key]
                  };
                  throw err;
                }
              }
              dest[key] = source[key];
            }
          }
        }
        const saveTyped = typed;
        typed = function (maybeName) {
          const named = typeof maybeName === "string";
          const start = named ? 1 : 0;
          let name = named ? maybeName : "";
          const allSignatures = {};
          for (let i = start; i < arguments.length; ++i) {
            const item = arguments[i];
            let theseSignatures = {};
            let thisName;
            if (typeof item === "function") {
              thisName = item.name;
              if (typeof item.signature === "string") {
                theseSignatures[item.signature] = item;
              } else if (isTypedFunction(item)) {
                theseSignatures = item.signatures;
              }
            } else if (isPlainObject(item)) {
              theseSignatures = item;
              if (!named) {
                thisName = getObjectName(item);
              }
            }
            if (Object.keys(theseSignatures).length === 0) {
              const err = new TypeError("Argument to 'typed' at index " + i + " is not a (typed) function, nor an object with signatures as keys and functions as values.");
              err.data = {
                index: i,
                argument: item
              };
              throw err;
            }
            if (!named) {
              name = checkName(name, thisName);
            }
            mergeSignatures(allSignatures, theseSignatures);
          }
          return createTypedFunction(name || "", allSignatures);
        };
        typed.create = create;
        typed.createCount = saveTyped.createCount;
        typed.onMismatch = _onMismatch;
        typed.throwMismatchError = _onMismatch;
        typed.createError = createError;
        typed.clear = clear;
        typed.clearConversions = clearConversions;
        typed.addTypes = addTypes;
        typed._findType = findType;
        typed.referTo = referTo;
        typed.referToSelf = referToSelf;
        typed.convert = convert;
        typed.findSignature = findSignature;
        typed.find = find;
        typed.isTypedFunction = isTypedFunction;
        typed.warnAgainstDeprecatedThis = true;
        typed.addType = function (type, beforeObjectTest) {
          let before = "any";
          if (beforeObjectTest !== false && typeMap.has("Object")) {
            before = "Object";
          }
          typed.addTypes([type], before);
        };
        function _validateConversion(conversion) {
          if (!conversion || typeof conversion.from !== "string" || typeof conversion.to !== "string" || typeof conversion.convert !== "function") {
            throw new TypeError("Object with properties {from: string, to: string, convert: function} expected");
          }
          if (conversion.to === conversion.from) {
            throw new SyntaxError('Illegal to define conversion from "' + conversion.from + '" to itself.');
          }
        }
        typed.addConversion = function (conversion) {
          _validateConversion(conversion);
          const to = findType(conversion.to);
          if (to.conversionsTo.every(function (other) {
            return other.from !== conversion.from;
          })) {
            to.conversionsTo.push({
              from: conversion.from,
              convert: conversion.convert,
              index: nConversions++
            });
          } else {
            throw new Error('There is already a conversion from "' + conversion.from + '" to "' + to.name + '"');
          }
        };
        typed.addConversions = function (conversions) {
          conversions.forEach(typed.addConversion);
        };
        typed.removeConversion = function (conversion) {
          _validateConversion(conversion);
          const to = findType(conversion.to);
          const existingConversion = findInArray(to.conversionsTo, c => c.from === conversion.from);
          if (!existingConversion) {
            throw new Error("Attempt to remove nonexistent conversion from " + conversion.from + " to " + conversion.to);
          }
          if (existingConversion.convert !== conversion.convert) {
            throw new Error("Conversion to remove does not match existing conversion");
          }
          const index = to.conversionsTo.indexOf(existingConversion);
          to.conversionsTo.splice(index, 1);
        };
        typed.resolve = function (tf, argList) {
          if (!isTypedFunction(tf)) {
            throw new TypeError(NOT_TYPED_FUNCTION);
          }
          const sigs = tf._typedFunctionData.signatures;
          for (let i = 0; i < sigs.length; ++i) {
            if (sigs[i].test(argList)) {
              return sigs[i];
            }
          }
          return null;
        };
        return typed;
      }
      var typedFunction = create();
      return typedFunction;
    });
  }
});

// .beyond/uimport/typed-function.4.1.1.js
var typed_function_4_1_1_exports = {};
__export(typed_function_4_1_1_exports, {
  default: () => typed_function_4_1_1_default
});
module.exports = __toCommonJS(typed_function_4_1_1_exports);
__reExport(typed_function_4_1_1_exports, __toESM(require_typed_function()), module.exports);
var import_typed_function = __toESM(require_typed_function());
var typed_function_4_1_1_default = import_typed_function.default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy90eXBlZC1mdW5jdGlvbi9saWIvZXNtL3R5cGVkLWZ1bmN0aW9uLm1qcyIsIi4uLy5iZXlvbmQvdWltcG9ydC90eXBlZC1mdW5jdGlvbi40LjEuMS5qcyJdLCJuYW1lcyI6WyJvayIsIm5vdE9rIiwidW5kZWYiLCJOT1RfVFlQRURfRlVOQ1RJT04iLCJjcmVhdGUiLCJpc1BsYWluT2JqZWN0IiwieCIsImNvbnN0cnVjdG9yIiwiT2JqZWN0IiwiX3R5cGVzIiwibmFtZSIsInRlc3QiLCJBcnJheSIsImlzQXJyYXkiLCJEYXRlIiwiUmVnRXhwIiwiYW55VHlwZSIsImlzQW55IiwidHlwZU1hcCIsInR5cGVMaXN0IiwibkNvbnZlcnNpb25zIiwidHlwZWQiLCJjcmVhdGVDb3VudCIsImZpbmRUeXBlIiwidHlwZU5hbWUiLCJ0eXBlIiwiZ2V0IiwibWVzc2FnZSIsInRvTG93ZXJDYXNlIiwib3RoZXJOYW1lIiwiVHlwZUVycm9yIiwiYWRkVHlwZXMiLCJ0eXBlcyIsImJlZm9yZVNwZWMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJiZWZvcmVJbmRleCIsImluZGV4IiwibmV3VHlwZXMiLCJpIiwiaGFzIiwicHVzaCIsInNldCIsImNvbnZlcnNpb25zVG8iLCJhZmZlY3RlZFR5cGVzIiwic2xpY2UiLCJjb25jYXQiLCJjbGVhciIsIk1hcCIsImNsZWFyQ29udmVyc2lvbnMiLCJmaW5kVHlwZU5hbWVzIiwidmFsdWUiLCJtYXRjaGVzIiwiZmlsdGVyIiwiaXNUeXBlZEZ1bmN0aW9uIiwiZW50aXR5IiwiZmluZFNpZ25hdHVyZSIsImZuIiwic2lnbmF0dXJlIiwib3B0aW9ucyIsImV4YWN0Iiwic3RyaW5nU2lnbmF0dXJlIiwiam9pbiIsInBhcmFtcyIsInBhcnNlU2lnbmF0dXJlIiwiY2Fub25pY2FsU2lnbmF0dXJlIiwic3RyaW5naWZ5UGFyYW1zIiwic2lnbmF0dXJlcyIsIm1hdGNoIiwiX3R5cGVkRnVuY3Rpb25EYXRhIiwic2lnbmF0dXJlTWFwIiwiblBhcmFtcyIsInJlbWFpbmluZ1NpZ25hdHVyZXMiLCJ3YW50IiwiZmlsdGVyZWRTaWduYXR1cmVzIiwicG9zc2liaWxpdHkiLCJoYXZlIiwiZ2V0UGFyYW1BdEluZGV4IiwicmVzdFBhcmFtIiwiaGFzQW55IiwiaGF2ZVR5cGVzIiwicGFyYW1UeXBlU2V0Iiwic29tZSIsInd0eXBlIiwiY2FuZGlkYXRlIiwiZmluZCIsImltcGxlbWVudGF0aW9uIiwiY29udmVydCIsImNvbnZlcnNpb25zIiwiRXJyb3IiLCJmcm9tVHlwZSIsImZyb20iLCJzZXBhcmF0b3IiLCJtYXAiLCJwIiwicGFyc2VQYXJhbSIsInBhcmFtIiwiaW5kZXhPZiIsInR5cGVEZWZzIiwic3BsaXQiLCJzIiwidHJpbSIsInBhcmFtTmFtZSIsImV4YWN0VHlwZXMiLCJ0eXBlSW5kZXgiLCJjb252ZXJzaW9uIiwiY29udmVyc2lvbkluZGV4IiwiaGFzQ29udmVyc2lvbiIsImV4cGFuZFBhcmFtIiwidHlwZU5hbWVzIiwidCIsIm1hdGNoaW5nQ29udmVyc2lvbnMiLCJhdmFpbGFibGVDb252ZXJzaW9ucyIsIm5ld05hbWUiLCJjb252ZXJ0aWJsZVR5cGVzIiwidHlwZVNldCIsIlNldCIsImZvckVhY2giLCJhZGQiLCJyYXdTaWduYXR1cmUiLCJyYXdQYXJhbXMiLCJwYXJzZWRQYXJhbSIsIlN5bnRheEVycm9yIiwiaGFzUmVzdFBhcmFtIiwibGFzdCIsImNvbXBpbGVUZXN0IiwidGVzdDAiLCJ0ZXN0MSIsIm9yIiwidGVzdHMiLCJjb21waWxlVGVzdHMiLCJpbml0aWFsIiwidmFySW5kZXgiLCJsYXN0VGVzdCIsInRlc3RSZXN0UGFyYW0iLCJhcmdzIiwidGVzdEFyZ3MiLCJnZXRUeXBlU2V0QXRJbmRleCIsImlzRXhhY3RUeXBlIiwibWVyZ2VFeHBlY3RlZFBhcmFtcyIsInBhcmFtU2V0IiwiY3JlYXRlRXJyb3IiLCJlcnIiLCJleHBlY3RlZCIsIl9uYW1lIiwibWF0Y2hpbmdTaWduYXR1cmVzIiwibmV4dE1hdGNoaW5nRGVmcyIsImFjdHVhbFR5cGVzIiwiZGF0YSIsImNhdGVnb3J5IiwiYWN0dWFsIiwibGVuZ3RocyIsIkluZmluaXR5IiwiTWF0aCIsIm1pbiIsImFwcGx5IiwibWF4TGVuZ3RoIiwibWF4IiwiZXhwZWN0ZWRMZW5ndGgiLCJhcmdUeXBlcyIsImdldExvd2VzdFR5cGVJbmRleCIsImdldExvd2VzdENvbnZlcnNpb25JbmRleCIsImNvbXBhcmVQYXJhbXMiLCJwYXJhbTEiLCJwYXJhbTIiLCJ0eXBlRGlmZiIsImNvbnZEaWZmIiwiY29tcGFyZVNpZ25hdHVyZXMiLCJzaWduYXR1cmUxIiwic2lnbmF0dXJlMiIsInBhcnMxIiwicGFyczIiLCJsYXN0MSIsImxhc3QyIiwiaGFzUmVzdDEiLCJoYXNSZXN0MiIsImFueTEiLCJjb252MSIsInBhciIsImFueTIiLCJjb252MiIsImxlbmd0aENyaXRlcmlvbiIsImNvbXBhcmlzb25zIiwidGMiLCJ0aGlzQ29tcGFyaXNvbiIsImMiLCJzb3J0IiwidDEiLCJ0MiIsImtub3duVHlwZXMiLCJuZXdNYXRjaCIsImNvbXBpbGVBcmdzUHJlcHJvY2Vzc2luZyIsImZuQ29udmVydCIsImNvbXBpbGVkQ29udmVyc2lvbnMiLCJjb21waWxlQXJnQ29udmVyc2lvbiIsImNvbnZlcnRBcmdzIiwiZm5QcmVwcm9jZXNzIiwib2Zmc2V0IiwicHJlcHJvY2Vzc1Jlc3RQYXJhbXMiLCJjb252ZXJzaW9uMCIsImNvbnZlcnNpb24xIiwiY29udmVydEFyZyIsImFyZyIsInNwbGl0UGFyYW1zIiwiX3NwbGl0UGFyYW1zIiwicGFyYW1zMiIsInBhcmFtc1NvRmFyIiwicmVzdWx0aW5nUGFyYW1zIiwiZmxhdE1hcCIsIm5leHRQYXJhbSIsImNvbmZsaWN0aW5nIiwicGFyYW1zMSIsImlpIiwidHlwZVNldDEiLCJ0eXBlU2V0MiIsIm92ZXJsYXAiLCJsZW4xIiwibGVuMiIsInJlc3RQYXJhbTEiLCJyZXN0UGFyYW0yIiwiY2xlYXJSZXNvbHV0aW9ucyIsImZ1bmN0aW9uTGlzdCIsImlzUmVmZXJUb1NlbGYiLCJyZWZlclRvU2VsZiIsImNhbGxiYWNrIiwiaXNSZWZlclRvIiwibWFrZVJlZmVyVG8iLCJyZWZlclRvIiwicmVmZXJlbmNlcyIsImNvbGxlY3RSZXNvbHV0aW9ucyIsInJlc29sdmVkUmVmZXJlbmNlcyIsInJlZmVyZW5jZSIsInJlc29sdXRpb24iLCJyZXNvbHZlUmVmZXJlbmNlcyIsInNlbGYyIiwicmVzb2x2ZWRGdW5jdGlvbnMiLCJpc1Jlc29sdmVkIiwiZmlsbCIsImxlZnRVbnJlc29sdmVkIiwibm90aGluZ1Jlc29sdmVkIiwidmFsaWRhdGVEZXByZWNhdGVkVGhpcyIsInNpZ25hdHVyZXNNYXAiLCJkZXByZWNhdGVkVGhpc1JlZ2V4Iiwia2V5cyIsInRvU3RyaW5nIiwiY3JlYXRlVHlwZWRGdW5jdGlvbiIsInJhd1NpZ25hdHVyZXNNYXAiLCJ3YXJuQWdhaW5zdERlcHJlY2F0ZWRUaGlzIiwicGFyc2VkUGFyYW1zIiwib3JpZ2luYWxGdW5jdGlvbnMiLCJwcmVsaW1pbmFyeVNpZ25hdHVyZXMiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJwcCIsImZ1bmN0aW9uSW5kZXgiLCJjb252ZXJzaW9uUGFyYW1zIiwic3AiLCJzcE5hbWUiLCJldmVyeSIsInRoZVR5cGVkRm4iLCJpbnRlcm5hbFNpZ25hdHVyZU1hcCIsIm9rMCIsIm9rMSIsIm9rMiIsIm9rMyIsIm9rNCIsIm9rNSIsImFsbE9rIiwidGVzdDAwIiwidGVzdDEwIiwidGVzdDIwIiwidGVzdDMwIiwidGVzdDQwIiwidGVzdDUwIiwidGVzdDAxIiwidGVzdDExIiwidGVzdDIxIiwidGVzdDMxIiwidGVzdDQxIiwidGVzdDUxIiwiZm4wIiwiZm4xIiwiZm4yIiwiZm4zIiwiZm40IiwiZm41IiwibGVuMCIsImxlbjMiLCJsZW40IiwibGVuNSIsImlTdGFydCIsImlFbmQiLCJzMiIsImZucyIsImdlbmVyaWMiLCJnZW5lcmljMiIsIm9uTWlzbWF0Y2giLCJhcmcwIiwiYXJnMSIsImRlZmluZVByb3BlcnR5IiwiX29uTWlzbWF0Y2giLCJhcnIiLCJzdGFydCIsImVuZCIsImZpbmRJbkFycmF5Iiwib2JqZWN0T3JGbiIsImNoZWNrTmFtZSIsIm5hbWVTb0ZhciIsImdldE9iamVjdE5hbWUiLCJvYmoiLCJrZXkiLCJtZXJnZVNpZ25hdHVyZXMiLCJkZXN0Iiwic291cmNlIiwic291cmNlRnVuY3Rpb24iLCJkZXN0RnVuY3Rpb24iLCJzYXZlVHlwZWQiLCJtYXliZU5hbWUiLCJuYW1lZCIsImFsbFNpZ25hdHVyZXMiLCJpdGVtIiwidGhlc2VTaWduYXR1cmVzIiwidGhpc05hbWUiLCJhcmd1bWVudCIsInRocm93TWlzbWF0Y2hFcnJvciIsIl9maW5kVHlwZSIsImFkZFR5cGUiLCJiZWZvcmVPYmplY3RUZXN0IiwiYmVmb3JlIiwiX3ZhbGlkYXRlQ29udmVyc2lvbiIsInRvIiwiYWRkQ29udmVyc2lvbiIsIm90aGVyIiwiYWRkQ29udmVyc2lvbnMiLCJyZW1vdmVDb252ZXJzaW9uIiwiZXhpc3RpbmdDb252ZXJzaW9uIiwic3BsaWNlIiwicmVzb2x2ZSIsInRmIiwiYXJnTGlzdCIsInNpZ3MiLCJ0eXBlZEZ1bmN0aW9uIiwidHlwZWRfZnVuY3Rpb25fNF8xXzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiZGVmYXVsdCIsInR5cGVkX2Z1bmN0aW9uXzRfMV8xX2RlZmF1bHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiX19yZUV4cG9ydCIsIl9fdG9FU00iLCJyZXF1aXJlX3R5cGVkX2Z1bmN0aW9uIiwiaW1wb3J0X3R5cGVkX2Z1bmN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFBQSxTQUFTQSxHQUFBLEVBQUs7UUFDWixPQUFPO01BQ1Q7TUFFQSxTQUFTQyxNQUFBLEVBQVE7UUFDZixPQUFPO01BQ1Q7TUFFQSxTQUFTQyxNQUFBLEVBQVE7UUFDZixPQUFPO01BQ1Q7TUFFQSxNQUFNQyxr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