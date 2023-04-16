"use strict";
exports.id = 961;
exports.ids = [961];
exports.modules = {

/***/ 6798:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _asyncToGenerator;
    }
}));
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}


/***/ }),

/***/ 8160:
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createAsyncLocalStorage = createAsyncLocalStorage;
class FakeAsyncLocalStorage {
    disable() {
        throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
    }
    getStore() {
        // This fake implementation of AsyncLocalStorage always returns `undefined`.
        return undefined;
    }
    run() {
        throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
    }
    exit() {
        throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
    }
    enterWith() {
        throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
    }
}
function createAsyncLocalStorage() {
    if (globalThis.AsyncLocalStorage) {
        return new globalThis.AsyncLocalStorage();
    }
    return new FakeAsyncLocalStorage();
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=async-local-storage.js.map


/***/ }),

/***/ 5815:
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.DYNAMIC_ERROR_CODE = void 0;
const DYNAMIC_ERROR_CODE = "DYNAMIC_SERVER_USAGE";
exports.DYNAMIC_ERROR_CODE = DYNAMIC_ERROR_CODE;
class DynamicServerError extends Error {
    constructor(type){
        super(`Dynamic server usage: ${type}`);
        this.digest = DYNAMIC_ERROR_CODE;
    }
}
exports.DynamicServerError = DynamicServerError;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hooks-server-context.js.map


/***/ }),

/***/ 5120:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.requestAsyncStorage = void 0;
var _asyncLocalStorage = __webpack_require__(8160);
const requestAsyncStorage = (0, _asyncLocalStorage).createAsyncLocalStorage();
exports.requestAsyncStorage = requestAsyncStorage;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-async-storage.js.map


/***/ }),

/***/ 9282:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.staticGenerationBailout = void 0;
var _hooksServerContext = __webpack_require__(5815);
var _staticGenerationAsyncStorage = __webpack_require__(1839);
class StaticGenBailoutError extends Error {
    constructor(...args){
        super(...args);
        this.code = "NEXT_STATIC_GEN_BAILOUT";
    }
}
const staticGenerationBailout = (reason, opts)=>{
    const staticGenerationStore = _staticGenerationAsyncStorage.staticGenerationAsyncStorage.getStore();
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.forceStatic) {
        return true;
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.dynamicShouldError) {
        const { dynamic ="error" , link  } = opts || {};
        const suffix = link ? ` See more info here: ${link}` : "";
        throw new StaticGenBailoutError(`Page with \`dynamic = "${dynamic}"\` couldn't be rendered statically because it used \`${reason}\`.${suffix}`);
    }
    if (staticGenerationStore) {
        staticGenerationStore.revalidate = 0;
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.isStaticGeneration) {
        const err = new _hooksServerContext.DynamicServerError(reason);
        staticGenerationStore.dynamicUsageDescription = reason;
        staticGenerationStore.dynamicUsageStack = err.stack;
        throw err;
    }
    return false;
};
exports.staticGenerationBailout = staticGenerationBailout;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-bailout.js.map


/***/ }),

