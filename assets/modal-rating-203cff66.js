var ct=Object.defineProperty;var lt=(e,t,n)=>t in e?ct(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var R=(e,t,n)=>(lt(e,typeof t!="symbol"?t+"":t,n),n),ut=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var A=(e,t,n)=>(ut(e,t,"read from private field"),n?n.call(e):t.get(e)),ye=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)};(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const zn="/JS-team-project/assets/symbol-defs-6e526e43.svg";(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),r=()=>{const s=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!s),e.classList.toggle("is-open")};t.addEventListener("click",r),n.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",s=>{s.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))})})();const be=document.querySelector(".header-link-home"),ge=document.querySelector(".header-link-favorites");be.addEventListener("click",e=>{be.classList.remove("active-link")});ge.addEventListener("click",e=>{ge.classList.add("active-link")});function _e(){localStorage.getItem("theme")==="dark"?document.querySelector("html").classList.add("dark"):document.querySelector("html").classList.remove("dark")}document.querySelector(".checkbox-btn").addEventListener("change",e=>{e.preventDefault(),localStorage.getItem("theme")==="dark"?localStorage.removeItem("theme"):localStorage.setItem("theme","dark"),Promise.resolve().then(_e).catch(t=>{console.error(t)})});_e();function qe(e,t){return function(){return e.apply(t,arguments)}}const{toString:dt}=Object.prototype,{getPrototypeOf:ue}=Object,W=(e=>t=>{const n=dt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),N=e=>(e=e.toLowerCase(),t=>W(t)===e),K=e=>t=>typeof t===e,{isArray:D}=Array,U=K("undefined");function ft(e){return e!==null&&!U(e)&&e.constructor!==null&&!U(e.constructor)&&w(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ue=N("ArrayBuffer");function pt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ue(e.buffer),t}const ht=K("string"),w=K("function"),je=K("number"),G=e=>e!==null&&typeof e=="object",mt=e=>e===!0||e===!1,$=e=>{if(W(e)!=="object")return!1;const t=ue(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},yt=N("Date"),bt=N("File"),gt=N("Blob"),Et=N("FileList"),wt=e=>G(e)&&w(e.pipe),St=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||w(e.append)&&((t=W(e))==="formdata"||t==="object"&&w(e.toString)&&e.toString()==="[object FormData]"))},Rt=N("URLSearchParams"),At=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function j(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),D(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let l;for(r=0;r<i;r++)l=o[r],t.call(null,e[l],l,e)}}function Ie(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Me=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),He=e=>!U(e)&&e!==Me;function oe(){const{caseless:e}=He(this)&&this||{},t={},n=(r,s)=>{const o=e&&Ie(t,s)||s;$(t[o])&&$(r)?t[o]=oe(t[o],r):$(r)?t[o]=oe({},r):D(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&j(arguments[r],n);return t}const Ot=(e,t,n,{allOwnKeys:r}={})=>(j(t,(s,o)=>{n&&w(s)?e[o]=qe(s,n):e[o]=s},{allOwnKeys:r}),e),Tt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Nt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},xt=(e,t,n,r)=>{let s,o,i;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&ue(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Lt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Pt=e=>{if(!e)return null;if(D(e))return e;let t=e.length;if(!je(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Ct=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ue(Uint8Array)),kt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Ft=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Dt=N("HTMLFormElement"),Bt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Ee=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),_t=N("RegExp"),$e=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};j(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},qt=e=>{$e(e,(t,n)=>{if(w(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(w(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Ut=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return D(e)?r(e):r(String(e).split(t)),n},jt=()=>{},It=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Z="abcdefghijklmnopqrstuvwxyz",we="0123456789",ve={DIGIT:we,ALPHA:Z,ALPHA_DIGIT:Z+Z.toUpperCase()+we},Mt=(e=16,t=ve.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Ht(e){return!!(e&&w(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const $t=e=>{const t=new Array(10),n=(r,s)=>{if(G(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=D(r)?[]:{};return j(r,(i,l)=>{const f=n(i,s+1);!U(f)&&(o[l]=f)}),t[s]=void 0,o}}return r};return n(e,0)},vt=N("AsyncFunction"),zt=e=>e&&(G(e)||w(e))&&w(e.then)&&w(e.catch),a={isArray:D,isArrayBuffer:Ue,isBuffer:ft,isFormData:St,isArrayBufferView:pt,isString:ht,isNumber:je,isBoolean:mt,isObject:G,isPlainObject:$,isUndefined:U,isDate:yt,isFile:bt,isBlob:gt,isRegExp:_t,isFunction:w,isStream:wt,isURLSearchParams:Rt,isTypedArray:Ct,isFileList:Et,forEach:j,merge:oe,extend:Ot,trim:At,stripBOM:Tt,inherits:Nt,toFlatObject:xt,kindOf:W,kindOfTest:N,endsWith:Lt,toArray:Pt,forEachEntry:kt,matchAll:Ft,isHTMLForm:Dt,hasOwnProperty:Ee,hasOwnProp:Ee,reduceDescriptors:$e,freezeMethods:qt,toObjectSet:Ut,toCamelCase:Bt,noop:jt,toFiniteNumber:It,findKey:Ie,global:Me,isContextDefined:He,ALPHABET:ve,generateString:Mt,isSpecCompliantForm:Ht,toJSONObject:$t,isAsyncFn:vt,isThenable:zt};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ze=m.prototype,Je={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Je[e]={value:e}});Object.defineProperties(m,Je);Object.defineProperty(ze,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(ze);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},l=>l!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Jt=null;function ie(e){return a.isPlainObject(e)||a.isArray(e)}function Ve(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Se(e,t,n){return e?e.concat(t).map(function(s,o){return s=Ve(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Vt(e){return a.isArray(e)&&!e.some(ie)}const Wt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function X(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,x){return!a.isUndefined(x[h])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function c(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!f&&a.isBlob(d))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?f&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function u(d,h,x){let S=d;if(d&&!x&&typeof d=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&Vt(d)||(a.isFileList(d)||a.endsWith(h,"[]"))&&(S=a.toArray(d)))return h=Ve(h),S.forEach(function(M,at){!(a.isUndefined(M)||M===null)&&t.append(i===!0?Se([h],at,o):i===null?h:h+"[]",c(M))}),!1}return ie(d)?!0:(t.append(Se(x,h,o),c(d)),!1)}const p=[],g=Object.assign(Wt,{defaultVisitor:u,convertValue:c,isVisitable:ie});function y(d,h){if(!a.isUndefined(d)){if(p.indexOf(d)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(d),a.forEach(d,function(S,C){(!(a.isUndefined(S)||S===null)&&s.call(t,S,a.isString(C)?C.trim():C,h,g))===!0&&y(S,h?h.concat(C):[C])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function Re(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function de(e,t){this._pairs=[],e&&X(e,this,t)}const We=de.prototype;We.append=function(t,n){this._pairs.push([t,n])};We.toString=function(t){const n=t?function(r){return t.call(this,r,Re)}:Re;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Kt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ke(e,t,n){if(!t)return e;const r=n&&n.encode||Kt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new de(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Gt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ae=Gt,Ge={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Xt=typeof URLSearchParams<"u"?URLSearchParams:de,Qt=typeof FormData<"u"?FormData:null,Yt=typeof Blob<"u"?Blob:null,Zt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),en=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),T={isBrowser:!0,classes:{URLSearchParams:Xt,FormData:Qt,Blob:Yt},isStandardBrowserEnv:Zt,isStandardBrowserWebWorkerEnv:en,protocols:["http","https","file","blob","url","data"]};function tn(e,t){return X(e,new T.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return T.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function nn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function rn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Xe(e){function t(n,r,s,o){let i=n[o++];const l=Number.isFinite(+i),f=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!l):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=rn(s[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(nn(r),s,n,0)}),n}return null}const sn={"Content-Type":void 0};function on(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Q={transitional:Ge,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Xe(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return tn(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return X(l?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),on(t)):t}],transformResponse:[function(t){const n=this.transitional||Q.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?m.from(l,m.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:T.classes.FormData,Blob:T.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){Q.headers[t]={}});a.forEach(["post","put","patch"],function(t){Q.headers[t]=a.merge(sn)});const fe=Q,an=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),cn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&an[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Oe=Symbol("internals");function B(e){return e&&String(e).trim().toLowerCase()}function v(e){return e===!1||e==null?e:a.isArray(e)?e.map(v):String(e)}function ln(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const un=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ee(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function dn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function fn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class Y{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(l,f,c){const u=B(f);if(!u)throw new Error("header name must be a non-empty string");const p=a.findKey(s,u);(!p||s[p]===void 0||c===!0||c===void 0&&s[p]!==!1)&&(s[p||f]=v(l))}const i=(l,f)=>a.forEach(l,(c,u)=>o(c,u,f));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!un(t)?i(cn(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=B(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return ln(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=B(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ee(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=B(i),i){const l=a.findKey(r,i);l&&(!n||ee(r,r[l],l,n))&&(delete r[l],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||ee(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=v(s),delete n[o];return}const l=t?dn(o):String(o).trim();l!==o&&delete n[o],n[l]=v(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Oe]=this[Oe]={accessors:{}}).accessors,s=this.prototype;function o(i){const l=B(i);r[l]||(fn(s,i),r[l]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}Y.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(Y.prototype);a.freezeMethods(Y);const L=Y;function te(e,t){const n=this||fe,r=t||n,s=L.from(r.headers);let o=r.data;return a.forEach(e,function(l){o=l.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Qe(e){return!!(e&&e.__CANCEL__)}function I(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(I,m,{__CANCEL__:!0});function pn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const hn=T.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,l){const f=[];f.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&f.push("expires="+new Date(s).toGMTString()),a.isString(o)&&f.push("path="+o),a.isString(i)&&f.push("domain="+i),l===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function mn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function yn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ye(e,t){return e&&!mn(t)?yn(e,t):t}const bn=T.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const l=a.isString(i)?s(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function gn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function En(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const c=Date.now(),u=r[o];i||(i=c),n[s]=f,r[s]=c;let p=o,g=0;for(;p!==s;)g+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const y=u&&c-u;return y?Math.round(g*1e3/y):void 0}}function Te(e,t){let n=0;const r=En(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,l=o-n,f=r(l),c=o<=i;n=o;const u={loaded:o,total:i,progress:i?o/i:void 0,bytes:l,rate:f||void 0,estimated:f&&i&&c?(i-o)/f:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const wn=typeof XMLHttpRequest<"u",Sn=wn&&function(e){return new Promise(function(n,r){let s=e.data;const o=L.from(e.headers).normalize(),i=e.responseType;let l;function f(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}a.isFormData(s)&&(T.isStandardBrowserEnv||T.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",d=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(y+":"+d))}const u=Ye(e.baseURL,e.url);c.open(e.method.toUpperCase(),Ke(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function p(){if(!c)return;const y=L.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};pn(function(S){n(S),f()},function(S){r(S),f()},h),c=null}if("onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let d=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||Ge;e.timeoutErrorMessage&&(d=e.timeoutErrorMessage),r(new m(d,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},T.isStandardBrowserEnv){const y=(e.withCredentials||bn(u))&&e.xsrfCookieName&&hn.read(e.xsrfCookieName);y&&o.set(e.xsrfHeaderName,y)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(d,h){c.setRequestHeader(h,d)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Te(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Te(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=y=>{c&&(r(!y||y.type?new I(null,e,c):y),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const g=gn(u);if(g&&T.protocols.indexOf(g)===-1){r(new m("Unsupported protocol "+g+":",m.ERR_BAD_REQUEST,e));return}c.send(s||null)})},z={http:Jt,xhr:Sn};a.forEach(z,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Rn={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?z[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(z,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:z};function ne(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new I(null,e)}function Ne(e){return ne(e),e.headers=L.from(e.headers),e.data=te.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Rn.getAdapter(e.adapter||fe.adapter)(e).then(function(r){return ne(e),r.data=te.call(e,e.transformResponse,r),r.headers=L.from(r.headers),r},function(r){return Qe(r)||(ne(e),r&&r.response&&(r.response.data=te.call(e,e.transformResponse,r.response),r.response.headers=L.from(r.response.headers))),Promise.reject(r)})}const xe=e=>e instanceof L?e.toJSON():e;function F(e,t){t=t||{};const n={};function r(c,u,p){return a.isPlainObject(c)&&a.isPlainObject(u)?a.merge.call({caseless:p},c,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(c,u,p){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c,p)}else return r(c,u,p)}function o(c,u){if(!a.isUndefined(u))return r(void 0,u)}function i(c,u){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function l(c,u,p){if(p in t)return r(c,u);if(p in e)return r(void 0,c)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(c,u)=>s(xe(c),xe(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const p=f[u]||s,g=p(e[u],t[u],u);a.isUndefined(g)&&p!==l||(n[u]=g)}),n}const Ze="1.4.0",pe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{pe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Le={};pe.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Ze+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,l)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Le[i]&&(Le[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,l):!0}};function An(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const l=e[o],f=l===void 0||i(l,o,e);if(f!==!0)throw new m("option "+o+" must be "+f,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const ae={assertOptions:An,validators:pe},P=ae.validators;class V{constructor(t){this.defaults=t,this.interceptors={request:new Ae,response:new Ae}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=F(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&ae.assertOptions(r,{silentJSONParsing:P.transitional(P.boolean),forcedJSONParsing:P.transitional(P.boolean),clarifyTimeoutError:P.transitional(P.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:ae.assertOptions(s,{encode:P.function,serialize:P.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&a.merge(o.common,o[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete o[d]}),n.headers=L.concat(i,o);const l=[];let f=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(f=f&&h.synchronous,l.unshift(h.fulfilled,h.rejected))});const c=[];this.interceptors.response.forEach(function(h){c.push(h.fulfilled,h.rejected)});let u,p=0,g;if(!f){const d=[Ne.bind(this),void 0];for(d.unshift.apply(d,l),d.push.apply(d,c),g=d.length,u=Promise.resolve(n);p<g;)u=u.then(d[p++],d[p++]);return u}g=l.length;let y=n;for(p=0;p<g;){const d=l[p++],h=l[p++];try{y=d(y)}catch(x){h.call(this,x);break}}try{u=Ne.call(this,y)}catch(d){return Promise.reject(d)}for(p=0,g=c.length;p<g;)u=u.then(c[p++],c[p++]);return u}getUri(t){t=F(this.defaults,t);const n=Ye(t.baseURL,t.url);return Ke(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){V.prototype[t]=function(n,r){return this.request(F(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,l){return this.request(F(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}V.prototype[t]=n(),V.prototype[t+"Form"]=n(!0)});const J=V;class he{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(l=>{r.subscribe(l),o=l}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,l){r.reason||(r.reason=new I(o,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new he(function(s){t=s}),cancel:t}}}const On=he;function Tn(e){return function(n){return e.apply(null,n)}}function Nn(e){return a.isObject(e)&&e.isAxiosError===!0}const ce={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ce).forEach(([e,t])=>{ce[t]=e});const xn=ce;function et(e){const t=new J(e),n=qe(J.prototype.request,t);return a.extend(n,J.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return et(F(e,s))},n}const b=et(fe);b.Axios=J;b.CanceledError=I;b.CancelToken=On;b.isCancel=Qe;b.VERSION=Ze;b.toFormData=X;b.AxiosError=m;b.Cancel=b.CanceledError;b.all=function(t){return Promise.all(t)};b.spread=Tn;b.isAxiosError=Nn;b.mergeConfig=F;b.AxiosHeaders=L;b.formToJSON=e=>Xe(a.isHTMLForm(e)?new FormData(e):e);b.HttpStatusCode=xn;b.default=b;const O=b;var E;class tt{constructor(){ye(this,E,"https://tasty-treats-backend.p.goit.global/api/");R(this,"page",1);R(this,"limit",9);R(this,"category","");R(this,"title","");R(this,"time","");R(this,"area","");R(this,"ingredient","");R(this,"recipeID","");R(this,"userRatings",{rate:5,email:""});R(this,"userOrder",{})}searchMasterClass(){return O.get(`${A(this,E)}events`)}searchListCategories(){return O.get(`${A(this,E)}categories`)}searchFilterRecipes(){const t=Pe(6,8,9);return O.get(`${A(this,E)}recipes?category=${this.category}&page=${this.page}&limit=${t}&time=${this.time}&area=${this.area}&ingredient=${this.ingredient}&title=${this.title}`)}searchAllRecipes(){const t=Pe(6,8,9);return O.get(`${A(this,E)}recipes?page=${this.page}&limit=${t}`)}searchPopularRecipes(){return O.get(`${A(this,E)}recipes/popular`)}searchRecipeID(){return O.get(`${A(this,E)}recipes/${this.recipeID}`)}searchingredients(){return O.get(`${A(this,E)}ingredients`)}searchAreas(){return O.get(`${A(this,E)}areas`)}passRating(){return O.patch(`${A(this,E)}recipes/${this.recipeID}/rating`,this.userRatings)}passOrder(){return O.post(`${A(this,E)}orders/add`,this.userOrder)}}E=new WeakMap;function Pe(e,t,n){return window.innerWidth<768?e:window.innerWidth>=768&&window.innerWidth<1280?t:n}const re=document.querySelector(".filters-box-parent"),se=document.querySelector(".popular-box"),_=document.querySelector(".modal-recipe-backdrop"),Ln=document.querySelector(".ab-exit-btn"),H=new tt,Pn=document.querySelector(".ab-dish-name"),Ce=document.querySelector(".ab-video"),Cn=document.querySelector(".ab-star-rating-number"),kn=document.querySelector(".ab-cooking-time"),ke=document.querySelector(".ab-ingredient-list"),Fe=document.querySelector(".ab-hashtag-list"),Fn=document.querySelector(".ab-recipe-description"),k=document.querySelector(".ab-star-container");document.querySelector(".ab-recipe-description").closest(".ab-recipe-description");function Dn(e){const n=`https://www.youtube.com/embed/${e.split("=")[1]}`;Ce.src!==n&&(Ce.src=n)}function Bn(e){ke.innerHTML="",e.forEach(t=>{ke.insertAdjacentHTML("beforeend",`<li class="ab-ingredient">
        <p class="ab-ingredient-name">${t.name}</p>
        <p class="ab-ingredient-amount">${t.measure}</p>
      </li>`)})}function _n(e){Fe.innerHTML="",e[0]!==""&&e.forEach(t=>{Fe.insertAdjacentHTML("beforeend",`<li class="ab-recipe-hashtag">#${t}</li>`)})}function qn(e){const t=Math.floor(e);for(let n=0;n<k.children.length;n++)k.children[n].removeAttribute("fill");for(let n=0;n<k.children.length-t;n++)k.children[k.children.length-1-n].setAttribute("fill","rgba(5, 5, 5, 0.5)");for(let n=0;n<t;n++)k.children[n].setAttribute("fill","rgba(238, 161, 12, 1)")}function De(e,t){_.toggleAttribute("data-hidden"),document.body.style.overflow="hidden",e.target.parentNode.parentNode.id===""?t!==null?H.recipeID=t.id:H.recipeID=e.target.parentNode.parentNode.parentNode.id:H.recipeID=e.target.parentNode.parentNode.id,H.searchRecipeID().then(n=>{e.target.parentNode.parentNode.id===""?t!==null?_.id=t.id:_.id=e.target.parentNode.parentNode.parentNode.id:_.id=e.target.parentNode.parentNode.id;const r=n.data;Pn.textContent=r.title,Dn(r.youtube),Cn.textContent=r.rating,kn.textContent=`${r.time} min`,Bn(r.ingredients),_n(r.tags),Fn.textContent=r.instructions,qn(r.rating)}).catch(n=>{console.log(n)})}function nt(e){const t=e.target.closest(".popular-wrapper");(e.target.classList.contains("filters-btn-recipe")||t!==null)&&De(e,t)}re==null||re.addEventListener("click",nt);se==null||se.addEventListener("click",e=>{console.log("mama ya gey"),nt(e)});const Un=document.querySelector(".ab-give-a-rating"),rt=document.querySelector(".add-rating-modal"),jn=document.querySelector(".modal-recipe");function st(){rt.toggleAttribute("data-hidden"),jn.toggleAttribute("modal-margin")}function ot(){_.toggleAttribute("data-hidden"),document.body.style.overflow="auto",rt.hasAttribute("data-hidden")||st()}Un.addEventListener("click",e=>{st()});Ln.addEventListener("click",e=>{ot()});document.addEventListener("keydown",e=>{e.key==="Escape"&&ot()});const me=document.querySelector(".add-rating-form"),Be=document.querySelector(".js-rating-choosed"),In=me.querySelectorAll("input[name='rating']"),q=new tt,Mn=document.querySelector(".add-rating-email"),le=document.querySelector(".add-rating-modal");In.forEach(e=>{e.addEventListener("change",Hn)});function Hn(){const e=me.querySelector("input[name='rating']:checked").value;Be.textContent=e+".0",q.userRatings.rate=Number(Be.textContent)}const it=document.querySelector(".modal-recipe");me.addEventListener("submit",e=>{e.preventDefault(),q.userRatings.email=Mn.value,q.recipeID=le.parentElement.id,console.log(q),q.passRating(),le.toggleAttribute("data-hidden"),it.toggleAttribute("modal-margin")});const $n=document.querySelector(".add-rating-close-btn");$n.addEventListener("click",e=>{le.toggleAttribute("data-hidden"),it.toggleAttribute("modal-margin")});export{tt as B,O as a,nt as h,zn as l};
