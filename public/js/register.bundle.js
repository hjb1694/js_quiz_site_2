/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./wp-src/register.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../AppData/Roaming/npm/node_modules/webpack/node_modules/process/browser.js":
/*!*************************************************!*\
  !*** (webpack)/node_modules/process/browser.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///(webpack)/node_modules/process/browser.js?");

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./lib/axios */ \"./node_modules/axios/lib/axios.js\");\n\n//# sourceURL=webpack:///./node_modules/axios/index.js?");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\nvar settle = __webpack_require__(/*! ./../core/settle */ \"./node_modules/axios/lib/core/settle.js\");\nvar buildURL = __webpack_require__(/*! ./../helpers/buildURL */ \"./node_modules/axios/lib/helpers/buildURL.js\");\nvar parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ \"./node_modules/axios/lib/helpers/parseHeaders.js\");\nvar isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ \"./node_modules/axios/lib/helpers/isURLSameOrigin.js\");\nvar createError = __webpack_require__(/*! ../core/createError */ \"./node_modules/axios/lib/core/createError.js\");\n\nmodule.exports = function xhrAdapter(config) {\n  return new Promise(function dispatchXhrRequest(resolve, reject) {\n    var requestData = config.data;\n    var requestHeaders = config.headers;\n\n    if (utils.isFormData(requestData)) {\n      delete requestHeaders['Content-Type']; // Let the browser set it\n    }\n\n    var request = new XMLHttpRequest();\n\n    // HTTP basic authentication\n    if (config.auth) {\n      var username = config.auth.username || '';\n      var password = config.auth.password || '';\n      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);\n    }\n\n    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);\n\n    // Set the request timeout in MS\n    request.timeout = config.timeout;\n\n    // Listen for ready state\n    request.onreadystatechange = function handleLoad() {\n      if (!request || request.readyState !== 4) {\n        return;\n      }\n\n      // The request errored out and we didn't get a response, this will be\n      // handled by onerror instead\n      // With one exception: request that using file: protocol, most browsers\n      // will return status as 0 even though it's a successful request\n      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {\n        return;\n      }\n\n      // Prepare the response\n      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;\n      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;\n      var response = {\n        data: responseData,\n        status: request.status,\n        statusText: request.statusText,\n        headers: responseHeaders,\n        config: config,\n        request: request\n      };\n\n      settle(resolve, reject, response);\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle browser request cancellation (as opposed to a manual cancellation)\n    request.onabort = function handleAbort() {\n      if (!request) {\n        return;\n      }\n\n      reject(createError('Request aborted', config, 'ECONNABORTED', request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle low level network errors\n    request.onerror = function handleError() {\n      // Real errors are hidden from us by the browser\n      // onerror should only fire if it's a network error\n      reject(createError('Network Error', config, null, request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle timeout\n    request.ontimeout = function handleTimeout() {\n      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',\n        request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Add xsrf header\n    // This is only done if running in a standard browser environment.\n    // Specifically not if we're in a web worker, or react-native.\n    if (utils.isStandardBrowserEnv()) {\n      var cookies = __webpack_require__(/*! ./../helpers/cookies */ \"./node_modules/axios/lib/helpers/cookies.js\");\n\n      // Add xsrf header\n      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?\n        cookies.read(config.xsrfCookieName) :\n        undefined;\n\n      if (xsrfValue) {\n        requestHeaders[config.xsrfHeaderName] = xsrfValue;\n      }\n    }\n\n    // Add headers to the request\n    if ('setRequestHeader' in request) {\n      utils.forEach(requestHeaders, function setRequestHeader(val, key) {\n        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {\n          // Remove Content-Type if data is undefined\n          delete requestHeaders[key];\n        } else {\n          // Otherwise add header to the request\n          request.setRequestHeader(key, val);\n        }\n      });\n    }\n\n    // Add withCredentials to request if needed\n    if (config.withCredentials) {\n      request.withCredentials = true;\n    }\n\n    // Add responseType to request if needed\n    if (config.responseType) {\n      try {\n        request.responseType = config.responseType;\n      } catch (e) {\n        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.\n        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.\n        if (config.responseType !== 'json') {\n          throw e;\n        }\n      }\n    }\n\n    // Handle progress if needed\n    if (typeof config.onDownloadProgress === 'function') {\n      request.addEventListener('progress', config.onDownloadProgress);\n    }\n\n    // Not all browsers support upload events\n    if (typeof config.onUploadProgress === 'function' && request.upload) {\n      request.upload.addEventListener('progress', config.onUploadProgress);\n    }\n\n    if (config.cancelToken) {\n      // Handle cancellation\n      config.cancelToken.promise.then(function onCanceled(cancel) {\n        if (!request) {\n          return;\n        }\n\n        request.abort();\n        reject(cancel);\n        // Clean up request\n        request = null;\n      });\n    }\n\n    if (requestData === undefined) {\n      requestData = null;\n    }\n\n    // Send the request\n    request.send(requestData);\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/adapters/xhr.js?");

/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/axios/lib/utils.js\");\nvar bind = __webpack_require__(/*! ./helpers/bind */ \"./node_modules/axios/lib/helpers/bind.js\");\nvar Axios = __webpack_require__(/*! ./core/Axios */ \"./node_modules/axios/lib/core/Axios.js\");\nvar mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ \"./node_modules/axios/lib/core/mergeConfig.js\");\nvar defaults = __webpack_require__(/*! ./defaults */ \"./node_modules/axios/lib/defaults.js\");\n\n/**\n * Create an instance of Axios\n *\n * @param {Object} defaultConfig The default config for the instance\n * @return {Axios} A new instance of Axios\n */\nfunction createInstance(defaultConfig) {\n  var context = new Axios(defaultConfig);\n  var instance = bind(Axios.prototype.request, context);\n\n  // Copy axios.prototype to instance\n  utils.extend(instance, Axios.prototype, context);\n\n  // Copy context to instance\n  utils.extend(instance, context);\n\n  return instance;\n}\n\n// Create the default instance to be exported\nvar axios = createInstance(defaults);\n\n// Expose Axios class to allow class inheritance\naxios.Axios = Axios;\n\n// Factory for creating new instances\naxios.create = function create(instanceConfig) {\n  return createInstance(mergeConfig(axios.defaults, instanceConfig));\n};\n\n// Expose Cancel & CancelToken\naxios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ \"./node_modules/axios/lib/cancel/Cancel.js\");\naxios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ \"./node_modules/axios/lib/cancel/CancelToken.js\");\naxios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ \"./node_modules/axios/lib/cancel/isCancel.js\");\n\n// Expose all/spread\naxios.all = function all(promises) {\n  return Promise.all(promises);\n};\naxios.spread = __webpack_require__(/*! ./helpers/spread */ \"./node_modules/axios/lib/helpers/spread.js\");\n\nmodule.exports = axios;\n\n// Allow use of default import syntax in TypeScript\nmodule.exports.default = axios;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/axios.js?");

/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * A `Cancel` is an object that is thrown when an operation is canceled.\n *\n * @class\n * @param {string=} message The message.\n */\nfunction Cancel(message) {\n  this.message = message;\n}\n\nCancel.prototype.toString = function toString() {\n  return 'Cancel' + (this.message ? ': ' + this.message : '');\n};\n\nCancel.prototype.__CANCEL__ = true;\n\nmodule.exports = Cancel;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/cancel/Cancel.js?");

/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar Cancel = __webpack_require__(/*! ./Cancel */ \"./node_modules/axios/lib/cancel/Cancel.js\");\n\n/**\n * A `CancelToken` is an object that can be used to request cancellation of an operation.\n *\n * @class\n * @param {Function} executor The executor function.\n */\nfunction CancelToken(executor) {\n  if (typeof executor !== 'function') {\n    throw new TypeError('executor must be a function.');\n  }\n\n  var resolvePromise;\n  this.promise = new Promise(function promiseExecutor(resolve) {\n    resolvePromise = resolve;\n  });\n\n  var token = this;\n  executor(function cancel(message) {\n    if (token.reason) {\n      // Cancellation has already been requested\n      return;\n    }\n\n    token.reason = new Cancel(message);\n    resolvePromise(token.reason);\n  });\n}\n\n/**\n * Throws a `Cancel` if cancellation has been requested.\n */\nCancelToken.prototype.throwIfRequested = function throwIfRequested() {\n  if (this.reason) {\n    throw this.reason;\n  }\n};\n\n/**\n * Returns an object that contains a new `CancelToken` and a function that, when called,\n * cancels the `CancelToken`.\n */\nCancelToken.source = function source() {\n  var cancel;\n  var token = new CancelToken(function executor(c) {\n    cancel = c;\n  });\n  return {\n    token: token,\n    cancel: cancel\n  };\n};\n\nmodule.exports = CancelToken;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/cancel/CancelToken.js?");