/***/ 2523:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.WEBPACK_LAYERS = exports.SERVER_RUNTIME = exports.ESLINT_PROMPT_VALUES = exports.ESLINT_DEFAULT_DIRS_WITH_APP = exports.ESLINT_DEFAULT_DIRS = exports.SSG_FALLBACK_EXPORT_ERROR = exports.NON_STANDARD_NODE_ENV = exports.GSSP_COMPONENT_MEMBER_ERROR = exports.UNSTABLE_REVALIDATE_RENAME_ERROR = exports.GSSP_NO_RETURNED_VALUE = exports.GSP_NO_RETURNED_VALUE = exports.SERVER_PROPS_EXPORT_ERROR = exports.STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = exports.SERVER_PROPS_SSG_CONFLICT = exports.SERVER_PROPS_GET_INIT_PROPS_CONFLICT = exports.SSG_GET_INITIAL_PROPS_CONFLICT = exports.PUBLIC_DIR_MIDDLEWARE_CONFLICT = exports.RSC_ACTION_PROXY_ALIAS = exports.RSC_MOD_REF_PROXY_ALIAS = exports.APP_DIR_ALIAS = exports.ROOT_DIR_ALIAS = exports.DOT_NEXT_ALIAS = exports.PAGES_DIR_ALIAS = exports.INSTRUMENTATION_HOOKS_LOCATION_REGEXP = exports.INSTRUMENTATION_HOOK_FILENAME = exports.MIDDLEWARE_LOCATION_REGEXP = exports.MIDDLEWARE_FILENAME = exports.CACHE_ONE_YEAR = exports.NEXT_QUERY_PARAM_PREFIX = void 0;
const NEXT_QUERY_PARAM_PREFIX = "nextParam";
exports.NEXT_QUERY_PARAM_PREFIX = NEXT_QUERY_PARAM_PREFIX;
const CACHE_ONE_YEAR = 31536000;
exports.CACHE_ONE_YEAR = CACHE_ONE_YEAR;
const MIDDLEWARE_FILENAME = "middleware";
exports.MIDDLEWARE_FILENAME = MIDDLEWARE_FILENAME;
const MIDDLEWARE_LOCATION_REGEXP = `(?:src/)?${MIDDLEWARE_FILENAME}`;
exports.MIDDLEWARE_LOCATION_REGEXP = MIDDLEWARE_LOCATION_REGEXP;
const INSTRUMENTATION_HOOK_FILENAME = "instrumentation";
exports.INSTRUMENTATION_HOOK_FILENAME = INSTRUMENTATION_HOOK_FILENAME;
const INSTRUMENTATION_HOOKS_LOCATION_REGEXP = `(?:src/)?${INSTRUMENTATION_HOOK_FILENAME}`;
exports.INSTRUMENTATION_HOOKS_LOCATION_REGEXP = INSTRUMENTATION_HOOKS_LOCATION_REGEXP;
const PAGES_DIR_ALIAS = "private-next-pages";
exports.PAGES_DIR_ALIAS = PAGES_DIR_ALIAS;
const DOT_NEXT_ALIAS = "private-dot-next";
exports.DOT_NEXT_ALIAS = DOT_NEXT_ALIAS;
const ROOT_DIR_ALIAS = "private-next-root-dir";
exports.ROOT_DIR_ALIAS = ROOT_DIR_ALIAS;
const APP_DIR_ALIAS = "private-next-app-dir";
exports.APP_DIR_ALIAS = APP_DIR_ALIAS;
const RSC_MOD_REF_PROXY_ALIAS = "next/dist/build/webpack/loaders/next-flight-loader/module-proxy";
exports.RSC_MOD_REF_PROXY_ALIAS = RSC_MOD_REF_PROXY_ALIAS;
const RSC_ACTION_PROXY_ALIAS = "private-next-rsc-action-proxy";
exports.RSC_ACTION_PROXY_ALIAS = RSC_ACTION_PROXY_ALIAS;
const PUBLIC_DIR_MIDDLEWARE_CONFLICT = `You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`;
exports.PUBLIC_DIR_MIDDLEWARE_CONFLICT = PUBLIC_DIR_MIDDLEWARE_CONFLICT;
const SSG_GET_INITIAL_PROPS_CONFLICT = `You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`;
exports.SSG_GET_INITIAL_PROPS_CONFLICT = SSG_GET_INITIAL_PROPS_CONFLICT;
const SERVER_PROPS_GET_INIT_PROPS_CONFLICT = `You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`;
exports.SERVER_PROPS_GET_INIT_PROPS_CONFLICT = SERVER_PROPS_GET_INIT_PROPS_CONFLICT;
const SERVER_PROPS_SSG_CONFLICT = `You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`;
exports.SERVER_PROPS_SSG_CONFLICT = SERVER_PROPS_SSG_CONFLICT;
const STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = `can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`;
exports.STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR;
const SERVER_PROPS_EXPORT_ERROR = `pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`;
exports.SERVER_PROPS_EXPORT_ERROR = SERVER_PROPS_EXPORT_ERROR;
const GSP_NO_RETURNED_VALUE = "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?";
exports.GSP_NO_RETURNED_VALUE = GSP_NO_RETURNED_VALUE;
const GSSP_NO_RETURNED_VALUE = "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?";
exports.GSSP_NO_RETURNED_VALUE = GSSP_NO_RETURNED_VALUE;
const UNSTABLE_REVALIDATE_RENAME_ERROR = "The `unstable_revalidate` property is available for general use.\n" + "Please use `revalidate` instead.";
exports.UNSTABLE_REVALIDATE_RENAME_ERROR = UNSTABLE_REVALIDATE_RENAME_ERROR;
const GSSP_COMPONENT_MEMBER_ERROR = `can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`;
exports.GSSP_COMPONENT_MEMBER_ERROR = GSSP_COMPONENT_MEMBER_ERROR;
const NON_STANDARD_NODE_ENV = `You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`;
exports.NON_STANDARD_NODE_ENV = NON_STANDARD_NODE_ENV;
const SSG_FALLBACK_EXPORT_ERROR = `Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`;
exports.SSG_FALLBACK_EXPORT_ERROR = SSG_FALLBACK_EXPORT_ERROR;
const ESLINT_DEFAULT_DIRS = [
    "pages",
    "components",
    "lib",
    "src"
];
exports.ESLINT_DEFAULT_DIRS = ESLINT_DEFAULT_DIRS;
const ESLINT_DEFAULT_DIRS_WITH_APP = [
    "app",
    ...ESLINT_DEFAULT_DIRS
];
exports.ESLINT_DEFAULT_DIRS_WITH_APP = ESLINT_DEFAULT_DIRS_WITH_APP;
const ESLINT_PROMPT_VALUES = [
    {
        title: "Strict",
        recommended: true,
        config: {
            extends: "next/core-web-vitals"
        }
    },
    {
        title: "Base",
        config: {
            extends: "next"
        }
    },
    {
        title: "Cancel",
        config: null
    }
];
exports.ESLINT_PROMPT_VALUES = ESLINT_PROMPT_VALUES;
const SERVER_RUNTIME = {
    edge: "edge",
    experimentalEdge: "experimental-edge",
    nodejs: "nodejs"
};
exports.SERVER_RUNTIME = SERVER_RUNTIME;
const WEBPACK_LAYERS = {
    shared: "sc_shared",
    server: "sc_server",
    client: "sc_client",
    action: "sc_action",
    api: "api",
    middleware: "middleware",
    edgeAsset: "edge-asset",
    appClient: "app-client"
};
exports.WEBPACK_LAYERS = WEBPACK_LAYERS; //# sourceMappingURL=constants.js.map


