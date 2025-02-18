/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 208:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

html {
   margin: 0px;
   padding: 0px;
   box-sizing: border-box;
   display: block;

   width: 100vw;
   height: 100vh;
   /* border: 1px solid red; */
}

body {
   margin: 0;
   padding: 10px;
   box-sizing: border-box;
   display: block;

   /* display: flex;
   justify-content: center;
   align-items: center; */

   /* width: 100vw; */
   /* height: 100vh; */
   width: 100%;
   height: 100%;
   border: 1px solid green;

   display: flex;
   justify-content: center;
   align-items: center;

   /* background-color: rgb(155, 155, 155); */
   /* border: 20px solid rgb(86, 76, 76); */
   /* margin: 40px; */
   /* overflow: hidden; */
   /* display: flex; */
   /* justify-content: center; */
   /* align-items: center; */
}

#container {
   margin: 0;
   padding: 0px;
   box-sizing: border-box;
   display: block;

   width: 90vw;
   height: 90vh;
   overflow: hidden;

   border: 1px solid blue;
}

#mycanvas {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   display: block;
   /* cursor: none; */
   /* border: 5px solid blue; */
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 314:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 601:
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 72:
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 659:
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 540:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 56:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 825:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 113:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 630:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect;
(function (Reflect) {
    // Metadata Proposal
    // https://rbuckton.github.io/reflect-metadata/
    (function (factory) {
        var root = typeof globalThis === "object" ? globalThis :
            typeof __webpack_require__.g === "object" ? __webpack_require__.g :
                typeof self === "object" ? self :
                    typeof this === "object" ? this :
                        sloppyModeThis();
        var exporter = makeExporter(Reflect);
        if (typeof root.Reflect !== "undefined") {
            exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter, root);
        if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect;
        }
        function makeExporter(target, previous) {
            return function (key, value) {
                Object.defineProperty(target, key, { configurable: true, writable: true, value: value });
                if (previous)
                    previous(key, value);
            };
        }
        function functionThis() {
            try {
                return Function("return this;")();
            }
            catch (_) { }
        }
        function indirectEvalThis() {
            try {
                return (void 0, eval)("(function() { return this; })()");
            }
            catch (_) { }
        }
        function sloppyModeThis() {
            return functionThis() || indirectEvalThis();
        }
    })(function (exporter, root) {
        var hasOwn = Object.prototype.hasOwnProperty;
        // feature test for Symbol support
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
            // create an object in dictionary mode (a.k.a. "slow" mode in v8)
            create: supportsCreate
                ? function () { return MakeDictionary(Object.create(null)); }
                : supportsProto
                    ? function () { return MakeDictionary({ __proto__: null }); }
                    : function () { return MakeDictionary({}); },
            has: downLevel
                ? function (map, key) { return hasOwn.call(map, key); }
                : function (map, key) { return key in map; },
            get: downLevel
                ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
                : function (map, key) { return map[key]; },
        };
        // Load global or shim versions of Map, Set, and WeakMap
        var functionPrototype = Object.getPrototypeOf(Function);
        var _Map = typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        var registrySymbol = supportsSymbol ? Symbol.for("@reflect-metadata:registry") : undefined;
        var metadataRegistry = GetOrCreateMetadataRegistry();
        var metadataProvider = CreateMetadataProvider(metadataRegistry);
        /**
         * Applies a set of decorators to a property of a target object.
         * @param decorators An array of decorators.
         * @param target The target object.
         * @param propertyKey (Optional) The property key to decorate.
         * @param attributes (Optional) The property descriptor for the target key.
         * @remarks Decorators are applied in reverse order.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Example = Reflect.decorate(decoratorsArray, Example);
         *
         *     // property (on constructor)
         *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Object.defineProperty(Example, "staticMethod",
         *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
         *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
         *
         *     // method (on prototype)
         *     Object.defineProperty(Example.prototype, "method",
         *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
         *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
         *
         */
        function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                    throw new TypeError();
                if (IsNull(attributes))
                    attributes = undefined;
                propertyKey = ToPropertyKey(propertyKey);
                return DecorateProperty(decorators, target, propertyKey, attributes);
            }
            else {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsConstructor(target))
                    throw new TypeError();
                return DecorateConstructor(decorators, target);
            }
        }
        exporter("decorate", decorate);
        // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
        // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
        /**
         * A default metadata decorator factory that can be used on a class, class member, or parameter.
         * @param metadataKey The key for the metadata entry.
         * @param metadataValue The value for the metadata entry.
         * @returns A decorator function.
         * @remarks
         * If `metadataKey` is already defined for the target and target key, the
         * metadataValue for that key will be overwritten.
         * @example
         *
         *     // constructor
         *     @Reflect.metadata(key, value)
         *     class Example {
         *     }
         *
         *     // property (on constructor, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticProperty;
         *     }
         *
         *     // property (on prototype, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         property;
         *     }
         *
         *     // method (on constructor)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticMethod() { }
         *     }
         *
         *     // method (on prototype)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         method() { }
         *     }
         *
         */
        function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                    throw new TypeError();
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
        }
        exporter("metadata", metadata);
        /**
         * Define a unique metadata entry on the target.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param metadataValue A value that contains attached metadata.
         * @param target The target object on which to define metadata.
         * @param propertyKey (Optional) The property key for the target.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Reflect.defineMetadata("custom:annotation", options, Example);
         *
         *     // property (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
         *
         *     // method (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
         *
         *     // decorator factory as metadata-producing annotation.
         *     function MyAnnotation(options): Decorator {
         *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
         *     }
         *
         */
        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        exporter("defineMetadata", defineMetadata);
        /**
         * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        /**
         * Gets a value indicating whether the target object has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        /**
         * Gets the metadata keys defined on the target object or its prototype chain.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "method");
         *
         */
        function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        /**
         * Gets the unique metadata keys defined on the target object.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
         *
         */
        function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        /**
         * Deletes the metadata entry from the target object with the provided key.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata entry was found and deleted; otherwise, false.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.deleteMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            var provider = GetMetadataProvider(target, propertyKey, /*Create*/ false);
            if (IsUndefined(provider))
                return false;
            return provider.OrdinaryDeleteMetadata(metadataKey, target, propertyKey);
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsConstructor(decorated))
                        throw new TypeError();
                    target = decorated;
                }
            }
            return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target, propertyKey, descriptor);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsObject(decorated))
                        throw new TypeError();
                    descriptor = decorated;
                }
            }
            return descriptor;
        }
        // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
        function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
        }
        // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var provider = GetMetadataProvider(O, P, /*Create*/ false);
            if (IsUndefined(provider))
                return false;
            return ToBoolean(provider.OrdinaryHasOwnMetadata(MetadataKey, O, P));
        }
        // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
        function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryGetMetadata(MetadataKey, parent, P);
            return undefined;
        }
        // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var provider = GetMetadataProvider(O, P, /*Create*/ false);
            if (IsUndefined(provider))
                return;
            return provider.OrdinaryGetOwnMetadata(MetadataKey, O, P);
        }
        // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var provider = GetMetadataProvider(O, P, /*Create*/ true);
            provider.OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P);
        }
        // 3.1.6.1 OrdinaryMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
        function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null)
                return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0)
                return ownKeys;
            if (ownKeys.length <= 0)
                return parentKeys;
            var set = new _Set();
            var keys = [];
            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                var key = ownKeys_1[_i];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                var key = parentKeys_1[_a];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            return keys;
        }
        // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
        function OrdinaryOwnMetadataKeys(O, P) {
            var provider = GetMetadataProvider(O, P, /*create*/ false);
            if (!provider) {
                return [];
            }
            return provider.OrdinaryOwnMetadataKeys(O, P);
        }
        // 6 ECMAScript Data Types and Values
        // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
        function Type(x) {
            if (x === null)
                return 1 /* Null */;
            switch (typeof x) {
                case "undefined": return 0 /* Undefined */;
                case "boolean": return 2 /* Boolean */;
                case "string": return 3 /* String */;
                case "symbol": return 4 /* Symbol */;
                case "number": return 5 /* Number */;
                case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
                default: return 6 /* Object */;
            }
        }
        // 6.1.1 The Undefined Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
        function IsUndefined(x) {
            return x === undefined;
        }
        // 6.1.2 The Null Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
        function IsNull(x) {
            return x === null;
        }
        // 6.1.5 The Symbol Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
        function IsSymbol(x) {
            return typeof x === "symbol";
        }
        // 6.1.7 The Object Type
        // https://tc39.github.io/ecma262/#sec-object-type
        function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
        }
        // 7.1 Type Conversion
        // https://tc39.github.io/ecma262/#sec-type-conversion
        // 7.1.1 ToPrimitive(input [, PreferredType])
        // https://tc39.github.io/ecma262/#sec-toprimitive
        function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
                case 0 /* Undefined */: return input;
                case 1 /* Null */: return input;
                case 2 /* Boolean */: return input;
                case 3 /* String */: return input;
                case 4 /* Symbol */: return input;
                case 5 /* Number */: return input;
            }
            var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== undefined) {
                var result = exoticToPrim.call(input, hint);
                if (IsObject(result))
                    throw new TypeError();
                return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        // 7.1.1.1 OrdinaryToPrimitive(O, hint)
        // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
        function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
                var toString_1 = O.toString;
                if (IsCallable(toString_1)) {
                    var result = toString_1.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            else {
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var toString_2 = O.toString;
                if (IsCallable(toString_2)) {
                    var result = toString_2.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            throw new TypeError();
        }
        // 7.1.2 ToBoolean(argument)
        // https://tc39.github.io/ecma262/2016/#sec-toboolean
        function ToBoolean(argument) {
            return !!argument;
        }
        // 7.1.12 ToString(argument)
        // https://tc39.github.io/ecma262/#sec-tostring
        function ToString(argument) {
            return "" + argument;
        }
        // 7.1.14 ToPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-topropertykey
        function ToPropertyKey(argument) {
            var key = ToPrimitive(argument, 3 /* String */);
            if (IsSymbol(key))
                return key;
            return ToString(key);
        }
        // 7.2 Testing and Comparison Operations
        // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
        // 7.2.2 IsArray(argument)
        // https://tc39.github.io/ecma262/#sec-isarray
        function IsArray(argument) {
            return Array.isArray
                ? Array.isArray(argument)
                : argument instanceof Object
                    ? argument instanceof Array
                    : Object.prototype.toString.call(argument) === "[object Array]";
        }
        // 7.2.3 IsCallable(argument)
        // https://tc39.github.io/ecma262/#sec-iscallable
        function IsCallable(argument) {
            // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
            return typeof argument === "function";
        }
        // 7.2.4 IsConstructor(argument)
        // https://tc39.github.io/ecma262/#sec-isconstructor
        function IsConstructor(argument) {
            // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
            return typeof argument === "function";
        }
        // 7.2.7 IsPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-ispropertykey
        function IsPropertyKey(argument) {
            switch (Type(argument)) {
                case 3 /* String */: return true;
                case 4 /* Symbol */: return true;
                default: return false;
            }
        }
        function SameValueZero(x, y) {
            return x === y || x !== x && y !== y;
        }
        // 7.3 Operations on Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-objects
        // 7.3.9 GetMethod(V, P)
        // https://tc39.github.io/ecma262/#sec-getmethod
        function GetMethod(V, P) {
            var func = V[P];
            if (func === undefined || func === null)
                return undefined;
            if (!IsCallable(func))
                throw new TypeError();
            return func;
        }
        // 7.4 Operations on Iterator Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
        function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method))
                throw new TypeError(); // from Call
            var iterator = method.call(obj);
            if (!IsObject(iterator))
                throw new TypeError();
            return iterator;
        }
        // 7.4.4 IteratorValue(iterResult)
        // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
        function IteratorValue(iterResult) {
            return iterResult.value;
        }
        // 7.4.5 IteratorStep(iterator)
        // https://tc39.github.io/ecma262/#sec-iteratorstep
        function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
        }
        // 7.4.6 IteratorClose(iterator, completion)
        // https://tc39.github.io/ecma262/#sec-iteratorclose
        function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f)
                f.call(iterator);
        }
        // 9.1 Ordinary Object Internal Methods and Internal Slots
        // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
        // 9.1.1.1 OrdinaryGetPrototypeOf(O)
        // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
        function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype)
                return proto;
            // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
            // Try to determine the superclass constructor. Compatible implementations
            // must either set __proto__ on a subclass constructor to the superclass constructor,
            // or ensure each class has a valid `constructor` property on its prototype that
            // points back to the constructor.
            // If this is not the same as Function.[[Prototype]], then this is definately inherited.
            // This is the case when in ES6 or when using __proto__ in a compatible browser.
            if (proto !== functionPrototype)
                return proto;
            // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype)
                return proto;
            // If the constructor was not a function, then we cannot determine the heritage.
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function")
                return proto;
            // If we have some kind of self-reference, then we cannot determine the heritage.
            if (constructor === O)
                return proto;
            // we have a pretty good guess at the heritage.
            return constructor;
        }
        // Global metadata registry
        // - Allows `import "reflect-metadata"` and `import "reflect-metadata/no-conflict"` to interoperate.
        // - Uses isolated metadata if `Reflect` is frozen before the registry can be installed.
        /**
         * Creates a registry used to allow multiple `reflect-metadata` providers.
         */
        function CreateMetadataRegistry() {
            var fallback;
            if (!IsUndefined(registrySymbol) &&
                typeof root.Reflect !== "undefined" &&
                !(registrySymbol in root.Reflect) &&
                typeof root.Reflect.defineMetadata === "function") {
                // interoperate with older version of `reflect-metadata` that did not support a registry.
                fallback = CreateFallbackProvider(root.Reflect);
            }
            var first;
            var second;
            var rest;
            var targetProviderMap = new _WeakMap();
            var registry = {
                registerProvider: registerProvider,
                getProvider: getProvider,
                setProvider: setProvider,
            };
            return registry;
            function registerProvider(provider) {
                if (!Object.isExtensible(registry)) {
                    throw new Error("Cannot add provider to a frozen registry.");
                }
                switch (true) {
                    case fallback === provider: break;
                    case IsUndefined(first):
                        first = provider;
                        break;
                    case first === provider: break;
                    case IsUndefined(second):
                        second = provider;
                        break;
                    case second === provider: break;
                    default:
                        if (rest === undefined)
                            rest = new _Set();
                        rest.add(provider);
                        break;
                }
            }
            function getProviderNoCache(O, P) {
                if (!IsUndefined(first)) {
                    if (first.isProviderFor(O, P))
                        return first;
                    if (!IsUndefined(second)) {
                        if (second.isProviderFor(O, P))
                            return first;
                        if (!IsUndefined(rest)) {
                            var iterator = GetIterator(rest);
                            while (true) {
                                var next = IteratorStep(iterator);
                                if (!next) {
                                    return undefined;
                                }
                                var provider = IteratorValue(next);
                                if (provider.isProviderFor(O, P)) {
                                    IteratorClose(iterator);
                                    return provider;
                                }
                            }
                        }
                    }
                }
                if (!IsUndefined(fallback) && fallback.isProviderFor(O, P)) {
                    return fallback;
                }
                return undefined;
            }
            function getProvider(O, P) {
                var providerMap = targetProviderMap.get(O);
                var provider;
                if (!IsUndefined(providerMap)) {
                    provider = providerMap.get(P);
                }
                if (!IsUndefined(provider)) {
                    return provider;
                }
                provider = getProviderNoCache(O, P);
                if (!IsUndefined(provider)) {
                    if (IsUndefined(providerMap)) {
                        providerMap = new _Map();
                        targetProviderMap.set(O, providerMap);
                    }
                    providerMap.set(P, provider);
                }
                return provider;
            }
            function hasProvider(provider) {
                if (IsUndefined(provider))
                    throw new TypeError();
                return first === provider || second === provider || !IsUndefined(rest) && rest.has(provider);
            }
            function setProvider(O, P, provider) {
                if (!hasProvider(provider)) {
                    throw new Error("Metadata provider not registered.");
                }
                var existingProvider = getProvider(O, P);
                if (existingProvider !== provider) {
                    if (!IsUndefined(existingProvider)) {
                        return false;
                    }
                    var providerMap = targetProviderMap.get(O);
                    if (IsUndefined(providerMap)) {
                        providerMap = new _Map();
                        targetProviderMap.set(O, providerMap);
                    }
                    providerMap.set(P, provider);
                }
                return true;
            }
        }
        /**
         * Gets or creates the shared registry of metadata providers.
         */
        function GetOrCreateMetadataRegistry() {
            var metadataRegistry;
            if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
                metadataRegistry = root.Reflect[registrySymbol];
            }
            if (IsUndefined(metadataRegistry)) {
                metadataRegistry = CreateMetadataRegistry();
            }
            if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
                Object.defineProperty(root.Reflect, registrySymbol, {
                    enumerable: false,
                    configurable: false,
                    writable: false,
                    value: metadataRegistry
                });
            }
            return metadataRegistry;
        }
        function CreateMetadataProvider(registry) {
            // [[Metadata]] internal slot
            // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
            var metadata = new _WeakMap();
            var provider = {
                isProviderFor: function (O, P) {
                    var targetMetadata = metadata.get(O);
                    if (IsUndefined(targetMetadata))
                        return false;
                    return targetMetadata.has(P);
                },
                OrdinaryDefineOwnMetadata: OrdinaryDefineOwnMetadata,
                OrdinaryHasOwnMetadata: OrdinaryHasOwnMetadata,
                OrdinaryGetOwnMetadata: OrdinaryGetOwnMetadata,
                OrdinaryOwnMetadataKeys: OrdinaryOwnMetadataKeys,
                OrdinaryDeleteMetadata: OrdinaryDeleteMetadata,
            };
            metadataRegistry.registerProvider(provider);
            return provider;
            function GetOrCreateMetadataMap(O, P, Create) {
                var targetMetadata = metadata.get(O);
                var createdTargetMetadata = false;
                if (IsUndefined(targetMetadata)) {
                    if (!Create)
                        return undefined;
                    targetMetadata = new _Map();
                    metadata.set(O, targetMetadata);
                    createdTargetMetadata = true;
                }
                var metadataMap = targetMetadata.get(P);
                if (IsUndefined(metadataMap)) {
                    if (!Create)
                        return undefined;
                    metadataMap = new _Map();
                    targetMetadata.set(P, metadataMap);
                    if (!registry.setProvider(O, P, provider)) {
                        targetMetadata.delete(P);
                        if (createdTargetMetadata) {
                            metadata.delete(O);
                        }
                        throw new Error("Wrong provider for target.");
                    }
                }
                return metadataMap;
            }
            // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
            function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
                var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
                if (IsUndefined(metadataMap))
                    return false;
                return ToBoolean(metadataMap.has(MetadataKey));
            }
            // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
            function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
                var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
                if (IsUndefined(metadataMap))
                    return undefined;
                return metadataMap.get(MetadataKey);
            }
            // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
            function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
                var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
                metadataMap.set(MetadataKey, MetadataValue);
            }
            // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
            function OrdinaryOwnMetadataKeys(O, P) {
                var keys = [];
                var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
                if (IsUndefined(metadataMap))
                    return keys;
                var keysObj = metadataMap.keys();
                var iterator = GetIterator(keysObj);
                var k = 0;
                while (true) {
                    var next = IteratorStep(iterator);
                    if (!next) {
                        keys.length = k;
                        return keys;
                    }
                    var nextValue = IteratorValue(next);
                    try {
                        keys[k] = nextValue;
                    }
                    catch (e) {
                        try {
                            IteratorClose(iterator);
                        }
                        finally {
                            throw e;
                        }
                    }
                    k++;
                }
            }
            function OrdinaryDeleteMetadata(MetadataKey, O, P) {
                var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
                if (IsUndefined(metadataMap))
                    return false;
                if (!metadataMap.delete(MetadataKey))
                    return false;
                if (metadataMap.size === 0) {
                    var targetMetadata = metadata.get(O);
                    if (!IsUndefined(targetMetadata)) {
                        targetMetadata.delete(P);
                        if (targetMetadata.size === 0) {
                            metadata.delete(targetMetadata);
                        }
                    }
                }
                return true;
            }
        }
        function CreateFallbackProvider(reflect) {
            var defineMetadata = reflect.defineMetadata, hasOwnMetadata = reflect.hasOwnMetadata, getOwnMetadata = reflect.getOwnMetadata, getOwnMetadataKeys = reflect.getOwnMetadataKeys, deleteMetadata = reflect.deleteMetadata;
            var metadataOwner = new _WeakMap();
            var provider = {
                isProviderFor: function (O, P) {
                    var metadataPropertySet = metadataOwner.get(O);
                    if (!IsUndefined(metadataPropertySet) && metadataPropertySet.has(P)) {
                        return true;
                    }
                    if (getOwnMetadataKeys(O, P).length) {
                        if (IsUndefined(metadataPropertySet)) {
                            metadataPropertySet = new _Set();
                            metadataOwner.set(O, metadataPropertySet);
                        }
                        metadataPropertySet.add(P);
                        return true;
                    }
                    return false;
                },
                OrdinaryDefineOwnMetadata: defineMetadata,
                OrdinaryHasOwnMetadata: hasOwnMetadata,
                OrdinaryGetOwnMetadata: getOwnMetadata,
                OrdinaryOwnMetadataKeys: getOwnMetadataKeys,
                OrdinaryDeleteMetadata: deleteMetadata,
            };
            return provider;
        }
        /**
         * Gets the metadata provider for an object. If the object has no metadata provider and this is for a create operation,
         * then this module's metadata provider is assigned to the object.
         */
        function GetMetadataProvider(O, P, Create) {
            var registeredProvider = metadataRegistry.getProvider(O, P);
            if (!IsUndefined(registeredProvider)) {
                return registeredProvider;
            }
            if (Create) {
                if (metadataRegistry.setProvider(O, P, metadataProvider)) {
                    return metadataProvider;
                }
                throw new Error("Illegal state.");
            }
            return undefined;
        }
        // naive Map shim
        function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = /** @class */ (function () {
                function MapIterator(keys, values, selector) {
                    this._index = 0;
                    this._keys = keys;
                    this._values = values;
                    this._selector = selector;
                }
                MapIterator.prototype["@@iterator"] = function () { return this; };
                MapIterator.prototype[iteratorSymbol] = function () { return this; };
                MapIterator.prototype.next = function () {
                    var index = this._index;
                    if (index >= 0 && index < this._keys.length) {
                        var result = this._selector(this._keys[index], this._values[index]);
                        if (index + 1 >= this._keys.length) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        else {
                            this._index++;
                        }
                        return { value: result, done: false };
                    }
                    return { value: undefined, done: true };
                };
                MapIterator.prototype.throw = function (error) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    throw error;
                };
                MapIterator.prototype.return = function (value) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    return { value: value, done: true };
                };
                return MapIterator;
            }());
            var Map = /** @class */ (function () {
                function Map() {
                    this._keys = [];
                    this._values = [];
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                }
                Object.defineProperty(Map.prototype, "size", {
                    get: function () { return this._keys.length; },
                    enumerable: true,
                    configurable: true
                });
                Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
                Map.prototype.get = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    return index >= 0 ? this._values[index] : undefined;
                };
                Map.prototype.set = function (key, value) {
                    var index = this._find(key, /*insert*/ true);
                    this._values[index] = value;
                    return this;
                };
                Map.prototype.delete = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    if (index >= 0) {
                        var size = this._keys.length;
                        for (var i = index + 1; i < size; i++) {
                            this._keys[i - 1] = this._keys[i];
                            this._values[i - 1] = this._values[i];
                        }
                        this._keys.length--;
                        this._values.length--;
                        if (SameValueZero(key, this._cacheKey)) {
                            this._cacheKey = cacheSentinel;
                            this._cacheIndex = -2;
                        }
                        return true;
                    }
                    return false;
                };
                Map.prototype.clear = function () {
                    this._keys.length = 0;
                    this._values.length = 0;
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                };
                Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
                Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
                Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
                Map.prototype["@@iterator"] = function () { return this.entries(); };
                Map.prototype[iteratorSymbol] = function () { return this.entries(); };
                Map.prototype._find = function (key, insert) {
                    if (!SameValueZero(this._cacheKey, key)) {
                        this._cacheIndex = -1;
                        for (var i = 0; i < this._keys.length; i++) {
                            if (SameValueZero(this._keys[i], key)) {
                                this._cacheIndex = i;
                                break;
                            }
                        }
                    }
                    if (this._cacheIndex < 0 && insert) {
                        this._cacheIndex = this._keys.length;
                        this._keys.push(key);
                        this._values.push(undefined);
                    }
                    return this._cacheIndex;
                };
                return Map;
            }());
            return Map;
            function getKey(key, _) {
                return key;
            }
            function getValue(_, value) {
                return value;
            }
            function getEntry(key, value) {
                return [key, value];
            }
        }
        // naive Set shim
        function CreateSetPolyfill() {
            var Set = /** @class */ (function () {
                function Set() {
                    this._map = new _Map();
                }
                Object.defineProperty(Set.prototype, "size", {
                    get: function () { return this._map.size; },
                    enumerable: true,
                    configurable: true
                });
                Set.prototype.has = function (value) { return this._map.has(value); };
                Set.prototype.add = function (value) { return this._map.set(value, value), this; };
                Set.prototype.delete = function (value) { return this._map.delete(value); };
                Set.prototype.clear = function () { this._map.clear(); };
                Set.prototype.keys = function () { return this._map.keys(); };
                Set.prototype.values = function () { return this._map.keys(); };
                Set.prototype.entries = function () { return this._map.entries(); };
                Set.prototype["@@iterator"] = function () { return this.keys(); };
                Set.prototype[iteratorSymbol] = function () { return this.keys(); };
                return Set;
            }());
            return Set;
        }
        // naive WeakMap shim
        function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return /** @class */ (function () {
                function WeakMap() {
                    this._key = CreateUniqueKey();
                }
                WeakMap.prototype.has = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.has(table, this._key) : false;
                };
                WeakMap.prototype.get = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.get(table, this._key) : undefined;
                };
                WeakMap.prototype.set = function (target, value) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                    table[this._key] = value;
                    return this;
                };
                WeakMap.prototype.delete = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? delete table[this._key] : false;
                };
                WeakMap.prototype.clear = function () {
                    // NOTE: not a real clear, just makes the previous data unreachable
                    this._key = CreateUniqueKey();
                };
                return WeakMap;
            }());
            function CreateUniqueKey() {
                var key;
                do
                    key = "@@WeakMap@@" + CreateUUID();
                while (HashMap.has(keys, key));
                keys[key] = true;
                return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
                if (!hasOwn.call(target, rootKey)) {
                    if (!create)
                        return undefined;
                    Object.defineProperty(target, rootKey, { value: HashMap.create() });
                }
                return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
                for (var i = 0; i < size; ++i)
                    buffer[i] = Math.random() * 0xff | 0;
                return buffer;
            }
            function GenRandomBytes(size) {
                if (typeof Uint8Array === "function") {
                    var array = new Uint8Array(size);
                    if (typeof crypto !== "undefined") {
                        crypto.getRandomValues(array);
                    }
                    else if (typeof msCrypto !== "undefined") {
                        msCrypto.getRandomValues(array);
                    }
                    else {
                        FillRandomBytes(array, size);
                    }
                    return array;
                }
                return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
                var data = GenRandomBytes(UUID_SIZE);
                // mark as random - RFC 4122 § 4.4
                data[6] = data[6] & 0x4f | 0x40;
                data[8] = data[8] & 0xbf | 0x80;
                var result = "";
                for (var offset = 0; offset < UUID_SIZE; ++offset) {
                    var byte = data[offset];
                    if (offset === 4 || offset === 6 || offset === 8)
                        result += "-";
                    if (byte < 16)
                        result += "0";
                    result += byte.toString(16).toLowerCase();
                }
                return result;
            }
        }
        // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
        function MakeDictionary(obj) {
            obj.__ = undefined;
            delete obj.__;
            return obj;
        }
    });
})(Reflect || (Reflect = {}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./node_modules/reflect-metadata/Reflect.js
var reflect_metadata_Reflect = __webpack_require__(630);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/style.css
var style = __webpack_require__(208);
;// CONCATENATED MODULE: ./src/style.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.A, options);




       /* harmony default export */ const src_style = (style/* default */.A && style/* default */.A.locals ? style/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/WindowManager/MenuHandler.ts
class MenuHandler {
    menuMap;
    addCustomMenu = (menuObject) => {
        menuObject.parent = this;
        const menuKey = menuObject.menuKey;
        this.menuMap[menuKey] = menuObject;
    };
    getMenu = (menuKey) => {
        return this.menuMap?.[menuKey];
    };
    openMenu = (menuKey) => {
        this.menuMap?.[menuKey].open();
    };
    closeMenu = (menuKey) => {
        this.menuMap?.[menuKey].close();
    };
    render = () => {
        if (!this.menuMap)
            return;
        const allMenuKeys = Object.keys(this.menuMap) || [];
        allMenuKeys.forEach((menuKey) => {
            const menuObject = this.menuMap?.[menuKey];
            if (!menuObject)
                return;
            if (!menuObject.isVisible)
                return;
            menuObject.render();
        });
    };
}

;// CONCATENATED MODULE: ./src/WindowUtils/GlobalHandler.ts
let GlobalHandlerInstance = (/* unused pure expression or super */ null && (undefined));
const TOKENS = {
    globalHandler: 'globalHandler',
    canvas: 'canvas',
    engine: 'engine',
    eventActions: 'eventActions',
    gridHandler: 'gridHandler',
    canvasApi: 'canvasApi',
    eventHandler: 'eventHandler',
    mouseHandler: 'mouseHandler',
    animationHandler: 'animationHandler',
    menuHandler: 'menuHandler',
    cameraHandler: 'cameraHandler',
    fileHandler: 'fileHandler',
    spriteHandler: 'spriteHandler',
    drawHandler: 'drawHandler',
    sceneHandler: 'sceneHandler',
    messageDispatcher: 'messageDispatcher',
    gameWorld: 'gameWorld',
    loopManager: 'loopManager',
    mapHandler: 'mapHandler',
    sceneRender: 'sceneRender',
};
class GlobalHandler {
    uniqueId = -1;
    static singletonInstance = undefined;
    instanceMap = {};
    constructor(whoIsCreatingNewInstance) {
        if (GlobalHandler.singletonInstance) {
            return GlobalHandler.singletonInstance;
        }
        this.uniqueId = Math.random() * 1000;
        GlobalHandler.singletonInstance = this;
        this.save(TOKENS.globalHandler, this, 'eu_mesmo');
    }
    static get = (key, who = 'xxx') => {
        if (!GlobalHandler.singletonInstance) {
            throw new Error('Voce nao pode chamar static get before criar a instancia singleton');
        }
        return GlobalHandler.singletonInstance?.get(key, who);
    };
    static getWithType = (key, who = 'xxx') => {
        if (!GlobalHandler.singletonInstance) {
            throw new Error('Voce nao pode chamar static get before criar a instancia singleton');
        }
        return GlobalHandler.singletonInstance?.get(key, who);
    };
    static tryGetWithType = (key, who = 'xxx') => {
        if (!GlobalHandler.singletonInstance) {
            throw new Error('Voce nao pode chamar static get before criar a instancia singleton');
        }
        return GlobalHandler.singletonInstance?.tryToGet(key, who);
    };
    static tryGet = (key, who = 'xxx') => {
        if (!GlobalHandler.singletonInstance) {
            throw new Error('Voce nao pode chamar static get before criar a instancia singleton');
        }
        return GlobalHandler.singletonInstance?.tryToGet(key, who);
    };
    static set = (key, value, who = 'xxx') => {
        if (!GlobalHandler.singletonInstance) {
            throw new Error('Voce nao pode chamar static set before criar a instancia singleton');
        }
        return GlobalHandler.singletonInstance?.save(key, value, who);
    };
    save = (instanceKey, value, who) => {
        console.log(`--- Saving instance ${instanceKey} by ${who} uniqueId=${this.uniqueId}`);
        if (this.instanceMap[instanceKey]) {
            throw new Error(`Nao pode salvar, instancia ja existe pra key=${instanceKey} this.uniqueId=${this.uniqueId} ${this.instanceMap[instanceKey]}`);
        }
        this.instanceMap[instanceKey] = { value, who, key: instanceKey };
    };
    tryToGet = (key, who) => {
        if (!this.instanceMap[key]) {
            return undefined;
        }
        return this.instanceMap[key].value;
    };
    get = (instanceKey, whoIsAsking) => {
        const instanceData = this.instanceMap[instanceKey];
        if (!instanceData) {
            throw new Error(`No value in dicionario para key=${instanceKey} whoIsAsking=${whoIsAsking}`);
        }
        const instance = instanceData.value;
        if (!whoIsAsking) {
            throw new Error('ERROR: whoIsAsking is undefined');
        }
        if (!instance) {
            throw new Error(`ERROR: ${whoIsAsking} pediu, mas nao existe instance ${instanceKey} salva`);
        }
        return instance;
    };
}

;// CONCATENATED MODULE: ./src/WindowUtils/MessageDispatcher.js
const EVENT_TOKENS = {
  onResize: 'onResize',
  canvasApiSelfUpdate: 'canvasApi-SelfUpdate'
};
class MessageDispatcher {
  constructor() {
    this.registro = {};
  }
  emit = (eventName, payload, who) => {
    console.log(`MessageDispatcher1 emitindo evento ${eventName}`);
    if (!who) {
      throw new Error(`Voce precisa especificar who ao emitir evento`);
    }
    console.log(Object.keys(EVENT_TOKENS).some(key => EVENT_TOKENS[key] === eventName));

    // caso evento emitido nao seja uma key de tokens, retorna
    if (!Object.keys(EVENT_TOKENS).some(key => EVENT_TOKENS[key] === eventName)) {
      throw new Error(`ERROR @MessageDispatcher.emit2: ${who} emitiu ${eventName} is not in EVENT_TOKENS`);
    }

    // caso nao tenha listener escutando evento, retorna
    if (!this.registro[eventName]) {
      return;
    }
    console.log(`@MessageDispatcher3: emitindo evento ${eventName} com payload ${payload}`);

    // chama listener function
    this.registro[eventName](payload);
  };
  registerListener = (eventName, listenerFn, who) => {
    if (!who) {
      throw new Error(`ERROR @MessageDispatcher.registerListener: who is undefined`);
    }
    console.log(`@MessageDispatcher: ${who} esta registrando listener para evento ${eventName}`);
    this.registro[eventName] = payload => {
      console.log(`@MessageDispatcher: chamando listener function pq evento foi disparado com payload=[${payload}]`);
      listenerFn();
    };
  };
}
;// CONCATENATED MODULE: ./src/BrowserWrappers/EventHandler.ts


class EventHandler {
    static classNameConst = 'EventHandler';
    listeners;
    constructor() {
        this.listeners = {
            onResize: [],
            mouseMove: [],
            mouseClick: [],
            mouseDown: [],
            mouseUp: [],
            onScroll: [],
            keyPress: [],
            keyUp: [],
            keyDown: [],
        };
        this.registerBrowserListeners();
        this.onResize();
    }
    registerBrowserListeners = () => {
        const di = new GlobalHandler('EventHandler.constructor');
        const diDomCanvas = di.get(TOKENS.canvas, EventHandler.classNameConst);
        window.addEventListener('resize', this.onResize);
        document.addEventListener('keypress', this.onKeyPress);
        document.addEventListener('keydown', this.onKeyDown);
        document.addEventListener('keyup', this.onKeyUp);
        document.addEventListener('contextmenu', (event) => event.preventDefault());
        diDomCanvas.addEventListener('mousedown', this.onMouseDown);
        diDomCanvas.addEventListener('mouseup', this.onMouseUp);
        window.addEventListener('mousemove', this.onMouseMove);
        diDomCanvas.addEventListener('click', this.onMouseClick);
        diDomCanvas.addEventListener('wheel', this.onScroll);
    };
    onResize = () => {
        const canvas = GlobalHandler.getWithType(TOKENS.canvas, 'EventHandler');
        const rect = canvas.getBoundingClientRect();
        canvas.width = window.innerWidth - rect.x + (rect.width - rect.right);
        canvas.height = window.innerHeight - rect.y + (rect.height - rect.bottom);
        for (const listener of this.listeners['onResize']) {
            const { name, callback } = listener;
            console.log(`EventHandler.onResize.callingListener: (${name})`);
            callback();
        }
        const messageDispatcher = GlobalHandler.getWithType(TOKENS.messageDispatcher, 'WindowManager.setup()');
        console.log('EventHandler.onResize.emmitingEvent: (EVENT_TOKENS.onResize)');
        messageDispatcher.emit(EVENT_TOKENS.onResize, {}, 'EventHandler');
    };
    onKeyPress = (e) => {
        for (const listener of this.listeners['keyPress']) {
            console.log(`>>>> ${e}`);
            const key = e.key;
            const keyCode = e.code;
            const { name, callback } = listener;
            callback({ key, keyCode });
        }
    };
    onKeyUp = (e) => {
        console.log(`>>>> ${JSON.stringify(e)}`);
        for (const listener of this.listeners['keyUp']) {
            const key = e.key;
            const keyCode = e.code;
            const { name, callback } = listener;
            callback({ key, keyCode });
        }
    };
    onKeyDown = (e) => {
        if (e.repeat)
            return;
        for (const listener of this.listeners['keyDown']) {
            const key = e.key;
            const keyCode = e.code;
            const { name, callback } = listener;
            callback({ key, keyCode });
        }
    };
    onScroll = (e) => {
        for (const listener of this.listeners['onScroll']) {
            const { name, callback } = listener;
            callback(e);
        }
    };
    onMouseDown = (e) => {
        e.preventDefault();
        for (const listener of this.listeners['mouseDown']) {
            const { name, callback } = listener;
            callback(e);
        }
    };
    onMouseUp = (e) => {
        e.preventDefault();
        for (const listener of this.listeners['mouseUp']) {
            const { name, callback } = listener;
            const callbackReturn = callback(e);
            if (callbackReturn)
                return;
        }
    };
    onMouseClick = (e) => {
        e.preventDefault();
        const di = new GlobalHandler('EventHandler.onResize');
        const canvas = di.get(TOKENS.canvas, 'EventHandler');
        const rect = canvas.getBoundingClientRect();
        const MouseSemCamera = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
        for (const listener of this.listeners['mouseClick']) {
            const { name, callback } = listener;
            console.log('[onMouseClick] chamando listener:', name);
            callback({ x: MouseSemCamera.x, y: MouseSemCamera.y });
        }
    };
    onMouseMove = (e) => {
        const mouseHandler = GlobalHandler.getWithType(TOKENS.mouseHandler, 'EventHandler.onMouseMove');
        mouseHandler.updateMouse(e);
        const mouse = mouseHandler.getMouse();
        const { mouseComCanvas, mouseRaw, mouseComCamera, mouseTo50x50Grid } = mouse;
        for (const listener of this.listeners['mouseMove']) {
            const { callback } = listener;
            callback({
                x: mouseComCanvas.x,
                y: mouseComCanvas.y,
                mouseRaw,
                mouseComCanvas,
                mouseComCamera,
                mouseTo50x50Grid,
            });
        }
    };
    addOnResizeListener = (listener) => {
        this.listeners['onResize'].push(listener);
    };
    addOnMouseUpListener(listener) {
        this.listeners['mouseUp'].push(listener);
    }
    addOnMouseDownListener(listener) {
        this.listeners['mouseDown'].push(listener);
    }
    addOnMouseMoveListener(listener) {
        this.listeners['mouseMove'].push(listener);
    }
    addMouseClickListener(listener) {
        this.listeners['mouseClick'].push(listener);
    }
    addOnScrollListener(listener) {
        this.listeners['onScroll'].push(listener);
    }
    removeMouseMoveListener(listenerName) {
        const arr = this.listeners['mouseMove'];
        for (let i = 0; i < arr.length; i++) {
            const currName = arr[i]?.name;
            if (currName === listenerName) {
                arr.splice(i, 1);
            }
        }
    }
    removeMouseClickListener(listenerName) {
        console.log('- removeMouseClickListener() to', listenerName);
        const arr = this.listeners['mouseClick'];
        for (let i = 0; i < arr.length; i++) {
            const currName = arr[i]?.name;
            if (currName === listenerName) {
                arr.splice(i, 1);
            }
        }
    }
    addOnKeyUpListener(listener) {
        console.log('EventHandler.addOnKeyUpListener');
        this.listeners['keyUp'].push(listener);
    }
    addOnKeyDownListener(listener) {
        console.log('EventHandler.addOnKeyDownListener');
        this.listeners['keyDown'].push(listener);
    }
    addKeyPressListener(listener) {
        console.log('EventHandler.addKeyPressListener');
        this.listeners['keyPress'].push(listener);
    }
}

;// CONCATENATED MODULE: ./src/WindowUtils/FileHandler.ts
class FileHandler {
    fileListAsDom = {};
    constructor() {
        this.fileListAsDom = {};
    }
    getFileAsDOM = (assetName) => {
        const tryToGet = this.fileListAsDom[assetName];
        if (!tryToGet) {
            throw new Error('ADIOJADIOJAODIJDA');
        }
        return tryToGet.dom;
    };
    startLoad = async (FILE_LIST) => {
        const promiseList = [];
        FILE_LIST.forEach((fileObject) => {
            const { filepath, filetype, filename } = fileObject;
            if (filetype !== 'png') {
                throw new Error('FILE TYPE NOT SUPPORTED');
            }
            const myPromise = new Promise((resolve, reject) => {
                const dom = document.createElement('img');
                dom.src = filepath;
                dom.onload = () => {
                    resolve({ status: 'deu certo', filename, dom });
                };
                dom.onerror = () => {
                    reject({
                        status: 'algo deu errado',
                        filename,
                        dom: null,
                    });
                };
            });
            promiseList.push(myPromise);
        });
        const promiseResultList = await Promise.all(promiseList);
        promiseResultList.forEach((result) => {
            const { filename, status, dom } = result;
            if (!dom) {
                throw new Error('FILE NOT LOADED: ' + filename);
            }
            console.log('FILE LOADED: ', filename, status);
            this.fileListAsDom[filename] = {
                dom,
            };
        });
    };
}

;// CONCATENATED MODULE: ./src/DataStructures/StackGeneric.ts
class StackGeneric {
    stack;
    topValue;
    constructor() {
        this.stack = [];
        this.topValue = -1;
    }
    toString() {
        let stack = '';
        for (let i = 0; i <= this.topValue; i++) {
            stack += `[${i}:${this.stack[i]}] `;
        }
        return stack;
    }
    isEmpty = () => {
        return this.topValue < 0;
    };
    size = () => {
        return this.topValue + 1;
    };
    top = () => {
        if (this.topValue >= 0) {
            return this.stack[this.topValue];
        }
        return undefined;
    };
    topTop = () => {
        if (this.size() >= 2) {
            return this.stack[this.topValue - 1];
        }
        return undefined;
    };
    pop() {
        if (this.topValue >= 0) {
            const e = this.stack[this.topValue];
            this.topValue--;
            return e;
        }
        return undefined;
    }
    push(e) {
        this.topValue++;
        this.stack[this.topValue] = e;
    }
}

;// CONCATENATED MODULE: ./src/Window_SceneUtils/SceneHandler.ts


class SceneHandler {
    static className = 'SceneHandler';
    menuHandler;
    sceneInstanceMap;
    currentScene;
    sceneKeyStack;
    constructor() {
        const di = new GlobalHandler('SceneHandler');
        this.menuHandler = di.get(TOKENS.menuHandler, 'SceneHandler');
        this.currentScene = undefined;
        this.sceneKeyStack = new StackGeneric();
        this.sceneInstanceMap = {};
    }
    assertSceneKeyIsDefinedOrThrow = (sceneKey) => {
        let assertSceneKeyIsKeyOfThisScenes = false;
        const allScenesKeys = Object.keys(this.sceneInstanceMap) || [];
        for (const internalSceneKey of allScenesKeys) {
            if (sceneKey === internalSceneKey) {
                assertSceneKeyIsKeyOfThisScenes = true;
            }
        }
        if (!assertSceneKeyIsKeyOfThisScenes) {
            throw new Error(`@SceneHandler.navigate -- sceneKey [${sceneKey}] is not key of this.scenes`);
        }
    };
    getCurrentSceneKey = () => {
        return this.sceneKeyStack.top();
    };
    getSceneInstance = (sceneKey) => {
        this.assertSceneKeyIsDefinedOrThrow(sceneKey);
        return this.sceneInstanceMap[sceneKey];
    };
    update = (dt) => {
        const currentSceneKey = this.sceneKeyStack.top();
        if (!currentSceneKey) {
            throw new Error(`SceneHandler.update error: current scene key is undefined`);
        }
        const currentScene = this.getSceneInstance(currentSceneKey);
        if (!currentScene) {
            throw new Error(`SceneHandler.update error: current scene is undefined`);
        }
        currentScene.onUpdate({ dt, events: [] });
    };
    render = () => {
        const currentSceneKey = this.sceneKeyStack.top();
        if (!currentSceneKey) {
            throw new Error(`SceneHandler.update error: current scene key is undefined`);
        }
        const currentScene = this.getSceneInstance(currentSceneKey);
        if (!currentScene) {
            throw new Error(`SceneHandler.update error: current scene is undefined`);
        }
        const sceneDefinition = currentScene.onRender();
        console.log(`@SceneHandler.render sceneDefinition:`, currentSceneKey, sceneDefinition);
        const sceneRender = GlobalHandler.getWithType(TOKENS.sceneRender, SceneHandler.className);
        sceneRender.renderScene(sceneDefinition);
    };
    setScenes = (newSceneClassMap) => {
        this.sceneInstanceMap = {};
        const newSceneClassMapKeys = Object.keys(newSceneClassMap) || [];
        for (const sceneKey of newSceneClassMapKeys) {
            const sceneClassName = newSceneClassMap[sceneKey];
            this.sceneInstanceMap[sceneKey] = new sceneClassName();
        }
    };
    setInitialScene = (sceneKey) => {
        this.assertSceneKeyIsDefinedOrThrow(sceneKey);
        const targetedInitialSceneInstance = this.getSceneInstance(sceneKey);
        if (!targetedInitialSceneInstance) {
            throw new Error(`targetedInitialSceneInstance is undefined`);
        }
        const currentSceneKey = this.getCurrentSceneKey();
        if (currentSceneKey) {
            const currentSceneInstance = this.getSceneInstance(currentSceneKey);
        }
        this.sceneKeyStack.push(sceneKey);
        const currentSceneInstance = this.getSceneInstance(sceneKey);
    };
    navigate = (newSceneKey, avoidUnmount = false) => {
        this.assertSceneKeyIsDefinedOrThrow(newSceneKey);
        const currentSceneKey = this.getCurrentSceneKey();
        if (!currentSceneKey) {
            throw new Error(`currentSceneKey is undefined`);
        }
        const currentSceneInstance = this.getSceneInstance(currentSceneKey);
        const newSceneInstance = this.getSceneInstance(newSceneKey);
        console.log(`@SceneHandler NAVIGATE FROM [${currentSceneKey}] TO [${newSceneKey}]`);
        if (currentSceneKey === newSceneKey) {
            throw new Error(`Trying to navigate to same scene`);
        }
        if (currentSceneKey) {
            currentSceneInstance.onUnmount();
        }
        newSceneInstance.onMount();
        this.sceneKeyStack.push(newSceneKey);
    };
    goBack = () => {
        if (this.sceneKeyStack.size() <= 1) {
            throw new Error('you cant navigte back because we have only 1 screen in stack');
        }
        const currentScreenKey = this.sceneKeyStack.pop();
        if (!currentScreenKey) {
            throw new Error('currentScreenKey is undefined');
        }
        const currentSceneInstance = this.getSceneInstance(currentScreenKey);
        const goBackTargetScreenKey = this.sceneKeyStack.top();
        if (!goBackTargetScreenKey) {
            throw new Error('goBackTargetScreenKey is undefined');
        }
        const goBackTargetScreenInstance = this.getSceneInstance(goBackTargetScreenKey);
        if (currentSceneInstance) {
            currentSceneInstance.onUnmount();
        }
        if (goBackTargetScreenInstance) {
            goBackTargetScreenInstance.onMount();
        }
    };
}

;// CONCATENATED MODULE: ./src/Anno/MySprites.ts
const SPRITE_MAP = {
    MOUSE1: 'MOUSE1',
    MOUSE2: 'MOUSE2',
    TREE1: 'TREE1',
    TREE2: 'TREE2',
    TREE3: 'TREE3',
    HOUSE: 'HOUSE',
    WAREHOUSE: 'WAREHOUSE',
    CONSTRUCTION_MENU_ITEMS: 'CONSTRUCTION_MENU_ITEMS',
    CONSTRUCTION_MENU_INFO: 'CONSTRUCTION_MENU_INFO',
    POTATO_PLANT: 'POTATO_PLANT',
    POTATO_FARM: 'POTATO_FARM',
    POTATO_MINER: 'POTATO_MINER',
    POTATO: 'POTATO',
    FIRE1: 'FIRE1',
    ANIMATED_STONE1: 'ANIMATED_STONE1',
    CHAR_PARADO: 'CHAR_PARADO',
    CHAR_WALKING_180: 'CHAR_WALKING_180',
    CHAR_WALKING_90: 'CHAR_WALKING_90',
    CHAR_WALKING_270: 'CHAR_WALKING_270',
    CHAR_WALKING_0: 'CHAR_WALKING_0',
    CHAR_WALKING_45: 'CHAR_WALKING_45',
    CHAR_WALKING_315: 'CHAR_WALKING_315',
    CHAR_WALKING_135: 'CHAR_WALKING_135',
    CHAR_WALKING_225: 'CHAR_WALKING_225',
    CHAR_WORKING: 'CHAR_WORKING',
    CHAR_GRABING: 'CHAR_GRABING',
    STATIC_STONE1: 'STATIC_STONE1',
    AGUA1: 'AGUA1',
    AGUA2: 'AGUA2',
    AGUA3: 'AGUA3',
    GRAMA1: 'GRAMA1',
    GRAMA2: 'GRAMA2',
    GRAMA3: 'GRAMA3',
    GRAMA4: 'GRAMA4',
    GRAMA5: 'GRAMA5',
    GRAMA6: 'GRAMA6',
    DRY1: 'DRY1',
    DRY2: 'DRY2',
    DRY3: 'DRY3',
    SNOW1: 'SNOW1',
    SNOW2: 'SNOW2',
    SNOW3: 'SNOW3',
};
function createSpriteItem(name, sx, sy) {
    return {
        spriteName: name,
        sx: sx,
        sy: sy,
        sw: 50,
        sh: 50,
        qntOfFrames: 1,
    };
}
const SPRITE_FILE_MAP = [
    {
        filename: 'tree1',
        sprites: [
            createSpriteItem(SPRITE_MAP.TREE1, 0, 0),
            createSpriteItem(SPRITE_MAP.TREE2, 50, 0),
            createSpriteItem(SPRITE_MAP.TREE3, 100, 0),
        ],
    },
    {
        filename: 'gui2',
        sprites: [
            createSpriteItem(SPRITE_MAP.CONSTRUCTION_MENU_ITEMS, 0, 0),
            createSpriteItem(SPRITE_MAP.CONSTRUCTION_MENU_INFO, 400, 0),
        ],
    },
    {
        filename: 'mouse2',
        sprites: [
            {
                spriteName: SPRITE_MAP.MOUSE2,
                sx: 0,
                sy: 0,
                sw: 25,
                sh: 25,
                qntOfFrames: 1,
            },
        ],
    },
    {
        filename: 'mouse1',
        sprites: [
            {
                spriteName: 'MOUSE1',
                sx: 0,
                sy: 0,
                sw: 25,
                sh: 25,
                qntOfFrames: 1,
            },
        ],
    },
    {
        filename: 'storage1',
        sprites: [
            {
                spriteName: SPRITE_MAP.HOUSE,
                sx: 400,
                sy: 0,
                sw: 100,
                sh: 100,
                qntOfFrames: 1,
            },
            {
                spriteName: SPRITE_MAP.WAREHOUSE,
                sx: 0,
                sy: 500,
                sw: 100,
                sh: 100,
                qntOfFrames: 1,
            },
            {
                spriteName: SPRITE_MAP.POTATO_PLANT,
                sx: 100,
                sy: 300,
                sw: 25,
                sh: 25,
                qntOfFrames: 4,
            },
            {
                spriteName: SPRITE_MAP.POTATO_FARM,
                sx: 0,
                sy: 200,
                sw: 100,
                sh: 100,
                qntOfFrames: 1,
            },
            {
                spriteName: SPRITE_MAP.POTATO_MINER,
                sx: 0,
                sy: 200,
                sw: 100,
                sh: 100,
                qntOfFrames: 1,
            },
        ],
    },
    {
        filename: 'storage3',
        sprites: [
            {
                spriteName: SPRITE_MAP.POTATO,
                sx: 0,
                sy: 0,
                sw: 25,
                sh: 25,
                qntOfFrames: 1,
            },
        ],
    },
    {
        filename: 'fire1',
        sprites: [
            {
                spriteName: SPRITE_MAP.FIRE1,
                sx: 0,
                sy: 0,
                sw: 50,
                sh: 50,
                qntOfFrames: 5,
            },
        ],
    },
    {
        filename: 'teste1',
        sprites: [
            {
                spriteName: 'ANIMATED_STONE1',
                sx: 0,
                sy: 0,
                sw: 50,
                sh: 50,
                qntOfFrames: 3,
            },
        ],
    },
    {
        filename: 'char1',
        sprites: [
            {
                spriteName: 'CHAR_PARADO',
                sx: 0,
                sy: 0,
                sw: 50,
                sh: 50,
                qntOfFrames: 3,
            },
            {
                spriteName: 'CHAR_WALKING_180',
                sx: 0,
                sy: 50,
                sw: 50,
                sh: 50,
                qntOfFrames: 3,
            },
            {
                spriteName: 'CHAR_WALKING_90',
                sx: 0,
                sy: 100,
                sw: 50,
                sh: 50,
                qntOfFrames: 3,
            },
            {
                spriteName: 'CHAR_WALKING_270',
                sx: 0,
                sy: 150,
                sw: 50,
                sh: 50,
                qntOfFrames: 3,
            },
            {
                spriteName: 'CHAR_WALKING_0',
                sx: 0,
                sy: 200,
                sw: 50,
                sh: 50,
                qntOfFrames: 3,
            },
            {
                spriteName: 'CHAR_WALKING_45',
                sx: 0,
                sy: 250,
                sw: 50,
                sh: 50,
                qntOfFrames: 3,
            },
            {
                spriteName: 'CHAR_WALKING_315',
                sx: 0,
                sy: 300,
                sw: 50,
                sh: 50,
                qntOfFrames: 3,
            },
            {
                spriteName: 'CHAR_WALKING_135',
                sx: 0,
                sy: 350,
                sw: 50,
                sh: 50,
                qntOfFrames: 3,
            },
            {
                spriteName: 'CHAR_WALKING_225',
                sx: 0,
                sy: 400,
                sw: 50,
                sh: 50,
                qntOfFrames: 3,
            },
            {
                spriteName: 'CHAR_WORKING',
                sx: 0,
                sy: 450,
                sw: 50,
                sh: 50,
                qntOfFrames: 3,
            },
            {
                spriteName: 'CHAR_GRABING',
                sx: 0,
                sy: 500,
                sw: 50,
                sh: 50,
                qntOfFrames: 3,
            },
        ],
    },
    {
        filename: 'teste1',
        sprites: [
            {
                spriteName: 'STATIC_STONE1',
                sx: 0,
                sy: 0,
                sw: 50,
                sh: 50,
                qntOfFrames: 1,
            },
        ],
    },
    {
        filename: 'ground3',
        sprites: [
            {
                spriteName: 'AGUA1',
                sx: 0,
                sy: 0,
                sw: 50,
                sh: 50,
                qntOfFrames: 1,
            },
            {
                spriteName: 'AGUA2',
                sx: 50,
                sy: 0,
                sw: 50,
                sh: 50,
                qntOfFrames: 1,
            },
            {
                spriteName: 'AGUA3',
                sx: 100,
                sy: 0,
                sw: 50,
                sh: 50,
                qntOfFrames: 1,
            },
            {
                spriteName: 'GRAMA1',
                sx: 0,
                sy: 50,
                sw: 50,
                sh: 50,
                qntOfFrames: 1,
            },
            {
                spriteName: 'GRAMA2',
                sx: 50,
                sy: 50,
                sw: 50,
                sh: 50,
                qntOfFrames: 1,
            },
            {
                spriteName: 'GRAMA3',
                sx: 100,
                sy: 50,
                sw: 50,
                sh: 50,
                qntOfFrames: 1,
            },
            {
                spriteName: 'DRY1',
                sx: 0,
                sy: 100,
                sw: 50,
                sh: 50,
                qntOfFrames: 1,
            },
            {
                spriteName: 'DRY2',
                sx: 50,
                sy: 100,
                sw: 50,
                sh: 50,
                qntOfFrames: 1,
            },
            {
                spriteName: 'DRY3',
                sx: 100,
                sy: 100,
                sw: 50,
                sh: 50,
                qntOfFrames: 1,
            },
            {
                spriteName: 'SNOW1',
                sx: 0,
                sy: 150,
                sw: 50,
                sh: 50,
                qntOfFrames: 1,
            },
            {
                spriteName: 'SNOW2',
                sx: 50,
                sy: 150,
                sw: 50,
                sh: 50,
                qntOfFrames: 1,
            },
            {
                spriteName: 'SNOW3',
                sx: 100,
                sy: 150,
                sw: 50,
                sh: 50,
                qntOfFrames: 1,
            },
        ],
    },
    {
        filename: 'ground2',
        sprites: [
            {
                spriteName: 'GRAMA1',
                sx: 0,
                sy: 0,
                sw: 50,
                sh: 50,
                qntOfFrames: 1,
            },
            {
                spriteName: 'GRAMA2',
                sx: 50,
                sy: 0,
                sw: 50,
                sh: 50,
                qntOfFrames: 1,
            },
            {
                spriteName: 'GRAMA3',
                sx: 100,
                sy: 0,
                sw: 50,
                sh: 50,
                qntOfFrames: 1,
            },
            {
                spriteName: 'GRAMA4',
                sx: 0,
                sy: 50,
                sw: 50,
                sh: 50,
                qntOfFrames: 1,
            },
            {
                spriteName: 'GRAMA5',
                sx: 50,
                sy: 50,
                sw: 50,
                sh: 50,
                qntOfFrames: 1,
            },
            {
                spriteName: 'GRAMA6',
                sx: 100,
                sy: 50,
                sw: 50,
                sh: 50,
                qntOfFrames: 1,
            },
        ],
    },
];

;// CONCATENATED MODULE: ./src/Render/SpriteHandler.ts


class SpriteHandler {
    sprites;
    spriteInstances;
    constructor() {
        this.sprites = {};
        this.spriteInstances = [];
        this.createSpritesFromFile();
    }
    createSpritesFromFile = () => {
        const fileHandler = GlobalHandler.getWithType(TOKENS.fileHandler, 'SpriteHandler.cutSpritesFromFile');
        for (const spriteConfig of SPRITE_FILE_MAP) {
            const { filename, sprites: allSpritesOfFile } = spriteConfig;
            const domFile = fileHandler.getFileAsDOM(filename);
            for (const spriteOfFile of allSpritesOfFile) {
                const { spriteName, qntOfFrames, sy, sw, sh } = spriteOfFile;
                let sx = spriteOfFile.sx;
                const arrayOfFramesUsingDomCanvas = [];
                const sxOfLastCut = sx + sw * qntOfFrames;
                for (; sx < sxOfLastCut; sx += sw) {
                    const littleDomCanvas = document.createElement('canvas');
                    littleDomCanvas.width = sw;
                    littleDomCanvas.height = sh;
                    const canvasCtx = littleDomCanvas?.getContext('2d');
                    if (!canvasCtx) {
                        throw new Error('ERROR: SpriteHandler - canvasCtx is null');
                    }
                    canvasCtx?.drawImage(domFile, sx, sy, sw, sh, 0, 0, sw, sh);
                    arrayOfFramesUsingDomCanvas.push(littleDomCanvas);
                }
                this.sprites[spriteName] = {
                    spriteName,
                    sw,
                    sh,
                    frames: arrayOfFramesUsingDomCanvas,
                    qntOfFrames,
                };
            }
        }
    };
    getSprite = (spriteKey) => {
        if (!spriteKey || !this.sprites[spriteKey]) {
            throw new Error(`ERROR: SpriteHandler - Sprite \"${spriteKey}\" nao existe`);
        }
        return this.sprites[spriteKey];
    };
}

;// CONCATENATED MODULE: ./src/WindowUtils/LoopManager.ts
class LoopManager {
    updateDurationGoalMs = 16;
    onRenderCallbackFn;
    onUpdateCallbackFn;
    isRunning;
    moveAccumulator;
    lastTotalElapsedTime;
    renderCounter;
    updateCounter;
    loopDurationMs;
    loopDurationSec;
    workDurationMs;
    updateDurationMs;
    renderDurationMs;
    fps;
    constructor({ who, onUpdate, onRender }) {
        console.log(`@ LoopManager.constructor() called by ${who}`);
        this.onRenderCallbackFn = onRender;
        this.onUpdateCallbackFn = onUpdate;
        this.isRunning = false;
        this.moveAccumulator = 0;
        this.lastTotalElapsedTime = 0;
        this.fps = 0;
        this.loopDurationMs = 0;
        this.loopDurationSec = 0;
        this.workDurationMs = '';
        this.updateDurationMs = 0;
        this.renderDurationMs = 0;
        this.renderCounter = 0;
        this.updateCounter = 0;
    }
    start = () => {
        this.isRunning = true;
        window.requestAnimationFrame(this.loop);
    };
    stop = () => {
        this.isRunning = false;
    };
    loop = (totalElapsedTime) => {
        if (!this.lastTotalElapsedTime) {
            this.lastTotalElapsedTime = totalElapsedTime;
            window.requestAnimationFrame(this.loop);
            return;
        }
        this.loopDurationMs = totalElapsedTime - this.lastTotalElapsedTime;
        this.loopDurationSec = this.loopDurationMs / 1000;
        this.fps = 1.0 / this.loopDurationSec;
        this.lastTotalElapsedTime = totalElapsedTime;
        const workStart = window.performance.now();
        this.moveAccumulator += this.loopDurationMs;
        while (this.moveAccumulator > this.updateDurationGoalMs) {
            const updateStart = window.performance.now();
            this.update(this.updateDurationGoalMs);
            const updateEnd = window.performance.now();
            this.updateDurationMs = updateEnd - updateStart;
            this.moveAccumulator -= this.updateDurationGoalMs;
        }
        const renderStartMs = window.performance.now();
        this.render();
        const renderEndMs = window.performance.now();
        this.renderDurationMs = renderEndMs - renderStartMs;
        const workEnd = window.performance.now();
        this.workDurationMs = (workEnd - workStart).toFixed(2);
        if (this.isRunning)
            window.requestAnimationFrame(this.loop);
    };
    update = (dt) => {
        this.updateCounter++;
        this.onUpdateCallbackFn(dt);
    };
    render = () => {
        this.renderCounter++;
        this.onRenderCallbackFn();
    };
}

;// CONCATENATED MODULE: ./src/Math/MathUtil.js
const MathUtil = {
  /**
   * Returns a random integer between min (inclusive) and max (inclusive).
   * The value is no lower than min (or the next integer greater than min
   * if min isn't an integer) and no greater than max (or the next integer
   * lower than max if max isn't an integer).
   * Using Math.round() will give you a non-uniform distribution!
   */
  getRandomInt: (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  randomIntFromInterval: (min, max) => {
    // integer number (1,2,3), min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getRandomFromArray: array => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  },
  roundToNearest: (value, arrOfWholeNumbers) => {
    const map = {};
    arrOfWholeNumbers.forEach(number => {
      const diff = number - value;
      map[number] = diff;
    });
    let min = 99999;
    let minKey = -1;
    for (var [key, value] of Object.entries(map)) {
      const valueAbs = Math.abs(value);
      if (valueAbs < min) {
        min = valueAbs;
        minKey = key;
      }
    }
    return minKey;
  },
  limit: (v, min, max) => {
    if (v > max) return max;
    if (v < min) return min;
    return v;
  },
  map: (value, vMin, vMax, dMin, dMax) => {
    return dMin + (value - vMin) * (dMax - dMin) / (vMax - vMin);
  }
};
;// CONCATENATED MODULE: ./src/Math/Vec2.ts

class Vec2 {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    clone() {
        return new Vec2(this.x, this.y);
    }
    add(vec) {
        return new Vec2(this.x + vec.x, this.y + vec.y);
    }
    sub(vec) {
        if (!vec) {
            throw new Error('Vec2.sub() requires a Vec2 argument');
        }
        return new Vec2(this.x - vec.x, this.y - vec.y);
    }
    len() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    unit() {
        const len = this.len();
        return new Vec2(this.x / len, this.y / len);
    }
    headInDeg() {
        const rad = Math.atan2(this.y, this.x);
        const deg = rad * (180 / Math.PI);
        return deg;
    }
    limit(k) {
        return new Vec2(MathUtil.limit(this.x, -k, k), MathUtil.limit(this.y, -k, k));
    }
}

;// CONCATENATED MODULE: ./src/BrowserWrappers/MouseHandler.ts


class MouseHandler {
    static classNameConst = 'mouseHandler';
    mouse;
    keyboard;
    mouseClickPosition;
    constructor() {
        this.keyboard = {
            aaaaaa: false,
        };
        this.mouseClickPosition = undefined;
        this.mouse = {
            x: 0,
            y: 0,
            mouseRaw: { x: 0, y: 0 },
            mouseComCanvas: { x: 0, y: 0 },
            mouseComCamera: { x: 0, y: 0 },
            mouseTo50x50Grid: { x: 0, y: 0 },
        };
        const di = new GlobalHandler('mouseHandler.constructor');
        const eventHandler = (di.get(TOKENS.eventHandler, 'mouseHandler.constructor'));
        eventHandler.addOnKeyDownListener({
            name: 'mouseHandler.constructor',
            callback: ({ keyCode }) => {
                this.keyboard[keyCode] = true;
            },
        });
        eventHandler.addOnKeyUpListener({
            name: 'mouseHandler.constructor',
            callback: ({ keyCode }) => {
                this.keyboard[keyCode] = false;
            },
        });
        eventHandler.addMouseClickListener({
            name: 'mouseHandler.mouseClick',
            callback: ({ x, y }) => {
                this.mouseClickPosition = { x, y };
            },
        });
        eventHandler.addOnMouseMoveListener({
            name: 'mouseHandler.constructor',
            callback: (callbackProps) => {
                this.mouse = {
                    ...this.mouse,
                    x: callbackProps.x,
                    y: callbackProps.y,
                };
            },
        });
    }
    updateMouse = (e) => {
        const mouseRaw = { x: e.clientX, y: e.clientY };
        const canvas = GlobalHandler.getWithType(TOKENS.canvas, 'MouseHandler.updateMouse');
        const rect = canvas.getBoundingClientRect();
        const mouseComCanvas = {
            x: mouseRaw.x - rect.left,
            y: mouseRaw.y - rect.top,
        };
        const mouseComCamera = { x: 0, y: 0 };
        const mouseTo50x50Grid = { x: 0, y: 0 };
        this.mouse = {
            ...this.mouse,
            x: e.clientX,
            y: e.clientY,
            mouseRaw,
            mouseComCanvas,
            mouseComCamera,
            mouseTo50x50Grid,
        };
    };
    getMouse = () => {
        return this.mouse;
    };
    resetMouseClicks = () => {
        this.mouseClickPosition = undefined;
    };
}
const MouseUtil = {
    mouseRaw: () => {
        const mouseHandler = GlobalHandler.getWithType(TOKENS.mouseHandler, 'GameUtil.mouseToWorld');
        return mouseHandler.getMouse().mouseRaw;
    },
    mouseToCanvas: () => {
        const mouseHandler = GlobalHandler.getWithType(TOKENS.mouseHandler, 'GameUtil.mouseToWorld');
        return mouseHandler.getMouse().mouseComCanvas;
    },
    mouseToCamera: () => {
        const mouseHandler = GlobalHandler.getWithType(TOKENS.mouseHandler, 'GameUtil.mouseToWorld');
        return mouseHandler.getMouse().mouseComCamera;
    },
    mouseToCameraGrid: (cellW, cellH) => {
        const mouseHandler = GlobalHandler.getWithType(TOKENS.mouseHandler, 'GameUtil.mouseToWorld');
        const mouseComCamera = mouseHandler.getMouse().mouseComCamera;
        const xOnSquare = Math.floor(mouseComCamera.x / cellW) * cellW;
        const yOnSquare = Math.floor(mouseComCamera.y / cellH) * cellH;
        return new Vec2(xOnSquare, yOnSquare);
    },
    mouseTo50x50Grid: () => {
        const mouseHandler = GlobalHandler.getWithType(TOKENS.mouseHandler, 'GameUtil.mouseToWorld');
        return mouseHandler.getMouse().mouseTo50x50Grid;
    },
    snapXyToGridIndex: (x, y, gridCellW, gridCellH, minX = 0, minY = 0) => {
        const i = Math.floor((x - minX) / gridCellW);
        const j = Math.floor((y - minY) / gridCellH);
        return { i, j };
    },
    snapXYToGridTopRight: (canvasX, canvasY, cellW, cellH) => {
        const xOnSquare = Math.floor(canvasX / cellW) * cellW;
        const yOnSquare = Math.floor(canvasY / cellH) * cellH;
        return { x: xOnSquare, y: yOnSquare };
    },
};

;// CONCATENATED MODULE: ./src/Window_SceneComponents/UIUtils.ts
class UIUtils {
    static getMaxWidth = (nodeList, debuggerRef = { list: [] }) => {
        let maxWidth = 0;
        for (const node of nodeList) {
            if (node.type === 'box') {
                if (!node.w) {
                    throw new Error('Button should have width');
                }
                if (node.w > maxWidth) {
                    maxWidth = node.w;
                }
            }
            if (node.type === 'vertical') {
                const maxVerticalWidth = UIUtils.getMaxWidth(node.children);
                if (maxVerticalWidth > maxWidth) {
                    maxWidth = maxVerticalWidth;
                }
            }
            if (node.type === 'horizontal') {
                const maxHorizontalWidth = UIUtils.accumulateWidth(node.children);
                if (maxHorizontalWidth > maxWidth) {
                    maxWidth = maxHorizontalWidth;
                }
            }
        }
        debuggerRef.list.push(`__getMaxWidth: returning ${maxWidth}`);
        return maxWidth;
    };
    static getMaxHeight = (nodeList, debuggerRef = { list: [] }) => {
        let maxHeight = 0;
        for (const obj of nodeList) {
            if (obj.type === 'box') {
                if (!obj.h) {
                    throw new Error('Button should have height');
                }
                if (obj.h > maxHeight) {
                    maxHeight = obj.h;
                }
            }
            if (obj.type === 'vertical') {
                const maxVerticalHeight = UIUtils.accumulateHeight(obj.children, debuggerRef);
                if (maxVerticalHeight > maxHeight) {
                    maxHeight = maxVerticalHeight;
                }
            }
            if (obj.type === 'horizontal') {
                const maxHorizontalHeight = UIUtils.getMaxHeight(obj.children, debuggerRef);
                if (maxHorizontalHeight > maxHeight) {
                    maxHeight = maxHorizontalHeight;
                }
            }
        }
        debuggerRef.list.push(`__getMaxHeight: returning ${maxHeight}`);
        return maxHeight;
    };
    static accumulateWidth = (nodeList, debuggerRef = { list: [] }) => {
        let width = 0;
        for (const obj of nodeList) {
            if (obj.type === 'box') {
                if (!obj.w) {
                    throw new Error('Button should have width');
                }
                width += obj.w;
            }
            if (obj.type === 'vertical') {
                const verticalWidth = UIUtils.getMaxWidth(obj.children, debuggerRef);
                width += verticalWidth;
            }
            if (obj.type === 'horizontal') {
                const horizontalWidth = UIUtils.accumulateWidth(obj.children, debuggerRef);
                width += horizontalWidth;
            }
        }
        debuggerRef.list.push(`__accumulateWidth: returning ${width}`);
        return width;
    };
    static accumulateHeight = (nodeList, debuggerRef = { list: [] }) => {
        let height = 0;
        for (const node of nodeList) {
            if (node.type === 'box') {
                if (!node.h) {
                    throw new Error('Button should have height');
                }
                height += node.h;
            }
            if (node.type === 'vertical') {
                const biggestVerticalHeight = UIUtils.accumulateHeight(node.children, debuggerRef);
                height += biggestVerticalHeight;
            }
            if (node.type === 'horizontal') {
                const linearSumOfHeights = UIUtils.getMaxHeight(node.children, debuggerRef);
                height += linearSumOfHeights;
            }
        }
        debuggerRef.list.push(`__accumulateHeight: returning ${height}`);
        return height;
    };
}

;// CONCATENATED MODULE: ./src/Window_SceneComponents/VList.ts



class VList {
    static renderVerticalList = (currentNode, parentNode, renderState, debuggerRef = { list: [] }) => {
        const rect = {
            x: renderState.startX,
            y: renderState.startY,
            w: UIUtils.getMaxWidth(currentNode.children),
            h: UIUtils.accumulateHeight(currentNode.children, debuggerRef),
        };
        debuggerRef.list.push(`VList(${rect.x}, ${rect.y}, ${rect.w}, ${rect.h}) (len=${currentNode.children.length})`);
        const drawHandler = GlobalHandler.getWithType(TOKENS.drawHandler, 'SceneRender');
        drawHandler.rect({
            x: rect.x - 20,
            y: rect.y - 20,
            w: rect.w + 40,
            h: rect.h + 40,
            strokeOrFill: 'stroke',
            origin: 'topLeft',
            strokeColor: 'blue',
            strokeWidth: 0,
            fillColor: 'white',
            useCamera: false,
        });
        if (currentNode.children && currentNode.children.length > 0) {
            renderState.altura += 1;
            UITree.renderComponentController(currentNode.children, currentNode, renderState, debuggerRef);
        }
        if (parentNode && parentNode.type === 'horizontal') {
            renderState.startX += rect.w;
        }
        if (parentNode && parentNode.type === 'vertical') {
            renderState.startY += rect.h;
        }
    };
}

;// CONCATENATED MODULE: ./src/Window_SceneComponents/HList.ts



class HList {
    static renderHorizontalList = (currentNode, parentNode, renderState, debuggerRef = { list: [] }) => {
        debuggerRef.list.push(`HList(${currentNode.w},${currentNode.h}); `);
        const rect = {
            x: renderState.startX,
            y: renderState.startY,
            w: UIUtils.accumulateWidth(currentNode.children, debuggerRef),
            h: UIUtils.getMaxHeight(currentNode.children, debuggerRef),
        };
        const drawHandler = GlobalHandler.getWithType(TOKENS.drawHandler, 'SceneRender');
        drawHandler.rect({
            x: rect.x - 30,
            y: rect.y - 30,
            w: rect.w + 60,
            h: rect.h + 60,
            strokeOrFill: 'stroke',
            strokeColor: 'red',
            strokeWidth: 1,
            fillColor: 'transparent',
            origin: 'topLeft',
            useCamera: false,
        });
        if (currentNode.children && currentNode.children.length > 0) {
            renderState.altura += 1;
            UITree.renderComponentController(currentNode.children, currentNode, renderState, debuggerRef);
        }
        if (parentNode && parentNode.type === 'horizontal') {
            renderState.startX += rect.w;
        }
        if (parentNode && parentNode.type === 'vertical') {
            renderState.startY += rect.h;
        }
    };
}

;// CONCATENATED MODULE: ./src/Math/GeometricUtil.js
const GeometricUtil = {
  // convertToGrid: (x, y, w, h, x0 = 0, y0 = 0) => {
  //    // math for positioning robot into grid
  //    const xOnSquare = x0 + Math.floor(x / w) * w;
  //    const yOnSquare = y0 + Math.floor(y / h) * h;
  //    // const cx = xOnSquare + w / 2; // center x
  //    // const cy = yOnSquare + h / 2; // center y
  //    // return { x: cx, y: cy }
  //    return { x: xOnSquare, y: yOnSquare };
  // },
  componentDistanceOfTwoPoints: (x1, y1, x2, y2) => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return {
      dx,
      dy
    };
  },
  isPointInsideRect: (px, py, x, y, w, h) => {
    if (px > x && px < x + w && py > y && py < y + h) {
      return true;
    }
    return false;
  },
  isPointOverCenterRect: (px, py, x, y, w, h) => {
    x = x - w / 2;
    y = y - h / 2;
    if (px > x && px < x + w && py > y && py < y + h) {
      return true;
    }
    return false;
  },
  isPointInsideCircle: (px, py, cx, cy, radius) => {
    // check if istance between point and circle-center is less than radius
    const distance = Math.sqrt(Math.abs(cx - px) * Math.abs(cx - px) + Math.abs(cy - py) * Math.abs(cy - py));
    if (distance <= radius) {
      return true;
    }
    return false;
  },
  isRectOverCircle: (x1, y1, x2, y2, cx, cy, radius) => {
    // solution 1: treat circle as rect, and do rect-rect collision by checking is react overlap a piece of rect 2
    let minRectX = Math.min(x1, x2);
    let maxRectX = Math.max(x1, x2);
    let minCircleX = cx - radius;
    let maxCircleX = cx + radius;
    let minRectY = Math.min(y1, y2);
    let maxRectY = Math.max(y1, y2);
    let minCircleY = cy - radius;
    let maxCircleY = cy + radius;
    let isX = maxCircleX > minRectX && minCircleX < maxRectX;
    let isY = maxCircleY > minRectY && minCircleY < maxRectY;
    if (isX && isY) {
      return true;
    }
    return false;
  }
};
;// CONCATENATED MODULE: ./src/Window_SceneComponents/UIBox.ts



class UIBox {
    static renderBox = (node, parentNode, renderState, debuggerRef = { list: [] }) => {
        if (!node.w || !node.h) {
            throw new Error('Button should have width and height');
        }
        const rect = {
            x: renderState.startX,
            y: renderState.startY,
            w: node.w,
            h: node.h,
        };
        debuggerRef.list.push(`box(${rect.x},${rect.y},${rect.w},${rect.h})(${node.text})`);
        const mouseToCanvas = MouseUtil.mouseToCanvas();
        const isMouseOverBox = GeometricUtil.isPointInsideRect(mouseToCanvas.x, mouseToCanvas.y, rect.x, rect.y, rect.w, rect.h);
        let isClickOverYou = false;
        const mouseHandler = GlobalHandler.getWithType(TOKENS.mouseHandler, 'SceneRender');
        if (mouseHandler.mouseClickPosition) {
            console.log(`Testing click over ${rect.x},${rect.y} and ${mouseHandler.mouseClickPosition.x},${mouseHandler.mouseClickPosition.y}`);
            isClickOverYou = GeometricUtil.isPointInsideRect(mouseHandler.mouseClickPosition.x, mouseHandler.mouseClickPosition.y, rect.x, rect.y, rect.w, rect.h);
        }
        if (isClickOverYou && node.onMousePress) {
            node.onMousePress();
        }
        const fillColor = isMouseOverBox ? 'darkgreen' : 'lightgreen';
        const strokeColor = isMouseOverBox ? 'red' : 'black';
        const drawHandler = GlobalHandler.getWithType(TOKENS.drawHandler, 'SceneRender');
        drawHandler.rect({
            x: rect.x,
            y: rect.y,
            w: rect.w,
            h: rect.h,
            useCamera: false,
            origin: 'topLeft',
            strokeOrFill: 'strokeFill',
            strokeWidth: 1,
            strokeColor,
            fillColor,
        });
        drawHandler.text({
            x: rect.x + 20,
            y: rect.y + rect.h / 2,
            useCamera: false,
            font: '24px Arial',
            text: node.text || 'null',
            textColor: 'black',
            background: true,
            backgroundColor: '#fff',
        });
        if (parentNode && parentNode.type === 'horizontal') {
            renderState.startX += rect.w;
        }
        if (parentNode && parentNode.type === 'vertical') {
            renderState.startY += rect.h;
        }
    };
}

;// CONCATENATED MODULE: ./src/Window_SceneComponents/UIEngine.ts

class UIEngine {
    static renderEngine = (currentNode, parentNode, renderState, debuggerRef = { list: [] }) => {
        const drawHandler = GlobalHandler.getWithType(TOKENS.drawHandler, 'SceneRender');
        currentNode.instance?.draw(drawHandler);
    };
}

;// CONCATENATED MODULE: ./src/Window_SceneComponents/UIRoot.ts



class UIRoot {
    static renderRoot = (node, parentNode, renderState, debuggerRef = { list: [] }) => {
        if (node.children.length !== 1) {
            throw new Error('ROOT should have only 1 child');
        }
        const childrenWidth = UIUtils.accumulateWidth(node.children, debuggerRef);
        const childrenHeight = UIUtils.getMaxHeight(node.children, debuggerRef);
        if (parentNode) {
            throw new Error('ROOT should not have a parent');
        }
        const canvas = GlobalHandler.getWithType(TOKENS.canvas, 'SceneRender');
        const parentWidth = canvas.width;
        const parentHeight = canvas.height;
        const midCanvasX = parentWidth / 2 - childrenWidth / 2;
        const midCanvasY = parentHeight / 2 - childrenHeight / 2;
        renderState.startX = midCanvasX;
        renderState.startY = midCanvasY;
        debuggerRef.list.push(`root(${midCanvasX}, ${midCanvasY}, ${parentWidth}, ${parentHeight})`);
        const drawHandler = GlobalHandler.getWithType(TOKENS.drawHandler, 'SceneRender');
        drawHandler.rect({
            x: midCanvasX - 50,
            y: midCanvasY - 50,
            w: childrenWidth + 100,
            h: childrenHeight + 100,
            strokeOrFill: 'strokeFill',
            strokeColor: 'black',
            strokeWidth: 1,
            fillColor: 'white',
            origin: 'topLeft',
            useCamera: false,
        });
        UITree.renderComponentController(node.children, node, renderState, debuggerRef);
    };
}

;// CONCATENATED MODULE: ./src/Window_SceneComponents/UITree.ts





class UITree {
    static renderComponentController = (nodeList = [], parentNode, renderState, debuggerRef = { list: [] }) => {
        for (const node of nodeList) {
            debuggerRef.list.push(`#renderComponentController`);
            if (!node)
                throw new Error('Node is undefined');
            if (node.type === 'root') {
                UIRoot.renderRoot(node, parentNode, renderState, debuggerRef);
            }
            if (node.type === 'vertical') {
                VList.renderVerticalList(node, parentNode, renderState, debuggerRef);
            }
            if (node.type === 'horizontal') {
                const lastStartX = renderState.startX;
                HList.renderHorizontalList(node, parentNode, renderState, debuggerRef);
                renderState.startX = lastStartX;
            }
            if (node.type === 'box') {
                UIBox.renderBox(node, parentNode, renderState, debuggerRef);
            }
            if (node.type === 'Engine') {
                UIEngine.renderEngine(node, parentNode, renderState, debuggerRef);
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/Window_SceneUtils/SceneRender.ts


class SceneRender {
    constructor() { }
    renderScene = (treeRootNode) => {
        if (!treeRootNode.type) {
            throw new Error('treeRootNode should have type');
        }
        if (treeRootNode.type !== 'root') {
            throw new Error(`the first node of a scene must be root! got ${treeRootNode.type}`);
        }
        const children = [treeRootNode];
        const renderState = {
            startX: 0,
            startY: 0,
            altura: 0,
        };
        const parentNode = undefined;
        const debuggerRef = { list: [] };
        UITree.renderComponentController(children, parentNode, renderState, debuggerRef);
        const mouseHandler = GlobalHandler.getWithType(TOKENS.mouseHandler, 'SceneRender');
        mouseHandler.resetMouseClicks();
    };
    _renderDebugRef = (debuggerRef) => {
        const drawHandler = GlobalHandler.getWithType(TOKENS.drawHandler, 'SceneRender');
        debuggerRef.list.forEach((line, index) => {
            drawHandler.text({
                x: 800,
                y: 100 + index * 25,
                text: line,
                textColor: 'white',
                background: true,
                backgroundColor: '#F22',
            });
        });
    };
    _renderBorder = () => {
        const drawHandler = GlobalHandler.getWithType(TOKENS.drawHandler, 'SceneRender');
    };
}

;// CONCATENATED MODULE: ./src/DepInjection/Storage.ts
const Injectable = () => {
    return (target) => {
        Reflect.defineMetadata('injectable', true, target);
    };
};
class InstanceStorage {
    dependencies = {};
    static instance;
    uniqueId = Math.random() * 1000;
    constructor() {
        if (InstanceStorage.instance) {
            return InstanceStorage.instance;
        }
        InstanceStorage.instance = this;
    }
    init(deps) {
        console.log(`init called! deps.len=${deps.length} deps=${deps.map((d) => d.name)}`);
        deps.map((target) => {
            const isInjectable = Reflect.getMetadata('injectable', target);
            if (!isInjectable)
                return;
            const paramTypes = Reflect.getMetadata('design:paramtypes', target) || [];
            const childrenDep = paramTypes.map((paramType) => {
                this.init([paramType]);
                if (!this.dependencies[paramType.name]) {
                    this.dependencies[paramType.name] = new paramType();
                    return this.dependencies[paramType.name];
                }
                return this.dependencies[paramType.name];
            });
            if (!this.dependencies[target.name]) {
                this.dependencies[target.name] = new target(...childrenDep);
            }
        });
        return this;
    }
    get(serviceClass) {
        let instance = this.dependencies[serviceClass.name];
        if (!instance) {
            console.log(`>>> No instance found for ${serviceClass.name}`);
            Reflect.defineMetadata('injectable', true, serviceClass);
            this.init([serviceClass]);
            instance = this.dependencies[serviceClass.name];
        }
        return instance;
    }
}

;// CONCATENATED MODULE: ./src/Engine/Constants.ts

const RESOURCE_KEYS = {
    WOOD: 'WOOD',
    WATER: 'WATER',
    POTATO_PLANT: 'POTATO_PLANT',
    POTATO: 'POTATO',
    MESH_POTATO: 'MESH_POTATO',
};
const STORAGES_KEYS = {
    HOUSE: 'HOUSE',
    WAREHOUSE: 'WAREHOUSE',
};
const MAP_KEYS = {
    MAP1: 'MAP1',
};
const GRID_KEYS = {
    TEMPERATURE: 'TEMPERATURE',
    HUMIDITY: 'HUMIDITY',
    AIR_SPEED: 'AIR_SPEED',
    PERLIN_NOISE: 'PERLIN_NOISE',
};
const KEYBINDING = {
    Digit2: {
        command: 'ROBOT',
        subCommand: '',
    },
    Digit3: {
        command: 'STORAGE',
        subCommand: 'WAREHOUSE',
    },
};
const MAPS_DB = {
    MAP1: {
        w: 8000,
        h: 8000,
    },
};
const RESOURCE_DB = {
    WOOD: {
        SPRITE_NAME: SPRITE_MAP.POTATO,
        W: 25,
        H: 25,
    },
    WATER: {
        SPRITE_NAME: SPRITE_MAP.POTATO,
        W: 25,
        H: 25,
    },
    POTATO_PLANT: {
        SPRITE_NAME: SPRITE_MAP.POTATO,
        W: 25,
        H: 25,
    },
    POTATO: {
        SPRITE_NAME: SPRITE_MAP.POTATO,
        W: 25,
        H: 25,
    },
    MESH_POTATO: {
        SPRITE_NAME: SPRITE_MAP.POTATO,
        W: 25,
        H: 25,
    },
};
const STORAGE_DB = {
    HOUSE: {
        TYPE: STORAGES_KEYS.HOUSE,
        SPRITE_NAME: SPRITE_MAP.HOUSE,
        W: 100,
        H: 100,
        LIFE: 100,
        COSTS: [{ resourceKey: RESOURCE_KEYS.WOOD, cost: 100 }],
        CAPACITY: [{ resourceKey: RESOURCE_KEYS.POTATO, capacity: 3 }],
        INPUTS: [],
        OUTPUTS: [
            { resourceKey: RESOURCE_KEYS.POTATO, duration: 2000, amount: 1 },
        ],
    },
    WAREHOUSE: {
        TYPE: STORAGES_KEYS.WAREHOUSE,
        SPRITE_NAME: 'WAREHOUSE',
        W: 100,
        H: 100,
        LIFE: 100,
        COSTS: [{ resourceKey: 'WOOD', cost: 100 }],
        CAPACITY: [{ resourceKey: 'POTATO', capacity: 100 }],
        INPUTS: [],
        OUTPUTS: [],
    },
};
const STUFF_MAP = {
    ROBOT: {
        TYPE: 'ROBOT',
        NAME: 'ROBOT',
        W: 50,
        H: 50,
        INITIAL_SPRITE_KEY: 'CHAR_PARADO',
        SPRITE_MAP: {
            PARADO: 'CHAR_PARADO',
            WALKIGN: 'CHAR_WALKING',
            CARRYING: 'CHAR_PARADO',
        },
    },
    TREE: {
        TYPE: 'STUFF',
        NAME: 'TREE',
        INITIAL_SPRITE_KEY: SPRITE_MAP.TREE1,
        SPRITE_KEY: SPRITE_MAP.TREE1,
        W: 50,
        H: 50,
    },
};

;// CONCATENATED MODULE: ./src/Render/Camera.ts



class Camera {
    canvas;
    x;
    y;
    w;
    h;
    scale;
    fx;
    fy;
    ax;
    ay;
    vx;
    vy;
    maxVel;
    maxAcc;
    minCamX;
    minCamY;
    maxCamX;
    maxCamY;
    target;
    showMoveToTarget;
    dx;
    dy;
    maxDiff;
    constructor() {
        this.canvas = GlobalHandler.getWithType(TOKENS.canvas, 'Camera');
        this.x = -99;
        this.y = -99;
        this.minCamX = -1000;
        this.minCamY = -1000;
        this.maxCamX = MAPS_DB['MAP1'].w - this.canvas.width + 100;
        this.maxCamY = MAPS_DB['MAP1'].h - this.canvas.height + 100;
        this.w = this.canvas.width;
        this.h = this.canvas.height;
        this.scale = 1;
        this.fx = 0;
        this.fy = 0;
        this.ax = 0;
        this.ay = 0;
        this.maxAcc = 1.0;
        this.vx = 0;
        this.vy = 0;
        this.maxVel = 200.0;
        this.target = { x: 0, y: 0 };
        this.showMoveToTarget = false;
        this.dx = 0;
        this.dy = 0;
        this.maxDiff = 100.0;
        const messageDispatcher = GlobalHandler.getWithType(TOKENS.messageDispatcher, 'Camera');
        messageDispatcher.registerListener(EVENT_TOKENS.onResize, this.onResize, 'Camera');
    }
    getCameraData = () => {
        return {
            x: this.x,
            y: this.y,
            w: this.w,
            h: this.h,
            scale: this.scale,
        };
    };
    follow(_x, _y) {
        this.fx = _x - this.w / 2.0;
        this.fy = _y - this.h / 2.0;
    }
    moveToTarget(x, y) {
        this.target = { x: x - this.w / 2, y: y - this.h / 2 };
        console.log('CAMERA TARGET UPDATED', this.target);
        this.showMoveToTarget = true;
    }
    update(ts) {
        if (this.showMoveToTarget && this.target.x && this.target.y) {
            this.dx = this.target.x - this.x;
            this.dy = this.target.y - this.y;
            if (this.dx > -this.maxDiff && this.dx < this.maxDiff)
                this.dx = 0;
            if (this.dy > -this.maxDiff && this.dy < this.maxDiff)
                this.dy = 0;
            if (this.dx == 0 && this.dy == 0)
                this.showMoveToTarget = false;
            this.ax = this.dx / 10;
            this.ay = this.dy / 10;
            this.ax = this.constainMinMax(this.ax, -this.maxAcc, this.maxAcc);
            this.ax = this.constainMinMax(this.ax, -this.maxAcc, this.maxAcc);
            console.log('CAMERA TARGET', this.target.x, this.target.y);
            console.log('CAMERA DX', this.dx, this.dy);
            console.log('CAMERA ACC', this.ax, this.ay);
        }
        this.ax = this.constainMinMax(this.ax, -this.maxAcc, this.maxAcc);
        this.ay = this.constainMinMax(this.ay, -this.maxAcc, this.maxAcc);
        this.vx += this.ax;
        this.vy += this.ay;
        this.vx = this.constainMinMax(this.vx, -this.maxVel, this.maxVel);
        this.vy = this.constainMinMax(this.vy, -this.maxVel, this.maxVel);
        this.x += this.vx;
        this.y += this.vy;
        this.x = this.constainMinMax(this.x, this.minCamX, this.maxCamX);
        this.y = this.constainMinMax(this.y, this.minCamY, this.maxCamY);
        this.ax = 0;
        this.ay = 0;
        this.vx = this.reduceValueByPercent(this.vx, 0.1);
        this.vy = this.reduceValueByPercent(this.vy, 0.1);
        if (this.isValueBetween(this.vx, -0.3, 0.3))
            this.vx = 0;
        if (this.isValueBetween(this.vx, -0.3, 0.3))
            this.vx = 0;
    }
    reduceValueByPercent(value, percent) {
        if (value === 0)
            return 0;
        return value - value * percent;
    }
    constainMinMax(value, min, max) {
        if (value < min)
            return min;
        if (value > max)
            return max;
        return value;
    }
    isValueBetween(value, min, max) {
        if (value > min && value < max)
            return true;
        return false;
    }
    onResize = () => {
        console.log('camera onResize');
        this.w = this.canvas.width;
        this.h = this.canvas.height;
    };
    updateMaxCamPosition = () => {
        this.maxCamX =
            (MAPS_DB['MAP1'].w - this.canvas.width) * this.scale + 1000;
        this.maxCamY =
            (MAPS_DB['MAP1'].h - this.canvas.height) * this.scale + 1000;
    };
    moveY(acc) {
        this.showMoveToTarget = false;
        this.ay += acc;
    }
    moveX(acc) {
        this.showMoveToTarget = false;
        this.ax += acc;
    }
    zoomIn() {
        console.log('CAMERA.zoomIn');
        if (this.scale > 1.3)
            return;
        this.scale += 0.06;
        this.updateMaxCamPosition();
    }
    zoomOut() {
        console.log('CAMERA.zoomOut');
        if (this.scale < 0.4)
            return;
        this.scale -= 0.06;
        this.updateMaxCamPosition();
    }
}

;// CONCATENATED MODULE: ./src/Render/DrawHandler.ts

class DrawHandler {
    constructor() { }
    rect = ({ x, y, w, h, origin = 'center', strokeOrFill = 'stroke', strokeColor = 'black', strokeWidth = 1, fillColor = 'black', useCamera = false, }) => {
        const canvas = GlobalHandler.getWithType(TOKENS.canvas, 'DrawHandler');
        const ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        let _x = x;
        let _y = y;
        if (origin === 'center') {
            _x = x - w / 2;
            _y = y - h / 2;
        }
        else if (origin === 'topLeft') {
            _x = x;
            _y = y;
        }
        if (useCamera) {
            const camera = GlobalHandler.getWithType(TOKENS.cameraHandler, 'DrawHandler');
            const scale = camera.scale;
            _x = (_x - camera.x) * scale;
            _y = (_y - camera.y) * scale;
        }
        ctx.save();
        ctx.fillStyle = fillColor;
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = strokeWidth;
        if (strokeOrFill === 'stroke') {
            ctx.strokeRect(_x, _y, w, h);
        }
        else if (strokeOrFill === 'fill') {
            ctx.fillRect(_x, _y, w, h);
        }
        else if (strokeOrFill === 'strokeFill') {
            ctx.fillRect(_x, _y, w, h);
            ctx.strokeRect(_x, _y, w, h);
        }
        ctx.restore();
    };
    sprite = ({ spriteKey, x, y, origin = 'center', useCamera = false, frameIndex = 0, }) => {
        const spriteHandler = GlobalHandler.getWithType(TOKENS.spriteHandler, 'DrawHandler');
        const sprite = spriteHandler.getSprite(spriteKey);
        if (!sprite)
            return;
        const frameAsLittleCanvas = sprite.frames[frameIndex];
        if (!frameAsLittleCanvas)
            return;
        const sw = sprite.sw;
        const sh = sprite.sh;
        const sx = 0;
        const sy = 0;
        const dx = x;
        const dy = y;
        const dw = sw;
        const dh = sh;
        const canvas = GlobalHandler.getWithType(TOKENS.canvas, 'DrawHandler');
        const ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        if (origin === 'center') {
            ctx.drawImage(frameAsLittleCanvas, sx, sy, sw, sh, dx, dy, dw, dh);
        }
        else if (origin === 'topRight') {
            ctx.drawImage(frameAsLittleCanvas, sx, sy, sw, sh, dx, dy, dw, dh);
        }
    };
    image = ({ image, x, y, w, h, origin = 'center', useCamera = false, }) => {
        const canvas = GlobalHandler.getWithType(TOKENS.canvas, 'DrawHandler');
        const ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        let _x = x;
        let _y = y;
        let _w = w;
        let _h = h;
        if (useCamera) {
            const camera = GlobalHandler.getWithType(TOKENS.cameraHandler, 'DrawHandler');
            const scale = camera.scale;
            _x = (_x - camera.x) * scale;
            _y = (_y - camera.y) * scale;
            _w = _w * scale;
            _h = _h * scale;
        }
        ctx.save();
        if (origin === 'center') {
            _x = _x - _w / 2;
            _y = _y - _h / 2;
            ctx.drawImage(image, _x, _y, _w, _h);
        }
        else if (origin === 'topRight') {
            ctx.drawImage(image, _x, _y, _w, _h);
        }
        ctx.restore();
    };
    text = ({ x, y, text, font = '17px Arial', textColor = 'black', useCamera = false, background = false, backgroundColor = '#eee', }) => {
        const canvas = GlobalHandler.getWithType(TOKENS.canvas, 'DrawHandler');
        const ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        ctx.save();
        ctx.font = font;
        ctx.fillStyle = backgroundColor;
        if (background) {
            ctx.fillStyle = backgroundColor;
            const textMetrics = ctx.measureText(text);
            const textW = textMetrics.width;
            let actualHeight = textMetrics.actualBoundingBoxAscent +
                textMetrics.actualBoundingBoxDescent;
            const textH = actualHeight;
            ctx.fillRect(x, y - textH, textW, textH);
        }
        ctx.fillStyle = textColor;
        ctx.fillText(text, x, y);
        ctx.restore();
    };
}

;// CONCATENATED MODULE: ./src/WindowManager/WindowManager.ts













class WindowManager {
    static classNameConst = 'WindowManager';
    windowKeyStateMap;
    constructor() { }
    async setup({ canvas, initialSceneKey, sceneClassMap, fileList, }) {
        const di = new GlobalHandler(WindowManager.classNameConst);
        const dd = new InstanceStorage();
        dd.init([MessageDispatcher]);
        di.save(TOKENS.messageDispatcher, new MessageDispatcher(), WindowManager.classNameConst);
        di.save(TOKENS.canvas, canvas, WindowManager.classNameConst);
        di.save(TOKENS.sceneRender, new SceneRender(), WindowManager.classNameConst);
        di.save(TOKENS.fileHandler, new FileHandler(), WindowManager.classNameConst);
        const diFileHandler = GlobalHandler.getWithType(TOKENS.fileHandler, WindowManager.classNameConst);
        await diFileHandler.startLoad(fileList);
        di.save(TOKENS.eventHandler, new EventHandler(), WindowManager.classNameConst);
        di.save(TOKENS.mouseHandler, new MouseHandler(), WindowManager.classNameConst);
        di.save(TOKENS.cameraHandler, new Camera(), WindowManager.classNameConst);
        di.save(TOKENS.spriteHandler, new SpriteHandler(), WindowManager.classNameConst);
        di.save(TOKENS.drawHandler, new DrawHandler(), WindowManager.classNameConst);
        di.save(TOKENS.menuHandler, new MenuHandler(), WindowManager.classNameConst);
        const sceneHandler = new SceneHandler();
        di.save(TOKENS.sceneHandler, sceneHandler, WindowManager.classNameConst);
        sceneHandler.setScenes(sceneClassMap);
        sceneHandler.setInitialScene(initialSceneKey);
        const loopManager = new LoopManager({
            who: WindowManager.classNameConst,
            onUpdate: (dt) => {
                this._update(dt);
            },
            onRender: () => {
                this._render();
            },
        });
        di.save(TOKENS.loopManager, loopManager, WindowManager.classNameConst);
        loopManager.start();
    }
    _update = (dt) => {
        const di = new GlobalHandler(WindowManager.classNameConst);
        const sceneHandler = (di.get(TOKENS.sceneHandler, WindowManager.classNameConst));
        sceneHandler.update(dt);
    };
    _render = () => {
        const canvas = GlobalHandler.getWithType(TOKENS.canvas, WindowManager.classNameConst);
        if (!canvas)
            throw new Error('ADSIJOIOQWE');
        const ctx = canvas.getContext('2d');
        if (!ctx)
            throw new Error('ADSIJOIOQWE');
        ctx.reset();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.fillStyle = '#eee';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
        const sceneHandler = GlobalHandler.getWithType(TOKENS.sceneHandler, WindowManager.classNameConst);
        sceneHandler.render();
        this._drawTextDebug();
        this._drawMouse();
        this._drawBorder();
    };
    _drawMouse = () => {
        const di = new GlobalHandler(WindowManager.classNameConst);
        const mouseHandler = di.get(TOKENS.mouseHandler, WindowManager.classNameConst);
        const mouse = mouseHandler.getMouse();
    };
    _drawBorder = () => {
        const di = new GlobalHandler(WindowManager.classNameConst);
        const canvas = di.get(TOKENS.canvas, WindowManager.classNameConst);
        const ctx = canvas.getContext('2d');
        ctx.save();
        ctx.strokeStyle = 'darkgrey';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
    };
    _drawTextDebug = () => {
        let string;
        const di = new GlobalHandler(WindowManager.classNameConst);
        const canvas = di.get(TOKENS.canvas, WindowManager.classNameConst);
        const ctx = canvas.getContext('2d');
        ctx.save();
        ctx.font = '14px Arial';
        ctx.fillStyle = '#000';
        const textConfig = {
            x: 9,
            y: 0,
            spacing: 16,
        };
        const eventActions = GlobalHandler.tryGetWithType(TOKENS.eventActions, WindowManager.classNameConst);
        if (eventActions) {
            eventActions.actionHandler.drawDebugText(ctx, textConfig);
        }
        ctx.fillText('# FIRST LINE #', textConfig.x, (textConfig.y += textConfig.spacing));
        ctx.fillText('----------------------------', textConfig.x, (textConfig.y += textConfig.spacing));
        const camera = di.get(TOKENS.cameraHandler, WindowManager.classNameConst);
        const _camX = camera?.x?.toFixed(0);
        const _camY = camera?.y?.toFixed(0);
        const _camW = camera?.w?.toFixed(0);
        const _camH = camera?.h?.toFixed(0);
        const _camS = camera?.scale?.toFixed(3);
        const _camMinX = camera?.minCamX?.toFixed(0);
        const _camMinY = camera?.minCamY?.toFixed(0);
        const _camMaxX = camera?.maxCamX?.toFixed(0);
        const _camMaxY = camera?.maxCamY?.toFixed(0);
        string = `CAMERA:\
         XY=(${_camX}, ${_camY})\
         WH=(${_camW}x${_camH})\
         SCALE=(${_camS})\
         MIN_XY=[${_camMinX}, ${_camMinY}]\
         MAX_XY=[${_camMaxX}, ${_camMaxY}]`;
        ctx.fillText(string, textConfig.x, (textConfig.y += textConfig.spacing));
        const mouseRaw = MouseUtil.mouseRaw();
        const mouseToCanvas = MouseUtil.mouseToCanvas();
        string = `MOUSE:\
         mouseRaw=(${mouseRaw.x.toFixed(0)}, ${mouseRaw.y.toFixed(0)})\
         mouseToCanvas=(${mouseToCanvas.x.toFixed(0)}, ${mouseToCanvas.y.toFixed(0)})`;
        ctx.fillText(string, textConfig.x, (textConfig.y += textConfig.spacing));
        ctx.fillText('----------------------------', textConfig.x, (textConfig.y += textConfig.spacing));
        const mapInstance = di.tryToGet(TOKENS.mapHandler, WindowManager.classNameConst);
        if (mapInstance) {
            ctx.fillText(`MAP=${mapInstance.w}, ${mapInstance.h}  CELL=${mapInstance.getCellSize().w}, ${mapInstance.getCellSize().h}`, textConfig.x, (textConfig.y += textConfig.spacing));
        }
        else {
            ctx.fillText(`MAP=undefined  CELL=undefined`, textConfig.x, (textConfig.y += textConfig.spacing));
        }
        ctx.fillText('----------------------------', textConfig.x, (textConfig.y += textConfig.spacing));
        const worldInstance = di.tryToGet(TOKENS.gameWorld, WindowManager.classNameConst);
        if (worldInstance) {
            worldInstance.drawDebugText(ctx, textConfig);
        }
        else {
            ctx.fillText(`WORLD=undefined`, textConfig.x, (textConfig.y += textConfig.spacing));
        }
        string = `=============`;
        ctx.fillText(string, textConfig.x, (textConfig.y += textConfig.spacing));
        const loopInstance = GlobalHandler.tryGetWithType(TOKENS.loopManager, WindowManager.classNameConst);
        string = `LOOP: \
         FPS=${loopInstance?.fps.toFixed(2)}\
         isRunning=${loopInstance?.isRunning}\
         loopDurationMs=${loopInstance?.loopDurationMs.toFixed(2)}\
         renderCounter=${loopInstance?.renderCounter}\
         updateCounter=${loopInstance?.updateCounter}`;
        ctx.fillText(string, textConfig.x, (textConfig.y += textConfig.spacing));
        string = `=============`;
        ctx.fillText(string, textConfig.x, (textConfig.y += textConfig.spacing));
        string = `# LAST LINE #`;
        ctx.fillText(string, textConfig.x, (textConfig.y += textConfig.spacing));
        ctx.restore();
    };
}

;// CONCATENATED MODULE: ./src/Anno_MyFiles/tileset1.png
/* harmony default export */ const tileset1 = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUBSURBVHgB7Z0xTBxHFEA/USS74ORUNiSS3YCSxpYo6IDOkaCJi4PKKaCMBJQRkBYILcgpASkdokgk65BsxwVHR4HkyjY0thSDXdk6Cruy742Z0+m4O/vEzOrP6j9pdcsdxS5v/v8zA/vp2tvb+yg54LtSSfLAN2KowoQow4Qow4Qow4Qow4Qow4Qow4Qow4Qow4Qow4Qow4Qow4Qow4Qow4Qo41vJgIODA/c6MDAgKfL0zRt5+vq1O//hyhUZvH5dYhFVSKVSkeXlZdnd3ZWenh7Z3t6WlNh/+VJWHjxwQur5virlt+FhuXPrloQmmpDj42OZm5uTo6MjSZH/nj+X2bMBREQM3rjhzvdfvHCi/rh/X7qqX/8SWEoUIciYnp6Wk5MTFxm8psbKw4fulUjgqFE957O/9/flz0ePggsJXtSpF5OTk07CxMSEzM7OSmo8fvZMXr17V0tNjfj3Ku/fn0tnFyW4kNXVVTk9PZWpqSmZmZlx56lRuHxZ7ty8Kb/fvt3y88KlS+4cKSEJnrKWlpZcdKQ6owLqha8ZzUBC5cMHd46ckAQX0tvb6448Q8EHUtpPV69KSGxh2CH/v30rf5XL7rxZfbkoJqRDVqozKwr+r4ODUdYhJqQDFqprj8fVdPXjtWstC/5FMSFfCTL+ffLEydi8e1diYUK+gkYZfsobAxPyBbKUASakDV4G09u1YjG6DDAhLWC/yssgMnjNgiibi4uLi7Vzv7HIFkr9+2ytaF1Ass5g89Dz8717Lb/33ObjBYkiZGdn59x7CKl/f2xsTK2Qf6qR4WHN0Y4vfd4pXfYElS6shijDhCjDhCjDhCjDhCjDhCjDhCjDhCjDhCjDhCjDhCjDhCjDhCjDhCjDhCiDRxxy8fuQvOB+Y1j9JZWkzNDQkHvNw31YylKGCVGGCVGGCVGGCVGGCVGGCVGGCVGGCVGGCVGGCVGGCVGGCVGGCVFGlAd2Dg8Pa32yaM+Uct+TZtCYjfvr7u6W/v5+CUlQIYigG5Bv6edBCq2aOFIHGb791OjoqCwsLEhIgglBBk3LeHSNiPBRgRwOREHqUjY2NqI2ZAsmhHZ+vk8WRz3I2NrakvX19aSFcA8cpCkGYAyCFHUiwLfza5QBvEe+RRjt/1KE62ZgcY/j4+MSiyARwg+bfNqqwPF5oVBwQlLsMEfdIB0DXVZj3kMQIYhoV9wYXRyMrtCzkixYW1tzGYBI5/obJy0hib4OYXRRX4Bn01ODmlEqldwkpVk6Dk20vr10bWBUUfxoEDA/P5+ckPq6wfVnQTQh9V0b/EKK3Es9SYH6ukF31ay6TkRLWfzRGlLIv0Do+9SVAvV1Y2RkRLIiau93Zlbk3s3NTSkWi7VFovatFF83iGautbGI+zUIEe8/o9iHiP5M/jsCF8oo4ybL5bJ6IX4fjh+4T1vN4F7KZx1KiagQ9xVECCOKC2OO3mqUpFI7gL0qCnkrSGUMLqJi+Kw1U7vv74QgQpBB6LI1QgFsBv+yAvr6+kQ7FPB2U1zuFSHcS+ipcJCi7i/K7/XUw2zFtx9nFGVZIFMkSIT4RRMR4jcSfT4levx0t11KMz4TrKgjhAhACtHg1yF+psLCKu894UPgnqAK/aALaQopyPAbizHJ0wM7Uaa9CIgtIa/YHzkow4Qow4Qow4Qow4Qow4Qow4Qow4Qow4Qow4Qow4Qow4Qow4QowxqYKeMTgsAPLa09cCsAAAAASUVORK5CYII=");
;// CONCATENATED MODULE: ./src/Anno_MyFiles/ground1.png
/* harmony default export */ const ground1 = ("data:image/png;base64,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");
;// CONCATENATED MODULE: ./src/Anno_MyFiles/ground2.png
/* harmony default export */ const ground2 = ("data:image/png;base64,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");
;// CONCATENATED MODULE: ./src/Anno_MyFiles/ground3.png
/* harmony default export */ const ground3 = ("data:image/png;base64,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");
;// CONCATENATED MODULE: ./src/Anno_MyFiles/char1.png
/* harmony default export */ const char1 = ("data:image/png;base64,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");
;// CONCATENATED MODULE: ./src/Anno_MyFiles/fire1.png
/* harmony default export */ const fire1 = ("data:image/png;base64,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");
;// CONCATENATED MODULE: ./src/Anno_MyFiles/storage1.png
/* harmony default export */ const storage1 = ("data:image/png;base64,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");
;// CONCATENATED MODULE: ./src/Anno_MyFiles/storage2.png
/* harmony default export */ const storage2 = ("data:image/png;base64,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");
;// CONCATENATED MODULE: ./src/Anno_MyFiles/storage3.png
/* harmony default export */ const storage3 = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAH0CAYAAADfStQHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMASURBVHgB7dq/S5RxHAfwj5EtKpiDGRVcZTpJ4hYFnhA4FDTU4FIZ1dQiNLRl/0FtDRZpLTX4J4QWOFqJS78GB6FyKElbbLDv4xk53KUHPVHe6wUfvs9xd89yb74/PvfUXT3fsho5G3n0uS6oLXkH628El3/PjoAcCBa5ECxyIVjkYmdUpzlVIVX3+nVWc6lGAzbYLFhZcIqpzmRjU0N9oa2tITraW6KxcVc0NdbHu/df4tnU/HB6vy9KIYPfBisLy1DP0dbm3uP7o/fEgdibQlXOvbHZwsjY7IMohQsqBmsiBap488aximHa6MrFrph+9an4YmahmF5OBjWv3OZ98Mjh3cW7t09uKVQ/DZztzIbhgCgfrEJPd2tUq6d7T7bnKkZpX0aNKxesyedT81GtprSZTzNddtkd1Lyywfrw8dvk4/E3Ua2OdsGipFKD9NL9h7OLb1MroRpZCyIshUTlU+Hc16WVvmvXn05cvtCV2g371kKT9aymZxbiyfjrWFr+vrb0DZzrjNP9h9a+tLy8kg2LAZs81lKIUlc9m7qyz71MdSt+zUrZsjeaTo+rp/oPrmZjlBqqW70/29Uf+uELqYZSDeZ0f/4z1f5XWMlcqjsB6zzdQC4Ei1wIFrkQLHIhWORi7VSoJQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABsMz8ARe9n0hQ/vTAAAAAASUVORK5CYII=");
;// CONCATENATED MODULE: ./src/Anno_MyFiles/mouse1.png
/* harmony default export */ const mouse1 = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALrSURBVHgBvZXPa9NgGMeftElTWrd1W+zYhNGpY6IexIF4mKD3bbed9LCjBw/izdv+BcGjKHjwKOzkSTdviiCIVcY6aSvKpBZtS5s2TZPX79MkkoZ2tW7dA5++P5q83/f58b4hOmZL0JAsxD9CCAnNZfAEjNOQTAaj4CvIghs0BFPBLHgGhMsDMEdHZYuLi4qqqqdDodB9nwjDXq3TIa2dk5WVFcswjJpt22kM677/U+Tk6UjEOPEjYAm8BGJ5elrcmZ8XJ1U16BmLXqIBLOzr8yJRoIFr3xsNurewQMszM5SMRilbq5FuWQlX4DY5nnG/DHL/JLKxsUHb29s85hCumratXBgbawvMxeNtsYsYs9VaLb/guguP86DUUwQCQtM0Sdd1DttZMJdU1b8Ls7HglcnJXoLXwV1y8tjhnT9cBAERiUSilmVxOV+NKwotaRp1M08wLsuUrlQInnt/ed6dAZtAyIF37WazWUH7mQe5apUOsoeZDG0VCv4pDtVr8Ao8BxHQCIpYiURCL5VKX3hQMIyeAo+zWU/AkCTpHa6mDPr7oBgOh7+BBDbMYWuGgi9DoImGvSm2hVBl3SyHanNtEwJc9h8BC+0h3HlZln+lUimTuoSr7Q05B1L4J9PlMulIcgqVxvmomWZ7HrfEPg7xe3R/gN+AY1xFfhu5XK4VXMczGck/x07wA6gkgeT6D6RIdh7QVTA7NTUVR6uQcwQk6mPs3YIn4oNDmA3MCcT+JtoT/RbsZjZ1uvkWYXnjzkkIz7i7kV3Ef9d9fiARgRvZxoXJniTJOVgvsPBP7NrAolyWMYjuYI6rqY4E24j/QCIEAdvdHYfoEfikKMqeaZpcUhH0R9CPoUX+zSJEWgeJdDO+Bfhj9QE8BbfAeV9i+QPHORifmJgYdcdSvwWDxtUx6nrJpbkDcAnXdHLKm+GzZNTrdW5b1MdCXeZELBbjl7dcgfza2hqHKZhcr8L+yyTcxnwTnwIaf5rpkPYHyXk6wyAj8ngAAAAASUVORK5CYII=");
;// CONCATENATED MODULE: ./src/Anno_MyFiles/mouse2.png
/* harmony default export */ const mouse2 = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALfSURBVHgBvZbLTxNRGMUPpakij9ZnUbGdRFZsqDFREjfjhoWa4IKNGkn9B4hLdQUmJkajQlwYFsZiDLIARaMbQaw2IKKRCCTGiMxQhPCydGpB2s4w3tv2ToZm+kDRk3y9d777+OXcx3QAwJ2Mf6qGMgenklIgcYsEhw1WPp2UP1ZzsqWt0xYOBatCknQ+JAU5kpdIiNgguY+fcqsffqjqmBRTP/nn1et37qo6d278pTsTqyhkyqBsRqHVhtrTdfCNfMXD5z1c7Zm6e0kYLV34Q/EHj/DquwU1HsyRoAvfyJje3RDWeVBMqQnmSNHlyhxOzV1LW4er+kSN3h2HLMqjnXY7OKHro7CmIZ+02Mxy/GQY6bt/As1XL2PA94bURS9JtZLwrAuSC4ipo+0+OkkM+F6L5LGJxBPoTiaF2IqttsWeb4uGE+QKomLuXjx7CnINPEi48+Yl2+mmpx28HhCVIAh41fsSNxsuYCkkNZtzGcQOQyoopqxiOSrHS1lXR8FWlLsOoai4hEKaGEScnhS5Pfu4jKCRuRXssCiIxpTEZBk0PNiP2alJD507Jyd0wtGpACYDYThKLHBaLVnHPLh9jRaN9Ifdk2BYChp2pkvQPzYTB1BNh2OIyJlddD9u11xkhTCA9Cuq5eRVFROhKHJw0cqezekgM9IyhvwLhms/uyTDvkWBdXN+OhdeUvWyHHMi/ZQkreOXmSAGhbmMm5vOTfej9jUu9BBNdIMpJJukiAJpRVmTGx7soyEi5fWi7UlgMYA+sv7j8yHkqlQ3SReNqf3YolYNv3/Lj/b1Ynb8M5RoBEosgsJtO5FJEXJ5NptNKLKYyD74ceNivUjS51L75enqNiT+lHgSlUi8wl3OyirYyytgte9F6f6KeH1TYYk2iEIO2AvQfKmebjoFeDJBjMTAriSUwnk7gdlKy0BLZ+VhOHZtx5Wz1SJpOwqD74JskHRiUD4Jps9dMFiq/6bf4/h45J+YLZcAAAAASUVORK5CYII=");
;// CONCATENATED MODULE: ./src/Anno_MyFiles/gui1.png
/* harmony default export */ const gui1 = ("data:image/png;base64,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mXcLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG6tfwSRspz9XhtsMwAAAABJRU5ErkJggg==");
;// CONCATENATED MODULE: ./src/Anno_MyFiles/gui2.png
/* harmony default export */ const gui2 = ("data:image/png;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC46P5/Zf5nG1IQPI4AAAAASUVORK5CYII=");
;// CONCATENATED MODULE: ./src/Anno_MyFiles/tree1.png
/* harmony default export */ const tree1 = ("data:image/png;base64,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");
;// CONCATENATED MODULE: ./src/Anno/MyFilesMap.ts














const FILE_LIST = [
    {
        filename: 'tree1',
        filepath: tree1,
        filetype: 'png',
    },
    {
        filename: 'gui2',
        filepath: gui2,
        filetype: 'png',
    },
    {
        filename: 'gui1',
        filepath: gui1,
        filetype: 'png',
    },
    {
        filename: 'mouse1',
        filepath: mouse1,
        filetype: 'png',
    },
    {
        filename: 'mouse2',
        filepath: mouse2,
        filetype: 'png',
    },
    {
        filename: 'storage1',
        filepath: storage1,
        filetype: 'png',
    },
    {
        filename: 'storage2',
        filepath: storage2,
        filetype: 'png',
    },
    {
        filename: 'storage3',
        filepath: storage3,
        filetype: 'png',
    },
    {
        filename: 'fire1',
        filepath: fire1,
        filetype: 'png',
    },
    {
        filename: 'teste1',
        filepath: tileset1,
        filetype: 'png',
    },
    {
        filename: 'char1',
        filepath: char1,
        filetype: 'png',
    },
    {
        filename: 'ground1',
        filepath: ground1,
        filetype: 'png',
    },
    {
        filename: 'ground2',
        filepath: ground2,
        filetype: 'png',
    },
    {
        filename: 'ground3',
        filepath: ground3,
        filetype: 'png',
    },
];

;// CONCATENATED MODULE: ./src/Window_SceneUtils/SceneBase.abstract.ts
class SceneBase {
    sceneKey;
    constructor(sceneKey) {
        if (!sceneKey) {
            throw new Error('Prease send super(SCENE_KEYS.xxx) when creating a new scene');
        }
        this.sceneKey = sceneKey;
        console.log(`SceneBase constructor with sceneKey: ${sceneKey}`);
    }
}

;// CONCATENATED MODULE: ./src/Window_SceneUtils/SceneCreator.ts
class SceneCreator {
    static createComponent = (componentType, props) => {
        switch (componentType) {
            case 'Engine':
                return {
                    type: 'Engine',
                    children: props?.children || [],
                    instance: props?.instance,
                };
            case 'root':
                return {
                    type: 'root',
                    children: props?.children || [],
                };
            case 'box':
                return {
                    type: 'box',
                    w: props?.w ?? 100,
                    h: props?.h ?? 100,
                    onMousePress: props?.onMouseClick,
                    text: props?.text ?? 'defaultBoxText',
                    children: [],
                };
            case 'hlist':
                return {
                    type: 'horizontal',
                    children: props?.children || [],
                };
            case 'vlist':
                return {
                    type: 'vertical',
                    name: 'B1',
                    text: 'B1',
                    bgColor: '#fee',
                    strokeColor: 'black',
                    children: props?.children || [],
                };
            default:
                return {
                    type: 'box',
                    text: 'default',
                    w: 100,
                    h: 100,
                    children: [],
                };
        }
    };
}

;// CONCATENATED MODULE: ./src/Anno_MyScenes/StartGame.scene.ts




class StartGameScene extends SceneBase {
    sceneState;
    constructor() {
        super(SCENE_KEYS.StartGame);
        this.sceneState = { text1: 'a1', text2: 'a2' };
    }
    onMount = () => { };
    onUnmount = () => { };
    onUpdate = (input) => {
    };
    onRender = () => {
        return SceneCreator.createComponent('root', {
            children: [
                SceneCreator.createComponent('vlist', {
                    children: [
                        SceneCreator.createComponent('box', {
                            text: 'Start Game',
                            w: 400,
                            onMouseClick: () => {
                                GlobalHandler.get(TOKENS.sceneHandler).navigate(SCENE_KEYS.GameRunning);
                            },
                        }),
                        SceneCreator.createComponent('box', {
                            text: 'Load Game',
                            w: 400,
                            onMouseClick: () => { },
                        }),
                        SceneCreator.createComponent('box', {
                            text: 'Settings',
                            w: 400,
                            onMouseClick: () => {
                                GlobalHandler.get(TOKENS.sceneHandler).navigate(SCENE_KEYS.Settings);
                            },
                        }),
                        SceneCreator.createComponent('box', {
                            text: 'About',
                            w: 400,
                            onMouseClick: () => {
                                console.log('a3 mouse click');
                                GlobalHandler.get(TOKENS.sceneHandler).navigate(SCENE_KEYS.AboutScene);
                            },
                        }),
                    ],
                }),
            ],
        });
    };
}

;// CONCATENATED MODULE: ./src/Anno_MyScenes/About.scene.ts




class AboutScene extends SceneBase {
    sceneState;
    constructor() {
        super(SCENE_KEYS.StartGame);
        this.sceneState = { text1: 'a1', text2: 'a2' };
    }
    onMount = () => { };
    onUnmount = () => { };
    onUpdate = (input) => { };
    onRender = () => {
        return SceneCreator.createComponent('root', {
            children: [
                SceneCreator.createComponent('vlist', {
                    children: [
                        SceneCreator.createComponent('hlist', {
                            children: [
                                SceneCreator.createComponent('box', {
                                    text: '< Back',
                                    h: 50,
                                    w: 100,
                                    onMouseClick: () => GlobalHandler.get(TOKENS.sceneHandler).navigate(SCENE_KEYS.StartGame),
                                }),
                                SceneCreator.createComponent('box', { text: 'ABOUT', h: 50, w: 300 }),
                                SceneCreator.createComponent('box', { text: 'BB', h: 50 }),
                            ],
                        }),
                        SceneCreator.createComponent('box', {
                            text: this.sceneState.text1 ?? 'A1',
                            w: 300,
                            onMouseClick: () => {
                                console.log('a1 mouse click');
                                this.sceneState.text1 = this.sceneState.text1 === 'a1' ? 'AAAA' : 'a1';
                            },
                        }),
                    ],
                }),
            ],
        });
    };
}

;// CONCATENATED MODULE: ./src/Engine/MapHandler.ts



class MapBase {
    w;
    h;
    backgroundCanvas;
    spriteHandler;
    drawHandler;
    globalHandler;
    constructor(mapKey) {
        this.w = MAPS_DB[mapKey].w;
        this.h = MAPS_DB[mapKey].h;
        this.generateMapCanvas();
    }
    generateMapCanvas = () => {
        const littleCanvas = document.createElement('canvas');
        const ctx = littleCanvas.getContext('2d');
        if (!ctx) {
            throw new Error('Could not get 2d context');
        }
        littleCanvas.width = this.w;
        littleCanvas.height = this.h;
        const gridHandler = GlobalHandler.getWithType('gridHandler', 'mapHandler');
        gridHandler.buildMapGrid({
            mapSize: { w: littleCanvas.width, h: littleCanvas.height },
        });
        gridHandler.buildTemperatureGrid({
            mapSize: { w: littleCanvas.width, h: littleCanvas.height },
        });
        const spriteHandler = GlobalHandler.getWithType('spriteHandler', 'mapHandler');
        const currentGrid = gridHandler.getGrid(GRID_KEYS.PERLIN_NOISE);
        for (let i = 0; i < littleCanvas.width; i += 50) {
            for (let j = 0; j < littleCanvas.height; j += 50) {
                const perlinValue = currentGrid.getValueXY(i, j).value || 0;
                let randomSpriteKey = SPRITE_MAP.DRY1;
                if (perlinValue < 200) {
                    randomSpriteKey = SPRITE_MAP.GRAMA1;
                }
                if (perlinValue < 175) {
                    randomSpriteKey = SPRITE_MAP.GRAMA2;
                }
                if (perlinValue < 140) {
                    randomSpriteKey = 'DRY1';
                }
                if (perlinValue < 90) {
                    randomSpriteKey = 'AGUA1';
                }
                if (perlinValue < 80) {
                    randomSpriteKey = 'AGUA2';
                }
                if (perlinValue < 60) {
                    randomSpriteKey = 'AGUA3';
                }
                const spriteInstance = spriteHandler.getSprite(randomSpriteKey).frames[0];
                if (!spriteInstance) {
                    throw new Error('Could not get sprite instance');
                }
                const spriteW = spriteHandler.getSprite(randomSpriteKey).sw;
                const spriteH = spriteHandler.getSprite(randomSpriteKey).sh;
                ctx.drawImage(spriteInstance, i, j, spriteW, spriteH);
            }
        }
        this.backgroundCanvas = littleCanvas;
    };
}
class MapHandler {
    currentMaps;
    constructor() {
        this.currentMaps = {};
    }
    buildMaps = () => {
        this.currentMaps[MAP_KEYS.MAP1] = new MapBase(MAP_KEYS.MAP1);
    };
    getCellSize = () => {
        return { w: 50, h: 50 };
    };
    update = (ts) => { };
    render = (d) => { };
    drawMap = (mapName) => {
        const d = GlobalHandler.getWithType('drawHandler', 'mapHandler');
        const littleCanvas = this.currentMaps[mapName].backgroundCanvas;
        if (!littleCanvas) {
            throw new Error('Could not get background canvas');
        }
    };
}

;// CONCATENATED MODULE: ./src/Animation/AnimationBase.ts
class AnimationBase {
    x;
    y;
    w;
    h;
    duration;
    constructor({ x = 0, y = 0, w = 0, h = 0, duration = 0 }) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.duration = duration;
    }
    update(ts) {
        if (this.duration <= 0) {
            return;
        }
        this.duration -= ts;
    }
    render(d) {
        if (this.duration <= 0) {
            return;
        }
    }
}

;// CONCATENATED MODULE: ./src/Animation/AnimatedSprite.ts


class AnimatedSprite extends AnimationBase {
    elapsedTime;
    frameIndex;
    frameDuration;
    shouldLoop;
    spriteName;
    constructor({ name, x, y, ...props }) {
        super({ x, y, w: 0, h: 0, duration: 0 });
        this.frameDuration = props.frameDuration || 1000;
        this.shouldLoop = props.shouldLoop || false;
        this.spriteName = props.spriteName;
        this.elapsedTime = 0;
        this.frameIndex = 0;
    }
    update = (ts) => {
        if (this.duration <= 0) {
            return;
        }
        this.elapsedTime += ts;
        if (this.elapsedTime >= this.frameDuration) {
            this.frameIndex++;
            this.elapsedTime = 0;
        }
        const sprite = GlobalHandler.getWithType('spriteHandler', 'AnimationSprite').getSprite(this.spriteName);
        if (this.frameIndex >= sprite.frames.length - 1) {
            this.frameIndex = 0;
            if (this.shouldLoop === false) {
                this.duration = -1;
            }
        }
    };
    render = (d) => {
        const sprite = GlobalHandler.getWithType('spriteHandler', 'AnimationSprite').getSprite(this.spriteName);
        const spriteCanvas = sprite.frames[this.frameIndex];
        d.image({
            image: spriteCanvas,
            x: this.x,
            y: this.y,
            w: sprite.sw,
            h: sprite.sh,
            origin: 'center',
            useCamera: true,
        });
    };
}

;// CONCATENATED MODULE: ./src/Animation/TextAnimation.ts

class TextAnimation extends AnimationBase {
    text;
    constructor({ x, y, text, duration = 3000 }) {
        console.log(`TextAnimation constructor`);
        super({ x, y, duration });
        this.text = text;
    }
    update(ts) {
        if (this.duration < 0) {
            return;
        }
        this.duration -= ts;
        this.y -= 0.1;
    }
    render(d) {
        if (this.duration < 0) {
            return;
        }
        const startX = this.x;
        const startY = this.y;
        d.text({
            x: startX,
            y: startY,
            text: this.text,
            font: '20px Arial',
            textColor: '#f33a',
            useCamera: true,
        });
    }
}

;// CONCATENATED MODULE: ./src/Commons/GameUtil.ts

const GameUtil = {
    computeRectangleAreaOfTwoPoints: (start, end) => {
        var dx = end.x - start.x;
        var dy = end.y - start.y;
        return Math.abs(dx * dy);
    },
    isSomeIsUndefined: (name, arr) => {
        arr.forEach((item) => {
            if (typeof item === 'undefined') {
                return true;
            }
            return false;
        });
        return false;
    },
    throwIfSomeIsUndefined: (name, arr) => {
        arr.forEach((item) => {
            if (typeof item === 'undefined') {
                throw Error('throwIfSomeIsUndefined at ' + name + ': ' + item + ' is undefined');
            }
        });
    },
    getRandomName: () => {
        const randomNames = [
            'Joe',
            'Mike',
            'Fernando',
            'Mauri',
            'Felipe',
            'William',
            'Carlos',
            'Jonas',
        ];
        let randomIndex = MathUtil.randomIntFromInterval(0, randomNames.length - 1);
        let randomName = randomNames[randomIndex];
        return randomName;
    },
};

;// CONCATENATED MODULE: ./src/GameInstances/Stuff.ts



class Stuff {
    stuffKey;
    type;
    spriteKey;
    spriteMap;
    name;
    x;
    y;
    w;
    h;
    life;
    pos;
    angle;
    heading;
    accTs;
    selected;
    constructor({ x, y, name, stuffKey, }) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.life = 100;
        if (!stuffKey) {
            throw new Error(`Stuff must have stuffKey`);
        }
        this.stuffKey = stuffKey;
        this.type = STUFF_MAP[stuffKey].TYPE;
        this.spriteKey = STUFF_MAP[stuffKey].INITIAL_SPRITE_KEY;
        this.w = STUFF_MAP[stuffKey].W;
        this.h = STUFF_MAP[stuffKey].H;
        if (!this.spriteKey) {
            throw new Error(`Stuff ${stuffKey} must have spriteKey`);
        }
        if (!this.w) {
            throw new Error(`Stuff ${stuffKey} must have width`);
        }
        if (!this.h) {
            throw new Error(`Stuff ${stuffKey} must have height`);
        }
        this.life = 100;
        let xOnSquare = Math.floor(x / this.w) * this.w;
        let yOnSquare = Math.floor(y / this.h) * this.h;
        this.x = xOnSquare + this.w / 2;
        this.y = yOnSquare + this.h / 2;
        this.pos = new Vec2(this.x, this.y);
        this.angle = 0;
        this.heading = 0;
        this.accTs = 0;
        this.selected = false;
    }
    update = (ts) => {
        this.accTs += ts;
    };
    render = (d) => {
        d.sprite({
            spriteKey: this.spriteKey,
            x: this.x,
            y: this.y,
            useCamera: true,
            origin: 'center',
        });
    };
    setSprite = (spriteKey) => {
        this.spriteKey = spriteKey;
    };
    isSelected = () => {
        return this.selected;
    };
    drawShadow(d) {
    }
    isPointOverYou(px, py) {
        const radius = this.w;
        if (GeometricUtil.isPointInsideCircle(px, py, this.pos.x, this.pos.y, radius)) {
            return true;
        }
        return false;
    }
    isRectOverYou = (x1, y1, x2, y2) => {
        const radius = this.w;
        if (GeometricUtil.isRectOverCircle(x1, y1, x2, y2, this.pos.x, this.pos.y, radius)) {
            return true;
        }
        return false;
    };
    renderIfSelected = (d) => {
        if (!this.isSelected()) {
            return;
        }
    };
    renderSprite = (d, spriteKey) => {
        d.sprite({
            spriteKey: spriteKey,
            x: this.pos.x,
            y: this.pos.y,
            useCamera: true,
            origin: 'center',
        });
    };
    static drawShadow(d, x, y) {
    }
}

;// CONCATENATED MODULE: ./src/BehaviorTree/BeTreeNode.ts
const BE_TREE_VALUES = {
    RUNNING: 1,
    SUCCESS: 2,
    FAILURE: 3,
};
class BeTreeNode {
    state;
    constructor(state) {
        this.state = state;
    }
    move(dt) {
        throw new Error('Must override this abstract class');
    }
}

;// CONCATENATED MODULE: ./src/BehaviorTree/BeTreeSel.js
// SELECTOR: Vai chamando node por node, se node um falhar, tenta o proximo; mas se algum for sucess ou running, retorna

class BeTreeSel extends BeTreeNode {
  constructor(robot, treeName, ...nodes) {
    super();
    this.name = treeName;
    this.nodes = nodes;
    this.robot = robot;
  }
  move() {
    this.robot.listOfTextToDebug.push({
      text: '#',
      bg: '#ccf'
    });
    this.robot.listOfTextToDebug.push({
      text: 'BeTreeSel: [' + this.name + ']',
      bg: '#ccf'
    });
    for (let child of this.nodes) {
      switch (child.move()) {
        case BE_TREE_VALUES.RUNNING:
          // node esta running, retorna running pra nao tenta rodar o proximo
          return BE_TREE_VALUES.RUNNING;
        case BE_TREE_VALUES.SUCCESS:
          // node teve success, retorna pra nao tenta rodar o proximo
          return BE_TREE_VALUES.SUCCESS;
        case BE_TREE_VALUES.FAILURE:
          // node falhou, faz break pra tentar o proximo node do "for (let child of this.nodes)"
          break;
        default:
          throw new Error(this.name + ' - Must return BE_TREE_VALUE');
      }
    }
    // BeTreeSel tentou selecionar any node sucess ou running, mas todos falharam :(
    return BE_TREE_VALUES.FAILURE;
  }
}
;// CONCATENATED MODULE: ./src/BehaviorTree/BeTreeSeq.js
// SEQUENCE: Vai fazendo enquanto for success, retorna de algum node falhar

class BeTreeSeq extends BeTreeNode {
  constructor(robot, name, ...nodes) {
    super();
    this.nodes = nodes;
    this.name = name;
    this.robot = robot;
  }
  move() {
    this.robot.listOfTextToDebug.push({
      text: '#',
      bg: '#832dfc'
    });
    this.robot.listOfTextToDebug.push({
      text: 'BeTreeSeq: [' + this.name + ']',
      bg: '#832dfc'
    });
    for (const child of this.nodes) {
      switch (child.move()) {
        case BE_TREE_VALUES.RUNNING:
          // node esta running, retorna pra nao tenta rodar o proximo
          return BE_TREE_VALUES.RUNNING;
        case BE_TREE_VALUES.SUCCESS:
          // node retornou sucess, agora vai para o proximo do loop dessa sequencia
          break;
        case BE_TREE_VALUES.FAILURE:
          // node dessa sequencia falhou, para de executar e retorna failure
          return BE_TREE_VALUES.FAILURE;
        default:
          throw new Error(this.name + ' - Must return BE_TREE_VALUE! child_name:' + child.name);
      }
    }

    // todo os nodes tiveram success
    return BE_TREE_VALUES.SUCCESS;
  }
}
;// CONCATENATED MODULE: ./src/BehaviorTree/BeTreeInverse.js

class BeTreeInverse extends BeTreeNode {
  constructor(name, robot, node) {
    super();
    this.robot = robot;
    this.node = node;
    this.name = name;
  }
  move() {
    switch (this.node.move()) {
      case BE_TREE_VALUES.RUNNING:
        this._state = BE_TREE_VALUES.RUNNING;
        this.robot.listOfTextToDebug.push({
          text: `    !! [${this.name}] = RUNNING`,
          bg: '#2dcffc'
        });
        break;
      case BE_TREE_VALUES.SUCCESS:
        this._state = BE_TREE_VALUES.FAILURE;
        this.robot.listOfTextToDebug.push({
          text: `    !! [${this.name}] = FAILURE`,
          bg: '#f00'
        });
        break;
      case BE_TREE_VALUES.FAILURE:
        this._state = BE_TREE_VALUES.SUCCESS;
        this.robot.listOfTextToDebug.push({
          text: `    !! [${this.name}] = SUCCESS`,
          bg: '#0f0'
        });
        break;
      default:
        break;
    }
    return this._state;
  }
}
;// CONCATENATED MODULE: ./src/BehaviorTree/AlwaysFailNode.js

class AlwaysFailNode extends BeTreeNode {
  constructor(robot) {
    super();
    this.robot = robot;
  }
  move() {
    this.robot.listOfTextToDebug.push({
      text: 'alwaysFailNode FAIL'
    });
    return BE_TREE_VALUES.FAILURE;
  }
}
;// CONCATENATED MODULE: ./src/BehaviorTree/ActionIdleNode.ts


class ActionIdleNode extends BeTreeNode {
    robot;
    constructor(robot) {
        super();
        this.robot = robot;
    }
    move() {
        this.robot.text = 'IDLE';
        if (this.robot.bag?.amount === 0) {
            this.robot.setSprite(SPRITE_MAP.CHAR_PARADO);
        }
        else {
            this.robot.setSprite(SPRITE_MAP.CHAR_GRABING);
        }
        this.robot.listOfTextToDebug.push({
            text: ' ',
        });
        this.robot.listOfTextToDebug.push({
            text: 'ActionIdleNode SUCCESS',
        });
        return BE_TREE_VALUES.SUCCESS;
    }
}

;// CONCATENATED MODULE: ./src/BehaviorTree/ActionBuildNode.js

class ActionBuildNode extends BeTreeNode {
  constructor(robot) {
    super();
    this.robot = robot;
  }
  move() {
    if (!this.robot.targetStorage) {
      this.robot.text = 'ActionBuildNode FAILURE (targetStorage is undefined)';
      this.robot.listOfTextToDebug.push({
        text: this.robot.text
      });
      return BE_TREE_VALUES.FAILURE;
    }
    if (this.robot.targetStorage.construction >= 100) {
      this.robot.text = 'ActionBuildNode FAILURE (construction is already complete)';
      this.robot.listOfTextToDebug.push({
        text: this.robot.text
      });
      return BE_TREE_VALUES.FAILURE;
    }
    this.robot.buildingTimer += this.robot.ts;
    if (this.robot.buildingTimer >= 3) {
      this.robot.buildingTimer = 0;
      this.robot.targetStorage.construction += 50;
      this.robot.text = 'ActionBuildNode SUCCESS (construction complete)';
      this.robot.listOfTextToDebug.push({
        text: this.robot.text
      });
      return BE_TREE_VALUES.SUCCESS;
    } else {
      this.robot.seqName = 'cutting';
      this.robot.text = 'ActionBuildNode RUNNING';
      this.robot.listOfTextToDebug.push({
        text: this.robot.text
      });
      return BE_TREE_VALUES.RUNNING;
    }
  }
}
;// CONCATENATED MODULE: ./src/BehaviorTree/ActionDropResourceNode.js

class ActionDropResourceNode extends BeTreeNode {
  constructor(robot) {
    super();
    this.robot = robot;
  }
  move() {
    // verifica se robot tem algo em mao
    if (!this.robot.resourceInMyHand) {
      this.robot.text = 'actionDropResourceNode FAIL';
      this.robot.listOfTextToDebug.push({
        text: this.robot.text
      });
      return BE_TREE_VALUES.FAILURE;
    }

    // verifica se current storage aceita meu recurso em maos
    if (this.robot.targetStorage) {
      var encontrouMeuResourceInHand = false;
      this.robot.targetStorage.resourcesAccepted.forEach(resoureceKey => {
        if (resoureceKey === this.robot.resourceInMyHand.resourceKey) {
          encontrouMeuResourceInHand = true;
        }
      });
      if (!encontrouMeuResourceInHand) {
        this.robot.targetStorage = undefined;
        return BE_TREE_VALUES.FAILURE;
      }
    }

    // comeca a dropar
    this.robot.dropingTimer += this.robot.ts;
    if (this.robot.dropingTimer >= 3) {
      this.robot.dropingTimer = 0;

      // ok
      this.robot.targetStorage.addResource(this.robot.resourceInMyHand);
      this.robot.bag -= this.robot.resourceInMyHand.qnt;
      this.robot.resourceInMyHand = undefined;

      // troca de job para voltar para tree
      // MAS somente troca se ele veio da arvore, e nao do mouseclick
      // pra saber se veio do mouse click
      if (this.robot.targetCriador) {
        this.robot.setAction({
          type: 'storage',
          obj: this.robot.targetCriador
        });
      }
      this.robot.text = 'actionDropResourceNode OK: dropei resourceInMyHand';
      this.robot.listOfTextToDebug.push({
        text: this.robot.text
      });
      return BE_TREE_VALUES.SUCCESS;
    } else {
      this.robot.text = 'actionDropResourceNode RUNNING';
      this.robot.listOfTextToDebug.push({
        text: this.robot.text
      });
      this.robot.seqName = 'cutting';
      return BE_TREE_VALUES.RUNNING;
    }
  }
}
;// CONCATENATED MODULE: ./src/BehaviorTree/ActionMineResourceNode.js

class ActionMineResourceNode extends BeTreeNode {
  constructor(robot) {
    super();
    this.robot = robot;
  }
  move() {
    this.robot.miningTimer += this.robot.ts;
    if (this.robot.miningTimer >= 3) {
      this.robot.miningTimer = 0;
      this.robot.resourceInMyHand = this.robot.targetCriador.removeResource(1);
      this.robot.bag += 1;
      this.robot.text = 'actionMineResourceNode OK: RESOURCE MINED';
      this.robot.listOfTextToDebug.push({
        text: this.robot.text
      });
      return BE_TREE_VALUES.SUCCESS;
    } else {
      this.robot.text = 'actionMineResourceNode RUNNING';
      this.robot.listOfTextToDebug.push({
        text: this.robot.text
      });
      this.robot.seqName = 'cutting';
      return BE_TREE_VALUES.RUNNING;
    }
  }
}
;// CONCATENATED MODULE: ./src/BehaviorTree/ActionMoveToTargetNode.js

class ActionMoveToTargetNode extends BeTreeNode {
  constructor(robot) {
    super();
    this.robot = robot;
  }
  move() {
    // validate
    if (!this.robot.targetPosition) {
      this.robot.listOfTextToDebug.push({
        text: 'ActionMoveToTargetNode FAILURE (targetPosition is undefined)'
      });
      return BE_TREE_VALUES.FAILURE;
    }

    // compute vector
    const fromHereToTarget = this.robot.targetPosition.sub(this.robot.pos);
    this.robot.positionChange = fromHereToTarget.limit(3);
    this.robot.pos = this.robot.pos.add(this.robot.positionChange);

    // update sprite
    var h = this.robot.positionChange.headInDeg();
    if (h < 0) h += 360;
    this.robot.heading = h;
    if (this.robot.bag === 0) {
      if (h > 0 - 45 && h <= 0 + 45) this.robot.seqName = 'direita';else if (h > 90 - 45 && h < 90 + 453) this.robot.seqName = 'frente';else if (h > 180 - 45 && h < 180 + 45) this.robot.seqName = 'esquerda';else if (h >= 270 - 45 && h <= 270 + 45) this.robot.seqName = 'tras';else this.robot.seqName = 'frente';
    } else {
      this.robot.seqName = 'carrying';
    }

    // debug
    this.robot.text = 'ActionMoveToTargetNode RUNNING';
    this.robot.listOfTextToDebug.push({
      text: 'ActionMoveToTargetNode RUNNING'
    });
    return BE_TREE_VALUES.RUNNING;
  }
}
;// CONCATENATED MODULE: ./src/BehaviorTree/ActionFindStorageToDeliveryNode.js

class ActionFindStorageToDeliveryNode extends BeTreeNode {
  constructor(robot) {
    super();
    this.robot = robot;
  }
  move() {
    // checa se tenho algo em maos
    if (!this.robot.resourceInMyHand) {
      this.robot.text = 'ActionFindStorageToDeliveryNode FAIL: resourceInMyHand is undfined';
      this.robot.listOfTextToDebug.push({
        text: this.robot.text
      });
      return BE_TREE_VALUES.FAILURE;
    }

    // se ja tem target para storage, vefica se estao vivo
    if (this.robot.targetStorage) {
      // tem que verificar se nao foi deletado pelo user
      if (this.robot.targetStorage.life <= 0) {
        this.robot.targetStorage = undefined;
      }
    }

    // se ja tem target para storage, vefica se aceita oq eu tenho em maos
    // verifica se current storage aceita meu recurso em maos
    if (this.robot.targetStorage) {
      var encontrouMeuResourceInHand = false;
      this.robot.targetStorage.resourcesAccepted.forEach(resoureceKey => {
        if (resoureceKey === this.robot.resourceInMyHand.resourceKey) {
          encontrouMeuResourceInHand = true;
        }
      });
      if (!encontrouMeuResourceInHand) {
        this.robot.targetStorage = undefined;
        return BE_TREE_VALUES.FAILURE;
      }
    }

    // se nao tem local da storage
    if (!this.robot.targetStorage) {
      // tenta buscar storage no mapa
      const storage = this.robot.world.getNearestStorageToDelivery({
        x: this.robot.pos.x,
        y: this.robot.pos.y,
        resourceKey: this.robot.resourceInMyHand.resourceKey
      });
      // se encontrar
      if (storage) {
        this.robot.setAction({
          type: 'storage',
          obj: storage
        });
        this.robot.listOfTextToDebug.push({
          text: '- findStorageToDeliveryNode SUCCESS 1'
        });
        return BE_TREE_VALUES.SUCCESS;
      }
      // se nao encontrar
      else {
        this.robot.listOfTextToDebug.push({
          text: '- findStorageToDeliveryNode FAIL'
        });
        return BE_TREE_VALUES.FAILURE;
      }
    }
    // ja tem storage para ir
    else {
      this.robot.setAction({
        type: 'storage',
        obj: this.robot.targetStorage
      });
      this.robot.listOfTextToDebug.push({
        text: '- findStorageToDeliveryNode SUCCESS 2'
      });
      return BE_TREE_VALUES.SUCCESS;
    }
  }
}
;// CONCATENATED MODULE: ./src/BehaviorTree/HasWorkNode.js

class HasWorkNode extends BeTreeNode {
  constructor(robot, kind) {
    super();
    this.robot = robot;
    this.kind = kind;
  }
  move() {
    if (this.robot.work && this.robot.work === this.kind) {
      this.robot.text = `HasWorkNode kind==${this.kind}? SUCCESS`;
      this.robot.listOfTextToDebug.push({
        text: this.robot.text
      });
      return BE_TREE_VALUES.SUCCESS;
    } else {
      this.robot.text = `HasWorkNode kind==${this.kind}? FAILURE`;
      this.robot.listOfTextToDebug.push({
        text: this.robot.text
      });
      return BE_TREE_VALUES.FAILURE;
    }
  }
}
;// CONCATENATED MODULE: ./src/BehaviorTree/HasJobNode.js

class HasJobNode extends BeTreeNode {
  constructor(robot, kind) {
    super();
    this.robot = robot;
    this.kind = kind;
  }
  move() {
    if (this.robot.job && this.robot.job === this.kind) {
      this.robot.text = 'HasJobNode OK';
      return BE_TREE_VALUES.SUCCESS;
    } else {
      this.robot.text = 'HasJobNode FAIL';
      return BE_TREE_VALUES.FAILURE;
    }
  }
}
;// CONCATENATED MODULE: ./src/BehaviorTree/HasStorageTypeNode.js

class HasStorageTypeNode extends BeTreeNode {
  constructor(robot, type) {
    super();
    this.robot = robot;
    this.type = type;
  }
  move() {
    if (this.robot.targetStorage.type === this.type) {
      return BE_TREE_VALUES.SUCCESS;
    } else {
      return BE_TREE_VALUES.FAILURE;
    }
  }
}
;// CONCATENATED MODULE: ./src/BehaviorTree/IsBagEmptyNode.js

class IsBagEmptyNode extends BeTreeNode {
  constructor(robot) {
    super();
    this.robot = robot;
  }
  move() {
    if (this.robot.bag === 0) {
      this.robot.text = 'isBagEmpty OK';
      this.robot.listOfTextToDebug.push({
        text: this.robot.text
      });
      return BE_TREE_VALUES.SUCCESS;
    } else {
      this.robot.text = 'isBagEmpty FAIL';
      this.robot.listOfTextToDebug.push({
        text: this.robot.text
      });
      return BE_TREE_VALUES.FAILURE;
    }
  }
}
;// CONCATENATED MODULE: ./src/BehaviorTree/IsNearCriadorNode.js

class IsNearCriadorNode extends BeTreeNode {
  constructor(robot) {
    super();
    this.robot = robot;
  }
  move() {
    if (!this.robot.targetCriador) {
      this.robot.listOfTextToDebug.push({
        text: 'isNearCriadorNode FAIL: targetCriador is UNDEFINED'
      });
      return BE_TREE_VALUES.FAILURE;
    }
    const distance = this.robot.pos.sub(this.robot.targetCriador).len();
    if (distance < 20) {
      this.robot.listOfTextToDebug.push({
        text: 'isNearCriadorNode OK'
      });
      return BE_TREE_VALUES.SUCCESS;
    } else {
      this.robot.listOfTextToDebug.push({
        text: 'isNearCriadorNode FAIL'
      });
      return BE_TREE_VALUES.FAILURE;
    }
  }
}
;// CONCATENATED MODULE: ./src/BehaviorTree/IsNearStorageNode.js

class IsNearStorageNode extends BeTreeNode {
  constructor(robot) {
    super();
    this.robot = robot;
  }
  move() {
    if (!this.robot.targetStorage) {
      this.robot.listOfTextToDebug.push({
        text: 'isNearStorageNode FAILURE (targetStorage is undefined)'
      });
      return BE_TREE_VALUES.FAILURE;
    }
    const distance = this.robot.pos.sub(this.robot.targetStorage).len();
    if (distance < 20) {
      this.robot.listOfTextToDebug.push({
        text: 'isNearStorageNode SUCCESS'
      });
      return BE_TREE_VALUES.SUCCESS;
    } else {
      this.robot.listOfTextToDebug.push({
        text: 'isNearStorageNode FAILURE (distance < 20)'
      });
      return BE_TREE_VALUES.FAILURE;
    }
  }
}
;// CONCATENATED MODULE: ./src/BehaviorTree/IsNearTargetNode.ts

class IsNearTargetNode extends BeTreeNode {
    brain;
    closeToLimit;
    constructor(robot) {
        super();
        this.brain = robot;
        this.closeToLimit = 60;
    }
    move() {
        if (!this.brain.targetPosition) {
            return BE_TREE_VALUES.FAILURE;
        }
        const fromMeToTarget = this.brain?.pos?.sub(this.brain.targetPosition);
        if (!fromMeToTarget) {
            return BE_TREE_VALUES.FAILURE;
        }
        if (fromMeToTarget.len() < this.closeToLimit) {
            return BE_TREE_VALUES.SUCCESS;
        }
        else {
            return BE_TREE_VALUES.FAILURE;
        }
    }
}

;// CONCATENATED MODULE: ./src/BehaviorTree/CompareValues.js

class CompareValues extends BeTreeNode {
  constructor(robot, name, comparator) {
    super();
    this.robot = robot;
    this.name = name;
    this.comparator = comparator;
  }
  move() {
    const result = this.comparator();
    if (result === true || result === BE_TREE_VALUES.SUCCESS) {
      this.robot.listOfTextToDebug.push({
        text: `  CompareValues: ${this.name} == SUCCESS`,
        bg: '#0f0'
      });
      return BE_TREE_VALUES.SUCCESS;
    } else {
      this.robot.listOfTextToDebug.push({
        text: `  CompareValues: ${this.name} == FAILURE`,
        bg: '#f00'
      });
      return BE_TREE_VALUES.FAILURE;
    }
  }
}
;// CONCATENATED MODULE: ./src/BehaviorTree/RunFunction.js

class RunFunction extends BeTreeNode {
  constructor(robot, name, fn) {
    super();
    this.robot = robot;
    this.name = name;
    this.fn = fn;
  }
  move = () => {
    if (!this.fn) {
      console.log(`aaah [[${this.name}]] FN() IS UNDEFINED`);
      this.robot.listOfTextToDebug.push({
        text: `  ${this.name} FN() IS UNDEFINED`
      });
    }
    const ret = this.fn();

    // debug
    if (ret === BE_TREE_VALUES.FAILURE) {
      this.robot.listOfTextToDebug.push({
        text: `  RunFunction: ${this.name} == FAILURE`,
        bg: '#f00'
      });
    }
    if (ret === BE_TREE_VALUES.SUCCESS) {
      this.robot.listOfTextToDebug.push({
        text: `  RunFunction: ${this.name} == SUCCESS`,
        bg: '#0f0'
      });
    }
    if (ret === BE_TREE_VALUES.RUNNING) {
      this.robot.listOfTextToDebug.push({
        text: `  RunFunction: ${this.name} == RUNNING`,
        bg: '#2dcffc'
      });
    }
    return ret;
  };
}
;// CONCATENATED MODULE: ./src/BehaviorTree/index.js



















;// CONCATENATED MODULE: ./src/GameInstances/RobotBrain.ts





const ROBOT_ACTIONS = {
    NONE: 'NONE',
    STOP: 'STOP',
    WALK: 'WALK',
    STORAGE: 'STORAGE',
};
const ROBOT_JOBS = {
    NONE: 'NONE',
    WALK: 'WALK',
    PLANT: 'PLANT',
    FARM: 'FARM',
    FACTORY: 'FACTORY',
    WAREHOUSE: 'WAREHOUSE',
};
const ROBOT_SUBJOBS = {
    NONE: 'NONE',
    WALK_TO_STORAGE: 'WALK_TO_STORAGE',
    WALK_TO_GET_INPUT: 'WALK_TO_GET_INPUT',
};
class RobotBrain {
    listOfTextToDebug;
    robotInstance;
    globalHandler;
    world;
    dt;
    action;
    job;
    subjob;
    behavior;
    dropingTimer;
    buildingTimer;
    FACTORYTimer;
    resourceInMyHand;
    bag;
    maxBag;
    target;
    positionChange;
    pos;
    targetPosition;
    targetObject;
    storageThatHasTheInput;
    storageThatStoresTheOutput;
    storageFactory;
    resourceObject;
    constructor(robotInstance) {
        this.robotInstance = robotInstance;
        this.globalHandler = new GlobalHandler('RobotBrain');
        this.world = this.globalHandler.get(TOKENS.gameWorld, 'RobotBrain');
        this.action = ROBOT_ACTIONS.STOP;
        this.job = ROBOT_JOBS.NONE;
        this.subjob = ROBOT_SUBJOBS.NONE;
        this.resourceInMyHand = undefined;
        this.bag = 0;
        this.maxBag = 1;
        this.target = undefined;
        this.positionChange = undefined;
        this.targetPosition = undefined;
        this.FACTORYTimer = 0;
        this.dropingTimer = 0;
        this.buildingTimer = 0;
        this.listOfTextToDebug = [];
        this.behavior = this.createBehaviorTree();
    }
    createBehaviorTree() {
        const hasActionWalk = new CompareValues(this, 'hasActionWalk', () => {
            return this.action === ROBOT_ACTIONS.WALK;
        });
        const hasActionStorage = new CompareValues(this, 'hasActionStorage', () => {
            return this.action === ROBOT_ACTIONS.STORAGE;
        });
        const hasJobFactory = new CompareValues(this, 'hasJobFactory', () => {
            return this.job === ROBOT_JOBS.FACTORY;
        });
        const hasSubjobWalkToGetInput = new CompareValues(this, 'hasSubjobWalkToGetInput', () => {
            return this.subjob === ROBOT_SUBJOBS.WALK_TO_GET_INPUT;
        });
        const hasNotSubjobWalkToGetInput = new BeTreeInverse('hasNotSubjobWalkToGetInput', this, hasSubjobWalkToGetInput);
        const isNearStorage = new RunFunction(this, 'isNearStorage', () => {
            const fromHereToTargetPositionDistance = this.targetPosition
                ?.sub(this.pos)
                .len();
            if (!fromHereToTargetPositionDistance) {
                return BE_TREE_VALUES.FAILURE;
            }
            if (fromHereToTargetPositionDistance > 50) {
                this.listOfTextToDebug.push({
                    text: `    isNearStorage: FAILURE fromHereToTargetPositionDistance=${fromHereToTargetPositionDistance}`,
                });
                return BE_TREE_VALUES.FAILURE;
            }
            else {
                this.listOfTextToDebug.push({
                    text: `    isNearStorage: SUCCESS fromHereToTargetPositionDistance=${fromHereToTargetPositionDistance}`,
                });
                return BE_TREE_VALUES.SUCCESS;
            }
        });
        const needsInputToProduce = new CompareValues(this, 'needsInputToProduce', () => {
            const resourceUsedAsInput = this.storageFactory?.['inputs'][0];
            if (resourceUsedAsInput) {
                return BE_TREE_VALUES.SUCCESS;
            }
            else {
                return BE_TREE_VALUES.FAILURE;
            }
        });
        const hasAllInputToProduceInStorage = new CompareValues(this, 'hasAllInputToProduceInStorage', () => {
            const resourceUsedAsInput = this.storageFactory?.['inputs']?.[0];
            const factoryBag = this.storageFactory?.['bag'];
            const inputResourceAmountInThisFactory = factoryBag[resourceUsedAsInput.key];
            const amountOfResourceToProduce = resourceUsedAsInput.amount || 0;
            if (inputResourceAmountInThisFactory >=
                amountOfResourceToProduce) {
                return BE_TREE_VALUES.SUCCESS;
            }
            else {
                return BE_TREE_VALUES.FAILURE;
            }
        });
        const hasPlantToGetInput = new CompareValues(this, 'hasPlantToGetInput', () => {
            const theStoreImWorking = this.storageFactory;
            const resourceKeyUsedAsInput = theStoreImWorking?.['inputs'][0].key;
            this.listOfTextToDebug.push({
                text: `    -- 1 resourceKeyUsedAsInput[0]=${resourceKeyUsedAsInput}`,
            });
            if (!resourceKeyUsedAsInput) {
                return BE_TREE_VALUES.FAILURE;
            }
            const storageThatHasTheInput = this.world
                .getClosestPlaceToGrabInput();
            if (!storageThatHasTheInput) {
                return BE_TREE_VALUES.FAILURE;
            }
            this.storageThatHasTheInput = storageThatHasTheInput;
            return BE_TREE_VALUES.SUCCESS;
        });
        const isFarFromFactory = new BeTreeInverse('isFarFromFactory', this, isNearStorage);
        const isFarFromTarget = new BeTreeInverse('isFarFromTarget', this, new IsNearTargetNode(this));
        const isNearPlaceToGetInput = new RunFunction(this, 'isNearPlaceToGetInput', () => {
            if (!this.storageThatHasTheInput) {
                return BE_TREE_VALUES.FAILURE;
            }
            const fromHereToTargetPositionDistance = this.storageThatHasTheInput?.['pos'].sub(this.pos).len();
            if (fromHereToTargetPositionDistance > 50) {
                return BE_TREE_VALUES.FAILURE;
            }
            else {
                return BE_TREE_VALUES.SUCCESS;
            }
        });
        const isFarFromPlaceToGetInput = new BeTreeInverse('isFarFromPlaceToGetInput', this, isNearPlaceToGetInput);
        const storageIsNotFull = new RunFunction(this, 'storageIsNotFull', () => {
            if (this.storageFactory?.['isBagFull'](this)) {
                return BE_TREE_VALUES.FAILURE;
            }
            else {
                return BE_TREE_VALUES.SUCCESS;
            }
        });
        const isTargetDefined = new RunFunction(this, 'isTargetDefined', () => {
            if (this.targetPosition) {
                return BE_TREE_VALUES.SUCCESS;
            }
            else {
                return BE_TREE_VALUES.FAILURE;
            }
        });
        const setRobotTargetToFactory = new RunFunction(this, 'setRobotTargetToFactory', () => {
            this.listOfTextToDebug.push({
                text: `  updateTargeToStorage`,
            });
            this.targetObject = this.storageFactory;
            this.targetPosition = this.storageFactory?.['pos'];
            return BE_TREE_VALUES.SUCCESS;
        });
        const setRobotTargetToPlantToGetInput = new RunFunction(this, 'setRobotTargetToPlantToGetInput', () => {
            this.listOfTextToDebug.push({
                text: `  updateTargeToStorage`,
            });
            if (!this.storageThatHasTheInput) {
                this.storageThatHasTheInput =
                    this.world.getClosestPlaceToGrabInput();
            }
            if (!this.storageThatHasTheInput) {
                return BE_TREE_VALUES.FAILURE;
            }
            this.targetObject = this.storageThatHasTheInput;
            this.targetPosition = this.storageThatHasTheInput?.['pos'];
            return BE_TREE_VALUES.SUCCESS;
        });
        const setSpriteWalking = new RunFunction(this, 'setSpriteWalking', () => {
            this.robotInstance.setSprite(SPRITE_MAP.CHAR_WALKING_0);
            return BE_TREE_VALUES.SUCCESS;
        });
        const setSpriteMining = new RunFunction(this, 'setSpriteMining', () => {
            this.robotInstance.setSprite(SPRITE_MAP.CHAR_WORKING);
            this.listOfTextToDebug.push({
                text: '  setSpriteMining SUCCESS',
            });
            return BE_TREE_VALUES.SUCCESS;
        });
        const setSubjobToGetInput = new RunFunction(this, 'setSubjobToGetInput', () => {
            this.subjob = ROBOT_SUBJOBS.WALK_TO_GET_INPUT;
            return BE_TREE_VALUES.SUCCESS;
        });
        const setSpriteStop = new RunFunction(this, 'setSpriteStop', () => {
            return BE_TREE_VALUES.SUCCESS;
        });
        const walkToTarget = new RunFunction(this, 'walkToTarget', () => {
            if (!this.targetPosition || !this.pos) {
                this.listOfTextToDebug.push({
                    text: 'walkToTarget FAILURE (targetPosition is undefined)',
                });
                return BE_TREE_VALUES.FAILURE;
            }
            const fromHereToTargetDistance = this.targetPosition
                .sub(this.pos)
                .limit(3);
            this.robotInstance.angle =
                fromHereToTargetDistance.clone().headInDeg() + 90;
            this.pos = this.pos?.add(fromHereToTargetDistance);
            return BE_TREE_VALUES.RUNNING;
        });
        const mineThePlant = new RunFunction(this, 'mineThePlant', () => {
            this.targetObject.addMiningTime(this.dt);
            this.listOfTextToDebug.push({
                text: 'mineThePlant RUNNING',
            });
            return BE_TREE_VALUES.RUNNING;
        });
        const mineThePlaceThatHasInput = new RunFunction(this, 'mineThePlaceThatHasInput', () => {
            this.storageThatHasTheInput?.['addMiningTime'](this.dt, this);
            this.listOfTextToDebug.push({
                text: 'storageThatHasTheInput RUNNING',
            });
            return BE_TREE_VALUES.RUNNING;
        });
        const placeHasResourceToBeMined = new RunFunction(this, 'placeHasResourceToBeMined', () => {
            const resourceUsedAsInput = this.storageFactory?.['inputs'][0].key;
            const hasResource = this.storageThatHasTheInput?.['hasResource'](resourceUsedAsInput);
            this.listOfTextToDebug.push({
                text: `  --- resourceUsedAsInput=${resourceUsedAsInput}`,
            });
            this.listOfTextToDebug.push({
                text: `  --- hasResource=${hasResource}`,
            });
            if (hasResource) {
                return BE_TREE_VALUES.SUCCESS;
            }
            else {
                return BE_TREE_VALUES.FAILURE;
            }
        });
        const walkSequence = new BeTreeSeq(this, 'walkSequence', hasActionWalk, setSpriteStop, isTargetDefined, isFarFromTarget, setSpriteWalking, walkToTarget);
        const doWorkToProduceOutput = new BeTreeSeq(this, 'doWorkToProduceOutput', hasActionStorage, hasJobFactory, isNearStorage, storageIsNotFull, setSubjobToGetInput, needsInputToProduce, hasAllInputToProduceInStorage, hasPlantToGetInput, isNearPlaceToGetInput, setSpriteMining, mineThePlant);
        const walkToFactory = new BeTreeSeq(this, 'walkToFactorySequence', hasActionStorage, hasJobFactory, hasNotSubjobWalkToGetInput, isFarFromFactory, setRobotTargetToFactory, setSpriteWalking, walkToTarget);
        const walkToGrabInput = new BeTreeSeq(this, 'walkToGrabInput', hasActionStorage, hasJobFactory, hasSubjobWalkToGetInput, hasPlantToGetInput, isFarFromPlaceToGetInput, setRobotTargetToPlantToGetInput, setSpriteWalking, walkToTarget);
        const doWorkToGetInput = new BeTreeSeq(this, 'doWorkToGetInput', hasActionStorage, hasJobFactory, hasSubjobWalkToGetInput, isNearPlaceToGetInput, setRobotTargetToPlantToGetInput, placeHasResourceToBeMined, setSpriteMining, mineThePlaceThatHasInput);
        const idleAction = new ActionIdleNode(this.robotInstance);
        const idleSequence = new BeTreeSeq(this, 'idleSequence', setSpriteStop, idleAction);
        const doFactoryWorkSelection = new BeTreeSel(this, 'mineStorageGrabInputDeliveryOutput', doWorkToProduceOutput, walkToFactory, walkToGrabInput, doWorkToGetInput);
        return new BeTreeSel(this, 'MINHA_BEHAVIOR_TREE', walkSequence, doFactoryWorkSelection, idleSequence);
    }
    setAction({ type, obj }) {
        if (type === ROBOT_ACTIONS.WALK) {
            const the_point_in_map_as_vec = obj;
            const the_robot = this.robotInstance;
            this.action = ROBOT_ACTIONS.WALK;
            the_robot.job = ROBOT_JOBS.WALK;
            this.targetPosition = the_point_in_map_as_vec;
            this.targetObject = undefined;
            this.resourceObject = undefined;
        }
        else if (type === ROBOT_ACTIONS.STORAGE) {
            const the_clicked_storage = obj;
            const the_robot = this;
            the_robot.targetPosition = the_clicked_storage.pos;
            the_robot.targetObject = the_clicked_storage;
            the_robot.storageThatHasTheInput = undefined;
            the_robot.storageThatStoresTheOutput = undefined;
            if (the_clicked_storage.type === STORAGES_KEYS.WAREHOUSE) {
                the_robot.action = ROBOT_ACTIONS.STORAGE;
                the_robot.job = ROBOT_JOBS.WAREHOUSE;
                the_robot.subjob = ROBOT_SUBJOBS.NONE;
            }
            if (the_clicked_storage.type === STORAGES_KEYS.HOUSE) {
                the_robot.job = ROBOT_JOBS.NONE;
                the_robot.subjob = ROBOT_SUBJOBS.NONE;
            }
        }
    }
    update = (dt, listOfTextToDebug) => {
        this.dt = dt;
        this.listOfTextToDebug = listOfTextToDebug;
        this.listOfTextToDebug.push({ text: 'ROBOT BRAIN UPDATE' });
        this.behavior.move(dt);
    };
}

;// CONCATENATED MODULE: ./src/GameInstances/RobotSprite.ts

class RobotSprite {
    spriteInfo;
    currentSpriteKey;
    angle;
    constructor() {
        this.spriteInfo = '';
        this.angle = 0;
        this.currentSpriteKey = 'CHAR_PARADO';
    }
    update = (ts) => {
        this.updateCurrentSpriteKey();
    };
    renderTime = () => {
    };
    updateCurrentSpriteKey = () => {
        if (this.spriteInfo === 'WALKING') {
            const degDiscrete = MathUtil.roundToNearest(this.angle, [0, 45, 90, 135, 180, 225, 270, 315]);
            this.currentSpriteKey = 'CHAR_WALKING_' + degDiscrete;
        }
        else if (this.spriteInfo === 'MINING') {
            this.currentSpriteKey = 'CHAR_WORKING';
        }
        else if (this.spriteInfo === 'STOP') {
            this.currentSpriteKey = 'CHAR_PARADO';
        }
        else {
            this.currentSpriteKey = 'CHAR_WORKING';
        }
    };
}

;// CONCATENATED MODULE: ./src/GameInstances/Robot.ts






class Robot extends Stuff {
    listOfTextToDebug;
    robotBrain;
    robotSprite;
    bag = null;
    resourceInMyHand = null;
    text;
    job;
    constructor({ name = 'NOTDEFINED', x = 100, y = 100 }) {
        super({ x, y, name, stuffKey: 'ROBOT' });
        this.setSprite(SPRITE_MAP.CHAR_PARADO);
        this.text = 'XXX';
        this.listOfTextToDebug = [{ text: 'DEBUGGGG' }];
        this.robotBrain = new RobotBrain(this);
        this.robotSprite = new RobotSprite();
    }
    onSelect = () => { };
    onDeselect = () => { };
    transferResourceToRobot = ({ resourceKey, amount, }) => {
        this.bag = { resourceKey, amount };
    };
    setAction = (robotBrainAction) => {
        const { x, y } = MouseUtil.mouseToCamera();
        const world = GlobalHandler.getWithType('gameWorld', 'EventActions');
        world.addTextAnimation({
            x: x,
            y: y,
            text: `setAction: ${robotBrainAction.type} ${JSON.stringify(robotBrainAction.obj)}`,
            duration: 2000,
        });
        this.robotBrain.setAction(robotBrainAction);
    };
    update = (dt) => {
        this.listOfTextToDebug = [];
        this.robotBrain.update(dt, this.listOfTextToDebug);
    };
    render = (d) => {
        const currentRobotSpriteKey = 'CHAR_PARADO';
        this.renderSprite(d, currentRobotSpriteKey);
        this.renderIfSelected(d);
        if (this.resourceInMyHand) {
            this.resourceInMyHand.drawAt(d, this.pos.x, this.pos.y - this.h / 2);
        }
    };
}

;// CONCATENATED MODULE: ./src/Engine/World.ts







const SEASONS = {
    daysPerSecond: 1,
    maxDays: 40,
    SUMMER: {
        start: 1,
        end: 10,
        string: 'SUMMER',
    },
    FALL: {
        start: 10,
        end: 20,
        string: 'FALL',
    },
    WINTER: {
        start: 20,
        end: 30,
        string: 'WINTER',
    },
    SPRING: {
        start: 30,
        end: 40,
        string: 'SPRING',
    },
};
class World {
    tempText;
    tempRect;
    time;
    robots;
    producers;
    storages;
    resources;
    animatedSprites;
    stuff;
    globalHandler;
    drawHandler;
    spriteHandler;
    day;
    dayOfYear;
    season;
    temperature;
    line;
    constructor() {
        this.tempText = [];
        this.tempRect = [];
        this.time = 0;
        this.robots = [];
        this.producers = [];
        this.storages = [];
        this.resources = 0;
        this.animatedSprites = [];
        this.stuff = [];
        this.globalHandler = new GlobalHandler('World');
        this.drawHandler = this.globalHandler.get('drawHandler', 'World');
        this.spriteHandler = this.globalHandler.get('spriteHandler', 'World');
        this.day = 1;
        this.dayOfYear = this.day;
        this.season = 'WINTER';
        this.temperature = 20;
        this.line = 0;
    }
    addAnimation(animationInstance) {
    }
    addTextAnimation(props) {
        const animationHandler = GlobalHandler.getWithType(TOKENS.animationHandler);
        animationHandler.addAnimation(new TextAnimation(props));
    }
    addAnimatedSprite(props) {
        const animationHandler = GlobalHandler.getWithType(TOKENS.animationHandler);
        animationHandler.addAnimation(new AnimatedSprite(props));
    }
    getStoreWithoutSelectIfClickIsOver = () => {
        const worldXY = MouseUtil.mouseToCamera();
        for (let i = 0; i < this.storages.length; i++) {
            const storage = this.storages[i];
            if (!storage)
                continue;
            if (storage.isPointOverYou(worldXY.x, worldXY.y)) {
                return storage;
            }
        }
        return undefined;
    };
    selectRobotIfClickIsOverRobot = (x, y) => {
        for (let i = 0; i < this.robots.length; i++) {
            const robot = this.robots[i];
            if (!robot)
                continue;
            if (robot.isPointOverYou(x, y)) {
                robot.selected = true;
                robot.onSelect?.();
                return [robot];
            }
        }
        return [];
    };
    selectStoreIfClickIsOverStore = (x, y) => {
        for (let i = 0; i < this.storages.length; i++) {
            const store = this.storages[i];
            if (!store)
                continue;
            if (store.isPointOverYou(x, y)) {
                store.selected = true;
                store.onSelect?.();
                return [store];
            }
        }
        return [];
    };
    selectAllRobotsInsideRect = (x1, y1, x2, y2) => {
        const selectedRobots = [];
        for (let i = 0; i < this.robots.length; i++) {
            const robot = this.robots[i];
            if (!robot)
                continue;
            if (robot.isRectOverYou(x1, y1, x2, y2)) {
                robot.selected = true;
                robot.onSelect?.();
                selectedRobots.push(robot);
            }
        }
        return selectedRobots;
    };
    desselectAll = () => {
        this.desselectAllRobots();
        this.desselectAllStorages();
    };
    desselectAllRobots = () => {
        for (let i = 0; i < this.robots.length; i++) {
            const robot = this.robots[i];
            if (!robot)
                continue;
            if (robot.selected) {
                robot.onDeselect?.();
            }
            robot.selected = false;
        }
    };
    desselectAllStorages = () => {
        for (let i = 0; i < this.storages.length; i++) {
            const store = this.storages[i];
            if (!store)
                continue;
            if (store.selected) {
                store.onDeselect?.();
            }
            store.selected = false;
        }
    };
    renderShadow = ({ x, y, storageKey, }) => {
        const { W, H } = STORAGE_DB[storageKey];
        const d = GlobalHandler.getWithType(TOKENS.drawHandler);
        d.rect({
            x: Math.floor(x / W) * W,
            y: Math.floor(y / H) * H,
            w: W,
            h: H,
            strokeOrFill: 'stroke',
            strokeColor: '#f00',
            strokeWidth: 2,
            useCamera: true,
            fillColor: 'transparent',
            origin: 'topLeft',
        });
    };
    addRobot({ x, y }) {
        this.robots.push(new Robot({ name: GameUtil.getRandomName(), x, y }));
    }
    addFirePlace = (pixelX, pixelY) => {
        const mapHandler = GlobalHandler.getWithType('mapHandler', 'World');
        const gridHandler = GlobalHandler.getWithType('gridHandler', 'World');
        const mapCellSize = mapHandler.getCellSize();
        const gridXY = MouseUtil.snapXYToGridTopRight(pixelX, pixelY, mapCellSize.w, mapCellSize.h);
        gridXY.x += mapCellSize.w / 2;
        gridXY.y += mapCellSize.h / 2;
        this.addAnimatedSprite({
            name: 'FIRE1',
            spriteName: 'FIRE1',
            x: gridXY.x,
            y: gridXY.y,
            frameDuration: 200,
        });
        const temperatureGrid = gridHandler.getGrid('TEMPERATURE');
        const gridIJ = MouseUtil.snapXyToGridIndex(gridXY.x, gridXY.y, temperatureGrid.cellSize.w, temperatureGrid.cellSize.h);
        temperatureGrid.setValue(gridIJ.i, gridIJ.j, 100);
    };
    getClosestPlaceToGrabInput = () => {
        if (this.storages.length <= 0) {
            return undefined;
        }
    };
    getSeasonFromDay(dayOfYear) {
        if (dayOfYear >= SEASONS.SUMMER.start &&
            dayOfYear < SEASONS.SUMMER.end) {
            return SEASONS.SUMMER.string;
        }
        else if (dayOfYear >= SEASONS.FALL.start &&
            dayOfYear < SEASONS.FALL.end) {
            return SEASONS.FALL.string;
        }
        else if (dayOfYear >= SEASONS.SPRING.start &&
            dayOfYear < SEASONS.SPRING.end) {
            return SEASONS.SPRING.string;
        }
        else if (dayOfYear >= SEASONS.WINTER.start &&
            dayOfYear < SEASONS.WINTER.end) {
            return SEASONS.WINTER.string;
        }
        else {
            return 'ERROR';
        }
    }
    update(ts) {
        this.time += ts;
        if (this.time > 1000) {
            this.day++;
            this.dayOfYear = this.day % SEASONS.maxDays;
            this.season = this.getSeasonFromDay(this.dayOfYear);
            this.time = 0;
        }
        for (let i = 0; i < this.tempRect.length; i++) {
            const rect = this.tempRect[i];
            if (!rect)
                continue;
            if (rect.life <= 0) {
                this.tempRect.splice(i, 1);
                continue;
            }
            rect.update(ts);
        }
        const animationHandler = GlobalHandler.getWithType(TOKENS.animationHandler);
        animationHandler.update(ts);
        for (let i = 0; i < this.robots.length; i++) {
            const robot = this.robots[i];
            if (!robot)
                continue;
            if (robot.life <= 0) {
                this.robots.splice(i, 1);
                continue;
            }
            robot.update(ts);
        }
        for (let i = 0; i < this.storages.length; i++) {
            const storage = this.storages[i];
            if (!storage)
                continue;
            if (storage.life <= 0) {
                this.storages.splice(i, 1);
                continue;
            }
            storage.update(ts);
        }
        for (let i = 0; i < this.stuff.length; i++) {
            const stuff = this.stuff[i];
            if (!stuff)
                continue;
            if (stuff.life <= 0) {
                this.stuff.splice(i, 1);
                continue;
            }
            stuff.update(ts);
        }
    }
    drawDebugText = (ctx, textConfig) => {
        ctx.fillText(`WORLD\
         storesInMemory=${this.storages.length}\
         stuffList=${this.stuff.length}`, textConfig.x, (textConfig.y += textConfig.spacing));
    };
    render() {
        const d = this.drawHandler;
        for (let i = 0; i < this.stuff.length; i++) {
            const stuff = this.stuff[i];
            if (!stuff)
                continue;
            stuff.render(d);
        }
        for (let i = 0; i < this.storages.length; i++) {
            const storage = this.storages[i];
            if (!storage)
                continue;
            storage.render(d);
        }
        for (let i = 0; i < this.robots.length; i++) {
            const robot = this.robots[i];
            if (!robot)
                continue;
            robot.render(d);
        }
        for (let i = 0; i < this.animatedSprites.length; i++) {
            const animatedSprite = this.animatedSprites[i];
            if (!animatedSprite)
                continue;
            animatedSprite.render(d);
        }
        const animationHandler = GlobalHandler.getWithType(TOKENS.animationHandler);
        animationHandler.render(d);
    }
}

;// CONCATENATED MODULE: ./src/Math/Rectangle.js
class Rectangle {
  constructor(x, y, w, h, x2, y2) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.x1 = x;
    this.y1 = y;
    this.x2 = x2;
    this.y2 = y2;
  }
  getArea = () => {
    return this.w * this.h;
  };
  static fromWidthHeight(w, h) {
    return new Rectangle(0, 0, w, h);
  }
  static fromTwoPoints(x1, y1, x2, y2) {
    // const p1 = { x: x1, y: y1 };
    // const p2 = { x: x2, y: y2 };
    // const xMin = Math.min(p1.x, p2.x);
    // const yMin = Math.min(p1.y, p2.y);
    // const xMax = Math.max(p1.x, p2.x);
    // const yMax = Math.max(p1.y, p2.y);
    // const w = xMax - xMin;
    // const h = yMax - yMin;

    const w = Math.abs(x2 - x1);
    const h = Math.abs(y2 - y1);
    return new Rectangle(x1, y1, w, h, x2, y2);
  }
}
;// CONCATENATED MODULE: ./src/EngineEvents/EventActionHandler.ts






const KEY_CODE = {
    KeyA: 'KeyA',
    KeyD: 'KeyD',
    KeyW: 'KeyW',
    KeyS: 'KeyS',
    KeyQ: 'KeyQ',
    KeyE: 'KeyE',
    F1: 'F1',
    F2: 'F2',
    Digit0: 'Digit0',
    Digit1: 'Digit1',
    Digit2: 'Digit2',
    Digit3: 'Digit3',
    Digit4: 'Digit4',
    Digit5: 'Digit5',
    Digit6: 'Digit6',
    Digit7: 'Digit7',
    mouse0: 'mouse0',
    mouse1: 'mouse1',
    mouse2: 'mouse2',
};
const ACTION_COMMANDS = {
    SELECT: 'SELECT',
    ADD_ROBOT: 'ADD_ROBOT',
    ADD_STORAGE: 'ADD_STORAGE',
    ADD_STUFF: 'ADD_STUFF',
    NONE: 'NONE',
};
class EventActionHandler {
    keyMap;
    mouseMap;
    command;
    subCommand;
    selectedObjects;
    constructor() {
        this.selectedObjects = [];
        this.keyMap = {};
        this.mouseMap = {
            startSelection: undefined,
            endSelection: undefined,
        };
        this.command = '-';
        this.subCommand = '-';
    }
    isStringAKeyCode = (str) => {
        return Object.keys(KEY_CODE).includes(str);
    };
    registraListeners = () => {
        const eventHandler = GlobalHandler.getWithType('eventHandler', 'EventActions');
        eventHandler.addOnKeyUpListener({
            name: 'engine_onKeyUp',
            callback: ({ key, keyCode }) => {
                const { x, y } = MouseUtil.mouseToCamera();
                const world = GlobalHandler.getWithType('gameWorld', 'EventActions');
                world.addTextAnimation({
                    x: x,
                    y: y,
                    text: `KEY_UP_${key}`,
                    duration: 2000,
                });
                if (this.isStringAKeyCode(keyCode)) {
                    this.disableKey(keyCode);
                }
            },
        });
        eventHandler.addOnKeyDownListener({
            name: 'engine_onKeyDown',
            callback: ({ key, keyCode }) => {
                if (this.isStringAKeyCode(keyCode)) {
                    this.enableKey(keyCode);
                }
            },
        });
        eventHandler.addOnScrollListener({
            name: 'eventAction_onScroll',
            callback: (e) => {
                this.onScroll(e);
            },
        });
        eventHandler.addOnMouseDownListener({
            name: 'engine_onMouseDown',
            callback: (nativeEvent) => {
                const { button } = nativeEvent;
                if (button === 0) {
                    const { x, y } = MouseUtil.mouseToCamera();
                    const world = GlobalHandler.getWithType('gameWorld', 'EventActions');
                    world.addTextAnimation({
                        x: x,
                        y: y,
                        text: 'MOUSE_DOWN_0',
                        duration: 2000,
                    });
                    this.enableKey('mouse0');
                }
                if (button === 1) {
                    const { x, y } = MouseUtil.mouseToCamera();
                    const world = GlobalHandler.getWithType('gameWorld', 'EventActions');
                    world.addTextAnimation({
                        x: x,
                        y: y,
                        text: 'MOUSE_DOWN_1',
                        duration: 2000,
                    });
                    this.enableKey('mouse1');
                }
                if (button === 2) {
                    const { x, y } = MouseUtil.mouseToCamera();
                    const world = GlobalHandler.getWithType('gameWorld', 'EventActions');
                    world.addTextAnimation({
                        x: x,
                        y: y,
                        text: 'MOUSE_DOWN_2',
                        duration: 2000,
                    });
                    this.enableKey('mouse2');
                }
                this.updateDragStart();
            },
        });
        eventHandler.addOnMouseUpListener({
            name: 'engine_onMouseUp',
            callback: (nativeEvent) => {
                const { button } = nativeEvent;
                if (button === 0) {
                    this.onMouseUp0();
                }
                if (button === 1) {
                    this.onMouseUp1();
                }
                if (button === 2) {
                    this.onMouseUp2();
                }
                return false;
            },
        });
        eventHandler.addOnMouseMoveListener({
            name: 'engine_onMouseMove',
            callback: (e) => {
                this.updateDragEnd();
            },
        });
    };
    onScroll = (e) => {
        if (e.deltaY > 0) {
            GlobalHandler.getWithType('cameraHandler', 'EventActions').zoomOut();
        }
        else {
            GlobalHandler.getWithType('cameraHandler', 'EventActions').zoomIn();
        }
    };
    zoomIn = () => {
        const { x, y } = MouseUtil.mouseToCamera();
        const world = GlobalHandler.getWithType('gameWorld', 'EventActions');
        world.addTextAnimation({
            x: x,
            y: y,
            text: `PROCESS_INPUT::KEY_E`,
            duration: 2000,
        });
        const camera = GlobalHandler.getWithType('cameraHandler', 'EventActions');
        camera.zoomIn();
    };
    enableKey = (keyCode) => {
        this.keyMap[keyCode] = true;
    };
    disableKey = (keyCode) => {
        this.keyMap[keyCode] = false;
    };
    isPressed = (keyCode) => {
        return this.keyMap[keyCode];
    };
    setCommand = ({ cmd, subcmd }) => {
        this.command = cmd;
        this.subCommand = subcmd;
    };
    clearCommand = () => {
        this.command = '-';
        this.subCommand = '-';
    };
    getCommand = () => {
        return this.command;
    };
    getSubcommand = () => {
        return this.subCommand;
    };
    updateDragStart = () => {
        this.mouseMap.startSelection = MouseUtil.mouseToCameraGrid(50, 50);
    };
    updateDragEnd = () => {
        this.mouseMap.endSelection = MouseUtil.mouseToCameraGrid(50, 50);
    };
    isDragging = (mouseButton) => {
        if (GameUtil.isSomeIsUndefined('', [
            this.mouseMap?.startSelection?.x,
            this.mouseMap?.startSelection?.y,
            this.mouseMap?.endSelection?.x,
            this.mouseMap?.endSelection?.y,
        ])) {
            return false;
        }
        if (mouseButton) {
            return this.isPressed(mouseButton) || false;
        }
        return (this.isPressed('mouse0') ||
            this.isPressed('mouse1') ||
            this.isPressed('mouse2') ||
            false);
    };
    drawDebugText = (ctx, textConfig) => {
        ctx.fillText(`EventActions\
         command=${this.getCommand()}\
         subCommabnd=${this.getSubcommand()}
         this.selectedObjects=${this.selectedObjects?.length}`, textConfig.x, (textConfig.y += textConfig.spacing));
        ctx.fillText(`isMouse0pressed=${this.isPressed('mouse0')}\`,
         isMouse1pressed=${this.isPressed('mouse1')}\`,
         isMouse2pressed=${this.isPressed('mouse2')}`, textConfig.x, (textConfig.y += textConfig.spacing));
    };
    moveCameraWithMouse = () => {
        const camera = GlobalHandler.getWithType('cameraHandler', 'EventActions');
        const x1 = this.mouseMap.startSelection?.x;
        const y1 = this.mouseMap.startSelection?.y;
        const x2 = this.mouseMap.endSelection?.x;
        const y2 = this.mouseMap.endSelection?.y;
        if (!x1 || !y1 || !x2 || !y2) {
            throw new Error('x1 y1 x2 y2 not defined');
        }
        camera.moveX(0.01 * x2 - x1);
        camera.moveY(0.01 * y2 - y1);
    };
    tellRobotsToGoToStore = (robots, store) => {
        robots.forEach((robot) => {
            robot.setAction({ type: ROBOT_ACTIONS.STORAGE, obj: store });
        });
    };
    tellRobotsToWalkToMouseClick = (robots) => {
        const worldXY = MouseUtil.mouseToCamera();
        robots.forEach((robot) => {
            robot.setAction({
                type: ROBOT_ACTIONS.WALK,
                obj: new Vec2(worldXY.x, worldXY.y),
            });
        });
    };
    renderSelectionRect = (d) => {
        const x1 = this.mouseMap.startSelection?.x;
        const y1 = this.mouseMap.startSelection?.y;
        const x2 = this.mouseMap.endSelection?.x;
        const y2 = this.mouseMap.endSelection?.y;
        if (!x1 || !y1 || !x2 || !y2) {
            throw new Error('x1 y1 x2 y2 not defined');
        }
    };
    renderAddStorage = (d, storageKey) => {
    };
    renderAddRobot = (d) => {
    };
    renderAddStuff = (d, stuffKey) => {
    };
    mouseUp0_SELECT = () => {
        const world = GlobalHandler.getWithType('gameWorld', 'EventActions');
        const rect = Rectangle.fromTwoPoints(this.mouseMap.startSelection?.x, this.mouseMap.startSelection?.y, this.mouseMap.endSelection?.x, this.mouseMap.endSelection?.y);
        if (rect.getArea() > 10) {
            world.desselectAll();
            const x1 = this.mouseMap.startSelection?.x;
            const y1 = this.mouseMap.startSelection?.y;
            const x2 = this.mouseMap.endSelection?.x;
            const y2 = this.mouseMap.endSelection?.y;
            if (!x1 || !y1 || !x2 || !y2) {
                throw new Error('x1 y1 x2 y2 not defined');
            }
            this.selectedObjects = world.selectAllRobotsInsideRect(x1, y1, x2, y2);
        }
        else {
            const worldXY = MouseUtil.mouseToCamera();
            const camX = worldXY.x;
            const camY = worldXY.y;
            world.desselectAll();
            this.selectedObjects = world.selectRobotIfClickIsOverRobot(camX, camY);
            if (this.selectedObjects.length > 0) {
                return;
            }
            this.selectedObjects = world.selectStoreIfClickIsOverStore(camX, camY);
            if (this.selectedObjects.length > 0) {
                return;
            }
        }
    };
    onMouseUp0 = () => {
        const { x, y } = MouseUtil.mouseToCamera();
        const world = GlobalHandler.getWithType('gameWorld', 'EventActions');
        world.addTextAnimation({
            x: x,
            y: y,
            text: 'MOUSE_UP_0',
            duration: 2000,
        });
        this.disableKey('mouse0');
        switch (this.getCommand()) {
            case 'SELECT':
                this.mouseUp0_SELECT();
                break;
            case 'ADD_ROBOT':
                this.clearCommand();
                break;
            case 'ADD_STORAGE':
                this.clearCommand();
                break;
            case 'ADD_STUFF':
                this.clearCommand();
                break;
        }
    };
    onMouseUp1 = () => {
        const { x, y } = MouseUtil.mouseToCamera();
        const world = GlobalHandler.getWithType('gameWorld', 'EventActions');
        world.addTextAnimation({
            x: x,
            y: y,
            text: 'MOUSE_UP_1',
            duration: 2000,
        });
        this.disableKey('mouse1');
    };
    onMouseUp2 = () => {
        const { x, y } = MouseUtil.mouseToCamera();
        const world = GlobalHandler.getWithType('gameWorld', 'EventActions');
        this.disableKey('mouse2');
        if (this.selectedObjects.length <= 0) {
            return;
        }
        const selectedRobots = this.selectedObjects.filter((obj) => obj.type === 'ROBOT');
        const areThereRobotSelected = selectedRobots.length > 0;
        if (!areThereRobotSelected) {
            return;
        }
        const selectedObjectsThatAreNotRobot = this.selectedObjects.filter((obj) => obj.type !== 'ROBOT');
        for (let i = 0; i < selectedObjectsThatAreNotRobot.length; i++) {
            const object = selectedObjectsThatAreNotRobot[i];
            object.selected = false;
        }
        const potentialClickTargetIsStore = world.getStoreWithoutSelectIfClickIsOver();
        if (potentialClickTargetIsStore) {
            return;
        }
        this.tellRobotsToWalkToMouseClick(selectedRobots);
    };
}

;// CONCATENATED MODULE: ./src/EngineEvents/EventActions.ts




class EventActions {
    actionHandler;
    constructor() {
        this.actionHandler = new EventActionHandler();
        this.actionHandler.registraListeners();
    }
    processInput = () => {
        if (this.actionHandler.isDragging('mouse1')) {
            this.actionHandler.moveCameraWithMouse();
        }
        if (this.actionHandler.isPressed(KEY_CODE.F1)) {
            const { x, y } = MouseUtil.mouseToCamera();
            const world = GlobalHandler.getWithType('gameWorld', 'EventActions');
            world.addTextAnimation({ x: x, y: y, text: `PROCESS_INPUT::KEY_F1`, duration: 2000 });
            const gridHandler = GlobalHandler.getWithType(TOKENS.gridHandler, 'EventActions');
            gridHandler.getGrid(GRID_KEYS.TEMPERATURE).toggleVisibility();
            this.actionHandler.disableKey(KEY_CODE.F1);
        }
        if (this.actionHandler.isPressed(KEY_CODE.F2)) {
            const gridHandler = GlobalHandler.getWithType(TOKENS.gridHandler, 'EventActions');
            gridHandler.getGrid(GRID_KEYS.PERLIN_NOISE).toggleVisibility();
            this.actionHandler.disableKey(KEY_CODE.F2);
        }
        if (this.actionHandler.isPressed(KEY_CODE.KeyE)) {
            GlobalHandler.getWithType('cameraHandler', 'EventActions').zoomIn();
        }
        if (this.actionHandler.isPressed(KEY_CODE.KeyQ)) {
            GlobalHandler.getWithType('cameraHandler', 'EventActions').zoomOut();
        }
        if (this.actionHandler.isPressed(KEY_CODE.KeyD)) {
            GlobalHandler.getWithType('cameraHandler', 'EventActions').moveX(1);
        }
        if (this.actionHandler.isPressed(KEY_CODE.KeyA)) {
            GlobalHandler.getWithType('cameraHandler', 'EventActions').moveX(-1);
        }
        if (this.actionHandler.isPressed(KEY_CODE.KeyW)) {
            GlobalHandler.getWithType('cameraHandler', 'EventActions').moveY(-1);
        }
        if (this.actionHandler.isPressed(KEY_CODE.KeyS)) {
            GlobalHandler.getWithType('cameraHandler', 'EventActions').moveY(1);
        }
        if (this.actionHandler.isPressed('Digit0')) {
            GlobalHandler.getWithType('cameraHandler', 'EventActions').follow(0, 0);
        }
        if (this.actionHandler.isPressed('Digit1')) {
            this.actionHandler.setCommand({ cmd: 'SELECT', subcmd: '-' });
        }
        if (this.actionHandler.isPressed('Digit2')) {
            this.actionHandler.setCommand({ cmd: 'ADD_ROBOT', subcmd: 'ROBOT' });
        }
        if (this.actionHandler.isPressed('Digit3')) {
            this.actionHandler.setCommand({ cmd: 'ADD_STORAGE', subcmd: 'POTATO_PLANT' });
        }
        if (this.actionHandler.isPressed('Digit4')) {
            this.actionHandler.setCommand({ cmd: 'ADD_STORAGE', subcmd: 'POTATO_FARM' });
        }
        if (this.actionHandler.isPressed('Digit5')) {
            this.actionHandler.setCommand({ cmd: 'ADD_STORAGE', subcmd: 'WAREHOUSE' });
        }
        if (this.actionHandler.isPressed('Digit6')) {
            this.actionHandler.setCommand({ cmd: 'ADD_STORAGE', subcmd: 'POTATO_FIELD' });
        }
        if (this.actionHandler.isPressed('Digit7')) {
            this.actionHandler.setCommand({ cmd: 'ADD_STUFF', subcmd: 'TREE' });
        }
    };
    update = () => {
        this.processInput();
    };
    render = () => {
        const d = GlobalHandler.getWithType('drawHandler', 'EventActions');
        switch (this.actionHandler.getCommand()) {
            case 'SELECT':
                if (this.actionHandler.isDragging('mouse0')) {
                    this.actionHandler.renderSelectionRect(d);
                }
                break;
            case 'ADD_ROBOT':
                this.actionHandler.renderAddRobot(d);
                break;
            case 'ADD_STUFF':
                const stuffKey = this.actionHandler.getSubcommand();
                this.actionHandler.renderAddStuff(d, stuffKey);
                break;
            case 'ADD_STORAGE':
                const storageKey = this.actionHandler.getSubcommand();
                this.actionHandler.renderAddStorage(d, storageKey);
                break;
        }
    };
}

;// CONCATENATED MODULE: ./src/Math/PerlinP5.js
const PERLIN_YWRAPB = 4;
const PERLIN_YWRAP = 1 << PERLIN_YWRAPB; // 16
const PERLIN_ZWRAPB = 8;
// left shift by 8 bits
// each shift to the left doubles the value
// 0001 = 1, 0010 = 2, 0100 = 4, 1000 = 8 32 64 128 256
// I=it effectively calculates 2^8, resulting in PERLIN_ZWRAP being set to 256.
const PERLIN_ZWRAP = 1 << PERLIN_ZWRAPB; // 256
const PERLIN_SIZE = 4095;
let perlin_octaves = 4; // default to medium smooth
let perlin_amp_falloff = 0.5; // 50% reduction/octave
const scaled_cosine = i => 0.5 * (1.0 - Math.cos(i * Math.PI));
let perlin; // will be initialized lazily by noise() or noiseSeed()
const noise = function (x, y = 0, z = 0) {
  if (perlin == null) {
    perlin = new Array(PERLIN_SIZE + 1);
    for (let i = 0; i < PERLIN_SIZE + 1; i++) {
      perlin[i] = Math.random();
    }
  }
  if (x < 0) {
    x = -x;
  }
  if (y < 0) {
    y = -y;
  }
  if (z < 0) {
    z = -z;
  }
  let xi = Math.floor(x),
    yi = Math.floor(y),
    zi = Math.floor(z);
  let xf = x - xi;
  let yf = y - yi;
  let zf = z - zi;
  let rxf, ryf;
  let VALUE = 0;
  let ampl = 0.5;
  let n1, n2, n3;
  for (let o = 0; o < perlin_octaves; o++) {
    let of = xi + (yi << PERLIN_YWRAPB) + (zi << PERLIN_ZWRAPB);
    rxf = scaled_cosine(xf);
    ryf = scaled_cosine(yf);
    n1 = perlin[of & PERLIN_SIZE];
    n1 += rxf * (perlin[of + 1 & PERLIN_SIZE] - n1);
    n2 = perlin[of + PERLIN_YWRAP & PERLIN_SIZE];
    n2 += rxf * (perlin[of + PERLIN_YWRAP + 1 & PERLIN_SIZE] - n2);
    n1 += ryf * (n2 - n1);
    of += PERLIN_ZWRAP;
    n2 = perlin[of & PERLIN_SIZE];
    n2 += rxf * (perlin[of + 1 & PERLIN_SIZE] - n2);
    n3 = perlin[of + PERLIN_YWRAP & PERLIN_SIZE];
    n3 += rxf * (perlin[of + PERLIN_YWRAP + 1 & PERLIN_SIZE] - n3);
    n2 += ryf * (n3 - n2);
    n1 += scaled_cosine(zf) * (n2 - n1);
    VALUE += n1 * ampl;
    ampl *= perlin_amp_falloff;
    xi <<= 1;
    xf *= 2;
    yi <<= 1;
    yf *= 2;
    zi <<= 1;
    zf *= 2;
    if (xf >= 1.0) {
      xi++;
      xf--;
    }
    if (yf >= 1.0) {
      yi++;
      yf--;
    }
    if (zf >= 1.0) {
      zi++;
      zf--;
    }
  }
  return VALUE;
};
const noiseDetail = function (lod, falloff) {
  if (lod > 0) {
    perlin_octaves = lod;
  }
  if (falloff > 0) {
    perlin_amp_falloff = falloff;
  }
};
const noiseSeed = function (seed) {
  // Linear Congruential Generator
  // Variant of a Lehman Generator
  const lcg = (() => {
    // Set to values from http://en.wikipedia.org/wiki/Numerical_Recipes
    // m is basically chosen to be large (as it is the max period)
    // and for its relationships to a and c
    const m = 4294967296;
    // a - 1 should be divisible by m's prime factors
    const a = 1664525;
    // c and m should be co-prime
    const c = 1013904223;
    let seed;
    let z;
    return {
      setSeed(val) {
        // pick a random seed if val is undefined or null
        // the >>> 0 casts the seed to an unsigned 32-bit integer
        seed = (val == null ? Math.random() * m : val) >>> 0;
        z = seed;
      },
      getSeed() {
        return seed;
      },
      rand() {
        // define the recurrence relationship
        z = (a * z + c) % m;
        // return a float in [0, 1)
        // if z = m then z / m = 0 therefore (z % m) / m < 1 always
        return z / m;
      }
    };
  })();
  lcg.setSeed(seed);
  perlin = new Array(PERLIN_SIZE + 1);
  for (let i = 0; i < PERLIN_SIZE + 1; i++) {
    perlin[i] = lcg.rand();
  }
};

;// CONCATENATED MODULE: ./src/Math/PerlinNoise.ts

class PerlinNoise {
    constructor() {
        console.log('PerlinNoise constructor');
        noiseSeed(111);
    }
    static setSeed(seed) {
        noiseSeed(seed);
    }
    static getPerlinNoise = (x, y, t) => {
        const noiseScale = 0.0009;
        const noiseLevel = 255;
        let nx = noiseScale * x;
        let ny = noiseScale * y;
        let nt = noiseScale * t;
        const value = noise(nx, ny, nt) * noiseLevel;
        return value;
    };
}

;// CONCATENATED MODULE: ./src/Engine/GridHandler.ts



class GridCell {
    i;
    j;
    x;
    y;
    w;
    h;
    value;
    constructor({ i, j, x, y, w, h, }) {
        this.i = i;
        this.j = j;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.value = 0;
    }
}
class GridBase {
    mapSize;
    cellSize;
    grid;
    minGridValue;
    maxGridValue;
    isVisible;
    constructor({ mapSize, cellSize, onValue = () => 0, }) {
        this.mapSize = mapSize;
        this.cellSize = cellSize;
        this.grid = [];
        this.minGridValue = 0;
        this.maxGridValue = 0;
        this.isVisible = false;
        this.init(onValue);
    }
    init = (onValueCallback) => {
        for (let x = 0, i = 0; x < this.mapSize.w; x += this.cellSize.w, i++) {
            this.grid[i] = [];
            for (let y = 0, j = 0; y < this.mapSize.h; y += this.cellSize.h, j++) {
                this.grid[i].push({
                    i,
                    j,
                    x,
                    y,
                    w: this.cellSize.w,
                    h: this.cellSize.h,
                    value: onValueCallback({
                        x,
                        y,
                        i,
                        j,
                        cellW: this.cellSize.w,
                        cellH: this.cellSize.h,
                    }),
                });
            }
        }
    };
    setValue = (i, j, value) => {
        this.grid[i][j].value = value;
    };
    updateMinMaxGridValue = () => {
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[0].length; j++) {
                const cell = this.grid[i][j];
                if (cell.value > this.maxGridValue) {
                    this.maxGridValue = cell.value;
                }
                if (cell.value < this.minGridValue) {
                    this.minGridValue = cell.value;
                }
            }
        }
    };
    updateGridUsingAverageOfNeighbors = () => {
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[0].length; j++) {
                const newValue = this.computeAverageOfNeighbors(i, j, this.grid.length, this.grid[0].length);
                this.grid[i][j].value = newValue;
            }
        }
    };
    computeAverageOfNeighbors = (row, col, numRows, numCols, minValue = 0, maxValue = 100) => {
        const topValue = row - 1 >= 0 ? this.grid[row - 1][col].value : minValue;
        const bottomValue = row + 1 < numRows ? this.grid[row + 1][col].value : minValue;
        const leftValue = col - 1 >= 0 ? this.grid[row][col - 1].value : minValue;
        const rightValue = col + 1 < numCols ? this.grid[row][col + 1].value : minValue;
        const average = (topValue + bottomValue + leftValue + rightValue) / 4;
        let newValue = this.grid[row][col].value + Math.floor(average);
        if (newValue > maxValue) {
            newValue = maxValue;
        }
        return newValue;
    };
    toggleVisibility = () => {
        this.isVisible = !this.isVisible;
    };
    getValueXY = (x, y) => {
        const i = (x / this.mapSize.w) * this.grid.length;
        const j = (y / this.mapSize.h) * this.grid[0].length;
        return this.grid[i][j];
    };
    render = ({ d, onColor = (cell) => `rgba(${MathUtil.map(cell.value, this.minGridValue || 0, this.maxGridValue || 255, 0, 255)}, 0, 0, 0.5)`, onText = (cell) => `` + cell.value, fillRect = true, }) => {
        if (!this.isVisible) {
            return;
        }
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[0].length; j++) {
                const cell = this.grid[i][j];
                const color = onColor(cell);
                const text = onText(cell);
                d.rect({
                    x: cell.x,
                    y: cell.y,
                    w: cell.w,
                    h: cell.h,
                    strokeOrFill: fillRect ? 'fill' : 'stroke',
                    useCamera: true,
                    fillColor: color,
                    strokeColor: color,
                    strokeWidth: 1,
                    origin: 'topLeft',
                });
                d.text({
                    x: cell.x + cell.w / 4,
                    y: cell.y + cell.h / 2,
                    useCamera: true,
                    text,
                });
            }
        }
    };
}
class GenericGrid extends GridBase {
    constructor({ mapSize = { w: 500, h: 500 }, cellSize = { w: 50, h: 50 }, onValue = (_) => 1, }) {
        super({ mapSize, cellSize, onValue });
    }
    onValue = ({ x, y }) => {
        return PerlinNoise.getPerlinNoise(x, y, 1);
    };
}
class TempGrid extends GridBase {
    constructor({ mapSize = { w: 500, h: 500 }, cellSize = { w: 50, h: 50 }, onValue = () => 0 }) {
        super({ mapSize, cellSize, onValue });
    }
    setValue = (i, j, value) => {
        console.log(`TempGrid.setValue: i=${i}, j=${j}, value=${value}`);
        this.grid[i][j].value = value;
        this.updateGridUsingAverageOfNeighbors();
        this.updateMinMaxGridValue();
    };
}
class GridHandler {
    tsAcumulado;
    tempoAcumuladoMs;
    grids;
    currentGridKey;
    constructor() {
        this.tsAcumulado = 0;
        this.tempoAcumuladoMs = 0;
        this.grids = {};
        this.currentGridKey = GRID_KEYS.TEMPERATURE;
    }
    buildTemperatureGrid = ({ mapSize }) => {
        PerlinNoise.setSeed(112);
        this.grids[GRID_KEYS.TEMPERATURE] = new TempGrid({
            mapSize,
            cellSize: { w: 50, h: 50 },
            onValue: () => 0,
        });
    };
    buildMapGrid = ({ mapSize }) => {
        PerlinNoise.setSeed(112);
        const newGenericGrid = new GenericGrid({
            mapSize,
            cellSize: { w: 50, h: 50 },
            onValue: ({ x, y }) => PerlinNoise.getPerlinNoise(x, y, 1),
        });
        this.grids[GRID_KEYS.PERLIN_NOISE] = newGenericGrid;
    };
    update = (ts) => {
    };
    getGrid = (gridKey) => {
        if (!gridKey || !this.grids[gridKey]) {
            throw new Error(`GridHandler.getGrid: key ${gridKey} not found`);
        }
        return this.grids[gridKey];
    };
    render = (d) => {
        this.grids[GRID_KEYS.PERLIN_NOISE].render({
            d,
            fillRect: true,
            onColor: (cell) => `rgba(${MathUtil.map(cell.value, this.grids[GRID_KEYS.PERLIN_NOISE].minGridValue || 0, this.grids[GRID_KEYS.PERLIN_NOISE].maxGridValue || 255, 0, 255)}, ${MathUtil.map(cell.value, this.grids[GRID_KEYS.PERLIN_NOISE].minGridValue || 0, this.grids[GRID_KEYS.PERLIN_NOISE].maxGridValue || 255, 0, 255)}, 0, 1.0)`,
            onText: (cell) => cell.value.toFixed(0),
        });
    };
}

