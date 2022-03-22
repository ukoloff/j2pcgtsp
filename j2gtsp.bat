0</*! :: See https://github.com/ukoloff/j2pcgtsp
@echo off
node "%~f0" %*
goto :EOF */0;
"use strict"
function n(n){return n&&"object"==typeof n&&"default"in n?n.default:n}
var t=n(require("fs")),r=n(require("path")),e=n(require("process"))
function o(n){return n&&n.default||n}var i,a,s=o(Object.freeze({__proto__:null,
homepage:"https://github.com/ukoloff/j2pcgtsp"}))
i=e,a=s
var l=function(n){var t,r,e,o,s
for(e in t={},r={},n)o=n[e],s={help:o},/^=/.test(o)&&(s={
help:o.replace(/.\s*/,""),val:!0}),t[e.charAt(0)]=r[e]=s
function l(n){return r[n].val?n+"[=?]":n}function u(n){var e,o,a,s,l,u
function c(){var t
return e[u]=null==(t=n.shift())||t}function f(){return e[u]||(e[u]=0),e[u]++}
for(null==n&&(n=i.argv.slice(2)),e=[];n.length;){if("--"===(o=n.shift())){
e.push.apply(e,n)
break}if(/^--\w/.test(o)){
if(o=o.substring(2),(a=/=/.test(o))&&(o=RegExp.leftContext,
s=RegExp.rightContext),!(l=r[o]))throw Error("Unknown option: --"+o)
u=o.charAt(0),a?e[u]=s:l.val?c():f()
}else if(/^-\w/.test(o))for(o=o.substring(1);o.length;){
if(!(l=t[u=o.charAt(0).toLowerCase()]))throw Error("Unknown option: -"+u)
if(o=o.substring(1),l.val){o?e[u]=o:c()
break}f()}else e.push(o)}return e}return u.help=function(){var n,t,e,o
for(t in console.log("Options:"),n=0,r)n=Math.max(n,l(t).length)
for(t in e=r){for(o=e[t],t=l(t);t.length<n;)t+=" "
console.log("  -"+t.charAt(0)+"  --"+t+" "+o.help)}
console.log("\nSee",a.homepage)},u}
var u,c=function(n){if(!n)throw Error("Assertion failed!")}
u=c
var f=h
function h(n){var t
return t=JSON.parse(n),u(t.length),t}h.success=function(n){var t,r
return t=n.map((function(n){return n.partid})),r=t.length,t=function(n){var t
return t={},n.filter((function(n){return!t[n]&&(t[n]=!0)}))
}(t),r+" parts: "+t.slice(0,3).join(", ")+(t.length>3?"...":".")}
var p=function(n){var t,r,e,o,i
for(t=[],r=[],e=0,i=(o=n.Contours).length;e<i;++e)a(o[e])
function a(n,e){var o,i,s,l,u,c
for(r.push(o={id:n.Index,up:e?e.up.concat(e):[],points:[],groups:[]
}),e&&e.groups.push(o),i=0,l=(s=n.Points||[]).length;i<l;++i)u=s[i],t.push(c={
id:u.GlobalIndex,x:u.X,y:u.Y,group:o}),o.points.push(c)
for(i=0,l=(s=n.NestedContours||[]).length;i<l;++i)a(n=s[i],o)}return{start:{
x:n.TaskData.StartX||n.TaskData.FinishX||0,
y:n.TaskData.StartY||n.TaskData.FinishY||0},points:t,groups:r}}
var d=function(n){var t,r,e,o,i,a,s=[]
for(n.iPoints=t={},r=0,o=(e=n.points).length;r<o;++r)i=e[r],t[i.id]=i
for(n.iGroups=t={},r=0,o=(e=n.groups).length;r<o;++r)a=e[r],s.push(t[a.id]=a)
return s}
var g,v,y,m,x=[].slice,b=Array.from||function(n){return x.call(n)}
g=c,v=p,y=d,m=function(n){return n.bounds={min:{
x:Math.min.apply(Math,[n.start.x].concat(b(n.points.map((function(n){return n.x
}))))),y:Math.min.apply(Math,[n.start.y].concat(b(n.points.map((function(n){
return n.y})))))},max:{
x:Math.max.apply(Math,[n.start.x].concat(b(n.points.map((function(n){return n.x
}))))),y:Math.max.apply(Math,[n.start.y].concat(b(n.points.map((function(n){
return n.y})))))}}}
var w=k
function k(n){var t,r
return function(n){g(n.TaskData),g(n.Contours)
}(t=JSON.parse(n)),r=v(t),y(r),m(r),r}k.success=function(n){
return n.points.length+"/"+n.groups.length+" points/groups"}
var M=S
function S(n){var t
if(t=/\bTour(?:\s+Ordering)?\s*:\s*\[([\s\d,]*)\]/.exec(n))return t[1].split(/\D+/).filter((function(n){
return n})).map(Number)
throw Error("GTSP route not found")}S.success=function(n){
return n.length+" route point(s)"}
var P,j,D,C=(function(n,t){var r,e,o,i,a,s
for(i in r=f,e=w,o=M,t.dbs=r,t.discrete=e,t.route=o,a=t)s=a[i],t[i]={parser:s}
}(P={exports:{}},P.exports),P.exports),E=(C.dbs,C.discrete,C.route,{
routeLength:0,badFiles:[]})
j=C,D=E
var T=function(n,t){var r,e,o,i,a
for(r in e=j){o=e[r]
try{return i=o.parser(n),a=o.parser.success(i),o.data=i,o.info=a,o.name=t,r
}catch(n){}}return D.badFiles.push(t),!1}
var L,A={startPointMode:0,hideIcons:!1,onrender:0}
L=A
var I,O,_,z,F=function(n,t){var r
return r=function(n){return function(){switch(L.startPointMode){case 1:return 1
case 2:return 0
default:return 1===(null!=n?n[0]:void 0)?1:0}}()}(n),n.map((function(n){
return t.iPoints[n-r]||t.start}))}
function N(n){return n*n}function q(n,t){return Math.sqrt(N(n.x-t.x)+N(n.y-t.y))
}I=F,O=C,_=E,z=function(n,t){var r,e,o,i,a,s
r=I.apply(this,arguments),e=0,r.length&&(o=r[r.length-1])
for(i=0,a=r.length;i<a;++i)s=r[i],e+=q(o,s),o=s
return e}
var B,G=function(){
O.discrete.data&&O.route.data&&(_.routeLength=z(O.route.data,O.discrete.data))}
B=function(n){var t,r,e,o,i
for(t="",r=0,e=n.length;r<e;++r)o=r,i=n[r],t+="\n\t"+(o?"L":"M")+" "+i.x+" "+i.y
return t+" Z"}
var R,Y=function(n,t){var r,e,o
null==t&&(t={}),"string"!=typeof n&&(n=B(n))
for(e in r="",t)o=t[e],"title"!==e&&(r+=" "+e+'="'+o+'"')
return"<path"+r+' d="'+n+'">\n'+(t.title?"<title>"+t.title+"</title>":"")+"</path>"
}
R=Y
var X,Z=function(n){return n.map(U).join("")}
function U(n){return R(n.paths.map(J).join(""),{class:"DBS",
title:"Part: "+n.partid+"\nContours: "+n.paths.length})}function J(n){
var t,r,e,o,i,a,s,l
for(t="",r=[],e=0,o=n.length;e<o;++e)i=n[e],t+="\n",r.length?r[2]?t+="A "+(a=Math.abs(1/r[2]+r[2])/4*(s=i,
l=r,
Math.sqrt(V(s[0]-l[0])+V(s[1]-l[1]))))+" "+a+" 0 "+Number(1<Math.abs(r[2]))+" "+Number(r[2]>0):t+="L":t+="M",
t+=" "+i[0]+" "+i[1],r=i
return n.length>0&&n[0][0]===n[n.length-1][0]&&n[0][1]===n[n.length-1][1]&&(t+=" Z"),
t}function V(n){return n*n}X=Y
var W=function(n){return n.groups.map((function(n){return X(function(n){
return"M "+n.map((function(n){return n.x+" "+n.y})).join("\nL ")+" Z"
}(n.points),{class:"cluster",title:"Cluster #"+n.id+"\nPoints: "+n.points.length
})})).join("")}
var H,K,Q=function(n){var t,r,e,o,i,a,s,l,u,c,f,h
for(t="",r=0,o=(e=n.groups).length;r<o;++r)for(i=e[r],a=0,l=(s=i.points).length;a<l;++a)u=s[a],
t+='\n<circle class="pierce" cx="'+u.x+'" cy="'+u.y+'"><title>Point #'+(u.id||"-")+"\nGroup #"+((null!=(c=u.group)?c.id:void 0)||"-")+" ("+((null!=(f=u.group)&&null!=(h=f.points)?h.length:void 0)||0)+" points)\nX: "+u.x+"\nY: "+u.y+"\n</title></circle>"
return t}
H=F,K=Y
var $,nn,tn=function(n,t){var r
return r=H.apply(this,arguments),K(r,{class:"route"})}
$={open:function(n){var t
return.01,t={x:n.max.x-n.min.x,y:n.max.y-n.min.y
},'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  height="100%" width="100%"\n  viewBox="'+[n.min.x-.01*t.x,-n.max.y-.01*t.y,1.02*t.x,1.02*t.y].join(" ")+'"><g><g transform = "scale(1, -1)">'
},close:function(){return"\n</g></g></svg>"}},nn=C
var rn=function(){var n,t
n=nn.discrete.data.bounds,t=$.open(n),t+=nn.dbs.data?Z(nn.dbs.data):W(nn.discrete.data),
t+=Q(nn.discrete.data),nn.route.data&&(t+=tn(nn.route.data,nn.discrete.data))
return t+=$.close()}
var en,on,an,sn,ln,un,cn,fn,hn,pn,dn,gn,vn,yn,mn,xn,bn,wn=o(Object.freeze({
__proto__:null,
path:"https://cdn.jsdelivr.net/npm/svg-pan-zoom@3.6.1/dist/svg-pan-zoom.min.js"
}))
en=A,on=wn,an=rn,sn=E,ln=function(){
return'<script src="'+on.path+"\"><\/script>\n<script>\n  setTimeout(function() {\n    svgPanZoom('svg', {controlIconsEnabled: "+!en.hideIcons+"})\n  })\n<\/script>"
},un=t,cn=r,fn=l,hn={help:"Show this help",output:"=Save result to file/folder",
force:"Overwrite existing file",start:"=Starting cluster (auto/first/last)",
clean:"Do not add buttons (+/reset/-)"},pn=T,dn=C,gn=E,vn=A,yn=G,mn=function(){
return"<!DOCTYPE html>\n<html><head>\n<title>PCGTSP Visualization</title>\n<style>\nsvg {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100;\n  box-sizing: border-box;\n  padding: 0;\n}\n\npath {\n  stroke-width: 0.1%;\n  fill-rule: nonzero;\n}\n\npath.DBS {\n  fill: #cdff00;\n  stroke: black;\n}\n\npath.DBS:first-of-type {\n  fill: none;\n}\n\npath.DBS:hover {\n  stroke-dasharray: 1%;\n  animation: dash 1s linear infinite;\n}\n\npath.part {\n  fill: white;\n  fill-opacity: 0%;\n  stroke: black;\n}\n\npath.part:hover {\n  fill: yellow;\n  fill-opacity: 50%;\n  stroke-dasharray: 1%;\n  animation: dash 1s linear infinite;\n}\n\npath.cluster {\n  stroke: black;\n  fill: yellow;\n  fill-opacity: 15%;\n}\n\npath.cluster:hover {\n  fill: yellow;\n  fill-opacity: 50%;\n  stroke-dasharray: 1%;\n  animation: dash 1s linear infinite;\n}\n\npath.route {\n  stroke: red;\n  fill: none;\n}\n\ncircle.pierce {\n  r: 0.2%;\n  fill: #00ff00;\n  stroke: navy;\n  stroke-width: 0.1%;\n}\n\ncircle.route:hover {\n  fill-opacity: 75%;\n  stroke: lime;\n}\n\ncircle.pierce:hover {\n  fill: yellow;\n  stroke: red;\n}\n\n@keyframes dash {\n  from {\n  stroke-dashoffset: 0%;\n  }\n  to {\n  stroke-dashoffset: -2%;\n  }\n}\n</style>\n"+ln()+"\n</head><body>\n"+an()+"\n"+((n=sn.routeLength)?"\x3c!--\nRoute Length     : "+n+"\n--\x3e":"")+"\n</body></html>"
var n},xn=function(){var n,t,r,e,o,i,a,s,l,u
if(n=fn(hn),(t=n()).h||!t.length)return void n.help()
vn.hideIcons=t.c,t.s&&(vn.startPointMode=function(){
switch(t.s.charAt(0).toLowerCase()){case"a":return 0
case"f":return 1
case"l":return 2
default:throw Error("Invalid value: --start="+t.s)}}())
for(console.log("Reading files..."),r=0,e=t.length;r<e;++r)o=r,i=t[r],console.log(o+1+".\t"+i),
a=un.readFileSync(i,{encoding:"utf-8"
}),(s=pn(a,i))?console.log("\t"+s+":\t"+dn[s].info):console.log("\t^ Unknown format")
dn.discrete.data||(console.error("Insufficient data"),process.exit(1))
yn(),(l=gn.routeLength)&&console.log("Route length:",l)
u=dn.discrete.name+".html",t.o&&function(){try{
return un.statSync(t.o).isDirectory()}catch(n){}
}()&&(u=cn.join(t.o,cn.basename(u)))
if(console.log("Writing to:\n\t"+u),!t.f&&un.existsSync(u))throw Error("Skipping existing file: "+u)
un.writeFileSync(u,mn(),{encoding:"utf-8"}),console.log("That's all folks!")}
try{xn()}catch(n){bn=n,console.log("Error:",bn.message)}
