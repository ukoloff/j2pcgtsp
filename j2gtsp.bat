0</*! :: See https://github.com/ukoloff/j2pcgtsp
@echo off
node "%~f0" %*
goto :EOF */0;
"use strict"
var t=require("fs"),n=require("path"),r=require("process")
function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}
var o=e(t),a=e(n),i=e(r)
function s(t){return t&&t.default||t}var u,f,c=s(Object.freeze({__proto__:null,
homepage:"https://github.com/ukoloff/j2pcgtsp"}))
u=i.default,f=c
var l=function(t){var n,r,e,o,a
for(e in n={},r={},t)o=t[e],a={help:o},/^=/.test(o)&&(a={
help:o.replace(/.\s*/,""),val:!0}),n[e.charAt(0)]=r[e]=a
function i(t){return r[t].val?t+"[=?]":t}function s(t){var e,o,a,i,s,f
function c(){var n
return e[f]=null==(n=t.shift())||n}function l(){return e[f]||(e[f]=0),e[f]++}
for(null==t&&(t=u.argv.slice(2)),e=[];t.length;){if("--"===(o=t.shift())){
e.push.apply(e,t)
break}if(/^--\w/.test(o)){
if(o=o.substring(2),(a=/=/.test(o))&&(o=RegExp.leftContext,
i=RegExp.rightContext),!(s=r[o]))throw Error("Unknown option: --"+o)
f=o.charAt(0),a?e[f]=i:s.val?c():l()
}else if(/^-\w/.test(o))for(o=o.substring(1);o.length;){
if(!(s=n[f=o.charAt(0).toLowerCase()]))throw Error("Unknown option: -"+f)
if(o=o.substring(1),s.val){o?e[f]=o:c()
break}l()}else e.push(o)}return e}return s.help=function(){var t,n,e,o
for(n in console.log("Options:"),t=0,r)t=Math.max(t,i(n).length)
for(n in e=r){for(o=e[n],n=i(n);n.length<t;)n+=" "
console.log("  -"+n.charAt(0)+"  --"+n+" "+o.help)}
console.log("\nSee",f.homepage)},s}
var h,p={help:"Show this help",output:"=Save result to file/folder",
force:"Overwrite existing file",start:"=Starting cluster (auto/first/last)",
clean:"Do not add buttons (+/reset/-)"},d=function(t){
if(!t)throw Error("Assertion failed!")}
h=d
var g=v
function v(t){var n
return n=JSON.parse(t),h(n.length),n}v.success=function(t){var n,r
return n=t.map((function(t){return t.partid})),r=n.length,n=function(t){var n
return n={},t.filter((function(t){return!n[t]&&(n[t]=!0)}))
}(n),r+" parts: "+n.slice(0,3).join(", ")+(n.length>3?"...":".")}
var m=function(t){var n,r,e,o,a
for(n=[],r=[],e=0,a=(o=t.Contours).length;e<a;++e)i(o[e])
function i(t,e){var o,a,s,u,f,c
for(r.push(o={id:t.Index,up:e?e.up.concat(e):[],points:[],groups:[]
}),e&&e.groups.push(o),a=0,u=(s=t.Points||[]).length;a<u;++a)f=s[a],n.push(c={
id:f.GlobalIndex,x:f.X,y:f.Y,group:o}),o.points.push(c)
for(a=0,u=(s=t.NestedContours||[]).length;a<u;++a)i(t=s[a],o)}return{start:{
x:t.TaskData.StartX||t.TaskData.FinishX||0,
y:t.TaskData.StartY||t.TaskData.FinishY||0},points:n,groups:r}}
var y=function(t){var n,r,e,o,a,i,s=[]
for(t.iPoints=n={},r=0,o=(e=t.points).length;r<o;++r)a=e[r],n[a.id]=a
for(t.iGroups=n={},r=0,o=(e=t.groups).length;r<o;++r)i=e[r],s.push(n[i.id]=i)
return s}
var x,b,k,w,M=[].slice,S=Array.from||function(t){return M.call(t)}
x=d,b=m,k=y,w=function(t){return t.bounds={min:{
x:Math.min.apply(Math,[t.start.x].concat(S(t.points.map((function(t){return t.x
}))))),y:Math.min.apply(Math,[t.start.y].concat(S(t.points.map((function(t){
return t.y})))))},max:{
x:Math.max.apply(Math,[t.start.x].concat(S(t.points.map((function(t){return t.x
}))))),y:Math.max.apply(Math,[t.start.y].concat(S(t.points.map((function(t){
return t.y})))))}}}
var j=z
function z(t){var n,r
return function(t){x(t.TaskData),x(t.Contours)
}(n=JSON.parse(t)),r=b(n),k(r),w(r),r}z.success=function(t){
return t.points.length+"/"+t.groups.length+" points/groups"}
var T=E
function E(t){var n
if(n=/\bTour(?:\s+Ordering)?\s*:\s*\[([\s\d,]*)\]/.exec(t))return n[1].split(/\D+/).filter((function(t){
return t})).map(Number)
throw Error("GTSP route not found")}E.success=function(t){
return t.length+" route point(s)"}
var P,C=(function(t,n){var r,e,o,a,i,s
for(a in r=g,e=j,o=T,n.dbs=r,n.discrete=e,n.route=o,i=n)s=i[a],n[a]={parser:s}
}(P={exports:{}},P.exports),P.exports)
C.dbs,C.discrete,C.route
var D,A,_={routeLength:0,badFiles:[]}
D=C,A=_
var O,L=function(t,n){var r,e,o,a,i
for(r in e=D){o=e[r]
try{return a=o.parser(t),i=o.parser.success(a),o.data=a,o.info=i,o.name=n,r
}catch(t){}}return A.badFiles.push(n),!1}
O=C
var I=function(){return O.discrete.name||O.dbs.name||"none"}
var N,q={startPointMode:0,hideIcons:!1,onrender:0}
N=q
var B,F,G,R,Y=function(t,n){var r
return r=function(t){return function(){switch(N.startPointMode){case 1:return 1
case 2:return 0
default:return 1===(null!=t?t[0]:void 0)?1:0}}()}(t),t.map((function(t){
return n.iPoints[t-r]||n.start}))}
function X(t){return t*t}function Z(t,n){return Math.sqrt(X(t.x-n.x)+X(t.y-n.y))
}B=Y,F=C,G=_,R=function(t,n){var r,e,o,a,i,s
r=B.apply(this,arguments),e=0,r.length&&(o=r[r.length-1])
for(a=0,i=r.length;a<i;++a)s=r[a],e+=Z(o,s),o=s
return e}
var U=function(){
F.discrete.data&&F.route.data&&(G.routeLength=R(F.route.data,F.discrete.data))}
var J=function(t){var n
return.01,n={x:t.max.x-t.min.x,y:t.max.y-t.min.y
},'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  height="100%" width="100%"\n  viewBox="'+[t.min.x-.01*n.x,-t.max.y-.01*n.y,1.02*n.x,1.02*n.y].join(" ")+'"><g><g transform = "scale(1, -1)">'
}
function V(t,n){var r,e,o,a
for(r=0,e=t.length;r<e;++r)o=t[r],a&&n({a:a,b:a[2],z:o}),a=o}function W(t,n){
var r,e,o
for(r=0,o=(e=t.paths).length;r<o;++r)V(e[r],n)}
var H,K,Q,$,tt,nt,rt,et,ot,at=function(t){var n,r,e=[]
for(n=0;n<=1;++n)r=n,e.push(t.z[r]-t.a[r])
return e}
function it(t,n){var r
for(r=0;r<=1;++r)t[r]*=n}function st(t,n){
return[t[0]*n[0]-t[1]*n[1],t[0]*n[1]+t[1]*n[0]]}H=at,K=at,Q=at,$=function(t){
return Math.abs(1/t.b+t.b)/4*function(t){var n,r,e,o
for(n=0,r=0,e=t.length;r<e;++r)o=t[r],n+=o*o
return Math.sqrt(n)}(H(t))},tt=function(t){var n,r,e,o,a
for(it(n=K(t),(1/t.b-t.b)/2),e=[],o=0;o<=1;++o)a=o,e.push(t.a[a]+t.z[a])
return(r=e)[0]-=n[1],r[1]+=n[0],it(r,.5),r},nt=function(t,n){var r,e
for(r=0,e=t.length;r<e;++r)W(t[r],n)},rt=function(t){var n,r,e,o,a,i,s,u,f,c,l
if(n={min:{x:Math.min(t.a[0],t.z[0]),y:Math.min(t.a[1],t.z[1])},max:{
x:Math.max(t.a[0],t.z[0]),y:Math.max(t.a[1],t.z[1])}},!t.b)return n
for(r=Q(t),e=st(e=[1,-t.b],e),o=st(r,e),e[0]=-e[0],o.push.apply(o,st(r,e)),o.push.apply(o,r),
o.push(-r[0],-r[1]),a=0,i=o.length;a<i;++a)s=a,u=o[a],o[s]=u?u>0?1:-1:0
for(f=0,a=0;a<=3;++a)o[s=a]&&o[s]!==o[s+4]&&(f|=1<<s%2+o[s]+1)
if(!f)return n
for(c=tt(t),l=$(t),a=0;a<=3;++a)if(f&1<<(s=a))switch(s){case 0:n.min.x=c[0]-l
break
case 1:n.min.y=c[1]-l
break
case 2:n.max.x=c[0]+l
break
case 3:n.max.y=c[1]+l}return n},et=function(t){var n
return nt(t,(function(t){var r,e,o
r=rt(t),n=n?(e=n,o=r,{min:{x:Math.min(e.min.x,o.min.x),
y:Math.min(e.min.y,o.min.y)},max:{x:Math.max(e.max.x,o.max.x),
y:Math.max(e.max.y,o.max.y)}}):r})),n},ot=function(t){var n,r,e,o,a
for(n="",r=0,e=t.length;r<e;++r)o=r,a=t[r],n+="\n\t"+(o?"L":"M")+" "+a.x+" "+a.y
return n+" Z"}
var ut,ft=function(t,n){var r,e,o
null==n&&(n={}),"string"!=typeof t&&(t=ot(t))
for(e in r="",n)o=n[e],"title"!==e&&(r+=" "+e+'="'+o+'"')
return"<path"+r+' d="'+t+'">\n'+(n.title?"<title>"+n.title+"</title>":"")+"</path>"
}
ut=ft
var ct=function(t){return t.map(lt).join("")}
function lt(t){return ut(t.paths.map(ht).join(""),{class:"DBS",
title:"Part: "+t.partid+"\nContours: "+t.paths.length})}function ht(t){
var n,r,e,o,a,i,s,u
for(n="",r=[],e=0,o=t.length;e<o;++e)a=t[e],n+="\n",r.length?r[2]?n+="A "+(i=Math.abs(1/r[2]+r[2])/4*(s=a,
u=r,
Math.sqrt(pt(s[0]-u[0])+pt(s[1]-u[1]))))+" "+i+" 0 "+Number(1<Math.abs(r[2]))+" "+Number(r[2]>0):n+="L":n+="M",
n+=" "+a[0]+" "+a[1],r=a
return t.length>0&&t[0][0]===t[t.length-1][0]&&t[0][1]===t[t.length-1][1]&&(n+=" Z"),
n}function pt(t){return t*t}var dt,gt=function(t){var n,r,e,o,a,i,s,u,f,c,l,h
for(n="",r=0,o=(e=t.groups).length;r<o;++r)for(a=e[r],i=0,u=(s=a.points).length;i<u;++i)f=s[i],
n+='\n<circle class="pierce" cx="'+f.x+'" cy="'+f.y+'"><title>Point #'+(f.id||"-")+"\nGroup #"+((null!=(c=f.group)?c.id:void 0)||"-")+" ("+((null!=(l=f.group)&&null!=(h=l.points)?h.length:void 0)||0)+" points)\nX: "+f.x+"\nY: "+f.y+"\n</title></circle>"
return n}
dt=ft
var vt,mt,yt=function(t){return t.groups.map((function(t){return dt(function(t){
return"M "+t.map((function(t){return t.x+" "+t.y})).join("\nL ")+" Z"
}(t.points),{class:"cluster",title:"Cluster #"+t.id+"\nPoints: "+t.points.length
})})).join("")}
vt=Y,mt=ft
var xt,bt,kt,wt=function(t,n){var r
return r=vt.apply(this,arguments),mt(r,{class:"route"})}
xt={open:J,close:function(){return"\n</g></g></svg>"}},bt=C,kt=function(t){
return t.bounds=et(t)}
var Mt=function(){var t,n,r
t=(n=bt.discrete.data)?n.bounds:kt(bt.dbs.data),r=xt.open(t),(n=bt.dbs.data)&&(r+=ct(n))
;(n=bt.discrete.data)&&(r+=(bt.dbs.data?gt:yt)(n),
(n=bt.route.data)&&(r+=wt(n,bt.discrete.data)))
return r+=xt.close()}
var St=[],jt=[]
var zt="svg{box-sizing:border-box;height:100;left:0;padding:0;position:absolute;top:0;width:100%}path{stroke-width:1px;vector-effect:non-scaling-stroke;fill-rule:evenodd}path.DBS{fill:#cdff00;stroke:#000}path.DBS:first-of-type{fill:none}path.DBS:hover{stroke-dasharray:1%;animation:dash 1s linear infinite}path.part{fill:#fff;fill-opacity:0;stroke:#000}path.part:hover{fill:#ff0;fill-opacity:50%;stroke-dasharray:1%;animation:dash 1s linear infinite}path.cluster{stroke:#000;fill:#ff0;fill-opacity:15%}path.cluster:hover{fill:#ff0;fill-opacity:50%;stroke-dasharray:1%;animation:dash 1s linear infinite}path.route{stroke:red;fill:none}circle.pierce{r:.2%;fill:#0f0;stroke:navy;stroke-width:1px;vector-effect:non-scaling-stroke}circle.pierce:hover{fill:#ff0;stroke:red}circle.route:hover{fill-opacity:75%;stroke:#0f0}@-moz-keyframes dash{0%{stroke-dashoffset:0%}to{stroke-dashoffset:-2%}}@-webkit-keyframes dash{0%{stroke-dashoffset:0%}to{stroke-dashoffset:-2%}}@-o-keyframes dash{0%{stroke-dashoffset:0%}to{stroke-dashoffset:-2%}}@keyframes dash{0%{stroke-dashoffset:0%}to{stroke-dashoffset:-2%}}"
!function(t,n){if(t&&"undefined"!=typeof document){
var r,e=!0===n.prepend?"prepend":"append",o=!0===n.singleTag,a="string"==typeof n.container?document.querySelector(n.container):document.getElementsByTagName("head")[0]
if(o){var i=St.indexOf(a)
;-1===i&&(i=St.push(a)-1,jt[i]={}),r=jt[i]&&jt[i][e]?jt[i][e]:jt[i][e]=s()
}else r=s()
65279===t.charCodeAt(0)&&(t=t.substring(1)),r.styleSheet?r.styleSheet.cssText+=t:r.appendChild(document.createTextNode(t))
}function s(){var t=document.createElement("style")
if(t.setAttribute("type","text/css"),n.attributes)for(var r=Object.keys(n.attributes),o=0;o<r.length;o++)t.setAttribute(r[o],n.attributes[r[o]])
var i="prepend"===e?"afterbegin":"beforeend"
return a.insertAdjacentElement(i,t),t}}(zt,{})
var Tt=Object.freeze({__proto__:null,css:zt,default:zt})
var Et,Pt,Ct=s(Object.freeze({__proto__:null,
path:"https://cdn.jsdelivr.net/npm/svg-pan-zoom@3.6.1/dist/svg-pan-zoom.min.js"
}))
Et=q,Pt=Ct
var Dt=function(){
return'<script src="'+Pt.path+"\"><\/script>\n<script>\n  setTimeout(function() {\n    svgPanZoom('svg', {controlIconsEnabled: "+!Et.hideIcons+"})\n  })\n<\/script>"
}
var At,_t,Ot,Lt,It=s(Tt)
At=Mt,_t=_,Ot=It,Lt=Dt
var Nt,qt=function(){
return"<!DOCTYPE html>\n<html><head>\n<title>PCGTSP Visualization</title>\n<style>\n"+Ot+"\n</style>\n"+Lt()+"\n</head><body>\n"+At()+"\n"+((t=_t.routeLength)?"\x3c!--\nRoute Length     : "+t+"\n--\x3e":"")+"\n</body></html>"
var t}
Nt=C
var Bt,Ft,Gt,Rt,Yt,Xt,Zt,Ut,Jt,Vt,Wt,Ht,Kt,Qt,$t=function(){
return Nt.discrete.data||Nt.dbs.data}
Bt=o.default,Ft=a.default,Gt=l,Rt=p,Yt=L,Xt=I,Zt=_,Ut=q,Jt=U,Vt=qt,Wt=$t,Ht=C,Kt=function(){
var t,n,r,e,o,a,i,s,u,f
if(t=Gt(Rt),(n=t()).h||!n.length)return void t.help()
Ut.hideIcons=n.c,n.s&&(Ut.startPointMode=function(){
switch(n.s.charAt(0).toLowerCase()){case"a":return 0
case"f":return 1
case"l":return 2
default:throw Error("Invalid value: --start="+n.s)}}())
for(console.log("Reading files..."),r=0,e=n.length;r<e;++r)o=r,a=n[r],console.log(o+1+".\t"+a),
i=Bt.readFileSync(a,{encoding:"utf-8"
}),(s=Yt(i,a))?console.log("\t"+s+":\t"+Ht[s].info):console.log("\t^ Unknown format")
Wt()||(console.error("Insufficient data to view"),process.exit(1))
Jt(),(u=Zt.routeLength)&&console.log("Route length:",u)
f=Xt()+".html",n.o&&(f=function(){try{return Bt.statSync(n.o).isDirectory()
}catch(t){}}()?Ft.join(n.o,Ft.basename(f)):n.o)
if(console.log("Writing to:\n\t"+f),!n.f&&Bt.existsSync(f))throw Error("Skipping existing file: "+f)
Bt.writeFileSync(f,Vt(),{encoding:"utf-8"}),console.log("That's all folks!")}
try{Kt()}catch(t){Qt=t,console.log("Error:",Qt.message)}
