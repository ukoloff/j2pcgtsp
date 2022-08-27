!function(){"use strict"
function t(t,e,n,o,i,r){return{tag:t,key:e,attrs:n,children:o,text:i,dom:r,
domSize:void 0,state:void 0,events:void 0,instance:void 0}}
t.normalize=function(e){
return Array.isArray(e)?t("[",void 0,void 0,t.normalizeChildren(e),void 0,void 0):null==e||"boolean"==typeof e?null:"object"==typeof e?e:t("#",void 0,void 0,String(e),void 0,void 0)
},t.normalizeChildren=function(e){var n=[]
if(e.length){
for(var o=null!=e[0]&&null!=e[0].key,i=1;i<e.length;i++)if((null!=e[i]&&null!=e[i].key)!==o)throw new TypeError(!o||null==e[i]&&"boolean"!=typeof e[i]?"In fragments, vnodes must either all have keys or none have keys.":"In fragments, vnodes must either all have keys or none have keys. You may wish to consider using an explicit keyed empty fragment, m.fragment({key: ...}), instead of a hole.")
for(i=0;i<e.length;i++)n[i]=t.normalize(e[i])}return n}
var e=t,n=function(){var t,n=arguments[this],o=this+1
if(null==n?n={}:("object"!=typeof n||null!=n.tag||Array.isArray(n))&&(n={},o=this),
arguments.length===o+1)t=arguments[o],Array.isArray(t)||(t=[t])
else for(t=[];o<arguments.length;)t.push(arguments[o++])
return e("",n.key,n,t)
},o={}.hasOwnProperty,i=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,r={}
function a(t){for(var e in t)if(o.call(t,e))return!1
return!0}function s(t){for(var e,n="div",o=[],a={};e=i.exec(t);){
var s=e[1],l=e[2]
if(""===s&&""!==l)n=l
else if("#"===s)a.id=l
else if("."===s)o.push(l)
else if("["===e[3][0]){var u=e[6]
u&&(u=u.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),"class"===e[4]?o.push(u):a[e[4]]=""===u?u:u||!0
}}return o.length>0&&(a.className=o.join(" ")),r[t]={tag:n,attrs:a}}
function l(t,e){var n=e.attrs,i=o.call(n,"class"),r=i?n.class:n.className
if(e.tag=t.tag,e.attrs={},!a(t.attrs)&&!a(n)){var s={}
for(var l in n)o.call(n,l)&&(s[l]=n[l])
n=s}
for(var l in t.attrs)o.call(t.attrs,l)&&"className"!==l&&!o.call(n,l)&&(n[l]=t.attrs[l])
for(var l in null==r&&null==t.attrs.className||(n.className=null!=r?null!=t.attrs.className?String(t.attrs.className)+" "+String(r):r:null!=t.attrs.className?t.attrs.className:null),
i&&(n.class=null),n)if(o.call(n,l)&&"key"!==l){e.attrs=n
break}return e}var u=function(t){
if(null==t||"string"!=typeof t&&"function"!=typeof t&&"function"!=typeof t.view)throw Error("The selector must be either a string or a component.")
var o=n.apply(1,arguments)
return"string"==typeof t&&(o.children=e.normalizeChildren(o.children),"["!==t)?l(r[t]||s(t),o):(o.tag=t,
o)}
u.trust=function(t){return null==t&&(t=""),e("<",void 0,void 0,t,void 0,void 0)
},u.fragment=function(){var t=n.apply(0,arguments)
return t.tag="[",t.children=e.normalizeChildren(t.children),t}
var c=u,f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function h(t,e){return t(e={exports:{}},e.exports),e.exports}var p=function(t){
if(!(this instanceof p))throw new Error("Promise must be called with 'new'.")
if("function"!=typeof t)throw new TypeError("executor must be a function.")
var e=this,n=[],o=[],i=l(n,!0),r=l(o,!1),a=e._instance={resolvers:n,rejectors:o
},s="function"==typeof setImmediate?setImmediate:setTimeout
function l(t,i){return function l(c){var f
try{
if(!i||null==c||"object"!=typeof c&&"function"!=typeof c||"function"!=typeof(f=c.then))s((function(){
i||0!==t.length||console.error("Possible unhandled promise rejection:",c)
for(var e=0;e<t.length;e++)t[e](c)
n.length=0,o.length=0,a.state=i,a.retry=function(){l(c)}}))
else{if(c===e)throw new TypeError("Promise can't be resolved with itself.")
u(f.bind(c))}}catch(t){r(t)}}}function u(t){var e=0
function n(t){return function(n){e++>0||t(n)}}var o=n(r)
try{t(n(i),o)}catch(t){o(t)}}u(t)}
p.prototype.then=function(t,e){var n,o,i=this._instance
function r(t,e,r,a){e.push((function(e){if("function"!=typeof t)r(e)
else try{n(t(e))}catch(t){o&&o(t)}
})),"function"==typeof i.retry&&a===i.state&&i.retry()}
var a=new p((function(t,e){n=t,o=e}))
return r(t,i.resolvers,n,!0),r(e,i.rejectors,o,!1),a
},p.prototype.catch=function(t){return this.then(null,t)
},p.prototype.finally=function(t){return this.then((function(e){
return p.resolve(t()).then((function(){return e}))}),(function(e){
return p.resolve(t()).then((function(){return p.reject(e)}))}))
},p.resolve=function(t){return t instanceof p?t:new p((function(e){e(t)}))
},p.reject=function(t){return new p((function(e,n){n(t)}))},p.all=function(t){
return new p((function(e,n){var o=t.length,i=0,r=[]
if(0===t.length)e([])
else for(var a=0;a<t.length;a++)!function(a){function s(t){
i++,r[a]=t,i===o&&e(r)}
null==t[a]||"object"!=typeof t[a]&&"function"!=typeof t[a]||"function"!=typeof t[a].then?s(t[a]):t[a].then(s,n)
}(a)}))},p.race=function(t){return new p((function(e,n){
for(var o=0;o<t.length;o++)t[o].then(e,n)}))}
var d=p,v=h((function(t){
"undefined"!=typeof window?(void 0===window.Promise?window.Promise=d:window.Promise.prototype.finally||(window.Promise.prototype.finally=d.prototype.finally),
t.exports=window.Promise):void 0!==f?(void 0===f.Promise?f.Promise=d:f.Promise.prototype.finally||(f.Promise.prototype.finally=d.prototype.finally),
t.exports=f.Promise):t.exports=d})),m=function(t){var n,o=t&&t.document,i={
svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"}
function r(t){return t.attrs&&t.attrs.xmlns||i[t.tag]}function a(t,e){
if(t.state!==e)throw new Error("'vnode.state' must not be modified.")}
function s(t){var e=t.state
try{return this.apply(e,arguments)}finally{a(t,e)}}function l(){try{
return o.activeElement}catch(t){return null}}function u(t,e,n,o,i,r,a){
for(var s=n;s<o;s++){var l=e[s]
null!=l&&c(t,l,i,a,r)}}function c(t,e,n,i,a){var s=e.tag
if("string"==typeof s)switch(e.state={},null!=e.attrs&&R(e.attrs,e,n),s){
case"#":!function(t,e,n){e.dom=o.createTextNode(e.children),x(t,e.dom,n)}(t,e,a)
break
case"<":h(t,e,i,a)
break
case"[":!function(t,e,n,i,r){var a=o.createDocumentFragment()
if(null!=e.children){var s=e.children
u(a,s,0,s.length,n,null,i)}
e.dom=a.firstChild,e.domSize=a.childNodes.length,x(t,a,r)}(t,e,n,i,a)
break
default:!function(t,e,n,i,a){
var s=e.tag,l=e.attrs,c=l&&l.is,f=(i=r(e)||i)?c?o.createElementNS(i,s,{is:c
}):o.createElementNS(i,s):c?o.createElement(s,{is:c}):o.createElement(s)
e.dom=f,null!=l&&function(t,e,n){
"input"===t.tag&&null!=e.type&&t.dom.setAttribute("type",e.type)
var o=null!=e&&"input"===t.tag&&"file"===e.type
for(var i in e)P(t,i,null,e[i],n,o)}(e,l,i)
if(x(t,f,a),!S(e)&&null!=e.children){var h=e.children
u(f,h,0,h.length,n,null,i),"select"===e.tag&&null!=l&&function(t,e){
if("value"in e)if(null===e.value)-1!==t.dom.selectedIndex&&(t.dom.value=null)
else{var n=""+e.value
t.dom.value===n&&-1!==t.dom.selectedIndex||(t.dom.value=n)}
"selectedIndex"in e&&P(t,"selectedIndex",null,e.selectedIndex,void 0)}(e,l)}
}(t,e,n,i,a)}else!function(t,e,n,o,i){
p(e,n),null!=e.instance?(c(t,e.instance,n,o,i),
e.dom=e.instance.dom,e.domSize=null!=e.dom?e.instance.domSize:0):e.domSize=0
}(t,e,n,i,a)}var f={caption:"table",thead:"table",tbody:"table",tfoot:"table",
tr:"tbody",th:"tr",td:"tr",colgroup:"table",col:"colgroup"}
function h(t,e,n,i){
var r=e.children.match(/^\s*?<(\w+)/im)||[],a=o.createElement(f[r[1]]||"div")
"http://www.w3.org/2000/svg"===n?(a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e.children+"</svg>",
a=a.firstChild):a.innerHTML=e.children,
e.dom=a.firstChild,e.domSize=a.childNodes.length,e.instance=[]
for(var s,l=o.createDocumentFragment();s=a.firstChild;)e.instance.push(s),l.appendChild(s)
x(t,l,i)}function p(t,n){var o
if("function"==typeof t.tag.view){
if(t.state=Object.create(t.tag),null!=(o=t.state.view).$$reentrantLock$$)return
o.$$reentrantLock$$=!0}else{
if(t.state=void 0,null!=(o=t.tag).$$reentrantLock$$)return
o.$$reentrantLock$$=!0,t.state=null!=t.tag.prototype&&"function"==typeof t.tag.prototype.view?new t.tag(t):t.tag(t)
}
if(R(t.state,t,n),null!=t.attrs&&R(t.attrs,t,n),t.instance=e.normalize(s.call(t.state.view,t)),
t.instance===t)throw Error("A view cannot return the vnode it received as argument")
o.$$reentrantLock$$=null}function d(t,e,n,o,i,r){
if(e!==n&&(null!=e||null!=n))if(null==e||0===e.length)u(t,n,0,n.length,o,i,r)
else if(null==n||0===n.length)E(t,e,0,e.length)
else{var a=null!=e[0]&&null!=e[0].key,s=null!=n[0]&&null!=n[0].key,l=0,f=0
if(!a)for(;f<e.length&&null==e[f];)f++
if(!s)for(;l<n.length&&null==n[l];)l++
if(a!==s)E(t,e,f,e.length),u(t,n,l,n.length,o,i,r)
else if(s){
for(var h,p,d,m,x,S=e.length-1,M=n.length-1;S>=f&&M>=l&&(d=e[S],m=n[M],
d.key===m.key);)d!==m&&v(t,d,m,o,i,r),null!=m.dom&&(i=m.dom),S--,M--
for(;S>=f&&M>=l&&(h=e[f],p=n[l],h.key===p.key);)f++,l++,h!==p&&v(t,h,p,o,b(e,f,i),r)
for(;S>=f&&M>=l&&l!==M&&h.key===m.key&&d.key===p.key;)w(t,d,x=b(e,f,i)),d!==p&&v(t,d,p,o,x,r),
++l<=--M&&w(t,h,i),
h!==m&&v(t,h,m,o,i,r),null!=m.dom&&(i=m.dom),f++,d=e[--S],m=n[M],h=e[f],p=n[l]
for(;S>=f&&M>=l&&d.key===m.key;)d!==m&&v(t,d,m,o,i,r),null!=m.dom&&(i=m.dom),M--,
d=e[--S],m=n[M]
if(l>M)E(t,e,f,S+1)
else if(f>S)u(t,n,l,M+1,o,i,r)
else{var C,z,P=i,A=M-l+1,T=new Array(A),N=0,Z=0,I=2147483647,D=0
for(Z=0;Z<A;Z++)T[Z]=-1
for(Z=M;Z>=l;Z--){null==C&&(C=g(e,f,S+1))
var B=C[(m=n[Z]).key]
null!=B&&(I=B<I?B:-1,T[Z-l]=B,d=e[B],e[B]=null,d!==m&&v(t,d,m,o,i,r),null!=m.dom&&(i=m.dom),
D++)}if(i=P,D!==S-f+1&&E(t,e,f,S+1),0===D)u(t,n,l,M+1,o,i,r)
else if(-1===I)for(N=(z=function(t){var e=[0],n=0,o=0,i=0,r=y.length=t.length
for(i=0;i<r;i++)y[i]=t[i]
for(i=0;i<r;++i)if(-1!==t[i]){var a=e[e.length-1]
if(t[a]<t[i])y[i]=a,e.push(i)
else{for(n=0,o=e.length-1;n<o;){var s=(n>>>1)+(o>>>1)+(n&o&1)
t[e[s]]<t[i]?n=s+1:o=s}t[i]<t[e[n]]&&(n>0&&(y[i]=e[n-1]),e[n]=i)}}
n=e.length,o=e[n-1]
for(;n-- >0;)e[n]=o,o=y[o]
return y.length=0,e
}(T)).length-1,Z=M;Z>=l;Z--)p=n[Z],-1===T[Z-l]?c(t,p,o,r,i):z[N]===Z-l?N--:w(t,p,i),
null!=p.dom&&(i=n[Z].dom)
else for(Z=M;Z>=l;Z--)p=n[Z],-1===T[Z-l]&&c(t,p,o,r,i),null!=p.dom&&(i=n[Z].dom)
}}else{var j=e.length<n.length?e.length:n.length
for(l=l<f?l:f;l<j;l++)(h=e[l])===(p=n[l])||null==h&&null==p||(null==h?c(t,p,o,r,b(e,l+1,i)):null==p?k(t,h):v(t,h,p,o,b(e,l+1,i),r))
e.length>j&&E(t,e,l,e.length),n.length>j&&u(t,n,l,n.length,o,i,r)}}}
function v(t,e,n,o,i,a){var l=e.tag
if(l===n.tag){if(n.state=e.state,n.events=e.events,function(t,e){do{var n
if(null!=t.attrs&&"function"==typeof t.attrs.onbeforeupdate)if(void 0!==(n=s.call(t.attrs.onbeforeupdate,t,e))&&!n)break
if("string"!=typeof t.tag&&"function"==typeof t.state.onbeforeupdate)if(void 0!==(n=s.call(t.state.onbeforeupdate,t,e))&&!n)break
return!1}while(0)
return t.dom=e.dom,t.domSize=e.domSize,t.instance=e.instance,t.attrs=e.attrs,t.children=e.children,
t.text=e.text,!0}(n,e))return
if("string"==typeof l)switch(null!=n.attrs&&V(n.attrs,n,o),l){case"#":
!function(t,e){
t.children.toString()!==e.children.toString()&&(t.dom.nodeValue=e.children)
e.dom=t.dom}(e,n)
break
case"<":!function(t,e,n,o,i){
e.children!==n.children?(M(t,e),h(t,n,o,i)):(n.dom=e.dom,
n.domSize=e.domSize,n.instance=e.instance)}(t,e,n,a,i)
break
case"[":!function(t,e,n,o,i,r){d(t,e.children,n.children,o,i,r)
var a=0,s=n.children
if(n.dom=null,null!=s){for(var l=0;l<s.length;l++){var u=s[l]
null!=u&&null!=u.dom&&(null==n.dom&&(n.dom=u.dom),a+=u.domSize||1)}
1!==a&&(n.domSize=a)}}(t,e,n,o,i,a)
break
default:!function(t,e,n,o){var i=e.dom=t.dom
o=r(e)||o,"textarea"===e.tag&&null==e.attrs&&(e.attrs={});(function(t,e,n,o){
e&&e===n&&console.warn("Don't reuse attrs object, use new object for every redraw, this will throw in next major")
if(null!=n){"input"===t.tag&&null!=n.type&&t.dom.setAttribute("type",n.type)
var i="input"===t.tag&&"file"===n.type
for(var r in n)P(t,r,e&&e[r],n[r],o,i)}var a
if(null!=e)for(var r in e)null==(a=e[r])||null!=n&&null!=n[r]||A(t,r,a,o)
})(e,t.attrs,e.attrs,o),S(e)||d(i,t.children,e.children,n,null,o)}(e,n,o,a)
}else m(t,e,n,o,i,a)}else k(t,e),c(t,n,o,a,i)}function m(t,n,o,i,r,a){
if(o.instance=e.normalize(s.call(o.state.view,o)),
o.instance===o)throw Error("A view cannot return the vnode it received as argument")
V(o.state,o,i),null!=o.attrs&&V(o.attrs,o,i),null!=o.instance?(null==n.instance?c(t,o.instance,i,a,r):v(t,n.instance,o.instance,i,r,a),
o.dom=o.instance.dom,
o.domSize=o.instance.domSize):null!=n.instance?(k(t,n.instance),
o.dom=void 0,o.domSize=0):(o.dom=n.dom,o.domSize=n.domSize)}function g(t,e,n){
for(var o=Object.create(null);e<n;e++){var i=t[e]
if(null!=i){var r=i.key
null!=r&&(o[r]=e)}}return o}var y=[]
function b(t,e,n){
for(;e<t.length;e++)if(null!=t[e]&&null!=t[e].dom)return t[e].dom
return n}function w(t,e,n){var i=o.createDocumentFragment()
!function t(e,n,o){for(;null!=o.dom&&o.dom.parentNode===e;){
if("string"!=typeof o.tag){if(null!=(o=o.instance))continue
}else if("<"===o.tag)for(var i=0;i<o.instance.length;i++)n.appendChild(o.instance[i])
else if("["!==o.tag)n.appendChild(o.dom)
else if(1===o.children.length){if(null!=(o=o.children[0]))continue
}else for(i=0;i<o.children.length;i++){var r=o.children[i]
null!=r&&t(e,n,r)}break}}(t,i,e),x(t,i,n)}function x(t,e,n){
null!=n?t.insertBefore(e,n):t.appendChild(e)}function S(t){
if(null==t.attrs||null==t.attrs.contenteditable&&null==t.attrs.contentEditable)return!1
var e=t.children
if(null!=e&&1===e.length&&"<"===e[0].tag){var n=e[0].children
t.dom.innerHTML!==n&&(t.dom.innerHTML=n)
}else if(null!=e&&0!==e.length)throw new Error("Child node of a contenteditable must be trusted.")
return!0}function E(t,e,n,o){for(var i=n;i<o;i++){var r=e[i]
null!=r&&k(t,r)}}function k(t,e){var n,o,i,r=0,l=e.state
"string"!=typeof e.tag&&"function"==typeof e.state.onbeforeremove&&(null!=(i=s.call(e.state.onbeforeremove,e))&&"function"==typeof i.then&&(r=1,
n=i))
e.attrs&&"function"==typeof e.attrs.onbeforeremove&&(null!=(i=s.call(e.attrs.onbeforeremove,e))&&"function"==typeof i.then&&(r|=2,
o=i))
if(a(e,l),r){if(null!=n){var u=function(){1&r&&((r&=2)||c())}
n.then(u,u)}if(null!=o){u=function(){2&r&&((r&=1)||c())}
o.then(u,u)}}else z(e),C(t,e)
function c(){a(e,l),z(e),C(t,e)}}function M(t,e){
for(var n=0;n<e.instance.length;n++)t.removeChild(e.instance[n])}
function C(t,e){for(;null!=e.dom&&e.dom.parentNode===t;){
if("string"!=typeof e.tag){if(null!=(e=e.instance))continue
}else if("<"===e.tag)M(t,e)
else{if("["!==e.tag&&(t.removeChild(e.dom),!Array.isArray(e.children)))break
if(1===e.children.length){if(null!=(e=e.children[0]))continue
}else for(var n=0;n<e.children.length;n++){var o=e.children[n]
null!=o&&C(t,o)}}break}}function z(t){
if("string"!=typeof t.tag&&"function"==typeof t.state.onremove&&s.call(t.state.onremove,t),
t.attrs&&"function"==typeof t.attrs.onremove&&s.call(t.attrs.onremove,t),
"string"!=typeof t.tag)null!=t.instance&&z(t.instance)
else{var e=t.children
if(Array.isArray(e))for(var n=0;n<e.length;n++){var o=e[n]
null!=o&&z(o)}}}function P(t,e,n,i,r,a){
if(!("key"===e||"is"===e||null==i||T(e)||n===i&&!function(t,e){
return"value"===e||"checked"===e||"selectedIndex"===e||"selected"===e&&t.dom===l()||"option"===t.tag&&t.dom.parentNode===o.activeElement
}(t,e)&&"object"!=typeof i||"type"===e&&"input"===t.tag)){
if("o"===e[0]&&"n"===e[1])return L(t,e,i)
if("xlink:"===e.slice(0,6))t.dom.setAttributeNS("http://www.w3.org/1999/xlink",e.slice(6),i)
else if("style"===e)j(t.dom,n,i)
else if(N(t,e,r)){if("value"===e){
if(("input"===t.tag||"textarea"===t.tag)&&t.dom.value===""+i&&(a||t.dom===l()))return
if("select"===t.tag&&null!==n&&t.dom.value===""+i)return
if("option"===t.tag&&null!==n&&t.dom.value===""+i)return
if(a&&""+i!="")return void console.error("`value` is read-only on file inputs!")
}t.dom[e]=i
}else"boolean"==typeof i?i?t.dom.setAttribute(e,""):t.dom.removeAttribute(e):t.dom.setAttribute("className"===e?"class":e,i)
}}function A(t,e,n,o){
if("key"!==e&&"is"!==e&&null!=n&&!T(e))if("o"===e[0]&&"n"===e[1])L(t,e,void 0)
else if("style"===e)j(t.dom,n,null)
else if(!N(t,e,o)||"className"===e||"title"===e||"value"===e&&("option"===t.tag||"select"===t.tag&&-1===t.dom.selectedIndex&&t.dom===l())||"input"===t.tag&&"type"===e){
var i=e.indexOf(":")
;-1!==i&&(e=e.slice(i+1)),!1!==n&&t.dom.removeAttribute("className"===e?"class":e)
}else t.dom[e]=null}function T(t){
return"oninit"===t||"oncreate"===t||"onupdate"===t||"onremove"===t||"onbeforeremove"===t||"onbeforeupdate"===t
}function N(t,e,n){
return void 0===n&&(t.tag.indexOf("-")>-1||null!=t.attrs&&t.attrs.is||"href"!==e&&"list"!==e&&"form"!==e&&"width"!==e&&"height"!==e)&&e in t.dom
}var Z,I=/[A-Z]/g
function D(t){return"-"+t.toLowerCase()}function B(t){
return"-"===t[0]&&"-"===t[1]?t:"cssFloat"===t?"float":t.replace(I,D)}
function j(t,e,n){if(e===n);else if(null==n)t.style.cssText=""
else if("object"!=typeof n)t.style.cssText=n
else if(null==e||"object"!=typeof e)for(var o in t.style.cssText="",n){
null!=(i=n[o])&&t.style.setProperty(B(o),String(i))}else{for(var o in n){var i
null!=(i=n[o])&&(i=String(i))!==String(e[o])&&t.style.setProperty(B(o),i)}
for(var o in e)null!=e[o]&&null==n[o]&&t.style.removeProperty(B(o))}}
function O(){this._=n}function L(t,e,o){if(null!=t.events){
if(t.events._=n,t.events[e]===o)return
null==o||"function"!=typeof o&&"object"!=typeof o?(null!=t.events[e]&&t.dom.removeEventListener(e.slice(2),t.events,!1),
t.events[e]=void 0):(null==t.events[e]&&t.dom.addEventListener(e.slice(2),t.events,!1),
t.events[e]=o)
}else null==o||"function"!=typeof o&&"object"!=typeof o||(t.events=new O,
t.dom.addEventListener(e.slice(2),t.events,!1),t.events[e]=o)}function R(t,e,n){
"function"==typeof t.oninit&&s.call(t.oninit,e),
"function"==typeof t.oncreate&&n.push(s.bind(t.oncreate,e))}function V(t,e,n){
"function"==typeof t.onupdate&&n.push(s.bind(t.onupdate,e))}
return O.prototype=Object.create(null),O.prototype.handleEvent=function(t){
var e,n=this["on"+t.type]
"function"==typeof n?e=n.call(t.currentTarget,t):"function"==typeof n.handleEvent&&n.handleEvent(t),
this._&&!1!==t.redraw&&(0,
this._)(),!1===e&&(t.preventDefault(),t.stopPropagation())},function(t,o,i){
if(!t)throw new TypeError("DOM element being rendered to does not exist.")
if(null!=Z&&t.contains(Z))throw new TypeError("Node is currently being rendered to and thus is locked.")
var r=n,a=Z,s=[],u=l(),c=t.namespaceURI
Z=t,n="function"==typeof i?i:void 0
try{
null==t.vnodes&&(t.textContent=""),o=e.normalizeChildren(Array.isArray(o)?o:[o]),
d(t,t.vnodes,o,s,null,"http://www.w3.org/1999/xhtml"===c?void 0:c),
t.vnodes=o,null!=u&&l()!==u&&"function"==typeof u.focus&&u.focus()
for(var f=0;f<s.length;f++)s[f]()}finally{n=r,Z=a}}
}("undefined"!=typeof window?window:null),g=function(t,n,o){var i=[],r=!1,a=-1
function s(){for(a=0;a<i.length;a+=2)try{t(i[a],e(i[a+1]),l)}catch(t){o.error(t)
}a=-1}function l(){r||(r=!0,n((function(){r=!1,s()})))}return l.sync=s,{
mount:function(n,o){
if(null!=o&&null==o.view&&"function"!=typeof o)throw new TypeError("m.mount expects a component, not a vnode.")
var r=i.indexOf(n)
r>=0&&(i.splice(r,2),r<=a&&(a-=2),t(n,[])),null!=o&&(i.push(n,o),t(n,e(o),l))},
redraw:l}
}(m,"undefined"!=typeof requestAnimationFrame?requestAnimationFrame:null,"undefined"!=typeof console?console:null),y=function(t){
if("[object Object]"!==Object.prototype.toString.call(t))return""
var e=[]
for(var n in t)o(n,t[n])
return e.join("&")
function o(t,n){
if(Array.isArray(n))for(var i=0;i<n.length;i++)o(t+"["+i+"]",n[i])
else if("[object Object]"===Object.prototype.toString.call(n))for(var i in n)o(t+"["+i+"]",n[i])
else e.push(encodeURIComponent(t)+(null!=n&&""!==n?"="+encodeURIComponent(n):""))
}},b=Object.assign||function(t,e){for(var n in e)o.call(e,n)&&(t[n]=e[n])
},w=function(t,e){
if(/:([^\/\.-]+)(\.{3})?:/.test(t))throw new SyntaxError("Template parameter names must be separated by either a '/', '-', or '.'.")
if(null==e)return t
var n=t.indexOf("?"),o=t.indexOf("#"),i=o<0?t.length:o,r=n<0?i:n,a=t.slice(0,r),s={}
b(s,e)
var l=a.replace(/:([^\/\.-]+)(\.{3})?/g,(function(t,n,o){
return delete s[n],null==e[n]?t:o?e[n]:encodeURIComponent(String(e[n]))
})),u=l.indexOf("?"),c=l.indexOf("#"),f=c<0?l.length:c,h=u<0?f:u,p=l.slice(0,h)
n>=0&&(p+=t.slice(n,i)),u>=0&&(p+=(n<0?"?":"&")+l.slice(u,f))
var d=y(s)
return d&&(p+=(n<0&&u<0?"?":"&")+d),o>=0&&(p+=t.slice(o)),c>=0&&(p+=(o<0?"":"&")+l.slice(c)),
p},x=function(t,e,n){var i=0
function r(t){return new e(t)}function a(t){return function(o,i){
"string"!=typeof o?(i=o,o=o.url):null==i&&(i={})
var a=new e((function(e,n){t(w(o,i.params),i,(function(t){
if("function"==typeof i.type)if(Array.isArray(t))for(var n=0;n<t.length;n++)t[n]=new i.type(t[n])
else t=new i.type(t)
e(t)}),n)}))
if(!0===i.background)return a
var s=0
function l(){0==--s&&"function"==typeof n&&n()}return function t(e){var n=e.then
return e.constructor=r,e.then=function(){s++
var o=n.apply(e,arguments)
return o.then(l,(function(t){if(l(),0===s)throw t})),t(o)},e}(a)}}
function s(t,e){
for(var n in t.headers)if(o.call(t.headers,n)&&n.toLowerCase()===e)return!0
return!1}return r.prototype=e.prototype,r.__proto__=e,{
request:a((function(e,n,i,r){
var a,l=null!=n.method?n.method.toUpperCase():"GET",u=n.body,c=(null==n.serialize||n.serialize===JSON.serialize)&&!(u instanceof t.FormData||u instanceof t.URLSearchParams),f=n.responseType||("function"==typeof n.extract?"":"json"),h=new t.XMLHttpRequest,p=!1,d=!1,v=h,m=h.abort
for(var g in h.abort=function(){p=!0,m.call(this)
},h.open(l,e,!1!==n.async,"string"==typeof n.user?n.user:void 0,"string"==typeof n.password?n.password:void 0),
c&&null!=u&&!s(n,"content-type")&&h.setRequestHeader("Content-Type","application/json; charset=utf-8"),
"function"==typeof n.deserialize||s(n,"accept")||h.setRequestHeader("Accept","application/json, text/*"),
n.withCredentials&&(h.withCredentials=n.withCredentials),
n.timeout&&(h.timeout=n.timeout),
h.responseType=f,n.headers)o.call(n.headers,g)&&h.setRequestHeader(g,n.headers[g])
h.onreadystatechange=function(t){if(!p&&4===t.target.readyState)try{
var o,a=t.target.status>=200&&t.target.status<300||304===t.target.status||/^file:\/\//i.test(e),s=t.target.response
if("json"===f){if(!t.target.responseType&&"function"!=typeof n.extract)try{
s=JSON.parse(t.target.responseText)}catch(t){s=null}
}else f&&"text"!==f||null==s&&(s=t.target.responseText)
if("function"==typeof n.extract?(s=n.extract(t.target,n),a=!0):"function"==typeof n.deserialize&&(s=n.deserialize(s)),
a)i(s)
else{var l=function(){try{o=t.target.responseText}catch(t){o=s}
var e=new Error(o)
e.code=t.target.status,e.response=s,r(e)}
0===h.status?setTimeout((function(){d||l()})):l()}}catch(t){r(t)}
},h.ontimeout=function(t){d=!0
var e=new Error("Request timed out")
e.code=t.target.status,r(e)
},"function"==typeof n.config&&(h=n.config(h,n,e)||h)!==v&&(a=h.abort,
h.abort=function(){p=!0,a.call(this)
}),null==u?h.send():"function"==typeof n.serialize?h.send(n.serialize(u)):u instanceof t.FormData||u instanceof t.URLSearchParams?h.send(u):h.send(JSON.stringify(u))
})),jsonp:a((function(e,n,o,r){
var a=n.callbackName||"_mithril_"+Math.round(1e16*Math.random())+"_"+i++,s=t.document.createElement("script")
t[a]=function(e){delete t[a],s.parentNode.removeChild(s),o(e)
},s.onerror=function(){
delete t[a],s.parentNode.removeChild(s),r(new Error("JSONP request failed"))
},s.src=e+(e.indexOf("?")<0?"?":"&")+encodeURIComponent(n.callbackKey||"callback")+"="+encodeURIComponent(a),
t.document.documentElement.appendChild(s)}))}
}("undefined"!=typeof window?window:null,v,g.redraw)
function S(t){try{return decodeURIComponent(t)}catch(e){return t}}
var E=function(t){if(""===t||null==t)return{}
"?"===t.charAt(0)&&(t=t.slice(1))
for(var e=t.split("&"),n={},o={},i=0;i<e.length;i++){
var r=e[i].split("="),a=S(r[0]),s=2===r.length?S(r[1]):""
"true"===s?s=!0:"false"===s&&(s=!1)
var l=a.split(/\]\[?|\[/),u=o
a.indexOf("[")>-1&&l.pop()
for(var c=0;c<l.length;c++){var f=l[c],h=l[c+1],p=""==h||!isNaN(parseInt(h,10))
if(""===f)null==n[a=l.slice(0,c).join()]&&(n[a]=Array.isArray(u)?u.length:0),f=n[a]++
else if("__proto__"===f)break
if(c===l.length-1)u[f]=s
else{var d=Object.getOwnPropertyDescriptor(u,f)
null!=d&&(d=d.value),null==d&&(u[f]=d=p?[]:{}),u=d}}}return o},k=function(t){
var e=t.indexOf("?"),n=t.indexOf("#"),o=n<0?t.length:n,i=e<0?o:e,r=t.slice(0,i).replace(/\/{2,}/g,"/")
return r?("/"!==r[0]&&(r="/"+r),r.length>1&&"/"===r[r.length-1]&&(r=r.slice(0,-1))):r="/",
{path:r,params:e<0?{}:E(t.slice(e+1,o))}
},M=new RegExp("^(?:key|oninit|oncreate|onbeforeupdate|onupdate|onbeforeremove|onremove)$"),C=function(t,e){
var n={}
if(null!=e)for(var i in t)o.call(t,i)&&!M.test(i)&&e.indexOf(i)<0&&(n[i]=t[i])
else for(var i in t)o.call(t,i)&&!M.test(i)&&(n[i]=t[i])
return n},z={}
function P(t){try{return decodeURIComponent(t)}catch(e){return t}}
var A=function(t,n){
var o,i,r,a,s,l,c=null==t?null:"function"==typeof t.setImmediate?t.setImmediate:t.setTimeout,f=v.resolve(),h=!1,p=!1,d=0,m=z,g={
onbeforeupdate:function(){return!(!(d=d?2:1)||z===m)},onremove:function(){
t.removeEventListener("popstate",S,!1),t.removeEventListener("hashchange",x,!1)
},view:function(){if(d&&z!==m){var t=[e(r,a.key,a)]
return m&&(t=m.render(t[0])),t}}},y=M.SKIP={}
function x(){h=!1
var e=t.location.hash
"#"!==M.prefix[0]&&(e=t.location.search+e,"?"!==M.prefix[0]&&"/"!==(e=t.location.pathname+e)[0]&&(e="/"+e))
var u=e.concat().replace(/(?:%[a-f89][a-f0-9])+/gim,P).slice(M.prefix.length),c=k(u)
function p(t){console.error(t),E(i,null,{replace:!0})}
b(c.params,t.history.state),function t(e){for(;e<o.length;e++)if(o[e].check(c)){
var h=o[e].component,v=o[e].route,g=h,b=l=function(o){if(b===l){
if(o===y)return t(e+1)
r=null==o||"function"!=typeof o.view&&"function"!=typeof o?"div":o,a=c.params,s=u,
l=null,m=h.render?h:null,2===d?n.redraw():(d=2,n.redraw.sync())}}
return void(h.view||"function"==typeof h?(h={},b(g)):h.onmatch?f.then((function(){
return h.onmatch(c.params,u,v)})).then(b,u===i?null:p):b("div"))}
if(u===i)throw new Error("Could not resolve default route "+i+".")
E(i,null,{replace:!0})}(0)}function S(){h||(h=!0,c(x))}function E(e,n,o){
if(e=w(e,n),p){S()
var i=o?o.state:null,r=o?o.title:null
o&&o.replace?t.history.replaceState(i,r,M.prefix+e):t.history.pushState(i,r,M.prefix+e)
}else t.location.href=M.prefix+e}function M(e,r,a){
if(!e)throw new TypeError("DOM element being rendered to does not exist.")
if(o=Object.keys(a).map((function(t){
if("/"!==t[0])throw new SyntaxError("Routes must start with a '/'.")
if(/:([^\/\.-]+)(\.{3})?:/.test(t))throw new SyntaxError("Route parameter names must be separated with either '/', '.', or '-'.")
return{route:t,component:a[t],
check:(e=t,n=k(e),o=Object.keys(n.params),i=[],r=new RegExp("^"+n.path.replace(/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,(function(t,e,n){
return null==e?"\\"+t:(i.push({k:e,r:"..."===n
}),"..."===n?"(.*)":"."===n?"([^/]+)\\.":"([^/]+)"+(n||""))}))+"$"),function(t){
for(var e=0;e<o.length;e++)if(n.params[o[e]]!==t.params[o[e]])return!1
if(!i.length)return r.test(t.path)
var a=r.exec(t.path)
if(null==a)return!1
for(e=0;e<i.length;e++)t.params[i[e].k]=i[e].r?a[e+1]:decodeURIComponent(a[e+1])
return!0})}
var e,n,o,i,r})),i=r,null!=r){var s=k(r)
if(!o.some((function(t){return t.check(s)
})))throw new ReferenceError("Default route doesn't match any known routes.")}
"function"==typeof t.history.pushState?t.addEventListener("popstate",S,!1):"#"===M.prefix[0]&&t.addEventListener("hashchange",x,!1),
p=!0,n.mount(e,g),x()}return M.set=function(t,e,n){
null!=l&&((n=n||{}).replace=!0),l=null,E(t,e,n)},M.get=function(){return s
},M.prefix="#!",M.Link={view:function(t){
var e,n,o,i=u(t.attrs.selector||"a",C(t.attrs,["options","params","selector","onclick"]),t.children)
return(i.attrs.disabled=Boolean(i.attrs.disabled))?(i.attrs.href=null,i.attrs["aria-disabled"]="true"):(e=t.attrs.options,
n=t.attrs.onclick,
o=w(i.attrs.href,t.attrs.params),i.attrs.href=M.prefix+o,i.attrs.onclick=function(t){
var i
"function"==typeof n?i=n.call(t.currentTarget,t):null==n||"object"!=typeof n||"function"==typeof n.handleEvent&&n.handleEvent(t),
!1===i||t.defaultPrevented||0!==t.button&&0!==t.which&&1!==t.which||t.currentTarget.target&&"_self"!==t.currentTarget.target||t.ctrlKey||t.metaKey||t.shiftKey||t.altKey||(t.preventDefault(),
t.redraw=!1,M.set(o,null,e))}),i}},M.param=function(t){return a&&null!=t?a[t]:a
},M}("undefined"!=typeof window?window:null,g),T=function(){
return c.apply(this,arguments)}
T.m=c,T.trust=c.trust,T.fragment=c.fragment,T.Fragment="[",T.mount=g.mount,T.route=A,
T.render=m,
T.redraw=g.redraw,T.request=x.request,T.jsonp=x.jsonp,T.parseQueryString=E,
T.buildQueryString=y,
T.parsePathname=k,T.buildPathname=w,T.vnode=e,T.PromisePolyfill=d,T.censor=C
var N=T,Z=[],I=[]
function D(t,e){if(t&&"undefined"!=typeof document){
var n,o=!0===e.prepend?"prepend":"append",i=!0===e.singleTag,r="string"==typeof e.container?document.querySelector(e.container):document.getElementsByTagName("head")[0]
if(i){var a=Z.indexOf(r)
;-1===a&&(a=Z.push(r)-1,I[a]={}),n=I[a]&&I[a][o]?I[a][o]:I[a][o]=s()}else n=s()
65279===t.charCodeAt(0)&&(t=t.substring(1)),n.styleSheet?n.styleSheet.cssText+=t:n.appendChild(document.createTextNode(t))
}function s(){var t=document.createElement("style")
if(t.setAttribute("type","text/css"),e.attributes)for(var n=Object.keys(e.attributes),i=0;i<n.length;i++)t.setAttribute(n[i],e.attributes[n[i]])
var a="prepend"===o?"afterbegin":"beforeend"
return r.insertAdjacentElement(a,t),t}}
var B="body,html{height:100%;margin:0}h1{margin-block-start:0;text-align:center}form{padding:1ex}table.formats{border-collapse:collapse}.hidden{display:none}h2{border-top:1px dashed #000}"
D(B,{})
var j,O="svg{box-sizing:border-box;height:100;left:0;padding:0;position:absolute;top:0;width:100%}path{stroke-width:1px;vector-effect:non-scaling-stroke;fill-rule:evenodd}path.DBS{fill:#cdff00;stroke:#000}path.DBS:first-of-type{fill:none}path.DBS:hover{stroke-dasharray:1%;animation:dash 1s linear infinite}path.part{fill:#fff;fill-opacity:0;stroke:#000}path.part:hover{fill:#ff0;fill-opacity:50%;stroke-dasharray:1%;animation:dash 1s linear infinite}path.cluster{stroke:#000;fill:#ff0;fill-opacity:15%}path.cluster:hover{fill:#ff0;fill-opacity:50%;stroke-dasharray:1%;animation:dash 1s linear infinite}path.route{stroke:red;fill:none}circle.pierce{r:.2%;fill:#0f0;stroke:navy;stroke-width:1px;vector-effect:non-scaling-stroke}circle.pierce:hover{fill:#ff0;stroke:red}circle.route:hover{fill-opacity:75%;stroke:#0f0}@-moz-keyframes dash{0%{stroke-dashoffset:0%}to{stroke-dashoffset:-2%}}@-webkit-keyframes dash{0%{stroke-dashoffset:0%}to{stroke-dashoffset:-2%}}@-o-keyframes dash{0%{stroke-dashoffset:0%}to{stroke-dashoffset:-2%}}@keyframes dash{0%{stroke-dashoffset:0%}to{stroke-dashoffset:-2%}}"
D(O,{}),j=N
var L,R,V,q={view:function(){return j.fragment(j("style",B),j("style",O))}}
L=N,R=Object.freeze({__proto__:null,
homepage:"https://github.com/ukoloff/j2pcgtsp"})
V={view:function(){return L.fragment(L("li","You can save ",L("a",{
href:"j2gtsp.html",target:"_blank",download:"j2gtsp.html",
type:"application/octet-stream"
},"this file")," (Hint: Right click + Save as) ","and run it locally"),L("li","Command line (CLI) version (Node.js required):",L("ul",L("li","For ",L("a",{
href:"j2gtsp",target:"_blank",download:"j2gtsp",type:"application/octet-stream"
},"Linux")," // chmod +x j2gtsp"),L("li","For ",L("a",{href:"j2gtsp.bat",
target:"_blank",download:"j2gtsp.bat",type:"application/octet-stream"
},"Windows")))))}}
var _,F={view:function(){return L.fragment(L("h2","Note:"),L("ul",L("li",L("a",{
href:R.homepage,target:"_blank"
},"Source code"),"@GitHub"),location.host?L(V):void 0))}},U={startPointMode:0,
hideIcons:!1,onrender:0},G=function(t){if(!t)throw Error("Assertion failed!")}
_=G
var H=W
function W(t){var e
return e=JSON.parse(t),_(e.length),e}W.success=function(t){var e,n
return e=t.map((function(t){return t.partid})),n=e.length,e=function(t){var e
return e={},t.filter((function(t){return!e[t]&&(e[t]=!0)}))
}(e),n+" parts: "+e.slice(0,3).join(", ")+(e.length>3?"...":".")}
var X=function(t){var e,n,o,i,r
for(e=[],n=[],o=0,r=(i=t.Contours).length;o<r;++o)a(i[o])
function a(t,o){var i,r,s,l,u,c
for(n.push(i={id:t.Index,up:o?o.up.concat(o):[],points:[],groups:[]
}),o&&o.groups.push(i),r=0,l=(s=t.Points||[]).length;r<l;++r)u=s[r],e.push(c={
id:u.GlobalIndex,x:u.X,y:u.Y,group:i}),i.points.push(c)
for(r=0,l=(s=t.NestedContours||[]).length;r<l;++r)a(t=s[r],i)}return{start:{
x:t.TaskData.StartX||t.TaskData.FinishX||0,
y:t.TaskData.StartY||t.TaskData.FinishY||0},points:e,groups:n}}
var $=function(t){var e,n,o,i,r,a,s=[]
for(t.iPoints=e={},n=0,i=(o=t.points).length;n<i;++n)r=o[n],e[r.id]=r
for(t.iGroups=e={},n=0,i=(o=t.groups).length;n<i;++n)a=o[n],s.push(e[a.id]=a)
return s}
var Y,J,K,Q,tt=[].slice,et=Array.from||function(t){return tt.call(t)}
Y=G,J=X,K=$,Q=function(t){return t.bounds={min:{
x:Math.min.apply(Math,[t.start.x].concat(et(t.points.map((function(t){return t.x
}))))),y:Math.min.apply(Math,[t.start.y].concat(et(t.points.map((function(t){
return t.y})))))},max:{
x:Math.max.apply(Math,[t.start.x].concat(et(t.points.map((function(t){return t.x
}))))),y:Math.max.apply(Math,[t.start.y].concat(et(t.points.map((function(t){
return t.y})))))}}}
var nt=ot
function ot(t){var e,n
return function(t){Y(t.TaskData),Y(t.Contours)
}(e=JSON.parse(t)),n=J(e),K(n),Q(n),n}ot.success=function(t){
return t.points.length+"/"+t.groups.length+" points/groups"}
var it=rt
function rt(t){var e
if(e=/\bTour(?:\s+Ordering)?\s*:\s*\[([\s\d,]*)\]/.exec(t))return e[1].split(/\D+/).filter((function(t){
return t})).map(Number)
throw Error("GTSP route not found")}rt.success=function(t){
return t.length+" route point(s)"}
var at=h((function(t,e){var n,o,i,r,a,s
for(r in n=H,o=nt,i=it,e.dbs=n,e.discrete=o,e.route=i,a=e)s=a[r],e[r]={parser:s}
}))
at.dbs,at.discrete,at.route
var st,lt={routeLength:0,badFiles:[]}
st=U
var ut,ct,ft,ht,pt=function(t,e){var n
return n=function(t){return function(){switch(st.startPointMode){case 1:return 1
case 2:return 0
default:return 1===(null!=t?t[0]:void 0)?1:0}}()}(t),t.map((function(t){
return e.iPoints[t-n]||e.start}))}
function dt(t){return t*t}function vt(t,e){
return Math.sqrt(dt(t.x-e.x)+dt(t.y-e.y))}ut=pt,ct=at,ft=lt,ht=function(t,e){
var n,o,i,r,a,s
n=ut.apply(this,arguments),o=0,n.length&&(i=n[n.length-1])
for(r=0,a=n.length;r<a;++r)s=n[r],o+=vt(i,s),i=s
return o}
var mt,gt,yt,bt=function(){
ct.discrete.data&&ct.route.data&&(ft.routeLength=ht(ct.route.data,ct.discrete.data))
}
mt=N,gt=U,yt=bt
var wt,xt,St={view:function(){var t
return mt.fragment(mt("p"),mt("label","Starting point: ",mt("select",{
oncreate:function(t){try{
t.dom.selectedIndex=gt.startPointMode=Number(localStorage["starting-pont"])
}catch(t){}},onchange:function(){try{
localStorage["starting-pont"]=gt.startPointMode=this.selectedIndex,yt()
}catch(t){}}},function(){var e,n,o,i=[]
for(e=0,o=(n="Autodetect;First contour (new format);Last contour (old format)".split(";")).length;e<o;++e)t=n[e],
i.push(mt("option",t))
return i}())),mt("br"),mt("label",mt("input",{type:"checkbox",
checked:gt.hideIcons=!!localStorage["hide-icons"],onclick:function(){try{
localStorage["hide-icons"]=gt.hideIcons=this.checked?"+":""}catch(t){}}
}),"Hide control icons"),mt("p"))}}
wt=N,xt=at
var Et,kt,Mt,Ct,zt,Pt,At={view:function(){
return wt("table.formats[border]",wt("tr",wt("th","Data"),wt("th",".ext"),wt("th",wt("nobr","File name")),wt("th[width=100%]","Additional info")),wt("tr",wt("td","DBS"),wt("td",".dbs.json"),wt("td",wt("b",wt("nobr",xt.dbs.name))),wt("td",xt.dbs.info)),wt("tr",wt("td","GTSP"),wt("td",".json"),wt("td",wt("b",wt("nobr",xt.discrete.name))),wt("td",xt.discrete.info)),wt("tr",wt("td","Route"),wt("td",".result.txt"),wt("td",wt("b",wt("nobr",xt.route.name))),wt("td",xt.route.info)))
}}
Et=at,kt=lt,Mt=N,Ct=function(t,e){var n,o,i,r,a
for(n in o=Et){i=o[n]
try{return r=i.parser(t),a=i.parser.success(r),i.data=r,i.info=a,i.name=e,n
}catch(t){}}return kt.badFiles.push(e),!1},zt=bt,Pt=lt
function Tt(){return!1}function Nt(t){var e,n,o
for(Pt.badFiles.length=0,e=Promise.resolve(),n=0,o=t.length;n<o;++n)i.call(this,t[n])
function i(t){e=e.then((function(){return t.text().then((function(e){
Ct(e,t.name)}))}))}e.then((function(){zt(),Mt.redraw()}))}var Zt,It={
oncreate:function(){var t
;(t=document.body).ondragenter=Tt,t.ondragleave=Tt,t.ondragover=Tt,
t.ondrop=function(t){return Nt(t.dataTransfer.files),!1}},onremove:function(){
var t
;(t=document.body).ondragenter=null,t.ondragleave=null,t.ondragover=null,t.ondrop=null
},view:function(){var t
return t=this,Mt.fragment(Mt("input.hidden",{type:"file",multiple:!0,
oncreate:function(e){(t.uploadButton=e.dom).onchange=function(){Nt(this.files)}}
}),Mt("button",{type:"button",onclick:function(){t.uploadButton.click()}
},"Upload file(s)")," ...or drag-and-drop file(s) onto this page...")}}
Zt=at
var Dt,Bt=function(){return Zt.discrete.data||Zt.dbs.data}
Dt=at
var jt=function(){return Dt.discrete.name||Dt.dbs.name||"none"}
var Ot=function(t){var e
return.01,e={x:t.max.x-t.min.x,y:t.max.y-t.min.y
},'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  height="100%" width="100%"\n  viewBox="'+[t.min.x-.01*e.x,-t.max.y-.01*e.y,1.02*e.x,1.02*e.y].join(" ")+'"><g><g transform = "scale(1, -1)">'
}
function Lt(t,e){var n,o,i,r
for(n=0,o=t.length;n<o;++n)i=t[n],r&&e({a:r,b:r[2],z:i}),r=i}function Rt(t,e){
var n,o,i
for(n=0,i=(o=t.paths).length;n<i;++n)Lt(o[n],e)}
var Vt,qt,_t,Ft,Ut,Gt,Ht,Wt,Xt,$t=function(t){var e,n,o=[]
for(e=0;e<=1;++e)n=e,o.push(t.z[n]-t.a[n])
return o}
function Yt(t,e){var n
for(n=0;n<=1;++n)t[n]*=e}function Jt(t,e){
return[t[0]*e[0]-t[1]*e[1],t[0]*e[1]+t[1]*e[0]]}
Vt=$t,qt=$t,_t=$t,Ft=function(t){return Math.abs(1/t.b+t.b)/4*function(t){
var e,n,o,i
for(e=0,n=0,o=t.length;n<o;++n)i=t[n],e+=i*i
return Math.sqrt(e)}(Vt(t))},Ut=function(t){var e,n,o,i,r
for(Yt(e=qt(t),(1/t.b-t.b)/2),o=[],i=0;i<=1;++i)r=i,o.push(t.a[r]+t.z[r])
return(n=o)[0]-=e[1],n[1]+=e[0],Yt(n,.5),n},Gt=function(t,e){var n,o
for(n=0,o=t.length;n<o;++n)Rt(t[n],e)},Ht=function(t){var e,n,o,i,r,a,s,l,u,c,f
if(e={min:{x:Math.min(t.a[0],t.z[0]),y:Math.min(t.a[1],t.z[1])},max:{
x:Math.max(t.a[0],t.z[0]),y:Math.max(t.a[1],t.z[1])}},!t.b)return e
for(n=_t(t),o=Jt(o=[1,-t.b],o),i=Jt(n,o),o[0]=-o[0],i.push.apply(i,Jt(n,o)),i.push.apply(i,n),
i.push(-n[0],-n[1]),r=0,a=i.length;r<a;++r)s=r,l=i[r],i[s]=l?l>0?1:-1:0
for(u=0,r=0;r<=3;++r)i[s=r]&&i[s]!==i[s+4]&&(u|=1<<s%2+i[s]+1)
if(!u)return e
for(c=Ut(t),f=Ft(t),r=0;r<=3;++r)if(u&1<<(s=r))switch(s){case 0:e.min.x=c[0]-f
break
case 1:e.min.y=c[1]-f
break
case 2:e.max.x=c[0]+f
break
case 3:e.max.y=c[1]+f}return e},Wt=function(t){var e
return Gt(t,(function(t){var n,o,i
n=Ht(t),e=e?(o=e,i=n,{min:{x:Math.min(o.min.x,i.min.x),
y:Math.min(o.min.y,i.min.y)},max:{x:Math.max(o.max.x,i.max.x),
y:Math.max(o.max.y,i.max.y)}}):n})),e},Xt=function(t){var e,n,o,i,r
for(e="",n=0,o=t.length;n<o;++n)i=n,r=t[n],e+="\n\t"+(i?"L":"M")+" "+r.x+" "+r.y
return e+" Z"}
var Kt,Qt=function(t,e){var n,o,i
null==e&&(e={}),"string"!=typeof t&&(t=Xt(t))
for(o in n="",e)i=e[o],"title"!==o&&(n+=" "+o+'="'+i+'"')
return"<path"+n+' d="'+t+'">\n'+(e.title?"<title>"+e.title+"</title>":"")+"</path>"
}
Kt=Qt
var te=function(t){return t.map(ee).join("")}
function ee(t){return Kt(t.paths.map(ne).join(""),{class:"DBS",
title:"Part: "+t.partid+"\nContours: "+t.paths.length})}function ne(t){
var e,n,o,i,r,a,s,l
for(e="",n=[],o=0,i=t.length;o<i;++o)r=t[o],e+="\n",n.length?n[2]?e+="A "+(a=Math.abs(1/n[2]+n[2])/4*(s=r,
l=n,
Math.sqrt(oe(s[0]-l[0])+oe(s[1]-l[1]))))+" "+a+" 0 "+Number(1<Math.abs(n[2]))+" "+Number(n[2]>0):e+="L":e+="M",
e+=" "+r[0]+" "+r[1],n=r
return t.length>0&&t[0][0]===t[t.length-1][0]&&t[0][1]===t[t.length-1][1]&&(e+=" Z"),
e}function oe(t){return t*t}var ie,re=function(t){var e,n,o,i,r,a,s,l,u,c,f,h
for(e="",n=0,i=(o=t.groups).length;n<i;++n)for(r=o[n],a=0,l=(s=r.points).length;a<l;++a)u=s[a],
e+='\n<circle class="pierce" cx="'+u.x+'" cy="'+u.y+'"><title>Point #'+(u.id||"-")+"\nGroup #"+((null!=(c=u.group)?c.id:void 0)||"-")+" ("+((null!=(f=u.group)&&null!=(h=f.points)?h.length:void 0)||0)+" points)\nX: "+u.x+"\nY: "+u.y+"\n</title></circle>"
return e}
ie=Qt
var ae,se,le=function(t){return t.groups.map((function(t){return ie(function(t){
return"M "+t.map((function(t){return t.x+" "+t.y})).join("\nL ")+" Z"
}(t.points),{class:"cluster",title:"Cluster #"+t.id+"\nPoints: "+t.points.length
})})).join("")}
ae=pt,se=Qt
var ue,ce,fe,he=function(t,e){var n
return n=ae.apply(this,arguments),se(n,{class:"route"})}
ue={open:Ot,close:function(){return"\n</g></g></svg>"}},ce=at,fe=function(t){
return t.bounds=Wt(t)}
var pe=function(){var t,e,n
t=(e=ce.discrete.data)?e.bounds:fe(ce.dbs.data),n=ue.open(t),(e=ce.dbs.data)&&(n+=te(e))
;(e=ce.discrete.data)&&(n+=(ce.dbs.data?re:le)(e),
(e=ce.route.data)&&(n+=he(e,ce.discrete.data)))
return n+=ue.close()}
var de,ve,me,ge,ye,be,we,xe,Se,Ee,ke,Me,Ce,ze,Pe,Ae
de=U,ve=Object.freeze({__proto__:null,
path:"https://cdn.jsdelivr.net/npm/svg-pan-zoom@3.6.1/dist/svg-pan-zoom.min.js"
}),me=pe,ge=lt,ye=function(){
return'<script src="'+ve.path+"\"><\/script>\n<script>\n  setTimeout(function() {\n    svgPanZoom('svg', {controlIconsEnabled: "+!de.hideIcons+"})\n  })\n<\/script>"
},be=jt,we=function(){
return"<!DOCTYPE html>\n<html><head>\n<title>PCGTSP Visualization</title>\n<style>\nsvg{box-sizing:border-box;height:100;left:0;padding:0;position:absolute;top:0;width:100%}path{stroke-width:1px;vector-effect:non-scaling-stroke;fill-rule:evenodd}path.DBS{fill:#cdff00;stroke:#000}path.DBS:first-of-type{fill:none}path.DBS:hover{stroke-dasharray:1%;animation:dash 1s linear infinite}path.part{fill:#fff;fill-opacity:0;stroke:#000}path.part:hover{fill:#ff0;fill-opacity:50%;stroke-dasharray:1%;animation:dash 1s linear infinite}path.cluster{stroke:#000;fill:#ff0;fill-opacity:15%}path.cluster:hover{fill:#ff0;fill-opacity:50%;stroke-dasharray:1%;animation:dash 1s linear infinite}path.route{stroke:red;fill:none}circle.pierce{r:.2%;fill:#0f0;stroke:navy;stroke-width:1px;vector-effect:non-scaling-stroke}circle.pierce:hover{fill:#ff0;stroke:red}circle.route:hover{fill-opacity:75%;stroke:#0f0}@-moz-keyframes dash{0%{stroke-dashoffset:0%}to{stroke-dashoffset:-2%}}@-webkit-keyframes dash{0%{stroke-dashoffset:0%}to{stroke-dashoffset:-2%}}@-o-keyframes dash{0%{stroke-dashoffset:0%}to{stroke-dashoffset:-2%}}@keyframes dash{0%{stroke-dashoffset:0%}to{stroke-dashoffset:-2%}}\n</style>\n"+ye()+"\n</head><body>\n"+me()+"\n"+((t=ge.routeLength)?"\x3c!--\nRoute Length     : "+t+"\n--\x3e":"")+"\n</body></html>"
var t},xe=N,Se=F,Ee=St,ke=At,Me=It,Ce=Bt,ze=lt,Pe=U,Ae=function(){
t=be()+".html",
e=we(),(n=document.createElement("a")).setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),
n.setAttribute("download",t),
document.createEvent?((o=document.createEvent("MouseEvents")).initEvent("click",!0,!0),
n.dispatchEvent(o)):n.click()
var t,e,n,o}
var Te={view:function(){var t
return xe.fragment(xe("h1",document.title="View DBS / JSON / GTSP"),xe("form",xe(ke),xe(Ee),xe(Me),ze.badFiles.length?xe("p","Unknown files: "+ze.badFiles.join(", ")):void 0,xe("hr"),(t=ze.routeLength)?xe("p","Route length: "+t):void 0,xe("button",{
type:"button",disabled:!Ce(),onclick:Pe.onrender
},"View!")," in View mode hit Back or Refresh (F5) to come back to this page",xe("p"),xe("button",{
type:"button",disabled:!Ce(),onclick:Ae},"Export HTML + SVG"),xe(Se)))}
},Ne=function(){var t,e,n,o="",i=[],r={passive:!0}
function a(e,a,s,l){var u
u="wheel"===n?s:function(t,e){var o=function(t){!t&&(t=window.event)
var o={originalEvent:t,target:t.target||t.srcElement,type:"wheel",
deltaMode:"MozMousePixelScroll"==t.type?0:1,deltaX:0,delatZ:0,
preventDefault:function(){t.preventDefault?t.preventDefault():t.returnValue=!1}}
return"mousewheel"==n?(o.deltaY=-1/40*t.wheelDelta,t.wheelDeltaX&&(o.deltaX=-1/40*t.wheelDeltaX)):o.deltaY=t.detail,
e(o)}
return i.push({element:t,fn:o}),o}(e,s),e[t](o+a,u,!!l&&r)}function s(t,a,s,l){
var u
u="wheel"===n?s:function(t){
for(var e=0;e<i.length;e++)if(i[e].element===t)return i[e].fn
return function(){}}(t),t[e](o+a,u,!!l&&r),function(t){
for(var e=0;e<i.length;e++)if(i[e].element===t)return i.splice(e,1)}(t)}
return window.addEventListener?(t="addEventListener",
e="removeEventListener"):(t="attachEvent",
e="detachEvent",o="on"),n="onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll",
{on:function(t,e,o){
a(t,n,e,o),"DOMMouseScroll"==n&&a(t,"MozMousePixelScroll",e,o)},
off:function(t,e,o){
s(t,n,e,o),"DOMMouseScroll"==n&&s(t,"MozMousePixelScroll",e,o)}}}(),Ze={
extend:function(t,e){
for(var n in t=t||{},e)this.isObject(e[n])?t[n]=this.extend(t[n],e[n]):t[n]=e[n]
return t},isElement:function(t){
return t instanceof HTMLElement||t instanceof SVGElement||t instanceof SVGSVGElement||t&&"object"==typeof t&&null!==t&&1===t.nodeType&&"string"==typeof t.nodeName
},isObject:function(t){
return"[object Object]"===Object.prototype.toString.call(t)},
isNumber:function(t){return!isNaN(parseFloat(t))&&isFinite(t)},
getSvg:function(t){var e,n
if(this.isElement(t))e=t
else{
if(!("string"==typeof t||t instanceof String))throw new Error("Provided selector is not an HTML object nor String")
if(!(e=document.querySelector(t)))throw new Error("Provided selector did not find any elements. Selector: "+t)
}if("svg"===e.tagName.toLowerCase())n=e
else if("object"===e.tagName.toLowerCase())n=e.contentDocument.documentElement
else{
if("embed"!==e.tagName.toLowerCase())throw"img"===e.tagName.toLowerCase()?new Error('Cannot script an SVG in an "img" element. Please use an "object" element or an in-line SVG.'):new Error("Cannot get SVG.")
n=e.getSVGDocument().documentElement}return n},proxy:function(t,e){
return function(){return t.apply(e,arguments)}},getType:function(t){
return Object.prototype.toString.apply(t).replace(/^\[object\s/,"").replace(/\]$/,"")
},mouseAndTouchNormalize:function(t,e){
if(void 0===t.clientX||null===t.clientX)if(t.clientX=0,
t.clientY=0,void 0!==t.touches&&t.touches.length){
if(void 0!==t.touches[0].clientX)t.clientX=t.touches[0].clientX,
t.clientY=t.touches[0].clientY
else if(void 0!==t.touches[0].pageX){var n=e.getBoundingClientRect()
t.clientX=t.touches[0].pageX-n.left,t.clientY=t.touches[0].pageY-n.top}
}else void 0!==t.originalEvent&&void 0!==t.originalEvent.clientX&&(t.clientX=t.originalEvent.clientX,
t.clientY=t.originalEvent.clientY)},isDblClick:function(t,e){
if(2===t.detail)return!0
if(null!=e){
var n=t.timeStamp-e.timeStamp,o=Math.sqrt(Math.pow(t.clientX-e.clientX,2)+Math.pow(t.clientY-e.clientY,2))
return n<250&&o<10}return!1},now:Date.now||function(){return(new Date).getTime()
},throttle:function(t,e,n){var o,i,r,a=this,s=null,l=0
n||(n={})
var u=function(){l=!1===n.leading?0:a.now(),s=null,r=t.apply(o,i),s||(o=i=null)}
return function(){var c=a.now()
l||!1!==n.leading||(l=c)
var f=e-(c-l)
return o=this,i=arguments,f<=0||f>e?(clearTimeout(s),s=null,l=c,r=t.apply(o,i),s||(o=i=null)):s||!1===n.trailing||(s=setTimeout(u,f)),
r}},createRequestAnimationFrame:function(t){var e=null
return"auto"!==t&&t<60&&t>1&&(e=Math.floor(1e3/t)),null===e?window.requestAnimationFrame||Ie(33):Ie(e)
}}
function Ie(t){return function(e){window.setTimeout(e,t)}}
Ze.extend,Ze.isElement,
Ze.isObject,Ze.isNumber,Ze.getSvg,Ze.proxy,Ze.getType,Ze.mouseAndTouchNormalize,
Ze.isDblClick,Ze.now,Ze.throttle,Ze.createRequestAnimationFrame
var De="unknown"
document.documentMode&&(De="ie")
var Be={svgNS:"http://www.w3.org/2000/svg",
xmlNS:"http://www.w3.org/XML/1998/namespace",
xmlnsNS:"http://www.w3.org/2000/xmlns/",xlinkNS:"http://www.w3.org/1999/xlink",
evNS:"http://www.w3.org/2001/xml-events",
getBoundingClientRectNormalized:function(t){
if(t.clientWidth&&t.clientHeight)return{width:t.clientWidth,
height:t.clientHeight}
if(t.getBoundingClientRect())return t.getBoundingClientRect()
throw new Error("Cannot get BoundingClientRect for SVG.")},
getOrCreateViewport:function(t,e){var n=null
if(!(n=Ze.isElement(e)?e:t.querySelector(e))){
var o=Array.prototype.slice.call(t.childNodes||t.children).filter((function(t){
return"defs"!==t.nodeName&&"#text"!==t.nodeName}))
1===o.length&&"g"===o[0].nodeName&&null===o[0].getAttribute("transform")&&(n=o[0])
}if(!n){var i="viewport-"+(new Date).toISOString().replace(/\D/g,"")
;(n=document.createElementNS(this.svgNS,"g")).setAttribute("id",i)
var r=t.childNodes||t.children
if(r&&r.length>0)for(var a=r.length;a>0;a--)"defs"!==r[r.length-a].nodeName&&n.appendChild(r[r.length-a])
t.appendChild(n)}var s=[]
return n.getAttribute("class")&&(s=n.getAttribute("class").split(" ")),~s.indexOf("svg-pan-zoom_viewport")||(s.push("svg-pan-zoom_viewport"),
n.setAttribute("class",s.join(" "))),n},setupSvgAttributes:function(t){
if(t.setAttribute("xmlns",this.svgNS),
t.setAttributeNS(this.xmlnsNS,"xmlns:xlink",this.xlinkNS),
t.setAttributeNS(this.xmlnsNS,"xmlns:ev",this.evNS),null!==t.parentNode){
var e=t.getAttribute("style")||""
;-1===e.toLowerCase().indexOf("overflow")&&t.setAttribute("style","overflow: hidden; "+e)
}},internetExplorerRedisplayInterval:300,
refreshDefsGlobal:Ze.throttle((function(){
for(var t=document.querySelectorAll("defs"),e=t.length,n=0;n<e;n++){var o=t[n]
o.parentNode.insertBefore(o,o)}}),f?f.internetExplorerRedisplayInterval:null),
setCTM:function(t,e,n){
var o=this,i="matrix("+e.a+","+e.b+","+e.c+","+e.d+","+e.e+","+e.f+")"
t.setAttributeNS(null,"transform",i),"transform"in t.style?t.style.transform=i:"-ms-transform"in t.style?t.style["-ms-transform"]=i:"-webkit-transform"in t.style&&(t.style["-webkit-transform"]=i),
"ie"===De&&n&&(n.parentNode.insertBefore(n,n),window.setTimeout((function(){
o.refreshDefsGlobal()}),o.internetExplorerRedisplayInterval))},
getEventPoint:function(t,e){var n=e.createSVGPoint()
return Ze.mouseAndTouchNormalize(t,e),n.x=t.clientX,n.y=t.clientY,n},
getSvgCenterPoint:function(t,e,n){return this.createSVGPoint(t,e/2,n/2)},
createSVGPoint:function(t,e,n){var o=t.createSVGPoint()
return o.x=e,o.y=n,o}},je={enable:function(t){var e=t.svg.querySelector("defs")
if(e||(e=document.createElementNS(Be.svgNS,"defs"),t.svg.appendChild(e)),!e.querySelector("style#svg-pan-zoom-controls-styles")){
var n=document.createElementNS(Be.svgNS,"style")
n.setAttribute("id","svg-pan-zoom-controls-styles"),n.setAttribute("type","text/css"),
n.textContent=".svg-pan-zoom-control { cursor: pointer; fill: black; fill-opacity: 0.333; } .svg-pan-zoom-control:hover { fill-opacity: 0.8; } .svg-pan-zoom-control-background { fill: white; fill-opacity: 0.5; } .svg-pan-zoom-control-background { fill-opacity: 0.8; }",
e.appendChild(n)}var o=document.createElementNS(Be.svgNS,"g")
o.setAttribute("id","svg-pan-zoom-controls"),o.setAttribute("transform","translate("+(t.width-70)+" "+(t.height-76)+") scale(0.75)"),
o.setAttribute("class","svg-pan-zoom-control"),
o.appendChild(this._createZoomIn(t)),
o.appendChild(this._createZoomReset(t)),o.appendChild(this._createZoomOut(t)),
t.svg.appendChild(o),t.controlIcons=o},_createZoomIn:function(t){
var e=document.createElementNS(Be.svgNS,"g")
e.setAttribute("id","svg-pan-zoom-zoom-in"),e.setAttribute("transform","translate(30.5 5) scale(0.015)"),
e.setAttribute("class","svg-pan-zoom-control"),
e.addEventListener("click",(function(){t.getPublicInstance().zoomIn()
}),!1),e.addEventListener("touchstart",(function(){
t.getPublicInstance().zoomIn()}),!1)
var n=document.createElementNS(Be.svgNS,"rect")
n.setAttribute("x","0"),n.setAttribute("y","0"),n.setAttribute("width","1500"),n.setAttribute("height","1400"),
n.setAttribute("class","svg-pan-zoom-control-background"),e.appendChild(n)
var o=document.createElementNS(Be.svgNS,"path")
return o.setAttribute("d","M1280 576v128q0 26 -19 45t-45 19h-320v320q0 26 -19 45t-45 19h-128q-26 0 -45 -19t-19 -45v-320h-320q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h320v-320q0 -26 19 -45t45 -19h128q26 0 45 19t19 45v320h320q26 0 45 19t19 45zM1536 1120v-960 q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"),
o.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(o),e},
_createZoomReset:function(t){var e=document.createElementNS(Be.svgNS,"g")
e.setAttribute("id","svg-pan-zoom-reset-pan-zoom"),e.setAttribute("transform","translate(5 35) scale(0.4)"),
e.setAttribute("class","svg-pan-zoom-control"),
e.addEventListener("click",(function(){t.getPublicInstance().reset()
}),!1),e.addEventListener("touchstart",(function(){t.getPublicInstance().reset()
}),!1)
var n=document.createElementNS(Be.svgNS,"rect")
n.setAttribute("x","2"),n.setAttribute("y","2"),n.setAttribute("width","182"),n.setAttribute("height","58"),
n.setAttribute("class","svg-pan-zoom-control-background"),e.appendChild(n)
var o=document.createElementNS(Be.svgNS,"path")
o.setAttribute("d","M33.051,20.632c-0.742-0.406-1.854-0.609-3.338-0.609h-7.969v9.281h7.769c1.543,0,2.701-0.188,3.473-0.562c1.365-0.656,2.048-1.953,2.048-3.891C35.032,22.757,34.372,21.351,33.051,20.632z"),
o.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(o)
var i=document.createElementNS(Be.svgNS,"path")
return i.setAttribute("d","M170.231,0.5H15.847C7.102,0.5,0.5,5.708,0.5,11.84v38.861C0.5,56.833,7.102,61.5,15.847,61.5h154.384c8.745,0,15.269-4.667,15.269-10.798V11.84C185.5,5.708,178.976,0.5,170.231,0.5z M42.837,48.569h-7.969c-0.219-0.766-0.375-1.383-0.469-1.852c-0.188-0.969-0.289-1.961-0.305-2.977l-0.047-3.211c-0.03-2.203-0.41-3.672-1.142-4.406c-0.732-0.734-2.103-1.102-4.113-1.102h-7.05v13.547h-7.055V14.022h16.524c2.361,0.047,4.178,0.344,5.45,0.891c1.272,0.547,2.351,1.352,3.234,2.414c0.731,0.875,1.31,1.844,1.737,2.906s0.64,2.273,0.64,3.633c0,1.641-0.414,3.254-1.242,4.84s-2.195,2.707-4.102,3.363c1.594,0.641,2.723,1.551,3.387,2.73s0.996,2.98,0.996,5.402v2.32c0,1.578,0.063,2.648,0.19,3.211c0.19,0.891,0.635,1.547,1.333,1.969V48.569z M75.579,48.569h-26.18V14.022h25.336v6.117H56.454v7.336h16.781v6H56.454v8.883h19.125V48.569z M104.497,46.331c-2.44,2.086-5.887,3.129-10.34,3.129c-4.548,0-8.125-1.027-10.731-3.082s-3.909-4.879-3.909-8.473h6.891c0.224,1.578,0.662,2.758,1.316,3.539c1.196,1.422,3.246,2.133,6.15,2.133c1.739,0,3.151-0.188,4.236-0.562c2.058-0.719,3.087-2.055,3.087-4.008c0-1.141-0.504-2.023-1.512-2.648c-1.008-0.609-2.607-1.148-4.796-1.617l-3.74-0.82c-3.676-0.812-6.201-1.695-7.576-2.648c-2.328-1.594-3.492-4.086-3.492-7.477c0-3.094,1.139-5.664,3.417-7.711s5.623-3.07,10.036-3.07c3.685,0,6.829,0.965,9.431,2.895c2.602,1.93,3.966,4.73,4.093,8.402h-6.938c-0.128-2.078-1.057-3.555-2.787-4.43c-1.154-0.578-2.587-0.867-4.301-0.867c-1.907,0-3.428,0.375-4.565,1.125c-1.138,0.75-1.706,1.797-1.706,3.141c0,1.234,0.561,2.156,1.682,2.766c0.721,0.406,2.25,0.883,4.589,1.43l6.063,1.43c2.657,0.625,4.648,1.461,5.975,2.508c2.059,1.625,3.089,3.977,3.089,7.055C108.157,41.624,106.937,44.245,104.497,46.331z M139.61,48.569h-26.18V14.022h25.336v6.117h-18.281v7.336h16.781v6h-16.781v8.883h19.125V48.569z M170.337,20.14h-10.336v28.43h-7.266V20.14h-10.383v-6.117h27.984V20.14z"),
i.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(i),e},
_createZoomOut:function(t){var e=document.createElementNS(Be.svgNS,"g")
e.setAttribute("id","svg-pan-zoom-zoom-out"),e.setAttribute("transform","translate(30.5 70) scale(0.015)"),
e.setAttribute("class","svg-pan-zoom-control"),
e.addEventListener("click",(function(){t.getPublicInstance().zoomOut()
}),!1),e.addEventListener("touchstart",(function(){
t.getPublicInstance().zoomOut()}),!1)
var n=document.createElementNS(Be.svgNS,"rect")
n.setAttribute("x","0"),n.setAttribute("y","0"),n.setAttribute("width","1500"),n.setAttribute("height","1400"),
n.setAttribute("class","svg-pan-zoom-control-background"),e.appendChild(n)
var o=document.createElementNS(Be.svgNS,"path")
return o.setAttribute("d","M1280 576v128q0 26 -19 45t-45 19h-896q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h896q26 0 45 19t19 45zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5 t84.5 -203.5z"),
o.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(o),e},
disable:function(t){
t.controlIcons&&(t.controlIcons.parentNode.removeChild(t.controlIcons),
t.controlIcons=null)}},Oe=function(t,e){this.init(t,e)}
Oe.prototype.init=function(t,e){
this.viewport=t,this.options=e,this.originalState={zoom:1,x:0,y:0
},this.activeState={zoom:1,x:0,y:0
},this.updateCTMCached=Ze.proxy(this.updateCTM,this),
this.requestAnimationFrame=Ze.createRequestAnimationFrame(this.options.refreshRate),
this.viewBox={x:0,y:0,width:0,height:0},this.cacheViewBox()
var n=this.processCTM()
this.setCTM(n),this.updateCTM()},Oe.prototype.cacheViewBox=function(){
var t=this.options.svg.getAttribute("viewBox")
if(t){var e=t.split(/[\s\,]/).filter((function(t){return t})).map(parseFloat)
this.viewBox.x=e[0],this.viewBox.y=e[1],this.viewBox.width=e[2],this.viewBox.height=e[3]
var n=Math.min(this.options.width/this.viewBox.width,this.options.height/this.viewBox.height)
this.activeState.zoom=n,this.activeState.x=(this.options.width-this.viewBox.width*n)/2,
this.activeState.y=(this.options.height-this.viewBox.height*n)/2,
this.updateCTMOnNextFrame(),this.options.svg.removeAttribute("viewBox")
}else this.simpleViewBoxCache()},Oe.prototype.simpleViewBoxCache=function(){
var t=this.viewport.getBBox()
this.viewBox.x=t.x,this.viewBox.y=t.y,this.viewBox.width=t.width,this.viewBox.height=t.height
},Oe.prototype.getViewBox=function(){return Ze.extend({},this.viewBox)
},Oe.prototype.processCTM=function(){var t,e=this.getCTM()
;(this.options.fit||this.options.contain)&&(t=this.options.fit?Math.min(this.options.width/this.viewBox.width,this.options.height/this.viewBox.height):Math.max(this.options.width/this.viewBox.width,this.options.height/this.viewBox.height),
e.a=t,e.d=t,e.e=-this.viewBox.x*t,e.f=-this.viewBox.y*t)
if(this.options.center){
var n=.5*(this.options.width-(this.viewBox.width+2*this.viewBox.x)*e.a),o=.5*(this.options.height-(this.viewBox.height+2*this.viewBox.y)*e.a)
e.e=n,e.f=o}
return this.originalState.zoom=e.a,this.originalState.x=e.e,this.originalState.y=e.f,
e},Oe.prototype.getOriginalState=function(){
return Ze.extend({},this.originalState)},Oe.prototype.getState=function(){
return Ze.extend({},this.activeState)},Oe.prototype.getZoom=function(){
return this.activeState.zoom},Oe.prototype.getRelativeZoom=function(){
return this.activeState.zoom/this.originalState.zoom
},Oe.prototype.computeRelativeZoom=function(t){return t/this.originalState.zoom
},Oe.prototype.getPan=function(){return{x:this.activeState.x,
y:this.activeState.y}},Oe.prototype.getCTM=function(){
var t=this.options.svg.createSVGMatrix()
return t.a=this.activeState.zoom,t.b=0,t.c=0,t.d=this.activeState.zoom,t.e=this.activeState.x,
t.f=this.activeState.y,t},Oe.prototype.setCTM=function(t){
var e=this.isZoomDifferent(t),n=this.isPanDifferent(t)
if(e||n){
if(e&&(!1===this.options.beforeZoom(this.getRelativeZoom(),this.computeRelativeZoom(t.a))?(t.a=t.d=this.activeState.zoom,
e=!1):(this.updateCache(t),this.options.onZoom(this.getRelativeZoom()))),n){
var o=this.options.beforePan(this.getPan(),{x:t.e,y:t.f}),i=!1,r=!1
!1===o?(t.e=this.getPan().x,t.f=this.getPan().y,i=r=!0):Ze.isObject(o)&&(!1===o.x?(t.e=this.getPan().x,
i=!0):Ze.isNumber(o.x)&&(t.e=o.x),
!1===o.y?(t.f=this.getPan().y,r=!0):Ze.isNumber(o.y)&&(t.f=o.y)),
i&&r||!this.isPanDifferent(t)?n=!1:(this.updateCache(t),
this.options.onPan(this.getPan()))}(e||n)&&this.updateCTMOnNextFrame()}
},Oe.prototype.isZoomDifferent=function(t){return this.activeState.zoom!==t.a
},Oe.prototype.isPanDifferent=function(t){
return this.activeState.x!==t.e||this.activeState.y!==t.f
},Oe.prototype.updateCache=function(t){
this.activeState.zoom=t.a,this.activeState.x=t.e,this.activeState.y=t.f
},Oe.prototype.pendingUpdate=!1,Oe.prototype.updateCTMOnNextFrame=function(){
this.pendingUpdate||(this.pendingUpdate=!0,
this.requestAnimationFrame.call(window,this.updateCTMCached))
},Oe.prototype.updateCTM=function(){var t=this.getCTM()
Be.setCTM(this.viewport,t,this.defs),this.pendingUpdate=!1,this.options.onUpdatedCTM&&this.options.onUpdatedCTM(t)
}
var Le=function(t,e){this.init(t,e)},Re={
viewportSelector:".svg-pan-zoom_viewport",panEnabled:!0,controlIconsEnabled:!1,
zoomEnabled:!0,dblClickZoomEnabled:!0,mouseWheelZoomEnabled:!0,
preventMouseEventsDefault:!0,zoomScaleSensitivity:.1,minZoom:.5,maxZoom:10,
fit:!0,contain:!1,center:!0,refreshRate:"auto",beforeZoom:null,onZoom:null,
beforePan:null,onPan:null,customEventsHandler:null,eventsListenerElement:null,
onUpdatedCTM:null},Ve={passive:!0}
Le.prototype.init=function(t,e){var n=this
this.svg=t,this.defs=t.querySelector("defs"),Be.setupSvgAttributes(this.svg),this.options=Ze.extend(Ze.extend({},Re),e),
this.state="none"
var o=Be.getBoundingClientRectNormalized(t)
this.width=o.width,this.height=o.height,this.viewport=function(t,e){
return new Oe(t,e)
}(Be.getOrCreateViewport(this.svg,this.options.viewportSelector),{svg:this.svg,
width:this.width,height:this.height,fit:this.options.fit,
contain:this.options.contain,center:this.options.center,
refreshRate:this.options.refreshRate,beforeZoom:function(t,e){
if(n.viewport&&n.options.beforeZoom)return n.options.beforeZoom(t,e)},
onZoom:function(t){if(n.viewport&&n.options.onZoom)return n.options.onZoom(t)},
beforePan:function(t,e){
if(n.viewport&&n.options.beforePan)return n.options.beforePan(t,e)},
onPan:function(t){if(n.viewport&&n.options.onPan)return n.options.onPan(t)},
onUpdatedCTM:function(t){
if(n.viewport&&n.options.onUpdatedCTM)return n.options.onUpdatedCTM(t)}})
var i=this.getPublicInstance()
i.setBeforeZoom(this.options.beforeZoom),i.setOnZoom(this.options.onZoom),i.setBeforePan(this.options.beforePan),
i.setOnPan(this.options.onPan),
i.setOnUpdatedCTM(this.options.onUpdatedCTM),this.options.controlIconsEnabled&&je.enable(this),
this.lastMouseWheelEventTime=Date.now(),this.setupHandlers()
},Le.prototype.setupHandlers=function(){var t=this,e=null
if(this.eventListeners={mousedown:function(n){var o=t.handleMouseDown(n,e)
return e=n,o},touchstart:function(n){var o=t.handleMouseDown(n,e)
return e=n,o},mouseup:function(e){return t.handleMouseUp(e)},
touchend:function(e){return t.handleMouseUp(e)},mousemove:function(e){
return t.handleMouseMove(e)},touchmove:function(e){return t.handleMouseMove(e)},
mouseleave:function(e){return t.handleMouseUp(e)},touchleave:function(e){
return t.handleMouseUp(e)},touchcancel:function(e){return t.handleMouseUp(e)}
},null!=this.options.customEventsHandler){
this.options.customEventsHandler.init({svgElement:this.svg,
eventsListenerElement:this.options.eventsListenerElement,
instance:this.getPublicInstance()})
var n=this.options.customEventsHandler.haltEventListeners
if(n&&n.length)for(var o=n.length-1;o>=0;o--)this.eventListeners.hasOwnProperty(n[o])&&delete this.eventListeners[n[o]]
}
for(var i in this.eventListeners)(this.options.eventsListenerElement||this.svg).addEventListener(i,this.eventListeners[i],!this.options.preventMouseEventsDefault&&Ve)
this.options.mouseWheelZoomEnabled&&(this.options.mouseWheelZoomEnabled=!1,this.enableMouseWheelZoom())
},Le.prototype.enableMouseWheelZoom=function(){
if(!this.options.mouseWheelZoomEnabled){var t=this
this.wheelListener=function(e){return t.handleMouseWheel(e)}
var e=!this.options.preventMouseEventsDefault
Ne.on(this.options.eventsListenerElement||this.svg,this.wheelListener,e),this.options.mouseWheelZoomEnabled=!0
}},Le.prototype.disableMouseWheelZoom=function(){
if(this.options.mouseWheelZoomEnabled){
var t=!this.options.preventMouseEventsDefault
Ne.off(this.options.eventsListenerElement||this.svg,this.wheelListener,t),this.options.mouseWheelZoomEnabled=!1
}},Le.prototype.handleMouseWheel=function(t){
if(this.options.zoomEnabled&&"none"===this.state){
this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1)
var e=t.deltaY||1,n=Date.now()-this.lastMouseWheelEventTime,o=3+Math.max(0,30-n)
this.lastMouseWheelEventTime=Date.now(),"deltaMode"in t&&0===t.deltaMode&&t.wheelDelta&&(e=0===t.deltaY?0:Math.abs(t.wheelDelta)/t.deltaY),
e=-.3<e&&e<.3?e:(e>0?1:-1)*Math.log(Math.abs(e)+10)/o
var i=this.svg.getScreenCTM().inverse(),r=Be.getEventPoint(t,this.svg).matrixTransform(i),a=Math.pow(1+this.options.zoomScaleSensitivity,-1*e)
this.zoomAtPoint(a,r)}},Le.prototype.zoomAtPoint=function(t,e,n){
var o=this.viewport.getOriginalState()
n?(t=Math.max(this.options.minZoom*o.zoom,Math.min(this.options.maxZoom*o.zoom,t)),
t/=this.getZoom()):this.getZoom()*t<this.options.minZoom*o.zoom?t=this.options.minZoom*o.zoom/this.getZoom():this.getZoom()*t>this.options.maxZoom*o.zoom&&(t=this.options.maxZoom*o.zoom/this.getZoom())
var i=this.viewport.getCTM(),r=e.matrixTransform(i.inverse()),a=this.svg.createSVGMatrix().translate(r.x,r.y).scale(t).translate(-r.x,-r.y),s=i.multiply(a)
s.a!==i.a&&this.viewport.setCTM(s)},Le.prototype.zoom=function(t,e){
this.zoomAtPoint(t,Be.getSvgCenterPoint(this.svg,this.width,this.height),e)
},Le.prototype.publicZoom=function(t,e){
e&&(t=this.computeFromRelativeZoom(t)),this.zoom(t,e)
},Le.prototype.publicZoomAtPoint=function(t,e,n){
if(n&&(t=this.computeFromRelativeZoom(t)),"SVGPoint"!==Ze.getType(e)){
if(!("x"in e)||!("y"in e))throw new Error("Given point is invalid")
e=Be.createSVGPoint(this.svg,e.x,e.y)}this.zoomAtPoint(t,e,n)
},Le.prototype.getZoom=function(){return this.viewport.getZoom()
},Le.prototype.getRelativeZoom=function(){return this.viewport.getRelativeZoom()
},Le.prototype.computeFromRelativeZoom=function(t){
return t*this.viewport.getOriginalState().zoom
},Le.prototype.resetZoom=function(){var t=this.viewport.getOriginalState()
this.zoom(t.zoom,!0)},Le.prototype.resetPan=function(){
this.pan(this.viewport.getOriginalState())},Le.prototype.reset=function(){
this.resetZoom(),this.resetPan()},Le.prototype.handleDblClick=function(t){var e
if((this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),
this.options.controlIconsEnabled)&&(t.target.getAttribute("class")||"").indexOf("svg-pan-zoom-control")>-1)return!1
e=t.shiftKey?1/(2*(1+this.options.zoomScaleSensitivity)):2*(1+this.options.zoomScaleSensitivity)
var n=Be.getEventPoint(t,this.svg).matrixTransform(this.svg.getScreenCTM().inverse())
this.zoomAtPoint(e,n)},Le.prototype.handleMouseDown=function(t,e){
this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),
Ze.mouseAndTouchNormalize(t,this.svg),
this.options.dblClickZoomEnabled&&Ze.isDblClick(t,e)?this.handleDblClick(t):(this.state="pan",
this.firstEventCTM=this.viewport.getCTM(),
this.stateOrigin=Be.getEventPoint(t,this.svg).matrixTransform(this.firstEventCTM.inverse()))
},Le.prototype.handleMouseMove=function(t){
if(this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),
"pan"===this.state&&this.options.panEnabled){
var e=Be.getEventPoint(t,this.svg).matrixTransform(this.firstEventCTM.inverse()),n=this.firstEventCTM.translate(e.x-this.stateOrigin.x,e.y-this.stateOrigin.y)
this.viewport.setCTM(n)}},Le.prototype.handleMouseUp=function(t){
this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),
"pan"===this.state&&(this.state="none")},Le.prototype.fit=function(){
var t=this.viewport.getViewBox(),e=Math.min(this.width/t.width,this.height/t.height)
this.zoom(e,!0)},Le.prototype.contain=function(){
var t=this.viewport.getViewBox(),e=Math.max(this.width/t.width,this.height/t.height)
this.zoom(e,!0)},Le.prototype.center=function(){
var t=this.viewport.getViewBox(),e=.5*(this.width-(t.width+2*t.x)*this.getZoom()),n=.5*(this.height-(t.height+2*t.y)*this.getZoom())
this.getPublicInstance().pan({x:e,y:n})},Le.prototype.updateBBox=function(){
this.viewport.simpleViewBoxCache()},Le.prototype.pan=function(t){
var e=this.viewport.getCTM()
e.e=t.x,e.f=t.y,this.viewport.setCTM(e)},Le.prototype.panBy=function(t){
var e=this.viewport.getCTM()
e.e+=t.x,e.f+=t.y,this.viewport.setCTM(e)},Le.prototype.getPan=function(){
var t=this.viewport.getState()
return{x:t.x,y:t.y}},Le.prototype.resize=function(){
var t=Be.getBoundingClientRectNormalized(this.svg)
this.width=t.width,this.height=t.height
var e=this.viewport
e.options.width=this.width,e.options.height=this.height,e.processCTM(),this.options.controlIconsEnabled&&(this.getPublicInstance().disableControlIcons(),
this.getPublicInstance().enableControlIcons())},Le.prototype.destroy=function(){
var t=this
for(var e in this.beforeZoom=null,this.onZoom=null,this.beforePan=null,this.onPan=null,
this.onUpdatedCTM=null,
null!=this.options.customEventsHandler&&this.options.customEventsHandler.destroy({
svgElement:this.svg,eventsListenerElement:this.options.eventsListenerElement,
instance:this.getPublicInstance()
}),this.eventListeners)(this.options.eventsListenerElement||this.svg).removeEventListener(e,this.eventListeners[e],!this.options.preventMouseEventsDefault&&Ve)
this.disableMouseWheelZoom(),this.getPublicInstance().disableControlIcons(),this.reset(),
$e=$e.filter((function(e){return e.svg!==t.svg
})),delete this.options,delete this.viewport,
delete this.publicInstance,delete this.pi,this.getPublicInstance=function(){
return null}},Le.prototype.getPublicInstance=function(){var t=this
return this.publicInstance||(this.publicInstance=this.pi={enablePan:function(){
return t.options.panEnabled=!0,t.pi},disablePan:function(){
return t.options.panEnabled=!1,t.pi},isPanEnabled:function(){
return!!t.options.panEnabled},pan:function(e){return t.pan(e),t.pi},
panBy:function(e){return t.panBy(e),t.pi},getPan:function(){return t.getPan()},
setBeforePan:function(e){
return t.options.beforePan=null===e?null:Ze.proxy(e,t.publicInstance),t.pi},
setOnPan:function(e){
return t.options.onPan=null===e?null:Ze.proxy(e,t.publicInstance),t.pi},
enableZoom:function(){return t.options.zoomEnabled=!0,t.pi},
disableZoom:function(){return t.options.zoomEnabled=!1,t.pi},
isZoomEnabled:function(){return!!t.options.zoomEnabled},
enableControlIcons:function(){
return t.options.controlIconsEnabled||(t.options.controlIconsEnabled=!0,
je.enable(t)),t.pi},disableControlIcons:function(){
return t.options.controlIconsEnabled&&(t.options.controlIconsEnabled=!1,
je.disable(t)),t.pi},isControlIconsEnabled:function(){
return!!t.options.controlIconsEnabled},enableDblClickZoom:function(){
return t.options.dblClickZoomEnabled=!0,t.pi},disableDblClickZoom:function(){
return t.options.dblClickZoomEnabled=!1,t.pi},isDblClickZoomEnabled:function(){
return!!t.options.dblClickZoomEnabled},enableMouseWheelZoom:function(){
return t.enableMouseWheelZoom(),t.pi},disableMouseWheelZoom:function(){
return t.disableMouseWheelZoom(),t.pi},isMouseWheelZoomEnabled:function(){
return!!t.options.mouseWheelZoomEnabled},setZoomScaleSensitivity:function(e){
return t.options.zoomScaleSensitivity=e,t.pi},setMinZoom:function(e){
return t.options.minZoom=e,t.pi},setMaxZoom:function(e){
return t.options.maxZoom=e,t.pi},setBeforeZoom:function(e){
return t.options.beforeZoom=null===e?null:Ze.proxy(e,t.publicInstance),t.pi},
setOnZoom:function(e){
return t.options.onZoom=null===e?null:Ze.proxy(e,t.publicInstance),t.pi},
zoom:function(e){return t.publicZoom(e,!0),t.pi},zoomBy:function(e){
return t.publicZoom(e,!1),t.pi},zoomAtPoint:function(e,n){
return t.publicZoomAtPoint(e,n,!0),t.pi},zoomAtPointBy:function(e,n){
return t.publicZoomAtPoint(e,n,!1),t.pi},zoomIn:function(){
return this.zoomBy(1+t.options.zoomScaleSensitivity),t.pi},zoomOut:function(){
return this.zoomBy(1/(1+t.options.zoomScaleSensitivity)),t.pi},
getZoom:function(){return t.getRelativeZoom()},setOnUpdatedCTM:function(e){
return t.options.onUpdatedCTM=null===e?null:Ze.proxy(e,t.publicInstance),t.pi},
resetZoom:function(){return t.resetZoom(),t.pi},resetPan:function(){
return t.resetPan(),t.pi},reset:function(){return t.reset(),t.pi},
fit:function(){return t.fit(),t.pi},contain:function(){return t.contain(),t.pi},
center:function(){return t.center(),t.pi},updateBBox:function(){
return t.updateBBox(),t.pi},resize:function(){return t.resize(),t.pi},
getSizes:function(){return{width:t.width,height:t.height,realZoom:t.getZoom(),
viewBox:t.viewport.getViewBox()}},destroy:function(){return t.destroy(),t.pi}}),
this.publicInstance}
var qe,_e,Fe,Ue,Ge,He,We,Xe,$e=[]
function Ye(){var t
t=Te,window.onpopstate=void 0,_e.mount(document.body,t)}qe=function(t,e){
var n=Ze.getSvg(t)
if(null===n)return null
for(var o=$e.length-1;o>=0;o--)if($e[o].svg===n)return $e[o].instance.getPublicInstance()
return $e.push({svg:n,instance:new Le(n,e)
}),$e[$e.length-1].instance.getPublicInstance()
},_e=N,Ue=pe,(Fe=U).onrender=function(){
_e.mount(document.body,Ge),history.pushState({},"View SVG"),window.onpopstate=Ye
},Ge={oncreate:function(t){qe(t.dom,{controlIconsEnabled:!Fe.hideIcons})},
view:function(){return _e.trust(Ue())}},He=N,We=q,Xe=Te,setTimeout((function(){
He.mount(document.head,We),He.mount(document.body,Xe)}),1)}()
//# sourceMappingURL=j2gtsp.js.map
