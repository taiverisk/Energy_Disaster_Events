(function(){var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},g="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ba=function(){ba=function(){};g.Symbol||(g.Symbol=ca)},da=0,ca=function(a){return"jscomp_symbol_"+(a||"")+da++},l=function(){ba();var a=g.Symbol.iterator;a||(a=g.Symbol.iterator=
g.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(this)}});l=function(){}},ea=function(a){var b=0;return fa(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})},fa=function(a){l();a={next:a};a[g.Symbol.iterator]=function(){return this};return a};var m=this,n=function(){},ga=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},p=function(a){return"string"==typeof a},q=function(a){return"function"==ga(a)},r=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ha=function(a,b,c){return a.call.apply(a.bind,arguments)},ia=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,
c)}}return function(){return a.apply(b,arguments)}},v=function(a,b,c){v=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ha:ia;return v.apply(null,arguments)};var ja=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},w=function(a,b){return a<b?-1:a>b?1:0},ka=function(){return"opacity".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()})},la=function(a){var b=p(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})};var ma=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},oa=function(a){var b=document;b=b.querySelectorAll&&b.querySelector?b.querySelectorAll(".GoogleActiveViewClass"):na();var c=b.length;if(0<c){for(var d=Array(c),e=0;e<c;e++)d[e]=b[e];b=d}else b=[];a:{for(var c=b,d=c.length,e=p(c)?c.split(""):c,
f=0;f<d;f++)if(f in e&&a.call(void 0,e[f],f,c)){a=f;break a}a=-1}return 0>a?null:p(b)?b.charAt(a):b[a]};var x;a:{var pa=m.navigator;if(pa){var qa=pa.userAgent;if(qa){x=qa;break a}}x=""}var y=function(a){return-1!=x.indexOf(a)};var z=function(){return(y("Chrome")||y("CriOS"))&&!y("Edge")};var A=function(){return y("iPhone")&&!y("iPod")&&!y("iPad")};var B=function(a){B[" "](a);return a};B[" "]=n;var ra=function(a,b){try{return B(a[b]),!0}catch(c){}return!1},ta=function(a,b){var c=sa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var C=y("Opera"),D=y("Trident")||y("MSIE"),ua=y("Edge"),E=y("Gecko")&&!(-1!=x.toLowerCase().indexOf("webkit")&&!y("Edge"))&&!(y("Trident")||y("MSIE"))&&!y("Edge"),F=-1!=x.toLowerCase().indexOf("webkit")&&!y("Edge"),va=y("Macintosh"),wa=y("Windows"),xa=y("Android"),ya=A(),za=y("iPad"),Aa=y("iPod"),Ba=function(){var a=m.document;return a?a.documentMode:void 0},G;
a:{var H="",I=function(){var a=x;if(E)return/rv\:([^\);]+)(\)|;)/.exec(a);if(ua)return/Edge\/([\d\.]+)/.exec(a);if(D)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(F)return/WebKit\/(\S+)/.exec(a);if(C)return/(?:Version)[ \/]?(\S+)/.exec(a)}();I&&(H=I?I[1]:"");if(D){var J=Ba();if(null!=J&&J>parseFloat(H)){G=String(J);break a}}G=H}
var K=G,sa={},L=function(a){return ta(a,function(){for(var b=0,c=ja(String(K)).split("."),d=ja(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var h=c[f]||"",k=d[f]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==h[0].length&&0==k[0].length)break;b=w(0==h[1].length?0:parseInt(h[1],10),0==k[1].length?0:parseInt(k[1],10))||w(0==h[2].length,0==k[2].length)||w(h[2],k[2]);h=h[3];k=k[3]}while(0==b)}return 0<=b})},Ca;var Da=m.document;
Ca=Da&&D?Ba()||("CSS1Compat"==Da.compatMode?parseInt(K,10):5):void 0;!E&&!D||D&&9<=Number(Ca)||E&&L("1.9.1");D&&L("9");var Ea=D||C||F;var na=function(){var a,b,c;var d=document;if(d.querySelectorAll&&d.querySelector)return d.querySelectorAll(".GoogleActiveViewClass");if(d.getElementsByClassName)return c=d.getElementsByClassName("GoogleActiveViewClass");c=d.getElementsByTagName("*");var e={};for(a=b=0;d=c[a];a++){var f=d.className,h;if(h="function"==typeof f.split)h=0<=ma(f.split(/\s+/),"GoogleActiveViewClass");h&&(e[b++]=d)}e.length=b;return e},M=function(a){return a?a.parentWindow||a.defaultView:window};var N=function(a,b,c){this.F=c;this.C=a;this.H=b;this.m=0;this.l=null};N.prototype.get=function(){if(0<this.m){this.m--;var a=this.l;this.l=a.next;a.next=null}else a=this.C();return a};N.prototype.put=function(a){this.H(a);this.m<this.F&&(this.m++,a.next=this.l,this.l=a)};var Fa=function(a){m.setTimeout(function(){throw a;},0)},O,Ga=function(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!y("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,
a=v(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!y("Trident")&&!y("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.A;c.A=null;a()}};return function(a){d.next={A:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?
function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){m.setTimeout(a,0)}};var P=function(){this.s=this.g=null},Ha=new N(function(){return new Q},function(a){a.reset()},100);P.prototype.add=function(a,b){var c=Ha.get();c.set(a,b);this.s?this.s.next=c:this.g=c;this.s=c};P.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.s=null),a.next=null);return a};var Q=function(){this.next=this.scope=this.w=null};Q.prototype.set=function(a,b){this.w=a;this.scope=b;this.next=null};Q.prototype.reset=function(){this.next=this.scope=this.w=null};var La=function(a,b){R||Ia();Ja||(R(),Ja=!0);Ka.add(a,b)},R,Ia=function(){if(-1!=String(m.Promise).indexOf("[native code]")){var a=m.Promise.resolve(void 0);R=function(){a.then(Ma)}}else R=function(){var a=Ma;!q(m.setImmediate)||m.Window&&m.Window.prototype&&!y("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(O||(O=Ga()),O(a)):m.setImmediate(a)}},Ja=!1,Ka=new P,Ma=function(){for(var a;a=Ka.remove();){try{a.w.call(a.scope)}catch(b){Fa(b)}Ha.put(a)}Ja=!1};var T=function(a,b){this.a=0;this.B=void 0;this.i=this.b=this.o=null;this.j=this.v=!1;if(a!=n)try{var c=this;a.call(b,function(a){S(c,2,a)},function(a){S(c,3,a)})}catch(d){S(this,3,d)}},Na=function(){this.next=this.context=this.f=this.h=this.c=null;this.u=!1};Na.prototype.reset=function(){this.context=this.f=this.h=this.c=null;this.u=!1};
var Oa=new N(function(){return new Na},function(a){a.reset()},100),Pa=function(a,b,c){var d=Oa.get();d.h=a;d.f=b;d.context=c;return d},Ra=function(){var a,b,c=new T(function(c,e){a=c;b=e});return new Qa(c,a,b)};T.prototype.then=function(a,b,c){return Sa(this,q(a)?a:null,q(b)?b:null,c)};T.prototype.then=T.prototype.then;T.prototype.$goog_Thenable=!0;
var Ua=function(a,b){a.b||2!=a.a&&3!=a.a||Ta(a);a.i?a.i.next=b:a.b=b;a.i=b},Sa=function(a,b,c,d){var e=Pa(null,null,null);e.c=new T(function(a,h){e.h=b?function(c){try{var e=b.call(d,c);a(e)}catch(t){h(t)}}:a;e.f=c?function(b){try{var e=c.call(d,b);a(e)}catch(t){h(t)}}:h});e.c.o=a;Ua(a,e);return e.c};T.prototype.J=function(a){this.a=0;S(this,2,a)};T.prototype.K=function(a){this.a=0;S(this,3,a)};
var S=function(a,b,c){if(0==a.a){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.a=1;a:{var d=c,e=a.J,f=a.K;if(d instanceof T){Ua(d,Pa(e||n,f||null,a));var h=!0}else{if(d)try{var k=!!d.$goog_Thenable}catch(t){k=!1}else k=!1;if(k)d.then(e,f,a),h=!0;else{if(r(d))try{var u=d.then;if(q(u)){Va(d,u,e,f,a);h=!0;break a}}catch(t){f.call(a,t);h=!0;break a}h=!1}}}h||(a.B=c,a.a=b,a.o=null,Ta(a),3!=b||Wa(a,c))}},Va=function(a,b,c,d,e){var f=!1,h=function(a){f||(f=!0,c.call(e,a))},k=function(a){f||
(f=!0,d.call(e,a))};try{b.call(a,h,k)}catch(u){k(u)}},Ta=function(a){a.v||(a.v=!0,La(a.D,a))},Xa=function(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.i=null);return b};T.prototype.D=function(){for(var a;a=Xa(this);){var b=this.a,c=this.B;if(3==b&&a.f&&!a.u){var d;for(d=this;d&&d.j;d=d.o)d.j=!1}if(a.c)a.c.o=null,Ya(a,b,c);else try{a.u?a.h.call(a.context):Ya(a,b,c)}catch(e){Za.call(null,e)}Oa.put(a)}this.v=!1};
var Ya=function(a,b,c){2==b?a.h.call(a.context,c):a.f&&a.f.call(a.context,c)},Wa=function(a,b){a.j=!0;La(function(){a.j&&Za.call(null,b)})},Za=Fa,Qa=function(a,b,c){this.G=a;this.resolve=b;this.reject=c};var $a=function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});m.addEventListener("test",null,b)}catch(c){}return a}();var ab=function(a){var b=M();b.google_image_requests||(b.google_image_requests=[]);var c=b.document.createElement("img");c.src=a;b.google_image_requests.push(c)};var bb=function(a){return"//pagead2.googlesyndication.com/pagead/gen_204?id=sodar&v=20&t="+a},U=function(a,b,c,d){a=bb(1)+"&e="+a;c&&(a+="&li="+encodeURIComponent(String(c)));d&&(a+="&cv="+encodeURIComponent(String(d)));b&&(a+="&bgai="+encodeURIComponent(String(b)));ab(a)},cb=function(a,b,c,d,e){"0.01"<Math.random()||(a="//pagead2.googlesyndication.com/pagead/gen_204?id=sodarir&v=20&d="+(a?1:0)+"&s="+(b?1:0)+"&f=0.01",d&&(a+="&li="+encodeURIComponent(String(d))),e&&(a+="&cv="+encodeURIComponent(String(e))),
c&&(a+="&bgai="+encodeURIComponent(String(c))),ab(a))},eb=function(a,b){return function(){try{return a.apply(this,arguments)}catch(k){if(!(1<=db.count)){var c=bb(3)+"&c="+encodeURIComponent(String(b))+"&ex=",d=k.toString();k.name&&-1==d.indexOf(k.name)&&(d+=": "+k.name);k.message&&-1==d.indexOf(k.message)&&(d+=": "+k.message);if(k.stack){var e=k.stack,f=d;try{-1==e.indexOf(f)&&(e=f+"\n"+e);for(var h;e!=h;)h=e,e=e.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");d=e.replace(/\n */g,"\n")}catch(u){d=
f}}c+=encodeURIComponent(String(d));2E3<c.length?U(11):ab(c);db.count+=1}}}},db={count:0},fb=function(a,b){b=eb(b,"i:lh");var c={capture:void 0};a.addEventListener?a.addEventListener("load",b,$a?c:c?c.capture||!1:!1):a.attachEvent&&a.attachEvent("onload",b);return b},gb=function(a,b){var c=b;var d=fb(a,function(){if(c){var b=c;c=null;var f={capture:void 0};a.removeEventListener?a.removeEventListener("load",d,$a?f:f?f.capture||!1:!1):a.detachEvent&&a.detachEvent("onload",d);return b.apply(this,arguments)}})},
V=function(){this.I=Ra()};V.prototype.start=function(){};V.prototype.end=function(){this.I.resolve("")};var hb=function(){return oa(function(a){var b;if(b="DIV"==a.tagName)b=0==a.id.lastIndexOf("DfaVisibilityIdentifier_",0);return b})};var W=!1,X=function(a){if(a=a.match(/[\d]+/g))a.length=3};
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(W=!0,a.description)){X(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){W=!0;return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],W=!(!a||!a.enabledPlugin))){X(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");W=!0;X(b.GetVariable("$version"));return}catch(c){}try{b=
new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");W=!0;return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),W=!0,X(b.GetVariable("$version"))}catch(c){}})();(function(){if(wa){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(x))?a[1]:"0"}return va?(a=/10[_.][0-9_.]+/,(a=a.exec(x))?a[0].replace(/_/g,"."):"10"):xa?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(x))?a[1]:""):ya||za||Aa?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(x))?a[1].replace(/_/g,"."):""):""})();var ib=y("Firefox"),jb=A()||y("iPod"),kb=y("iPad"),lb=y("Android")&&!(z()||y("Firefox")||y("Opera")||y("Silk")),mb=z(),nb=y("Safari")&&!(z()||y("Coast")||y("Opera")||y("Edge")||y("Silk")||y("Android"))&&!(A()||y("iPad")||y("iPod"));var Y=function(a){return(a=a.exec(x))?a[1]:""};(function(){if(ib)return Y(/Firefox\/([0-9.]+)/);if(D||ua||C)return K;if(mb)return A()||y("iPad")||y("iPod")?Y(/CriOS\/([0-9.]+)/):Y(/Chrome\/([0-9.]+)/);if(nb&&!(A()||y("iPad")||y("iPod")))return Y(/Version\/([0-9.]+)/);if(jb||kb){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(x);if(a)return a[1]+"."+a[2]}else if(lb)return(a=Y(/Android\s+([0-9.]+)/))?a:Y(/Version\/([0-9.]+)/);return""})();var ob={};var qb=function(a){return pb(a,function(a,c){var b=1;if(ra(c,"style")&&c.style){var b=parseFloat;a:{var e=9==c.nodeType?c:c.ownerDocument||c.document;if(e.defaultView&&e.defaultView.getComputedStyle&&(e=e.defaultView.getComputedStyle(c,null))){e=e.opacity||e.getPropertyValue("opacity")||"";break a}e=""}if(!e){e=c.style[ka()];if("undefined"!==typeof e)c=e;else{e=c.style;var f=ob.opacity;if(!f){var h=ka(),f=h;void 0===c.style[h]&&(h=(F?"Webkit":E?"Moz":D?"ms":C?"O":null)+la(h),void 0!==c.style[h]&&
(f=h));ob.opacity=f}c=e[f]||""}e=c}b=b(e);if("number"!=typeof b||isNaN(b))b=1}return b*a},function(a){return 0===a},1)},pb=function(a,b,c,d){if(!a)return d;d=rb(a,b,c,d);if(!d.done)try{var e=9==a.nodeType?a:a.ownerDocument||a.document,f=e&&M(e);return pb(f&&f.frameElement,b,c,d.value)}catch(h){}return d.value},rb=function(a,b,c,d){if(!a)return{value:d,done:!1};d=b(d,a);var e=c(d,a);if(!e&&ra(a,"parentElement")){e=rb;a:{var f;if(Ea&&!(D&&L("9")&&!L("10")&&m.SVGElement&&a instanceof m.SVGElement)&&
(f=a.parentElement)){a=f;break a}f=a.parentNode;a=r(f)&&1==f.nodeType?f:null}b=e(a,b,c,d)}else b={done:e,value:d};return b};D&&L("9");!F||L("528");E&&L("1.9b")||D&&L("8")||C&&L("9.5")||F&&L("528");E&&!L("8")||D&&L("9");function sb(a){if(!r(a))return!1;switch(a["0"]){case "0":return!("0"===a["0"]&&p(a["1"])&&p(a["2"])&&p(a["3"])&&p(a["4"]))||"5"in a&&!p(a["5"])||void 0!==a["8"]&&isNaN(parseInt(a["8"],10))?!1:!0;case "1":if("1"===a["0"]&&p(a["1"])){var b=a["6"];a=a["7"];b=""!==b&&""!==a&&!isNaN(Number(b))&&!isNaN(Number(a))}else b=!1;return b}return!1}var tb=function(a){if(!sb(a))return null;var b=[],c;for(c in a)b.push(encodeURIComponent(c)+"="+encodeURIComponent(a[c]));return b.join("&")};var ub={},Z=(ub.it=new V,ub.dt=new V,ub),vb=Ra(),wb=function(){var a=M().GoogleTyFxhY;if(!a)return U(13),null;if(0==a.length)return U(1),null;a=a.shift();return(a._scs_||a._cv_)&&a._bgu_&&a._bgp_?a:(U(2),null)},xb=function(a){a:{try{var b=a.contentWindow||(a.contentDocument?M(a.contentDocument):null);break a}catch(c){}b=null}vb.resolve([(0==a.src.indexOf("https:")?"https":"http")+"://tpc.googlesyndication.com",b])},yb=function(){var a=document.createElement("iframe");gb(a,v(xb,null,a));a.src="//tpc.googlesyndication.com/sodar/HzS_ecGv.html";
a.width="0";a.height="0";a.style.display="none";document.body.appendChild(a)};function zb(a){vb.G.then(function(b){l();var c=(c=b[Symbol.iterator])?c.call(b):ea(b);b=c.next().value;c=c.next().value;var d=a._scs_,e=a._bgu_,f=a._bgp_,h=a._li_,k=a._cv_,u,t=hb();t&&t.getBoundingClientRect()&&(u=Math.floor(100*qb(t)));d={0:"0",1:d||"",2:e,3:f,4:h||"",5:k||""};void 0!==u&&(d["8"]=u);c?c.postMessage(tb(d),b):U(3)})};Z.it.start();(function(a,b,c){eb(a,b).apply(null,Array.prototype.slice.call(arguments,2))})(function(){var a=M().postMessage?!0:!1,b=!1,c=null,d=null,e=null,f=wb();f&&(b=!0,c=f._scs_,d=f._li_,e=f._cv_,a?(yb(),zb(f)):U(8,c,d,e),m.setTimeout(eb(function(){Z.dt.start();Z.dt.end()},"i:rsv"),0));cb(b,a,c,d,e);Z.it.end()},"i:i");}).call(this);