/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function isCancel(value) {\n  return !!(value && value.__CANCEL__);\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/cancel/isCancel.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\nvar buildURL = __webpack_require__(/*! ../helpers/buildURL */ \"./node_modules/axios/lib/helpers/buildURL.js\");\nvar InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ \"./node_modules/axios/lib/core/InterceptorManager.js\");\nvar dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ \"./node_modules/axios/lib/core/dispatchRequest.js\");\nvar mergeConfig = __webpack_require__(/*! ./mergeConfig */ \"./node_modules/axios/lib/core/mergeConfig.js\");\n\n/**\n * Create a new instance of Axios\n *\n * @param {Object} instanceConfig The default config for the instance\n */\nfunction Axios(instanceConfig) {\n  this.defaults = instanceConfig;\n  this.interceptors = {\n    request: new InterceptorManager(),\n    response: new InterceptorManager()\n  };\n}\n\n/**\n * Dispatch a request\n *\n * @param {Object} config The config specific for this request (merged with this.defaults)\n */\nAxios.prototype.request = function request(config) {\n  /*eslint no-param-reassign:0*/\n  // Allow for axios('example/url'[, config]) a la fetch API\n  if (typeof config === 'string') {\n    config = arguments[1] || {};\n    config.url = arguments[0];\n  } else {\n    config = config || {};\n  }\n\n  config = mergeConfig(this.defaults, config);\n  config.method = config.method ? config.method.toLowerCase() : 'get';\n\n  // Hook up interceptors middleware\n  var chain = [dispatchRequest, undefined];\n  var promise = Promise.resolve(config);\n\n  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {\n    chain.unshift(interceptor.fulfilled, interceptor.rejected);\n  });\n\n  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {\n    chain.push(interceptor.fulfilled, interceptor.rejected);\n  });\n\n  while (chain.length) {\n    promise = promise.then(chain.shift(), chain.shift());\n  }\n\n  return promise;\n};\n\nAxios.prototype.getUri = function getUri(config) {\n  config = mergeConfig(this.defaults, config);\n  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\\?/, '');\n};\n\n// Provide aliases for supported request methods\nutils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {\n  /*eslint func-names:0*/\n  Axios.prototype[method] = function(url, config) {\n    return this.request(utils.merge(config || {}, {\n      method: method,\n      url: url\n    }));\n  };\n});\n\nutils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {\n  /*eslint func-names:0*/\n  Axios.prototype[method] = function(url, data, config) {\n    return this.request(utils.merge(config || {}, {\n      method: method,\n      url: url,\n      data: data\n    }));\n  };\n});\n\nmodule.exports = Axios;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/Axios.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nfunction InterceptorManager() {\n  this.handlers = [];\n}\n\n/**\n * Add a new interceptor to the stack\n *\n * @param {Function} fulfilled The function to handle `then` for a `Promise`\n * @param {Function} rejected The function to handle `reject` for a `Promise`\n *\n * @return {Number} An ID used to remove interceptor later\n */\nInterceptorManager.prototype.use = function use(fulfilled, rejected) {\n  this.handlers.push({\n    fulfilled: fulfilled,\n    rejected: rejected\n  });\n  return this.handlers.length - 1;\n};\n\n/**\n * Remove an interceptor from the stack\n *\n * @param {Number} id The ID that was returned by `use`\n */\nInterceptorManager.prototype.eject = function eject(id) {\n  if (this.handlers[id]) {\n    this.handlers[id] = null;\n  }\n};\n\n/**\n * Iterate over all the registered interceptors\n *\n * This method is particularly useful for skipping over any\n * interceptors that may have become `null` calling `eject`.\n *\n * @param {Function} fn The function to call for each interceptor\n */\nInterceptorManager.prototype.forEach = function forEach(fn) {\n  utils.forEach(this.handlers, function forEachHandler(h) {\n    if (h !== null) {\n      fn(h);\n    }\n  });\n};\n\nmodule.exports = InterceptorManager;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/InterceptorManager.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar enhanceError = __webpack_require__(/*! ./enhanceError */ \"./node_modules/axios/lib/core/enhanceError.js\");\n\n/**\n * Create an Error with the specified message, config, error code, request and response.\n *\n * @param {string} message The error message.\n * @param {Object} config The config.\n * @param {string} [code] The error code (for example, 'ECONNABORTED').\n * @param {Object} [request] The request.\n * @param {Object} [response] The response.\n * @returns {Error} The created error.\n */\nmodule.exports = function createError(message, config, code, request, response) {\n  var error = new Error(message);\n  return enhanceError(error, config, code, request, response);\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/createError.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\nvar transformData = __webpack_require__(/*! ./transformData */ \"./node_modules/axios/lib/core/transformData.js\");\nvar isCancel = __webpack_require__(/*! ../cancel/isCancel */ \"./node_modules/axios/lib/cancel/isCancel.js\");\nvar defaults = __webpack_require__(/*! ../defaults */ \"./node_modules/axios/lib/defaults.js\");\nvar isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ \"./node_modules/axios/lib/helpers/isAbsoluteURL.js\");\nvar combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ \"./node_modules/axios/lib/helpers/combineURLs.js\");\n\n/**\n * Throws a `Cancel` if cancellation has been requested.\n */\nfunction throwIfCancellationRequested(config) {\n  if (config.cancelToken) {\n    config.cancelToken.throwIfRequested();\n  }\n}\n\n/**\n * Dispatch a request to the server using the configured adapter.\n *\n * @param {object} config The config that is to be used for the request\n * @returns {Promise} The Promise to be fulfilled\n */\nmodule.exports = function dispatchRequest(config) {\n  throwIfCancellationRequested(config);\n\n  // Support baseURL config\n  if (config.baseURL && !isAbsoluteURL(config.url)) {\n    config.url = combineURLs(config.baseURL, config.url);\n  }\n\n  // Ensure headers exist\n  config.headers = config.headers || {};\n\n  // Transform request data\n  config.data = transformData(\n    config.data,\n    config.headers,\n    config.transformRequest\n  );\n\n  // Flatten headers\n  config.headers = utils.merge(\n    config.headers.common || {},\n    config.headers[config.method] || {},\n    config.headers || {}\n  );\n\n  utils.forEach(\n    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],\n    function cleanHeaderConfig(method) {\n      delete config.headers[method];\n    }\n  );\n\n  var adapter = config.adapter || defaults.adapter;\n\n  return adapter(config).then(function onAdapterResolution(response) {\n    throwIfCancellationRequested(config);\n\n    // Transform response data\n    response.data = transformData(\n      response.data,\n      response.headers,\n      config.transformResponse\n    );\n\n    return response;\n  }, function onAdapterRejection(reason) {\n    if (!isCancel(reason)) {\n      throwIfCancellationRequested(config);\n\n      // Transform response data\n      if (reason && reason.response) {\n        reason.response.data = transformData(\n          reason.response.data,\n          reason.response.headers,\n          config.transformResponse\n        );\n      }\n    }\n\n    return Promise.reject(reason);\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/dispatchRequest.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Update an Error with the specified config, error code, and response.\n *\n * @param {Error} error The error to update.\n * @param {Object} config The config.\n * @param {string} [code] The error code (for example, 'ECONNABORTED').\n * @param {Object} [request] The request.\n * @param {Object} [response] The response.\n * @returns {Error} The error.\n */\nmodule.exports = function enhanceError(error, config, code, request, response) {\n  error.config = config;\n  if (code) {\n    error.code = code;\n  }\n\n  error.request = request;\n  error.response = response;\n  error.isAxiosError = true;\n\n  error.toJSON = function() {\n    return {\n      // Standard\n      message: this.message,\n      name: this.name,\n      // Microsoft\n      description: this.description,\n      number: this.number,\n      // Mozilla\n      fileName: this.fileName,\n      lineNumber: this.lineNumber,\n      columnNumber: this.columnNumber,\n      stack: this.stack,\n      // Axios\n      config: this.config,\n      code: this.code\n    };\n  };\n  return error;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/enhanceError.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ../utils */ \"./node_modules/axios/lib/utils.js\");\n\n/**\n * Config-specific merge-function which creates a new config-object\n * by merging two configuration objects together.\n *\n * @param {Object} config1\n * @param {Object} config2\n * @returns {Object} New object resulting from merging config2 to config1\n */\nmodule.exports = function mergeConfig(config1, config2) {\n  // eslint-disable-next-line no-param-reassign\n  config2 = config2 || {};\n  var config = {};\n\n  utils.forEach(['url', 'method', 'params', 'data'], function valueFromConfig2(prop) {\n    if (typeof config2[prop] !== 'undefined') {\n      config[prop] = config2[prop];\n    }\n  });\n\n  utils.forEach(['headers', 'auth', 'proxy'], function mergeDeepProperties(prop) {\n    if (utils.isObject(config2[prop])) {\n      config[prop] = utils.deepMerge(config1[prop], config2[prop]);\n    } else if (typeof config2[prop] !== 'undefined') {\n      config[prop] = config2[prop];\n    } else if (utils.isObject(config1[prop])) {\n      config[prop] = utils.deepMerge(config1[prop]);\n    } else if (typeof config1[prop] !== 'undefined') {\n      config[prop] = config1[prop];\n    }\n  });\n\n  utils.forEach([\n    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',\n    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',\n    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength',\n    'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken',\n    'socketPath'\n  ], function defaultToConfig2(prop) {\n    if (typeof config2[prop] !== 'undefined') {\n      config[prop] = config2[prop];\n    } else if (typeof config1[prop] !== 'undefined') {\n      config[prop] = config1[prop];\n    }\n  });\n\n  return config;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/mergeConfig.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar createError = __webpack_require__(/*! ./createError */ \"./node_modules/axios/lib/core/createError.js\");\n\n/**\n * Resolve or reject a Promise based on response status.\n *\n * @param {Function} resolve A function that resolves the promise.\n * @param {Function} reject A function that rejects the promise.\n * @param {object} response The response.\n */\nmodule.exports = function settle(resolve, reject, response) {\n  var validateStatus = response.config.validateStatus;\n  if (!validateStatus || validateStatus(response.status)) {\n    resolve(response);\n  } else {\n    reject(createError(\n      'Request failed with status code ' + response.status,\n      response.config,\n      null,\n      response.request,\n      response\n    ));\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/settle.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\n/**\n * Transform the data for a request or a response\n *\n * @param {Object|String} data The data to be transformed\n * @param {Array} headers The headers for the request or response\n * @param {Array|Function} fns A single function or Array of functions\n * @returns {*} The resulting transformed data\n */\nmodule.exports = function transformData(data, headers, fns) {\n  /*eslint no-param-reassign:0*/\n  utils.forEach(fns, function transform(fn) {\n    data = fn(data, headers);\n  });\n\n  return data;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/transformData.js?");

/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {\n\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/axios/lib/utils.js\");\nvar normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ \"./node_modules/axios/lib/helpers/normalizeHeaderName.js\");\n\nvar DEFAULT_CONTENT_TYPE = {\n  'Content-Type': 'application/x-www-form-urlencoded'\n};\n\nfunction setContentTypeIfUnset(headers, value) {\n  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {\n    headers['Content-Type'] = value;\n  }\n}\n\nfunction getDefaultAdapter() {\n  var adapter;\n  // Only Node.JS has a process variable that is of [[Class]] process\n  if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {\n    // For node use HTTP adapter\n    adapter = __webpack_require__(/*! ./adapters/http */ \"./node_modules/axios/lib/adapters/xhr.js\");\n  } else if (typeof XMLHttpRequest !== 'undefined') {\n    // For browsers use XHR adapter\n    adapter = __webpack_require__(/*! ./adapters/xhr */ \"./node_modules/axios/lib/adapters/xhr.js\");\n  }\n  return adapter;\n}\n\nvar defaults = {\n  adapter: getDefaultAdapter(),\n\n  transformRequest: [function transformRequest(data, headers) {\n    normalizeHeaderName(headers, 'Accept');\n    normalizeHeaderName(headers, 'Content-Type');\n    if (utils.isFormData(data) ||\n      utils.isArrayBuffer(data) ||\n      utils.isBuffer(data) ||\n      utils.isStream(data) ||\n      utils.isFile(data) ||\n      utils.isBlob(data)\n    ) {\n      return data;\n    }\n    if (utils.isArrayBufferView(data)) {\n      return data.buffer;\n    }\n    if (utils.isURLSearchParams(data)) {\n      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');\n      return data.toString();\n    }\n    if (utils.isObject(data)) {\n      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');\n      return JSON.stringify(data);\n    }\n    return data;\n  }],\n\n  transformResponse: [function transformResponse(data) {\n    /*eslint no-param-reassign:0*/\n    if (typeof data === 'string') {\n      try {\n        data = JSON.parse(data);\n      } catch (e) { /* Ignore */ }\n    }\n    return data;\n  }],\n\n  /**\n   * A timeout in milliseconds to abort a request. If set to 0 (default) a\n   * timeout is not created.\n   */\n  timeout: 0,\n\n  xsrfCookieName: 'XSRF-TOKEN',\n  xsrfHeaderName: 'X-XSRF-TOKEN',\n\n  maxContentLength: -1,\n\n  validateStatus: function validateStatus(status) {\n    return status >= 200 && status < 300;\n  }\n};\n\ndefaults.headers = {\n  common: {\n    'Accept': 'application/json, text/plain, */*'\n  }\n};\n\nutils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {\n  defaults.headers[method] = {};\n});\n\nutils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {\n  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);\n});\n\nmodule.exports = defaults;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../AppData/Roaming/npm/node_modules/webpack/node_modules/process/browser.js */ \"../../AppData/Roaming/npm/node_modules/webpack/node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./node_modules/axios/lib/defaults.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function bind(fn, thisArg) {\n  return function wrap() {\n    var args = new Array(arguments.length);\n    for (var i = 0; i < args.length; i++) {\n      args[i] = arguments[i];\n    }\n    return fn.apply(thisArg, args);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/bind.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nfunction encode(val) {\n  return encodeURIComponent(val).\n    replace(/%40/gi, '@').\n    replace(/%3A/gi, ':').\n    replace(/%24/g, '$').\n    replace(/%2C/gi, ',').\n    replace(/%20/g, '+').\n    replace(/%5B/gi, '[').\n    replace(/%5D/gi, ']');\n}\n\n/**\n * Build a URL by appending params to the end\n *\n * @param {string} url The base of the url (e.g., http://www.google.com)\n * @param {object} [params] The params to be appended\n * @returns {string} The formatted url\n */\nmodule.exports = function buildURL(url, params, paramsSerializer) {\n  /*eslint no-param-reassign:0*/\n  if (!params) {\n    return url;\n  }\n\n  var serializedParams;\n  if (paramsSerializer) {\n    serializedParams = paramsSerializer(params);\n  } else if (utils.isURLSearchParams(params)) {\n    serializedParams = params.toString();\n  } else {\n    var parts = [];\n\n    utils.forEach(params, function serialize(val, key) {\n      if (val === null || typeof val === 'undefined') {\n        return;\n      }\n\n      if (utils.isArray(val)) {\n        key = key + '[]';\n      } else {\n        val = [val];\n      }\n\n      utils.forEach(val, function parseValue(v) {\n        if (utils.isDate(v)) {\n          v = v.toISOString();\n        } else if (utils.isObject(v)) {\n          v = JSON.stringify(v);\n        }\n        parts.push(encode(key) + '=' + encode(v));\n      });\n    });\n\n    serializedParams = parts.join('&');\n  }\n\n  if (serializedParams) {\n    var hashmarkIndex = url.indexOf('#');\n    if (hashmarkIndex !== -1) {\n      url = url.slice(0, hashmarkIndex);\n    }\n\n    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;\n  }\n\n  return url;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/buildURL.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Creates a new URL by combining the specified URLs\n *\n * @param {string} baseURL The base URL\n * @param {string} relativeURL The relative URL\n * @returns {string} The combined URL\n */\nmodule.exports = function combineURLs(baseURL, relativeURL) {\n  return relativeURL\n    ? baseURL.replace(/\\/+$/, '') + '/' + relativeURL.replace(/^\\/+/, '')\n    : baseURL;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/combineURLs.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nmodule.exports = (\n  utils.isStandardBrowserEnv() ?\n\n  // Standard browser envs support document.cookie\n    (function standardBrowserEnv() {\n      return {\n        write: function write(name, value, expires, path, domain, secure) {\n          var cookie = [];\n          cookie.push(name + '=' + encodeURIComponent(value));\n\n          if (utils.isNumber(expires)) {\n            cookie.push('expires=' + new Date(expires).toGMTString());\n          }\n\n          if (utils.isString(path)) {\n            cookie.push('path=' + path);\n          }\n\n          if (utils.isString(domain)) {\n            cookie.push('domain=' + domain);\n          }\n\n          if (secure === true) {\n            cookie.push('secure');\n          }\n\n          document.cookie = cookie.join('; ');\n        },\n\n        read: function read(name) {\n          var match = document.cookie.match(new RegExp('(^|;\\\\s*)(' + name + ')=([^;]*)'));\n          return (match ? decodeURIComponent(match[3]) : null);\n        },\n\n        remove: function remove(name) {\n          this.write(name, '', Date.now() - 86400000);\n        }\n      };\n    })() :\n\n  // Non standard browser env (web workers, react-native) lack needed support.\n    (function nonStandardBrowserEnv() {\n      return {\n        write: function write() {},\n        read: function read() { return null; },\n        remove: function remove() {}\n      };\n    })()\n);\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/cookies.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Determines whether the specified URL is absolute\n *\n * @param {string} url The URL to test\n * @returns {boolean} True if the specified URL is absolute, otherwise false\n */\nmodule.exports = function isAbsoluteURL(url) {\n  // A URL is considered absolute if it begins with \"<scheme>://\" or \"//\" (protocol-relative URL).\n  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed\n  // by any combination of letters, digits, plus, period, or hyphen.\n  return /^([a-z][a-z\\d\\+\\-\\.]*:)?\\/\\//i.test(url);\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/isAbsoluteURL.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nmodule.exports = (\n  utils.isStandardBrowserEnv() ?\n\n  // Standard browser envs have full support of the APIs needed to test\n  // whether the request URL is of the same origin as current location.\n    (function standardBrowserEnv() {\n      var msie = /(msie|trident)/i.test(navigator.userAgent);\n      var urlParsingNode = document.createElement('a');\n      var originURL;\n\n      /**\n    * Parse a URL to discover it's components\n    *\n    * @param {String} url The URL to be parsed\n    * @returns {Object}\n    */\n      function resolveURL(url) {\n        var href = url;\n\n        if (msie) {\n        // IE needs attribute set twice to normalize properties\n          urlParsingNode.setAttribute('href', href);\n          href = urlParsingNode.href;\n        }\n\n        urlParsingNode.setAttribute('href', href);\n\n        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils\n        return {\n          href: urlParsingNode.href,\n          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',\n          host: urlParsingNode.host,\n          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\\?/, '') : '',\n          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',\n          hostname: urlParsingNode.hostname,\n          port: urlParsingNode.port,\n          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?\n            urlParsingNode.pathname :\n            '/' + urlParsingNode.pathname\n        };\n      }\n\n      originURL = resolveURL(window.location.href);\n\n      /**\n    * Determine if a URL shares the same origin as the current location\n    *\n    * @param {String} requestURL The URL to test\n    * @returns {boolean} True if URL shares the same origin, otherwise false\n    */\n      return function isURLSameOrigin(requestURL) {\n        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;\n        return (parsed.protocol === originURL.protocol &&\n            parsed.host === originURL.host);\n      };\n    })() :\n\n  // Non standard browser envs (web workers, react-native) lack needed support.\n    (function nonStandardBrowserEnv() {\n      return function isURLSameOrigin() {\n        return true;\n      };\n    })()\n);\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/isURLSameOrigin.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ../utils */ \"./node_modules/axios/lib/utils.js\");\n\nmodule.exports = function normalizeHeaderName(headers, normalizedName) {\n  utils.forEach(headers, function processHeader(value, name) {\n    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {\n      headers[normalizedName] = value;\n      delete headers[name];\n    }\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/normalizeHeaderName.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\n// Headers whose duplicates are ignored by node\n// c.f. https://nodejs.org/api/http.html#http_message_headers\nvar ignoreDuplicateOf = [\n  'age', 'authorization', 'content-length', 'content-type', 'etag',\n  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',\n  'last-modified', 'location', 'max-forwards', 'proxy-authorization',\n  'referer', 'retry-after', 'user-agent'\n];\n\n/**\n * Parse headers into an object\n *\n * ```\n * Date: Wed, 27 Aug 2014 08:58:49 GMT\n * Content-Type: application/json\n * Connection: keep-alive\n * Transfer-Encoding: chunked\n * ```\n *\n * @param {String} headers Headers needing to be parsed\n * @returns {Object} Headers parsed into an object\n */\nmodule.exports = function parseHeaders(headers) {\n  var parsed = {};\n  var key;\n  var val;\n  var i;\n\n  if (!headers) { return parsed; }\n\n  utils.forEach(headers.split('\\n'), function parser(line) {\n    i = line.indexOf(':');\n    key = utils.trim(line.substr(0, i)).toLowerCase();\n    val = utils.trim(line.substr(i + 1));\n\n    if (key) {\n      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {\n        return;\n      }\n      if (key === 'set-cookie') {\n        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);\n      } else {\n        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;\n      }\n    }\n  });\n\n  return parsed;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/parseHeaders.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Syntactic sugar for invoking a function and expanding an array for arguments.\n *\n * Common use case would be to use `Function.prototype.apply`.\n *\n *  ```js\n *  function f(x, y, z) {}\n *  var args = [1, 2, 3];\n *  f.apply(null, args);\n *  ```\n *\n * With `spread` this example can be re-written.\n *\n *  ```js\n *  spread(function(x, y, z) {})([1, 2, 3]);\n *  ```\n *\n * @param {Function} callback\n * @returns {Function}\n */\nmodule.exports = function spread(callback) {\n  return function wrap(arr) {\n    return callback.apply(null, arr);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/spread.js?");

/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar bind = __webpack_require__(/*! ./helpers/bind */ \"./node_modules/axios/lib/helpers/bind.js\");\nvar isBuffer = __webpack_require__(/*! is-buffer */ \"./node_modules/is-buffer/index.js\");\n\n/*global toString:true*/\n\n// utils is a library of generic helper functions non-specific to axios\n\nvar toString = Object.prototype.toString;\n\n/**\n * Determine if a value is an Array\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an Array, otherwise false\n */\nfunction isArray(val) {\n  return toString.call(val) === '[object Array]';\n}\n\n/**\n * Determine if a value is an ArrayBuffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an ArrayBuffer, otherwise false\n */\nfunction isArrayBuffer(val) {\n  return toString.call(val) === '[object ArrayBuffer]';\n}\n\n/**\n * Determine if a value is a FormData\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an FormData, otherwise false\n */\nfunction isFormData(val) {\n  return (typeof FormData !== 'undefined') && (val instanceof FormData);\n}\n\n/**\n * Determine if a value is a view on an ArrayBuffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false\n */\nfunction isArrayBufferView(val) {\n  var result;\n  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {\n    result = ArrayBuffer.isView(val);\n  } else {\n    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);\n  }\n  return result;\n}\n\n/**\n * Determine if a value is a String\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a String, otherwise false\n */\nfunction isString(val) {\n  return typeof val === 'string';\n}\n\n/**\n * Determine if a value is a Number\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Number, otherwise false\n */\nfunction isNumber(val) {\n  return typeof val === 'number';\n}\n\n/**\n * Determine if a value is undefined\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if the value is undefined, otherwise false\n */\nfunction isUndefined(val) {\n  return typeof val === 'undefined';\n}\n\n/**\n * Determine if a value is an Object\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an Object, otherwise false\n */\nfunction isObject(val) {\n  return val !== null && typeof val === 'object';\n}\n\n/**\n * Determine if a value is a Date\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Date, otherwise false\n */\nfunction isDate(val) {\n  return toString.call(val) === '[object Date]';\n}\n\n/**\n * Determine if a value is a File\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a File, otherwise false\n */\nfunction isFile(val) {\n  return toString.call(val) === '[object File]';\n}\n\n/**\n * Determine if a value is a Blob\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Blob, otherwise false\n */\nfunction isBlob(val) {\n  return toString.call(val) === '[object Blob]';\n}\n\n/**\n * Determine if a value is a Function\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Function, otherwise false\n */\nfunction isFunction(val) {\n  return toString.call(val) === '[object Function]';\n}\n\n/**\n * Determine if a value is a Stream\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Stream, otherwise false\n */\nfunction isStream(val) {\n  return isObject(val) && isFunction(val.pipe);\n}\n\n/**\n * Determine if a value is a URLSearchParams object\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a URLSearchParams object, otherwise false\n */\nfunction isURLSearchParams(val) {\n  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;\n}\n\n/**\n * Trim excess whitespace off the beginning and end of a string\n *\n * @param {String} str The String to trim\n * @returns {String} The String freed of excess whitespace\n */\nfunction trim(str) {\n  return str.replace(/^\\s*/, '').replace(/\\s*$/, '');\n}\n\n/**\n * Determine if we're running in a standard browser environment\n *\n * This allows axios to run in a web worker, and react-native.\n * Both environments support XMLHttpRequest, but not fully standard globals.\n *\n * web workers:\n *  typeof window -> undefined\n *  typeof document -> undefined\n *\n * react-native:\n *  navigator.product -> 'ReactNative'\n * nativescript\n *  navigator.product -> 'NativeScript' or 'NS'\n */\nfunction isStandardBrowserEnv() {\n  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||\n                                           navigator.product === 'NativeScript' ||\n                                           navigator.product === 'NS')) {\n    return false;\n  }\n  return (\n    typeof window !== 'undefined' &&\n    typeof document !== 'undefined'\n  );\n}\n\n/**\n * Iterate over an Array or an Object invoking a function for each item.\n *\n * If `obj` is an Array callback will be called passing\n * the value, index, and complete array for each item.\n *\n * If 'obj' is an Object callback will be called passing\n * the value, key, and complete object for each property.\n *\n * @param {Object|Array} obj The object to iterate\n * @param {Function} fn The callback to invoke for each item\n */\nfunction forEach(obj, fn) {\n  // Don't bother if no value provided\n  if (obj === null || typeof obj === 'undefined') {\n    return;\n  }\n\n  // Force an array if not already something iterable\n  if (typeof obj !== 'object') {\n    /*eslint no-param-reassign:0*/\n    obj = [obj];\n  }\n\n  if (isArray(obj)) {\n    // Iterate over array values\n    for (var i = 0, l = obj.length; i < l; i++) {\n      fn.call(null, obj[i], i, obj);\n    }\n  } else {\n    // Iterate over object keys\n    for (var key in obj) {\n      if (Object.prototype.hasOwnProperty.call(obj, key)) {\n        fn.call(null, obj[key], key, obj);\n      }\n    }\n  }\n}\n\n/**\n * Accepts varargs expecting each argument to be an object, then\n * immutably merges the properties of each object and returns result.\n *\n * When multiple objects contain the same key the later object in\n * the arguments list will take precedence.\n *\n * Example:\n *\n * ```js\n * var result = merge({foo: 123}, {foo: 456});\n * console.log(result.foo); // outputs 456\n * ```\n *\n * @param {Object} obj1 Object to merge\n * @returns {Object} Result of all merge properties\n */\nfunction merge(/* obj1, obj2, obj3, ... */) {\n  var result = {};\n  function assignValue(val, key) {\n    if (typeof result[key] === 'object' && typeof val === 'object') {\n      result[key] = merge(result[key], val);\n    } else {\n      result[key] = val;\n    }\n  }\n\n  for (var i = 0, l = arguments.length; i < l; i++) {\n    forEach(arguments[i], assignValue);\n  }\n  return result;\n}\n\n/**\n * Function equal to merge with the difference being that no reference\n * to original objects is kept.\n *\n * @see merge\n * @param {Object} obj1 Object to merge\n * @returns {Object} Result of all merge properties\n */\nfunction deepMerge(/* obj1, obj2, obj3, ... */) {\n  var result = {};\n  function assignValue(val, key) {\n    if (typeof result[key] === 'object' && typeof val === 'object') {\n      result[key] = deepMerge(result[key], val);\n    } else if (typeof val === 'object') {\n      result[key] = deepMerge({}, val);\n    } else {\n      result[key] = val;\n    }\n  }\n\n  for (var i = 0, l = arguments.length; i < l; i++) {\n    forEach(arguments[i], assignValue);\n  }\n  return result;\n}\n\n/**\n * Extends object a by mutably adding to it the properties of object b.\n *\n * @param {Object} a The object to be extended\n * @param {Object} b The object to copy properties from\n * @param {Object} thisArg The object to bind function to\n * @return {Object} The resulting value of object a\n */\nfunction extend(a, b, thisArg) {\n  forEach(b, function assignValue(val, key) {\n    if (thisArg && typeof val === 'function') {\n      a[key] = bind(val, thisArg);\n    } else {\n      a[key] = val;\n    }\n  });\n  return a;\n}\n\nmodule.exports = {\n  isArray: isArray,\n  isArrayBuffer: isArrayBuffer,\n  isBuffer: isBuffer,\n  isFormData: isFormData,\n  isArrayBufferView: isArrayBufferView,\n  isString: isString,\n  isNumber: isNumber,\n  isObject: isObject,\n  isUndefined: isUndefined,\n  isDate: isDate,\n  isFile: isFile,\n  isBlob: isBlob,\n  isFunction: isFunction,\n  isStream: isStream,\n  isURLSearchParams: isURLSearchParams,\n  isStandardBrowserEnv: isStandardBrowserEnv,\n  forEach: forEach,\n  merge: merge,\n  deepMerge: deepMerge,\n  extend: extend,\n  trim: trim\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/utils.js?");

/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*!\n * Determine if an object is a Buffer\n *\n * @author   Feross Aboukhadijeh <https://feross.org>\n * @license  MIT\n */\n\nmodule.exports = function isBuffer (obj) {\n  return obj != null && obj.constructor != null &&\n    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)\n}\n\n\n//# sourceURL=webpack:///./node_modules/is-buffer/index.js?");

/***/ }),

