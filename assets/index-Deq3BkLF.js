(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function n_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Kf={exports:{}},Ro={},qf={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vi=Symbol.for("react.element"),r_=Symbol.for("react.portal"),i_=Symbol.for("react.fragment"),s_=Symbol.for("react.strict_mode"),o_=Symbol.for("react.profiler"),l_=Symbol.for("react.provider"),a_=Symbol.for("react.context"),u_=Symbol.for("react.forward_ref"),c_=Symbol.for("react.suspense"),d_=Symbol.for("react.memo"),f_=Symbol.for("react.lazy"),jc=Symbol.iterator;function h_(t){return t===null||typeof t!="object"?null:(t=jc&&t[jc]||t["@@iterator"],typeof t=="function"?t:null)}var Xf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jf=Object.assign,Zf={};function Or(t,e,n){this.props=t,this.context=e,this.refs=Zf,this.updater=n||Xf}Or.prototype.isReactComponent={};Or.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Or.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function eh(){}eh.prototype=Or.prototype;function Za(t,e,n){this.props=t,this.context=e,this.refs=Zf,this.updater=n||Xf}var eu=Za.prototype=new eh;eu.constructor=Za;Jf(eu,Or.prototype);eu.isPureReactComponent=!0;var zc=Array.isArray,th=Object.prototype.hasOwnProperty,tu={current:null},nh={key:!0,ref:!0,__self:!0,__source:!0};function rh(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)th.call(e,r)&&!nh.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Vi,type:t,key:s,ref:o,props:i,_owner:tu.current}}function p_(t,e){return{$$typeof:Vi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function nu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Vi}function m_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Uc=/\/+/g;function nl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?m_(""+t.key):e.toString(36)}function Ns(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Vi:case r_:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+nl(o,0):r,zc(i)?(n="",t!=null&&(n=t.replace(Uc,"$&/")+"/"),Ns(i,e,n,"",function(u){return u})):i!=null&&(nu(i)&&(i=p_(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Uc,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",zc(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+nl(s,l);o+=Ns(s,e,n,a,i)}else if(a=h_(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+nl(s,l++),o+=Ns(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function as(t,e,n){if(t==null)return t;var r=[],i=0;return Ns(t,r,"","",function(s){return e.call(n,s,i++)}),r}function g_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Me={current:null},Ts={transition:null},__={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:Ts,ReactCurrentOwner:tu};function ih(){throw Error("act(...) is not supported in production builds of React.")}W.Children={map:as,forEach:function(t,e,n){as(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return as(t,function(){e++}),e},toArray:function(t){return as(t,function(e){return e})||[]},only:function(t){if(!nu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};W.Component=Or;W.Fragment=i_;W.Profiler=o_;W.PureComponent=Za;W.StrictMode=s_;W.Suspense=c_;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=__;W.act=ih;W.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Jf({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=tu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)th.call(e,a)&&!nh.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Vi,type:t.type,key:i,ref:s,props:r,_owner:o}};W.createContext=function(t){return t={$$typeof:a_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:l_,_context:t},t.Consumer=t};W.createElement=rh;W.createFactory=function(t){var e=rh.bind(null,t);return e.type=t,e};W.createRef=function(){return{current:null}};W.forwardRef=function(t){return{$$typeof:u_,render:t}};W.isValidElement=nu;W.lazy=function(t){return{$$typeof:f_,_payload:{_status:-1,_result:t},_init:g_}};W.memo=function(t,e){return{$$typeof:d_,type:t,compare:e===void 0?null:e}};W.startTransition=function(t){var e=Ts.transition;Ts.transition={};try{t()}finally{Ts.transition=e}};W.unstable_act=ih;W.useCallback=function(t,e){return Me.current.useCallback(t,e)};W.useContext=function(t){return Me.current.useContext(t)};W.useDebugValue=function(){};W.useDeferredValue=function(t){return Me.current.useDeferredValue(t)};W.useEffect=function(t,e){return Me.current.useEffect(t,e)};W.useId=function(){return Me.current.useId()};W.useImperativeHandle=function(t,e,n){return Me.current.useImperativeHandle(t,e,n)};W.useInsertionEffect=function(t,e){return Me.current.useInsertionEffect(t,e)};W.useLayoutEffect=function(t,e){return Me.current.useLayoutEffect(t,e)};W.useMemo=function(t,e){return Me.current.useMemo(t,e)};W.useReducer=function(t,e,n){return Me.current.useReducer(t,e,n)};W.useRef=function(t){return Me.current.useRef(t)};W.useState=function(t){return Me.current.useState(t)};W.useSyncExternalStore=function(t,e,n){return Me.current.useSyncExternalStore(t,e,n)};W.useTransition=function(){return Me.current.useTransition()};W.version="18.3.1";qf.exports=W;var H=qf.exports;const y_=n_(H);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v_=H,w_=Symbol.for("react.element"),C_=Symbol.for("react.fragment"),E_=Object.prototype.hasOwnProperty,S_=v_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x_={key:!0,ref:!0,__self:!0,__source:!0};function sh(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)E_.call(e,r)&&!x_.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:w_,type:t,key:s,ref:o,props:i,_owner:S_.current}}Ro.Fragment=C_;Ro.jsx=sh;Ro.jsxs=sh;Kf.exports=Ro;var p=Kf.exports,Bl={},oh={exports:{}},Ke={},lh={exports:{}},ah={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,L){var j=N.length;N.push(L);e:for(;0<j;){var J=j-1>>>1,ue=N[J];if(0<i(ue,L))N[J]=L,N[j]=ue,j=J;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var L=N[0],j=N.pop();if(j!==L){N[0]=j;e:for(var J=0,ue=N.length,Bt=ue>>>1;J<Bt;){var _t=2*(J+1)-1,$n=N[_t],yt=_t+1,Wt=N[yt];if(0>i($n,j))yt<ue&&0>i(Wt,$n)?(N[J]=Wt,N[yt]=j,J=yt):(N[J]=$n,N[_t]=j,J=_t);else if(yt<ue&&0>i(Wt,j))N[J]=Wt,N[yt]=j,J=yt;else break e}}return L}function i(N,L){var j=N.sortIndex-L.sortIndex;return j!==0?j:N.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],f=1,c=null,d=3,y=!1,v=!1,w=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(N){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=N)r(u),L.sortIndex=L.expirationTime,e(a,L);else break;L=n(u)}}function E(N){if(w=!1,_(N),!v)if(n(a)!==null)v=!0,Hn(I);else{var L=n(u);L!==null&&yn(E,L.startTime-N)}}function I(N,L){v=!1,w&&(w=!1,g(A),A=-1),y=!0;var j=d;try{for(_(L),c=n(a);c!==null&&(!(c.expirationTime>L)||N&&!Pe());){var J=c.callback;if(typeof J=="function"){c.callback=null,d=c.priorityLevel;var ue=J(c.expirationTime<=L);L=t.unstable_now(),typeof ue=="function"?c.callback=ue:c===n(a)&&r(a),_(L)}else r(a);c=n(a)}if(c!==null)var Bt=!0;else{var _t=n(u);_t!==null&&yn(E,_t.startTime-L),Bt=!1}return Bt}finally{c=null,d=j,y=!1}}var D=!1,P=null,A=-1,Y=5,F=-1;function Pe(){return!(t.unstable_now()-F<Y)}function _n(){if(P!==null){var N=t.unstable_now();F=N;var L=!0;try{L=P(!0,N)}finally{L?gt():(D=!1,P=null)}}else D=!1}var gt;if(typeof h=="function")gt=function(){h(_n)};else if(typeof MessageChannel<"u"){var Wn=new MessageChannel,rs=Wn.port2;Wn.port1.onmessage=_n,gt=function(){rs.postMessage(null)}}else gt=function(){b(_n,0)};function Hn(N){P=N,D||(D=!0,gt())}function yn(N,L){A=b(function(){N(t.unstable_now())},L)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){v||y||(v=!0,Hn(I))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(N){switch(d){case 1:case 2:case 3:var L=3;break;default:L=d}var j=d;d=L;try{return N()}finally{d=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,L){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var j=d;d=N;try{return L()}finally{d=j}},t.unstable_scheduleCallback=function(N,L,j){var J=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?J+j:J):j=J,N){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=j+ue,N={id:f++,callback:L,priorityLevel:N,startTime:j,expirationTime:ue,sortIndex:-1},j>J?(N.sortIndex=j,e(u,N),n(a)===null&&N===n(u)&&(w?(g(A),A=-1):w=!0,yn(E,j-J))):(N.sortIndex=ue,e(a,N),v||y||(v=!0,Hn(I))),N},t.unstable_shouldYield=Pe,t.unstable_wrapCallback=function(N){var L=d;return function(){var j=d;d=L;try{return N.apply(this,arguments)}finally{d=j}}}})(ah);lh.exports=ah;var k_=lh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_=H,Ye=k_;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var uh=new Set,vi={};function zn(t,e){Er(t,e),Er(t+"Capture",e)}function Er(t,e){for(vi[t]=e,t=0;t<e.length;t++)uh.add(e[t])}var At=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wl=Object.prototype.hasOwnProperty,N_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bc={},Wc={};function T_(t){return Wl.call(Wc,t)?!0:Wl.call(Bc,t)?!1:N_.test(t)?Wc[t]=!0:(Bc[t]=!0,!1)}function R_(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function P_(t,e,n,r){if(e===null||typeof e>"u"||R_(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Le(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){xe[t]=new Le(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];xe[e]=new Le(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){xe[t]=new Le(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){xe[t]=new Le(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){xe[t]=new Le(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){xe[t]=new Le(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){xe[t]=new Le(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){xe[t]=new Le(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){xe[t]=new Le(t,5,!1,t.toLowerCase(),null,!1,!1)});var ru=/[\-:]([a-z])/g;function iu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ru,iu);xe[e]=new Le(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ru,iu);xe[e]=new Le(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ru,iu);xe[e]=new Le(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){xe[t]=new Le(t,1,!1,t.toLowerCase(),null,!1,!1)});xe.xlinkHref=new Le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){xe[t]=new Le(t,1,!1,t.toLowerCase(),null,!0,!0)});function su(t,e,n,r){var i=xe.hasOwnProperty(e)?xe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(P_(e,n,i,r)&&(n=null),r||i===null?T_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var zt=I_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,us=Symbol.for("react.element"),Zn=Symbol.for("react.portal"),er=Symbol.for("react.fragment"),ou=Symbol.for("react.strict_mode"),Hl=Symbol.for("react.profiler"),ch=Symbol.for("react.provider"),dh=Symbol.for("react.context"),lu=Symbol.for("react.forward_ref"),$l=Symbol.for("react.suspense"),Vl=Symbol.for("react.suspense_list"),au=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),fh=Symbol.for("react.offscreen"),Hc=Symbol.iterator;function Br(t){return t===null||typeof t!="object"?null:(t=Hc&&t[Hc]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,rl;function ei(t){if(rl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);rl=e&&e[1]||""}return`
`+rl+t}var il=!1;function sl(t,e){if(!t||il)return"";il=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{il=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ei(t):""}function D_(t){switch(t.tag){case 5:return ei(t.type);case 16:return ei("Lazy");case 13:return ei("Suspense");case 19:return ei("SuspenseList");case 0:case 2:case 15:return t=sl(t.type,!1),t;case 11:return t=sl(t.type.render,!1),t;case 1:return t=sl(t.type,!0),t;default:return""}}function Gl(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case er:return"Fragment";case Zn:return"Portal";case Hl:return"Profiler";case ou:return"StrictMode";case $l:return"Suspense";case Vl:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case dh:return(t.displayName||"Context")+".Consumer";case ch:return(t._context.displayName||"Context")+".Provider";case lu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case au:return e=t.displayName||null,e!==null?e:Gl(t.type)||"Memo";case Vt:e=t._payload,t=t._init;try{return Gl(t(e))}catch{}}return null}function A_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gl(e);case 8:return e===ou?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function un(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function hh(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function O_(t){var e=hh(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function cs(t){t._valueTracker||(t._valueTracker=O_(t))}function ph(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=hh(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Us(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ql(t,e){var n=e.checked;return se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function $c(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=un(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function mh(t,e){e=e.checked,e!=null&&su(t,"checked",e,!1)}function Yl(t,e){mh(t,e);var n=un(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Kl(t,e.type,n):e.hasOwnProperty("defaultValue")&&Kl(t,e.type,un(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Vc(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Kl(t,e,n){(e!=="number"||Us(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ti=Array.isArray;function fr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+un(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ql(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Gc(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(ti(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:un(n)}}function gh(t,e){var n=un(e.value),r=un(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Qc(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function _h(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xl(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?_h(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ds,yh=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ds=ds||document.createElement("div"),ds.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ds.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function wi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ii={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},M_=["Webkit","ms","Moz","O"];Object.keys(ii).forEach(function(t){M_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ii[e]=ii[t]})});function vh(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ii.hasOwnProperty(t)&&ii[t]?(""+e).trim():e+"px"}function wh(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=vh(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var L_=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jl(t,e){if(e){if(L_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function Zl(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ea=null;function uu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ta=null,hr=null,pr=null;function Yc(t){if(t=Yi(t)){if(typeof ta!="function")throw Error(S(280));var e=t.stateNode;e&&(e=Mo(e),ta(t.stateNode,t.type,e))}}function Ch(t){hr?pr?pr.push(t):pr=[t]:hr=t}function Eh(){if(hr){var t=hr,e=pr;if(pr=hr=null,Yc(t),e)for(t=0;t<e.length;t++)Yc(e[t])}}function Sh(t,e){return t(e)}function xh(){}var ol=!1;function kh(t,e,n){if(ol)return t(e,n);ol=!0;try{return Sh(t,e,n)}finally{ol=!1,(hr!==null||pr!==null)&&(xh(),Eh())}}function Ci(t,e){var n=t.stateNode;if(n===null)return null;var r=Mo(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var na=!1;if(At)try{var Wr={};Object.defineProperty(Wr,"passive",{get:function(){na=!0}}),window.addEventListener("test",Wr,Wr),window.removeEventListener("test",Wr,Wr)}catch{na=!1}function b_(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var si=!1,Bs=null,Ws=!1,ra=null,F_={onError:function(t){si=!0,Bs=t}};function j_(t,e,n,r,i,s,o,l,a){si=!1,Bs=null,b_.apply(F_,arguments)}function z_(t,e,n,r,i,s,o,l,a){if(j_.apply(this,arguments),si){if(si){var u=Bs;si=!1,Bs=null}else throw Error(S(198));Ws||(Ws=!0,ra=u)}}function Un(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ih(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Kc(t){if(Un(t)!==t)throw Error(S(188))}function U_(t){var e=t.alternate;if(!e){if(e=Un(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Kc(i),t;if(s===r)return Kc(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function Nh(t){return t=U_(t),t!==null?Th(t):null}function Th(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Th(t);if(e!==null)return e;t=t.sibling}return null}var Rh=Ye.unstable_scheduleCallback,qc=Ye.unstable_cancelCallback,B_=Ye.unstable_shouldYield,W_=Ye.unstable_requestPaint,ce=Ye.unstable_now,H_=Ye.unstable_getCurrentPriorityLevel,cu=Ye.unstable_ImmediatePriority,Ph=Ye.unstable_UserBlockingPriority,Hs=Ye.unstable_NormalPriority,$_=Ye.unstable_LowPriority,Dh=Ye.unstable_IdlePriority,Po=null,Et=null;function V_(t){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Po,t,void 0,(t.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:Y_,G_=Math.log,Q_=Math.LN2;function Y_(t){return t>>>=0,t===0?32:31-(G_(t)/Q_|0)|0}var fs=64,hs=4194304;function ni(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $s(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ni(l):(s&=o,s!==0&&(r=ni(s)))}else o=n&~i,o!==0?r=ni(o):s!==0&&(r=ni(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-dt(e),i=1<<n,r|=t[n],e&=~i;return r}function K_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function q_(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-dt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=K_(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function ia(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ah(){var t=fs;return fs<<=1,!(fs&4194240)&&(fs=64),t}function ll(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Gi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-dt(e),t[e]=n}function X_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-dt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function du(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-dt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var G=0;function Oh(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Mh,fu,Lh,bh,Fh,sa=!1,ps=[],Xt=null,Jt=null,Zt=null,Ei=new Map,Si=new Map,Qt=[],J_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xc(t,e){switch(t){case"focusin":case"focusout":Xt=null;break;case"dragenter":case"dragleave":Jt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":Ei.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Si.delete(e.pointerId)}}function Hr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Yi(e),e!==null&&fu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Z_(t,e,n,r,i){switch(e){case"focusin":return Xt=Hr(Xt,t,e,n,r,i),!0;case"dragenter":return Jt=Hr(Jt,t,e,n,r,i),!0;case"mouseover":return Zt=Hr(Zt,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ei.set(s,Hr(Ei.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Si.set(s,Hr(Si.get(s)||null,t,e,n,r,i)),!0}return!1}function jh(t){var e=Sn(t.target);if(e!==null){var n=Un(e);if(n!==null){if(e=n.tag,e===13){if(e=Ih(n),e!==null){t.blockedOn=e,Fh(t.priority,function(){Lh(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Rs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=oa(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ea=r,n.target.dispatchEvent(r),ea=null}else return e=Yi(n),e!==null&&fu(e),t.blockedOn=n,!1;e.shift()}return!0}function Jc(t,e,n){Rs(t)&&n.delete(e)}function ey(){sa=!1,Xt!==null&&Rs(Xt)&&(Xt=null),Jt!==null&&Rs(Jt)&&(Jt=null),Zt!==null&&Rs(Zt)&&(Zt=null),Ei.forEach(Jc),Si.forEach(Jc)}function $r(t,e){t.blockedOn===e&&(t.blockedOn=null,sa||(sa=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,ey)))}function xi(t){function e(i){return $r(i,t)}if(0<ps.length){$r(ps[0],t);for(var n=1;n<ps.length;n++){var r=ps[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Xt!==null&&$r(Xt,t),Jt!==null&&$r(Jt,t),Zt!==null&&$r(Zt,t),Ei.forEach(e),Si.forEach(e),n=0;n<Qt.length;n++)r=Qt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Qt.length&&(n=Qt[0],n.blockedOn===null);)jh(n),n.blockedOn===null&&Qt.shift()}var mr=zt.ReactCurrentBatchConfig,Vs=!0;function ty(t,e,n,r){var i=G,s=mr.transition;mr.transition=null;try{G=1,hu(t,e,n,r)}finally{G=i,mr.transition=s}}function ny(t,e,n,r){var i=G,s=mr.transition;mr.transition=null;try{G=4,hu(t,e,n,r)}finally{G=i,mr.transition=s}}function hu(t,e,n,r){if(Vs){var i=oa(t,e,n,r);if(i===null)_l(t,e,r,Gs,n),Xc(t,r);else if(Z_(i,t,e,n,r))r.stopPropagation();else if(Xc(t,r),e&4&&-1<J_.indexOf(t)){for(;i!==null;){var s=Yi(i);if(s!==null&&Mh(s),s=oa(t,e,n,r),s===null&&_l(t,e,r,Gs,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else _l(t,e,r,null,n)}}var Gs=null;function oa(t,e,n,r){if(Gs=null,t=uu(r),t=Sn(t),t!==null)if(e=Un(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ih(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Gs=t,null}function zh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(H_()){case cu:return 1;case Ph:return 4;case Hs:case $_:return 16;case Dh:return 536870912;default:return 16}default:return 16}}var Kt=null,pu=null,Ps=null;function Uh(){if(Ps)return Ps;var t,e=pu,n=e.length,r,i="value"in Kt?Kt.value:Kt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ps=i.slice(t,1<r?1-r:void 0)}function Ds(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ms(){return!0}function Zc(){return!1}function qe(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ms:Zc,this.isPropagationStopped=Zc,this}return se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ms)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ms)},persist:function(){},isPersistent:ms}),e}var Mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mu=qe(Mr),Qi=se({},Mr,{view:0,detail:0}),ry=qe(Qi),al,ul,Vr,Do=se({},Qi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vr&&(Vr&&t.type==="mousemove"?(al=t.screenX-Vr.screenX,ul=t.screenY-Vr.screenY):ul=al=0,Vr=t),al)},movementY:function(t){return"movementY"in t?t.movementY:ul}}),ed=qe(Do),iy=se({},Do,{dataTransfer:0}),sy=qe(iy),oy=se({},Qi,{relatedTarget:0}),cl=qe(oy),ly=se({},Mr,{animationName:0,elapsedTime:0,pseudoElement:0}),ay=qe(ly),uy=se({},Mr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cy=qe(uy),dy=se({},Mr,{data:0}),td=qe(dy),fy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},py={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function my(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=py[t])?!!e[t]:!1}function gu(){return my}var gy=se({},Qi,{key:function(t){if(t.key){var e=fy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ds(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gu,charCode:function(t){return t.type==="keypress"?Ds(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ds(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_y=qe(gy),yy=se({},Do,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nd=qe(yy),vy=se({},Qi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gu}),wy=qe(vy),Cy=se({},Mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ey=qe(Cy),Sy=se({},Do,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),xy=qe(Sy),ky=[9,13,27,32],_u=At&&"CompositionEvent"in window,oi=null;At&&"documentMode"in document&&(oi=document.documentMode);var Iy=At&&"TextEvent"in window&&!oi,Bh=At&&(!_u||oi&&8<oi&&11>=oi),rd=" ",id=!1;function Wh(t,e){switch(t){case"keyup":return ky.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var tr=!1;function Ny(t,e){switch(t){case"compositionend":return Hh(e);case"keypress":return e.which!==32?null:(id=!0,rd);case"textInput":return t=e.data,t===rd&&id?null:t;default:return null}}function Ty(t,e){if(tr)return t==="compositionend"||!_u&&Wh(t,e)?(t=Uh(),Ps=pu=Kt=null,tr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Bh&&e.locale!=="ko"?null:e.data;default:return null}}var Ry={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ry[t.type]:e==="textarea"}function $h(t,e,n,r){Ch(r),e=Qs(e,"onChange"),0<e.length&&(n=new mu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var li=null,ki=null;function Py(t){tp(t,0)}function Ao(t){var e=ir(t);if(ph(e))return t}function Dy(t,e){if(t==="change")return e}var Vh=!1;if(At){var dl;if(At){var fl="oninput"in document;if(!fl){var od=document.createElement("div");od.setAttribute("oninput","return;"),fl=typeof od.oninput=="function"}dl=fl}else dl=!1;Vh=dl&&(!document.documentMode||9<document.documentMode)}function ld(){li&&(li.detachEvent("onpropertychange",Gh),ki=li=null)}function Gh(t){if(t.propertyName==="value"&&Ao(ki)){var e=[];$h(e,ki,t,uu(t)),kh(Py,e)}}function Ay(t,e,n){t==="focusin"?(ld(),li=e,ki=n,li.attachEvent("onpropertychange",Gh)):t==="focusout"&&ld()}function Oy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ao(ki)}function My(t,e){if(t==="click")return Ao(e)}function Ly(t,e){if(t==="input"||t==="change")return Ao(e)}function by(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var pt=typeof Object.is=="function"?Object.is:by;function Ii(t,e){if(pt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Wl.call(e,i)||!pt(t[i],e[i]))return!1}return!0}function ad(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ud(t,e){var n=ad(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ad(n)}}function Qh(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Qh(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Yh(){for(var t=window,e=Us();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Us(t.document)}return e}function yu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Fy(t){var e=Yh(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Qh(n.ownerDocument.documentElement,n)){if(r!==null&&yu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ud(n,s);var o=ud(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jy=At&&"documentMode"in document&&11>=document.documentMode,nr=null,la=null,ai=null,aa=!1;function cd(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;aa||nr==null||nr!==Us(r)||(r=nr,"selectionStart"in r&&yu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ai&&Ii(ai,r)||(ai=r,r=Qs(la,"onSelect"),0<r.length&&(e=new mu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=nr)))}function gs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var rr={animationend:gs("Animation","AnimationEnd"),animationiteration:gs("Animation","AnimationIteration"),animationstart:gs("Animation","AnimationStart"),transitionend:gs("Transition","TransitionEnd")},hl={},Kh={};At&&(Kh=document.createElement("div").style,"AnimationEvent"in window||(delete rr.animationend.animation,delete rr.animationiteration.animation,delete rr.animationstart.animation),"TransitionEvent"in window||delete rr.transitionend.transition);function Oo(t){if(hl[t])return hl[t];if(!rr[t])return t;var e=rr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Kh)return hl[t]=e[n];return t}var qh=Oo("animationend"),Xh=Oo("animationiteration"),Jh=Oo("animationstart"),Zh=Oo("transitionend"),ep=new Map,dd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hn(t,e){ep.set(t,e),zn(e,[t])}for(var pl=0;pl<dd.length;pl++){var ml=dd[pl],zy=ml.toLowerCase(),Uy=ml[0].toUpperCase()+ml.slice(1);hn(zy,"on"+Uy)}hn(qh,"onAnimationEnd");hn(Xh,"onAnimationIteration");hn(Jh,"onAnimationStart");hn("dblclick","onDoubleClick");hn("focusin","onFocus");hn("focusout","onBlur");hn(Zh,"onTransitionEnd");Er("onMouseEnter",["mouseout","mouseover"]);Er("onMouseLeave",["mouseout","mouseover"]);Er("onPointerEnter",["pointerout","pointerover"]);Er("onPointerLeave",["pointerout","pointerover"]);zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),By=new Set("cancel close invalid load scroll toggle".split(" ").concat(ri));function fd(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,z_(r,e,void 0,t),t.currentTarget=null}function tp(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;fd(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;fd(i,l,u),s=a}}}if(Ws)throw t=ra,Ws=!1,ra=null,t}function Z(t,e){var n=e[ha];n===void 0&&(n=e[ha]=new Set);var r=t+"__bubble";n.has(r)||(np(e,t,2,!1),n.add(r))}function gl(t,e,n){var r=0;e&&(r|=4),np(n,t,r,e)}var _s="_reactListening"+Math.random().toString(36).slice(2);function Ni(t){if(!t[_s]){t[_s]=!0,uh.forEach(function(n){n!=="selectionchange"&&(By.has(n)||gl(n,!1,t),gl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[_s]||(e[_s]=!0,gl("selectionchange",!1,e))}}function np(t,e,n,r){switch(zh(e)){case 1:var i=ty;break;case 4:i=ny;break;default:i=hu}n=i.bind(null,e,n,t),i=void 0,!na||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function _l(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Sn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}kh(function(){var u=s,f=uu(n),c=[];e:{var d=ep.get(t);if(d!==void 0){var y=mu,v=t;switch(t){case"keypress":if(Ds(n)===0)break e;case"keydown":case"keyup":y=_y;break;case"focusin":v="focus",y=cl;break;case"focusout":v="blur",y=cl;break;case"beforeblur":case"afterblur":y=cl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=ed;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=sy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=wy;break;case qh:case Xh:case Jh:y=ay;break;case Zh:y=Ey;break;case"scroll":y=ry;break;case"wheel":y=xy;break;case"copy":case"cut":case"paste":y=cy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=nd}var w=(e&4)!==0,b=!w&&t==="scroll",g=w?d!==null?d+"Capture":null:d;w=[];for(var h=u,_;h!==null;){_=h;var E=_.stateNode;if(_.tag===5&&E!==null&&(_=E,g!==null&&(E=Ci(h,g),E!=null&&w.push(Ti(h,E,_)))),b)break;h=h.return}0<w.length&&(d=new y(d,v,null,n,f),c.push({event:d,listeners:w}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",d&&n!==ea&&(v=n.relatedTarget||n.fromElement)&&(Sn(v)||v[Ot]))break e;if((y||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?Sn(v):null,v!==null&&(b=Un(v),v!==b||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(w=ed,E="onMouseLeave",g="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(w=nd,E="onPointerLeave",g="onPointerEnter",h="pointer"),b=y==null?d:ir(y),_=v==null?d:ir(v),d=new w(E,h+"leave",y,n,f),d.target=b,d.relatedTarget=_,E=null,Sn(f)===u&&(w=new w(g,h+"enter",v,n,f),w.target=_,w.relatedTarget=b,E=w),b=E,y&&v)t:{for(w=y,g=v,h=0,_=w;_;_=Xn(_))h++;for(_=0,E=g;E;E=Xn(E))_++;for(;0<h-_;)w=Xn(w),h--;for(;0<_-h;)g=Xn(g),_--;for(;h--;){if(w===g||g!==null&&w===g.alternate)break t;w=Xn(w),g=Xn(g)}w=null}else w=null;y!==null&&hd(c,d,y,w,!1),v!==null&&b!==null&&hd(c,b,v,w,!0)}}e:{if(d=u?ir(u):window,y=d.nodeName&&d.nodeName.toLowerCase(),y==="select"||y==="input"&&d.type==="file")var I=Dy;else if(sd(d))if(Vh)I=Ly;else{I=Oy;var D=Ay}else(y=d.nodeName)&&y.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(I=My);if(I&&(I=I(t,u))){$h(c,I,n,f);break e}D&&D(t,d,u),t==="focusout"&&(D=d._wrapperState)&&D.controlled&&d.type==="number"&&Kl(d,"number",d.value)}switch(D=u?ir(u):window,t){case"focusin":(sd(D)||D.contentEditable==="true")&&(nr=D,la=u,ai=null);break;case"focusout":ai=la=nr=null;break;case"mousedown":aa=!0;break;case"contextmenu":case"mouseup":case"dragend":aa=!1,cd(c,n,f);break;case"selectionchange":if(jy)break;case"keydown":case"keyup":cd(c,n,f)}var P;if(_u)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else tr?Wh(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Bh&&n.locale!=="ko"&&(tr||A!=="onCompositionStart"?A==="onCompositionEnd"&&tr&&(P=Uh()):(Kt=f,pu="value"in Kt?Kt.value:Kt.textContent,tr=!0)),D=Qs(u,A),0<D.length&&(A=new td(A,t,null,n,f),c.push({event:A,listeners:D}),P?A.data=P:(P=Hh(n),P!==null&&(A.data=P)))),(P=Iy?Ny(t,n):Ty(t,n))&&(u=Qs(u,"onBeforeInput"),0<u.length&&(f=new td("onBeforeInput","beforeinput",null,n,f),c.push({event:f,listeners:u}),f.data=P))}tp(c,e)})}function Ti(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Qs(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ci(t,n),s!=null&&r.unshift(Ti(t,s,i)),s=Ci(t,e),s!=null&&r.push(Ti(t,s,i))),t=t.return}return r}function Xn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hd(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Ci(n,s),a!=null&&o.unshift(Ti(n,a,l))):i||(a=Ci(n,s),a!=null&&o.push(Ti(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Wy=/\r\n?/g,Hy=/\u0000|\uFFFD/g;function pd(t){return(typeof t=="string"?t:""+t).replace(Wy,`
`).replace(Hy,"")}function ys(t,e,n){if(e=pd(e),pd(t)!==e&&n)throw Error(S(425))}function Ys(){}var ua=null,ca=null;function da(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fa=typeof setTimeout=="function"?setTimeout:void 0,$y=typeof clearTimeout=="function"?clearTimeout:void 0,md=typeof Promise=="function"?Promise:void 0,Vy=typeof queueMicrotask=="function"?queueMicrotask:typeof md<"u"?function(t){return md.resolve(null).then(t).catch(Gy)}:fa;function Gy(t){setTimeout(function(){throw t})}function yl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),xi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);xi(e)}function en(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function gd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Lr=Math.random().toString(36).slice(2),Ct="__reactFiber$"+Lr,Ri="__reactProps$"+Lr,Ot="__reactContainer$"+Lr,ha="__reactEvents$"+Lr,Qy="__reactListeners$"+Lr,Yy="__reactHandles$"+Lr;function Sn(t){var e=t[Ct];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ot]||n[Ct]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=gd(t);t!==null;){if(n=t[Ct])return n;t=gd(t)}return e}t=n,n=t.parentNode}return null}function Yi(t){return t=t[Ct]||t[Ot],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ir(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function Mo(t){return t[Ri]||null}var pa=[],sr=-1;function pn(t){return{current:t}}function te(t){0>sr||(t.current=pa[sr],pa[sr]=null,sr--)}function X(t,e){sr++,pa[sr]=t.current,t.current=e}var cn={},Re=pn(cn),Ue=pn(!1),Pn=cn;function Sr(t,e){var n=t.type.contextTypes;if(!n)return cn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Be(t){return t=t.childContextTypes,t!=null}function Ks(){te(Ue),te(Re)}function _d(t,e,n){if(Re.current!==cn)throw Error(S(168));X(Re,e),X(Ue,n)}function rp(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,A_(t)||"Unknown",i));return se({},n,r)}function qs(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cn,Pn=Re.current,X(Re,t),X(Ue,Ue.current),!0}function yd(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=rp(t,e,Pn),r.__reactInternalMemoizedMergedChildContext=t,te(Ue),te(Re),X(Re,t)):te(Ue),X(Ue,n)}var It=null,Lo=!1,vl=!1;function ip(t){It===null?It=[t]:It.push(t)}function Ky(t){Lo=!0,ip(t)}function mn(){if(!vl&&It!==null){vl=!0;var t=0,e=G;try{var n=It;for(G=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}It=null,Lo=!1}catch(i){throw It!==null&&(It=It.slice(t+1)),Rh(cu,mn),i}finally{G=e,vl=!1}}return null}var or=[],lr=0,Xs=null,Js=0,Xe=[],Je=0,Dn=null,Nt=1,Tt="";function vn(t,e){or[lr++]=Js,or[lr++]=Xs,Xs=t,Js=e}function sp(t,e,n){Xe[Je++]=Nt,Xe[Je++]=Tt,Xe[Je++]=Dn,Dn=t;var r=Nt;t=Tt;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var s=32-dt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Nt=1<<32-dt(e)+i|n<<i|r,Tt=s+t}else Nt=1<<s|n<<i|r,Tt=t}function vu(t){t.return!==null&&(vn(t,1),sp(t,1,0))}function wu(t){for(;t===Xs;)Xs=or[--lr],or[lr]=null,Js=or[--lr],or[lr]=null;for(;t===Dn;)Dn=Xe[--Je],Xe[Je]=null,Tt=Xe[--Je],Xe[Je]=null,Nt=Xe[--Je],Xe[Je]=null}var Qe=null,Ge=null,ne=!1,lt=null;function op(t,e){var n=Ze(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function vd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Qe=t,Ge=en(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Qe=t,Ge=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Dn!==null?{id:Nt,overflow:Tt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ze(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Qe=t,Ge=null,!0):!1;default:return!1}}function ma(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ga(t){if(ne){var e=Ge;if(e){var n=e;if(!vd(t,e)){if(ma(t))throw Error(S(418));e=en(n.nextSibling);var r=Qe;e&&vd(t,e)?op(r,n):(t.flags=t.flags&-4097|2,ne=!1,Qe=t)}}else{if(ma(t))throw Error(S(418));t.flags=t.flags&-4097|2,ne=!1,Qe=t}}}function wd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Qe=t}function vs(t){if(t!==Qe)return!1;if(!ne)return wd(t),ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!da(t.type,t.memoizedProps)),e&&(e=Ge)){if(ma(t))throw lp(),Error(S(418));for(;e;)op(t,e),e=en(e.nextSibling)}if(wd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ge=en(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ge=null}}else Ge=Qe?en(t.stateNode.nextSibling):null;return!0}function lp(){for(var t=Ge;t;)t=en(t.nextSibling)}function xr(){Ge=Qe=null,ne=!1}function Cu(t){lt===null?lt=[t]:lt.push(t)}var qy=zt.ReactCurrentBatchConfig;function Gr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function ws(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Cd(t){var e=t._init;return e(t._payload)}function ap(t){function e(g,h){if(t){var _=g.deletions;_===null?(g.deletions=[h],g.flags|=16):_.push(h)}}function n(g,h){if(!t)return null;for(;h!==null;)e(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=sn(g,h),g.index=0,g.sibling=null,g}function s(g,h,_){return g.index=_,t?(_=g.alternate,_!==null?(_=_.index,_<h?(g.flags|=2,h):_):(g.flags|=2,h)):(g.flags|=1048576,h)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function l(g,h,_,E){return h===null||h.tag!==6?(h=Il(_,g.mode,E),h.return=g,h):(h=i(h,_),h.return=g,h)}function a(g,h,_,E){var I=_.type;return I===er?f(g,h,_.props.children,E,_.key):h!==null&&(h.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Vt&&Cd(I)===h.type)?(E=i(h,_.props),E.ref=Gr(g,h,_),E.return=g,E):(E=js(_.type,_.key,_.props,null,g.mode,E),E.ref=Gr(g,h,_),E.return=g,E)}function u(g,h,_,E){return h===null||h.tag!==4||h.stateNode.containerInfo!==_.containerInfo||h.stateNode.implementation!==_.implementation?(h=Nl(_,g.mode,E),h.return=g,h):(h=i(h,_.children||[]),h.return=g,h)}function f(g,h,_,E,I){return h===null||h.tag!==7?(h=Rn(_,g.mode,E,I),h.return=g,h):(h=i(h,_),h.return=g,h)}function c(g,h,_){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Il(""+h,g.mode,_),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case us:return _=js(h.type,h.key,h.props,null,g.mode,_),_.ref=Gr(g,null,h),_.return=g,_;case Zn:return h=Nl(h,g.mode,_),h.return=g,h;case Vt:var E=h._init;return c(g,E(h._payload),_)}if(ti(h)||Br(h))return h=Rn(h,g.mode,_,null),h.return=g,h;ws(g,h)}return null}function d(g,h,_,E){var I=h!==null?h.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return I!==null?null:l(g,h,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case us:return _.key===I?a(g,h,_,E):null;case Zn:return _.key===I?u(g,h,_,E):null;case Vt:return I=_._init,d(g,h,I(_._payload),E)}if(ti(_)||Br(_))return I!==null?null:f(g,h,_,E,null);ws(g,_)}return null}function y(g,h,_,E,I){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(_)||null,l(h,g,""+E,I);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case us:return g=g.get(E.key===null?_:E.key)||null,a(h,g,E,I);case Zn:return g=g.get(E.key===null?_:E.key)||null,u(h,g,E,I);case Vt:var D=E._init;return y(g,h,_,D(E._payload),I)}if(ti(E)||Br(E))return g=g.get(_)||null,f(h,g,E,I,null);ws(h,E)}return null}function v(g,h,_,E){for(var I=null,D=null,P=h,A=h=0,Y=null;P!==null&&A<_.length;A++){P.index>A?(Y=P,P=null):Y=P.sibling;var F=d(g,P,_[A],E);if(F===null){P===null&&(P=Y);break}t&&P&&F.alternate===null&&e(g,P),h=s(F,h,A),D===null?I=F:D.sibling=F,D=F,P=Y}if(A===_.length)return n(g,P),ne&&vn(g,A),I;if(P===null){for(;A<_.length;A++)P=c(g,_[A],E),P!==null&&(h=s(P,h,A),D===null?I=P:D.sibling=P,D=P);return ne&&vn(g,A),I}for(P=r(g,P);A<_.length;A++)Y=y(P,g,A,_[A],E),Y!==null&&(t&&Y.alternate!==null&&P.delete(Y.key===null?A:Y.key),h=s(Y,h,A),D===null?I=Y:D.sibling=Y,D=Y);return t&&P.forEach(function(Pe){return e(g,Pe)}),ne&&vn(g,A),I}function w(g,h,_,E){var I=Br(_);if(typeof I!="function")throw Error(S(150));if(_=I.call(_),_==null)throw Error(S(151));for(var D=I=null,P=h,A=h=0,Y=null,F=_.next();P!==null&&!F.done;A++,F=_.next()){P.index>A?(Y=P,P=null):Y=P.sibling;var Pe=d(g,P,F.value,E);if(Pe===null){P===null&&(P=Y);break}t&&P&&Pe.alternate===null&&e(g,P),h=s(Pe,h,A),D===null?I=Pe:D.sibling=Pe,D=Pe,P=Y}if(F.done)return n(g,P),ne&&vn(g,A),I;if(P===null){for(;!F.done;A++,F=_.next())F=c(g,F.value,E),F!==null&&(h=s(F,h,A),D===null?I=F:D.sibling=F,D=F);return ne&&vn(g,A),I}for(P=r(g,P);!F.done;A++,F=_.next())F=y(P,g,A,F.value,E),F!==null&&(t&&F.alternate!==null&&P.delete(F.key===null?A:F.key),h=s(F,h,A),D===null?I=F:D.sibling=F,D=F);return t&&P.forEach(function(_n){return e(g,_n)}),ne&&vn(g,A),I}function b(g,h,_,E){if(typeof _=="object"&&_!==null&&_.type===er&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case us:e:{for(var I=_.key,D=h;D!==null;){if(D.key===I){if(I=_.type,I===er){if(D.tag===7){n(g,D.sibling),h=i(D,_.props.children),h.return=g,g=h;break e}}else if(D.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Vt&&Cd(I)===D.type){n(g,D.sibling),h=i(D,_.props),h.ref=Gr(g,D,_),h.return=g,g=h;break e}n(g,D);break}else e(g,D);D=D.sibling}_.type===er?(h=Rn(_.props.children,g.mode,E,_.key),h.return=g,g=h):(E=js(_.type,_.key,_.props,null,g.mode,E),E.ref=Gr(g,h,_),E.return=g,g=E)}return o(g);case Zn:e:{for(D=_.key;h!==null;){if(h.key===D)if(h.tag===4&&h.stateNode.containerInfo===_.containerInfo&&h.stateNode.implementation===_.implementation){n(g,h.sibling),h=i(h,_.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else e(g,h);h=h.sibling}h=Nl(_,g.mode,E),h.return=g,g=h}return o(g);case Vt:return D=_._init,b(g,h,D(_._payload),E)}if(ti(_))return v(g,h,_,E);if(Br(_))return w(g,h,_,E);ws(g,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,h!==null&&h.tag===6?(n(g,h.sibling),h=i(h,_),h.return=g,g=h):(n(g,h),h=Il(_,g.mode,E),h.return=g,g=h),o(g)):n(g,h)}return b}var kr=ap(!0),up=ap(!1),Zs=pn(null),eo=null,ar=null,Eu=null;function Su(){Eu=ar=eo=null}function xu(t){var e=Zs.current;te(Zs),t._currentValue=e}function _a(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function gr(t,e){eo=t,Eu=ar=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Fe=!0),t.firstContext=null)}function tt(t){var e=t._currentValue;if(Eu!==t)if(t={context:t,memoizedValue:e,next:null},ar===null){if(eo===null)throw Error(S(308));ar=t,eo.dependencies={lanes:0,firstContext:t}}else ar=ar.next=t;return e}var xn=null;function ku(t){xn===null?xn=[t]:xn.push(t)}function cp(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ku(e)):(n.next=i.next,i.next=n),e.interleaved=n,Mt(t,r)}function Mt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gt=!1;function Iu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dp(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function tn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Mt(t,n)}return i=r.interleaved,i===null?(e.next=e,ku(r)):(e.next=i.next,i.next=e),r.interleaved=e,Mt(t,n)}function As(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,du(t,n)}}function Ed(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function to(t,e,n,r){var i=t.updateQueue;Gt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,f=u=a=null,l=s;do{var d=l.lane,y=l.eventTime;if((r&d)===d){f!==null&&(f=f.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,w=l;switch(d=e,y=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){c=v.call(y,c,d);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,d=typeof v=="function"?v.call(y,c,d):v,d==null)break e;c=se({},c,d);break e;case 2:Gt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[l]:d.push(l))}else y={eventTime:y,lane:d,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=y,a=c):f=f.next=y,o|=d;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;d=l,l=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(f===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);On|=o,t.lanes=o,t.memoizedState=c}}function Sd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Ki={},St=pn(Ki),Pi=pn(Ki),Di=pn(Ki);function kn(t){if(t===Ki)throw Error(S(174));return t}function Nu(t,e){switch(X(Di,e),X(Pi,t),X(St,Ki),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Xl(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Xl(e,t)}te(St),X(St,e)}function Ir(){te(St),te(Pi),te(Di)}function fp(t){kn(Di.current);var e=kn(St.current),n=Xl(e,t.type);e!==n&&(X(Pi,t),X(St,n))}function Tu(t){Pi.current===t&&(te(St),te(Pi))}var re=pn(0);function no(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var wl=[];function Ru(){for(var t=0;t<wl.length;t++)wl[t]._workInProgressVersionPrimary=null;wl.length=0}var Os=zt.ReactCurrentDispatcher,Cl=zt.ReactCurrentBatchConfig,An=0,ie=null,he=null,_e=null,ro=!1,ui=!1,Ai=0,Xy=0;function ke(){throw Error(S(321))}function Pu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!pt(t[n],e[n]))return!1;return!0}function Du(t,e,n,r,i,s){if(An=s,ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Os.current=t===null||t.memoizedState===null?tv:nv,t=n(r,i),ui){s=0;do{if(ui=!1,Ai=0,25<=s)throw Error(S(301));s+=1,_e=he=null,e.updateQueue=null,Os.current=rv,t=n(r,i)}while(ui)}if(Os.current=io,e=he!==null&&he.next!==null,An=0,_e=he=ie=null,ro=!1,e)throw Error(S(300));return t}function Au(){var t=Ai!==0;return Ai=0,t}function wt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?ie.memoizedState=_e=t:_e=_e.next=t,_e}function nt(){if(he===null){var t=ie.alternate;t=t!==null?t.memoizedState:null}else t=he.next;var e=_e===null?ie.memoizedState:_e.next;if(e!==null)_e=e,he=t;else{if(t===null)throw Error(S(310));he=t,t={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},_e===null?ie.memoizedState=_e=t:_e=_e.next=t}return _e}function Oi(t,e){return typeof e=="function"?e(t):e}function El(t){var e=nt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=he,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var f=u.lane;if((An&f)===f)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,ie.lanes|=f,On|=f}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,pt(r,e.memoizedState)||(Fe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ie.lanes|=s,On|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Sl(t){var e=nt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);pt(s,e.memoizedState)||(Fe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function hp(){}function pp(t,e){var n=ie,r=nt(),i=e(),s=!pt(r.memoizedState,i);if(s&&(r.memoizedState=i,Fe=!0),r=r.queue,Ou(_p.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,Mi(9,gp.bind(null,n,r,i,e),void 0,null),we===null)throw Error(S(349));An&30||mp(n,e,i)}return i}function mp(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ie.updateQueue,e===null?(e={lastEffect:null,stores:null},ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function gp(t,e,n,r){e.value=n,e.getSnapshot=r,yp(e)&&vp(t)}function _p(t,e,n){return n(function(){yp(e)&&vp(t)})}function yp(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!pt(t,n)}catch{return!0}}function vp(t){var e=Mt(t,1);e!==null&&ft(e,t,1,-1)}function xd(t){var e=wt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:t},e.queue=t,t=t.dispatch=ev.bind(null,ie,t),[e.memoizedState,t]}function Mi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ie.updateQueue,e===null?(e={lastEffect:null,stores:null},ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function wp(){return nt().memoizedState}function Ms(t,e,n,r){var i=wt();ie.flags|=t,i.memoizedState=Mi(1|e,n,void 0,r===void 0?null:r)}function bo(t,e,n,r){var i=nt();r=r===void 0?null:r;var s=void 0;if(he!==null){var o=he.memoizedState;if(s=o.destroy,r!==null&&Pu(r,o.deps)){i.memoizedState=Mi(e,n,s,r);return}}ie.flags|=t,i.memoizedState=Mi(1|e,n,s,r)}function kd(t,e){return Ms(8390656,8,t,e)}function Ou(t,e){return bo(2048,8,t,e)}function Cp(t,e){return bo(4,2,t,e)}function Ep(t,e){return bo(4,4,t,e)}function Sp(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function xp(t,e,n){return n=n!=null?n.concat([t]):null,bo(4,4,Sp.bind(null,e,t),n)}function Mu(){}function kp(t,e){var n=nt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pu(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Ip(t,e){var n=nt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pu(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Np(t,e,n){return An&21?(pt(n,e)||(n=Ah(),ie.lanes|=n,On|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Fe=!0),t.memoizedState=n)}function Jy(t,e){var n=G;G=n!==0&&4>n?n:4,t(!0);var r=Cl.transition;Cl.transition={};try{t(!1),e()}finally{G=n,Cl.transition=r}}function Tp(){return nt().memoizedState}function Zy(t,e,n){var r=rn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Rp(t))Pp(e,n);else if(n=cp(t,e,n,r),n!==null){var i=Oe();ft(n,t,r,i),Dp(n,e,r)}}function ev(t,e,n){var r=rn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rp(t))Pp(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,pt(l,o)){var a=e.interleaved;a===null?(i.next=i,ku(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=cp(t,e,i,r),n!==null&&(i=Oe(),ft(n,t,r,i),Dp(n,e,r))}}function Rp(t){var e=t.alternate;return t===ie||e!==null&&e===ie}function Pp(t,e){ui=ro=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Dp(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,du(t,n)}}var io={readContext:tt,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},tv={readContext:tt,useCallback:function(t,e){return wt().memoizedState=[t,e===void 0?null:e],t},useContext:tt,useEffect:kd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ms(4194308,4,Sp.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ms(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ms(4,2,t,e)},useMemo:function(t,e){var n=wt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=wt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Zy.bind(null,ie,t),[r.memoizedState,t]},useRef:function(t){var e=wt();return t={current:t},e.memoizedState=t},useState:xd,useDebugValue:Mu,useDeferredValue:function(t){return wt().memoizedState=t},useTransition:function(){var t=xd(!1),e=t[0];return t=Jy.bind(null,t[1]),wt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ie,i=wt();if(ne){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),we===null)throw Error(S(349));An&30||mp(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,kd(_p.bind(null,r,s,t),[t]),r.flags|=2048,Mi(9,gp.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=wt(),e=we.identifierPrefix;if(ne){var n=Tt,r=Nt;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ai++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Xy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},nv={readContext:tt,useCallback:kp,useContext:tt,useEffect:Ou,useImperativeHandle:xp,useInsertionEffect:Cp,useLayoutEffect:Ep,useMemo:Ip,useReducer:El,useRef:wp,useState:function(){return El(Oi)},useDebugValue:Mu,useDeferredValue:function(t){var e=nt();return Np(e,he.memoizedState,t)},useTransition:function(){var t=El(Oi)[0],e=nt().memoizedState;return[t,e]},useMutableSource:hp,useSyncExternalStore:pp,useId:Tp,unstable_isNewReconciler:!1},rv={readContext:tt,useCallback:kp,useContext:tt,useEffect:Ou,useImperativeHandle:xp,useInsertionEffect:Cp,useLayoutEffect:Ep,useMemo:Ip,useReducer:Sl,useRef:wp,useState:function(){return Sl(Oi)},useDebugValue:Mu,useDeferredValue:function(t){var e=nt();return he===null?e.memoizedState=t:Np(e,he.memoizedState,t)},useTransition:function(){var t=Sl(Oi)[0],e=nt().memoizedState;return[t,e]},useMutableSource:hp,useSyncExternalStore:pp,useId:Tp,unstable_isNewReconciler:!1};function st(t,e){if(t&&t.defaultProps){e=se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ya(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Fo={isMounted:function(t){return(t=t._reactInternals)?Un(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Oe(),i=rn(t),s=Pt(r,i);s.payload=e,n!=null&&(s.callback=n),e=tn(t,s,i),e!==null&&(ft(e,t,i,r),As(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Oe(),i=rn(t),s=Pt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=tn(t,s,i),e!==null&&(ft(e,t,i,r),As(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Oe(),r=rn(t),i=Pt(n,r);i.tag=2,e!=null&&(i.callback=e),e=tn(t,i,r),e!==null&&(ft(e,t,r,n),As(e,t,r))}};function Id(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ii(n,r)||!Ii(i,s):!0}function Ap(t,e,n){var r=!1,i=cn,s=e.contextType;return typeof s=="object"&&s!==null?s=tt(s):(i=Be(e)?Pn:Re.current,r=e.contextTypes,s=(r=r!=null)?Sr(t,i):cn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Fo,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Nd(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Fo.enqueueReplaceState(e,e.state,null)}function va(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Iu(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=tt(s):(s=Be(e)?Pn:Re.current,i.context=Sr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ya(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Fo.enqueueReplaceState(i,i.state,null),to(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Nr(t,e){try{var n="",r=e;do n+=D_(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function xl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function wa(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var iv=typeof WeakMap=="function"?WeakMap:Map;function Op(t,e,n){n=Pt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){oo||(oo=!0,Pa=r),wa(t,e)},n}function Mp(t,e,n){n=Pt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){wa(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){wa(t,e),typeof r!="function"&&(nn===null?nn=new Set([this]):nn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Td(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new iv;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=yv.bind(null,t,e,n),e.then(t,t))}function Rd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Pd(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pt(-1,1),e.tag=2,tn(n,e,1))),n.lanes|=1),t)}var sv=zt.ReactCurrentOwner,Fe=!1;function Ae(t,e,n,r){e.child=t===null?up(e,null,n,r):kr(e,t.child,n,r)}function Dd(t,e,n,r,i){n=n.render;var s=e.ref;return gr(e,i),r=Du(t,e,n,r,s,i),n=Au(),t!==null&&!Fe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Lt(t,e,i)):(ne&&n&&vu(e),e.flags|=1,Ae(t,e,r,i),e.child)}function Ad(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Wu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Lp(t,e,s,r,i)):(t=js(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ii,n(o,r)&&t.ref===e.ref)return Lt(t,e,i)}return e.flags|=1,t=sn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Lp(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ii(s,r)&&t.ref===e.ref)if(Fe=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Fe=!0);else return e.lanes=t.lanes,Lt(t,e,i)}return Ca(t,e,n,r,i)}function bp(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(cr,Ve),Ve|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,X(cr,Ve),Ve|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,X(cr,Ve),Ve|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,X(cr,Ve),Ve|=r;return Ae(t,e,i,n),e.child}function Fp(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ca(t,e,n,r,i){var s=Be(n)?Pn:Re.current;return s=Sr(e,s),gr(e,i),n=Du(t,e,n,r,s,i),r=Au(),t!==null&&!Fe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Lt(t,e,i)):(ne&&r&&vu(e),e.flags|=1,Ae(t,e,n,i),e.child)}function Od(t,e,n,r,i){if(Be(n)){var s=!0;qs(e)}else s=!1;if(gr(e,i),e.stateNode===null)Ls(t,e),Ap(e,n,r),va(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=tt(u):(u=Be(n)?Pn:Re.current,u=Sr(e,u));var f=n.getDerivedStateFromProps,c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Nd(e,o,r,u),Gt=!1;var d=e.memoizedState;o.state=d,to(e,r,o,i),a=e.memoizedState,l!==r||d!==a||Ue.current||Gt?(typeof f=="function"&&(ya(e,n,f,r),a=e.memoizedState),(l=Gt||Id(e,n,l,r,d,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,dp(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:st(e.type,l),o.props=u,c=e.pendingProps,d=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=tt(a):(a=Be(n)?Pn:Re.current,a=Sr(e,a));var y=n.getDerivedStateFromProps;(f=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||d!==a)&&Nd(e,o,r,a),Gt=!1,d=e.memoizedState,o.state=d,to(e,r,o,i);var v=e.memoizedState;l!==c||d!==v||Ue.current||Gt?(typeof y=="function"&&(ya(e,n,y,r),v=e.memoizedState),(u=Gt||Id(e,n,u,r,d,v,a)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Ea(t,e,n,r,s,i)}function Ea(t,e,n,r,i,s){Fp(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&yd(e,n,!1),Lt(t,e,s);r=e.stateNode,sv.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=kr(e,t.child,null,s),e.child=kr(e,null,l,s)):Ae(t,e,l,s),e.memoizedState=r.state,i&&yd(e,n,!0),e.child}function jp(t){var e=t.stateNode;e.pendingContext?_d(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_d(t,e.context,!1),Nu(t,e.containerInfo)}function Md(t,e,n,r,i){return xr(),Cu(i),e.flags|=256,Ae(t,e,n,r),e.child}var Sa={dehydrated:null,treeContext:null,retryLane:0};function xa(t){return{baseLanes:t,cachePool:null,transitions:null}}function zp(t,e,n){var r=e.pendingProps,i=re.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),X(re,i&1),t===null)return ga(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Uo(o,r,0,null),t=Rn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=xa(n),e.memoizedState=Sa,t):Lu(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return ov(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=sn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=sn(l,s):(s=Rn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?xa(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Sa,r}return s=t.child,t=s.sibling,r=sn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Lu(t,e){return e=Uo({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Cs(t,e,n,r){return r!==null&&Cu(r),kr(e,t.child,null,n),t=Lu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ov(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=xl(Error(S(422))),Cs(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Uo({mode:"visible",children:r.children},i,0,null),s=Rn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&kr(e,t.child,null,o),e.child.memoizedState=xa(o),e.memoizedState=Sa,s);if(!(e.mode&1))return Cs(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(S(419)),r=xl(s,r,void 0),Cs(t,e,o,r)}if(l=(o&t.childLanes)!==0,Fe||l){if(r=we,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Mt(t,i),ft(r,t,i,-1))}return Bu(),r=xl(Error(S(421))),Cs(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=vv.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ge=en(i.nextSibling),Qe=e,ne=!0,lt=null,t!==null&&(Xe[Je++]=Nt,Xe[Je++]=Tt,Xe[Je++]=Dn,Nt=t.id,Tt=t.overflow,Dn=e),e=Lu(e,r.children),e.flags|=4096,e)}function Ld(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),_a(t.return,e,n)}function kl(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Up(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ae(t,e,r.children,n),r=re.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ld(t,n,e);else if(t.tag===19)Ld(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(X(re,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&no(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),kl(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&no(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}kl(e,!0,n,null,s);break;case"together":kl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ls(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Lt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),On|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=sn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=sn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function lv(t,e,n){switch(e.tag){case 3:jp(e),xr();break;case 5:fp(e);break;case 1:Be(e.type)&&qs(e);break;case 4:Nu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;X(Zs,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(X(re,re.current&1),e.flags|=128,null):n&e.child.childLanes?zp(t,e,n):(X(re,re.current&1),t=Lt(t,e,n),t!==null?t.sibling:null);X(re,re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Up(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(re,re.current),r)break;return null;case 22:case 23:return e.lanes=0,bp(t,e,n)}return Lt(t,e,n)}var Bp,ka,Wp,Hp;Bp=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ka=function(){};Wp=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,kn(St.current);var s=null;switch(n){case"input":i=Ql(t,i),r=Ql(t,r),s=[];break;case"select":i=se({},i,{value:void 0}),r=se({},r,{value:void 0}),s=[];break;case"textarea":i=ql(t,i),r=ql(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ys)}Jl(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(vi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(vi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Z("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Hp=function(t,e,n,r){n!==r&&(e.flags|=4)};function Qr(t,e){if(!ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ie(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function av(t,e,n){var r=e.pendingProps;switch(wu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(e),null;case 1:return Be(e.type)&&Ks(),Ie(e),null;case 3:return r=e.stateNode,Ir(),te(Ue),te(Re),Ru(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(vs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,lt!==null&&(Oa(lt),lt=null))),ka(t,e),Ie(e),null;case 5:Tu(e);var i=kn(Di.current);if(n=e.type,t!==null&&e.stateNode!=null)Wp(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return Ie(e),null}if(t=kn(St.current),vs(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ct]=e,r[Ri]=s,t=(e.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(i=0;i<ri.length;i++)Z(ri[i],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":$c(r,s),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Z("invalid",r);break;case"textarea":Gc(r,s),Z("invalid",r)}Jl(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ys(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ys(r.textContent,l,t),i=["children",""+l]):vi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Z("scroll",r)}switch(n){case"input":cs(r),Vc(r,s,!0);break;case"textarea":cs(r),Qc(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ys)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=_h(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ct]=e,t[Ri]=r,Bp(t,e,!1,!1),e.stateNode=t;e:{switch(o=Zl(n,r),n){case"dialog":Z("cancel",t),Z("close",t),i=r;break;case"iframe":case"object":case"embed":Z("load",t),i=r;break;case"video":case"audio":for(i=0;i<ri.length;i++)Z(ri[i],t);i=r;break;case"source":Z("error",t),i=r;break;case"img":case"image":case"link":Z("error",t),Z("load",t),i=r;break;case"details":Z("toggle",t),i=r;break;case"input":$c(t,r),i=Ql(t,r),Z("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=se({},r,{value:void 0}),Z("invalid",t);break;case"textarea":Gc(t,r),i=ql(t,r),Z("invalid",t);break;default:i=r}Jl(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?wh(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&yh(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&wi(t,a):typeof a=="number"&&wi(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(vi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&Z("scroll",t):a!=null&&su(t,s,a,o))}switch(n){case"input":cs(t),Vc(t,r,!1);break;case"textarea":cs(t),Qc(t);break;case"option":r.value!=null&&t.setAttribute("value",""+un(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?fr(t,!!r.multiple,s,!1):r.defaultValue!=null&&fr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ys)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ie(e),null;case 6:if(t&&e.stateNode!=null)Hp(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=kn(Di.current),kn(St.current),vs(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ct]=e,(s=r.nodeValue!==n)&&(t=Qe,t!==null))switch(t.tag){case 3:ys(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ys(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ct]=e,e.stateNode=r}return Ie(e),null;case 13:if(te(re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ne&&Ge!==null&&e.mode&1&&!(e.flags&128))lp(),xr(),e.flags|=98560,s=!1;else if(s=vs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[Ct]=e}else xr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ie(e),s=!1}else lt!==null&&(Oa(lt),lt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||re.current&1?me===0&&(me=3):Bu())),e.updateQueue!==null&&(e.flags|=4),Ie(e),null);case 4:return Ir(),ka(t,e),t===null&&Ni(e.stateNode.containerInfo),Ie(e),null;case 10:return xu(e.type._context),Ie(e),null;case 17:return Be(e.type)&&Ks(),Ie(e),null;case 19:if(te(re),s=e.memoizedState,s===null)return Ie(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Qr(s,!1);else{if(me!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=no(t),o!==null){for(e.flags|=128,Qr(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return X(re,re.current&1|2),e.child}t=t.sibling}s.tail!==null&&ce()>Tr&&(e.flags|=128,r=!0,Qr(s,!1),e.lanes=4194304)}else{if(!r)if(t=no(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Qr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ne)return Ie(e),null}else 2*ce()-s.renderingStartTime>Tr&&n!==1073741824&&(e.flags|=128,r=!0,Qr(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ce(),e.sibling=null,n=re.current,X(re,r?n&1|2:n&1),e):(Ie(e),null);case 22:case 23:return Uu(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ve&1073741824&&(Ie(e),e.subtreeFlags&6&&(e.flags|=8192)):Ie(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function uv(t,e){switch(wu(e),e.tag){case 1:return Be(e.type)&&Ks(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ir(),te(Ue),te(Re),Ru(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Tu(e),null;case 13:if(te(re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));xr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return te(re),null;case 4:return Ir(),null;case 10:return xu(e.type._context),null;case 22:case 23:return Uu(),null;case 24:return null;default:return null}}var Es=!1,Ne=!1,cv=typeof WeakSet=="function"?WeakSet:Set,T=null;function ur(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){le(t,e,r)}else n.current=null}function Ia(t,e,n){try{n()}catch(r){le(t,e,r)}}var bd=!1;function dv(t,e){if(ua=Vs,t=Yh(),yu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,f=0,c=t,d=null;t:for(;;){for(var y;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(y=c.firstChild)!==null;)d=c,c=y;for(;;){if(c===t)break t;if(d===n&&++u===i&&(l=o),d===s&&++f===r&&(a=o),(y=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=y}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ca={focusedElem:t,selectionRange:n},Vs=!1,T=e;T!==null;)if(e=T,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,T=t;else for(;T!==null;){e=T;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,b=v.memoizedState,g=e.stateNode,h=g.getSnapshotBeforeUpdate(e.elementType===e.type?w:st(e.type,w),b);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(E){le(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,T=t;break}T=e.return}return v=bd,bd=!1,v}function ci(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ia(e,n,s)}i=i.next}while(i!==r)}}function jo(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Na(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function $p(t){var e=t.alternate;e!==null&&(t.alternate=null,$p(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ct],delete e[Ri],delete e[ha],delete e[Qy],delete e[Yy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Vp(t){return t.tag===5||t.tag===3||t.tag===4}function Fd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Vp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ta(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ys));else if(r!==4&&(t=t.child,t!==null))for(Ta(t,e,n),t=t.sibling;t!==null;)Ta(t,e,n),t=t.sibling}function Ra(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ra(t,e,n),t=t.sibling;t!==null;)Ra(t,e,n),t=t.sibling}var Ce=null,ot=!1;function $t(t,e,n){for(n=n.child;n!==null;)Gp(t,e,n),n=n.sibling}function Gp(t,e,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Po,n)}catch{}switch(n.tag){case 5:Ne||ur(n,e);case 6:var r=Ce,i=ot;Ce=null,$t(t,e,n),Ce=r,ot=i,Ce!==null&&(ot?(t=Ce,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ce.removeChild(n.stateNode));break;case 18:Ce!==null&&(ot?(t=Ce,n=n.stateNode,t.nodeType===8?yl(t.parentNode,n):t.nodeType===1&&yl(t,n),xi(t)):yl(Ce,n.stateNode));break;case 4:r=Ce,i=ot,Ce=n.stateNode.containerInfo,ot=!0,$t(t,e,n),Ce=r,ot=i;break;case 0:case 11:case 14:case 15:if(!Ne&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ia(n,e,o),i=i.next}while(i!==r)}$t(t,e,n);break;case 1:if(!Ne&&(ur(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){le(n,e,l)}$t(t,e,n);break;case 21:$t(t,e,n);break;case 22:n.mode&1?(Ne=(r=Ne)||n.memoizedState!==null,$t(t,e,n),Ne=r):$t(t,e,n);break;default:$t(t,e,n)}}function jd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new cv),e.forEach(function(r){var i=wv.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function it(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ce=l.stateNode,ot=!1;break e;case 3:Ce=l.stateNode.containerInfo,ot=!0;break e;case 4:Ce=l.stateNode.containerInfo,ot=!0;break e}l=l.return}if(Ce===null)throw Error(S(160));Gp(s,o,i),Ce=null,ot=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){le(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Qp(e,t),e=e.sibling}function Qp(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(it(e,t),vt(t),r&4){try{ci(3,t,t.return),jo(3,t)}catch(w){le(t,t.return,w)}try{ci(5,t,t.return)}catch(w){le(t,t.return,w)}}break;case 1:it(e,t),vt(t),r&512&&n!==null&&ur(n,n.return);break;case 5:if(it(e,t),vt(t),r&512&&n!==null&&ur(n,n.return),t.flags&32){var i=t.stateNode;try{wi(i,"")}catch(w){le(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&mh(i,s),Zl(l,o);var u=Zl(l,s);for(o=0;o<a.length;o+=2){var f=a[o],c=a[o+1];f==="style"?wh(i,c):f==="dangerouslySetInnerHTML"?yh(i,c):f==="children"?wi(i,c):su(i,f,c,u)}switch(l){case"input":Yl(i,s);break;case"textarea":gh(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?fr(i,!!s.multiple,y,!1):d!==!!s.multiple&&(s.defaultValue!=null?fr(i,!!s.multiple,s.defaultValue,!0):fr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ri]=s}catch(w){le(t,t.return,w)}}break;case 6:if(it(e,t),vt(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){le(t,t.return,w)}}break;case 3:if(it(e,t),vt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xi(e.containerInfo)}catch(w){le(t,t.return,w)}break;case 4:it(e,t),vt(t);break;case 13:it(e,t),vt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ju=ce())),r&4&&jd(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ne=(u=Ne)||f,it(e,t),Ne=u):it(e,t),vt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(T=t,f=t.child;f!==null;){for(c=T=f;T!==null;){switch(d=T,y=d.child,d.tag){case 0:case 11:case 14:case 15:ci(4,d,d.return);break;case 1:ur(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){le(r,n,w)}}break;case 5:ur(d,d.return);break;case 22:if(d.memoizedState!==null){Ud(c);continue}}y!==null?(y.return=d,T=y):Ud(c)}f=f.sibling}e:for(f=null,c=t;;){if(c.tag===5){if(f===null){f=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=vh("display",o))}catch(w){le(t,t.return,w)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(w){le(t,t.return,w)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:it(e,t),vt(t),r&4&&jd(t);break;case 21:break;default:it(e,t),vt(t)}}function vt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Vp(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(wi(i,""),r.flags&=-33);var s=Fd(t);Ra(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Fd(t);Ta(t,l,o);break;default:throw Error(S(161))}}catch(a){le(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function fv(t,e,n){T=t,Yp(t)}function Yp(t,e,n){for(var r=(t.mode&1)!==0;T!==null;){var i=T,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Es;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ne;l=Es;var u=Ne;if(Es=o,(Ne=a)&&!u)for(T=i;T!==null;)o=T,a=o.child,o.tag===22&&o.memoizedState!==null?Bd(i):a!==null?(a.return=o,T=a):Bd(i);for(;s!==null;)T=s,Yp(s),s=s.sibling;T=i,Es=l,Ne=u}zd(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,T=s):zd(t)}}function zd(t){for(;T!==null;){var e=T;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ne||jo(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ne)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:st(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Sd(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Sd(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&xi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Ne||e.flags&512&&Na(e)}catch(d){le(e,e.return,d)}}if(e===t){T=null;break}if(n=e.sibling,n!==null){n.return=e.return,T=n;break}T=e.return}}function Ud(t){for(;T!==null;){var e=T;if(e===t){T=null;break}var n=e.sibling;if(n!==null){n.return=e.return,T=n;break}T=e.return}}function Bd(t){for(;T!==null;){var e=T;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{jo(4,e)}catch(a){le(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){le(e,i,a)}}var s=e.return;try{Na(e)}catch(a){le(e,s,a)}break;case 5:var o=e.return;try{Na(e)}catch(a){le(e,o,a)}}}catch(a){le(e,e.return,a)}if(e===t){T=null;break}var l=e.sibling;if(l!==null){l.return=e.return,T=l;break}T=e.return}}var hv=Math.ceil,so=zt.ReactCurrentDispatcher,bu=zt.ReactCurrentOwner,et=zt.ReactCurrentBatchConfig,$=0,we=null,fe=null,Se=0,Ve=0,cr=pn(0),me=0,Li=null,On=0,zo=0,Fu=0,di=null,be=null,ju=0,Tr=1/0,kt=null,oo=!1,Pa=null,nn=null,Ss=!1,qt=null,lo=0,fi=0,Da=null,bs=-1,Fs=0;function Oe(){return $&6?ce():bs!==-1?bs:bs=ce()}function rn(t){return t.mode&1?$&2&&Se!==0?Se&-Se:qy.transition!==null?(Fs===0&&(Fs=Ah()),Fs):(t=G,t!==0||(t=window.event,t=t===void 0?16:zh(t.type)),t):1}function ft(t,e,n,r){if(50<fi)throw fi=0,Da=null,Error(S(185));Gi(t,n,r),(!($&2)||t!==we)&&(t===we&&(!($&2)&&(zo|=n),me===4&&Yt(t,Se)),We(t,r),n===1&&$===0&&!(e.mode&1)&&(Tr=ce()+500,Lo&&mn()))}function We(t,e){var n=t.callbackNode;q_(t,e);var r=$s(t,t===we?Se:0);if(r===0)n!==null&&qc(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&qc(n),e===1)t.tag===0?Ky(Wd.bind(null,t)):ip(Wd.bind(null,t)),Vy(function(){!($&6)&&mn()}),n=null;else{switch(Oh(r)){case 1:n=cu;break;case 4:n=Ph;break;case 16:n=Hs;break;case 536870912:n=Dh;break;default:n=Hs}n=nm(n,Kp.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Kp(t,e){if(bs=-1,Fs=0,$&6)throw Error(S(327));var n=t.callbackNode;if(_r()&&t.callbackNode!==n)return null;var r=$s(t,t===we?Se:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ao(t,r);else{e=r;var i=$;$|=2;var s=Xp();(we!==t||Se!==e)&&(kt=null,Tr=ce()+500,Tn(t,e));do try{gv();break}catch(l){qp(t,l)}while(!0);Su(),so.current=s,$=i,fe!==null?e=0:(we=null,Se=0,e=me)}if(e!==0){if(e===2&&(i=ia(t),i!==0&&(r=i,e=Aa(t,i))),e===1)throw n=Li,Tn(t,0),Yt(t,r),We(t,ce()),n;if(e===6)Yt(t,r);else{if(i=t.current.alternate,!(r&30)&&!pv(i)&&(e=ao(t,r),e===2&&(s=ia(t),s!==0&&(r=s,e=Aa(t,s))),e===1))throw n=Li,Tn(t,0),Yt(t,r),We(t,ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:wn(t,be,kt);break;case 3:if(Yt(t,r),(r&130023424)===r&&(e=ju+500-ce(),10<e)){if($s(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Oe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=fa(wn.bind(null,t,be,kt),e);break}wn(t,be,kt);break;case 4:if(Yt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-dt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hv(r/1960))-r,10<r){t.timeoutHandle=fa(wn.bind(null,t,be,kt),r);break}wn(t,be,kt);break;case 5:wn(t,be,kt);break;default:throw Error(S(329))}}}return We(t,ce()),t.callbackNode===n?Kp.bind(null,t):null}function Aa(t,e){var n=di;return t.current.memoizedState.isDehydrated&&(Tn(t,e).flags|=256),t=ao(t,e),t!==2&&(e=be,be=n,e!==null&&Oa(e)),t}function Oa(t){be===null?be=t:be.push.apply(be,t)}function pv(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!pt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yt(t,e){for(e&=~Fu,e&=~zo,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-dt(e),r=1<<n;t[n]=-1,e&=~r}}function Wd(t){if($&6)throw Error(S(327));_r();var e=$s(t,0);if(!(e&1))return We(t,ce()),null;var n=ao(t,e);if(t.tag!==0&&n===2){var r=ia(t);r!==0&&(e=r,n=Aa(t,r))}if(n===1)throw n=Li,Tn(t,0),Yt(t,e),We(t,ce()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wn(t,be,kt),We(t,ce()),null}function zu(t,e){var n=$;$|=1;try{return t(e)}finally{$=n,$===0&&(Tr=ce()+500,Lo&&mn())}}function Mn(t){qt!==null&&qt.tag===0&&!($&6)&&_r();var e=$;$|=1;var n=et.transition,r=G;try{if(et.transition=null,G=1,t)return t()}finally{G=r,et.transition=n,$=e,!($&6)&&mn()}}function Uu(){Ve=cr.current,te(cr)}function Tn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,$y(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(wu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ks();break;case 3:Ir(),te(Ue),te(Re),Ru();break;case 5:Tu(r);break;case 4:Ir();break;case 13:te(re);break;case 19:te(re);break;case 10:xu(r.type._context);break;case 22:case 23:Uu()}n=n.return}if(we=t,fe=t=sn(t.current,null),Se=Ve=e,me=0,Li=null,Fu=zo=On=0,be=di=null,xn!==null){for(e=0;e<xn.length;e++)if(n=xn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}xn=null}return t}function qp(t,e){do{var n=fe;try{if(Su(),Os.current=io,ro){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ro=!1}if(An=0,_e=he=ie=null,ui=!1,Ai=0,bu.current=null,n===null||n.return===null){me=1,Li=e,fe=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Se,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,f=l,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=Rd(o);if(y!==null){y.flags&=-257,Pd(y,o,l,s,e),y.mode&1&&Td(s,u,e),e=y,a=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(a),e.updateQueue=w}else v.add(a);break e}else{if(!(e&1)){Td(s,u,e),Bu();break e}a=Error(S(426))}}else if(ne&&l.mode&1){var b=Rd(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Pd(b,o,l,s,e),Cu(Nr(a,l));break e}}s=a=Nr(a,l),me!==4&&(me=2),di===null?di=[s]:di.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=Op(s,a,e);Ed(s,g);break e;case 1:l=a;var h=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(nn===null||!nn.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Mp(s,l,e);Ed(s,E);break e}}s=s.return}while(s!==null)}Zp(n)}catch(I){e=I,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(!0)}function Xp(){var t=so.current;return so.current=io,t===null?io:t}function Bu(){(me===0||me===3||me===2)&&(me=4),we===null||!(On&268435455)&&!(zo&268435455)||Yt(we,Se)}function ao(t,e){var n=$;$|=2;var r=Xp();(we!==t||Se!==e)&&(kt=null,Tn(t,e));do try{mv();break}catch(i){qp(t,i)}while(!0);if(Su(),$=n,so.current=r,fe!==null)throw Error(S(261));return we=null,Se=0,me}function mv(){for(;fe!==null;)Jp(fe)}function gv(){for(;fe!==null&&!B_();)Jp(fe)}function Jp(t){var e=tm(t.alternate,t,Ve);t.memoizedProps=t.pendingProps,e===null?Zp(t):fe=e,bu.current=null}function Zp(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=uv(n,e),n!==null){n.flags&=32767,fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{me=6,fe=null;return}}else if(n=av(n,e,Ve),n!==null){fe=n;return}if(e=e.sibling,e!==null){fe=e;return}fe=e=t}while(e!==null);me===0&&(me=5)}function wn(t,e,n){var r=G,i=et.transition;try{et.transition=null,G=1,_v(t,e,n,r)}finally{et.transition=i,G=r}return null}function _v(t,e,n,r){do _r();while(qt!==null);if($&6)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(X_(t,s),t===we&&(fe=we=null,Se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ss||(Ss=!0,nm(Hs,function(){return _r(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=et.transition,et.transition=null;var o=G;G=1;var l=$;$|=4,bu.current=null,dv(t,n),Qp(n,t),Fy(ca),Vs=!!ua,ca=ua=null,t.current=n,fv(n),W_(),$=l,G=o,et.transition=s}else t.current=n;if(Ss&&(Ss=!1,qt=t,lo=i),s=t.pendingLanes,s===0&&(nn=null),V_(n.stateNode),We(t,ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(oo)throw oo=!1,t=Pa,Pa=null,t;return lo&1&&t.tag!==0&&_r(),s=t.pendingLanes,s&1?t===Da?fi++:(fi=0,Da=t):fi=0,mn(),null}function _r(){if(qt!==null){var t=Oh(lo),e=et.transition,n=G;try{if(et.transition=null,G=16>t?16:t,qt===null)var r=!1;else{if(t=qt,qt=null,lo=0,$&6)throw Error(S(331));var i=$;for($|=4,T=t.current;T!==null;){var s=T,o=s.child;if(T.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(T=u;T!==null;){var f=T;switch(f.tag){case 0:case 11:case 15:ci(8,f,s)}var c=f.child;if(c!==null)c.return=f,T=c;else for(;T!==null;){f=T;var d=f.sibling,y=f.return;if($p(f),f===u){T=null;break}if(d!==null){d.return=y,T=d;break}T=y}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var b=w.sibling;w.sibling=null,w=b}while(w!==null)}}T=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,T=o;else e:for(;T!==null;){if(s=T,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ci(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,T=g;break e}T=s.return}}var h=t.current;for(T=h;T!==null;){o=T;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,T=_;else e:for(o=h;T!==null;){if(l=T,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:jo(9,l)}}catch(I){le(l,l.return,I)}if(l===o){T=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,T=E;break e}T=l.return}}if($=i,mn(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Po,t)}catch{}r=!0}return r}finally{G=n,et.transition=e}}return!1}function Hd(t,e,n){e=Nr(n,e),e=Op(t,e,1),t=tn(t,e,1),e=Oe(),t!==null&&(Gi(t,1,e),We(t,e))}function le(t,e,n){if(t.tag===3)Hd(t,t,n);else for(;e!==null;){if(e.tag===3){Hd(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nn===null||!nn.has(r))){t=Nr(n,t),t=Mp(e,t,1),e=tn(e,t,1),t=Oe(),e!==null&&(Gi(e,1,t),We(e,t));break}}e=e.return}}function yv(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Oe(),t.pingedLanes|=t.suspendedLanes&n,we===t&&(Se&n)===n&&(me===4||me===3&&(Se&130023424)===Se&&500>ce()-ju?Tn(t,0):Fu|=n),We(t,e)}function em(t,e){e===0&&(t.mode&1?(e=hs,hs<<=1,!(hs&130023424)&&(hs=4194304)):e=1);var n=Oe();t=Mt(t,e),t!==null&&(Gi(t,e,n),We(t,n))}function vv(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),em(t,n)}function wv(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),em(t,n)}var tm;tm=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ue.current)Fe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Fe=!1,lv(t,e,n);Fe=!!(t.flags&131072)}else Fe=!1,ne&&e.flags&1048576&&sp(e,Js,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ls(t,e),t=e.pendingProps;var i=Sr(e,Re.current);gr(e,n),i=Du(null,e,r,t,i,n);var s=Au();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Be(r)?(s=!0,qs(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Iu(e),i.updater=Fo,e.stateNode=i,i._reactInternals=e,va(e,r,t,n),e=Ea(null,e,r,!0,s,n)):(e.tag=0,ne&&s&&vu(e),Ae(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ls(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Ev(r),t=st(r,t),i){case 0:e=Ca(null,e,r,t,n);break e;case 1:e=Od(null,e,r,t,n);break e;case 11:e=Dd(null,e,r,t,n);break e;case 14:e=Ad(null,e,r,st(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),Ca(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),Od(t,e,r,i,n);case 3:e:{if(jp(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,dp(t,e),to(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Nr(Error(S(423)),e),e=Md(t,e,r,n,i);break e}else if(r!==i){i=Nr(Error(S(424)),e),e=Md(t,e,r,n,i);break e}else for(Ge=en(e.stateNode.containerInfo.firstChild),Qe=e,ne=!0,lt=null,n=up(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xr(),r===i){e=Lt(t,e,n);break e}Ae(t,e,r,n)}e=e.child}return e;case 5:return fp(e),t===null&&ga(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,da(r,i)?o=null:s!==null&&da(r,s)&&(e.flags|=32),Fp(t,e),Ae(t,e,o,n),e.child;case 6:return t===null&&ga(e),null;case 13:return zp(t,e,n);case 4:return Nu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=kr(e,null,r,n):Ae(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),Dd(t,e,r,i,n);case 7:return Ae(t,e,e.pendingProps,n),e.child;case 8:return Ae(t,e,e.pendingProps.children,n),e.child;case 12:return Ae(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,X(Zs,r._currentValue),r._currentValue=o,s!==null)if(pt(s.value,o)){if(s.children===i.children&&!Ue.current){e=Lt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Pt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?a.next=a:(a.next=f.next,f.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),_a(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),_a(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ae(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,gr(e,n),i=tt(i),r=r(i),e.flags|=1,Ae(t,e,r,n),e.child;case 14:return r=e.type,i=st(r,e.pendingProps),i=st(r.type,i),Ad(t,e,r,i,n);case 15:return Lp(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),Ls(t,e),e.tag=1,Be(r)?(t=!0,qs(e)):t=!1,gr(e,n),Ap(e,r,i),va(e,r,i,n),Ea(null,e,r,!0,t,n);case 19:return Up(t,e,n);case 22:return bp(t,e,n)}throw Error(S(156,e.tag))};function nm(t,e){return Rh(t,e)}function Cv(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(t,e,n,r){return new Cv(t,e,n,r)}function Wu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ev(t){if(typeof t=="function")return Wu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===lu)return 11;if(t===au)return 14}return 2}function sn(t,e){var n=t.alternate;return n===null?(n=Ze(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function js(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Wu(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case er:return Rn(n.children,i,s,e);case ou:o=8,i|=8;break;case Hl:return t=Ze(12,n,e,i|2),t.elementType=Hl,t.lanes=s,t;case $l:return t=Ze(13,n,e,i),t.elementType=$l,t.lanes=s,t;case Vl:return t=Ze(19,n,e,i),t.elementType=Vl,t.lanes=s,t;case fh:return Uo(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ch:o=10;break e;case dh:o=9;break e;case lu:o=11;break e;case au:o=14;break e;case Vt:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=Ze(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Rn(t,e,n,r){return t=Ze(7,t,r,e),t.lanes=n,t}function Uo(t,e,n,r){return t=Ze(22,t,r,e),t.elementType=fh,t.lanes=n,t.stateNode={isHidden:!1},t}function Il(t,e,n){return t=Ze(6,t,null,e),t.lanes=n,t}function Nl(t,e,n){return e=Ze(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Sv(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ll(0),this.expirationTimes=ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ll(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Hu(t,e,n,r,i,s,o,l,a){return t=new Sv(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ze(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Iu(s),t}function xv(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function rm(t){if(!t)return cn;t=t._reactInternals;e:{if(Un(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Be(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(Be(n))return rp(t,n,e)}return e}function im(t,e,n,r,i,s,o,l,a){return t=Hu(n,r,!0,t,i,s,o,l,a),t.context=rm(null),n=t.current,r=Oe(),i=rn(n),s=Pt(r,i),s.callback=e??null,tn(n,s,i),t.current.lanes=i,Gi(t,i,r),We(t,r),t}function Bo(t,e,n,r){var i=e.current,s=Oe(),o=rn(i);return n=rm(n),e.context===null?e.context=n:e.pendingContext=n,e=Pt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=tn(i,e,o),t!==null&&(ft(t,i,o,s),As(t,i,o)),o}function uo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $d(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function $u(t,e){$d(t,e),(t=t.alternate)&&$d(t,e)}function kv(){return null}var sm=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vu(t){this._internalRoot=t}Wo.prototype.render=Vu.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));Bo(t,e,null,null)};Wo.prototype.unmount=Vu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Mn(function(){Bo(null,t,null,null)}),e[Ot]=null}};function Wo(t){this._internalRoot=t}Wo.prototype.unstable_scheduleHydration=function(t){if(t){var e=bh();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qt.length&&e!==0&&e<Qt[n].priority;n++);Qt.splice(n,0,t),n===0&&jh(t)}};function Gu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ho(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vd(){}function Iv(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=uo(o);s.call(u)}}var o=im(e,r,t,0,null,!1,!1,"",Vd);return t._reactRootContainer=o,t[Ot]=o.current,Ni(t.nodeType===8?t.parentNode:t),Mn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=uo(a);l.call(u)}}var a=Hu(t,0,!1,null,null,!1,!1,"",Vd);return t._reactRootContainer=a,t[Ot]=a.current,Ni(t.nodeType===8?t.parentNode:t),Mn(function(){Bo(e,a,n,r)}),a}function $o(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=uo(o);l.call(a)}}Bo(e,o,t,i)}else o=Iv(n,e,t,i,r);return uo(o)}Mh=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ni(e.pendingLanes);n!==0&&(du(e,n|1),We(e,ce()),!($&6)&&(Tr=ce()+500,mn()))}break;case 13:Mn(function(){var r=Mt(t,1);if(r!==null){var i=Oe();ft(r,t,1,i)}}),$u(t,1)}};fu=function(t){if(t.tag===13){var e=Mt(t,134217728);if(e!==null){var n=Oe();ft(e,t,134217728,n)}$u(t,134217728)}};Lh=function(t){if(t.tag===13){var e=rn(t),n=Mt(t,e);if(n!==null){var r=Oe();ft(n,t,e,r)}$u(t,e)}};bh=function(){return G};Fh=function(t,e){var n=G;try{return G=t,e()}finally{G=n}};ta=function(t,e,n){switch(e){case"input":if(Yl(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Mo(r);if(!i)throw Error(S(90));ph(r),Yl(r,i)}}}break;case"textarea":gh(t,n);break;case"select":e=n.value,e!=null&&fr(t,!!n.multiple,e,!1)}};Sh=zu;xh=Mn;var Nv={usingClientEntryPoint:!1,Events:[Yi,ir,Mo,Ch,Eh,zu]},Yr={findFiberByHostInstance:Sn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Tv={bundleType:Yr.bundleType,version:Yr.version,rendererPackageName:Yr.rendererPackageName,rendererConfig:Yr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Nh(t),t===null?null:t.stateNode},findFiberByHostInstance:Yr.findFiberByHostInstance||kv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xs.isDisabled&&xs.supportsFiber)try{Po=xs.inject(Tv),Et=xs}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nv;Ke.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gu(e))throw Error(S(200));return xv(t,e,null,n)};Ke.createRoot=function(t,e){if(!Gu(t))throw Error(S(299));var n=!1,r="",i=sm;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Hu(t,1,!1,null,null,n,!1,r,i),t[Ot]=e.current,Ni(t.nodeType===8?t.parentNode:t),new Vu(e)};Ke.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=Nh(e),t=t===null?null:t.stateNode,t};Ke.flushSync=function(t){return Mn(t)};Ke.hydrate=function(t,e,n){if(!Ho(e))throw Error(S(200));return $o(null,t,e,!0,n)};Ke.hydrateRoot=function(t,e,n){if(!Gu(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=sm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=im(e,null,t,1,n??null,i,!1,s,o),t[Ot]=e.current,Ni(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Wo(e)};Ke.render=function(t,e,n){if(!Ho(e))throw Error(S(200));return $o(null,t,e,!1,n)};Ke.unmountComponentAtNode=function(t){if(!Ho(t))throw Error(S(40));return t._reactRootContainer?(Mn(function(){$o(null,null,t,!1,function(){t._reactRootContainer=null,t[Ot]=null})}),!0):!1};Ke.unstable_batchedUpdates=zu;Ke.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ho(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return $o(t,e,n,!1,r)};Ke.version="18.3.1-next-f1338f8080-20240426";function om(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(om)}catch(t){console.error(t)}}om(),oh.exports=Ke;var Rv=oh.exports,Gd=Rv;Bl.createRoot=Gd.createRoot,Bl.hydrateRoot=Gd.hydrateRoot;const Pv=()=>{};var Qd={};/**
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
 */const lm={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const k=function(t,e){if(!t)throw br(e)},br=function(t){return new Error("Firebase Database ("+lm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const am=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Dv=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Qu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,f=s>>2,c=(s&3)<<4|l>>4;let d=(l&15)<<2|u>>6,y=u&63;a||(y=64,o||(d=64)),r.push(n[f],n[c],n[d],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(am(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Dv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new Av;const d=s<<2|l>>4;if(r.push(d),u!==64){const y=l<<4&240|u>>2;if(r.push(y),c!==64){const v=u<<6&192|c;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Av extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const um=function(t){const e=am(t);return Qu.encodeByteArray(e,!0)},co=function(t){return um(t).replace(/\./g,"")},Ma=function(t){try{return Qu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ov(t){return cm(void 0,t)}function cm(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Mv(n)||(t[n]=cm(t[n],e[n]));return t}function Mv(t){return t!=="__proto__"}/**
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
 */function Lv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bv=()=>Lv().__FIREBASE_DEFAULTS__,Fv=()=>{if(typeof process>"u"||typeof Qd>"u")return;const t=Qd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ma(t[1]);return e&&JSON.parse(e)},dm=()=>{try{return Pv()||bv()||Fv()||jv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zv=t=>{var e,n;return(n=(e=dm())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Uv=t=>{const e=zv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},fm=()=>{var t;return(t=dm())==null?void 0:t.config};/**
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
 */class Vo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Bv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[co(JSON.stringify(n)),co(JSON.stringify(o)),""].join(".")}/**
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
 */function Wv(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Wv())}function Hv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $v(){return lm.NODE_ADMIN===!0}function Vv(){try{return typeof indexedDB=="object"}catch{return!1}}function Gv(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Qv="FirebaseError";class qi extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Qv,Object.setPrototypeOf(this,qi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pm.prototype.create)}}class pm{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Yv(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new qi(i,l,r)}}function Yv(t,e){return t.replace(Kv,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Kv=/\{\$([^}]+)}/g;/**
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
 */function bi(t){return JSON.parse(t)}function ve(t){return JSON.stringify(t)}/**
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
 */const mm=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=bi(Ma(s[0])||""),n=bi(Ma(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},qv=function(t){const e=mm(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Xv=function(t){const e=mm(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ut(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Rr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Yd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ho(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Kd(s)&&Kd(o)){if(!ho(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Kd(t){return t!==null&&typeof t=="object"}/**
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
 */function Jv(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class Zv{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const d=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,f;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),f=1518500249):(u=s^o^l,f=1859775393):c<60?(u=s&o|l&(s|o),f=2400959708):(u=s^o^l,f=3395469782);const d=(i<<5|i>>>27)+u+a+f+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Yu(t,e){return`${t} failed: ${e} argument `}/**
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
 */const e0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,k(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Go=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Xi(t){return t&&t._delegate?t._delegate:t}/**
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
 */function gm(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function t0(t){return(await fetch(t,{credentials:"include"})).ok}class Fi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class n0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Vo;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(i0(e))try{this.getOrInitializeService({instanceIdentifier:Cn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Cn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cn){return this.instances.has(e)}getOptions(e=Cn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:r0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Cn){return this.component?this.component.multipleInstances?e:Cn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function r0(t){return t===Cn?void 0:t}function i0(t){return t.instantiationMode==="EAGER"}/**
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
 */class s0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new n0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var K;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(K||(K={}));const o0={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},l0=K.INFO,a0={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},u0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=a0[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _m{constructor(e){this.name=e,this._logLevel=l0,this._logHandler=u0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?o0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const c0=(t,e)=>e.some(n=>t instanceof n);let qd,Xd;function d0(){return qd||(qd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function f0(){return Xd||(Xd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ym=new WeakMap,La=new WeakMap,vm=new WeakMap,Tl=new WeakMap,Ku=new WeakMap;function h0(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(on(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ym.set(n,t)}).catch(()=>{}),Ku.set(e,t),e}function p0(t){if(La.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});La.set(t,e)}let ba={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return La.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return on(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function m0(t){ba=t(ba)}function g0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Rl(this),e,...n);return vm.set(r,e.sort?e.sort():[e]),on(r)}:f0().includes(t)?function(...e){return t.apply(Rl(this),e),on(ym.get(this))}:function(...e){return on(t.apply(Rl(this),e))}}function _0(t){return typeof t=="function"?g0(t):(t instanceof IDBTransaction&&p0(t),c0(t,d0())?new Proxy(t,ba):t)}function on(t){if(t instanceof IDBRequest)return h0(t);if(Tl.has(t))return Tl.get(t);const e=_0(t);return e!==t&&(Tl.set(t,e),Ku.set(e,t)),e}const Rl=t=>Ku.get(t);function y0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=on(o);return r&&o.addEventListener("upgradeneeded",a=>{r(on(o.result),a.oldVersion,a.newVersion,on(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const v0=["get","getKey","getAll","getAllKeys","count"],w0=["put","add","delete","clear"],Pl=new Map;function Jd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pl.get(e))return Pl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=w0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||v0.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Pl.set(e,s),s}m0(t=>({...t,get:(e,n,r)=>Jd(e,n)||t.get(e,n,r),has:(e,n)=>!!Jd(e,n)||t.has(e,n)}));/**
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
 */class C0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(E0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function E0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fa="@firebase/app",Zd="0.15.0";/**
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
 */const bt=new _m("@firebase/app"),S0="@firebase/app-compat",x0="@firebase/analytics-compat",k0="@firebase/analytics",I0="@firebase/app-check-compat",N0="@firebase/app-check",T0="@firebase/auth",R0="@firebase/auth-compat",P0="@firebase/database",D0="@firebase/data-connect",A0="@firebase/database-compat",O0="@firebase/functions",M0="@firebase/functions-compat",L0="@firebase/installations",b0="@firebase/installations-compat",F0="@firebase/messaging",j0="@firebase/messaging-compat",z0="@firebase/performance",U0="@firebase/performance-compat",B0="@firebase/remote-config",W0="@firebase/remote-config-compat",H0="@firebase/storage",$0="@firebase/storage-compat",V0="@firebase/firestore",G0="@firebase/ai",Q0="@firebase/firestore-compat",Y0="firebase",K0="12.15.0";/**
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
 */const ja="[DEFAULT]",q0={[Fa]:"fire-core",[S0]:"fire-core-compat",[k0]:"fire-analytics",[x0]:"fire-analytics-compat",[N0]:"fire-app-check",[I0]:"fire-app-check-compat",[T0]:"fire-auth",[R0]:"fire-auth-compat",[P0]:"fire-rtdb",[D0]:"fire-data-connect",[A0]:"fire-rtdb-compat",[O0]:"fire-fn",[M0]:"fire-fn-compat",[L0]:"fire-iid",[b0]:"fire-iid-compat",[F0]:"fire-fcm",[j0]:"fire-fcm-compat",[z0]:"fire-perf",[U0]:"fire-perf-compat",[B0]:"fire-rc",[W0]:"fire-rc-compat",[H0]:"fire-gcs",[$0]:"fire-gcs-compat",[V0]:"fire-fst",[Q0]:"fire-fst-compat",[G0]:"fire-vertex","fire-js":"fire-js",[Y0]:"fire-js-all"};/**
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
 */const po=new Map,X0=new Map,za=new Map;function ef(t,e){try{t.container.addComponent(e)}catch(n){bt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function mo(t){const e=t.name;if(za.has(e))return bt.debug(`There were multiple attempts to register component ${e}.`),!1;za.set(e,t);for(const n of po.values())ef(n,t);for(const n of X0.values())ef(n,t);return!0}function J0(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Z0(t){return t==null?!1:t.settings!==void 0}/**
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
 */const ew={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ln=new pm("app","Firebase",ew);/**
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
 */class tw{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Fi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ln.create("app-deleted",{appName:this._name})}}/**
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
 */const nw=K0;function wm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:ja,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw ln.create("bad-app-name",{appName:String(i)});if(n||(n=fm()),!n)throw ln.create("no-options");const s=po.get(i);if(s){if(ho(n,s.options)&&ho(r,s.config))return s;throw ln.create("duplicate-app",{appName:i})}const o=new s0(i);for(const a of za.values())o.addComponent(a);const l=new tw(n,r,o);return po.set(i,l),l}function rw(t=ja){const e=po.get(t);if(!e&&t===ja&&fm())return wm();if(!e)throw ln.create("no-app",{appName:t});return e}function yr(t,e,n){let r=q0[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bt.warn(o.join(" "));return}mo(new Fi(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const iw="firebase-heartbeat-database",sw=1,ji="firebase-heartbeat-store";let Dl=null;function Cm(){return Dl||(Dl=y0(iw,sw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ji)}catch(n){console.warn(n)}}}}).catch(t=>{throw ln.create("idb-open",{originalErrorMessage:t.message})})),Dl}async function ow(t){try{const n=(await Cm()).transaction(ji),r=await n.objectStore(ji).get(Em(t));return await n.done,r}catch(e){if(e instanceof qi)bt.warn(e.message);else{const n=ln.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bt.warn(n.message)}}}async function tf(t,e){try{const r=(await Cm()).transaction(ji,"readwrite");await r.objectStore(ji).put(e,Em(t)),await r.done}catch(n){if(n instanceof qi)bt.warn(n.message);else{const r=ln.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bt.warn(r.message)}}}function Em(t){return`${t.name}!${t.options.appId}`}/**
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
 */const lw=1024,aw=30;class uw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=nf();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>aw){const o=fw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){bt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=nf(),{heartbeatsToSend:r,unsentEntries:i}=cw(this._heartbeatsCache.heartbeats),s=co(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return bt.warn(n),""}}}function nf(){return new Date().toISOString().substring(0,10)}function cw(t,e=lw){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),rf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),rf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class dw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vv()?Gv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ow(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return tf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return tf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function rf(t){return co(JSON.stringify({version:2,heartbeats:t})).length}function fw(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function hw(t){mo(new Fi("platform-logger",e=>new C0(e),"PRIVATE")),mo(new Fi("heartbeat",e=>new uw(e),"PRIVATE")),yr(Fa,Zd,t),yr(Fa,Zd,"esm2020"),yr("fire-js","")}hw("");var sf={};const of="@firebase/database",lf="1.1.3";/**
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
 */let Sm="";function pw(t){Sm=t}/**
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
 */class mw{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ve(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:bi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class gw{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ut(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const xm=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new mw(e)}}catch{}return new gw},In=xm("localStorage"),_w=xm("sessionStorage");/**
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
 */const vr=new _m("@firebase/database"),yw=function(){let t=1;return function(){return t++}}(),km=function(t){const e=e0(t),n=new Zv;n.update(e);const r=n.digest();return Qu.encodeByteArray(r)},Ji=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ji.apply(null,r):typeof r=="object"?e+=ve(r):e+=r,e+=" "}return e};let hi=null,af=!0;const vw=function(t,e){k(!0,"Can't turn on custom loggers persistently."),vr.logLevel=K.VERBOSE,hi=vr.log.bind(vr)},Te=function(...t){if(af===!0&&(af=!1,hi===null&&_w.get("logging_enabled")===!0&&vw()),hi){const e=Ji.apply(null,t);hi(e)}},Zi=function(t){return function(...e){Te(t,...e)}},Ua=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ji(...t);vr.error(e)},Ft=function(...t){const e=`FIREBASE FATAL ERROR: ${Ji(...t)}`;throw vr.error(e),new Error(e)},He=function(...t){const e="FIREBASE WARNING: "+Ji(...t);vr.warn(e)},ww=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&He("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Im=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Cw=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Pr="[MIN_NAME]",Ln="[MAX_NAME]",Fr=function(t,e){if(t===e)return 0;if(t===Pr||e===Ln)return-1;if(e===Pr||t===Ln)return 1;{const n=uf(t),r=uf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},Ew=function(t,e){return t===e?0:t<e?-1:1},Kr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ve(e))},qu=function(t){if(typeof t!="object"||t===null)return ve(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ve(e[r]),n+=":",n+=qu(t[e[r]]);return n+="}",n},Nm=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function $e(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Tm=function(t){k(!Im(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const f=u.join("");let c="";for(a=0;a<64;a+=8){let d=parseInt(f.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),c=c+d}return c.toLowerCase()},Sw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},xw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function kw(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const Iw=new RegExp("^-?(0*)\\d{1,10}$"),Nw=-2147483648,Tw=2147483647,uf=function(t){if(Iw.test(t)){const e=Number(t);if(e>=Nw&&e<=Tw)return e}return null},jr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw He("Exception was thrown by user callback.",n),e},Math.floor(0))}},Rw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},pi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Pw{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Z0(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){He(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Dw{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Te("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',He(e)}}class zs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}zs.OWNER="owner";/**
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
 */const Xu="5",Rm="v",Pm="s",Dm="r",Am="f",Om=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Mm="ls",Lm="p",Ba="ac",bm="websocket",Fm="long_polling";/**
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
 */class jm{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1,u=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=In.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&In.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Aw(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function zm(t,e,n){k(typeof e=="string","typeof type must == string"),k(typeof n=="object","typeof params must == object");let r;if(e===bm)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Fm)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Aw(t)&&(n.ns=t.namespace);const i=[];return $e(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class Ow{constructor(){this.counters_={}}incrementCounter(e,n=1){Ut(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Ov(this.counters_)}}/**
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
 */const Al={},Ol={};function Ju(t){const e=t.toString();return Al[e]||(Al[e]=new Ow),Al[e]}function Mw(t,e){const n=t.toString();return Ol[n]||(Ol[n]=e()),Ol[n]}/**
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
 */class Lw{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&jr(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const cf="start",bw="close",Fw="pLPCommand",jw="pRTLPCB",Um="id",Bm="pw",Wm="ser",zw="cb",Uw="seg",Bw="ts",Ww="d",Hw="dframe",Hm=1870,$m=30,$w=Hm-$m,Vw=25e3,Gw=3e4;class dr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Zi(e),this.stats_=Ju(n),this.urlFn=a=>(this.appCheckToken&&(a[Ba]=this.appCheckToken),zm(n,Fm,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Lw(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Gw)),Cw(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Zu((...s)=>{const[o,l,a,u,f]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===cf)this.id=l,this.password=a;else if(o===bw)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[cf]="t",r[Wm]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[zw]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Rm]=Xu,this.transportSessionId&&(r[Pm]=this.transportSessionId),this.lastSessionId&&(r[Mm]=this.lastSessionId),this.applicationId&&(r[Lm]=this.applicationId),this.appCheckToken&&(r[Ba]=this.appCheckToken),typeof location<"u"&&location.hostname&&Om.test(location.hostname)&&(r[Dm]=Am);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){dr.forceAllow_=!0}static forceDisallow(){dr.forceDisallow_=!0}static isAvailable(){return dr.forceAllow_?!0:!dr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Sw()&&!xw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=um(n),i=Nm(r,$w);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Hw]="t",r[Um]=e,r[Bm]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ve(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Zu{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=yw(),window[Fw+this.uniqueCallbackIdentifier]=e,window[jw+this.uniqueCallbackIdentifier]=n,this.myIFrame=Zu.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Te("frame writing exception"),l.stack&&Te(l.stack),Te(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Te("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Um]=this.myID,e[Bm]=this.myPW,e[Wm]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+$m+r.length<=Hm;){const o=this.pendingSegs.shift();r=r+"&"+Uw+i+"="+o.seg+"&"+Bw+i+"="+o.ts+"&"+Ww+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(Vw)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Te("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const Qw=16384,Yw=45e3;let go=null;typeof MozWebSocket<"u"?go=MozWebSocket:typeof WebSocket<"u"&&(go=WebSocket);class at{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Zi(this.connId),this.stats_=Ju(n),this.connURL=at.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Rm]=Xu,typeof location<"u"&&location.hostname&&Om.test(location.hostname)&&(o[Dm]=Am),n&&(o[Pm]=n),r&&(o[Mm]=r),i&&(o[Ba]=i),s&&(o[Lm]=s),zm(e,bm,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,In.set("previous_websocket_failure",!0);try{let r;$v(),this.mySock=new go(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){at.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&go!==null&&!at.forceDisallow_}static previouslyFailed(){return In.isInMemoryStorage||In.get("previous_websocket_failure")===!0}markConnectionHealthy(){In.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=bi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(k(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Nm(n,Qw);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Yw))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}at.responsesRequiredToBeHealthy=2;at.healthyTimeout=3e4;/**
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
 */class zi{static get ALL_TRANSPORTS(){return[dr,at]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=at&&at.isAvailable();let r=n&&!at.previouslyFailed();if(e.webSocketOnly&&(n||He("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[at];else{const i=this.transports_=[];for(const s of zi.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);zi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}zi.globalTransportInitialized_=!1;/**
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
 */const Kw=6e4,qw=5e3,Xw=10*1024,Jw=100*1024,Ml="t",df="d",Zw="s",ff="r",e1="e",hf="o",pf="a",mf="n",gf="p",t1="h";class n1{constructor(e,n,r,i,s,o,l,a,u,f){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Zi("c:"+this.id+":"),this.transportManager_=new zi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=pi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Jw?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Xw?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ml in e){const n=e[Ml];n===pf?this.upgradeIfSecondaryHealthy_():n===ff?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===hf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Kr("t",e),r=Kr("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:gf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:pf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:mf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Kr("t",e),r=Kr("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Kr(Ml,e);if(df in e){const r=e[df];if(n===t1){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===mf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Zw?this.onConnectionShutdown_(r):n===ff?this.onReset_(r):n===e1?Ua("Server Error: "+r):n===hf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ua("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Xu!==r&&He("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),pi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Kw))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):pi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(qw))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:gf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(In.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Vm{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Gm{constructor(e){this.allowedEvents_=e,this.listeners_={},k(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){k(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class _o extends Gm{static getInstance(){return new _o}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!hm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return k(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const _f=32,yf=768;class Q{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function V(){return new Q("")}function z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function dn(t){return t.pieces_.length-t.pieceNum_}function q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Q(t.pieces_,e)}function Qm(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function r1(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ym(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Km(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Q(e,0)}function pe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Q)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Q(n,0)}function B(t){return t.pieceNum_>=t.pieces_.length}function je(t,e){const n=z(t),r=z(e);if(n===null)return e;if(n===r)return je(q(t),q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ec(t,e){if(dn(t)!==dn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ut(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(dn(t)>dn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class i1{constructor(e,n){this.errorPrefix_=n,this.parts_=Ym(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Go(this.parts_[r]);qm(this)}}function s1(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Go(e),qm(t)}function o1(t){const e=t.parts_.pop();t.byteLength_-=Go(e),t.parts_.length>0&&(t.byteLength_-=1)}function qm(t){if(t.byteLength_>yf)throw new Error(t.errorPrefix_+"has a key path longer than "+yf+" bytes ("+t.byteLength_+").");if(t.parts_.length>_f)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+_f+") or object contains a cycle "+En(t))}function En(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class tc extends Gm{static getInstance(){return new tc}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return k(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const qr=1e3,l1=60*5*1e3,vf=30*1e3,a1=1.3,u1=3e4,c1="server_kill",wf=3;class Dt extends Vm{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Dt.nextPersistentConnectionId_++,this.log_=Zi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=qr,this.maxReconnectDelay_=l1,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");tc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&_o.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ve(s)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Vo,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Dt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ut(e,"w")){const r=Rr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();He(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Xv(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=vf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=qv(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ve(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ua("Unrecognized action received from server: "+ve(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=qr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=qr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>u1&&(this.reconnectDelay_=qr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*a1)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Dt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){k(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,d]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?Te("getToken() completed but was canceled"):(Te("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=d&&d.token,l=new n1(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,y=>{He(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(c1)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&He(c),a())}}}interrupt(e){Te("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Te("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Yd(this.interruptReasons_)&&(this.reconnectDelay_=qr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>qu(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Q(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Te("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=wf&&(this.reconnectDelay_=vf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Te("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=wf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Sm.replace(/\./g,"-")]=1,hm()?e["framework.cordova"]=1:Hv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=_o.getInstance().currentlyOnline();return Yd(this.interruptReasons_)&&e}}Dt.nextPersistentConnectionId_=0;Dt.nextConnectionId_=0;/**
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
 */class U{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new U(e,n)}}/**
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
 */class Qo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new U(Pr,e),i=new U(Pr,n);return this.compare(r,i)!==0}minPost(){return U.MIN}}/**
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
 */let ks;class Xm extends Qo{static get __EMPTY_NODE(){return ks}static set __EMPTY_NODE(e){ks=e}compare(e,n){return Fr(e.name,n.name)}isDefinedOn(e){throw br("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return U.MIN}maxPost(){return new U(Ln,ks)}makePost(e,n){return k(typeof e=="string","KeyIndex indexValue must always be a string."),new U(e,ks)}toString(){return".key"}}const wr=new Xm;/**
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
 */class Is{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ye{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ye.RED,this.left=i??ze.EMPTY_NODE,this.right=s??ze.EMPTY_NODE}copy(e,n,r,i,s){return new ye(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ze.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return ze.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ye.RED=!0;ye.BLACK=!1;class d1{copy(e,n,r,i,s){return this}insert(e,n,r){return new ye(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ze{constructor(e,n=ze.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ze(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ye.BLACK,null,null))}remove(e){return new ze(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ye.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Is(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Is(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Is(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Is(this.root_,null,this.comparator_,!0,e)}}ze.EMPTY_NODE=new d1;/**
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
 */function f1(t,e){return Fr(t.name,e.name)}function nc(t,e){return Fr(t,e)}/**
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
 */let Wa;function h1(t){Wa=t}const Jm=function(t){return typeof t=="number"?"number:"+Tm(t):"string:"+t},Zm=function(t){if(t.isLeafNode()){const e=t.val();k(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ut(e,".sv"),"Priority must be a string or number.")}else k(t===Wa||t.isEmpty(),"priority of unexpected type.");k(t===Wa||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Cf;class ge{static set __childrenNodeConstructor(e){Cf=e}static get __childrenNodeConstructor(){return Cf}constructor(e,n=ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Zm(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return B(e)?this:z(e)===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=z(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(k(r!==".priority"||dn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Jm(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Tm(this.value_):e+=this.value_,this.lazyHash_=km(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ge.__childrenNodeConstructor?-1:(k(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ge.VALUE_TYPE_ORDER.indexOf(n),s=ge.VALUE_TYPE_ORDER.indexOf(r);return k(i>=0,"Unknown leaf type: "+n),k(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let eg,tg;function p1(t){eg=t}function m1(t){tg=t}class g1 extends Qo{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Fr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return U.MIN}maxPost(){return new U(Ln,new ge("[PRIORITY-POST]",tg))}makePost(e,n){const r=eg(e);return new U(n,new ge("[PRIORITY-POST]",r))}toString(){return".priority"}}const ae=new g1;/**
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
 */const _1=Math.log(2);class y1{constructor(e){const n=s=>parseInt(Math.log(s)/_1,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const yo=function(t,e,n,r){t.sort(e);const i=function(a,u){const f=u-a;let c,d;if(f===0)return null;if(f===1)return c=t[a],d=n?n(c):c,new ye(d,c.node,ye.BLACK,null,null);{const y=parseInt(f/2,10)+a,v=i(a,y),w=i(y+1,u);return c=t[y],d=n?n(c):c,new ye(d,c.node,ye.BLACK,v,w)}},s=function(a){let u=null,f=null,c=t.length;const d=function(v,w){const b=c-v,g=c;c-=v;const h=i(b+1,g),_=t[b],E=n?n(_):_;y(new ye(E,_.node,w,null,h))},y=function(v){u?(u.left=v,u=v):(f=v,u=v)};for(let v=0;v<a.count;++v){const w=a.nextBitIsOne(),b=Math.pow(2,a.count-(v+1));w?d(b,ye.BLACK):(d(b,ye.BLACK),d(b,ye.RED))}return f},o=new y1(t.length),l=s(o);return new ze(r||e,l)};/**
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
 */let Ll;const Jn={};class Rt{static get Default(){return k(Jn&&ae,"ChildrenNode.ts has not been loaded"),Ll=Ll||new Rt({".priority":Jn},{".priority":ae}),Ll}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Rr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ze?n:null}hasIndex(e){return Ut(this.indexSet_,e.toString())}addIndex(e,n){k(e!==wr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(U.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=yo(r,e.getCompare()):l=Jn;const a=e.toString(),u={...this.indexSet_};u[a]=e;const f={...this.indexes_};return f[a]=l,new Rt(f,u)}addToIndexes(e,n){const r=fo(this.indexes_,(i,s)=>{const o=Rr(this.indexSet_,s);if(k(o,"Missing index implementation for "+s),i===Jn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(U.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),yo(l,o.getCompare())}else return Jn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new U(e.name,l))),a.insert(e,e.node)}});return new Rt(r,this.indexSet_)}removeFromIndexes(e,n){const r=fo(this.indexes_,i=>{if(i===Jn)return i;{const s=n.get(e.name);return s?i.remove(new U(e.name,s)):i}});return new Rt(r,this.indexSet_)}}/**
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
 */let Xr;class M{static get EMPTY_NODE(){return Xr||(Xr=new M(new ze(nc),null,Rt.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Zm(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Xr}updatePriority(e){return this.children_.isEmpty()?this:new M(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Xr:n}}getChild(e){const n=z(e);return n===null?this:this.getImmediateChild(n).getChild(q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(k(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new U(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Xr:this.priorityNode_;return new M(i,o,s)}}updateChild(e,n){const r=z(e);if(r===null)return n;{k(z(e)!==".priority"||dn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(q(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ae,(o,l)=>{n[o]=l.val(e),r++,s&&M.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Jm(this.getPriority().val())+":"),this.forEachChild(ae,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":km(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new U(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new U(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new U(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,U.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,U.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===es?-1:0}withIndex(e){if(e===wr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new M(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===wr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ae),i=n.getIterator(ae);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===wr?null:this.indexMap_.get(e.toString())}}M.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class v1 extends M{constructor(){super(new ze(nc),M.EMPTY_NODE,Rt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return M.EMPTY_NODE}isEmpty(){return!1}}const es=new v1;Object.defineProperties(U,{MIN:{value:new U(Pr,M.EMPTY_NODE)},MAX:{value:new U(Ln,es)}});Xm.__EMPTY_NODE=M.EMPTY_NODE;ge.__childrenNodeConstructor=M;h1(es);m1(es);/**
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
 */const w1=!0;function Ee(t,e=null){if(t===null)return M.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),k(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ge(n,Ee(e))}if(!(t instanceof Array)&&w1){const n=[];let r=!1;if($e(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Ee(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new U(o,a)))}}),n.length===0)return M.EMPTY_NODE;const s=yo(n,f1,o=>o.name,nc);if(r){const o=yo(n,ae.getCompare());return new M(s,Ee(e),new Rt({".priority":o},{".priority":ae}))}else return new M(s,Ee(e),Rt.Default)}else{let n=M.EMPTY_NODE;return $e(t,(r,i)=>{if(Ut(t,r)&&r.substring(0,1)!=="."){const s=Ee(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ee(e))}}p1(Ee);/**
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
 */class C1 extends Qo{constructor(e){super(),this.indexPath_=e,k(!B(e)&&z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Fr(e.name,n.name):s}makePost(e,n){const r=Ee(e),i=M.EMPTY_NODE.updateChild(this.indexPath_,r);return new U(n,i)}maxPost(){const e=M.EMPTY_NODE.updateChild(this.indexPath_,es);return new U(Ln,e)}toString(){return Ym(this.indexPath_,0).join("/")}}/**
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
 */class E1 extends Qo{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Fr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return U.MIN}maxPost(){return U.MAX}makePost(e,n){const r=Ee(e);return new U(n,r)}toString(){return".value"}}const S1=new E1;/**
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
 */function ng(t){return{type:"value",snapshotNode:t}}function Dr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ui(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Bi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function x1(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class rc{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){k(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ui(n,l)):k(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Dr(n,r)):o.trackChildChange(Bi(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ae,(i,s)=>{n.hasChild(i)||r.trackChildChange(Ui(i,s))}),n.isLeafNode()||n.forEachChild(ae,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Bi(i,s,o))}else r.trackChildChange(Dr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?M.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Wi{constructor(e){this.indexedFilter_=new rc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Wi.getStartPost_(e),this.endPost_=Wi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new U(n,r))||(r=M.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=M.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(M.EMPTY_NODE);const s=this;return n.forEachChild(ae,(o,l)=>{s.matches(new U(o,l))||(i=i.updateImmediateChild(o,M.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class k1{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Wi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new U(n,r))||(r=M.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=M.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=M.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(M.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,M.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(d,y)=>c(y,d)}else o=this.index_.getCompare();const l=e;k(l.numChildren()===this.limit_,"");const a=new U(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),f=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const y=d==null?1:o(d,a);if(f&&!r.isEmpty()&&y>=0)return s!=null&&s.trackChildChange(Bi(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Ui(n,c));const w=l.updateImmediateChild(n,M.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(Dr(d.name,d.node)),w.updateImmediateChild(d.name,d.node)):w}}else return r.isEmpty()?e:f&&o(u,a)>=0?(s!=null&&(s.trackChildChange(Ui(u.name,u.node)),s.trackChildChange(Dr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,M.EMPTY_NODE)):e}}/**
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
 */class ic{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ae}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Pr}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ln}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ae}copy(){const e=new ic;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function I1(t){return t.loadsAllData()?new rc(t.getIndex()):t.hasLimit()?new k1(t):new Wi(t)}function Ef(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ae?n="$priority":t.index_===S1?n="$value":t.index_===wr?n="$key":(k(t.index_ instanceof C1,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ve(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ve(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ve(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ve(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ve(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Sf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ae&&(e.i=t.index_.toString()),e}/**
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
 */class vo extends Vm{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(k(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Zi("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=vo.getListenId_(e,r),l={};this.listens_[o]=l;const a=Ef(e._queryParams);this.restRequest_(s+".json",a,(u,f)=>{let c=f;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Rr(this.listens_,o)===l){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=vo.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Ef(e._queryParams),r=e._path.toString(),i=new Vo;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Jv(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=bi(l.responseText)}catch{He("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&He("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class N1{constructor(){this.rootNode_=M.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function wo(){return{value:null,children:new Map}}function rg(t,e,n){if(B(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=z(e);t.children.has(r)||t.children.set(r,wo());const i=t.children.get(r);e=q(e),rg(i,e,n)}}function Ha(t,e,n){t.value!==null?n(e,t.value):T1(t,(r,i)=>{const s=new Q(e.toString()+"/"+r);Ha(i,s,n)})}function T1(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class R1{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&$e(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const xf=10*1e3,P1=30*1e3,D1=5*60*1e3;class A1{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new R1(e);const r=xf+(P1-xf)*Math.random();pi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;$e(e,(i,s)=>{s>0&&Ut(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),pi(this.reportStats_.bind(this),Math.floor(Math.random()*2*D1))}}/**
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
 */var ct;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ct||(ct={}));function ig(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function sc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function oc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Co{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=ct.ACK_USER_WRITE,this.source=ig()}operationForChild(e){if(B(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Q(e));return new Co(V(),n,this.revert)}}else return k(z(this.path)===e,"operationForChild called for unrelated child."),new Co(q(this.path),this.affectedTree,this.revert)}}/**
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
 */class Hi{constructor(e,n){this.source=e,this.path=n,this.type=ct.LISTEN_COMPLETE}operationForChild(e){return B(this.path)?new Hi(this.source,V()):new Hi(this.source,q(this.path))}}/**
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
 */class bn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=ct.OVERWRITE}operationForChild(e){return B(this.path)?new bn(this.source,V(),this.snap.getImmediateChild(e)):new bn(this.source,q(this.path),this.snap)}}/**
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
 */class $i{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=ct.MERGE}operationForChild(e){if(B(this.path)){const n=this.children.subtree(new Q(e));return n.isEmpty()?null:n.value?new bn(this.source,V(),n.value):new $i(this.source,V(),n)}else return k(z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new $i(this.source,q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Fn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(B(e))return this.isFullyInitialized()&&!this.filtered_;const n=z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class O1{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function M1(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(x1(o.childName,o.snapshotNode))}),Jr(t,i,"child_removed",e,r,n),Jr(t,i,"child_added",e,r,n),Jr(t,i,"child_moved",s,r,n),Jr(t,i,"child_changed",e,r,n),Jr(t,i,"value",e,r,n),i}function Jr(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>b1(t,l,a)),o.forEach(l=>{const a=L1(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function L1(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function b1(t,e,n){if(e.childName==null||n.childName==null)throw br("Should only compare child_ events.");const r=new U(e.childName,e.snapshotNode),i=new U(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Yo(t,e){return{eventCache:t,serverCache:e}}function mi(t,e,n,r){return Yo(new Fn(e,n,r),t.serverCache)}function sg(t,e,n,r){return Yo(t.eventCache,new Fn(e,n,r))}function $a(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function jn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let bl;const F1=()=>(bl||(bl=new ze(Ew)),bl);class ee{static fromObject(e){let n=new ee(null);return $e(e,(r,i)=>{n=n.set(new Q(r),i)}),n}constructor(e,n=F1()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:V(),value:this.value};if(B(e))return null;{const r=z(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(q(e),n);return s!=null?{path:pe(new Q(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(B(e))return this;{const n=z(e),r=this.children.get(n);return r!==null?r.subtree(q(e)):new ee(null)}}set(e,n){if(B(e))return new ee(n,this.children);{const r=z(e),s=(this.children.get(r)||new ee(null)).set(q(e),n),o=this.children.insert(r,s);return new ee(this.value,o)}}remove(e){if(B(e))return this.children.isEmpty()?new ee(null):new ee(null,this.children);{const n=z(e),r=this.children.get(n);if(r){const i=r.remove(q(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ee(null):new ee(this.value,s)}else return this}}get(e){if(B(e))return this.value;{const n=z(e),r=this.children.get(n);return r?r.get(q(e)):null}}setTree(e,n){if(B(e))return n;{const r=z(e),s=(this.children.get(r)||new ee(null)).setTree(q(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ee(this.value,o)}}fold(e){return this.fold_(V(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(pe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,V(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(B(e))return null;{const s=z(e),o=this.children.get(s);return o?o.findOnPath_(q(e),pe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,V(),n)}foreachOnPath_(e,n,r){if(B(e))return this;{this.value&&r(n,this.value);const i=z(e),s=this.children.get(i);return s?s.foreachOnPath_(q(e),pe(n,i),r):new ee(null)}}foreach(e){this.foreach_(V(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(pe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class ht{constructor(e){this.writeTree_=e}static empty(){return new ht(new ee(null))}}function gi(t,e,n){if(B(e))return new ht(new ee(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=je(i,e);return s=s.updateChild(o,n),new ht(t.writeTree_.set(i,s))}else{const i=new ee(n),s=t.writeTree_.setTree(e,i);return new ht(s)}}}function kf(t,e,n){let r=t;return $e(n,(i,s)=>{r=gi(r,pe(e,i),s)}),r}function If(t,e){if(B(e))return ht.empty();{const n=t.writeTree_.setTree(e,new ee(null));return new ht(n)}}function Va(t,e){return Bn(t,e)!=null}function Bn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(je(n.path,e)):null}function Nf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ae,(r,i)=>{e.push(new U(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new U(r,i.value))}),e}function an(t,e){if(B(e))return t;{const n=Bn(t,e);return n!=null?new ht(new ee(n)):new ht(t.writeTree_.subtree(e))}}function Ga(t){return t.writeTree_.isEmpty()}function Ar(t,e){return og(V(),t.writeTree_,e)}function og(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(k(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=og(pe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(pe(t,".priority"),r)),n}}/**
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
 */function lc(t,e){return cg(e,t)}function j1(t,e,n,r,i){k(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=gi(t.visibleWrites,e,n)),t.lastWriteId=r}function z1(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function U1(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);k(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&B1(l,r.path)?i=!1:ut(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return W1(t),!0;if(r.snap)t.visibleWrites=If(t.visibleWrites,r.path);else{const l=r.children;$e(l,a=>{t.visibleWrites=If(t.visibleWrites,pe(r.path,a))})}return!0}else return!1}function B1(t,e){if(t.snap)return ut(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ut(pe(t.path,n),e))return!0;return!1}function W1(t){t.visibleWrites=lg(t.allWrites,H1,V()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function H1(t){return t.visible}function lg(t,e,n){let r=ht.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)ut(n,o)?(l=je(n,o),r=gi(r,l,s.snap)):ut(o,n)&&(l=je(o,n),r=gi(r,V(),s.snap.getChild(l)));else if(s.children){if(ut(n,o))l=je(n,o),r=kf(r,l,s.children);else if(ut(o,n))if(l=je(o,n),B(l))r=kf(r,V(),s.children);else{const a=Rr(s.children,z(l));if(a){const u=a.getChild(q(l));r=gi(r,V(),u)}}}else throw br("WriteRecord should have .snap or .children")}}return r}function ag(t,e,n,r,i){if(!r&&!i){const s=Bn(t.visibleWrites,e);if(s!=null)return s;{const o=an(t.visibleWrites,e);if(Ga(o))return n;if(n==null&&!Va(o,V()))return null;{const l=n||M.EMPTY_NODE;return Ar(o,l)}}}else{const s=an(t.visibleWrites,e);if(!i&&Ga(s))return n;if(!i&&n==null&&!Va(s,V()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(ut(u.path,e)||ut(e,u.path))},l=lg(t.allWrites,o,e),a=n||M.EMPTY_NODE;return Ar(l,a)}}}function $1(t,e,n){let r=M.EMPTY_NODE;const i=Bn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ae,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=an(t.visibleWrites,e);return n.forEachChild(ae,(o,l)=>{const a=Ar(an(s,new Q(o)),l);r=r.updateImmediateChild(o,a)}),Nf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=an(t.visibleWrites,e);return Nf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function V1(t,e,n,r,i){k(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=pe(e,n);if(Va(t.visibleWrites,s))return null;{const o=an(t.visibleWrites,s);return Ga(o)?i.getChild(n):Ar(o,i.getChild(n))}}function G1(t,e,n,r){const i=pe(e,n),s=Bn(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=an(t.visibleWrites,i);return Ar(o,r.getNode().getImmediateChild(n))}else return null}function Q1(t,e){return Bn(t.visibleWrites,e)}function Y1(t,e,n,r,i,s,o){let l;const a=an(t.visibleWrites,e),u=Bn(a,V());if(u!=null)l=u;else if(n!=null)l=Ar(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const f=[],c=o.getCompare(),d=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let y=d.getNext();for(;y&&f.length<i;)c(y,r)!==0&&f.push(y),y=d.getNext();return f}else return[]}function K1(){return{visibleWrites:ht.empty(),allWrites:[],lastWriteId:-1}}function Eo(t,e,n,r){return ag(t.writeTree,t.treePath,e,n,r)}function ac(t,e){return $1(t.writeTree,t.treePath,e)}function Tf(t,e,n,r){return V1(t.writeTree,t.treePath,e,n,r)}function So(t,e){return Q1(t.writeTree,pe(t.treePath,e))}function q1(t,e,n,r,i,s){return Y1(t.writeTree,t.treePath,e,n,r,i,s)}function uc(t,e,n){return G1(t.writeTree,t.treePath,e,n)}function ug(t,e){return cg(pe(t.treePath,e),t.writeTree)}function cg(t,e){return{treePath:t,writeTree:e}}/**
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
 */class X1{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;k(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),k(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Bi(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ui(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Dr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Bi(r,e.snapshotNode,i.oldSnap));else throw br("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class J1{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const dg=new J1;class cc{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Fn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return uc(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:jn(this.viewCache_),s=q1(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function Z1(t){return{filter:t}}function eC(t,e){k(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),k(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function tC(t,e,n,r,i){const s=new X1;let o,l;if(n.type===ct.OVERWRITE){const u=n;u.source.fromUser?o=Qa(t,e,u.path,u.snap,r,i,s):(k(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!B(u.path),o=xo(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===ct.MERGE){const u=n;u.source.fromUser?o=rC(t,e,u.path,u.children,r,i,s):(k(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Ya(t,e,u.path,u.children,r,i,l,s))}else if(n.type===ct.ACK_USER_WRITE){const u=n;u.revert?o=oC(t,e,u.path,r,i,s):o=iC(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===ct.LISTEN_COMPLETE)o=sC(t,e,n.path,r,s);else throw br("Unknown operation type: "+n.type);const a=s.getChanges();return nC(e,o,a),{viewCache:o,changes:a}}function nC(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=$a(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(ng($a(e)))}}function fg(t,e,n,r,i,s){const o=e.eventCache;if(So(r,n)!=null)return e;{let l,a;if(B(n))if(k(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=jn(e),f=u instanceof M?u:M.EMPTY_NODE,c=ac(r,f);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=Eo(r,jn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=z(n);if(u===".priority"){k(dn(n)===1,"Can't have a priority with additional path components");const f=o.getNode();a=e.serverCache.getNode();const c=Tf(r,n,f,a);c!=null?l=t.filter.updatePriority(f,c):l=o.getNode()}else{const f=q(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const d=Tf(r,n,o.getNode(),a);d!=null?c=o.getNode().getImmediateChild(u).updateChild(f,d):c=o.getNode().getImmediateChild(u)}else c=uc(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,f,i,s):l=o.getNode()}}return mi(e,l,o.isFullyInitialized()||B(n),t.filter.filtersNodes())}}function xo(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const f=o?t.filter:t.filter.getIndexedFilter();if(B(n))u=f.updateFullNode(a.getNode(),r,null);else if(f.filtersNodes()&&!a.isFiltered()){const y=a.getNode().updateChild(n,r);u=f.updateFullNode(a.getNode(),y,null)}else{const y=z(n);if(!a.isCompleteForPath(n)&&dn(n)>1)return e;const v=q(n),b=a.getNode().getImmediateChild(y).updateChild(v,r);y===".priority"?u=f.updatePriority(a.getNode(),b):u=f.updateChild(a.getNode(),y,b,v,dg,null)}const c=sg(e,u,a.isFullyInitialized()||B(n),f.filtersNodes()),d=new cc(i,c,s);return fg(t,c,n,i,d,l)}function Qa(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const f=new cc(i,e,s);if(B(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=mi(e,u,!0,t.filter.filtersNodes());else{const c=z(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=mi(e,u,l.isFullyInitialized(),l.isFiltered());else{const d=q(n),y=l.getNode().getImmediateChild(c);let v;if(B(d))v=r;else{const w=f.getCompleteChild(c);w!=null?Qm(d)===".priority"&&w.getChild(Km(d)).isEmpty()?v=w:v=w.updateChild(d,r):v=M.EMPTY_NODE}if(y.equals(v))a=e;else{const w=t.filter.updateChild(l.getNode(),c,v,d,f,o);a=mi(e,w,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Rf(t,e){return t.eventCache.isCompleteForChild(e)}function rC(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const f=pe(n,a);Rf(e,z(f))&&(l=Qa(t,l,f,u,i,s,o))}),r.foreach((a,u)=>{const f=pe(n,a);Rf(e,z(f))||(l=Qa(t,l,f,u,i,s,o))}),l}function Pf(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Ya(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;B(n)?u=r:u=new ee(null).setTree(n,r);const f=e.serverCache.getNode();return u.children.inorderTraversal((c,d)=>{if(f.hasChild(c)){const y=e.serverCache.getNode().getImmediateChild(c),v=Pf(t,y,d);a=xo(t,a,new Q(c),v,i,s,o,l)}}),u.children.inorderTraversal((c,d)=>{const y=!e.serverCache.isCompleteForChild(c)&&d.value===null;if(!f.hasChild(c)&&!y){const v=e.serverCache.getNode().getImmediateChild(c),w=Pf(t,v,d);a=xo(t,a,new Q(c),w,i,s,o,l)}}),a}function iC(t,e,n,r,i,s,o){if(So(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(B(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return xo(t,e,n,a.getNode().getChild(n),i,s,l,o);if(B(n)){let u=new ee(null);return a.getNode().forEachChild(wr,(f,c)=>{u=u.set(new Q(f),c)}),Ya(t,e,n,u,i,s,l,o)}else return e}else{let u=new ee(null);return r.foreach((f,c)=>{const d=pe(n,f);a.isCompleteForPath(d)&&(u=u.set(f,a.getNode().getChild(d)))}),Ya(t,e,n,u,i,s,l,o)}}function sC(t,e,n,r,i){const s=e.serverCache,o=sg(e,s.getNode(),s.isFullyInitialized()||B(n),s.isFiltered());return fg(t,o,n,r,dg,i)}function oC(t,e,n,r,i,s){let o;if(So(r,n)!=null)return e;{const l=new cc(r,e,i),a=e.eventCache.getNode();let u;if(B(n)||z(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=Eo(r,jn(e));else{const c=e.serverCache.getNode();k(c instanceof M,"serverChildren would be complete if leaf node"),f=ac(r,c)}f=f,u=t.filter.updateFullNode(a,f,s)}else{const f=z(n);let c=uc(r,f,e.serverCache);c==null&&e.serverCache.isCompleteForChild(f)&&(c=a.getImmediateChild(f)),c!=null?u=t.filter.updateChild(a,f,c,q(n),l,s):e.eventCache.getNode().hasChild(f)?u=t.filter.updateChild(a,f,M.EMPTY_NODE,q(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Eo(r,jn(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||So(r,V())!=null,mi(e,u,o,t.filter.filtersNodes())}}/**
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
 */class lC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new rc(r.getIndex()),s=I1(r);this.processor_=Z1(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(M.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(M.EMPTY_NODE,l.getNode(),null),f=new Fn(a,o.isFullyInitialized(),i.filtersNodes()),c=new Fn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Yo(c,f),this.eventGenerator_=new O1(this.query_)}get query(){return this.query_}}function aC(t){return t.viewCache_.serverCache.getNode()}function uC(t,e){const n=jn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!B(e)&&!n.getImmediateChild(z(e)).isEmpty())?n.getChild(e):null}function Df(t){return t.eventRegistrations_.length===0}function cC(t,e){t.eventRegistrations_.push(e)}function Af(t,e,n){const r=[];if(n){k(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Of(t,e,n,r){e.type===ct.MERGE&&e.source.queryId!==null&&(k(jn(t.viewCache_),"We should always have a full cache before handling merges"),k($a(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=tC(t.processor_,i,e,n,r);return eC(t.processor_,s.viewCache),k(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,hg(t,s.changes,s.viewCache.eventCache.getNode(),null)}function dC(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ae,(s,o)=>{r.push(Dr(s,o))}),n.isFullyInitialized()&&r.push(ng(n.getNode())),hg(t,r,n.getNode(),e)}function hg(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return M1(t.eventGenerator_,e,n,i)}/**
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
 */let ko;class fC{constructor(){this.views=new Map}}function hC(t){k(!ko,"__referenceConstructor has already been defined"),ko=t}function pC(){return k(ko,"Reference.ts has not been loaded"),ko}function mC(t){return t.views.size===0}function dc(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return k(s!=null,"SyncTree gave us an op for an invalid query."),Of(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Of(o,e,n,r));return s}}function gC(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Eo(n,i?r:null),a=!1;l?a=!0:r instanceof M?(l=ac(n,r),a=!1):(l=M.EMPTY_NODE,a=!1);const u=Yo(new Fn(l,a,!1),new Fn(r,i,!1));return new lC(e,u)}return o}function _C(t,e,n,r,i,s){const o=gC(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),cC(o,n),dC(o,n)}function yC(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=fn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Af(u,n,r)),Df(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Af(a,n,r)),Df(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!fn(t)&&s.push(new(pC())(e._repo,e._path)),{removed:s,events:o}}function pg(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Cr(t,e){let n=null;for(const r of t.views.values())n=n||uC(r,e);return n}function mg(t,e){if(e._queryParams.loadsAllData())return Ko(t);{const r=e._queryIdentifier;return t.views.get(r)}}function gg(t,e){return mg(t,e)!=null}function fn(t){return Ko(t)!=null}function Ko(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Io;function vC(t){k(!Io,"__referenceConstructor has already been defined"),Io=t}function wC(){return k(Io,"Reference.ts has not been loaded"),Io}let CC=1;class Mf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ee(null),this.pendingWriteTree_=K1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function _g(t,e,n,r,i){return j1(t.pendingWriteTree_,e,n,r,i),i?ts(t,new bn(ig(),e,n)):[]}function Nn(t,e,n=!1){const r=z1(t.pendingWriteTree_,e);if(U1(t.pendingWriteTree_,e)){let s=new ee(null);return r.snap!=null?s=s.set(V(),!0):$e(r.children,o=>{s=s.set(new Q(o),!0)}),ts(t,new Co(r.path,s,n))}else return[]}function qo(t,e,n){return ts(t,new bn(sc(),e,n))}function EC(t,e,n){const r=ee.fromObject(n);return ts(t,new $i(sc(),e,r))}function SC(t,e){return ts(t,new Hi(sc(),e))}function xC(t,e,n){const r=hc(t,n);if(r){const i=pc(r),s=i.path,o=i.queryId,l=je(s,e),a=new Hi(oc(o),l);return mc(t,s,a)}else return[]}function Ka(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||gg(o,e))){const a=yC(o,e,n,r);mC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const f=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(d,y)=>fn(y));if(f&&!c){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const y=NC(d);for(let v=0;v<y.length;++v){const w=y[v],b=w.query,g=wg(t,w);t.listenProvider_.startListening(_i(b),No(t,b),g.hashFn,g.onComplete)}}}!c&&u.length>0&&!r&&(f?t.listenProvider_.stopListening(_i(e),null):u.forEach(d=>{const y=t.queryToTagMap.get(Xo(d));t.listenProvider_.stopListening(_i(d),y)}))}TC(t,u)}return l}function kC(t,e,n,r){const i=hc(t,r);if(i!=null){const s=pc(i),o=s.path,l=s.queryId,a=je(o,e),u=new bn(oc(l),a,n);return mc(t,o,u)}else return[]}function IC(t,e,n,r){const i=hc(t,r);if(i){const s=pc(i),o=s.path,l=s.queryId,a=je(o,e),u=ee.fromObject(n),f=new $i(oc(l),a,u);return mc(t,o,f)}else return[]}function Lf(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,y)=>{const v=je(d,i);s=s||Cr(y,v),o=o||fn(y)});let l=t.syncPointTree_.get(i);l?(o=o||fn(l),s=s||Cr(l,V())):(l=new fC,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=M.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((y,v)=>{const w=Cr(v,V());w&&(s=s.updateImmediateChild(y,w))}));const u=gg(l,e);if(!u&&!e._queryParams.loadsAllData()){const d=Xo(e);k(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const y=RC();t.queryToTagMap.set(d,y),t.tagToQueryMap.set(y,d)}const f=lc(t.pendingWriteTree_,i);let c=_C(l,e,n,f,s,a);if(!u&&!o&&!r){const d=mg(l,e);c=c.concat(PC(t,e,d))}return c}function fc(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=je(o,e),u=Cr(l,a);if(u)return u});return ag(i,e,s,n,!0)}function ts(t,e){return yg(e,t.syncPointTree_,null,lc(t.pendingWriteTree_,V()))}function yg(t,e,n,r){if(B(t.path))return vg(t,e,n,r);{const i=e.get(V());n==null&&i!=null&&(n=Cr(i,V()));let s=[];const o=z(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,f=ug(r,o);s=s.concat(yg(l,a,u,f))}return i&&(s=s.concat(dc(i,t,r,n))),s}}function vg(t,e,n,r){const i=e.get(V());n==null&&i!=null&&(n=Cr(i,V()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=ug(r,o),f=t.operationForChild(o);f&&(s=s.concat(vg(f,l,a,u)))}),i&&(s=s.concat(dc(i,t,r,n))),s}function wg(t,e){const n=e.query,r=No(t,n);return{hashFn:()=>(aC(e)||M.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?xC(t,n._path,r):SC(t,n._path);{const s=kw(i,n);return Ka(t,n,null,s)}}}}function No(t,e){const n=Xo(e);return t.queryToTagMap.get(n)}function Xo(t){return t._path.toString()+"$"+t._queryIdentifier}function hc(t,e){return t.tagToQueryMap.get(e)}function pc(t){const e=t.indexOf("$");return k(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Q(t.substr(0,e))}}function mc(t,e,n){const r=t.syncPointTree_.get(e);k(r,"Missing sync point for query tag that we're tracking");const i=lc(t.pendingWriteTree_,e);return dc(r,n,i,null)}function NC(t){return t.fold((e,n,r)=>{if(n&&fn(n))return[Ko(n)];{let i=[];return n&&(i=pg(n)),$e(r,(s,o)=>{i=i.concat(o)}),i}})}function _i(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(wC())(t._repo,t._path):t}function TC(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Xo(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function RC(){return CC++}function PC(t,e,n){const r=e._path,i=No(t,e),s=wg(t,n),o=t.listenProvider_.startListening(_i(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)k(!fn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,f,c)=>{if(!B(u)&&f&&fn(f))return[Ko(f).query];{let d=[];return f&&(d=d.concat(pg(f).map(y=>y.query))),$e(c,(y,v)=>{d=d.concat(v)}),d}});for(let u=0;u<a.length;++u){const f=a[u];t.listenProvider_.stopListening(_i(f),No(t,f))}}return o}/**
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
 */class gc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new gc(n)}node(){return this.node_}}class _c{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=pe(this.path_,e);return new _c(this.syncTree_,n)}node(){return fc(this.syncTree_,this.path_)}}const DC=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},bf=function(t,e,n){if(!t||typeof t!="object")return t;if(k(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return AC(t[".sv"],e,n);if(typeof t[".sv"]=="object")return OC(t[".sv"],e);k(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},AC=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:k(!1,"Unexpected server value: "+t)}},OC=function(t,e,n){t.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&k(!1,"Unexpected increment value: "+r);const i=e.node();if(k(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},MC=function(t,e,n,r){return yc(e,new _c(n,t),r)},Cg=function(t,e,n){return yc(t,new gc(e),n)};function yc(t,e,n){const r=t.getPriority().val(),i=bf(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=bf(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ge(l,Ee(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ge(i))),o.forEachChild(ae,(l,a)=>{const u=yc(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class vc{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function wc(t,e){let n=e instanceof Q?e:new Q(e),r=t,i=z(n);for(;i!==null;){const s=Rr(r.node.children,i)||{children:{},childCount:0};r=new vc(i,r,s),n=q(n),i=z(n)}return r}function zr(t){return t.node.value}function Eg(t,e){t.node.value=e,qa(t)}function Sg(t){return t.node.childCount>0}function LC(t){return zr(t)===void 0&&!Sg(t)}function Jo(t,e){$e(t.node.children,(n,r)=>{e(new vc(n,t,r))})}function xg(t,e,n,r){n&&e(t),Jo(t,i=>{xg(i,e,!0)})}function bC(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ns(t){return new Q(t.parent===null?t.name:ns(t.parent)+"/"+t.name)}function qa(t){t.parent!==null&&FC(t.parent,t.name,t)}function FC(t,e,n){const r=LC(n),i=Ut(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,qa(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,qa(t))}/**
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
 */const jC=/[\[\].#$\/\u0000-\u001F\u007F]/,zC=/[\[\].#$\u0000-\u001F\u007F]/,Fl=10*1024*1024,kg=function(t){return typeof t=="string"&&t.length!==0&&!jC.test(t)},Ig=function(t){return typeof t=="string"&&t.length!==0&&!zC.test(t)},UC=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ig(t)},BC=function(t,e,n,r){Cc(Yu(t,"value"),e,n)},Cc=function(t,e,n){const r=n instanceof Q?new i1(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+En(r));if(typeof e=="function")throw new Error(t+"contains a function "+En(r)+" with contents = "+e.toString());if(Im(e))throw new Error(t+"contains "+e.toString()+" "+En(r));if(typeof e=="string"&&e.length>Fl/3&&Go(e)>Fl)throw new Error(t+"contains a string greater than "+Fl+" utf8 bytes "+En(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if($e(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!kg(o)))throw new Error(t+" contains an invalid key ("+o+") "+En(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);s1(r,o),Cc(t,l,r),o1(r)}),i&&s)throw new Error(t+' contains ".value" child '+En(r)+" in addition to actual children.")}},Ng=function(t,e,n,r){if(!Ig(n))throw new Error(Yu(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},WC=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ng(t,e,n)},HC=function(t,e){if(z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},$C=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!kg(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!UC(n))throw new Error(Yu(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class VC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ec(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!ec(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Tg(t,e,n){Ec(t,n),Rg(t,r=>ec(r,e))}function jt(t,e,n){Ec(t,n),Rg(t,r=>ut(r,e)||ut(e,r))}function Rg(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(GC(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function GC(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();hi&&Te("event: "+n.toString()),jr(r)}}}/**
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
 */const QC="repo_interrupt",YC=25;class KC{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new VC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=wo(),this.transactionQueueTree_=new vc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function qC(t,e,n){if(t.stats_=Ju(t.repoInfo_),t.forceRestClient_||Rw())t.server_=new vo(t.repoInfo_,(r,i,s,o)=>{Ff(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>jf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ve(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Dt(t.repoInfo_,e,(r,i,s,o)=>{Ff(t,r,i,s,o)},r=>{jf(t,r)},r=>{JC(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=Mw(t.repoInfo_,()=>new A1(t.stats_,t.server_)),t.infoData_=new N1,t.infoSyncTree_=new Mf({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=qo(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),xc(t,"connected",!1),t.serverSyncTree_=new Mf({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);jt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function XC(t){const n=t.infoData_.getNode(new Q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Sc(t){return DC({timestamp:XC(t)})}function Ff(t,e,n,r,i){t.dataUpdateCount++;const s=new Q(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=fo(n,u=>Ee(u));o=IC(t.serverSyncTree_,s,a,i)}else{const a=Ee(n);o=kC(t.serverSyncTree_,s,a,i)}else if(r){const a=fo(n,u=>Ee(u));o=EC(t.serverSyncTree_,s,a)}else{const a=Ee(n);o=qo(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Zo(t,s)),jt(t.eventQueue_,l,o)}function jf(t,e){xc(t,"connected",e),e===!1&&eE(t)}function JC(t,e){$e(e,(n,r)=>{xc(t,n,r)})}function xc(t,e,n){const r=new Q("/.info/"+e),i=Ee(n);t.infoData_.updateSnapshot(r,i);const s=qo(t.infoSyncTree_,r,i);jt(t.eventQueue_,r,s)}function Pg(t){return t.nextWriteId_++}function ZC(t,e,n,r,i){kc(t,"set",{path:e.toString(),value:n,priority:r});const s=Sc(t),o=Ee(n,r),l=fc(t.serverSyncTree_,e),a=Cg(o,l,s),u=Pg(t),f=_g(t.serverSyncTree_,e,a,u,!0);Ec(t.eventQueue_,f),t.server_.put(e.toString(),o.val(!0),(d,y)=>{const v=d==="ok";v||He("set at "+e+" failed: "+d);const w=Nn(t.serverSyncTree_,u,!v);jt(t.eventQueue_,e,w),rE(t,i,d,y)});const c=Lg(t,e);Zo(t,c),jt(t.eventQueue_,c,[])}function eE(t){kc(t,"onDisconnectEvents");const e=Sc(t),n=wo();Ha(t.onDisconnect_,V(),(i,s)=>{const o=MC(i,s,t.serverSyncTree_,e);rg(n,i,o)});let r=[];Ha(n,V(),(i,s)=>{r=r.concat(qo(t.serverSyncTree_,i,s));const o=Lg(t,i);Zo(t,o)}),t.onDisconnect_=wo(),jt(t.eventQueue_,V(),r)}function tE(t,e,n){let r;z(e._path)===".info"?r=Lf(t.infoSyncTree_,e,n):r=Lf(t.serverSyncTree_,e,n),Tg(t.eventQueue_,e._path,r)}function zf(t,e,n){let r;z(e._path)===".info"?r=Ka(t.infoSyncTree_,e,n):r=Ka(t.serverSyncTree_,e,n),Tg(t.eventQueue_,e._path,r)}function nE(t){t.persistentConnection_&&t.persistentConnection_.interrupt(QC)}function kc(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Te(n,...e)}function rE(t,e,n,r){e&&jr(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Dg(t,e,n){return fc(t.serverSyncTree_,e,n)||M.EMPTY_NODE}function Ic(t,e=t.transactionQueueTree_){if(e||el(t,e),zr(e)){const n=Og(t,e);k(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&iE(t,ns(e),n)}else Sg(e)&&Jo(e,n=>{Ic(t,n)})}function iE(t,e,n){const r=n.map(u=>u.currentWriteId),i=Dg(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const f=n[u];k(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const c=je(e,f.path);s=s.updateChild(c,f.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{kc(t,"transaction put response",{path:a.toString(),status:u});let f=[];if(u==="ok"){const c=[];for(let d=0;d<n.length;d++)n[d].status=2,f=f.concat(Nn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&c.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();el(t,wc(t.transactionQueueTree_,e)),Ic(t,t.transactionQueueTree_),jt(t.eventQueue_,e,f);for(let d=0;d<c.length;d++)jr(c[d])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{He("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Zo(t,e)}},o)}function Zo(t,e){const n=Ag(t,e),r=ns(n),i=Og(t,n);return sE(t,i,r),r}function sE(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=je(n,a.path);let f=!1,c;if(k(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)f=!0,c=a.abortReason,i=i.concat(Nn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=YC)f=!0,c="maxretry",i=i.concat(Nn(t.serverSyncTree_,a.currentWriteId,!0));else{const d=Dg(t,a.path,o);a.currentInputSnapshot=d;const y=e[l].update(d.val());if(y!==void 0){Cc("transaction failed: Data returned ",y,a.path);let v=Ee(y);typeof y=="object"&&y!=null&&Ut(y,".priority")||(v=v.updatePriority(d.getPriority()));const b=a.currentWriteId,g=Sc(t),h=Cg(v,d,g);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=h,a.currentWriteId=Pg(t),o.splice(o.indexOf(b),1),i=i.concat(_g(t.serverSyncTree_,a.path,h,a.currentWriteId,a.applyLocally)),i=i.concat(Nn(t.serverSyncTree_,b,!0))}else f=!0,c="nodata",i=i.concat(Nn(t.serverSyncTree_,a.currentWriteId,!0))}jt(t.eventQueue_,n,i),i=[],f&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}el(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)jr(r[l]);Ic(t,t.transactionQueueTree_)}function Ag(t,e){let n,r=t.transactionQueueTree_;for(n=z(e);n!==null&&zr(r)===void 0;)r=wc(r,n),e=q(e),n=z(e);return r}function Og(t,e){const n=[];return Mg(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Mg(t,e,n){const r=zr(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Jo(e,i=>{Mg(t,i,n)})}function el(t,e){const n=zr(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Eg(e,n.length>0?n:void 0)}Jo(e,r=>{el(t,r)})}function Lg(t,e){const n=ns(Ag(t,e)),r=wc(t.transactionQueueTree_,e);return bC(r,i=>{jl(t,i)}),jl(t,r),xg(r,i=>{jl(t,i)}),n}function jl(t,e){const n=zr(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(k(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(k(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Nn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Eg(e,void 0):n.length=s+1,jt(t.eventQueue_,ns(e),i);for(let o=0;o<r.length;o++)jr(r[o])}}/**
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
 */function oE(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function lE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):He(`Invalid query segment '${n}' in query '${t}'`)}return e}const Uf=function(t,e){const n=aE(t),r=n.namespace;n.domain==="firebase.com"&&Ft(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Ft("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||ww();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new jm(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Q(n.pathString)}},aE=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let f=t.indexOf("/");f===-1&&(f=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(f,c)),f<c&&(i=oE(t.substring(f,c)));const d=lE(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const y=e.slice(0,u);if(y.toLowerCase()==="localhost")n="localhost";else if(y.split(".").length<=2)n=y;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */class uE{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ve(this.snapshot.exportVal())}}class cE{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class dE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return k(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Nc{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return B(this._path)?null:Qm(this._path)}get ref(){return new gn(this._repo,this._path)}get _queryIdentifier(){const e=Sf(this._queryParams),n=qu(e);return n==="{}"?"default":n}get _queryObject(){return Sf(this._queryParams)}isEqual(e){if(e=Xi(e),!(e instanceof Nc))return!1;const n=this._repo===e._repo,r=ec(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+r1(this._path)}}class gn extends Nc{constructor(e,n){super(e,n,new ic,!1)}get parent(){const e=Km(this._path);return e===null?null:new gn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class To{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Q(e),r=Xa(this.ref,e);return new To(this._node.getChild(n),r,ae)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new To(i,Xa(this.ref,r),ae)))}hasChild(e){const n=new Q(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Bf(t,e){return t=Xi(t),t._checkNotDeleted("ref"),e!==void 0?Xa(t._root,e):t._root}function Xa(t,e){return t=Xi(t),z(t._path)===null?WC("child","path",e):Ng("child","path",e),new gn(t._repo,pe(t._path,e))}function fE(t,e){t=Xi(t),HC("set",t._path),BC("set",e,t._path);const n=new Vo;return ZC(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Tc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new uE("value",this,new To(e.snapshotNode,new gn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new cE(this,e,n):null}matches(e){return e instanceof Tc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function hE(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(f,c)=>{zf(t._repo,t,l),a(f,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new dE(n,s||void 0),l=new Tc(o);return tE(t._repo,t,l),()=>zf(t._repo,t,l)}function pE(t,e,n,r){return hE(t,"value",e,n,r)}hC(gn);vC(gn);/**
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
 */const mE="FIREBASE_DATABASE_EMULATOR_HOST",Ja={};let gE=!1;function _E(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=gm(s);t.repoInfo_=new jm(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function yE(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Ft("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Te("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Uf(s,i),l=o.repoInfo,a;typeof process<"u"&&sf&&(a=sf[mE]),a?(s=`http://${a}?ns=${l.namespace}`,o=Uf(s,i),l=o.repoInfo):o.repoInfo.secure;const u=new Dw(t.name,t.options,e);$C("Invalid Firebase Database URL",o),B(o.path)||Ft("Database URL must point to the root of a Firebase Database (not including a child path).");const f=wE(l,t,u,new Pw(t,n));return new CE(f,t)}function vE(t,e){const n=Ja[e];(!n||n[t.key]!==t)&&Ft(`Database ${e}(${t.repoInfo_}) has already been deleted.`),nE(t),delete n[t.key]}function wE(t,e,n,r){let i=Ja[e.name];i||(i={},Ja[e.name]=i);let s=i[t.toURLString()];return s&&Ft("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new KC(t,gE,n,r),i[t.toURLString()]=s,s}class CE{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(qC(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new gn(this._repo,V())),this._rootInternal}_delete(){return this._rootInternal!==null&&(vE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ft("Cannot call "+e+" on a deleted database.")}}function EE(t=rw(),e){const n=J0(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Uv("database");r&&SE(n,...r)}return n}function SE(t,e,n,r={}){t=Xi(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&ho(r,s.repoInfo_.emulatorOptions))return;Ft("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&Ft('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new zs(zs.OWNER);else if(r.mockUserToken){const l=typeof r.mockUserToken=="string"?r.mockUserToken:Bv(r.mockUserToken,t.app.options.projectId);o=new zs(l)}gm(e)&&t0(e),_E(s,i,r,o)}/**
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
 */function xE(t){pw(nw),mo(new Fi("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return yE(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),yr(of,lf,t),yr(of,lf,"esm2020")}Dt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Dt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};xE();var kE="firebase",IE="12.15.0";/**
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
 */yr(kE,IE,"app");const NE={apiKey:"AIzaSyC-AGGH-4B7w4fiZdPzILlYZcFwKsifNEk",authDomain:"minima-game.firebaseapp.com",databaseURL:"https://minima-game-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"minima-game",storageBucket:"minima-game.firebasestorage.app",messagingSenderId:"650096003712",appId:"1:650096003712:web:2e42f303ce049256413465"},TE=wm(NE),Wf=EE(TE),Hf="shared-game",mt=({children:t,size:e=14,...n})=>p.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...n,children:t}),zl=t=>p.jsxs(mt,{...t,children:[p.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),p.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),$f=t=>p.jsxs(mt,{...t,children:[p.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),p.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),RE=t=>p.jsx(mt,{...t,children:p.jsx("path",{d:"M3 17h18l-2-9-5 5-4-7-4 7-5-5Z"})}),PE=t=>p.jsxs(mt,{...t,children:[p.jsx("circle",{cx:"12",cy:"11",r:"7"}),p.jsx("circle",{cx:"9",cy:"11",r:"1",fill:"currentColor"}),p.jsx("circle",{cx:"15",cy:"11",r:"1",fill:"currentColor"}),p.jsx("path",{d:"M10 19h4"})]}),DE=t=>p.jsxs(mt,{...t,children:[p.jsx("path",{d:"M3 7v6h6"}),p.jsx("path",{d:"M3 13a9 9 0 1 0 3-7.7L3 7"})]}),Vf=t=>p.jsxs(mt,{...t,children:[p.jsx("path",{d:"M3 12a9 9 0 1 1 3 6.7"}),p.jsx("path",{d:"M3 12V6M3 12h6"})]}),Gf=t=>p.jsxs(mt,{...t,children:[p.jsx("rect",{x:"9",y:"9",width:"11",height:"11",rx:"2"}),p.jsx("path",{d:"M5 15V5a2 2 0 0 1 2-2h10"})]}),AE=t=>p.jsxs(mt,{...t,children:[p.jsx("path",{d:"M3 6h18"}),p.jsx("path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),p.jsx("path",{d:"M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"}),p.jsx("path",{d:"M10 11v6M14 11v6"})]}),Zr=t=>p.jsxs(mt,{...t,children:[p.jsx("rect",{x:"5",y:"11",width:"14",height:"9",rx:"2"}),p.jsx("path",{d:"M8 11V7a4 4 0 0 1 8 0v4"})]}),Ul=t=>p.jsxs(mt,{...t,children:[p.jsx("rect",{x:"5",y:"11",width:"14",height:"9",rx:"2"}),p.jsx("path",{d:"M8 11V7a4 4 0 0 1 7.2-2.4"})]}),OE=t=>p.jsx(mt,{...t,children:p.jsx("path",{d:"M17 3a2.83 2.83 0 1 1 4 4L7 21l-4 1 1-4Z"})}),Qf=-10,ME=["Ayush","Hans","Aman","Yash","Arnav","Sumit","Shivam","Happy"],LE=[[0,10,12,6,11,7,13,50],[6,-10,7,8,2,6,4,9],[4,0,7,0,50,6,0,0],[7,5,0,16,23,4,50,0],[16,8,46,-10,15,21,5,23],[16,0,6,50,9,11,5,17],[3,5,6,14,-10,5,5,6],[5,21,7,25,4,10,-10,12],[7,3,17,9,17,9,-10,7],[15,8,12,7,20,21,-10,11],[50,8,5,0,11,12,13,6],[12,24,18,16,19,6,20,-10],[3,15,5,8,-10,6,11,11],[4,4,4,15,14,12,-10,6],[6,5,4,5,16,18,16,-10],[5,-10,8,6,14,14,4,13]];function yi(t){return`${t}${Date.now().toString(36)}${Math.floor(Math.random()*1e3)}`}function bE(){const t=ME.map((n,r)=>({id:`p${r}`,name:n})),e=LE.map((n,r)=>({id:`r${r}`,scores:Object.fromEntries(t.map((i,s)=>[i.id,n[s]]))}));return{id:yi("b"),name:"Game 1",players:t,rounds:e}}function Yf(t){return{id:yi("b"),name:t,players:[],rounds:[]}}function FE(t){return JSON.parse(JSON.stringify({players:t.players,rounds:t.rounds}))}function jE(){const[t,e]=H.useState([]),[n,r]=H.useState(null),[i,s]=H.useState(!1),[o,l]=H.useState(""),[a,u]=H.useState(""),[f,c]=H.useState(""),[d,y]=H.useState(!1),[v,w]=H.useState(!1),[b,g]=H.useState(!1),[h,_]=H.useState(""),[E,I]=H.useState(null),[D,P]=H.useState(null),[A,Y]=H.useState(""),[F,Pe]=H.useState([]),[_n,gt]=H.useState(!1),[Wn,rs]=H.useState(""),[Hn,yn]=H.useState(""),[N,L]=H.useState([]),[j,J]=H.useState(!1),[ue,Bt]=H.useState(""),[_t,$n]=H.useState(""),[yt,Wt]=H.useState(""),[,Rc]=H.useState(0),is=H.useRef(null),Vn=H.useRef({}),ss=H.useRef(null),Pc=H.useRef({}),tl=H.useRef({});function bg(m){const C={};return m.forEach(x=>{C[x.id]={...x,players:x.players.reduce((R,O)=>(R[O.id]=O,R),{}),rounds:x.rounds.reduce((R,O)=>(R[O.id]=O,R),{})}}),C}function Fg(m){return Object.values(m).map(C=>({...C,players:C.players?Object.values(C.players):[],rounds:C.rounds?Object.values(C.rounds).map(x=>({...x,scores:x.scores||{}})):[]}))}H.useEffect(()=>{const m=Bf(Wf,`rooms/${Hf}`),C=pE(m,x=>{const R=x.val();if(R&&R.boards){const O=Fg(R.boards);ss.current=JSON.stringify({boards:O}),e(O),r(oe=>{var qn,Fc;return oe?O.some(t_=>t_.id===oe)?oe:((Fc=O[0])==null?void 0:Fc.id)||null:((qn=O[0])==null?void 0:qn.id)||null})}else{const O=bE();ss.current=JSON.stringify({boards:[O]}),e([O]),r(O.id)}s(!0)},()=>s(!0));return()=>C()},[]),H.useEffect(()=>{if(!i)return;const m=JSON.stringify({boards:t});if(m!==ss.current)return is.current&&clearTimeout(is.current),is.current=setTimeout(()=>{ss.current=m,fE(Bf(Wf,`rooms/${Hf}`),{boards:bg(t)}).catch(()=>{})},200),()=>clearTimeout(is.current)},[t,i]);const de=t.find(m=>m.id===n)||null;H.useEffect(()=>{Pe([]),gt(!1),u(""),c("")},[n]);function jg(){if(!de)return;const m=Vn.current[n]||[];Vn.current[n]=[...m,FE(de)].slice(-20),Rc(C=>C+1)}function xt(m){jg(),m()}function rt(m){e(C=>C.map(x=>x.id===n?m(x):x))}function zg(){const m=Vn.current[n]||[];if(!m.length)return;const C=m[m.length-1];Vn.current[n]=m.slice(0,-1),e(x=>x.map(R=>R.id===n?{...R,players:C.players,rounds:C.rounds}:R)),Rc(x=>x+1)}const Ug=(Vn.current[n]||[]).length>0;function Bg(){xt(()=>{rt(m=>({...m,players:[],rounds:[]}))}),y(!1)}function Wg(){xt(()=>{rt(m=>({...m,rounds:[]}))}),w(!1)}function Hg(){const m=t.find(O=>O.id===Wn);if(!m||!de)return;const C=de.players.map(O=>O.name.toLowerCase()),x=m.players.filter(O=>!C.includes(O.name.toLowerCase()));if(x.length===0){yn("Those names are already on this board.");return}const R=x.map(O=>({id:yi("p"),name:O.name}));xt(()=>{rt(O=>({...O,players:[...O.players,...R],rounds:O.rounds.map(oe=>({...oe,scores:{...oe.scores,...Object.fromEntries(R.map(ls=>[ls.id,0]))}}))}))}),yn(`Copied ${R.length} name${R.length===1?"":"s"} from "${m.name}".`),rs("")}function Dc(){const m=ue.trim();!m||!de||(e(C=>C.map(x=>x.id===n?{...x,locked:!0,password:m}:x)),L(C=>C.includes(n)?C:[...C,n]),J(!1),Bt(""))}function $g(){de&&e(m=>m.map(C=>C.id===n?{...C,locked:!1,password:null}:C))}function Ac(){de&&(_t===de.password?(L(m=>m.includes(n)?m:[...m,n]),$n(""),Wt("")):Wt("Incorrect password."))}function Oc(){const m=a.trim();if(!m||!de)return;if(de.players.some(x=>x.name.toLowerCase()===m.toLowerCase())){c("That name's already on the board.");return}c("");const C=yi("p");xt(()=>{rt(x=>({...x,players:[...x.players,{id:C,name:m}],rounds:x.rounds.map(R=>({...R,scores:{...R.scores,[C]:0}}))}))}),u("")}function Vg(m){xt(()=>{rt(C=>({...C,players:C.players.filter(x=>x.id!==m),rounds:C.rounds.map(x=>{const R={...x.scores};return delete R[m],{...x,scores:R}})}))})}function Gg(){if(!de)return;const m=yi("r");xt(()=>{rt(C=>({...C,rounds:[...C.rounds,{id:m,locked:!1,scores:Object.fromEntries(C.players.map(x=>[x.id,""]))}]}))})}function Qg(m,C,x){rt(R=>({...R,rounds:R.rounds.map(O=>O.id===m?{...O,scores:{...O.scores,[C]:x}}:O)}))}function Yg(m,C,x){if(x===""||x==="-"){xt(()=>{rt(O=>({...O,rounds:O.rounds.map(oe=>oe.id===m?{...oe,scores:{...oe.scores,[C]:""}}:oe)}))});return}let R=parseInt(x,10);isNaN(R)&&(R=0),R<Qf&&(R=Qf),xt(()=>{rt(O=>({...O,rounds:O.rounds.map(oe=>oe.id===m?{...oe,scores:{...oe.scores,[C]:R}}:oe)}))})}function Kg(){xt(()=>{rt(m=>({...m,rounds:m.rounds.filter(C=>!F.includes(C.id))}))}),Pe([]),gt(!1)}function qg(m){Pe(C=>C.includes(m)?C.filter(x=>x!==m):[...C,m])}function Mc(m,C){const x=C.map(R=>m.scores[R.id]).filter(R=>R!==""&&R!==void 0&&R!==null&&!isNaN(Number(R))).map(Number);return x.length?Math.min(...x):null}function Xg(m){rt(C=>({...C,rounds:C.rounds.map(x=>x.id===m?{...x,locked:!x.locked}:x)}))}function Jg(m){P(m.id),Y(m.name)}function Lc(){const m=A.trim();m&&e(C=>C.map(x=>x.id===D?{...x,name:m}:x)),P(null),Y("")}function bc(){const m=h.trim()||`Game ${t.length+1}`,C=Yf(m);e(x=>[...x,C]),r(C.id),_(""),g(!1)}function Zg(m){e(C=>{const x=C.filter(R=>R.id!==m);if(x.length===0){const R=Yf("Game 1");return r(R.id),[R]}return m===n&&r(x[0].id),x}),delete Vn.current[m],I(null)}const De=de&&de.players||[],Ur=de&&de.rounds||[],os=De.map(m=>({...m,total:Ur.reduce((C,x)=>C+(Number(x.scores[m.id])||0),0)})),Ht=[...os].sort((m,C)=>m.total-C.total),e_=Pc.current,Gn={};if(Ht.forEach((m,C)=>{const x=e_[m.id];x===void 0?Gn[m.id]=null:C<x?Gn[m.id]="up":C>x?Gn[m.id]="down":Gn[m.id]=null,Gn[m.id]!==null&&(tl.current[m.id]=(tl.current[m.id]||0)+1)}),H.useEffect(()=>{const m={};Ht.forEach((C,x)=>{m[C.id]=x}),Pc.current=m}),!i||!de)return p.jsx("div",{style:{background:"#0f172a",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",color:"#cad4e2",fontSize:"13px",fontFamily:"-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif"},children:"Loading…"});const Qn=!!de.locked&&!N.includes(de.id),Yn=Ht.length?Ht[0].total:null,Kn=Ht.length?Ht[Ht.length-1].total:null;return p.jsxs("div",{className:"board",children:[p.jsx("style",{children:`
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
      `}),p.jsxs("div",{className:"wrap",children:[p.jsxs("div",{className:"title-row",children:[p.jsxs("div",{children:[p.jsx("h1",{className:"title",children:"Minima Game"}),p.jsxs("p",{className:"subtitle",children:["Score each round. ",p.jsx("b",{children:"Lowest total wins."})," Minimum −10 per round, no ceiling."]})]}),p.jsxs("div",{className:"toolbar",children:[p.jsxs("button",{className:"btn",onClick:()=>{const m=window.location.origin+window.location.pathname;navigator.clipboard.writeText(m).then(()=>l("Link copied!")).catch(()=>l(m)),setTimeout(()=>l(""),2500)},title:"Copy a link anyone can use to view and edit this board live",children:[p.jsx(Gf,{size:14})," Share"]}),o&&p.jsx("span",{className:"confirm-box",children:o}),p.jsxs("button",{className:"btn btn-ghost",onClick:zg,disabled:!Ug||Qn,title:"Undo last change",children:[p.jsx(DE,{size:14})," Undo"]}),d?p.jsxs("span",{className:"confirm-box",children:["Clear all players & rounds?",p.jsx("button",{className:"btn btn-danger",onClick:Bg,children:"Yes, clear"}),p.jsx("button",{className:"btn btn-ghost",onClick:()=>y(!1),children:"Cancel"})]}):p.jsxs("button",{className:"btn btn-ghost",onClick:()=>y(!0),disabled:Qn,title:"Clear this board",children:[p.jsx(Vf,{size:14})," Clear board"]}),v?p.jsxs("span",{className:"confirm-box",children:["Clear all rounds? Players stay.",p.jsx("button",{className:"btn btn-danger",onClick:Wg,children:"Yes, clear"}),p.jsx("button",{className:"btn btn-ghost",onClick:()=>w(!1),children:"Cancel"})]}):p.jsxs("button",{className:"btn btn-ghost",onClick:()=>w(!0),disabled:Qn,title:"Clear only the rounds table",children:[p.jsx(Vf,{size:14})," Clear rounds"]}),de.locked?Qn?p.jsxs("span",{className:"confirm-box lock-badge",children:[p.jsx(Zr,{size:13})," Locked"]}):p.jsxs("button",{className:"btn btn-ghost",onClick:$g,title:"Remove the password lock",children:[p.jsx(Ul,{size:14})," Remove lock"]}):j?p.jsxs("span",{className:"confirm-box",children:[p.jsx("input",{type:"password",autoFocus:!0,className:"password-input",placeholder:"Set a password",value:ue,onChange:m=>Bt(m.target.value),onKeyDown:m=>m.key==="Enter"&&Dc()}),p.jsx("button",{className:"btn",onClick:Dc,children:"Lock"}),p.jsx("button",{className:"btn btn-ghost",onClick:()=>{J(!1),Bt("")},children:"Cancel"})]}):p.jsxs("button",{className:"btn btn-ghost",onClick:()=>J(!0),title:"Lock this board with a password",children:[p.jsx(Zr,{size:14})," Lock board"]})]})]}),p.jsxs("div",{className:"board-tabs",children:[t.map(m=>D===m.id?p.jsx("div",{className:"new-board-input",children:p.jsx("input",{autoFocus:!0,value:A,onChange:C=>Y(C.target.value),onKeyDown:C=>{C.key==="Enter"&&Lc(),C.key==="Escape"&&(P(null),Y(""))},onBlur:Lc})},m.id):p.jsxs("div",{className:"tab"+(m.id===n?" active":""),onClick:()=>r(m.id),children:[m.locked&&p.jsx(Zr,{size:11}),m.name,(!m.locked||N.includes(m.id))&&p.jsx("button",{onClick:C=>{C.stopPropagation(),Jg(m)},title:"Rename board",children:p.jsx(OE,{size:11})}),t.length>1&&(!m.locked||N.includes(m.id))&&(E===m.id?p.jsxs(p.Fragment,{children:[p.jsx("button",{onClick:C=>{C.stopPropagation(),Zg(m.id)},title:"Confirm delete",children:"✓"}),p.jsx("button",{onClick:C=>{C.stopPropagation(),I(null)},title:"Cancel",children:"✕"})]}):p.jsx("button",{onClick:C=>{C.stopPropagation(),I(m.id)},title:"Delete board",children:p.jsx($f,{size:12})}))]},m.id)),b?p.jsxs("div",{className:"new-board-input",children:[p.jsx("input",{autoFocus:!0,placeholder:"Board name",value:h,onChange:m=>_(m.target.value),onKeyDown:m=>{m.key==="Enter"&&bc(),m.key==="Escape"&&(g(!1),_(""))}}),p.jsx("button",{className:"btn",onClick:bc,children:"Create"})]}):p.jsxs("button",{className:"tab-add",onClick:()=>g(!0),children:[p.jsx(zl,{size:13})," New board"]})]}),p.jsxs("div",{className:"panel",children:[p.jsx("div",{className:"panel-head",children:p.jsx("h2",{children:"Leaderboard"})}),os.length===0?p.jsx("div",{className:"empty",children:"Add players below to start the board."}):p.jsx("div",{className:"leaderboard-list",children:Ht.map((m,C)=>{const x=Gn[m.id],R=tl.current[m.id]||0;return p.jsxs("div",{className:"lb-row"+(x==="up"?" anim-up":x==="down"?" anim-down":"")+(m.total===Yn?" lb-leader":"")+(m.total===Kn&&Kn!==Yn?" lb-last":""),children:[p.jsx("span",{className:"lb-rank",children:C+1}),p.jsx("span",{className:"lb-rank-delta"+(x==="up"?" up":x==="down"?" down":""),children:x==="up"?"▲":x==="down"?"▼":""}),p.jsx("span",{className:"lb-name",children:m.name}),m.total===Yn&&p.jsx(RE,{size:15,color:"#f59e0b"}),m.total===Kn&&Kn!==Yn&&p.jsx(PE,{size:14,color:"#f87171"}),p.jsx("span",{className:"lb-score",children:m.total})]},m.id+"-"+R)})})]}),Qn&&p.jsxs("div",{className:"panel",style:{display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"},children:[p.jsx(Zr,{size:14,style:{color:"#C8A24D",flexShrink:0}}),p.jsxs("span",{style:{color:"#E0C9A0",fontSize:"13px",flex:1},children:['"',de.name,'" is locked. Enter the password to edit.']}),p.jsx("input",{type:"password",className:"password-input",placeholder:"Password",value:_t,onChange:m=>{$n(m.target.value),Wt("")},onKeyDown:m=>m.key==="Enter"&&Ac()}),p.jsxs("button",{className:"btn",onClick:Ac,children:[p.jsx(Ul,{size:14})," Unlock"]}),yt&&p.jsx("span",{className:"err",style:{width:"100%",marginTop:0},children:yt})]}),Qn?p.jsxs(p.Fragment,{children:[De.length>0&&p.jsxs("div",{className:"panel",children:[p.jsx("div",{className:"panel-head",children:p.jsx("h2",{children:"Players"})}),p.jsx("div",{className:"player-chips",children:De.map(m=>p.jsx("div",{className:"chip",style:{paddingRight:"12px"},children:m.name},m.id))})]}),De.length>0&&Ur.length>0&&p.jsxs("div",{className:"panel",children:[p.jsx("div",{className:"panel-head",children:p.jsx("h2",{children:"Rounds"})}),p.jsx("div",{className:"table-scroll",children:p.jsxs("table",{children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Round"}),De.map(m=>p.jsx("th",{children:m.name},m.id))]})}),p.jsx("tbody",{children:Ur.map((m,C)=>{const x=Mc(m,De);return p.jsxs("tr",{children:[p.jsx("td",{children:C+1}),De.map(R=>{const O=m.scores[R.id]??"",oe=x!==null&&O!==""&&Number(O)===x;return p.jsx("td",{children:p.jsx("span",{className:"score-input"+(oe?" is-low":""),style:{display:"inline-block",lineHeight:"1",cursor:"default"},children:O===""?"—":O})},R.id)})]},m.id)})}),p.jsx("tfoot",{children:p.jsxs("tr",{children:[p.jsx("td",{children:"Total"}),De.map(m=>{var x;const C=((x=os.find(R=>R.id===m.id))==null?void 0:x.total)??0;return p.jsx("td",{className:C===Yn?"total-low":C===Kn?"total-high":"",children:C},m.id)})]})})]})})]})]}):p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"panel",children:[p.jsx("h2",{children:"Players"}),p.jsx("div",{className:"player-chips",children:De.map(m=>p.jsxs("div",{className:"chip",children:[m.name,p.jsx("button",{onClick:()=>Vg(m.id),"aria-label":`Remove ${m.name}`,children:p.jsx($f,{size:13})})]},m.id))}),p.jsxs("div",{className:"add-row",children:[p.jsx("input",{placeholder:"Add a player name",value:a,onChange:m=>u(m.target.value),onKeyDown:m=>m.key==="Enter"&&Oc()}),p.jsxs("button",{className:"btn",onClick:Oc,children:[p.jsx(zl,{size:14})," Add"]})]}),f&&p.jsx("div",{className:"err",children:f}),t.length>1&&p.jsxs("div",{className:"copy-row",children:[p.jsxs("select",{className:"board-select",value:Wn,onChange:m=>{rs(m.target.value),yn("")},children:[p.jsx("option",{value:"",children:"Copy names from board…"}),t.filter(m=>m.id!==n).map(m=>p.jsxs("option",{value:m.id,children:[m.name," (",m.players.length," players)"]},m.id))]}),p.jsxs("button",{className:"btn btn-ghost",onClick:Hg,disabled:!Wn,children:[p.jsx(Gf,{size:14})," Copy names"]})]}),Hn&&p.jsx("div",{className:"copy-note",children:Hn})]}),p.jsxs("div",{className:"panel",children:[p.jsx("h2",{children:"Rounds"}),De.length===0?p.jsx("div",{className:"empty",children:"Add at least one player to start logging rounds."}):p.jsx("div",{className:"table-scroll",children:p.jsxs("table",{children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Round"}),De.map(m=>p.jsx("th",{children:m.name},m.id)),p.jsx("th",{})]})}),p.jsx("tbody",{children:Ur.map((m,C)=>{const x=Mc(m,De),R=!!m.locked;return p.jsxs("tr",{className:R?"round-locked":"",children:[p.jsx("td",{children:C+1}),De.map(O=>{const oe=m.scores[O.id]??"",ls=x!==null&&oe!==""&&Number(oe)===x;return p.jsx("td",{children:p.jsx("input",{className:"score-input"+(ls?" is-low":""),type:"text",placeholder:"",value:oe,disabled:R,onChange:qn=>Qg(m.id,O.id,qn.target.value),onBlur:qn=>Yg(m.id,O.id,qn.target.value)})},O.id)}),p.jsx("td",{children:p.jsxs("div",{className:"row-actions",children:[p.jsx("input",{type:"checkbox",className:"select-checkbox",checked:F.includes(m.id),onChange:()=>qg(m.id),disabled:R,"aria-label":"Select round",title:"Select round"}),p.jsx("button",{className:"lock-toggle"+(R?" is-locked":""),onClick:()=>Xg(m.id),"aria-label":R?"Unlock round":"Lock round",title:R?"Unlock round":"Lock round",children:R?p.jsx(Zr,{size:13}):p.jsx(Ul,{size:13})})]})})]},m.id)})}),Ur.length>0&&p.jsx("tfoot",{children:p.jsxs("tr",{children:[p.jsx("td",{children:"Total"}),De.map(m=>{var x;const C=((x=os.find(R=>R.id===m.id))==null?void 0:x.total)??0;return p.jsx("td",{className:C===Yn?"total-low":C===Kn?"total-high":"",children:C},m.id)}),p.jsx("td",{})]})})]})}),p.jsxs("div",{className:"actions-row",children:[F.length>0&&(_n?p.jsxs("span",{className:"confirm-box",children:["Delete ",F.length," round",F.length===1?"":"s","?",p.jsx("button",{className:"btn btn-danger",onClick:Kg,children:"Yes, delete"}),p.jsx("button",{className:"btn btn-ghost",onClick:()=>gt(!1),children:"Cancel"})]}):p.jsxs("button",{className:"btn btn-danger",onClick:()=>gt(!0),children:[p.jsx(AE,{size:14})," Delete selected (",F.length,")"]})),p.jsxs("button",{className:"btn btn-ghost",onClick:Gg,disabled:De.length===0,children:[p.jsx(zl,{size:14})," Add round"]})]})]})]})]})]})}Bl.createRoot(document.getElementById("root")).render(p.jsx(y_.StrictMode,{children:p.jsx(jE,{})}));
