!function(){"use strict"
function t(t,e,n,o,i,r){return{tag:t,key:e,attrs:n,children:o,text:i,dom:r,
domSize:void 0,state:void 0,events:void 0,instance:void 0}}
t.normalize=function(e){
return Array.isArray(e)?t("[",void 0,void 0,t.normalizeChildren(e),void 0,void 0):null==e||"boolean"==typeof e?null:"object"==typeof e?e:t("#",void 0,void 0,String(e),void 0,void 0)
},t.normalizeChildren=function(e){var n=[]
if(e.length){
for(var o=null!=e[0]&&null!=e[0].key,i=1;i<e.length;i++)if((null!=e[i]&&null!=e[i].key)!==o)throw new TypeError("Vnodes must either always have keys or never have keys!")
for(i=0;i<e.length;i++)n[i]=t.normalize(e[i])}return n}
var e=t,n=function(){var t,n=arguments[this],o=this+1
if(null==n?n={}:("object"!=typeof n||null!=n.tag||Array.isArray(n))&&(n={},o=this),
arguments.length===o+1)t=arguments[o],Array.isArray(t)||(t=[t])
else for(t=[];o<arguments.length;)t.push(arguments[o++])
return e("",n.key,n,t)
},o=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,i={},r={}.hasOwnProperty
function s(t){for(var e in t)if(r.call(t,e))return!1
return!0}function a(t){for(var e,n="div",r=[],s={};e=o.exec(t);){
var a=e[1],l=e[2]
if(""===a&&""!==l)n=l
else if("#"===a)s.id=l
else if("."===a)r.push(l)
else if("["===e[3][0]){var u=e[6]
u&&(u=u.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),"class"===e[4]?r.push(u):s[e[4]]=""===u?u:u||!0
}}return r.length>0&&(s.className=r.join(" ")),i[t]={tag:n,attrs:s}}
function l(t,n){
var o=n.attrs,i=e.normalizeChildren(n.children),a=r.call(o,"class"),l=a?o.class:o.className
if(n.tag=t.tag,n.attrs=null,n.children=void 0,!s(t.attrs)&&!s(o)){var u={}
for(var c in o)r.call(o,c)&&(u[c]=o[c])
o=u}
for(var c in t.attrs)r.call(t.attrs,c)&&"className"!==c&&!r.call(o,c)&&(o[c]=t.attrs[c])
for(var c in null==l&&null==t.attrs.className||(o.className=null!=l?null!=t.attrs.className?String(t.attrs.className)+" "+String(l):l:null!=t.attrs.className?t.attrs.className:null),
a&&(o.class=null),o)if(r.call(o,c)&&"key"!==c){n.attrs=o
break}
return Array.isArray(i)&&1===i.length&&null!=i[0]&&"#"===i[0].tag?n.text=i[0].children:n.children=i,
n}var u=function(t){
if(null==t||"string"!=typeof t&&"function"!=typeof t&&"function"!=typeof t.view)throw Error("The selector must be either a string or a component.")
var o=n.apply(1,arguments)
return"string"==typeof t&&(o.children=e.normalizeChildren(o.children),"["!==t)?l(i[t]||a(t),o):(o.tag=t,
o)}
u.trust=function(t){return null==t&&(t=""),e("<",void 0,void 0,t,void 0,void 0)
},u.fragment=function(){var t=n.apply(0,arguments)
return t.tag="[",t.children=e.normalizeChildren(t.children),t}
var c=u,h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function f(t,e){return t(e={exports:{}},e.exports),e.exports}var p=function(t){
if(!(this instanceof p))throw new Error("Promise must be called with `new`")
if("function"!=typeof t)throw new TypeError("executor must be a function")
var e=this,n=[],o=[],i=l(n,!0),r=l(o,!1),s=e._instance={resolvers:n,rejectors:o
},a="function"==typeof setImmediate?setImmediate:setTimeout
function l(t,i){return function l(c){var h
try{
if(!i||null==c||"object"!=typeof c&&"function"!=typeof c||"function"!=typeof(h=c.then))a((function(){
i||0!==t.length||console.error("Possible unhandled promise rejection:",c)
for(var e=0;e<t.length;e++)t[e](c)
n.length=0,o.length=0,s.state=i,s.retry=function(){l(c)}}))
else{if(c===e)throw new TypeError("Promise can't be resolved w/ itself")
u(h.bind(c))}}catch(t){r(t)}}}function u(t){var e=0
function n(t){return function(n){e++>0||t(n)}}var o=n(r)
try{t(n(i),o)}catch(t){o(t)}}u(t)}
p.prototype.then=function(t,e){var n,o,i=this._instance
function r(t,e,r,s){e.push((function(e){if("function"!=typeof t)r(e)
else try{n(t(e))}catch(t){o&&o(t)}
})),"function"==typeof i.retry&&s===i.state&&i.retry()}
var s=new p((function(t,e){n=t,o=e}))
return r(t,i.resolvers,n,!0),r(e,i.rejectors,o,!1),s
},p.prototype.catch=function(t){return this.then(null,t)
},p.prototype.finally=function(t){return this.then((function(e){
return p.resolve(t()).then((function(){return e}))}),(function(e){
return p.resolve(t()).then((function(){return p.reject(e)}))}))
},p.resolve=function(t){return t instanceof p?t:new p((function(e){e(t)}))
},p.reject=function(t){return new p((function(e,n){n(t)}))},p.all=function(t){
return new p((function(e,n){var o=t.length,i=0,r=[]
if(0===t.length)e([])
else for(var s=0;s<t.length;s++)!function(s){function a(t){
i++,r[s]=t,i===o&&e(r)}
null==t[s]||"object"!=typeof t[s]&&"function"!=typeof t[s]||"function"!=typeof t[s].then?a(t[s]):t[s].then(a,n)
}(s)}))},p.race=function(t){return new p((function(e,n){
for(var o=0;o<t.length;o++)t[o].then(e,n)}))}
var d=p,v=f((function(t){
"undefined"!=typeof window?(void 0===window.Promise?window.Promise=d:window.Promise.prototype.finally||(window.Promise.prototype.finally=d.prototype.finally),
t.exports=window.Promise):void 0!==h?(void 0===h.Promise?h.Promise=d:h.Promise.prototype.finally||(h.Promise.prototype.finally=d.prototype.finally),
t.exports=h.Promise):t.exports=d})),m=function(t){var n,o=t&&t.document,i={
svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"}
function r(t){return t.attrs&&t.attrs.xmlns||i[t.tag]}function s(t,e){
if(t.state!==e)throw new Error("`vnode.state` must not be modified")}
function a(t){var e=t.state
try{return this.apply(e,arguments)}finally{s(t,e)}}function l(){try{
return o.activeElement}catch(t){return null}}function u(t,e,n,o,i,r,s){
for(var a=n;a<o;a++){var l=e[a]
null!=l&&c(t,l,i,s,r)}}function c(t,e,n,i,r){var s=e.tag
if("string"==typeof s)switch(e.state={},null!=e.attrs&&V(e.attrs,e,n),s){
case"#":!function(t,e,n){e.dom=o.createTextNode(e.children),E(t,e.dom,n)}(t,e,r)
break
case"<":f(t,e,i,r)
break
case"[":!function(t,e,n,i,r){var s=o.createDocumentFragment()
if(null!=e.children){var a=e.children
u(s,a,0,a.length,n,null,i)}
e.dom=s.firstChild,e.domSize=s.childNodes.length,E(t,s,r)}(t,e,n,i,r)
break
default:p(t,e,n,i,r)}else!function(t,e,n,o,i){
d(e,n),null!=e.instance?(c(t,e.instance,n,o,i),
e.dom=e.instance.dom,e.domSize=null!=e.dom?e.instance.domSize:0):e.domSize=0
}(t,e,n,i,r)}var h={caption:"table",thead:"table",tbody:"table",tfoot:"table",
tr:"tbody",th:"tr",td:"tr",colgroup:"table",col:"colgroup"}
function f(t,e,n,i){
var r=e.children.match(/^\s*?<(\w+)/im)||[],s=o.createElement(h[r[1]]||"div")
"http://www.w3.org/2000/svg"===n?(s.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e.children+"</svg>",
s=s.firstChild):s.innerHTML=e.children,
e.dom=s.firstChild,e.domSize=s.childNodes.length,e.instance=[]
for(var a,l=o.createDocumentFragment();a=s.firstChild;)e.instance.push(a),l.appendChild(a)
E(t,l,i)}function p(t,n,i,s,a){
var l=n.tag,c=n.attrs,h=c&&c.is,f=(s=r(n)||s)?h?o.createElementNS(s,l,{is:h
}):o.createElementNS(s,l):h?o.createElement(l,{is:h}):o.createElement(l)
if(n.dom=f,null!=c&&function(t,e,n){for(var o in e)N(t,o,null,e[o],n)
}(n,c,s),E(t,f,a),
!M(n)&&(null!=n.text&&(""!==n.text?f.textContent=n.text:n.children=[e("#",void 0,void 0,n.text,void 0,void 0)]),
null!=n.children)){var p=n.children
u(f,p,0,p.length,i,null,s),"select"===n.tag&&null!=c&&function(t,e){
if("value"in e)if(null===e.value)-1!==t.dom.selectedIndex&&(t.dom.value=null)
else{var n=""+e.value
t.dom.value===n&&-1!==t.dom.selectedIndex||(t.dom.value=n)}
"selectedIndex"in e&&N(t,"selectedIndex",null,e.selectedIndex,void 0)}(n,c)}}
function d(t,n){var o
if("function"==typeof t.tag.view){
if(t.state=Object.create(t.tag),null!=(o=t.state.view).$$reentrantLock$$)return
o.$$reentrantLock$$=!0}else{
if(t.state=void 0,null!=(o=t.tag).$$reentrantLock$$)return
o.$$reentrantLock$$=!0,t.state=null!=t.tag.prototype&&"function"==typeof t.tag.prototype.view?new t.tag(t):t.tag(t)
}
if(V(t.state,t,n),null!=t.attrs&&V(t.attrs,t,n),t.instance=e.normalize(a.call(t.state.view,t)),
t.instance===t)throw Error("A view cannot return the vnode it received as argument")
o.$$reentrantLock$$=null}function v(t,e,n,o,i,r){
if(e!==n&&(null!=e||null!=n))if(null==e||0===e.length)u(t,n,0,n.length,o,i,r)
else if(null==n||0===n.length)C(t,e,0,e.length)
else{var s=null!=e[0]&&null!=e[0].key,a=null!=n[0]&&null!=n[0].key,l=0,h=0
if(!s)for(;h<e.length&&null==e[h];)h++
if(!a)for(;l<n.length&&null==n[l];)l++
if(null===a&&null==s)return
if(s!==a)C(t,e,h,e.length),u(t,n,l,n.length,o,i,r)
else if(a){
for(var f,p,d,v,g,y=e.length-1,E=n.length-1;y>=h&&E>=l&&(d=e[y],v=n[E],
d.key===v.key);)d!==v&&m(t,d,v,o,i,r),null!=v.dom&&(i=v.dom),y--,E--
for(;y>=h&&E>=l&&(f=e[h],p=n[l],f.key===p.key);)h++,l++,f!==p&&m(t,f,p,o,x(e,h,i),r)
for(;y>=h&&E>=l&&l!==E&&f.key===v.key&&d.key===p.key;)S(t,d,g=x(e,h,i)),d!==p&&m(t,d,p,o,g,r),
++l<=--E&&S(t,f,i),
f!==v&&m(t,f,v,o,i,r),null!=v.dom&&(i=v.dom),h++,d=e[--y],v=n[E],f=e[h],p=n[l]
for(;y>=h&&E>=l&&d.key===v.key;)d!==v&&m(t,d,v,o,i,r),null!=v.dom&&(i=v.dom),E--,
d=e[--y],v=n[E]
if(l>E)C(t,e,h,y+1)
else if(h>y)u(t,n,l,E+1,o,i,r)
else{var M,z,P=i,A=E-l+1,N=new Array(A),T=0,Z=0,I=2147483647,D=0
for(Z=0;Z<A;Z++)N[Z]=-1
for(Z=E;Z>=l;Z--){null==M&&(M=w(e,h,y+1))
var B=M[(v=n[Z]).key]
null!=B&&(I=B<I?B:-1,N[Z-l]=B,d=e[B],e[B]=null,d!==v&&m(t,d,v,o,i,r),null!=v.dom&&(i=v.dom),
D++)}if(i=P,D!==y-h+1&&C(t,e,h,y+1),0===D)u(t,n,l,E+1,o,i,r)
else if(-1===I)for(T=(z=function(t){var e=[0],n=0,o=0,i=0,r=b.length=t.length
for(i=0;i<r;i++)b[i]=t[i]
for(i=0;i<r;++i)if(-1!==t[i]){var s=e[e.length-1]
if(t[s]<t[i])b[i]=s,e.push(i)
else{for(n=0,o=e.length-1;n<o;){var a=(n>>>1)+(o>>>1)+(n&o&1)
t[e[a]]<t[i]?n=a+1:o=a}t[i]<t[e[n]]&&(n>0&&(b[i]=e[n-1]),e[n]=i)}}
n=e.length,o=e[n-1]
for(;n-- >0;)e[n]=o,o=b[o]
return b.length=0,e
}(N)).length-1,Z=E;Z>=l;Z--)p=n[Z],-1===N[Z-l]?c(t,p,o,r,i):z[T]===Z-l?T--:S(t,p,i),
null!=p.dom&&(i=n[Z].dom)
else for(Z=E;Z>=l;Z--)p=n[Z],-1===N[Z-l]&&c(t,p,o,r,i),null!=p.dom&&(i=n[Z].dom)
}}else{var O=e.length<n.length?e.length:n.length
for(l=l<h?l:h;l<O;l++)(f=e[l])===(p=n[l])||null==f&&null==p||(null==f?c(t,p,o,r,x(e,l+1,i)):null==p?k(t,f):m(t,f,p,o,x(e,l+1,i),r))
e.length>O&&C(t,e,l,e.length),n.length>O&&u(t,n,l,n.length,o,i,r)}}}
function m(t,e,n,o,i,r){var s=e.tag
if(s===n.tag){if(n.state=e.state,n.events=e.events,function(t,e){do{var n
if(null!=t.attrs&&"function"==typeof t.attrs.onbeforeupdate)if(void 0!==(n=a.call(t.attrs.onbeforeupdate,t,e))&&!n)break
if("string"!=typeof t.tag&&"function"==typeof t.state.onbeforeupdate)if(void 0!==(n=a.call(t.state.onbeforeupdate,t,e))&&!n)break
return!1}while(0)
return t.dom=e.dom,t.domSize=e.domSize,t.instance=e.instance,t.attrs=e.attrs,t.children=e.children,
t.text=e.text,!0}(n,e))return
if("string"==typeof s)switch(null!=n.attrs&&q(n.attrs,n,o),s){case"#":
!function(t,e){
t.children.toString()!==e.children.toString()&&(t.dom.nodeValue=e.children)
e.dom=t.dom}(e,n)
break
case"<":!function(t,e,n,o,i){
e.children!==n.children?(z(t,e),f(t,n,o,i)):(n.dom=e.dom,
n.domSize=e.domSize,n.instance=e.instance)}(t,e,n,r,i)
break
case"[":!function(t,e,n,o,i,r){v(t,e.children,n.children,o,i,r)
var s=0,a=n.children
if(n.dom=null,null!=a){for(var l=0;l<a.length;l++){var u=a[l]
null!=u&&null!=u.dom&&(null==n.dom&&(n.dom=u.dom),s+=u.domSize||1)}
1!==s&&(n.domSize=s)}}(t,e,n,o,i,r)
break
default:g(e,n,o,r)}else y(t,e,n,o,i,r)}else k(t,e),c(t,n,o,r,i)}
function g(t,n,o,i){var s=n.dom=t.dom
i=r(n)||i,"textarea"===n.tag&&(null==n.attrs&&(n.attrs={}),null!=n.text&&(n.attrs.value=n.text,
n.text=void 0)),function(t,e,n,o){
if(null!=n)for(var i in n)N(t,i,e&&e[i],n[i],o)
var r
if(null!=e)for(var i in e)null==(r=e[i])||null!=n&&null!=n[i]||T(t,i,r,o)
}(n,t.attrs,n.attrs,i),
M(n)||(null!=t.text&&null!=n.text&&""!==n.text?t.text.toString()!==n.text.toString()&&(t.dom.firstChild.nodeValue=n.text):(null!=t.text&&(t.children=[e("#",void 0,void 0,t.text,void 0,t.dom.firstChild)]),
null!=n.text&&(n.children=[e("#",void 0,void 0,n.text,void 0,void 0)]),
v(s,t.children,n.children,o,null,i)))}function y(t,n,o,i,r,s){
if(o.instance=e.normalize(a.call(o.state.view,o)),
o.instance===o)throw Error("A view cannot return the vnode it received as argument")
q(o.state,o,i),null!=o.attrs&&q(o.attrs,o,i),null!=o.instance?(null==n.instance?c(t,o.instance,i,s,r):m(t,n.instance,o.instance,i,r,s),
o.dom=o.instance.dom,
o.domSize=o.instance.domSize):null!=n.instance?(k(t,n.instance),
o.dom=void 0,o.domSize=0):(o.dom=n.dom,o.domSize=n.domSize)}function w(t,e,n){
for(var o=Object.create(null);e<n;e++){var i=t[e]
if(null!=i){var r=i.key
null!=r&&(o[r]=e)}}return o}var b=[]
function x(t,e,n){
for(;e<t.length;e++)if(null!=t[e]&&null!=t[e].dom)return t[e].dom
return n}function S(t,e,n){var i=o.createDocumentFragment()
!function t(e,n,o){for(;null!=o.dom&&o.dom.parentNode===e;){
if("string"!=typeof o.tag){if(null!=(o=o.instance))continue
}else if("<"===o.tag)for(var i=0;i<o.instance.length;i++)n.appendChild(o.instance[i])
else if("["!==o.tag)n.appendChild(o.dom)
else if(1===o.children.length){if(null!=(o=o.children[0]))continue
}else for(i=0;i<o.children.length;i++){var r=o.children[i]
null!=r&&t(e,n,r)}break}}(t,i,e),E(t,i,n)}function E(t,e,n){
null!=n?t.insertBefore(e,n):t.appendChild(e)}function M(t){
if(null==t.attrs||null==t.attrs.contenteditable&&null==t.attrs.contentEditable)return!1
var e=t.children
if(null!=e&&1===e.length&&"<"===e[0].tag){var n=e[0].children
t.dom.innerHTML!==n&&(t.dom.innerHTML=n)
}else if(null!=t.text||null!=e&&0!==e.length)throw new Error("Child node of a contenteditable must be trusted")
return!0}function C(t,e,n,o){for(var i=n;i<o;i++){var r=e[i]
null!=r&&k(t,r)}}function k(t,e){var n,o,i,r=0,l=e.state
"string"!=typeof e.tag&&"function"==typeof e.state.onbeforeremove&&(null!=(i=a.call(e.state.onbeforeremove,e))&&"function"==typeof i.then&&(r=1,
n=i))
e.attrs&&"function"==typeof e.attrs.onbeforeremove&&(null!=(i=a.call(e.attrs.onbeforeremove,e))&&"function"==typeof i.then&&(r|=2,
o=i))
if(s(e,l),r){if(null!=n){var u=function(){1&r&&((r&=2)||c())}
n.then(u,u)}if(null!=o){u=function(){2&r&&((r&=1)||c())}
o.then(u,u)}}else A(e),P(t,e)
function c(){s(e,l),A(e),P(t,e)}}function z(t,e){
for(var n=0;n<e.instance.length;n++)t.removeChild(e.instance[n])}
function P(t,e){for(;null!=e.dom&&e.dom.parentNode===t;){
if("string"!=typeof e.tag){if(null!=(e=e.instance))continue
}else if("<"===e.tag)z(t,e)
else{if("["!==e.tag&&(t.removeChild(e.dom),!Array.isArray(e.children)))break
if(1===e.children.length){if(null!=(e=e.children[0]))continue
}else for(var n=0;n<e.children.length;n++){var o=e.children[n]
null!=o&&P(t,o)}}break}}function A(t){
if("string"!=typeof t.tag&&"function"==typeof t.state.onremove&&a.call(t.state.onremove,t),
t.attrs&&"function"==typeof t.attrs.onremove&&a.call(t.attrs.onremove,t),
"string"!=typeof t.tag)null!=t.instance&&A(t.instance)
else{var e=t.children
if(Array.isArray(e))for(var n=0;n<e.length;n++){var o=e[n]
null!=o&&A(o)}}}function N(t,e,n,i,r){
if("key"!==e&&"is"!==e&&null!=i&&!Z(e)&&(n!==i||function(t,e){
return"value"===e||"checked"===e||"selectedIndex"===e||"selected"===e&&t.dom===l()||"option"===t.tag&&t.dom.parentNode===o.activeElement
}(t,e)||"object"==typeof i)){if("o"===e[0]&&"n"===e[1])return R(t,e,i)
if("xlink:"===e.slice(0,6))t.dom.setAttributeNS("http://www.w3.org/1999/xlink",e.slice(6),i)
else if("style"===e)j(t.dom,n,i)
else if(I(t,e,r)){if("value"===e){
if(("input"===t.tag||"textarea"===t.tag)&&t.dom.value===""+i&&t.dom===l())return
if("select"===t.tag&&null!==n&&t.dom.value===""+i)return
if("option"===t.tag&&null!==n&&t.dom.value===""+i)return}
"input"===t.tag&&"type"===e?t.dom.setAttribute(e,i):t.dom[e]=i
}else"boolean"==typeof i?i?t.dom.setAttribute(e,""):t.dom.removeAttribute(e):t.dom.setAttribute("className"===e?"class":e,i)
}}function T(t,e,n,o){
if("key"!==e&&"is"!==e&&null!=n&&!Z(e))if("o"!==e[0]||"n"!==e[1]||Z(e))if("style"===e)j(t.dom,n,null)
else if(!I(t,e,o)||"className"===e||"value"===e&&("option"===t.tag||"select"===t.tag&&-1===t.dom.selectedIndex&&t.dom===l())||"input"===t.tag&&"type"===e){
var i=e.indexOf(":")
;-1!==i&&(e=e.slice(i+1)),!1!==n&&t.dom.removeAttribute("className"===e?"class":e)
}else t.dom[e]=null
else R(t,e,void 0)}function Z(t){
return"oninit"===t||"oncreate"===t||"onupdate"===t||"onremove"===t||"onbeforeremove"===t||"onbeforeupdate"===t
}function I(t,e,n){
return void 0===n&&(t.tag.indexOf("-")>-1||null!=t.attrs&&t.attrs.is||"href"!==e&&"list"!==e&&"form"!==e&&"width"!==e&&"height"!==e)&&e in t.dom
}var D=/[A-Z]/g
function B(t){return"-"+t.toLowerCase()}function O(t){
return"-"===t[0]&&"-"===t[1]?t:"cssFloat"===t?"float":t.replace(D,B)}
function j(t,e,n){if(e===n);else if(null==n)t.style.cssText=""
else if("object"!=typeof n)t.style.cssText=n
else if(null==e||"object"!=typeof e)for(var o in t.style.cssText="",n){
null!=(i=n[o])&&t.style.setProperty(O(o),String(i))}else{for(var o in n){var i
null!=(i=n[o])&&(i=String(i))!==String(e[o])&&t.style.setProperty(O(o),i)}
for(var o in e)null!=e[o]&&null==n[o]&&t.style.removeProperty(O(o))}}
function L(){this._=n}function R(t,e,n){if(null!=t.events){
if(t.events[e]===n)return
null==n||"function"!=typeof n&&"object"!=typeof n?(null!=t.events[e]&&t.dom.removeEventListener(e.slice(2),t.events,!1),
t.events[e]=void 0):(null==t.events[e]&&t.dom.addEventListener(e.slice(2),t.events,!1),
t.events[e]=n)
}else null==n||"function"!=typeof n&&"object"!=typeof n||(t.events=new L,
t.dom.addEventListener(e.slice(2),t.events,!1),t.events[e]=n)}function V(t,e,n){
"function"==typeof t.oninit&&a.call(t.oninit,e),
"function"==typeof t.oncreate&&n.push(a.bind(t.oncreate,e))}function q(t,e,n){
"function"==typeof t.onupdate&&n.push(a.bind(t.onupdate,e))}
return L.prototype=Object.create(null),L.prototype.handleEvent=function(t){
var e,n=this["on"+t.type]
"function"==typeof n?e=n.call(t.currentTarget,t):"function"==typeof n.handleEvent&&n.handleEvent(t),
this._&&!1!==t.redraw&&(0,
this._)(),!1===e&&(t.preventDefault(),t.stopPropagation())},function(t,o,i){
if(!t)throw new TypeError("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.")
var r=[],s=l(),a=t.namespaceURI
null==t.vnodes&&(t.textContent=""),o=e.normalizeChildren(Array.isArray(o)?o:[o])
var u=n
try{
n="function"==typeof i?i:void 0,v(t,t.vnodes,o,r,null,"http://www.w3.org/1999/xhtml"===a?void 0:a)
}finally{n=u}t.vnodes=o,null!=s&&l()!==s&&"function"==typeof s.focus&&s.focus()
for(var c=0;c<r.length;c++)r[c]()}}(window),g=function(t,n,o){var i=[],r=!1,s=!1
function a(){if(r)throw new Error("Nested m.redraw.sync() call")
r=!0
for(var n=0;n<i.length;n+=2)try{t(i[n],e(i[n+1]),l)}catch(t){o.error(t)}r=!1}
function l(){s||(s=!0,n((function(){s=!1,a()})))}return l.sync=a,{
mount:function(n,o){
if(null!=o&&null==o.view&&"function"!=typeof o)throw new TypeError("m.mount(element, component) expects a component, not a vnode")
var r=i.indexOf(n)
r>=0&&(i.splice(r,2),t(n,[],l)),null!=o&&(i.push(n,o),t(n,e(o),l))},redraw:l}
}(m,requestAnimationFrame,console),y=function(t){
if("[object Object]"!==Object.prototype.toString.call(t))return""
var e=[]
for(var n in t)o(n,t[n])
return e.join("&")
function o(t,n){
if(Array.isArray(n))for(var i=0;i<n.length;i++)o(t+"["+i+"]",n[i])
else if("[object Object]"===Object.prototype.toString.call(n))for(var i in n)o(t+"["+i+"]",n[i])
else e.push(encodeURIComponent(t)+(null!=n&&""!==n?"="+encodeURIComponent(n):""))
}},w=Object.assign||function(t,e){e&&Object.keys(e).forEach((function(n){
t[n]=e[n]}))},b=function(t,e){
if(/:([^\/\.-]+)(\.{3})?:/.test(t))throw new SyntaxError("Template parameter names *must* be separated")
if(null==e)return t
var n=t.indexOf("?"),o=t.indexOf("#"),i=o<0?t.length:o,r=n<0?i:n,s=t.slice(0,r),a={}
w(a,e)
var l=s.replace(/:([^\/\.-]+)(\.{3})?/g,(function(t,n,o){
return delete a[n],null==e[n]?t:o?e[n]:encodeURIComponent(String(e[n]))
})),u=l.indexOf("?"),c=l.indexOf("#"),h=c<0?l.length:c,f=u<0?h:u,p=l.slice(0,f)
n>=0&&(p+=t.slice(n,i)),u>=0&&(p+=(n<0?"?":"&")+l.slice(u,h))
var d=y(a)
return d&&(p+=(n<0&&u<0?"?":"&")+d),o>=0&&(p+=t.slice(o)),c>=0&&(p+=(o<0?"":"&")+l.slice(c)),
p},x=function(t,e,n){var o=0
function i(t){return new e(t)}function r(t){return function(o,r){
"string"!=typeof o?(r=o,o=o.url):null==r&&(r={})
var s=new e((function(e,n){t(b(o,r.params),r,(function(t){
if("function"==typeof r.type)if(Array.isArray(t))for(var n=0;n<t.length;n++)t[n]=new r.type(t[n])
else t=new r.type(t)
e(t)}),n)}))
if(!0===r.background)return s
var a=0
function l(){0==--a&&"function"==typeof n&&n()}return function t(e){var n=e.then
return e.constructor=i,e.then=function(){a++
var o=n.apply(e,arguments)
return o.then(l,(function(t){if(l(),0===a)throw t})),t(o)},e}(s)}}
function s(t,e){
for(var n in t.headers)if({}.hasOwnProperty.call(t.headers,n)&&e.test(n))return!0
return!1}return i.prototype=e.prototype,i.__proto__=e,{
request:r((function(e,n,o,i){
var r,a=null!=n.method?n.method.toUpperCase():"GET",l=n.body,u=!(null!=n.serialize&&n.serialize!==JSON.serialize||l instanceof t.FormData),c=n.responseType||("function"==typeof n.extract?"":"json"),h=new t.XMLHttpRequest,f=!1,p=h,d=h.abort
for(var v in h.abort=function(){f=!0,d.call(this)
},h.open(a,e,!1!==n.async,"string"==typeof n.user?n.user:void 0,"string"==typeof n.password?n.password:void 0),
u&&null!=l&&!s(n,/^content-type$/i)&&h.setRequestHeader("Content-Type","application/json; charset=utf-8"),
"function"==typeof n.deserialize||s(n,/^accept$/i)||h.setRequestHeader("Accept","application/json, text/*"),
n.withCredentials&&(h.withCredentials=n.withCredentials),
n.timeout&&(h.timeout=n.timeout),
h.responseType=c,n.headers)({}).hasOwnProperty.call(n.headers,v)&&h.setRequestHeader(v,n.headers[v])
h.onreadystatechange=function(t){if(!f&&4===t.target.readyState)try{
var r,s=t.target.status>=200&&t.target.status<300||304===t.target.status||/^file:\/\//i.test(e),a=t.target.response
if("json"===c?t.target.responseType||"function"==typeof n.extract||(a=JSON.parse(t.target.responseText)):c&&"text"!==c||null==a&&(a=t.target.responseText),
"function"==typeof n.extract?(a=n.extract(t.target,n),
s=!0):"function"==typeof n.deserialize&&(a=n.deserialize(a)),s)o(a)
else{try{r=t.target.responseText}catch(t){r=a}var l=new Error(r)
l.code=t.target.status,l.response=a,i(l)}}catch(t){i(t)}
},"function"==typeof n.config&&(h=n.config(h,n,e)||h)!==p&&(r=h.abort,
h.abort=function(){f=!0,r.call(this)
}),null==l?h.send():"function"==typeof n.serialize?h.send(n.serialize(l)):l instanceof t.FormData?h.send(l):h.send(JSON.stringify(l))
})),jsonp:r((function(e,n,i,r){
var s=n.callbackName||"_mithril_"+Math.round(1e16*Math.random())+"_"+o++,a=t.document.createElement("script")
t[s]=function(e){delete t[s],a.parentNode.removeChild(a),i(e)
},a.onerror=function(){
delete t[s],a.parentNode.removeChild(a),r(new Error("JSONP request failed"))
},a.src=e+(e.indexOf("?")<0?"?":"&")+encodeURIComponent(n.callbackKey||"callback")+"="+encodeURIComponent(s),
t.document.documentElement.appendChild(a)}))}}(window,v,g.redraw),S=function(t){
if(""===t||null==t)return{}
"?"===t.charAt(0)&&(t=t.slice(1))
for(var e=t.split("&"),n={},o={},i=0;i<e.length;i++){
var r=e[i].split("="),s=decodeURIComponent(r[0]),a=2===r.length?decodeURIComponent(r[1]):""
"true"===a?a=!0:"false"===a&&(a=!1)
var l=s.split(/\]\[?|\[/),u=o
s.indexOf("[")>-1&&l.pop()
for(var c=0;c<l.length;c++){var h=l[c],f=l[c+1],p=""==f||!isNaN(parseInt(f,10))
if(""===h)null==n[s=l.slice(0,c).join()]&&(n[s]=Array.isArray(u)?u.length:0),h=n[s]++
else if("__proto__"===h)break
if(c===l.length-1)u[h]=a
else{var d=Object.getOwnPropertyDescriptor(u,h)
null!=d&&(d=d.value),null==d&&(u[h]=d=p?[]:{}),u=d}}}return o},E=function(t){
var e=t.indexOf("?"),n=t.indexOf("#"),o=n<0?t.length:n,i=e<0?o:e,r=t.slice(0,i).replace(/\/{2,}/g,"/")
return r?("/"!==r[0]&&(r="/"+r),r.length>1&&"/"===r[r.length-1]&&(r=r.slice(0,-1))):r="/",
{path:r,params:e<0?{}:S(t.slice(e+1,o))}},M={},C=function(t,n){var o
function i(e,n,i){if(e=b(e,n),null!=o){o()
var r=i?i.state:null,s=i?i.title:null
i&&i.replace?t.history.replaceState(r,s,f.prefix+e):t.history.pushState(r,s,f.prefix+e)
}else t.location.href=f.prefix+e}var r,s,a,l,c=M,h=f.SKIP={}
function f(u,p,d){
if(null==u)throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined")
var m,g=0,y=Object.keys(d).map((function(t){
if("/"!==t[0])throw new SyntaxError("Routes must start with a `/`")
if(/:([^\/\.-]+)(\.{3})?:/.test(t))throw new SyntaxError("Route parameter names must be separated with either `/`, `.`, or `-`")
return{route:t,component:d[t],
check:(e=t,n=E(e),o=Object.keys(n.params),i=[],r=new RegExp("^"+n.path.replace(/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,(function(t,e,n){
return null==e?"\\"+t:(i.push({k:e,r:"..."===n
}),"..."===n?"(.*)":"."===n?"([^/]+)\\.":"([^/]+)"+(n||""))}))+"$"),function(t){
for(var e=0;e<o.length;e++)if(n.params[o[e]]!==t.params[o[e]])return!1
if(!i.length)return r.test(t.path)
var s=r.exec(t.path)
if(null==s)return!1
for(e=0;e<i.length;e++)t.params[i[e].k]=i[e].r?s[e+1]:decodeURIComponent(s[e+1])
return!0})}
var e,n,o,i,r
})),b="function"==typeof setImmediate?setImmediate:setTimeout,x=v.resolve(),S=!1
if(o=null,null!=p){var C=E(p)
if(!y.some((function(t){return t.check(C)
})))throw new ReferenceError("Default route doesn't match any known routes")}
function k(){S=!1
var e=t.location.hash
"#"!==f.prefix[0]&&(e=t.location.search+e,"?"!==f.prefix[0]&&"/"!==(e=t.location.pathname+e)[0]&&(e="/"+e))
var o=e.concat().replace(/(?:%[a-f89][a-f0-9])+/gim,decodeURIComponent).slice(f.prefix.length),u=E(o)
function d(){if(o===p)throw new Error("Could not resolve default route "+p)
i(p,null,{replace:!0})}w(u.params,t.history.state),function t(e){
for(;e<y.length;e++)if(y[e].check(u)){
var i=y[e].component,f=y[e].route,p=i,v=l=function(f){if(v===l){
if(f===h)return t(e+1)
r=null==f||"function"!=typeof f.view&&"function"!=typeof f?"div":f,s=u.params,a=o,
l=null,c=i.render?i:null,2===g?n.redraw():(g=2,n.redraw.sync())}}
return void(i.view||"function"==typeof i?(i={},v(p)):i.onmatch?x.then((function(){
return i.onmatch(u.params,o,f)})).then(v,d):v("div"))}d()}(0)}
return o=function(){S||(S=!0,b(k))
},"function"==typeof t.history.pushState?(m=function(){
t.removeEventListener("popstate",o,!1)
},t.addEventListener("popstate",o,!1)):"#"===f.prefix[0]&&(o=null,m=function(){
t.removeEventListener("hashchange",k,!1)
},t.addEventListener("hashchange",k,!1)),n.mount(u,{onbeforeupdate:function(){
return!(!(g=g?2:1)||M===c)},oncreate:k,onremove:m,view:function(){if(g&&M!==c){
var t=[e(r,s.key,s)]
return c&&(t=c.render(t[0])),t}}})}return f.set=function(t,e,n){
null!=l&&((n=n||{}).replace=!0),l=null,i(t,e,n)},f.get=function(){return a
},f.prefix="#!",f.Link={view:function(t){var e,n,o=t.attrs.options,i={}
w(i,t.attrs),i.selector=i.options=i.key=i.oninit=i.oncreate=i.onbeforeupdate=i.onupdate=i.onbeforeremove=i.onremove=null
var r=u(t.attrs.selector||"a",i,t.children)
return(r.attrs.disabled=Boolean(r.attrs.disabled))?(r.attrs.href=null,r.attrs["aria-disabled"]="true",
r.attrs.onclick=null):(e=r.attrs.onclick,n=r.attrs.href,r.attrs.href=f.prefix+n,
r.attrs.onclick=function(t){var i
"function"==typeof e?i=e.call(t.currentTarget,t):null==e||"object"!=typeof e||"function"==typeof e.handleEvent&&e.handleEvent(t),
!1===i||t.defaultPrevented||0!==t.button&&0!==t.which&&1!==t.which||t.currentTarget.target&&"_self"!==t.currentTarget.target||t.ctrlKey||t.metaKey||t.shiftKey||t.altKey||(t.preventDefault(),
t.redraw=!1,f.set(n,null,o))}),r}},f.param=function(t){return s&&null!=t?s[t]:s
},f}(window,g),k=function(){return c.apply(this,arguments)}
k.m=c,k.trust=c.trust,k.fragment=c.fragment,k.mount=g.mount,k.route=C,k.render=m,
k.redraw=g.redraw,
k.request=x.request,k.jsonp=x.jsonp,k.parseQueryString=S,k.buildQueryString=y,
k.parsePathname=E,k.buildPathname=b,k.vnode=e,k.PromisePolyfill=d
var z,P=k,A="svg {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100;\n  box-sizing: border-box;\n  padding: 0;\n}\n\npath {\n  stroke-width: 0.1%;\n  fill-rule: nonzero;\n}\n\npath.DBS {\n  fill: #cdff00;\n  stroke: black;\n}\n\npath.DBS:first-of-type {\n  fill: none;\n}\n\npath.DBS:hover {\n  stroke-dasharray: 1%;\n  animation: dash 1s linear infinite;\n}\n\npath.part {\n  fill: white;\n  fill-opacity: 0%;\n  stroke: black;\n}\n\npath.part:hover {\n  fill: yellow;\n  fill-opacity: 50%;\n  stroke-dasharray: 1%;\n  animation: dash 1s linear infinite;\n}\n\npath.cluster {\n  stroke: black;\n  fill: yellow;\n  fill-opacity: 15%;\n}\n\npath.cluster:hover {\n  fill: yellow;\n  fill-opacity: 50%;\n  stroke-dasharray: 1%;\n  animation: dash 1s linear infinite;\n}\n\npath.route {\n  stroke: red;\n  fill: none;\n}\n\ncircle.pierce {\n  r: 0.2%;\n  fill: #00ff00;\n  stroke: navy;\n  stroke-width: 0.1%;\n}\n\ncircle.route:hover {\n  fill-opacity: 75%;\n  stroke: lime;\n}\n\ncircle.pierce:hover {\n  fill: yellow;\n  stroke: red;\n}\n\n@keyframes dash {\n  from {\n  stroke-dashoffset: 0%;\n  }\n  to {\n  stroke-dashoffset: -2%;\n  }\n}"
z=P
var N,T,Z,I={view:function(){
return z.fragment(z("style","html, body {\n  margin: 0;\n  height: 100%;\n}\n\nh1 {\n  margin-block-start: 0;\n  text-align: center;\n}\n\nform {\n  padding: 1ex;\n}\n\ntable.formats {\n  border-collapse: collapse;\n}\n\n.hidden {\n  display: none;\n}\n\nh2 {\n  border-top: 1px dashed black;\n}"),z("style",A))
}}
N=P,T=Object.freeze({__proto__:null,
homepage:"https://github.com/ukoloff/j2pcgtsp"})
Z={view:function(){return N.fragment(N("li","You can save ",N("a",{
href:"j2gtsp.html",target:"_blank",download:"j2gtsp.html",
type:"application/octet-stream"
},"this file")," (Hint: Right click + Save as) ","and run it locally"),N("li","Command line (CLI) version (Node.js required):",N("ul",N("li","For ",N("a",{
href:"j2gtsp",target:"_blank",download:"j2gtsp",type:"application/octet-stream"
},"Linux")," // chmod +x j2gtsp"),N("li","For ",N("a",{href:"j2gtsp.bat",
target:"_blank",download:"j2gtsp.bat",type:"application/octet-stream"
},"Windows")))))}}
var D,B={view:function(){return N.fragment(N("h2","Note:"),N("ul",N("li",N("a",{
href:T.homepage,target:"_blank"
},"Source code"),"@GitHub"),location.host?N(Z):void 0))}},O={startPointMode:0,
hideIcons:!1,onrender:0},j=function(t){if(!t)throw Error("Assertion failed!")}
D=j
var L=R
function R(t){var e
return e=JSON.parse(t),D(e.length),e}R.success=function(t){var e,n
return e=t.map((function(t){return t.partid})),n=e.length,e=function(t){var e
return e={},t.filter((function(t){return!e[t]&&(e[t]=!0)}))
}(e),n+" parts: "+e.slice(0,3).join(", ")+(e.length>3?"...":".")}
var V=function(t){var e,n,o,i,r
for(e=[],n=[],o=0,r=(i=t.Contours).length;o<r;++o)s(i[o])
function s(t,o){var i,r,a,l,u,c
for(n.push(i={id:t.Index,up:o?o.up.concat(o):[],points:[],groups:[]
}),o&&o.groups.push(i),r=0,l=(a=t.Points||[]).length;r<l;++r)u=a[r],e.push(c={
id:u.GlobalIndex,x:u.X,y:u.Y,group:i}),i.points.push(c)
for(r=0,l=(a=t.NestedContours||[]).length;r<l;++r)s(t=a[r],i)}return{start:{
x:t.TaskData.StartX||t.TaskData.FinishX||0,
y:t.TaskData.StartY||t.TaskData.FinishY||0},points:e,groups:n}}
var q=function(t){var e,n,o,i,r,s,a=[]
for(t.iPoints=e={},n=0,i=(o=t.points).length;n<i;++n)r=o[n],e[r.id]=r
for(t.iGroups=e={},n=0,i=(o=t.groups).length;n<i;++n)s=o[n],a.push(e[s.id]=s)
return a}
var _,U,F,G,H=[].slice,$=Array.from||function(t){return H.call(t)}
_=j,U=V,F=q,G=function(t){return t.bounds={min:{
x:Math.min.apply(Math,[t.start.x].concat($(t.points.map((function(t){return t.x
}))))),y:Math.min.apply(Math,[t.start.y].concat($(t.points.map((function(t){
return t.y})))))},max:{
x:Math.max.apply(Math,[t.start.x].concat($(t.points.map((function(t){return t.x
}))))),y:Math.max.apply(Math,[t.start.y].concat($(t.points.map((function(t){
return t.y})))))}}}
var W=X
function X(t){var e,n
return function(t){_(t.TaskData),_(t.Contours)
}(e=JSON.parse(t)),n=U(e),F(n),G(n),n}X.success=function(t){
return t.points.length+"/"+t.groups.length+" points/groups"}
var Y=J
function J(t){var e
if(e=/\bTour(?:\s+Ordering)?\s*:\s*\[([\s\d,]*)\]/.exec(t))return e[1].split(/\D+/).filter((function(t){
return t})).map(Number)
throw Error("GTSP route not found")}J.success=function(t){
return t.length+" route point(s)"}
var K,Q=f((function(t,e){var n,o,i,r,s,a
for(r in n=L,o=W,i=Y,e.dbs=n,e.discrete=o,e.route=i,s=e)a=s[r],e[r]={parser:a}
})),tt=(Q.dbs,Q.discrete,Q.route,{routeLength:0,badFiles:[]})
K=O
var et,nt,ot,it,rt=function(t,e){var n
return n=function(t){return function(){switch(K.startPointMode){case 1:return 1
case 2:return 0
default:return 1===(null!=t?t[0]:void 0)?1:0}}()}(t),t.map((function(t){
return e.iPoints[t-n]||e.start}))}
function st(t){return t*t}function at(t,e){
return Math.sqrt(st(t.x-e.x)+st(t.y-e.y))}et=rt,nt=Q,ot=tt,it=function(t,e){
var n,o,i,r,s,a
n=et.apply(this,arguments),o=0,n.length&&(i=n[n.length-1])
for(r=0,s=n.length;r<s;++r)a=n[r],o+=at(i,a),i=a
return o}
var lt,ut,ct,ht=function(){
nt.discrete.data&&nt.route.data&&(ot.routeLength=it(nt.route.data,nt.discrete.data))
}
lt=P,ut=O,ct=ht
var ft,pt,dt={view:function(){var t
return lt.fragment(lt("p"),lt("label","Starting point: ",lt("select",{
oncreate:function(t){try{
t.dom.selectedIndex=ut.startPointMode=Number(localStorage["starting-pont"])
}catch(t){}},onchange:function(){try{
localStorage["starting-pont"]=ut.startPointMode=this.selectedIndex,ct()
}catch(t){}}},function(){var e,n,o,i=[]
for(e=0,o=(n="Autodetect;First contour (new format);Last contour (old format)".split(";")).length;e<o;++e)t=n[e],
i.push(lt("option",t))
return i}())),lt("br"),lt("label",lt("input",{type:"checkbox",
checked:ut.hideIcons=!!localStorage["hide-icons"],onclick:function(){try{
localStorage["hide-icons"]=ut.hideIcons=this.checked?"+":""}catch(t){}}
}),"Hide control icons"),lt("p"))}}
ft=P,pt=Q
var vt,mt,gt,yt,wt,bt,xt={view:function(){
return ft("table.formats[border]",ft("tr",ft("th","Data"),ft("th",".ext"),ft("th",ft("nobr","File name")),ft("th[width=100%]","Additional info")),ft("tr",ft("td","DBS"),ft("td",".dbs.json"),ft("td",ft("b",ft("nobr",pt.dbs.name))),ft("td",pt.dbs.info)),ft("tr",ft("td","GTSP"),ft("td",".json"),ft("td",ft("b",ft("nobr",pt.discrete.name))),ft("td",pt.discrete.info)),ft("tr",ft("td","Route"),ft("td",".result.txt"),ft("td",ft("b",ft("nobr",pt.route.name))),ft("td",pt.route.info)))
}}
vt=Q,mt=tt,gt=P,yt=function(t,e){var n,o,i,r,s
for(n in o=vt){i=o[n]
try{return r=i.parser(t),s=i.parser.success(r),i.data=r,i.info=s,i.name=e,n
}catch(t){}}return mt.badFiles.push(e),!1},wt=ht,bt=tt
function St(){return!1}function Et(t){var e,n,o
for(bt.badFiles.length=0,e=Promise.resolve(),n=0,o=t.length;n<o;++n)i.call(this,t[n])
function i(t){e=e.then((function(){return t.text().then((function(e){
yt(e,t.name)}))}))}e.then((function(){wt(),gt.redraw()}))}var Mt,Ct={
oncreate:function(){var t
;(t=document.body).ondragenter=St,t.ondragleave=St,t.ondragover=St,
t.ondrop=function(t){return Et(t.dataTransfer.files),!1}},onremove:function(){
var t
;(t=document.body).ondragenter=null,t.ondragleave=null,t.ondragover=null,t.ondrop=null
},view:function(){var t
return t=this,gt.fragment(gt("input.hidden",{type:"file",multiple:!0,
oncreate:function(e){(t.uploadButton=e.dom).onchange=function(){Et(this.files)}}
}),gt("button",{type:"button",onclick:function(){t.uploadButton.click()}
},"Upload file(s)")," ...or drag-and-drop file(s) onto this page...")}}
Mt=function(t){var e,n,o,i,r
for(e="",n=0,o=t.length;n<o;++n)i=n,r=t[n],e+="\n\t"+(i?"L":"M")+" "+r.x+" "+r.y
return e+" Z"}
var kt,zt=function(t,e){var n,o,i
null==e&&(e={}),"string"!=typeof t&&(t=Mt(t))
for(o in n="",e)i=e[o],"title"!==o&&(n+=" "+o+'="'+i+'"')
return"<path"+n+' d="'+t+'">\n'+(e.title?"<title>"+e.title+"</title>":"")+"</path>"
}
kt=zt
var Pt,At=function(t){return t.map(Nt).join("")}
function Nt(t){return kt(t.paths.map(Tt).join(""),{class:"DBS",
title:"Part: "+t.partid+"\nContours: "+t.paths.length})}function Tt(t){
var e,n,o,i,r,s,a,l
for(e="",n=[],o=0,i=t.length;o<i;++o)r=t[o],e+="\n",n.length?n[2]?e+="A "+(s=Math.abs(1/n[2]+n[2])/4*(a=r,
l=n,
Math.sqrt(Zt(a[0]-l[0])+Zt(a[1]-l[1]))))+" "+s+" 0 "+Number(1<Math.abs(n[2]))+" "+Number(n[2]>0):e+="L":e+="M",
e+=" "+r[0]+" "+r[1],n=r
return t.length>0&&t[0][0]===t[t.length-1][0]&&t[0][1]===t[t.length-1][1]&&(e+=" Z"),
e}function Zt(t){return t*t}Pt=zt
var It=function(t){return t.groups.map((function(t){return Pt(function(t){
return"M "+t.map((function(t){return t.x+" "+t.y})).join("\nL ")+" Z"
}(t.points),{class:"cluster",title:"Cluster #"+t.id+"\nPoints: "+t.points.length
})})).join("")}
var Dt,Bt,Ot=function(t){var e,n,o,i,r,s,a,l,u,c,h,f
for(e="",n=0,i=(o=t.groups).length;n<i;++n)for(r=o[n],s=0,l=(a=r.points).length;s<l;++s)u=a[s],
e+='\n<circle class="pierce" cx="'+u.x+'" cy="'+u.y+'"><title>Point #'+(u.id||"-")+"\nGroup #"+((null!=(c=u.group)?c.id:void 0)||"-")+" ("+((null!=(h=u.group)&&null!=(f=h.points)?f.length:void 0)||0)+" points)\nX: "+u.x+"\nY: "+u.y+"\n</title></circle>"
return e}
Dt=rt,Bt=zt
var jt,Lt,Rt=function(t,e){var n
return n=Dt.apply(this,arguments),Bt(n,{class:"route"})}
jt={open:function(t){var e
return.01,e={x:t.max.x-t.min.x,y:t.max.y-t.min.y
},'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  height="100%" width="100%"\n  viewBox="'+[t.min.x-.01*e.x,-t.max.y-.01*e.y,1.02*e.x,1.02*e.y].join(" ")+'"><g><g transform = "scale(1, -1)">'
},close:function(){return"\n</g></g></svg>"}},Lt=Q
var Vt=function(){var t,e
t=Lt.discrete.data.bounds,e=jt.open(t),e+=Lt.dbs.data?At(Lt.dbs.data):It(Lt.discrete.data),
e+=Ot(Lt.discrete.data),Lt.route.data&&(e+=Rt(Lt.route.data,Lt.discrete.data))
return e+=jt.close()}
var qt,_t,Ut,Ft,Gt,Ht,$t,Wt,Xt,Yt,Jt,Kt,Qt,te,ee,ne
qt=O,_t=Object.freeze({__proto__:null,
path:"https://cdn.jsdelivr.net/npm/svg-pan-zoom@3.6.1/dist/svg-pan-zoom.min.js"
}),Ut=Vt,Ft=tt,Gt=function(){
return'<script src="'+_t.path+"\"><\/script>\n<script>\n  setTimeout(function() {\n    svgPanZoom('svg', {controlIconsEnabled: "+!qt.hideIcons+"})\n  })\n<\/script>"
},Ht=Q,$t=function(){
return"<!DOCTYPE html>\n<html><head>\n<title>PCGTSP Visualization</title>\n<style>\nsvg {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100;\n  box-sizing: border-box;\n  padding: 0;\n}\n\npath {\n  stroke-width: 0.1%;\n  fill-rule: nonzero;\n}\n\npath.DBS {\n  fill: #cdff00;\n  stroke: black;\n}\n\npath.DBS:first-of-type {\n  fill: none;\n}\n\npath.DBS:hover {\n  stroke-dasharray: 1%;\n  animation: dash 1s linear infinite;\n}\n\npath.part {\n  fill: white;\n  fill-opacity: 0%;\n  stroke: black;\n}\n\npath.part:hover {\n  fill: yellow;\n  fill-opacity: 50%;\n  stroke-dasharray: 1%;\n  animation: dash 1s linear infinite;\n}\n\npath.cluster {\n  stroke: black;\n  fill: yellow;\n  fill-opacity: 15%;\n}\n\npath.cluster:hover {\n  fill: yellow;\n  fill-opacity: 50%;\n  stroke-dasharray: 1%;\n  animation: dash 1s linear infinite;\n}\n\npath.route {\n  stroke: red;\n  fill: none;\n}\n\ncircle.pierce {\n  r: 0.2%;\n  fill: #00ff00;\n  stroke: navy;\n  stroke-width: 0.1%;\n}\n\ncircle.route:hover {\n  fill-opacity: 75%;\n  stroke: lime;\n}\n\ncircle.pierce:hover {\n  fill: yellow;\n  stroke: red;\n}\n\n@keyframes dash {\n  from {\n  stroke-dashoffset: 0%;\n  }\n  to {\n  stroke-dashoffset: -2%;\n  }\n}\n</style>\n"+Gt()+"\n</head><body>\n"+Ut()+"\n"+((t=Ft.routeLength)?"\x3c!--\nRoute Length     : "+t+"\n--\x3e":"")+"\n</body></html>"
var t},Wt=P,Xt=B,Yt=dt,Jt=xt,Kt=Ct,Qt=Q,te=tt,ee=O,ne=function(){
t=Ht.discrete.name+".html",
e=$t(),(n=document.createElement("a")).setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),
n.setAttribute("download",t),
document.createEvent?((o=document.createEvent("MouseEvents")).initEvent("click",!0,!0),
n.dispatchEvent(o)):n.click()
var t,e,n,o}
var oe={view:function(){var t
return Wt.fragment(Wt("h1",document.title="View DBS / JSON / GTSP"),Wt("form",Wt(Jt),Wt(Yt),Wt(Kt),te.badFiles.length?Wt("p","Unknown files: "+te.badFiles.join(", ")):void 0,Wt("hr"),(t=te.routeLength)?Wt("p","Route length: "+t):void 0,Wt("button",{
type:"button",disabled:!Qt.discrete.data,onclick:ee.onrender
},"View!")," in View mode hit Back or Refresh (F5) to come back to this page",Wt("p"),Wt("button",{
type:"button",disabled:!Qt.discrete.data,onclick:ne
},"Export HTML + SVG"),Wt(Xt)))}},ie=function(){var t,e,n,o="",i=[],r={
passive:!0}
function s(e,s,a,l){var u
u="wheel"===n?a:function(t,e){var o=function(t){!t&&(t=window.event)
var o={originalEvent:t,target:t.target||t.srcElement,type:"wheel",
deltaMode:"MozMousePixelScroll"==t.type?0:1,deltaX:0,delatZ:0,
preventDefault:function(){t.preventDefault?t.preventDefault():t.returnValue=!1}}
return"mousewheel"==n?(o.deltaY=-1/40*t.wheelDelta,t.wheelDeltaX&&(o.deltaX=-1/40*t.wheelDeltaX)):o.deltaY=t.detail,
e(o)}
return i.push({element:t,fn:o}),o}(e,a),e[t](o+s,u,!!l&&r)}function a(t,s,a,l){
var u
u="wheel"===n?a:function(t){
for(var e=0;e<i.length;e++)if(i[e].element===t)return i[e].fn
return function(){}}(t),t[e](o+s,u,!!l&&r),function(t){
for(var e=0;e<i.length;e++)if(i[e].element===t)return i.splice(e,1)}(t)}
return window.addEventListener?(t="addEventListener",
e="removeEventListener"):(t="attachEvent",
e="detachEvent",o="on"),n="onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll",
{on:function(t,e,o){
s(t,n,e,o),"DOMMouseScroll"==n&&s(t,"MozMousePixelScroll",e,o)},
off:function(t,e,o){
a(t,n,e,o),"DOMMouseScroll"==n&&a(t,"MozMousePixelScroll",e,o)}}}(),re={
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
},throttle:function(t,e,n){var o,i,r,s=this,a=null,l=0
n||(n={})
var u=function(){l=!1===n.leading?0:s.now(),a=null,r=t.apply(o,i),a||(o=i=null)}
return function(){var c=s.now()
l||!1!==n.leading||(l=c)
var h=e-(c-l)
return o=this,i=arguments,h<=0||h>e?(clearTimeout(a),a=null,l=c,r=t.apply(o,i),a||(o=i=null)):a||!1===n.trailing||(a=setTimeout(u,h)),
r}},createRequestAnimationFrame:function(t){var e=null
return"auto"!==t&&t<60&&t>1&&(e=Math.floor(1e3/t)),null===e?window.requestAnimationFrame||se(33):se(e)
}}
function se(t){return function(e){window.setTimeout(e,t)}}var ae="unknown"
document.documentMode&&(ae="ie")
var le={svgNS:"http://www.w3.org/2000/svg",
xmlNS:"http://www.w3.org/XML/1998/namespace",
xmlnsNS:"http://www.w3.org/2000/xmlns/",xlinkNS:"http://www.w3.org/1999/xlink",
evNS:"http://www.w3.org/2001/xml-events",
getBoundingClientRectNormalized:function(t){
if(t.clientWidth&&t.clientHeight)return{width:t.clientWidth,
height:t.clientHeight}
if(t.getBoundingClientRect())return t.getBoundingClientRect()
throw new Error("Cannot get BoundingClientRect for SVG.")},
getOrCreateViewport:function(t,e){var n=null
if(!(n=re.isElement(e)?e:t.querySelector(e))){
var o=Array.prototype.slice.call(t.childNodes||t.children).filter((function(t){
return"defs"!==t.nodeName&&"#text"!==t.nodeName}))
1===o.length&&"g"===o[0].nodeName&&null===o[0].getAttribute("transform")&&(n=o[0])
}if(!n){var i="viewport-"+(new Date).toISOString().replace(/\D/g,"")
;(n=document.createElementNS(this.svgNS,"g")).setAttribute("id",i)
var r=t.childNodes||t.children
if(r&&r.length>0)for(var s=r.length;s>0;s--)"defs"!==r[r.length-s].nodeName&&n.appendChild(r[r.length-s])
t.appendChild(n)}var a=[]
return n.getAttribute("class")&&(a=n.getAttribute("class").split(" ")),~a.indexOf("svg-pan-zoom_viewport")||(a.push("svg-pan-zoom_viewport"),
n.setAttribute("class",a.join(" "))),n},setupSvgAttributes:function(t){
if(t.setAttribute("xmlns",this.svgNS),
t.setAttributeNS(this.xmlnsNS,"xmlns:xlink",this.xlinkNS),
t.setAttributeNS(this.xmlnsNS,"xmlns:ev",this.evNS),null!==t.parentNode){
var e=t.getAttribute("style")||""
;-1===e.toLowerCase().indexOf("overflow")&&t.setAttribute("style","overflow: hidden; "+e)
}},internetExplorerRedisplayInterval:300,
refreshDefsGlobal:re.throttle((function(){
for(var t=document.querySelectorAll("defs"),e=t.length,n=0;n<e;n++){var o=t[n]
o.parentNode.insertBefore(o,o)}}),h?h.internetExplorerRedisplayInterval:null),
setCTM:function(t,e,n){
var o=this,i="matrix("+e.a+","+e.b+","+e.c+","+e.d+","+e.e+","+e.f+")"
t.setAttributeNS(null,"transform",i),"transform"in t.style?t.style.transform=i:"-ms-transform"in t.style?t.style["-ms-transform"]=i:"-webkit-transform"in t.style&&(t.style["-webkit-transform"]=i),
"ie"===ae&&n&&(n.parentNode.insertBefore(n,n),window.setTimeout((function(){
o.refreshDefsGlobal()}),o.internetExplorerRedisplayInterval))},
getEventPoint:function(t,e){var n=e.createSVGPoint()
return re.mouseAndTouchNormalize(t,e),n.x=t.clientX,n.y=t.clientY,n},
getSvgCenterPoint:function(t,e,n){return this.createSVGPoint(t,e/2,n/2)},
createSVGPoint:function(t,e,n){var o=t.createSVGPoint()
return o.x=e,o.y=n,o}},ue={enable:function(t){var e=t.svg.querySelector("defs")
if(e||(e=document.createElementNS(le.svgNS,"defs"),t.svg.appendChild(e)),!e.querySelector("style#svg-pan-zoom-controls-styles")){
var n=document.createElementNS(le.svgNS,"style")
n.setAttribute("id","svg-pan-zoom-controls-styles"),n.setAttribute("type","text/css"),
n.textContent=".svg-pan-zoom-control { cursor: pointer; fill: black; fill-opacity: 0.333; } .svg-pan-zoom-control:hover { fill-opacity: 0.8; } .svg-pan-zoom-control-background { fill: white; fill-opacity: 0.5; } .svg-pan-zoom-control-background { fill-opacity: 0.8; }",
e.appendChild(n)}var o=document.createElementNS(le.svgNS,"g")
o.setAttribute("id","svg-pan-zoom-controls"),o.setAttribute("transform","translate("+(t.width-70)+" "+(t.height-76)+") scale(0.75)"),
o.setAttribute("class","svg-pan-zoom-control"),
o.appendChild(this._createZoomIn(t)),
o.appendChild(this._createZoomReset(t)),o.appendChild(this._createZoomOut(t)),
t.svg.appendChild(o),t.controlIcons=o},_createZoomIn:function(t){
var e=document.createElementNS(le.svgNS,"g")
e.setAttribute("id","svg-pan-zoom-zoom-in"),e.setAttribute("transform","translate(30.5 5) scale(0.015)"),
e.setAttribute("class","svg-pan-zoom-control"),
e.addEventListener("click",(function(){t.getPublicInstance().zoomIn()
}),!1),e.addEventListener("touchstart",(function(){
t.getPublicInstance().zoomIn()}),!1)
var n=document.createElementNS(le.svgNS,"rect")
n.setAttribute("x","0"),n.setAttribute("y","0"),n.setAttribute("width","1500"),n.setAttribute("height","1400"),
n.setAttribute("class","svg-pan-zoom-control-background"),e.appendChild(n)
var o=document.createElementNS(le.svgNS,"path")
return o.setAttribute("d","M1280 576v128q0 26 -19 45t-45 19h-320v320q0 26 -19 45t-45 19h-128q-26 0 -45 -19t-19 -45v-320h-320q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h320v-320q0 -26 19 -45t45 -19h128q26 0 45 19t19 45v320h320q26 0 45 19t19 45zM1536 1120v-960 q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"),
o.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(o),e},
_createZoomReset:function(t){var e=document.createElementNS(le.svgNS,"g")
e.setAttribute("id","svg-pan-zoom-reset-pan-zoom"),e.setAttribute("transform","translate(5 35) scale(0.4)"),
e.setAttribute("class","svg-pan-zoom-control"),
e.addEventListener("click",(function(){t.getPublicInstance().reset()
}),!1),e.addEventListener("touchstart",(function(){t.getPublicInstance().reset()
}),!1)
var n=document.createElementNS(le.svgNS,"rect")
n.setAttribute("x","2"),n.setAttribute("y","2"),n.setAttribute("width","182"),n.setAttribute("height","58"),
n.setAttribute("class","svg-pan-zoom-control-background"),e.appendChild(n)
var o=document.createElementNS(le.svgNS,"path")
o.setAttribute("d","M33.051,20.632c-0.742-0.406-1.854-0.609-3.338-0.609h-7.969v9.281h7.769c1.543,0,2.701-0.188,3.473-0.562c1.365-0.656,2.048-1.953,2.048-3.891C35.032,22.757,34.372,21.351,33.051,20.632z"),
o.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(o)
var i=document.createElementNS(le.svgNS,"path")
return i.setAttribute("d","M170.231,0.5H15.847C7.102,0.5,0.5,5.708,0.5,11.84v38.861C0.5,56.833,7.102,61.5,15.847,61.5h154.384c8.745,0,15.269-4.667,15.269-10.798V11.84C185.5,5.708,178.976,0.5,170.231,0.5z M42.837,48.569h-7.969c-0.219-0.766-0.375-1.383-0.469-1.852c-0.188-0.969-0.289-1.961-0.305-2.977l-0.047-3.211c-0.03-2.203-0.41-3.672-1.142-4.406c-0.732-0.734-2.103-1.102-4.113-1.102h-7.05v13.547h-7.055V14.022h16.524c2.361,0.047,4.178,0.344,5.45,0.891c1.272,0.547,2.351,1.352,3.234,2.414c0.731,0.875,1.31,1.844,1.737,2.906s0.64,2.273,0.64,3.633c0,1.641-0.414,3.254-1.242,4.84s-2.195,2.707-4.102,3.363c1.594,0.641,2.723,1.551,3.387,2.73s0.996,2.98,0.996,5.402v2.32c0,1.578,0.063,2.648,0.19,3.211c0.19,0.891,0.635,1.547,1.333,1.969V48.569z M75.579,48.569h-26.18V14.022h25.336v6.117H56.454v7.336h16.781v6H56.454v8.883h19.125V48.569z M104.497,46.331c-2.44,2.086-5.887,3.129-10.34,3.129c-4.548,0-8.125-1.027-10.731-3.082s-3.909-4.879-3.909-8.473h6.891c0.224,1.578,0.662,2.758,1.316,3.539c1.196,1.422,3.246,2.133,6.15,2.133c1.739,0,3.151-0.188,4.236-0.562c2.058-0.719,3.087-2.055,3.087-4.008c0-1.141-0.504-2.023-1.512-2.648c-1.008-0.609-2.607-1.148-4.796-1.617l-3.74-0.82c-3.676-0.812-6.201-1.695-7.576-2.648c-2.328-1.594-3.492-4.086-3.492-7.477c0-3.094,1.139-5.664,3.417-7.711s5.623-3.07,10.036-3.07c3.685,0,6.829,0.965,9.431,2.895c2.602,1.93,3.966,4.73,4.093,8.402h-6.938c-0.128-2.078-1.057-3.555-2.787-4.43c-1.154-0.578-2.587-0.867-4.301-0.867c-1.907,0-3.428,0.375-4.565,1.125c-1.138,0.75-1.706,1.797-1.706,3.141c0,1.234,0.561,2.156,1.682,2.766c0.721,0.406,2.25,0.883,4.589,1.43l6.063,1.43c2.657,0.625,4.648,1.461,5.975,2.508c2.059,1.625,3.089,3.977,3.089,7.055C108.157,41.624,106.937,44.245,104.497,46.331z M139.61,48.569h-26.18V14.022h25.336v6.117h-18.281v7.336h16.781v6h-16.781v8.883h19.125V48.569z M170.337,20.14h-10.336v28.43h-7.266V20.14h-10.383v-6.117h27.984V20.14z"),
i.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(i),e},
_createZoomOut:function(t){var e=document.createElementNS(le.svgNS,"g")
e.setAttribute("id","svg-pan-zoom-zoom-out"),e.setAttribute("transform","translate(30.5 70) scale(0.015)"),
e.setAttribute("class","svg-pan-zoom-control"),
e.addEventListener("click",(function(){t.getPublicInstance().zoomOut()
}),!1),e.addEventListener("touchstart",(function(){
t.getPublicInstance().zoomOut()}),!1)
var n=document.createElementNS(le.svgNS,"rect")
n.setAttribute("x","0"),n.setAttribute("y","0"),n.setAttribute("width","1500"),n.setAttribute("height","1400"),
n.setAttribute("class","svg-pan-zoom-control-background"),e.appendChild(n)
var o=document.createElementNS(le.svgNS,"path")
return o.setAttribute("d","M1280 576v128q0 26 -19 45t-45 19h-896q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h896q26 0 45 19t19 45zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5 t84.5 -203.5z"),
o.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(o),e},
disable:function(t){
t.controlIcons&&(t.controlIcons.parentNode.removeChild(t.controlIcons),
t.controlIcons=null)}},ce=function(t,e){this.init(t,e)}
ce.prototype.init=function(t,e){
this.viewport=t,this.options=e,this.originalState={zoom:1,x:0,y:0
},this.activeState={zoom:1,x:0,y:0
},this.updateCTMCached=re.proxy(this.updateCTM,this),
this.requestAnimationFrame=re.createRequestAnimationFrame(this.options.refreshRate),
this.viewBox={x:0,y:0,width:0,height:0},this.cacheViewBox()
var n=this.processCTM()
this.setCTM(n),this.updateCTM()},ce.prototype.cacheViewBox=function(){
var t=this.options.svg.getAttribute("viewBox")
if(t){var e=t.split(/[\s\,]/).filter((function(t){return t})).map(parseFloat)
this.viewBox.x=e[0],this.viewBox.y=e[1],this.viewBox.width=e[2],this.viewBox.height=e[3]
var n=Math.min(this.options.width/this.viewBox.width,this.options.height/this.viewBox.height)
this.activeState.zoom=n,this.activeState.x=(this.options.width-this.viewBox.width*n)/2,
this.activeState.y=(this.options.height-this.viewBox.height*n)/2,
this.updateCTMOnNextFrame(),this.options.svg.removeAttribute("viewBox")
}else this.simpleViewBoxCache()},ce.prototype.simpleViewBoxCache=function(){
var t=this.viewport.getBBox()
this.viewBox.x=t.x,this.viewBox.y=t.y,this.viewBox.width=t.width,this.viewBox.height=t.height
},ce.prototype.getViewBox=function(){return re.extend({},this.viewBox)
},ce.prototype.processCTM=function(){var t,e=this.getCTM()
;(this.options.fit||this.options.contain)&&(t=this.options.fit?Math.min(this.options.width/this.viewBox.width,this.options.height/this.viewBox.height):Math.max(this.options.width/this.viewBox.width,this.options.height/this.viewBox.height),
e.a=t,e.d=t,e.e=-this.viewBox.x*t,e.f=-this.viewBox.y*t)
if(this.options.center){
var n=.5*(this.options.width-(this.viewBox.width+2*this.viewBox.x)*e.a),o=.5*(this.options.height-(this.viewBox.height+2*this.viewBox.y)*e.a)
e.e=n,e.f=o}
return this.originalState.zoom=e.a,this.originalState.x=e.e,this.originalState.y=e.f,
e},ce.prototype.getOriginalState=function(){
return re.extend({},this.originalState)},ce.prototype.getState=function(){
return re.extend({},this.activeState)},ce.prototype.getZoom=function(){
return this.activeState.zoom},ce.prototype.getRelativeZoom=function(){
return this.activeState.zoom/this.originalState.zoom
},ce.prototype.computeRelativeZoom=function(t){return t/this.originalState.zoom
},ce.prototype.getPan=function(){return{x:this.activeState.x,
y:this.activeState.y}},ce.prototype.getCTM=function(){
var t=this.options.svg.createSVGMatrix()
return t.a=this.activeState.zoom,t.b=0,t.c=0,t.d=this.activeState.zoom,t.e=this.activeState.x,
t.f=this.activeState.y,t},ce.prototype.setCTM=function(t){
var e=this.isZoomDifferent(t),n=this.isPanDifferent(t)
if(e||n){
if(e&&(!1===this.options.beforeZoom(this.getRelativeZoom(),this.computeRelativeZoom(t.a))?(t.a=t.d=this.activeState.zoom,
e=!1):(this.updateCache(t),this.options.onZoom(this.getRelativeZoom()))),n){
var o=this.options.beforePan(this.getPan(),{x:t.e,y:t.f}),i=!1,r=!1
!1===o?(t.e=this.getPan().x,t.f=this.getPan().y,i=r=!0):re.isObject(o)&&(!1===o.x?(t.e=this.getPan().x,
i=!0):re.isNumber(o.x)&&(t.e=o.x),
!1===o.y?(t.f=this.getPan().y,r=!0):re.isNumber(o.y)&&(t.f=o.y)),
i&&r||!this.isPanDifferent(t)?n=!1:(this.updateCache(t),
this.options.onPan(this.getPan()))}(e||n)&&this.updateCTMOnNextFrame()}
},ce.prototype.isZoomDifferent=function(t){return this.activeState.zoom!==t.a
},ce.prototype.isPanDifferent=function(t){
return this.activeState.x!==t.e||this.activeState.y!==t.f
},ce.prototype.updateCache=function(t){
this.activeState.zoom=t.a,this.activeState.x=t.e,this.activeState.y=t.f
},ce.prototype.pendingUpdate=!1,ce.prototype.updateCTMOnNextFrame=function(){
this.pendingUpdate||(this.pendingUpdate=!0,
this.requestAnimationFrame.call(window,this.updateCTMCached))
},ce.prototype.updateCTM=function(){var t=this.getCTM()
le.setCTM(this.viewport,t,this.defs),this.pendingUpdate=!1,this.options.onUpdatedCTM&&this.options.onUpdatedCTM(t)
}
var he=function(t,e){this.init(t,e)},fe={
viewportSelector:".svg-pan-zoom_viewport",panEnabled:!0,controlIconsEnabled:!1,
zoomEnabled:!0,dblClickZoomEnabled:!0,mouseWheelZoomEnabled:!0,
preventMouseEventsDefault:!0,zoomScaleSensitivity:.1,minZoom:.5,maxZoom:10,
fit:!0,contain:!1,center:!0,refreshRate:"auto",beforeZoom:null,onZoom:null,
beforePan:null,onPan:null,customEventsHandler:null,eventsListenerElement:null,
onUpdatedCTM:null},pe={passive:!0}
he.prototype.init=function(t,e){var n=this
this.svg=t,this.defs=t.querySelector("defs"),le.setupSvgAttributes(this.svg),this.options=re.extend(re.extend({},fe),e),
this.state="none"
var o=le.getBoundingClientRectNormalized(t)
this.width=o.width,this.height=o.height,this.viewport=function(t,e){
return new ce(t,e)
}(le.getOrCreateViewport(this.svg,this.options.viewportSelector),{svg:this.svg,
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
i.setOnUpdatedCTM(this.options.onUpdatedCTM),this.options.controlIconsEnabled&&ue.enable(this),
this.lastMouseWheelEventTime=Date.now(),this.setupHandlers()
},he.prototype.setupHandlers=function(){var t=this,e=null
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
for(var i in this.eventListeners)(this.options.eventsListenerElement||this.svg).addEventListener(i,this.eventListeners[i],!this.options.preventMouseEventsDefault&&pe)
this.options.mouseWheelZoomEnabled&&(this.options.mouseWheelZoomEnabled=!1,this.enableMouseWheelZoom())
},he.prototype.enableMouseWheelZoom=function(){
if(!this.options.mouseWheelZoomEnabled){var t=this
this.wheelListener=function(e){return t.handleMouseWheel(e)}
var e=!this.options.preventMouseEventsDefault
ie.on(this.options.eventsListenerElement||this.svg,this.wheelListener,e),this.options.mouseWheelZoomEnabled=!0
}},he.prototype.disableMouseWheelZoom=function(){
if(this.options.mouseWheelZoomEnabled){
var t=!this.options.preventMouseEventsDefault
ie.off(this.options.eventsListenerElement||this.svg,this.wheelListener,t),this.options.mouseWheelZoomEnabled=!1
}},he.prototype.handleMouseWheel=function(t){
if(this.options.zoomEnabled&&"none"===this.state){
this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1)
var e=t.deltaY||1,n=Date.now()-this.lastMouseWheelEventTime,o=3+Math.max(0,30-n)
this.lastMouseWheelEventTime=Date.now(),"deltaMode"in t&&0===t.deltaMode&&t.wheelDelta&&(e=0===t.deltaY?0:Math.abs(t.wheelDelta)/t.deltaY),
e=-.3<e&&e<.3?e:(e>0?1:-1)*Math.log(Math.abs(e)+10)/o
var i=this.svg.getScreenCTM().inverse(),r=le.getEventPoint(t,this.svg).matrixTransform(i),s=Math.pow(1+this.options.zoomScaleSensitivity,-1*e)
this.zoomAtPoint(s,r)}},he.prototype.zoomAtPoint=function(t,e,n){
var o=this.viewport.getOriginalState()
n?(t=Math.max(this.options.minZoom*o.zoom,Math.min(this.options.maxZoom*o.zoom,t)),
t/=this.getZoom()):this.getZoom()*t<this.options.minZoom*o.zoom?t=this.options.minZoom*o.zoom/this.getZoom():this.getZoom()*t>this.options.maxZoom*o.zoom&&(t=this.options.maxZoom*o.zoom/this.getZoom())
var i=this.viewport.getCTM(),r=e.matrixTransform(i.inverse()),s=this.svg.createSVGMatrix().translate(r.x,r.y).scale(t).translate(-r.x,-r.y),a=i.multiply(s)
a.a!==i.a&&this.viewport.setCTM(a)},he.prototype.zoom=function(t,e){
this.zoomAtPoint(t,le.getSvgCenterPoint(this.svg,this.width,this.height),e)
},he.prototype.publicZoom=function(t,e){
e&&(t=this.computeFromRelativeZoom(t)),this.zoom(t,e)
},he.prototype.publicZoomAtPoint=function(t,e,n){
if(n&&(t=this.computeFromRelativeZoom(t)),"SVGPoint"!==re.getType(e)){
if(!("x"in e)||!("y"in e))throw new Error("Given point is invalid")
e=le.createSVGPoint(this.svg,e.x,e.y)}this.zoomAtPoint(t,e,n)
},he.prototype.getZoom=function(){return this.viewport.getZoom()
},he.prototype.getRelativeZoom=function(){return this.viewport.getRelativeZoom()
},he.prototype.computeFromRelativeZoom=function(t){
return t*this.viewport.getOriginalState().zoom
},he.prototype.resetZoom=function(){var t=this.viewport.getOriginalState()
this.zoom(t.zoom,!0)},he.prototype.resetPan=function(){
this.pan(this.viewport.getOriginalState())},he.prototype.reset=function(){
this.resetZoom(),this.resetPan()},he.prototype.handleDblClick=function(t){var e
if((this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),
this.options.controlIconsEnabled)&&(t.target.getAttribute("class")||"").indexOf("svg-pan-zoom-control")>-1)return!1
e=t.shiftKey?1/(2*(1+this.options.zoomScaleSensitivity)):2*(1+this.options.zoomScaleSensitivity)
var n=le.getEventPoint(t,this.svg).matrixTransform(this.svg.getScreenCTM().inverse())
this.zoomAtPoint(e,n)},he.prototype.handleMouseDown=function(t,e){
this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),
re.mouseAndTouchNormalize(t,this.svg),
this.options.dblClickZoomEnabled&&re.isDblClick(t,e)?this.handleDblClick(t):(this.state="pan",
this.firstEventCTM=this.viewport.getCTM(),
this.stateOrigin=le.getEventPoint(t,this.svg).matrixTransform(this.firstEventCTM.inverse()))
},he.prototype.handleMouseMove=function(t){
if(this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),
"pan"===this.state&&this.options.panEnabled){
var e=le.getEventPoint(t,this.svg).matrixTransform(this.firstEventCTM.inverse()),n=this.firstEventCTM.translate(e.x-this.stateOrigin.x,e.y-this.stateOrigin.y)
this.viewport.setCTM(n)}},he.prototype.handleMouseUp=function(t){
this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),
"pan"===this.state&&(this.state="none")},he.prototype.fit=function(){
var t=this.viewport.getViewBox(),e=Math.min(this.width/t.width,this.height/t.height)
this.zoom(e,!0)},he.prototype.contain=function(){
var t=this.viewport.getViewBox(),e=Math.max(this.width/t.width,this.height/t.height)
this.zoom(e,!0)},he.prototype.center=function(){
var t=this.viewport.getViewBox(),e=.5*(this.width-(t.width+2*t.x)*this.getZoom()),n=.5*(this.height-(t.height+2*t.y)*this.getZoom())
this.getPublicInstance().pan({x:e,y:n})},he.prototype.updateBBox=function(){
this.viewport.simpleViewBoxCache()},he.prototype.pan=function(t){
var e=this.viewport.getCTM()
e.e=t.x,e.f=t.y,this.viewport.setCTM(e)},he.prototype.panBy=function(t){
var e=this.viewport.getCTM()
e.e+=t.x,e.f+=t.y,this.viewport.setCTM(e)},he.prototype.getPan=function(){
var t=this.viewport.getState()
return{x:t.x,y:t.y}},he.prototype.resize=function(){
var t=le.getBoundingClientRectNormalized(this.svg)
this.width=t.width,this.height=t.height
var e=this.viewport
e.options.width=this.width,e.options.height=this.height,e.processCTM(),this.options.controlIconsEnabled&&(this.getPublicInstance().disableControlIcons(),
this.getPublicInstance().enableControlIcons())},he.prototype.destroy=function(){
var t=this
for(var e in this.beforeZoom=null,this.onZoom=null,this.beforePan=null,this.onPan=null,
this.onUpdatedCTM=null,
null!=this.options.customEventsHandler&&this.options.customEventsHandler.destroy({
svgElement:this.svg,eventsListenerElement:this.options.eventsListenerElement,
instance:this.getPublicInstance()
}),this.eventListeners)(this.options.eventsListenerElement||this.svg).removeEventListener(e,this.eventListeners[e],!this.options.preventMouseEventsDefault&&pe)
this.disableMouseWheelZoom(),this.getPublicInstance().disableControlIcons(),this.reset(),
we=we.filter((function(e){return e.svg!==t.svg
})),delete this.options,delete this.viewport,
delete this.publicInstance,delete this.pi,this.getPublicInstance=function(){
return null}},he.prototype.getPublicInstance=function(){var t=this
return this.publicInstance||(this.publicInstance=this.pi={enablePan:function(){
return t.options.panEnabled=!0,t.pi},disablePan:function(){
return t.options.panEnabled=!1,t.pi},isPanEnabled:function(){
return!!t.options.panEnabled},pan:function(e){return t.pan(e),t.pi},
panBy:function(e){return t.panBy(e),t.pi},getPan:function(){return t.getPan()},
setBeforePan:function(e){
return t.options.beforePan=null===e?null:re.proxy(e,t.publicInstance),t.pi},
setOnPan:function(e){
return t.options.onPan=null===e?null:re.proxy(e,t.publicInstance),t.pi},
enableZoom:function(){return t.options.zoomEnabled=!0,t.pi},
disableZoom:function(){return t.options.zoomEnabled=!1,t.pi},
isZoomEnabled:function(){return!!t.options.zoomEnabled},
enableControlIcons:function(){
return t.options.controlIconsEnabled||(t.options.controlIconsEnabled=!0,
ue.enable(t)),t.pi},disableControlIcons:function(){
return t.options.controlIconsEnabled&&(t.options.controlIconsEnabled=!1,
ue.disable(t)),t.pi},isControlIconsEnabled:function(){
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
return t.options.beforeZoom=null===e?null:re.proxy(e,t.publicInstance),t.pi},
setOnZoom:function(e){
return t.options.onZoom=null===e?null:re.proxy(e,t.publicInstance),t.pi},
zoom:function(e){return t.publicZoom(e,!0),t.pi},zoomBy:function(e){
return t.publicZoom(e,!1),t.pi},zoomAtPoint:function(e,n){
return t.publicZoomAtPoint(e,n,!0),t.pi},zoomAtPointBy:function(e,n){
return t.publicZoomAtPoint(e,n,!1),t.pi},zoomIn:function(){
return this.zoomBy(1+t.options.zoomScaleSensitivity),t.pi},zoomOut:function(){
return this.zoomBy(1/(1+t.options.zoomScaleSensitivity)),t.pi},
getZoom:function(){return t.getRelativeZoom()},setOnUpdatedCTM:function(e){
return t.options.onUpdatedCTM=null===e?null:re.proxy(e,t.publicInstance),t.pi},
resetZoom:function(){return t.resetZoom(),t.pi},resetPan:function(){
return t.resetPan(),t.pi},reset:function(){return t.reset(),t.pi},
fit:function(){return t.fit(),t.pi},contain:function(){return t.contain(),t.pi},
center:function(){return t.center(),t.pi},updateBBox:function(){
return t.updateBBox(),t.pi},resize:function(){return t.resize(),t.pi},
getSizes:function(){return{width:t.width,height:t.height,realZoom:t.getZoom(),
viewBox:t.viewport.getViewBox()}},destroy:function(){return t.destroy(),t.pi}}),
this.publicInstance}
var de,ve,me,ge,ye,we=[]
de=function(t,e){var n=re.getSvg(t)
if(null===n)return null
for(var o=we.length-1;o>=0;o--)if(we[o].svg===n)return we[o].instance.getPublicInstance()
return we.push({svg:n,instance:new he(n,e)
}),we[we.length-1].instance.getPublicInstance()},ve=P,ge=Vt
var be,xe,Se;(me=O).onrender=function(){
ve.mount(document.body,ye),history.pushState({},"View SVG"),window.onpopstate=Ee
}
function Ee(){var t
t=oe,window.onpopstate=void 0,ve.mount(document.body,t)}ye={
oncreate:function(t){de(t.dom,{controlIconsEnabled:!me.hideIcons})},
view:function(){return ve.trust(ge())}},be=P,xe=I,Se=oe,setTimeout((function(){
be.mount(document.head,xe),be.mount(document.body,Se)}))}()
//# sourceMappingURL=j2gtsp.js.map