/***/ "./node_modules/validator/index.js":
/*!*****************************************!*\
  !*** ./node_modules/validator/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _toDate = _interopRequireDefault(__webpack_require__(/*! ./lib/toDate */ \"./node_modules/validator/lib/toDate.js\"));\n\nvar _toFloat = _interopRequireDefault(__webpack_require__(/*! ./lib/toFloat */ \"./node_modules/validator/lib/toFloat.js\"));\n\nvar _toInt = _interopRequireDefault(__webpack_require__(/*! ./lib/toInt */ \"./node_modules/validator/lib/toInt.js\"));\n\nvar _toBoolean = _interopRequireDefault(__webpack_require__(/*! ./lib/toBoolean */ \"./node_modules/validator/lib/toBoolean.js\"));\n\nvar _equals = _interopRequireDefault(__webpack_require__(/*! ./lib/equals */ \"./node_modules/validator/lib/equals.js\"));\n\nvar _contains = _interopRequireDefault(__webpack_require__(/*! ./lib/contains */ \"./node_modules/validator/lib/contains.js\"));\n\nvar _matches = _interopRequireDefault(__webpack_require__(/*! ./lib/matches */ \"./node_modules/validator/lib/matches.js\"));\n\nvar _isEmail = _interopRequireDefault(__webpack_require__(/*! ./lib/isEmail */ \"./node_modules/validator/lib/isEmail.js\"));\n\nvar _isURL = _interopRequireDefault(__webpack_require__(/*! ./lib/isURL */ \"./node_modules/validator/lib/isURL.js\"));\n\nvar _isMACAddress = _interopRequireDefault(__webpack_require__(/*! ./lib/isMACAddress */ \"./node_modules/validator/lib/isMACAddress.js\"));\n\nvar _isIP = _interopRequireDefault(__webpack_require__(/*! ./lib/isIP */ \"./node_modules/validator/lib/isIP.js\"));\n\nvar _isIPRange = _interopRequireDefault(__webpack_require__(/*! ./lib/isIPRange */ \"./node_modules/validator/lib/isIPRange.js\"));\n\nvar _isFQDN = _interopRequireDefault(__webpack_require__(/*! ./lib/isFQDN */ \"./node_modules/validator/lib/isFQDN.js\"));\n\nvar _isBoolean = _interopRequireDefault(__webpack_require__(/*! ./lib/isBoolean */ \"./node_modules/validator/lib/isBoolean.js\"));\n\nvar _isAlpha = _interopRequireWildcard(__webpack_require__(/*! ./lib/isAlpha */ \"./node_modules/validator/lib/isAlpha.js\"));\n\nvar _isAlphanumeric = _interopRequireWildcard(__webpack_require__(/*! ./lib/isAlphanumeric */ \"./node_modules/validator/lib/isAlphanumeric.js\"));\n\nvar _isNumeric = _interopRequireDefault(__webpack_require__(/*! ./lib/isNumeric */ \"./node_modules/validator/lib/isNumeric.js\"));\n\nvar _isPort = _interopRequireDefault(__webpack_require__(/*! ./lib/isPort */ \"./node_modules/validator/lib/isPort.js\"));\n\nvar _isLowercase = _interopRequireDefault(__webpack_require__(/*! ./lib/isLowercase */ \"./node_modules/validator/lib/isLowercase.js\"));\n\nvar _isUppercase = _interopRequireDefault(__webpack_require__(/*! ./lib/isUppercase */ \"./node_modules/validator/lib/isUppercase.js\"));\n\nvar _isAscii = _interopRequireDefault(__webpack_require__(/*! ./lib/isAscii */ \"./node_modules/validator/lib/isAscii.js\"));\n\nvar _isFullWidth = _interopRequireDefault(__webpack_require__(/*! ./lib/isFullWidth */ \"./node_modules/validator/lib/isFullWidth.js\"));\n\nvar _isHalfWidth = _interopRequireDefault(__webpack_require__(/*! ./lib/isHalfWidth */ \"./node_modules/validator/lib/isHalfWidth.js\"));\n\nvar _isVariableWidth = _interopRequireDefault(__webpack_require__(/*! ./lib/isVariableWidth */ \"./node_modules/validator/lib/isVariableWidth.js\"));\n\nvar _isMultibyte = _interopRequireDefault(__webpack_require__(/*! ./lib/isMultibyte */ \"./node_modules/validator/lib/isMultibyte.js\"));\n\nvar _isSurrogatePair = _interopRequireDefault(__webpack_require__(/*! ./lib/isSurrogatePair */ \"./node_modules/validator/lib/isSurrogatePair.js\"));\n\nvar _isInt = _interopRequireDefault(__webpack_require__(/*! ./lib/isInt */ \"./node_modules/validator/lib/isInt.js\"));\n\nvar _isFloat = _interopRequireWildcard(__webpack_require__(/*! ./lib/isFloat */ \"./node_modules/validator/lib/isFloat.js\"));\n\nvar _isDecimal = _interopRequireDefault(__webpack_require__(/*! ./lib/isDecimal */ \"./node_modules/validator/lib/isDecimal.js\"));\n\nvar _isHexadecimal = _interopRequireDefault(__webpack_require__(/*! ./lib/isHexadecimal */ \"./node_modules/validator/lib/isHexadecimal.js\"));\n\nvar _isDivisibleBy = _interopRequireDefault(__webpack_require__(/*! ./lib/isDivisibleBy */ \"./node_modules/validator/lib/isDivisibleBy.js\"));\n\nvar _isHexColor = _interopRequireDefault(__webpack_require__(/*! ./lib/isHexColor */ \"./node_modules/validator/lib/isHexColor.js\"));\n\nvar _isISRC = _interopRequireDefault(__webpack_require__(/*! ./lib/isISRC */ \"./node_modules/validator/lib/isISRC.js\"));\n\nvar _isMD = _interopRequireDefault(__webpack_require__(/*! ./lib/isMD5 */ \"./node_modules/validator/lib/isMD5.js\"));\n\nvar _isHash = _interopRequireDefault(__webpack_require__(/*! ./lib/isHash */ \"./node_modules/validator/lib/isHash.js\"));\n\nvar _isJWT = _interopRequireDefault(__webpack_require__(/*! ./lib/isJWT */ \"./node_modules/validator/lib/isJWT.js\"));\n\nvar _isJSON = _interopRequireDefault(__webpack_require__(/*! ./lib/isJSON */ \"./node_modules/validator/lib/isJSON.js\"));\n\nvar _isEmpty = _interopRequireDefault(__webpack_require__(/*! ./lib/isEmpty */ \"./node_modules/validator/lib/isEmpty.js\"));\n\nvar _isLength = _interopRequireDefault(__webpack_require__(/*! ./lib/isLength */ \"./node_modules/validator/lib/isLength.js\"));\n\nvar _isByteLength = _interopRequireDefault(__webpack_require__(/*! ./lib/isByteLength */ \"./node_modules/validator/lib/isByteLength.js\"));\n\nvar _isUUID = _interopRequireDefault(__webpack_require__(/*! ./lib/isUUID */ \"./node_modules/validator/lib/isUUID.js\"));\n\nvar _isMongoId = _interopRequireDefault(__webpack_require__(/*! ./lib/isMongoId */ \"./node_modules/validator/lib/isMongoId.js\"));\n\nvar _isAfter = _interopRequireDefault(__webpack_require__(/*! ./lib/isAfter */ \"./node_modules/validator/lib/isAfter.js\"));\n\nvar _isBefore = _interopRequireDefault(__webpack_require__(/*! ./lib/isBefore */ \"./node_modules/validator/lib/isBefore.js\"));\n\nvar _isIn = _interopRequireDefault(__webpack_require__(/*! ./lib/isIn */ \"./node_modules/validator/lib/isIn.js\"));\n\nvar _isCreditCard = _interopRequireDefault(__webpack_require__(/*! ./lib/isCreditCard */ \"./node_modules/validator/lib/isCreditCard.js\"));\n\nvar _isIdentityCard = _interopRequireDefault(__webpack_require__(/*! ./lib/isIdentityCard */ \"./node_modules/validator/lib/isIdentityCard.js\"));\n\nvar _isISIN = _interopRequireDefault(__webpack_require__(/*! ./lib/isISIN */ \"./node_modules/validator/lib/isISIN.js\"));\n\nvar _isISBN = _interopRequireDefault(__webpack_require__(/*! ./lib/isISBN */ \"./node_modules/validator/lib/isISBN.js\"));\n\nvar _isISSN = _interopRequireDefault(__webpack_require__(/*! ./lib/isISSN */ \"./node_modules/validator/lib/isISSN.js\"));\n\nvar _isMobilePhone = _interopRequireWildcard(__webpack_require__(/*! ./lib/isMobilePhone */ \"./node_modules/validator/lib/isMobilePhone.js\"));\n\nvar _isCurrency = _interopRequireDefault(__webpack_require__(/*! ./lib/isCurrency */ \"./node_modules/validator/lib/isCurrency.js\"));\n\nvar _isISO = _interopRequireDefault(__webpack_require__(/*! ./lib/isISO8601 */ \"./node_modules/validator/lib/isISO8601.js\"));\n\nvar _isRFC = _interopRequireDefault(__webpack_require__(/*! ./lib/isRFC3339 */ \"./node_modules/validator/lib/isRFC3339.js\"));\n\nvar _isISO31661Alpha = _interopRequireDefault(__webpack_require__(/*! ./lib/isISO31661Alpha2 */ \"./node_modules/validator/lib/isISO31661Alpha2.js\"));\n\nvar _isISO31661Alpha2 = _interopRequireDefault(__webpack_require__(/*! ./lib/isISO31661Alpha3 */ \"./node_modules/validator/lib/isISO31661Alpha3.js\"));\n\nvar _isBase = _interopRequireDefault(__webpack_require__(/*! ./lib/isBase32 */ \"./node_modules/validator/lib/isBase32.js\"));\n\nvar _isBase2 = _interopRequireDefault(__webpack_require__(/*! ./lib/isBase64 */ \"./node_modules/validator/lib/isBase64.js\"));\n\nvar _isDataURI = _interopRequireDefault(__webpack_require__(/*! ./lib/isDataURI */ \"./node_modules/validator/lib/isDataURI.js\"));\n\nvar _isMagnetURI = _interopRequireDefault(__webpack_require__(/*! ./lib/isMagnetURI */ \"./node_modules/validator/lib/isMagnetURI.js\"));\n\nvar _isMimeType = _interopRequireDefault(__webpack_require__(/*! ./lib/isMimeType */ \"./node_modules/validator/lib/isMimeType.js\"));\n\nvar _isLatLong = _interopRequireDefault(__webpack_require__(/*! ./lib/isLatLong */ \"./node_modules/validator/lib/isLatLong.js\"));\n\nvar _isPostalCode = _interopRequireWildcard(__webpack_require__(/*! ./lib/isPostalCode */ \"./node_modules/validator/lib/isPostalCode.js\"));\n\nvar _ltrim = _interopRequireDefault(__webpack_require__(/*! ./lib/ltrim */ \"./node_modules/validator/lib/ltrim.js\"));\n\nvar _rtrim = _interopRequireDefault(__webpack_require__(/*! ./lib/rtrim */ \"./node_modules/validator/lib/rtrim.js\"));\n\nvar _trim = _interopRequireDefault(__webpack_require__(/*! ./lib/trim */ \"./node_modules/validator/lib/trim.js\"));\n\nvar _escape = _interopRequireDefault(__webpack_require__(/*! ./lib/escape */ \"./node_modules/validator/lib/escape.js\"));\n\nvar _unescape = _interopRequireDefault(__webpack_require__(/*! ./lib/unescape */ \"./node_modules/validator/lib/unescape.js\"));\n\nvar _stripLow = _interopRequireDefault(__webpack_require__(/*! ./lib/stripLow */ \"./node_modules/validator/lib/stripLow.js\"));\n\nvar _whitelist = _interopRequireDefault(__webpack_require__(/*! ./lib/whitelist */ \"./node_modules/validator/lib/whitelist.js\"));\n\nvar _blacklist = _interopRequireDefault(__webpack_require__(/*! ./lib/blacklist */ \"./node_modules/validator/lib/blacklist.js\"));\n\nvar _isWhitelisted = _interopRequireDefault(__webpack_require__(/*! ./lib/isWhitelisted */ \"./node_modules/validator/lib/isWhitelisted.js\"));\n\nvar _normalizeEmail = _interopRequireDefault(__webpack_require__(/*! ./lib/normalizeEmail */ \"./node_modules/validator/lib/normalizeEmail.js\"));\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar version = '11.1.0';\nvar validator = {\n  version: version,\n  toDate: _toDate.default,\n  toFloat: _toFloat.default,\n  toInt: _toInt.default,\n  toBoolean: _toBoolean.default,\n  equals: _equals.default,\n  contains: _contains.default,\n  matches: _matches.default,\n  isEmail: _isEmail.default,\n  isURL: _isURL.default,\n  isMACAddress: _isMACAddress.default,\n  isIP: _isIP.default,\n  isIPRange: _isIPRange.default,\n  isFQDN: _isFQDN.default,\n  isBoolean: _isBoolean.default,\n  isAlpha: _isAlpha.default,\n  isAlphaLocales: _isAlpha.locales,\n  isAlphanumeric: _isAlphanumeric.default,\n  isAlphanumericLocales: _isAlphanumeric.locales,\n  isNumeric: _isNumeric.default,\n  isPort: _isPort.default,\n  isLowercase: _isLowercase.default,\n  isUppercase: _isUppercase.default,\n  isAscii: _isAscii.default,\n  isFullWidth: _isFullWidth.default,\n  isHalfWidth: _isHalfWidth.default,\n  isVariableWidth: _isVariableWidth.default,\n  isMultibyte: _isMultibyte.default,\n  isSurrogatePair: _isSurrogatePair.default,\n  isInt: _isInt.default,\n  isFloat: _isFloat.default,\n  isFloatLocales: _isFloat.locales,\n  isDecimal: _isDecimal.default,\n  isHexadecimal: _isHexadecimal.default,\n  isDivisibleBy: _isDivisibleBy.default,\n  isHexColor: _isHexColor.default,\n  isISRC: _isISRC.default,\n  isMD5: _isMD.default,\n  isHash: _isHash.default,\n  isJWT: _isJWT.default,\n  isJSON: _isJSON.default,\n  isEmpty: _isEmpty.default,\n  isLength: _isLength.default,\n  isByteLength: _isByteLength.default,\n  isUUID: _isUUID.default,\n  isMongoId: _isMongoId.default,\n  isAfter: _isAfter.default,\n  isBefore: _isBefore.default,\n  isIn: _isIn.default,\n  isCreditCard: _isCreditCard.default,\n  isIdentityCard: _isIdentityCard.default,\n  isISIN: _isISIN.default,\n  isISBN: _isISBN.default,\n  isISSN: _isISSN.default,\n  isMobilePhone: _isMobilePhone.default,\n  isMobilePhoneLocales: _isMobilePhone.locales,\n  isPostalCode: _isPostalCode.default,\n  isPostalCodeLocales: _isPostalCode.locales,\n  isCurrency: _isCurrency.default,\n  isISO8601: _isISO.default,\n  isRFC3339: _isRFC.default,\n  isISO31661Alpha2: _isISO31661Alpha.default,\n  isISO31661Alpha3: _isISO31661Alpha2.default,\n  isBase32: _isBase.default,\n  isBase64: _isBase2.default,\n  isDataURI: _isDataURI.default,\n  isMagnetURI: _isMagnetURI.default,\n  isMimeType: _isMimeType.default,\n  isLatLong: _isLatLong.default,\n  ltrim: _ltrim.default,\n  rtrim: _rtrim.default,\n  trim: _trim.default,\n  escape: _escape.default,\n  unescape: _unescape.default,\n  stripLow: _stripLow.default,\n  whitelist: _whitelist.default,\n  blacklist: _blacklist.default,\n  isWhitelisted: _isWhitelisted.default,\n  normalizeEmail: _normalizeEmail.default,\n  toString: toString\n};\nvar _default = validator;\nexports.default = _default;\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/index.js?");

/***/ }),