;// CONCATENATED MODULE: ./src/Animation/AnimationHandler.ts
class AnimationHandler {
    animationList = [];
    constructor() { }
    addAnimation(animation) {
        this.animationList.push(animation);
    }
    update(dt) {
        for (const animation of this.animationList) {
            animation.update(dt);
        }
    }
    render(d) {
        for (const animation of this.animationList) {
            animation.render(d);
        }
    }
}

;// CONCATENATED MODULE: ./src/Engine/Engine.ts







class Engine {
    constructor() {
        console.log(`Start of Engine constructor`);
        this.onNewEngine_InstanceSetup();
        console.log(`End of Engine constructor`);
    }
    onNewEngine_InstanceSetup = () => {
        GlobalHandler.set(TOKENS.gameWorld, new World(), 'Engine');
        GlobalHandler.set(TOKENS.animationHandler, new AnimationHandler(), 'Engine');
        GlobalHandler.set(TOKENS.eventActions, new EventActions(), 'Engine');
        GlobalHandler.set(TOKENS.gridHandler, new GridHandler(), 'Engine');
        GlobalHandler.set(TOKENS.mapHandler, new MapHandler(), 'Engine');
        GlobalHandler.getWithType(TOKENS.mapHandler).buildMaps();
        GlobalHandler.getWithType(TOKENS.gameWorld).addFirePlace(200, 255);
        GlobalHandler.getWithType(TOKENS.gameWorld).addFirePlace(300, 255);
        GlobalHandler.getWithType(TOKENS.gameWorld).addRobot({ x: 300, y: 300 });
    };
    update = (ts) => {
        GlobalHandler.get(TOKENS.eventActions).update(ts);
        GlobalHandler.get(TOKENS.cameraHandler).update(ts);
        GlobalHandler.get(TOKENS.gameWorld).update(ts);
        GlobalHandler.get(TOKENS.gridHandler).update(ts);
    };
    draw = (d) => {
        GlobalHandler.get(TOKENS.mapHandler).drawMap('MAP1');
        GlobalHandler.get(TOKENS.gameWorld).render(d);
        GlobalHandler.get(TOKENS.eventActions).render(d);
        GlobalHandler.get(TOKENS.gridHandler).render(d);
    };
}

