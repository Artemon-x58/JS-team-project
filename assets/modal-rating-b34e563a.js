var st=Object.defineProperty;var ot=(e,t,n)=>t in e?st(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var R=(e,t,n)=>(ot(e,typeof t!="symbol"?t+"":t,n),n),it=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var A=(e,t,n)=>(it(e,t,"read from private field"),n?n.call(e):t.get(e)),me=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)};(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),r=()=>{const s=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!s),e.classList.toggle("is-open")};t.addEventListener("click",r),n.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",s=>{s.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))})})();const ye=document.querySelector(".header-link-home"),be=document.querySelector(".header-link-favorites");ye.addEventListener("click",e=>{ye.classList.remove("active-link")});be.addEventListener("click",e=>{be.classList.add("active-link")});function ke(e,t){return function(){return e.apply(t,arguments)}}const{toString:at}=Object.prototype,{getPrototypeOf:ue}=Object,V=(e=>t=>{const n=at.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),T=e=>(e=e.toLowerCase(),t=>V(t)===e),W=e=>t=>typeof t===e,{isArray:k}=Array,q=W("undefined");function ct(e){return e!==null&&!q(e)&&e.constructor!==null&&!q(e.constructor)&&w(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Be=T("ArrayBuffer");function ut(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Be(e.buffer),t}const lt=W("string"),w=W("function"),_e=W("number"),K=e=>e!==null&&typeof e=="object",dt=e=>e===!0||e===!1,H=e=>{if(V(e)!=="object")return!1;const t=ue(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ft=T("Date"),pt=T("File"),ht=T("Blob"),mt=T("FileList"),yt=e=>K(e)&&w(e.pipe),bt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||w(e.append)&&((t=V(e))==="formdata"||t==="object"&&w(e.toString)&&e.toString()==="[object FormData]"))},gt=T("URLSearchParams"),Et=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function j(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),k(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let u;for(r=0;r<i;r++)u=o[r],t.call(null,e[u],u,e)}}function Ue(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const qe=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),je=e=>!q(e)&&e!==qe;function se(){const{caseless:e}=je(this)&&this||{},t={},n=(r,s)=>{const o=e&&Ue(t,s)||s;H(t[o])&&H(r)?t[o]=se(t[o],r):H(r)?t[o]=se({},r):k(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&j(arguments[r],n);return t}const wt=(e,t,n,{allOwnKeys:r}={})=>(j(t,(s,o)=>{n&&w(s)?e[o]=ke(s,n):e[o]=s},{allOwnKeys:r}),e),St=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Rt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},At=(e,t,n,r)=>{let s,o,i;const u={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!u[i]&&(t[i]=e[i],u[i]=!0);e=n!==!1&&ue(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Ot=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Nt=e=>{if(!e)return null;if(k(e))return e;let t=e.length;if(!_e(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Tt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ue(Uint8Array)),xt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Lt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Ct=T("HTMLFormElement"),Pt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ge=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Ft=T("RegExp"),Me=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};j(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},Dt=e=>{Me(e,(t,n)=>{if(w(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(w(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},kt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return k(e)?r(e):r(String(e).split(t)),n},Bt=()=>{},_t=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Y="abcdefghijklmnopqrstuvwxyz",Ee="0123456789",Ie={DIGIT:Ee,ALPHA:Y,ALPHA_DIGIT:Y+Y.toUpperCase()+Ee},Ut=(e=16,t=Ie.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function qt(e){return!!(e&&w(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const jt=e=>{const t=new Array(10),n=(r,s)=>{if(K(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=k(r)?[]:{};return j(r,(i,u)=>{const f=n(i,s+1);!q(f)&&(o[u]=f)}),t[s]=void 0,o}}return r};return n(e,0)},Mt=T("AsyncFunction"),It=e=>e&&(K(e)||w(e))&&w(e.then)&&w(e.catch),a={isArray:k,isArrayBuffer:Be,isBuffer:ct,isFormData:bt,isArrayBufferView:ut,isString:lt,isNumber:_e,isBoolean:dt,isObject:K,isPlainObject:H,isUndefined:q,isDate:ft,isFile:pt,isBlob:ht,isRegExp:Ft,isFunction:w,isStream:yt,isURLSearchParams:gt,isTypedArray:Tt,isFileList:mt,forEach:j,merge:se,extend:wt,trim:Et,stripBOM:St,inherits:Rt,toFlatObject:At,kindOf:V,kindOfTest:T,endsWith:Ot,toArray:Nt,forEachEntry:xt,matchAll:Lt,isHTMLForm:Ct,hasOwnProperty:ge,hasOwnProp:ge,reduceDescriptors:Me,freezeMethods:Dt,toObjectSet:kt,toCamelCase:Pt,noop:Bt,toFiniteNumber:_t,findKey:Ue,global:qe,isContextDefined:je,ALPHABET:Ie,generateString:Ut,isSpecCompliantForm:qt,toJSONObject:jt,isAsyncFn:Mt,isThenable:It};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const He=m.prototype,$e={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{$e[e]={value:e}});Object.defineProperties(m,$e);Object.defineProperty(He,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(He);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},u=>u!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Ht=null;function oe(e){return a.isPlainObject(e)||a.isArray(e)}function ze(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function we(e,t,n){return e?e.concat(t).map(function(s,o){return s=ze(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function $t(e){return a.isArray(e)&&!e.some(oe)}const zt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function G(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,x){return!a.isUndefined(x[h])});const r=n.metaTokens,s=n.visitor||l,o=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function c(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!f&&a.isBlob(d))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?f&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function l(d,h,x){let S=d;if(d&&!x&&typeof d=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&$t(d)||(a.isFileList(d)||a.endsWith(h,"[]"))&&(S=a.toArray(d)))return h=ze(h),S.forEach(function(I,rt){!(a.isUndefined(I)||I===null)&&t.append(i===!0?we([h],rt,o):i===null?h:h+"[]",c(I))}),!1}return oe(d)?!0:(t.append(we(x,h,o),c(d)),!1)}const p=[],g=Object.assign(zt,{defaultVisitor:l,convertValue:c,isVisitable:oe});function y(d,h){if(!a.isUndefined(d)){if(p.indexOf(d)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(d),a.forEach(d,function(S,P){(!(a.isUndefined(S)||S===null)&&s.call(t,S,a.isString(P)?P.trim():P,h,g))===!0&&y(S,h?h.concat(P):[P])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function Se(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function le(e,t){this._pairs=[],e&&G(e,this,t)}const ve=le.prototype;ve.append=function(t,n){this._pairs.push([t,n])};ve.toString=function(t){const n=t?function(r){return t.call(this,r,Se)}:Se;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function vt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Je(e,t,n){if(!t)return e;const r=n&&n.encode||vt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new le(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Jt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Re=Jt,Ve={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Vt=typeof URLSearchParams<"u"?URLSearchParams:le,Wt=typeof FormData<"u"?FormData:null,Kt=typeof Blob<"u"?Blob:null,Gt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Xt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),N={isBrowser:!0,classes:{URLSearchParams:Vt,FormData:Wt,Blob:Kt},isStandardBrowserEnv:Gt,isStandardBrowserWebWorkerEnv:Xt,protocols:["http","https","file","blob","url","data"]};function Qt(e,t){return G(e,new N.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return N.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Yt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Zt(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function We(e){function t(n,r,s,o){let i=n[o++];const u=Number.isFinite(+i),f=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!u):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Zt(s[i])),!u)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Yt(r),s,n,0)}),n}return null}const en={"Content-Type":void 0};function tn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const X={transitional:Ve,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(We(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Qt(t,this.formSerializer).toString();if((u=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return G(u?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),tn(t)):t}],transformResponse:[function(t){const n=this.transitional||X.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(u){if(i)throw u.name==="SyntaxError"?m.from(u,m.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:N.classes.FormData,Blob:N.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){X.headers[t]={}});a.forEach(["post","put","patch"],function(t){X.headers[t]=a.merge(en)});const de=X,nn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),rn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&nn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ae=Symbol("internals");function B(e){return e&&String(e).trim().toLowerCase()}function $(e){return e===!1||e==null?e:a.isArray(e)?e.map($):String(e)}function sn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const on=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Z(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function an(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function cn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class Q{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(u,f,c){const l=B(f);if(!l)throw new Error("header name must be a non-empty string");const p=a.findKey(s,l);(!p||s[p]===void 0||c===!0||c===void 0&&s[p]!==!1)&&(s[p||f]=$(u))}const i=(u,f)=>a.forEach(u,(c,l)=>o(c,l,f));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!on(t)?i(rn(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=B(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return sn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=B(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Z(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=B(i),i){const u=a.findKey(r,i);u&&(!n||Z(r,r[u],u,n))&&(delete r[u],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||Z(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=$(s),delete n[o];return}const u=t?an(o):String(o).trim();u!==o&&delete n[o],n[u]=$(s),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Ae]=this[Ae]={accessors:{}}).accessors,s=this.prototype;function o(i){const u=B(i);r[u]||(cn(s,i),r[u]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}Q.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(Q.prototype);a.freezeMethods(Q);const L=Q;function ee(e,t){const n=this||de,r=t||n,s=L.from(r.headers);let o=r.data;return a.forEach(e,function(u){o=u.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Ke(e){return!!(e&&e.__CANCEL__)}function M(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(M,m,{__CANCEL__:!0});function un(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const ln=N.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,u){const f=[];f.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&f.push("expires="+new Date(s).toGMTString()),a.isString(o)&&f.push("path="+o),a.isString(i)&&f.push("domain="+i),u===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function dn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function fn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ge(e,t){return e&&!dn(t)?fn(e,t):t}const pn=N.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const u=a.isString(i)?s(i):i;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function hn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function mn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const c=Date.now(),l=r[o];i||(i=c),n[s]=f,r[s]=c;let p=o,g=0;for(;p!==s;)g+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const y=l&&c-l;return y?Math.round(g*1e3/y):void 0}}function Oe(e,t){let n=0;const r=mn(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,u=o-n,f=r(u),c=o<=i;n=o;const l={loaded:o,total:i,progress:i?o/i:void 0,bytes:u,rate:f||void 0,estimated:f&&i&&c?(i-o)/f:void 0,event:s};l[t?"download":"upload"]=!0,e(l)}}const yn=typeof XMLHttpRequest<"u",bn=yn&&function(e){return new Promise(function(n,r){let s=e.data;const o=L.from(e.headers).normalize(),i=e.responseType;let u;function f(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}a.isFormData(s)&&(N.isStandardBrowserEnv||N.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",d=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(y+":"+d))}const l=Ge(e.baseURL,e.url);c.open(e.method.toUpperCase(),Je(l,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function p(){if(!c)return;const y=L.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};un(function(S){n(S),f()},function(S){r(S),f()},h),c=null}if("onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let d=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||Ve;e.timeoutErrorMessage&&(d=e.timeoutErrorMessage),r(new m(d,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},N.isStandardBrowserEnv){const y=(e.withCredentials||pn(l))&&e.xsrfCookieName&&ln.read(e.xsrfCookieName);y&&o.set(e.xsrfHeaderName,y)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(d,h){c.setRequestHeader(h,d)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Oe(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Oe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=y=>{c&&(r(!y||y.type?new M(null,e,c):y),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const g=hn(l);if(g&&N.protocols.indexOf(g)===-1){r(new m("Unsupported protocol "+g+":",m.ERR_BAD_REQUEST,e));return}c.send(s||null)})},z={http:Ht,xhr:bn};a.forEach(z,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const gn={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?z[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(z,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:z};function te(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new M(null,e)}function Ne(e){return te(e),e.headers=L.from(e.headers),e.data=ee.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),gn.getAdapter(e.adapter||de.adapter)(e).then(function(r){return te(e),r.data=ee.call(e,e.transformResponse,r),r.headers=L.from(r.headers),r},function(r){return Ke(r)||(te(e),r&&r.response&&(r.response.data=ee.call(e,e.transformResponse,r.response),r.response.headers=L.from(r.response.headers))),Promise.reject(r)})}const Te=e=>e instanceof L?e.toJSON():e;function D(e,t){t=t||{};const n={};function r(c,l,p){return a.isPlainObject(c)&&a.isPlainObject(l)?a.merge.call({caseless:p},c,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(c,l,p){if(a.isUndefined(l)){if(!a.isUndefined(c))return r(void 0,c,p)}else return r(c,l,p)}function o(c,l){if(!a.isUndefined(l))return r(void 0,l)}function i(c,l){if(a.isUndefined(l)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,l)}function u(c,l,p){if(p in t)return r(c,l);if(p in e)return r(void 0,c)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:u,headers:(c,l)=>s(Te(c),Te(l),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){const p=f[l]||s,g=p(e[l],t[l],l);a.isUndefined(g)&&p!==u||(n[l]=g)}),n}const Xe="1.4.0",fe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{fe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const xe={};fe.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Xe+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,u)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!xe[i]&&(xe[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,u):!0}};function En(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const u=e[o],f=u===void 0||i(u,o,e);if(f!==!0)throw new m("option "+o+" must be "+f,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const ie={assertOptions:En,validators:fe},C=ie.validators;class J{constructor(t){this.defaults=t,this.interceptors={request:new Re,response:new Re}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=D(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&ie.assertOptions(r,{silentJSONParsing:C.transitional(C.boolean),forcedJSONParsing:C.transitional(C.boolean),clarifyTimeoutError:C.transitional(C.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:ie.assertOptions(s,{encode:C.function,serialize:C.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&a.merge(o.common,o[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete o[d]}),n.headers=L.concat(i,o);const u=[];let f=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(f=f&&h.synchronous,u.unshift(h.fulfilled,h.rejected))});const c=[];this.interceptors.response.forEach(function(h){c.push(h.fulfilled,h.rejected)});let l,p=0,g;if(!f){const d=[Ne.bind(this),void 0];for(d.unshift.apply(d,u),d.push.apply(d,c),g=d.length,l=Promise.resolve(n);p<g;)l=l.then(d[p++],d[p++]);return l}g=u.length;let y=n;for(p=0;p<g;){const d=u[p++],h=u[p++];try{y=d(y)}catch(x){h.call(this,x);break}}try{l=Ne.call(this,y)}catch(d){return Promise.reject(d)}for(p=0,g=c.length;p<g;)l=l.then(c[p++],c[p++]);return l}getUri(t){t=D(this.defaults,t);const n=Ge(t.baseURL,t.url);return Je(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){J.prototype[t]=function(n,r){return this.request(D(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,u){return this.request(D(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}J.prototype[t]=n(),J.prototype[t+"Form"]=n(!0)});const v=J;class pe{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(u=>{r.subscribe(u),o=u}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,u){r.reason||(r.reason=new M(o,i,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new pe(function(s){t=s}),cancel:t}}}const wn=pe;function Sn(e){return function(n){return e.apply(null,n)}}function Rn(e){return a.isObject(e)&&e.isAxiosError===!0}const ae={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ae).forEach(([e,t])=>{ae[t]=e});const An=ae;function Qe(e){const t=new v(e),n=ke(v.prototype.request,t);return a.extend(n,v.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Qe(D(e,s))},n}const b=Qe(de);b.Axios=v;b.CanceledError=M;b.CancelToken=wn;b.isCancel=Ke;b.VERSION=Xe;b.toFormData=G;b.AxiosError=m;b.Cancel=b.CanceledError;b.all=function(t){return Promise.all(t)};b.spread=Sn;b.isAxiosError=Rn;b.mergeConfig=D;b.AxiosHeaders=L;b.formToJSON=e=>We(a.isHTMLForm(e)?new FormData(e):e);b.HttpStatusCode=An;b.default=b;const O=b;var E;class Ye{constructor(){me(this,E,"https://tasty-treats-backend.p.goit.global/api/");R(this,"page",1);R(this,"limit",9);R(this,"category","");R(this,"title","");R(this,"time","");R(this,"area","");R(this,"ingredient","");R(this,"recipeID","");R(this,"userRatings",{rate:5,email:""});R(this,"userOrder",{})}searchMasterClass(){return O.get(`${A(this,E)}events`)}searchListCategories(){return O.get(`${A(this,E)}categories`)}searchFilterRecipes(){const t=Le(6,8,9);return O.get(`${A(this,E)}recipes?category=${this.category}&page=${this.page}&limit=${t}&time=${this.time}&area=${this.area}&ingredient=${this.ingredient}&title=${this.title}`)}searchAllRecipes(){const t=Le(6,8,9);return O.get(`${A(this,E)}recipes?page=${this.page}&limit=${t}`)}searchPopularRecipes(){return O.get(`${A(this,E)}recipes/popular`)}searchRecipeID(){return O.get(`${A(this,E)}recipes/${this.recipeID}`)}searchingredients(){return O.get(`${A(this,E)}ingredients`)}searchAreas(){return O.get(`${A(this,E)}areas`)}passRating(){return O.patch(`${A(this,E)}recipes/${this.recipeID}/rating`,this.userRatings)}passOrder(){return O.post(`${A(this,E)}orders/add`,this.userOrder)}}E=new WeakMap;function Le(e,t,n){return window.innerWidth<768?e:window.innerWidth>=768&&window.innerWidth<1280?t:n}const ne=document.querySelector(".filters-box-parent"),_=document.querySelector(".modal-recipe-backdrop"),On=document.querySelector(".ab-exit-btn"),re=new Ye,Nn=document.querySelector(".ab-dish-name"),Ce=document.querySelector(".ab-video"),Tn=document.querySelector(".ab-star-rating-number"),xn=document.querySelector(".ab-cooking-time"),Pe=document.querySelector(".ab-ingredient-list"),Fe=document.querySelector(".ab-hashtag-list"),Ln=document.querySelector(".ab-recipe-description"),F=document.querySelector(".ab-star-container");function Cn(e){const n=`https://www.youtube.com/embed/${e.split("=")[1]}`;Ce.src!==n&&(Ce.src=n)}function Pn(e){Pe.innerHTML="",e.forEach(t=>{Pe.insertAdjacentHTML("beforeend",`<li class="ab-ingredient">
        <p class="ab-ingredient-name">${t.name}</p>
        <p class="ab-ingredient-amount">${t.measure}</p>
      </li>`)})}function Fn(e){Fe.innerHTML="",e[0]!==""&&e.forEach(t=>{Fe.insertAdjacentHTML("beforeend",`<li class="ab-recipe-hashtag">#${t}</li>`)})}function Dn(e){const t=Math.floor(e);for(let n=0;n<F.children.length;n++)F.children[n].removeAttribute("fill");for(let n=0;n<F.children.length-t;n++)F.children[F.children.length-1-n].setAttribute("fill","rgba(5, 5, 5, 0.5)");for(let n=0;n<t;n++)F.children[n].setAttribute("fill","rgba(238, 161, 12, 1)")}function kn(e){e.target.classList.contains("filters-btn-recipe")&&(_.toggleAttribute("data-hidden"),document.body.style.overflow="hidden",e.target.parentNode.parentNode.id===""?re.recipeID=e.target.parentNode.parentNode.parentNode.id:re.recipeID=e.target.parentNode.parentNode.id,re.searchRecipeID().then(t=>{e.target.parentNode.parentNode.id===""?_.id=e.target.parentNode.parentNode.parentNode.id:_.id=e.target.parentNode.parentNode.id,console.log(_.id);const n=t.data;Nn.textContent=n.title,Cn(n.youtube),Tn.textContent=n.rating,xn.textContent=`${n.time} min`,Pn(n.ingredients),Fn(n.tags),Ln.textContent=n.instructions,Dn(n.rating)}).catch(t=>{console.log(t)}))}ne==null||ne.addEventListener("click",kn);const Bn=document.querySelector(".ab-give-a-rating"),Ze=document.querySelector(".add-rating-modal"),_n=document.querySelector(".modal-recipe");function et(){Ze.toggleAttribute("data-hidden"),_n.toggleAttribute("modal-margin")}function tt(){_.toggleAttribute("data-hidden"),document.body.style.overflow="auto",Ze.hasAttribute("data-hidden")||et()}Bn.addEventListener("click",e=>{et()});On.addEventListener("click",e=>{tt()});document.addEventListener("keydown",e=>{e.key==="Escape"&&tt()});const he=document.querySelector(".add-rating-form"),De=document.querySelector(".js-rating-choosed"),Un=he.querySelectorAll("input[name='rating']"),U=new Ye,qn=document.querySelector(".add-rating-email"),ce=document.querySelector(".add-rating-modal");Un.forEach(e=>{e.addEventListener("change",jn)});function jn(){const e=he.querySelector("input[name='rating']:checked").value;De.textContent=e+".0",U.userRatings.rate=Number(De.textContent)}const nt=document.querySelector(".modal-recipe");he.addEventListener("submit",e=>{e.preventDefault(),U.userRatings.email=qn.value,U.recipeID=ce.parentElement.id,console.log(U),U.passRating(),ce.toggleAttribute("data-hidden"),nt.toggleAttribute("modal-margin")});const Mn=document.querySelector(".add-rating-close-btn");Mn.addEventListener("click",e=>{ce.toggleAttribute("data-hidden"),nt.toggleAttribute("modal-margin")});export{Ye as B,O as a,kn as h};
