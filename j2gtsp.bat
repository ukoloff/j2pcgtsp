0</*! :: See https://github.com/ukoloff/j2pcgtsp
@echo off
node "%~f0" %*
goto :EOF */0;
"use strict"
function t(t){return t&&"object"==typeof t&&"default"in t?t.default:t}
var n=t(require("fs")),r=t(require("path")),e=t(require("process"))
function o(t){return t&&t.default||t}var i,a,s=o(Object.freeze({__proto__:null,
homepage:"https://github.com/ukoloff/j2pcgtsp"}))
i=e,a=s
var u=function(t){var n,r,e,o,s
for(e in n={},r={},t)o=t[e],s={help:o},/^=/.test(o)&&(s={
help:o.replace(/.\s*/,""),val:!0}),n[e.charAt(0)]=r[e]=s
function u(t){return r[t].val?t+"[=?]":t}function l(t){var e,o,a,s,u,l
function c(){var n
return e[l]=null==(n=t.shift())||n}function f(){return e[l]||(e[l]=0),e[l]++}
for(null==t&&(t=i.argv.slice(2)),e=[];t.length;){if("--"===(o=t.shift())){
e.push.apply(e,t)
break}if(/^--\w/.test(o)){
if(o=o.substring(2),(a=/=/.test(o))&&(o=RegExp.leftContext,
s=RegExp.rightContext),!(u=r[o]))throw Error("Unknown option: --"+o)
l=o.charAt(0),a?e[l]=s:u.val?c():f()
}else if(/^-\w/.test(o))for(o=o.substring(1);o.length;){
if(!(u=n[l=o.charAt(0).toLowerCase()]))throw Error("Unknown option: -"+l)
if(o=o.substring(1),u.val){o?e[l]=o:c()
break}f()}else e.push(o)}return e}return l.help=function(){var t,n,e,o
for(n in console.log("Options:"),t=0,r)t=Math.max(t,u(n).length)
for(n in e=r){for(o=e[n],n=u(n);n.length<t;)n+=" "
console.log("  -"+n.charAt(0)+"  --"+n+" "+o.help)}
console.log("\nSee",a.homepage)},l}
var l,c=function(t){if(!t)throw Error("Assertion failed!")}
l=c
var f=h
function h(t){var n
return n=JSON.parse(t),l(n.length),n}h.success=function(t){var n,r
return n=t.map((function(t){return t.partid})),r=n.length,n=function(t){var n
return n={},t.filter((function(t){return!n[t]&&(n[t]=!0)}))
}(n),r+" parts: "+n.slice(0,3).join(", ")+(n.length>3?"...":".")}
var p=function(t){var n,r,e,o,i
for(n=[],r=[],e=0,i=(o=t.Contours).length;e<i;++e)a(o[e])
function a(t,e){var o,i,s,u,l,c
for(r.push(o={id:t.Index,up:e?e.up.concat(e):[],points:[],groups:[]
}),e&&e.groups.push(o),i=0,u=(s=t.Points||[]).length;i<u;++i)l=s[i],n.push(c={
id:l.GlobalIndex,x:l.X,y:l.Y,group:o}),o.points.push(c)
for(i=0,u=(s=t.NestedContours||[]).length;i<u;++i)a(t=s[i],o)}return{start:{
x:t.TaskData.StartX||t.TaskData.FinishX||0,
y:t.TaskData.StartY||t.TaskData.FinishY||0},points:n,groups:r}}
var d=function(t){var n,r,e,o,i,a,s=[]
for(t.iPoints=n={},r=0,o=(e=t.points).length;r<o;++r)i=e[r],n[i.id]=i
for(t.iGroups=n={},r=0,o=(e=t.groups).length;r<o;++r)a=e[r],s.push(n[a.id]=a)
return s}
var g,v,y,m,x=[].slice,b=Array.from||function(t){return x.call(t)}
g=c,v=p,y=d,m=function(t){return t.bounds={min:{
x:Math.min.apply(Math,[t.start.x].concat(b(t.points.map((function(t){return t.x
}))))),y:Math.min.apply(Math,[t.start.y].concat(b(t.points.map((function(t){
return t.y})))))},max:{
x:Math.max.apply(Math,[t.start.x].concat(b(t.points.map((function(t){return t.x
}))))),y:Math.max.apply(Math,[t.start.y].concat(b(t.points.map((function(t){
return t.y})))))}}}
var w=k
function k(t){var n,r
return function(t){g(t.TaskData),g(t.Contours)
}(n=JSON.parse(t)),r=v(n),y(r),m(r),r}k.success=function(t){
return t.points.length+"/"+t.groups.length+" points/groups"}
var S=M
function M(t){var n
if(n=/\bTour(?:\s+Ordering)?\s*:\s*\[([\s\d,]*)\]/.exec(t))return n[1].split(/\D+/).filter((function(t){
return t})).map(Number)
throw Error("GTSP route not found")}M.success=function(t){
return t.length+" route point(s)"}
var D,P,j,E=(function(t,n){var r,e,o,i,a,s
for(i in r=f,e=w,o=S,n.dbs=r,n.discrete=e,n.route=o,a=n)s=a[i],n[i]={parser:s}
}(D={exports:{}},D.exports),D.exports),T=(E.dbs,E.discrete,E.route,{
routeLength:0,badFiles:[]})
P=E,j=T
var C=function(t,n){var r,e,o,i,a
for(r in e=P){o=e[r]
try{return i=o.parser(t),a=o.parser.success(i),o.data=i,o.info=a,o.name=n,r
}catch(t){}}return j.badFiles.push(n),!1}
var L,A={startPointMode:0,hideIcons:!1,onrender:0}
L=A
var I,O,_,z,F=function(t,n){var r
return r=function(t){return function(){switch(L.startPointMode){case 1:return 1
case 2:return 0
default:return 1===(null!=t?t[0]:void 0)?1:0}}()}(t),t.map((function(t){
return n.iPoints[t-r]||n.start}))}
function N(t){return t*t}function q(t,n){return Math.sqrt(N(t.x-n.x)+N(t.y-n.y))
}I=F,O=E,_=T,z=function(t,n){var r,e,o,i,a,s
r=I.apply(this,arguments),e=0,r.length&&(o=r[r.length-1])
for(i=0,a=r.length;i<a;++i)s=r[i],e+=q(o,s),o=s
return e}
var B,G=function(){
O.discrete.data&&O.route.data&&(_.routeLength=z(O.route.data,O.discrete.data))}
B=function(t){var n,r,e,o,i
for(n="",r=0,e=t.length;r<e;++r)o=r,i=t[r],n+="\n\t"+(o?"L":"M")+" "+i.x+" "+i.y
return n+" Z"}
var R,Y=function(t,n){var r,e,o
null==n&&(n={}),"string"!=typeof t&&(t=B(t))
for(e in r="",n)o=n[e],"title"!==e&&(r+=" "+e+'="'+o+'"')
return"<path"+r+' d="'+t+'">\n'+(n.title?"<title>"+n.title+"</title>":"")+"</path>"
}
R=Y
var X=function(t){return t.map(U).join("")}
function U(t){return R(t.paths.map(Z).join(""),{class:"DBS",
title:"Part: "+t.partid+"\nContours: "+t.paths.length})}function Z(t){
var n,r,e,o,i,a,s,u
for(n="",r=[],e=0,o=t.length;e<o;++e)i=t[e],n+="\n",r.length?r[2]?n+="A "+(a=Math.abs(1/r[2]+r[2])/4*(s=i,
u=r,
Math.sqrt(J(s[0]-u[0])+J(s[1]-u[1]))))+" "+a+" 0 "+Number(1<Math.abs(r[2]))+" "+Number(r[2]>0):n+="L":n+="M",
n+=" "+i[0]+" "+i[1],r=i
return t.length>0&&t[0][0]===t[t.length-1][0]&&t[0][1]===t[t.length-1][1]&&(n+=" Z"),
n}function J(t){return t*t}var V,W,H=function(t){var n,r,e,o,i,a,s,u,l,c,f,h
for(n="",r=0,o=(e=t.groups).length;r<o;++r)for(i=e[r],a=0,u=(s=i.points).length;a<u;++a)l=s[a],
n+='\n<circle class="pierce" cx="'+l.x+'" cy="'+l.y+'"><title>Point #'+(l.id||"-")+"\nGroup #"+((null!=(c=l.group)?c.id:void 0)||"-")+" ("+((null!=(f=l.group)&&null!=(h=f.points)?h.length:void 0)||0)+" points)\nX: "+l.x+"\nY: "+l.y+"\n</title></circle>"
return n}
V=F,W=Y
var K,Q,$=function(t,n){var r
return r=V.apply(this,arguments),W(r,{class:"route"})}
K={open:function(t){var n
return.01,n={x:t.max.x-t.min.x,y:t.max.y-t.min.y
},'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  height="100%" width="100%"\n  viewBox="'+[t.min.x-.01*n.x,-t.max.y-.01*n.y,1.02*n.x,1.02*n.y].join(" ")+'"><g><g transform = "scale(1, -1)">'
},close:function(){return"\n</g></g></svg>"}},Q=E
var tt=function(){var t,n
t=Q.discrete.data.bounds,n=K.open(t),Q.dbs.data&&(n+=X(Q.dbs.data))
n+=H(Q.discrete.data),Q.route.data&&(n+=$(Q.route.data,Q.discrete.data))
return n+=K.close()}
var nt,rt,et,ot,it,at,st,ut,lt,ct,ft,ht,pt,dt,gt,vt,yt,mt=o(Object.freeze({
__proto__:null,
path:"https://cdn.jsdelivr.net/npm/svg-pan-zoom@3.6.1/dist/svg-pan-zoom.min.js"
}))
nt=A,rt=mt,et=tt,ot=T,it=function(){
return'<script src="'+rt.path+"\"><\/script>\n<script>\n  setTimeout(function() {\n    svgPanZoom('svg', {controlIconsEnabled: "+!nt.hideIcons+"})\n  })\n<\/script>"
},at=n,st=r,ut=u,lt={help:"Show this help",output:"=Save result to file/folder",
force:"Overwrite existing file",start:"=Starting cluster (auto/first/last)",
clean:"Do not add buttons (+/reset/-)"},ct=C,ft=E,ht=T,pt=A,dt=G,gt=function(){
return"<!DOCTYPE html>\n<html><head>\n<title>PCGTSP Visualization</title>\n<style>\nsvg {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100;\n  box-sizing: border-box;\n  padding: 0;\n}\n\npath {\n  stroke-width: 0.1%;\n  fill-rule: nonzero;\n}\n\npath.DBS {\n  fill: #cdff00;\n  stroke: black;\n}\n\npath.DBS:first-of-type {\n  fill: none;\n}\n\npath.DBS:hover {\n  stroke-dasharray: 1%;\n  animation: dash 1s linear infinite;\n}\n\npath.part {\n  fill: white;\n  fill-opacity: 0%;\n  stroke: black;\n}\n\npath.part:hover {\n  fill: yellow;\n  fill-opacity: 50%;\n  stroke-dasharray: 1%;\n  animation: dash 1s linear infinite;\n}\n\npath.route {\n  stroke: red;\n  fill: none;\n}\n\ncircle.pierce {\n  r: 0.2%;\n  fill: #00ff00;\n  stroke: navy;\n  stroke-width: 0.1%;\n}\n\ncircle.route:hover {\n  fill-opacity: 75%;\n  stroke: lime;\n}\n\ncircle.pierce:hover {\n  fill: yellow;\n  stroke: red;\n}\n\n@keyframes dash {\n  from {\n  stroke-dashoffset: 0%;\n  }\n  to {\n  stroke-dashoffset: -2%;\n  }\n}\n</style>\n"+it()+"\n</head><body>\n"+et()+"\n"+((t=ot.routeLength)?"\x3c!--\nRoute Length     : "+t+"\n--\x3e":"")+"\n</body></html>"
var t},vt=function(){var t,n,r,e,o,i,a,s,u,l
if(t=ut(lt),(n=t()).h||!n.length)return void t.help()
pt.hideIcons=n.c,n.s&&(pt.startPointMode=function(){
switch(n.s.charAt(0).toLowerCase()){case"a":return 0
case"f":return 1
case"l":return 2
default:throw Error("Invalid value: --start="+n.s)}}())
for(console.log("Reading files..."),r=0,e=n.length;r<e;++r)o=r,i=n[r],console.log(o+1+".\t"+i),
a=at.readFileSync(i,{encoding:"utf-8"
}),(s=ct(a,i))?console.log("\t"+s+":\t"+ft[s].info):console.log("\t^ Unknown format")
ft.discrete.data||(console.error("Insufficient data"),process.exit(1))
dt(),(u=ht.routeLength)&&console.log("Route length:",u)
l=ft.discrete.name+".html",n.o&&function(){try{
return at.statSync(n.o).isDirectory()}catch(t){}
}()&&(l=st.join(n.o,st.basename(l)))
if(console.log("Writing to:\n\t"+l),!n.f&&at.existsSync(l))throw Error("Skipping existing file: "+l)
at.writeFileSync(l,gt(),{encoding:"utf-8"}),console.log("That's all folks!")}
try{vt()}catch(t){yt=t,console.log("Error:",yt.message)}