;// CONCATENATED MODULE: ./src/Anno_MyScenes/GameRunning.scene.ts





class GameRunningScene extends SceneBase {
    isPaused = false;
    constructor() {
        super(SCENE_KEYS.GameRunning);
    }
    onMount = () => {
        const oldEngine = GlobalHandler.tryGet(TOKENS.engine, GameRunningScene.name);
        if (!oldEngine) {
            GlobalHandler.set(TOKENS.engine, new Engine(), GameRunningScene.name);
        }
    };
    onUnmount = () => {
    };
    onUpdate = ({ dt }) => {
        if (this.isPaused) {
            return;
        }
        GlobalHandler.get(TOKENS.engine, GameRunningScene.name).update(dt);
    };
    onRender = () => {
        return SceneCreator.createComponent('root', {
            children: [
                SceneCreator.createComponent('Engine', {
                    instance: GlobalHandler.get(TOKENS.engine, GameRunningScene.name),
                }),
            ],
        });
    };
}

;// CONCATENATED MODULE: ./src/Anno_MyScenes/Settings.scene.tsx
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/** @jsx SceneCreator.createElement */
/** @jsxFrag SceneCreator.Fragment */



// type JSXElementConstructor<P> = {
//     new (props: P): IDomNode;
// };

// type Root = JSXElementConstructor<{ children: any }>;

