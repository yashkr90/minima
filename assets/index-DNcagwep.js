(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function T_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var yh={exports:{}},$o={},vh={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ss=Symbol.for("react.element"),R_=Symbol.for("react.portal"),P_=Symbol.for("react.fragment"),D_=Symbol.for("react.strict_mode"),b_=Symbol.for("react.profiler"),A_=Symbol.for("react.provider"),O_=Symbol.for("react.context"),M_=Symbol.for("react.forward_ref"),L_=Symbol.for("react.suspense"),F_=Symbol.for("react.memo"),j_=Symbol.for("react.lazy"),sd=Symbol.iterator;function z_(t){return t===null||typeof t!="object"?null:(t=sd&&t[sd]||t["@@iterator"],typeof t=="function"?t:null)}var wh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ch=Object.assign,Eh={};function Qr(t,e,n){this.props=t,this.context=e,this.refs=Eh,this.updater=n||wh}Qr.prototype.isReactComponent={};Qr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Sh(){}Sh.prototype=Qr.prototype;function wu(t,e,n){this.props=t,this.context=e,this.refs=Eh,this.updater=n||wh}var Cu=wu.prototype=new Sh;Cu.constructor=wu;Ch(Cu,Qr.prototype);Cu.isPureReactComponent=!0;var od=Array.isArray,xh=Object.prototype.hasOwnProperty,Eu={current:null},kh={key:!0,ref:!0,__self:!0,__source:!0};function Ih(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)xh.call(e,r)&&!kh.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ss,type:t,key:s,ref:o,props:i,_owner:Eu.current}}function U_(t,e){return{$$typeof:ss,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Su(t){return typeof t=="object"&&t!==null&&t.$$typeof===ss}function B_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ld=/\/+/g;function Sl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?B_(""+t.key):e.toString(36)}function Bs(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ss:case R_:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Sl(o,0):r,od(i)?(n="",t!=null&&(n=t.replace(ld,"$&/")+"/"),Bs(i,e,n,"",function(u){return u})):i!=null&&(Su(i)&&(i=U_(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ld,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",od(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Sl(s,l);o+=Bs(s,e,n,a,i)}else if(a=z_(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Sl(s,l++),o+=Bs(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Es(t,e,n){if(t==null)return t;var r=[],i=0;return Bs(t,r,"","",function(s){return e.call(n,s,i++)}),r}function W_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ue={current:null},Ws={transition:null},$_={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:Ws,ReactCurrentOwner:Eu};function Nh(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:Es,forEach:function(t,e,n){Es(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Es(t,function(){e++}),e},toArray:function(t){return Es(t,function(e){return e})||[]},only:function(t){if(!Su(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};V.Component=Qr;V.Fragment=P_;V.Profiler=b_;V.PureComponent=wu;V.StrictMode=D_;V.Suspense=L_;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$_;V.act=Nh;V.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ch({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Eu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)xh.call(e,a)&&!kh.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ss,type:t.type,key:i,ref:s,props:r,_owner:o}};V.createContext=function(t){return t={$$typeof:O_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:A_,_context:t},t.Consumer=t};V.createElement=Ih;V.createFactory=function(t){var e=Ih.bind(null,t);return e.type=t,e};V.createRef=function(){return{current:null}};V.forwardRef=function(t){return{$$typeof:M_,render:t}};V.isValidElement=Su;V.lazy=function(t){return{$$typeof:j_,_payload:{_status:-1,_result:t},_init:W_}};V.memo=function(t,e){return{$$typeof:F_,type:t,compare:e===void 0?null:e}};V.startTransition=function(t){var e=Ws.transition;Ws.transition={};try{t()}finally{Ws.transition=e}};V.unstable_act=Nh;V.useCallback=function(t,e){return Ue.current.useCallback(t,e)};V.useContext=function(t){return Ue.current.useContext(t)};V.useDebugValue=function(){};V.useDeferredValue=function(t){return Ue.current.useDeferredValue(t)};V.useEffect=function(t,e){return Ue.current.useEffect(t,e)};V.useId=function(){return Ue.current.useId()};V.useImperativeHandle=function(t,e,n){return Ue.current.useImperativeHandle(t,e,n)};V.useInsertionEffect=function(t,e){return Ue.current.useInsertionEffect(t,e)};V.useLayoutEffect=function(t,e){return Ue.current.useLayoutEffect(t,e)};V.useMemo=function(t,e){return Ue.current.useMemo(t,e)};V.useReducer=function(t,e,n){return Ue.current.useReducer(t,e,n)};V.useRef=function(t){return Ue.current.useRef(t)};V.useState=function(t){return Ue.current.useState(t)};V.useSyncExternalStore=function(t,e,n){return Ue.current.useSyncExternalStore(t,e,n)};V.useTransition=function(){return Ue.current.useTransition()};V.version="18.3.1";vh.exports=V;var z=vh.exports;const V_=T_(z);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H_=z,G_=Symbol.for("react.element"),Q_=Symbol.for("react.fragment"),Y_=Object.prototype.hasOwnProperty,K_=H_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,q_={key:!0,ref:!0,__self:!0,__source:!0};function Th(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Y_.call(e,r)&&!q_.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:G_,type:t,key:s,ref:o,props:i,_owner:K_.current}}$o.Fragment=Q_;$o.jsx=Th;$o.jsxs=Th;yh.exports=$o;var h=yh.exports,aa={},Rh={exports:{}},tt={},Ph={exports:{}},Dh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,L){var U=R.length;R.push(L);e:for(;0<U;){var te=U-1>>>1,he=R[te];if(0<i(he,L))R[te]=L,R[U]=he,U=te;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var L=R[0],U=R.pop();if(U!==L){R[0]=U;e:for(var te=0,he=R.length,qt=he>>>1;te<qt;){var St=2*(te+1)-1,ir=R[St],xt=St+1,Xt=R[xt];if(0>i(ir,U))xt<he&&0>i(Xt,ir)?(R[te]=Xt,R[xt]=U,te=xt):(R[te]=ir,R[St]=U,te=St);else if(xt<he&&0>i(Xt,U))R[te]=Xt,R[xt]=U,te=xt;else break e}}return L}function i(R,L){var U=R.sortIndex-L.sortIndex;return U!==0?U:R.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],f=1,c=null,d=3,y=!1,v=!1,E=!1,F=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(R){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=R)r(u),L.sortIndex=L.expirationTime,e(a,L);else break;L=n(u)}}function S(R){if(E=!1,_(R),!v)if(n(a)!==null)v=!0,rr(T);else{var L=n(u);L!==null&&Rn(S,L.startTime-R)}}function T(R,L){v=!1,E&&(E=!1,g(A),A=-1),y=!0;var U=d;try{for(_(L),c=n(a);c!==null&&(!(c.expirationTime>L)||R&&!Fe());){var te=c.callback;if(typeof te=="function"){c.callback=null,d=c.priorityLevel;var he=te(c.expirationTime<=L);L=t.unstable_now(),typeof he=="function"?c.callback=he:c===n(a)&&r(a),_(L)}else r(a);c=n(a)}if(c!==null)var qt=!0;else{var St=n(u);St!==null&&Rn(S,St.startTime-L),qt=!1}return qt}finally{c=null,d=U,y=!1}}var b=!1,D=null,A=-1,X=5,j=-1;function Fe(){return!(t.unstable_now()-j<X)}function Tn(){if(D!==null){var R=t.unstable_now();j=R;var L=!0;try{L=D(!0,R)}finally{L?Et():(b=!1,D=null)}}else b=!1}var Et;if(typeof p=="function")Et=function(){p(Tn)};else if(typeof MessageChannel<"u"){var nr=new MessageChannel,_s=nr.port2;nr.port1.onmessage=Tn,Et=function(){_s.postMessage(null)}}else Et=function(){F(Tn,0)};function rr(R){D=R,b||(b=!0,Et())}function Rn(R,L){A=F(function(){R(t.unstable_now())},L)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){v||y||(v=!0,rr(T))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(R){switch(d){case 1:case 2:case 3:var L=3;break;default:L=d}var U=d;d=L;try{return R()}finally{d=U}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,L){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var U=d;d=R;try{return L()}finally{d=U}},t.unstable_scheduleCallback=function(R,L,U){var te=t.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?te+U:te):U=te,R){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=U+he,R={id:f++,callback:L,priorityLevel:R,startTime:U,expirationTime:he,sortIndex:-1},U>te?(R.sortIndex=U,e(u,R),n(a)===null&&R===n(u)&&(E?(g(A),A=-1):E=!0,Rn(S,U-te))):(R.sortIndex=he,e(a,R),v||y||(v=!0,rr(T))),R},t.unstable_shouldYield=Fe,t.unstable_wrapCallback=function(R){var L=d;return function(){var U=d;d=L;try{return R.apply(this,arguments)}finally{d=U}}}})(Dh);Ph.exports=Dh;var X_=Ph.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J_=z,et=X_;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bh=new Set,Ai={};function Zn(t,e){Lr(t,e),Lr(t+"Capture",e)}function Lr(t,e){for(Ai[t]=e,t=0;t<e.length;t++)bh.add(e[t])}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ua=Object.prototype.hasOwnProperty,Z_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ad={},ud={};function ey(t){return ua.call(ud,t)?!0:ua.call(ad,t)?!1:Z_.test(t)?ud[t]=!0:(ad[t]=!0,!1)}function ty(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ny(t,e,n,r){if(e===null||typeof e>"u"||ty(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Be(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Pe[t]=new Be(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Pe[e]=new Be(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Pe[t]=new Be(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Pe[t]=new Be(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Pe[t]=new Be(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Pe[t]=new Be(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Pe[t]=new Be(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Pe[t]=new Be(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Pe[t]=new Be(t,5,!1,t.toLowerCase(),null,!1,!1)});var xu=/[\-:]([a-z])/g;function ku(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(xu,ku);Pe[e]=new Be(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(xu,ku);Pe[e]=new Be(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(xu,ku);Pe[e]=new Be(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Pe[t]=new Be(t,1,!1,t.toLowerCase(),null,!1,!1)});Pe.xlinkHref=new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Pe[t]=new Be(t,1,!1,t.toLowerCase(),null,!0,!0)});function Iu(t,e,n,r){var i=Pe.hasOwnProperty(e)?Pe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ny(e,n,i,r)&&(n=null),r||i===null?ey(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Yt=J_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ss=Symbol.for("react.element"),fr=Symbol.for("react.portal"),hr=Symbol.for("react.fragment"),Nu=Symbol.for("react.strict_mode"),ca=Symbol.for("react.profiler"),Ah=Symbol.for("react.provider"),Oh=Symbol.for("react.context"),Tu=Symbol.for("react.forward_ref"),da=Symbol.for("react.suspense"),fa=Symbol.for("react.suspense_list"),Ru=Symbol.for("react.memo"),nn=Symbol.for("react.lazy"),Mh=Symbol.for("react.offscreen"),cd=Symbol.iterator;function ni(t){return t===null||typeof t!="object"?null:(t=cd&&t[cd]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Object.assign,xl;function mi(t){if(xl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);xl=e&&e[1]||""}return`
`+xl+t}var kl=!1;function Il(t,e){if(!t||kl)return"";kl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{kl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?mi(t):""}function ry(t){switch(t.tag){case 5:return mi(t.type);case 16:return mi("Lazy");case 13:return mi("Suspense");case 19:return mi("SuspenseList");case 0:case 2:case 15:return t=Il(t.type,!1),t;case 11:return t=Il(t.type.render,!1),t;case 1:return t=Il(t.type,!0),t;default:return""}}function ha(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hr:return"Fragment";case fr:return"Portal";case ca:return"Profiler";case Nu:return"StrictMode";case da:return"Suspense";case fa:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Oh:return(t.displayName||"Context")+".Consumer";case Ah:return(t._context.displayName||"Context")+".Provider";case Tu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ru:return e=t.displayName||null,e!==null?e:ha(t.type)||"Memo";case nn:e=t._payload,t=t._init;try{return ha(t(e))}catch{}}return null}function iy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ha(e);case 8:return e===Nu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Lh(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sy(t){var e=Lh(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function xs(t){t._valueTracker||(t._valueTracker=sy(t))}function Fh(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Lh(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function eo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function pa(t,e){var n=e.checked;return ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function dd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=wn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function jh(t,e){e=e.checked,e!=null&&Iu(t,"checked",e,!1)}function ma(t,e){jh(t,e);var n=wn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ga(t,e.type,n):e.hasOwnProperty("defaultValue")&&ga(t,e.type,wn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function fd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ga(t,e,n){(e!=="number"||eo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var gi=Array.isArray;function Ir(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+wn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function _a(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function hd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(gi(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:wn(n)}}function zh(t,e){var n=wn(e.value),r=wn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function pd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Uh(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ya(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Uh(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ks,Bh=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ks=ks||document.createElement("div"),ks.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ks.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Oi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var vi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oy=["Webkit","ms","Moz","O"];Object.keys(vi).forEach(function(t){oy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),vi[e]=vi[t]})});function Wh(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||vi.hasOwnProperty(t)&&vi[t]?(""+e).trim():e+"px"}function $h(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Wh(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var ly=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function va(t,e){if(e){if(ly[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function wa(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ca=null;function Pu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ea=null,Nr=null,Tr=null;function md(t){if(t=as(t)){if(typeof Ea!="function")throw Error(x(280));var e=t.stateNode;e&&(e=Yo(e),Ea(t.stateNode,t.type,e))}}function Vh(t){Nr?Tr?Tr.push(t):Tr=[t]:Nr=t}function Hh(){if(Nr){var t=Nr,e=Tr;if(Tr=Nr=null,md(t),e)for(t=0;t<e.length;t++)md(e[t])}}function Gh(t,e){return t(e)}function Qh(){}var Nl=!1;function Yh(t,e,n){if(Nl)return t(e,n);Nl=!0;try{return Gh(t,e,n)}finally{Nl=!1,(Nr!==null||Tr!==null)&&(Qh(),Hh())}}function Mi(t,e){var n=t.stateNode;if(n===null)return null;var r=Yo(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var Sa=!1;if(Bt)try{var ri={};Object.defineProperty(ri,"passive",{get:function(){Sa=!0}}),window.addEventListener("test",ri,ri),window.removeEventListener("test",ri,ri)}catch{Sa=!1}function ay(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var wi=!1,to=null,no=!1,xa=null,uy={onError:function(t){wi=!0,to=t}};function cy(t,e,n,r,i,s,o,l,a){wi=!1,to=null,ay.apply(uy,arguments)}function dy(t,e,n,r,i,s,o,l,a){if(cy.apply(this,arguments),wi){if(wi){var u=to;wi=!1,to=null}else throw Error(x(198));no||(no=!0,xa=u)}}function er(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Kh(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function gd(t){if(er(t)!==t)throw Error(x(188))}function fy(t){var e=t.alternate;if(!e){if(e=er(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return gd(i),t;if(s===r)return gd(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function qh(t){return t=fy(t),t!==null?Xh(t):null}function Xh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Xh(t);if(e!==null)return e;t=t.sibling}return null}var Jh=et.unstable_scheduleCallback,_d=et.unstable_cancelCallback,hy=et.unstable_shouldYield,py=et.unstable_requestPaint,me=et.unstable_now,my=et.unstable_getCurrentPriorityLevel,Du=et.unstable_ImmediatePriority,Zh=et.unstable_UserBlockingPriority,ro=et.unstable_NormalPriority,gy=et.unstable_LowPriority,ep=et.unstable_IdlePriority,Vo=null,Rt=null;function _y(t){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Vo,t,void 0,(t.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:wy,yy=Math.log,vy=Math.LN2;function wy(t){return t>>>=0,t===0?32:31-(yy(t)/vy|0)|0}var Is=64,Ns=4194304;function _i(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function io(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=_i(l):(s&=o,s!==0&&(r=_i(s)))}else o=n&~i,o!==0?r=_i(o):s!==0&&(r=_i(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-yt(e),i=1<<n,r|=t[n],e&=~i;return r}function Cy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ey(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-yt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=Cy(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function ka(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function tp(){var t=Is;return Is<<=1,!(Is&4194240)&&(Is=64),t}function Tl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function os(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-yt(e),t[e]=n}function Sy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-yt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function bu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-yt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var K=0;function np(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var rp,Au,ip,sp,op,Ia=!1,Ts=[],un=null,cn=null,dn=null,Li=new Map,Fi=new Map,sn=[],xy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yd(t,e){switch(t){case"focusin":case"focusout":un=null;break;case"dragenter":case"dragleave":cn=null;break;case"mouseover":case"mouseout":dn=null;break;case"pointerover":case"pointerout":Li.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fi.delete(e.pointerId)}}function ii(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=as(e),e!==null&&Au(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ky(t,e,n,r,i){switch(e){case"focusin":return un=ii(un,t,e,n,r,i),!0;case"dragenter":return cn=ii(cn,t,e,n,r,i),!0;case"mouseover":return dn=ii(dn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Li.set(s,ii(Li.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Fi.set(s,ii(Fi.get(s)||null,t,e,n,r,i)),!0}return!1}function lp(t){var e=Fn(t.target);if(e!==null){var n=er(e);if(n!==null){if(e=n.tag,e===13){if(e=Kh(n),e!==null){t.blockedOn=e,op(t.priority,function(){ip(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $s(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Na(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ca=r,n.target.dispatchEvent(r),Ca=null}else return e=as(n),e!==null&&Au(e),t.blockedOn=n,!1;e.shift()}return!0}function vd(t,e,n){$s(t)&&n.delete(e)}function Iy(){Ia=!1,un!==null&&$s(un)&&(un=null),cn!==null&&$s(cn)&&(cn=null),dn!==null&&$s(dn)&&(dn=null),Li.forEach(vd),Fi.forEach(vd)}function si(t,e){t.blockedOn===e&&(t.blockedOn=null,Ia||(Ia=!0,et.unstable_scheduleCallback(et.unstable_NormalPriority,Iy)))}function ji(t){function e(i){return si(i,t)}if(0<Ts.length){si(Ts[0],t);for(var n=1;n<Ts.length;n++){var r=Ts[n];r.blockedOn===t&&(r.blockedOn=null)}}for(un!==null&&si(un,t),cn!==null&&si(cn,t),dn!==null&&si(dn,t),Li.forEach(e),Fi.forEach(e),n=0;n<sn.length;n++)r=sn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<sn.length&&(n=sn[0],n.blockedOn===null);)lp(n),n.blockedOn===null&&sn.shift()}var Rr=Yt.ReactCurrentBatchConfig,so=!0;function Ny(t,e,n,r){var i=K,s=Rr.transition;Rr.transition=null;try{K=1,Ou(t,e,n,r)}finally{K=i,Rr.transition=s}}function Ty(t,e,n,r){var i=K,s=Rr.transition;Rr.transition=null;try{K=4,Ou(t,e,n,r)}finally{K=i,Rr.transition=s}}function Ou(t,e,n,r){if(so){var i=Na(t,e,n,r);if(i===null)jl(t,e,r,oo,n),yd(t,r);else if(ky(i,t,e,n,r))r.stopPropagation();else if(yd(t,r),e&4&&-1<xy.indexOf(t)){for(;i!==null;){var s=as(i);if(s!==null&&rp(s),s=Na(t,e,n,r),s===null&&jl(t,e,r,oo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else jl(t,e,r,null,n)}}var oo=null;function Na(t,e,n,r){if(oo=null,t=Pu(r),t=Fn(t),t!==null)if(e=er(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Kh(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return oo=t,null}function ap(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(my()){case Du:return 1;case Zh:return 4;case ro:case gy:return 16;case ep:return 536870912;default:return 16}default:return 16}}var ln=null,Mu=null,Vs=null;function up(){if(Vs)return Vs;var t,e=Mu,n=e.length,r,i="value"in ln?ln.value:ln.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Vs=i.slice(t,1<r?1-r:void 0)}function Hs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Rs(){return!0}function wd(){return!1}function nt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Rs:wd,this.isPropagationStopped=wd,this}return ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Rs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Rs)},persist:function(){},isPersistent:Rs}),e}var Yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lu=nt(Yr),ls=ce({},Yr,{view:0,detail:0}),Ry=nt(ls),Rl,Pl,oi,Ho=ce({},ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oi&&(oi&&t.type==="mousemove"?(Rl=t.screenX-oi.screenX,Pl=t.screenY-oi.screenY):Pl=Rl=0,oi=t),Rl)},movementY:function(t){return"movementY"in t?t.movementY:Pl}}),Cd=nt(Ho),Py=ce({},Ho,{dataTransfer:0}),Dy=nt(Py),by=ce({},ls,{relatedTarget:0}),Dl=nt(by),Ay=ce({},Yr,{animationName:0,elapsedTime:0,pseudoElement:0}),Oy=nt(Ay),My=ce({},Yr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ly=nt(My),Fy=ce({},Yr,{data:0}),Ed=nt(Fy),jy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function By(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Uy[t])?!!e[t]:!1}function Fu(){return By}var Wy=ce({},ls,{key:function(t){if(t.key){var e=jy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Hs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fu,charCode:function(t){return t.type==="keypress"?Hs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$y=nt(Wy),Vy=ce({},Ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sd=nt(Vy),Hy=ce({},ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fu}),Gy=nt(Hy),Qy=ce({},Yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yy=nt(Qy),Ky=ce({},Ho,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qy=nt(Ky),Xy=[9,13,27,32],ju=Bt&&"CompositionEvent"in window,Ci=null;Bt&&"documentMode"in document&&(Ci=document.documentMode);var Jy=Bt&&"TextEvent"in window&&!Ci,cp=Bt&&(!ju||Ci&&8<Ci&&11>=Ci),xd=" ",kd=!1;function dp(t,e){switch(t){case"keyup":return Xy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var pr=!1;function Zy(t,e){switch(t){case"compositionend":return fp(e);case"keypress":return e.which!==32?null:(kd=!0,xd);case"textInput":return t=e.data,t===xd&&kd?null:t;default:return null}}function ev(t,e){if(pr)return t==="compositionend"||!ju&&dp(t,e)?(t=up(),Vs=Mu=ln=null,pr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return cp&&e.locale!=="ko"?null:e.data;default:return null}}var tv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Id(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!tv[t.type]:e==="textarea"}function hp(t,e,n,r){Vh(r),e=lo(e,"onChange"),0<e.length&&(n=new Lu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ei=null,zi=null;function nv(t){xp(t,0)}function Go(t){var e=_r(t);if(Fh(e))return t}function rv(t,e){if(t==="change")return e}var pp=!1;if(Bt){var bl;if(Bt){var Al="oninput"in document;if(!Al){var Nd=document.createElement("div");Nd.setAttribute("oninput","return;"),Al=typeof Nd.oninput=="function"}bl=Al}else bl=!1;pp=bl&&(!document.documentMode||9<document.documentMode)}function Td(){Ei&&(Ei.detachEvent("onpropertychange",mp),zi=Ei=null)}function mp(t){if(t.propertyName==="value"&&Go(zi)){var e=[];hp(e,zi,t,Pu(t)),Yh(nv,e)}}function iv(t,e,n){t==="focusin"?(Td(),Ei=e,zi=n,Ei.attachEvent("onpropertychange",mp)):t==="focusout"&&Td()}function sv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Go(zi)}function ov(t,e){if(t==="click")return Go(e)}function lv(t,e){if(t==="input"||t==="change")return Go(e)}function av(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ct=typeof Object.is=="function"?Object.is:av;function Ui(t,e){if(Ct(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ua.call(e,i)||!Ct(t[i],e[i]))return!1}return!0}function Rd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pd(t,e){var n=Rd(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rd(n)}}function gp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?gp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function _p(){for(var t=window,e=eo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=eo(t.document)}return e}function zu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function uv(t){var e=_p(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&gp(n.ownerDocument.documentElement,n)){if(r!==null&&zu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Pd(n,s);var o=Pd(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var cv=Bt&&"documentMode"in document&&11>=document.documentMode,mr=null,Ta=null,Si=null,Ra=!1;function Dd(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ra||mr==null||mr!==eo(r)||(r=mr,"selectionStart"in r&&zu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Si&&Ui(Si,r)||(Si=r,r=lo(Ta,"onSelect"),0<r.length&&(e=new Lu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=mr)))}function Ps(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var gr={animationend:Ps("Animation","AnimationEnd"),animationiteration:Ps("Animation","AnimationIteration"),animationstart:Ps("Animation","AnimationStart"),transitionend:Ps("Transition","TransitionEnd")},Ol={},yp={};Bt&&(yp=document.createElement("div").style,"AnimationEvent"in window||(delete gr.animationend.animation,delete gr.animationiteration.animation,delete gr.animationstart.animation),"TransitionEvent"in window||delete gr.transitionend.transition);function Qo(t){if(Ol[t])return Ol[t];if(!gr[t])return t;var e=gr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in yp)return Ol[t]=e[n];return t}var vp=Qo("animationend"),wp=Qo("animationiteration"),Cp=Qo("animationstart"),Ep=Qo("transitionend"),Sp=new Map,bd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xn(t,e){Sp.set(t,e),Zn(e,[t])}for(var Ml=0;Ml<bd.length;Ml++){var Ll=bd[Ml],dv=Ll.toLowerCase(),fv=Ll[0].toUpperCase()+Ll.slice(1);xn(dv,"on"+fv)}xn(vp,"onAnimationEnd");xn(wp,"onAnimationIteration");xn(Cp,"onAnimationStart");xn("dblclick","onDoubleClick");xn("focusin","onFocus");xn("focusout","onBlur");xn(Ep,"onTransitionEnd");Lr("onMouseEnter",["mouseout","mouseover"]);Lr("onMouseLeave",["mouseout","mouseover"]);Lr("onPointerEnter",["pointerout","pointerover"]);Lr("onPointerLeave",["pointerout","pointerover"]);Zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hv=new Set("cancel close invalid load scroll toggle".split(" ").concat(yi));function Ad(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,dy(r,e,void 0,t),t.currentTarget=null}function xp(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Ad(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Ad(i,l,u),s=a}}}if(no)throw t=xa,no=!1,xa=null,t}function re(t,e){var n=e[Oa];n===void 0&&(n=e[Oa]=new Set);var r=t+"__bubble";n.has(r)||(kp(e,t,2,!1),n.add(r))}function Fl(t,e,n){var r=0;e&&(r|=4),kp(n,t,r,e)}var Ds="_reactListening"+Math.random().toString(36).slice(2);function Bi(t){if(!t[Ds]){t[Ds]=!0,bh.forEach(function(n){n!=="selectionchange"&&(hv.has(n)||Fl(n,!1,t),Fl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ds]||(e[Ds]=!0,Fl("selectionchange",!1,e))}}function kp(t,e,n,r){switch(ap(e)){case 1:var i=Ny;break;case 4:i=Ty;break;default:i=Ou}n=i.bind(null,e,n,t),i=void 0,!Sa||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function jl(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Fn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Yh(function(){var u=s,f=Pu(n),c=[];e:{var d=Sp.get(t);if(d!==void 0){var y=Lu,v=t;switch(t){case"keypress":if(Hs(n)===0)break e;case"keydown":case"keyup":y=$y;break;case"focusin":v="focus",y=Dl;break;case"focusout":v="blur",y=Dl;break;case"beforeblur":case"afterblur":y=Dl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Cd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Dy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Gy;break;case vp:case wp:case Cp:y=Oy;break;case Ep:y=Yy;break;case"scroll":y=Ry;break;case"wheel":y=qy;break;case"copy":case"cut":case"paste":y=Ly;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Sd}var E=(e&4)!==0,F=!E&&t==="scroll",g=E?d!==null?d+"Capture":null:d;E=[];for(var p=u,_;p!==null;){_=p;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,g!==null&&(S=Mi(p,g),S!=null&&E.push(Wi(p,S,_)))),F)break;p=p.return}0<E.length&&(d=new y(d,v,null,n,f),c.push({event:d,listeners:E}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",d&&n!==Ca&&(v=n.relatedTarget||n.fromElement)&&(Fn(v)||v[Wt]))break e;if((y||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?Fn(v):null,v!==null&&(F=er(v),v!==F||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(E=Cd,S="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(E=Sd,S="onPointerLeave",g="onPointerEnter",p="pointer"),F=y==null?d:_r(y),_=v==null?d:_r(v),d=new E(S,p+"leave",y,n,f),d.target=F,d.relatedTarget=_,S=null,Fn(f)===u&&(E=new E(g,p+"enter",v,n,f),E.target=_,E.relatedTarget=F,S=E),F=S,y&&v)t:{for(E=y,g=v,p=0,_=E;_;_=cr(_))p++;for(_=0,S=g;S;S=cr(S))_++;for(;0<p-_;)E=cr(E),p--;for(;0<_-p;)g=cr(g),_--;for(;p--;){if(E===g||g!==null&&E===g.alternate)break t;E=cr(E),g=cr(g)}E=null}else E=null;y!==null&&Od(c,d,y,E,!1),v!==null&&F!==null&&Od(c,F,v,E,!0)}}e:{if(d=u?_r(u):window,y=d.nodeName&&d.nodeName.toLowerCase(),y==="select"||y==="input"&&d.type==="file")var T=rv;else if(Id(d))if(pp)T=lv;else{T=sv;var b=iv}else(y=d.nodeName)&&y.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=ov);if(T&&(T=T(t,u))){hp(c,T,n,f);break e}b&&b(t,d,u),t==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&ga(d,"number",d.value)}switch(b=u?_r(u):window,t){case"focusin":(Id(b)||b.contentEditable==="true")&&(mr=b,Ta=u,Si=null);break;case"focusout":Si=Ta=mr=null;break;case"mousedown":Ra=!0;break;case"contextmenu":case"mouseup":case"dragend":Ra=!1,Dd(c,n,f);break;case"selectionchange":if(cv)break;case"keydown":case"keyup":Dd(c,n,f)}var D;if(ju)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else pr?dp(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(cp&&n.locale!=="ko"&&(pr||A!=="onCompositionStart"?A==="onCompositionEnd"&&pr&&(D=up()):(ln=f,Mu="value"in ln?ln.value:ln.textContent,pr=!0)),b=lo(u,A),0<b.length&&(A=new Ed(A,t,null,n,f),c.push({event:A,listeners:b}),D?A.data=D:(D=fp(n),D!==null&&(A.data=D)))),(D=Jy?Zy(t,n):ev(t,n))&&(u=lo(u,"onBeforeInput"),0<u.length&&(f=new Ed("onBeforeInput","beforeinput",null,n,f),c.push({event:f,listeners:u}),f.data=D))}xp(c,e)})}function Wi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function lo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Mi(t,n),s!=null&&r.unshift(Wi(t,s,i)),s=Mi(t,e),s!=null&&r.push(Wi(t,s,i))),t=t.return}return r}function cr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Od(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Mi(n,s),a!=null&&o.unshift(Wi(n,a,l))):i||(a=Mi(n,s),a!=null&&o.push(Wi(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var pv=/\r\n?/g,mv=/\u0000|\uFFFD/g;function Md(t){return(typeof t=="string"?t:""+t).replace(pv,`
`).replace(mv,"")}function bs(t,e,n){if(e=Md(e),Md(t)!==e&&n)throw Error(x(425))}function ao(){}var Pa=null,Da=null;function ba(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Aa=typeof setTimeout=="function"?setTimeout:void 0,gv=typeof clearTimeout=="function"?clearTimeout:void 0,Ld=typeof Promise=="function"?Promise:void 0,_v=typeof queueMicrotask=="function"?queueMicrotask:typeof Ld<"u"?function(t){return Ld.resolve(null).then(t).catch(yv)}:Aa;function yv(t){setTimeout(function(){throw t})}function zl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ji(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ji(e)}function fn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Kr=Math.random().toString(36).slice(2),Tt="__reactFiber$"+Kr,$i="__reactProps$"+Kr,Wt="__reactContainer$"+Kr,Oa="__reactEvents$"+Kr,vv="__reactListeners$"+Kr,wv="__reactHandles$"+Kr;function Fn(t){var e=t[Tt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wt]||n[Tt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fd(t);t!==null;){if(n=t[Tt])return n;t=Fd(t)}return e}t=n,n=t.parentNode}return null}function as(t){return t=t[Tt]||t[Wt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _r(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function Yo(t){return t[$i]||null}var Ma=[],yr=-1;function kn(t){return{current:t}}function se(t){0>yr||(t.current=Ma[yr],Ma[yr]=null,yr--)}function ee(t,e){yr++,Ma[yr]=t.current,t.current=e}var Cn={},Le=kn(Cn),Ge=kn(!1),Vn=Cn;function Fr(t,e){var n=t.type.contextTypes;if(!n)return Cn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Qe(t){return t=t.childContextTypes,t!=null}function uo(){se(Ge),se(Le)}function jd(t,e,n){if(Le.current!==Cn)throw Error(x(168));ee(Le,e),ee(Ge,n)}function Ip(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,iy(t)||"Unknown",i));return ce({},n,r)}function co(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Cn,Vn=Le.current,ee(Le,t),ee(Ge,Ge.current),!0}function zd(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=Ip(t,e,Vn),r.__reactInternalMemoizedMergedChildContext=t,se(Ge),se(Le),ee(Le,t)):se(Ge),ee(Ge,n)}var Mt=null,Ko=!1,Ul=!1;function Np(t){Mt===null?Mt=[t]:Mt.push(t)}function Cv(t){Ko=!0,Np(t)}function In(){if(!Ul&&Mt!==null){Ul=!0;var t=0,e=K;try{var n=Mt;for(K=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Mt=null,Ko=!1}catch(i){throw Mt!==null&&(Mt=Mt.slice(t+1)),Jh(Du,In),i}finally{K=e,Ul=!1}}return null}var vr=[],wr=0,fo=null,ho=0,it=[],st=0,Hn=null,Lt=1,Ft="";function An(t,e){vr[wr++]=ho,vr[wr++]=fo,fo=t,ho=e}function Tp(t,e,n){it[st++]=Lt,it[st++]=Ft,it[st++]=Hn,Hn=t;var r=Lt;t=Ft;var i=32-yt(r)-1;r&=~(1<<i),n+=1;var s=32-yt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Lt=1<<32-yt(e)+i|n<<i|r,Ft=s+t}else Lt=1<<s|n<<i|r,Ft=t}function Uu(t){t.return!==null&&(An(t,1),Tp(t,1,0))}function Bu(t){for(;t===fo;)fo=vr[--wr],vr[wr]=null,ho=vr[--wr],vr[wr]=null;for(;t===Hn;)Hn=it[--st],it[st]=null,Ft=it[--st],it[st]=null,Lt=it[--st],it[st]=null}var Ze=null,Je=null,oe=!1,pt=null;function Rp(t,e){var n=ot(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ud(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ze=t,Je=fn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ze=t,Je=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hn!==null?{id:Lt,overflow:Ft}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ot(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ze=t,Je=null,!0):!1;default:return!1}}function La(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Fa(t){if(oe){var e=Je;if(e){var n=e;if(!Ud(t,e)){if(La(t))throw Error(x(418));e=fn(n.nextSibling);var r=Ze;e&&Ud(t,e)?Rp(r,n):(t.flags=t.flags&-4097|2,oe=!1,Ze=t)}}else{if(La(t))throw Error(x(418));t.flags=t.flags&-4097|2,oe=!1,Ze=t}}}function Bd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ze=t}function As(t){if(t!==Ze)return!1;if(!oe)return Bd(t),oe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ba(t.type,t.memoizedProps)),e&&(e=Je)){if(La(t))throw Pp(),Error(x(418));for(;e;)Rp(t,e),e=fn(e.nextSibling)}if(Bd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Je=fn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Je=null}}else Je=Ze?fn(t.stateNode.nextSibling):null;return!0}function Pp(){for(var t=Je;t;)t=fn(t.nextSibling)}function jr(){Je=Ze=null,oe=!1}function Wu(t){pt===null?pt=[t]:pt.push(t)}var Ev=Yt.ReactCurrentBatchConfig;function li(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function Os(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Wd(t){var e=t._init;return e(t._payload)}function Dp(t){function e(g,p){if(t){var _=g.deletions;_===null?(g.deletions=[p],g.flags|=16):_.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=gn(g,p),g.index=0,g.sibling=null,g}function s(g,p,_){return g.index=_,t?(_=g.alternate,_!==null?(_=_.index,_<p?(g.flags|=2,p):_):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function l(g,p,_,S){return p===null||p.tag!==6?(p=Ql(_,g.mode,S),p.return=g,p):(p=i(p,_),p.return=g,p)}function a(g,p,_,S){var T=_.type;return T===hr?f(g,p,_.props.children,S,_.key):p!==null&&(p.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===nn&&Wd(T)===p.type)?(S=i(p,_.props),S.ref=li(g,p,_),S.return=g,S):(S=Js(_.type,_.key,_.props,null,g.mode,S),S.ref=li(g,p,_),S.return=g,S)}function u(g,p,_,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==_.containerInfo||p.stateNode.implementation!==_.implementation?(p=Yl(_,g.mode,S),p.return=g,p):(p=i(p,_.children||[]),p.return=g,p)}function f(g,p,_,S,T){return p===null||p.tag!==7?(p=$n(_,g.mode,S,T),p.return=g,p):(p=i(p,_),p.return=g,p)}function c(g,p,_){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ql(""+p,g.mode,_),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ss:return _=Js(p.type,p.key,p.props,null,g.mode,_),_.ref=li(g,null,p),_.return=g,_;case fr:return p=Yl(p,g.mode,_),p.return=g,p;case nn:var S=p._init;return c(g,S(p._payload),_)}if(gi(p)||ni(p))return p=$n(p,g.mode,_,null),p.return=g,p;Os(g,p)}return null}function d(g,p,_,S){var T=p!==null?p.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return T!==null?null:l(g,p,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ss:return _.key===T?a(g,p,_,S):null;case fr:return _.key===T?u(g,p,_,S):null;case nn:return T=_._init,d(g,p,T(_._payload),S)}if(gi(_)||ni(_))return T!==null?null:f(g,p,_,S,null);Os(g,_)}return null}function y(g,p,_,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(_)||null,l(p,g,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ss:return g=g.get(S.key===null?_:S.key)||null,a(p,g,S,T);case fr:return g=g.get(S.key===null?_:S.key)||null,u(p,g,S,T);case nn:var b=S._init;return y(g,p,_,b(S._payload),T)}if(gi(S)||ni(S))return g=g.get(_)||null,f(p,g,S,T,null);Os(p,S)}return null}function v(g,p,_,S){for(var T=null,b=null,D=p,A=p=0,X=null;D!==null&&A<_.length;A++){D.index>A?(X=D,D=null):X=D.sibling;var j=d(g,D,_[A],S);if(j===null){D===null&&(D=X);break}t&&D&&j.alternate===null&&e(g,D),p=s(j,p,A),b===null?T=j:b.sibling=j,b=j,D=X}if(A===_.length)return n(g,D),oe&&An(g,A),T;if(D===null){for(;A<_.length;A++)D=c(g,_[A],S),D!==null&&(p=s(D,p,A),b===null?T=D:b.sibling=D,b=D);return oe&&An(g,A),T}for(D=r(g,D);A<_.length;A++)X=y(D,g,A,_[A],S),X!==null&&(t&&X.alternate!==null&&D.delete(X.key===null?A:X.key),p=s(X,p,A),b===null?T=X:b.sibling=X,b=X);return t&&D.forEach(function(Fe){return e(g,Fe)}),oe&&An(g,A),T}function E(g,p,_,S){var T=ni(_);if(typeof T!="function")throw Error(x(150));if(_=T.call(_),_==null)throw Error(x(151));for(var b=T=null,D=p,A=p=0,X=null,j=_.next();D!==null&&!j.done;A++,j=_.next()){D.index>A?(X=D,D=null):X=D.sibling;var Fe=d(g,D,j.value,S);if(Fe===null){D===null&&(D=X);break}t&&D&&Fe.alternate===null&&e(g,D),p=s(Fe,p,A),b===null?T=Fe:b.sibling=Fe,b=Fe,D=X}if(j.done)return n(g,D),oe&&An(g,A),T;if(D===null){for(;!j.done;A++,j=_.next())j=c(g,j.value,S),j!==null&&(p=s(j,p,A),b===null?T=j:b.sibling=j,b=j);return oe&&An(g,A),T}for(D=r(g,D);!j.done;A++,j=_.next())j=y(D,g,A,j.value,S),j!==null&&(t&&j.alternate!==null&&D.delete(j.key===null?A:j.key),p=s(j,p,A),b===null?T=j:b.sibling=j,b=j);return t&&D.forEach(function(Tn){return e(g,Tn)}),oe&&An(g,A),T}function F(g,p,_,S){if(typeof _=="object"&&_!==null&&_.type===hr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Ss:e:{for(var T=_.key,b=p;b!==null;){if(b.key===T){if(T=_.type,T===hr){if(b.tag===7){n(g,b.sibling),p=i(b,_.props.children),p.return=g,g=p;break e}}else if(b.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===nn&&Wd(T)===b.type){n(g,b.sibling),p=i(b,_.props),p.ref=li(g,b,_),p.return=g,g=p;break e}n(g,b);break}else e(g,b);b=b.sibling}_.type===hr?(p=$n(_.props.children,g.mode,S,_.key),p.return=g,g=p):(S=Js(_.type,_.key,_.props,null,g.mode,S),S.ref=li(g,p,_),S.return=g,g=S)}return o(g);case fr:e:{for(b=_.key;p!==null;){if(p.key===b)if(p.tag===4&&p.stateNode.containerInfo===_.containerInfo&&p.stateNode.implementation===_.implementation){n(g,p.sibling),p=i(p,_.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=Yl(_,g.mode,S),p.return=g,g=p}return o(g);case nn:return b=_._init,F(g,p,b(_._payload),S)}if(gi(_))return v(g,p,_,S);if(ni(_))return E(g,p,_,S);Os(g,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,_),p.return=g,g=p):(n(g,p),p=Ql(_,g.mode,S),p.return=g,g=p),o(g)):n(g,p)}return F}var zr=Dp(!0),bp=Dp(!1),po=kn(null),mo=null,Cr=null,$u=null;function Vu(){$u=Cr=mo=null}function Hu(t){var e=po.current;se(po),t._currentValue=e}function ja(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Pr(t,e){mo=t,$u=Cr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&($e=!0),t.firstContext=null)}function at(t){var e=t._currentValue;if($u!==t)if(t={context:t,memoizedValue:e,next:null},Cr===null){if(mo===null)throw Error(x(308));Cr=t,mo.dependencies={lanes:0,firstContext:t}}else Cr=Cr.next=t;return e}var jn=null;function Gu(t){jn===null?jn=[t]:jn.push(t)}function Ap(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Gu(e)):(n.next=i.next,i.next=n),e.interleaved=n,$t(t,r)}function $t(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var rn=!1;function Qu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Op(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function hn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,$t(t,n)}return i=r.interleaved,i===null?(e.next=e,Gu(r)):(e.next=i.next,i.next=e),r.interleaved=e,$t(t,n)}function Gs(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bu(t,n)}}function $d(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function go(t,e,n,r){var i=t.updateQueue;rn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,f=u=a=null,l=s;do{var d=l.lane,y=l.eventTime;if((r&d)===d){f!==null&&(f=f.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,E=l;switch(d=e,y=n,E.tag){case 1:if(v=E.payload,typeof v=="function"){c=v.call(y,c,d);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=E.payload,d=typeof v=="function"?v.call(y,c,d):v,d==null)break e;c=ce({},c,d);break e;case 2:rn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[l]:d.push(l))}else y={eventTime:y,lane:d,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=y,a=c):f=f.next=y,o|=d;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;d=l,l=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(f===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Qn|=o,t.lanes=o,t.memoizedState=c}}function Vd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var us={},Pt=kn(us),Vi=kn(us),Hi=kn(us);function zn(t){if(t===us)throw Error(x(174));return t}function Yu(t,e){switch(ee(Hi,e),ee(Vi,t),ee(Pt,us),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ya(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ya(e,t)}se(Pt),ee(Pt,e)}function Ur(){se(Pt),se(Vi),se(Hi)}function Mp(t){zn(Hi.current);var e=zn(Pt.current),n=ya(e,t.type);e!==n&&(ee(Vi,t),ee(Pt,n))}function Ku(t){Vi.current===t&&(se(Pt),se(Vi))}var ae=kn(0);function _o(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bl=[];function qu(){for(var t=0;t<Bl.length;t++)Bl[t]._workInProgressVersionPrimary=null;Bl.length=0}var Qs=Yt.ReactCurrentDispatcher,Wl=Yt.ReactCurrentBatchConfig,Gn=0,ue=null,ye=null,Ee=null,yo=!1,xi=!1,Gi=0,Sv=0;function be(){throw Error(x(321))}function Xu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ct(t[n],e[n]))return!1;return!0}function Ju(t,e,n,r,i,s){if(Gn=s,ue=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Qs.current=t===null||t.memoizedState===null?Nv:Tv,t=n(r,i),xi){s=0;do{if(xi=!1,Gi=0,25<=s)throw Error(x(301));s+=1,Ee=ye=null,e.updateQueue=null,Qs.current=Rv,t=n(r,i)}while(xi)}if(Qs.current=vo,e=ye!==null&&ye.next!==null,Gn=0,Ee=ye=ue=null,yo=!1,e)throw Error(x(300));return t}function Zu(){var t=Gi!==0;return Gi=0,t}function Nt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?ue.memoizedState=Ee=t:Ee=Ee.next=t,Ee}function ut(){if(ye===null){var t=ue.alternate;t=t!==null?t.memoizedState:null}else t=ye.next;var e=Ee===null?ue.memoizedState:Ee.next;if(e!==null)Ee=e,ye=t;else{if(t===null)throw Error(x(310));ye=t,t={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},Ee===null?ue.memoizedState=Ee=t:Ee=Ee.next=t}return Ee}function Qi(t,e){return typeof e=="function"?e(t):e}function $l(t){var e=ut(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=ye,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var f=u.lane;if((Gn&f)===f)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,ue.lanes|=f,Qn|=f}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,Ct(r,e.memoizedState)||($e=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ue.lanes|=s,Qn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Vl(t){var e=ut(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ct(s,e.memoizedState)||($e=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Lp(){}function Fp(t,e){var n=ue,r=ut(),i=e(),s=!Ct(r.memoizedState,i);if(s&&(r.memoizedState=i,$e=!0),r=r.queue,ec(Up.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,Yi(9,zp.bind(null,n,r,i,e),void 0,null),ke===null)throw Error(x(349));Gn&30||jp(n,e,i)}return i}function jp(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ue.updateQueue,e===null?(e={lastEffect:null,stores:null},ue.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function zp(t,e,n,r){e.value=n,e.getSnapshot=r,Bp(e)&&Wp(t)}function Up(t,e,n){return n(function(){Bp(e)&&Wp(t)})}function Bp(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ct(t,n)}catch{return!0}}function Wp(t){var e=$t(t,1);e!==null&&vt(e,t,1,-1)}function Hd(t){var e=Nt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:t},e.queue=t,t=t.dispatch=Iv.bind(null,ue,t),[e.memoizedState,t]}function Yi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ue.updateQueue,e===null?(e={lastEffect:null,stores:null},ue.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function $p(){return ut().memoizedState}function Ys(t,e,n,r){var i=Nt();ue.flags|=t,i.memoizedState=Yi(1|e,n,void 0,r===void 0?null:r)}function qo(t,e,n,r){var i=ut();r=r===void 0?null:r;var s=void 0;if(ye!==null){var o=ye.memoizedState;if(s=o.destroy,r!==null&&Xu(r,o.deps)){i.memoizedState=Yi(e,n,s,r);return}}ue.flags|=t,i.memoizedState=Yi(1|e,n,s,r)}function Gd(t,e){return Ys(8390656,8,t,e)}function ec(t,e){return qo(2048,8,t,e)}function Vp(t,e){return qo(4,2,t,e)}function Hp(t,e){return qo(4,4,t,e)}function Gp(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Qp(t,e,n){return n=n!=null?n.concat([t]):null,qo(4,4,Gp.bind(null,e,t),n)}function tc(){}function Yp(t,e){var n=ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Xu(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Kp(t,e){var n=ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Xu(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function qp(t,e,n){return Gn&21?(Ct(n,e)||(n=tp(),ue.lanes|=n,Qn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,$e=!0),t.memoizedState=n)}function xv(t,e){var n=K;K=n!==0&&4>n?n:4,t(!0);var r=Wl.transition;Wl.transition={};try{t(!1),e()}finally{K=n,Wl.transition=r}}function Xp(){return ut().memoizedState}function kv(t,e,n){var r=mn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Jp(t))Zp(e,n);else if(n=Ap(t,e,n,r),n!==null){var i=ze();vt(n,t,r,i),em(n,e,r)}}function Iv(t,e,n){var r=mn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jp(t))Zp(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ct(l,o)){var a=e.interleaved;a===null?(i.next=i,Gu(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Ap(t,e,i,r),n!==null&&(i=ze(),vt(n,t,r,i),em(n,e,r))}}function Jp(t){var e=t.alternate;return t===ue||e!==null&&e===ue}function Zp(t,e){xi=yo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function em(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bu(t,n)}}var vo={readContext:at,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},Nv={readContext:at,useCallback:function(t,e){return Nt().memoizedState=[t,e===void 0?null:e],t},useContext:at,useEffect:Gd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ys(4194308,4,Gp.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ys(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ys(4,2,t,e)},useMemo:function(t,e){var n=Nt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Nt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=kv.bind(null,ue,t),[r.memoizedState,t]},useRef:function(t){var e=Nt();return t={current:t},e.memoizedState=t},useState:Hd,useDebugValue:tc,useDeferredValue:function(t){return Nt().memoizedState=t},useTransition:function(){var t=Hd(!1),e=t[0];return t=xv.bind(null,t[1]),Nt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ue,i=Nt();if(oe){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),ke===null)throw Error(x(349));Gn&30||jp(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Gd(Up.bind(null,r,s,t),[t]),r.flags|=2048,Yi(9,zp.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Nt(),e=ke.identifierPrefix;if(oe){var n=Ft,r=Lt;n=(r&~(1<<32-yt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Gi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Sv++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Tv={readContext:at,useCallback:Yp,useContext:at,useEffect:ec,useImperativeHandle:Qp,useInsertionEffect:Vp,useLayoutEffect:Hp,useMemo:Kp,useReducer:$l,useRef:$p,useState:function(){return $l(Qi)},useDebugValue:tc,useDeferredValue:function(t){var e=ut();return qp(e,ye.memoizedState,t)},useTransition:function(){var t=$l(Qi)[0],e=ut().memoizedState;return[t,e]},useMutableSource:Lp,useSyncExternalStore:Fp,useId:Xp,unstable_isNewReconciler:!1},Rv={readContext:at,useCallback:Yp,useContext:at,useEffect:ec,useImperativeHandle:Qp,useInsertionEffect:Vp,useLayoutEffect:Hp,useMemo:Kp,useReducer:Vl,useRef:$p,useState:function(){return Vl(Qi)},useDebugValue:tc,useDeferredValue:function(t){var e=ut();return ye===null?e.memoizedState=t:qp(e,ye.memoizedState,t)},useTransition:function(){var t=Vl(Qi)[0],e=ut().memoizedState;return[t,e]},useMutableSource:Lp,useSyncExternalStore:Fp,useId:Xp,unstable_isNewReconciler:!1};function ft(t,e){if(t&&t.defaultProps){e=ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function za(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Xo={isMounted:function(t){return(t=t._reactInternals)?er(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ze(),i=mn(t),s=zt(r,i);s.payload=e,n!=null&&(s.callback=n),e=hn(t,s,i),e!==null&&(vt(e,t,i,r),Gs(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ze(),i=mn(t),s=zt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=hn(t,s,i),e!==null&&(vt(e,t,i,r),Gs(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ze(),r=mn(t),i=zt(n,r);i.tag=2,e!=null&&(i.callback=e),e=hn(t,i,r),e!==null&&(vt(e,t,r,n),Gs(e,t,r))}};function Qd(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ui(n,r)||!Ui(i,s):!0}function tm(t,e,n){var r=!1,i=Cn,s=e.contextType;return typeof s=="object"&&s!==null?s=at(s):(i=Qe(e)?Vn:Le.current,r=e.contextTypes,s=(r=r!=null)?Fr(t,i):Cn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Xo,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Yd(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Xo.enqueueReplaceState(e,e.state,null)}function Ua(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Qu(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=at(s):(s=Qe(e)?Vn:Le.current,i.context=Fr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(za(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Xo.enqueueReplaceState(i,i.state,null),go(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Br(t,e){try{var n="",r=e;do n+=ry(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Hl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ba(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Pv=typeof WeakMap=="function"?WeakMap:Map;function nm(t,e,n){n=zt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Co||(Co=!0,Xa=r),Ba(t,e)},n}function rm(t,e,n){n=zt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ba(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ba(t,e),typeof r!="function"&&(pn===null?pn=new Set([this]):pn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Kd(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Pv;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Vv.bind(null,t,e,n),e.then(t,t))}function qd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Xd(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=zt(-1,1),e.tag=2,hn(n,e,1))),n.lanes|=1),t)}var Dv=Yt.ReactCurrentOwner,$e=!1;function je(t,e,n,r){e.child=t===null?bp(e,null,n,r):zr(e,t.child,n,r)}function Jd(t,e,n,r,i){n=n.render;var s=e.ref;return Pr(e,i),r=Ju(t,e,n,r,s,i),n=Zu(),t!==null&&!$e?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Vt(t,e,i)):(oe&&n&&Uu(e),e.flags|=1,je(t,e,r,i),e.child)}function Zd(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!uc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,im(t,e,s,r,i)):(t=Js(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ui,n(o,r)&&t.ref===e.ref)return Vt(t,e,i)}return e.flags|=1,t=gn(s,r),t.ref=e.ref,t.return=e,e.child=t}function im(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ui(s,r)&&t.ref===e.ref)if($e=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&($e=!0);else return e.lanes=t.lanes,Vt(t,e,i)}return Wa(t,e,n,r,i)}function sm(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Sr,Xe),Xe|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ee(Sr,Xe),Xe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ee(Sr,Xe),Xe|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ee(Sr,Xe),Xe|=r;return je(t,e,i,n),e.child}function om(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Wa(t,e,n,r,i){var s=Qe(n)?Vn:Le.current;return s=Fr(e,s),Pr(e,i),n=Ju(t,e,n,r,s,i),r=Zu(),t!==null&&!$e?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Vt(t,e,i)):(oe&&r&&Uu(e),e.flags|=1,je(t,e,n,i),e.child)}function ef(t,e,n,r,i){if(Qe(n)){var s=!0;co(e)}else s=!1;if(Pr(e,i),e.stateNode===null)Ks(t,e),tm(e,n,r),Ua(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=at(u):(u=Qe(n)?Vn:Le.current,u=Fr(e,u));var f=n.getDerivedStateFromProps,c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Yd(e,o,r,u),rn=!1;var d=e.memoizedState;o.state=d,go(e,r,o,i),a=e.memoizedState,l!==r||d!==a||Ge.current||rn?(typeof f=="function"&&(za(e,n,f,r),a=e.memoizedState),(l=rn||Qd(e,n,l,r,d,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Op(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:ft(e.type,l),o.props=u,c=e.pendingProps,d=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=at(a):(a=Qe(n)?Vn:Le.current,a=Fr(e,a));var y=n.getDerivedStateFromProps;(f=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||d!==a)&&Yd(e,o,r,a),rn=!1,d=e.memoizedState,o.state=d,go(e,r,o,i);var v=e.memoizedState;l!==c||d!==v||Ge.current||rn?(typeof y=="function"&&(za(e,n,y,r),v=e.memoizedState),(u=rn||Qd(e,n,u,r,d,v,a)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return $a(t,e,n,r,s,i)}function $a(t,e,n,r,i,s){om(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&zd(e,n,!1),Vt(t,e,s);r=e.stateNode,Dv.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=zr(e,t.child,null,s),e.child=zr(e,null,l,s)):je(t,e,l,s),e.memoizedState=r.state,i&&zd(e,n,!0),e.child}function lm(t){var e=t.stateNode;e.pendingContext?jd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&jd(t,e.context,!1),Yu(t,e.containerInfo)}function tf(t,e,n,r,i){return jr(),Wu(i),e.flags|=256,je(t,e,n,r),e.child}var Va={dehydrated:null,treeContext:null,retryLane:0};function Ha(t){return{baseLanes:t,cachePool:null,transitions:null}}function am(t,e,n){var r=e.pendingProps,i=ae.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ee(ae,i&1),t===null)return Fa(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=el(o,r,0,null),t=$n(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ha(n),e.memoizedState=Va,t):nc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return bv(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=gn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=gn(l,s):(s=$n(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ha(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Va,r}return s=t.child,t=s.sibling,r=gn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function nc(t,e){return e=el({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ms(t,e,n,r){return r!==null&&Wu(r),zr(e,t.child,null,n),t=nc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function bv(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Hl(Error(x(422))),Ms(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=el({mode:"visible",children:r.children},i,0,null),s=$n(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&zr(e,t.child,null,o),e.child.memoizedState=Ha(o),e.memoizedState=Va,s);if(!(e.mode&1))return Ms(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(x(419)),r=Hl(s,r,void 0),Ms(t,e,o,r)}if(l=(o&t.childLanes)!==0,$e||l){if(r=ke,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,$t(t,i),vt(r,t,i,-1))}return ac(),r=Hl(Error(x(421))),Ms(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Hv.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Je=fn(i.nextSibling),Ze=e,oe=!0,pt=null,t!==null&&(it[st++]=Lt,it[st++]=Ft,it[st++]=Hn,Lt=t.id,Ft=t.overflow,Hn=e),e=nc(e,r.children),e.flags|=4096,e)}function nf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ja(t.return,e,n)}function Gl(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function um(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(je(t,e,r.children,n),r=ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&nf(t,n,e);else if(t.tag===19)nf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ee(ae,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&_o(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Gl(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&_o(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Gl(e,!0,n,null,s);break;case"together":Gl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ks(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Vt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Qn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=gn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=gn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Av(t,e,n){switch(e.tag){case 3:lm(e),jr();break;case 5:Mp(e);break;case 1:Qe(e.type)&&co(e);break;case 4:Yu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ee(po,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ee(ae,ae.current&1),e.flags|=128,null):n&e.child.childLanes?am(t,e,n):(ee(ae,ae.current&1),t=Vt(t,e,n),t!==null?t.sibling:null);ee(ae,ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return um(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(ae,ae.current),r)break;return null;case 22:case 23:return e.lanes=0,sm(t,e,n)}return Vt(t,e,n)}var cm,Ga,dm,fm;cm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ga=function(){};dm=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,zn(Pt.current);var s=null;switch(n){case"input":i=pa(t,i),r=pa(t,r),s=[];break;case"select":i=ce({},i,{value:void 0}),r=ce({},r,{value:void 0}),s=[];break;case"textarea":i=_a(t,i),r=_a(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ao)}va(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ai.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ai.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&re("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};fm=function(t,e,n,r){n!==r&&(e.flags|=4)};function ai(t,e){if(!oe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ae(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Ov(t,e,n){var r=e.pendingProps;switch(Bu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(e),null;case 1:return Qe(e.type)&&uo(),Ae(e),null;case 3:return r=e.stateNode,Ur(),se(Ge),se(Le),qu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(As(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,pt!==null&&(eu(pt),pt=null))),Ga(t,e),Ae(e),null;case 5:Ku(e);var i=zn(Hi.current);if(n=e.type,t!==null&&e.stateNode!=null)dm(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return Ae(e),null}if(t=zn(Pt.current),As(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Tt]=e,r[$i]=s,t=(e.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(i=0;i<yi.length;i++)re(yi[i],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":dd(r,s),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},re("invalid",r);break;case"textarea":hd(r,s),re("invalid",r)}va(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&bs(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&bs(r.textContent,l,t),i=["children",""+l]):Ai.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&re("scroll",r)}switch(n){case"input":xs(r),fd(r,s,!0);break;case"textarea":xs(r),pd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ao)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Uh(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Tt]=e,t[$i]=r,cm(t,e,!1,!1),e.stateNode=t;e:{switch(o=wa(n,r),n){case"dialog":re("cancel",t),re("close",t),i=r;break;case"iframe":case"object":case"embed":re("load",t),i=r;break;case"video":case"audio":for(i=0;i<yi.length;i++)re(yi[i],t);i=r;break;case"source":re("error",t),i=r;break;case"img":case"image":case"link":re("error",t),re("load",t),i=r;break;case"details":re("toggle",t),i=r;break;case"input":dd(t,r),i=pa(t,r),re("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ce({},r,{value:void 0}),re("invalid",t);break;case"textarea":hd(t,r),i=_a(t,r),re("invalid",t);break;default:i=r}va(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?$h(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Bh(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Oi(t,a):typeof a=="number"&&Oi(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ai.hasOwnProperty(s)?a!=null&&s==="onScroll"&&re("scroll",t):a!=null&&Iu(t,s,a,o))}switch(n){case"input":xs(t),fd(t,r,!1);break;case"textarea":xs(t),pd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+wn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ir(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ir(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ao)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ae(e),null;case 6:if(t&&e.stateNode!=null)fm(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=zn(Hi.current),zn(Pt.current),As(e)){if(r=e.stateNode,n=e.memoizedProps,r[Tt]=e,(s=r.nodeValue!==n)&&(t=Ze,t!==null))switch(t.tag){case 3:bs(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&bs(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tt]=e,e.stateNode=r}return Ae(e),null;case 13:if(se(ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(oe&&Je!==null&&e.mode&1&&!(e.flags&128))Pp(),jr(),e.flags|=98560,s=!1;else if(s=As(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[Tt]=e}else jr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ae(e),s=!1}else pt!==null&&(eu(pt),pt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ae.current&1?we===0&&(we=3):ac())),e.updateQueue!==null&&(e.flags|=4),Ae(e),null);case 4:return Ur(),Ga(t,e),t===null&&Bi(e.stateNode.containerInfo),Ae(e),null;case 10:return Hu(e.type._context),Ae(e),null;case 17:return Qe(e.type)&&uo(),Ae(e),null;case 19:if(se(ae),s=e.memoizedState,s===null)return Ae(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ai(s,!1);else{if(we!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=_o(t),o!==null){for(e.flags|=128,ai(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ee(ae,ae.current&1|2),e.child}t=t.sibling}s.tail!==null&&me()>Wr&&(e.flags|=128,r=!0,ai(s,!1),e.lanes=4194304)}else{if(!r)if(t=_o(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ai(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!oe)return Ae(e),null}else 2*me()-s.renderingStartTime>Wr&&n!==1073741824&&(e.flags|=128,r=!0,ai(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=me(),e.sibling=null,n=ae.current,ee(ae,r?n&1|2:n&1),e):(Ae(e),null);case 22:case 23:return lc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Xe&1073741824&&(Ae(e),e.subtreeFlags&6&&(e.flags|=8192)):Ae(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function Mv(t,e){switch(Bu(e),e.tag){case 1:return Qe(e.type)&&uo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ur(),se(Ge),se(Le),qu(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ku(e),null;case 13:if(se(ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));jr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return se(ae),null;case 4:return Ur(),null;case 10:return Hu(e.type._context),null;case 22:case 23:return lc(),null;case 24:return null;default:return null}}var Ls=!1,Oe=!1,Lv=typeof WeakSet=="function"?WeakSet:Set,P=null;function Er(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){de(t,e,r)}else n.current=null}function Qa(t,e,n){try{n()}catch(r){de(t,e,r)}}var rf=!1;function Fv(t,e){if(Pa=so,t=_p(),zu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,f=0,c=t,d=null;t:for(;;){for(var y;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(y=c.firstChild)!==null;)d=c,c=y;for(;;){if(c===t)break t;if(d===n&&++u===i&&(l=o),d===s&&++f===r&&(a=o),(y=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=y}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Da={focusedElem:t,selectionRange:n},so=!1,P=e;P!==null;)if(e=P,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,P=t;else for(;P!==null;){e=P;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var E=v.memoizedProps,F=v.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?E:ft(e.type,E),F);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(S){de(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}return v=rf,rf=!1,v}function ki(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Qa(e,n,s)}i=i.next}while(i!==r)}}function Jo(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ya(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function hm(t){var e=t.alternate;e!==null&&(t.alternate=null,hm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Tt],delete e[$i],delete e[Oa],delete e[vv],delete e[wv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function pm(t){return t.tag===5||t.tag===3||t.tag===4}function sf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||pm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ka(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ao));else if(r!==4&&(t=t.child,t!==null))for(Ka(t,e,n),t=t.sibling;t!==null;)Ka(t,e,n),t=t.sibling}function qa(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(qa(t,e,n),t=t.sibling;t!==null;)qa(t,e,n),t=t.sibling}var Ne=null,ht=!1;function tn(t,e,n){for(n=n.child;n!==null;)mm(t,e,n),n=n.sibling}function mm(t,e,n){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Vo,n)}catch{}switch(n.tag){case 5:Oe||Er(n,e);case 6:var r=Ne,i=ht;Ne=null,tn(t,e,n),Ne=r,ht=i,Ne!==null&&(ht?(t=Ne,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(ht?(t=Ne,n=n.stateNode,t.nodeType===8?zl(t.parentNode,n):t.nodeType===1&&zl(t,n),ji(t)):zl(Ne,n.stateNode));break;case 4:r=Ne,i=ht,Ne=n.stateNode.containerInfo,ht=!0,tn(t,e,n),Ne=r,ht=i;break;case 0:case 11:case 14:case 15:if(!Oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Qa(n,e,o),i=i.next}while(i!==r)}tn(t,e,n);break;case 1:if(!Oe&&(Er(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){de(n,e,l)}tn(t,e,n);break;case 21:tn(t,e,n);break;case 22:n.mode&1?(Oe=(r=Oe)||n.memoizedState!==null,tn(t,e,n),Oe=r):tn(t,e,n);break;default:tn(t,e,n)}}function of(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Lv),e.forEach(function(r){var i=Gv.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function dt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ne=l.stateNode,ht=!1;break e;case 3:Ne=l.stateNode.containerInfo,ht=!0;break e;case 4:Ne=l.stateNode.containerInfo,ht=!0;break e}l=l.return}if(Ne===null)throw Error(x(160));mm(s,o,i),Ne=null,ht=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){de(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)gm(e,t),e=e.sibling}function gm(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(dt(e,t),It(t),r&4){try{ki(3,t,t.return),Jo(3,t)}catch(E){de(t,t.return,E)}try{ki(5,t,t.return)}catch(E){de(t,t.return,E)}}break;case 1:dt(e,t),It(t),r&512&&n!==null&&Er(n,n.return);break;case 5:if(dt(e,t),It(t),r&512&&n!==null&&Er(n,n.return),t.flags&32){var i=t.stateNode;try{Oi(i,"")}catch(E){de(t,t.return,E)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&jh(i,s),wa(l,o);var u=wa(l,s);for(o=0;o<a.length;o+=2){var f=a[o],c=a[o+1];f==="style"?$h(i,c):f==="dangerouslySetInnerHTML"?Bh(i,c):f==="children"?Oi(i,c):Iu(i,f,c,u)}switch(l){case"input":ma(i,s);break;case"textarea":zh(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Ir(i,!!s.multiple,y,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ir(i,!!s.multiple,s.defaultValue,!0):Ir(i,!!s.multiple,s.multiple?[]:"",!1))}i[$i]=s}catch(E){de(t,t.return,E)}}break;case 6:if(dt(e,t),It(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(E){de(t,t.return,E)}}break;case 3:if(dt(e,t),It(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ji(e.containerInfo)}catch(E){de(t,t.return,E)}break;case 4:dt(e,t),It(t);break;case 13:dt(e,t),It(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(sc=me())),r&4&&of(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Oe=(u=Oe)||f,dt(e,t),Oe=u):dt(e,t),It(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(P=t,f=t.child;f!==null;){for(c=P=f;P!==null;){switch(d=P,y=d.child,d.tag){case 0:case 11:case 14:case 15:ki(4,d,d.return);break;case 1:Er(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(E){de(r,n,E)}}break;case 5:Er(d,d.return);break;case 22:if(d.memoizedState!==null){af(c);continue}}y!==null?(y.return=d,P=y):af(c)}f=f.sibling}e:for(f=null,c=t;;){if(c.tag===5){if(f===null){f=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Wh("display",o))}catch(E){de(t,t.return,E)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(E){de(t,t.return,E)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:dt(e,t),It(t),r&4&&of(t);break;case 21:break;default:dt(e,t),It(t)}}function It(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(pm(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Oi(i,""),r.flags&=-33);var s=sf(t);qa(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=sf(t);Ka(t,l,o);break;default:throw Error(x(161))}}catch(a){de(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function jv(t,e,n){P=t,_m(t)}function _m(t,e,n){for(var r=(t.mode&1)!==0;P!==null;){var i=P,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ls;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Oe;l=Ls;var u=Oe;if(Ls=o,(Oe=a)&&!u)for(P=i;P!==null;)o=P,a=o.child,o.tag===22&&o.memoizedState!==null?uf(i):a!==null?(a.return=o,P=a):uf(i);for(;s!==null;)P=s,_m(s),s=s.sibling;P=i,Ls=l,Oe=u}lf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,P=s):lf(t)}}function lf(t){for(;P!==null;){var e=P;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Oe||Jo(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Oe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ft(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Vd(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Vd(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&ji(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}Oe||e.flags&512&&Ya(e)}catch(d){de(e,e.return,d)}}if(e===t){P=null;break}if(n=e.sibling,n!==null){n.return=e.return,P=n;break}P=e.return}}function af(t){for(;P!==null;){var e=P;if(e===t){P=null;break}var n=e.sibling;if(n!==null){n.return=e.return,P=n;break}P=e.return}}function uf(t){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Jo(4,e)}catch(a){de(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){de(e,i,a)}}var s=e.return;try{Ya(e)}catch(a){de(e,s,a)}break;case 5:var o=e.return;try{Ya(e)}catch(a){de(e,o,a)}}}catch(a){de(e,e.return,a)}if(e===t){P=null;break}var l=e.sibling;if(l!==null){l.return=e.return,P=l;break}P=e.return}}var zv=Math.ceil,wo=Yt.ReactCurrentDispatcher,rc=Yt.ReactCurrentOwner,lt=Yt.ReactCurrentBatchConfig,H=0,ke=null,_e=null,Re=0,Xe=0,Sr=kn(0),we=0,Ki=null,Qn=0,Zo=0,ic=0,Ii=null,We=null,sc=0,Wr=1/0,Ot=null,Co=!1,Xa=null,pn=null,Fs=!1,an=null,Eo=0,Ni=0,Ja=null,qs=-1,Xs=0;function ze(){return H&6?me():qs!==-1?qs:qs=me()}function mn(t){return t.mode&1?H&2&&Re!==0?Re&-Re:Ev.transition!==null?(Xs===0&&(Xs=tp()),Xs):(t=K,t!==0||(t=window.event,t=t===void 0?16:ap(t.type)),t):1}function vt(t,e,n,r){if(50<Ni)throw Ni=0,Ja=null,Error(x(185));os(t,n,r),(!(H&2)||t!==ke)&&(t===ke&&(!(H&2)&&(Zo|=n),we===4&&on(t,Re)),Ye(t,r),n===1&&H===0&&!(e.mode&1)&&(Wr=me()+500,Ko&&In()))}function Ye(t,e){var n=t.callbackNode;Ey(t,e);var r=io(t,t===ke?Re:0);if(r===0)n!==null&&_d(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&_d(n),e===1)t.tag===0?Cv(cf.bind(null,t)):Np(cf.bind(null,t)),_v(function(){!(H&6)&&In()}),n=null;else{switch(np(r)){case 1:n=Du;break;case 4:n=Zh;break;case 16:n=ro;break;case 536870912:n=ep;break;default:n=ro}n=km(n,ym.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ym(t,e){if(qs=-1,Xs=0,H&6)throw Error(x(327));var n=t.callbackNode;if(Dr()&&t.callbackNode!==n)return null;var r=io(t,t===ke?Re:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=So(t,r);else{e=r;var i=H;H|=2;var s=wm();(ke!==t||Re!==e)&&(Ot=null,Wr=me()+500,Wn(t,e));do try{Wv();break}catch(l){vm(t,l)}while(!0);Vu(),wo.current=s,H=i,_e!==null?e=0:(ke=null,Re=0,e=we)}if(e!==0){if(e===2&&(i=ka(t),i!==0&&(r=i,e=Za(t,i))),e===1)throw n=Ki,Wn(t,0),on(t,r),Ye(t,me()),n;if(e===6)on(t,r);else{if(i=t.current.alternate,!(r&30)&&!Uv(i)&&(e=So(t,r),e===2&&(s=ka(t),s!==0&&(r=s,e=Za(t,s))),e===1))throw n=Ki,Wn(t,0),on(t,r),Ye(t,me()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:On(t,We,Ot);break;case 3:if(on(t,r),(r&130023424)===r&&(e=sc+500-me(),10<e)){if(io(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ze(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Aa(On.bind(null,t,We,Ot),e);break}On(t,We,Ot);break;case 4:if(on(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-yt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zv(r/1960))-r,10<r){t.timeoutHandle=Aa(On.bind(null,t,We,Ot),r);break}On(t,We,Ot);break;case 5:On(t,We,Ot);break;default:throw Error(x(329))}}}return Ye(t,me()),t.callbackNode===n?ym.bind(null,t):null}function Za(t,e){var n=Ii;return t.current.memoizedState.isDehydrated&&(Wn(t,e).flags|=256),t=So(t,e),t!==2&&(e=We,We=n,e!==null&&eu(e)),t}function eu(t){We===null?We=t:We.push.apply(We,t)}function Uv(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ct(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function on(t,e){for(e&=~ic,e&=~Zo,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-yt(e),r=1<<n;t[n]=-1,e&=~r}}function cf(t){if(H&6)throw Error(x(327));Dr();var e=io(t,0);if(!(e&1))return Ye(t,me()),null;var n=So(t,e);if(t.tag!==0&&n===2){var r=ka(t);r!==0&&(e=r,n=Za(t,r))}if(n===1)throw n=Ki,Wn(t,0),on(t,e),Ye(t,me()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,On(t,We,Ot),Ye(t,me()),null}function oc(t,e){var n=H;H|=1;try{return t(e)}finally{H=n,H===0&&(Wr=me()+500,Ko&&In())}}function Yn(t){an!==null&&an.tag===0&&!(H&6)&&Dr();var e=H;H|=1;var n=lt.transition,r=K;try{if(lt.transition=null,K=1,t)return t()}finally{K=r,lt.transition=n,H=e,!(H&6)&&In()}}function lc(){Xe=Sr.current,se(Sr)}function Wn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,gv(n)),_e!==null)for(n=_e.return;n!==null;){var r=n;switch(Bu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&uo();break;case 3:Ur(),se(Ge),se(Le),qu();break;case 5:Ku(r);break;case 4:Ur();break;case 13:se(ae);break;case 19:se(ae);break;case 10:Hu(r.type._context);break;case 22:case 23:lc()}n=n.return}if(ke=t,_e=t=gn(t.current,null),Re=Xe=e,we=0,Ki=null,ic=Zo=Qn=0,We=Ii=null,jn!==null){for(e=0;e<jn.length;e++)if(n=jn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}jn=null}return t}function vm(t,e){do{var n=_e;try{if(Vu(),Qs.current=vo,yo){for(var r=ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}yo=!1}if(Gn=0,Ee=ye=ue=null,xi=!1,Gi=0,rc.current=null,n===null||n.return===null){we=1,Ki=e,_e=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Re,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,f=l,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=qd(o);if(y!==null){y.flags&=-257,Xd(y,o,l,s,e),y.mode&1&&Kd(s,u,e),e=y,a=u;var v=e.updateQueue;if(v===null){var E=new Set;E.add(a),e.updateQueue=E}else v.add(a);break e}else{if(!(e&1)){Kd(s,u,e),ac();break e}a=Error(x(426))}}else if(oe&&l.mode&1){var F=qd(o);if(F!==null){!(F.flags&65536)&&(F.flags|=256),Xd(F,o,l,s,e),Wu(Br(a,l));break e}}s=a=Br(a,l),we!==4&&(we=2),Ii===null?Ii=[s]:Ii.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=nm(s,a,e);$d(s,g);break e;case 1:l=a;var p=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(pn===null||!pn.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=rm(s,l,e);$d(s,S);break e}}s=s.return}while(s!==null)}Em(n)}catch(T){e=T,_e===n&&n!==null&&(_e=n=n.return);continue}break}while(!0)}function wm(){var t=wo.current;return wo.current=vo,t===null?vo:t}function ac(){(we===0||we===3||we===2)&&(we=4),ke===null||!(Qn&268435455)&&!(Zo&268435455)||on(ke,Re)}function So(t,e){var n=H;H|=2;var r=wm();(ke!==t||Re!==e)&&(Ot=null,Wn(t,e));do try{Bv();break}catch(i){vm(t,i)}while(!0);if(Vu(),H=n,wo.current=r,_e!==null)throw Error(x(261));return ke=null,Re=0,we}function Bv(){for(;_e!==null;)Cm(_e)}function Wv(){for(;_e!==null&&!hy();)Cm(_e)}function Cm(t){var e=xm(t.alternate,t,Xe);t.memoizedProps=t.pendingProps,e===null?Em(t):_e=e,rc.current=null}function Em(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Mv(n,e),n!==null){n.flags&=32767,_e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{we=6,_e=null;return}}else if(n=Ov(n,e,Xe),n!==null){_e=n;return}if(e=e.sibling,e!==null){_e=e;return}_e=e=t}while(e!==null);we===0&&(we=5)}function On(t,e,n){var r=K,i=lt.transition;try{lt.transition=null,K=1,$v(t,e,n,r)}finally{lt.transition=i,K=r}return null}function $v(t,e,n,r){do Dr();while(an!==null);if(H&6)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Sy(t,s),t===ke&&(_e=ke=null,Re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fs||(Fs=!0,km(ro,function(){return Dr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=lt.transition,lt.transition=null;var o=K;K=1;var l=H;H|=4,rc.current=null,Fv(t,n),gm(n,t),uv(Da),so=!!Pa,Da=Pa=null,t.current=n,jv(n),py(),H=l,K=o,lt.transition=s}else t.current=n;if(Fs&&(Fs=!1,an=t,Eo=i),s=t.pendingLanes,s===0&&(pn=null),_y(n.stateNode),Ye(t,me()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Co)throw Co=!1,t=Xa,Xa=null,t;return Eo&1&&t.tag!==0&&Dr(),s=t.pendingLanes,s&1?t===Ja?Ni++:(Ni=0,Ja=t):Ni=0,In(),null}function Dr(){if(an!==null){var t=np(Eo),e=lt.transition,n=K;try{if(lt.transition=null,K=16>t?16:t,an===null)var r=!1;else{if(t=an,an=null,Eo=0,H&6)throw Error(x(331));var i=H;for(H|=4,P=t.current;P!==null;){var s=P,o=s.child;if(P.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(P=u;P!==null;){var f=P;switch(f.tag){case 0:case 11:case 15:ki(8,f,s)}var c=f.child;if(c!==null)c.return=f,P=c;else for(;P!==null;){f=P;var d=f.sibling,y=f.return;if(hm(f),f===u){P=null;break}if(d!==null){d.return=y,P=d;break}P=y}}}var v=s.alternate;if(v!==null){var E=v.child;if(E!==null){v.child=null;do{var F=E.sibling;E.sibling=null,E=F}while(E!==null)}}P=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,P=o;else e:for(;P!==null;){if(s=P,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ki(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,P=g;break e}P=s.return}}var p=t.current;for(P=p;P!==null;){o=P;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,P=_;else e:for(o=p;P!==null;){if(l=P,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Jo(9,l)}}catch(T){de(l,l.return,T)}if(l===o){P=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,P=S;break e}P=l.return}}if(H=i,In(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Vo,t)}catch{}r=!0}return r}finally{K=n,lt.transition=e}}return!1}function df(t,e,n){e=Br(n,e),e=nm(t,e,1),t=hn(t,e,1),e=ze(),t!==null&&(os(t,1,e),Ye(t,e))}function de(t,e,n){if(t.tag===3)df(t,t,n);else for(;e!==null;){if(e.tag===3){df(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pn===null||!pn.has(r))){t=Br(n,t),t=rm(e,t,1),e=hn(e,t,1),t=ze(),e!==null&&(os(e,1,t),Ye(e,t));break}}e=e.return}}function Vv(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ze(),t.pingedLanes|=t.suspendedLanes&n,ke===t&&(Re&n)===n&&(we===4||we===3&&(Re&130023424)===Re&&500>me()-sc?Wn(t,0):ic|=n),Ye(t,e)}function Sm(t,e){e===0&&(t.mode&1?(e=Ns,Ns<<=1,!(Ns&130023424)&&(Ns=4194304)):e=1);var n=ze();t=$t(t,e),t!==null&&(os(t,e,n),Ye(t,n))}function Hv(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Sm(t,n)}function Gv(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),Sm(t,n)}var xm;xm=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ge.current)$e=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return $e=!1,Av(t,e,n);$e=!!(t.flags&131072)}else $e=!1,oe&&e.flags&1048576&&Tp(e,ho,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ks(t,e),t=e.pendingProps;var i=Fr(e,Le.current);Pr(e,n),i=Ju(null,e,r,t,i,n);var s=Zu();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qe(r)?(s=!0,co(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Qu(e),i.updater=Xo,e.stateNode=i,i._reactInternals=e,Ua(e,r,t,n),e=$a(null,e,r,!0,s,n)):(e.tag=0,oe&&s&&Uu(e),je(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ks(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Yv(r),t=ft(r,t),i){case 0:e=Wa(null,e,r,t,n);break e;case 1:e=ef(null,e,r,t,n);break e;case 11:e=Jd(null,e,r,t,n);break e;case 14:e=Zd(null,e,r,ft(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ft(r,i),Wa(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ft(r,i),ef(t,e,r,i,n);case 3:e:{if(lm(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Op(t,e),go(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Br(Error(x(423)),e),e=tf(t,e,r,n,i);break e}else if(r!==i){i=Br(Error(x(424)),e),e=tf(t,e,r,n,i);break e}else for(Je=fn(e.stateNode.containerInfo.firstChild),Ze=e,oe=!0,pt=null,n=bp(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(jr(),r===i){e=Vt(t,e,n);break e}je(t,e,r,n)}e=e.child}return e;case 5:return Mp(e),t===null&&Fa(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ba(r,i)?o=null:s!==null&&ba(r,s)&&(e.flags|=32),om(t,e),je(t,e,o,n),e.child;case 6:return t===null&&Fa(e),null;case 13:return am(t,e,n);case 4:return Yu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=zr(e,null,r,n):je(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ft(r,i),Jd(t,e,r,i,n);case 7:return je(t,e,e.pendingProps,n),e.child;case 8:return je(t,e,e.pendingProps.children,n),e.child;case 12:return je(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ee(po,r._currentValue),r._currentValue=o,s!==null)if(Ct(s.value,o)){if(s.children===i.children&&!Ge.current){e=Vt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=zt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?a.next=a:(a.next=f.next,f.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ja(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ja(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}je(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Pr(e,n),i=at(i),r=r(i),e.flags|=1,je(t,e,r,n),e.child;case 14:return r=e.type,i=ft(r,e.pendingProps),i=ft(r.type,i),Zd(t,e,r,i,n);case 15:return im(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ft(r,i),Ks(t,e),e.tag=1,Qe(r)?(t=!0,co(e)):t=!1,Pr(e,n),tm(e,r,i),Ua(e,r,i,n),$a(null,e,r,!0,t,n);case 19:return um(t,e,n);case 22:return sm(t,e,n)}throw Error(x(156,e.tag))};function km(t,e){return Jh(t,e)}function Qv(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(t,e,n,r){return new Qv(t,e,n,r)}function uc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Yv(t){if(typeof t=="function")return uc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Tu)return 11;if(t===Ru)return 14}return 2}function gn(t,e){var n=t.alternate;return n===null?(n=ot(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Js(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")uc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case hr:return $n(n.children,i,s,e);case Nu:o=8,i|=8;break;case ca:return t=ot(12,n,e,i|2),t.elementType=ca,t.lanes=s,t;case da:return t=ot(13,n,e,i),t.elementType=da,t.lanes=s,t;case fa:return t=ot(19,n,e,i),t.elementType=fa,t.lanes=s,t;case Mh:return el(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ah:o=10;break e;case Oh:o=9;break e;case Tu:o=11;break e;case Ru:o=14;break e;case nn:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=ot(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function $n(t,e,n,r){return t=ot(7,t,r,e),t.lanes=n,t}function el(t,e,n,r){return t=ot(22,t,r,e),t.elementType=Mh,t.lanes=n,t.stateNode={isHidden:!1},t}function Ql(t,e,n){return t=ot(6,t,null,e),t.lanes=n,t}function Yl(t,e,n){return e=ot(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Kv(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tl(0),this.expirationTimes=Tl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function cc(t,e,n,r,i,s,o,l,a){return t=new Kv(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ot(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qu(s),t}function qv(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Im(t){if(!t)return Cn;t=t._reactInternals;e:{if(er(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(Qe(n))return Ip(t,n,e)}return e}function Nm(t,e,n,r,i,s,o,l,a){return t=cc(n,r,!0,t,i,s,o,l,a),t.context=Im(null),n=t.current,r=ze(),i=mn(n),s=zt(r,i),s.callback=e??null,hn(n,s,i),t.current.lanes=i,os(t,i,r),Ye(t,r),t}function tl(t,e,n,r){var i=e.current,s=ze(),o=mn(i);return n=Im(n),e.context===null?e.context=n:e.pendingContext=n,e=zt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=hn(i,e,o),t!==null&&(vt(t,i,o,s),Gs(t,i,o)),o}function xo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ff(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function dc(t,e){ff(t,e),(t=t.alternate)&&ff(t,e)}function Xv(){return null}var Tm=typeof reportError=="function"?reportError:function(t){console.error(t)};function fc(t){this._internalRoot=t}nl.prototype.render=fc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));tl(t,e,null,null)};nl.prototype.unmount=fc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yn(function(){tl(null,t,null,null)}),e[Wt]=null}};function nl(t){this._internalRoot=t}nl.prototype.unstable_scheduleHydration=function(t){if(t){var e=sp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<sn.length&&e!==0&&e<sn[n].priority;n++);sn.splice(n,0,t),n===0&&lp(t)}};function hc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function hf(){}function Jv(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=xo(o);s.call(u)}}var o=Nm(e,r,t,0,null,!1,!1,"",hf);return t._reactRootContainer=o,t[Wt]=o.current,Bi(t.nodeType===8?t.parentNode:t),Yn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=xo(a);l.call(u)}}var a=cc(t,0,!1,null,null,!1,!1,"",hf);return t._reactRootContainer=a,t[Wt]=a.current,Bi(t.nodeType===8?t.parentNode:t),Yn(function(){tl(e,a,n,r)}),a}function il(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=xo(o);l.call(a)}}tl(e,o,t,i)}else o=Jv(n,e,t,i,r);return xo(o)}rp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=_i(e.pendingLanes);n!==0&&(bu(e,n|1),Ye(e,me()),!(H&6)&&(Wr=me()+500,In()))}break;case 13:Yn(function(){var r=$t(t,1);if(r!==null){var i=ze();vt(r,t,1,i)}}),dc(t,1)}};Au=function(t){if(t.tag===13){var e=$t(t,134217728);if(e!==null){var n=ze();vt(e,t,134217728,n)}dc(t,134217728)}};ip=function(t){if(t.tag===13){var e=mn(t),n=$t(t,e);if(n!==null){var r=ze();vt(n,t,e,r)}dc(t,e)}};sp=function(){return K};op=function(t,e){var n=K;try{return K=t,e()}finally{K=n}};Ea=function(t,e,n){switch(e){case"input":if(ma(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Yo(r);if(!i)throw Error(x(90));Fh(r),ma(r,i)}}}break;case"textarea":zh(t,n);break;case"select":e=n.value,e!=null&&Ir(t,!!n.multiple,e,!1)}};Gh=oc;Qh=Yn;var Zv={usingClientEntryPoint:!1,Events:[as,_r,Yo,Vh,Hh,oc]},ui={findFiberByHostInstance:Fn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},e0={bundleType:ui.bundleType,version:ui.version,rendererPackageName:ui.rendererPackageName,rendererConfig:ui.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=qh(t),t===null?null:t.stateNode},findFiberByHostInstance:ui.findFiberByHostInstance||Xv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var js=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!js.isDisabled&&js.supportsFiber)try{Vo=js.inject(e0),Rt=js}catch{}}tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zv;tt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hc(e))throw Error(x(200));return qv(t,e,null,n)};tt.createRoot=function(t,e){if(!hc(t))throw Error(x(299));var n=!1,r="",i=Tm;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=cc(t,1,!1,null,null,n,!1,r,i),t[Wt]=e.current,Bi(t.nodeType===8?t.parentNode:t),new fc(e)};tt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=qh(e),t=t===null?null:t.stateNode,t};tt.flushSync=function(t){return Yn(t)};tt.hydrate=function(t,e,n){if(!rl(e))throw Error(x(200));return il(null,t,e,!0,n)};tt.hydrateRoot=function(t,e,n){if(!hc(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Tm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Nm(e,null,t,1,n??null,i,!1,s,o),t[Wt]=e.current,Bi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new nl(e)};tt.render=function(t,e,n){if(!rl(e))throw Error(x(200));return il(null,t,e,!1,n)};tt.unmountComponentAtNode=function(t){if(!rl(t))throw Error(x(40));return t._reactRootContainer?(Yn(function(){il(null,null,t,!1,function(){t._reactRootContainer=null,t[Wt]=null})}),!0):!1};tt.unstable_batchedUpdates=oc;tt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!rl(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return il(t,e,n,!1,r)};tt.version="18.3.1-next-f1338f8080-20240426";function Rm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rm)}catch(t){console.error(t)}}Rm(),Rh.exports=tt;var t0=Rh.exports,pf=t0;aa.createRoot=pf.createRoot,aa.hydrateRoot=pf.hydrateRoot;const n0=()=>{};var mf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(t,e){if(!t)throw qr(e)},qr=function(t){return new Error("Firebase Database ("+Pm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},r0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},pc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,f=s>>2,c=(s&3)<<4|l>>4;let d=(l&15)<<2|u>>6,y=u&63;a||(y=64,o||(d=64)),r.push(n[f],n[c],n[d],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Dm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):r0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new i0;const d=s<<2|l>>4;if(r.push(d),u!==64){const y=l<<4&240|u>>2;if(r.push(y),c!==64){const v=u<<6&192|c;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class i0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bm=function(t){const e=Dm(t);return pc.encodeByteArray(e,!0)},ko=function(t){return bm(t).replace(/\./g,"")},tu=function(t){try{return pc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(t){return Am(void 0,t)}function Am(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!o0(n)||(t[n]=Am(t[n],e[n]));return t}function o0(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0=()=>l0().__FIREBASE_DEFAULTS__,u0=()=>{if(typeof process>"u"||typeof mf>"u")return;const t=mf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},c0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&tu(t[1]);return e&&JSON.parse(e)},Om=()=>{try{return n0()||a0()||u0()||c0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},d0=t=>{var e,n;return(n=(e=Om())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},f0=t=>{const e=d0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Mm=()=>{var t;return(t=Om())==null?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ko(JSON.stringify(n)),ko(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(p0())}function m0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function g0(){return Pm.NODE_ADMIN===!0}function _0(){try{return typeof indexedDB=="object"}catch{return!1}}function y0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0="FirebaseError";class cs extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=v0,Object.setPrototypeOf(this,cs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fm.prototype.create)}}class Fm{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?w0(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new cs(i,l,r)}}function w0(t,e){return t.replace(C0,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const C0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(t){return JSON.parse(t)}function xe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=qi(tu(s[0])||""),n=qi(tu(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},E0=function(t){const e=jm(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},S0=function(t){const e=jm(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function $r(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function gf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Io(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function No(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(_f(s)&&_f(o)){if(!No(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function _f(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const d=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,f;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),f=1518500249):(u=s^o^l,f=1859775393):c<60?(u=s&o|l&(s|o),f=2400959708):(u=s^o^l,f=3395469782);const d=(i<<5|i>>>27)+u+a+f+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function mc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,I(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ol=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function N0(t){return(await fetch(t,{credentials:"include"})).ok}class Xi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new sl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(P0(e))try{this.getOrInitializeService({instanceIdentifier:Mn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Mn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mn){return this.instances.has(e)}getOptions(e=Mn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:R0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mn){return this.component?this.component.multipleInstances?e:Mn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function R0(t){return t===Mn?void 0:t}function P0(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new T0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const b0={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},A0=J.INFO,O0={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},M0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=O0[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Um{constructor(e){this.name=e,this._logLevel=A0,this._logHandler=M0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?b0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const L0=(t,e)=>e.some(n=>t instanceof n);let yf,vf;function F0(){return yf||(yf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function j0(){return vf||(vf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bm=new WeakMap,nu=new WeakMap,Wm=new WeakMap,Kl=new WeakMap,gc=new WeakMap;function z0(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(_n(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Bm.set(n,t)}).catch(()=>{}),gc.set(e,t),e}function U0(t){if(nu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});nu.set(t,e)}let ru={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return nu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Wm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function B0(t){ru=t(ru)}function W0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ql(this),e,...n);return Wm.set(r,e.sort?e.sort():[e]),_n(r)}:j0().includes(t)?function(...e){return t.apply(ql(this),e),_n(Bm.get(this))}:function(...e){return _n(t.apply(ql(this),e))}}function $0(t){return typeof t=="function"?W0(t):(t instanceof IDBTransaction&&U0(t),L0(t,F0())?new Proxy(t,ru):t)}function _n(t){if(t instanceof IDBRequest)return z0(t);if(Kl.has(t))return Kl.get(t);const e=$0(t);return e!==t&&(Kl.set(t,e),gc.set(e,t)),e}const ql=t=>gc.get(t);function V0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=_n(o);return r&&o.addEventListener("upgradeneeded",a=>{r(_n(o.result),a.oldVersion,a.newVersion,_n(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const H0=["get","getKey","getAll","getAllKeys","count"],G0=["put","add","delete","clear"],Xl=new Map;function wf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xl.get(e))return Xl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=G0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||H0.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Xl.set(e,s),s}B0(t=>({...t,get:(e,n,r)=>wf(e,n)||t.get(e,n,r),has:(e,n)=>!!wf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Y0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Y0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const iu="@firebase/app",Cf="0.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht=new Um("@firebase/app"),K0="@firebase/app-compat",q0="@firebase/analytics-compat",X0="@firebase/analytics",J0="@firebase/app-check-compat",Z0="@firebase/app-check",ew="@firebase/auth",tw="@firebase/auth-compat",nw="@firebase/database",rw="@firebase/data-connect",iw="@firebase/database-compat",sw="@firebase/functions",ow="@firebase/functions-compat",lw="@firebase/installations",aw="@firebase/installations-compat",uw="@firebase/messaging",cw="@firebase/messaging-compat",dw="@firebase/performance",fw="@firebase/performance-compat",hw="@firebase/remote-config",pw="@firebase/remote-config-compat",mw="@firebase/storage",gw="@firebase/storage-compat",_w="@firebase/firestore",yw="@firebase/ai",vw="@firebase/firestore-compat",ww="firebase",Cw="12.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su="[DEFAULT]",Ew={[iu]:"fire-core",[K0]:"fire-core-compat",[X0]:"fire-analytics",[q0]:"fire-analytics-compat",[Z0]:"fire-app-check",[J0]:"fire-app-check-compat",[ew]:"fire-auth",[tw]:"fire-auth-compat",[nw]:"fire-rtdb",[rw]:"fire-data-connect",[iw]:"fire-rtdb-compat",[sw]:"fire-fn",[ow]:"fire-fn-compat",[lw]:"fire-iid",[aw]:"fire-iid-compat",[uw]:"fire-fcm",[cw]:"fire-fcm-compat",[dw]:"fire-perf",[fw]:"fire-perf-compat",[hw]:"fire-rc",[pw]:"fire-rc-compat",[mw]:"fire-gcs",[gw]:"fire-gcs-compat",[_w]:"fire-fst",[vw]:"fire-fst-compat",[yw]:"fire-vertex","fire-js":"fire-js",[ww]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=new Map,Sw=new Map,ou=new Map;function Ef(t,e){try{t.container.addComponent(e)}catch(n){Ht.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ro(t){const e=t.name;if(ou.has(e))return Ht.debug(`There were multiple attempts to register component ${e}.`),!1;ou.set(e,t);for(const n of To.values())Ef(n,t);for(const n of Sw.values())Ef(n,t);return!0}function xw(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function kw(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yn=new Fm("app","Firebase",Iw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw=Cw;function $m(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:su,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw yn.create("bad-app-name",{appName:String(i)});if(n||(n=Mm()),!n)throw yn.create("no-options");const s=To.get(i);if(s){if(No(n,s.options)&&No(r,s.config))return s;throw yn.create("duplicate-app",{appName:i})}const o=new D0(i);for(const a of ou.values())o.addComponent(a);const l=new Nw(n,r,o);return To.set(i,l),l}function Rw(t=su){const e=To.get(t);if(!e&&t===su&&Mm())return $m();if(!e)throw yn.create("no-app",{appName:t});return e}function br(t,e,n){let r=Ew[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ht.warn(o.join(" "));return}Ro(new Xi(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw="firebase-heartbeat-database",Dw=1,Ji="firebase-heartbeat-store";let Jl=null;function Vm(){return Jl||(Jl=V0(Pw,Dw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ji)}catch(n){console.warn(n)}}}}).catch(t=>{throw yn.create("idb-open",{originalErrorMessage:t.message})})),Jl}async function bw(t){try{const n=(await Vm()).transaction(Ji),r=await n.objectStore(Ji).get(Hm(t));return await n.done,r}catch(e){if(e instanceof cs)Ht.warn(e.message);else{const n=yn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ht.warn(n.message)}}}async function Sf(t,e){try{const r=(await Vm()).transaction(Ji,"readwrite");await r.objectStore(Ji).put(e,Hm(t)),await r.done}catch(n){if(n instanceof cs)Ht.warn(n.message);else{const r=yn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ht.warn(r.message)}}}function Hm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw=1024,Ow=30;class Mw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Fw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=xf();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Ow){const o=jw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ht.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=xf(),{heartbeatsToSend:r,unsentEntries:i}=Lw(this._heartbeatsCache.heartbeats),s=ko(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Ht.warn(n),""}}}function xf(){return new Date().toISOString().substring(0,10)}function Lw(t,e=Aw){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),kf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),kf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Fw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _0()?y0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await bw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Sf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Sf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function kf(t){return ko(JSON.stringify({version:2,heartbeats:t})).length}function jw(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(t){Ro(new Xi("platform-logger",e=>new Q0(e),"PRIVATE")),Ro(new Xi("heartbeat",e=>new Mw(e),"PRIVATE")),br(iu,Cf,t),br(iu,Cf,"esm2020"),br("fire-js","")}zw("");var If={};const Nf="@firebase/database",Tf="1.1.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gm="";function Uw(t){Gm=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),xe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:qi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Kt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Bw(e)}}catch{}return new Ww},Un=Qm("localStorage"),$w=Qm("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new Um("@firebase/database"),Vw=function(){let t=1;return function(){return t++}}(),Ym=function(t){const e=I0(t),n=new k0;n.update(e);const r=n.digest();return pc.encodeByteArray(r)},fs=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=fs.apply(null,r):typeof r=="object"?e+=xe(r):e+=r,e+=" "}return e};let Ti=null,Rf=!0;const Hw=function(t,e){I(!0,"Can't turn on custom loggers persistently."),Ar.logLevel=J.VERBOSE,Ti=Ar.log.bind(Ar)},Me=function(...t){if(Rf===!0&&(Rf=!1,Ti===null&&$w.get("logging_enabled")===!0&&Hw()),Ti){const e=fs.apply(null,t);Ti(e)}},hs=function(t){return function(...e){Me(t,...e)}},lu=function(...t){const e="FIREBASE INTERNAL ERROR: "+fs(...t);Ar.error(e)},Gt=function(...t){const e=`FIREBASE FATAL ERROR: ${fs(...t)}`;throw Ar.error(e),new Error(e)},Ke=function(...t){const e="FIREBASE WARNING: "+fs(...t);Ar.warn(e)},Gw=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ke("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Km=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Qw=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Vr="[MIN_NAME]",Kn="[MAX_NAME]",Xr=function(t,e){if(t===e)return 0;if(t===Vr||e===Kn)return-1;if(e===Vr||t===Kn)return 1;{const n=Pf(t),r=Pf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},Yw=function(t,e){return t===e?0:t<e?-1:1},ci=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+xe(e))},_c=function(t){if(typeof t!="object"||t===null)return xe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=xe(e[r]),n+=":",n+=_c(t[e[r]]);return n+="}",n},qm=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function qe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Xm=function(t){I(!Km(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const f=u.join("");let c="";for(a=0;a<64;a+=8){let d=parseInt(f.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),c=c+d}return c.toLowerCase()},Kw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},qw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Xw(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const Jw=new RegExp("^-?(0*)\\d{1,10}$"),Zw=-2147483648,e1=2147483647,Pf=function(t){if(Jw.test(t)){const e=Number(t);if(e>=Zw&&e<=e1)return e}return null},Jr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ke("Exception was thrown by user callback.",n),e},Math.floor(0))}},t1=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ri=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,kw(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ke(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Me("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ke(e)}}class Zs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Zs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc="5",Jm="v",Zm="s",eg="r",tg="f",ng=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,rg="ls",ig="p",au="ac",sg="websocket",og="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1,u=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Un.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Un.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function i1(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ag(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let r;if(e===sg)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===og)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);i1(t)&&(n.ns=t.namespace);const i=[];return qe(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(){this.counters_={}}incrementCounter(e,n=1){Kt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return s0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl={},ea={};function vc(t){const e=t.toString();return Zl[e]||(Zl[e]=new s1),Zl[e]}function o1(t,e){const n=t.toString();return ea[n]||(ea[n]=e()),ea[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Jr(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df="start",a1="close",u1="pLPCommand",c1="pRTLPCB",ug="id",cg="pw",dg="ser",d1="cb",f1="seg",h1="ts",p1="d",m1="dframe",fg=1870,hg=30,g1=fg-hg,_1=25e3,y1=3e4;class xr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=hs(e),this.stats_=vc(n),this.urlFn=a=>(this.appCheckToken&&(a[au]=this.appCheckToken),ag(n,og,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new l1(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(y1)),Qw(()=>{if(this.isClosed_)return;this.scriptTagHolder=new wc((...s)=>{const[o,l,a,u,f]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Df)this.id=l,this.password=a;else if(o===a1)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Df]="t",r[dg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[d1]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Jm]=yc,this.transportSessionId&&(r[Zm]=this.transportSessionId),this.lastSessionId&&(r[rg]=this.lastSessionId),this.applicationId&&(r[ig]=this.applicationId),this.appCheckToken&&(r[au]=this.appCheckToken),typeof location<"u"&&location.hostname&&ng.test(location.hostname)&&(r[eg]=tg);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){xr.forceAllow_=!0}static forceDisallow(){xr.forceDisallow_=!0}static isAvailable(){return xr.forceAllow_?!0:!xr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Kw()&&!qw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=bm(n),i=qm(r,g1);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[m1]="t",r[ug]=e,r[cg]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=xe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class wc{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Vw(),window[u1+this.uniqueCallbackIdentifier]=e,window[c1+this.uniqueCallbackIdentifier]=n,this.myIFrame=wc.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Me("frame writing exception"),l.stack&&Me(l.stack),Me(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Me("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ug]=this.myID,e[cg]=this.myPW,e[dg]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+hg+r.length<=fg;){const o=this.pendingSegs.shift();r=r+"&"+f1+i+"="+o.seg+"&"+h1+i+"="+o.ts+"&"+p1+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(_1)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Me("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1=16384,w1=45e3;let Po=null;typeof MozWebSocket<"u"?Po=MozWebSocket:typeof WebSocket<"u"&&(Po=WebSocket);class mt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=hs(this.connId),this.stats_=vc(n),this.connURL=mt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Jm]=yc,typeof location<"u"&&location.hostname&&ng.test(location.hostname)&&(o[eg]=tg),n&&(o[Zm]=n),r&&(o[rg]=r),i&&(o[au]=i),s&&(o[ig]=s),ag(e,sg,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Un.set("previous_websocket_failure",!0);try{let r;g0(),this.mySock=new Po(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){mt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Po!==null&&!mt.forceDisallow_}static previouslyFailed(){return Un.isInMemoryStorage||Un.get("previous_websocket_failure")===!0}markConnectionHealthy(){Un.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=qi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=qm(n,v1);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(w1))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}mt.responsesRequiredToBeHealthy=2;mt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{static get ALL_TRANSPORTS(){return[xr,mt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=mt&&mt.isAvailable();let r=n&&!mt.previouslyFailed();if(e.webSocketOnly&&(n||Ke("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[mt];else{const i=this.transports_=[];for(const s of Zi.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Zi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Zi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1=6e4,E1=5e3,S1=10*1024,x1=100*1024,ta="t",bf="d",k1="s",Af="r",I1="e",Of="o",Mf="a",Lf="n",Ff="p",N1="h";class T1{constructor(e,n,r,i,s,o,l,a,u,f){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=hs("c:"+this.id+":"),this.transportManager_=new Zi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ri(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>x1?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>S1?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ta in e){const n=e[ta];n===Mf?this.upgradeIfSecondaryHealthy_():n===Af?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Of&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ci("t",e),r=ci("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ff,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Mf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Lf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ci("t",e),r=ci("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ci(ta,e);if(bf in e){const r=e[bf];if(n===N1){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Lf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===k1?this.onConnectionShutdown_(r):n===Af?this.onReset_(r):n===I1?lu("Server Error: "+r):n===Of?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):lu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),yc!==r&&Ke("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ri(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(C1))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ri(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(E1))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ff,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Un.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do extends mg{static getInstance(){return new Do}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Lm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf=32,zf=768;class q{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Q(){return new q("")}function B(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function En(t){return t.pieces_.length-t.pieceNum_}function Z(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new q(t.pieces_,e)}function gg(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function R1(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function _g(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function yg(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new q(e,0)}function ve(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof q)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new q(n,0)}function $(t){return t.pieceNum_>=t.pieces_.length}function Ve(t,e){const n=B(t),r=B(e);if(n===null)return e;if(n===r)return Ve(Z(t),Z(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Cc(t,e){if(En(t)!==En(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function gt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(En(t)>En(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class P1{constructor(e,n){this.errorPrefix_=n,this.parts_=_g(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ol(this.parts_[r]);vg(this)}}function D1(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ol(e),vg(t)}function b1(t){const e=t.parts_.pop();t.byteLength_-=ol(e),t.parts_.length>0&&(t.byteLength_-=1)}function vg(t){if(t.byteLength_>zf)throw new Error(t.errorPrefix_+"has a key path longer than "+zf+" bytes ("+t.byteLength_+").");if(t.parts_.length>jf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+jf+") or object contains a cycle "+Ln(t))}function Ln(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec extends mg{static getInstance(){return new Ec}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=1e3,A1=60*5*1e3,Uf=30*1e3,O1=1.3,M1=3e4,L1="server_kill",Bf=3;class Ut extends pg{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Ut.nextPersistentConnectionId_++,this.log_=hs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=di,this.maxReconnectDelay_=A1,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ec.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Do.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(xe(s)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new sl,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Ut.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Kt(e,"w")){const r=$r(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ke(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||S0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Uf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=E0(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+xe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):lu("Unrecognized action received from server: "+xe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=di,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=di,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>M1&&(this.reconnectDelay_=di),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*O1)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ut.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){I(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,d]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?Me("getToken() completed but was canceled"):(Me("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=d&&d.token,l=new T1(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,y=>{Ke(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(L1)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&Ke(c),a())}}}interrupt(e){Me("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Me("Resuming connection for reason: "+e),delete this.interruptReasons_[e],gf(this.interruptReasons_)&&(this.reconnectDelay_=di,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>_c(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new q(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Me("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Bf&&(this.reconnectDelay_=Uf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Me("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Bf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Gm.replace(/\./g,"-")]=1,Lm()?e["framework.cordova"]=1:m0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Do.getInstance().currentlyOnline();return gf(this.interruptReasons_)&&e}}Ut.nextPersistentConnectionId_=0;Ut.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new W(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new W(Vr,e),i=new W(Vr,n);return this.compare(r,i)!==0}minPost(){return W.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zs;class wg extends ll{static get __EMPTY_NODE(){return zs}static set __EMPTY_NODE(e){zs=e}compare(e,n){return Xr(e.name,n.name)}isDefinedOn(e){throw qr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return W.MIN}maxPost(){return new W(Kn,zs)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new W(e,zs)}toString(){return".key"}}const Or=new wg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Se{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Se.RED,this.left=i??He.EMPTY_NODE,this.right=s??He.EMPTY_NODE}copy(e,n,r,i,s){return new Se(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return He.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return He.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Se.RED=!0;Se.BLACK=!1;class F1{copy(e,n,r,i,s){return this}insert(e,n,r){return new Se(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class He{constructor(e,n=He.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new He(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Se.BLACK,null,null))}remove(e){return new He(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Se.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Us(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Us(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Us(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Us(this.root_,null,this.comparator_,!0,e)}}He.EMPTY_NODE=new F1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(t,e){return Xr(t.name,e.name)}function Sc(t,e){return Xr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uu;function z1(t){uu=t}const Cg=function(t){return typeof t=="number"?"number:"+Xm(t):"string:"+t},Eg=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Kt(e,".sv"),"Priority must be a string or number.")}else I(t===uu||t.isEmpty(),"priority of unexpected type.");I(t===uu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wf;class Ce{static set __childrenNodeConstructor(e){Wf=e}static get __childrenNodeConstructor(){return Wf}constructor(e,n=Ce.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Eg(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ce(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return $(e)?this:B(e)===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ce.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=B(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(I(r!==".priority"||En(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ce.__childrenNodeConstructor.EMPTY_NODE.updateChild(Z(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Cg(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Xm(this.value_):e+=this.value_,this.lazyHash_=Ym(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ce.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ce.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ce.VALUE_TYPE_ORDER.indexOf(n),s=Ce.VALUE_TYPE_ORDER.indexOf(r);return I(i>=0,"Unknown leaf type: "+n),I(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ce.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sg,xg;function U1(t){Sg=t}function B1(t){xg=t}class W1 extends ll{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Xr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return W.MIN}maxPost(){return new W(Kn,new Ce("[PRIORITY-POST]",xg))}makePost(e,n){const r=Sg(e);return new W(n,new Ce("[PRIORITY-POST]",r))}toString(){return".priority"}}const fe=new W1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1=Math.log(2);class V1{constructor(e){const n=s=>parseInt(Math.log(s)/$1,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const bo=function(t,e,n,r){t.sort(e);const i=function(a,u){const f=u-a;let c,d;if(f===0)return null;if(f===1)return c=t[a],d=n?n(c):c,new Se(d,c.node,Se.BLACK,null,null);{const y=parseInt(f/2,10)+a,v=i(a,y),E=i(y+1,u);return c=t[y],d=n?n(c):c,new Se(d,c.node,Se.BLACK,v,E)}},s=function(a){let u=null,f=null,c=t.length;const d=function(v,E){const F=c-v,g=c;c-=v;const p=i(F+1,g),_=t[F],S=n?n(_):_;y(new Se(S,_.node,E,null,p))},y=function(v){u?(u.left=v,u=v):(f=v,u=v)};for(let v=0;v<a.count;++v){const E=a.nextBitIsOne(),F=Math.pow(2,a.count-(v+1));E?d(F,Se.BLACK):(d(F,Se.BLACK),d(F,Se.RED))}return f},o=new V1(t.length),l=s(o);return new He(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let na;const dr={};class jt{static get Default(){return I(dr&&fe,"ChildrenNode.ts has not been loaded"),na=na||new jt({".priority":dr},{".priority":fe}),na}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=$r(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof He?n:null}hasIndex(e){return Kt(this.indexSet_,e.toString())}addIndex(e,n){I(e!==Or,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(W.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=bo(r,e.getCompare()):l=dr;const a=e.toString(),u={...this.indexSet_};u[a]=e;const f={...this.indexes_};return f[a]=l,new jt(f,u)}addToIndexes(e,n){const r=Io(this.indexes_,(i,s)=>{const o=$r(this.indexSet_,s);if(I(o,"Missing index implementation for "+s),i===dr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(W.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),bo(l,o.getCompare())}else return dr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new W(e.name,l))),a.insert(e,e.node)}});return new jt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Io(this.indexes_,i=>{if(i===dr)return i;{const s=n.get(e.name);return s?i.remove(new W(e.name,s)):i}});return new jt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fi;class O{static get EMPTY_NODE(){return fi||(fi=new O(new He(Sc),null,jt.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Eg(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fi}updatePriority(e){return this.children_.isEmpty()?this:new O(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?fi:n}}getChild(e){const n=B(e);return n===null?this:this.getImmediateChild(n).getChild(Z(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new W(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?fi:this.priorityNode_;return new O(i,o,s)}}updateChild(e,n){const r=B(e);if(r===null)return n;{I(B(e)!==".priority"||En(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Z(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(fe,(o,l)=>{n[o]=l.val(e),r++,s&&O.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Cg(this.getPriority().val())+":"),this.forEachChild(fe,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Ym(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new W(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new W(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new W(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,W.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,W.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ps?-1:0}withIndex(e){if(e===Or||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new O(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Or||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(fe),i=n.getIterator(fe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Or?null:this.indexMap_.get(e.toString())}}O.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class H1 extends O{constructor(){super(new He(Sc),O.EMPTY_NODE,jt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return O.EMPTY_NODE}isEmpty(){return!1}}const ps=new H1;Object.defineProperties(W,{MIN:{value:new W(Vr,O.EMPTY_NODE)},MAX:{value:new W(Kn,ps)}});wg.__EMPTY_NODE=O.EMPTY_NODE;Ce.__childrenNodeConstructor=O;z1(ps);B1(ps);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1=!0;function Te(t,e=null){if(t===null)return O.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ce(n,Te(e))}if(!(t instanceof Array)&&G1){const n=[];let r=!1;if(qe(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Te(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new W(o,a)))}}),n.length===0)return O.EMPTY_NODE;const s=bo(n,j1,o=>o.name,Sc);if(r){const o=bo(n,fe.getCompare());return new O(s,Te(e),new jt({".priority":o},{".priority":fe}))}else return new O(s,Te(e),jt.Default)}else{let n=O.EMPTY_NODE;return qe(t,(r,i)=>{if(Kt(t,r)&&r.substring(0,1)!=="."){const s=Te(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Te(e))}}U1(Te);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1 extends ll{constructor(e){super(),this.indexPath_=e,I(!$(e)&&B(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Xr(e.name,n.name):s}makePost(e,n){const r=Te(e),i=O.EMPTY_NODE.updateChild(this.indexPath_,r);return new W(n,i)}maxPost(){const e=O.EMPTY_NODE.updateChild(this.indexPath_,ps);return new W(Kn,e)}toString(){return _g(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1 extends ll{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Xr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return W.MIN}maxPost(){return W.MAX}makePost(e,n){const r=Te(e);return new W(n,r)}toString(){return".value"}}const K1=new Y1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(t){return{type:"value",snapshotNode:t}}function Hr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function es(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ts(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function q1(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(es(n,l)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Hr(n,r)):o.trackChildChange(ts(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(fe,(i,s)=>{n.hasChild(i)||r.trackChildChange(es(i,s))}),n.isLeafNode()||n.forEachChild(fe,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ts(i,s,o))}else r.trackChildChange(Hr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?O.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.indexedFilter_=new xc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ns.getStartPost_(e),this.endPost_=ns.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new W(n,r))||(r=O.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=O.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(O.EMPTY_NODE);const s=this;return n.forEachChild(fe,(o,l)=>{s.matches(new W(o,l))||(i=i.updateImmediateChild(o,O.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ns(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new W(n,r))||(r=O.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=O.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=O.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(O.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,O.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(d,y)=>c(y,d)}else o=this.index_.getCompare();const l=e;I(l.numChildren()===this.limit_,"");const a=new W(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),f=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const y=d==null?1:o(d,a);if(f&&!r.isEmpty()&&y>=0)return s!=null&&s.trackChildChange(ts(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(es(n,c));const E=l.updateImmediateChild(n,O.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(Hr(d.name,d.node)),E.updateImmediateChild(d.name,d.node)):E}}else return r.isEmpty()?e:f&&o(u,a)>=0?(s!=null&&(s.trackChildChange(es(u.name,u.node)),s.trackChildChange(Hr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,O.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Vr}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Kn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===fe}copy(){const e=new kc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function J1(t){return t.loadsAllData()?new xc(t.getIndex()):t.hasLimit()?new X1(t):new ns(t)}function $f(t){const e={};if(t.isDefault())return e;let n;if(t.index_===fe?n="$priority":t.index_===K1?n="$value":t.index_===Or?n="$key":(I(t.index_ instanceof Q1,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=xe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=xe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+xe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=xe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+xe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Vf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==fe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao extends pg{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=hs("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ao.getListenId_(e,r),l={};this.listens_[o]=l;const a=$f(e._queryParams);this.restRequest_(s+".json",a,(u,f)=>{let c=f;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),$r(this.listens_,o)===l){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=Ao.getListenId_(e,n);delete this.listens_[r]}get(e){const n=$f(e._queryParams),r=e._path.toString(),i=new sl;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+x0(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=qi(l.responseText)}catch{Ke("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Ke("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(){this.rootNode_=O.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(){return{value:null,children:new Map}}function Ig(t,e,n){if($(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=B(e);t.children.has(r)||t.children.set(r,Oo());const i=t.children.get(r);e=Z(e),Ig(i,e,n)}}function cu(t,e,n){t.value!==null?n(e,t.value):eC(t,(r,i)=>{const s=new q(e.toString()+"/"+r);cu(i,s,n)})}function eC(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&qe(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf=10*1e3,nC=30*1e3,rC=5*60*1e3;class iC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new tC(e);const r=Hf+(nC-Hf)*Math.random();Ri(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;qe(e,(i,s)=>{s>0&&Kt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ri(this.reportStats_.bind(this),Math.floor(Math.random()*2*rC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _t;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(_t||(_t={}));function Ng(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ic(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Nc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=_t.ACK_USER_WRITE,this.source=Ng()}operationForChild(e){if($(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new q(e));return new Mo(Q(),n,this.revert)}}else return I(B(this.path)===e,"operationForChild called for unrelated child."),new Mo(Z(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n){this.source=e,this.path=n,this.type=_t.LISTEN_COMPLETE}operationForChild(e){return $(this.path)?new rs(this.source,Q()):new rs(this.source,Z(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=_t.OVERWRITE}operationForChild(e){return $(this.path)?new qn(this.source,Q(),this.snap.getImmediateChild(e)):new qn(this.source,Z(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=_t.MERGE}operationForChild(e){if($(this.path)){const n=this.children.subtree(new q(e));return n.isEmpty()?null:n.value?new qn(this.source,Q(),n.value):new is(this.source,Q(),n)}else return I(B(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new is(this.source,Z(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if($(e))return this.isFullyInitialized()&&!this.filtered_;const n=B(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function oC(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(q1(o.childName,o.snapshotNode))}),hi(t,i,"child_removed",e,r,n),hi(t,i,"child_added",e,r,n),hi(t,i,"child_moved",s,r,n),hi(t,i,"child_changed",e,r,n),hi(t,i,"value",e,r,n),i}function hi(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>aC(t,l,a)),o.forEach(l=>{const a=lC(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function lC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function aC(t,e,n){if(e.childName==null||n.childName==null)throw qr("Should only compare child_ events.");const r=new W(e.childName,e.snapshotNode),i=new W(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(t,e){return{eventCache:t,serverCache:e}}function Pi(t,e,n,r){return al(new Xn(e,n,r),t.serverCache)}function Tg(t,e,n,r){return al(t.eventCache,new Xn(e,n,r))}function du(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Jn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ra;const uC=()=>(ra||(ra=new He(Yw)),ra);class ie{static fromObject(e){let n=new ie(null);return qe(e,(r,i)=>{n=n.set(new q(r),i)}),n}constructor(e,n=uC()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Q(),value:this.value};if($(e))return null;{const r=B(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Z(e),n);return s!=null?{path:ve(new q(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if($(e))return this;{const n=B(e),r=this.children.get(n);return r!==null?r.subtree(Z(e)):new ie(null)}}set(e,n){if($(e))return new ie(n,this.children);{const r=B(e),s=(this.children.get(r)||new ie(null)).set(Z(e),n),o=this.children.insert(r,s);return new ie(this.value,o)}}remove(e){if($(e))return this.children.isEmpty()?new ie(null):new ie(null,this.children);{const n=B(e),r=this.children.get(n);if(r){const i=r.remove(Z(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ie(null):new ie(this.value,s)}else return this}}get(e){if($(e))return this.value;{const n=B(e),r=this.children.get(n);return r?r.get(Z(e)):null}}setTree(e,n){if($(e))return n;{const r=B(e),s=(this.children.get(r)||new ie(null)).setTree(Z(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ie(this.value,o)}}fold(e){return this.fold_(Q(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ve(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Q(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if($(e))return null;{const s=B(e),o=this.children.get(s);return o?o.findOnPath_(Z(e),ve(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Q(),n)}foreachOnPath_(e,n,r){if($(e))return this;{this.value&&r(n,this.value);const i=B(e),s=this.children.get(i);return s?s.foreachOnPath_(Z(e),ve(n,i),r):new ie(null)}}foreach(e){this.foreach_(Q(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ve(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.writeTree_=e}static empty(){return new wt(new ie(null))}}function Di(t,e,n){if($(e))return new wt(new ie(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ve(i,e);return s=s.updateChild(o,n),new wt(t.writeTree_.set(i,s))}else{const i=new ie(n),s=t.writeTree_.setTree(e,i);return new wt(s)}}}function Gf(t,e,n){let r=t;return qe(n,(i,s)=>{r=Di(r,ve(e,i),s)}),r}function Qf(t,e){if($(e))return wt.empty();{const n=t.writeTree_.setTree(e,new ie(null));return new wt(n)}}function fu(t,e){return tr(t,e)!=null}function tr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ve(n.path,e)):null}function Yf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(fe,(r,i)=>{e.push(new W(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new W(r,i.value))}),e}function vn(t,e){if($(e))return t;{const n=tr(t,e);return n!=null?new wt(new ie(n)):new wt(t.writeTree_.subtree(e))}}function hu(t){return t.writeTree_.isEmpty()}function Gr(t,e){return Rg(Q(),t.writeTree_,e)}function Rg(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(I(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Rg(ve(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ve(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(t,e){return Ag(e,t)}function cC(t,e,n,r,i){I(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Di(t.visibleWrites,e,n)),t.lastWriteId=r}function dC(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function fC(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&hC(l,r.path)?i=!1:gt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return pC(t),!0;if(r.snap)t.visibleWrites=Qf(t.visibleWrites,r.path);else{const l=r.children;qe(l,a=>{t.visibleWrites=Qf(t.visibleWrites,ve(r.path,a))})}return!0}else return!1}function hC(t,e){if(t.snap)return gt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&gt(ve(t.path,n),e))return!0;return!1}function pC(t){t.visibleWrites=Pg(t.allWrites,mC,Q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function mC(t){return t.visible}function Pg(t,e,n){let r=wt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)gt(n,o)?(l=Ve(n,o),r=Di(r,l,s.snap)):gt(o,n)&&(l=Ve(o,n),r=Di(r,Q(),s.snap.getChild(l)));else if(s.children){if(gt(n,o))l=Ve(n,o),r=Gf(r,l,s.children);else if(gt(o,n))if(l=Ve(o,n),$(l))r=Gf(r,Q(),s.children);else{const a=$r(s.children,B(l));if(a){const u=a.getChild(Z(l));r=Di(r,Q(),u)}}}else throw qr("WriteRecord should have .snap or .children")}}return r}function Dg(t,e,n,r,i){if(!r&&!i){const s=tr(t.visibleWrites,e);if(s!=null)return s;{const o=vn(t.visibleWrites,e);if(hu(o))return n;if(n==null&&!fu(o,Q()))return null;{const l=n||O.EMPTY_NODE;return Gr(o,l)}}}else{const s=vn(t.visibleWrites,e);if(!i&&hu(s))return n;if(!i&&n==null&&!fu(s,Q()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(gt(u.path,e)||gt(e,u.path))},l=Pg(t.allWrites,o,e),a=n||O.EMPTY_NODE;return Gr(l,a)}}}function gC(t,e,n){let r=O.EMPTY_NODE;const i=tr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(fe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=vn(t.visibleWrites,e);return n.forEachChild(fe,(o,l)=>{const a=Gr(vn(s,new q(o)),l);r=r.updateImmediateChild(o,a)}),Yf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=vn(t.visibleWrites,e);return Yf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function _C(t,e,n,r,i){I(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ve(e,n);if(fu(t.visibleWrites,s))return null;{const o=vn(t.visibleWrites,s);return hu(o)?i.getChild(n):Gr(o,i.getChild(n))}}function yC(t,e,n,r){const i=ve(e,n),s=tr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=vn(t.visibleWrites,i);return Gr(o,r.getNode().getImmediateChild(n))}else return null}function vC(t,e){return tr(t.visibleWrites,e)}function wC(t,e,n,r,i,s,o){let l;const a=vn(t.visibleWrites,e),u=tr(a,Q());if(u!=null)l=u;else if(n!=null)l=Gr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const f=[],c=o.getCompare(),d=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let y=d.getNext();for(;y&&f.length<i;)c(y,r)!==0&&f.push(y),y=d.getNext();return f}else return[]}function CC(){return{visibleWrites:wt.empty(),allWrites:[],lastWriteId:-1}}function Lo(t,e,n,r){return Dg(t.writeTree,t.treePath,e,n,r)}function Rc(t,e){return gC(t.writeTree,t.treePath,e)}function Kf(t,e,n,r){return _C(t.writeTree,t.treePath,e,n,r)}function Fo(t,e){return vC(t.writeTree,ve(t.treePath,e))}function EC(t,e,n,r,i,s){return wC(t.writeTree,t.treePath,e,n,r,i,s)}function Pc(t,e,n){return yC(t.writeTree,t.treePath,e,n)}function bg(t,e){return Ag(ve(t.treePath,e),t.writeTree)}function Ag(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ts(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,es(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Hr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ts(r,e.snapshotNode,i.oldSnap));else throw qr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Og=new xC;class Dc{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Xn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Pc(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Jn(this.viewCache_),s=EC(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kC(t){return{filter:t}}function IC(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function NC(t,e,n,r,i){const s=new SC;let o,l;if(n.type===_t.OVERWRITE){const u=n;u.source.fromUser?o=pu(t,e,u.path,u.snap,r,i,s):(I(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!$(u.path),o=jo(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===_t.MERGE){const u=n;u.source.fromUser?o=RC(t,e,u.path,u.children,r,i,s):(I(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=mu(t,e,u.path,u.children,r,i,l,s))}else if(n.type===_t.ACK_USER_WRITE){const u=n;u.revert?o=bC(t,e,u.path,r,i,s):o=PC(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===_t.LISTEN_COMPLETE)o=DC(t,e,n.path,r,s);else throw qr("Unknown operation type: "+n.type);const a=s.getChanges();return TC(e,o,a),{viewCache:o,changes:a}}function TC(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=du(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(kg(du(e)))}}function Mg(t,e,n,r,i,s){const o=e.eventCache;if(Fo(r,n)!=null)return e;{let l,a;if($(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Jn(e),f=u instanceof O?u:O.EMPTY_NODE,c=Rc(r,f);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=Lo(r,Jn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=B(n);if(u===".priority"){I(En(n)===1,"Can't have a priority with additional path components");const f=o.getNode();a=e.serverCache.getNode();const c=Kf(r,n,f,a);c!=null?l=t.filter.updatePriority(f,c):l=o.getNode()}else{const f=Z(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const d=Kf(r,n,o.getNode(),a);d!=null?c=o.getNode().getImmediateChild(u).updateChild(f,d):c=o.getNode().getImmediateChild(u)}else c=Pc(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,f,i,s):l=o.getNode()}}return Pi(e,l,o.isFullyInitialized()||$(n),t.filter.filtersNodes())}}function jo(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const f=o?t.filter:t.filter.getIndexedFilter();if($(n))u=f.updateFullNode(a.getNode(),r,null);else if(f.filtersNodes()&&!a.isFiltered()){const y=a.getNode().updateChild(n,r);u=f.updateFullNode(a.getNode(),y,null)}else{const y=B(n);if(!a.isCompleteForPath(n)&&En(n)>1)return e;const v=Z(n),F=a.getNode().getImmediateChild(y).updateChild(v,r);y===".priority"?u=f.updatePriority(a.getNode(),F):u=f.updateChild(a.getNode(),y,F,v,Og,null)}const c=Tg(e,u,a.isFullyInitialized()||$(n),f.filtersNodes()),d=new Dc(i,c,s);return Mg(t,c,n,i,d,l)}function pu(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const f=new Dc(i,e,s);if($(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Pi(e,u,!0,t.filter.filtersNodes());else{const c=B(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Pi(e,u,l.isFullyInitialized(),l.isFiltered());else{const d=Z(n),y=l.getNode().getImmediateChild(c);let v;if($(d))v=r;else{const E=f.getCompleteChild(c);E!=null?gg(d)===".priority"&&E.getChild(yg(d)).isEmpty()?v=E:v=E.updateChild(d,r):v=O.EMPTY_NODE}if(y.equals(v))a=e;else{const E=t.filter.updateChild(l.getNode(),c,v,d,f,o);a=Pi(e,E,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function qf(t,e){return t.eventCache.isCompleteForChild(e)}function RC(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const f=ve(n,a);qf(e,B(f))&&(l=pu(t,l,f,u,i,s,o))}),r.foreach((a,u)=>{const f=ve(n,a);qf(e,B(f))||(l=pu(t,l,f,u,i,s,o))}),l}function Xf(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function mu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;$(n)?u=r:u=new ie(null).setTree(n,r);const f=e.serverCache.getNode();return u.children.inorderTraversal((c,d)=>{if(f.hasChild(c)){const y=e.serverCache.getNode().getImmediateChild(c),v=Xf(t,y,d);a=jo(t,a,new q(c),v,i,s,o,l)}}),u.children.inorderTraversal((c,d)=>{const y=!e.serverCache.isCompleteForChild(c)&&d.value===null;if(!f.hasChild(c)&&!y){const v=e.serverCache.getNode().getImmediateChild(c),E=Xf(t,v,d);a=jo(t,a,new q(c),E,i,s,o,l)}}),a}function PC(t,e,n,r,i,s,o){if(Fo(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if($(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return jo(t,e,n,a.getNode().getChild(n),i,s,l,o);if($(n)){let u=new ie(null);return a.getNode().forEachChild(Or,(f,c)=>{u=u.set(new q(f),c)}),mu(t,e,n,u,i,s,l,o)}else return e}else{let u=new ie(null);return r.foreach((f,c)=>{const d=ve(n,f);a.isCompleteForPath(d)&&(u=u.set(f,a.getNode().getChild(d)))}),mu(t,e,n,u,i,s,l,o)}}function DC(t,e,n,r,i){const s=e.serverCache,o=Tg(e,s.getNode(),s.isFullyInitialized()||$(n),s.isFiltered());return Mg(t,o,n,r,Og,i)}function bC(t,e,n,r,i,s){let o;if(Fo(r,n)!=null)return e;{const l=new Dc(r,e,i),a=e.eventCache.getNode();let u;if($(n)||B(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=Lo(r,Jn(e));else{const c=e.serverCache.getNode();I(c instanceof O,"serverChildren would be complete if leaf node"),f=Rc(r,c)}f=f,u=t.filter.updateFullNode(a,f,s)}else{const f=B(n);let c=Pc(r,f,e.serverCache);c==null&&e.serverCache.isCompleteForChild(f)&&(c=a.getImmediateChild(f)),c!=null?u=t.filter.updateChild(a,f,c,Z(n),l,s):e.eventCache.getNode().hasChild(f)?u=t.filter.updateChild(a,f,O.EMPTY_NODE,Z(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Lo(r,Jn(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Fo(r,Q())!=null,Pi(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new xc(r.getIndex()),s=J1(r);this.processor_=kC(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(O.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(O.EMPTY_NODE,l.getNode(),null),f=new Xn(a,o.isFullyInitialized(),i.filtersNodes()),c=new Xn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=al(c,f),this.eventGenerator_=new sC(this.query_)}get query(){return this.query_}}function OC(t){return t.viewCache_.serverCache.getNode()}function MC(t,e){const n=Jn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!$(e)&&!n.getImmediateChild(B(e)).isEmpty())?n.getChild(e):null}function Jf(t){return t.eventRegistrations_.length===0}function LC(t,e){t.eventRegistrations_.push(e)}function Zf(t,e,n){const r=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function eh(t,e,n,r){e.type===_t.MERGE&&e.source.queryId!==null&&(I(Jn(t.viewCache_),"We should always have a full cache before handling merges"),I(du(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=NC(t.processor_,i,e,n,r);return IC(t.processor_,s.viewCache),I(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Lg(t,s.changes,s.viewCache.eventCache.getNode(),null)}function FC(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(fe,(s,o)=>{r.push(Hr(s,o))}),n.isFullyInitialized()&&r.push(kg(n.getNode())),Lg(t,r,n.getNode(),e)}function Lg(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return oC(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zo;class jC{constructor(){this.views=new Map}}function zC(t){I(!zo,"__referenceConstructor has already been defined"),zo=t}function UC(){return I(zo,"Reference.ts has not been loaded"),zo}function BC(t){return t.views.size===0}function bc(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return I(s!=null,"SyncTree gave us an op for an invalid query."),eh(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(eh(o,e,n,r));return s}}function WC(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Lo(n,i?r:null),a=!1;l?a=!0:r instanceof O?(l=Rc(n,r),a=!1):(l=O.EMPTY_NODE,a=!1);const u=al(new Xn(l,a,!1),new Xn(r,i,!1));return new AC(e,u)}return o}function $C(t,e,n,r,i,s){const o=WC(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),LC(o,n),FC(o,n)}function VC(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Sn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Zf(u,n,r)),Jf(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Zf(a,n,r)),Jf(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Sn(t)&&s.push(new(UC())(e._repo,e._path)),{removed:s,events:o}}function Fg(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Mr(t,e){let n=null;for(const r of t.views.values())n=n||MC(r,e);return n}function jg(t,e){if(e._queryParams.loadsAllData())return ul(t);{const r=e._queryIdentifier;return t.views.get(r)}}function zg(t,e){return jg(t,e)!=null}function Sn(t){return ul(t)!=null}function ul(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uo;function HC(t){I(!Uo,"__referenceConstructor has already been defined"),Uo=t}function GC(){return I(Uo,"Reference.ts has not been loaded"),Uo}let QC=1;class th{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ie(null),this.pendingWriteTree_=CC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ug(t,e,n,r,i){return cC(t.pendingWriteTree_,e,n,r,i),i?ms(t,new qn(Ng(),e,n)):[]}function Bn(t,e,n=!1){const r=dC(t.pendingWriteTree_,e);if(fC(t.pendingWriteTree_,e)){let s=new ie(null);return r.snap!=null?s=s.set(Q(),!0):qe(r.children,o=>{s=s.set(new q(o),!0)}),ms(t,new Mo(r.path,s,n))}else return[]}function cl(t,e,n){return ms(t,new qn(Ic(),e,n))}function YC(t,e,n){const r=ie.fromObject(n);return ms(t,new is(Ic(),e,r))}function KC(t,e){return ms(t,new rs(Ic(),e))}function qC(t,e,n){const r=Oc(t,n);if(r){const i=Mc(r),s=i.path,o=i.queryId,l=Ve(s,e),a=new rs(Nc(o),l);return Lc(t,s,a)}else return[]}function gu(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||zg(o,e))){const a=VC(o,e,n,r);BC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const f=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(d,y)=>Sn(y));if(f&&!c){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const y=ZC(d);for(let v=0;v<y.length;++v){const E=y[v],F=E.query,g=$g(t,E);t.listenProvider_.startListening(bi(F),Bo(t,F),g.hashFn,g.onComplete)}}}!c&&u.length>0&&!r&&(f?t.listenProvider_.stopListening(bi(e),null):u.forEach(d=>{const y=t.queryToTagMap.get(dl(d));t.listenProvider_.stopListening(bi(d),y)}))}eE(t,u)}return l}function XC(t,e,n,r){const i=Oc(t,r);if(i!=null){const s=Mc(i),o=s.path,l=s.queryId,a=Ve(o,e),u=new qn(Nc(l),a,n);return Lc(t,o,u)}else return[]}function JC(t,e,n,r){const i=Oc(t,r);if(i){const s=Mc(i),o=s.path,l=s.queryId,a=Ve(o,e),u=ie.fromObject(n),f=new is(Nc(l),a,u);return Lc(t,o,f)}else return[]}function nh(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,y)=>{const v=Ve(d,i);s=s||Mr(y,v),o=o||Sn(y)});let l=t.syncPointTree_.get(i);l?(o=o||Sn(l),s=s||Mr(l,Q())):(l=new jC,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=O.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((y,v)=>{const E=Mr(v,Q());E&&(s=s.updateImmediateChild(y,E))}));const u=zg(l,e);if(!u&&!e._queryParams.loadsAllData()){const d=dl(e);I(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const y=tE();t.queryToTagMap.set(d,y),t.tagToQueryMap.set(y,d)}const f=Tc(t.pendingWriteTree_,i);let c=$C(l,e,n,f,s,a);if(!u&&!o&&!r){const d=jg(l,e);c=c.concat(nE(t,e,d))}return c}function Ac(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ve(o,e),u=Mr(l,a);if(u)return u});return Dg(i,e,s,n,!0)}function ms(t,e){return Bg(e,t.syncPointTree_,null,Tc(t.pendingWriteTree_,Q()))}function Bg(t,e,n,r){if($(t.path))return Wg(t,e,n,r);{const i=e.get(Q());n==null&&i!=null&&(n=Mr(i,Q()));let s=[];const o=B(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,f=bg(r,o);s=s.concat(Bg(l,a,u,f))}return i&&(s=s.concat(bc(i,t,r,n))),s}}function Wg(t,e,n,r){const i=e.get(Q());n==null&&i!=null&&(n=Mr(i,Q()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=bg(r,o),f=t.operationForChild(o);f&&(s=s.concat(Wg(f,l,a,u)))}),i&&(s=s.concat(bc(i,t,r,n))),s}function $g(t,e){const n=e.query,r=Bo(t,n);return{hashFn:()=>(OC(e)||O.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?qC(t,n._path,r):KC(t,n._path);{const s=Xw(i,n);return gu(t,n,null,s)}}}}function Bo(t,e){const n=dl(e);return t.queryToTagMap.get(n)}function dl(t){return t._path.toString()+"$"+t._queryIdentifier}function Oc(t,e){return t.tagToQueryMap.get(e)}function Mc(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new q(t.substr(0,e))}}function Lc(t,e,n){const r=t.syncPointTree_.get(e);I(r,"Missing sync point for query tag that we're tracking");const i=Tc(t.pendingWriteTree_,e);return bc(r,n,i,null)}function ZC(t){return t.fold((e,n,r)=>{if(n&&Sn(n))return[ul(n)];{let i=[];return n&&(i=Fg(n)),qe(r,(s,o)=>{i=i.concat(o)}),i}})}function bi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(GC())(t._repo,t._path):t}function eE(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=dl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function tE(){return QC++}function nE(t,e,n){const r=e._path,i=Bo(t,e),s=$g(t,n),o=t.listenProvider_.startListening(bi(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)I(!Sn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,f,c)=>{if(!$(u)&&f&&Sn(f))return[ul(f).query];{let d=[];return f&&(d=d.concat(Fg(f).map(y=>y.query))),qe(c,(y,v)=>{d=d.concat(v)}),d}});for(let u=0;u<a.length;++u){const f=a[u];t.listenProvider_.stopListening(bi(f),Bo(t,f))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Fc(n)}node(){return this.node_}}class jc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ve(this.path_,e);return new jc(this.syncTree_,n)}node(){return Ac(this.syncTree_,this.path_)}}const rE=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},rh=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return iE(t[".sv"],e,n);if(typeof t[".sv"]=="object")return sE(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},iE=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},sE=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&I(!1,"Unexpected increment value: "+r);const i=e.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},oE=function(t,e,n,r){return zc(e,new jc(n,t),r)},Vg=function(t,e,n){return zc(t,new Fc(e),n)};function zc(t,e,n){const r=t.getPriority().val(),i=rh(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=rh(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Ce(l,Te(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ce(i))),o.forEachChild(fe,(l,a)=>{const u=zc(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Bc(t,e){let n=e instanceof q?e:new q(e),r=t,i=B(n);for(;i!==null;){const s=$r(r.node.children,i)||{children:{},childCount:0};r=new Uc(i,r,s),n=Z(n),i=B(n)}return r}function Zr(t){return t.node.value}function Hg(t,e){t.node.value=e,_u(t)}function Gg(t){return t.node.childCount>0}function lE(t){return Zr(t)===void 0&&!Gg(t)}function fl(t,e){qe(t.node.children,(n,r)=>{e(new Uc(n,t,r))})}function Qg(t,e,n,r){n&&e(t),fl(t,i=>{Qg(i,e,!0)})}function aE(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function gs(t){return new q(t.parent===null?t.name:gs(t.parent)+"/"+t.name)}function _u(t){t.parent!==null&&uE(t.parent,t.name,t)}function uE(t,e,n){const r=lE(n),i=Kt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,_u(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,_u(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE=/[\[\].#$\/\u0000-\u001F\u007F]/,dE=/[\[\].#$\u0000-\u001F\u007F]/,ia=10*1024*1024,Yg=function(t){return typeof t=="string"&&t.length!==0&&!cE.test(t)},Kg=function(t){return typeof t=="string"&&t.length!==0&&!dE.test(t)},fE=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Kg(t)},hE=function(t,e,n,r){Wc(mc(t,"value"),e,n)},Wc=function(t,e,n){const r=n instanceof q?new P1(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ln(r));if(typeof e=="function")throw new Error(t+"contains a function "+Ln(r)+" with contents = "+e.toString());if(Km(e))throw new Error(t+"contains "+e.toString()+" "+Ln(r));if(typeof e=="string"&&e.length>ia/3&&ol(e)>ia)throw new Error(t+"contains a string greater than "+ia+" utf8 bytes "+Ln(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(qe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Yg(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ln(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);D1(r,o),Wc(t,l,r),b1(r)}),i&&s)throw new Error(t+' contains ".value" child '+Ln(r)+" in addition to actual children.")}},qg=function(t,e,n,r){if(!Kg(n))throw new Error(mc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},pE=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),qg(t,e,n)},mE=function(t,e){if(B(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},gE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Yg(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!fE(n))throw new Error(mc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function $c(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Cc(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Xg(t,e,n){$c(t,n),Jg(t,r=>Cc(r,e))}function Qt(t,e,n){$c(t,n),Jg(t,r=>gt(r,e)||gt(e,r))}function Jg(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(yE(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function yE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ti&&Me("event: "+n.toString()),Jr(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE="repo_interrupt",wE=25;class CE{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new _E,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Oo(),this.transactionQueueTree_=new Uc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function EE(t,e,n){if(t.stats_=vc(t.repoInfo_),t.forceRestClient_||t1())t.server_=new Ao(t.repoInfo_,(r,i,s,o)=>{ih(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>sh(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{xe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Ut(t.repoInfo_,e,(r,i,s,o)=>{ih(t,r,i,s,o)},r=>{sh(t,r)},r=>{xE(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=o1(t.repoInfo_,()=>new iC(t.stats_,t.server_)),t.infoData_=new Z1,t.infoSyncTree_=new th({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=cl(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Hc(t,"connected",!1),t.serverSyncTree_=new th({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Qt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function SE(t){const n=t.infoData_.getNode(new q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Vc(t){return rE({timestamp:SE(t)})}function ih(t,e,n,r,i){t.dataUpdateCount++;const s=new q(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Io(n,u=>Te(u));o=JC(t.serverSyncTree_,s,a,i)}else{const a=Te(n);o=XC(t.serverSyncTree_,s,a,i)}else if(r){const a=Io(n,u=>Te(u));o=YC(t.serverSyncTree_,s,a)}else{const a=Te(n);o=cl(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=hl(t,s)),Qt(t.eventQueue_,l,o)}function sh(t,e){Hc(t,"connected",e),e===!1&&IE(t)}function xE(t,e){qe(e,(n,r)=>{Hc(t,n,r)})}function Hc(t,e,n){const r=new q("/.info/"+e),i=Te(n);t.infoData_.updateSnapshot(r,i);const s=cl(t.infoSyncTree_,r,i);Qt(t.eventQueue_,r,s)}function Zg(t){return t.nextWriteId_++}function kE(t,e,n,r,i){Gc(t,"set",{path:e.toString(),value:n,priority:r});const s=Vc(t),o=Te(n,r),l=Ac(t.serverSyncTree_,e),a=Vg(o,l,s),u=Zg(t),f=Ug(t.serverSyncTree_,e,a,u,!0);$c(t.eventQueue_,f),t.server_.put(e.toString(),o.val(!0),(d,y)=>{const v=d==="ok";v||Ke("set at "+e+" failed: "+d);const E=Bn(t.serverSyncTree_,u,!v);Qt(t.eventQueue_,e,E),RE(t,i,d,y)});const c=i_(t,e);hl(t,c),Qt(t.eventQueue_,c,[])}function IE(t){Gc(t,"onDisconnectEvents");const e=Vc(t),n=Oo();cu(t.onDisconnect_,Q(),(i,s)=>{const o=oE(i,s,t.serverSyncTree_,e);Ig(n,i,o)});let r=[];cu(n,Q(),(i,s)=>{r=r.concat(cl(t.serverSyncTree_,i,s));const o=i_(t,i);hl(t,o)}),t.onDisconnect_=Oo(),Qt(t.eventQueue_,Q(),r)}function NE(t,e,n){let r;B(e._path)===".info"?r=nh(t.infoSyncTree_,e,n):r=nh(t.serverSyncTree_,e,n),Xg(t.eventQueue_,e._path,r)}function oh(t,e,n){let r;B(e._path)===".info"?r=gu(t.infoSyncTree_,e,n):r=gu(t.serverSyncTree_,e,n),Xg(t.eventQueue_,e._path,r)}function TE(t){t.persistentConnection_&&t.persistentConnection_.interrupt(vE)}function Gc(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Me(n,...e)}function RE(t,e,n,r){e&&Jr(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function e_(t,e,n){return Ac(t.serverSyncTree_,e,n)||O.EMPTY_NODE}function Qc(t,e=t.transactionQueueTree_){if(e||pl(t,e),Zr(e)){const n=n_(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&PE(t,gs(e),n)}else Gg(e)&&fl(e,n=>{Qc(t,n)})}function PE(t,e,n){const r=n.map(u=>u.currentWriteId),i=e_(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const f=n[u];I(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const c=Ve(e,f.path);s=s.updateChild(c,f.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Gc(t,"transaction put response",{path:a.toString(),status:u});let f=[];if(u==="ok"){const c=[];for(let d=0;d<n.length;d++)n[d].status=2,f=f.concat(Bn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&c.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();pl(t,Bc(t.transactionQueueTree_,e)),Qc(t,t.transactionQueueTree_),Qt(t.eventQueue_,e,f);for(let d=0;d<c.length;d++)Jr(c[d])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{Ke("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}hl(t,e)}},o)}function hl(t,e){const n=t_(t,e),r=gs(n),i=n_(t,n);return DE(t,i,r),r}function DE(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Ve(n,a.path);let f=!1,c;if(I(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)f=!0,c=a.abortReason,i=i.concat(Bn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=wE)f=!0,c="maxretry",i=i.concat(Bn(t.serverSyncTree_,a.currentWriteId,!0));else{const d=e_(t,a.path,o);a.currentInputSnapshot=d;const y=e[l].update(d.val());if(y!==void 0){Wc("transaction failed: Data returned ",y,a.path);let v=Te(y);typeof y=="object"&&y!=null&&Kt(y,".priority")||(v=v.updatePriority(d.getPriority()));const F=a.currentWriteId,g=Vc(t),p=Vg(v,d,g);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=p,a.currentWriteId=Zg(t),o.splice(o.indexOf(F),1),i=i.concat(Ug(t.serverSyncTree_,a.path,p,a.currentWriteId,a.applyLocally)),i=i.concat(Bn(t.serverSyncTree_,F,!0))}else f=!0,c="nodata",i=i.concat(Bn(t.serverSyncTree_,a.currentWriteId,!0))}Qt(t.eventQueue_,n,i),i=[],f&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}pl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Jr(r[l]);Qc(t,t.transactionQueueTree_)}function t_(t,e){let n,r=t.transactionQueueTree_;for(n=B(e);n!==null&&Zr(r)===void 0;)r=Bc(r,n),e=Z(e),n=B(e);return r}function n_(t,e){const n=[];return r_(t,e,n),n.sort((r,i)=>r.order-i.order),n}function r_(t,e,n){const r=Zr(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);fl(e,i=>{r_(t,i,n)})}function pl(t,e){const n=Zr(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Hg(e,n.length>0?n:void 0)}fl(e,r=>{pl(t,r)})}function i_(t,e){const n=gs(t_(t,e)),r=Bc(t.transactionQueueTree_,e);return aE(r,i=>{sa(t,i)}),sa(t,r),Qg(r,i=>{sa(t,i)}),n}function sa(t,e){const n=Zr(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Bn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Hg(e,void 0):n.length=s+1,Qt(t.eventQueue_,gs(e),i);for(let o=0;o<r.length;o++)Jr(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function AE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ke(`Invalid query segment '${n}' in query '${t}'`)}return e}const lh=function(t,e){const n=OE(t),r=n.namespace;n.domain==="firebase.com"&&Gt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Gt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Gw();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new lg(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new q(n.pathString)}},OE=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let f=t.indexOf("/");f===-1&&(f=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(f,c)),f<c&&(i=bE(t.substring(f,c)));const d=AE(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const y=e.slice(0,u);if(y.toLowerCase()==="localhost")n="localhost";else if(y.split(".").length<=2)n=y;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+xe(this.snapshot.exportVal())}}class LE{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return $(this._path)?null:gg(this._path)}get ref(){return new Nn(this._repo,this._path)}get _queryIdentifier(){const e=Vf(this._queryParams),n=_c(e);return n==="{}"?"default":n}get _queryObject(){return Vf(this._queryParams)}isEqual(e){if(e=ds(e),!(e instanceof Yc))return!1;const n=this._repo===e._repo,r=Cc(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+R1(this._path)}}class Nn extends Yc{constructor(e,n){super(e,n,new kc,!1)}get parent(){const e=yg(this._path);return e===null?null:new Nn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Wo{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new q(e),r=yu(this.ref,e);return new Wo(this._node.getChild(n),r,fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Wo(i,yu(this.ref,r),fe)))}hasChild(e){const n=new q(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ah(t,e){return t=ds(t),t._checkNotDeleted("ref"),e!==void 0?yu(t._root,e):t._root}function yu(t,e){return t=ds(t),B(t._path)===null?pE("child","path",e):qg("child","path",e),new Nn(t._repo,ve(t._path,e))}function jE(t,e){t=ds(t),mE("set",t._path),hE("set",e,t._path);const n=new sl;return kE(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Kc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new ME("value",this,new Wo(e.snapshotNode,new Nn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new LE(this,e,n):null}matches(e){return e instanceof Kc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function zE(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(f,c)=>{oh(t._repo,t,l),a(f,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new FE(n,s||void 0),l=new Kc(o);return NE(t._repo,t,l),()=>oh(t._repo,t,l)}function UE(t,e,n,r){return zE(t,"value",e,n,r)}zC(Nn);HC(Nn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE="FIREBASE_DATABASE_EMULATOR_HOST",vu={};let WE=!1;function $E(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=zm(s);t.repoInfo_=new lg(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function VE(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Gt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Me("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=lh(s,i),l=o.repoInfo,a;typeof process<"u"&&If&&(a=If[BE]),a?(s=`http://${a}?ns=${l.namespace}`,o=lh(s,i),l=o.repoInfo):o.repoInfo.secure;const u=new r1(t.name,t.options,e);gE("Invalid Firebase Database URL",o),$(o.path)||Gt("Database URL must point to the root of a Firebase Database (not including a child path).");const f=GE(l,t,u,new n1(t,n));return new QE(f,t)}function HE(t,e){const n=vu[e];(!n||n[t.key]!==t)&&Gt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),TE(t),delete n[t.key]}function GE(t,e,n,r){let i=vu[e.name];i||(i={},vu[e.name]=i);let s=i[t.toURLString()];return s&&Gt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new CE(t,WE,n,r),i[t.toURLString()]=s,s}class QE{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(EE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Nn(this._repo,Q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(HE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Gt("Cannot call "+e+" on a deleted database.")}}function YE(t=Rw(),e){const n=xw(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=f0("database");r&&KE(n,...r)}return n}function KE(t,e,n,r={}){t=ds(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&No(r,s.repoInfo_.emulatorOptions))return;Gt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&Gt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Zs(Zs.OWNER);else if(r.mockUserToken){const l=typeof r.mockUserToken=="string"?r.mockUserToken:h0(r.mockUserToken,t.app.options.projectId);o=new Zs(l)}zm(e)&&N0(e),$E(s,i,r,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(t){Uw(Tw),Ro(new Xi("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return VE(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),br(Nf,Tf,t),br(Nf,Tf,"esm2020")}Ut.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ut.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};qE();var XE="firebase",JE="12.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */br(XE,JE,"app");const ZE={apiKey:"AIzaSyC-AGGH-4B7w4fiZdPzILlYZcFwKsifNEk",authDomain:"minima-game.firebaseapp.com",databaseURL:"https://minima-game-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"minima-game",storageBucket:"minima-game.firebasestorage.app",messagingSenderId:"650096003712",appId:"1:650096003712:web:2e42f303ce049256413465"},eS=$m(ZE),uh=YE(eS),ch="shared-game",rt=({children:t,size:e=14,...n})=>h.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...n,children:t}),oa=t=>h.jsxs(rt,{...t,children:[h.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),h.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),dh=t=>h.jsxs(rt,{...t,children:[h.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),h.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),tS=t=>h.jsx(rt,{...t,children:h.jsx("path",{d:"M3 17h18l-2-9-5 5-4-7-4 7-5-5Z"})}),nS=t=>h.jsxs(rt,{...t,children:[h.jsx("circle",{cx:"12",cy:"11",r:"7"}),h.jsx("circle",{cx:"9",cy:"11",r:"1",fill:"currentColor"}),h.jsx("circle",{cx:"15",cy:"11",r:"1",fill:"currentColor"}),h.jsx("path",{d:"M10 19h4"})]}),rS=t=>h.jsxs(rt,{...t,children:[h.jsx("path",{d:"M3 7v6h6"}),h.jsx("path",{d:"M3 13a9 9 0 1 0 3-7.7L3 7"})]}),fh=t=>h.jsxs(rt,{...t,children:[h.jsx("path",{d:"M3 12a9 9 0 1 1 3 6.7"}),h.jsx("path",{d:"M3 12V6M3 12h6"})]}),hh=t=>h.jsxs(rt,{...t,children:[h.jsx("rect",{x:"9",y:"9",width:"11",height:"11",rx:"2"}),h.jsx("path",{d:"M5 15V5a2 2 0 0 1 2-2h10"})]}),iS=t=>h.jsxs(rt,{...t,children:[h.jsx("path",{d:"M3 6h18"}),h.jsx("path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),h.jsx("path",{d:"M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"}),h.jsx("path",{d:"M10 11v6M14 11v6"})]}),pi=t=>h.jsxs(rt,{...t,children:[h.jsx("rect",{x:"5",y:"11",width:"14",height:"9",rx:"2"}),h.jsx("path",{d:"M8 11V7a4 4 0 0 1 8 0v4"})]}),la=t=>h.jsxs(rt,{...t,children:[h.jsx("rect",{x:"5",y:"11",width:"14",height:"9",rx:"2"}),h.jsx("path",{d:"M8 11V7a4 4 0 0 1 7.2-2.4"})]}),sS=t=>h.jsx(rt,{...t,children:h.jsx("path",{d:"M17 3a2.83 2.83 0 1 1 4 4L7 21l-4 1 1-4Z"})}),oS=t=>h.jsxs(rt,{...t,children:[h.jsx("rect",{x:"9",y:"2",width:"6",height:"11",rx:"3"}),h.jsx("path",{d:"M5 10a7 7 0 0 0 14 0"}),h.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"22"}),h.jsx("line",{x1:"8",y1:"22",x2:"16",y2:"22"})]}),ph=t=>h.jsxs(rt,{...t,children:[h.jsx("line",{x1:"2",y1:"2",x2:"22",y2:"22"}),h.jsx("path",{d:"M18.89 13.23A7 7 0 0 0 19 12"}),h.jsx("path",{d:"M5 10a7 7 0 0 0 12.66 3.76"}),h.jsx("rect",{x:"9",y:"2",width:"6",height:"11",rx:"3",clipPath:"url(#mic-clip)"}),h.jsx("path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33"}),h.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"22"}),h.jsx("line",{x1:"8",y1:"22",x2:"16",y2:"22"})]}),mh=-10,lS=["Ayush","Hans","Aman","Yash","Arnav","Sumit","Shivam","Happy"],aS=[[0,10,12,6,11,7,13,50],[6,-10,7,8,2,6,4,9],[4,0,7,0,50,6,0,0],[7,5,0,16,23,4,50,0],[16,8,46,-10,15,21,5,23],[16,0,6,50,9,11,5,17],[3,5,6,14,-10,5,5,6],[5,21,7,25,4,10,-10,12],[7,3,17,9,17,9,-10,7],[15,8,12,7,20,21,-10,11],[50,8,5,0,11,12,13,6],[12,24,18,16,19,6,20,-10],[3,15,5,8,-10,6,11,11],[4,4,4,15,14,12,-10,6],[6,5,4,5,16,18,16,-10],[5,-10,8,6,14,14,4,13]];function kr(t){return`${t}${Date.now().toString(36)}${Math.floor(Math.random()*1e3)}`}function uS(){const t=lS.map((n,r)=>({id:`p${r}`,name:n})),e=aS.map((n,r)=>({id:`r${r}`,scores:Object.fromEntries(t.map((i,s)=>[i.id,n[s]]))}));return{id:kr("b"),name:"Game 1",players:t,rounds:e}}function gh(t){return{id:kr("b"),name:t,players:[],rounds:[]}}function _h(t){return JSON.parse(JSON.stringify({players:t.players,rounds:t.rounds}))}function cS(){const[t,e]=z.useState([]),[n,r]=z.useState(null),[i,s]=z.useState(!1),[o,l]=z.useState(""),[a,u]=z.useState(""),[f,c]=z.useState(""),[d,y]=z.useState(!1),[v,E]=z.useState(!1),[F,g]=z.useState(!1),[p,_]=z.useState(""),[S,T]=z.useState(null),[b,D]=z.useState(null),[A,X]=z.useState(""),[j,Fe]=z.useState([]),[Tn,Et]=z.useState(!1),[nr,_s]=z.useState(""),[rr,Rn]=z.useState(""),[R,L]=z.useState([]),[U,te]=z.useState(!1),[he,qt]=z.useState(""),[St,ir]=z.useState(""),[xt,Xt]=z.useState(""),[,ml]=z.useState(0),[Dt,ys]=z.useState(!1),[Pn,gl]=z.useState(!1),[Jt,_l]=z.useState(null),[yl,vl]=z.useState(""),vs=z.useRef(null),Zt=z.useRef({}),ws=z.useRef(null),qc=z.useRef({}),wl=z.useRef({}),sr=z.useRef(null),Cl=z.useRef(null);function s_(m){const w={};return m.forEach(C=>{w[C.id]={...C,players:C.players.reduce((k,N)=>(k[N.id]=N,k),{}),rounds:C.rounds.reduce((k,N)=>(k[N.id]=N,k),{})}}),w}function o_(m){return Object.values(m).map(w=>({...w,players:w.players?Object.values(w.players):[],rounds:w.rounds?Object.values(w.rounds).map(C=>({...C,scores:C.scores||{}})):[]}))}z.useEffect(()=>{const m=ah(uh,`rooms/${ch}`),w=UE(m,C=>{const k=C.val();if(k&&k.boards){const N=o_(k.boards);ws.current=JSON.stringify({boards:N}),e(N),r(M=>{var G,Y;return M?N.some(At=>At.id===M)?M:((Y=N[0])==null?void 0:Y.id)||null:((G=N[0])==null?void 0:G.id)||null})}else{const N=uS();ws.current=JSON.stringify({boards:[N]}),e([N]),r(N.id)}s(!0)},()=>s(!0));return()=>w()},[]),z.useEffect(()=>{if(!i)return;const m=JSON.stringify({boards:t});if(m!==ws.current)return vs.current&&clearTimeout(vs.current),vs.current=setTimeout(()=>{ws.current=m,jE(ah(uh,`rooms/${ch}`),{boards:s_(t)}).catch(()=>{})},200),()=>clearTimeout(vs.current)},[t,i]);const ge=t.find(m=>m.id===n)||null;z.useEffect(()=>{Fe([]),Et(!1),u(""),c("")},[n]);function l_(){if(!ge)return;const m=Zt.current[n]||[];Zt.current[n]=[...m,_h(ge)].slice(-20),ml(w=>w+1)}function bt(m){l_(),m()}function ct(m){e(w=>w.map(C=>C.id===n?m(C):C))}function a_(){const m=Zt.current[n]||[];if(!m.length)return;const w=m[m.length-1];Zt.current[n]=m.slice(0,-1),e(C=>C.map(k=>k.id===n?{...k,players:w.players,rounds:w.rounds}:k)),ml(C=>C+1)}const u_=(Zt.current[n]||[]).length>0;function c_(){bt(()=>{ct(m=>({...m,players:[],rounds:[]}))}),y(!1)}function d_(){bt(()=>{ct(m=>({...m,rounds:[]}))}),E(!1)}function f_(){const m=t.find(N=>N.id===nr);if(!m||!ge)return;const w=ge.players.map(N=>N.name.toLowerCase()),C=m.players.filter(N=>!w.includes(N.name.toLowerCase()));if(C.length===0){Rn("Those names are already on this board.");return}const k=C.map(N=>({id:kr("p"),name:N.name}));bt(()=>{ct(N=>({...N,players:[...N.players,...k],rounds:N.rounds.map(M=>({...M,scores:{...M.scores,...Object.fromEntries(k.map(ne=>[ne.id,0]))}}))}))}),Rn(`Copied ${k.length} name${k.length===1?"":"s"} from "${m.name}".`),_s("")}function Xc(){const m=he.trim();!m||!ge||(e(w=>w.map(C=>C.id===n?{...C,locked:!0,password:m}:C)),L(w=>w.includes(n)?w:[...w,n]),te(!1),qt(""))}function h_(){ge&&e(m=>m.map(w=>w.id===n?{...w,locked:!1,password:null}:w))}function Jc(){ge&&(St===ge.password?(L(m=>m.includes(n)?m:[...m,n]),ir(""),Xt("")):Xt("Incorrect password."))}function Zc(){const m=a.trim();if(!m||!ge)return;if(ge.players.some(C=>C.name.toLowerCase()===m.toLowerCase())){c("That name's already on the board.");return}c("");const w=kr("p");bt(()=>{ct(C=>({...C,players:[...C.players,{id:w,name:m}],rounds:C.rounds.map(k=>({...k,scores:{...k.scores,[w]:0}}))}))}),u("")}function p_(m){bt(()=>{ct(w=>({...w,players:w.players.filter(C=>C.id!==m),rounds:w.rounds.map(C=>{const k={...C.scores};return delete k[m],{...C,scores:k}})}))})}function m_(){if(!ge)return;const m=kr("r");bt(()=>{ct(w=>({...w,rounds:[...w.rounds,{id:m,locked:!1,scores:Object.fromEntries(w.players.map(C=>[C.id,""]))}]}))})}function g_(m,w,C){ct(k=>({...k,rounds:k.rounds.map(N=>N.id===m?{...N,scores:{...N.scores,[w]:C}}:N)}))}function __(m,w,C){if(C===""||C==="-"){bt(()=>{ct(N=>({...N,rounds:N.rounds.map(M=>M.id===m?{...M,scores:{...M.scores,[w]:""}}:M)}))});return}let k=parseInt(C,10);isNaN(k)&&(k=0),k<mh&&(k=mh),bt(()=>{ct(N=>({...N,rounds:N.rounds.map(M=>M.id===m?{...M,scores:{...M.scores,[w]:k}}:M)}))})}function y_(){bt(()=>{ct(m=>({...m,rounds:m.rounds.filter(w=>!j.includes(w.id))}))}),Fe([]),Et(!1)}function v_(m){Fe(w=>w.includes(m)?w.filter(C=>C!==m):[...w,m])}function ed(m,w){const C=w.map(k=>m.scores[k.id]).filter(k=>k!==""&&k!==void 0&&k!==null&&!isNaN(Number(k))).map(Number);return C.length?Math.min(...C):null}function w_(m){ct(w=>({...w,rounds:w.rounds.map(C=>C.id===m?{...C,locked:!C.locked}:C)}))}function C_(m){D(m.id),X(m.name)}function td(){const m=A.trim();m&&e(w=>w.map(C=>C.id===b?{...C,name:m}:C)),D(null),X("")}function nd(){const m=p.trim()||`Game ${t.length+1}`,w=gh(m);e(C=>[...C,w]),r(w.id),_(""),g(!1)}async function E_(m,w){const k=await fetch("https://minima-groq-proxy.minimagame.workers.dev/parse",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({transcript:m,players:w.map(G=>G.name)})});if(!k.ok)throw new Error(`Proxy ${k.status}`);const N=await k.json();if(!Array.isArray(N))throw new Error("Proxy returned non-array");const M=[];for(const G of N){const Y=(G.name||"").toLowerCase(),At=w.find(pe=>pe.name.toLowerCase()===Y||pe.name.toLowerCase().includes(Y)||Y.includes(pe.name.toLowerCase()));At&&typeof G.score=="number"&&M.push({player:At,score:G.score})}const ne=new Map;for(const G of M)ne.set(G.player.id,G);return[...ne.values()]}function Dn(m,w){_l({type:m,text:w}),Cl.current&&clearTimeout(Cl.current),Cl.current=setTimeout(()=>_l(null),4e3)}function S_(m){return m.replace(/\bminus\b|\bnegative\b/g,"-").replace(/\bzero\b/g,"0").replace(/\bone\b/g,"1").replace(/\btwo\b/g,"2").replace(/\bthree\b/g,"3").replace(/\bfour\b/g,"4").replace(/\bfive\b/g,"5").replace(/\bsix\b/g,"6").replace(/\bseven\b/g,"7").replace(/\beight\b/g,"8").replace(/\bnine\b/g,"9").replace(/\bten\b/g,"10").replace(/\beleven\b/g,"11").replace(/\btwelve\b/g,"12").replace(/\bthirteen\b/g,"13").replace(/\bfourteen\b/g,"14").replace(/\bfifteen\b/g,"15").replace(/\bsixteen\b/g,"16").replace(/\bseventeen\b/g,"17").replace(/\beighteen\b/g,"18").replace(/\bnineteen\b/g,"19").replace(/\btwenty\b/g,"20").replace(/\bthirty\b/g,"30").replace(/\bforty\b/g,"40").replace(/\bfifty\b/g,"50").replace(/\bsixty\b/g,"60").replace(/\bseventy\b/g,"70").replace(/\beighty\b/g,"80").replace(/\bninety\b/g,"90").replace(/\bhundred\b/g,"00").replace(/\bgive\b|\bset\b|\benter\b|\bput\b|\bfor\b|\bgot\b|\bgets\b|\bscore\b|\band\b/g," ").replace(/\s+/g," ").trim()}function El(m,w){const C=m.trim();if(!C)return null;let k=null,N=-1;for(const M of w){const ne=M.name.toLowerCase();if(C===ne)return M;if(C.includes(ne)||ne.includes(C)){const G=ne.length;G>N&&(N=G,k=M)}}return k}function x_(m,w){const C=S_(m.toLowerCase()),N=[...w].sort((pe,le)=>le.name.length-pe.name.length).map(pe=>pe.name.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|");if(!N)return[];const M=new RegExp(`(${N})`,"gi"),ne=C.split(M).filter(pe=>pe.trim()!==""),G=[];let Y=0;for(;Y<ne.length;){const pe=ne[Y].trim(),le=El(pe,w);if(le){const Ie=(ne[Y+1]||"").trim().match(/^-?\d+/);if(Ie){const ur=parseInt(Ie[0],10);G.push({player:le,score:ur}),Y+=2;continue}}else{const kt=pe.match(/-?\d+/);if(kt){const Ie=parseInt(kt[0],10),ur=(ne[Y+1]||"").trim(),ti=El(ur,w);if(ti){G.push({player:ti,score:Ie}),Y+=2;continue}}}Y++}if(G.length===0){const pe=C.match(/-?\d+/);if(pe){const le=parseInt(pe[0],10),kt=C.replace(pe[0]," ").replace(/\s+/g," ").trim(),Ie=El(kt,w);Ie&&G.push({player:Ie,score:le})}}const At=new Map;for(const pe of G)At.set(pe.player.id,pe);return[...At.values()]}function rd(m,w){const C=k=>{if(!k.length){Dn("err",`Couldn't parse: "${m}"`);return}e(N=>{const M=N.find(le=>le.id===n);if(!M||M.locked)return N;const ne=[...M.rounds].reverse().findIndex(le=>!le.locked);let G,Y;if(M.rounds.length===0||ne===-1){const kt={id:kr("r"),locked:!1,scores:Object.fromEntries(M.players.map(Ie=>[Ie.id,""]))};for(const Ie of k)kt.scores[Ie.player.id]=Ie.score;G=[...M.rounds,kt],Y="New round"}else{const le=M.rounds.length-1-ne,kt=M.rounds[le].id;G=M.rounds.map(Ie=>{if(Ie.id!==kt)return Ie;const ur={...Ie.scores};for(const ti of k)ur[ti.player.id]=ti.score;return{...Ie,scores:ur}}),Y=`Round ${le+1}`}const At=k.map(le=>`${le.player.name}: ${le.score}`).join(", ");Dn("ok",`${Y} → ${At}`);const pe=Zt.current[n]||[];return Zt.current[n]=[...pe,_h(w)].slice(-20),ml(le=>le+1),N.map(le=>le.id===n?{...le,rounds:G}:le)})};gl(!0),Dn("info","Thinking…"),E_(m,w.players).then(k=>{gl(!1),C(k)}).catch(k=>{gl(!1);const N=x_(m,w.players);N.length?C(N):Dn("err",`Groq error: ${k.message}`)})}function k_(){const m=window.SpeechRecognition||window.webkitSpeechRecognition;if(!m){Dn("err","Speech recognition not supported in this browser.");return}sr.current&&sr.current.stop();const w=new m;w.continuous=!0,w.interimResults=!0,w.lang="en-IN",sr.current=w;let C="",k=null;w.onstart=()=>{ys(!0),Dn("info","Listening… say names and scores.")},w.onend=()=>{if(ys(!1),vl(""),clearTimeout(k),C.trim()){const N=t.find(M=>M.id===n);N&&!N.locked&&rd(C.trim(),N),C=""}},w.onerror=N=>{ys(!1),clearTimeout(k),C="",N.error!=="aborted"&&Dn("err",`Mic error: ${N.error}`)},w.onresult=N=>{let M="",ne="";for(let Y=N.resultIndex;Y<N.results.length;Y++)N.results[Y].isFinal?ne+=N.results[Y][0].transcript:M+=N.results[Y][0].transcript;if(ne&&(C+=(C?" ":"")+ne.trim()),vl(M||C),!ne)return;const G=t.find(Y=>Y.id===n);!G||G.locked||(clearTimeout(k),k=setTimeout(()=>{const Y=C.trim();C="",Y&&rd(Y,G)},1200))},w.start()}function id(){sr.current&&(sr.current.stop(),sr.current=null),ys(!1),vl(""),_l(null)}function I_(m){e(w=>{const C=w.filter(k=>k.id!==m);if(C.length===0){const k=gh("Game 1");return r(k.id),[k]}return m===n&&r(C[0].id),C}),delete Zt.current[m],T(null)}const De=ge&&ge.players||[],ei=ge&&ge.rounds||[],Cs=De.map(m=>({...m,total:ei.reduce((w,C)=>w+(Number(C.scores[m.id])||0),0)})),en=[...Cs].sort((m,w)=>m.total-w.total),N_=qc.current,or={};if(en.forEach((m,w)=>{const C=N_[m.id];C===void 0?or[m.id]=null:w<C?or[m.id]="up":w>C?or[m.id]="down":or[m.id]=null,or[m.id]!==null&&(wl.current[m.id]=(wl.current[m.id]||0)+1)}),z.useEffect(()=>{const m={};en.forEach((w,C)=>{m[w.id]=C}),qc.current=m}),!i||!ge)return h.jsx("div",{style:{background:"#0f172a",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",color:"#cad4e2",fontSize:"13px",fontFamily:"-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif"},children:"Loading…"});const bn=!!ge.locked&&!R.includes(ge.id),lr=en.length?en[0].total:null,ar=en.length?en[en.length-1].total:null;return h.jsxs("div",{className:"board",children:[h.jsx("style",{children:`
        *, *::before, *::after { box-sizing: border-box; }

        .board {
          min-height: 100vh;
          background: #0f172a;
          color: #e2e8f0;
          font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", sans-serif;
          font-size: 14px;
          line-height: 1.5;
          padding: 28px 16px 72px;
        }
        .wrap { max-width: 900px; margin: 0 auto; }

        /* ── Header ── */
        .title-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 28px;
        }
        .title {
          font-size: 22px;
          font-weight: 700;
          letter-spacing: -0.3px;
          margin: 0 0 3px;
          color: #f8fafc;
        }
        .subtitle {
          margin: 0;
          color: #a5b4ca;
          font-size: 13px;
        }
        .subtitle b { color: #f59e0b; font-weight: 600; }

        /* ── Toolbar ── */
        .toolbar { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; }

        /* ── Board tabs ── */
        .board-tabs {
          display: flex; flex-wrap: wrap; gap: 6px;
          margin-bottom: 20px; align-items: center;
        }
        .tab {
          display: flex; align-items: center; gap: 5px;
          padding: 6px 13px;
          border-radius: 8px;
          border: 1px solid #1e293b;
          background: #1e293b;
          color: #94a3b8;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.15s, color 0.15s;
        }
        .tab:hover { background: #273448; color: #e2e8f0; }
        .tab.active { background: #f59e0b; color: #0f172a; border-color: #f59e0b; font-weight: 700; }
        .tab button { background: none; border: none; color: inherit; opacity: 0.55; cursor: pointer; display: flex; align-items: center; padding: 1px; line-height: 1; }
        .tab button:hover { opacity: 1; }
        .tab-add {
          display: flex; align-items: center; gap: 5px;
          padding: 6px 13px;
          border-radius: 8px;
          border: 1px dashed #94abcb;
          background: transparent;
          color: #cad4e2;
          font-size: 13px;
          cursor: pointer;
          transition: color 0.15s, border-color 0.15s;
        }
        .tab-add:hover { color: #e2e8f0; border-color: #a5b4ca; }
        .new-board-input { display: flex; gap: 6px; align-items: center; }
        .new-board-input input {
          background: #1e293b;
          border: 1px solid #94abcb;
          color: #e2e8f0;
          border-radius: 8px;
          padding: 6px 12px;
          font-size: 13px;
          width: 150px;
          outline: none;
        }
        .new-board-input input:focus { border-color: #f59e0b; }

        /* ── Panels ── */
        .panel {
          background: #1e293b;
          border: 1px solid #273448;
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 16px;
        }
        .panel-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
        .panel h2 {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #a5b4ca;
          margin: 0;
        }

        /* ── Leaderboard ── */
        @keyframes lb-climb {
          0%   { background: rgba(34,197,94,0.18); transform: translateY(4px); }
          60%  { background: rgba(34,197,94,0.10); transform: translateY(-2px); }
          100% { background: transparent;           transform: translateY(0); }
        }
        @keyframes lb-fall {
          0%   { background: rgba(248,113,113,0.18); transform: translateY(-4px); }
          60%  { background: rgba(248,113,113,0.10); transform: translateY(2px); }
          100% { background: transparent;             transform: translateY(0); }
        }
        .leaderboard-list { display: flex; flex-direction: column; gap: 4px; }
        .lb-row {
          display: flex; align-items: center; gap: 12px;
          padding: 10px 14px;
          border-radius: 8px;
          background: transparent;
          border: 1px solid transparent;
          transition: background 0.3s, border-color 0.3s;
        }
        .lb-row.anim-up   { animation: lb-climb 0.55s ease-out forwards; }
        .lb-row.anim-down { animation: lb-fall  0.55s ease-out forwards; }
        .lb-rank {
          font-variant-numeric: tabular-nums;
          font-size: 12px;
          color: #cad4e2;
          width: 18px;
          text-align: right;
          flex-shrink: 0;
        }
        .lb-rank-delta {
          font-size: 9px;
          font-weight: 700;
          line-height: 1;
          width: 12px;
          flex-shrink: 0;
        }
        .lb-rank-delta.up   { color: #4ade80; }
        .lb-rank-delta.down { color: #f87171; }
        .lb-name { flex: 1; font-size: 14px; font-weight: 500; color: #e2e8f0; }
        .lb-score {
          font-variant-numeric: tabular-nums;
          font-size: 15px;
          font-weight: 600;
          color: #cbd5e1;
        }
        .lb-leader { background: rgba(245,158,11,0.08); border-color: rgba(245,158,11,0.25); }
        .lb-leader .lb-name { color: #fbbf24; }
        .lb-leader .lb-score { color: #f59e0b; font-weight: 700; }
        .lb-last .lb-score { color: #f87171; }

        /* ── Buttons ── */
        .btn {
          display: inline-flex; align-items: center; gap: 6px;
          background: #f59e0b;
          color: #0f172a;
          border: none;
          border-radius: 8px;
          padding: 7px 14px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.15s;
        }
        .btn:hover { background: #fbbf24; }
        .btn:disabled { opacity: 0.35; cursor: not-allowed; }
        .btn-ghost {
          background: transparent;
          color: #a5b4ca;
          border: 1px solid #273448;
        }
        .btn-ghost:hover { background: #273448; color: #e2e8f0; border-color: #94abcb; }
        .btn-ghost:disabled { opacity: 0.4; }
        .btn-ghost:disabled:hover { background: transparent; color: #a5b4ca; border-color: #273448; }
        .btn-danger { background: #ef4444; color: #fff; }
        .btn-danger:hover { background: #f87171; }
        .err { color: #f87171; font-size: 13px; margin-top: 6px; }

        /* ── Inputs ── */
        .add-row { display: flex; gap: 8px; margin-top: 14px; }
        .add-row input {
          flex: 1;
          background: #0f172a;
          border: 1px solid #273448;
          color: #e2e8f0;
          border-radius: 8px;
          padding: 8px 12px;
          font-size: 14px;
          outline: none;
          transition: border-color 0.15s;
        }
        .add-row input:focus { border-color: #f59e0b; }
        .add-row input::placeholder { color: #94abcb; }

        .password-input {
          background: #0f172a;
          border: 1px solid #273448;
          color: #e2e8f0;
          border-radius: 8px;
          padding: 7px 11px;
          font-size: 13px;
          width: 150px;
          outline: none;
        }
        .password-input:focus { border-color: #f59e0b; }
        .lock-badge { color: #f59e0b; display: flex; align-items: center; gap: 5px; font-size: 13px; font-weight: 600; }

        .copy-row { display: flex; gap: 8px; margin-top: 12px; }
        .board-select {
          flex: 1;
          background: #0f172a;
          border: 1px solid #273448;
          color: #e2e8f0;
          border-radius: 8px;
          padding: 8px 11px;
          font-size: 13px;
          outline: none;
        }
        .copy-note { color: #cad4e2; font-size: 12px; margin-top: 6px; }

        .confirm-box { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #94a3b8; flex-wrap: wrap; }

        /* ── Player chips ── */
        .player-chips { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 4px; }
        .chip {
          display: flex; align-items: center; gap: 5px;
          background: #0f172a;
          border: 1px solid #273448;
          border-radius: 20px;
          padding: 4px 6px 4px 11px;
          font-size: 13px;
          font-weight: 500;
          color: #cbd5e1;
        }
        .chip button {
          background: none; border: none; color: #94abcb; cursor: pointer;
          display: flex; align-items: center; padding: 2px;
          border-radius: 50%;
          transition: color 0.15s;
        }
        .chip button:hover { color: #f87171; }

        /* ── Score table ── */
        .table-scroll { overflow-x: auto; -webkit-overflow-scrolling: touch; }
        table { border-collapse: collapse; width: 100%; min-width: 480px; }
        thead th {
          text-align: center;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          color: #cad4e2;
          padding: 0 8px 12px;
          border-bottom: 1px solid #1e293b;
          white-space: nowrap;
        }
        thead th:first-child { text-align: left; padding-left: 0; }
        tbody tr:hover { background: rgba(255,255,255,0.02); }
        tbody td {
          padding: 5px 8px;
          text-align: center;
          border-bottom: 1px solid #1a2539;
        }
        tbody td:first-child {
          text-align: left;
          padding-left: 0;
          color: #a5b4ca;
          font-size: 12px;
          font-variant-numeric: tabular-nums;
        }
        .score-input {
          width: 58px;
          background: #0f172a;
          border: 1px solid #94abcb;
          color: #f1f5f9;
          border-radius: 6px;
          padding: 5px 4px;
          text-align: center;
          font-size: 13px;
          font-weight: 500;
          font-variant-numeric: tabular-nums;
          outline: none;
          transition: border-color 0.15s;
        }
        .score-input:focus { border-color: #a5b4ca; }
        .score-input:disabled { opacity: 0.45; cursor: not-allowed; }
        .score-input.is-low { border-color: #f59e0b; color: #fbbf24; background: rgba(245,158,11,0.07); }
        .row-actions { display: flex; align-items: center; justify-content: center; gap: 10px; }
        .select-checkbox { width: 15px; height: 15px; accent-color: #f59e0b; cursor: pointer; }
        .select-checkbox:disabled { opacity: 0.25; cursor: not-allowed; }
        .lock-toggle {
          background: none; border: none; color: #94abcb; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: color 0.15s;
        }
        .lock-toggle:hover { color: #f59e0b; }
        .lock-toggle.is-locked { color: #f59e0b; }
        .round-locked { background: rgba(245,158,11,0.03); }
        .round-locked .score-input { opacity: 0.4; cursor: not-allowed; }
        tfoot td {
          padding: 12px 8px 4px;
          text-align: center;
          font-variant-numeric: tabular-nums;
          font-weight: 700;
          font-size: 14px;
          border-top: 1px solid #273448;
          color: #e2e8f0;
        }
        tfoot td:first-child {
          text-align: left; padding-left: 0;
          font-size: 10px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 1px; color: #cad4e2;
        }
        .total-low { color: #f59e0b; }
        .total-high { color: #f87171; }

        .empty { color: #94abcb; font-size: 13px; padding: 8px 0; }
        .actions-row { display: flex; justify-content: flex-end; gap: 6px; margin-top: 14px; flex-wrap: wrap; }

        /* ── Voice mode ── */
        .btn-voice-active {
          background: #ef4444;
          color: #fff;
          animation: voice-btn-pulse 1.4s ease-in-out infinite;
        }
        .btn-voice-active:hover { background: #f87171; }
        @keyframes voice-btn-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(239,68,68,0.45); }
          50%       { box-shadow: 0 0 0 7px rgba(239,68,68,0); }
        }
        .voice-toast {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 9999;
          background: #1e293b;
          border: 1px solid #273448;
          border-radius: 12px;
          padding: 10px 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: #e2e8f0;
          min-width: 260px;
          max-width: 420px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.5);
          pointer-events: auto;
        }
        .voice-toast-listening { border-color: #ef4444; }
        .voice-toast-thinking  { border-color: #3b82f6; }
        .voice-pulse-dot {
          width: 10px; height: 10px;
          border-radius: 50%;
          background: #ef4444;
          flex-shrink: 0;
          animation: voice-dot-blink 1s ease-in-out infinite;
        }
        .voice-pulse-dot.thinking { background: #3b82f6; }
        @keyframes voice-dot-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.25; }
        }
        .voice-toast-text { flex: 1; line-height: 1.4; }
        .voice-interim { color: #94a3b8; font-style: italic; }
        .voice-result-badge {
          font-size: 13px; font-weight: 700; flex-shrink: 0;
        }
        .voice-result-ok   { color: #4ade80; }
        .voice-result-err  { color: #f87171; }
        .voice-result-info { color: #60a5fa; }
        .voice-toast-stop {
          background: none; border: none; color: #94a3b8; cursor: pointer;
          display: flex; align-items: center; padding: 2px;
          flex-shrink: 0;
        }
        .voice-toast-stop:hover { color: #f87171; }
      `}),(Dt||Pn||Jt)&&h.jsxs("div",{className:"voice-toast"+(Pn?" voice-toast-thinking":Dt?" voice-toast-listening":""),children:[(Dt||Pn)&&h.jsx("span",{className:"voice-pulse-dot"+(Pn?" thinking":"")}),h.jsx("span",{className:"voice-toast-text",children:Pn?"Thinking…":yl?h.jsxs("span",{className:"voice-interim",children:['"',yl,'"']}):(Jt==null?void 0:Jt.text)||"Listening…"}),Jt&&!yl&&!Pn&&h.jsx("span",{className:"voice-result-badge voice-result-"+Jt.type,children:Jt.type==="ok"?"✓":Jt.type==="err"?"✕":"ℹ"}),Dt&&!Pn&&h.jsx("button",{className:"voice-toast-stop",onClick:id,title:"Stop",children:h.jsx(ph,{size:13})})]}),h.jsxs("div",{className:"wrap",children:[h.jsxs("div",{className:"title-row",children:[h.jsxs("div",{children:[h.jsx("h1",{className:"title",children:"Minima Game"}),h.jsxs("p",{className:"subtitle",children:["Score each round. ",h.jsx("b",{children:"Lowest total wins."})," Minimum −10 per round, no ceiling."]})]}),h.jsxs("div",{className:"toolbar",children:[h.jsxs("button",{className:"btn",onClick:()=>{const m=window.location.origin+window.location.pathname;navigator.clipboard.writeText(m).then(()=>l("Link copied!")).catch(()=>l(m)),setTimeout(()=>l(""),2500)},title:"Copy a link anyone can use to view and edit this board live",children:[h.jsx(hh,{size:14})," Share"]}),o&&h.jsx("span",{className:"confirm-box",children:o}),h.jsxs("button",{className:"btn"+(Dt?" btn-voice-active":" btn-ghost"),onClick:Dt?id:k_,disabled:bn||De.length===0,title:Dt?"Stop voice mode":"Start voice mode — say a player name and score",children:[Dt?h.jsx(ph,{size:14}):h.jsx(oS,{size:14}),Dt?"Stop voice":"Voice"]}),h.jsxs("button",{className:"btn btn-ghost",onClick:a_,disabled:!u_||bn,title:"Undo last change",children:[h.jsx(rS,{size:14})," Undo"]}),d?h.jsxs("span",{className:"confirm-box",children:["Clear all players & rounds?",h.jsx("button",{className:"btn btn-danger",onClick:c_,children:"Yes, clear"}),h.jsx("button",{className:"btn btn-ghost",onClick:()=>y(!1),children:"Cancel"})]}):h.jsxs("button",{className:"btn btn-ghost",onClick:()=>y(!0),disabled:bn,title:"Clear this board",children:[h.jsx(fh,{size:14})," Clear board"]}),v?h.jsxs("span",{className:"confirm-box",children:["Clear all rounds? Players stay.",h.jsx("button",{className:"btn btn-danger",onClick:d_,children:"Yes, clear"}),h.jsx("button",{className:"btn btn-ghost",onClick:()=>E(!1),children:"Cancel"})]}):h.jsxs("button",{className:"btn btn-ghost",onClick:()=>E(!0),disabled:bn,title:"Clear only the rounds table",children:[h.jsx(fh,{size:14})," Clear rounds"]}),ge.locked?bn?h.jsxs("span",{className:"confirm-box lock-badge",children:[h.jsx(pi,{size:13})," Locked"]}):h.jsxs("button",{className:"btn btn-ghost",onClick:h_,title:"Remove the password lock",children:[h.jsx(la,{size:14})," Remove lock"]}):U?h.jsxs("span",{className:"confirm-box",children:[h.jsx("input",{type:"password",autoFocus:!0,className:"password-input",placeholder:"Set a password",value:he,onChange:m=>qt(m.target.value),onKeyDown:m=>m.key==="Enter"&&Xc()}),h.jsx("button",{className:"btn",onClick:Xc,children:"Lock"}),h.jsx("button",{className:"btn btn-ghost",onClick:()=>{te(!1),qt("")},children:"Cancel"})]}):h.jsxs("button",{className:"btn btn-ghost",onClick:()=>te(!0),title:"Lock this board with a password",children:[h.jsx(pi,{size:14})," Lock board"]})]})]}),h.jsxs("div",{className:"board-tabs",children:[t.map(m=>b===m.id?h.jsx("div",{className:"new-board-input",children:h.jsx("input",{autoFocus:!0,value:A,onChange:w=>X(w.target.value),onKeyDown:w=>{w.key==="Enter"&&td(),w.key==="Escape"&&(D(null),X(""))},onBlur:td})},m.id):h.jsxs("div",{className:"tab"+(m.id===n?" active":""),onClick:()=>r(m.id),children:[m.locked&&h.jsx(pi,{size:11}),m.name,(!m.locked||R.includes(m.id))&&h.jsx("button",{onClick:w=>{w.stopPropagation(),C_(m)},title:"Rename board",children:h.jsx(sS,{size:11})}),t.length>1&&(!m.locked||R.includes(m.id))&&(S===m.id?h.jsxs(h.Fragment,{children:[h.jsx("button",{onClick:w=>{w.stopPropagation(),I_(m.id)},title:"Confirm delete",children:"✓"}),h.jsx("button",{onClick:w=>{w.stopPropagation(),T(null)},title:"Cancel",children:"✕"})]}):h.jsx("button",{onClick:w=>{w.stopPropagation(),T(m.id)},title:"Delete board",children:h.jsx(dh,{size:12})}))]},m.id)),F?h.jsxs("div",{className:"new-board-input",children:[h.jsx("input",{autoFocus:!0,placeholder:"Board name",value:p,onChange:m=>_(m.target.value),onKeyDown:m=>{m.key==="Enter"&&nd(),m.key==="Escape"&&(g(!1),_(""))}}),h.jsx("button",{className:"btn",onClick:nd,children:"Create"})]}):h.jsxs("button",{className:"tab-add",onClick:()=>g(!0),children:[h.jsx(oa,{size:13})," New board"]})]}),h.jsxs("div",{className:"panel",children:[h.jsx("div",{className:"panel-head",children:h.jsx("h2",{children:"Leaderboard"})}),Cs.length===0?h.jsx("div",{className:"empty",children:"Add players below to start the board."}):h.jsx("div",{className:"leaderboard-list",children:en.map((m,w)=>{const C=or[m.id],k=wl.current[m.id]||0;return h.jsxs("div",{className:"lb-row"+(C==="up"?" anim-up":C==="down"?" anim-down":"")+(m.total===lr?" lb-leader":"")+(m.total===ar&&ar!==lr?" lb-last":""),children:[h.jsx("span",{className:"lb-rank",children:w+1}),h.jsx("span",{className:"lb-rank-delta"+(C==="up"?" up":C==="down"?" down":""),children:C==="up"?"▲":C==="down"?"▼":""}),h.jsx("span",{className:"lb-name",children:m.name}),m.total===lr&&h.jsx(tS,{size:15,color:"#f59e0b"}),m.total===ar&&ar!==lr&&h.jsx(nS,{size:14,color:"#f87171"}),h.jsx("span",{className:"lb-score",children:m.total})]},m.id+"-"+k)})})]}),bn&&h.jsxs("div",{className:"panel",style:{display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"},children:[h.jsx(pi,{size:14,style:{color:"#C8A24D",flexShrink:0}}),h.jsxs("span",{style:{color:"#E0C9A0",fontSize:"13px",flex:1},children:['"',ge.name,'" is locked. Enter the password to edit.']}),h.jsx("input",{type:"password",className:"password-input",placeholder:"Password",value:St,onChange:m=>{ir(m.target.value),Xt("")},onKeyDown:m=>m.key==="Enter"&&Jc()}),h.jsxs("button",{className:"btn",onClick:Jc,children:[h.jsx(la,{size:14})," Unlock"]}),xt&&h.jsx("span",{className:"err",style:{width:"100%",marginTop:0},children:xt})]}),bn?h.jsxs(h.Fragment,{children:[De.length>0&&h.jsxs("div",{className:"panel",children:[h.jsx("div",{className:"panel-head",children:h.jsx("h2",{children:"Players"})}),h.jsx("div",{className:"player-chips",children:De.map(m=>h.jsx("div",{className:"chip",style:{paddingRight:"12px"},children:m.name},m.id))})]}),De.length>0&&ei.length>0&&h.jsxs("div",{className:"panel",children:[h.jsx("div",{className:"panel-head",children:h.jsx("h2",{children:"Rounds"})}),h.jsx("div",{className:"table-scroll",children:h.jsxs("table",{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Round"}),De.map(m=>h.jsx("th",{children:m.name},m.id))]})}),h.jsx("tbody",{children:ei.map((m,w)=>{const C=ed(m,De);return h.jsxs("tr",{children:[h.jsx("td",{children:w+1}),De.map(k=>{const N=m.scores[k.id]??"",M=C!==null&&N!==""&&Number(N)===C;return h.jsx("td",{children:h.jsx("span",{className:"score-input"+(M?" is-low":""),style:{display:"inline-block",lineHeight:"1",cursor:"default"},children:N===""?"—":N})},k.id)})]},m.id)})}),h.jsx("tfoot",{children:h.jsxs("tr",{children:[h.jsx("td",{children:"Total"}),De.map(m=>{var C;const w=((C=Cs.find(k=>k.id===m.id))==null?void 0:C.total)??0;return h.jsx("td",{className:w===lr?"total-low":w===ar?"total-high":"",children:w},m.id)})]})})]})})]})]}):h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"panel",children:[h.jsx("h2",{children:"Players"}),h.jsx("div",{className:"player-chips",children:De.map(m=>h.jsxs("div",{className:"chip",children:[m.name,h.jsx("button",{onClick:()=>p_(m.id),"aria-label":`Remove ${m.name}`,children:h.jsx(dh,{size:13})})]},m.id))}),h.jsxs("div",{className:"add-row",children:[h.jsx("input",{placeholder:"Add a player name",value:a,onChange:m=>u(m.target.value),onKeyDown:m=>m.key==="Enter"&&Zc()}),h.jsxs("button",{className:"btn",onClick:Zc,children:[h.jsx(oa,{size:14})," Add"]})]}),f&&h.jsx("div",{className:"err",children:f}),t.length>1&&h.jsxs("div",{className:"copy-row",children:[h.jsxs("select",{className:"board-select",value:nr,onChange:m=>{_s(m.target.value),Rn("")},children:[h.jsx("option",{value:"",children:"Copy names from board…"}),t.filter(m=>m.id!==n).map(m=>h.jsxs("option",{value:m.id,children:[m.name," (",m.players.length," players)"]},m.id))]}),h.jsxs("button",{className:"btn btn-ghost",onClick:f_,disabled:!nr,children:[h.jsx(hh,{size:14})," Copy names"]})]}),rr&&h.jsx("div",{className:"copy-note",children:rr})]}),h.jsxs("div",{className:"panel",children:[h.jsx("h2",{children:"Rounds"}),De.length===0?h.jsx("div",{className:"empty",children:"Add at least one player to start logging rounds."}):h.jsx("div",{className:"table-scroll",children:h.jsxs("table",{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Round"}),De.map(m=>h.jsx("th",{children:m.name},m.id)),h.jsx("th",{})]})}),h.jsx("tbody",{children:ei.map((m,w)=>{const C=ed(m,De),k=!!m.locked;return h.jsxs("tr",{className:k?"round-locked":"",children:[h.jsx("td",{children:w+1}),De.map(N=>{const M=m.scores[N.id]??"",ne=C!==null&&M!==""&&Number(M)===C;return h.jsx("td",{children:h.jsx("input",{className:"score-input"+(ne?" is-low":""),type:"text",placeholder:"",value:M,disabled:k,onChange:G=>g_(m.id,N.id,G.target.value),onBlur:G=>__(m.id,N.id,G.target.value)})},N.id)}),h.jsx("td",{children:h.jsxs("div",{className:"row-actions",children:[h.jsx("input",{type:"checkbox",className:"select-checkbox",checked:j.includes(m.id),onChange:()=>v_(m.id),disabled:k,"aria-label":"Select round",title:"Select round"}),h.jsx("button",{className:"lock-toggle"+(k?" is-locked":""),onClick:()=>w_(m.id),"aria-label":k?"Unlock round":"Lock round",title:k?"Unlock round":"Lock round",children:k?h.jsx(pi,{size:13}):h.jsx(la,{size:13})})]})})]},m.id)})}),ei.length>0&&h.jsx("tfoot",{children:h.jsxs("tr",{children:[h.jsx("td",{children:"Total"}),De.map(m=>{var C;const w=((C=Cs.find(k=>k.id===m.id))==null?void 0:C.total)??0;return h.jsx("td",{className:w===lr?"total-low":w===ar?"total-high":"",children:w},m.id)}),h.jsx("td",{})]})})]})}),h.jsxs("div",{className:"actions-row",children:[j.length>0&&(Tn?h.jsxs("span",{className:"confirm-box",children:["Delete ",j.length," round",j.length===1?"":"s","?",h.jsx("button",{className:"btn btn-danger",onClick:y_,children:"Yes, delete"}),h.jsx("button",{className:"btn btn-ghost",onClick:()=>Et(!1),children:"Cancel"})]}):h.jsxs("button",{className:"btn btn-danger",onClick:()=>Et(!0),children:[h.jsx(iS,{size:14})," Delete selected (",j.length,")"]})),h.jsxs("button",{className:"btn btn-ghost",onClick:m_,disabled:De.length===0,children:[h.jsx(oa,{size:14})," Add round"]})]})]})]})]})]})}aa.createRoot(document.getElementById("root")).render(h.jsx(V_.StrictMode,{children:h.jsx(cS,{})}));