/***/ "./node_modules/validator/lib/alpha.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/alpha.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.commaDecimal = exports.dotDecimal = exports.arabicLocales = exports.englishLocales = exports.decimal = exports.alphanumeric = exports.alpha = void 0;\nvar alpha = {\n  'en-US': /^[A-Z]+$/i,\n  'bg-BG': /^[А-Я]+$/i,\n  'cs-CZ': /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,\n  'da-DK': /^[A-ZÆØÅ]+$/i,\n  'de-DE': /^[A-ZÄÖÜß]+$/i,\n  'el-GR': /^[Α-ω]+$/i,\n  'es-ES': /^[A-ZÁÉÍÑÓÚÜ]+$/i,\n  'fr-FR': /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,\n  'it-IT': /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,\n  'nb-NO': /^[A-ZÆØÅ]+$/i,\n  'nl-NL': /^[A-ZÁÉËÏÓÖÜÚ]+$/i,\n  'nn-NO': /^[A-ZÆØÅ]+$/i,\n  'hu-HU': /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,\n  'pl-PL': /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,\n  'pt-PT': /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,\n  'ru-RU': /^[А-ЯЁ]+$/i,\n  'sl-SI': /^[A-ZČĆĐŠŽ]+$/i,\n  'sk-SK': /^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,\n  'sr-RS@latin': /^[A-ZČĆŽŠĐ]+$/i,\n  'sr-RS': /^[А-ЯЂЈЉЊЋЏ]+$/i,\n  'sv-SE': /^[A-ZÅÄÖ]+$/i,\n  'tr-TR': /^[A-ZÇĞİıÖŞÜ]+$/i,\n  'uk-UA': /^[А-ЩЬЮЯЄIЇҐі]+$/i,\n  'ku-IQ': /^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,\n  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/\n};\nexports.alpha = alpha;\nvar alphanumeric = {\n  'en-US': /^[0-9A-Z]+$/i,\n  'bg-BG': /^[0-9А-Я]+$/i,\n  'cs-CZ': /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,\n  'da-DK': /^[0-9A-ZÆØÅ]+$/i,\n  'de-DE': /^[0-9A-ZÄÖÜß]+$/i,\n  'el-GR': /^[0-9Α-ω]+$/i,\n  'es-ES': /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,\n  'fr-FR': /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,\n  'it-IT': /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,\n  'hu-HU': /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,\n  'nb-NO': /^[0-9A-ZÆØÅ]+$/i,\n  'nl-NL': /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,\n  'nn-NO': /^[0-9A-ZÆØÅ]+$/i,\n  'pl-PL': /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,\n  'pt-PT': /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,\n  'ru-RU': /^[0-9А-ЯЁ]+$/i,\n  'sl-SI': /^[0-9A-ZČĆĐŠŽ]+$/i,\n  'sk-SK': /^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,\n  'sr-RS@latin': /^[0-9A-ZČĆŽŠĐ]+$/i,\n  'sr-RS': /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,\n  'sv-SE': /^[0-9A-ZÅÄÖ]+$/i,\n  'tr-TR': /^[0-9A-ZÇĞİıÖŞÜ]+$/i,\n  'uk-UA': /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,\n  'ku-IQ': /^[٠١٢٣٤٥٦٧٨٩0-9ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,\n  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/\n};\nexports.alphanumeric = alphanumeric;\nvar decimal = {\n  'en-US': '.',\n  ar: '٫'\n};\nexports.decimal = decimal;\nvar englishLocales = ['AU', 'GB', 'HK', 'IN', 'NZ', 'ZA', 'ZM'];\nexports.englishLocales = englishLocales;\n\nfor (var locale, i = 0; i < englishLocales.length; i++) {\n  locale = \"en-\".concat(englishLocales[i]);\n  alpha[locale] = alpha['en-US'];\n  alphanumeric[locale] = alphanumeric['en-US'];\n  decimal[locale] = decimal['en-US'];\n} // Source: http://www.localeplanet.com/java/\n\n\nvar arabicLocales = ['AE', 'BH', 'DZ', 'EG', 'IQ', 'JO', 'KW', 'LB', 'LY', 'MA', 'QM', 'QA', 'SA', 'SD', 'SY', 'TN', 'YE'];\nexports.arabicLocales = arabicLocales;\n\nfor (var _locale, _i = 0; _i < arabicLocales.length; _i++) {\n  _locale = \"ar-\".concat(arabicLocales[_i]);\n  alpha[_locale] = alpha.ar;\n  alphanumeric[_locale] = alphanumeric.ar;\n  decimal[_locale] = decimal.ar;\n} // Source: https://en.wikipedia.org/wiki/Decimal_mark\n\n\nvar dotDecimal = ['ar-EG', 'ar-LB', 'ar-LY'];\nexports.dotDecimal = dotDecimal;\nvar commaDecimal = ['bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'el-GR', 'en-ZM', 'es-ES', 'fr-FR', 'it-IT', 'ku-IQ', 'hu-HU', 'nb-NO', 'nn-NO', 'nl-NL', 'pl-PL', 'pt-PT', 'ru-RU', 'sl-SI', 'sr-RS@latin', 'sr-RS', 'sv-SE', 'tr-TR', 'uk-UA'];\nexports.commaDecimal = commaDecimal;\n\nfor (var _i2 = 0; _i2 < dotDecimal.length; _i2++) {\n  decimal[dotDecimal[_i2]] = decimal['en-US'];\n}\n\nfor (var _i3 = 0; _i3 < commaDecimal.length; _i3++) {\n  decimal[commaDecimal[_i3]] = ',';\n}\n\nalpha['pt-BR'] = alpha['pt-PT'];\nalphanumeric['pt-BR'] = alphanumeric['pt-PT'];\ndecimal['pt-BR'] = decimal['pt-PT']; // see #862\n\nalpha['pl-Pl'] = alpha['pl-PL'];\nalphanumeric['pl-Pl'] = alphanumeric['pl-PL'];\ndecimal['pl-Pl'] = decimal['pl-PL'];\n\n//# sourceURL=webpack:///./node_modules/validator/lib/alpha.js?");

/***/ }),

/***/ "./node_modules/validator/lib/blacklist.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/blacklist.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = blacklist;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction blacklist(str, chars) {\n  (0, _assertString.default)(str);\n  return str.replace(new RegExp(\"[\".concat(chars, \"]+\"), 'g'), '');\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/blacklist.js?");

/***/ }),

/***/ "./node_modules/validator/lib/contains.js":
/*!************************************************!*\
  !*** ./node_modules/validator/lib/contains.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = contains;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nvar _toString = _interopRequireDefault(__webpack_require__(/*! ./util/toString */ \"./node_modules/validator/lib/util/toString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction contains(str, elem) {\n  (0, _assertString.default)(str);\n  return str.indexOf((0, _toString.default)(elem)) >= 0;\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/contains.js?");

/***/ }),

/***/ "./node_modules/validator/lib/equals.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/equals.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = equals;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction equals(str, comparison) {\n  (0, _assertString.default)(str);\n  return str === comparison;\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/equals.js?");

/***/ }),

/***/ "./node_modules/validator/lib/escape.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/escape.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = escape;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction escape(str) {\n  (0, _assertString.default)(str);\n  return str.replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/'/g, '&#x27;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\\//g, '&#x2F;').replace(/\\\\/g, '&#x5C;').replace(/`/g, '&#96;');\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/escape.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isAfter.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/isAfter.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isAfter;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nvar _toDate = _interopRequireDefault(__webpack_require__(/*! ./toDate */ \"./node_modules/validator/lib/toDate.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction isAfter(str) {\n  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());\n  (0, _assertString.default)(str);\n  var comparison = (0, _toDate.default)(date);\n  var original = (0, _toDate.default)(str);\n  return !!(original && comparison && original > comparison);\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isAfter.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isAlpha.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/isAlpha.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isAlpha;\nexports.locales = void 0;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nvar _alpha = __webpack_require__(/*! ./alpha */ \"./node_modules/validator/lib/alpha.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction isAlpha(str) {\n  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';\n  (0, _assertString.default)(str);\n\n  if (locale in _alpha.alpha) {\n    return _alpha.alpha[locale].test(str);\n  }\n\n  throw new Error(\"Invalid locale '\".concat(locale, \"'\"));\n}\n\nvar locales = Object.keys(_alpha.alpha);\nexports.locales = locales;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isAlpha.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isAlphanumeric.js":
/*!******************************************************!*\
  !*** ./node_modules/validator/lib/isAlphanumeric.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isAlphanumeric;\nexports.locales = void 0;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nvar _alpha = __webpack_require__(/*! ./alpha */ \"./node_modules/validator/lib/alpha.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction isAlphanumeric(str) {\n  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';\n  (0, _assertString.default)(str);\n\n  if (locale in _alpha.alphanumeric) {\n    return _alpha.alphanumeric[locale].test(str);\n  }\n\n  throw new Error(\"Invalid locale '\".concat(locale, \"'\"));\n}\n\nvar locales = Object.keys(_alpha.alphanumeric);\nexports.locales = locales;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isAlphanumeric.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isAscii.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/isAscii.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isAscii;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* eslint-disable no-control-regex */\nvar ascii = /^[\\x00-\\x7F]+$/;\n/* eslint-enable no-control-regex */\n\nfunction isAscii(str) {\n  (0, _assertString.default)(str);\n  return ascii.test(str);\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isAscii.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isBase32.js":
/*!************************************************!*\
  !*** ./node_modules/validator/lib/isBase32.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isBase32;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar base32 = /^[A-Z2-7]+=*$/;\n\nfunction isBase32(str) {\n  (0, _assertString.default)(str);\n  var len = str.length;\n\n  if (len > 0 && len % 8 === 0 && base32.test(str)) {\n    return true;\n  }\n\n  return false;\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isBase32.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isBase64.js":
/*!************************************************!*\
  !*** ./node_modules/validator/lib/isBase64.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isBase64;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar notBase64 = /[^A-Z0-9+\\/=]/i;\n\nfunction isBase64(str) {\n  (0, _assertString.default)(str);\n  var len = str.length;\n\n  if (!len || len % 4 !== 0 || notBase64.test(str)) {\n    return false;\n  }\n\n  var firstPaddingChar = str.indexOf('=');\n  return firstPaddingChar === -1 || firstPaddingChar === len - 1 || firstPaddingChar === len - 2 && str[len - 1] === '=';\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isBase64.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isBefore.js":
/*!************************************************!*\
  !*** ./node_modules/validator/lib/isBefore.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isBefore;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nvar _toDate = _interopRequireDefault(__webpack_require__(/*! ./toDate */ \"./node_modules/validator/lib/toDate.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction isBefore(str) {\n  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());\n  (0, _assertString.default)(str);\n  var comparison = (0, _toDate.default)(date);\n  var original = (0, _toDate.default)(str);\n  return !!(original && comparison && original < comparison);\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isBefore.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isBoolean.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/isBoolean.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isBoolean;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction isBoolean(str) {\n  (0, _assertString.default)(str);\n  return ['true', 'false', '1', '0'].indexOf(str) >= 0;\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isBoolean.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isByteLength.js":