// type VList = JSXElementConstructor<{ children: any }>;

// type Box = JSXElementConstructor<{ children: any, text: string }>;

var SettingsScene = /*#__PURE__*/function (_SceneBase) {
  function SettingsScene() {
    var _this;
    _classCallCheck(this, SettingsScene);
    _this = _callSuper(this, SettingsScene, ['Settings']);
    _defineProperty(_this, "onMount", function () {});
    _defineProperty(_this, "onUnmount", function () {});
    _defineProperty(_this, "onUpdate", function () {});
    _defineProperty(_this, "onRender", function () {
      var result = SceneCreator.createComponent("root", {
        children: [SceneCreator.createComponent("vlist", {
          children: [SceneCreator.createComponent("box", {
            text: "item1"
          }), SceneCreator.createComponent("box", {
            text: "item2"
          }), SceneCreator.createComponent("box", {
            text: "item3"
          })]
        })]
      });
      console.log('Render result:', result);
      return result;
    });
    return _this;
  }
  _inherits(SettingsScene, _SceneBase);
  return _createClass(SettingsScene);
}(SceneBase);
;// CONCATENATED MODULE: ./src/Anno/MyScenesMap.ts




const SCENE_KEYS = {
    StartGame: 'StartGame',
    AboutScene: 'AboutScene',
    GameRunning: 'GameRunning',
    Settings: 'Settings',
};
const sceneMap = {
    [SCENE_KEYS.StartGame]: StartGameScene,
    [SCENE_KEYS.AboutScene]: AboutScene,
    [SCENE_KEYS.GameRunning]: GameRunningScene,
    [SCENE_KEYS.Settings]: SettingsScene,
};

;// CONCATENATED MODULE: ./src/Anno/Anno.ts



class Anno {
    constructor() {
        new WindowManager().setup({
            canvas: document.getElementById('mycanvas'),
            sceneClassMap: sceneMap,
            initialSceneKey: SCENE_KEYS.StartGame,
            fileList: FILE_LIST,
        });
    }
}

;// CONCATENATED MODULE: ./src/entrypoint.ts



window.addEventListener('load', async () => {
    new Anno();
});

})();

/******/ })()
;