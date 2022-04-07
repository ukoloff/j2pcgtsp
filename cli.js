"use strict"
function t(t){return t&&"object"==typeof t&&"default"in t?t.default:t}
var e=t(require("fs")),n=t(require("path")),r=t(require("process"))
function o(t){return t&&t.default||t}var a,s,i=o(Object.freeze({__proto__:null,
homepage:"https://github.com/ukoloff/j2pcgtsp"}))
a=r,s=i
var u=function(t){var e,n,r,o,i
for(r in e={},n={},t)o=t[r],i={help:o},/^=/.test(o)&&(i={
help:o.replace(/.\s*/,""),val:!0}),e[r.charAt(0)]=n[r]=i
function u(t){return n[t].val?t+"[=?]":t}function l(t){var r,o,s,i,u,l
function c(){var e
return r[l]=null==(e=t.shift())||e}function f(){return r[l]||(r[l]=0),r[l]++}
for(null==t&&(t=a.argv.slice(2)),r=[];t.length;){if("--"===(o=t.shift())){
r.push.apply(r,t)
break}if(/^--\w/.test(o)){
if(o=o.substring(2),(s=/=/.test(o))&&(o=RegExp.leftContext,
i=RegExp.rightContext),!(u=n[o]))throw Error("Unknown option: --"+o)
l=o.charAt(0),s?r[l]=i:u.val?c():f()
}else if(/^-\w/.test(o))for(o=o.substring(1);o.length;){
if(!(u=e[l=o.charAt(0).toLowerCase()]))throw Error("Unknown option: -"+l)
if(o=o.substring(1),u.val){o?r[l]=o:c()
break}f()}else r.push(o)}return r}return l.help=function(){var t,e,r,o
for(e in console.log("Options:"),t=0,n)t=Math.max(t,u(e).length)
for(e in r=n){for(o=r[e],e=u(e);e.length<t;)e+=" "
console.log("  -"+e.charAt(0)+"  --"+e+" "+o.help)}
console.log("\nSee",s.homepage)},l}
var l,c=function(t){if(!t)throw Error("Assertion failed!")}
l=c
var f=h
function h(t){var e
return e=JSON.parse(t),l(e.length),e}h.success=function(t){var e,n
return e=t.map((function(t){return t.partid})),n=e.length,e=function(t){var e
return e={},t.filter((function(t){return!e[t]&&(e[t]=!0)}))
}(e),n+" parts: "+e.slice(0,3).join(", ")+(e.length>3?"...":".")}
var p=function(t){var e,n,r,o,a
for(e=[],n=[],r=0,a=(o=t.Contours).length;r<a;++r)s(o[r])
function s(t,r){var o,a,i,u,l,c
for(n.push(o={id:t.Index,up:r?r.up.concat(r):[],points:[],groups:[]
}),r&&r.groups.push(o),a=0,u=(i=t.Points||[]).length;a<u;++a)l=i[a],e.push(c={
id:l.GlobalIndex,x:l.X,y:l.Y,group:o}),o.points.push(c)
for(a=0,u=(i=t.NestedContours||[]).length;a<u;++a)s(t=i[a],o)}return{start:{
x:t.TaskData.StartX||t.TaskData.FinishX||0,
y:t.TaskData.StartY||t.TaskData.FinishY||0},points:e,groups:n}}
var d=function(t){var e,n,r,o,a,s,i=[]
for(t.iPoints=e={},n=0,o=(r=t.points).length;n<o;++n)a=r[n],e[a.id]=a
for(t.iGroups=e={},n=0,o=(r=t.groups).length;n<o;++n)s=r[n],i.push(e[s.id]=s)
return i}
var g,v,y,m,x=[].slice,b=Array.from||function(t){return x.call(t)}
g=c,v=p,y=d,m=function(t){return t.bounds={min:{
x:Math.min.apply(Math,[t.start.x].concat(b(t.points.map((function(t){return t.x
}))))),y:Math.min.apply(Math,[t.start.y].concat(b(t.points.map((function(t){
return t.y})))))},max:{
x:Math.max.apply(Math,[t.start.x].concat(b(t.points.map((function(t){return t.x
}))))),y:Math.max.apply(Math,[t.start.y].concat(b(t.points.map((function(t){
return t.y})))))}}}
var k=w
function w(t){var e,n
return function(t){g(t.TaskData),g(t.Contours)
}(e=JSON.parse(t)),n=v(e),y(n),m(n),n}w.success=function(t){
return t.points.length+"/"+t.groups.length+" points/groups"}
var S=M
function M(t){var e
if(e=/\bTour(?:\s+Ordering)?\s*:\s*\[([\s\d,]*)\]/.exec(t))return e[1].split(/\D+/).filter((function(t){
return t})).map(Number)
throw Error("GTSP route not found")}M.success=function(t){
return t.length+" route point(s)"}
var j,T,E,P=(function(t,e){var n,r,o,a,s,i
for(a in n=f,r=k,o=S,e.dbs=n,e.discrete=r,e.route=o,s=e)i=s[a],e[a]={parser:i}
}(j={exports:{}},j.exports),j.exports),C=(P.dbs,P.discrete,P.route,{
routeLength:0,badFiles:[]})
T=P,E=C
var D=function(t,e){var n,r,o,a,s
for(n in r=T){o=r[n]
try{return a=o.parser(t),s=o.parser.success(a),o.data=a,o.info=s,o.name=e,n
}catch(t){}}return E.badFiles.push(e),!1}
var A,_={startPointMode:0,hideIcons:!1,onrender:0}
A=_
var O,L,z,I,N=function(t,e){var n
return n=function(t){return function(){switch(A.startPointMode){case 1:return 1
case 2:return 0
default:return 1===(null!=t?t[0]:void 0)?1:0}}()}(t),t.map((function(t){
return e.iPoints[t-n]||e.start}))}
function q(t){return t*t}function B(t,e){return Math.sqrt(q(t.x-e.x)+q(t.y-e.y))
}O=N,L=P,z=C,I=function(t,e){var n,r,o,a,s,i
n=O.apply(this,arguments),r=0,n.length&&(o=n[n.length-1])
for(a=0,s=n.length;a<s;++a)i=n[a],r+=B(o,i),o=i
return r}
var F,G=function(){
L.discrete.data&&L.route.data&&(z.routeLength=I(L.route.data,L.discrete.data))}
F=function(t){var e,n,r,o,a
for(e="",n=0,r=t.length;n<r;++n)o=n,a=t[n],e+="\n\t"+(o?"L":"M")+" "+a.x+" "+a.y
return e+" Z"}
var R,Y=function(t,e){var n,r,o
null==e&&(e={}),"string"!=typeof t&&(t=F(t))
for(r in n="",e)o=e[r],"title"!==r&&(n+=" "+r+'="'+o+'"')
return"<path"+n+' d="'+t+'">\n'+(e.title?"<title>"+e.title+"</title>":"")+"</path>"
}
R=Y
var X,Z=function(t){return t.map(U).join("")}
function U(t){return R(t.paths.map(J).join(""),{class:"DBS",
title:"Part: "+t.partid+"\nContours: "+t.paths.length})}function J(t){
var e,n,r,o,a,s,i,u
for(e="",n=[],r=0,o=t.length;r<o;++r)a=t[r],e+="\n",n.length?n[2]?e+="A "+(s=Math.abs(1/n[2]+n[2])/4*(i=a,
u=n,
Math.sqrt(V(i[0]-u[0])+V(i[1]-u[1]))))+" "+s+" 0 "+Number(1<Math.abs(n[2]))+" "+Number(n[2]>0):e+="L":e+="M",
e+=" "+a[0]+" "+a[1],n=a
return t.length>0&&t[0][0]===t[t.length-1][0]&&t[0][1]===t[t.length-1][1]&&(e+=" Z"),
e}function V(t){return t*t}X=Y
var W=function(t){return t.groups.map((function(t){return X(function(t){
return"M "+t.map((function(t){return t.x+" "+t.y})).join("\nL ")+" Z"
}(t.points),{class:"cluster",title:"Cluster #"+t.id+"\nPoints: "+t.points.length
})})).join("")}
var H,K,Q=function(t){var e,n,r,o,a,s,i,u,l,c,f,h
for(e="",n=0,o=(r=t.groups).length;n<o;++n)for(a=r[n],s=0,u=(i=a.points).length;s<u;++s)l=i[s],
e+='\n<circle class="pierce" cx="'+l.x+'" cy="'+l.y+'"><title>Point #'+(l.id||"-")+"\nGroup #"+((null!=(c=l.group)?c.id:void 0)||"-")+" ("+((null!=(f=l.group)&&null!=(h=f.points)?h.length:void 0)||0)+" points)\nX: "+l.x+"\nY: "+l.y+"\n</title></circle>"
return e}
H=N,K=Y
var $,tt,et=function(t,e){var n
return n=H.apply(this,arguments),K(n,{class:"route"})}
$={open:function(t){var e
return.01,e={x:t.max.x-t.min.x,y:t.max.y-t.min.y
},'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  height="100%" width="100%"\n  viewBox="'+[t.min.x-.01*e.x,-t.max.y-.01*e.y,1.02*e.x,1.02*e.y].join(" ")+'"><g><g transform = "scale(1, -1)">'
},close:function(){return"\n</g></g></svg>"}},tt=P
var nt=function(){var t,e
t=tt.discrete.data.bounds,e=$.open(t),e+=tt.dbs.data?Z(tt.dbs.data):W(tt.discrete.data),
e+=Q(tt.discrete.data),tt.route.data&&(e+=et(tt.route.data,tt.discrete.data))
return e+=$.close()}
var rt=[],ot=[]
var at="svg{box-sizing:border-box;height:100;left:0;padding:0;position:absolute;top:0;width:100%}path{stroke-width:1px;vector-effect:non-scaling-stroke;fill-rule:nonzero}path.DBS{fill:#cdff00;stroke:#000}path.DBS:first-of-type{fill:none}path.DBS:hover{stroke-dasharray:1%;animation:dash 1s linear infinite}path.part{fill:#fff;fill-opacity:0;stroke:#000}path.part:hover{fill:#ff0;fill-opacity:50%;stroke-dasharray:1%;animation:dash 1s linear infinite}path.cluster{stroke:#000;fill:#ff0;fill-opacity:15%}path.cluster:hover{fill:#ff0;fill-opacity:50%;stroke-dasharray:1%;animation:dash 1s linear infinite}path.route{stroke:red;fill:none}circle.pierce{r:.2%;fill:#0f0;stroke:navy;stroke-width:1px;vector-effect:non-scaling-stroke}circle.pierce:hover{fill:#ff0;stroke:red}circle.route:hover{fill-opacity:75%;stroke:#0f0}@-moz-keyframes dash{0%{stroke-dashoffset:0%}to{stroke-dashoffset:-2%}}@-webkit-keyframes dash{0%{stroke-dashoffset:0%}to{stroke-dashoffset:-2%}}@-o-keyframes dash{0%{stroke-dashoffset:0%}to{stroke-dashoffset:-2%}}@keyframes dash{0%{stroke-dashoffset:0%}to{stroke-dashoffset:-2%}}"
!function(t,e){if(t&&"undefined"!=typeof document){
var n,r=!0===e.prepend?"prepend":"append",o=!0===e.singleTag,a="string"==typeof e.container?document.querySelector(e.container):document.getElementsByTagName("head")[0]
if(o){var s=rt.indexOf(a)
;-1===s&&(s=rt.push(a)-1,ot[s]={}),n=ot[s]&&ot[s][r]?ot[s][r]:ot[s][r]=i()
}else n=i()
65279===t.charCodeAt(0)&&(t=t.substring(1)),n.styleSheet?n.styleSheet.cssText+=t:n.appendChild(document.createTextNode(t))
}function i(){var t=document.createElement("style")
if(t.setAttribute("type","text/css"),e.attributes)for(var n=Object.keys(e.attributes),o=0;o<n.length;o++)t.setAttribute(n[o],e.attributes[n[o]])
var s="prepend"===r?"afterbegin":"beforeend"
return a.insertAdjacentElement(s,t),t}}(at,{})
var st=Object.freeze({__proto__:null,css:at,default:at})
var it,ut,lt=o(Object.freeze({__proto__:null,
path:"https://cdn.jsdelivr.net/npm/svg-pan-zoom@3.6.1/dist/svg-pan-zoom.min.js"
}))
it=_,ut=lt
var ct=function(){
return'<script src="'+ut.path+"\"><\/script>\n<script>\n  setTimeout(function() {\n    svgPanZoom('svg', {controlIconsEnabled: "+!it.hideIcons+"})\n  })\n<\/script>"
}
var ft,ht,pt,dt,gt,vt,yt,mt,xt,bt,kt,wt,St,Mt,jt,Tt,Et=o(st)
ft=nt,ht=C,pt=Et,dt=ct,gt=e,vt=n,yt=u,mt={help:"Show this help",
output:"=Save result to file/folder",force:"Overwrite existing file",
start:"=Starting cluster (auto/first/last)",
clean:"Do not add buttons (+/reset/-)"},xt=D,bt=P,kt=C,wt=_,St=G,Mt=function(){
return"<!DOCTYPE html>\n<html><head>\n<title>PCGTSP Visualization</title>\n<style>\n"+pt+"\n</style>\n"+dt()+"\n</head><body>\n"+ft()+"\n"+((t=ht.routeLength)?"\x3c!--\nRoute Length     : "+t+"\n--\x3e":"")+"\n</body></html>"
var t},jt=function(){var t,e,n,r,o,a,s,i,u,l
if(t=yt(mt),(e=t()).h||!e.length)return void t.help()
wt.hideIcons=e.c,e.s&&(wt.startPointMode=function(){
switch(e.s.charAt(0).toLowerCase()){case"a":return 0
case"f":return 1
case"l":return 2
default:throw Error("Invalid value: --start="+e.s)}}())
for(console.log("Reading files..."),n=0,r=e.length;n<r;++n)o=n,a=e[n],console.log(o+1+".\t"+a),
s=gt.readFileSync(a,{encoding:"utf-8"
}),(i=xt(s,a))?console.log("\t"+i+":\t"+bt[i].info):console.log("\t^ Unknown format")
bt.discrete.data||(console.error("Insufficient data"),process.exit(1))
St(),(u=kt.routeLength)&&console.log("Route length:",u)
l=bt.discrete.name+".html",e.o&&function(){try{
return gt.statSync(e.o).isDirectory()}catch(t){}
}()&&(l=vt.join(e.o,vt.basename(l)))
if(console.log("Writing to:\n\t"+l),!e.f&&gt.existsSync(l))throw Error("Skipping existing file: "+l)
gt.writeFileSync(l,Mt(),{encoding:"utf-8"}),console.log("That's all folks!")}
try{jt()}catch(t){Tt=t,console.log("Error:",Tt.message)}
//# sourceMappingURL=cli.js.map
