"use strict"
function t(t){return t&&"object"==typeof t&&"default"in t?t.default:t}
var n=t(require("fs")),e=t(require("path")),r=t(require("process")),o="Toolbox for JSON / PCGTSP interconnection",i={
test:"rollup -c",start:"rollup -cw"},a={type:"git",
url:"git+https://github.com/ukoloff/j2pcgtsp.git"
},s=["json","GTSP","PCGTSP"],l={name:"Stas Ukolov",email:"ukoloff@gmail.com"
},u={url:"https://github.com/ukoloff/j2pcgtsp/issues"
},p="https://github.com/ukoloff/j2pcgtsp",c={
"@rollup/plugin-commonjs":"^11.0.2","@rollup/plugin-json":"^4.1.0",
"@rollup/plugin-node-resolve":"^7.1.1","@rollup/plugin-yaml":"^3.1.0",
"@rollup/pluginutils":"^3.0.8",livescript:"^1.6.0",mithril:"^2.0.4",
rollup:"^1.32.1","rollup-plugin-terser":"^5.3.0","svg-pan-zoom":"^3.6.1"},h={
name:"j2pcgtsp",version:"1.0.0",private:!0,description:o,main:"./j2gtsp",
scripts:i,repository:a,keywords:s,author:l,license:"ISC",bugs:u,homepage:p,
devDependencies:c}
function g(t){return t&&t.default||t}var f,d=g(Object.freeze({__proto__:null,
name:"j2pcgtsp",version:"1.0.0",description:o,main:"./j2gtsp",scripts:i,
repository:a,keywords:s,author:l,license:"ISC",bugs:u,homepage:p,
devDependencies:c,default:h}))
f=r
var m=function(t){var n,e,r,o,i
for(r in n={},e={},t)o=t[r],i={help:o},/^=/.test(o)&&(i={
help:o.replace(/.\s*/,""),val:!0}),n[r.charAt(0)]=e[r]=i
function a(t){return e[t].val?t+"[=?]":t}function s(t){var r,o,i,a,s,l
function u(){var n
return r[l]=null==(n=t.shift())||n}function p(){return r[l]||(r[l]=0),r[l]++}
for(null==t&&(t=f.argv.slice(2)),r=[];t.length;){if("--"===(o=t.shift())){
r.push.apply(r,t)
break}if(/^--\w/.test(o)){
if(o=o.substring(2),(i=/=/.test(o))&&(o=RegExp.leftContext,
a=RegExp.rightContext),!(s=e[o]))throw Error("Unknown option: --"+o)
l=o.charAt(0),i?r[l]=a:s.val?u():p()
}else if(/^-\w/.test(o))for(o=o.substring(1);o.length;){
if(!(s=n[l=o.charAt(0).toLowerCase()]))throw Error("Unknown option: -"+l)
if(o=o.substring(1),s.val){o?r[l]=o:u()
break}p()}else r.push(o)}return r}return s.help=function(){var t,n,r,o
for(n in console.log("Options:"),t=0,e)t=Math.max(t,a(n).length)
for(n in r=e){for(o=r[n],n=a(n);n.length<t;)n+=" "
console.log("  -"+n.charAt(0)+"  --"+n+" "+o.help)}
console.log("\nSee",d.homepage)},s}
var v,y=function(t){if(!t)throw Error("Assertion failed!")}
v=y
var b=k
function k(t){var n
return n=JSON.parse(t),v(n.length),n}k.success=function(t){var n,e
return n=t.map((function(t){return t.partid})),e=n.length,n=function(t){var n
return n={},t.filter((function(t){return!n[t]&&(n[t]=!0)}))
}(n),e+" parts: "+n.slice(0,3).join(", ")+(n.length>3?"...":".")}
var x=function(t){var n,e,r,o,i
for(n=[],e=[],r=0,i=(o=t.Contours).length;r<i;++r)a(o[r])
function a(t,r){var o,i,s,l,u,p
for(e.push(o={id:t.Index,up:r?r.up.concat(r):[],points:[],groups:[]
}),r&&r.groups.push(o),i=0,l=(s=t.Points||[]).length;i<l;++i)u=s[i],n.push(p={
id:u.GlobalIndex,x:u.X,y:u.Y,group:o}),o.points.push(p)
for(i=0,l=(s=t.NestedContours||[]).length;i<l;++i)a(t=s[i],o)}return{start:{
x:t.TaskData.StartX||t.TaskData.FinishX||0,
y:t.TaskData.StartY||t.TaskData.FinishY||0},points:n,groups:e}}
var w=function(t){var n,e,r,o,i,a,s=[]
for(t.iPoints=n={},e=0,o=(r=t.points).length;e<o;++e)i=r[e],n[i.id]=i
for(t.iGroups=n={},e=0,o=(r=t.groups).length;e<o;++e)a=r[e],s.push(n[a.id]=a)
return s}
var S,z,j,_,C=[].slice,P=Array.from||function(t){return C.call(t)}
S=y,z=x,j=w,_=function(t){return t.bounds={min:{
x:Math.min.apply(Math,[t.start.x].concat(P(t.points.map((function(t){return t.x
}))))),y:Math.min.apply(Math,[t.start.y].concat(P(t.points.map((function(t){
return t.y})))))},max:{
x:Math.max.apply(Math,[t.start.x].concat(P(t.points.map((function(t){return t.x
}))))),y:Math.max.apply(Math,[t.start.y].concat(P(t.points.map((function(t){
return t.y})))))}}}
var D=M
function M(t){var n,e
return function(t){S(t.TaskData),S(t.Contours)
}(n=JSON.parse(t)),e=z(n),j(e),_(e),e}M.success=function(t){
return t.points.length+"/"+t.groups.length+" points/groups"}
var T=B
function B(t){var n
if(n=/\bTour(?:\s+Ordering)?\s*:\s*\[([\s\d,]*)\]/.exec(t))return n[1].split(/\D+/).filter((function(t){
return t})).map(Number)
throw Error("GTSP route not found")}B.success=function(t){
return t.length+" route point(s)"}
var A,G,q,N=(function(t,n){var e,r,o,i,a,s
for(i in e=b,r=D,o=T,n.dbs=e,n.discrete=r,n.route=o,a=n)s=a[i],n[i]={parser:s}
}(A={exports:{}},A.exports),A.exports),E=(N.dbs,N.discrete,N.route,{
routeLength:0,badFiles:[]})
G=N,q=E
var I=function(t,n){var e,r,o,i,a
for(e in r=G){o=r[e]
try{return i=o.parser(t),a=o.parser.success(i),o.data=i,o.info=a,o.name=n,e
}catch(t){}}return q.badFiles.push(n),!1}
var R,L={startPointMode:0,hideIcons:!1,onrender:0}
R=L
var O,J,F,V,X=function(t,n){var e
return e=function(t){return function(){switch(R.startPointMode){case 1:return 1
case 2:return 0
default:return 1===(null!=t?t[0]:void 0)?1:0}}()}(t),t.map((function(t){
return n.iPoints[t-e]||n.start}))}
function Y(t){return t*t}function K(t,n){return Math.sqrt(Y(t.x-n.x)+Y(t.y-n.y))
}O=X,J=N,F=E,V=function(t,n){var e,r,o,i,a,s
e=O.apply(this,arguments),r=0,e.length&&(o=e[e.length-1])
for(i=0,a=e.length;i<a;++i)s=e[i],r+=K(o,s),o=s
return r}
var U,Z=function(){
J.discrete.data&&J.route.data&&(F.routeLength=V(J.route.data,J.discrete.data))}
U=function(t){var n,e,r,o,i
for(n="",e=0,r=t.length;e<r;++e)o=e,i=t[e],n+="\n\t"+(o?"L":"M")+" "+i.x+" "+i.y
return n+" Z"}
var H,W=function(t,n){var e,r,o
null==n&&(n={}),"string"!=typeof t&&(t=U(t))
for(r in e="",n)o=n[r],"title"!==r&&(e+=" "+r+'="'+o+'"')
return"<path"+e+' d="'+t+'">\n'+(n.title?"<title>"+n.title+"</title>":"")+"</path>"
}
H=W
var Q=function(t){return t.map($).join("")}
function $(t){return H(t.paths.map(tt).join(""),{class:"DBS",
title:"Part: "+t.partid+"\nContours: "+t.paths.length})}function tt(t){
var n,e,r,o,i,a,s,l
for(n="",e=[],r=0,o=t.length;r<o;++r)i=t[r],n+="\n",e.length?e[2]?n+="A "+(a=Math.abs(1/e[2]+e[2])/4*(s=i,
l=e,
Math.sqrt(nt(s[0]-l[0])+nt(s[1]-l[1]))))+" "+a+" 0 "+Number(1<Math.abs(e[2]))+" "+Number(e[2]>0):n+="L":n+="M",
n+=" "+i[0]+" "+i[1],e=i
return t.length>0&&t[0][0]===t[t.length-1][0]&&t[0][1]===t[t.length-1][1]&&(n+=" Z"),
n}function nt(t){return t*t}var et,rt,ot=function(t){var n,e,r,o,i,a,s,l,u,p,c,h
for(n="",e=0,o=(r=t.groups).length;e<o;++e)for(i=r[e],a=0,l=(s=i.points).length;a<l;++a)u=s[a],
n+='\n<circle class="pierce" cx="'+u.x+'" cy="'+u.y+'"><title>Point #'+(u.id||"-")+"\nGroup #"+((null!=(p=u.group)?p.id:void 0)||"-")+" ("+((null!=(c=u.group)&&null!=(h=c.points)?h.length:void 0)||0)+" points)\nX: "+u.x+"\nY: "+u.y+"\n</title></circle>"
return n}
et=X,rt=W
var it,at,st=function(t,n){var e
return e=et.apply(this,arguments),rt(e,{class:"route"})}
it={open:function(t){var n
return.01,n={x:t.max.x-t.min.x,y:t.max.y-t.min.y
},'<svg\n  xmlns="http://www.w3.org/2000/svg"\n  height="100%" width="100%"\n  viewBox="'+[t.min.x-.01*n.x,-t.max.y-.01*n.y,1.02*n.x,1.02*n.y].join(" ")+'"><g><g transform = "scale(1, -1)">'
},close:function(){return"\n</g></g></svg>"}},at=N
var lt=function(){var t,n
t=at.discrete.data.bounds,n=it.open(t),at.dbs.data&&(n+=Q(at.dbs.data))
n+=ot(at.discrete.data),at.route.data&&(n+=st(at.route.data,at.discrete.data))
return n+=it.close()}
var ut,pt,ct,ht,gt,ft,dt,mt,vt,yt,bt,kt,xt,wt,St,zt,jt="svg-pan-zoom@^3.6.1",_t="svg-pan-zoom@3.6.1",Ct="sha512-JaKkGHHfGvRrcMPdJWkssLBeWqM+Isg/a09H7kgNNajT1cX5AztDTNs+C8UzpCxjCTRrG34WbquwaovZbmSk9g==",Pt={},Dt={
type:"range",registry:!0,raw:"svg-pan-zoom@^3.6.1",name:"svg-pan-zoom",
escapedName:"svg-pan-zoom",rawSpec:"^3.6.1",saveSpec:null,fetchSpec:"^3.6.1"
},Mt=["#DEV:/"],Tt="https://registry.npmjs.org/svg-pan-zoom/-/svg-pan-zoom-3.6.1.tgz",Bt="f880a1bb32d18e9c625d7715350bebc269b450cf",At="svg-pan-zoom@^3.6.1",Gt="/home/runner/work/j2pcgtsp/j2pcgtsp",qt={
url:"https://github.com/ariutta/svg-pan-zoom/issues"},Nt=[{
name:"Andrea Leofreddi",email:"a.leofreddi@vleo.net"},{name:"Anders Riutta",
email:"git@andersriutta.com"},{name:"Zeng Xiaohui"},{name:"Barry Coughlan",
url:"https://github.com/bcoughlan"},{name:"Risingson"},{name:"bumbu alex",
url:"http://bumbu.me>"},{name:"Alexander Pico",email:"apico@gladstone.ucsf.edu"
},{name:"Kyran Burraston",url:"http://kyranburraston.co.uk"},{name:"Risingson",
url:"https://github.com/Risingson"},{name:"Siddhanathan Shanmugam",
email:"siddhanathan+social@gmail.com"},{name:"Karina Simard",
url:"https://github.com/ksimard"},{name:"Christopher Clark",
email:"chris.clark@sparkfun.com"},{name:"Vladimir Prus",
url:"http://vladimirprus.com"},{name:"Barry Coughlan",
url:"https://github.com/bcoughlan"},{name:"Ionică Bizău",
url:"http://ionicabizau.net/"},{name:"Ciprian Placintă",
url:"https://github.com/CiprianPlacinta"},{name:"Riccardo Santoro",
url:"https://github.com/VeNoMiS"},{name:"César Vidril",
url:"https://github.com/Yimiprod"},{name:"Androl Genhald",
url:"https://github.com/AndrolGenhald"},{name:"James Newell",
url:"https://github.com/musicfuel"},{name:"KoenkookpotPlasmans",
url:"https://github.com/KoenkookpotPlasmans"},{name:"Hassan Shaikley",
url:"http://hassanshaikley.github.io/"
}],Et="JavaScript library for panning and zooming an SVG image from the mouse, touches and programmatically.",It={
browserify:"^16.3.0","eslint-config-prettier":"^6.3.0",
"eslint-plugin-prettier":"^3.1.0",gulp:"^4.0.2","gulp-concat":"^2.6.1",
"gulp-eslint":"^6.0.0","gulp-header":"^2.0.9","gulp-if":"^2.0.2",
"gulp-plumber":"^1.2.1","gulp-qunit":"^2.0.3","gulp-rename":"^1.4.0",
"gulp-uglify":"^3.0.2","gulp-watch":"^5.0.1",prettier:"^1.18.2",
qunitjs:"^2.4.1",tslint:"^4.5.1",typescript:"^3.5.3","vinyl-buffer":"^1.0.1",
"vinyl-source-stream":"^2.0.0"
},Rt="https://github.com/ariutta/svg-pan-zoom#readme",Lt=["svg","pan","zoom"],Ot="dist/svg-pan-zoom.js",Jt={
type:"git",url:"git+https://github.com/ariutta/svg-pan-zoom.git"},Ft={
build:"gulp build",lint:"tslint 'dist/svg-pan-zoom.d.ts'",
server:"node server.js",start:"gulp",test:"tsc && gulp test"
},Vt="dist/svg-pan-zoom.d.ts",Xt={_from:jt,_id:_t,_inBundle:!1,_integrity:Ct,
_location:"/svg-pan-zoom",_phantomChildren:Pt,_requested:Dt,_requiredBy:Mt,
_resolved:Tt,_shasum:Bt,_spec:At,_where:Gt,browser:"src/browserify.js",bugs:qt,
bundleDependencies:!1,contributors:Nt,deprecated:!1,description:Et,
devDependencies:It,homepage:Rt,keywords:Lt,license:"BSD-2-Clause",main:Ot,
module:"src/svg-pan-zoom.js",name:"svg-pan-zoom",repository:Jt,scripts:Ft,
types:Vt,version:"3.6.1"},Yt=g(Object.freeze({__proto__:null,_from:jt,_id:_t,
_inBundle:!1,_integrity:Ct,_location:"/svg-pan-zoom",_phantomChildren:Pt,
_requested:Dt,_requiredBy:Mt,_resolved:Tt,_shasum:Bt,_spec:At,_where:Gt,
browser:"src/browserify.js",bugs:qt,bundleDependencies:!1,contributors:Nt,
deprecated:!1,description:Et,devDependencies:It,homepage:Rt,keywords:Lt,
license:"BSD-2-Clause",main:Ot,module:"src/svg-pan-zoom.js",name:"svg-pan-zoom",
repository:Jt,scripts:Ft,types:Vt,version:"3.6.1",default:Xt}))
ut=L,pt=lt,ct=E,ht=function(){
return'<script src="https://cdn.jsdelivr.net/npm/svg-pan-zoom@'+Yt.version+"/dist/svg-pan-zoom.min.js\"><\/script>\n<script>\n  setTimeout(function() {\n    svgPanZoom('svg', {controlIconsEnabled: "+!ut.hideIcons+"})\n  })\n<\/script>"
},gt=n,ft=e,dt=m,mt={help:"Show this help",output:"=Save result to file/folder",
force:"Overwrite existing file",start:"=Starting cluster (auto/first/last)",
clean:"Do not add buttons (+/reset/-)"},vt=I,yt=N,bt=E,kt=L,xt=Z,wt=function(){
return"<!DOCTYPE html>\n<html><head>\n<title>PCGTSP Visualization</title>\n<style>\nsvg {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100;\n  box-sizing: border-box;\n  padding: 0;\n}\n\npath {\n  stroke-width: 0.1%;\n  fill-rule: nonzero;\n}\n\npath.DBS {\n  fill: #cdff00;\n  stroke: black;\n}\n\npath.DBS:first-of-type {\n  fill: none;\n}\n\npath.DBS:hover {\n  stroke-dasharray: 1%;\n  animation: dash 1s linear infinite;\n}\n\npath.part {\n  fill: white;\n  fill-opacity: 0%;\n  stroke: black;\n}\n\npath.part:hover {\n  fill: yellow;\n  fill-opacity: 50%;\n  stroke-dasharray: 1%;\n  animation: dash 1s linear infinite;\n}\n\npath.route {\n  stroke: red;\n  fill: none;\n}\n\ncircle.pierce {\n  r: 0.2%;\n  fill: #00ff00;\n  stroke: navy;\n  stroke-width: 0.1%;\n}\n\ncircle.route:hover {\n  fill-opacity: 75%;\n  stroke: lime;\n}\n\ncircle.pierce:hover {\n  fill: yellow;\n  stroke: red;\n}\n\n@keyframes dash {\n  from {\n  stroke-dashoffset: 0%;\n  }\n  to {\n  stroke-dashoffset: -2%;\n  }\n}\n</style>\n"+ht()+"\n</head><body>\n"+pt()+"\n"+((t=ct.routeLength)?"\x3c!--\nRoute Length     : "+t+"\n--\x3e":"")+"\n</body></html>"
var t},St=function(){var t,n,e,r,o,i,a,s,l,u
if(t=dt(mt),(n=t()).h||!n.length)return void t.help()
kt.hideIcons=n.c,n.s&&(kt.startPointMode=function(){
switch(n.s.charAt(0).toLowerCase()){case"a":return 0
case"f":return 1
case"l":return 2
default:throw Error("Invalid value: --start="+n.s)}}())
for(console.log("Reading files..."),e=0,r=n.length;e<r;++e)o=e,i=n[e],console.log(o+1+".\t"+i),
a=gt.readFileSync(i,{encoding:"utf-8"
}),(s=vt(a,i))?console.log("\t"+s+":\t"+yt[s].info):console.log("\t^ Unknown format")
yt.discrete.data||(console.error("Insufficient data"),process.exit(1))
xt(),(l=bt.routeLength)&&console.log("Route length:",l)
u=yt.discrete.name+".html",n.o&&function(){try{
return gt.statSync(n.o).isDirectory()}catch(t){}
}()&&(u=ft.join(n.o,ft.basename(u)))
if(console.log("Writing to:\n\t"+u),!n.f&&gt.existsSync(u))throw Error("Skipping existing file: "+u)
gt.writeFileSync(u,wt(),{encoding:"utf-8"}),console.log("That's all folks!")}
try{St()}catch(t){zt=t,console.log("Error:",zt.message)}
//# sourceMappingURL=cli.js.map
