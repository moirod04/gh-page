System.register(["@beyond-js/kernel@0.1.9/bundle", "mathjs@12.4.1", "@beyond-js/reactive@1.1.14/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Parser, Token, FormulaManager, __beyond_pkg, hmr;
  _export({
    Parser: void 0,
    Token: void 0,
    FormulaManager: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_mathjs2) {
      dependency_1 = _mathjs2;
    }, function (_beyondJsReactive1114Model) {
      dependency_2 = _beyondJsReactive1114Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.3"], ["@beyond-js/reactive", "1.1.9"], ["mathjs", "12.4.1"], ["pragmate-ui", "0.1.2"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.42"], ["@types/react-dom", "18.2.17"], ["typedoc", "0.25.12"], ["@bgroup/wise-form", "0.0.4"], ["sgs-workflow", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@bgroup/wise-form@0.0.4/formulas"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['mathjs', dependency_1], ['@beyond-js/reactive/model', dependency_2]]);
      ims = new Map();
      /*****************************************
      INTERNAL MODULE: ./helpers/condition-types
      *****************************************/
      ims.set('./helpers/condition-types', {
        hash: 791193937,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.conditionsTypes = void 0;
          const conditionsTypes = exports.conditionsTypes = {
            every: "validateAll",
            some: "validateAny"
          };
        }
      });

      /*************************************
      INTERNAL MODULE: ./helpers/evaluations
      *************************************/

      ims.set('./helpers/evaluations', {
        hash: 134120441,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EvaluationsManager = void 0;
          class EvaluationsManager {
            static evaluations = {
              equal: (value, comparisonValue) => value == comparisonValue,
              lower: (value, comparisonValue) => Number(value) < Number(comparisonValue),
              upper: (value, comparisonValue) => Number(value) > Number(comparisonValue),
              between: (value, [min, max]) => {
                const numValue = Number(value);
                return numValue >= Number(min) && numValue <= Number(max);
              },
              different: (value, comparisonValue) => value != comparisonValue,
              hasValue: value => ![undefined, null, '', false].includes(value),
              empty: value => [undefined, null, ''].includes(value),
              lessOrEqual: (value, comparisonValue) => Number(value) <= Number(comparisonValue),
              greaterOrEqual: (value, comparisonValue) => Number(value) >= Number(comparisonValue)
            };
            static validate(identifier, value, comparisonValue) {
              if (!this.evaluations[identifier]) {
                throw new Error(`Evaluation identifier "${identifier}" not recognized.`);
              }
              const result = this.evaluations[identifier](value, comparisonValue);
              return result;
            }
            /**
            * Evalúa un arreglo de valores para ver si alguno cumple con la condición especificada.
            * Retorna true si al menos uno de los valores cumple con la condición.
            */
            static validateAny(identifier, values, comparisonValue) {
              if (!this.evaluations[identifier]) {
                throw new Error(`Evaluation identifier "${identifier}" not recognized.`);
              }
              return values.some(value => this.evaluations[identifier](value, comparisonValue));
            }
            /**
             * Evalúa un arreglo de valores para ver si todos cumplen con la condición especificada.
             * Retorna true solo si todos los valores cumplen con la condición.
             */
            static validateAll(identifier, values, comparisonValue) {
              if (!this.evaluations[identifier]) {
                throw new Error(`Evaluation identifier "${identifier}" not recognized.`);
              }
              return values.every(value => this.evaluations[identifier](value, comparisonValue));
            }
          }
          exports.EvaluationsManager = EvaluationsManager;
        }
      });

      /*********************************
      INTERNAL MODULE: ./helpers/formula
      *********************************/

      ims.set('./helpers/formula', {
        hash: 3588803966,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Formula = void 0;
          var _lexer = require("./lexer");
          var _parser = require("./parser");
          class Formula {
            #lexer = new _lexer.Lexer();
            #parsers = new Map();
            #tokens;
            constructor(data) {
              if (!data.formula) throw new Error('To get a parser you must provide a formula');
              // if (this.#parsers.has(data.formula)) return this.#parsers.get(data.formula);
              const tokens = this.#lexer.tokenize(data.formula);
              const parser = new _parser.Parser(tokens);
              const result = {
                tokens,
                parser,
                ...data
              };
              this.#parsers.set(data.formula, result);
              return result;
            }
            initialize() {}
          }
          exports.Formula = Formula;
        }
      });

      /*******************************
      INTERNAL MODULE: ./helpers/lexer
      *******************************/

      ims.set('./helpers/lexer', {
        hash: 2981078849,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Lexer = void 0;
          var _token = require("./token");
          class Lexer {
            tokenRegex = /\s*(\(|\)|\+|\-|\*|\/|\d+\.\d+|\d+|[A-Za-z_][A-Za-z0-9_]*)\s*/g;
            flattenTokens;
            constructor(flattenTokens = false) {
              this.flattenTokens = flattenTokens;
            }
            tokenize(formula) {
              this.tokenRegex.lastIndex = 0;
              const tokens = [];
              const stack = [tokens]; // Stack to manage nested token lists
              let match;
              while ((match = this.tokenRegex.exec(formula)) !== null) {
                const tokenValue = match[1];
                let tokenType = this.determineTokenType(tokenValue);
                if (tokenType === 'parenthesis') {
                  if (tokenValue === '(') {
                    if (!this.flattenTokens) {
                      // Start a new scope for tokens
                      stack.push([]);
                    }
                  } else {
                    if (!this.flattenTokens) {
                      // End the current scope
                      const subTokens = stack.pop();
                      if (!subTokens) {
                        throw new Error('Mismatched parentheses in the formula');
                      }
                      // Create a parenthesis token with these subtokens as children
                      const parentTokens = stack[stack.length - 1];
                      parentTokens.push(new _token.Token('parenthesis', '()', null, subTokens));
                    }
                  }
                } else {
                  // Add this token to the current scope
                  stack[stack.length - 1].push(new _token.Token(tokenType, tokenValue));
                }
              }
              if (stack.length !== 1) {
                throw new Error('Mismatched parentheses in the formula');
              }
              // If flattenTokens is true, flatten all tokens into a single array
              if (this.flattenTokens) {
                return this.flatten(tokens);
              }
              return tokens; // Return the outermost list of tokens
            }
            determineTokenType(value) {
              const operators = {
                '+': 'operator',
                '-': 'operator',
                '*': 'operator',
                '/': 'operator',
                '(': 'parenthesis',
                ')': 'parenthesis'
              };
              return operators[value] || (!isNaN(parseFloat(value)) ? 'number' : 'variable');
            }
            flatten(tokens) {
              const flatList = [];
              for (const token of tokens) {
                if (token.type === 'parenthesis' && token.children) {
                  flatList.push(...this.flatten(token.children)); // Flatten nested tokens
                } else {
                  flatList.push(token);
                }
              }
              return flatList;
            }
          }
          exports.Lexer = Lexer;
        }
      });

      /********************************
      INTERNAL MODULE: ./helpers/parser
      ********************************/

      ims.set('./helpers/parser', {
        hash: 2782031183,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Parser = void 0;
          /*bundle */ /**
                       * The Parser class is responsible for parsing a sequence of tokens into an abstract syntax tree (AST).
                       * The tokens should be an array of objects with `type` and `value` properties.
                       *
                       * The Parser handles mathematical expressions and ensures that the tokens are in the correct order
                       * for later evaluation. It understands variables, numbers, and parentheses, and is extendable to support
                       * additional operations and precedence rules.
                       *
                       * Example usage:
                       * ```
                       * const tokens: Token[] = [...];
                       * const parser = new Parser(tokens);
                       * const ast = parser.parse();
                       * ```
                       */
          class Parser {
            tokens;
            currentTokenIndex;
            constructor(tokens) {
              this.tokens = tokens;
              this.currentTokenIndex = 0;
            }
            parse() {
              return this.parseExpression();
            }
            parseExpression() {
              let token = this.tokens[this.currentTokenIndex];
              if (token && token.type === 'variable') {
                this.currentTokenIndex++;
                return token;
              } else if (token && token.type === 'number') {
                this.currentTokenIndex++;
                return token;
              } else if (token && token.value === '(') {
                this.currentTokenIndex++; // Skip '('
                let expr = this.parseExpression(); // Parse subexpression
                if (this.tokens[this.currentTokenIndex] && this.tokens[this.currentTokenIndex].value === ')') {
                  this.currentTokenIndex++; // Skip ')'
                  return expr;
                }
              }
              // TODO: Add cases for parsing different operations (like addition, multiplication etc.)
              // TODO: Implement precedence handling for different operations
              // This function should be extended to fully construct the AST.
              return undefined;
            }
          }
          exports.Parser = Parser;
        }
      });

      /*******************************
      INTERNAL MODULE: ./helpers/token
      *******************************/

      ims.set('./helpers/token', {
        hash: 2327651510,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Token = void 0;
          /*bundle*/ /**
                      * The Token class now includes a stringValue property for storing the original string value
                      * of the expression inside the parentheses and an optional parent property for storing the parent token.
                      */
          class Token {
            type;
            value;
            stringValue;
            children;
            parent;
            constructor(type, value, stringValue, children, parent) {
              this.type = type;
              this.value = value;
              this.stringValue = stringValue;
              this.children = children;
              this.parent = parent;
            }
          }
          exports.Token = Token;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1787669666,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormulaManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _lexer = require("./helpers/lexer");
          var _parser = require("./helpers/parser");
          var _basic = require("./variants/basic");
          var _conditional = require("./variants/conditional");
          var _perValue = require("./variants/per-value");
          var _comparison = require("./variants/comparison");
          var _arrayFormula = require("./variants/array-formula");
          var _iterativeArray = require("./variants/iterative-array");
          /*bundle */
          class FormulaManager extends _model.ReactiveModel {
            #lexer = new _lexer.Lexer(true);
            #tokens;
            get tokens() {
              return this.#tokens;
            }
            #parser;
            get parser() {
              return this.#parser;
            }
            #specs;
            get formula() {
              return this.#specs.formula;
            }
            get name() {
              return this.#specs.name;
            }
            get conditional() {
              return typeof this.#specs.formula === 'object';
            }
            get conditions() {
              if (typeof this.#specs.formula === 'string') return;
              const formula = this.#specs.formula;
              return formula.conditions;
            }
            /**
             *  Represents the fields defined in the plugin settings
             */
            get fields() {
              const formula = this.formula;
              return typeof formula?.fields === 'string' ? [formula?.fields] : formula?.fields;
            }
            #parsedBase;
            get parsedBase() {
              return this.#parsedBase;
            }
            #type;
            get type() {
              return this.#type;
            }
            get base() {
              const formula = this.#specs.formula;
              return formula.base;
            }
            #variables = [];
            get variables() {
              return this.#variables;
            }
            get value() {
              return this.#instance.value;
            }
            #parsers = new Map();
            #plugin;
            #instance;
            constructor(plugin, specs) {
              super();
              this.#plugin = plugin;
              this.#specs = specs;
              this.#initialize();
            }
            #initialize() {
              this.#type = this.getType();
              const objects = {
                basic: _basic.FormulaBasic,
                'base-conditional': _conditional.FormulaConditional,
                'value-conditions': _perValue.FormulaPerValue,
                comparison: _comparison.FormulaComparison,
                'array': _arrayFormula.FormulaArray,
                'iterative-array': _iterativeArray.IterativeArrayFormula
              };
              if (!objects[this.type]) {
                throw new Error(`this type ${this.type} not found`);
              }
              this.#instance = new objects[this.type](this, this.#plugin, this.#specs);
            }
            initialize() {
              this.#instance.initialize();
            }
            /**
             * Returns the models that are part of the formula
             * The models could be fields or formulas
             * @param variables
             * @returns
             */
            getModels(variables) {
              return variables.map(name => {
                if (this.#plugin.formulas.has(name)) return this.#plugin.formulas.get(name);
                return this.#plugin.form.getField(name);
              });
            }
            getType() {
              const {
                type,
                formula
              } = this.#specs;
              if (type) return type;
              if (typeof formula === 'string') return 'basic';
              if (formula.conditions) return formula.base ? 'base-conditional' : 'value-conditions';
            }
            processConditional() {
              const formula = this.formula;
              if (this.base) {
                this.#parsedBase = this.getParser({
                  formula: this.base
                });
              }
            }
            calculate() {
              if (!this.#instance || this.#instance.calculate) {
                console.warn('No instance or calculate method found', this.#instance);
              }
              this.#instance.calculate();
              this.trigger('change');
              return;
            }
            /**
             * Returns the parser for the formula, if the parser is already created it will return the memoized parser
             *
             *
             * The formula is tokenized and parsed to create a parser instance
             * the object returned contains the tokens, the parser and the formula
             * @param data Receives the formula to be parsed
             * @returns
             */
            getParser(data) {
              if (!data.formula) throw new Error('To get a parser you must provide a formula');
              if (this.#parsers.has(data.formula)) return this.#parsers.get(data.formula);
              const tokens = this.#lexer.tokenize(data.formula);
              const parser = new _parser.Parser(tokens);
              const result = {
                tokens,
                parser,
                ...data
              };
              this.#parsers.set(data.formula, result);
              return result;
            }
            async getParams(variables) {
              const params = {};
              const {
                form,
                formulas
              } = this.#plugin;
              const build = async value => {
                /**
                 * the value could be a formula or a field
                 */
                const element = formulas.has(value) ? formulas.get(value) : form.getField(value);
                if (!element) throw new Error(`Field ${value} used in formula ${this.name}, not found in form ${form.name}, `);
                await element.isReady;
                params[value] = [undefined, '', null, NaN].includes(element.value) ? 0 : element.value;
              };
              variables.forEach(build);
              return params;
            }
            /**
             * A form can have multiple formulas, this method will create an instance of the formula manager
             * and memoize it to avoid creating multiple instances of the same formula.
             * @param specs
             * @returns
             */
            static async create(plugin, specs) {
              const instance = new FormulaManager(plugin, specs);
              // FormulaManager.instances.set(plugin.form.name, instance);
              return instance;
            }
          }
          exports.FormulaManager = FormulaManager;
        }
      });

      /********************************
      INTERNAL MODULE: ./types/formulas
      ********************************/

      ims.set('./types/formulas', {
        hash: 1732765102,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./types/index
      *****************************/

      ims.set('./types/index', {
        hash: 383361203,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************************
      INTERNAL MODULE: ./variants/array-formula
      ****************************************/

      ims.set('./variants/array-formula', {
        hash: 3628500898,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormulaArray = void 0;
          var _evaluations = require("../helpers/evaluations");
          var _mathjs = require("mathjs");
          class FormulaArray {
            #plugin;
            #specs;
            get formula() {
              return this.#specs.formula;
            }
            get base() {
              const formula = this.#specs.formula;
              return formula.base;
            }
            #value = [];
            get value() {
              return this.#value;
            }
            get name() {
              return this.#specs.name;
            }
            /**
             *  Represents the fields defined in the plugin settings
             */
            get fields() {
              const formula = this.formula;
              return typeof formula?.fields === 'string' ? [formula?.fields] : formula?.fields;
            }
            get conditions() {
              if (typeof this.#specs.formula === 'string') return;
              const formula = this.#specs.formula;
              return formula.conditions;
            }
            #emptyValue;
            #variables = [];
            get variables() {
              return this.#variables;
            }
            #round;
            #ceil;
            #parent;
            #formulaField;
            constructor(parent, plugin, specs) {
              this.#parent = parent;
              this.#plugin = plugin;
              this.#specs = specs;
              this.#round = specs.round;
              this.#ceil = specs.ceil;
              this.#specs.emptyValue = specs.emptyValue;
              this.#formulaField = this.#plugin.form.getField(this.name);
            }
            initialize() {
              this.#formulaField.on('change', this.calculate.bind(this));
            }
            evaluate = data => {
              const values = {};
              for (const formula of data.formulas) {
                let result;
                let formulaEvaluate = formula.formula;
                try {
                  if (formula.conditions) {
                    for (const condition of formula.conditions) {
                      const comparisonValue = {
                        ...data.values,
                        ...values
                      }[condition.property];
                      let conditionMet = _evaluations.EvaluationsManager.validate(condition.condition, comparisonValue, condition.value);
                      if (conditionMet) {
                        formulaEvaluate = condition.formula;
                        break;
                      }
                    }
                  }
                  const attrs = this.sanitizeData({
                    ...data.values,
                    ...values
                  });
                  result = (0, _mathjs.parse)(formulaEvaluate).evaluate(attrs);
                } catch (error) {
                  console.log("Error evaluating formula:", formula.formula, "Error:", error);
                }
                const isInvalidResult = [-Infinity, Infinity, undefined, null, NaN].includes(result);
                if (formula.round && !isInvalidResult) result = Math.round(result);
                if (formula.ceil && !isInvalidResult) result = Math.ceil(result);
                result = isInvalidResult ? formula.emptyValue : Number(result.toFixed(2));
                values[formula.propertyToSet] = result;
              }
              return values;
            };
            async calculate() {
              const formulaField = this.#plugin.form.getField(this.name);
              if (!formulaField) return;
              const value = formulaField[this.#specs.propertyValue || 'entries'];
              if (!value || !Array.isArray(value) || !value.length) {
                formulaField.set({
                  [this.#specs.propertyValue]: []
                });
                return;
              }
              ;
              const newValue = value.map(item => {
                let results = this.evaluate({
                  formulas: this.#specs.formulas,
                  values: item
                });
                return {
                  ...item,
                  ...results
                };
              });
              this.#value = newValue;
              formulaField.set({
                [this.#specs.propertyValue]: newValue
              });
            }
            sanitizeData(data) {
              if (Array.isArray(data)) {
                return data.map(item => this.sanitizeData(item));
              } else if (typeof data === 'object' && data !== null) {
                const sanitizedData = {};
                for (const key in data) {
                  if (data.hasOwnProperty(key)) {
                    sanitizedData[key] = this.sanitizeData(data[key]);
                  }
                }
                return sanitizedData;
              } else {
                return this.sanitizeValue(data);
              }
            }
            sanitizeValue(value, defaultValue = 0) {
              return value === null || value === undefined || isNaN(value) ? defaultValue : Number(value);
            }
          }
          exports.FormulaArray = FormulaArray;
        }
      });

      /*******************************
      INTERNAL MODULE: ./variants/base
      *******************************/

      ims.set('./variants/base', {
        hash: 175017329,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WiseFormFormulaPlugin = void 0;
          class WiseFormFormulaPlugin {}
          exports.WiseFormFormulaPlugin = WiseFormFormulaPlugin;
        }
      });

      /********************************
      INTERNAL MODULE: ./variants/basic
      ********************************/

      ims.set('./variants/basic', {
        hash: 1916445127,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormulaBasic = void 0;
          var _mathjs = require("mathjs");
          class FormulaBasic {
            #plugin;
            #specs;
            #tokens;
            get formula() {
              return this.#specs.formula;
            }
            get base() {
              const formula = this.#specs.formula;
              return formula.base;
            }
            #value;
            get value() {
              return this.#value;
            }
            get name() {
              return this.#specs.name;
            }
            /**
             *  Represents the fields defined in the plugin settings
             */
            get fields() {
              const formula = this.formula;
              return typeof formula?.fields === 'string' ? [formula?.fields] : formula?.fields;
            }
            get conditions() {
              if (typeof this.#specs.formula === 'string') return;
              const formula = this.#specs.formula;
              return formula.conditions;
            }
            #emptyValue;
            #variables = [];
            get variables() {
              return this.#variables;
            }
            #round;
            #ceil;
            #parent;
            #isNotListenToChanges = false;
            constructor(parent, plugin, specs) {
              this.#parent = parent;
              this.#plugin = plugin;
              this.#specs = specs;
              this.#round = specs.round;
              this.#ceil = specs.ceil;
              this.#emptyValue = specs.emptyValue;
              this.#isNotListenToChanges = specs.isNotListenToChanges;
            }
            initialize() {
              const {
                tokens
              } = this.#parent.getParser(this.#specs);
              this.#tokens = tokens;
              const variables = this.#tokens.filter(token => token.type === 'variable').map(item => item.value);
              this.#variables = variables;
              const models = this.#parent.getModels(variables);
              if (!this.#isNotListenToChanges) models.forEach(model => {
                if ([undefined].includes(model)) {
                  return;
                }
                model.on('change', this.calculate.bind(this));
              });
            }
            async calculate() {
              const variables = this.#variables;
              const formulaField = this.#plugin.form.getField(this.name);
              let params = await this.#parent.getParams(variables);
              const models = this.#parent.getModels(variables);
              const empty = models.every(model => [null, undefined, ''].includes(model.value));
              if (empty) {
                // If all models are empty, set the input to empty if exists.
                if (formulaField) formulaField.set({
                  value: this.#emptyValue || ''
                });
                this.#value = undefined;
                return;
              }
              try {
                let result = models.length === 1 && !['+', '-', '*', '/'].some(item => this.formula.toString().includes(item)) ? models[0].value : (0, _mathjs.parse)(this.formula).evaluate(params);
                const isInvalidResult = [-Infinity, Infinity, undefined, null, NaN].includes(result);
                if (this.#round && !isInvalidResult) result = Math.round(result);
                if (this.#ceil && !isInvalidResult) result = Math.ceil(result);
                this.#value = isInvalidResult ? this.#emptyValue : Number(result.toFixed(2));
                if (formulaField) formulaField.set({
                  value: this.#value
                });
                this.#parent.trigger('change');
              } catch (e) {
                console.log('formula', this.name, this.formula, params);
                console.trace(e);
                throw new Error(`Error calculating the formula: ${e.message} ${this.name}`);
              }
            }
          }
          exports.FormulaBasic = FormulaBasic;
        }
      });

      /*************************************
      INTERNAL MODULE: ./variants/comparison
      *************************************/

      ims.set('./variants/comparison', {
        hash: 4121654759,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormulaComparison = void 0;
          var _evaluations = require("../helpers/evaluations");
          var _mathjs = require("mathjs");
          class FormulaComparison {
            #plugin;
            #specs;
            #emptyValue;
            #tokens;
            get formula() {
              return this.#specs.formula;
            }
            get base() {
              const formula = this.#specs.formula;
              return formula.base;
            }
            #value;
            get value() {
              return this.#value;
            }
            get name() {
              return this.#specs.name;
            }
            /**
             *  Represents the fields defined in the plugin settings
             */
            get fields() {
              const formula = this.formula;
              return typeof formula?.fields === "string" ? [formula?.fields] : formula?.fields;
            }
            get conditions() {
              if (typeof this.#specs.formula === "string") return;
              const formula = this.#specs.formula;
              return formula.conditions;
            }
            #variables = [];
            get variables() {
              return this.#variables;
            }
            #observers;
            get observers() {
              return this.#observers;
            }
            #isNotListenToChanges = false;
            #parent;
            constructor(parent, plugin, specs) {
              this.#parent = parent;
              this.#plugin = plugin;
              this.#specs = specs;
              this.#isNotListenToChanges = specs.isNotListenToChanges;
              this.#observers = specs.formula.observers;
            }
            initialize() {
              if (!Array.isArray(this.#specs.fields)) {
                throw new Error("The fields property must be an array");
              }
              if (!this.#isNotListenToChanges && this.#observers && Array.isArray(this.#observers) && !!this.#observers.length) {
                const fields = this.#parent.getModels(this.#observers);
                fields.forEach(field => {
                  if (!field) return;
                  field.on('change', this.calculate.bind(this));
                });
              }
              const models = this.#parent.getModels(this.#specs.fields);
              if (!this.#isNotListenToChanges) models.forEach(model => model.on("change", this.calculate.bind(this)));
            }
            start() {}
            evaluate() {
              const formula = this.#specs.formula;
              if (typeof formula === "string" || !formula.conditions) {
                console.error("Invalid formula configuration");
                return null;
              }
              const models = this.#parent.getModels(this.#specs.fields);
              let fieldValues = models.map(fieldModel => {
                if (!fieldModel) return;
                return {
                  name: fieldModel.name,
                  value: fieldModel ? fieldModel.value : null
                };
              });
              // Utilizar reduce para comparar cada par de valores consecutivos y determinar cuál cumple la condición
              const resultField = fieldValues.reduce((prevField, currentField) => {
                if (!prevField) return currentField;
                // Si el campo previo cumple la condición con respecto al actual, se mantiene como el campo elegido
                if (_evaluations.EvaluationsManager.validate(formula.condition, prevField.value, currentField.value)) {
                  return prevField;
                }
                // De lo contrario, el campo actual se convierte en el nuevo campo elegido
                return currentField;
              }, null);
              if (resultField) {
                // Ajustar según la lógica específica deseada, como devolver una fórmula particular basada en el resultado
                return resultField;
              } else {
                // Manejar el caso de que ninguno cumpla la condición
                return null;
              }
            }
            async calculate() {
              let applied = this.evaluate();
              if (!applied || !applied?.value) {
                // any formula apply, so we need to reset the value
                this.#value = 0;
                return;
              }
              /**
               * Get the formula analyzer
               */
              const specsFormula = this.#specs.formula;
              const formulaString = specsFormula.conditions[applied.name];
              const formula = this.#parent.getParser({
                formula: formulaString
              });
              const variables = formula.tokens.filter(token => token.type === "variable").map(item => item.value);
              const params = await this.#parent.getParams(variables);
              try {
                const keys = Object.keys(params);
                const result = keys.length === 1 ? params[keys[0]] : (0, _mathjs.parse)(this.formula).evaluate(params);
                this.#value = [-Infinity, Infinity, undefined, null, NaN].includes(result) ? this.#emptyValue : Number(result.toFixed(2));
                this.#parent.trigger("change");
                return this.#value;
              } catch (e) {
                console.log("formula", this.name, this.formula, params);
                throw new Error("Error calculating the formula");
              }
            }
            calculateUpper(models) {
              let glue;
              models.forEach(item => {
                if (Number(item.value) > Number(glue?.value ?? 0)) glue = item;
              });
              return glue;
            }
          }
          exports.FormulaComparison = FormulaComparison;
        }
      });

      /**************************************
      INTERNAL MODULE: ./variants/conditional
      **************************************/

      ims.set('./variants/conditional', {
        hash: 1516240794,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormulaConditional = void 0;
          var _conditionTypes = require("../helpers/condition-types");
          var _evaluations = require("../helpers/evaluations");
          var _mathjs = require("mathjs");
          class FormulaConditional {
            #plugin;
            #specs;
            #emptyValue;
            get formula() {
              return this.#specs.formula;
            }
            get base() {
              const formula = this.#specs.formula;
              return formula.base;
            }
            #value;
            get value() {
              return this.#value;
            }
            get name() {
              return this.#specs.name;
            }
            /**
             *  Represents the fields defined in the plugin settings
             */
            get fields() {
              const formula = this.formula;
              return typeof formula?.fields === 'string' ? [formula?.fields] : formula?.fields;
            }
            get conditions() {
              if (typeof this.#specs.formula === 'string') return;
              const formula = this.#specs.formula;
              return formula.conditions;
            }
            /**
             * FormField type
             */
            #fields;
            #parent;
            #ceil;
            #round;
            #isNotListenToChanges = false;
            constructor(parent, plugin, specs) {
              this.#parent = parent;
              this.#plugin = plugin;
              this.#specs = specs;
              this.#round = specs.round;
              this.#ceil = specs.ceil;
              this.#emptyValue = specs.emptyValue;
              if (specs.isNotListenToChanges) this.#isNotListenToChanges = specs.isNotListenToChanges;
            }
            initialize() {
              try {
                const {
                  form
                } = this.#plugin;
                if (!this.fields) {
                  throw new Error(`Fields not found in formula ${this.name}`);
                }
                const fields = this.fields.map(name => {
                  const formula = this.#plugin.formulas.get(name);
                  if (formula) return formula;
                  const field = form.getField(name);
                  return field;
                });
                this.#fields = fields;
                if (!this.#isNotListenToChanges) fields.forEach(field => {
                  if (!field) {
                    throw new Error(`Field ${this.name} not found in form ${form.name}`);
                  }
                  field.on('change', this.calculate.bind(this));
                });
              } catch (e) {}
            }
            evaluate() {
              const formula = this.#specs.formula;
              let evaluatedFormula = {
                formula: formula.base
              }; // Use the base formula by default
              if (formula.conditions) {
                for (const condition of formula.conditions) {
                  let conditionMet = false;
                  if (condition.conditions) {
                    // If there are nested conditions, all must be met
                    conditionMet = condition.conditions.every(subCondition => {
                      const fieldValues = subCondition.fields.map(fieldName => {
                        const field = this.#fields.find(f => f.name === fieldName);
                        return field ? field.value : this.#emptyValue;
                      });
                      return _evaluations.EvaluationsManager.validateAll(subCondition.condition, fieldValues, subCondition.value);
                    });
                  } else {
                    const fieldValues = condition.fields.map(fieldName => {
                      const field = this.#fields.find(f => f.name === fieldName);
                      return field ? field.value : this.#emptyValue;
                    });
                    const conditionType = !!condition.type && _conditionTypes.conditionsTypes[condition.type] ? _conditionTypes.conditionsTypes[condition.type] : _conditionTypes.conditionsTypes.some;
                    // Check if any of the specified fields meet the condition
                    conditionMet = _evaluations.EvaluationsManager[conditionType](condition.condition, fieldValues, condition.value);
                  }
                  if (conditionMet) {
                    evaluatedFormula.formula = condition.formula;
                    evaluatedFormula.fi = condition;
                    break;
                  }
                }
              }
              return evaluatedFormula;
            }
            async calculate() {
              /**
               * the formula is taken from the evaluate method since the conditions are evaluated there and
               * can change the formula to be applied
               */
              const formula = this.evaluate();
              // todo: Review if this section can be replaced by formulaManager.variables property.
              const {
                tokens
              } = this.#parent.getParser(formula);
              const variables = tokens.filter(token => token.type === 'variable').map(item => item.value);
              const params = await this.#parent.getParams(variables);
              try {
                const keys = Object.keys(params);
                let result = keys.length === 1 ? params[keys[0]] : (0, _mathjs.parse)(formula.formula).evaluate(params);
                const isInvalidResult = [-Infinity, Infinity, undefined, null, NaN].includes(result);
                if (this.#round && !isInvalidResult) result = Math.round(result);
                if (this.#ceil && !isInvalidResult) result = Math.ceil(result);
                this.#value = isInvalidResult || typeof result === 'object' ? this.#emptyValue : Number(result.toFixed(2));
                this.#parent.trigger('change');
                const model = this.#plugin.form.getField(this.name);
                model && model.set({
                  value: this.#value
                });
                return this.#value;
              } catch (e) {
                console.log('formula', this.name, formula.formula, params);
                console.error(e);
                throw new Error('Error calculating the formula');
              }
            }
          }
          exports.FormulaConditional = FormulaConditional;
        }
      });

      /******************************************
      INTERNAL MODULE: ./variants/iterative-array
      ******************************************/

      ims.set('./variants/iterative-array', {
        hash: 1087011738,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.IterativeArrayFormula = void 0;
          var _evaluations = require("../helpers/evaluations");
          var _mathjs = require("mathjs");
          class IterativeArrayFormula {
            #plugin;
            #specs;
            #tokens;
            get formula() {
              return this.#specs.formula;
            }
            get base() {
              const formula = this.#specs.formula;
              return formula.base;
            }
            #value;
            get value() {
              return this.#value;
            }
            get name() {
              return this.#specs.name;
            }
            /**
             *  Represents the fields defined in the plugin settings
             */
            get fields() {
              const formula = this.formula;
              return typeof formula?.fields === 'string' ? [formula?.fields] : formula?.fields;
            }
            get conditions() {
              if (typeof this.#specs.formula === 'string') return;
              const formula = this.#specs.formula;
              return formula.conditions;
            }
            #emptyValue;
            #variables = [];
            get variables() {
              return this.#variables;
            }
            #round;
            #ceil;
            #parent;
            #isNotListenToChanges = false;
            constructor(parent, plugin, specs) {
              this.#parent = parent;
              this.#plugin = plugin;
              this.#specs = specs;
              this.#round = specs.round;
              this.#ceil = specs.ceil;
              this.#emptyValue = this.#specs.emptyValue;
              this.#isNotListenToChanges = specs.isNotListenToChanges;
            }
            initialize() {
              const fieldArray = this.#plugin.form.getField(this.#specs.arrayFieldName);
              if (!fieldArray) {
                console.error(`Field ${this.#specs.arrayFieldName} does NOT exist.`);
                return;
              }
              fieldArray.on('change', this.calculate.bind(this));
            }
            async calculate() {
              const formulaField = this.#plugin.form.getField(this.name);
              const fieldArray = this.#plugin.form.getField(this.#specs.arrayFieldName);
              if (!fieldArray) {
                console.error(`Field ${this.#specs.arrayFieldName} does NOT exist.`);
                return;
              }
              const entries = fieldArray[this.#specs.arrayFieldProperty];
              if (!Array.isArray(entries)) {
                console.error(`Property ${this.#specs.arrayFieldProperty} is not an array.`);
                return;
              }
              const empty = !entries.length;
              const formula = this.#specs.formula;
              let formulaEvaluate = formula?.formula || formula;
              if (empty) {
                // If all models are empty, set the input to empty if exists.
                if (formulaField) formulaField.set({
                  value: this.#emptyValue !== undefined ? this.#emptyValue : ''
                });
                this.#value = undefined;
                this.#parent.trigger('change');
                return;
              }
              try {
                let totalResult = 0;
                for (let item of entries) {
                  if (formula.conditions) {
                    for (const condition of formula.conditions) {
                      const comparisonValue = item[condition.property];
                      let conditionMet = _evaluations.EvaluationsManager.validate(condition.condition, comparisonValue, condition.value);
                      if (conditionMet) {
                        formulaEvaluate = condition.formula;
                        break;
                      } else {
                        formulaEvaluate = formula.base;
                      }
                    }
                  }
                  const attrs = this.sanitizeData(item);
                  let result = (0, _mathjs.parse)(formulaEvaluate).evaluate(attrs);
                  const isInvalidResult = [-Infinity, Infinity, undefined, null, NaN].includes(result);
                  if (this.#round && !isInvalidResult) result = Math.round(result);
                  if (this.#ceil && !isInvalidResult) result = Math.ceil(result);
                  totalResult = isInvalidResult ? totalResult : Number(totalResult) + Number(result.toFixed(2));
                }
                const isInvalidResult = [-Infinity, Infinity, undefined, null, NaN, ''].includes(totalResult);
                this.#value = isInvalidResult ? this.#emptyValue : totalResult;
                if (formulaField) formulaField.set({
                  value: this.#value
                });
                this.#parent.trigger('change');
              } catch (e) {
                console.log('formula', this.name, this.formula);
                console.trace(e);
                throw new Error(`Error calculating the formula: ${e.message} ${this.name}`);
              }
            }
            sanitizeData(data) {
              if (Array.isArray(data)) {
                return data.map(item => this.sanitizeData(item));
              } else if (typeof data === 'object' && data !== null) {
                const sanitizedData = {};
                for (const key in data) {
                  if (data.hasOwnProperty(key)) {
                    sanitizedData[key] = this.sanitizeData(data[key]);
                  }
                }
                return sanitizedData;
              } else {
                return this.sanitizeValue(data);
              }
            }
            sanitizeValue(value, defaultValue = 0) {
              return value === null || value === undefined || isNaN(value) ? defaultValue : Number(value);
            }
          }
          exports.IterativeArrayFormula = IterativeArrayFormula;
        }
      });

      /************************************
      INTERNAL MODULE: ./variants/per-value
      ************************************/

      ims.set('./variants/per-value', {
        hash: 23936785,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormulaPerValue = void 0;
          var _evaluations = require("../helpers/evaluations");
          var _mathjs = require("mathjs");
          class FormulaPerValue {
            #plugin;
            #emptyValue;
            #specs;
            get formula() {
              return this.#specs.formula;
            }
            #value;
            get value() {
              return this.#value;
            }
            get name() {
              return this.#specs.name;
            }
            #observers;
            get observers() {
              return this.#observers;
            }
            /**
             *  Represents the fields defined in the plugin settings
             */
            get fields() {
              const formula = this.formula;
              return typeof formula?.fields === 'string' ? [formula?.fields] : formula?.fields;
            }
            get conditions() {
              if (typeof this.#specs.formula === 'string') return;
              const formula = this.#specs.formula;
              return formula.conditions;
            }
            #parent;
            #parsers;
            #mainFields;
            #isNotListenToChanges = false;
            constructor(parent, plugin, specs) {
              this.#parent = parent;
              this.#plugin = plugin;
              this.#specs = specs;
              this.#observers = specs.formula.observers;
              this.#isNotListenToChanges = specs.isNotListenToChanges;
            }
            initialize() {
              const {
                form
              } = this.#plugin;
              const fields = new Set();
              this.#mainFields = this.#parent.getModels(this.fields);
              /**
               * The method will iterate over the conditions to get the parser for each value
               * and get access to the fields that are part of the formula and be able to evaluate it
               * changes.
               */
              this.conditions.forEach(condition => {
                if (!condition.condition) {
                  throw new Error('the formula per value must contain a condition property in the condition`s item');
                }
                if (!condition.values) {
                  throw new Error('the formula per value must contain a values property in the condition`s item');
                }
                const parsers = condition.values.map(item => this.#parent.getParser(item));
                this.#parsers = parsers;
                parsers.forEach(parser => {
                  parser.tokens.filter(token => token.type === 'variable').forEach(token => fields.add(token.value));
                });
              });
              fields.forEach(field => {
                const model = form.getField(field);
                if (model) model.on('change', this.listenConditionals.bind(this));
              });
              this.listenConditionals();
              if (!this.#isNotListenToChanges) this.#mainFields.forEach(item => item.on('change', this.calculate.bind(this)));
              if (!this.#isNotListenToChanges) if (this.#observers && Array.isArray(this.#observers) && !!this.#observers.length) {
                const fields = this.#parent.getModels(this.#observers);
                fields.forEach(field => {
                  if (!field) return;
                  field.on('change', this.calculateAll.bind(this));
                });
              }
            }
            calculateAll() {
              this.#mainFields.forEach(field => this.calculate(field));
            }
            listenConditionals() {
              this.#mainFields.forEach(field => {
                if (!field) return;
                field.on('change', this.calculate.bind(this));
              });
            }
            async calculate(field) {
              if (!field) return;
              const {
                form
              } = this.#plugin;
              const formula = this.evaluate(field.value);
              if (!formula) return;
              const variables = formula.tokens.filter(token => token.type === 'variable').map(item => item.value);
              const params = await this.#parent.getParams(variables);
              const formulaField = form.getField(this.name);
              try {
                const keys = Object.keys(params);
                const result = keys.length === 1 ? params[keys[0]] : (0, _mathjs.parse)(formula.formula).evaluate(params);
                this.#value = [-Infinity, Infinity, undefined, null, NaN].includes(result) ? this.#emptyValue : Number(result.toFixed(2));
                formulaField && formulaField.set({
                  value: this.#value
                });
                this.#parent.trigger('change');
              } catch (e) {
                console.log(e);
                throw new Error('Error calculating the formula');
              }
            }
            evaluate(value) {
              let formula = undefined;
              if ([null, undefined].includes(value)) {
                return;
              }
              this.conditions.forEach(item => {
                const {
                  condition,
                  values
                } = item;
                if (!condition) {
                  throw new Error('the formula per value must contain a condition property in the condition`s item');
                }
                if (!values) {
                  throw new Error('the formula per value must contain a values property in the condition`s item');
                }
                const index = values.findIndex(item => _evaluations.EvaluationsManager.validate(condition, value, item.value));
                if (index > -1) formula = this.#parent.getParser(values[index]);
              });
              return formula;
            }
          }
          exports.FormulaPerValue = FormulaPerValue;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./helpers/parser",
        "from": "Parser",
        "name": "Parser"
      }, {
        "im": "./helpers/token",
        "from": "Token",
        "name": "Token"
      }, {
        "im": "./index",
        "from": "FormulaManager",
        "name": "FormulaManager"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Parser') && _export("Parser", Parser = require ? require('./helpers/parser').Parser : value);
        (require || prop === 'Token') && _export("Token", Token = require ? require('./helpers/token').Token : value);
        (require || prop === 'FormulaManager') && _export("FormulaManager", FormulaManager = require ? require('./index').FormulaManager : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb25kaXRpb25zVHlwZXMiLCJleHBvcnRzIiwiZXZlcnkiLCJzb21lIiwiRXZhbHVhdGlvbnNNYW5hZ2VyIiwiZXZhbHVhdGlvbnMiLCJlcXVhbCIsInZhbHVlIiwiY29tcGFyaXNvblZhbHVlIiwibG93ZXIiLCJOdW1iZXIiLCJ1cHBlciIsImJldHdlZW4iLCJtaW4iLCJtYXgiLCJudW1WYWx1ZSIsImRpZmZlcmVudCIsImhhc1ZhbHVlIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJlbXB0eSIsImxlc3NPckVxdWFsIiwiZ3JlYXRlck9yRXF1YWwiLCJ2YWxpZGF0ZSIsImlkZW50aWZpZXIiLCJFcnJvciIsInJlc3VsdCIsInZhbGlkYXRlQW55IiwidmFsdWVzIiwidmFsaWRhdGVBbGwiLCJfbGV4ZXIiLCJyZXF1aXJlIiwiX3BhcnNlciIsIkZvcm11bGEiLCJsZXhlciIsIkxleGVyIiwicGFyc2VycyIsIk1hcCIsInRva2VucyIsImNvbnN0cnVjdG9yIiwiZGF0YSIsImZvcm11bGEiLCJ0b2tlbml6ZSIsInBhcnNlciIsIlBhcnNlciIsInNldCIsImluaXRpYWxpemUiLCJfdG9rZW4iLCJ0b2tlblJlZ2V4IiwiZmxhdHRlblRva2VucyIsImxhc3RJbmRleCIsInN0YWNrIiwibWF0Y2giLCJleGVjIiwidG9rZW5WYWx1ZSIsInRva2VuVHlwZSIsImRldGVybWluZVRva2VuVHlwZSIsInB1c2giLCJzdWJUb2tlbnMiLCJwb3AiLCJwYXJlbnRUb2tlbnMiLCJsZW5ndGgiLCJUb2tlbiIsImZsYXR0ZW4iLCJvcGVyYXRvcnMiLCJpc05hTiIsInBhcnNlRmxvYXQiLCJmbGF0TGlzdCIsInRva2VuIiwidHlwZSIsImNoaWxkcmVuIiwiY3VycmVudFRva2VuSW5kZXgiLCJwYXJzZSIsInBhcnNlRXhwcmVzc2lvbiIsImV4cHIiLCJzdHJpbmdWYWx1ZSIsInBhcmVudCIsIl9tb2RlbCIsIl9iYXNpYyIsIl9jb25kaXRpb25hbCIsIl9wZXJWYWx1ZSIsIl9jb21wYXJpc29uIiwiX2FycmF5Rm9ybXVsYSIsIl9pdGVyYXRpdmVBcnJheSIsIkZvcm11bGFNYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsInNwZWNzIiwibmFtZSIsImNvbmRpdGlvbmFsIiwiY29uZGl0aW9ucyIsImZpZWxkcyIsInBhcnNlZEJhc2UiLCJiYXNlIiwidmFyaWFibGVzIiwiaW5zdGFuY2UiLCJwbHVnaW4iLCIjaW5pdGlhbGl6ZSIsImdldFR5cGUiLCJvYmplY3RzIiwiYmFzaWMiLCJGb3JtdWxhQmFzaWMiLCJGb3JtdWxhQ29uZGl0aW9uYWwiLCJGb3JtdWxhUGVyVmFsdWUiLCJjb21wYXJpc29uIiwiRm9ybXVsYUNvbXBhcmlzb24iLCJGb3JtdWxhQXJyYXkiLCJJdGVyYXRpdmVBcnJheUZvcm11bGEiLCJnZXRNb2RlbHMiLCJtYXAiLCJmb3JtdWxhcyIsImhhcyIsImdldCIsImZvcm0iLCJnZXRGaWVsZCIsInByb2Nlc3NDb25kaXRpb25hbCIsImdldFBhcnNlciIsImNhbGN1bGF0ZSIsImNvbnNvbGUiLCJ3YXJuIiwidHJpZ2dlciIsImdldFBhcmFtcyIsInBhcmFtcyIsImJ1aWxkIiwiZWxlbWVudCIsImlzUmVhZHkiLCJOYU4iLCJmb3JFYWNoIiwiY3JlYXRlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfZXZhbHVhdGlvbnMiLCJfbWF0aGpzIiwiZW1wdHlWYWx1ZSIsInJvdW5kIiwiY2VpbCIsImZvcm11bGFGaWVsZCIsIm9uIiwiYmluZCIsImV2YWx1YXRlIiwiZm9ybXVsYUV2YWx1YXRlIiwiY29uZGl0aW9uIiwicHJvcGVydHkiLCJjb25kaXRpb25NZXQiLCJhdHRycyIsInNhbml0aXplRGF0YSIsImVycm9yIiwibG9nIiwiaXNJbnZhbGlkUmVzdWx0IiwiSW5maW5pdHkiLCJNYXRoIiwidG9GaXhlZCIsInByb3BlcnR5VG9TZXQiLCJwcm9wZXJ0eVZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwibmV3VmFsdWUiLCJpdGVtIiwicmVzdWx0cyIsInNhbml0aXplZERhdGEiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsInNhbml0aXplVmFsdWUiLCJkZWZhdWx0VmFsdWUiLCJXaXNlRm9ybUZvcm11bGFQbHVnaW4iLCJpc05vdExpc3RlblRvQ2hhbmdlcyIsImZpbHRlciIsIm1vZGVscyIsIm1vZGVsIiwidG9TdHJpbmciLCJlIiwidHJhY2UiLCJtZXNzYWdlIiwib2JzZXJ2ZXJzIiwiZmllbGQiLCJzdGFydCIsImZpZWxkVmFsdWVzIiwiZmllbGRNb2RlbCIsInJlc3VsdEZpZWxkIiwicmVkdWNlIiwicHJldkZpZWxkIiwiY3VycmVudEZpZWxkIiwiYXBwbGllZCIsInNwZWNzRm9ybXVsYSIsImZvcm11bGFTdHJpbmciLCJrZXlzIiwiY2FsY3VsYXRlVXBwZXIiLCJnbHVlIiwiX2NvbmRpdGlvblR5cGVzIiwiZXZhbHVhdGVkRm9ybXVsYSIsInN1YkNvbmRpdGlvbiIsImZpZWxkTmFtZSIsImZpbmQiLCJmIiwiY29uZGl0aW9uVHlwZSIsImZpIiwiZmllbGRBcnJheSIsImFycmF5RmllbGROYW1lIiwiZW50cmllcyIsImFycmF5RmllbGRQcm9wZXJ0eSIsInRvdGFsUmVzdWx0IiwibWFpbkZpZWxkcyIsIlNldCIsImFkZCIsImxpc3RlbkNvbmRpdGlvbmFscyIsImNhbGN1bGF0ZUFsbCIsImluZGV4IiwiZmluZEluZGV4Il0sInNvdXJjZXMiOlsiL2hlbHBlcnMvY29uZGl0aW9uLXR5cGVzLnRzIiwiL2hlbHBlcnMvZXZhbHVhdGlvbnMudHMiLCIvaGVscGVycy9mb3JtdWxhLnRzIiwiL2hlbHBlcnMvbGV4ZXIudHMiLCIvaGVscGVycy9wYXJzZXIudHMiLCIvaGVscGVycy90b2tlbi50cyIsIi9pbmRleC50cyIsIi9mb3JtdWxhcy50cyIsIi92YXJpYW50cy9hcnJheS1mb3JtdWxhLnRzIiwiL3ZhcmlhbnRzL2Jhc2UudHMiLCIvdmFyaWFudHMvYmFzaWMudHMiLCIvdmFyaWFudHMvY29tcGFyaXNvbi50cyIsIi92YXJpYW50cy9jb25kaXRpb25hbC50cyIsIi92YXJpYW50cy9pdGVyYXRpdmUtYXJyYXkudHMiLCIvdmFyaWFudHMvcGVyLXZhbHVlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFPLE1BQU1BLGVBQWUsR0FBQUMsT0FBQSxDQUFBRCxlQUFBLEdBQUc7WUFDM0JFLEtBQUssRUFBRSxhQUFhO1lBQ3BCQyxJQUFJLEVBQUU7V0FDVDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNISyxNQUFPQyxrQkFBa0I7WUFDdEIsT0FBT0MsV0FBVyxHQUFtRTtjQUM1RkMsS0FBSyxFQUFFQSxDQUFDQyxLQUFLLEVBQUVDLGVBQWUsS0FBS0QsS0FBSyxJQUFJQyxlQUFlO2NBQzNEQyxLQUFLLEVBQUVBLENBQUNGLEtBQUssRUFBRUMsZUFBZSxLQUFLRSxNQUFNLENBQUNILEtBQUssQ0FBQyxHQUFHRyxNQUFNLENBQUNGLGVBQWUsQ0FBQztjQUMxRUcsS0FBSyxFQUFFQSxDQUFDSixLQUFLLEVBQUVDLGVBQWUsS0FBS0UsTUFBTSxDQUFDSCxLQUFLLENBQUMsR0FBR0csTUFBTSxDQUFDRixlQUFlLENBQUM7Y0FDMUVJLE9BQU8sRUFBRUEsQ0FBQ0wsS0FBSyxFQUFFLENBQUNNLEdBQUcsRUFBRUMsR0FBRyxDQUFDLEtBQUk7Z0JBQzlCLE1BQU1DLFFBQVEsR0FBR0wsTUFBTSxDQUFDSCxLQUFLLENBQUM7Z0JBQzlCLE9BQU9RLFFBQVEsSUFBSUwsTUFBTSxDQUFDRyxHQUFHLENBQUMsSUFBSUUsUUFBUSxJQUFJTCxNQUFNLENBQUNJLEdBQUcsQ0FBQztjQUMxRCxDQUFDO2NBQ0RFLFNBQVMsRUFBRUEsQ0FBQ1QsS0FBSyxFQUFFQyxlQUFlLEtBQUtELEtBQUssSUFBSUMsZUFBZTtjQUMvRFMsUUFBUSxFQUFFVixLQUFLLElBQUksQ0FBQyxDQUFDVyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQ0MsUUFBUSxDQUFDWixLQUFLLENBQUM7Y0FDaEVhLEtBQUssRUFBRWIsS0FBSyxJQUFJLENBQUNXLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFFLENBQUNDLFFBQVEsQ0FBQ1osS0FBSyxDQUFDO2NBQ3REYyxXQUFXLEVBQUVBLENBQUNkLEtBQUssRUFBRUMsZUFBZSxLQUFLRSxNQUFNLENBQUNILEtBQUssQ0FBQyxJQUFJRyxNQUFNLENBQUNGLGVBQWUsQ0FBQztjQUNqRmMsY0FBYyxFQUFFQSxDQUFDZixLQUFLLEVBQUVDLGVBQWUsS0FBS0UsTUFBTSxDQUFDSCxLQUFLLENBQUMsSUFBSUcsTUFBTSxDQUFDRixlQUFlO2FBQ25GO1lBRUQsT0FBT2UsUUFBUUEsQ0FBQ0MsVUFBa0IsRUFBRWpCLEtBQVUsRUFBRUMsZUFBcUI7Y0FDcEUsSUFBSSxDQUFDLElBQUksQ0FBQ0gsV0FBVyxDQUFDbUIsVUFBVSxDQUFDLEVBQUU7Z0JBQ2xDLE1BQU0sSUFBSUMsS0FBSyxDQUFDLDBCQUEwQkQsVUFBVSxtQkFBbUIsQ0FBQzs7Y0FHekUsTUFBTUUsTUFBTSxHQUFHLElBQUksQ0FBQ3JCLFdBQVcsQ0FBQ21CLFVBQVUsQ0FBQyxDQUFDakIsS0FBSyxFQUFFQyxlQUFlLENBQUM7Y0FDbkUsT0FBT2tCLE1BQU07WUFDZDtZQUVBOzs7O1lBSUEsT0FBT0MsV0FBV0EsQ0FBQ0gsVUFBa0IsRUFBRUksTUFBYSxFQUFFcEIsZUFBcUI7Y0FDMUUsSUFBSSxDQUFDLElBQUksQ0FBQ0gsV0FBVyxDQUFDbUIsVUFBVSxDQUFDLEVBQUU7Z0JBQ2xDLE1BQU0sSUFBSUMsS0FBSyxDQUFDLDBCQUEwQkQsVUFBVSxtQkFBbUIsQ0FBQzs7Y0FFekUsT0FBT0ksTUFBTSxDQUFDekIsSUFBSSxDQUFDSSxLQUFLLElBQUksSUFBSSxDQUFDRixXQUFXLENBQUNtQixVQUFVLENBQUMsQ0FBQ2pCLEtBQUssRUFBRUMsZUFBZSxDQUFDLENBQUM7WUFDbEY7WUFFQTs7OztZQUlBLE9BQU9xQixXQUFXQSxDQUFDTCxVQUFrQixFQUFFSSxNQUFhLEVBQUVwQixlQUFxQjtjQUMxRSxJQUFJLENBQUMsSUFBSSxDQUFDSCxXQUFXLENBQUNtQixVQUFVLENBQUMsRUFBRTtnQkFDbEMsTUFBTSxJQUFJQyxLQUFLLENBQUMsMEJBQTBCRCxVQUFVLG1CQUFtQixDQUFDOztjQUV6RSxPQUFPSSxNQUFNLENBQUMxQixLQUFLLENBQUNLLEtBQUssSUFBSSxJQUFJLENBQUNGLFdBQVcsQ0FBQ21CLFVBQVUsQ0FBQyxDQUFDakIsS0FBSyxFQUFFQyxlQUFlLENBQUMsQ0FBQztZQUNuRjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzdDRCxJQUFBc0IsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsT0FBQSxHQUFBRCxPQUFBO1VBU00sTUFBT0UsT0FBTztZQUNuQixDQUFBQyxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBSyxLQUFLLEVBQUU7WUFDcEIsQ0FBQUMsT0FBUSxHQUE0QixJQUFJQyxHQUFHLEVBQUU7WUFDN0MsQ0FBQUMsTUFBTztZQUNQQyxZQUFZQyxJQUFJO2NBQ2YsSUFBSSxDQUFDQSxJQUFJLENBQUNDLE9BQU8sRUFBRSxNQUFNLElBQUloQixLQUFLLENBQUMsNENBQTRDLENBQUM7Y0FDaEY7Y0FDQSxNQUFNYSxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUFKLEtBQU0sQ0FBQ1EsUUFBUSxDQUFDRixJQUFJLENBQUNDLE9BQU8sQ0FBQztjQUNqRCxNQUFNRSxNQUFNLEdBQUcsSUFBSVgsT0FBQSxDQUFBWSxNQUFNLENBQUNOLE1BQU0sQ0FBQztjQUNqQyxNQUFNWixNQUFNLEdBQUc7Z0JBQUVZLE1BQU07Z0JBQUVLLE1BQU07Z0JBQUUsR0FBR0g7Y0FBSSxDQUFFO2NBQzFDLElBQUksQ0FBQyxDQUFBSixPQUFRLENBQUNTLEdBQUcsQ0FBQ0wsSUFBSSxDQUFDQyxPQUFPLEVBQUVmLE1BQU0sQ0FBQztjQUN2QyxPQUFPQSxNQUFNO1lBQ2Q7WUFFQW9CLFVBQVVBLENBQUEsR0FBSTs7VUFDZDdDLE9BQUEsQ0FBQWdDLE9BQUEsR0FBQUEsT0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6QkQsSUFBQWMsTUFBQSxHQUFBaEIsT0FBQTtVQUdNLE1BQU9JLEtBQUs7WUFDVGEsVUFBVSxHQUFXLGdFQUFnRTtZQUNyRkMsYUFBYTtZQUVyQlYsWUFBWVUsYUFBQSxHQUF5QixLQUFLO2NBQ3pDLElBQUksQ0FBQ0EsYUFBYSxHQUFHQSxhQUFhO1lBQ25DO1lBRUFQLFFBQVFBLENBQUNELE9BQWU7Y0FDdkIsSUFBSSxDQUFDTyxVQUFVLENBQUNFLFNBQVMsR0FBRyxDQUFDO2NBQzdCLE1BQU1aLE1BQU0sR0FBWSxFQUFFO2NBQzFCLE1BQU1hLEtBQUssR0FBbUIsQ0FBQ2IsTUFBTSxDQUFDLENBQUMsQ0FBQztjQUN4QyxJQUFJYyxLQUE2QjtjQUVqQyxPQUFPLENBQUNBLEtBQUssR0FBRyxJQUFJLENBQUNKLFVBQVUsQ0FBQ0ssSUFBSSxDQUFDWixPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUU7Z0JBQ3hELE1BQU1hLFVBQVUsR0FBR0YsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsSUFBSUcsU0FBUyxHQUFjLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNGLFVBQVUsQ0FBQztnQkFFOUQsSUFBSUMsU0FBUyxLQUFLLGFBQWEsRUFBRTtrQkFDaEMsSUFBSUQsVUFBVSxLQUFLLEdBQUcsRUFBRTtvQkFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQ0wsYUFBYSxFQUFFO3NCQUN4QjtzQkFDQUUsS0FBSyxDQUFDTSxJQUFJLENBQUMsRUFBRSxDQUFDOzttQkFFZixNQUFNO29CQUNOLElBQUksQ0FBQyxJQUFJLENBQUNSLGFBQWEsRUFBRTtzQkFDeEI7c0JBQ0EsTUFBTVMsU0FBUyxHQUFHUCxLQUFLLENBQUNRLEdBQUcsRUFBRTtzQkFDN0IsSUFBSSxDQUFDRCxTQUFTLEVBQUU7d0JBQ2YsTUFBTSxJQUFJakMsS0FBSyxDQUFDLHVDQUF1QyxDQUFDOztzQkFFekQ7c0JBQ0EsTUFBTW1DLFlBQVksR0FBR1QsS0FBSyxDQUFDQSxLQUFLLENBQUNVLE1BQU0sR0FBRyxDQUFDLENBQUM7c0JBQzVDRCxZQUFZLENBQUNILElBQUksQ0FBQyxJQUFJVixNQUFBLENBQUFlLEtBQUssQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRUosU0FBUyxDQUFDLENBQUM7OztpQkFHcEUsTUFBTTtrQkFDTjtrQkFDQVAsS0FBSyxDQUFDQSxLQUFLLENBQUNVLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQ0osSUFBSSxDQUFDLElBQUlWLE1BQUEsQ0FBQWUsS0FBSyxDQUFDUCxTQUFTLEVBQUVELFVBQVUsQ0FBQyxDQUFDOzs7Y0FJaEUsSUFBSUgsS0FBSyxDQUFDVSxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUN2QixNQUFNLElBQUlwQyxLQUFLLENBQUMsdUNBQXVDLENBQUM7O2NBR3pEO2NBQ0EsSUFBSSxJQUFJLENBQUN3QixhQUFhLEVBQUU7Z0JBQ3ZCLE9BQU8sSUFBSSxDQUFDYyxPQUFPLENBQUN6QixNQUFNLENBQUM7O2NBRzVCLE9BQU9BLE1BQU0sQ0FBQyxDQUFDO1lBQ2hCO1lBRVFrQixrQkFBa0JBLENBQUNqRCxLQUFhO2NBQ3ZDLE1BQU15RCxTQUFTLEdBQUc7Z0JBQ2pCLEdBQUcsRUFBRSxVQUFVO2dCQUNmLEdBQUcsRUFBRSxVQUFVO2dCQUNmLEdBQUcsRUFBRSxVQUFVO2dCQUNmLEdBQUcsRUFBRSxVQUFVO2dCQUNmLEdBQUcsRUFBRSxhQUFhO2dCQUNsQixHQUFHLEVBQUU7ZUFDTDtjQUNELE9BQU9BLFNBQVMsQ0FBQ3pELEtBQUssQ0FBQyxLQUFLLENBQUMwRCxLQUFLLENBQUNDLFVBQVUsQ0FBQzNELEtBQUssQ0FBQyxDQUFDLEdBQUcsUUFBUSxHQUFHLFVBQVUsQ0FBQztZQUMvRTtZQUVRd0QsT0FBT0EsQ0FBQ3pCLE1BQWU7Y0FDOUIsTUFBTTZCLFFBQVEsR0FBWSxFQUFFO2NBQzVCLEtBQUssTUFBTUMsS0FBSyxJQUFJOUIsTUFBTSxFQUFFO2dCQUMzQixJQUFJOEIsS0FBSyxDQUFDQyxJQUFJLEtBQUssYUFBYSxJQUFJRCxLQUFLLENBQUNFLFFBQVEsRUFBRTtrQkFDbkRILFFBQVEsQ0FBQ1YsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDTSxPQUFPLENBQUNLLEtBQUssQ0FBQ0UsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNoRCxNQUFNO2tCQUNOSCxRQUFRLENBQUNWLElBQUksQ0FBQ1csS0FBSyxDQUFDOzs7Y0FHdEIsT0FBT0QsUUFBUTtZQUNoQjs7VUFDQWxFLE9BQUEsQ0FBQWtDLEtBQUEsR0FBQUEsS0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3RE0sWUFmUDs7Ozs7Ozs7Ozs7Ozs7O1VBZWtCLE1BQU9TLE1BQU07WUFDdEJOLE1BQU07WUFDTmlDLGlCQUFpQjtZQUV6QmhDLFlBQVlELE1BQWU7Y0FDMUIsSUFBSSxDQUFDQSxNQUFNLEdBQUdBLE1BQU07Y0FDcEIsSUFBSSxDQUFDaUMsaUJBQWlCLEdBQUcsQ0FBQztZQUMzQjtZQUVPQyxLQUFLQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUNDLGVBQWUsRUFBRTtZQUM5QjtZQUVRQSxlQUFlQSxDQUFBO2NBQ3RCLElBQUlMLEtBQUssR0FBRyxJQUFJLENBQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDaUMsaUJBQWlCLENBQUM7Y0FDL0MsSUFBSUgsS0FBSyxJQUFJQSxLQUFLLENBQUNDLElBQUksS0FBSyxVQUFVLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQ0UsaUJBQWlCLEVBQUU7Z0JBQ3hCLE9BQU9ILEtBQUs7ZUFDWixNQUFNLElBQUlBLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUM1QyxJQUFJLENBQUNFLGlCQUFpQixFQUFFO2dCQUN4QixPQUFPSCxLQUFLO2VBQ1osTUFBTSxJQUFJQSxLQUFLLElBQUlBLEtBQUssQ0FBQzdELEtBQUssS0FBSyxHQUFHLEVBQUU7Z0JBQ3hDLElBQUksQ0FBQ2dFLGlCQUFpQixFQUFFLENBQUMsQ0FBQztnQkFDMUIsSUFBSUcsSUFBSSxHQUFHLElBQUksQ0FBQ0QsZUFBZSxFQUFFLENBQUMsQ0FBQztnQkFDbkMsSUFBSSxJQUFJLENBQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDaUMsaUJBQWlCLENBQUMsSUFBSSxJQUFJLENBQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDaUMsaUJBQWlCLENBQUMsQ0FBQ2hFLEtBQUssS0FBSyxHQUFHLEVBQUU7a0JBQzdGLElBQUksQ0FBQ2dFLGlCQUFpQixFQUFFLENBQUMsQ0FBQztrQkFDMUIsT0FBT0csSUFBSTs7O2NBR2I7Y0FDQTtjQUNBO2NBQ0EsT0FBT3hELFNBQVM7WUFDakI7O1VBQ0FqQixPQUFBLENBQUEyQyxNQUFBLEdBQUFBLE1BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0NNLFdBSlA7Ozs7VUFJaUIsTUFBT2tCLEtBQUs7WUFDNUJPLElBQUk7WUFDSjlELEtBQUs7WUFDTG9FLFdBQVc7WUFDWEwsUUFBUTtZQUNSTSxNQUFNO1lBRU5yQyxZQUFZOEIsSUFBZSxFQUFFOUQsS0FBYSxFQUFFb0UsV0FBb0IsRUFBRUwsUUFBa0IsRUFBRU0sTUFBYztjQUNuRyxJQUFJLENBQUNQLElBQUksR0FBR0EsSUFBSTtjQUNoQixJQUFJLENBQUM5RCxLQUFLLEdBQUdBLEtBQUs7Y0FDbEIsSUFBSSxDQUFDb0UsV0FBVyxHQUFHQSxXQUFXO2NBQzlCLElBQUksQ0FBQ0wsUUFBUSxHQUFHQSxRQUFRO2NBQ3hCLElBQUksQ0FBQ00sTUFBTSxHQUFHQSxNQUFNO1lBQ3JCOztVQUNBM0UsT0FBQSxDQUFBNkQsS0FBQSxHQUFBQSxLQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xCRCxJQUFBZSxNQUFBLEdBQUE5QyxPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsT0FBQSxHQUFBRCxPQUFBO1VBR0EsSUFBQStDLE1BQUEsR0FBQS9DLE9BQUE7VUFDQSxJQUFBZ0QsWUFBQSxHQUFBaEQsT0FBQTtVQUNBLElBQUFpRCxTQUFBLEdBQUFqRCxPQUFBO1VBQ0EsSUFBQWtELFdBQUEsR0FBQWxELE9BQUE7VUFDQSxJQUFBbUQsYUFBQSxHQUFBbkQsT0FBQTtVQUNBLElBQUFvRCxlQUFBLEdBQUFwRCxPQUFBO1VBTU87VUFBVyxNQUFPcUQsY0FBZSxTQUFRUCxNQUFBLENBQUFRLGFBQTZCO1lBQzVFLENBQUFuRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBSyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBRXhCLENBQUFHLE1BQU87WUFDUCxJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUNBLENBQUFLLE1BQU87WUFDUCxJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUVBLENBQUEyQyxLQUFNO1lBQ04sSUFBSTdDLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQyxDQUFBNkMsS0FBTSxDQUFDN0MsT0FBTztZQUMzQjtZQUNBLElBQUk4QyxJQUFJQSxDQUFBO2NBQ1AsT0FBTyxJQUFJLENBQUMsQ0FBQUQsS0FBTSxDQUFDQyxJQUFJO1lBQ3hCO1lBRUEsSUFBSUMsV0FBV0EsQ0FBQTtjQUNkLE9BQU8sT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTSxDQUFDN0MsT0FBTyxLQUFLLFFBQVE7WUFDL0M7WUFFQSxJQUFJZ0QsVUFBVUEsQ0FBQTtjQUNiLElBQUksT0FBTyxJQUFJLENBQUMsQ0FBQUgsS0FBTSxDQUFDN0MsT0FBTyxLQUFLLFFBQVEsRUFBRTtjQUM3QyxNQUFNQSxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUE2QyxLQUFNLENBQUM3QyxPQUE0QjtjQUN4RCxPQUFPQSxPQUFPLENBQUNnRCxVQUFVO1lBQzFCO1lBRUE7OztZQUdBLElBQUlDLE1BQU1BLENBQUE7Y0FDVCxNQUFNakQsT0FBTyxHQUFzQixJQUFJLENBQUNBLE9BQU87Y0FDL0MsT0FBTyxPQUFPQSxPQUFPLEVBQUVpRCxNQUFNLEtBQUssUUFBUSxHQUFHLENBQUNqRCxPQUFPLEVBQUVpRCxNQUFNLENBQUMsR0FBR2pELE9BQU8sRUFBRWlELE1BQU07WUFDakY7WUFFQSxDQUFBQyxVQUFXO1lBQ1gsSUFBSUEsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFBLFVBQVc7WUFDeEI7WUFDQSxDQUFBdEIsSUFBSztZQUNMLElBQUlBLElBQUlBLENBQUE7Y0FDUCxPQUFPLElBQUksQ0FBQyxDQUFBQSxJQUFLO1lBQ2xCO1lBRUEsSUFBSXVCLElBQUlBLENBQUE7Y0FDUCxNQUFNbkQsT0FBTyxHQUFzQixJQUFJLENBQUMsQ0FBQTZDLEtBQU0sQ0FBQzdDLE9BQU87Y0FDdEQsT0FBT0EsT0FBTyxDQUFDbUQsSUFBSTtZQUNwQjtZQUVBLENBQUFDLFNBQVUsR0FBYSxFQUFFO1lBQ3pCLElBQUlBLFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQyxDQUFBQSxTQUFVO1lBQ3ZCO1lBRUEsSUFBSXRGLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBdUYsUUFBUyxDQUFDdkYsS0FBSztZQUM1QjtZQUVBLENBQUE2QixPQUFRLEdBQTRCLElBQUlDLEdBQUcsRUFBRTtZQUM3QyxDQUFBMEQsTUFBTztZQUNQLENBQUFELFFBQVM7WUFFVHZELFlBQVl3RCxNQUFNLEVBQUVULEtBQUs7Y0FDeEIsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUFTLE1BQU8sR0FBR0EsTUFBTTtjQUNyQixJQUFJLENBQUMsQ0FBQVQsS0FBTSxHQUFHQSxLQUFLO2NBQ25CLElBQUksQ0FBQyxDQUFBeEMsVUFBVyxFQUFFO1lBQ25CO1lBRUEsQ0FBQUEsVUFBV2tELENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQTNCLElBQUssR0FBRyxJQUFJLENBQUM0QixPQUFPLEVBQUU7Y0FFM0IsTUFBTUMsT0FBTyxHQUFHO2dCQUNmQyxLQUFLLEVBQUVyQixNQUFBLENBQUFzQixZQUFZO2dCQUNuQixrQkFBa0IsRUFBRXJCLFlBQUEsQ0FBQXNCLGtCQUFrQjtnQkFDdEMsa0JBQWtCLEVBQUVyQixTQUFBLENBQUFzQixlQUFlO2dCQUNuQ0MsVUFBVSxFQUFFdEIsV0FBQSxDQUFBdUIsaUJBQWlCO2dCQUM3QixPQUFPLEVBQUV0QixhQUFBLENBQUF1QixZQUFZO2dCQUNyQixpQkFBaUIsRUFBRXRCLGVBQUEsQ0FBQXVCO2VBQ25CO2NBRUQsSUFBSSxDQUFDUixPQUFPLENBQUMsSUFBSSxDQUFDN0IsSUFBSSxDQUFDLEVBQUU7Z0JBQ3hCLE1BQU0sSUFBSTVDLEtBQUssQ0FBQyxhQUFhLElBQUksQ0FBQzRDLElBQUksWUFBWSxDQUFDOztjQUdwRCxJQUFJLENBQUMsQ0FBQXlCLFFBQVMsR0FBRyxJQUFJSSxPQUFPLENBQUMsSUFBSSxDQUFDN0IsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBMEIsTUFBTyxFQUFFLElBQUksQ0FBQyxDQUFBVCxLQUFNLENBQUM7WUFDekU7WUFFQXhDLFVBQVVBLENBQUE7Y0FDVCxJQUFJLENBQUMsQ0FBQWdELFFBQVMsQ0FBQ2hELFVBQVUsRUFBRTtZQUM1QjtZQUNBOzs7Ozs7WUFNQTZELFNBQVNBLENBQUNkLFNBQXdCO2NBQ2pDLE9BQU9BLFNBQVMsQ0FBQ2UsR0FBRyxDQUFDckIsSUFBSSxJQUFHO2dCQUMzQixJQUFJLElBQUksQ0FBQyxDQUFBUSxNQUFPLENBQUNjLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDdkIsSUFBSSxDQUFDLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQVEsTUFBTyxDQUFDYyxRQUFRLENBQUNFLEdBQUcsQ0FBQ3hCLElBQUksQ0FBQztnQkFDM0UsT0FBTyxJQUFJLENBQUMsQ0FBQVEsTUFBTyxDQUFDaUIsSUFBSSxDQUFDQyxRQUFRLENBQUMxQixJQUFJLENBQUM7Y0FDeEMsQ0FBQyxDQUFDO1lBQ0g7WUFFUVUsT0FBT0EsQ0FBQTtjQUNkLE1BQU07Z0JBQUU1QixJQUFJO2dCQUFFNUI7Y0FBTyxDQUFFLEdBQUcsSUFBSSxDQUFDLENBQUE2QyxLQUFNO2NBQ3JDLElBQUlqQixJQUFJLEVBQUUsT0FBT0EsSUFBSTtjQUNyQixJQUFJLE9BQU81QixPQUFPLEtBQUssUUFBUSxFQUFFLE9BQU8sT0FBTztjQUMvQyxJQUFJQSxPQUFPLENBQUNnRCxVQUFVLEVBQUUsT0FBT2hELE9BQU8sQ0FBQ21ELElBQUksR0FBRyxrQkFBa0IsR0FBRyxrQkFBa0I7WUFDdEY7WUFFQXNCLGtCQUFrQkEsQ0FBQTtjQUNqQixNQUFNekUsT0FBTyxHQUFzQixJQUFJLENBQUNBLE9BQU87Y0FDL0MsSUFBSSxJQUFJLENBQUNtRCxJQUFJLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLENBQUFELFVBQVcsR0FBRyxJQUFJLENBQUN3QixTQUFTLENBQUM7a0JBQUUxRSxPQUFPLEVBQUUsSUFBSSxDQUFDbUQ7Z0JBQUksQ0FBRSxDQUFDOztZQUUzRDtZQUNBd0IsU0FBU0EsQ0FBQTtjQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQXRCLFFBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQUEsUUFBUyxDQUFDc0IsU0FBUyxFQUFFO2dCQUNoREMsT0FBTyxDQUFDQyxJQUFJLENBQUMsdUNBQXVDLEVBQUUsSUFBSSxDQUFDLENBQUF4QixRQUFTLENBQUM7O2NBRXRFLElBQUksQ0FBQyxDQUFBQSxRQUFTLENBQUNzQixTQUFTLEVBQUU7Y0FFMUIsSUFBSSxDQUFDRyxPQUFPLENBQUMsUUFBUSxDQUFDO2NBQ3RCO1lBQ0Q7WUFFQTs7Ozs7Ozs7O1lBU0FKLFNBQVNBLENBQUMzRSxJQUFJO2NBQ2IsSUFBSSxDQUFDQSxJQUFJLENBQUNDLE9BQU8sRUFBRSxNQUFNLElBQUloQixLQUFLLENBQUMsNENBQTRDLENBQUM7Y0FDaEYsSUFBSSxJQUFJLENBQUMsQ0FBQVcsT0FBUSxDQUFDMEUsR0FBRyxDQUFDdEUsSUFBSSxDQUFDQyxPQUFPLENBQUMsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFBTCxPQUFRLENBQUMyRSxHQUFHLENBQUN2RSxJQUFJLENBQUNDLE9BQU8sQ0FBQztjQUMzRSxNQUFNSCxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUFKLEtBQU0sQ0FBQ1EsUUFBUSxDQUFDRixJQUFJLENBQUNDLE9BQU8sQ0FBQztjQUNqRCxNQUFNRSxNQUFNLEdBQUcsSUFBSVgsT0FBQSxDQUFBWSxNQUFNLENBQUNOLE1BQU0sQ0FBQztjQUNqQyxNQUFNWixNQUFNLEdBQUc7Z0JBQUVZLE1BQU07Z0JBQUVLLE1BQU07Z0JBQUUsR0FBR0g7Y0FBSSxDQUFFO2NBRTFDLElBQUksQ0FBQyxDQUFBSixPQUFRLENBQUNTLEdBQUcsQ0FBQ0wsSUFBSSxDQUFDQyxPQUFPLEVBQUVmLE1BQU0sQ0FBQztjQUN2QyxPQUFPQSxNQUFNO1lBQ2Q7WUFFQSxNQUFNOEYsU0FBU0EsQ0FBQzNCLFNBQW1CO2NBQ2xDLE1BQU00QixNQUFNLEdBQUcsRUFBRTtjQUNqQixNQUFNO2dCQUFFVCxJQUFJO2dCQUFFSDtjQUFRLENBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQWQsTUFBTztjQUN2QyxNQUFNMkIsS0FBSyxHQUFHLE1BQU9uSCxLQUFLLElBQUk7Z0JBQzdCOzs7Z0JBR0EsTUFBTW9ILE9BQU8sR0FBR2QsUUFBUSxDQUFDQyxHQUFHLENBQUN2RyxLQUFLLENBQUMsR0FBR3NHLFFBQVEsQ0FBQ0UsR0FBRyxDQUFDeEcsS0FBSyxDQUFDLEdBQUd5RyxJQUFJLENBQUNDLFFBQVEsQ0FBQzFHLEtBQUssQ0FBQztnQkFDaEYsSUFBSSxDQUFDb0gsT0FBTyxFQUNYLE1BQU0sSUFBSWxHLEtBQUssQ0FBQyxTQUFTbEIsS0FBSyxvQkFBb0IsSUFBSSxDQUFDZ0YsSUFBSSx1QkFBdUJ5QixJQUFJLENBQUN6QixJQUFJLElBQUksQ0FBQztnQkFDakcsTUFBTW9DLE9BQU8sQ0FBQ0MsT0FBTztnQkFDckJILE1BQU0sQ0FBQ2xILEtBQUssQ0FBQyxHQUFHLENBQUNXLFNBQVMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFMkcsR0FBRyxDQUFDLENBQUMxRyxRQUFRLENBQUN3RyxPQUFPLENBQUNwSCxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUdvSCxPQUFPLENBQUNwSCxLQUFLO2NBQ3ZGLENBQUM7Y0FDRHNGLFNBQVMsQ0FBQ2lDLE9BQU8sQ0FBQ0osS0FBSyxDQUFDO2NBQ3hCLE9BQU9ELE1BQU07WUFDZDtZQUVBOzs7Ozs7WUFNQSxhQUFhTSxNQUFNQSxDQUFDaEMsTUFBTSxFQUFFVCxLQUFLO2NBQ2hDLE1BQU1RLFFBQVEsR0FBRyxJQUFJVixjQUFjLENBQUNXLE1BQU0sRUFBRVQsS0FBSyxDQUFDO2NBQ2xEO2NBQ0EsT0FBT1EsUUFBUTtZQUNoQjs7VUFHQTdGLE9BQUEsQ0FBQW1GLGNBQUEsR0FBQUEsY0FBQTs7Ozs7Ozs7Ozs7VUN0TUQ7O1VBRUE0QyxNQUFBLENBQUFDLGNBQUEsQ0FBQWhJLE9BQUE7WUFDQU0sS0FBQTtVQUNBOzs7Ozs7Ozs7OztVREpBOztVQUVBeUgsTUFBQSxDQUFBQyxjQUFBLENBQUFoSSxPQUFBO1lBQ0FNLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUVIQSxJQUFBMkgsWUFBQSxHQUFBbkcsT0FBQTtVQUVBLElBQUFvRyxPQUFBLEdBQUFwRyxPQUFBO1VBRU0sTUFBTzBFLFlBQVk7WUFDckIsQ0FBQVYsTUFBTztZQUNQLENBQUFULEtBQU07WUFDTixJQUFJN0MsT0FBT0EsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUE2QyxLQUFNLENBQUM3QyxPQUFPO1lBQzlCO1lBQ0EsSUFBSW1ELElBQUlBLENBQUE7Y0FDSixNQUFNbkQsT0FBTyxHQUFzQixJQUFJLENBQUMsQ0FBQTZDLEtBQU0sQ0FBQzdDLE9BQU87Y0FDdEQsT0FBT0EsT0FBTyxDQUFDbUQsSUFBSTtZQUN2QjtZQUNBLENBQUFyRixLQUFNLEdBQVUsRUFBRTtZQUNsQixJQUFJQSxLQUFLQSxDQUFBO2NBQ0wsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUN0QjtZQUNBLElBQUlnRixJQUFJQSxDQUFBO2NBQ0osT0FBTyxJQUFJLENBQUMsQ0FBQUQsS0FBTSxDQUFDQyxJQUFJO1lBQzNCO1lBQ0E7OztZQUdBLElBQUlHLE1BQU1BLENBQUE7Y0FDTixNQUFNakQsT0FBTyxHQUFzQixJQUFJLENBQUNBLE9BQU87Y0FDL0MsT0FBTyxPQUFPQSxPQUFPLEVBQUVpRCxNQUFNLEtBQUssUUFBUSxHQUFHLENBQUNqRCxPQUFPLEVBQUVpRCxNQUFNLENBQUMsR0FBR2pELE9BQU8sRUFBRWlELE1BQU07WUFDcEY7WUFFQSxJQUFJRCxVQUFVQSxDQUFBO2NBQ1YsSUFBSSxPQUFPLElBQUksQ0FBQyxDQUFBSCxLQUFNLENBQUM3QyxPQUFPLEtBQUssUUFBUSxFQUFFO2NBQzdDLE1BQU1BLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQTZDLEtBQU0sQ0FBQzdDLE9BQTRCO2NBQ3hELE9BQU9BLE9BQU8sQ0FBQ2dELFVBQVU7WUFDN0I7WUFFQSxDQUFBMkMsVUFBVztZQUNYLENBQUF2QyxTQUFVLEdBQWEsRUFBRTtZQUN6QixJQUFJQSxTQUFTQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsU0FBVTtZQUMxQjtZQUVBLENBQUF3QyxLQUFNO1lBQ04sQ0FBQUMsSUFBSztZQUVMLENBQUExRCxNQUFPO1lBRVAsQ0FBQTJELFlBQWE7WUFDYmhHLFlBQVlxQyxNQUFNLEVBQUVtQixNQUFNLEVBQUVULEtBQUs7Y0FDN0IsSUFBSSxDQUFDLENBQUFWLE1BQU8sR0FBR0EsTUFBTTtjQUNyQixJQUFJLENBQUMsQ0FBQW1CLE1BQU8sR0FBR0EsTUFBTTtjQUNyQixJQUFJLENBQUMsQ0FBQVQsS0FBTSxHQUFHQSxLQUFLO2NBQ25CLElBQUksQ0FBQyxDQUFBK0MsS0FBTSxHQUFHL0MsS0FBSyxDQUFDK0MsS0FBSztjQUN6QixJQUFJLENBQUMsQ0FBQUMsSUFBSyxHQUFHaEQsS0FBSyxDQUFDZ0QsSUFBSTtjQUN2QixJQUFJLENBQUMsQ0FBQWhELEtBQU0sQ0FBQzhDLFVBQVUsR0FBRzlDLEtBQUssQ0FBQzhDLFVBQVU7Y0FFekMsSUFBSSxDQUFDLENBQUFHLFlBQWEsR0FBRyxJQUFJLENBQUMsQ0FBQXhDLE1BQU8sQ0FBQ2lCLElBQUksQ0FBQ0MsUUFBUSxDQUFDLElBQUksQ0FBQzFCLElBQUksQ0FBQztZQUM5RDtZQUVBekMsVUFBVUEsQ0FBQTtjQUNOLElBQUksQ0FBQyxDQUFBeUYsWUFBYSxDQUFDQyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ3BCLFNBQVMsQ0FBQ3FCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5RDtZQUVBQyxRQUFRLEdBQUlsRyxJQUFzQyxJQUFJO2NBQ2xELE1BQU1aLE1BQU0sR0FBRyxFQUFFO2NBQ2pCLEtBQUssTUFBTWEsT0FBTyxJQUFJRCxJQUFJLENBQUNxRSxRQUFRLEVBQUU7Z0JBRWpDLElBQUluRixNQUFNO2dCQUNWLElBQUlpSCxlQUFlLEdBQUdsRyxPQUFPLENBQUNBLE9BQU87Z0JBQ3JDLElBQUk7a0JBQ0EsSUFBSUEsT0FBTyxDQUFDZ0QsVUFBVSxFQUFFO29CQUNwQixLQUFLLE1BQU1tRCxTQUFTLElBQUluRyxPQUFPLENBQUNnRCxVQUFVLEVBQUU7c0JBQ3hDLE1BQU1qRixlQUFlLEdBQUc7d0JBQUUsR0FBR2dDLElBQUksQ0FBQ1osTUFBTTt3QkFBRSxHQUFHQTtzQkFBTSxDQUFFLENBQUNnSCxTQUFTLENBQUNDLFFBQVEsQ0FBQztzQkFDekUsSUFBSUMsWUFBWSxHQUFHWixZQUFBLENBQUE5SCxrQkFBa0IsQ0FBQ21CLFFBQVEsQ0FBQ3FILFNBQVMsQ0FBQ0EsU0FBUyxFQUFFcEksZUFBZSxFQUFFb0ksU0FBUyxDQUFDckksS0FBSyxDQUFDO3NCQUNyRyxJQUFJdUksWUFBWSxFQUFFO3dCQUNkSCxlQUFlLEdBQUdDLFNBQVMsQ0FBQ25HLE9BQU87d0JBQ25DOzs7O2tCQUlaLE1BQU1zRyxLQUFLLEdBQUcsSUFBSSxDQUFDQyxZQUFZLENBQUM7b0JBQUUsR0FBR3hHLElBQUksQ0FBQ1osTUFBTTtvQkFBRSxHQUFHQTtrQkFBTSxDQUFFLENBQUM7a0JBRTlERixNQUFNLEdBQUcsSUFBQXlHLE9BQUEsQ0FBQTNELEtBQUssRUFBQ21FLGVBQXlCLENBQUMsQ0FBQ0QsUUFBUSxDQUFDSyxLQUFLLENBQUM7aUJBRTVELENBQUMsT0FBT0UsS0FBSyxFQUFFO2tCQUNaNUIsT0FBTyxDQUFDNkIsR0FBRyxDQUFDLDJCQUEyQixFQUFFekcsT0FBTyxDQUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFd0csS0FBSyxDQUFDOztnQkFFOUUsTUFBTUUsZUFBZSxHQUFHLENBQUMsQ0FBQ0MsUUFBUSxFQUFFQSxRQUFRLEVBQUVsSSxTQUFTLEVBQUUsSUFBSSxFQUFFMkcsR0FBRyxDQUFDLENBQUMxRyxRQUFRLENBQUNPLE1BQU0sQ0FBQztnQkFFcEYsSUFBSWUsT0FBTyxDQUFDNEYsS0FBSyxJQUFJLENBQUNjLGVBQWUsRUFBRXpILE1BQU0sR0FBRzJILElBQUksQ0FBQ2hCLEtBQUssQ0FBQzNHLE1BQU0sQ0FBQztnQkFDbEUsSUFBSWUsT0FBTyxDQUFDNkYsSUFBSSxJQUFJLENBQUNhLGVBQWUsRUFBRXpILE1BQU0sR0FBRzJILElBQUksQ0FBQ2YsSUFBSSxDQUFDNUcsTUFBTSxDQUFDO2dCQUNoRUEsTUFBTSxHQUFHeUgsZUFBZSxHQUFHMUcsT0FBTyxDQUFDMkYsVUFBVSxHQUFHMUgsTUFBTSxDQUFDZ0IsTUFBTSxDQUFDNEgsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6RTFILE1BQU0sQ0FBQ2EsT0FBTyxDQUFDOEcsYUFBYSxDQUFDLEdBQUc3SCxNQUFNOztjQUUxQyxPQUFPRSxNQUFNO1lBQ2pCLENBQUM7WUFFRCxNQUFNd0YsU0FBU0EsQ0FBQTtjQUNYLE1BQU1tQixZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUF4QyxNQUFPLENBQUNpQixJQUFJLENBQUNDLFFBQVEsQ0FBQyxJQUFJLENBQUMxQixJQUFJLENBQUM7Y0FDMUQsSUFBSSxDQUFDZ0QsWUFBWSxFQUFFO2NBQ25CLE1BQU1oSSxLQUFLLEdBQUdnSSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUFqRCxLQUFNLENBQUNrRSxhQUFhLElBQUksU0FBUyxDQUFDO2NBQ2xFLElBQUksQ0FBQ2pKLEtBQUssSUFBSSxDQUFDa0osS0FBSyxDQUFDQyxPQUFPLENBQUNuSixLQUFLLENBQUMsSUFBSSxDQUFDQSxLQUFLLENBQUNzRCxNQUFNLEVBQUU7Z0JBQ2xEMEUsWUFBWSxDQUFDMUYsR0FBRyxDQUFDO2tCQUFFLENBQUMsSUFBSSxDQUFDLENBQUF5QyxLQUFNLENBQUNrRSxhQUFhLEdBQUc7Z0JBQUUsQ0FBRSxDQUFDO2dCQUNyRDs7Y0FDSDtjQUNELE1BQU1HLFFBQVEsR0FBR3BKLEtBQUssQ0FBQ3FHLEdBQUcsQ0FBQ2dELElBQUksSUFBRztnQkFDOUIsSUFBSUMsT0FBTyxHQUFHLElBQUksQ0FBQ25CLFFBQVEsQ0FBQztrQkFBRTdCLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQXZCLEtBQU0sQ0FBQ3VCLFFBQVE7a0JBQUVqRixNQUFNLEVBQUVnSTtnQkFBSSxDQUFFLENBQUM7Z0JBQzdFLE9BQU87a0JBQ0gsR0FBR0EsSUFBSTtrQkFDUCxHQUFHQztpQkFDTjtjQUNMLENBQUMsQ0FBQztjQUNGLElBQUksQ0FBQyxDQUFBdEosS0FBTSxHQUFHb0osUUFBUTtjQUN0QnBCLFlBQVksQ0FBQzFGLEdBQUcsQ0FBQztnQkFBRSxDQUFDLElBQUksQ0FBQyxDQUFBeUMsS0FBTSxDQUFDa0UsYUFBYSxHQUFHRztjQUFRLENBQUUsQ0FBQztZQUMvRDtZQUdRWCxZQUFZQSxDQUFDeEcsSUFBUztjQUMxQixJQUFJaUgsS0FBSyxDQUFDQyxPQUFPLENBQUNsSCxJQUFJLENBQUMsRUFBRTtnQkFDckIsT0FBT0EsSUFBSSxDQUFDb0UsR0FBRyxDQUFDZ0QsSUFBSSxJQUFJLElBQUksQ0FBQ1osWUFBWSxDQUFDWSxJQUFJLENBQUMsQ0FBQztlQUNuRCxNQUFNLElBQUksT0FBT3BILElBQUksS0FBSyxRQUFRLElBQUlBLElBQUksS0FBSyxJQUFJLEVBQUU7Z0JBQ2xELE1BQU1zSCxhQUFhLEdBQVEsRUFBRTtnQkFDN0IsS0FBSyxNQUFNQyxHQUFHLElBQUl2SCxJQUFJLEVBQUU7a0JBQ3BCLElBQUlBLElBQUksQ0FBQ3dILGNBQWMsQ0FBQ0QsR0FBRyxDQUFDLEVBQUU7b0JBQzFCRCxhQUFhLENBQUNDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQ2YsWUFBWSxDQUFDeEcsSUFBSSxDQUFDdUgsR0FBRyxDQUFDLENBQUM7OztnQkFHekQsT0FBT0QsYUFBYTtlQUN2QixNQUFNO2dCQUNILE9BQU8sSUFBSSxDQUFDRyxhQUFhLENBQUN6SCxJQUFJLENBQUM7O1lBRXZDO1lBRVF5SCxhQUFhQSxDQUFDMUosS0FBVSxFQUFFMkosWUFBQSxHQUF1QixDQUFDO2NBQ3RELE9BQVEzSixLQUFLLEtBQUssSUFBSSxJQUFJQSxLQUFLLEtBQUtXLFNBQVMsSUFBSStDLEtBQUssQ0FBQzFELEtBQUssQ0FBQyxHQUFJMkosWUFBWSxHQUFHeEosTUFBTSxDQUFDSCxLQUFLLENBQUM7WUFDakc7O1VBQ0hOLE9BQUEsQ0FBQXdHLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4SUssTUFBZ0IwRCxxQkFBcUI7VUFJMUNsSyxPQUFBLENBQUFrSyxxQkFBQSxHQUFBQSxxQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNBRCxJQUFBaEMsT0FBQSxHQUFBcEcsT0FBQTtVQUVNLE1BQU9xRSxZQUFZO1lBQ3hCLENBQUFMLE1BQU87WUFDUCxDQUFBVCxLQUFNO1lBQ04sQ0FBQWhELE1BQU87WUFDUCxJQUFJRyxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQTZDLEtBQU0sQ0FBQzdDLE9BQU87WUFDM0I7WUFDQSxJQUFJbUQsSUFBSUEsQ0FBQTtjQUNQLE1BQU1uRCxPQUFPLEdBQXNCLElBQUksQ0FBQyxDQUFBNkMsS0FBTSxDQUFDN0MsT0FBTztjQUN0RCxPQUFPQSxPQUFPLENBQUNtRCxJQUFJO1lBQ3BCO1lBQ0EsQ0FBQXJGLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLElBQUlnRixJQUFJQSxDQUFBO2NBQ1AsT0FBTyxJQUFJLENBQUMsQ0FBQUQsS0FBTSxDQUFDQyxJQUFJO1lBQ3hCO1lBQ0E7OztZQUdBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxNQUFNakQsT0FBTyxHQUFzQixJQUFJLENBQUNBLE9BQU87Y0FDL0MsT0FBTyxPQUFPQSxPQUFPLEVBQUVpRCxNQUFNLEtBQUssUUFBUSxHQUFHLENBQUNqRCxPQUFPLEVBQUVpRCxNQUFNLENBQUMsR0FBR2pELE9BQU8sRUFBRWlELE1BQU07WUFDakY7WUFFQSxJQUFJRCxVQUFVQSxDQUFBO2NBQ2IsSUFBSSxPQUFPLElBQUksQ0FBQyxDQUFBSCxLQUFNLENBQUM3QyxPQUFPLEtBQUssUUFBUSxFQUFFO2NBQzdDLE1BQU1BLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQTZDLEtBQU0sQ0FBQzdDLE9BQTRCO2NBQ3hELE9BQU9BLE9BQU8sQ0FBQ2dELFVBQVU7WUFDMUI7WUFFQSxDQUFBMkMsVUFBVztZQUNYLENBQUF2QyxTQUFVLEdBQWEsRUFBRTtZQUN6QixJQUFJQSxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUMsQ0FBQUEsU0FBVTtZQUN2QjtZQUVBLENBQUF3QyxLQUFNO1lBQ04sQ0FBQUMsSUFBSztZQUVMLENBQUExRCxNQUFPO1lBRVAsQ0FBQXdGLG9CQUFxQixHQUFHLEtBQUs7WUFDN0I3SCxZQUFZcUMsTUFBTSxFQUFFbUIsTUFBTSxFQUFFVCxLQUFLO2NBQ2hDLElBQUksQ0FBQyxDQUFBVixNQUFPLEdBQUdBLE1BQU07Y0FDckIsSUFBSSxDQUFDLENBQUFtQixNQUFPLEdBQUdBLE1BQU07Y0FDckIsSUFBSSxDQUFDLENBQUFULEtBQU0sR0FBR0EsS0FBSztjQUNuQixJQUFJLENBQUMsQ0FBQStDLEtBQU0sR0FBRy9DLEtBQUssQ0FBQytDLEtBQUs7Y0FDekIsSUFBSSxDQUFDLENBQUFDLElBQUssR0FBR2hELEtBQUssQ0FBQ2dELElBQUk7Y0FDdkIsSUFBSSxDQUFDLENBQUFGLFVBQVcsR0FBRzlDLEtBQUssQ0FBQzhDLFVBQVU7Y0FFbkMsSUFBSSxDQUFDLENBQUFnQyxvQkFBcUIsR0FBRzlFLEtBQUssQ0FBQzhFLG9CQUFvQjtZQUN4RDtZQUVBdEgsVUFBVUEsQ0FBQTtjQUNULE1BQU07Z0JBQUVSO2NBQU0sQ0FBRSxHQUFHLElBQUksQ0FBQyxDQUFBc0MsTUFBTyxDQUFDdUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBN0IsS0FBTSxDQUFDO2NBQ3RELElBQUksQ0FBQyxDQUFBaEQsTUFBTyxHQUFHQSxNQUFNO2NBQ3JCLE1BQU11RCxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUF2RCxNQUFPLENBQUMrSCxNQUFNLENBQUNqRyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsSUFBSSxLQUFLLFVBQVUsQ0FBQyxDQUFDdUMsR0FBRyxDQUFDZ0QsSUFBSSxJQUFJQSxJQUFJLENBQUNySixLQUFLLENBQUM7Y0FDakcsSUFBSSxDQUFDLENBQUFzRixTQUFVLEdBQUdBLFNBQVM7Y0FDM0IsTUFBTXlFLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQTFGLE1BQU8sQ0FBQytCLFNBQVMsQ0FBQ2QsU0FBUyxDQUFDO2NBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQXVFLG9CQUFxQixFQUFFRSxNQUFNLENBQUN4QyxPQUFPLENBQUN5QyxLQUFLLElBQUc7Z0JBQ3ZELElBQUksQ0FBQ3JKLFNBQVMsQ0FBQyxDQUFDQyxRQUFRLENBQUNvSixLQUFLLENBQUMsRUFBRTtrQkFDaEM7O2dCQUdEQSxLQUFLLENBQUMvQixFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ3BCLFNBQVMsQ0FBQ3FCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztjQUM5QyxDQUFDLENBQUM7WUFFSDtZQUVBLE1BQU1yQixTQUFTQSxDQUFBO2NBQ2QsTUFBTXZCLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQUEsU0FBVTtjQUVqQyxNQUFNMEMsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFBeEMsTUFBTyxDQUFDaUIsSUFBSSxDQUFDQyxRQUFRLENBQUMsSUFBSSxDQUFDMUIsSUFBSSxDQUFDO2NBQzFELElBQUlrQyxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQTdDLE1BQU8sQ0FBQzRDLFNBQVMsQ0FBQzNCLFNBQVMsQ0FBQztjQUNwRCxNQUFNeUUsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFBMUYsTUFBTyxDQUFDK0IsU0FBUyxDQUFDZCxTQUFTLENBQUM7Y0FFaEQsTUFBTXpFLEtBQUssR0FBSWtKLE1BQWdCLENBQUNwSyxLQUFLLENBQUNxSyxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUVySixTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUNDLFFBQVEsQ0FBQ29KLEtBQUssQ0FBQ2hLLEtBQUssQ0FBQyxDQUFDO2NBRTNGLElBQUlhLEtBQUssRUFBRTtnQkFDVjtnQkFDQSxJQUFJbUgsWUFBWSxFQUFFQSxZQUFZLENBQUMxRixHQUFHLENBQUM7a0JBQUV0QyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUE2SCxVQUFXLElBQUk7Z0JBQUUsQ0FBRSxDQUFDO2dCQUNyRSxJQUFJLENBQUMsQ0FBQTdILEtBQU0sR0FBR1csU0FBUztnQkFDdkI7O2NBR0QsSUFBSTtnQkFDSCxJQUFJUSxNQUFNLEdBQUc0SSxNQUFNLENBQUN6RyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzFELElBQUksQ0FBQ3lKLElBQUksSUFBSSxJQUFJLENBQUNuSCxPQUFPLENBQUMrSCxRQUFRLEVBQUUsQ0FBQ3JKLFFBQVEsQ0FBQ3lJLElBQUksQ0FBQyxDQUFDLEdBQUdVLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQy9KLEtBQUssR0FBRyxJQUFBNEgsT0FBQSxDQUFBM0QsS0FBSyxFQUFDLElBQUksQ0FBQy9CLE9BQWlCLENBQUMsQ0FBQ2lHLFFBQVEsQ0FBQ2pCLE1BQU0sQ0FBQztnQkFDakwsTUFBTTBCLGVBQWUsR0FBRyxDQUFDLENBQUNDLFFBQVEsRUFBRUEsUUFBUSxFQUFFbEksU0FBUyxFQUFFLElBQUksRUFBRTJHLEdBQUcsQ0FBQyxDQUFDMUcsUUFBUSxDQUFDTyxNQUFNLENBQUM7Z0JBQ3BGLElBQUksSUFBSSxDQUFDLENBQUEyRyxLQUFNLElBQUksQ0FBQ2MsZUFBZSxFQUFFekgsTUFBTSxHQUFHMkgsSUFBSSxDQUFDaEIsS0FBSyxDQUFDM0csTUFBTSxDQUFDO2dCQUNoRSxJQUFJLElBQUksQ0FBQyxDQUFBNEcsSUFBSyxJQUFJLENBQUNhLGVBQWUsRUFBRXpILE1BQU0sR0FBRzJILElBQUksQ0FBQ2YsSUFBSSxDQUFDNUcsTUFBTSxDQUFDO2dCQUM5RCxJQUFJLENBQUMsQ0FBQW5CLEtBQU0sR0FBRzRJLGVBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQWYsVUFBVyxHQUFHMUgsTUFBTSxDQUFDZ0IsTUFBTSxDQUFDNEgsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1RSxJQUFJZixZQUFZLEVBQUVBLFlBQVksQ0FBQzFGLEdBQUcsQ0FBQztrQkFBRXRDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQUE7Z0JBQU0sQ0FBRSxDQUFDO2dCQUUxRCxJQUFJLENBQUMsQ0FBQXFFLE1BQU8sQ0FBQzJDLE9BQU8sQ0FBQyxRQUFRLENBQUM7ZUFDOUIsQ0FBQyxPQUFPa0QsQ0FBQyxFQUFFO2dCQUNYcEQsT0FBTyxDQUFDNkIsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMzRCxJQUFJLEVBQUUsSUFBSSxDQUFDOUMsT0FBTyxFQUFFZ0YsTUFBTSxDQUFDO2dCQUN2REosT0FBTyxDQUFDcUQsS0FBSyxDQUFDRCxDQUFDLENBQUM7Z0JBQ2hCLE1BQU0sSUFBSWhKLEtBQUssQ0FBQyxrQ0FBa0NnSixDQUFDLENBQUNFLE9BQU8sSUFBSSxJQUFJLENBQUNwRixJQUFJLEVBQUUsQ0FBQzs7WUFFN0U7O1VBQ0F0RixPQUFBLENBQUFtRyxZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0dELElBQUE4QixZQUFBLEdBQUFuRyxPQUFBO1VBSUEsSUFBQW9HLE9BQUEsR0FBQXBHLE9BQUE7VUFFTSxNQUFPeUUsaUJBQWlCO1lBQzdCLENBQUFULE1BQU87WUFDUCxDQUFBVCxLQUFNO1lBQ04sQ0FBQThDLFVBQVc7WUFDWCxDQUFBOUYsTUFBTztZQUNQLElBQUlHLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQyxDQUFBNkMsS0FBTSxDQUFDN0MsT0FBTztZQUMzQjtZQUNBLElBQUltRCxJQUFJQSxDQUFBO2NBQ1AsTUFBTW5ELE9BQU8sR0FBc0IsSUFBSSxDQUFDLENBQUE2QyxLQUFNLENBQUM3QyxPQUFPO2NBQ3RELE9BQU9BLE9BQU8sQ0FBQ21ELElBQUk7WUFDcEI7WUFDQSxDQUFBckYsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsSUFBSWdGLElBQUlBLENBQUE7Y0FDUCxPQUFPLElBQUksQ0FBQyxDQUFBRCxLQUFNLENBQUNDLElBQUk7WUFDeEI7WUFDQTs7O1lBR0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE1BQU1qRCxPQUFPLEdBQXNCLElBQUksQ0FBQ0EsT0FBTztjQUMvQyxPQUFPLE9BQU9BLE9BQU8sRUFBRWlELE1BQU0sS0FBSyxRQUFRLEdBQUcsQ0FBQ2pELE9BQU8sRUFBRWlELE1BQU0sQ0FBQyxHQUFHakQsT0FBTyxFQUFFaUQsTUFBTTtZQUNqRjtZQUVBLElBQUlELFVBQVVBLENBQUE7Y0FDYixJQUFJLE9BQU8sSUFBSSxDQUFDLENBQUFILEtBQU0sQ0FBQzdDLE9BQU8sS0FBSyxRQUFRLEVBQUU7Y0FDN0MsTUFBTUEsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFBNkMsS0FBTSxDQUFDN0MsT0FBNEI7Y0FDeEQsT0FBT0EsT0FBTyxDQUFDZ0QsVUFBVTtZQUMxQjtZQUVBLENBQUFJLFNBQVUsR0FBYSxFQUFFO1lBQ3pCLElBQUlBLFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQyxDQUFBQSxTQUFVO1lBQ3ZCO1lBRUEsQ0FBQStFLFNBQVU7WUFDVixJQUFJQSxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUMsQ0FBQUEsU0FBVTtZQUN2QjtZQUVBLENBQUFSLG9CQUFxQixHQUFHLEtBQUs7WUFFN0IsQ0FBQXhGLE1BQU87WUFDUHJDLFlBQVlxQyxNQUFNLEVBQUVtQixNQUFNLEVBQUVULEtBQUs7Y0FDaEMsSUFBSSxDQUFDLENBQUFWLE1BQU8sR0FBR0EsTUFBTTtjQUNyQixJQUFJLENBQUMsQ0FBQW1CLE1BQU8sR0FBR0EsTUFBTTtjQUNyQixJQUFJLENBQUMsQ0FBQVQsS0FBTSxHQUFHQSxLQUFLO2NBQ25CLElBQUksQ0FBQyxDQUFBOEUsb0JBQXFCLEdBQUc5RSxLQUFLLENBQUM4RSxvQkFBb0I7Y0FDdkQsSUFBSSxDQUFDLENBQUFRLFNBQVUsR0FBR3RGLEtBQUssQ0FBQzdDLE9BQU8sQ0FBQ21JLFNBQVM7WUFDMUM7WUFFQTlILFVBQVVBLENBQUE7Y0FDVCxJQUFJLENBQUMyRyxLQUFLLENBQUNDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQXBFLEtBQU0sQ0FBQ0ksTUFBTSxDQUFDLEVBQUU7Z0JBQ3ZDLE1BQU0sSUFBSWpFLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQzs7Y0FFeEQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBMkksb0JBQXFCLElBQUksSUFBSSxDQUFDLENBQUFRLFNBQVUsSUFBSW5CLEtBQUssQ0FBQ0MsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBa0IsU0FBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBQSxTQUFVLENBQUMvRyxNQUFNLEVBQUU7Z0JBQ2pILE1BQU02QixNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUFkLE1BQU8sQ0FBQytCLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQWlFLFNBQVUsQ0FBQztnQkFDdERsRixNQUFNLENBQUNvQyxPQUFPLENBQUMrQyxLQUFLLElBQUc7a0JBQ3RCLElBQUksQ0FBQ0EsS0FBSyxFQUFFO2tCQUNaQSxLQUFLLENBQUNyQyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ3BCLFNBQVMsQ0FBQ3FCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDOUMsQ0FBQyxDQUFDOztjQUVILE1BQU02QixNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUExRixNQUFPLENBQUMrQixTQUFTLENBQUMsSUFBSSxDQUFDLENBQUFyQixLQUFNLENBQUNJLE1BQU0sQ0FBQztjQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUEwRSxvQkFBcUIsRUFBRUUsTUFBTSxDQUFDeEMsT0FBTyxDQUFDeUMsS0FBSyxJQUFJQSxLQUFLLENBQUMvQixFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ3BCLFNBQVMsQ0FBQ3FCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3hHO1lBR0FxQyxLQUFLQSxDQUFBLEdBQUs7WUFFVnBDLFFBQVFBLENBQUE7Y0FDUCxNQUFNakcsT0FBTyxHQUFzQixJQUFJLENBQUMsQ0FBQTZDLEtBQU0sQ0FBQzdDLE9BQU87Y0FFdEQsSUFBSSxPQUFPQSxPQUFPLEtBQUssUUFBUSxJQUFJLENBQUNBLE9BQU8sQ0FBQ2dELFVBQVUsRUFBRTtnQkFDdkQ0QixPQUFPLENBQUM0QixLQUFLLENBQUMsK0JBQStCLENBQUM7Z0JBQzlDLE9BQU8sSUFBSTs7Y0FFWixNQUFNcUIsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFBMUYsTUFBTyxDQUFDK0IsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBckIsS0FBTSxDQUFDSSxNQUFNLENBQUM7Y0FDekQsSUFBSXFGLFdBQVcsR0FBR1QsTUFBTSxDQUFDMUQsR0FBRyxDQUFDb0UsVUFBVSxJQUFHO2dCQUN6QyxJQUFJLENBQUNBLFVBQVUsRUFBRTtnQkFDakIsT0FBTztrQkFBRXpGLElBQUksRUFBRXlGLFVBQVUsQ0FBQ3pGLElBQUk7a0JBQUVoRixLQUFLLEVBQUV5SyxVQUFVLEdBQUdBLFVBQVUsQ0FBQ3pLLEtBQUssR0FBRztnQkFBSSxDQUFFO2NBQzlFLENBQUMsQ0FBQztjQUVGO2NBQ0EsTUFBTTBLLFdBQVcsR0FBR0YsV0FBVyxDQUFDRyxNQUFNLENBQUMsQ0FBQ0MsU0FBUyxFQUFFQyxZQUFZLEtBQUk7Z0JBQ2xFLElBQUksQ0FBQ0QsU0FBUyxFQUFFLE9BQU9DLFlBQVk7Z0JBRW5DO2dCQUNBLElBQUlsRCxZQUFBLENBQUE5SCxrQkFBa0IsQ0FBQ21CLFFBQVEsQ0FBQ2tCLE9BQU8sQ0FBQ21HLFNBQVMsRUFBRXVDLFNBQVMsQ0FBQzVLLEtBQUssRUFBRTZLLFlBQVksQ0FBQzdLLEtBQUssQ0FBQyxFQUFFO2tCQUN4RixPQUFPNEssU0FBUzs7Z0JBRWpCO2dCQUNBLE9BQU9DLFlBQVk7Y0FDcEIsQ0FBQyxFQUFFLElBQUksQ0FBQztjQUVSLElBQUlILFdBQVcsRUFBRTtnQkFDaEI7Z0JBQ0EsT0FBT0EsV0FBVztlQUNsQixNQUFNO2dCQUNOO2dCQUNBLE9BQU8sSUFBSTs7WUFFYjtZQUVBLE1BQU03RCxTQUFTQSxDQUFBO2NBQ2QsSUFBSWlFLE9BQU8sR0FBRyxJQUFJLENBQUMzQyxRQUFRLEVBQUU7Y0FFN0IsSUFBSSxDQUFDMkMsT0FBTyxJQUFJLENBQUNBLE9BQU8sRUFBRTlLLEtBQUssRUFBRTtnQkFDaEM7Z0JBQ0EsSUFBSSxDQUFDLENBQUFBLEtBQU0sR0FBRyxDQUFDO2dCQUNmOztjQUVEOzs7Y0FJQSxNQUFNK0ssWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFBaEcsS0FBTSxDQUFDN0MsT0FBNEI7Y0FDN0QsTUFBTThJLGFBQWEsR0FBR0QsWUFBWSxDQUFDN0YsVUFBVSxDQUFDNEYsT0FBTyxDQUFDOUYsSUFBSSxDQUFDO2NBQzNELE1BQU05QyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUFtQyxNQUFPLENBQUN1QyxTQUFTLENBQUM7Z0JBQUUxRSxPQUFPLEVBQUU4STtjQUFhLENBQUUsQ0FBQztjQUNsRSxNQUFNMUYsU0FBUyxHQUFHcEQsT0FBTyxDQUFDSCxNQUFNLENBQUMrSCxNQUFNLENBQUNqRyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsSUFBSSxLQUFLLFVBQVUsQ0FBQyxDQUFDdUMsR0FBRyxDQUFDZ0QsSUFBSSxJQUFJQSxJQUFJLENBQUNySixLQUFLLENBQUM7Y0FDbkcsTUFBTWtILE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBN0MsTUFBTyxDQUFDNEMsU0FBUyxDQUFDM0IsU0FBUyxDQUFDO2NBRXRELElBQUk7Z0JBQ0gsTUFBTTJGLElBQUksR0FBR3hELE1BQU0sQ0FBQ3dELElBQUksQ0FBQy9ELE1BQU0sQ0FBQztnQkFDaEMsTUFBTS9GLE1BQU0sR0FBRzhKLElBQUksQ0FBQzNILE1BQU0sS0FBSyxDQUFDLEdBQUc0RCxNQUFNLENBQUMrRCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFBckQsT0FBQSxDQUFBM0QsS0FBSyxFQUFDLElBQUksQ0FBQy9CLE9BQWlCLENBQUMsQ0FBQ2lHLFFBQVEsQ0FBQ2pCLE1BQU0sQ0FBQztnQkFFbkcsSUFBSSxDQUFDLENBQUFsSCxLQUFNLEdBQUcsQ0FBQyxDQUFDNkksUUFBUSxFQUFFQSxRQUFRLEVBQUVsSSxTQUFTLEVBQUUsSUFBSSxFQUFFMkcsR0FBRyxDQUFDLENBQUMxRyxRQUFRLENBQUNPLE1BQU0sQ0FBQyxHQUN2RSxJQUFJLENBQUMsQ0FBQTBHLFVBQVcsR0FDaEIxSCxNQUFNLENBQUNnQixNQUFNLENBQUM0SCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxDQUFBMUUsTUFBTyxDQUFDMkMsT0FBTyxDQUFDLFFBQVEsQ0FBQztnQkFDOUIsT0FBTyxJQUFJLENBQUMsQ0FBQWhILEtBQU07ZUFDbEIsQ0FBQyxPQUFPa0ssQ0FBQyxFQUFFO2dCQUNYcEQsT0FBTyxDQUFDNkIsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMzRCxJQUFJLEVBQUUsSUFBSSxDQUFDOUMsT0FBTyxFQUFFZ0YsTUFBTSxDQUFDO2dCQUN2RCxNQUFNLElBQUloRyxLQUFLLENBQUMsK0JBQStCLENBQUM7O1lBRWxEO1lBRUFnSyxjQUFjQSxDQUFDbkIsTUFBTTtjQUNwQixJQUFJb0IsSUFBSTtjQUNScEIsTUFBTSxDQUFDeEMsT0FBTyxDQUFDOEIsSUFBSSxJQUFHO2dCQUNyQixJQUFJbEosTUFBTSxDQUFDa0osSUFBSSxDQUFDckosS0FBSyxDQUFDLEdBQUdHLE1BQU0sQ0FBQ2dMLElBQUksRUFBRW5MLEtBQUssSUFBSSxDQUFDLENBQUMsRUFBRW1MLElBQUksR0FBRzlCLElBQUk7Y0FDL0QsQ0FBQyxDQUFDO2NBRUYsT0FBTzhCLElBQUk7WUFDWjs7VUFDQXpMLE9BQUEsQ0FBQXVHLGlCQUFBLEdBQUFBLGlCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pKRCxJQUFBbUYsZUFBQSxHQUFBNUosT0FBQTtVQUNBLElBQUFtRyxZQUFBLEdBQUFuRyxPQUFBO1VBRUEsSUFBQW9HLE9BQUEsR0FBQXBHLE9BQUE7VUFFTSxNQUFPc0Usa0JBQWtCO1lBQzlCLENBQUFOLE1BQU87WUFDUCxDQUFBVCxLQUFNO1lBQ04sQ0FBQThDLFVBQVc7WUFDWCxJQUFJM0YsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUE2QyxLQUFNLENBQUM3QyxPQUFPO1lBQzNCO1lBQ0EsSUFBSW1ELElBQUlBLENBQUE7Y0FDUCxNQUFNbkQsT0FBTyxHQUFzQixJQUFJLENBQUMsQ0FBQTZDLEtBQU0sQ0FBQzdDLE9BQU87Y0FDdEQsT0FBT0EsT0FBTyxDQUFDbUQsSUFBSTtZQUNwQjtZQUNBLENBQUFyRixLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxJQUFJZ0YsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUFELEtBQU0sQ0FBQ0MsSUFBSTtZQUN4QjtZQUNBOzs7WUFHQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsTUFBTWpELE9BQU8sR0FBc0IsSUFBSSxDQUFDQSxPQUFPO2NBQy9DLE9BQU8sT0FBT0EsT0FBTyxFQUFFaUQsTUFBTSxLQUFLLFFBQVEsR0FBRyxDQUFDakQsT0FBTyxFQUFFaUQsTUFBTSxDQUFDLEdBQUdqRCxPQUFPLEVBQUVpRCxNQUFNO1lBQ2pGO1lBRUEsSUFBSUQsVUFBVUEsQ0FBQTtjQUNiLElBQUksT0FBTyxJQUFJLENBQUMsQ0FBQUgsS0FBTSxDQUFDN0MsT0FBTyxLQUFLLFFBQVEsRUFBRTtjQUM3QyxNQUFNQSxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUE2QyxLQUFNLENBQUM3QyxPQUE0QjtjQUN4RCxPQUFPQSxPQUFPLENBQUNnRCxVQUFVO1lBQzFCO1lBRUE7OztZQUdBLENBQUFDLE1BQU87WUFFUCxDQUFBZCxNQUFPO1lBQ1AsQ0FBQTBELElBQUs7WUFDTCxDQUFBRCxLQUFNO1lBQ04sQ0FBQStCLG9CQUFxQixHQUFHLEtBQUs7WUFDN0I3SCxZQUFZcUMsTUFBTSxFQUFFbUIsTUFBTSxFQUFFVCxLQUFLO2NBQ2hDLElBQUksQ0FBQyxDQUFBVixNQUFPLEdBQUdBLE1BQU07Y0FDckIsSUFBSSxDQUFDLENBQUFtQixNQUFPLEdBQUdBLE1BQU07Y0FDckIsSUFBSSxDQUFDLENBQUFULEtBQU0sR0FBR0EsS0FBSztjQUNuQixJQUFJLENBQUMsQ0FBQStDLEtBQU0sR0FBRy9DLEtBQUssQ0FBQytDLEtBQUs7Y0FDekIsSUFBSSxDQUFDLENBQUFDLElBQUssR0FBR2hELEtBQUssQ0FBQ2dELElBQUk7Y0FDdkIsSUFBSSxDQUFDLENBQUFGLFVBQVcsR0FBRzlDLEtBQUssQ0FBQzhDLFVBQVU7Y0FFbkMsSUFBSTlDLEtBQUssQ0FBQzhFLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFBQSxvQkFBcUIsR0FBRzlFLEtBQUssQ0FBQzhFLG9CQUFvQjtZQUN4RjtZQUVBdEgsVUFBVUEsQ0FBQTtjQUNULElBQUk7Z0JBQ0gsTUFBTTtrQkFBRWtFO2dCQUFJLENBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQWpCLE1BQU87Z0JBRTdCLElBQUksQ0FBQyxJQUFJLENBQUNMLE1BQU0sRUFBRTtrQkFDakIsTUFBTSxJQUFJakUsS0FBSyxDQUFDLCtCQUErQixJQUFJLENBQUM4RCxJQUFJLEVBQUUsQ0FBQzs7Z0JBRTVELE1BQU1HLE1BQU0sR0FBRyxJQUFJLENBQUNBLE1BQU0sQ0FBQ2tCLEdBQUcsQ0FBQ3JCLElBQUksSUFBRztrQkFDckMsTUFBTTlDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQXNELE1BQU8sQ0FBQ2MsUUFBUSxDQUFDRSxHQUFHLENBQUN4QixJQUFJLENBQUM7a0JBQy9DLElBQUk5QyxPQUFPLEVBQUUsT0FBT0EsT0FBTztrQkFDM0IsTUFBTW9JLEtBQUssR0FBRzdELElBQUksQ0FBQ0MsUUFBUSxDQUFDMUIsSUFBSSxDQUFDO2tCQUNqQyxPQUFPc0YsS0FBSztnQkFDYixDQUFDLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLENBQUFuRixNQUFPLEdBQUdBLE1BQU07Z0JBRXJCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTBFLG9CQUFxQixFQUFFMUUsTUFBTSxDQUFDb0MsT0FBTyxDQUFDK0MsS0FBSyxJQUFHO2tCQUV2RCxJQUFJLENBQUNBLEtBQUssRUFBRTtvQkFDWCxNQUFNLElBQUlwSixLQUFLLENBQUMsU0FBUyxJQUFJLENBQUM4RCxJQUFJLHNCQUFzQnlCLElBQUksQ0FBQ3pCLElBQUksRUFBRSxDQUFDOztrQkFFckVzRixLQUFLLENBQUNyQyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ3BCLFNBQVMsQ0FBQ3FCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDOUMsQ0FBQyxDQUFDO2VBQ0YsQ0FBQyxPQUFPZ0MsQ0FBQyxFQUFFO1lBQ2I7WUFFQS9CLFFBQVFBLENBQUE7Y0FDUCxNQUFNakcsT0FBTyxHQUFzQixJQUFJLENBQUMsQ0FBQTZDLEtBQU0sQ0FBQzdDLE9BQU87Y0FDdEQsSUFBSW1KLGdCQUFnQixHQUFRO2dCQUFFbkosT0FBTyxFQUFFQSxPQUFPLENBQUNtRDtjQUFJLENBQUUsQ0FBQyxDQUFDO2NBQ3ZELElBQUluRCxPQUFPLENBQUNnRCxVQUFVLEVBQUU7Z0JBQ3ZCLEtBQUssTUFBTW1ELFNBQVMsSUFBSW5HLE9BQU8sQ0FBQ2dELFVBQVUsRUFBRTtrQkFDM0MsSUFBSXFELFlBQVksR0FBRyxLQUFLO2tCQUN4QixJQUFJRixTQUFTLENBQUNuRCxVQUFVLEVBQUU7b0JBQ3pCO29CQUNBcUQsWUFBWSxHQUFHRixTQUFTLENBQUNuRCxVQUFVLENBQUN2RixLQUFLLENBQUMyTCxZQUFZLElBQUc7c0JBQ3hELE1BQU1kLFdBQVcsR0FBR2MsWUFBWSxDQUFDbkcsTUFBTSxDQUFDa0IsR0FBRyxDQUFDa0YsU0FBUyxJQUFHO3dCQUN2RCxNQUFNakIsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFBbkYsTUFBTyxDQUFDcUcsSUFBSSxDQUFDQyxDQUFDLElBQUlBLENBQUMsQ0FBQ3pHLElBQUksS0FBS3VHLFNBQVMsQ0FBQzt3QkFDMUQsT0FBT2pCLEtBQUssR0FBR0EsS0FBSyxDQUFDdEssS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFBNkgsVUFBVztzQkFDOUMsQ0FBQyxDQUFDO3NCQUNGLE9BQU9GLFlBQUEsQ0FBQTlILGtCQUFrQixDQUFDeUIsV0FBVyxDQUFDZ0ssWUFBWSxDQUFDakQsU0FBUyxFQUFFbUMsV0FBVyxFQUFFYyxZQUFZLENBQUN0TCxLQUFLLENBQUM7b0JBQy9GLENBQUMsQ0FBQzttQkFDRixNQUFNO29CQUNOLE1BQU13SyxXQUFXLEdBQUduQyxTQUFTLENBQUNsRCxNQUFNLENBQUNrQixHQUFHLENBQUNrRixTQUFTLElBQUc7c0JBRXBELE1BQU1qQixLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUFuRixNQUFPLENBQUNxRyxJQUFJLENBQUNDLENBQUMsSUFBSUEsQ0FBQyxDQUFDekcsSUFBSSxLQUFLdUcsU0FBUyxDQUFDO3NCQUMxRCxPQUFPakIsS0FBSyxHQUFHQSxLQUFLLENBQUN0SyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUE2SCxVQUFXO29CQUM5QyxDQUFDLENBQUM7b0JBQ0YsTUFBTTZELGFBQWEsR0FFbEIsQ0FBQyxDQUFDckQsU0FBUyxDQUFDdkUsSUFBSSxJQUFJc0gsZUFBQSxDQUFBM0wsZUFBZSxDQUFDNEksU0FBUyxDQUFDdkUsSUFBSSxDQUFDLEdBQ2hEc0gsZUFBQSxDQUFBM0wsZUFBZSxDQUFDNEksU0FBUyxDQUFDdkUsSUFBSSxDQUFDLEdBQy9Cc0gsZUFBQSxDQUFBM0wsZUFBZSxDQUFDRyxJQUFJO29CQUN4QjtvQkFDQTJJLFlBQVksR0FBR1osWUFBQSxDQUFBOUgsa0JBQWtCLENBQUM2TCxhQUFhLENBQUMsQ0FBQ3JELFNBQVMsQ0FBQ0EsU0FBUyxFQUFFbUMsV0FBVyxFQUFFbkMsU0FBUyxDQUFDckksS0FBSyxDQUFDOztrQkFHcEcsSUFBSXVJLFlBQVksRUFBRTtvQkFDakI4QyxnQkFBZ0IsQ0FBQ25KLE9BQU8sR0FBR21HLFNBQVMsQ0FBQ25HLE9BQU87b0JBQzVDbUosZ0JBQWdCLENBQUNNLEVBQUUsR0FBR3RELFNBQVM7b0JBQy9COzs7O2NBSUgsT0FBT2dELGdCQUFnQjtZQUN4QjtZQUdBLE1BQU14RSxTQUFTQSxDQUFBO2NBQ2Q7Ozs7Y0FJQSxNQUFNM0UsT0FBTyxHQUFHLElBQUksQ0FBQ2lHLFFBQVEsRUFBRTtjQUUvQjtjQUNBLE1BQU07Z0JBQUVwRztjQUFNLENBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQXNDLE1BQU8sQ0FBQ3VDLFNBQVMsQ0FBQzFFLE9BQU8sQ0FBQztjQUNsRCxNQUFNb0QsU0FBUyxHQUFHdkQsTUFBTSxDQUFDK0gsTUFBTSxDQUFDakcsS0FBSyxJQUFJQSxLQUFLLENBQUNDLElBQUksS0FBSyxVQUFVLENBQUMsQ0FBQ3VDLEdBQUcsQ0FBQ2dELElBQUksSUFBSUEsSUFBSSxDQUFDckosS0FBSyxDQUFDO2NBQzNGLE1BQU1rSCxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQTdDLE1BQU8sQ0FBQzRDLFNBQVMsQ0FBQzNCLFNBQVMsQ0FBQztjQUN0RCxJQUFJO2dCQUNILE1BQU0yRixJQUFJLEdBQUd4RCxNQUFNLENBQUN3RCxJQUFJLENBQUMvRCxNQUFNLENBQUM7Z0JBQ2hDLElBQUkvRixNQUFNLEdBQUc4SixJQUFJLENBQUMzSCxNQUFNLEtBQUssQ0FBQyxHQUFHNEQsTUFBTSxDQUFDK0QsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBQXJELE9BQUEsQ0FBQTNELEtBQUssRUFBQy9CLE9BQU8sQ0FBQ0EsT0FBaUIsQ0FBQyxDQUFDaUcsUUFBUSxDQUFDakIsTUFBTSxDQUFDO2dCQUNwRyxNQUFNMEIsZUFBZSxHQUFHLENBQUMsQ0FBQ0MsUUFBUSxFQUFFQSxRQUFRLEVBQUVsSSxTQUFTLEVBQUUsSUFBSSxFQUFFMkcsR0FBRyxDQUFDLENBQUMxRyxRQUFRLENBQUNPLE1BQU0sQ0FBQztnQkFDcEYsSUFBSSxJQUFJLENBQUMsQ0FBQTJHLEtBQU0sSUFBSSxDQUFDYyxlQUFlLEVBQUV6SCxNQUFNLEdBQUcySCxJQUFJLENBQUNoQixLQUFLLENBQUMzRyxNQUFNLENBQUM7Z0JBQ2hFLElBQUksSUFBSSxDQUFDLENBQUE0RyxJQUFLLElBQUksQ0FBQ2EsZUFBZSxFQUFFekgsTUFBTSxHQUFHMkgsSUFBSSxDQUFDZixJQUFJLENBQUM1RyxNQUFNLENBQUM7Z0JBQzlELElBQUksQ0FBQyxDQUFBbkIsS0FBTSxHQUFHNEksZUFBZSxJQUFJLE9BQU96SCxNQUFNLEtBQUssUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFBMEcsVUFBVyxHQUFHMUgsTUFBTSxDQUFDZ0IsTUFBTSxDQUFDNEgsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUUxRyxJQUFJLENBQUMsQ0FBQTFFLE1BQU8sQ0FBQzJDLE9BQU8sQ0FBQyxRQUFRLENBQUM7Z0JBRTlCLE1BQU1nRCxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUF4RSxNQUFPLENBQUNpQixJQUFJLENBQUNDLFFBQVEsQ0FBQyxJQUFJLENBQUMxQixJQUFJLENBQUM7Z0JBQ25EZ0YsS0FBSyxJQUFJQSxLQUFLLENBQUMxSCxHQUFHLENBQUM7a0JBQUV0QyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUFBO2dCQUFNLENBQUUsQ0FBQztnQkFDMUMsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtlQUNsQixDQUFDLE9BQU9rSyxDQUFDLEVBQUU7Z0JBQ1hwRCxPQUFPLENBQUM2QixHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQzNELElBQUksRUFBRTlDLE9BQU8sQ0FBQ0EsT0FBTyxFQUFFZ0YsTUFBTSxDQUFDO2dCQUMxREosT0FBTyxDQUFDNEIsS0FBSyxDQUFDd0IsQ0FBQyxDQUFDO2dCQUNoQixNQUFNLElBQUloSixLQUFLLENBQUMsK0JBQStCLENBQUM7O1lBRWxEOztVQUNBeEIsT0FBQSxDQUFBb0csa0JBQUEsR0FBQUEsa0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekpELElBQUE2QixZQUFBLEdBQUFuRyxPQUFBO1VBR0EsSUFBQW9HLE9BQUEsR0FBQXBHLE9BQUE7VUFFTSxNQUFPMkUscUJBQXFCO1lBQ2pDLENBQUFYLE1BQU87WUFDUCxDQUFBVCxLQUFNO1lBQ04sQ0FBQWhELE1BQU87WUFDUCxJQUFJRyxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQTZDLEtBQU0sQ0FBQzdDLE9BQU87WUFDM0I7WUFDQSxJQUFJbUQsSUFBSUEsQ0FBQTtjQUNQLE1BQU1uRCxPQUFPLEdBQXNCLElBQUksQ0FBQyxDQUFBNkMsS0FBTSxDQUFDN0MsT0FBTztjQUN0RCxPQUFPQSxPQUFPLENBQUNtRCxJQUFJO1lBQ3BCO1lBQ0EsQ0FBQXJGLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLElBQUlnRixJQUFJQSxDQUFBO2NBQ1AsT0FBTyxJQUFJLENBQUMsQ0FBQUQsS0FBTSxDQUFDQyxJQUFJO1lBQ3hCO1lBQ0E7OztZQUdBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxNQUFNakQsT0FBTyxHQUFzQixJQUFJLENBQUNBLE9BQU87Y0FDL0MsT0FBTyxPQUFPQSxPQUFPLEVBQUVpRCxNQUFNLEtBQUssUUFBUSxHQUFHLENBQUNqRCxPQUFPLEVBQUVpRCxNQUFNLENBQUMsR0FBR2pELE9BQU8sRUFBRWlELE1BQU07WUFDakY7WUFFQSxJQUFJRCxVQUFVQSxDQUFBO2NBQ2IsSUFBSSxPQUFPLElBQUksQ0FBQyxDQUFBSCxLQUFNLENBQUM3QyxPQUFPLEtBQUssUUFBUSxFQUFFO2NBQzdDLE1BQU1BLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQTZDLEtBQU0sQ0FBQzdDLE9BQTRCO2NBQ3hELE9BQU9BLE9BQU8sQ0FBQ2dELFVBQVU7WUFDMUI7WUFFQSxDQUFBMkMsVUFBVztZQUNYLENBQUF2QyxTQUFVLEdBQWEsRUFBRTtZQUN6QixJQUFJQSxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUMsQ0FBQUEsU0FBVTtZQUN2QjtZQUVBLENBQUF3QyxLQUFNO1lBQ04sQ0FBQUMsSUFBSztZQUVMLENBQUExRCxNQUFPO1lBRVAsQ0FBQXdGLG9CQUFxQixHQUFHLEtBQUs7WUFDN0I3SCxZQUFZcUMsTUFBTSxFQUFFbUIsTUFBTSxFQUFFVCxLQUFLO2NBQ2hDLElBQUksQ0FBQyxDQUFBVixNQUFPLEdBQUdBLE1BQU07Y0FDckIsSUFBSSxDQUFDLENBQUFtQixNQUFPLEdBQUdBLE1BQU07Y0FDckIsSUFBSSxDQUFDLENBQUFULEtBQU0sR0FBR0EsS0FBSztjQUNuQixJQUFJLENBQUMsQ0FBQStDLEtBQU0sR0FBRy9DLEtBQUssQ0FBQytDLEtBQUs7Y0FDekIsSUFBSSxDQUFDLENBQUFDLElBQUssR0FBR2hELEtBQUssQ0FBQ2dELElBQUk7Y0FDdkIsSUFBSSxDQUFDLENBQUFGLFVBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQTlDLEtBQU0sQ0FBQzhDLFVBQVU7Y0FDekMsSUFBSSxDQUFDLENBQUFnQyxvQkFBcUIsR0FBRzlFLEtBQUssQ0FBQzhFLG9CQUFvQjtZQUN4RDtZQUVBdEgsVUFBVUEsQ0FBQTtjQUNULE1BQU1xSixVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUFwRyxNQUFPLENBQUNpQixJQUFJLENBQUNDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTNCLEtBQU0sQ0FBQzhHLGNBQWMsQ0FBQztjQUN6RSxJQUFJLENBQUNELFVBQVUsRUFBRTtnQkFDaEI5RSxPQUFPLENBQUM0QixLQUFLLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQTNELEtBQU0sQ0FBQzhHLGNBQWMsa0JBQWtCLENBQUM7Z0JBQ3BFOztjQUVERCxVQUFVLENBQUMzRCxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ3BCLFNBQVMsQ0FBQ3FCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuRDtZQUVBLE1BQU1yQixTQUFTQSxDQUFBO2NBRWQsTUFBTW1CLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQXhDLE1BQU8sQ0FBQ2lCLElBQUksQ0FBQ0MsUUFBUSxDQUFDLElBQUksQ0FBQzFCLElBQUksQ0FBQztjQUUxRCxNQUFNNEcsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFBcEcsTUFBTyxDQUFDaUIsSUFBSSxDQUFDQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUEzQixLQUFNLENBQUM4RyxjQUFjLENBQUM7Y0FFekUsSUFBSSxDQUFDRCxVQUFVLEVBQUU7Z0JBQ2hCOUUsT0FBTyxDQUFDNEIsS0FBSyxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUEzRCxLQUFNLENBQUM4RyxjQUFjLGtCQUFrQixDQUFDO2dCQUNwRTs7Y0FHRCxNQUFNQyxPQUFPLEdBQUdGLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTdHLEtBQU0sQ0FBQ2dILGtCQUFrQixDQUFDO2NBRTFELElBQUksQ0FBQzdDLEtBQUssQ0FBQ0MsT0FBTyxDQUFDMkMsT0FBTyxDQUFDLEVBQUU7Z0JBQzVCaEYsT0FBTyxDQUFDNEIsS0FBSyxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUEzRCxLQUFNLENBQUNnSCxrQkFBa0IsbUJBQW1CLENBQUM7Z0JBQzVFOztjQUdELE1BQU1sTCxLQUFLLEdBQUcsQ0FBQ2lMLE9BQU8sQ0FBQ3hJLE1BQU07Y0FDN0IsTUFBTXBCLE9BQU8sR0FBUSxJQUFJLENBQUMsQ0FBQTZDLEtBQU0sQ0FBQzdDLE9BQU87Y0FDeEMsSUFBSWtHLGVBQWUsR0FBR2xHLE9BQU8sRUFBRUEsT0FBTyxJQUFJQSxPQUFPO2NBQ2pELElBQUlyQixLQUFLLEVBQUU7Z0JBQ1Y7Z0JBQ0EsSUFBSW1ILFlBQVksRUFBRUEsWUFBWSxDQUFDMUYsR0FBRyxDQUFDO2tCQUFFdEMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFBNkgsVUFBVyxLQUFLbEgsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFBa0gsVUFBVyxHQUFHO2dCQUFFLENBQUUsQ0FBQztnQkFDckcsSUFBSSxDQUFDLENBQUE3SCxLQUFNLEdBQUdXLFNBQVM7Z0JBQ3ZCLElBQUksQ0FBQyxDQUFBMEQsTUFBTyxDQUFDMkMsT0FBTyxDQUFDLFFBQVEsQ0FBQztnQkFDOUI7O2NBR0QsSUFBSTtnQkFDSCxJQUFJZ0YsV0FBVyxHQUFvQixDQUFDO2dCQUNwQyxLQUFLLElBQUkzQyxJQUFJLElBQUl5QyxPQUFPLEVBQUU7a0JBQ3pCLElBQUk1SixPQUFPLENBQUNnRCxVQUFVLEVBQUU7b0JBQ3ZCLEtBQUssTUFBTW1ELFNBQVMsSUFBSW5HLE9BQU8sQ0FBQ2dELFVBQVUsRUFBRTtzQkFDM0MsTUFBTWpGLGVBQWUsR0FBR29KLElBQUksQ0FBQ2hCLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDO3NCQUNoRCxJQUFJQyxZQUFZLEdBQUdaLFlBQUEsQ0FBQTlILGtCQUFrQixDQUFDbUIsUUFBUSxDQUFDcUgsU0FBUyxDQUFDQSxTQUFTLEVBQUVwSSxlQUFlLEVBQUVvSSxTQUFTLENBQUNySSxLQUFLLENBQUM7c0JBQ3JHLElBQUl1SSxZQUFZLEVBQUU7d0JBQ2pCSCxlQUFlLEdBQUdDLFNBQVMsQ0FBQ25HLE9BQU87d0JBQ25DO3VCQUNBLE1BQU07d0JBQ05rRyxlQUFlLEdBQUdsRyxPQUFPLENBQUNtRCxJQUFJOzs7O2tCQUlqQyxNQUFNbUQsS0FBSyxHQUFHLElBQUksQ0FBQ0MsWUFBWSxDQUFDWSxJQUFJLENBQUM7a0JBQ3JDLElBQUlsSSxNQUFNLEdBQUcsSUFBQXlHLE9BQUEsQ0FBQTNELEtBQUssRUFBQ21FLGVBQXlCLENBQUMsQ0FBQ0QsUUFBUSxDQUFDSyxLQUFLLENBQUM7a0JBQzdELE1BQU1JLGVBQWUsR0FBRyxDQUFDLENBQUNDLFFBQVEsRUFBRUEsUUFBUSxFQUFFbEksU0FBUyxFQUFFLElBQUksRUFBRTJHLEdBQUcsQ0FBQyxDQUFDMUcsUUFBUSxDQUFDTyxNQUFNLENBQUM7a0JBQ3BGLElBQUksSUFBSSxDQUFDLENBQUEyRyxLQUFNLElBQUksQ0FBQ2MsZUFBZSxFQUFFekgsTUFBTSxHQUFHMkgsSUFBSSxDQUFDaEIsS0FBSyxDQUFDM0csTUFBTSxDQUFDO2tCQUNoRSxJQUFJLElBQUksQ0FBQyxDQUFBNEcsSUFBSyxJQUFJLENBQUNhLGVBQWUsRUFBRXpILE1BQU0sR0FBRzJILElBQUksQ0FBQ2YsSUFBSSxDQUFDNUcsTUFBTSxDQUFDO2tCQUM5RDZLLFdBQVcsR0FBR3BELGVBQWUsR0FBR29ELFdBQVcsR0FBRzdMLE1BQU0sQ0FBQzZMLFdBQVcsQ0FBQyxHQUFHN0wsTUFBTSxDQUFDZ0IsTUFBTSxDQUFDNEgsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDOztnQkFFOUYsTUFBTUgsZUFBZSxHQUFHLENBQUMsQ0FBQ0MsUUFBUSxFQUFFQSxRQUFRLEVBQUVsSSxTQUFTLEVBQUUsSUFBSSxFQUFFMkcsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDMUcsUUFBUSxDQUFDb0wsV0FBVyxDQUFDO2dCQUM3RixJQUFJLENBQUMsQ0FBQWhNLEtBQU0sR0FBRzRJLGVBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQWYsVUFBVyxHQUFHbUUsV0FBVztnQkFDOUQsSUFBSWhFLFlBQVksRUFBRUEsWUFBWSxDQUFDMUYsR0FBRyxDQUFDO2tCQUFFdEMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFBQTtnQkFBTSxDQUFFLENBQUM7Z0JBQzFELElBQUksQ0FBQyxDQUFBcUUsTUFBTyxDQUFDMkMsT0FBTyxDQUFDLFFBQVEsQ0FBQztlQUM5QixDQUFDLE9BQU9rRCxDQUFDLEVBQUU7Z0JBQ1hwRCxPQUFPLENBQUM2QixHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQzNELElBQUksRUFBRSxJQUFJLENBQUM5QyxPQUFPLENBQUM7Z0JBQy9DNEUsT0FBTyxDQUFDcUQsS0FBSyxDQUFDRCxDQUFDLENBQUM7Z0JBQ2hCLE1BQU0sSUFBSWhKLEtBQUssQ0FBQyxrQ0FBa0NnSixDQUFDLENBQUNFLE9BQU8sSUFBSSxJQUFJLENBQUNwRixJQUFJLEVBQUUsQ0FBQzs7WUFFN0U7WUFFUXlELFlBQVlBLENBQUN4RyxJQUFTO2NBQzdCLElBQUlpSCxLQUFLLENBQUNDLE9BQU8sQ0FBQ2xILElBQUksQ0FBQyxFQUFFO2dCQUN4QixPQUFPQSxJQUFJLENBQUNvRSxHQUFHLENBQUNnRCxJQUFJLElBQUksSUFBSSxDQUFDWixZQUFZLENBQUNZLElBQUksQ0FBQyxDQUFDO2VBQ2hELE1BQU0sSUFBSSxPQUFPcEgsSUFBSSxLQUFLLFFBQVEsSUFBSUEsSUFBSSxLQUFLLElBQUksRUFBRTtnQkFDckQsTUFBTXNILGFBQWEsR0FBUSxFQUFFO2dCQUM3QixLQUFLLE1BQU1DLEdBQUcsSUFBSXZILElBQUksRUFBRTtrQkFDdkIsSUFBSUEsSUFBSSxDQUFDd0gsY0FBYyxDQUFDRCxHQUFHLENBQUMsRUFBRTtvQkFDN0JELGFBQWEsQ0FBQ0MsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDZixZQUFZLENBQUN4RyxJQUFJLENBQUN1SCxHQUFHLENBQUMsQ0FBQzs7O2dCQUduRCxPQUFPRCxhQUFhO2VBQ3BCLE1BQU07Z0JBQ04sT0FBTyxJQUFJLENBQUNHLGFBQWEsQ0FBQ3pILElBQUksQ0FBQzs7WUFFakM7WUFFUXlILGFBQWFBLENBQUMxSixLQUFVLEVBQUUySixZQUFBLEdBQXVCLENBQUM7Y0FDekQsT0FBUTNKLEtBQUssS0FBSyxJQUFJLElBQUlBLEtBQUssS0FBS1csU0FBUyxJQUFJK0MsS0FBSyxDQUFDMUQsS0FBSyxDQUFDLEdBQUkySixZQUFZLEdBQUd4SixNQUFNLENBQUNILEtBQUssQ0FBQztZQUM5Rjs7VUFDQU4sT0FBQSxDQUFBeUcscUJBQUEsR0FBQUEscUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckpELElBQUF3QixZQUFBLEdBQUFuRyxPQUFBO1VBR0EsSUFBQW9HLE9BQUEsR0FBQXBHLE9BQUE7VUFFTSxNQUFPdUUsZUFBZTtZQUMzQixDQUFBUCxNQUFPO1lBQ1AsQ0FBQXFDLFVBQVc7WUFDWCxDQUFBOUMsS0FBTTtZQUNOLElBQUk3QyxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQTZDLEtBQU0sQ0FBQzdDLE9BQU87WUFDM0I7WUFDQSxDQUFBbEMsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsSUFBSWdGLElBQUlBLENBQUE7Y0FDUCxPQUFPLElBQUksQ0FBQyxDQUFBRCxLQUFNLENBQUNDLElBQUk7WUFDeEI7WUFFQSxDQUFBcUYsU0FBVTtZQUNWLElBQUlBLFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQyxDQUFBQSxTQUFVO1lBQ3ZCO1lBQ0E7OztZQUdBLElBQUlsRixNQUFNQSxDQUFBO2NBQ1QsTUFBTWpELE9BQU8sR0FBc0IsSUFBSSxDQUFDQSxPQUFPO2NBQy9DLE9BQU8sT0FBT0EsT0FBTyxFQUFFaUQsTUFBTSxLQUFLLFFBQVEsR0FBRyxDQUFDakQsT0FBTyxFQUFFaUQsTUFBTSxDQUFDLEdBQUdqRCxPQUFPLEVBQUVpRCxNQUFNO1lBQ2pGO1lBRUEsSUFBSUQsVUFBVUEsQ0FBQTtjQUNiLElBQUksT0FBTyxJQUFJLENBQUMsQ0FBQUgsS0FBTSxDQUFDN0MsT0FBTyxLQUFLLFFBQVEsRUFBRTtjQUM3QyxNQUFNQSxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUE2QyxLQUFNLENBQUM3QyxPQUE0QjtjQUN4RCxPQUFPQSxPQUFPLENBQUNnRCxVQUFVO1lBQzFCO1lBRUEsQ0FBQWIsTUFBTztZQUNQLENBQUF4QyxPQUFRO1lBQ1IsQ0FBQW9LLFVBQVc7WUFDWCxDQUFBcEMsb0JBQXFCLEdBQUcsS0FBSztZQUM3QjdILFlBQVlxQyxNQUFNLEVBQUVtQixNQUFNLEVBQUVULEtBQUs7Y0FDaEMsSUFBSSxDQUFDLENBQUFWLE1BQU8sR0FBR0EsTUFBTTtjQUNyQixJQUFJLENBQUMsQ0FBQW1CLE1BQU8sR0FBR0EsTUFBTTtjQUNyQixJQUFJLENBQUMsQ0FBQVQsS0FBTSxHQUFHQSxLQUFLO2NBQ25CLElBQUksQ0FBQyxDQUFBc0YsU0FBVSxHQUFHdEYsS0FBSyxDQUFDN0MsT0FBTyxDQUFDbUksU0FBUztjQUN6QyxJQUFJLENBQUMsQ0FBQVIsb0JBQXFCLEdBQUc5RSxLQUFLLENBQUM4RSxvQkFBb0I7WUFDeEQ7WUFFQXRILFVBQVVBLENBQUE7Y0FDVCxNQUFNO2dCQUFFa0U7Y0FBSSxDQUFFLEdBQUcsSUFBSSxDQUFDLENBQUFqQixNQUFPO2NBQzdCLE1BQU1MLE1BQU0sR0FBRyxJQUFJK0csR0FBRyxFQUFVO2NBRWhDLElBQUksQ0FBQyxDQUFBRCxVQUFXLEdBQUcsSUFBSSxDQUFDLENBQUE1SCxNQUFPLENBQUMrQixTQUFTLENBQUMsSUFBSSxDQUFDakIsTUFBTSxDQUFDO2NBRXREOzs7OztjQUtBLElBQUksQ0FBQ0QsVUFBVSxDQUFDcUMsT0FBTyxDQUFDYyxTQUFTLElBQUc7Z0JBQ25DLElBQUksQ0FBQ0EsU0FBUyxDQUFDQSxTQUFTLEVBQUU7a0JBQ3pCLE1BQU0sSUFBSW5ILEtBQUssQ0FBQyxpRkFBaUYsQ0FBQzs7Z0JBRW5HLElBQUksQ0FBQ21ILFNBQVMsQ0FBQ2hILE1BQU0sRUFBRTtrQkFDdEIsTUFBTSxJQUFJSCxLQUFLLENBQUMsOEVBQThFLENBQUM7O2dCQUdoRyxNQUFNVyxPQUFPLEdBQUd3RyxTQUFTLENBQUNoSCxNQUFNLENBQUNnRixHQUFHLENBQUNnRCxJQUFJLElBQUksSUFBSSxDQUFDLENBQUFoRixNQUFPLENBQUN1QyxTQUFTLENBQUN5QyxJQUFJLENBQUMsQ0FBQztnQkFDMUUsSUFBSSxDQUFDLENBQUF4SCxPQUFRLEdBQUdBLE9BQU87Z0JBQ3ZCQSxPQUFPLENBQUMwRixPQUFPLENBQUNuRixNQUFNLElBQUc7a0JBQ3hCQSxNQUFNLENBQUNMLE1BQU0sQ0FBQytILE1BQU0sQ0FBQ2pHLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxJQUFJLEtBQUssVUFBVSxDQUFDLENBQUN5RCxPQUFPLENBQUMxRCxLQUFLLElBQUlzQixNQUFNLENBQUNnSCxHQUFHLENBQUN0SSxLQUFLLENBQUM3RCxLQUFLLENBQUMsQ0FBQztnQkFDbkcsQ0FBQyxDQUFDO2NBQ0gsQ0FBQyxDQUFDO2NBRUZtRixNQUFNLENBQUNvQyxPQUFPLENBQUMrQyxLQUFLLElBQUc7Z0JBQ3RCLE1BQU1OLEtBQUssR0FBR3ZELElBQUksQ0FBQ0MsUUFBUSxDQUFDNEQsS0FBSyxDQUFDO2dCQUNsQyxJQUFJTixLQUFLLEVBQUVBLEtBQUssQ0FBQy9CLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDbUUsa0JBQWtCLENBQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Y0FDbEUsQ0FBQyxDQUFDO2NBRUYsSUFBSSxDQUFDa0Usa0JBQWtCLEVBQUU7Y0FDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBdkMsb0JBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUFvQyxVQUFXLENBQUMxRSxPQUFPLENBQUM4QixJQUFJLElBQUlBLElBQUksQ0FBQ3BCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDcEIsU0FBUyxDQUFDcUIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Y0FDL0csSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBMkIsb0JBQXFCLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQVEsU0FBVSxJQUFJbkIsS0FBSyxDQUFDQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUFrQixTQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUFBLFNBQVUsQ0FBQy9HLE1BQU0sRUFBRTtnQkFDbkgsTUFBTTZCLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQWQsTUFBTyxDQUFDK0IsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBaUUsU0FBVSxDQUFDO2dCQUN0RGxGLE1BQU0sQ0FBQ29DLE9BQU8sQ0FBQytDLEtBQUssSUFBRztrQkFDdEIsSUFBSSxDQUFDQSxLQUFLLEVBQUU7a0JBQ1pBLEtBQUssQ0FBQ3JDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDb0UsWUFBWSxDQUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqRCxDQUFDLENBQUM7O1lBRUo7WUFFQW1FLFlBQVlBLENBQUE7Y0FDWCxJQUFJLENBQUMsQ0FBQUosVUFBVyxDQUFDMUUsT0FBTyxDQUFDK0MsS0FBSyxJQUFJLElBQUksQ0FBQ3pELFNBQVMsQ0FBQ3lELEtBQUssQ0FBQyxDQUFDO1lBQ3pEO1lBQ0E4QixrQkFBa0JBLENBQUE7Y0FDakIsSUFBSSxDQUFDLENBQUFILFVBQVcsQ0FBQzFFLE9BQU8sQ0FBQytDLEtBQUssSUFBRztnQkFDaEMsSUFBSSxDQUFDQSxLQUFLLEVBQUU7Z0JBQ1pBLEtBQUssQ0FBQ3JDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDcEIsU0FBUyxDQUFDcUIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2NBQzlDLENBQUMsQ0FBQztZQUNIO1lBRUEsTUFBTXJCLFNBQVNBLENBQUN5RCxLQUFLO2NBQ3BCLElBQUksQ0FBQ0EsS0FBSyxFQUFFO2NBQ1osTUFBTTtnQkFBRTdEO2NBQUksQ0FBRSxHQUFHLElBQUksQ0FBQyxDQUFBakIsTUFBTztjQUM3QixNQUFNdEQsT0FBTyxHQUFHLElBQUksQ0FBQ2lHLFFBQVEsQ0FBQ21DLEtBQUssQ0FBQ3RLLEtBQUssQ0FBQztjQUUxQyxJQUFJLENBQUNrQyxPQUFPLEVBQUU7Y0FFZCxNQUFNb0QsU0FBUyxHQUFHcEQsT0FBTyxDQUFDSCxNQUFNLENBQUMrSCxNQUFNLENBQUNqRyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsSUFBSSxLQUFLLFVBQVUsQ0FBQyxDQUFDdUMsR0FBRyxDQUFDZ0QsSUFBSSxJQUFJQSxJQUFJLENBQUNySixLQUFLLENBQUM7Y0FDbkcsTUFBTWtILE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBN0MsTUFBTyxDQUFDNEMsU0FBUyxDQUFDM0IsU0FBUyxDQUFDO2NBQ3RELE1BQU0wQyxZQUFZLEdBQUd2QixJQUFJLENBQUNDLFFBQVEsQ0FBQyxJQUFJLENBQUMxQixJQUFJLENBQUM7Y0FFN0MsSUFBSTtnQkFDSCxNQUFNaUcsSUFBSSxHQUFHeEQsTUFBTSxDQUFDd0QsSUFBSSxDQUFDL0QsTUFBTSxDQUFDO2dCQUNoQyxNQUFNL0YsTUFBTSxHQUFHOEosSUFBSSxDQUFDM0gsTUFBTSxLQUFLLENBQUMsR0FBRzRELE1BQU0sQ0FBQytELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUFyRCxPQUFBLENBQUEzRCxLQUFLLEVBQUMvQixPQUFPLENBQUNBLE9BQWlCLENBQUMsQ0FBQ2lHLFFBQVEsQ0FBQ2pCLE1BQU0sQ0FBQztnQkFDdEcsSUFBSSxDQUFDLENBQUFsSCxLQUFNLEdBQUcsQ0FBQyxDQUFDNkksUUFBUSxFQUFFQSxRQUFRLEVBQUVsSSxTQUFTLEVBQUUsSUFBSSxFQUFFMkcsR0FBRyxDQUFDLENBQUMxRyxRQUFRLENBQUNPLE1BQU0sQ0FBQyxHQUN2RSxJQUFJLENBQUMsQ0FBQTBHLFVBQVcsR0FDaEIxSCxNQUFNLENBQUNnQixNQUFNLENBQUM0SCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCZixZQUFZLElBQUlBLFlBQVksQ0FBQzFGLEdBQUcsQ0FBQztrQkFBRXRDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQUE7Z0JBQU0sQ0FBRSxDQUFDO2dCQUN4RCxJQUFJLENBQUMsQ0FBQXFFLE1BQU8sQ0FBQzJDLE9BQU8sQ0FBQyxRQUFRLENBQUM7ZUFDOUIsQ0FBQyxPQUFPa0QsQ0FBQyxFQUFFO2dCQUNYcEQsT0FBTyxDQUFDNkIsR0FBRyxDQUFDdUIsQ0FBQyxDQUFDO2dCQUNkLE1BQU0sSUFBSWhKLEtBQUssQ0FBQywrQkFBK0IsQ0FBQzs7WUFFbEQ7WUFFQWlILFFBQVFBLENBQUNuSSxLQUFLO2NBQ2IsSUFBSWtDLE9BQU8sR0FBR3ZCLFNBQVM7Y0FDdkIsSUFBSSxDQUFDLElBQUksRUFBRUEsU0FBUyxDQUFDLENBQUNDLFFBQVEsQ0FBQ1osS0FBSyxDQUFDLEVBQUU7Z0JBQ3RDOztjQUVELElBQUksQ0FBQ2tGLFVBQVUsQ0FBQ3FDLE9BQU8sQ0FBQzhCLElBQUksSUFBRztnQkFDOUIsTUFBTTtrQkFBRWhCLFNBQVM7a0JBQUVoSDtnQkFBTSxDQUFFLEdBQUdnSSxJQUFJO2dCQUNsQyxJQUFJLENBQUNoQixTQUFTLEVBQUU7a0JBQ2YsTUFBTSxJQUFJbkgsS0FBSyxDQUFDLGlGQUFpRixDQUFDOztnQkFFbkcsSUFBSSxDQUFDRyxNQUFNLEVBQUU7a0JBQ1osTUFBTSxJQUFJSCxLQUFLLENBQUMsOEVBQThFLENBQUM7O2dCQUVoRyxNQUFNb0wsS0FBSyxHQUFHakwsTUFBTSxDQUFDa0wsU0FBUyxDQUFDbEQsSUFBSSxJQUFJMUIsWUFBQSxDQUFBOUgsa0JBQWtCLENBQUNtQixRQUFRLENBQUNxSCxTQUFTLEVBQUVySSxLQUFLLEVBQUVxSixJQUFJLENBQUNySixLQUFLLENBQUMsQ0FBQztnQkFFakcsSUFBSXNNLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRXBLLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQW1DLE1BQU8sQ0FBQ3VDLFNBQVMsQ0FBQ3ZGLE1BQU0sQ0FBQ2lMLEtBQUssQ0FBQyxDQUFDO2NBQ2hFLENBQUMsQ0FBQztjQUVGLE9BQU9wSyxPQUFPO1lBQ2Y7O1VBQ0F4QyxPQUFBLENBQUFxRyxlQUFBLEdBQUFBLGVBQUEiLCJpZ25vcmVMaXN0IjpbXX0=