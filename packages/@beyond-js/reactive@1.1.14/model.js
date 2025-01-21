System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/events@0.0.7/events"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/events","0.0.7"],["@beyond-js/reactive","1.1.14"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/events@0.0.7/events', dep)],
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/@beyond-js/reactive/model.1.1.14.js
var model_1_1_14_exports = {};
__export(model_1_1_14_exports, {
  IReactiveConstructorSpecs: () => IReactiveConstructorSpecs,
  IReactiveProperties: () => IReactiveProperties,
  ReactiveModel: () => ReactiveModel,
  ReactiveModelPublic: () => ReactiveModelPublic,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  reactiveProps: () => reactiveProps
});
module.exports = __toCommonJS(model_1_1_14_exports);

// node_modules/@beyond-js/reactive/model/model.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/events@0.0.7/events"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/reactive@1.1.13/model"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/events/events", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./index", {
  hash: 2110209668,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ReactiveModel = void 0;
    var _events = require2("@beyond-js/events/events");
    class ReactiveModel2 extends _events.Events {
      schema;
      #isReactive = true;
      get isReactive() {
        return this.#isReactive;
      }
      fetching;
      fetched = false;
      processing = false;
      ready = false;
      processed = false;
      properties;
      loaded = false;
      #initialValues = {};
      get isUnpublished() {
        const properties = this.getProperties();
        return Object.keys(properties).some(prop => {
          if (prop === "id" || typeof prop === "object") return false;
          return properties[prop] !== this.#initialValues[prop];
        });
      }
      constructor(specs = {}) {
        super();
        this.reactiveProps(["fetching", "fetched", "processing", "processed", "loaded", "ready"]);
        if (specs.properties && Array.isArray(specs.properties)) {
          this.properties = specs.properties;
        }
        if (specs) this.initialValues(specs);
      }
      initialValues(values) {
        if (!values) return this.#initialValues;
        let data = {
          ...values
        };
        delete data.properties;
        this.#set(data);
        this.#initialValues = data;
      }
      reactiveProps(props) {
        for (const propKey of props) {
          const descriptor = Object.getOwnPropertyDescriptor(this, propKey);
          const initialValue = descriptor ? descriptor.value : void 0;
          this.defineReactiveProp(propKey, initialValue);
        }
      }
      defineReactiveProp(propKey, initialValue) {
        const privatePropKey = `__${String(propKey)}`;
        Object.defineProperty(this, propKey, {
          get() {
            if (!this.hasOwnProperty(privatePropKey)) {
              this[privatePropKey] = initialValue;
            }
            return this[privatePropKey];
          },
          set(newVal) {
            if (newVal === this[privatePropKey]) return;
            this[privatePropKey] = newVal;
            this.triggerEvent();
          },
          enumerable: true,
          configurable: true
        });
      }
      triggerEvent = (event = "change") => {
        globalThis.setTimeout(() => {
          this.trigger(event);
        }, 0);
      };
      #set(properties) {
        let updated = false;
        try {
          Object.keys(properties).forEach(prop => {
            if (!this.properties || !this.properties.includes(prop)) return;
            const sameObject = typeof properties[prop] === "object" && JSON.stringify(properties[prop]) === JSON.stringify(this[prop]);
            if (this[prop] === properties[prop] || sameObject) return;
            const descriptor = Object.getOwnPropertyDescriptor(this, prop);
            if (descriptor?.set) return;
            this[prop] = properties[prop];
            updated = true;
          });
        } catch (e) {
          throw new Error(`Error setting properties: ${e}`);
        } finally {
          if (updated) this.triggerEvent();
        }
      }
      set(properties) {
        this.#set(properties);
      }
      getProperties() {
        const props = {};
        const properties = this.properties || this.skeleton;
        properties.forEach(property => {
          if (typeof property === "object") {
            if (!property.hasOwnProperty("name")) return;
            const collection = property;
            if (collection.type === "collection") {
              props[property.name] = this[property.name].items.map(item => item.getProperties());
              return;
            }
            props[property.name] = this[property.name];
          }
          let name = property;
          props[name] = this[name];
        });
        return props;
      }
    }
    exports.ReactiveModel = ReactiveModel2;
  }
});
ims.set("./interfaces/initial-values", {
  hash: 3875886425,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./interfaces/reactive-constructor-specs", {
  hash: 383762538,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./interfaces/reactive-props", {
  hash: 2165090548,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./interfaces/reactive-public-props", {
  hash: 1896226094,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./property", {
  hash: 1263213095,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.defineReactiveProp = defineReactiveProp;
    exports.reactiveProps = reactiveProps2;
    function _defineReactiveProp(target, propKey, initialValue) {
      const privatePropKey = `__${String(propKey)}`;
      Object.defineProperty(target, propKey, {
        get() {
          if (!target.hasOwnProperty(privatePropKey)) {
            target[privatePropKey] = initialValue;
          }
          return target[privatePropKey];
        },
        set(newVal) {
          if (newVal === target[privatePropKey]) return;
          target[privatePropKey] = newVal;
          target.triggerEvent();
        },
        enumerable: true,
        configurable: true
      });
    }
    function reactiveProps2(props) {
      return function (target) {
        const targetProto = "prototype" in target ? target.prototype : target;
        for (const propKey of props) {
          const descriptor = Object.getOwnPropertyDescriptor(targetProto, propKey);
          const initialValue = descriptor ? descriptor.value : void 0;
          defineReactiveProp(targetProto, propKey, initialValue);
        }
      };
    }
    function defineReactiveProp(target, propKey, initialValue) {
      const privatePropKey = `__${String(propKey)}`;
      Object.defineProperty(target, propKey, {
        get() {
          if (!target.hasOwnProperty(privatePropKey)) {
            target[privatePropKey] = initialValue;
          }
          return target[privatePropKey];
        },
        set(newVal) {
          target.setReactiveProp(propKey, newVal);
        },
        enumerable: true,
        configurable: true
      });
    }
  }
});
__pkg.exports.descriptor = [{
  "im": "./index",
  "from": "ReactiveModel",
  "name": "ReactiveModel"
}, {
  "im": "./interfaces/reactive-constructor-specs",
  "from": "IReactiveConstructorSpecs",
  "name": "IReactiveConstructorSpecs"
}, {
  "im": "./interfaces/reactive-props",
  "from": "IReactiveProperties",
  "name": "IReactiveProperties"
}, {
  "im": "./interfaces/reactive-public-props",
  "from": "ReactiveModelPublic",
  "name": "ReactiveModelPublic"
}, {
  "im": "./property",
  "from": "reactiveProps",
  "name": "reactiveProps"
}];
var ReactiveModel, IReactiveConstructorSpecs, IReactiveProperties, ReactiveModelPublic, reactiveProps;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "ReactiveModel") && (ReactiveModel = require2 ? require2("./index").ReactiveModel : value);
  (require2 || prop === "IReactiveConstructorSpecs") && (IReactiveConstructorSpecs = require2 ? require2("./interfaces/reactive-constructor-specs").IReactiveConstructorSpecs : value);
  (require2 || prop === "IReactiveProperties") && (IReactiveProperties = require2 ? require2("./interfaces/reactive-props").IReactiveProperties : value);
  (require2 || prop === "ReactiveModelPublic") && (ReactiveModelPublic = require2 ? require2("./interfaces/reactive-public-props").ReactiveModelPublic : value);
  (require2 || prop === "reactiveProps") && (reactiveProps = require2 ? require2("./property").reactiveProps : value);
};
var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;
  this.off = (event, listener) => void 0;
}();
__pkg.initialise(ims);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0aXZlL21vZGVsLjEuMS4xNC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0aXZlL21vZGVsL19fc291cmNlcy9tb2RlbC9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0aXZlL21vZGVsL19fc291cmNlcy9tb2RlbC9pbml0aWFsLXZhbHVlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0aXZlL21vZGVsL19fc291cmNlcy9tb2RlbC9yZWFjdGl2ZS1jb25zdHJ1Y3Rvci1zcGVjcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0aXZlL21vZGVsL19fc291cmNlcy9tb2RlbC9yZWFjdGl2ZS1wcm9wcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0aXZlL21vZGVsL19fc291cmNlcy9tb2RlbC9yZWFjdGl2ZS1wdWJsaWMtcHJvcHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9tb2RlbC9fX3NvdXJjZXMvbW9kZWwvcHJvcGVydHkudHMiXSwibmFtZXMiOlsibW9kZWxfMV8xXzE0X2V4cG9ydHMiLCJfX2V4cG9ydCIsIklSZWFjdGl2ZUNvbnN0cnVjdG9yU3BlY3MiLCJJUmVhY3RpdmVQcm9wZXJ0aWVzIiwiUmVhY3RpdmVNb2RlbCIsIlJlYWN0aXZlTW9kZWxQdWJsaWMiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJyZWFjdGl2ZVByb3BzIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9ldmVudHMiLCJyZXF1aXJlMiIsIlJlYWN0aXZlTW9kZWwyIiwiRXZlbnRzIiwic2NoZW1hIiwiaXNSZWFjdGl2ZSIsImZldGNoaW5nIiwiZmV0Y2hlZCIsInByb2Nlc3NpbmciLCJyZWFkeSIsInByb2Nlc3NlZCIsInByb3BlcnRpZXMiLCJsb2FkZWQiLCJpbml0aWFsVmFsdWVzIiwiaXNVbnB1Ymxpc2hlZCIsImdldFByb3BlcnRpZXMiLCJPYmplY3QiLCJrZXlzIiwic29tZSIsInByb3AiLCJjb25zdHJ1Y3RvciIsInNwZWNzIiwiQXJyYXkiLCJpc0FycmF5IiwidmFsdWVzIiwiZGF0YSIsInNldCIsInByb3BzIiwicHJvcEtleSIsImRlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJpbml0aWFsVmFsdWUiLCJ2YWx1ZSIsImRlZmluZVJlYWN0aXZlUHJvcCIsInByaXZhdGVQcm9wS2V5IiwiU3RyaW5nIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJoYXNPd25Qcm9wZXJ0eSIsIm5ld1ZhbCIsInRyaWdnZXJFdmVudCIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJldmVudCIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwidHJpZ2dlciIsIiNzZXQiLCJ1cGRhdGVkIiwiZm9yRWFjaCIsImluY2x1ZGVzIiwic2FtZU9iamVjdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJlIiwiRXJyb3IiLCJza2VsZXRvbiIsInByb3BlcnR5IiwiY29sbGVjdGlvbiIsInR5cGUiLCJuYW1lIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiX2RlZmluZVJlYWN0aXZlUHJvcCIsInRhcmdldCIsInJlYWN0aXZlUHJvcHMyIiwidGFyZ2V0UHJvdG8iLCJwcm90b3R5cGUiLCJzZXRSZWFjdGl2ZVByb3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxvQkFBQTtFQUFBRSx5QkFBQSxFQUFBQSxDQUFBLEtBQUFBLHlCQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxtQkFBQTtFQUFBQyxZQUFB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RUFBa0JHLFlBQUEsRUFBd0I7TUFDbkcsTUFBTUcsY0FBQSxHQUFpQixLQUFLQyxNQUFBLENBQU9QLE9BQU87TUFFMUNaLE1BQUEsQ0FBT29CLGNBQUEsQ0FBZTZCLE1BQUEsRUFBUXJDLE9BQUEsRUFBUztRQUN0Q1MsSUFBQSxFQUFHO1VBQ0YsSUFBSSxDQUFDNEIsTUFBQSxDQUFPM0IsY0FBQSxDQUFlSixjQUFjLEdBQUc7WUFDM0MrQixNQUFBLENBQU8vQixjQUFBLElBQWtCSCxZQUFBOztVQUUxQixPQUFPa0MsTUFBQSxDQUFPL0IsY0FBQTtRQUNmO1FBQ0FSLElBQUlhLE1BQUEsRUFBa0I7VUFDckIsSUFBSUEsTUFBQSxLQUFXMEIsTUFBQSxDQUFPL0IsY0FBQSxHQUFpQjtVQUN2QytCLE1BQUEsQ0FBTy9CLGNBQUEsSUFBa0JLLE1BQUE7VUFDekIwQixNQUFBLENBQU96QixZQUFBLENBQVk7UUFDcEI7UUFDQUMsVUFBQSxFQUFZO1FBQ1pDLFlBQUEsRUFBYztPQUNkO0lBQ0Y7SUFDa0IsU0FBVXdCLGVBQzNCdkMsS0FBQSxFQUFxQjtNQUVyQixPQUFPLFVBQVVzQyxNQUFBLEVBQW9GO1FBQ3BHLE1BQU1FLFdBQUEsR0FBYyxlQUFlRixNQUFBLEdBQVNBLE1BQUEsQ0FBT0csU0FBQSxHQUFZSCxNQUFBO1FBRS9ELFdBQVdyQyxPQUFBLElBQVdELEtBQUEsRUFBTztVQUM1QixNQUFNRSxVQUFBLEdBQWFiLE1BQUEsQ0FBT2Msd0JBQUEsQ0FBeUJxQyxXQUFBLEVBQWF2QyxPQUFPO1VBQ3ZFLE1BQU1HLFlBQUEsR0FBZUYsVUFBQSxHQUFhQSxVQUFBLENBQVdHLEtBQUEsR0FBUTtVQUVyREMsa0JBQUEsQ0FBbUJrQyxXQUFBLEVBQWF2QyxPQUFBLEVBQVNHLFlBQVk7O01BRXZEO0lBQ0Q7SUFFTSxTQUFVRSxtQkFBc0JnQyxNQUFBLEVBQTBCckMsT0FBQSxFQUFrQkcsWUFBQSxFQUF3QjtNQUN6RyxNQUFNRyxjQUFBLEdBQWlCLEtBQUtDLE1BQUEsQ0FBT1AsT0FBTztNQUUxQ1osTUFBQSxDQUFPb0IsY0FBQSxDQUFlNkIsTUFBQSxFQUFRckMsT0FBQSxFQUFTO1FBQ3RDUyxJQUFBLEVBQUc7VUFDRixJQUFJLENBQUM0QixNQUFBLENBQU8zQixjQUFBLENBQWVKLGNBQWMsR0FBRztZQUMzQytCLE1BQUEsQ0FBTy9CLGNBQUEsSUFBa0JILFlBQUE7O1VBRTFCLE9BQU9rQyxNQUFBLENBQU8vQixjQUFBO1FBQ2Y7UUFDQVIsSUFBSWEsTUFBQSxFQUFrQjtVQUNyQjBCLE1BQUEsQ0FBT0ksZUFBQSxDQUFnQnpDLE9BQUEsRUFBU1csTUFBTTtRQUN2QztRQUNBRSxVQUFBLEVBQVk7UUFDWkMsWUFBQSxFQUFjO09BQ2Q7SUFDRiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3dvcmtmbG93L291dCJ9