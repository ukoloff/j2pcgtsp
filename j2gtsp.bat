0</*! :: See https://github.com/ukoloff/j2pcgtsp
@echo off
node "%~f0" %*
goto :EOF */0;
"use strict"
var t=require("fs"),e=require("path"),n=require("process")
function r(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}
var o=r(t),a=r(e),s=r(n)
function i(t){return t&&t.default||t}var u,l,c=i(Object.freeze({__proto__:null,
homepage:"https://github.com/ukoloff/j2pcgtsp"}))
u=s.default,l=c
var f=function(t){var e,n,r,o,a
for(r in e={},n={},t)o=t[r],a={help:o},/^=/.test(o)&&(a={
help:o.replace(/.\s*/,""),val:!0}),e[r.charAt(0)]=n[r]=a
function s(t){return n[t].val?t+"[=?]":t}function i(t){var r,o,a,s,i,l
function c(){var e
return r[l]=null==(e=t.shift())||e}function f(){return r[l]||(r[l]=0),r[l]++}
for(null==t&&(t=u.argv.slice(2)),r=[];t.length;){if("--"===(o=t.shift())){
r.push.apply(r,t)
break}if(/^--\w/.test(o)){
if(o=o.substring(2),(a=/=/.test(o))&&(o=RegExp.leftContext,
s=RegExp.rightContext),!(i=n[o]))throw Error("Unknown option: --"+o)
l=o.charAt(0),a?r[l]=s:i.val?c():f()
}else if(/^-\w/.test(o))for(o=o.substring(1);o.length;){
if(!(i=e[l=o.charAt(0).toLowerCase()]))throw Error("Unknown option: -"+l)
if(o=o.substring(1),i.val){o?r[l]=o:c()
break}f()}else r.push(o)}return r}return i.help=function(){var t,e,r,o
for(e in console.log("Options:"),t=0,n)t=Math.max(t,s(e).length)
for(e in r=n){for(o=r[e],e=s(e);e.length<t;)e+=" "
console.log("  -"+e.charAt(0)+"  --"+e+" "+o.help)}
console.log("\nSee",l.homepage)},i}
var h,p={help:"Show this help",output:"=Save result to file/folder",
force:"Overwrite existing file",start:"=Starting cluster (auto/first/last)",
clean:"Do not add buttons (+/reset/-)"},d=function(t){
if(!t)throw Error("Assertion failed!")}
h=d
var g=v
function v(t){var e
return e=JSON.parse(t),h(e.length),e}v.success=function(t){var e,n
return e=t.map((function(t){return t.partid})),n=e.length,e=function(t){var e
return e={},t.filter((function(t){return!e[t]&&(e[t]=!0)}))
}(e),n+" parts: "+e.slice(0,3).join(", ")+(e.length>3?"...":".")}
var y=function(t){var e,n,r,o,a
for(e=[],n=[],r=0,a=(o=t.Contours).length;r<a;++r)s(o[r])
function s(t,r){var o,a,i,u,l,c
for(n.push(o={id:t.Index,up:r?r.up.concat(r):[],points:[],groups:[]
}),r&&r.groups.push(o),a=0,u=(i=t.Points||[]).length;a<u;++a)l=i[a],e.push(c={
id:l.GlobalIndex,x:l.X,y:l.Y,group:o}),o.points.push(c)
for(a=0,u=(i=t.NestedContours||[]).length;a<u;++a)s(t=i[a],o)}return{start:{
x:t.TaskData.StartX||t.TaskData.FinishX||0,
y:t.TaskData.StartY||t.TaskData.FinishY||0},points:e,groups:n}}
var m=function(t){var e,n,r,o,a,s,i=[]
for(t.iPoints=e={},n=0,o=(r=t.points).length;n<o;++n)a=r[n],e[a.id]=a
for(t.iGroups=e={},n=0,o=(r=t.groups).length;n<o;++n)s=r[n],i.push(e[s.id]=s)
return i}
var x,b,k,w,S=[].slice,M=Array.from||function(t){return S.call(t)}
x=d,b=y,k=m,w=function(t){return t.bounds={min:{
x:Math.min.apply(Math,[t.start.x].concat(M(t.points.map((function(t){return t.x
}))))),y:Math.min.apply(Math,[t.start.y].concat(M(t.points.map((function(t){
return t.y})))))},max:{
x:Math.max.apply(Math,[t.start.x].concat(M(t.points.map((function(t){return t.x
}))))),y:Math.max.apply(Math,[t.start.y].concat(M(t.points.map((function(t){
return t.y})))))}}}
var j=T
function T(t){var e,n
return function(t){x(t.TaskData),x(t.Contours)
}(e=JSON.parse(t)),n=b(e),k(n),w(n),n}T.success=function(t){
return t.points.length+"/"+t.groups.length+" points/groups"}
var E=P
function P(t){var e
if(e=/\bTour(?:\s+Ordering)?\s*:\s*\[([\s\d,]*)\]/.exec(t))return e[1].split(/\D+/).filter((function(t){
return t})).map(Number)
throw Error("GTSP route not found")}P.success=function(t){
return t.length+" route point(s)"}
var C,D=(function(t,e){var n,r,o,a,s,i
for(a in n=g,r=j,o=E,e.dbs=n,e.discrete=r,e.route=o,s=e)i=s[a],e[a]={parser:i}
}(C={exports:{}},C.exports),C.exports)
D.dbs,D.discrete,D.route
var A,_,O={routeLength:0,badFiles:[]}
A=D,_=O
var L=function(t,e){var n,r,o,a,s
for(n in r=A){o=r[n]
try{return a=o.parser(t),s=o.parser.success(a),o.data=a,o.info=s,o.name=e,n
}catch(t){}}return _.badFiles.push(e),!1}
var z,I={startPointMode:0,hideIcons:!1,onrender:0}
z=I
var N,q,B,F,G=function(t,e){var n
return n=function(t){return function(){switch(z.startPointMode){case 1:return 1
case 2:return 0
default:return 1===(null!=t?t[0]:void 0)?1:0}}()}(t),t.map((function(t){
return e.iPoints[t-n]||e.start}))}
function R(t){return t*t}function Y(t,e){return Math.sqrt(R(t.x-e.x)+R(t.y-e.y))
}N=G,q=D,B=O,F=function(t,e){var n,r,o,a,s,i
n=N.apply(this,arguments),r=0,n.length&&(o=n[n.length-1])
for(a=0,s=n.length;a<s;++a)i=n[a],r+=Y(o,i),o=i
return r}
var X,Z=function(){
q.discrete.data&&q.route.data&&(B.routeLength=F(q.route.data,q.discrete.data))}
X=function(t){var e,n,r,o,a
for(e="",n=0,r=t.length;n<r;++n)o=n,a=t[n],e+="\n\t"+(o?"L":"M")+" "+a.x+" "+a.y
return e+" Z"}
var U,J=function(t,e){var n,r,o
null==e&&(e={}),"string"!=typeof t&&(t=X(t))
for(r in n="",e)o=e[r],"title"!==r&&(n+=" "+r+'="'+o+'"')
return"<path"+n+' d="'+t+'">\n'+(e.title?"<title>"+e.title+"</title>":"")+"</path>"
}
U=J
var V,W=function(t){return t.map(H).join("")}
function H(t){return U(t.paths.map(K).join(""),{class:"DBS",
title:"Part: "+t.partid+"\nContours: "+t.paths.length})}function K(t){
var e,n,r,o,a,s,i,u
for(e="",n=[],r=0,o=t.length;r<o;++r)a=t[r],e+="\n",n.length?n[2]?e+="A "+(s=Math.abs(1/n[2]+n[2])/4*(i=a,
u=n,
Math.sqrt(Q(i[0]-u[0])+Q(i[1]-u[1]))))+" "+s+" 0 "+Number(1<Math.abs(n[2]))+" "+Number(n[2]>0):e+="L":e+="M",
e+=" "+a[0]+" "+a[1],n=a
return t.length>0&&t[0][0]===t[t.length-1][0]&&t[0][1]===t[t.length-1][1]&&(e+=" Z"),
e}function Q(t){return t*t}V=J
var $=function(t){return t.groups.map((function(t){return V(function(t){
return"M "+t.map((function(t){return t.x+" "+t.y})).join("\nL ")+" Z"
}(t.points),{class:"cluster",title:"Cluster #"+t.id+"\nPoints: "+t.points.length
})})).join("")}
var tt,et,nt=function(t){var e,n,r,o,a,s,i,u,l,c,f,h
for(e="",n=0,o=(r=t.groups).length;n<o;++n)for(a=r[n],s=0,u=(i=a.points).length;s<u;++s)l=i[s],
e+='\n<circle class="pierce" cx="'+l.x+'" cy="'+l.y+'"><title>Point #'+(l.id||"-")+"\nGroup #"+((null!=(c=l.group)?c.id:void 0)||"-")+" ("+((null!=(f=l.group)&&null!=(h=f.points)?h.length:void 0)||0)+" points)\nX: "+l.x+"\nY: "+l.y+"\n</title></circle>"
return e}
tt=G,et=J
var rt,ot,at=function(t,e){var n
return n=tt.apply(this,arguments),et(n,{class:"route"})}
rt={open:function(t){var e
return.01,e={x:t.max.x-t.min.x,y:t.max.y-t.min.y
},'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  height="100%" width="100%"\n  viewBox="'+[t.min.x-.01*e.x,-t.max.y-.01*e.y,1.02*e.x,1.02*e.y].join(" ")+'"><g><g transform = "scale(1, -1)">'
},close:function(){return"\n</g></g></svg>"}},ot=D
var st=function(){var t,e
t=ot.discrete.data.bounds,e=rt.open(t),e+=ot.dbs.data?W(ot.dbs.data):$(ot.discrete.data),
e+=nt(ot.discrete.data),ot.route.data&&(e+=at(ot.route.data,ot.discrete.data))
return e+=rt.close()}
var it=[],ut=[]
var lt="svg{box-sizing:border-box;height:100;left:0;padding:0;position:absolute;top:0;width:100%}path{stroke-width:1px;vector-effect:non-scaling-stroke;fill-rule:evenodd}path.DBS{fill:#cdff00;stroke:#000}path.DBS:first-of-type{fill:none}path.DBS:hover{stroke-dasharray:1%;animation:dash 1s linear infinite}path.part{fill:#fff;fill-opacity:0;stroke:#000}path.part:hover{fill:#ff0;fill-opacity:50%;stroke-dasharray:1%;animation:dash 1s linear infinite}path.cluster{stroke:#000;fill:#ff0;fill-opacity:15%}path.cluster:hover{fill:#ff0;fill-opacity:50%;stroke-dasharray:1%;animation:dash 1s linear infinite}path.route{stroke:red;fill:none}circle.pierce{r:.2%;fill:#0f0;stroke:navy;stroke-width:1px;vector-effect:non-scaling-stroke}circle.pierce:hover{fill:#ff0;stroke:red}circle.route:hover{fill-opacity:75%;stroke:#0f0}@-moz-keyframes dash{0%{stroke-dashoffset:0%}to{stroke-dashoffset:-2%}}@-webkit-keyframes dash{0%{stroke-dashoffset:0%}to{stroke-dashoffset:-2%}}@-o-keyframes dash{0%{stroke-dashoffset:0%}to{stroke-dashoffset:-2%}}@keyframes dash{0%{stroke-dashoffset:0%}to{stroke-dashoffset:-2%}}"
!function(t,e){if(t&&"undefined"!=typeof document){
var n,r=!0===e.prepend?"prepend":"append",o=!0===e.singleTag,a="string"==typeof e.container?document.querySelector(e.container):document.getElementsByTagName("head")[0]
if(o){var s=it.indexOf(a)
;-1===s&&(s=it.push(a)-1,ut[s]={}),n=ut[s]&&ut[s][r]?ut[s][r]:ut[s][r]=i()
}else n=i()
65279===t.charCodeAt(0)&&(t=t.substring(1)),n.styleSheet?n.styleSheet.cssText+=t:n.appendChild(document.createTextNode(t))
}function i(){var t=document.createElement("style")
if(t.setAttribute("type","text/css"),e.attributes)for(var n=Object.keys(e.attributes),o=0;o<n.length;o++)t.setAttribute(n[o],e.attributes[n[o]])
var s="prepend"===r?"afterbegin":"beforeend"
return a.insertAdjacentElement(s,t),t}}(lt,{})
var ct=Object.freeze({__proto__:null,css:lt,default:lt})
var ft,ht,pt=i(Object.freeze({__proto__:null,
path:"https://cdn.jsdelivr.net/npm/svg-pan-zoom@3.6.1/dist/svg-pan-zoom.min.js"
}))
ft=I,ht=pt
var dt=function(){
return'<script src="'+ht.path+"\"><\/script>\n<script>\n  setTimeout(function() {\n    svgPanZoom('svg', {controlIconsEnabled: "+!ft.hideIcons+"})\n  })\n<\/script>"
}
var gt,vt,yt,mt,xt=i(ct)
gt=st,vt=O,yt=xt,mt=dt
var bt,kt,wt,St,Mt,jt,Tt,Et,Pt,Ct,Dt,At,_t=function(){
return"<!DOCTYPE html>\n<html><head>\n<title>PCGTSP Visualization</title>\n<style>\n"+yt+"\n</style>\n"+mt()+"\n</head><body>\n"+gt()+"\n"+((t=vt.routeLength)?"\x3c!--\nRoute Length     : "+t+"\n--\x3e":"")+"\n</body></html>"
var t}
bt=o.default,kt=a.default,wt=f,St=p,Mt=L,jt=D,Tt=O,Et=I,Pt=Z,Ct=_t,Dt=function(){
var t,e,n,r,o,a,s,i,u,l
if(t=wt(St),(e=t()).h||!e.length)return void t.help()
Et.hideIcons=e.c,e.s&&(Et.startPointMode=function(){
switch(e.s.charAt(0).toLowerCase()){case"a":return 0
case"f":return 1
case"l":return 2
default:throw Error("Invalid value: --start="+e.s)}}())
for(console.log("Reading files..."),n=0,r=e.length;n<r;++n)o=n,a=e[n],console.log(o+1+".\t"+a),
s=bt.readFileSync(a,{encoding:"utf-8"
}),(i=Mt(s,a))?console.log("\t"+i+":\t"+jt[i].info):console.log("\t^ Unknown format")
jt.discrete.data||(console.error("Insufficient data"),process.exit(1))
Pt(),(u=Tt.routeLength)&&console.log("Route length:",u)
l=jt.discrete.name+".html",e.o&&(l=function(){try{
return bt.statSync(e.o).isDirectory()}catch(t){}
}()?kt.join(e.o,kt.basename(l)):e.o)
if(console.log("Writing to:\n\t"+l),!e.f&&bt.existsSync(l))throw Error("Skipping existing file: "+l)
bt.writeFileSync(l,Ct(),{encoding:"utf-8"}),console.log("That's all folks!")}
try{Dt()}catch(t){At=t,console.log("Error:",At.message)}
