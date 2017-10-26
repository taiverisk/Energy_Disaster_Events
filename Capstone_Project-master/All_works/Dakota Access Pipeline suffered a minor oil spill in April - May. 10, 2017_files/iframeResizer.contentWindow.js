(function(W){var p=true,J=10,j="",H=0,af="",V="",T=false,x={resize:1,click:1},ac=128,E=true,e=1,z="offset",I=z,ae=true,C="",r={},i=32,N=false,ak="[iFrameSizer_SA]",m=ak.length,q="",Y=false,f={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},K="child",t="*",a=W.parent,d=0,l=false,al=null,c=1;function ap(ar,aq,at){if("addEventListener" in W){ar.addEventListener(aq,at,false)}else{if("attachEvent" in W){ar.attachEvent("on"+aq,at)}}}function b(aq){return ak+"["+q+"] "+aq}function o(aq){if(N&&("object"===typeof W.console)){console.log(b(aq))}}function v(aq){}function ag(){o("Initialising iFrame");Q();aa();u("background",j);u("padding",V);aj();U();h();k();ad();r=L();R("init","Init message from host page")}function Q(){var ar=C.substr(m).split(":");function aq(at){return"true"===at?true:false}q=ar[0];H=(undefined!==ar[1])?Number(ar[1]):H;T=(undefined!==ar[2])?aq(ar[2]):T;N=(undefined!==ar[3])?aq(ar[3]):N;i=(undefined!==ar[4])?Number(ar[4]):i;Y=(undefined!==ar[5])?aq(ar[5]):Y;p=(undefined!==ar[6])?aq(ar[6]):p;af=ar[7];I=(undefined!==ar[8])?ar[8]:I;j=ar[9];V=ar[10];d=(undefined!==ar[11])?Number(ar[11]):d;r.enable=(undefined!==ar[12])?aq(ar[12]):false;K=(undefined!==ar[13])?ar[13]:K}function ab(aq,ar){if(-1!==ar.indexOf("-")){v("Negative CSS value ignored for "+aq);ar=""}return ar}function u(aq,ar){if((undefined!==ar)&&(""!==ar)&&("null"!==ar)){document.body.style[aq]=ar;o("Body "+aq+' set to "'+ar+'"')}}function aa(){if(undefined===af){af=H+"px"}ab("margin",af);u("margin",af)}function h(){document.documentElement.style.height="";document.body.style.height="";o('HTML & body height set to "auto"')}function ao(aq){function ar(at){ap(W,at,function(){R(aq.eventName,aq.eventType)})}if(aq.eventNames&&Array.prototype.map){aq.eventName=aq.eventNames[0];aq.eventNames.map(ar)}else{ar(aq.eventName)}o("Added event listener: "+aq.eventType)}function y(){ao({eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]});ao({eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]});ao({eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]});ao({eventType:"Device Orientation Change",eventName:"orientationchange"});ao({eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]});ao({eventType:"Window Clicked",eventName:"click"});if("child"===K){ao({eventType:"IFrame Resized",eventName:"resize"})}}function U(){if(z!==I){if(!(I in O)){v(I+" is not a valid option for heightCalculationMethod.");I="bodyScroll"}o('Height calculation method set to "'+I+'"')}}function ad(){if(true===p){y();g()}else{o("Auto Resize disabled")}}function aj(){var aq=document.createElement("div");aq.style.clear="both";aq.style.display="block";document.body.appendChild(aq)}function L(){function aw(){return{x:(W.pageXOffset!==undefined)?W.pageXOffset:document.documentElement.scrollLeft,y:(W.pageYOffset!==undefined)?W.pageYOffset:document.documentElement.scrollTop}}function au(az){var aB=az.getBoundingClientRect(),aA=aw();return{x:parseInt(aB.left,10)+parseInt(aA.x,10),y:parseInt(aB.top,10)+parseInt(aA.y,10)}}function av(az){var aD=az.split("#")[1]||"";var aA=decodeURIComponent(aD);function aB(aF){var aE=au(aF);o("Moving to in page link (#"+aD+") at x: "+aE.x+" y: "+aE.y);X(aE.y,aE.x,"scrollToOffset")}var aC=document.getElementById(aA)||document.getElementsByName(aA)[0];if(aC){aB(aC)}else{o("In page link (#"+aD+") not found in iFrame, so sending to parent");X(0,0,"inPageLink","#"+aD)}}function ar(){if(""!==location.hash&&"#"!==location.hash){av(location.href)}}function at(){function az(aB){function aA(aC){aC.preventDefault();av(this.getAttribute("href"))}if("#"!==aB.getAttribute("href")){ap(aB,"click",aA)}}Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),az)}function ax(){ap(W,"hashchange",ar)}function ay(){setTimeout(ar,ac)}function aq(){if(Array.prototype.forEach&&document.querySelectorAll){o("Setting up location.hash handlers");at();ax();ay()}else{v("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")}}if(r.enable){aq()}else{o("In page linking not enabled")}return{findTarget:av}}function k(){if(Y){o("Enable public methods");W.parentIFrame={close:function av(){X(0,0,"close")},getId:function at(){return q},moveToAnchor:function aq(aA){r.findTarget(aA)},reset:function au(){F("parentIFrame.reset")},scrollTo:function az(aA,aB){X(aB,aA,"scrollTo")},scrollToOffset:function az(aA,aB){X(aB,aA,"scrollToOffset")},sendMessage:function aw(aB,aA){X(0,0,"message",JSON.stringify(aB),aA)},setHeightCalculationMethod:function ay(aA){I=aA;U()},setTargetOrigin:function ar(aA){o("Set targetOrigin: "+aA);t=aA},size:function ax(aC,aB){var aA=""+(aC?aC:"")+(aB?","+aB:"");w();R("size","parentIFrame.size("+aA+")",aC,aB)}}}}function G(){if(0!==i){o("setInterval: "+i+"ms");setInterval(function(){R("interval","setInterval: "+i)},Math.abs(i))}}function S(ar){function aq(au){if(au.height===undefined||au.width===undefined||0===au.height||0===au.width){o("Attach listerner to "+au.src);ap(au,"load",function at(){R("imageLoad","Image loaded")})}}ar.forEach(function(au){if(au.type==="attributes"&&au.attributeName==="src"){aq(au.target)}else{if(au.type==="childList"){var at=au.target.querySelectorAll("img");Array.prototype.forEach.call(at,function(av){aq(av)})}}})}function g(){var ar=W.MutationObserver||W.WebKitMutationObserver;function aq(){var av=document.querySelector("body"),au={attributes:true,attributeOldValue:false,characterData:true,characterDataOldValue:false,childList:true,subtree:true},at=new ar(function(aw){R("mutationObserver","mutationObserver: "+aw[0].target+" "+aw[0].type);S(aw)});o("Enable MutationObserver");at.observe(av,au)}if(ar){if(0>i){G()}else{aq()}}else{v("MutationObserver not supported in this browser!");G()}}function s(){function aq(av){function at(az){var aw=/^\d+(px)?$/i;if(aw.test(az)){return parseInt(az,J)}var ay=ar.style.left,ax=ar.runtimeStyle.left;ar.runtimeStyle.left=ar.currentStyle.left;ar.style.left=az||0;az=ar.style.pixelLeft;ar.style.left=ay;ar.runtimeStyle.left=ax;return az}var ar=document.body,au=0;if(("defaultView" in document)&&("getComputedStyle" in document.defaultView)){au=document.defaultView.getComputedStyle(ar,null);au=(null!==au)?au[av]:0}else{au=at(ar.currentStyle[av])}return parseInt(au,J)}return document.body.offsetHeight+aq("marginTop")+aq("marginBottom")}function B(){return document.body.scrollHeight}function n(){return document.documentElement.offsetHeight}function A(){return document.documentElement.scrollHeight}function D(){var at=document.querySelectorAll("body *"),ar=at.length,av=0,au=new Date().getTime();for(var aq=0;aq<ar;aq++){if(at[aq].getBoundingClientRect().bottom>av){av=at[aq].getBoundingClientRect().bottom}}au=new Date().getTime()-au;o("Parsed "+ar+" HTML elements");o("LowestElement bottom position calculated in "+au+"ms");return av}function an(){return[s(),B(),n(),A()]}function ai(){return Math.max.apply(null,an())}function M(){return Math.min.apply(null,an())}function Z(){return Math.max(s(),D())}var O={offset:s,bodyOffset:s,bodyScroll:B,documentElementOffset:n,scroll:A,documentElementScroll:A,max:ai,min:M,grow:ai,lowestElement:Z};function am(){return Math.max(document.documentElement.scrollWidth,document.body.scrollWidth)}function R(aB,av,aC,ay){var ar,aq;function ax(){if(!(aB in {reset:1,resetPage:1,init:1})){o("Trigger event: "+av)}}function au(){e=ar;c=aq;X(e,c,aB)}function aA(){return l&&(aB in x)}function aE(){function aF(aH,aG){var aI=Math.abs(aH-aG)<=d;return !aI}ar=(undefined!==aC)?aC:O[I]();aq=(undefined!==ay)?ay:am();return aF(e,ar)||(T&&aF(c,aq))}function at(){return !(aB in {init:1,interval:1,size:1})}function aD(){return(I in f)}function az(){o("No change in size detected")}function aw(){if(at()&&aD()){F(av)}else{if(!(aB in {interval:1})){ax();az()}}}if(!aA()){if(aE()||"init"===aB){ax();w();au()}else{aw()}}else{o("Trigger event cancelled: "+aB)}}function w(){if(!l){l=true;o("Trigger event lock on")}clearTimeout(al);al=setTimeout(function(){l=false;o("Trigger event lock off");o("--")},ac)}function P(aq){e=O[I]();c=am();X(e,c,aq)}function F(ar){var aq=I;I=z;o("Reset trigger event: "+ar);w();P("reset");I=aq}function X(aq,au,aw,ax,at){function ar(){if(undefined===at){at=t}else{o("Message targetOrigin: "+at)}}function av(){var ay=aq+":"+au,az=q+":"+ay+":"+aw+(undefined!==ax?":"+ax:"");o("Sending message to host page ("+az+")");a.postMessage(ak+az,at)}ar();av()}function ah(av){function aq(){return ak===(""+av.data).substr(0,m)}function ax(){C=av.data;a=av.source;ag();E=false;setTimeout(function(){ae=false},ac)}function ar(){if(!ae){o("Page size reset by host page");P("resetPage")}else{o("Page reset ignored by init")}}function ay(){R("resizeParent","Parent window resized")}function au(){return av.data.split("]")[1]}function aw(){return("iFrameResize" in W)}function at(){return av.data.split(":")[2] in {"true":1,"false":1}}if(aq()){if(false===E){switch(au()){case"reset":ar();break;case"resize":ay();break;default:if(!aw()){v("Unexpected message ("+av.data+")")}}}else{if(at()){ax()}else{o('Ignored message of type "'+au()+'". Received before initialization.')}}}}ap(W,"message",ah)})(window||{});