/*!****************************************************!*\
  !*** ./node_modules/validator/lib/isByteLength.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isByteLength;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/* eslint-disable prefer-rest-params */\nfunction isByteLength(str, options) {\n  (0, _assertString.default)(str);\n  var min;\n  var max;\n\n  if (_typeof(options) === 'object') {\n    min = options.min || 0;\n    max = options.max;\n  } else {\n    // backwards compatibility: isByteLength(str, min [, max])\n    min = arguments[1];\n    max = arguments[2];\n  }\n\n  var len = encodeURI(str).split(/%..|./).length - 1;\n  return len >= min && (typeof max === 'undefined' || len <= max);\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isByteLength.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isCreditCard.js":
/*!****************************************************!*\
  !*** ./node_modules/validator/lib/isCreditCard.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isCreditCard;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* eslint-disable max-len */\nvar creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\\d{3})\\d{11}|6[27][0-9]{14})$/;\n/* eslint-enable max-len */\n\nfunction isCreditCard(str) {\n  (0, _assertString.default)(str);\n  var sanitized = str.replace(/[- ]+/g, '');\n\n  if (!creditCard.test(sanitized)) {\n    return false;\n  }\n\n  var sum = 0;\n  var digit;\n  var tmpNum;\n  var shouldDouble;\n\n  for (var i = sanitized.length - 1; i >= 0; i--) {\n    digit = sanitized.substring(i, i + 1);\n    tmpNum = parseInt(digit, 10);\n\n    if (shouldDouble) {\n      tmpNum *= 2;\n\n      if (tmpNum >= 10) {\n        sum += tmpNum % 10 + 1;\n      } else {\n        sum += tmpNum;\n      }\n    } else {\n      sum += tmpNum;\n    }\n\n    shouldDouble = !shouldDouble;\n  }\n\n  return !!(sum % 10 === 0 ? sanitized : false);\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isCreditCard.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isCurrency.js":
/*!**************************************************!*\
  !*** ./node_modules/validator/lib/isCurrency.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isCurrency;\n\nvar _merge = _interopRequireDefault(__webpack_require__(/*! ./util/merge */ \"./node_modules/validator/lib/util/merge.js\"));\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction currencyRegex(options) {\n  var decimal_digits = \"\\\\d{\".concat(options.digits_after_decimal[0], \"}\");\n  options.digits_after_decimal.forEach(function (digit, index) {\n    if (index !== 0) decimal_digits = \"\".concat(decimal_digits, \"|\\\\d{\").concat(digit, \"}\");\n  });\n  var symbol = \"(\\\\\".concat(options.symbol.replace(/\\./g, '\\\\.'), \")\").concat(options.require_symbol ? '' : '?'),\n      negative = '-?',\n      whole_dollar_amount_without_sep = '[1-9]\\\\d*',\n      whole_dollar_amount_with_sep = \"[1-9]\\\\d{0,2}(\\\\\".concat(options.thousands_separator, \"\\\\d{3})*\"),\n      valid_whole_dollar_amounts = ['0', whole_dollar_amount_without_sep, whole_dollar_amount_with_sep],\n      whole_dollar_amount = \"(\".concat(valid_whole_dollar_amounts.join('|'), \")?\"),\n      decimal_amount = \"(\\\\\".concat(options.decimal_separator, \"(\").concat(decimal_digits, \"))\").concat(options.require_decimal ? '' : '?');\n  var pattern = whole_dollar_amount + (options.allow_decimal || options.require_decimal ? decimal_amount : ''); // default is negative sign before symbol, but there are two other options (besides parens)\n\n  if (options.allow_negatives && !options.parens_for_negatives) {\n    if (options.negative_sign_after_digits) {\n      pattern += negative;\n    } else if (options.negative_sign_before_digits) {\n      pattern = negative + pattern;\n    }\n  } // South African Rand, for example, uses R 123 (space) and R-123 (no space)\n\n\n  if (options.allow_negative_sign_placeholder) {\n    pattern = \"( (?!\\\\-))?\".concat(pattern);\n  } else if (options.allow_space_after_symbol) {\n    pattern = \" ?\".concat(pattern);\n  } else if (options.allow_space_after_digits) {\n    pattern += '( (?!$))?';\n  }\n\n  if (options.symbol_after_digits) {\n    pattern += symbol;\n  } else {\n    pattern = symbol + pattern;\n  }\n\n  if (options.allow_negatives) {\n    if (options.parens_for_negatives) {\n      pattern = \"(\\\\(\".concat(pattern, \"\\\\)|\").concat(pattern, \")\");\n    } else if (!(options.negative_sign_before_digits || options.negative_sign_after_digits)) {\n      pattern = negative + pattern;\n    }\n  } // ensure there's a dollar and/or decimal amount, and that\n  // it doesn't start with a space or a negative sign followed by a space\n\n\n  return new RegExp(\"^(?!-? )(?=.*\\\\d)\".concat(pattern, \"$\"));\n}\n\nvar default_currency_options = {\n  symbol: '$',\n  require_symbol: false,\n  allow_space_after_symbol: false,\n  symbol_after_digits: false,\n  allow_negatives: true,\n  parens_for_negatives: false,\n  negative_sign_before_digits: false,\n  negative_sign_after_digits: false,\n  allow_negative_sign_placeholder: false,\n  thousands_separator: ',',\n  decimal_separator: '.',\n  allow_decimal: true,\n  require_decimal: false,\n  digits_after_decimal: [2],\n  allow_space_after_digits: false\n};\n\nfunction isCurrency(str, options) {\n  (0, _assertString.default)(str);\n  options = (0, _merge.default)(options, default_currency_options);\n  return currencyRegex(options).test(str);\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isCurrency.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isDataURI.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/isDataURI.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isDataURI;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar validMediaType = /^[a-z]+\\/[a-z0-9\\-\\+]+$/i;\nvar validAttribute = /^[a-z\\-]+=[a-z0-9\\-]+$/i;\nvar validData = /^[a-z0-9!\\$&'\\(\\)\\*\\+,;=\\-\\._~:@\\/\\?%\\s]*$/i;\n\nfunction isDataURI(str) {\n  (0, _assertString.default)(str);\n  var data = str.split(',');\n\n  if (data.length < 2) {\n    return false;\n  }\n\n  var attributes = data.shift().trim().split(';');\n  var schemeAndMediaType = attributes.shift();\n\n  if (schemeAndMediaType.substr(0, 5) !== 'data:') {\n    return false;\n  }\n\n  var mediaType = schemeAndMediaType.substr(5);\n\n  if (mediaType !== '' && !validMediaType.test(mediaType)) {\n    return false;\n  }\n\n  for (var i = 0; i < attributes.length; i++) {\n    if (i === attributes.length - 1 && attributes[i].toLowerCase() === 'base64') {// ok\n    } else if (!validAttribute.test(attributes[i])) {\n      return false;\n    }\n  }\n\n  for (var _i = 0; _i < data.length; _i++) {\n    if (!validData.test(data[_i])) {\n      return false;\n    }\n  }\n\n  return true;\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isDataURI.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isDecimal.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/isDecimal.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isDecimal;\n\nvar _merge = _interopRequireDefault(__webpack_require__(/*! ./util/merge */ \"./node_modules/validator/lib/util/merge.js\"));\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nvar _includes = _interopRequireDefault(__webpack_require__(/*! ./util/includes */ \"./node_modules/validator/lib/util/includes.js\"));\n\nvar _alpha = __webpack_require__(/*! ./alpha */ \"./node_modules/validator/lib/alpha.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction decimalRegExp(options) {\n  var regExp = new RegExp(\"^[-+]?([0-9]+)?(\\\\\".concat(_alpha.decimal[options.locale], \"[0-9]{\").concat(options.decimal_digits, \"})\").concat(options.force_decimal ? '' : '?', \"$\"));\n  return regExp;\n}\n\nvar default_decimal_options = {\n  force_decimal: false,\n  decimal_digits: '1,',\n  locale: 'en-US'\n};\nvar blacklist = ['', '-', '+'];\n\nfunction isDecimal(str, options) {\n  (0, _assertString.default)(str);\n  options = (0, _merge.default)(options, default_decimal_options);\n\n  if (options.locale in _alpha.decimal) {\n    return !(0, _includes.default)(blacklist, str.replace(/ /g, '')) && decimalRegExp(options).test(str);\n  }\n\n  throw new Error(\"Invalid locale '\".concat(options.locale, \"'\"));\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isDecimal.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isDivisibleBy.js":
/*!*****************************************************!*\
  !*** ./node_modules/validator/lib/isDivisibleBy.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isDivisibleBy;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nvar _toFloat = _interopRequireDefault(__webpack_require__(/*! ./toFloat */ \"./node_modules/validator/lib/toFloat.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction isDivisibleBy(str, num) {\n  (0, _assertString.default)(str);\n  return (0, _toFloat.default)(str) % parseInt(num, 10) === 0;\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isDivisibleBy.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isEmail.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/isEmail.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isEmail;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nvar _merge = _interopRequireDefault(__webpack_require__(/*! ./util/merge */ \"./node_modules/validator/lib/util/merge.js\"));\n\nvar _isByteLength = _interopRequireDefault(__webpack_require__(/*! ./isByteLength */ \"./node_modules/validator/lib/isByteLength.js\"));\n\nvar _isFQDN = _interopRequireDefault(__webpack_require__(/*! ./isFQDN */ \"./node_modules/validator/lib/isFQDN.js\"));\n\nvar _isIP = _interopRequireDefault(__webpack_require__(/*! ./isIP */ \"./node_modules/validator/lib/isIP.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar default_email_options = {\n  allow_display_name: false,\n  require_display_name: false,\n  allow_utf8_local_part: true,\n  require_tld: true\n};\n/* eslint-disable max-len */\n\n/* eslint-disable no-control-regex */\n\nvar splitNameAddress = /^([^\\x00-\\x1F\\x7F-\\x9F\\cX]+)<(.+)>$/i;\nvar emailUserPart = /^[a-z\\d!#\\$%&'\\*\\+\\-\\/=\\?\\^_`{\\|}~]+$/i;\nvar gmailUserPart = /^[a-z\\d]+$/;\nvar quotedEmailUser = /^([\\s\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x7f\\x21\\x23-\\x5b\\x5d-\\x7e]|(\\\\[\\x01-\\x09\\x0b\\x0c\\x0d-\\x7f]))*$/i;\nvar emailUserUtf8Part = /^[a-z\\d!#\\$%&'\\*\\+\\-\\/=\\?\\^_`{\\|}~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]+$/i;\nvar quotedEmailUserUtf8 = /^([\\s\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x7f\\x21\\x23-\\x5b\\x5d-\\x7e\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]|(\\\\[\\x01-\\x09\\x0b\\x0c\\x0d-\\x7f\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]))*$/i;\nvar defaultMaxEmailLength = 254;\n/* eslint-enable max-len */\n\n/* eslint-enable no-control-regex */\n\n/**\n * Validate display name according to the RFC2822: https://tools.ietf.org/html/rfc2822#appendix-A.1.2\n * @param {String} display_name\n */\n\nfunction validateDisplayName(display_name) {\n  var trim_quotes = display_name.match(/^\"(.+)\"$/i);\n  var display_name_without_quotes = trim_quotes ? trim_quotes[1] : display_name; // display name with only spaces is not valid\n\n  if (!display_name_without_quotes.trim()) {\n    return false;\n  } // check whether display name contains illegal character\n\n\n  var contains_illegal = /[\\.\";<>]/.test(display_name_without_quotes);\n\n  if (contains_illegal) {\n    // if contains illegal characters,\n    // must to be enclosed in double-quotes, otherwise it's not a valid display name\n    if (!trim_quotes) {\n      return false;\n    } // the quotes in display name must start with character symbol \\\n\n\n    var all_start_with_back_slash = display_name_without_quotes.split('\"').length === display_name_without_quotes.split('\\\\\"').length;\n\n    if (!all_start_with_back_slash) {\n      return false;\n    }\n  }\n\n  return true;\n}\n\nfunction isEmail(str, options) {\n  (0, _assertString.default)(str);\n  options = (0, _merge.default)(options, default_email_options);\n\n  if (options.require_display_name || options.allow_display_name) {\n    var display_email = str.match(splitNameAddress);\n\n    if (display_email) {\n      var display_name;\n\n      var _display_email = _slicedToArray(display_email, 3);\n\n      display_name = _display_email[1];\n      str = _display_email[2];\n\n      // sometimes need to trim the last space to get the display name\n      // because there may be a space between display name and email address\n      // eg. myname <address@gmail.com>\n      // the display name is `myname` instead of `myname `, so need to trim the last space\n      if (display_name.endsWith(' ')) {\n        display_name = display_name.substr(0, display_name.length - 1);\n      }\n\n      if (!validateDisplayName(display_name)) {\n        return false;\n      }\n    } else if (options.require_display_name) {\n      return false;\n    }\n  }\n\n  if (!options.ignore_max_length && str.length > defaultMaxEmailLength) {\n    return false;\n  }\n\n  var parts = str.split('@');\n  var domain = parts.pop();\n  var user = parts.join('@');\n  var lower_domain = domain.toLowerCase();\n\n  if (options.domain_specific_validation && (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com')) {\n    /*\n      Previously we removed dots for gmail addresses before validating.\n      This was removed because it allows `multiple..dots@gmail.com`\n      to be reported as valid, but it is not.\n      Gmail only normalizes single dots, removing them from here is pointless,\n      should be done in normalizeEmail\n    */\n    user = user.toLowerCase(); // Removing sub-address from username before gmail validation\n\n    var username = user.split('+')[0]; // Dots are not included in gmail length restriction\n\n    if (!(0, _isByteLength.default)(username.replace('.', ''), {\n      min: 6,\n      max: 30\n    })) {\n      return false;\n    }\n\n    var _user_parts = username.split('.');\n\n    for (var i = 0; i < _user_parts.length; i++) {\n      if (!gmailUserPart.test(_user_parts[i])) {\n        return false;\n      }\n    }\n  }\n\n  if (!(0, _isByteLength.default)(user, {\n    max: 64\n  }) || !(0, _isByteLength.default)(domain, {\n    max: 254\n  })) {\n    return false;\n  }\n\n  if (!(0, _isFQDN.default)(domain, {\n    require_tld: options.require_tld\n  })) {\n    if (!options.allow_ip_domain) {\n      return false;\n    }\n\n    if (!(0, _isIP.default)(domain)) {\n      if (!domain.startsWith('[') || !domain.endsWith(']')) {\n        return false;\n      }\n\n      var noBracketdomain = domain.substr(1, domain.length - 2);\n\n      if (noBracketdomain.length === 0 || !(0, _isIP.default)(noBracketdomain)) {\n        return false;\n      }\n    }\n  }\n\n  if (user[0] === '\"') {\n    user = user.slice(1, user.length - 1);\n    return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);\n  }\n\n  var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;\n  var user_parts = user.split('.');\n\n  for (var _i2 = 0; _i2 < user_parts.length; _i2++) {\n    if (!pattern.test(user_parts[_i2])) {\n      return false;\n    }\n  }\n\n  return true;\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isEmail.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isEmpty.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/isEmpty.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isEmpty;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nvar _merge = _interopRequireDefault(__webpack_require__(/*! ./util/merge */ \"./node_modules/validator/lib/util/merge.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar default_is_empty_options = {\n  ignore_whitespace: false\n};\n\nfunction isEmpty(str, options) {\n  (0, _assertString.default)(str);\n  options = (0, _merge.default)(options, default_is_empty_options);\n  return (options.ignore_whitespace ? str.trim().length : str.length) === 0;\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isEmpty.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isFQDN.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isFQDN.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isFQDN;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nvar _merge = _interopRequireDefault(__webpack_require__(/*! ./util/merge */ \"./node_modules/validator/lib/util/merge.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar default_fqdn_options = {\n  require_tld: true,\n  allow_underscores: false,\n  allow_trailing_dot: false\n};\n\nfunction isFQDN(str, options) {\n  (0, _assertString.default)(str);\n  options = (0, _merge.default)(options, default_fqdn_options);\n  /* Remove the optional trailing dot before checking validity */\n\n  if (options.allow_trailing_dot && str[str.length - 1] === '.') {\n    str = str.substring(0, str.length - 1);\n  }\n\n  var parts = str.split('.');\n\n  for (var i = 0; i < parts.length; i++) {\n    if (parts[i].length > 63) {\n      return false;\n    }\n  }\n\n  if (options.require_tld) {\n    var tld = parts.pop();\n\n    if (!parts.length || !/^([a-z\\u00a1-\\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {\n      return false;\n    } // disallow spaces\n\n\n    if (/[\\s\\u2002-\\u200B\\u202F\\u205F\\u3000\\uFEFF\\uDB40\\uDC20]/.test(tld)) {\n      return false;\n    }\n  }\n\n  for (var part, _i = 0; _i < parts.length; _i++) {\n    part = parts[_i];\n\n    if (options.allow_underscores) {\n      part = part.replace(/_/g, '');\n    }\n\n    if (!/^[a-z\\u00a1-\\uffff0-9-]+$/i.test(part)) {\n      return false;\n    } // disallow full-width chars\n\n\n    if (/[\\uff01-\\uff5e]/.test(part)) {\n      return false;\n    }\n\n    if (part[0] === '-' || part[part.length - 1] === '-') {\n      return false;\n    }\n  }\n\n  return true;\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isFQDN.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isFloat.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/isFloat.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isFloat;\nexports.locales = void 0;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nvar _alpha = __webpack_require__(/*! ./alpha */ \"./node_modules/validator/lib/alpha.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction isFloat(str, options) {\n  (0, _assertString.default)(str);\n  options = options || {};\n  var float = new RegExp(\"^(?:[-+])?(?:[0-9]+)?(?:\\\\\".concat(options.locale ? _alpha.decimal[options.locale] : '.', \"[0-9]*)?(?:[eE][\\\\+\\\\-]?(?:[0-9]+))?$\"));\n\n  if (str === '' || str === '.' || str === '-' || str === '+') {\n    return false;\n  }\n\n  var value = parseFloat(str.replace(',', '.'));\n  return float.test(str) && (!options.hasOwnProperty('min') || value >= options.min) && (!options.hasOwnProperty('max') || value <= options.max) && (!options.hasOwnProperty('lt') || value < options.lt) && (!options.hasOwnProperty('gt') || value > options.gt);\n}\n\nvar locales = Object.keys(_alpha.decimal);\nexports.locales = locales;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isFloat.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isFullWidth.js":
/*!***************************************************!*\
  !*** ./node_modules/validator/lib/isFullWidth.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isFullWidth;\nexports.fullWidth = void 0;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar fullWidth = /[^\\u0020-\\u007E\\uFF61-\\uFF9F\\uFFA0-\\uFFDC\\uFFE8-\\uFFEE0-9a-zA-Z]/;\nexports.fullWidth = fullWidth;\n\nfunction isFullWidth(str) {\n  (0, _assertString.default)(str);\n  return fullWidth.test(str);\n}\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isFullWidth.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isHalfWidth.js":
/*!***************************************************!*\
  !*** ./node_modules/validator/lib/isHalfWidth.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isHalfWidth;\nexports.halfWidth = void 0;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar halfWidth = /[\\u0020-\\u007E\\uFF61-\\uFF9F\\uFFA0-\\uFFDC\\uFFE8-\\uFFEE0-9a-zA-Z]/;\nexports.halfWidth = halfWidth;\n\nfunction isHalfWidth(str) {\n  (0, _assertString.default)(str);\n  return halfWidth.test(str);\n}\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isHalfWidth.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isHash.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isHash.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isHash;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar lengths = {\n  md5: 32,\n  md4: 32,\n  sha1: 40,\n  sha256: 64,\n  sha384: 96,\n  sha512: 128,\n  ripemd128: 32,\n  ripemd160: 40,\n  tiger128: 32,\n  tiger160: 40,\n  tiger192: 48,\n  crc32: 8,\n  crc32b: 8\n};\n\nfunction isHash(str, algorithm) {\n  (0, _assertString.default)(str);\n  var hash = new RegExp(\"^[a-f0-9]{\".concat(lengths[algorithm], \"}$\"));\n  return hash.test(str);\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isHash.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isHexColor.js":
/*!**************************************************!*\
  !*** ./node_modules/validator/lib/isHexColor.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isHexColor;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;\n\nfunction isHexColor(str) {\n  (0, _assertString.default)(str);\n  return hexcolor.test(str);\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isHexColor.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isHexadecimal.js":
/*!*****************************************************!*\
  !*** ./node_modules/validator/lib/isHexadecimal.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isHexadecimal;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar hexadecimal = /^[0-9A-F]+$/i;\n\nfunction isHexadecimal(str) {\n  (0, _assertString.default)(str);\n  return hexadecimal.test(str);\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isHexadecimal.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isIP.js":
/*!********************************************!*\
  !*** ./node_modules/validator/lib/isIP.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isIP;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ipv4Maybe = /^(\\d{1,3})\\.(\\d{1,3})\\.(\\d{1,3})\\.(\\d{1,3})$/;\nvar ipv6Block = /^[0-9A-F]{1,4}$/i;\n\nfunction isIP(str) {\n  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n  (0, _assertString.default)(str);\n  version = String(version);\n\n  if (!version) {\n    return isIP(str, 4) || isIP(str, 6);\n  } else if (version === '4') {\n    if (!ipv4Maybe.test(str)) {\n      return false;\n    }\n\n    var parts = str.split('.').sort(function (a, b) {\n      return a - b;\n    });\n    return parts[3] <= 255;\n  } else if (version === '6') {\n    var blocks = str.split(':');\n    var foundOmissionBlock = false; // marker to indicate ::\n    // At least some OS accept the last 32 bits of an IPv6 address\n    // (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says\n    // that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,\n    // and '::a.b.c.d' is deprecated, but also valid.\n\n    var foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);\n    var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;\n\n    if (blocks.length > expectedNumberOfBlocks) {\n      return false;\n    } // initial or final ::\n\n\n    if (str === '::') {\n      return true;\n    } else if (str.substr(0, 2) === '::') {\n      blocks.shift();\n      blocks.shift();\n      foundOmissionBlock = true;\n    } else if (str.substr(str.length - 2) === '::') {\n      blocks.pop();\n      blocks.pop();\n      foundOmissionBlock = true;\n    }\n\n    for (var i = 0; i < blocks.length; ++i) {\n      // test for a :: which can not be at the string start/end\n      // since those cases have been handled above\n      if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {\n        if (foundOmissionBlock) {\n          return false; // multiple :: in address\n        }\n\n        foundOmissionBlock = true;\n      } else if (foundIPv4TransitionBlock && i === blocks.length - 1) {// it has been checked before that the last\n        // block is a valid IPv4 address\n      } else if (!ipv6Block.test(blocks[i])) {\n        return false;\n      }\n    }\n\n    if (foundOmissionBlock) {\n      return blocks.length >= 1;\n    }\n\n    return blocks.length === expectedNumberOfBlocks;\n  }\n\n  return false;\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isIP.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isIPRange.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/isIPRange.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isIPRange;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nvar _isIP = _interopRequireDefault(__webpack_require__(/*! ./isIP */ \"./node_modules/validator/lib/isIP.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar subnetMaybe = /^\\d{1,2}$/;\n\nfunction isIPRange(str) {\n  (0, _assertString.default)(str);\n  var parts = str.split('/'); // parts[0] -> ip, parts[1] -> subnet\n\n  if (parts.length !== 2) {\n    return false;\n  }\n\n  if (!subnetMaybe.test(parts[1])) {\n    return false;\n  } // Disallow preceding 0 i.e. 01, 02, ...\n\n\n  if (parts[1].length > 1 && parts[1].startsWith('0')) {\n    return false;\n  }\n\n  return (0, _isIP.default)(parts[0], 4) && parts[1] <= 32 && parts[1] >= 0;\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isIPRange.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isISBN.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isISBN.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isISBN;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar isbn10Maybe = /^(?:[0-9]{9}X|[0-9]{10})$/;\nvar isbn13Maybe = /^(?:[0-9]{13})$/;\nvar factor = [1, 3];\n\nfunction isISBN(str) {\n  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n  (0, _assertString.default)(str);\n  version = String(version);\n\n  if (!version) {\n    return isISBN(str, 10) || isISBN(str, 13);\n  }\n\n  var sanitized = str.replace(/[\\s-]+/g, '');\n  var checksum = 0;\n  var i;\n\n  if (version === '10') {\n    if (!isbn10Maybe.test(sanitized)) {\n      return false;\n    }\n\n    for (i = 0; i < 9; i++) {\n      checksum += (i + 1) * sanitized.charAt(i);\n    }\n\n    if (sanitized.charAt(9) === 'X') {\n      checksum += 10 * 10;\n    } else {\n      checksum += 10 * sanitized.charAt(9);\n    }\n\n    if (checksum % 11 === 0) {\n      return !!sanitized;\n    }\n  } else if (version === '13') {\n    if (!isbn13Maybe.test(sanitized)) {\n      return false;\n    }\n\n    for (i = 0; i < 12; i++) {\n      checksum += factor[i % 2] * sanitized.charAt(i);\n    }\n\n    if (sanitized.charAt(12) - (10 - checksum % 10) % 10 === 0) {\n      return !!sanitized;\n    }\n  }\n\n  return false;\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isISBN.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isISIN.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isISIN.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isISIN;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar isin = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;\n\nfunction isISIN(str) {\n  (0, _assertString.default)(str);\n\n  if (!isin.test(str)) {\n    return false;\n  }\n\n  var checksumStr = str.replace(/[A-Z]/g, function (character) {\n    return parseInt(character, 36);\n  });\n  var sum = 0;\n  var digit;\n  var tmpNum;\n  var shouldDouble = true;\n\n  for (var i = checksumStr.length - 2; i >= 0; i--) {\n    digit = checksumStr.substring(i, i + 1);\n    tmpNum = parseInt(digit, 10);\n\n    if (shouldDouble) {\n      tmpNum *= 2;\n\n      if (tmpNum >= 10) {\n        sum += tmpNum + 1;\n      } else {\n        sum += tmpNum;\n      }\n    } else {\n      sum += tmpNum;\n    }\n\n    shouldDouble = !shouldDouble;\n  }\n\n  return parseInt(str.substr(str.length - 1), 10) === (10000 - sum) % 10;\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isISIN.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isISO31661Alpha2.js":
/*!********************************************************!*\
  !*** ./node_modules/validator/lib/isISO31661Alpha2.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isISO31661Alpha2;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nvar _includes = _interopRequireDefault(__webpack_require__(/*! ./util/includes */ \"./node_modules/validator/lib/util/includes.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// from https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2\nvar validISO31661Alpha2CountriesCodes = ['AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BQ', 'BR', 'BS', 'BT', 'BV', 'BW', 'BY', 'BZ', 'CA', 'CC', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CR', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ', 'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FK', 'FM', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HM', 'HN', 'HR', 'HT', 'HU', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IR', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KP', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MK', 'ML', 'MM', 'MN', 'MO', 'MP', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NF', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PW', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SD', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SX', 'SY', 'SZ', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'UM', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VI', 'VN', 'VU', 'WF', 'WS', 'YE', 'YT', 'ZA', 'ZM', 'ZW'];\n\nfunction isISO31661Alpha2(str) {\n  (0, _assertString.default)(str);\n  return (0, _includes.default)(validISO31661Alpha2CountriesCodes, str.toUpperCase());\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isISO31661Alpha2.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isISO31661Alpha3.js":
/*!********************************************************!*\
  !*** ./node_modules/validator/lib/isISO31661Alpha3.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isISO31661Alpha3;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nvar _includes = _interopRequireDefault(__webpack_require__(/*! ./util/includes */ \"./node_modules/validator/lib/util/includes.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// from https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3\nvar validISO31661Alpha3CountriesCodes = ['AFG', 'ALA', 'ALB', 'DZA', 'ASM', 'AND', 'AGO', 'AIA', 'ATA', 'ATG', 'ARG', 'ARM', 'ABW', 'AUS', 'AUT', 'AZE', 'BHS', 'BHR', 'BGD', 'BRB', 'BLR', 'BEL', 'BLZ', 'BEN', 'BMU', 'BTN', 'BOL', 'BES', 'BIH', 'BWA', 'BVT', 'BRA', 'IOT', 'BRN', 'BGR', 'BFA', 'BDI', 'KHM', 'CMR', 'CAN', 'CPV', 'CYM', 'CAF', 'TCD', 'CHL', 'CHN', 'CXR', 'CCK', 'COL', 'COM', 'COG', 'COD', 'COK', 'CRI', 'CIV', 'HRV', 'CUB', 'CUW', 'CYP', 'CZE', 'DNK', 'DJI', 'DMA', 'DOM', 'ECU', 'EGY', 'SLV', 'GNQ', 'ERI', 'EST', 'ETH', 'FLK', 'FRO', 'FJI', 'FIN', 'FRA', 'GUF', 'PYF', 'ATF', 'GAB', 'GMB', 'GEO', 'DEU', 'GHA', 'GIB', 'GRC', 'GRL', 'GRD', 'GLP', 'GUM', 'GTM', 'GGY', 'GIN', 'GNB', 'GUY', 'HTI', 'HMD', 'VAT', 'HND', 'HKG', 'HUN', 'ISL', 'IND', 'IDN', 'IRN', 'IRQ', 'IRL', 'IMN', 'ISR', 'ITA', 'JAM', 'JPN', 'JEY', 'JOR', 'KAZ', 'KEN', 'KIR', 'PRK', 'KOR', 'KWT', 'KGZ', 'LAO', 'LVA', 'LBN', 'LSO', 'LBR', 'LBY', 'LIE', 'LTU', 'LUX', 'MAC', 'MKD', 'MDG', 'MWI', 'MYS', 'MDV', 'MLI', 'MLT', 'MHL', 'MTQ', 'MRT', 'MUS', 'MYT', 'MEX', 'FSM', 'MDA', 'MCO', 'MNG', 'MNE', 'MSR', 'MAR', 'MOZ', 'MMR', 'NAM', 'NRU', 'NPL', 'NLD', 'NCL', 'NZL', 'NIC', 'NER', 'NGA', 'NIU', 'NFK', 'MNP', 'NOR', 'OMN', 'PAK', 'PLW', 'PSE', 'PAN', 'PNG', 'PRY', 'PER', 'PHL', 'PCN', 'POL', 'PRT', 'PRI', 'QAT', 'REU', 'ROU', 'RUS', 'RWA', 'BLM', 'SHN', 'KNA', 'LCA', 'MAF', 'SPM', 'VCT', 'WSM', 'SMR', 'STP', 'SAU', 'SEN', 'SRB', 'SYC', 'SLE', 'SGP', 'SXM', 'SVK', 'SVN', 'SLB', 'SOM', 'ZAF', 'SGS', 'SSD', 'ESP', 'LKA', 'SDN', 'SUR', 'SJM', 'SWZ', 'SWE', 'CHE', 'SYR', 'TWN', 'TJK', 'TZA', 'THA', 'TLS', 'TGO', 'TKL', 'TON', 'TTO', 'TUN', 'TUR', 'TKM', 'TCA', 'TUV', 'UGA', 'UKR', 'ARE', 'GBR', 'USA', 'UMI', 'URY', 'UZB', 'VUT', 'VEN', 'VNM', 'VGB', 'VIR', 'WLF', 'ESH', 'YEM', 'ZMB', 'ZWE'];\n\nfunction isISO31661Alpha3(str) {\n  (0, _assertString.default)(str);\n  return (0, _includes.default)(validISO31661Alpha3CountriesCodes, str.toUpperCase());\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isISO31661Alpha3.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isISO8601.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/isISO8601.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isISO8601;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* eslint-disable max-len */\n// from http://goo.gl/0ejHHW\nvar iso8601 = /^([\\+-]?\\d{4}(?!\\d{2}\\b))((-?)((0[1-9]|1[0-2])(\\3([12]\\d|0[1-9]|3[01]))?|W([0-4]\\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\\d|[12]\\d{2}|3([0-5]\\d|6[1-6])))([T\\s]((([01]\\d|2[0-3])((:?)[0-5]\\d)?|24:?00)([\\.,]\\d+(?!:))?)?(\\17[0-5]\\d([\\.,]\\d+)?)?([zZ]|([\\+-])([01]\\d|2[0-3]):?([0-5]\\d)?)?)?)?$/;\n/* eslint-enable max-len */\n\nvar isValidDate = function isValidDate(str) {\n  // str must have passed the ISO8601 check\n  // this check is meant to catch invalid dates\n  // like 2009-02-31\n  // first check for ordinal dates\n  var ordinalMatch = str.match(/^(\\d{4})-?(\\d{3})([ T]{1}\\.*|$)/);\n\n  if (ordinalMatch) {\n    var oYear = Number(ordinalMatch[1]);\n    var oDay = Number(ordinalMatch[2]); // if is leap year\n\n    if (oYear % 4 === 0 && oYear % 100 !== 0 || oYear % 400 === 0) return oDay <= 366;\n    return oDay <= 365;\n  }\n\n  var match = str.match(/(\\d{4})-?(\\d{0,2})-?(\\d*)/).map(Number);\n  var year = match[1];\n  var month = match[2];\n  var day = match[3];\n  var monthString = month ? \"0\".concat(month).slice(-2) : month;\n  var dayString = day ? \"0\".concat(day).slice(-2) : day; // create a date object and compare\n\n  var d = new Date(\"\".concat(year, \"-\").concat(monthString || '01', \"-\").concat(dayString || '01'));\n\n  if (month && day) {\n    return d.getUTCFullYear() === year && d.getUTCMonth() + 1 === month && d.getUTCDate() === day;\n  }\n\n  return true;\n};\n\nfunction isISO8601(str, options) {\n  (0, _assertString.default)(str);\n  var check = iso8601.test(str);\n  if (!options) return check;\n  if (check && options.strict) return isValidDate(str);\n  return check;\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isISO8601.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isISRC.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isISRC.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isISRC;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// see http://isrc.ifpi.org/en/isrc-standard/code-syntax\nvar isrc = /^[A-Z]{2}[0-9A-Z]{3}\\d{2}\\d{5}$/;\n\nfunction isISRC(str) {\n  (0, _assertString.default)(str);\n  return isrc.test(str);\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isISRC.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isISSN.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isISSN.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isISSN;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar issn = '^\\\\d{4}-?\\\\d{3}[\\\\dX]$';\n\nfunction isISSN(str) {\n  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  (0, _assertString.default)(str);\n  var testIssn = issn;\n  testIssn = options.require_hyphen ? testIssn.replace('?', '') : testIssn;\n  testIssn = options.case_sensitive ? new RegExp(testIssn) : new RegExp(testIssn, 'i');\n\n  if (!testIssn.test(str)) {\n    return false;\n  }\n\n  var digits = str.replace('-', '').toUpperCase();\n  var checksum = 0;\n\n  for (var i = 0; i < digits.length; i++) {\n    var digit = digits[i];\n    checksum += (digit === 'X' ? 10 : +digit) * (8 - i);\n  }\n\n  return checksum % 11 === 0;\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isISSN.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isIdentityCard.js":
/*!******************************************************!*\
  !*** ./node_modules/validator/lib/isIdentityCard.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isIdentityCard;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar validators = {\n  ES: function ES(str) {\n    (0, _assertString.default)(str);\n    var DNI = /^[0-9X-Z][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/;\n    var charsValue = {\n      X: 0,\n      Y: 1,\n      Z: 2\n    };\n    var controlDigits = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']; // sanitize user input\n\n    var sanitized = str.trim().toUpperCase(); // validate the data structure\n\n    if (!DNI.test(sanitized)) {\n      return false;\n    } // validate the control digit\n\n\n    var number = sanitized.slice(0, -1).replace(/[X,Y,Z]/g, function (char) {\n      return charsValue[char];\n    });\n    return sanitized.endsWith(controlDigits[number % 23]);\n  },\n  'he-IL': function heIL(str) {\n    var DNI = /^\\d{9}$/; // sanitize user input\n\n    var sanitized = str.trim(); // validate the data structure\n\n    if (!DNI.test(sanitized)) {\n      return false;\n    }\n\n    var id = sanitized;\n    var sum = 0,\n        incNum;\n\n    for (var i = 0; i < id.length; i++) {\n      incNum = Number(id[i]) * (i % 2 + 1); // Multiply number by 1 or 2\n\n      sum += incNum > 9 ? incNum - 9 : incNum; // Sum the digits up and add to total\n    }\n\n    return sum % 10 === 0;\n  },\n  'zh-TW': function zhTW(str) {\n    var ALPHABET_CODES = {\n      A: 10,\n      B: 11,\n      C: 12,\n      D: 13,\n      E: 14,\n      F: 15,\n      G: 16,\n      H: 17,\n      I: 34,\n      J: 18,\n      K: 19,\n      L: 20,\n      M: 21,\n      N: 22,\n      O: 35,\n      P: 23,\n      Q: 24,\n      R: 25,\n      S: 26,\n      T: 27,\n      U: 28,\n      V: 29,\n      W: 32,\n      X: 30,\n      Y: 31,\n      Z: 33\n    };\n    var sanitized = str.trim().toUpperCase();\n    if (!/^[A-Z][0-9]{9}$/.test(sanitized)) return false;\n    return Array.from(sanitized).reduce(function (sum, number, index) {\n      if (index === 0) {\n        var code = ALPHABET_CODES[number];\n        return code % 10 * 9 + Math.floor(code / 10);\n      }\n\n      if (index === 9) {\n        return (10 - sum % 10 - Number(number)) % 10 === 0;\n      }\n\n      return sum + Number(number) * (9 - index);\n    }, 0);\n  }\n};\n\nfunction isIdentityCard(str, locale) {\n  (0, _assertString.default)(str);\n\n  if (locale in validators) {\n    return validators[locale](str);\n  } else if (locale === 'any') {\n    for (var key in validators) {\n      // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes\n      // istanbul ignore else\n      if (validators.hasOwnProperty(key)) {\n        var validator = validators[key];\n\n        if (validator(str)) {\n          return true;\n        }\n      }\n    }\n\n    return false;\n  }\n\n  throw new Error(\"Invalid locale '\".concat(locale, \"'\"));\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isIdentityCard.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isIn.js":
/*!********************************************!*\
  !*** ./node_modules/validator/lib/isIn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isIn;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nvar _toString = _interopRequireDefault(__webpack_require__(/*! ./util/toString */ \"./node_modules/validator/lib/util/toString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction isIn(str, options) {\n  (0, _assertString.default)(str);\n  var i;\n\n  if (Object.prototype.toString.call(options) === '[object Array]') {\n    var array = [];\n\n    for (i in options) {\n      // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes\n      // istanbul ignore else\n      if ({}.hasOwnProperty.call(options, i)) {\n        array[i] = (0, _toString.default)(options[i]);\n      }\n    }\n\n    return array.indexOf(str) >= 0;\n  } else if (_typeof(options) === 'object') {\n    return options.hasOwnProperty(str);\n  } else if (options && typeof options.indexOf === 'function') {\n    return options.indexOf(str) >= 0;\n  }\n\n  return false;\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isIn.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isInt.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/isInt.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isInt;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;\nvar intLeadingZeroes = /^[-+]?[0-9]+$/;\n\nfunction isInt(str, options) {\n  (0, _assertString.default)(str);\n  options = options || {}; // Get the regex to use for testing, based on whether\n  // leading zeroes are allowed or not.\n\n  var regex = options.hasOwnProperty('allow_leading_zeroes') && !options.allow_leading_zeroes ? int : intLeadingZeroes; // Check min/max/lt/gt\n\n  var minCheckPassed = !options.hasOwnProperty('min') || str >= options.min;\n  var maxCheckPassed = !options.hasOwnProperty('max') || str <= options.max;\n  var ltCheckPassed = !options.hasOwnProperty('lt') || str < options.lt;\n  var gtCheckPassed = !options.hasOwnProperty('gt') || str > options.gt;\n  return regex.test(str) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed;\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isInt.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isJSON.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isJSON.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isJSON;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction isJSON(str) {\n  (0, _assertString.default)(str);\n\n  try {\n    var obj = JSON.parse(str);\n    return !!obj && _typeof(obj) === 'object';\n  } catch (e) {\n    /* ignore */\n  }\n\n  return false;\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isJSON.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isJWT.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/isJWT.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isJWT;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar jwt = /^([A-Za-z0-9\\-_~+\\/]+[=]{0,2})\\.([A-Za-z0-9\\-_~+\\/]+[=]{0,2})(?:\\.([A-Za-z0-9\\-_~+\\/]+[=]{0,2}))?$/;\n\nfunction isJWT(str) {\n  (0, _assertString.default)(str);\n  return jwt.test(str);\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isJWT.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isLatLong.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/isLatLong.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = _default;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar lat = /^\\(?[+-]?(90(\\.0+)?|[1-8]?\\d(\\.\\d+)?)$/;\nvar long = /^\\s?[+-]?(180(\\.0+)?|1[0-7]\\d(\\.\\d+)?|\\d{1,2}(\\.\\d+)?)\\)?$/;\n\nfunction _default(str) {\n  (0, _assertString.default)(str);\n  if (!str.includes(',')) return false;\n  var pair = str.split(',');\n  return lat.test(pair[0]) && long.test(pair[1]);\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isLatLong.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isLength.js":
/*!************************************************!*\
  !*** ./node_modules/validator/lib/isLength.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isLength;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/* eslint-disable prefer-rest-params */\nfunction isLength(str, options) {\n  (0, _assertString.default)(str);\n  var min;\n  var max;\n\n  if (_typeof(options) === 'object') {\n    min = options.min || 0;\n    max = options.max;\n  } else {\n    // backwards compatibility: isLength(str, min [, max])\n    min = arguments[1];\n    max = arguments[2];\n  }\n\n  var surrogatePairs = str.match(/[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]/g) || [];\n  var len = str.length - surrogatePairs.length;\n  return len >= min && (typeof max === 'undefined' || len <= max);\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isLength.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isLowercase.js":
/*!***************************************************!*\
  !*** ./node_modules/validator/lib/isLowercase.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isLowercase;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction isLowercase(str) {\n  (0, _assertString.default)(str);\n  return str === str.toLowerCase();\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isLowercase.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isMACAddress.js":
/*!****************************************************!*\
  !*** ./node_modules/validator/lib/isMACAddress.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isMACAddress;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar macAddress = /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/;\nvar macAddressNoColons = /^([0-9a-fA-F]){12}$/;\n\nfunction isMACAddress(str, options) {\n  (0, _assertString.default)(str);\n\n  if (options && options.no_colons) {\n    return macAddressNoColons.test(str);\n  }\n\n  return macAddress.test(str);\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isMACAddress.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isMD5.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/isMD5.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isMD5;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar md5 = /^[a-f0-9]{32}$/;\n\nfunction isMD5(str) {\n  (0, _assertString.default)(str);\n  return md5.test(str);\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isMD5.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isMagnetURI.js":
/*!***************************************************!*\
  !*** ./node_modules/validator/lib/isMagnetURI.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isMagnetURI;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar magnetURI = /^magnet:\\?xt=urn:[a-z0-9]+:[a-z0-9]{32,40}&dn=.+&tr=.+$/i;\n\nfunction isMagnetURI(url) {\n  (0, _assertString.default)(url);\n  return magnetURI.test(url.trim());\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isMagnetURI.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isMimeType.js":
/*!**************************************************!*\
  !*** ./node_modules/validator/lib/isMimeType.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isMimeType;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/*\n  Checks if the provided string matches to a correct Media type format (MIME type)\n\n  This function only checks is the string format follows the\n  etablished rules by the according RFC specifications.\n  This function supports 'charset' in textual media types\n  (https://tools.ietf.org/html/rfc6657).\n\n  This function does not check against all the media types listed\n  by the IANA (https://www.iana.org/assignments/media-types/media-types.xhtml)\n  because of lightness purposes : it would require to include\n  all these MIME types in this librairy, which would weigh it\n  significantly. This kind of effort maybe is not worth for the use that\n  this function has in this entire librairy.\n\n  More informations in the RFC specifications :\n  - https://tools.ietf.org/html/rfc2045\n  - https://tools.ietf.org/html/rfc2046\n  - https://tools.ietf.org/html/rfc7231#section-3.1.1.1\n  - https://tools.ietf.org/html/rfc7231#section-3.1.1.5\n*/\n// Match simple MIME types\n// NB :\n//   Subtype length must not exceed 100 characters.\n//   This rule does not comply to the RFC specs (what is the max length ?).\nvar mimeTypeSimple = /^(application|audio|font|image|message|model|multipart|text|video)\\/[a-zA-Z0-9\\.\\-\\+]{1,100}$/i; // eslint-disable-line max-len\n// Handle \"charset\" in \"text/*\"\n\nvar mimeTypeText = /^text\\/[a-zA-Z0-9\\.\\-\\+]{1,100};\\s?charset=(\"[a-zA-Z0-9\\.\\-\\+\\s]{0,70}\"|[a-zA-Z0-9\\.\\-\\+]{0,70})(\\s?\\([a-zA-Z0-9\\.\\-\\+\\s]{1,20}\\))?$/i; // eslint-disable-line max-len\n// Handle \"boundary\" in \"multipart/*\"\n\nvar mimeTypeMultipart = /^multipart\\/[a-zA-Z0-9\\.\\-\\+]{1,100}(;\\s?(boundary|charset)=(\"[a-zA-Z0-9\\.\\-\\+\\s]{0,70}\"|[a-zA-Z0-9\\.\\-\\+]{0,70})(\\s?\\([a-zA-Z0-9\\.\\-\\+\\s]{1,20}\\))?){0,2}$/i; // eslint-disable-line max-len\n\nfunction isMimeType(str) {\n  (0, _assertString.default)(str);\n  return mimeTypeSimple.test(str) || mimeTypeText.test(str) || mimeTypeMultipart.test(str);\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isMimeType.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isMobilePhone.js":
/*!*****************************************************!*\
  !*** ./node_modules/validator/lib/isMobilePhone.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isMobilePhone;\nexports.locales = void 0;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* eslint-disable max-len */\nvar phones = {\n  'ar-AE': /^((\\+?971)|0)?5[024568]\\d{7}$/,\n  'ar-BH': /^(\\+?973)?(3|6)\\d{7}$/,\n  'ar-DZ': /^(\\+?213|0)(5|6|7)\\d{8}$/,\n  'ar-EG': /^((\\+?20)|0)?1[0125]\\d{8}$/,\n  'ar-IQ': /^(\\+?964|0)?7[0-9]\\d{8}$/,\n  'ar-JO': /^(\\+?962|0)?7[789]\\d{7}$/,\n  'ar-KW': /^(\\+?965)[569]\\d{7}$/,\n  'ar-SA': /^(!?(\\+?966)|0)?5\\d{8}$/,\n  'ar-SY': /^(!?(\\+?963)|0)?9\\d{8}$/,\n  'ar-TN': /^(\\+?216)?[2459]\\d{7}$/,\n  'be-BY': /^(\\+?375)?(24|25|29|33|44)\\d{7}$/,\n  'bg-BG': /^(\\+?359|0)?8[789]\\d{7}$/,\n  'bn-BD': /^(\\+?880|0)1[1356789][0-9]{8}$/,\n  'cs-CZ': /^(\\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,\n  'da-DK': /^(\\+?45)?\\s?\\d{2}\\s?\\d{2}\\s?\\d{2}\\s?\\d{2}$/,\n  'de-DE': /^(\\+49)?0?1(5[0-25-9]\\d|6([23]|0\\d?)|7([0-57-9]|6\\d))\\d{7}$/,\n  'el-GR': /^(\\+?30|0)?(69\\d{8})$/,\n  'en-AU': /^(\\+?61|0)4\\d{8}$/,\n  'en-GB': /^(\\+?44|0)7\\d{9}$/,\n  'en-GH': /^(\\+233|0)(20|50|24|54|27|57|26|56|23|28)\\d{7}$/,\n  'en-HK': /^(\\+?852\\-?)?[456789]\\d{3}\\-?\\d{4}$/,\n  'en-IE': /^(\\+?353|0)8[356789]\\d{7}$/,\n  'en-IN': /^(\\+?91|0)?[6789]\\d{9}$/,\n  'en-KE': /^(\\+?254|0)(7|1)\\d{8}$/,\n  'en-MT': /^(\\+?356|0)?(99|79|77|21|27|22|25)[0-9]{6}$/,\n  'en-MU': /^(\\+?230|0)?\\d{8}$/,\n  'en-NG': /^(\\+?234|0)?[789]\\d{9}$/,\n  'en-NZ': /^(\\+?64|0)[28]\\d{7,9}$/,\n  'en-PK': /^((\\+92)|(0092))-{0,1}\\d{3}-{0,1}\\d{7}$|^\\d{11}$|^\\d{4}-\\d{7}$/,\n  'en-RW': /^(\\+?250|0)?[7]\\d{8}$/,\n  'en-SG': /^(\\+65)?[89]\\d{7}$/,\n  'en-TZ': /^(\\+?255|0)?[67]\\d{8}$/,\n  'en-UG': /^(\\+?256|0)?[7]\\d{8}$/,\n  'en-US': /^((\\+1|1)?( |-)?)?(\\([2-9][0-9]{2}\\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,\n  'en-ZA': /^(\\+?27|0)\\d{9}$/,\n  'en-ZM': /^(\\+?26)?09[567]\\d{7}$/,\n  'es-CL': /^(\\+?56|0)[2-9]\\d{1}\\d{7}$/,\n  'es-ES': /^(\\+?34)?(6\\d{1}|7[1234])\\d{7}$/,\n  'es-MX': /^(\\+?52)?(1|01)?\\d{10,11}$/,\n  'es-PY': /^(\\+?595|0)9[9876]\\d{7}$/,\n  'es-UY': /^(\\+598|0)9[1-9][\\d]{6}$/,\n  'et-EE': /^(\\+?372)?\\s?(5|8[1-4])\\s?([0-9]\\s?){6,7}$/,\n  'fa-IR': /^(\\+?98[\\-\\s]?|0)9[0-39]\\d[\\-\\s]?\\d{3}[\\-\\s]?\\d{4}$/,\n  'fi-FI': /^(\\+?358|0)\\s?(4(0|1|2|4|5|6)?|50)\\s?(\\d\\s?){4,8}\\d$/,\n  'fj-FJ': /^(\\+?679)?\\s?\\d{3}\\s?\\d{4}$/,\n  'fo-FO': /^(\\+?298)?\\s?\\d{2}\\s?\\d{2}\\s?\\d{2}$/,\n  'fr-FR': /^(\\+?33|0)[67]\\d{8}$/,\n  'he-IL': /^(\\+972|0)([23489]|5[012345689]|77)[1-9]\\d{6}$/,\n  'hu-HU': /^(\\+?36)(20|30|70)\\d{7}$/,\n  'id-ID': /^(\\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\\s?|\\d]{5,11})$/,\n  'it-IT': /^(\\+?39)?\\s?3\\d{2} ?\\d{6,7}$/,\n  'ja-JP': /^(\\+?81|0)[789]0[ \\-]?[1-9]\\d{2}[ \\-]?\\d{5}$/,\n  'kk-KZ': /^(\\+?7|8)?7\\d{9}$/,\n  'kl-GL': /^(\\+?299)?\\s?\\d{2}\\s?\\d{2}\\s?\\d{2}$/,\n  'ko-KR': /^((\\+?82)[ \\-]?)?0?1([0|1|6|7|8|9]{1})[ \\-]?\\d{3,4}[ \\-]?\\d{4}$/,\n  'lt-LT': /^(\\+370|8)\\d{8}$/,\n  'ms-MY': /^(\\+?6?01){1}(([0145]{1}(\\-|\\s)?\\d{7,8})|([236789]{1}(\\s|\\-)?\\d{7}))$/,\n  'nb-NO': /^(\\+?47)?[49]\\d{7}$/,\n  'nl-BE': /^(\\+?32|0)4?\\d{8}$/,\n  'nl-NL': /^(\\+?31|0)6?\\d{8}$/,\n  'nn-NO': /^(\\+?47)?[49]\\d{7}$/,\n  'pl-PL': /^(\\+?48)? ?[5-8]\\d ?\\d{3} ?\\d{2} ?\\d{2}$/,\n  'pt-BR': /(?=^(\\+?5{2}\\-?|0)[1-9]{2}\\-?\\d{4}\\-?\\d{4}$)(^(\\+?5{2}\\-?|0)[1-9]{2}\\-?[6-9]{1}\\d{3}\\-?\\d{4}$)|(^(\\+?5{2}\\-?|0)[1-9]{2}\\-?9[6-9]{1}\\d{3}\\-?\\d{4}$)/,\n  'pt-PT': /^(\\+?351)?9[1236]\\d{7}$/,\n  'ro-RO': /^(\\+?4?0)\\s?7\\d{2}(\\/|\\s|\\.|\\-)?\\d{3}(\\s|\\.|\\-)?\\d{3}$/,\n  'ru-RU': /^(\\+?7|8)?9\\d{9}$/,\n  'sl-SI': /^(\\+386\\s?|0)(\\d{1}\\s?\\d{3}\\s?\\d{2}\\s?\\d{2}|\\d{2}\\s?\\d{3}\\s?\\d{3})$/,\n  'sk-SK': /^(\\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,\n  'sr-RS': /^(\\+3816|06)[- \\d]{5,9}$/,\n  'sv-SE': /^(\\+?46|0)[\\s\\-]?7[\\s\\-]?[02369]([\\s\\-]?\\d){7}$/,\n  'th-TH': /^(\\+66|66|0)\\d{9}$/,\n  'tr-TR': /^(\\+?90|0)?5\\d{9}$/,\n  'uk-UA': /^(\\+?38|8)?0\\d{9}$/,\n  'vi-VN': /^(\\+?84|0)((3([2-9]))|(5([2689]))|(7([0|6-9]))|(8([1-6|89]))|(9([0-9])))([0-9]{7})$/,\n  'zh-CN': /^((\\+|00)86)?1([358][0-9]|4[579]|6[67]|7[0135678]|9[189])[0-9]{8}$/,\n  'zh-TW': /^(\\+?886\\-?|0)?9\\d{8}$/\n};\n/* eslint-enable max-len */\n// aliases\n\nphones['en-CA'] = phones['en-US'];\nphones['fr-BE'] = phones['nl-BE'];\nphones['zh-HK'] = phones['en-HK'];\n\nfunction isMobilePhone(str, locale, options) {\n  (0, _assertString.default)(str);\n\n  if (options && options.strictMode && !str.startsWith('+')) {\n    return false;\n  }\n\n  if (Array.isArray(locale)) {\n    return locale.some(function (key) {\n      // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes\n      // istanbul ignore else\n      if (phones.hasOwnProperty(key)) {\n        var phone = phones[key];\n\n        if (phone.test(str)) {\n          return true;\n        }\n      }\n\n      return false;\n    });\n  } else if (locale in phones) {\n    return phones[locale].test(str); // alias falsey locale as 'any'\n  } else if (!locale || locale === 'any') {\n    for (var key in phones) {\n      // istanbul ignore else\n      if (phones.hasOwnProperty(key)) {\n        var phone = phones[key];\n\n        if (phone.test(str)) {\n          return true;\n        }\n      }\n    }\n\n    return false;\n  }\n\n  throw new Error(\"Invalid locale '\".concat(locale, \"'\"));\n}\n\nvar locales = Object.keys(phones);\nexports.locales = locales;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isMobilePhone.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isMongoId.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/isMongoId.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isMongoId;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nvar _isHexadecimal = _interopRequireDefault(__webpack_require__(/*! ./isHexadecimal */ \"./node_modules/validator/lib/isHexadecimal.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction isMongoId(str) {\n  (0, _assertString.default)(str);\n  return (0, _isHexadecimal.default)(str) && str.length === 24;\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isMongoId.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isMultibyte.js":
/*!***************************************************!*\
  !*** ./node_modules/validator/lib/isMultibyte.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isMultibyte;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* eslint-disable no-control-regex */\nvar multibyte = /[^\\x00-\\x7F]/;\n/* eslint-enable no-control-regex */\n\nfunction isMultibyte(str) {\n  (0, _assertString.default)(str);\n  return multibyte.test(str);\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isMultibyte.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isNumeric.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/isNumeric.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isNumeric;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar numeric = /^[+-]?([0-9]*[.])?[0-9]+$/;\nvar numericNoSymbols = /^[0-9]+$/;\n\nfunction isNumeric(str, options) {\n  (0, _assertString.default)(str);\n\n  if (options && options.no_symbols) {\n    return numericNoSymbols.test(str);\n  }\n\n  return numeric.test(str);\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isNumeric.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isPort.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isPort.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isPort;\n\nvar _isInt = _interopRequireDefault(__webpack_require__(/*! ./isInt */ \"./node_modules/validator/lib/isInt.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction isPort(str) {\n  return (0, _isInt.default)(str, {\n    min: 0,\n    max: 65535\n  });\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isPort.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isPostalCode.js":
/*!****************************************************!*\
  !*** ./node_modules/validator/lib/isPostalCode.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = _default;\nexports.locales = void 0;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// common patterns\nvar threeDigit = /^\\d{3}$/;\nvar fourDigit = /^\\d{4}$/;\nvar fiveDigit = /^\\d{5}$/;\nvar sixDigit = /^\\d{6}$/;\nvar patterns = {\n  AD: /^AD\\d{3}$/,\n  AT: fourDigit,\n  AU: fourDigit,\n  BE: fourDigit,\n  BG: fourDigit,\n  BR: /^\\d{5}-\\d{3}$/,\n  CA: /^[ABCEGHJKLMNPRSTVXY]\\d[ABCEGHJ-NPRSTV-Z][\\s\\-]?\\d[ABCEGHJ-NPRSTV-Z]\\d$/i,\n  CH: fourDigit,\n  CZ: /^\\d{3}\\s?\\d{2}$/,\n  DE: fiveDigit,\n  DK: fourDigit,\n  DZ: fiveDigit,\n  EE: fiveDigit,\n  ES: fiveDigit,\n  FI: fiveDigit,\n  FR: /^\\d{2}\\s?\\d{3}$/,\n  GB: /^(gir\\s?0aa|[a-z]{1,2}\\d[\\da-z]?\\s?(\\d[a-z]{2})?)$/i,\n  GR: /^\\d{3}\\s?\\d{2}$/,\n  HR: /^([1-5]\\d{4}$)/,\n  HU: fourDigit,\n  ID: fiveDigit,\n  IL: fiveDigit,\n  IN: sixDigit,\n  IS: threeDigit,\n  IT: fiveDigit,\n  JP: /^\\d{3}\\-\\d{4}$/,\n  KE: fiveDigit,\n  LI: /^(948[5-9]|949[0-7])$/,\n  LT: /^LT\\-\\d{5}$/,\n  LU: fourDigit,\n  LV: /^LV\\-\\d{4}$/,\n  MX: fiveDigit,\n  MT: /^[A-Za-z]{3}\\s{0,1}\\d{4}$/,\n  NL: /^\\d{4}\\s?[a-z]{2}$/i,\n  NO: fourDigit,\n  NZ: fourDigit,\n  PL: /^\\d{2}\\-\\d{3}$/,\n  PR: /^00[679]\\d{2}([ -]\\d{4})?$/,\n  PT: /^\\d{4}\\-\\d{3}?$/,\n  RO: sixDigit,\n  RU: sixDigit,\n  SA: fiveDigit,\n  SE: /^\\d{3}\\s?\\d{2}$/,\n  SI: fourDigit,\n  SK: /^\\d{3}\\s?\\d{2}$/,\n  TN: fourDigit,\n  TW: /^\\d{3}(\\d{2})?$/,\n  UA: fiveDigit,\n  US: /^\\d{5}(-\\d{4})?$/,\n  ZA: fourDigit,\n  ZM: fiveDigit\n};\nvar locales = Object.keys(patterns);\nexports.locales = locales;\n\nfunction _default(str, locale) {\n  (0, _assertString.default)(str);\n\n  if (locale in patterns) {\n    return patterns[locale].test(str);\n  } else if (locale === 'any') {\n    for (var key in patterns) {\n      // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes\n      // istanbul ignore else\n      if (patterns.hasOwnProperty(key)) {\n        var pattern = patterns[key];\n\n        if (pattern.test(str)) {\n          return true;\n        }\n      }\n    }\n\n    return false;\n  }\n\n  throw new Error(\"Invalid locale '\".concat(locale, \"'\"));\n}\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isPostalCode.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isRFC3339.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/isRFC3339.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isRFC3339;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* Based on https://tools.ietf.org/html/rfc3339#section-5.6 */\nvar dateFullYear = /[0-9]{4}/;\nvar dateMonth = /(0[1-9]|1[0-2])/;\nvar dateMDay = /([12]\\d|0[1-9]|3[01])/;\nvar timeHour = /([01][0-9]|2[0-3])/;\nvar timeMinute = /[0-5][0-9]/;\nvar timeSecond = /([0-5][0-9]|60)/;\nvar timeSecFrac = /(\\.[0-9]+)?/;\nvar timeNumOffset = new RegExp(\"[-+]\".concat(timeHour.source, \":\").concat(timeMinute.source));\nvar timeOffset = new RegExp(\"([zZ]|\".concat(timeNumOffset.source, \")\"));\nvar partialTime = new RegExp(\"\".concat(timeHour.source, \":\").concat(timeMinute.source, \":\").concat(timeSecond.source).concat(timeSecFrac.source));\nvar fullDate = new RegExp(\"\".concat(dateFullYear.source, \"-\").concat(dateMonth.source, \"-\").concat(dateMDay.source));\nvar fullTime = new RegExp(\"\".concat(partialTime.source).concat(timeOffset.source));\nvar rfc3339 = new RegExp(\"\".concat(fullDate.source, \"[ tT]\").concat(fullTime.source));\n\nfunction isRFC3339(str) {\n  (0, _assertString.default)(str);\n  return rfc3339.test(str);\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isRFC3339.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isSurrogatePair.js":
/*!*******************************************************!*\
  !*** ./node_modules/validator/lib/isSurrogatePair.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isSurrogatePair;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar surrogatePair = /[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]/;\n\nfunction isSurrogatePair(str) {\n  (0, _assertString.default)(str);\n  return surrogatePair.test(str);\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isSurrogatePair.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isURL.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/isURL.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isURL;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nvar _isFQDN = _interopRequireDefault(__webpack_require__(/*! ./isFQDN */ \"./node_modules/validator/lib/isFQDN.js\"));\n\nvar _isIP = _interopRequireDefault(__webpack_require__(/*! ./isIP */ \"./node_modules/validator/lib/isIP.js\"));\n\nvar _merge = _interopRequireDefault(__webpack_require__(/*! ./util/merge */ \"./node_modules/validator/lib/util/merge.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar default_url_options = {\n  protocols: ['http', 'https', 'ftp'],\n  require_tld: true,\n  require_protocol: false,\n  require_host: true,\n  require_valid_protocol: true,\n  allow_underscores: false,\n  allow_trailing_dot: false,\n  allow_protocol_relative_urls: false\n};\nvar wrapped_ipv6 = /^\\[([^\\]]+)\\](?::([0-9]+))?$/;\n\nfunction isRegExp(obj) {\n  return Object.prototype.toString.call(obj) === '[object RegExp]';\n}\n\nfunction checkHost(host, matches) {\n  for (var i = 0; i < matches.length; i++) {\n    var match = matches[i];\n\n    if (host === match || isRegExp(match) && match.test(host)) {\n      return true;\n    }\n  }\n\n  return false;\n}\n\nfunction isURL(url, options) {\n  (0, _assertString.default)(url);\n\n  if (!url || url.length >= 2083 || /[\\s<>]/.test(url)) {\n    return false;\n  }\n\n  if (url.indexOf('mailto:') === 0) {\n    return false;\n  }\n\n  options = (0, _merge.default)(options, default_url_options);\n  var protocol, auth, host, hostname, port, port_str, split, ipv6;\n  split = url.split('#');\n  url = split.shift();\n  split = url.split('?');\n  url = split.shift();\n  split = url.split('://');\n\n  if (split.length > 1) {\n    protocol = split.shift().toLowerCase();\n\n    if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {\n      return false;\n    }\n  } else if (options.require_protocol) {\n    return false;\n  } else if (url.substr(0, 2) === '//') {\n    if (!options.allow_protocol_relative_urls) {\n      return false;\n    }\n\n    split[0] = url.substr(2);\n  }\n\n  url = split.join('://');\n\n  if (url === '') {\n    return false;\n  }\n\n  split = url.split('/');\n  url = split.shift();\n\n  if (url === '' && !options.require_host) {\n    return true;\n  }\n\n  split = url.split('@');\n\n  if (split.length > 1) {\n    if (options.disallow_auth) {\n      return false;\n    }\n\n    auth = split.shift();\n\n    if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {\n      return false;\n    }\n  }\n\n  hostname = split.join('@');\n  port_str = null;\n  ipv6 = null;\n  var ipv6_match = hostname.match(wrapped_ipv6);\n\n  if (ipv6_match) {\n    host = '';\n    ipv6 = ipv6_match[1];\n    port_str = ipv6_match[2] || null;\n  } else {\n    split = hostname.split(':');\n    host = split.shift();\n\n    if (split.length) {\n      port_str = split.join(':');\n    }\n  }\n\n  if (port_str !== null) {\n    port = parseInt(port_str, 10);\n\n    if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {\n      return false;\n    }\n  }\n\n  if (!(0, _isIP.default)(host) && !(0, _isFQDN.default)(host, options) && (!ipv6 || !(0, _isIP.default)(ipv6, 6))) {\n    return false;\n  }\n\n  host = host || ipv6;\n\n  if (options.host_whitelist && !checkHost(host, options.host_whitelist)) {\n    return false;\n  }\n\n  if (options.host_blacklist && checkHost(host, options.host_blacklist)) {\n    return false;\n  }\n\n  return true;\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isURL.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isUUID.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isUUID.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isUUID;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar uuid = {\n  3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,\n  4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,\n  5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,\n  all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i\n};\n\nfunction isUUID(str) {\n  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';\n  (0, _assertString.default)(str);\n  var pattern = uuid[version];\n  return pattern && pattern.test(str);\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isUUID.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isUppercase.js":
/*!***************************************************!*\
  !*** ./node_modules/validator/lib/isUppercase.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isUppercase;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction isUppercase(str) {\n  (0, _assertString.default)(str);\n  return str === str.toUpperCase();\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isUppercase.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isVariableWidth.js":
/*!*******************************************************!*\
  !*** ./node_modules/validator/lib/isVariableWidth.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isVariableWidth;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nvar _isFullWidth = __webpack_require__(/*! ./isFullWidth */ \"./node_modules/validator/lib/isFullWidth.js\");\n\nvar _isHalfWidth = __webpack_require__(/*! ./isHalfWidth */ \"./node_modules/validator/lib/isHalfWidth.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction isVariableWidth(str) {\n  (0, _assertString.default)(str);\n  return _isFullWidth.fullWidth.test(str) && _isHalfWidth.halfWidth.test(str);\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isVariableWidth.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isWhitelisted.js":
/*!*****************************************************!*\
  !*** ./node_modules/validator/lib/isWhitelisted.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isWhitelisted;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction isWhitelisted(str, chars) {\n  (0, _assertString.default)(str);\n\n  for (var i = str.length - 1; i >= 0; i--) {\n    if (chars.indexOf(str[i]) === -1) {\n      return false;\n    }\n  }\n\n  return true;\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isWhitelisted.js?");

/***/ }),

/***/ "./node_modules/validator/lib/ltrim.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/ltrim.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = ltrim;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction ltrim(str, chars) {\n  (0, _assertString.default)(str); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping\n\n  var pattern = chars ? new RegExp(\"^[\".concat(chars.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&'), \"]+\"), 'g') : /^\\s+/g;\n  return str.replace(pattern, '');\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/ltrim.js?");

/***/ }),

/***/ "./node_modules/validator/lib/matches.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/matches.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = matches;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction matches(str, pattern, modifiers) {\n  (0, _assertString.default)(str);\n\n  if (Object.prototype.toString.call(pattern) !== '[object RegExp]') {\n    pattern = new RegExp(pattern, modifiers);\n  }\n\n  return pattern.test(str);\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/matches.js?");

/***/ }),

/***/ "./node_modules/validator/lib/normalizeEmail.js":
/*!******************************************************!*\
  !*** ./node_modules/validator/lib/normalizeEmail.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = normalizeEmail;\n\nvar _merge = _interopRequireDefault(__webpack_require__(/*! ./util/merge */ \"./node_modules/validator/lib/util/merge.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar default_normalize_email_options = {\n  // The following options apply to all email addresses\n  // Lowercases the local part of the email address.\n  // Please note this may violate RFC 5321 as per http://stackoverflow.com/a/9808332/192024).\n  // The domain is always lowercased, as per RFC 1035\n  all_lowercase: true,\n  // The following conversions are specific to GMail\n  // Lowercases the local part of the GMail address (known to be case-insensitive)\n  gmail_lowercase: true,\n  // Removes dots from the local part of the email address, as that's ignored by GMail\n  gmail_remove_dots: true,\n  // Removes the subaddress (e.g. \"+foo\") from the email address\n  gmail_remove_subaddress: true,\n  // Conversts the googlemail.com domain to gmail.com\n  gmail_convert_googlemaildotcom: true,\n  // The following conversions are specific to Outlook.com / Windows Live / Hotmail\n  // Lowercases the local part of the Outlook.com address (known to be case-insensitive)\n  outlookdotcom_lowercase: true,\n  // Removes the subaddress (e.g. \"+foo\") from the email address\n  outlookdotcom_remove_subaddress: true,\n  // The following conversions are specific to Yahoo\n  // Lowercases the local part of the Yahoo address (known to be case-insensitive)\n  yahoo_lowercase: true,\n  // Removes the subaddress (e.g. \"-foo\") from the email address\n  yahoo_remove_subaddress: true,\n  // The following conversions are specific to Yandex\n  // Lowercases the local part of the Yandex address (known to be case-insensitive)\n  yandex_lowercase: true,\n  // The following conversions are specific to iCloud\n  // Lowercases the local part of the iCloud address (known to be case-insensitive)\n  icloud_lowercase: true,\n  // Removes the subaddress (e.g. \"+foo\") from the email address\n  icloud_remove_subaddress: true\n}; // List of domains used by iCloud\n\nvar icloud_domains = ['icloud.com', 'me.com']; // List of domains used by Outlook.com and its predecessors\n// This list is likely incomplete.\n// Partial reference:\n// https://blogs.office.com/2013/04/17/outlook-com-gets-two-step-verification-sign-in-by-alias-and-new-international-domains/\n\nvar outlookdotcom_domains = ['hotmail.at', 'hotmail.be', 'hotmail.ca', 'hotmail.cl', 'hotmail.co.il', 'hotmail.co.nz', 'hotmail.co.th', 'hotmail.co.uk', 'hotmail.com', 'hotmail.com.ar', 'hotmail.com.au', 'hotmail.com.br', 'hotmail.com.gr', 'hotmail.com.mx', 'hotmail.com.pe', 'hotmail.com.tr', 'hotmail.com.vn', 'hotmail.cz', 'hotmail.de', 'hotmail.dk', 'hotmail.es', 'hotmail.fr', 'hotmail.hu', 'hotmail.id', 'hotmail.ie', 'hotmail.in', 'hotmail.it', 'hotmail.jp', 'hotmail.kr', 'hotmail.lv', 'hotmail.my', 'hotmail.ph', 'hotmail.pt', 'hotmail.sa', 'hotmail.sg', 'hotmail.sk', 'live.be', 'live.co.uk', 'live.com', 'live.com.ar', 'live.com.mx', 'live.de', 'live.es', 'live.eu', 'live.fr', 'live.it', 'live.nl', 'msn.com', 'outlook.at', 'outlook.be', 'outlook.cl', 'outlook.co.il', 'outlook.co.nz', 'outlook.co.th', 'outlook.com', 'outlook.com.ar', 'outlook.com.au', 'outlook.com.br', 'outlook.com.gr', 'outlook.com.pe', 'outlook.com.tr', 'outlook.com.vn', 'outlook.cz', 'outlook.de', 'outlook.dk', 'outlook.es', 'outlook.fr', 'outlook.hu', 'outlook.id', 'outlook.ie', 'outlook.in', 'outlook.it', 'outlook.jp', 'outlook.kr', 'outlook.lv', 'outlook.my', 'outlook.ph', 'outlook.pt', 'outlook.sa', 'outlook.sg', 'outlook.sk', 'passport.com']; // List of domains used by Yahoo Mail\n// This list is likely incomplete\n\nvar yahoo_domains = ['rocketmail.com', 'yahoo.ca', 'yahoo.co.uk', 'yahoo.com', 'yahoo.de', 'yahoo.fr', 'yahoo.in', 'yahoo.it', 'ymail.com']; // List of domains used by yandex.ru\n\nvar yandex_domains = ['yandex.ru', 'yandex.ua', 'yandex.kz', 'yandex.com', 'yandex.by', 'ya.ru']; // replace single dots, but not multiple consecutive dots\n\nfunction dotsReplacer(match) {\n  if (match.length > 1) {\n    return match;\n  }\n\n  return '';\n}\n\nfunction normalizeEmail(email, options) {\n  options = (0, _merge.default)(options, default_normalize_email_options);\n  var raw_parts = email.split('@');\n  var domain = raw_parts.pop();\n  var user = raw_parts.join('@');\n  var parts = [user, domain]; // The domain is always lowercased, as it's case-insensitive per RFC 1035\n\n  parts[1] = parts[1].toLowerCase();\n\n  if (parts[1] === 'gmail.com' || parts[1] === 'googlemail.com') {\n    // Address is GMail\n    if (options.gmail_remove_subaddress) {\n      parts[0] = parts[0].split('+')[0];\n    }\n\n    if (options.gmail_remove_dots) {\n      // this does not replace consecutive dots like example..email@gmail.com\n      parts[0] = parts[0].replace(/\\.+/g, dotsReplacer);\n    }\n\n    if (!parts[0].length) {\n      return false;\n    }\n\n    if (options.all_lowercase || options.gmail_lowercase) {\n      parts[0] = parts[0].toLowerCase();\n    }\n\n    parts[1] = options.gmail_convert_googlemaildotcom ? 'gmail.com' : parts[1];\n  } else if (icloud_domains.indexOf(parts[1]) >= 0) {\n    // Address is iCloud\n    if (options.icloud_remove_subaddress) {\n      parts[0] = parts[0].split('+')[0];\n    }\n\n    if (!parts[0].length) {\n      return false;\n    }\n\n    if (options.all_lowercase || options.icloud_lowercase) {\n      parts[0] = parts[0].toLowerCase();\n    }\n  } else if (outlookdotcom_domains.indexOf(parts[1]) >= 0) {\n    // Address is Outlook.com\n    if (options.outlookdotcom_remove_subaddress) {\n      parts[0] = parts[0].split('+')[0];\n    }\n\n    if (!parts[0].length) {\n      return false;\n    }\n\n    if (options.all_lowercase || options.outlookdotcom_lowercase) {\n      parts[0] = parts[0].toLowerCase();\n    }\n  } else if (yahoo_domains.indexOf(parts[1]) >= 0) {\n    // Address is Yahoo\n    if (options.yahoo_remove_subaddress) {\n      var components = parts[0].split('-');\n      parts[0] = components.length > 1 ? components.slice(0, -1).join('-') : components[0];\n    }\n\n    if (!parts[0].length) {\n      return false;\n    }\n\n    if (options.all_lowercase || options.yahoo_lowercase) {\n      parts[0] = parts[0].toLowerCase();\n    }\n  } else if (yandex_domains.indexOf(parts[1]) >= 0) {\n    if (options.all_lowercase || options.yandex_lowercase) {\n      parts[0] = parts[0].toLowerCase();\n    }\n\n    parts[1] = 'yandex.ru'; // all yandex domains are equal, 1st preffered\n  } else if (options.all_lowercase) {\n    // Any other address\n    parts[0] = parts[0].toLowerCase();\n  }\n\n  return parts.join('@');\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/normalizeEmail.js?");

/***/ }),

