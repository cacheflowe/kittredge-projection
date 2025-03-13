var D1=Object.defineProperty;var I1=(l,e,t)=>e in l?D1(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var Pi=(l,e,t)=>I1(l,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();var pc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Mv(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}function Ev(l){if(l.__esModule)return l;var e=l.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(l).forEach(function(n){var i=Object.getOwnPropertyDescriptor(l,n);Object.defineProperty(t,n,i.get?i:{enumerable:!0,get:function(){return l[n]}})}),t}var sc={exports:{}},O1=sc.exports,Kp;function F1(){return Kp||(Kp=1,function(l,e){(function(t,n){l.exports=n()})(O1,function(){/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function a(F){if(F==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(F)}function o(){try{if(!Object.assign)return!1;var F=new String("abc");if(F[5]="de",Object.getOwnPropertyNames(F)[0]==="5")return!1;for(var C={},q=0;q<10;q++)C["_"+String.fromCharCode(q)]=q;var ne=Object.getOwnPropertyNames(C).map(function(Re){return C[Re]});if(ne.join("")!=="0123456789")return!1;var De={};return"abcdefghijklmnopqrst".split("").forEach(function(Re){De[Re]=Re}),Object.keys(Object.assign({},De)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var s=o()?Object.assign:function(F,C){for(var q,ne=a(F),De,Re=1;Re<arguments.length;Re++){q=Object(arguments[Re]);for(var Xe in q)n.call(q,Xe)&&(ne[Xe]=q[Xe]);if(t){De=t(q);for(var tt=0;tt<De.length;tt++)i.call(q,De[tt])&&(ne[De[tt]]=q[De[tt]])}}return ne},u=typeof window<"u"?window:typeof pc<"u"?pc:typeof self<"u"?self:{};function c(F,C){return C={exports:{}},F(C,C.exports),C.exports}var f=u.performance&&u.performance.now?function(){return performance.now()}:Date.now||function(){return+new Date},h=d;function d(F){return!!F&&(typeof F=="object"||typeof F=="function")&&typeof F.then=="function"}var v=x;function x(F){return!F||typeof F!="object"?!1:typeof window=="object"&&typeof window.Node=="object"?F instanceof window.Node:typeof F.nodeType=="number"&&typeof F.nodeName=="string"}function p(){return typeof window<"u"&&window["canvas-sketch-cli"]}function m(){for(var F=arguments,C=0;C<arguments.length;C++)if(F[C]!=null)return F[C]}function _(){return typeof document<"u"}function E(F){return F&&typeof F.clear=="function"&&typeof F.clearColor=="function"&&typeof F.bufferData=="function"}function T(F){return F&&typeof F.save=="function"&&typeof F.scale=="function"&&typeof F.restore=="function"}function A(F){return v(F)&&/canvas/i.test(F.nodeName)&&typeof F.getContext=="function"}var w=c(function(F,C){C=F.exports=typeof Object.keys=="function"?Object.keys:q,C.shim=q;function q(ne){var De=[];for(var Re in ne)De.push(Re);return De}});w.shim;var I=c(function(F,C){var q=function(){return Object.prototype.toString.call(arguments)}()=="[object Arguments]";C=F.exports=q?ne:De,C.supported=ne;function ne(Re){return Object.prototype.toString.call(Re)=="[object Arguments]"}C.unsupported=De;function De(Re){return Re&&typeof Re=="object"&&typeof Re.length=="number"&&Object.prototype.hasOwnProperty.call(Re,"callee")&&!Object.prototype.propertyIsEnumerable.call(Re,"callee")||!1}});I.supported,I.unsupported;var P=c(function(F){var C=Array.prototype.slice,q=F.exports=function(Xe,tt,ut){return ut||(ut={}),Xe===tt?!0:Xe instanceof Date&&tt instanceof Date?Xe.getTime()===tt.getTime():!Xe||!tt||typeof Xe!="object"&&typeof tt!="object"?ut.strict?Xe===tt:Xe==tt:Re(Xe,tt,ut)};function ne(Xe){return Xe==null}function De(Xe){return!(!Xe||typeof Xe!="object"||typeof Xe.length!="number"||typeof Xe.copy!="function"||typeof Xe.slice!="function"||Xe.length>0&&typeof Xe[0]!="number")}function Re(Xe,tt,ut){var xt,Nt;if(ne(Xe)||ne(tt)||Xe.prototype!==tt.prototype)return!1;if(I(Xe))return I(tt)?(Xe=C.call(Xe),tt=C.call(tt),q(Xe,tt,ut)):!1;if(De(Xe)){if(!De(tt)||Xe.length!==tt.length)return!1;for(xt=0;xt<Xe.length;xt++)if(Xe[xt]!==tt[xt])return!1;return!0}try{var Et=w(Xe),un=w(tt)}catch{return!1}if(Et.length!=un.length)return!1;for(Et.sort(),un.sort(),xt=Et.length-1;xt>=0;xt--)if(Et[xt]!=un[xt])return!1;for(xt=Et.length-1;xt>=0;xt--)if(Nt=Et[xt],!q(Xe[Nt],tt[Nt],ut))return!1;return typeof Xe==typeof tt}}),M=c(function(F,C){(function(q){var ne=function(){var ut=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g,xt=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,Nt=/[^-+\dA-Z]/g;return function(Et,un,mn,U){if(arguments.length===1&&tt(Et)==="string"&&!/\d/.test(Et)&&(un=Et,Et=void 0),Et=Et||new Date,Et instanceof Date||(Et=new Date(Et)),isNaN(Et))throw TypeError("Invalid date");un=String(ne.masks[un]||un||ne.masks.default);var ve=un.slice(0,4);(ve==="UTC:"||ve==="GMT:")&&(un=un.slice(4),mn=!0,ve==="GMT:"&&(U=!0));var Oe=mn?"getUTC":"get",ce=Et[Oe+"Date"](),je=Et[Oe+"Day"](),Ft=Et[Oe+"Month"](),qt=Et[Oe+"FullYear"](),jt=Et[Oe+"Hours"](),en=Et[Oe+"Minutes"](),fn=Et[Oe+"Seconds"](),cn=Et[Oe+"Milliseconds"](),on=mn?0:Et.getTimezoneOffset(),wn=Re(Et),Xn=Xe(Et),lr={d:ce,dd:De(ce),ddd:ne.i18n.dayNames[je],dddd:ne.i18n.dayNames[je+7],m:Ft+1,mm:De(Ft+1),mmm:ne.i18n.monthNames[Ft],mmmm:ne.i18n.monthNames[Ft+12],yy:String(qt).slice(2),yyyy:qt,h:jt%12||12,hh:De(jt%12||12),H:jt,HH:De(jt),M:en,MM:De(en),s:fn,ss:De(fn),l:De(cn,3),L:De(Math.round(cn/10)),t:jt<12?ne.i18n.timeNames[0]:ne.i18n.timeNames[1],tt:jt<12?ne.i18n.timeNames[2]:ne.i18n.timeNames[3],T:jt<12?ne.i18n.timeNames[4]:ne.i18n.timeNames[5],TT:jt<12?ne.i18n.timeNames[6]:ne.i18n.timeNames[7],Z:U?"GMT":mn?"UTC":(String(Et).match(xt)||[""]).pop().replace(Nt,""),o:(on>0?"-":"+")+De(Math.floor(Math.abs(on)/60)*100+Math.abs(on)%60,4),S:["th","st","nd","rd"][ce%10>3?0:(ce%100-ce%10!=10)*ce%10],W:wn,N:Xn};return un.replace(ut,function(cr){return cr in lr?lr[cr]:cr.slice(1,cr.length-1)})}}();ne.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},ne.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]};function De(ut,xt){for(ut=String(ut),xt=xt||2;ut.length<xt;)ut="0"+ut;return ut}function Re(ut){var xt=new Date(ut.getFullYear(),ut.getMonth(),ut.getDate());xt.setDate(xt.getDate()-(xt.getDay()+6)%7+3);var Nt=new Date(xt.getFullYear(),0,4);Nt.setDate(Nt.getDate()-(Nt.getDay()+6)%7+3);var Et=xt.getTimezoneOffset()-Nt.getTimezoneOffset();xt.setHours(xt.getHours()-Et);var un=(xt-Nt)/(864e5*7);return 1+Math.floor(un)}function Xe(ut){var xt=ut.getDay();return xt===0&&(xt=7),xt}function tt(ut){return ut===null?"null":ut===void 0?"undefined":typeof ut!="object"?typeof ut:Array.isArray(ut)?"array":{}.toString.call(ut).slice(8,-1).toLowerCase()}F.exports=ne})()});/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */var L="",D,z=Q;function Q(F,C){if(typeof F!="string")throw new TypeError("expected a string");if(C===1)return F;if(C===2)return F+F;var q=F.length*C;if(D!==F||typeof D>"u")D=F,L="";else if(L.length>=q)return L.substr(0,q);for(;q>L.length&&C>1;)C&1&&(L+=F),C>>=1,F+=F;return L+=F,L=L.substr(0,q),L}var J=function(C,q,ne){return C=C.toString(),typeof q>"u"?C:(ne===0?ne="0":ne?ne=ne.toString():ne=" ",z(ne,q-C.length)+C)},Y=function(){},re,me={extension:"",prefix:"",suffix:""},ge=["image/png","image/jpeg","image/webp"];function ae(F,C){return C===void 0&&(C={}),new Promise(function(q,ne){C=s({},me,C);var De=It(Object.assign({},C,{extension:"",frame:void 0})),Re=F?"streamStart":"streamEnd",Xe=p();return Xe&&Xe.output&&typeof Xe[Re]=="function"?Xe[Re](s({},C,{filename:De})).then(function(tt){return q(tt)}):q({filename:De,client:!1})})}function Le(F){return F===void 0&&(F={}),ae(!0,F)}function Me(F){return F===void 0&&(F={}),ae(!1,F)}function fe(F,C){C===void 0&&(C={});var q=C.encoding||"image/png";if(!ge.includes(q))throw new Error("Invalid canvas encoding "+q);var ne=(q.split("/")[1]||"").replace(/jpeg/i,"jpg");return ne&&(ne=("."+ne).toLowerCase()),{extension:ne,type:q,dataURL:F.toDataURL(q,C.encodingQuality)}}function V(F){return new Promise(function(C){var q=F.indexOf(",");if(q===-1){C(new window.Blob);return}for(var ne=F.slice(q+1),De=window.atob(ne),Re=F.slice(0,q),Xe=/data:([^;]+)/.exec(Re),tt=(Xe?Xe[1]:"")||void 0,ut=new ArrayBuffer(De.length),xt=new Uint8Array(ut),Nt=0;Nt<De.length;Nt++)xt[Nt]=De.charCodeAt(Nt);C(new window.Blob([ut],{type:tt}))})}function le(F,C){return C===void 0&&(C={}),V(F).then(function(q){return de(q,C)})}function de(F,C){return C===void 0&&(C={}),new Promise(function(q){C=s({},me,C);var ne=C.filename,De=p();if(De&&typeof De.saveBlob=="function"&&De.output)return De.saveBlob(F,s({},C,{filename:ne})).then(function(Re){return q(Re)});re||(re=document.createElement("a"),re.style.visibility="hidden",re.target="_blank"),re.download=ne,re.href=window.URL.createObjectURL(F),document.body.appendChild(re),re.onclick=function(){re.onclick=Y,setTimeout(function(){window.URL.revokeObjectURL(F),re.parentElement&&re.parentElement.removeChild(re),re.removeAttribute("href"),q({filename:ne,client:!1})})},re.click()})}function Fe(F,C){C===void 0&&(C={});var q=Array.isArray(F)?F:[F],ne=new window.Blob(q,{type:C.type||""});return de(ne,C)}function Se(){var F="yyyy.mm.dd-HH.MM.ss";return M(new Date,F)}function It(F){if(F===void 0&&(F={}),F=s({},F),typeof F.file=="function")return F.file(F);if(F.file)return F.file;var C=null,q="";if(typeof F.extension=="string"&&(q=F.extension),typeof F.frame=="number"){var ne;typeof F.totalFrames=="number"?ne=F.totalFrames:ne=Math.max(1e4,F.frame),C=J(String(F.frame),String(ne).length,"0")}var De=isFinite(F.totalLayers)&&isFinite(F.layer)&&F.totalLayers>1?""+F.layer:"";if(C!=null)return[De,C].filter(Boolean).join("-")+q;var Re=F.timeStamp;return[F.prefix,F.name||Re,De,F.hash,F.suffix].filter(Boolean).join("-")+q}var _t={dimension:"dimensions",animated:"animate",animating:"animate",unit:"units",P5:"p5",pixellated:"pixelated",looping:"loop",pixelPerInch:"pixels"},Dt=["dimensions","units","pixelsPerInch","orientation","scaleToFit","scaleToView","bleed","pixelRatio","exportPixelRatio","maxPixelRatio","scaleContext","resizeCanvas","styleCanvas","canvas","context","attributes","parent","file","name","prefix","suffix","animate","playing","loop","duration","totalFrames","fps","playbackRate","timeScale","frame","time","flush","pixelated","hotkeys","p5","id","scaleToFitPadding","data","params","encoding","encodingQuality"],bt=function(F){var C=Object.keys(F);C.forEach(function(q){if(q in _t){var ne=_t[q];console.warn('[canvas-sketch] Could not recognize the setting "'+q+'", did you mean "'+ne+'"?')}else Dt.includes(q)||console.warn('[canvas-sketch] Could not recognize the setting "'+q+'"')})};function ye(F){F===void 0&&(F={});var C=function(De){if(F.enabled()){var Re=p();De.keyCode===83&&!De.altKey&&(De.metaKey||De.ctrlKey)?(De.preventDefault(),F.save(De)):De.keyCode===32?F.togglePlay(De):Re&&!De.altKey&&De.keyCode===75&&(De.metaKey||De.ctrlKey)&&(De.preventDefault(),F.commit(De))}},q=function(){window.addEventListener("keydown",C)},ne=function(){window.removeEventListener("keydown",C)};return{attach:q,detach:ne}}var qe="mm",Ce=[["postcard",101.6,152.4],["poster-small",280,430],["poster",460,610],["poster-large",610,910],["business-card",50.8,88.9],["2r",64,89],["3r",89,127],["4r",102,152],["5r",127,178],["6r",152,203],["8r",203,254],["10r",254,305],["11r",279,356],["12r",305,381],["a0",841,1189],["a1",594,841],["a2",420,594],["a3",297,420],["a4",210,297],["a5",148,210],["a6",105,148],["a7",74,105],["a8",52,74],["a9",37,52],["a10",26,37],["2a0",1189,1682],["4a0",1682,2378],["b0",1e3,1414],["b1",707,1e3],["b1+",720,1020],["b2",500,707],["b2+",520,720],["b3",353,500],["b4",250,353],["b5",176,250],["b6",125,176],["b7",88,125],["b8",62,88],["b9",44,62],["b10",31,44],["b11",22,32],["b12",16,22],["c0",917,1297],["c1",648,917],["c2",458,648],["c3",324,458],["c4",229,324],["c5",162,229],["c6",114,162],["c7",81,114],["c8",57,81],["c9",40,57],["c10",28,40],["c11",22,32],["c12",16,22],["half-letter",5.5,8.5,"in"],["letter",8.5,11,"in"],["legal",8.5,14,"in"],["junior-legal",5,8,"in"],["ledger",11,17,"in"],["tabloid",11,17,"in"],["ansi-a",8.5,11,"in"],["ansi-b",11,17,"in"],["ansi-c",17,22,"in"],["ansi-d",22,34,"in"],["ansi-e",34,44,"in"],["arch-a",9,12,"in"],["arch-b",12,18,"in"],["arch-c",18,24,"in"],["arch-d",24,36,"in"],["arch-e",36,48,"in"],["arch-e1",30,42,"in"],["arch-e2",26,38,"in"],["arch-e3",27,39,"in"]],$e=Ce.reduce(function(F,C){var q={units:C[3]||qe,dimensions:[C[1],C[2]]};return F[C[0]]=q,F[C[0].replace(/-/g," ")]=q,F},{}),Je=function(){for(var F=0;F<arguments.length;F++)if(arguments[F]!==void 0)return arguments[F]},Ve=["mm","cm","m","pc","pt","in","ft","px"],ft={m:{system:"metric",factor:1},cm:{system:"metric",factor:1/100},mm:{system:"metric",factor:1/1e3},pt:{system:"imperial",factor:1/72},pc:{system:"imperial",factor:1/6},in:{system:"imperial",factor:1},ft:{system:"imperial",factor:12}};const ht={metric:{unit:"m",ratio:1/.0254},imperial:{unit:"in",ratio:.0254}};function St(F,C){return+(Math.round(F+"e"+C)+"e-"+C)}function pn(F,C,q,ne){if(typeof F!="number"||!isFinite(F))throw new Error("Value must be a finite number");if(!C||!q)throw new Error("Must specify from and to units");ne=ne||{};var De=Je(ne.pixelsPerInch,96),Re=ne.precision,Xe=ne.roundPixel!==!1;if(C=C.toLowerCase(),q=q.toLowerCase(),Ve.indexOf(C)===-1)throw new Error('Invalid from unit "'+C+'", must be one of: '+Ve.join(", "));if(Ve.indexOf(q)===-1)throw new Error('Invalid from unit "'+q+'", must be one of: '+Ve.join(", "));if(C===q)return F;var tt=1,ut=1,xt=!1;C==="px"&&(ut=1/De,C="in"),q==="px"&&(xt=!0,tt=De,q="in");var Nt=ft[C],Et=ft[q],un=F*Nt.factor*ut;Nt.system!==Et.system&&(un*=ht[Nt.system].ratio);var mn=un/Et.factor*tt;return xt&&Xe?mn=Math.round(mn):typeof Re=="number"&&isFinite(Re)&&(mn=St(mn,Re)),mn}var Sn=pn,W=Ve;Sn.units=W;function y(F,C,q){if(C===void 0&&(C="px"),q===void 0&&(q=72),typeof F=="string"){var ne=F.toLowerCase();if(!(ne in $e))throw new Error('The dimension preset "'+F+'" is not supported or could not be found; try using a4, a3, postcard, letter, etc.');var De=$e[ne];return De.dimensions.map(function(Re){return ke(Re,De.units,C,q)})}else return F}function ke(F,C,q,ne){return C===void 0&&(C="px"),q===void 0&&(q="px"),ne===void 0&&(ne=72),Sn(F,C,q,{pixelsPerInch:ne,precision:4,roundPixel:!0})}function mt(F){return F.dimensions?!!(typeof F.dimensions=="string"||Array.isArray(F.dimensions)&&F.dimensions.length>=2):!1}function gt(F,C){if(!_())return[300,150];var q=C.parent||window;if(q===window||q===document||q===document.body)return[window.innerWidth,window.innerHeight];var ne=q.getBoundingClientRect(),De=ne.width,Re=ne.height;return[De,Re]}function Pt(F,C){var q,ne,De,Re,Xe,tt,ut=_(),xt=C.dimensions,Nt=mt(C),Et=F.exporting,un=Nt?C.scaleToFit!==!1:!1,mn=!Et&&Nt?C.scaleToView:!0;ut||(un=mn=!1);var U=C.units,ve=typeof C.pixelsPerInch=="number"&&isFinite(C.pixelsPerInch)?C.pixelsPerInch:72,Oe=m(C.bleed,0),ce=ut?window.devicePixelRatio:1,je=mn?ce:1,Ft,qt;typeof C.pixelRatio=="number"&&isFinite(C.pixelRatio)?(Ft=C.pixelRatio,qt=m(C.exportPixelRatio,Ft)):Nt?(Ft=je,qt=m(C.exportPixelRatio,1)):(Ft=ce,qt=m(C.exportPixelRatio,Ft)),typeof C.maxPixelRatio=="number"&&isFinite(C.maxPixelRatio)&&(Ft=Math.min(C.maxPixelRatio,Ft)),Et&&(Ft=qt);var jt=gt(F,C),en=jt[0],fn=jt[1],cn,on;if(Nt){var wn=y(xt,U,ve),Xn=Math.max(wn[0],wn[1]),lr=Math.min(wn[0],wn[1]);if(C.orientation){var cr=C.orientation==="landscape";q=cr?Xn:lr,ne=cr?lr:Xn}else q=wn[0],ne=wn[1];cn=q,on=ne,q+=Oe*2,ne+=Oe*2}else q=en,ne=fn,cn=q,on=ne;var En=q,hn=ne;if(Nt&&U&&(En=ke(q,U,"px",ve),hn=ke(ne,U,"px",ve)),De=Math.round(En),Re=Math.round(hn),un&&!Et&&Nt){var Ti=q/ne,Nn=en/fn,$r=m(C.scaleToFitPadding,40),ha=Math.round(en-$r*2),di=Math.round(fn-$r*2);(De>ha||Re>di)&&(Nn>Ti?(Re=di,De=Math.round(Re*Ti)):(De=ha,Re=Math.round(De/Ti)))}Xe=Math.round(mn?Ft*De:Ft*En),tt=Math.round(mn?Ft*Re:Ft*hn);var da=Math.round(mn?De:En),Qn=Math.round(mn?Re:hn),ni=Xe/q,pa=tt/ne;return{bleed:Oe,pixelRatio:Ft,width:q,height:ne,dimensions:[q,ne],units:U||"px",scaleX:ni,scaleY:pa,pixelsPerInch:ve,viewportWidth:da,viewportHeight:Qn,canvasWidth:Xe,canvasHeight:tt,trimWidth:cn,trimHeight:on,styleWidth:De,styleHeight:Re}}var Gt=Z;function Z(F,C){if(typeof F!="string")throw new TypeError("must specify type string");if(C=C||{},typeof document>"u"&&!C.canvas)return null;var q=C.canvas||document.createElement("canvas");typeof C.width=="number"&&(q.width=C.width),typeof C.height=="number"&&(q.height=C.height);var ne=C,De;try{var Re=[F];F.indexOf("webgl")===0&&Re.push("experimental-"+F);for(var Xe=0;Xe<Re.length;Xe++)if(De=q.getContext(Re[Xe],ne),De)return De}catch{De=null}return De||null}function _e(){if(!_())throw new Error("It appears you are runing from Node.js or a non-browser environment. Try passing in an existing { canvas } interface instead.");return document.createElement("canvas")}function Lt(F){F===void 0&&(F={});var C,q,ne=!1;if(F.canvas!==!1){if(C=F.context,!C||typeof C=="string"){var De=F.canvas;De||(De=_e(),ne=!0);var Re=C||"2d";if(typeof De.getContext!="function")throw new Error("The specified { canvas } element does not have a getContext() function, maybe it is not a <canvas> tag?");if(C=Gt(Re,s({},F.attributes,{canvas:De})),!C)throw new Error("Failed at canvas.getContext('"+Re+"') - the browser may not support this context, or a different context may already be in use with this canvas.")}if(q=C.canvas,F.canvas&&q!==F.canvas)throw new Error("The { canvas } and { context } settings must point to the same underlying canvas element");F.pixelated&&(C.imageSmoothingEnabled=!1,C.mozImageSmoothingEnabled=!1,C.oImageSmoothingEnabled=!1,C.webkitImageSmoothingEnabled=!1,C.msImageSmoothingEnabled=!1,q.style["image-rendering"]="pixelated")}return{canvas:q,context:C,ownsCanvas:ne}}var rt=function(){var C=this;this._settings={},this._props={},this._sketch=void 0,this._raf=null,this._recordTimeout=null,this._lastRedrawResult=void 0,this._isP5Resizing=!1,this._keyboardShortcuts=ye({enabled:function(){return C.settings.hotkeys!==!1},save:function(q){q.shiftKey?C.props.recording?(C.endRecord(),C.run()):C.record():C.props.recording||C.exportFrame()},togglePlay:function(){C.props.playing?C.pause():C.play()},commit:function(q){C.exportFrame({commit:!0})}}),this._animateHandler=function(){return C.animate()},this._resizeHandler=function(){var q=C.resize();q&&C.render()}},Mt={sketch:{configurable:!0},settings:{configurable:!0},props:{configurable:!0}};Mt.sketch.get=function(){return this._sketch},Mt.settings.get=function(){return this._settings},Mt.props.get=function(){return this._props},rt.prototype._computePlayhead=function(C,q){var ne=typeof q=="number"&&isFinite(q);return ne?C/q:0},rt.prototype._computeFrame=function(C,q,ne,De){return isFinite(ne)&&ne>1?Math.floor(C*(ne-1)):Math.floor(De*q)},rt.prototype._computeCurrentFrame=function(){return this._computeFrame(this.props.playhead,this.props.time,this.props.totalFrames,this.props.fps)},rt.prototype._getSizeProps=function(){var C=this.props;return{width:C.width,height:C.height,pixelRatio:C.pixelRatio,canvasWidth:C.canvasWidth,canvasHeight:C.canvasHeight,viewportWidth:C.viewportWidth,viewportHeight:C.viewportHeight}},rt.prototype.run=function(){if(!this.sketch)throw new Error("should wait until sketch is loaded before trying to play()");return this.settings.playing!==!1&&this.play(),typeof this.sketch.dispose=="function"&&console.warn("In canvas-sketch@0.0.23 the dispose() event has been renamed to unload()"),this.props.started||(this._signalBegin(),this.props.started=!0),this.tick(),this.render(),this},rt.prototype._cancelTimeouts=function(){this._raf!=null&&typeof window<"u"&&typeof window.cancelAnimationFrame=="function"&&(window.cancelAnimationFrame(this._raf),this._raf=null),this._recordTimeout!=null&&(clearTimeout(this._recordTimeout),this._recordTimeout=null)},rt.prototype.play=function(){var C=this.settings.animate;if("animation"in this.settings&&(C=!0,console.warn("[canvas-sketch] { animation } has been renamed to { animate }")),!!C){if(!_()){console.error("[canvas-sketch] WARN: Using { animate } in Node.js is not yet supported");return}this.props.playing||(this.props.started||(this._signalBegin(),this.props.started=!0),this.props.playing=!0,this._cancelTimeouts(),this._lastTime=f(),this._raf=window.requestAnimationFrame(this._animateHandler))}},rt.prototype.pause=function(){this.props.recording&&this.endRecord(),this.props.playing=!1,this._cancelTimeouts()},rt.prototype.togglePlay=function(){this.props.playing?this.pause():this.play()},rt.prototype.stop=function(){this.pause(),this.props.frame=0,this.props.playhead=0,this.props.time=0,this.props.deltaTime=0,this.props.started=!1,this.render()},rt.prototype.record=function(){var C=this;if(!this.props.recording){if(!_()){console.error("[canvas-sketch] WARN: Recording from Node.js is not yet supported");return}this.stop(),this.props.playing=!0,this.props.recording=!0;var q=this._createExportOptions({sequence:!0}),ne=1/this.props.fps;this._cancelTimeouts();var De=function(){return C.props.recording?(C.props.deltaTime=ne,C.tick(),C.exportFrame(q).then(function(){C.props.recording&&(C.props.deltaTime=0,C.props.frame++,C.props.frame<C.props.totalFrames?(C.props.time+=ne,C.props.playhead=C._computePlayhead(C.props.time,C.props.duration),C._recordTimeout=setTimeout(De,0)):(console.log("Finished recording"),C._signalEnd(),C.endRecord(),C.stop(),C.run()))})):Promise.resolve()};this.props.started||(this._signalBegin(),this.props.started=!0),this.sketch&&typeof this.sketch.beginRecord=="function"&&this._wrapContextScale(function(Re){return C.sketch.beginRecord(Re)}),Le(q).catch(function(Re){console.error(Re)}).then(function(Re){C._raf=window.requestAnimationFrame(De)})}},rt.prototype._signalBegin=function(){var C=this;this.sketch&&typeof this.sketch.begin=="function"&&this._wrapContextScale(function(q){return C.sketch.begin(q)})},rt.prototype._signalEnd=function(){var C=this;this.sketch&&typeof this.sketch.end=="function"&&this._wrapContextScale(function(q){return C.sketch.end(q)})},rt.prototype.endRecord=function(){var C=this,q=this.props.recording;return this._cancelTimeouts(),this.props.recording=!1,this.props.deltaTime=0,this.props.playing=!1,Me().catch(function(ne){console.error(ne)}).then(function(){q&&C.sketch&&typeof C.sketch.endRecord=="function"&&C._wrapContextScale(function(ne){return C.sketch.endRecord(ne)})})},rt.prototype._createExportOptions=function(C){return C===void 0&&(C={}),{sequence:C.sequence,save:C.save,fps:this.props.fps,frame:C.sequence?this.props.frame:void 0,file:this.settings.file,name:this.settings.name,prefix:this.settings.prefix,suffix:this.settings.suffix,encoding:this.settings.encoding,encodingQuality:this.settings.encodingQuality,timeStamp:C.timeStamp||Se(),totalFrames:isFinite(this.props.totalFrames)?Math.max(0,this.props.totalFrames):1e3}},rt.prototype.exportFrame=function(C){var q=this;if(C===void 0&&(C={}),!this.sketch)return Promise.all([]);typeof this.sketch.preExport=="function"&&this.sketch.preExport();var ne=this._createExportOptions(C),De=p(),Re=Promise.resolve();if(De&&C.commit&&typeof De.commit=="function"){var Xe=s({},ne),tt=De.commit(Xe);h(tt)?Re=tt:Re=Promise.resolve(tt)}return Re.then(function(ut){return q._doExportFrame(s({},ne,{hash:ut||""}))}).then(function(ut){return ut.length===1?ut[0]:ut})},rt.prototype._doExportFrame=function(C){var q=this;C===void 0&&(C={}),this._props.exporting=!0,this.resize();var ne=this.render(),De=this.props.canvas;return typeof ne>"u"&&(ne=[De]),ne=[].concat(ne).filter(Boolean),ne=ne.map(function(Re){var Xe=typeof Re=="object"&&Re&&("data"in Re||"dataURL"in Re),tt=Xe?Re.data:Re,ut=Xe?s({},Re,{data:tt}):{data:tt};if(A(tt)){var xt=ut.encoding||C.encoding,Nt=m(ut.encodingQuality,C.encodingQuality,.95),Et=fe(tt,{encoding:xt,encodingQuality:Nt}),un=Et.dataURL,mn=Et.extension,U=Et.type;return Object.assign(ut,{dataURL:un,extension:mn,type:U})}else return ut}),this._props.exporting=!1,this.resize(),this.render(),Promise.all(ne.map(function(Re,Xe,tt){var ut=s({extension:"",prefix:"",suffix:""},C,Re,{layer:Xe,totalLayers:tt.length}),xt=C.save===!1?!1:Re.save;ut.save=xt!==!1,ut.filename=It(ut),delete ut.encoding,delete ut.encodingQuality;for(var Nt in ut)typeof ut[Nt]>"u"&&delete ut[Nt];var Et=Promise.resolve({});if(ut.save){var un=ut.data;if(ut.dataURL){var mn=ut.dataURL;Et=le(mn,ut)}else Et=Fe(un,ut)}return Et.then(function(U){return Object.assign({},ut,U)})})).then(function(Re){var Xe=Re.filter(function(ve){return ve.save});if(Xe.length>0){var tt=Xe.find(function(ve){return ve.outputName}),ut=Xe.some(function(ve){return ve.client}),xt=Xe.some(function(ve){return ve.stream}),Nt;Xe.length>1?Nt=Xe.length:tt?Nt=tt.outputName+"/"+Xe[0].filename:Nt=""+Xe[0].filename;var Et="";if(C.sequence){var un=isFinite(q.props.totalFrames);Et=un?" (frame "+(C.frame+1)+" / "+q.props.totalFrames+")":" (frame "+C.frame+")"}else Xe.length>1&&(Et=" files");var mn=ut?"canvas-sketch-cli":"canvas-sketch",U=xt?"Streaming into":"Exported";console.log("%c["+mn+"]%c "+U+" %c"+Nt+"%c"+Et,"color: #8e8e8e;","color: initial;","font-weight: bold;","font-weight: initial;")}return typeof q.sketch.postExport=="function"&&q.sketch.postExport(),Re})},rt.prototype._wrapContextScale=function(C){this._preRender(),C(this.props),this._postRender()},rt.prototype._preRender=function(){var C=this.props;T(C.context)&&!C.p5?(C.context.save(),this.settings.scaleContext!==!1&&C.context.scale(C.scaleX,C.scaleY)):C.p5&&C.p5.scale(C.scaleX/C.pixelRatio,C.scaleY/C.pixelRatio)},rt.prototype._postRender=function(){var C=this.props;T(C.context)&&!C.p5&&C.context.restore(),C.gl&&this.settings.flush!==!1&&!C.p5&&C.gl.flush()},rt.prototype.tick=function(){this.sketch&&typeof this.sketch.tick=="function"&&(this._preRender(),this.sketch.tick(this.props),this._postRender())},rt.prototype.render=function(){return this.props.p5?(this._lastRedrawResult=void 0,this.props.p5.redraw(),this._lastRedrawResult):this.submitDrawCall()},rt.prototype.submitDrawCall=function(){if(this.sketch){var C=this.props;this._preRender();var q;return typeof this.sketch=="function"?q=this.sketch(C):typeof this.sketch.render=="function"&&(q=this.sketch.render(C)),this._postRender(),q}},rt.prototype.update=function(C){var q=this;C===void 0&&(C={});var ne=["animate"];Object.keys(C).forEach(function(mn){if(ne.indexOf(mn)>=0)throw new Error("Sorry, the { "+mn+" } option is not yet supported with update().")});var De=this._settings.canvas,Re=this._settings.context;for(var Xe in C){var tt=C[Xe];typeof tt<"u"&&(q._settings[Xe]=tt)}var ut=Object.assign({},this._settings,C);if("time"in C&&"frame"in C)throw new Error("You should specify { time } or { frame } but not both");if("time"in C?delete ut.frame:"frame"in C&&delete ut.time,"duration"in C&&"totalFrames"in C)throw new Error("You should specify { duration } or { totalFrames } but not both");"duration"in C?delete ut.totalFrames:"totalFrames"in C&&delete ut.duration,"data"in C&&(this._props.data=C.data);var xt=this.getTimeProps(ut);if(Object.assign(this._props,xt),De!==this._settings.canvas||Re!==this._settings.context){var Nt=Lt(this._settings),Et=Nt.canvas,un=Nt.context;this.props.canvas=Et,this.props.context=un,this._setupGLKey(),this._appendCanvasIfNeeded()}return C.p5&&typeof C.p5!="function"&&(this.props.p5=C.p5,this.props.p5.draw=function(){q._isP5Resizing||(q._lastRedrawResult=q.submitDrawCall())}),"playing"in C&&(C.playing?this.play():this.pause()),bt(this._settings),this.resize(),this.render(),this.props},rt.prototype.resize=function(){var C=this._getSizeProps(),q=this.settings,ne=this.props,De=Pt(ne,q);Object.assign(this._props,De);var Re=this.props,Xe=Re.pixelRatio,tt=Re.canvasWidth,ut=Re.canvasHeight,xt=Re.styleWidth,Nt=Re.styleHeight,Et=this.props.canvas;Et&&q.resizeCanvas!==!1&&(ne.p5?(Et.width!==tt||Et.height!==ut)&&(this._isP5Resizing=!0,ne.p5.pixelDensity(Xe),ne.p5.resizeCanvas(tt/Xe,ut/Xe,!1),this._isP5Resizing=!1):(Et.width!==tt&&(Et.width=tt),Et.height!==ut&&(Et.height=ut)),_()&&q.styleCanvas!==!1&&(Et.style.width=xt+"px",Et.style.height=Nt+"px"));var un=this._getSizeProps(),mn=!P(C,un);return mn&&this._sizeChanged(),mn},rt.prototype._sizeChanged=function(){this.sketch&&typeof this.sketch.resize=="function"&&this.sketch.resize(this.props)},rt.prototype.animate=function(){if(this.props.playing){if(!_()){console.error("[canvas-sketch] WARN: Animation in Node.js is not yet supported");return}this._raf=window.requestAnimationFrame(this._animateHandler);var C=f(),q=this.props.fps,ne=1e3/q,De=C-this._lastTime,Re=this.props.duration,Xe=typeof Re=="number"&&isFinite(Re),tt=!0,ut=this.settings.playbackRate;ut==="fixed"?De=ne:ut==="throttle"?De>ne?(C=C-De%ne,this._lastTime=C):tt=!1:this._lastTime=C;var xt=De/1e3,Nt=this.props.time+xt*this.props.timeScale;Nt<0&&Xe&&(Nt=Re+Nt);var Et=!1,un=!1,mn=this.settings.loop!==!1;if(Xe&&Nt>=Re&&(mn?(tt=!0,Nt=Nt%Re,un=!0):(tt=!1,Nt=Re,Et=!0),this._signalEnd()),tt){this.props.deltaTime=xt,this.props.time=Nt,this.props.playhead=this._computePlayhead(Nt,Re);var U=this.props.frame;this.props.frame=this._computeCurrentFrame(),un&&this._signalBegin(),U!==this.props.frame&&this.tick(),this.render(),this.props.deltaTime=0}Et&&this.pause()}},rt.prototype.dispatch=function(C){if(typeof C!="function")throw new Error("must pass function into dispatch()");C(this.props),this.render()},rt.prototype.mount=function(){this._appendCanvasIfNeeded()},rt.prototype.unmount=function(){_()&&(window.removeEventListener("resize",this._resizeHandler),this._keyboardShortcuts.detach()),this.props.canvas.parentElement&&this.props.canvas.parentElement.removeChild(this.props.canvas)},rt.prototype._appendCanvasIfNeeded=function(){if(_()&&this.settings.parent!==!1&&this.props.canvas&&!this.props.canvas.parentElement){var C=this.settings.parent||document.body;C.appendChild(this.props.canvas)}},rt.prototype._setupGLKey=function(){this.props.context&&(E(this.props.context)?this._props.gl=this.props.context:delete this._props.gl)},rt.prototype.getTimeProps=function(C){C===void 0&&(C={});var q=C.duration,ne=C.totalFrames,De=m(C.timeScale,1),Re=m(C.fps,24),Xe=typeof q=="number"&&isFinite(q),tt=typeof ne=="number"&&isFinite(ne),ut=Xe?Math.floor(Re*q):void 0,xt=tt?ne/Re:void 0;if(Xe&&tt&&ut!==ne)throw new Error("You should specify either duration or totalFrames, but not both. Or, they must match exactly.");typeof C.dimensions>"u"&&typeof C.units<"u"&&console.warn("You've specified a { units } setting but no { dimension }, so the units will be ignored."),ne=m(ne,ut,1/0),q=m(q,xt,1/0);var Nt=C.time,Et=C.frame,un=typeof Nt=="number"&&isFinite(Nt),mn=typeof Et=="number"&&isFinite(Et),U=0,ve=0,Oe=0;if(un&&mn)throw new Error("You should specify either start frame or time, but not both.");return un?(U=Nt,Oe=this._computePlayhead(U,q),ve=this._computeFrame(Oe,U,ne,Re)):mn&&(ve=Et,U=ve/Re,Oe=this._computePlayhead(U,q)),{playhead:Oe,time:U,frame:ve,duration:q,totalFrames:ne,fps:Re,timeScale:De}},rt.prototype.setup=function(C){var q=this;if(C===void 0&&(C={}),this.sketch)throw new Error("Multiple setup() calls not yet supported.");this._settings=Object.assign({},C,this._settings),bt(this._settings);var ne=Lt(this._settings),De=ne.context,Re=ne.canvas,Xe=this.getTimeProps(this._settings);this._props=Object.assign({},Xe,{canvas:Re,context:De,deltaTime:0,started:!1,exporting:!1,playing:!1,recording:!1,settings:this.settings,data:this.settings.data,render:function(){return q.render()},togglePlay:function(){return q.togglePlay()},dispatch:function(tt){return q.dispatch(tt)},tick:function(){return q.tick()},resize:function(){return q.resize()},update:function(tt){return q.update(tt)},exportFrame:function(tt){return q.exportFrame(tt)},record:function(){return q.record()},play:function(){return q.play()},pause:function(){return q.pause()},stop:function(){return q.stop()}}),this._setupGLKey(),this.resize()},rt.prototype.loadAndRun=function(C,q){var ne=this;return this.load(C,q).then(function(){return ne.run(),ne})},rt.prototype.unload=function(){var C=this;this.pause(),this.sketch&&(typeof this.sketch.unload=="function"&&this._wrapContextScale(function(q){return C.sketch.unload(q)}),this._sketch=null)},rt.prototype.destroy=function(){this.unload(),this.unmount()},rt.prototype.load=function(C,q){var ne=this;if(typeof C!="function")throw new Error(`The function must take in a function as the first parameter. Example:
  canvasSketcher(() => { ... }, settings)`);this.sketch&&this.unload(),typeof q<"u"&&this.update(q),this._preRender();var De=Promise.resolve();if(this.settings.p5){if(!_())throw new Error("[canvas-sketch] ERROR: Using p5.js in Node.js is not supported");De=new Promise(function(Re){var Xe=ne.settings.p5,tt;Xe.p5&&(tt=Xe.preload,Xe=Xe.p5);var ut=function(xt){tt&&(xt.preload=function(){return tt(xt)}),xt.setup=function(){var Nt=ne.props,Et=ne.settings.context==="webgl",un=Et?xt.WEBGL:xt.P2D;xt.noLoop(),xt.pixelDensity(Nt.pixelRatio),xt.createCanvas(Nt.viewportWidth,Nt.viewportHeight,un),Et&&ne.settings.attributes&&xt.setAttributes(ne.settings.attributes),ne.update({p5:xt,canvas:xt.canvas,context:xt._renderer.drawingContext}),Re()}};if(typeof Xe=="function")new Xe(ut);else{if(typeof window.createCanvas!="function")throw new Error(`{ p5 } setting is passed but can't find p5.js in global (window) scope. Maybe you did not create it globally?
new p5(); // <-- attaches to global scope`);ut(window)}})}return De.then(function(){var Re=C(ne.props);return h(Re)||(Re=Promise.resolve(Re)),Re}).then(function(Re){return Re||(Re={}),ne._sketch=Re,_()&&(ne._keyboardShortcuts.attach(),window.addEventListener("resize",ne._resizeHandler)),ne._postRender(),ne._sizeChanged(),ne}).catch(function(Re){throw console.warn(`Could not start sketch, the async loading function rejected with an error:
    Error: `+Re.message),Re})},Object.defineProperties(rt.prototype,Mt);var Ot="hot-id-cache",Tt=[];function Qt(){var F=p();return F&&F.hot}function an(F){var C=p();if(C)return C[Ot]=C[Ot]||{},C[Ot][F]}function xn(F,C){var q=p();q&&(q[Ot]=q[Ot]||{},q[Ot][F]=C)}function se(F,C){return C.animate?{time:F.props.time}:void 0}function Be(F,C){if(C===void 0&&(C={}),C.p5){if(C.canvas||C.context&&typeof C.context!="string")throw new Error(`In { p5 } mode, you can't pass your own canvas or context, unless the context is a "webgl" or "2d" string`);var q=typeof C.context=="string"?C.context:!1;C=Object.assign({},C,{canvas:!1,context:q})}var ne=Qt(),De;ne&&(De=m(C.id,"$__DEFAULT_CANVAS_SKETCH_ID__$"));var Re=ne&&typeof De=="string";Re&&Tt.includes(De)&&(console.warn("Warning: You have multiple calls to canvasSketch() in --hot mode. You must pass unique { id } strings in settings to enable hot reload across multiple sketches. ",De),Re=!1);var Xe=Promise.resolve();if(Re){Tt.push(De);var tt=an(De);if(tt){var ut=function(){var xt=se(tt.manager,C);return tt.manager.destroy(),xt};Xe=tt.load.then(ut).catch(ut)}}return Xe.then(function(xt){var Nt=new rt,Et;return F?(C=Object.assign({},C,xt),Nt.setup(C),Nt.mount(),Et=Nt.loadAndRun(F)):Et=Promise.resolve(Nt),Re&&xn(De,{load:Et,manager:Nt}),Et})}return Be.canvasSketch=Be,Be.PaperSizes=$e,Be})}(sc)),sc.exports}var N1=F1();const z1=Mv(N1),Tv={animate:!0,context:"webgl2",duration:1,loop:!0,fps:60,encoding:"image/png",encodingQuality:1,canvas:document.querySelector("#graphics canvas")};/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lh="147",vs={ROTATE:0,DOLLY:1,PAN:2},gs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},k1=0,Qp=1,B1=2,Av=1,U1=2,To=3,Vs=0,ti=1,na=2,sa=0,zs=1,Jp=2,em=3,tm=4,G1=5,Is=100,V1=101,H1=102,nm=103,rm=104,W1=200,q1=201,X1=202,j1=203,Cv=204,Pv=205,$1=206,Y1=207,Z1=208,K1=209,Q1=210,J1=0,ey=1,ty=2,th=3,ny=4,ry=5,iy=6,ay=7,Lv=0,sy=1,oy=2,Bi=0,ly=1,cy=2,uy=3,fy=4,hy=5,Rv=300,Hs=301,Ws=302,nh=303,rh=304,Sc=306,ih=1e3,wr=1001,ah=1002,dr=1003,im=1004,am=1005,Un=1006,dy=1007,Mc=1008,Xa=1009,py=1010,my=1011,Dv=1012,vy=1013,ka=1014,ki=1015,ja=1016,gy=1017,_y=1018,ks=1020,xy=1021,yy=1022,Br=1023,by=1024,wy=1025,Ua=1026,qs=1027,Sy=1028,My=1029,Ey=1030,Ty=1031,Ay=1033,Tu=33776,Au=33777,Cu=33778,Pu=33779,sm=35840,om=35841,lm=35842,cm=35843,Cy=36196,um=37492,fm=37496,hm=37808,dm=37809,pm=37810,mm=37811,vm=37812,gm=37813,_m=37814,xm=37815,ym=37816,bm=37817,wm=37818,Sm=37819,Mm=37820,Em=37821,Tm=36492,$a=3e3,In=3001,Py=3200,Ly=3201,Ry=0,Dy=1,gi="srgb",ko="srgb-linear",Lu=7680,Iy=519,Am=35044,Cm="300 es",sh=1035;class Ka{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const a=i.indexOf(t);a!==-1&&i.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let a=0,o=i.length;a<o;a++)i[a].call(this,e);e.target=null}}}const hr=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ru=Math.PI/180,Pm=180/Math.PI;function Yo(){const l=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hr[l&255]+hr[l>>8&255]+hr[l>>16&255]+hr[l>>24&255]+"-"+hr[e&255]+hr[e>>8&255]+"-"+hr[e>>16&15|64]+hr[e>>24&255]+"-"+hr[t&63|128]+hr[t>>8&255]+"-"+hr[t>>16&255]+hr[t>>24&255]+hr[n&255]+hr[n>>8&255]+hr[n>>16&255]+hr[n>>24&255]).toLowerCase()}function Er(l,e,t){return Math.max(e,Math.min(t,l))}function Oy(l,e){return(l%e+e)%e}function Du(l,e,t){return(1-t)*l+t*e}function Lm(l){return(l&l-1)===0&&l!==0}function oh(l){return Math.pow(2,Math.floor(Math.log(l)/Math.LN2))}function Rl(l,e){switch(e.constructor){case Float32Array:return l;case Uint16Array:return l/65535;case Uint8Array:return l/255;case Int16Array:return Math.max(l/32767,-1);case Int8Array:return Math.max(l/127,-1);default:throw new Error("Invalid component type.")}}function Or(l,e){switch(e.constructor){case Float32Array:return l;case Uint16Array:return Math.round(l*65535);case Uint8Array:return Math.round(l*255);case Int16Array:return Math.round(l*32767);case Int8Array:return Math.round(l*127);default:throw new Error("Invalid component type.")}}class Jt{constructor(e=0,t=0){Jt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*n-o*i+e.x,this.y=a*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gr{constructor(){Gr.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,a,o,s,u,c){const f=this.elements;return f[0]=e,f[1]=i,f[2]=s,f[3]=t,f[4]=a,f[5]=u,f[6]=n,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,o=n[0],s=n[3],u=n[6],c=n[1],f=n[4],h=n[7],d=n[2],v=n[5],x=n[8],p=i[0],m=i[3],_=i[6],E=i[1],T=i[4],A=i[7],w=i[2],I=i[5],P=i[8];return a[0]=o*p+s*E+u*w,a[3]=o*m+s*T+u*I,a[6]=o*_+s*A+u*P,a[1]=c*p+f*E+h*w,a[4]=c*m+f*T+h*I,a[7]=c*_+f*A+h*P,a[2]=d*p+v*E+x*w,a[5]=d*m+v*T+x*I,a[8]=d*_+v*A+x*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],o=e[4],s=e[5],u=e[6],c=e[7],f=e[8];return t*o*f-t*s*c-n*a*f+n*s*u+i*a*c-i*o*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],o=e[4],s=e[5],u=e[6],c=e[7],f=e[8],h=f*o-s*c,d=s*u-f*a,v=c*a-o*u,x=t*h+n*d+i*v;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/x;return e[0]=h*p,e[1]=(i*c-f*n)*p,e[2]=(s*n-i*o)*p,e[3]=d*p,e[4]=(f*t-i*u)*p,e[5]=(i*a-s*t)*p,e[6]=v*p,e[7]=(n*u-c*t)*p,e[8]=(o*t-n*a)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,a,o,s){const u=Math.cos(a),c=Math.sin(a);return this.set(n*u,n*c,-n*(u*o+c*s)+o+e,-i*c,i*u,-i*(-c*o+u*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Iu.makeScale(e,t)),this}rotate(e){return this.premultiply(Iu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Iu.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Iu=new Gr;function Iv(l){for(let e=l.length-1;e>=0;--e)if(l[e]>=65535)return!0;return!1}function Bo(l){return document.createElementNS("http://www.w3.org/1999/xhtml",l)}function Ga(l){return l<.04045?l*.0773993808:Math.pow(l*.9478672986+.0521327014,2.4)}function oc(l){return l<.0031308?l*12.92:1.055*Math.pow(l,.41666)-.055}const Ou={[gi]:{[ko]:Ga},[ko]:{[gi]:oc}},yr={legacyMode:!0,get workingColorSpace(){return ko},set workingColorSpace(l){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(l,e,t){if(this.legacyMode||e===t||!e||!t)return l;if(Ou[e]&&Ou[e][t]!==void 0){const n=Ou[e][t];return l.r=n(l.r),l.g=n(l.g),l.b=n(l.b),l}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(l,e){return this.convert(l,this.workingColorSpace,e)},toWorkingColorSpace:function(l,e){return this.convert(l,e,this.workingColorSpace)}},Ov={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={r:0,g:0,b:0},si={h:0,s:0,l:0},Dl={h:0,s:0,l:0};function Fu(l,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?l+(e-l)*6*t:t<1/2?e:t<2/3?l+(e-l)*6*(2/3-t):l}function Il(l,e){return e.r=l.r,e.g=l.g,e.b=l.b,e}let Cn=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yr.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=yr.workingColorSpace){return this.r=e,this.g=t,this.b=n,yr.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=yr.workingColorSpace){if(e=Oy(e,1),t=Er(t,0,1),n=Er(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,o=2*n-a;this.r=Fu(o,a,e+1/3),this.g=Fu(o,a,e),this.b=Fu(o,a,e-1/3)}return yr.toWorkingColorSpace(this,i),this}setStyle(e,t=gi){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let a;const o=i[1],s=i[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,yr.toWorkingColorSpace(this,t),n(a[4]),this;if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,yr.toWorkingColorSpace(this,t),n(a[4]),this;break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const u=parseFloat(a[1])/360,c=parseFloat(a[2])/100,f=parseFloat(a[3])/100;return n(a[4]),this.setHSL(u,c,f,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=i[1],o=a.length;if(o===3)return this.r=parseInt(a.charAt(0)+a.charAt(0),16)/255,this.g=parseInt(a.charAt(1)+a.charAt(1),16)/255,this.b=parseInt(a.charAt(2)+a.charAt(2),16)/255,yr.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(a.charAt(0)+a.charAt(1),16)/255,this.g=parseInt(a.charAt(2)+a.charAt(3),16)/255,this.b=parseInt(a.charAt(4)+a.charAt(5),16)/255,yr.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=gi){const n=Ov[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ga(e.r),this.g=Ga(e.g),this.b=Ga(e.b),this}copyLinearToSRGB(e){return this.r=oc(e.r),this.g=oc(e.g),this.b=oc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gi){return yr.fromWorkingColorSpace(Il(this,er),e),Er(er.r*255,0,255)<<16^Er(er.g*255,0,255)<<8^Er(er.b*255,0,255)<<0}getHexString(e=gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yr.workingColorSpace){yr.fromWorkingColorSpace(Il(this,er),t);const n=er.r,i=er.g,a=er.b,o=Math.max(n,i,a),s=Math.min(n,i,a);let u,c;const f=(s+o)/2;if(s===o)u=0,c=0;else{const h=o-s;switch(c=f<=.5?h/(o+s):h/(2-o-s),o){case n:u=(i-a)/h+(i<a?6:0);break;case i:u=(a-n)/h+2;break;case a:u=(n-i)/h+4;break}u/=6}return e.h=u,e.s=c,e.l=f,e}getRGB(e,t=yr.workingColorSpace){return yr.fromWorkingColorSpace(Il(this,er),t),e.r=er.r,e.g=er.g,e.b=er.b,e}getStyle(e=gi){return yr.fromWorkingColorSpace(Il(this,er),e),e!==gi?`color(${e} ${er.r} ${er.g} ${er.b})`:`rgb(${er.r*255|0},${er.g*255|0},${er.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(si),si.h+=e,si.s+=t,si.l+=n,this.setHSL(si.h,si.s,si.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(Dl);const n=Du(si.h,Dl.h,t),i=Du(si.s,Dl.s,t),a=Du(si.l,Dl.l,t);return this.setHSL(n,i,a),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};Cn.NAMES=Ov;let _s;class Fv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_s===void 0&&(_s=Bo("canvas")),_s.width=e.width,_s.height=e.height;const n=_s.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=_s}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Bo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),a=i.data;for(let o=0;o<a.length;o++)a[o]=Ga(a[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ga(t[n]/255)*255):t[n]=Ga(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Nv{constructor(e=null){this.isSource=!0,this.uuid=Yo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let o=0,s=i.length;o<s;o++)i[o].isDataTexture?a.push(Nu(i[o].image)):a.push(Nu(i[o]))}else a=Nu(i);n.url=a}return t||(e.images[this.uuid]=n),n}}function Nu(l){return typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap?Fv.getDataURL(l):l.data?{data:Array.from(l.data),width:l.width,height:l.height,type:l.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fy=0;class Ar extends Ka{constructor(e=Ar.DEFAULT_IMAGE,t=Ar.DEFAULT_MAPPING,n=wr,i=wr,a=Un,o=Mc,s=Br,u=Xa,c=Ar.DEFAULT_ANISOTROPY,f=$a){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=Yo(),this.name="",this.source=new Nv(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=u,this.offset=new Jt(0,0),this.repeat=new Jt(1,1),this.center=new Jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gr,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ih:e.x=e.x-Math.floor(e.x);break;case wr:e.x=e.x<0?0:1;break;case ah:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ih:e.y=e.y-Math.floor(e.y);break;case wr:e.y=e.y<0?0:1;break;case ah:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ar.DEFAULT_IMAGE=null;Ar.DEFAULT_MAPPING=Rv;Ar.DEFAULT_ANISOTROPY=1;class ur{constructor(e=0,t=0,n=0,i=1){ur.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*a,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*a,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*a,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,a;const u=e.elements,c=u[0],f=u[4],h=u[8],d=u[1],v=u[5],x=u[9],p=u[2],m=u[6],_=u[10];if(Math.abs(f-d)<.01&&Math.abs(h-p)<.01&&Math.abs(x-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+p)<.1&&Math.abs(x+m)<.1&&Math.abs(c+v+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,A=(v+1)/2,w=(_+1)/2,I=(f+d)/4,P=(h+p)/4,M=(x+m)/4;return T>A&&T>w?T<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(T),i=I/n,a=P/n):A>w?A<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(A),n=I/i,a=M/i):w<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(w),n=P/a,i=M/a),this.set(n,i,a,t),this}let E=Math.sqrt((m-x)*(m-x)+(h-p)*(h-p)+(d-f)*(d-f));return Math.abs(E)<.001&&(E=1),this.x=(m-x)/E,this.y=(h-p)/E,this.z=(d-f)/E,this.w=Math.acos((c+v+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fi extends Ka{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ur(0,0,e,t),this.scissorTest=!1,this.viewport=new ur(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Ar(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Un,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Nv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zv extends Ar{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dr,this.minFilter=dr,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ny extends Ar{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dr,this.minFilter=dr,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ya{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,a,o,s){let u=n[i+0],c=n[i+1],f=n[i+2],h=n[i+3];const d=a[o+0],v=a[o+1],x=a[o+2],p=a[o+3];if(s===0){e[t+0]=u,e[t+1]=c,e[t+2]=f,e[t+3]=h;return}if(s===1){e[t+0]=d,e[t+1]=v,e[t+2]=x,e[t+3]=p;return}if(h!==p||u!==d||c!==v||f!==x){let m=1-s;const _=u*d+c*v+f*x+h*p,E=_>=0?1:-1,T=1-_*_;if(T>Number.EPSILON){const w=Math.sqrt(T),I=Math.atan2(w,_*E);m=Math.sin(m*I)/w,s=Math.sin(s*I)/w}const A=s*E;if(u=u*m+d*A,c=c*m+v*A,f=f*m+x*A,h=h*m+p*A,m===1-s){const w=1/Math.sqrt(u*u+c*c+f*f+h*h);u*=w,c*=w,f*=w,h*=w}}e[t]=u,e[t+1]=c,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,a,o){const s=n[i],u=n[i+1],c=n[i+2],f=n[i+3],h=a[o],d=a[o+1],v=a[o+2],x=a[o+3];return e[t]=s*x+f*h+u*v-c*d,e[t+1]=u*x+f*d+c*h-s*v,e[t+2]=c*x+f*v+s*d-u*h,e[t+3]=f*x-s*h-u*d-c*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,a=e._z,o=e._order,s=Math.cos,u=Math.sin,c=s(n/2),f=s(i/2),h=s(a/2),d=u(n/2),v=u(i/2),x=u(a/2);switch(o){case"XYZ":this._x=d*f*h+c*v*x,this._y=c*v*h-d*f*x,this._z=c*f*x+d*v*h,this._w=c*f*h-d*v*x;break;case"YXZ":this._x=d*f*h+c*v*x,this._y=c*v*h-d*f*x,this._z=c*f*x-d*v*h,this._w=c*f*h+d*v*x;break;case"ZXY":this._x=d*f*h-c*v*x,this._y=c*v*h+d*f*x,this._z=c*f*x+d*v*h,this._w=c*f*h-d*v*x;break;case"ZYX":this._x=d*f*h-c*v*x,this._y=c*v*h+d*f*x,this._z=c*f*x-d*v*h,this._w=c*f*h+d*v*x;break;case"YZX":this._x=d*f*h+c*v*x,this._y=c*v*h+d*f*x,this._z=c*f*x-d*v*h,this._w=c*f*h-d*v*x;break;case"XZY":this._x=d*f*h-c*v*x,this._y=c*v*h-d*f*x,this._z=c*f*x+d*v*h,this._w=c*f*h+d*v*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],a=t[8],o=t[1],s=t[5],u=t[9],c=t[2],f=t[6],h=t[10],d=n+s+h;if(d>0){const v=.5/Math.sqrt(d+1);this._w=.25/v,this._x=(f-u)*v,this._y=(a-c)*v,this._z=(o-i)*v}else if(n>s&&n>h){const v=2*Math.sqrt(1+n-s-h);this._w=(f-u)/v,this._x=.25*v,this._y=(i+o)/v,this._z=(a+c)/v}else if(s>h){const v=2*Math.sqrt(1+s-n-h);this._w=(a-c)/v,this._x=(i+o)/v,this._y=.25*v,this._z=(u+f)/v}else{const v=2*Math.sqrt(1+h-n-s);this._w=(o-i)/v,this._x=(a+c)/v,this._y=(u+f)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Er(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,a=e._z,o=e._w,s=t._x,u=t._y,c=t._z,f=t._w;return this._x=n*f+o*s+i*c-a*u,this._y=i*f+o*u+a*s-n*c,this._z=a*f+o*c+n*u-i*s,this._w=o*f-n*s-i*u-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,a=this._z,o=this._w;let s=o*e._w+n*e._x+i*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=n,this._y=i,this._z=a,this;const u=1-s*s;if(u<=Number.EPSILON){const v=1-t;return this._w=v*o+t*this._w,this._x=v*n+t*this._x,this._y=v*i+t*this._y,this._z=v*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(u),f=Math.atan2(c,s),h=Math.sin((1-t)*f)/c,d=Math.sin(t*f)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=a*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(a),n*Math.cos(a),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Ae{constructor(e=0,t=0,n=0){Ae.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*i,this.y=a[1]*t+a[4]*n+a[7]*i,this.z=a[2]*t+a[5]*n+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=e.elements,o=1/(a[3]*t+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*i+a[12])*o,this.y=(a[1]*t+a[5]*n+a[9]*i+a[13])*o,this.z=(a[2]*t+a[6]*n+a[10]*i+a[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,a=e.x,o=e.y,s=e.z,u=e.w,c=u*t+o*i-s*n,f=u*n+s*t-a*i,h=u*i+a*n-o*t,d=-a*t-o*n-s*i;return this.x=c*u+d*-a+f*-s-h*-o,this.y=f*u+d*-o+h*-a-c*-s,this.z=h*u+d*-s+c*-o-f*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i,this.y=a[1]*t+a[5]*n+a[9]*i,this.z=a[2]*t+a[6]*n+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,a=e.z,o=t.x,s=t.y,u=t.z;return this.x=i*u-a*s,this.y=a*o-n*u,this.z=n*s-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zu.copy(this).projectOnVector(e),this.sub(zu)}reflect(e){return this.sub(zu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Er(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zu=new Ae,Rm=new Ya;class Zo{constructor(e=new Ae(1/0,1/0,1/0),t=new Ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,a=-1/0,o=-1/0,s=-1/0;for(let u=0,c=e.length;u<c;u+=3){const f=e[u],h=e[u+1],d=e[u+2];f<t&&(t=f),h<n&&(n=h),d<i&&(i=d),f>a&&(a=f),h>o&&(o=h),d>s&&(s=d)}return this.min.set(t,n,i),this.max.set(a,o,s),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,a=-1/0,o=-1/0,s=-1/0;for(let u=0,c=e.count;u<c;u++){const f=e.getX(u),h=e.getY(u),d=e.getZ(u);f<t&&(t=f),h<n&&(n=h),d<i&&(i=d),f>a&&(a=f),h>o&&(o=h),d>s&&(s=d)}return this.min.set(t,n,i),this.max.set(a,o,s),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ta.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const a=n.attributes.position;for(let o=0,s=a.count;o<s;o++)Ta.fromBufferAttribute(a,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Ta)}else n.boundingBox===null&&n.computeBoundingBox(),ku.copy(n.boundingBox),ku.applyMatrix4(e.matrixWorld),this.union(ku);const i=e.children;for(let a=0,o=i.length;a<o;a++)this.expandByObject(i[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ta),Ta.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yo),Ol.subVectors(this.max,yo),xs.subVectors(e.a,yo),ys.subVectors(e.b,yo),bs.subVectors(e.c,yo),Yi.subVectors(ys,xs),Zi.subVectors(bs,ys),Aa.subVectors(xs,bs);let t=[0,-Yi.z,Yi.y,0,-Zi.z,Zi.y,0,-Aa.z,Aa.y,Yi.z,0,-Yi.x,Zi.z,0,-Zi.x,Aa.z,0,-Aa.x,-Yi.y,Yi.x,0,-Zi.y,Zi.x,0,-Aa.y,Aa.x,0];return!Bu(t,xs,ys,bs,Ol)||(t=[1,0,0,0,1,0,0,0,1],!Bu(t,xs,ys,bs,Ol))?!1:(Fl.crossVectors(Yi,Zi),t=[Fl.x,Fl.y,Fl.z],Bu(t,xs,ys,bs,Ol))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Ta.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Ta).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Li=[new Ae,new Ae,new Ae,new Ae,new Ae,new Ae,new Ae,new Ae],Ta=new Ae,ku=new Zo,xs=new Ae,ys=new Ae,bs=new Ae,Yi=new Ae,Zi=new Ae,Aa=new Ae,yo=new Ae,Ol=new Ae,Fl=new Ae,Ca=new Ae;function Bu(l,e,t,n,i){for(let a=0,o=l.length-3;a<=o;a+=3){Ca.fromArray(l,a);const s=i.x*Math.abs(Ca.x)+i.y*Math.abs(Ca.y)+i.z*Math.abs(Ca.z),u=e.dot(Ca),c=t.dot(Ca),f=n.dot(Ca);if(Math.max(-Math.max(u,c,f),Math.min(u,c,f))>s)return!1}return!0}const zy=new Zo,bo=new Ae,Uu=new Ae;class Rh{constructor(e=new Ae,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zy.setFromPoints(e).getCenter(n);let i=0;for(let a=0,o=e.length;a<o;a++)i=Math.max(i,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bo.subVectors(e,this.center);const t=bo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(bo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bo.copy(e.center).add(Uu)),this.expandByPoint(bo.copy(e.center).sub(Uu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ri=new Ae,Gu=new Ae,Nl=new Ae,Ki=new Ae,Vu=new Ae,zl=new Ae,Hu=new Ae;class ky{constructor(e=new Ae,t=new Ae(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ri.copy(this.direction).multiplyScalar(t).add(this.origin),Ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Gu.copy(e).add(t).multiplyScalar(.5),Nl.copy(t).sub(e).normalize(),Ki.copy(this.origin).sub(Gu);const a=e.distanceTo(t)*.5,o=-this.direction.dot(Nl),s=Ki.dot(this.direction),u=-Ki.dot(Nl),c=Ki.lengthSq(),f=Math.abs(1-o*o);let h,d,v,x;if(f>0)if(h=o*u-s,d=o*s-u,x=a*f,h>=0)if(d>=-x)if(d<=x){const p=1/f;h*=p,d*=p,v=h*(h+o*d+2*s)+d*(o*h+d+2*u)+c}else d=a,h=Math.max(0,-(o*d+s)),v=-h*h+d*(d+2*u)+c;else d=-a,h=Math.max(0,-(o*d+s)),v=-h*h+d*(d+2*u)+c;else d<=-x?(h=Math.max(0,-(-o*a+s)),d=h>0?-a:Math.min(Math.max(-a,-u),a),v=-h*h+d*(d+2*u)+c):d<=x?(h=0,d=Math.min(Math.max(-a,-u),a),v=d*(d+2*u)+c):(h=Math.max(0,-(o*a+s)),d=h>0?a:Math.min(Math.max(-a,-u),a),v=-h*h+d*(d+2*u)+c);else d=o>0?-a:a,h=Math.max(0,-(o*d+s)),v=-h*h+d*(d+2*u)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Nl).multiplyScalar(d).add(Gu),v}intersectSphere(e,t){Ri.subVectors(e.center,this.origin);const n=Ri.dot(this.direction),i=Ri.dot(Ri)-n*n,a=e.radius*e.radius;if(i>a)return null;const o=Math.sqrt(a-i),s=n-o,u=n+o;return s<0&&u<0?null:s<0?this.at(u,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,a,o,s,u;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),f>=0?(a=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(a=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),n>o||a>i||((a>n||isNaN(n))&&(n=a),(o<i||isNaN(i))&&(i=o),h>=0?(s=(e.min.z-d.z)*h,u=(e.max.z-d.z)*h):(s=(e.max.z-d.z)*h,u=(e.min.z-d.z)*h),n>u||s>i)||((s>n||n!==n)&&(n=s),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,t,n,i,a){Vu.subVectors(t,e),zl.subVectors(n,e),Hu.crossVectors(Vu,zl);let o=this.direction.dot(Hu),s;if(o>0){if(i)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Ki.subVectors(this.origin,e);const u=s*this.direction.dot(zl.crossVectors(Ki,zl));if(u<0)return null;const c=s*this.direction.dot(Vu.cross(Ki));if(c<0||u+c>o)return null;const f=-s*Ki.dot(Hu);return f<0?null:this.at(f/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kn{constructor(){Kn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,a,o,s,u,c,f,h,d,v,x,p,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=a,_[5]=o,_[9]=s,_[13]=u,_[2]=c,_[6]=f,_[10]=h,_[14]=d,_[3]=v,_[7]=x,_[11]=p,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kn().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ws.setFromMatrixColumn(e,0).length(),a=1/ws.setFromMatrixColumn(e,1).length(),o=1/ws.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,a=e.z,o=Math.cos(n),s=Math.sin(n),u=Math.cos(i),c=Math.sin(i),f=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const d=o*f,v=o*h,x=s*f,p=s*h;t[0]=u*f,t[4]=-u*h,t[8]=c,t[1]=v+x*c,t[5]=d-p*c,t[9]=-s*u,t[2]=p-d*c,t[6]=x+v*c,t[10]=o*u}else if(e.order==="YXZ"){const d=u*f,v=u*h,x=c*f,p=c*h;t[0]=d+p*s,t[4]=x*s-v,t[8]=o*c,t[1]=o*h,t[5]=o*f,t[9]=-s,t[2]=v*s-x,t[6]=p+d*s,t[10]=o*u}else if(e.order==="ZXY"){const d=u*f,v=u*h,x=c*f,p=c*h;t[0]=d-p*s,t[4]=-o*h,t[8]=x+v*s,t[1]=v+x*s,t[5]=o*f,t[9]=p-d*s,t[2]=-o*c,t[6]=s,t[10]=o*u}else if(e.order==="ZYX"){const d=o*f,v=o*h,x=s*f,p=s*h;t[0]=u*f,t[4]=x*c-v,t[8]=d*c+p,t[1]=u*h,t[5]=p*c+d,t[9]=v*c-x,t[2]=-c,t[6]=s*u,t[10]=o*u}else if(e.order==="YZX"){const d=o*u,v=o*c,x=s*u,p=s*c;t[0]=u*f,t[4]=p-d*h,t[8]=x*h+v,t[1]=h,t[5]=o*f,t[9]=-s*f,t[2]=-c*f,t[6]=v*h+x,t[10]=d-p*h}else if(e.order==="XZY"){const d=o*u,v=o*c,x=s*u,p=s*c;t[0]=u*f,t[4]=-h,t[8]=c*f,t[1]=d*h+p,t[5]=o*f,t[9]=v*h-x,t[2]=x*h-v,t[6]=s*f,t[10]=p*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(By,e,Uy)}lookAt(e,t,n){const i=this.elements;return Fr.subVectors(e,t),Fr.lengthSq()===0&&(Fr.z=1),Fr.normalize(),Qi.crossVectors(n,Fr),Qi.lengthSq()===0&&(Math.abs(n.z)===1?Fr.x+=1e-4:Fr.z+=1e-4,Fr.normalize(),Qi.crossVectors(n,Fr)),Qi.normalize(),kl.crossVectors(Fr,Qi),i[0]=Qi.x,i[4]=kl.x,i[8]=Fr.x,i[1]=Qi.y,i[5]=kl.y,i[9]=Fr.y,i[2]=Qi.z,i[6]=kl.z,i[10]=Fr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,o=n[0],s=n[4],u=n[8],c=n[12],f=n[1],h=n[5],d=n[9],v=n[13],x=n[2],p=n[6],m=n[10],_=n[14],E=n[3],T=n[7],A=n[11],w=n[15],I=i[0],P=i[4],M=i[8],L=i[12],D=i[1],z=i[5],Q=i[9],J=i[13],Y=i[2],re=i[6],me=i[10],ge=i[14],ae=i[3],Le=i[7],Me=i[11],fe=i[15];return a[0]=o*I+s*D+u*Y+c*ae,a[4]=o*P+s*z+u*re+c*Le,a[8]=o*M+s*Q+u*me+c*Me,a[12]=o*L+s*J+u*ge+c*fe,a[1]=f*I+h*D+d*Y+v*ae,a[5]=f*P+h*z+d*re+v*Le,a[9]=f*M+h*Q+d*me+v*Me,a[13]=f*L+h*J+d*ge+v*fe,a[2]=x*I+p*D+m*Y+_*ae,a[6]=x*P+p*z+m*re+_*Le,a[10]=x*M+p*Q+m*me+_*Me,a[14]=x*L+p*J+m*ge+_*fe,a[3]=E*I+T*D+A*Y+w*ae,a[7]=E*P+T*z+A*re+w*Le,a[11]=E*M+T*Q+A*me+w*Me,a[15]=E*L+T*J+A*ge+w*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],a=e[12],o=e[1],s=e[5],u=e[9],c=e[13],f=e[2],h=e[6],d=e[10],v=e[14],x=e[3],p=e[7],m=e[11],_=e[15];return x*(+a*u*h-i*c*h-a*s*d+n*c*d+i*s*v-n*u*v)+p*(+t*u*v-t*c*d+a*o*d-i*o*v+i*c*f-a*u*f)+m*(+t*c*h-t*s*v-a*o*h+n*o*v+a*s*f-n*c*f)+_*(-i*s*f-t*u*h+t*s*d+i*o*h-n*o*d+n*u*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],o=e[4],s=e[5],u=e[6],c=e[7],f=e[8],h=e[9],d=e[10],v=e[11],x=e[12],p=e[13],m=e[14],_=e[15],E=h*m*c-p*d*c+p*u*v-s*m*v-h*u*_+s*d*_,T=x*d*c-f*m*c-x*u*v+o*m*v+f*u*_-o*d*_,A=f*p*c-x*h*c+x*s*v-o*p*v-f*s*_+o*h*_,w=x*h*u-f*p*u-x*s*d+o*p*d+f*s*m-o*h*m,I=t*E+n*T+i*A+a*w;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return e[0]=E*P,e[1]=(p*d*a-h*m*a-p*i*v+n*m*v+h*i*_-n*d*_)*P,e[2]=(s*m*a-p*u*a+p*i*c-n*m*c-s*i*_+n*u*_)*P,e[3]=(h*u*a-s*d*a-h*i*c+n*d*c+s*i*v-n*u*v)*P,e[4]=T*P,e[5]=(f*m*a-x*d*a+x*i*v-t*m*v-f*i*_+t*d*_)*P,e[6]=(x*u*a-o*m*a-x*i*c+t*m*c+o*i*_-t*u*_)*P,e[7]=(o*d*a-f*u*a+f*i*c-t*d*c-o*i*v+t*u*v)*P,e[8]=A*P,e[9]=(x*h*a-f*p*a-x*n*v+t*p*v+f*n*_-t*h*_)*P,e[10]=(o*p*a-x*s*a+x*n*c-t*p*c-o*n*_+t*s*_)*P,e[11]=(f*s*a-o*h*a-f*n*c+t*h*c+o*n*v-t*s*v)*P,e[12]=w*P,e[13]=(f*p*i-x*h*i+x*n*d-t*p*d-f*n*m+t*h*m)*P,e[14]=(x*s*i-o*p*i-x*n*u+t*p*u+o*n*m-t*s*m)*P,e[15]=(o*h*i-f*s*i+f*n*u-t*h*u-o*n*d+t*s*d)*P,this}scale(e){const t=this.elements,n=e.x,i=e.y,a=e.z;return t[0]*=n,t[4]*=i,t[8]*=a,t[1]*=n,t[5]*=i,t[9]*=a,t[2]*=n,t[6]*=i,t[10]*=a,t[3]*=n,t[7]*=i,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),a=1-n,o=e.x,s=e.y,u=e.z,c=a*o,f=a*s;return this.set(c*o+n,c*s-i*u,c*u+i*s,0,c*s+i*u,f*s+n,f*u-i*o,0,c*u-i*s,f*u+i*o,a*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,a,o){return this.set(1,n,a,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,a=t._x,o=t._y,s=t._z,u=t._w,c=a+a,f=o+o,h=s+s,d=a*c,v=a*f,x=a*h,p=o*f,m=o*h,_=s*h,E=u*c,T=u*f,A=u*h,w=n.x,I=n.y,P=n.z;return i[0]=(1-(p+_))*w,i[1]=(v+A)*w,i[2]=(x-T)*w,i[3]=0,i[4]=(v-A)*I,i[5]=(1-(d+_))*I,i[6]=(m+E)*I,i[7]=0,i[8]=(x+T)*P,i[9]=(m-E)*P,i[10]=(1-(d+p))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let a=ws.set(i[0],i[1],i[2]).length();const o=ws.set(i[4],i[5],i[6]).length(),s=ws.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),e.x=i[12],e.y=i[13],e.z=i[14],oi.copy(this);const c=1/a,f=1/o,h=1/s;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=f,oi.elements[5]*=f,oi.elements[6]*=f,oi.elements[8]*=h,oi.elements[9]*=h,oi.elements[10]*=h,t.setFromRotationMatrix(oi),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,i,a,o){const s=this.elements,u=2*a/(t-e),c=2*a/(n-i),f=(t+e)/(t-e),h=(n+i)/(n-i),d=-(o+a)/(o-a),v=-2*o*a/(o-a);return s[0]=u,s[4]=0,s[8]=f,s[12]=0,s[1]=0,s[5]=c,s[9]=h,s[13]=0,s[2]=0,s[6]=0,s[10]=d,s[14]=v,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,i,a,o){const s=this.elements,u=1/(t-e),c=1/(n-i),f=1/(o-a),h=(t+e)*u,d=(n+i)*c,v=(o+a)*f;return s[0]=2*u,s[4]=0,s[8]=0,s[12]=-h,s[1]=0,s[5]=2*c,s[9]=0,s[13]=-d,s[2]=0,s[6]=0,s[10]=-2*f,s[14]=-v,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ws=new Ae,oi=new Kn,By=new Ae(0,0,0),Uy=new Ae(1,1,1),Qi=new Ae,kl=new Ae,Fr=new Ae,Dm=new Kn,Im=new Ya;class Ko{constructor(e=0,t=0,n=0,i=Ko.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,a=i[0],o=i[4],s=i[8],u=i[1],c=i[5],f=i[9],h=i[2],d=i[6],v=i[10];switch(t){case"XYZ":this._y=Math.asin(Er(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-f,v),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Er(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(s,v),this._z=Math.atan2(u,c)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(Er(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,v),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(u,a));break;case"ZYX":this._y=Math.asin(-Er(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,v),this._z=Math.atan2(u,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Er(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(s,v));break;case"XZY":this._z=Math.asin(-Er(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-f,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dm,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Im.setFromEuler(this),this.setFromQuaternion(Im,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ko.DefaultOrder="XYZ";Ko.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class kv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gy=0;const Om=new Ae,Ss=new Ya,Di=new Kn,Bl=new Ae,wo=new Ae,Vy=new Ae,Hy=new Ya,Fm=new Ae(1,0,0),Nm=new Ae(0,1,0),zm=new Ae(0,0,1),Wy={type:"added"},km={type:"removed"};class Wr extends Ka{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=Yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wr.DefaultUp.clone();const e=new Ae,t=new Ko,n=new Ya,i=new Ae(1,1,1);function a(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Kn},normalMatrix:{value:new Gr}}),this.matrix=new Kn,this.matrixWorld=new Kn,this.matrixAutoUpdate=Wr.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Wr.DefaultMatrixWorldAutoUpdate,this.layers=new kv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(Fm,e)}rotateY(e){return this.rotateOnAxis(Nm,e)}rotateZ(e){return this.rotateOnAxis(zm,e)}translateOnAxis(e,t){return Om.copy(e).applyQuaternion(this.quaternion),this.position.add(Om.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fm,e)}translateY(e){return this.translateOnAxis(Nm,e)}translateZ(e){return this.translateOnAxis(zm,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bl.copy(e):Bl.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(wo,Bl,this.up):Di.lookAt(Bl,wo,this.up),this.quaternion.setFromRotationMatrix(Di),i&&(Di.extractRotation(i.matrixWorld),Ss.setFromRotationMatrix(Di),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Wy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(km)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(km)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,e,Vy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,Hy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let a=0,o=i.length;a<o;a++){const s=i[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function a(s,u){return s[u.uuid]===void 0&&(s[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const u=s.shapes;if(Array.isArray(u))for(let c=0,f=u.length;c<f;c++){const h=u[c];a(e.shapes,h)}else a(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let u=0,c=this.material.length;u<c;u++)s.push(a(e.materials,this.material[u]));i.material=s}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const u=this.animations[s];i.animations.push(a(e.animations,u))}}if(t){const s=o(e.geometries),u=o(e.materials),c=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),v=o(e.animations),x=o(e.nodes);s.length>0&&(n.geometries=s),u.length>0&&(n.materials=u),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),v.length>0&&(n.animations=v),x.length>0&&(n.nodes=x)}return n.object=i,n;function o(s){const u=[];for(const c in s){const f=s[c];delete f.metadata,u.push(f)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Wr.DefaultUp=new Ae(0,1,0);Wr.DefaultMatrixAutoUpdate=!0;Wr.DefaultMatrixWorldAutoUpdate=!0;const li=new Ae,Ii=new Ae,Wu=new Ae,Oi=new Ae,Ms=new Ae,Es=new Ae,Bm=new Ae,qu=new Ae,Xu=new Ae,ju=new Ae;class zi{constructor(e=new Ae,t=new Ae,n=new Ae){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),li.subVectors(e,t),i.cross(li);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,t,n,i,a){li.subVectors(i,t),Ii.subVectors(n,t),Wu.subVectors(e,t);const o=li.dot(li),s=li.dot(Ii),u=li.dot(Wu),c=Ii.dot(Ii),f=Ii.dot(Wu),h=o*c-s*s;if(h===0)return a.set(-2,-1,-1);const d=1/h,v=(c*u-s*f)*d,x=(o*f-s*u)*d;return a.set(1-v-x,x,v)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Oi),Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getUV(e,t,n,i,a,o,s,u){return this.getBarycoord(e,t,n,i,Oi),u.set(0,0),u.addScaledVector(a,Oi.x),u.addScaledVector(o,Oi.y),u.addScaledVector(s,Oi.z),u}static isFrontFacing(e,t,n,i){return li.subVectors(n,t),Ii.subVectors(e,t),li.cross(Ii).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),li.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,a){return zi.getUV(e,this.a,this.b,this.c,t,n,i,a)}containsPoint(e){return zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,a=this.c;let o,s;Ms.subVectors(i,n),Es.subVectors(a,n),qu.subVectors(e,n);const u=Ms.dot(qu),c=Es.dot(qu);if(u<=0&&c<=0)return t.copy(n);Xu.subVectors(e,i);const f=Ms.dot(Xu),h=Es.dot(Xu);if(f>=0&&h<=f)return t.copy(i);const d=u*h-f*c;if(d<=0&&u>=0&&f<=0)return o=u/(u-f),t.copy(n).addScaledVector(Ms,o);ju.subVectors(e,a);const v=Ms.dot(ju),x=Es.dot(ju);if(x>=0&&v<=x)return t.copy(a);const p=v*c-u*x;if(p<=0&&c>=0&&x<=0)return s=c/(c-x),t.copy(n).addScaledVector(Es,s);const m=f*x-v*h;if(m<=0&&h-f>=0&&v-x>=0)return Bm.subVectors(a,i),s=(h-f)/(h-f+(v-x)),t.copy(i).addScaledVector(Bm,s);const _=1/(m+p+d);return o=p*_,s=d*_,t.copy(n).addScaledVector(Ms,o).addScaledVector(Es,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let qy=0;class Ec extends Ka{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=Yo(),this.name="",this.type="Material",this.blending=zs,this.side=Vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Cv,this.blendDst=Pv,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=th,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Iy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lu,this.stencilZFail=Lu,this.stencilZPass=Lu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(n.blending=this.blending),this.side!==Vs&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(a){const o=[];for(const s in a){const u=a[s];delete u.metadata,o.push(u)}return o}if(t){const a=i(e.textures),o=i(e.images);a.length>0&&(n.textures=a),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Bv extends Ec{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Cn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Lv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $n=new Ae,Ul=new Jt;class ui{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Am,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ul.fromBufferAttribute(this,t),Ul.applyMatrix3(e),this.setXY(t,Ul.x,Ul.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$n.fromBufferAttribute(this,t),$n.applyMatrix3(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$n.fromBufferAttribute(this,t),$n.applyMatrix4(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$n.fromBufferAttribute(this,t),$n.applyNormalMatrix(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$n.fromBufferAttribute(this,t),$n.transformDirection(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rl(t,this.array)),t}setX(e,t){return this.normalized&&(t=Or(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rl(t,this.array)),t}setY(e,t){return this.normalized&&(t=Or(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Or(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rl(t,this.array)),t}setW(e,t){return this.normalized&&(t=Or(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Or(t,this.array),n=Or(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Or(t,this.array),n=Or(n,this.array),i=Or(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e*=this.itemSize,this.normalized&&(t=Or(t,this.array),n=Or(n,this.array),i=Or(i,this.array),a=Or(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Am&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Uv extends ui{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Gv extends ui{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ui extends ui{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Xy=0;const Kr=new Kn,$u=new Wr,Ts=new Ae,Nr=new Zo,So=new Zo,sr=new Ae;class Hi extends Ka{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=Yo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Iv(e)?Gv:Uv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Gr().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kr.makeRotationFromQuaternion(e),this.applyMatrix4(Kr),this}rotateX(e){return Kr.makeRotationX(e),this.applyMatrix4(Kr),this}rotateY(e){return Kr.makeRotationY(e),this.applyMatrix4(Kr),this}rotateZ(e){return Kr.makeRotationZ(e),this.applyMatrix4(Kr),this}translate(e,t,n){return Kr.makeTranslation(e,t,n),this.applyMatrix4(Kr),this}scale(e,t,n){return Kr.makeScale(e,t,n),this.applyMatrix4(Kr),this}lookAt(e){return $u.lookAt(e),$u.updateMatrix(),this.applyMatrix4($u.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Ui(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Ae(-1/0,-1/0,-1/0),new Ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const a=t[n];Nr.setFromBufferAttribute(a),this.morphTargetsRelative?(sr.addVectors(this.boundingBox.min,Nr.min),this.boundingBox.expandByPoint(sr),sr.addVectors(this.boundingBox.max,Nr.max),this.boundingBox.expandByPoint(sr)):(this.boundingBox.expandByPoint(Nr.min),this.boundingBox.expandByPoint(Nr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Ae,1/0);return}if(e){const n=this.boundingSphere.center;if(Nr.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];So.setFromBufferAttribute(s),this.morphTargetsRelative?(sr.addVectors(Nr.min,So.min),Nr.expandByPoint(sr),sr.addVectors(Nr.max,So.max),Nr.expandByPoint(sr)):(Nr.expandByPoint(So.min),Nr.expandByPoint(So.max))}Nr.getCenter(n);let i=0;for(let a=0,o=e.count;a<o;a++)sr.fromBufferAttribute(e,a),i=Math.max(i,n.distanceToSquared(sr));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],u=this.morphTargetsRelative;for(let c=0,f=s.count;c<f;c++)sr.fromBufferAttribute(s,c),u&&(Ts.fromBufferAttribute(e,c),sr.add(Ts)),i=Math.max(i,n.distanceToSquared(sr))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,a=t.normal.array,o=t.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*s),4));const u=this.getAttribute("tangent").array,c=[],f=[];for(let D=0;D<s;D++)c[D]=new Ae,f[D]=new Ae;const h=new Ae,d=new Ae,v=new Ae,x=new Jt,p=new Jt,m=new Jt,_=new Ae,E=new Ae;function T(D,z,Q){h.fromArray(i,D*3),d.fromArray(i,z*3),v.fromArray(i,Q*3),x.fromArray(o,D*2),p.fromArray(o,z*2),m.fromArray(o,Q*2),d.sub(h),v.sub(h),p.sub(x),m.sub(x);const J=1/(p.x*m.y-m.x*p.y);isFinite(J)&&(_.copy(d).multiplyScalar(m.y).addScaledVector(v,-p.y).multiplyScalar(J),E.copy(v).multiplyScalar(p.x).addScaledVector(d,-m.x).multiplyScalar(J),c[D].add(_),c[z].add(_),c[Q].add(_),f[D].add(E),f[z].add(E),f[Q].add(E))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let D=0,z=A.length;D<z;++D){const Q=A[D],J=Q.start,Y=Q.count;for(let re=J,me=J+Y;re<me;re+=3)T(n[re+0],n[re+1],n[re+2])}const w=new Ae,I=new Ae,P=new Ae,M=new Ae;function L(D){P.fromArray(a,D*3),M.copy(P);const z=c[D];w.copy(z),w.sub(P.multiplyScalar(P.dot(z))).normalize(),I.crossVectors(M,z);const J=I.dot(f[D])<0?-1:1;u[D*4]=w.x,u[D*4+1]=w.y,u[D*4+2]=w.z,u[D*4+3]=J}for(let D=0,z=A.length;D<z;++D){const Q=A[D],J=Q.start,Y=Q.count;for(let re=J,me=J+Y;re<me;re+=3)L(n[re+0]),L(n[re+1]),L(n[re+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ui(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,v=n.count;d<v;d++)n.setXYZ(d,0,0,0);const i=new Ae,a=new Ae,o=new Ae,s=new Ae,u=new Ae,c=new Ae,f=new Ae,h=new Ae;if(e)for(let d=0,v=e.count;d<v;d+=3){const x=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),o.fromBufferAttribute(t,m),f.subVectors(o,a),h.subVectors(i,a),f.cross(h),s.fromBufferAttribute(n,x),u.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),s.add(f),u.add(f),c.add(f),n.setXYZ(x,s.x,s.y,s.z),n.setXYZ(p,u.x,u.y,u.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,v=t.count;d<v;d+=3)i.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),f.subVectors(o,a),h.subVectors(i,a),f.cross(h),n.setXYZ(d+0,f.x,f.y,f.z),n.setXYZ(d+1,f.x,f.y,f.z),n.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)sr.fromBufferAttribute(e,t),sr.normalize(),e.setXYZ(t,sr.x,sr.y,sr.z)}toNonIndexed(){function e(s,u){const c=s.array,f=s.itemSize,h=s.normalized,d=new c.constructor(u.length*f);let v=0,x=0;for(let p=0,m=u.length;p<m;p++){s.isInterleavedBufferAttribute?v=u[p]*s.data.stride+s.offset:v=u[p]*f;for(let _=0;_<f;_++)d[x++]=c[v++]}return new ui(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Hi,n=this.index.array,i=this.attributes;for(const s in i){const u=i[s],c=e(u,n);t.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const u=[],c=a[s];for(let f=0,h=c.length;f<h;f++){const d=c[f],v=e(d,n);u.push(v)}t.morphAttributes[s]=u}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,u=o.length;s<u;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const c in u)u[c]!==void 0&&(e[c]=u[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const c=n[u];e.data.attributes[u]=c.toJSON(e.data)}const i={};let a=!1;for(const u in this.morphAttributes){const c=this.morphAttributes[u],f=[];for(let h=0,d=c.length;h<d;h++){const v=c[h];f.push(v.toJSON(e.data))}f.length>0&&(i[u]=f,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const f=i[c];this.setAttribute(c,f.clone(t))}const a=e.morphAttributes;for(const c in a){const f=[],h=a[c];for(let d=0,v=h.length;d<v;d++)f.push(h[d].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Um=new Kn,As=new ky,Yu=new Rh,Ji=new Ae,ea=new Ae,ta=new Ae,Zu=new Ae,Ku=new Ae,Qu=new Ae,Gl=new Ae,Vl=new Ae,Hl=new Ae,Wl=new Jt,ql=new Jt,Xl=new Jt,Ju=new Ae,jl=new Ae;class Vr extends Wr{constructor(e=new Hi,t=new Bv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=i.length;a<o;a++){const s=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}raycast(e,t){const n=this.geometry,i=this.material,a=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Yu.copy(n.boundingSphere),Yu.applyMatrix4(a),e.ray.intersectsSphere(Yu)===!1)||(Um.copy(a).invert(),As.copy(e.ray).applyMatrix4(Um),n.boundingBox!==null&&As.intersectsBox(n.boundingBox)===!1))return;let o;const s=n.index,u=n.attributes.position,c=n.morphAttributes.position,f=n.morphTargetsRelative,h=n.attributes.uv,d=n.attributes.uv2,v=n.groups,x=n.drawRange;if(s!==null)if(Array.isArray(i))for(let p=0,m=v.length;p<m;p++){const _=v[p],E=i[_.materialIndex],T=Math.max(_.start,x.start),A=Math.min(s.count,Math.min(_.start+_.count,x.start+x.count));for(let w=T,I=A;w<I;w+=3){const P=s.getX(w),M=s.getX(w+1),L=s.getX(w+2);o=$l(this,E,e,As,u,c,f,h,d,P,M,L),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const p=Math.max(0,x.start),m=Math.min(s.count,x.start+x.count);for(let _=p,E=m;_<E;_+=3){const T=s.getX(_),A=s.getX(_+1),w=s.getX(_+2);o=$l(this,i,e,As,u,c,f,h,d,T,A,w),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(u!==void 0)if(Array.isArray(i))for(let p=0,m=v.length;p<m;p++){const _=v[p],E=i[_.materialIndex],T=Math.max(_.start,x.start),A=Math.min(u.count,Math.min(_.start+_.count,x.start+x.count));for(let w=T,I=A;w<I;w+=3){const P=w,M=w+1,L=w+2;o=$l(this,E,e,As,u,c,f,h,d,P,M,L),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const p=Math.max(0,x.start),m=Math.min(u.count,x.start+x.count);for(let _=p,E=m;_<E;_+=3){const T=_,A=_+1,w=_+2;o=$l(this,i,e,As,u,c,f,h,d,T,A,w),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function jy(l,e,t,n,i,a,o,s){let u;if(e.side===ti?u=n.intersectTriangle(o,a,i,!0,s):u=n.intersectTriangle(i,a,o,e.side!==na,s),u===null)return null;jl.copy(s),jl.applyMatrix4(l.matrixWorld);const c=t.ray.origin.distanceTo(jl);return c<t.near||c>t.far?null:{distance:c,point:jl.clone(),object:l}}function $l(l,e,t,n,i,a,o,s,u,c,f,h){Ji.fromBufferAttribute(i,c),ea.fromBufferAttribute(i,f),ta.fromBufferAttribute(i,h);const d=l.morphTargetInfluences;if(a&&d){Gl.set(0,0,0),Vl.set(0,0,0),Hl.set(0,0,0);for(let x=0,p=a.length;x<p;x++){const m=d[x],_=a[x];m!==0&&(Zu.fromBufferAttribute(_,c),Ku.fromBufferAttribute(_,f),Qu.fromBufferAttribute(_,h),o?(Gl.addScaledVector(Zu,m),Vl.addScaledVector(Ku,m),Hl.addScaledVector(Qu,m)):(Gl.addScaledVector(Zu.sub(Ji),m),Vl.addScaledVector(Ku.sub(ea),m),Hl.addScaledVector(Qu.sub(ta),m)))}Ji.add(Gl),ea.add(Vl),ta.add(Hl)}l.isSkinnedMesh&&(l.boneTransform(c,Ji),l.boneTransform(f,ea),l.boneTransform(h,ta));const v=jy(l,e,t,n,Ji,ea,ta,Ju);if(v){s&&(Wl.fromBufferAttribute(s,c),ql.fromBufferAttribute(s,f),Xl.fromBufferAttribute(s,h),v.uv=zi.getUV(Ju,Ji,ea,ta,Wl,ql,Xl,new Jt)),u&&(Wl.fromBufferAttribute(u,c),ql.fromBufferAttribute(u,f),Xl.fromBufferAttribute(u,h),v.uv2=zi.getUV(Ju,Ji,ea,ta,Wl,ql,Xl,new Jt));const x={a:c,b:f,c:h,normal:new Ae,materialIndex:0};zi.getNormal(Ji,ea,ta,x.normal),v.face=x}return v}class Qo extends Hi{constructor(e=1,t=1,n=1,i=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:a,depthSegments:o};const s=this;i=Math.floor(i),a=Math.floor(a),o=Math.floor(o);const u=[],c=[],f=[],h=[];let d=0,v=0;x("z","y","x",-1,-1,n,t,e,o,a,0),x("z","y","x",1,-1,n,t,-e,o,a,1),x("x","z","y",1,1,e,n,t,i,o,2),x("x","z","y",1,-1,e,n,-t,i,o,3),x("x","y","z",1,-1,e,t,n,i,a,4),x("x","y","z",-1,-1,e,t,-n,i,a,5),this.setIndex(u),this.setAttribute("position",new Ui(c,3)),this.setAttribute("normal",new Ui(f,3)),this.setAttribute("uv",new Ui(h,2));function x(p,m,_,E,T,A,w,I,P,M,L){const D=A/P,z=w/M,Q=A/2,J=w/2,Y=I/2,re=P+1,me=M+1;let ge=0,ae=0;const Le=new Ae;for(let Me=0;Me<me;Me++){const fe=Me*z-J;for(let V=0;V<re;V++){const le=V*D-Q;Le[p]=le*E,Le[m]=fe*T,Le[_]=Y,c.push(Le.x,Le.y,Le.z),Le[p]=0,Le[m]=0,Le[_]=I>0?1:-1,f.push(Le.x,Le.y,Le.z),h.push(V/P),h.push(1-Me/M),ge+=1}}for(let Me=0;Me<M;Me++)for(let fe=0;fe<P;fe++){const V=d+fe+re*Me,le=d+fe+re*(Me+1),de=d+(fe+1)+re*(Me+1),Fe=d+(fe+1)+re*Me;u.push(V,le,Fe),u.push(le,de,Fe),ae+=6}s.addGroup(v,ae,L),v+=ae,d+=ge}}static fromJSON(e){return new Qo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xs(l){const e={};for(const t in l){e[t]={};for(const n in l[t]){const i=l[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function br(l){const e={};for(let t=0;t<l.length;t++){const n=Xs(l[t]);for(const i in n)e[i]=n[i]}return e}function $y(l){const e=[];for(let t=0;t<l.length;t++)e.push(l[t].clone());return e}function Vv(l){return l.getRenderTarget()===null&&l.outputEncoding===In?gi:ko}const Yy={clone:Xs,merge:br};var Zy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ky=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends Ec{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zy,this.fragmentShader=Ky,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=$y(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Dh extends Wr{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kn,this.projectionMatrix=new Kn,this.projectionMatrixInverse=new Kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Tr extends Dh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Pm*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ru*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pm*2*Math.atan(Math.tan(Ru*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ru*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,a=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,c=o.fullHeight;a+=o.offsetX*i/u,t-=o.offsetY*n/c,i*=o.width/u,n*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Cs=-90,Ps=1;class Qy extends Wr{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Tr(Cs,Ps,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const a=new Tr(Cs,Ps,e,t);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(-1,0,0),this.add(a);const o=new Tr(Cs,Ps,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const s=new Tr(Cs,Ps,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const u=new Tr(Cs,Ps,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,1),this.add(u);const c=new Tr(Cs,Ps,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,a,o,s,u,c]=this.children,f=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=Bi,e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,a),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,s),e.setRenderTarget(n,4),e.render(t,u),n.texture.generateMipmaps=v,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(f),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Hv extends Ar{constructor(e,t,n,i,a,o,s,u,c,f){e=e!==void 0?e:[],t=t!==void 0?t:Hs,super(e,t,n,i,a,o,s,u,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jy extends fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Hv(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Qo(5,5,5),a=new hi({name:"CubemapFromEquirect",uniforms:Xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ti,blending:sa});a.uniforms.tEquirect.value=t;const o=new Vr(i,a),s=t.minFilter;return t.minFilter===Mc&&(t.minFilter=Un),new Qy(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(a)}}const ef=new Ae,eb=new Ae,tb=new Gr;class Ia{constructor(e=new Ae(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ef.subVectors(n,t).cross(eb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(ef),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:t.copy(n).multiplyScalar(a).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||tb.getNormalMatrix(e),i=this.coplanarPoint(ef).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ls=new Rh,Yl=new Ae;class Wv{constructor(e=new Ia,t=new Ia,n=new Ia,i=new Ia,a=new Ia,o=new Ia){this.planes=[e,t,n,i,a,o]}set(e,t,n,i,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(i),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],a=n[1],o=n[2],s=n[3],u=n[4],c=n[5],f=n[6],h=n[7],d=n[8],v=n[9],x=n[10],p=n[11],m=n[12],_=n[13],E=n[14],T=n[15];return t[0].setComponents(s-i,h-u,p-d,T-m).normalize(),t[1].setComponents(s+i,h+u,p+d,T+m).normalize(),t[2].setComponents(s+a,h+c,p+v,T+_).normalize(),t[3].setComponents(s-a,h-c,p-v,T-_).normalize(),t[4].setComponents(s-o,h-f,p-x,T-E).normalize(),t[5].setComponents(s+o,h+f,p+x,T+E).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ls)}intersectsSprite(e){return Ls.center.set(0,0,0),Ls.radius=.7071067811865476,Ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Yl.x=i.normal.x>0?e.max.x:e.min.x,Yl.y=i.normal.y>0?e.max.y:e.min.y,Yl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Yl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qv(){let l=null,e=!1,t=null,n=null;function i(a,o){t(a,o),n=l.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=l.requestAnimationFrame(i),e=!0)},stop:function(){l.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){l=a}}}function nb(l,e){const t=e.isWebGL2,n=new WeakMap;function i(c,f){const h=c.array,d=c.usage,v=l.createBuffer();l.bindBuffer(f,v),l.bufferData(f,h,d),c.onUploadCallback();let x;if(h instanceof Float32Array)x=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(h instanceof Int16Array)x=5122;else if(h instanceof Uint32Array)x=5125;else if(h instanceof Int32Array)x=5124;else if(h instanceof Int8Array)x=5120;else if(h instanceof Uint8Array)x=5121;else if(h instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function a(c,f,h){const d=f.array,v=f.updateRange;l.bindBuffer(h,c),v.count===-1?l.bufferSubData(h,0,d):(t?l.bufferSubData(h,v.offset*d.BYTES_PER_ELEMENT,d,v.offset,v.count):l.bufferSubData(h,v.offset*d.BYTES_PER_ELEMENT,d.subarray(v.offset,v.offset+v.count)),v.count=-1),f.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f&&(l.deleteBuffer(f.buffer),n.delete(c))}function u(c,f){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,f)):h.version<c.version&&(a(h.buffer,c,f),h.version=c.version)}return{get:o,remove:s,update:u}}class Js extends Hi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const a=e/2,o=t/2,s=Math.floor(n),u=Math.floor(i),c=s+1,f=u+1,h=e/s,d=t/u,v=[],x=[],p=[],m=[];for(let _=0;_<f;_++){const E=_*d-o;for(let T=0;T<c;T++){const A=T*h-a;x.push(A,-E,0),p.push(0,0,1),m.push(T/s),m.push(1-_/u)}}for(let _=0;_<u;_++)for(let E=0;E<s;E++){const T=E+c*_,A=E+c*(_+1),w=E+1+c*(_+1),I=E+1+c*_;v.push(T,A,I),v.push(A,w,I)}this.setIndex(v),this.setAttribute("position",new Ui(x,3)),this.setAttribute("normal",new Ui(p,3)),this.setAttribute("uv",new Ui(m,2))}static fromJSON(e){return new Js(e.width,e.height,e.widthSegments,e.heightSegments)}}var rb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,ib=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ab=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,sb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ob=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cb="vec3 transformed = vec3( position );",ub=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fb=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,hb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,db=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,mb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_b=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,bb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,wb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Sb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mb=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Eb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ab=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lb=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Db=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ib=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ob=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ub=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Vb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Xb=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,jb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$b=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Qb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jb=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ew=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,nw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,aw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ow=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,pw=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,mw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,vw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,gw=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_w=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,ww=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Sw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Mw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Ew=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Aw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Cw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Iw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ow=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Fw=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nw=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,zw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Uw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ww=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,jw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,$w=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Yw=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Zw=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Kw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Qw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Jw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,eS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,rS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,aS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,oS=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,cS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,uS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,dS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mS=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_S=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,SS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ES=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,TS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,LS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RS=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,IS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,vn={alphamap_fragment:rb,alphamap_pars_fragment:ib,alphatest_fragment:ab,alphatest_pars_fragment:sb,aomap_fragment:ob,aomap_pars_fragment:lb,begin_vertex:cb,beginnormal_vertex:ub,bsdfs:fb,iridescence_fragment:hb,bumpmap_pars_fragment:db,clipping_planes_fragment:pb,clipping_planes_pars_fragment:mb,clipping_planes_pars_vertex:vb,clipping_planes_vertex:gb,color_fragment:_b,color_pars_fragment:xb,color_pars_vertex:yb,color_vertex:bb,common:wb,cube_uv_reflection_fragment:Sb,defaultnormal_vertex:Mb,displacementmap_pars_vertex:Eb,displacementmap_vertex:Tb,emissivemap_fragment:Ab,emissivemap_pars_fragment:Cb,encodings_fragment:Pb,encodings_pars_fragment:Lb,envmap_fragment:Rb,envmap_common_pars_fragment:Db,envmap_pars_fragment:Ib,envmap_pars_vertex:Ob,envmap_physical_pars_fragment:Xb,envmap_vertex:Fb,fog_vertex:Nb,fog_pars_vertex:zb,fog_fragment:kb,fog_pars_fragment:Bb,gradientmap_pars_fragment:Ub,lightmap_fragment:Gb,lightmap_pars_fragment:Vb,lights_lambert_fragment:Hb,lights_lambert_pars_fragment:Wb,lights_pars_begin:qb,lights_toon_fragment:jb,lights_toon_pars_fragment:$b,lights_phong_fragment:Yb,lights_phong_pars_fragment:Zb,lights_physical_fragment:Kb,lights_physical_pars_fragment:Qb,lights_fragment_begin:Jb,lights_fragment_maps:ew,lights_fragment_end:tw,logdepthbuf_fragment:nw,logdepthbuf_pars_fragment:rw,logdepthbuf_pars_vertex:iw,logdepthbuf_vertex:aw,map_fragment:sw,map_pars_fragment:ow,map_particle_fragment:lw,map_particle_pars_fragment:cw,metalnessmap_fragment:uw,metalnessmap_pars_fragment:fw,morphcolor_vertex:hw,morphnormal_vertex:dw,morphtarget_pars_vertex:pw,morphtarget_vertex:mw,normal_fragment_begin:vw,normal_fragment_maps:gw,normal_pars_fragment:_w,normal_pars_vertex:xw,normal_vertex:yw,normalmap_pars_fragment:bw,clearcoat_normal_fragment_begin:ww,clearcoat_normal_fragment_maps:Sw,clearcoat_pars_fragment:Mw,iridescence_pars_fragment:Ew,output_fragment:Tw,packing:Aw,premultiplied_alpha_fragment:Cw,project_vertex:Pw,dithering_fragment:Lw,dithering_pars_fragment:Rw,roughnessmap_fragment:Dw,roughnessmap_pars_fragment:Iw,shadowmap_pars_fragment:Ow,shadowmap_pars_vertex:Fw,shadowmap_vertex:Nw,shadowmask_pars_fragment:zw,skinbase_vertex:kw,skinning_pars_vertex:Bw,skinning_vertex:Uw,skinnormal_vertex:Gw,specularmap_fragment:Vw,specularmap_pars_fragment:Hw,tonemapping_fragment:Ww,tonemapping_pars_fragment:qw,transmission_fragment:Xw,transmission_pars_fragment:jw,uv_pars_fragment:$w,uv_pars_vertex:Yw,uv_vertex:Zw,uv2_pars_fragment:Kw,uv2_pars_vertex:Qw,uv2_vertex:Jw,worldpos_vertex:eS,background_vert:tS,background_frag:nS,backgroundCube_vert:rS,backgroundCube_frag:iS,cube_vert:aS,cube_frag:sS,depth_vert:oS,depth_frag:lS,distanceRGBA_vert:cS,distanceRGBA_frag:uS,equirect_vert:fS,equirect_frag:hS,linedashed_vert:dS,linedashed_frag:pS,meshbasic_vert:mS,meshbasic_frag:vS,meshlambert_vert:gS,meshlambert_frag:_S,meshmatcap_vert:xS,meshmatcap_frag:yS,meshnormal_vert:bS,meshnormal_frag:wS,meshphong_vert:SS,meshphong_frag:MS,meshphysical_vert:ES,meshphysical_frag:TS,meshtoon_vert:AS,meshtoon_frag:CS,points_vert:PS,points_frag:LS,shadow_vert:RS,shadow_frag:DS,sprite_vert:IS,sprite_frag:OS},Rt={common:{diffuse:{value:new Cn(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Gr},uv2Transform:{value:new Gr},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Cn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Cn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Gr}},sprite:{diffuse:{value:new Cn(16777215)},opacity:{value:1},center:{value:new Jt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Gr}}},xi={basic:{uniforms:br([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:vn.meshbasic_vert,fragmentShader:vn.meshbasic_frag},lambert:{uniforms:br([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Cn(0)}}]),vertexShader:vn.meshlambert_vert,fragmentShader:vn.meshlambert_frag},phong:{uniforms:br([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Cn(0)},specular:{value:new Cn(1118481)},shininess:{value:30}}]),vertexShader:vn.meshphong_vert,fragmentShader:vn.meshphong_frag},standard:{uniforms:br([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new Cn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vn.meshphysical_vert,fragmentShader:vn.meshphysical_frag},toon:{uniforms:br([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new Cn(0)}}]),vertexShader:vn.meshtoon_vert,fragmentShader:vn.meshtoon_frag},matcap:{uniforms:br([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:vn.meshmatcap_vert,fragmentShader:vn.meshmatcap_frag},points:{uniforms:br([Rt.points,Rt.fog]),vertexShader:vn.points_vert,fragmentShader:vn.points_frag},dashed:{uniforms:br([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vn.linedashed_vert,fragmentShader:vn.linedashed_frag},depth:{uniforms:br([Rt.common,Rt.displacementmap]),vertexShader:vn.depth_vert,fragmentShader:vn.depth_frag},normal:{uniforms:br([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:vn.meshnormal_vert,fragmentShader:vn.meshnormal_frag},sprite:{uniforms:br([Rt.sprite,Rt.fog]),vertexShader:vn.sprite_vert,fragmentShader:vn.sprite_frag},background:{uniforms:{uvTransform:{value:new Gr},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vn.background_vert,fragmentShader:vn.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:vn.backgroundCube_vert,fragmentShader:vn.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vn.cube_vert,fragmentShader:vn.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vn.equirect_vert,fragmentShader:vn.equirect_frag},distanceRGBA:{uniforms:br([Rt.common,Rt.displacementmap,{referencePosition:{value:new Ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vn.distanceRGBA_vert,fragmentShader:vn.distanceRGBA_frag},shadow:{uniforms:br([Rt.lights,Rt.fog,{color:{value:new Cn(0)},opacity:{value:1}}]),vertexShader:vn.shadow_vert,fragmentShader:vn.shadow_frag}};xi.physical={uniforms:br([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Jt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Cn(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Cn(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Cn(1,1,1)},specularColorMap:{value:null}}]),vertexShader:vn.meshphysical_vert,fragmentShader:vn.meshphysical_frag};const Zl={r:0,b:0,g:0};function FS(l,e,t,n,i,a,o){const s=new Cn(0);let u=a===!0?0:1,c,f,h=null,d=0,v=null;function x(m,_){let E=!1,T=_.isScene===!0?_.background:null;T&&T.isTexture&&(T=(_.backgroundBlurriness>0?t:e).get(T));const A=l.xr,w=A.getSession&&A.getSession();w&&w.environmentBlendMode==="additive"&&(T=null),T===null?p(s,u):T&&T.isColor&&(p(T,1),E=!0),(l.autoClear||E)&&l.clear(l.autoClearColor,l.autoClearDepth,l.autoClearStencil),T&&(T.isCubeTexture||T.mapping===Sc)?(f===void 0&&(f=new Vr(new Qo(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:Xs(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(I,P,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=T,f.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,(h!==T||d!==T.version||v!==l.toneMapping)&&(f.material.needsUpdate=!0,h=T,d=T.version,v=l.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Vr(new Js(2,2),new hi({name:"BackgroundMaterial",uniforms:Xs(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Vs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||v!==l.toneMapping)&&(c.material.needsUpdate=!0,h=T,d=T.version,v=l.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function p(m,_){m.getRGB(Zl,Vv(l)),n.buffers.color.setClear(Zl.r,Zl.g,Zl.b,_,o)}return{getClearColor:function(){return s},setClearColor:function(m,_=1){s.set(m),u=_,p(s,u)},getClearAlpha:function(){return u},setClearAlpha:function(m){u=m,p(s,u)},render:x}}function NS(l,e,t,n){const i=l.getParameter(34921),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||a!==null,s={},u=m(null);let c=u,f=!1;function h(Y,re,me,ge,ae){let Le=!1;if(o){const Me=p(ge,me,re);c!==Me&&(c=Me,v(c.object)),Le=_(Y,ge,me,ae),Le&&E(Y,ge,me,ae)}else{const Me=re.wireframe===!0;(c.geometry!==ge.id||c.program!==me.id||c.wireframe!==Me)&&(c.geometry=ge.id,c.program=me.id,c.wireframe=Me,Le=!0)}ae!==null&&t.update(ae,34963),(Le||f)&&(f=!1,M(Y,re,me,ge),ae!==null&&l.bindBuffer(34963,t.get(ae).buffer))}function d(){return n.isWebGL2?l.createVertexArray():a.createVertexArrayOES()}function v(Y){return n.isWebGL2?l.bindVertexArray(Y):a.bindVertexArrayOES(Y)}function x(Y){return n.isWebGL2?l.deleteVertexArray(Y):a.deleteVertexArrayOES(Y)}function p(Y,re,me){const ge=me.wireframe===!0;let ae=s[Y.id];ae===void 0&&(ae={},s[Y.id]=ae);let Le=ae[re.id];Le===void 0&&(Le={},ae[re.id]=Le);let Me=Le[ge];return Me===void 0&&(Me=m(d()),Le[ge]=Me),Me}function m(Y){const re=[],me=[],ge=[];for(let ae=0;ae<i;ae++)re[ae]=0,me[ae]=0,ge[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:re,enabledAttributes:me,attributeDivisors:ge,object:Y,attributes:{},index:null}}function _(Y,re,me,ge){const ae=c.attributes,Le=re.attributes;let Me=0;const fe=me.getAttributes();for(const V in fe)if(fe[V].location>=0){const de=ae[V];let Fe=Le[V];if(Fe===void 0&&(V==="instanceMatrix"&&Y.instanceMatrix&&(Fe=Y.instanceMatrix),V==="instanceColor"&&Y.instanceColor&&(Fe=Y.instanceColor)),de===void 0||de.attribute!==Fe||Fe&&de.data!==Fe.data)return!0;Me++}return c.attributesNum!==Me||c.index!==ge}function E(Y,re,me,ge){const ae={},Le=re.attributes;let Me=0;const fe=me.getAttributes();for(const V in fe)if(fe[V].location>=0){let de=Le[V];de===void 0&&(V==="instanceMatrix"&&Y.instanceMatrix&&(de=Y.instanceMatrix),V==="instanceColor"&&Y.instanceColor&&(de=Y.instanceColor));const Fe={};Fe.attribute=de,de&&de.data&&(Fe.data=de.data),ae[V]=Fe,Me++}c.attributes=ae,c.attributesNum=Me,c.index=ge}function T(){const Y=c.newAttributes;for(let re=0,me=Y.length;re<me;re++)Y[re]=0}function A(Y){w(Y,0)}function w(Y,re){const me=c.newAttributes,ge=c.enabledAttributes,ae=c.attributeDivisors;me[Y]=1,ge[Y]===0&&(l.enableVertexAttribArray(Y),ge[Y]=1),ae[Y]!==re&&((n.isWebGL2?l:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Y,re),ae[Y]=re)}function I(){const Y=c.newAttributes,re=c.enabledAttributes;for(let me=0,ge=re.length;me<ge;me++)re[me]!==Y[me]&&(l.disableVertexAttribArray(me),re[me]=0)}function P(Y,re,me,ge,ae,Le){n.isWebGL2===!0&&(me===5124||me===5125)?l.vertexAttribIPointer(Y,re,me,ae,Le):l.vertexAttribPointer(Y,re,me,ge,ae,Le)}function M(Y,re,me,ge){if(n.isWebGL2===!1&&(Y.isInstancedMesh||ge.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;T();const ae=ge.attributes,Le=me.getAttributes(),Me=re.defaultAttributeValues;for(const fe in Le){const V=Le[fe];if(V.location>=0){let le=ae[fe];if(le===void 0&&(fe==="instanceMatrix"&&Y.instanceMatrix&&(le=Y.instanceMatrix),fe==="instanceColor"&&Y.instanceColor&&(le=Y.instanceColor)),le!==void 0){const de=le.normalized,Fe=le.itemSize,Se=t.get(le);if(Se===void 0)continue;const It=Se.buffer,_t=Se.type,Dt=Se.bytesPerElement;if(le.isInterleavedBufferAttribute){const bt=le.data,ye=bt.stride,qe=le.offset;if(bt.isInstancedInterleavedBuffer){for(let Ce=0;Ce<V.locationSize;Ce++)w(V.location+Ce,bt.meshPerAttribute);Y.isInstancedMesh!==!0&&ge._maxInstanceCount===void 0&&(ge._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Ce=0;Ce<V.locationSize;Ce++)A(V.location+Ce);l.bindBuffer(34962,It);for(let Ce=0;Ce<V.locationSize;Ce++)P(V.location+Ce,Fe/V.locationSize,_t,de,ye*Dt,(qe+Fe/V.locationSize*Ce)*Dt)}else{if(le.isInstancedBufferAttribute){for(let bt=0;bt<V.locationSize;bt++)w(V.location+bt,le.meshPerAttribute);Y.isInstancedMesh!==!0&&ge._maxInstanceCount===void 0&&(ge._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let bt=0;bt<V.locationSize;bt++)A(V.location+bt);l.bindBuffer(34962,It);for(let bt=0;bt<V.locationSize;bt++)P(V.location+bt,Fe/V.locationSize,_t,de,Fe*Dt,Fe/V.locationSize*bt*Dt)}}else if(Me!==void 0){const de=Me[fe];if(de!==void 0)switch(de.length){case 2:l.vertexAttrib2fv(V.location,de);break;case 3:l.vertexAttrib3fv(V.location,de);break;case 4:l.vertexAttrib4fv(V.location,de);break;default:l.vertexAttrib1fv(V.location,de)}}}}I()}function L(){Q();for(const Y in s){const re=s[Y];for(const me in re){const ge=re[me];for(const ae in ge)x(ge[ae].object),delete ge[ae];delete re[me]}delete s[Y]}}function D(Y){if(s[Y.id]===void 0)return;const re=s[Y.id];for(const me in re){const ge=re[me];for(const ae in ge)x(ge[ae].object),delete ge[ae];delete re[me]}delete s[Y.id]}function z(Y){for(const re in s){const me=s[re];if(me[Y.id]===void 0)continue;const ge=me[Y.id];for(const ae in ge)x(ge[ae].object),delete ge[ae];delete me[Y.id]}}function Q(){J(),f=!0,c!==u&&(c=u,v(c.object))}function J(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:h,reset:Q,resetDefaultState:J,dispose:L,releaseStatesOfGeometry:D,releaseStatesOfProgram:z,initAttributes:T,enableAttribute:A,disableUnusedAttributes:I}}function zS(l,e,t,n){const i=n.isWebGL2;let a;function o(c){a=c}function s(c,f){l.drawArrays(a,c,f),t.update(f,a,1)}function u(c,f,h){if(h===0)return;let d,v;if(i)d=l,v="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[v](a,c,f,h),t.update(f,a,h)}this.setMode=o,this.render=s,this.renderInstances=u}function kS(l,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=l.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(P){if(P==="highp"){if(l.getShaderPrecisionFormat(35633,36338).precision>0&&l.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&l.getShaderPrecisionFormat(35633,36337).precision>0&&l.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&l instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&l instanceof WebGL2ComputeRenderingContext;let s=t.precision!==void 0?t.precision:"highp";const u=a(s);u!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",u,"instead."),s=u);const c=o||e.has("WEBGL_draw_buffers"),f=t.logarithmicDepthBuffer===!0,h=l.getParameter(34930),d=l.getParameter(35660),v=l.getParameter(3379),x=l.getParameter(34076),p=l.getParameter(34921),m=l.getParameter(36347),_=l.getParameter(36348),E=l.getParameter(36349),T=d>0,A=o||e.has("OES_texture_float"),w=T&&A,I=o?l.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:v,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:E,vertexTextures:T,floatFragmentTextures:A,floatVertexTextures:w,maxSamples:I}}function BS(l){const e=this;let t=null,n=0,i=!1,a=!1;const o=new Ia,s=new Gr,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,v){const x=h.length!==0||d||n!==0||i;return i=d,t=f(h,v,0),n=h.length,x},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1,c()},this.setState=function(h,d,v){const x=h.clippingPlanes,p=h.clipIntersection,m=h.clipShadows,_=l.get(h);if(!i||x===null||x.length===0||a&&!m)a?f(null):c();else{const E=a?0:n,T=E*4;let A=_.clippingState||null;u.value=A,A=f(x,d,T,v);for(let w=0;w!==T;++w)A[w]=t[w];_.clippingState=A,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=E}};function c(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(h,d,v,x){const p=h!==null?h.length:0;let m=null;if(p!==0){if(m=u.value,x!==!0||m===null){const _=v+p*4,E=d.matrixWorldInverse;s.getNormalMatrix(E),(m===null||m.length<_)&&(m=new Float32Array(_));for(let T=0,A=v;T!==p;++T,A+=4)o.copy(h[T]).applyMatrix4(E,s),o.normal.toArray(m,A),m[A+3]=o.constant}u.value=m,u.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}function US(l){let e=new WeakMap;function t(o,s){return s===nh?o.mapping=Hs:s===rh&&(o.mapping=Ws),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===nh||s===rh)if(e.has(o)){const u=e.get(o).texture;return t(u,o.mapping)}else{const u=o.image;if(u&&u.height>0){const c=new Jy(u.height/2);return c.fromEquirectangularTexture(l,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const s=o.target;s.removeEventListener("dispose",i);const u=e.get(s);u!==void 0&&(e.delete(s),u.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class Xv extends Dh{constructor(e=-1,t=1,n=1,i=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-e,o=n+e,s=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=f*this.view.offsetY,u=s-f*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,u,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Os=4,Gm=[.125,.215,.35,.446,.526,.582],za=20,tf=new Xv,Vm=new Cn;let nf=null;const Oa=(1+Math.sqrt(5))/2,Rs=1/Oa,Hm=[new Ae(1,1,1),new Ae(-1,1,1),new Ae(1,1,-1),new Ae(-1,1,-1),new Ae(0,Oa,Rs),new Ae(0,Oa,-Rs),new Ae(Rs,0,Oa),new Ae(-Rs,0,Oa),new Ae(Oa,Rs,0),new Ae(-Oa,Rs,0)];class Wm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){nf=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,i,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nf),e.scissorTest=!1,Kl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nf=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:ja,format:Br,encoding:$a,depthBuffer:!1},i=qm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qm(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=GS(a)),this._blurMaterial=VS(a,e,t)}return i}_compileMaterial(e){const t=new Vr(this._lodPlanes[0],e);this._renderer.compile(t,tf)}_sceneToCubeUV(e,t,n,i){const s=new Tr(90,1,t,n),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Vm),f.toneMapping=Bi,f.autoClear=!1;const v=new Bv({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1}),x=new Vr(new Qo,v);let p=!1;const m=e.background;m?m.isColor&&(v.color.copy(m),e.background=null,p=!0):(v.color.copy(Vm),p=!0);for(let _=0;_<6;_++){const E=_%3;E===0?(s.up.set(0,u[_],0),s.lookAt(c[_],0,0)):E===1?(s.up.set(0,0,u[_]),s.lookAt(0,c[_],0)):(s.up.set(0,u[_],0),s.lookAt(0,0,c[_]));const T=this._cubeSize;Kl(i,E*T,_>2?T:0,T,T),f.setRenderTarget(i),p&&f.render(x,s),f.render(e,s)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Hs||e.mapping===Ws;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=jm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xm());const a=i?this._cubemapMaterial:this._equirectMaterial,o=new Vr(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const u=this._cubeSize;Kl(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(o,tf)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const a=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Hm[(i-1)%Hm.length];this._blur(e,i-1,i,a,o)}t.autoClear=n}_blur(e,t,n,i,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",a),this._halfBlur(o,e,n,n,i,"longitudinal",a)}_halfBlur(e,t,n,i,a,o,s){const u=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new Vr(this._lodPlanes[i],c),d=c.uniforms,v=this._sizeLods[n]-1,x=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*za-1),p=a/x,m=isFinite(a)?1+Math.floor(f*p):za;m>za&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${za}`);const _=[];let E=0;for(let P=0;P<za;++P){const M=P/p,L=Math.exp(-M*M/2);_.push(L),P===0?E+=L:P<m&&(E+=2*L)}for(let P=0;P<_.length;P++)_[P]=_[P]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=_,d.latitudinal.value=o==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:T}=this;d.dTheta.value=x,d.mipInt.value=T-n;const A=this._sizeLods[i],w=3*A*(i>T-Os?i-T+Os:0),I=4*(this._cubeSize-A);Kl(t,w,I,3*A,2*A),u.setRenderTarget(t),u.render(h,tf)}}function GS(l){const e=[],t=[],n=[];let i=l;const a=l-Os+1+Gm.length;for(let o=0;o<a;o++){const s=Math.pow(2,i);t.push(s);let u=1/s;o>l-Os?u=Gm[o-l+Os-1]:o===0&&(u=0),n.push(u);const c=1/(s-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],v=6,x=6,p=3,m=2,_=1,E=new Float32Array(p*x*v),T=new Float32Array(m*x*v),A=new Float32Array(_*x*v);for(let I=0;I<v;I++){const P=I%3*2/3-1,M=I>2?0:-1,L=[P,M,0,P+2/3,M,0,P+2/3,M+1,0,P,M,0,P+2/3,M+1,0,P,M+1,0];E.set(L,p*x*I),T.set(d,m*x*I);const D=[I,I,I,I,I,I];A.set(D,_*x*I)}const w=new Hi;w.setAttribute("position",new ui(E,p)),w.setAttribute("uv",new ui(T,m)),w.setAttribute("faceIndex",new ui(A,_)),e.push(w),i>Os&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function qm(l,e,t){const n=new fi(l,e,t);return n.texture.mapping=Sc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Kl(l,e,t,n,i){l.viewport.set(e,t,n,i),l.scissor.set(e,t,n,i)}function VS(l,e,t){const n=new Float32Array(za),i=new Ae(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:za,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:sa,depthTest:!1,depthWrite:!1})}function Xm(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:sa,depthTest:!1,depthWrite:!1})}function jm(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sa,depthTest:!1,depthWrite:!1})}function Ih(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function HS(l){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const u=s.mapping,c=u===nh||u===rh,f=u===Hs||u===Ws;if(c||f)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let h=e.get(s);return t===null&&(t=new Wm(l)),h=c?t.fromEquirectangular(s,h):t.fromCubemap(s,h),e.set(s,h),h.texture}else{if(e.has(s))return e.get(s).texture;{const h=s.image;if(c&&h&&h.height>0||f&&h&&i(h)){t===null&&(t=new Wm(l));const d=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,d),s.addEventListener("dispose",a),d.texture}else return null}}}return s}function i(s){let u=0;const c=6;for(let f=0;f<c;f++)s[f]!==void 0&&u++;return u===c}function a(s){const u=s.target;u.removeEventListener("dispose",a);const c=e.get(u);c!==void 0&&(e.delete(u),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function WS(l){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=l.getExtension("WEBGL_depth_texture")||l.getExtension("MOZ_WEBGL_depth_texture")||l.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=l.getExtension("EXT_texture_filter_anisotropic")||l.getExtension("MOZ_EXT_texture_filter_anisotropic")||l.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=l.getExtension("WEBGL_compressed_texture_s3tc")||l.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=l.getExtension("WEBGL_compressed_texture_pvrtc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=l.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function qS(l,e,t,n){const i={},a=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",o),delete i[d.id];const v=a.get(d);v&&(e.remove(v),a.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function s(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function u(h){const d=h.attributes;for(const x in d)e.update(d[x],34962);const v=h.morphAttributes;for(const x in v){const p=v[x];for(let m=0,_=p.length;m<_;m++)e.update(p[m],34962)}}function c(h){const d=[],v=h.index,x=h.attributes.position;let p=0;if(v!==null){const E=v.array;p=v.version;for(let T=0,A=E.length;T<A;T+=3){const w=E[T+0],I=E[T+1],P=E[T+2];d.push(w,I,I,P,P,w)}}else{const E=x.array;p=x.version;for(let T=0,A=E.length/3-1;T<A;T+=3){const w=T+0,I=T+1,P=T+2;d.push(w,I,I,P,P,w)}}const m=new(Iv(d)?Gv:Uv)(d,1);m.version=p;const _=a.get(h);_&&e.remove(_),a.set(h,m)}function f(h){const d=a.get(h);if(d){const v=h.index;v!==null&&d.version<v.version&&c(h)}else c(h);return a.get(h)}return{get:s,update:u,getWireframeAttribute:f}}function XS(l,e,t,n){const i=n.isWebGL2;let a;function o(d){a=d}let s,u;function c(d){s=d.type,u=d.bytesPerElement}function f(d,v){l.drawElements(a,v,s,d*u),t.update(v,a,1)}function h(d,v,x){if(x===0)return;let p,m;if(i)p=l,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](a,v,s,d*u,x),t.update(v,a,x)}this.setMode=o,this.setIndex=c,this.render=f,this.renderInstances=h}function jS(l){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,o,s){switch(t.calls++,o){case 4:t.triangles+=s*(a/3);break;case 1:t.lines+=s*(a/2);break;case 3:t.lines+=s*(a-1);break;case 2:t.lines+=s*a;break;case 0:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function $S(l,e){return l[0]-e[0]}function YS(l,e){return Math.abs(e[1])-Math.abs(l[1])}function ZS(l,e,t){const n={},i=new Float32Array(8),a=new WeakMap,o=new ur,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function u(c,f,h,d){const v=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,m=p!==void 0?p.length:0;let _=a.get(f);if(_===void 0||_.count!==m){let me=function(){Y.dispose(),a.delete(f),f.removeEventListener("dispose",me)};var x=me;_!==void 0&&_.texture.dispose();const A=f.morphAttributes.position!==void 0,w=f.morphAttributes.normal!==void 0,I=f.morphAttributes.color!==void 0,P=f.morphAttributes.position||[],M=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let D=0;A===!0&&(D=1),w===!0&&(D=2),I===!0&&(D=3);let z=f.attributes.position.count*D,Q=1;z>e.maxTextureSize&&(Q=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const J=new Float32Array(z*Q*4*m),Y=new zv(J,z,Q,m);Y.type=ki,Y.needsUpdate=!0;const re=D*4;for(let ge=0;ge<m;ge++){const ae=P[ge],Le=M[ge],Me=L[ge],fe=z*Q*4*ge;for(let V=0;V<ae.count;V++){const le=V*re;A===!0&&(o.fromBufferAttribute(ae,V),J[fe+le+0]=o.x,J[fe+le+1]=o.y,J[fe+le+2]=o.z,J[fe+le+3]=0),w===!0&&(o.fromBufferAttribute(Le,V),J[fe+le+4]=o.x,J[fe+le+5]=o.y,J[fe+le+6]=o.z,J[fe+le+7]=0),I===!0&&(o.fromBufferAttribute(Me,V),J[fe+le+8]=o.x,J[fe+le+9]=o.y,J[fe+le+10]=o.z,J[fe+le+11]=Me.itemSize===4?o.w:1)}}_={count:m,texture:Y,size:new Jt(z,Q)},a.set(f,_),f.addEventListener("dispose",me)}let E=0;for(let A=0;A<v.length;A++)E+=v[A];const T=f.morphTargetsRelative?1:1-E;d.getUniforms().setValue(l,"morphTargetBaseInfluence",T),d.getUniforms().setValue(l,"morphTargetInfluences",v),d.getUniforms().setValue(l,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(l,"morphTargetsTextureSize",_.size)}else{const p=v===void 0?0:v.length;let m=n[f.id];if(m===void 0||m.length!==p){m=[];for(let w=0;w<p;w++)m[w]=[w,0];n[f.id]=m}for(let w=0;w<p;w++){const I=m[w];I[0]=w,I[1]=v[w]}m.sort(YS);for(let w=0;w<8;w++)w<p&&m[w][1]?(s[w][0]=m[w][0],s[w][1]=m[w][1]):(s[w][0]=Number.MAX_SAFE_INTEGER,s[w][1]=0);s.sort($S);const _=f.morphAttributes.position,E=f.morphAttributes.normal;let T=0;for(let w=0;w<8;w++){const I=s[w],P=I[0],M=I[1];P!==Number.MAX_SAFE_INTEGER&&M?(_&&f.getAttribute("morphTarget"+w)!==_[P]&&f.setAttribute("morphTarget"+w,_[P]),E&&f.getAttribute("morphNormal"+w)!==E[P]&&f.setAttribute("morphNormal"+w,E[P]),i[w]=M,T+=M):(_&&f.hasAttribute("morphTarget"+w)===!0&&f.deleteAttribute("morphTarget"+w),E&&f.hasAttribute("morphNormal"+w)===!0&&f.deleteAttribute("morphNormal"+w),i[w]=0)}const A=f.morphTargetsRelative?1:1-T;d.getUniforms().setValue(l,"morphTargetBaseInfluence",A),d.getUniforms().setValue(l,"morphTargetInfluences",i)}}return{update:u}}function KS(l,e,t,n){let i=new WeakMap;function a(u){const c=n.render.frame,f=u.geometry,h=e.get(u,f);return i.get(h)!==c&&(e.update(h),i.set(h,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",s)===!1&&u.addEventListener("dispose",s),t.update(u.instanceMatrix,34962),u.instanceColor!==null&&t.update(u.instanceColor,34962)),h}function o(){i=new WeakMap}function s(u){const c=u.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}const jv=new Ar,$v=new zv,Yv=new Ny,Zv=new Hv,$m=[],Ym=[],Zm=new Float32Array(16),Km=new Float32Array(9),Qm=new Float32Array(4);function eo(l,e,t){const n=l[0];if(n<=0||n>0)return l;const i=e*t;let a=$m[i];if(a===void 0&&(a=new Float32Array(i),$m[i]=a),e!==0){n.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,l[o].toArray(a,s)}return a}function tr(l,e){if(l.length!==e.length)return!1;for(let t=0,n=l.length;t<n;t++)if(l[t]!==e[t])return!1;return!0}function nr(l,e){for(let t=0,n=e.length;t<n;t++)l[t]=e[t]}function Tc(l,e){let t=Ym[e];t===void 0&&(t=new Int32Array(e),Ym[e]=t);for(let n=0;n!==e;++n)t[n]=l.allocateTextureUnit();return t}function QS(l,e){const t=this.cache;t[0]!==e&&(l.uniform1f(this.addr,e),t[0]=e)}function JS(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(l.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tr(t,e))return;l.uniform2fv(this.addr,e),nr(t,e)}}function eM(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(l.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(l.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tr(t,e))return;l.uniform3fv(this.addr,e),nr(t,e)}}function tM(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(l.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tr(t,e))return;l.uniform4fv(this.addr,e),nr(t,e)}}function nM(l,e){const t=this.cache,n=e.elements;if(n===void 0){if(tr(t,e))return;l.uniformMatrix2fv(this.addr,!1,e),nr(t,e)}else{if(tr(t,n))return;Qm.set(n),l.uniformMatrix2fv(this.addr,!1,Qm),nr(t,n)}}function rM(l,e){const t=this.cache,n=e.elements;if(n===void 0){if(tr(t,e))return;l.uniformMatrix3fv(this.addr,!1,e),nr(t,e)}else{if(tr(t,n))return;Km.set(n),l.uniformMatrix3fv(this.addr,!1,Km),nr(t,n)}}function iM(l,e){const t=this.cache,n=e.elements;if(n===void 0){if(tr(t,e))return;l.uniformMatrix4fv(this.addr,!1,e),nr(t,e)}else{if(tr(t,n))return;Zm.set(n),l.uniformMatrix4fv(this.addr,!1,Zm),nr(t,n)}}function aM(l,e){const t=this.cache;t[0]!==e&&(l.uniform1i(this.addr,e),t[0]=e)}function sM(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(l.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tr(t,e))return;l.uniform2iv(this.addr,e),nr(t,e)}}function oM(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(l.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tr(t,e))return;l.uniform3iv(this.addr,e),nr(t,e)}}function lM(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(l.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tr(t,e))return;l.uniform4iv(this.addr,e),nr(t,e)}}function cM(l,e){const t=this.cache;t[0]!==e&&(l.uniform1ui(this.addr,e),t[0]=e)}function uM(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(l.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tr(t,e))return;l.uniform2uiv(this.addr,e),nr(t,e)}}function fM(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(l.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tr(t,e))return;l.uniform3uiv(this.addr,e),nr(t,e)}}function hM(l,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(l.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tr(t,e))return;l.uniform4uiv(this.addr,e),nr(t,e)}}function dM(l,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(l.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||jv,i)}function pM(l,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(l.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Yv,i)}function mM(l,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(l.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Zv,i)}function vM(l,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(l.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||$v,i)}function gM(l){switch(l){case 5126:return QS;case 35664:return JS;case 35665:return eM;case 35666:return tM;case 35674:return nM;case 35675:return rM;case 35676:return iM;case 5124:case 35670:return aM;case 35667:case 35671:return sM;case 35668:case 35672:return oM;case 35669:case 35673:return lM;case 5125:return cM;case 36294:return uM;case 36295:return fM;case 36296:return hM;case 35678:case 36198:case 36298:case 36306:case 35682:return dM;case 35679:case 36299:case 36307:return pM;case 35680:case 36300:case 36308:case 36293:return mM;case 36289:case 36303:case 36311:case 36292:return vM}}function _M(l,e){l.uniform1fv(this.addr,e)}function xM(l,e){const t=eo(e,this.size,2);l.uniform2fv(this.addr,t)}function yM(l,e){const t=eo(e,this.size,3);l.uniform3fv(this.addr,t)}function bM(l,e){const t=eo(e,this.size,4);l.uniform4fv(this.addr,t)}function wM(l,e){const t=eo(e,this.size,4);l.uniformMatrix2fv(this.addr,!1,t)}function SM(l,e){const t=eo(e,this.size,9);l.uniformMatrix3fv(this.addr,!1,t)}function MM(l,e){const t=eo(e,this.size,16);l.uniformMatrix4fv(this.addr,!1,t)}function EM(l,e){l.uniform1iv(this.addr,e)}function TM(l,e){l.uniform2iv(this.addr,e)}function AM(l,e){l.uniform3iv(this.addr,e)}function CM(l,e){l.uniform4iv(this.addr,e)}function PM(l,e){l.uniform1uiv(this.addr,e)}function LM(l,e){l.uniform2uiv(this.addr,e)}function RM(l,e){l.uniform3uiv(this.addr,e)}function DM(l,e){l.uniform4uiv(this.addr,e)}function IM(l,e,t){const n=this.cache,i=e.length,a=Tc(t,i);tr(n,a)||(l.uniform1iv(this.addr,a),nr(n,a));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||jv,a[o])}function OM(l,e,t){const n=this.cache,i=e.length,a=Tc(t,i);tr(n,a)||(l.uniform1iv(this.addr,a),nr(n,a));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Yv,a[o])}function FM(l,e,t){const n=this.cache,i=e.length,a=Tc(t,i);tr(n,a)||(l.uniform1iv(this.addr,a),nr(n,a));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Zv,a[o])}function NM(l,e,t){const n=this.cache,i=e.length,a=Tc(t,i);tr(n,a)||(l.uniform1iv(this.addr,a),nr(n,a));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||$v,a[o])}function zM(l){switch(l){case 5126:return _M;case 35664:return xM;case 35665:return yM;case 35666:return bM;case 35674:return wM;case 35675:return SM;case 35676:return MM;case 5124:case 35670:return EM;case 35667:case 35671:return TM;case 35668:case 35672:return AM;case 35669:case 35673:return CM;case 5125:return PM;case 36294:return LM;case 36295:return RM;case 36296:return DM;case 35678:case 36198:case 36298:case 36306:case 35682:return IM;case 35679:case 36299:case 36307:return OM;case 35680:case 36300:case 36308:case 36293:return FM;case 36289:case 36303:case 36311:case 36292:return NM}}class kM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=gM(t.type)}}class BM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=zM(t.type)}}class UM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let a=0,o=i.length;a!==o;++a){const s=i[a];s.setValue(e,t[s.id],n)}}}const rf=/(\w+)(\])?(\[|\.)?/g;function Jm(l,e){l.seq.push(e),l.map[e.id]=e}function GM(l,e,t){const n=l.name,i=n.length;for(rf.lastIndex=0;;){const a=rf.exec(n),o=rf.lastIndex;let s=a[1];const u=a[2]==="]",c=a[3];if(u&&(s=s|0),c===void 0||c==="["&&o+2===i){Jm(t,c===void 0?new kM(s,l,e):new BM(s,l,e));break}else{let h=t.map[s];h===void 0&&(h=new UM(s),Jm(t,h)),t=h}}}class lc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const a=e.getActiveUniform(t,i),o=e.getUniformLocation(t,a.name);GM(a,o,this)}}setValue(e,t,n,i){const a=this.map[t];a!==void 0&&a.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let a=0,o=t.length;a!==o;++a){const s=t[a],u=n[s.id];u.needsUpdate!==!1&&s.setValue(e,u.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,a=e.length;i!==a;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function e0(l,e,t){const n=l.createShader(e);return l.shaderSource(n,t),l.compileShader(n),n}let VM=0;function HM(l,e){const t=l.split(`
`),n=[],i=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=i;o<a;o++){const s=o+1;n.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return n.join(`
`)}function WM(l){switch(l){case $a:return["Linear","( value )"];case In:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",l),["Linear","( value )"]}}function t0(l,e,t){const n=l.getShaderParameter(e,35713),i=l.getShaderInfoLog(e).trim();if(n&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+i+`

`+HM(l.getShaderSource(e),o)}else return i}function qM(l,e){const t=WM(e);return"vec4 "+l+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function XM(l,e){let t;switch(e){case ly:t="Linear";break;case cy:t="Reinhard";break;case uy:t="OptimizedCineon";break;case fy:t="ACESFilmic";break;case hy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+l+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function jM(l){return[l.extensionDerivatives||l.envMapCubeUVHeight||l.bumpMap||l.tangentSpaceNormalMap||l.clearcoatNormalMap||l.flatShading||l.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(l.extensionFragDepth||l.logarithmicDepthBuffer)&&l.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",l.extensionDrawBuffers&&l.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(l.extensionShaderTextureLOD||l.envMap||l.transmission)&&l.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ao).join(`
`)}function $M(l){const e=[];for(const t in l){const n=l[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function YM(l,e){const t={},n=l.getProgramParameter(e,35721);for(let i=0;i<n;i++){const a=l.getActiveAttrib(e,i),o=a.name;let s=1;a.type===35674&&(s=2),a.type===35675&&(s=3),a.type===35676&&(s=4),t[o]={type:a.type,location:l.getAttribLocation(e,o),locationSize:s}}return t}function Ao(l){return l!==""}function n0(l,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return l.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function r0(l,e){return l.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ZM=/^[ \t]*#include +<([\w\d./]+)>/gm;function lh(l){return l.replace(ZM,KM)}function KM(l,e){const t=vn[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return lh(t)}const QM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function i0(l){return l.replace(QM,JM)}function JM(l,e,t,n){let i="";for(let a=parseInt(e);a<parseInt(t);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function a0(l){let e="precision "+l.precision+` float;
precision `+l.precision+" int;";return l.precision==="highp"?e+=`
#define HIGH_PRECISION`:l.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:l.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function e2(l){let e="SHADOWMAP_TYPE_BASIC";return l.shadowMapType===Av?e="SHADOWMAP_TYPE_PCF":l.shadowMapType===U1?e="SHADOWMAP_TYPE_PCF_SOFT":l.shadowMapType===To&&(e="SHADOWMAP_TYPE_VSM"),e}function t2(l){let e="ENVMAP_TYPE_CUBE";if(l.envMap)switch(l.envMapMode){case Hs:case Ws:e="ENVMAP_TYPE_CUBE";break;case Sc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function n2(l){let e="ENVMAP_MODE_REFLECTION";if(l.envMap)switch(l.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function r2(l){let e="ENVMAP_BLENDING_NONE";if(l.envMap)switch(l.combine){case Lv:e="ENVMAP_BLENDING_MULTIPLY";break;case sy:e="ENVMAP_BLENDING_MIX";break;case oy:e="ENVMAP_BLENDING_ADD";break}return e}function i2(l){const e=l.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function a2(l,e,t,n){const i=l.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const u=e2(t),c=t2(t),f=n2(t),h=r2(t),d=i2(t),v=t.isWebGL2?"":jM(t),x=$M(a),p=i.createProgram();let m,_,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[x].filter(Ao).join(`
`),m.length>0&&(m+=`
`),_=[v,x].filter(Ao).join(`
`),_.length>0&&(_+=`
`)):(m=[a0(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ao).join(`
`),_=[v,a0(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?vn.tonemapping_pars_fragment:"",t.toneMapping!==Bi?XM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vn.encodings_pars_fragment,qM("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ao).join(`
`)),o=lh(o),o=n0(o,t),o=r0(o,t),s=lh(s),s=n0(s,t),s=r0(s,t),o=i0(o),s=i0(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===Cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const T=E+m+o,A=E+_+s,w=e0(i,35633,T),I=e0(i,35632,A);if(i.attachShader(p,w),i.attachShader(p,I),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),l.debug.checkShaderErrors){const L=i.getProgramInfoLog(p).trim(),D=i.getShaderInfoLog(w).trim(),z=i.getShaderInfoLog(I).trim();let Q=!0,J=!0;if(i.getProgramParameter(p,35714)===!1){Q=!1;const Y=t0(i,w,"vertex"),re=t0(i,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+L+`
`+Y+`
`+re)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(D===""||z==="")&&(J=!1);J&&(this.diagnostics={runnable:Q,programLog:L,vertexShader:{log:D,prefix:m},fragmentShader:{log:z,prefix:_}})}i.deleteShader(w),i.deleteShader(I);let P;this.getUniforms=function(){return P===void 0&&(P=new lc(i,p)),P};let M;return this.getAttributes=function(){return M===void 0&&(M=YM(i,p)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=VM++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=I,this}let s2=0;class o2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),a=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new l2(e),t.set(e,n)),n}}class l2{constructor(e){this.id=s2++,this.code=e,this.usedTimes=0}}function c2(l,e,t,n,i,a,o){const s=new kv,u=new o2,c=[],f=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let v=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M,L,D,z,Q){const J=z.fog,Y=Q.geometry,re=M.isMeshStandardMaterial?z.environment:null,me=(M.isMeshStandardMaterial?t:e).get(M.envMap||re),ge=me&&me.mapping===Sc?me.image.height:null,ae=x[M.type];M.precision!==null&&(v=i.getMaxPrecision(M.precision),v!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",v,"instead."));const Le=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Me=Le!==void 0?Le.length:0;let fe=0;Y.morphAttributes.position!==void 0&&(fe=1),Y.morphAttributes.normal!==void 0&&(fe=2),Y.morphAttributes.color!==void 0&&(fe=3);let V,le,de,Fe;if(ae){const ye=xi[ae];V=ye.vertexShader,le=ye.fragmentShader}else V=M.vertexShader,le=M.fragmentShader,u.update(M),de=u.getVertexShaderID(M),Fe=u.getFragmentShaderID(M);const Se=l.getRenderTarget(),It=M.alphaTest>0,_t=M.clearcoat>0,Dt=M.iridescence>0;return{isWebGL2:f,shaderID:ae,shaderName:M.type,vertexShader:V,fragmentShader:le,defines:M.defines,customVertexShaderID:de,customFragmentShaderID:Fe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:v,instancing:Q.isInstancedMesh===!0,instancingColor:Q.isInstancedMesh===!0&&Q.instanceColor!==null,supportsVertexTextures:d,outputEncoding:Se===null?l.outputEncoding:Se.isXRRenderTarget===!0?Se.texture.encoding:$a,map:!!M.map,matcap:!!M.matcap,envMap:!!me,envMapMode:me&&me.mapping,envMapCubeUVHeight:ge,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===Dy,tangentSpaceNormalMap:M.normalMapType===Ry,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===In,clearcoat:_t,clearcoatMap:_t&&!!M.clearcoatMap,clearcoatRoughnessMap:_t&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:_t&&!!M.clearcoatNormalMap,iridescence:Dt,iridescenceMap:Dt&&!!M.iridescenceMap,iridescenceThicknessMap:Dt&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===zs,alphaMap:!!M.alphaMap,alphaTest:It,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!Y.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(M.map||M.bumpMap||M.normalMap||M.specularMap||M.alphaMap||M.emissiveMap||M.roughnessMap||M.metalnessMap||M.clearcoatNormalMap||M.iridescenceMap||M.iridescenceThicknessMap||M.transmission>0||M.transmissionMap||M.thicknessMap||M.specularIntensityMap||M.specularColorMap||M.sheen>0||M.sheenColorMap||M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!J,useFog:M.fog===!0,fogExp2:J&&J.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:h,skinning:Q.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:fe,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:l.shadowMap.enabled&&D.length>0,shadowMapType:l.shadowMap.type,toneMapping:M.toneMapped?l.toneMapping:Bi,physicallyCorrectLights:l.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===na,flipSided:M.side===ti,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function m(M){const L=[];if(M.shaderID?L.push(M.shaderID):(L.push(M.customVertexShaderID),L.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)L.push(D),L.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(_(L,M),E(L,M),L.push(l.outputEncoding)),L.push(M.customProgramCacheKey),L.join()}function _(M,L){M.push(L.precision),M.push(L.outputEncoding),M.push(L.envMapMode),M.push(L.envMapCubeUVHeight),M.push(L.combine),M.push(L.vertexUvs),M.push(L.fogExp2),M.push(L.sizeAttenuation),M.push(L.morphTargetsCount),M.push(L.morphAttributeCount),M.push(L.numDirLights),M.push(L.numPointLights),M.push(L.numSpotLights),M.push(L.numSpotLightMaps),M.push(L.numHemiLights),M.push(L.numRectAreaLights),M.push(L.numDirLightShadows),M.push(L.numPointLightShadows),M.push(L.numSpotLightShadows),M.push(L.numSpotLightShadowsWithMaps),M.push(L.shadowMapType),M.push(L.toneMapping),M.push(L.numClippingPlanes),M.push(L.numClipIntersection),M.push(L.depthPacking)}function E(M,L){s.disableAll(),L.isWebGL2&&s.enable(0),L.supportsVertexTextures&&s.enable(1),L.instancing&&s.enable(2),L.instancingColor&&s.enable(3),L.map&&s.enable(4),L.matcap&&s.enable(5),L.envMap&&s.enable(6),L.lightMap&&s.enable(7),L.aoMap&&s.enable(8),L.emissiveMap&&s.enable(9),L.bumpMap&&s.enable(10),L.normalMap&&s.enable(11),L.objectSpaceNormalMap&&s.enable(12),L.tangentSpaceNormalMap&&s.enable(13),L.clearcoat&&s.enable(14),L.clearcoatMap&&s.enable(15),L.clearcoatRoughnessMap&&s.enable(16),L.clearcoatNormalMap&&s.enable(17),L.iridescence&&s.enable(18),L.iridescenceMap&&s.enable(19),L.iridescenceThicknessMap&&s.enable(20),L.displacementMap&&s.enable(21),L.specularMap&&s.enable(22),L.roughnessMap&&s.enable(23),L.metalnessMap&&s.enable(24),L.gradientMap&&s.enable(25),L.alphaMap&&s.enable(26),L.alphaTest&&s.enable(27),L.vertexColors&&s.enable(28),L.vertexAlphas&&s.enable(29),L.vertexUvs&&s.enable(30),L.vertexTangents&&s.enable(31),L.uvsVertexOnly&&s.enable(32),M.push(s.mask),s.disableAll(),L.fog&&s.enable(0),L.useFog&&s.enable(1),L.flatShading&&s.enable(2),L.logarithmicDepthBuffer&&s.enable(3),L.skinning&&s.enable(4),L.morphTargets&&s.enable(5),L.morphNormals&&s.enable(6),L.morphColors&&s.enable(7),L.premultipliedAlpha&&s.enable(8),L.shadowMapEnabled&&s.enable(9),L.physicallyCorrectLights&&s.enable(10),L.doubleSided&&s.enable(11),L.flipSided&&s.enable(12),L.useDepthPacking&&s.enable(13),L.dithering&&s.enable(14),L.specularIntensityMap&&s.enable(15),L.specularColorMap&&s.enable(16),L.transmission&&s.enable(17),L.transmissionMap&&s.enable(18),L.thicknessMap&&s.enable(19),L.sheen&&s.enable(20),L.sheenColorMap&&s.enable(21),L.sheenRoughnessMap&&s.enable(22),L.decodeVideoTexture&&s.enable(23),L.opaque&&s.enable(24),M.push(s.mask)}function T(M){const L=x[M.type];let D;if(L){const z=xi[L];D=Yy.clone(z.uniforms)}else D=M.uniforms;return D}function A(M,L){let D;for(let z=0,Q=c.length;z<Q;z++){const J=c[z];if(J.cacheKey===L){D=J,++D.usedTimes;break}}return D===void 0&&(D=new a2(l,L,M,a),c.push(D)),D}function w(M){if(--M.usedTimes===0){const L=c.indexOf(M);c[L]=c[c.length-1],c.pop(),M.destroy()}}function I(M){u.remove(M)}function P(){u.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:T,acquireProgram:A,releaseProgram:w,releaseShaderCache:I,programs:c,dispose:P}}function u2(){let l=new WeakMap;function e(a){let o=l.get(a);return o===void 0&&(o={},l.set(a,o)),o}function t(a){l.delete(a)}function n(a,o,s){l.get(a)[o]=s}function i(){l=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function f2(l,e){return l.groupOrder!==e.groupOrder?l.groupOrder-e.groupOrder:l.renderOrder!==e.renderOrder?l.renderOrder-e.renderOrder:l.material.id!==e.material.id?l.material.id-e.material.id:l.z!==e.z?l.z-e.z:l.id-e.id}function s0(l,e){return l.groupOrder!==e.groupOrder?l.groupOrder-e.groupOrder:l.renderOrder!==e.renderOrder?l.renderOrder-e.renderOrder:l.z!==e.z?e.z-l.z:l.id-e.id}function o0(){const l=[];let e=0;const t=[],n=[],i=[];function a(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,v,x,p,m){let _=l[e];return _===void 0?(_={id:h.id,object:h,geometry:d,material:v,groupOrder:x,renderOrder:h.renderOrder,z:p,group:m},l[e]=_):(_.id=h.id,_.object=h,_.geometry=d,_.material=v,_.groupOrder=x,_.renderOrder=h.renderOrder,_.z=p,_.group=m),e++,_}function s(h,d,v,x,p,m){const _=o(h,d,v,x,p,m);v.transmission>0?n.push(_):v.transparent===!0?i.push(_):t.push(_)}function u(h,d,v,x,p,m){const _=o(h,d,v,x,p,m);v.transmission>0?n.unshift(_):v.transparent===!0?i.unshift(_):t.unshift(_)}function c(h,d){t.length>1&&t.sort(h||f2),n.length>1&&n.sort(d||s0),i.length>1&&i.sort(d||s0)}function f(){for(let h=e,d=l.length;h<d;h++){const v=l[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:i,init:a,push:s,unshift:u,finish:f,sort:c}}function h2(){let l=new WeakMap;function e(n,i){const a=l.get(n);let o;return a===void 0?(o=new o0,l.set(n,[o])):i>=a.length?(o=new o0,a.push(o)):o=a[i],o}function t(){l=new WeakMap}return{get:e,dispose:t}}function d2(){const l={};return{get:function(e){if(l[e.id]!==void 0)return l[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Ae,color:new Cn};break;case"SpotLight":t={position:new Ae,direction:new Ae,color:new Cn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Ae,color:new Cn,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Ae,skyColor:new Cn,groundColor:new Cn};break;case"RectAreaLight":t={color:new Cn,position:new Ae,halfWidth:new Ae,halfHeight:new Ae};break}return l[e.id]=t,t}}}function p2(){const l={};return{get:function(e){if(l[e.id]!==void 0)return l[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return l[e.id]=t,t}}}let m2=0;function v2(l,e){return(e.castShadow?2:0)-(l.castShadow?2:0)+(e.map?1:0)-(l.map?1:0)}function g2(l,e){const t=new d2,n=p2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)i.probe.push(new Ae);const a=new Ae,o=new Kn,s=new Kn;function u(f,h){let d=0,v=0,x=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let p=0,m=0,_=0,E=0,T=0,A=0,w=0,I=0,P=0,M=0;f.sort(v2);const L=h!==!0?Math.PI:1;for(let z=0,Q=f.length;z<Q;z++){const J=f[z],Y=J.color,re=J.intensity,me=J.distance,ge=J.shadow&&J.shadow.map?J.shadow.map.texture:null;if(J.isAmbientLight)d+=Y.r*re*L,v+=Y.g*re*L,x+=Y.b*re*L;else if(J.isLightProbe)for(let ae=0;ae<9;ae++)i.probe[ae].addScaledVector(J.sh.coefficients[ae],re);else if(J.isDirectionalLight){const ae=t.get(J);if(ae.color.copy(J.color).multiplyScalar(J.intensity*L),J.castShadow){const Le=J.shadow,Me=n.get(J);Me.shadowBias=Le.bias,Me.shadowNormalBias=Le.normalBias,Me.shadowRadius=Le.radius,Me.shadowMapSize=Le.mapSize,i.directionalShadow[p]=Me,i.directionalShadowMap[p]=ge,i.directionalShadowMatrix[p]=J.shadow.matrix,A++}i.directional[p]=ae,p++}else if(J.isSpotLight){const ae=t.get(J);ae.position.setFromMatrixPosition(J.matrixWorld),ae.color.copy(Y).multiplyScalar(re*L),ae.distance=me,ae.coneCos=Math.cos(J.angle),ae.penumbraCos=Math.cos(J.angle*(1-J.penumbra)),ae.decay=J.decay,i.spot[_]=ae;const Le=J.shadow;if(J.map&&(i.spotLightMap[P]=J.map,P++,Le.updateMatrices(J),J.castShadow&&M++),i.spotLightMatrix[_]=Le.matrix,J.castShadow){const Me=n.get(J);Me.shadowBias=Le.bias,Me.shadowNormalBias=Le.normalBias,Me.shadowRadius=Le.radius,Me.shadowMapSize=Le.mapSize,i.spotShadow[_]=Me,i.spotShadowMap[_]=ge,I++}_++}else if(J.isRectAreaLight){const ae=t.get(J);ae.color.copy(Y).multiplyScalar(re),ae.halfWidth.set(J.width*.5,0,0),ae.halfHeight.set(0,J.height*.5,0),i.rectArea[E]=ae,E++}else if(J.isPointLight){const ae=t.get(J);if(ae.color.copy(J.color).multiplyScalar(J.intensity*L),ae.distance=J.distance,ae.decay=J.decay,J.castShadow){const Le=J.shadow,Me=n.get(J);Me.shadowBias=Le.bias,Me.shadowNormalBias=Le.normalBias,Me.shadowRadius=Le.radius,Me.shadowMapSize=Le.mapSize,Me.shadowCameraNear=Le.camera.near,Me.shadowCameraFar=Le.camera.far,i.pointShadow[m]=Me,i.pointShadowMap[m]=ge,i.pointShadowMatrix[m]=J.shadow.matrix,w++}i.point[m]=ae,m++}else if(J.isHemisphereLight){const ae=t.get(J);ae.skyColor.copy(J.color).multiplyScalar(re*L),ae.groundColor.copy(J.groundColor).multiplyScalar(re*L),i.hemi[T]=ae,T++}}E>0&&(e.isWebGL2||l.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Rt.LTC_FLOAT_1,i.rectAreaLTC2=Rt.LTC_FLOAT_2):l.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Rt.LTC_HALF_1,i.rectAreaLTC2=Rt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=v,i.ambient[2]=x;const D=i.hash;(D.directionalLength!==p||D.pointLength!==m||D.spotLength!==_||D.rectAreaLength!==E||D.hemiLength!==T||D.numDirectionalShadows!==A||D.numPointShadows!==w||D.numSpotShadows!==I||D.numSpotMaps!==P)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=E,i.point.length=m,i.hemi.length=T,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=I,i.spotShadowMap.length=I,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=I+P-M,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=M,D.directionalLength=p,D.pointLength=m,D.spotLength=_,D.rectAreaLength=E,D.hemiLength=T,D.numDirectionalShadows=A,D.numPointShadows=w,D.numSpotShadows=I,D.numSpotMaps=P,i.version=m2++)}function c(f,h){let d=0,v=0,x=0,p=0,m=0;const _=h.matrixWorldInverse;for(let E=0,T=f.length;E<T;E++){const A=f[E];if(A.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(A.matrixWorld),a.setFromMatrixPosition(A.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(_),d++}else if(A.isSpotLight){const w=i.spot[x];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(A.matrixWorld),a.setFromMatrixPosition(A.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(_),x++}else if(A.isRectAreaLight){const w=i.rectArea[p];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(_),s.identity(),o.copy(A.matrixWorld),o.premultiply(_),s.extractRotation(o),w.halfWidth.set(A.width*.5,0,0),w.halfHeight.set(0,A.height*.5,0),w.halfWidth.applyMatrix4(s),w.halfHeight.applyMatrix4(s),p++}else if(A.isPointLight){const w=i.point[v];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(_),v++}else if(A.isHemisphereLight){const w=i.hemi[m];w.direction.setFromMatrixPosition(A.matrixWorld),w.direction.transformDirection(_),m++}}}return{setup:u,setupView:c,state:i}}function l0(l,e){const t=new g2(l,e),n=[],i=[];function a(){n.length=0,i.length=0}function o(h){n.push(h)}function s(h){i.push(h)}function u(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:a,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:u,setupLightsView:c,pushLight:o,pushShadow:s}}function _2(l,e){let t=new WeakMap;function n(a,o=0){const s=t.get(a);let u;return s===void 0?(u=new l0(l,e),t.set(a,[u])):o>=s.length?(u=new l0(l,e),s.push(u)):u=s[o],u}function i(){t=new WeakMap}return{get:n,dispose:i}}class x2 extends Ec{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Py,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class y2 extends Ec{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new Ae,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const b2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function S2(l,e,t){let n=new Wv;const i=new Jt,a=new Jt,o=new ur,s=new x2({depthPacking:Ly}),u=new y2,c={},f=t.maxTextureSize,h={0:ti,1:Vs,2:na},d=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Jt},radius:{value:4}},vertexShader:b2,fragmentShader:w2}),v=d.clone();v.defines.HORIZONTAL_PASS=1;const x=new Hi;x.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Vr(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Av,this.render=function(A,w,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const P=l.getRenderTarget(),M=l.getActiveCubeFace(),L=l.getActiveMipmapLevel(),D=l.state;D.setBlending(sa),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let z=0,Q=A.length;z<Q;z++){const J=A[z],Y=J.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const re=Y.getFrameExtents();if(i.multiply(re),a.copy(Y.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(a.x=Math.floor(f/re.x),i.x=a.x*re.x,Y.mapSize.x=a.x),i.y>f&&(a.y=Math.floor(f/re.y),i.y=a.y*re.y,Y.mapSize.y=a.y)),Y.map===null){const ge=this.type!==To?{minFilter:dr,magFilter:dr}:{};Y.map=new fi(i.x,i.y,ge),Y.map.texture.name=J.name+".shadowMap",Y.camera.updateProjectionMatrix()}l.setRenderTarget(Y.map),l.clear();const me=Y.getViewportCount();for(let ge=0;ge<me;ge++){const ae=Y.getViewport(ge);o.set(a.x*ae.x,a.y*ae.y,a.x*ae.z,a.y*ae.w),D.viewport(o),Y.updateMatrices(J,ge),n=Y.getFrustum(),T(w,I,Y.camera,J,this.type)}Y.isPointLightShadow!==!0&&this.type===To&&_(Y,I),Y.needsUpdate=!1}m.needsUpdate=!1,l.setRenderTarget(P,M,L)};function _(A,w){const I=e.update(p);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,v.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,v.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new fi(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,l.setRenderTarget(A.mapPass),l.clear(),l.renderBufferDirect(w,null,I,d,p,null),v.uniforms.shadow_pass.value=A.mapPass.texture,v.uniforms.resolution.value=A.mapSize,v.uniforms.radius.value=A.radius,l.setRenderTarget(A.map),l.clear(),l.renderBufferDirect(w,null,I,v,p,null)}function E(A,w,I,P,M,L){let D=null;const z=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(z!==void 0?D=z:D=I.isPointLight===!0?u:s,l.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const Q=D.uuid,J=w.uuid;let Y=c[Q];Y===void 0&&(Y={},c[Q]=Y);let re=Y[J];re===void 0&&(re=D.clone(),Y[J]=re),D=re}return D.visible=w.visible,D.wireframe=w.wireframe,L===To?D.side=w.shadowSide!==null?w.shadowSide:w.side:D.side=w.shadowSide!==null?w.shadowSide:h[w.side],D.alphaMap=w.alphaMap,D.alphaTest=w.alphaTest,D.map=w.map,D.clipShadows=w.clipShadows,D.clippingPlanes=w.clippingPlanes,D.clipIntersection=w.clipIntersection,D.displacementMap=w.displacementMap,D.displacementScale=w.displacementScale,D.displacementBias=w.displacementBias,D.wireframeLinewidth=w.wireframeLinewidth,D.linewidth=w.linewidth,I.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(I.matrixWorld),D.nearDistance=P,D.farDistance=M),D}function T(A,w,I,P,M){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===To)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const z=e.update(A),Q=A.material;if(Array.isArray(Q)){const J=z.groups;for(let Y=0,re=J.length;Y<re;Y++){const me=J[Y],ge=Q[me.materialIndex];if(ge&&ge.visible){const ae=E(A,ge,P,I.near,I.far,M);l.renderBufferDirect(I,null,z,ae,A,me)}}}else if(Q.visible){const J=E(A,Q,P,I.near,I.far,M);l.renderBufferDirect(I,null,z,J,A,null)}}const D=A.children;for(let z=0,Q=D.length;z<Q;z++)T(D[z],w,I,P,M)}}function M2(l,e,t){const n=t.isWebGL2;function i(){let se=!1;const Be=new ur;let F=null;const C=new ur(0,0,0,0);return{setMask:function(q){F!==q&&!se&&(l.colorMask(q,q,q,q),F=q)},setLocked:function(q){se=q},setClear:function(q,ne,De,Re,Xe){Xe===!0&&(q*=Re,ne*=Re,De*=Re),Be.set(q,ne,De,Re),C.equals(Be)===!1&&(l.clearColor(q,ne,De,Re),C.copy(Be))},reset:function(){se=!1,F=null,C.set(-1,0,0,0)}}}function a(){let se=!1,Be=null,F=null,C=null;return{setTest:function(q){q?It(2929):_t(2929)},setMask:function(q){Be!==q&&!se&&(l.depthMask(q),Be=q)},setFunc:function(q){if(F!==q){switch(q){case J1:l.depthFunc(512);break;case ey:l.depthFunc(519);break;case ty:l.depthFunc(513);break;case th:l.depthFunc(515);break;case ny:l.depthFunc(514);break;case ry:l.depthFunc(518);break;case iy:l.depthFunc(516);break;case ay:l.depthFunc(517);break;default:l.depthFunc(515)}F=q}},setLocked:function(q){se=q},setClear:function(q){C!==q&&(l.clearDepth(q),C=q)},reset:function(){se=!1,Be=null,F=null,C=null}}}function o(){let se=!1,Be=null,F=null,C=null,q=null,ne=null,De=null,Re=null,Xe=null;return{setTest:function(tt){se||(tt?It(2960):_t(2960))},setMask:function(tt){Be!==tt&&!se&&(l.stencilMask(tt),Be=tt)},setFunc:function(tt,ut,xt){(F!==tt||C!==ut||q!==xt)&&(l.stencilFunc(tt,ut,xt),F=tt,C=ut,q=xt)},setOp:function(tt,ut,xt){(ne!==tt||De!==ut||Re!==xt)&&(l.stencilOp(tt,ut,xt),ne=tt,De=ut,Re=xt)},setLocked:function(tt){se=tt},setClear:function(tt){Xe!==tt&&(l.clearStencil(tt),Xe=tt)},reset:function(){se=!1,Be=null,F=null,C=null,q=null,ne=null,De=null,Re=null,Xe=null}}}const s=new i,u=new a,c=new o,f=new WeakMap,h=new WeakMap;let d={},v={},x=new WeakMap,p=[],m=null,_=!1,E=null,T=null,A=null,w=null,I=null,P=null,M=null,L=!1,D=null,z=null,Q=null,J=null,Y=null;const re=l.getParameter(35661);let me=!1,ge=0;const ae=l.getParameter(7938);ae.indexOf("WebGL")!==-1?(ge=parseFloat(/^WebGL (\d)/.exec(ae)[1]),me=ge>=1):ae.indexOf("OpenGL ES")!==-1&&(ge=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),me=ge>=2);let Le=null,Me={};const fe=l.getParameter(3088),V=l.getParameter(2978),le=new ur().fromArray(fe),de=new ur().fromArray(V);function Fe(se,Be,F){const C=new Uint8Array(4),q=l.createTexture();l.bindTexture(se,q),l.texParameteri(se,10241,9728),l.texParameteri(se,10240,9728);for(let ne=0;ne<F;ne++)l.texImage2D(Be+ne,0,6408,1,1,0,6408,5121,C);return q}const Se={};Se[3553]=Fe(3553,3553,1),Se[34067]=Fe(34067,34069,6),s.setClear(0,0,0,1),u.setClear(1),c.setClear(0),It(2929),u.setFunc(th),Ve(!1),ft(Qp),It(2884),$e(sa);function It(se){d[se]!==!0&&(l.enable(se),d[se]=!0)}function _t(se){d[se]!==!1&&(l.disable(se),d[se]=!1)}function Dt(se,Be){return v[se]!==Be?(l.bindFramebuffer(se,Be),v[se]=Be,n&&(se===36009&&(v[36160]=Be),se===36160&&(v[36009]=Be)),!0):!1}function bt(se,Be){let F=p,C=!1;if(se)if(F=x.get(Be),F===void 0&&(F=[],x.set(Be,F)),se.isWebGLMultipleRenderTargets){const q=se.texture;if(F.length!==q.length||F[0]!==36064){for(let ne=0,De=q.length;ne<De;ne++)F[ne]=36064+ne;F.length=q.length,C=!0}}else F[0]!==36064&&(F[0]=36064,C=!0);else F[0]!==1029&&(F[0]=1029,C=!0);C&&(t.isWebGL2?l.drawBuffers(F):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(F))}function ye(se){return m!==se?(l.useProgram(se),m=se,!0):!1}const qe={[Is]:32774,[V1]:32778,[H1]:32779};if(n)qe[nm]=32775,qe[rm]=32776;else{const se=e.get("EXT_blend_minmax");se!==null&&(qe[nm]=se.MIN_EXT,qe[rm]=se.MAX_EXT)}const Ce={[W1]:0,[q1]:1,[X1]:768,[Cv]:770,[Q1]:776,[Z1]:774,[$1]:772,[j1]:769,[Pv]:771,[K1]:775,[Y1]:773};function $e(se,Be,F,C,q,ne,De,Re){if(se===sa){_===!0&&(_t(3042),_=!1);return}if(_===!1&&(It(3042),_=!0),se!==G1){if(se!==E||Re!==L){if((T!==Is||I!==Is)&&(l.blendEquation(32774),T=Is,I=Is),Re)switch(se){case zs:l.blendFuncSeparate(1,771,1,771);break;case Jp:l.blendFunc(1,1);break;case em:l.blendFuncSeparate(0,769,0,1);break;case tm:l.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",se);break}else switch(se){case zs:l.blendFuncSeparate(770,771,1,771);break;case Jp:l.blendFunc(770,1);break;case em:l.blendFuncSeparate(0,769,0,1);break;case tm:l.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",se);break}A=null,w=null,P=null,M=null,E=se,L=Re}return}q=q||Be,ne=ne||F,De=De||C,(Be!==T||q!==I)&&(l.blendEquationSeparate(qe[Be],qe[q]),T=Be,I=q),(F!==A||C!==w||ne!==P||De!==M)&&(l.blendFuncSeparate(Ce[F],Ce[C],Ce[ne],Ce[De]),A=F,w=C,P=ne,M=De),E=se,L=!1}function Je(se,Be){se.side===na?_t(2884):It(2884);let F=se.side===ti;Be&&(F=!F),Ve(F),se.blending===zs&&se.transparent===!1?$e(sa):$e(se.blending,se.blendEquation,se.blendSrc,se.blendDst,se.blendEquationAlpha,se.blendSrcAlpha,se.blendDstAlpha,se.premultipliedAlpha),u.setFunc(se.depthFunc),u.setTest(se.depthTest),u.setMask(se.depthWrite),s.setMask(se.colorWrite);const C=se.stencilWrite;c.setTest(C),C&&(c.setMask(se.stencilWriteMask),c.setFunc(se.stencilFunc,se.stencilRef,se.stencilFuncMask),c.setOp(se.stencilFail,se.stencilZFail,se.stencilZPass)),St(se.polygonOffset,se.polygonOffsetFactor,se.polygonOffsetUnits),se.alphaToCoverage===!0?It(32926):_t(32926)}function Ve(se){D!==se&&(se?l.frontFace(2304):l.frontFace(2305),D=se)}function ft(se){se!==k1?(It(2884),se!==z&&(se===Qp?l.cullFace(1029):se===B1?l.cullFace(1028):l.cullFace(1032))):_t(2884),z=se}function ht(se){se!==Q&&(me&&l.lineWidth(se),Q=se)}function St(se,Be,F){se?(It(32823),(J!==Be||Y!==F)&&(l.polygonOffset(Be,F),J=Be,Y=F)):_t(32823)}function pn(se){se?It(3089):_t(3089)}function Sn(se){se===void 0&&(se=33984+re-1),Le!==se&&(l.activeTexture(se),Le=se)}function W(se,Be,F){F===void 0&&(Le===null?F=33984+re-1:F=Le);let C=Me[F];C===void 0&&(C={type:void 0,texture:void 0},Me[F]=C),(C.type!==se||C.texture!==Be)&&(Le!==F&&(l.activeTexture(F),Le=F),l.bindTexture(se,Be||Se[se]),C.type=se,C.texture=Be)}function y(){const se=Me[Le];se!==void 0&&se.type!==void 0&&(l.bindTexture(se.type,null),se.type=void 0,se.texture=void 0)}function ke(){try{l.compressedTexImage2D.apply(l,arguments)}catch(se){console.error("THREE.WebGLState:",se)}}function mt(){try{l.compressedTexImage3D.apply(l,arguments)}catch(se){console.error("THREE.WebGLState:",se)}}function gt(){try{l.texSubImage2D.apply(l,arguments)}catch(se){console.error("THREE.WebGLState:",se)}}function Pt(){try{l.texSubImage3D.apply(l,arguments)}catch(se){console.error("THREE.WebGLState:",se)}}function Gt(){try{l.compressedTexSubImage2D.apply(l,arguments)}catch(se){console.error("THREE.WebGLState:",se)}}function Z(){try{l.compressedTexSubImage3D.apply(l,arguments)}catch(se){console.error("THREE.WebGLState:",se)}}function _e(){try{l.texStorage2D.apply(l,arguments)}catch(se){console.error("THREE.WebGLState:",se)}}function Lt(){try{l.texStorage3D.apply(l,arguments)}catch(se){console.error("THREE.WebGLState:",se)}}function rt(){try{l.texImage2D.apply(l,arguments)}catch(se){console.error("THREE.WebGLState:",se)}}function Mt(){try{l.texImage3D.apply(l,arguments)}catch(se){console.error("THREE.WebGLState:",se)}}function Ot(se){le.equals(se)===!1&&(l.scissor(se.x,se.y,se.z,se.w),le.copy(se))}function Tt(se){de.equals(se)===!1&&(l.viewport(se.x,se.y,se.z,se.w),de.copy(se))}function Qt(se,Be){let F=h.get(Be);F===void 0&&(F=new WeakMap,h.set(Be,F));let C=F.get(se);C===void 0&&(C=l.getUniformBlockIndex(Be,se.name),F.set(se,C))}function an(se,Be){const C=h.get(Be).get(se);f.get(se)!==C&&(l.uniformBlockBinding(Be,C,se.__bindingPointIndex),f.set(se,C))}function xn(){l.disable(3042),l.disable(2884),l.disable(2929),l.disable(32823),l.disable(3089),l.disable(2960),l.disable(32926),l.blendEquation(32774),l.blendFunc(1,0),l.blendFuncSeparate(1,0,1,0),l.colorMask(!0,!0,!0,!0),l.clearColor(0,0,0,0),l.depthMask(!0),l.depthFunc(513),l.clearDepth(1),l.stencilMask(4294967295),l.stencilFunc(519,0,4294967295),l.stencilOp(7680,7680,7680),l.clearStencil(0),l.cullFace(1029),l.frontFace(2305),l.polygonOffset(0,0),l.activeTexture(33984),l.bindFramebuffer(36160,null),n===!0&&(l.bindFramebuffer(36009,null),l.bindFramebuffer(36008,null)),l.useProgram(null),l.lineWidth(1),l.scissor(0,0,l.canvas.width,l.canvas.height),l.viewport(0,0,l.canvas.width,l.canvas.height),d={},Le=null,Me={},v={},x=new WeakMap,p=[],m=null,_=!1,E=null,T=null,A=null,w=null,I=null,P=null,M=null,L=!1,D=null,z=null,Q=null,J=null,Y=null,le.set(0,0,l.canvas.width,l.canvas.height),de.set(0,0,l.canvas.width,l.canvas.height),s.reset(),u.reset(),c.reset()}return{buffers:{color:s,depth:u,stencil:c},enable:It,disable:_t,bindFramebuffer:Dt,drawBuffers:bt,useProgram:ye,setBlending:$e,setMaterial:Je,setFlipSided:Ve,setCullFace:ft,setLineWidth:ht,setPolygonOffset:St,setScissorTest:pn,activeTexture:Sn,bindTexture:W,unbindTexture:y,compressedTexImage2D:ke,compressedTexImage3D:mt,texImage2D:rt,texImage3D:Mt,updateUBOMapping:Qt,uniformBlockBinding:an,texStorage2D:_e,texStorage3D:Lt,texSubImage2D:gt,texSubImage3D:Pt,compressedTexSubImage2D:Gt,compressedTexSubImage3D:Z,scissor:Ot,viewport:Tt,reset:xn}}function E2(l,e,t,n,i,a,o){const s=i.isWebGL2,u=i.maxTextures,c=i.maxCubemapSize,f=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,v=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let p;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(W,y){return _?new OffscreenCanvas(W,y):Bo("canvas")}function T(W,y,ke,mt){let gt=1;if((W.width>mt||W.height>mt)&&(gt=mt/Math.max(W.width,W.height)),gt<1||y===!0)if(typeof HTMLImageElement<"u"&&W instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&W instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&W instanceof ImageBitmap){const Pt=y?oh:Math.floor,Gt=Pt(gt*W.width),Z=Pt(gt*W.height);p===void 0&&(p=E(Gt,Z));const _e=ke?E(Gt,Z):p;return _e.width=Gt,_e.height=Z,_e.getContext("2d").drawImage(W,0,0,Gt,Z),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+Gt+"x"+Z+")."),_e}else return"data"in W&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),W;return W}function A(W){return Lm(W.width)&&Lm(W.height)}function w(W){return s?!1:W.wrapS!==wr||W.wrapT!==wr||W.minFilter!==dr&&W.minFilter!==Un}function I(W,y){return W.generateMipmaps&&y&&W.minFilter!==dr&&W.minFilter!==Un}function P(W){l.generateMipmap(W)}function M(W,y,ke,mt,gt=!1){if(s===!1)return y;if(W!==null){if(l[W]!==void 0)return l[W];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+W+"'")}let Pt=y;return y===6403&&(ke===5126&&(Pt=33326),ke===5131&&(Pt=33325),ke===5121&&(Pt=33321)),y===33319&&(ke===5126&&(Pt=33328),ke===5131&&(Pt=33327),ke===5121&&(Pt=33323)),y===6408&&(ke===5126&&(Pt=34836),ke===5131&&(Pt=34842),ke===5121&&(Pt=mt===In&&gt===!1?35907:32856),ke===32819&&(Pt=32854),ke===32820&&(Pt=32855)),(Pt===33325||Pt===33326||Pt===33327||Pt===33328||Pt===34842||Pt===34836)&&e.get("EXT_color_buffer_float"),Pt}function L(W,y,ke){return I(W,ke)===!0||W.isFramebufferTexture&&W.minFilter!==dr&&W.minFilter!==Un?Math.log2(Math.max(y.width,y.height))+1:W.mipmaps!==void 0&&W.mipmaps.length>0?W.mipmaps.length:W.isCompressedTexture&&Array.isArray(W.image)?y.mipmaps.length:1}function D(W){return W===dr||W===im||W===am?9728:9729}function z(W){const y=W.target;y.removeEventListener("dispose",z),J(y),y.isVideoTexture&&x.delete(y)}function Q(W){const y=W.target;y.removeEventListener("dispose",Q),re(y)}function J(W){const y=n.get(W);if(y.__webglInit===void 0)return;const ke=W.source,mt=m.get(ke);if(mt){const gt=mt[y.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&Y(W),Object.keys(mt).length===0&&m.delete(ke)}n.remove(W)}function Y(W){const y=n.get(W);l.deleteTexture(y.__webglTexture);const ke=W.source,mt=m.get(ke);delete mt[y.__cacheKey],o.memory.textures--}function re(W){const y=W.texture,ke=n.get(W),mt=n.get(y);if(mt.__webglTexture!==void 0&&(l.deleteTexture(mt.__webglTexture),o.memory.textures--),W.depthTexture&&W.depthTexture.dispose(),W.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++)l.deleteFramebuffer(ke.__webglFramebuffer[gt]),ke.__webglDepthbuffer&&l.deleteRenderbuffer(ke.__webglDepthbuffer[gt]);else{if(l.deleteFramebuffer(ke.__webglFramebuffer),ke.__webglDepthbuffer&&l.deleteRenderbuffer(ke.__webglDepthbuffer),ke.__webglMultisampledFramebuffer&&l.deleteFramebuffer(ke.__webglMultisampledFramebuffer),ke.__webglColorRenderbuffer)for(let gt=0;gt<ke.__webglColorRenderbuffer.length;gt++)ke.__webglColorRenderbuffer[gt]&&l.deleteRenderbuffer(ke.__webglColorRenderbuffer[gt]);ke.__webglDepthRenderbuffer&&l.deleteRenderbuffer(ke.__webglDepthRenderbuffer)}if(W.isWebGLMultipleRenderTargets)for(let gt=0,Pt=y.length;gt<Pt;gt++){const Gt=n.get(y[gt]);Gt.__webglTexture&&(l.deleteTexture(Gt.__webglTexture),o.memory.textures--),n.remove(y[gt])}n.remove(y),n.remove(W)}let me=0;function ge(){me=0}function ae(){const W=me;return W>=u&&console.warn("THREE.WebGLTextures: Trying to use "+W+" texture units while this GPU supports only "+u),me+=1,W}function Le(W){const y=[];return y.push(W.wrapS),y.push(W.wrapT),y.push(W.wrapR||0),y.push(W.magFilter),y.push(W.minFilter),y.push(W.anisotropy),y.push(W.internalFormat),y.push(W.format),y.push(W.type),y.push(W.generateMipmaps),y.push(W.premultiplyAlpha),y.push(W.flipY),y.push(W.unpackAlignment),y.push(W.encoding),y.join()}function Me(W,y){const ke=n.get(W);if(W.isVideoTexture&&pn(W),W.isRenderTargetTexture===!1&&W.version>0&&ke.__version!==W.version){const mt=W.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_t(ke,W,y);return}}t.bindTexture(3553,ke.__webglTexture,33984+y)}function fe(W,y){const ke=n.get(W);if(W.version>0&&ke.__version!==W.version){_t(ke,W,y);return}t.bindTexture(35866,ke.__webglTexture,33984+y)}function V(W,y){const ke=n.get(W);if(W.version>0&&ke.__version!==W.version){_t(ke,W,y);return}t.bindTexture(32879,ke.__webglTexture,33984+y)}function le(W,y){const ke=n.get(W);if(W.version>0&&ke.__version!==W.version){Dt(ke,W,y);return}t.bindTexture(34067,ke.__webglTexture,33984+y)}const de={[ih]:10497,[wr]:33071,[ah]:33648},Fe={[dr]:9728,[im]:9984,[am]:9986,[Un]:9729,[dy]:9985,[Mc]:9987};function Se(W,y,ke){if(ke?(l.texParameteri(W,10242,de[y.wrapS]),l.texParameteri(W,10243,de[y.wrapT]),(W===32879||W===35866)&&l.texParameteri(W,32882,de[y.wrapR]),l.texParameteri(W,10240,Fe[y.magFilter]),l.texParameteri(W,10241,Fe[y.minFilter])):(l.texParameteri(W,10242,33071),l.texParameteri(W,10243,33071),(W===32879||W===35866)&&l.texParameteri(W,32882,33071),(y.wrapS!==wr||y.wrapT!==wr)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),l.texParameteri(W,10240,D(y.magFilter)),l.texParameteri(W,10241,D(y.minFilter)),y.minFilter!==dr&&y.minFilter!==Un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const mt=e.get("EXT_texture_filter_anisotropic");if(y.type===ki&&e.has("OES_texture_float_linear")===!1||s===!1&&y.type===ja&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(l.texParameterf(W,mt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function It(W,y){let ke=!1;W.__webglInit===void 0&&(W.__webglInit=!0,y.addEventListener("dispose",z));const mt=y.source;let gt=m.get(mt);gt===void 0&&(gt={},m.set(mt,gt));const Pt=Le(y);if(Pt!==W.__cacheKey){gt[Pt]===void 0&&(gt[Pt]={texture:l.createTexture(),usedTimes:0},o.memory.textures++,ke=!0),gt[Pt].usedTimes++;const Gt=gt[W.__cacheKey];Gt!==void 0&&(gt[W.__cacheKey].usedTimes--,Gt.usedTimes===0&&Y(y)),W.__cacheKey=Pt,W.__webglTexture=gt[Pt].texture}return ke}function _t(W,y,ke){let mt=3553;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(mt=35866),y.isData3DTexture&&(mt=32879);const gt=It(W,y),Pt=y.source;t.bindTexture(mt,W.__webglTexture,33984+ke);const Gt=n.get(Pt);if(Pt.version!==Gt.__version||gt===!0){t.activeTexture(33984+ke),l.pixelStorei(37440,y.flipY),l.pixelStorei(37441,y.premultiplyAlpha),l.pixelStorei(3317,y.unpackAlignment),l.pixelStorei(37443,0);const Z=w(y)&&A(y.image)===!1;let _e=T(y.image,Z,!1,f);_e=Sn(y,_e);const Lt=A(_e)||s,rt=a.convert(y.format,y.encoding);let Mt=a.convert(y.type),Ot=M(y.internalFormat,rt,Mt,y.encoding,y.isVideoTexture);Se(mt,y,Lt);let Tt;const Qt=y.mipmaps,an=s&&y.isVideoTexture!==!0,xn=Gt.__version===void 0||gt===!0,se=L(y,_e,Lt);if(y.isDepthTexture)Ot=6402,s?y.type===ki?Ot=36012:y.type===ka?Ot=33190:y.type===ks?Ot=35056:Ot=33189:y.type===ki&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Ua&&Ot===6402&&y.type!==Dv&&y.type!==ka&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=ka,Mt=a.convert(y.type)),y.format===qs&&Ot===6402&&(Ot=34041,y.type!==ks&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=ks,Mt=a.convert(y.type))),xn&&(an?t.texStorage2D(3553,1,Ot,_e.width,_e.height):t.texImage2D(3553,0,Ot,_e.width,_e.height,0,rt,Mt,null));else if(y.isDataTexture)if(Qt.length>0&&Lt){an&&xn&&t.texStorage2D(3553,se,Ot,Qt[0].width,Qt[0].height);for(let Be=0,F=Qt.length;Be<F;Be++)Tt=Qt[Be],an?t.texSubImage2D(3553,Be,0,0,Tt.width,Tt.height,rt,Mt,Tt.data):t.texImage2D(3553,Be,Ot,Tt.width,Tt.height,0,rt,Mt,Tt.data);y.generateMipmaps=!1}else an?(xn&&t.texStorage2D(3553,se,Ot,_e.width,_e.height),t.texSubImage2D(3553,0,0,0,_e.width,_e.height,rt,Mt,_e.data)):t.texImage2D(3553,0,Ot,_e.width,_e.height,0,rt,Mt,_e.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){an&&xn&&t.texStorage3D(35866,se,Ot,Qt[0].width,Qt[0].height,_e.depth);for(let Be=0,F=Qt.length;Be<F;Be++)Tt=Qt[Be],y.format!==Br?rt!==null?an?t.compressedTexSubImage3D(35866,Be,0,0,0,Tt.width,Tt.height,_e.depth,rt,Tt.data,0,0):t.compressedTexImage3D(35866,Be,Ot,Tt.width,Tt.height,_e.depth,0,Tt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):an?t.texSubImage3D(35866,Be,0,0,0,Tt.width,Tt.height,_e.depth,rt,Mt,Tt.data):t.texImage3D(35866,Be,Ot,Tt.width,Tt.height,_e.depth,0,rt,Mt,Tt.data)}else{an&&xn&&t.texStorage2D(3553,se,Ot,Qt[0].width,Qt[0].height);for(let Be=0,F=Qt.length;Be<F;Be++)Tt=Qt[Be],y.format!==Br?rt!==null?an?t.compressedTexSubImage2D(3553,Be,0,0,Tt.width,Tt.height,rt,Tt.data):t.compressedTexImage2D(3553,Be,Ot,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):an?t.texSubImage2D(3553,Be,0,0,Tt.width,Tt.height,rt,Mt,Tt.data):t.texImage2D(3553,Be,Ot,Tt.width,Tt.height,0,rt,Mt,Tt.data)}else if(y.isDataArrayTexture)an?(xn&&t.texStorage3D(35866,se,Ot,_e.width,_e.height,_e.depth),t.texSubImage3D(35866,0,0,0,0,_e.width,_e.height,_e.depth,rt,Mt,_e.data)):t.texImage3D(35866,0,Ot,_e.width,_e.height,_e.depth,0,rt,Mt,_e.data);else if(y.isData3DTexture)an?(xn&&t.texStorage3D(32879,se,Ot,_e.width,_e.height,_e.depth),t.texSubImage3D(32879,0,0,0,0,_e.width,_e.height,_e.depth,rt,Mt,_e.data)):t.texImage3D(32879,0,Ot,_e.width,_e.height,_e.depth,0,rt,Mt,_e.data);else if(y.isFramebufferTexture){if(xn)if(an)t.texStorage2D(3553,se,Ot,_e.width,_e.height);else{let Be=_e.width,F=_e.height;for(let C=0;C<se;C++)t.texImage2D(3553,C,Ot,Be,F,0,rt,Mt,null),Be>>=1,F>>=1}}else if(Qt.length>0&&Lt){an&&xn&&t.texStorage2D(3553,se,Ot,Qt[0].width,Qt[0].height);for(let Be=0,F=Qt.length;Be<F;Be++)Tt=Qt[Be],an?t.texSubImage2D(3553,Be,0,0,rt,Mt,Tt):t.texImage2D(3553,Be,Ot,rt,Mt,Tt);y.generateMipmaps=!1}else an?(xn&&t.texStorage2D(3553,se,Ot,_e.width,_e.height),t.texSubImage2D(3553,0,0,0,rt,Mt,_e)):t.texImage2D(3553,0,Ot,rt,Mt,_e);I(y,Lt)&&P(mt),Gt.__version=Pt.version,y.onUpdate&&y.onUpdate(y)}W.__version=y.version}function Dt(W,y,ke){if(y.image.length!==6)return;const mt=It(W,y),gt=y.source;t.bindTexture(34067,W.__webglTexture,33984+ke);const Pt=n.get(gt);if(gt.version!==Pt.__version||mt===!0){t.activeTexture(33984+ke),l.pixelStorei(37440,y.flipY),l.pixelStorei(37441,y.premultiplyAlpha),l.pixelStorei(3317,y.unpackAlignment),l.pixelStorei(37443,0);const Gt=y.isCompressedTexture||y.image[0].isCompressedTexture,Z=y.image[0]&&y.image[0].isDataTexture,_e=[];for(let Be=0;Be<6;Be++)!Gt&&!Z?_e[Be]=T(y.image[Be],!1,!0,c):_e[Be]=Z?y.image[Be].image:y.image[Be],_e[Be]=Sn(y,_e[Be]);const Lt=_e[0],rt=A(Lt)||s,Mt=a.convert(y.format,y.encoding),Ot=a.convert(y.type),Tt=M(y.internalFormat,Mt,Ot,y.encoding),Qt=s&&y.isVideoTexture!==!0,an=Pt.__version===void 0||mt===!0;let xn=L(y,Lt,rt);Se(34067,y,rt);let se;if(Gt){Qt&&an&&t.texStorage2D(34067,xn,Tt,Lt.width,Lt.height);for(let Be=0;Be<6;Be++){se=_e[Be].mipmaps;for(let F=0;F<se.length;F++){const C=se[F];y.format!==Br?Mt!==null?Qt?t.compressedTexSubImage2D(34069+Be,F,0,0,C.width,C.height,Mt,C.data):t.compressedTexImage2D(34069+Be,F,Tt,C.width,C.height,0,C.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qt?t.texSubImage2D(34069+Be,F,0,0,C.width,C.height,Mt,Ot,C.data):t.texImage2D(34069+Be,F,Tt,C.width,C.height,0,Mt,Ot,C.data)}}}else{se=y.mipmaps,Qt&&an&&(se.length>0&&xn++,t.texStorage2D(34067,xn,Tt,_e[0].width,_e[0].height));for(let Be=0;Be<6;Be++)if(Z){Qt?t.texSubImage2D(34069+Be,0,0,0,_e[Be].width,_e[Be].height,Mt,Ot,_e[Be].data):t.texImage2D(34069+Be,0,Tt,_e[Be].width,_e[Be].height,0,Mt,Ot,_e[Be].data);for(let F=0;F<se.length;F++){const q=se[F].image[Be].image;Qt?t.texSubImage2D(34069+Be,F+1,0,0,q.width,q.height,Mt,Ot,q.data):t.texImage2D(34069+Be,F+1,Tt,q.width,q.height,0,Mt,Ot,q.data)}}else{Qt?t.texSubImage2D(34069+Be,0,0,0,Mt,Ot,_e[Be]):t.texImage2D(34069+Be,0,Tt,Mt,Ot,_e[Be]);for(let F=0;F<se.length;F++){const C=se[F];Qt?t.texSubImage2D(34069+Be,F+1,0,0,Mt,Ot,C.image[Be]):t.texImage2D(34069+Be,F+1,Tt,Mt,Ot,C.image[Be])}}}I(y,rt)&&P(34067),Pt.__version=gt.version,y.onUpdate&&y.onUpdate(y)}W.__version=y.version}function bt(W,y,ke,mt,gt){const Pt=a.convert(ke.format,ke.encoding),Gt=a.convert(ke.type),Z=M(ke.internalFormat,Pt,Gt,ke.encoding);n.get(y).__hasExternalTextures||(gt===32879||gt===35866?t.texImage3D(gt,0,Z,y.width,y.height,y.depth,0,Pt,Gt,null):t.texImage2D(gt,0,Z,y.width,y.height,0,Pt,Gt,null)),t.bindFramebuffer(36160,W),St(y)?d.framebufferTexture2DMultisampleEXT(36160,mt,gt,n.get(ke).__webglTexture,0,ht(y)):(gt===3553||gt>=34069&&gt<=34074)&&l.framebufferTexture2D(36160,mt,gt,n.get(ke).__webglTexture,0),t.bindFramebuffer(36160,null)}function ye(W,y,ke){if(l.bindRenderbuffer(36161,W),y.depthBuffer&&!y.stencilBuffer){let mt=33189;if(ke||St(y)){const gt=y.depthTexture;gt&&gt.isDepthTexture&&(gt.type===ki?mt=36012:gt.type===ka&&(mt=33190));const Pt=ht(y);St(y)?d.renderbufferStorageMultisampleEXT(36161,Pt,mt,y.width,y.height):l.renderbufferStorageMultisample(36161,Pt,mt,y.width,y.height)}else l.renderbufferStorage(36161,mt,y.width,y.height);l.framebufferRenderbuffer(36160,36096,36161,W)}else if(y.depthBuffer&&y.stencilBuffer){const mt=ht(y);ke&&St(y)===!1?l.renderbufferStorageMultisample(36161,mt,35056,y.width,y.height):St(y)?d.renderbufferStorageMultisampleEXT(36161,mt,35056,y.width,y.height):l.renderbufferStorage(36161,34041,y.width,y.height),l.framebufferRenderbuffer(36160,33306,36161,W)}else{const mt=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let gt=0;gt<mt.length;gt++){const Pt=mt[gt],Gt=a.convert(Pt.format,Pt.encoding),Z=a.convert(Pt.type),_e=M(Pt.internalFormat,Gt,Z,Pt.encoding),Lt=ht(y);ke&&St(y)===!1?l.renderbufferStorageMultisample(36161,Lt,_e,y.width,y.height):St(y)?d.renderbufferStorageMultisampleEXT(36161,Lt,_e,y.width,y.height):l.renderbufferStorage(36161,_e,y.width,y.height)}}l.bindRenderbuffer(36161,null)}function qe(W,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,W),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Me(y.depthTexture,0);const mt=n.get(y.depthTexture).__webglTexture,gt=ht(y);if(y.depthTexture.format===Ua)St(y)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,mt,0,gt):l.framebufferTexture2D(36160,36096,3553,mt,0);else if(y.depthTexture.format===qs)St(y)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,mt,0,gt):l.framebufferTexture2D(36160,33306,3553,mt,0);else throw new Error("Unknown depthTexture format")}function Ce(W){const y=n.get(W),ke=W.isWebGLCubeRenderTarget===!0;if(W.depthTexture&&!y.__autoAllocateDepthBuffer){if(ke)throw new Error("target.depthTexture not supported in Cube render targets");qe(y.__webglFramebuffer,W)}else if(ke){y.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)t.bindFramebuffer(36160,y.__webglFramebuffer[mt]),y.__webglDepthbuffer[mt]=l.createRenderbuffer(),ye(y.__webglDepthbuffer[mt],W,!1)}else t.bindFramebuffer(36160,y.__webglFramebuffer),y.__webglDepthbuffer=l.createRenderbuffer(),ye(y.__webglDepthbuffer,W,!1);t.bindFramebuffer(36160,null)}function $e(W,y,ke){const mt=n.get(W);y!==void 0&&bt(mt.__webglFramebuffer,W,W.texture,36064,3553),ke!==void 0&&Ce(W)}function Je(W){const y=W.texture,ke=n.get(W),mt=n.get(y);W.addEventListener("dispose",Q),W.isWebGLMultipleRenderTargets!==!0&&(mt.__webglTexture===void 0&&(mt.__webglTexture=l.createTexture()),mt.__version=y.version,o.memory.textures++);const gt=W.isWebGLCubeRenderTarget===!0,Pt=W.isWebGLMultipleRenderTargets===!0,Gt=A(W)||s;if(gt){ke.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)ke.__webglFramebuffer[Z]=l.createFramebuffer()}else{if(ke.__webglFramebuffer=l.createFramebuffer(),Pt)if(i.drawBuffers){const Z=W.texture;for(let _e=0,Lt=Z.length;_e<Lt;_e++){const rt=n.get(Z[_e]);rt.__webglTexture===void 0&&(rt.__webglTexture=l.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&W.samples>0&&St(W)===!1){const Z=Pt?y:[y];ke.__webglMultisampledFramebuffer=l.createFramebuffer(),ke.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,ke.__webglMultisampledFramebuffer);for(let _e=0;_e<Z.length;_e++){const Lt=Z[_e];ke.__webglColorRenderbuffer[_e]=l.createRenderbuffer(),l.bindRenderbuffer(36161,ke.__webglColorRenderbuffer[_e]);const rt=a.convert(Lt.format,Lt.encoding),Mt=a.convert(Lt.type),Ot=M(Lt.internalFormat,rt,Mt,Lt.encoding,W.isXRRenderTarget===!0),Tt=ht(W);l.renderbufferStorageMultisample(36161,Tt,Ot,W.width,W.height),l.framebufferRenderbuffer(36160,36064+_e,36161,ke.__webglColorRenderbuffer[_e])}l.bindRenderbuffer(36161,null),W.depthBuffer&&(ke.__webglDepthRenderbuffer=l.createRenderbuffer(),ye(ke.__webglDepthRenderbuffer,W,!0)),t.bindFramebuffer(36160,null)}}if(gt){t.bindTexture(34067,mt.__webglTexture),Se(34067,y,Gt);for(let Z=0;Z<6;Z++)bt(ke.__webglFramebuffer[Z],W,y,36064,34069+Z);I(y,Gt)&&P(34067),t.unbindTexture()}else if(Pt){const Z=W.texture;for(let _e=0,Lt=Z.length;_e<Lt;_e++){const rt=Z[_e],Mt=n.get(rt);t.bindTexture(3553,Mt.__webglTexture),Se(3553,rt,Gt),bt(ke.__webglFramebuffer,W,rt,36064+_e,3553),I(rt,Gt)&&P(3553)}t.unbindTexture()}else{let Z=3553;(W.isWebGL3DRenderTarget||W.isWebGLArrayRenderTarget)&&(s?Z=W.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Z,mt.__webglTexture),Se(Z,y,Gt),bt(ke.__webglFramebuffer,W,y,36064,Z),I(y,Gt)&&P(Z),t.unbindTexture()}W.depthBuffer&&Ce(W)}function Ve(W){const y=A(W)||s,ke=W.isWebGLMultipleRenderTargets===!0?W.texture:[W.texture];for(let mt=0,gt=ke.length;mt<gt;mt++){const Pt=ke[mt];if(I(Pt,y)){const Gt=W.isWebGLCubeRenderTarget?34067:3553,Z=n.get(Pt).__webglTexture;t.bindTexture(Gt,Z),P(Gt),t.unbindTexture()}}}function ft(W){if(s&&W.samples>0&&St(W)===!1){const y=W.isWebGLMultipleRenderTargets?W.texture:[W.texture],ke=W.width,mt=W.height;let gt=16384;const Pt=[],Gt=W.stencilBuffer?33306:36096,Z=n.get(W),_e=W.isWebGLMultipleRenderTargets===!0;if(_e)for(let Lt=0;Lt<y.length;Lt++)t.bindFramebuffer(36160,Z.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(36160,36064+Lt,36161,null),t.bindFramebuffer(36160,Z.__webglFramebuffer),l.framebufferTexture2D(36009,36064+Lt,3553,null,0);t.bindFramebuffer(36008,Z.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,Z.__webglFramebuffer);for(let Lt=0;Lt<y.length;Lt++){Pt.push(36064+Lt),W.depthBuffer&&Pt.push(Gt);const rt=Z.__ignoreDepthValues!==void 0?Z.__ignoreDepthValues:!1;if(rt===!1&&(W.depthBuffer&&(gt|=256),W.stencilBuffer&&(gt|=1024)),_e&&l.framebufferRenderbuffer(36008,36064,36161,Z.__webglColorRenderbuffer[Lt]),rt===!0&&(l.invalidateFramebuffer(36008,[Gt]),l.invalidateFramebuffer(36009,[Gt])),_e){const Mt=n.get(y[Lt]).__webglTexture;l.framebufferTexture2D(36009,36064,3553,Mt,0)}l.blitFramebuffer(0,0,ke,mt,0,0,ke,mt,gt,9728),v&&l.invalidateFramebuffer(36008,Pt)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),_e)for(let Lt=0;Lt<y.length;Lt++){t.bindFramebuffer(36160,Z.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(36160,36064+Lt,36161,Z.__webglColorRenderbuffer[Lt]);const rt=n.get(y[Lt]).__webglTexture;t.bindFramebuffer(36160,Z.__webglFramebuffer),l.framebufferTexture2D(36009,36064+Lt,3553,rt,0)}t.bindFramebuffer(36009,Z.__webglMultisampledFramebuffer)}}function ht(W){return Math.min(h,W.samples)}function St(W){const y=n.get(W);return s&&W.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function pn(W){const y=o.render.frame;x.get(W)!==y&&(x.set(W,y),W.update())}function Sn(W,y){const ke=W.encoding,mt=W.format,gt=W.type;return W.isCompressedTexture===!0||W.isVideoTexture===!0||W.format===sh||ke!==$a&&(ke===In?s===!1?e.has("EXT_sRGB")===!0&&mt===Br?(W.format=sh,W.minFilter=Un,W.generateMipmaps=!1):y=Fv.sRGBToLinear(y):(mt!==Br||gt!==Xa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",ke)),y}this.allocateTextureUnit=ae,this.resetTextureUnits=ge,this.setTexture2D=Me,this.setTexture2DArray=fe,this.setTexture3D=V,this.setTextureCube=le,this.rebindTextures=$e,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=St}function T2(l,e,t){const n=t.isWebGL2;function i(a,o=null){let s;if(a===Xa)return 5121;if(a===gy)return 32819;if(a===_y)return 32820;if(a===py)return 5120;if(a===my)return 5122;if(a===Dv)return 5123;if(a===vy)return 5124;if(a===ka)return 5125;if(a===ki)return 5126;if(a===ja)return n?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===xy)return 6406;if(a===Br)return 6408;if(a===by)return 6409;if(a===wy)return 6410;if(a===Ua)return 6402;if(a===qs)return 34041;if(a===yy)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(a===sh)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===Sy)return 6403;if(a===My)return 36244;if(a===Ey)return 33319;if(a===Ty)return 33320;if(a===Ay)return 36249;if(a===Tu||a===Au||a===Cu||a===Pu)if(o===In)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===Tu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Au)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Cu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Pu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===Tu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Au)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Cu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Pu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===sm||a===om||a===lm||a===cm)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===sm)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===om)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===lm)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===cm)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Cy)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===um||a===fm)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===um)return o===In?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===fm)return o===In?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===hm||a===dm||a===pm||a===mm||a===vm||a===gm||a===_m||a===xm||a===ym||a===bm||a===wm||a===Sm||a===Mm||a===Em)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===hm)return o===In?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===dm)return o===In?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===pm)return o===In?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===mm)return o===In?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===vm)return o===In?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===gm)return o===In?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===_m)return o===In?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===xm)return o===In?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===ym)return o===In?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===bm)return o===In?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===wm)return o===In?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Sm)return o===In?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Mm)return o===In?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Em)return o===In?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Tm)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===Tm)return o===In?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return a===ks?n?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):l[a]!==void 0?l[a]:null}return{convert:i}}class A2 extends Tr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Co extends Wr{constructor(){super(),this.isGroup=!0,this.type="Group"}}const C2={type:"move"};class af{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Co,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Co,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Co,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Ae),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,a=null,o=null;const s=this._targetRay,u=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const p of e.hand.values()){const m=t.getJointPose(p,n),_=this._getHandJoint(c,p);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),v=.02,x=.005;c.inputState.pinching&&d>v+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=v-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(C2)))}return s!==null&&(s.visible=i!==null),u!==null&&(u.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Co;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class P2 extends Ar{constructor(e,t,n,i,a,o,s,u,c,f){if(f=f!==void 0?f:Ua,f!==Ua&&f!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===Ua&&(n=ka),n===void 0&&f===qs&&(n=ks),super(null,i,a,o,s,u,f,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:dr,this.minFilter=u!==void 0?u:dr,this.flipY=!1,this.generateMipmaps=!1}}class L2 extends Ka{constructor(e,t){super();const n=this;let i=null,a=1,o=null,s="local-floor",u=null,c=null,f=null,h=null,d=null,v=null;const x=t.getContextAttributes();let p=null,m=null;const _=[],E=[],T=new Set,A=new Map,w=new Tr;w.layers.enable(1),w.viewport=new ur;const I=new Tr;I.layers.enable(2),I.viewport=new ur;const P=[w,I],M=new A2;M.layers.enable(1),M.layers.enable(2);let L=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(fe){let V=_[fe];return V===void 0&&(V=new af,_[fe]=V),V.getTargetRaySpace()},this.getControllerGrip=function(fe){let V=_[fe];return V===void 0&&(V=new af,_[fe]=V),V.getGripSpace()},this.getHand=function(fe){let V=_[fe];return V===void 0&&(V=new af,_[fe]=V),V.getHandSpace()};function z(fe){const V=E.indexOf(fe.inputSource);if(V===-1)return;const le=_[V];le!==void 0&&le.dispatchEvent({type:fe.type,data:fe.inputSource})}function Q(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",Q),i.removeEventListener("inputsourceschange",J);for(let fe=0;fe<_.length;fe++){const V=E[fe];V!==null&&(E[fe]=null,_[fe].disconnect(V))}L=null,D=null,e.setRenderTarget(p),d=null,h=null,f=null,i=null,m=null,Me.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(fe){a=fe,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(fe){s=fe,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(fe){u=fe},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(fe){if(i=fe,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",Q),i.addEventListener("inputsourceschange",J),x.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(i,t,V),i.updateRenderState({baseLayer:d}),m=new fi(d.framebufferWidth,d.framebufferHeight,{format:Br,type:Xa,encoding:e.outputEncoding,stencilBuffer:x.stencil})}else{let V=null,le=null,de=null;x.depth&&(de=x.stencil?35056:33190,V=x.stencil?qs:Ua,le=x.stencil?ks:ka);const Fe={colorFormat:32856,depthFormat:de,scaleFactor:a};f=new XRWebGLBinding(i,t),h=f.createProjectionLayer(Fe),i.updateRenderState({layers:[h]}),m=new fi(h.textureWidth,h.textureHeight,{format:Br,type:Xa,depthTexture:new P2(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:x.stencil,encoding:e.outputEncoding,samples:x.antialias?4:0});const Se=e.properties.get(m);Se.__ignoreDepthValues=h.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),u=null,o=await i.requestReferenceSpace(s),Me.setContext(i),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function J(fe){for(let V=0;V<fe.removed.length;V++){const le=fe.removed[V],de=E.indexOf(le);de>=0&&(E[de]=null,_[de].disconnect(le))}for(let V=0;V<fe.added.length;V++){const le=fe.added[V];let de=E.indexOf(le);if(de===-1){for(let Se=0;Se<_.length;Se++)if(Se>=E.length){E.push(le),de=Se;break}else if(E[Se]===null){E[Se]=le,de=Se;break}if(de===-1)break}const Fe=_[de];Fe&&Fe.connect(le)}}const Y=new Ae,re=new Ae;function me(fe,V,le){Y.setFromMatrixPosition(V.matrixWorld),re.setFromMatrixPosition(le.matrixWorld);const de=Y.distanceTo(re),Fe=V.projectionMatrix.elements,Se=le.projectionMatrix.elements,It=Fe[14]/(Fe[10]-1),_t=Fe[14]/(Fe[10]+1),Dt=(Fe[9]+1)/Fe[5],bt=(Fe[9]-1)/Fe[5],ye=(Fe[8]-1)/Fe[0],qe=(Se[8]+1)/Se[0],Ce=It*ye,$e=It*qe,Je=de/(-ye+qe),Ve=Je*-ye;V.matrixWorld.decompose(fe.position,fe.quaternion,fe.scale),fe.translateX(Ve),fe.translateZ(Je),fe.matrixWorld.compose(fe.position,fe.quaternion,fe.scale),fe.matrixWorldInverse.copy(fe.matrixWorld).invert();const ft=It+Je,ht=_t+Je,St=Ce-Ve,pn=$e+(de-Ve),Sn=Dt*_t/ht*ft,W=bt*_t/ht*ft;fe.projectionMatrix.makePerspective(St,pn,Sn,W,ft,ht)}function ge(fe,V){V===null?fe.matrixWorld.copy(fe.matrix):fe.matrixWorld.multiplyMatrices(V.matrixWorld,fe.matrix),fe.matrixWorldInverse.copy(fe.matrixWorld).invert()}this.updateCamera=function(fe){if(i===null)return;M.near=I.near=w.near=fe.near,M.far=I.far=w.far=fe.far,(L!==M.near||D!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,D=M.far);const V=fe.parent,le=M.cameras;ge(M,V);for(let Fe=0;Fe<le.length;Fe++)ge(le[Fe],V);M.matrixWorld.decompose(M.position,M.quaternion,M.scale),fe.matrix.copy(M.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale);const de=fe.children;for(let Fe=0,Se=de.length;Fe<Se;Fe++)de[Fe].updateMatrixWorld(!0);le.length===2?me(M,w,I):M.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return M},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(fe){h!==null&&(h.fixedFoveation=fe),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=fe)},this.getPlanes=function(){return T};let ae=null;function Le(fe,V){if(c=V.getViewerPose(u||o),v=V,c!==null){const le=c.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let de=!1;le.length!==M.cameras.length&&(M.cameras.length=0,de=!0);for(let Fe=0;Fe<le.length;Fe++){const Se=le[Fe];let It=null;if(d!==null)It=d.getViewport(Se);else{const Dt=f.getViewSubImage(h,Se);It=Dt.viewport,Fe===0&&(e.setRenderTargetTextures(m,Dt.colorTexture,h.ignoreDepthValues?void 0:Dt.depthStencilTexture),e.setRenderTarget(m))}let _t=P[Fe];_t===void 0&&(_t=new Tr,_t.layers.enable(Fe),_t.viewport=new ur,P[Fe]=_t),_t.matrix.fromArray(Se.transform.matrix),_t.projectionMatrix.fromArray(Se.projectionMatrix),_t.viewport.set(It.x,It.y,It.width,It.height),Fe===0&&M.matrix.copy(_t.matrix),de===!0&&M.cameras.push(_t)}}for(let le=0;le<_.length;le++){const de=E[le],Fe=_[le];de!==null&&Fe!==void 0&&Fe.update(de,V,u||o)}if(ae&&ae(fe,V),V.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:V.detectedPlanes});let le=null;for(const de of T)V.detectedPlanes.has(de)||(le===null&&(le=[]),le.push(de));if(le!==null)for(const de of le)T.delete(de),A.delete(de),n.dispatchEvent({type:"planeremoved",data:de});for(const de of V.detectedPlanes)if(!T.has(de))T.add(de),A.set(de,V.lastChangedTime),n.dispatchEvent({type:"planeadded",data:de});else{const Fe=A.get(de);de.lastChangedTime>Fe&&(A.set(de,de.lastChangedTime),n.dispatchEvent({type:"planechanged",data:de}))}}v=null}const Me=new qv;Me.setAnimationLoop(Le),this.setAnimationLoop=function(fe){ae=fe},this.dispose=function(){}}}function R2(l,e){function t(p,m){m.color.getRGB(p.fogColor.value,Vv(l)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,_,E,T){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(p,m):m.isMeshToonMaterial?(i(p,m),f(p,m)):m.isMeshPhongMaterial?(i(p,m),c(p,m)):m.isMeshStandardMaterial?(i(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,T)):m.isMeshMatcapMaterial?(i(p,m),v(p,m)):m.isMeshDepthMaterial?i(p,m):m.isMeshDistanceMaterial?(i(p,m),x(p,m)):m.isMeshNormalMaterial?i(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?s(p,m,_,E):m.isSpriteMaterial?u(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===ti&&(p.bumpScale.value*=-1)),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===ti&&p.normalScale.value.negate()),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const A=l.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*A}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let E;m.map?E=m.map:m.specularMap?E=m.specularMap:m.displacementMap?E=m.displacementMap:m.normalMap?E=m.normalMap:m.bumpMap?E=m.bumpMap:m.roughnessMap?E=m.roughnessMap:m.metalnessMap?E=m.metalnessMap:m.alphaMap?E=m.alphaMap:m.emissiveMap?E=m.emissiveMap:m.clearcoatMap?E=m.clearcoatMap:m.clearcoatNormalMap?E=m.clearcoatNormalMap:m.clearcoatRoughnessMap?E=m.clearcoatRoughnessMap:m.iridescenceMap?E=m.iridescenceMap:m.iridescenceThicknessMap?E=m.iridescenceThicknessMap:m.specularIntensityMap?E=m.specularIntensityMap:m.specularColorMap?E=m.specularColorMap:m.transmissionMap?E=m.transmissionMap:m.thicknessMap?E=m.thicknessMap:m.sheenColorMap?E=m.sheenColorMap:m.sheenRoughnessMap&&(E=m.sheenRoughnessMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uvTransform.value.copy(E.matrix));let T;m.aoMap?T=m.aoMap:m.lightMap&&(T=m.lightMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),p.uv2Transform.value.copy(T.matrix))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function s(p,m,_,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=E*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let T;m.map?T=m.map:m.alphaMap&&(T=m.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),p.uvTransform.value.copy(T.matrix))}function u(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===ti&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function v(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function D2(l,e,t,n){let i={},a={},o=[];const s=t.isWebGL2?l.getParameter(35375):0;function u(E,T){const A=T.program;n.uniformBlockBinding(E,A)}function c(E,T){let A=i[E.id];A===void 0&&(x(E),A=f(E),i[E.id]=A,E.addEventListener("dispose",m));const w=T.program;n.updateUBOMapping(E,w);const I=e.render.frame;a[E.id]!==I&&(d(E),a[E.id]=I)}function f(E){const T=h();E.__bindingPointIndex=T;const A=l.createBuffer(),w=E.__size,I=E.usage;return l.bindBuffer(35345,A),l.bufferData(35345,w,I),l.bindBuffer(35345,null),l.bindBufferBase(35345,T,A),A}function h(){for(let E=0;E<s;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const T=i[E.id],A=E.uniforms,w=E.__cache;l.bindBuffer(35345,T);for(let I=0,P=A.length;I<P;I++){const M=A[I];if(v(M,I,w)===!0){const L=M.value,D=M.__offset;typeof L=="number"?(M.__data[0]=L,l.bufferSubData(35345,D,M.__data)):(M.value.isMatrix3?(M.__data[0]=M.value.elements[0],M.__data[1]=M.value.elements[1],M.__data[2]=M.value.elements[2],M.__data[3]=M.value.elements[0],M.__data[4]=M.value.elements[3],M.__data[5]=M.value.elements[4],M.__data[6]=M.value.elements[5],M.__data[7]=M.value.elements[0],M.__data[8]=M.value.elements[6],M.__data[9]=M.value.elements[7],M.__data[10]=M.value.elements[8],M.__data[11]=M.value.elements[0]):L.toArray(M.__data),l.bufferSubData(35345,D,M.__data))}}l.bindBuffer(35345,null)}function v(E,T,A){const w=E.value;if(A[T]===void 0)return typeof w=="number"?A[T]=w:A[T]=w.clone(),!0;if(typeof w=="number"){if(A[T]!==w)return A[T]=w,!0}else{const I=A[T];if(I.equals(w)===!1)return I.copy(w),!0}return!1}function x(E){const T=E.uniforms;let A=0;const w=16;let I=0;for(let P=0,M=T.length;P<M;P++){const L=T[P],D=p(L);if(L.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=A,P>0){I=A%w;const z=w-I;I!==0&&z-D.boundary<0&&(A+=w-I,L.__offset=A)}A+=D.storage}return I=A%w,I>0&&(A+=w-I),E.__size=A,E.__cache={},this}function p(E){const T=E.value,A={boundary:0,storage:0};return typeof T=="number"?(A.boundary=4,A.storage=4):T.isVector2?(A.boundary=8,A.storage=8):T.isVector3||T.isColor?(A.boundary=16,A.storage=12):T.isVector4?(A.boundary=16,A.storage=16):T.isMatrix3?(A.boundary=48,A.storage=48):T.isMatrix4?(A.boundary=64,A.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),A}function m(E){const T=E.target;T.removeEventListener("dispose",m);const A=o.indexOf(T.__bindingPointIndex);o.splice(A,1),l.deleteBuffer(i[T.id]),delete i[T.id],delete a[T.id]}function _(){for(const E in i)l.deleteBuffer(i[E]);o=[],i={},a={}}return{bind:u,update:c,dispose:_}}function I2(){const l=Bo("canvas");return l.style.display="block",l}function Kv(l={}){this.isWebGLRenderer=!0;const e=l.canvas!==void 0?l.canvas:I2(),t=l.context!==void 0?l.context:null,n=l.depth!==void 0?l.depth:!0,i=l.stencil!==void 0?l.stencil:!0,a=l.antialias!==void 0?l.antialias:!1,o=l.premultipliedAlpha!==void 0?l.premultipliedAlpha:!0,s=l.preserveDrawingBuffer!==void 0?l.preserveDrawingBuffer:!1,u=l.powerPreference!==void 0?l.powerPreference:"default",c=l.failIfMajorPerformanceCaveat!==void 0?l.failIfMajorPerformanceCaveat:!1;let f;t!==null?f=t.getContextAttributes().alpha:f=l.alpha!==void 0?l.alpha:!1;let h=null,d=null;const v=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=$a,this.physicallyCorrectLights=!1,this.toneMapping=Bi,this.toneMappingExposure=1;const p=this;let m=!1,_=0,E=0,T=null,A=-1,w=null;const I=new ur,P=new ur;let M=null,L=e.width,D=e.height,z=1,Q=null,J=null;const Y=new ur(0,0,L,D),re=new ur(0,0,L,D);let me=!1;const ge=new Wv;let ae=!1,Le=!1,Me=null;const fe=new Kn,V=new Jt,le=new Ae,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Fe(){return T===null?z:1}let Se=t;function It(U,ve){for(let Oe=0;Oe<U.length;Oe++){const ce=U[Oe],je=e.getContext(ce,ve);if(je!==null)return je}return null}try{const U={alpha:!0,depth:n,stencil:i,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:s,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Lh}`),e.addEventListener("webglcontextlost",Ot,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",Qt,!1),Se===null){const ve=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&ve.shift(),Se=It(ve,U),Se===null)throw It(ve)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Se.getShaderPrecisionFormat===void 0&&(Se.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let _t,Dt,bt,ye,qe,Ce,$e,Je,Ve,ft,ht,St,pn,Sn,W,y,ke,mt,gt,Pt,Gt,Z,_e,Lt;function rt(){_t=new WS(Se),Dt=new kS(Se,_t,l),_t.init(Dt),Z=new T2(Se,_t,Dt),bt=new M2(Se,_t,Dt),ye=new jS,qe=new u2,Ce=new E2(Se,_t,bt,qe,Dt,Z,ye),$e=new US(p),Je=new HS(p),Ve=new nb(Se,Dt),_e=new NS(Se,_t,Ve,Dt),ft=new qS(Se,Ve,ye,_e),ht=new KS(Se,ft,Ve,ye),gt=new ZS(Se,Dt,Ce),y=new BS(qe),St=new c2(p,$e,Je,_t,Dt,_e,y),pn=new R2(p,qe),Sn=new h2,W=new _2(_t,Dt),mt=new FS(p,$e,Je,bt,ht,f,o),ke=new S2(p,ht,Dt),Lt=new D2(Se,ye,Dt,bt),Pt=new zS(Se,_t,ye,Dt),Gt=new XS(Se,_t,ye,Dt),ye.programs=St.programs,p.capabilities=Dt,p.extensions=_t,p.properties=qe,p.renderLists=Sn,p.shadowMap=ke,p.state=bt,p.info=ye}rt();const Mt=new L2(p,Se);this.xr=Mt,this.getContext=function(){return Se},this.getContextAttributes=function(){return Se.getContextAttributes()},this.forceContextLoss=function(){const U=_t.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=_t.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(U){U!==void 0&&(z=U,this.setSize(L,D,!1))},this.getSize=function(U){return U.set(L,D)},this.setSize=function(U,ve,Oe){if(Mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=U,D=ve,e.width=Math.floor(U*z),e.height=Math.floor(ve*z),Oe!==!1&&(e.style.width=U+"px",e.style.height=ve+"px"),this.setViewport(0,0,U,ve)},this.getDrawingBufferSize=function(U){return U.set(L*z,D*z).floor()},this.setDrawingBufferSize=function(U,ve,Oe){L=U,D=ve,z=Oe,e.width=Math.floor(U*Oe),e.height=Math.floor(ve*Oe),this.setViewport(0,0,U,ve)},this.getCurrentViewport=function(U){return U.copy(I)},this.getViewport=function(U){return U.copy(Y)},this.setViewport=function(U,ve,Oe,ce){U.isVector4?Y.set(U.x,U.y,U.z,U.w):Y.set(U,ve,Oe,ce),bt.viewport(I.copy(Y).multiplyScalar(z).floor())},this.getScissor=function(U){return U.copy(re)},this.setScissor=function(U,ve,Oe,ce){U.isVector4?re.set(U.x,U.y,U.z,U.w):re.set(U,ve,Oe,ce),bt.scissor(P.copy(re).multiplyScalar(z).floor())},this.getScissorTest=function(){return me},this.setScissorTest=function(U){bt.setScissorTest(me=U)},this.setOpaqueSort=function(U){Q=U},this.setTransparentSort=function(U){J=U},this.getClearColor=function(U){return U.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor.apply(mt,arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha.apply(mt,arguments)},this.clear=function(U=!0,ve=!0,Oe=!0){let ce=0;U&&(ce|=16384),ve&&(ce|=256),Oe&&(ce|=1024),Se.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ot,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",Qt,!1),Sn.dispose(),W.dispose(),qe.dispose(),$e.dispose(),Je.dispose(),ht.dispose(),_e.dispose(),Lt.dispose(),St.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",C),Mt.removeEventListener("sessionend",q),Me&&(Me.dispose(),Me=null),ne.stop()};function Ot(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const U=ye.autoReset,ve=ke.enabled,Oe=ke.autoUpdate,ce=ke.needsUpdate,je=ke.type;rt(),ye.autoReset=U,ke.enabled=ve,ke.autoUpdate=Oe,ke.needsUpdate=ce,ke.type=je}function Qt(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function an(U){const ve=U.target;ve.removeEventListener("dispose",an),xn(ve)}function xn(U){se(U),qe.remove(U)}function se(U){const ve=qe.get(U).programs;ve!==void 0&&(ve.forEach(function(Oe){St.releaseProgram(Oe)}),U.isShaderMaterial&&St.releaseShaderCache(U))}this.renderBufferDirect=function(U,ve,Oe,ce,je,Ft){ve===null&&(ve=de);const qt=je.isMesh&&je.matrixWorld.determinant()<0,jt=Et(U,ve,Oe,ce,je);bt.setMaterial(ce,qt);let en=Oe.index,fn=1;ce.wireframe===!0&&(en=ft.getWireframeAttribute(Oe),fn=2);const cn=Oe.drawRange,on=Oe.attributes.position;let wn=cn.start*fn,Xn=(cn.start+cn.count)*fn;Ft!==null&&(wn=Math.max(wn,Ft.start*fn),Xn=Math.min(Xn,(Ft.start+Ft.count)*fn)),en!==null?(wn=Math.max(wn,0),Xn=Math.min(Xn,en.count)):on!=null&&(wn=Math.max(wn,0),Xn=Math.min(Xn,on.count));const lr=Xn-wn;if(lr<0||lr===1/0)return;_e.setup(je,ce,jt,Oe,en);let cr,En=Pt;if(en!==null&&(cr=Ve.get(en),En=Gt,En.setIndex(cr)),je.isMesh)ce.wireframe===!0?(bt.setLineWidth(ce.wireframeLinewidth*Fe()),En.setMode(1)):En.setMode(4);else if(je.isLine){let hn=ce.linewidth;hn===void 0&&(hn=1),bt.setLineWidth(hn*Fe()),je.isLineSegments?En.setMode(1):je.isLineLoop?En.setMode(2):En.setMode(3)}else je.isPoints?En.setMode(0):je.isSprite&&En.setMode(4);if(je.isInstancedMesh)En.renderInstances(wn,lr,je.count);else if(Oe.isInstancedBufferGeometry){const hn=Oe._maxInstanceCount!==void 0?Oe._maxInstanceCount:1/0,Ti=Math.min(Oe.instanceCount,hn);En.renderInstances(wn,lr,Ti)}else En.render(wn,lr)},this.compile=function(U,ve){function Oe(ce,je,Ft){ce.transparent===!0&&ce.side===na?(ce.side=ti,ce.needsUpdate=!0,xt(ce,je,Ft),ce.side=Vs,ce.needsUpdate=!0,xt(ce,je,Ft),ce.side=na):xt(ce,je,Ft)}d=W.get(U),d.init(),x.push(d),U.traverseVisible(function(ce){ce.isLight&&ce.layers.test(ve.layers)&&(d.pushLight(ce),ce.castShadow&&d.pushShadow(ce))}),d.setupLights(p.physicallyCorrectLights),U.traverse(function(ce){const je=ce.material;if(je)if(Array.isArray(je))for(let Ft=0;Ft<je.length;Ft++){const qt=je[Ft];Oe(qt,U,ce)}else Oe(je,U,ce)}),x.pop(),d=null};let Be=null;function F(U){Be&&Be(U)}function C(){ne.stop()}function q(){ne.start()}const ne=new qv;ne.setAnimationLoop(F),typeof self<"u"&&ne.setContext(self),this.setAnimationLoop=function(U){Be=U,Mt.setAnimationLoop(U),U===null?ne.stop():ne.start()},Mt.addEventListener("sessionstart",C),Mt.addEventListener("sessionend",q),this.render=function(U,ve){if(ve!==void 0&&ve.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ve.parent===null&&ve.matrixWorldAutoUpdate===!0&&ve.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(ve),ve=Mt.getCamera()),U.isScene===!0&&U.onBeforeRender(p,U,ve,T),d=W.get(U,x.length),d.init(),x.push(d),fe.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),ge.setFromProjectionMatrix(fe),Le=this.localClippingEnabled,ae=y.init(this.clippingPlanes,Le,ve),h=Sn.get(U,v.length),h.init(),v.push(h),De(U,ve,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(Q,J),ae===!0&&y.beginShadows();const Oe=d.state.shadowsArray;if(ke.render(Oe,U,ve),ae===!0&&y.endShadows(),this.info.autoReset===!0&&this.info.reset(),mt.render(h,U),d.setupLights(p.physicallyCorrectLights),ve.isArrayCamera){const ce=ve.cameras;for(let je=0,Ft=ce.length;je<Ft;je++){const qt=ce[je];Re(h,U,qt,qt.viewport)}}else Re(h,U,ve);T!==null&&(Ce.updateMultisampleRenderTarget(T),Ce.updateRenderTargetMipmap(T)),U.isScene===!0&&U.onAfterRender(p,U,ve),_e.resetDefaultState(),A=-1,w=null,x.pop(),x.length>0?d=x[x.length-1]:d=null,v.pop(),v.length>0?h=v[v.length-1]:h=null};function De(U,ve,Oe,ce){if(U.visible===!1)return;if(U.layers.test(ve.layers)){if(U.isGroup)Oe=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(ve);else if(U.isLight)d.pushLight(U),U.castShadow&&d.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||ge.intersectsSprite(U)){ce&&le.setFromMatrixPosition(U.matrixWorld).applyMatrix4(fe);const qt=ht.update(U),jt=U.material;jt.visible&&h.push(U,qt,jt,Oe,le.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(U.isSkinnedMesh&&U.skeleton.frame!==ye.render.frame&&(U.skeleton.update(),U.skeleton.frame=ye.render.frame),!U.frustumCulled||ge.intersectsObject(U))){ce&&le.setFromMatrixPosition(U.matrixWorld).applyMatrix4(fe);const qt=ht.update(U),jt=U.material;if(Array.isArray(jt)){const en=qt.groups;for(let fn=0,cn=en.length;fn<cn;fn++){const on=en[fn],wn=jt[on.materialIndex];wn&&wn.visible&&h.push(U,qt,wn,Oe,le.z,on)}}else jt.visible&&h.push(U,qt,jt,Oe,le.z,null)}}const Ft=U.children;for(let qt=0,jt=Ft.length;qt<jt;qt++)De(Ft[qt],ve,Oe,ce)}function Re(U,ve,Oe,ce){const je=U.opaque,Ft=U.transmissive,qt=U.transparent;d.setupLightsView(Oe),Ft.length>0&&Xe(je,ve,Oe),ce&&bt.viewport(I.copy(ce)),je.length>0&&tt(je,ve,Oe),Ft.length>0&&tt(Ft,ve,Oe),qt.length>0&&tt(qt,ve,Oe),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function Xe(U,ve,Oe){const ce=Dt.isWebGL2;Me===null&&(Me=new fi(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")?ja:Xa,minFilter:Mc,samples:ce&&a===!0?4:0})),p.getDrawingBufferSize(V),ce?Me.setSize(V.x,V.y):Me.setSize(oh(V.x),oh(V.y));const je=p.getRenderTarget();p.setRenderTarget(Me),p.clear();const Ft=p.toneMapping;p.toneMapping=Bi,tt(U,ve,Oe),p.toneMapping=Ft,Ce.updateMultisampleRenderTarget(Me),Ce.updateRenderTargetMipmap(Me),p.setRenderTarget(je)}function tt(U,ve,Oe){const ce=ve.isScene===!0?ve.overrideMaterial:null;for(let je=0,Ft=U.length;je<Ft;je++){const qt=U[je],jt=qt.object,en=qt.geometry,fn=ce===null?qt.material:ce,cn=qt.group;jt.layers.test(Oe.layers)&&ut(jt,ve,Oe,en,fn,cn)}}function ut(U,ve,Oe,ce,je,Ft){U.onBeforeRender(p,ve,Oe,ce,je,Ft),U.modelViewMatrix.multiplyMatrices(Oe.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),je.onBeforeRender(p,ve,Oe,ce,U,Ft),je.transparent===!0&&je.side===na?(je.side=ti,je.needsUpdate=!0,p.renderBufferDirect(Oe,ve,ce,je,U,Ft),je.side=Vs,je.needsUpdate=!0,p.renderBufferDirect(Oe,ve,ce,je,U,Ft),je.side=na):p.renderBufferDirect(Oe,ve,ce,je,U,Ft),U.onAfterRender(p,ve,Oe,ce,je,Ft)}function xt(U,ve,Oe){ve.isScene!==!0&&(ve=de);const ce=qe.get(U),je=d.state.lights,Ft=d.state.shadowsArray,qt=je.state.version,jt=St.getParameters(U,je.state,Ft,ve,Oe),en=St.getProgramCacheKey(jt);let fn=ce.programs;ce.environment=U.isMeshStandardMaterial?ve.environment:null,ce.fog=ve.fog,ce.envMap=(U.isMeshStandardMaterial?Je:$e).get(U.envMap||ce.environment),fn===void 0&&(U.addEventListener("dispose",an),fn=new Map,ce.programs=fn);let cn=fn.get(en);if(cn!==void 0){if(ce.currentProgram===cn&&ce.lightsStateVersion===qt)return Nt(U,jt),cn}else jt.uniforms=St.getUniforms(U),U.onBuild(Oe,jt,p),U.onBeforeCompile(jt,p),cn=St.acquireProgram(jt,en),fn.set(en,cn),ce.uniforms=jt.uniforms;const on=ce.uniforms;(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(on.clippingPlanes=y.uniform),Nt(U,jt),ce.needsLights=mn(U),ce.lightsStateVersion=qt,ce.needsLights&&(on.ambientLightColor.value=je.state.ambient,on.lightProbe.value=je.state.probe,on.directionalLights.value=je.state.directional,on.directionalLightShadows.value=je.state.directionalShadow,on.spotLights.value=je.state.spot,on.spotLightShadows.value=je.state.spotShadow,on.rectAreaLights.value=je.state.rectArea,on.ltc_1.value=je.state.rectAreaLTC1,on.ltc_2.value=je.state.rectAreaLTC2,on.pointLights.value=je.state.point,on.pointLightShadows.value=je.state.pointShadow,on.hemisphereLights.value=je.state.hemi,on.directionalShadowMap.value=je.state.directionalShadowMap,on.directionalShadowMatrix.value=je.state.directionalShadowMatrix,on.spotShadowMap.value=je.state.spotShadowMap,on.spotLightMatrix.value=je.state.spotLightMatrix,on.spotLightMap.value=je.state.spotLightMap,on.pointShadowMap.value=je.state.pointShadowMap,on.pointShadowMatrix.value=je.state.pointShadowMatrix);const wn=cn.getUniforms(),Xn=lc.seqWithValue(wn.seq,on);return ce.currentProgram=cn,ce.uniformsList=Xn,cn}function Nt(U,ve){const Oe=qe.get(U);Oe.outputEncoding=ve.outputEncoding,Oe.instancing=ve.instancing,Oe.skinning=ve.skinning,Oe.morphTargets=ve.morphTargets,Oe.morphNormals=ve.morphNormals,Oe.morphColors=ve.morphColors,Oe.morphTargetsCount=ve.morphTargetsCount,Oe.numClippingPlanes=ve.numClippingPlanes,Oe.numIntersection=ve.numClipIntersection,Oe.vertexAlphas=ve.vertexAlphas,Oe.vertexTangents=ve.vertexTangents,Oe.toneMapping=ve.toneMapping}function Et(U,ve,Oe,ce,je){ve.isScene!==!0&&(ve=de),Ce.resetTextureUnits();const Ft=ve.fog,qt=ce.isMeshStandardMaterial?ve.environment:null,jt=T===null?p.outputEncoding:T.isXRRenderTarget===!0?T.texture.encoding:$a,en=(ce.isMeshStandardMaterial?Je:$e).get(ce.envMap||qt),fn=ce.vertexColors===!0&&!!Oe.attributes.color&&Oe.attributes.color.itemSize===4,cn=!!ce.normalMap&&!!Oe.attributes.tangent,on=!!Oe.morphAttributes.position,wn=!!Oe.morphAttributes.normal,Xn=!!Oe.morphAttributes.color,lr=ce.toneMapped?p.toneMapping:Bi,cr=Oe.morphAttributes.position||Oe.morphAttributes.normal||Oe.morphAttributes.color,En=cr!==void 0?cr.length:0,hn=qe.get(ce),Ti=d.state.lights;if(ae===!0&&(Le===!0||U!==w)){const gr=U===w&&ce.id===A;y.setState(ce,U,gr)}let Nn=!1;ce.version===hn.__version?(hn.needsLights&&hn.lightsStateVersion!==Ti.state.version||hn.outputEncoding!==jt||je.isInstancedMesh&&hn.instancing===!1||!je.isInstancedMesh&&hn.instancing===!0||je.isSkinnedMesh&&hn.skinning===!1||!je.isSkinnedMesh&&hn.skinning===!0||hn.envMap!==en||ce.fog===!0&&hn.fog!==Ft||hn.numClippingPlanes!==void 0&&(hn.numClippingPlanes!==y.numPlanes||hn.numIntersection!==y.numIntersection)||hn.vertexAlphas!==fn||hn.vertexTangents!==cn||hn.morphTargets!==on||hn.morphNormals!==wn||hn.morphColors!==Xn||hn.toneMapping!==lr||Dt.isWebGL2===!0&&hn.morphTargetsCount!==En)&&(Nn=!0):(Nn=!0,hn.__version=ce.version);let $r=hn.currentProgram;Nn===!0&&($r=xt(ce,ve,je));let ha=!1,di=!1,da=!1;const Qn=$r.getUniforms(),ni=hn.uniforms;if(bt.useProgram($r.program)&&(ha=!0,di=!0,da=!0),ce.id!==A&&(A=ce.id,di=!0),ha||w!==U){if(Qn.setValue(Se,"projectionMatrix",U.projectionMatrix),Dt.logarithmicDepthBuffer&&Qn.setValue(Se,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),w!==U&&(w=U,di=!0,da=!0),ce.isShaderMaterial||ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshStandardMaterial||ce.envMap){const gr=Qn.map.cameraPosition;gr!==void 0&&gr.setValue(Se,le.setFromMatrixPosition(U.matrixWorld))}(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Qn.setValue(Se,"isOrthographic",U.isOrthographicCamera===!0),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial||ce.isShadowMaterial||je.isSkinnedMesh)&&Qn.setValue(Se,"viewMatrix",U.matrixWorldInverse)}if(je.isSkinnedMesh){Qn.setOptional(Se,je,"bindMatrix"),Qn.setOptional(Se,je,"bindMatrixInverse");const gr=je.skeleton;gr&&(Dt.floatVertexTextures?(gr.boneTexture===null&&gr.computeBoneTexture(),Qn.setValue(Se,"boneTexture",gr.boneTexture,Ce),Qn.setValue(Se,"boneTextureSize",gr.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const pa=Oe.morphAttributes;if((pa.position!==void 0||pa.normal!==void 0||pa.color!==void 0&&Dt.isWebGL2===!0)&&gt.update(je,Oe,ce,$r),(di||hn.receiveShadow!==je.receiveShadow)&&(hn.receiveShadow=je.receiveShadow,Qn.setValue(Se,"receiveShadow",je.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(ni.envMap.value=en,ni.flipEnvMap.value=en.isCubeTexture&&en.isRenderTargetTexture===!1?-1:1),di&&(Qn.setValue(Se,"toneMappingExposure",p.toneMappingExposure),hn.needsLights&&un(ni,da),Ft&&ce.fog===!0&&pn.refreshFogUniforms(ni,Ft),pn.refreshMaterialUniforms(ni,ce,z,D,Me),lc.upload(Se,hn.uniformsList,ni,Ce)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(lc.upload(Se,hn.uniformsList,ni,Ce),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Qn.setValue(Se,"center",je.center),Qn.setValue(Se,"modelViewMatrix",je.modelViewMatrix),Qn.setValue(Se,"normalMatrix",je.normalMatrix),Qn.setValue(Se,"modelMatrix",je.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const gr=ce.uniformsGroups;for(let to=0,Lc=gr.length;to<Lc;to++)if(Dt.isWebGL2){const tl=gr[to];Lt.update(tl,$r),Lt.bind(tl,$r)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $r}function un(U,ve){U.ambientLightColor.needsUpdate=ve,U.lightProbe.needsUpdate=ve,U.directionalLights.needsUpdate=ve,U.directionalLightShadows.needsUpdate=ve,U.pointLights.needsUpdate=ve,U.pointLightShadows.needsUpdate=ve,U.spotLights.needsUpdate=ve,U.spotLightShadows.needsUpdate=ve,U.rectAreaLights.needsUpdate=ve,U.hemisphereLights.needsUpdate=ve}function mn(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(U,ve,Oe){qe.get(U.texture).__webglTexture=ve,qe.get(U.depthTexture).__webglTexture=Oe;const ce=qe.get(U);ce.__hasExternalTextures=!0,ce.__hasExternalTextures&&(ce.__autoAllocateDepthBuffer=Oe===void 0,ce.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ce.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(U,ve){const Oe=qe.get(U);Oe.__webglFramebuffer=ve,Oe.__useDefaultFramebuffer=ve===void 0},this.setRenderTarget=function(U,ve=0,Oe=0){T=U,_=ve,E=Oe;let ce=!0,je=null,Ft=!1,qt=!1;if(U){const en=qe.get(U);en.__useDefaultFramebuffer!==void 0?(bt.bindFramebuffer(36160,null),ce=!1):en.__webglFramebuffer===void 0?Ce.setupRenderTarget(U):en.__hasExternalTextures&&Ce.rebindTextures(U,qe.get(U.texture).__webglTexture,qe.get(U.depthTexture).__webglTexture);const fn=U.texture;(fn.isData3DTexture||fn.isDataArrayTexture||fn.isCompressedArrayTexture)&&(qt=!0);const cn=qe.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(je=cn[ve],Ft=!0):Dt.isWebGL2&&U.samples>0&&Ce.useMultisampledRTT(U)===!1?je=qe.get(U).__webglMultisampledFramebuffer:je=cn,I.copy(U.viewport),P.copy(U.scissor),M=U.scissorTest}else I.copy(Y).multiplyScalar(z).floor(),P.copy(re).multiplyScalar(z).floor(),M=me;if(bt.bindFramebuffer(36160,je)&&Dt.drawBuffers&&ce&&bt.drawBuffers(U,je),bt.viewport(I),bt.scissor(P),bt.setScissorTest(M),Ft){const en=qe.get(U.texture);Se.framebufferTexture2D(36160,36064,34069+ve,en.__webglTexture,Oe)}else if(qt){const en=qe.get(U.texture),fn=ve||0;Se.framebufferTextureLayer(36160,36064,en.__webglTexture,Oe||0,fn)}A=-1},this.readRenderTargetPixels=function(U,ve,Oe,ce,je,Ft,qt){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let jt=qe.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&qt!==void 0&&(jt=jt[qt]),jt){bt.bindFramebuffer(36160,jt);try{const en=U.texture,fn=en.format,cn=en.type;if(fn!==Br&&Z.convert(fn)!==Se.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const on=cn===ja&&(_t.has("EXT_color_buffer_half_float")||Dt.isWebGL2&&_t.has("EXT_color_buffer_float"));if(cn!==Xa&&Z.convert(cn)!==Se.getParameter(35738)&&!(cn===ki&&(Dt.isWebGL2||_t.has("OES_texture_float")||_t.has("WEBGL_color_buffer_float")))&&!on){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ve>=0&&ve<=U.width-ce&&Oe>=0&&Oe<=U.height-je&&Se.readPixels(ve,Oe,ce,je,Z.convert(fn),Z.convert(cn),Ft)}finally{const en=T!==null?qe.get(T).__webglFramebuffer:null;bt.bindFramebuffer(36160,en)}}},this.copyFramebufferToTexture=function(U,ve,Oe=0){const ce=Math.pow(2,-Oe),je=Math.floor(ve.image.width*ce),Ft=Math.floor(ve.image.height*ce);Ce.setTexture2D(ve,0),Se.copyTexSubImage2D(3553,Oe,0,0,U.x,U.y,je,Ft),bt.unbindTexture()},this.copyTextureToTexture=function(U,ve,Oe,ce=0){const je=ve.image.width,Ft=ve.image.height,qt=Z.convert(Oe.format),jt=Z.convert(Oe.type);Ce.setTexture2D(Oe,0),Se.pixelStorei(37440,Oe.flipY),Se.pixelStorei(37441,Oe.premultiplyAlpha),Se.pixelStorei(3317,Oe.unpackAlignment),ve.isDataTexture?Se.texSubImage2D(3553,ce,U.x,U.y,je,Ft,qt,jt,ve.image.data):ve.isCompressedTexture?Se.compressedTexSubImage2D(3553,ce,U.x,U.y,ve.mipmaps[0].width,ve.mipmaps[0].height,qt,ve.mipmaps[0].data):Se.texSubImage2D(3553,ce,U.x,U.y,qt,jt,ve.image),ce===0&&Oe.generateMipmaps&&Se.generateMipmap(3553),bt.unbindTexture()},this.copyTextureToTexture3D=function(U,ve,Oe,ce,je=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ft=U.max.x-U.min.x+1,qt=U.max.y-U.min.y+1,jt=U.max.z-U.min.z+1,en=Z.convert(ce.format),fn=Z.convert(ce.type);let cn;if(ce.isData3DTexture)Ce.setTexture3D(ce,0),cn=32879;else if(ce.isDataArrayTexture)Ce.setTexture2DArray(ce,0),cn=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Se.pixelStorei(37440,ce.flipY),Se.pixelStorei(37441,ce.premultiplyAlpha),Se.pixelStorei(3317,ce.unpackAlignment);const on=Se.getParameter(3314),wn=Se.getParameter(32878),Xn=Se.getParameter(3316),lr=Se.getParameter(3315),cr=Se.getParameter(32877),En=Oe.isCompressedTexture?Oe.mipmaps[0]:Oe.image;Se.pixelStorei(3314,En.width),Se.pixelStorei(32878,En.height),Se.pixelStorei(3316,U.min.x),Se.pixelStorei(3315,U.min.y),Se.pixelStorei(32877,U.min.z),Oe.isDataTexture||Oe.isData3DTexture?Se.texSubImage3D(cn,je,ve.x,ve.y,ve.z,Ft,qt,jt,en,fn,En.data):Oe.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Se.compressedTexSubImage3D(cn,je,ve.x,ve.y,ve.z,Ft,qt,jt,en,En.data)):Se.texSubImage3D(cn,je,ve.x,ve.y,ve.z,Ft,qt,jt,en,fn,En),Se.pixelStorei(3314,on),Se.pixelStorei(32878,wn),Se.pixelStorei(3316,Xn),Se.pixelStorei(3315,lr),Se.pixelStorei(32877,cr),je===0&&ce.generateMipmaps&&Se.generateMipmap(cn),bt.unbindTexture()},this.initTexture=function(U){U.isCubeTexture?Ce.setTextureCube(U,0):U.isData3DTexture?Ce.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?Ce.setTexture2DArray(U,0):Ce.setTexture2D(U,0),bt.unbindTexture()},this.resetState=function(){_=0,E=0,T=null,bt.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class O2 extends Kv{}O2.prototype.isWebGL1Renderer=!0;class Qv extends Wr{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class mc extends ui{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const c0=new Kn,u0=new Kn,Ql=[],F2=new Kn,Mo=new Vr;class N2 extends Vr{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new mc(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,F2)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Mo.geometry=this.geometry,Mo.material=this.material,Mo.material!==void 0)for(let a=0;a<i;a++){this.getMatrixAt(a,c0),u0.multiplyMatrices(n,c0),Mo.matrixWorld=u0,Mo.raycast(e,Ql);for(let o=0,s=Ql.length;o<s;o++){const u=Ql[o];u.instanceId=a,u.object=this,t.push(u)}Ql.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new mc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}const f0={enabled:!1,files:{},add:function(l,e){this.enabled!==!1&&(this.files[l]=e)},get:function(l){if(this.enabled!==!1)return this.files[l]},remove:function(l){delete this.files[l]},clear:function(){this.files={}}};class z2{constructor(e,t,n){const i=this;let a=!1,o=0,s=0,u;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){s++,a===!1&&i.onStart!==void 0&&i.onStart(f,o,s),a=!0},this.itemEnd=function(f){o++,i.onProgress!==void 0&&i.onProgress(f,o,s),o===s&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return u?u(f):f},this.setURLModifier=function(f){return u=f,this},this.addHandler=function(f,h){return c.push(f,h),this},this.removeHandler=function(f){const h=c.indexOf(f);return h!==-1&&c.splice(h,2),this},this.getHandler=function(f){for(let h=0,d=c.length;h<d;h+=2){const v=c[h],x=c[h+1];if(v.global&&(v.lastIndex=0),v.test(f))return x}return null}}}const k2=new z2;class Jv{constructor(e){this.manager=e!==void 0?e:k2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,a){n.load(e,i,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class B2 extends Jv{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,o=f0.get(e);if(o!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(o),a.manager.itemEnd(e)},0),o;const s=Bo("img");function u(){f(),f0.add(e,this),t&&t(this),a.manager.itemEnd(e)}function c(h){f(),i&&i(h),a.manager.itemError(e),a.manager.itemEnd(e)}function f(){s.removeEventListener("load",u,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",u,!1),s.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),a.manager.itemStart(e),s.src=e,s}}class U2 extends Jv{constructor(e){super(e)}load(e,t,n,i){const a=new Ar,o=new B2(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(s){a.image=s,a.needsUpdate=!0,t!==void 0&&t(a)},n,i),a}}class G2 extends Hi{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class V2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=h0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=h0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function h0(){return(typeof performance>"u"?Date:performance).now()}class d0{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Er(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lh);const p0={type:"change"},sf={type:"start"},m0={type:"end"};class H2 extends Ka{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Ae,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vs.ROTATE,MIDDLE:vs.DOLLY,RIGHT:vs.PAN},this.touches={ONE:gs.ROTATE,TWO:gs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(Z){Z.addEventListener("keydown",Sn),this._domElementKeyEvents=Z},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(p0),n.update(),a=i.NONE},this.update=function(){const Z=new Ae,_e=new Ya().setFromUnitVectors(e.up,new Ae(0,1,0)),Lt=_e.clone().invert(),rt=new Ae,Mt=new Ya,Ot=2*Math.PI;return function(){const Qt=n.object.position;Z.copy(Qt).sub(n.target),Z.applyQuaternion(_e),s.setFromVector3(Z),n.autoRotate&&a===i.NONE&&L(P()),n.enableDamping?(s.theta+=u.theta*n.dampingFactor,s.phi+=u.phi*n.dampingFactor):(s.theta+=u.theta,s.phi+=u.phi);let an=n.minAzimuthAngle,xn=n.maxAzimuthAngle;return isFinite(an)&&isFinite(xn)&&(an<-Math.PI?an+=Ot:an>Math.PI&&(an-=Ot),xn<-Math.PI?xn+=Ot:xn>Math.PI&&(xn-=Ot),an<=xn?s.theta=Math.max(an,Math.min(xn,s.theta)):s.theta=s.theta>(an+xn)/2?Math.max(an,s.theta):Math.min(xn,s.theta)),s.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,s.phi)),s.makeSafe(),s.radius*=c,s.radius=Math.max(n.minDistance,Math.min(n.maxDistance,s.radius)),n.enableDamping===!0?n.target.addScaledVector(f,n.dampingFactor):n.target.add(f),Z.setFromSpherical(s),Z.applyQuaternion(Lt),Qt.copy(n.target).add(Z),n.object.lookAt(n.target),n.enableDamping===!0?(u.theta*=1-n.dampingFactor,u.phi*=1-n.dampingFactor,f.multiplyScalar(1-n.dampingFactor)):(u.set(0,0,0),f.set(0,0,0)),c=1,h||rt.distanceToSquared(n.object.position)>o||8*(1-Mt.dot(n.object.quaternion))>o?(n.dispatchEvent(p0),rt.copy(n.object.position),Mt.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ke),n.domElement.removeEventListener("pointerdown",$e),n.domElement.removeEventListener("pointercancel",ft),n.domElement.removeEventListener("wheel",pn),n.domElement.removeEventListener("pointermove",Je),n.domElement.removeEventListener("pointerup",Ve),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Sn)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=i.NONE;const o=1e-6,s=new d0,u=new d0;let c=1;const f=new Ae;let h=!1;const d=new Jt,v=new Jt,x=new Jt,p=new Jt,m=new Jt,_=new Jt,E=new Jt,T=new Jt,A=new Jt,w=[],I={};function P(){return 2*Math.PI/60/60*n.autoRotateSpeed}function M(){return Math.pow(.95,n.zoomSpeed)}function L(Z){u.theta-=Z}function D(Z){u.phi-=Z}const z=function(){const Z=new Ae;return function(Lt,rt){Z.setFromMatrixColumn(rt,0),Z.multiplyScalar(-Lt),f.add(Z)}}(),Q=function(){const Z=new Ae;return function(Lt,rt){n.screenSpacePanning===!0?Z.setFromMatrixColumn(rt,1):(Z.setFromMatrixColumn(rt,0),Z.crossVectors(n.object.up,Z)),Z.multiplyScalar(Lt),f.add(Z)}}(),J=function(){const Z=new Ae;return function(Lt,rt){const Mt=n.domElement;if(n.object.isPerspectiveCamera){const Ot=n.object.position;Z.copy(Ot).sub(n.target);let Tt=Z.length();Tt*=Math.tan(n.object.fov/2*Math.PI/180),z(2*Lt*Tt/Mt.clientHeight,n.object.matrix),Q(2*rt*Tt/Mt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(z(Lt*(n.object.right-n.object.left)/n.object.zoom/Mt.clientWidth,n.object.matrix),Q(rt*(n.object.top-n.object.bottom)/n.object.zoom/Mt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Y(Z){n.object.isPerspectiveCamera?c/=Z:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*Z)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function re(Z){n.object.isPerspectiveCamera?c*=Z:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/Z)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function me(Z){d.set(Z.clientX,Z.clientY)}function ge(Z){E.set(Z.clientX,Z.clientY)}function ae(Z){p.set(Z.clientX,Z.clientY)}function Le(Z){v.set(Z.clientX,Z.clientY),x.subVectors(v,d).multiplyScalar(n.rotateSpeed);const _e=n.domElement;L(2*Math.PI*x.x/_e.clientHeight),D(2*Math.PI*x.y/_e.clientHeight),d.copy(v),n.update()}function Me(Z){T.set(Z.clientX,Z.clientY),A.subVectors(T,E),A.y>0?Y(M()):A.y<0&&re(M()),E.copy(T),n.update()}function fe(Z){m.set(Z.clientX,Z.clientY),_.subVectors(m,p).multiplyScalar(n.panSpeed),J(_.x,_.y),p.copy(m),n.update()}function V(Z){Z.deltaY<0?re(M()):Z.deltaY>0&&Y(M()),n.update()}function le(Z){let _e=!1;switch(Z.code){case n.keys.UP:Z.ctrlKey||Z.metaKey||Z.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):J(0,n.keyPanSpeed),_e=!0;break;case n.keys.BOTTOM:Z.ctrlKey||Z.metaKey||Z.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):J(0,-n.keyPanSpeed),_e=!0;break;case n.keys.LEFT:Z.ctrlKey||Z.metaKey||Z.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):J(n.keyPanSpeed,0),_e=!0;break;case n.keys.RIGHT:Z.ctrlKey||Z.metaKey||Z.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):J(-n.keyPanSpeed,0),_e=!0;break}_e&&(Z.preventDefault(),n.update())}function de(){if(w.length===1)d.set(w[0].pageX,w[0].pageY);else{const Z=.5*(w[0].pageX+w[1].pageX),_e=.5*(w[0].pageY+w[1].pageY);d.set(Z,_e)}}function Fe(){if(w.length===1)p.set(w[0].pageX,w[0].pageY);else{const Z=.5*(w[0].pageX+w[1].pageX),_e=.5*(w[0].pageY+w[1].pageY);p.set(Z,_e)}}function Se(){const Z=w[0].pageX-w[1].pageX,_e=w[0].pageY-w[1].pageY,Lt=Math.sqrt(Z*Z+_e*_e);E.set(0,Lt)}function It(){n.enableZoom&&Se(),n.enablePan&&Fe()}function _t(){n.enableZoom&&Se(),n.enableRotate&&de()}function Dt(Z){if(w.length==1)v.set(Z.pageX,Z.pageY);else{const Lt=Gt(Z),rt=.5*(Z.pageX+Lt.x),Mt=.5*(Z.pageY+Lt.y);v.set(rt,Mt)}x.subVectors(v,d).multiplyScalar(n.rotateSpeed);const _e=n.domElement;L(2*Math.PI*x.x/_e.clientHeight),D(2*Math.PI*x.y/_e.clientHeight),d.copy(v)}function bt(Z){if(w.length===1)m.set(Z.pageX,Z.pageY);else{const _e=Gt(Z),Lt=.5*(Z.pageX+_e.x),rt=.5*(Z.pageY+_e.y);m.set(Lt,rt)}_.subVectors(m,p).multiplyScalar(n.panSpeed),J(_.x,_.y),p.copy(m)}function ye(Z){const _e=Gt(Z),Lt=Z.pageX-_e.x,rt=Z.pageY-_e.y,Mt=Math.sqrt(Lt*Lt+rt*rt);T.set(0,Mt),A.set(0,Math.pow(T.y/E.y,n.zoomSpeed)),Y(A.y),E.copy(T)}function qe(Z){n.enableZoom&&ye(Z),n.enablePan&&bt(Z)}function Ce(Z){n.enableZoom&&ye(Z),n.enableRotate&&Dt(Z)}function $e(Z){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(Z.pointerId),n.domElement.addEventListener("pointermove",Je),n.domElement.addEventListener("pointerup",Ve)),mt(Z),Z.pointerType==="touch"?W(Z):ht(Z))}function Je(Z){n.enabled!==!1&&(Z.pointerType==="touch"?y(Z):St(Z))}function Ve(Z){gt(Z),w.length===0&&(n.domElement.releasePointerCapture(Z.pointerId),n.domElement.removeEventListener("pointermove",Je),n.domElement.removeEventListener("pointerup",Ve)),n.dispatchEvent(m0),a=i.NONE}function ft(Z){gt(Z)}function ht(Z){let _e;switch(Z.button){case 0:_e=n.mouseButtons.LEFT;break;case 1:_e=n.mouseButtons.MIDDLE;break;case 2:_e=n.mouseButtons.RIGHT;break;default:_e=-1}switch(_e){case vs.DOLLY:if(n.enableZoom===!1)return;ge(Z),a=i.DOLLY;break;case vs.ROTATE:if(Z.ctrlKey||Z.metaKey||Z.shiftKey){if(n.enablePan===!1)return;ae(Z),a=i.PAN}else{if(n.enableRotate===!1)return;me(Z),a=i.ROTATE}break;case vs.PAN:if(Z.ctrlKey||Z.metaKey||Z.shiftKey){if(n.enableRotate===!1)return;me(Z),a=i.ROTATE}else{if(n.enablePan===!1)return;ae(Z),a=i.PAN}break;default:a=i.NONE}a!==i.NONE&&n.dispatchEvent(sf)}function St(Z){switch(a){case i.ROTATE:if(n.enableRotate===!1)return;Le(Z);break;case i.DOLLY:if(n.enableZoom===!1)return;Me(Z);break;case i.PAN:if(n.enablePan===!1)return;fe(Z);break}}function pn(Z){n.enabled===!1||n.enableZoom===!1||a!==i.NONE||(Z.preventDefault(),n.dispatchEvent(sf),V(Z),n.dispatchEvent(m0))}function Sn(Z){n.enabled===!1||n.enablePan===!1||le(Z)}function W(Z){switch(Pt(Z),w.length){case 1:switch(n.touches.ONE){case gs.ROTATE:if(n.enableRotate===!1)return;de(),a=i.TOUCH_ROTATE;break;case gs.PAN:if(n.enablePan===!1)return;Fe(),a=i.TOUCH_PAN;break;default:a=i.NONE}break;case 2:switch(n.touches.TWO){case gs.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;It(),a=i.TOUCH_DOLLY_PAN;break;case gs.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;_t(),a=i.TOUCH_DOLLY_ROTATE;break;default:a=i.NONE}break;default:a=i.NONE}a!==i.NONE&&n.dispatchEvent(sf)}function y(Z){switch(Pt(Z),a){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Dt(Z),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;bt(Z),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;qe(Z),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ce(Z),n.update();break;default:a=i.NONE}}function ke(Z){n.enabled!==!1&&Z.preventDefault()}function mt(Z){w.push(Z)}function gt(Z){delete I[Z.pointerId];for(let _e=0;_e<w.length;_e++)if(w[_e].pointerId==Z.pointerId){w.splice(_e,1);return}}function Pt(Z){let _e=I[Z.pointerId];_e===void 0&&(_e=new Jt,I[Z.pointerId]=_e),_e.set(Z.pageX,Z.pageY)}function Gt(Z){const _e=Z.pointerId===w[0].pointerId?w[1]:w[0];return I[_e.pointerId]}n.domElement.addEventListener("contextmenu",ke),n.domElement.addEventListener("pointerdown",$e),n.domElement.addEventListener("pointercancel",ft),n.domElement.addEventListener("wheel",pn,{passive:!1}),this.update()}}var Ro=function(){var l=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(f){f.preventDefault(),n(++l%e.children.length)},!1);function t(f){return e.appendChild(f.dom),f}function n(f){for(var h=0;h<e.children.length;h++)e.children[h].style.display=h===f?"block":"none";l=f}var i=(performance||Date).now(),a=i,o=0,s=t(new Ro.Panel("FPS","#0ff","#002")),u=t(new Ro.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new Ro.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){i=(performance||Date).now()},end:function(){o++;var f=(performance||Date).now();if(u.update(f-i,200),f>=a+1e3&&(s.update(o*1e3/(f-a),100),a=f,o=0,c)){var h=performance.memory;c.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return f},update:function(){i=this.end()},domElement:e,setMode:n}};Ro.Panel=function(l,e,t){var n=1/0,i=0,a=Math.round,o=a(window.devicePixelRatio||1),s=80*o,u=48*o,c=3*o,f=2*o,h=3*o,d=15*o,v=74*o,x=30*o,p=document.createElement("canvas");p.width=s,p.height=u,p.style.cssText="width:80px;height:48px";var m=p.getContext("2d");return m.font="bold "+9*o+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=t,m.fillRect(0,0,s,u),m.fillStyle=e,m.fillText(l,c,f),m.fillRect(h,d,v,x),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(h,d,v,x),{dom:p,update:function(_,E){n=Math.min(n,_),i=Math.max(i,_),m.fillStyle=t,m.globalAlpha=1,m.fillRect(0,0,s,d),m.fillStyle=e,m.fillText(a(_)+" "+l+" ("+a(n)+"-"+a(i)+")",c,f),m.drawImage(p,h+o,d,v-o,x,h,d,v-o,x),m.fillRect(h+v-o,d,o,x),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(h+v-o,d,o,a((1-_/E)*x))}}};var W2=`uniform bool upscale;

uniform vec2 resolution;

uniform sampler2D unf;\r
uniform sampler2D fil;

varying vec2 vUv;

#ifndef FNC_ABSI\r
#define FNC_ABSI\r
#define absi(x)     ( (x < 0)? x * -1 : x )\r
#endif\r
#ifndef SAMPLER_FNC\r
#if __VERSION__ >= 300\r
#define SAMPLER_FNC(TEX, UV) texture(TEX, UV)\r
#else\r
#define SAMPLER_FNC(TEX, UV) texture2D(TEX, UV)\r
#endif\r
#endif

#ifndef SAMPLER_TYPE\r
#define SAMPLER_TYPE sampler2D\r
#endif

#ifndef PYRAMID_H1\r
#define PYRAMID_H1 1.0334, 0.6836, 0.1507\r
#endif

#ifndef PYRAMID_SAMPLE_FNC\r
#define PYRAMID_SAMPLE_FNC(TEX, UV) SAMPLER_FNC(TEX, UV)\r
#endif

#ifndef PYRAMID_DOWNSCALE_SAMPLE_FNC\r
#define PYRAMID_DOWNSCALE_SAMPLE_FNC(TEX, UV) PYRAMID_SAMPLE_FNC(TEX, UV)\r
#endif\r
 \r
#ifndef FNC_PYRAMID_DOWNSCALE\r
#define FNC_PYRAMID_DOWNSCALE\r
vec4 pyramidDownscale(SAMPLER_TYPE tex, vec2 st, vec2 pixel) {\r
    const vec3 h1 = vec3(PYRAMID_H1);

    vec4 color = vec4(0.0);\r
    for (int dy = -2; dy <= 2; dy++) {\r
        for (int dx = -2; dx <= 2; dx++) {\r
            vec2 uv = st + vec2(float(dx), float(dy)) * pixel * 0.5;\r
            if (uv.x <= 0.0 || uv.x >= 1.0 || uv.y <= 0.0 || uv.y >= 1.0)\r
                continue;\r
            color += PYRAMID_DOWNSCALE_SAMPLE_FNC(tex, uv) * h1[ absi(dx) ] * h1[ absi(dy) ];\r
        }\r
    }

    return color;\r
}\r
#endif\r
#ifndef FNC_ABSI\r
#define FNC_ABSI\r
#define absi(x)     ( (x < 0)? x * -1 : x )\r
#endif\r
#ifndef SAMPLER_FNC\r
#if __VERSION__ >= 300\r
#define SAMPLER_FNC(TEX, UV) texture(TEX, UV)\r
#else\r
#define SAMPLER_FNC(TEX, UV) texture2D(TEX, UV)\r
#endif\r
#endif

#ifndef SAMPLER_TYPE\r
#define SAMPLER_TYPE sampler2D\r
#endif

#ifndef PYRAMID_H1\r
#define PYRAMID_H1 1.0334, 0.6836, 0.1507\r
#endif

#ifndef PYRAMID_H2\r
#define PYRAMID_H2 0.0270\r
#endif

#ifndef PYRAMID_G\r
#define PYRAMID_G 0.7753, 0.0312\r
#endif

#ifndef PYRAMID_SAMPLE_FNC\r
#define PYRAMID_SAMPLE_FNC(TEX, UV) SAMPLER_FNC(TEX, UV)\r
#endif

#ifndef PYRAMID_UPSCALE0_SAMPLE_FNC\r
#define PYRAMID_UPSCALE0_SAMPLE_FNC(TEX, UV) PYRAMID_SAMPLE_FNC(TEX, UV)\r
#endif

#ifndef PYRAMID_UPSCALE1_SAMPLE_FNC\r
#define PYRAMID_UPSCALE1_SAMPLE_FNC(TEX, UV) PYRAMID_SAMPLE_FNC(TEX, UV)\r
#endif

#ifndef FNC_PYRAMID_UPSCALE\r
#define FNC_PYRAMID_UPSCALE\r
vec4 pyramidUpscale(SAMPLER_TYPE tex0, SAMPLER_TYPE tex1, vec2 st, vec2 pixel) {\r
    const vec3  h1 = vec3(PYRAMID_H1);\r
    const float h2 = PYRAMID_H2;\r
    const vec2  g  = vec2(PYRAMID_G);

    vec4 color = vec4(0.0);\r
    for (int dy = -1; dy <= 1; dy++) {\r
        for (int dx = -1; dx <= 1; dx++) {\r
            vec2 uv = st + vec2(float(dx), float(dy)) * pixel;\r
            if (uv.x <= 0.0 || uv.x >= 1.0 || uv.y <= 0.0 || uv.y >= 1.0)\r
                continue;\r
                \r
            color += PYRAMID_UPSCALE0_SAMPLE_FNC(tex0, uv) * g[ absi(dx) ] * g[ absi(dy) ];\r
        }\r
    }

    for (int dy = -2; dy <= 2; dy++) {\r
        for (int dx = -2; dx <= 2; dx++) {\r
            vec2 uv = st + vec2(float(dx), float(dy)) * pixel * 2.0;\r
            if (uv.x <= 0.0 || uv.x >= 1.0 || uv.y <= 0.0 || uv.y >= 1.0)\r
                continue;

            color += PYRAMID_UPSCALE1_SAMPLE_FNC(tex1, uv) * h2 * h1[ absi(dx) ] * h1[ absi(dy) ];\r
        }\r
    }

    return color;\r
}\r
#endif

#ifndef FNC_PYRAMID\r
#define FNC_PYRAMID\r
vec4 pyramid(SAMPLER_TYPE tex0, SAMPLER_TYPE tex1, vec2 st, vec2 pixel, bool upscale) {\r
    vec4 color = vec4(0.0);\r
    if (!upscale) {\r
        color = pyramidDownscale(tex0, st, pixel);\r
    }\r
    else {\r
        color = pyramidUpscale(tex0, tex1, st, pixel);\r
    }\r
    return (color.a == 0.0)? color : vec4(color.rgb/color.a, 1.0);\r
}\r
#endif

void main() {\r
		vec2 uv = vUv;\r
		vec2 pixel = 1.0 / resolution;\r
		\r
		gl_FragColor = pyramid(unf, fil, uv, pixel, upscale);\r
}`;const q2=new Js(2,2),X2=new Xv(-1,1,1,-1,0,1),j2=12;class $2{constructor(e){this.renderer=e,this.depth=null,this.downs=[],this.ups=[],this.shader1=this.createShader(),this.shader2=this.createShader(),this.mesh=new Vr(q2,this.shader1)}init(e,t){let n=1;this.depth=Math.log2(Math.min(e*n,t*n))-1,this.depth=Math.min(j2,Math.round(this.depth));let i=e,a=t,o={wrapS:wr,wrapT:wr,magFilter:Un,minFilter:Un,format:Br,type:ki};for(let s=0;s<this.depth;s++)i*=.5,a*=.5,this.downs[s]=new fi(i,a,o);for(let s=0;s<this.depth;s++)i*=2,a*=2,this.ups[s]=new fi(i,a,o)}process(e){this.pass(this.shader1,this.downs[0],e,null);for(let t=1;t<this.depth;t++)this.pass(this.shader1,this.downs[t],this.downs[t-1].texture,null);this.pass(this.shader2,this.ups[0],this.downs[this.depth-2].texture,this.downs[this.depth-1].texture);for(let t=1;t<this.depth-1;t++)this.pass(this.shader2,this.ups[t],this.downs[this.depth-t-2].texture,this.ups[t-1].texture);this.pass(this.shader2,this.ups[this.depth-1],e,this.ups[this.depth-2].texture)}pass(e,t,n,i){this.renderer.setRenderTarget(t),e.uniforms.unf.value=n,i!==null&&(e.uniforms.fil.value=i),e.uniforms.upscale.value=i!==null,e.uniforms.resolution.value.x=t.width,e.uniforms.resolution.value.y=t.height,this.mesh.material=e,this.renderer.clear(),this.renderer.setClearColor(16777215),this.renderer.setClearAlpha(0),this.renderer.render(this.mesh,X2),this.renderer.setRenderTarget(null)}getTexture(){return this.ups[this.depth-1].texture}createShader(){return new hi({vertexShader:`varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:W2,uniforms:{unf:{value:null},fil:{value:null},upscale:{value:!1},resolution:{value:new Jt}}})}}class Y2{constructor(e,t={}){if(!e.capabilities.floatFragmentTextures)throw new Error("No OES_texture_float support for float textures.");this.renderer=e,this.defines={PLATFORM_WEBGL:"1"},this.uniforms=t,this.fragSrc=null,this.vertSrc=null,this.uniforms.uResolution={value:new Jt},this.uniforms.uDelta={value:0},this.uniforms.uTime={value:0},this.uniforms.uFrame={value:0},this.buffers=[],this.doubleBuffers=[],this.background=null,this.material=null,this.sceneBuffer=null,this.postprocessing=null,this.billboardScene=new Qv,this.billboardCamera=new Dh,this.billboardCamera.position.z=1,this.passThruUniforms={texture:{value:null}},this.passThruShader=Pa(this.passThruUniforms,K2()),this.mesh=new Vr(new Js(2,2),this.passThruShader),this.billboardScene.add(this.mesh),this.clock=new V2,this.frame=0,this.lastTime=0,this.time=0,this.resolution=new Jt(e.domElement.width,e.domElement.height)}getBufferSize(e){if(this.fragSrc==null)return{width:1,height:1};const n=new RegExp(`uniform\\s*sampler2D\\s*${e}\\;\\s*\\/\\/*\\s(\\d+)x(\\d+)`,"gm").exec(this.fragSrc);if(n)return{width:parseInt(n[1]),height:parseInt(n[2])};const a=new RegExp(`uniform\\s*sampler2D\\s*${e}\\;\\s*\\/\\/*\\s(\\d*\\.\\d+|\\d+)`,"gm").exec(this.fragSrc);if(a){if(a.length>2)return{width:parseFloat(a[1]),height:parseFloat(a[2])};if(a.length>1)return{width:parseFloat(a[1]),height:parseFloat(a[1])}}return{width:1,height:1}}load(e,t=null){this.fragSrc=e,this.vertSrc=t,this.fragSrc.match(/(?:^\s*)((?:#if|#elif)(?:\s*)(defined\s*\(\s*BACKGROUND)(?:\s*\))|(?:#ifdef)(?:\s*BACKGROUND)(?:\s*))/gm)&&(this.renderer.autoClearColor=!1,this.addBackground());const i=this.fragSrc.match(/(?:^\s*)((?:#if|#elif)(?:\s*)(defined\s*\(\s*BUFFER_)(\d+)(?:\s*\))|(?:#ifdef)(?:\s*BUFFER_)(\d+)(?:\s*))/gm);if(i)for(let u=0;u<i.length;u++){let c=this.getBufferSize(`uBuffer${u}`);this.addBuffer(c.width,c.height)}const a=e.match(/(?:^\s*)((?:#if|#elif)(?:\s*)(defined\s*\(\s*DOUBLE_BUFFER_)(\d+)(?:\s*\))|(?:#ifdef)(?:\s*DOUBLE_BUFFER_)(\d+)(?:\s*))/gm);if(a){this.renderer.autoClearColor=!1;for(let u=0;u<a.length;u++){let c=this.getBufferSize(`uDoubleBuffer${u}`);this.addDoubleBuffer(c.width,c.height)}}this.material=Pa(this.uniforms,this.fragSrc,this.vertSrc),this.fragSrc.match(/(?:^\s*)((?:#if|#elif)(?:\s*)(defined\s*\(\s*POSTPROCESSING)(?:\s*\))|(?:#ifdef)(?:\s*POSTPROCESSING)(?:\s*))/gm)&&this.addPostprocessing(),this.fragSrc.match(/(?:^\s*)((?:#if|#elif)(?:\s*)(defined\s*\(\s*POISSON_FILL)(?:\s*\))|(?:#ifdef)(?:\s*POISSON_FILL)(?:\s*))/gm)&&this.addPoissonFill()}addBackground(){return this.background=Pa(this.uniforms,`#define BACKGROUND
${this.fragSrc}`),this.background.defines=this.defines,this.background}addBuffer(e,t){let n=this.buffers.length,i=Pa(this.uniforms,`#define BUFFER_${n}
${this.fragSrc}`);i.defines=this.defines;let a={name:`uBuffer${n}`,material:i,renderTarget:null,width:e,height:t,wrapS:null,wrapT:null,minFilter:Un,magFilter:Un};return this.buffers.push(a),this.uniforms[a.name]={value:null},a.renderTarget=this.createRenderTarget(a),a}addDoubleBuffer(e,t){let n=this.doubleBuffers.length,i=Pa(this.uniforms,`#define DOUBLE_BUFFER_${n}
${this.fragSrc}`);i.defines=this.defines;let a={name:`uDoubleBuffer${n}`,material:i,renderTargets:[],width:e,height:t,wrapS:null,wrapT:null,minFilter:Un,magFilter:Un};return this.doubleBuffers.push(a),this.uniforms[a.name]={value:null},a.renderTargets[0]=this.createRenderTarget(a),a.renderTargets[1]=this.createRenderTarget(a),a}addPostprocessing(){return this.postprocessing=Pa(this.uniforms,`#define POSTPROCESSING
${this.fragSrc}`),this.postprocessing.defines=this.defines,this.sceneBuffer={renderTarget:null,width:this.renderer.domElement.width,height:this.renderer.domElement.height},this.uniforms.uScene={value:null},this.sceneBuffer.renderTarget=this.createRenderTarget({width:this.sceneBuffer.width,height:this.sceneBuffer.height,wrapS:null,wrapT:null,minFilter:Un,magFilter:Un}),this.sceneBuffer}addPoissonFill(){this.poissonFill=Pa(this.uniforms,`#define POISSON_FILL
${this.fragSrc}`),this.poissonFill.defines=this.defines;let e=this.renderer.domElement.width,t=this.renderer.domElement.height;this.poissonFillBuffer={renderTarget:null,width:e,height:t},this.uniforms.uPScene={value:null},this.poissonFillBuffer.renderTarget=this.createRenderTarget({width:this.poissonFillBuffer.width,height:this.poissonFillBuffer.height,wrapS:null,wrapT:null,minFilter:Un,magFilter:Un}),this.pf=new $2(this.renderer),this.pf.init(e,t)}createRenderTarget(e){e.wrapS=e.wrapS||wr,e.wrapT=e.wrapT||wr,e.minFilter=e.minFilter||dr,e.magFilter=e.magFilter||dr;let t=ki;this.renderer.capabilities.isWebGL2===!1&&(t=ja);let n=e.width,i=e.height;return n<=1&&i<=1&&(n*=this.renderer.domElement.width,i*=this.renderer.domElement.height),new fi(Math.floor(n),Math.floor(i),{wrapS:e.wrapS,wrapT:e.wrapT,minFilter:e.minFilter,magFilter:e.magFilter,format:Br,type:/(iPad|iPhone|iPod)/g.test(navigator.userAgent)?ja:t,stencilBuffer:!1})}updateUniforms(){this.time=this.clock.getElapsedTime(),this.uniforms.uTime.value=this.time,this.uniforms.uDelta.value=this.time-this.lastTime,this.uniforms.uFrame.value=this.frame,this.uniforms.uResolution.value=this.resolution,this.lastTime=this.time,this.frame++}updateBuffers(){for(let n=0,i=this.buffers.length;n<i;n++){let a=this.buffers[n];a.width<=1&&a.height<=1?this.uniforms.uResolution.value=new Jt(Math.floor(this.resolution.x*a.width),Math.floor(this.resolution.y*a.height)):this.uniforms.uResolution.value=new Jt(a.width,a.height),this.renderTarget(a.material,a.renderTarget),this.uniforms[a.name].value=a.renderTarget.texture}let e=this.frame%2,t=(this.frame+1)%2;for(let n=0,i=this.doubleBuffers.length;n<i;n++){let a=this.doubleBuffers[n];a.width<=1&&a.height<=1?this.uniforms.uResolution.value=new Jt(Math.floor(this.resolution.x*a.width),Math.floor(this.resolution.y*a.height)):this.uniforms.uResolution.value=new Jt(a.width,a.height),this.uniforms[a.name].value=a.renderTargets[e].texture,this.renderTarget(a.material,a.renderTargets[t])}this.renderer.setRenderTarget(null)}renderBackground(){this.background&&(this.mesh.material=this.background,this.renderer.render(this.billboardScene,this.billboardCamera),this.mesh.material=this.passThruShader)}getBufferTexture(e){if(!(e>=this.buffers.length))return this.buffers[e].renderTarget.texture}getDoubleBufferTexture(e){if(!(e>=this.doubleBuffers.length))return this.doubleBuffers[e].renderTargets[this.frame%2].texture}renderBuffer(e){e>=this.buffers.length||(this.uniforms.uResolution.value=this.resolution,this.passThruUniforms.texture.value=this.geBufferTexture(e),this.mesh.material=this.passThruShader,this.renderer.render(this.billboardScene,this.billboardCamera))}renderDoubleBuffer(e){e>=this.doubleBuffers.length||(this.uniforms.uResolution.value=this.resolution,this.passThruUniforms.texture.value=this.getDoubleBufferTexture(e),this.mesh.material=this.passThruShader,this.renderer.render(this.billboardScene,this.billboardCamera))}renderMain(){this.updateUniforms(),this.updateBuffers(),this.uniforms.uResolution.value=this.resolution,this.mesh.material=this.material,this.renderer.render(this.billboardScene,this.billboardCamera),this.mesh.material=this.passThruShader}renderScene(e,t){this.updateUniforms(),this.updateBuffers(),this.poissonFill&&this.renderPScene(e,t),this.sceneBuffer&&(this.renderer.setRenderTarget(this.sceneBuffer.renderTarget),this.renderer.clear()),this.renderBackground(),this.renderer.render(e,t),this.sceneBuffer&&(this.renderer.setRenderTarget(null),this.renderer.clear(),this.uniforms.uResolution.value=this.resolution,this.uniforms.uScene.value=this.sceneBuffer.renderTarget.texture,this.mesh.material=this.postprocessing,this.renderer.render(this.billboardScene,this.billboardCamera),this.mesh.material=this.passThruShader)}renderPScene(e,t){this.renderer.setRenderTarget(this.poissonFillBuffer.renderTarget),this.renderer.clear(),this.renderBackground(),this.renderer.render(e,t),this.renderer.setRenderTarget(null),this.renderer.clear(),this.uniforms.uResolution.value=this.resolution,this.pf.process(this.poissonFillBuffer.renderTarget.texture),this.uniforms.uPScene.value=this.pf.getTexture(),this.mesh.material=this.poissonFill,this.renderer.render(this.billboardScene,this.billboardCamera),this.mesh.material=this.passThruShader}renderTarget(e,t){this.mesh.material=e,this.renderer.setRenderTarget(t),this.renderer.render(this.billboardScene,this.billboardCamera,t),this.mesh.material=this.passThruShader}setSize(e,t){let n=Math.max(window.devicePixelRatio,2);e*=n,t*=n,this.sceneBuffer&&(this.sceneBuffer.width=e,this.sceneBuffer.height=t,this.sceneBuffer.renderTarget.setSize(e,t)),this.poissonFillBuffer&&(this.poissonFillBuffer.width=e,this.poissonFillBuffer.height=t,this.poissonFillBuffer.renderTarget.setSize(e,t)),this.resolution=new Jt(e,t),this.uniforms.uResolution.value=this.resolution;for(let i=0;i<this.buffers.length;i++){let a=this.buffers[i];a.width<=1&&a.height<=1&&a.renderTarget.setSize(a.width*e,a.height*t)}for(let i=0;i<this.doubleBuffers.length;i++){this.renderer.autoClearColor=!1;let a=this.doubleBuffers[i];if(a.width<=1&&a.height<=1){let o=Math.floor(a.width*e),s=Math.floor(a.height*t);a.renderTargets[0].setSize(o,s),a.renderTargets[1].setSize(o,s)}}this.frame=0}}function Pa(l,e,t){return new hi({uniforms:l===void 0?{}:l,vertexShader:t||Z2(),fragmentShader:e})}function Z2(){return`varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
    }`}function K2(){return`uniform sampler2D texture;
    uniform vec2 uResolution;
    void main() {
        vec2 uv = gl_FragCoord.xy / uResolution.xy;
        gl_FragColor = texture2D(texture, uv);
    }`}class eg extends Qv{constructor(e,t){super(),this.renderer=e;let n=Math.max(window.devicePixelRatio,2),i=new Jt;this.renderer.getSize(i),t===void 0?(this.camera=new Tr(45,i.width/i.height,.1,100),this.camera.position.set(0,0,5)):this.camera=t,this.fbo=new fi(i.width*n,i.height*n)}getTexture(){return this.fbo.texture}render(e=!0){this.renderer.setClearColor(16711680,0),e?(this.renderer.setRenderTarget(this.fbo),this.renderer.clear(),this.renderer.render(this,this.camera)):(this.renderer.setRenderTarget(null),this.renderer.render(this,this.camera))}}var Q2=`attribute float aIndex;\r
attribute float aRand;

varying float vIndex;\r
varying float vRand;

varying vec2 vUv; 

void main() {\r
    vIndex = aIndex;\r
    vRand = aRand;\r
    vUv = uv;

    vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(position, 1.0);

    gl_Position = projectionMatrix *  mvPosition;\r
}`,J2=`uniform float uTime;

varying float vIndex;\r
varying float vRand;

varying vec2 vUv;

void main() {\r
    gl_FragColor = vec4(vRand, vUv, 1.0);\r
}`;/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class wi{constructor(e,t,n,i,a="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(a),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),wi.nextNameID=wi.nextNameID||0,this.$name.id=`lil-gui-name-${++wi.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class eE extends wi{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function ch(l){let e,t;return(e=l.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=l.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=l.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const tE={isPrimitive:!0,match:l=>typeof l=="string",fromHexString:ch,toHexString:ch},Uo={isPrimitive:!0,match:l=>typeof l=="number",fromHexString:l=>parseInt(l.substring(1),16),toHexString:l=>"#"+l.toString(16).padStart(6,0)},nE={isPrimitive:!1,match:l=>Array.isArray(l),fromHexString(l,e,t=1){const n=Uo.fromHexString(l);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([l,e,t],n=1){n=255/n;const i=l*n<<16^e*n<<8^t*n<<0;return Uo.toHexString(i)}},rE={isPrimitive:!1,match:l=>Object(l)===l,fromHexString(l,e,t=1){const n=Uo.fromHexString(l);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:l,g:e,b:t},n=1){n=255/n;const i=l*n<<16^e*n<<8^t*n<<0;return Uo.toHexString(i)}},iE=[tE,Uo,nE,rE];function aE(l){return iE.find(e=>e.match(l))}class sE extends wi{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=aE(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const a=ch(this.$text.value);a&&this._setValueFromHexString(a)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class of extends wi{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class oE extends wi{constructor(e,t,n,i,a,o){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(a);const s=o!==void 0;this.step(s?o:this._getImplicitStep(),s),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let E=parseFloat(this.$input.value);isNaN(E)||(this._stepExplicit&&(E=this._snap(E)),this.setValue(this._clamp(E)))},n=E=>{const T=parseFloat(this.$input.value);isNaN(T)||(this._snapClampSetValue(T+E),this.$input.value=this.getValue())},i=E=>{E.key==="Enter"&&this.$input.blur(),E.code==="ArrowUp"&&(E.preventDefault(),n(this._step*this._arrowKeyMultiplier(E))),E.code==="ArrowDown"&&(E.preventDefault(),n(this._step*this._arrowKeyMultiplier(E)*-1))},a=E=>{this._inputFocused&&(E.preventDefault(),n(this._step*this._normalizeMouseWheel(E)))};let o=!1,s,u,c,f,h;const d=5,v=E=>{s=E.clientX,u=c=E.clientY,o=!0,f=this.getValue(),h=0,window.addEventListener("mousemove",x),window.addEventListener("mouseup",p)},x=E=>{if(o){const T=E.clientX-s,A=E.clientY-u;Math.abs(A)>d?(E.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(T)>d&&p()}if(!o){const T=E.clientY-c;h-=T*this._step*this._arrowKeyMultiplier(E),f+h>this._max?h=this._max-f:f+h<this._min&&(h=this._min-f),this._snapClampSetValue(f+h)}c=E.clientY},p=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",x),window.removeEventListener("mouseup",p)},m=()=>{this._inputFocused=!0},_=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",a,{passive:!1}),this.$input.addEventListener("mousedown",v),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",_)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(_,E,T,A,w)=>(_-E)/(T-E)*(w-A)+A,t=_=>{const E=this.$slider.getBoundingClientRect();let T=e(_,E.left,E.right,this._min,this._max);this._snapClampSetValue(T)},n=_=>{this._setDraggingStyle(!0),t(_.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",a)},i=_=>{t(_.clientX)},a=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",a)};let o=!1,s,u;const c=_=>{_.preventDefault(),this._setDraggingStyle(!0),t(_.touches[0].clientX),o=!1},f=_=>{_.touches.length>1||(this._hasScrollBar?(s=_.touches[0].clientX,u=_.touches[0].clientY,o=!0):c(_),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",d))},h=_=>{if(o){const E=_.touches[0].clientX-s,T=_.touches[0].clientY-u;Math.abs(E)>Math.abs(T)?c(_):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d))}else _.preventDefault(),t(_.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d)},v=this._callOnFinishChange.bind(this),x=400;let p;const m=_=>{if(Math.abs(_.deltaX)<Math.abs(_.deltaY)&&this._hasScrollBar)return;_.preventDefault();const T=this._normalizeMouseWheel(_)*this._step;this._snapClampSetValue(this.getValue()+T),this.$input.value=this.getValue(),clearTimeout(p),p=setTimeout(v,x)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",f,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class lE extends wi{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class cE extends wi{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var uE=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function fE(l){const e=document.createElement("style");e.innerHTML=l;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let v0=!1;class Oh{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:a="Controls",closeFolders:o=!1,injectStyles:s=!0,touchStyles:u=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(a),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),u&&this.domElement.classList.add("allow-touch-styles"),!v0&&s&&(fE(uE),v0=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(e,t,n,i,a){if(Object(n)===n)return new lE(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new oE(this,e,t,n,i,a);case"boolean":return new eE(this,e,t);case"string":return new cE(this,e,t);case"function":return new of(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new sE(this,e,t,n)}addFolder(e){const t=new Oh({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof of||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof of)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=a=>{a.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const Go=new Oh;Go.hide();const rn={showMap:!1,duration:Tv.duration,speed:1,progress:0,brightnessX:.5,brightnessY:.5,brightnessZ:.5,contrastX:.5,contrastY:.5,contrastZ:.5,oscillationX:1,oscillationY:1,oscillationZ:1,phaseX:.01,phaseY:.02,phaseZ:.03,phaseStrength:4,invertColor:!1,saturateColor:!0,enableThreshold:!1,threshold:.25,frequency1:3.7,frequency2:0,amplitude1:1.25,distanceFactor:2,repeat:1,zoom:1,fwid:.6,speed:1,lineThick:0,maxDepth:8};Go.add(rn,"showMap").name("show map");const Qa=Go.addFolder("color"),Fh=Qa.addFolder("brightness");Fh.add(rn,"brightnessX",0,1,.01).name("red");Fh.add(rn,"brightnessY",0,1,.01).name("green");Fh.add(rn,"brightnessZ",0,1,.01).name("blue");const Nh=Qa.addFolder("contrast");Nh.add(rn,"contrastX",0,1,.01).name("red");Nh.add(rn,"contrastY",0,1,.01).name("green");Nh.add(rn,"contrastZ",0,1,.01).name("blue");const zh=Qa.addFolder("oscillation");zh.add(rn,"oscillationX",0,5,.01).name("red");zh.add(rn,"oscillationY",0,5,.01).name("green");zh.add(rn,"oscillationZ",0,5,.01).name("blue");const kh=Qa.addFolder("phase");kh.add(rn,"phaseX",0,1,.01).name("red");kh.add(rn,"phaseY",0,1,.01).name("green");kh.add(rn,"phaseZ",0,1,.01).name("blue");Qa.add(rn,"phaseStrength",0,10,.01).name("phase strength");Qa.add(rn,"invertColor").name("invert color");Qa.add(rn,"saturateColor").name("saturate color");function lf(l,e,t){return l*(1-t)+e*t}function cf(l,e,t,n,i,a=!1){if(Math.abs(e-t)<Number.EPSILON)return n;{let o=(l-e)/(t-e)*(i-n)+n;return a&&(i<n?o<i?o=i:o>n&&(o=n):o>i?o=i:o<n&&(o=n)),o}}let hE="0x1ee47d50e116827de0145b678da2544c1336e21dee9cfa495e7375ababb63c56",Bh=hE,uh,ci,Jl,La,dE=(l="tx piter")=>{uh=ci=Jl=La=null,ci=Uint32Array.from([0,1,Jl=La=2,3].map(e=>parseInt(l.substr(e*8+2,8),16))),uh=e=>(La=ci[3],ci[3]=ci[2],ci[2]=ci[1],ci[1]=Jl=ci[0],La^=La<<11,ci[0]^=La^La>>>8^Jl>>>19,ci[0]/2**32)};dE(Bh);console.log(Bh);let Do=(l,e)=>(l===void 0?(l=0,e=1):e=e||0,l+uh()*(e-l)),pE=l=>l[Math.floor(Do(0,.99*l.length))];var cc={exports:{}};cc.exports;var g0;function mE(){return g0||(g0=1,function(l){var e=256,t=6,n=52,i=[],a=typeof pc>"u"?window:pc,o=Math.pow(e,t),s=Math.pow(2,n),u=s*2,c=e-1,f=Math.random;l.exports=function(m,_){if(_&&_.global===!0)return _.global=!1,Math.random=l.exports(m,_),_.global=!0,Math.random;var E=_&&_.entropy||!1,T=[];v(d(E?[m,p(i)]:0 in arguments?m:x(),3),T);var A=new h(T);return v(p(A.S),i),function(){for(var w=A.g(t),I=o,P=0;w<s;)w=(w+P)*e,I*=e,P=A.g(1);for(;w>=u;)w/=2,I/=2,P>>>=1;return(w+P)/I}},l.exports.resetGlobal=function(){Math.random=f};function h(m){var _,E=m.length,T=this,A=0,w=T.i=T.j=0,I=T.S=[];for(E||(m=[E++]);A<e;)I[A]=A++;for(A=0;A<e;A++)I[A]=I[w=c&w+m[A%E]+(_=I[A])],I[w]=_;(T.g=function(P){for(var M,L=0,D=T.i,z=T.j,Q=T.S;P--;)M=Q[D=c&D+1],L=L*e+Q[c&(Q[D]=Q[z=c&z+M])+(Q[z]=M)];return T.i=D,T.j=z,L})(e)}function d(m,_){var E=[],T=(typeof m)[0],A;if(_&&T=="o")for(A in m)try{E.push(d(m[A],_-1))}catch{}return E.length?E:T=="s"?m:m+"\0"}function v(m,_){for(var E=m+"",T,A=0;A<E.length;)_[c&A]=c&(T^=_[c&A]*19)+E.charCodeAt(A++);return p(_)}function x(m){try{return a.crypto.getRandomValues(m=new Uint8Array(e)),p(m)}catch{return[+new Date,a,a.navigator&&a.navigator.plugins,a.screen,p(i)]}}function p(m){return String.fromCharCode.apply(0,m)}v(Math.random(),i)}(cc)),cc.exports}var ec={exports:{}},_0;function vE(){return _0||(_0=1,function(l,e){(function(){var t=.5*(Math.sqrt(3)-1),n=(3-Math.sqrt(3))/6,i=1/3,a=1/6,o=(Math.sqrt(5)-1)/4,s=(5-Math.sqrt(5))/20;function u(d){var v;typeof d=="function"?v=d:d?v=f(d):v=Math.random,this.p=c(v),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(var x=0;x<512;x++)this.perm[x]=this.p[x&255],this.permMod12[x]=this.perm[x]%12}u.prototype={grad3:new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),grad4:new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]),noise2D:function(d,v){var x=this.permMod12,p=this.perm,m=this.grad3,_=0,E=0,T=0,A=(d+v)*t,w=Math.floor(d+A),I=Math.floor(v+A),P=(w+I)*n,M=w-P,L=I-P,D=d-M,z=v-L,Q,J;D>z?(Q=1,J=0):(Q=0,J=1);var Y=D-Q+n,re=z-J+n,me=D-1+2*n,ge=z-1+2*n,ae=w&255,Le=I&255,Me=.5-D*D-z*z;if(Me>=0){var fe=x[ae+p[Le]]*3;Me*=Me,_=Me*Me*(m[fe]*D+m[fe+1]*z)}var V=.5-Y*Y-re*re;if(V>=0){var le=x[ae+Q+p[Le+J]]*3;V*=V,E=V*V*(m[le]*Y+m[le+1]*re)}var de=.5-me*me-ge*ge;if(de>=0){var Fe=x[ae+1+p[Le+1]]*3;de*=de,T=de*de*(m[Fe]*me+m[Fe+1]*ge)}return 70*(_+E+T)},noise3D:function(d,v,x){var p=this.permMod12,m=this.perm,_=this.grad3,E,T,A,w,I=(d+v+x)*i,P=Math.floor(d+I),M=Math.floor(v+I),L=Math.floor(x+I),D=(P+M+L)*a,z=P-D,Q=M-D,J=L-D,Y=d-z,re=v-Q,me=x-J,ge,ae,Le,Me,fe,V;Y>=re?re>=me?(ge=1,ae=0,Le=0,Me=1,fe=1,V=0):Y>=me?(ge=1,ae=0,Le=0,Me=1,fe=0,V=1):(ge=0,ae=0,Le=1,Me=1,fe=0,V=1):re<me?(ge=0,ae=0,Le=1,Me=0,fe=1,V=1):Y<me?(ge=0,ae=1,Le=0,Me=0,fe=1,V=1):(ge=0,ae=1,Le=0,Me=1,fe=1,V=0);var le=Y-ge+a,de=re-ae+a,Fe=me-Le+a,Se=Y-Me+2*a,It=re-fe+2*a,_t=me-V+2*a,Dt=Y-1+3*a,bt=re-1+3*a,ye=me-1+3*a,qe=P&255,Ce=M&255,$e=L&255,Je=.6-Y*Y-re*re-me*me;if(Je<0)E=0;else{var Ve=p[qe+m[Ce+m[$e]]]*3;Je*=Je,E=Je*Je*(_[Ve]*Y+_[Ve+1]*re+_[Ve+2]*me)}var ft=.6-le*le-de*de-Fe*Fe;if(ft<0)T=0;else{var ht=p[qe+ge+m[Ce+ae+m[$e+Le]]]*3;ft*=ft,T=ft*ft*(_[ht]*le+_[ht+1]*de+_[ht+2]*Fe)}var St=.6-Se*Se-It*It-_t*_t;if(St<0)A=0;else{var pn=p[qe+Me+m[Ce+fe+m[$e+V]]]*3;St*=St,A=St*St*(_[pn]*Se+_[pn+1]*It+_[pn+2]*_t)}var Sn=.6-Dt*Dt-bt*bt-ye*ye;if(Sn<0)w=0;else{var W=p[qe+1+m[Ce+1+m[$e+1]]]*3;Sn*=Sn,w=Sn*Sn*(_[W]*Dt+_[W+1]*bt+_[W+2]*ye)}return 32*(E+T+A+w)},noise4D:function(d,v,x,p){var m=this.perm,_=this.grad4,E,T,A,w,I,P=(d+v+x+p)*o,M=Math.floor(d+P),L=Math.floor(v+P),D=Math.floor(x+P),z=Math.floor(p+P),Q=(M+L+D+z)*s,J=M-Q,Y=L-Q,re=D-Q,me=z-Q,ge=d-J,ae=v-Y,Le=x-re,Me=p-me,fe=0,V=0,le=0,de=0;ge>ae?fe++:V++,ge>Le?fe++:le++,ge>Me?fe++:de++,ae>Le?V++:le++,ae>Me?V++:de++,Le>Me?le++:de++;var Fe,Se,It,_t,Dt,bt,ye,qe,Ce,$e,Je,Ve;Fe=fe>=3?1:0,Se=V>=3?1:0,It=le>=3?1:0,_t=de>=3?1:0,Dt=fe>=2?1:0,bt=V>=2?1:0,ye=le>=2?1:0,qe=de>=2?1:0,Ce=fe>=1?1:0,$e=V>=1?1:0,Je=le>=1?1:0,Ve=de>=1?1:0;var ft=ge-Fe+s,ht=ae-Se+s,St=Le-It+s,pn=Me-_t+s,Sn=ge-Dt+2*s,W=ae-bt+2*s,y=Le-ye+2*s,ke=Me-qe+2*s,mt=ge-Ce+3*s,gt=ae-$e+3*s,Pt=Le-Je+3*s,Gt=Me-Ve+3*s,Z=ge-1+4*s,_e=ae-1+4*s,Lt=Le-1+4*s,rt=Me-1+4*s,Mt=M&255,Ot=L&255,Tt=D&255,Qt=z&255,an=.6-ge*ge-ae*ae-Le*Le-Me*Me;if(an<0)E=0;else{var xn=m[Mt+m[Ot+m[Tt+m[Qt]]]]%32*4;an*=an,E=an*an*(_[xn]*ge+_[xn+1]*ae+_[xn+2]*Le+_[xn+3]*Me)}var se=.6-ft*ft-ht*ht-St*St-pn*pn;if(se<0)T=0;else{var Be=m[Mt+Fe+m[Ot+Se+m[Tt+It+m[Qt+_t]]]]%32*4;se*=se,T=se*se*(_[Be]*ft+_[Be+1]*ht+_[Be+2]*St+_[Be+3]*pn)}var F=.6-Sn*Sn-W*W-y*y-ke*ke;if(F<0)A=0;else{var C=m[Mt+Dt+m[Ot+bt+m[Tt+ye+m[Qt+qe]]]]%32*4;F*=F,A=F*F*(_[C]*Sn+_[C+1]*W+_[C+2]*y+_[C+3]*ke)}var q=.6-mt*mt-gt*gt-Pt*Pt-Gt*Gt;if(q<0)w=0;else{var ne=m[Mt+Ce+m[Ot+$e+m[Tt+Je+m[Qt+Ve]]]]%32*4;q*=q,w=q*q*(_[ne]*mt+_[ne+1]*gt+_[ne+2]*Pt+_[ne+3]*Gt)}var De=.6-Z*Z-_e*_e-Lt*Lt-rt*rt;if(De<0)I=0;else{var Re=m[Mt+1+m[Ot+1+m[Tt+1+m[Qt+1]]]]%32*4;De*=De,I=De*De*(_[Re]*Z+_[Re+1]*_e+_[Re+2]*Lt+_[Re+3]*rt)}return 27*(E+T+A+w+I)}};function c(d){var v,x=new Uint8Array(256);for(v=0;v<256;v++)x[v]=v;for(v=0;v<255;v++){var p=v+~~(d()*(256-v)),m=x[v];x[v]=x[p],x[p]=m}return x}u._buildPermutationTable=c;function f(){var d=0,v=0,x=0,p=1,m=h();d=m(" "),v=m(" "),x=m(" ");for(var _=0;_<arguments.length;_++)d-=m(arguments[_]),d<0&&(d+=1),v-=m(arguments[_]),v<0&&(v+=1),x-=m(arguments[_]),x<0&&(x+=1);return m=null,function(){var E=2091639*d+p*23283064365386963e-26;return d=v,v=x,x=E-(p=E|0)}}function h(){var d=4022871197;return function(v){v=v.toString();for(var x=0;x<v.length;x++){d+=v.charCodeAt(x);var p=.02519603282416938*d;d=p>>>0,p-=d,p*=d,d=p>>>0,p-=d,d+=p*4294967296}return(d>>>0)*23283064365386963e-26}}e.SimplexNoise=u,l.exports=u})()}(ec,ec.exports)),ec.exports}var uf,x0;function Jo(){return x0||(x0=1,uf=function(){for(var e=0;e<arguments.length;e++)if(typeof arguments[e]<"u")return arguments[e]}),uf}var ff,y0;function gE(){if(y0)return ff;y0=1;var l=mE(),e=vE(),t=Jo();function n(i){i=t(i,null);var a=Math.random,o,s,u,c=null,f=!1;return h(i),{value:d,createRandom:function(V){return n(V)},setSeed:h,getSeed:x,getRandomSeed:p,valueNonZero:v,permuteNoise:_,noise1D:E,noise2D:T,noise3D:A,noise4D:w,sign:I,boolean:P,chance:M,range:L,rangeFloor:D,pick:z,shuffle:Q,onCircle:J,insideCircle:Y,onSphere:re,insideSphere:me,quaternion:ge,weighted:Me,weightedSet:ae,weightedSetIndex:Le,gaussian:fe};function h(V,le){typeof V=="number"||typeof V=="string"?(o=V,s=l(o,le)):(o=void 0,s=a),u=m(),c=null,f=!1}function d(){return s()}function v(){for(var V=0;V===0;)V=d();return V}function x(){return o}function p(){var V=String(Math.floor(Math.random()*1e6));return V}function m(){return new e(s)}function _(){u=m()}function E(V,le,de){if(!isFinite(V))throw new TypeError("x component for noise() must be finite");return le=t(le,1),de=t(de,1),de*u.noise2D(V*le,0)}function T(V,le,de,Fe){if(!isFinite(V))throw new TypeError("x component for noise() must be finite");if(!isFinite(le))throw new TypeError("y component for noise() must be finite");return de=t(de,1),Fe=t(Fe,1),Fe*u.noise2D(V*de,le*de)}function A(V,le,de,Fe,Se){if(!isFinite(V))throw new TypeError("x component for noise() must be finite");if(!isFinite(le))throw new TypeError("y component for noise() must be finite");if(!isFinite(de))throw new TypeError("z component for noise() must be finite");return Fe=t(Fe,1),Se=t(Se,1),Se*u.noise3D(V*Fe,le*Fe,de*Fe)}function w(V,le,de,Fe,Se,It){if(!isFinite(V))throw new TypeError("x component for noise() must be finite");if(!isFinite(le))throw new TypeError("y component for noise() must be finite");if(!isFinite(de))throw new TypeError("z component for noise() must be finite");if(!isFinite(Fe))throw new TypeError("w component for noise() must be finite");return Se=t(Se,1),It=t(It,1),It*u.noise4D(V*Se,le*Se,de*Se,Fe*Se)}function I(){return P()?1:-1}function P(){return d()>.5}function M(V){if(V=t(V,.5),typeof V!="number")throw new TypeError("expected n to be a number");return d()<V}function L(V,le){if(le===void 0&&(le=V,V=0),typeof V!="number"||typeof le!="number")throw new TypeError("Expected all arguments to be numbers");return d()*(le-V)+V}function D(V,le){if(le===void 0&&(le=V,V=0),typeof V!="number"||typeof le!="number")throw new TypeError("Expected all arguments to be numbers");return Math.floor(L(V,le))}function z(V){if(V.length!==0)return V[D(0,V.length)]}function Q(V){if(!Array.isArray(V))throw new TypeError("Expected Array, got "+typeof V);for(var le,de,Fe=V.length,Se=V.slice();Fe;)le=Math.floor(d()*Fe--),de=Se[Fe],Se[Fe]=Se[le],Se[le]=de;return Se}function J(V,le){V=t(V,1),le=le||[];var de=d()*2*Math.PI;return le[0]=V*Math.cos(de),le[1]=V*Math.sin(de),le}function Y(V,le){V=t(V,1),le=le||[],J(1,le);var de=V*Math.sqrt(d());return le[0]*=de,le[1]*=de,le}function re(V,le){V=t(V,1),le=le||[];var de=d()*Math.PI*2,Fe=d()*2-1,Se=de,It=Math.acos(Fe);return le[0]=V*Math.sin(It)*Math.cos(Se),le[1]=V*Math.sin(It)*Math.sin(Se),le[2]=V*Math.cos(It),le}function me(V,le){V=t(V,1),le=le||[];var de=d()*Math.PI*2,Fe=d()*2-1,Se=d(),It=de,_t=Math.acos(Fe),Dt=V*Math.cbrt(Se);return le[0]=Dt*Math.sin(_t)*Math.cos(It),le[1]=Dt*Math.sin(_t)*Math.sin(It),le[2]=Dt*Math.cos(_t),le}function ge(V){V=V||[];var le=d(),de=d(),Fe=d(),Se=Math.sqrt(1-le),It=Math.sqrt(le),_t=Math.PI*2*de,Dt=Math.PI*2*Fe,bt=Math.sin(_t)*Se,ye=Math.cos(_t)*Se,qe=Math.sin(Dt)*It,Ce=Math.cos(Dt)*It;return V[0]=bt,V[1]=ye,V[2]=qe,V[3]=Ce,V}function ae(V){return V=V||[],V.length===0?null:V[Le(V)].value}function Le(V){return V=V||[],V.length===0?-1:Me(V.map(function(le){return le.weight}))}function Me(V){if(V=V||[],V.length===0)return-1;var le=0,de;for(de=0;de<V.length;de++)le+=V[de];if(le<=0)throw new Error("Weights must sum to > 0");var Fe=d()*le;for(de=0;de<V.length;de++){if(Fe<V[de])return de;Fe-=V[de]}return 0}function fe(V,le){if(V=t(V,0),le=t(le,1),f){f=!1;var de=c;return c=null,V+le*de}else{var Fe=0,Se=0,It=0;do Fe=d()*2-1,Se=d()*2-1,It=Fe*Fe+Se*Se;while(It>=1||It===0);var _t=Math.sqrt(-2*Math.log(It)/It);return c=Se*_t,f=!0,V+le*(Fe*_t)}}}return ff=n(),ff}var hf,b0;function Uh(){if(b0)return hf;b0=1,hf=l;function l(e,t,n){if(typeof t!="number"||typeof n!="number")throw new TypeError('Must specify "to" and "from" arguments as numbers');if(t>n){var i=t;t=n,n=i}var a=n-t;return a===0?n:e-a*Math.floor((e-t)/a)}return hf}var df,w0;function _E(){if(w0)return df;w0=1;var l=Jo(),e=Uh(),t=Number.EPSILON;function n(P,M,L){return M<L?P<M?M:P>L?L:P:P<L?L:P>M?M:P}function i(P){return n(P,0,1)}function a(P,M,L){return P*(1-L)+M*L}function o(P,M,L){return Math.abs(P-M)<t?0:(L-P)/(M-P)}function s(P,M,L){var D=n(o(P,M,L),0,1);return D*D*(3-2*D)}function u(P,M){return M=l(M,0),typeof P=="number"&&isFinite(P)?P:M}function c(P){if(typeof P!="number")throw new TypeError("Expected dims argument");return function(M,L){L=l(L,0);var D;M==null?D=L:typeof M=="number"&&isFinite(M)&&(D=M);var z=[],Q;if(D==null)for(Q=0;Q<P;Q++)z[Q]=u(M[Q],L);else for(Q=0;Q<P;Q++)z[Q]=D;return z}}function f(P,M,L,D){if(D=D||[],P.length!==M.length)throw new TypeError("min and max array are expected to have the same length");for(var z=0;z<P.length;z++)D[z]=a(P[z],M[z],L);return D}function h(P,M){if(P=l(P,0),typeof P!="number")throw new TypeError("Expected n argument to be a number");for(var L=[],D=0;D<P;D++)L.push(M);return L}function d(P,M){if(P=l(P,0),typeof P!="number")throw new TypeError("Expected n argument to be a number");M=M||{},typeof M=="boolean"&&(M={endpoint:!0});var L=l(M.offset,0);return M.endpoint?h(P).map(function(D,z){return P<=1?0:(z+L)/(P-1)}):h(P).map(function(D,z){return(z+L)/P})}function v(P,M,L){M=n(M,0,1);var D=P.length-1,z=M*D,Q=Math.floor(z),J=z-Q,Y=Math.min(Q+1,D),re=P[Q%P.length],me=P[Y%P.length];if(typeof re=="number"&&typeof me=="number")return a(re,me,J);if(Array.isArray(re)&&Array.isArray(me))return f(re,me,J,L);throw new TypeError("Mismatch in value type of two array elements: "+Q+" and "+Y)}function x(P,M){return(P%M+M)%M}function p(P){return P*Math.PI/180}function m(P){return P*180/Math.PI}function _(P){return P-Math.floor(P)}function E(P){return P>0?1:P<0?-1:0}function T(P,M){return P=x(P,M*2),M-Math.abs(P-M)}function A(P,M,L,D){return a(P,M,1-Math.exp(-L*D))}function w(P,M,L,D,z){z=z||[];for(var Q=0;Q<P.length;Q++)z[Q]=A(P[Q],M[Q],L,D);return z}function I(P,M,L,D,z,Q){if(Math.abs(M-L)<t)return D;var J=(P-M)/(L-M)*(z-D)+D;return Q&&(z<D?J<z?J=z:J>D&&(J=D):J>z?J=z:J<D&&(J=D)),J}return df={mod:x,fract:_,sign:E,degToRad:p,radToDeg:m,wrap:e,pingPong:T,linspace:d,lerp:a,lerpArray:f,inverseLerp:o,lerpFrames:v,clamp:n,clamp01:i,smoothstep:s,damp:A,dampArray:w,mapRange:I,expand2D:c(2),expand3D:c(3),expand4D:c(4)},df}var zr={},tc={exports:{}},S0;function xE(){if(S0)return tc.exports;S0=1;var l=Jo(),e=["mm","cm","m","pc","pt","in","ft","px"],t={m:{system:"metric",factor:1},cm:{system:"metric",factor:1/100},mm:{system:"metric",factor:1/1e3},pt:{system:"imperial",factor:1/72},pc:{system:"imperial",factor:1/6},in:{system:"imperial",factor:1},ft:{system:"imperial",factor:12}};const n={metric:{unit:"m",ratio:1/.0254},imperial:{unit:"in",ratio:.0254}};function i(o,s){return+(Math.round(o+"e"+s)+"e-"+s)}function a(o,s,u,c){if(typeof o!="number"||!isFinite(o))throw new Error("Value must be a finite number");if(!s||!u)throw new Error("Must specify from and to units");c=c||{};var f=l(c.pixelsPerInch,96),h=c.precision,d=c.roundPixel!==!1;if(s=s.toLowerCase(),u=u.toLowerCase(),e.indexOf(s)===-1)throw new Error('Invalid from unit "'+s+'", must be one of: '+e.join(", "));if(e.indexOf(u)===-1)throw new Error('Invalid from unit "'+u+'", must be one of: '+e.join(", "));if(s===u)return o;var v=1,x=1,p=!1;s==="px"&&(x=1/f,s="in"),u==="px"&&(p=!0,v=f,u="in");var m=t[s],_=t[u],E=o*m.factor*x;m.system!==_.system&&(E*=n[m.system].ratio);var T=E/_.factor*v;return p&&d?T=Math.round(T):typeof h=="number"&&isFinite(h)&&(T=i(T,h)),T}return tc.exports=a,tc.exports.units=e,tc.exports}var fh=Math.PI,hh=2*fh,Fa=1e-6,yE=hh-Fa;function dh(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function tg(){return new dh}dh.prototype=tg.prototype={constructor:dh,moveTo:function(l,e){this._+="M"+(this._x0=this._x1=+l)+","+(this._y0=this._y1=+e)},closePath:function(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(l,e){this._+="L"+(this._x1=+l)+","+(this._y1=+e)},quadraticCurveTo:function(l,e,t,n){this._+="Q"+ +l+","+ +e+","+(this._x1=+t)+","+(this._y1=+n)},bezierCurveTo:function(l,e,t,n,i,a){this._+="C"+ +l+","+ +e+","+ +t+","+ +n+","+(this._x1=+i)+","+(this._y1=+a)},arcTo:function(l,e,t,n,i){l=+l,e=+e,t=+t,n=+n,i=+i;var a=this._x1,o=this._y1,s=t-l,u=n-e,c=a-l,f=o-e,h=c*c+f*f;if(i<0)throw new Error("negative radius: "+i);if(this._x1===null)this._+="M"+(this._x1=l)+","+(this._y1=e);else if(h>Fa)if(!(Math.abs(f*s-u*c)>Fa)||!i)this._+="L"+(this._x1=l)+","+(this._y1=e);else{var d=t-a,v=n-o,x=s*s+u*u,p=d*d+v*v,m=Math.sqrt(x),_=Math.sqrt(h),E=i*Math.tan((fh-Math.acos((x+h-p)/(2*m*_)))/2),T=E/_,A=E/m;Math.abs(T-1)>Fa&&(this._+="L"+(l+T*c)+","+(e+T*f)),this._+="A"+i+","+i+",0,0,"+ +(f*d>c*v)+","+(this._x1=l+A*s)+","+(this._y1=e+A*u)}},arc:function(l,e,t,n,i,a){l=+l,e=+e,t=+t,a=!!a;var o=t*Math.cos(n),s=t*Math.sin(n),u=l+o,c=e+s,f=1^a,h=a?n-i:i-n;if(t<0)throw new Error("negative radius: "+t);this._x1===null?this._+="M"+u+","+c:(Math.abs(this._x1-u)>Fa||Math.abs(this._y1-c)>Fa)&&(this._+="L"+u+","+c),t&&(h<0&&(h=h%hh+hh),h>yE?this._+="A"+t+","+t+",0,1,"+f+","+(l-o)+","+(e-s)+"A"+t+","+t+",0,1,"+f+","+(this._x1=u)+","+(this._y1=c):h>Fa&&(this._+="A"+t+","+t+",0,"+ +(h>=fh)+","+f+","+(this._x1=l+t*Math.cos(i))+","+(this._y1=e+t*Math.sin(i))))},rect:function(l,e,t,n){this._+="M"+(this._x0=this._x1=+l)+","+(this._y0=this._y1=+e)+"h"+ +t+"v"+ +n+"h"+-t+"Z"},toString:function(){return this._}};const bE=Object.freeze(Object.defineProperty({__proto__:null,path:tg},Symbol.toStringTag,{value:"Module"})),wE=Ev(bE);var pf,M0;function SE(){if(M0)return pf;M0=1;function l(t){return[t[0],t[1]]}function e(t,n){return[t,n]}return pf=function(n){n=n||{};var i=typeof n.recursion=="number"?n.recursion:8,a=typeof n.epsilon=="number"?n.epsilon:11920929e-14,o=typeof n.pathEpsilon=="number"?n.pathEpsilon:1,s=typeof n.angleEpsilon=="number"?n.angleEpsilon:.01,u=n.angleTolerance||0,c=n.cuspLimit||0;return function(v,x,p,m,_,E){E||(E=[]),_=typeof _=="number"?_:1;var T=o/_;return T*=T,f(v,x,p,m,E,T),E};function f(d,v,x,p,m,_){m.push(l(d));var E=d[0],T=d[1],A=v[0],w=v[1],I=x[0],P=x[1],M=p[0],L=p[1];h(E,T,A,w,I,P,M,L,m,_,0),m.push(l(p))}function h(d,v,x,p,m,_,E,T,A,w,I){if(!(I>i)){var P=Math.PI,M=(d+x)/2,L=(v+p)/2,D=(x+m)/2,z=(p+_)/2,Q=(m+E)/2,J=(_+T)/2,Y=(M+D)/2,re=(L+z)/2,me=(D+Q)/2,ge=(z+J)/2,ae=(Y+me)/2,Le=(re+ge)/2;if(I>0){var Me=E-d,fe=T-v,V=Math.abs((x-E)*fe-(p-T)*Me),le=Math.abs((m-E)*fe-(_-T)*Me),de,Fe;if(V>a&&le>a){if((V+le)*(V+le)<=w*(Me*Me+fe*fe)){if(u<s){A.push(e(ae,Le));return}var Se=Math.atan2(_-p,m-x);if(de=Math.abs(Se-Math.atan2(p-v,x-d)),Fe=Math.abs(Math.atan2(T-_,E-m)-Se),de>=P&&(de=2*P-de),Fe>=P&&(Fe=2*P-Fe),de+Fe<u){A.push(e(ae,Le));return}if(c!==0){if(de>c){A.push(e(x,p));return}if(Fe>c){A.push(e(m,_));return}}}}else if(V>a){if(V*V<=w*(Me*Me+fe*fe)){if(u<s){A.push(e(ae,Le));return}if(de=Math.abs(Math.atan2(_-p,m-x)-Math.atan2(p-v,x-d)),de>=P&&(de=2*P-de),de<u){A.push(e(x,p)),A.push(e(m,_));return}if(c!==0&&de>c){A.push(e(x,p));return}}}else if(le>a){if(le*le<=w*(Me*Me+fe*fe)){if(u<s){A.push(e(ae,Le));return}if(de=Math.abs(Math.atan2(T-_,E-m)-Math.atan2(_-p,m-x)),de>=P&&(de=2*P-de),de<u){A.push(e(x,p)),A.push(e(m,_));return}if(c!==0&&de>c){A.push(e(m,_));return}}}else if(Me=ae-(d+E)/2,fe=Le-(v+T)/2,Me*Me+fe*fe<=w){A.push(e(ae,Le));return}}h(d,v,M,L,Y,re,ae,Le,A,w,I+1),h(ae,Le,me,ge,Q,J,E,T,A,w,I+1)}}},pf}var mf,E0;function ME(){return E0||(E0=1,mf=SE()()),mf}var vf,T0;function ng(){if(T0)return vf;T0=1,vf=l;function l(e){var t=0,n=0,i=0,a=0;return e.map(function(o){o=o.slice();var s=o[0],u=s.toUpperCase();if(s!=u)switch(o[0]=u,s){case"a":o[6]+=i,o[7]+=a;break;case"v":o[1]+=a;break;case"h":o[1]+=i;break;default:for(var c=1;c<o.length;)o[c++]+=i,o[c++]+=a}switch(u){case"Z":i=t,a=n;break;case"H":i=o[1];break;case"V":a=o[1];break;case"M":i=t=o[1],a=n=o[2];break;default:i=o[o.length-2],a=o[o.length-1]}return o})}return vf}var gf,A0;function EE(){if(A0)return gf;A0=1;var l=Math.PI,e=s(120);gf=t;function t(u){for(var c,f=[],h=0,d=0,v=0,x=0,p=null,m=null,_=0,E=0,T=0,A=u.length;T<A;T++){var w=u[T],I=w[0];switch(I){case"M":v=w[1],x=w[2];break;case"A":w=a(_,E,w[1],w[2],s(w[3]),w[4],w[5],w[6],w[7]),w.unshift("C"),w.length>7&&(f.push(w.splice(0,7)),w.unshift("C"));break;case"S":var P=_,M=E;(c=="C"||c=="S")&&(P+=P-h,M+=M-d),w=["C",P,M,w[1],w[2],w[3],w[4]];break;case"T":c=="Q"||c=="T"?(p=_*2-p,m=E*2-m):(p=_,m=E),w=i(_,E,p,m,w[1],w[2]);break;case"Q":p=w[1],m=w[2],w=i(_,E,w[1],w[2],w[3],w[4]);break;case"L":w=n(_,E,w[1],w[2]);break;case"H":w=n(_,E,w[1],E);break;case"V":w=n(_,E,_,w[1]);break;case"Z":w=n(_,E,v,x);break}c=I,_=w[w.length-2],E=w[w.length-1],w.length>4?(h=w[w.length-4],d=w[w.length-3]):(h=_,d=E),f.push(w)}return f}function n(u,c,f,h){return["C",u,c,f,h,f,h]}function i(u,c,f,h,d,v){return["C",u/3+2/3*f,c/3+2/3*h,d/3+2/3*f,v/3+2/3*h,d,v]}function a(u,c,f,h,d,v,x,p,m,_){if(_)z=_[0],Q=_[1],L=_[2],D=_[3];else{var E=o(u,c,-d);u=E.x,c=E.y,E=o(p,m,-d),p=E.x,m=E.y;var T=(u-p)/2,A=(c-m)/2,w=T*T/(f*f)+A*A/(h*h);w>1&&(w=Math.sqrt(w),f=w*f,h=w*h);var I=f*f,P=h*h,M=(v==x?-1:1)*Math.sqrt(Math.abs((I*P-I*A*A-P*T*T)/(I*A*A+P*T*T)));M==1/0&&(M=1);var L=M*f*A/h+(u+p)/2,D=M*-h*T/f+(c+m)/2,z=Math.asin(((c-D)/h).toFixed(9)),Q=Math.asin(((m-D)/h).toFixed(9));z=u<L?l-z:z,Q=p<L?l-Q:Q,z<0&&(z=l*2+z),Q<0&&(Q=l*2+Q),x&&z>Q&&(z=z-l*2),!x&&Q>z&&(Q=Q-l*2)}if(Math.abs(Q-z)>e){var J=Q,Y=p,re=m;Q=z+e*(x&&Q>z?1:-1),p=L+f*Math.cos(Q),m=D+h*Math.sin(Q);var me=a(p,m,f,h,d,0,x,Y,re,[Q,J,L,D])}var ge=Math.tan((Q-z)/4),ae=4/3*f*ge,Le=4/3*h*ge,Me=[2*u-(u+ae*Math.sin(z)),2*c-(c-Le*Math.cos(z)),p+ae*Math.sin(Q),m-Le*Math.cos(Q),p,m];if(_)return Me;me&&(Me=Me.concat(me));for(var fe=0;fe<Me.length;){var V=o(Me[fe],Me[fe+1],d);Me[fe++]=V.x,Me[fe++]=V.y}return Me}function o(u,c,f){return{x:u*Math.cos(f)-c*Math.sin(f),y:u*Math.sin(f)+c*Math.cos(f)}}function s(u){return u*(l/180)}return gf}var _f,C0;function TE(){return C0||(C0=1,_f=function(e,t){return e[0]=t[0],e[1]=t[1],e}),_f}var xf,P0;function AE(){if(P0)return xf;P0=1;var l=ME(),e=ng(),t=EE(),n=TE();function i(c,f,h){return c[0]=f,c[1]=h,c}var a=[0,0],o=[0,0],s=[0,0];function u(c,f,h,d){l(h,i(a,d[1],d[2]),i(o,d[3],d[4]),i(s,d[5],d[6]),f,c)}return xf=function(f,h){var d=[],v=[],x=[0,0];return t(e(f)).forEach(function(p,m,_){if(p[0]==="M")n(x,p.slice(1)),v.length>0&&(d.push(v),v=[]);else if(p[0]==="C")u(v,h,x,p),i(x,p[5],p[6]);else throw new Error("illegal type in SVG: "+p[0])}),v.length>0&&d.push(v),d},xf}var yf,L0;function CE(){if(L0)return yf;L0=1,yf=t;var l={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},e=/([astvzqmhlc])([^astvzqmhlc]*)/ig;function t(a){var o=[];return a.replace(e,function(s,u,c){var f=u.toLowerCase();for(c=i(c),f=="m"&&c.length>2&&(o.push([u].concat(c.splice(0,2))),f="l",u=u=="m"?"l":"L");;){if(c.length==l[f])return c.unshift(u),o.push(c);if(c.length<l[f])throw new Error("malformed path data");o.push([u].concat(c.splice(0,l[f])))}}),o}var n=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;function i(a){var o=a.match(n);return o?o.map(Number):[]}return yf}var PE=function(){function l(e,t){var n=[],i=!0,a=!1,o=void 0;try{for(var s=e[Symbol.iterator](),u;!(i=(u=s.next()).done)&&(n.push(u.value),!(t&&n.length===t));i=!0);}catch(c){a=!0,o=c}finally{try{!i&&s.return&&s.return()}finally{if(a)throw o}}return n}return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return l(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),Io=Math.PI*2,bf=function(e,t,n,i,a,o,s){var u=e.x,c=e.y;u*=t,c*=n;var f=i*u-a*c,h=a*u+i*c;return{x:f+o,y:h+s}},LE=function(e,t){var n=t===1.5707963267948966?.551915024494:t===-1.5707963267948966?-.551915024494:1.3333333333333333*Math.tan(t/4),i=Math.cos(e),a=Math.sin(e),o=Math.cos(e+t),s=Math.sin(e+t);return[{x:i-a*n,y:a+i*n},{x:o+s*n,y:s-o*n},{x:o,y:s}]},R0=function(e,t,n,i){var a=e*i-t*n<0?-1:1,o=e*n+t*i;return o>1&&(o=1),o<-1&&(o=-1),a*Math.acos(o)},RE=function(e,t,n,i,a,o,s,u,c,f,h,d){var v=Math.pow(a,2),x=Math.pow(o,2),p=Math.pow(h,2),m=Math.pow(d,2),_=v*x-v*m-x*p;_<0&&(_=0),_/=v*m+x*p,_=Math.sqrt(_)*(s===u?-1:1);var E=_*a/o*d,T=_*-o/a*h,A=f*E-c*T+(e+n)/2,w=c*E+f*T+(t+i)/2,I=(h-E)/a,P=(d-T)/o,M=(-h-E)/a,L=(-d-T)/o,D=R0(1,0,I,P),z=R0(I,P,M,L);return u===0&&z>0&&(z-=Io),u===1&&z<0&&(z+=Io),[A,w,D,z]},DE=function(e){var t=e.px,n=e.py,i=e.cx,a=e.cy,o=e.rx,s=e.ry,u=e.xAxisRotation,c=u===void 0?0:u,f=e.largeArcFlag,h=f===void 0?0:f,d=e.sweepFlag,v=d===void 0?0:d,x=[];if(o===0||s===0)return[];var p=Math.sin(c*Io/360),m=Math.cos(c*Io/360),_=m*(t-i)/2+p*(n-a)/2,E=-p*(t-i)/2+m*(n-a)/2;if(_===0&&E===0)return[];o=Math.abs(o),s=Math.abs(s);var T=Math.pow(_,2)/Math.pow(o,2)+Math.pow(E,2)/Math.pow(s,2);T>1&&(o*=Math.sqrt(T),s*=Math.sqrt(T));var A=RE(t,n,i,a,o,s,h,v,p,m,_,E),w=PE(A,4),I=w[0],P=w[1],M=w[2],L=w[3],D=Math.abs(L)/(Io/4);Math.abs(1-D)<1e-7&&(D=1);var z=Math.max(Math.ceil(D),1);L/=z;for(var Q=0;Q<z;Q++)x.push(LE(M,L)),M+=L;return x.map(function(J){var Y=bf(J[0],o,s,m,p,I,P),re=Y.x,me=Y.y,ge=bf(J[1],o,s,m,p,I,P),ae=ge.x,Le=ge.y,Me=bf(J[2],o,s,m,p,I,P),fe=Me.x,V=Me.y;return{x1:re,y1:me,x2:ae,y2:Le,x:fe,y:V}})};const IE=Object.freeze(Object.defineProperty({__proto__:null,default:DE},Symbol.toStringTag,{value:"Module"})),OE=Ev(IE);var wf,D0;function FE(){if(D0)return wf;D0=1,wf=e;var l=OE;function e(i){for(var a,o=[],s=0,u=0,c=0,f=0,h=null,d=null,v=0,x=0,p=0,m=i.length;p<m;p++){var _=i[p],E=_[0];switch(E){case"M":c=_[1],f=_[2];break;case"A":var T=l({px:v,py:x,cx:_[6],cy:_[7],rx:_[1],ry:_[2],xAxisRotation:_[3],largeArcFlag:_[4],sweepFlag:_[5]});if(!T.length)continue;for(var A=0,w;A<T.length;A++)w=T[A],_=["C",w.x1,w.y1,w.x2,w.y2,w.x,w.y],A<T.length-1&&o.push(_);break;case"S":var I=v,P=x;(a=="C"||a=="S")&&(I+=I-s,P+=P-u),_=["C",I,P,_[1],_[2],_[3],_[4]];break;case"T":a=="Q"||a=="T"?(h=v*2-h,d=x*2-d):(h=v,d=x),_=n(v,x,h,d,_[1],_[2]);break;case"Q":h=_[1],d=_[2],_=n(v,x,_[1],_[2],_[3],_[4]);break;case"L":_=t(v,x,_[1],_[2]);break;case"H":_=t(v,x,_[1],x);break;case"V":_=t(v,x,v,_[1]);break;case"Z":_=t(v,x,c,f);break}a=E,v=_[_.length-2],x=_[_.length-1],_.length>4?(s=_[_.length-4],u=_[_.length-3]):(s=v,u=x),o.push(_)}return o}function t(i,a,o,s){return["C",i,a,o,s,o,s]}function n(i,a,o,s,u,c){return["C",i/3+2/3*o,a/3+2/3*s,u/3+2/3*o,c/3+2/3*s,u,c]}return wf}var nc={},Sf={exports:{}},I0;function rg(){return I0||(I0=1,function(l){var e=function(){function t(d,v){return v!=null&&d instanceof v}var n;try{n=Map}catch{n=function(){}}var i;try{i=Set}catch{i=function(){}}var a;try{a=Promise}catch{a=function(){}}function o(d,v,x,p,m){typeof v=="object"&&(x=v.depth,p=v.prototype,m=v.includeNonEnumerable,v=v.circular);var _=[],E=[],T=typeof Buffer<"u";typeof v>"u"&&(v=!0),typeof x>"u"&&(x=1/0);function A(w,I){if(w===null)return null;if(I===0)return w;var P,M;if(typeof w!="object")return w;if(t(w,n))P=new n;else if(t(w,i))P=new i;else if(t(w,a))P=new a(function(ge,ae){w.then(function(Le){ge(A(Le,I-1))},function(Le){ae(A(Le,I-1))})});else if(o.__isArray(w))P=[];else if(o.__isRegExp(w))P=new RegExp(w.source,h(w)),w.lastIndex&&(P.lastIndex=w.lastIndex);else if(o.__isDate(w))P=new Date(w.getTime());else{if(T&&Buffer.isBuffer(w))return Buffer.allocUnsafe?P=Buffer.allocUnsafe(w.length):P=new Buffer(w.length),w.copy(P),P;t(w,Error)?P=Object.create(w):typeof p>"u"?(M=Object.getPrototypeOf(w),P=Object.create(M)):(P=Object.create(p),M=p)}if(v){var L=_.indexOf(w);if(L!=-1)return E[L];_.push(w),E.push(P)}t(w,n)&&w.forEach(function(ge,ae){var Le=A(ae,I-1),Me=A(ge,I-1);P.set(Le,Me)}),t(w,i)&&w.forEach(function(ge){var ae=A(ge,I-1);P.add(ae)});for(var D in w){var z;M&&(z=Object.getOwnPropertyDescriptor(M,D)),!(z&&z.set==null)&&(P[D]=A(w[D],I-1))}if(Object.getOwnPropertySymbols)for(var Q=Object.getOwnPropertySymbols(w),D=0;D<Q.length;D++){var J=Q[D],Y=Object.getOwnPropertyDescriptor(w,J);Y&&!Y.enumerable&&!m||(P[J]=A(w[J],I-1),Y.enumerable||Object.defineProperty(P,J,{enumerable:!1}))}if(m)for(var re=Object.getOwnPropertyNames(w),D=0;D<re.length;D++){var me=re[D],Y=Object.getOwnPropertyDescriptor(w,me);Y&&Y.enumerable||(P[me]=A(w[me],I-1),Object.defineProperty(P,me,{enumerable:!1}))}return P}return A(d,x)}o.clonePrototype=function(v){if(v===null)return null;var x=function(){};return x.prototype=v,new x};function s(d){return Object.prototype.toString.call(d)}o.__objToStr=s;function u(d){return typeof d=="object"&&s(d)==="[object Date]"}o.__isDate=u;function c(d){return typeof d=="object"&&s(d)==="[object Array]"}o.__isArray=c;function f(d){return typeof d=="object"&&s(d)==="[object RegExp]"}o.__isRegExp=f;function h(d){var v="";return d.global&&(v+="g"),d.ignoreCase&&(v+="i"),d.multiline&&(v+="m"),v}return o.__getRegExpFlags=h,o}();l.exports&&(l.exports=e)}(Sf)),Sf.exports}var Mf={},O0;function ig(){if(O0)return Mf;O0=1,Mf.squaredDistance=l;function l(e,t){var n=t[0]-e[0],i=t[1]-e[1];return n*n+i*i}return Mf}var F0;function NE(){if(F0)return nc;F0=1;var l=rg(),e=ig().squaredDistance;nc.sort=function(i){if(i=l(i),!i.length)return i;var a=[];for(a.push(i[0]),i=i.slice(1);i.length;){var o=a[a.length-1],s=o[o.length-1],u=i.reduce(function(d,v,x){var p=v[0],m=v[v.length-1],_=e(s,p),E=e(s,m);return d?_<d.distance?{idx:x,distance:_,reverse:!1}:E<d.distance?{idx:x,distance:E,reverse:!0}:d:{idx:x,distance:Math.min(_,E),reverse:E<_}},null),c=u.idx,f=u.reverse,h=i.splice(c,1)[0].slice();f&&h.reverse(),a.push(h)}return a},nc.merge=function(i,a){a=a??.05;var o=a*a;i=l(i);for(var s=1;s<i.length;s++){var u=i[s-1],c=i[s];e(c[0],u[u.length-1])<o&&(i=t(i,s-1,s),s-=1)}return i};function t(n,i,a){var o=Math.min(i,a),s=Math.max(i,a);n=n.slice();var u=n[o],c=n[s],f=u.concat(c.slice(1));return n.splice(s,1),n.splice(o,1,f),n}return nc}var Ef={exports:{}},Tf,N0;function zE(){if(N0)return Tf;N0=1,Tf=l,l.polyline=l,l.polygon=e;function l(i,a,o){var s=i.length,u=n(i[0],a),c=[],f,h,d,v,x;for(o||(o=[]),f=1;f<s;f++){for(h=i[f-1],d=i[f],v=x=n(d,a);;)if(u|v){if(u&v)break;u?(h=t(h,d,u,a),u=n(h,a)):(d=t(h,d,v,a),v=n(d,a))}else{c.push(h),v!==x?(c.push(d),f<s-1&&(o.push(c),c=[])):f===s-1&&c.push(d);break}u=x}return c.length&&o.push(c),o}function e(i,a){var o,s,u,c,f,h,d;for(s=1;s<=8;s*=2){for(o=[],u=i[i.length-1],c=!(n(u,a)&s),f=0;f<i.length;f++)h=i[f],d=!(n(h,a)&s),d!==c&&o.push(t(u,h,s,a)),d&&o.push(h),u=h,c=d;if(i=o,!i.length)break}return o}function t(i,a,o,s){return o&8?[i[0]+(a[0]-i[0])*(s[3]-i[1])/(a[1]-i[1]),s[3]]:o&4?[i[0]+(a[0]-i[0])*(s[1]-i[1])/(a[1]-i[1]),s[1]]:o&2?[s[2],i[1]+(a[1]-i[1])*(s[2]-i[0])/(a[0]-i[0])]:o&1?[s[0],i[1]+(a[1]-i[1])*(s[0]-i[0])/(a[0]-i[0])]:null}function n(i,a){var o=0;return i[0]<a[0]?o|=1:i[0]>a[2]&&(o|=2),i[1]<a[1]?o|=4:i[1]>a[3]&&(o|=8),o}return Tf}var Af,z0;function Gh(){if(z0)return Af;z0=1;var l=Math.abs,e=Math.min;function t(n,i,a,o){var s=l(n-i);return a==null&&(a=t.DBL_EPSILON),o==null&&(o=a),s<=a||s<=o*e(l(n),l(i))?!0:n===i}return t.FLT_EPSILON=11920929e-14,t.DBL_EPSILON=2220446049250313e-31,Af=t,Af}var Cf,k0;function kE(){if(k0)return Cf;k0=1;var l=Object.prototype.toString;Cf=e;function e(t){return t.BYTES_PER_ELEMENT&&l.call(t.buffer)==="[object ArrayBuffer]"||Array.isArray(t)}return Cf}var Pf,B0;function BE(){if(B0)return Pf;B0=1;var l=Math.abs,e=Math.min;function t(n,i,a,o){var s=l(n-i);return s<=a||s<=o*e(l(n),l(i))?!0:n===i}return t.FLT_EPSILON=11920929e-14,t.DBL_EPSILON=2220446049250313e-31,Pf=t,Pf}var Lf,U0;function UE(){if(U0)return Lf;U0=1;var l=kE(),e=BE();return Lf=function(t,n,i,a){return!t||!n||!l(t)||!l(n)||t.length!==n.length?!1:(typeof i!="number"&&(i=e.FLT_EPSILON),typeof a!="number"&&(a=i),Array.prototype.slice.call(t).every(function(o,s){var u=n[s];return o===u||e(o,u,i,a)}))},Lf}var Rf,G0;function GE(){if(G0)return Rf;G0=1;var l=Gh();Rf=e;function e(c,f,h,d,v){return t(c[0],c[1],f[0],f[1],h[0],h[1],d,v)}function t(c,f,h,d,v,x,p,m){m==null&&(m=[]);var _=i(c,f,v,x,p),E=i(h,d,v,x,p);if(_&&E)return m.push([c,f]),m.push([h,d]),!0;var T,A,w,I,P;if(_||E){w=s(c,f,h,d,v,x),I=w[0],P=w[1],T=a(I,P,v,x),A=Math.sqrt(p*p-T*T);var M=_?[c,f]:[h,d],L=_?o(I,P,h,d,A):o(I,P,c,f,A);return l(M[0],L[0])&&l(M[1],L[1])?(m.push(M),!0):(m.push(M),m.push(L),!0)}return w=u(c,f,h,d,v,x),I=w[0],P=w[1],l(c,I)&&l(f,P)||l(h,I)&&l(d,P)?!1:(T=a(I,P,v,x),T>p?!1:l(T,p)?(m.push([I,P]),!0):l(T,0)?(m.push(o(v,x,c,f,p)),m.push(o(v,x,h,d,p)),!0):(A=Math.sqrt(p*p-T*T),m.push(o(I,P,c,f,A)),m.push(o(I,P,h,d,A)),!0))}function n(c,f,h,d){var v=h-c,x=d-f;return v*v+x*x}function i(c,f,h,d,v){return n(c,f,h,d)<=v*v}function a(c,f,h,d){var v=c-h,x=f-d;return Math.sqrt(v*v+x*x)}function o(c,f,h,d,v){var x=v/a(c,f,h,d);return[c+x*(h-c),f+x*(d-f)]}function s(c,f,h,d,v,x){var p=h-c,m=d-f,_=v-c,E=x-f,T=p*_+m*E,A=p*p+m*m,w=T/A;return[c+w*p,f+w*m]}function u(c,f,h,d,v,x){var p=h-c,m=d-f,_=v-c,E=x-f,T=p*_+m*E;if(T<=0)return[c,f];var A=p*p+m*m;if(A<=T)return[h,d];var w=T/A;return[c+w*p,f+w*m]}return Rf}var Df,V0;function VE(){if(V0)return Df;V0=1;var l=Gh();Df=e;function e(n,i,a,o,s){s==null&&(s=[]);var u=t(i[0]-n[0])+t(i[1]-n[1]),c=2*((i[0]-n[0])*(n[0]-a[0])+(i[1]-n[1])*(n[1]-a[1])),f=t(a[0])+t(a[1])+t(n[0])+t(n[1])-2*(a[0]*n[0]+a[1]*n[1])-t(o),h=c*c-4*u*f,d;if(h<0)return!1;if(l(h,0))return d=-c/(2*u),s.push([n[0]+d*(i[0]-n[0]),n[1]+d*(i[1]-n[1])]),!0;if(h>0){var v=Math.sqrt(h);return d=(-c+v)/(2*u),s.push([n[0]+d*(i[0]-n[0]),n[1]+d*(i[1]-n[1])]),d=(-c-v)/(2*u),s.push([n[0]+d*(i[0]-n[0]),n[1]+d*(i[1]-n[1])]),!0}return null}function t(n){return n*n}return Df}var H0;function ag(){return H0||(H0=1,function(l){var e=zE(),t=Gh(),n=UE(),i=rg(),a=ig().squaredDistance;l.exports.arePointsCollinear=function(s,u,c){var f=s[0],h=s[1],d=u[0],v=u[1],x=c[0],p=c[1];return t((h-v)*(f-x),(h-p)*(f-d))},l.exports.removeDuplicatePoints=function(s){for(var u=[],c,f=0;f<s.length;f++){var h=s[f];(!c||!n(c,h))&&(u.push(h),c=h)}return i(u)},l.exports.removeCollinearPoints=function(s){for(var u=[],c=i(s);c.length>=3;){var f=c[0],h=c[1],d=c[2],v=l.exports.arePointsCollinear(f,h,d);if(v){var x=a(f,h),p=a(f,d);x>p&&(v=!1)}if(v)c.splice(1,1);else for(var m=0;m<1;m++)u.push(c.shift())}for(;c.length;)u.push(c.shift());return u},l.exports.clipSegmentToCircle=GE(),l.exports.clipLineToCircle=VE(),l.exports.clipPolylinesToBox=function(s,u,c,f){if(!Array.isArray(u)||u.length!==2&&u.length!==4)throw new Error("Expected box to either be format [ minPoint, maxPoint ] or [ minX, minY, maxX, maxY ]");if(u.length===2){var h=u[0],d=u[1];u=[h[0],h[1],d[0],d[1]]}return f=f!==!1,c=!!c,c?s.map(function(v){var x=e.polygon(v,u);return f&&x.length>2&&x.push(x[0]),x}).filter(function(v){return v.length>0}):s.map(function(v){return e.polyline(v,u)}).reduce(function(v,x){return v.concat(x)},[])},l.exports.createHatchLines=o;function o(s,u,c,f){if(!Array.isArray(s)||s.length!==2&&s.length!==4)throw new Error("Expected box to either be format [ minPoint, maxPoint ] or [ minX, minY, maxX, maxY ]");if(s.length===2){var h=s[0],d=s[1];s=[h[0],h[1],d[0],d[1]]}if(u==null&&(u=-Math.PI/4),c==null&&(c=.5),f==null&&(f=[]),c=Math.abs(c),c===0)throw new Error("cannot use a spacing of zero as it will run an infinite loop!");var v=s[0],x=s[1],p=s[2],m=s[3],_=p-v,E=m-x;if(_===0||E===0)return f;for(var T=Math.sqrt(_*_+E*E)/2,A=Math.PI/2-u,w=Math.cos(A),I=Math.sin(A),P=v+_/2,M=x+E/2,L=-T;L<=T;){var D=P+L*w+T*I,z=M+L*I-T*w,Q=P+L*w-T*I,J=M+L*I+T*w;L+=c,!(D<v&&Q<v||D>p&&Q>p)&&(z<x&&J<x||z>m&&J>m||f.push([[D,z],[Q,J]]))}return f}l.exports.getBounds=function(u){var c=u.length;if(c===0)throw new Error("Expected points to be a non-empty array");for(var f=u[0].length,h=u[0].slice(),d=u[0].slice(),v=1;v<c;++v)for(var x=u[v],p=0;p<f;++p){var m=x[p];h[p]=Math.min(h[p],m),d[p]=Math.max(d[p],m)}return[h,d]}}(Ef)),Ef.exports}var W0;function HE(){if(W0)return zr;W0=1;var l=Jo(),e=xE(),t=wE,n=AE(),i=CE(),a=ng(),o=FE(),s=NE(),u=ag(),c=.03,f="cm",h=90;zr.createPath=d;function d(D){var z=t.path();return typeof D=="function"&&D(z),z.lineTo=Q(z.lineTo),z.quadraticCurveTo=Q(z.quadraticCurveTo),z.bezierCurveTo=Q(z.bezierCurveTo),z;function Q(J){return function(){var Y=Array.prototype.slice.call(arguments);return z._x1==null&&z._y1==null&&z.moveTo(Y[0],Y[1]),J.apply(z,Y)}}}zr.pathsToSVGPaths=v;function v(D,z){z=z||{};var Q=E(D,z),J=Array.isArray(Q)?Q:[Q];return J.filter(Boolean)}zr.pathsToPolylines=x;function x(D,z){z=z||{};var Q;if(z.curveResolution!=null&&isFinite(z.curveResolution)&&typeof z.curveResolution=="number")Q=z.curveResolution;else{var J=z.units||"px";Q=Math.max(1,e(4,J,"px"))}var Y=[];return T(D,function(re){if(typeof re=="string"){var me=i(re),ge=n(me,Q);ge.forEach(function(Le){Y.push(Le)})}else{var ae=re.map(function(Le){return[Le[0]||0,Le[1]||0]});Y.push(ae)}}),Y}zr.pathsToSVG=p;function p(D,z){z=z||{};var Q=z.width,J=z.height,Y=typeof Q>"u"||typeof J>"u";if(Y)throw new Error('Must specify "width" and "height" options');var re="px",me=z.units||re,ge={units:me,viewUnits:"px",roundPixel:!1,precision:l(z.precision,5),pixelsPerInch:h};if(D=x(D,Object.assign({},ge,{curveResolution:z.curveResolution||void 0})),z.optimize){var ae=typeof z.optimize=="object"?z.optimize:{sort:!0,merge:!0,removeDuplicates:!0,removeCollinear:!0},Le=ae.sort!==!1,Me=ae.merge!==!1,fe=ae.removeDuplicates!==!1,V=ae.removeCollinear!==!1;if(fe&&(D=D.map(function($e){return u.removeDuplicatePoints($e)})),V&&(D=D.map(function($e){return u.removeCollinearPoints($e)})),Le&&(D=s.sort(D)),Me){var le=ae.mergeThreshold!=null?ae.mergeThreshold:e(.25,"mm",me,{pixelsPerInch:h});D=s.merge(D,le)}}var de=v(D,ge),Fe=e(Q,me,re,ge).toString(),Se=e(J,me,re,ge).toString(),It=z.fillStyle||"none",_t=z.strokeStyle||"black",Dt=z.lineWidth,bt=z.lineJoin,ye=z.lineCap;typeof Dt>"u"&&(Dt=e(c,f,me,ge).toString());var qe=de.map(function($e){var Je=m([["d",$e]]);return"    <path "+Je+" />"}).join(`
`),Ce=m([["fill",It],["stroke",_t],["stroke-width",Dt+""+me],bt?["stroke-linejoin",bt]:!1,ye?["stroke-linecap",ye]:!1]);return['<?xml version="1.0" standalone="no"?>','<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ','    "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">','<svg width="'+Q+me+'" height="'+J+me+'"','    xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 '+Fe+" "+Se+'">',"  <g "+Ce+">",qe,"  </g>","</svg>"].join(`
`)}function m(D){return D.filter(Boolean).map(function(z){return z[0]+'="'+z[1]+'"'}).join(" ")}zr.renderPaths=_;function _(D,z){z=z||{};var Q=z.context;if(!Q)throw new Error('Must specify "context" options');var J=z.units||"px",Y=z.width,re=z.height;if(typeof Y>"u"||typeof re>"u")throw new Error('Must specify "width" and "height" options');var me=z.lineWidth;return typeof me>"u"&&(me=e(c,f,J,{roundPixel:!1,pixelsPerInch:h})),Q.clearRect(0,0,Y,re),Q.fillStyle=z.background||"white",Q.fillRect(0,0,Y,re),Q.strokeStyle=z.foreground||z.strokeStyle||"black",Q.lineWidth=me,Q.lineJoin=z.lineJoin||"miter",Q.lineCap=z.lineCap||"butt",T(D,function(ge){Q.beginPath(),typeof ge=="string"?A(Q,ge):ge.forEach(function(ae){Q.lineTo(ae[0],ae[1])}),Q.stroke()}),[Q.canvas,{data:p(D,z),extension:".svg"}]}zr.convertToSVGPath=E;function E(D,z){return I(D)?"":typeof D=="string"?D:P(D)?D.toString():M(D)?w(D,z):Array.isArray(D)?D.map(function(Q){return E(Q,z)}).reduce(function(Q,J){return Q.concat(J)},[]):""}zr.eachPath=T;function T(D,z){I(D)||(typeof D=="string"||P(D)?z(D.toString()):M(D)?z(D):Array.isArray(D)&&D.forEach(function(Q){return T(Q,z)}))}zr.drawSVGPath=A;function A(D,z){for(var Q=o(a(i(z))),J=0;J<Q.length;J++){var Y=Q[J],re=Y[0];if(re==="M")D.moveTo(Y[1],Y[2]);else if(re==="C")D.bezierCurveTo(Y[1],Y[2],Y[3],Y[4],Y[5],Y[6]);else throw new Error('Illegal type "'+re+'" in SVG commands')}}zr.polylineToSVGPath=w;function w(D,z){z=z||{};var Q=z.units||"px",J=z.viewUnits||Q,Y=[],re={roundPixel:!1,precision:l(z.precision,5),pixelsPerInch:h};return D.forEach(function(me,ge){var ae=ge===0?"M":"L",Le=e(me[0],Q,J,re).toString(),Me=e(me[1],Q,J,re).toString();Y.push(ae+Le+" "+Me)}),Y.join(" ")}function I(D){return!D||Array.isArray(D)&&D.length===0}function P(D){return typeof D=="object"&&D&&!Array.isArray(D)}function M(D){return!D||!Array.isArray(D)||D.length===0?!1:L(D[0])}function L(D){return Array.isArray(D)&&D.length>=2&&D.every(function(z){return typeof z=="number"})}return zr.polylinesToSVG=function(z,Q){if(!Array.isArray(z))throw new Error("Expected array of arrays for polylines");return console.warn("polylinesToSVG is deprecated, use pathsToSVG instead which has the same functionality"),p(z,Q)},zr.renderPolylines=function(z,Q){if(!Array.isArray(z))throw new Error("Expected array of arrays for polylines");return console.warn("renderPolylines is deprecated, use renderPaths instead which has the same functionality"),_(z,Q)},zr}var uc={exports:{}},WE=uc.exports,q0;function qE(){return q0||(q0=1,function(l,e){(function(t,n){l.exports=n()})(WE,function(){var t=function(S){return S instanceof Uint8Array||S instanceof Uint16Array||S instanceof Uint32Array||S instanceof Int8Array||S instanceof Int16Array||S instanceof Int32Array||S instanceof Float32Array||S instanceof Float64Array||S instanceof Uint8ClampedArray},n=function(S,O){for(var H=Object.keys(O),be=0;be<H.length;++be)S[H[be]]=O[H[be]];return S},i=`
`;function a(S){return typeof atob<"u"?atob(S):"base64:"+S}function o(S){var O=new Error("(regl) "+S);throw console.error(O),O}function s(S,O){S||o(O)}function u(S){return S?": "+S:""}function c(S,O,H){S in O||o("unknown parameter ("+S+")"+u(H)+". possible values: "+Object.keys(O).join())}function f(S,O){t(S)||o("invalid parameter type"+u(O)+". must be a typed array")}function h(S,O){switch(O){case"number":return typeof S=="number";case"object":return typeof S=="object";case"string":return typeof S=="string";case"boolean":return typeof S=="boolean";case"function":return typeof S=="function";case"undefined":return typeof S>"u";case"symbol":return typeof S=="symbol"}}function d(S,O,H){h(S,O)||o("invalid parameter type"+u(H)+". expected "+O+", got "+typeof S)}function v(S,O){S>=0&&(S|0)===S||o("invalid parameter type, ("+S+")"+u(O)+". must be a nonnegative integer")}function x(S,O,H){O.indexOf(S)<0&&o("invalid value"+u(H)+". must be one of: "+O)}var p=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function m(S){Object.keys(S).forEach(function(O){p.indexOf(O)<0&&o('invalid regl constructor argument "'+O+'". must be one of '+p)})}function _(S,O){for(S=S+"";S.length<O;)S=" "+S;return S}function E(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function T(S,O){this.number=S,this.line=O,this.errors=[]}function A(S,O,H){this.file=S,this.line=O,this.message=H}function w(){var S=new Error,O=(S.stack||S).toString(),H=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(O);if(H)return H[1];var be=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(O);return be?be[1]:"unknown"}function I(){var S=new Error,O=(S.stack||S).toString(),H=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(O);if(H)return H[1];var be=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(O);return be?be[1]:"unknown"}function P(S,O){var H=S.split(`
`),be=1,Ne=0,xe={unknown:new E,0:new E};xe.unknown.name=xe[0].name=O||w(),xe.unknown.lines.push(new T(0,""));for(var Ee=0;Ee<H.length;++Ee){var Ye=H[Ee],Ke=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec(Ye);if(Ke)switch(Ke[1]){case"line":var it=/(\d+)(\s+\d+)?/.exec(Ke[2]);it&&(be=it[1]|0,it[2]&&(Ne=it[2]|0,Ne in xe||(xe[Ne]=new E)));break;case"define":var Qe=/SHADER_NAME(_B64)?\s+(.*)$/.exec(Ke[2]);Qe&&(xe[Ne].name=Qe[1]?a(Qe[2]):Qe[2]);break}xe[Ne].lines.push(new T(be++,Ye))}return Object.keys(xe).forEach(function(st){var dt=xe[st];dt.lines.forEach(function(Ze){dt.index[Ze.number]=Ze})}),xe}function M(S){var O=[];return S.split(`
`).forEach(function(H){if(!(H.length<5)){var be=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(H);be?O.push(new A(be[1]|0,be[2]|0,be[3].trim())):H.length>0&&O.push(new A("unknown",0,H))}}),O}function L(S,O){O.forEach(function(H){var be=S[H.file];if(be){var Ne=be.index[H.line];if(Ne){Ne.errors.push(H),be.hasErrors=!0;return}}S.unknown.hasErrors=!0,S.unknown.lines[0].errors.push(H)})}function D(S,O,H,be,Ne){if(!S.getShaderParameter(O,S.COMPILE_STATUS)){var xe=S.getShaderInfoLog(O),Ee=be===S.FRAGMENT_SHADER?"fragment":"vertex";ge(H,"string",Ee+" shader source must be a string",Ne);var Ye=P(H,Ne),Ke=M(xe);L(Ye,Ke),Object.keys(Ye).forEach(function(it){var Qe=Ye[it];if(!Qe.hasErrors)return;var st=[""],dt=[""];function Ze(ot,oe){st.push(ot),dt.push(oe||"")}Ze("file number "+it+": "+Qe.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),Qe.lines.forEach(function(ot){if(ot.errors.length>0){Ze(_(ot.number,4)+"|  ","background-color:yellow; font-weight:bold"),Ze(ot.line+i,"color:red; background-color:yellow; font-weight:bold");var oe=0;ot.errors.forEach(function(Te){var nt=Te.message,vt=/^\s*'(.*)'\s*:\s*(.*)$/.exec(nt);if(vt){var Ge=vt[1];switch(nt=vt[2],Ge){case"assign":Ge="=";break}oe=Math.max(ot.line.indexOf(Ge,oe),0)}else oe=0;Ze(_("| ",6)),Ze(_("^^^",oe+3)+i,"font-weight:bold"),Ze(_("| ",6)),Ze(nt+i,"font-weight:bold")}),Ze(_("| ",6)+i)}else Ze(_(ot.number,4)+"|  "),Ze(ot.line+i,"color:red")}),typeof document<"u"&&!window.chrome?(dt[0]=st.join("%c"),console.log.apply(console,dt)):console.log(st.join(""))}),s.raise("Error compiling "+Ee+" shader, "+Ye[0].name)}}function z(S,O,H,be,Ne){if(!S.getProgramParameter(O,S.LINK_STATUS)){var xe=S.getProgramInfoLog(O),Ee=P(H,Ne),Ye=P(be,Ne),Ke='Error linking program with vertex shader, "'+Ye[0].name+'", and fragment shader "'+Ee[0].name+'"';typeof document<"u"?console.log("%c"+Ke+i+"%c"+xe,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log(Ke+i+xe),s.raise(Ke)}}function Q(S){S._commandRef=w()}function J(S,O,H,be){Q(S);function Ne(Ke){return Ke?be.id(Ke):0}S._fragId=Ne(S.static.frag),S._vertId=Ne(S.static.vert);function xe(Ke,it){Object.keys(it).forEach(function(Qe){Ke[be.id(Qe)]=!0})}var Ee=S._uniformSet={};xe(Ee,O.static),xe(Ee,O.dynamic);var Ye=S._attributeSet={};xe(Ye,H.static),xe(Ye,H.dynamic),S._hasCount="count"in S.static||"count"in S.dynamic||"elements"in S.static||"elements"in S.dynamic}function Y(S,O){var H=I();o(S+" in command "+(O||w())+(H==="unknown"?"":" called from "+H))}function re(S,O,H){S||Y(O,H||w())}function me(S,O,H,be){S in O||Y("unknown parameter ("+S+")"+u(H)+". possible values: "+Object.keys(O).join(),be||w())}function ge(S,O,H,be){h(S,O)||Y("invalid parameter type"+u(H)+". expected "+O+", got "+typeof S,be||w())}function ae(S){S()}function Le(S,O,H){S.texture?x(S.texture._texture.internalformat,O,"unsupported texture format for attachment"):x(S.renderbuffer._renderbuffer.format,H,"unsupported renderbuffer format for attachment")}var Me=33071,fe=9728,V=9984,le=9985,de=9986,Fe=9987,Se=5120,It=5121,_t=5122,Dt=5123,bt=5124,ye=5125,qe=5126,Ce=32819,$e=32820,Je=33635,Ve=34042,ft=36193,ht={};ht[Se]=ht[It]=1,ht[_t]=ht[Dt]=ht[ft]=ht[Je]=ht[Ce]=ht[$e]=2,ht[bt]=ht[ye]=ht[qe]=ht[Ve]=4;function St(S,O){return S===$e||S===Ce||S===Je?2:S===Ve?4:ht[S]*O}function pn(S){return!(S&S-1)&&!!S}function Sn(S,O,H){var be,Ne=O.width,xe=O.height,Ee=O.channels;s(Ne>0&&Ne<=H.maxTextureSize&&xe>0&&xe<=H.maxTextureSize,"invalid texture shape"),(S.wrapS!==Me||S.wrapT!==Me)&&s(pn(Ne)&&pn(xe),"incompatible wrap mode for texture, both width and height must be power of 2"),O.mipmask===1?Ne!==1&&xe!==1&&s(S.minFilter!==V&&S.minFilter!==de&&S.minFilter!==le&&S.minFilter!==Fe,"min filter requires mipmap"):(s(pn(Ne)&&pn(xe),"texture must be a square power of 2 to support mipmapping"),s(O.mipmask===(Ne<<1)-1,"missing or incomplete mipmap data")),O.type===qe&&(H.extensions.indexOf("oes_texture_float_linear")<0&&s(S.minFilter===fe&&S.magFilter===fe,"filter not supported, must enable oes_texture_float_linear"),s(!S.genMipmaps,"mipmap generation not supported with float textures"));var Ye=O.images;for(be=0;be<16;++be)if(Ye[be]){var Ke=Ne>>be,it=xe>>be;s(O.mipmask&1<<be,"missing mipmap data");var Qe=Ye[be];if(s(Qe.width===Ke&&Qe.height===it,"invalid shape for mip images"),s(Qe.format===O.format&&Qe.internalformat===O.internalformat&&Qe.type===O.type,"incompatible type for mip image"),!Qe.compressed)if(Qe.data){var st=Math.ceil(St(Qe.type,Ee)*Ke/Qe.unpackAlignment)*Qe.unpackAlignment;s(Qe.data.byteLength===st*it,"invalid data for image, buffer size is inconsistent with image format")}else Qe.element||Qe.copy}else S.genMipmaps||s((O.mipmask&1<<be)===0,"extra mipmap data");O.compressed&&s(!S.genMipmaps,"mipmap generation for compressed images not supported")}function W(S,O,H,be){var Ne=S.width,xe=S.height,Ee=S.channels;s(Ne>0&&Ne<=be.maxTextureSize&&xe>0&&xe<=be.maxTextureSize,"invalid texture shape"),s(Ne===xe,"cube map must be square"),s(O.wrapS===Me&&O.wrapT===Me,"wrap mode not supported by cube map");for(var Ye=0;Ye<H.length;++Ye){var Ke=H[Ye];s(Ke.width===Ne&&Ke.height===xe,"inconsistent cube map face shape"),O.genMipmaps&&(s(!Ke.compressed,"can not generate mipmap for compressed textures"),s(Ke.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var it=Ke.images,Qe=0;Qe<16;++Qe){var st=it[Qe];if(st){var dt=Ne>>Qe,Ze=xe>>Qe;s(Ke.mipmask&1<<Qe,"missing mipmap data"),s(st.width===dt&&st.height===Ze,"invalid shape for mip images"),s(st.format===S.format&&st.internalformat===S.internalformat&&st.type===S.type,"incompatible type for mip image"),st.compressed||(st.data?s(st.data.byteLength===dt*Ze*Math.max(St(st.type,Ee),st.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):st.element||st.copy)}}}}var y=n(s,{optional:ae,raise:o,commandRaise:Y,command:re,parameter:c,commandParameter:me,constructor:m,type:d,commandType:ge,isTypedArray:f,nni:v,oneOf:x,shaderError:D,linkError:z,callSite:I,saveCommandRef:Q,saveDrawInfo:J,framebufferFormat:Le,guessCommand:w,texture2D:Sn,textureCube:W}),ke=0,mt=0,gt=5,Pt=6;function Gt(S,O){this.id=ke++,this.type=S,this.data=O}function Z(S){return S.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function _e(S){if(S.length===0)return[];var O=S.charAt(0),H=S.charAt(S.length-1);if(S.length>1&&O===H&&(O==='"'||O==="'"))return['"'+Z(S.substr(1,S.length-2))+'"'];var be=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(S);if(be)return _e(S.substr(0,be.index)).concat(_e(be[1])).concat(_e(S.substr(be.index+be[0].length)));var Ne=S.split(".");if(Ne.length===1)return['"'+Z(S)+'"'];for(var xe=[],Ee=0;Ee<Ne.length;++Ee)xe=xe.concat(_e(Ne[Ee]));return xe}function Lt(S){return"["+_e(S).join("][")+"]"}function rt(S,O){return new Gt(S,Lt(O+""))}function Mt(S){return typeof S=="function"&&!S._reglType||S instanceof Gt}function Ot(S,O){if(typeof S=="function")return new Gt(mt,S);if(typeof S=="number"||typeof S=="boolean")return new Gt(gt,S);if(Array.isArray(S))return new Gt(Pt,S.map((H,be)=>Ot(H,O+"["+be+"]")));if(S instanceof Gt)return S;y(!1,"invalid option type in uniform "+O)}var Tt={DynamicVariable:Gt,define:rt,isDynamic:Mt,unbox:Ot,accessor:Lt},Qt={next:typeof requestAnimationFrame=="function"?function(S){return requestAnimationFrame(S)}:function(S){return setTimeout(S,16)},cancel:typeof cancelAnimationFrame=="function"?function(S){return cancelAnimationFrame(S)}:clearTimeout},an=typeof performance<"u"&&performance.now?function(){return performance.now()}:function(){return+new Date};function xn(){var S={"":0},O=[""];return{id:function(H){var be=S[H];return be||(be=S[H]=O.length,O.push(H),be)},str:function(H){return O[H]}}}function se(S,O,H){var be=document.createElement("canvas");n(be.style,{border:0,margin:0,padding:0,top:0,left:0}),S.appendChild(be),S===document.body&&(be.style.position="absolute",n(S.style,{margin:0,padding:0}));function Ne(){var Ye=window.innerWidth,Ke=window.innerHeight;if(S!==document.body){var it=S.getBoundingClientRect();Ye=it.right-it.left,Ke=it.bottom-it.top}be.width=H*Ye,be.height=H*Ke,n(be.style,{width:Ye+"px",height:Ke+"px"})}var xe;S!==document.body&&typeof ResizeObserver=="function"?(xe=new ResizeObserver(function(){setTimeout(Ne)}),xe.observe(S)):window.addEventListener("resize",Ne,!1);function Ee(){xe?xe.disconnect():window.removeEventListener("resize",Ne),S.removeChild(be)}return Ne(),{canvas:be,onDestroy:Ee}}function Be(S,O){function H(be){try{return S.getContext(be,O)}catch{return null}}return H("webgl")||H("experimental-webgl")||H("webgl-experimental")}function F(S){return typeof S.nodeName=="string"&&typeof S.appendChild=="function"&&typeof S.getBoundingClientRect=="function"}function C(S){return typeof S.drawArrays=="function"||typeof S.drawElements=="function"}function q(S){return typeof S=="string"?S.split():(y(Array.isArray(S),"invalid extension array"),S)}function ne(S){return typeof S=="string"?(y(typeof document<"u","not supported outside of DOM"),document.querySelector(S)):S}function De(S){var O=S||{},H,be,Ne,xe,Ee={},Ye=[],Ke=[],it=typeof window>"u"?1:window.devicePixelRatio,Qe=!1,st=function(ot){ot&&y.raise(ot)},dt=function(){};if(typeof O=="string"?(y(typeof document<"u","selector queries only supported in DOM enviroments"),H=document.querySelector(O),y(H,"invalid query string for element")):typeof O=="object"?F(O)?H=O:C(O)?(xe=O,Ne=xe.canvas):(y.constructor(O),"gl"in O?xe=O.gl:"canvas"in O?Ne=ne(O.canvas):"container"in O&&(be=ne(O.container)),"attributes"in O&&(Ee=O.attributes,y.type(Ee,"object","invalid context attributes")),"extensions"in O&&(Ye=q(O.extensions)),"optionalExtensions"in O&&(Ke=q(O.optionalExtensions)),"onDone"in O&&(y.type(O.onDone,"function","invalid or missing onDone callback"),st=O.onDone),"profile"in O&&(Qe=!!O.profile),"pixelRatio"in O&&(it=+O.pixelRatio,y(it>0,"invalid pixel ratio"))):y.raise("invalid arguments to regl"),H&&(H.nodeName.toLowerCase()==="canvas"?Ne=H:be=H),!xe){if(!Ne){y(typeof document<"u","must manually specify webgl context outside of DOM environments");var Ze=se(be||document.body,st,it);if(!Ze)return null;Ne=Ze.canvas,dt=Ze.onDestroy}Ee.premultipliedAlpha===void 0&&(Ee.premultipliedAlpha=!0),xe=Be(Ne,Ee)}return xe?{gl:xe,canvas:Ne,container:be,extensions:Ye,optionalExtensions:Ke,pixelRatio:it,profile:Qe,onDone:st,onDestroy:dt}:(dt(),st("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function Re(S,O){var H={};function be(Ee){y.type(Ee,"string","extension name must be string");var Ye=Ee.toLowerCase(),Ke;try{Ke=H[Ye]=S.getExtension(Ye)}catch{}return!!Ke}for(var Ne=0;Ne<O.extensions.length;++Ne){var xe=O.extensions[Ne];if(!be(xe))return O.onDestroy(),O.onDone('"'+xe+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return O.optionalExtensions.forEach(be),{extensions:H,restore:function(){Object.keys(H).forEach(function(Ee){if(H[Ee]&&!be(Ee))throw new Error("(regl): error restoring extension "+Ee)})}}}function Xe(S,O){for(var H=Array(S),be=0;be<S;++be)H[be]=O(be);return H}var tt=5120,ut=5121,xt=5122,Nt=5123,Et=5124,un=5125,mn=5126;function U(S){for(var O=16;O<=1<<28;O*=16)if(S<=O)return O;return 0}function ve(S){var O,H;return O=(S>65535)<<4,S>>>=O,H=(S>255)<<3,S>>>=H,O|=H,H=(S>15)<<2,S>>>=H,O|=H,H=(S>3)<<1,S>>>=H,O|=H,O|S>>1}function Oe(){var S=Xe(8,function(){return[]});function O(xe){var Ee=U(xe),Ye=S[ve(Ee)>>2];return Ye.length>0?Ye.pop():new ArrayBuffer(Ee)}function H(xe){S[ve(xe.byteLength)>>2].push(xe)}function be(xe,Ee){var Ye=null;switch(xe){case tt:Ye=new Int8Array(O(Ee),0,Ee);break;case ut:Ye=new Uint8Array(O(Ee),0,Ee);break;case xt:Ye=new Int16Array(O(2*Ee),0,Ee);break;case Nt:Ye=new Uint16Array(O(2*Ee),0,Ee);break;case Et:Ye=new Int32Array(O(4*Ee),0,Ee);break;case un:Ye=new Uint32Array(O(4*Ee),0,Ee);break;case mn:Ye=new Float32Array(O(4*Ee),0,Ee);break;default:return null}return Ye.length!==Ee?Ye.subarray(0,Ee):Ye}function Ne(xe){H(xe.buffer)}return{alloc:O,free:H,allocType:be,freeType:Ne}}var ce=Oe();ce.zero=Oe();var je=3408,Ft=3410,qt=3411,jt=3412,en=3413,fn=3414,cn=3415,on=33901,wn=33902,Xn=3379,lr=3386,cr=34921,En=36347,hn=36348,Ti=35661,Nn=35660,$r=34930,ha=36349,di=34076,da=34024,Qn=7936,ni=7937,pa=7938,gr=35724,to=34047,Lc=36063,tl=34852,nl=3553,od=34067,f_=34069,h_=33984,no=6408,Rc=5126,ld=5121,Dc=36160,d_=36053,p_=36064,m_=16384,v_=function(S,O){var H=1;O.ext_texture_filter_anisotropic&&(H=S.getParameter(to));var be=1,Ne=1;O.webgl_draw_buffers&&(be=S.getParameter(tl),Ne=S.getParameter(Lc));var xe=!!O.oes_texture_float;if(xe){var Ee=S.createTexture();S.bindTexture(nl,Ee),S.texImage2D(nl,0,no,1,1,0,no,Rc,null);var Ye=S.createFramebuffer();if(S.bindFramebuffer(Dc,Ye),S.framebufferTexture2D(Dc,p_,nl,Ee,0),S.bindTexture(nl,null),S.checkFramebufferStatus(Dc)!==d_)xe=!1;else{S.viewport(0,0,1,1),S.clearColor(1,0,0,1),S.clear(m_);var Ke=ce.allocType(Rc,4);S.readPixels(0,0,1,1,no,Rc,Ke),S.getError()?xe=!1:(S.deleteFramebuffer(Ye),S.deleteTexture(Ee),xe=Ke[0]===1),ce.freeType(Ke)}}var it=typeof navigator<"u"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),Qe=!0;if(!it){var st=S.createTexture(),dt=ce.allocType(ld,36);S.activeTexture(h_),S.bindTexture(od,st),S.texImage2D(f_,0,no,3,3,0,no,ld,dt),ce.freeType(dt),S.bindTexture(od,null),S.deleteTexture(st),Qe=!S.getError()}return{colorBits:[S.getParameter(Ft),S.getParameter(qt),S.getParameter(jt),S.getParameter(en)],depthBits:S.getParameter(fn),stencilBits:S.getParameter(cn),subpixelBits:S.getParameter(je),extensions:Object.keys(O).filter(function(Ze){return!!O[Ze]}),maxAnisotropic:H,maxDrawbuffers:be,maxColorAttachments:Ne,pointSizeDims:S.getParameter(on),lineWidthDims:S.getParameter(wn),maxViewportDims:S.getParameter(lr),maxCombinedTextureUnits:S.getParameter(Ti),maxCubeMapSize:S.getParameter(di),maxRenderbufferSize:S.getParameter(da),maxTextureUnits:S.getParameter($r),maxTextureSize:S.getParameter(Xn),maxAttributes:S.getParameter(cr),maxVertexUniforms:S.getParameter(En),maxVertexTextureUnits:S.getParameter(Nn),maxVaryingVectors:S.getParameter(hn),maxFragmentUniforms:S.getParameter(ha),glsl:S.getParameter(gr),renderer:S.getParameter(ni),vendor:S.getParameter(Qn),version:S.getParameter(pa),readFloat:xe,npotTextureCube:Qe}};function ri(S){return!!S&&typeof S=="object"&&Array.isArray(S.shape)&&Array.isArray(S.stride)&&typeof S.offset=="number"&&S.shape.length===S.stride.length&&(Array.isArray(S.data)||t(S.data))}var Ir=function(S){return Object.keys(S).map(function(O){return S[O]})},rl={shape:y_,flatten:x_};function g_(S,O,H){for(var be=0;be<O;++be)H[be]=S[be]}function __(S,O,H,be){for(var Ne=0,xe=0;xe<O;++xe)for(var Ee=S[xe],Ye=0;Ye<H;++Ye)be[Ne++]=Ee[Ye]}function cd(S,O,H,be,Ne,xe){for(var Ee=xe,Ye=0;Ye<O;++Ye)for(var Ke=S[Ye],it=0;it<H;++it)for(var Qe=Ke[it],st=0;st<be;++st)Ne[Ee++]=Qe[st]}function ud(S,O,H,be,Ne){for(var xe=1,Ee=H+1;Ee<O.length;++Ee)xe*=O[Ee];var Ye=O[H];if(O.length-H===4){var Ke=O[H+1],it=O[H+2],Qe=O[H+3];for(Ee=0;Ee<Ye;++Ee)cd(S[Ee],Ke,it,Qe,be,Ne),Ne+=xe}else for(Ee=0;Ee<Ye;++Ee)ud(S[Ee],O,H+1,be,Ne),Ne+=xe}function x_(S,O,H,be){var Ne=1;if(O.length)for(var xe=0;xe<O.length;++xe)Ne*=O[xe];else Ne=0;var Ee=be||ce.allocType(H,Ne);switch(O.length){case 0:break;case 1:g_(S,O[0],Ee);break;case 2:__(S,O[0],O[1],Ee);break;case 3:cd(S,O[0],O[1],O[2],Ee,0);break;default:ud(S,O,0,Ee,0)}return Ee}function y_(S){for(var O=[],H=S;H.length;H=H[0])O.push(H.length);return O}var Ic={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},b_=5120,w_=5122,S_=5124,M_=5121,E_=5123,T_=5125,A_=5126,C_=5126,ma={int8:b_,int16:w_,int32:S_,uint8:M_,uint16:E_,uint32:T_,float:A_,float32:C_},P_=35048,L_=35040,il={dynamic:P_,stream:L_,static:35044},Oc=rl.flatten,fd=rl.shape,hd=35044,R_=35040,Fc=5121,Nc=5126,Wi=[];Wi[5120]=1,Wi[5122]=2,Wi[5124]=4,Wi[5121]=1,Wi[5123]=2,Wi[5125]=4,Wi[5126]=4;function al(S){return Ic[Object.prototype.toString.call(S)]|0}function dd(S,O){for(var H=0;H<O.length;++H)S[H]=O[H]}function pd(S,O,H,be,Ne,xe,Ee){for(var Ye=0,Ke=0;Ke<H;++Ke)for(var it=0;it<be;++it)S[Ye++]=O[Ne*Ke+xe*it+Ee]}function D_(S,O,H,be){var Ne=0,xe={};function Ee(oe){this.id=Ne++,this.buffer=S.createBuffer(),this.type=oe,this.usage=hd,this.byteLength=0,this.dimension=1,this.dtype=Fc,this.persistentData=null,H.profile&&(this.stats={size:0})}Ee.prototype.bind=function(){S.bindBuffer(this.type,this.buffer)},Ee.prototype.destroy=function(){dt(this)};var Ye=[];function Ke(oe,Te){var nt=Ye.pop();return nt||(nt=new Ee(oe)),nt.bind(),st(nt,Te,R_,0,1,!1),nt}function it(oe){Ye.push(oe)}function Qe(oe,Te,nt){oe.byteLength=Te.byteLength,S.bufferData(oe.type,Te,nt)}function st(oe,Te,nt,vt,Ge,yt){var We;if(oe.usage=nt,Array.isArray(Te)){if(oe.dtype=vt||Nc,Te.length>0){var lt;if(Array.isArray(Te[0])){We=fd(Te);for(var He=1,ct=1;ct<We.length;++ct)He*=We[ct];oe.dimension=He,lt=Oc(Te,We,oe.dtype),Qe(oe,lt,nt),yt?oe.persistentData=lt:ce.freeType(lt)}else if(typeof Te[0]=="number"){oe.dimension=Ge;var kt=ce.allocType(oe.dtype,Te.length);dd(kt,Te),Qe(oe,kt,nt),yt?oe.persistentData=kt:ce.freeType(kt)}else t(Te[0])?(oe.dimension=Te[0].length,oe.dtype=vt||al(Te[0])||Nc,lt=Oc(Te,[Te.length,Te[0].length],oe.dtype),Qe(oe,lt,nt),yt?oe.persistentData=lt:ce.freeType(lt)):y.raise("invalid buffer data")}}else if(t(Te))oe.dtype=vt||al(Te),oe.dimension=Ge,Qe(oe,Te,nt),yt&&(oe.persistentData=new Uint8Array(new Uint8Array(Te.buffer)));else if(ri(Te)){We=Te.shape;var Ht=Te.stride,pt=Te.offset,at=0,Ue=0,Vt=0,$t=0;We.length===1?(at=We[0],Ue=1,Vt=Ht[0],$t=0):We.length===2?(at=We[0],Ue=We[1],Vt=Ht[0],$t=Ht[1]):y.raise("invalid shape"),oe.dtype=vt||al(Te.data)||Nc,oe.dimension=Ue;var At=ce.allocType(oe.dtype,at*Ue);pd(At,Te.data,at,Ue,Vt,$t,pt),Qe(oe,At,nt),yt?oe.persistentData=At:ce.freeType(At)}else Te instanceof ArrayBuffer?(oe.dtype=Fc,oe.dimension=Ge,Qe(oe,Te,nt),yt&&(oe.persistentData=new Uint8Array(new Uint8Array(Te)))):y.raise("invalid buffer data")}function dt(oe){O.bufferCount--,be(oe);var Te=oe.buffer;y(Te,"buffer must not be deleted already"),S.deleteBuffer(Te),oe.buffer=null,delete xe[oe.id]}function Ze(oe,Te,nt,vt){O.bufferCount++;var Ge=new Ee(Te);xe[Ge.id]=Ge;function yt(He){var ct=hd,kt=null,Ht=0,pt=0,at=1;return Array.isArray(He)||t(He)||ri(He)||He instanceof ArrayBuffer?kt=He:typeof He=="number"?Ht=He|0:He&&(y.type(He,"object","buffer arguments must be an object, a number or an array"),"data"in He&&(y(kt===null||Array.isArray(kt)||t(kt)||ri(kt),"invalid data for buffer"),kt=He.data),"usage"in He&&(y.parameter(He.usage,il,"invalid buffer usage"),ct=il[He.usage]),"type"in He&&(y.parameter(He.type,ma,"invalid buffer type"),pt=ma[He.type]),"dimension"in He&&(y.type(He.dimension,"number","invalid dimension"),at=He.dimension|0),"length"in He&&(y.nni(Ht,"buffer length must be a nonnegative integer"),Ht=He.length|0)),Ge.bind(),kt?st(Ge,kt,ct,pt,at,vt):(Ht&&S.bufferData(Ge.type,Ht,ct),Ge.dtype=pt||Fc,Ge.usage=ct,Ge.dimension=at,Ge.byteLength=Ht),H.profile&&(Ge.stats.size=Ge.byteLength*Wi[Ge.dtype]),yt}function We(He,ct){y(ct+He.byteLength<=Ge.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+He.byteLength+" starting from offset "+ct+" to a buffer of size "+Ge.byteLength),S.bufferSubData(Ge.type,ct,He)}function lt(He,ct){var kt=(ct||0)|0,Ht;if(Ge.bind(),t(He)||He instanceof ArrayBuffer)We(He,kt);else if(Array.isArray(He)){if(He.length>0)if(typeof He[0]=="number"){var pt=ce.allocType(Ge.dtype,He.length);dd(pt,He),We(pt,kt),ce.freeType(pt)}else if(Array.isArray(He[0])||t(He[0])){Ht=fd(He);var at=Oc(He,Ht,Ge.dtype);We(at,kt),ce.freeType(at)}else y.raise("invalid buffer data")}else if(ri(He)){Ht=He.shape;var Ue=He.stride,Vt=0,$t=0,At=0,tn=0;Ht.length===1?(Vt=Ht[0],$t=1,At=Ue[0],tn=0):Ht.length===2?(Vt=Ht[0],$t=Ht[1],At=Ue[0],tn=Ue[1]):y.raise("invalid shape");var Wt=Array.isArray(He.data)?Ge.dtype:al(He.data),Kt=ce.allocType(Wt,Vt*$t);pd(Kt,He.data,Vt,$t,At,tn,He.offset),We(Kt,kt),ce.freeType(Kt)}else y.raise("invalid data for buffer subdata");return yt}return nt||yt(oe),yt._reglType="buffer",yt._buffer=Ge,yt.subdata=lt,H.profile&&(yt.stats=Ge.stats),yt.destroy=function(){dt(Ge)},yt}function ot(){Ir(xe).forEach(function(oe){oe.buffer=S.createBuffer(),S.bindBuffer(oe.type,oe.buffer),S.bufferData(oe.type,oe.persistentData||oe.byteLength,oe.usage)})}return H.profile&&(O.getTotalBufferSize=function(){var oe=0;return Object.keys(xe).forEach(function(Te){oe+=xe[Te].stats.size}),oe}),{create:Ze,createStream:Ke,destroyStream:it,clear:function(){Ir(xe).forEach(dt),Ye.forEach(dt)},getBuffer:function(oe){return oe&&oe._buffer instanceof Ee?oe._buffer:null},restore:ot,_initBuffer:st}}var I_=0,O_=0,F_=1,N_=1,z_=4,k_=4,es={points:I_,point:O_,lines:F_,line:N_,triangles:z_,triangle:k_,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},B_=0,U_=1,ro=4,G_=5120,ts=5121,md=5122,ns=5123,vd=5124,va=5125,zc=34963,V_=35040,H_=35044;function W_(S,O,H,be){var Ne={},xe=0,Ee={uint8:ts,uint16:ns};O.oes_element_index_uint&&(Ee.uint32=va);function Ye(ot){this.id=xe++,Ne[this.id]=this,this.buffer=ot,this.primType=ro,this.vertCount=0,this.type=0}Ye.prototype.bind=function(){this.buffer.bind()};var Ke=[];function it(ot){var oe=Ke.pop();return oe||(oe=new Ye(H.create(null,zc,!0,!1)._buffer)),st(oe,ot,V_,-1,-1,0,0),oe}function Qe(ot){Ke.push(ot)}function st(ot,oe,Te,nt,vt,Ge,yt){ot.buffer.bind();var We;if(oe){var lt=yt;!yt&&(!t(oe)||ri(oe)&&!t(oe.data))&&(lt=O.oes_element_index_uint?va:ns),H._initBuffer(ot.buffer,oe,Te,lt,3)}else S.bufferData(zc,Ge,Te),ot.buffer.dtype=We||ts,ot.buffer.usage=Te,ot.buffer.dimension=3,ot.buffer.byteLength=Ge;if(We=yt,!yt){switch(ot.buffer.dtype){case ts:case G_:We=ts;break;case ns:case md:We=ns;break;case va:case vd:We=va;break;default:y.raise("unsupported type for element array")}ot.buffer.dtype=We}ot.type=We,y(We!==va||!!O.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var He=vt;He<0&&(He=ot.buffer.byteLength,We===ns?He>>=1:We===va&&(He>>=2)),ot.vertCount=He;var ct=nt;if(nt<0){ct=ro;var kt=ot.buffer.dimension;kt===1&&(ct=B_),kt===2&&(ct=U_),kt===3&&(ct=ro)}ot.primType=ct}function dt(ot){be.elementsCount--,y(ot.buffer!==null,"must not double destroy elements"),delete Ne[ot.id],ot.buffer.destroy(),ot.buffer=null}function Ze(ot,oe){var Te=H.create(null,zc,!0),nt=new Ye(Te._buffer);be.elementsCount++;function vt(Ge){if(!Ge)Te(),nt.primType=ro,nt.vertCount=0,nt.type=ts;else if(typeof Ge=="number")Te(Ge),nt.primType=ro,nt.vertCount=Ge|0,nt.type=ts;else{var yt=null,We=H_,lt=-1,He=-1,ct=0,kt=0;Array.isArray(Ge)||t(Ge)||ri(Ge)?yt=Ge:(y.type(Ge,"object","invalid arguments for elements"),"data"in Ge&&(yt=Ge.data,y(Array.isArray(yt)||t(yt)||ri(yt),"invalid data for element buffer")),"usage"in Ge&&(y.parameter(Ge.usage,il,"invalid element buffer usage"),We=il[Ge.usage]),"primitive"in Ge&&(y.parameter(Ge.primitive,es,"invalid element buffer primitive"),lt=es[Ge.primitive]),"count"in Ge&&(y(typeof Ge.count=="number"&&Ge.count>=0,"invalid vertex count for elements"),He=Ge.count|0),"type"in Ge&&(y.parameter(Ge.type,Ee,"invalid buffer type"),kt=Ee[Ge.type]),"length"in Ge?ct=Ge.length|0:(ct=He,kt===ns||kt===md?ct*=2:(kt===va||kt===vd)&&(ct*=4))),st(nt,yt,We,lt,He,ct,kt)}return vt}return vt(ot),vt._reglType="elements",vt._elements=nt,vt.subdata=function(Ge,yt){return Te.subdata(Ge,yt),vt},vt.destroy=function(){dt(nt)},vt}return{create:Ze,createStream:it,destroyStream:Qe,getElements:function(ot){return typeof ot=="function"&&ot._elements instanceof Ye?ot._elements:null},clear:function(){Ir(Ne).forEach(dt)}}}var gd=new Float32Array(1),q_=new Uint32Array(gd.buffer),X_=5123;function _d(S){for(var O=ce.allocType(X_,S.length),H=0;H<S.length;++H)if(isNaN(S[H]))O[H]=65535;else if(S[H]===1/0)O[H]=31744;else if(S[H]===-1/0)O[H]=64512;else{gd[0]=S[H];var be=q_[0],Ne=be>>>31<<15,xe=(be<<1>>>24)-127,Ee=be>>13&1023;if(xe<-24)O[H]=Ne;else if(xe<-14){var Ye=-14-xe;O[H]=Ne+(Ee+1024>>Ye)}else xe>15?O[H]=Ne+31744:O[H]=Ne+(xe+15<<10)+Ee}return O}function Ln(S){return Array.isArray(S)||t(S)}var xd=function(S){return!(S&S-1)&&!!S},j_=34467,pi=3553,kc=34067,sl=34069,ga=6408,Bc=6406,ol=6407,io=6409,ll=6410,yd=32854,Uc=32855,bd=36194,$_=32819,Y_=32820,Z_=33635,K_=34042,Gc=6402,cl=34041,Vc=35904,Hc=35906,rs=36193,Wc=33776,qc=33777,Xc=33778,jc=33779,wd=35986,Sd=35987,Md=34798,Ed=35840,Td=35841,Ad=35842,Cd=35843,Pd=36196,is=5121,$c=5123,Yc=5125,ao=5126,Q_=10242,J_=10243,ex=10497,Zc=33071,tx=33648,nx=10240,rx=10241,Kc=9728,ix=9729,Qc=9984,Ld=9985,Rd=9986,Jc=9987,ax=33170,ul=4352,sx=4353,ox=4354,lx=34046,cx=3317,ux=37440,fx=37441,hx=37443,Dd=37444,so=33984,dx=[Qc,Rd,Ld,Jc],fl=[0,io,ll,ol,ga],Yr={};Yr[io]=Yr[Bc]=Yr[Gc]=1,Yr[cl]=Yr[ll]=2,Yr[ol]=Yr[Vc]=3,Yr[ga]=Yr[Hc]=4;function as(S){return"[object "+S+"]"}var Id=as("HTMLCanvasElement"),Od=as("OffscreenCanvas"),Fd=as("CanvasRenderingContext2D"),Nd=as("ImageBitmap"),zd=as("HTMLImageElement"),kd=as("HTMLVideoElement"),px=Object.keys(Ic).concat([Id,Od,Fd,Nd,zd,kd]),ss=[];ss[is]=1,ss[ao]=4,ss[rs]=2,ss[$c]=2,ss[Yc]=4;var rr=[];rr[yd]=2,rr[Uc]=2,rr[bd]=2,rr[cl]=4,rr[Wc]=.5,rr[qc]=.5,rr[Xc]=1,rr[jc]=1,rr[wd]=.5,rr[Sd]=1,rr[Md]=1,rr[Ed]=.5,rr[Td]=.25,rr[Ad]=.5,rr[Cd]=.25,rr[Pd]=.5;function Bd(S){return Array.isArray(S)&&(S.length===0||typeof S[0]=="number")}function Ud(S){if(!Array.isArray(S))return!1;var O=S.length;return!(O===0||!Ln(S[0]))}function _a(S){return Object.prototype.toString.call(S)}function Gd(S){return _a(S)===Id}function Vd(S){return _a(S)===Od}function mx(S){return _a(S)===Fd}function vx(S){return _a(S)===Nd}function gx(S){return _a(S)===zd}function _x(S){return _a(S)===kd}function eu(S){if(!S)return!1;var O=_a(S);return px.indexOf(O)>=0?!0:Bd(S)||Ud(S)||ri(S)}function Hd(S){return Ic[Object.prototype.toString.call(S)]|0}function xx(S,O){var H=O.length;switch(S.type){case is:case $c:case Yc:case ao:var be=ce.allocType(S.type,H);be.set(O),S.data=be;break;case rs:S.data=_d(O);break;default:y.raise("unsupported texture type, must specify a typed array")}}function Wd(S,O){return ce.allocType(S.type===rs?ao:S.type,O)}function qd(S,O){S.type===rs?(S.data=_d(O),ce.freeType(O)):S.data=O}function yx(S,O,H,be,Ne,xe){for(var Ee=S.width,Ye=S.height,Ke=S.channels,it=Ee*Ye*Ke,Qe=Wd(S,it),st=0,dt=0;dt<Ye;++dt)for(var Ze=0;Ze<Ee;++Ze)for(var ot=0;ot<Ke;++ot)Qe[st++]=O[H*Ze+be*dt+Ne*ot+xe];qd(S,Qe)}function hl(S,O,H,be,Ne,xe){var Ee;if(typeof rr[S]<"u"?Ee=rr[S]:Ee=Yr[S]*ss[O],xe&&(Ee*=6),Ne){for(var Ye=0,Ke=H;Ke>=1;)Ye+=Ee*Ke*Ke,Ke/=2;return Ye}else return Ee*H*be}function bx(S,O,H,be,Ne,xe,Ee){var Ye={"don't care":ul,"dont care":ul,nice:ox,fast:sx},Ke={repeat:ex,clamp:Zc,mirror:tx},it={nearest:Kc,linear:ix},Qe=n({mipmap:Jc,"nearest mipmap nearest":Qc,"linear mipmap nearest":Ld,"nearest mipmap linear":Rd,"linear mipmap linear":Jc},it),st={none:0,browser:Dd},dt={uint8:is,rgba4:$_,rgb565:Z_,"rgb5 a1":Y_},Ze={alpha:Bc,luminance:io,"luminance alpha":ll,rgb:ol,rgba:ga,rgba4:yd,"rgb5 a1":Uc,rgb565:bd},ot={};O.ext_srgb&&(Ze.srgb=Vc,Ze.srgba=Hc),O.oes_texture_float&&(dt.float32=dt.float=ao),O.oes_texture_half_float&&(dt.float16=dt["half float"]=rs),O.webgl_depth_texture&&(n(Ze,{depth:Gc,"depth stencil":cl}),n(dt,{uint16:$c,uint32:Yc,"depth stencil":K_})),O.webgl_compressed_texture_s3tc&&n(ot,{"rgb s3tc dxt1":Wc,"rgba s3tc dxt1":qc,"rgba s3tc dxt3":Xc,"rgba s3tc dxt5":jc}),O.webgl_compressed_texture_atc&&n(ot,{"rgb atc":wd,"rgba atc explicit alpha":Sd,"rgba atc interpolated alpha":Md}),O.webgl_compressed_texture_pvrtc&&n(ot,{"rgb pvrtc 4bppv1":Ed,"rgb pvrtc 2bppv1":Td,"rgba pvrtc 4bppv1":Ad,"rgba pvrtc 2bppv1":Cd}),O.webgl_compressed_texture_etc1&&(ot["rgb etc1"]=Pd);var oe=Array.prototype.slice.call(S.getParameter(j_));Object.keys(ot).forEach(function(G){var we=ot[G];oe.indexOf(we)>=0&&(Ze[G]=we)});var Te=Object.keys(Ze);H.textureFormats=Te;var nt=[];Object.keys(Ze).forEach(function(G){var we=Ze[G];nt[we]=G});var vt=[];Object.keys(dt).forEach(function(G){var we=dt[G];vt[we]=G});var Ge=[];Object.keys(it).forEach(function(G){var we=it[G];Ge[we]=G});var yt=[];Object.keys(Qe).forEach(function(G){var we=Qe[G];yt[we]=G});var We=[];Object.keys(Ke).forEach(function(G){var we=Ke[G];We[we]=G});var lt=Te.reduce(function(G,we){var pe=Ze[we];return pe===io||pe===Bc||pe===io||pe===ll||pe===Gc||pe===cl||O.ext_srgb&&(pe===Vc||pe===Hc)?G[pe]=pe:pe===Uc||we.indexOf("rgba")>=0?G[pe]=ga:G[pe]=ol,G},{});function He(){this.internalformat=ga,this.format=ga,this.type=is,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=Dd,this.width=0,this.height=0,this.channels=0}function ct(G,we){G.internalformat=we.internalformat,G.format=we.format,G.type=we.type,G.compressed=we.compressed,G.premultiplyAlpha=we.premultiplyAlpha,G.flipY=we.flipY,G.unpackAlignment=we.unpackAlignment,G.colorSpace=we.colorSpace,G.width=we.width,G.height=we.height,G.channels=we.channels}function kt(G,we){if(!(typeof we!="object"||!we)){if("premultiplyAlpha"in we&&(y.type(we.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),G.premultiplyAlpha=we.premultiplyAlpha),"flipY"in we&&(y.type(we.flipY,"boolean","invalid texture flip"),G.flipY=we.flipY),"alignment"in we&&(y.oneOf(we.alignment,[1,2,4,8],"invalid texture unpack alignment"),G.unpackAlignment=we.alignment),"colorSpace"in we&&(y.parameter(we.colorSpace,st,"invalid colorSpace"),G.colorSpace=st[we.colorSpace]),"type"in we){var pe=we.type;y(O.oes_texture_float||!(pe==="float"||pe==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),y(O.oes_texture_half_float||!(pe==="half float"||pe==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),y(O.webgl_depth_texture||!(pe==="uint16"||pe==="uint32"||pe==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),y.parameter(pe,dt,"invalid texture type"),G.type=dt[pe]}var wt=G.width,nn=G.height,k=G.channels,R=!1;"shape"in we?(y(Array.isArray(we.shape)&&we.shape.length>=2,"shape must be an array"),wt=we.shape[0],nn=we.shape[1],we.shape.length===3&&(k=we.shape[2],y(k>0&&k<=4,"invalid number of channels"),R=!0),y(wt>=0&&wt<=H.maxTextureSize,"invalid width"),y(nn>=0&&nn<=H.maxTextureSize,"invalid height")):("radius"in we&&(wt=nn=we.radius,y(wt>=0&&wt<=H.maxTextureSize,"invalid radius")),"width"in we&&(wt=we.width,y(wt>=0&&wt<=H.maxTextureSize,"invalid width")),"height"in we&&(nn=we.height,y(nn>=0&&nn<=H.maxTextureSize,"invalid height")),"channels"in we&&(k=we.channels,y(k>0&&k<=4,"invalid number of channels"),R=!0)),G.width=wt|0,G.height=nn|0,G.channels=k|0;var j=!1;if("format"in we){var ie=we.format;y(O.webgl_depth_texture||!(ie==="depth"||ie==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),y.parameter(ie,Ze,"invalid texture format");var ue=G.internalformat=Ze[ie];G.format=lt[ue],ie in dt&&("type"in we||(G.type=dt[ie])),ie in ot&&(G.compressed=!0),j=!0}!R&&j?G.channels=Yr[G.format]:R&&!j?G.channels!==fl[G.format]&&(G.format=G.internalformat=fl[G.channels]):j&&R&&y(G.channels===Yr[G.format],"number of channels inconsistent with specified format")}}function Ht(G){S.pixelStorei(ux,G.flipY),S.pixelStorei(fx,G.premultiplyAlpha),S.pixelStorei(hx,G.colorSpace),S.pixelStorei(cx,G.unpackAlignment)}function pt(){He.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function at(G,we){var pe=null;if(eu(we)?pe=we:we&&(y.type(we,"object","invalid pixel data type"),kt(G,we),"x"in we&&(G.xOffset=we.x|0),"y"in we&&(G.yOffset=we.y|0),eu(we.data)&&(pe=we.data)),y(!G.compressed||pe instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),we.copy){y(!pe,"can not specify copy and data field for the same texture");var wt=Ne.viewportWidth,nn=Ne.viewportHeight;G.width=G.width||wt-G.xOffset,G.height=G.height||nn-G.yOffset,G.needsCopy=!0,y(G.xOffset>=0&&G.xOffset<wt&&G.yOffset>=0&&G.yOffset<nn&&G.width>0&&G.width<=wt&&G.height>0&&G.height<=nn,"copy texture read out of bounds")}else if(!pe)G.width=G.width||1,G.height=G.height||1,G.channels=G.channels||4;else if(t(pe))G.channels=G.channels||4,G.data=pe,!("type"in we)&&G.type===is&&(G.type=Hd(pe));else if(Bd(pe))G.channels=G.channels||4,xx(G,pe),G.alignment=1,G.needsFree=!0;else if(ri(pe)){var k=pe.data;!Array.isArray(k)&&G.type===is&&(G.type=Hd(k));var R=pe.shape,j=pe.stride,ie,ue,K,$,ee,B;R.length===3?(K=R[2],B=j[2]):(y(R.length===2,"invalid ndarray pixel data, must be 2 or 3D"),K=1,B=1),ie=R[0],ue=R[1],$=j[0],ee=j[1],G.alignment=1,G.width=ie,G.height=ue,G.channels=K,G.format=G.internalformat=fl[K],G.needsFree=!0,yx(G,k,$,ee,B,pe.offset)}else if(Gd(pe)||Vd(pe)||mx(pe))Gd(pe)||Vd(pe)?G.element=pe:G.element=pe.canvas,G.width=G.element.width,G.height=G.element.height,G.channels=4;else if(vx(pe))G.element=pe,G.width=pe.width,G.height=pe.height,G.channels=4;else if(gx(pe))G.element=pe,G.width=pe.naturalWidth,G.height=pe.naturalHeight,G.channels=4;else if(_x(pe))G.element=pe,G.width=pe.videoWidth,G.height=pe.videoHeight,G.channels=4;else if(Ud(pe)){var X=G.width||pe[0].length,N=G.height||pe.length,te=G.channels;Ln(pe[0][0])?te=te||pe[0][0].length:te=te||1;for(var he=rl.shape(pe),Ie=1,ze=0;ze<he.length;++ze)Ie*=he[ze];var Pe=Wd(G,Ie);rl.flatten(pe,he,"",Pe),qd(G,Pe),G.alignment=1,G.width=X,G.height=N,G.channels=te,G.format=G.internalformat=fl[te],G.needsFree=!0}G.type===ao?y(H.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):G.type===rs&&y(H.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function Ue(G,we,pe){var wt=G.element,nn=G.data,k=G.internalformat,R=G.format,j=G.type,ie=G.width,ue=G.height;Ht(G),wt?S.texImage2D(we,pe,R,R,j,wt):G.compressed?S.compressedTexImage2D(we,pe,k,ie,ue,0,nn):G.needsCopy?(be(),S.copyTexImage2D(we,pe,R,G.xOffset,G.yOffset,ie,ue,0)):S.texImage2D(we,pe,R,ie,ue,0,R,j,nn||null)}function Vt(G,we,pe,wt,nn){var k=G.element,R=G.data,j=G.internalformat,ie=G.format,ue=G.type,K=G.width,$=G.height;Ht(G),k?S.texSubImage2D(we,nn,pe,wt,ie,ue,k):G.compressed?S.compressedTexSubImage2D(we,nn,pe,wt,j,K,$,R):G.needsCopy?(be(),S.copyTexSubImage2D(we,nn,pe,wt,G.xOffset,G.yOffset,K,$)):S.texSubImage2D(we,nn,pe,wt,K,$,ie,ue,R)}var $t=[];function At(){return $t.pop()||new pt}function tn(G){G.needsFree&&ce.freeType(G.data),pt.call(G),$t.push(G)}function Wt(){He.call(this),this.genMipmaps=!1,this.mipmapHint=ul,this.mipmask=0,this.images=Array(16)}function Kt(G,we,pe){var wt=G.images[0]=At();G.mipmask=1,wt.width=G.width=we,wt.height=G.height=pe,wt.channels=G.channels=4}function gn(G,we){var pe=null;if(eu(we))pe=G.images[0]=At(),ct(pe,G),at(pe,we),G.mipmask=1;else if(kt(G,we),Array.isArray(we.mipmap))for(var wt=we.mipmap,nn=0;nn<wt.length;++nn)pe=G.images[nn]=At(),ct(pe,G),pe.width>>=nn,pe.height>>=nn,at(pe,wt[nn]),G.mipmask|=1<<nn;else pe=G.images[0]=At(),ct(pe,G),at(pe,we),G.mipmask=1;ct(G,G.images[0]),G.compressed&&(G.internalformat===Wc||G.internalformat===qc||G.internalformat===Xc||G.internalformat===jc)&&y(G.width%4===0&&G.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function kn(G,we){for(var pe=G.images,wt=0;wt<pe.length;++wt){if(!pe[wt])return;Ue(pe[wt],we,wt)}}var jn=[];function ln(){var G=jn.pop()||new Wt;He.call(G),G.mipmask=0;for(var we=0;we<16;++we)G.images[we]=null;return G}function Vn(G){for(var we=G.images,pe=0;pe<we.length;++pe)we[pe]&&tn(we[pe]),we[pe]=null;jn.push(G)}function Mn(){this.minFilter=Kc,this.magFilter=Kc,this.wrapS=Zc,this.wrapT=Zc,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=ul}function Bn(G,we){if("min"in we){var pe=we.min;y.parameter(pe,Qe),G.minFilter=Qe[pe],dx.indexOf(G.minFilter)>=0&&!("faces"in we)&&(G.genMipmaps=!0)}if("mag"in we){var wt=we.mag;y.parameter(wt,it),G.magFilter=it[wt]}var nn=G.wrapS,k=G.wrapT;if("wrap"in we){var R=we.wrap;typeof R=="string"?(y.parameter(R,Ke),nn=k=Ke[R]):Array.isArray(R)&&(y.parameter(R[0],Ke),y.parameter(R[1],Ke),nn=Ke[R[0]],k=Ke[R[1]])}else{if("wrapS"in we){var j=we.wrapS;y.parameter(j,Ke),nn=Ke[j]}if("wrapT"in we){var ie=we.wrapT;y.parameter(ie,Ke),k=Ke[ie]}}if(G.wrapS=nn,G.wrapT=k,"anisotropic"in we){var ue=we.anisotropic;y(typeof ue=="number"&&ue>=1&&ue<=H.maxAnisotropic,"aniso samples must be between 1 and "),G.anisotropic=we.anisotropic}if("mipmap"in we){var K=!1;switch(typeof we.mipmap){case"string":y.parameter(we.mipmap,Ye,"invalid mipmap hint"),G.mipmapHint=Ye[we.mipmap],G.genMipmaps=!0,K=!0;break;case"boolean":K=G.genMipmaps=we.mipmap;break;case"object":y(Array.isArray(we.mipmap),"invalid mipmap type"),G.genMipmaps=!1,K=!0;break;default:y.raise("invalid mipmap type")}K&&!("min"in we)&&(G.minFilter=Qc)}}function Hn(G,we){S.texParameteri(we,rx,G.minFilter),S.texParameteri(we,nx,G.magFilter),S.texParameteri(we,Q_,G.wrapS),S.texParameteri(we,J_,G.wrapT),O.ext_texture_filter_anisotropic&&S.texParameteri(we,lx,G.anisotropic),G.genMipmaps&&(S.hint(ax,G.mipmapHint),S.generateMipmap(we))}var Wn=0,Jn={},ir=H.maxTextureUnits,Rn=Array(ir).map(function(){return null});function Yt(G){He.call(this),this.mipmask=0,this.internalformat=ga,this.id=Wn++,this.refCount=1,this.target=G,this.texture=S.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new Mn,Ee.profile&&(this.stats={size:0})}function ar(G){S.activeTexture(so),S.bindTexture(G.target,G.texture)}function yn(){var G=Rn[0];G?S.bindTexture(G.target,G.texture):S.bindTexture(pi,null)}function Bt(G){var we=G.texture;y(we,"must not double destroy texture");var pe=G.unit,wt=G.target;pe>=0&&(S.activeTexture(so+pe),S.bindTexture(wt,null),Rn[pe]=null),S.deleteTexture(we),G.texture=null,G.params=null,G.pixels=null,G.refCount=0,delete Jn[G.id],xe.textureCount--}n(Yt.prototype,{bind:function(){var G=this;G.bindCount+=1;var we=G.unit;if(we<0){for(var pe=0;pe<ir;++pe){var wt=Rn[pe];if(wt){if(wt.bindCount>0)continue;wt.unit=-1}Rn[pe]=G,we=pe;break}we>=ir&&y.raise("insufficient number of texture units"),Ee.profile&&xe.maxTextureUnits<we+1&&(xe.maxTextureUnits=we+1),G.unit=we,S.activeTexture(so+we),S.bindTexture(G.target,G.texture)}return we},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&Bt(this)}});function sn(G,we){var pe=new Yt(pi);Jn[pe.id]=pe,xe.textureCount++;function wt(R,j){var ie=pe.texInfo;Mn.call(ie);var ue=ln();return typeof R=="number"?typeof j=="number"?Kt(ue,R|0,j|0):Kt(ue,R|0,R|0):R?(y.type(R,"object","invalid arguments to regl.texture"),Bn(ie,R),gn(ue,R)):Kt(ue,1,1),ie.genMipmaps&&(ue.mipmask=(ue.width<<1)-1),pe.mipmask=ue.mipmask,ct(pe,ue),y.texture2D(ie,ue,H),pe.internalformat=ue.internalformat,wt.width=ue.width,wt.height=ue.height,ar(pe),kn(ue,pi),Hn(ie,pi),yn(),Vn(ue),Ee.profile&&(pe.stats.size=hl(pe.internalformat,pe.type,ue.width,ue.height,ie.genMipmaps,!1)),wt.format=nt[pe.internalformat],wt.type=vt[pe.type],wt.mag=Ge[ie.magFilter],wt.min=yt[ie.minFilter],wt.wrapS=We[ie.wrapS],wt.wrapT=We[ie.wrapT],wt}function nn(R,j,ie,ue){y(!!R,"must specify image data");var K=j|0,$=ie|0,ee=ue|0,B=At();return ct(B,pe),B.width=0,B.height=0,at(B,R),B.width=B.width||(pe.width>>ee)-K,B.height=B.height||(pe.height>>ee)-$,y(pe.type===B.type&&pe.format===B.format&&pe.internalformat===B.internalformat,"incompatible format for texture.subimage"),y(K>=0&&$>=0&&K+B.width<=pe.width&&$+B.height<=pe.height,"texture.subimage write out of bounds"),y(pe.mipmask&1<<ee,"missing mipmap data"),y(B.data||B.element||B.needsCopy,"missing image data"),ar(pe),Vt(B,pi,K,$,ee),yn(),tn(B),wt}function k(R,j){var ie=R|0,ue=j|0||ie;if(ie===pe.width&&ue===pe.height)return wt;wt.width=pe.width=ie,wt.height=pe.height=ue,ar(pe);for(var K=0;pe.mipmask>>K;++K){var $=ie>>K,ee=ue>>K;if(!$||!ee)break;S.texImage2D(pi,K,pe.format,$,ee,0,pe.format,pe.type,null)}return yn(),Ee.profile&&(pe.stats.size=hl(pe.internalformat,pe.type,ie,ue,!1,!1)),wt}return wt(G,we),wt.subimage=nn,wt.resize=k,wt._reglType="texture2d",wt._texture=pe,Ee.profile&&(wt.stats=pe.stats),wt.destroy=function(){pe.decRef()},wt}function dn(G,we,pe,wt,nn,k){var R=new Yt(kc);Jn[R.id]=R,xe.cubeCount++;var j=new Array(6);function ie($,ee,B,X,N,te){var he,Ie=R.texInfo;for(Mn.call(Ie),he=0;he<6;++he)j[he]=ln();if(typeof $=="number"||!$){var ze=$|0||1;for(he=0;he<6;++he)Kt(j[he],ze,ze)}else if(typeof $=="object")if(ee)gn(j[0],$),gn(j[1],ee),gn(j[2],B),gn(j[3],X),gn(j[4],N),gn(j[5],te);else if(Bn(Ie,$),kt(R,$),"faces"in $){var Pe=$.faces;for(y(Array.isArray(Pe)&&Pe.length===6,"cube faces must be a length 6 array"),he=0;he<6;++he)y(typeof Pe[he]=="object"&&!!Pe[he],"invalid input for cube map face"),ct(j[he],R),gn(j[he],Pe[he])}else for(he=0;he<6;++he)gn(j[he],$);else y.raise("invalid arguments to cube map");for(ct(R,j[0]),H.npotTextureCube||y(xd(R.width)&&xd(R.height),"your browser does not support non power or two texture dimensions"),Ie.genMipmaps?R.mipmask=(j[0].width<<1)-1:R.mipmask=j[0].mipmask,y.textureCube(R,Ie,j,H),R.internalformat=j[0].internalformat,ie.width=j[0].width,ie.height=j[0].height,ar(R),he=0;he<6;++he)kn(j[he],sl+he);for(Hn(Ie,kc),yn(),Ee.profile&&(R.stats.size=hl(R.internalformat,R.type,ie.width,ie.height,Ie.genMipmaps,!0)),ie.format=nt[R.internalformat],ie.type=vt[R.type],ie.mag=Ge[Ie.magFilter],ie.min=yt[Ie.minFilter],ie.wrapS=We[Ie.wrapS],ie.wrapT=We[Ie.wrapT],he=0;he<6;++he)Vn(j[he]);return ie}function ue($,ee,B,X,N){y(!!ee,"must specify image data"),y(typeof $=="number"&&$===($|0)&&$>=0&&$<6,"invalid face");var te=B|0,he=X|0,Ie=N|0,ze=At();return ct(ze,R),ze.width=0,ze.height=0,at(ze,ee),ze.width=ze.width||(R.width>>Ie)-te,ze.height=ze.height||(R.height>>Ie)-he,y(R.type===ze.type&&R.format===ze.format&&R.internalformat===ze.internalformat,"incompatible format for texture.subimage"),y(te>=0&&he>=0&&te+ze.width<=R.width&&he+ze.height<=R.height,"texture.subimage write out of bounds"),y(R.mipmask&1<<Ie,"missing mipmap data"),y(ze.data||ze.element||ze.needsCopy,"missing image data"),ar(R),Vt(ze,sl+$,te,he,Ie),yn(),tn(ze),ie}function K($){var ee=$|0;if(ee!==R.width){ie.width=R.width=ee,ie.height=R.height=ee,ar(R);for(var B=0;B<6;++B)for(var X=0;R.mipmask>>X;++X)S.texImage2D(sl+B,X,R.format,ee>>X,ee>>X,0,R.format,R.type,null);return yn(),Ee.profile&&(R.stats.size=hl(R.internalformat,R.type,ie.width,ie.height,!1,!0)),ie}}return ie(G,we,pe,wt,nn,k),ie.subimage=ue,ie.resize=K,ie._reglType="textureCube",ie._texture=R,Ee.profile&&(ie.stats=R.stats),ie.destroy=function(){R.decRef()},ie}function Dn(){for(var G=0;G<ir;++G)S.activeTexture(so+G),S.bindTexture(pi,null),Rn[G]=null;Ir(Jn).forEach(Bt),xe.cubeCount=0,xe.textureCount=0}Ee.profile&&(xe.getTotalTextureSize=function(){var G=0;return Object.keys(Jn).forEach(function(we){G+=Jn[we].stats.size}),G});function vi(){for(var G=0;G<ir;++G){var we=Rn[G];we&&(we.bindCount=0,we.unit=-1,Rn[G]=null)}Ir(Jn).forEach(function(pe){pe.texture=S.createTexture(),S.bindTexture(pe.target,pe.texture);for(var wt=0;wt<32;++wt)if(pe.mipmask&1<<wt)if(pe.target===pi)S.texImage2D(pi,wt,pe.internalformat,pe.width>>wt,pe.height>>wt,0,pe.internalformat,pe.type,null);else for(var nn=0;nn<6;++nn)S.texImage2D(sl+nn,wt,pe.internalformat,pe.width>>wt,pe.height>>wt,0,pe.internalformat,pe.type,null);Hn(pe.texInfo,pe.target)})}function Ea(){for(var G=0;G<ir;++G){var we=Rn[G];we&&(we.bindCount=0,we.unit=-1,Rn[G]=null),S.activeTexture(so+G),S.bindTexture(pi,null),S.bindTexture(kc,null)}}return{create2D:sn,createCube:dn,clear:Dn,getTexture:function(G){return null},restore:vi,refresh:Ea}}var qi=36161,dl=32854,Xd=32855,jd=36194,$d=33189,Yd=36168,Zd=34041,Kd=35907,Qd=34836,Jd=34842,ep=34843,ii=[];ii[dl]=2,ii[Xd]=2,ii[jd]=2,ii[$d]=2,ii[Yd]=1,ii[Zd]=4,ii[Kd]=4,ii[Qd]=16,ii[Jd]=8,ii[ep]=6;function tp(S,O,H){return ii[S]*O*H}var wx=function(S,O,H,be,Ne){var xe={rgba4:dl,rgb565:jd,"rgb5 a1":Xd,depth:$d,stencil:Yd,"depth stencil":Zd};O.ext_srgb&&(xe.srgba=Kd),O.ext_color_buffer_half_float&&(xe.rgba16f=Jd,xe.rgb16f=ep),O.webgl_color_buffer_float&&(xe.rgba32f=Qd);var Ee=[];Object.keys(xe).forEach(function(Ze){var ot=xe[Ze];Ee[ot]=Ze});var Ye=0,Ke={};function it(Ze){this.id=Ye++,this.refCount=1,this.renderbuffer=Ze,this.format=dl,this.width=0,this.height=0,Ne.profile&&(this.stats={size:0})}it.prototype.decRef=function(){--this.refCount<=0&&Qe(this)};function Qe(Ze){var ot=Ze.renderbuffer;y(ot,"must not double destroy renderbuffer"),S.bindRenderbuffer(qi,null),S.deleteRenderbuffer(ot),Ze.renderbuffer=null,Ze.refCount=0,delete Ke[Ze.id],be.renderbufferCount--}function st(Ze,ot){var oe=new it(S.createRenderbuffer());Ke[oe.id]=oe,be.renderbufferCount++;function Te(vt,Ge){var yt=0,We=0,lt=dl;if(typeof vt=="object"&&vt){var He=vt;if("shape"in He){var ct=He.shape;y(Array.isArray(ct)&&ct.length>=2,"invalid renderbuffer shape"),yt=ct[0]|0,We=ct[1]|0}else"radius"in He&&(yt=We=He.radius|0),"width"in He&&(yt=He.width|0),"height"in He&&(We=He.height|0);"format"in He&&(y.parameter(He.format,xe,"invalid renderbuffer format"),lt=xe[He.format])}else typeof vt=="number"?(yt=vt|0,typeof Ge=="number"?We=Ge|0:We=yt):vt?y.raise("invalid arguments to renderbuffer constructor"):yt=We=1;if(y(yt>0&&We>0&&yt<=H.maxRenderbufferSize&&We<=H.maxRenderbufferSize,"invalid renderbuffer size"),!(yt===oe.width&&We===oe.height&&lt===oe.format))return Te.width=oe.width=yt,Te.height=oe.height=We,oe.format=lt,S.bindRenderbuffer(qi,oe.renderbuffer),S.renderbufferStorage(qi,lt,yt,We),y(S.getError()===0,"invalid render buffer format"),Ne.profile&&(oe.stats.size=tp(oe.format,oe.width,oe.height)),Te.format=Ee[oe.format],Te}function nt(vt,Ge){var yt=vt|0,We=Ge|0||yt;return yt===oe.width&&We===oe.height||(y(yt>0&&We>0&&yt<=H.maxRenderbufferSize&&We<=H.maxRenderbufferSize,"invalid renderbuffer size"),Te.width=oe.width=yt,Te.height=oe.height=We,S.bindRenderbuffer(qi,oe.renderbuffer),S.renderbufferStorage(qi,oe.format,yt,We),y(S.getError()===0,"invalid render buffer format"),Ne.profile&&(oe.stats.size=tp(oe.format,oe.width,oe.height))),Te}return Te(Ze,ot),Te.resize=nt,Te._reglType="renderbuffer",Te._renderbuffer=oe,Ne.profile&&(Te.stats=oe.stats),Te.destroy=function(){oe.decRef()},Te}Ne.profile&&(be.getTotalRenderbufferSize=function(){var Ze=0;return Object.keys(Ke).forEach(function(ot){Ze+=Ke[ot].stats.size}),Ze});function dt(){Ir(Ke).forEach(function(Ze){Ze.renderbuffer=S.createRenderbuffer(),S.bindRenderbuffer(qi,Ze.renderbuffer),S.renderbufferStorage(qi,Ze.format,Ze.width,Ze.height)}),S.bindRenderbuffer(qi,null)}return{create:st,clear:function(){Ir(Ke).forEach(Qe)},restore:dt}},Ai=36160,tu=36161,xa=3553,pl=34069,np=36064,rp=36096,ip=36128,ap=33306,sp=36053,Sx=36054,Mx=36055,Ex=36057,Tx=36061,Ax=36193,Cx=5121,Px=5126,op=6407,lp=6408,Lx=6402,Rx=[op,lp],nu=[];nu[lp]=4,nu[op]=3;var ml=[];ml[Cx]=1,ml[Px]=4,ml[Ax]=2;var Dx=32854,Ix=32855,Ox=36194,Fx=33189,Nx=36168,cp=34041,zx=35907,kx=34836,Bx=34842,Ux=34843,Gx=[Dx,Ix,Ox,zx,Bx,Ux,kx],os={};os[sp]="complete",os[Sx]="incomplete attachment",os[Ex]="incomplete dimensions",os[Mx]="incomplete, missing attachment",os[Tx]="unsupported";function Vx(S,O,H,be,Ne,xe){var Ee={cur:null,next:null,dirty:!1,setFBO:null},Ye=["rgba"],Ke=["rgba4","rgb565","rgb5 a1"];O.ext_srgb&&Ke.push("srgba"),O.ext_color_buffer_half_float&&Ke.push("rgba16f","rgb16f"),O.webgl_color_buffer_float&&Ke.push("rgba32f");var it=["uint8"];O.oes_texture_half_float&&it.push("half float","float16"),O.oes_texture_float&&it.push("float","float32");function Qe(pt,at,Ue){this.target=pt,this.texture=at,this.renderbuffer=Ue;var Vt=0,$t=0;at?(Vt=at.width,$t=at.height):Ue&&(Vt=Ue.width,$t=Ue.height),this.width=Vt,this.height=$t}function st(pt){pt&&(pt.texture&&pt.texture._texture.decRef(),pt.renderbuffer&&pt.renderbuffer._renderbuffer.decRef())}function dt(pt,at,Ue){if(pt)if(pt.texture){var Vt=pt.texture._texture,$t=Math.max(1,Vt.width),At=Math.max(1,Vt.height);y($t===at&&At===Ue,"inconsistent width/height for supplied texture"),Vt.refCount+=1}else{var tn=pt.renderbuffer._renderbuffer;y(tn.width===at&&tn.height===Ue,"inconsistent width/height for renderbuffer"),tn.refCount+=1}}function Ze(pt,at){at&&(at.texture?S.framebufferTexture2D(Ai,pt,at.target,at.texture._texture.texture,0):S.framebufferRenderbuffer(Ai,pt,tu,at.renderbuffer._renderbuffer.renderbuffer))}function ot(pt){var at=xa,Ue=null,Vt=null,$t=pt;typeof pt=="object"&&($t=pt.data,"target"in pt&&(at=pt.target|0)),y.type($t,"function","invalid attachment data");var At=$t._reglType;return At==="texture2d"?(Ue=$t,y(at===xa)):At==="textureCube"?(Ue=$t,y(at>=pl&&at<pl+6,"invalid cube map target")):At==="renderbuffer"?(Vt=$t,at=tu):y.raise("invalid regl object for attachment"),new Qe(at,Ue,Vt)}function oe(pt,at,Ue,Vt,$t){if(Ue){var At=be.create2D({width:pt,height:at,format:Vt,type:$t});return At._texture.refCount=0,new Qe(xa,At,null)}else{var tn=Ne.create({width:pt,height:at,format:Vt});return tn._renderbuffer.refCount=0,new Qe(tu,null,tn)}}function Te(pt){return pt&&(pt.texture||pt.renderbuffer)}function nt(pt,at,Ue){pt&&(pt.texture?pt.texture.resize(at,Ue):pt.renderbuffer&&pt.renderbuffer.resize(at,Ue),pt.width=at,pt.height=Ue)}var vt=0,Ge={};function yt(){this.id=vt++,Ge[this.id]=this,this.framebuffer=S.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function We(pt){pt.colorAttachments.forEach(st),st(pt.depthAttachment),st(pt.stencilAttachment),st(pt.depthStencilAttachment)}function lt(pt){var at=pt.framebuffer;y(at,"must not double destroy framebuffer"),S.deleteFramebuffer(at),pt.framebuffer=null,xe.framebufferCount--,delete Ge[pt.id]}function He(pt){var at;S.bindFramebuffer(Ai,pt.framebuffer);var Ue=pt.colorAttachments;for(at=0;at<Ue.length;++at)Ze(np+at,Ue[at]);for(at=Ue.length;at<H.maxColorAttachments;++at)S.framebufferTexture2D(Ai,np+at,xa,null,0);S.framebufferTexture2D(Ai,ap,xa,null,0),S.framebufferTexture2D(Ai,rp,xa,null,0),S.framebufferTexture2D(Ai,ip,xa,null,0),Ze(rp,pt.depthAttachment),Ze(ip,pt.stencilAttachment),Ze(ap,pt.depthStencilAttachment);var Vt=S.checkFramebufferStatus(Ai);!S.isContextLost()&&Vt!==sp&&y.raise("framebuffer configuration not supported, status = "+os[Vt]),S.bindFramebuffer(Ai,Ee.next?Ee.next.framebuffer:null),Ee.cur=Ee.next,S.getError()}function ct(pt,at){var Ue=new yt;xe.framebufferCount++;function Vt(At,tn){var Wt;y(Ee.next!==Ue,"can not update framebuffer which is currently in use");var Kt=0,gn=0,kn=!0,jn=!0,ln=null,Vn=!0,Mn="rgba",Bn="uint8",Hn=1,Wn=null,Jn=null,ir=null,Rn=!1;if(typeof At=="number")Kt=At|0,gn=tn|0||Kt;else if(!At)Kt=gn=1;else{y.type(At,"object","invalid arguments for framebuffer");var Yt=At;if("shape"in Yt){var ar=Yt.shape;y(Array.isArray(ar)&&ar.length>=2,"invalid shape for framebuffer"),Kt=ar[0],gn=ar[1]}else"radius"in Yt&&(Kt=gn=Yt.radius),"width"in Yt&&(Kt=Yt.width),"height"in Yt&&(gn=Yt.height);("color"in Yt||"colors"in Yt)&&(ln=Yt.color||Yt.colors,Array.isArray(ln)&&y(ln.length===1||O.webgl_draw_buffers,"multiple render targets not supported")),ln||("colorCount"in Yt&&(Hn=Yt.colorCount|0,y(Hn>0,"invalid color buffer count")),"colorTexture"in Yt&&(Vn=!!Yt.colorTexture,Mn="rgba4"),"colorType"in Yt&&(Bn=Yt.colorType,Vn?(y(O.oes_texture_float||!(Bn==="float"||Bn==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),y(O.oes_texture_half_float||!(Bn==="half float"||Bn==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):Bn==="half float"||Bn==="float16"?(y(O.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),Mn="rgba16f"):(Bn==="float"||Bn==="float32")&&(y(O.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),Mn="rgba32f"),y.oneOf(Bn,it,"invalid color type")),"colorFormat"in Yt&&(Mn=Yt.colorFormat,Ye.indexOf(Mn)>=0?Vn=!0:Ke.indexOf(Mn)>=0?Vn=!1:Vn?y.oneOf(Yt.colorFormat,Ye,"invalid color format for texture"):y.oneOf(Yt.colorFormat,Ke,"invalid color format for renderbuffer"))),("depthTexture"in Yt||"depthStencilTexture"in Yt)&&(Rn=!!(Yt.depthTexture||Yt.depthStencilTexture),y(!Rn||O.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in Yt&&(typeof Yt.depth=="boolean"?kn=Yt.depth:(Wn=Yt.depth,jn=!1)),"stencil"in Yt&&(typeof Yt.stencil=="boolean"?jn=Yt.stencil:(Jn=Yt.stencil,kn=!1)),"depthStencil"in Yt&&(typeof Yt.depthStencil=="boolean"?kn=jn=Yt.depthStencil:(ir=Yt.depthStencil,kn=!1,jn=!1))}var yn=null,Bt=null,sn=null,dn=null;if(Array.isArray(ln))yn=ln.map(ot);else if(ln)yn=[ot(ln)];else for(yn=new Array(Hn),Wt=0;Wt<Hn;++Wt)yn[Wt]=oe(Kt,gn,Vn,Mn,Bn);y(O.webgl_draw_buffers||yn.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),y(yn.length<=H.maxColorAttachments,"too many color attachments, not supported"),Kt=Kt||yn[0].width,gn=gn||yn[0].height,Wn?Bt=ot(Wn):kn&&!jn&&(Bt=oe(Kt,gn,Rn,"depth","uint32")),Jn?sn=ot(Jn):jn&&!kn&&(sn=oe(Kt,gn,!1,"stencil","uint8")),ir?dn=ot(ir):!Wn&&!Jn&&jn&&kn&&(dn=oe(Kt,gn,Rn,"depth stencil","depth stencil")),y(!!Wn+!!Jn+!!ir<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var Dn=null;for(Wt=0;Wt<yn.length;++Wt)if(dt(yn[Wt],Kt,gn),y(!yn[Wt]||yn[Wt].texture&&Rx.indexOf(yn[Wt].texture._texture.format)>=0||yn[Wt].renderbuffer&&Gx.indexOf(yn[Wt].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+Wt+" is invalid"),yn[Wt]&&yn[Wt].texture){var vi=nu[yn[Wt].texture._texture.format]*ml[yn[Wt].texture._texture.type];Dn===null?Dn=vi:y(Dn===vi,"all color attachments much have the same number of bits per pixel.")}return dt(Bt,Kt,gn),y(!Bt||Bt.texture&&Bt.texture._texture.format===Lx||Bt.renderbuffer&&Bt.renderbuffer._renderbuffer.format===Fx,"invalid depth attachment for framebuffer object"),dt(sn,Kt,gn),y(!sn||sn.renderbuffer&&sn.renderbuffer._renderbuffer.format===Nx,"invalid stencil attachment for framebuffer object"),dt(dn,Kt,gn),y(!dn||dn.texture&&dn.texture._texture.format===cp||dn.renderbuffer&&dn.renderbuffer._renderbuffer.format===cp,"invalid depth-stencil attachment for framebuffer object"),We(Ue),Ue.width=Kt,Ue.height=gn,Ue.colorAttachments=yn,Ue.depthAttachment=Bt,Ue.stencilAttachment=sn,Ue.depthStencilAttachment=dn,Vt.color=yn.map(Te),Vt.depth=Te(Bt),Vt.stencil=Te(sn),Vt.depthStencil=Te(dn),Vt.width=Ue.width,Vt.height=Ue.height,He(Ue),Vt}function $t(At,tn){y(Ee.next!==Ue,"can not resize a framebuffer which is currently in use");var Wt=Math.max(At|0,1),Kt=Math.max(tn|0||Wt,1);if(Wt===Ue.width&&Kt===Ue.height)return Vt;for(var gn=Ue.colorAttachments,kn=0;kn<gn.length;++kn)nt(gn[kn],Wt,Kt);return nt(Ue.depthAttachment,Wt,Kt),nt(Ue.stencilAttachment,Wt,Kt),nt(Ue.depthStencilAttachment,Wt,Kt),Ue.width=Vt.width=Wt,Ue.height=Vt.height=Kt,He(Ue),Vt}return Vt(pt,at),n(Vt,{resize:$t,_reglType:"framebuffer",_framebuffer:Ue,destroy:function(){lt(Ue),We(Ue)},use:function(At){Ee.setFBO({framebuffer:Vt},At)}})}function kt(pt){var at=Array(6);function Ue($t){var At;y(at.indexOf(Ee.next)<0,"can not update framebuffer which is currently in use");var tn={color:null},Wt=0,Kt=null,gn="rgba",kn="uint8",jn=1;if(typeof $t=="number")Wt=$t|0;else if(!$t)Wt=1;else{y.type($t,"object","invalid arguments for framebuffer");var ln=$t;if("shape"in ln){var Vn=ln.shape;y(Array.isArray(Vn)&&Vn.length>=2,"invalid shape for framebuffer"),y(Vn[0]===Vn[1],"cube framebuffer must be square"),Wt=Vn[0]}else"radius"in ln&&(Wt=ln.radius|0),"width"in ln?(Wt=ln.width|0,"height"in ln&&y(ln.height===Wt,"must be square")):"height"in ln&&(Wt=ln.height|0);("color"in ln||"colors"in ln)&&(Kt=ln.color||ln.colors,Array.isArray(Kt)&&y(Kt.length===1||O.webgl_draw_buffers,"multiple render targets not supported")),Kt||("colorCount"in ln&&(jn=ln.colorCount|0,y(jn>0,"invalid color buffer count")),"colorType"in ln&&(y.oneOf(ln.colorType,it,"invalid color type"),kn=ln.colorType),"colorFormat"in ln&&(gn=ln.colorFormat,y.oneOf(ln.colorFormat,Ye,"invalid color format for texture"))),"depth"in ln&&(tn.depth=ln.depth),"stencil"in ln&&(tn.stencil=ln.stencil),"depthStencil"in ln&&(tn.depthStencil=ln.depthStencil)}var Mn;if(Kt)if(Array.isArray(Kt))for(Mn=[],At=0;At<Kt.length;++At)Mn[At]=Kt[At];else Mn=[Kt];else{Mn=Array(jn);var Bn={radius:Wt,format:gn,type:kn};for(At=0;At<jn;++At)Mn[At]=be.createCube(Bn)}for(tn.color=Array(Mn.length),At=0;At<Mn.length;++At){var Hn=Mn[At];y(typeof Hn=="function"&&Hn._reglType==="textureCube","invalid cube map"),Wt=Wt||Hn.width,y(Hn.width===Wt&&Hn.height===Wt,"invalid cube map shape"),tn.color[At]={target:pl,data:Mn[At]}}for(At=0;At<6;++At){for(var Wn=0;Wn<Mn.length;++Wn)tn.color[Wn].target=pl+At;At>0&&(tn.depth=at[0].depth,tn.stencil=at[0].stencil,tn.depthStencil=at[0].depthStencil),at[At]?at[At](tn):at[At]=ct(tn)}return n(Ue,{width:Wt,height:Wt,color:Mn})}function Vt($t){var At,tn=$t|0;if(y(tn>0&&tn<=H.maxCubeMapSize,"invalid radius for cube fbo"),tn===Ue.width)return Ue;var Wt=Ue.color;for(At=0;At<Wt.length;++At)Wt[At].resize(tn);for(At=0;At<6;++At)at[At].resize(tn);return Ue.width=Ue.height=tn,Ue}return Ue(pt),n(Ue,{faces:at,resize:Vt,_reglType:"framebufferCube",destroy:function(){at.forEach(function($t){$t.destroy()})}})}function Ht(){Ee.cur=null,Ee.next=null,Ee.dirty=!0,Ir(Ge).forEach(function(pt){pt.framebuffer=S.createFramebuffer(),He(pt)})}return n(Ee,{getFramebuffer:function(pt){if(typeof pt=="function"&&pt._reglType==="framebuffer"){var at=pt._framebuffer;if(at instanceof yt)return at}return null},create:ct,createCube:kt,clear:function(){Ir(Ge).forEach(lt)},restore:Ht})}var Hx=5126,up=34962;function ru(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=Hx,this.offset=0,this.stride=0,this.divisor=0}function Wx(S,O,H,be,Ne){for(var xe=H.maxAttributes,Ee=new Array(xe),Ye=0;Ye<xe;++Ye)Ee[Ye]=new ru;var Ke=0,it={},Qe={Record:ru,scope:{},state:Ee,currentVAO:null,targetVAO:null,restore:dt()?Ge:function(){},createVAO:yt,getVAO:ot,destroyBuffer:st,setVAO:dt()?oe:Te,clear:dt()?nt:function(){}};function st(We){for(var lt=0;lt<Ee.length;++lt){var He=Ee[lt];He.buffer===We&&(S.disableVertexAttribArray(lt),He.buffer=null)}}function dt(){return O.oes_vertex_array_object}function Ze(){return O.angle_instanced_arrays}function ot(We){return typeof We=="function"&&We._vao?We._vao:null}function oe(We){if(We!==Qe.currentVAO){var lt=dt();We?lt.bindVertexArrayOES(We.vao):lt.bindVertexArrayOES(null),Qe.currentVAO=We}}function Te(We){if(We!==Qe.currentVAO){if(We)We.bindAttrs();else for(var lt=Ze(),He=0;He<Ee.length;++He){var ct=Ee[He];ct.buffer?(S.enableVertexAttribArray(He),S.vertexAttribPointer(He,ct.size,ct.type,ct.normalized,ct.stride,ct.offfset),lt&&ct.divisor&&lt.vertexAttribDivisorANGLE(He,ct.divisor)):(S.disableVertexAttribArray(He),S.vertexAttrib4f(He,ct.x,ct.y,ct.z,ct.w))}Qe.currentVAO=We}}function nt(){Ir(it).forEach(function(We){We.destroy()})}function vt(){this.id=++Ke,this.attributes=[];var We=dt();We?this.vao=We.createVertexArrayOES():this.vao=null,it[this.id]=this,this.buffers=[]}vt.prototype.bindAttrs=function(){for(var We=Ze(),lt=this.attributes,He=0;He<lt.length;++He){var ct=lt[He];ct.buffer?(S.enableVertexAttribArray(He),S.bindBuffer(up,ct.buffer.buffer),S.vertexAttribPointer(He,ct.size,ct.type,ct.normalized,ct.stride,ct.offset),We&&ct.divisor&&We.vertexAttribDivisorANGLE(He,ct.divisor)):(S.disableVertexAttribArray(He),S.vertexAttrib4f(He,ct.x,ct.y,ct.z,ct.w))}for(var kt=lt.length;kt<xe;++kt)S.disableVertexAttribArray(kt)},vt.prototype.refresh=function(){var We=dt();We&&(We.bindVertexArrayOES(this.vao),this.bindAttrs(),Qe.currentVAO=this)},vt.prototype.destroy=function(){if(this.vao){var We=dt();this===Qe.currentVAO&&(Qe.currentVAO=null,We.bindVertexArrayOES(null)),We.deleteVertexArrayOES(this.vao),this.vao=null}it[this.id]&&(delete it[this.id],be.vaoCount-=1)};function Ge(){var We=dt();We&&Ir(it).forEach(function(lt){lt.refresh()})}function yt(We){var lt=new vt;be.vaoCount+=1;function He(ct){y(Array.isArray(ct),"arguments to vertex array constructor must be an array"),y(ct.length<xe,"too many attributes"),y(ct.length>0,"must specify at least one attribute");var kt={},Ht=lt.attributes;Ht.length=ct.length;for(var pt=0;pt<ct.length;++pt){var at=ct[pt],Ue=Ht[pt]=new ru,Vt=at.data||at;if(Array.isArray(Vt)||t(Vt)||ri(Vt)){var $t;lt.buffers[pt]&&($t=lt.buffers[pt],t(Vt)&&$t._buffer.byteLength>=Vt.byteLength?$t.subdata(Vt):($t.destroy(),lt.buffers[pt]=null)),lt.buffers[pt]||($t=lt.buffers[pt]=Ne.create(at,up,!1,!0)),Ue.buffer=Ne.getBuffer($t),Ue.size=Ue.buffer.dimension|0,Ue.normalized=!1,Ue.type=Ue.buffer.dtype,Ue.offset=0,Ue.stride=0,Ue.divisor=0,Ue.state=1,kt[pt]=1}else Ne.getBuffer(at)?(Ue.buffer=Ne.getBuffer(at),Ue.size=Ue.buffer.dimension|0,Ue.normalized=!1,Ue.type=Ue.buffer.dtype,Ue.offset=0,Ue.stride=0,Ue.divisor=0,Ue.state=1):Ne.getBuffer(at.buffer)?(Ue.buffer=Ne.getBuffer(at.buffer),Ue.size=(+at.size||Ue.buffer.dimension)|0,Ue.normalized=!!at.normalized||!1,"type"in at?(y.parameter(at.type,ma,"invalid buffer type"),Ue.type=ma[at.type]):Ue.type=Ue.buffer.dtype,Ue.offset=(at.offset||0)|0,Ue.stride=(at.stride||0)|0,Ue.divisor=(at.divisor||0)|0,Ue.state=1,y(Ue.size>=1&&Ue.size<=4,"size must be between 1 and 4"),y(Ue.offset>=0,"invalid offset"),y(Ue.stride>=0&&Ue.stride<=255,"stride must be between 0 and 255"),y(Ue.divisor>=0,"divisor must be positive"),y(!Ue.divisor||!!O.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in at?(y(pt>0,"first attribute must not be a constant"),Ue.x=+at.x||0,Ue.y=+at.y||0,Ue.z=+at.z||0,Ue.w=+at.w||0,Ue.state=2):y(!1,"invalid attribute spec for location "+pt)}for(var At=0;At<lt.buffers.length;++At)!kt[At]&&lt.buffers[At]&&(lt.buffers[At].destroy(),lt.buffers[At]=null);return lt.refresh(),He}return He.destroy=function(){for(var ct=0;ct<lt.buffers.length;++ct)lt.buffers[ct]&&lt.buffers[ct].destroy();lt.buffers.length=0,lt.destroy()},He._vao=lt,He._reglType="vao",He(We)}return Qe}var fp=35632,qx=35633,Xx=35718,jx=35721;function $x(S,O,H,be){var Ne={},xe={};function Ee(oe,Te,nt,vt){this.name=oe,this.id=Te,this.location=nt,this.info=vt}function Ye(oe,Te){for(var nt=0;nt<oe.length;++nt)if(oe[nt].id===Te.id){oe[nt].location=Te.location;return}oe.push(Te)}function Ke(oe,Te,nt){var vt=oe===fp?Ne:xe,Ge=vt[Te];if(!Ge){var yt=O.str(Te);Ge=S.createShader(oe),S.shaderSource(Ge,yt),S.compileShader(Ge),y.shaderError(S,Ge,yt,oe,nt),vt[Te]=Ge}return Ge}var it={},Qe=[],st=0;function dt(oe,Te){this.id=st++,this.fragId=oe,this.vertId=Te,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,be.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function Ze(oe,Te,nt){var vt,Ge,yt=Ke(fp,oe.fragId),We=Ke(qx,oe.vertId),lt=oe.program=S.createProgram();if(S.attachShader(lt,yt),S.attachShader(lt,We),nt)for(vt=0;vt<nt.length;++vt){var He=nt[vt];S.bindAttribLocation(lt,He[0],He[1])}S.linkProgram(lt),y.linkError(S,lt,O.str(oe.fragId),O.str(oe.vertId),Te);var ct=S.getProgramParameter(lt,Xx);be.profile&&(oe.stats.uniformsCount=ct);var kt=oe.uniforms;for(vt=0;vt<ct;++vt)if(Ge=S.getActiveUniform(lt,vt),Ge)if(Ge.size>1)for(var Ht=0;Ht<Ge.size;++Ht){var pt=Ge.name.replace("[0]","["+Ht+"]");Ye(kt,new Ee(pt,O.id(pt),S.getUniformLocation(lt,pt),Ge))}else Ye(kt,new Ee(Ge.name,O.id(Ge.name),S.getUniformLocation(lt,Ge.name),Ge));var at=S.getProgramParameter(lt,jx);be.profile&&(oe.stats.attributesCount=at);var Ue=oe.attributes;for(vt=0;vt<at;++vt)Ge=S.getActiveAttrib(lt,vt),Ge&&Ye(Ue,new Ee(Ge.name,O.id(Ge.name),S.getAttribLocation(lt,Ge.name),Ge))}be.profile&&(H.getMaxUniformsCount=function(){var oe=0;return Qe.forEach(function(Te){Te.stats.uniformsCount>oe&&(oe=Te.stats.uniformsCount)}),oe},H.getMaxAttributesCount=function(){var oe=0;return Qe.forEach(function(Te){Te.stats.attributesCount>oe&&(oe=Te.stats.attributesCount)}),oe});function ot(){Ne={},xe={};for(var oe=0;oe<Qe.length;++oe)Ze(Qe[oe],null,Qe[oe].attributes.map(function(Te){return[Te.location,Te.name]}))}return{clear:function(){var oe=S.deleteShader.bind(S);Ir(Ne).forEach(oe),Ne={},Ir(xe).forEach(oe),xe={},Qe.forEach(function(Te){S.deleteProgram(Te.program)}),Qe.length=0,it={},H.shaderCount=0},program:function(oe,Te,nt,vt){y.command(oe>=0,"missing vertex shader",nt),y.command(Te>=0,"missing fragment shader",nt);var Ge=it[Te];Ge||(Ge=it[Te]={});var yt=Ge[oe];if(yt&&(yt.refCount++,!vt))return yt;var We=new dt(Te,oe);return H.shaderCount++,Ze(We,nt,vt),yt||(Ge[oe]=We),Qe.push(We),n(We,{destroy:function(){if(We.refCount--,We.refCount<=0){S.deleteProgram(We.program);var lt=Qe.indexOf(We);Qe.splice(lt,1),H.shaderCount--}Ge[We.vertId].refCount<=0&&(S.deleteShader(xe[We.vertId]),delete xe[We.vertId],delete it[We.fragId][We.vertId]),Object.keys(it[We.fragId]).length||(S.deleteShader(Ne[We.fragId]),delete Ne[We.fragId],delete it[We.fragId])}})},restore:ot,shader:Ke,frag:-1,vert:-1}}var Yx=6408,oo=5121,Zx=3333,vl=5126;function Kx(S,O,H,be,Ne,xe,Ee){function Ye(Qe){var st;O.next===null?(y(Ne.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),st=oo):(y(O.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),st=O.next.colorAttachments[0].texture._texture.type,xe.oes_texture_float?(y(st===oo||st===vl,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),st===vl&&y(Ee.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):y(st===oo,"Reading from a framebuffer is only allowed for the type 'uint8'"));var dt=0,Ze=0,ot=be.framebufferWidth,oe=be.framebufferHeight,Te=null;t(Qe)?Te=Qe:Qe&&(y.type(Qe,"object","invalid arguments to regl.read()"),dt=Qe.x|0,Ze=Qe.y|0,y(dt>=0&&dt<be.framebufferWidth,"invalid x offset for regl.read"),y(Ze>=0&&Ze<be.framebufferHeight,"invalid y offset for regl.read"),ot=(Qe.width||be.framebufferWidth-dt)|0,oe=(Qe.height||be.framebufferHeight-Ze)|0,Te=Qe.data||null),Te&&(st===oo?y(Te instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):st===vl&&y(Te instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),y(ot>0&&ot+dt<=be.framebufferWidth,"invalid width for read pixels"),y(oe>0&&oe+Ze<=be.framebufferHeight,"invalid height for read pixels"),H();var nt=ot*oe*4;return Te||(st===oo?Te=new Uint8Array(nt):st===vl&&(Te=Te||new Float32Array(nt))),y.isTypedArray(Te,"data buffer for regl.read() must be a typedarray"),y(Te.byteLength>=nt,"data buffer for regl.read() too small"),S.pixelStorei(Zx,4),S.readPixels(dt,Ze,ot,oe,Yx,st,Te),Te}function Ke(Qe){var st;return O.setFBO({framebuffer:Qe.framebuffer},function(){st=Ye(Qe)}),st}function it(Qe){return!Qe||!("framebuffer"in Qe)?Ye(Qe):Ke(Qe)}return it}function ls(S){return Array.prototype.slice.call(S)}function cs(S){return ls(S).join("")}function Qx(){var S=0,O=[],H=[];function be(st){for(var dt=0;dt<H.length;++dt)if(H[dt]===st)return O[dt];var Ze="g"+S++;return O.push(Ze),H.push(st),Ze}function Ne(){var st=[];function dt(){st.push.apply(st,ls(arguments))}var Ze=[];function ot(){var oe="v"+S++;return Ze.push(oe),arguments.length>0&&(st.push(oe,"="),st.push.apply(st,ls(arguments)),st.push(";")),oe}return n(dt,{def:ot,toString:function(){return cs([Ze.length>0?"var "+Ze.join(",")+";":"",cs(st)])}})}function xe(){var st=Ne(),dt=Ne(),Ze=st.toString,ot=dt.toString;function oe(Te,nt){dt(Te,nt,"=",st.def(Te,nt),";")}return n(function(){st.apply(st,ls(arguments))},{def:st.def,entry:st,exit:dt,save:oe,set:function(Te,nt,vt){oe(Te,nt),st(Te,nt,"=",vt,";")},toString:function(){return Ze()+ot()}})}function Ee(){var st=cs(arguments),dt=xe(),Ze=xe(),ot=dt.toString,oe=Ze.toString;return n(dt,{then:function(){return dt.apply(dt,ls(arguments)),this},else:function(){return Ze.apply(Ze,ls(arguments)),this},toString:function(){var Te=oe();return Te&&(Te="else{"+Te+"}"),cs(["if(",st,"){",ot(),"}",Te])}})}var Ye=Ne(),Ke={};function it(st,dt){var Ze=[];function ot(){var Ge="a"+Ze.length;return Ze.push(Ge),Ge}dt=dt||0;for(var oe=0;oe<dt;++oe)ot();var Te=xe(),nt=Te.toString,vt=Ke[st]=n(Te,{arg:ot,toString:function(){return cs(["function(",Ze.join(),"){",nt(),"}"])}});return vt}function Qe(){var st=['"use strict";',Ye,"return {"];Object.keys(Ke).forEach(function(ot){st.push('"',ot,'":',Ke[ot].toString(),",")}),st.push("}");var dt=cs(st).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),Ze=Function.apply(null,O.concat(dt));return Ze.apply(null,H)}return{global:Ye,link:be,block:Ne,proc:it,scope:xe,cond:Ee,compile:Qe}}var us="xyzw".split(""),hp=5121,fs=1,iu=2,au=0,su=1,ou=2,lu=3,gl=4,dp=5,pp=6,mp="dither",vp="blend.enable",gp="blend.color",cu="blend.equation",uu="blend.func",_p="depth.enable",xp="depth.func",yp="depth.range",bp="depth.mask",fu="colorMask",wp="cull.enable",Sp="cull.face",hu="frontFace",du="lineWidth",Mp="polygonOffset.enable",pu="polygonOffset.offset",Ep="sample.alpha",Tp="sample.enable",mu="sample.coverage",Ap="stencil.enable",Cp="stencil.mask",vu="stencil.func",gu="stencil.opFront",lo="stencil.opBack",Pp="scissor.enable",_l="scissor.box",Ci="viewport",co="profile",ya="framebuffer",uo="vert",fo="frag",ba="elements",wa="primitive",Sa="count",xl="offset",yl="instances",ho="vao",_u="Width",xu="Height",hs=ya+_u,ds=ya+xu,Jx=Ci+_u,e1=Ci+xu,Lp="drawingBuffer",Rp=Lp+_u,Dp=Lp+xu,t1=[uu,cu,vu,gu,lo,mu,Ci,_l,pu],ps=34962,n1=34963,r1=35632,i1=35633,Ip=3553,a1=34067,s1=2884,o1=3042,l1=3024,c1=2960,u1=2929,f1=3089,h1=32823,d1=32926,p1=32928,yu=5126,bl=35664,wl=35665,Sl=35666,bu=5124,Ml=35667,El=35668,Tl=35669,wu=35670,Al=35671,Cl=35672,Pl=35673,po=35674,mo=35675,vo=35676,go=35678,_o=35680,Op=4,xo=1028,Ma=1029,Fp=2304,Su=2305,m1=32775,v1=32776,g1=519,Xi=7680,Np=0,zp=1,kp=32774,_1=513,Bp=36160,x1=36064,mi={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},Up=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],ms={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},ji={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},Gp={frag:r1,vert:i1},Mu={cw:Fp,ccw:Su};function Ll(S){return Array.isArray(S)||t(S)||ri(S)}function Vp(S){return S.sort(function(O,H){return O===Ci?-1:H===Ci?1:O<H?-1:1})}function _r(S,O,H,be){this.thisDep=S,this.contextDep=O,this.propDep=H,this.append=be}function $i(S){return S&&!(S.thisDep||S.contextDep||S.propDep)}function zn(S){return new _r(!1,!1,!1,S)}function Mr(S,O){var H=S.type;if(H===au){var be=S.data.length;return new _r(!0,be>=1,be>=2,O)}else if(H===gl){var Ne=S.data;return new _r(Ne.thisDep,Ne.contextDep,Ne.propDep,O)}else{if(H===dp)return new _r(!1,!1,!1,O);if(H===pp){for(var xe=!1,Ee=!1,Ye=!1,Ke=0;Ke<S.data.length;++Ke){var it=S.data[Ke];if(it.type===su)Ye=!0;else if(it.type===ou)Ee=!0;else if(it.type===lu)xe=!0;else if(it.type===au){xe=!0;var Qe=it.data;Qe>=1&&(Ee=!0),Qe>=2&&(Ye=!0)}else it.type===gl&&(xe=xe||it.data.thisDep,Ee=Ee||it.data.contextDep,Ye=Ye||it.data.propDep)}return new _r(xe,Ee,Ye,O)}else return new _r(H===lu,H===ou,H===su,O)}}var Hp=new _r(!1,!1,!1,function(){});function y1(S,O,H,be,Ne,xe,Ee,Ye,Ke,it,Qe,st,dt,Ze,ot){var oe=it.Record,Te={add:32774,subtract:32778,"reverse subtract":32779};H.ext_blend_minmax&&(Te.min=m1,Te.max=v1);var nt=H.angle_instanced_arrays,vt=H.webgl_draw_buffers,Ge={dirty:!0,profile:ot.profile},yt={},We=[],lt={},He={};function ct(k){return k.replace(".","_")}function kt(k,R,j){var ie=ct(k);We.push(k),yt[ie]=Ge[ie]=!!j,lt[ie]=R}function Ht(k,R,j){var ie=ct(k);We.push(k),Array.isArray(j)?(Ge[ie]=j.slice(),yt[ie]=j.slice()):Ge[ie]=yt[ie]=j,He[ie]=R}kt(mp,l1),kt(vp,o1),Ht(gp,"blendColor",[0,0,0,0]),Ht(cu,"blendEquationSeparate",[kp,kp]),Ht(uu,"blendFuncSeparate",[zp,Np,zp,Np]),kt(_p,u1,!0),Ht(xp,"depthFunc",_1),Ht(yp,"depthRange",[0,1]),Ht(bp,"depthMask",!0),Ht(fu,fu,[!0,!0,!0,!0]),kt(wp,s1),Ht(Sp,"cullFace",Ma),Ht(hu,hu,Su),Ht(du,du,1),kt(Mp,h1),Ht(pu,"polygonOffset",[0,0]),kt(Ep,d1),kt(Tp,p1),Ht(mu,"sampleCoverage",[1,!1]),kt(Ap,c1),Ht(Cp,"stencilMask",-1),Ht(vu,"stencilFunc",[g1,0,-1]),Ht(gu,"stencilOpSeparate",[xo,Xi,Xi,Xi]),Ht(lo,"stencilOpSeparate",[Ma,Xi,Xi,Xi]),kt(Pp,f1),Ht(_l,"scissor",[0,0,S.drawingBufferWidth,S.drawingBufferHeight]),Ht(Ci,Ci,[0,0,S.drawingBufferWidth,S.drawingBufferHeight]);var pt={gl:S,context:dt,strings:O,next:yt,current:Ge,draw:st,elements:xe,buffer:Ne,shader:Qe,attributes:it.state,vao:it,uniforms:Ke,framebuffer:Ye,extensions:H,timer:Ze,isBufferArgs:Ll},at={primTypes:es,compareFuncs:ms,blendFuncs:mi,blendEquations:Te,stencilOps:ji,glTypes:ma,orientationType:Mu};y.optional(function(){pt.isArrayLike=Ln}),vt&&(at.backBuffer=[Ma],at.drawBuffer=Xe(be.maxDrawbuffers,function(k){return k===0?[0]:Xe(k,function(R){return x1+R})}));var Ue=0;function Vt(){var k=Qx(),R=k.link,j=k.global;k.id=Ue++,k.batchId="0";var ie=R(pt),ue=k.shared={props:"a0"};Object.keys(pt).forEach(function(X){ue[X]=j.def(ie,".",X)}),y.optional(function(){k.CHECK=R(y),k.commandStr=y.guessCommand(),k.command=R(k.commandStr),k.assert=function(X,N,te){X("if(!(",N,"))",this.CHECK,".commandRaise(",R(te),",",this.command,");")},at.invalidBlendCombinations=Up});var K=k.next={},$=k.current={};Object.keys(He).forEach(function(X){Array.isArray(Ge[X])&&(K[X]=j.def(ue.next,".",X),$[X]=j.def(ue.current,".",X))});var ee=k.constants={};Object.keys(at).forEach(function(X){ee[X]=j.def(JSON.stringify(at[X]))}),k.invoke=function(X,N){switch(N.type){case au:var te=["this",ue.context,ue.props,k.batchId];return X.def(R(N.data),".call(",te.slice(0,Math.max(N.data.length+1,4)),")");case su:return X.def(ue.props,N.data);case ou:return X.def(ue.context,N.data);case lu:return X.def("this",N.data);case gl:return N.data.append(k,X),N.data.ref;case dp:return N.data.toString();case pp:return N.data.map(function(he){return k.invoke(X,he)})}},k.attribCache={};var B={};return k.scopeAttrib=function(X){var N=O.id(X);if(N in B)return B[N];var te=it.scope[N];te||(te=it.scope[N]=new oe);var he=B[N]=R(te);return he},k}function $t(k){var R=k.static,j=k.dynamic,ie;if(co in R){var ue=!!R[co];ie=zn(function($,ee){return ue}),ie.enable=ue}else if(co in j){var K=j[co];ie=Mr(K,function($,ee){return $.invoke(ee,K)})}return ie}function At(k,R){var j=k.static,ie=k.dynamic;if(ya in j){var ue=j[ya];return ue?(ue=Ye.getFramebuffer(ue),y.command(ue,"invalid framebuffer object"),zn(function($,ee){var B=$.link(ue),X=$.shared;ee.set(X.framebuffer,".next",B);var N=X.context;return ee.set(N,"."+hs,B+".width"),ee.set(N,"."+ds,B+".height"),B})):zn(function($,ee){var B=$.shared;ee.set(B.framebuffer,".next","null");var X=B.context;return ee.set(X,"."+hs,X+"."+Rp),ee.set(X,"."+ds,X+"."+Dp),"null"})}else if(ya in ie){var K=ie[ya];return Mr(K,function($,ee){var B=$.invoke(ee,K),X=$.shared,N=X.framebuffer,te=ee.def(N,".getFramebuffer(",B,")");y.optional(function(){$.assert(ee,"!"+B+"||"+te,"invalid framebuffer object")}),ee.set(N,".next",te);var he=X.context;return ee.set(he,"."+hs,te+"?"+te+".width:"+he+"."+Rp),ee.set(he,"."+ds,te+"?"+te+".height:"+he+"."+Dp),te})}else return null}function tn(k,R,j){var ie=k.static,ue=k.dynamic;function K(B){if(B in ie){var X=ie[B];y.commandType(X,"object","invalid "+B,j.commandStr);var N=!0,te=X.x|0,he=X.y|0,Ie,ze;return"width"in X?(Ie=X.width|0,y.command(Ie>=0,"invalid "+B,j.commandStr)):N=!1,"height"in X?(ze=X.height|0,y.command(ze>=0,"invalid "+B,j.commandStr)):N=!1,new _r(!N&&R&&R.thisDep,!N&&R&&R.contextDep,!N&&R&&R.propDep,function(zt,Zt){var Ct=zt.shared.context,Ut=Ie;"width"in X||(Ut=Zt.def(Ct,".",hs,"-",te));var Xt=ze;return"height"in X||(Xt=Zt.def(Ct,".",ds,"-",he)),[te,he,Ut,Xt]})}else if(B in ue){var Pe=ue[B],et=Mr(Pe,function(zt,Zt){var Ct=zt.invoke(Zt,Pe);y.optional(function(){zt.assert(Zt,Ct+"&&typeof "+Ct+'==="object"',"invalid "+B)});var Ut=zt.shared.context,Xt=Zt.def(Ct,".x|0"),_n=Zt.def(Ct,".y|0"),An=Zt.def('"width" in ',Ct,"?",Ct,".width|0:","(",Ut,".",hs,"-",Xt,")"),xr=Zt.def('"height" in ',Ct,"?",Ct,".height|0:","(",Ut,".",ds,"-",_n,")");return y.optional(function(){zt.assert(Zt,An+">=0&&"+xr+">=0","invalid "+B)}),[Xt,_n,An,xr]});return R&&(et.thisDep=et.thisDep||R.thisDep,et.contextDep=et.contextDep||R.contextDep,et.propDep=et.propDep||R.propDep),et}else return R?new _r(R.thisDep,R.contextDep,R.propDep,function(zt,Zt){var Ct=zt.shared.context;return[0,0,Zt.def(Ct,".",hs),Zt.def(Ct,".",ds)]}):null}var $=K(Ci);if($){var ee=$;$=new _r($.thisDep,$.contextDep,$.propDep,function(B,X){var N=ee.append(B,X),te=B.shared.context;return X.set(te,"."+Jx,N[2]),X.set(te,"."+e1,N[3]),N})}return{viewport:$,scissor_box:K(_l)}}function Wt(k,R){var j=k.static,ie=typeof j[fo]=="string"&&typeof j[uo]=="string";if(ie){if(Object.keys(R.dynamic).length>0)return null;var ue=R.static,K=Object.keys(ue);if(K.length>0&&typeof ue[K[0]]=="number"){for(var $=[],ee=0;ee<K.length;++ee)y(typeof ue[K[ee]]=="number","must specify all vertex attribute locations when using vaos"),$.push([ue[K[ee]]|0,K[ee]]);return $}}return null}function Kt(k,R,j){var ie=k.static,ue=k.dynamic;function K(N){if(N in ie){var te=O.id(ie[N]);y.optional(function(){Qe.shader(Gp[N],te,y.guessCommand())});var he=zn(function(){return te});return he.id=te,he}else if(N in ue){var Ie=ue[N];return Mr(Ie,function(ze,Pe){var et=ze.invoke(Pe,Ie),zt=Pe.def(ze.shared.strings,".id(",et,")");return y.optional(function(){Pe(ze.shared.shader,".shader(",Gp[N],",",zt,",",ze.command,");")}),zt})}return null}var $=K(fo),ee=K(uo),B=null,X;return $i($)&&$i(ee)?(B=Qe.program(ee.id,$.id,null,j),X=zn(function(N,te){return N.link(B)})):X=new _r($&&$.thisDep||ee&&ee.thisDep,$&&$.contextDep||ee&&ee.contextDep,$&&$.propDep||ee&&ee.propDep,function(N,te){var he=N.shared.shader,Ie;$?Ie=$.append(N,te):Ie=te.def(he,".",fo);var ze;ee?ze=ee.append(N,te):ze=te.def(he,".",uo);var Pe=he+".program("+ze+","+Ie;return y.optional(function(){Pe+=","+N.command}),te.def(Pe+")")}),{frag:$,vert:ee,progVar:X,program:B}}function gn(k,R){var j=k.static,ie=k.dynamic;function ue(){if(ba in j){var N=j[ba];Ll(N)?N=xe.getElements(xe.create(N,!0)):N&&(N=xe.getElements(N),y.command(N,"invalid elements",R.commandStr));var te=zn(function(Ie,ze){if(N){var Pe=Ie.link(N);return Ie.ELEMENTS=Pe,Pe}return Ie.ELEMENTS=null,null});return te.value=N,te}else if(ba in ie){var he=ie[ba];return Mr(he,function(Ie,ze){var Pe=Ie.shared,et=Pe.isBufferArgs,zt=Pe.elements,Zt=Ie.invoke(ze,he),Ct=ze.def("null"),Ut=ze.def(et,"(",Zt,")"),Xt=Ie.cond(Ut).then(Ct,"=",zt,".createStream(",Zt,");").else(Ct,"=",zt,".getElements(",Zt,");");return y.optional(function(){Ie.assert(Xt.else,"!"+Zt+"||"+Ct,"invalid elements")}),ze.entry(Xt),ze.exit(Ie.cond(Ut).then(zt,".destroyStream(",Ct,");")),Ie.ELEMENTS=Ct,Ct})}return null}var K=ue();function $(){if(wa in j){var N=j[wa];return y.commandParameter(N,es,"invalid primitve",R.commandStr),zn(function(he,Ie){return es[N]})}else if(wa in ie){var te=ie[wa];return Mr(te,function(he,Ie){var ze=he.constants.primTypes,Pe=he.invoke(Ie,te);return y.optional(function(){he.assert(Ie,Pe+" in "+ze,"invalid primitive, must be one of "+Object.keys(es))}),Ie.def(ze,"[",Pe,"]")})}else if(K)return $i(K)?K.value?zn(function(he,Ie){return Ie.def(he.ELEMENTS,".primType")}):zn(function(){return Op}):new _r(K.thisDep,K.contextDep,K.propDep,function(he,Ie){var ze=he.ELEMENTS;return Ie.def(ze,"?",ze,".primType:",Op)});return null}function ee(N,te){if(N in j){var he=j[N]|0;return y.command(!te||he>=0,"invalid "+N,R.commandStr),zn(function(ze,Pe){return te&&(ze.OFFSET=he),he})}else if(N in ie){var Ie=ie[N];return Mr(Ie,function(ze,Pe){var et=ze.invoke(Pe,Ie);return te&&(ze.OFFSET=et,y.optional(function(){ze.assert(Pe,et+">=0","invalid "+N)})),et})}else if(te&&K)return zn(function(ze,Pe){return ze.OFFSET="0",0});return null}var B=ee(xl,!0);function X(){if(Sa in j){var N=j[Sa]|0;return y.command(typeof N=="number"&&N>=0,"invalid vertex count",R.commandStr),zn(function(){return N})}else if(Sa in ie){var te=ie[Sa];return Mr(te,function(ze,Pe){var et=ze.invoke(Pe,te);return y.optional(function(){ze.assert(Pe,"typeof "+et+'==="number"&&'+et+">=0&&"+et+"===("+et+"|0)","invalid vertex count")}),et})}else if(K)if($i(K)){if(K)return B?new _r(B.thisDep,B.contextDep,B.propDep,function(ze,Pe){var et=Pe.def(ze.ELEMENTS,".vertCount-",ze.OFFSET);return y.optional(function(){ze.assert(Pe,et+">=0","invalid vertex offset/element buffer too small")}),et}):zn(function(ze,Pe){return Pe.def(ze.ELEMENTS,".vertCount")});var he=zn(function(){return-1});return y.optional(function(){he.MISSING=!0}),he}else{var Ie=new _r(K.thisDep||B.thisDep,K.contextDep||B.contextDep,K.propDep||B.propDep,function(ze,Pe){var et=ze.ELEMENTS;return ze.OFFSET?Pe.def(et,"?",et,".vertCount-",ze.OFFSET,":-1"):Pe.def(et,"?",et,".vertCount:-1")});return y.optional(function(){Ie.DYNAMIC=!0}),Ie}return null}return{elements:K,primitive:$(),count:X(),instances:ee(yl,!1),offset:B}}function kn(k,R){var j=k.static,ie=k.dynamic,ue={};return We.forEach(function(K){var $=ct(K);function ee(B,X){if(K in j){var N=B(j[K]);ue[$]=zn(function(){return N})}else if(K in ie){var te=ie[K];ue[$]=Mr(te,function(he,Ie){return X(he,Ie,he.invoke(Ie,te))})}}switch(K){case wp:case vp:case mp:case Ap:case _p:case Pp:case Mp:case Ep:case Tp:case bp:return ee(function(B){return y.commandType(B,"boolean",K,R.commandStr),B},function(B,X,N){return y.optional(function(){B.assert(X,"typeof "+N+'==="boolean"',"invalid flag "+K,B.commandStr)}),N});case xp:return ee(function(B){return y.commandParameter(B,ms,"invalid "+K,R.commandStr),ms[B]},function(B,X,N){var te=B.constants.compareFuncs;return y.optional(function(){B.assert(X,N+" in "+te,"invalid "+K+", must be one of "+Object.keys(ms))}),X.def(te,"[",N,"]")});case yp:return ee(function(B){return y.command(Ln(B)&&B.length===2&&typeof B[0]=="number"&&typeof B[1]=="number"&&B[0]<=B[1],"depth range is 2d array",R.commandStr),B},function(B,X,N){y.optional(function(){B.assert(X,B.shared.isArrayLike+"("+N+")&&"+N+".length===2&&typeof "+N+'[0]==="number"&&typeof '+N+'[1]==="number"&&'+N+"[0]<="+N+"[1]","depth range must be a 2d array")});var te=X.def("+",N,"[0]"),he=X.def("+",N,"[1]");return[te,he]});case uu:return ee(function(B){y.commandType(B,"object","blend.func",R.commandStr);var X="srcRGB"in B?B.srcRGB:B.src,N="srcAlpha"in B?B.srcAlpha:B.src,te="dstRGB"in B?B.dstRGB:B.dst,he="dstAlpha"in B?B.dstAlpha:B.dst;return y.commandParameter(X,mi,$+".srcRGB",R.commandStr),y.commandParameter(N,mi,$+".srcAlpha",R.commandStr),y.commandParameter(te,mi,$+".dstRGB",R.commandStr),y.commandParameter(he,mi,$+".dstAlpha",R.commandStr),y.command(Up.indexOf(X+", "+te)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+X+", "+te+")",R.commandStr),[mi[X],mi[te],mi[N],mi[he]]},function(B,X,N){var te=B.constants.blendFuncs;y.optional(function(){B.assert(X,N+"&&typeof "+N+'==="object"',"invalid blend func, must be an object")});function he(Ct,Ut){var Xt=X.def('"',Ct,Ut,'" in ',N,"?",N,".",Ct,Ut,":",N,".",Ct);return y.optional(function(){B.assert(X,Xt+" in "+te,"invalid "+K+"."+Ct+Ut+", must be one of "+Object.keys(mi))}),Xt}var Ie=he("src","RGB"),ze=he("dst","RGB");y.optional(function(){var Ct=B.constants.invalidBlendCombinations;B.assert(X,Ct+".indexOf("+Ie+'+", "+'+ze+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var Pe=X.def(te,"[",Ie,"]"),et=X.def(te,"[",he("src","Alpha"),"]"),zt=X.def(te,"[",ze,"]"),Zt=X.def(te,"[",he("dst","Alpha"),"]");return[Pe,zt,et,Zt]});case cu:return ee(function(B){if(typeof B=="string")return y.commandParameter(B,Te,"invalid "+K,R.commandStr),[Te[B],Te[B]];if(typeof B=="object")return y.commandParameter(B.rgb,Te,K+".rgb",R.commandStr),y.commandParameter(B.alpha,Te,K+".alpha",R.commandStr),[Te[B.rgb],Te[B.alpha]];y.commandRaise("invalid blend.equation",R.commandStr)},function(B,X,N){var te=B.constants.blendEquations,he=X.def(),Ie=X.def(),ze=B.cond("typeof ",N,'==="string"');return y.optional(function(){function Pe(et,zt,Zt){B.assert(et,Zt+" in "+te,"invalid "+zt+", must be one of "+Object.keys(Te))}Pe(ze.then,K,N),B.assert(ze.else,N+"&&typeof "+N+'==="object"',"invalid "+K),Pe(ze.else,K+".rgb",N+".rgb"),Pe(ze.else,K+".alpha",N+".alpha")}),ze.then(he,"=",Ie,"=",te,"[",N,"];"),ze.else(he,"=",te,"[",N,".rgb];",Ie,"=",te,"[",N,".alpha];"),X(ze),[he,Ie]});case gp:return ee(function(B){return y.command(Ln(B)&&B.length===4,"blend.color must be a 4d array",R.commandStr),Xe(4,function(X){return+B[X]})},function(B,X,N){return y.optional(function(){B.assert(X,B.shared.isArrayLike+"("+N+")&&"+N+".length===4","blend.color must be a 4d array")}),Xe(4,function(te){return X.def("+",N,"[",te,"]")})});case Cp:return ee(function(B){return y.commandType(B,"number",$,R.commandStr),B|0},function(B,X,N){return y.optional(function(){B.assert(X,"typeof "+N+'==="number"',"invalid stencil.mask")}),X.def(N,"|0")});case vu:return ee(function(B){y.commandType(B,"object",$,R.commandStr);var X=B.cmp||"keep",N=B.ref||0,te="mask"in B?B.mask:-1;return y.commandParameter(X,ms,K+".cmp",R.commandStr),y.commandType(N,"number",K+".ref",R.commandStr),y.commandType(te,"number",K+".mask",R.commandStr),[ms[X],N,te]},function(B,X,N){var te=B.constants.compareFuncs;y.optional(function(){function Pe(){B.assert(X,Array.prototype.join.call(arguments,""),"invalid stencil.func")}Pe(N+"&&typeof ",N,'==="object"'),Pe('!("cmp" in ',N,")||(",N,".cmp in ",te,")")});var he=X.def('"cmp" in ',N,"?",te,"[",N,".cmp]",":",Xi),Ie=X.def(N,".ref|0"),ze=X.def('"mask" in ',N,"?",N,".mask|0:-1");return[he,Ie,ze]});case gu:case lo:return ee(function(B){y.commandType(B,"object",$,R.commandStr);var X=B.fail||"keep",N=B.zfail||"keep",te=B.zpass||"keep";return y.commandParameter(X,ji,K+".fail",R.commandStr),y.commandParameter(N,ji,K+".zfail",R.commandStr),y.commandParameter(te,ji,K+".zpass",R.commandStr),[K===lo?Ma:xo,ji[X],ji[N],ji[te]]},function(B,X,N){var te=B.constants.stencilOps;y.optional(function(){B.assert(X,N+"&&typeof "+N+'==="object"',"invalid "+K)});function he(Ie){return y.optional(function(){B.assert(X,'!("'+Ie+'" in '+N+")||("+N+"."+Ie+" in "+te+")","invalid "+K+"."+Ie+", must be one of "+Object.keys(ji))}),X.def('"',Ie,'" in ',N,"?",te,"[",N,".",Ie,"]:",Xi)}return[K===lo?Ma:xo,he("fail"),he("zfail"),he("zpass")]});case pu:return ee(function(B){y.commandType(B,"object",$,R.commandStr);var X=B.factor|0,N=B.units|0;return y.commandType(X,"number",$+".factor",R.commandStr),y.commandType(N,"number",$+".units",R.commandStr),[X,N]},function(B,X,N){y.optional(function(){B.assert(X,N+"&&typeof "+N+'==="object"',"invalid "+K)});var te=X.def(N,".factor|0"),he=X.def(N,".units|0");return[te,he]});case Sp:return ee(function(B){var X=0;return B==="front"?X=xo:B==="back"&&(X=Ma),y.command(!!X,$,R.commandStr),X},function(B,X,N){return y.optional(function(){B.assert(X,N+'==="front"||'+N+'==="back"',"invalid cull.face")}),X.def(N,'==="front"?',xo,":",Ma)});case du:return ee(function(B){return y.command(typeof B=="number"&&B>=be.lineWidthDims[0]&&B<=be.lineWidthDims[1],"invalid line width, must be a positive number between "+be.lineWidthDims[0]+" and "+be.lineWidthDims[1],R.commandStr),B},function(B,X,N){return y.optional(function(){B.assert(X,"typeof "+N+'==="number"&&'+N+">="+be.lineWidthDims[0]+"&&"+N+"<="+be.lineWidthDims[1],"invalid line width")}),N});case hu:return ee(function(B){return y.commandParameter(B,Mu,$,R.commandStr),Mu[B]},function(B,X,N){return y.optional(function(){B.assert(X,N+'==="cw"||'+N+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),X.def(N+'==="cw"?'+Fp+":"+Su)});case fu:return ee(function(B){return y.command(Ln(B)&&B.length===4,"color.mask must be length 4 array",R.commandStr),B.map(function(X){return!!X})},function(B,X,N){return y.optional(function(){B.assert(X,B.shared.isArrayLike+"("+N+")&&"+N+".length===4","invalid color.mask")}),Xe(4,function(te){return"!!"+N+"["+te+"]"})});case mu:return ee(function(B){y.command(typeof B=="object"&&B,$,R.commandStr);var X="value"in B?B.value:1,N=!!B.invert;return y.command(typeof X=="number"&&X>=0&&X<=1,"sample.coverage.value must be a number between 0 and 1",R.commandStr),[X,N]},function(B,X,N){y.optional(function(){B.assert(X,N+"&&typeof "+N+'==="object"',"invalid sample.coverage")});var te=X.def('"value" in ',N,"?+",N,".value:1"),he=X.def("!!",N,".invert");return[te,he]})}}),ue}function jn(k,R){var j=k.static,ie=k.dynamic,ue={};return Object.keys(j).forEach(function(K){var $=j[K],ee;if(typeof $=="number"||typeof $=="boolean")ee=zn(function(){return $});else if(typeof $=="function"){var B=$._reglType;B==="texture2d"||B==="textureCube"?ee=zn(function(X){return X.link($)}):B==="framebuffer"||B==="framebufferCube"?(y.command($.color.length>0,'missing color attachment for framebuffer sent to uniform "'+K+'"',R.commandStr),ee=zn(function(X){return X.link($.color[0])})):y.commandRaise('invalid data for uniform "'+K+'"',R.commandStr)}else Ln($)?ee=zn(function(X){var N=X.global.def("[",Xe($.length,function(te){return y.command(typeof $[te]=="number"||typeof $[te]=="boolean","invalid uniform "+K,X.commandStr),$[te]}),"]");return N}):y.commandRaise('invalid or missing data for uniform "'+K+'"',R.commandStr);ee.value=$,ue[K]=ee}),Object.keys(ie).forEach(function(K){var $=ie[K];ue[K]=Mr($,function(ee,B){return ee.invoke(B,$)})}),ue}function ln(k,R){var j=k.static,ie=k.dynamic,ue={};return Object.keys(j).forEach(function(K){var $=j[K],ee=O.id(K),B=new oe;if(Ll($))B.state=fs,B.buffer=Ne.getBuffer(Ne.create($,ps,!1,!0)),B.type=0;else{var X=Ne.getBuffer($);if(X)B.state=fs,B.buffer=X,B.type=0;else if(y.command(typeof $=="object"&&$,"invalid data for attribute "+K,R.commandStr),"constant"in $){var N=$.constant;B.buffer="null",B.state=iu,typeof N=="number"?B.x=N:(y.command(Ln(N)&&N.length>0&&N.length<=4,"invalid constant for attribute "+K,R.commandStr),us.forEach(function(zt,Zt){Zt<N.length&&(B[zt]=N[Zt])}))}else{Ll($.buffer)?X=Ne.getBuffer(Ne.create($.buffer,ps,!1,!0)):X=Ne.getBuffer($.buffer),y.command(!!X,'missing buffer for attribute "'+K+'"',R.commandStr);var te=$.offset|0;y.command(te>=0,'invalid offset for attribute "'+K+'"',R.commandStr);var he=$.stride|0;y.command(he>=0&&he<256,'invalid stride for attribute "'+K+'", must be integer betweeen [0, 255]',R.commandStr);var Ie=$.size|0;y.command(!("size"in $)||Ie>0&&Ie<=4,'invalid size for attribute "'+K+'", must be 1,2,3,4',R.commandStr);var ze=!!$.normalized,Pe=0;"type"in $&&(y.commandParameter($.type,ma,"invalid type for attribute "+K,R.commandStr),Pe=ma[$.type]);var et=$.divisor|0;"divisor"in $&&(y.command(et===0||nt,'cannot specify divisor for attribute "'+K+'", instancing not supported',R.commandStr),y.command(et>=0,'invalid divisor for attribute "'+K+'"',R.commandStr)),y.optional(function(){var zt=R.commandStr,Zt=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys($).forEach(function(Ct){y.command(Zt.indexOf(Ct)>=0,'unknown parameter "'+Ct+'" for attribute pointer "'+K+'" (valid parameters are '+Zt+")",zt)})}),B.buffer=X,B.state=fs,B.size=Ie,B.normalized=ze,B.type=Pe||X.dtype,B.offset=te,B.stride=he,B.divisor=et}}ue[K]=zn(function(zt,Zt){var Ct=zt.attribCache;if(ee in Ct)return Ct[ee];var Ut={isStream:!1};return Object.keys(B).forEach(function(Xt){Ut[Xt]=B[Xt]}),B.buffer&&(Ut.buffer=zt.link(B.buffer),Ut.type=Ut.type||Ut.buffer+".dtype"),Ct[ee]=Ut,Ut})}),Object.keys(ie).forEach(function(K){var $=ie[K];function ee(B,X){var N=B.invoke(X,$),te=B.shared,he=B.constants,Ie=te.isBufferArgs,ze=te.buffer;y.optional(function(){B.assert(X,N+"&&(typeof "+N+'==="object"||typeof '+N+'==="function")&&('+Ie+"("+N+")||"+ze+".getBuffer("+N+")||"+ze+".getBuffer("+N+".buffer)||"+Ie+"("+N+'.buffer)||("constant" in '+N+"&&(typeof "+N+'.constant==="number"||'+te.isArrayLike+"("+N+".constant))))",'invalid dynamic attribute "'+K+'"')});var Pe={isStream:X.def(!1)},et=new oe;et.state=fs,Object.keys(et).forEach(function(Ut){Pe[Ut]=X.def(""+et[Ut])});var zt=Pe.buffer,Zt=Pe.type;X("if(",Ie,"(",N,")){",Pe.isStream,"=true;",zt,"=",ze,".createStream(",ps,",",N,");",Zt,"=",zt,".dtype;","}else{",zt,"=",ze,".getBuffer(",N,");","if(",zt,"){",Zt,"=",zt,".dtype;",'}else if("constant" in ',N,"){",Pe.state,"=",iu,";","if(typeof "+N+'.constant === "number"){',Pe[us[0]],"=",N,".constant;",us.slice(1).map(function(Ut){return Pe[Ut]}).join("="),"=0;","}else{",us.map(function(Ut,Xt){return Pe[Ut]+"="+N+".constant.length>"+Xt+"?"+N+".constant["+Xt+"]:0;"}).join(""),"}}else{","if(",Ie,"(",N,".buffer)){",zt,"=",ze,".createStream(",ps,",",N,".buffer);","}else{",zt,"=",ze,".getBuffer(",N,".buffer);","}",Zt,'="type" in ',N,"?",he.glTypes,"[",N,".type]:",zt,".dtype;",Pe.normalized,"=!!",N,".normalized;");function Ct(Ut){X(Pe[Ut],"=",N,".",Ut,"|0;")}return Ct("size"),Ct("offset"),Ct("stride"),Ct("divisor"),X("}}"),X.exit("if(",Pe.isStream,"){",ze,".destroyStream(",zt,");","}"),Pe}ue[K]=Mr($,ee)}),ue}function Vn(k,R){var j=k.static,ie=k.dynamic;if(ho in j){var ue=j[ho];return ue!==null&&it.getVAO(ue)===null&&(ue=it.createVAO(ue)),zn(function($){return $.link(it.getVAO(ue))})}else if(ho in ie){var K=ie[ho];return Mr(K,function($,ee){var B=$.invoke(ee,K);return ee.def($.shared.vao+".getVAO("+B+")")})}return null}function Mn(k){var R=k.static,j=k.dynamic,ie={};return Object.keys(R).forEach(function(ue){var K=R[ue];ie[ue]=zn(function($,ee){return typeof K=="number"||typeof K=="boolean"?""+K:$.link(K)})}),Object.keys(j).forEach(function(ue){var K=j[ue];ie[ue]=Mr(K,function($,ee){return $.invoke(ee,K)})}),ie}function Bn(k,R,j,ie,ue){var K=k.static,$=k.dynamic;y.optional(function(){var Ct=[ya,uo,fo,ba,wa,xl,Sa,yl,co,ho].concat(We);function Ut(Xt){Object.keys(Xt).forEach(function(_n){y.command(Ct.indexOf(_n)>=0,'unknown parameter "'+_n+'"',ue.commandStr)})}Ut(K),Ut($)});var ee=Wt(k,R),B=At(k),X=tn(k,B,ue),N=gn(k,ue),te=kn(k,ue),he=Kt(k,ue,ee);function Ie(Ct){var Ut=X[Ct];Ut&&(te[Ct]=Ut)}Ie(Ci),Ie(ct(_l));var ze=Object.keys(te).length>0,Pe={framebuffer:B,draw:N,shader:he,state:te,dirty:ze,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(Pe.profile=$t(k),Pe.uniforms=jn(j,ue),Pe.drawVAO=Pe.scopeVAO=Vn(k),!Pe.drawVAO&&he.program&&!ee&&H.angle_instanced_arrays){var et=!0,zt=he.program.attributes.map(function(Ct){var Ut=R.static[Ct];return et=et&&!!Ut,Ut});if(et&&zt.length>0){var Zt=it.getVAO(it.createVAO(zt));Pe.drawVAO=new _r(null,null,null,function(Ct,Ut){return Ct.link(Zt)}),Pe.useVAO=!0}}return ee?Pe.useVAO=!0:Pe.attributes=ln(R,ue),Pe.context=Mn(ie),Pe}function Hn(k,R,j){var ie=k.shared,ue=ie.context,K=k.scope();Object.keys(j).forEach(function($){R.save(ue,"."+$);var ee=j[$],B=ee.append(k,R);Array.isArray(B)?K(ue,".",$,"=[",B.join(),"];"):K(ue,".",$,"=",B,";")}),R(K)}function Wn(k,R,j,ie){var ue=k.shared,K=ue.gl,$=ue.framebuffer,ee;vt&&(ee=R.def(ue.extensions,".webgl_draw_buffers"));var B=k.constants,X=B.drawBuffer,N=B.backBuffer,te;j?te=j.append(k,R):te=R.def($,".next"),ie||R("if(",te,"!==",$,".cur){"),R("if(",te,"){",K,".bindFramebuffer(",Bp,",",te,".framebuffer);"),vt&&R(ee,".drawBuffersWEBGL(",X,"[",te,".colorAttachments.length]);"),R("}else{",K,".bindFramebuffer(",Bp,",null);"),vt&&R(ee,".drawBuffersWEBGL(",N,");"),R("}",$,".cur=",te,";"),ie||R("}")}function Jn(k,R,j){var ie=k.shared,ue=ie.gl,K=k.current,$=k.next,ee=ie.current,B=ie.next,X=k.cond(ee,".dirty");We.forEach(function(N){var te=ct(N);if(!(te in j.state)){var he,Ie;if(te in $){he=$[te],Ie=K[te];var ze=Xe(Ge[te].length,function(et){return X.def(he,"[",et,"]")});X(k.cond(ze.map(function(et,zt){return et+"!=="+Ie+"["+zt+"]"}).join("||")).then(ue,".",He[te],"(",ze,");",ze.map(function(et,zt){return Ie+"["+zt+"]="+et}).join(";"),";"))}else{he=X.def(B,".",te);var Pe=k.cond(he,"!==",ee,".",te);X(Pe),te in lt?Pe(k.cond(he).then(ue,".enable(",lt[te],");").else(ue,".disable(",lt[te],");"),ee,".",te,"=",he,";"):Pe(ue,".",He[te],"(",he,");",ee,".",te,"=",he,";")}}}),Object.keys(j.state).length===0&&X(ee,".dirty=false;"),R(X)}function ir(k,R,j,ie){var ue=k.shared,K=k.current,$=ue.current,ee=ue.gl;Vp(Object.keys(j)).forEach(function(B){var X=j[B];if(!(ie&&!ie(X))){var N=X.append(k,R);if(lt[B]){var te=lt[B];$i(X)?N?R(ee,".enable(",te,");"):R(ee,".disable(",te,");"):R(k.cond(N).then(ee,".enable(",te,");").else(ee,".disable(",te,");")),R($,".",B,"=",N,";")}else if(Ln(N)){var he=K[B];R(ee,".",He[B],"(",N,");",N.map(function(Ie,ze){return he+"["+ze+"]="+Ie}).join(";"),";")}else R(ee,".",He[B],"(",N,");",$,".",B,"=",N,";")}})}function Rn(k,R){nt&&(k.instancing=R.def(k.shared.extensions,".angle_instanced_arrays"))}function Yt(k,R,j,ie,ue){var K=k.shared,$=k.stats,ee=K.current,B=K.timer,X=j.profile;function N(){return typeof performance>"u"?"Date.now()":"performance.now()"}var te,he;function Ie(Ct){te=R.def(),Ct(te,"=",N(),";"),typeof ue=="string"?Ct($,".count+=",ue,";"):Ct($,".count++;"),Ze&&(ie?(he=R.def(),Ct(he,"=",B,".getNumPendingQueries();")):Ct(B,".beginQuery(",$,");"))}function ze(Ct){Ct($,".cpuTime+=",N(),"-",te,";"),Ze&&(ie?Ct(B,".pushScopeStats(",he,",",B,".getNumPendingQueries(),",$,");"):Ct(B,".endQuery();"))}function Pe(Ct){var Ut=R.def(ee,".profile");R(ee,".profile=",Ct,";"),R.exit(ee,".profile=",Ut,";")}var et;if(X){if($i(X)){X.enable?(Ie(R),ze(R.exit),Pe("true")):Pe("false");return}et=X.append(k,R),Pe(et)}else et=R.def(ee,".profile");var zt=k.block();Ie(zt),R("if(",et,"){",zt,"}");var Zt=k.block();ze(Zt),R.exit("if(",et,"){",Zt,"}")}function ar(k,R,j,ie,ue){var K=k.shared;function $(B){switch(B){case bl:case Ml:case Al:return 2;case wl:case El:case Cl:return 3;case Sl:case Tl:case Pl:return 4;default:return 1}}function ee(B,X,N){var te=K.gl,he=R.def(B,".location"),Ie=R.def(K.attributes,"[",he,"]"),ze=N.state,Pe=N.buffer,et=[N.x,N.y,N.z,N.w],zt=["buffer","normalized","offset","stride"];function Zt(){R("if(!",Ie,".buffer){",te,".enableVertexAttribArray(",he,");}");var Ut=N.type,Xt;if(N.size?Xt=R.def(N.size,"||",X):Xt=X,R("if(",Ie,".type!==",Ut,"||",Ie,".size!==",Xt,"||",zt.map(function(An){return Ie+"."+An+"!=="+N[An]}).join("||"),"){",te,".bindBuffer(",ps,",",Pe,".buffer);",te,".vertexAttribPointer(",[he,Xt,Ut,N.normalized,N.stride,N.offset],");",Ie,".type=",Ut,";",Ie,".size=",Xt,";",zt.map(function(An){return Ie+"."+An+"="+N[An]+";"}).join(""),"}"),nt){var _n=N.divisor;R("if(",Ie,".divisor!==",_n,"){",k.instancing,".vertexAttribDivisorANGLE(",[he,_n],");",Ie,".divisor=",_n,";}")}}function Ct(){R("if(",Ie,".buffer){",te,".disableVertexAttribArray(",he,");",Ie,".buffer=null;","}if(",us.map(function(Ut,Xt){return Ie+"."+Ut+"!=="+et[Xt]}).join("||"),"){",te,".vertexAttrib4f(",he,",",et,");",us.map(function(Ut,Xt){return Ie+"."+Ut+"="+et[Xt]+";"}).join(""),"}")}ze===fs?Zt():ze===iu?Ct():(R("if(",ze,"===",fs,"){"),Zt(),R("}else{"),Ct(),R("}"))}ie.forEach(function(B){var X=B.name,N=j.attributes[X],te;if(N){if(!ue(N))return;te=N.append(k,R)}else{if(!ue(Hp))return;var he=k.scopeAttrib(X);y.optional(function(){k.assert(R,he+".state","missing attribute "+X)}),te={},Object.keys(new oe).forEach(function(Ie){te[Ie]=R.def(he,".",Ie)})}ee(k.link(B),$(B.info.type),te)})}function yn(k,R,j,ie,ue){for(var K=k.shared,$=K.gl,ee,B=0;B<ie.length;++B){var X=ie[B],N=X.name,te=X.info.type,he=j.uniforms[N],Ie=k.link(X),ze=Ie+".location",Pe;if(he){if(!ue(he))continue;if($i(he)){var et=he.value;if(y.command(et!==null&&typeof et<"u",'missing uniform "'+N+'"',k.commandStr),te===go||te===_o){y.command(typeof et=="function"&&(te===go&&(et._reglType==="texture2d"||et._reglType==="framebuffer")||te===_o&&(et._reglType==="textureCube"||et._reglType==="framebufferCube")),"invalid texture for uniform "+N,k.commandStr);var zt=k.link(et._texture||et.color[0]._texture);R($,".uniform1i(",ze,",",zt+".bind());"),R.exit(zt,".unbind();")}else if(te===po||te===mo||te===vo){y.optional(function(){y.command(Ln(et),"invalid matrix for uniform "+N,k.commandStr),y.command(te===po&&et.length===4||te===mo&&et.length===9||te===vo&&et.length===16,"invalid length for matrix uniform "+N,k.commandStr)});var Zt=k.global.def("new Float32Array(["+Array.prototype.slice.call(et)+"])"),Ct=2;te===mo?Ct=3:te===vo&&(Ct=4),R($,".uniformMatrix",Ct,"fv(",ze,",false,",Zt,");")}else{switch(te){case yu:y.commandType(et,"number","uniform "+N,k.commandStr),ee="1f";break;case bl:y.command(Ln(et)&&et.length===2,"uniform "+N,k.commandStr),ee="2f";break;case wl:y.command(Ln(et)&&et.length===3,"uniform "+N,k.commandStr),ee="3f";break;case Sl:y.command(Ln(et)&&et.length===4,"uniform "+N,k.commandStr),ee="4f";break;case wu:y.commandType(et,"boolean","uniform "+N,k.commandStr),ee="1i";break;case bu:y.commandType(et,"number","uniform "+N,k.commandStr),ee="1i";break;case Al:y.command(Ln(et)&&et.length===2,"uniform "+N,k.commandStr),ee="2i";break;case Ml:y.command(Ln(et)&&et.length===2,"uniform "+N,k.commandStr),ee="2i";break;case Cl:y.command(Ln(et)&&et.length===3,"uniform "+N,k.commandStr),ee="3i";break;case El:y.command(Ln(et)&&et.length===3,"uniform "+N,k.commandStr),ee="3i";break;case Pl:y.command(Ln(et)&&et.length===4,"uniform "+N,k.commandStr),ee="4i";break;case Tl:y.command(Ln(et)&&et.length===4,"uniform "+N,k.commandStr),ee="4i";break}R($,".uniform",ee,"(",ze,",",Ln(et)?Array.prototype.slice.call(et):et,");")}continue}else Pe=he.append(k,R)}else{if(!ue(Hp))continue;Pe=R.def(K.uniforms,"[",O.id(N),"]")}te===go?(y(!Array.isArray(Pe),"must specify a scalar prop for textures"),R("if(",Pe,"&&",Pe,'._reglType==="framebuffer"){',Pe,"=",Pe,".color[0];","}")):te===_o&&(y(!Array.isArray(Pe),"must specify a scalar prop for cube maps"),R("if(",Pe,"&&",Pe,'._reglType==="framebufferCube"){',Pe,"=",Pe,".color[0];","}")),y.optional(function(){function xr(ai,Zp){k.assert(R,ai,'bad data or missing for uniform "'+N+'".  '+Zp)}function Eu(ai){y(!Array.isArray(Pe),"must not specify an array type for uniform"),xr("typeof "+Pe+'==="'+ai+'"',"invalid type, expected "+ai)}function Zr(ai,Zp){Array.isArray(Pe)?y(Pe.length===ai,"must have length "+ai):xr(K.isArrayLike+"("+Pe+")&&"+Pe+".length==="+ai,"invalid vector, should have length "+ai,k.commandStr)}function Yp(ai){y(!Array.isArray(Pe),"must not specify a value type"),xr("typeof "+Pe+'==="function"&&'+Pe+'._reglType==="texture'+(ai===Ip?"2d":"Cube")+'"',"invalid texture type",k.commandStr)}switch(te){case bu:Eu("number");break;case Ml:Zr(2);break;case El:Zr(3);break;case Tl:Zr(4);break;case yu:Eu("number");break;case bl:Zr(2);break;case wl:Zr(3);break;case Sl:Zr(4);break;case wu:Eu("boolean");break;case Al:Zr(2);break;case Cl:Zr(3);break;case Pl:Zr(4);break;case po:Zr(4);break;case mo:Zr(9);break;case vo:Zr(16);break;case go:Yp(Ip);break;case _o:Yp(a1);break}});var Ut=1;switch(te){case go:case _o:var Xt=R.def(Pe,"._texture");R($,".uniform1i(",ze,",",Xt,".bind());"),R.exit(Xt,".unbind();");continue;case bu:case wu:ee="1i";break;case Ml:case Al:ee="2i",Ut=2;break;case El:case Cl:ee="3i",Ut=3;break;case Tl:case Pl:ee="4i",Ut=4;break;case yu:ee="1f";break;case bl:ee="2f",Ut=2;break;case wl:ee="3f",Ut=3;break;case Sl:ee="4f",Ut=4;break;case po:ee="Matrix2fv";break;case mo:ee="Matrix3fv";break;case vo:ee="Matrix4fv";break}if(R($,".uniform",ee,"(",ze,","),ee.charAt(0)==="M"){var _n=Math.pow(te-po+2,2),An=k.global.def("new Float32Array(",_n,")");Array.isArray(Pe)?R("false,(",Xe(_n,function(xr){return An+"["+xr+"]="+Pe[xr]}),",",An,")"):R("false,(Array.isArray(",Pe,")||",Pe," instanceof Float32Array)?",Pe,":(",Xe(_n,function(xr){return An+"["+xr+"]="+Pe+"["+xr+"]"}),",",An,")")}else Ut>1?R(Xe(Ut,function(xr){return Array.isArray(Pe)?Pe[xr]:Pe+"["+xr+"]"})):(y(!Array.isArray(Pe),"uniform value must not be an array"),R(Pe));R(");")}}function Bt(k,R,j,ie){var ue=k.shared,K=ue.gl,$=ue.draw,ee=ie.draw;function B(){var Xt=ee.elements,_n,An=R;return Xt?((Xt.contextDep&&ie.contextDynamic||Xt.propDep)&&(An=j),_n=Xt.append(k,An)):_n=An.def($,".",ba),_n&&An("if("+_n+")"+K+".bindBuffer("+n1+","+_n+".buffer.buffer);"),_n}function X(){var Xt=ee.count,_n,An=R;return Xt?((Xt.contextDep&&ie.contextDynamic||Xt.propDep)&&(An=j),_n=Xt.append(k,An),y.optional(function(){Xt.MISSING&&k.assert(R,"false","missing vertex count"),Xt.DYNAMIC&&k.assert(An,_n+">=0","missing vertex count")})):(_n=An.def($,".",Sa),y.optional(function(){k.assert(An,_n+">=0","missing vertex count")})),_n}var N=B();function te(Xt){var _n=ee[Xt];return _n?_n.contextDep&&ie.contextDynamic||_n.propDep?_n.append(k,j):_n.append(k,R):R.def($,".",Xt)}var he=te(wa),Ie=te(xl),ze=X();if(typeof ze=="number"){if(ze===0)return}else j("if(",ze,"){"),j.exit("}");var Pe,et;nt&&(Pe=te(yl),et=k.instancing);var zt=N+".type",Zt=ee.elements&&$i(ee.elements);function Ct(){function Xt(){j(et,".drawElementsInstancedANGLE(",[he,ze,zt,Ie+"<<(("+zt+"-"+hp+")>>1)",Pe],");")}function _n(){j(et,".drawArraysInstancedANGLE(",[he,Ie,ze,Pe],");")}N?Zt?Xt():(j("if(",N,"){"),Xt(),j("}else{"),_n(),j("}")):_n()}function Ut(){function Xt(){j(K+".drawElements("+[he,ze,zt,Ie+"<<(("+zt+"-"+hp+")>>1)"]+");")}function _n(){j(K+".drawArrays("+[he,Ie,ze]+");")}N?Zt?Xt():(j("if(",N,"){"),Xt(),j("}else{"),_n(),j("}")):_n()}nt&&(typeof Pe!="number"||Pe>=0)?typeof Pe=="string"?(j("if(",Pe,">0){"),Ct(),j("}else if(",Pe,"<0){"),Ut(),j("}")):Ct():Ut()}function sn(k,R,j,ie,ue){var K=Vt(),$=K.proc("body",ue);return y.optional(function(){K.commandStr=R.commandStr,K.command=K.link(R.commandStr)}),nt&&(K.instancing=$.def(K.shared.extensions,".angle_instanced_arrays")),k(K,$,j,ie),K.compile().body}function dn(k,R,j,ie){Rn(k,R),j.useVAO?j.drawVAO?R(k.shared.vao,".setVAO(",j.drawVAO.append(k,R),");"):R(k.shared.vao,".setVAO(",k.shared.vao,".targetVAO);"):(R(k.shared.vao,".setVAO(null);"),ar(k,R,j,ie.attributes,function(){return!0})),yn(k,R,j,ie.uniforms,function(){return!0}),Bt(k,R,R,j)}function Dn(k,R){var j=k.proc("draw",1);Rn(k,j),Hn(k,j,R.context),Wn(k,j,R.framebuffer),Jn(k,j,R),ir(k,j,R.state),Yt(k,j,R,!1,!0);var ie=R.shader.progVar.append(k,j);if(j(k.shared.gl,".useProgram(",ie,".program);"),R.shader.program)dn(k,j,R,R.shader.program);else{j(k.shared.vao,".setVAO(null);");var ue=k.global.def("{}"),K=j.def(ie,".id"),$=j.def(ue,"[",K,"]");j(k.cond($).then($,".call(this,a0);").else($,"=",ue,"[",K,"]=",k.link(function(ee){return sn(dn,k,R,ee,1)}),"(",ie,");",$,".call(this,a0);"))}Object.keys(R.state).length>0&&j(k.shared.current,".dirty=true;")}function vi(k,R,j,ie){k.batchId="a1",Rn(k,R);function ue(){return!0}ar(k,R,j,ie.attributes,ue),yn(k,R,j,ie.uniforms,ue),Bt(k,R,R,j)}function Ea(k,R,j,ie){Rn(k,R);var ue=j.contextDep,K=R.def(),$="a0",ee="a1",B=R.def();k.shared.props=B,k.batchId=K;var X=k.scope(),N=k.scope();R(X.entry,"for(",K,"=0;",K,"<",ee,";++",K,"){",B,"=",$,"[",K,"];",N,"}",X.exit);function te(zt){return zt.contextDep&&ue||zt.propDep}function he(zt){return!te(zt)}if(j.needsContext&&Hn(k,N,j.context),j.needsFramebuffer&&Wn(k,N,j.framebuffer),ir(k,N,j.state,te),j.profile&&te(j.profile)&&Yt(k,N,j,!1,!0),ie)j.useVAO?j.drawVAO?te(j.drawVAO)?N(k.shared.vao,".setVAO(",j.drawVAO.append(k,N),");"):X(k.shared.vao,".setVAO(",j.drawVAO.append(k,X),");"):X(k.shared.vao,".setVAO(",k.shared.vao,".targetVAO);"):(X(k.shared.vao,".setVAO(null);"),ar(k,X,j,ie.attributes,he),ar(k,N,j,ie.attributes,te)),yn(k,X,j,ie.uniforms,he),yn(k,N,j,ie.uniforms,te),Bt(k,X,N,j);else{var Ie=k.global.def("{}"),ze=j.shader.progVar.append(k,N),Pe=N.def(ze,".id"),et=N.def(Ie,"[",Pe,"]");N(k.shared.gl,".useProgram(",ze,".program);","if(!",et,"){",et,"=",Ie,"[",Pe,"]=",k.link(function(zt){return sn(vi,k,j,zt,2)}),"(",ze,");}",et,".call(this,a0[",K,"],",K,");")}}function G(k,R){var j=k.proc("batch",2);k.batchId="0",Rn(k,j);var ie=!1,ue=!0;Object.keys(R.context).forEach(function(Ie){ie=ie||R.context[Ie].propDep}),ie||(Hn(k,j,R.context),ue=!1);var K=R.framebuffer,$=!1;K?(K.propDep?ie=$=!0:K.contextDep&&ie&&($=!0),$||Wn(k,j,K)):Wn(k,j,null),R.state.viewport&&R.state.viewport.propDep&&(ie=!0);function ee(Ie){return Ie.contextDep&&ie||Ie.propDep}Jn(k,j,R),ir(k,j,R.state,function(Ie){return!ee(Ie)}),(!R.profile||!ee(R.profile))&&Yt(k,j,R,!1,"a1"),R.contextDep=ie,R.needsContext=ue,R.needsFramebuffer=$;var B=R.shader.progVar;if(B.contextDep&&ie||B.propDep)Ea(k,j,R,null);else{var X=B.append(k,j);if(j(k.shared.gl,".useProgram(",X,".program);"),R.shader.program)Ea(k,j,R,R.shader.program);else{j(k.shared.vao,".setVAO(null);");var N=k.global.def("{}"),te=j.def(X,".id"),he=j.def(N,"[",te,"]");j(k.cond(he).then(he,".call(this,a0,a1);").else(he,"=",N,"[",te,"]=",k.link(function(Ie){return sn(Ea,k,R,Ie,2)}),"(",X,");",he,".call(this,a0,a1);"))}}Object.keys(R.state).length>0&&j(k.shared.current,".dirty=true;")}function we(k,R){var j=k.proc("scope",3);k.batchId="a2";var ie=k.shared,ue=ie.current;Hn(k,j,R.context),R.framebuffer&&R.framebuffer.append(k,j),Vp(Object.keys(R.state)).forEach(function($){var ee=R.state[$],B=ee.append(k,j);Ln(B)?B.forEach(function(X,N){j.set(k.next[$],"["+N+"]",X)}):j.set(ie.next,"."+$,B)}),Yt(k,j,R,!0,!0),[ba,xl,Sa,yl,wa].forEach(function($){var ee=R.draw[$];ee&&j.set(ie.draw,"."+$,""+ee.append(k,j))}),Object.keys(R.uniforms).forEach(function($){var ee=R.uniforms[$].append(k,j);Array.isArray(ee)&&(ee="["+ee.join()+"]"),j.set(ie.uniforms,"["+O.id($)+"]",ee)}),Object.keys(R.attributes).forEach(function($){var ee=R.attributes[$].append(k,j),B=k.scopeAttrib($);Object.keys(new oe).forEach(function(X){j.set(B,"."+X,ee[X])})}),R.scopeVAO&&j.set(ie.vao,".targetVAO",R.scopeVAO.append(k,j));function K($){var ee=R.shader[$];ee&&j.set(ie.shader,"."+$,ee.append(k,j))}K(uo),K(fo),Object.keys(R.state).length>0&&(j(ue,".dirty=true;"),j.exit(ue,".dirty=true;")),j("a1(",k.shared.context,",a0,",k.batchId,");")}function pe(k){if(!(typeof k!="object"||Ln(k))){for(var R=Object.keys(k),j=0;j<R.length;++j)if(Tt.isDynamic(k[R[j]]))return!0;return!1}}function wt(k,R,j){var ie=R.static[j];if(!ie||!pe(ie))return;var ue=k.global,K=Object.keys(ie),$=!1,ee=!1,B=!1,X=k.global.def("{}");K.forEach(function(te){var he=ie[te];if(Tt.isDynamic(he)){typeof he=="function"&&(he=ie[te]=Tt.unbox(he));var Ie=Mr(he,null);$=$||Ie.thisDep,B=B||Ie.propDep,ee=ee||Ie.contextDep}else{switch(ue(X,".",te,"="),typeof he){case"number":ue(he);break;case"string":ue('"',he,'"');break;case"object":Array.isArray(he)&&ue("[",he.join(),"]");break;default:ue(k.link(he));break}ue(";")}});function N(te,he){K.forEach(function(Ie){var ze=ie[Ie];if(Tt.isDynamic(ze)){var Pe=te.invoke(he,ze);he(X,".",Ie,"=",Pe,";")}})}R.dynamic[j]=new Tt.DynamicVariable(gl,{thisDep:$,contextDep:ee,propDep:B,ref:X,append:N}),delete R.static[j]}function nn(k,R,j,ie,ue){var K=Vt();K.stats=K.link(ue),Object.keys(R.static).forEach(function(ee){wt(K,R,ee)}),t1.forEach(function(ee){wt(K,k,ee)});var $=Bn(k,R,j,ie,K);return Dn(K,$),we(K,$),G(K,$),n(K.compile(),{destroy:function(){$.shader.program.destroy()}})}return{next:yt,current:Ge,procs:function(){var k=Vt(),R=k.proc("poll"),j=k.proc("refresh"),ie=k.block();R(ie),j(ie);var ue=k.shared,K=ue.gl,$=ue.next,ee=ue.current;ie(ee,".dirty=false;"),Wn(k,R),Wn(k,j,null,!0);var B;nt&&(B=k.link(nt)),H.oes_vertex_array_object&&j(k.link(H.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var X=0;X<be.maxAttributes;++X){var N=j.def(ue.attributes,"[",X,"]"),te=k.cond(N,".buffer");te.then(K,".enableVertexAttribArray(",X,");",K,".bindBuffer(",ps,",",N,".buffer.buffer);",K,".vertexAttribPointer(",X,",",N,".size,",N,".type,",N,".normalized,",N,".stride,",N,".offset);").else(K,".disableVertexAttribArray(",X,");",K,".vertexAttrib4f(",X,",",N,".x,",N,".y,",N,".z,",N,".w);",N,".buffer=null;"),j(te),nt&&j(B,".vertexAttribDivisorANGLE(",X,",",N,".divisor);")}return j(k.shared.vao,".currentVAO=null;",k.shared.vao,".setVAO(",k.shared.vao,".targetVAO);"),Object.keys(lt).forEach(function(he){var Ie=lt[he],ze=ie.def($,".",he),Pe=k.block();Pe("if(",ze,"){",K,".enable(",Ie,")}else{",K,".disable(",Ie,")}",ee,".",he,"=",ze,";"),j(Pe),R("if(",ze,"!==",ee,".",he,"){",Pe,"}")}),Object.keys(He).forEach(function(he){var Ie=He[he],ze=Ge[he],Pe,et,zt=k.block();if(zt(K,".",Ie,"("),Ln(ze)){var Zt=ze.length;Pe=k.global.def($,".",he),et=k.global.def(ee,".",he),zt(Xe(Zt,function(Ct){return Pe+"["+Ct+"]"}),");",Xe(Zt,function(Ct){return et+"["+Ct+"]="+Pe+"["+Ct+"];"}).join("")),R("if(",Xe(Zt,function(Ct){return Pe+"["+Ct+"]!=="+et+"["+Ct+"]"}).join("||"),"){",zt,"}")}else Pe=ie.def($,".",he),et=ie.def(ee,".",he),zt(Pe,");",ee,".",he,"=",Pe,";"),R("if(",Pe,"!==",et,"){",zt,"}");j(zt)}),k.compile()}(),compile:nn}}function b1(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}var w1=34918,S1=34919,Wp=35007,M1=function(S,O){if(!O.ext_disjoint_timer_query)return null;var H=[];function be(){return H.pop()||O.ext_disjoint_timer_query.createQueryEXT()}function Ne(nt){H.push(nt)}var xe=[];function Ee(nt){var vt=be();O.ext_disjoint_timer_query.beginQueryEXT(Wp,vt),xe.push(vt),Ze(xe.length-1,xe.length,nt)}function Ye(){O.ext_disjoint_timer_query.endQueryEXT(Wp)}function Ke(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var it=[];function Qe(){return it.pop()||new Ke}function st(nt){it.push(nt)}var dt=[];function Ze(nt,vt,Ge){var yt=Qe();yt.startQueryIndex=nt,yt.endQueryIndex=vt,yt.sum=0,yt.stats=Ge,dt.push(yt)}var ot=[],oe=[];function Te(){var nt,vt,Ge=xe.length;if(Ge!==0){oe.length=Math.max(oe.length,Ge+1),ot.length=Math.max(ot.length,Ge+1),ot[0]=0,oe[0]=0;var yt=0;for(nt=0,vt=0;vt<xe.length;++vt){var We=xe[vt];O.ext_disjoint_timer_query.getQueryObjectEXT(We,S1)?(yt+=O.ext_disjoint_timer_query.getQueryObjectEXT(We,w1),Ne(We)):xe[nt++]=We,ot[vt+1]=yt,oe[vt+1]=nt}for(xe.length=nt,nt=0,vt=0;vt<dt.length;++vt){var lt=dt[vt],He=lt.startQueryIndex,ct=lt.endQueryIndex;lt.sum+=ot[ct]-ot[He];var kt=oe[He],Ht=oe[ct];Ht===kt?(lt.stats.gpuTime+=lt.sum/1e6,st(lt)):(lt.startQueryIndex=kt,lt.endQueryIndex=Ht,dt[nt++]=lt)}dt.length=nt}}return{beginQuery:Ee,endQuery:Ye,pushScopeStats:Ze,update:Te,getNumPendingQueries:function(){return xe.length},clear:function(){H.push.apply(H,xe);for(var nt=0;nt<H.length;nt++)O.ext_disjoint_timer_query.deleteQueryEXT(H[nt]);xe.length=0,H.length=0},restore:function(){xe.length=0,H.length=0}}},E1=16384,T1=256,A1=1024,C1=34962,qp="webglcontextlost",Xp="webglcontextrestored",jp=1,P1=2,L1=3;function $p(S,O){for(var H=0;H<S.length;++H)if(S[H]===O)return H;return-1}function R1(S){var O=De(S);if(!O)return null;var H=O.gl,be=H.getContextAttributes(),Ne=H.isContextLost(),xe=Re(H,O);if(!xe)return null;var Ee=xn(),Ye=b1(),Ke=xe.extensions,it=M1(H,Ke),Qe=an(),st=H.drawingBufferWidth,dt=H.drawingBufferHeight,Ze={tick:0,time:0,viewportWidth:st,viewportHeight:dt,framebufferWidth:st,framebufferHeight:dt,drawingBufferWidth:st,drawingBufferHeight:dt,pixelRatio:O.pixelRatio},ot={},oe={elements:null,primitive:4,count:-1,offset:0,instances:-1},Te=v_(H,Ke),nt=D_(H,Ye,O,Ge),vt=Wx(H,Ke,Te,Ye,nt);function Ge(Bt){return vt.destroyBuffer(Bt)}var yt=W_(H,Ke,nt,Ye),We=$x(H,Ee,Ye,O),lt=bx(H,Ke,Te,function(){kt.procs.poll()},Ze,Ye,O),He=wx(H,Ke,Te,Ye,O),ct=Vx(H,Ke,Te,lt,He,Ye),kt=y1(H,Ee,Ke,Te,nt,yt,lt,ct,ot,vt,We,oe,Ze,it,O),Ht=Kx(H,ct,kt.procs.poll,Ze,be,Ke,Te),pt=kt.next,at=H.canvas,Ue=[],Vt=[],$t=[],At=[O.onDestroy],tn=null;function Wt(){if(Ue.length===0){it&&it.update(),tn=null;return}tn=Qt.next(Wt),ir();for(var Bt=Ue.length-1;Bt>=0;--Bt){var sn=Ue[Bt];sn&&sn(Ze,null,0)}H.flush(),it&&it.update()}function Kt(){!tn&&Ue.length>0&&(tn=Qt.next(Wt))}function gn(){tn&&(Qt.cancel(Wt),tn=null)}function kn(Bt){Bt.preventDefault(),Ne=!0,gn(),Vt.forEach(function(sn){sn()})}function jn(Bt){H.getError(),Ne=!1,xe.restore(),We.restore(),nt.restore(),lt.restore(),He.restore(),ct.restore(),vt.restore(),it&&it.restore(),kt.procs.refresh(),Kt(),$t.forEach(function(sn){sn()})}at&&(at.addEventListener(qp,kn,!1),at.addEventListener(Xp,jn,!1));function ln(){Ue.length=0,gn(),at&&(at.removeEventListener(qp,kn),at.removeEventListener(Xp,jn)),We.clear(),ct.clear(),He.clear(),lt.clear(),yt.clear(),nt.clear(),vt.clear(),it&&it.clear(),At.forEach(function(Bt){Bt()})}function Vn(Bt){y(!!Bt,"invalid args to regl({...})"),y.type(Bt,"object","invalid args to regl({...})");function sn(ue){var K=n({},ue);delete K.uniforms,delete K.attributes,delete K.context,delete K.vao,"stencil"in K&&K.stencil.op&&(K.stencil.opBack=K.stencil.opFront=K.stencil.op,delete K.stencil.op);function $(ee){if(ee in K){var B=K[ee];delete K[ee],Object.keys(B).forEach(function(X){K[ee+"."+X]=B[X]})}}return $("blend"),$("depth"),$("cull"),$("stencil"),$("polygonOffset"),$("scissor"),$("sample"),"vao"in ue&&(K.vao=ue.vao),K}function dn(ue,K){var $={},ee={};return Object.keys(ue).forEach(function(B){var X=ue[B];if(Tt.isDynamic(X)){ee[B]=Tt.unbox(X,B);return}else if(K&&Array.isArray(X)){for(var N=0;N<X.length;++N)if(Tt.isDynamic(X[N])){ee[B]=Tt.unbox(X,B);return}}$[B]=X}),{dynamic:ee,static:$}}var Dn=dn(Bt.context||{},!0),vi=dn(Bt.uniforms||{},!0),Ea=dn(Bt.attributes||{},!1),G=dn(sn(Bt),!1),we={gpuTime:0,cpuTime:0,count:0},pe=kt.compile(G,Ea,vi,Dn,we),wt=pe.draw,nn=pe.batch,k=pe.scope,R=[];function j(ue){for(;R.length<ue;)R.push(null);return R}function ie(ue,K){var $;if(Ne&&y.raise("context lost"),typeof ue=="function")return k.call(this,null,ue,0);if(typeof K=="function")if(typeof ue=="number")for($=0;$<ue;++$)k.call(this,null,K,$);else if(Array.isArray(ue))for($=0;$<ue.length;++$)k.call(this,ue[$],K,$);else return k.call(this,ue,K,0);else if(typeof ue=="number"){if(ue>0)return nn.call(this,j(ue|0),ue|0)}else if(Array.isArray(ue)){if(ue.length)return nn.call(this,ue,ue.length)}else return wt.call(this,ue)}return n(ie,{stats:we,destroy:function(){pe.destroy()}})}var Mn=ct.setFBO=Vn({framebuffer:Tt.define.call(null,jp,"framebuffer")});function Bn(Bt,sn){var dn=0;kt.procs.poll();var Dn=sn.color;Dn&&(H.clearColor(+Dn[0]||0,+Dn[1]||0,+Dn[2]||0,+Dn[3]||0),dn|=E1),"depth"in sn&&(H.clearDepth(+sn.depth),dn|=T1),"stencil"in sn&&(H.clearStencil(sn.stencil|0),dn|=A1),y(!!dn,"called regl.clear with no buffer specified"),H.clear(dn)}function Hn(Bt){if(y(typeof Bt=="object"&&Bt,"regl.clear() takes an object as input"),"framebuffer"in Bt)if(Bt.framebuffer&&Bt.framebuffer_reglType==="framebufferCube")for(var sn=0;sn<6;++sn)Mn(n({framebuffer:Bt.framebuffer.faces[sn]},Bt),Bn);else Mn(Bt,Bn);else Bn(null,Bt)}function Wn(Bt){y.type(Bt,"function","regl.frame() callback must be a function"),Ue.push(Bt);function sn(){var dn=$p(Ue,Bt);y(dn>=0,"cannot cancel a frame twice");function Dn(){var vi=$p(Ue,Dn);Ue[vi]=Ue[Ue.length-1],Ue.length-=1,Ue.length<=0&&gn()}Ue[dn]=Dn}return Kt(),{cancel:sn}}function Jn(){var Bt=pt.viewport,sn=pt.scissor_box;Bt[0]=Bt[1]=sn[0]=sn[1]=0,Ze.viewportWidth=Ze.framebufferWidth=Ze.drawingBufferWidth=Bt[2]=sn[2]=H.drawingBufferWidth,Ze.viewportHeight=Ze.framebufferHeight=Ze.drawingBufferHeight=Bt[3]=sn[3]=H.drawingBufferHeight}function ir(){Ze.tick+=1,Ze.time=Yt(),Jn(),kt.procs.poll()}function Rn(){lt.refresh(),Jn(),kt.procs.refresh(),it&&it.update()}function Yt(){return(an()-Qe)/1e3}Rn();function ar(Bt,sn){y.type(sn,"function","listener callback must be a function");var dn;switch(Bt){case"frame":return Wn(sn);case"lost":dn=Vt;break;case"restore":dn=$t;break;case"destroy":dn=At;break;default:y.raise("invalid event, must be one of frame,lost,restore,destroy")}return dn.push(sn),{cancel:function(){for(var Dn=0;Dn<dn.length;++Dn)if(dn[Dn]===sn){dn[Dn]=dn[dn.length-1],dn.pop();return}}}}var yn=n(Vn,{clear:Hn,prop:Tt.define.bind(null,jp),context:Tt.define.bind(null,P1),this:Tt.define.bind(null,L1),draw:Vn({}),buffer:function(Bt){return nt.create(Bt,C1,!1,!1)},elements:function(Bt){return yt.create(Bt,!1)},texture:lt.create2D,cube:lt.createCube,renderbuffer:He.create,framebuffer:ct.create,framebufferCube:ct.createCube,vao:vt.createVAO,attributes:be,frame:Wn,on:ar,limits:Te,hasExtension:function(Bt){return Te.extensions.indexOf(Bt.toLowerCase())>=0},read:Ht,destroy:ln,_gl:H,_refresh:Rn,poll:function(){ir(),it&&it.update()},now:Yt,stats:Ye});return O.onDone(null,yn),yn}return R1})}(uc)),uc.exports}var If,X0;function XE(){if(X0)return If;X0=1,If=l;function l(e){e=typeof e<"u"?e:1,Array.isArray(e)||(e=[e,e]);var t=[[-e[0],-e[1],0],[e[0],-e[1],0],[e[0],e[1],0],[-e[0],e[1],0]],n=[[0,1,2],[2,3,0]],i=[[0,0],[1,0],[1,1],[0,1]],a=[0,0,-1],o=[a.slice(),a.slice(),a.slice(),a.slice()];return{positions:t,cells:n,uvs:i,normals:o}}return If}var Of,j0;function jE(){if(j0)return Of;j0=1,Of={rgb2hsl:l,rgb2hsv:e,rgb2hwb:t,rgb2cmyk:n,rgb2keyword:i,rgb2xyz:a,rgb2lab:o,rgb2lch:s,hsl2rgb:u,hsl2hsv:c,hsl2hwb:f,hsl2cmyk:h,hsl2keyword:d,hsv2rgb:v,hsv2hsl:x,hsv2hwb:p,hsv2cmyk:m,hsv2keyword:_,hwb2rgb:E,hwb2hsl:T,hwb2hsv:A,hwb2cmyk:w,hwb2keyword:I,cmyk2rgb:P,cmyk2hsl:M,cmyk2hsv:L,cmyk2hwb:D,cmyk2keyword:z,keyword2rgb:fe,keyword2hsl:V,keyword2hsv:le,keyword2hwb:de,keyword2cmyk:Fe,keyword2lab:Se,keyword2xyz:It,xyz2rgb:Q,xyz2lab:J,xyz2lch:Y,lab2xyz:re,lab2rgb:ge,lab2lch:me,lch2lab:ae,lch2xyz:Le,lch2rgb:Me};function l(ye){var qe=ye[0]/255,Ce=ye[1]/255,$e=ye[2]/255,Je=Math.min(qe,Ce,$e),Ve=Math.max(qe,Ce,$e),ft=Ve-Je,ht,St,pn;return Ve==Je?ht=0:qe==Ve?ht=(Ce-$e)/ft:Ce==Ve?ht=2+($e-qe)/ft:$e==Ve&&(ht=4+(qe-Ce)/ft),ht=Math.min(ht*60,360),ht<0&&(ht+=360),pn=(Je+Ve)/2,Ve==Je?St=0:pn<=.5?St=ft/(Ve+Je):St=ft/(2-Ve-Je),[ht,St*100,pn*100]}function e(ye){var qe=ye[0],Ce=ye[1],$e=ye[2],Je=Math.min(qe,Ce,$e),Ve=Math.max(qe,Ce,$e),ft=Ve-Je,ht,St,pn;return Ve==0?St=0:St=ft/Ve*1e3/10,Ve==Je?ht=0:qe==Ve?ht=(Ce-$e)/ft:Ce==Ve?ht=2+($e-qe)/ft:$e==Ve&&(ht=4+(qe-Ce)/ft),ht=Math.min(ht*60,360),ht<0&&(ht+=360),pn=Ve/255*1e3/10,[ht,St,pn]}function t(ye){var qe=ye[0],Ce=ye[1],Ve=ye[2],$e=l(ye)[0],Je=1/255*Math.min(qe,Math.min(Ce,Ve)),Ve=1-1/255*Math.max(qe,Math.max(Ce,Ve));return[$e,Je*100,Ve*100]}function n(ye){var qe=ye[0]/255,Ce=ye[1]/255,$e=ye[2]/255,Je,Ve,ft,ht;return ht=Math.min(1-qe,1-Ce,1-$e),Je=(1-qe-ht)/(1-ht)||0,Ve=(1-Ce-ht)/(1-ht)||0,ft=(1-$e-ht)/(1-ht)||0,[Je*100,Ve*100,ft*100,ht*100]}function i(ye){return Dt[JSON.stringify(ye)]}function a(ye){var qe=ye[0]/255,Ce=ye[1]/255,$e=ye[2]/255;qe=qe>.04045?Math.pow((qe+.055)/1.055,2.4):qe/12.92,Ce=Ce>.04045?Math.pow((Ce+.055)/1.055,2.4):Ce/12.92,$e=$e>.04045?Math.pow(($e+.055)/1.055,2.4):$e/12.92;var Je=qe*.4124+Ce*.3576+$e*.1805,Ve=qe*.2126+Ce*.7152+$e*.0722,ft=qe*.0193+Ce*.1192+$e*.9505;return[Je*100,Ve*100,ft*100]}function o(ye){var qe=a(ye),Ce=qe[0],$e=qe[1],Je=qe[2],Ve,ft,ht;return Ce/=95.047,$e/=100,Je/=108.883,Ce=Ce>.008856?Math.pow(Ce,1/3):7.787*Ce+16/116,$e=$e>.008856?Math.pow($e,1/3):7.787*$e+16/116,Je=Je>.008856?Math.pow(Je,1/3):7.787*Je+16/116,Ve=116*$e-16,ft=500*(Ce-$e),ht=200*($e-Je),[Ve,ft,ht]}function s(ye){return me(o(ye))}function u(ye){var qe=ye[0]/360,Ce=ye[1]/100,$e=ye[2]/100,Je,Ve,ft,ht,St;if(Ce==0)return St=$e*255,[St,St,St];$e<.5?Ve=$e*(1+Ce):Ve=$e+Ce-$e*Ce,Je=2*$e-Ve,ht=[0,0,0];for(var pn=0;pn<3;pn++)ft=qe+1/3*-(pn-1),ft<0&&ft++,ft>1&&ft--,6*ft<1?St=Je+(Ve-Je)*6*ft:2*ft<1?St=Ve:3*ft<2?St=Je+(Ve-Je)*(2/3-ft)*6:St=Je,ht[pn]=St*255;return ht}function c(ye){var qe=ye[0],Ce=ye[1]/100,$e=ye[2]/100,Je,Ve;return $e===0?[0,0,0]:($e*=2,Ce*=$e<=1?$e:2-$e,Ve=($e+Ce)/2,Je=2*Ce/($e+Ce),[qe,Je*100,Ve*100])}function f(ye){return t(u(ye))}function h(ye){return n(u(ye))}function d(ye){return i(u(ye))}function v(ye){var qe=ye[0]/60,Ce=ye[1]/100,St=ye[2]/100,$e=Math.floor(qe)%6,Je=qe-Math.floor(qe),Ve=255*St*(1-Ce),ft=255*St*(1-Ce*Je),ht=255*St*(1-Ce*(1-Je)),St=255*St;switch($e){case 0:return[St,ht,Ve];case 1:return[ft,St,Ve];case 2:return[Ve,St,ht];case 3:return[Ve,ft,St];case 4:return[ht,Ve,St];case 5:return[St,Ve,ft]}}function x(ye){var qe=ye[0],Ce=ye[1]/100,$e=ye[2]/100,Je,Ve;return Ve=(2-Ce)*$e,Je=Ce*$e,Je/=Ve<=1?Ve:2-Ve,Je=Je||0,Ve/=2,[qe,Je*100,Ve*100]}function p(ye){return t(v(ye))}function m(ye){return n(v(ye))}function _(ye){return i(v(ye))}function E(ye){var qe=ye[0]/360,Ce=ye[1]/100,$e=ye[2]/100,Je=Ce+$e,Ve,ft,ht,St;switch(Je>1&&(Ce/=Je,$e/=Je),Ve=Math.floor(6*qe),ft=1-$e,ht=6*qe-Ve,Ve&1&&(ht=1-ht),St=Ce+ht*(ft-Ce),Ve){default:case 6:case 0:r=ft,g=St,b=Ce;break;case 1:r=St,g=ft,b=Ce;break;case 2:r=Ce,g=ft,b=St;break;case 3:r=Ce,g=St,b=ft;break;case 4:r=St,g=Ce,b=ft;break;case 5:r=ft,g=Ce,b=St;break}return[r*255,g*255,b*255]}function T(ye){return l(E(ye))}function A(ye){return e(E(ye))}function w(ye){return n(E(ye))}function I(ye){return i(E(ye))}function P(ye){var qe=ye[0]/100,Ce=ye[1]/100,$e=ye[2]/100,Je=ye[3]/100,Ve,ft,ht;return Ve=1-Math.min(1,qe*(1-Je)+Je),ft=1-Math.min(1,Ce*(1-Je)+Je),ht=1-Math.min(1,$e*(1-Je)+Je),[Ve*255,ft*255,ht*255]}function M(ye){return l(P(ye))}function L(ye){return e(P(ye))}function D(ye){return t(P(ye))}function z(ye){return i(P(ye))}function Q(ye){var qe=ye[0]/100,Ce=ye[1]/100,$e=ye[2]/100,Je,Ve,ft;return Je=qe*3.2406+Ce*-1.5372+$e*-.4986,Ve=qe*-.9689+Ce*1.8758+$e*.0415,ft=qe*.0557+Ce*-.204+$e*1.057,Je=Je>.0031308?1.055*Math.pow(Je,1/2.4)-.055:Je=Je*12.92,Ve=Ve>.0031308?1.055*Math.pow(Ve,1/2.4)-.055:Ve=Ve*12.92,ft=ft>.0031308?1.055*Math.pow(ft,1/2.4)-.055:ft=ft*12.92,Je=Math.min(Math.max(0,Je),1),Ve=Math.min(Math.max(0,Ve),1),ft=Math.min(Math.max(0,ft),1),[Je*255,Ve*255,ft*255]}function J(ye){var qe=ye[0],Ce=ye[1],$e=ye[2],Je,Ve,ft;return qe/=95.047,Ce/=100,$e/=108.883,qe=qe>.008856?Math.pow(qe,1/3):7.787*qe+16/116,Ce=Ce>.008856?Math.pow(Ce,1/3):7.787*Ce+16/116,$e=$e>.008856?Math.pow($e,1/3):7.787*$e+16/116,Je=116*Ce-16,Ve=500*(qe-Ce),ft=200*(Ce-$e),[Je,Ve,ft]}function Y(ye){return me(J(ye))}function re(ye){var qe=ye[0],Ce=ye[1],$e=ye[2],Je,Ve,ft,ht;return qe<=8?(Ve=qe*100/903.3,ht=7.787*(Ve/100)+16/116):(Ve=100*Math.pow((qe+16)/116,3),ht=Math.pow(Ve/100,1/3)),Je=Je/95.047<=.008856?Je=95.047*(Ce/500+ht-16/116)/7.787:95.047*Math.pow(Ce/500+ht,3),ft=ft/108.883<=.008859?ft=108.883*(ht-$e/200-16/116)/7.787:108.883*Math.pow(ht-$e/200,3),[Je,Ve,ft]}function me(ye){var qe=ye[0],Ce=ye[1],$e=ye[2],Je,Ve,ft;return Je=Math.atan2($e,Ce),Ve=Je*360/2/Math.PI,Ve<0&&(Ve+=360),ft=Math.sqrt(Ce*Ce+$e*$e),[qe,ft,Ve]}function ge(ye){return Q(re(ye))}function ae(ye){var qe=ye[0],Ce=ye[1],$e=ye[2],Je,Ve,ft;return ft=$e/360*2*Math.PI,Je=Ce*Math.cos(ft),Ve=Ce*Math.sin(ft),[qe,Je,Ve]}function Le(ye){return re(ae(ye))}function Me(ye){return ge(ae(ye))}function fe(ye){return _t[ye]}function V(ye){return l(fe(ye))}function le(ye){return e(fe(ye))}function de(ye){return t(fe(ye))}function Fe(ye){return n(fe(ye))}function Se(ye){return o(fe(ye))}function It(ye){return a(fe(ye))}var _t={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},Dt={};for(var bt in _t)Dt[JSON.stringify(_t[bt])]=bt;return Of}var Ff,$0;function $E(){if($0)return Ff;$0=1;var l=jE(),e=function(){return new o};for(var t in l){e[t+"Raw"]=function(s){return function(u){return typeof u=="number"&&(u=Array.prototype.slice.call(arguments)),l[s](u)}}(t);var n=/(\w+)2(\w+)/.exec(t),i=n[1],a=n[2];e[i]=e[i]||{},e[i][a]=e[t]=function(s){return function(u){typeof u=="number"&&(u=Array.prototype.slice.call(arguments));var c=l[s](u);if(typeof c=="string"||c===void 0)return c;for(var f=0;f<c.length;f++)c[f]=Math.round(c[f]);return c}}(t)}var o=function(){this.convs={}};return o.prototype.routeSpace=function(s,u){var c=u[0];return c===void 0?this.getValues(s):(typeof c=="number"&&(c=Array.prototype.slice.call(u)),this.setValues(s,c))},o.prototype.setValues=function(s,u){return this.space=s,this.convs={},this.convs[s]=u,this},o.prototype.getValues=function(s){var u=this.convs[s];if(!u){var c=this.space,f=this.convs[c];u=e[c][s](f),this.convs[s]=u}return u},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(s){o.prototype[s]=function(u){return this.routeSpace(s,arguments)}}),Ff=e,Ff}var Nf,Y0;function YE(){if(Y0)return Nf;Y0=1;var l=$E();return Nf=function(e){var t,n,i,a;if(t=/^((?:rgb|hs[lv]|cmyk|xyz|lab)a?)\s*\(([^\)]*)\)/.exec(e)){var o=t[1],s=o.replace(/a$/,""),u=s==="cmyk"?4:3;n=l[s],i=t[2].replace(/^\s+|\s+$/g,"").split(/\s*,\s*/).map(function(f,h){return/%$/.test(f)&&h===u?parseFloat(f)/100:(/%$/.test(f),parseFloat(f))}),o===s&&i.push(1),a=i[u]===void 0?1:i[u],i=i.slice(0,u),n[s]=function(){return i}}else if(/^#[A-Fa-f0-9]+$/.test(e)){var s=e.replace(/^#/,""),u=s.length;n=l.rgb,i=s.split(u===3?/(.)/:/(..)/),i=i.filter(Boolean).map(function(d){return parseInt(u===3?d+d:d,16)}),a=1,n.rgb=function(){return i},i[0]||(i[0]=0),i[1]||(i[1]=0),i[2]||(i[2]=0)}else n=l.keyword,n.keyword=function(){return e},i=e,a=1;var c={rgb:void 0,hsl:void 0,hsv:void 0,cmyk:void 0,keyword:void 0,hex:void 0};try{c.rgb=n.rgb(i)}catch{}try{c.hsl=n.hsl(i)}catch{}try{c.hsv=n.hsv(i)}catch{}try{c.cmyk=n.cmyk(i)}catch{}try{c.keyword=n.keyword(i)}catch{}return c.rgb&&(c.hex="#"+c.rgb.map(function(f){var h=f.toString(16);return h.length===1?"0"+h:h}).join("")),c.rgb&&(c.rgba=c.rgb.concat(a)),c.hsl&&(c.hsla=c.hsl.concat(a)),c.hsv&&(c.hsva=c.hsv.concat(a)),c.cmyk&&(c.cmyka=c.cmyk.concat(a)),c},Nf}var zf,Z0;function ZE(){if(Z0)return zf;Z0=1;var l=qE(),e=XE(),t=YE(),n=Jo();zf=i;function i(o){if(o=o||{},!o.gl)throw new Error('Must specify { context: "webgl" } in sketch settings, or a WebGL-enabled canvas');var s=o.gl,u={gl:s};typeof o.extensions<"u"&&(u.extensions=o.extensions),typeof o.optionalExtensions<"u"&&(u.optionalExtensions=o.optionalExtensions),typeof o.profile<"u"&&(u.profile=o.profile),typeof o.onDone<"u"&&(u.onDone=o.onDone);var c=l(u),f=e(),h=new Map,d=o.uniforms||{},v=Object.assign({},d);Object.keys(d).forEach(function(I){var P=d[I];typeof P=="function"?v[I]=function(M,L,D){var z=P.call(d,L,D);if(a(z))if(h.has(P)){var Q=h.get(P);Q(z),z=Q}else{var J=c.texture(z);h.set(P,J),z=J}return z}:a(P)?v[I]=c.texture(P):v[I]=P});var x;try{x=A()}catch(I){w(I)}var p=n(o.clearColor,"black");if(typeof p=="string"){var m=t(p);if(!m.rgb)throw new Error('Error parsing { clearColor } color string "'+p+'"');p=m.rgb.slice(0,3).map(function(I){return I/255})}else if(p&&(!Array.isArray(p)||p.length<3))throw new Error("Error with { clearColor } option, must be a string or [ r, g, b ] float array");var _=n(o.clearAlpha,1),E=p?p.concat([_||0]):!1;return{render:function(I){c.poll(),E&&c.clear({color:E,depth:1,stencil:0}),T(I),s.flush()},regl:c,drawQuad:T,unload:function(){h.clear(),c.destroy()}};function T(I){if(I=I||{},x)try{x(I)}catch(P){w(P)&&I==null&&console.warn('Warning: shader.render() is not called with any "props" parameter')}}function A(){return c({scissor:o.scissor?{enable:!0,box:{x:c.prop("scissorX"),y:c.prop("scissorY"),width:c.prop("scissorWidth"),height:c.prop("scissorHeight")}}:!1,uniforms:v,frag:o.frag||["precision highp float;","","void main () {","  gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","}"].join(`
`),vert:o.vert||["precision highp float;","attribute vec3 position;","varying vec2 vUv;","","void main () {","  gl_Position = vec4(position.xyz, 1.0);","  vUv = gl_Position.xy * 0.5 + 0.5;","}"].join(`
`),blend:o.blend!==!1?{enable:!0,func:{srcRGB:"src alpha",srcAlpha:1,dstRGB:"one minus src alpha",dstAlpha:1}}:void 0,attributes:{position:f.positions},elements:f.cells})}function w(I){if(/^\(regl\)/.test(I.message))return!0;throw I}}function a(o){return o&&!Array.isArray(o)&&typeof o=="object"}return zf}var kf={exports:{}},Bf={exports:{}};const KE="#f0f8ff",QE="#faebd7",JE="#00ffff",eT="#7fffd4",tT="#f0ffff",nT="#f5f5dc",rT="#ffe4c4",iT="#000000",aT="#ffebcd",sT="#0000ff",oT="#8a2be2",lT="#a52a2a",cT="#deb887",uT="#5f9ea0",fT="#7fff00",hT="#d2691e",dT="#ff7f50",pT="#6495ed",mT="#fff8dc",vT="#dc143c",gT="#00ffff",_T="#00008b",xT="#008b8b",yT="#b8860b",bT="#a9a9a9",wT="#006400",ST="#a9a9a9",MT="#bdb76b",ET="#8b008b",TT="#556b2f",AT="#ff8c00",CT="#9932cc",PT="#8b0000",LT="#e9967a",RT="#8fbc8f",DT="#483d8b",IT="#2f4f4f",OT="#2f4f4f",FT="#00ced1",NT="#9400d3",zT="#ff1493",kT="#00bfff",BT="#696969",UT="#696969",GT="#1e90ff",VT="#b22222",HT="#fffaf0",WT="#228b22",qT="#ff00ff",XT="#dcdcdc",jT="#f8f8ff",$T="#ffd700",YT="#daa520",ZT="#808080",KT="#008000",QT="#adff2f",JT="#808080",eA="#f0fff0",tA="#ff69b4",nA="#cd5c5c",rA="#4b0082",iA="#fffff0",aA="#f0e68c",sA="#e6e6fa",oA="#fff0f5",lA="#7cfc00",cA="#fffacd",uA="#add8e6",fA="#f08080",hA="#e0ffff",dA="#fafad2",pA="#d3d3d3",mA="#90ee90",vA="#d3d3d3",gA="#ffb6c1",_A="#ffa07a",xA="#20b2aa",yA="#87cefa",bA="#778899",wA="#778899",SA="#b0c4de",MA="#ffffe0",EA="#00ff00",TA="#32cd32",AA="#faf0e6",CA="#ff00ff",PA="#800000",LA="#66cdaa",RA="#0000cd",DA="#ba55d3",IA="#9370db",OA="#3cb371",FA="#7b68ee",NA="#00fa9a",zA="#48d1cc",kA="#c71585",BA="#191970",UA="#f5fffa",GA="#ffe4e1",VA="#ffe4b5",HA="#ffdead",WA="#000080",qA="#fdf5e6",XA="#808000",jA="#6b8e23",$A="#ffa500",YA="#ff4500",ZA="#da70d6",KA="#eee8aa",QA="#98fb98",JA="#afeeee",e3="#db7093",t3="#ffefd5",n3="#ffdab9",r3="#cd853f",i3="#ffc0cb",a3="#dda0dd",s3="#b0e0e6",o3="#800080",l3="#663399",c3="#ff0000",u3="#bc8f8f",f3="#4169e1",h3="#8b4513",d3="#fa8072",p3="#f4a460",m3="#2e8b57",v3="#fff5ee",g3="#a0522d",_3="#c0c0c0",x3="#87ceeb",y3="#6a5acd",b3="#708090",w3="#708090",S3="#fffafa",M3="#00ff7f",E3="#4682b4",T3="#d2b48c",A3="#008080",C3="#d8bfd8",P3="#ff6347",L3="#40e0d0",R3="#ee82ee",D3="#f5deb3",I3="#ffffff",O3="#f5f5f5",F3="#ffff00",N3="#9acd32",sg={aliceblue:KE,antiquewhite:QE,aqua:JE,aquamarine:eT,azure:tT,beige:nT,bisque:rT,black:iT,blanchedalmond:aT,blue:sT,blueviolet:oT,brown:lT,burlywood:cT,cadetblue:uT,chartreuse:fT,chocolate:hT,coral:dT,cornflowerblue:pT,cornsilk:mT,crimson:vT,cyan:gT,darkblue:_T,darkcyan:xT,darkgoldenrod:yT,darkgray:bT,darkgreen:wT,darkgrey:ST,darkkhaki:MT,darkmagenta:ET,darkolivegreen:TT,darkorange:AT,darkorchid:CT,darkred:PT,darksalmon:LT,darkseagreen:RT,darkslateblue:DT,darkslategray:IT,darkslategrey:OT,darkturquoise:FT,darkviolet:NT,deeppink:zT,deepskyblue:kT,dimgray:BT,dimgrey:UT,dodgerblue:GT,firebrick:VT,floralwhite:HT,forestgreen:WT,fuchsia:qT,gainsboro:XT,ghostwhite:jT,gold:$T,goldenrod:YT,gray:ZT,green:KT,greenyellow:QT,grey:JT,honeydew:eA,hotpink:tA,indianred:nA,indigo:rA,ivory:iA,khaki:aA,lavender:sA,lavenderblush:oA,lawngreen:lA,lemonchiffon:cA,lightblue:uA,lightcoral:fA,lightcyan:hA,lightgoldenrodyellow:dA,lightgray:pA,lightgreen:mA,lightgrey:vA,lightpink:gA,lightsalmon:_A,lightseagreen:xA,lightskyblue:yA,lightslategray:bA,lightslategrey:wA,lightsteelblue:SA,lightyellow:MA,lime:EA,limegreen:TA,linen:AA,magenta:CA,maroon:PA,mediumaquamarine:LA,mediumblue:RA,mediumorchid:DA,mediumpurple:IA,mediumseagreen:OA,mediumslateblue:FA,mediumspringgreen:NA,mediumturquoise:zA,mediumvioletred:kA,midnightblue:BA,mintcream:UA,mistyrose:GA,moccasin:VA,navajowhite:HA,navy:WA,oldlace:qA,olive:XA,olivedrab:jA,orange:$A,orangered:YA,orchid:ZA,palegoldenrod:KA,palegreen:QA,paleturquoise:JA,palevioletred:e3,papayawhip:t3,peachpuff:n3,peru:r3,pink:i3,plum:a3,powderblue:s3,purple:o3,rebeccapurple:l3,red:c3,rosybrown:u3,royalblue:f3,saddlebrown:h3,salmon:d3,sandybrown:p3,seagreen:m3,seashell:v3,sienna:g3,silver:_3,skyblue:x3,slateblue:y3,slategray:b3,slategrey:w3,snow:S3,springgreen:M3,steelblue:E3,tan:T3,teal:A3,thistle:C3,tomato:P3,turquoise:L3,violet:R3,wheat:D3,white:I3,whitesmoke:O3,yellow:F3,yellowgreen:N3};var rc={},Uf,K0;function z3(){if(K0)return Uf;K0=1,Uf=l;function l(e){var t=e[0],n=e[1],i=e[2],a,o,s,u,c;if(n===0)return c=i,[c,c,c];i<.5?o=i*(1+n):o=i+n-i*n,a=2*i-o,u=[0,0,0];for(var f=0;f<3;f++)s=t+1/3*-(f-1),s<0&&s++,s>1&&s--,6*s<1?c=a+(o-a)*6*s:2*s<1?c=o:3*s<2?c=a+(o-a)*(2/3-s)*6:c=a,u[f]=c;return u}return Uf}var Gf,Q0;function k3(){if(Q0)return Gf;Q0=1,Gf=l;function l(e){var t=e[0],n=e[1],i=e[2],a=Math.min(t,n,i),o=Math.max(t,n,i),s=o-a,u,c,f;return o===a?u=0:t===o?u=(n-i)/s:n===o?u=2+(i-t)/s:i===o&&(u=4+(t-n)/s),u=Math.min(u*60,360),u<0&&(u+=360),f=(a+o)/2,o===a?c=0:f<=.5?c=s/(o+a):c=s/(2-o-a),[u/360,c,f]}return Gf}var J0;function og(){if(J0)return rc;J0=1;var l=z3(),e=k3(),t=Uh();rc.RGBAToHSLA=n;function n(a){var o=e([a[0]/255,a[1]/255,a[2]/255]);return[Math.max(0,Math.min(360,Math.round(o[0]*360))),Math.max(0,Math.min(100,Math.round(o[1]*100))),Math.max(0,Math.min(100,Math.round(o[2]*100))),a[3]]}rc.HSLAToRGBA=i;function i(a){var o=t(a[0],0,360),s=l([o/360,a[1]/100,a[2]/100]);return[Math.max(0,Math.min(255,Math.round(s[0]*255))),Math.max(0,Math.min(255,Math.round(s[1]*255))),Math.max(0,Math.min(255,Math.round(s[2]*255))),a[3]]}return rc}var Vf,ev;function lg(){if(ev)return Vf;ev=1,Vf=l;function l(e){if(typeof e!="string")throw new TypeError("Hex code parsing must be performed on a string parameter");if(e=e.toLowerCase(),!/^#[a-f0-9]+$/.test(e))return null;var t=e.replace(/^#/,""),n=1;t.length===8&&(n=parseInt(t.slice(6,8),16)/255,t=t.slice(0,6)),t.length===4&&(n=parseInt(t.slice(3,4).repeat(2),16)/255,t=t.slice(0,3)),t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]);var i=parseInt(t,16),a=i>>16,o=i>>8&255,s=i&255;return[a,o,s,n]}return Vf}var Hf,tv;function cg(){if(tv)return Hf;tv=1,Hf=l;function l(e){if(!e||!Array.isArray(e))throw new TypeError("Must specify an array to convert into a hex code");var t=Math.max(0,Math.min(255,Math.round(e[0]||0))),n=Math.max(0,Math.min(255,Math.round(e[1]||0))),i=Math.max(0,Math.min(255,Math.round(e[2]||0))),a=e[3];(typeof a>"u"||!isFinite(a))&&(a=1);var o=Math.max(0,Math.min(255,Math.round(a*255))),s=o===255?"":(o|256).toString(16).slice(1),u=(i|n<<8|t<<16|1<<24).toString(16).slice(1)+s;return"#"+u}return Hf}var nv;function B3(){return nv||(nv=1,function(l){var e=sg,t=og(),n=lg(),i=cg(),a=Uh();function o(h){if(typeof h!="string")throw new TypeError("Color parsing must be performed on a string parameter");h=h.toLowerCase(),h in e?h=e[h]:h==="transparent"&&(h="#00000000");var d,v,x;if(/^#[a-f0-9]+$/.test(h))d=n(h),x=i(d),v=t.RGBAToHSLA(d);else{var p=/^((?:rgb|hsl)a?)\s*\(([^)]*)\)/.exec(h);if(!p)return null;var m=p[1].replace(/a$/,""),_=p[2].replace(/^\s+|\s+$/g,"").split(/\s*,\s*/).map(function(T,A){return A<=2?Math.round(parseFloat(T)||0):(T=parseFloat(T),(typeof T!="number"||!isFinite(T))&&(T=1),T)});(typeof _[3]>"u"||!isFinite(_[3]))&&(_[3]=1),m==="rgb"?(v=t.RGBAToHSLA(_),d=_):m==="hsl"&&(d=t.HSLAToRGBA(_),_[0]=a(_[0],0,360),v=_),x=i(d)}if(!d&&!x&&!v)return null;var E={hex:x,alpha:d[3],rgb:d.slice(0,3),rgba:d,hsl:v.slice(0,3),hsla:v};return E}l.exports.parse=s;function s(h){if(typeof h=="string")return o(h);if(Array.isArray(h)&&h.length>=3){var d=c(h[0],h[1],h[2],h[3]);return o(d)}else if(h&&typeof h=="object"){var v;if(h.hex?v=h.hex:h.rgba?v=c(h.rgba[0],h.rgba[1],h.rgba[2],h.rgba[3]):h.hsla?v=f(h.hsla[0],h.hsla[1],h.hsla[2],h.hsla[3]):h.rgb?v=c(h.rgb[0],h.rgb[1],h.rgb[2]):h.hsl&&(v=f(h.hsl[0],h.hsl[1],h.hsl[2])),v)return o(v)}return null}l.exports.style=u;function u(h){var d=l.exports.parse(h);if(d){var v=d.rgba;return c(v[0],v[1],v[2],v[3])}return null}function c(h,d,v,x){return h=Math.max(0,Math.min(255,Math.round(h))),d=Math.max(0,Math.min(255,Math.round(d))),v=Math.max(0,Math.min(255,Math.round(v))),x===1||!isFinite(x)||typeof x>"u"?"rgb("+[h,d,v].join(", ")+")":(x=Math.max(0,Math.min(1,x)),"rgba("+[h,d,v,x].join(", ")+")")}function f(h,d,v,x){return h=a(h,0,360),h=Math.max(0,Math.min(360,Math.round(h))),d=Math.max(0,Math.min(100,Math.round(d))),v=Math.max(0,Math.min(100,Math.round(v))),x===1||!isFinite(x)||typeof x>"u"?"hsl("+[h,d,v].join(", ")+")":(x=Math.max(0,Math.min(1,x)),"hsla("+[h,d,v,x].join(", ")+")")}}(Bf)),Bf.exports}var Wf,rv;function U3(){if(rv)return Wf;rv=1;var l=.2126,e=.7152,t=.0722,n=1/12.92;function i(o){return Math.pow((o+.055)/1.055,2.4)}Wf=a;function a(o){var s=o[0]/255,u=o[1]/255,c=o[2]/255,f=s<=.03928?s*n:i(s),h=u<=.03928?u*n:i(u),d=c<=.03928?c*n:i(c);return f*l+h*e+d*t}return Wf}var iv;function G3(){return iv||(iv=1,function(l){var e=B3(),t=sg,n=U3(),i=og(),a=lg(),o=cg();l.exports.parse=e.parse,l.exports.style=e.style,l.exports.names=t,l.exports.relativeLuminance=function(u){var c=l.exports.parse(u);return c?n(c.rgb):null},l.exports.contrastRatio=function(u,c){var f=l.exports.relativeLuminance(u),h=l.exports.relativeLuminance(c);if(f==null||h==null)return null;var d=Math.max(f,h),v=Math.min(f,h);return(d+.05)/(v+.05)},l.exports.offsetHSL=function(s,u,c,f){var h=l.exports.parse(s);return h?(h.hsla[0]+=u||0,h.hsla[1]=Math.max(0,Math.min(100,h.hsla[1]+(c||0))),h.hsla[2]=Math.max(0,Math.min(100,h.hsla[2]+(f||0))),l.exports.parse({hsla:h.hsla})):null},l.exports.blend=function(s,u,c){var f=l.exports.parse(s),h=l.exports.parse(u);if(f==null||h==null)return null;var d=f.rgba,v=h.rgba;c=typeof c=="number"&&isFinite(c)?c:1;var x=c*v[3];if(x>=1)return h;for(var p=0;p<3;p++)v[p]=v[p]*x+d[p]*(d[3]*(1-x));return v[3]=Math.max(0,Math.min(1,x+d[3]*(1-x))),l.exports.parse(v)},l.exports.hexToRGBA=a,l.exports.RGBAToHex=o,l.exports.RGBAToHSLA=i.RGBAToHSLA,l.exports.HSLAToRGBA=i.HSLAToRGBA}(kf)),kf.exports}var qf,av;function V3(){return av||(av=1,qf={random:gE(),math:_E(),penplot:HE(),geometry:ag(),shader:ZE(),color:G3()}),qf}var Vh=V3();Vh.random.setSeed(Bh);class H3 extends eg{constructor(t,n){super(t,n);Pi(this,"setup",()=>{let t=new Js,n=t.attributes.position.array;for(let i=0;i<n.length;i+=3)n[i]+=.5,n[i+1]+=.5;this.dummy=new Co,this.instanceTop=0,this.material=new hi({vertexShader:Q2,fragmentShader:J2,uniforms:{uTime:{value:null}}}),this.iGeometry=new G2().copy(t),this.iMesh=new N2(this.iGeometry,this.material,1e4),this.add(this.iMesh),this.setBuffers()});Pi(this,"setBuffers",()=>{let t=Math.pow(2,rn.maxDepth),n=new Float32Array(t),i=new Float32Array(t);for(let s=0;s<t;s++){n[s]=s,n[s+1]=s,n[s+2]=s;let u=Do();i[s]=u,i[s+1]=u,i[s+2]=u}let a=new mc(n,1),o=new mc(i,1);this.iGeometry.setAttribute("aIndex",a),this.iGeometry.setAttribute("aRand",o)});Pi(this,"rect",(t,n,i,a)=>{this.dummy.scale.set(i-rn.lineThick,a-rn.lineThick),this.dummy.position.set(t,n,0),this.dummy.updateMatrix(),this.iMesh.setMatrixAt(this.instanceTop++,this.dummy.matrix)});Pi(this,"animate",t=>Math.sin(t+this.time)*.5+.5);Pi(this,"makeTree",(t,n,i,a,o=0,s=0)=>{if(o>=rn.maxDepth){this.rect(t,n,i-t,a-n);return}o++;let u=.5,c=o+s,f=Math.cos(this.time+c)*u,h=Math.sin(this.time+c)*u,d=Vh.random.noise2D(f,h,.5,2),v=lf(0,rn.fwid,this.progress.value),x=this.animate(s+o+d)*v+(1-v)*.5;if(o&1){let p=lf(t,i,x);this.makeTree(t,n,p,a,o,s+1.5),this.makeTree(p,n,i,a,o,s)}else{let p=lf(n,a,x);this.makeTree(t,n,i,p,o,s),this.makeTree(t,p,i,a,o,s+1.5)}});Pi(this,"update",t=>{this.turnOff||(this.time=t*1,this.instanceTop=0,this.makeTree(-1,-1,1,1),this.material.uniforms.uTime.value=t,this.iMesh.instanceMatrix.needsUpdate=!0,this.iMesh.count=this.instanceTop)});this.camera=new Tr(45,1,.1,10),this.camera.position.set(0,0,2.4),this.turnOff=!1,this.progress={value:0},this.setup()}}var W3=`varying vec2 vUv;

void main() {\r
  vUv = uv;\r
  \r
  gl_Position = vec4(position, 1.0);\r
}`,q3=`struct Palette {\r
    vec3 brightness;\r
    vec3 contrast;\r
    vec3 oscillation;\r
    vec3 phase;\r
    float dir;\r
};

struct Metaball {\r
    float id;\r
    float radius;\r
    vec2 position;\r
    vec3 color;\r
    Palette pal;\r
    float dir;\r
};

uniform bool uInvertColor;\r
uniform bool uSaturateColor;\r
uniform bool uEnableThreshold;

uniform float uTime;\r
uniform float uAccum;\r
uniform float uProgress;\r
uniform float uPhaseStrength;\r
uniform float uNoiseStrength;\r
uniform float uNoiseSeed;\r
uniform float uFrequency1;\r
uniform float uFrequency2;\r
uniform float uAmplitude1;\r
uniform float uThreshold;\r
uniform float uDistanceFactor;\r
uniform float uRepeat;\r
uniform float uZoom;\r
uniform float uEase0;\r
uniform float uRestoreContrast;\r
uniform float uEase1;\r
uniform float uEase2;\r
uniform float uEase3;\r
uniform float uEase4;\r
uniform float uEase5;\r
uniform float uEase6;\r
uniform float uEase7;\r
uniform float uEase8;\r
uniform float uEase9;\r
uniform float uEase10;\r
uniform float uEase11;\r
uniform float uEase12;\r
uniform float uEase13;

uniform vec2 uResolution;

uniform Metaball uData[MAX_METABALLS];

uniform vec3 uBrightness;\r
uniform vec3 uContrast;\r
uniform vec3 uOscillation;\r
uniform vec3 uPhase;

uniform sampler2D tSubdiv;

varying vec2 vUv;

#ifndef EIGHTH_PI\r
#define EIGHTH_PI 0.39269908169\r
#endif\r
#ifndef QTR_PI\r
#define QTR_PI 0.78539816339\r
#endif\r
#ifndef HALF_PI\r
#define HALF_PI 1.5707963267948966192313216916398\r
#endif\r
#ifndef PI\r
#define PI 3.1415926535897932384626433832795\r
#endif\r
#ifndef TWO_PI\r
#define TWO_PI 6.2831853071795864769252867665590\r
#endif\r
#ifndef TAU\r
#define TAU 6.2831853071795864769252867665590\r
#endif\r
#ifndef INV_PI\r
#define INV_PI 0.31830988618379067153776752674503\r
#endif\r
#ifndef INV_SQRT_TAU\r
#define INV_SQRT_TAU 0.39894228040143267793994605993439  
#endif\r
#ifndef SQRT_HALF_PI\r
#define SQRT_HALF_PI 1.25331413732\r
#endif\r
#ifndef PHI\r
#define PHI 1.618033988749894848204586834\r
#endif\r
#ifndef EPSILON\r
#define EPSILON 0.0000001\r
#endif\r
#ifndef GOLDEN_RATIO\r
#define GOLDEN_RATIO 1.6180339887\r
#endif\r
#ifndef GOLDEN_RATIO_CONJUGATE \r
#define GOLDEN_RATIO_CONJUGATE 0.61803398875\r
#endif\r
#ifndef GOLDEN_ANGLE 
#define GOLDEN_ANGLE 2.39996323\r
#endif\r
#ifndef DEG2RAD\r
#define DEG2RAD (PI / 180.0)\r
#endif\r
#ifndef RAD2DEG\r
#define RAD2DEG (180.0 / PI)\r
#endif\r
#ifndef FNC_MAP\r
#define FNC_MAP\r
float map(float v, float iMin, float iMax ) { return (v-iMin)/(iMax-iMin); }\r
vec2 map(vec2 v, vec2 iMin, vec2 iMax ) { return (v-iMin)/(iMax-iMin); }\r
vec3 map(vec3 v, vec3 iMin, vec3 iMax ) { return (v-iMin)/(iMax-iMin); }\r
vec4 map(vec4 v, vec4 iMin, vec4 iMax ) { return (v-iMin)/(iMax-iMin); }

float map(in float v, in float iMin, in float iMax, in float oMin, in float oMax) { return oMin + (oMax - oMin) * (v - iMin) / (iMax - iMin); }\r
vec2 map(in vec2 v, in vec2 iMin, in vec2 iMax, in vec2 oMin, in vec2 oMax) { return oMin + (oMax - oMin) * (v - iMin) / (iMax - iMin); }\r
vec3 map(in vec3 v, in vec3 iMin, in vec3 iMax, in vec3 oMin, in vec3 oMax) { return oMin + (oMax - oMin) * (v - iMin) / (iMax - iMin); }\r
vec4 map(in vec4 v, in vec4 iMin, in vec4 iMax, in vec4 oMin, in vec4 oMax) { return oMin + (oMax - oMin) * (v - iMin) / (iMax - iMin); }\r
#endif\r
#ifndef FNC_ASPECT\r
#define FNC_ASPECT\r
vec2 aspect(vec2 st, vec2 s) {\r
    st.x = st.x * (s.x / s.y);\r
    return st;\r
}\r
#endif\r
#ifndef FNC_ROTATE2D\r
#define FNC_ROTATE2D\r
mat2 rotate2d(const in float r){\r
    float c = cos(r);\r
    float s = sin(r);\r
    return mat2(c, s, -s, c);\r
}\r
#endif\r
#ifndef FNC_ROTATE4D\r
#define FNC_ROTATE4D\r
mat4 rotate4d(in vec3 a, const in float r) {\r
    a = normalize(a);\r
    float s = sin(r);\r
    float c = cos(r);\r
    float oc = 1.0 - c;\r
    vec4 col1 = vec4(oc * a.x * a.x + c, oc * a.x * a.y + a.z * s, oc * a.z * a.x - a.y * s, 0.0);\r
    vec4 col2 = vec4(oc * a.x * a.y - a.z * s, oc * a.y * a.y + c, oc * a.y * a.z + a.x * s, 0.0);\r
    vec4 col3 = vec4(oc * a.z * a.x + a.y * s, oc * a.y * a.z - a.x * s, oc * a.z * a.z + c, 0.0);\r
    vec4 col4 = vec4(0.0, 0.0, 0.0, 1.0);\r
    return mat4(col1, col2, col3, col4);\r
}\r
#endif

#ifndef FNC_ROTATE\r
#define FNC_ROTATE\r
vec2 rotate(in vec2 v, in float r, in vec2 c) {\r
    return rotate2d(r) * (v - c) + c;\r
}

vec2 rotate(in vec2 v, in float r) {\r
    #ifdef CENTER_2D\r
    return rotate(v, r, CENTER_2D);\r
    #else\r
    return rotate(v, r, vec2(.5));\r
    #endif\r
}

vec2 rotate(vec2 v, vec2 x_axis) {\r
    #ifdef CENTER_2D\r
    v -= CENTER_2D;\r
    #endif\r
    vec2 rta = vec2( dot(v, vec2(-x_axis.y, x_axis.x)), dot(v, x_axis) );\r
    #ifdef CENTER_2D\r
    rta += CENTER_2D;\r
    #endif\r
    return rta;\r
}

vec3 rotate(in vec3 v, in float r, in vec3 axis, in vec3 c) {\r
    return (rotate4d(axis, r) * vec4(v - c, 1.)).xyz + c;\r
}

vec3 rotate(in vec3 v, in float r, in vec3 axis) {\r
    #ifdef CENTER_3D\r
    return rotate(v, r, axis, CENTER_3D);\r
    #else\r
    return rotate(v, r, axis, vec3(0.));\r
    #endif\r
}

vec4 rotate(in vec4 v, in float r, in vec3 axis, in vec4 c) {\r
    return rotate4d(axis, r) * (v - c) + c;\r
}

vec4 rotate(in vec4 v, in float r, in vec3 axis) {\r
    #ifdef CENTER_4D\r
    return rotate(v, r, axis, CENTER_4D);\r
    #else\r
    return rotate(v, r, axis, vec4(0.));\r
    #endif\r
}

#if defined(FNC_QUATMULT)\r
vec3 rotate(QUAT q, vec3 v) {\r
    QUAT q_c = QUAT(-q.x, -q.y, -q.z, q.w);\r
    return quatMul(q, quatMul(vec4(v, 0), q_c)).xyz;\r
}

vec3 rotate(QUAT q, vec3 v, vec3 c) {\r
    vec3 dir = v - c;\r
    return c + rotate(q, dir);\r
}\r
#endif

#endif\r
#ifndef EIGHTH_PI\r
#define EIGHTH_PI 0.39269908169\r
#endif\r
#ifndef QTR_PI\r
#define QTR_PI 0.78539816339\r
#endif\r
#ifndef HALF_PI\r
#define HALF_PI 1.5707963267948966192313216916398\r
#endif\r
#ifndef PI\r
#define PI 3.1415926535897932384626433832795\r
#endif\r
#ifndef TWO_PI\r
#define TWO_PI 6.2831853071795864769252867665590\r
#endif\r
#ifndef TAU\r
#define TAU 6.2831853071795864769252867665590\r
#endif\r
#ifndef INV_PI\r
#define INV_PI 0.31830988618379067153776752674503\r
#endif\r
#ifndef INV_SQRT_TAU\r
#define INV_SQRT_TAU 0.39894228040143267793994605993439  
#endif\r
#ifndef SQRT_HALF_PI\r
#define SQRT_HALF_PI 1.25331413732\r
#endif\r
#ifndef PHI\r
#define PHI 1.618033988749894848204586834\r
#endif\r
#ifndef EPSILON\r
#define EPSILON 0.0000001\r
#endif\r
#ifndef GOLDEN_RATIO\r
#define GOLDEN_RATIO 1.6180339887\r
#endif\r
#ifndef GOLDEN_RATIO_CONJUGATE \r
#define GOLDEN_RATIO_CONJUGATE 0.61803398875\r
#endif\r
#ifndef GOLDEN_ANGLE 
#define GOLDEN_ANGLE 2.39996323\r
#endif\r
#ifndef DEG2RAD\r
#define DEG2RAD (PI / 180.0)\r
#endif\r
#ifndef RAD2DEG\r
#define RAD2DEG (180.0 / PI)\r
#endif

#ifndef FNC_PALETTE\r
#define FNC_PALETTE\r
vec3 palette (in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d) { return a + b * cos(TAU * ( c * t + d )); }\r
vec4 palette (in float t, in vec4 a, in vec4 b, in vec4 c, in vec4 d) { return a + b * cos(TAU * ( c * t + d )); }\r
#endif\r
#ifndef RANDOM_SCALE\r
#ifdef RANDOM_HIGHER_RANGE\r
#define RANDOM_SCALE vec4(.1031, .1030, .0973, .1099)\r
#else\r
#define RANDOM_SCALE vec4(443.897, 441.423, .0973, .1099)\r
#endif\r
#endif

#ifndef FNC_RANDOM\r
#define FNC_RANDOM\r
float random(in float x) {\r
#ifdef RANDOM_SINLESS\r
    x = fract(x * RANDOM_SCALE.x);\r
    x *= x + 33.33;\r
    x *= x + x;\r
    return fract(x);\r
#else\r
    return fract(sin(x) * 43758.5453);\r
#endif\r
}

float random(in vec2 st) {\r
#ifdef RANDOM_SINLESS\r
    vec3 p3  = fract(vec3(st.xyx) * RANDOM_SCALE.xyz);\r
    p3 += dot(p3, p3.yzx + 33.33);\r
    return fract((p3.x + p3.y) * p3.z);\r
#else\r
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453);\r
#endif\r
}

float random(in vec3 pos) {\r
#ifdef RANDOM_SINLESS\r
    pos  = fract(pos * RANDOM_SCALE.xyz);\r
    pos += dot(pos, pos.zyx + 31.32);\r
    return fract((pos.x + pos.y) * pos.z);\r
#else\r
    return fract(sin(dot(pos.xyz, vec3(70.9898, 78.233, 32.4355))) * 43758.5453123);\r
#endif\r
}

float random(in vec4 pos) {\r
#ifdef RANDOM_SINLESS\r
    pos = fract(pos * RANDOM_SCALE);\r
    pos += dot(pos, pos.wzxy + 33.33);\r
    return fract((pos.x + pos.y) * (pos.z + pos.w));\r
#else\r
    float dot_product = dot(pos, vec4(12.9898,78.233,45.164,94.673));\r
    return fract(sin(dot_product) * 43758.5453);\r
#endif\r
}

vec2 random2(float p) {\r
    vec3 p3 = fract(vec3(p) * RANDOM_SCALE.xyz);\r
    p3 += dot(p3, p3.yzx + 19.19);\r
    return fract((p3.xx + p3.yz) * p3.zy);\r
}

vec2 random2(vec2 p) {\r
    vec3 p3 = fract(p.xyx * RANDOM_SCALE.xyz);\r
    p3 += dot(p3, p3.yzx + 19.19);\r
    return fract((p3.xx + p3.yz) * p3.zy);\r
}

vec2 random2(vec3 p3) {\r
    p3 = fract(p3 * RANDOM_SCALE.xyz);\r
    p3 += dot(p3, p3.yzx + 19.19);\r
    return fract((p3.xx + p3.yz) * p3.zy);\r
}

vec3 random3(float p) {\r
    vec3 p3 = fract(vec3(p) * RANDOM_SCALE.xyz);\r
    p3 += dot(p3, p3.yzx + 19.19);\r
    return fract((p3.xxy + p3.yzz) * p3.zyx); \r
}

vec3 random3(vec2 p) {\r
    vec3 p3 = fract(vec3(p.xyx) * RANDOM_SCALE.xyz);\r
    p3 += dot(p3, p3.yxz + 19.19);\r
    return fract((p3.xxy + p3.yzz) * p3.zyx);\r
}

vec3 random3(vec3 p) {\r
    p = fract(p * RANDOM_SCALE.xyz);\r
    p += dot(p, p.yxz + 19.19);\r
    return fract((p.xxy + p.yzz) * p.zyx);\r
}

vec4 random4(float p) {\r
    vec4 p4 = fract(p * RANDOM_SCALE);\r
    p4 += dot(p4, p4.wzxy + 19.19);\r
    return fract((p4.xxyz + p4.yzzw) * p4.zywx);   \r
}

vec4 random4(vec2 p) {\r
    vec4 p4 = fract(p.xyxy * RANDOM_SCALE);\r
    p4 += dot(p4, p4.wzxy + 19.19);\r
    return fract((p4.xxyz + p4.yzzw) * p4.zywx);\r
}

vec4 random4(vec3 p) {\r
    vec4 p4 = fract(p.xyzx * RANDOM_SCALE);\r
    p4 += dot(p4, p4.wzxy + 19.19);\r
    return fract((p4.xxyz + p4.yzzw) * p4.zywx);\r
}

vec4 random4(vec4 p4) {\r
    p4 = fract(p4  * RANDOM_SCALE);\r
    p4 += dot(p4, p4.wzxy + 19.19);\r
    return fract((p4.xxyz + p4.yzzw) * p4.zywx);\r
}\r
#endif\r
#ifndef FNC_MOD289\r
#define FNC_MOD289

float mod289(const in float x) { return x - floor(x * (1. / 289.)) * 289.; }\r
vec2 mod289(const in vec2 x) { return x - floor(x * (1. / 289.)) * 289.; }\r
vec3 mod289(const in vec3 x) { return x - floor(x * (1. / 289.)) * 289.; }\r
vec4 mod289(const in vec4 x) { return x - floor(x * (1. / 289.)) * 289.; }

#endif\r
#ifndef FNC_MOD289\r
#define FNC_MOD289

float mod289(const in float x) { return x - floor(x * (1. / 289.)) * 289.; }\r
vec2 mod289(const in vec2 x) { return x - floor(x * (1. / 289.)) * 289.; }\r
vec3 mod289(const in vec3 x) { return x - floor(x * (1. / 289.)) * 289.; }\r
vec4 mod289(const in vec4 x) { return x - floor(x * (1. / 289.)) * 289.; }

#endif

#ifndef FNC_PERMUTE\r
#define FNC_PERMUTE

float permute(const in float v) { return mod289(((v * 34.0) + 1.0) * v); }\r
vec2 permute(const in vec2 v) { return mod289(((v * 34.0) + 1.0) * v); }\r
vec3 permute(const in vec3 v) { return mod289(((v * 34.0) + 1.0) * v); }\r
vec4 permute(const in vec4 v) { return mod289(((v * 34.0) + 1.0) * v); }

#endif\r
#ifndef FNC_TAYLORINVSQRT\r
#define FNC_TAYLORINVSQRT\r
float taylorInvSqrt(in float r) { return 1.79284291400159 - 0.85373472095314 * r; }\r
vec2 taylorInvSqrt(in vec2 r) { return 1.79284291400159 - 0.85373472095314 * r; }\r
vec3 taylorInvSqrt(in vec3 r) { return 1.79284291400159 - 0.85373472095314 * r; }\r
vec4 taylorInvSqrt(in vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }\r
#endif\r
#ifndef FNC_QUINTIC\r
#define FNC_QUINTIC 

float quintic(const in float v) { return v*v*v*(v*(v*6.0-15.0)+10.0); }\r
vec2  quintic(const in vec2 v)  { return v*v*v*(v*(v*6.0-15.0)+10.0); }\r
vec3  quintic(const in vec3 v)  { return v*v*v*(v*(v*6.0-15.0)+10.0); }\r
vec4  quintic(const in vec4 v)  { return v*v*v*(v*(v*6.0-15.0)+10.0); }

#endif

#ifndef FNC_CNOISE\r
#define FNC_CNOISE

float cnoise(in vec2 P) {\r
    vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);\r
    vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);\r
    Pi = mod289(Pi); 
    vec4 ix = Pi.xzxz;\r
    vec4 iy = Pi.yyww;\r
    vec4 fx = Pf.xzxz;\r
    vec4 fy = Pf.yyww;

    vec4 i = permute(permute(ix) + iy);

    vec4 gx = fract(i * (1.0 / 41.0)) * 2.0 - 1.0 ;\r
    vec4 gy = abs(gx) - 0.5 ;\r
    vec4 tx = floor(gx + 0.5);\r
    gx = gx - tx;

    vec2 g00 = vec2(gx.x,gy.x);\r
    vec2 g10 = vec2(gx.y,gy.y);\r
    vec2 g01 = vec2(gx.z,gy.z);\r
    vec2 g11 = vec2(gx.w,gy.w);

    vec4 norm = taylorInvSqrt(vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11)));\r
    g00 *= norm.x;\r
    g01 *= norm.y;\r
    g10 *= norm.z;\r
    g11 *= norm.w;

    float n00 = dot(g00, vec2(fx.x, fy.x));\r
    float n10 = dot(g10, vec2(fx.y, fy.y));\r
    float n01 = dot(g01, vec2(fx.z, fy.z));\r
    float n11 = dot(g11, vec2(fx.w, fy.w));

    vec2 fade_xy = quintic(Pf.xy);\r
    vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);\r
    float n_xy = mix(n_x.x, n_x.y, fade_xy.y);\r
    return 2.3 * n_xy;\r
}

float cnoise(in vec3 P) {\r
    vec3 Pi0 = floor(P); 
    vec3 Pi1 = Pi0 + vec3(1.0); 
    Pi0 = mod289(Pi0);\r
    Pi1 = mod289(Pi1);\r
    vec3 Pf0 = fract(P); 
    vec3 Pf1 = Pf0 - vec3(1.0); 
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\r
    vec4 iy = vec4(Pi0.yy, Pi1.yy);\r
    vec4 iz0 = Pi0.zzzz;\r
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);\r
    vec4 ixy0 = permute(ixy + iz0);\r
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 * (1.0 / 7.0);\r
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\r
    gx0 = fract(gx0);\r
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\r
    vec4 sz0 = step(gz0, vec4(0.0));\r
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);\r
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 * (1.0 / 7.0);\r
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\r
    gx1 = fract(gx1);\r
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\r
    vec4 sz1 = step(gz1, vec4(0.0));\r
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);\r
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\r
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\r
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\r
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\r
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\r
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\r
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\r
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\r
    g000 *= norm0.x;\r
    g010 *= norm0.y;\r
    g100 *= norm0.z;\r
    g110 *= norm0.w;\r
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\r
    g001 *= norm1.x;\r
    g011 *= norm1.y;\r
    g101 *= norm1.z;\r
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);\r
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\r
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\r
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\r
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\r
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\r
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\r
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = quintic(Pf0);\r
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\r
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\r
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\r
    return 2.2 * n_xyz;\r
}

float cnoise(in vec4 P) {\r
    vec4 Pi0 = floor(P); 
    vec4 Pi1 = Pi0 + 1.0; 
    Pi0 = mod289(Pi0);\r
    Pi1 = mod289(Pi1);\r
    vec4 Pf0 = fract(P); 
    vec4 Pf1 = Pf0 - 1.0; 
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\r
    vec4 iy = vec4(Pi0.yy, Pi1.yy);\r
    vec4 iz0 = vec4(Pi0.zzzz);\r
    vec4 iz1 = vec4(Pi1.zzzz);\r
    vec4 iw0 = vec4(Pi0.wwww);\r
    vec4 iw1 = vec4(Pi1.wwww);

    vec4 ixy = permute(permute(ix) + iy);\r
    vec4 ixy0 = permute(ixy + iz0);\r
    vec4 ixy1 = permute(ixy + iz1);\r
    vec4 ixy00 = permute(ixy0 + iw0);\r
    vec4 ixy01 = permute(ixy0 + iw1);\r
    vec4 ixy10 = permute(ixy1 + iw0);\r
    vec4 ixy11 = permute(ixy1 + iw1);

    vec4 gx00 = ixy00 * (1.0 / 7.0);\r
    vec4 gy00 = floor(gx00) * (1.0 / 7.0);\r
    vec4 gz00 = floor(gy00) * (1.0 / 6.0);\r
    gx00 = fract(gx00) - 0.5;\r
    gy00 = fract(gy00) - 0.5;\r
    gz00 = fract(gz00) - 0.5;\r
    vec4 gw00 = vec4(0.75) - abs(gx00) - abs(gy00) - abs(gz00);\r
    vec4 sw00 = step(gw00, vec4(0.0));\r
    gx00 -= sw00 * (step(0.0, gx00) - 0.5);\r
    gy00 -= sw00 * (step(0.0, gy00) - 0.5);

    vec4 gx01 = ixy01 * (1.0 / 7.0);\r
    vec4 gy01 = floor(gx01) * (1.0 / 7.0);\r
    vec4 gz01 = floor(gy01) * (1.0 / 6.0);\r
    gx01 = fract(gx01) - 0.5;\r
    gy01 = fract(gy01) - 0.5;\r
    gz01 = fract(gz01) - 0.5;\r
    vec4 gw01 = vec4(0.75) - abs(gx01) - abs(gy01) - abs(gz01);\r
    vec4 sw01 = step(gw01, vec4(0.0));\r
    gx01 -= sw01 * (step(0.0, gx01) - 0.5);\r
    gy01 -= sw01 * (step(0.0, gy01) - 0.5);

    vec4 gx10 = ixy10 * (1.0 / 7.0);\r
    vec4 gy10 = floor(gx10) * (1.0 / 7.0);\r
    vec4 gz10 = floor(gy10) * (1.0 / 6.0);\r
    gx10 = fract(gx10) - 0.5;\r
    gy10 = fract(gy10) - 0.5;\r
    gz10 = fract(gz10) - 0.5;\r
    vec4 gw10 = vec4(0.75) - abs(gx10) - abs(gy10) - abs(gz10);\r
    vec4 sw10 = step(gw10, vec4(0.0));\r
    gx10 -= sw10 * (step(0.0, gx10) - 0.5);\r
    gy10 -= sw10 * (step(0.0, gy10) - 0.5);

    vec4 gx11 = ixy11 * (1.0 / 7.0);\r
    vec4 gy11 = floor(gx11) * (1.0 / 7.0);\r
    vec4 gz11 = floor(gy11) * (1.0 / 6.0);\r
    gx11 = fract(gx11) - 0.5;\r
    gy11 = fract(gy11) - 0.5;\r
    gz11 = fract(gz11) - 0.5;\r
    vec4 gw11 = vec4(0.75) - abs(gx11) - abs(gy11) - abs(gz11);\r
    vec4 sw11 = step(gw11, vec4(0.0));\r
    gx11 -= sw11 * (step(0.0, gx11) - 0.5);\r
    gy11 -= sw11 * (step(0.0, gy11) - 0.5);

    vec4 g0000 = vec4(gx00.x,gy00.x,gz00.x,gw00.x);\r
    vec4 g1000 = vec4(gx00.y,gy00.y,gz00.y,gw00.y);\r
    vec4 g0100 = vec4(gx00.z,gy00.z,gz00.z,gw00.z);\r
    vec4 g1100 = vec4(gx00.w,gy00.w,gz00.w,gw00.w);\r
    vec4 g0010 = vec4(gx10.x,gy10.x,gz10.x,gw10.x);\r
    vec4 g1010 = vec4(gx10.y,gy10.y,gz10.y,gw10.y);\r
    vec4 g0110 = vec4(gx10.z,gy10.z,gz10.z,gw10.z);\r
    vec4 g1110 = vec4(gx10.w,gy10.w,gz10.w,gw10.w);\r
    vec4 g0001 = vec4(gx01.x,gy01.x,gz01.x,gw01.x);\r
    vec4 g1001 = vec4(gx01.y,gy01.y,gz01.y,gw01.y);\r
    vec4 g0101 = vec4(gx01.z,gy01.z,gz01.z,gw01.z);\r
    vec4 g1101 = vec4(gx01.w,gy01.w,gz01.w,gw01.w);\r
    vec4 g0011 = vec4(gx11.x,gy11.x,gz11.x,gw11.x);\r
    vec4 g1011 = vec4(gx11.y,gy11.y,gz11.y,gw11.y);\r
    vec4 g0111 = vec4(gx11.z,gy11.z,gz11.z,gw11.z);\r
    vec4 g1111 = vec4(gx11.w,gy11.w,gz11.w,gw11.w);

    vec4 norm00 = taylorInvSqrt(vec4(dot(g0000, g0000), dot(g0100, g0100), dot(g1000, g1000), dot(g1100, g1100)));\r
    g0000 *= norm00.x;\r
    g0100 *= norm00.y;\r
    g1000 *= norm00.z;\r
    g1100 *= norm00.w;

    vec4 norm01 = taylorInvSqrt(vec4(dot(g0001, g0001), dot(g0101, g0101), dot(g1001, g1001), dot(g1101, g1101)));\r
    g0001 *= norm01.x;\r
    g0101 *= norm01.y;\r
    g1001 *= norm01.z;\r
    g1101 *= norm01.w;

    vec4 norm10 = taylorInvSqrt(vec4(dot(g0010, g0010), dot(g0110, g0110), dot(g1010, g1010), dot(g1110, g1110)));\r
    g0010 *= norm10.x;\r
    g0110 *= norm10.y;\r
    g1010 *= norm10.z;\r
    g1110 *= norm10.w;

    vec4 norm11 = taylorInvSqrt(vec4(dot(g0011, g0011), dot(g0111, g0111), dot(g1011, g1011), dot(g1111, g1111)));\r
    g0011 *= norm11.x;\r
    g0111 *= norm11.y;\r
    g1011 *= norm11.z;\r
    g1111 *= norm11.w;

    float n0000 = dot(g0000, Pf0);\r
    float n1000 = dot(g1000, vec4(Pf1.x, Pf0.yzw));\r
    float n0100 = dot(g0100, vec4(Pf0.x, Pf1.y, Pf0.zw));\r
    float n1100 = dot(g1100, vec4(Pf1.xy, Pf0.zw));\r
    float n0010 = dot(g0010, vec4(Pf0.xy, Pf1.z, Pf0.w));\r
    float n1010 = dot(g1010, vec4(Pf1.x, Pf0.y, Pf1.z, Pf0.w));\r
    float n0110 = dot(g0110, vec4(Pf0.x, Pf1.yz, Pf0.w));\r
    float n1110 = dot(g1110, vec4(Pf1.xyz, Pf0.w));\r
    float n0001 = dot(g0001, vec4(Pf0.xyz, Pf1.w));\r
    float n1001 = dot(g1001, vec4(Pf1.x, Pf0.yz, Pf1.w));\r
    float n0101 = dot(g0101, vec4(Pf0.x, Pf1.y, Pf0.z, Pf1.w));\r
    float n1101 = dot(g1101, vec4(Pf1.xy, Pf0.z, Pf1.w));\r
    float n0011 = dot(g0011, vec4(Pf0.xy, Pf1.zw));\r
    float n1011 = dot(g1011, vec4(Pf1.x, Pf0.y, Pf1.zw));\r
    float n0111 = dot(g0111, vec4(Pf0.x, Pf1.yzw));\r
    float n1111 = dot(g1111, Pf1);

    vec4 fade_xyzw = quintic(Pf0);\r
    vec4 n_0w = mix(vec4(n0000, n1000, n0100, n1100), vec4(n0001, n1001, n0101, n1101), fade_xyzw.w);\r
    vec4 n_1w = mix(vec4(n0010, n1010, n0110, n1110), vec4(n0011, n1011, n0111, n1111), fade_xyzw.w);\r
    vec4 n_zw = mix(n_0w, n_1w, fade_xyzw.z);\r
    vec2 n_yzw = mix(n_zw.xy, n_zw.zw, fade_xyzw.y);\r
    float n_xyzw = mix(n_yzw.x, n_yzw.y, fade_xyzw.x);\r
    return 2.2 * n_xyzw;\r
}\r
#endif\r
#ifndef FNC_MOD289\r
#define FNC_MOD289

float mod289(const in float x) { return x - floor(x * (1. / 289.)) * 289.; }\r
vec2 mod289(const in vec2 x) { return x - floor(x * (1. / 289.)) * 289.; }\r
vec3 mod289(const in vec3 x) { return x - floor(x * (1. / 289.)) * 289.; }\r
vec4 mod289(const in vec4 x) { return x - floor(x * (1. / 289.)) * 289.; }

#endif\r
#ifndef FNC_MOD289\r
#define FNC_MOD289

float mod289(const in float x) { return x - floor(x * (1. / 289.)) * 289.; }\r
vec2 mod289(const in vec2 x) { return x - floor(x * (1. / 289.)) * 289.; }\r
vec3 mod289(const in vec3 x) { return x - floor(x * (1. / 289.)) * 289.; }\r
vec4 mod289(const in vec4 x) { return x - floor(x * (1. / 289.)) * 289.; }

#endif

#ifndef FNC_PERMUTE\r
#define FNC_PERMUTE

float permute(const in float v) { return mod289(((v * 34.0) + 1.0) * v); }\r
vec2 permute(const in vec2 v) { return mod289(((v * 34.0) + 1.0) * v); }\r
vec3 permute(const in vec3 v) { return mod289(((v * 34.0) + 1.0) * v); }\r
vec4 permute(const in vec4 v) { return mod289(((v * 34.0) + 1.0) * v); }

#endif\r
#ifndef FNC_TAYLORINVSQRT\r
#define FNC_TAYLORINVSQRT\r
float taylorInvSqrt(in float r) { return 1.79284291400159 - 0.85373472095314 * r; }\r
vec2 taylorInvSqrt(in vec2 r) { return 1.79284291400159 - 0.85373472095314 * r; }\r
vec3 taylorInvSqrt(in vec3 r) { return 1.79284291400159 - 0.85373472095314 * r; }\r
vec4 taylorInvSqrt(in vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }\r
#endif\r
#ifndef FNC_GRAD4\r
#define FNC_GRAD4\r
vec4 grad4(float j, vec4 ip) {\r
    const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\r
    vec4 p,s;\r
    p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\r
    p.w = 1.5 - dot(abs(p.xyz), ones.xyz);\r
    s = vec4(lessThan(p, vec4(0.0)));\r
    p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;\r
    return p;\r
}\r
#endif

#ifndef FNC_SNOISE\r
#define FNC_SNOISE\r
float snoise(in vec2 v) {\r
    const vec4 C = vec4(0.211324865405187,  
                        0.366025403784439,  
                        -0.577350269189626,  
                        0.024390243902439); 
    
    vec2 i  = floor(v + dot(v, C.yy) );\r
    vec2 x0 = v -   i + dot(i, C.xx);

    
    vec2 i1;\r
    
    
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\r
    
    
    
    vec4 x12 = x0.xyxy + C.xxzz;\r
    x12.xy -= i1;

    
    i = mod289(i); 
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\r
    + i.x + vec3(0.0, i1.x, 1.0 ));

    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\r
    m = m*m ;\r
    m = m*m ;

    
    

    vec3 x = 2.0 * fract(p * C.www) - 1.0;\r
    vec3 h = abs(x) - 0.5;\r
    vec3 ox = floor(x + 0.5);\r
    vec3 a0 = x - ox;

    
    
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

    
    vec3 g;\r
    g.x  = a0.x  * x0.x  + h.x  * x0.y;\r
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;\r
    return 130.0 * dot(m, g);\r
}

float snoise(in vec3 v) {\r
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\r
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

    
    vec3 i  = floor(v + dot(v, C.yyy) );\r
    vec3 x0 =   v - i + dot(i, C.xxx) ;

    
    vec3 g = step(x0.yzx, x0.xyz);\r
    vec3 l = 1.0 - g;\r
    vec3 i1 = min( g.xyz, l.zxy );\r
    vec3 i2 = max( g.xyz, l.zxy );

    
    
    
    
    vec3 x1 = x0 - i1 + C.xxx;\r
    vec3 x2 = x0 - i2 + C.yyy; 
    vec3 x3 = x0 - D.yyy;      

    
    i = mod289(i);\r
    vec4 p = permute( permute( permute(\r
                i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\r
            + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\r
            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    
    
    float n_ = 0.142857142857; 
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  

    vec4 x_ = floor(j * ns.z);\r
    vec4 y_ = floor(j - 7.0 * x_ );    

    vec4 x = x_ *ns.x + ns.yyyy;\r
    vec4 y = y_ *ns.x + ns.yyyy;\r
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );\r
    vec4 b1 = vec4( x.zw, y.zw );

    
    
    vec4 s0 = floor(b0)*2.0 + 1.0;\r
    vec4 s1 = floor(b1)*2.0 + 1.0;\r
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\r
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);\r
    vec3 p1 = vec3(a0.zw,h.y);\r
    vec3 p2 = vec3(a1.xy,h.z);\r
    vec3 p3 = vec3(a1.zw,h.w);

    
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\r
    p0 *= norm.x;\r
    p1 *= norm.y;\r
    p2 *= norm.z;\r
    p3 *= norm.w;

    
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\r
    m = m * m;\r
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\r
                                dot(p2,x2), dot(p3,x3) ) );\r
}

float snoise(in vec4 v) {\r
    const vec4  C = vec4( 0.138196601125011,  
                        0.276393202250021,  
                        0.414589803375032,  
                        -0.447213595499958); 

    
    vec4 i  = floor(v + dot(v, vec4(.309016994374947451)) ); 
    vec4 x0 = v -   i + dot(i, C.xxxx);

    

    
    vec4 i0;\r
    vec3 isX = step( x0.yzw, x0.xxx );\r
    vec3 isYZ = step( x0.zww, x0.yyz );\r
    
    i0.x = isX.x + isX.y + isX.z;\r
    i0.yzw = 1.0 - isX;\r
    
    i0.y += isYZ.x + isYZ.y;\r
    i0.zw += 1.0 - isYZ.xy;\r
    i0.z += isYZ.z;\r
    i0.w += 1.0 - isYZ.z;

    
    vec4 i3 = clamp( i0, 0.0, 1.0 );\r
    vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );\r
    vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

    
    
    
    
    
    vec4 x1 = x0 - i1 + C.xxxx;\r
    vec4 x2 = x0 - i2 + C.yyyy;\r
    vec4 x3 = x0 - i3 + C.zzzz;\r
    vec4 x4 = x0 + C.wwww;

    
    i = mod289(i);\r
    float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);\r
    vec4 j1 = permute( permute( permute( permute (\r
                i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))\r
            + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))\r
            + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))\r
            + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));

    
    
    vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

    vec4 p0 = grad4(j0,   ip);\r
    vec4 p1 = grad4(j1.x, ip);\r
    vec4 p2 = grad4(j1.y, ip);\r
    vec4 p3 = grad4(j1.z, ip);\r
    vec4 p4 = grad4(j1.w, ip);

    
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\r
    p0 *= norm.x;\r
    p1 *= norm.y;\r
    p2 *= norm.z;\r
    p3 *= norm.w;\r
    p4 *= taylorInvSqrt(dot(p4,p4));

    
    vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);\r
    vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);\r
    m0 = m0 * m0;\r
    m1 = m1 * m1;\r
    return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))\r
                + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;\r
}

vec2 snoise2( vec2 x ){\r
    float s  = snoise(vec2( x ));\r
    float s1 = snoise(vec2( x.y - 19.1, x.x + 47.2 ));\r
    return vec2( s , s1 );\r
}

vec3 snoise3( vec3 x ){\r
    float s  = snoise(vec3( x ));\r
    float s1 = snoise(vec3( x.y - 19.1 , x.z + 33.4 , x.x + 47.2 ));\r
    float s2 = snoise(vec3( x.z + 74.2 , x.x - 124.5 , x.y + 99.4 ));\r
    return vec3( s , s1 , s2 );\r
}

vec3 snoise3( vec4 x ){\r
    float s  = snoise(vec4( x ));\r
    float s1 = snoise(vec4( x.y - 19.1 , x.z + 33.4 , x.x + 47.2, x.w ));\r
    float s2 = snoise(vec4( x.z + 74.2 , x.x - 124.5 , x.y + 99.4, x.w ));\r
    return vec3( s , s1 , s2 );\r
}

#endif

#ifndef FNC_CURL\r
#define FNC_CURL

#ifndef CURL_FNC\r
vec2 curl( vec2 p ) {\r
    const float e = .1;\r
    vec2 dx = vec2( e   , 0.0 );\r
    vec2 dy = vec2( 0.0 , e   );

    vec2 p_x0 = snoise2( p - dx );\r
    vec2 p_x1 = snoise2( p + dx );\r
    vec2 p_y0 = snoise2( p - dy );\r
    vec2 p_y1 = snoise2( p + dy );

    float x = p_x1.y + p_x0.y;\r
    float y = p_y1.x - p_y0.x;

    const float divisor = 1.0 / ( 2.0 * e );\r
    #ifndef CURL_UNNORMALIZED\r
    return normalize( vec2(x, y) * divisor );\r
    #else\r
    return vec2(x, y) * divisor;\r
    #endif\r
}\r
#else\r
vec2 curl( vec2 p ) {\r
    vec2 e = vec2(0.1, 0.0);\r
    vec3 pos = vec3(p, 0.0);\r
    vec2 C = vec2(  (CURL_FNC(pos+e.yxy)-CURL_FNC(pos-e.yxy))/(2.0*e.x),\r
                   -(CURL_FNC(pos+e.xyy)-CURL_FNC(pos-e.xyy))/(2.0*e.x));

    #ifndef CURL_UNNORMALIZED\r
    return normalize(C);\r
    #else\r
    float divisor = 1.0 / (2.0 * e.x);\r
    return C * divisor;\r
    #endif\r
}\r
#endif

vec3 curl( vec3 p ){\r
    const float e = .1;\r
    vec3 dx = vec3( e   , 0.0 , 0.0 );\r
    vec3 dy = vec3( 0.0 , e   , 0.0 );\r
    vec3 dz = vec3( 0.0 , 0.0 , e   );

    vec3 p_x0 = snoise3( p - dx );\r
    vec3 p_x1 = snoise3( p + dx );\r
    vec3 p_y0 = snoise3( p - dy );\r
    vec3 p_y1 = snoise3( p + dy );\r
    vec3 p_z0 = snoise3( p - dz );\r
    vec3 p_z1 = snoise3( p + dz );

    float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;\r
    float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;\r
    float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;

    const float divisor = 1.0 / ( 2.0 * e );\r
    #ifndef CURL_UNNORMALIZED\r
    return normalize( vec3( x , y , z ) * divisor );\r
    #else\r
    return vec3( x , y , z ) * divisor;\r
    #endif\r
}

vec3 curl( vec4 p ){\r
    const float e = .1;\r
    vec4 dx = vec4( e   , 0.0 , 0.0 , 1.0 );\r
    vec4 dy = vec4( 0.0 , e   , 0.0 , 1.0 );\r
    vec4 dz = vec4( 0.0 , 0.0 , e   , 1.0 );

    vec3 p_x0 = snoise3( p - dx );\r
    vec3 p_x1 = snoise3( p + dx );\r
    vec3 p_y0 = snoise3( p - dy );\r
    vec3 p_y1 = snoise3( p + dy );\r
    vec3 p_z0 = snoise3( p - dz );\r
    vec3 p_z1 = snoise3( p + dz );

    float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;\r
    float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;\r
    float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;

    const float divisor = 1.0 / ( 2.0 * e );\r
    #ifndef CURL_UNNORMALIZED\r
    return normalize( vec3( x , y , z ) * divisor );\r
    #else\r
    return vec3( x , y , z ) * divisor;\r
    #endif\r
}

#endif

float Length(vec2 p, float k) {\r
    p = abs(p);\r
    return pow(pow(p.x, k) + pow(p.y, k), 1.0 / k);\r
}

vec4 ballSDF(Metaball b, vec2 uv) {\r
    vec4 subdiv = texture2D(tSubdiv, vUv);

    float sdf = Length(uv - b.position, 2.0);\r
    float fr = map(min(uAccum * 1.0, 10.0), 0.0, 10.0, 0.0, 8.0);\r
    \r
    float wave = cos(\r
        sdf * PI * mix(0.0, 6.0, uEase1) 
        + PI * 0.0  
        + b.id * TWO_PI * uFrequency2 
    );

    float wave2 = cos(\r
        sdf * PI * 3.0 
        - uAccum * b.dir * PI  
        + b.id * TWO_PI * 10.0 
    );

    float wave3 = cos(\r
        sdf * PI * 10.0 
        - uAccum * b.dir * PI  
        + b.id * TWO_PI * 10.0 
    );

    float wave4 = cos(\r
        sdf * PI * 10.0 * subdiv.r 
        - uAccum * b.dir * PI  
        + b.id * TWO_PI * 10.0 
    );

    sdf = Length(aspect(uv - b.position, uResolution), 2.0);

    vec2 ruv = aspect(uv - b.position, uResolution);\r
    float sq_sdf = Length(ruv, 1.0);

    float wave5 = cos(\r
        sdf * PI * mix(1.25, 40.0, uEase9) 
        - uTime * b.dir * 6.0  
        + b.id * TWO_PI * 10.0 
    );

    float wave6 = cos(\r
        sq_sdf * PI * 30.0 
        - uTime * b.dir * 6.0  
        + b.id * TWO_PI * 10.0 
    );

    float wave7 = cos(\r
        sdf * PI * 7.0 
        + PI * 0.0  
        + b.id * TWO_PI * 9.24 
    );    

    float finalWave = mix(wave, wave2, uEase2);\r
    finalWave = mix(finalWave, wave3, uEase4);\r
    finalWave = mix(finalWave, wave4, uEase5);\r
    finalWave = mix(finalWave, wave, uEase7);\r
    finalWave = mix(finalWave, wave5, uEase8);\r
    finalWave = mix(finalWave, wave6, uEase10);\r
    finalWave = mix(finalWave, wave7, uEase11);

    finalWave = mix(finalWave, 1.0, uEase13);

    float d = finalWave * sdf;

    return vec4(b.color * d, d);\r
}

vec3 drawBalls(vec2 uv) {\r
    vec4 subdiv = texture2D(tSubdiv, vUv);

    vec2 auv = aspect(vUv - 0.5, uResolution);\r
    vec2 puv = vec2(atan(auv.x, auv.y) / TWO_PI + 0.5, length(auv));

    float t = uTime;\r
    float a2 = uAccum * 0.5;\r
    float a3 = uAccum * 0.1;\r
    float nt = cnoise(0.5 * vec2(cos(a2), sin(a2)));

    float distSum = 0.0; 
    vec3 colorSum = vec3(0.0); 

    for (int i = 0 ; i < MAX_METABALLS ; i++) {\r
        float ii = float(i / (MAX_METABALLS - 1)); 
        \r
        Metaball data = uData[i];\r
        \r
        float index = data.id;

        float r1 = random(vec2(float(i * 333)));\r
        float r2 = random(vec2(float(i * 444)));

        float rep = mix(1.0, 8.0, uEase2);\r
        float id = floor(vUv.x * rep) / rep; \r
        float id2 = floor(vUv.y * rep) / rep; \r
        float updown = mix(vUv.y, 1.0 - vUv.y, step(vUv.x, 0.5));\r
        id = mix(id, id2, step(updown, uEase3));\r
        id = mix(id, subdiv.r * TAU, uEase5);\r
        id = mix(id, 0.0, uEase7);

        
        vec2 pos = vec2(0.0);\r
        pos.x = cos(ii * TWO_PI + r1 * TWO_PI * 10. + PI * 0.5 + t + id) * 1.25;\r

        
        vec2 pos2 = vec2(0.0);\r
        pos2.x = cnoise(vec2(float(i * 521) + 0.25 * cos(a2), nt));\r
        pos2.y = cnoise(vec2(float(i * 535) + 0.25 * sin(a2), -nt));     \r
        pos2 *= mix(0.0, 0.25, uEase9);

        
        vec2 pos3 = vec2(0.0);\r
        pos3.x = cnoise(vec2(float(i * 121) + 0.5 * cos(a3), nt * 0.05));\r
        pos3.y = cnoise(vec2(float(i * 135) + 0.5 * sin(a3), nt * 0.05));     \r
        pos3 *= 2.0;

        
        vec2 pos4 = vec2(0.0);\r
        pos4.y = cos(ii * TWO_PI + r2 * TWO_PI * 10. + PI * 0.5 + t) * 1.25;

        vec2 finalPos = mix(pos, pos2, uEase8);\r
        finalPos = mix(finalPos, pos3, uEase10);\r
        finalPos = mix(finalPos, pos4, uEase12);

        data.position = finalPos;

        float phase = random(vec2(float(i * 1357)));\r
        float lightOffset = vUv.x;\r
        
        lightOffset = mix(lightOffset, 0.0, uEase8);\r
        lightOffset = mix(lightOffset, length(auv) * 0.3, uEase12);\r
        vec3 color = palette(\r
            cos(phase * TWO_PI + lightOffset * 0.4 * PI * phase * 10.0 + t + id),\r
            uBrightness * 1.0,\r
            uContrast * mix(0.5, 0.15, uRestoreContrast) * mix(0.0, 1.0, uEase0) * mix(1.0, 5.0, uEase13),\r
            uOscillation * 1.0,\r
            uPhase * PI * uPhaseStrength\r
        );\r
        \r
        data.color = color;\r
        \r
        vec4 ball = ballSDF(data, uv);\r
        \r
        distSum += ball.a;\r
        colorSum += ball.rgb;\r
    }

    vec3 finalColor = colorSum / distSum;

    if (uEnableThreshold) {\r
        float threshold = distSum > uThreshold ? 1.0 : 0.0;\r
        finalColor *= threshold;\r
    }\r
    \r
    return finalColor;\r
}

void main() {\r
    vec4 subdiv = texture2D(tSubdiv, vUv);

    vec2 pixel = 1.0 / uResolution;\r
    vec2 st = gl_FragCoord.xy * pixel;\r
    vec2 cst = (gl_FragCoord.xy * 1.0 - uResolution) / uResolution.y * uZoom;\r
    vec2 puv = vec2(atan(cst.x, cst.y) / TWO_PI + 0.5, length(cst));

    float updown = mix(vUv.y, 1.0 - vUv.y, step(vUv.x, 0.5));\r
    cst = mix(\r
        cst,\r
        rotate(cst, PI * 0.5),\r
        step(updown, uEase3)\r
    );

    vec2 uv = cst.yy;\r
    uv = mix(uv, vUv - 0.5, smoothstep(0.0, cos(puv.y + PI) * 0.5 + 0.5, uEase8));\r
    vec3 color = drawBalls(uv * uZoom);

    if (uInvertColor) {\r
        color = 1.0 - color;\r
    }

    if (uSaturateColor) {\r
        color = pow(color, vec3(2.0));\r
        color = pow(color, vec3(0.5));\r
        color *= 1.5;\r
    }

    gl_FragColor = vec4(color, 1.0);

    
    
    
}`;let Hh=new Hi;Hh.setAttribute("position",new Ui([-1,3,0,-1,-1,0,3,-1,0],3));Hh.setAttribute("uv",new Ui([0,2,0,0,2,0],2));class ug{static getRandomSpherePoint(){let e=Do(),t=Do(),n=e*2*Math.PI,i=Math.acos(2*t-1),a=Math.cbrt(Do()),o=Math.sin(n),s=Math.cos(n),u=Math.sin(i),c=Math.cos(i),f=new Ae;return f.x=a*u*s,f.y=a*u*o,f.z=a*c,f}static createSpiralPoints(e,t,n,i){let a=[],o=i*2*Math.PI/e;for(let s=0;s<e;s++){let u=s*o,c=t+(n-t)*(s/e),f=c*Math.cos(u),h=c*Math.sin(u);a.push(new Ae(f,h,0))}return a}}ug.triangleQuad=Hh;class ph{static cospalette(e){let t=new Ae(e[0],e[1],e[2]),n=new Ae(e[3],e[4],e[5]),i=new Ae(e[6],e[7],e[8]),a=new Ae(e[9],e[10],e[11]),o=e[12];return{brightness:t,contrast:n,oscillation:i,phase:a,progress:o}}}ph.presets=[[.5,.5,.5,.5,.5,.5,1,1,1,0,0,0,0],[.5,.5,.5,.5,.5,.5,1,1,1,0,.01,.02,0],[.5,.5,.5,.5,.5,.5,1,1,1,0,.1,.2,0],[.6,.5,.4,.5,.5,.5,1,1,1,.1,.05,0,0],[.4,.5,.6,.5,.5,.5,1,1,1,.1,.05,0,0],[.5,.5,.6,.5,.5,.5,1,1,1,0,.075,.1,0],[.4,.5,.6,.6,.5,.4,1,1,1.1,.1,.15,.1,0],[.6,.5,.4,.5,.5,.5,1,1,1,.1,.075,0,0],[.5,.5,.5,.5,.5,.5,1,1,1,.1,.2,0,0],[.6,.5,.4,.5,.5,.5,1,1,1.1,.1,.05,0,0],[.6,.5,.4,.5,.5,.5,1,1,1.1,.1,0,0,0],[.6,.5,.4,.5,.5,.5,1.1,1.2,1.3,.1,.1,0,0],[.66,.56,.68,.718,.438,.72,.52,.8,.52,-.43,-.397,-.083,0],[.72,.62,.72,.4,.5,.5,.27,.27,.27,.3384,.6684,1.0084,0],[.57,.44,.47,.59,.56,.54,.95,.95,.95,0,.16,.2,0],[.42,.31,.51,.5,.48,.54,.79,.79,.79,.14,0,0,0],[.58,.6,.51,.58,.5,.45,1.11,1.07,1.08,.81,.9,.09,.57],[.5,.5,.5,.5,.5,.5,1,1.1,1,.5,.6,.7,0],[.6,.6,.8,.5,.5,.5,1,1.1,1.2,.15,.2,0,.94],[.59,.49,.4,.44,.45,.42,1.33,1.2,1.27,.6,.54,.47,.93]];const Jr={width:null,height:null,debug:!1,openGui:!1,duration:0};function Fi(l){if(l===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}function fg(l,e){l.prototype=Object.create(e.prototype),l.prototype.constructor=l,l.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var qr={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},js={duration:.5,overwrite:!1,delay:0},Wh,fr,Pn,Si=1e8,mr=1/Si,mh=Math.PI*2,X3=mh/4,j3=0,hg=Math.sqrt,$3=Math.cos,Y3=Math.sin,or=function(e){return typeof e=="string"},Gn=function(e){return typeof e=="function"},Gi=function(e){return typeof e=="number"},qh=function(e){return typeof e>"u"},Ei=function(e){return typeof e=="object"},Cr=function(e){return e!==!1},Xh=function(){return typeof window<"u"},ic=function(e){return Gn(e)||or(e)},dg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},vr=Array.isArray,vh=/(?:-?\.?\d|\.)+/gi,pg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Fs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Xf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,mg=/[+-]=-?[.\d]+/,vg=/[^,'"\[\]\s]+/gi,Z3=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,On,_i,gh,jh,Xr={},vc={},gg,_g=function(e){return(vc=$s(e,Xr))&&Dr},$h=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Vo=function(e,t){return!t&&console.warn(e)},xg=function(e,t){return e&&(Xr[e]=t)&&vc&&(vc[e]=t)||Xr},Ho=function(){return 0},K3={suppressEvents:!0,isStart:!0,kill:!1},fc={suppressEvents:!0,kill:!1},Q3={suppressEvents:!0},Yh={},oa=[],_h={},yg,kr={},jf={},sv=30,hc=[],Zh="",Kh=function(e){var t=e[0],n,i;if(Ei(t)||Gn(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=hc.length;i--&&!hc[i].targetTest(t););n=hc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Wg(e[i],n)))||e.splice(i,1);return e},Va=function(e){return e._gsap||Kh(ei(e))[0]._gsap},bg=function(e,t,n){return(n=e[t])&&Gn(n)?e[t]():qh(n)&&e.getAttribute&&e.getAttribute(t)||n},Pr=function(e,t){return(e=e.split(",")).forEach(t)||e},qn=function(e){return Math.round(e*1e5)/1e5||0},Zn=function(e){return Math.round(e*1e7)/1e7||0},Bs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},J3=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},gc=function(){var e=oa.length,t=oa.slice(0),n,i;for(_h={},oa.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},wg=function(e,t,n,i){oa.length&&!fr&&gc(),e.render(t,n,fr&&t<0&&(e._initted||e._startAt)),oa.length&&!fr&&gc()},Sg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(vg).length<2?t:or(e)?e.trim():e},Mg=function(e){return e},jr=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},eC=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},$s=function(e,t){for(var n in t)e[n]=t[n];return e},ov=function l(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ei(t[n])?l(e[n]||(e[n]={}),t[n]):t[n]);return e},_c=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Oo=function(e){var t=e.parent||On,n=e.keyframes?eC(vr(e.keyframes)):jr;if(Cr(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},tC=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Eg=function(e,t,n,i,a){var o=e[i],s;if(a)for(s=t[a];o&&o[a]>s;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Ac=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t._prev,o=t._next;a?a._next=o:e[n]===t&&(e[n]=o),o?o._prev=a:e[i]===t&&(e[i]=a),t._next=t._prev=t.parent=null},ca=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ha=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},nC=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},xh=function(e,t,n,i){return e._startAt&&(fr?e._startAt.revert(fc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},rC=function l(e){return!e||e._ts&&l(e.parent)},lv=function(e){return e._repeat?Ys(e._tTime,e=e.duration()+e._rDelay)*e:0},Ys=function(e,t){var n=Math.floor(e=Zn(e/t));return e&&n===e?n-1:n},xc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Cc=function(e){return e._end=Zn(e._start+(e._tDur/Math.abs(e._ts||e._rts||mr)||0))},Pc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Zn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Cc(e),n._dirty||Ha(n,e)),e},Tg=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=xc(e.rawTime(),t),(!t._dur||el(0,t.totalDuration(),n)-t._tTime>mr)&&t.render(n,!0)),Ha(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},yi=function(e,t,n,i){return t.parent&&ca(t),t._start=Zn((Gi(n)?n:n||e!==On?Qr(e,n,t):e._time)+t._delay),t._end=Zn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Eg(e,t,"_first","_last",e._sort?"_start":0),yh(t)||(e._recent=t),i||Tg(e,t),e._ts<0&&Pc(e,e._tTime),e},Ag=function(e,t){return(Xr.ScrollTrigger||$h("scrollTrigger",t))&&Xr.ScrollTrigger.create(t,e)},Cg=function(e,t,n,i,a){if(Jh(e,t,a),!e._initted)return 1;if(!n&&e._pt&&!fr&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&yg!==Ur.frame)return oa.push(e),e._lazy=[a,i],1},iC=function l(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||l(t))},yh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},aC=function(e,t,n,i){var a=e.ratio,o=t<0||!t&&(!e._start&&iC(e)&&!(!e._initted&&yh(e))||(e._ts<0||e._dp._ts<0)&&!yh(e))?0:1,s=e._rDelay,u=0,c,f,h;if(s&&e._repeat&&(u=el(0,e._tDur,t),f=Ys(u,s),e._yoyo&&f&1&&(o=1-o),f!==Ys(e._tTime,s)&&(a=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==a||fr||i||e._zTime===mr||!t&&e._zTime){if(!e._initted&&Cg(e,t,i,n,u))return;for(h=e._zTime,e._zTime=t||(n?mr:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=u,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&xh(e,t,n,!0),e._onUpdate&&!n&&Hr(e,"onUpdate"),u&&e._repeat&&!n&&e.parent&&Hr(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&ca(e,1),!n&&!fr&&(Hr(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},sC=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Zs=function(e,t,n,i){var a=e._repeat,o=Zn(t)||0,s=e._tTime/e._tDur;return s&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=a?a<0?1e10:Zn(o*(a+1)+e._rDelay*a):o,s>0&&!i&&Pc(e,e._tTime=e._tDur*s),e.parent&&Cc(e),n||Ha(e.parent,e),e},cv=function(e){return e instanceof Sr?Ha(e):Zs(e,e._dur)},oC={_start:0,endTime:Ho,totalDuration:Ho},Qr=function l(e,t,n){var i=e.labels,a=e._recent||oC,o=e.duration()>=Si?a.endTime(!1):e._dur,s,u,c;return or(t)&&(isNaN(t)||t in i)?(u=t.charAt(0),c=t.substr(-1)==="%",s=t.indexOf("="),u==="<"||u===">"?(s>=0&&(t=t.replace(/=/,"")),(u==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(s<0?a:n).totalDuration()/100:1)):s<0?(t in i||(i[t]=o),i[t]):(u=parseFloat(t.charAt(s-1)+t.substr(s+1)),c&&n&&(u=u/100*(vr(n)?n[0]:n).totalDuration()),s>1?l(e,t.substr(0,s-1),n)+u:o+u)):t==null?o:+t},Fo=function(e,t,n){var i=Gi(t[1]),a=(i?2:1)+(e<2?0:1),o=t[a],s,u;if(i&&(o.duration=t[1]),o.parent=n,e){for(s=o,u=n;u&&!("immediateRender"in s);)s=u.vars.defaults||{},u=Cr(u.vars.inherit)&&u.parent;o.immediateRender=Cr(s.immediateRender),e<2?o.runBackwards=1:o.startAt=t[a-1]}return new Yn(t[0],o,t[a+1])},fa=function(e,t){return e||e===0?t(e):t},el=function(e,t,n){return n<e?e:n>t?t:n},pr=function(e,t){return!or(e)||!(t=Z3.exec(e))?"":t[1]},lC=function(e,t,n){return fa(n,function(i){return el(e,t,i)})},bh=[].slice,Pg=function(e,t){return e&&Ei(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ei(e[0]))&&!e.nodeType&&e!==_i},cC=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var a;return or(i)&&!t||Pg(i,1)?(a=n).push.apply(a,ei(i)):n.push(i)})||n},ei=function(e,t,n){return Pn&&!t&&Pn.selector?Pn.selector(e):or(e)&&!n&&(gh||!Ks())?bh.call((t||jh).querySelectorAll(e),0):vr(e)?cC(e,n):Pg(e)?bh.call(e,0):e?[e]:[]},wh=function(e){return e=ei(e)[0]||Vo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ei(t,n.querySelectorAll?n:n===e?Vo("Invalid scope")||jh.createElement("div"):e)}},Lg=function(e){return e.sort(function(){return .5-Math.random()})},Rg=function(e){if(Gn(e))return e;var t=Ei(e)?e:{each:e},n=Wa(t.ease),i=t.from||0,a=parseFloat(t.base)||0,o={},s=i>0&&i<1,u=isNaN(i)||s,c=t.axis,f=i,h=i;return or(i)?f=h={center:.5,edges:.5,end:1}[i]||0:!s&&u&&(f=i[0],h=i[1]),function(d,v,x){var p=(x||t).length,m=o[p],_,E,T,A,w,I,P,M,L;if(!m){if(L=t.grid==="auto"?0:(t.grid||[1,Si])[1],!L){for(P=-1e8;P<(P=x[L++].getBoundingClientRect().left)&&L<p;);L<p&&L--}for(m=o[p]=[],_=u?Math.min(L,p)*f-.5:i%L,E=L===Si?0:u?p*h/L-.5:i/L|0,P=0,M=Si,I=0;I<p;I++)T=I%L-_,A=E-(I/L|0),m[I]=w=c?Math.abs(c==="y"?A:T):hg(T*T+A*A),w>P&&(P=w),w<M&&(M=w);i==="random"&&Lg(m),m.max=P-M,m.min=M,m.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(L>p?p-1:c?c==="y"?p/L:L:Math.max(L,p/L))||0)*(i==="edges"?-1:1),m.b=p<0?a-p:a,m.u=pr(t.amount||t.each)||0,n=n&&p<0?Gg(n):n}return p=(m[d]-m.min)/m.max||0,Zn(m.b+(n?n(p):p)*m.v)+m.u}},Sh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Zn(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Gi(n)?0:pr(n))}},Dg=function(e,t){var n=vr(e),i,a;return!n&&Ei(e)&&(i=n=e.radius||Si,e.values?(e=ei(e.values),(a=!Gi(e[0]))&&(i*=i)):e=Sh(e.increment)),fa(t,n?Gn(e)?function(o){return a=e(o),Math.abs(a-o)<=i?a:o}:function(o){for(var s=parseFloat(a?o.x:o),u=parseFloat(a?o.y:0),c=Si,f=0,h=e.length,d,v;h--;)a?(d=e[h].x-s,v=e[h].y-u,d=d*d+v*v):d=Math.abs(e[h]-s),d<c&&(c=d,f=h);return f=!i||c<=i?e[f]:o,a||f===o||Gi(o)?f:f+pr(o)}:Sh(e))},Ig=function(e,t,n,i){return fa(vr(e)?!t:n===!0?!!(n=0):!i,function(){return vr(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},uC=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(a,o){return o(a)},i)}},fC=function(e,t){return function(n){return e(parseFloat(n))+(t||pr(n))}},hC=function(e,t,n){return Fg(e,t,0,1,n)},Og=function(e,t,n){return fa(n,function(i){return e[~~t(i)]})},dC=function l(e,t,n){var i=t-e;return vr(e)?Og(e,l(0,e.length),t):fa(n,function(a){return(i+(a-e)%i)%i+e})},pC=function l(e,t,n){var i=t-e,a=i*2;return vr(e)?Og(e,l(0,e.length-1),t):fa(n,function(o){return o=(a+(o-e)%a)%a||0,e+(o>i?a-o:o)})},Wo=function(e){for(var t=0,n="",i,a,o,s;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),s=e.charAt(i+7)==="[",a=e.substr(i+7,o-i-7).match(s?vg:vh),n+=e.substr(t,i-t)+Ig(s?a:+a[0],s?0:+a[1],+a[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Fg=function(e,t,n,i,a){var o=t-e,s=i-n;return fa(a,function(u){return n+((u-e)/o*s||0)})},mC=function l(e,t,n,i){var a=isNaN(e+t)?0:function(v){return(1-v)*e+v*t};if(!a){var o=or(e),s={},u,c,f,h,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(vr(e)&&!vr(t)){for(f=[],h=e.length,d=h-2,c=1;c<h;c++)f.push(l(e[c-1],e[c]));h--,a=function(x){x*=h;var p=Math.min(d,~~x);return f[p](x-p)},n=t}else i||(e=$s(vr(e)?[]:{},e));if(!f){for(u in t)Qh.call(s,e,u,"get",t[u]);a=function(x){return nd(x,s)||(o?e.p:e)}}}return fa(n,a)},uv=function(e,t,n){var i=e.labels,a=Si,o,s,u;for(o in i)s=i[o]-t,s<0==!!n&&s&&a>(s=Math.abs(s))&&(u=o,a=s);return u},Hr=function(e,t,n){var i=e.vars,a=i[t],o=Pn,s=e._ctx,u,c,f;if(a)return u=i[t+"Params"],c=i.callbackScope||e,n&&oa.length&&gc(),s&&(Pn=s),f=u?a.apply(c,u):a.call(c),Pn=o,f},Po=function(e){return ca(e),e.scrollTrigger&&e.scrollTrigger.kill(!!fr),e.progress()<1&&Hr(e,"onInterrupt"),e},Ns,Ng=[],zg=function(e){if(e)if(e=!e.name&&e.default||e,Xh()||e.headless){var t=e.name,n=Gn(e),i=t&&!n&&e.init?function(){this._props=[]}:e,a={init:Ho,render:nd,add:Qh,kill:RC,modifier:LC,rawVars:0},o={targetTest:0,get:0,getSetter:td,aliases:{},register:0};if(Ks(),e!==i){if(kr[t])return;jr(i,jr(_c(e,a),o)),$s(i.prototype,$s(a,_c(e,o))),kr[i.prop=t]=i,e.targetTest&&(hc.push(i),Yh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}xg(t,i),e.register&&e.register(Dr,i,Lr)}else Ng.push(e)},Tn=255,Lo={aqua:[0,Tn,Tn],lime:[0,Tn,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Tn],navy:[0,0,128],white:[Tn,Tn,Tn],olive:[128,128,0],yellow:[Tn,Tn,0],orange:[Tn,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Tn,0,0],pink:[Tn,192,203],cyan:[0,Tn,Tn],transparent:[Tn,Tn,Tn,0]},$f=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Tn+.5|0},kg=function(e,t,n){var i=e?Gi(e)?[e>>16,e>>8&Tn,e&Tn]:0:Lo.black,a,o,s,u,c,f,h,d,v,x;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Lo[e])i=Lo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),o=e.charAt(2),s=e.charAt(3),e="#"+a+a+o+o+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Tn,i&Tn,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Tn,e&Tn]}else if(e.substr(0,3)==="hsl"){if(i=x=e.match(vh),!t)u=+i[0]%360/360,c=+i[1]/100,f=+i[2]/100,o=f<=.5?f*(c+1):f+c-f*c,a=f*2-o,i.length>3&&(i[3]*=1),i[0]=$f(u+1/3,a,o),i[1]=$f(u,a,o),i[2]=$f(u-1/3,a,o);else if(~e.indexOf("="))return i=e.match(pg),n&&i.length<4&&(i[3]=1),i}else i=e.match(vh)||Lo.transparent;i=i.map(Number)}return t&&!x&&(a=i[0]/Tn,o=i[1]/Tn,s=i[2]/Tn,h=Math.max(a,o,s),d=Math.min(a,o,s),f=(h+d)/2,h===d?u=c=0:(v=h-d,c=f>.5?v/(2-h-d):v/(h+d),u=h===a?(o-s)/v+(o<s?6:0):h===o?(s-a)/v+2:(a-o)/v+4,u*=60),i[0]=~~(u+.5),i[1]=~~(c*100+.5),i[2]=~~(f*100+.5)),n&&i.length<4&&(i[3]=1),i},Bg=function(e){var t=[],n=[],i=-1;return e.split(la).forEach(function(a){var o=a.match(Fs)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},fv=function(e,t,n){var i="",a=(e+i).match(la),o=t?"hsla(":"rgba(",s=0,u,c,f,h;if(!a)return e;if(a=a.map(function(d){return(d=kg(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(f=Bg(e),u=n.c,u.join(i)!==f.c.join(i)))for(c=e.replace(la,"1").split(Fs),h=c.length-1;s<h;s++)i+=c[s]+(~u.indexOf(s)?a.shift()||o+"0,0,0,0)":(f.length?f:a.length?a:n).shift());if(!c)for(c=e.split(la),h=c.length-1;s<h;s++)i+=c[s]+a[s];return i+c[h]},la=function(){var l="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Lo)l+="|"+e+"\\b";return new RegExp(l+")","gi")}(),vC=/hsl[a]?\(/,Ug=function(e){var t=e.join(" "),n;if(la.lastIndex=0,la.test(t))return n=vC.test(t),e[1]=fv(e[1],n),e[0]=fv(e[0],n,Bg(e[1])),!0},qo,Ur=function(){var l=Date.now,e=500,t=33,n=l(),i=n,a=1e3/240,o=a,s=[],u,c,f,h,d,v,x=function p(m){var _=l()-i,E=m===!0,T,A,w,I;if((_>e||_<0)&&(n+=_-t),i+=_,w=i-n,T=w-o,(T>0||E)&&(I=++h.frame,d=w-h.time*1e3,h.time=w=w/1e3,o+=T+(T>=a?4:a-T),A=1),E||(u=c(p)),A)for(v=0;v<s.length;v++)s[v](w,d,I,m)};return h={time:0,frame:0,tick:function(){x(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){gg&&(!gh&&Xh()&&(_i=gh=window,jh=_i.document||{},Xr.gsap=Dr,(_i.gsapVersions||(_i.gsapVersions=[])).push(Dr.version),_g(vc||_i.GreenSockGlobals||!_i.gsap&&_i||{}),Ng.forEach(zg)),f=typeof requestAnimationFrame<"u"&&requestAnimationFrame,u&&h.sleep(),c=f||function(m){return setTimeout(m,o-h.time*1e3+1|0)},qo=1,x(2))},sleep:function(){(f?cancelAnimationFrame:clearTimeout)(u),qo=0,c=Ho},lagSmoothing:function(m,_){e=m||1/0,t=Math.min(_||33,e)},fps:function(m){a=1e3/(m||240),o=h.time*1e3+a},add:function(m,_,E){var T=_?function(A,w,I,P){m(A,w,I,P),h.remove(T)}:m;return h.remove(m),s[E?"unshift":"push"](T),Ks(),T},remove:function(m,_){~(_=s.indexOf(m))&&s.splice(_,1)&&v>=_&&v--},_listeners:s},h}(),Ks=function(){return!qo&&Ur.wake()},bn={},gC=/^[\d.\-M][\d.\-,\s]/,_C=/["']/g,xC=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],a=1,o=n.length,s,u,c;a<o;a++)u=n[a],s=a!==o-1?u.lastIndexOf(","):u.length,c=u.substr(0,s),t[i]=isNaN(c)?c.replace(_C,"").trim():+c,i=u.substr(s+1).trim();return t},yC=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},bC=function(e){var t=(e+"").split("("),n=bn[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[xC(t[1])]:yC(e).split(",").map(Sg)):bn._CE&&gC.test(e)?bn._CE("",e):n},Gg=function(e){return function(t){return 1-e(1-t)}},Vg=function l(e,t){for(var n=e._first,i;n;)n instanceof Sr?l(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?l(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Wa=function(e,t){return e&&(Gn(e)?e:bn[e]||bC(e))||t},Ja=function(e,t,n,i){n===void 0&&(n=function(u){return 1-t(1-u)}),i===void 0&&(i=function(u){return u<.5?t(u*2)/2:1-t((1-u)*2)/2});var a={easeIn:t,easeOut:n,easeInOut:i},o;return Pr(e,function(s){bn[s]=Xr[s]=a,bn[o=s.toLowerCase()]=n;for(var u in a)bn[o+(u==="easeIn"?".in":u==="easeOut"?".out":".inOut")]=bn[s+"."+u]=a[u]}),a},Hg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Yf=function l(e,t,n){var i=t>=1?t:1,a=(n||(e?.3:.45))/(t<1?t:1),o=a/mh*(Math.asin(1/i)||0),s=function(f){return f===1?1:i*Math.pow(2,-10*f)*Y3((f-o)*a)+1},u=e==="out"?s:e==="in"?function(c){return 1-s(1-c)}:Hg(s);return a=mh/a,u.config=function(c,f){return l(e,c,f)},u},Zf=function l(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(a){return 1-n(1-a)}:Hg(n);return i.config=function(a){return l(e,a)},i};Pr("Linear,Quad,Cubic,Quart,Quint,Strong",function(l,e){var t=e<5?e+1:e;Ja(l+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});bn.Linear.easeNone=bn.none=bn.Linear.easeIn;Ja("Elastic",Yf("in"),Yf("out"),Yf());(function(l,e){var t=1/e,n=2*t,i=2.5*t,a=function(s){return s<t?l*s*s:s<n?l*Math.pow(s-1.5/e,2)+.75:s<i?l*(s-=2.25/e)*s+.9375:l*Math.pow(s-2.625/e,2)+.984375};Ja("Bounce",function(o){return 1-a(1-o)},a)})(7.5625,2.75);Ja("Expo",function(l){return Math.pow(2,10*(l-1))*l+l*l*l*l*l*l*(1-l)});Ja("Circ",function(l){return-(hg(1-l*l)-1)});Ja("Sine",function(l){return l===1?1:-$3(l*X3)+1});Ja("Back",Zf("in"),Zf("out"),Zf());bn.SteppedEase=bn.steps=Xr.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),a=t?1:0,o=1-mr;return function(s){return((i*el(0,o,s)|0)+a)*n}}};js.ease=bn["quad.out"];Pr("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(l){return Zh+=l+","+l+"Params,"});var Wg=function(e,t){this.id=j3++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:bg,this.set=t?t.getSetter:td},Xo=function(){function l(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Zs(this,+t.duration,1,1),this.data=t.data,Pn&&(this._ctx=Pn,Pn.data.push(this)),qo||Ur.wake()}var e=l.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Zs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ks(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(Pc(this,n),!a._dp||a.parent||Tg(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&yi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===mr||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),wg(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+lv(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+lv(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*a,i):this._repeat?Ys(this._tTime,a)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var a=this.parent&&this._ts?xc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(el(-Math.abs(this._delay),this._tDur,a),i!==!1),Cc(this),nC(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ks(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==mr&&(this._tTime-=mr)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&yi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Cr(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?xc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Q3);var i=fr;return fr=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),fr=i,this},e.globalTime=function(n){for(var i=this,a=arguments.length?n:i.rawTime();i;)a=i._start+a/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):a},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,cv(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,cv(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Qr(this,n),Cr(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Cr(i)),this._dur||(this._zTime=-1e-8),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,a;return!!(!n||this._ts&&this._initted&&n.isActive()&&(a=n.rawTime(!0))>=i&&a<this.endTime(!0)-mr)},e.eventCallback=function(n,i,a){var o=this.vars;return arguments.length>1?(i?(o[n]=i,a&&(o[n+"Params"]=a),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(a){var o=Gn(n)?n:Mg,s=function(){var c=i.then;i.then=null,Gn(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),a(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?s():i._prom=s})},e.kill=function(){Po(this)},l}();jr(Xo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Sr=function(l){fg(e,l);function e(n,i){var a;return n===void 0&&(n={}),a=l.call(this,n)||this,a.labels={},a.smoothChildTiming=!!n.smoothChildTiming,a.autoRemoveChildren=!!n.autoRemoveChildren,a._sort=Cr(n.sortChildren),On&&yi(n.parent||On,Fi(a),i),n.reversed&&a.reverse(),n.paused&&a.paused(!0),n.scrollTrigger&&Ag(Fi(a),n.scrollTrigger),a}var t=e.prototype;return t.to=function(i,a,o){return Fo(0,arguments,this),this},t.from=function(i,a,o){return Fo(1,arguments,this),this},t.fromTo=function(i,a,o,s){return Fo(2,arguments,this),this},t.set=function(i,a,o){return a.duration=0,a.parent=this,Oo(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new Yn(i,a,Qr(this,o),1),this},t.call=function(i,a,o){return yi(this,Yn.delayedCall(0,i,a),o)},t.staggerTo=function(i,a,o,s,u,c,f){return o.duration=a,o.stagger=o.stagger||s,o.onComplete=c,o.onCompleteParams=f,o.parent=this,new Yn(i,o,Qr(this,u)),this},t.staggerFrom=function(i,a,o,s,u,c,f){return o.runBackwards=1,Oo(o).immediateRender=Cr(o.immediateRender),this.staggerTo(i,a,o,s,u,c,f)},t.staggerFromTo=function(i,a,o,s,u,c,f,h){return s.startAt=o,Oo(s).immediateRender=Cr(s.immediateRender),this.staggerTo(i,a,s,u,c,f,h)},t.render=function(i,a,o){var s=this._time,u=this._dirty?this.totalDuration():this._tDur,c=this._dur,f=i<=0?0:Zn(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,v,x,p,m,_,E,T,A,w,I,P;if(this!==On&&f>u&&i>=0&&(f=u),f!==this._tTime||o||h){if(s!==this._time&&c&&(f+=this._time-s,i+=this._time-s),d=f,A=this._start,T=this._ts,_=!T,h&&(c||(s=this._zTime),(i||!a)&&(this._zTime=i)),this._repeat){if(I=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,a,o);if(d=Zn(f%m),f===u?(p=this._repeat,d=c):(w=Zn(f/m),p=~~w,p&&p===w&&(d=c,p--),d>c&&(d=c)),w=Ys(this._tTime,m),!s&&this._tTime&&w!==p&&this._tTime-w*m-this._dur<=0&&(w=p),I&&p&1&&(d=c-d,P=1),p!==w&&!this._lock){var M=I&&w&1,L=M===(I&&p&1);if(p<w&&(M=!M),s=M?0:f%c?c:f,this._lock=1,this.render(s||(P?0:Zn(p*m)),a,!c)._lock=0,this._tTime=f,!a&&this.parent&&Hr(this,"onRepeat"),this.vars.repeatRefresh&&!P&&(this.invalidate()._lock=1),s&&s!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,u=this._tDur,L&&(this._lock=2,s=M?c:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!P&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Vg(this,P)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=sC(this,Zn(s),Zn(d)),E&&(f-=d-(d=E._start))),this._tTime=f,this._time=d,this._act=!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&d&&!a&&!p&&(Hr(this,"onStart"),this._tTime!==f))return this;if(d>=s&&i>=0)for(v=this._first;v;){if(x=v._next,(v._act||d>=v._start)&&v._ts&&E!==v){if(v.parent!==this)return this.render(i,a,o);if(v.render(v._ts>0?(d-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(d-v._start)*v._ts,a,o),d!==this._time||!this._ts&&!_){E=0,x&&(f+=this._zTime=-1e-8);break}}v=x}else{v=this._last;for(var D=i<0?i:d;v;){if(x=v._prev,(v._act||D<=v._end)&&v._ts&&E!==v){if(v.parent!==this)return this.render(i,a,o);if(v.render(v._ts>0?(D-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(D-v._start)*v._ts,a,o||fr&&(v._initted||v._startAt)),d!==this._time||!this._ts&&!_){E=0,x&&(f+=this._zTime=D?-1e-8:mr);break}}v=x}}if(E&&!a&&(this.pause(),E.render(d>=s?0:-1e-8)._zTime=d>=s?1:-1,this._ts))return this._start=A,Cc(this),this.render(i,a,o);this._onUpdate&&!a&&Hr(this,"onUpdate",!0),(f===u&&this._tTime>=this.totalDuration()||!f&&s)&&(A===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(f===u&&this._ts>0||!f&&this._ts<0)&&ca(this,1),!a&&!(i<0&&!s)&&(f||s||!u)&&(Hr(this,f===u&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(f<u&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,a){var o=this;if(Gi(a)||(a=Qr(this,a,i)),!(i instanceof Xo)){if(vr(i))return i.forEach(function(s){return o.add(s,a)}),this;if(or(i))return this.addLabel(i,a);if(Gn(i))i=Yn.delayedCall(0,i);else return this}return this!==i?yi(this,i,a):this},t.getChildren=function(i,a,o,s){i===void 0&&(i=!0),a===void 0&&(a=!0),o===void 0&&(o=!0),s===void 0&&(s=-1e8);for(var u=[],c=this._first;c;)c._start>=s&&(c instanceof Yn?a&&u.push(c):(o&&u.push(c),i&&u.push.apply(u,c.getChildren(!0,a,o)))),c=c._next;return u},t.getById=function(i){for(var a=this.getChildren(1,1,1),o=a.length;o--;)if(a[o].vars.id===i)return a[o]},t.remove=function(i){return or(i)?this.removeLabel(i):Gn(i)?this.killTweensOf(i):(i.parent===this&&Ac(this,i),i===this._recent&&(this._recent=this._last),Ha(this))},t.totalTime=function(i,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Zn(Ur.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),l.prototype.totalTime.call(this,i,a),this._forcing=0,this):this._tTime},t.addLabel=function(i,a){return this.labels[i]=Qr(this,a),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,a,o){var s=Yn.delayedCall(0,a||Ho,o);return s.data="isPause",this._hasPause=1,yi(this,s,Qr(this,i))},t.removePause=function(i){var a=this._first;for(i=Qr(this,i);a;)a._start===i&&a.data==="isPause"&&ca(a),a=a._next},t.killTweensOf=function(i,a,o){for(var s=this.getTweensOf(i,o),u=s.length;u--;)ra!==s[u]&&s[u].kill(i,a);return this},t.getTweensOf=function(i,a){for(var o=[],s=ei(i),u=this._first,c=Gi(a),f;u;)u instanceof Yn?J3(u._targets,s)&&(c?(!ra||u._initted&&u._ts)&&u.globalTime(0)<=a&&u.globalTime(u.totalDuration())>a:!a||u.isActive())&&o.push(u):(f=u.getTweensOf(s,a)).length&&o.push.apply(o,f),u=u._next;return o},t.tweenTo=function(i,a){a=a||{};var o=this,s=Qr(o,i),u=a,c=u.startAt,f=u.onStart,h=u.onStartParams,d=u.immediateRender,v,x=Yn.to(o,jr({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:a.duration||Math.abs((s-(c&&"time"in c?c.time:o._time))/o.timeScale())||mr,onStart:function(){if(o.pause(),!v){var m=a.duration||Math.abs((s-(c&&"time"in c?c.time:o._time))/o.timeScale());x._dur!==m&&Zs(x,m,0,1).render(x._time,!0,!0),v=1}f&&f.apply(x,h||[])}},a));return d?x.render(0):x},t.tweenFromTo=function(i,a,o){return this.tweenTo(a,jr({startAt:{time:Qr(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),uv(this,Qr(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),uv(this,Qr(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+mr)},t.shiftChildren=function(i,a,o){o===void 0&&(o=0);for(var s=this._first,u=this.labels,c;s;)s._start>=o&&(s._start+=i,s._end+=i),s=s._next;if(a)for(c in u)u[c]>=o&&(u[c]+=i);return Ha(this)},t.invalidate=function(i){var a=this._first;for(this._lock=0;a;)a.invalidate(i),a=a._next;return l.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var a=this._first,o;a;)o=a._next,this.remove(a),a=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ha(this)},t.totalDuration=function(i){var a=0,o=this,s=o._last,u=Si,c,f,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;s;)c=s._prev,s._dirty&&s.totalDuration(),f=s._start,f>u&&o._sort&&s._ts&&!o._lock?(o._lock=1,yi(o,s,f-s._delay,1)._lock=0):u=f,f<0&&s._ts&&(a-=f,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=f/o._ts,o._time-=f,o._tTime-=f),o.shiftChildren(-f,!1,-1/0),u=0),s._end>a&&s._ts&&(a=s._end),s=c;Zs(o,o===On&&o._time>a?o._time:a,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(On._ts&&(wg(On,xc(i,On)),yg=Ur.frame),Ur.frame>=sv){sv+=qr.autoSleep||120;var a=On._first;if((!a||!a._ts)&&qr.autoSleep&&Ur._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||Ur.sleep()}}},e}(Xo);jr(Sr.prototype,{_lock:0,_hasPause:0,_forcing:0});var wC=function(e,t,n,i,a,o,s){var u=new Lr(this._pt,e,t,0,1,Zg,null,a),c=0,f=0,h,d,v,x,p,m,_,E;for(u.b=n,u.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Wo(i)),o&&(E=[n,i],o(E,e,t),n=E[0],i=E[1]),d=n.match(Xf)||[];h=Xf.exec(i);)x=h[0],p=i.substring(c,h.index),v?v=(v+1)%5:p.substr(-5)==="rgba("&&(v=1),x!==d[f++]&&(m=parseFloat(d[f-1])||0,u._pt={_next:u._pt,p:p||f===1?p:",",s:m,c:x.charAt(1)==="="?Bs(m,x)-m:parseFloat(x)-m,m:v&&v<4?Math.round:0},c=Xf.lastIndex);return u.c=c<i.length?i.substring(c,i.length):"",u.fp=s,(mg.test(i)||_)&&(u.e=0),this._pt=u,u},Qh=function(e,t,n,i,a,o,s,u,c,f){Gn(i)&&(i=i(a||0,e,o));var h=e[t],d=n!=="get"?n:Gn(h)?c?e[t.indexOf("set")||!Gn(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,v=Gn(h)?c?AC:$g:ed,x;if(or(i)&&(~i.indexOf("random(")&&(i=Wo(i)),i.charAt(1)==="="&&(x=Bs(d,i)+(pr(d)||0),(x||x===0)&&(i=x))),!f||d!==i||Mh)return!isNaN(d*i)&&i!==""?(x=new Lr(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?PC:Yg,0,v),c&&(x.fp=c),s&&x.modifier(s,this,e),this._pt=x):(!h&&!(t in e)&&$h(t,i),wC.call(this,e,t,d,i,v,u||qr.stringFilter,c))},SC=function(e,t,n,i,a){if(Gn(e)&&(e=No(e,a,t,n,i)),!Ei(e)||e.style&&e.nodeType||vr(e)||dg(e))return or(e)?No(e,a,t,n,i):e;var o={},s;for(s in e)o[s]=No(e[s],a,t,n,i);return o},qg=function(e,t,n,i,a,o){var s,u,c,f;if(kr[e]&&(s=new kr[e]).init(a,s.rawVars?t[e]:SC(t[e],i,a,o,n),n,i,o)!==!1&&(n._pt=u=new Lr(n._pt,a,e,0,1,s.render,s,0,s.priority),n!==Ns))for(c=n._ptLookup[n._targets.indexOf(a)],f=s._props.length;f--;)c[s._props[f]]=u;return s},ra,Mh,Jh=function l(e,t,n){var i=e.vars,a=i.ease,o=i.startAt,s=i.immediateRender,u=i.lazy,c=i.onUpdate,f=i.runBackwards,h=i.yoyoEase,d=i.keyframes,v=i.autoRevert,x=e._dur,p=e._startAt,m=e._targets,_=e.parent,E=_&&_.data==="nested"?_.vars.targets:m,T=e._overwrite==="auto"&&!Wh,A=e.timeline,w,I,P,M,L,D,z,Q,J,Y,re,me,ge;if(A&&(!d||!a)&&(a="none"),e._ease=Wa(a,js.ease),e._yEase=h?Gg(Wa(h===!0?a:h,js.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!A&&!!i.runBackwards,!A||d&&!i.stagger){if(Q=m[0]?Va(m[0]).harness:0,me=Q&&i[Q.prop],w=_c(i,Yh),p&&(p._zTime<0&&p.progress(1),t<0&&f&&s&&!v?p.render(-1,!0):p.revert(f&&x?fc:K3),p._lazy=0),o){if(ca(e._startAt=Yn.set(m,jr({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!p&&Cr(u),startAt:null,delay:0,onUpdate:c&&function(){return Hr(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(fr||!s&&!v)&&e._startAt.revert(fc),s&&x&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&x&&!p){if(t&&(s=!1),P=jr({overwrite:!1,data:"isFromStart",lazy:s&&!p&&Cr(u),immediateRender:s,stagger:0,parent:_},w),me&&(P[Q.prop]=me),ca(e._startAt=Yn.set(m,P)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(fr?e._startAt.revert(fc):e._startAt.render(-1,!0)),e._zTime=t,!s)l(e._startAt,mr,mr);else if(!t)return}for(e._pt=e._ptCache=0,u=x&&Cr(u)||u&&!x,I=0;I<m.length;I++){if(L=m[I],z=L._gsap||Kh(m)[I]._gsap,e._ptLookup[I]=Y={},_h[z.id]&&oa.length&&gc(),re=E===m?I:E.indexOf(L),Q&&(J=new Q).init(L,me||w,e,re,E)!==!1&&(e._pt=M=new Lr(e._pt,L,J.name,0,1,J.render,J,0,J.priority),J._props.forEach(function(ae){Y[ae]=M}),J.priority&&(D=1)),!Q||me)for(P in w)kr[P]&&(J=qg(P,w,e,re,L,E))?J.priority&&(D=1):Y[P]=M=Qh.call(e,L,P,"get",w[P],re,E,0,i.stringFilter);e._op&&e._op[I]&&e.kill(L,e._op[I]),T&&e._pt&&(ra=e,On.killTweensOf(L,Y,e.globalTime(t)),ge=!e.parent,ra=0),e._pt&&u&&(_h[z.id]=1)}D&&Kg(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!ge,d&&t<=0&&A.render(Si,!0,!0)},MC=function(e,t,n,i,a,o,s,u){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],f,h,d,v;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,v=e._targets.length;v--;){if(f=d[v][t],f&&f.d&&f.d._pt)for(f=f.d._pt;f&&f.p!==t&&f.fp!==t;)f=f._next;if(!f)return Mh=1,e.vars[t]="+=0",Jh(e,s),Mh=0,u?Vo(t+" not eligible for reset"):1;c.push(f)}for(v=c.length;v--;)h=c[v],f=h._pt||h,f.s=(i||i===0)&&!a?i:f.s+(i||0)+o*f.c,f.c=n-f.s,h.e&&(h.e=qn(n)+pr(h.e)),h.b&&(h.b=f.s+pr(h.b))},EC=function(e,t){var n=e[0]?Va(e[0]).harness:0,i=n&&n.aliases,a,o,s,u;if(!i)return t;a=$s({},t);for(o in i)if(o in a)for(u=i[o].split(","),s=u.length;s--;)a[u[s]]=a[o];return a},TC=function(e,t,n,i){var a=t.ease||i||"power1.inOut",o,s;if(vr(t))s=n[e]||(n[e]=[]),t.forEach(function(u,c){return s.push({t:c/(t.length-1)*100,v:u,e:a})});else for(o in t)s=n[o]||(n[o]=[]),o==="ease"||s.push({t:parseFloat(e),v:t[o],e:a})},No=function(e,t,n,i,a){return Gn(e)?e.call(t,n,i,a):or(e)&&~e.indexOf("random(")?Wo(e):e},Xg=Zh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",jg={};Pr(Xg+",id,stagger,delay,duration,paused,scrollTrigger",function(l){return jg[l]=1});var Yn=function(l){fg(e,l);function e(n,i,a,o){var s;typeof i=="number"&&(a.duration=i,i=a,a=null),s=l.call(this,o?i:Oo(i))||this;var u=s.vars,c=u.duration,f=u.delay,h=u.immediateRender,d=u.stagger,v=u.overwrite,x=u.keyframes,p=u.defaults,m=u.scrollTrigger,_=u.yoyoEase,E=i.parent||On,T=(vr(n)||dg(n)?Gi(n[0]):"length"in i)?[n]:ei(n),A,w,I,P,M,L,D,z;if(s._targets=T.length?Kh(T):Vo("GSAP target "+n+" not found. https://gsap.com",!qr.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=v,x||d||ic(c)||ic(f)){if(i=s.vars,A=s.timeline=new Sr({data:"nested",defaults:p||{},targets:E&&E.data==="nested"?E.vars.targets:T}),A.kill(),A.parent=A._dp=Fi(s),A._start=0,d||ic(c)||ic(f)){if(P=T.length,D=d&&Rg(d),Ei(d))for(M in d)~Xg.indexOf(M)&&(z||(z={}),z[M]=d[M]);for(w=0;w<P;w++)I=_c(i,jg),I.stagger=0,_&&(I.yoyoEase=_),z&&$s(I,z),L=T[w],I.duration=+No(c,Fi(s),w,L,T),I.delay=(+No(f,Fi(s),w,L,T)||0)-s._delay,!d&&P===1&&I.delay&&(s._delay=f=I.delay,s._start+=f,I.delay=0),A.to(L,I,D?D(w,L,T):0),A._ease=bn.none;A.duration()?c=f=0:s.timeline=0}else if(x){Oo(jr(A.vars.defaults,{ease:"none"})),A._ease=Wa(x.ease||i.ease||"none");var Q=0,J,Y,re;if(vr(x))x.forEach(function(me){return A.to(T,me,">")}),A.duration();else{I={};for(M in x)M==="ease"||M==="easeEach"||TC(M,x[M],I,x.easeEach);for(M in I)for(J=I[M].sort(function(me,ge){return me.t-ge.t}),Q=0,w=0;w<J.length;w++)Y=J[w],re={ease:Y.e,duration:(Y.t-(w?J[w-1].t:0))/100*c},re[M]=Y.v,A.to(T,re,Q),Q+=re.duration;A.duration()<c&&A.to({},{duration:c-A.duration()})}}c||s.duration(c=A.duration())}else s.timeline=0;return v===!0&&!Wh&&(ra=Fi(s),On.killTweensOf(T),ra=0),yi(E,Fi(s),a),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(h||!c&&!x&&s._start===Zn(E._time)&&Cr(h)&&rC(Fi(s))&&E.data!=="nested")&&(s._tTime=-1e-8,s.render(Math.max(0,-f)||0)),m&&Ag(Fi(s),m),s}var t=e.prototype;return t.render=function(i,a,o){var s=this._time,u=this._tDur,c=this._dur,f=i<0,h=i>u-mr&&!f?u:i<mr?0:i,d,v,x,p,m,_,E,T,A;if(!c)aC(this,i,a,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==f||this._lazy){if(d=h,T=this.timeline,this._repeat){if(p=c+this._rDelay,this._repeat<-1&&f)return this.totalTime(p*100+i,a,o);if(d=Zn(h%p),h===u?(x=this._repeat,d=c):(m=Zn(h/p),x=~~m,x&&x===m?(d=c,x--):d>c&&(d=c)),_=this._yoyo&&x&1,_&&(A=this._yEase,d=c-d),m=Ys(this._tTime,p),d===s&&!o&&this._initted&&x===m)return this._tTime=h,this;x!==m&&(T&&this._yEase&&Vg(T,_),this.vars.repeatRefresh&&!_&&!this._lock&&d!==p&&this._initted&&(this._lock=o=1,this.render(Zn(p*x),!0).invalidate()._lock=0))}if(!this._initted){if(Cg(this,f?i:d,o,a,h))return this._tTime=0,this;if(s!==this._time&&!(o&&this.vars.repeatRefresh&&x!==m))return this;if(c!==this._dur)return this.render(i,a,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=E=(A||this._ease)(d/c),this._from&&(this.ratio=E=1-E),d&&!s&&!a&&!x&&(Hr(this,"onStart"),this._tTime!==h))return this;for(v=this._pt;v;)v.r(E,v.d),v=v._next;T&&T.render(i<0?i:T._dur*T._ease(d/this._dur),a,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!a&&(f&&xh(this,i,a,o),Hr(this,"onUpdate")),this._repeat&&x!==m&&this.vars.onRepeat&&!a&&this.parent&&Hr(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(f&&!this._onUpdate&&xh(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&ca(this,1),!a&&!(f&&!s)&&(h||s||_)&&(Hr(this,h===u?"onComplete":"onReverseComplete",!0),this._prom&&!(h<u&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),l.prototype.invalidate.call(this,i)},t.resetTo=function(i,a,o,s,u){qo||Ur.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),f;return this._initted||Jh(this,c),f=this._ease(c/this._dur),MC(this,i,a,o,s,f,c,u)?this.resetTo(i,a,o,s,1):(Pc(this,0),this.parent||Eg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,a){if(a===void 0&&(a="all"),!i&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?Po(this):this.scrollTrigger&&this.scrollTrigger.kill(!!fr),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,a,ra&&ra.vars.overwrite!==!0)._first||Po(this),this.parent&&o!==this.timeline.totalDuration()&&Zs(this,this._dur*this.timeline._tDur/o,0,1),this}var s=this._targets,u=i?ei(i):s,c=this._ptLookup,f=this._pt,h,d,v,x,p,m,_;if((!a||a==="all")&&tC(s,u))return a==="all"&&(this._pt=0),Po(this);for(h=this._op=this._op||[],a!=="all"&&(or(a)&&(p={},Pr(a,function(E){return p[E]=1}),a=p),a=EC(s,a)),_=s.length;_--;)if(~u.indexOf(s[_])){d=c[_],a==="all"?(h[_]=a,x=d,v={}):(v=h[_]=h[_]||{},x=a);for(p in x)m=d&&d[p],m&&((!("kill"in m.d)||m.d.kill(p)===!0)&&Ac(this,m,"_pt"),delete d[p]),v!=="all"&&(v[p]=1)}return this._initted&&!this._pt&&f&&Po(this),this},e.to=function(i,a){return new e(i,a,arguments[2])},e.from=function(i,a){return Fo(1,arguments)},e.delayedCall=function(i,a,o,s){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:a,onReverseComplete:a,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:s})},e.fromTo=function(i,a,o){return Fo(2,arguments)},e.set=function(i,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(i,a)},e.killTweensOf=function(i,a,o){return On.killTweensOf(i,a,o)},e}(Xo);jr(Yn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Pr("staggerTo,staggerFrom,staggerFromTo",function(l){Yn[l]=function(){var e=new Sr,t=bh.call(arguments,0);return t.splice(l==="staggerFromTo"?5:4,0,0),e[l].apply(e,t)}});var ed=function(e,t,n){return e[t]=n},$g=function(e,t,n){return e[t](n)},AC=function(e,t,n,i){return e[t](i.fp,n)},CC=function(e,t,n){return e.setAttribute(t,n)},td=function(e,t){return Gn(e[t])?$g:qh(e[t])&&e.setAttribute?CC:ed},Yg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},PC=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Zg=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},nd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},LC=function(e,t,n,i){for(var a=this._pt,o;a;)o=a._next,a.p===i&&a.modifier(e,t,n),a=o},RC=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ac(this,t,"_pt"):t.dep||(n=1),t=i;return!n},DC=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Kg=function(e){for(var t=e._pt,n,i,a,o;t;){for(n=t._next,i=a;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:a=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=a},Lr=function(){function l(t,n,i,a,o,s,u,c,f){this.t=n,this.s=a,this.c=o,this.p=i,this.r=s||Yg,this.d=u||this,this.set=c||ed,this.pr=f||0,this._next=t,t&&(t._prev=this)}var e=l.prototype;return e.modifier=function(n,i,a){this.mSet=this.mSet||this.set,this.set=DC,this.m=n,this.mt=a,this.tween=i},l}();Pr(Zh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(l){return Yh[l]=1});Xr.TweenMax=Xr.TweenLite=Yn;Xr.TimelineLite=Xr.TimelineMax=Sr;On=new Sr({sortChildren:!1,defaults:js,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});qr.stringFilter=Ug;var qa=[],dc={},IC=[],hv=0,OC=0,Kf=function(e){return(dc[e]||IC).map(function(t){return t()})},Eh=function(){var e=Date.now(),t=[];e-hv>2&&(Kf("matchMediaInit"),qa.forEach(function(n){var i=n.queries,a=n.conditions,o,s,u,c;for(s in i)o=_i.matchMedia(i[s]).matches,o&&(u=1),o!==a[s]&&(a[s]=o,c=1);c&&(n.revert(),u&&t.push(n))}),Kf("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),hv=e,Kf("matchMedia"))},Qg=function(){function l(t,n){this.selector=n&&wh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=OC++,t&&this.add(t)}var e=l.prototype;return e.add=function(n,i,a){Gn(n)&&(a=i,i=n,n=Gn);var o=this,s=function(){var c=Pn,f=o.selector,h;return c&&c!==o&&c.data.push(o),a&&(o.selector=wh(a)),Pn=o,h=i.apply(o,arguments),Gn(h)&&o._r.push(h),Pn=c,o.selector=f,o.isReverted=!1,h};return o.last=s,n===Gn?s(o,function(u){return o.add(null,u)}):n?o[n]=s:s},e.ignore=function(n){var i=Pn;Pn=null,n(this),Pn=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof l?n.push.apply(n,i.getTweens()):i instanceof Yn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var a=this;if(n?function(){for(var s=a.getTweens(),u=a.data.length,c;u--;)c=a.data[u],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(f){return s.splice(s.indexOf(f),1)}));for(s.map(function(f){return{g:f._dur||f._delay||f._sat&&!f._sat.vars.immediateRender?f.globalTime(0):-1/0,t:f}}).sort(function(f,h){return h.g-f.g||-1/0}).forEach(function(f){return f.t.revert(n)}),u=a.data.length;u--;)c=a.data[u],c instanceof Sr?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Yn)&&c.revert&&c.revert(n);a._r.forEach(function(f){return f(n,a)}),a.isReverted=!0}():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),i)for(var o=qa.length;o--;)qa[o].id===this.id&&qa.splice(o,1)},e.revert=function(n){this.kill(n||{})},l}(),FC=function(){function l(t){this.contexts=[],this.scope=t,Pn&&Pn.data.push(this)}var e=l.prototype;return e.add=function(n,i,a){Ei(n)||(n={matches:n});var o=new Qg(0,a||this.scope),s=o.conditions={},u,c,f;Pn&&!o.selector&&(o.selector=Pn.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?f=1:(u=_i.matchMedia(n[c]),u&&(qa.indexOf(o)<0&&qa.push(o),(s[c]=u.matches)&&(f=1),u.addListener?u.addListener(Eh):u.addEventListener("change",Eh)));return f&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},l}(),yc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return zg(i)})},timeline:function(e){return new Sr(e)},getTweensOf:function(e,t){return On.getTweensOf(e,t)},getProperty:function(e,t,n,i){or(e)&&(e=ei(e)[0]);var a=Va(e||{}).get,o=n?Mg:Sg;return n==="native"&&(n=""),e&&(t?o((kr[t]&&kr[t].get||a)(e,t,n,i)):function(s,u,c){return o((kr[s]&&kr[s].get||a)(e,s,u,c))})},quickSetter:function(e,t,n){if(e=ei(e),e.length>1){var i=e.map(function(f){return Dr.quickSetter(f,t,n)}),a=i.length;return function(f){for(var h=a;h--;)i[h](f)}}e=e[0]||{};var o=kr[t],s=Va(e),u=s.harness&&(s.harness.aliases||{})[t]||t,c=o?function(f){var h=new o;Ns._pt=0,h.init(e,n?f+n:f,Ns,0,[e]),h.render(1,h),Ns._pt&&nd(1,Ns)}:s.set(e,u);return o?c:function(f){return c(e,u,n?f+n:f,s,1)}},quickTo:function(e,t,n){var i,a=Dr.to(e,jr((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(u,c,f){return a.resetTo(t,u,c,f)};return o.tween=a,o},isTweening:function(e){return On.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Wa(e.ease,js.ease)),ov(js,e||{})},config:function(e){return ov(qr,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,a=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!kr[s]&&!Xr[s]&&Vo(t+" effect requires "+s+" plugin.")}),jf[t]=function(s,u,c){return n(ei(s),jr(u||{},a),c)},o&&(Sr.prototype[t]=function(s,u,c){return this.add(jf[t](s,Ei(u)?u:(c=u)&&{},this),c)})},registerEase:function(e,t){bn[e]=Wa(t)},parseEase:function(e,t){return arguments.length?Wa(e,t):bn},getById:function(e){return On.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Sr(e),i,a;for(n.smoothChildTiming=Cr(e.smoothChildTiming),On.remove(n),n._dp=0,n._time=n._tTime=On._time,i=On._first;i;)a=i._next,(t||!(!i._dur&&i instanceof Yn&&i.vars.onComplete===i._targets[0]))&&yi(n,i,i._start-i._delay),i=a;return yi(On,n,0),n},context:function(e,t){return e?new Qg(e,t):Pn},matchMedia:function(e){return new FC(e)},matchMediaRefresh:function(){return qa.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Eh()},addEventListener:function(e,t){var n=dc[e]||(dc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=dc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:dC,wrapYoyo:pC,distribute:Rg,random:Ig,snap:Dg,normalize:hC,getUnit:pr,clamp:lC,splitColor:kg,toArray:ei,selector:wh,mapRange:Fg,pipe:uC,unitize:fC,interpolate:mC,shuffle:Lg},install:_g,effects:jf,ticker:Ur,updateRoot:Sr.updateRoot,plugins:kr,globalTimeline:On,core:{PropTween:Lr,globals:xg,Tween:Yn,Timeline:Sr,Animation:Xo,getCache:Va,_removeLinkedListItem:Ac,reverting:function(){return fr},context:function(e){return e&&Pn&&(Pn.data.push(e),e._ctx=Pn),Pn},suppressOverwrites:function(e){return Wh=e}}};Pr("to,from,fromTo,delayedCall,set,killTweensOf",function(l){return yc[l]=Yn[l]});Ur.add(Sr.updateRoot);Ns=yc.to({},{duration:0});var NC=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},zC=function(e,t){var n=e._targets,i,a,o;for(i in t)for(a=n.length;a--;)o=e._ptLookup[a][i],o&&(o=o.d)&&(o._pt&&(o=NC(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[a],i))},Qf=function(e,t){return{name:e,rawVars:1,init:function(i,a,o){o._onInit=function(s){var u,c;if(or(a)&&(u={},Pr(a,function(f){return u[f]=1}),a=u),t){u={};for(c in a)u[c]=t(a[c]);a=u}zC(s,a)}}}},Dr=yc.registerPlugin({name:"attr",init:function(e,t,n,i,a){var o,s,u;this.tween=n;for(o in t)u=e.getAttribute(o)||"",s=this.add(e,"setAttribute",(u||0)+"",t[o],i,a,0,0,o),s.op=o,s.b=u,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)fr?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Qf("roundProps",Sh),Qf("modifiers"),Qf("snap",Dg))||yc;Yn.version=Sr.version=Dr.version="3.12.7";gg=1;Xh()&&Ks();bn.Power0;bn.Power1;bn.Power2;bn.Power3;bn.Power4;bn.Linear;bn.Quad;bn.Cubic;bn.Quart;bn.Quint;bn.Strong;bn.Elastic;bn.Back;bn.SteppedEase;bn.Bounce;bn.Sine;bn.Expo;bn.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var dv,ia,Us,rd,Ba,pv,id,kC=function(){return typeof window<"u"},Vi={},Na=180/Math.PI,Gs=Math.PI/180,Ds=Math.atan2,mv=1e8,ad=/([A-Z])/g,BC=/(left|right|width|margin|padding|x)/i,UC=/[\s,\(]\S/,bi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Th=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},GC=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},VC=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},HC=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Jg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},e_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},WC=function(e,t,n){return e.style[t]=n},qC=function(e,t,n){return e.style.setProperty(t,n)},XC=function(e,t,n){return e._gsap[t]=n},jC=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},$C=function(e,t,n,i,a){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(a,o)},YC=function(e,t,n,i,a){var o=e._gsap;o[t]=n,o.renderTransform(a,o)},Fn="transform",Rr=Fn+"Origin",ZC=function l(e,t){var n=this,i=this.target,a=i.style,o=i._gsap;if(e in Vi&&a){if(this.tfm=this.tfm||{},e!=="transform")e=bi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return n.tfm[s]=Ni(i,s)}):this.tfm[e]=o.x?o[e]:Ni(i,e),e===Rr&&(this.tfm.zOrigin=o.zOrigin);else return bi.transform.split(",").forEach(function(s){return l.call(n,s,t)});if(this.props.indexOf(Fn)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Rr,t,"")),e=Fn}(a||t)&&this.props.push(e,t,a[e])},t_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},KC=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,a,o;for(a=0;a<e.length;a+=3)e[a+1]?e[a+1]===2?t[e[a]](e[a+2]):t[e[a]]=e[a+2]:e[a+2]?n[e[a]]=e[a+2]:n.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(ad,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=id(),(!a||!a.isStart)&&!n[Fn]&&(t_(n),i.zOrigin&&n[Rr]&&(n[Rr]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},n_=function(e,t){var n={target:e,props:[],revert:KC,save:ZC};return e._gsap||Dr.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},r_,Ah=function(e,t){var n=ia.createElementNS?ia.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ia.createElement(e);return n&&n.style?n:ia.createElement(e)},Mi=function l(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(ad,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&l(e,Qs(t)||t,1)||""},vv="O,Moz,ms,Ms,Webkit".split(","),Qs=function(e,t,n){var i=t||Ba,a=i.style,o=5;if(e in a&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(vv[o]+e in a););return o<0?null:(o===3?"ms":o>=0?vv[o]:"")+e},Ch=function(){kC()&&window.document&&(dv=window,ia=dv.document,Us=ia.documentElement,Ba=Ah("div")||{style:{}},Ah("div"),Fn=Qs(Fn),Rr=Fn+"Origin",Ba.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",r_=!!Qs("perspective"),id=Dr.core.reverting,rd=1)},gv=function(e){var t=e.ownerSVGElement,n=Ah("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),a;i.style.display="block",n.appendChild(i),Us.appendChild(n);try{a=i.getBBox()}catch{}return n.removeChild(i),Us.removeChild(n),a},_v=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},i_=function(e){var t,n;try{t=e.getBBox()}catch{t=gv(e),n=1}return t&&(t.width||t.height)||n||(t=gv(e)),t&&!t.width&&!t.x&&!t.y?{x:+_v(e,["x","cx","x1"])||0,y:+_v(e,["y","cy","y1"])||0,width:0,height:0}:t},a_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&i_(e))},Za=function(e,t){if(t){var n=e.style,i;t in Vi&&t!==Rr&&(t=Fn),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(ad,"-$1").toLowerCase())):n.removeAttribute(t)}},aa=function(e,t,n,i,a,o){var s=new Lr(e._pt,t,n,0,1,o?e_:Jg);return e._pt=s,s.b=i,s.e=a,e._props.push(n),s},xv={deg:1,rad:1,turn:1},QC={grid:1,flex:1},ua=function l(e,t,n,i){var a=parseFloat(n)||0,o=(n+"").trim().substr((a+"").length)||"px",s=Ba.style,u=BC.test(t),c=e.tagName.toLowerCase()==="svg",f=(c?"client":"offset")+(u?"Width":"Height"),h=100,d=i==="px",v=i==="%",x,p,m,_;if(i===o||!a||xv[i]||xv[o])return a;if(o!=="px"&&!d&&(a=l(e,t,n,"px")),_=e.getCTM&&a_(e),(v||o==="%")&&(Vi[t]||~t.indexOf("adius")))return x=_?e.getBBox()[u?"width":"height"]:e[f],qn(v?a/x*h:a/100*x);if(s[u?"width":"height"]=h+(d?o:i),p=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===ia||!p.appendChild)&&(p=ia.body),m=p._gsap,m&&v&&m.width&&u&&m.time===Ur.time&&!m.uncache)return qn(a/m.width*h);if(v&&(t==="height"||t==="width")){var E=e.style[t];e.style[t]=h+i,x=e[f],E?e.style[t]=E:Za(e,t)}else(v||o==="%")&&!QC[Mi(p,"display")]&&(s.position=Mi(e,"position")),p===e&&(s.position="static"),p.appendChild(Ba),x=Ba[f],p.removeChild(Ba),s.position="absolute";return u&&v&&(m=Va(p),m.time=Ur.time,m.width=p[f]),qn(d?x*a/h:x&&a?h/x*a:0)},Ni=function(e,t,n,i){var a;return rd||Ch(),t in bi&&t!=="transform"&&(t=bi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Vi[t]&&t!=="transform"?(a=$o(e,i),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:wc(Mi(e,Rr))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||i||~(a+"").indexOf("calc("))&&(a=bc[t]&&bc[t](e,t,n)||Mi(e,t)||bg(e,t)||(t==="opacity"?1:0))),n&&!~(a+"").trim().indexOf(" ")?ua(e,t,a,n)+n:a},JC=function(e,t,n,i){if(!n||n==="none"){var a=Qs(t,e,1),o=a&&Mi(e,a,1);o&&o!==n?(t=a,n=o):t==="borderColor"&&(n=Mi(e,"borderTopColor"))}var s=new Lr(this._pt,e.style,t,0,1,Zg),u=0,c=0,f,h,d,v,x,p,m,_,E,T,A,w;if(s.b=n,s.e=i,n+="",i+="",i==="auto"&&(p=e.style[t],e.style[t]=i,i=Mi(e,t)||i,p?e.style[t]=p:Za(e,t)),f=[n,i],Ug(f),n=f[0],i=f[1],d=n.match(Fs)||[],w=i.match(Fs)||[],w.length){for(;h=Fs.exec(i);)m=h[0],E=i.substring(u,h.index),x?x=(x+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(x=1),m!==(p=d[c++]||"")&&(v=parseFloat(p)||0,A=p.substr((v+"").length),m.charAt(1)==="="&&(m=Bs(v,m)+A),_=parseFloat(m),T=m.substr((_+"").length),u=Fs.lastIndex-T.length,T||(T=T||qr.units[t]||A,u===i.length&&(i+=T,s.e+=T)),A!==T&&(v=ua(e,t,p,T)||0),s._pt={_next:s._pt,p:E||c===1?E:",",s:v,c:_-v,m:x&&x<4||t==="zIndex"?Math.round:0});s.c=u<i.length?i.substring(u,i.length):""}else s.r=t==="display"&&i==="none"?e_:Jg;return mg.test(i)&&(s.e=0),this._pt=s,s},yv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},eP=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=yv[n]||n,t[1]=yv[i]||i,t.join(" ")},tP=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,a=t.u,o=n._gsap,s,u,c;if(a==="all"||a===!0)i.cssText="",u=1;else for(a=a.split(","),c=a.length;--c>-1;)s=a[c],Vi[s]&&(u=1,s=s==="transformOrigin"?Rr:Fn),Za(n,s);u&&(Za(n,Fn),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",$o(n,1),o.uncache=1,t_(i)))}},bc={clearProps:function(e,t,n,i,a){if(a.data!=="isFromStart"){var o=e._pt=new Lr(e._pt,t,n,0,0,tP);return o.u=i,o.pr=-10,o.tween=a,e._props.push(n),1}}},jo=[1,0,0,1,0,0],s_={},o_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},bv=function(e){var t=Mi(e,Fn);return o_(t)?jo:t.substr(7).match(pg).map(qn)},sd=function(e,t){var n=e._gsap||Va(e),i=e.style,a=bv(e),o,s,u,c;return n.svg&&e.getAttribute("transform")?(u=e.transform.baseVal.consolidate().matrix,a=[u.a,u.b,u.c,u.d,u.e,u.f],a.join(",")==="1,0,0,1,0,0"?jo:a):(a===jo&&!e.offsetParent&&e!==Us&&!n.svg&&(u=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,s=e.nextElementSibling,Us.appendChild(e)),a=bv(e),u?i.display=u:Za(e,"display"),c&&(s?o.insertBefore(e,s):o?o.appendChild(e):Us.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},Ph=function(e,t,n,i,a,o){var s=e._gsap,u=a||sd(e,!0),c=s.xOrigin||0,f=s.yOrigin||0,h=s.xOffset||0,d=s.yOffset||0,v=u[0],x=u[1],p=u[2],m=u[3],_=u[4],E=u[5],T=t.split(" "),A=parseFloat(T[0])||0,w=parseFloat(T[1])||0,I,P,M,L;n?u!==jo&&(P=v*m-x*p)&&(M=A*(m/P)+w*(-p/P)+(p*E-m*_)/P,L=A*(-x/P)+w*(v/P)-(v*E-x*_)/P,A=M,w=L):(I=i_(e),A=I.x+(~T[0].indexOf("%")?A/100*I.width:A),w=I.y+(~(T[1]||T[0]).indexOf("%")?w/100*I.height:w)),i||i!==!1&&s.smooth?(_=A-c,E=w-f,s.xOffset=h+(_*v+E*p)-_,s.yOffset=d+(_*x+E*m)-E):s.xOffset=s.yOffset=0,s.xOrigin=A,s.yOrigin=w,s.smooth=!!i,s.origin=t,s.originIsAbsolute=!!n,e.style[Rr]="0px 0px",o&&(aa(o,s,"xOrigin",c,A),aa(o,s,"yOrigin",f,w),aa(o,s,"xOffset",h,s.xOffset),aa(o,s,"yOffset",d,s.yOffset)),e.setAttribute("data-svg-origin",A+" "+w)},$o=function(e,t){var n=e._gsap||new Wg(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,a=n.scaleX<0,o="px",s="deg",u=getComputedStyle(e),c=Mi(e,Rr)||"0",f,h,d,v,x,p,m,_,E,T,A,w,I,P,M,L,D,z,Q,J,Y,re,me,ge,ae,Le,Me,fe,V,le,de,Fe;return f=h=d=p=m=_=E=T=A=0,v=x=1,n.svg=!!(e.getCTM&&a_(e)),u.translate&&((u.translate!=="none"||u.scale!=="none"||u.rotate!=="none")&&(i[Fn]=(u.translate!=="none"?"translate3d("+(u.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(u.rotate!=="none"?"rotate("+u.rotate+") ":"")+(u.scale!=="none"?"scale("+u.scale.split(" ").join(",")+") ":"")+(u[Fn]!=="none"?u[Fn]:"")),i.scale=i.rotate=i.translate="none"),P=sd(e,n.svg),n.svg&&(n.uncache?(ae=e.getBBox(),c=n.xOrigin-ae.x+"px "+(n.yOrigin-ae.y)+"px",ge=""):ge=!t&&e.getAttribute("data-svg-origin"),Ph(e,ge||c,!!ge||n.originIsAbsolute,n.smooth!==!1,P)),w=n.xOrigin||0,I=n.yOrigin||0,P!==jo&&(z=P[0],Q=P[1],J=P[2],Y=P[3],f=re=P[4],h=me=P[5],P.length===6?(v=Math.sqrt(z*z+Q*Q),x=Math.sqrt(Y*Y+J*J),p=z||Q?Ds(Q,z)*Na:0,E=J||Y?Ds(J,Y)*Na+p:0,E&&(x*=Math.abs(Math.cos(E*Gs))),n.svg&&(f-=w-(w*z+I*J),h-=I-(w*Q+I*Y))):(Fe=P[6],le=P[7],Me=P[8],fe=P[9],V=P[10],de=P[11],f=P[12],h=P[13],d=P[14],M=Ds(Fe,V),m=M*Na,M&&(L=Math.cos(-M),D=Math.sin(-M),ge=re*L+Me*D,ae=me*L+fe*D,Le=Fe*L+V*D,Me=re*-D+Me*L,fe=me*-D+fe*L,V=Fe*-D+V*L,de=le*-D+de*L,re=ge,me=ae,Fe=Le),M=Ds(-J,V),_=M*Na,M&&(L=Math.cos(-M),D=Math.sin(-M),ge=z*L-Me*D,ae=Q*L-fe*D,Le=J*L-V*D,de=Y*D+de*L,z=ge,Q=ae,J=Le),M=Ds(Q,z),p=M*Na,M&&(L=Math.cos(M),D=Math.sin(M),ge=z*L+Q*D,ae=re*L+me*D,Q=Q*L-z*D,me=me*L-re*D,z=ge,re=ae),m&&Math.abs(m)+Math.abs(p)>359.9&&(m=p=0,_=180-_),v=qn(Math.sqrt(z*z+Q*Q+J*J)),x=qn(Math.sqrt(me*me+Fe*Fe)),M=Ds(re,me),E=Math.abs(M)>2e-4?M*Na:0,A=de?1/(de<0?-de:de):0),n.svg&&(ge=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!o_(Mi(e,Fn)),ge&&e.setAttribute("transform",ge))),Math.abs(E)>90&&Math.abs(E)<270&&(a?(v*=-1,E+=p<=0?180:-180,p+=p<=0?180:-180):(x*=-1,E+=E<=0?180:-180)),t=t||n.uncache,n.x=f-((n.xPercent=f&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-f)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=qn(v),n.scaleY=qn(x),n.rotation=qn(p)+s,n.rotationX=qn(m)+s,n.rotationY=qn(_)+s,n.skewX=E+s,n.skewY=T+s,n.transformPerspective=A+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Rr]=wc(c)),n.xOffset=n.yOffset=0,n.force3D=qr.force3D,n.renderTransform=n.svg?rP:r_?l_:nP,n.uncache=0,n},wc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Jf=function(e,t,n){var i=pr(t);return qn(parseFloat(t)+parseFloat(ua(e,"x",n+"px",i)))+i},nP=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,l_(e,t)},Ra="0deg",Eo="0px",Da=") ",l_=function(e,t){var n=t||this,i=n.xPercent,a=n.yPercent,o=n.x,s=n.y,u=n.z,c=n.rotation,f=n.rotationY,h=n.rotationX,d=n.skewX,v=n.skewY,x=n.scaleX,p=n.scaleY,m=n.transformPerspective,_=n.force3D,E=n.target,T=n.zOrigin,A="",w=_==="auto"&&e&&e!==1||_===!0;if(T&&(h!==Ra||f!==Ra)){var I=parseFloat(f)*Gs,P=Math.sin(I),M=Math.cos(I),L;I=parseFloat(h)*Gs,L=Math.cos(I),o=Jf(E,o,P*L*-T),s=Jf(E,s,-Math.sin(I)*-T),u=Jf(E,u,M*L*-T+T)}m!==Eo&&(A+="perspective("+m+Da),(i||a)&&(A+="translate("+i+"%, "+a+"%) "),(w||o!==Eo||s!==Eo||u!==Eo)&&(A+=u!==Eo||w?"translate3d("+o+", "+s+", "+u+") ":"translate("+o+", "+s+Da),c!==Ra&&(A+="rotate("+c+Da),f!==Ra&&(A+="rotateY("+f+Da),h!==Ra&&(A+="rotateX("+h+Da),(d!==Ra||v!==Ra)&&(A+="skew("+d+", "+v+Da),(x!==1||p!==1)&&(A+="scale("+x+", "+p+Da),E.style[Fn]=A||"translate(0, 0)"},rP=function(e,t){var n=t||this,i=n.xPercent,a=n.yPercent,o=n.x,s=n.y,u=n.rotation,c=n.skewX,f=n.skewY,h=n.scaleX,d=n.scaleY,v=n.target,x=n.xOrigin,p=n.yOrigin,m=n.xOffset,_=n.yOffset,E=n.forceCSS,T=parseFloat(o),A=parseFloat(s),w,I,P,M,L;u=parseFloat(u),c=parseFloat(c),f=parseFloat(f),f&&(f=parseFloat(f),c+=f,u+=f),u||c?(u*=Gs,c*=Gs,w=Math.cos(u)*h,I=Math.sin(u)*h,P=Math.sin(u-c)*-d,M=Math.cos(u-c)*d,c&&(f*=Gs,L=Math.tan(c-f),L=Math.sqrt(1+L*L),P*=L,M*=L,f&&(L=Math.tan(f),L=Math.sqrt(1+L*L),w*=L,I*=L)),w=qn(w),I=qn(I),P=qn(P),M=qn(M)):(w=h,M=d,I=P=0),(T&&!~(o+"").indexOf("px")||A&&!~(s+"").indexOf("px"))&&(T=ua(v,"x",o,"px"),A=ua(v,"y",s,"px")),(x||p||m||_)&&(T=qn(T+x-(x*w+p*P)+m),A=qn(A+p-(x*I+p*M)+_)),(i||a)&&(L=v.getBBox(),T=qn(T+i/100*L.width),A=qn(A+a/100*L.height)),L="matrix("+w+","+I+","+P+","+M+","+T+","+A+")",v.setAttribute("transform",L),E&&(v.style[Fn]=L)},iP=function(e,t,n,i,a){var o=360,s=or(a),u=parseFloat(a)*(s&&~a.indexOf("rad")?Na:1),c=u-i,f=i+c+"deg",h,d;return s&&(h=a.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-360)),h==="cw"&&c<0?c=(c+o*mv)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*mv)%o-~~(c/o)*o)),e._pt=d=new Lr(e._pt,t,n,i,c,GC),d.e=f,d.u="deg",e._props.push(n),d},wv=function(e,t){for(var n in t)e[n]=t[n];return e},aP=function(e,t,n){var i=wv({},n._gsap),a="perspective,force3D,transformOrigin,svgOrigin",o=n.style,s,u,c,f,h,d,v,x;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Fn]=t,s=$o(n,1),Za(n,Fn),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Fn],o[Fn]=t,s=$o(n,1),o[Fn]=c);for(u in Vi)c=i[u],f=s[u],c!==f&&a.indexOf(u)<0&&(v=pr(c),x=pr(f),h=v!==x?ua(n,u,c,x):parseFloat(c),d=parseFloat(f),e._pt=new Lr(e._pt,s,u,h,d-h,Th),e._pt.u=x||0,e._props.push(u));wv(s,i)};Pr("padding,margin,Width,Radius",function(l,e){var t="Top",n="Right",i="Bottom",a="Left",o=(e<3?[t,n,i,a]:[t+a,t+n,i+n,i+a]).map(function(s){return e<2?l+s:"border"+s+l});bc[e>1?"border"+l:l]=function(s,u,c,f,h){var d,v;if(arguments.length<4)return d=o.map(function(x){return Ni(s,x,c)}),v=d.join(" "),v.split(d[0]).length===5?d[0]:v;d=(f+"").split(" "),v={},o.forEach(function(x,p){return v[x]=d[p]=d[p]||d[(p-1)/2|0]}),s.init(u,v,h)}});var c_={name:"css",register:Ch,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,a){var o=this._props,s=e.style,u=n.vars.startAt,c,f,h,d,v,x,p,m,_,E,T,A,w,I,P,M;rd||Ch(),this.styles=this.styles||n_(e),M=this.styles.props,this.tween=n;for(p in t)if(p!=="autoRound"&&(f=t[p],!(kr[p]&&qg(p,t,n,i,e,a)))){if(v=typeof f,x=bc[p],v==="function"&&(f=f.call(n,i,e,a),v=typeof f),v==="string"&&~f.indexOf("random(")&&(f=Wo(f)),x)x(this,e,p,f,n)&&(P=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(p)+"").trim(),f+="",la.lastIndex=0,la.test(c)||(m=pr(c),_=pr(f)),_?m!==_&&(c=ua(e,p,c,_)+_):m&&(f+=m),this.add(s,"setProperty",c,f,i,a,0,0,p),o.push(p),M.push(p,0,s[p]);else if(v!=="undefined"){if(u&&p in u?(c=typeof u[p]=="function"?u[p].call(n,i,e,a):u[p],or(c)&&~c.indexOf("random(")&&(c=Wo(c)),pr(c+"")||c==="auto"||(c+=qr.units[p]||pr(Ni(e,p))||""),(c+"").charAt(1)==="="&&(c=Ni(e,p))):c=Ni(e,p),d=parseFloat(c),E=v==="string"&&f.charAt(1)==="="&&f.substr(0,2),E&&(f=f.substr(2)),h=parseFloat(f),p in bi&&(p==="autoAlpha"&&(d===1&&Ni(e,"visibility")==="hidden"&&h&&(d=0),M.push("visibility",0,s.visibility),aa(this,s,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),p!=="scale"&&p!=="transform"&&(p=bi[p],~p.indexOf(",")&&(p=p.split(",")[0]))),T=p in Vi,T){if(this.styles.save(p),A||(w=e._gsap,w.renderTransform&&!t.parseTransform||$o(e,t.parseTransform),I=t.smoothOrigin!==!1&&w.smooth,A=this._pt=new Lr(this._pt,s,Fn,0,1,w.renderTransform,w,0,-1),A.dep=1),p==="scale")this._pt=new Lr(this._pt,w,"scaleY",w.scaleY,(E?Bs(w.scaleY,E+h):h)-w.scaleY||0,Th),this._pt.u=0,o.push("scaleY",p),p+="X";else if(p==="transformOrigin"){M.push(Rr,0,s[Rr]),f=eP(f),w.svg?Ph(e,f,0,I,0,this):(_=parseFloat(f.split(" ")[2])||0,_!==w.zOrigin&&aa(this,w,"zOrigin",w.zOrigin,_),aa(this,s,p,wc(c),wc(f)));continue}else if(p==="svgOrigin"){Ph(e,f,1,I,0,this);continue}else if(p in s_){iP(this,w,p,d,E?Bs(d,E+f):f);continue}else if(p==="smoothOrigin"){aa(this,w,"smooth",w.smooth,f);continue}else if(p==="force3D"){w[p]=f;continue}else if(p==="transform"){aP(this,f,e);continue}}else p in s||(p=Qs(p)||p);if(T||(h||h===0)&&(d||d===0)&&!UC.test(f)&&p in s)m=(c+"").substr((d+"").length),h||(h=0),_=pr(f)||(p in qr.units?qr.units[p]:m),m!==_&&(d=ua(e,p,c,_)),this._pt=new Lr(this._pt,T?w:s,p,d,(E?Bs(d,E+h):h)-d,!T&&(_==="px"||p==="zIndex")&&t.autoRound!==!1?HC:Th),this._pt.u=_||0,m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=VC);else if(p in s)JC.call(this,e,p,c,E?E+f:f);else if(p in e)this.add(e,p,c||e[p],E?E+f:f,i,a);else if(p!=="parseTransform"){$h(p,f);continue}T||(p in s?M.push(p,0,s[p]):typeof e[p]=="function"?M.push(p,2,e[p]()):M.push(p,1,c||e[p])),o.push(p)}}P&&Kg(this)},render:function(e,t){if(t.tween._time||!id())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ni,aliases:bi,getSetter:function(e,t,n){var i=bi[t];return i&&i.indexOf(",")<0&&(t=i),t in Vi&&t!==Rr&&(e._gsap.x||Ni(e,"x"))?n&&pv===n?t==="scale"?jC:XC:(pv=n||{})&&(t==="scale"?$C:YC):e.style&&!qh(e.style[t])?WC:~t.indexOf("-")?qC:td(e,t)},core:{_removeProperty:Za,_getMatrix:sd}};Dr.utils.checkPrefix=Qs;Dr.core.getStyleSaver=n_;(function(l,e,t,n){var i=Pr(l+","+e+","+t,function(a){Vi[a]=1});Pr(e,function(a){qr.units[a]="deg",s_[a]=1}),bi[i[13]]=l+","+e,Pr(n,function(a){var o=a.split(":");bi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Pr("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(l){qr.units[l]="px"});Dr.registerPlugin(c_);var u_=Dr.registerPlugin(c_)||Dr;u_.core.Tween;let eh=q3;class sP extends eg{constructor(e,t){super(e,t),this.renderer=e,this.count=10,eh=`const int MAX_METABALLS = ${this.count};
`+eh,this.addElements(),this.createTimeline()}addElements(){this.material=new hi({vertexShader:W3,fragmentShader:eh,uniforms:{uInvertColor:{value:!1},uSaturateColor:{value:!1},uEnableThreshold:{value:!1},uTime:{value:0},uAccum:{value:0},uProgress:{value:0},uPhaseStrength:{value:0},uFrequency1:{value:0},uFrequency2:{value:0},uAmplitude1:{value:0},uDistanceFactor:{value:0},uRepeat:{value:0},uThreshold:{value:0},uZoom:{value:0},uResolution:{value:new Jt(Jr.width,Jr.height)},uData:{value:[]},uBrightness:{value:new Ae},uContrast:{value:new Ae},uOscillation:{value:new Ae},uPhase:{value:new Ae},uMax:{value:0},uEase0:{value:0},uRestoreContrast:{value:0},uEase1:{value:0},uEase2:{value:0},uEase3:{value:0},uEase4:{value:0},uEase5:{value:0},uEase6:{value:0},uEase7:{value:0},uEase8:{value:0},uEase9:{value:0},uEase10:{value:0},uEase11:{value:0},uEase12:{value:0},uEase13:{value:0},tSubdiv:{value:null}}}),this.fillData(),this.mesh=new Vr(ug.triangleQuad,this.material),this.add(this.mesh),this.subdiv=new H3(this.renderer)}fillData(){for(let e=0;e<this.count;e++){let t=e/(this.count-1),{brightness:n,contrast:i,oscillation:a,phase:o}=ph.cospalette(pE(ph.presets)),s={id:t,radius:1,position:new Jt(0,0),color:new Cn().setHSL(t,.5,.5),pal:{brightness:n,contrast:i,oscillation:a,phase:o},dir:e%2===0?1:-1};this.material.uniforms.uData.value.push(s)}}update(e,t){this.subdiv.update(t),this.subdiv.render(),this.material.uniforms.tSubdiv.value=this.subdiv.getTexture(),this.material.uniforms.uInvertColor.value=rn.invertColor,this.material.uniforms.uSaturateColor.value=rn.saturateColor,this.material.uniforms.uEnableThreshold.value=rn.enableThreshold,this.material.uniforms.uTime.value=e,this.material.uniforms.uAccum.value=t,this.material.uniforms.uProgress.value=rn.progress,this.material.uniforms.uPhaseStrength.value=rn.phaseStrength,this.material.uniforms.uBrightness.value.x=rn.brightnessX,this.material.uniforms.uBrightness.value.y=rn.brightnessY,this.material.uniforms.uBrightness.value.z=rn.brightnessZ,this.material.uniforms.uContrast.value.x=rn.contrastX,this.material.uniforms.uContrast.value.y=rn.contrastY,this.material.uniforms.uContrast.value.z=rn.contrastZ,this.material.uniforms.uOscillation.value.x=rn.oscillationX,this.material.uniforms.uOscillation.value.y=rn.oscillationY,this.material.uniforms.uOscillation.value.z=rn.oscillationZ,this.material.uniforms.uPhase.value.x=rn.phaseX,this.material.uniforms.uPhase.value.y=rn.phaseY,this.material.uniforms.uPhase.value.z=rn.phaseZ,this.material.uniforms.uFrequency2.value=rn.frequency2,this.material.uniforms.uAmplitude1.value=rn.amplitude1,this.material.uniforms.uDistanceFactor.value=rn.distanceFactor,this.material.uniforms.uRepeat.value=rn.repeat,this.material.uniforms.uThreshold.value=rn.threshold,this.material.uniforms.uZoom.value=rn.zoom}createTimeline(){let e=this.material.uniforms;this.tl=u_.timeline({repeat:-1}),this.tl.to(e.uEase0,{duration:7,value:1,ease:"sine.inOut"}).to(e.uEase1,{duration:15,value:1,ease:"sine.in"}).to(e.uRestoreContrast,{duration:5,value:1,ease:"sine.inOut"},"-=15").to(e.uEase2,{delay:2,duration:7,value:1,ease:"sine.inOut"}).to(e.uEase3,{delay:4,duration:3,value:1,ease:"sine.inOut"}).to(e.uEase4,{delay:2,duration:7,value:1,ease:"sine.inOut"}).to(e.uEase5,{delay:1,duration:5,value:1,ease:"sine.inOut"}).to([e.uEase6,this.subdiv.progress],{duration:5,value:1,ease:"sine.inOut"},"-=2").to(e.uEase7,{delay:9,duration:5,value:1,ease:"sine.inOut"}).to(e.uEase8,{delay:2,duration:7,value:1,ease:"power3.inOut"}).to(e.uEase9,{delay:4,duration:30,value:1,ease:"sine.inOut"}).to(e.uEase10,{duration:12,value:1,ease:"sine.inOut"}).to(e.uEase11,{delay:15,duration:5,value:1,ease:"sine.inOut"}).to(e.uEase12,{duration:7,value:1,ease:"sine.inOut"},"-=2").to(e.uEase13,{delay:4,duration:5,value:1,ease:"sine.inOut"}).to(e.uEase0,{delay:4,duration:12,value:0,ease:"sine.inOut"}),Jr.duration=this.tl.totalDuration()}}var oP=`uniform bool        uShowMap;

uniform float       uPlayhead;

uniform vec2        uResolution;

uniform sampler2D   uScene;\r
uniform sampler2D   uPScene;\r
uniform sampler2D   uDoubleBuffer0;\r
uniform sampler2D   uBuffer0;\r
uniform sampler2D   tWindowMap;

varying vec2        vUv;

#ifndef EIGHTH_PI\r
#define EIGHTH_PI 0.39269908169\r
#endif\r
#ifndef QTR_PI\r
#define QTR_PI 0.78539816339\r
#endif\r
#ifndef HALF_PI\r
#define HALF_PI 1.5707963267948966192313216916398\r
#endif\r
#ifndef PI\r
#define PI 3.1415926535897932384626433832795\r
#endif\r
#ifndef TWO_PI\r
#define TWO_PI 6.2831853071795864769252867665590\r
#endif\r
#ifndef TAU\r
#define TAU 6.2831853071795864769252867665590\r
#endif\r
#ifndef INV_PI\r
#define INV_PI 0.31830988618379067153776752674503\r
#endif\r
#ifndef INV_SQRT_TAU\r
#define INV_SQRT_TAU 0.39894228040143267793994605993439  
#endif\r
#ifndef SQRT_HALF_PI\r
#define SQRT_HALF_PI 1.25331413732\r
#endif\r
#ifndef PHI\r
#define PHI 1.618033988749894848204586834\r
#endif\r
#ifndef EPSILON\r
#define EPSILON 0.0000001\r
#endif\r
#ifndef GOLDEN_RATIO\r
#define GOLDEN_RATIO 1.6180339887\r
#endif\r
#ifndef GOLDEN_RATIO_CONJUGATE \r
#define GOLDEN_RATIO_CONJUGATE 0.61803398875\r
#endif\r
#ifndef GOLDEN_ANGLE 
#define GOLDEN_ANGLE 2.39996323\r
#endif\r
#ifndef DEG2RAD\r
#define DEG2RAD (PI / 180.0)\r
#endif\r
#ifndef RAD2DEG\r
#define RAD2DEG (180.0 / PI)\r
#endif\r
#define RANDOM_SINLESS\r
#ifndef RANDOM_SCALE\r
#ifdef RANDOM_HIGHER_RANGE\r
#define RANDOM_SCALE vec4(.1031, .1030, .0973, .1099)\r
#else\r
#define RANDOM_SCALE vec4(443.897, 441.423, .0973, .1099)\r
#endif\r
#endif

#ifndef FNC_RANDOM\r
#define FNC_RANDOM\r
float random(in float x) {\r
#ifdef RANDOM_SINLESS\r
    x = fract(x * RANDOM_SCALE.x);\r
    x *= x + 33.33;\r
    x *= x + x;\r
    return fract(x);\r
#else\r
    return fract(sin(x) * 43758.5453);\r
#endif\r
}

float random(in vec2 st) {\r
#ifdef RANDOM_SINLESS\r
    vec3 p3  = fract(vec3(st.xyx) * RANDOM_SCALE.xyz);\r
    p3 += dot(p3, p3.yzx + 33.33);\r
    return fract((p3.x + p3.y) * p3.z);\r
#else\r
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453);\r
#endif\r
}

float random(in vec3 pos) {\r
#ifdef RANDOM_SINLESS\r
    pos  = fract(pos * RANDOM_SCALE.xyz);\r
    pos += dot(pos, pos.zyx + 31.32);\r
    return fract((pos.x + pos.y) * pos.z);\r
#else\r
    return fract(sin(dot(pos.xyz, vec3(70.9898, 78.233, 32.4355))) * 43758.5453123);\r
#endif\r
}

float random(in vec4 pos) {\r
#ifdef RANDOM_SINLESS\r
    pos = fract(pos * RANDOM_SCALE);\r
    pos += dot(pos, pos.wzxy + 33.33);\r
    return fract((pos.x + pos.y) * (pos.z + pos.w));\r
#else\r
    float dot_product = dot(pos, vec4(12.9898,78.233,45.164,94.673));\r
    return fract(sin(dot_product) * 43758.5453);\r
#endif\r
}

vec2 random2(float p) {\r
    vec3 p3 = fract(vec3(p) * RANDOM_SCALE.xyz);\r
    p3 += dot(p3, p3.yzx + 19.19);\r
    return fract((p3.xx + p3.yz) * p3.zy);\r
}

vec2 random2(vec2 p) {\r
    vec3 p3 = fract(p.xyx * RANDOM_SCALE.xyz);\r
    p3 += dot(p3, p3.yzx + 19.19);\r
    return fract((p3.xx + p3.yz) * p3.zy);\r
}

vec2 random2(vec3 p3) {\r
    p3 = fract(p3 * RANDOM_SCALE.xyz);\r
    p3 += dot(p3, p3.yzx + 19.19);\r
    return fract((p3.xx + p3.yz) * p3.zy);\r
}

vec3 random3(float p) {\r
    vec3 p3 = fract(vec3(p) * RANDOM_SCALE.xyz);\r
    p3 += dot(p3, p3.yzx + 19.19);\r
    return fract((p3.xxy + p3.yzz) * p3.zyx); \r
}

vec3 random3(vec2 p) {\r
    vec3 p3 = fract(vec3(p.xyx) * RANDOM_SCALE.xyz);\r
    p3 += dot(p3, p3.yxz + 19.19);\r
    return fract((p3.xxy + p3.yzz) * p3.zyx);\r
}

vec3 random3(vec3 p) {\r
    p = fract(p * RANDOM_SCALE.xyz);\r
    p += dot(p, p.yxz + 19.19);\r
    return fract((p.xxy + p.yzz) * p.zyx);\r
}

vec4 random4(float p) {\r
    vec4 p4 = fract(p * RANDOM_SCALE);\r
    p4 += dot(p4, p4.wzxy + 19.19);\r
    return fract((p4.xxyz + p4.yzzw) * p4.zywx);   \r
}

vec4 random4(vec2 p) {\r
    vec4 p4 = fract(p.xyxy * RANDOM_SCALE);\r
    p4 += dot(p4, p4.wzxy + 19.19);\r
    return fract((p4.xxyz + p4.yzzw) * p4.zywx);\r
}

vec4 random4(vec3 p) {\r
    vec4 p4 = fract(p.xyzx * RANDOM_SCALE);\r
    p4 += dot(p4, p4.wzxy + 19.19);\r
    return fract((p4.xxyz + p4.yzzw) * p4.zywx);\r
}

vec4 random4(vec4 p4) {\r
    p4 = fract(p4  * RANDOM_SCALE);\r
    p4 += dot(p4, p4.wzxy + 19.19);\r
    return fract((p4.xxyz + p4.yzzw) * p4.zywx);\r
}\r
#endif\r
vec2 textureQueryLod(sampler2D sampler, vec2 P) {\r
  vec2 pos = P * vec2(textureSize(sampler, 0)); 
  vec2 ddx = dFdx(pos);\r
  vec2 ddy = dFdy(pos);\r
  float tmp = max(dot(ddx, ddx), dot(ddy, ddy));\r
  float lambda = log2(tmp) * 0.5; 
  
  float lod = max(lambda, 0.0);\r
  return vec2(lod);\r
}

vec4 textureBorderClamp(sampler2D sampler, vec2 uv, vec2 size, vec4 borderColor, bvec2 wrap) {\r
#if 1\r
  
  float lod = textureQueryLod(sampler, uv).y; 
  ivec2 size0 = textureSize(sampler, int(floor(lod))); 
  ivec2 size1 = textureSize(sampler, int(ceil(lod))); 
  
  
  size = mix(vec2(size0), vec2(size1), fract(lod));\r
  vec4 ret = textureLod(sampler, uv, lod); 
#else\r
  
  vec4 ret = texture(sampler, uv); 
#endif

  vec2 limit = vec2(1.0, 0.5); 
  vec2 factors = clamp(0.5 + (abs(uv - 0.5) - 0.5) * vec2(size), vec2(0.0), limit); \r
  if (wrap.x)\r
  	ret = mix(ret, borderColor, factors.x);\r
  if (wrap.y)\r
    ret = mix(ret, borderColor, factors.y);\r
  return ret;\r
}

void main() {\r
    float t = uPlayhead;

    vec2 pixel = 1.0 / uResolution;\r
    vec2 st = gl_FragCoord.xy * pixel;\r
    vec2 cuv = vUv - 0.5;\r
    vec2 puv = vec2(atan(cuv.x, cuv.y) / TWO_PI + 0.5, length(cuv));    

    float gr = random(st);

    vec4 color = vec4(vec3(0.0), 1.0);\r
    vec4 window = texture2D(tWindowMap, st);\r

#if defined(BACKGROUND)\r
    color.a = 0.0;

#elif defined(DOUBLE_BUFFER_0)\r
    vec4 scene = texture2D(uScene, st);

    vec4 borderColor = vec4(0.0, 0.0, 0.0, 0.0);\r
    vec4 prev = textureBorderClamp(uDoubleBuffer0, st, uResolution, borderColor, bvec2(true, true));    

    color = mix(prev, scene, scene.a);

#elif defined(BUFFER_0)\r
    color = texture2D(uScene, st);

#elif defined(POSTPROCESSING)\r
    color = texture2D(uBuffer0, st);

#endif

    gl_FragColor = color;

    if (uShowMap) {\r
        gl_FragColor.rgb *= window.rgb;\r
    }

    gl_FragColor.a = 1.0;\r
}`,ac={exports:{}},Sv;function lP(){if(Sv)return ac.exports;Sv=1;function l(){}return l.prototype={on:function(e,t,n){var i=this.e||(this.e={});return(i[e]||(i[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var i=this;function a(){i.off(e,a),t.apply(n,arguments)}return a._=t,this.on(e,a,n)},emit:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),i=0,a=n.length;for(i;i<a;i++)n[i].fn.apply(n[i].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),i=n[e],a=[];if(i&&t)for(var o=0,s=i.length;o<s;o++)i[o].fn!==t&&i[o].fn._!==t&&a.push(i[o]);return a.length?n[e]=a:delete n[e],this}},ac.exports=l,ac.exports.TinyEmitter=l,ac.exports}var cP=lP();const uP=Mv(cP),zo=new uP;class fP{constructor(){Pi(this,"onKeyUp",e=>{zo.emit("keyup",e)});Pi(this,"onKeyDown",e=>{zo.emit("keydown",e)});this.init()}init(){window.addEventListener("keyup",this.onKeyUp,!1),window.addEventListener("keydown",this.onKeyDown,!1)}}function hP(){[fP].forEach(e=>new e)}hP();let dP=l=>{let e=Vh.random.noise1D(l);e=cf(e,-1,1,0,1);let t=1.5,n=Math.PI*2,i=1.5,a=cf(Math.sin(n*t*l),-1,1,-1,0)*i,o=cf(Math.sin(n*2*t*l+1),-1,1,-1,0)*i*.5;return a+o};const pP=async l=>{let{context:e,width:t,height:n,update:i}=l;Jr.width=t,Jr.height=n;let a=0,o;const s=new Ro;s.dom.classList.add("stats-hide"),document.body.appendChild(s.dom);const u=new Kv({canvas:e.canvas});u.setClearColor("#000",1);const c=new Tr(45,t/n,.01,100);c.position.set(0,0,5);const f=new H2(c,e.canvas),h=new U2,d=new Y2(u,{uPlayhead:{value:0},tWindowMap:{value:h.load("window-map.png")},uShowMap:{value:rn.showMap}});d.load(oP);const v=new sP(u);return l.update({duration:Jr.duration}),zo.on("keydown",x=>{x.code==="KeyD"&&(Jr.debug=!Jr.debug)}),zo.on("keydown",x=>{x.code==="KeyG"&&(Jr.openGui=!Jr.openGui,Jr.openGui?Go.show():Go.hide(),s.dom.classList.toggle("stats-hide"))}),zo.on("keydown",x=>{x.code==="KeyR"&&window.location.reload()}),{resize({pixelRatio:x,viewportWidth:p,viewportHeight:m}){u.setPixelRatio(x),u.setSize(p,m,!1),d.setSize(p,m),c.aspect=p/m,c.updateProjectionMatrix()},render({deltaTime:x}){if(f.update(),l.recording){let p=l.time/Jr.duration;v.tl.progress(p),a+=x*.5}else a+=x;o=a*0+dP(a*.5)*.2,v.update(o,a),d.uniforms.uPlayhead.value=0,d.uniforms.uShowMap.value=rn.showMap,d.renderScene(v,c),s.update()},unload(){f.dispose(),u.dispose()}}};z1(pP,Tv);