/***/ }),

/***/ 5490:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.detectDomainLocale = detectDomainLocale;
function detectDomainLocale(domainItems, hostname, detectedLocale) {
    if (!domainItems) return;
    if (detectedLocale) {
        detectedLocale = detectedLocale.toLowerCase();
    }
    for (const item of domainItems){
        var ref, ref1;
        // remove port if present
        const domainHostname = (ref = item.domain) == null ? void 0 : ref.split(":")[0].toLowerCase();
        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((ref1 = item.locales) == null ? void 0 : ref1.some((locale)=>locale.toLowerCase() === detectedLocale))) {
            return item;
        }
    }
} //# sourceMappingURL=detect-domain-locale.js.map


/***/ }),

/***/ 9959:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.normalizeLocalePath = normalizeLocalePath;
function normalizeLocalePath(pathname, locales) {
    let detectedLocale;
    // first item will be empty string from splitting at first char
    const pathnameParts = pathname.split("/");
    (locales || []).some((locale)=>{
        if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
            detectedLocale = locale;
            pathnameParts.splice(1, 1);
            pathname = pathnameParts.join("/") || "/";
            return true;
        }
        return false;
    });
    return {
        pathname,
        detectedLocale
    };
} //# sourceMappingURL=normalize-locale-path.js.map


/***/ }),