/***/ "./node_modules/validator/lib/rtrim.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/rtrim.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = rtrim;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction rtrim(str, chars) {\n  (0, _assertString.default)(str); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping\n\n  var pattern = chars ? new RegExp(\"[\".concat(chars.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&'), \"]+$\"), 'g') : /\\s+$/g;\n  return str.replace(pattern, '');\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/rtrim.js?");

/***/ }),

/***/ "./node_modules/validator/lib/stripLow.js":
/*!************************************************!*\
  !*** ./node_modules/validator/lib/stripLow.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = stripLow;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nvar _blacklist = _interopRequireDefault(__webpack_require__(/*! ./blacklist */ \"./node_modules/validator/lib/blacklist.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction stripLow(str, keep_new_lines) {\n  (0, _assertString.default)(str);\n  var chars = keep_new_lines ? '\\\\x00-\\\\x09\\\\x0B\\\\x0C\\\\x0E-\\\\x1F\\\\x7F' : '\\\\x00-\\\\x1F\\\\x7F';\n  return (0, _blacklist.default)(str, chars);\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/stripLow.js?");

/***/ }),

/***/ "./node_modules/validator/lib/toBoolean.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/toBoolean.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = toBoolean;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction toBoolean(str, strict) {\n  (0, _assertString.default)(str);\n\n  if (strict) {\n    return str === '1' || str === 'true';\n  }\n\n  return str !== '0' && str !== 'false' && str !== '';\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/toBoolean.js?");

