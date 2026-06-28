(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Jg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Yf={exports:{}},No={},Kf={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $i=Symbol.for("react.element"),Zg=Symbol.for("react.portal"),e_=Symbol.for("react.fragment"),t_=Symbol.for("react.strict_mode"),n_=Symbol.for("react.profiler"),r_=Symbol.for("react.provider"),i_=Symbol.for("react.context"),s_=Symbol.for("react.forward_ref"),o_=Symbol.for("react.suspense"),l_=Symbol.for("react.memo"),a_=Symbol.for("react.lazy"),Fc=Symbol.iterator;function u_(t){return t===null||typeof t!="object"?null:(t=Fc&&t[Fc]||t["@@iterator"],typeof t=="function"?t:null)}var qf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xf=Object.assign,Jf={};function Ar(t,e,n){this.props=t,this.context=e,this.refs=Jf,this.updater=n||qf}Ar.prototype.isReactComponent={};Ar.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ar.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Zf(){}Zf.prototype=Ar.prototype;function Za(t,e,n){this.props=t,this.context=e,this.refs=Jf,this.updater=n||qf}var eu=Za.prototype=new Zf;eu.constructor=Za;Xf(eu,Ar.prototype);eu.isPureReactComponent=!0;var jc=Array.isArray,eh=Object.prototype.hasOwnProperty,tu={current:null},th={key:!0,ref:!0,__self:!0,__source:!0};function nh(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)eh.call(e,r)&&!th.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:$i,type:t,key:s,ref:o,props:i,_owner:tu.current}}function c_(t,e){return{$$typeof:$i,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function nu(t){return typeof t=="object"&&t!==null&&t.$$typeof===$i}function d_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var zc=/\/+/g;function nl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?d_(""+t.key):e.toString(36)}function ks(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case $i:case Zg:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+nl(o,0):r,jc(i)?(n="",t!=null&&(n=t.replace(zc,"$&/")+"/"),ks(i,e,n,"",function(u){return u})):i!=null&&(nu(i)&&(i=c_(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(zc,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",jc(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+nl(s,l);o+=ks(s,e,n,a,i)}else if(a=u_(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+nl(s,l++),o+=ks(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function os(t,e,n){if(t==null)return t;var r=[],i=0;return ks(t,r,"","",function(s){return e.call(n,s,i++)}),r}function f_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Me={current:null},Is={transition:null},h_={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:Is,ReactCurrentOwner:tu};function rh(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:os,forEach:function(t,e,n){os(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return os(t,function(){e++}),e},toArray:function(t){return os(t,function(e){return e})||[]},only:function(t){if(!nu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};B.Component=Ar;B.Fragment=e_;B.Profiler=n_;B.PureComponent=Za;B.StrictMode=t_;B.Suspense=o_;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h_;B.act=rh;B.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Xf({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=tu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)eh.call(e,a)&&!th.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:$i,type:t.type,key:i,ref:s,props:r,_owner:o}};B.createContext=function(t){return t={$$typeof:i_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:r_,_context:t},t.Consumer=t};B.createElement=nh;B.createFactory=function(t){var e=nh.bind(null,t);return e.type=t,e};B.createRef=function(){return{current:null}};B.forwardRef=function(t){return{$$typeof:s_,render:t}};B.isValidElement=nu;B.lazy=function(t){return{$$typeof:a_,_payload:{_status:-1,_result:t},_init:f_}};B.memo=function(t,e){return{$$typeof:l_,type:t,compare:e===void 0?null:e}};B.startTransition=function(t){var e=Is.transition;Is.transition={};try{t()}finally{Is.transition=e}};B.unstable_act=rh;B.useCallback=function(t,e){return Me.current.useCallback(t,e)};B.useContext=function(t){return Me.current.useContext(t)};B.useDebugValue=function(){};B.useDeferredValue=function(t){return Me.current.useDeferredValue(t)};B.useEffect=function(t,e){return Me.current.useEffect(t,e)};B.useId=function(){return Me.current.useId()};B.useImperativeHandle=function(t,e,n){return Me.current.useImperativeHandle(t,e,n)};B.useInsertionEffect=function(t,e){return Me.current.useInsertionEffect(t,e)};B.useLayoutEffect=function(t,e){return Me.current.useLayoutEffect(t,e)};B.useMemo=function(t,e){return Me.current.useMemo(t,e)};B.useReducer=function(t,e,n){return Me.current.useReducer(t,e,n)};B.useRef=function(t){return Me.current.useRef(t)};B.useState=function(t){return Me.current.useState(t)};B.useSyncExternalStore=function(t,e,n){return Me.current.useSyncExternalStore(t,e,n)};B.useTransition=function(){return Me.current.useTransition()};B.version="18.3.1";Kf.exports=B;var H=Kf.exports;const p_=Jg(H);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_=H,g_=Symbol.for("react.element"),__=Symbol.for("react.fragment"),y_=Object.prototype.hasOwnProperty,v_=m_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w_={key:!0,ref:!0,__self:!0,__source:!0};function ih(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)y_.call(e,r)&&!w_.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:g_,type:t,key:s,ref:o,props:i,_owner:v_.current}}No.Fragment=__;No.jsx=ih;No.jsxs=ih;Yf.exports=No;var p=Yf.exports,Bl={},sh={exports:{}},Ke={},oh={exports:{}},lh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,M){var F=N.length;N.push(M);e:for(;0<F;){var J=F-1>>>1,ue=N[J];if(0<i(ue,M))N[J]=M,N[F]=ue,F=J;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var M=N[0],F=N.pop();if(F!==M){N[0]=F;e:for(var J=0,ue=N.length,Bt=ue>>>1;J<Bt;){var _t=2*(J+1)-1,$n=N[_t],yt=_t+1,Wt=N[yt];if(0>i($n,F))yt<ue&&0>i(Wt,$n)?(N[J]=Wt,N[yt]=F,J=yt):(N[J]=$n,N[_t]=F,J=_t);else if(yt<ue&&0>i(Wt,F))N[J]=Wt,N[yt]=F,J=yt;else break e}}return M}function i(N,M){var F=N.sortIndex-M.sortIndex;return F!==0?F:N.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],f=1,c=null,d=3,y=!1,v=!1,w=!1,L=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(N){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=N)r(u),M.sortIndex=M.expirationTime,e(a,M);else break;M=n(u)}}function C(N){if(w=!1,_(N),!v)if(n(a)!==null)v=!0,Hn(I);else{var M=n(u);M!==null&&yn(C,M.startTime-N)}}function I(N,M){v=!1,w&&(w=!1,m(A),A=-1),y=!0;var F=d;try{for(_(M),c=n(a);c!==null&&(!(c.expirationTime>M)||N&&!Pe());){var J=c.callback;if(typeof J=="function"){c.callback=null,d=c.priorityLevel;var ue=J(c.expirationTime<=M);M=t.unstable_now(),typeof ue=="function"?c.callback=ue:c===n(a)&&r(a),_(M)}else r(a);c=n(a)}if(c!==null)var Bt=!0;else{var _t=n(u);_t!==null&&yn(C,_t.startTime-M),Bt=!1}return Bt}finally{c=null,d=F,y=!1}}var P=!1,R=null,A=-1,Y=5,b=-1;function Pe(){return!(t.unstable_now()-b<Y)}function _n(){if(R!==null){var N=t.unstable_now();b=N;var M=!0;try{M=R(!0,N)}finally{M?gt():(P=!1,R=null)}}else P=!1}var gt;if(typeof h=="function")gt=function(){h(_n)};else if(typeof MessageChannel<"u"){var Wn=new MessageChannel,ns=Wn.port2;Wn.port1.onmessage=_n,gt=function(){ns.postMessage(null)}}else gt=function(){L(_n,0)};function Hn(N){R=N,P||(P=!0,gt())}function yn(N,M){A=L(function(){N(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){v||y||(v=!0,Hn(I))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(N){switch(d){case 1:case 2:case 3:var M=3;break;default:M=d}var F=d;d=M;try{return N()}finally{d=F}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,M){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var F=d;d=N;try{return M()}finally{d=F}},t.unstable_scheduleCallback=function(N,M,F){var J=t.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?J+F:J):F=J,N){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=F+ue,N={id:f++,callback:M,priorityLevel:N,startTime:F,expirationTime:ue,sortIndex:-1},F>J?(N.sortIndex=F,e(u,N),n(a)===null&&N===n(u)&&(w?(m(A),A=-1):w=!0,yn(C,F-J))):(N.sortIndex=ue,e(a,N),v||y||(v=!0,Hn(I))),N},t.unstable_shouldYield=Pe,t.unstable_wrapCallback=function(N){var M=d;return function(){var F=d;d=M;try{return N.apply(this,arguments)}finally{d=F}}}})(lh);oh.exports=lh;var C_=oh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E_=H,Ye=C_;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ah=new Set,yi={};function zn(t,e){Cr(t,e),Cr(t+"Capture",e)}function Cr(t,e){for(yi[t]=e,t=0;t<e.length;t++)ah.add(e[t])}var At=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wl=Object.prototype.hasOwnProperty,S_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uc={},Bc={};function x_(t){return Wl.call(Bc,t)?!0:Wl.call(Uc,t)?!1:S_.test(t)?Bc[t]=!0:(Uc[t]=!0,!1)}function k_(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function I_(t,e,n,r){if(e===null||typeof e>"u"||k_(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Le(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){xe[t]=new Le(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];xe[e]=new Le(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){xe[t]=new Le(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){xe[t]=new Le(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){xe[t]=new Le(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){xe[t]=new Le(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){xe[t]=new Le(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){xe[t]=new Le(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){xe[t]=new Le(t,5,!1,t.toLowerCase(),null,!1,!1)});var ru=/[\-:]([a-z])/g;function iu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ru,iu);xe[e]=new Le(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ru,iu);xe[e]=new Le(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ru,iu);xe[e]=new Le(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){xe[t]=new Le(t,1,!1,t.toLowerCase(),null,!1,!1)});xe.xlinkHref=new Le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){xe[t]=new Le(t,1,!1,t.toLowerCase(),null,!0,!0)});function su(t,e,n,r){var i=xe.hasOwnProperty(e)?xe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(I_(e,n,i,r)&&(n=null),r||i===null?x_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var zt=E_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ls=Symbol.for("react.element"),Jn=Symbol.for("react.portal"),Zn=Symbol.for("react.fragment"),ou=Symbol.for("react.strict_mode"),Hl=Symbol.for("react.profiler"),uh=Symbol.for("react.provider"),ch=Symbol.for("react.context"),lu=Symbol.for("react.forward_ref"),$l=Symbol.for("react.suspense"),Vl=Symbol.for("react.suspense_list"),au=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),dh=Symbol.for("react.offscreen"),Wc=Symbol.iterator;function Ur(t){return t===null||typeof t!="object"?null:(t=Wc&&t[Wc]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,rl;function Zr(t){if(rl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);rl=e&&e[1]||""}return`
`+rl+t}var il=!1;function sl(t,e){if(!t||il)return"";il=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{il=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Zr(t):""}function N_(t){switch(t.tag){case 5:return Zr(t.type);case 16:return Zr("Lazy");case 13:return Zr("Suspense");case 19:return Zr("SuspenseList");case 0:case 2:case 15:return t=sl(t.type,!1),t;case 11:return t=sl(t.type.render,!1),t;case 1:return t=sl(t.type,!0),t;default:return""}}function Gl(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Zn:return"Fragment";case Jn:return"Portal";case Hl:return"Profiler";case ou:return"StrictMode";case $l:return"Suspense";case Vl:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ch:return(t.displayName||"Context")+".Consumer";case uh:return(t._context.displayName||"Context")+".Provider";case lu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case au:return e=t.displayName||null,e!==null?e:Gl(t.type)||"Memo";case Vt:e=t._payload,t=t._init;try{return Gl(t(e))}catch{}}return null}function T_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gl(e);case 8:return e===ou?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function un(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function fh(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function R_(t){var e=fh(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function as(t){t._valueTracker||(t._valueTracker=R_(t))}function hh(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=fh(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function js(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ql(t,e){var n=e.checked;return oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Hc(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=un(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ph(t,e){e=e.checked,e!=null&&su(t,"checked",e,!1)}function Yl(t,e){ph(t,e);var n=un(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Kl(t,e.type,n):e.hasOwnProperty("defaultValue")&&Kl(t,e.type,un(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $c(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Kl(t,e,n){(e!=="number"||js(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ei=Array.isArray;function dr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+un(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ql(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vc(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(ei(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:un(n)}}function mh(t,e){var n=un(e.value),r=un(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Gc(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function gh(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xl(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?gh(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var us,_h=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(us=us||document.createElement("div"),us.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=us.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function vi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ri={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},P_=["Webkit","ms","Moz","O"];Object.keys(ri).forEach(function(t){P_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ri[e]=ri[t]})});function yh(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ri.hasOwnProperty(t)&&ri[t]?(""+e).trim():e+"px"}function vh(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=yh(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var D_=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jl(t,e){if(e){if(D_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function Zl(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ea=null;function uu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ta=null,fr=null,hr=null;function Qc(t){if(t=Qi(t)){if(typeof ta!="function")throw Error(E(280));var e=t.stateNode;e&&(e=Ao(e),ta(t.stateNode,t.type,e))}}function wh(t){fr?hr?hr.push(t):hr=[t]:fr=t}function Ch(){if(fr){var t=fr,e=hr;if(hr=fr=null,Qc(t),e)for(t=0;t<e.length;t++)Qc(e[t])}}function Eh(t,e){return t(e)}function Sh(){}var ol=!1;function xh(t,e,n){if(ol)return t(e,n);ol=!0;try{return Eh(t,e,n)}finally{ol=!1,(fr!==null||hr!==null)&&(Sh(),Ch())}}function wi(t,e){var n=t.stateNode;if(n===null)return null;var r=Ao(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var na=!1;if(At)try{var Br={};Object.defineProperty(Br,"passive",{get:function(){na=!0}}),window.addEventListener("test",Br,Br),window.removeEventListener("test",Br,Br)}catch{na=!1}function A_(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var ii=!1,zs=null,Us=!1,ra=null,O_={onError:function(t){ii=!0,zs=t}};function M_(t,e,n,r,i,s,o,l,a){ii=!1,zs=null,A_.apply(O_,arguments)}function L_(t,e,n,r,i,s,o,l,a){if(M_.apply(this,arguments),ii){if(ii){var u=zs;ii=!1,zs=null}else throw Error(E(198));Us||(Us=!0,ra=u)}}function Un(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function kh(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Yc(t){if(Un(t)!==t)throw Error(E(188))}function b_(t){var e=t.alternate;if(!e){if(e=Un(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Yc(i),t;if(s===r)return Yc(i),e;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function Ih(t){return t=b_(t),t!==null?Nh(t):null}function Nh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Nh(t);if(e!==null)return e;t=t.sibling}return null}var Th=Ye.unstable_scheduleCallback,Kc=Ye.unstable_cancelCallback,F_=Ye.unstable_shouldYield,j_=Ye.unstable_requestPaint,ce=Ye.unstable_now,z_=Ye.unstable_getCurrentPriorityLevel,cu=Ye.unstable_ImmediatePriority,Rh=Ye.unstable_UserBlockingPriority,Bs=Ye.unstable_NormalPriority,U_=Ye.unstable_LowPriority,Ph=Ye.unstable_IdlePriority,To=null,Et=null;function B_(t){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(To,t,void 0,(t.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:$_,W_=Math.log,H_=Math.LN2;function $_(t){return t>>>=0,t===0?32:31-(W_(t)/H_|0)|0}var cs=64,ds=4194304;function ti(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ws(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ti(l):(s&=o,s!==0&&(r=ti(s)))}else o=n&~i,o!==0?r=ti(o):s!==0&&(r=ti(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-dt(e),i=1<<n,r|=t[n],e&=~i;return r}function V_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function G_(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-dt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=V_(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function ia(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Dh(){var t=cs;return cs<<=1,!(cs&4194240)&&(cs=64),t}function ll(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Vi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-dt(e),t[e]=n}function Q_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-dt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function du(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-dt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var G=0;function Ah(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Oh,fu,Mh,Lh,bh,sa=!1,fs=[],Xt=null,Jt=null,Zt=null,Ci=new Map,Ei=new Map,Qt=[],Y_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qc(t,e){switch(t){case"focusin":case"focusout":Xt=null;break;case"dragenter":case"dragleave":Jt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":Ci.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ei.delete(e.pointerId)}}function Wr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Qi(e),e!==null&&fu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function K_(t,e,n,r,i){switch(e){case"focusin":return Xt=Wr(Xt,t,e,n,r,i),!0;case"dragenter":return Jt=Wr(Jt,t,e,n,r,i),!0;case"mouseover":return Zt=Wr(Zt,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ci.set(s,Wr(Ci.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ei.set(s,Wr(Ei.get(s)||null,t,e,n,r,i)),!0}return!1}function Fh(t){var e=Sn(t.target);if(e!==null){var n=Un(e);if(n!==null){if(e=n.tag,e===13){if(e=kh(n),e!==null){t.blockedOn=e,bh(t.priority,function(){Mh(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ns(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=oa(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ea=r,n.target.dispatchEvent(r),ea=null}else return e=Qi(n),e!==null&&fu(e),t.blockedOn=n,!1;e.shift()}return!0}function Xc(t,e,n){Ns(t)&&n.delete(e)}function q_(){sa=!1,Xt!==null&&Ns(Xt)&&(Xt=null),Jt!==null&&Ns(Jt)&&(Jt=null),Zt!==null&&Ns(Zt)&&(Zt=null),Ci.forEach(Xc),Ei.forEach(Xc)}function Hr(t,e){t.blockedOn===e&&(t.blockedOn=null,sa||(sa=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,q_)))}function Si(t){function e(i){return Hr(i,t)}if(0<fs.length){Hr(fs[0],t);for(var n=1;n<fs.length;n++){var r=fs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Xt!==null&&Hr(Xt,t),Jt!==null&&Hr(Jt,t),Zt!==null&&Hr(Zt,t),Ci.forEach(e),Ei.forEach(e),n=0;n<Qt.length;n++)r=Qt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Qt.length&&(n=Qt[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&Qt.shift()}var pr=zt.ReactCurrentBatchConfig,Hs=!0;function X_(t,e,n,r){var i=G,s=pr.transition;pr.transition=null;try{G=1,hu(t,e,n,r)}finally{G=i,pr.transition=s}}function J_(t,e,n,r){var i=G,s=pr.transition;pr.transition=null;try{G=4,hu(t,e,n,r)}finally{G=i,pr.transition=s}}function hu(t,e,n,r){if(Hs){var i=oa(t,e,n,r);if(i===null)_l(t,e,r,$s,n),qc(t,r);else if(K_(i,t,e,n,r))r.stopPropagation();else if(qc(t,r),e&4&&-1<Y_.indexOf(t)){for(;i!==null;){var s=Qi(i);if(s!==null&&Oh(s),s=oa(t,e,n,r),s===null&&_l(t,e,r,$s,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else _l(t,e,r,null,n)}}var $s=null;function oa(t,e,n,r){if($s=null,t=uu(r),t=Sn(t),t!==null)if(e=Un(t),e===null)t=null;else if(n=e.tag,n===13){if(t=kh(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return $s=t,null}function jh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(z_()){case cu:return 1;case Rh:return 4;case Bs:case U_:return 16;case Ph:return 536870912;default:return 16}default:return 16}}var Kt=null,pu=null,Ts=null;function zh(){if(Ts)return Ts;var t,e=pu,n=e.length,r,i="value"in Kt?Kt.value:Kt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ts=i.slice(t,1<r?1-r:void 0)}function Rs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function hs(){return!0}function Jc(){return!1}function qe(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?hs:Jc,this.isPropagationStopped=Jc,this}return oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hs)},persist:function(){},isPersistent:hs}),e}var Or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mu=qe(Or),Gi=oe({},Or,{view:0,detail:0}),Z_=qe(Gi),al,ul,$r,Ro=oe({},Gi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$r&&($r&&t.type==="mousemove"?(al=t.screenX-$r.screenX,ul=t.screenY-$r.screenY):ul=al=0,$r=t),al)},movementY:function(t){return"movementY"in t?t.movementY:ul}}),Zc=qe(Ro),ey=oe({},Ro,{dataTransfer:0}),ty=qe(ey),ny=oe({},Gi,{relatedTarget:0}),cl=qe(ny),ry=oe({},Or,{animationName:0,elapsedTime:0,pseudoElement:0}),iy=qe(ry),sy=oe({},Or,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),oy=qe(sy),ly=oe({},Or,{data:0}),ed=qe(ly),ay={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=cy[t])?!!e[t]:!1}function gu(){return dy}var fy=oe({},Gi,{key:function(t){if(t.key){var e=ay[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Rs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gu,charCode:function(t){return t.type==="keypress"?Rs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hy=qe(fy),py=oe({},Ro,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),td=qe(py),my=oe({},Gi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gu}),gy=qe(my),_y=oe({},Or,{propertyName:0,elapsedTime:0,pseudoElement:0}),yy=qe(_y),vy=oe({},Ro,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wy=qe(vy),Cy=[9,13,27,32],_u=At&&"CompositionEvent"in window,si=null;At&&"documentMode"in document&&(si=document.documentMode);var Ey=At&&"TextEvent"in window&&!si,Uh=At&&(!_u||si&&8<si&&11>=si),nd=" ",rd=!1;function Bh(t,e){switch(t){case"keyup":return Cy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var er=!1;function Sy(t,e){switch(t){case"compositionend":return Wh(e);case"keypress":return e.which!==32?null:(rd=!0,nd);case"textInput":return t=e.data,t===nd&&rd?null:t;default:return null}}function xy(t,e){if(er)return t==="compositionend"||!_u&&Bh(t,e)?(t=zh(),Ts=pu=Kt=null,er=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Uh&&e.locale!=="ko"?null:e.data;default:return null}}var ky={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function id(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ky[t.type]:e==="textarea"}function Hh(t,e,n,r){wh(r),e=Vs(e,"onChange"),0<e.length&&(n=new mu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var oi=null,xi=null;function Iy(t){ep(t,0)}function Po(t){var e=rr(t);if(hh(e))return t}function Ny(t,e){if(t==="change")return e}var $h=!1;if(At){var dl;if(At){var fl="oninput"in document;if(!fl){var sd=document.createElement("div");sd.setAttribute("oninput","return;"),fl=typeof sd.oninput=="function"}dl=fl}else dl=!1;$h=dl&&(!document.documentMode||9<document.documentMode)}function od(){oi&&(oi.detachEvent("onpropertychange",Vh),xi=oi=null)}function Vh(t){if(t.propertyName==="value"&&Po(xi)){var e=[];Hh(e,xi,t,uu(t)),xh(Iy,e)}}function Ty(t,e,n){t==="focusin"?(od(),oi=e,xi=n,oi.attachEvent("onpropertychange",Vh)):t==="focusout"&&od()}function Ry(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Po(xi)}function Py(t,e){if(t==="click")return Po(e)}function Dy(t,e){if(t==="input"||t==="change")return Po(e)}function Ay(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var pt=typeof Object.is=="function"?Object.is:Ay;function ki(t,e){if(pt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Wl.call(e,i)||!pt(t[i],e[i]))return!1}return!0}function ld(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ad(t,e){var n=ld(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ld(n)}}function Gh(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Gh(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Qh(){for(var t=window,e=js();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=js(t.document)}return e}function yu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Oy(t){var e=Qh(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Gh(n.ownerDocument.documentElement,n)){if(r!==null&&yu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ad(n,s);var o=ad(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var My=At&&"documentMode"in document&&11>=document.documentMode,tr=null,la=null,li=null,aa=!1;function ud(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;aa||tr==null||tr!==js(r)||(r=tr,"selectionStart"in r&&yu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),li&&ki(li,r)||(li=r,r=Vs(la,"onSelect"),0<r.length&&(e=new mu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=tr)))}function ps(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var nr={animationend:ps("Animation","AnimationEnd"),animationiteration:ps("Animation","AnimationIteration"),animationstart:ps("Animation","AnimationStart"),transitionend:ps("Transition","TransitionEnd")},hl={},Yh={};At&&(Yh=document.createElement("div").style,"AnimationEvent"in window||(delete nr.animationend.animation,delete nr.animationiteration.animation,delete nr.animationstart.animation),"TransitionEvent"in window||delete nr.transitionend.transition);function Do(t){if(hl[t])return hl[t];if(!nr[t])return t;var e=nr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Yh)return hl[t]=e[n];return t}var Kh=Do("animationend"),qh=Do("animationiteration"),Xh=Do("animationstart"),Jh=Do("transitionend"),Zh=new Map,cd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hn(t,e){Zh.set(t,e),zn(e,[t])}for(var pl=0;pl<cd.length;pl++){var ml=cd[pl],Ly=ml.toLowerCase(),by=ml[0].toUpperCase()+ml.slice(1);hn(Ly,"on"+by)}hn(Kh,"onAnimationEnd");hn(qh,"onAnimationIteration");hn(Xh,"onAnimationStart");hn("dblclick","onDoubleClick");hn("focusin","onFocus");hn("focusout","onBlur");hn(Jh,"onTransitionEnd");Cr("onMouseEnter",["mouseout","mouseover"]);Cr("onMouseLeave",["mouseout","mouseover"]);Cr("onPointerEnter",["pointerout","pointerover"]);Cr("onPointerLeave",["pointerout","pointerover"]);zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ni="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fy=new Set("cancel close invalid load scroll toggle".split(" ").concat(ni));function dd(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,L_(r,e,void 0,t),t.currentTarget=null}function ep(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;dd(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;dd(i,l,u),s=a}}}if(Us)throw t=ra,Us=!1,ra=null,t}function Z(t,e){var n=e[ha];n===void 0&&(n=e[ha]=new Set);var r=t+"__bubble";n.has(r)||(tp(e,t,2,!1),n.add(r))}function gl(t,e,n){var r=0;e&&(r|=4),tp(n,t,r,e)}var ms="_reactListening"+Math.random().toString(36).slice(2);function Ii(t){if(!t[ms]){t[ms]=!0,ah.forEach(function(n){n!=="selectionchange"&&(Fy.has(n)||gl(n,!1,t),gl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ms]||(e[ms]=!0,gl("selectionchange",!1,e))}}function tp(t,e,n,r){switch(jh(e)){case 1:var i=X_;break;case 4:i=J_;break;default:i=hu}n=i.bind(null,e,n,t),i=void 0,!na||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function _l(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Sn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}xh(function(){var u=s,f=uu(n),c=[];e:{var d=Zh.get(t);if(d!==void 0){var y=mu,v=t;switch(t){case"keypress":if(Rs(n)===0)break e;case"keydown":case"keyup":y=hy;break;case"focusin":v="focus",y=cl;break;case"focusout":v="blur",y=cl;break;case"beforeblur":case"afterblur":y=cl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Zc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=ty;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=gy;break;case Kh:case qh:case Xh:y=iy;break;case Jh:y=yy;break;case"scroll":y=Z_;break;case"wheel":y=wy;break;case"copy":case"cut":case"paste":y=oy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=td}var w=(e&4)!==0,L=!w&&t==="scroll",m=w?d!==null?d+"Capture":null:d;w=[];for(var h=u,_;h!==null;){_=h;var C=_.stateNode;if(_.tag===5&&C!==null&&(_=C,m!==null&&(C=wi(h,m),C!=null&&w.push(Ni(h,C,_)))),L)break;h=h.return}0<w.length&&(d=new y(d,v,null,n,f),c.push({event:d,listeners:w}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",d&&n!==ea&&(v=n.relatedTarget||n.fromElement)&&(Sn(v)||v[Ot]))break e;if((y||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?Sn(v):null,v!==null&&(L=Un(v),v!==L||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(w=Zc,C="onMouseLeave",m="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(w=td,C="onPointerLeave",m="onPointerEnter",h="pointer"),L=y==null?d:rr(y),_=v==null?d:rr(v),d=new w(C,h+"leave",y,n,f),d.target=L,d.relatedTarget=_,C=null,Sn(f)===u&&(w=new w(m,h+"enter",v,n,f),w.target=_,w.relatedTarget=L,C=w),L=C,y&&v)t:{for(w=y,m=v,h=0,_=w;_;_=qn(_))h++;for(_=0,C=m;C;C=qn(C))_++;for(;0<h-_;)w=qn(w),h--;for(;0<_-h;)m=qn(m),_--;for(;h--;){if(w===m||m!==null&&w===m.alternate)break t;w=qn(w),m=qn(m)}w=null}else w=null;y!==null&&fd(c,d,y,w,!1),v!==null&&L!==null&&fd(c,L,v,w,!0)}}e:{if(d=u?rr(u):window,y=d.nodeName&&d.nodeName.toLowerCase(),y==="select"||y==="input"&&d.type==="file")var I=Ny;else if(id(d))if($h)I=Dy;else{I=Ry;var P=Ty}else(y=d.nodeName)&&y.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(I=Py);if(I&&(I=I(t,u))){Hh(c,I,n,f);break e}P&&P(t,d,u),t==="focusout"&&(P=d._wrapperState)&&P.controlled&&d.type==="number"&&Kl(d,"number",d.value)}switch(P=u?rr(u):window,t){case"focusin":(id(P)||P.contentEditable==="true")&&(tr=P,la=u,li=null);break;case"focusout":li=la=tr=null;break;case"mousedown":aa=!0;break;case"contextmenu":case"mouseup":case"dragend":aa=!1,ud(c,n,f);break;case"selectionchange":if(My)break;case"keydown":case"keyup":ud(c,n,f)}var R;if(_u)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else er?Bh(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Uh&&n.locale!=="ko"&&(er||A!=="onCompositionStart"?A==="onCompositionEnd"&&er&&(R=zh()):(Kt=f,pu="value"in Kt?Kt.value:Kt.textContent,er=!0)),P=Vs(u,A),0<P.length&&(A=new ed(A,t,null,n,f),c.push({event:A,listeners:P}),R?A.data=R:(R=Wh(n),R!==null&&(A.data=R)))),(R=Ey?Sy(t,n):xy(t,n))&&(u=Vs(u,"onBeforeInput"),0<u.length&&(f=new ed("onBeforeInput","beforeinput",null,n,f),c.push({event:f,listeners:u}),f.data=R))}ep(c,e)})}function Ni(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Vs(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=wi(t,n),s!=null&&r.unshift(Ni(t,s,i)),s=wi(t,e),s!=null&&r.push(Ni(t,s,i))),t=t.return}return r}function qn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function fd(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=wi(n,s),a!=null&&o.unshift(Ni(n,a,l))):i||(a=wi(n,s),a!=null&&o.push(Ni(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var jy=/\r\n?/g,zy=/\u0000|\uFFFD/g;function hd(t){return(typeof t=="string"?t:""+t).replace(jy,`
`).replace(zy,"")}function gs(t,e,n){if(e=hd(e),hd(t)!==e&&n)throw Error(E(425))}function Gs(){}var ua=null,ca=null;function da(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fa=typeof setTimeout=="function"?setTimeout:void 0,Uy=typeof clearTimeout=="function"?clearTimeout:void 0,pd=typeof Promise=="function"?Promise:void 0,By=typeof queueMicrotask=="function"?queueMicrotask:typeof pd<"u"?function(t){return pd.resolve(null).then(t).catch(Wy)}:fa;function Wy(t){setTimeout(function(){throw t})}function yl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Si(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Si(e)}function en(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function md(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Mr=Math.random().toString(36).slice(2),Ct="__reactFiber$"+Mr,Ti="__reactProps$"+Mr,Ot="__reactContainer$"+Mr,ha="__reactEvents$"+Mr,Hy="__reactListeners$"+Mr,$y="__reactHandles$"+Mr;function Sn(t){var e=t[Ct];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ot]||n[Ct]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=md(t);t!==null;){if(n=t[Ct])return n;t=md(t)}return e}t=n,n=t.parentNode}return null}function Qi(t){return t=t[Ct]||t[Ot],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function rr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function Ao(t){return t[Ti]||null}var pa=[],ir=-1;function pn(t){return{current:t}}function te(t){0>ir||(t.current=pa[ir],pa[ir]=null,ir--)}function X(t,e){ir++,pa[ir]=t.current,t.current=e}var cn={},Re=pn(cn),Ue=pn(!1),Pn=cn;function Er(t,e){var n=t.type.contextTypes;if(!n)return cn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Be(t){return t=t.childContextTypes,t!=null}function Qs(){te(Ue),te(Re)}function gd(t,e,n){if(Re.current!==cn)throw Error(E(168));X(Re,e),X(Ue,n)}function np(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(E(108,T_(t)||"Unknown",i));return oe({},n,r)}function Ys(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cn,Pn=Re.current,X(Re,t),X(Ue,Ue.current),!0}function _d(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=np(t,e,Pn),r.__reactInternalMemoizedMergedChildContext=t,te(Ue),te(Re),X(Re,t)):te(Ue),X(Ue,n)}var It=null,Oo=!1,vl=!1;function rp(t){It===null?It=[t]:It.push(t)}function Vy(t){Oo=!0,rp(t)}function mn(){if(!vl&&It!==null){vl=!0;var t=0,e=G;try{var n=It;for(G=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}It=null,Oo=!1}catch(i){throw It!==null&&(It=It.slice(t+1)),Th(cu,mn),i}finally{G=e,vl=!1}}return null}var sr=[],or=0,Ks=null,qs=0,Xe=[],Je=0,Dn=null,Nt=1,Tt="";function vn(t,e){sr[or++]=qs,sr[or++]=Ks,Ks=t,qs=e}function ip(t,e,n){Xe[Je++]=Nt,Xe[Je++]=Tt,Xe[Je++]=Dn,Dn=t;var r=Nt;t=Tt;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var s=32-dt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Nt=1<<32-dt(e)+i|n<<i|r,Tt=s+t}else Nt=1<<s|n<<i|r,Tt=t}function vu(t){t.return!==null&&(vn(t,1),ip(t,1,0))}function wu(t){for(;t===Ks;)Ks=sr[--or],sr[or]=null,qs=sr[--or],sr[or]=null;for(;t===Dn;)Dn=Xe[--Je],Xe[Je]=null,Tt=Xe[--Je],Xe[Je]=null,Nt=Xe[--Je],Xe[Je]=null}var Qe=null,Ge=null,ne=!1,lt=null;function sp(t,e){var n=Ze(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function yd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Qe=t,Ge=en(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Qe=t,Ge=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Dn!==null?{id:Nt,overflow:Tt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ze(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Qe=t,Ge=null,!0):!1;default:return!1}}function ma(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ga(t){if(ne){var e=Ge;if(e){var n=e;if(!yd(t,e)){if(ma(t))throw Error(E(418));e=en(n.nextSibling);var r=Qe;e&&yd(t,e)?sp(r,n):(t.flags=t.flags&-4097|2,ne=!1,Qe=t)}}else{if(ma(t))throw Error(E(418));t.flags=t.flags&-4097|2,ne=!1,Qe=t}}}function vd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Qe=t}function _s(t){if(t!==Qe)return!1;if(!ne)return vd(t),ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!da(t.type,t.memoizedProps)),e&&(e=Ge)){if(ma(t))throw op(),Error(E(418));for(;e;)sp(t,e),e=en(e.nextSibling)}if(vd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ge=en(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ge=null}}else Ge=Qe?en(t.stateNode.nextSibling):null;return!0}function op(){for(var t=Ge;t;)t=en(t.nextSibling)}function Sr(){Ge=Qe=null,ne=!1}function Cu(t){lt===null?lt=[t]:lt.push(t)}var Gy=zt.ReactCurrentBatchConfig;function Vr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function ys(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function wd(t){var e=t._init;return e(t._payload)}function lp(t){function e(m,h){if(t){var _=m.deletions;_===null?(m.deletions=[h],m.flags|=16):_.push(h)}}function n(m,h){if(!t)return null;for(;h!==null;)e(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=sn(m,h),m.index=0,m.sibling=null,m}function s(m,h,_){return m.index=_,t?(_=m.alternate,_!==null?(_=_.index,_<h?(m.flags|=2,h):_):(m.flags|=2,h)):(m.flags|=1048576,h)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,h,_,C){return h===null||h.tag!==6?(h=Il(_,m.mode,C),h.return=m,h):(h=i(h,_),h.return=m,h)}function a(m,h,_,C){var I=_.type;return I===Zn?f(m,h,_.props.children,C,_.key):h!==null&&(h.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Vt&&wd(I)===h.type)?(C=i(h,_.props),C.ref=Vr(m,h,_),C.return=m,C):(C=bs(_.type,_.key,_.props,null,m.mode,C),C.ref=Vr(m,h,_),C.return=m,C)}function u(m,h,_,C){return h===null||h.tag!==4||h.stateNode.containerInfo!==_.containerInfo||h.stateNode.implementation!==_.implementation?(h=Nl(_,m.mode,C),h.return=m,h):(h=i(h,_.children||[]),h.return=m,h)}function f(m,h,_,C,I){return h===null||h.tag!==7?(h=Rn(_,m.mode,C,I),h.return=m,h):(h=i(h,_),h.return=m,h)}function c(m,h,_){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Il(""+h,m.mode,_),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ls:return _=bs(h.type,h.key,h.props,null,m.mode,_),_.ref=Vr(m,null,h),_.return=m,_;case Jn:return h=Nl(h,m.mode,_),h.return=m,h;case Vt:var C=h._init;return c(m,C(h._payload),_)}if(ei(h)||Ur(h))return h=Rn(h,m.mode,_,null),h.return=m,h;ys(m,h)}return null}function d(m,h,_,C){var I=h!==null?h.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return I!==null?null:l(m,h,""+_,C);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ls:return _.key===I?a(m,h,_,C):null;case Jn:return _.key===I?u(m,h,_,C):null;case Vt:return I=_._init,d(m,h,I(_._payload),C)}if(ei(_)||Ur(_))return I!==null?null:f(m,h,_,C,null);ys(m,_)}return null}function y(m,h,_,C,I){if(typeof C=="string"&&C!==""||typeof C=="number")return m=m.get(_)||null,l(h,m,""+C,I);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case ls:return m=m.get(C.key===null?_:C.key)||null,a(h,m,C,I);case Jn:return m=m.get(C.key===null?_:C.key)||null,u(h,m,C,I);case Vt:var P=C._init;return y(m,h,_,P(C._payload),I)}if(ei(C)||Ur(C))return m=m.get(_)||null,f(h,m,C,I,null);ys(h,C)}return null}function v(m,h,_,C){for(var I=null,P=null,R=h,A=h=0,Y=null;R!==null&&A<_.length;A++){R.index>A?(Y=R,R=null):Y=R.sibling;var b=d(m,R,_[A],C);if(b===null){R===null&&(R=Y);break}t&&R&&b.alternate===null&&e(m,R),h=s(b,h,A),P===null?I=b:P.sibling=b,P=b,R=Y}if(A===_.length)return n(m,R),ne&&vn(m,A),I;if(R===null){for(;A<_.length;A++)R=c(m,_[A],C),R!==null&&(h=s(R,h,A),P===null?I=R:P.sibling=R,P=R);return ne&&vn(m,A),I}for(R=r(m,R);A<_.length;A++)Y=y(R,m,A,_[A],C),Y!==null&&(t&&Y.alternate!==null&&R.delete(Y.key===null?A:Y.key),h=s(Y,h,A),P===null?I=Y:P.sibling=Y,P=Y);return t&&R.forEach(function(Pe){return e(m,Pe)}),ne&&vn(m,A),I}function w(m,h,_,C){var I=Ur(_);if(typeof I!="function")throw Error(E(150));if(_=I.call(_),_==null)throw Error(E(151));for(var P=I=null,R=h,A=h=0,Y=null,b=_.next();R!==null&&!b.done;A++,b=_.next()){R.index>A?(Y=R,R=null):Y=R.sibling;var Pe=d(m,R,b.value,C);if(Pe===null){R===null&&(R=Y);break}t&&R&&Pe.alternate===null&&e(m,R),h=s(Pe,h,A),P===null?I=Pe:P.sibling=Pe,P=Pe,R=Y}if(b.done)return n(m,R),ne&&vn(m,A),I;if(R===null){for(;!b.done;A++,b=_.next())b=c(m,b.value,C),b!==null&&(h=s(b,h,A),P===null?I=b:P.sibling=b,P=b);return ne&&vn(m,A),I}for(R=r(m,R);!b.done;A++,b=_.next())b=y(R,m,A,b.value,C),b!==null&&(t&&b.alternate!==null&&R.delete(b.key===null?A:b.key),h=s(b,h,A),P===null?I=b:P.sibling=b,P=b);return t&&R.forEach(function(_n){return e(m,_n)}),ne&&vn(m,A),I}function L(m,h,_,C){if(typeof _=="object"&&_!==null&&_.type===Zn&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case ls:e:{for(var I=_.key,P=h;P!==null;){if(P.key===I){if(I=_.type,I===Zn){if(P.tag===7){n(m,P.sibling),h=i(P,_.props.children),h.return=m,m=h;break e}}else if(P.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Vt&&wd(I)===P.type){n(m,P.sibling),h=i(P,_.props),h.ref=Vr(m,P,_),h.return=m,m=h;break e}n(m,P);break}else e(m,P);P=P.sibling}_.type===Zn?(h=Rn(_.props.children,m.mode,C,_.key),h.return=m,m=h):(C=bs(_.type,_.key,_.props,null,m.mode,C),C.ref=Vr(m,h,_),C.return=m,m=C)}return o(m);case Jn:e:{for(P=_.key;h!==null;){if(h.key===P)if(h.tag===4&&h.stateNode.containerInfo===_.containerInfo&&h.stateNode.implementation===_.implementation){n(m,h.sibling),h=i(h,_.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else e(m,h);h=h.sibling}h=Nl(_,m.mode,C),h.return=m,m=h}return o(m);case Vt:return P=_._init,L(m,h,P(_._payload),C)}if(ei(_))return v(m,h,_,C);if(Ur(_))return w(m,h,_,C);ys(m,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,h!==null&&h.tag===6?(n(m,h.sibling),h=i(h,_),h.return=m,m=h):(n(m,h),h=Il(_,m.mode,C),h.return=m,m=h),o(m)):n(m,h)}return L}var xr=lp(!0),ap=lp(!1),Xs=pn(null),Js=null,lr=null,Eu=null;function Su(){Eu=lr=Js=null}function xu(t){var e=Xs.current;te(Xs),t._currentValue=e}function _a(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function mr(t,e){Js=t,Eu=lr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Fe=!0),t.firstContext=null)}function tt(t){var e=t._currentValue;if(Eu!==t)if(t={context:t,memoizedValue:e,next:null},lr===null){if(Js===null)throw Error(E(308));lr=t,Js.dependencies={lanes:0,firstContext:t}}else lr=lr.next=t;return e}var xn=null;function ku(t){xn===null?xn=[t]:xn.push(t)}function up(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ku(e)):(n.next=i.next,i.next=n),e.interleaved=n,Mt(t,r)}function Mt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gt=!1;function Iu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cp(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function tn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Mt(t,n)}return i=r.interleaved,i===null?(e.next=e,ku(r)):(e.next=i.next,i.next=e),r.interleaved=e,Mt(t,n)}function Ps(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,du(t,n)}}function Cd(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Zs(t,e,n,r){var i=t.updateQueue;Gt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,f=u=a=null,l=s;do{var d=l.lane,y=l.eventTime;if((r&d)===d){f!==null&&(f=f.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,w=l;switch(d=e,y=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){c=v.call(y,c,d);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,d=typeof v=="function"?v.call(y,c,d):v,d==null)break e;c=oe({},c,d);break e;case 2:Gt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[l]:d.push(l))}else y={eventTime:y,lane:d,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=y,a=c):f=f.next=y,o|=d;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;d=l,l=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(f===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);On|=o,t.lanes=o,t.memoizedState=c}}function Ed(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var Yi={},St=pn(Yi),Ri=pn(Yi),Pi=pn(Yi);function kn(t){if(t===Yi)throw Error(E(174));return t}function Nu(t,e){switch(X(Pi,e),X(Ri,t),X(St,Yi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Xl(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Xl(e,t)}te(St),X(St,e)}function kr(){te(St),te(Ri),te(Pi)}function dp(t){kn(Pi.current);var e=kn(St.current),n=Xl(e,t.type);e!==n&&(X(Ri,t),X(St,n))}function Tu(t){Ri.current===t&&(te(St),te(Ri))}var ie=pn(0);function eo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var wl=[];function Ru(){for(var t=0;t<wl.length;t++)wl[t]._workInProgressVersionPrimary=null;wl.length=0}var Ds=zt.ReactCurrentDispatcher,Cl=zt.ReactCurrentBatchConfig,An=0,se=null,he=null,_e=null,to=!1,ai=!1,Di=0,Qy=0;function ke(){throw Error(E(321))}function Pu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!pt(t[n],e[n]))return!1;return!0}function Du(t,e,n,r,i,s){if(An=s,se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ds.current=t===null||t.memoizedState===null?Xy:Jy,t=n(r,i),ai){s=0;do{if(ai=!1,Di=0,25<=s)throw Error(E(301));s+=1,_e=he=null,e.updateQueue=null,Ds.current=Zy,t=n(r,i)}while(ai)}if(Ds.current=no,e=he!==null&&he.next!==null,An=0,_e=he=se=null,to=!1,e)throw Error(E(300));return t}function Au(){var t=Di!==0;return Di=0,t}function wt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?se.memoizedState=_e=t:_e=_e.next=t,_e}function nt(){if(he===null){var t=se.alternate;t=t!==null?t.memoizedState:null}else t=he.next;var e=_e===null?se.memoizedState:_e.next;if(e!==null)_e=e,he=t;else{if(t===null)throw Error(E(310));he=t,t={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},_e===null?se.memoizedState=_e=t:_e=_e.next=t}return _e}function Ai(t,e){return typeof e=="function"?e(t):e}function El(t){var e=nt(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=he,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var f=u.lane;if((An&f)===f)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,se.lanes|=f,On|=f}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,pt(r,e.memoizedState)||(Fe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,se.lanes|=s,On|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Sl(t){var e=nt(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);pt(s,e.memoizedState)||(Fe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function fp(){}function hp(t,e){var n=se,r=nt(),i=e(),s=!pt(r.memoizedState,i);if(s&&(r.memoizedState=i,Fe=!0),r=r.queue,Ou(gp.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,Oi(9,mp.bind(null,n,r,i,e),void 0,null),we===null)throw Error(E(349));An&30||pp(n,e,i)}return i}function pp(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=se.updateQueue,e===null?(e={lastEffect:null,stores:null},se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function mp(t,e,n,r){e.value=n,e.getSnapshot=r,_p(e)&&yp(t)}function gp(t,e,n){return n(function(){_p(e)&&yp(t)})}function _p(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!pt(t,n)}catch{return!0}}function yp(t){var e=Mt(t,1);e!==null&&ft(e,t,1,-1)}function Sd(t){var e=wt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ai,lastRenderedState:t},e.queue=t,t=t.dispatch=qy.bind(null,se,t),[e.memoizedState,t]}function Oi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=se.updateQueue,e===null?(e={lastEffect:null,stores:null},se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function vp(){return nt().memoizedState}function As(t,e,n,r){var i=wt();se.flags|=t,i.memoizedState=Oi(1|e,n,void 0,r===void 0?null:r)}function Mo(t,e,n,r){var i=nt();r=r===void 0?null:r;var s=void 0;if(he!==null){var o=he.memoizedState;if(s=o.destroy,r!==null&&Pu(r,o.deps)){i.memoizedState=Oi(e,n,s,r);return}}se.flags|=t,i.memoizedState=Oi(1|e,n,s,r)}function xd(t,e){return As(8390656,8,t,e)}function Ou(t,e){return Mo(2048,8,t,e)}function wp(t,e){return Mo(4,2,t,e)}function Cp(t,e){return Mo(4,4,t,e)}function Ep(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Sp(t,e,n){return n=n!=null?n.concat([t]):null,Mo(4,4,Ep.bind(null,e,t),n)}function Mu(){}function xp(t,e){var n=nt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pu(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function kp(t,e){var n=nt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pu(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Ip(t,e,n){return An&21?(pt(n,e)||(n=Dh(),se.lanes|=n,On|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Fe=!0),t.memoizedState=n)}function Yy(t,e){var n=G;G=n!==0&&4>n?n:4,t(!0);var r=Cl.transition;Cl.transition={};try{t(!1),e()}finally{G=n,Cl.transition=r}}function Np(){return nt().memoizedState}function Ky(t,e,n){var r=rn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Tp(t))Rp(e,n);else if(n=up(t,e,n,r),n!==null){var i=Oe();ft(n,t,r,i),Pp(n,e,r)}}function qy(t,e,n){var r=rn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tp(t))Rp(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,pt(l,o)){var a=e.interleaved;a===null?(i.next=i,ku(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=up(t,e,i,r),n!==null&&(i=Oe(),ft(n,t,r,i),Pp(n,e,r))}}function Tp(t){var e=t.alternate;return t===se||e!==null&&e===se}function Rp(t,e){ai=to=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Pp(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,du(t,n)}}var no={readContext:tt,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},Xy={readContext:tt,useCallback:function(t,e){return wt().memoizedState=[t,e===void 0?null:e],t},useContext:tt,useEffect:xd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,As(4194308,4,Ep.bind(null,e,t),n)},useLayoutEffect:function(t,e){return As(4194308,4,t,e)},useInsertionEffect:function(t,e){return As(4,2,t,e)},useMemo:function(t,e){var n=wt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=wt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Ky.bind(null,se,t),[r.memoizedState,t]},useRef:function(t){var e=wt();return t={current:t},e.memoizedState=t},useState:Sd,useDebugValue:Mu,useDeferredValue:function(t){return wt().memoizedState=t},useTransition:function(){var t=Sd(!1),e=t[0];return t=Yy.bind(null,t[1]),wt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=se,i=wt();if(ne){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),we===null)throw Error(E(349));An&30||pp(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,xd(gp.bind(null,r,s,t),[t]),r.flags|=2048,Oi(9,mp.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=wt(),e=we.identifierPrefix;if(ne){var n=Tt,r=Nt;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Di++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Qy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Jy={readContext:tt,useCallback:xp,useContext:tt,useEffect:Ou,useImperativeHandle:Sp,useInsertionEffect:wp,useLayoutEffect:Cp,useMemo:kp,useReducer:El,useRef:vp,useState:function(){return El(Ai)},useDebugValue:Mu,useDeferredValue:function(t){var e=nt();return Ip(e,he.memoizedState,t)},useTransition:function(){var t=El(Ai)[0],e=nt().memoizedState;return[t,e]},useMutableSource:fp,useSyncExternalStore:hp,useId:Np,unstable_isNewReconciler:!1},Zy={readContext:tt,useCallback:xp,useContext:tt,useEffect:Ou,useImperativeHandle:Sp,useInsertionEffect:wp,useLayoutEffect:Cp,useMemo:kp,useReducer:Sl,useRef:vp,useState:function(){return Sl(Ai)},useDebugValue:Mu,useDeferredValue:function(t){var e=nt();return he===null?e.memoizedState=t:Ip(e,he.memoizedState,t)},useTransition:function(){var t=Sl(Ai)[0],e=nt().memoizedState;return[t,e]},useMutableSource:fp,useSyncExternalStore:hp,useId:Np,unstable_isNewReconciler:!1};function st(t,e){if(t&&t.defaultProps){e=oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ya(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Lo={isMounted:function(t){return(t=t._reactInternals)?Un(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Oe(),i=rn(t),s=Pt(r,i);s.payload=e,n!=null&&(s.callback=n),e=tn(t,s,i),e!==null&&(ft(e,t,i,r),Ps(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Oe(),i=rn(t),s=Pt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=tn(t,s,i),e!==null&&(ft(e,t,i,r),Ps(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Oe(),r=rn(t),i=Pt(n,r);i.tag=2,e!=null&&(i.callback=e),e=tn(t,i,r),e!==null&&(ft(e,t,r,n),Ps(e,t,r))}};function kd(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ki(n,r)||!ki(i,s):!0}function Dp(t,e,n){var r=!1,i=cn,s=e.contextType;return typeof s=="object"&&s!==null?s=tt(s):(i=Be(e)?Pn:Re.current,r=e.contextTypes,s=(r=r!=null)?Er(t,i):cn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Lo,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Id(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Lo.enqueueReplaceState(e,e.state,null)}function va(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Iu(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=tt(s):(s=Be(e)?Pn:Re.current,i.context=Er(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ya(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Lo.enqueueReplaceState(i,i.state,null),Zs(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ir(t,e){try{var n="",r=e;do n+=N_(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function xl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function wa(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ev=typeof WeakMap=="function"?WeakMap:Map;function Ap(t,e,n){n=Pt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){io||(io=!0,Pa=r),wa(t,e)},n}function Op(t,e,n){n=Pt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){wa(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){wa(t,e),typeof r!="function"&&(nn===null?nn=new Set([this]):nn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Nd(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ev;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=pv.bind(null,t,e,n),e.then(t,t))}function Td(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Rd(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pt(-1,1),e.tag=2,tn(n,e,1))),n.lanes|=1),t)}var tv=zt.ReactCurrentOwner,Fe=!1;function Ae(t,e,n,r){e.child=t===null?ap(e,null,n,r):xr(e,t.child,n,r)}function Pd(t,e,n,r,i){n=n.render;var s=e.ref;return mr(e,i),r=Du(t,e,n,r,s,i),n=Au(),t!==null&&!Fe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Lt(t,e,i)):(ne&&n&&vu(e),e.flags|=1,Ae(t,e,r,i),e.child)}function Dd(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Wu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Mp(t,e,s,r,i)):(t=bs(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ki,n(o,r)&&t.ref===e.ref)return Lt(t,e,i)}return e.flags|=1,t=sn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Mp(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ki(s,r)&&t.ref===e.ref)if(Fe=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Fe=!0);else return e.lanes=t.lanes,Lt(t,e,i)}return Ca(t,e,n,r,i)}function Lp(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(ur,Ve),Ve|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,X(ur,Ve),Ve|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,X(ur,Ve),Ve|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,X(ur,Ve),Ve|=r;return Ae(t,e,i,n),e.child}function bp(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ca(t,e,n,r,i){var s=Be(n)?Pn:Re.current;return s=Er(e,s),mr(e,i),n=Du(t,e,n,r,s,i),r=Au(),t!==null&&!Fe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Lt(t,e,i)):(ne&&r&&vu(e),e.flags|=1,Ae(t,e,n,i),e.child)}function Ad(t,e,n,r,i){if(Be(n)){var s=!0;Ys(e)}else s=!1;if(mr(e,i),e.stateNode===null)Os(t,e),Dp(e,n,r),va(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=tt(u):(u=Be(n)?Pn:Re.current,u=Er(e,u));var f=n.getDerivedStateFromProps,c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Id(e,o,r,u),Gt=!1;var d=e.memoizedState;o.state=d,Zs(e,r,o,i),a=e.memoizedState,l!==r||d!==a||Ue.current||Gt?(typeof f=="function"&&(ya(e,n,f,r),a=e.memoizedState),(l=Gt||kd(e,n,l,r,d,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,cp(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:st(e.type,l),o.props=u,c=e.pendingProps,d=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=tt(a):(a=Be(n)?Pn:Re.current,a=Er(e,a));var y=n.getDerivedStateFromProps;(f=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||d!==a)&&Id(e,o,r,a),Gt=!1,d=e.memoizedState,o.state=d,Zs(e,r,o,i);var v=e.memoizedState;l!==c||d!==v||Ue.current||Gt?(typeof y=="function"&&(ya(e,n,y,r),v=e.memoizedState),(u=Gt||kd(e,n,u,r,d,v,a)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Ea(t,e,n,r,s,i)}function Ea(t,e,n,r,i,s){bp(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&_d(e,n,!1),Lt(t,e,s);r=e.stateNode,tv.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=xr(e,t.child,null,s),e.child=xr(e,null,l,s)):Ae(t,e,l,s),e.memoizedState=r.state,i&&_d(e,n,!0),e.child}function Fp(t){var e=t.stateNode;e.pendingContext?gd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&gd(t,e.context,!1),Nu(t,e.containerInfo)}function Od(t,e,n,r,i){return Sr(),Cu(i),e.flags|=256,Ae(t,e,n,r),e.child}var Sa={dehydrated:null,treeContext:null,retryLane:0};function xa(t){return{baseLanes:t,cachePool:null,transitions:null}}function jp(t,e,n){var r=e.pendingProps,i=ie.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),X(ie,i&1),t===null)return ga(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=jo(o,r,0,null),t=Rn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=xa(n),e.memoizedState=Sa,t):Lu(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return nv(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=sn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=sn(l,s):(s=Rn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?xa(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Sa,r}return s=t.child,t=s.sibling,r=sn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Lu(t,e){return e=jo({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function vs(t,e,n,r){return r!==null&&Cu(r),xr(e,t.child,null,n),t=Lu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function nv(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=xl(Error(E(422))),vs(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=jo({mode:"visible",children:r.children},i,0,null),s=Rn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&xr(e,t.child,null,o),e.child.memoizedState=xa(o),e.memoizedState=Sa,s);if(!(e.mode&1))return vs(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(E(419)),r=xl(s,r,void 0),vs(t,e,o,r)}if(l=(o&t.childLanes)!==0,Fe||l){if(r=we,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Mt(t,i),ft(r,t,i,-1))}return Bu(),r=xl(Error(E(421))),vs(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=mv.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ge=en(i.nextSibling),Qe=e,ne=!0,lt=null,t!==null&&(Xe[Je++]=Nt,Xe[Je++]=Tt,Xe[Je++]=Dn,Nt=t.id,Tt=t.overflow,Dn=e),e=Lu(e,r.children),e.flags|=4096,e)}function Md(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),_a(t.return,e,n)}function kl(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function zp(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ae(t,e,r.children,n),r=ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Md(t,n,e);else if(t.tag===19)Md(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(X(ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&eo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),kl(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&eo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}kl(e,!0,n,null,s);break;case"together":kl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Os(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Lt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),On|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=sn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=sn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function rv(t,e,n){switch(e.tag){case 3:Fp(e),Sr();break;case 5:dp(e);break;case 1:Be(e.type)&&Ys(e);break;case 4:Nu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;X(Xs,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(X(ie,ie.current&1),e.flags|=128,null):n&e.child.childLanes?jp(t,e,n):(X(ie,ie.current&1),t=Lt(t,e,n),t!==null?t.sibling:null);X(ie,ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return zp(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(ie,ie.current),r)break;return null;case 22:case 23:return e.lanes=0,Lp(t,e,n)}return Lt(t,e,n)}var Up,ka,Bp,Wp;Up=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ka=function(){};Bp=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,kn(St.current);var s=null;switch(n){case"input":i=Ql(t,i),r=Ql(t,r),s=[];break;case"select":i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),s=[];break;case"textarea":i=ql(t,i),r=ql(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Gs)}Jl(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(yi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(yi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Z("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Wp=function(t,e,n,r){n!==r&&(e.flags|=4)};function Gr(t,e){if(!ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ie(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function iv(t,e,n){var r=e.pendingProps;switch(wu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(e),null;case 1:return Be(e.type)&&Qs(),Ie(e),null;case 3:return r=e.stateNode,kr(),te(Ue),te(Re),Ru(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(_s(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,lt!==null&&(Oa(lt),lt=null))),ka(t,e),Ie(e),null;case 5:Tu(e);var i=kn(Pi.current);if(n=e.type,t!==null&&e.stateNode!=null)Bp(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return Ie(e),null}if(t=kn(St.current),_s(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ct]=e,r[Ti]=s,t=(e.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(i=0;i<ni.length;i++)Z(ni[i],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":Hc(r,s),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Z("invalid",r);break;case"textarea":Vc(r,s),Z("invalid",r)}Jl(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&gs(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&gs(r.textContent,l,t),i=["children",""+l]):yi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Z("scroll",r)}switch(n){case"input":as(r),$c(r,s,!0);break;case"textarea":as(r),Gc(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Gs)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=gh(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ct]=e,t[Ti]=r,Up(t,e,!1,!1),e.stateNode=t;e:{switch(o=Zl(n,r),n){case"dialog":Z("cancel",t),Z("close",t),i=r;break;case"iframe":case"object":case"embed":Z("load",t),i=r;break;case"video":case"audio":for(i=0;i<ni.length;i++)Z(ni[i],t);i=r;break;case"source":Z("error",t),i=r;break;case"img":case"image":case"link":Z("error",t),Z("load",t),i=r;break;case"details":Z("toggle",t),i=r;break;case"input":Hc(t,r),i=Ql(t,r),Z("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=oe({},r,{value:void 0}),Z("invalid",t);break;case"textarea":Vc(t,r),i=ql(t,r),Z("invalid",t);break;default:i=r}Jl(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?vh(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&_h(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&vi(t,a):typeof a=="number"&&vi(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(yi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&Z("scroll",t):a!=null&&su(t,s,a,o))}switch(n){case"input":as(t),$c(t,r,!1);break;case"textarea":as(t),Gc(t);break;case"option":r.value!=null&&t.setAttribute("value",""+un(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?dr(t,!!r.multiple,s,!1):r.defaultValue!=null&&dr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Gs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ie(e),null;case 6:if(t&&e.stateNode!=null)Wp(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=kn(Pi.current),kn(St.current),_s(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ct]=e,(s=r.nodeValue!==n)&&(t=Qe,t!==null))switch(t.tag){case 3:gs(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&gs(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ct]=e,e.stateNode=r}return Ie(e),null;case 13:if(te(ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ne&&Ge!==null&&e.mode&1&&!(e.flags&128))op(),Sr(),e.flags|=98560,s=!1;else if(s=_s(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(E(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[Ct]=e}else Sr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ie(e),s=!1}else lt!==null&&(Oa(lt),lt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ie.current&1?me===0&&(me=3):Bu())),e.updateQueue!==null&&(e.flags|=4),Ie(e),null);case 4:return kr(),ka(t,e),t===null&&Ii(e.stateNode.containerInfo),Ie(e),null;case 10:return xu(e.type._context),Ie(e),null;case 17:return Be(e.type)&&Qs(),Ie(e),null;case 19:if(te(ie),s=e.memoizedState,s===null)return Ie(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Gr(s,!1);else{if(me!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=eo(t),o!==null){for(e.flags|=128,Gr(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return X(ie,ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&ce()>Nr&&(e.flags|=128,r=!0,Gr(s,!1),e.lanes=4194304)}else{if(!r)if(t=eo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Gr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ne)return Ie(e),null}else 2*ce()-s.renderingStartTime>Nr&&n!==1073741824&&(e.flags|=128,r=!0,Gr(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ce(),e.sibling=null,n=ie.current,X(ie,r?n&1|2:n&1),e):(Ie(e),null);case 22:case 23:return Uu(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ve&1073741824&&(Ie(e),e.subtreeFlags&6&&(e.flags|=8192)):Ie(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function sv(t,e){switch(wu(e),e.tag){case 1:return Be(e.type)&&Qs(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return kr(),te(Ue),te(Re),Ru(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Tu(e),null;case 13:if(te(ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));Sr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return te(ie),null;case 4:return kr(),null;case 10:return xu(e.type._context),null;case 22:case 23:return Uu(),null;case 24:return null;default:return null}}var ws=!1,Ne=!1,ov=typeof WeakSet=="function"?WeakSet:Set,T=null;function ar(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){le(t,e,r)}else n.current=null}function Ia(t,e,n){try{n()}catch(r){le(t,e,r)}}var Ld=!1;function lv(t,e){if(ua=Hs,t=Qh(),yu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,f=0,c=t,d=null;t:for(;;){for(var y;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(y=c.firstChild)!==null;)d=c,c=y;for(;;){if(c===t)break t;if(d===n&&++u===i&&(l=o),d===s&&++f===r&&(a=o),(y=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=y}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ca={focusedElem:t,selectionRange:n},Hs=!1,T=e;T!==null;)if(e=T,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,T=t;else for(;T!==null;){e=T;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,L=v.memoizedState,m=e.stateNode,h=m.getSnapshotBeforeUpdate(e.elementType===e.type?w:st(e.type,w),L);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(C){le(e,e.return,C)}if(t=e.sibling,t!==null){t.return=e.return,T=t;break}T=e.return}return v=Ld,Ld=!1,v}function ui(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ia(e,n,s)}i=i.next}while(i!==r)}}function bo(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Na(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Hp(t){var e=t.alternate;e!==null&&(t.alternate=null,Hp(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ct],delete e[Ti],delete e[ha],delete e[Hy],delete e[$y])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $p(t){return t.tag===5||t.tag===3||t.tag===4}function bd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$p(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ta(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Gs));else if(r!==4&&(t=t.child,t!==null))for(Ta(t,e,n),t=t.sibling;t!==null;)Ta(t,e,n),t=t.sibling}function Ra(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ra(t,e,n),t=t.sibling;t!==null;)Ra(t,e,n),t=t.sibling}var Ce=null,ot=!1;function $t(t,e,n){for(n=n.child;n!==null;)Vp(t,e,n),n=n.sibling}function Vp(t,e,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(To,n)}catch{}switch(n.tag){case 5:Ne||ar(n,e);case 6:var r=Ce,i=ot;Ce=null,$t(t,e,n),Ce=r,ot=i,Ce!==null&&(ot?(t=Ce,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ce.removeChild(n.stateNode));break;case 18:Ce!==null&&(ot?(t=Ce,n=n.stateNode,t.nodeType===8?yl(t.parentNode,n):t.nodeType===1&&yl(t,n),Si(t)):yl(Ce,n.stateNode));break;case 4:r=Ce,i=ot,Ce=n.stateNode.containerInfo,ot=!0,$t(t,e,n),Ce=r,ot=i;break;case 0:case 11:case 14:case 15:if(!Ne&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ia(n,e,o),i=i.next}while(i!==r)}$t(t,e,n);break;case 1:if(!Ne&&(ar(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){le(n,e,l)}$t(t,e,n);break;case 21:$t(t,e,n);break;case 22:n.mode&1?(Ne=(r=Ne)||n.memoizedState!==null,$t(t,e,n),Ne=r):$t(t,e,n);break;default:$t(t,e,n)}}function Fd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ov),e.forEach(function(r){var i=gv.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function it(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ce=l.stateNode,ot=!1;break e;case 3:Ce=l.stateNode.containerInfo,ot=!0;break e;case 4:Ce=l.stateNode.containerInfo,ot=!0;break e}l=l.return}if(Ce===null)throw Error(E(160));Vp(s,o,i),Ce=null,ot=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){le(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Gp(e,t),e=e.sibling}function Gp(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(it(e,t),vt(t),r&4){try{ui(3,t,t.return),bo(3,t)}catch(w){le(t,t.return,w)}try{ui(5,t,t.return)}catch(w){le(t,t.return,w)}}break;case 1:it(e,t),vt(t),r&512&&n!==null&&ar(n,n.return);break;case 5:if(it(e,t),vt(t),r&512&&n!==null&&ar(n,n.return),t.flags&32){var i=t.stateNode;try{vi(i,"")}catch(w){le(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&ph(i,s),Zl(l,o);var u=Zl(l,s);for(o=0;o<a.length;o+=2){var f=a[o],c=a[o+1];f==="style"?vh(i,c):f==="dangerouslySetInnerHTML"?_h(i,c):f==="children"?vi(i,c):su(i,f,c,u)}switch(l){case"input":Yl(i,s);break;case"textarea":mh(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?dr(i,!!s.multiple,y,!1):d!==!!s.multiple&&(s.defaultValue!=null?dr(i,!!s.multiple,s.defaultValue,!0):dr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ti]=s}catch(w){le(t,t.return,w)}}break;case 6:if(it(e,t),vt(t),r&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){le(t,t.return,w)}}break;case 3:if(it(e,t),vt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Si(e.containerInfo)}catch(w){le(t,t.return,w)}break;case 4:it(e,t),vt(t);break;case 13:it(e,t),vt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ju=ce())),r&4&&Fd(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ne=(u=Ne)||f,it(e,t),Ne=u):it(e,t),vt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(T=t,f=t.child;f!==null;){for(c=T=f;T!==null;){switch(d=T,y=d.child,d.tag){case 0:case 11:case 14:case 15:ui(4,d,d.return);break;case 1:ar(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){le(r,n,w)}}break;case 5:ar(d,d.return);break;case 22:if(d.memoizedState!==null){zd(c);continue}}y!==null?(y.return=d,T=y):zd(c)}f=f.sibling}e:for(f=null,c=t;;){if(c.tag===5){if(f===null){f=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=yh("display",o))}catch(w){le(t,t.return,w)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(w){le(t,t.return,w)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:it(e,t),vt(t),r&4&&Fd(t);break;case 21:break;default:it(e,t),vt(t)}}function vt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($p(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(vi(i,""),r.flags&=-33);var s=bd(t);Ra(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=bd(t);Ta(t,l,o);break;default:throw Error(E(161))}}catch(a){le(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function av(t,e,n){T=t,Qp(t)}function Qp(t,e,n){for(var r=(t.mode&1)!==0;T!==null;){var i=T,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ws;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ne;l=ws;var u=Ne;if(ws=o,(Ne=a)&&!u)for(T=i;T!==null;)o=T,a=o.child,o.tag===22&&o.memoizedState!==null?Ud(i):a!==null?(a.return=o,T=a):Ud(i);for(;s!==null;)T=s,Qp(s),s=s.sibling;T=i,ws=l,Ne=u}jd(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,T=s):jd(t)}}function jd(t){for(;T!==null;){var e=T;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ne||bo(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ne)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:st(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ed(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ed(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&Si(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Ne||e.flags&512&&Na(e)}catch(d){le(e,e.return,d)}}if(e===t){T=null;break}if(n=e.sibling,n!==null){n.return=e.return,T=n;break}T=e.return}}function zd(t){for(;T!==null;){var e=T;if(e===t){T=null;break}var n=e.sibling;if(n!==null){n.return=e.return,T=n;break}T=e.return}}function Ud(t){for(;T!==null;){var e=T;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{bo(4,e)}catch(a){le(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){le(e,i,a)}}var s=e.return;try{Na(e)}catch(a){le(e,s,a)}break;case 5:var o=e.return;try{Na(e)}catch(a){le(e,o,a)}}}catch(a){le(e,e.return,a)}if(e===t){T=null;break}var l=e.sibling;if(l!==null){l.return=e.return,T=l;break}T=e.return}}var uv=Math.ceil,ro=zt.ReactCurrentDispatcher,bu=zt.ReactCurrentOwner,et=zt.ReactCurrentBatchConfig,$=0,we=null,fe=null,Se=0,Ve=0,ur=pn(0),me=0,Mi=null,On=0,Fo=0,Fu=0,ci=null,be=null,ju=0,Nr=1/0,kt=null,io=!1,Pa=null,nn=null,Cs=!1,qt=null,so=0,di=0,Da=null,Ms=-1,Ls=0;function Oe(){return $&6?ce():Ms!==-1?Ms:Ms=ce()}function rn(t){return t.mode&1?$&2&&Se!==0?Se&-Se:Gy.transition!==null?(Ls===0&&(Ls=Dh()),Ls):(t=G,t!==0||(t=window.event,t=t===void 0?16:jh(t.type)),t):1}function ft(t,e,n,r){if(50<di)throw di=0,Da=null,Error(E(185));Vi(t,n,r),(!($&2)||t!==we)&&(t===we&&(!($&2)&&(Fo|=n),me===4&&Yt(t,Se)),We(t,r),n===1&&$===0&&!(e.mode&1)&&(Nr=ce()+500,Oo&&mn()))}function We(t,e){var n=t.callbackNode;G_(t,e);var r=Ws(t,t===we?Se:0);if(r===0)n!==null&&Kc(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Kc(n),e===1)t.tag===0?Vy(Bd.bind(null,t)):rp(Bd.bind(null,t)),By(function(){!($&6)&&mn()}),n=null;else{switch(Ah(r)){case 1:n=cu;break;case 4:n=Rh;break;case 16:n=Bs;break;case 536870912:n=Ph;break;default:n=Bs}n=tm(n,Yp.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Yp(t,e){if(Ms=-1,Ls=0,$&6)throw Error(E(327));var n=t.callbackNode;if(gr()&&t.callbackNode!==n)return null;var r=Ws(t,t===we?Se:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=oo(t,r);else{e=r;var i=$;$|=2;var s=qp();(we!==t||Se!==e)&&(kt=null,Nr=ce()+500,Tn(t,e));do try{fv();break}catch(l){Kp(t,l)}while(!0);Su(),ro.current=s,$=i,fe!==null?e=0:(we=null,Se=0,e=me)}if(e!==0){if(e===2&&(i=ia(t),i!==0&&(r=i,e=Aa(t,i))),e===1)throw n=Mi,Tn(t,0),Yt(t,r),We(t,ce()),n;if(e===6)Yt(t,r);else{if(i=t.current.alternate,!(r&30)&&!cv(i)&&(e=oo(t,r),e===2&&(s=ia(t),s!==0&&(r=s,e=Aa(t,s))),e===1))throw n=Mi,Tn(t,0),Yt(t,r),We(t,ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:wn(t,be,kt);break;case 3:if(Yt(t,r),(r&130023424)===r&&(e=ju+500-ce(),10<e)){if(Ws(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Oe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=fa(wn.bind(null,t,be,kt),e);break}wn(t,be,kt);break;case 4:if(Yt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-dt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*uv(r/1960))-r,10<r){t.timeoutHandle=fa(wn.bind(null,t,be,kt),r);break}wn(t,be,kt);break;case 5:wn(t,be,kt);break;default:throw Error(E(329))}}}return We(t,ce()),t.callbackNode===n?Yp.bind(null,t):null}function Aa(t,e){var n=ci;return t.current.memoizedState.isDehydrated&&(Tn(t,e).flags|=256),t=oo(t,e),t!==2&&(e=be,be=n,e!==null&&Oa(e)),t}function Oa(t){be===null?be=t:be.push.apply(be,t)}function cv(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!pt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yt(t,e){for(e&=~Fu,e&=~Fo,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-dt(e),r=1<<n;t[n]=-1,e&=~r}}function Bd(t){if($&6)throw Error(E(327));gr();var e=Ws(t,0);if(!(e&1))return We(t,ce()),null;var n=oo(t,e);if(t.tag!==0&&n===2){var r=ia(t);r!==0&&(e=r,n=Aa(t,r))}if(n===1)throw n=Mi,Tn(t,0),Yt(t,e),We(t,ce()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wn(t,be,kt),We(t,ce()),null}function zu(t,e){var n=$;$|=1;try{return t(e)}finally{$=n,$===0&&(Nr=ce()+500,Oo&&mn())}}function Mn(t){qt!==null&&qt.tag===0&&!($&6)&&gr();var e=$;$|=1;var n=et.transition,r=G;try{if(et.transition=null,G=1,t)return t()}finally{G=r,et.transition=n,$=e,!($&6)&&mn()}}function Uu(){Ve=ur.current,te(ur)}function Tn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Uy(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(wu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qs();break;case 3:kr(),te(Ue),te(Re),Ru();break;case 5:Tu(r);break;case 4:kr();break;case 13:te(ie);break;case 19:te(ie);break;case 10:xu(r.type._context);break;case 22:case 23:Uu()}n=n.return}if(we=t,fe=t=sn(t.current,null),Se=Ve=e,me=0,Mi=null,Fu=Fo=On=0,be=ci=null,xn!==null){for(e=0;e<xn.length;e++)if(n=xn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}xn=null}return t}function Kp(t,e){do{var n=fe;try{if(Su(),Ds.current=no,to){for(var r=se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}to=!1}if(An=0,_e=he=se=null,ai=!1,Di=0,bu.current=null,n===null||n.return===null){me=1,Mi=e,fe=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Se,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,f=l,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=Td(o);if(y!==null){y.flags&=-257,Rd(y,o,l,s,e),y.mode&1&&Nd(s,u,e),e=y,a=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(a),e.updateQueue=w}else v.add(a);break e}else{if(!(e&1)){Nd(s,u,e),Bu();break e}a=Error(E(426))}}else if(ne&&l.mode&1){var L=Td(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),Rd(L,o,l,s,e),Cu(Ir(a,l));break e}}s=a=Ir(a,l),me!==4&&(me=2),ci===null?ci=[s]:ci.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Ap(s,a,e);Cd(s,m);break e;case 1:l=a;var h=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(nn===null||!nn.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var C=Op(s,l,e);Cd(s,C);break e}}s=s.return}while(s!==null)}Jp(n)}catch(I){e=I,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(!0)}function qp(){var t=ro.current;return ro.current=no,t===null?no:t}function Bu(){(me===0||me===3||me===2)&&(me=4),we===null||!(On&268435455)&&!(Fo&268435455)||Yt(we,Se)}function oo(t,e){var n=$;$|=2;var r=qp();(we!==t||Se!==e)&&(kt=null,Tn(t,e));do try{dv();break}catch(i){Kp(t,i)}while(!0);if(Su(),$=n,ro.current=r,fe!==null)throw Error(E(261));return we=null,Se=0,me}function dv(){for(;fe!==null;)Xp(fe)}function fv(){for(;fe!==null&&!F_();)Xp(fe)}function Xp(t){var e=em(t.alternate,t,Ve);t.memoizedProps=t.pendingProps,e===null?Jp(t):fe=e,bu.current=null}function Jp(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=sv(n,e),n!==null){n.flags&=32767,fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{me=6,fe=null;return}}else if(n=iv(n,e,Ve),n!==null){fe=n;return}if(e=e.sibling,e!==null){fe=e;return}fe=e=t}while(e!==null);me===0&&(me=5)}function wn(t,e,n){var r=G,i=et.transition;try{et.transition=null,G=1,hv(t,e,n,r)}finally{et.transition=i,G=r}return null}function hv(t,e,n,r){do gr();while(qt!==null);if($&6)throw Error(E(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Q_(t,s),t===we&&(fe=we=null,Se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Cs||(Cs=!0,tm(Bs,function(){return gr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=et.transition,et.transition=null;var o=G;G=1;var l=$;$|=4,bu.current=null,lv(t,n),Gp(n,t),Oy(ca),Hs=!!ua,ca=ua=null,t.current=n,av(n),j_(),$=l,G=o,et.transition=s}else t.current=n;if(Cs&&(Cs=!1,qt=t,so=i),s=t.pendingLanes,s===0&&(nn=null),B_(n.stateNode),We(t,ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(io)throw io=!1,t=Pa,Pa=null,t;return so&1&&t.tag!==0&&gr(),s=t.pendingLanes,s&1?t===Da?di++:(di=0,Da=t):di=0,mn(),null}function gr(){if(qt!==null){var t=Ah(so),e=et.transition,n=G;try{if(et.transition=null,G=16>t?16:t,qt===null)var r=!1;else{if(t=qt,qt=null,so=0,$&6)throw Error(E(331));var i=$;for($|=4,T=t.current;T!==null;){var s=T,o=s.child;if(T.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(T=u;T!==null;){var f=T;switch(f.tag){case 0:case 11:case 15:ui(8,f,s)}var c=f.child;if(c!==null)c.return=f,T=c;else for(;T!==null;){f=T;var d=f.sibling,y=f.return;if(Hp(f),f===u){T=null;break}if(d!==null){d.return=y,T=d;break}T=y}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var L=w.sibling;w.sibling=null,w=L}while(w!==null)}}T=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,T=o;else e:for(;T!==null;){if(s=T,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ui(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,T=m;break e}T=s.return}}var h=t.current;for(T=h;T!==null;){o=T;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,T=_;else e:for(o=h;T!==null;){if(l=T,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:bo(9,l)}}catch(I){le(l,l.return,I)}if(l===o){T=null;break e}var C=l.sibling;if(C!==null){C.return=l.return,T=C;break e}T=l.return}}if($=i,mn(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(To,t)}catch{}r=!0}return r}finally{G=n,et.transition=e}}return!1}function Wd(t,e,n){e=Ir(n,e),e=Ap(t,e,1),t=tn(t,e,1),e=Oe(),t!==null&&(Vi(t,1,e),We(t,e))}function le(t,e,n){if(t.tag===3)Wd(t,t,n);else for(;e!==null;){if(e.tag===3){Wd(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nn===null||!nn.has(r))){t=Ir(n,t),t=Op(e,t,1),e=tn(e,t,1),t=Oe(),e!==null&&(Vi(e,1,t),We(e,t));break}}e=e.return}}function pv(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Oe(),t.pingedLanes|=t.suspendedLanes&n,we===t&&(Se&n)===n&&(me===4||me===3&&(Se&130023424)===Se&&500>ce()-ju?Tn(t,0):Fu|=n),We(t,e)}function Zp(t,e){e===0&&(t.mode&1?(e=ds,ds<<=1,!(ds&130023424)&&(ds=4194304)):e=1);var n=Oe();t=Mt(t,e),t!==null&&(Vi(t,e,n),We(t,n))}function mv(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Zp(t,n)}function gv(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),Zp(t,n)}var em;em=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ue.current)Fe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Fe=!1,rv(t,e,n);Fe=!!(t.flags&131072)}else Fe=!1,ne&&e.flags&1048576&&ip(e,qs,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Os(t,e),t=e.pendingProps;var i=Er(e,Re.current);mr(e,n),i=Du(null,e,r,t,i,n);var s=Au();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Be(r)?(s=!0,Ys(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Iu(e),i.updater=Lo,e.stateNode=i,i._reactInternals=e,va(e,r,t,n),e=Ea(null,e,r,!0,s,n)):(e.tag=0,ne&&s&&vu(e),Ae(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Os(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=yv(r),t=st(r,t),i){case 0:e=Ca(null,e,r,t,n);break e;case 1:e=Ad(null,e,r,t,n);break e;case 11:e=Pd(null,e,r,t,n);break e;case 14:e=Dd(null,e,r,st(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),Ca(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),Ad(t,e,r,i,n);case 3:e:{if(Fp(e),t===null)throw Error(E(387));r=e.pendingProps,s=e.memoizedState,i=s.element,cp(t,e),Zs(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ir(Error(E(423)),e),e=Od(t,e,r,n,i);break e}else if(r!==i){i=Ir(Error(E(424)),e),e=Od(t,e,r,n,i);break e}else for(Ge=en(e.stateNode.containerInfo.firstChild),Qe=e,ne=!0,lt=null,n=ap(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sr(),r===i){e=Lt(t,e,n);break e}Ae(t,e,r,n)}e=e.child}return e;case 5:return dp(e),t===null&&ga(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,da(r,i)?o=null:s!==null&&da(r,s)&&(e.flags|=32),bp(t,e),Ae(t,e,o,n),e.child;case 6:return t===null&&ga(e),null;case 13:return jp(t,e,n);case 4:return Nu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=xr(e,null,r,n):Ae(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),Pd(t,e,r,i,n);case 7:return Ae(t,e,e.pendingProps,n),e.child;case 8:return Ae(t,e,e.pendingProps.children,n),e.child;case 12:return Ae(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,X(Xs,r._currentValue),r._currentValue=o,s!==null)if(pt(s.value,o)){if(s.children===i.children&&!Ue.current){e=Lt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Pt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?a.next=a:(a.next=f.next,f.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),_a(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),_a(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ae(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,mr(e,n),i=tt(i),r=r(i),e.flags|=1,Ae(t,e,r,n),e.child;case 14:return r=e.type,i=st(r,e.pendingProps),i=st(r.type,i),Dd(t,e,r,i,n);case 15:return Mp(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),Os(t,e),e.tag=1,Be(r)?(t=!0,Ys(e)):t=!1,mr(e,n),Dp(e,r,i),va(e,r,i,n),Ea(null,e,r,!0,t,n);case 19:return zp(t,e,n);case 22:return Lp(t,e,n)}throw Error(E(156,e.tag))};function tm(t,e){return Th(t,e)}function _v(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(t,e,n,r){return new _v(t,e,n,r)}function Wu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function yv(t){if(typeof t=="function")return Wu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===lu)return 11;if(t===au)return 14}return 2}function sn(t,e){var n=t.alternate;return n===null?(n=Ze(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function bs(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Wu(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Zn:return Rn(n.children,i,s,e);case ou:o=8,i|=8;break;case Hl:return t=Ze(12,n,e,i|2),t.elementType=Hl,t.lanes=s,t;case $l:return t=Ze(13,n,e,i),t.elementType=$l,t.lanes=s,t;case Vl:return t=Ze(19,n,e,i),t.elementType=Vl,t.lanes=s,t;case dh:return jo(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case uh:o=10;break e;case ch:o=9;break e;case lu:o=11;break e;case au:o=14;break e;case Vt:o=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=Ze(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Rn(t,e,n,r){return t=Ze(7,t,r,e),t.lanes=n,t}function jo(t,e,n,r){return t=Ze(22,t,r,e),t.elementType=dh,t.lanes=n,t.stateNode={isHidden:!1},t}function Il(t,e,n){return t=Ze(6,t,null,e),t.lanes=n,t}function Nl(t,e,n){return e=Ze(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function vv(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ll(0),this.expirationTimes=ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ll(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Hu(t,e,n,r,i,s,o,l,a){return t=new vv(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ze(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Iu(s),t}function wv(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function nm(t){if(!t)return cn;t=t._reactInternals;e:{if(Un(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Be(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(Be(n))return np(t,n,e)}return e}function rm(t,e,n,r,i,s,o,l,a){return t=Hu(n,r,!0,t,i,s,o,l,a),t.context=nm(null),n=t.current,r=Oe(),i=rn(n),s=Pt(r,i),s.callback=e??null,tn(n,s,i),t.current.lanes=i,Vi(t,i,r),We(t,r),t}function zo(t,e,n,r){var i=e.current,s=Oe(),o=rn(i);return n=nm(n),e.context===null?e.context=n:e.pendingContext=n,e=Pt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=tn(i,e,o),t!==null&&(ft(t,i,o,s),Ps(t,i,o)),o}function lo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Hd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function $u(t,e){Hd(t,e),(t=t.alternate)&&Hd(t,e)}function Cv(){return null}var im=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vu(t){this._internalRoot=t}Uo.prototype.render=Vu.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));zo(t,e,null,null)};Uo.prototype.unmount=Vu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Mn(function(){zo(null,t,null,null)}),e[Ot]=null}};function Uo(t){this._internalRoot=t}Uo.prototype.unstable_scheduleHydration=function(t){if(t){var e=Lh();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qt.length&&e!==0&&e<Qt[n].priority;n++);Qt.splice(n,0,t),n===0&&Fh(t)}};function Gu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $d(){}function Ev(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=lo(o);s.call(u)}}var o=rm(e,r,t,0,null,!1,!1,"",$d);return t._reactRootContainer=o,t[Ot]=o.current,Ii(t.nodeType===8?t.parentNode:t),Mn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=lo(a);l.call(u)}}var a=Hu(t,0,!1,null,null,!1,!1,"",$d);return t._reactRootContainer=a,t[Ot]=a.current,Ii(t.nodeType===8?t.parentNode:t),Mn(function(){zo(e,a,n,r)}),a}function Wo(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=lo(o);l.call(a)}}zo(e,o,t,i)}else o=Ev(n,e,t,i,r);return lo(o)}Oh=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ti(e.pendingLanes);n!==0&&(du(e,n|1),We(e,ce()),!($&6)&&(Nr=ce()+500,mn()))}break;case 13:Mn(function(){var r=Mt(t,1);if(r!==null){var i=Oe();ft(r,t,1,i)}}),$u(t,1)}};fu=function(t){if(t.tag===13){var e=Mt(t,134217728);if(e!==null){var n=Oe();ft(e,t,134217728,n)}$u(t,134217728)}};Mh=function(t){if(t.tag===13){var e=rn(t),n=Mt(t,e);if(n!==null){var r=Oe();ft(n,t,e,r)}$u(t,e)}};Lh=function(){return G};bh=function(t,e){var n=G;try{return G=t,e()}finally{G=n}};ta=function(t,e,n){switch(e){case"input":if(Yl(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ao(r);if(!i)throw Error(E(90));hh(r),Yl(r,i)}}}break;case"textarea":mh(t,n);break;case"select":e=n.value,e!=null&&dr(t,!!n.multiple,e,!1)}};Eh=zu;Sh=Mn;var Sv={usingClientEntryPoint:!1,Events:[Qi,rr,Ao,wh,Ch,zu]},Qr={findFiberByHostInstance:Sn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xv={bundleType:Qr.bundleType,version:Qr.version,rendererPackageName:Qr.rendererPackageName,rendererConfig:Qr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ih(t),t===null?null:t.stateNode},findFiberByHostInstance:Qr.findFiberByHostInstance||Cv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Es=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Es.isDisabled&&Es.supportsFiber)try{To=Es.inject(xv),Et=Es}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sv;Ke.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gu(e))throw Error(E(200));return wv(t,e,null,n)};Ke.createRoot=function(t,e){if(!Gu(t))throw Error(E(299));var n=!1,r="",i=im;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Hu(t,1,!1,null,null,n,!1,r,i),t[Ot]=e.current,Ii(t.nodeType===8?t.parentNode:t),new Vu(e)};Ke.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=Ih(e),t=t===null?null:t.stateNode,t};Ke.flushSync=function(t){return Mn(t)};Ke.hydrate=function(t,e,n){if(!Bo(e))throw Error(E(200));return Wo(null,t,e,!0,n)};Ke.hydrateRoot=function(t,e,n){if(!Gu(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=im;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=rm(e,null,t,1,n??null,i,!1,s,o),t[Ot]=e.current,Ii(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Uo(e)};Ke.render=function(t,e,n){if(!Bo(e))throw Error(E(200));return Wo(null,t,e,!1,n)};Ke.unmountComponentAtNode=function(t){if(!Bo(t))throw Error(E(40));return t._reactRootContainer?(Mn(function(){Wo(null,null,t,!1,function(){t._reactRootContainer=null,t[Ot]=null})}),!0):!1};Ke.unstable_batchedUpdates=zu;Ke.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Bo(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return Wo(t,e,n,!1,r)};Ke.version="18.3.1-next-f1338f8080-20240426";function sm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sm)}catch(t){console.error(t)}}sm(),sh.exports=Ke;var kv=sh.exports,Vd=kv;Bl.createRoot=Vd.createRoot,Bl.hydrateRoot=Vd.hydrateRoot;const Iv=()=>{};var Gd={};/**
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
 */const om={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const x=function(t,e){if(!t)throw Lr(e)},Lr=function(t){return new Error("Firebase Database ("+om.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const lm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Nv=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Qu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,f=s>>2,c=(s&3)<<4|l>>4;let d=(l&15)<<2|u>>6,y=u&63;a||(y=64,o||(d=64)),r.push(n[f],n[c],n[d],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Nv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new Tv;const d=s<<2|l>>4;if(r.push(d),u!==64){const y=l<<4&240|u>>2;if(r.push(y),c!==64){const v=u<<6&192|c;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Tv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const am=function(t){const e=lm(t);return Qu.encodeByteArray(e,!0)},ao=function(t){return am(t).replace(/\./g,"")},Ma=function(t){try{return Qu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Rv(t){return um(void 0,t)}function um(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Pv(n)||(t[n]=um(t[n],e[n]));return t}function Pv(t){return t!=="__proto__"}/**
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
 */function Dv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Av=()=>Dv().__FIREBASE_DEFAULTS__,Ov=()=>{if(typeof process>"u"||typeof Gd>"u")return;const t=Gd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Mv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ma(t[1]);return e&&JSON.parse(e)},cm=()=>{try{return Iv()||Av()||Ov()||Mv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Lv=t=>{var e,n;return(n=(e=cm())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},bv=t=>{const e=Lv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},dm=()=>{var t;return(t=cm())==null?void 0:t.config};/**
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
 */class Ho{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Fv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ao(JSON.stringify(n)),ao(JSON.stringify(o)),""].join(".")}/**
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
 */function jv(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jv())}function zv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Uv(){return om.NODE_ADMIN===!0}function Bv(){try{return typeof indexedDB=="object"}catch{return!1}}function Wv(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Hv="FirebaseError";class Ki extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Hv,Object.setPrototypeOf(this,Ki.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hm.prototype.create)}}class hm{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?$v(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Ki(i,l,r)}}function $v(t,e){return t.replace(Vv,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Vv=/\{\$([^}]+)}/g;/**
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
 */function Li(t){return JSON.parse(t)}function ve(t){return JSON.stringify(t)}/**
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
 */const pm=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Li(Ma(s[0])||""),n=Li(Ma(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Gv=function(t){const e=pm(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Qv=function(t){const e=pm(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ut(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Tr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Qd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function uo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function co(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Yd(s)&&Yd(o)){if(!co(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Yd(t){return t!==null&&typeof t=="object"}/**
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
 */function Yv(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class Kv{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const d=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,f;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),f=1518500249):(u=s^o^l,f=1859775393):c<60?(u=s&o|l&(s|o),f=2400959708):(u=s^o^l,f=3395469782);const d=(i<<5|i>>>27)+u+a+f+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Yu(t,e){return`${t} failed: ${e} argument `}/**
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
 */const qv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,x(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},$o=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function qi(t){return t&&t._delegate?t._delegate:t}/**
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
 */function mm(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Xv(t){return(await fetch(t,{credentials:"include"})).ok}class bi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Cn="[DEFAULT]";/**
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
 */class Jv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ho;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(e0(e))try{this.getOrInitializeService({instanceIdentifier:Cn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Cn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cn){return this.instances.has(e)}getOptions(e=Cn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Zv(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Cn){return this.component?this.component.multipleInstances?e:Cn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zv(t){return t===Cn?void 0:t}function e0(t){return t.instantiationMode==="EAGER"}/**
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
 */class t0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Jv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var K;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(K||(K={}));const n0={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},r0=K.INFO,i0={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},s0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=i0[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gm{constructor(e){this.name=e,this._logLevel=r0,this._logHandler=s0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?n0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const o0=(t,e)=>e.some(n=>t instanceof n);let Kd,qd;function l0(){return Kd||(Kd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function a0(){return qd||(qd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _m=new WeakMap,La=new WeakMap,ym=new WeakMap,Tl=new WeakMap,Ku=new WeakMap;function u0(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(on(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&_m.set(n,t)}).catch(()=>{}),Ku.set(e,t),e}function c0(t){if(La.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});La.set(t,e)}let ba={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return La.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ym.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return on(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function d0(t){ba=t(ba)}function f0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Rl(this),e,...n);return ym.set(r,e.sort?e.sort():[e]),on(r)}:a0().includes(t)?function(...e){return t.apply(Rl(this),e),on(_m.get(this))}:function(...e){return on(t.apply(Rl(this),e))}}function h0(t){return typeof t=="function"?f0(t):(t instanceof IDBTransaction&&c0(t),o0(t,l0())?new Proxy(t,ba):t)}function on(t){if(t instanceof IDBRequest)return u0(t);if(Tl.has(t))return Tl.get(t);const e=h0(t);return e!==t&&(Tl.set(t,e),Ku.set(e,t)),e}const Rl=t=>Ku.get(t);function p0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=on(o);return r&&o.addEventListener("upgradeneeded",a=>{r(on(o.result),a.oldVersion,a.newVersion,on(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const m0=["get","getKey","getAll","getAllKeys","count"],g0=["put","add","delete","clear"],Pl=new Map;function Xd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pl.get(e))return Pl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=g0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||m0.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Pl.set(e,s),s}d0(t=>({...t,get:(e,n,r)=>Xd(e,n)||t.get(e,n,r),has:(e,n)=>!!Xd(e,n)||t.has(e,n)}));/**
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
 */class _0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(y0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function y0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fa="@firebase/app",Jd="0.15.0";/**
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
 */const bt=new gm("@firebase/app"),v0="@firebase/app-compat",w0="@firebase/analytics-compat",C0="@firebase/analytics",E0="@firebase/app-check-compat",S0="@firebase/app-check",x0="@firebase/auth",k0="@firebase/auth-compat",I0="@firebase/database",N0="@firebase/data-connect",T0="@firebase/database-compat",R0="@firebase/functions",P0="@firebase/functions-compat",D0="@firebase/installations",A0="@firebase/installations-compat",O0="@firebase/messaging",M0="@firebase/messaging-compat",L0="@firebase/performance",b0="@firebase/performance-compat",F0="@firebase/remote-config",j0="@firebase/remote-config-compat",z0="@firebase/storage",U0="@firebase/storage-compat",B0="@firebase/firestore",W0="@firebase/ai",H0="@firebase/firestore-compat",$0="firebase",V0="12.15.0";/**
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
 */const ja="[DEFAULT]",G0={[Fa]:"fire-core",[v0]:"fire-core-compat",[C0]:"fire-analytics",[w0]:"fire-analytics-compat",[S0]:"fire-app-check",[E0]:"fire-app-check-compat",[x0]:"fire-auth",[k0]:"fire-auth-compat",[I0]:"fire-rtdb",[N0]:"fire-data-connect",[T0]:"fire-rtdb-compat",[R0]:"fire-fn",[P0]:"fire-fn-compat",[D0]:"fire-iid",[A0]:"fire-iid-compat",[O0]:"fire-fcm",[M0]:"fire-fcm-compat",[L0]:"fire-perf",[b0]:"fire-perf-compat",[F0]:"fire-rc",[j0]:"fire-rc-compat",[z0]:"fire-gcs",[U0]:"fire-gcs-compat",[B0]:"fire-fst",[H0]:"fire-fst-compat",[W0]:"fire-vertex","fire-js":"fire-js",[$0]:"fire-js-all"};/**
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
 */const fo=new Map,Q0=new Map,za=new Map;function Zd(t,e){try{t.container.addComponent(e)}catch(n){bt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ho(t){const e=t.name;if(za.has(e))return bt.debug(`There were multiple attempts to register component ${e}.`),!1;za.set(e,t);for(const n of fo.values())Zd(n,t);for(const n of Q0.values())Zd(n,t);return!0}function Y0(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function K0(t){return t==null?!1:t.settings!==void 0}/**
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
 */const q0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ln=new hm("app","Firebase",q0);/**
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
 */class X0{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new bi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ln.create("app-deleted",{appName:this._name})}}/**
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
 */const J0=V0;function vm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:ja,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw ln.create("bad-app-name",{appName:String(i)});if(n||(n=dm()),!n)throw ln.create("no-options");const s=fo.get(i);if(s){if(co(n,s.options)&&co(r,s.config))return s;throw ln.create("duplicate-app",{appName:i})}const o=new t0(i);for(const a of za.values())o.addComponent(a);const l=new X0(n,r,o);return fo.set(i,l),l}function Z0(t=ja){const e=fo.get(t);if(!e&&t===ja&&dm())return vm();if(!e)throw ln.create("no-app",{appName:t});return e}function _r(t,e,n){let r=G0[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bt.warn(o.join(" "));return}ho(new bi(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const ew="firebase-heartbeat-database",tw=1,Fi="firebase-heartbeat-store";let Dl=null;function wm(){return Dl||(Dl=p0(ew,tw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Fi)}catch(n){console.warn(n)}}}}).catch(t=>{throw ln.create("idb-open",{originalErrorMessage:t.message})})),Dl}async function nw(t){try{const n=(await wm()).transaction(Fi),r=await n.objectStore(Fi).get(Cm(t));return await n.done,r}catch(e){if(e instanceof Ki)bt.warn(e.message);else{const n=ln.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bt.warn(n.message)}}}async function ef(t,e){try{const r=(await wm()).transaction(Fi,"readwrite");await r.objectStore(Fi).put(e,Cm(t)),await r.done}catch(n){if(n instanceof Ki)bt.warn(n.message);else{const r=ln.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bt.warn(r.message)}}}function Cm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const rw=1024,iw=30;class sw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=tf();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>iw){const o=aw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){bt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=tf(),{heartbeatsToSend:r,unsentEntries:i}=ow(this._heartbeatsCache.heartbeats),s=ao(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return bt.warn(n),""}}}function tf(){return new Date().toISOString().substring(0,10)}function ow(t,e=rw){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),nf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),nf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class lw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bv()?Wv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ef(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ef(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function nf(t){return ao(JSON.stringify({version:2,heartbeats:t})).length}function aw(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function uw(t){ho(new bi("platform-logger",e=>new _0(e),"PRIVATE")),ho(new bi("heartbeat",e=>new sw(e),"PRIVATE")),_r(Fa,Jd,t),_r(Fa,Jd,"esm2020"),_r("fire-js","")}uw("");var rf={};const sf="@firebase/database",of="1.1.3";/**
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
 */let Em="";function cw(t){Em=t}/**
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
 */class dw{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ve(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Li(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class fw{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ut(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Sm=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new dw(e)}}catch{}return new fw},In=Sm("localStorage"),hw=Sm("sessionStorage");/**
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
 */const yr=new gm("@firebase/database"),pw=function(){let t=1;return function(){return t++}}(),xm=function(t){const e=qv(t),n=new Kv;n.update(e);const r=n.digest();return Qu.encodeByteArray(r)},Xi=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Xi.apply(null,r):typeof r=="object"?e+=ve(r):e+=r,e+=" "}return e};let fi=null,lf=!0;const mw=function(t,e){x(!0,"Can't turn on custom loggers persistently."),yr.logLevel=K.VERBOSE,fi=yr.log.bind(yr)},Te=function(...t){if(lf===!0&&(lf=!1,fi===null&&hw.get("logging_enabled")===!0&&mw()),fi){const e=Xi.apply(null,t);fi(e)}},Ji=function(t){return function(...e){Te(t,...e)}},Ua=function(...t){const e="FIREBASE INTERNAL ERROR: "+Xi(...t);yr.error(e)},Ft=function(...t){const e=`FIREBASE FATAL ERROR: ${Xi(...t)}`;throw yr.error(e),new Error(e)},He=function(...t){const e="FIREBASE WARNING: "+Xi(...t);yr.warn(e)},gw=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&He("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},km=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},_w=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Rr="[MIN_NAME]",Ln="[MAX_NAME]",br=function(t,e){if(t===e)return 0;if(t===Rr||e===Ln)return-1;if(e===Rr||t===Ln)return 1;{const n=af(t),r=af(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},yw=function(t,e){return t===e?0:t<e?-1:1},Yr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ve(e))},qu=function(t){if(typeof t!="object"||t===null)return ve(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ve(e[r]),n+=":",n+=qu(t[e[r]]);return n+="}",n},Im=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function $e(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Nm=function(t){x(!km(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const f=u.join("");let c="";for(a=0;a<64;a+=8){let d=parseInt(f.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),c=c+d}return c.toLowerCase()},vw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ww=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Cw(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const Ew=new RegExp("^-?(0*)\\d{1,10}$"),Sw=-2147483648,xw=2147483647,af=function(t){if(Ew.test(t)){const e=Number(t);if(e>=Sw&&e<=xw)return e}return null},Fr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw He("Exception was thrown by user callback.",n),e},Math.floor(0))}},kw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},hi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Iw{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,K0(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){He(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Nw{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Te("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',He(e)}}class Fs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Fs.OWNER="owner";/**
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
 */const Xu="5",Tm="v",Rm="s",Pm="r",Dm="f",Am=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Om="ls",Mm="p",Ba="ac",Lm="websocket",bm="long_polling";/**
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
 */class Fm{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1,u=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=In.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&In.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Tw(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function jm(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let r;if(e===Lm)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===bm)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Tw(t)&&(n.ns=t.namespace);const i=[];return $e(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class Rw{constructor(){this.counters_={}}incrementCounter(e,n=1){Ut(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Rv(this.counters_)}}/**
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
 */const Al={},Ol={};function Ju(t){const e=t.toString();return Al[e]||(Al[e]=new Rw),Al[e]}function Pw(t,e){const n=t.toString();return Ol[n]||(Ol[n]=e()),Ol[n]}/**
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
 */class Dw{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Fr(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const uf="start",Aw="close",Ow="pLPCommand",Mw="pRTLPCB",zm="id",Um="pw",Bm="ser",Lw="cb",bw="seg",Fw="ts",jw="d",zw="dframe",Wm=1870,Hm=30,Uw=Wm-Hm,Bw=25e3,Ww=3e4;class cr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ji(e),this.stats_=Ju(n),this.urlFn=a=>(this.appCheckToken&&(a[Ba]=this.appCheckToken),jm(n,bm,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Dw(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ww)),_w(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Zu((...s)=>{const[o,l,a,u,f]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===uf)this.id=l,this.password=a;else if(o===Aw)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[uf]="t",r[Bm]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Lw]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Tm]=Xu,this.transportSessionId&&(r[Rm]=this.transportSessionId),this.lastSessionId&&(r[Om]=this.lastSessionId),this.applicationId&&(r[Mm]=this.applicationId),this.appCheckToken&&(r[Ba]=this.appCheckToken),typeof location<"u"&&location.hostname&&Am.test(location.hostname)&&(r[Pm]=Dm);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){cr.forceAllow_=!0}static forceDisallow(){cr.forceDisallow_=!0}static isAvailable(){return cr.forceAllow_?!0:!cr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!vw()&&!ww()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=am(n),i=Im(r,Uw);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[zw]="t",r[zm]=e,r[Um]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ve(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Zu{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=pw(),window[Ow+this.uniqueCallbackIdentifier]=e,window[Mw+this.uniqueCallbackIdentifier]=n,this.myIFrame=Zu.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Te("frame writing exception"),l.stack&&Te(l.stack),Te(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Te("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[zm]=this.myID,e[Um]=this.myPW,e[Bm]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Hm+r.length<=Wm;){const o=this.pendingSegs.shift();r=r+"&"+bw+i+"="+o.seg+"&"+Fw+i+"="+o.ts+"&"+jw+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(Bw)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Te("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const Hw=16384,$w=45e3;let po=null;typeof MozWebSocket<"u"?po=MozWebSocket:typeof WebSocket<"u"&&(po=WebSocket);class at{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ji(this.connId),this.stats_=Ju(n),this.connURL=at.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Tm]=Xu,typeof location<"u"&&location.hostname&&Am.test(location.hostname)&&(o[Pm]=Dm),n&&(o[Rm]=n),r&&(o[Om]=r),i&&(o[Ba]=i),s&&(o[Mm]=s),jm(e,Lm,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,In.set("previous_websocket_failure",!0);try{let r;Uv(),this.mySock=new po(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){at.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&po!==null&&!at.forceDisallow_}static previouslyFailed(){return In.isInMemoryStorage||In.get("previous_websocket_failure")===!0}markConnectionHealthy(){In.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Li(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Im(n,Hw);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor($w))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}at.responsesRequiredToBeHealthy=2;at.healthyTimeout=3e4;/**
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
 */class ji{static get ALL_TRANSPORTS(){return[cr,at]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=at&&at.isAvailable();let r=n&&!at.previouslyFailed();if(e.webSocketOnly&&(n||He("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[at];else{const i=this.transports_=[];for(const s of ji.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ji.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ji.globalTransportInitialized_=!1;/**
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
 */const Vw=6e4,Gw=5e3,Qw=10*1024,Yw=100*1024,Ml="t",cf="d",Kw="s",df="r",qw="e",ff="o",hf="a",pf="n",mf="p",Xw="h";class Jw{constructor(e,n,r,i,s,o,l,a,u,f){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ji("c:"+this.id+":"),this.transportManager_=new ji(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=hi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Yw?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Qw?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ml in e){const n=e[Ml];n===hf?this.upgradeIfSecondaryHealthy_():n===df?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ff&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Yr("t",e),r=Yr("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:mf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:hf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:pf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Yr("t",e),r=Yr("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Yr(Ml,e);if(cf in e){const r=e[cf];if(n===Xw){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===pf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Kw?this.onConnectionShutdown_(r):n===df?this.onReset_(r):n===qw?Ua("Server Error: "+r):n===ff?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ua("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Xu!==r&&He("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),hi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Vw))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):hi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Gw))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:mf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(In.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class $m{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Vm{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class mo extends Vm{static getInstance(){return new mo}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!fm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const gf=32,_f=768;class Q{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function V(){return new Q("")}function j(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function dn(t){return t.pieces_.length-t.pieceNum_}function q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Q(t.pieces_,e)}function Gm(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Zw(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Qm(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Ym(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Q(e,0)}function pe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Q)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Q(n,0)}function U(t){return t.pieceNum_>=t.pieces_.length}function je(t,e){const n=j(t),r=j(e);if(n===null)return e;if(n===r)return je(q(t),q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ec(t,e){if(dn(t)!==dn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ut(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(dn(t)>dn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class e1{constructor(e,n){this.errorPrefix_=n,this.parts_=Qm(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=$o(this.parts_[r]);Km(this)}}function t1(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=$o(e),Km(t)}function n1(t){const e=t.parts_.pop();t.byteLength_-=$o(e),t.parts_.length>0&&(t.byteLength_-=1)}function Km(t){if(t.byteLength_>_f)throw new Error(t.errorPrefix_+"has a key path longer than "+_f+" bytes ("+t.byteLength_+").");if(t.parts_.length>gf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+gf+") or object contains a cycle "+En(t))}function En(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class tc extends Vm{static getInstance(){return new tc}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Kr=1e3,r1=60*5*1e3,yf=30*1e3,i1=1.3,s1=3e4,o1="server_kill",vf=3;class Dt extends $m{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Dt.nextPersistentConnectionId_++,this.log_=Ji("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Kr,this.maxReconnectDelay_=r1,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");tc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&mo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ve(s)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ho,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Dt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ut(e,"w")){const r=Tr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();He(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Qv(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=yf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Gv(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ve(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ua("Unrecognized action received from server: "+ve(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Kr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Kr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>s1&&(this.reconnectDelay_=Kr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*i1)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Dt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){x(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,d]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?Te("getToken() completed but was canceled"):(Te("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=d&&d.token,l=new Jw(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,y=>{He(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(o1)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&He(c),a())}}}interrupt(e){Te("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Te("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Qd(this.interruptReasons_)&&(this.reconnectDelay_=Kr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>qu(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Q(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Te("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=vf&&(this.reconnectDelay_=yf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Te("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=vf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Em.replace(/\./g,"-")]=1,fm()?e["framework.cordova"]=1:zv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=mo.getInstance().currentlyOnline();return Qd(this.interruptReasons_)&&e}}Dt.nextPersistentConnectionId_=0;Dt.nextConnectionId_=0;/**
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
 */class z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new z(e,n)}}/**
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
 */class Vo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new z(Rr,e),i=new z(Rr,n);return this.compare(r,i)!==0}minPost(){return z.MIN}}/**
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
 */let Ss;class qm extends Vo{static get __EMPTY_NODE(){return Ss}static set __EMPTY_NODE(e){Ss=e}compare(e,n){return br(e.name,n.name)}isDefinedOn(e){throw Lr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return z.MIN}maxPost(){return new z(Ln,Ss)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,Ss)}toString(){return".key"}}const vr=new qm;/**
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
 */class xs{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ye{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ye.RED,this.left=i??ze.EMPTY_NODE,this.right=s??ze.EMPTY_NODE}copy(e,n,r,i,s){return new ye(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ze.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return ze.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ye.RED=!0;ye.BLACK=!1;class l1{copy(e,n,r,i,s){return this}insert(e,n,r){return new ye(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ze{constructor(e,n=ze.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ze(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ye.BLACK,null,null))}remove(e){return new ze(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ye.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new xs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new xs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new xs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new xs(this.root_,null,this.comparator_,!0,e)}}ze.EMPTY_NODE=new l1;/**
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
 */function a1(t,e){return br(t.name,e.name)}function nc(t,e){return br(t,e)}/**
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
 */let Wa;function u1(t){Wa=t}const Xm=function(t){return typeof t=="number"?"number:"+Nm(t):"string:"+t},Jm=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ut(e,".sv"),"Priority must be a string or number.")}else x(t===Wa||t.isEmpty(),"priority of unexpected type.");x(t===Wa||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let wf;class ge{static set __childrenNodeConstructor(e){wf=e}static get __childrenNodeConstructor(){return wf}constructor(e,n=ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Jm(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:j(e)===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=j(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(x(r!==".priority"||dn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xm(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Nm(this.value_):e+=this.value_,this.lazyHash_=xm(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ge.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ge.VALUE_TYPE_ORDER.indexOf(n),s=ge.VALUE_TYPE_ORDER.indexOf(r);return x(i>=0,"Unknown leaf type: "+n),x(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Zm,eg;function c1(t){Zm=t}function d1(t){eg=t}class f1 extends Vo{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?br(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return z.MIN}maxPost(){return new z(Ln,new ge("[PRIORITY-POST]",eg))}makePost(e,n){const r=Zm(e);return new z(n,new ge("[PRIORITY-POST]",r))}toString(){return".priority"}}const ae=new f1;/**
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
 */const h1=Math.log(2);class p1{constructor(e){const n=s=>parseInt(Math.log(s)/h1,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const go=function(t,e,n,r){t.sort(e);const i=function(a,u){const f=u-a;let c,d;if(f===0)return null;if(f===1)return c=t[a],d=n?n(c):c,new ye(d,c.node,ye.BLACK,null,null);{const y=parseInt(f/2,10)+a,v=i(a,y),w=i(y+1,u);return c=t[y],d=n?n(c):c,new ye(d,c.node,ye.BLACK,v,w)}},s=function(a){let u=null,f=null,c=t.length;const d=function(v,w){const L=c-v,m=c;c-=v;const h=i(L+1,m),_=t[L],C=n?n(_):_;y(new ye(C,_.node,w,null,h))},y=function(v){u?(u.left=v,u=v):(f=v,u=v)};for(let v=0;v<a.count;++v){const w=a.nextBitIsOne(),L=Math.pow(2,a.count-(v+1));w?d(L,ye.BLACK):(d(L,ye.BLACK),d(L,ye.RED))}return f},o=new p1(t.length),l=s(o);return new ze(r||e,l)};/**
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
 */let Ll;const Xn={};class Rt{static get Default(){return x(Xn&&ae,"ChildrenNode.ts has not been loaded"),Ll=Ll||new Rt({".priority":Xn},{".priority":ae}),Ll}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Tr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ze?n:null}hasIndex(e){return Ut(this.indexSet_,e.toString())}addIndex(e,n){x(e!==vr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(z.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=go(r,e.getCompare()):l=Xn;const a=e.toString(),u={...this.indexSet_};u[a]=e;const f={...this.indexes_};return f[a]=l,new Rt(f,u)}addToIndexes(e,n){const r=uo(this.indexes_,(i,s)=>{const o=Tr(this.indexSet_,s);if(x(o,"Missing index implementation for "+s),i===Xn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(z.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),go(l,o.getCompare())}else return Xn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new z(e.name,l))),a.insert(e,e.node)}});return new Rt(r,this.indexSet_)}removeFromIndexes(e,n){const r=uo(this.indexes_,i=>{if(i===Xn)return i;{const s=n.get(e.name);return s?i.remove(new z(e.name,s)):i}});return new Rt(r,this.indexSet_)}}/**
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
 */let qr;class O{static get EMPTY_NODE(){return qr||(qr=new O(new ze(nc),null,Rt.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Jm(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||qr}updatePriority(e){return this.children_.isEmpty()?this:new O(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?qr:n}}getChild(e){const n=j(e);return n===null?this:this.getImmediateChild(n).getChild(q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new z(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?qr:this.priorityNode_;return new O(i,o,s)}}updateChild(e,n){const r=j(e);if(r===null)return n;{x(j(e)!==".priority"||dn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(q(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ae,(o,l)=>{n[o]=l.val(e),r++,s&&O.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xm(this.getPriority().val())+":"),this.forEachChild(ae,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":xm(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new z(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new z(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Zi?-1:0}withIndex(e){if(e===vr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new O(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===vr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ae),i=n.getIterator(ae);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===vr?null:this.indexMap_.get(e.toString())}}O.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class m1 extends O{constructor(){super(new ze(nc),O.EMPTY_NODE,Rt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return O.EMPTY_NODE}isEmpty(){return!1}}const Zi=new m1;Object.defineProperties(z,{MIN:{value:new z(Rr,O.EMPTY_NODE)},MAX:{value:new z(Ln,Zi)}});qm.__EMPTY_NODE=O.EMPTY_NODE;ge.__childrenNodeConstructor=O;u1(Zi);d1(Zi);/**
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
 */const g1=!0;function Ee(t,e=null){if(t===null)return O.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ge(n,Ee(e))}if(!(t instanceof Array)&&g1){const n=[];let r=!1;if($e(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Ee(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new z(o,a)))}}),n.length===0)return O.EMPTY_NODE;const s=go(n,a1,o=>o.name,nc);if(r){const o=go(n,ae.getCompare());return new O(s,Ee(e),new Rt({".priority":o},{".priority":ae}))}else return new O(s,Ee(e),Rt.Default)}else{let n=O.EMPTY_NODE;return $e(t,(r,i)=>{if(Ut(t,r)&&r.substring(0,1)!=="."){const s=Ee(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ee(e))}}c1(Ee);/**
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
 */class _1 extends Vo{constructor(e){super(),this.indexPath_=e,x(!U(e)&&j(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?br(e.name,n.name):s}makePost(e,n){const r=Ee(e),i=O.EMPTY_NODE.updateChild(this.indexPath_,r);return new z(n,i)}maxPost(){const e=O.EMPTY_NODE.updateChild(this.indexPath_,Zi);return new z(Ln,e)}toString(){return Qm(this.indexPath_,0).join("/")}}/**
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
 */class y1 extends Vo{compare(e,n){const r=e.node.compareTo(n.node);return r===0?br(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,n){const r=Ee(e);return new z(n,r)}toString(){return".value"}}const v1=new y1;/**
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
 */function tg(t){return{type:"value",snapshotNode:t}}function Pr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function zi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ui(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function w1(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class rc{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){x(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(zi(n,l)):x(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Pr(n,r)):o.trackChildChange(Ui(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ae,(i,s)=>{n.hasChild(i)||r.trackChildChange(zi(i,s))}),n.isLeafNode()||n.forEachChild(ae,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Ui(i,s,o))}else r.trackChildChange(Pr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?O.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Bi{constructor(e){this.indexedFilter_=new rc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Bi.getStartPost_(e),this.endPost_=Bi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new z(n,r))||(r=O.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=O.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(O.EMPTY_NODE);const s=this;return n.forEachChild(ae,(o,l)=>{s.matches(new z(o,l))||(i=i.updateImmediateChild(o,O.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class C1{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Bi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new z(n,r))||(r=O.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=O.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=O.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(O.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,O.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(d,y)=>c(y,d)}else o=this.index_.getCompare();const l=e;x(l.numChildren()===this.limit_,"");const a=new z(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),f=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const y=d==null?1:o(d,a);if(f&&!r.isEmpty()&&y>=0)return s!=null&&s.trackChildChange(Ui(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(zi(n,c));const w=l.updateImmediateChild(n,O.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(Pr(d.name,d.node)),w.updateImmediateChild(d.name,d.node)):w}}else return r.isEmpty()?e:f&&o(u,a)>=0?(s!=null&&(s.trackChildChange(zi(u.name,u.node)),s.trackChildChange(Pr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,O.EMPTY_NODE)):e}}/**
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
 */class ic{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ae}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Rr}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ln}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ae}copy(){const e=new ic;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function E1(t){return t.loadsAllData()?new rc(t.getIndex()):t.hasLimit()?new C1(t):new Bi(t)}function Cf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ae?n="$priority":t.index_===v1?n="$value":t.index_===vr?n="$key":(x(t.index_ instanceof _1,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ve(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ve(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ve(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ve(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ve(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ef(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ae&&(e.i=t.index_.toString()),e}/**
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
 */class _o extends $m{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ji("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=_o.getListenId_(e,r),l={};this.listens_[o]=l;const a=Cf(e._queryParams);this.restRequest_(s+".json",a,(u,f)=>{let c=f;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Tr(this.listens_,o)===l){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=_o.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Cf(e._queryParams),r=e._path.toString(),i=new Ho;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Yv(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Li(l.responseText)}catch{He("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&He("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class S1{constructor(){this.rootNode_=O.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function yo(){return{value:null,children:new Map}}function ng(t,e,n){if(U(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=j(e);t.children.has(r)||t.children.set(r,yo());const i=t.children.get(r);e=q(e),ng(i,e,n)}}function Ha(t,e,n){t.value!==null?n(e,t.value):x1(t,(r,i)=>{const s=new Q(e.toString()+"/"+r);Ha(i,s,n)})}function x1(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class k1{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&$e(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Sf=10*1e3,I1=30*1e3,N1=5*60*1e3;class T1{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new k1(e);const r=Sf+(I1-Sf)*Math.random();hi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;$e(e,(i,s)=>{s>0&&Ut(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),hi(this.reportStats_.bind(this),Math.floor(Math.random()*2*N1))}}/**
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
 */var ct;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ct||(ct={}));function rg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function sc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function oc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class vo{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=ct.ACK_USER_WRITE,this.source=rg()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Q(e));return new vo(V(),n,this.revert)}}else return x(j(this.path)===e,"operationForChild called for unrelated child."),new vo(q(this.path),this.affectedTree,this.revert)}}/**
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
 */class Wi{constructor(e,n){this.source=e,this.path=n,this.type=ct.LISTEN_COMPLETE}operationForChild(e){return U(this.path)?new Wi(this.source,V()):new Wi(this.source,q(this.path))}}/**
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
 */class bn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=ct.OVERWRITE}operationForChild(e){return U(this.path)?new bn(this.source,V(),this.snap.getImmediateChild(e)):new bn(this.source,q(this.path),this.snap)}}/**
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
 */class Hi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=ct.MERGE}operationForChild(e){if(U(this.path)){const n=this.children.subtree(new Q(e));return n.isEmpty()?null:n.value?new bn(this.source,V(),n.value):new Hi(this.source,V(),n)}else return x(j(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Hi(this.source,q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Fn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const n=j(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class R1{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function P1(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(w1(o.childName,o.snapshotNode))}),Xr(t,i,"child_removed",e,r,n),Xr(t,i,"child_added",e,r,n),Xr(t,i,"child_moved",s,r,n),Xr(t,i,"child_changed",e,r,n),Xr(t,i,"value",e,r,n),i}function Xr(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>A1(t,l,a)),o.forEach(l=>{const a=D1(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function D1(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function A1(t,e,n){if(e.childName==null||n.childName==null)throw Lr("Should only compare child_ events.");const r=new z(e.childName,e.snapshotNode),i=new z(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Go(t,e){return{eventCache:t,serverCache:e}}function pi(t,e,n,r){return Go(new Fn(e,n,r),t.serverCache)}function ig(t,e,n,r){return Go(t.eventCache,new Fn(e,n,r))}function $a(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function jn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let bl;const O1=()=>(bl||(bl=new ze(yw)),bl);class ee{static fromObject(e){let n=new ee(null);return $e(e,(r,i)=>{n=n.set(new Q(r),i)}),n}constructor(e,n=O1()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:V(),value:this.value};if(U(e))return null;{const r=j(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(q(e),n);return s!=null?{path:pe(new Q(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const n=j(e),r=this.children.get(n);return r!==null?r.subtree(q(e)):new ee(null)}}set(e,n){if(U(e))return new ee(n,this.children);{const r=j(e),s=(this.children.get(r)||new ee(null)).set(q(e),n),o=this.children.insert(r,s);return new ee(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new ee(null):new ee(null,this.children);{const n=j(e),r=this.children.get(n);if(r){const i=r.remove(q(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ee(null):new ee(this.value,s)}else return this}}get(e){if(U(e))return this.value;{const n=j(e),r=this.children.get(n);return r?r.get(q(e)):null}}setTree(e,n){if(U(e))return n;{const r=j(e),s=(this.children.get(r)||new ee(null)).setTree(q(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ee(this.value,o)}}fold(e){return this.fold_(V(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(pe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,V(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(U(e))return null;{const s=j(e),o=this.children.get(s);return o?o.findOnPath_(q(e),pe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,V(),n)}foreachOnPath_(e,n,r){if(U(e))return this;{this.value&&r(n,this.value);const i=j(e),s=this.children.get(i);return s?s.foreachOnPath_(q(e),pe(n,i),r):new ee(null)}}foreach(e){this.foreach_(V(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(pe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class ht{constructor(e){this.writeTree_=e}static empty(){return new ht(new ee(null))}}function mi(t,e,n){if(U(e))return new ht(new ee(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=je(i,e);return s=s.updateChild(o,n),new ht(t.writeTree_.set(i,s))}else{const i=new ee(n),s=t.writeTree_.setTree(e,i);return new ht(s)}}}function xf(t,e,n){let r=t;return $e(n,(i,s)=>{r=mi(r,pe(e,i),s)}),r}function kf(t,e){if(U(e))return ht.empty();{const n=t.writeTree_.setTree(e,new ee(null));return new ht(n)}}function Va(t,e){return Bn(t,e)!=null}function Bn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(je(n.path,e)):null}function If(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ae,(r,i)=>{e.push(new z(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new z(r,i.value))}),e}function an(t,e){if(U(e))return t;{const n=Bn(t,e);return n!=null?new ht(new ee(n)):new ht(t.writeTree_.subtree(e))}}function Ga(t){return t.writeTree_.isEmpty()}function Dr(t,e){return sg(V(),t.writeTree_,e)}function sg(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(x(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=sg(pe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(pe(t,".priority"),r)),n}}/**
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
 */function lc(t,e){return ug(e,t)}function M1(t,e,n,r,i){x(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=mi(t.visibleWrites,e,n)),t.lastWriteId=r}function L1(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function b1(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&F1(l,r.path)?i=!1:ut(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return j1(t),!0;if(r.snap)t.visibleWrites=kf(t.visibleWrites,r.path);else{const l=r.children;$e(l,a=>{t.visibleWrites=kf(t.visibleWrites,pe(r.path,a))})}return!0}else return!1}function F1(t,e){if(t.snap)return ut(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ut(pe(t.path,n),e))return!0;return!1}function j1(t){t.visibleWrites=og(t.allWrites,z1,V()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function z1(t){return t.visible}function og(t,e,n){let r=ht.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)ut(n,o)?(l=je(n,o),r=mi(r,l,s.snap)):ut(o,n)&&(l=je(o,n),r=mi(r,V(),s.snap.getChild(l)));else if(s.children){if(ut(n,o))l=je(n,o),r=xf(r,l,s.children);else if(ut(o,n))if(l=je(o,n),U(l))r=xf(r,V(),s.children);else{const a=Tr(s.children,j(l));if(a){const u=a.getChild(q(l));r=mi(r,V(),u)}}}else throw Lr("WriteRecord should have .snap or .children")}}return r}function lg(t,e,n,r,i){if(!r&&!i){const s=Bn(t.visibleWrites,e);if(s!=null)return s;{const o=an(t.visibleWrites,e);if(Ga(o))return n;if(n==null&&!Va(o,V()))return null;{const l=n||O.EMPTY_NODE;return Dr(o,l)}}}else{const s=an(t.visibleWrites,e);if(!i&&Ga(s))return n;if(!i&&n==null&&!Va(s,V()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(ut(u.path,e)||ut(e,u.path))},l=og(t.allWrites,o,e),a=n||O.EMPTY_NODE;return Dr(l,a)}}}function U1(t,e,n){let r=O.EMPTY_NODE;const i=Bn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ae,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=an(t.visibleWrites,e);return n.forEachChild(ae,(o,l)=>{const a=Dr(an(s,new Q(o)),l);r=r.updateImmediateChild(o,a)}),If(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=an(t.visibleWrites,e);return If(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function B1(t,e,n,r,i){x(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=pe(e,n);if(Va(t.visibleWrites,s))return null;{const o=an(t.visibleWrites,s);return Ga(o)?i.getChild(n):Dr(o,i.getChild(n))}}function W1(t,e,n,r){const i=pe(e,n),s=Bn(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=an(t.visibleWrites,i);return Dr(o,r.getNode().getImmediateChild(n))}else return null}function H1(t,e){return Bn(t.visibleWrites,e)}function $1(t,e,n,r,i,s,o){let l;const a=an(t.visibleWrites,e),u=Bn(a,V());if(u!=null)l=u;else if(n!=null)l=Dr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const f=[],c=o.getCompare(),d=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let y=d.getNext();for(;y&&f.length<i;)c(y,r)!==0&&f.push(y),y=d.getNext();return f}else return[]}function V1(){return{visibleWrites:ht.empty(),allWrites:[],lastWriteId:-1}}function wo(t,e,n,r){return lg(t.writeTree,t.treePath,e,n,r)}function ac(t,e){return U1(t.writeTree,t.treePath,e)}function Nf(t,e,n,r){return B1(t.writeTree,t.treePath,e,n,r)}function Co(t,e){return H1(t.writeTree,pe(t.treePath,e))}function G1(t,e,n,r,i,s){return $1(t.writeTree,t.treePath,e,n,r,i,s)}function uc(t,e,n){return W1(t.writeTree,t.treePath,e,n)}function ag(t,e){return ug(pe(t.treePath,e),t.writeTree)}function ug(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Q1{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Ui(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,zi(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Pr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Ui(r,e.snapshotNode,i.oldSnap));else throw Lr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Y1{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const cg=new Y1;class cc{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Fn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return uc(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:jn(this.viewCache_),s=G1(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function K1(t){return{filter:t}}function q1(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function X1(t,e,n,r,i){const s=new Q1;let o,l;if(n.type===ct.OVERWRITE){const u=n;u.source.fromUser?o=Qa(t,e,u.path,u.snap,r,i,s):(x(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!U(u.path),o=Eo(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===ct.MERGE){const u=n;u.source.fromUser?o=Z1(t,e,u.path,u.children,r,i,s):(x(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Ya(t,e,u.path,u.children,r,i,l,s))}else if(n.type===ct.ACK_USER_WRITE){const u=n;u.revert?o=nC(t,e,u.path,r,i,s):o=eC(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===ct.LISTEN_COMPLETE)o=tC(t,e,n.path,r,s);else throw Lr("Unknown operation type: "+n.type);const a=s.getChanges();return J1(e,o,a),{viewCache:o,changes:a}}function J1(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=$a(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(tg($a(e)))}}function dg(t,e,n,r,i,s){const o=e.eventCache;if(Co(r,n)!=null)return e;{let l,a;if(U(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=jn(e),f=u instanceof O?u:O.EMPTY_NODE,c=ac(r,f);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=wo(r,jn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=j(n);if(u===".priority"){x(dn(n)===1,"Can't have a priority with additional path components");const f=o.getNode();a=e.serverCache.getNode();const c=Nf(r,n,f,a);c!=null?l=t.filter.updatePriority(f,c):l=o.getNode()}else{const f=q(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const d=Nf(r,n,o.getNode(),a);d!=null?c=o.getNode().getImmediateChild(u).updateChild(f,d):c=o.getNode().getImmediateChild(u)}else c=uc(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,f,i,s):l=o.getNode()}}return pi(e,l,o.isFullyInitialized()||U(n),t.filter.filtersNodes())}}function Eo(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const f=o?t.filter:t.filter.getIndexedFilter();if(U(n))u=f.updateFullNode(a.getNode(),r,null);else if(f.filtersNodes()&&!a.isFiltered()){const y=a.getNode().updateChild(n,r);u=f.updateFullNode(a.getNode(),y,null)}else{const y=j(n);if(!a.isCompleteForPath(n)&&dn(n)>1)return e;const v=q(n),L=a.getNode().getImmediateChild(y).updateChild(v,r);y===".priority"?u=f.updatePriority(a.getNode(),L):u=f.updateChild(a.getNode(),y,L,v,cg,null)}const c=ig(e,u,a.isFullyInitialized()||U(n),f.filtersNodes()),d=new cc(i,c,s);return dg(t,c,n,i,d,l)}function Qa(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const f=new cc(i,e,s);if(U(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=pi(e,u,!0,t.filter.filtersNodes());else{const c=j(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=pi(e,u,l.isFullyInitialized(),l.isFiltered());else{const d=q(n),y=l.getNode().getImmediateChild(c);let v;if(U(d))v=r;else{const w=f.getCompleteChild(c);w!=null?Gm(d)===".priority"&&w.getChild(Ym(d)).isEmpty()?v=w:v=w.updateChild(d,r):v=O.EMPTY_NODE}if(y.equals(v))a=e;else{const w=t.filter.updateChild(l.getNode(),c,v,d,f,o);a=pi(e,w,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Tf(t,e){return t.eventCache.isCompleteForChild(e)}function Z1(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const f=pe(n,a);Tf(e,j(f))&&(l=Qa(t,l,f,u,i,s,o))}),r.foreach((a,u)=>{const f=pe(n,a);Tf(e,j(f))||(l=Qa(t,l,f,u,i,s,o))}),l}function Rf(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Ya(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;U(n)?u=r:u=new ee(null).setTree(n,r);const f=e.serverCache.getNode();return u.children.inorderTraversal((c,d)=>{if(f.hasChild(c)){const y=e.serverCache.getNode().getImmediateChild(c),v=Rf(t,y,d);a=Eo(t,a,new Q(c),v,i,s,o,l)}}),u.children.inorderTraversal((c,d)=>{const y=!e.serverCache.isCompleteForChild(c)&&d.value===null;if(!f.hasChild(c)&&!y){const v=e.serverCache.getNode().getImmediateChild(c),w=Rf(t,v,d);a=Eo(t,a,new Q(c),w,i,s,o,l)}}),a}function eC(t,e,n,r,i,s,o){if(Co(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(U(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Eo(t,e,n,a.getNode().getChild(n),i,s,l,o);if(U(n)){let u=new ee(null);return a.getNode().forEachChild(vr,(f,c)=>{u=u.set(new Q(f),c)}),Ya(t,e,n,u,i,s,l,o)}else return e}else{let u=new ee(null);return r.foreach((f,c)=>{const d=pe(n,f);a.isCompleteForPath(d)&&(u=u.set(f,a.getNode().getChild(d)))}),Ya(t,e,n,u,i,s,l,o)}}function tC(t,e,n,r,i){const s=e.serverCache,o=ig(e,s.getNode(),s.isFullyInitialized()||U(n),s.isFiltered());return dg(t,o,n,r,cg,i)}function nC(t,e,n,r,i,s){let o;if(Co(r,n)!=null)return e;{const l=new cc(r,e,i),a=e.eventCache.getNode();let u;if(U(n)||j(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=wo(r,jn(e));else{const c=e.serverCache.getNode();x(c instanceof O,"serverChildren would be complete if leaf node"),f=ac(r,c)}f=f,u=t.filter.updateFullNode(a,f,s)}else{const f=j(n);let c=uc(r,f,e.serverCache);c==null&&e.serverCache.isCompleteForChild(f)&&(c=a.getImmediateChild(f)),c!=null?u=t.filter.updateChild(a,f,c,q(n),l,s):e.eventCache.getNode().hasChild(f)?u=t.filter.updateChild(a,f,O.EMPTY_NODE,q(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=wo(r,jn(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Co(r,V())!=null,pi(e,u,o,t.filter.filtersNodes())}}/**
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
 */class rC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new rc(r.getIndex()),s=E1(r);this.processor_=K1(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(O.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(O.EMPTY_NODE,l.getNode(),null),f=new Fn(a,o.isFullyInitialized(),i.filtersNodes()),c=new Fn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Go(c,f),this.eventGenerator_=new R1(this.query_)}get query(){return this.query_}}function iC(t){return t.viewCache_.serverCache.getNode()}function sC(t,e){const n=jn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!U(e)&&!n.getImmediateChild(j(e)).isEmpty())?n.getChild(e):null}function Pf(t){return t.eventRegistrations_.length===0}function oC(t,e){t.eventRegistrations_.push(e)}function Df(t,e,n){const r=[];if(n){x(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Af(t,e,n,r){e.type===ct.MERGE&&e.source.queryId!==null&&(x(jn(t.viewCache_),"We should always have a full cache before handling merges"),x($a(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=X1(t.processor_,i,e,n,r);return q1(t.processor_,s.viewCache),x(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,fg(t,s.changes,s.viewCache.eventCache.getNode(),null)}function lC(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ae,(s,o)=>{r.push(Pr(s,o))}),n.isFullyInitialized()&&r.push(tg(n.getNode())),fg(t,r,n.getNode(),e)}function fg(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return P1(t.eventGenerator_,e,n,i)}/**
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
 */let So;class aC{constructor(){this.views=new Map}}function uC(t){x(!So,"__referenceConstructor has already been defined"),So=t}function cC(){return x(So,"Reference.ts has not been loaded"),So}function dC(t){return t.views.size===0}function dc(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return x(s!=null,"SyncTree gave us an op for an invalid query."),Af(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Af(o,e,n,r));return s}}function fC(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=wo(n,i?r:null),a=!1;l?a=!0:r instanceof O?(l=ac(n,r),a=!1):(l=O.EMPTY_NODE,a=!1);const u=Go(new Fn(l,a,!1),new Fn(r,i,!1));return new rC(e,u)}return o}function hC(t,e,n,r,i,s){const o=fC(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),oC(o,n),lC(o,n)}function pC(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=fn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Df(u,n,r)),Pf(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Df(a,n,r)),Pf(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!fn(t)&&s.push(new(cC())(e._repo,e._path)),{removed:s,events:o}}function hg(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function wr(t,e){let n=null;for(const r of t.views.values())n=n||sC(r,e);return n}function pg(t,e){if(e._queryParams.loadsAllData())return Qo(t);{const r=e._queryIdentifier;return t.views.get(r)}}function mg(t,e){return pg(t,e)!=null}function fn(t){return Qo(t)!=null}function Qo(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let xo;function mC(t){x(!xo,"__referenceConstructor has already been defined"),xo=t}function gC(){return x(xo,"Reference.ts has not been loaded"),xo}let _C=1;class Of{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ee(null),this.pendingWriteTree_=V1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function gg(t,e,n,r,i){return M1(t.pendingWriteTree_,e,n,r,i),i?es(t,new bn(rg(),e,n)):[]}function Nn(t,e,n=!1){const r=L1(t.pendingWriteTree_,e);if(b1(t.pendingWriteTree_,e)){let s=new ee(null);return r.snap!=null?s=s.set(V(),!0):$e(r.children,o=>{s=s.set(new Q(o),!0)}),es(t,new vo(r.path,s,n))}else return[]}function Yo(t,e,n){return es(t,new bn(sc(),e,n))}function yC(t,e,n){const r=ee.fromObject(n);return es(t,new Hi(sc(),e,r))}function vC(t,e){return es(t,new Wi(sc(),e))}function wC(t,e,n){const r=hc(t,n);if(r){const i=pc(r),s=i.path,o=i.queryId,l=je(s,e),a=new Wi(oc(o),l);return mc(t,s,a)}else return[]}function Ka(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||mg(o,e))){const a=pC(o,e,n,r);dC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const f=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(d,y)=>fn(y));if(f&&!c){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const y=SC(d);for(let v=0;v<y.length;++v){const w=y[v],L=w.query,m=vg(t,w);t.listenProvider_.startListening(gi(L),ko(t,L),m.hashFn,m.onComplete)}}}!c&&u.length>0&&!r&&(f?t.listenProvider_.stopListening(gi(e),null):u.forEach(d=>{const y=t.queryToTagMap.get(Ko(d));t.listenProvider_.stopListening(gi(d),y)}))}xC(t,u)}return l}function CC(t,e,n,r){const i=hc(t,r);if(i!=null){const s=pc(i),o=s.path,l=s.queryId,a=je(o,e),u=new bn(oc(l),a,n);return mc(t,o,u)}else return[]}function EC(t,e,n,r){const i=hc(t,r);if(i){const s=pc(i),o=s.path,l=s.queryId,a=je(o,e),u=ee.fromObject(n),f=new Hi(oc(l),a,u);return mc(t,o,f)}else return[]}function Mf(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,y)=>{const v=je(d,i);s=s||wr(y,v),o=o||fn(y)});let l=t.syncPointTree_.get(i);l?(o=o||fn(l),s=s||wr(l,V())):(l=new aC,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=O.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((y,v)=>{const w=wr(v,V());w&&(s=s.updateImmediateChild(y,w))}));const u=mg(l,e);if(!u&&!e._queryParams.loadsAllData()){const d=Ko(e);x(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const y=kC();t.queryToTagMap.set(d,y),t.tagToQueryMap.set(y,d)}const f=lc(t.pendingWriteTree_,i);let c=hC(l,e,n,f,s,a);if(!u&&!o&&!r){const d=pg(l,e);c=c.concat(IC(t,e,d))}return c}function fc(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=je(o,e),u=wr(l,a);if(u)return u});return lg(i,e,s,n,!0)}function es(t,e){return _g(e,t.syncPointTree_,null,lc(t.pendingWriteTree_,V()))}function _g(t,e,n,r){if(U(t.path))return yg(t,e,n,r);{const i=e.get(V());n==null&&i!=null&&(n=wr(i,V()));let s=[];const o=j(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,f=ag(r,o);s=s.concat(_g(l,a,u,f))}return i&&(s=s.concat(dc(i,t,r,n))),s}}function yg(t,e,n,r){const i=e.get(V());n==null&&i!=null&&(n=wr(i,V()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=ag(r,o),f=t.operationForChild(o);f&&(s=s.concat(yg(f,l,a,u)))}),i&&(s=s.concat(dc(i,t,r,n))),s}function vg(t,e){const n=e.query,r=ko(t,n);return{hashFn:()=>(iC(e)||O.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?wC(t,n._path,r):vC(t,n._path);{const s=Cw(i,n);return Ka(t,n,null,s)}}}}function ko(t,e){const n=Ko(e);return t.queryToTagMap.get(n)}function Ko(t){return t._path.toString()+"$"+t._queryIdentifier}function hc(t,e){return t.tagToQueryMap.get(e)}function pc(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Q(t.substr(0,e))}}function mc(t,e,n){const r=t.syncPointTree_.get(e);x(r,"Missing sync point for query tag that we're tracking");const i=lc(t.pendingWriteTree_,e);return dc(r,n,i,null)}function SC(t){return t.fold((e,n,r)=>{if(n&&fn(n))return[Qo(n)];{let i=[];return n&&(i=hg(n)),$e(r,(s,o)=>{i=i.concat(o)}),i}})}function gi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(gC())(t._repo,t._path):t}function xC(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Ko(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function kC(){return _C++}function IC(t,e,n){const r=e._path,i=ko(t,e),s=vg(t,n),o=t.listenProvider_.startListening(gi(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)x(!fn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,f,c)=>{if(!U(u)&&f&&fn(f))return[Qo(f).query];{let d=[];return f&&(d=d.concat(hg(f).map(y=>y.query))),$e(c,(y,v)=>{d=d.concat(v)}),d}});for(let u=0;u<a.length;++u){const f=a[u];t.listenProvider_.stopListening(gi(f),ko(t,f))}}return o}/**
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
 */class gc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new gc(n)}node(){return this.node_}}class _c{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=pe(this.path_,e);return new _c(this.syncTree_,n)}node(){return fc(this.syncTree_,this.path_)}}const NC=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Lf=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return TC(t[".sv"],e,n);if(typeof t[".sv"]=="object")return RC(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},TC=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},RC=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&x(!1,"Unexpected increment value: "+r);const i=e.node();if(x(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},PC=function(t,e,n,r){return yc(e,new _c(n,t),r)},wg=function(t,e,n){return yc(t,new gc(e),n)};function yc(t,e,n){const r=t.getPriority().val(),i=Lf(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Lf(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ge(l,Ee(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ge(i))),o.forEachChild(ae,(l,a)=>{const u=yc(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class vc{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function wc(t,e){let n=e instanceof Q?e:new Q(e),r=t,i=j(n);for(;i!==null;){const s=Tr(r.node.children,i)||{children:{},childCount:0};r=new vc(i,r,s),n=q(n),i=j(n)}return r}function jr(t){return t.node.value}function Cg(t,e){t.node.value=e,qa(t)}function Eg(t){return t.node.childCount>0}function DC(t){return jr(t)===void 0&&!Eg(t)}function qo(t,e){$e(t.node.children,(n,r)=>{e(new vc(n,t,r))})}function Sg(t,e,n,r){n&&e(t),qo(t,i=>{Sg(i,e,!0)})}function AC(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ts(t){return new Q(t.parent===null?t.name:ts(t.parent)+"/"+t.name)}function qa(t){t.parent!==null&&OC(t.parent,t.name,t)}function OC(t,e,n){const r=DC(n),i=Ut(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,qa(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,qa(t))}/**
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
 */const MC=/[\[\].#$\/\u0000-\u001F\u007F]/,LC=/[\[\].#$\u0000-\u001F\u007F]/,Fl=10*1024*1024,xg=function(t){return typeof t=="string"&&t.length!==0&&!MC.test(t)},kg=function(t){return typeof t=="string"&&t.length!==0&&!LC.test(t)},bC=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),kg(t)},FC=function(t,e,n,r){Cc(Yu(t,"value"),e,n)},Cc=function(t,e,n){const r=n instanceof Q?new e1(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+En(r));if(typeof e=="function")throw new Error(t+"contains a function "+En(r)+" with contents = "+e.toString());if(km(e))throw new Error(t+"contains "+e.toString()+" "+En(r));if(typeof e=="string"&&e.length>Fl/3&&$o(e)>Fl)throw new Error(t+"contains a string greater than "+Fl+" utf8 bytes "+En(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if($e(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!xg(o)))throw new Error(t+" contains an invalid key ("+o+") "+En(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);t1(r,o),Cc(t,l,r),n1(r)}),i&&s)throw new Error(t+' contains ".value" child '+En(r)+" in addition to actual children.")}},Ig=function(t,e,n,r){if(!kg(n))throw new Error(Yu(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},jC=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ig(t,e,n)},zC=function(t,e){if(j(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},UC=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!xg(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!bC(n))throw new Error(Yu(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class BC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ec(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!ec(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ng(t,e,n){Ec(t,n),Tg(t,r=>ec(r,e))}function jt(t,e,n){Ec(t,n),Tg(t,r=>ut(r,e)||ut(e,r))}function Tg(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(WC(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function WC(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();fi&&Te("event: "+n.toString()),Fr(r)}}}/**
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
 */const HC="repo_interrupt",$C=25;class VC{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new BC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=yo(),this.transactionQueueTree_=new vc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function GC(t,e,n){if(t.stats_=Ju(t.repoInfo_),t.forceRestClient_||kw())t.server_=new _o(t.repoInfo_,(r,i,s,o)=>{bf(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ff(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ve(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Dt(t.repoInfo_,e,(r,i,s,o)=>{bf(t,r,i,s,o)},r=>{Ff(t,r)},r=>{YC(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=Pw(t.repoInfo_,()=>new T1(t.stats_,t.server_)),t.infoData_=new S1,t.infoSyncTree_=new Of({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Yo(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),xc(t,"connected",!1),t.serverSyncTree_=new Of({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);jt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function QC(t){const n=t.infoData_.getNode(new Q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Sc(t){return NC({timestamp:QC(t)})}function bf(t,e,n,r,i){t.dataUpdateCount++;const s=new Q(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=uo(n,u=>Ee(u));o=EC(t.serverSyncTree_,s,a,i)}else{const a=Ee(n);o=CC(t.serverSyncTree_,s,a,i)}else if(r){const a=uo(n,u=>Ee(u));o=yC(t.serverSyncTree_,s,a)}else{const a=Ee(n);o=Yo(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Xo(t,s)),jt(t.eventQueue_,l,o)}function Ff(t,e){xc(t,"connected",e),e===!1&&qC(t)}function YC(t,e){$e(e,(n,r)=>{xc(t,n,r)})}function xc(t,e,n){const r=new Q("/.info/"+e),i=Ee(n);t.infoData_.updateSnapshot(r,i);const s=Yo(t.infoSyncTree_,r,i);jt(t.eventQueue_,r,s)}function Rg(t){return t.nextWriteId_++}function KC(t,e,n,r,i){kc(t,"set",{path:e.toString(),value:n,priority:r});const s=Sc(t),o=Ee(n,r),l=fc(t.serverSyncTree_,e),a=wg(o,l,s),u=Rg(t),f=gg(t.serverSyncTree_,e,a,u,!0);Ec(t.eventQueue_,f),t.server_.put(e.toString(),o.val(!0),(d,y)=>{const v=d==="ok";v||He("set at "+e+" failed: "+d);const w=Nn(t.serverSyncTree_,u,!v);jt(t.eventQueue_,e,w),ZC(t,i,d,y)});const c=Mg(t,e);Xo(t,c),jt(t.eventQueue_,c,[])}function qC(t){kc(t,"onDisconnectEvents");const e=Sc(t),n=yo();Ha(t.onDisconnect_,V(),(i,s)=>{const o=PC(i,s,t.serverSyncTree_,e);ng(n,i,o)});let r=[];Ha(n,V(),(i,s)=>{r=r.concat(Yo(t.serverSyncTree_,i,s));const o=Mg(t,i);Xo(t,o)}),t.onDisconnect_=yo(),jt(t.eventQueue_,V(),r)}function XC(t,e,n){let r;j(e._path)===".info"?r=Mf(t.infoSyncTree_,e,n):r=Mf(t.serverSyncTree_,e,n),Ng(t.eventQueue_,e._path,r)}function jf(t,e,n){let r;j(e._path)===".info"?r=Ka(t.infoSyncTree_,e,n):r=Ka(t.serverSyncTree_,e,n),Ng(t.eventQueue_,e._path,r)}function JC(t){t.persistentConnection_&&t.persistentConnection_.interrupt(HC)}function kc(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Te(n,...e)}function ZC(t,e,n,r){e&&Fr(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Pg(t,e,n){return fc(t.serverSyncTree_,e,n)||O.EMPTY_NODE}function Ic(t,e=t.transactionQueueTree_){if(e||Jo(t,e),jr(e)){const n=Ag(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&eE(t,ts(e),n)}else Eg(e)&&qo(e,n=>{Ic(t,n)})}function eE(t,e,n){const r=n.map(u=>u.currentWriteId),i=Pg(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const f=n[u];x(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const c=je(e,f.path);s=s.updateChild(c,f.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{kc(t,"transaction put response",{path:a.toString(),status:u});let f=[];if(u==="ok"){const c=[];for(let d=0;d<n.length;d++)n[d].status=2,f=f.concat(Nn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&c.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Jo(t,wc(t.transactionQueueTree_,e)),Ic(t,t.transactionQueueTree_),jt(t.eventQueue_,e,f);for(let d=0;d<c.length;d++)Fr(c[d])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{He("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Xo(t,e)}},o)}function Xo(t,e){const n=Dg(t,e),r=ts(n),i=Ag(t,n);return tE(t,i,r),r}function tE(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=je(n,a.path);let f=!1,c;if(x(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)f=!0,c=a.abortReason,i=i.concat(Nn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=$C)f=!0,c="maxretry",i=i.concat(Nn(t.serverSyncTree_,a.currentWriteId,!0));else{const d=Pg(t,a.path,o);a.currentInputSnapshot=d;const y=e[l].update(d.val());if(y!==void 0){Cc("transaction failed: Data returned ",y,a.path);let v=Ee(y);typeof y=="object"&&y!=null&&Ut(y,".priority")||(v=v.updatePriority(d.getPriority()));const L=a.currentWriteId,m=Sc(t),h=wg(v,d,m);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=h,a.currentWriteId=Rg(t),o.splice(o.indexOf(L),1),i=i.concat(gg(t.serverSyncTree_,a.path,h,a.currentWriteId,a.applyLocally)),i=i.concat(Nn(t.serverSyncTree_,L,!0))}else f=!0,c="nodata",i=i.concat(Nn(t.serverSyncTree_,a.currentWriteId,!0))}jt(t.eventQueue_,n,i),i=[],f&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}Jo(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Fr(r[l]);Ic(t,t.transactionQueueTree_)}function Dg(t,e){let n,r=t.transactionQueueTree_;for(n=j(e);n!==null&&jr(r)===void 0;)r=wc(r,n),e=q(e),n=j(e);return r}function Ag(t,e){const n=[];return Og(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Og(t,e,n){const r=jr(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);qo(e,i=>{Og(t,i,n)})}function Jo(t,e){const n=jr(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Cg(e,n.length>0?n:void 0)}qo(e,r=>{Jo(t,r)})}function Mg(t,e){const n=ts(Dg(t,e)),r=wc(t.transactionQueueTree_,e);return AC(r,i=>{jl(t,i)}),jl(t,r),Sg(r,i=>{jl(t,i)}),n}function jl(t,e){const n=jr(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Nn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Cg(e,void 0):n.length=s+1,jt(t.eventQueue_,ts(e),i);for(let o=0;o<r.length;o++)Fr(r[o])}}/**
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
 */function nE(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function rE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):He(`Invalid query segment '${n}' in query '${t}'`)}return e}const zf=function(t,e){const n=iE(t),r=n.namespace;n.domain==="firebase.com"&&Ft(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Ft("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||gw();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Fm(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Q(n.pathString)}},iE=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let f=t.indexOf("/");f===-1&&(f=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(f,c)),f<c&&(i=nE(t.substring(f,c)));const d=rE(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const y=e.slice(0,u);if(y.toLowerCase()==="localhost")n="localhost";else if(y.split(".").length<=2)n=y;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */class sE{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ve(this.snapshot.exportVal())}}class oE{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class lE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return x(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Nc{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return U(this._path)?null:Gm(this._path)}get ref(){return new gn(this._repo,this._path)}get _queryIdentifier(){const e=Ef(this._queryParams),n=qu(e);return n==="{}"?"default":n}get _queryObject(){return Ef(this._queryParams)}isEqual(e){if(e=qi(e),!(e instanceof Nc))return!1;const n=this._repo===e._repo,r=ec(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Zw(this._path)}}class gn extends Nc{constructor(e,n){super(e,n,new ic,!1)}get parent(){const e=Ym(this._path);return e===null?null:new gn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Io{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Q(e),r=Xa(this.ref,e);return new Io(this._node.getChild(n),r,ae)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Io(i,Xa(this.ref,r),ae)))}hasChild(e){const n=new Q(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Uf(t,e){return t=qi(t),t._checkNotDeleted("ref"),e!==void 0?Xa(t._root,e):t._root}function Xa(t,e){return t=qi(t),j(t._path)===null?jC("child","path",e):Ig("child","path",e),new gn(t._repo,pe(t._path,e))}function aE(t,e){t=qi(t),zC("set",t._path),FC("set",e,t._path);const n=new Ho;return KC(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Tc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new sE("value",this,new Io(e.snapshotNode,new gn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new oE(this,e,n):null}matches(e){return e instanceof Tc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function uE(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(f,c)=>{jf(t._repo,t,l),a(f,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new lE(n,s||void 0),l=new Tc(o);return XC(t._repo,t,l),()=>jf(t._repo,t,l)}function cE(t,e,n,r){return uE(t,"value",e,n,r)}uC(gn);mC(gn);/**
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
 */const dE="FIREBASE_DATABASE_EMULATOR_HOST",Ja={};let fE=!1;function hE(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=mm(s);t.repoInfo_=new Fm(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function pE(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Ft("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Te("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=zf(s,i),l=o.repoInfo,a;typeof process<"u"&&rf&&(a=rf[dE]),a?(s=`http://${a}?ns=${l.namespace}`,o=zf(s,i),l=o.repoInfo):o.repoInfo.secure;const u=new Nw(t.name,t.options,e);UC("Invalid Firebase Database URL",o),U(o.path)||Ft("Database URL must point to the root of a Firebase Database (not including a child path).");const f=gE(l,t,u,new Iw(t,n));return new _E(f,t)}function mE(t,e){const n=Ja[e];(!n||n[t.key]!==t)&&Ft(`Database ${e}(${t.repoInfo_}) has already been deleted.`),JC(t),delete n[t.key]}function gE(t,e,n,r){let i=Ja[e.name];i||(i={},Ja[e.name]=i);let s=i[t.toURLString()];return s&&Ft("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new VC(t,fE,n,r),i[t.toURLString()]=s,s}class _E{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(GC(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new gn(this._repo,V())),this._rootInternal}_delete(){return this._rootInternal!==null&&(mE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ft("Cannot call "+e+" on a deleted database.")}}function yE(t=Z0(),e){const n=Y0(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=bv("database");r&&vE(n,...r)}return n}function vE(t,e,n,r={}){t=qi(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&co(r,s.repoInfo_.emulatorOptions))return;Ft("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&Ft('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Fs(Fs.OWNER);else if(r.mockUserToken){const l=typeof r.mockUserToken=="string"?r.mockUserToken:Fv(r.mockUserToken,t.app.options.projectId);o=new Fs(l)}mm(e)&&Xv(e),hE(s,i,r,o)}/**
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
 */function wE(t){cw(J0),ho(new bi("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return pE(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),_r(sf,of,t),_r(sf,of,"esm2020")}Dt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Dt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};wE();var CE="firebase",EE="12.15.0";/**
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
 */_r(CE,EE,"app");const SE={apiKey:"AIzaSyC-AGGH-4B7w4fiZdPzILlYZcFwKsifNEk",authDomain:"minima-game.firebaseapp.com",databaseURL:"https://minima-game-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"minima-game",storageBucket:"minima-game.firebasestorage.app",messagingSenderId:"650096003712",appId:"1:650096003712:web:2e42f303ce049256413465"},xE=vm(SE),Bf=yE(xE),Wf="shared-game",mt=({children:t,size:e=14,...n})=>p.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...n,children:t}),zl=t=>p.jsxs(mt,{...t,children:[p.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),p.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),Hf=t=>p.jsxs(mt,{...t,children:[p.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),p.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),kE=t=>p.jsx(mt,{...t,children:p.jsx("path",{d:"M3 17h18l-2-9-5 5-4-7-4 7-5-5Z"})}),IE=t=>p.jsxs(mt,{...t,children:[p.jsx("circle",{cx:"12",cy:"11",r:"7"}),p.jsx("circle",{cx:"9",cy:"11",r:"1",fill:"currentColor"}),p.jsx("circle",{cx:"15",cy:"11",r:"1",fill:"currentColor"}),p.jsx("path",{d:"M10 19h4"})]}),NE=t=>p.jsxs(mt,{...t,children:[p.jsx("path",{d:"M3 7v6h6"}),p.jsx("path",{d:"M3 13a9 9 0 1 0 3-7.7L3 7"})]}),$f=t=>p.jsxs(mt,{...t,children:[p.jsx("path",{d:"M3 12a9 9 0 1 1 3 6.7"}),p.jsx("path",{d:"M3 12V6M3 12h6"})]}),Vf=t=>p.jsxs(mt,{...t,children:[p.jsx("rect",{x:"9",y:"9",width:"11",height:"11",rx:"2"}),p.jsx("path",{d:"M5 15V5a2 2 0 0 1 2-2h10"})]}),TE=t=>p.jsxs(mt,{...t,children:[p.jsx("path",{d:"M3 6h18"}),p.jsx("path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),p.jsx("path",{d:"M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"}),p.jsx("path",{d:"M10 11v6M14 11v6"})]}),Jr=t=>p.jsxs(mt,{...t,children:[p.jsx("rect",{x:"5",y:"11",width:"14",height:"9",rx:"2"}),p.jsx("path",{d:"M8 11V7a4 4 0 0 1 8 0v4"})]}),Ul=t=>p.jsxs(mt,{...t,children:[p.jsx("rect",{x:"5",y:"11",width:"14",height:"9",rx:"2"}),p.jsx("path",{d:"M8 11V7a4 4 0 0 1 7.2-2.4"})]}),RE=t=>p.jsx(mt,{...t,children:p.jsx("path",{d:"M17 3a2.83 2.83 0 1 1 4 4L7 21l-4 1 1-4Z"})}),Gf=-10,PE=["Ayush","Hans","Aman","Yash","Arnav","Sumit","Shivam","Happy"],DE=[[0,10,12,6,11,7,13,50],[6,-10,7,8,2,6,4,9],[4,0,7,0,50,6,0,0],[7,5,0,16,23,4,50,0],[16,8,46,-10,15,21,5,23],[16,0,6,50,9,11,5,17],[3,5,6,14,-10,5,5,6],[5,21,7,25,4,10,-10,12],[7,3,17,9,17,9,-10,7],[15,8,12,7,20,21,-10,11],[50,8,5,0,11,12,13,6],[12,24,18,16,19,6,20,-10],[3,15,5,8,-10,6,11,11],[4,4,4,15,14,12,-10,6],[6,5,4,5,16,18,16,-10],[5,-10,8,6,14,14,4,13]];function _i(t){return`${t}${Date.now().toString(36)}${Math.floor(Math.random()*1e3)}`}function AE(){const t=PE.map((n,r)=>({id:`p${r}`,name:n})),e=DE.map((n,r)=>({id:`r${r}`,scores:Object.fromEntries(t.map((i,s)=>[i.id,n[s]]))}));return{id:_i("b"),name:"Game 1",players:t,rounds:e}}function Qf(t){return{id:_i("b"),name:t,players:[],rounds:[]}}function OE(t){return JSON.parse(JSON.stringify({players:t.players,rounds:t.rounds}))}function ME(){const[t,e]=H.useState([]),[n,r]=H.useState(null),[i,s]=H.useState(!1),[o,l]=H.useState(""),[a,u]=H.useState(""),[f,c]=H.useState(""),[d,y]=H.useState(!1),[v,w]=H.useState(!1),[L,m]=H.useState(!1),[h,_]=H.useState(""),[C,I]=H.useState(null),[P,R]=H.useState(null),[A,Y]=H.useState(""),[b,Pe]=H.useState([]),[_n,gt]=H.useState(!1),[Wn,ns]=H.useState(""),[Hn,yn]=H.useState(""),[N,M]=H.useState([]),[F,J]=H.useState(!1),[ue,Bt]=H.useState(""),[_t,$n]=H.useState(""),[yt,Wt]=H.useState(""),[,Rc]=H.useState(0),rs=H.useRef(null),Vn=H.useRef({}),is=H.useRef(null),Pc=H.useRef({}),Zo=H.useRef({});H.useEffect(()=>{const g=Uf(Bf,`rooms/${Wf}`),S=cE(g,k=>{var W;const D=k.val();if(D&&D.boards)is.current=JSON.stringify({boards:D.boards,activeId:D.activeId}),e(D.boards),r(D.activeId||((W=D.boards[0])==null?void 0:W.id)||null);else{const re=AE();is.current=JSON.stringify({boards:[re],activeId:re.id}),e([re]),r(re.id)}s(!0)},()=>s(!0));return()=>S()},[]),H.useEffect(()=>{if(!i)return;const g=JSON.stringify({boards:t,activeId:n});if(g!==is.current)return rs.current&&clearTimeout(rs.current),rs.current=setTimeout(()=>{is.current=g,aE(Uf(Bf,`rooms/${Wf}`),{boards:t,activeId:n}).catch(()=>{})},200),()=>clearTimeout(rs.current)},[t,n,i]);const de=t.find(g=>g.id===n)||null;H.useEffect(()=>{Pe([]),gt(!1)},[n]);function Lg(){if(!de)return;const g=Vn.current[n]||[];Vn.current[n]=[...g,OE(de)].slice(-20),Rc(S=>S+1)}function xt(g){Lg(),g()}function rt(g){e(S=>S.map(k=>k.id===n?g(k):k))}function bg(){const g=Vn.current[n]||[];if(!g.length)return;const S=g[g.length-1];Vn.current[n]=g.slice(0,-1),e(k=>k.map(D=>D.id===n?{...D,players:S.players,rounds:S.rounds}:D)),Rc(k=>k+1)}const Fg=(Vn.current[n]||[]).length>0;function jg(){xt(()=>{rt(g=>({...g,players:[],rounds:[]}))}),y(!1)}function zg(){xt(()=>{rt(g=>({...g,rounds:[]}))}),w(!1)}function Ug(){const g=t.find(W=>W.id===Wn);if(!g||!de)return;const S=de.players.map(W=>W.name.toLowerCase()),k=g.players.filter(W=>!S.includes(W.name.toLowerCase()));if(k.length===0){yn("Those names are already on this board.");return}const D=k.map(W=>({id:_i("p"),name:W.name}));xt(()=>{rt(W=>({...W,players:[...W.players,...D],rounds:W.rounds.map(re=>({...re,scores:{...re.scores,...Object.fromEntries(D.map(el=>[el.id,0]))}}))}))}),yn(`Copied ${D.length} name${D.length===1?"":"s"} from "${g.name}".`),ns("")}function Dc(){const g=ue.trim();!g||!de||(e(S=>S.map(k=>k.id===n?{...k,locked:!0,password:g}:k)),M(S=>S.includes(n)?S:[...S,n]),J(!1),Bt(""))}function Bg(){de&&e(g=>g.map(S=>S.id===n?{...S,locked:!1,password:null}:S))}function Ac(){de&&(_t===de.password?(M(g=>g.includes(n)?g:[...g,n]),$n(""),Wt("")):Wt("Incorrect password."))}function Oc(){const g=a.trim();if(!g||!de)return;if(de.players.some(k=>k.name.toLowerCase()===g.toLowerCase())){c("That name's already on the board.");return}c("");const S=_i("p");xt(()=>{rt(k=>({...k,players:[...k.players,{id:S,name:g}],rounds:k.rounds.map(D=>({...D,scores:{...D.scores,[S]:0}}))}))}),u("")}function Wg(g){xt(()=>{rt(S=>({...S,players:S.players.filter(k=>k.id!==g),rounds:S.rounds.map(k=>{const D={...k.scores};return delete D[g],{...k,scores:D}})}))})}function Hg(){if(!de)return;const g=_i("r");xt(()=>{rt(S=>({...S,rounds:[...S.rounds,{id:g,locked:!1,scores:Object.fromEntries(S.players.map(k=>[k.id,""]))}]}))})}function $g(g,S,k){rt(D=>({...D,rounds:D.rounds.map(W=>W.id===g?{...W,scores:{...W.scores,[S]:k}}:W)}))}function Vg(g,S,k){if(k===""||k==="-"){xt(()=>{rt(W=>({...W,rounds:W.rounds.map(re=>re.id===g?{...re,scores:{...re.scores,[S]:""}}:re)}))});return}let D=parseInt(k,10);isNaN(D)&&(D=0),D<Gf&&(D=Gf),xt(()=>{rt(W=>({...W,rounds:W.rounds.map(re=>re.id===g?{...re,scores:{...re.scores,[S]:D}}:re)}))})}function Gg(){xt(()=>{rt(g=>({...g,rounds:g.rounds.filter(S=>!b.includes(S.id))}))}),Pe([]),gt(!1)}function Qg(g){Pe(S=>S.includes(g)?S.filter(k=>k!==g):[...S,g])}function Mc(g,S){const k=S.map(D=>g.scores[D.id]).filter(D=>D!==""&&D!==void 0&&D!==null&&!isNaN(Number(D))).map(Number);return k.length?Math.min(...k):null}function Yg(g){rt(S=>({...S,rounds:S.rounds.map(k=>k.id===g?{...k,locked:!k.locked}:k)}))}function Kg(g){R(g.id),Y(g.name)}function Lc(){const g=A.trim();g&&e(S=>S.map(k=>k.id===P?{...k,name:g}:k)),R(null),Y("")}function bc(){const g=h.trim()||`Game ${t.length+1}`,S=Qf(g);e(k=>[...k,S]),r(S.id),_(""),m(!1)}function qg(g){e(S=>{const k=S.filter(D=>D.id!==g);if(k.length===0){const D=Qf("Game 1");return r(D.id),[D]}return g===n&&r(k[0].id),k}),delete Vn.current[g],I(null)}const De=de?de.players:[],zr=de?de.rounds:[],ss=De.map(g=>({...g,total:zr.reduce((S,k)=>S+(Number(k.scores[g.id])||0),0)})),Ht=[...ss].sort((g,S)=>g.total-S.total),Xg=Pc.current,Gn={};if(Ht.forEach((g,S)=>{const k=Xg[g.id];k===void 0?Gn[g.id]=null:S<k?Gn[g.id]="up":S>k?Gn[g.id]="down":Gn[g.id]=null,Gn[g.id]!==null&&(Zo.current[g.id]=(Zo.current[g.id]||0)+1)}),H.useEffect(()=>{const g={};Ht.forEach((S,k)=>{g[S.id]=k}),Pc.current=g}),!i||!de)return p.jsx("div",{style:{background:"#0f172a",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",color:"#cad4e2",fontSize:"13px",fontFamily:"-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif"},children:"Loading…"});const Qn=!!de.locked&&!N.includes(de.id),Yn=Ht.length?Ht[0].total:null,Kn=Ht.length?Ht[Ht.length-1].total:null;return p.jsxs("div",{className:"board",children:[p.jsx("style",{children:`
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
          border: 1px dashed #334155;
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
          border: 1px solid #334155;
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
        .btn-ghost:hover { background: #273448; color: #e2e8f0; border-color: #334155; }
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
        .add-row input::placeholder { color: #334155; }

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
          background: none; border: none; color: #334155; cursor: pointer;
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
          border: 1px solid #334155;
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
          background: none; border: none; color: #334155; cursor: pointer;
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

        .empty { color: #334155; font-size: 13px; padding: 8px 0; }
        .actions-row { display: flex; justify-content: flex-end; gap: 6px; margin-top: 14px; flex-wrap: wrap; }
      `}),p.jsxs("div",{className:"wrap",children:[p.jsxs("div",{className:"title-row",children:[p.jsxs("div",{children:[p.jsx("h1",{className:"title",children:"Minima Game"}),p.jsxs("p",{className:"subtitle",children:["Score each round. ",p.jsx("b",{children:"Lowest total wins."})," Minimum −10 per round, no ceiling."]})]}),p.jsxs("div",{className:"toolbar",children:[p.jsxs("button",{className:"btn",onClick:()=>{const g=window.location.origin+window.location.pathname;navigator.clipboard.writeText(g).then(()=>l("Link copied!")).catch(()=>l(g)),setTimeout(()=>l(""),2500)},title:"Copy a link anyone can use to view and edit this board live",children:[p.jsx(Vf,{size:14})," Share"]}),o&&p.jsx("span",{className:"confirm-box",children:o}),p.jsxs("button",{className:"btn btn-ghost",onClick:bg,disabled:!Fg||Qn,title:"Undo last change",children:[p.jsx(NE,{size:14})," Undo"]}),d?p.jsxs("span",{className:"confirm-box",children:["Clear all players & rounds?",p.jsx("button",{className:"btn btn-danger",onClick:jg,children:"Yes, clear"}),p.jsx("button",{className:"btn btn-ghost",onClick:()=>y(!1),children:"Cancel"})]}):p.jsxs("button",{className:"btn btn-ghost",onClick:()=>y(!0),disabled:Qn,title:"Clear this board",children:[p.jsx($f,{size:14})," Clear board"]}),v?p.jsxs("span",{className:"confirm-box",children:["Clear all rounds? Players stay.",p.jsx("button",{className:"btn btn-danger",onClick:zg,children:"Yes, clear"}),p.jsx("button",{className:"btn btn-ghost",onClick:()=>w(!1),children:"Cancel"})]}):p.jsxs("button",{className:"btn btn-ghost",onClick:()=>w(!0),disabled:Qn,title:"Clear only the rounds table",children:[p.jsx($f,{size:14})," Clear rounds"]}),de.locked?Qn?p.jsxs("span",{className:"confirm-box lock-badge",children:[p.jsx(Jr,{size:13})," Locked"]}):p.jsxs("button",{className:"btn btn-ghost",onClick:Bg,title:"Remove the password lock",children:[p.jsx(Ul,{size:14})," Remove lock"]}):F?p.jsxs("span",{className:"confirm-box",children:[p.jsx("input",{type:"password",autoFocus:!0,className:"password-input",placeholder:"Set a password",value:ue,onChange:g=>Bt(g.target.value),onKeyDown:g=>g.key==="Enter"&&Dc()}),p.jsx("button",{className:"btn",onClick:Dc,children:"Lock"}),p.jsx("button",{className:"btn btn-ghost",onClick:()=>{J(!1),Bt("")},children:"Cancel"})]}):p.jsxs("button",{className:"btn btn-ghost",onClick:()=>J(!0),title:"Lock this board with a password",children:[p.jsx(Jr,{size:14})," Lock board"]})]})]}),p.jsxs("div",{className:"board-tabs",children:[t.map(g=>P===g.id?p.jsx("div",{className:"new-board-input",children:p.jsx("input",{autoFocus:!0,value:A,onChange:S=>Y(S.target.value),onKeyDown:S=>{S.key==="Enter"&&Lc(),S.key==="Escape"&&(R(null),Y(""))},onBlur:Lc})},g.id):p.jsxs("div",{className:"tab"+(g.id===n?" active":""),onClick:()=>r(g.id),children:[g.locked&&p.jsx(Jr,{size:11}),g.name,(!g.locked||N.includes(g.id))&&p.jsx("button",{onClick:S=>{S.stopPropagation(),Kg(g)},title:"Rename board",children:p.jsx(RE,{size:11})}),t.length>1&&(!g.locked||N.includes(g.id))&&(C===g.id?p.jsxs(p.Fragment,{children:[p.jsx("button",{onClick:S=>{S.stopPropagation(),qg(g.id)},title:"Confirm delete",children:"✓"}),p.jsx("button",{onClick:S=>{S.stopPropagation(),I(null)},title:"Cancel",children:"✕"})]}):p.jsx("button",{onClick:S=>{S.stopPropagation(),I(g.id)},title:"Delete board",children:p.jsx(Hf,{size:12})}))]},g.id)),L?p.jsxs("div",{className:"new-board-input",children:[p.jsx("input",{autoFocus:!0,placeholder:"Board name",value:h,onChange:g=>_(g.target.value),onKeyDown:g=>{g.key==="Enter"&&bc(),g.key==="Escape"&&(m(!1),_(""))}}),p.jsx("button",{className:"btn",onClick:bc,children:"Create"})]}):p.jsxs("button",{className:"tab-add",onClick:()=>m(!0),children:[p.jsx(zl,{size:13})," New board"]})]}),p.jsxs("div",{className:"panel",children:[p.jsx("div",{className:"panel-head",children:p.jsx("h2",{children:"Leaderboard"})}),ss.length===0?p.jsx("div",{className:"empty",children:"Add players below to start the board."}):p.jsx("div",{className:"leaderboard-list",children:Ht.map((g,S)=>{const k=Gn[g.id],D=Zo.current[g.id]||0;return p.jsxs("div",{className:"lb-row"+(k==="up"?" anim-up":k==="down"?" anim-down":"")+(g.total===Yn?" lb-leader":"")+(g.total===Kn&&Kn!==Yn?" lb-last":""),children:[p.jsx("span",{className:"lb-rank",children:S+1}),p.jsx("span",{className:"lb-rank-delta"+(k==="up"?" up":k==="down"?" down":""),children:k==="up"?"▲":k==="down"?"▼":""}),p.jsx("span",{className:"lb-name",children:g.name}),g.total===Yn&&p.jsx(kE,{size:15,color:"#f59e0b"}),g.total===Kn&&Kn!==Yn&&p.jsx(IE,{size:14,color:"#f87171"}),p.jsx("span",{className:"lb-score",children:g.total})]},g.id+"-"+D)})})]}),Qn&&p.jsxs("div",{className:"panel",style:{display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"},children:[p.jsx(Jr,{size:14,style:{color:"#C8A24D",flexShrink:0}}),p.jsxs("span",{style:{color:"#E0C9A0",fontSize:"13px",flex:1},children:['"',de.name,'" is locked. Enter the password to edit.']}),p.jsx("input",{type:"password",className:"password-input",placeholder:"Password",value:_t,onChange:g=>{$n(g.target.value),Wt("")},onKeyDown:g=>g.key==="Enter"&&Ac()}),p.jsxs("button",{className:"btn",onClick:Ac,children:[p.jsx(Ul,{size:14})," Unlock"]}),yt&&p.jsx("span",{className:"err",style:{width:"100%",marginTop:0},children:yt})]}),Qn?p.jsxs(p.Fragment,{children:[De.length>0&&p.jsxs("div",{className:"panel",children:[p.jsx("div",{className:"panel-head",children:p.jsx("h2",{children:"Players"})}),p.jsx("div",{className:"player-chips",children:De.map(g=>p.jsx("div",{className:"chip",style:{paddingRight:"12px"},children:g.name},g.id))})]}),De.length>0&&zr.length>0&&p.jsxs("div",{className:"panel",children:[p.jsx("div",{className:"panel-head",children:p.jsx("h2",{children:"Rounds"})}),p.jsx("div",{className:"table-scroll",children:p.jsxs("table",{children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Round"}),De.map(g=>p.jsx("th",{children:g.name},g.id))]})}),p.jsx("tbody",{children:zr.map((g,S)=>{const k=Mc(g,De);return p.jsxs("tr",{children:[p.jsx("td",{children:S+1}),De.map(D=>{const W=g.scores[D.id]??"",re=k!==null&&W!==""&&Number(W)===k;return p.jsx("td",{children:p.jsx("span",{className:"score-input"+(re?" is-low":""),style:{display:"inline-block",lineHeight:"1",cursor:"default"},children:W===""?"—":W})},D.id)})]},g.id)})}),p.jsx("tfoot",{children:p.jsxs("tr",{children:[p.jsx("td",{children:"Total"}),De.map(g=>{var k;const S=((k=ss.find(D=>D.id===g.id))==null?void 0:k.total)??0;return p.jsx("td",{className:S===Yn?"total-low":S===Kn?"total-high":"",children:S},g.id)})]})})]})})]})]}):p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"panel",children:[p.jsx("h2",{children:"Players"}),p.jsx("div",{className:"player-chips",children:De.map(g=>p.jsxs("div",{className:"chip",children:[g.name,p.jsx("button",{onClick:()=>Wg(g.id),"aria-label":`Remove ${g.name}`,children:p.jsx(Hf,{size:13})})]},g.id))}),p.jsxs("div",{className:"add-row",children:[p.jsx("input",{placeholder:"Add a player name",value:a,onChange:g=>u(g.target.value),onKeyDown:g=>g.key==="Enter"&&Oc()}),p.jsxs("button",{className:"btn",onClick:Oc,children:[p.jsx(zl,{size:14})," Add"]})]}),f&&p.jsx("div",{className:"err",children:f}),t.length>1&&p.jsxs("div",{className:"copy-row",children:[p.jsxs("select",{className:"board-select",value:Wn,onChange:g=>{ns(g.target.value),yn("")},children:[p.jsx("option",{value:"",children:"Copy names from board…"}),t.filter(g=>g.id!==n).map(g=>p.jsxs("option",{value:g.id,children:[g.name," (",g.players.length," players)"]},g.id))]}),p.jsxs("button",{className:"btn btn-ghost",onClick:Ug,disabled:!Wn,children:[p.jsx(Vf,{size:14})," Copy names"]})]}),Hn&&p.jsx("div",{className:"copy-note",children:Hn})]}),p.jsxs("div",{className:"panel",children:[p.jsx("h2",{children:"Rounds"}),De.length===0?p.jsx("div",{className:"empty",children:"Add at least one player to start logging rounds."}):p.jsx("div",{className:"table-scroll",children:p.jsxs("table",{children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Round"}),De.map(g=>p.jsx("th",{children:g.name},g.id)),p.jsx("th",{})]})}),p.jsx("tbody",{children:zr.map((g,S)=>{const k=Mc(g,De),D=!!g.locked;return p.jsxs("tr",{className:D?"round-locked":"",children:[p.jsx("td",{children:S+1}),De.map(W=>{const re=g.scores[W.id]??"",el=k!==null&&re!==""&&Number(re)===k;return p.jsx("td",{children:p.jsx("input",{className:"score-input"+(el?" is-low":""),type:"text",placeholder:"",value:re,disabled:D,onChange:tl=>$g(g.id,W.id,tl.target.value),onBlur:tl=>Vg(g.id,W.id,tl.target.value)})},W.id)}),p.jsx("td",{children:p.jsxs("div",{className:"row-actions",children:[p.jsx("input",{type:"checkbox",className:"select-checkbox",checked:b.includes(g.id),onChange:()=>Qg(g.id),disabled:D,"aria-label":"Select round",title:"Select round"}),p.jsx("button",{className:"lock-toggle"+(D?" is-locked":""),onClick:()=>Yg(g.id),"aria-label":D?"Unlock round":"Lock round",title:D?"Unlock round":"Lock round",children:D?p.jsx(Jr,{size:13}):p.jsx(Ul,{size:13})})]})})]},g.id)})}),zr.length>0&&p.jsx("tfoot",{children:p.jsxs("tr",{children:[p.jsx("td",{children:"Total"}),De.map(g=>{var k;const S=((k=ss.find(D=>D.id===g.id))==null?void 0:k.total)??0;return p.jsx("td",{className:S===Yn?"total-low":S===Kn?"total-high":"",children:S},g.id)}),p.jsx("td",{})]})})]})}),p.jsxs("div",{className:"actions-row",children:[b.length>0&&(_n?p.jsxs("span",{className:"confirm-box",children:["Delete ",b.length," round",b.length===1?"":"s","?",p.jsx("button",{className:"btn btn-danger",onClick:Gg,children:"Yes, delete"}),p.jsx("button",{className:"btn btn-ghost",onClick:()=>gt(!1),children:"Cancel"})]}):p.jsxs("button",{className:"btn btn-danger",onClick:()=>gt(!0),children:[p.jsx(TE,{size:14})," Delete selected (",b.length,")"]})),p.jsxs("button",{className:"btn btn-ghost",onClick:Hg,disabled:De.length===0,children:[p.jsx(zl,{size:14})," Add round"]})]})]})]})]})]})}Bl.createRoot(document.getElementById("root")).render(p.jsx(p_.StrictMode,{children:p.jsx(ME,{})}));
