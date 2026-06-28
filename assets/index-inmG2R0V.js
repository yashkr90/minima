(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function D_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ch={exports:{}},Ho={},Eh={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var os=Symbol.for("react.element"),b_=Symbol.for("react.portal"),A_=Symbol.for("react.fragment"),O_=Symbol.for("react.strict_mode"),M_=Symbol.for("react.profiler"),L_=Symbol.for("react.provider"),F_=Symbol.for("react.context"),j_=Symbol.for("react.forward_ref"),z_=Symbol.for("react.suspense"),U_=Symbol.for("react.memo"),B_=Symbol.for("react.lazy"),ad=Symbol.iterator;function W_(t){return t===null||typeof t!="object"?null:(t=ad&&t[ad]||t["@@iterator"],typeof t=="function"?t:null)}var Sh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xh=Object.assign,kh={};function Yr(t,e,n){this.props=t,this.context=e,this.refs=kh,this.updater=n||Sh}Yr.prototype.isReactComponent={};Yr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Yr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ih(){}Ih.prototype=Yr.prototype;function Eu(t,e,n){this.props=t,this.context=e,this.refs=kh,this.updater=n||Sh}var Su=Eu.prototype=new Ih;Su.constructor=Eu;xh(Su,Yr.prototype);Su.isPureReactComponent=!0;var ud=Array.isArray,Nh=Object.prototype.hasOwnProperty,xu={current:null},Th={key:!0,ref:!0,__self:!0,__source:!0};function Rh(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Nh.call(e,r)&&!Th.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:os,type:t,key:s,ref:o,props:i,_owner:xu.current}}function $_(t,e){return{$$typeof:os,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ku(t){return typeof t=="object"&&t!==null&&t.$$typeof===os}function V_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var cd=/\/+/g;function kl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?V_(""+t.key):e.toString(36)}function $s(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case os:case b_:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+kl(o,0):r,ud(i)?(n="",t!=null&&(n=t.replace(cd,"$&/")+"/"),$s(i,e,n,"",function(u){return u})):i!=null&&(ku(i)&&(i=$_(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(cd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ud(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+kl(s,l);o+=$s(s,e,n,a,i)}else if(a=W_(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+kl(s,l++),o+=$s(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function xs(t,e,n){if(t==null)return t;var r=[],i=0;return $s(t,r,"","",function(s){return e.call(n,s,i++)}),r}function H_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ue={current:null},Vs={transition:null},G_={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:Vs,ReactCurrentOwner:xu};function Ph(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:xs,forEach:function(t,e,n){xs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return xs(t,function(){e++}),e},toArray:function(t){return xs(t,function(e){return e})||[]},only:function(t){if(!ku(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};V.Component=Yr;V.Fragment=A_;V.Profiler=M_;V.PureComponent=Eu;V.StrictMode=O_;V.Suspense=z_;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G_;V.act=Ph;V.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=xh({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=xu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Nh.call(e,a)&&!Th.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:os,type:t.type,key:i,ref:s,props:r,_owner:o}};V.createContext=function(t){return t={$$typeof:F_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:L_,_context:t},t.Consumer=t};V.createElement=Rh;V.createFactory=function(t){var e=Rh.bind(null,t);return e.type=t,e};V.createRef=function(){return{current:null}};V.forwardRef=function(t){return{$$typeof:j_,render:t}};V.isValidElement=ku;V.lazy=function(t){return{$$typeof:B_,_payload:{_status:-1,_result:t},_init:H_}};V.memo=function(t,e){return{$$typeof:U_,type:t,compare:e===void 0?null:e}};V.startTransition=function(t){var e=Vs.transition;Vs.transition={};try{t()}finally{Vs.transition=e}};V.unstable_act=Ph;V.useCallback=function(t,e){return Ue.current.useCallback(t,e)};V.useContext=function(t){return Ue.current.useContext(t)};V.useDebugValue=function(){};V.useDeferredValue=function(t){return Ue.current.useDeferredValue(t)};V.useEffect=function(t,e){return Ue.current.useEffect(t,e)};V.useId=function(){return Ue.current.useId()};V.useImperativeHandle=function(t,e,n){return Ue.current.useImperativeHandle(t,e,n)};V.useInsertionEffect=function(t,e){return Ue.current.useInsertionEffect(t,e)};V.useLayoutEffect=function(t,e){return Ue.current.useLayoutEffect(t,e)};V.useMemo=function(t,e){return Ue.current.useMemo(t,e)};V.useReducer=function(t,e,n){return Ue.current.useReducer(t,e,n)};V.useRef=function(t){return Ue.current.useRef(t)};V.useState=function(t){return Ue.current.useState(t)};V.useSyncExternalStore=function(t,e,n){return Ue.current.useSyncExternalStore(t,e,n)};V.useTransition=function(){return Ue.current.useTransition()};V.version="18.3.1";Eh.exports=V;var z=Eh.exports;const Q_=D_(z);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y_=z,K_=Symbol.for("react.element"),q_=Symbol.for("react.fragment"),X_=Object.prototype.hasOwnProperty,J_=Y_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Z_={key:!0,ref:!0,__self:!0,__source:!0};function Dh(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)X_.call(e,r)&&!Z_.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:K_,type:t,key:s,ref:o,props:i,_owner:J_.current}}Ho.Fragment=q_;Ho.jsx=Dh;Ho.jsxs=Dh;Ch.exports=Ho;var h=Ch.exports,ca={},bh={exports:{}},tt={},Ah={exports:{}},Oh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(T,M){var U=T.length;T.push(M);e:for(;0<U;){var ee=U-1>>>1,de=T[ee];if(0<i(de,M))T[ee]=M,T[U]=de,U=ee;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var M=T[0],U=T.pop();if(U!==M){T[0]=U;e:for(var ee=0,de=T.length,Jt=de>>>1;ee<Jt;){var St=2*(ee+1)-1,or=T[St],xt=St+1,Zt=T[xt];if(0>i(or,U))xt<de&&0>i(Zt,or)?(T[ee]=Zt,T[xt]=U,ee=xt):(T[ee]=or,T[St]=U,ee=St);else if(xt<de&&0>i(Zt,U))T[ee]=Zt,T[xt]=U,ee=xt;else break e}}return M}function i(T,M){var U=T.sortIndex-M.sortIndex;return U!==0?U:T.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],f=1,c=null,d=3,y=!1,v=!1,E=!1,L=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(T){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=T)r(u),M.sortIndex=M.expirationTime,e(a,M);else break;M=n(u)}}function S(T){if(E=!1,_(T),!v)if(n(a)!==null)v=!0,sr(N);else{var M=n(u);M!==null&&Dn(S,M.startTime-T)}}function N(T,M){v=!1,E&&(E=!1,g(A),A=-1),y=!0;var U=d;try{for(_(M),c=n(a);c!==null&&(!(c.expirationTime>M)||T&&!Fe());){var ee=c.callback;if(typeof ee=="function"){c.callback=null,d=c.priorityLevel;var de=ee(c.expirationTime<=M);M=t.unstable_now(),typeof de=="function"?c.callback=de:c===n(a)&&r(a),_(M)}else r(a);c=n(a)}if(c!==null)var Jt=!0;else{var St=n(u);St!==null&&Dn(S,St.startTime-M),Jt=!1}return Jt}finally{c=null,d=U,y=!1}}var b=!1,D=null,A=-1,q=5,F=-1;function Fe(){return!(t.unstable_now()-F<q)}function Pn(){if(D!==null){var T=t.unstable_now();F=T;var M=!0;try{M=D(!0,T)}finally{M?Et():(b=!1,D=null)}}else b=!1}var Et;if(typeof p=="function")Et=function(){p(Pn)};else if(typeof MessageChannel<"u"){var ir=new MessageChannel,ys=ir.port2;ir.port1.onmessage=Pn,Et=function(){ys.postMessage(null)}}else Et=function(){L(Pn,0)};function sr(T){D=T,b||(b=!0,Et())}function Dn(T,M){A=L(function(){T(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(T){T.callback=null},t.unstable_continueExecution=function(){v||y||(v=!0,sr(N))},t.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<T?Math.floor(1e3/T):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(T){switch(d){case 1:case 2:case 3:var M=3;break;default:M=d}var U=d;d=M;try{return T()}finally{d=U}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(T,M){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var U=d;d=T;try{return M()}finally{d=U}},t.unstable_scheduleCallback=function(T,M,U){var ee=t.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?ee+U:ee):U=ee,T){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=U+de,T={id:f++,callback:M,priorityLevel:T,startTime:U,expirationTime:de,sortIndex:-1},U>ee?(T.sortIndex=U,e(u,T),n(a)===null&&T===n(u)&&(E?(g(A),A=-1):E=!0,Dn(S,U-ee))):(T.sortIndex=de,e(a,T),v||y||(v=!0,sr(N))),T},t.unstable_shouldYield=Fe,t.unstable_wrapCallback=function(T){var M=d;return function(){var U=d;d=M;try{return T.apply(this,arguments)}finally{d=U}}}})(Oh);Ah.exports=Oh;var ey=Ah.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ty=z,et=ey;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mh=new Set,Oi={};function tr(t,e){Fr(t,e),Fr(t+"Capture",e)}function Fr(t,e){for(Oi[t]=e,t=0;t<e.length;t++)Mh.add(e[t])}var $t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),da=Object.prototype.hasOwnProperty,ny=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dd={},fd={};function ry(t){return da.call(fd,t)?!0:da.call(dd,t)?!1:ny.test(t)?fd[t]=!0:(dd[t]=!0,!1)}function iy(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function sy(t,e,n,r){if(e===null||typeof e>"u"||iy(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Be(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Pe[t]=new Be(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Pe[e]=new Be(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Pe[t]=new Be(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Pe[t]=new Be(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Pe[t]=new Be(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Pe[t]=new Be(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Pe[t]=new Be(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Pe[t]=new Be(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Pe[t]=new Be(t,5,!1,t.toLowerCase(),null,!1,!1)});var Iu=/[\-:]([a-z])/g;function Nu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Iu,Nu);Pe[e]=new Be(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Iu,Nu);Pe[e]=new Be(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Iu,Nu);Pe[e]=new Be(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Pe[t]=new Be(t,1,!1,t.toLowerCase(),null,!1,!1)});Pe.xlinkHref=new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Pe[t]=new Be(t,1,!1,t.toLowerCase(),null,!0,!0)});function Tu(t,e,n,r){var i=Pe.hasOwnProperty(e)?Pe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(sy(e,n,i,r)&&(n=null),r||i===null?ry(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var qt=ty.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ks=Symbol.for("react.element"),hr=Symbol.for("react.portal"),pr=Symbol.for("react.fragment"),Ru=Symbol.for("react.strict_mode"),fa=Symbol.for("react.profiler"),Lh=Symbol.for("react.provider"),Fh=Symbol.for("react.context"),Pu=Symbol.for("react.forward_ref"),ha=Symbol.for("react.suspense"),pa=Symbol.for("react.suspense_list"),Du=Symbol.for("react.memo"),sn=Symbol.for("react.lazy"),jh=Symbol.for("react.offscreen"),hd=Symbol.iterator;function ri(t){return t===null||typeof t!="object"?null:(t=hd&&t[hd]||t["@@iterator"],typeof t=="function"?t:null)}var le=Object.assign,Il;function gi(t){if(Il===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Il=e&&e[1]||""}return`
`+Il+t}var Nl=!1;function Tl(t,e){if(!t||Nl)return"";Nl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Nl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?gi(t):""}function oy(t){switch(t.tag){case 5:return gi(t.type);case 16:return gi("Lazy");case 13:return gi("Suspense");case 19:return gi("SuspenseList");case 0:case 2:case 15:return t=Tl(t.type,!1),t;case 11:return t=Tl(t.type.render,!1),t;case 1:return t=Tl(t.type,!0),t;default:return""}}function ma(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case pr:return"Fragment";case hr:return"Portal";case fa:return"Profiler";case Ru:return"StrictMode";case ha:return"Suspense";case pa:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Fh:return(t.displayName||"Context")+".Consumer";case Lh:return(t._context.displayName||"Context")+".Provider";case Pu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Du:return e=t.displayName||null,e!==null?e:ma(t.type)||"Memo";case sn:e=t._payload,t=t._init;try{return ma(t(e))}catch{}}return null}function ly(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ma(e);case 8:return e===Ru?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function En(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function zh(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ay(t){var e=zh(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Is(t){t._valueTracker||(t._valueTracker=ay(t))}function Uh(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=zh(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function no(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ga(t,e){var n=e.checked;return le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function pd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=En(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Bh(t,e){e=e.checked,e!=null&&Tu(t,"checked",e,!1)}function _a(t,e){Bh(t,e);var n=En(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ya(t,e.type,n):e.hasOwnProperty("defaultValue")&&ya(t,e.type,En(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function md(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ya(t,e,n){(e!=="number"||no(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var _i=Array.isArray;function Nr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+En(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function va(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function gd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(_i(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:En(n)}}function Wh(t,e){var n=En(e.value),r=En(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function _d(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function $h(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wa(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?$h(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ns,Vh=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ns=Ns||document.createElement("div"),Ns.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ns.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Mi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var wi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uy=["Webkit","ms","Moz","O"];Object.keys(wi).forEach(function(t){uy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),wi[e]=wi[t]})});function Hh(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||wi.hasOwnProperty(t)&&wi[t]?(""+e).trim():e+"px"}function Gh(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Hh(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var cy=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ca(t,e){if(e){if(cy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function Ea(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sa=null;function bu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xa=null,Tr=null,Rr=null;function yd(t){if(t=us(t)){if(typeof xa!="function")throw Error(x(280));var e=t.stateNode;e&&(e=qo(e),xa(t.stateNode,t.type,e))}}function Qh(t){Tr?Rr?Rr.push(t):Rr=[t]:Tr=t}function Yh(){if(Tr){var t=Tr,e=Rr;if(Rr=Tr=null,yd(t),e)for(t=0;t<e.length;t++)yd(e[t])}}function Kh(t,e){return t(e)}function qh(){}var Rl=!1;function Xh(t,e,n){if(Rl)return t(e,n);Rl=!0;try{return Kh(t,e,n)}finally{Rl=!1,(Tr!==null||Rr!==null)&&(qh(),Yh())}}function Li(t,e){var n=t.stateNode;if(n===null)return null;var r=qo(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var ka=!1;if($t)try{var ii={};Object.defineProperty(ii,"passive",{get:function(){ka=!0}}),window.addEventListener("test",ii,ii),window.removeEventListener("test",ii,ii)}catch{ka=!1}function dy(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var Ci=!1,ro=null,io=!1,Ia=null,fy={onError:function(t){Ci=!0,ro=t}};function hy(t,e,n,r,i,s,o,l,a){Ci=!1,ro=null,dy.apply(fy,arguments)}function py(t,e,n,r,i,s,o,l,a){if(hy.apply(this,arguments),Ci){if(Ci){var u=ro;Ci=!1,ro=null}else throw Error(x(198));io||(io=!0,Ia=u)}}function nr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Jh(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vd(t){if(nr(t)!==t)throw Error(x(188))}function my(t){var e=t.alternate;if(!e){if(e=nr(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return vd(i),t;if(s===r)return vd(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function Zh(t){return t=my(t),t!==null?ep(t):null}function ep(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ep(t);if(e!==null)return e;t=t.sibling}return null}var tp=et.unstable_scheduleCallback,wd=et.unstable_cancelCallback,gy=et.unstable_shouldYield,_y=et.unstable_requestPaint,he=et.unstable_now,yy=et.unstable_getCurrentPriorityLevel,Au=et.unstable_ImmediatePriority,np=et.unstable_UserBlockingPriority,so=et.unstable_NormalPriority,vy=et.unstable_LowPriority,rp=et.unstable_IdlePriority,Go=null,Rt=null;function wy(t){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Go,t,void 0,(t.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:Sy,Cy=Math.log,Ey=Math.LN2;function Sy(t){return t>>>=0,t===0?32:31-(Cy(t)/Ey|0)|0}var Ts=64,Rs=4194304;function yi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function oo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=yi(l):(s&=o,s!==0&&(r=yi(s)))}else o=n&~i,o!==0?r=yi(o):s!==0&&(r=yi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-yt(e),i=1<<n,r|=t[n],e&=~i;return r}function xy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ky(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-yt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=xy(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Na(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ip(){var t=Ts;return Ts<<=1,!(Ts&4194240)&&(Ts=64),t}function Pl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ls(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-yt(e),t[e]=n}function Iy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-yt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ou(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-yt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Y=0;function sp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var op,Mu,lp,ap,up,Ta=!1,Ps=[],dn=null,fn=null,hn=null,Fi=new Map,ji=new Map,ln=[],Ny="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cd(t,e){switch(t){case"focusin":case"focusout":dn=null;break;case"dragenter":case"dragleave":fn=null;break;case"mouseover":case"mouseout":hn=null;break;case"pointerover":case"pointerout":Fi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ji.delete(e.pointerId)}}function si(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=us(e),e!==null&&Mu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Ty(t,e,n,r,i){switch(e){case"focusin":return dn=si(dn,t,e,n,r,i),!0;case"dragenter":return fn=si(fn,t,e,n,r,i),!0;case"mouseover":return hn=si(hn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Fi.set(s,si(Fi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ji.set(s,si(ji.get(s)||null,t,e,n,r,i)),!0}return!1}function cp(t){var e=zn(t.target);if(e!==null){var n=nr(e);if(n!==null){if(e=n.tag,e===13){if(e=Jh(n),e!==null){t.blockedOn=e,up(t.priority,function(){lp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ra(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Sa=r,n.target.dispatchEvent(r),Sa=null}else return e=us(n),e!==null&&Mu(e),t.blockedOn=n,!1;e.shift()}return!0}function Ed(t,e,n){Hs(t)&&n.delete(e)}function Ry(){Ta=!1,dn!==null&&Hs(dn)&&(dn=null),fn!==null&&Hs(fn)&&(fn=null),hn!==null&&Hs(hn)&&(hn=null),Fi.forEach(Ed),ji.forEach(Ed)}function oi(t,e){t.blockedOn===e&&(t.blockedOn=null,Ta||(Ta=!0,et.unstable_scheduleCallback(et.unstable_NormalPriority,Ry)))}function zi(t){function e(i){return oi(i,t)}if(0<Ps.length){oi(Ps[0],t);for(var n=1;n<Ps.length;n++){var r=Ps[n];r.blockedOn===t&&(r.blockedOn=null)}}for(dn!==null&&oi(dn,t),fn!==null&&oi(fn,t),hn!==null&&oi(hn,t),Fi.forEach(e),ji.forEach(e),n=0;n<ln.length;n++)r=ln[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ln.length&&(n=ln[0],n.blockedOn===null);)cp(n),n.blockedOn===null&&ln.shift()}var Pr=qt.ReactCurrentBatchConfig,lo=!0;function Py(t,e,n,r){var i=Y,s=Pr.transition;Pr.transition=null;try{Y=1,Lu(t,e,n,r)}finally{Y=i,Pr.transition=s}}function Dy(t,e,n,r){var i=Y,s=Pr.transition;Pr.transition=null;try{Y=4,Lu(t,e,n,r)}finally{Y=i,Pr.transition=s}}function Lu(t,e,n,r){if(lo){var i=Ra(t,e,n,r);if(i===null)Ul(t,e,r,ao,n),Cd(t,r);else if(Ty(i,t,e,n,r))r.stopPropagation();else if(Cd(t,r),e&4&&-1<Ny.indexOf(t)){for(;i!==null;){var s=us(i);if(s!==null&&op(s),s=Ra(t,e,n,r),s===null&&Ul(t,e,r,ao,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ul(t,e,r,null,n)}}var ao=null;function Ra(t,e,n,r){if(ao=null,t=bu(r),t=zn(t),t!==null)if(e=nr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Jh(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ao=t,null}function dp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yy()){case Au:return 1;case np:return 4;case so:case vy:return 16;case rp:return 536870912;default:return 16}default:return 16}}var un=null,Fu=null,Gs=null;function fp(){if(Gs)return Gs;var t,e=Fu,n=e.length,r,i="value"in un?un.value:un.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Gs=i.slice(t,1<r?1-r:void 0)}function Qs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ds(){return!0}function Sd(){return!1}function nt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ds:Sd,this.isPropagationStopped=Sd,this}return le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ds)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ds)},persist:function(){},isPersistent:Ds}),e}var Kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ju=nt(Kr),as=le({},Kr,{view:0,detail:0}),by=nt(as),Dl,bl,li,Qo=le({},as,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==li&&(li&&t.type==="mousemove"?(Dl=t.screenX-li.screenX,bl=t.screenY-li.screenY):bl=Dl=0,li=t),Dl)},movementY:function(t){return"movementY"in t?t.movementY:bl}}),xd=nt(Qo),Ay=le({},Qo,{dataTransfer:0}),Oy=nt(Ay),My=le({},as,{relatedTarget:0}),Al=nt(My),Ly=le({},Kr,{animationName:0,elapsedTime:0,pseudoElement:0}),Fy=nt(Ly),jy=le({},Kr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zy=nt(jy),Uy=le({},Kr,{data:0}),kd=nt(Uy),By={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$y={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$y[t])?!!e[t]:!1}function zu(){return Vy}var Hy=le({},as,{key:function(t){if(t.key){var e=By[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Qs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Wy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zu,charCode:function(t){return t.type==="keypress"?Qs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Gy=nt(Hy),Qy=le({},Qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Id=nt(Qy),Yy=le({},as,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zu}),Ky=nt(Yy),qy=le({},Kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xy=nt(qy),Jy=le({},Qo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Zy=nt(Jy),ev=[9,13,27,32],Uu=$t&&"CompositionEvent"in window,Ei=null;$t&&"documentMode"in document&&(Ei=document.documentMode);var tv=$t&&"TextEvent"in window&&!Ei,hp=$t&&(!Uu||Ei&&8<Ei&&11>=Ei),Nd=" ",Td=!1;function pp(t,e){switch(t){case"keyup":return ev.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var mr=!1;function nv(t,e){switch(t){case"compositionend":return mp(e);case"keypress":return e.which!==32?null:(Td=!0,Nd);case"textInput":return t=e.data,t===Nd&&Td?null:t;default:return null}}function rv(t,e){if(mr)return t==="compositionend"||!Uu&&pp(t,e)?(t=fp(),Gs=Fu=un=null,mr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return hp&&e.locale!=="ko"?null:e.data;default:return null}}var iv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!iv[t.type]:e==="textarea"}function gp(t,e,n,r){Qh(r),e=uo(e,"onChange"),0<e.length&&(n=new ju("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Si=null,Ui=null;function sv(t){Np(t,0)}function Yo(t){var e=yr(t);if(Uh(e))return t}function ov(t,e){if(t==="change")return e}var _p=!1;if($t){var Ol;if($t){var Ml="oninput"in document;if(!Ml){var Pd=document.createElement("div");Pd.setAttribute("oninput","return;"),Ml=typeof Pd.oninput=="function"}Ol=Ml}else Ol=!1;_p=Ol&&(!document.documentMode||9<document.documentMode)}function Dd(){Si&&(Si.detachEvent("onpropertychange",yp),Ui=Si=null)}function yp(t){if(t.propertyName==="value"&&Yo(Ui)){var e=[];gp(e,Ui,t,bu(t)),Xh(sv,e)}}function lv(t,e,n){t==="focusin"?(Dd(),Si=e,Ui=n,Si.attachEvent("onpropertychange",yp)):t==="focusout"&&Dd()}function av(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yo(Ui)}function uv(t,e){if(t==="click")return Yo(e)}function cv(t,e){if(t==="input"||t==="change")return Yo(e)}function dv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ct=typeof Object.is=="function"?Object.is:dv;function Bi(t,e){if(Ct(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!da.call(e,i)||!Ct(t[i],e[i]))return!1}return!0}function bd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ad(t,e){var n=bd(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bd(n)}}function vp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?vp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function wp(){for(var t=window,e=no();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=no(t.document)}return e}function Bu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function fv(t){var e=wp(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&vp(n.ownerDocument.documentElement,n)){if(r!==null&&Bu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ad(n,s);var o=Ad(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var hv=$t&&"documentMode"in document&&11>=document.documentMode,gr=null,Pa=null,xi=null,Da=!1;function Od(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Da||gr==null||gr!==no(r)||(r=gr,"selectionStart"in r&&Bu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xi&&Bi(xi,r)||(xi=r,r=uo(Pa,"onSelect"),0<r.length&&(e=new ju("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=gr)))}function bs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var _r={animationend:bs("Animation","AnimationEnd"),animationiteration:bs("Animation","AnimationIteration"),animationstart:bs("Animation","AnimationStart"),transitionend:bs("Transition","TransitionEnd")},Ll={},Cp={};$t&&(Cp=document.createElement("div").style,"AnimationEvent"in window||(delete _r.animationend.animation,delete _r.animationiteration.animation,delete _r.animationstart.animation),"TransitionEvent"in window||delete _r.transitionend.transition);function Ko(t){if(Ll[t])return Ll[t];if(!_r[t])return t;var e=_r[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Cp)return Ll[t]=e[n];return t}var Ep=Ko("animationend"),Sp=Ko("animationiteration"),xp=Ko("animationstart"),kp=Ko("transitionend"),Ip=new Map,Md="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function In(t,e){Ip.set(t,e),tr(e,[t])}for(var Fl=0;Fl<Md.length;Fl++){var jl=Md[Fl],pv=jl.toLowerCase(),mv=jl[0].toUpperCase()+jl.slice(1);In(pv,"on"+mv)}In(Ep,"onAnimationEnd");In(Sp,"onAnimationIteration");In(xp,"onAnimationStart");In("dblclick","onDoubleClick");In("focusin","onFocus");In("focusout","onBlur");In(kp,"onTransitionEnd");Fr("onMouseEnter",["mouseout","mouseover"]);Fr("onMouseLeave",["mouseout","mouseover"]);Fr("onPointerEnter",["pointerout","pointerover"]);Fr("onPointerLeave",["pointerout","pointerover"]);tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gv=new Set("cancel close invalid load scroll toggle".split(" ").concat(vi));function Ld(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,py(r,e,void 0,t),t.currentTarget=null}function Np(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Ld(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Ld(i,l,u),s=a}}}if(io)throw t=Ia,io=!1,Ia=null,t}function te(t,e){var n=e[La];n===void 0&&(n=e[La]=new Set);var r=t+"__bubble";n.has(r)||(Tp(e,t,2,!1),n.add(r))}function zl(t,e,n){var r=0;e&&(r|=4),Tp(n,t,r,e)}var As="_reactListening"+Math.random().toString(36).slice(2);function Wi(t){if(!t[As]){t[As]=!0,Mh.forEach(function(n){n!=="selectionchange"&&(gv.has(n)||zl(n,!1,t),zl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[As]||(e[As]=!0,zl("selectionchange",!1,e))}}function Tp(t,e,n,r){switch(dp(e)){case 1:var i=Py;break;case 4:i=Dy;break;default:i=Lu}n=i.bind(null,e,n,t),i=void 0,!ka||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ul(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=zn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Xh(function(){var u=s,f=bu(n),c=[];e:{var d=Ip.get(t);if(d!==void 0){var y=ju,v=t;switch(t){case"keypress":if(Qs(n)===0)break e;case"keydown":case"keyup":y=Gy;break;case"focusin":v="focus",y=Al;break;case"focusout":v="blur",y=Al;break;case"beforeblur":case"afterblur":y=Al;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=xd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Oy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Ky;break;case Ep:case Sp:case xp:y=Fy;break;case kp:y=Xy;break;case"scroll":y=by;break;case"wheel":y=Zy;break;case"copy":case"cut":case"paste":y=zy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Id}var E=(e&4)!==0,L=!E&&t==="scroll",g=E?d!==null?d+"Capture":null:d;E=[];for(var p=u,_;p!==null;){_=p;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,g!==null&&(S=Li(p,g),S!=null&&E.push($i(p,S,_)))),L)break;p=p.return}0<E.length&&(d=new y(d,v,null,n,f),c.push({event:d,listeners:E}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",d&&n!==Sa&&(v=n.relatedTarget||n.fromElement)&&(zn(v)||v[Vt]))break e;if((y||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?zn(v):null,v!==null&&(L=nr(v),v!==L||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(E=xd,S="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(E=Id,S="onPointerLeave",g="onPointerEnter",p="pointer"),L=y==null?d:yr(y),_=v==null?d:yr(v),d=new E(S,p+"leave",y,n,f),d.target=L,d.relatedTarget=_,S=null,zn(f)===u&&(E=new E(g,p+"enter",v,n,f),E.target=_,E.relatedTarget=L,S=E),L=S,y&&v)t:{for(E=y,g=v,p=0,_=E;_;_=dr(_))p++;for(_=0,S=g;S;S=dr(S))_++;for(;0<p-_;)E=dr(E),p--;for(;0<_-p;)g=dr(g),_--;for(;p--;){if(E===g||g!==null&&E===g.alternate)break t;E=dr(E),g=dr(g)}E=null}else E=null;y!==null&&Fd(c,d,y,E,!1),v!==null&&L!==null&&Fd(c,L,v,E,!0)}}e:{if(d=u?yr(u):window,y=d.nodeName&&d.nodeName.toLowerCase(),y==="select"||y==="input"&&d.type==="file")var N=ov;else if(Rd(d))if(_p)N=cv;else{N=av;var b=lv}else(y=d.nodeName)&&y.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(N=uv);if(N&&(N=N(t,u))){gp(c,N,n,f);break e}b&&b(t,d,u),t==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&ya(d,"number",d.value)}switch(b=u?yr(u):window,t){case"focusin":(Rd(b)||b.contentEditable==="true")&&(gr=b,Pa=u,xi=null);break;case"focusout":xi=Pa=gr=null;break;case"mousedown":Da=!0;break;case"contextmenu":case"mouseup":case"dragend":Da=!1,Od(c,n,f);break;case"selectionchange":if(hv)break;case"keydown":case"keyup":Od(c,n,f)}var D;if(Uu)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else mr?pp(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(hp&&n.locale!=="ko"&&(mr||A!=="onCompositionStart"?A==="onCompositionEnd"&&mr&&(D=fp()):(un=f,Fu="value"in un?un.value:un.textContent,mr=!0)),b=uo(u,A),0<b.length&&(A=new kd(A,t,null,n,f),c.push({event:A,listeners:b}),D?A.data=D:(D=mp(n),D!==null&&(A.data=D)))),(D=tv?nv(t,n):rv(t,n))&&(u=uo(u,"onBeforeInput"),0<u.length&&(f=new kd("onBeforeInput","beforeinput",null,n,f),c.push({event:f,listeners:u}),f.data=D))}Np(c,e)})}function $i(t,e,n){return{instance:t,listener:e,currentTarget:n}}function uo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Li(t,n),s!=null&&r.unshift($i(t,s,i)),s=Li(t,e),s!=null&&r.push($i(t,s,i))),t=t.return}return r}function dr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Fd(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Li(n,s),a!=null&&o.unshift($i(n,a,l))):i||(a=Li(n,s),a!=null&&o.push($i(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var _v=/\r\n?/g,yv=/\u0000|\uFFFD/g;function jd(t){return(typeof t=="string"?t:""+t).replace(_v,`
`).replace(yv,"")}function Os(t,e,n){if(e=jd(e),jd(t)!==e&&n)throw Error(x(425))}function co(){}var ba=null,Aa=null;function Oa(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ma=typeof setTimeout=="function"?setTimeout:void 0,vv=typeof clearTimeout=="function"?clearTimeout:void 0,zd=typeof Promise=="function"?Promise:void 0,wv=typeof queueMicrotask=="function"?queueMicrotask:typeof zd<"u"?function(t){return zd.resolve(null).then(t).catch(Cv)}:Ma;function Cv(t){setTimeout(function(){throw t})}function Bl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),zi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);zi(e)}function pn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ud(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qr=Math.random().toString(36).slice(2),Tt="__reactFiber$"+qr,Vi="__reactProps$"+qr,Vt="__reactContainer$"+qr,La="__reactEvents$"+qr,Ev="__reactListeners$"+qr,Sv="__reactHandles$"+qr;function zn(t){var e=t[Tt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Vt]||n[Tt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ud(t);t!==null;){if(n=t[Tt])return n;t=Ud(t)}return e}t=n,n=t.parentNode}return null}function us(t){return t=t[Tt]||t[Vt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function yr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function qo(t){return t[Vi]||null}var Fa=[],vr=-1;function Nn(t){return{current:t}}function re(t){0>vr||(t.current=Fa[vr],Fa[vr]=null,vr--)}function Z(t,e){vr++,Fa[vr]=t.current,t.current=e}var Sn={},Le=Nn(Sn),Ge=Nn(!1),Gn=Sn;function jr(t,e){var n=t.type.contextTypes;if(!n)return Sn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Qe(t){return t=t.childContextTypes,t!=null}function fo(){re(Ge),re(Le)}function Bd(t,e,n){if(Le.current!==Sn)throw Error(x(168));Z(Le,e),Z(Ge,n)}function Rp(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,ly(t)||"Unknown",i));return le({},n,r)}function ho(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Sn,Gn=Le.current,Z(Le,t),Z(Ge,Ge.current),!0}function Wd(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=Rp(t,e,Gn),r.__reactInternalMemoizedMergedChildContext=t,re(Ge),re(Le),Z(Le,t)):re(Ge),Z(Ge,n)}var Ft=null,Xo=!1,Wl=!1;function Pp(t){Ft===null?Ft=[t]:Ft.push(t)}function xv(t){Xo=!0,Pp(t)}function Tn(){if(!Wl&&Ft!==null){Wl=!0;var t=0,e=Y;try{var n=Ft;for(Y=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ft=null,Xo=!1}catch(i){throw Ft!==null&&(Ft=Ft.slice(t+1)),tp(Au,Tn),i}finally{Y=e,Wl=!1}}return null}var wr=[],Cr=0,po=null,mo=0,it=[],st=0,Qn=null,jt=1,zt="";function Mn(t,e){wr[Cr++]=mo,wr[Cr++]=po,po=t,mo=e}function Dp(t,e,n){it[st++]=jt,it[st++]=zt,it[st++]=Qn,Qn=t;var r=jt;t=zt;var i=32-yt(r)-1;r&=~(1<<i),n+=1;var s=32-yt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,jt=1<<32-yt(e)+i|n<<i|r,zt=s+t}else jt=1<<s|n<<i|r,zt=t}function Wu(t){t.return!==null&&(Mn(t,1),Dp(t,1,0))}function $u(t){for(;t===po;)po=wr[--Cr],wr[Cr]=null,mo=wr[--Cr],wr[Cr]=null;for(;t===Qn;)Qn=it[--st],it[st]=null,zt=it[--st],it[st]=null,jt=it[--st],it[st]=null}var Ze=null,Je=null,ie=!1,pt=null;function bp(t,e){var n=ot(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function $d(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ze=t,Je=pn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ze=t,Je=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qn!==null?{id:jt,overflow:zt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ot(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ze=t,Je=null,!0):!1;default:return!1}}function ja(t){return(t.mode&1)!==0&&(t.flags&128)===0}function za(t){if(ie){var e=Je;if(e){var n=e;if(!$d(t,e)){if(ja(t))throw Error(x(418));e=pn(n.nextSibling);var r=Ze;e&&$d(t,e)?bp(r,n):(t.flags=t.flags&-4097|2,ie=!1,Ze=t)}}else{if(ja(t))throw Error(x(418));t.flags=t.flags&-4097|2,ie=!1,Ze=t}}}function Vd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ze=t}function Ms(t){if(t!==Ze)return!1;if(!ie)return Vd(t),ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Oa(t.type,t.memoizedProps)),e&&(e=Je)){if(ja(t))throw Ap(),Error(x(418));for(;e;)bp(t,e),e=pn(e.nextSibling)}if(Vd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Je=pn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Je=null}}else Je=Ze?pn(t.stateNode.nextSibling):null;return!0}function Ap(){for(var t=Je;t;)t=pn(t.nextSibling)}function zr(){Je=Ze=null,ie=!1}function Vu(t){pt===null?pt=[t]:pt.push(t)}var kv=qt.ReactCurrentBatchConfig;function ai(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function Ls(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Hd(t){var e=t._init;return e(t._payload)}function Op(t){function e(g,p){if(t){var _=g.deletions;_===null?(g.deletions=[p],g.flags|=16):_.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=yn(g,p),g.index=0,g.sibling=null,g}function s(g,p,_){return g.index=_,t?(_=g.alternate,_!==null?(_=_.index,_<p?(g.flags|=2,p):_):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function l(g,p,_,S){return p===null||p.tag!==6?(p=Kl(_,g.mode,S),p.return=g,p):(p=i(p,_),p.return=g,p)}function a(g,p,_,S){var N=_.type;return N===pr?f(g,p,_.props.children,S,_.key):p!==null&&(p.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===sn&&Hd(N)===p.type)?(S=i(p,_.props),S.ref=ai(g,p,_),S.return=g,S):(S=eo(_.type,_.key,_.props,null,g.mode,S),S.ref=ai(g,p,_),S.return=g,S)}function u(g,p,_,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==_.containerInfo||p.stateNode.implementation!==_.implementation?(p=ql(_,g.mode,S),p.return=g,p):(p=i(p,_.children||[]),p.return=g,p)}function f(g,p,_,S,N){return p===null||p.tag!==7?(p=Hn(_,g.mode,S,N),p.return=g,p):(p=i(p,_),p.return=g,p)}function c(g,p,_){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Kl(""+p,g.mode,_),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ks:return _=eo(p.type,p.key,p.props,null,g.mode,_),_.ref=ai(g,null,p),_.return=g,_;case hr:return p=ql(p,g.mode,_),p.return=g,p;case sn:var S=p._init;return c(g,S(p._payload),_)}if(_i(p)||ri(p))return p=Hn(p,g.mode,_,null),p.return=g,p;Ls(g,p)}return null}function d(g,p,_,S){var N=p!==null?p.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return N!==null?null:l(g,p,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ks:return _.key===N?a(g,p,_,S):null;case hr:return _.key===N?u(g,p,_,S):null;case sn:return N=_._init,d(g,p,N(_._payload),S)}if(_i(_)||ri(_))return N!==null?null:f(g,p,_,S,null);Ls(g,_)}return null}function y(g,p,_,S,N){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(_)||null,l(p,g,""+S,N);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ks:return g=g.get(S.key===null?_:S.key)||null,a(p,g,S,N);case hr:return g=g.get(S.key===null?_:S.key)||null,u(p,g,S,N);case sn:var b=S._init;return y(g,p,_,b(S._payload),N)}if(_i(S)||ri(S))return g=g.get(_)||null,f(p,g,S,N,null);Ls(p,S)}return null}function v(g,p,_,S){for(var N=null,b=null,D=p,A=p=0,q=null;D!==null&&A<_.length;A++){D.index>A?(q=D,D=null):q=D.sibling;var F=d(g,D,_[A],S);if(F===null){D===null&&(D=q);break}t&&D&&F.alternate===null&&e(g,D),p=s(F,p,A),b===null?N=F:b.sibling=F,b=F,D=q}if(A===_.length)return n(g,D),ie&&Mn(g,A),N;if(D===null){for(;A<_.length;A++)D=c(g,_[A],S),D!==null&&(p=s(D,p,A),b===null?N=D:b.sibling=D,b=D);return ie&&Mn(g,A),N}for(D=r(g,D);A<_.length;A++)q=y(D,g,A,_[A],S),q!==null&&(t&&q.alternate!==null&&D.delete(q.key===null?A:q.key),p=s(q,p,A),b===null?N=q:b.sibling=q,b=q);return t&&D.forEach(function(Fe){return e(g,Fe)}),ie&&Mn(g,A),N}function E(g,p,_,S){var N=ri(_);if(typeof N!="function")throw Error(x(150));if(_=N.call(_),_==null)throw Error(x(151));for(var b=N=null,D=p,A=p=0,q=null,F=_.next();D!==null&&!F.done;A++,F=_.next()){D.index>A?(q=D,D=null):q=D.sibling;var Fe=d(g,D,F.value,S);if(Fe===null){D===null&&(D=q);break}t&&D&&Fe.alternate===null&&e(g,D),p=s(Fe,p,A),b===null?N=Fe:b.sibling=Fe,b=Fe,D=q}if(F.done)return n(g,D),ie&&Mn(g,A),N;if(D===null){for(;!F.done;A++,F=_.next())F=c(g,F.value,S),F!==null&&(p=s(F,p,A),b===null?N=F:b.sibling=F,b=F);return ie&&Mn(g,A),N}for(D=r(g,D);!F.done;A++,F=_.next())F=y(D,g,A,F.value,S),F!==null&&(t&&F.alternate!==null&&D.delete(F.key===null?A:F.key),p=s(F,p,A),b===null?N=F:b.sibling=F,b=F);return t&&D.forEach(function(Pn){return e(g,Pn)}),ie&&Mn(g,A),N}function L(g,p,_,S){if(typeof _=="object"&&_!==null&&_.type===pr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case ks:e:{for(var N=_.key,b=p;b!==null;){if(b.key===N){if(N=_.type,N===pr){if(b.tag===7){n(g,b.sibling),p=i(b,_.props.children),p.return=g,g=p;break e}}else if(b.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===sn&&Hd(N)===b.type){n(g,b.sibling),p=i(b,_.props),p.ref=ai(g,b,_),p.return=g,g=p;break e}n(g,b);break}else e(g,b);b=b.sibling}_.type===pr?(p=Hn(_.props.children,g.mode,S,_.key),p.return=g,g=p):(S=eo(_.type,_.key,_.props,null,g.mode,S),S.ref=ai(g,p,_),S.return=g,g=S)}return o(g);case hr:e:{for(b=_.key;p!==null;){if(p.key===b)if(p.tag===4&&p.stateNode.containerInfo===_.containerInfo&&p.stateNode.implementation===_.implementation){n(g,p.sibling),p=i(p,_.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=ql(_,g.mode,S),p.return=g,g=p}return o(g);case sn:return b=_._init,L(g,p,b(_._payload),S)}if(_i(_))return v(g,p,_,S);if(ri(_))return E(g,p,_,S);Ls(g,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,_),p.return=g,g=p):(n(g,p),p=Kl(_,g.mode,S),p.return=g,g=p),o(g)):n(g,p)}return L}var Ur=Op(!0),Mp=Op(!1),go=Nn(null),_o=null,Er=null,Hu=null;function Gu(){Hu=Er=_o=null}function Qu(t){var e=go.current;re(go),t._currentValue=e}function Ua(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Dr(t,e){_o=t,Hu=Er=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&($e=!0),t.firstContext=null)}function at(t){var e=t._currentValue;if(Hu!==t)if(t={context:t,memoizedValue:e,next:null},Er===null){if(_o===null)throw Error(x(308));Er=t,_o.dependencies={lanes:0,firstContext:t}}else Er=Er.next=t;return e}var Un=null;function Yu(t){Un===null?Un=[t]:Un.push(t)}function Lp(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Yu(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ht(t,r)}function Ht(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var on=!1;function Ku(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fp(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function mn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ht(t,n)}return i=r.interleaved,i===null?(e.next=e,Yu(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ht(t,n)}function Ys(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ou(t,n)}}function Gd(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function yo(t,e,n,r){var i=t.updateQueue;on=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,f=u=a=null,l=s;do{var d=l.lane,y=l.eventTime;if((r&d)===d){f!==null&&(f=f.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,E=l;switch(d=e,y=n,E.tag){case 1:if(v=E.payload,typeof v=="function"){c=v.call(y,c,d);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=E.payload,d=typeof v=="function"?v.call(y,c,d):v,d==null)break e;c=le({},c,d);break e;case 2:on=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[l]:d.push(l))}else y={eventTime:y,lane:d,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=y,a=c):f=f.next=y,o|=d;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;d=l,l=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(f===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Kn|=o,t.lanes=o,t.memoizedState=c}}function Qd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var cs={},Pt=Nn(cs),Hi=Nn(cs),Gi=Nn(cs);function Bn(t){if(t===cs)throw Error(x(174));return t}function qu(t,e){switch(Z(Gi,e),Z(Hi,t),Z(Pt,cs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:wa(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=wa(e,t)}re(Pt),Z(Pt,e)}function Br(){re(Pt),re(Hi),re(Gi)}function jp(t){Bn(Gi.current);var e=Bn(Pt.current),n=wa(e,t.type);e!==n&&(Z(Hi,t),Z(Pt,n))}function Xu(t){Hi.current===t&&(re(Pt),re(Hi))}var se=Nn(0);function vo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $l=[];function Ju(){for(var t=0;t<$l.length;t++)$l[t]._workInProgressVersionPrimary=null;$l.length=0}var Ks=qt.ReactCurrentDispatcher,Vl=qt.ReactCurrentBatchConfig,Yn=0,oe=null,ye=null,Se=null,wo=!1,ki=!1,Qi=0,Iv=0;function be(){throw Error(x(321))}function Zu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ct(t[n],e[n]))return!1;return!0}function ec(t,e,n,r,i,s){if(Yn=s,oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ks.current=t===null||t.memoizedState===null?Pv:Dv,t=n(r,i),ki){s=0;do{if(ki=!1,Qi=0,25<=s)throw Error(x(301));s+=1,Se=ye=null,e.updateQueue=null,Ks.current=bv,t=n(r,i)}while(ki)}if(Ks.current=Co,e=ye!==null&&ye.next!==null,Yn=0,Se=ye=oe=null,wo=!1,e)throw Error(x(300));return t}function tc(){var t=Qi!==0;return Qi=0,t}function Nt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?oe.memoizedState=Se=t:Se=Se.next=t,Se}function ut(){if(ye===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=ye.next;var e=Se===null?oe.memoizedState:Se.next;if(e!==null)Se=e,ye=t;else{if(t===null)throw Error(x(310));ye=t,t={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},Se===null?oe.memoizedState=Se=t:Se=Se.next=t}return Se}function Yi(t,e){return typeof e=="function"?e(t):e}function Hl(t){var e=ut(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=ye,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var f=u.lane;if((Yn&f)===f)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,oe.lanes|=f,Kn|=f}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,Ct(r,e.memoizedState)||($e=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,oe.lanes|=s,Kn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gl(t){var e=ut(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ct(s,e.memoizedState)||($e=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function zp(){}function Up(t,e){var n=oe,r=ut(),i=e(),s=!Ct(r.memoizedState,i);if(s&&(r.memoizedState=i,$e=!0),r=r.queue,nc($p.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,Ki(9,Wp.bind(null,n,r,i,e),void 0,null),Ie===null)throw Error(x(349));Yn&30||Bp(n,e,i)}return i}function Bp(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Wp(t,e,n,r){e.value=n,e.getSnapshot=r,Vp(e)&&Hp(t)}function $p(t,e,n){return n(function(){Vp(e)&&Hp(t)})}function Vp(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ct(t,n)}catch{return!0}}function Hp(t){var e=Ht(t,1);e!==null&&vt(e,t,1,-1)}function Yd(t){var e=Nt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:t},e.queue=t,t=t.dispatch=Rv.bind(null,oe,t),[e.memoizedState,t]}function Ki(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Gp(){return ut().memoizedState}function qs(t,e,n,r){var i=Nt();oe.flags|=t,i.memoizedState=Ki(1|e,n,void 0,r===void 0?null:r)}function Jo(t,e,n,r){var i=ut();r=r===void 0?null:r;var s=void 0;if(ye!==null){var o=ye.memoizedState;if(s=o.destroy,r!==null&&Zu(r,o.deps)){i.memoizedState=Ki(e,n,s,r);return}}oe.flags|=t,i.memoizedState=Ki(1|e,n,s,r)}function Kd(t,e){return qs(8390656,8,t,e)}function nc(t,e){return Jo(2048,8,t,e)}function Qp(t,e){return Jo(4,2,t,e)}function Yp(t,e){return Jo(4,4,t,e)}function Kp(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function qp(t,e,n){return n=n!=null?n.concat([t]):null,Jo(4,4,Kp.bind(null,e,t),n)}function rc(){}function Xp(t,e){var n=ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Zu(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Jp(t,e){var n=ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Zu(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Zp(t,e,n){return Yn&21?(Ct(n,e)||(n=ip(),oe.lanes|=n,Kn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,$e=!0),t.memoizedState=n)}function Nv(t,e){var n=Y;Y=n!==0&&4>n?n:4,t(!0);var r=Vl.transition;Vl.transition={};try{t(!1),e()}finally{Y=n,Vl.transition=r}}function em(){return ut().memoizedState}function Tv(t,e,n){var r=_n(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},tm(t))nm(e,n);else if(n=Lp(t,e,n,r),n!==null){var i=ze();vt(n,t,r,i),rm(n,e,r)}}function Rv(t,e,n){var r=_n(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(tm(t))nm(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ct(l,o)){var a=e.interleaved;a===null?(i.next=i,Yu(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Lp(t,e,i,r),n!==null&&(i=ze(),vt(n,t,r,i),rm(n,e,r))}}function tm(t){var e=t.alternate;return t===oe||e!==null&&e===oe}function nm(t,e){ki=wo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function rm(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ou(t,n)}}var Co={readContext:at,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},Pv={readContext:at,useCallback:function(t,e){return Nt().memoizedState=[t,e===void 0?null:e],t},useContext:at,useEffect:Kd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,qs(4194308,4,Kp.bind(null,e,t),n)},useLayoutEffect:function(t,e){return qs(4194308,4,t,e)},useInsertionEffect:function(t,e){return qs(4,2,t,e)},useMemo:function(t,e){var n=Nt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Nt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Tv.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var e=Nt();return t={current:t},e.memoizedState=t},useState:Yd,useDebugValue:rc,useDeferredValue:function(t){return Nt().memoizedState=t},useTransition:function(){var t=Yd(!1),e=t[0];return t=Nv.bind(null,t[1]),Nt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=oe,i=Nt();if(ie){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),Ie===null)throw Error(x(349));Yn&30||Bp(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Kd($p.bind(null,r,s,t),[t]),r.flags|=2048,Ki(9,Wp.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Nt(),e=Ie.identifierPrefix;if(ie){var n=zt,r=jt;n=(r&~(1<<32-yt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Qi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Iv++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Dv={readContext:at,useCallback:Xp,useContext:at,useEffect:nc,useImperativeHandle:qp,useInsertionEffect:Qp,useLayoutEffect:Yp,useMemo:Jp,useReducer:Hl,useRef:Gp,useState:function(){return Hl(Yi)},useDebugValue:rc,useDeferredValue:function(t){var e=ut();return Zp(e,ye.memoizedState,t)},useTransition:function(){var t=Hl(Yi)[0],e=ut().memoizedState;return[t,e]},useMutableSource:zp,useSyncExternalStore:Up,useId:em,unstable_isNewReconciler:!1},bv={readContext:at,useCallback:Xp,useContext:at,useEffect:nc,useImperativeHandle:qp,useInsertionEffect:Qp,useLayoutEffect:Yp,useMemo:Jp,useReducer:Gl,useRef:Gp,useState:function(){return Gl(Yi)},useDebugValue:rc,useDeferredValue:function(t){var e=ut();return ye===null?e.memoizedState=t:Zp(e,ye.memoizedState,t)},useTransition:function(){var t=Gl(Yi)[0],e=ut().memoizedState;return[t,e]},useMutableSource:zp,useSyncExternalStore:Up,useId:em,unstable_isNewReconciler:!1};function ft(t,e){if(t&&t.defaultProps){e=le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ba(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zo={isMounted:function(t){return(t=t._reactInternals)?nr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ze(),i=_n(t),s=Bt(r,i);s.payload=e,n!=null&&(s.callback=n),e=mn(t,s,i),e!==null&&(vt(e,t,i,r),Ys(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ze(),i=_n(t),s=Bt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=mn(t,s,i),e!==null&&(vt(e,t,i,r),Ys(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ze(),r=_n(t),i=Bt(n,r);i.tag=2,e!=null&&(i.callback=e),e=mn(t,i,r),e!==null&&(vt(e,t,r,n),Ys(e,t,r))}};function qd(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Bi(n,r)||!Bi(i,s):!0}function im(t,e,n){var r=!1,i=Sn,s=e.contextType;return typeof s=="object"&&s!==null?s=at(s):(i=Qe(e)?Gn:Le.current,r=e.contextTypes,s=(r=r!=null)?jr(t,i):Sn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zo,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Xd(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Zo.enqueueReplaceState(e,e.state,null)}function Wa(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ku(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=at(s):(s=Qe(e)?Gn:Le.current,i.context=jr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ba(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Zo.enqueueReplaceState(i,i.state,null),yo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Wr(t,e){try{var n="",r=e;do n+=oy(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ql(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function $a(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Av=typeof WeakMap=="function"?WeakMap:Map;function sm(t,e,n){n=Bt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){So||(So=!0,Za=r),$a(t,e)},n}function om(t,e,n){n=Bt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){$a(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){$a(t,e),typeof r!="function"&&(gn===null?gn=new Set([this]):gn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Jd(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Av;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Qv.bind(null,t,e,n),e.then(t,t))}function Zd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ef(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Bt(-1,1),e.tag=2,mn(n,e,1))),n.lanes|=1),t)}var Ov=qt.ReactCurrentOwner,$e=!1;function je(t,e,n,r){e.child=t===null?Mp(e,null,n,r):Ur(e,t.child,n,r)}function tf(t,e,n,r,i){n=n.render;var s=e.ref;return Dr(e,i),r=ec(t,e,n,r,s,i),n=tc(),t!==null&&!$e?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gt(t,e,i)):(ie&&n&&Wu(e),e.flags|=1,je(t,e,r,i),e.child)}function nf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!dc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,lm(t,e,s,r,i)):(t=eo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Bi,n(o,r)&&t.ref===e.ref)return Gt(t,e,i)}return e.flags|=1,t=yn(s,r),t.ref=e.ref,t.return=e,e.child=t}function lm(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Bi(s,r)&&t.ref===e.ref)if($e=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&($e=!0);else return e.lanes=t.lanes,Gt(t,e,i)}return Va(t,e,n,r,i)}function am(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(xr,Xe),Xe|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Z(xr,Xe),Xe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Z(xr,Xe),Xe|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Z(xr,Xe),Xe|=r;return je(t,e,i,n),e.child}function um(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Va(t,e,n,r,i){var s=Qe(n)?Gn:Le.current;return s=jr(e,s),Dr(e,i),n=ec(t,e,n,r,s,i),r=tc(),t!==null&&!$e?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gt(t,e,i)):(ie&&r&&Wu(e),e.flags|=1,je(t,e,n,i),e.child)}function rf(t,e,n,r,i){if(Qe(n)){var s=!0;ho(e)}else s=!1;if(Dr(e,i),e.stateNode===null)Xs(t,e),im(e,n,r),Wa(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=at(u):(u=Qe(n)?Gn:Le.current,u=jr(e,u));var f=n.getDerivedStateFromProps,c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Xd(e,o,r,u),on=!1;var d=e.memoizedState;o.state=d,yo(e,r,o,i),a=e.memoizedState,l!==r||d!==a||Ge.current||on?(typeof f=="function"&&(Ba(e,n,f,r),a=e.memoizedState),(l=on||qd(e,n,l,r,d,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Fp(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:ft(e.type,l),o.props=u,c=e.pendingProps,d=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=at(a):(a=Qe(n)?Gn:Le.current,a=jr(e,a));var y=n.getDerivedStateFromProps;(f=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||d!==a)&&Xd(e,o,r,a),on=!1,d=e.memoizedState,o.state=d,yo(e,r,o,i);var v=e.memoizedState;l!==c||d!==v||Ge.current||on?(typeof y=="function"&&(Ba(e,n,y,r),v=e.memoizedState),(u=on||qd(e,n,u,r,d,v,a)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Ha(t,e,n,r,s,i)}function Ha(t,e,n,r,i,s){um(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Wd(e,n,!1),Gt(t,e,s);r=e.stateNode,Ov.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ur(e,t.child,null,s),e.child=Ur(e,null,l,s)):je(t,e,l,s),e.memoizedState=r.state,i&&Wd(e,n,!0),e.child}function cm(t){var e=t.stateNode;e.pendingContext?Bd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Bd(t,e.context,!1),qu(t,e.containerInfo)}function sf(t,e,n,r,i){return zr(),Vu(i),e.flags|=256,je(t,e,n,r),e.child}var Ga={dehydrated:null,treeContext:null,retryLane:0};function Qa(t){return{baseLanes:t,cachePool:null,transitions:null}}function dm(t,e,n){var r=e.pendingProps,i=se.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Z(se,i&1),t===null)return za(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=nl(o,r,0,null),t=Hn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Qa(n),e.memoizedState=Ga,t):ic(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Mv(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=yn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=yn(l,s):(s=Hn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Qa(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ga,r}return s=t.child,t=s.sibling,r=yn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ic(t,e){return e=nl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Fs(t,e,n,r){return r!==null&&Vu(r),Ur(e,t.child,null,n),t=ic(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Mv(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ql(Error(x(422))),Fs(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=nl({mode:"visible",children:r.children},i,0,null),s=Hn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ur(e,t.child,null,o),e.child.memoizedState=Qa(o),e.memoizedState=Ga,s);if(!(e.mode&1))return Fs(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(x(419)),r=Ql(s,r,void 0),Fs(t,e,o,r)}if(l=(o&t.childLanes)!==0,$e||l){if(r=Ie,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ht(t,i),vt(r,t,i,-1))}return cc(),r=Ql(Error(x(421))),Fs(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Yv.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Je=pn(i.nextSibling),Ze=e,ie=!0,pt=null,t!==null&&(it[st++]=jt,it[st++]=zt,it[st++]=Qn,jt=t.id,zt=t.overflow,Qn=e),e=ic(e,r.children),e.flags|=4096,e)}function of(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ua(t.return,e,n)}function Yl(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function fm(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(je(t,e,r.children,n),r=se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&of(t,n,e);else if(t.tag===19)of(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Z(se,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&vo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Yl(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&vo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Yl(e,!0,n,null,s);break;case"together":Yl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xs(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Gt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Kn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=yn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=yn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Lv(t,e,n){switch(e.tag){case 3:cm(e),zr();break;case 5:jp(e);break;case 1:Qe(e.type)&&ho(e);break;case 4:qu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Z(go,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Z(se,se.current&1),e.flags|=128,null):n&e.child.childLanes?dm(t,e,n):(Z(se,se.current&1),t=Gt(t,e,n),t!==null?t.sibling:null);Z(se,se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return fm(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(se,se.current),r)break;return null;case 22:case 23:return e.lanes=0,am(t,e,n)}return Gt(t,e,n)}var hm,Ya,pm,mm;hm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ya=function(){};pm=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Bn(Pt.current);var s=null;switch(n){case"input":i=ga(t,i),r=ga(t,r),s=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),s=[];break;case"textarea":i=va(t,i),r=va(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=co)}Ca(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Oi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Oi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&te("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};mm=function(t,e,n,r){n!==r&&(e.flags|=4)};function ui(t,e){if(!ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ae(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Fv(t,e,n){var r=e.pendingProps;switch($u(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(e),null;case 1:return Qe(e.type)&&fo(),Ae(e),null;case 3:return r=e.stateNode,Br(),re(Ge),re(Le),Ju(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ms(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,pt!==null&&(nu(pt),pt=null))),Ya(t,e),Ae(e),null;case 5:Xu(e);var i=Bn(Gi.current);if(n=e.type,t!==null&&e.stateNode!=null)pm(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return Ae(e),null}if(t=Bn(Pt.current),Ms(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Tt]=e,r[Vi]=s,t=(e.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<vi.length;i++)te(vi[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":pd(r,s),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},te("invalid",r);break;case"textarea":gd(r,s),te("invalid",r)}Ca(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Os(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Os(r.textContent,l,t),i=["children",""+l]):Oi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&te("scroll",r)}switch(n){case"input":Is(r),md(r,s,!0);break;case"textarea":Is(r),_d(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=co)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=$h(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Tt]=e,t[Vi]=r,hm(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ea(n,r),n){case"dialog":te("cancel",t),te("close",t),i=r;break;case"iframe":case"object":case"embed":te("load",t),i=r;break;case"video":case"audio":for(i=0;i<vi.length;i++)te(vi[i],t);i=r;break;case"source":te("error",t),i=r;break;case"img":case"image":case"link":te("error",t),te("load",t),i=r;break;case"details":te("toggle",t),i=r;break;case"input":pd(t,r),i=ga(t,r),te("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),te("invalid",t);break;case"textarea":gd(t,r),i=va(t,r),te("invalid",t);break;default:i=r}Ca(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Gh(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Vh(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Mi(t,a):typeof a=="number"&&Mi(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Oi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&te("scroll",t):a!=null&&Tu(t,s,a,o))}switch(n){case"input":Is(t),md(t,r,!1);break;case"textarea":Is(t),_d(t);break;case"option":r.value!=null&&t.setAttribute("value",""+En(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Nr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Nr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=co)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ae(e),null;case 6:if(t&&e.stateNode!=null)mm(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=Bn(Gi.current),Bn(Pt.current),Ms(e)){if(r=e.stateNode,n=e.memoizedProps,r[Tt]=e,(s=r.nodeValue!==n)&&(t=Ze,t!==null))switch(t.tag){case 3:Os(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Os(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tt]=e,e.stateNode=r}return Ae(e),null;case 13:if(re(se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ie&&Je!==null&&e.mode&1&&!(e.flags&128))Ap(),zr(),e.flags|=98560,s=!1;else if(s=Ms(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[Tt]=e}else zr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ae(e),s=!1}else pt!==null&&(nu(pt),pt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||se.current&1?we===0&&(we=3):cc())),e.updateQueue!==null&&(e.flags|=4),Ae(e),null);case 4:return Br(),Ya(t,e),t===null&&Wi(e.stateNode.containerInfo),Ae(e),null;case 10:return Qu(e.type._context),Ae(e),null;case 17:return Qe(e.type)&&fo(),Ae(e),null;case 19:if(re(se),s=e.memoizedState,s===null)return Ae(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ui(s,!1);else{if(we!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=vo(t),o!==null){for(e.flags|=128,ui(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Z(se,se.current&1|2),e.child}t=t.sibling}s.tail!==null&&he()>$r&&(e.flags|=128,r=!0,ui(s,!1),e.lanes=4194304)}else{if(!r)if(t=vo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ui(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ie)return Ae(e),null}else 2*he()-s.renderingStartTime>$r&&n!==1073741824&&(e.flags|=128,r=!0,ui(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=he(),e.sibling=null,n=se.current,Z(se,r?n&1|2:n&1),e):(Ae(e),null);case 22:case 23:return uc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Xe&1073741824&&(Ae(e),e.subtreeFlags&6&&(e.flags|=8192)):Ae(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function jv(t,e){switch($u(e),e.tag){case 1:return Qe(e.type)&&fo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Br(),re(Ge),re(Le),Ju(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Xu(e),null;case 13:if(re(se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));zr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return re(se),null;case 4:return Br(),null;case 10:return Qu(e.type._context),null;case 22:case 23:return uc(),null;case 24:return null;default:return null}}var js=!1,Oe=!1,zv=typeof WeakSet=="function"?WeakSet:Set,R=null;function Sr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(t,e,r)}else n.current=null}function Ka(t,e,n){try{n()}catch(r){ue(t,e,r)}}var lf=!1;function Uv(t,e){if(ba=lo,t=wp(),Bu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,f=0,c=t,d=null;t:for(;;){for(var y;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(y=c.firstChild)!==null;)d=c,c=y;for(;;){if(c===t)break t;if(d===n&&++u===i&&(l=o),d===s&&++f===r&&(a=o),(y=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=y}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Aa={focusedElem:t,selectionRange:n},lo=!1,R=e;R!==null;)if(e=R,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,R=t;else for(;R!==null;){e=R;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var E=v.memoizedProps,L=v.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?E:ft(e.type,E),L);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(S){ue(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,R=t;break}R=e.return}return v=lf,lf=!1,v}function Ii(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ka(e,n,s)}i=i.next}while(i!==r)}}function el(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function qa(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function gm(t){var e=t.alternate;e!==null&&(t.alternate=null,gm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Tt],delete e[Vi],delete e[La],delete e[Ev],delete e[Sv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function _m(t){return t.tag===5||t.tag===3||t.tag===4}function af(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_m(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xa(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=co));else if(r!==4&&(t=t.child,t!==null))for(Xa(t,e,n),t=t.sibling;t!==null;)Xa(t,e,n),t=t.sibling}function Ja(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ja(t,e,n),t=t.sibling;t!==null;)Ja(t,e,n),t=t.sibling}var Ne=null,ht=!1;function rn(t,e,n){for(n=n.child;n!==null;)ym(t,e,n),n=n.sibling}function ym(t,e,n){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Go,n)}catch{}switch(n.tag){case 5:Oe||Sr(n,e);case 6:var r=Ne,i=ht;Ne=null,rn(t,e,n),Ne=r,ht=i,Ne!==null&&(ht?(t=Ne,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(ht?(t=Ne,n=n.stateNode,t.nodeType===8?Bl(t.parentNode,n):t.nodeType===1&&Bl(t,n),zi(t)):Bl(Ne,n.stateNode));break;case 4:r=Ne,i=ht,Ne=n.stateNode.containerInfo,ht=!0,rn(t,e,n),Ne=r,ht=i;break;case 0:case 11:case 14:case 15:if(!Oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ka(n,e,o),i=i.next}while(i!==r)}rn(t,e,n);break;case 1:if(!Oe&&(Sr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ue(n,e,l)}rn(t,e,n);break;case 21:rn(t,e,n);break;case 22:n.mode&1?(Oe=(r=Oe)||n.memoizedState!==null,rn(t,e,n),Oe=r):rn(t,e,n);break;default:rn(t,e,n)}}function uf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new zv),e.forEach(function(r){var i=Kv.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function dt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ne=l.stateNode,ht=!1;break e;case 3:Ne=l.stateNode.containerInfo,ht=!0;break e;case 4:Ne=l.stateNode.containerInfo,ht=!0;break e}l=l.return}if(Ne===null)throw Error(x(160));ym(s,o,i),Ne=null,ht=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ue(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)vm(e,t),e=e.sibling}function vm(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(dt(e,t),It(t),r&4){try{Ii(3,t,t.return),el(3,t)}catch(E){ue(t,t.return,E)}try{Ii(5,t,t.return)}catch(E){ue(t,t.return,E)}}break;case 1:dt(e,t),It(t),r&512&&n!==null&&Sr(n,n.return);break;case 5:if(dt(e,t),It(t),r&512&&n!==null&&Sr(n,n.return),t.flags&32){var i=t.stateNode;try{Mi(i,"")}catch(E){ue(t,t.return,E)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Bh(i,s),Ea(l,o);var u=Ea(l,s);for(o=0;o<a.length;o+=2){var f=a[o],c=a[o+1];f==="style"?Gh(i,c):f==="dangerouslySetInnerHTML"?Vh(i,c):f==="children"?Mi(i,c):Tu(i,f,c,u)}switch(l){case"input":_a(i,s);break;case"textarea":Wh(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Nr(i,!!s.multiple,y,!1):d!==!!s.multiple&&(s.defaultValue!=null?Nr(i,!!s.multiple,s.defaultValue,!0):Nr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Vi]=s}catch(E){ue(t,t.return,E)}}break;case 6:if(dt(e,t),It(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(E){ue(t,t.return,E)}}break;case 3:if(dt(e,t),It(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zi(e.containerInfo)}catch(E){ue(t,t.return,E)}break;case 4:dt(e,t),It(t);break;case 13:dt(e,t),It(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(lc=he())),r&4&&uf(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Oe=(u=Oe)||f,dt(e,t),Oe=u):dt(e,t),It(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(R=t,f=t.child;f!==null;){for(c=R=f;R!==null;){switch(d=R,y=d.child,d.tag){case 0:case 11:case 14:case 15:Ii(4,d,d.return);break;case 1:Sr(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(E){ue(r,n,E)}}break;case 5:Sr(d,d.return);break;case 22:if(d.memoizedState!==null){df(c);continue}}y!==null?(y.return=d,R=y):df(c)}f=f.sibling}e:for(f=null,c=t;;){if(c.tag===5){if(f===null){f=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Hh("display",o))}catch(E){ue(t,t.return,E)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(E){ue(t,t.return,E)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:dt(e,t),It(t),r&4&&uf(t);break;case 21:break;default:dt(e,t),It(t)}}function It(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(_m(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Mi(i,""),r.flags&=-33);var s=af(t);Ja(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=af(t);Xa(t,l,o);break;default:throw Error(x(161))}}catch(a){ue(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Bv(t,e,n){R=t,wm(t)}function wm(t,e,n){for(var r=(t.mode&1)!==0;R!==null;){var i=R,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||js;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Oe;l=js;var u=Oe;if(js=o,(Oe=a)&&!u)for(R=i;R!==null;)o=R,a=o.child,o.tag===22&&o.memoizedState!==null?ff(i):a!==null?(a.return=o,R=a):ff(i);for(;s!==null;)R=s,wm(s),s=s.sibling;R=i,js=l,Oe=u}cf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,R=s):cf(t)}}function cf(t){for(;R!==null;){var e=R;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Oe||el(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Oe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ft(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Qd(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Qd(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&zi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}Oe||e.flags&512&&qa(e)}catch(d){ue(e,e.return,d)}}if(e===t){R=null;break}if(n=e.sibling,n!==null){n.return=e.return,R=n;break}R=e.return}}function df(t){for(;R!==null;){var e=R;if(e===t){R=null;break}var n=e.sibling;if(n!==null){n.return=e.return,R=n;break}R=e.return}}function ff(t){for(;R!==null;){var e=R;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{el(4,e)}catch(a){ue(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ue(e,i,a)}}var s=e.return;try{qa(e)}catch(a){ue(e,s,a)}break;case 5:var o=e.return;try{qa(e)}catch(a){ue(e,o,a)}}}catch(a){ue(e,e.return,a)}if(e===t){R=null;break}var l=e.sibling;if(l!==null){l.return=e.return,R=l;break}R=e.return}}var Wv=Math.ceil,Eo=qt.ReactCurrentDispatcher,sc=qt.ReactCurrentOwner,lt=qt.ReactCurrentBatchConfig,G=0,Ie=null,ge=null,Re=0,Xe=0,xr=Nn(0),we=0,qi=null,Kn=0,tl=0,oc=0,Ni=null,We=null,lc=0,$r=1/0,Lt=null,So=!1,Za=null,gn=null,zs=!1,cn=null,xo=0,Ti=0,eu=null,Js=-1,Zs=0;function ze(){return G&6?he():Js!==-1?Js:Js=he()}function _n(t){return t.mode&1?G&2&&Re!==0?Re&-Re:kv.transition!==null?(Zs===0&&(Zs=ip()),Zs):(t=Y,t!==0||(t=window.event,t=t===void 0?16:dp(t.type)),t):1}function vt(t,e,n,r){if(50<Ti)throw Ti=0,eu=null,Error(x(185));ls(t,n,r),(!(G&2)||t!==Ie)&&(t===Ie&&(!(G&2)&&(tl|=n),we===4&&an(t,Re)),Ye(t,r),n===1&&G===0&&!(e.mode&1)&&($r=he()+500,Xo&&Tn()))}function Ye(t,e){var n=t.callbackNode;ky(t,e);var r=oo(t,t===Ie?Re:0);if(r===0)n!==null&&wd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&wd(n),e===1)t.tag===0?xv(hf.bind(null,t)):Pp(hf.bind(null,t)),wv(function(){!(G&6)&&Tn()}),n=null;else{switch(sp(r)){case 1:n=Au;break;case 4:n=np;break;case 16:n=so;break;case 536870912:n=rp;break;default:n=so}n=Tm(n,Cm.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Cm(t,e){if(Js=-1,Zs=0,G&6)throw Error(x(327));var n=t.callbackNode;if(br()&&t.callbackNode!==n)return null;var r=oo(t,t===Ie?Re:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ko(t,r);else{e=r;var i=G;G|=2;var s=Sm();(Ie!==t||Re!==e)&&(Lt=null,$r=he()+500,Vn(t,e));do try{Hv();break}catch(l){Em(t,l)}while(!0);Gu(),Eo.current=s,G=i,ge!==null?e=0:(Ie=null,Re=0,e=we)}if(e!==0){if(e===2&&(i=Na(t),i!==0&&(r=i,e=tu(t,i))),e===1)throw n=qi,Vn(t,0),an(t,r),Ye(t,he()),n;if(e===6)an(t,r);else{if(i=t.current.alternate,!(r&30)&&!$v(i)&&(e=ko(t,r),e===2&&(s=Na(t),s!==0&&(r=s,e=tu(t,s))),e===1))throw n=qi,Vn(t,0),an(t,r),Ye(t,he()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:Ln(t,We,Lt);break;case 3:if(an(t,r),(r&130023424)===r&&(e=lc+500-he(),10<e)){if(oo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ze(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ma(Ln.bind(null,t,We,Lt),e);break}Ln(t,We,Lt);break;case 4:if(an(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-yt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Wv(r/1960))-r,10<r){t.timeoutHandle=Ma(Ln.bind(null,t,We,Lt),r);break}Ln(t,We,Lt);break;case 5:Ln(t,We,Lt);break;default:throw Error(x(329))}}}return Ye(t,he()),t.callbackNode===n?Cm.bind(null,t):null}function tu(t,e){var n=Ni;return t.current.memoizedState.isDehydrated&&(Vn(t,e).flags|=256),t=ko(t,e),t!==2&&(e=We,We=n,e!==null&&nu(e)),t}function nu(t){We===null?We=t:We.push.apply(We,t)}function $v(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ct(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function an(t,e){for(e&=~oc,e&=~tl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-yt(e),r=1<<n;t[n]=-1,e&=~r}}function hf(t){if(G&6)throw Error(x(327));br();var e=oo(t,0);if(!(e&1))return Ye(t,he()),null;var n=ko(t,e);if(t.tag!==0&&n===2){var r=Na(t);r!==0&&(e=r,n=tu(t,r))}if(n===1)throw n=qi,Vn(t,0),an(t,e),Ye(t,he()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ln(t,We,Lt),Ye(t,he()),null}function ac(t,e){var n=G;G|=1;try{return t(e)}finally{G=n,G===0&&($r=he()+500,Xo&&Tn())}}function qn(t){cn!==null&&cn.tag===0&&!(G&6)&&br();var e=G;G|=1;var n=lt.transition,r=Y;try{if(lt.transition=null,Y=1,t)return t()}finally{Y=r,lt.transition=n,G=e,!(G&6)&&Tn()}}function uc(){Xe=xr.current,re(xr)}function Vn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,vv(n)),ge!==null)for(n=ge.return;n!==null;){var r=n;switch($u(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fo();break;case 3:Br(),re(Ge),re(Le),Ju();break;case 5:Xu(r);break;case 4:Br();break;case 13:re(se);break;case 19:re(se);break;case 10:Qu(r.type._context);break;case 22:case 23:uc()}n=n.return}if(Ie=t,ge=t=yn(t.current,null),Re=Xe=e,we=0,qi=null,oc=tl=Kn=0,We=Ni=null,Un!==null){for(e=0;e<Un.length;e++)if(n=Un[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Un=null}return t}function Em(t,e){do{var n=ge;try{if(Gu(),Ks.current=Co,wo){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}wo=!1}if(Yn=0,Se=ye=oe=null,ki=!1,Qi=0,sc.current=null,n===null||n.return===null){we=1,qi=e,ge=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Re,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,f=l,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=Zd(o);if(y!==null){y.flags&=-257,ef(y,o,l,s,e),y.mode&1&&Jd(s,u,e),e=y,a=u;var v=e.updateQueue;if(v===null){var E=new Set;E.add(a),e.updateQueue=E}else v.add(a);break e}else{if(!(e&1)){Jd(s,u,e),cc();break e}a=Error(x(426))}}else if(ie&&l.mode&1){var L=Zd(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),ef(L,o,l,s,e),Vu(Wr(a,l));break e}}s=a=Wr(a,l),we!==4&&(we=2),Ni===null?Ni=[s]:Ni.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=sm(s,a,e);Gd(s,g);break e;case 1:l=a;var p=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(gn===null||!gn.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=om(s,l,e);Gd(s,S);break e}}s=s.return}while(s!==null)}km(n)}catch(N){e=N,ge===n&&n!==null&&(ge=n=n.return);continue}break}while(!0)}function Sm(){var t=Eo.current;return Eo.current=Co,t===null?Co:t}function cc(){(we===0||we===3||we===2)&&(we=4),Ie===null||!(Kn&268435455)&&!(tl&268435455)||an(Ie,Re)}function ko(t,e){var n=G;G|=2;var r=Sm();(Ie!==t||Re!==e)&&(Lt=null,Vn(t,e));do try{Vv();break}catch(i){Em(t,i)}while(!0);if(Gu(),G=n,Eo.current=r,ge!==null)throw Error(x(261));return Ie=null,Re=0,we}function Vv(){for(;ge!==null;)xm(ge)}function Hv(){for(;ge!==null&&!gy();)xm(ge)}function xm(t){var e=Nm(t.alternate,t,Xe);t.memoizedProps=t.pendingProps,e===null?km(t):ge=e,sc.current=null}function km(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=jv(n,e),n!==null){n.flags&=32767,ge=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{we=6,ge=null;return}}else if(n=Fv(n,e,Xe),n!==null){ge=n;return}if(e=e.sibling,e!==null){ge=e;return}ge=e=t}while(e!==null);we===0&&(we=5)}function Ln(t,e,n){var r=Y,i=lt.transition;try{lt.transition=null,Y=1,Gv(t,e,n,r)}finally{lt.transition=i,Y=r}return null}function Gv(t,e,n,r){do br();while(cn!==null);if(G&6)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Iy(t,s),t===Ie&&(ge=Ie=null,Re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zs||(zs=!0,Tm(so,function(){return br(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=lt.transition,lt.transition=null;var o=Y;Y=1;var l=G;G|=4,sc.current=null,Uv(t,n),vm(n,t),fv(Aa),lo=!!ba,Aa=ba=null,t.current=n,Bv(n),_y(),G=l,Y=o,lt.transition=s}else t.current=n;if(zs&&(zs=!1,cn=t,xo=i),s=t.pendingLanes,s===0&&(gn=null),wy(n.stateNode),Ye(t,he()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(So)throw So=!1,t=Za,Za=null,t;return xo&1&&t.tag!==0&&br(),s=t.pendingLanes,s&1?t===eu?Ti++:(Ti=0,eu=t):Ti=0,Tn(),null}function br(){if(cn!==null){var t=sp(xo),e=lt.transition,n=Y;try{if(lt.transition=null,Y=16>t?16:t,cn===null)var r=!1;else{if(t=cn,cn=null,xo=0,G&6)throw Error(x(331));var i=G;for(G|=4,R=t.current;R!==null;){var s=R,o=s.child;if(R.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(R=u;R!==null;){var f=R;switch(f.tag){case 0:case 11:case 15:Ii(8,f,s)}var c=f.child;if(c!==null)c.return=f,R=c;else for(;R!==null;){f=R;var d=f.sibling,y=f.return;if(gm(f),f===u){R=null;break}if(d!==null){d.return=y,R=d;break}R=y}}}var v=s.alternate;if(v!==null){var E=v.child;if(E!==null){v.child=null;do{var L=E.sibling;E.sibling=null,E=L}while(E!==null)}}R=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,R=o;else e:for(;R!==null;){if(s=R,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ii(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,R=g;break e}R=s.return}}var p=t.current;for(R=p;R!==null;){o=R;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,R=_;else e:for(o=p;R!==null;){if(l=R,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:el(9,l)}}catch(N){ue(l,l.return,N)}if(l===o){R=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,R=S;break e}R=l.return}}if(G=i,Tn(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Go,t)}catch{}r=!0}return r}finally{Y=n,lt.transition=e}}return!1}function pf(t,e,n){e=Wr(n,e),e=sm(t,e,1),t=mn(t,e,1),e=ze(),t!==null&&(ls(t,1,e),Ye(t,e))}function ue(t,e,n){if(t.tag===3)pf(t,t,n);else for(;e!==null;){if(e.tag===3){pf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gn===null||!gn.has(r))){t=Wr(n,t),t=om(e,t,1),e=mn(e,t,1),t=ze(),e!==null&&(ls(e,1,t),Ye(e,t));break}}e=e.return}}function Qv(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ze(),t.pingedLanes|=t.suspendedLanes&n,Ie===t&&(Re&n)===n&&(we===4||we===3&&(Re&130023424)===Re&&500>he()-lc?Vn(t,0):oc|=n),Ye(t,e)}function Im(t,e){e===0&&(t.mode&1?(e=Rs,Rs<<=1,!(Rs&130023424)&&(Rs=4194304)):e=1);var n=ze();t=Ht(t,e),t!==null&&(ls(t,e,n),Ye(t,n))}function Yv(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Im(t,n)}function Kv(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),Im(t,n)}var Nm;Nm=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ge.current)$e=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return $e=!1,Lv(t,e,n);$e=!!(t.flags&131072)}else $e=!1,ie&&e.flags&1048576&&Dp(e,mo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Xs(t,e),t=e.pendingProps;var i=jr(e,Le.current);Dr(e,n),i=ec(null,e,r,t,i,n);var s=tc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qe(r)?(s=!0,ho(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ku(e),i.updater=Zo,e.stateNode=i,i._reactInternals=e,Wa(e,r,t,n),e=Ha(null,e,r,!0,s,n)):(e.tag=0,ie&&s&&Wu(e),je(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Xs(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Xv(r),t=ft(r,t),i){case 0:e=Va(null,e,r,t,n);break e;case 1:e=rf(null,e,r,t,n);break e;case 11:e=tf(null,e,r,t,n);break e;case 14:e=nf(null,e,r,ft(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ft(r,i),Va(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ft(r,i),rf(t,e,r,i,n);case 3:e:{if(cm(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Fp(t,e),yo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Wr(Error(x(423)),e),e=sf(t,e,r,n,i);break e}else if(r!==i){i=Wr(Error(x(424)),e),e=sf(t,e,r,n,i);break e}else for(Je=pn(e.stateNode.containerInfo.firstChild),Ze=e,ie=!0,pt=null,n=Mp(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zr(),r===i){e=Gt(t,e,n);break e}je(t,e,r,n)}e=e.child}return e;case 5:return jp(e),t===null&&za(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Oa(r,i)?o=null:s!==null&&Oa(r,s)&&(e.flags|=32),um(t,e),je(t,e,o,n),e.child;case 6:return t===null&&za(e),null;case 13:return dm(t,e,n);case 4:return qu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ur(e,null,r,n):je(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ft(r,i),tf(t,e,r,i,n);case 7:return je(t,e,e.pendingProps,n),e.child;case 8:return je(t,e,e.pendingProps.children,n),e.child;case 12:return je(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Z(go,r._currentValue),r._currentValue=o,s!==null)if(Ct(s.value,o)){if(s.children===i.children&&!Ge.current){e=Gt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Bt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?a.next=a:(a.next=f.next,f.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ua(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ua(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}je(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Dr(e,n),i=at(i),r=r(i),e.flags|=1,je(t,e,r,n),e.child;case 14:return r=e.type,i=ft(r,e.pendingProps),i=ft(r.type,i),nf(t,e,r,i,n);case 15:return lm(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ft(r,i),Xs(t,e),e.tag=1,Qe(r)?(t=!0,ho(e)):t=!1,Dr(e,n),im(e,r,i),Wa(e,r,i,n),Ha(null,e,r,!0,t,n);case 19:return fm(t,e,n);case 22:return am(t,e,n)}throw Error(x(156,e.tag))};function Tm(t,e){return tp(t,e)}function qv(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(t,e,n,r){return new qv(t,e,n,r)}function dc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xv(t){if(typeof t=="function")return dc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Pu)return 11;if(t===Du)return 14}return 2}function yn(t,e){var n=t.alternate;return n===null?(n=ot(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function eo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")dc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case pr:return Hn(n.children,i,s,e);case Ru:o=8,i|=8;break;case fa:return t=ot(12,n,e,i|2),t.elementType=fa,t.lanes=s,t;case ha:return t=ot(13,n,e,i),t.elementType=ha,t.lanes=s,t;case pa:return t=ot(19,n,e,i),t.elementType=pa,t.lanes=s,t;case jh:return nl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Lh:o=10;break e;case Fh:o=9;break e;case Pu:o=11;break e;case Du:o=14;break e;case sn:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=ot(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Hn(t,e,n,r){return t=ot(7,t,r,e),t.lanes=n,t}function nl(t,e,n,r){return t=ot(22,t,r,e),t.elementType=jh,t.lanes=n,t.stateNode={isHidden:!1},t}function Kl(t,e,n){return t=ot(6,t,null,e),t.lanes=n,t}function ql(t,e,n){return e=ot(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Jv(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pl(0),this.expirationTimes=Pl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function fc(t,e,n,r,i,s,o,l,a){return t=new Jv(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ot(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ku(s),t}function Zv(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Rm(t){if(!t)return Sn;t=t._reactInternals;e:{if(nr(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(Qe(n))return Rp(t,n,e)}return e}function Pm(t,e,n,r,i,s,o,l,a){return t=fc(n,r,!0,t,i,s,o,l,a),t.context=Rm(null),n=t.current,r=ze(),i=_n(n),s=Bt(r,i),s.callback=e??null,mn(n,s,i),t.current.lanes=i,ls(t,i,r),Ye(t,r),t}function rl(t,e,n,r){var i=e.current,s=ze(),o=_n(i);return n=Rm(n),e.context===null?e.context=n:e.pendingContext=n,e=Bt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=mn(i,e,o),t!==null&&(vt(t,i,o,s),Ys(t,i,o)),o}function Io(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function mf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function hc(t,e){mf(t,e),(t=t.alternate)&&mf(t,e)}function e0(){return null}var Dm=typeof reportError=="function"?reportError:function(t){console.error(t)};function pc(t){this._internalRoot=t}il.prototype.render=pc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));rl(t,e,null,null)};il.prototype.unmount=pc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qn(function(){rl(null,t,null,null)}),e[Vt]=null}};function il(t){this._internalRoot=t}il.prototype.unstable_scheduleHydration=function(t){if(t){var e=ap();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ln.length&&e!==0&&e<ln[n].priority;n++);ln.splice(n,0,t),n===0&&cp(t)}};function mc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function sl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function gf(){}function t0(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Io(o);s.call(u)}}var o=Pm(e,r,t,0,null,!1,!1,"",gf);return t._reactRootContainer=o,t[Vt]=o.current,Wi(t.nodeType===8?t.parentNode:t),qn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Io(a);l.call(u)}}var a=fc(t,0,!1,null,null,!1,!1,"",gf);return t._reactRootContainer=a,t[Vt]=a.current,Wi(t.nodeType===8?t.parentNode:t),qn(function(){rl(e,a,n,r)}),a}function ol(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Io(o);l.call(a)}}rl(e,o,t,i)}else o=t0(n,e,t,i,r);return Io(o)}op=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=yi(e.pendingLanes);n!==0&&(Ou(e,n|1),Ye(e,he()),!(G&6)&&($r=he()+500,Tn()))}break;case 13:qn(function(){var r=Ht(t,1);if(r!==null){var i=ze();vt(r,t,1,i)}}),hc(t,1)}};Mu=function(t){if(t.tag===13){var e=Ht(t,134217728);if(e!==null){var n=ze();vt(e,t,134217728,n)}hc(t,134217728)}};lp=function(t){if(t.tag===13){var e=_n(t),n=Ht(t,e);if(n!==null){var r=ze();vt(n,t,e,r)}hc(t,e)}};ap=function(){return Y};up=function(t,e){var n=Y;try{return Y=t,e()}finally{Y=n}};xa=function(t,e,n){switch(e){case"input":if(_a(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=qo(r);if(!i)throw Error(x(90));Uh(r),_a(r,i)}}}break;case"textarea":Wh(t,n);break;case"select":e=n.value,e!=null&&Nr(t,!!n.multiple,e,!1)}};Kh=ac;qh=qn;var n0={usingClientEntryPoint:!1,Events:[us,yr,qo,Qh,Yh,ac]},ci={findFiberByHostInstance:zn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},r0={bundleType:ci.bundleType,version:ci.version,rendererPackageName:ci.rendererPackageName,rendererConfig:ci.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Zh(t),t===null?null:t.stateNode},findFiberByHostInstance:ci.findFiberByHostInstance||e0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Us=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Us.isDisabled&&Us.supportsFiber)try{Go=Us.inject(r0),Rt=Us}catch{}}tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n0;tt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mc(e))throw Error(x(200));return Zv(t,e,null,n)};tt.createRoot=function(t,e){if(!mc(t))throw Error(x(299));var n=!1,r="",i=Dm;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=fc(t,1,!1,null,null,n,!1,r,i),t[Vt]=e.current,Wi(t.nodeType===8?t.parentNode:t),new pc(e)};tt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=Zh(e),t=t===null?null:t.stateNode,t};tt.flushSync=function(t){return qn(t)};tt.hydrate=function(t,e,n){if(!sl(e))throw Error(x(200));return ol(null,t,e,!0,n)};tt.hydrateRoot=function(t,e,n){if(!mc(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Dm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Pm(e,null,t,1,n??null,i,!1,s,o),t[Vt]=e.current,Wi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new il(e)};tt.render=function(t,e,n){if(!sl(e))throw Error(x(200));return ol(null,t,e,!1,n)};tt.unmountComponentAtNode=function(t){if(!sl(t))throw Error(x(40));return t._reactRootContainer?(qn(function(){ol(null,null,t,!1,function(){t._reactRootContainer=null,t[Vt]=null})}),!0):!1};tt.unstable_batchedUpdates=ac;tt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!sl(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return ol(t,e,n,!1,r)};tt.version="18.3.1-next-f1338f8080-20240426";function bm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bm)}catch(t){console.error(t)}}bm(),bh.exports=tt;var i0=bh.exports,_f=i0;ca.createRoot=_f.createRoot,ca.hydrateRoot=_f.hydrateRoot;const s0=()=>{};var yf={};/**
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
 */const Am={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const k=function(t,e){if(!t)throw Xr(e)},Xr=function(t){return new Error("Firebase Database ("+Am.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Om=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},o0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},gc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,f=s>>2,c=(s&3)<<4|l>>4;let d=(l&15)<<2|u>>6,y=u&63;a||(y=64,o||(d=64)),r.push(n[f],n[c],n[d],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Om(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):o0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new l0;const d=s<<2|l>>4;if(r.push(d),u!==64){const y=l<<4&240|u>>2;if(r.push(y),c!==64){const v=u<<6&192|c;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class l0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Mm=function(t){const e=Om(t);return gc.encodeByteArray(e,!0)},No=function(t){return Mm(t).replace(/\./g,"")},ru=function(t){try{return gc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function a0(t){return Lm(void 0,t)}function Lm(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!u0(n)||(t[n]=Lm(t[n],e[n]));return t}function u0(t){return t!=="__proto__"}/**
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
 */function c0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const d0=()=>c0().__FIREBASE_DEFAULTS__,f0=()=>{if(typeof process>"u"||typeof yf>"u")return;const t=yf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},h0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ru(t[1]);return e&&JSON.parse(e)},Fm=()=>{try{return s0()||d0()||f0()||h0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},p0=t=>{var e,n;return(n=(e=Fm())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},m0=t=>{const e=p0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},jm=()=>{var t;return(t=Fm())==null?void 0:t.config};/**
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
 */class ll{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function g0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[No(JSON.stringify(n)),No(JSON.stringify(o)),""].join(".")}/**
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
 */function _0(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_0())}function y0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function v0(){return Am.NODE_ADMIN===!0}function w0(){try{return typeof indexedDB=="object"}catch{return!1}}function C0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const E0="FirebaseError";class ds extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=E0,Object.setPrototypeOf(this,ds.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Um.prototype.create)}}class Um{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?S0(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ds(i,l,r)}}function S0(t,e){return t.replace(x0,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const x0=/\{\$([^}]+)}/g;/**
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
 */function Xi(t){return JSON.parse(t)}function ke(t){return JSON.stringify(t)}/**
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
 */const Bm=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Xi(ru(s[0])||""),n=Xi(ru(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},k0=function(t){const e=Bm(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},I0=function(t){const e=Bm(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Xt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Vr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function vf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function To(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Ro(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(wf(s)&&wf(o)){if(!Ro(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function wf(t){return t!==null&&typeof t=="object"}/**
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
 */function N0(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class T0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const d=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,f;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),f=1518500249):(u=s^o^l,f=1859775393):c<60?(u=s&o|l&(s|o),f=2400959708):(u=s^o^l,f=3395469782);const d=(i<<5|i>>>27)+u+a+f+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function _c(t,e){return`${t} failed: ${e} argument `}/**
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
 */const R0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,k(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},al=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function fs(t){return t&&t._delegate?t._delegate:t}/**
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
 */function Wm(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function P0(t){return(await fetch(t,{credentials:"include"})).ok}class Ji{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Fn="[DEFAULT]";/**
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
 */class D0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ll;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(A0(e))try{this.getOrInitializeService({instanceIdentifier:Fn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Fn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fn){return this.instances.has(e)}getOptions(e=Fn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:b0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fn){return this.component?this.component.multipleInstances?e:Fn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function b0(t){return t===Fn?void 0:t}function A0(t){return t.instantiationMode==="EAGER"}/**
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
 */class O0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new D0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const M0={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},L0=X.INFO,F0={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},j0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=F0[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $m{constructor(e){this.name=e,this._logLevel=L0,this._logHandler=j0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?M0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const z0=(t,e)=>e.some(n=>t instanceof n);let Cf,Ef;function U0(){return Cf||(Cf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function B0(){return Ef||(Ef=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vm=new WeakMap,iu=new WeakMap,Hm=new WeakMap,Xl=new WeakMap,yc=new WeakMap;function W0(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(vn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Vm.set(n,t)}).catch(()=>{}),yc.set(e,t),e}function $0(t){if(iu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});iu.set(t,e)}let su={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return iu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Hm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function V0(t){su=t(su)}function H0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Jl(this),e,...n);return Hm.set(r,e.sort?e.sort():[e]),vn(r)}:B0().includes(t)?function(...e){return t.apply(Jl(this),e),vn(Vm.get(this))}:function(...e){return vn(t.apply(Jl(this),e))}}function G0(t){return typeof t=="function"?H0(t):(t instanceof IDBTransaction&&$0(t),z0(t,U0())?new Proxy(t,su):t)}function vn(t){if(t instanceof IDBRequest)return W0(t);if(Xl.has(t))return Xl.get(t);const e=G0(t);return e!==t&&(Xl.set(t,e),yc.set(e,t)),e}const Jl=t=>yc.get(t);function Q0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=vn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(vn(o.result),a.oldVersion,a.newVersion,vn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Y0=["get","getKey","getAll","getAllKeys","count"],K0=["put","add","delete","clear"],Zl=new Map;function Sf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zl.get(e))return Zl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=K0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Y0.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Zl.set(e,s),s}V0(t=>({...t,get:(e,n,r)=>Sf(e,n)||t.get(e,n,r),has:(e,n)=>!!Sf(e,n)||t.has(e,n)}));/**
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
 */class q0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(X0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function X0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ou="@firebase/app",xf="0.15.0";/**
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
 */const Qt=new $m("@firebase/app"),J0="@firebase/app-compat",Z0="@firebase/analytics-compat",ew="@firebase/analytics",tw="@firebase/app-check-compat",nw="@firebase/app-check",rw="@firebase/auth",iw="@firebase/auth-compat",sw="@firebase/database",ow="@firebase/data-connect",lw="@firebase/database-compat",aw="@firebase/functions",uw="@firebase/functions-compat",cw="@firebase/installations",dw="@firebase/installations-compat",fw="@firebase/messaging",hw="@firebase/messaging-compat",pw="@firebase/performance",mw="@firebase/performance-compat",gw="@firebase/remote-config",_w="@firebase/remote-config-compat",yw="@firebase/storage",vw="@firebase/storage-compat",ww="@firebase/firestore",Cw="@firebase/ai",Ew="@firebase/firestore-compat",Sw="firebase",xw="12.15.0";/**
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
 */const lu="[DEFAULT]",kw={[ou]:"fire-core",[J0]:"fire-core-compat",[ew]:"fire-analytics",[Z0]:"fire-analytics-compat",[nw]:"fire-app-check",[tw]:"fire-app-check-compat",[rw]:"fire-auth",[iw]:"fire-auth-compat",[sw]:"fire-rtdb",[ow]:"fire-data-connect",[lw]:"fire-rtdb-compat",[aw]:"fire-fn",[uw]:"fire-fn-compat",[cw]:"fire-iid",[dw]:"fire-iid-compat",[fw]:"fire-fcm",[hw]:"fire-fcm-compat",[pw]:"fire-perf",[mw]:"fire-perf-compat",[gw]:"fire-rc",[_w]:"fire-rc-compat",[yw]:"fire-gcs",[vw]:"fire-gcs-compat",[ww]:"fire-fst",[Ew]:"fire-fst-compat",[Cw]:"fire-vertex","fire-js":"fire-js",[Sw]:"fire-js-all"};/**
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
 */const Po=new Map,Iw=new Map,au=new Map;function kf(t,e){try{t.container.addComponent(e)}catch(n){Qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Do(t){const e=t.name;if(au.has(e))return Qt.debug(`There were multiple attempts to register component ${e}.`),!1;au.set(e,t);for(const n of Po.values())kf(n,t);for(const n of Iw.values())kf(n,t);return!0}function Nw(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Tw(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Rw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wn=new Um("app","Firebase",Rw);/**
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
 */class Pw{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ji("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wn.create("app-deleted",{appName:this._name})}}/**
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
 */const Dw=xw;function Gm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:lu,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw wn.create("bad-app-name",{appName:String(i)});if(n||(n=jm()),!n)throw wn.create("no-options");const s=Po.get(i);if(s){if(Ro(n,s.options)&&Ro(r,s.config))return s;throw wn.create("duplicate-app",{appName:i})}const o=new O0(i);for(const a of au.values())o.addComponent(a);const l=new Pw(n,r,o);return Po.set(i,l),l}function bw(t=lu){const e=Po.get(t);if(!e&&t===lu&&jm())return Gm();if(!e)throw wn.create("no-app",{appName:t});return e}function Ar(t,e,n){let r=kw[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qt.warn(o.join(" "));return}Do(new Ji(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Aw="firebase-heartbeat-database",Ow=1,Zi="firebase-heartbeat-store";let ea=null;function Qm(){return ea||(ea=Q0(Aw,Ow,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Zi)}catch(n){console.warn(n)}}}}).catch(t=>{throw wn.create("idb-open",{originalErrorMessage:t.message})})),ea}async function Mw(t){try{const n=(await Qm()).transaction(Zi),r=await n.objectStore(Zi).get(Ym(t));return await n.done,r}catch(e){if(e instanceof ds)Qt.warn(e.message);else{const n=wn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qt.warn(n.message)}}}async function If(t,e){try{const r=(await Qm()).transaction(Zi,"readwrite");await r.objectStore(Zi).put(e,Ym(t)),await r.done}catch(n){if(n instanceof ds)Qt.warn(n.message);else{const r=wn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qt.warn(r.message)}}}function Ym(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Lw=1024,Fw=30;class jw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Uw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Nf();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Fw){const o=Bw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Qt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Nf(),{heartbeatsToSend:r,unsentEntries:i}=zw(this._heartbeatsCache.heartbeats),s=No(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Qt.warn(n),""}}}function Nf(){return new Date().toISOString().substring(0,10)}function zw(t,e=Lw){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Tf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Tf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Uw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return w0()?C0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Mw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return If(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return If(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Tf(t){return No(JSON.stringify({version:2,heartbeats:t})).length}function Bw(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function Ww(t){Do(new Ji("platform-logger",e=>new q0(e),"PRIVATE")),Do(new Ji("heartbeat",e=>new jw(e),"PRIVATE")),Ar(ou,xf,t),Ar(ou,xf,"esm2020"),Ar("fire-js","")}Ww("");var Rf={};const Pf="@firebase/database",Df="1.1.3";/**
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
 */let Km="";function $w(t){Km=t}/**
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
 */class Vw{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ke(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Xi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Hw{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Xt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const qm=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Vw(e)}}catch{}return new Hw},Wn=qm("localStorage"),Gw=qm("sessionStorage");/**
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
 */const Or=new $m("@firebase/database"),Qw=function(){let t=1;return function(){return t++}}(),Xm=function(t){const e=R0(t),n=new T0;n.update(e);const r=n.digest();return gc.encodeByteArray(r)},hs=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=hs.apply(null,r):typeof r=="object"?e+=ke(r):e+=r,e+=" "}return e};let Ri=null,bf=!0;const Yw=function(t,e){k(!0,"Can't turn on custom loggers persistently."),Or.logLevel=X.VERBOSE,Ri=Or.log.bind(Or)},Me=function(...t){if(bf===!0&&(bf=!1,Ri===null&&Gw.get("logging_enabled")===!0&&Yw()),Ri){const e=hs.apply(null,t);Ri(e)}},ps=function(t){return function(...e){Me(t,...e)}},uu=function(...t){const e="FIREBASE INTERNAL ERROR: "+hs(...t);Or.error(e)},Yt=function(...t){const e=`FIREBASE FATAL ERROR: ${hs(...t)}`;throw Or.error(e),new Error(e)},Ke=function(...t){const e="FIREBASE WARNING: "+hs(...t);Or.warn(e)},Kw=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ke("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Jm=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},qw=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Hr="[MIN_NAME]",Xn="[MAX_NAME]",Jr=function(t,e){if(t===e)return 0;if(t===Hr||e===Xn)return-1;if(e===Hr||t===Xn)return 1;{const n=Af(t),r=Af(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},Xw=function(t,e){return t===e?0:t<e?-1:1},di=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ke(e))},vc=function(t){if(typeof t!="object"||t===null)return ke(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ke(e[r]),n+=":",n+=vc(t[e[r]]);return n+="}",n},Zm=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function qe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const eg=function(t){k(!Jm(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const f=u.join("");let c="";for(a=0;a<64;a+=8){let d=parseInt(f.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),c=c+d}return c.toLowerCase()},Jw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Zw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function e1(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const t1=new RegExp("^-?(0*)\\d{1,10}$"),n1=-2147483648,r1=2147483647,Af=function(t){if(t1.test(t)){const e=Number(t);if(e>=n1&&e<=r1)return e}return null},Zr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ke("Exception was thrown by user callback.",n),e},Math.floor(0))}},i1=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Pi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class s1{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Tw(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ke(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class o1{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Me("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ke(e)}}class to{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}to.OWNER="owner";/**
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
 */const wc="5",tg="v",ng="s",rg="r",ig="f",sg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,og="ls",lg="p",cu="ac",ag="websocket",ug="long_polling";/**
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
 */class cg{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1,u=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Wn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Wn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function l1(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function dg(t,e,n){k(typeof e=="string","typeof type must == string"),k(typeof n=="object","typeof params must == object");let r;if(e===ag)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===ug)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);l1(t)&&(n.ns=t.namespace);const i=[];return qe(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class a1{constructor(){this.counters_={}}incrementCounter(e,n=1){Xt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return a0(this.counters_)}}/**
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
 */const ta={},na={};function Cc(t){const e=t.toString();return ta[e]||(ta[e]=new a1),ta[e]}function u1(t,e){const n=t.toString();return na[n]||(na[n]=e()),na[n]}/**
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
 */class c1{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Zr(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Of="start",d1="close",f1="pLPCommand",h1="pRTLPCB",fg="id",hg="pw",pg="ser",p1="cb",m1="seg",g1="ts",_1="d",y1="dframe",mg=1870,gg=30,v1=mg-gg,w1=25e3,C1=3e4;class kr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ps(e),this.stats_=Cc(n),this.urlFn=a=>(this.appCheckToken&&(a[cu]=this.appCheckToken),dg(n,ug,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new c1(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(C1)),qw(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ec((...s)=>{const[o,l,a,u,f]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Of)this.id=l,this.password=a;else if(o===d1)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Of]="t",r[pg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[p1]=this.scriptTagHolder.uniqueCallbackIdentifier),r[tg]=wc,this.transportSessionId&&(r[ng]=this.transportSessionId),this.lastSessionId&&(r[og]=this.lastSessionId),this.applicationId&&(r[lg]=this.applicationId),this.appCheckToken&&(r[cu]=this.appCheckToken),typeof location<"u"&&location.hostname&&sg.test(location.hostname)&&(r[rg]=ig);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){kr.forceAllow_=!0}static forceDisallow(){kr.forceDisallow_=!0}static isAvailable(){return kr.forceAllow_?!0:!kr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Jw()&&!Zw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Mm(n),i=Zm(r,v1);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[y1]="t",r[fg]=e,r[hg]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ke(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ec{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Qw(),window[f1+this.uniqueCallbackIdentifier]=e,window[h1+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ec.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Me("frame writing exception"),l.stack&&Me(l.stack),Me(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Me("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[fg]=this.myID,e[hg]=this.myPW,e[pg]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+gg+r.length<=mg;){const o=this.pendingSegs.shift();r=r+"&"+m1+i+"="+o.seg+"&"+g1+i+"="+o.ts+"&"+_1+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(w1)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Me("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const E1=16384,S1=45e3;let bo=null;typeof MozWebSocket<"u"?bo=MozWebSocket:typeof WebSocket<"u"&&(bo=WebSocket);class mt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ps(this.connId),this.stats_=Cc(n),this.connURL=mt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[tg]=wc,typeof location<"u"&&location.hostname&&sg.test(location.hostname)&&(o[rg]=ig),n&&(o[ng]=n),r&&(o[og]=r),i&&(o[cu]=i),s&&(o[lg]=s),dg(e,ag,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Wn.set("previous_websocket_failure",!0);try{let r;v0(),this.mySock=new bo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){mt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&bo!==null&&!mt.forceDisallow_}static previouslyFailed(){return Wn.isInMemoryStorage||Wn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Wn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Xi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(k(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Zm(n,E1);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(S1))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}mt.responsesRequiredToBeHealthy=2;mt.healthyTimeout=3e4;/**
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
 */class es{static get ALL_TRANSPORTS(){return[kr,mt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=mt&&mt.isAvailable();let r=n&&!mt.previouslyFailed();if(e.webSocketOnly&&(n||Ke("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[mt];else{const i=this.transports_=[];for(const s of es.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);es.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}es.globalTransportInitialized_=!1;/**
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
 */const x1=6e4,k1=5e3,I1=10*1024,N1=100*1024,ra="t",Mf="d",T1="s",Lf="r",R1="e",Ff="o",jf="a",zf="n",Uf="p",P1="h";class D1{constructor(e,n,r,i,s,o,l,a,u,f){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ps("c:"+this.id+":"),this.transportManager_=new es(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Pi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>N1?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>I1?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ra in e){const n=e[ra];n===jf?this.upgradeIfSecondaryHealthy_():n===Lf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ff&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=di("t",e),r=di("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Uf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:jf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:zf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=di("t",e),r=di("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=di(ra,e);if(Mf in e){const r=e[Mf];if(n===P1){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===zf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===T1?this.onConnectionShutdown_(r):n===Lf?this.onReset_(r):n===R1?uu("Server Error: "+r):n===Ff?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):uu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),wc!==r&&Ke("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Pi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(x1))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Pi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(k1))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Uf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Wn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class _g{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class yg{constructor(e){this.allowedEvents_=e,this.listeners_={},k(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){k(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Ao extends yg{static getInstance(){return new Ao}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!zm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return k(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Bf=32,Wf=768;class K{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Q(){return new K("")}function B(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function xn(t){return t.pieces_.length-t.pieceNum_}function J(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new K(t.pieces_,e)}function vg(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function b1(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function wg(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Cg(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new K(e,0)}function ve(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof K)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new K(n,0)}function $(t){return t.pieceNum_>=t.pieces_.length}function Ve(t,e){const n=B(t),r=B(e);if(n===null)return e;if(n===r)return Ve(J(t),J(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Sc(t,e){if(xn(t)!==xn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function gt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(xn(t)>xn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class A1{constructor(e,n){this.errorPrefix_=n,this.parts_=wg(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=al(this.parts_[r]);Eg(this)}}function O1(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=al(e),Eg(t)}function M1(t){const e=t.parts_.pop();t.byteLength_-=al(e),t.parts_.length>0&&(t.byteLength_-=1)}function Eg(t){if(t.byteLength_>Wf)throw new Error(t.errorPrefix_+"has a key path longer than "+Wf+" bytes ("+t.byteLength_+").");if(t.parts_.length>Bf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Bf+") or object contains a cycle "+jn(t))}function jn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class xc extends yg{static getInstance(){return new xc}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return k(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const fi=1e3,L1=60*5*1e3,$f=30*1e3,F1=1.3,j1=3e4,z1="server_kill",Vf=3;class Wt extends _g{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Wt.nextPersistentConnectionId_++,this.log_=ps("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=fi,this.maxReconnectDelay_=L1,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ao.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ke(s)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new ll,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Wt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Xt(e,"w")){const r=Vr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ke(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||I0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=$f)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=k0(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ke(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):uu("Unrecognized action received from server: "+ke(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=fi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=fi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>j1&&(this.reconnectDelay_=fi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*F1)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Wt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){k(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,d]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?Me("getToken() completed but was canceled"):(Me("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=d&&d.token,l=new D1(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,y=>{Ke(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(z1)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&Ke(c),a())}}}interrupt(e){Me("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Me("Resuming connection for reason: "+e),delete this.interruptReasons_[e],vf(this.interruptReasons_)&&(this.reconnectDelay_=fi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>vc(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new K(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Me("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Vf&&(this.reconnectDelay_=$f,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Me("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Vf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Km.replace(/\./g,"-")]=1,zm()?e["framework.cordova"]=1:y0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ao.getInstance().currentlyOnline();return vf(this.interruptReasons_)&&e}}Wt.nextPersistentConnectionId_=0;Wt.nextConnectionId_=0;/**
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
 */class ul{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new W(Hr,e),i=new W(Hr,n);return this.compare(r,i)!==0}minPost(){return W.MIN}}/**
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
 */let Bs;class Sg extends ul{static get __EMPTY_NODE(){return Bs}static set __EMPTY_NODE(e){Bs=e}compare(e,n){return Jr(e.name,n.name)}isDefinedOn(e){throw Xr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return W.MIN}maxPost(){return new W(Xn,Bs)}makePost(e,n){return k(typeof e=="string","KeyIndex indexValue must always be a string."),new W(e,Bs)}toString(){return".key"}}const Mr=new Sg;/**
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
 */class Ws{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class xe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??xe.RED,this.left=i??He.EMPTY_NODE,this.right=s??He.EMPTY_NODE}copy(e,n,r,i,s){return new xe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return He.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return He.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}xe.RED=!0;xe.BLACK=!1;class U1{copy(e,n,r,i,s){return this}insert(e,n,r){return new xe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class He{constructor(e,n=He.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new He(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,xe.BLACK,null,null))}remove(e){return new He(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,xe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ws(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ws(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ws(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ws(this.root_,null,this.comparator_,!0,e)}}He.EMPTY_NODE=new U1;/**
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
 */function B1(t,e){return Jr(t.name,e.name)}function kc(t,e){return Jr(t,e)}/**
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
 */let du;function W1(t){du=t}const xg=function(t){return typeof t=="number"?"number:"+eg(t):"string:"+t},kg=function(t){if(t.isLeafNode()){const e=t.val();k(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Xt(e,".sv"),"Priority must be a string or number.")}else k(t===du||t.isEmpty(),"priority of unexpected type.");k(t===du||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Hf;class Ee{static set __childrenNodeConstructor(e){Hf=e}static get __childrenNodeConstructor(){return Hf}constructor(e,n=Ee.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),kg(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ee(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return $(e)?this:B(e)===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ee.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=B(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(k(r!==".priority"||xn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ee.__childrenNodeConstructor.EMPTY_NODE.updateChild(J(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+xg(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=eg(this.value_):e+=this.value_,this.lazyHash_=Xm(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ee.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ee.__childrenNodeConstructor?-1:(k(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ee.VALUE_TYPE_ORDER.indexOf(n),s=Ee.VALUE_TYPE_ORDER.indexOf(r);return k(i>=0,"Unknown leaf type: "+n),k(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ee.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Ig,Ng;function $1(t){Ig=t}function V1(t){Ng=t}class H1 extends ul{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Jr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return W.MIN}maxPost(){return new W(Xn,new Ee("[PRIORITY-POST]",Ng))}makePost(e,n){const r=Ig(e);return new W(n,new Ee("[PRIORITY-POST]",r))}toString(){return".priority"}}const ce=new H1;/**
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
 */const G1=Math.log(2);class Q1{constructor(e){const n=s=>parseInt(Math.log(s)/G1,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Oo=function(t,e,n,r){t.sort(e);const i=function(a,u){const f=u-a;let c,d;if(f===0)return null;if(f===1)return c=t[a],d=n?n(c):c,new xe(d,c.node,xe.BLACK,null,null);{const y=parseInt(f/2,10)+a,v=i(a,y),E=i(y+1,u);return c=t[y],d=n?n(c):c,new xe(d,c.node,xe.BLACK,v,E)}},s=function(a){let u=null,f=null,c=t.length;const d=function(v,E){const L=c-v,g=c;c-=v;const p=i(L+1,g),_=t[L],S=n?n(_):_;y(new xe(S,_.node,E,null,p))},y=function(v){u?(u.left=v,u=v):(f=v,u=v)};for(let v=0;v<a.count;++v){const E=a.nextBitIsOne(),L=Math.pow(2,a.count-(v+1));E?d(L,xe.BLACK):(d(L,xe.BLACK),d(L,xe.RED))}return f},o=new Q1(t.length),l=s(o);return new He(r||e,l)};/**
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
 */let ia;const fr={};class Ut{static get Default(){return k(fr&&ce,"ChildrenNode.ts has not been loaded"),ia=ia||new Ut({".priority":fr},{".priority":ce}),ia}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Vr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof He?n:null}hasIndex(e){return Xt(this.indexSet_,e.toString())}addIndex(e,n){k(e!==Mr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(W.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Oo(r,e.getCompare()):l=fr;const a=e.toString(),u={...this.indexSet_};u[a]=e;const f={...this.indexes_};return f[a]=l,new Ut(f,u)}addToIndexes(e,n){const r=To(this.indexes_,(i,s)=>{const o=Vr(this.indexSet_,s);if(k(o,"Missing index implementation for "+s),i===fr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(W.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Oo(l,o.getCompare())}else return fr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new W(e.name,l))),a.insert(e,e.node)}});return new Ut(r,this.indexSet_)}removeFromIndexes(e,n){const r=To(this.indexes_,i=>{if(i===fr)return i;{const s=n.get(e.name);return s?i.remove(new W(e.name,s)):i}});return new Ut(r,this.indexSet_)}}/**
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
 */let hi;class O{static get EMPTY_NODE(){return hi||(hi=new O(new He(kc),null,Ut.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&kg(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||hi}updatePriority(e){return this.children_.isEmpty()?this:new O(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?hi:n}}getChild(e){const n=B(e);return n===null?this:this.getImmediateChild(n).getChild(J(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(k(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new W(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?hi:this.priorityNode_;return new O(i,o,s)}}updateChild(e,n){const r=B(e);if(r===null)return n;{k(B(e)!==".priority"||xn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(J(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ce,(o,l)=>{n[o]=l.val(e),r++,s&&O.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+xg(this.getPriority().val())+":"),this.forEachChild(ce,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Xm(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new W(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new W(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new W(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,W.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,W.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ms?-1:0}withIndex(e){if(e===Mr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new O(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Mr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ce),i=n.getIterator(ce);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Mr?null:this.indexMap_.get(e.toString())}}O.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Y1 extends O{constructor(){super(new He(kc),O.EMPTY_NODE,Ut.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return O.EMPTY_NODE}isEmpty(){return!1}}const ms=new Y1;Object.defineProperties(W,{MIN:{value:new W(Hr,O.EMPTY_NODE)},MAX:{value:new W(Xn,ms)}});Sg.__EMPTY_NODE=O.EMPTY_NODE;Ee.__childrenNodeConstructor=O;W1(ms);V1(ms);/**
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
 */const K1=!0;function Te(t,e=null){if(t===null)return O.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),k(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ee(n,Te(e))}if(!(t instanceof Array)&&K1){const n=[];let r=!1;if(qe(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Te(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new W(o,a)))}}),n.length===0)return O.EMPTY_NODE;const s=Oo(n,B1,o=>o.name,kc);if(r){const o=Oo(n,ce.getCompare());return new O(s,Te(e),new Ut({".priority":o},{".priority":ce}))}else return new O(s,Te(e),Ut.Default)}else{let n=O.EMPTY_NODE;return qe(t,(r,i)=>{if(Xt(t,r)&&r.substring(0,1)!=="."){const s=Te(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Te(e))}}$1(Te);/**
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
 */class q1 extends ul{constructor(e){super(),this.indexPath_=e,k(!$(e)&&B(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Jr(e.name,n.name):s}makePost(e,n){const r=Te(e),i=O.EMPTY_NODE.updateChild(this.indexPath_,r);return new W(n,i)}maxPost(){const e=O.EMPTY_NODE.updateChild(this.indexPath_,ms);return new W(Xn,e)}toString(){return wg(this.indexPath_,0).join("/")}}/**
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
 */class X1 extends ul{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Jr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return W.MIN}maxPost(){return W.MAX}makePost(e,n){const r=Te(e);return new W(n,r)}toString(){return".value"}}const J1=new X1;/**
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
 */function Tg(t){return{type:"value",snapshotNode:t}}function Gr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ts(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ns(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Z1(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Ic{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){k(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ts(n,l)):k(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Gr(n,r)):o.trackChildChange(ns(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ce,(i,s)=>{n.hasChild(i)||r.trackChildChange(ts(i,s))}),n.isLeafNode()||n.forEachChild(ce,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ns(i,s,o))}else r.trackChildChange(Gr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?O.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class rs{constructor(e){this.indexedFilter_=new Ic(e.getIndex()),this.index_=e.getIndex(),this.startPost_=rs.getStartPost_(e),this.endPost_=rs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new W(n,r))||(r=O.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=O.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(O.EMPTY_NODE);const s=this;return n.forEachChild(ce,(o,l)=>{s.matches(new W(o,l))||(i=i.updateImmediateChild(o,O.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class eC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new rs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new W(n,r))||(r=O.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=O.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=O.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(O.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,O.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(d,y)=>c(y,d)}else o=this.index_.getCompare();const l=e;k(l.numChildren()===this.limit_,"");const a=new W(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),f=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const y=d==null?1:o(d,a);if(f&&!r.isEmpty()&&y>=0)return s!=null&&s.trackChildChange(ns(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ts(n,c));const E=l.updateImmediateChild(n,O.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(Gr(d.name,d.node)),E.updateImmediateChild(d.name,d.node)):E}}else return r.isEmpty()?e:f&&o(u,a)>=0?(s!=null&&(s.trackChildChange(ts(u.name,u.node)),s.trackChildChange(Gr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,O.EMPTY_NODE)):e}}/**
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
 */class Nc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ce}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Hr}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ce}copy(){const e=new Nc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function tC(t){return t.loadsAllData()?new Ic(t.getIndex()):t.hasLimit()?new eC(t):new rs(t)}function Gf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ce?n="$priority":t.index_===J1?n="$value":t.index_===Mr?n="$key":(k(t.index_ instanceof q1,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ke(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ke(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ke(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ke(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ke(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Qf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ce&&(e.i=t.index_.toString()),e}/**
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
 */class Mo extends _g{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(k(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ps("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Mo.getListenId_(e,r),l={};this.listens_[o]=l;const a=Gf(e._queryParams);this.restRequest_(s+".json",a,(u,f)=>{let c=f;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Vr(this.listens_,o)===l){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=Mo.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Gf(e._queryParams),r=e._path.toString(),i=new ll;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+N0(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Xi(l.responseText)}catch{Ke("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Ke("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class nC{constructor(){this.rootNode_=O.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Lo(){return{value:null,children:new Map}}function Rg(t,e,n){if($(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=B(e);t.children.has(r)||t.children.set(r,Lo());const i=t.children.get(r);e=J(e),Rg(i,e,n)}}function fu(t,e,n){t.value!==null?n(e,t.value):rC(t,(r,i)=>{const s=new K(e.toString()+"/"+r);fu(i,s,n)})}function rC(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class iC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&qe(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Yf=10*1e3,sC=30*1e3,oC=5*60*1e3;class lC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new iC(e);const r=Yf+(sC-Yf)*Math.random();Pi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;qe(e,(i,s)=>{s>0&&Xt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Pi(this.reportStats_.bind(this),Math.floor(Math.random()*2*oC))}}/**
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
 */var _t;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(_t||(_t={}));function Pg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Tc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Rc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Fo{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=_t.ACK_USER_WRITE,this.source=Pg()}operationForChild(e){if($(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new K(e));return new Fo(Q(),n,this.revert)}}else return k(B(this.path)===e,"operationForChild called for unrelated child."),new Fo(J(this.path),this.affectedTree,this.revert)}}/**
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
 */class is{constructor(e,n){this.source=e,this.path=n,this.type=_t.LISTEN_COMPLETE}operationForChild(e){return $(this.path)?new is(this.source,Q()):new is(this.source,J(this.path))}}/**
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
 */class Jn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=_t.OVERWRITE}operationForChild(e){return $(this.path)?new Jn(this.source,Q(),this.snap.getImmediateChild(e)):new Jn(this.source,J(this.path),this.snap)}}/**
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
 */class ss{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=_t.MERGE}operationForChild(e){if($(this.path)){const n=this.children.subtree(new K(e));return n.isEmpty()?null:n.value?new Jn(this.source,Q(),n.value):new ss(this.source,Q(),n)}else return k(B(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ss(this.source,J(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Zn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if($(e))return this.isFullyInitialized()&&!this.filtered_;const n=B(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class aC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function uC(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Z1(o.childName,o.snapshotNode))}),pi(t,i,"child_removed",e,r,n),pi(t,i,"child_added",e,r,n),pi(t,i,"child_moved",s,r,n),pi(t,i,"child_changed",e,r,n),pi(t,i,"value",e,r,n),i}function pi(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>dC(t,l,a)),o.forEach(l=>{const a=cC(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function cC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function dC(t,e,n){if(e.childName==null||n.childName==null)throw Xr("Should only compare child_ events.");const r=new W(e.childName,e.snapshotNode),i=new W(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function cl(t,e){return{eventCache:t,serverCache:e}}function Di(t,e,n,r){return cl(new Zn(e,n,r),t.serverCache)}function Dg(t,e,n,r){return cl(t.eventCache,new Zn(e,n,r))}function hu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function er(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let sa;const fC=()=>(sa||(sa=new He(Xw)),sa);class ne{static fromObject(e){let n=new ne(null);return qe(e,(r,i)=>{n=n.set(new K(r),i)}),n}constructor(e,n=fC()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Q(),value:this.value};if($(e))return null;{const r=B(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(J(e),n);return s!=null?{path:ve(new K(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if($(e))return this;{const n=B(e),r=this.children.get(n);return r!==null?r.subtree(J(e)):new ne(null)}}set(e,n){if($(e))return new ne(n,this.children);{const r=B(e),s=(this.children.get(r)||new ne(null)).set(J(e),n),o=this.children.insert(r,s);return new ne(this.value,o)}}remove(e){if($(e))return this.children.isEmpty()?new ne(null):new ne(null,this.children);{const n=B(e),r=this.children.get(n);if(r){const i=r.remove(J(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ne(null):new ne(this.value,s)}else return this}}get(e){if($(e))return this.value;{const n=B(e),r=this.children.get(n);return r?r.get(J(e)):null}}setTree(e,n){if($(e))return n;{const r=B(e),s=(this.children.get(r)||new ne(null)).setTree(J(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ne(this.value,o)}}fold(e){return this.fold_(Q(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ve(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Q(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if($(e))return null;{const s=B(e),o=this.children.get(s);return o?o.findOnPath_(J(e),ve(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Q(),n)}foreachOnPath_(e,n,r){if($(e))return this;{this.value&&r(n,this.value);const i=B(e),s=this.children.get(i);return s?s.foreachOnPath_(J(e),ve(n,i),r):new ne(null)}}foreach(e){this.foreach_(Q(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ve(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class wt{constructor(e){this.writeTree_=e}static empty(){return new wt(new ne(null))}}function bi(t,e,n){if($(e))return new wt(new ne(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ve(i,e);return s=s.updateChild(o,n),new wt(t.writeTree_.set(i,s))}else{const i=new ne(n),s=t.writeTree_.setTree(e,i);return new wt(s)}}}function Kf(t,e,n){let r=t;return qe(n,(i,s)=>{r=bi(r,ve(e,i),s)}),r}function qf(t,e){if($(e))return wt.empty();{const n=t.writeTree_.setTree(e,new ne(null));return new wt(n)}}function pu(t,e){return rr(t,e)!=null}function rr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ve(n.path,e)):null}function Xf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ce,(r,i)=>{e.push(new W(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new W(r,i.value))}),e}function Cn(t,e){if($(e))return t;{const n=rr(t,e);return n!=null?new wt(new ne(n)):new wt(t.writeTree_.subtree(e))}}function mu(t){return t.writeTree_.isEmpty()}function Qr(t,e){return bg(Q(),t.writeTree_,e)}function bg(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(k(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=bg(ve(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ve(t,".priority"),r)),n}}/**
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
 */function Pc(t,e){return Lg(e,t)}function hC(t,e,n,r,i){k(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=bi(t.visibleWrites,e,n)),t.lastWriteId=r}function pC(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function mC(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);k(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&gC(l,r.path)?i=!1:gt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return _C(t),!0;if(r.snap)t.visibleWrites=qf(t.visibleWrites,r.path);else{const l=r.children;qe(l,a=>{t.visibleWrites=qf(t.visibleWrites,ve(r.path,a))})}return!0}else return!1}function gC(t,e){if(t.snap)return gt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&gt(ve(t.path,n),e))return!0;return!1}function _C(t){t.visibleWrites=Ag(t.allWrites,yC,Q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function yC(t){return t.visible}function Ag(t,e,n){let r=wt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)gt(n,o)?(l=Ve(n,o),r=bi(r,l,s.snap)):gt(o,n)&&(l=Ve(o,n),r=bi(r,Q(),s.snap.getChild(l)));else if(s.children){if(gt(n,o))l=Ve(n,o),r=Kf(r,l,s.children);else if(gt(o,n))if(l=Ve(o,n),$(l))r=Kf(r,Q(),s.children);else{const a=Vr(s.children,B(l));if(a){const u=a.getChild(J(l));r=bi(r,Q(),u)}}}else throw Xr("WriteRecord should have .snap or .children")}}return r}function Og(t,e,n,r,i){if(!r&&!i){const s=rr(t.visibleWrites,e);if(s!=null)return s;{const o=Cn(t.visibleWrites,e);if(mu(o))return n;if(n==null&&!pu(o,Q()))return null;{const l=n||O.EMPTY_NODE;return Qr(o,l)}}}else{const s=Cn(t.visibleWrites,e);if(!i&&mu(s))return n;if(!i&&n==null&&!pu(s,Q()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(gt(u.path,e)||gt(e,u.path))},l=Ag(t.allWrites,o,e),a=n||O.EMPTY_NODE;return Qr(l,a)}}}function vC(t,e,n){let r=O.EMPTY_NODE;const i=rr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ce,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Cn(t.visibleWrites,e);return n.forEachChild(ce,(o,l)=>{const a=Qr(Cn(s,new K(o)),l);r=r.updateImmediateChild(o,a)}),Xf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Cn(t.visibleWrites,e);return Xf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function wC(t,e,n,r,i){k(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ve(e,n);if(pu(t.visibleWrites,s))return null;{const o=Cn(t.visibleWrites,s);return mu(o)?i.getChild(n):Qr(o,i.getChild(n))}}function CC(t,e,n,r){const i=ve(e,n),s=rr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Cn(t.visibleWrites,i);return Qr(o,r.getNode().getImmediateChild(n))}else return null}function EC(t,e){return rr(t.visibleWrites,e)}function SC(t,e,n,r,i,s,o){let l;const a=Cn(t.visibleWrites,e),u=rr(a,Q());if(u!=null)l=u;else if(n!=null)l=Qr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const f=[],c=o.getCompare(),d=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let y=d.getNext();for(;y&&f.length<i;)c(y,r)!==0&&f.push(y),y=d.getNext();return f}else return[]}function xC(){return{visibleWrites:wt.empty(),allWrites:[],lastWriteId:-1}}function jo(t,e,n,r){return Og(t.writeTree,t.treePath,e,n,r)}function Dc(t,e){return vC(t.writeTree,t.treePath,e)}function Jf(t,e,n,r){return wC(t.writeTree,t.treePath,e,n,r)}function zo(t,e){return EC(t.writeTree,ve(t.treePath,e))}function kC(t,e,n,r,i,s){return SC(t.writeTree,t.treePath,e,n,r,i,s)}function bc(t,e,n){return CC(t.writeTree,t.treePath,e,n)}function Mg(t,e){return Lg(ve(t.treePath,e),t.writeTree)}function Lg(t,e){return{treePath:t,writeTree:e}}/**
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
 */class IC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;k(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),k(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ns(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ts(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Gr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ns(r,e.snapshotNode,i.oldSnap));else throw Xr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class NC{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Fg=new NC;class Ac{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Zn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return bc(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:er(this.viewCache_),s=kC(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function TC(t){return{filter:t}}function RC(t,e){k(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),k(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function PC(t,e,n,r,i){const s=new IC;let o,l;if(n.type===_t.OVERWRITE){const u=n;u.source.fromUser?o=gu(t,e,u.path,u.snap,r,i,s):(k(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!$(u.path),o=Uo(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===_t.MERGE){const u=n;u.source.fromUser?o=bC(t,e,u.path,u.children,r,i,s):(k(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=_u(t,e,u.path,u.children,r,i,l,s))}else if(n.type===_t.ACK_USER_WRITE){const u=n;u.revert?o=MC(t,e,u.path,r,i,s):o=AC(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===_t.LISTEN_COMPLETE)o=OC(t,e,n.path,r,s);else throw Xr("Unknown operation type: "+n.type);const a=s.getChanges();return DC(e,o,a),{viewCache:o,changes:a}}function DC(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=hu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Tg(hu(e)))}}function jg(t,e,n,r,i,s){const o=e.eventCache;if(zo(r,n)!=null)return e;{let l,a;if($(n))if(k(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=er(e),f=u instanceof O?u:O.EMPTY_NODE,c=Dc(r,f);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=jo(r,er(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=B(n);if(u===".priority"){k(xn(n)===1,"Can't have a priority with additional path components");const f=o.getNode();a=e.serverCache.getNode();const c=Jf(r,n,f,a);c!=null?l=t.filter.updatePriority(f,c):l=o.getNode()}else{const f=J(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const d=Jf(r,n,o.getNode(),a);d!=null?c=o.getNode().getImmediateChild(u).updateChild(f,d):c=o.getNode().getImmediateChild(u)}else c=bc(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,f,i,s):l=o.getNode()}}return Di(e,l,o.isFullyInitialized()||$(n),t.filter.filtersNodes())}}function Uo(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const f=o?t.filter:t.filter.getIndexedFilter();if($(n))u=f.updateFullNode(a.getNode(),r,null);else if(f.filtersNodes()&&!a.isFiltered()){const y=a.getNode().updateChild(n,r);u=f.updateFullNode(a.getNode(),y,null)}else{const y=B(n);if(!a.isCompleteForPath(n)&&xn(n)>1)return e;const v=J(n),L=a.getNode().getImmediateChild(y).updateChild(v,r);y===".priority"?u=f.updatePriority(a.getNode(),L):u=f.updateChild(a.getNode(),y,L,v,Fg,null)}const c=Dg(e,u,a.isFullyInitialized()||$(n),f.filtersNodes()),d=new Ac(i,c,s);return jg(t,c,n,i,d,l)}function gu(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const f=new Ac(i,e,s);if($(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Di(e,u,!0,t.filter.filtersNodes());else{const c=B(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Di(e,u,l.isFullyInitialized(),l.isFiltered());else{const d=J(n),y=l.getNode().getImmediateChild(c);let v;if($(d))v=r;else{const E=f.getCompleteChild(c);E!=null?vg(d)===".priority"&&E.getChild(Cg(d)).isEmpty()?v=E:v=E.updateChild(d,r):v=O.EMPTY_NODE}if(y.equals(v))a=e;else{const E=t.filter.updateChild(l.getNode(),c,v,d,f,o);a=Di(e,E,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Zf(t,e){return t.eventCache.isCompleteForChild(e)}function bC(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const f=ve(n,a);Zf(e,B(f))&&(l=gu(t,l,f,u,i,s,o))}),r.foreach((a,u)=>{const f=ve(n,a);Zf(e,B(f))||(l=gu(t,l,f,u,i,s,o))}),l}function eh(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function _u(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;$(n)?u=r:u=new ne(null).setTree(n,r);const f=e.serverCache.getNode();return u.children.inorderTraversal((c,d)=>{if(f.hasChild(c)){const y=e.serverCache.getNode().getImmediateChild(c),v=eh(t,y,d);a=Uo(t,a,new K(c),v,i,s,o,l)}}),u.children.inorderTraversal((c,d)=>{const y=!e.serverCache.isCompleteForChild(c)&&d.value===null;if(!f.hasChild(c)&&!y){const v=e.serverCache.getNode().getImmediateChild(c),E=eh(t,v,d);a=Uo(t,a,new K(c),E,i,s,o,l)}}),a}function AC(t,e,n,r,i,s,o){if(zo(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if($(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Uo(t,e,n,a.getNode().getChild(n),i,s,l,o);if($(n)){let u=new ne(null);return a.getNode().forEachChild(Mr,(f,c)=>{u=u.set(new K(f),c)}),_u(t,e,n,u,i,s,l,o)}else return e}else{let u=new ne(null);return r.foreach((f,c)=>{const d=ve(n,f);a.isCompleteForPath(d)&&(u=u.set(f,a.getNode().getChild(d)))}),_u(t,e,n,u,i,s,l,o)}}function OC(t,e,n,r,i){const s=e.serverCache,o=Dg(e,s.getNode(),s.isFullyInitialized()||$(n),s.isFiltered());return jg(t,o,n,r,Fg,i)}function MC(t,e,n,r,i,s){let o;if(zo(r,n)!=null)return e;{const l=new Ac(r,e,i),a=e.eventCache.getNode();let u;if($(n)||B(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=jo(r,er(e));else{const c=e.serverCache.getNode();k(c instanceof O,"serverChildren would be complete if leaf node"),f=Dc(r,c)}f=f,u=t.filter.updateFullNode(a,f,s)}else{const f=B(n);let c=bc(r,f,e.serverCache);c==null&&e.serverCache.isCompleteForChild(f)&&(c=a.getImmediateChild(f)),c!=null?u=t.filter.updateChild(a,f,c,J(n),l,s):e.eventCache.getNode().hasChild(f)?u=t.filter.updateChild(a,f,O.EMPTY_NODE,J(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=jo(r,er(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||zo(r,Q())!=null,Di(e,u,o,t.filter.filtersNodes())}}/**
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
 */class LC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Ic(r.getIndex()),s=tC(r);this.processor_=TC(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(O.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(O.EMPTY_NODE,l.getNode(),null),f=new Zn(a,o.isFullyInitialized(),i.filtersNodes()),c=new Zn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=cl(c,f),this.eventGenerator_=new aC(this.query_)}get query(){return this.query_}}function FC(t){return t.viewCache_.serverCache.getNode()}function jC(t,e){const n=er(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!$(e)&&!n.getImmediateChild(B(e)).isEmpty())?n.getChild(e):null}function th(t){return t.eventRegistrations_.length===0}function zC(t,e){t.eventRegistrations_.push(e)}function nh(t,e,n){const r=[];if(n){k(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function rh(t,e,n,r){e.type===_t.MERGE&&e.source.queryId!==null&&(k(er(t.viewCache_),"We should always have a full cache before handling merges"),k(hu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=PC(t.processor_,i,e,n,r);return RC(t.processor_,s.viewCache),k(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,zg(t,s.changes,s.viewCache.eventCache.getNode(),null)}function UC(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ce,(s,o)=>{r.push(Gr(s,o))}),n.isFullyInitialized()&&r.push(Tg(n.getNode())),zg(t,r,n.getNode(),e)}function zg(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return uC(t.eventGenerator_,e,n,i)}/**
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
 */let Bo;class BC{constructor(){this.views=new Map}}function WC(t){k(!Bo,"__referenceConstructor has already been defined"),Bo=t}function $C(){return k(Bo,"Reference.ts has not been loaded"),Bo}function VC(t){return t.views.size===0}function Oc(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return k(s!=null,"SyncTree gave us an op for an invalid query."),rh(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(rh(o,e,n,r));return s}}function HC(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=jo(n,i?r:null),a=!1;l?a=!0:r instanceof O?(l=Dc(n,r),a=!1):(l=O.EMPTY_NODE,a=!1);const u=cl(new Zn(l,a,!1),new Zn(r,i,!1));return new LC(e,u)}return o}function GC(t,e,n,r,i,s){const o=HC(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),zC(o,n),UC(o,n)}function QC(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=kn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(nh(u,n,r)),th(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(nh(a,n,r)),th(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!kn(t)&&s.push(new($C())(e._repo,e._path)),{removed:s,events:o}}function Ug(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Lr(t,e){let n=null;for(const r of t.views.values())n=n||jC(r,e);return n}function Bg(t,e){if(e._queryParams.loadsAllData())return dl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Wg(t,e){return Bg(t,e)!=null}function kn(t){return dl(t)!=null}function dl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Wo;function YC(t){k(!Wo,"__referenceConstructor has already been defined"),Wo=t}function KC(){return k(Wo,"Reference.ts has not been loaded"),Wo}let qC=1;class ih{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ne(null),this.pendingWriteTree_=xC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function $g(t,e,n,r,i){return hC(t.pendingWriteTree_,e,n,r,i),i?gs(t,new Jn(Pg(),e,n)):[]}function $n(t,e,n=!1){const r=pC(t.pendingWriteTree_,e);if(mC(t.pendingWriteTree_,e)){let s=new ne(null);return r.snap!=null?s=s.set(Q(),!0):qe(r.children,o=>{s=s.set(new K(o),!0)}),gs(t,new Fo(r.path,s,n))}else return[]}function fl(t,e,n){return gs(t,new Jn(Tc(),e,n))}function XC(t,e,n){const r=ne.fromObject(n);return gs(t,new ss(Tc(),e,r))}function JC(t,e){return gs(t,new is(Tc(),e))}function ZC(t,e,n){const r=Lc(t,n);if(r){const i=Fc(r),s=i.path,o=i.queryId,l=Ve(s,e),a=new is(Rc(o),l);return jc(t,s,a)}else return[]}function yu(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||Wg(o,e))){const a=QC(o,e,n,r);VC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const f=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(d,y)=>kn(y));if(f&&!c){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const y=nE(d);for(let v=0;v<y.length;++v){const E=y[v],L=E.query,g=Gg(t,E);t.listenProvider_.startListening(Ai(L),$o(t,L),g.hashFn,g.onComplete)}}}!c&&u.length>0&&!r&&(f?t.listenProvider_.stopListening(Ai(e),null):u.forEach(d=>{const y=t.queryToTagMap.get(hl(d));t.listenProvider_.stopListening(Ai(d),y)}))}rE(t,u)}return l}function eE(t,e,n,r){const i=Lc(t,r);if(i!=null){const s=Fc(i),o=s.path,l=s.queryId,a=Ve(o,e),u=new Jn(Rc(l),a,n);return jc(t,o,u)}else return[]}function tE(t,e,n,r){const i=Lc(t,r);if(i){const s=Fc(i),o=s.path,l=s.queryId,a=Ve(o,e),u=ne.fromObject(n),f=new ss(Rc(l),a,u);return jc(t,o,f)}else return[]}function sh(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,y)=>{const v=Ve(d,i);s=s||Lr(y,v),o=o||kn(y)});let l=t.syncPointTree_.get(i);l?(o=o||kn(l),s=s||Lr(l,Q())):(l=new BC,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=O.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((y,v)=>{const E=Lr(v,Q());E&&(s=s.updateImmediateChild(y,E))}));const u=Wg(l,e);if(!u&&!e._queryParams.loadsAllData()){const d=hl(e);k(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const y=iE();t.queryToTagMap.set(d,y),t.tagToQueryMap.set(y,d)}const f=Pc(t.pendingWriteTree_,i);let c=GC(l,e,n,f,s,a);if(!u&&!o&&!r){const d=Bg(l,e);c=c.concat(sE(t,e,d))}return c}function Mc(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ve(o,e),u=Lr(l,a);if(u)return u});return Og(i,e,s,n,!0)}function gs(t,e){return Vg(e,t.syncPointTree_,null,Pc(t.pendingWriteTree_,Q()))}function Vg(t,e,n,r){if($(t.path))return Hg(t,e,n,r);{const i=e.get(Q());n==null&&i!=null&&(n=Lr(i,Q()));let s=[];const o=B(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,f=Mg(r,o);s=s.concat(Vg(l,a,u,f))}return i&&(s=s.concat(Oc(i,t,r,n))),s}}function Hg(t,e,n,r){const i=e.get(Q());n==null&&i!=null&&(n=Lr(i,Q()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=Mg(r,o),f=t.operationForChild(o);f&&(s=s.concat(Hg(f,l,a,u)))}),i&&(s=s.concat(Oc(i,t,r,n))),s}function Gg(t,e){const n=e.query,r=$o(t,n);return{hashFn:()=>(FC(e)||O.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?ZC(t,n._path,r):JC(t,n._path);{const s=e1(i,n);return yu(t,n,null,s)}}}}function $o(t,e){const n=hl(e);return t.queryToTagMap.get(n)}function hl(t){return t._path.toString()+"$"+t._queryIdentifier}function Lc(t,e){return t.tagToQueryMap.get(e)}function Fc(t){const e=t.indexOf("$");return k(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new K(t.substr(0,e))}}function jc(t,e,n){const r=t.syncPointTree_.get(e);k(r,"Missing sync point for query tag that we're tracking");const i=Pc(t.pendingWriteTree_,e);return Oc(r,n,i,null)}function nE(t){return t.fold((e,n,r)=>{if(n&&kn(n))return[dl(n)];{let i=[];return n&&(i=Ug(n)),qe(r,(s,o)=>{i=i.concat(o)}),i}})}function Ai(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(KC())(t._repo,t._path):t}function rE(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=hl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function iE(){return qC++}function sE(t,e,n){const r=e._path,i=$o(t,e),s=Gg(t,n),o=t.listenProvider_.startListening(Ai(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)k(!kn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,f,c)=>{if(!$(u)&&f&&kn(f))return[dl(f).query];{let d=[];return f&&(d=d.concat(Ug(f).map(y=>y.query))),qe(c,(y,v)=>{d=d.concat(v)}),d}});for(let u=0;u<a.length;++u){const f=a[u];t.listenProvider_.stopListening(Ai(f),$o(t,f))}}return o}/**
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
 */class zc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new zc(n)}node(){return this.node_}}class Uc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ve(this.path_,e);return new Uc(this.syncTree_,n)}node(){return Mc(this.syncTree_,this.path_)}}const oE=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},oh=function(t,e,n){if(!t||typeof t!="object")return t;if(k(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return lE(t[".sv"],e,n);if(typeof t[".sv"]=="object")return aE(t[".sv"],e);k(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},lE=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:k(!1,"Unexpected server value: "+t)}},aE=function(t,e,n){t.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&k(!1,"Unexpected increment value: "+r);const i=e.node();if(k(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},uE=function(t,e,n,r){return Bc(e,new Uc(n,t),r)},Qg=function(t,e,n){return Bc(t,new zc(e),n)};function Bc(t,e,n){const r=t.getPriority().val(),i=oh(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=oh(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Ee(l,Te(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ee(i))),o.forEachChild(ce,(l,a)=>{const u=Bc(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class Wc{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function $c(t,e){let n=e instanceof K?e:new K(e),r=t,i=B(n);for(;i!==null;){const s=Vr(r.node.children,i)||{children:{},childCount:0};r=new Wc(i,r,s),n=J(n),i=B(n)}return r}function ei(t){return t.node.value}function Yg(t,e){t.node.value=e,vu(t)}function Kg(t){return t.node.childCount>0}function cE(t){return ei(t)===void 0&&!Kg(t)}function pl(t,e){qe(t.node.children,(n,r)=>{e(new Wc(n,t,r))})}function qg(t,e,n,r){n&&e(t),pl(t,i=>{qg(i,e,!0)})}function dE(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function _s(t){return new K(t.parent===null?t.name:_s(t.parent)+"/"+t.name)}function vu(t){t.parent!==null&&fE(t.parent,t.name,t)}function fE(t,e,n){const r=cE(n),i=Xt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,vu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,vu(t))}/**
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
 */const hE=/[\[\].#$\/\u0000-\u001F\u007F]/,pE=/[\[\].#$\u0000-\u001F\u007F]/,oa=10*1024*1024,Xg=function(t){return typeof t=="string"&&t.length!==0&&!hE.test(t)},Jg=function(t){return typeof t=="string"&&t.length!==0&&!pE.test(t)},mE=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Jg(t)},gE=function(t,e,n,r){Vc(_c(t,"value"),e,n)},Vc=function(t,e,n){const r=n instanceof K?new A1(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+jn(r));if(typeof e=="function")throw new Error(t+"contains a function "+jn(r)+" with contents = "+e.toString());if(Jm(e))throw new Error(t+"contains "+e.toString()+" "+jn(r));if(typeof e=="string"&&e.length>oa/3&&al(e)>oa)throw new Error(t+"contains a string greater than "+oa+" utf8 bytes "+jn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(qe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Xg(o)))throw new Error(t+" contains an invalid key ("+o+") "+jn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);O1(r,o),Vc(t,l,r),M1(r)}),i&&s)throw new Error(t+' contains ".value" child '+jn(r)+" in addition to actual children.")}},Zg=function(t,e,n,r){if(!Jg(n))throw new Error(_c(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},_E=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Zg(t,e,n)},yE=function(t,e){if(B(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},vE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Xg(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!mE(n))throw new Error(_c(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class wE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Hc(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Sc(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function e_(t,e,n){Hc(t,n),t_(t,r=>Sc(r,e))}function Kt(t,e,n){Hc(t,n),t_(t,r=>gt(r,e)||gt(e,r))}function t_(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(CE(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function CE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ri&&Me("event: "+n.toString()),Zr(r)}}}/**
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
 */const EE="repo_interrupt",SE=25;class xE{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new wE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Lo(),this.transactionQueueTree_=new Wc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function kE(t,e,n){if(t.stats_=Cc(t.repoInfo_),t.forceRestClient_||i1())t.server_=new Mo(t.repoInfo_,(r,i,s,o)=>{lh(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ah(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ke(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Wt(t.repoInfo_,e,(r,i,s,o)=>{lh(t,r,i,s,o)},r=>{ah(t,r)},r=>{NE(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=u1(t.repoInfo_,()=>new lC(t.stats_,t.server_)),t.infoData_=new nC,t.infoSyncTree_=new ih({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=fl(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Qc(t,"connected",!1),t.serverSyncTree_=new ih({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Kt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function IE(t){const n=t.infoData_.getNode(new K(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Gc(t){return oE({timestamp:IE(t)})}function lh(t,e,n,r,i){t.dataUpdateCount++;const s=new K(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=To(n,u=>Te(u));o=tE(t.serverSyncTree_,s,a,i)}else{const a=Te(n);o=eE(t.serverSyncTree_,s,a,i)}else if(r){const a=To(n,u=>Te(u));o=XC(t.serverSyncTree_,s,a)}else{const a=Te(n);o=fl(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=ml(t,s)),Kt(t.eventQueue_,l,o)}function ah(t,e){Qc(t,"connected",e),e===!1&&RE(t)}function NE(t,e){qe(e,(n,r)=>{Qc(t,n,r)})}function Qc(t,e,n){const r=new K("/.info/"+e),i=Te(n);t.infoData_.updateSnapshot(r,i);const s=fl(t.infoSyncTree_,r,i);Kt(t.eventQueue_,r,s)}function n_(t){return t.nextWriteId_++}function TE(t,e,n,r,i){Yc(t,"set",{path:e.toString(),value:n,priority:r});const s=Gc(t),o=Te(n,r),l=Mc(t.serverSyncTree_,e),a=Qg(o,l,s),u=n_(t),f=$g(t.serverSyncTree_,e,a,u,!0);Hc(t.eventQueue_,f),t.server_.put(e.toString(),o.val(!0),(d,y)=>{const v=d==="ok";v||Ke("set at "+e+" failed: "+d);const E=$n(t.serverSyncTree_,u,!v);Kt(t.eventQueue_,e,E),bE(t,i,d,y)});const c=l_(t,e);ml(t,c),Kt(t.eventQueue_,c,[])}function RE(t){Yc(t,"onDisconnectEvents");const e=Gc(t),n=Lo();fu(t.onDisconnect_,Q(),(i,s)=>{const o=uE(i,s,t.serverSyncTree_,e);Rg(n,i,o)});let r=[];fu(n,Q(),(i,s)=>{r=r.concat(fl(t.serverSyncTree_,i,s));const o=l_(t,i);ml(t,o)}),t.onDisconnect_=Lo(),Kt(t.eventQueue_,Q(),r)}function PE(t,e,n){let r;B(e._path)===".info"?r=sh(t.infoSyncTree_,e,n):r=sh(t.serverSyncTree_,e,n),e_(t.eventQueue_,e._path,r)}function uh(t,e,n){let r;B(e._path)===".info"?r=yu(t.infoSyncTree_,e,n):r=yu(t.serverSyncTree_,e,n),e_(t.eventQueue_,e._path,r)}function DE(t){t.persistentConnection_&&t.persistentConnection_.interrupt(EE)}function Yc(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Me(n,...e)}function bE(t,e,n,r){e&&Zr(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function r_(t,e,n){return Mc(t.serverSyncTree_,e,n)||O.EMPTY_NODE}function Kc(t,e=t.transactionQueueTree_){if(e||gl(t,e),ei(e)){const n=s_(t,e);k(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&AE(t,_s(e),n)}else Kg(e)&&pl(e,n=>{Kc(t,n)})}function AE(t,e,n){const r=n.map(u=>u.currentWriteId),i=r_(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const f=n[u];k(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const c=Ve(e,f.path);s=s.updateChild(c,f.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Yc(t,"transaction put response",{path:a.toString(),status:u});let f=[];if(u==="ok"){const c=[];for(let d=0;d<n.length;d++)n[d].status=2,f=f.concat($n(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&c.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();gl(t,$c(t.transactionQueueTree_,e)),Kc(t,t.transactionQueueTree_),Kt(t.eventQueue_,e,f);for(let d=0;d<c.length;d++)Zr(c[d])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{Ke("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}ml(t,e)}},o)}function ml(t,e){const n=i_(t,e),r=_s(n),i=s_(t,n);return OE(t,i,r),r}function OE(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Ve(n,a.path);let f=!1,c;if(k(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)f=!0,c=a.abortReason,i=i.concat($n(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=SE)f=!0,c="maxretry",i=i.concat($n(t.serverSyncTree_,a.currentWriteId,!0));else{const d=r_(t,a.path,o);a.currentInputSnapshot=d;const y=e[l].update(d.val());if(y!==void 0){Vc("transaction failed: Data returned ",y,a.path);let v=Te(y);typeof y=="object"&&y!=null&&Xt(y,".priority")||(v=v.updatePriority(d.getPriority()));const L=a.currentWriteId,g=Gc(t),p=Qg(v,d,g);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=p,a.currentWriteId=n_(t),o.splice(o.indexOf(L),1),i=i.concat($g(t.serverSyncTree_,a.path,p,a.currentWriteId,a.applyLocally)),i=i.concat($n(t.serverSyncTree_,L,!0))}else f=!0,c="nodata",i=i.concat($n(t.serverSyncTree_,a.currentWriteId,!0))}Kt(t.eventQueue_,n,i),i=[],f&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}gl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Zr(r[l]);Kc(t,t.transactionQueueTree_)}function i_(t,e){let n,r=t.transactionQueueTree_;for(n=B(e);n!==null&&ei(r)===void 0;)r=$c(r,n),e=J(e),n=B(e);return r}function s_(t,e){const n=[];return o_(t,e,n),n.sort((r,i)=>r.order-i.order),n}function o_(t,e,n){const r=ei(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);pl(e,i=>{o_(t,i,n)})}function gl(t,e){const n=ei(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Yg(e,n.length>0?n:void 0)}pl(e,r=>{gl(t,r)})}function l_(t,e){const n=_s(i_(t,e)),r=$c(t.transactionQueueTree_,e);return dE(r,i=>{la(t,i)}),la(t,r),qg(r,i=>{la(t,i)}),n}function la(t,e){const n=ei(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(k(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(k(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat($n(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Yg(e,void 0):n.length=s+1,Kt(t.eventQueue_,_s(e),i);for(let o=0;o<r.length;o++)Zr(r[o])}}/**
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
 */function ME(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function LE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ke(`Invalid query segment '${n}' in query '${t}'`)}return e}const ch=function(t,e){const n=FE(t),r=n.namespace;n.domain==="firebase.com"&&Yt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Yt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Kw();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new cg(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new K(n.pathString)}},FE=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let f=t.indexOf("/");f===-1&&(f=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(f,c)),f<c&&(i=ME(t.substring(f,c)));const d=LE(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const y=e.slice(0,u);if(y.toLowerCase()==="localhost")n="localhost";else if(y.split(".").length<=2)n=y;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */class jE{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ke(this.snapshot.exportVal())}}class zE{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class UE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return k(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class qc{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return $(this._path)?null:vg(this._path)}get ref(){return new Rn(this._repo,this._path)}get _queryIdentifier(){const e=Qf(this._queryParams),n=vc(e);return n==="{}"?"default":n}get _queryObject(){return Qf(this._queryParams)}isEqual(e){if(e=fs(e),!(e instanceof qc))return!1;const n=this._repo===e._repo,r=Sc(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+b1(this._path)}}class Rn extends qc{constructor(e,n){super(e,n,new Nc,!1)}get parent(){const e=Cg(this._path);return e===null?null:new Rn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Vo{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new K(e),r=wu(this.ref,e);return new Vo(this._node.getChild(n),r,ce)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Vo(i,wu(this.ref,r),ce)))}hasChild(e){const n=new K(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function dh(t,e){return t=fs(t),t._checkNotDeleted("ref"),e!==void 0?wu(t._root,e):t._root}function wu(t,e){return t=fs(t),B(t._path)===null?_E("child","path",e):Zg("child","path",e),new Rn(t._repo,ve(t._path,e))}function BE(t,e){t=fs(t),yE("set",t._path),gE("set",e,t._path);const n=new ll;return TE(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Xc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new jE("value",this,new Vo(e.snapshotNode,new Rn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new zE(this,e,n):null}matches(e){return e instanceof Xc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function WE(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(f,c)=>{uh(t._repo,t,l),a(f,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new UE(n,s||void 0),l=new Xc(o);return PE(t._repo,t,l),()=>uh(t._repo,t,l)}function $E(t,e,n,r){return WE(t,"value",e,n,r)}WC(Rn);YC(Rn);/**
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
 */const VE="FIREBASE_DATABASE_EMULATOR_HOST",Cu={};let HE=!1;function GE(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=Wm(s);t.repoInfo_=new cg(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function QE(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Yt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Me("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ch(s,i),l=o.repoInfo,a;typeof process<"u"&&Rf&&(a=Rf[VE]),a?(s=`http://${a}?ns=${l.namespace}`,o=ch(s,i),l=o.repoInfo):o.repoInfo.secure;const u=new o1(t.name,t.options,e);vE("Invalid Firebase Database URL",o),$(o.path)||Yt("Database URL must point to the root of a Firebase Database (not including a child path).");const f=KE(l,t,u,new s1(t,n));return new qE(f,t)}function YE(t,e){const n=Cu[e];(!n||n[t.key]!==t)&&Yt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),DE(t),delete n[t.key]}function KE(t,e,n,r){let i=Cu[e.name];i||(i={},Cu[e.name]=i);let s=i[t.toURLString()];return s&&Yt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new xE(t,HE,n,r),i[t.toURLString()]=s,s}class qE{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(kE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Rn(this._repo,Q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(YE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Yt("Cannot call "+e+" on a deleted database.")}}function XE(t=bw(),e){const n=Nw(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=m0("database");r&&JE(n,...r)}return n}function JE(t,e,n,r={}){t=fs(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Ro(r,s.repoInfo_.emulatorOptions))return;Yt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&Yt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new to(to.OWNER);else if(r.mockUserToken){const l=typeof r.mockUserToken=="string"?r.mockUserToken:g0(r.mockUserToken,t.app.options.projectId);o=new to(l)}Wm(e)&&P0(e),GE(s,i,r,o)}/**
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
 */function ZE(t){$w(Dw),Do(new Ji("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return QE(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Ar(Pf,Df,t),Ar(Pf,Df,"esm2020")}Wt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Wt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ZE();var eS="firebase",tS="12.15.0";/**
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
 */Ar(eS,tS,"app");const nS={apiKey:"AIzaSyC-AGGH-4B7w4fiZdPzILlYZcFwKsifNEk",authDomain:"minima-game.firebaseapp.com",databaseURL:"https://minima-game-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"minima-game",storageBucket:"minima-game.firebasestorage.app",messagingSenderId:"650096003712",appId:"1:650096003712:web:2e42f303ce049256413465"},rS=Gm(nS),fh=XE(rS),hh="shared-game",rt=({children:t,size:e=14,...n})=>h.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...n,children:t}),aa=t=>h.jsxs(rt,{...t,children:[h.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),h.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),ph=t=>h.jsxs(rt,{...t,children:[h.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),h.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),iS=t=>h.jsx(rt,{...t,children:h.jsx("path",{d:"M3 17h18l-2-9-5 5-4-7-4 7-5-5Z"})}),sS=t=>h.jsxs(rt,{...t,children:[h.jsx("circle",{cx:"12",cy:"11",r:"7"}),h.jsx("circle",{cx:"9",cy:"11",r:"1",fill:"currentColor"}),h.jsx("circle",{cx:"15",cy:"11",r:"1",fill:"currentColor"}),h.jsx("path",{d:"M10 19h4"})]}),oS=t=>h.jsxs(rt,{...t,children:[h.jsx("path",{d:"M3 7v6h6"}),h.jsx("path",{d:"M3 13a9 9 0 1 0 3-7.7L3 7"})]}),mh=t=>h.jsxs(rt,{...t,children:[h.jsx("path",{d:"M3 12a9 9 0 1 1 3 6.7"}),h.jsx("path",{d:"M3 12V6M3 12h6"})]}),gh=t=>h.jsxs(rt,{...t,children:[h.jsx("rect",{x:"9",y:"9",width:"11",height:"11",rx:"2"}),h.jsx("path",{d:"M5 15V5a2 2 0 0 1 2-2h10"})]}),lS=t=>h.jsxs(rt,{...t,children:[h.jsx("path",{d:"M3 6h18"}),h.jsx("path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),h.jsx("path",{d:"M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"}),h.jsx("path",{d:"M10 11v6M14 11v6"})]}),mi=t=>h.jsxs(rt,{...t,children:[h.jsx("rect",{x:"5",y:"11",width:"14",height:"9",rx:"2"}),h.jsx("path",{d:"M8 11V7a4 4 0 0 1 8 0v4"})]}),ua=t=>h.jsxs(rt,{...t,children:[h.jsx("rect",{x:"5",y:"11",width:"14",height:"9",rx:"2"}),h.jsx("path",{d:"M8 11V7a4 4 0 0 1 7.2-2.4"})]}),aS=t=>h.jsx(rt,{...t,children:h.jsx("path",{d:"M17 3a2.83 2.83 0 1 1 4 4L7 21l-4 1 1-4Z"})}),uS=t=>h.jsxs(rt,{...t,children:[h.jsx("rect",{x:"9",y:"2",width:"6",height:"11",rx:"3"}),h.jsx("path",{d:"M5 10a7 7 0 0 0 14 0"}),h.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"22"}),h.jsx("line",{x1:"8",y1:"22",x2:"16",y2:"22"})]}),_h=t=>h.jsxs(rt,{...t,children:[h.jsx("line",{x1:"2",y1:"2",x2:"22",y2:"22"}),h.jsx("path",{d:"M18.89 13.23A7 7 0 0 0 19 12"}),h.jsx("path",{d:"M5 10a7 7 0 0 0 12.66 3.76"}),h.jsx("rect",{x:"9",y:"2",width:"6",height:"11",rx:"3",clipPath:"url(#mic-clip)"}),h.jsx("path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33"}),h.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"22"}),h.jsx("line",{x1:"8",y1:"22",x2:"16",y2:"22"})]}),yh=-10,cS=["Ayush","Hans","Aman","Yash","Arnav","Sumit","Shivam","Happy"],dS=[[0,10,12,6,11,7,13,50],[6,-10,7,8,2,6,4,9],[4,0,7,0,50,6,0,0],[7,5,0,16,23,4,50,0],[16,8,46,-10,15,21,5,23],[16,0,6,50,9,11,5,17],[3,5,6,14,-10,5,5,6],[5,21,7,25,4,10,-10,12],[7,3,17,9,17,9,-10,7],[15,8,12,7,20,21,-10,11],[50,8,5,0,11,12,13,6],[12,24,18,16,19,6,20,-10],[3,15,5,8,-10,6,11,11],[4,4,4,15,14,12,-10,6],[6,5,4,5,16,18,16,-10],[5,-10,8,6,14,14,4,13]];function Ir(t){return`${t}${Date.now().toString(36)}${Math.floor(Math.random()*1e3)}`}function fS(){const t=cS.map((n,r)=>({id:`p${r}`,name:n})),e=dS.map((n,r)=>({id:`r${r}`,scores:Object.fromEntries(t.map((i,s)=>[i.id,n[s]]))}));return{id:Ir("b"),name:"Game 1",players:t,rounds:e}}function vh(t){return{id:Ir("b"),name:t,players:[],rounds:[]}}function wh(t){return JSON.parse(JSON.stringify({players:t.players,rounds:t.rounds}))}function hS(){const[t,e]=z.useState([]),[n,r]=z.useState(null),[i,s]=z.useState(!1),[o,l]=z.useState(""),[a,u]=z.useState(""),[f,c]=z.useState(""),[d,y]=z.useState(!1),[v,E]=z.useState(!1),[L,g]=z.useState(!1),[p,_]=z.useState(""),[S,N]=z.useState(null),[b,D]=z.useState(null),[A,q]=z.useState(""),[F,Fe]=z.useState([]),[Pn,Et]=z.useState(!1),[ir,ys]=z.useState(""),[sr,Dn]=z.useState(""),[T,M]=z.useState([]),[U,ee]=z.useState(!1),[de,Jt]=z.useState(""),[St,or]=z.useState(""),[xt,Zt]=z.useState(""),[,_l]=z.useState(0),[Dt,vs]=z.useState(!1),[bn,yl]=z.useState(!1),[en,vl]=z.useState(null),[wl,Cl]=z.useState(""),ws=z.useRef(null),tn=z.useRef({}),Cs=z.useRef(null),Jc=z.useRef({}),El=z.useRef({}),lr=z.useRef(null),Sl=z.useRef(null);function a_(m){const w={};return m.forEach(C=>{w[C.id]={...C,players:C.players.reduce((I,P)=>(I[P.id]=P,I),{}),rounds:C.rounds.reduce((I,P)=>(I[P.id]=P,I),{})}}),w}function u_(m){return Object.values(m).map(w=>({...w,players:w.players?Object.values(w.players):[],rounds:w.rounds?Object.values(w.rounds).map(C=>({...C,scores:C.scores||{}})):[]}))}z.useEffect(()=>{const m=dh(fh,`rooms/${hh}`),w=$E(m,C=>{const I=C.val();if(I&&I.boards){const P=u_(I.boards);Cs.current=JSON.stringify({boards:P}),e(P),r(H=>{var j,fe;return H?P.some(Ce=>Ce.id===H)?H:((fe=P[0])==null?void 0:fe.id)||null:((j=P[0])==null?void 0:j.id)||null})}else{const P=fS();Cs.current=JSON.stringify({boards:[P]}),e([P]),r(P.id)}s(!0)},()=>s(!0));return()=>w()},[]),z.useEffect(()=>{if(!i)return;const m=JSON.stringify({boards:t});if(m!==Cs.current)return ws.current&&clearTimeout(ws.current),ws.current=setTimeout(()=>{Cs.current=m,BE(dh(fh,`rooms/${hh}`),{boards:a_(t)}).catch(()=>{})},200),()=>clearTimeout(ws.current)},[t,i]);const pe=t.find(m=>m.id===n)||null;z.useEffect(()=>{Fe([]),Et(!1),u(""),c("")},[n]);function c_(){if(!pe)return;const m=tn.current[n]||[];tn.current[n]=[...m,wh(pe)].slice(-20),_l(w=>w+1)}function bt(m){c_(),m()}function ct(m){e(w=>w.map(C=>C.id===n?m(C):C))}function d_(){const m=tn.current[n]||[];if(!m.length)return;const w=m[m.length-1];tn.current[n]=m.slice(0,-1),e(C=>C.map(I=>I.id===n?{...I,players:w.players,rounds:w.rounds}:I)),_l(C=>C+1)}const f_=(tn.current[n]||[]).length>0;function h_(){bt(()=>{ct(m=>({...m,players:[],rounds:[]}))}),y(!1)}function p_(){bt(()=>{ct(m=>({...m,rounds:[]}))}),E(!1)}function m_(){const m=t.find(P=>P.id===ir);if(!m||!pe)return;const w=pe.players.map(P=>P.name.toLowerCase()),C=m.players.filter(P=>!w.includes(P.name.toLowerCase()));if(C.length===0){Dn("Those names are already on this board.");return}const I=C.map(P=>({id:Ir("p"),name:P.name}));bt(()=>{ct(P=>({...P,players:[...P.players,...I],rounds:P.rounds.map(H=>({...H,scores:{...H.scores,...Object.fromEntries(I.map(me=>[me.id,0]))}}))}))}),Dn(`Copied ${I.length} name${I.length===1?"":"s"} from "${m.name}".`),ys("")}function Zc(){const m=de.trim();!m||!pe||(e(w=>w.map(C=>C.id===n?{...C,locked:!0,password:m}:C)),M(w=>w.includes(n)?w:[...w,n]),ee(!1),Jt(""))}function g_(){pe&&e(m=>m.map(w=>w.id===n?{...w,locked:!1,password:null}:w))}function ed(){pe&&(St===pe.password?(M(m=>m.includes(n)?m:[...m,n]),or(""),Zt("")):Zt("Incorrect password."))}function td(){const m=a.trim();if(!m||!pe)return;if(pe.players.some(C=>C.name.toLowerCase()===m.toLowerCase())){c("That name's already on the board.");return}c("");const w=Ir("p");bt(()=>{ct(C=>({...C,players:[...C.players,{id:w,name:m}],rounds:C.rounds.map(I=>({...I,scores:{...I.scores,[w]:0}}))}))}),u("")}function __(m){bt(()=>{ct(w=>({...w,players:w.players.filter(C=>C.id!==m),rounds:w.rounds.map(C=>{const I={...C.scores};return delete I[m],{...C,scores:I}})}))})}function y_(){if(!pe)return;const m=Ir("r");bt(()=>{ct(w=>({...w,rounds:[...w.rounds,{id:m,locked:!1,scores:Object.fromEntries(w.players.map(C=>[C.id,""]))}]}))})}function v_(m,w,C){ct(I=>({...I,rounds:I.rounds.map(P=>P.id===m?{...P,scores:{...P.scores,[w]:C}}:P)}))}function w_(m,w,C){if(C===""||C==="-"){bt(()=>{ct(P=>({...P,rounds:P.rounds.map(H=>H.id===m?{...H,scores:{...H.scores,[w]:""}}:H)}))});return}let I=parseInt(C,10);isNaN(I)&&(I=0),I<yh&&(I=yh),bt(()=>{ct(P=>({...P,rounds:P.rounds.map(H=>H.id===m?{...H,scores:{...H.scores,[w]:I}}:H)}))})}function C_(){bt(()=>{ct(m=>({...m,rounds:m.rounds.filter(w=>!F.includes(w.id))}))}),Fe([]),Et(!1)}function E_(m){Fe(w=>w.includes(m)?w.filter(C=>C!==m):[...w,m])}function nd(m,w){const C=w.map(I=>m.scores[I.id]).filter(I=>I!==""&&I!==void 0&&I!==null&&!isNaN(Number(I))).map(Number);return C.length?Math.min(...C):null}function S_(m){ct(w=>({...w,rounds:w.rounds.map(C=>C.id===m?{...C,locked:!C.locked}:C)}))}function x_(m){D(m.id),q(m.name)}function rd(){const m=A.trim();m&&e(w=>w.map(C=>C.id===b?{...C,name:m}:C)),D(null),q("")}function id(){const m=p.trim()||`Game ${t.length+1}`,w=vh(m);e(C=>[...C,w]),r(w.id),_(""),g(!1)}async function k_(m,w){const I=await fetch("https://minima-groq-proxy.minimagame.workers.dev/parse",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({transcript:m,players:w.map(j=>j.name)})});if(!I.ok)throw new Error(`Proxy ${I.status}`);const P=await I.json();if(!Array.isArray(P))throw new Error("Proxy returned non-array");const H=[];for(const j of P){const fe=(j.name||"").toLowerCase(),Ce=w.find(ae=>ae.name.toLowerCase()===fe||ae.name.toLowerCase().includes(fe)||fe.includes(ae.name.toLowerCase()));Ce&&typeof j.score=="number"&&H.push({player:Ce,score:j.score})}const me=new Map;for(const j of H)me.set(j.player.id,j);return[...me.values()]}function An(m,w){vl({type:m,text:w}),Sl.current&&clearTimeout(Sl.current),Sl.current=setTimeout(()=>vl(null),4e3)}function I_(m){return m.replace(/\bminus\b|\bnegative\b/g,"-").replace(/\bzero\b/g,"0").replace(/\bone\b/g,"1").replace(/\btwo\b/g,"2").replace(/\bthree\b/g,"3").replace(/\bfour\b/g,"4").replace(/\bfive\b/g,"5").replace(/\bsix\b/g,"6").replace(/\bseven\b/g,"7").replace(/\beight\b/g,"8").replace(/\bnine\b/g,"9").replace(/\bten\b/g,"10").replace(/\beleven\b/g,"11").replace(/\btwelve\b/g,"12").replace(/\bthirteen\b/g,"13").replace(/\bfourteen\b/g,"14").replace(/\bfifteen\b/g,"15").replace(/\bsixteen\b/g,"16").replace(/\bseventeen\b/g,"17").replace(/\beighteen\b/g,"18").replace(/\bnineteen\b/g,"19").replace(/\btwenty\b/g,"20").replace(/\bthirty\b/g,"30").replace(/\bforty\b/g,"40").replace(/\bfifty\b/g,"50").replace(/\bsixty\b/g,"60").replace(/\bseventy\b/g,"70").replace(/\beighty\b/g,"80").replace(/\bninety\b/g,"90").replace(/\bhundred\b/g,"00").replace(/\bgive\b|\bset\b|\benter\b|\bput\b|\bfor\b|\bgot\b|\bgets\b|\bscore\b|\band\b/g," ").replace(/\s+/g," ").trim()}function xl(m,w){const C=m.trim();if(!C)return null;let I=null,P=-1;for(const H of w){const me=H.name.toLowerCase();if(C===me)return H;if(C.includes(me)||me.includes(C)){const j=me.length;j>P&&(P=j,I=H)}}return I}function N_(m,w){const C=I_(m.toLowerCase()),P=[...w].sort((ae,kt)=>kt.name.length-ae.name.length).map(ae=>ae.name.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|");if(!P)return[];const H=new RegExp(`(${P})`,"gi"),me=C.split(H).filter(ae=>ae.trim()!==""),j=[];let fe=0;for(;fe<me.length;){const ae=me[fe].trim(),kt=xl(ae,w);if(kt){const Ot=(me[fe+1]||"").trim().match(/^-?\d+/);if(Ot){const ni=parseInt(Ot[0],10);j.push({player:kt,score:ni}),fe+=2;continue}}else{const At=ae.match(/-?\d+/);if(At){const Ot=parseInt(At[0],10),ni=(me[fe+1]||"").trim(),_e=xl(ni,w);if(_e){j.push({player:_e,score:Ot}),fe+=2;continue}}}fe++}if(j.length===0){const ae=C.match(/-?\d+/);if(ae){const kt=parseInt(ae[0],10),At=C.replace(ae[0]," ").replace(/\s+/g," ").trim(),Ot=xl(At,w);Ot&&j.push({player:Ot,score:kt})}}const Ce=new Map;for(const ae of j)Ce.set(ae.player.id,ae);return[...Ce.values()]}function T_(){const m=window.SpeechRecognition||window.webkitSpeechRecognition;if(!m){An("err","Speech recognition not supported in this browser.");return}lr.current&&lr.current.stop();const w=new m;w.continuous=!0,w.interimResults=!0,w.lang="en-US",lr.current=w,w.onstart=()=>{vs(!0),An("info","Listening… say names and scores.")},w.onend=()=>{vs(!1),Cl("")},w.onerror=C=>{vs(!1),C.error!=="aborted"&&An("err",`Mic error: ${C.error}`)},w.onresult=C=>{let I="",P="";for(let j=C.resultIndex;j<C.results.length;j++)C.results[j].isFinal?P+=C.results[j][0].transcript:I+=C.results[j][0].transcript;if(Cl(I||P),!P)return;const H=t.find(j=>j.id===n);if(!H||H.locked)return;const me=j=>{if(!j.length){An("err",`Couldn't parse: "${P.trim()}"`);return}e(fe=>{const Ce=fe.find(_e=>_e.id===n);if(!Ce||Ce.locked)return fe;const ae=[...Ce.rounds].reverse().findIndex(_e=>!_e.locked);let kt,At;if(Ce.rounds.length===0||ae===-1){const Ss={id:Ir("r"),locked:!1,scores:Object.fromEntries(Ce.players.map(Mt=>[Mt.id,""]))};for(const Mt of j)Ss.scores[Mt.player.id]=Mt.score;kt=[...Ce.rounds,Ss],At="New round"}else{const _e=Ce.rounds.length-1-ae,Ss=Ce.rounds[_e].id;kt=Ce.rounds.map(Mt=>{if(Mt.id!==Ss)return Mt;const od={...Mt.scores};for(const ld of j)od[ld.player.id]=ld.score;return{...Mt,scores:od}}),At=`Round ${_e+1}`}const Ot=j.map(_e=>`${_e.player.name}: ${_e.score}`).join(", ");An("ok",`${At} → ${Ot}`);const ni=tn.current[n]||[];return tn.current[n]=[...ni,wh(Ce)].slice(-20),_l(_e=>_e+1),fe.map(_e=>_e.id===n?{..._e,rounds:kt}:_e)})};yl(!0),An("info","Thinking…"),k_(P,H.players).then(j=>{yl(!1),me(j)}).catch(j=>{yl(!1);const fe=N_(P,H.players);fe.length?me(fe):An("err",`Groq error: ${j.message}`)})},w.start()}function sd(){lr.current&&(lr.current.stop(),lr.current=null),vs(!1),Cl(""),vl(null)}function R_(m){e(w=>{const C=w.filter(I=>I.id!==m);if(C.length===0){const I=vh("Game 1");return r(I.id),[I]}return m===n&&r(C[0].id),C}),delete tn.current[m],N(null)}const De=pe&&pe.players||[],ti=pe&&pe.rounds||[],Es=De.map(m=>({...m,total:ti.reduce((w,C)=>w+(Number(C.scores[m.id])||0),0)})),nn=[...Es].sort((m,w)=>m.total-w.total),P_=Jc.current,ar={};if(nn.forEach((m,w)=>{const C=P_[m.id];C===void 0?ar[m.id]=null:w<C?ar[m.id]="up":w>C?ar[m.id]="down":ar[m.id]=null,ar[m.id]!==null&&(El.current[m.id]=(El.current[m.id]||0)+1)}),z.useEffect(()=>{const m={};nn.forEach((w,C)=>{m[w.id]=C}),Jc.current=m}),!i||!pe)return h.jsx("div",{style:{background:"#0f172a",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",color:"#cad4e2",fontSize:"13px",fontFamily:"-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif"},children:"Loading…"});const On=!!pe.locked&&!T.includes(pe.id),ur=nn.length?nn[0].total:null,cr=nn.length?nn[nn.length-1].total:null;return h.jsxs("div",{className:"board",children:[h.jsx("style",{children:`
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
      `}),(Dt||bn||en)&&h.jsxs("div",{className:"voice-toast"+(bn?" voice-toast-thinking":Dt?" voice-toast-listening":""),children:[(Dt||bn)&&h.jsx("span",{className:"voice-pulse-dot"+(bn?" thinking":"")}),h.jsx("span",{className:"voice-toast-text",children:bn?"Thinking…":wl?h.jsxs("span",{className:"voice-interim",children:['"',wl,'"']}):(en==null?void 0:en.text)||"Listening…"}),en&&!wl&&!bn&&h.jsx("span",{className:"voice-result-badge voice-result-"+en.type,children:en.type==="ok"?"✓":en.type==="err"?"✕":"ℹ"}),Dt&&!bn&&h.jsx("button",{className:"voice-toast-stop",onClick:sd,title:"Stop",children:h.jsx(_h,{size:13})})]}),h.jsxs("div",{className:"wrap",children:[h.jsxs("div",{className:"title-row",children:[h.jsxs("div",{children:[h.jsx("h1",{className:"title",children:"Minima Game"}),h.jsxs("p",{className:"subtitle",children:["Score each round. ",h.jsx("b",{children:"Lowest total wins."})," Minimum −10 per round, no ceiling."]})]}),h.jsxs("div",{className:"toolbar",children:[h.jsxs("button",{className:"btn",onClick:()=>{const m=window.location.origin+window.location.pathname;navigator.clipboard.writeText(m).then(()=>l("Link copied!")).catch(()=>l(m)),setTimeout(()=>l(""),2500)},title:"Copy a link anyone can use to view and edit this board live",children:[h.jsx(gh,{size:14})," Share"]}),o&&h.jsx("span",{className:"confirm-box",children:o}),h.jsxs("button",{className:"btn"+(Dt?" btn-voice-active":" btn-ghost"),onClick:Dt?sd:T_,disabled:On||De.length===0,title:Dt?"Stop voice mode":"Start voice mode — say a player name and score",children:[Dt?h.jsx(_h,{size:14}):h.jsx(uS,{size:14}),Dt?"Stop voice":"Voice"]}),h.jsxs("button",{className:"btn btn-ghost",onClick:d_,disabled:!f_||On,title:"Undo last change",children:[h.jsx(oS,{size:14})," Undo"]}),d?h.jsxs("span",{className:"confirm-box",children:["Clear all players & rounds?",h.jsx("button",{className:"btn btn-danger",onClick:h_,children:"Yes, clear"}),h.jsx("button",{className:"btn btn-ghost",onClick:()=>y(!1),children:"Cancel"})]}):h.jsxs("button",{className:"btn btn-ghost",onClick:()=>y(!0),disabled:On,title:"Clear this board",children:[h.jsx(mh,{size:14})," Clear board"]}),v?h.jsxs("span",{className:"confirm-box",children:["Clear all rounds? Players stay.",h.jsx("button",{className:"btn btn-danger",onClick:p_,children:"Yes, clear"}),h.jsx("button",{className:"btn btn-ghost",onClick:()=>E(!1),children:"Cancel"})]}):h.jsxs("button",{className:"btn btn-ghost",onClick:()=>E(!0),disabled:On,title:"Clear only the rounds table",children:[h.jsx(mh,{size:14})," Clear rounds"]}),pe.locked?On?h.jsxs("span",{className:"confirm-box lock-badge",children:[h.jsx(mi,{size:13})," Locked"]}):h.jsxs("button",{className:"btn btn-ghost",onClick:g_,title:"Remove the password lock",children:[h.jsx(ua,{size:14})," Remove lock"]}):U?h.jsxs("span",{className:"confirm-box",children:[h.jsx("input",{type:"password",autoFocus:!0,className:"password-input",placeholder:"Set a password",value:de,onChange:m=>Jt(m.target.value),onKeyDown:m=>m.key==="Enter"&&Zc()}),h.jsx("button",{className:"btn",onClick:Zc,children:"Lock"}),h.jsx("button",{className:"btn btn-ghost",onClick:()=>{ee(!1),Jt("")},children:"Cancel"})]}):h.jsxs("button",{className:"btn btn-ghost",onClick:()=>ee(!0),title:"Lock this board with a password",children:[h.jsx(mi,{size:14})," Lock board"]})]})]}),h.jsxs("div",{className:"board-tabs",children:[t.map(m=>b===m.id?h.jsx("div",{className:"new-board-input",children:h.jsx("input",{autoFocus:!0,value:A,onChange:w=>q(w.target.value),onKeyDown:w=>{w.key==="Enter"&&rd(),w.key==="Escape"&&(D(null),q(""))},onBlur:rd})},m.id):h.jsxs("div",{className:"tab"+(m.id===n?" active":""),onClick:()=>r(m.id),children:[m.locked&&h.jsx(mi,{size:11}),m.name,(!m.locked||T.includes(m.id))&&h.jsx("button",{onClick:w=>{w.stopPropagation(),x_(m)},title:"Rename board",children:h.jsx(aS,{size:11})}),t.length>1&&(!m.locked||T.includes(m.id))&&(S===m.id?h.jsxs(h.Fragment,{children:[h.jsx("button",{onClick:w=>{w.stopPropagation(),R_(m.id)},title:"Confirm delete",children:"✓"}),h.jsx("button",{onClick:w=>{w.stopPropagation(),N(null)},title:"Cancel",children:"✕"})]}):h.jsx("button",{onClick:w=>{w.stopPropagation(),N(m.id)},title:"Delete board",children:h.jsx(ph,{size:12})}))]},m.id)),L?h.jsxs("div",{className:"new-board-input",children:[h.jsx("input",{autoFocus:!0,placeholder:"Board name",value:p,onChange:m=>_(m.target.value),onKeyDown:m=>{m.key==="Enter"&&id(),m.key==="Escape"&&(g(!1),_(""))}}),h.jsx("button",{className:"btn",onClick:id,children:"Create"})]}):h.jsxs("button",{className:"tab-add",onClick:()=>g(!0),children:[h.jsx(aa,{size:13})," New board"]})]}),h.jsxs("div",{className:"panel",children:[h.jsx("div",{className:"panel-head",children:h.jsx("h2",{children:"Leaderboard"})}),Es.length===0?h.jsx("div",{className:"empty",children:"Add players below to start the board."}):h.jsx("div",{className:"leaderboard-list",children:nn.map((m,w)=>{const C=ar[m.id],I=El.current[m.id]||0;return h.jsxs("div",{className:"lb-row"+(C==="up"?" anim-up":C==="down"?" anim-down":"")+(m.total===ur?" lb-leader":"")+(m.total===cr&&cr!==ur?" lb-last":""),children:[h.jsx("span",{className:"lb-rank",children:w+1}),h.jsx("span",{className:"lb-rank-delta"+(C==="up"?" up":C==="down"?" down":""),children:C==="up"?"▲":C==="down"?"▼":""}),h.jsx("span",{className:"lb-name",children:m.name}),m.total===ur&&h.jsx(iS,{size:15,color:"#f59e0b"}),m.total===cr&&cr!==ur&&h.jsx(sS,{size:14,color:"#f87171"}),h.jsx("span",{className:"lb-score",children:m.total})]},m.id+"-"+I)})})]}),On&&h.jsxs("div",{className:"panel",style:{display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"},children:[h.jsx(mi,{size:14,style:{color:"#C8A24D",flexShrink:0}}),h.jsxs("span",{style:{color:"#E0C9A0",fontSize:"13px",flex:1},children:['"',pe.name,'" is locked. Enter the password to edit.']}),h.jsx("input",{type:"password",className:"password-input",placeholder:"Password",value:St,onChange:m=>{or(m.target.value),Zt("")},onKeyDown:m=>m.key==="Enter"&&ed()}),h.jsxs("button",{className:"btn",onClick:ed,children:[h.jsx(ua,{size:14})," Unlock"]}),xt&&h.jsx("span",{className:"err",style:{width:"100%",marginTop:0},children:xt})]}),On?h.jsxs(h.Fragment,{children:[De.length>0&&h.jsxs("div",{className:"panel",children:[h.jsx("div",{className:"panel-head",children:h.jsx("h2",{children:"Players"})}),h.jsx("div",{className:"player-chips",children:De.map(m=>h.jsx("div",{className:"chip",style:{paddingRight:"12px"},children:m.name},m.id))})]}),De.length>0&&ti.length>0&&h.jsxs("div",{className:"panel",children:[h.jsx("div",{className:"panel-head",children:h.jsx("h2",{children:"Rounds"})}),h.jsx("div",{className:"table-scroll",children:h.jsxs("table",{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Round"}),De.map(m=>h.jsx("th",{children:m.name},m.id))]})}),h.jsx("tbody",{children:ti.map((m,w)=>{const C=nd(m,De);return h.jsxs("tr",{children:[h.jsx("td",{children:w+1}),De.map(I=>{const P=m.scores[I.id]??"",H=C!==null&&P!==""&&Number(P)===C;return h.jsx("td",{children:h.jsx("span",{className:"score-input"+(H?" is-low":""),style:{display:"inline-block",lineHeight:"1",cursor:"default"},children:P===""?"—":P})},I.id)})]},m.id)})}),h.jsx("tfoot",{children:h.jsxs("tr",{children:[h.jsx("td",{children:"Total"}),De.map(m=>{var C;const w=((C=Es.find(I=>I.id===m.id))==null?void 0:C.total)??0;return h.jsx("td",{className:w===ur?"total-low":w===cr?"total-high":"",children:w},m.id)})]})})]})})]})]}):h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"panel",children:[h.jsx("h2",{children:"Players"}),h.jsx("div",{className:"player-chips",children:De.map(m=>h.jsxs("div",{className:"chip",children:[m.name,h.jsx("button",{onClick:()=>__(m.id),"aria-label":`Remove ${m.name}`,children:h.jsx(ph,{size:13})})]},m.id))}),h.jsxs("div",{className:"add-row",children:[h.jsx("input",{placeholder:"Add a player name",value:a,onChange:m=>u(m.target.value),onKeyDown:m=>m.key==="Enter"&&td()}),h.jsxs("button",{className:"btn",onClick:td,children:[h.jsx(aa,{size:14})," Add"]})]}),f&&h.jsx("div",{className:"err",children:f}),t.length>1&&h.jsxs("div",{className:"copy-row",children:[h.jsxs("select",{className:"board-select",value:ir,onChange:m=>{ys(m.target.value),Dn("")},children:[h.jsx("option",{value:"",children:"Copy names from board…"}),t.filter(m=>m.id!==n).map(m=>h.jsxs("option",{value:m.id,children:[m.name," (",m.players.length," players)"]},m.id))]}),h.jsxs("button",{className:"btn btn-ghost",onClick:m_,disabled:!ir,children:[h.jsx(gh,{size:14})," Copy names"]})]}),sr&&h.jsx("div",{className:"copy-note",children:sr})]}),h.jsxs("div",{className:"panel",children:[h.jsx("h2",{children:"Rounds"}),De.length===0?h.jsx("div",{className:"empty",children:"Add at least one player to start logging rounds."}):h.jsx("div",{className:"table-scroll",children:h.jsxs("table",{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Round"}),De.map(m=>h.jsx("th",{children:m.name},m.id)),h.jsx("th",{})]})}),h.jsx("tbody",{children:ti.map((m,w)=>{const C=nd(m,De),I=!!m.locked;return h.jsxs("tr",{className:I?"round-locked":"",children:[h.jsx("td",{children:w+1}),De.map(P=>{const H=m.scores[P.id]??"",me=C!==null&&H!==""&&Number(H)===C;return h.jsx("td",{children:h.jsx("input",{className:"score-input"+(me?" is-low":""),type:"text",placeholder:"",value:H,disabled:I,onChange:j=>v_(m.id,P.id,j.target.value),onBlur:j=>w_(m.id,P.id,j.target.value)})},P.id)}),h.jsx("td",{children:h.jsxs("div",{className:"row-actions",children:[h.jsx("input",{type:"checkbox",className:"select-checkbox",checked:F.includes(m.id),onChange:()=>E_(m.id),disabled:I,"aria-label":"Select round",title:"Select round"}),h.jsx("button",{className:"lock-toggle"+(I?" is-locked":""),onClick:()=>S_(m.id),"aria-label":I?"Unlock round":"Lock round",title:I?"Unlock round":"Lock round",children:I?h.jsx(mi,{size:13}):h.jsx(ua,{size:13})})]})})]},m.id)})}),ti.length>0&&h.jsx("tfoot",{children:h.jsxs("tr",{children:[h.jsx("td",{children:"Total"}),De.map(m=>{var C;const w=((C=Es.find(I=>I.id===m.id))==null?void 0:C.total)??0;return h.jsx("td",{className:w===ur?"total-low":w===cr?"total-high":"",children:w},m.id)}),h.jsx("td",{})]})})]})}),h.jsxs("div",{className:"actions-row",children:[F.length>0&&(Pn?h.jsxs("span",{className:"confirm-box",children:["Delete ",F.length," round",F.length===1?"":"s","?",h.jsx("button",{className:"btn btn-danger",onClick:C_,children:"Yes, delete"}),h.jsx("button",{className:"btn btn-ghost",onClick:()=>Et(!1),children:"Cancel"})]}):h.jsxs("button",{className:"btn btn-danger",onClick:()=>Et(!0),children:[h.jsx(lS,{size:14})," Delete selected (",F.length,")"]})),h.jsxs("button",{className:"btn btn-ghost",onClick:y_,disabled:De.length===0,children:[h.jsx(aa,{size:14})," Add round"]})]})]})]})]})]})}ca.createRoot(document.getElementById("root")).render(h.jsx(Q_.StrictMode,{children:h.jsx(hS,{})}));