/***/ }),

/***/ "./node_modules/validator/lib/toDate.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/toDate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = toDate;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction toDate(date) {\n  (0, _assertString.default)(date);\n  date = Date.parse(date);\n  return !isNaN(date) ? new Date(date) : null;\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/toDate.js?");

/***/ }),

/***/ "./node_modules/validator/lib/toFloat.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/toFloat.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = toFloat;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction toFloat(str) {\n  (0, _assertString.default)(str);\n  return parseFloat(str);\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/toFloat.js?");

/***/ }),

/***/ "./node_modules/validator/lib/toInt.js":
/*!*********************************************!*\
  !*** ./node_modules/validator/lib/toInt.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = toInt;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction toInt(str, radix) {\n  (0, _assertString.default)(str);\n  return parseInt(str, radix || 10);\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/toInt.js?");

/***/ }),

/***/ "./node_modules/validator/lib/trim.js":
/*!********************************************!*\
  !*** ./node_modules/validator/lib/trim.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = trim;\n\nvar _rtrim = _interopRequireDefault(__webpack_require__(/*! ./rtrim */ \"./node_modules/validator/lib/rtrim.js\"));\n\nvar _ltrim = _interopRequireDefault(__webpack_require__(/*! ./ltrim */ \"./node_modules/validator/lib/ltrim.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction trim(str, chars) {\n  return (0, _rtrim.default)((0, _ltrim.default)(str, chars), chars);\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/trim.js?");