/***/ 8454:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.removeTrailingSlash = removeTrailingSlash;
function removeTrailingSlash(route) {
    return route.replace(/\/$/, "") || "/";
} //# sourceMappingURL=remove-trailing-slash.js.map


/***/ }),

/***/ 8281:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.normalizeRepeatedSlashes = normalizeRepeatedSlashes;
exports.loadGetInitialProps = loadGetInitialProps;
exports.ST = exports.SP = exports.isAbsoluteUrl = exports.WEB_VITALS = void 0;
var _async_to_generator = (__webpack_require__(6798)/* ["default"] */ .Z);
const WEB_VITALS = [
    "CLS",
    "FCP",
    "FID",
    "INP",
    "LCP",
    "TTFB"
];
exports.WEB_VITALS = WEB_VITALS;
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
exports.isAbsoluteUrl = isAbsoluteUrl;
function getLocationOrigin() {
    const { protocol , hostname , port  } = window.location;
    return `${protocol}//${hostname}${port ? ":" + port : ""}`;
}
function getURL() {
    const { href  } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === "string" ? Component : Component.displayName || Component.name || "Unknown";
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split("?");
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, "/").replace(/\/\/+/g, "/") + (urlParts[1] ? `?${urlParts.slice(1).join("?")}` : "");
}
function loadGetInitialProps(App, ctx) {
    return _loadGetInitialProps.apply(this, arguments);
}
function _loadGetInitialProps() {
    _loadGetInitialProps = _async_to_generator(function*(App, ctx) {
        if (false) { var ref; }
        // when called from _app `ctx` is nested in `ctx`
        const res = ctx.res || ctx.ctx && ctx.ctx.res;
        if (!App.getInitialProps) {
            if (ctx.ctx && ctx.Component) {
                // @ts-ignore pageProps default
                return {
                    pageProps: yield loadGetInitialProps(ctx.Component, ctx.ctx)
                };
            }
            return {};
        }
        const props = yield App.getInitialProps(ctx);
        if (res && isResSent(res)) {
            return props;
        }
        if (!props) {
            const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
            throw new Error(message);
        }
        if (false) {}
        return props;
    });
    return _loadGetInitialProps.apply(this, arguments);
}
const SP = typeof performance !== "undefined";
exports.SP = SP;
const ST = SP && [
    "mark",
    "measure",
    "getEntriesByName"
].every((method)=>typeof performance[method] === "function");
exports.ST = ST;
class DecodeError extends Error {
}
exports.DecodeError = DecodeError;
class NormalizeError extends Error {
}
exports.NormalizeError = NormalizeError;
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = "ENOENT";
        this.name = "PageNotFoundError";
        this.message = `Cannot find module for page: ${page}`;
    }
}
exports.PageNotFoundError = PageNotFoundError;
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
exports.MissingStaticPage = MissingStaticPage;
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = "ENOENT";
        this.message = `Cannot find the middleware module`;
    }
}
exports.MiddlewareNotFoundError = MiddlewareNotFoundError; //# sourceMappingURL=utils.js.map


/***/ }),

/***/ 211:
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createAsyncLocalStorage = createAsyncLocalStorage;
class FakeAsyncLocalStorage {
    disable() {
        throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
    }
    getStore() {
        // This fake implementation of AsyncLocalStorage always returns `undefined`.
        return undefined;
    }
    run() {
        throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
    }
    exit() {
        throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
    }
    enterWith() {
        throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
    }
}
function createAsyncLocalStorage() {
    if (globalThis.AsyncLocalStorage) {
        return new globalThis.AsyncLocalStorage();
    }
    return new FakeAsyncLocalStorage();
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=async-local-storage.js.map


/***/ }),

/***/ 1839:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.staticGenerationAsyncStorage = void 0;
var _asyncLocalStorage = __webpack_require__(211);
const staticGenerationAsyncStorage = (0, _asyncLocalStorage).createAsyncLocalStorage();
exports.staticGenerationAsyncStorage = staticGenerationAsyncStorage;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-async-storage.js.map


/***/ })

};
;