/***/ }),

/***/ "./node_modules/validator/lib/unescape.js":
/*!************************************************!*\
  !*** ./node_modules/validator/lib/unescape.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = unescape;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction unescape(str) {\n  (0, _assertString.default)(str);\n  return str.replace(/&amp;/g, '&').replace(/&quot;/g, '\"').replace(/&#x27;/g, \"'\").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#x2F;/g, '/').replace(/&#x5C;/g, '\\\\').replace(/&#96;/g, '`');\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/unescape.js?");

/***/ }),

/***/ "./node_modules/validator/lib/util/assertString.js":
/*!*********************************************************!*\
  !*** ./node_modules/validator/lib/util/assertString.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = assertString;\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction assertString(input) {\n  var isString = typeof input === 'string' || input instanceof String;\n\n  if (!isString) {\n    var invalidType;\n\n    if (input === null) {\n      invalidType = 'null';\n    } else {\n      invalidType = _typeof(input);\n\n      if (invalidType === 'object' && input.constructor && input.constructor.hasOwnProperty('name')) {\n        invalidType = input.constructor.name;\n      } else {\n        invalidType = \"a \".concat(invalidType);\n      }\n    }\n\n    throw new TypeError(\"Expected string but received \".concat(invalidType, \".\"));\n  }\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/util/assertString.js?");

/***/ }),

/***/ "./node_modules/validator/lib/util/includes.js":
/*!*****************************************************!*\
  !*** ./node_modules/validator/lib/util/includes.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar includes = function includes(arr, val) {\n  return arr.some(function (arrVal) {\n    return val === arrVal;\n  });\n};\n\nvar _default = includes;\nexports.default = _default;\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/util/includes.js?");

/***/ }),

/***/ "./node_modules/validator/lib/util/merge.js":
/*!**************************************************!*\
  !*** ./node_modules/validator/lib/util/merge.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = merge;\n\nfunction merge() {\n  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var defaults = arguments.length > 1 ? arguments[1] : undefined;\n\n  for (var key in defaults) {\n    if (typeof obj[key] === 'undefined') {\n      obj[key] = defaults[key];\n    }\n  }\n\n  return obj;\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/util/merge.js?");

/***/ }),

/***/ "./node_modules/validator/lib/util/toString.js":
/*!*****************************************************!*\
  !*** ./node_modules/validator/lib/util/toString.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = toString;\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction toString(input) {\n  if (_typeof(input) === 'object' && input !== null) {\n    if (typeof input.toString === 'function') {\n      input = input.toString();\n    } else {\n      input = '[object Object]';\n    }\n  } else if (input === null || typeof input === 'undefined' || isNaN(input) && !input.length) {\n    input = '';\n  }\n\n  return String(input);\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/util/toString.js?");

/***/ }),

/***/ "./node_modules/validator/lib/whitelist.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/lib/whitelist.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = whitelist;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction whitelist(str, chars) {\n  (0, _assertString.default)(str);\n  return str.replace(new RegExp(\"[^\".concat(chars, \"]+\"), 'g'), '');\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/whitelist.js?");

/***/ }),

/***/ "./wp-src/navtoggle.js":
/*!*****************************!*\
  !*** ./wp-src/navtoggle.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toggleNav = function toggleNav() {\n  document.querySelector('.nav').classList.toggle('show');\n};\n\ndocument.querySelector('.header__navtoggle').addEventListener('click', toggleNav);\ndocument.querySelector('.nav__closebtn').addEventListener('click', toggleNav);\n\n//# sourceURL=webpack:///./wp-src/navtoggle.js?");

/***/ }),

/***/ "./wp-src/register.js":
/*!****************************!*\
  !*** ./wp-src/register.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navtoggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navtoggle */ \"./wp-src/navtoggle.js\");\n/* harmony import */ var _navtoggle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_navtoggle__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! validator */ \"./node_modules/validator/index.js\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\ndocument.querySelector('#subbut').addEventListener('click', function (e) {\n  //Prevent default form submission\n  e.preventDefault();\n  var errs = 0; // errors count\n\n  var errMsgs = []; //  error messages \n\n  var errBox = document.querySelector('#errbox'); //error box\n\n  errBox.innerHTML = ''; //clear error box \n  // Get form field values\n\n  var fields = {\n    name: document.querySelector('#name').value.trim(),\n    email: document.querySelector('#email').value.trim(),\n    createPass: document.querySelector('#createPass').value,\n    confirmPass: document.querySelector('#confirmPass').value // Regular expressions that passwords require\n\n  };\n  var passwordRegs = {\n    caps: /[A-Z]/,\n    lowercase: /[a-z]/,\n    specialChar: /[$%^&*#@!-]/\n  };\n\n  var genError = function genError(message) {\n    errs++;\n    errMsgs.push(\"<p>\".concat(message, \"</p>\"));\n  }; //Check name length\n\n\n  if (fields.name.length < 2) {\n    genError('Please enter a name.');\n  } //Check if valid email\n\n\n  if (!validator__WEBPACK_IMPORTED_MODULE_1___default.a.isEmail(fields.email)) {\n    genError('Please enter a valid email address.');\n  } //Check if password length is lower than 8 characters\n\n\n  if (fields.createPass.length < 8) {\n    genError('Password must be at least 8 characters.');\n  } //Check if password has at least one capital letter\n\n\n  if (!passwordRegs.caps.test(fields.createPass)) {\n    genError('Password must contain at least one capital letter.');\n  } //check if password has at least one lowercase letter\n\n\n  if (!passwordRegs.lowercase.test(fields.createPass)) {\n    genError('Password must contain at least one lowercase letter');\n  } //check if password contains at least one specific, special character\n\n\n  if (!passwordRegs.specialChar.test(fields.createPass)) {\n    genError('Password must contain at least one of the following special characters: $%^&*#@!-');\n  } // Check if password matches confirm password\n\n\n  if (fields.createPass !== fields.confirmPass) {\n    genError('Passsword does not match confirm password.');\n  }\n\n  if (errs) {\n    for (var _i = 0, _errMsgs = errMsgs; _i < _errMsgs.length; _i++) {\n      var msg = _errMsgs[_i];\n      errBox.insertAdjacentHTML('beforeend', msg);\n    }\n  } else {\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/user/register', {\n      name: fields.name,\n      email: fields.email,\n      password: fields.createPass\n    }).then(function (res) {\n      var resData = res.data;\n\n      if (resData.error) {\n        errBox.innerHTML = resData.error;\n      } else if (resData.success) {\n        window.location.href = 'http://localhost:3001/';\n      }\n    })[\"catch\"](function (err) {\n      console.log(err);\n      errBox.innerHTML = err;\n    });\n  }\n});\n\n//# sourceURL=webpack:///./wp-src/register.js?");

/***/ })

/******/ });