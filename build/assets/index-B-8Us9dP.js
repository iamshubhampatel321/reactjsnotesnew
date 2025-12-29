(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const h of c)if(h.type==="childList")for(const p of h.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function o(c){const h={};return c.integrity&&(h.integrity=c.integrity),c.referrerPolicy&&(h.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?h.credentials="include":c.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function l(c){if(c.ep)return;c.ep=!0;const h=o(c);fetch(c.href,h)}})();var fl={exports:{}},ys={},ml={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function ly(){if(Bp)return le;Bp=1;var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),p=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.iterator;function w(S){return S===null||typeof S!="object"?null:(S=v&&S[v]||S["@@iterator"],typeof S=="function"?S:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,D={};function R(S,B,ae){this.props=S,this.context=B,this.refs=D,this.updater=ae||N}R.prototype.isReactComponent={},R.prototype.setState=function(S,B){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,B,"setState")},R.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function L(){}L.prototype=R.prototype;function M(S,B,ae){this.props=S,this.context=B,this.refs=D,this.updater=ae||N}var I=M.prototype=new L;I.constructor=M,A(I,R.prototype),I.isPureReactComponent=!0;var Q=Array.isArray,W=Object.prototype.hasOwnProperty,ne={current:null},ie={key:!0,ref:!0,__self:!0,__source:!0};function Z(S,B,ae){var ue,de={},pe=null,xe=null;if(B!=null)for(ue in B.ref!==void 0&&(xe=B.ref),B.key!==void 0&&(pe=""+B.key),B)W.call(B,ue)&&!ie.hasOwnProperty(ue)&&(de[ue]=B[ue]);var me=arguments.length-2;if(me===1)de.children=ae;else if(1<me){for(var ke=Array(me),pt=0;pt<me;pt++)ke[pt]=arguments[pt+2];de.children=ke}if(S&&S.defaultProps)for(ue in me=S.defaultProps,me)de[ue]===void 0&&(de[ue]=me[ue]);return{$$typeof:t,type:S,key:pe,ref:xe,props:de,_owner:ne.current}}function fe(S,B){return{$$typeof:t,type:S.type,key:B,ref:S.ref,props:S.props,_owner:S._owner}}function ye(S){return typeof S=="object"&&S!==null&&S.$$typeof===t}function tt(S){var B={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(ae){return B[ae]})}var ct=/\/+/g;function Qe(S,B){return typeof S=="object"&&S!==null&&S.key!=null?tt(""+S.key):B.toString(36)}function nt(S,B,ae,ue,de){var pe=typeof S;(pe==="undefined"||pe==="boolean")&&(S=null);var xe=!1;if(S===null)xe=!0;else switch(pe){case"string":case"number":xe=!0;break;case"object":switch(S.$$typeof){case t:case r:xe=!0}}if(xe)return xe=S,de=de(xe),S=ue===""?"."+Qe(xe,0):ue,Q(de)?(ae="",S!=null&&(ae=S.replace(ct,"$&/")+"/"),nt(de,B,ae,"",function(pt){return pt})):de!=null&&(ye(de)&&(de=fe(de,ae+(!de.key||xe&&xe.key===de.key?"":(""+de.key).replace(ct,"$&/")+"/")+S)),B.push(de)),1;if(xe=0,ue=ue===""?".":ue+":",Q(S))for(var me=0;me<S.length;me++){pe=S[me];var ke=ue+Qe(pe,me);xe+=nt(pe,B,ae,ke,de)}else if(ke=w(S),typeof ke=="function")for(S=ke.call(S),me=0;!(pe=S.next()).done;)pe=pe.value,ke=ue+Qe(pe,me++),xe+=nt(pe,B,ae,ke,de);else if(pe==="object")throw B=String(S),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return xe}function dt(S,B,ae){if(S==null)return S;var ue=[],de=0;return nt(S,ue,"","",function(pe){return B.call(ae,pe,de++)}),ue}function Je(S){if(S._status===-1){var B=S._result;B=B(),B.then(function(ae){(S._status===0||S._status===-1)&&(S._status=1,S._result=ae)},function(ae){(S._status===0||S._status===-1)&&(S._status=2,S._result=ae)}),S._status===-1&&(S._status=0,S._result=B)}if(S._status===1)return S._result.default;throw S._result}var oe={current:null},z={transition:null},q={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:z,ReactCurrentOwner:ne};function H(){throw Error("act(...) is not supported in production builds of React.")}return le.Children={map:dt,forEach:function(S,B,ae){dt(S,function(){B.apply(this,arguments)},ae)},count:function(S){var B=0;return dt(S,function(){B++}),B},toArray:function(S){return dt(S,function(B){return B})||[]},only:function(S){if(!ye(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},le.Component=R,le.Fragment=o,le.Profiler=c,le.PureComponent=M,le.StrictMode=l,le.Suspense=m,le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,le.act=H,le.cloneElement=function(S,B,ae){if(S==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+S+".");var ue=A({},S.props),de=S.key,pe=S.ref,xe=S._owner;if(B!=null){if(B.ref!==void 0&&(pe=B.ref,xe=ne.current),B.key!==void 0&&(de=""+B.key),S.type&&S.type.defaultProps)var me=S.type.defaultProps;for(ke in B)W.call(B,ke)&&!ie.hasOwnProperty(ke)&&(ue[ke]=B[ke]===void 0&&me!==void 0?me[ke]:B[ke])}var ke=arguments.length-2;if(ke===1)ue.children=ae;else if(1<ke){me=Array(ke);for(var pt=0;pt<ke;pt++)me[pt]=arguments[pt+2];ue.children=me}return{$$typeof:t,type:S.type,key:de,ref:pe,props:ue,_owner:xe}},le.createContext=function(S){return S={$$typeof:p,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},S.Provider={$$typeof:h,_context:S},S.Consumer=S},le.createElement=Z,le.createFactory=function(S){var B=Z.bind(null,S);return B.type=S,B},le.createRef=function(){return{current:null}},le.forwardRef=function(S){return{$$typeof:f,render:S}},le.isValidElement=ye,le.lazy=function(S){return{$$typeof:y,_payload:{_status:-1,_result:S},_init:Je}},le.memo=function(S,B){return{$$typeof:x,type:S,compare:B===void 0?null:B}},le.startTransition=function(S){var B=z.transition;z.transition={};try{S()}finally{z.transition=B}},le.unstable_act=H,le.useCallback=function(S,B){return oe.current.useCallback(S,B)},le.useContext=function(S){return oe.current.useContext(S)},le.useDebugValue=function(){},le.useDeferredValue=function(S){return oe.current.useDeferredValue(S)},le.useEffect=function(S,B){return oe.current.useEffect(S,B)},le.useId=function(){return oe.current.useId()},le.useImperativeHandle=function(S,B,ae){return oe.current.useImperativeHandle(S,B,ae)},le.useInsertionEffect=function(S,B){return oe.current.useInsertionEffect(S,B)},le.useLayoutEffect=function(S,B){return oe.current.useLayoutEffect(S,B)},le.useMemo=function(S,B){return oe.current.useMemo(S,B)},le.useReducer=function(S,B,ae){return oe.current.useReducer(S,B,ae)},le.useRef=function(S){return oe.current.useRef(S)},le.useState=function(S){return oe.current.useState(S)},le.useSyncExternalStore=function(S,B,ae){return oe.current.useSyncExternalStore(S,B,ae)},le.useTransition=function(){return oe.current.useTransition()},le.version="18.3.1",le}var _p;function au(){return _p||(_p=1,ml.exports=ly()),ml.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function uy(){if($p)return ys;$p=1;var t=au(),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function p(f,m,x){var y,v={},w=null,N=null;x!==void 0&&(w=""+x),m.key!==void 0&&(w=""+m.key),m.ref!==void 0&&(N=m.ref);for(y in m)l.call(m,y)&&!h.hasOwnProperty(y)&&(v[y]=m[y]);if(f&&f.defaultProps)for(y in m=f.defaultProps,m)v[y]===void 0&&(v[y]=m[y]);return{$$typeof:r,type:f,key:w,ref:N,props:v,_owner:c.current}}return ys.Fragment=o,ys.jsx=p,ys.jsxs=p,ys}var Op;function cy(){return Op||(Op=1,fl.exports=uy()),fl.exports}var i=cy(),Yi={},gl={exports:{}},lt={},yl={exports:{}},xl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up;function dy(){return Up||(Up=1,(function(t){function r(z,q){var H=z.length;z.push(q);e:for(;0<H;){var S=H-1>>>1,B=z[S];if(0<c(B,q))z[S]=q,z[H]=B,H=S;else break e}}function o(z){return z.length===0?null:z[0]}function l(z){if(z.length===0)return null;var q=z[0],H=z.pop();if(H!==q){z[0]=H;e:for(var S=0,B=z.length,ae=B>>>1;S<ae;){var ue=2*(S+1)-1,de=z[ue],pe=ue+1,xe=z[pe];if(0>c(de,H))pe<B&&0>c(xe,de)?(z[S]=xe,z[pe]=H,S=pe):(z[S]=de,z[ue]=H,S=ue);else if(pe<B&&0>c(xe,H))z[S]=xe,z[pe]=H,S=pe;else break e}}return q}function c(z,q){var H=z.sortIndex-q.sortIndex;return H!==0?H:z.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;t.unstable_now=function(){return h.now()}}else{var p=Date,f=p.now();t.unstable_now=function(){return p.now()-f}}var m=[],x=[],y=1,v=null,w=3,N=!1,A=!1,D=!1,R=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(z){for(var q=o(x);q!==null;){if(q.callback===null)l(x);else if(q.startTime<=z)l(x),q.sortIndex=q.expirationTime,r(m,q);else break;q=o(x)}}function Q(z){if(D=!1,I(z),!A)if(o(m)!==null)A=!0,Je(W);else{var q=o(x);q!==null&&oe(Q,q.startTime-z)}}function W(z,q){A=!1,D&&(D=!1,L(Z),Z=-1),N=!0;var H=w;try{for(I(q),v=o(m);v!==null&&(!(v.expirationTime>q)||z&&!tt());){var S=v.callback;if(typeof S=="function"){v.callback=null,w=v.priorityLevel;var B=S(v.expirationTime<=q);q=t.unstable_now(),typeof B=="function"?v.callback=B:v===o(m)&&l(m),I(q)}else l(m);v=o(m)}if(v!==null)var ae=!0;else{var ue=o(x);ue!==null&&oe(Q,ue.startTime-q),ae=!1}return ae}finally{v=null,w=H,N=!1}}var ne=!1,ie=null,Z=-1,fe=5,ye=-1;function tt(){return!(t.unstable_now()-ye<fe)}function ct(){if(ie!==null){var z=t.unstable_now();ye=z;var q=!0;try{q=ie(!0,z)}finally{q?Qe():(ne=!1,ie=null)}}else ne=!1}var Qe;if(typeof M=="function")Qe=function(){M(ct)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,dt=nt.port2;nt.port1.onmessage=ct,Qe=function(){dt.postMessage(null)}}else Qe=function(){R(ct,0)};function Je(z){ie=z,ne||(ne=!0,Qe())}function oe(z,q){Z=R(function(){z(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){A||N||(A=!0,Je(W))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):fe=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return w},t.unstable_getFirstCallbackNode=function(){return o(m)},t.unstable_next=function(z){switch(w){case 1:case 2:case 3:var q=3;break;default:q=w}var H=w;w=q;try{return z()}finally{w=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var H=w;w=z;try{return q()}finally{w=H}},t.unstable_scheduleCallback=function(z,q,H){var S=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?S+H:S):H=S,z){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=H+B,z={id:y++,callback:q,priorityLevel:z,startTime:H,expirationTime:B,sortIndex:-1},H>S?(z.sortIndex=H,r(x,z),o(m)===null&&z===o(x)&&(D?(L(Z),Z=-1):D=!0,oe(Q,H-S))):(z.sortIndex=B,r(m,z),A||N||(A=!0,Je(W))),z},t.unstable_shouldYield=tt,t.unstable_wrapCallback=function(z){var q=w;return function(){var H=w;w=q;try{return z.apply(this,arguments)}finally{w=H}}}})(xl)),xl}var zp;function py(){return zp||(zp=1,yl.exports=dy()),yl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp;function hy(){if(Wp)return lt;Wp=1;var t=au(),r=py();function o(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,s=1;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,c={};function h(e,n){p(e,n),p(e+"Capture",n)}function p(e,n){for(c[e]=n,e=0;e<n.length;e++)l.add(n[e])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},v={};function w(e){return m.call(v,e)?!0:m.call(y,e)?!1:x.test(e)?v[e]=!0:(y[e]=!0,!1)}function N(e,n,s,a){if(s!==null&&s.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:s!==null?!s.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function A(e,n,s,a){if(n===null||typeof n>"u"||N(e,n,s,a))return!0;if(a)return!1;if(s!==null)switch(s.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function D(e,n,s,a,u,d,g){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=u,this.mustUseProperty=s,this.propertyName=e,this.type=n,this.sanitizeURL=d,this.removeEmptyString=g}var R={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){R[e]=new D(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];R[n]=new D(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){R[e]=new D(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){R[e]=new D(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){R[e]=new D(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){R[e]=new D(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){R[e]=new D(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){R[e]=new D(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){R[e]=new D(e,5,!1,e.toLowerCase(),null,!1,!1)});var L=/[\-:]([a-z])/g;function M(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(L,M);R[n]=new D(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(L,M);R[n]=new D(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(L,M);R[n]=new D(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){R[e]=new D(e,1,!1,e.toLowerCase(),null,!1,!1)}),R.xlinkHref=new D("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){R[e]=new D(e,1,!1,e.toLowerCase(),null,!0,!0)});function I(e,n,s,a){var u=R.hasOwnProperty(n)?R[n]:null;(u!==null?u.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(A(n,s,u,a)&&(s=null),a||u===null?w(n)&&(s===null?e.removeAttribute(n):e.setAttribute(n,""+s)):u.mustUseProperty?e[u.propertyName]=s===null?u.type===3?!1:"":s:(n=u.attributeName,a=u.attributeNamespace,s===null?e.removeAttribute(n):(u=u.type,s=u===3||u===4&&s===!0?"":""+s,a?e.setAttributeNS(a,n,s):e.setAttribute(n,s))))}var Q=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),ne=Symbol.for("react.portal"),ie=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),fe=Symbol.for("react.profiler"),ye=Symbol.for("react.provider"),tt=Symbol.for("react.context"),ct=Symbol.for("react.forward_ref"),Qe=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),dt=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),oe=Symbol.for("react.offscreen"),z=Symbol.iterator;function q(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,S;function B(e){if(S===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);S=n&&n[1]||""}return`
`+S+e}var ae=!1;function ue(e,n){if(!e||ae)return"";ae=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(E){var a=E}Reflect.construct(e,[],n)}else{try{n.call()}catch(E){a=E}e.call(n.prototype)}else{try{throw Error()}catch(E){a=E}e()}}catch(E){if(E&&a&&typeof E.stack=="string"){for(var u=E.stack.split(`
`),d=a.stack.split(`
`),g=u.length-1,j=d.length-1;1<=g&&0<=j&&u[g]!==d[j];)j--;for(;1<=g&&0<=j;g--,j--)if(u[g]!==d[j]){if(g!==1||j!==1)do if(g--,j--,0>j||u[g]!==d[j]){var k=`
`+u[g].replace(" at new "," at ");return e.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",e.displayName)),k}while(1<=g&&0<=j);break}}}finally{ae=!1,Error.prepareStackTrace=s}return(e=e?e.displayName||e.name:"")?B(e):""}function de(e){switch(e.tag){case 5:return B(e.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return e=ue(e.type,!1),e;case 11:return e=ue(e.type.render,!1),e;case 1:return e=ue(e.type,!0),e;default:return""}}function pe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ie:return"Fragment";case ne:return"Portal";case fe:return"Profiler";case Z:return"StrictMode";case Qe:return"Suspense";case nt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case tt:return(e.displayName||"Context")+".Consumer";case ye:return(e._context.displayName||"Context")+".Provider";case ct:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case dt:return n=e.displayName||null,n!==null?n:pe(e.type)||"Memo";case Je:n=e._payload,e=e._init;try{return pe(e(n))}catch{}}return null}function xe(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(n);case 8:return n===Z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function me(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ke(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function pt(e){var n=ke(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,d=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,d.call(this,g)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Bs(e){e._valueTracker||(e._valueTracker=pt(e))}function Wu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var s=n.getValue(),a="";return e&&(a=ke(e)?e.checked?"true":"false":e.value),e=a,e!==s?(n.setValue(e),!0):!1}function _s(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wo(e,n){var s=n.checked;return H({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??e._wrapperState.initialChecked})}function Hu(e,n){var s=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;s=me(n.value!=null?n.value:s),e._wrapperState={initialChecked:a,initialValue:s,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Ku(e,n){n=n.checked,n!=null&&I(e,"checked",n,!1)}function ko(e,n){Ku(e,n);var s=me(n.value),a=n.type;if(s!=null)a==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+s):e.value!==""+s&&(e.value=""+s);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?bo(e,n.type,s):n.hasOwnProperty("defaultValue")&&bo(e,n.type,me(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Gu(e,n,s){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,s||n===e.value||(e.value=n),e.defaultValue=n}s=e.name,s!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,s!==""&&(e.name=s)}function bo(e,n,s){(n!=="number"||_s(e.ownerDocument)!==e)&&(s==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+s&&(e.defaultValue=""+s))}var Lr=Array.isArray;function Yn(e,n,s,a){if(e=e.options,n){n={};for(var u=0;u<s.length;u++)n["$"+s[u]]=!0;for(s=0;s<e.length;s++)u=n.hasOwnProperty("$"+e[s].value),e[s].selected!==u&&(e[s].selected=u),u&&a&&(e[s].defaultSelected=!0)}else{for(s=""+me(s),n=null,u=0;u<e.length;u++){if(e[u].value===s){e[u].selected=!0,a&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function So(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(o(91));return H({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yu(e,n){var s=n.value;if(s==null){if(s=n.children,n=n.defaultValue,s!=null){if(n!=null)throw Error(o(92));if(Lr(s)){if(1<s.length)throw Error(o(93));s=s[0]}n=s}n==null&&(n=""),s=n}e._wrapperState={initialValue:me(s)}}function Xu(e,n){var s=me(n.value),a=me(n.defaultValue);s!=null&&(s=""+s,s!==e.value&&(e.value=s),n.defaultValue==null&&e.defaultValue!==s&&(e.defaultValue=s)),a!=null&&(e.defaultValue=""+a)}function Qu(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Ju(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Co(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Ju(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $s,qu=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,s,a,u){MSApp.execUnsafeLocalFunction(function(){return e(n,s,a,u)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for($s=$s||document.createElement("div"),$s.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=$s.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Dr(e,n){if(n){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=n;return}}e.textContent=n}var Mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pg=["Webkit","ms","Moz","O"];Object.keys(Mr).forEach(function(e){pg.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Mr[n]=Mr[e]})});function Zu(e,n,s){return n==null||typeof n=="boolean"||n===""?"":s||typeof n!="number"||n===0||Mr.hasOwnProperty(e)&&Mr[e]?(""+n).trim():n+"px"}function ec(e,n){e=e.style;for(var s in n)if(n.hasOwnProperty(s)){var a=s.indexOf("--")===0,u=Zu(s,n[s],a);s==="float"&&(s="cssFloat"),a?e.setProperty(s,u):e[s]=u}}var hg=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Po(e,n){if(n){if(hg[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(o(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(o(61))}if(n.style!=null&&typeof n.style!="object")throw Error(o(62))}}function To(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var No=null;function Eo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ro=null,Xn=null,Qn=null;function tc(e){if(e=ns(e)){if(typeof Ro!="function")throw Error(o(280));var n=e.stateNode;n&&(n=ui(n),Ro(e.stateNode,e.type,n))}}function nc(e){Xn?Qn?Qn.push(e):Qn=[e]:Xn=e}function rc(){if(Xn){var e=Xn,n=Qn;if(Qn=Xn=null,tc(e),n)for(e=0;e<n.length;e++)tc(n[e])}}function sc(e,n){return e(n)}function ic(){}var Ao=!1;function oc(e,n,s){if(Ao)return e(n,s);Ao=!0;try{return sc(e,n,s)}finally{Ao=!1,(Xn!==null||Qn!==null)&&(ic(),rc())}}function Ir(e,n){var s=e.stateNode;if(s===null)return null;var a=ui(s);if(a===null)return null;s=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(o(231,n,typeof s));return s}var Lo=!1;if(f)try{var Fr={};Object.defineProperty(Fr,"passive",{get:function(){Lo=!0}}),window.addEventListener("test",Fr,Fr),window.removeEventListener("test",Fr,Fr)}catch{Lo=!1}function fg(e,n,s,a,u,d,g,j,k){var E=Array.prototype.slice.call(arguments,3);try{n.apply(s,E)}catch(_){this.onError(_)}}var Vr=!1,Os=null,Us=!1,Do=null,mg={onError:function(e){Vr=!0,Os=e}};function gg(e,n,s,a,u,d,g,j,k){Vr=!1,Os=null,fg.apply(mg,arguments)}function yg(e,n,s,a,u,d,g,j,k){if(gg.apply(this,arguments),Vr){if(Vr){var E=Os;Vr=!1,Os=null}else throw Error(o(198));Us||(Us=!0,Do=E)}}function Nn(e){var n=e,s=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(s=n.return),e=n.return;while(e)}return n.tag===3?s:null}function ac(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function lc(e){if(Nn(e)!==e)throw Error(o(188))}function xg(e){var n=e.alternate;if(!n){if(n=Nn(e),n===null)throw Error(o(188));return n!==e?null:e}for(var s=e,a=n;;){var u=s.return;if(u===null)break;var d=u.alternate;if(d===null){if(a=u.return,a!==null){s=a;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===s)return lc(u),e;if(d===a)return lc(u),n;d=d.sibling}throw Error(o(188))}if(s.return!==a.return)s=u,a=d;else{for(var g=!1,j=u.child;j;){if(j===s){g=!0,s=u,a=d;break}if(j===a){g=!0,a=u,s=d;break}j=j.sibling}if(!g){for(j=d.child;j;){if(j===s){g=!0,s=d,a=u;break}if(j===a){g=!0,a=d,s=u;break}j=j.sibling}if(!g)throw Error(o(189))}}if(s.alternate!==a)throw Error(o(190))}if(s.tag!==3)throw Error(o(188));return s.stateNode.current===s?e:n}function uc(e){return e=xg(e),e!==null?cc(e):null}function cc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=cc(e);if(n!==null)return n;e=e.sibling}return null}var dc=r.unstable_scheduleCallback,pc=r.unstable_cancelCallback,vg=r.unstable_shouldYield,jg=r.unstable_requestPaint,Ae=r.unstable_now,wg=r.unstable_getCurrentPriorityLevel,Mo=r.unstable_ImmediatePriority,hc=r.unstable_UserBlockingPriority,zs=r.unstable_NormalPriority,kg=r.unstable_LowPriority,fc=r.unstable_IdlePriority,Ws=null,Vt=null;function bg(e){if(Vt&&typeof Vt.onCommitFiberRoot=="function")try{Vt.onCommitFiberRoot(Ws,e,void 0,(e.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:Pg,Sg=Math.log,Cg=Math.LN2;function Pg(e){return e>>>=0,e===0?32:31-(Sg(e)/Cg|0)|0}var Hs=64,Ks=4194304;function Br(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Gs(e,n){var s=e.pendingLanes;if(s===0)return 0;var a=0,u=e.suspendedLanes,d=e.pingedLanes,g=s&268435455;if(g!==0){var j=g&~u;j!==0?a=Br(j):(d&=g,d!==0&&(a=Br(d)))}else g=s&~u,g!==0?a=Br(g):d!==0&&(a=Br(d));if(a===0)return 0;if(n!==0&&n!==a&&(n&u)===0&&(u=a&-a,d=n&-n,u>=d||u===16&&(d&4194240)!==0))return n;if((a&4)!==0&&(a|=s&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)s=31-Tt(n),u=1<<s,a|=e[s],n&=~u;return a}function Tg(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ng(e,n){for(var s=e.suspendedLanes,a=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes;0<d;){var g=31-Tt(d),j=1<<g,k=u[g];k===-1?((j&s)===0||(j&a)!==0)&&(u[g]=Tg(j,n)):k<=n&&(e.expiredLanes|=j),d&=~j}}function Io(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function mc(){var e=Hs;return Hs<<=1,(Hs&4194240)===0&&(Hs=64),e}function Fo(e){for(var n=[],s=0;31>s;s++)n.push(e);return n}function _r(e,n,s){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Tt(n),e[n]=s}function Eg(e,n){var s=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<s;){var u=31-Tt(s),d=1<<u;n[u]=0,a[u]=-1,e[u]=-1,s&=~d}}function Vo(e,n){var s=e.entangledLanes|=n;for(e=e.entanglements;s;){var a=31-Tt(s),u=1<<a;u&n|e[a]&n&&(e[a]|=n),s&=~u}}var ge=0;function gc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var yc,Bo,xc,vc,jc,_o=!1,Ys=[],sn=null,on=null,an=null,$r=new Map,Or=new Map,ln=[],Rg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wc(e,n){switch(e){case"focusin":case"focusout":sn=null;break;case"dragenter":case"dragleave":on=null;break;case"mouseover":case"mouseout":an=null;break;case"pointerover":case"pointerout":$r.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Or.delete(n.pointerId)}}function Ur(e,n,s,a,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:s,eventSystemFlags:a,nativeEvent:d,targetContainers:[u]},n!==null&&(n=ns(n),n!==null&&Bo(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Ag(e,n,s,a,u){switch(n){case"focusin":return sn=Ur(sn,e,n,s,a,u),!0;case"dragenter":return on=Ur(on,e,n,s,a,u),!0;case"mouseover":return an=Ur(an,e,n,s,a,u),!0;case"pointerover":var d=u.pointerId;return $r.set(d,Ur($r.get(d)||null,e,n,s,a,u)),!0;case"gotpointercapture":return d=u.pointerId,Or.set(d,Ur(Or.get(d)||null,e,n,s,a,u)),!0}return!1}function kc(e){var n=En(e.target);if(n!==null){var s=Nn(n);if(s!==null){if(n=s.tag,n===13){if(n=ac(s),n!==null){e.blockedOn=n,jc(e.priority,function(){xc(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xs(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var s=Oo(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(s===null){s=e.nativeEvent;var a=new s.constructor(s.type,s);No=a,s.target.dispatchEvent(a),No=null}else return n=ns(s),n!==null&&Bo(n),e.blockedOn=s,!1;n.shift()}return!0}function bc(e,n,s){Xs(e)&&s.delete(n)}function Lg(){_o=!1,sn!==null&&Xs(sn)&&(sn=null),on!==null&&Xs(on)&&(on=null),an!==null&&Xs(an)&&(an=null),$r.forEach(bc),Or.forEach(bc)}function zr(e,n){e.blockedOn===n&&(e.blockedOn=null,_o||(_o=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Lg)))}function Wr(e){function n(u){return zr(u,e)}if(0<Ys.length){zr(Ys[0],e);for(var s=1;s<Ys.length;s++){var a=Ys[s];a.blockedOn===e&&(a.blockedOn=null)}}for(sn!==null&&zr(sn,e),on!==null&&zr(on,e),an!==null&&zr(an,e),$r.forEach(n),Or.forEach(n),s=0;s<ln.length;s++)a=ln[s],a.blockedOn===e&&(a.blockedOn=null);for(;0<ln.length&&(s=ln[0],s.blockedOn===null);)kc(s),s.blockedOn===null&&ln.shift()}var Jn=Q.ReactCurrentBatchConfig,Qs=!0;function Dg(e,n,s,a){var u=ge,d=Jn.transition;Jn.transition=null;try{ge=1,$o(e,n,s,a)}finally{ge=u,Jn.transition=d}}function Mg(e,n,s,a){var u=ge,d=Jn.transition;Jn.transition=null;try{ge=4,$o(e,n,s,a)}finally{ge=u,Jn.transition=d}}function $o(e,n,s,a){if(Qs){var u=Oo(e,n,s,a);if(u===null)sa(e,n,a,Js,s),wc(e,a);else if(Ag(u,e,n,s,a))a.stopPropagation();else if(wc(e,a),n&4&&-1<Rg.indexOf(e)){for(;u!==null;){var d=ns(u);if(d!==null&&yc(d),d=Oo(e,n,s,a),d===null&&sa(e,n,a,Js,s),d===u)break;u=d}u!==null&&a.stopPropagation()}else sa(e,n,a,null,s)}}var Js=null;function Oo(e,n,s,a){if(Js=null,e=Eo(a),e=En(e),e!==null)if(n=Nn(e),n===null)e=null;else if(s=n.tag,s===13){if(e=ac(n),e!==null)return e;e=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Js=e,null}function Sc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wg()){case Mo:return 1;case hc:return 4;case zs:case kg:return 16;case fc:return 536870912;default:return 16}default:return 16}}var un=null,Uo=null,qs=null;function Cc(){if(qs)return qs;var e,n=Uo,s=n.length,a,u="value"in un?un.value:un.textContent,d=u.length;for(e=0;e<s&&n[e]===u[e];e++);var g=s-e;for(a=1;a<=g&&n[s-a]===u[d-a];a++);return qs=u.slice(e,1<a?1-a:void 0)}function Zs(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ei(){return!0}function Pc(){return!1}function ht(e){function n(s,a,u,d,g){this._reactName=s,this._targetInst=u,this.type=a,this.nativeEvent=d,this.target=g,this.currentTarget=null;for(var j in e)e.hasOwnProperty(j)&&(s=e[j],this[j]=s?s(d):d[j]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ei:Pc,this.isPropagationStopped=Pc,this}return H(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=ei)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=ei)},persist:function(){},isPersistent:ei}),n}var qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zo=ht(qn),Hr=H({},qn,{view:0,detail:0}),Ig=ht(Hr),Wo,Ho,Kr,ti=H({},Hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Go,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kr&&(Kr&&e.type==="mousemove"?(Wo=e.screenX-Kr.screenX,Ho=e.screenY-Kr.screenY):Ho=Wo=0,Kr=e),Wo)},movementY:function(e){return"movementY"in e?e.movementY:Ho}}),Tc=ht(ti),Fg=H({},ti,{dataTransfer:0}),Vg=ht(Fg),Bg=H({},Hr,{relatedTarget:0}),Ko=ht(Bg),_g=H({},qn,{animationName:0,elapsedTime:0,pseudoElement:0}),$g=ht(_g),Og=H({},qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ug=ht(Og),zg=H({},qn,{data:0}),Nc=ht(zg),Wg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gg(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Kg[e])?!!n[e]:!1}function Go(){return Gg}var Yg=H({},Hr,{key:function(e){if(e.key){var n=Wg[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Zs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Go,charCode:function(e){return e.type==="keypress"?Zs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xg=ht(Yg),Qg=H({},ti,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ec=ht(Qg),Jg=H({},Hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Go}),qg=ht(Jg),Zg=H({},qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),e0=ht(Zg),t0=H({},ti,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),n0=ht(t0),r0=[9,13,27,32],Yo=f&&"CompositionEvent"in window,Gr=null;f&&"documentMode"in document&&(Gr=document.documentMode);var s0=f&&"TextEvent"in window&&!Gr,Rc=f&&(!Yo||Gr&&8<Gr&&11>=Gr),Ac=" ",Lc=!1;function Dc(e,n){switch(e){case"keyup":return r0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zn=!1;function i0(e,n){switch(e){case"compositionend":return Mc(n);case"keypress":return n.which!==32?null:(Lc=!0,Ac);case"textInput":return e=n.data,e===Ac&&Lc?null:e;default:return null}}function o0(e,n){if(Zn)return e==="compositionend"||!Yo&&Dc(e,n)?(e=Cc(),qs=Uo=un=null,Zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Rc&&n.locale!=="ko"?null:n.data;default:return null}}var a0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ic(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!a0[e.type]:n==="textarea"}function Fc(e,n,s,a){nc(a),n=oi(n,"onChange"),0<n.length&&(s=new zo("onChange","change",null,s,a),e.push({event:s,listeners:n}))}var Yr=null,Xr=null;function l0(e){ed(e,0)}function ni(e){var n=sr(e);if(Wu(n))return e}function u0(e,n){if(e==="change")return n}var Vc=!1;if(f){var Xo;if(f){var Qo="oninput"in document;if(!Qo){var Bc=document.createElement("div");Bc.setAttribute("oninput","return;"),Qo=typeof Bc.oninput=="function"}Xo=Qo}else Xo=!1;Vc=Xo&&(!document.documentMode||9<document.documentMode)}function _c(){Yr&&(Yr.detachEvent("onpropertychange",$c),Xr=Yr=null)}function $c(e){if(e.propertyName==="value"&&ni(Xr)){var n=[];Fc(n,Xr,e,Eo(e)),oc(l0,n)}}function c0(e,n,s){e==="focusin"?(_c(),Yr=n,Xr=s,Yr.attachEvent("onpropertychange",$c)):e==="focusout"&&_c()}function d0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ni(Xr)}function p0(e,n){if(e==="click")return ni(n)}function h0(e,n){if(e==="input"||e==="change")return ni(n)}function f0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Nt=typeof Object.is=="function"?Object.is:f0;function Qr(e,n){if(Nt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var s=Object.keys(e),a=Object.keys(n);if(s.length!==a.length)return!1;for(a=0;a<s.length;a++){var u=s[a];if(!m.call(n,u)||!Nt(e[u],n[u]))return!1}return!0}function Oc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Uc(e,n){var s=Oc(e);e=0;for(var a;s;){if(s.nodeType===3){if(a=e+s.textContent.length,e<=n&&a>=n)return{node:s,offset:n-e};e=a}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Oc(s)}}function zc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?zc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Wc(){for(var e=window,n=_s();n instanceof e.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)e=n.contentWindow;else break;n=_s(e.document)}return n}function Jo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function m0(e){var n=Wc(),s=e.focusedElem,a=e.selectionRange;if(n!==s&&s&&s.ownerDocument&&zc(s.ownerDocument.documentElement,s)){if(a!==null&&Jo(s)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in s)s.selectionStart=n,s.selectionEnd=Math.min(e,s.value.length);else if(e=(n=s.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var u=s.textContent.length,d=Math.min(a.start,u);a=a.end===void 0?d:Math.min(a.end,u),!e.extend&&d>a&&(u=a,a=d,d=u),u=Uc(s,d);var g=Uc(s,a);u&&g&&(e.rangeCount!==1||e.anchorNode!==u.node||e.anchorOffset!==u.offset||e.focusNode!==g.node||e.focusOffset!==g.offset)&&(n=n.createRange(),n.setStart(u.node,u.offset),e.removeAllRanges(),d>a?(e.addRange(n),e.extend(g.node,g.offset)):(n.setEnd(g.node,g.offset),e.addRange(n)))}}for(n=[],e=s;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<n.length;s++)e=n[s],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var g0=f&&"documentMode"in document&&11>=document.documentMode,er=null,qo=null,Jr=null,Zo=!1;function Hc(e,n,s){var a=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Zo||er==null||er!==_s(a)||(a=er,"selectionStart"in a&&Jo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Jr&&Qr(Jr,a)||(Jr=a,a=oi(qo,"onSelect"),0<a.length&&(n=new zo("onSelect","select",null,n,s),e.push({event:n,listeners:a}),n.target=er)))}function ri(e,n){var s={};return s[e.toLowerCase()]=n.toLowerCase(),s["Webkit"+e]="webkit"+n,s["Moz"+e]="moz"+n,s}var tr={animationend:ri("Animation","AnimationEnd"),animationiteration:ri("Animation","AnimationIteration"),animationstart:ri("Animation","AnimationStart"),transitionend:ri("Transition","TransitionEnd")},ea={},Kc={};f&&(Kc=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function si(e){if(ea[e])return ea[e];if(!tr[e])return e;var n=tr[e],s;for(s in n)if(n.hasOwnProperty(s)&&s in Kc)return ea[e]=n[s];return e}var Gc=si("animationend"),Yc=si("animationiteration"),Xc=si("animationstart"),Qc=si("transitionend"),Jc=new Map,qc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cn(e,n){Jc.set(e,n),h(n,[e])}for(var ta=0;ta<qc.length;ta++){var na=qc[ta],y0=na.toLowerCase(),x0=na[0].toUpperCase()+na.slice(1);cn(y0,"on"+x0)}cn(Gc,"onAnimationEnd"),cn(Yc,"onAnimationIteration"),cn(Xc,"onAnimationStart"),cn("dblclick","onDoubleClick"),cn("focusin","onFocus"),cn("focusout","onBlur"),cn(Qc,"onTransitionEnd"),p("onMouseEnter",["mouseout","mouseover"]),p("onMouseLeave",["mouseout","mouseover"]),p("onPointerEnter",["pointerout","pointerover"]),p("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),v0=new Set("cancel close invalid load scroll toggle".split(" ").concat(qr));function Zc(e,n,s){var a=e.type||"unknown-event";e.currentTarget=s,yg(a,n,void 0,e),e.currentTarget=null}function ed(e,n){n=(n&4)!==0;for(var s=0;s<e.length;s++){var a=e[s],u=a.event;a=a.listeners;e:{var d=void 0;if(n)for(var g=a.length-1;0<=g;g--){var j=a[g],k=j.instance,E=j.currentTarget;if(j=j.listener,k!==d&&u.isPropagationStopped())break e;Zc(u,j,E),d=k}else for(g=0;g<a.length;g++){if(j=a[g],k=j.instance,E=j.currentTarget,j=j.listener,k!==d&&u.isPropagationStopped())break e;Zc(u,j,E),d=k}}}if(Us)throw e=Do,Us=!1,Do=null,e}function je(e,n){var s=n[ca];s===void 0&&(s=n[ca]=new Set);var a=e+"__bubble";s.has(a)||(td(n,e,2,!1),s.add(a))}function ra(e,n,s){var a=0;n&&(a|=4),td(s,e,a,n)}var ii="_reactListening"+Math.random().toString(36).slice(2);function Zr(e){if(!e[ii]){e[ii]=!0,l.forEach(function(s){s!=="selectionchange"&&(v0.has(s)||ra(s,!1,e),ra(s,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ii]||(n[ii]=!0,ra("selectionchange",!1,n))}}function td(e,n,s,a){switch(Sc(n)){case 1:var u=Dg;break;case 4:u=Mg;break;default:u=$o}s=u.bind(null,n,s,e),u=void 0,!Lo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),a?u!==void 0?e.addEventListener(n,s,{capture:!0,passive:u}):e.addEventListener(n,s,!0):u!==void 0?e.addEventListener(n,s,{passive:u}):e.addEventListener(n,s,!1)}function sa(e,n,s,a,u){var d=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var g=a.tag;if(g===3||g===4){var j=a.stateNode.containerInfo;if(j===u||j.nodeType===8&&j.parentNode===u)break;if(g===4)for(g=a.return;g!==null;){var k=g.tag;if((k===3||k===4)&&(k=g.stateNode.containerInfo,k===u||k.nodeType===8&&k.parentNode===u))return;g=g.return}for(;j!==null;){if(g=En(j),g===null)return;if(k=g.tag,k===5||k===6){a=d=g;continue e}j=j.parentNode}}a=a.return}oc(function(){var E=d,_=Eo(s),O=[];e:{var F=Jc.get(e);if(F!==void 0){var K=zo,Y=e;switch(e){case"keypress":if(Zs(s)===0)break e;case"keydown":case"keyup":K=Xg;break;case"focusin":Y="focus",K=Ko;break;case"focusout":Y="blur",K=Ko;break;case"beforeblur":case"afterblur":K=Ko;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=Tc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=Vg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=qg;break;case Gc:case Yc:case Xc:K=$g;break;case Qc:K=e0;break;case"scroll":K=Ig;break;case"wheel":K=n0;break;case"copy":case"cut":case"paste":K=Ug;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=Ec}var X=(n&4)!==0,Le=!X&&e==="scroll",P=X?F!==null?F+"Capture":null:F;X=[];for(var b=E,T;b!==null;){T=b;var U=T.stateNode;if(T.tag===5&&U!==null&&(T=U,P!==null&&(U=Ir(b,P),U!=null&&X.push(es(b,U,T)))),Le)break;b=b.return}0<X.length&&(F=new K(F,Y,null,s,_),O.push({event:F,listeners:X}))}}if((n&7)===0){e:{if(F=e==="mouseover"||e==="pointerover",K=e==="mouseout"||e==="pointerout",F&&s!==No&&(Y=s.relatedTarget||s.fromElement)&&(En(Y)||Y[Wt]))break e;if((K||F)&&(F=_.window===_?_:(F=_.ownerDocument)?F.defaultView||F.parentWindow:window,K?(Y=s.relatedTarget||s.toElement,K=E,Y=Y?En(Y):null,Y!==null&&(Le=Nn(Y),Y!==Le||Y.tag!==5&&Y.tag!==6)&&(Y=null)):(K=null,Y=E),K!==Y)){if(X=Tc,U="onMouseLeave",P="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(X=Ec,U="onPointerLeave",P="onPointerEnter",b="pointer"),Le=K==null?F:sr(K),T=Y==null?F:sr(Y),F=new X(U,b+"leave",K,s,_),F.target=Le,F.relatedTarget=T,U=null,En(_)===E&&(X=new X(P,b+"enter",Y,s,_),X.target=T,X.relatedTarget=Le,U=X),Le=U,K&&Y)t:{for(X=K,P=Y,b=0,T=X;T;T=nr(T))b++;for(T=0,U=P;U;U=nr(U))T++;for(;0<b-T;)X=nr(X),b--;for(;0<T-b;)P=nr(P),T--;for(;b--;){if(X===P||P!==null&&X===P.alternate)break t;X=nr(X),P=nr(P)}X=null}else X=null;K!==null&&nd(O,F,K,X,!1),Y!==null&&Le!==null&&nd(O,Le,Y,X,!0)}}e:{if(F=E?sr(E):window,K=F.nodeName&&F.nodeName.toLowerCase(),K==="select"||K==="input"&&F.type==="file")var J=u0;else if(Ic(F))if(Vc)J=h0;else{J=d0;var ee=c0}else(K=F.nodeName)&&K.toLowerCase()==="input"&&(F.type==="checkbox"||F.type==="radio")&&(J=p0);if(J&&(J=J(e,E))){Fc(O,J,s,_);break e}ee&&ee(e,F,E),e==="focusout"&&(ee=F._wrapperState)&&ee.controlled&&F.type==="number"&&bo(F,"number",F.value)}switch(ee=E?sr(E):window,e){case"focusin":(Ic(ee)||ee.contentEditable==="true")&&(er=ee,qo=E,Jr=null);break;case"focusout":Jr=qo=er=null;break;case"mousedown":Zo=!0;break;case"contextmenu":case"mouseup":case"dragend":Zo=!1,Hc(O,s,_);break;case"selectionchange":if(g0)break;case"keydown":case"keyup":Hc(O,s,_)}var te;if(Yo)e:{switch(e){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else Zn?Dc(e,s)&&(se="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(se="onCompositionStart");se&&(Rc&&s.locale!=="ko"&&(Zn||se!=="onCompositionStart"?se==="onCompositionEnd"&&Zn&&(te=Cc()):(un=_,Uo="value"in un?un.value:un.textContent,Zn=!0)),ee=oi(E,se),0<ee.length&&(se=new Nc(se,e,null,s,_),O.push({event:se,listeners:ee}),te?se.data=te:(te=Mc(s),te!==null&&(se.data=te)))),(te=s0?i0(e,s):o0(e,s))&&(E=oi(E,"onBeforeInput"),0<E.length&&(_=new Nc("onBeforeInput","beforeinput",null,s,_),O.push({event:_,listeners:E}),_.data=te))}ed(O,n)})}function es(e,n,s){return{instance:e,listener:n,currentTarget:s}}function oi(e,n){for(var s=n+"Capture",a=[];e!==null;){var u=e,d=u.stateNode;u.tag===5&&d!==null&&(u=d,d=Ir(e,s),d!=null&&a.unshift(es(e,d,u)),d=Ir(e,n),d!=null&&a.push(es(e,d,u))),e=e.return}return a}function nr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function nd(e,n,s,a,u){for(var d=n._reactName,g=[];s!==null&&s!==a;){var j=s,k=j.alternate,E=j.stateNode;if(k!==null&&k===a)break;j.tag===5&&E!==null&&(j=E,u?(k=Ir(s,d),k!=null&&g.unshift(es(s,k,j))):u||(k=Ir(s,d),k!=null&&g.push(es(s,k,j)))),s=s.return}g.length!==0&&e.push({event:n,listeners:g})}var j0=/\r\n?/g,w0=/\u0000|\uFFFD/g;function rd(e){return(typeof e=="string"?e:""+e).replace(j0,`
`).replace(w0,"")}function ai(e,n,s){if(n=rd(n),rd(e)!==n&&s)throw Error(o(425))}function li(){}var ia=null,oa=null;function aa(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var la=typeof setTimeout=="function"?setTimeout:void 0,k0=typeof clearTimeout=="function"?clearTimeout:void 0,sd=typeof Promise=="function"?Promise:void 0,b0=typeof queueMicrotask=="function"?queueMicrotask:typeof sd<"u"?function(e){return sd.resolve(null).then(e).catch(S0)}:la;function S0(e){setTimeout(function(){throw e})}function ua(e,n){var s=n,a=0;do{var u=s.nextSibling;if(e.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"){if(a===0){e.removeChild(u),Wr(n);return}a--}else s!=="$"&&s!=="$?"&&s!=="$!"||a++;s=u}while(s);Wr(n)}function dn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function id(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(n===0)return e;n--}else s==="/$"&&n++}e=e.previousSibling}return null}var rr=Math.random().toString(36).slice(2),Bt="__reactFiber$"+rr,ts="__reactProps$"+rr,Wt="__reactContainer$"+rr,ca="__reactEvents$"+rr,C0="__reactListeners$"+rr,P0="__reactHandles$"+rr;function En(e){var n=e[Bt];if(n)return n;for(var s=e.parentNode;s;){if(n=s[Wt]||s[Bt]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(e=id(e);e!==null;){if(s=e[Bt])return s;e=id(e)}return n}e=s,s=e.parentNode}return null}function ns(e){return e=e[Bt]||e[Wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function sr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function ui(e){return e[ts]||null}var da=[],ir=-1;function pn(e){return{current:e}}function we(e){0>ir||(e.current=da[ir],da[ir]=null,ir--)}function ve(e,n){ir++,da[ir]=e.current,e.current=n}var hn={},We=pn(hn),rt=pn(!1),Rn=hn;function or(e,n){var s=e.type.contextTypes;if(!s)return hn;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var u={},d;for(d in s)u[d]=n[d];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=u),u}function st(e){return e=e.childContextTypes,e!=null}function ci(){we(rt),we(We)}function od(e,n,s){if(We.current!==hn)throw Error(o(168));ve(We,n),ve(rt,s)}function ad(e,n,s){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return s;a=a.getChildContext();for(var u in a)if(!(u in n))throw Error(o(108,xe(e)||"Unknown",u));return H({},s,a)}function di(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||hn,Rn=We.current,ve(We,e),ve(rt,rt.current),!0}function ld(e,n,s){var a=e.stateNode;if(!a)throw Error(o(169));s?(e=ad(e,n,Rn),a.__reactInternalMemoizedMergedChildContext=e,we(rt),we(We),ve(We,e)):we(rt),ve(rt,s)}var Ht=null,pi=!1,pa=!1;function ud(e){Ht===null?Ht=[e]:Ht.push(e)}function T0(e){pi=!0,ud(e)}function fn(){if(!pa&&Ht!==null){pa=!0;var e=0,n=ge;try{var s=Ht;for(ge=1;e<s.length;e++){var a=s[e];do a=a(!0);while(a!==null)}Ht=null,pi=!1}catch(u){throw Ht!==null&&(Ht=Ht.slice(e+1)),dc(Mo,fn),u}finally{ge=n,pa=!1}}return null}var ar=[],lr=0,hi=null,fi=0,yt=[],xt=0,An=null,Kt=1,Gt="";function Ln(e,n){ar[lr++]=fi,ar[lr++]=hi,hi=e,fi=n}function cd(e,n,s){yt[xt++]=Kt,yt[xt++]=Gt,yt[xt++]=An,An=e;var a=Kt;e=Gt;var u=32-Tt(a)-1;a&=~(1<<u),s+=1;var d=32-Tt(n)+u;if(30<d){var g=u-u%5;d=(a&(1<<g)-1).toString(32),a>>=g,u-=g,Kt=1<<32-Tt(n)+u|s<<u|a,Gt=d+e}else Kt=1<<d|s<<u|a,Gt=e}function ha(e){e.return!==null&&(Ln(e,1),cd(e,1,0))}function fa(e){for(;e===hi;)hi=ar[--lr],ar[lr]=null,fi=ar[--lr],ar[lr]=null;for(;e===An;)An=yt[--xt],yt[xt]=null,Gt=yt[--xt],yt[xt]=null,Kt=yt[--xt],yt[xt]=null}var ft=null,mt=null,be=!1,Et=null;function dd(e,n){var s=kt(5,null,null,0);s.elementType="DELETED",s.stateNode=n,s.return=e,n=e.deletions,n===null?(e.deletions=[s],e.flags|=16):n.push(s)}function pd(e,n){switch(e.tag){case 5:var s=e.type;return n=n.nodeType!==1||s.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ft=e,mt=dn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ft=e,mt=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(s=An!==null?{id:Kt,overflow:Gt}:null,e.memoizedState={dehydrated:n,treeContext:s,retryLane:1073741824},s=kt(18,null,null,0),s.stateNode=n,s.return=e,e.child=s,ft=e,mt=null,!0):!1;default:return!1}}function ma(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ga(e){if(be){var n=mt;if(n){var s=n;if(!pd(e,n)){if(ma(e))throw Error(o(418));n=dn(s.nextSibling);var a=ft;n&&pd(e,n)?dd(a,s):(e.flags=e.flags&-4097|2,be=!1,ft=e)}}else{if(ma(e))throw Error(o(418));e.flags=e.flags&-4097|2,be=!1,ft=e}}}function hd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ft=e}function mi(e){if(e!==ft)return!1;if(!be)return hd(e),be=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!aa(e.type,e.memoizedProps)),n&&(n=mt)){if(ma(e))throw fd(),Error(o(418));for(;n;)dd(e,n),n=dn(n.nextSibling)}if(hd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"){if(n===0){mt=dn(e.nextSibling);break e}n--}else s!=="$"&&s!=="$!"&&s!=="$?"||n++}e=e.nextSibling}mt=null}}else mt=ft?dn(e.stateNode.nextSibling):null;return!0}function fd(){for(var e=mt;e;)e=dn(e.nextSibling)}function ur(){mt=ft=null,be=!1}function ya(e){Et===null?Et=[e]:Et.push(e)}var N0=Q.ReactCurrentBatchConfig;function rs(e,n,s){if(e=s.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(o(309));var a=s.stateNode}if(!a)throw Error(o(147,e));var u=a,d=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===d?n.ref:(n=function(g){var j=u.refs;g===null?delete j[d]:j[d]=g},n._stringRef=d,n)}if(typeof e!="string")throw Error(o(284));if(!s._owner)throw Error(o(290,e))}return e}function gi(e,n){throw e=Object.prototype.toString.call(n),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function md(e){var n=e._init;return n(e._payload)}function gd(e){function n(P,b){if(e){var T=P.deletions;T===null?(P.deletions=[b],P.flags|=16):T.push(b)}}function s(P,b){if(!e)return null;for(;b!==null;)n(P,b),b=b.sibling;return null}function a(P,b){for(P=new Map;b!==null;)b.key!==null?P.set(b.key,b):P.set(b.index,b),b=b.sibling;return P}function u(P,b){return P=kn(P,b),P.index=0,P.sibling=null,P}function d(P,b,T){return P.index=T,e?(T=P.alternate,T!==null?(T=T.index,T<b?(P.flags|=2,b):T):(P.flags|=2,b)):(P.flags|=1048576,b)}function g(P){return e&&P.alternate===null&&(P.flags|=2),P}function j(P,b,T,U){return b===null||b.tag!==6?(b=ll(T,P.mode,U),b.return=P,b):(b=u(b,T),b.return=P,b)}function k(P,b,T,U){var J=T.type;return J===ie?_(P,b,T.props.children,U,T.key):b!==null&&(b.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Je&&md(J)===b.type)?(U=u(b,T.props),U.ref=rs(P,b,T),U.return=P,U):(U=$i(T.type,T.key,T.props,null,P.mode,U),U.ref=rs(P,b,T),U.return=P,U)}function E(P,b,T,U){return b===null||b.tag!==4||b.stateNode.containerInfo!==T.containerInfo||b.stateNode.implementation!==T.implementation?(b=ul(T,P.mode,U),b.return=P,b):(b=u(b,T.children||[]),b.return=P,b)}function _(P,b,T,U,J){return b===null||b.tag!==7?(b=$n(T,P.mode,U,J),b.return=P,b):(b=u(b,T),b.return=P,b)}function O(P,b,T){if(typeof b=="string"&&b!==""||typeof b=="number")return b=ll(""+b,P.mode,T),b.return=P,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case W:return T=$i(b.type,b.key,b.props,null,P.mode,T),T.ref=rs(P,null,b),T.return=P,T;case ne:return b=ul(b,P.mode,T),b.return=P,b;case Je:var U=b._init;return O(P,U(b._payload),T)}if(Lr(b)||q(b))return b=$n(b,P.mode,T,null),b.return=P,b;gi(P,b)}return null}function F(P,b,T,U){var J=b!==null?b.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return J!==null?null:j(P,b,""+T,U);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case W:return T.key===J?k(P,b,T,U):null;case ne:return T.key===J?E(P,b,T,U):null;case Je:return J=T._init,F(P,b,J(T._payload),U)}if(Lr(T)||q(T))return J!==null?null:_(P,b,T,U,null);gi(P,T)}return null}function K(P,b,T,U,J){if(typeof U=="string"&&U!==""||typeof U=="number")return P=P.get(T)||null,j(b,P,""+U,J);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case W:return P=P.get(U.key===null?T:U.key)||null,k(b,P,U,J);case ne:return P=P.get(U.key===null?T:U.key)||null,E(b,P,U,J);case Je:var ee=U._init;return K(P,b,T,ee(U._payload),J)}if(Lr(U)||q(U))return P=P.get(T)||null,_(b,P,U,J,null);gi(b,U)}return null}function Y(P,b,T,U){for(var J=null,ee=null,te=b,se=b=0,$e=null;te!==null&&se<T.length;se++){te.index>se?($e=te,te=null):$e=te.sibling;var he=F(P,te,T[se],U);if(he===null){te===null&&(te=$e);break}e&&te&&he.alternate===null&&n(P,te),b=d(he,b,se),ee===null?J=he:ee.sibling=he,ee=he,te=$e}if(se===T.length)return s(P,te),be&&Ln(P,se),J;if(te===null){for(;se<T.length;se++)te=O(P,T[se],U),te!==null&&(b=d(te,b,se),ee===null?J=te:ee.sibling=te,ee=te);return be&&Ln(P,se),J}for(te=a(P,te);se<T.length;se++)$e=K(te,P,se,T[se],U),$e!==null&&(e&&$e.alternate!==null&&te.delete($e.key===null?se:$e.key),b=d($e,b,se),ee===null?J=$e:ee.sibling=$e,ee=$e);return e&&te.forEach(function(bn){return n(P,bn)}),be&&Ln(P,se),J}function X(P,b,T,U){var J=q(T);if(typeof J!="function")throw Error(o(150));if(T=J.call(T),T==null)throw Error(o(151));for(var ee=J=null,te=b,se=b=0,$e=null,he=T.next();te!==null&&!he.done;se++,he=T.next()){te.index>se?($e=te,te=null):$e=te.sibling;var bn=F(P,te,he.value,U);if(bn===null){te===null&&(te=$e);break}e&&te&&bn.alternate===null&&n(P,te),b=d(bn,b,se),ee===null?J=bn:ee.sibling=bn,ee=bn,te=$e}if(he.done)return s(P,te),be&&Ln(P,se),J;if(te===null){for(;!he.done;se++,he=T.next())he=O(P,he.value,U),he!==null&&(b=d(he,b,se),ee===null?J=he:ee.sibling=he,ee=he);return be&&Ln(P,se),J}for(te=a(P,te);!he.done;se++,he=T.next())he=K(te,P,se,he.value,U),he!==null&&(e&&he.alternate!==null&&te.delete(he.key===null?se:he.key),b=d(he,b,se),ee===null?J=he:ee.sibling=he,ee=he);return e&&te.forEach(function(ay){return n(P,ay)}),be&&Ln(P,se),J}function Le(P,b,T,U){if(typeof T=="object"&&T!==null&&T.type===ie&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case W:e:{for(var J=T.key,ee=b;ee!==null;){if(ee.key===J){if(J=T.type,J===ie){if(ee.tag===7){s(P,ee.sibling),b=u(ee,T.props.children),b.return=P,P=b;break e}}else if(ee.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Je&&md(J)===ee.type){s(P,ee.sibling),b=u(ee,T.props),b.ref=rs(P,ee,T),b.return=P,P=b;break e}s(P,ee);break}else n(P,ee);ee=ee.sibling}T.type===ie?(b=$n(T.props.children,P.mode,U,T.key),b.return=P,P=b):(U=$i(T.type,T.key,T.props,null,P.mode,U),U.ref=rs(P,b,T),U.return=P,P=U)}return g(P);case ne:e:{for(ee=T.key;b!==null;){if(b.key===ee)if(b.tag===4&&b.stateNode.containerInfo===T.containerInfo&&b.stateNode.implementation===T.implementation){s(P,b.sibling),b=u(b,T.children||[]),b.return=P,P=b;break e}else{s(P,b);break}else n(P,b);b=b.sibling}b=ul(T,P.mode,U),b.return=P,P=b}return g(P);case Je:return ee=T._init,Le(P,b,ee(T._payload),U)}if(Lr(T))return Y(P,b,T,U);if(q(T))return X(P,b,T,U);gi(P,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,b!==null&&b.tag===6?(s(P,b.sibling),b=u(b,T),b.return=P,P=b):(s(P,b),b=ll(T,P.mode,U),b.return=P,P=b),g(P)):s(P,b)}return Le}var cr=gd(!0),yd=gd(!1),yi=pn(null),xi=null,dr=null,xa=null;function va(){xa=dr=xi=null}function ja(e){var n=yi.current;we(yi),e._currentValue=n}function wa(e,n,s){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===s)break;e=e.return}}function pr(e,n){xi=e,xa=dr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(it=!0),e.firstContext=null)}function vt(e){var n=e._currentValue;if(xa!==e)if(e={context:e,memoizedValue:n,next:null},dr===null){if(xi===null)throw Error(o(308));dr=e,xi.dependencies={lanes:0,firstContext:e}}else dr=dr.next=e;return n}var Dn=null;function ka(e){Dn===null?Dn=[e]:Dn.push(e)}function xd(e,n,s,a){var u=n.interleaved;return u===null?(s.next=s,ka(n)):(s.next=u.next,u.next=s),n.interleaved=s,Yt(e,a)}function Yt(e,n){e.lanes|=n;var s=e.alternate;for(s!==null&&(s.lanes|=n),s=e,e=e.return;e!==null;)e.childLanes|=n,s=e.alternate,s!==null&&(s.childLanes|=n),s=e,e=e.return;return s.tag===3?s.stateNode:null}var mn=!1;function ba(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xt(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function gn(e,n,s){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ce&2)!==0){var u=a.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),a.pending=n,Yt(e,s)}return u=a.interleaved,u===null?(n.next=n,ka(a)):(n.next=u.next,u.next=n),a.interleaved=n,Yt(e,s)}function vi(e,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,s|=a,n.lanes=s,Vo(e,s)}}function jd(e,n){var s=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,s===a)){var u=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var g={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};d===null?u=d=g:d=d.next=g,s=s.next}while(s!==null);d===null?u=d=n:d=d.next=n}else u=d=n;s={baseState:a.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:a.shared,effects:a.effects},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=n:e.next=n,s.lastBaseUpdate=n}function ji(e,n,s,a){var u=e.updateQueue;mn=!1;var d=u.firstBaseUpdate,g=u.lastBaseUpdate,j=u.shared.pending;if(j!==null){u.shared.pending=null;var k=j,E=k.next;k.next=null,g===null?d=E:g.next=E,g=k;var _=e.alternate;_!==null&&(_=_.updateQueue,j=_.lastBaseUpdate,j!==g&&(j===null?_.firstBaseUpdate=E:j.next=E,_.lastBaseUpdate=k))}if(d!==null){var O=u.baseState;g=0,_=E=k=null,j=d;do{var F=j.lane,K=j.eventTime;if((a&F)===F){_!==null&&(_=_.next={eventTime:K,lane:0,tag:j.tag,payload:j.payload,callback:j.callback,next:null});e:{var Y=e,X=j;switch(F=n,K=s,X.tag){case 1:if(Y=X.payload,typeof Y=="function"){O=Y.call(K,O,F);break e}O=Y;break e;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=X.payload,F=typeof Y=="function"?Y.call(K,O,F):Y,F==null)break e;O=H({},O,F);break e;case 2:mn=!0}}j.callback!==null&&j.lane!==0&&(e.flags|=64,F=u.effects,F===null?u.effects=[j]:F.push(j))}else K={eventTime:K,lane:F,tag:j.tag,payload:j.payload,callback:j.callback,next:null},_===null?(E=_=K,k=O):_=_.next=K,g|=F;if(j=j.next,j===null){if(j=u.shared.pending,j===null)break;F=j,j=F.next,F.next=null,u.lastBaseUpdate=F,u.shared.pending=null}}while(!0);if(_===null&&(k=O),u.baseState=k,u.firstBaseUpdate=E,u.lastBaseUpdate=_,n=u.shared.interleaved,n!==null){u=n;do g|=u.lane,u=u.next;while(u!==n)}else d===null&&(u.shared.lanes=0);Fn|=g,e.lanes=g,e.memoizedState=O}}function wd(e,n,s){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],u=a.callback;if(u!==null){if(a.callback=null,a=s,typeof u!="function")throw Error(o(191,u));u.call(a)}}}var ss={},_t=pn(ss),is=pn(ss),os=pn(ss);function Mn(e){if(e===ss)throw Error(o(174));return e}function Sa(e,n){switch(ve(os,n),ve(is,e),ve(_t,ss),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Co(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Co(n,e)}we(_t),ve(_t,n)}function hr(){we(_t),we(is),we(os)}function kd(e){Mn(os.current);var n=Mn(_t.current),s=Co(n,e.type);n!==s&&(ve(is,e),ve(_t,s))}function Ca(e){is.current===e&&(we(_t),we(is))}var Ce=pn(0);function wi(e){for(var n=e;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Pa=[];function Ta(){for(var e=0;e<Pa.length;e++)Pa[e]._workInProgressVersionPrimary=null;Pa.length=0}var ki=Q.ReactCurrentDispatcher,Na=Q.ReactCurrentBatchConfig,In=0,Pe=null,Ie=null,Be=null,bi=!1,as=!1,ls=0,E0=0;function He(){throw Error(o(321))}function Ea(e,n){if(n===null)return!1;for(var s=0;s<n.length&&s<e.length;s++)if(!Nt(e[s],n[s]))return!1;return!0}function Ra(e,n,s,a,u,d){if(In=d,Pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ki.current=e===null||e.memoizedState===null?D0:M0,e=s(a,u),as){d=0;do{if(as=!1,ls=0,25<=d)throw Error(o(301));d+=1,Be=Ie=null,n.updateQueue=null,ki.current=I0,e=s(a,u)}while(as)}if(ki.current=Pi,n=Ie!==null&&Ie.next!==null,In=0,Be=Ie=Pe=null,bi=!1,n)throw Error(o(300));return e}function Aa(){var e=ls!==0;return ls=0,e}function $t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Pe.memoizedState=Be=e:Be=Be.next=e,Be}function jt(){if(Ie===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var n=Be===null?Pe.memoizedState:Be.next;if(n!==null)Be=n,Ie=e;else{if(e===null)throw Error(o(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},Be===null?Pe.memoizedState=Be=e:Be=Be.next=e}return Be}function us(e,n){return typeof n=="function"?n(e):n}function La(e){var n=jt(),s=n.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=e;var a=Ie,u=a.baseQueue,d=s.pending;if(d!==null){if(u!==null){var g=u.next;u.next=d.next,d.next=g}a.baseQueue=u=d,s.pending=null}if(u!==null){d=u.next,a=a.baseState;var j=g=null,k=null,E=d;do{var _=E.lane;if((In&_)===_)k!==null&&(k=k.next={lane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),a=E.hasEagerState?E.eagerState:e(a,E.action);else{var O={lane:_,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null};k===null?(j=k=O,g=a):k=k.next=O,Pe.lanes|=_,Fn|=_}E=E.next}while(E!==null&&E!==d);k===null?g=a:k.next=j,Nt(a,n.memoizedState)||(it=!0),n.memoizedState=a,n.baseState=g,n.baseQueue=k,s.lastRenderedState=a}if(e=s.interleaved,e!==null){u=e;do d=u.lane,Pe.lanes|=d,Fn|=d,u=u.next;while(u!==e)}else u===null&&(s.lanes=0);return[n.memoizedState,s.dispatch]}function Da(e){var n=jt(),s=n.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=e;var a=s.dispatch,u=s.pending,d=n.memoizedState;if(u!==null){s.pending=null;var g=u=u.next;do d=e(d,g.action),g=g.next;while(g!==u);Nt(d,n.memoizedState)||(it=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),s.lastRenderedState=d}return[d,a]}function bd(){}function Sd(e,n){var s=Pe,a=jt(),u=n(),d=!Nt(a.memoizedState,u);if(d&&(a.memoizedState=u,it=!0),a=a.queue,Ma(Td.bind(null,s,a,e),[e]),a.getSnapshot!==n||d||Be!==null&&Be.memoizedState.tag&1){if(s.flags|=2048,cs(9,Pd.bind(null,s,a,u,n),void 0,null),_e===null)throw Error(o(349));(In&30)!==0||Cd(s,n,u)}return u}function Cd(e,n,s){e.flags|=16384,e={getSnapshot:n,value:s},n=Pe.updateQueue,n===null?(n={lastEffect:null,stores:null},Pe.updateQueue=n,n.stores=[e]):(s=n.stores,s===null?n.stores=[e]:s.push(e))}function Pd(e,n,s,a){n.value=s,n.getSnapshot=a,Nd(n)&&Ed(e)}function Td(e,n,s){return s(function(){Nd(n)&&Ed(e)})}function Nd(e){var n=e.getSnapshot;e=e.value;try{var s=n();return!Nt(e,s)}catch{return!0}}function Ed(e){var n=Yt(e,1);n!==null&&Dt(n,e,1,-1)}function Rd(e){var n=$t();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:us,lastRenderedState:e},n.queue=e,e=e.dispatch=L0.bind(null,Pe,e),[n.memoizedState,e]}function cs(e,n,s,a){return e={tag:e,create:n,destroy:s,deps:a,next:null},n=Pe.updateQueue,n===null?(n={lastEffect:null,stores:null},Pe.updateQueue=n,n.lastEffect=e.next=e):(s=n.lastEffect,s===null?n.lastEffect=e.next=e:(a=s.next,s.next=e,e.next=a,n.lastEffect=e)),e}function Ad(){return jt().memoizedState}function Si(e,n,s,a){var u=$t();Pe.flags|=e,u.memoizedState=cs(1|n,s,void 0,a===void 0?null:a)}function Ci(e,n,s,a){var u=jt();a=a===void 0?null:a;var d=void 0;if(Ie!==null){var g=Ie.memoizedState;if(d=g.destroy,a!==null&&Ea(a,g.deps)){u.memoizedState=cs(n,s,d,a);return}}Pe.flags|=e,u.memoizedState=cs(1|n,s,d,a)}function Ld(e,n){return Si(8390656,8,e,n)}function Ma(e,n){return Ci(2048,8,e,n)}function Dd(e,n){return Ci(4,2,e,n)}function Md(e,n){return Ci(4,4,e,n)}function Id(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Fd(e,n,s){return s=s!=null?s.concat([e]):null,Ci(4,4,Id.bind(null,n,e),s)}function Ia(){}function Vd(e,n){var s=jt();n=n===void 0?null:n;var a=s.memoizedState;return a!==null&&n!==null&&Ea(n,a[1])?a[0]:(s.memoizedState=[e,n],e)}function Bd(e,n){var s=jt();n=n===void 0?null:n;var a=s.memoizedState;return a!==null&&n!==null&&Ea(n,a[1])?a[0]:(e=e(),s.memoizedState=[e,n],e)}function _d(e,n,s){return(In&21)===0?(e.baseState&&(e.baseState=!1,it=!0),e.memoizedState=s):(Nt(s,n)||(s=mc(),Pe.lanes|=s,Fn|=s,e.baseState=!0),n)}function R0(e,n){var s=ge;ge=s!==0&&4>s?s:4,e(!0);var a=Na.transition;Na.transition={};try{e(!1),n()}finally{ge=s,Na.transition=a}}function $d(){return jt().memoizedState}function A0(e,n,s){var a=jn(e);if(s={lane:a,action:s,hasEagerState:!1,eagerState:null,next:null},Od(e))Ud(n,s);else if(s=xd(e,n,s,a),s!==null){var u=Ze();Dt(s,e,a,u),zd(s,n,a)}}function L0(e,n,s){var a=jn(e),u={lane:a,action:s,hasEagerState:!1,eagerState:null,next:null};if(Od(e))Ud(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var g=n.lastRenderedState,j=d(g,s);if(u.hasEagerState=!0,u.eagerState=j,Nt(j,g)){var k=n.interleaved;k===null?(u.next=u,ka(n)):(u.next=k.next,k.next=u),n.interleaved=u;return}}catch{}finally{}s=xd(e,n,u,a),s!==null&&(u=Ze(),Dt(s,e,a,u),zd(s,n,a))}}function Od(e){var n=e.alternate;return e===Pe||n!==null&&n===Pe}function Ud(e,n){as=bi=!0;var s=e.pending;s===null?n.next=n:(n.next=s.next,s.next=n),e.pending=n}function zd(e,n,s){if((s&4194240)!==0){var a=n.lanes;a&=e.pendingLanes,s|=a,n.lanes=s,Vo(e,s)}}var Pi={readContext:vt,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},D0={readContext:vt,useCallback:function(e,n){return $t().memoizedState=[e,n===void 0?null:n],e},useContext:vt,useEffect:Ld,useImperativeHandle:function(e,n,s){return s=s!=null?s.concat([e]):null,Si(4194308,4,Id.bind(null,n,e),s)},useLayoutEffect:function(e,n){return Si(4194308,4,e,n)},useInsertionEffect:function(e,n){return Si(4,2,e,n)},useMemo:function(e,n){var s=$t();return n=n===void 0?null:n,e=e(),s.memoizedState=[e,n],e},useReducer:function(e,n,s){var a=$t();return n=s!==void 0?s(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=A0.bind(null,Pe,e),[a.memoizedState,e]},useRef:function(e){var n=$t();return e={current:e},n.memoizedState=e},useState:Rd,useDebugValue:Ia,useDeferredValue:function(e){return $t().memoizedState=e},useTransition:function(){var e=Rd(!1),n=e[0];return e=R0.bind(null,e[1]),$t().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,s){var a=Pe,u=$t();if(be){if(s===void 0)throw Error(o(407));s=s()}else{if(s=n(),_e===null)throw Error(o(349));(In&30)!==0||Cd(a,n,s)}u.memoizedState=s;var d={value:s,getSnapshot:n};return u.queue=d,Ld(Td.bind(null,a,d,e),[e]),a.flags|=2048,cs(9,Pd.bind(null,a,d,s,n),void 0,null),s},useId:function(){var e=$t(),n=_e.identifierPrefix;if(be){var s=Gt,a=Kt;s=(a&~(1<<32-Tt(a)-1)).toString(32)+s,n=":"+n+"R"+s,s=ls++,0<s&&(n+="H"+s.toString(32)),n+=":"}else s=E0++,n=":"+n+"r"+s.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},M0={readContext:vt,useCallback:Vd,useContext:vt,useEffect:Ma,useImperativeHandle:Fd,useInsertionEffect:Dd,useLayoutEffect:Md,useMemo:Bd,useReducer:La,useRef:Ad,useState:function(){return La(us)},useDebugValue:Ia,useDeferredValue:function(e){var n=jt();return _d(n,Ie.memoizedState,e)},useTransition:function(){var e=La(us)[0],n=jt().memoizedState;return[e,n]},useMutableSource:bd,useSyncExternalStore:Sd,useId:$d,unstable_isNewReconciler:!1},I0={readContext:vt,useCallback:Vd,useContext:vt,useEffect:Ma,useImperativeHandle:Fd,useInsertionEffect:Dd,useLayoutEffect:Md,useMemo:Bd,useReducer:Da,useRef:Ad,useState:function(){return Da(us)},useDebugValue:Ia,useDeferredValue:function(e){var n=jt();return Ie===null?n.memoizedState=e:_d(n,Ie.memoizedState,e)},useTransition:function(){var e=Da(us)[0],n=jt().memoizedState;return[e,n]},useMutableSource:bd,useSyncExternalStore:Sd,useId:$d,unstable_isNewReconciler:!1};function Rt(e,n){if(e&&e.defaultProps){n=H({},n),e=e.defaultProps;for(var s in e)n[s]===void 0&&(n[s]=e[s]);return n}return n}function Fa(e,n,s,a){n=e.memoizedState,s=s(a,n),s=s==null?n:H({},n,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Ti={isMounted:function(e){return(e=e._reactInternals)?Nn(e)===e:!1},enqueueSetState:function(e,n,s){e=e._reactInternals;var a=Ze(),u=jn(e),d=Xt(a,u);d.payload=n,s!=null&&(d.callback=s),n=gn(e,d,u),n!==null&&(Dt(n,e,u,a),vi(n,e,u))},enqueueReplaceState:function(e,n,s){e=e._reactInternals;var a=Ze(),u=jn(e),d=Xt(a,u);d.tag=1,d.payload=n,s!=null&&(d.callback=s),n=gn(e,d,u),n!==null&&(Dt(n,e,u,a),vi(n,e,u))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var s=Ze(),a=jn(e),u=Xt(s,a);u.tag=2,n!=null&&(u.callback=n),n=gn(e,u,a),n!==null&&(Dt(n,e,a,s),vi(n,e,a))}};function Wd(e,n,s,a,u,d,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,d,g):n.prototype&&n.prototype.isPureReactComponent?!Qr(s,a)||!Qr(u,d):!0}function Hd(e,n,s){var a=!1,u=hn,d=n.contextType;return typeof d=="object"&&d!==null?d=vt(d):(u=st(n)?Rn:We.current,a=n.contextTypes,d=(a=a!=null)?or(e,u):hn),n=new n(s,d),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ti,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=d),n}function Kd(e,n,s,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,a),n.state!==e&&Ti.enqueueReplaceState(n,n.state,null)}function Va(e,n,s,a){var u=e.stateNode;u.props=s,u.state=e.memoizedState,u.refs={},ba(e);var d=n.contextType;typeof d=="object"&&d!==null?u.context=vt(d):(d=st(n)?Rn:We.current,u.context=or(e,d)),u.state=e.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(Fa(e,n,d,s),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(n=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),n!==u.state&&Ti.enqueueReplaceState(u,u.state,null),ji(e,s,u,a),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308)}function fr(e,n){try{var s="",a=n;do s+=de(a),a=a.return;while(a);var u=s}catch(d){u=`
Error generating stack: `+d.message+`
`+d.stack}return{value:e,source:n,stack:u,digest:null}}function Ba(e,n,s){return{value:e,source:null,stack:s??null,digest:n??null}}function _a(e,n){try{console.error(n.value)}catch(s){setTimeout(function(){throw s})}}var F0=typeof WeakMap=="function"?WeakMap:Map;function Gd(e,n,s){s=Xt(-1,s),s.tag=3,s.payload={element:null};var a=n.value;return s.callback=function(){Mi||(Mi=!0,el=a),_a(e,n)},s}function Yd(e,n,s){s=Xt(-1,s),s.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var u=n.value;s.payload=function(){return a(u)},s.callback=function(){_a(e,n)}}var d=e.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(s.callback=function(){_a(e,n),typeof a!="function"&&(xn===null?xn=new Set([this]):xn.add(this));var g=n.stack;this.componentDidCatch(n.value,{componentStack:g!==null?g:""})}),s}function Xd(e,n,s){var a=e.pingCache;if(a===null){a=e.pingCache=new F0;var u=new Set;a.set(n,u)}else u=a.get(n),u===void 0&&(u=new Set,a.set(n,u));u.has(s)||(u.add(s),e=Q0.bind(null,e,n,s),n.then(e,e))}function Qd(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Jd(e,n,s,a,u){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(n=Xt(-1,1),n.tag=2,gn(s,n,1))),s.lanes|=1),e):(e.flags|=65536,e.lanes=u,e)}var V0=Q.ReactCurrentOwner,it=!1;function qe(e,n,s,a){n.child=e===null?yd(n,null,s,a):cr(n,e.child,s,a)}function qd(e,n,s,a,u){s=s.render;var d=n.ref;return pr(n,u),a=Ra(e,n,s,a,d,u),s=Aa(),e!==null&&!it?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~u,Qt(e,n,u)):(be&&s&&ha(n),n.flags|=1,qe(e,n,a,u),n.child)}function Zd(e,n,s,a,u){if(e===null){var d=s.type;return typeof d=="function"&&!al(d)&&d.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(n.tag=15,n.type=d,ep(e,n,d,a,u)):(e=$i(s.type,null,a,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,(e.lanes&u)===0){var g=d.memoizedProps;if(s=s.compare,s=s!==null?s:Qr,s(g,a)&&e.ref===n.ref)return Qt(e,n,u)}return n.flags|=1,e=kn(d,a),e.ref=n.ref,e.return=n,n.child=e}function ep(e,n,s,a,u){if(e!==null){var d=e.memoizedProps;if(Qr(d,a)&&e.ref===n.ref)if(it=!1,n.pendingProps=a=d,(e.lanes&u)!==0)(e.flags&131072)!==0&&(it=!0);else return n.lanes=e.lanes,Qt(e,n,u)}return $a(e,n,s,a,u)}function tp(e,n,s){var a=n.pendingProps,u=a.children,d=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(gr,gt),gt|=s;else{if((s&1073741824)===0)return e=d!==null?d.baseLanes|s:s,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ve(gr,gt),gt|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=d!==null?d.baseLanes:s,ve(gr,gt),gt|=a}else d!==null?(a=d.baseLanes|s,n.memoizedState=null):a=s,ve(gr,gt),gt|=a;return qe(e,n,u,s),n.child}function np(e,n){var s=n.ref;(e===null&&s!==null||e!==null&&e.ref!==s)&&(n.flags|=512,n.flags|=2097152)}function $a(e,n,s,a,u){var d=st(s)?Rn:We.current;return d=or(n,d),pr(n,u),s=Ra(e,n,s,a,d,u),a=Aa(),e!==null&&!it?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~u,Qt(e,n,u)):(be&&a&&ha(n),n.flags|=1,qe(e,n,s,u),n.child)}function rp(e,n,s,a,u){if(st(s)){var d=!0;di(n)}else d=!1;if(pr(n,u),n.stateNode===null)Ei(e,n),Hd(n,s,a),Va(n,s,a,u),a=!0;else if(e===null){var g=n.stateNode,j=n.memoizedProps;g.props=j;var k=g.context,E=s.contextType;typeof E=="object"&&E!==null?E=vt(E):(E=st(s)?Rn:We.current,E=or(n,E));var _=s.getDerivedStateFromProps,O=typeof _=="function"||typeof g.getSnapshotBeforeUpdate=="function";O||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(j!==a||k!==E)&&Kd(n,g,a,E),mn=!1;var F=n.memoizedState;g.state=F,ji(n,a,g,u),k=n.memoizedState,j!==a||F!==k||rt.current||mn?(typeof _=="function"&&(Fa(n,s,_,a),k=n.memoizedState),(j=mn||Wd(n,s,j,a,F,k,E))?(O||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(n.flags|=4194308)):(typeof g.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=k),g.props=a,g.state=k,g.context=E,a=j):(typeof g.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{g=n.stateNode,vd(e,n),j=n.memoizedProps,E=n.type===n.elementType?j:Rt(n.type,j),g.props=E,O=n.pendingProps,F=g.context,k=s.contextType,typeof k=="object"&&k!==null?k=vt(k):(k=st(s)?Rn:We.current,k=or(n,k));var K=s.getDerivedStateFromProps;(_=typeof K=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(j!==O||F!==k)&&Kd(n,g,a,k),mn=!1,F=n.memoizedState,g.state=F,ji(n,a,g,u);var Y=n.memoizedState;j!==O||F!==Y||rt.current||mn?(typeof K=="function"&&(Fa(n,s,K,a),Y=n.memoizedState),(E=mn||Wd(n,s,E,a,F,Y,k)||!1)?(_||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(a,Y,k),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(a,Y,k)),typeof g.componentDidUpdate=="function"&&(n.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof g.componentDidUpdate!="function"||j===e.memoizedProps&&F===e.memoizedState||(n.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||j===e.memoizedProps&&F===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=Y),g.props=a,g.state=Y,g.context=k,a=E):(typeof g.componentDidUpdate!="function"||j===e.memoizedProps&&F===e.memoizedState||(n.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||j===e.memoizedProps&&F===e.memoizedState||(n.flags|=1024),a=!1)}return Oa(e,n,s,a,d,u)}function Oa(e,n,s,a,u,d){np(e,n);var g=(n.flags&128)!==0;if(!a&&!g)return u&&ld(n,s,!1),Qt(e,n,d);a=n.stateNode,V0.current=n;var j=g&&typeof s.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&g?(n.child=cr(n,e.child,null,d),n.child=cr(n,null,j,d)):qe(e,n,j,d),n.memoizedState=a.state,u&&ld(n,s,!0),n.child}function sp(e){var n=e.stateNode;n.pendingContext?od(e,n.pendingContext,n.pendingContext!==n.context):n.context&&od(e,n.context,!1),Sa(e,n.containerInfo)}function ip(e,n,s,a,u){return ur(),ya(u),n.flags|=256,qe(e,n,s,a),n.child}var Ua={dehydrated:null,treeContext:null,retryLane:0};function za(e){return{baseLanes:e,cachePool:null,transitions:null}}function op(e,n,s){var a=n.pendingProps,u=Ce.current,d=!1,g=(n.flags&128)!==0,j;if((j=g)||(j=e!==null&&e.memoizedState===null?!1:(u&2)!==0),j?(d=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(u|=1),ve(Ce,u&1),e===null)return ga(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(g=a.children,e=a.fallback,d?(a=n.mode,d=n.child,g={mode:"hidden",children:g},(a&1)===0&&d!==null?(d.childLanes=0,d.pendingProps=g):d=Oi(g,a,0,null),e=$n(e,a,s,null),d.return=n,e.return=n,d.sibling=e,n.child=d,n.child.memoizedState=za(s),n.memoizedState=Ua,e):Wa(n,g));if(u=e.memoizedState,u!==null&&(j=u.dehydrated,j!==null))return B0(e,n,g,a,j,u,s);if(d){d=a.fallback,g=n.mode,u=e.child,j=u.sibling;var k={mode:"hidden",children:a.children};return(g&1)===0&&n.child!==u?(a=n.child,a.childLanes=0,a.pendingProps=k,n.deletions=null):(a=kn(u,k),a.subtreeFlags=u.subtreeFlags&14680064),j!==null?d=kn(j,d):(d=$n(d,g,s,null),d.flags|=2),d.return=n,a.return=n,a.sibling=d,n.child=a,a=d,d=n.child,g=e.child.memoizedState,g=g===null?za(s):{baseLanes:g.baseLanes|s,cachePool:null,transitions:g.transitions},d.memoizedState=g,d.childLanes=e.childLanes&~s,n.memoizedState=Ua,a}return d=e.child,e=d.sibling,a=kn(d,{mode:"visible",children:a.children}),(n.mode&1)===0&&(a.lanes=s),a.return=n,a.sibling=null,e!==null&&(s=n.deletions,s===null?(n.deletions=[e],n.flags|=16):s.push(e)),n.child=a,n.memoizedState=null,a}function Wa(e,n){return n=Oi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Ni(e,n,s,a){return a!==null&&ya(a),cr(n,e.child,null,s),e=Wa(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function B0(e,n,s,a,u,d,g){if(s)return n.flags&256?(n.flags&=-257,a=Ba(Error(o(422))),Ni(e,n,g,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(d=a.fallback,u=n.mode,a=Oi({mode:"visible",children:a.children},u,0,null),d=$n(d,u,g,null),d.flags|=2,a.return=n,d.return=n,a.sibling=d,n.child=a,(n.mode&1)!==0&&cr(n,e.child,null,g),n.child.memoizedState=za(g),n.memoizedState=Ua,d);if((n.mode&1)===0)return Ni(e,n,g,null);if(u.data==="$!"){if(a=u.nextSibling&&u.nextSibling.dataset,a)var j=a.dgst;return a=j,d=Error(o(419)),a=Ba(d,a,void 0),Ni(e,n,g,a)}if(j=(g&e.childLanes)!==0,it||j){if(a=_e,a!==null){switch(g&-g){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(a.suspendedLanes|g))!==0?0:u,u!==0&&u!==d.retryLane&&(d.retryLane=u,Yt(e,u),Dt(a,e,u,-1))}return ol(),a=Ba(Error(o(421))),Ni(e,n,g,a)}return u.data==="$?"?(n.flags|=128,n.child=e.child,n=J0.bind(null,e),u._reactRetry=n,null):(e=d.treeContext,mt=dn(u.nextSibling),ft=n,be=!0,Et=null,e!==null&&(yt[xt++]=Kt,yt[xt++]=Gt,yt[xt++]=An,Kt=e.id,Gt=e.overflow,An=n),n=Wa(n,a.children),n.flags|=4096,n)}function ap(e,n,s){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),wa(e.return,n,s)}function Ha(e,n,s,a,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:s,tailMode:u}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=a,d.tail=s,d.tailMode=u)}function lp(e,n,s){var a=n.pendingProps,u=a.revealOrder,d=a.tail;if(qe(e,n,a.children,s),a=Ce.current,(a&2)!==0)a=a&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ap(e,s,n);else if(e.tag===19)ap(e,s,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(ve(Ce,a),(n.mode&1)===0)n.memoizedState=null;else switch(u){case"forwards":for(s=n.child,u=null;s!==null;)e=s.alternate,e!==null&&wi(e)===null&&(u=s),s=s.sibling;s=u,s===null?(u=n.child,n.child=null):(u=s.sibling,s.sibling=null),Ha(n,!1,u,s,d);break;case"backwards":for(s=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&wi(e)===null){n.child=u;break}e=u.sibling,u.sibling=s,s=u,u=e}Ha(n,!0,s,null,d);break;case"together":Ha(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ei(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Qt(e,n,s){if(e!==null&&(n.dependencies=e.dependencies),Fn|=n.lanes,(s&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(o(153));if(n.child!==null){for(e=n.child,s=kn(e,e.pendingProps),n.child=s,s.return=n;e.sibling!==null;)e=e.sibling,s=s.sibling=kn(e,e.pendingProps),s.return=n;s.sibling=null}return n.child}function _0(e,n,s){switch(n.tag){case 3:sp(n),ur();break;case 5:kd(n);break;case 1:st(n.type)&&di(n);break;case 4:Sa(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,u=n.memoizedProps.value;ve(yi,a._currentValue),a._currentValue=u;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(ve(Ce,Ce.current&1),n.flags|=128,null):(s&n.child.childLanes)!==0?op(e,n,s):(ve(Ce,Ce.current&1),e=Qt(e,n,s),e!==null?e.sibling:null);ve(Ce,Ce.current&1);break;case 19:if(a=(s&n.childLanes)!==0,(e.flags&128)!==0){if(a)return lp(e,n,s);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ve(Ce,Ce.current),a)break;return null;case 22:case 23:return n.lanes=0,tp(e,n,s)}return Qt(e,n,s)}var up,Ka,cp,dp;up=function(e,n){for(var s=n.child;s!==null;){if(s.tag===5||s.tag===6)e.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Ka=function(){},cp=function(e,n,s,a){var u=e.memoizedProps;if(u!==a){e=n.stateNode,Mn(_t.current);var d=null;switch(s){case"input":u=wo(e,u),a=wo(e,a),d=[];break;case"select":u=H({},u,{value:void 0}),a=H({},a,{value:void 0}),d=[];break;case"textarea":u=So(e,u),a=So(e,a),d=[];break;default:typeof u.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=li)}Po(s,a);var g;s=null;for(E in u)if(!a.hasOwnProperty(E)&&u.hasOwnProperty(E)&&u[E]!=null)if(E==="style"){var j=u[E];for(g in j)j.hasOwnProperty(g)&&(s||(s={}),s[g]="")}else E!=="dangerouslySetInnerHTML"&&E!=="children"&&E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&E!=="autoFocus"&&(c.hasOwnProperty(E)?d||(d=[]):(d=d||[]).push(E,null));for(E in a){var k=a[E];if(j=u?.[E],a.hasOwnProperty(E)&&k!==j&&(k!=null||j!=null))if(E==="style")if(j){for(g in j)!j.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(s||(s={}),s[g]="");for(g in k)k.hasOwnProperty(g)&&j[g]!==k[g]&&(s||(s={}),s[g]=k[g])}else s||(d||(d=[]),d.push(E,s)),s=k;else E==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,j=j?j.__html:void 0,k!=null&&j!==k&&(d=d||[]).push(E,k)):E==="children"?typeof k!="string"&&typeof k!="number"||(d=d||[]).push(E,""+k):E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&(c.hasOwnProperty(E)?(k!=null&&E==="onScroll"&&je("scroll",e),d||j===k||(d=[])):(d=d||[]).push(E,k))}s&&(d=d||[]).push("style",s);var E=d;(n.updateQueue=E)&&(n.flags|=4)}},dp=function(e,n,s,a){s!==a&&(n.flags|=4)};function ds(e,n){if(!be)switch(e.tailMode){case"hidden":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,s=0,a=0;if(n)for(var u=e.child;u!==null;)s|=u.lanes|u.childLanes,a|=u.subtreeFlags&14680064,a|=u.flags&14680064,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)s|=u.lanes|u.childLanes,a|=u.subtreeFlags,a|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=a,e.childLanes=s,n}function $0(e,n,s){var a=n.pendingProps;switch(fa(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return st(n.type)&&ci(),Ke(n),null;case 3:return a=n.stateNode,hr(),we(rt),we(We),Ta(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(mi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Et!==null&&(rl(Et),Et=null))),Ka(e,n),Ke(n),null;case 5:Ca(n);var u=Mn(os.current);if(s=n.type,e!==null&&n.stateNode!=null)cp(e,n,s,a,u),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(o(166));return Ke(n),null}if(e=Mn(_t.current),mi(n)){a=n.stateNode,s=n.type;var d=n.memoizedProps;switch(a[Bt]=n,a[ts]=d,e=(n.mode&1)!==0,s){case"dialog":je("cancel",a),je("close",a);break;case"iframe":case"object":case"embed":je("load",a);break;case"video":case"audio":for(u=0;u<qr.length;u++)je(qr[u],a);break;case"source":je("error",a);break;case"img":case"image":case"link":je("error",a),je("load",a);break;case"details":je("toggle",a);break;case"input":Hu(a,d),je("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!d.multiple},je("invalid",a);break;case"textarea":Yu(a,d),je("invalid",a)}Po(s,d),u=null;for(var g in d)if(d.hasOwnProperty(g)){var j=d[g];g==="children"?typeof j=="string"?a.textContent!==j&&(d.suppressHydrationWarning!==!0&&ai(a.textContent,j,e),u=["children",j]):typeof j=="number"&&a.textContent!==""+j&&(d.suppressHydrationWarning!==!0&&ai(a.textContent,j,e),u=["children",""+j]):c.hasOwnProperty(g)&&j!=null&&g==="onScroll"&&je("scroll",a)}switch(s){case"input":Bs(a),Gu(a,d,!0);break;case"textarea":Bs(a),Qu(a);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(a.onclick=li)}a=u,n.updateQueue=a,a!==null&&(n.flags|=4)}else{g=u.nodeType===9?u:u.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ju(s)),e==="http://www.w3.org/1999/xhtml"?s==="script"?(e=g.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=g.createElement(s,{is:a.is}):(e=g.createElement(s),s==="select"&&(g=e,a.multiple?g.multiple=!0:a.size&&(g.size=a.size))):e=g.createElementNS(e,s),e[Bt]=n,e[ts]=a,up(e,n,!1,!1),n.stateNode=e;e:{switch(g=To(s,a),s){case"dialog":je("cancel",e),je("close",e),u=a;break;case"iframe":case"object":case"embed":je("load",e),u=a;break;case"video":case"audio":for(u=0;u<qr.length;u++)je(qr[u],e);u=a;break;case"source":je("error",e),u=a;break;case"img":case"image":case"link":je("error",e),je("load",e),u=a;break;case"details":je("toggle",e),u=a;break;case"input":Hu(e,a),u=wo(e,a),je("invalid",e);break;case"option":u=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},u=H({},a,{value:void 0}),je("invalid",e);break;case"textarea":Yu(e,a),u=So(e,a),je("invalid",e);break;default:u=a}Po(s,u),j=u;for(d in j)if(j.hasOwnProperty(d)){var k=j[d];d==="style"?ec(e,k):d==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&qu(e,k)):d==="children"?typeof k=="string"?(s!=="textarea"||k!=="")&&Dr(e,k):typeof k=="number"&&Dr(e,""+k):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(c.hasOwnProperty(d)?k!=null&&d==="onScroll"&&je("scroll",e):k!=null&&I(e,d,k,g))}switch(s){case"input":Bs(e),Gu(e,a,!1);break;case"textarea":Bs(e),Qu(e);break;case"option":a.value!=null&&e.setAttribute("value",""+me(a.value));break;case"select":e.multiple=!!a.multiple,d=a.value,d!=null?Yn(e,!!a.multiple,d,!1):a.defaultValue!=null&&Yn(e,!!a.multiple,a.defaultValue,!0);break;default:typeof u.onClick=="function"&&(e.onclick=li)}switch(s){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ke(n),null;case 6:if(e&&n.stateNode!=null)dp(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(o(166));if(s=Mn(os.current),Mn(_t.current),mi(n)){if(a=n.stateNode,s=n.memoizedProps,a[Bt]=n,(d=a.nodeValue!==s)&&(e=ft,e!==null))switch(e.tag){case 3:ai(a.nodeValue,s,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ai(a.nodeValue,s,(e.mode&1)!==0)}d&&(n.flags|=4)}else a=(s.nodeType===9?s:s.ownerDocument).createTextNode(a),a[Bt]=n,n.stateNode=a}return Ke(n),null;case 13:if(we(Ce),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(be&&mt!==null&&(n.mode&1)!==0&&(n.flags&128)===0)fd(),ur(),n.flags|=98560,d=!1;else if(d=mi(n),a!==null&&a.dehydrated!==null){if(e===null){if(!d)throw Error(o(318));if(d=n.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(o(317));d[Bt]=n}else ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),d=!1}else Et!==null&&(rl(Et),Et=null),d=!0;if(!d)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=s,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(Ce.current&1)!==0?Fe===0&&(Fe=3):ol())),n.updateQueue!==null&&(n.flags|=4),Ke(n),null);case 4:return hr(),Ka(e,n),e===null&&Zr(n.stateNode.containerInfo),Ke(n),null;case 10:return ja(n.type._context),Ke(n),null;case 17:return st(n.type)&&ci(),Ke(n),null;case 19:if(we(Ce),d=n.memoizedState,d===null)return Ke(n),null;if(a=(n.flags&128)!==0,g=d.rendering,g===null)if(a)ds(d,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(g=wi(e),g!==null){for(n.flags|=128,ds(d,!1),a=g.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=s,s=n.child;s!==null;)d=s,e=a,d.flags&=14680066,g=d.alternate,g===null?(d.childLanes=0,d.lanes=e,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=g.childLanes,d.lanes=g.lanes,d.child=g.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=g.memoizedProps,d.memoizedState=g.memoizedState,d.updateQueue=g.updateQueue,d.type=g.type,e=g.dependencies,d.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),s=s.sibling;return ve(Ce,Ce.current&1|2),n.child}e=e.sibling}d.tail!==null&&Ae()>yr&&(n.flags|=128,a=!0,ds(d,!1),n.lanes=4194304)}else{if(!a)if(e=wi(g),e!==null){if(n.flags|=128,a=!0,s=e.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),ds(d,!0),d.tail===null&&d.tailMode==="hidden"&&!g.alternate&&!be)return Ke(n),null}else 2*Ae()-d.renderingStartTime>yr&&s!==1073741824&&(n.flags|=128,a=!0,ds(d,!1),n.lanes=4194304);d.isBackwards?(g.sibling=n.child,n.child=g):(s=d.last,s!==null?s.sibling=g:n.child=g,d.last=g)}return d.tail!==null?(n=d.tail,d.rendering=n,d.tail=n.sibling,d.renderingStartTime=Ae(),n.sibling=null,s=Ce.current,ve(Ce,a?s&1|2:s&1),n):(Ke(n),null);case 22:case 23:return il(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&(n.mode&1)!==0?(gt&1073741824)!==0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),null;case 24:return null;case 25:return null}throw Error(o(156,n.tag))}function O0(e,n){switch(fa(n),n.tag){case 1:return st(n.type)&&ci(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return hr(),we(rt),we(We),Ta(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return Ca(n),null;case 13:if(we(Ce),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(o(340));ur()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return we(Ce),null;case 4:return hr(),null;case 10:return ja(n.type._context),null;case 22:case 23:return il(),null;case 24:return null;default:return null}}var Ri=!1,Ge=!1,U0=typeof WeakSet=="function"?WeakSet:Set,G=null;function mr(e,n){var s=e.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(a){Ee(e,n,a)}else s.current=null}function Ga(e,n,s){try{s()}catch(a){Ee(e,n,a)}}var pp=!1;function z0(e,n){if(ia=Qs,e=Wc(),Jo(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var a=s.getSelection&&s.getSelection();if(a&&a.rangeCount!==0){s=a.anchorNode;var u=a.anchorOffset,d=a.focusNode;a=a.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break e}var g=0,j=-1,k=-1,E=0,_=0,O=e,F=null;t:for(;;){for(var K;O!==s||u!==0&&O.nodeType!==3||(j=g+u),O!==d||a!==0&&O.nodeType!==3||(k=g+a),O.nodeType===3&&(g+=O.nodeValue.length),(K=O.firstChild)!==null;)F=O,O=K;for(;;){if(O===e)break t;if(F===s&&++E===u&&(j=g),F===d&&++_===a&&(k=g),(K=O.nextSibling)!==null)break;O=F,F=O.parentNode}O=K}s=j===-1||k===-1?null:{start:j,end:k}}else s=null}s=s||{start:0,end:0}}else s=null;for(oa={focusedElem:e,selectionRange:s},Qs=!1,G=n;G!==null;)if(n=G,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,G=e;else for(;G!==null;){n=G;try{var Y=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(Y!==null){var X=Y.memoizedProps,Le=Y.memoizedState,P=n.stateNode,b=P.getSnapshotBeforeUpdate(n.elementType===n.type?X:Rt(n.type,X),Le);P.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var T=n.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(U){Ee(n,n.return,U)}if(e=n.sibling,e!==null){e.return=n.return,G=e;break}G=n.return}return Y=pp,pp=!1,Y}function ps(e,n,s){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var u=a=a.next;do{if((u.tag&e)===e){var d=u.destroy;u.destroy=void 0,d!==void 0&&Ga(n,s,d)}u=u.next}while(u!==a)}}function Ai(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var s=n=n.next;do{if((s.tag&e)===e){var a=s.create;s.destroy=a()}s=s.next}while(s!==n)}}function Ya(e){var n=e.ref;if(n!==null){var s=e.stateNode;switch(e.tag){case 5:e=s;break;default:e=s}typeof n=="function"?n(e):n.current=e}}function hp(e){var n=e.alternate;n!==null&&(e.alternate=null,hp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Bt],delete n[ts],delete n[ca],delete n[C0],delete n[P0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function fp(e){return e.tag===5||e.tag===3||e.tag===4}function mp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||fp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xa(e,n,s){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?s.nodeType===8?s.parentNode.insertBefore(e,n):s.insertBefore(e,n):(s.nodeType===8?(n=s.parentNode,n.insertBefore(e,s)):(n=s,n.appendChild(e)),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=li));else if(a!==4&&(e=e.child,e!==null))for(Xa(e,n,s),e=e.sibling;e!==null;)Xa(e,n,s),e=e.sibling}function Qa(e,n,s){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?s.insertBefore(e,n):s.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Qa(e,n,s),e=e.sibling;e!==null;)Qa(e,n,s),e=e.sibling}var Oe=null,At=!1;function yn(e,n,s){for(s=s.child;s!==null;)gp(e,n,s),s=s.sibling}function gp(e,n,s){if(Vt&&typeof Vt.onCommitFiberUnmount=="function")try{Vt.onCommitFiberUnmount(Ws,s)}catch{}switch(s.tag){case 5:Ge||mr(s,n);case 6:var a=Oe,u=At;Oe=null,yn(e,n,s),Oe=a,At=u,Oe!==null&&(At?(e=Oe,s=s.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)):Oe.removeChild(s.stateNode));break;case 18:Oe!==null&&(At?(e=Oe,s=s.stateNode,e.nodeType===8?ua(e.parentNode,s):e.nodeType===1&&ua(e,s),Wr(e)):ua(Oe,s.stateNode));break;case 4:a=Oe,u=At,Oe=s.stateNode.containerInfo,At=!0,yn(e,n,s),Oe=a,At=u;break;case 0:case 11:case 14:case 15:if(!Ge&&(a=s.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){u=a=a.next;do{var d=u,g=d.destroy;d=d.tag,g!==void 0&&((d&2)!==0||(d&4)!==0)&&Ga(s,n,g),u=u.next}while(u!==a)}yn(e,n,s);break;case 1:if(!Ge&&(mr(s,n),a=s.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=s.memoizedProps,a.state=s.memoizedState,a.componentWillUnmount()}catch(j){Ee(s,n,j)}yn(e,n,s);break;case 21:yn(e,n,s);break;case 22:s.mode&1?(Ge=(a=Ge)||s.memoizedState!==null,yn(e,n,s),Ge=a):yn(e,n,s);break;default:yn(e,n,s)}}function yp(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var s=e.stateNode;s===null&&(s=e.stateNode=new U0),n.forEach(function(a){var u=q0.bind(null,e,a);s.has(a)||(s.add(a),a.then(u,u))})}}function Lt(e,n){var s=n.deletions;if(s!==null)for(var a=0;a<s.length;a++){var u=s[a];try{var d=e,g=n,j=g;e:for(;j!==null;){switch(j.tag){case 5:Oe=j.stateNode,At=!1;break e;case 3:Oe=j.stateNode.containerInfo,At=!0;break e;case 4:Oe=j.stateNode.containerInfo,At=!0;break e}j=j.return}if(Oe===null)throw Error(o(160));gp(d,g,u),Oe=null,At=!1;var k=u.alternate;k!==null&&(k.return=null),u.return=null}catch(E){Ee(u,n,E)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)xp(n,e),n=n.sibling}function xp(e,n){var s=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Lt(n,e),Ot(e),a&4){try{ps(3,e,e.return),Ai(3,e)}catch(X){Ee(e,e.return,X)}try{ps(5,e,e.return)}catch(X){Ee(e,e.return,X)}}break;case 1:Lt(n,e),Ot(e),a&512&&s!==null&&mr(s,s.return);break;case 5:if(Lt(n,e),Ot(e),a&512&&s!==null&&mr(s,s.return),e.flags&32){var u=e.stateNode;try{Dr(u,"")}catch(X){Ee(e,e.return,X)}}if(a&4&&(u=e.stateNode,u!=null)){var d=e.memoizedProps,g=s!==null?s.memoizedProps:d,j=e.type,k=e.updateQueue;if(e.updateQueue=null,k!==null)try{j==="input"&&d.type==="radio"&&d.name!=null&&Ku(u,d),To(j,g);var E=To(j,d);for(g=0;g<k.length;g+=2){var _=k[g],O=k[g+1];_==="style"?ec(u,O):_==="dangerouslySetInnerHTML"?qu(u,O):_==="children"?Dr(u,O):I(u,_,O,E)}switch(j){case"input":ko(u,d);break;case"textarea":Xu(u,d);break;case"select":var F=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!d.multiple;var K=d.value;K!=null?Yn(u,!!d.multiple,K,!1):F!==!!d.multiple&&(d.defaultValue!=null?Yn(u,!!d.multiple,d.defaultValue,!0):Yn(u,!!d.multiple,d.multiple?[]:"",!1))}u[ts]=d}catch(X){Ee(e,e.return,X)}}break;case 6:if(Lt(n,e),Ot(e),a&4){if(e.stateNode===null)throw Error(o(162));u=e.stateNode,d=e.memoizedProps;try{u.nodeValue=d}catch(X){Ee(e,e.return,X)}}break;case 3:if(Lt(n,e),Ot(e),a&4&&s!==null&&s.memoizedState.isDehydrated)try{Wr(n.containerInfo)}catch(X){Ee(e,e.return,X)}break;case 4:Lt(n,e),Ot(e);break;case 13:Lt(n,e),Ot(e),u=e.child,u.flags&8192&&(d=u.memoizedState!==null,u.stateNode.isHidden=d,!d||u.alternate!==null&&u.alternate.memoizedState!==null||(Za=Ae())),a&4&&yp(e);break;case 22:if(_=s!==null&&s.memoizedState!==null,e.mode&1?(Ge=(E=Ge)||_,Lt(n,e),Ge=E):Lt(n,e),Ot(e),a&8192){if(E=e.memoizedState!==null,(e.stateNode.isHidden=E)&&!_&&(e.mode&1)!==0)for(G=e,_=e.child;_!==null;){for(O=G=_;G!==null;){switch(F=G,K=F.child,F.tag){case 0:case 11:case 14:case 15:ps(4,F,F.return);break;case 1:mr(F,F.return);var Y=F.stateNode;if(typeof Y.componentWillUnmount=="function"){a=F,s=F.return;try{n=a,Y.props=n.memoizedProps,Y.state=n.memoizedState,Y.componentWillUnmount()}catch(X){Ee(a,s,X)}}break;case 5:mr(F,F.return);break;case 22:if(F.memoizedState!==null){wp(O);continue}}K!==null?(K.return=F,G=K):wp(O)}_=_.sibling}e:for(_=null,O=e;;){if(O.tag===5){if(_===null){_=O;try{u=O.stateNode,E?(d=u.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(j=O.stateNode,k=O.memoizedProps.style,g=k!=null&&k.hasOwnProperty("display")?k.display:null,j.style.display=Zu("display",g))}catch(X){Ee(e,e.return,X)}}}else if(O.tag===6){if(_===null)try{O.stateNode.nodeValue=E?"":O.memoizedProps}catch(X){Ee(e,e.return,X)}}else if((O.tag!==22&&O.tag!==23||O.memoizedState===null||O===e)&&O.child!==null){O.child.return=O,O=O.child;continue}if(O===e)break e;for(;O.sibling===null;){if(O.return===null||O.return===e)break e;_===O&&(_=null),O=O.return}_===O&&(_=null),O.sibling.return=O.return,O=O.sibling}}break;case 19:Lt(n,e),Ot(e),a&4&&yp(e);break;case 21:break;default:Lt(n,e),Ot(e)}}function Ot(e){var n=e.flags;if(n&2){try{e:{for(var s=e.return;s!==null;){if(fp(s)){var a=s;break e}s=s.return}throw Error(o(160))}switch(a.tag){case 5:var u=a.stateNode;a.flags&32&&(Dr(u,""),a.flags&=-33);var d=mp(e);Qa(e,d,u);break;case 3:case 4:var g=a.stateNode.containerInfo,j=mp(e);Xa(e,j,g);break;default:throw Error(o(161))}}catch(k){Ee(e,e.return,k)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function W0(e,n,s){G=e,vp(e)}function vp(e,n,s){for(var a=(e.mode&1)!==0;G!==null;){var u=G,d=u.child;if(u.tag===22&&a){var g=u.memoizedState!==null||Ri;if(!g){var j=u.alternate,k=j!==null&&j.memoizedState!==null||Ge;j=Ri;var E=Ge;if(Ri=g,(Ge=k)&&!E)for(G=u;G!==null;)g=G,k=g.child,g.tag===22&&g.memoizedState!==null?kp(u):k!==null?(k.return=g,G=k):kp(u);for(;d!==null;)G=d,vp(d),d=d.sibling;G=u,Ri=j,Ge=E}jp(e)}else(u.subtreeFlags&8772)!==0&&d!==null?(d.return=u,G=d):jp(e)}}function jp(e){for(;G!==null;){var n=G;if((n.flags&8772)!==0){var s=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Ge||Ai(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!Ge)if(s===null)a.componentDidMount();else{var u=n.elementType===n.type?s.memoizedProps:Rt(n.type,s.memoizedProps);a.componentDidUpdate(u,s.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var d=n.updateQueue;d!==null&&wd(n,d,a);break;case 3:var g=n.updateQueue;if(g!==null){if(s=null,n.child!==null)switch(n.child.tag){case 5:s=n.child.stateNode;break;case 1:s=n.child.stateNode}wd(n,g,s)}break;case 5:var j=n.stateNode;if(s===null&&n.flags&4){s=j;var k=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&s.focus();break;case"img":k.src&&(s.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var E=n.alternate;if(E!==null){var _=E.memoizedState;if(_!==null){var O=_.dehydrated;O!==null&&Wr(O)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}Ge||n.flags&512&&Ya(n)}catch(F){Ee(n,n.return,F)}}if(n===e){G=null;break}if(s=n.sibling,s!==null){s.return=n.return,G=s;break}G=n.return}}function wp(e){for(;G!==null;){var n=G;if(n===e){G=null;break}var s=n.sibling;if(s!==null){s.return=n.return,G=s;break}G=n.return}}function kp(e){for(;G!==null;){var n=G;try{switch(n.tag){case 0:case 11:case 15:var s=n.return;try{Ai(4,n)}catch(k){Ee(n,s,k)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var u=n.return;try{a.componentDidMount()}catch(k){Ee(n,u,k)}}var d=n.return;try{Ya(n)}catch(k){Ee(n,d,k)}break;case 5:var g=n.return;try{Ya(n)}catch(k){Ee(n,g,k)}}}catch(k){Ee(n,n.return,k)}if(n===e){G=null;break}var j=n.sibling;if(j!==null){j.return=n.return,G=j;break}G=n.return}}var H0=Math.ceil,Li=Q.ReactCurrentDispatcher,Ja=Q.ReactCurrentOwner,wt=Q.ReactCurrentBatchConfig,ce=0,_e=null,De=null,Ue=0,gt=0,gr=pn(0),Fe=0,hs=null,Fn=0,Di=0,qa=0,fs=null,ot=null,Za=0,yr=1/0,Jt=null,Mi=!1,el=null,xn=null,Ii=!1,vn=null,Fi=0,ms=0,tl=null,Vi=-1,Bi=0;function Ze(){return(ce&6)!==0?Ae():Vi!==-1?Vi:Vi=Ae()}function jn(e){return(e.mode&1)===0?1:(ce&2)!==0&&Ue!==0?Ue&-Ue:N0.transition!==null?(Bi===0&&(Bi=mc()),Bi):(e=ge,e!==0||(e=window.event,e=e===void 0?16:Sc(e.type)),e)}function Dt(e,n,s,a){if(50<ms)throw ms=0,tl=null,Error(o(185));_r(e,s,a),((ce&2)===0||e!==_e)&&(e===_e&&((ce&2)===0&&(Di|=s),Fe===4&&wn(e,Ue)),at(e,a),s===1&&ce===0&&(n.mode&1)===0&&(yr=Ae()+500,pi&&fn()))}function at(e,n){var s=e.callbackNode;Ng(e,n);var a=Gs(e,e===_e?Ue:0);if(a===0)s!==null&&pc(s),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(s!=null&&pc(s),n===1)e.tag===0?T0(Sp.bind(null,e)):ud(Sp.bind(null,e)),b0(function(){(ce&6)===0&&fn()}),s=null;else{switch(gc(a)){case 1:s=Mo;break;case 4:s=hc;break;case 16:s=zs;break;case 536870912:s=fc;break;default:s=zs}s=Lp(s,bp.bind(null,e))}e.callbackPriority=n,e.callbackNode=s}}function bp(e,n){if(Vi=-1,Bi=0,(ce&6)!==0)throw Error(o(327));var s=e.callbackNode;if(xr()&&e.callbackNode!==s)return null;var a=Gs(e,e===_e?Ue:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||n)n=_i(e,a);else{n=a;var u=ce;ce|=2;var d=Pp();(_e!==e||Ue!==n)&&(Jt=null,yr=Ae()+500,Bn(e,n));do try{Y0();break}catch(j){Cp(e,j)}while(!0);va(),Li.current=d,ce=u,De!==null?n=0:(_e=null,Ue=0,n=Fe)}if(n!==0){if(n===2&&(u=Io(e),u!==0&&(a=u,n=nl(e,u))),n===1)throw s=hs,Bn(e,0),wn(e,a),at(e,Ae()),s;if(n===6)wn(e,a);else{if(u=e.current.alternate,(a&30)===0&&!K0(u)&&(n=_i(e,a),n===2&&(d=Io(e),d!==0&&(a=d,n=nl(e,d))),n===1))throw s=hs,Bn(e,0),wn(e,a),at(e,Ae()),s;switch(e.finishedWork=u,e.finishedLanes=a,n){case 0:case 1:throw Error(o(345));case 2:_n(e,ot,Jt);break;case 3:if(wn(e,a),(a&130023424)===a&&(n=Za+500-Ae(),10<n)){if(Gs(e,0)!==0)break;if(u=e.suspendedLanes,(u&a)!==a){Ze(),e.pingedLanes|=e.suspendedLanes&u;break}e.timeoutHandle=la(_n.bind(null,e,ot,Jt),n);break}_n(e,ot,Jt);break;case 4:if(wn(e,a),(a&4194240)===a)break;for(n=e.eventTimes,u=-1;0<a;){var g=31-Tt(a);d=1<<g,g=n[g],g>u&&(u=g),a&=~d}if(a=u,a=Ae()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*H0(a/1960))-a,10<a){e.timeoutHandle=la(_n.bind(null,e,ot,Jt),a);break}_n(e,ot,Jt);break;case 5:_n(e,ot,Jt);break;default:throw Error(o(329))}}}return at(e,Ae()),e.callbackNode===s?bp.bind(null,e):null}function nl(e,n){var s=fs;return e.current.memoizedState.isDehydrated&&(Bn(e,n).flags|=256),e=_i(e,n),e!==2&&(n=ot,ot=s,n!==null&&rl(n)),e}function rl(e){ot===null?ot=e:ot.push.apply(ot,e)}function K0(e){for(var n=e;;){if(n.flags&16384){var s=n.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var a=0;a<s.length;a++){var u=s[a],d=u.getSnapshot;u=u.value;try{if(!Nt(d(),u))return!1}catch{return!1}}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function wn(e,n){for(n&=~qa,n&=~Di,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var s=31-Tt(n),a=1<<s;e[s]=-1,n&=~a}}function Sp(e){if((ce&6)!==0)throw Error(o(327));xr();var n=Gs(e,0);if((n&1)===0)return at(e,Ae()),null;var s=_i(e,n);if(e.tag!==0&&s===2){var a=Io(e);a!==0&&(n=a,s=nl(e,a))}if(s===1)throw s=hs,Bn(e,0),wn(e,n),at(e,Ae()),s;if(s===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,_n(e,ot,Jt),at(e,Ae()),null}function sl(e,n){var s=ce;ce|=1;try{return e(n)}finally{ce=s,ce===0&&(yr=Ae()+500,pi&&fn())}}function Vn(e){vn!==null&&vn.tag===0&&(ce&6)===0&&xr();var n=ce;ce|=1;var s=wt.transition,a=ge;try{if(wt.transition=null,ge=1,e)return e()}finally{ge=a,wt.transition=s,ce=n,(ce&6)===0&&fn()}}function il(){gt=gr.current,we(gr)}function Bn(e,n){e.finishedWork=null,e.finishedLanes=0;var s=e.timeoutHandle;if(s!==-1&&(e.timeoutHandle=-1,k0(s)),De!==null)for(s=De.return;s!==null;){var a=s;switch(fa(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&ci();break;case 3:hr(),we(rt),we(We),Ta();break;case 5:Ca(a);break;case 4:hr();break;case 13:we(Ce);break;case 19:we(Ce);break;case 10:ja(a.type._context);break;case 22:case 23:il()}s=s.return}if(_e=e,De=e=kn(e.current,null),Ue=gt=n,Fe=0,hs=null,qa=Di=Fn=0,ot=fs=null,Dn!==null){for(n=0;n<Dn.length;n++)if(s=Dn[n],a=s.interleaved,a!==null){s.interleaved=null;var u=a.next,d=s.pending;if(d!==null){var g=d.next;d.next=u,a.next=g}s.pending=a}Dn=null}return e}function Cp(e,n){do{var s=De;try{if(va(),ki.current=Pi,bi){for(var a=Pe.memoizedState;a!==null;){var u=a.queue;u!==null&&(u.pending=null),a=a.next}bi=!1}if(In=0,Be=Ie=Pe=null,as=!1,ls=0,Ja.current=null,s===null||s.return===null){Fe=1,hs=n,De=null;break}e:{var d=e,g=s.return,j=s,k=n;if(n=Ue,j.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var E=k,_=j,O=_.tag;if((_.mode&1)===0&&(O===0||O===11||O===15)){var F=_.alternate;F?(_.updateQueue=F.updateQueue,_.memoizedState=F.memoizedState,_.lanes=F.lanes):(_.updateQueue=null,_.memoizedState=null)}var K=Qd(g);if(K!==null){K.flags&=-257,Jd(K,g,j,d,n),K.mode&1&&Xd(d,E,n),n=K,k=E;var Y=n.updateQueue;if(Y===null){var X=new Set;X.add(k),n.updateQueue=X}else Y.add(k);break e}else{if((n&1)===0){Xd(d,E,n),ol();break e}k=Error(o(426))}}else if(be&&j.mode&1){var Le=Qd(g);if(Le!==null){(Le.flags&65536)===0&&(Le.flags|=256),Jd(Le,g,j,d,n),ya(fr(k,j));break e}}d=k=fr(k,j),Fe!==4&&(Fe=2),fs===null?fs=[d]:fs.push(d),d=g;do{switch(d.tag){case 3:d.flags|=65536,n&=-n,d.lanes|=n;var P=Gd(d,k,n);jd(d,P);break e;case 1:j=k;var b=d.type,T=d.stateNode;if((d.flags&128)===0&&(typeof b.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(xn===null||!xn.has(T)))){d.flags|=65536,n&=-n,d.lanes|=n;var U=Yd(d,j,n);jd(d,U);break e}}d=d.return}while(d!==null)}Np(s)}catch(J){n=J,De===s&&s!==null&&(De=s=s.return);continue}break}while(!0)}function Pp(){var e=Li.current;return Li.current=Pi,e===null?Pi:e}function ol(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),_e===null||(Fn&268435455)===0&&(Di&268435455)===0||wn(_e,Ue)}function _i(e,n){var s=ce;ce|=2;var a=Pp();(_e!==e||Ue!==n)&&(Jt=null,Bn(e,n));do try{G0();break}catch(u){Cp(e,u)}while(!0);if(va(),ce=s,Li.current=a,De!==null)throw Error(o(261));return _e=null,Ue=0,Fe}function G0(){for(;De!==null;)Tp(De)}function Y0(){for(;De!==null&&!vg();)Tp(De)}function Tp(e){var n=Ap(e.alternate,e,gt);e.memoizedProps=e.pendingProps,n===null?Np(e):De=n,Ja.current=null}function Np(e){var n=e;do{var s=n.alternate;if(e=n.return,(n.flags&32768)===0){if(s=$0(s,n,gt),s!==null){De=s;return}}else{if(s=O0(s,n),s!==null){s.flags&=32767,De=s;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Fe=6,De=null;return}}if(n=n.sibling,n!==null){De=n;return}De=n=e}while(n!==null);Fe===0&&(Fe=5)}function _n(e,n,s){var a=ge,u=wt.transition;try{wt.transition=null,ge=1,X0(e,n,s,a)}finally{wt.transition=u,ge=a}return null}function X0(e,n,s,a){do xr();while(vn!==null);if((ce&6)!==0)throw Error(o(327));s=e.finishedWork;var u=e.finishedLanes;if(s===null)return null;if(e.finishedWork=null,e.finishedLanes=0,s===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var d=s.lanes|s.childLanes;if(Eg(e,d),e===_e&&(De=_e=null,Ue=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||Ii||(Ii=!0,Lp(zs,function(){return xr(),null})),d=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||d){d=wt.transition,wt.transition=null;var g=ge;ge=1;var j=ce;ce|=4,Ja.current=null,z0(e,s),xp(s,e),m0(oa),Qs=!!ia,oa=ia=null,e.current=s,W0(s),jg(),ce=j,ge=g,wt.transition=d}else e.current=s;if(Ii&&(Ii=!1,vn=e,Fi=u),d=e.pendingLanes,d===0&&(xn=null),bg(s.stateNode),at(e,Ae()),n!==null)for(a=e.onRecoverableError,s=0;s<n.length;s++)u=n[s],a(u.value,{componentStack:u.stack,digest:u.digest});if(Mi)throw Mi=!1,e=el,el=null,e;return(Fi&1)!==0&&e.tag!==0&&xr(),d=e.pendingLanes,(d&1)!==0?e===tl?ms++:(ms=0,tl=e):ms=0,fn(),null}function xr(){if(vn!==null){var e=gc(Fi),n=wt.transition,s=ge;try{if(wt.transition=null,ge=16>e?16:e,vn===null)var a=!1;else{if(e=vn,vn=null,Fi=0,(ce&6)!==0)throw Error(o(331));var u=ce;for(ce|=4,G=e.current;G!==null;){var d=G,g=d.child;if((G.flags&16)!==0){var j=d.deletions;if(j!==null){for(var k=0;k<j.length;k++){var E=j[k];for(G=E;G!==null;){var _=G;switch(_.tag){case 0:case 11:case 15:ps(8,_,d)}var O=_.child;if(O!==null)O.return=_,G=O;else for(;G!==null;){_=G;var F=_.sibling,K=_.return;if(hp(_),_===E){G=null;break}if(F!==null){F.return=K,G=F;break}G=K}}}var Y=d.alternate;if(Y!==null){var X=Y.child;if(X!==null){Y.child=null;do{var Le=X.sibling;X.sibling=null,X=Le}while(X!==null)}}G=d}}if((d.subtreeFlags&2064)!==0&&g!==null)g.return=d,G=g;else e:for(;G!==null;){if(d=G,(d.flags&2048)!==0)switch(d.tag){case 0:case 11:case 15:ps(9,d,d.return)}var P=d.sibling;if(P!==null){P.return=d.return,G=P;break e}G=d.return}}var b=e.current;for(G=b;G!==null;){g=G;var T=g.child;if((g.subtreeFlags&2064)!==0&&T!==null)T.return=g,G=T;else e:for(g=b;G!==null;){if(j=G,(j.flags&2048)!==0)try{switch(j.tag){case 0:case 11:case 15:Ai(9,j)}}catch(J){Ee(j,j.return,J)}if(j===g){G=null;break e}var U=j.sibling;if(U!==null){U.return=j.return,G=U;break e}G=j.return}}if(ce=u,fn(),Vt&&typeof Vt.onPostCommitFiberRoot=="function")try{Vt.onPostCommitFiberRoot(Ws,e)}catch{}a=!0}return a}finally{ge=s,wt.transition=n}}return!1}function Ep(e,n,s){n=fr(s,n),n=Gd(e,n,1),e=gn(e,n,1),n=Ze(),e!==null&&(_r(e,1,n),at(e,n))}function Ee(e,n,s){if(e.tag===3)Ep(e,e,s);else for(;n!==null;){if(n.tag===3){Ep(n,e,s);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(xn===null||!xn.has(a))){e=fr(s,e),e=Yd(n,e,1),n=gn(n,e,1),e=Ze(),n!==null&&(_r(n,1,e),at(n,e));break}}n=n.return}}function Q0(e,n,s){var a=e.pingCache;a!==null&&a.delete(n),n=Ze(),e.pingedLanes|=e.suspendedLanes&s,_e===e&&(Ue&s)===s&&(Fe===4||Fe===3&&(Ue&130023424)===Ue&&500>Ae()-Za?Bn(e,0):qa|=s),at(e,n)}function Rp(e,n){n===0&&((e.mode&1)===0?n=1:(n=Ks,Ks<<=1,(Ks&130023424)===0&&(Ks=4194304)));var s=Ze();e=Yt(e,n),e!==null&&(_r(e,n,s),at(e,s))}function J0(e){var n=e.memoizedState,s=0;n!==null&&(s=n.retryLane),Rp(e,s)}function q0(e,n){var s=0;switch(e.tag){case 13:var a=e.stateNode,u=e.memoizedState;u!==null&&(s=u.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(o(314))}a!==null&&a.delete(n),Rp(e,s)}var Ap;Ap=function(e,n,s){if(e!==null)if(e.memoizedProps!==n.pendingProps||rt.current)it=!0;else{if((e.lanes&s)===0&&(n.flags&128)===0)return it=!1,_0(e,n,s);it=(e.flags&131072)!==0}else it=!1,be&&(n.flags&1048576)!==0&&cd(n,fi,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;Ei(e,n),e=n.pendingProps;var u=or(n,We.current);pr(n,s),u=Ra(null,n,a,e,u,s);var d=Aa();return n.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,st(a)?(d=!0,di(n)):d=!1,n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,ba(n),u.updater=Ti,n.stateNode=u,u._reactInternals=n,Va(n,a,e,s),n=Oa(null,n,a,!0,d,s)):(n.tag=0,be&&d&&ha(n),qe(null,n,u,s),n=n.child),n;case 16:a=n.elementType;e:{switch(Ei(e,n),e=n.pendingProps,u=a._init,a=u(a._payload),n.type=a,u=n.tag=ey(a),e=Rt(a,e),u){case 0:n=$a(null,n,a,e,s);break e;case 1:n=rp(null,n,a,e,s);break e;case 11:n=qd(null,n,a,e,s);break e;case 14:n=Zd(null,n,a,Rt(a.type,e),s);break e}throw Error(o(306,a,""))}return n;case 0:return a=n.type,u=n.pendingProps,u=n.elementType===a?u:Rt(a,u),$a(e,n,a,u,s);case 1:return a=n.type,u=n.pendingProps,u=n.elementType===a?u:Rt(a,u),rp(e,n,a,u,s);case 3:e:{if(sp(n),e===null)throw Error(o(387));a=n.pendingProps,d=n.memoizedState,u=d.element,vd(e,n),ji(n,a,null,s);var g=n.memoizedState;if(a=g.element,d.isDehydrated)if(d={element:a,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){u=fr(Error(o(423)),n),n=ip(e,n,a,s,u);break e}else if(a!==u){u=fr(Error(o(424)),n),n=ip(e,n,a,s,u);break e}else for(mt=dn(n.stateNode.containerInfo.firstChild),ft=n,be=!0,Et=null,s=yd(n,null,a,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ur(),a===u){n=Qt(e,n,s);break e}qe(e,n,a,s)}n=n.child}return n;case 5:return kd(n),e===null&&ga(n),a=n.type,u=n.pendingProps,d=e!==null?e.memoizedProps:null,g=u.children,aa(a,u)?g=null:d!==null&&aa(a,d)&&(n.flags|=32),np(e,n),qe(e,n,g,s),n.child;case 6:return e===null&&ga(n),null;case 13:return op(e,n,s);case 4:return Sa(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=cr(n,null,a,s):qe(e,n,a,s),n.child;case 11:return a=n.type,u=n.pendingProps,u=n.elementType===a?u:Rt(a,u),qd(e,n,a,u,s);case 7:return qe(e,n,n.pendingProps,s),n.child;case 8:return qe(e,n,n.pendingProps.children,s),n.child;case 12:return qe(e,n,n.pendingProps.children,s),n.child;case 10:e:{if(a=n.type._context,u=n.pendingProps,d=n.memoizedProps,g=u.value,ve(yi,a._currentValue),a._currentValue=g,d!==null)if(Nt(d.value,g)){if(d.children===u.children&&!rt.current){n=Qt(e,n,s);break e}}else for(d=n.child,d!==null&&(d.return=n);d!==null;){var j=d.dependencies;if(j!==null){g=d.child;for(var k=j.firstContext;k!==null;){if(k.context===a){if(d.tag===1){k=Xt(-1,s&-s),k.tag=2;var E=d.updateQueue;if(E!==null){E=E.shared;var _=E.pending;_===null?k.next=k:(k.next=_.next,_.next=k),E.pending=k}}d.lanes|=s,k=d.alternate,k!==null&&(k.lanes|=s),wa(d.return,s,n),j.lanes|=s;break}k=k.next}}else if(d.tag===10)g=d.type===n.type?null:d.child;else if(d.tag===18){if(g=d.return,g===null)throw Error(o(341));g.lanes|=s,j=g.alternate,j!==null&&(j.lanes|=s),wa(g,s,n),g=d.sibling}else g=d.child;if(g!==null)g.return=d;else for(g=d;g!==null;){if(g===n){g=null;break}if(d=g.sibling,d!==null){d.return=g.return,g=d;break}g=g.return}d=g}qe(e,n,u.children,s),n=n.child}return n;case 9:return u=n.type,a=n.pendingProps.children,pr(n,s),u=vt(u),a=a(u),n.flags|=1,qe(e,n,a,s),n.child;case 14:return a=n.type,u=Rt(a,n.pendingProps),u=Rt(a.type,u),Zd(e,n,a,u,s);case 15:return ep(e,n,n.type,n.pendingProps,s);case 17:return a=n.type,u=n.pendingProps,u=n.elementType===a?u:Rt(a,u),Ei(e,n),n.tag=1,st(a)?(e=!0,di(n)):e=!1,pr(n,s),Hd(n,a,u),Va(n,a,u,s),Oa(null,n,a,!0,e,s);case 19:return lp(e,n,s);case 22:return tp(e,n,s)}throw Error(o(156,n.tag))};function Lp(e,n){return dc(e,n)}function Z0(e,n,s,a){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(e,n,s,a){return new Z0(e,n,s,a)}function al(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ey(e){if(typeof e=="function")return al(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ct)return 11;if(e===dt)return 14}return 2}function kn(e,n){var s=e.alternate;return s===null?(s=kt(e.tag,n,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=n,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&14680064,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,n=e.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s}function $i(e,n,s,a,u,d){var g=2;if(a=e,typeof e=="function")al(e)&&(g=1);else if(typeof e=="string")g=5;else e:switch(e){case ie:return $n(s.children,u,d,n);case Z:g=8,u|=8;break;case fe:return e=kt(12,s,n,u|2),e.elementType=fe,e.lanes=d,e;case Qe:return e=kt(13,s,n,u),e.elementType=Qe,e.lanes=d,e;case nt:return e=kt(19,s,n,u),e.elementType=nt,e.lanes=d,e;case oe:return Oi(s,u,d,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ye:g=10;break e;case tt:g=9;break e;case ct:g=11;break e;case dt:g=14;break e;case Je:g=16,a=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return n=kt(g,s,n,u),n.elementType=e,n.type=a,n.lanes=d,n}function $n(e,n,s,a){return e=kt(7,e,a,n),e.lanes=s,e}function Oi(e,n,s,a){return e=kt(22,e,a,n),e.elementType=oe,e.lanes=s,e.stateNode={isHidden:!1},e}function ll(e,n,s){return e=kt(6,e,null,n),e.lanes=s,e}function ul(e,n,s){return n=kt(4,e.children!==null?e.children:[],e.key,n),n.lanes=s,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function ty(e,n,s,a,u){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fo(0),this.expirationTimes=Fo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fo(0),this.identifierPrefix=a,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function cl(e,n,s,a,u,d,g,j,k){return e=new ty(e,n,s,j,k),n===1?(n=1,d===!0&&(n|=8)):n=0,d=kt(3,null,null,n),e.current=d,d.stateNode=e,d.memoizedState={element:a,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},ba(d),e}function ny(e,n,s){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ne,key:a==null?null:""+a,children:e,containerInfo:n,implementation:s}}function Dp(e){if(!e)return hn;e=e._reactInternals;e:{if(Nn(e)!==e||e.tag!==1)throw Error(o(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(st(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(o(171))}if(e.tag===1){var s=e.type;if(st(s))return ad(e,s,n)}return n}function Mp(e,n,s,a,u,d,g,j,k){return e=cl(s,a,!0,e,u,d,g,j,k),e.context=Dp(null),s=e.current,a=Ze(),u=jn(s),d=Xt(a,u),d.callback=n??null,gn(s,d,u),e.current.lanes=u,_r(e,u,a),at(e,a),e}function Ui(e,n,s,a){var u=n.current,d=Ze(),g=jn(u);return s=Dp(s),n.context===null?n.context=s:n.pendingContext=s,n=Xt(d,g),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=gn(u,n,g),e!==null&&(Dt(e,u,g,d),vi(e,u,g)),g}function zi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ip(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<n?s:n}}function dl(e,n){Ip(e,n),(e=e.alternate)&&Ip(e,n)}function ry(){return null}var Fp=typeof reportError=="function"?reportError:function(e){console.error(e)};function pl(e){this._internalRoot=e}Wi.prototype.render=pl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(o(409));Ui(e,n,null,null)},Wi.prototype.unmount=pl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Vn(function(){Ui(null,e,null,null)}),n[Wt]=null}};function Wi(e){this._internalRoot=e}Wi.prototype.unstable_scheduleHydration=function(e){if(e){var n=vc();e={blockedOn:null,target:e,priority:n};for(var s=0;s<ln.length&&n!==0&&n<ln[s].priority;s++);ln.splice(s,0,e),s===0&&kc(e)}};function hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Hi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vp(){}function sy(e,n,s,a,u){if(u){if(typeof a=="function"){var d=a;a=function(){var E=zi(g);d.call(E)}}var g=Mp(n,a,e,0,null,!1,!1,"",Vp);return e._reactRootContainer=g,e[Wt]=g.current,Zr(e.nodeType===8?e.parentNode:e),Vn(),g}for(;u=e.lastChild;)e.removeChild(u);if(typeof a=="function"){var j=a;a=function(){var E=zi(k);j.call(E)}}var k=cl(e,0,!1,null,null,!1,!1,"",Vp);return e._reactRootContainer=k,e[Wt]=k.current,Zr(e.nodeType===8?e.parentNode:e),Vn(function(){Ui(n,k,s,a)}),k}function Ki(e,n,s,a,u){var d=s._reactRootContainer;if(d){var g=d;if(typeof u=="function"){var j=u;u=function(){var k=zi(g);j.call(k)}}Ui(n,g,e,u)}else g=sy(s,n,e,u,a);return zi(g)}yc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var s=Br(n.pendingLanes);s!==0&&(Vo(n,s|1),at(n,Ae()),(ce&6)===0&&(yr=Ae()+500,fn()))}break;case 13:Vn(function(){var a=Yt(e,1);if(a!==null){var u=Ze();Dt(a,e,1,u)}}),dl(e,1)}},Bo=function(e){if(e.tag===13){var n=Yt(e,134217728);if(n!==null){var s=Ze();Dt(n,e,134217728,s)}dl(e,134217728)}},xc=function(e){if(e.tag===13){var n=jn(e),s=Yt(e,n);if(s!==null){var a=Ze();Dt(s,e,n,a)}dl(e,n)}},vc=function(){return ge},jc=function(e,n){var s=ge;try{return ge=e,n()}finally{ge=s}},Ro=function(e,n,s){switch(n){case"input":if(ko(e,s),n=s.name,s.type==="radio"&&n!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<s.length;n++){var a=s[n];if(a!==e&&a.form===e.form){var u=ui(a);if(!u)throw Error(o(90));Wu(a),ko(a,u)}}}break;case"textarea":Xu(e,s);break;case"select":n=s.value,n!=null&&Yn(e,!!s.multiple,n,!1)}},sc=sl,ic=Vn;var iy={usingClientEntryPoint:!1,Events:[ns,sr,ui,nc,rc,sl]},gs={findFiberByHostInstance:En,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},oy={bundleType:gs.bundleType,version:gs.version,rendererPackageName:gs.rendererPackageName,rendererConfig:gs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Q.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=uc(e),e===null?null:e.stateNode},findFiberByHostInstance:gs.findFiberByHostInstance||ry,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gi.isDisabled&&Gi.supportsFiber)try{Ws=Gi.inject(oy),Vt=Gi}catch{}}return lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iy,lt.createPortal=function(e,n){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hl(n))throw Error(o(200));return ny(e,n,null,s)},lt.createRoot=function(e,n){if(!hl(e))throw Error(o(299));var s=!1,a="",u=Fp;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),n=cl(e,1,!1,null,null,s,!1,a,u),e[Wt]=n.current,Zr(e.nodeType===8?e.parentNode:e),new pl(n)},lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=uc(n),e=e===null?null:e.stateNode,e},lt.flushSync=function(e){return Vn(e)},lt.hydrate=function(e,n,s){if(!Hi(n))throw Error(o(200));return Ki(null,e,n,!0,s)},lt.hydrateRoot=function(e,n,s){if(!hl(e))throw Error(o(405));var a=s!=null&&s.hydratedSources||null,u=!1,d="",g=Fp;if(s!=null&&(s.unstable_strictMode===!0&&(u=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onRecoverableError!==void 0&&(g=s.onRecoverableError)),n=Mp(n,null,e,1,s??null,u,!1,d,g),e[Wt]=n.current,Zr(e),a)for(e=0;e<a.length;e++)s=a[e],u=s._getVersion,u=u(s._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[s,u]:n.mutableSourceEagerHydrationData.push(s,u);return new Wi(n)},lt.render=function(e,n,s){if(!Hi(n))throw Error(o(200));return Ki(null,e,n,!1,s)},lt.unmountComponentAtNode=function(e){if(!Hi(e))throw Error(o(40));return e._reactRootContainer?(Vn(function(){Ki(null,null,e,!1,function(){e._reactRootContainer=null,e[Wt]=null})}),!0):!1},lt.unstable_batchedUpdates=sl,lt.unstable_renderSubtreeIntoContainer=function(e,n,s,a){if(!Hi(s))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return Ki(e,n,s,!1,a)},lt.version="18.3.1-next-f1338f8080-20240426",lt}var Hp;function fy(){if(Hp)return gl.exports;Hp=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(r){console.error(r)}}return t(),gl.exports=hy(),gl.exports}var Kp;function my(){if(Kp)return Yi;Kp=1;var t=fy();return Yi.createRoot=t.createRoot,Yi.hydrateRoot=t.hydrateRoot,Yi}var gy=my(),C=au();/**
 * react-router v7.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Gp="popstate";function yy(t={}){function r(l,c){let{pathname:h,search:p,hash:f}=l.location;return Vl("",{pathname:h,search:p,hash:f},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function o(l,c){return typeof c=="string"?c:Cs(c)}return vy(r,o,null,t)}function Ne(t,r){if(t===!1||t===null||typeof t>"u")throw new Error(r)}function Ft(t,r){if(!t){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function xy(){return Math.random().toString(36).substring(2,10)}function Yp(t,r){return{usr:t.state,key:t.key,idx:r}}function Vl(t,r,o=null,l){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof r=="string"?Tr(r):r,state:o,key:r&&r.key||l||xy()}}function Cs({pathname:t="/",search:r="",hash:o=""}){return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function Tr(t){let r={};if(t){let o=t.indexOf("#");o>=0&&(r.hash=t.substring(o),t=t.substring(0,o));let l=t.indexOf("?");l>=0&&(r.search=t.substring(l),t=t.substring(0,l)),t&&(r.pathname=t)}return r}function vy(t,r,o,l={}){let{window:c=document.defaultView,v5Compat:h=!1}=l,p=c.history,f="POP",m=null,x=y();x==null&&(x=0,p.replaceState({...p.state,idx:x},""));function y(){return(p.state||{idx:null}).idx}function v(){f="POP";let R=y(),L=R==null?null:R-x;x=R,m&&m({action:f,location:D.location,delta:L})}function w(R,L){f="PUSH";let M=Vl(D.location,R,L);x=y()+1;let I=Yp(M,x),Q=D.createHref(M);try{p.pushState(I,"",Q)}catch(W){if(W instanceof DOMException&&W.name==="DataCloneError")throw W;c.location.assign(Q)}h&&m&&m({action:f,location:D.location,delta:1})}function N(R,L){f="REPLACE";let M=Vl(D.location,R,L);x=y();let I=Yp(M,x),Q=D.createHref(M);p.replaceState(I,"",Q),h&&m&&m({action:f,location:D.location,delta:0})}function A(R){return jy(R)}let D={get action(){return f},get location(){return t(c,p)},listen(R){if(m)throw new Error("A history only accepts one active listener");return c.addEventListener(Gp,v),m=R,()=>{c.removeEventListener(Gp,v),m=null}},createHref(R){return r(c,R)},createURL:A,encodeLocation(R){let L=A(R);return{pathname:L.pathname,search:L.search,hash:L.hash}},push:w,replace:N,go(R){return p.go(R)}};return D}function jy(t,r=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),Ne(o,"No window.location.(origin|href) available to create URL");let l=typeof t=="string"?t:Cs(t);return l=l.replace(/ $/,"%20"),!r&&l.startsWith("//")&&(l=o+l),new URL(l,o)}function pf(t,r,o="/"){return wy(t,r,o,!1)}function wy(t,r,o,l){let c=typeof r=="string"?Tr(r):r,h=Zt(c.pathname||"/",o);if(h==null)return null;let p=hf(t);ky(p);let f=null;for(let m=0;f==null&&m<p.length;++m){let x=Dy(h);f=Ay(p[m],x,l)}return f}function hf(t,r=[],o=[],l="",c=!1){let h=(p,f,m=c,x)=>{let y={relativePath:x===void 0?p.path||"":x,caseSensitive:p.caseSensitive===!0,childrenIndex:f,route:p};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(l)&&m)return;Ne(y.relativePath.startsWith(l),`Absolute route path "${y.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(l.length)}let v=qt([l,y.relativePath]),w=o.concat(y);p.children&&p.children.length>0&&(Ne(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),hf(p.children,r,w,v,m)),!(p.path==null&&!p.index)&&r.push({path:v,score:Ey(v,p.index),routesMeta:w})};return t.forEach((p,f)=>{if(p.path===""||!p.path?.includes("?"))h(p,f);else for(let m of ff(p.path))h(p,f,!0,m)}),r}function ff(t){let r=t.split("/");if(r.length===0)return[];let[o,...l]=r,c=o.endsWith("?"),h=o.replace(/\?$/,"");if(l.length===0)return c?[h,""]:[h];let p=ff(l.join("/")),f=[];return f.push(...p.map(m=>m===""?h:[h,m].join("/"))),c&&f.push(...p),f.map(m=>t.startsWith("/")&&m===""?"/":m)}function ky(t){t.sort((r,o)=>r.score!==o.score?o.score-r.score:Ry(r.routesMeta.map(l=>l.childrenIndex),o.routesMeta.map(l=>l.childrenIndex)))}var by=/^:[\w-]+$/,Sy=3,Cy=2,Py=1,Ty=10,Ny=-2,Xp=t=>t==="*";function Ey(t,r){let o=t.split("/"),l=o.length;return o.some(Xp)&&(l+=Ny),r&&(l+=Cy),o.filter(c=>!Xp(c)).reduce((c,h)=>c+(by.test(h)?Sy:h===""?Py:Ty),l)}function Ry(t,r){return t.length===r.length&&t.slice(0,-1).every((l,c)=>l===r[c])?t[t.length-1]-r[r.length-1]:0}function Ay(t,r,o=!1){let{routesMeta:l}=t,c={},h="/",p=[];for(let f=0;f<l.length;++f){let m=l[f],x=f===l.length-1,y=h==="/"?r:r.slice(h.length)||"/",v=ao({path:m.relativePath,caseSensitive:m.caseSensitive,end:x},y),w=m.route;if(!v&&x&&o&&!l[l.length-1].route.index&&(v=ao({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},y)),!v)return null;Object.assign(c,v.params),p.push({params:c,pathname:qt([h,v.pathname]),pathnameBase:Vy(qt([h,v.pathnameBase])),route:w}),v.pathnameBase!=="/"&&(h=qt([h,v.pathnameBase]))}return p}function ao(t,r){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[o,l]=Ly(t.path,t.caseSensitive,t.end),c=r.match(o);if(!c)return null;let h=c[0],p=h.replace(/(.)\/+$/,"$1"),f=c.slice(1);return{params:l.reduce((x,{paramName:y,isOptional:v},w)=>{if(y==="*"){let A=f[w]||"";p=h.slice(0,h.length-A.length).replace(/(.)\/+$/,"$1")}const N=f[w];return v&&!N?x[y]=void 0:x[y]=(N||"").replace(/%2F/g,"/"),x},{}),pathname:h,pathnameBase:p,pattern:t}}function Ly(t,r=!1,o=!0){Ft(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let l=[],c="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,f,m)=>(l.push({paramName:f,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(l.push({paramName:"*"}),c+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?c+="\\/*$":t!==""&&t!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,r?void 0:"i"),l]}function Dy(t){try{return t.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Ft(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),t}}function Zt(t,r){if(r==="/")return t;if(!t.toLowerCase().startsWith(r.toLowerCase()))return null;let o=r.endsWith("/")?r.length-1:r.length,l=t.charAt(o);return l&&l!=="/"?null:t.slice(o)||"/"}var mf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,My=t=>mf.test(t);function Iy(t,r="/"){let{pathname:o,search:l="",hash:c=""}=typeof t=="string"?Tr(t):t,h;if(o)if(My(o))h=o;else{if(o.includes("//")){let p=o;o=o.replace(/\/\/+/g,"/"),Ft(!1,`Pathnames cannot have embedded double slashes - normalizing ${p} -> ${o}`)}o.startsWith("/")?h=Qp(o.substring(1),"/"):h=Qp(o,r)}else h=r;return{pathname:h,search:By(l),hash:_y(c)}}function Qp(t,r){let o=r.replace(/\/+$/,"").split("/");return t.split("/").forEach(c=>{c===".."?o.length>1&&o.pop():c!=="."&&o.push(c)}),o.length>1?o.join("/"):"/"}function vl(t,r,o,l){return`Cannot include a '${t}' character in a manually specified \`to.${r}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Fy(t){return t.filter((r,o)=>o===0||r.route.path&&r.route.path.length>0)}function gf(t){let r=Fy(t);return r.map((o,l)=>l===r.length-1?o.pathname:o.pathnameBase)}function yf(t,r,o,l=!1){let c;typeof t=="string"?c=Tr(t):(c={...t},Ne(!c.pathname||!c.pathname.includes("?"),vl("?","pathname","search",c)),Ne(!c.pathname||!c.pathname.includes("#"),vl("#","pathname","hash",c)),Ne(!c.search||!c.search.includes("#"),vl("#","search","hash",c)));let h=t===""||c.pathname==="",p=h?"/":c.pathname,f;if(p==null)f=o;else{let v=r.length-1;if(!l&&p.startsWith("..")){let w=p.split("/");for(;w[0]==="..";)w.shift(),v-=1;c.pathname=w.join("/")}f=v>=0?r[v]:"/"}let m=Iy(c,f),x=p&&p!=="/"&&p.endsWith("/"),y=(h||p===".")&&o.endsWith("/");return!m.pathname.endsWith("/")&&(x||y)&&(m.pathname+="/"),m}var qt=t=>t.join("/").replace(/\/\/+/g,"/"),Vy=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),By=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,_y=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,$y=class{constructor(t,r,o,l=!1){this.status=t,this.statusText=r||"",this.internal=l,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}};function Oy(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function Uy(t){return t.map(r=>r.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var xf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function vf(t,r){let o=t;if(typeof o!="string"||!mf.test(o))return{absoluteURL:void 0,isExternal:!1,to:o};let l=o,c=!1;if(xf)try{let h=new URL(window.location.href),p=o.startsWith("//")?new URL(h.protocol+o):new URL(o),f=Zt(p.pathname,r);p.origin===h.origin&&f!=null?o=f+p.search+p.hash:c=!0}catch{Ft(!1,`<Link to="${o}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:l,isExternal:c,to:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var jf=["POST","PUT","PATCH","DELETE"];new Set(jf);var zy=["GET",...jf];new Set(zy);var Nr=C.createContext(null);Nr.displayName="DataRouter";var mo=C.createContext(null);mo.displayName="DataRouterState";var Wy=C.createContext(!1),wf=C.createContext({isTransitioning:!1});wf.displayName="ViewTransition";var Hy=C.createContext(new Map);Hy.displayName="Fetchers";var Ky=C.createContext(null);Ky.displayName="Await";var Pt=C.createContext(null);Pt.displayName="Navigation";var As=C.createContext(null);As.displayName="Location";var nn=C.createContext({outlet:null,matches:[],isDataRoute:!1});nn.displayName="Route";var lu=C.createContext(null);lu.displayName="RouteError";var kf="REACT_ROUTER_ERROR",Gy="REDIRECT",Yy="ROUTE_ERROR_RESPONSE";function Xy(t){if(t.startsWith(`${kf}:${Gy}:{`))try{let r=JSON.parse(t.slice(28));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.location=="string"&&typeof r.reloadDocument=="boolean"&&typeof r.replace=="boolean")return r}catch{}}function Qy(t){if(t.startsWith(`${kf}:${Yy}:{`))try{let r=JSON.parse(t.slice(40));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string")return new $y(r.status,r.statusText,r.data)}catch{}}function Jy(t,{relative:r}={}){Ne(Ls(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:l}=C.useContext(Pt),{hash:c,pathname:h,search:p}=Ds(t,{relative:r}),f=h;return o!=="/"&&(f=h==="/"?o:qt([o,h])),l.createHref({pathname:f,search:p,hash:c})}function Ls(){return C.useContext(As)!=null}function Gn(){return Ne(Ls(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(As).location}var bf="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Sf(t){C.useContext(Pt).static||C.useLayoutEffect(t)}function qy(){let{isDataRoute:t}=C.useContext(nn);return t?dx():Zy()}function Zy(){Ne(Ls(),"useNavigate() may be used only in the context of a <Router> component.");let t=C.useContext(Nr),{basename:r,navigator:o}=C.useContext(Pt),{matches:l}=C.useContext(nn),{pathname:c}=Gn(),h=JSON.stringify(gf(l)),p=C.useRef(!1);return Sf(()=>{p.current=!0}),C.useCallback((m,x={})=>{if(Ft(p.current,bf),!p.current)return;if(typeof m=="number"){o.go(m);return}let y=yf(m,JSON.parse(h),c,x.relative==="path");t==null&&r!=="/"&&(y.pathname=y.pathname==="/"?r:qt([r,y.pathname])),(x.replace?o.replace:o.push)(y,x.state,x)},[r,o,h,c,t])}C.createContext(null);function Ds(t,{relative:r}={}){let{matches:o}=C.useContext(nn),{pathname:l}=Gn(),c=JSON.stringify(gf(o));return C.useMemo(()=>yf(t,JSON.parse(c),l,r==="path"),[t,c,l,r])}function ex(t,r){return Cf(t,r)}function Cf(t,r,o,l,c){Ne(Ls(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:h}=C.useContext(Pt),{matches:p}=C.useContext(nn),f=p[p.length-1],m=f?f.params:{},x=f?f.pathname:"/",y=f?f.pathnameBase:"/",v=f&&f.route;{let M=v&&v.path||"";Tf(x,!v||M.endsWith("*")||M.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M==="/"?"*":`${M}/*`}">.`)}let w=Gn(),N;if(r){let M=typeof r=="string"?Tr(r):r;Ne(y==="/"||M.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${M.pathname}" was given in the \`location\` prop.`),N=M}else N=w;let A=N.pathname||"/",D=A;if(y!=="/"){let M=y.replace(/^\//,"").split("/");D="/"+A.replace(/^\//,"").split("/").slice(M.length).join("/")}let R=pf(t,{pathname:D});Ft(v||R!=null,`No routes matched location "${N.pathname}${N.search}${N.hash}" `),Ft(R==null||R[R.length-1].route.element!==void 0||R[R.length-1].route.Component!==void 0||R[R.length-1].route.lazy!==void 0,`Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let L=ix(R&&R.map(M=>Object.assign({},M,{params:Object.assign({},m,M.params),pathname:qt([y,h.encodeLocation?h.encodeLocation(M.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?y:qt([y,h.encodeLocation?h.encodeLocation(M.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:M.pathnameBase])})),p,o,l,c);return r&&L?C.createElement(As.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...N},navigationType:"POP"}},L):L}function tx(){let t=cx(),r=Oy(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),o=t instanceof Error?t.stack:null,l="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:l},h={padding:"2px 4px",backgroundColor:l},p=null;return console.error("Error handled by React Router default ErrorBoundary:",t),p=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:h},"ErrorBoundary")," or"," ",C.createElement("code",{style:h},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},r),o?C.createElement("pre",{style:c},o):null,p)}var nx=C.createElement(tx,null),Pf=class extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){this.props.onError?this.props.onError(t,r):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const o=Qy(t.digest);o&&(t=o)}let r=t!==void 0?C.createElement(nn.Provider,{value:this.props.routeContext},C.createElement(lu.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?C.createElement(rx,{error:t},r):r}};Pf.contextType=Wy;var jl=new WeakMap;function rx({children:t,error:r}){let{basename:o}=C.useContext(Pt);if(typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){let l=Xy(r.digest);if(l){let c=jl.get(r);if(c)throw c;let h=vf(l.location,o);if(xf&&!jl.get(r))if(h.isExternal||l.reloadDocument)window.location.href=h.absoluteURL||h.to;else{const p=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:l.replace}));throw jl.set(r,p),p}return C.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h.absoluteURL||h.to}`})}}return t}function sx({routeContext:t,match:r,children:o}){let l=C.useContext(Nr);return l&&l.static&&l.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=r.route.id),C.createElement(nn.Provider,{value:t},o)}function ix(t,r=[],o=null,l=null,c=null){if(t==null){if(!o)return null;if(o.errors)t=o.matches;else if(r.length===0&&!o.initialized&&o.matches.length>0)t=o.matches;else return null}let h=t,p=o?.errors;if(p!=null){let y=h.findIndex(v=>v.route.id&&p?.[v.route.id]!==void 0);Ne(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),h=h.slice(0,Math.min(h.length,y+1))}let f=!1,m=-1;if(o)for(let y=0;y<h.length;y++){let v=h[y];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(m=y),v.route.id){let{loaderData:w,errors:N}=o,A=v.route.loader&&!w.hasOwnProperty(v.route.id)&&(!N||N[v.route.id]===void 0);if(v.route.lazy||A){f=!0,m>=0?h=h.slice(0,m+1):h=[h[0]];break}}}let x=o&&l?(y,v)=>{l(y,{location:o.location,params:o.matches?.[0]?.params??{},unstable_pattern:Uy(o.matches),errorInfo:v})}:void 0;return h.reduceRight((y,v,w)=>{let N,A=!1,D=null,R=null;o&&(N=p&&v.route.id?p[v.route.id]:void 0,D=v.route.errorElement||nx,f&&(m<0&&w===0?(Tf("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),A=!0,R=null):m===w&&(A=!0,R=v.route.hydrateFallbackElement||null)));let L=r.concat(h.slice(0,w+1)),M=()=>{let I;return N?I=D:A?I=R:v.route.Component?I=C.createElement(v.route.Component,null):v.route.element?I=v.route.element:I=y,C.createElement(sx,{match:v,routeContext:{outlet:y,matches:L,isDataRoute:o!=null},children:I})};return o&&(v.route.ErrorBoundary||v.route.errorElement||w===0)?C.createElement(Pf,{location:o.location,revalidation:o.revalidation,component:D,error:N,children:M(),routeContext:{outlet:null,matches:L,isDataRoute:!0},onError:x}):M()},null)}function uu(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ox(t){let r=C.useContext(Nr);return Ne(r,uu(t)),r}function ax(t){let r=C.useContext(mo);return Ne(r,uu(t)),r}function lx(t){let r=C.useContext(nn);return Ne(r,uu(t)),r}function cu(t){let r=lx(t),o=r.matches[r.matches.length-1];return Ne(o.route.id,`${t} can only be used on routes that contain a unique "id"`),o.route.id}function ux(){return cu("useRouteId")}function cx(){let t=C.useContext(lu),r=ax("useRouteError"),o=cu("useRouteError");return t!==void 0?t:r.errors?.[o]}function dx(){let{router:t}=ox("useNavigate"),r=cu("useNavigate"),o=C.useRef(!1);return Sf(()=>{o.current=!0}),C.useCallback(async(c,h={})=>{Ft(o.current,bf),o.current&&(typeof c=="number"?await t.navigate(c):await t.navigate(c,{fromRouteId:r,...h}))},[t,r])}var Jp={};function Tf(t,r,o){!r&&!Jp[t]&&(Jp[t]=!0,Ft(!1,o))}C.memo(px);function px({routes:t,future:r,state:o,onError:l}){return Cf(t,void 0,o,l,r)}function Ye(t){Ne(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function hx({basename:t="/",children:r=null,location:o,navigationType:l="POP",navigator:c,static:h=!1,unstable_useTransitions:p}){Ne(!Ls(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=t.replace(/^\/*/,"/"),m=C.useMemo(()=>({basename:f,navigator:c,static:h,unstable_useTransitions:p,future:{}}),[f,c,h,p]);typeof o=="string"&&(o=Tr(o));let{pathname:x="/",search:y="",hash:v="",state:w=null,key:N="default"}=o,A=C.useMemo(()=>{let D=Zt(x,f);return D==null?null:{location:{pathname:D,search:y,hash:v,state:w,key:N},navigationType:l}},[f,x,y,v,w,N,l]);return Ft(A!=null,`<Router basename="${f}"> is not able to match the URL "${x}${y}${v}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:C.createElement(Pt.Provider,{value:m},C.createElement(As.Provider,{children:r,value:A}))}function fx({children:t,location:r}){return ex(Bl(t),r)}function Bl(t,r=[]){let o=[];return C.Children.forEach(t,(l,c)=>{if(!C.isValidElement(l))return;let h=[...r,c];if(l.type===C.Fragment){o.push.apply(o,Bl(l.props.children,h));return}Ne(l.type===Ye,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ne(!l.props.index||!l.props.children,"An index route cannot have child routes.");let p={id:l.props.id||h.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,middleware:l.props.middleware,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(p.children=Bl(l.props.children,h)),o.push(p)}),o}var eo="get",to="application/x-www-form-urlencoded";function go(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function mx(t){return go(t)&&t.tagName.toLowerCase()==="button"}function gx(t){return go(t)&&t.tagName.toLowerCase()==="form"}function yx(t){return go(t)&&t.tagName.toLowerCase()==="input"}function xx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function vx(t,r){return t.button===0&&(!r||r==="_self")&&!xx(t)}var Xi=null;function jx(){if(Xi===null)try{new FormData(document.createElement("form"),0),Xi=!1}catch{Xi=!0}return Xi}var wx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function wl(t){return t!=null&&!wx.has(t)?(Ft(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${to}"`),null):t}function kx(t,r){let o,l,c,h,p;if(gx(t)){let f=t.getAttribute("action");l=f?Zt(f,r):null,o=t.getAttribute("method")||eo,c=wl(t.getAttribute("enctype"))||to,h=new FormData(t)}else if(mx(t)||yx(t)&&(t.type==="submit"||t.type==="image")){let f=t.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=t.getAttribute("formaction")||f.getAttribute("action");if(l=m?Zt(m,r):null,o=t.getAttribute("formmethod")||f.getAttribute("method")||eo,c=wl(t.getAttribute("formenctype"))||wl(f.getAttribute("enctype"))||to,h=new FormData(f,t),!jx()){let{name:x,type:y,value:v}=t;if(y==="image"){let w=x?`${x}.`:"";h.append(`${w}x`,"0"),h.append(`${w}y`,"0")}else x&&h.append(x,v)}}else{if(go(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=eo,l=null,c=to,p=t}return h&&c==="text/plain"&&(p=h,h=void 0),{action:l,method:o.toLowerCase(),encType:c,formData:h,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function du(t,r){if(t===!1||t===null||typeof t>"u")throw new Error(r)}function bx(t,r,o){let l=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return l.pathname==="/"?l.pathname=`_root.${o}`:r&&Zt(l.pathname,r)==="/"?l.pathname=`${r.replace(/\/$/,"")}/_root.${o}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${o}`,l}async function Sx(t,r){if(t.id in r)return r[t.id];try{let o=await import(t.module);return r[t.id]=o,o}catch(o){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Cx(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function Px(t,r,o){let l=await Promise.all(t.map(async c=>{let h=r.routes[c.route.id];if(h){let p=await Sx(h,o);return p.links?p.links():[]}return[]}));return Rx(l.flat(1).filter(Cx).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function qp(t,r,o,l,c,h){let p=(m,x)=>o[x]?m.route.id!==o[x].route.id:!0,f=(m,x)=>o[x].pathname!==m.pathname||o[x].route.path?.endsWith("*")&&o[x].params["*"]!==m.params["*"];return h==="assets"?r.filter((m,x)=>p(m,x)||f(m,x)):h==="data"?r.filter((m,x)=>{let y=l.routes[m.route.id];if(!y||!y.hasLoader)return!1;if(p(m,x)||f(m,x))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(t,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function Tx(t,r,{includeHydrateFallback:o}={}){return Nx(t.map(l=>{let c=r.routes[l.route.id];if(!c)return[];let h=[c.module];return c.clientActionModule&&(h=h.concat(c.clientActionModule)),c.clientLoaderModule&&(h=h.concat(c.clientLoaderModule)),o&&c.hydrateFallbackModule&&(h=h.concat(c.hydrateFallbackModule)),c.imports&&(h=h.concat(c.imports)),h}).flat(1))}function Nx(t){return[...new Set(t)]}function Ex(t){let r={},o=Object.keys(t).sort();for(let l of o)r[l]=t[l];return r}function Rx(t,r){let o=new Set;return new Set(r),t.reduce((l,c)=>{let h=JSON.stringify(Ex(c));return o.has(h)||(o.add(h),l.push({key:h,link:c})),l},[])}function Nf(){let t=C.useContext(Nr);return du(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Ax(){let t=C.useContext(mo);return du(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var pu=C.createContext(void 0);pu.displayName="FrameworkContext";function Ef(){let t=C.useContext(pu);return du(t,"You must render this element inside a <HydratedRouter> element"),t}function Lx(t,r){let o=C.useContext(pu),[l,c]=C.useState(!1),[h,p]=C.useState(!1),{onFocus:f,onBlur:m,onMouseEnter:x,onMouseLeave:y,onTouchStart:v}=r,w=C.useRef(null);C.useEffect(()=>{if(t==="render"&&p(!0),t==="viewport"){let D=L=>{L.forEach(M=>{p(M.isIntersecting)})},R=new IntersectionObserver(D,{threshold:.5});return w.current&&R.observe(w.current),()=>{R.disconnect()}}},[t]),C.useEffect(()=>{if(l){let D=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(D)}}},[l]);let N=()=>{c(!0)},A=()=>{c(!1),p(!1)};return o?t!=="intent"?[h,w,{}]:[h,w,{onFocus:xs(f,N),onBlur:xs(m,A),onMouseEnter:xs(x,N),onMouseLeave:xs(y,A),onTouchStart:xs(v,N)}]:[!1,w,{}]}function xs(t,r){return o=>{t&&t(o),o.defaultPrevented||r(o)}}function Dx({page:t,...r}){let{router:o}=Nf(),l=C.useMemo(()=>pf(o.routes,t,o.basename),[o.routes,t,o.basename]);return l?C.createElement(Ix,{page:t,matches:l,...r}):null}function Mx(t){let{manifest:r,routeModules:o}=Ef(),[l,c]=C.useState([]);return C.useEffect(()=>{let h=!1;return Px(t,r,o).then(p=>{h||c(p)}),()=>{h=!0}},[t,r,o]),l}function Ix({page:t,matches:r,...o}){let l=Gn(),{manifest:c,routeModules:h}=Ef(),{basename:p}=Nf(),{loaderData:f,matches:m}=Ax(),x=C.useMemo(()=>qp(t,r,m,c,l,"data"),[t,r,m,c,l]),y=C.useMemo(()=>qp(t,r,m,c,l,"assets"),[t,r,m,c,l]),v=C.useMemo(()=>{if(t===l.pathname+l.search+l.hash)return[];let A=new Set,D=!1;if(r.forEach(L=>{let M=c.routes[L.route.id];!M||!M.hasLoader||(!x.some(I=>I.route.id===L.route.id)&&L.route.id in f&&h[L.route.id]?.shouldRevalidate||M.hasClientLoader?D=!0:A.add(L.route.id))}),A.size===0)return[];let R=bx(t,p,"data");return D&&A.size>0&&R.searchParams.set("_routes",r.filter(L=>A.has(L.route.id)).map(L=>L.route.id).join(",")),[R.pathname+R.search]},[p,f,l,c,x,r,t,h]),w=C.useMemo(()=>Tx(y,c),[y,c]),N=Mx(y);return C.createElement(C.Fragment,null,v.map(A=>C.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...o})),w.map(A=>C.createElement("link",{key:A,rel:"modulepreload",href:A,...o})),N.map(({key:A,link:D})=>C.createElement("link",{key:A,nonce:o.nonce,...D})))}function Fx(...t){return r=>{t.forEach(o=>{typeof o=="function"?o(r):o!=null&&(o.current=r)})}}var Vx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Vx&&(window.__reactRouterVersion="7.11.0")}catch{}function Bx({basename:t,children:r,unstable_useTransitions:o,window:l}){let c=C.useRef();c.current==null&&(c.current=yy({window:l,v5Compat:!0}));let h=c.current,[p,f]=C.useState({action:h.action,location:h.location}),m=C.useCallback(x=>{o===!1?f(x):C.startTransition(()=>f(x))},[o]);return C.useLayoutEffect(()=>h.listen(m),[h,m]),C.createElement(hx,{basename:t,children:r,location:p.location,navigationType:p.action,navigator:h,unstable_useTransitions:o})}var Rf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yo=C.forwardRef(function({onClick:r,discover:o="render",prefetch:l="none",relative:c,reloadDocument:h,replace:p,state:f,target:m,to:x,preventScrollReset:y,viewTransition:v,unstable_defaultShouldRevalidate:w,...N},A){let{basename:D,unstable_useTransitions:R}=C.useContext(Pt),L=typeof x=="string"&&Rf.test(x),M=vf(x,D);x=M.to;let I=Jy(x,{relative:c}),[Q,W,ne]=Lx(l,N),ie=Ux(x,{replace:p,state:f,target:m,preventScrollReset:y,relative:c,viewTransition:v,unstable_defaultShouldRevalidate:w,unstable_useTransitions:R});function Z(ye){r&&r(ye),ye.defaultPrevented||ie(ye)}let fe=C.createElement("a",{...N,...ne,href:M.absoluteURL||I,onClick:M.isExternal||h?r:Z,ref:Fx(A,W),target:m,"data-discover":!L&&o==="render"?"true":void 0});return Q&&!L?C.createElement(C.Fragment,null,fe,C.createElement(Dx,{page:I})):fe});yo.displayName="Link";var _x=C.forwardRef(function({"aria-current":r="page",caseSensitive:o=!1,className:l="",end:c=!1,style:h,to:p,viewTransition:f,children:m,...x},y){let v=Ds(p,{relative:x.relative}),w=Gn(),N=C.useContext(mo),{navigator:A,basename:D}=C.useContext(Pt),R=N!=null&&Gx(v)&&f===!0,L=A.encodeLocation?A.encodeLocation(v).pathname:v.pathname,M=w.pathname,I=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;o||(M=M.toLowerCase(),I=I?I.toLowerCase():null,L=L.toLowerCase()),I&&D&&(I=Zt(I,D)||I);const Q=L!=="/"&&L.endsWith("/")?L.length-1:L.length;let W=M===L||!c&&M.startsWith(L)&&M.charAt(Q)==="/",ne=I!=null&&(I===L||!c&&I.startsWith(L)&&I.charAt(L.length)==="/"),ie={isActive:W,isPending:ne,isTransitioning:R},Z=W?r:void 0,fe;typeof l=="function"?fe=l(ie):fe=[l,W?"active":null,ne?"pending":null,R?"transitioning":null].filter(Boolean).join(" ");let ye=typeof h=="function"?h(ie):h;return C.createElement(yo,{...x,"aria-current":Z,className:fe,ref:y,style:ye,to:p,viewTransition:f},typeof m=="function"?m(ie):m)});_x.displayName="NavLink";var $x=C.forwardRef(({discover:t="render",fetcherKey:r,navigate:o,reloadDocument:l,replace:c,state:h,method:p=eo,action:f,onSubmit:m,relative:x,preventScrollReset:y,viewTransition:v,unstable_defaultShouldRevalidate:w,...N},A)=>{let{unstable_useTransitions:D}=C.useContext(Pt),R=Hx(),L=Kx(f,{relative:x}),M=p.toLowerCase()==="get"?"get":"post",I=typeof f=="string"&&Rf.test(f),Q=W=>{if(m&&m(W),W.defaultPrevented)return;W.preventDefault();let ne=W.nativeEvent.submitter,ie=ne?.getAttribute("formmethod")||p,Z=()=>R(ne||W.currentTarget,{fetcherKey:r,method:ie,navigate:o,replace:c,state:h,relative:x,preventScrollReset:y,viewTransition:v,unstable_defaultShouldRevalidate:w});D&&o!==!1?C.startTransition(()=>Z()):Z()};return C.createElement("form",{ref:A,method:M,action:L,onSubmit:l?m:Q,...N,"data-discover":!I&&t==="render"?"true":void 0})});$x.displayName="Form";function Ox(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Af(t){let r=C.useContext(Nr);return Ne(r,Ox(t)),r}function Ux(t,{target:r,replace:o,state:l,preventScrollReset:c,relative:h,viewTransition:p,unstable_defaultShouldRevalidate:f,unstable_useTransitions:m}={}){let x=qy(),y=Gn(),v=Ds(t,{relative:h});return C.useCallback(w=>{if(vx(w,r)){w.preventDefault();let N=o!==void 0?o:Cs(y)===Cs(v),A=()=>x(t,{replace:N,state:l,preventScrollReset:c,relative:h,viewTransition:p,unstable_defaultShouldRevalidate:f});m?C.startTransition(()=>A()):A()}},[y,x,v,o,l,r,t,c,h,p,f,m])}var zx=0,Wx=()=>`__${String(++zx)}__`;function Hx(){let{router:t}=Af("useSubmit"),{basename:r}=C.useContext(Pt),o=ux(),l=t.fetch,c=t.navigate;return C.useCallback(async(h,p={})=>{let{action:f,method:m,encType:x,formData:y,body:v}=kx(h,r);if(p.navigate===!1){let w=p.fetcherKey||Wx();await l(w,o,p.action||f,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:y,body:v,formMethod:p.method||m,formEncType:p.encType||x,flushSync:p.flushSync})}else await c(p.action||f,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:y,body:v,formMethod:p.method||m,formEncType:p.encType||x,replace:p.replace,state:p.state,fromRouteId:o,flushSync:p.flushSync,viewTransition:p.viewTransition})},[l,c,r,o])}function Kx(t,{relative:r}={}){let{basename:o}=C.useContext(Pt),l=C.useContext(nn);Ne(l,"useFormAction must be used inside a RouteContext");let[c]=l.matches.slice(-1),h={...Ds(t||".",{relative:r})},p=Gn();if(t==null){h.search=p.search;let f=new URLSearchParams(h.search),m=f.getAll("index");if(m.some(y=>y==="")){f.delete("index"),m.filter(v=>v).forEach(v=>f.append("index",v));let y=f.toString();h.search=y?`?${y}`:""}}return(!t||t===".")&&c.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(h.pathname=h.pathname==="/"?o:qt([o,h.pathname])),Cs(h)}function Gx(t,{relative:r}={}){let o=C.useContext(wf);Ne(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=Af("useViewTransitionState"),c=Ds(t,{relative:r});if(!o.isTransitioning)return!1;let h=Zt(o.currentLocation.pathname,l)||o.currentLocation.pathname,p=Zt(o.nextLocation.pathname,l)||o.nextLocation.pathname;return ao(c.pathname,p)!=null||ao(c.pathname,h)!=null}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Xx=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,o,l)=>l?l.toUpperCase():o.toLowerCase()),Zp=t=>{const r=Xx(t);return r.charAt(0).toUpperCase()+r.slice(1)},Lf=(...t)=>t.filter((r,o,l)=>!!r&&r.trim()!==""&&l.indexOf(r)===o).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Qx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=C.forwardRef(({color:t="currentColor",size:r=24,strokeWidth:o=2,absoluteStrokeWidth:l,className:c="",children:h,iconNode:p,...f},m)=>C.createElement("svg",{ref:m,...Qx,width:r,height:r,stroke:t,strokeWidth:l?Number(o)*24/Number(r):o,className:Lf("lucide",c),...f},[...p.map(([x,y])=>C.createElement(x,y)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=(t,r)=>{const o=C.forwardRef(({className:l,...c},h)=>C.createElement(Jx,{ref:h,iconNode:r,className:Lf(`lucide-${Yx(Zp(t))}`,`lucide-${t}`,l),...c}));return o.displayName=Zp(t),o};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Zx=rn("check",qx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],tv=rn("copy",ev);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],rv=rn("menu",nv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],iv=rn("moon",sv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],Df=rn("rocket",ov);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],lv=rn("sparkles",av);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Qi=rn("star",uv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],dv=rn("sun",cv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],hv=rn("x",pv),fv=[{path:"/",name:"🏠 Home",phase:0},{path:"/phase1",name:"🌱 Phase 1: React Intro",phase:1},{path:"/phase2",name:"🧩 Phase 2: JSX & Components",phase:2},{path:"/phase3",name:"🔁 Phase 3: Props & State",phase:3},{path:"/phase4",name:"⚡ Phase 4: Events & Lists",phase:4},{path:"/phase5",name:"✍️ Phase 5: Forms & Refs",phase:5},{path:"/phase6",name:"🧠 Phase 6: Hooks",phase:6},{path:"/phase7",name:"🧭 Phase 7: Routing",phase:7},{path:"/phase8",name:"🎨 Phase 8: Styling",phase:8},{path:"/phase9",name:"🌍 Phase 9: API Integration",phase:9},{path:"/phase10",name:"🧘 Phase 10: State Management",phase:10},{path:"/phase11",name:"🧼 Phase 11: Performance",phase:11},{path:"/phase12",name:"🧪 Phase 12: Testing",phase:12},{path:"/phase13",name:"🌐 Phase 13: Deployment",phase:13},{path:"/phase14",name:"💪 Phase 14: Projects",phase:14}];function mv({theme:t,toggleTheme:r,menuOpen:o,setMenuOpen:l}){return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:`fixed top-0 left-0 right-0 z-50 ${t==="dark"?"bg-gray-800/95 border-purple-500/30":"bg-white/95 border-purple-300"} backdrop-blur-sm border-b shadow-lg`,children:i.jsxs("div",{className:"flex items-center justify-between p-4",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("button",{onClick:()=>l(!o),className:`p-2 rounded-lg transition-all hover:scale-110 ${t==="dark"?"bg-purple-600 hover:bg-purple-500":"bg-purple-500 hover:bg-purple-600"} text-white`,children:o?i.jsx(hv,{size:24}):i.jsx(rv,{size:24})}),i.jsx(Df,{className:t==="dark"?"text-purple-400":"text-purple-600",size:32}),i.jsx("span",{className:`${t==="dark"?"text-white":"text-gray-800"}`,children:"React Learning Adventure"})]}),i.jsx("button",{onClick:r,className:`p-3 rounded-full transition-all hover:scale-110 ${t==="dark"?"bg-yellow-400 hover:bg-yellow-300":"bg-indigo-600 hover:bg-indigo-700"}`,children:t==="dark"?i.jsx(dv,{size:24,className:"text-gray-900"}):i.jsx(iv,{size:24,className:"text-white"})})]})}),i.jsx("div",{className:`fixed top-16 left-0 bottom-0 w-64 z-40 transition-transform duration-300 ${o?"translate-x-0":"-translate-x-full"} ${t==="dark"?"bg-gray-800/95":"bg-white/95"} backdrop-blur-sm border-r ${t==="dark"?"border-purple-500/30":"border-purple-300"} overflow-y-auto`,children:i.jsx("nav",{className:"p-4 space-y-2",children:fv.map(c=>i.jsx(yo,{to:c.path,onClick:()=>l(!1),className:`block p-3 rounded-lg transition-all hover:scale-105 ${t==="dark"?"bg-purple-600/20 hover:bg-purple-600/40 text-purple-200":"bg-purple-100 hover:bg-purple-200 text-purple-900"}`,children:c.name},c.path))})}),o&&i.jsx("div",{className:"fixed inset-0 bg-black/50 z-30 top-16",onClick:()=>l(!1)})]})}const Mf=C.createContext({});function gv(t){const r=C.useRef(null);return r.current===null&&(r.current=t()),r.current}const hu=typeof window<"u",yv=hu?C.useLayoutEffect:C.useEffect,fu=C.createContext(null);function mu(t,r){t.indexOf(r)===-1&&t.push(r)}function gu(t,r){const o=t.indexOf(r);o>-1&&t.splice(o,1)}const en=(t,r,o)=>o>r?r:o<t?t:o;let yu=()=>{};const tn={},If=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function Ff(t){return typeof t=="object"&&t!==null}const Vf=t=>/^0[^.\s]+$/u.test(t);function xu(t){let r;return()=>(r===void 0&&(r=t()),r)}const Ct=t=>t,xv=(t,r)=>o=>r(t(o)),Ms=(...t)=>t.reduce(xv),Ps=(t,r,o)=>{const l=r-t;return l===0?1:(o-t)/l};class vu{constructor(){this.subscriptions=[]}add(r){return mu(this.subscriptions,r),()=>gu(this.subscriptions,r)}notify(r,o,l){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](r,o,l);else for(let h=0;h<c;h++){const p=this.subscriptions[h];p&&p(r,o,l)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ut=t=>t*1e3,St=t=>t/1e3;function Bf(t,r){return r?t*(1e3/r):0}const _f=(t,r,o)=>(((1-3*o+3*r)*t+(3*o-6*r))*t+3*r)*t,vv=1e-7,jv=12;function wv(t,r,o,l,c){let h,p,f=0;do p=r+(o-r)/2,h=_f(p,l,c)-t,h>0?o=p:r=p;while(Math.abs(h)>vv&&++f<jv);return p}function Is(t,r,o,l){if(t===r&&o===l)return Ct;const c=h=>wv(h,0,1,t,o);return h=>h===0||h===1?h:_f(c(h),r,l)}const $f=t=>r=>r<=.5?t(2*r)/2:(2-t(2*(1-r)))/2,Of=t=>r=>1-t(1-r),Uf=Is(.33,1.53,.69,.99),ju=Of(Uf),zf=$f(ju),Wf=t=>(t*=2)<1?.5*ju(t):.5*(2-Math.pow(2,-10*(t-1))),wu=t=>1-Math.sin(Math.acos(t)),Hf=Of(wu),Kf=$f(wu),kv=Is(.42,0,1,1),bv=Is(0,0,.58,1),Gf=Is(.42,0,.58,1),Sv=t=>Array.isArray(t)&&typeof t[0]!="number",Yf=t=>Array.isArray(t)&&typeof t[0]=="number",Cv={linear:Ct,easeIn:kv,easeInOut:Gf,easeOut:bv,circIn:wu,circInOut:Kf,circOut:Hf,backIn:ju,backInOut:zf,backOut:Uf,anticipate:Wf},Pv=t=>typeof t=="string",eh=t=>{if(Yf(t)){yu(t.length===4);const[r,o,l,c]=t;return Is(r,o,l,c)}else if(Pv(t))return Cv[t];return t},Ji=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Tv(t,r){let o=new Set,l=new Set,c=!1,h=!1;const p=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1};function m(y){p.has(y)&&(x.schedule(y),t()),y(f)}const x={schedule:(y,v=!1,w=!1)=>{const A=w&&c?o:l;return v&&p.add(y),A.has(y)||A.add(y),y},cancel:y=>{l.delete(y),p.delete(y)},process:y=>{if(f=y,c){h=!0;return}c=!0,[o,l]=[l,o],o.forEach(m),o.clear(),c=!1,h&&(h=!1,x.process(y))}};return x}const Nv=40;function Xf(t,r){let o=!1,l=!0;const c={delta:0,timestamp:0,isProcessing:!1},h=()=>o=!0,p=Ji.reduce((I,Q)=>(I[Q]=Tv(h),I),{}),{setup:f,read:m,resolveKeyframes:x,preUpdate:y,update:v,preRender:w,render:N,postRender:A}=p,D=()=>{const I=tn.useManualTiming?c.timestamp:performance.now();o=!1,tn.useManualTiming||(c.delta=l?1e3/60:Math.max(Math.min(I-c.timestamp,Nv),1)),c.timestamp=I,c.isProcessing=!0,f.process(c),m.process(c),x.process(c),y.process(c),v.process(c),w.process(c),N.process(c),A.process(c),c.isProcessing=!1,o&&r&&(l=!1,t(D))},R=()=>{o=!0,l=!0,c.isProcessing||t(D)};return{schedule:Ji.reduce((I,Q)=>{const W=p[Q];return I[Q]=(ne,ie=!1,Z=!1)=>(o||R(),W.schedule(ne,ie,Z)),I},{}),cancel:I=>{for(let Q=0;Q<Ji.length;Q++)p[Ji[Q]].cancel(I)},state:c,steps:p}}const{schedule:Se,cancel:Cn,state:ze,steps:kl}=Xf(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ct,!0);let no;function Ev(){no=void 0}const ut={now:()=>(no===void 0&&ut.set(ze.isProcessing||tn.useManualTiming?ze.timestamp:performance.now()),no),set:t=>{no=t,queueMicrotask(Ev)}},Qf=t=>r=>typeof r=="string"&&r.startsWith(t),Jf=Qf("--"),Rv=Qf("var(--"),ku=t=>Rv(t)?Av.test(t.split("/*")[0].trim()):!1,Av=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Er={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ts={...Er,transform:t=>en(0,1,t)},qi={...Er,default:1},ws=t=>Math.round(t*1e5)/1e5,bu=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Lv(t){return t==null}const Dv=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Su=(t,r)=>o=>!!(typeof o=="string"&&Dv.test(o)&&o.startsWith(t)||r&&!Lv(o)&&Object.prototype.hasOwnProperty.call(o,r)),qf=(t,r,o)=>l=>{if(typeof l!="string")return l;const[c,h,p,f]=l.match(bu);return{[t]:parseFloat(c),[r]:parseFloat(h),[o]:parseFloat(p),alpha:f!==void 0?parseFloat(f):1}},Mv=t=>en(0,255,t),bl={...Er,transform:t=>Math.round(Mv(t))},zn={test:Su("rgb","red"),parse:qf("red","green","blue"),transform:({red:t,green:r,blue:o,alpha:l=1})=>"rgba("+bl.transform(t)+", "+bl.transform(r)+", "+bl.transform(o)+", "+ws(Ts.transform(l))+")"};function Iv(t){let r="",o="",l="",c="";return t.length>5?(r=t.substring(1,3),o=t.substring(3,5),l=t.substring(5,7),c=t.substring(7,9)):(r=t.substring(1,2),o=t.substring(2,3),l=t.substring(3,4),c=t.substring(4,5),r+=r,o+=o,l+=l,c+=c),{red:parseInt(r,16),green:parseInt(o,16),blue:parseInt(l,16),alpha:c?parseInt(c,16)/255:1}}const _l={test:Su("#"),parse:Iv,transform:zn.transform},Fs=t=>({test:r=>typeof r=="string"&&r.endsWith(t)&&r.split(" ").length===1,parse:parseFloat,transform:r=>`${r}${t}`}),Sn=Fs("deg"),zt=Fs("%"),re=Fs("px"),Fv=Fs("vh"),Vv=Fs("vw"),th={...zt,parse:t=>zt.parse(t)/100,transform:t=>zt.transform(t*100)},vr={test:Su("hsl","hue"),parse:qf("hue","saturation","lightness"),transform:({hue:t,saturation:r,lightness:o,alpha:l=1})=>"hsla("+Math.round(t)+", "+zt.transform(ws(r))+", "+zt.transform(ws(o))+", "+ws(Ts.transform(l))+")"},Me={test:t=>zn.test(t)||_l.test(t)||vr.test(t),parse:t=>zn.test(t)?zn.parse(t):vr.test(t)?vr.parse(t):_l.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?zn.transform(t):vr.transform(t),getAnimatableNone:t=>{const r=Me.parse(t);return r.alpha=0,Me.transform(r)}},Bv=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function _v(t){return isNaN(t)&&typeof t=="string"&&(t.match(bu)?.length||0)+(t.match(Bv)?.length||0)>0}const Zf="number",em="color",$v="var",Ov="var(",nh="${}",Uv=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ns(t){const r=t.toString(),o=[],l={color:[],number:[],var:[]},c=[];let h=0;const f=r.replace(Uv,m=>(Me.test(m)?(l.color.push(h),c.push(em),o.push(Me.parse(m))):m.startsWith(Ov)?(l.var.push(h),c.push($v),o.push(m)):(l.number.push(h),c.push(Zf),o.push(parseFloat(m))),++h,nh)).split(nh);return{values:o,split:f,indexes:l,types:c}}function tm(t){return Ns(t).values}function nm(t){const{split:r,types:o}=Ns(t),l=r.length;return c=>{let h="";for(let p=0;p<l;p++)if(h+=r[p],c[p]!==void 0){const f=o[p];f===Zf?h+=ws(c[p]):f===em?h+=Me.transform(c[p]):h+=c[p]}return h}}const zv=t=>typeof t=="number"?0:Me.test(t)?Me.getAnimatableNone(t):t;function Wv(t){const r=tm(t);return nm(t)(r.map(zv))}const Pn={test:_v,parse:tm,createTransformer:nm,getAnimatableNone:Wv};function Sl(t,r,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?t+(r-t)*6*o:o<1/2?r:o<2/3?t+(r-t)*(2/3-o)*6:t}function Hv({hue:t,saturation:r,lightness:o,alpha:l}){t/=360,r/=100,o/=100;let c=0,h=0,p=0;if(!r)c=h=p=o;else{const f=o<.5?o*(1+r):o+r-o*r,m=2*o-f;c=Sl(m,f,t+1/3),h=Sl(m,f,t),p=Sl(m,f,t-1/3)}return{red:Math.round(c*255),green:Math.round(h*255),blue:Math.round(p*255),alpha:l}}function lo(t,r){return o=>o>0?r:t}const Te=(t,r,o)=>t+(r-t)*o,Cl=(t,r,o)=>{const l=t*t,c=o*(r*r-l)+l;return c<0?0:Math.sqrt(c)},Kv=[_l,zn,vr],Gv=t=>Kv.find(r=>r.test(t));function rh(t){const r=Gv(t);if(!r)return!1;let o=r.parse(t);return r===vr&&(o=Hv(o)),o}const sh=(t,r)=>{const o=rh(t),l=rh(r);if(!o||!l)return lo(t,r);const c={...o};return h=>(c.red=Cl(o.red,l.red,h),c.green=Cl(o.green,l.green,h),c.blue=Cl(o.blue,l.blue,h),c.alpha=Te(o.alpha,l.alpha,h),zn.transform(c))},$l=new Set(["none","hidden"]);function Yv(t,r){return $l.has(t)?o=>o<=0?t:r:o=>o>=1?r:t}function Xv(t,r){return o=>Te(t,r,o)}function Cu(t){return typeof t=="number"?Xv:typeof t=="string"?ku(t)?lo:Me.test(t)?sh:qv:Array.isArray(t)?rm:typeof t=="object"?Me.test(t)?sh:Qv:lo}function rm(t,r){const o=[...t],l=o.length,c=t.map((h,p)=>Cu(h)(h,r[p]));return h=>{for(let p=0;p<l;p++)o[p]=c[p](h);return o}}function Qv(t,r){const o={...t,...r},l={};for(const c in o)t[c]!==void 0&&r[c]!==void 0&&(l[c]=Cu(t[c])(t[c],r[c]));return c=>{for(const h in l)o[h]=l[h](c);return o}}function Jv(t,r){const o=[],l={color:0,var:0,number:0};for(let c=0;c<r.values.length;c++){const h=r.types[c],p=t.indexes[h][l[h]],f=t.values[p]??0;o[c]=f,l[h]++}return o}const qv=(t,r)=>{const o=Pn.createTransformer(r),l=Ns(t),c=Ns(r);return l.indexes.var.length===c.indexes.var.length&&l.indexes.color.length===c.indexes.color.length&&l.indexes.number.length>=c.indexes.number.length?$l.has(t)&&!c.values.length||$l.has(r)&&!l.values.length?Yv(t,r):Ms(rm(Jv(l,c),c.values),o):lo(t,r)};function sm(t,r,o){return typeof t=="number"&&typeof r=="number"&&typeof o=="number"?Te(t,r,o):Cu(t)(t,r)}const Zv=t=>{const r=({timestamp:o})=>t(o);return{start:(o=!0)=>Se.update(r,o),stop:()=>Cn(r),now:()=>ze.isProcessing?ze.timestamp:ut.now()}},im=(t,r,o=10)=>{let l="";const c=Math.max(Math.round(r/o),2);for(let h=0;h<c;h++)l+=Math.round(t(h/(c-1))*1e4)/1e4+", ";return`linear(${l.substring(0,l.length-2)})`},uo=2e4;function Pu(t){let r=0;const o=50;let l=t.next(r);for(;!l.done&&r<uo;)r+=o,l=t.next(r);return r>=uo?1/0:r}function ej(t,r=100,o){const l=o({...t,keyframes:[0,r]}),c=Math.min(Pu(l),uo);return{type:"keyframes",ease:h=>l.next(c*h).value/r,duration:St(c)}}const tj=5;function om(t,r,o){const l=Math.max(r-tj,0);return Bf(o-t(l),r-l)}const Re={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Pl=.001;function nj({duration:t=Re.duration,bounce:r=Re.bounce,velocity:o=Re.velocity,mass:l=Re.mass}){let c,h,p=1-r;p=en(Re.minDamping,Re.maxDamping,p),t=en(Re.minDuration,Re.maxDuration,St(t)),p<1?(c=x=>{const y=x*p,v=y*t,w=y-o,N=Ol(x,p),A=Math.exp(-v);return Pl-w/N*A},h=x=>{const v=x*p*t,w=v*o+o,N=Math.pow(p,2)*Math.pow(x,2)*t,A=Math.exp(-v),D=Ol(Math.pow(x,2),p);return(-c(x)+Pl>0?-1:1)*((w-N)*A)/D}):(c=x=>{const y=Math.exp(-x*t),v=(x-o)*t+1;return-Pl+y*v},h=x=>{const y=Math.exp(-x*t),v=(o-x)*(t*t);return y*v});const f=5/t,m=sj(c,h,f);if(t=Ut(t),isNaN(m))return{stiffness:Re.stiffness,damping:Re.damping,duration:t};{const x=Math.pow(m,2)*l;return{stiffness:x,damping:p*2*Math.sqrt(l*x),duration:t}}}const rj=12;function sj(t,r,o){let l=o;for(let c=1;c<rj;c++)l=l-t(l)/r(l);return l}function Ol(t,r){return t*Math.sqrt(1-r*r)}const ij=["duration","bounce"],oj=["stiffness","damping","mass"];function ih(t,r){return r.some(o=>t[o]!==void 0)}function aj(t){let r={velocity:Re.velocity,stiffness:Re.stiffness,damping:Re.damping,mass:Re.mass,isResolvedFromDuration:!1,...t};if(!ih(t,oj)&&ih(t,ij))if(t.visualDuration){const o=t.visualDuration,l=2*Math.PI/(o*1.2),c=l*l,h=2*en(.05,1,1-(t.bounce||0))*Math.sqrt(c);r={...r,mass:Re.mass,stiffness:c,damping:h}}else{const o=nj(t);r={...r,...o,mass:Re.mass},r.isResolvedFromDuration=!0}return r}function co(t=Re.visualDuration,r=Re.bounce){const o=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:r}:t;let{restSpeed:l,restDelta:c}=o;const h=o.keyframes[0],p=o.keyframes[o.keyframes.length-1],f={done:!1,value:h},{stiffness:m,damping:x,mass:y,duration:v,velocity:w,isResolvedFromDuration:N}=aj({...o,velocity:-St(o.velocity||0)}),A=w||0,D=x/(2*Math.sqrt(m*y)),R=p-h,L=St(Math.sqrt(m/y)),M=Math.abs(R)<5;l||(l=M?Re.restSpeed.granular:Re.restSpeed.default),c||(c=M?Re.restDelta.granular:Re.restDelta.default);let I;if(D<1){const W=Ol(L,D);I=ne=>{const ie=Math.exp(-D*L*ne);return p-ie*((A+D*L*R)/W*Math.sin(W*ne)+R*Math.cos(W*ne))}}else if(D===1)I=W=>p-Math.exp(-L*W)*(R+(A+L*R)*W);else{const W=L*Math.sqrt(D*D-1);I=ne=>{const ie=Math.exp(-D*L*ne),Z=Math.min(W*ne,300);return p-ie*((A+D*L*R)*Math.sinh(Z)+W*R*Math.cosh(Z))/W}}const Q={calculatedDuration:N&&v||null,next:W=>{const ne=I(W);if(N)f.done=W>=v;else{let ie=W===0?A:0;D<1&&(ie=W===0?Ut(A):om(I,W,ne));const Z=Math.abs(ie)<=l,fe=Math.abs(p-ne)<=c;f.done=Z&&fe}return f.value=f.done?p:ne,f},toString:()=>{const W=Math.min(Pu(Q),uo),ne=im(ie=>Q.next(W*ie).value,W,30);return W+"ms "+ne},toTransition:()=>{}};return Q}co.applyToOptions=t=>{const r=ej(t,100,co);return t.ease=r.ease,t.duration=Ut(r.duration),t.type="keyframes",t};function Ul({keyframes:t,velocity:r=0,power:o=.8,timeConstant:l=325,bounceDamping:c=10,bounceStiffness:h=500,modifyTarget:p,min:f,max:m,restDelta:x=.5,restSpeed:y}){const v=t[0],w={done:!1,value:v},N=Z=>f!==void 0&&Z<f||m!==void 0&&Z>m,A=Z=>f===void 0?m:m===void 0||Math.abs(f-Z)<Math.abs(m-Z)?f:m;let D=o*r;const R=v+D,L=p===void 0?R:p(R);L!==R&&(D=L-v);const M=Z=>-D*Math.exp(-Z/l),I=Z=>L+M(Z),Q=Z=>{const fe=M(Z),ye=I(Z);w.done=Math.abs(fe)<=x,w.value=w.done?L:ye};let W,ne;const ie=Z=>{N(w.value)&&(W=Z,ne=co({keyframes:[w.value,A(w.value)],velocity:om(I,Z,w.value),damping:c,stiffness:h,restDelta:x,restSpeed:y}))};return ie(0),{calculatedDuration:null,next:Z=>{let fe=!1;return!ne&&W===void 0&&(fe=!0,Q(Z),ie(Z)),W!==void 0&&Z>=W?ne.next(Z-W):(!fe&&Q(Z),w)}}}function lj(t,r,o){const l=[],c=o||tn.mix||sm,h=t.length-1;for(let p=0;p<h;p++){let f=c(t[p],t[p+1]);if(r){const m=Array.isArray(r)?r[p]||Ct:r;f=Ms(m,f)}l.push(f)}return l}function uj(t,r,{clamp:o=!0,ease:l,mixer:c}={}){const h=t.length;if(yu(h===r.length),h===1)return()=>r[0];if(h===2&&r[0]===r[1])return()=>r[1];const p=t[0]===t[1];t[0]>t[h-1]&&(t=[...t].reverse(),r=[...r].reverse());const f=lj(r,l,c),m=f.length,x=y=>{if(p&&y<t[0])return r[0];let v=0;if(m>1)for(;v<t.length-2&&!(y<t[v+1]);v++);const w=Ps(t[v],t[v+1],y);return f[v](w)};return o?y=>x(en(t[0],t[h-1],y)):x}function cj(t,r){const o=t[t.length-1];for(let l=1;l<=r;l++){const c=Ps(0,r,l);t.push(Te(o,1,c))}}function dj(t){const r=[0];return cj(r,t.length-1),r}function pj(t,r){return t.map(o=>o*r)}function hj(t,r){return t.map(()=>r||Gf).splice(0,t.length-1)}function ks({duration:t=300,keyframes:r,times:o,ease:l="easeInOut"}){const c=Sv(l)?l.map(eh):eh(l),h={done:!1,value:r[0]},p=pj(o&&o.length===r.length?o:dj(r),t),f=uj(p,r,{ease:Array.isArray(c)?c:hj(r,c)});return{calculatedDuration:t,next:m=>(h.value=f(m),h.done=m>=t,h)}}const fj=t=>t!==null;function Tu(t,{repeat:r,repeatType:o="loop"},l,c=1){const h=t.filter(fj),f=c<0||r&&o!=="loop"&&r%2===1?0:h.length-1;return!f||l===void 0?h[f]:l}const mj={decay:Ul,inertia:Ul,tween:ks,keyframes:ks,spring:co};function am(t){typeof t.type=="string"&&(t.type=mj[t.type])}class Nu{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(r=>{this.resolve=r})}notifyFinished(){this.resolve()}then(r,o){return this.finished.then(r,o)}}const gj=t=>t/100;class Eu extends Nu{constructor(r){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:o}=this.options;o&&o.updatedAt!==ut.now()&&this.tick(ut.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=r,this.initAnimation(),this.play(),r.autoplay===!1&&this.pause()}initAnimation(){const{options:r}=this;am(r);const{type:o=ks,repeat:l=0,repeatDelay:c=0,repeatType:h,velocity:p=0}=r;let{keyframes:f}=r;const m=o||ks;m!==ks&&typeof f[0]!="number"&&(this.mixKeyframes=Ms(gj,sm(f[0],f[1])),f=[0,100]);const x=m({...r,keyframes:f});h==="mirror"&&(this.mirroredGenerator=m({...r,keyframes:[...f].reverse(),velocity:-p})),x.calculatedDuration===null&&(x.calculatedDuration=Pu(x));const{calculatedDuration:y}=x;this.calculatedDuration=y,this.resolvedDuration=y+c,this.totalDuration=this.resolvedDuration*(l+1)-c,this.generator=x}updateTime(r){const o=Math.round(r-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=o}tick(r,o=!1){const{generator:l,totalDuration:c,mixKeyframes:h,mirroredGenerator:p,resolvedDuration:f,calculatedDuration:m}=this;if(this.startTime===null)return l.next(0);const{delay:x=0,keyframes:y,repeat:v,repeatType:w,repeatDelay:N,type:A,onUpdate:D,finalKeyframe:R}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,r):this.speed<0&&(this.startTime=Math.min(r-c/this.speed,this.startTime)),o?this.currentTime=r:this.updateTime(r);const L=this.currentTime-x*(this.playbackSpeed>=0?1:-1),M=this.playbackSpeed>=0?L<0:L>c;this.currentTime=Math.max(L,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let I=this.currentTime,Q=l;if(v){const Z=Math.min(this.currentTime,c)/f;let fe=Math.floor(Z),ye=Z%1;!ye&&Z>=1&&(ye=1),ye===1&&fe--,fe=Math.min(fe,v+1),!!(fe%2)&&(w==="reverse"?(ye=1-ye,N&&(ye-=N/f)):w==="mirror"&&(Q=p)),I=en(0,1,ye)*f}const W=M?{done:!1,value:y[0]}:Q.next(I);h&&(W.value=h(W.value));let{done:ne}=W;!M&&m!==null&&(ne=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const ie=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&ne);return ie&&A!==Ul&&(W.value=Tu(y,this.options,R,this.speed)),D&&D(W.value),ie&&this.finish(),W}then(r,o){return this.finished.then(r,o)}get duration(){return St(this.calculatedDuration)}get iterationDuration(){const{delay:r=0}=this.options||{};return this.duration+St(r)}get time(){return St(this.currentTime)}set time(r){r=Ut(r),this.currentTime=r,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=r:this.driver&&(this.startTime=this.driver.now()-r/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(r){this.updateTime(ut.now());const o=this.playbackSpeed!==r;this.playbackSpeed=r,o&&(this.time=St(this.currentTime))}play(){if(this.isStopped)return;const{driver:r=Zv,startTime:o}=this.options;this.driver||(this.driver=r(c=>this.tick(c))),this.options.onPlay?.();const l=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=l):this.holdTime!==null?this.startTime=l-this.holdTime:this.startTime||(this.startTime=o??l),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ut.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(r){return this.startTime=0,this.tick(r,!0)}attachTimeline(r){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),r.observe(this)}}function yj(t){for(let r=1;r<t.length;r++)t[r]??(t[r]=t[r-1])}const Wn=t=>t*180/Math.PI,zl=t=>{const r=Wn(Math.atan2(t[1],t[0]));return Wl(r)},xj={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:zl,rotateZ:zl,skewX:t=>Wn(Math.atan(t[1])),skewY:t=>Wn(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Wl=t=>(t=t%360,t<0&&(t+=360),t),oh=zl,ah=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),lh=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),vj={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:ah,scaleY:lh,scale:t=>(ah(t)+lh(t))/2,rotateX:t=>Wl(Wn(Math.atan2(t[6],t[5]))),rotateY:t=>Wl(Wn(Math.atan2(-t[2],t[0]))),rotateZ:oh,rotate:oh,skewX:t=>Wn(Math.atan(t[4])),skewY:t=>Wn(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Hl(t){return t.includes("scale")?1:0}function Kl(t,r){if(!t||t==="none")return Hl(r);const o=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let l,c;if(o)l=vj,c=o;else{const f=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);l=xj,c=f}if(!c)return Hl(r);const h=l[r],p=c[1].split(",").map(wj);return typeof h=="function"?h(p):p[h]}const jj=(t,r)=>{const{transform:o="none"}=getComputedStyle(t);return Kl(o,r)};function wj(t){return parseFloat(t.trim())}const Rr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ar=new Set(Rr),uh=t=>t===Er||t===re,kj=new Set(["x","y","z"]),bj=Rr.filter(t=>!kj.has(t));function Sj(t){const r=[];return bj.forEach(o=>{const l=t.getValue(o);l!==void 0&&(r.push([o,l.get()]),l.set(o.startsWith("scale")?1:0))}),r}const Hn={width:({x:t},{paddingLeft:r="0",paddingRight:o="0"})=>t.max-t.min-parseFloat(r)-parseFloat(o),height:({y:t},{paddingTop:r="0",paddingBottom:o="0"})=>t.max-t.min-parseFloat(r)-parseFloat(o),top:(t,{top:r})=>parseFloat(r),left:(t,{left:r})=>parseFloat(r),bottom:({y:t},{top:r})=>parseFloat(r)+(t.max-t.min),right:({x:t},{left:r})=>parseFloat(r)+(t.max-t.min),x:(t,{transform:r})=>Kl(r,"x"),y:(t,{transform:r})=>Kl(r,"y")};Hn.translateX=Hn.x;Hn.translateY=Hn.y;const Kn=new Set;let Gl=!1,Yl=!1,Xl=!1;function lm(){if(Yl){const t=Array.from(Kn).filter(l=>l.needsMeasurement),r=new Set(t.map(l=>l.element)),o=new Map;r.forEach(l=>{const c=Sj(l);c.length&&(o.set(l,c),l.render())}),t.forEach(l=>l.measureInitialState()),r.forEach(l=>{l.render();const c=o.get(l);c&&c.forEach(([h,p])=>{l.getValue(h)?.set(p)})}),t.forEach(l=>l.measureEndState()),t.forEach(l=>{l.suspendedScrollY!==void 0&&window.scrollTo(0,l.suspendedScrollY)})}Yl=!1,Gl=!1,Kn.forEach(t=>t.complete(Xl)),Kn.clear()}function um(){Kn.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Yl=!0)})}function Cj(){Xl=!0,um(),lm(),Xl=!1}class Ru{constructor(r,o,l,c,h,p=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...r],this.onComplete=o,this.name=l,this.motionValue=c,this.element=h,this.isAsync=p}scheduleResolve(){this.state="scheduled",this.isAsync?(Kn.add(this),Gl||(Gl=!0,Se.read(um),Se.resolveKeyframes(lm))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:r,name:o,element:l,motionValue:c}=this;if(r[0]===null){const h=c?.get(),p=r[r.length-1];if(h!==void 0)r[0]=h;else if(l&&o){const f=l.readValue(o,p);f!=null&&(r[0]=f)}r[0]===void 0&&(r[0]=p),c&&h===void 0&&c.set(r[0])}yj(r)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(r=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,r),Kn.delete(this)}cancel(){this.state==="scheduled"&&(Kn.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const Pj=t=>t.startsWith("--");function Tj(t,r,o){Pj(r)?t.style.setProperty(r,o):t.style[r]=o}const Nj=xu(()=>window.ScrollTimeline!==void 0),Ej={};function Rj(t,r){const o=xu(t);return()=>Ej[r]??o()}const cm=Rj(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),js=([t,r,o,l])=>`cubic-bezier(${t}, ${r}, ${o}, ${l})`,ch={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:js([0,.65,.55,1]),circOut:js([.55,0,1,.45]),backIn:js([.31,.01,.66,-.59]),backOut:js([.33,1.53,.69,.99])};function dm(t,r){if(t)return typeof t=="function"?cm()?im(t,r):"ease-out":Yf(t)?js(t):Array.isArray(t)?t.map(o=>dm(o,r)||ch.easeOut):ch[t]}function Aj(t,r,o,{delay:l=0,duration:c=300,repeat:h=0,repeatType:p="loop",ease:f="easeOut",times:m}={},x=void 0){const y={[r]:o};m&&(y.offset=m);const v=dm(f,c);Array.isArray(v)&&(y.easing=v);const w={delay:l,duration:c,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:h+1,direction:p==="reverse"?"alternate":"normal"};return x&&(w.pseudoElement=x),t.animate(y,w)}function pm(t){return typeof t=="function"&&"applyToOptions"in t}function Lj({type:t,...r}){return pm(t)&&cm()?t.applyToOptions(r):(r.duration??(r.duration=300),r.ease??(r.ease="easeOut"),r)}class Dj extends Nu{constructor(r){if(super(),this.finishedTime=null,this.isStopped=!1,!r)return;const{element:o,name:l,keyframes:c,pseudoElement:h,allowFlatten:p=!1,finalKeyframe:f,onComplete:m}=r;this.isPseudoElement=!!h,this.allowFlatten=p,this.options=r,yu(typeof r.type!="string");const x=Lj(r);this.animation=Aj(o,l,c,x,h),x.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!h){const y=Tu(c,this.options,f,this.speed);this.updateMotionValue?this.updateMotionValue(y):Tj(o,l,y),this.animation.cancel()}m?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:r}=this;r==="idle"||r==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const r=this.animation.effect?.getComputedTiming?.().duration||0;return St(Number(r))}get iterationDuration(){const{delay:r=0}=this.options||{};return this.duration+St(r)}get time(){return St(Number(this.animation.currentTime)||0)}set time(r){this.finishedTime=null,this.animation.currentTime=Ut(r)}get speed(){return this.animation.playbackRate}set speed(r){r<0&&(this.finishedTime=null),this.animation.playbackRate=r}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(r){this.animation.startTime=r}attachTimeline({timeline:r,observe:o}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,r&&Nj()?(this.animation.timeline=r,Ct):o(this)}}const hm={anticipate:Wf,backInOut:zf,circInOut:Kf};function Mj(t){return t in hm}function Ij(t){typeof t.ease=="string"&&Mj(t.ease)&&(t.ease=hm[t.ease])}const dh=10;class Fj extends Dj{constructor(r){Ij(r),am(r),super(r),r.startTime&&(this.startTime=r.startTime),this.options=r}updateMotionValue(r){const{motionValue:o,onUpdate:l,onComplete:c,element:h,...p}=this.options;if(!o)return;if(r!==void 0){o.set(r);return}const f=new Eu({...p,autoplay:!1}),m=Ut(this.finishedTime??this.time);o.setWithVelocity(f.sample(m-dh).value,f.sample(m).value,dh),f.stop()}}const ph=(t,r)=>r==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Pn.test(t)||t==="0")&&!t.startsWith("url("));function Vj(t){const r=t[0];if(t.length===1)return!0;for(let o=0;o<t.length;o++)if(t[o]!==r)return!0}function Bj(t,r,o,l){const c=t[0];if(c===null)return!1;if(r==="display"||r==="visibility")return!0;const h=t[t.length-1],p=ph(c,r),f=ph(h,r);return!p||!f?!1:Vj(t)||(o==="spring"||pm(o))&&l}function Ql(t){t.duration=0,t.type="keyframes"}const _j=new Set(["opacity","clipPath","filter","transform"]),$j=xu(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function Oj(t){const{motionValue:r,name:o,repeatDelay:l,repeatType:c,damping:h,type:p}=t;if(!(r?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:m,transformTemplate:x}=r.owner.getProps();return $j()&&o&&_j.has(o)&&(o!=="transform"||!x)&&!m&&!l&&c!=="mirror"&&h!==0&&p!=="inertia"}const Uj=40;class zj extends Nu{constructor({autoplay:r=!0,delay:o=0,type:l="keyframes",repeat:c=0,repeatDelay:h=0,repeatType:p="loop",keyframes:f,name:m,motionValue:x,element:y,...v}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=ut.now();const w={autoplay:r,delay:o,type:l,repeat:c,repeatDelay:h,repeatType:p,name:m,motionValue:x,element:y,...v},N=y?.KeyframeResolver||Ru;this.keyframeResolver=new N(f,(A,D,R)=>this.onKeyframesResolved(A,D,w,!R),m,x,y),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(r,o,l,c){this.keyframeResolver=void 0;const{name:h,type:p,velocity:f,delay:m,isHandoff:x,onUpdate:y}=l;this.resolvedAt=ut.now(),Bj(r,h,p,f)||((tn.instantAnimations||!m)&&y?.(Tu(r,l,o)),r[0]=r[r.length-1],Ql(l),l.repeat=0);const w={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>Uj?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:o,...l,keyframes:r},N=!x&&Oj(w)?new Fj({...w,element:w.motionValue.owner.current}):new Eu(w);N.finished.then(()=>this.notifyFinished()).catch(Ct),this.pendingTimeline&&(this.stopTimeline=N.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=N}get finished(){return this._animation?this.animation.finished:this._finished}then(r,o){return this.finished.finally(r).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),Cj()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(r){this.animation.time=r}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(r){this.animation.speed=r}get startTime(){return this.animation.startTime}attachTimeline(r){return this._animation?this.stopTimeline=this.animation.attachTimeline(r):this.pendingTimeline=r,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const Wj=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Hj(t){const r=Wj.exec(t);if(!r)return[,];const[,o,l,c]=r;return[`--${o??l}`,c]}function fm(t,r,o=1){const[l,c]=Hj(t);if(!l)return;const h=window.getComputedStyle(r).getPropertyValue(l);if(h){const p=h.trim();return If(p)?parseFloat(p):p}return ku(c)?fm(c,r,o+1):c}function Au(t,r){return t?.[r]??t?.default??t}const mm=new Set(["width","height","top","left","right","bottom",...Rr]),Kj={test:t=>t==="auto",parse:t=>t},gm=t=>r=>r.test(t),ym=[Er,re,zt,Sn,Vv,Fv,Kj],hh=t=>ym.find(gm(t));function Gj(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||Vf(t):!0}const Yj=new Set(["brightness","contrast","saturate","opacity"]);function Xj(t){const[r,o]=t.slice(0,-1).split("(");if(r==="drop-shadow")return t;const[l]=o.match(bu)||[];if(!l)return t;const c=o.replace(l,"");let h=Yj.has(r)?1:0;return l!==o&&(h*=100),r+"("+h+c+")"}const Qj=/\b([a-z-]*)\(.*?\)/gu,Jl={...Pn,getAnimatableNone:t=>{const r=t.match(Qj);return r?r.map(Xj).join(" "):t}},fh={...Er,transform:Math.round},Jj={rotate:Sn,rotateX:Sn,rotateY:Sn,rotateZ:Sn,scale:qi,scaleX:qi,scaleY:qi,scaleZ:qi,skew:Sn,skewX:Sn,skewY:Sn,distance:re,translateX:re,translateY:re,translateZ:re,x:re,y:re,z:re,perspective:re,transformPerspective:re,opacity:Ts,originX:th,originY:th,originZ:re},Lu={borderWidth:re,borderTopWidth:re,borderRightWidth:re,borderBottomWidth:re,borderLeftWidth:re,borderRadius:re,radius:re,borderTopLeftRadius:re,borderTopRightRadius:re,borderBottomRightRadius:re,borderBottomLeftRadius:re,width:re,maxWidth:re,height:re,maxHeight:re,top:re,right:re,bottom:re,left:re,padding:re,paddingTop:re,paddingRight:re,paddingBottom:re,paddingLeft:re,margin:re,marginTop:re,marginRight:re,marginBottom:re,marginLeft:re,backgroundPositionX:re,backgroundPositionY:re,...Jj,zIndex:fh,fillOpacity:Ts,strokeOpacity:Ts,numOctaves:fh},qj={...Lu,color:Me,backgroundColor:Me,outlineColor:Me,fill:Me,stroke:Me,borderColor:Me,borderTopColor:Me,borderRightColor:Me,borderBottomColor:Me,borderLeftColor:Me,filter:Jl,WebkitFilter:Jl},xm=t=>qj[t];function vm(t,r){let o=xm(t);return o!==Jl&&(o=Pn),o.getAnimatableNone?o.getAnimatableNone(r):void 0}const Zj=new Set(["auto","none","0"]);function e1(t,r,o){let l=0,c;for(;l<t.length&&!c;){const h=t[l];typeof h=="string"&&!Zj.has(h)&&Ns(h).values.length&&(c=t[l]),l++}if(c&&o)for(const h of r)t[h]=vm(o,c)}class t1 extends Ru{constructor(r,o,l,c,h){super(r,o,l,c,h,!0)}readKeyframes(){const{unresolvedKeyframes:r,element:o,name:l}=this;if(!o||!o.current)return;super.readKeyframes();for(let m=0;m<r.length;m++){let x=r[m];if(typeof x=="string"&&(x=x.trim(),ku(x))){const y=fm(x,o.current);y!==void 0&&(r[m]=y),m===r.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!mm.has(l)||r.length!==2)return;const[c,h]=r,p=hh(c),f=hh(h);if(p!==f)if(uh(p)&&uh(f))for(let m=0;m<r.length;m++){const x=r[m];typeof x=="string"&&(r[m]=parseFloat(x))}else Hn[l]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:r,name:o}=this,l=[];for(let c=0;c<r.length;c++)(r[c]===null||Gj(r[c]))&&l.push(c);l.length&&e1(r,l,o)}measureInitialState(){const{element:r,unresolvedKeyframes:o,name:l}=this;if(!r||!r.current)return;l==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Hn[l](r.measureViewportBox(),window.getComputedStyle(r.current)),o[0]=this.measuredOrigin;const c=o[o.length-1];c!==void 0&&r.getValue(l,c).jump(c,!1)}measureEndState(){const{element:r,name:o,unresolvedKeyframes:l}=this;if(!r||!r.current)return;const c=r.getValue(o);c&&c.jump(this.measuredOrigin,!1);const h=l.length-1,p=l[h];l[h]=Hn[o](r.measureViewportBox(),window.getComputedStyle(r.current)),p!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=p),this.removedTransforms?.length&&this.removedTransforms.forEach(([f,m])=>{r.getValue(f).set(m)}),this.resolveNoneKeyframes()}}function n1(t,r,o){if(t instanceof EventTarget)return[t];if(typeof t=="string"){let l=document;const c=o?.[t]??l.querySelectorAll(t);return c?Array.from(c):[]}return Array.from(t)}const jm=(t,r)=>r&&typeof t=="number"?r.transform(t):t;function r1(t){return Ff(t)&&"offsetHeight"in t}const mh=30,s1=t=>!isNaN(parseFloat(t));class i1{constructor(r,o={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=l=>{const c=ut.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(l),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const h of this.dependents)h.dirty()},this.hasAnimated=!1,this.setCurrent(r),this.owner=o.owner}setCurrent(r){this.current=r,this.updatedAt=ut.now(),this.canTrackVelocity===null&&r!==void 0&&(this.canTrackVelocity=s1(this.current))}setPrevFrameValue(r=this.current){this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt}onChange(r){return this.on("change",r)}on(r,o){this.events[r]||(this.events[r]=new vu);const l=this.events[r].add(o);return r==="change"?()=>{l(),Se.read(()=>{this.events.change.getSize()||this.stop()})}:l}clearListeners(){for(const r in this.events)this.events[r].clear()}attach(r,o){this.passiveEffect=r,this.stopPassiveEffect=o}set(r){this.passiveEffect?this.passiveEffect(r,this.updateAndNotify):this.updateAndNotify(r)}setWithVelocity(r,o,l){this.set(o),this.prev=void 0,this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt-l}jump(r,o=!0){this.updateAndNotify(r),this.prev=r,this.prevUpdatedAt=this.prevFrameValue=void 0,o&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(r){this.dependents||(this.dependents=new Set),this.dependents.add(r)}removeDependent(r){this.dependents&&this.dependents.delete(r)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const r=ut.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||r-this.updatedAt>mh)return 0;const o=Math.min(this.updatedAt-this.prevUpdatedAt,mh);return Bf(parseFloat(this.current)-parseFloat(this.prevFrameValue),o)}start(r){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=r(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Cr(t,r){return new i1(t,r)}const{schedule:Du}=Xf(queueMicrotask,!1),It={x:!1,y:!1};function wm(){return It.x||It.y}function o1(t){return t==="x"||t==="y"?It[t]?null:(It[t]=!0,()=>{It[t]=!1}):It.x||It.y?null:(It.x=It.y=!0,()=>{It.x=It.y=!1})}function km(t,r){const o=n1(t),l=new AbortController,c={passive:!0,...r,signal:l.signal};return[o,c,()=>l.abort()]}function gh(t){return!(t.pointerType==="touch"||wm())}function a1(t,r,o={}){const[l,c,h]=km(t,o),p=f=>{if(!gh(f))return;const{target:m}=f,x=r(m,f);if(typeof x!="function"||!m)return;const y=v=>{gh(v)&&(x(v),m.removeEventListener("pointerleave",y))};m.addEventListener("pointerleave",y,c)};return l.forEach(f=>{f.addEventListener("pointerenter",p,c)}),h}const bm=(t,r)=>r?t===r?!0:bm(t,r.parentElement):!1,Mu=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,l1=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function u1(t){return l1.has(t.tagName)||t.tabIndex!==-1}const ro=new WeakSet;function yh(t){return r=>{r.key==="Enter"&&t(r)}}function Tl(t,r){t.dispatchEvent(new PointerEvent("pointer"+r,{isPrimary:!0,bubbles:!0}))}const c1=(t,r)=>{const o=t.currentTarget;if(!o)return;const l=yh(()=>{if(ro.has(o))return;Tl(o,"down");const c=yh(()=>{Tl(o,"up")}),h=()=>Tl(o,"cancel");o.addEventListener("keyup",c,r),o.addEventListener("blur",h,r)});o.addEventListener("keydown",l,r),o.addEventListener("blur",()=>o.removeEventListener("keydown",l),r)};function xh(t){return Mu(t)&&!wm()}function d1(t,r,o={}){const[l,c,h]=km(t,o),p=f=>{const m=f.currentTarget;if(!xh(f))return;ro.add(m);const x=r(m,f),y=(N,A)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",w),ro.has(m)&&ro.delete(m),xh(N)&&typeof x=="function"&&x(N,{success:A})},v=N=>{y(N,m===window||m===document||o.useGlobalTarget||bm(m,N.target))},w=N=>{y(N,!1)};window.addEventListener("pointerup",v,c),window.addEventListener("pointercancel",w,c)};return l.forEach(f=>{(o.useGlobalTarget?window:f).addEventListener("pointerdown",p,c),r1(f)&&(f.addEventListener("focus",x=>c1(x,c)),!u1(f)&&!f.hasAttribute("tabindex")&&(f.tabIndex=0))}),h}function Sm(t){return Ff(t)&&"ownerSVGElement"in t}function p1(t){return Sm(t)&&t.tagName==="svg"}const Xe=t=>!!(t&&t.getVelocity),h1=[...ym,Me,Pn],f1=t=>h1.find(gm(t)),Cm=C.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function m1(t=!0){const r=C.useContext(fu);if(r===null)return[!0,null];const{isPresent:o,onExitComplete:l,register:c}=r,h=C.useId();C.useEffect(()=>{if(t)return c(h)},[t]);const p=C.useCallback(()=>t&&l&&l(h),[h,l,t]);return!o&&l?[!1,p]:[!0]}const Pm=C.createContext({strict:!1}),vh={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Pr={};for(const t in vh)Pr[t]={isEnabled:r=>vh[t].some(o=>!!r[o])};function g1(t){for(const r in t)Pr[r]={...Pr[r],...t[r]}}const y1=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function po(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||y1.has(t)}let Tm=t=>!po(t);function x1(t){typeof t=="function"&&(Tm=r=>r.startsWith("on")?!po(r):t(r))}try{x1(require("@emotion/is-prop-valid").default)}catch{}function v1(t,r,o){const l={};for(const c in t)c==="values"&&typeof t.values=="object"||(Tm(c)||o===!0&&po(c)||!r&&!po(c)||t.draggable&&c.startsWith("onDrag"))&&(l[c]=t[c]);return l}const xo=C.createContext({});function vo(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Es(t){return typeof t=="string"||Array.isArray(t)}const Iu=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Fu=["initial",...Iu];function jo(t){return vo(t.animate)||Fu.some(r=>Es(t[r]))}function Nm(t){return!!(jo(t)||t.variants)}function j1(t,r){if(jo(t)){const{initial:o,animate:l}=t;return{initial:o===!1||Es(o)?o:void 0,animate:Es(l)?l:void 0}}return t.inherit!==!1?r:{}}function w1(t){const{initial:r,animate:o}=j1(t,C.useContext(xo));return C.useMemo(()=>({initial:r,animate:o}),[jh(r),jh(o)])}function jh(t){return Array.isArray(t)?t.join(" "):t}function wh(t,r){return r.max===r.min?0:t/(r.max-r.min)*100}const vs={correct:(t,r)=>{if(!r.target)return t;if(typeof t=="string")if(re.test(t))t=parseFloat(t);else return t;const o=wh(t,r.target.x),l=wh(t,r.target.y);return`${o}% ${l}%`}},k1={correct:(t,{treeScale:r,projectionDelta:o})=>{const l=t,c=Pn.parse(t);if(c.length>5)return l;const h=Pn.createTransformer(t),p=typeof c[0]!="number"?1:0,f=o.x.scale*r.x,m=o.y.scale*r.y;c[0+p]/=f,c[1+p]/=m;const x=Te(f,m,.5);return typeof c[2+p]=="number"&&(c[2+p]/=x),typeof c[3+p]=="number"&&(c[3+p]/=x),h(c)}},ql={borderRadius:{...vs,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:vs,borderTopRightRadius:vs,borderBottomLeftRadius:vs,borderBottomRightRadius:vs,boxShadow:k1};function Em(t,{layout:r,layoutId:o}){return Ar.has(t)||t.startsWith("origin")||(r||o!==void 0)&&(!!ql[t]||t==="opacity")}const b1={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},S1=Rr.length;function C1(t,r,o){let l="",c=!0;for(let h=0;h<S1;h++){const p=Rr[h],f=t[p];if(f===void 0)continue;let m=!0;if(typeof f=="number"?m=f===(p.startsWith("scale")?1:0):m=parseFloat(f)===0,!m||o){const x=jm(f,Lu[p]);if(!m){c=!1;const y=b1[p]||p;l+=`${y}(${x}) `}o&&(r[p]=x)}}return l=l.trim(),o?l=o(r,c?"":l):c&&(l="none"),l}function Vu(t,r,o){const{style:l,vars:c,transformOrigin:h}=t;let p=!1,f=!1;for(const m in r){const x=r[m];if(Ar.has(m)){p=!0;continue}else if(Jf(m)){c[m]=x;continue}else{const y=jm(x,Lu[m]);m.startsWith("origin")?(f=!0,h[m]=y):l[m]=y}}if(r.transform||(p||o?l.transform=C1(r,t.transform,o):l.transform&&(l.transform="none")),f){const{originX:m="50%",originY:x="50%",originZ:y=0}=h;l.transformOrigin=`${m} ${x} ${y}`}}const Bu=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Rm(t,r,o){for(const l in r)!Xe(r[l])&&!Em(l,o)&&(t[l]=r[l])}function P1({transformTemplate:t},r){return C.useMemo(()=>{const o=Bu();return Vu(o,r,t),Object.assign({},o.vars,o.style)},[r])}function T1(t,r){const o=t.style||{},l={};return Rm(l,o,t),Object.assign(l,P1(t,r)),l}function N1(t,r){const o={},l=T1(t,r);return t.drag&&t.dragListener!==!1&&(o.draggable=!1,l.userSelect=l.WebkitUserSelect=l.WebkitTouchCallout="none",l.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(o.tabIndex=0),o.style=l,o}const E1={offset:"stroke-dashoffset",array:"stroke-dasharray"},R1={offset:"strokeDashoffset",array:"strokeDasharray"};function A1(t,r,o=1,l=0,c=!0){t.pathLength=1;const h=c?E1:R1;t[h.offset]=re.transform(-l);const p=re.transform(r),f=re.transform(o);t[h.array]=`${p} ${f}`}function Am(t,{attrX:r,attrY:o,attrScale:l,pathLength:c,pathSpacing:h=1,pathOffset:p=0,...f},m,x,y){if(Vu(t,f,x),m){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:v,style:w}=t;v.transform&&(w.transform=v.transform,delete v.transform),(w.transform||v.transformOrigin)&&(w.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),w.transform&&(w.transformBox=y?.transformBox??"fill-box",delete v.transformBox),r!==void 0&&(v.x=r),o!==void 0&&(v.y=o),l!==void 0&&(v.scale=l),c!==void 0&&A1(v,c,h,p,!1)}const Lm=()=>({...Bu(),attrs:{}}),Dm=t=>typeof t=="string"&&t.toLowerCase()==="svg";function L1(t,r,o,l){const c=C.useMemo(()=>{const h=Lm();return Am(h,r,Dm(l),t.transformTemplate,t.style),{...h.attrs,style:{...h.style}}},[r]);if(t.style){const h={};Rm(h,t.style,t),c.style={...h,...c.style}}return c}const D1=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function _u(t){return typeof t!="string"||t.includes("-")?!1:!!(D1.indexOf(t)>-1||/[A-Z]/u.test(t))}function M1(t,r,o,{latestValues:l},c,h=!1){const f=(_u(t)?L1:N1)(r,l,c,t),m=v1(r,typeof t=="string",h),x=t!==C.Fragment?{...m,...f,ref:o}:{},{children:y}=r,v=C.useMemo(()=>Xe(y)?y.get():y,[y]);return C.createElement(t,{...x,children:v})}function kh(t){const r=[{},{}];return t?.values.forEach((o,l)=>{r[0][l]=o.get(),r[1][l]=o.getVelocity()}),r}function $u(t,r,o,l){if(typeof r=="function"){const[c,h]=kh(l);r=r(o!==void 0?o:t.custom,c,h)}if(typeof r=="string"&&(r=t.variants&&t.variants[r]),typeof r=="function"){const[c,h]=kh(l);r=r(o!==void 0?o:t.custom,c,h)}return r}function so(t){return Xe(t)?t.get():t}function I1({scrapeMotionValuesFromProps:t,createRenderState:r},o,l,c){return{latestValues:F1(o,l,c,t),renderState:r()}}function F1(t,r,o,l){const c={},h=l(t,{});for(const w in h)c[w]=so(h[w]);let{initial:p,animate:f}=t;const m=jo(t),x=Nm(t);r&&x&&!m&&t.inherit!==!1&&(p===void 0&&(p=r.initial),f===void 0&&(f=r.animate));let y=o?o.initial===!1:!1;y=y||p===!1;const v=y?f:p;if(v&&typeof v!="boolean"&&!vo(v)){const w=Array.isArray(v)?v:[v];for(let N=0;N<w.length;N++){const A=$u(t,w[N]);if(A){const{transitionEnd:D,transition:R,...L}=A;for(const M in L){let I=L[M];if(Array.isArray(I)){const Q=y?I.length-1:0;I=I[Q]}I!==null&&(c[M]=I)}for(const M in D)c[M]=D[M]}}}return c}const Mm=t=>(r,o)=>{const l=C.useContext(xo),c=C.useContext(fu),h=()=>I1(t,r,l,c);return o?h():gv(h)};function Ou(t,r,o){const{style:l}=t,c={};for(const h in l)(Xe(l[h])||r.style&&Xe(r.style[h])||Em(h,t)||o?.getValue(h)?.liveStyle!==void 0)&&(c[h]=l[h]);return c}const V1=Mm({scrapeMotionValuesFromProps:Ou,createRenderState:Bu});function Im(t,r,o){const l=Ou(t,r,o);for(const c in t)if(Xe(t[c])||Xe(r[c])){const h=Rr.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;l[h]=t[c]}return l}const B1=Mm({scrapeMotionValuesFromProps:Im,createRenderState:Lm}),_1=Symbol.for("motionComponentSymbol");function jr(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function $1(t,r,o){return C.useCallback(l=>{l&&t.onMount&&t.onMount(l),r&&(l?r.mount(l):r.unmount()),o&&(typeof o=="function"?o(l):jr(o)&&(o.current=l))},[r])}const Uu=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),O1="framerAppearId",Fm="data-"+Uu(O1),Vm=C.createContext({});function U1(t,r,o,l,c){const{visualElement:h}=C.useContext(xo),p=C.useContext(Pm),f=C.useContext(fu),m=C.useContext(Cm).reducedMotion,x=C.useRef(null);l=l||p.renderer,!x.current&&l&&(x.current=l(t,{visualState:r,parent:h,props:o,presenceContext:f,blockInitialAnimation:f?f.initial===!1:!1,reducedMotionConfig:m}));const y=x.current,v=C.useContext(Vm);y&&!y.projection&&c&&(y.type==="html"||y.type==="svg")&&z1(x.current,o,c,v);const w=C.useRef(!1);C.useInsertionEffect(()=>{y&&w.current&&y.update(o,f)});const N=o[Fm],A=C.useRef(!!N&&!window.MotionHandoffIsComplete?.(N)&&window.MotionHasOptimisedAnimation?.(N));return yv(()=>{y&&(w.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),y.scheduleRenderMicrotask(),A.current&&y.animationState&&y.animationState.animateChanges())}),C.useEffect(()=>{y&&(!A.current&&y.animationState&&y.animationState.animateChanges(),A.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(N)}),A.current=!1),y.enteringChildren=void 0)}),y}function z1(t,r,o,l){const{layoutId:c,layout:h,drag:p,dragConstraints:f,layoutScroll:m,layoutRoot:x,layoutCrossfade:y}=r;t.projection=new o(t.latestValues,r["data-framer-portal-id"]?void 0:Bm(t.parent)),t.projection.setOptions({layoutId:c,layout:h,alwaysMeasureLayout:!!p||f&&jr(f),visualElement:t,animationType:typeof h=="string"?h:"both",initialPromotionConfig:l,crossfade:y,layoutScroll:m,layoutRoot:x})}function Bm(t){if(t)return t.options.allowProjection!==!1?t.projection:Bm(t.parent)}function Nl(t,{forwardMotionProps:r=!1}={},o,l){o&&g1(o);const c=_u(t)?B1:V1;function h(f,m){let x;const y={...C.useContext(Cm),...f,layoutId:W1(f)},{isStatic:v}=y,w=w1(f),N=c(f,v);if(!v&&hu){H1();const A=K1(y);x=A.MeasureLayout,w.visualElement=U1(t,N,y,l,A.ProjectionNode)}return i.jsxs(xo.Provider,{value:w,children:[x&&w.visualElement?i.jsx(x,{visualElement:w.visualElement,...y}):null,M1(t,f,$1(N,w.visualElement,m),N,v,r)]})}h.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const p=C.forwardRef(h);return p[_1]=t,p}function W1({layoutId:t}){const r=C.useContext(Mf).id;return r&&t!==void 0?r+"-"+t:t}function H1(t,r){C.useContext(Pm).strict}function K1(t){const{drag:r,layout:o}=Pr;if(!r&&!o)return{};const l={...r,...o};return{MeasureLayout:r?.isEnabled(t)||o?.isEnabled(t)?l.MeasureLayout:void 0,ProjectionNode:l.ProjectionNode}}function G1(t,r){if(typeof Proxy>"u")return Nl;const o=new Map,l=(h,p)=>Nl(h,p,t,r),c=(h,p)=>l(h,p);return new Proxy(c,{get:(h,p)=>p==="create"?l:(o.has(p)||o.set(p,Nl(p,void 0,t,r)),o.get(p))})}function _m({top:t,left:r,right:o,bottom:l}){return{x:{min:r,max:o},y:{min:t,max:l}}}function Y1({x:t,y:r}){return{top:r.min,right:t.max,bottom:r.max,left:t.min}}function X1(t,r){if(!r)return t;const o=r({x:t.left,y:t.top}),l=r({x:t.right,y:t.bottom});return{top:o.y,left:o.x,bottom:l.y,right:l.x}}function El(t){return t===void 0||t===1}function Zl({scale:t,scaleX:r,scaleY:o}){return!El(t)||!El(r)||!El(o)}function Un(t){return Zl(t)||$m(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function $m(t){return bh(t.x)||bh(t.y)}function bh(t){return t&&t!=="0%"}function ho(t,r,o){const l=t-o,c=r*l;return o+c}function Sh(t,r,o,l,c){return c!==void 0&&(t=ho(t,c,l)),ho(t,o,l)+r}function eu(t,r=0,o=1,l,c){t.min=Sh(t.min,r,o,l,c),t.max=Sh(t.max,r,o,l,c)}function Om(t,{x:r,y:o}){eu(t.x,r.translate,r.scale,r.originPoint),eu(t.y,o.translate,o.scale,o.originPoint)}const Ch=.999999999999,Ph=1.0000000000001;function Q1(t,r,o,l=!1){const c=o.length;if(!c)return;r.x=r.y=1;let h,p;for(let f=0;f<c;f++){h=o[f],p=h.projectionDelta;const{visualElement:m}=h.options;m&&m.props.style&&m.props.style.display==="contents"||(l&&h.options.layoutScroll&&h.scroll&&h!==h.root&&kr(t,{x:-h.scroll.offset.x,y:-h.scroll.offset.y}),p&&(r.x*=p.x.scale,r.y*=p.y.scale,Om(t,p)),l&&Un(h.latestValues)&&kr(t,h.latestValues))}r.x<Ph&&r.x>Ch&&(r.x=1),r.y<Ph&&r.y>Ch&&(r.y=1)}function wr(t,r){t.min=t.min+r,t.max=t.max+r}function Th(t,r,o,l,c=.5){const h=Te(t.min,t.max,c);eu(t,r,o,h,l)}function kr(t,r){Th(t.x,r.x,r.scaleX,r.scale,r.originX),Th(t.y,r.y,r.scaleY,r.scale,r.originY)}function Um(t,r){return _m(X1(t.getBoundingClientRect(),r))}function J1(t,r,o){const l=Um(t,o),{scroll:c}=r;return c&&(wr(l.x,c.offset.x),wr(l.y,c.offset.y)),l}const Nh=()=>({translate:0,scale:1,origin:0,originPoint:0}),br=()=>({x:Nh(),y:Nh()}),Eh=()=>({min:0,max:0}),Ve=()=>({x:Eh(),y:Eh()}),tu={current:null},zm={current:!1};function q1(){if(zm.current=!0,!!hu)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),r=()=>tu.current=t.matches;t.addEventListener("change",r),r()}else tu.current=!1}const Z1=new WeakMap;function ew(t,r,o){for(const l in r){const c=r[l],h=o[l];if(Xe(c))t.addValue(l,c);else if(Xe(h))t.addValue(l,Cr(c,{owner:t}));else if(h!==c)if(t.hasValue(l)){const p=t.getValue(l);p.liveStyle===!0?p.jump(c):p.hasAnimated||p.set(c)}else{const p=t.getStaticValue(l);t.addValue(l,Cr(p!==void 0?p:c,{owner:t}))}}for(const l in o)r[l]===void 0&&t.removeValue(l);return r}const Rh=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class tw{scrapeMotionValuesFromProps(r,o,l){return{}}constructor({parent:r,props:o,presenceContext:l,reducedMotionConfig:c,blockInitialAnimation:h,visualState:p},f={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Ru,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=ut.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,Se.render(this.render,!1,!0))};const{latestValues:m,renderState:x}=p;this.latestValues=m,this.baseTarget={...m},this.initialValues=o.initial?{...m}:{},this.renderState=x,this.parent=r,this.props=o,this.presenceContext=l,this.depth=r?r.depth+1:0,this.reducedMotionConfig=c,this.options=f,this.blockInitialAnimation=!!h,this.isControllingVariants=jo(o),this.isVariantNode=Nm(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(r&&r.current);const{willChange:y,...v}=this.scrapeMotionValuesFromProps(o,{},this);for(const w in v){const N=v[w];m[w]!==void 0&&Xe(N)&&N.set(m[w])}}mount(r){this.current=r,Z1.set(r,this),this.projection&&!this.projection.instance&&this.projection.mount(r),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,l)=>this.bindToMotionValue(l,o)),zm.current||q1(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:tu.current,this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Cn(this.notifyUpdate),Cn(this.render),this.valueSubscriptions.forEach(r=>r()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const r in this.events)this.events[r].clear();for(const r in this.features){const o=this.features[r];o&&(o.unmount(),o.isMounted=!1)}this.current=null}addChild(r){this.children.add(r),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(r)}removeChild(r){this.children.delete(r),this.enteringChildren&&this.enteringChildren.delete(r)}bindToMotionValue(r,o){this.valueSubscriptions.has(r)&&this.valueSubscriptions.get(r)();const l=Ar.has(r);l&&this.onBindTransform&&this.onBindTransform();const c=o.on("change",p=>{this.latestValues[r]=p,this.props.onUpdate&&Se.preRender(this.notifyUpdate),l&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let h;window.MotionCheckAppearSync&&(h=window.MotionCheckAppearSync(this,r,o)),this.valueSubscriptions.set(r,()=>{c(),h&&h(),o.owner&&o.stop()})}sortNodePosition(r){return!this.current||!this.sortInstanceNodePosition||this.type!==r.type?0:this.sortInstanceNodePosition(this.current,r.current)}updateFeatures(){let r="animation";for(r in Pr){const o=Pr[r];if(!o)continue;const{isEnabled:l,Feature:c}=o;if(!this.features[r]&&c&&l(this.props)&&(this.features[r]=new c(this)),this.features[r]){const h=this.features[r];h.isMounted?h.update():(h.mount(),h.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ve()}getStaticValue(r){return this.latestValues[r]}setStaticValue(r,o){this.latestValues[r]=o}update(r,o){(r.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=r,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let l=0;l<Rh.length;l++){const c=Rh[l];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const h="on"+c,p=r[h];p&&(this.propEventSubscriptions[c]=this.on(c,p))}this.prevMotionValues=ew(this,this.scrapeMotionValuesFromProps(r,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(r){return this.props.variants?this.props.variants[r]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(r){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(r),()=>o.variantChildren.delete(r)}addValue(r,o){const l=this.values.get(r);o!==l&&(l&&this.removeValue(r),this.bindToMotionValue(r,o),this.values.set(r,o),this.latestValues[r]=o.get())}removeValue(r){this.values.delete(r);const o=this.valueSubscriptions.get(r);o&&(o(),this.valueSubscriptions.delete(r)),delete this.latestValues[r],this.removeValueFromRenderState(r,this.renderState)}hasValue(r){return this.values.has(r)}getValue(r,o){if(this.props.values&&this.props.values[r])return this.props.values[r];let l=this.values.get(r);return l===void 0&&o!==void 0&&(l=Cr(o===null?void 0:o,{owner:this}),this.addValue(r,l)),l}readValue(r,o){let l=this.latestValues[r]!==void 0||!this.current?this.latestValues[r]:this.getBaseTargetFromProps(this.props,r)??this.readValueFromInstance(this.current,r,this.options);return l!=null&&(typeof l=="string"&&(If(l)||Vf(l))?l=parseFloat(l):!f1(l)&&Pn.test(o)&&(l=vm(r,o)),this.setBaseTarget(r,Xe(l)?l.get():l)),Xe(l)?l.get():l}setBaseTarget(r,o){this.baseTarget[r]=o}getBaseTarget(r){const{initial:o}=this.props;let l;if(typeof o=="string"||typeof o=="object"){const h=$u(this.props,o,this.presenceContext?.custom);h&&(l=h[r])}if(o&&l!==void 0)return l;const c=this.getBaseTargetFromProps(this.props,r);return c!==void 0&&!Xe(c)?c:this.initialValues[r]!==void 0&&l===void 0?void 0:this.baseTarget[r]}on(r,o){return this.events[r]||(this.events[r]=new vu),this.events[r].add(o)}notify(r,...o){this.events[r]&&this.events[r].notify(...o)}scheduleRenderMicrotask(){Du.render(this.render)}}class Wm extends tw{constructor(){super(...arguments),this.KeyframeResolver=t1}sortInstanceNodePosition(r,o){return r.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(r,o){return r.style?r.style[o]:void 0}removeValueFromRenderState(r,{vars:o,style:l}){delete o[r],delete l[r]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:r}=this.props;Xe(r)&&(this.childSubscription=r.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}}function Hm(t,{style:r,vars:o},l,c){const h=t.style;let p;for(p in r)h[p]=r[p];c?.applyProjectionStyles(h,l);for(p in o)h.setProperty(p,o[p])}function nw(t){return window.getComputedStyle(t)}class rw extends Wm{constructor(){super(...arguments),this.type="html",this.renderInstance=Hm}readValueFromInstance(r,o){if(Ar.has(o))return this.projection?.isProjecting?Hl(o):jj(r,o);{const l=nw(r),c=(Jf(o)?l.getPropertyValue(o):l[o])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(r,{transformPagePoint:o}){return Um(r,o)}build(r,o,l){Vu(r,o,l.transformTemplate)}scrapeMotionValuesFromProps(r,o,l){return Ou(r,o,l)}}const Km=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function sw(t,r,o,l){Hm(t,r,void 0,l);for(const c in r.attrs)t.setAttribute(Km.has(c)?c:Uu(c),r.attrs[c])}class iw extends Wm{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ve}getBaseTargetFromProps(r,o){return r[o]}readValueFromInstance(r,o){if(Ar.has(o)){const l=xm(o);return l&&l.default||0}return o=Km.has(o)?o:Uu(o),r.getAttribute(o)}scrapeMotionValuesFromProps(r,o,l){return Im(r,o,l)}build(r,o,l){Am(r,o,this.isSVGTag,l.transformTemplate,l.style)}renderInstance(r,o,l,c){sw(r,o,l,c)}mount(r){this.isSVGTag=Dm(r.tagName),super.mount(r)}}const ow=(t,r)=>_u(t)?new iw(r):new rw(r,{allowProjection:t!==C.Fragment});function Sr(t,r,o){const l=t.getProps();return $u(l,r,o!==void 0?o:l.custom,t)}const nu=t=>Array.isArray(t);function aw(t,r,o){t.hasValue(r)?t.getValue(r).set(o):t.addValue(r,Cr(o))}function lw(t){return nu(t)?t[t.length-1]||0:t}function uw(t,r){const o=Sr(t,r);let{transitionEnd:l={},transition:c={},...h}=o||{};h={...h,...l};for(const p in h){const f=lw(h[p]);aw(t,p,f)}}function cw(t){return!!(Xe(t)&&t.add)}function ru(t,r){const o=t.getValue("willChange");if(cw(o))return o.add(r);if(!o&&tn.WillChange){const l=new tn.WillChange("auto");t.addValue("willChange",l),l.add(r)}}function Gm(t){return t.props[Fm]}const dw=t=>t!==null;function pw(t,{repeat:r,repeatType:o="loop"},l){const c=t.filter(dw),h=r&&o!=="loop"&&r%2===1?0:c.length-1;return c[h]}const hw={type:"spring",stiffness:500,damping:25,restSpeed:10},fw=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),mw={type:"keyframes",duration:.8},gw={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},yw=(t,{keyframes:r})=>r.length>2?mw:Ar.has(t)?t.startsWith("scale")?fw(r[1]):hw:gw;function xw({when:t,delay:r,delayChildren:o,staggerChildren:l,staggerDirection:c,repeat:h,repeatType:p,repeatDelay:f,from:m,elapsed:x,...y}){return!!Object.keys(y).length}const zu=(t,r,o,l={},c,h)=>p=>{const f=Au(l,t)||{},m=f.delay||l.delay||0;let{elapsed:x=0}=l;x=x-Ut(m);const y={keyframes:Array.isArray(o)?o:[null,o],ease:"easeOut",velocity:r.getVelocity(),...f,delay:-x,onUpdate:w=>{r.set(w),f.onUpdate&&f.onUpdate(w)},onComplete:()=>{p(),f.onComplete&&f.onComplete()},name:t,motionValue:r,element:h?void 0:c};xw(f)||Object.assign(y,yw(t,y)),y.duration&&(y.duration=Ut(y.duration)),y.repeatDelay&&(y.repeatDelay=Ut(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let v=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(Ql(y),y.delay===0&&(v=!0)),(tn.instantAnimations||tn.skipAnimations)&&(v=!0,Ql(y),y.delay=0),y.allowFlatten=!f.type&&!f.ease,v&&!h&&r.get()!==void 0){const w=pw(y.keyframes,f);if(w!==void 0){Se.update(()=>{y.onUpdate(w),y.onComplete()});return}}return f.isSync?new Eu(y):new zj(y)};function vw({protectedKeys:t,needsAnimating:r},o){const l=t.hasOwnProperty(o)&&r[o]!==!0;return r[o]=!1,l}function Ym(t,r,{delay:o=0,transitionOverride:l,type:c}={}){let{transition:h=t.getDefaultTransition(),transitionEnd:p,...f}=r;l&&(h=l);const m=[],x=c&&t.animationState&&t.animationState.getState()[c];for(const y in f){const v=t.getValue(y,t.latestValues[y]??null),w=f[y];if(w===void 0||x&&vw(x,y))continue;const N={delay:o,...Au(h||{},y)},A=v.get();if(A!==void 0&&!v.isAnimating&&!Array.isArray(w)&&w===A&&!N.velocity)continue;let D=!1;if(window.MotionHandoffAnimation){const L=Gm(t);if(L){const M=window.MotionHandoffAnimation(L,y,Se);M!==null&&(N.startTime=M,D=!0)}}ru(t,y),v.start(zu(y,v,w,t.shouldReduceMotion&&mm.has(y)?{type:!1}:N,t,D));const R=v.animation;R&&m.push(R)}return p&&Promise.all(m).then(()=>{Se.update(()=>{p&&uw(t,p)})}),m}function Xm(t,r,o,l=0,c=1){const h=Array.from(t).sort((x,y)=>x.sortNodePosition(y)).indexOf(r),p=t.size,f=(p-1)*l;return typeof o=="function"?o(h,p):c===1?h*l:f-h*l}function su(t,r,o={}){const l=Sr(t,r,o.type==="exit"?t.presenceContext?.custom:void 0);let{transition:c=t.getDefaultTransition()||{}}=l||{};o.transitionOverride&&(c=o.transitionOverride);const h=l?()=>Promise.all(Ym(t,l,o)):()=>Promise.resolve(),p=t.variantChildren&&t.variantChildren.size?(m=0)=>{const{delayChildren:x=0,staggerChildren:y,staggerDirection:v}=c;return jw(t,r,m,x,y,v,o)}:()=>Promise.resolve(),{when:f}=c;if(f){const[m,x]=f==="beforeChildren"?[h,p]:[p,h];return m().then(()=>x())}else return Promise.all([h(),p(o.delay)])}function jw(t,r,o=0,l=0,c=0,h=1,p){const f=[];for(const m of t.variantChildren)m.notify("AnimationStart",r),f.push(su(m,r,{...p,delay:o+(typeof l=="function"?0:l)+Xm(t.variantChildren,m,l,c,h)}).then(()=>m.notify("AnimationComplete",r)));return Promise.all(f)}function ww(t,r,o={}){t.notify("AnimationStart",r);let l;if(Array.isArray(r)){const c=r.map(h=>su(t,h,o));l=Promise.all(c)}else if(typeof r=="string")l=su(t,r,o);else{const c=typeof r=="function"?Sr(t,r,o.custom):r;l=Promise.all(Ym(t,c,o))}return l.then(()=>{t.notify("AnimationComplete",r)})}function Qm(t,r){if(!Array.isArray(r))return!1;const o=r.length;if(o!==t.length)return!1;for(let l=0;l<o;l++)if(r[l]!==t[l])return!1;return!0}const kw=Fu.length;function Jm(t){if(!t)return;if(!t.isControllingVariants){const o=t.parent?Jm(t.parent)||{}:{};return t.props.initial!==void 0&&(o.initial=t.props.initial),o}const r={};for(let o=0;o<kw;o++){const l=Fu[o],c=t.props[l];(Es(c)||c===!1)&&(r[l]=c)}return r}const bw=[...Iu].reverse(),Sw=Iu.length;function Cw(t){return r=>Promise.all(r.map(({animation:o,options:l})=>ww(t,o,l)))}function Pw(t){let r=Cw(t),o=Ah(),l=!0;const c=m=>(x,y)=>{const v=Sr(t,y,m==="exit"?t.presenceContext?.custom:void 0);if(v){const{transition:w,transitionEnd:N,...A}=v;x={...x,...A,...N}}return x};function h(m){r=m(t)}function p(m){const{props:x}=t,y=Jm(t.parent)||{},v=[],w=new Set;let N={},A=1/0;for(let R=0;R<Sw;R++){const L=bw[R],M=o[L],I=x[L]!==void 0?x[L]:y[L],Q=Es(I),W=L===m?M.isActive:null;W===!1&&(A=R);let ne=I===y[L]&&I!==x[L]&&Q;if(ne&&l&&t.manuallyAnimateOnMount&&(ne=!1),M.protectedKeys={...N},!M.isActive&&W===null||!I&&!M.prevProp||vo(I)||typeof I=="boolean")continue;const ie=Tw(M.prevProp,I);let Z=ie||L===m&&M.isActive&&!ne&&Q||R>A&&Q,fe=!1;const ye=Array.isArray(I)?I:[I];let tt=ye.reduce(c(L),{});W===!1&&(tt={});const{prevResolvedValues:ct={}}=M,Qe={...ct,...tt},nt=oe=>{Z=!0,w.has(oe)&&(fe=!0,w.delete(oe)),M.needsAnimating[oe]=!0;const z=t.getValue(oe);z&&(z.liveStyle=!1)};for(const oe in Qe){const z=tt[oe],q=ct[oe];if(N.hasOwnProperty(oe))continue;let H=!1;nu(z)&&nu(q)?H=!Qm(z,q):H=z!==q,H?z!=null?nt(oe):w.add(oe):z!==void 0&&w.has(oe)?nt(oe):M.protectedKeys[oe]=!0}M.prevProp=I,M.prevResolvedValues=tt,M.isActive&&(N={...N,...tt}),l&&t.blockInitialAnimation&&(Z=!1);const dt=ne&&ie;Z&&(!dt||fe)&&v.push(...ye.map(oe=>{const z={type:L};if(typeof oe=="string"&&l&&!dt&&t.manuallyAnimateOnMount&&t.parent){const{parent:q}=t,H=Sr(q,oe);if(q.enteringChildren&&H){const{delayChildren:S}=H.transition||{};z.delay=Xm(q.enteringChildren,t,S)}}return{animation:oe,options:z}}))}if(w.size){const R={};if(typeof x.initial!="boolean"){const L=Sr(t,Array.isArray(x.initial)?x.initial[0]:x.initial);L&&L.transition&&(R.transition=L.transition)}w.forEach(L=>{const M=t.getBaseTarget(L),I=t.getValue(L);I&&(I.liveStyle=!0),R[L]=M??null}),v.push({animation:R})}let D=!!v.length;return l&&(x.initial===!1||x.initial===x.animate)&&!t.manuallyAnimateOnMount&&(D=!1),l=!1,D?r(v):Promise.resolve()}function f(m,x){if(o[m].isActive===x)return Promise.resolve();t.variantChildren?.forEach(v=>v.animationState?.setActive(m,x)),o[m].isActive=x;const y=p(m);for(const v in o)o[v].protectedKeys={};return y}return{animateChanges:p,setActive:f,setAnimateFunction:h,getState:()=>o,reset:()=>{o=Ah()}}}function Tw(t,r){return typeof r=="string"?r!==t:Array.isArray(r)?!Qm(r,t):!1}function On(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Ah(){return{animate:On(!0),whileInView:On(),whileHover:On(),whileTap:On(),whileDrag:On(),whileFocus:On(),exit:On()}}class Tn{constructor(r){this.isMounted=!1,this.node=r}update(){}}class Nw extends Tn{constructor(r){super(r),r.animationState||(r.animationState=Pw(r))}updateAnimationControlsSubscription(){const{animate:r}=this.node.getProps();vo(r)&&(this.unmountControls=r.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:r}=this.node.getProps(),{animate:o}=this.node.prevProps||{};r!==o&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let Ew=0;class Rw extends Tn{constructor(){super(...arguments),this.id=Ew++}update(){if(!this.node.presenceContext)return;const{isPresent:r,onExitComplete:o}=this.node.presenceContext,{isPresent:l}=this.node.prevPresenceContext||{};if(!this.node.animationState||r===l)return;const c=this.node.animationState.setActive("exit",!r);o&&!r&&c.then(()=>{o(this.id)})}mount(){const{register:r,onExitComplete:o}=this.node.presenceContext||{};o&&o(this.id),r&&(this.unmount=r(this.id))}unmount(){}}const Aw={animation:{Feature:Nw},exit:{Feature:Rw}};function Rs(t,r,o,l={passive:!0}){return t.addEventListener(r,o,l),()=>t.removeEventListener(r,o)}function Vs(t){return{point:{x:t.pageX,y:t.pageY}}}const Lw=t=>r=>Mu(r)&&t(r,Vs(r));function bs(t,r,o,l){return Rs(t,r,Lw(o),l)}const qm=1e-4,Dw=1-qm,Mw=1+qm,Zm=.01,Iw=0-Zm,Fw=0+Zm;function et(t){return t.max-t.min}function Vw(t,r,o){return Math.abs(t-r)<=o}function Lh(t,r,o,l=.5){t.origin=l,t.originPoint=Te(r.min,r.max,t.origin),t.scale=et(o)/et(r),t.translate=Te(o.min,o.max,t.origin)-t.originPoint,(t.scale>=Dw&&t.scale<=Mw||isNaN(t.scale))&&(t.scale=1),(t.translate>=Iw&&t.translate<=Fw||isNaN(t.translate))&&(t.translate=0)}function Ss(t,r,o,l){Lh(t.x,r.x,o.x,l?l.originX:void 0),Lh(t.y,r.y,o.y,l?l.originY:void 0)}function Dh(t,r,o){t.min=o.min+r.min,t.max=t.min+et(r)}function Bw(t,r,o){Dh(t.x,r.x,o.x),Dh(t.y,r.y,o.y)}function Mh(t,r,o){t.min=r.min-o.min,t.max=t.min+et(r)}function fo(t,r,o){Mh(t.x,r.x,o.x),Mh(t.y,r.y,o.y)}function bt(t){return[t("x"),t("y")]}const eg=({current:t})=>t?t.ownerDocument.defaultView:null,Ih=(t,r)=>Math.abs(t-r);function _w(t,r){const o=Ih(t.x,r.x),l=Ih(t.y,r.y);return Math.sqrt(o**2+l**2)}class tg{constructor(r,o,{transformPagePoint:l,contextWindow:c=window,dragSnapToOrigin:h=!1,distanceThreshold:p=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=Al(this.lastMoveEventInfo,this.history),N=this.startEvent!==null,A=_w(w.offset,{x:0,y:0})>=this.distanceThreshold;if(!N&&!A)return;const{point:D}=w,{timestamp:R}=ze;this.history.push({...D,timestamp:R});const{onStart:L,onMove:M}=this.handlers;N||(L&&L(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),M&&M(this.lastMoveEvent,w)},this.handlePointerMove=(w,N)=>{this.lastMoveEvent=w,this.lastMoveEventInfo=Rl(N,this.transformPagePoint),Se.update(this.updatePoint,!0)},this.handlePointerUp=(w,N)=>{this.end();const{onEnd:A,onSessionEnd:D,resumeAnimation:R}=this.handlers;if(this.dragSnapToOrigin&&R&&R(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const L=Al(w.type==="pointercancel"?this.lastMoveEventInfo:Rl(N,this.transformPagePoint),this.history);this.startEvent&&A&&A(w,L),D&&D(w,L)},!Mu(r))return;this.dragSnapToOrigin=h,this.handlers=o,this.transformPagePoint=l,this.distanceThreshold=p,this.contextWindow=c||window;const f=Vs(r),m=Rl(f,this.transformPagePoint),{point:x}=m,{timestamp:y}=ze;this.history=[{...x,timestamp:y}];const{onSessionStart:v}=o;v&&v(r,Al(m,this.history)),this.removeListeners=Ms(bs(this.contextWindow,"pointermove",this.handlePointerMove),bs(this.contextWindow,"pointerup",this.handlePointerUp),bs(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(r){this.handlers=r}end(){this.removeListeners&&this.removeListeners(),Cn(this.updatePoint)}}function Rl(t,r){return r?{point:r(t.point)}:t}function Fh(t,r){return{x:t.x-r.x,y:t.y-r.y}}function Al({point:t},r){return{point:t,delta:Fh(t,ng(r)),offset:Fh(t,$w(r)),velocity:Ow(r,.1)}}function $w(t){return t[0]}function ng(t){return t[t.length-1]}function Ow(t,r){if(t.length<2)return{x:0,y:0};let o=t.length-1,l=null;const c=ng(t);for(;o>=0&&(l=t[o],!(c.timestamp-l.timestamp>Ut(r)));)o--;if(!l)return{x:0,y:0};const h=St(c.timestamp-l.timestamp);if(h===0)return{x:0,y:0};const p={x:(c.x-l.x)/h,y:(c.y-l.y)/h};return p.x===1/0&&(p.x=0),p.y===1/0&&(p.y=0),p}function Uw(t,{min:r,max:o},l){return r!==void 0&&t<r?t=l?Te(r,t,l.min):Math.max(t,r):o!==void 0&&t>o&&(t=l?Te(o,t,l.max):Math.min(t,o)),t}function Vh(t,r,o){return{min:r!==void 0?t.min+r:void 0,max:o!==void 0?t.max+o-(t.max-t.min):void 0}}function zw(t,{top:r,left:o,bottom:l,right:c}){return{x:Vh(t.x,o,c),y:Vh(t.y,r,l)}}function Bh(t,r){let o=r.min-t.min,l=r.max-t.max;return r.max-r.min<t.max-t.min&&([o,l]=[l,o]),{min:o,max:l}}function Ww(t,r){return{x:Bh(t.x,r.x),y:Bh(t.y,r.y)}}function Hw(t,r){let o=.5;const l=et(t),c=et(r);return c>l?o=Ps(r.min,r.max-l,t.min):l>c&&(o=Ps(t.min,t.max-c,r.min)),en(0,1,o)}function Kw(t,r){const o={};return r.min!==void 0&&(o.min=r.min-t.min),r.max!==void 0&&(o.max=r.max-t.min),o}const iu=.35;function Gw(t=iu){return t===!1?t=0:t===!0&&(t=iu),{x:_h(t,"left","right"),y:_h(t,"top","bottom")}}function _h(t,r,o){return{min:$h(t,r),max:$h(t,o)}}function $h(t,r){return typeof t=="number"?t:t[r]||0}const Yw=new WeakMap;class Xw{constructor(r){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ve(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=r}start(r,{snapToCursor:o=!1,distanceThreshold:l}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const h=v=>{const{dragSnapToOrigin:w}=this.getProps();w?this.pauseAnimation():this.stopAnimation(),o&&this.snapToCursor(Vs(v).point)},p=(v,w)=>{const{drag:N,dragPropagation:A,onDragStart:D}=this.getProps();if(N&&!A&&(this.openDragLock&&this.openDragLock(),this.openDragLock=o1(N),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=w,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),bt(L=>{let M=this.getAxisMotionValue(L).get()||0;if(zt.test(M)){const{projection:I}=this.visualElement;if(I&&I.layout){const Q=I.layout.layoutBox[L];Q&&(M=et(Q)*(parseFloat(M)/100))}}this.originPoint[L]=M}),D&&Se.postRender(()=>D(v,w)),ru(this.visualElement,"transform");const{animationState:R}=this.visualElement;R&&R.setActive("whileDrag",!0)},f=(v,w)=>{this.latestPointerEvent=v,this.latestPanInfo=w;const{dragPropagation:N,dragDirectionLock:A,onDirectionLock:D,onDrag:R}=this.getProps();if(!N&&!this.openDragLock)return;const{offset:L}=w;if(A&&this.currentDirection===null){this.currentDirection=Qw(L),this.currentDirection!==null&&D&&D(this.currentDirection);return}this.updateAxis("x",w.point,L),this.updateAxis("y",w.point,L),this.visualElement.render(),R&&R(v,w)},m=(v,w)=>{this.latestPointerEvent=v,this.latestPanInfo=w,this.stop(v,w),this.latestPointerEvent=null,this.latestPanInfo=null},x=()=>bt(v=>this.getAnimationState(v)==="paused"&&this.getAxisMotionValue(v).animation?.play()),{dragSnapToOrigin:y}=this.getProps();this.panSession=new tg(r,{onSessionStart:h,onStart:p,onMove:f,onSessionEnd:m,resumeAnimation:x},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:l,contextWindow:eg(this.visualElement)})}stop(r,o){const l=r||this.latestPointerEvent,c=o||this.latestPanInfo,h=this.isDragging;if(this.cancel(),!h||!c||!l)return;const{velocity:p}=c;this.startAnimation(p);const{onDragEnd:f}=this.getProps();f&&Se.postRender(()=>f(l,c))}cancel(){this.isDragging=!1;const{projection:r,animationState:o}=this.visualElement;r&&(r.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:l}=this.getProps();!l&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),o&&o.setActive("whileDrag",!1)}updateAxis(r,o,l){const{drag:c}=this.getProps();if(!l||!Zi(r,c,this.currentDirection))return;const h=this.getAxisMotionValue(r);let p=this.originPoint[r]+l[r];this.constraints&&this.constraints[r]&&(p=Uw(p,this.constraints[r],this.elastic[r])),h.set(p)}resolveConstraints(){const{dragConstraints:r,dragElastic:o}=this.getProps(),l=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,c=this.constraints;r&&jr(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&l?this.constraints=zw(l.layoutBox,r):this.constraints=!1,this.elastic=Gw(o),c!==this.constraints&&l&&this.constraints&&!this.hasMutatedConstraints&&bt(h=>{this.constraints!==!1&&this.getAxisMotionValue(h)&&(this.constraints[h]=Kw(l.layoutBox[h],this.constraints[h]))})}resolveRefConstraints(){const{dragConstraints:r,onMeasureDragConstraints:o}=this.getProps();if(!r||!jr(r))return!1;const l=r.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const h=J1(l,c.root,this.visualElement.getTransformPagePoint());let p=Ww(c.layout.layoutBox,h);if(o){const f=o(Y1(p));this.hasMutatedConstraints=!!f,f&&(p=_m(f))}return p}startAnimation(r){const{drag:o,dragMomentum:l,dragElastic:c,dragTransition:h,dragSnapToOrigin:p,onDragTransitionEnd:f}=this.getProps(),m=this.constraints||{},x=bt(y=>{if(!Zi(y,o,this.currentDirection))return;let v=m&&m[y]||{};p&&(v={min:0,max:0});const w=c?200:1e6,N=c?40:1e7,A={type:"inertia",velocity:l?r[y]:0,bounceStiffness:w,bounceDamping:N,timeConstant:750,restDelta:1,restSpeed:10,...h,...v};return this.startAxisValueAnimation(y,A)});return Promise.all(x).then(f)}startAxisValueAnimation(r,o){const l=this.getAxisMotionValue(r);return ru(this.visualElement,r),l.start(zu(r,l,0,o,this.visualElement,!1))}stopAnimation(){bt(r=>this.getAxisMotionValue(r).stop())}pauseAnimation(){bt(r=>this.getAxisMotionValue(r).animation?.pause())}getAnimationState(r){return this.getAxisMotionValue(r).animation?.state}getAxisMotionValue(r){const o=`_drag${r.toUpperCase()}`,l=this.visualElement.getProps(),c=l[o];return c||this.visualElement.getValue(r,(l.initial?l.initial[r]:void 0)||0)}snapToCursor(r){bt(o=>{const{drag:l}=this.getProps();if(!Zi(o,l,this.currentDirection))return;const{projection:c}=this.visualElement,h=this.getAxisMotionValue(o);if(c&&c.layout){const{min:p,max:f}=c.layout.layoutBox[o];h.set(r[o]-Te(p,f,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:r,dragConstraints:o}=this.getProps(),{projection:l}=this.visualElement;if(!jr(o)||!l||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};bt(p=>{const f=this.getAxisMotionValue(p);if(f&&this.constraints!==!1){const m=f.get();c[p]=Hw({min:m,max:m},this.constraints[p])}});const{transformTemplate:h}=this.visualElement.getProps();this.visualElement.current.style.transform=h?h({},""):"none",l.root&&l.root.updateScroll(),l.updateLayout(),this.resolveConstraints(),bt(p=>{if(!Zi(p,r,null))return;const f=this.getAxisMotionValue(p),{min:m,max:x}=this.constraints[p];f.set(Te(m,x,c[p]))})}addListeners(){if(!this.visualElement.current)return;Yw.set(this.visualElement,this);const r=this.visualElement.current,o=bs(r,"pointerdown",m=>{const{drag:x,dragListener:y=!0}=this.getProps();x&&y&&this.start(m)}),l=()=>{const{dragConstraints:m}=this.getProps();jr(m)&&m.current&&(this.constraints=this.resolveRefConstraints())},{projection:c}=this.visualElement,h=c.addEventListener("measure",l);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),Se.read(l);const p=Rs(window,"resize",()=>this.scalePositionWithinConstraints()),f=c.addEventListener("didUpdate",(({delta:m,hasLayoutChanged:x})=>{this.isDragging&&x&&(bt(y=>{const v=this.getAxisMotionValue(y);v&&(this.originPoint[y]+=m[y].translate,v.set(v.get()+m[y].translate))}),this.visualElement.render())}));return()=>{p(),o(),h(),f&&f()}}getProps(){const r=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:l=!1,dragPropagation:c=!1,dragConstraints:h=!1,dragElastic:p=iu,dragMomentum:f=!0}=r;return{...r,drag:o,dragDirectionLock:l,dragPropagation:c,dragConstraints:h,dragElastic:p,dragMomentum:f}}}function Zi(t,r,o){return(r===!0||r===t)&&(o===null||o===t)}function Qw(t,r=10){let o=null;return Math.abs(t.y)>r?o="y":Math.abs(t.x)>r&&(o="x"),o}class Jw extends Tn{constructor(r){super(r),this.removeGroupControls=Ct,this.removeListeners=Ct,this.controls=new Xw(r)}mount(){const{dragControls:r}=this.node.getProps();r&&(this.removeGroupControls=r.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ct}unmount(){this.removeGroupControls(),this.removeListeners()}}const Oh=t=>(r,o)=>{t&&Se.postRender(()=>t(r,o))};class qw extends Tn{constructor(){super(...arguments),this.removePointerDownListener=Ct}onPointerDown(r){this.session=new tg(r,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:eg(this.node)})}createPanHandlers(){const{onPanSessionStart:r,onPanStart:o,onPan:l,onPanEnd:c}=this.node.getProps();return{onSessionStart:Oh(r),onStart:Oh(o),onMove:l,onEnd:(h,p)=>{delete this.session,c&&Se.postRender(()=>c(h,p))}}}mount(){this.removePointerDownListener=bs(this.node.current,"pointerdown",r=>this.onPointerDown(r))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const io={hasAnimatedSinceResize:!0,hasEverUpdated:!1};let Ll=!1;class Zw extends C.Component{componentDidMount(){const{visualElement:r,layoutGroup:o,switchLayoutGroup:l,layoutId:c}=this.props,{projection:h}=r;h&&(o.group&&o.group.add(h),l&&l.register&&c&&l.register(h),Ll&&h.root.didUpdate(),h.addEventListener("animationComplete",()=>{this.safeToRemove()}),h.setOptions({...h.options,onExitComplete:()=>this.safeToRemove()})),io.hasEverUpdated=!0}getSnapshotBeforeUpdate(r){const{layoutDependency:o,visualElement:l,drag:c,isPresent:h}=this.props,{projection:p}=l;return p&&(p.isPresent=h,Ll=!0,c||r.layoutDependency!==o||o===void 0||r.isPresent!==h?p.willUpdate():this.safeToRemove(),r.isPresent!==h&&(h?p.promote():p.relegate()||Se.postRender(()=>{const f=p.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:r}=this.props.visualElement;r&&(r.root.didUpdate(),Du.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:r,layoutGroup:o,switchLayoutGroup:l}=this.props,{projection:c}=r;Ll=!0,c&&(c.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(c),l&&l.deregister&&l.deregister(c))}safeToRemove(){const{safeToRemove:r}=this.props;r&&r()}render(){return null}}function rg(t){const[r,o]=m1(),l=C.useContext(Mf);return i.jsx(Zw,{...t,layoutGroup:l,switchLayoutGroup:C.useContext(Vm),isPresent:r,safeToRemove:o})}function ek(t,r,o){const l=Xe(t)?t:Cr(t);return l.start(zu("",l,r,o)),l.animation}const tk=(t,r)=>t.depth-r.depth;class nk{constructor(){this.children=[],this.isDirty=!1}add(r){mu(this.children,r),this.isDirty=!0}remove(r){gu(this.children,r),this.isDirty=!0}forEach(r){this.isDirty&&this.children.sort(tk),this.isDirty=!1,this.children.forEach(r)}}function rk(t,r){const o=ut.now(),l=({timestamp:c})=>{const h=c-o;h>=r&&(Cn(l),t(h-r))};return Se.setup(l,!0),()=>Cn(l)}const sg=["TopLeft","TopRight","BottomLeft","BottomRight"],sk=sg.length,Uh=t=>typeof t=="string"?parseFloat(t):t,zh=t=>typeof t=="number"||re.test(t);function ik(t,r,o,l,c,h){c?(t.opacity=Te(0,o.opacity??1,ok(l)),t.opacityExit=Te(r.opacity??1,0,ak(l))):h&&(t.opacity=Te(r.opacity??1,o.opacity??1,l));for(let p=0;p<sk;p++){const f=`border${sg[p]}Radius`;let m=Wh(r,f),x=Wh(o,f);if(m===void 0&&x===void 0)continue;m||(m=0),x||(x=0),m===0||x===0||zh(m)===zh(x)?(t[f]=Math.max(Te(Uh(m),Uh(x),l),0),(zt.test(x)||zt.test(m))&&(t[f]+="%")):t[f]=x}(r.rotate||o.rotate)&&(t.rotate=Te(r.rotate||0,o.rotate||0,l))}function Wh(t,r){return t[r]!==void 0?t[r]:t.borderRadius}const ok=ig(0,.5,Hf),ak=ig(.5,.95,Ct);function ig(t,r,o){return l=>l<t?0:l>r?1:o(Ps(t,r,l))}function Hh(t,r){t.min=r.min,t.max=r.max}function Mt(t,r){Hh(t.x,r.x),Hh(t.y,r.y)}function Kh(t,r){t.translate=r.translate,t.scale=r.scale,t.originPoint=r.originPoint,t.origin=r.origin}function Gh(t,r,o,l,c){return t-=r,t=ho(t,1/o,l),c!==void 0&&(t=ho(t,1/c,l)),t}function lk(t,r=0,o=1,l=.5,c,h=t,p=t){if(zt.test(r)&&(r=parseFloat(r),r=Te(p.min,p.max,r/100)-p.min),typeof r!="number")return;let f=Te(h.min,h.max,l);t===h&&(f-=r),t.min=Gh(t.min,r,o,f,c),t.max=Gh(t.max,r,o,f,c)}function Yh(t,r,[o,l,c],h,p){lk(t,r[o],r[l],r[c],r.scale,h,p)}const uk=["x","scaleX","originX"],ck=["y","scaleY","originY"];function Xh(t,r,o,l){Yh(t.x,r,uk,o?o.x:void 0,l?l.x:void 0),Yh(t.y,r,ck,o?o.y:void 0,l?l.y:void 0)}function Qh(t){return t.translate===0&&t.scale===1}function og(t){return Qh(t.x)&&Qh(t.y)}function Jh(t,r){return t.min===r.min&&t.max===r.max}function dk(t,r){return Jh(t.x,r.x)&&Jh(t.y,r.y)}function qh(t,r){return Math.round(t.min)===Math.round(r.min)&&Math.round(t.max)===Math.round(r.max)}function ag(t,r){return qh(t.x,r.x)&&qh(t.y,r.y)}function Zh(t){return et(t.x)/et(t.y)}function ef(t,r){return t.translate===r.translate&&t.scale===r.scale&&t.originPoint===r.originPoint}class pk{constructor(){this.members=[]}add(r){mu(this.members,r),r.scheduleRender()}remove(r){if(gu(this.members,r),r===this.prevLead&&(this.prevLead=void 0),r===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(r){const o=this.members.findIndex(c=>r===c);if(o===0)return!1;let l;for(let c=o;c>=0;c--){const h=this.members[c];if(h.isPresent!==!1){l=h;break}}return l?(this.promote(l),!0):!1}promote(r,o){const l=this.lead;if(r!==l&&(this.prevLead=l,this.lead=r,r.show(),l)){l.instance&&l.scheduleRender(),r.scheduleRender(),r.resumeFrom=l,o&&(r.resumeFrom.preserveOpacity=!0),l.snapshot&&(r.snapshot=l.snapshot,r.snapshot.latestValues=l.animationValues||l.latestValues),r.root&&r.root.isUpdating&&(r.isLayoutDirty=!0);const{crossfade:c}=r.options;c===!1&&l.hide()}}exitAnimationComplete(){this.members.forEach(r=>{const{options:o,resumingFrom:l}=r;o.onExitComplete&&o.onExitComplete(),l&&l.options.onExitComplete&&l.options.onExitComplete()})}scheduleRender(){this.members.forEach(r=>{r.instance&&r.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function hk(t,r,o){let l="";const c=t.x.translate/r.x,h=t.y.translate/r.y,p=o?.z||0;if((c||h||p)&&(l=`translate3d(${c}px, ${h}px, ${p}px) `),(r.x!==1||r.y!==1)&&(l+=`scale(${1/r.x}, ${1/r.y}) `),o){const{transformPerspective:x,rotate:y,rotateX:v,rotateY:w,skewX:N,skewY:A}=o;x&&(l=`perspective(${x}px) ${l}`),y&&(l+=`rotate(${y}deg) `),v&&(l+=`rotateX(${v}deg) `),w&&(l+=`rotateY(${w}deg) `),N&&(l+=`skewX(${N}deg) `),A&&(l+=`skewY(${A}deg) `)}const f=t.x.scale*r.x,m=t.y.scale*r.y;return(f!==1||m!==1)&&(l+=`scale(${f}, ${m})`),l||"none"}const Dl=["","X","Y","Z"],fk=1e3;let mk=0;function Ml(t,r,o,l){const{latestValues:c}=r;c[t]&&(o[t]=c[t],r.setStaticValue(t,0),l&&(l[t]=0))}function lg(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:r}=t.options;if(!r)return;const o=Gm(r);if(window.MotionHasOptimisedAnimation(o,"transform")){const{layout:c,layoutId:h}=t.options;window.MotionCancelOptimisedAnimation(o,"transform",Se,!(c||h))}const{parent:l}=t;l&&!l.hasCheckedOptimisedAppear&&lg(l)}function ug({attachResizeListener:t,defaultParent:r,measureScroll:o,checkIsScrollRoot:l,resetTransform:c}){return class{constructor(p={},f=r?.()){this.id=mk++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(xk),this.nodes.forEach(kk),this.nodes.forEach(bk),this.nodes.forEach(vk)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=p,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let m=0;m<this.path.length;m++)this.path[m].shouldResetTransform=!0;this.root===this&&(this.nodes=new nk)}addEventListener(p,f){return this.eventHandlers.has(p)||this.eventHandlers.set(p,new vu),this.eventHandlers.get(p).add(f)}notifyListeners(p,...f){const m=this.eventHandlers.get(p);m&&m.notify(...f)}hasListeners(p){return this.eventHandlers.has(p)}mount(p){if(this.instance)return;this.isSVG=Sm(p)&&!p1(p),this.instance=p;const{layoutId:f,layout:m,visualElement:x}=this.options;if(x&&!x.current&&x.mount(p),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(m||f)&&(this.isLayoutDirty=!0),t){let y,v=0;const w=()=>this.root.updateBlockedByResize=!1;Se.read(()=>{v=window.innerWidth}),t(p,()=>{const N=window.innerWidth;N!==v&&(v=N,this.root.updateBlockedByResize=!0,y&&y(),y=rk(w,250),io.hasAnimatedSinceResize&&(io.hasAnimatedSinceResize=!1,this.nodes.forEach(rf)))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&x&&(f||m)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:v,hasRelativeLayoutChanged:w,layout:N})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const A=this.options.transition||x.getDefaultTransition()||Nk,{onLayoutAnimationStart:D,onLayoutAnimationComplete:R}=x.getProps(),L=!this.targetLayout||!ag(this.targetLayout,N),M=!v&&w;if(this.options.layoutRoot||this.resumeFrom||M||v&&(L||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const I={...Au(A,"layout"),onPlay:D,onComplete:R};(x.shouldReduceMotion||this.options.layoutRoot)&&(I.delay=0,I.type=!1),this.startAnimation(I),this.setAnimationOrigin(y,M)}else v||rf(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=N})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const p=this.getStack();p&&p.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Cn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Sk),this.animationId++)}getTransformTemplate(){const{visualElement:p}=this.options;return p&&p.getProps().transformTemplate}willUpdate(p=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&lg(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const v=this.path[y];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:f,layout:m}=this.options;if(f===void 0&&!m)return;const x=this.getTransformTemplate();this.prevTransformTemplateValue=x?x(this.latestValues,""):void 0,this.updateSnapshot(),p&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(tf);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(nf);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(wk),this.nodes.forEach(gk),this.nodes.forEach(yk)):this.nodes.forEach(nf),this.clearAllSnapshots();const f=ut.now();ze.delta=en(0,1e3/60,f-ze.timestamp),ze.timestamp=f,ze.isProcessing=!0,kl.update.process(ze),kl.preRender.process(ze),kl.render.process(ze),ze.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Du.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(jk),this.sharedNodes.forEach(Ck)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Se.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Se.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!et(this.snapshot.measuredBox.x)&&!et(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let m=0;m<this.path.length;m++)this.path[m].updateScroll();const p=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=Ve(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,p?p.layoutBox:void 0)}updateScroll(p="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===p&&(f=!1),f&&this.instance){const m=l(this.instance);this.scroll={animationId:this.root.animationId,phase:p,isRoot:m,offset:o(this.instance),wasRoot:this.scroll?this.scroll.isRoot:m}}}resetTransform(){if(!c)return;const p=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!og(this.projectionDelta),m=this.getTransformTemplate(),x=m?m(this.latestValues,""):void 0,y=x!==this.prevTransformTemplateValue;p&&this.instance&&(f||Un(this.latestValues)||y)&&(c(this.instance,x),this.shouldResetTransform=!1,this.scheduleRender())}measure(p=!0){const f=this.measurePageBox();let m=this.removeElementScroll(f);return p&&(m=this.removeTransform(m)),Ek(m),{animationId:this.root.animationId,measuredBox:f,layoutBox:m,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:p}=this.options;if(!p)return Ve();const f=p.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Rk))){const{scroll:x}=this.root;x&&(wr(f.x,x.offset.x),wr(f.y,x.offset.y))}return f}removeElementScroll(p){const f=Ve();if(Mt(f,p),this.scroll?.wasRoot)return f;for(let m=0;m<this.path.length;m++){const x=this.path[m],{scroll:y,options:v}=x;x!==this.root&&y&&v.layoutScroll&&(y.wasRoot&&Mt(f,p),wr(f.x,y.offset.x),wr(f.y,y.offset.y))}return f}applyTransform(p,f=!1){const m=Ve();Mt(m,p);for(let x=0;x<this.path.length;x++){const y=this.path[x];!f&&y.options.layoutScroll&&y.scroll&&y!==y.root&&kr(m,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),Un(y.latestValues)&&kr(m,y.latestValues)}return Un(this.latestValues)&&kr(m,this.latestValues),m}removeTransform(p){const f=Ve();Mt(f,p);for(let m=0;m<this.path.length;m++){const x=this.path[m];if(!x.instance||!Un(x.latestValues))continue;Zl(x.latestValues)&&x.updateSnapshot();const y=Ve(),v=x.measurePageBox();Mt(y,v),Xh(f,x.latestValues,x.snapshot?x.snapshot.layoutBox:void 0,y)}return Un(this.latestValues)&&Xh(f,this.latestValues),f}setTargetDelta(p){this.targetDelta=p,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(p){this.options={...this.options,...p,crossfade:p.crossfade!==void 0?p.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ze.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(p=!1){const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==f;if(!(p||m&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:v}=this.options;if(!this.layout||!(y||v))return;this.resolvedRelativeTargetAt=ze.timestamp;const w=this.getClosestProjectingParent();w&&this.linkedParentVersion!==w.layoutVersion&&!w.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(w&&w.layout?this.createRelativeTarget(w,this.layout.layoutBox,w.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ve(),this.targetWithTransforms=Ve()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Bw(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Mt(this.target,this.layout.layoutBox),Om(this.target,this.targetDelta)):Mt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,w&&!!w.resumingFrom==!!this.resumingFrom&&!w.options.layoutScroll&&w.target&&this.animationProgress!==1?this.createRelativeTarget(w,this.target,w.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Zl(this.parent.latestValues)||$m(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(p,f,m){this.relativeParent=p,this.linkedParentVersion=p.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ve(),this.relativeTargetOrigin=Ve(),fo(this.relativeTargetOrigin,f,m),Mt(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const p=this.getLead(),f=!!this.resumingFrom||this!==p;let m=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(m=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===ze.timestamp&&(m=!1),m)return;const{layout:x,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(x||y))return;Mt(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,w=this.treeScale.y;Q1(this.layoutCorrected,this.treeScale,this.path,f),p.layout&&!p.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(p.target=p.layout.layoutBox,p.targetWithTransforms=Ve());const{target:N}=p;if(!N){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Kh(this.prevProjectionDelta.x,this.projectionDelta.x),Kh(this.prevProjectionDelta.y,this.projectionDelta.y)),Ss(this.projectionDelta,this.layoutCorrected,N,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==w||!ef(this.projectionDelta.x,this.prevProjectionDelta.x)||!ef(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",N))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(p=!0){if(this.options.visualElement?.scheduleRender(),p){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=br(),this.projectionDelta=br(),this.projectionDeltaWithTransform=br()}setAnimationOrigin(p,f=!1){const m=this.snapshot,x=m?m.latestValues:{},y={...this.latestValues},v=br();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const w=Ve(),N=m?m.source:void 0,A=this.layout?this.layout.source:void 0,D=N!==A,R=this.getStack(),L=!R||R.members.length<=1,M=!!(D&&!L&&this.options.crossfade===!0&&!this.path.some(Tk));this.animationProgress=0;let I;this.mixTargetDelta=Q=>{const W=Q/1e3;sf(v.x,p.x,W),sf(v.y,p.y,W),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(fo(w,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Pk(this.relativeTarget,this.relativeTargetOrigin,w,W),I&&dk(this.relativeTarget,I)&&(this.isProjectionDirty=!1),I||(I=Ve()),Mt(I,this.relativeTarget)),D&&(this.animationValues=y,ik(y,x,this.latestValues,W,M,L)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=W},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(p){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Cn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Se.update(()=>{io.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Cr(0)),this.currentAnimation=ek(this.motionValue,[0,1e3],{...p,velocity:0,isSync:!0,onUpdate:f=>{this.mixTargetDelta(f),p.onUpdate&&p.onUpdate(f)},onStop:()=>{},onComplete:()=>{p.onComplete&&p.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const p=this.getStack();p&&p.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(fk),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const p=this.getLead();let{targetWithTransforms:f,target:m,layout:x,latestValues:y}=p;if(!(!f||!m||!x)){if(this!==p&&this.layout&&x&&cg(this.options.animationType,this.layout.layoutBox,x.layoutBox)){m=this.target||Ve();const v=et(this.layout.layoutBox.x);m.x.min=p.target.x.min,m.x.max=m.x.min+v;const w=et(this.layout.layoutBox.y);m.y.min=p.target.y.min,m.y.max=m.y.min+w}Mt(f,m),kr(f,y),Ss(this.projectionDeltaWithTransform,this.layoutCorrected,f,y)}}registerSharedNode(p,f){this.sharedNodes.has(p)||this.sharedNodes.set(p,new pk),this.sharedNodes.get(p).add(f);const x=f.options.initialPromotionConfig;f.promote({transition:x?x.transition:void 0,preserveFollowOpacity:x&&x.shouldPreserveFollowOpacity?x.shouldPreserveFollowOpacity(f):void 0})}isLead(){const p=this.getStack();return p?p.lead===this:!0}getLead(){const{layoutId:p}=this.options;return p?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:p}=this.options;return p?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:p}=this.options;if(p)return this.root.sharedNodes.get(p)}promote({needsReset:p,transition:f,preserveFollowOpacity:m}={}){const x=this.getStack();x&&x.promote(this,m),p&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const p=this.getStack();return p?p.relegate(this):!1}resetSkewAndRotation(){const{visualElement:p}=this.options;if(!p)return;let f=!1;const{latestValues:m}=p;if((m.z||m.rotate||m.rotateX||m.rotateY||m.rotateZ||m.skewX||m.skewY)&&(f=!0),!f)return;const x={};m.z&&Ml("z",p,x,this.animationValues);for(let y=0;y<Dl.length;y++)Ml(`rotate${Dl[y]}`,p,x,this.animationValues),Ml(`skew${Dl[y]}`,p,x,this.animationValues);p.render();for(const y in x)p.setStaticValue(y,x[y]),this.animationValues&&(this.animationValues[y]=x[y]);p.scheduleRender()}applyProjectionStyles(p,f){if(!this.instance||this.isSVG)return;if(!this.isVisible){p.visibility="hidden";return}const m=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,p.visibility="",p.opacity="",p.pointerEvents=so(f?.pointerEvents)||"",p.transform=m?m(this.latestValues,""):"none";return}const x=this.getLead();if(!this.projectionDelta||!this.layout||!x.target){this.options.layoutId&&(p.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,p.pointerEvents=so(f?.pointerEvents)||""),this.hasProjected&&!Un(this.latestValues)&&(p.transform=m?m({},""):"none",this.hasProjected=!1);return}p.visibility="";const y=x.animationValues||x.latestValues;this.applyTransformsToTarget();let v=hk(this.projectionDeltaWithTransform,this.treeScale,y);m&&(v=m(y,v)),p.transform=v;const{x:w,y:N}=this.projectionDelta;p.transformOrigin=`${w.origin*100}% ${N.origin*100}% 0`,x.animationValues?p.opacity=x===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:p.opacity=x===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const A in ql){if(y[A]===void 0)continue;const{correct:D,applyTo:R,isCSSVariable:L}=ql[A],M=v==="none"?y[A]:D(y[A],x);if(R){const I=R.length;for(let Q=0;Q<I;Q++)p[R[Q]]=M}else L?this.options.visualElement.renderState.vars[A]=M:p[A]=M}this.options.layoutId&&(p.pointerEvents=x===this?so(f?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(p=>p.currentAnimation?.stop()),this.root.nodes.forEach(tf),this.root.sharedNodes.clear()}}}function gk(t){t.updateLayout()}function yk(t){const r=t.resumeFrom?.snapshot||t.snapshot;if(t.isLead()&&t.layout&&r&&t.hasListeners("didUpdate")){const{layoutBox:o,measuredBox:l}=t.layout,{animationType:c}=t.options,h=r.source!==t.layout.source;c==="size"?bt(y=>{const v=h?r.measuredBox[y]:r.layoutBox[y],w=et(v);v.min=o[y].min,v.max=v.min+w}):cg(c,r.layoutBox,o)&&bt(y=>{const v=h?r.measuredBox[y]:r.layoutBox[y],w=et(o[y]);v.max=v.min+w,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[y].max=t.relativeTarget[y].min+w)});const p=br();Ss(p,o,r.layoutBox);const f=br();h?Ss(f,t.applyTransform(l,!0),r.measuredBox):Ss(f,o,r.layoutBox);const m=!og(p);let x=!1;if(!t.resumeFrom){const y=t.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:v,layout:w}=y;if(v&&w){const N=Ve();fo(N,r.layoutBox,v.layoutBox);const A=Ve();fo(A,o,w.layoutBox),ag(N,A)||(x=!0),y.options.layoutRoot&&(t.relativeTarget=A,t.relativeTargetOrigin=N,t.relativeParent=y)}}}t.notifyListeners("didUpdate",{layout:o,snapshot:r,delta:f,layoutDelta:p,hasLayoutChanged:m,hasRelativeLayoutChanged:x})}else if(t.isLead()){const{onExitComplete:o}=t.options;o&&o()}t.options.transition=void 0}function xk(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function vk(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function jk(t){t.clearSnapshot()}function tf(t){t.clearMeasurements()}function nf(t){t.isLayoutDirty=!1}function wk(t){const{visualElement:r}=t.options;r&&r.getProps().onBeforeLayoutMeasure&&r.notify("BeforeLayoutMeasure"),t.resetTransform()}function rf(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function kk(t){t.resolveTargetDelta()}function bk(t){t.calcProjection()}function Sk(t){t.resetSkewAndRotation()}function Ck(t){t.removeLeadSnapshot()}function sf(t,r,o){t.translate=Te(r.translate,0,o),t.scale=Te(r.scale,1,o),t.origin=r.origin,t.originPoint=r.originPoint}function of(t,r,o,l){t.min=Te(r.min,o.min,l),t.max=Te(r.max,o.max,l)}function Pk(t,r,o,l){of(t.x,r.x,o.x,l),of(t.y,r.y,o.y,l)}function Tk(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const Nk={duration:.45,ease:[.4,0,.1,1]},af=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),lf=af("applewebkit/")&&!af("chrome/")?Math.round:Ct;function uf(t){t.min=lf(t.min),t.max=lf(t.max)}function Ek(t){uf(t.x),uf(t.y)}function cg(t,r,o){return t==="position"||t==="preserve-aspect"&&!Vw(Zh(r),Zh(o),.2)}function Rk(t){return t!==t.root&&t.scroll?.wasRoot}const Ak=ug({attachResizeListener:(t,r)=>Rs(t,"resize",r),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Il={current:void 0},dg=ug({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Il.current){const t=new Ak({});t.mount(window),t.setOptions({layoutScroll:!0}),Il.current=t}return Il.current},resetTransform:(t,r)=>{t.style.transform=r!==void 0?r:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Lk={pan:{Feature:qw},drag:{Feature:Jw,ProjectionNode:dg,MeasureLayout:rg}};function cf(t,r,o){const{props:l}=t;t.animationState&&l.whileHover&&t.animationState.setActive("whileHover",o==="Start");const c="onHover"+o,h=l[c];h&&Se.postRender(()=>h(r,Vs(r)))}class Dk extends Tn{mount(){const{current:r}=this.node;r&&(this.unmount=a1(r,(o,l)=>(cf(this.node,l,"Start"),c=>cf(this.node,c,"End"))))}unmount(){}}class Mk extends Tn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let r=!1;try{r=this.node.current.matches(":focus-visible")}catch{r=!0}!r||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ms(Rs(this.node.current,"focus",()=>this.onFocus()),Rs(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function df(t,r,o){const{props:l}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&l.whileTap&&t.animationState.setActive("whileTap",o==="Start");const c="onTap"+(o==="End"?"":o),h=l[c];h&&Se.postRender(()=>h(r,Vs(r)))}class Ik extends Tn{mount(){const{current:r}=this.node;r&&(this.unmount=d1(r,(o,l)=>(df(this.node,l,"Start"),(c,{success:h})=>df(this.node,c,h?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const ou=new WeakMap,Fl=new WeakMap,Fk=t=>{const r=ou.get(t.target);r&&r(t)},Vk=t=>{t.forEach(Fk)};function Bk({root:t,...r}){const o=t||document;Fl.has(o)||Fl.set(o,{});const l=Fl.get(o),c=JSON.stringify(r);return l[c]||(l[c]=new IntersectionObserver(Vk,{root:t,...r})),l[c]}function _k(t,r,o){const l=Bk(r);return ou.set(t,o),l.observe(t),()=>{ou.delete(t),l.unobserve(t)}}const $k={some:0,all:1};class Ok extends Tn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:r={}}=this.node.getProps(),{root:o,margin:l,amount:c="some",once:h}=r,p={root:o?o.current:void 0,rootMargin:l,threshold:typeof c=="number"?c:$k[c]},f=m=>{const{isIntersecting:x}=m;if(this.isInView===x||(this.isInView=x,h&&!x&&this.hasEnteredView))return;x&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",x);const{onViewportEnter:y,onViewportLeave:v}=this.node.getProps(),w=x?y:v;w&&w(m)};return _k(this.node.current,p,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:r,prevProps:o}=this.node;["amount","margin","root"].some(Uk(r,o))&&this.startObserver()}unmount(){}}function Uk({viewport:t={}},{viewport:r={}}={}){return o=>t[o]!==r[o]}const zk={inView:{Feature:Ok},tap:{Feature:Ik},focus:{Feature:Mk},hover:{Feature:Dk}},Wk={layout:{ProjectionNode:dg,MeasureLayout:rg}},Hk={...Aw,...zk,...Lk,...Wk},oo=G1(Hk,ow);function Kk({theme:t}){return i.jsxs("div",{className:"max-w-6xl mx-auto mt-16",children:[i.jsxs(oo.div,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.6},className:"text-center mb-12",children:[i.jsx(Df,{className:`mx-auto mb-4 ${t==="dark"?"text-purple-400":"text-purple-600"}`,size:80}),i.jsx("h1",{className:`mb-4 ${t==="dark"?"text-white":"text-gray-900"}`,children:"Welcome to React Learning Adventure! 🚀"}),i.jsx("p",{className:`max-w-2xl mx-auto ${t==="dark"?"text-purple-200":"text-purple-800"}`,children:"Hey there, future React developer! Get ready to learn React in the most fun way possible. We'll go on an amazing journey through 14 exciting phases! 🎉"})]}),i.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12",children:[{phase:1,title:"React Intro & Setup",emoji:"🌱",color:"green"},{phase:2,title:"JSX & Components",emoji:"🧩",color:"blue"},{phase:3,title:"Props & State",emoji:"🔁",color:"purple"},{phase:4,title:"Events & Lists",emoji:"⚡",color:"yellow"},{phase:5,title:"Forms & Refs",emoji:"✍️",color:"pink"},{phase:6,title:"Hooks",emoji:"🧠",color:"indigo"},{phase:7,title:"Routing",emoji:"🧭",color:"cyan"},{phase:8,title:"Styling",emoji:"🎨",color:"rose"},{phase:9,title:"API Integration",emoji:"🌍",color:"emerald"},{phase:10,title:"State Management",emoji:"🧘",color:"violet"},{phase:11,title:"Performance",emoji:"🧼",color:"sky"},{phase:12,title:"Testing",emoji:"🧪",color:"orange"},{phase:13,title:"Deployment",emoji:"🌐",color:"teal"},{phase:14,title:"Real Projects",emoji:"💪",color:"fuchsia"}].map(r=>i.jsx(oo.div,{whileHover:{scale:1.05,rotate:2},whileTap:{scale:.95},children:i.jsxs(yo,{to:`/phase${r.phase}`,className:`block p-6 rounded-2xl ${t==="dark"?"bg-gradient-to-br from-purple-800/40 to-pink-800/40 border border-purple-500/40":"bg-gradient-to-br from-white to-purple-50 border border-purple-200"} shadow-lg hover:shadow-2xl transition-all`,children:[i.jsx("div",{className:"text-5xl mb-3 text-center",children:r.emoji}),i.jsxs("div",{className:`text-center ${t==="dark"?"text-white":"text-gray-900"}`,children:["Phase ",r.phase]}),i.jsx("div",{className:`text-center ${t==="dark"?"text-purple-300":"text-purple-700"}`,children:r.title})]})},r.phase))}),i.jsx(oo.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.4},className:`rounded-2xl p-8 mb-8 ${t==="dark"?"bg-gradient-to-r from-purple-900/60 to-pink-900/60 border border-purple-500/40":"bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-300"} shadow-xl`,children:i.jsxs("div",{className:"flex items-start gap-4",children:[i.jsx(lv,{className:t==="dark"?"text-yellow-400":"text-yellow-600",size:40}),i.jsxs("div",{children:[i.jsx("h2",{className:`mb-2 ${t==="dark"?"text-white":"text-gray-900"}`,children:"What You'll Learn 🎓"}),i.jsxs("ul",{className:`space-y-2 ${t==="dark"?"text-purple-200":"text-purple-800"}`,children:[i.jsxs("li",{className:"flex items-center gap-2",children:[i.jsx(Qi,{className:"text-yellow-400",size:20}),"Build awesome websites that people love to use"]}),i.jsxs("li",{className:"flex items-center gap-2",children:[i.jsx(Qi,{className:"text-yellow-400",size:20}),"Make interactive pages that respond to clicks and actions"]}),i.jsxs("li",{className:"flex items-center gap-2",children:[i.jsx(Qi,{className:"text-yellow-400",size:20}),"Connect to the internet and show real data"]}),i.jsxs("li",{className:"flex items-center gap-2",children:[i.jsx(Qi,{className:"text-yellow-400",size:20}),"Create your own projects and share them with the world"]})]})]})]})}),i.jsxs("div",{className:`text-center p-6 rounded-xl ${t==="dark"?"bg-purple-900/30 text-purple-200":"bg-purple-50 text-purple-800"}`,children:[i.jsxs("p",{children:["💡 ",i.jsx("strong",{children:"Tip:"})," Click the menu button (☰) at the top-left to navigate between phases!"]}),i.jsx("p",{className:"mt-2",children:"🌙 Use the theme toggle button to switch between dark and light mode!"})]})]})}function V({title:t,icon:r,children:o,theme:l}){return i.jsxs(oo.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:`rounded-2xl p-6 mb-6 ${l==="dark"?"bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30":"bg-gradient-to-br from-purple-100 to-pink-100 border border-purple-300"} shadow-xl hover:shadow-2xl transition-all`,children:[i.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[i.jsx("span",{className:"text-4xl",children:r}),i.jsx("h2",{className:`${l==="dark"?"text-purple-200":"text-purple-900"}`,children:t})]}),i.jsx("div",{className:`space-y-4 ${l==="dark"?"text-gray-200":"text-gray-800"}`,children:o})]})}function $({code:t,language:r="jsx",theme:o}){const[l,c]=C.useState(!1),h=async()=>{await navigator.clipboard.writeText(t),c(!0),setTimeout(()=>c(!1),2e3)};return i.jsxs("div",{className:`relative rounded-xl overflow-hidden ${o==="dark"?"bg-gray-900/50 border border-purple-500/30":"bg-white border border-purple-300"} shadow-lg`,children:[i.jsxs("div",{className:`flex items-center justify-between px-4 py-2 ${o==="dark"?"bg-gray-800/80":"bg-purple-50"}`,children:[i.jsx("span",{className:`${o==="dark"?"text-purple-300":"text-purple-700"}`,children:r}),i.jsx("button",{onClick:h,className:`flex items-center gap-2 px-3 py-1 rounded-lg transition-all hover:scale-105 ${l?o==="dark"?"bg-green-600 text-white":"bg-green-500 text-white":o==="dark"?"bg-purple-600 hover:bg-purple-500 text-white":"bg-purple-500 hover:bg-purple-600 text-white"}`,children:l?i.jsxs(i.Fragment,{children:[i.jsx(Zx,{size:16}),"Copied!"]}):i.jsxs(i.Fragment,{children:[i.jsx(tv,{size:16}),"Copy"]})})]}),i.jsx("pre",{className:`p-4 overflow-x-auto ${o==="dark"?"text-green-300":"text-gray-800"}`,children:i.jsx("code",{children:t})})]})}function Gk({theme:t}){return i.jsxs("div",{className:"max-w-5xl mx-auto mt-20 pb-12",children:[i.jsx("h1",{className:`text-center mb-8 ${t==="dark"?"text-white":"text-gray-900"}`,children:"🌱 Phase 1: React Introduction & Setup"}),i.jsxs(V,{title:"What is React?",icon:"🤔",theme:t,children:[i.jsxs("p",{children:[i.jsx("strong",{children:"React"})," is like a magic toolbox for building websites! 🎨"]}),i.jsx("p",{children:"Imagine you're building with LEGO blocks. React lets you create small pieces (called components) and snap them together to build an entire website!"}),i.jsxs("p",{className:`p-4 rounded-lg ${t==="dark"?"bg-purple-800/30":"bg-purple-100"}`,children:[i.jsx("strong",{children:"Real-World Example:"}),` Think of Facebook, Instagram, and Netflix - they all use React! When you click "Like" on a post, React updates just that button without reloading the whole page. It's super fast! ⚡`]})]}),i.jsxs(V,{title:"Why React?",icon:"💡",theme:t,children:[i.jsxs("ul",{className:"space-y-2 list-disc list-inside",children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Fast & Smooth:"})," Changes happen instantly without page reloads"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Reusable Pieces:"})," Create a button once, use it everywhere!"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Popular:"})," Millions of developers use it worldwide"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Easy to Learn:"})," Perfect for beginners like you!"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Fun Projects:"})," Build games, apps, and cool websites"]})]}),i.jsxs("p",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-blue-900/30":"bg-blue-100"}`,children:[i.jsx("strong",{children:"Fun Fact:"})," React was created by Facebook engineers in 2013. Now it's used by companies like Netflix, Airbnb, and WhatsApp! 🏢"]})]}),i.jsx(V,{title:"Features of React",icon:"⭐",theme:t,children:i.jsxs("div",{className:"space-y-3",children:[i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-green-900/30":"bg-green-100"}`,children:[i.jsx("strong",{children:"🧩 Components:"})," Build websites like LEGO - small pieces that fit together"]}),i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-yellow-900/30":"bg-yellow-100"}`,children:[i.jsx("strong",{children:"⚡ Virtual DOM:"})," A super-fast copy of your website that makes updates lightning quick"]}),i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-pink-900/30":"bg-pink-100"}`,children:[i.jsx("strong",{children:"🔄 One-Way Data Flow:"})," Data flows in one direction, making things predictable"]}),i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-purple-900/30":"bg-purple-100"}`,children:[i.jsx("strong",{children:"🎣 Hooks:"})," Special tools that give your components superpowers!"]})]})}),i.jsxs(V,{title:"SPA vs MPA",icon:"🏗️",theme:t,children:[i.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-blue-900/30":"bg-blue-100"}`,children:[i.jsx("h3",{className:`mb-2 ${t==="dark"?"text-blue-300":"text-blue-900"}`,children:"SPA (Single Page Application)"}),i.jsx("p",{children:"React uses this! 🎉"}),i.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[i.jsx("li",{children:"One page, many views"}),i.jsx("li",{children:"Super fast navigation"}),i.jsx("li",{children:"Feels like an app"}),i.jsx("li",{children:"No page reloads"})]}),i.jsxs("p",{className:"mt-2",children:[i.jsx("strong",{children:"Example:"})," Gmail, Facebook"]})]}),i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-orange-900/30":"bg-orange-100"}`,children:[i.jsx("h3",{className:`mb-2 ${t==="dark"?"text-orange-300":"text-orange-900"}`,children:"MPA (Multi Page Application)"}),i.jsx("p",{children:"Traditional websites"}),i.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[i.jsx("li",{children:"Many separate pages"}),i.jsx("li",{children:"Page reloads on click"}),i.jsx("li",{children:"Slower navigation"}),i.jsx("li",{children:"Each page loads fresh"})]}),i.jsxs("p",{className:"mt-2",children:[i.jsx("strong",{children:"Example:"})," Wikipedia, News sites"]})]})]}),i.jsxs("p",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-green-900/30":"bg-green-100"}`,children:[i.jsx("strong",{children:"Real-World Example:"})," Imagine a book 📖. MPA is like flipping pages (each page loads). SPA is like a magic book that changes its content without flipping! ✨"]})]}),i.jsxs(V,{title:"Virtual DOM",icon:"🎭",theme:t,children:[i.jsxs("p",{children:["The ",i.jsx("strong",{children:"Virtual DOM"})," is React's secret superpower! 🦸"]}),i.jsx("p",{children:"Think of it like this: When you draw a picture, you might sketch it on scratch paper first, then copy the final version to nice paper. React does the same thing!"}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-purple-900/30":"bg-purple-100"}`,children:[i.jsx("h3",{className:"mb-2",children:"How it works:"}),i.jsxs("ol",{className:"list-decimal list-inside space-y-2",children:[i.jsx("li",{children:'React creates a virtual copy of your website (the "sketch")'}),i.jsx("li",{children:"When something changes, React updates the virtual copy first"}),i.jsx("li",{children:"React compares the old and new virtual copies"}),i.jsx("li",{children:"React only updates the parts that changed on the real website"})]})]}),i.jsxs("p",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-blue-900/30":"bg-blue-100"}`,children:[i.jsx("strong",{children:"Real-World Example:"})," Imagine you're playing a video game 🎮. When your character moves, the game doesn't redraw EVERYTHING - just your character! That's what Virtual DOM does for React websites!"]})]}),i.jsxs(V,{title:"React Architecture",icon:"🏛️",theme:t,children:[i.jsx("p",{children:"React is organized in a smart way:"}),i.jsxs("div",{className:"space-y-3 mt-4",children:[i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-green-900/30":"bg-green-100"}`,children:[i.jsx("strong",{children:"🧩 Components:"})," Building blocks of your app"]}),i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-blue-900/30":"bg-blue-100"}`,children:[i.jsx("strong",{children:"📦 Props:"})," Data passed from parent to child (like giving instructions)"]}),i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-purple-900/30":"bg-purple-100"}`,children:[i.jsx("strong",{children:"🔄 State:"})," Data that can change (like a light switch: on/off)"]}),i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-pink-900/30":"bg-pink-100"}`,children:[i.jsx("strong",{children:"🎣 Hooks:"})," Special functions that add powers to components"]})]}),i.jsxs("p",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-yellow-900/30":"bg-yellow-100"}`,children:[i.jsx("strong",{children:"Think of it like a tree:"})," Your App is the trunk, components are branches, and the leaves are small pieces of UI! 🌳"]})]}),i.jsxs(V,{title:"React vs Angular vs Vue",icon:"⚔️",theme:t,children:[i.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-blue-900/30":"bg-blue-100"}`,children:[i.jsx("h3",{className:`mb-2 ${t==="dark"?"text-blue-300":"text-blue-900"}`,children:"⚛️ React"}),i.jsxs("ul",{className:"space-y-1 text-sm",children:[i.jsx("li",{children:"✅ Easy to learn"}),i.jsx("li",{children:"✅ Very popular"}),i.jsx("li",{children:"✅ Flexible"}),i.jsx("li",{children:"✅ Huge community"}),i.jsx("li",{children:"✅ Made by Facebook"})]})]}),i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-red-900/30":"bg-red-100"}`,children:[i.jsx("h3",{className:`mb-2 ${t==="dark"?"text-red-300":"text-red-900"}`,children:"🅰️ Angular"}),i.jsxs("ul",{className:"space-y-1 text-sm",children:[i.jsx("li",{children:"📚 More complex"}),i.jsx("li",{children:"🏢 Used in big companies"}),i.jsx("li",{children:"🛠️ All tools included"}),i.jsx("li",{children:"📖 Steeper learning curve"}),i.jsx("li",{children:"🏢 Made by Google"})]})]}),i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-green-900/30":"bg-green-100"}`,children:[i.jsx("h3",{className:`mb-2 ${t==="dark"?"text-green-300":"text-green-900"}`,children:"💚 Vue"}),i.jsxs("ul",{className:"space-y-1 text-sm",children:[i.jsx("li",{children:"🎨 Easy & fun"}),i.jsx("li",{children:"📝 Good documentation"}),i.jsx("li",{children:"⚡ Fast performance"}),i.jsx("li",{children:"🌟 Growing popularity"}),i.jsx("li",{children:"👥 Community-driven"})]})]})]}),i.jsxs("p",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-purple-900/30":"bg-purple-100"}`,children:[i.jsx("strong",{children:"Which one to learn?"})," React is the most popular and easiest for beginners! You're making a great choice! 🎉"]})]}),i.jsxs(V,{title:"Environment Setup",icon:"🛠️",theme:t,children:[i.jsx("h3",{className:"mb-2",children:"Let's set up your computer to build React apps!"}),i.jsxs("div",{className:`p-4 rounded-lg mb-4 ${t==="dark"?"bg-blue-900/30":"bg-blue-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"Step 1: Install Node.js & npm"}),i.jsxs("p",{className:"mb-2",children:[i.jsx("strong",{children:"Node.js"})," is like the engine that runs JavaScript on your computer.",i.jsx("strong",{children:" npm"})," is like an app store for code libraries!"]}),i.jsxs("ol",{className:"list-decimal list-inside space-y-2",children:[i.jsxs("li",{children:["Visit ",i.jsx("strong",{children:"nodejs.org"})]}),i.jsx("li",{children:"Download the LTS version (the stable one)"}),i.jsx("li",{children:"Install it (click Next, Next, Next!)"}),i.jsx("li",{children:"Open your terminal/command prompt"}),i.jsxs("li",{children:["Type: ",i.jsx("code",{className:"bg-black/20 px-2 py-1 rounded",children:"node --version"})]}),i.jsx("li",{children:"You should see a version number! 🎉"})]})]}),i.jsxs("div",{className:`p-4 rounded-lg mb-4 ${t==="dark"?"bg-green-900/30":"bg-green-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"Step 2: Create Your First React App with Vite (Recommended! ⚡)"}),i.jsxs("p",{className:"mb-2",children:[i.jsx("strong",{children:"Vite"})," is super fast! It's like a race car compared to a regular car! 🏎️"]}),i.jsx($,{theme:t,language:"bash",code:`# Create a new React app
npm create vite@latest my-first-app

# Choose: React → JavaScript

# Enter the folder
cd my-first-app

# Install everything
npm install

# Start the app!
npm run dev`})]}),i.jsxs("div",{className:`p-4 rounded-lg mb-4 ${t==="dark"?"bg-purple-900/30":"bg-purple-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"Alternative: Create React App"}),i.jsx("p",{className:"mb-2",children:"This is the older way, but still works great!"}),i.jsx($,{theme:t,language:"bash",code:`# Create a new React app
npx create-react-app my-first-app

# Enter the folder
cd my-first-app

# Start the app!
npm start`})]})]}),i.jsxs(V,{title:"Project Folder Structure",icon:"📁",theme:t,children:[i.jsx("p",{children:"When you create a React app, you get folders and files. Here's what they mean:"}),i.jsx($,{theme:t,language:"text",code:`my-first-app/
├── node_modules/     📦 All the libraries (don't touch!)
├── public/           🌍 Public files (images, icons)
│   └── index.html    📄 Main HTML file
├── src/              💻 Your code goes here!
│   ├── App.jsx       ⚛️ Main component
│   ├── main.jsx      🚀 Starting point
│   └── App.css       🎨 Styles
├── package.json      📋 Project info & dependencies
└── vite.config.js    ⚙️ Vite settings`}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-yellow-900/30":"bg-yellow-100"}`,children:[i.jsx("p",{children:i.jsx("strong",{children:"Important folders:"})}),i.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[i.jsxs("li",{children:[i.jsx("strong",{children:"src/"})," - This is where you'll write your code!"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"public/"})," - Put images and icons here"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"node_modules/"})," - Don't touch! This is where libraries live"]})]})]})]}),i.jsx(V,{title:"Running & Building React App",icon:"🚀",theme:t,children:i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-green-900/30":"bg-green-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"🏃 Running in Development Mode"}),i.jsx("p",{className:"mb-2",children:"This is for when you're building and testing:"}),i.jsx($,{theme:t,language:"bash",code:`# For Vite projects
npm run dev

# For Create React App
npm start`}),i.jsxs("p",{className:"mt-2",children:["Your app will open at ",i.jsx("strong",{children:"http://localhost:5173"})," (Vite) or",i.jsx("strong",{children:" http://localhost:3000"})," (CRA)"]}),i.jsx("p",{className:"mt-2",children:"Every time you save a file, the website updates automatically! Magic! ✨"})]}),i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-blue-900/30":"bg-blue-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"📦 Building for Production"}),i.jsx("p",{className:"mb-2",children:"When you're ready to share your app with the world:"}),i.jsx($,{theme:t,language:"bash",code:`# Build your app
npm run build

# This creates a 'dist' or 'build' folder
# with all your files ready to deploy!`}),i.jsx("p",{className:"mt-2",children:"The build command creates optimized files that load super fast! 🚀"})]}),i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-purple-900/30":"bg-purple-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"🎯 Quick Commands Reference"}),i.jsxs("ul",{className:"space-y-2",children:[i.jsxs("li",{children:[i.jsx("code",{className:"bg-black/20 px-2 py-1 rounded",children:"npm run dev"})," - Start development server"]}),i.jsxs("li",{children:[i.jsx("code",{className:"bg-black/20 px-2 py-1 rounded",children:"npm run build"})," - Build for production"]}),i.jsxs("li",{children:[i.jsx("code",{className:"bg-black/20 px-2 py-1 rounded",children:"npm install"})," - Install dependencies"]})]})]})]})}),i.jsxs("div",{className:`mt-8 p-6 rounded-xl text-center ${t==="dark"?"bg-gradient-to-r from-green-900/40 to-blue-900/40 border border-green-500/30":"bg-gradient-to-r from-green-100 to-blue-100 border border-green-300"}`,children:[i.jsx("h3",{className:`mb-2 ${t==="dark"?"text-green-300":"text-green-900"}`,children:"🎉 Congratulations!"}),i.jsx("p",{className:t==="dark"?"text-gray-200":"text-gray-800",children:"You've completed Phase 1! You now understand what React is and how to set it up. Ready for Phase 2? Let's learn about JSX and Components! 🚀"})]})]})}function Yk({theme:t}){return i.jsxs("div",{className:"max-w-5xl mx-auto mt-20 pb-12",children:[i.jsx("h1",{className:`text-center mb-8 ${t==="dark"?"text-white":"text-gray-900"}`,children:"🧩 Phase 2: JSX & Components"}),i.jsxs(V,{title:"What is JSX?",icon:"✨",theme:t,children:[i.jsxs("p",{children:[i.jsx("strong",{children:"JSX"})," stands for JavaScript XML. It's like a magic mix of HTML and JavaScript! 🎨"]}),i.jsx("p",{children:"Imagine if you could write HTML, but also use JavaScript superpowers in it. That's JSX!"}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-purple-900/30":"bg-purple-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"Here's a simple example:"}),i.jsx($,{theme:t,language:"jsx",code:`function Welcome() {
  return <h1>Hello, React! 👋</h1>;
}

// This looks like HTML, but it's actually JSX!`})]}),i.jsxs("p",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-blue-900/30":"bg-blue-100"}`,children:[i.jsx("strong",{children:"Real-World Example:"})," Think of JSX like a recipe 🍰. HTML is just the ingredients list, but JSX lets you add instructions (JavaScript) right next to the ingredients!"]})]}),i.jsxs(V,{title:"JSX Syntax",icon:"📝",theme:t,children:[i.jsx("p",{children:"JSX has special rules. Let's learn them!"}),i.jsxs("div",{className:"space-y-4 mt-4",children:[i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-green-900/30":"bg-green-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"1. Must return ONE parent element"}),i.jsx($,{theme:t,language:"jsx",code:`// ❌ Wrong - Two elements
function App() {
  return (
    <h1>Hello</h1>
    <p>World</p>
  );
}

// ✅ Correct - Wrapped in one div
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <p>World</p>
    </div>
  );
}

// ✅ Also correct - Using fragment
function App() {
  return (
    <>
      <h1>Hello</h1>
      <p>World</p>
    </>
  );
}`})]}),i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-yellow-900/30":"bg-yellow-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"2. Use className instead of class"}),i.jsx($,{theme:t,language:"jsx",code:`// ❌ Wrong
<div class="container">Hello</div>

// ✅ Correct
<div className="container">Hello</div>`}),i.jsxs("p",{className:"mt-2",children:[i.jsx("strong",{children:"Why?"}),' Because "class" is a reserved word in JavaScript!']})]}),i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-pink-900/30":"bg-pink-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"3. Close all tags"}),i.jsx($,{theme:t,language:"jsx",code:`// ❌ Wrong
<img src="cat.jpg">
<br>

// ✅ Correct - Self-closing tags
<img src="cat.jpg" />
<br />`})]})]})]}),i.jsxs(V,{title:"Expressions in JSX",icon:"🎯",theme:t,children:[i.jsxs("p",{children:["You can use JavaScript inside JSX with curly braces ",i.jsx("code",{className:"bg-black/20 px-2 py-1 rounded",children:"{}"}),"!"]}),i.jsx($,{theme:t,language:"jsx",code:`function MathFun() {
  const name = "Alex";
  const age = 10;
  const favoriteColor = "purple";
  
  return (
    <div>
      <h1>Hi, I'm {name}! 👋</h1>
      <p>I'm {age} years old</p>
      <p>In 5 years, I'll be {age + 5}!</p>
      <p>My favorite color is {favoriteColor}</p>
      <p>2 + 2 = {2 + 2}</p>
    </div>
  );
}

// Output:
// Hi, I'm Alex! 👋
// I'm 10 years old
// In 5 years, I'll be 15!
// My favorite color is purple
// 2 + 2 = 4`}),i.jsxs("p",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-purple-900/30":"bg-purple-100"}`,children:[i.jsx("strong",{children:"Real-World Example:"})," It's like Mad Libs! 📝 You have a story template, and you fill in the blanks with different words (variables)!"]})]}),i.jsxs(V,{title:"JSX vs HTML",icon:"⚔️",theme:t,children:[i.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-blue-900/30":"bg-blue-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"HTML"}),i.jsxs("ul",{className:"space-y-2 text-sm",children:[i.jsxs("li",{children:["Uses ",i.jsx("code",{className:"bg-black/20 px-1",children:"class"})]}),i.jsxs("li",{children:["Uses ",i.jsx("code",{className:"bg-black/20 px-1",children:"for"})," in labels"]}),i.jsx("li",{children:"Can leave tags unclosed"}),i.jsx("li",{children:"Static content only"}),i.jsx("li",{children:"No JavaScript expressions"})]})]}),i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-green-900/30":"bg-green-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"JSX"}),i.jsxs("ul",{className:"space-y-2 text-sm",children:[i.jsxs("li",{children:["Uses ",i.jsx("code",{className:"bg-black/20 px-1",children:"className"})]}),i.jsxs("li",{children:["Uses ",i.jsx("code",{className:"bg-black/20 px-1",children:"htmlFor"})," in labels"]}),i.jsx("li",{children:"Must close all tags"}),i.jsx("li",{children:"Can be dynamic"}),i.jsxs("li",{children:["Can use JavaScript with ",i.jsx("code",{className:"bg-black/20 px-1",children:"{}"})]})]})]})]}),i.jsx($,{theme:t,language:"jsx",code:`// HTML
<label for="name" class="label">Name:</label>
<input id="name">

// JSX
<label htmlFor="name" className="label">Name:</label>
<input id="name" />`})]}),i.jsxs(V,{title:"JSX Rules",icon:"📏",theme:t,children:[i.jsx("p",{children:"Remember these important rules when writing JSX:"}),i.jsxs("div",{className:"space-y-3 mt-4",children:[i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-red-900/30":"bg-red-100"}`,children:[i.jsx("strong",{children:"Rule 1:"})," Always return a single root element"]}),i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-orange-900/30":"bg-orange-100"}`,children:[i.jsx("strong",{children:"Rule 2:"})," Close all tags (even self-closing ones)"]}),i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-yellow-900/30":"bg-yellow-100"}`,children:[i.jsx("strong",{children:"Rule 3:"})," Use camelCase for attributes (className, onClick, etc.)"]}),i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-green-900/30":"bg-green-100"}`,children:[i.jsx("strong",{children:"Rule 4:"})," JavaScript expressions go inside ",i.jsx("code",{className:"bg-black/20 px-2 py-1 rounded",children:"{}"})]})]})]}),i.jsxs(V,{title:"Components",icon:"🧩",theme:t,children:[i.jsxs("p",{children:[i.jsx("strong",{children:"Components"})," are like LEGO blocks! Each piece is a component that you can reuse! 🎨"]}),i.jsx("p",{children:"Components are the building blocks of React. They're reusable pieces of UI."}),i.jsx($,{theme:t,language:"jsx",code:`// A simple component
function Button() {
  return <button>Click Me! 🎯</button>;
}

// Using the component
function App() {
  return (
    <div>
      <h1>My App</h1>
      <Button />
      <Button />
      <Button />
    </div>
  );
}

// You get 3 buttons! 🎉`}),i.jsxs("p",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-purple-900/30":"bg-purple-100"}`,children:[i.jsx("strong",{children:"Real-World Example:"})," Think of components like toys! 🧸 You can have multiple toy cars (same component), but each can be a different color (different props)!"]})]}),i.jsxs(V,{title:"Functional Components",icon:"⚡",theme:t,children:[i.jsxs("p",{children:["In React, we mostly use ",i.jsx("strong",{children:"Functional Components"}),". They're like JavaScript functions that return JSX!"]}),i.jsx($,{theme:t,language:"jsx",code:`// Simple functional component
function Greeting() {
  return <h1>Hello, friend! 👋</h1>;
}

// Component with variables
function Welcome() {
  const message = "Welcome to React!";
  const emoji = "🚀";
  
  return (
    <div>
      <h1>{message} {emoji}</h1>
      <p>Let's build something amazing!</p>
    </div>
  );
}

// Component with logic
function TimeGreeting() {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good Morning ☀️" : "Good Afternoon 🌤️";
  
  return <h1>{greeting}</h1>;
}`}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-blue-900/30":"bg-blue-100"}`,children:[i.jsx("p",{children:i.jsx("strong",{children:"Key Points:"})}),i.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[i.jsx("li",{children:"A component is just a function!"}),i.jsx("li",{children:"It returns JSX (what to display)"}),i.jsx("li",{children:"Can have variables and logic inside"}),i.jsx("li",{children:"Must start with a capital letter"})]})]})]}),i.jsxs(V,{title:"Component Naming Conventions",icon:"📛",theme:t,children:[i.jsx("p",{children:"Follow these rules when naming components:"}),i.jsxs("div",{className:"space-y-3 mt-4",children:[i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-green-900/30":"bg-green-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"✅ Good Names (PascalCase)"}),i.jsx($,{theme:t,language:"jsx",code:`function Button() { }
function UserProfile() { }
function ShoppingCart() { }
function NavigationBar() { }`})]}),i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-red-900/30":"bg-red-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"❌ Bad Names"}),i.jsx($,{theme:t,language:"jsx",code:`function button() { }  // lowercase - wrong!
function user_profile() { }  // snake_case - wrong!
function shopping-cart() { }  // kebab-case - wrong!`})]})]}),i.jsxs("p",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-yellow-900/30":"bg-yellow-100"}`,children:[i.jsx("strong",{children:"Remember:"})," Component names must start with a capital letter! This helps React know it's a component, not a regular HTML tag."]})]}),i.jsxs(V,{title:"Export & Import",icon:"📦",theme:t,children:[i.jsx("p",{children:"To use components in different files, we need to export and import them!"}),i.jsxs("div",{className:"space-y-4 mt-4",children:[i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-blue-900/30":"bg-blue-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"Named Export & Import"}),i.jsx($,{theme:t,language:"jsx",code:`// Button.jsx
export function Button() {
  return <button>Click me!</button>;
}

export function BigButton() {
  return <button style={{fontSize: '24px'}}>Big Click!</button>;
}

// App.jsx
import { Button, BigButton } from './Button';

function App() {
  return (
    <div>
      <Button />
      <BigButton />
    </div>
  );
}`})]}),i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-purple-900/30":"bg-purple-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"Default Export & Import"}),i.jsx($,{theme:t,language:"jsx",code:`// Card.jsx
export default function Card() {
  return <div className="card">I'm a card!</div>;
}

// App.jsx
import Card from './Card';  // No curly braces!

function App() {
  return <Card />;
}`})]})]}),i.jsxs("p",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-green-900/30":"bg-green-100"}`,children:[i.jsx("strong",{children:"Tip:"})," Use named exports when you have multiple components in one file. Use default export when you have one main component per file!"]})]}),i.jsxs(V,{title:"Reusable Components",icon:"♻️",theme:t,children:[i.jsx("p",{children:"The best part about components? You can use them over and over! 🔄"}),i.jsx($,{theme:t,language:"jsx",code:`// Create a Star component
function Star() {
  return <span style={{fontSize: '30px'}}>⭐</span>;
}

// Use it multiple times!
function Rating() {
  return (
    <div>
      <h2>Movie Rating:</h2>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  );
}

// Create once, use many times! 🎉`}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-purple-900/30":"bg-purple-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"A More Useful Example:"}),i.jsx($,{theme:t,language:"jsx",code:`function ProfileCard() {
  return (
    <div className="card">
      <img src="avatar.jpg" alt="User" />
      <h3>User Name</h3>
      <p>User Bio</p>
      <button>Follow</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Social Network</h1>
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      {/* Same component, used 3 times! */}
    </div>
  );
}`})]}),i.jsxs("p",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-blue-900/30":"bg-blue-100"}`,children:[i.jsx("strong",{children:"Real-World Example:"})," Instagram uses the same post component thousands of times! Each post looks the same but shows different content. That's the power of reusable components! 📱"]})]}),i.jsxs(V,{title:"Component Composition",icon:"🏗️",theme:t,children:[i.jsxs("p",{children:[i.jsx("strong",{children:"Component Composition"})," means building big components from smaller ones! Like building a house from bricks! 🏠"]}),i.jsx($,{theme:t,language:"jsx",code:`// Small components
function Header() {
  return <header><h1>My Website</h1></header>;
}

function Navigation() {
  return (
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
  );
}

function Content() {
  return (
    <main>
      <h2>Welcome! 👋</h2>
      <p>This is my awesome website!</p>
    </main>
  );
}

function Footer() {
  return <footer><p>© 2025 My Website</p></footer>;
}

// Big component made from small ones!
function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Content />
      <Footer />
    </div>
  );
}`}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-yellow-900/30":"bg-yellow-100"}`,children:[i.jsx("p",{children:i.jsx("strong",{children:"Benefits of Component Composition:"})}),i.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[i.jsx("li",{children:"🧹 Cleaner code - each piece does one thing"}),i.jsx("li",{children:"🔧 Easier to fix - find the problem component"}),i.jsx("li",{children:"♻️ Reusable - use components in different places"}),i.jsx("li",{children:"👥 Team-friendly - different people work on different components"})]})]}),i.jsxs("p",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-green-900/30":"bg-green-100"}`,children:[i.jsx("strong",{children:"Real-World Example:"})," Think of a pizza! 🍕 The whole pizza is your app. The crust, sauce, cheese, and toppings are different components. Together they make something delicious!"]})]}),i.jsxs("div",{className:`mt-8 p-6 rounded-xl text-center ${t==="dark"?"bg-gradient-to-r from-green-900/40 to-blue-900/40 border border-green-500/30":"bg-gradient-to-r from-green-100 to-blue-100 border border-green-300"}`,children:[i.jsx("h3",{className:`mb-2 ${t==="dark"?"text-green-300":"text-green-900"}`,children:"🎉 Amazing Work!"}),i.jsx("p",{className:t==="dark"?"text-gray-200":"text-gray-800",children:"You've mastered JSX and Components! You can now create and reuse UI pieces like a pro! Ready for Phase 3? Let's learn about Props and State! 🚀"})]})]})}function Xk({theme:t}){return i.jsxs("div",{className:"max-w-5xl mx-auto mt-20 pb-12",children:[i.jsx("h1",{className:`text-center mb-8 ${t==="dark"?"text-white":"text-gray-900"}`,children:"🔁 Phase 3: Props & State"}),i.jsxs(V,{title:"What are Props?",icon:"📦",theme:t,children:[i.jsxs("p",{children:[i.jsx("strong",{children:"Props"})," (short for properties) are like gifts 🎁 you give to components!"]}),i.jsx("p",{children:"They let you pass data from a parent component to a child component."}),i.jsx($,{theme:t,language:"jsx",code:`// Child component that receives props
function Greeting(props) {
  return <h1>Hello, {props.name}! 👋</h1>;
}

// Parent component that sends props
function App() {
  return (
    <div>
      <Greeting name="Alex" />
      <Greeting name="Sam" />
      <Greeting name="Jordan" />
    </div>
  );
}

// Output:
// Hello, Alex! 👋
// Hello, Sam! 👋
// Hello, Jordan! 👋`}),i.jsxs("p",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-purple-900/30":"bg-purple-100"}`,children:[i.jsx("strong",{children:"Real-World Example:"})," Think of props like a vending machine! 🥤 You put in money (props), select a drink (component), and get exactly what you chose!"]})]}),i.jsxs(V,{title:"Passing Props",icon:"➡️",theme:t,children:[i.jsx("p",{children:"You can pass different types of data as props:"}),i.jsx($,{theme:t,language:"jsx",code:`function Card(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>Price: ${props.price}</p>
      <p>In Stock: {props.inStock ? "Yes ✅" : "No ❌"}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Card 
        title="Gaming Mouse"
        description="RGB gaming mouse with 7 buttons"
        price={49.99}
        inStock={true}
      />
      <Card 
        title="Keyboard"
        description="Mechanical keyboard"
        price={89.99}
        inStock={false}
      />
    </div>
  );
}`}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-blue-900/30":"bg-blue-100"}`,children:[i.jsx("p",{children:i.jsx("strong",{children:"You can pass:"})}),i.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[i.jsxs("li",{children:["Strings: ",i.jsx("code",{className:"bg-black/20 px-2 py-1 rounded",children:'name="Alex"'})]}),i.jsxs("li",{children:["Numbers: ",i.jsx("code",{className:"bg-black/20 px-2 py-1 rounded",children:"age={10}"})]}),i.jsxs("li",{children:["Booleans: ",i.jsx("code",{className:"bg-black/20 px-2 py-1 rounded",children:"isActive={true}"})]}),i.jsxs("li",{children:["Arrays: ",i.jsx("code",{className:"bg-black/20 px-2 py-1 rounded",children:"colors={['red', 'blue']}"})]}),i.jsxs("li",{children:["Objects: ",i.jsx("code",{className:"bg-black/20 px-2 py-1 rounded",children:"user={{name: 'Alex'}}"})]}),i.jsxs("li",{children:["Functions: ",i.jsx("code",{className:"bg-black/20 px-2 py-1 rounded",children:"onClick={handleClick}"})]})]})]})]}),i.jsxs(V,{title:"Props Destructuring",icon:"📤",theme:t,children:[i.jsxs("p",{children:["Instead of writing ",i.jsx("code",{className:"bg-black/20 px-2 py-1 rounded",children:"props.name"})," every time, we can destructure props to make code cleaner!"]}),i.jsxs("div",{className:"space-y-4 mt-4",children:[i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-yellow-900/30":"bg-yellow-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"Without Destructuring:"}),i.jsx($,{theme:t,language:"jsx",code:`function UserCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>City: {props.city}</p>
    </div>
  );
}`})]}),i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-green-900/30":"bg-green-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"With Destructuring (Better! ✨):"}),i.jsx($,{theme:t,language:"jsx",code:`function UserCard({ name, age, city }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
}

// Much cleaner! No more 'props.' everywhere!`})]})]})]}),i.jsxs(V,{title:"Default Props",icon:"🎯",theme:t,children:[i.jsx("p",{children:"Sometimes you want default values if props aren't provided!"}),i.jsx($,{theme:t,language:"jsx",code:`function Button({ text = "Click Me", color = "blue" }) {
  return (
    <button style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}

function App() {
  return (
    <div>
      {/* Uses defaults */}
      <Button />
      
      {/* Custom text, default color */}
      <Button text="Submit" />
      
      {/* Both custom */}
      <Button text="Delete" color="red" />
    </div>
  );
}`}),i.jsxs("p",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-purple-900/30":"bg-purple-100"}`,children:[i.jsx("strong",{children:"Real-World Example:"})," Like ordering a pizza! 🍕 If you don't specify toppings, you get the default cheese pizza. But you can customize it!"]})]}),i.jsxs(V,{title:"Props vs State",icon:"⚖️",theme:t,children:[i.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-blue-900/30":"bg-blue-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"📦 Props"}),i.jsxs("ul",{className:"space-y-2 text-sm",children:[i.jsx("li",{children:"✅ Passed from parent to child"}),i.jsx("li",{children:"✅ Read-only (can't change)"}),i.jsx("li",{children:"✅ Like function arguments"}),i.jsx("li",{children:"✅ Makes components reusable"}),i.jsx("li",{children:"❌ Can't be changed by the child"})]}),i.jsxs("p",{className:"mt-2 text-sm",children:[i.jsx("strong",{children:"Example:"})," Your age when you tell someone"]})]}),i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-purple-900/30":"bg-purple-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"🔄 State"}),i.jsxs("ul",{className:"space-y-2 text-sm",children:[i.jsx("li",{children:"✅ Belongs to the component"}),i.jsx("li",{children:"✅ Can be changed"}),i.jsx("li",{children:"✅ Like component's memory"}),i.jsx("li",{children:"✅ Makes components interactive"}),i.jsx("li",{children:"✅ When it changes, component re-renders"})]}),i.jsxs("p",{className:"mt-2 text-sm",children:[i.jsx("strong",{children:"Example:"})," A light switch (on/off)"]})]})]}),i.jsxs("p",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-green-900/30":"bg-green-100"}`,children:[i.jsx("strong",{children:"Remember:"})," Props flow down 👇 (parent to child), State stays inside 🏠 (the component)"]})]}),i.jsxs(V,{title:"What is State?",icon:"🔄",theme:t,children:[i.jsxs("p",{children:[i.jsx("strong",{children:"State"})," is like a component's memory! 🧠 It remembers information that can change!"]}),i.jsx("p",{children:"When state changes, React automatically updates what you see on the screen! Like magic! ✨"}),i.jsx($,{theme:t,language:"jsx",code:`import { useState } from 'react';

function LightSwitch() {
  // State: is the light on or off?
  const [isOn, setIsOn] = useState(false);
  
  return (
    <div>
      <p>The light is {isOn ? "ON 💡" : "OFF 🌑"}</p>
      <button onClick={() => setIsOn(!isOn)}>
        Toggle Light
      </button>
    </div>
  );
}

// Click the button, and the light switches! 🎉`}),i.jsxs("p",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-blue-900/30":"bg-blue-100"}`,children:[i.jsx("strong",{children:"Real-World Example:"})," Think of a video game! 🎮 Your score, health, and level are all state - they change as you play!"]})]}),i.jsxs(V,{title:"useState Hook",icon:"🎣",theme:t,children:[i.jsxs("p",{children:[i.jsx("code",{className:"bg-black/20 px-2 py-1 rounded",children:"useState"})," is a special function (called a Hook) that adds state to your component!"]}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-purple-900/30":"bg-purple-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"How it works:"}),i.jsx($,{theme:t,language:"jsx",code:`import { useState } from 'react';

function Counter() {
  // useState returns an array with 2 things:
  // 1. The current value (count)
  // 2. A function to update it (setCount)
  const [count, setCount] = useState(0);
  //     ↑        ↑            ↑
  //   value   updater    initial value
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Add 1 ➕
      </button>
    </div>
  );
}`})]}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-green-900/30":"bg-green-100"}`,children:[i.jsx("p",{children:i.jsx("strong",{children:"Breaking it down:"})}),i.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[i.jsxs("li",{children:[i.jsx("code",{className:"bg-black/20 px-1",children:"useState(0)"})," - Start with 0"]}),i.jsxs("li",{children:[i.jsx("code",{className:"bg-black/20 px-1",children:"count"})," - Current value"]}),i.jsxs("li",{children:[i.jsx("code",{className:"bg-black/20 px-1",children:"setCount"})," - Function to update count"]}),i.jsxs("li",{children:["When you call ",i.jsx("code",{className:"bg-black/20 px-1",children:"setCount"}),", React re-renders!"]})]})]})]}),i.jsxs(V,{title:"Updating State",icon:"🔄",theme:t,children:[i.jsx("p",{children:"Let's see different ways to update state!"}),i.jsx($,{theme:t,language:"jsx",code:`import { useState } from 'react';

function FunCounter() {
  const [score, setScore] = useState(0);
  
  return (
    <div>
      <h2>Score: {score} 🎯</h2>
      
      {/* Add 1 */}
      <button onClick={() => setScore(score + 1)}>
        +1
      </button>
      
      {/* Add 10 */}
      <button onClick={() => setScore(score + 10)}>
        +10
      </button>
      
      {/* Reset to 0 */}
      <button onClick={() => setScore(0)}>
        Reset
      </button>
      
      {/* Double the score */}
      <button onClick={() => setScore(score * 2)}>
        Double! ×2
      </button>
    </div>
  );
}`}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-yellow-900/30":"bg-yellow-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"⚠️ Important Rule:"}),i.jsx("p",{children:"Never change state directly! Always use the setter function!"}),i.jsx($,{theme:t,language:"jsx",code:`// ❌ WRONG - Don't do this!
score = score + 1;

// ✅ CORRECT - Always use setter!
setScore(score + 1);`})]})]}),i.jsxs(V,{title:"Multiple State Variables",icon:"🎪",theme:t,children:[i.jsx("p",{children:"You can have as many state variables as you need!"}),i.jsx($,{theme:t,language:"jsx",code:`import { useState } from 'react';

function Profile() {
  const [name, setName] = useState("Alex");
  const [age, setAge] = useState(10);
  const [favoriteColor, setFavoriteColor] = useState("blue");
  const [likes, setLikes] = useState(0);
  
  return (
    <div>
      <h2>{name}'s Profile</h2>
      <p>Age: {age}</p>
      <p>Favorite Color: {favoriteColor}</p>
      <p>Likes: {likes} ❤️</p>
      
      <button onClick={() => setLikes(likes + 1)}>
        Like! 👍
      </button>
      
      <button onClick={() => setAge(age + 1)}>
        Birthday! 🎂
      </button>
    </div>
  );
}`}),i.jsxs("p",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-blue-900/30":"bg-blue-100"}`,children:[i.jsx("strong",{children:"Tip:"})," Use multiple simple state variables instead of one complex object. It's easier to understand and update!"]})]}),i.jsxs(V,{title:"State Immutability",icon:"🔒",theme:t,children:[i.jsxs("p",{children:[i.jsx("strong",{children:"Immutability"})," means don't change the original! Create a new copy instead! 📋"]}),i.jsx("p",{children:"This is super important for arrays and objects!"}),i.jsxs("div",{className:"space-y-4 mt-4",children:[i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-red-900/30":"bg-red-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"❌ Wrong Way - Mutating State:"}),i.jsx($,{theme:t,language:"jsx",code:`const [items, setItems] = useState([1, 2, 3]);

// DON'T DO THIS!
items.push(4);  // Directly changing the array
setItems(items);  // React might not notice the change!`})]}),i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-green-900/30":"bg-green-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"✅ Correct Way - Create New Array:"}),i.jsx($,{theme:t,language:"jsx",code:`const [items, setItems] = useState([1, 2, 3]);

// Create a NEW array with the spread operator
setItems([...items, 4]);  // React sees the change!

// Or use methods that return new arrays
setItems(items.concat(4));`})]})]}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-purple-900/30":"bg-purple-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"Full Example - Todo List:"}),i.jsx($,{theme:t,language:"jsx",code:`import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState(['Homework', 'Play']);
  const [input, setInput] = useState('');
  
  const addTodo = () => {
    // Create new array with old items + new item
    setTodos([...todos, input]);
    setInput('');  // Clear input
  };
  
  const removeTodo = (index) => {
    // Create new array without the item at index
    setTodos(todos.filter((_, i) => i !== index));
  };
  
  return (
    <div>
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add todo..."
      />
      <button onClick={addTodo}>Add</button>
      
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`})]}),i.jsxs("p",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-yellow-900/30":"bg-yellow-100"}`,children:[i.jsx("strong",{children:"Remember:"})," Always create a NEW copy, don't change the original! Use spread operator ",i.jsx("code",{className:"bg-black/20 px-2 py-1 rounded",children:"..."}),",",i.jsx("code",{className:"bg-black/20 px-2 py-1 rounded",children:".map()"}),",",i.jsx("code",{className:"bg-black/20 px-2 py-1 rounded",children:".filter()"}),", etc."]})]}),i.jsxs("div",{className:`mt-8 p-6 rounded-xl text-center ${t==="dark"?"bg-gradient-to-r from-green-900/40 to-blue-900/40 border border-green-500/30":"bg-gradient-to-r from-green-100 to-blue-100 border border-green-300"}`,children:[i.jsx("h3",{className:`mb-2 ${t==="dark"?"text-green-300":"text-green-900"}`,children:"🎉 Fantastic Progress!"}),i.jsx("p",{className:t==="dark"?"text-gray-200":"text-gray-800",children:"You now understand Props and State - the heart of React! You can pass data around and make components interactive! Ready for Phase 4? Let's learn about Events and Lists! ⚡"})]})]})}function Qk({theme:t}){return i.jsxs("div",{className:"max-w-5xl mx-auto mt-20 pb-12",children:[i.jsx("h1",{className:`text-center mb-8 ${t==="dark"?"text-white":"text-gray-900"}`,children:"⚡ Phase 4: Events, Lists & Conditional Rendering"}),i.jsxs(V,{title:"Event Handling",icon:"👆",theme:t,children:[i.jsxs("p",{children:[i.jsx("strong",{children:"Events"})," are things that happen! Clicks, typing, hovering, etc. Let's make our components respond to these events! 🎯"]}),i.jsx($,{theme:t,language:"jsx",code:`import { useState } from 'react';

function ClickMe() {
  const [clicks, setClicks] = useState(0);
  
  // Event handler function
  const handleClick = () => {
    setClicks(clicks + 1);
    alert('Button clicked! 🎉');
  };
  
  return (
    <div>
      <p>Clicked {clicks} times</p>
      <button onClick={handleClick}>
        Click Me! 🖱️
      </button>
    </div>
  );
}`}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-purple-900/30":"bg-purple-100"}`,children:[i.jsx("p",{children:i.jsx("strong",{children:"Common Events:"})}),i.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[i.jsxs("li",{children:[i.jsx("code",{className:"bg-black/20 px-2 py-1 rounded",children:"onClick"})," - When you click"]}),i.jsxs("li",{children:[i.jsx("code",{className:"bg-black/20 px-2 py-1 rounded",children:"onChange"})," - When input changes"]}),i.jsxs("li",{children:[i.jsx("code",{className:"bg-black/20 px-2 py-1 rounded",children:"onSubmit"})," - When form submits"]}),i.jsxs("li",{children:[i.jsx("code",{className:"bg-black/20 px-2 py-1 rounded",children:"onMouseEnter"})," - When mouse enters"]}),i.jsxs("li",{children:[i.jsx("code",{className:"bg-black/20 px-2 py-1 rounded",children:"onMouseLeave"})," - When mouse leaves"]}),i.jsxs("li",{children:[i.jsx("code",{className:"bg-black/20 px-2 py-1 rounded",children:"onKeyDown"})," - When key is pressed"]})]})]}),i.jsxs("p",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-blue-900/30":"bg-blue-100"}`,children:[i.jsx("strong",{children:"Real-World Example:"})," Like a doorbell! 🔔 When someone presses it (event), it rings (handler function)!"]})]}),i.jsxs(V,{title:"Passing Arguments to Events",icon:"📬",theme:t,children:[i.jsx("p",{children:"Sometimes you want to pass extra information to your event handlers!"}),i.jsx($,{theme:t,language:"jsx",code:`import { useState } from 'react';

function ColorPicker() {
  const [color, setColor] = useState('gray');
  
  // Function that takes a parameter
  const changeColor = (newColor) => {
    setColor(newColor);
  };
  
  return (
    <div style={{ backgroundColor: color, padding: '20px' }}>
      <p>Current color: {color}</p>
      
      {/* Pass argument using arrow function */}
      <button onClick={() => changeColor('red')}>
        Red 🔴
      </button>
      <button onClick={() => changeColor('blue')}>
        Blue 🔵
      </button>
      <button onClick={() => changeColor('green')}>
        Green 🟢
      </button>
      <button onClick={() => changeColor('yellow')}>
        Yellow 🟡
      </button>
    </div>
  );
}`}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-green-900/30":"bg-green-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"Two Ways to Pass Arguments:"}),i.jsx($,{theme:t,language:"jsx",code:`// Method 1: Arrow function (most common)
<button onClick={() => handleClick('hello')}>Click</button>

// Method 2: Bind
<button onClick={handleClick.bind(null, 'hello')}>Click</button>`})]})]}),i.jsxs(V,{title:"Synthetic Events",icon:"🎭",theme:t,children:[i.jsxs("p",{children:["React wraps browser events in something called ",i.jsx("strong",{children:"Synthetic Events"}),". They work the same across all browsers! 🌐"]}),i.jsx($,{theme:t,language:"jsx",code:`function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();  // Stop page reload!
    console.log('Form submitted!');
  };
  
  const handleInput = (event) => {
    console.log('You typed:', event.target.value);
  };
  
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log('You pressed Enter!');
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        onChange={handleInput}
        onKeyPress={handleKeyPress}
        placeholder="Type something..."
      />
      <button type="submit">Submit</button>
    </form>
  );
}`}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-yellow-900/30":"bg-yellow-100"}`,children:[i.jsx("p",{children:i.jsx("strong",{children:"Useful Event Properties:"})}),i.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[i.jsxs("li",{children:[i.jsx("code",{className:"bg-black/20 px-1",children:"event.target.value"})," - Input value"]}),i.jsxs("li",{children:[i.jsx("code",{className:"bg-black/20 px-1",children:"event.preventDefault()"})," - Stop default behavior"]}),i.jsxs("li",{children:[i.jsx("code",{className:"bg-black/20 px-1",children:"event.key"})," - Which key was pressed"]}),i.jsxs("li",{children:[i.jsx("code",{className:"bg-black/20 px-1",children:"event.target"})," - The element that triggered it"]})]})]})]}),i.jsxs(V,{title:"Conditional Rendering - if/else",icon:"🔀",theme:t,children:[i.jsxs("p",{children:[i.jsx("strong",{children:"Conditional Rendering"})," means showing different things based on conditions! Like choosing what to wear based on weather! ☀️🌧️"]}),i.jsx($,{theme:t,language:"jsx",code:`import { useState } from 'react';

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Method 1: if/else with early return
  if (isLoggedIn) {
    return (
      <div>
        <h2>Welcome back! 👋</h2>
        <button onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Please log in 🔐</h2>
        <button onClick={() => setIsLoggedIn(true)}>
          Login
        </button>
      </div>
    );
  }
}`}),i.jsxs("p",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-blue-900/30":"bg-blue-100"}`,children:[i.jsx("strong",{children:"Real-World Example:"})," Like a restaurant door! 🍽️ If you're 18+, you can enter. If not, you can't. Same door, different result!"]})]}),i.jsxs(V,{title:"Conditional Rendering - Ternary Operator",icon:"❓",theme:t,children:[i.jsxs("p",{children:["The ",i.jsx("strong",{children:"ternary operator"})," is a shorter way to write if/else!"]}),i.jsx("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-purple-900/30":"bg-purple-100"}`,children:i.jsxs("p",{className:"mb-2",children:["Format: ",i.jsx("code",{className:"bg-black/20 px-2 py-1 rounded",children:"condition ? true : false"})]})}),i.jsx($,{theme:t,language:"jsx",code:`import { useState } from 'react';

function Weather() {
  const [isSunny, setIsSunny] = useState(true);
  
  return (
    <div>
      <h2>
        {isSunny ? "It's sunny! ☀️" : "It's rainy! 🌧️"}
      </h2>
      
      <p>
        {isSunny ? "Wear sunglasses! 😎" : "Bring an umbrella! ☔"}
      </p>
      
      <button onClick={() => setIsSunny(!isSunny)}>
        Change Weather
      </button>
    </div>
  );
}

// More examples:
function App() {
  const age = 12;
  const score = 85;
  
  return (
    <div>
      {/* Simple condition */}
      <p>{age >= 13 ? "Teenager" : "Kid"}</p>
      
      {/* With different components */}
      {score >= 90 ? <Prize /> : <TryAgain />}
      
      {/* With styling */}
      <p style={{ color: score >= 70 ? 'green' : 'red' }}>
        Score: {score}
      </p>
    </div>
  );
}`})]}),i.jsxs(V,{title:"Conditional Rendering - Logical &&",icon:"🔗",theme:t,children:[i.jsxs("p",{children:["Use ",i.jsx("code",{className:"bg-black/20 px-2 py-1 rounded",children:"&&"})," when you only want to show something if true!"]}),i.jsx($,{theme:t,language:"jsx",code:`import { useState } from 'react';

function Notifications() {
  const [hasMessages, setHasMessages] = useState(true);
  const [messageCount, setMessageCount] = useState(5);
  
  return (
    <div>
      <h2>Inbox</h2>
      
      {/* Only show if hasMessages is true */}
      {hasMessages && (
        <p style={{ color: 'red' }}>
          You have {messageCount} new messages! 📬
        </p>
      )}
      
      {/* Only show if count > 10 */}
      {messageCount > 10 && (
        <p>Wow! You're popular! 🌟</p>
      )}
      
      <button onClick={() => setHasMessages(!hasMessages)}>
        Toggle Messages
      </button>
    </div>
  );
}

// More examples:
function UserProfile() {
  const user = {
    name: 'Alex',
    age: 10,
    premium: true
  };
  
  return (
    <div>
      <h2>{user.name}</h2>
      
      {/* Only show premium badge if user is premium */}
      {user.premium && <span>⭐ Premium Member</span>}
      
      {/* Only show if age is under 13 */}
      {user.age < 13 && <p>👶 Kid Account</p>}
    </div>
  );
}`}),i.jsxs("p",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-green-900/30":"bg-green-100"}`,children:[i.jsx("strong",{children:"Remember:"})," ",i.jsx("code",{className:"bg-black/20 px-1",children:"&&"}),` means "AND". Both things must be true! Like "IF it's sunny AND it's Saturday, go to the park!" 🏞️`]})]}),i.jsxs(V,{title:"Rendering Lists",icon:"📋",theme:t,children:[i.jsxs("p",{children:["When you have a list of items (array), you can use ",i.jsx("code",{className:"bg-black/20 px-2 py-1 rounded",children:".map()"}),"to show them all!"]}),i.jsx($,{theme:t,language:"jsx",code:`function FruitList() {
  const fruits = ['🍎 Apple', '🍌 Banana', '🍊 Orange', '🍇 Grapes'];
  
  return (
    <div>
      <h2>My Favorite Fruits:</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

// Output:
// My Favorite Fruits:
// • 🍎 Apple
// • 🍌 Banana
// • 🍊 Orange
// • 🍇 Grapes`}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-blue-900/30":"bg-blue-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"More Complex Example:"}),i.jsx($,{theme:t,language:"jsx",code:`function StudentList() {
  const students = [
    { id: 1, name: 'Alex', grade: 'A' },
    { id: 2, name: 'Sam', grade: 'B' },
    { id: 3, name: 'Jordan', grade: 'A' },
    { id: 4, name: 'Taylor', grade: 'C' }
  ];
  
  return (
    <div>
      <h2>Class Roster:</h2>
      {students.map((student) => (
        <div key={student.id} className="student-card">
          <h3>{student.name}</h3>
          <p>Grade: {student.grade}</p>
        </div>
      ))}
    </div>
  );
}`})]}),i.jsxs("p",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-purple-900/30":"bg-purple-100"}`,children:[i.jsx("strong",{children:"Real-World Example:"})," Like a roll call! 📢 The teacher has a list of names and calls them one by one. That's what ",i.jsx("code",{className:"bg-black/20 px-1",children:".map()"})," does!"]})]}),i.jsxs(V,{title:"Keys and Their Importance",icon:"🔑",theme:t,children:[i.jsxs("p",{children:["Every item in a list needs a unique ",i.jsx("strong",{children:"key"}),"! It helps React keep track of items! 🎯"]}),i.jsxs("div",{className:"space-y-4 mt-4",children:[i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-red-900/30":"bg-red-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"❌ Bad - No Keys:"}),i.jsx($,{theme:t,language:"jsx",code:`// React will show a warning!
{items.map((item) => (
  <li>{item}</li>
))}`})]}),i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-yellow-900/30":"bg-yellow-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"⚠️ Okay - Using Index (but not best):"}),i.jsx($,{theme:t,language:"jsx",code:`// Works, but only if list never changes order
{items.map((item, index) => (
  <li key={index}>{item}</li>
))}`})]}),i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-green-900/30":"bg-green-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"✅ Best - Using Unique ID:"}),i.jsx($,{theme:t,language:"jsx",code:`// Best! Each item has unique ID
const todos = [
  { id: 1, text: 'Homework' },
  { id: 2, text: 'Play' },
  { id: 3, text: 'Sleep' }
];

{todos.map((todo) => (
  <li key={todo.id}>{todo.text}</li>
))}`})]})]}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-purple-900/30":"bg-purple-100"}`,children:[i.jsx("p",{children:i.jsx("strong",{children:"Why Keys Matter:"})}),i.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[i.jsx("li",{children:"🔍 Help React identify which items changed"}),i.jsx("li",{children:"⚡ Make updates faster and more efficient"}),i.jsx("li",{children:"🎯 Prevent bugs when list changes"}),i.jsx("li",{children:"🔄 Keep component state correct when reordering"})]})]}),i.jsxs("p",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-blue-900/30":"bg-blue-100"}`,children:[i.jsx("strong",{children:"Real-World Example:"})," Like student ID numbers! 🎓 Even if two students have the same name, their ID numbers are different. That's how school tracks everyone!"]})]}),i.jsxs("div",{className:`p-6 rounded-xl mt-6 ${t==="dark"?"bg-purple-900/30":"bg-purple-100"}`,children:[i.jsx("h3",{className:"mb-3",children:"🎮 Fun Practice Project!"}),i.jsx("p",{className:"mb-3",children:"Let's combine everything we learned!"}),i.jsx($,{theme:t,language:"jsx",code:`import { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', done: true },
    { id: 2, text: 'Build a project', done: false }
  ]);
  const [input, setInput] = useState('');
  
  const addTodo = () => {
    if (input.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: input, done: false }
      ]);
      setInput('');
    }
  };
  
  const toggleDone = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };
  
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  return (
    <div>
      <h1>My Todo List 📝</h1>
      
      {/* Input form */}
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="What to do?"
        />
        <button onClick={addTodo}>Add ➕</button>
      </div>
      
      {/* Show message if no todos */}
      {todos.length === 0 && (
        <p>No todos! Add one above! 👆</p>
      )}
      
      {/* List of todos */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => toggleDone(todo.id)}
              style={{
                textDecoration: todo.done ? 'line-through' : 'none',
                cursor: 'pointer'
              }}
            >
              {todo.done ? '✅' : '⭕'} {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
      
      {/* Show summary */}
      <p>
        Total: {todos.length} | 
        Done: {todos.filter(t => t.done).length} | 
        Left: {todos.filter(t => !t.done).length}
      </p>
    </div>
  );
}`})]}),i.jsxs("div",{className:`mt-8 p-6 rounded-xl text-center ${t==="dark"?"bg-gradient-to-r from-green-900/40 to-blue-900/40 border border-green-500/30":"bg-gradient-to-r from-green-100 to-blue-100 border border-green-300"}`,children:[i.jsx("h3",{className:`mb-2 ${t==="dark"?"text-green-300":"text-green-900"}`,children:"🎉 You're on Fire!"}),i.jsx("p",{className:t==="dark"?"text-gray-200":"text-gray-800",children:"You can now handle events, show lists, and display things conditionally! Your apps are getting interactive! Ready for Phase 5? Let's learn about Forms and Refs! ✍️"})]})]})}function Jk({theme:t}){return i.jsxs("div",{className:"max-w-5xl mx-auto mt-20 pb-12",children:[i.jsx("h1",{className:`text-center mb-8 ${t==="dark"?"text-white":"text-gray-900"}`,children:"✍️ Phase 5: Forms & Refs"}),i.jsxs(V,{title:"Controlled Components",icon:"🎛️",theme:t,children:[i.jsxs("p",{children:["A ",i.jsx("strong",{children:"Controlled Component"})," is when React controls the form input value! React is the boss! 👑"]}),i.jsx($,{theme:t,language:"jsx",code:`import { useState } from 'react';

function NameForm() {
  const [name, setName] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(\`Hello, \${name}! 👋\`);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}  // React controls this!
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
      
      <p>You typed: {name}</p>
    </form>
  );
}`}),i.jsxs("p",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-blue-900/30":"bg-blue-100"}`,children:[i.jsx("strong",{children:"Real-World Example:"})," Like a puppet show! 🎭 React is the puppeteer controlling the strings (input value). Every move is controlled!"]})]}),i.jsxs(V,{title:"Uncontrolled Components",icon:"🆓",theme:t,children:[i.jsxs("p",{children:[i.jsx("strong",{children:"Uncontrolled Components"})," let the DOM control the value. React just reads it when needed!"]}),i.jsx($,{theme:t,language:"jsx",code:`import { useRef } from 'react';

function UncontrolledForm() {
  const nameRef = useRef(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Get value from DOM directly
    alert(\`Hello, \${nameRef.current.value}! 👋\`);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          ref={nameRef}  // DOM controls this!
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}`}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-purple-900/30":"bg-purple-100"}`,children:[i.jsx("p",{children:i.jsx("strong",{children:"When to use which?"})}),i.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[i.jsxs("li",{children:["✅ ",i.jsx("strong",{children:"Controlled"}),": Most of the time! More React-y! Better for validation!"]}),i.jsxs("li",{children:["✅ ",i.jsx("strong",{children:"Uncontrolled"}),": Simple forms, file inputs, or when integrating with non-React code"]})]})]})]}),i.jsxs(V,{title:"useRef Hook",icon:"🎯",theme:t,children:[i.jsxs("p",{children:[i.jsx("code",{className:"bg-black/20 px-2 py-1 rounded",children:"useRef"})," is like a special box 📦 that can hold a value that doesn't cause re-renders!"]}),i.jsx($,{theme:t,language:"jsx",code:`import { useRef, useState } from 'react';

function FocusInput() {
  const inputRef = useRef(null);
  const [count, setCount] = useState(0);
  
  // Focus the input when button clicked
  const focusInput = () => {
    inputRef.current.focus();
  };
  
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>
        Focus Input! 🎯
      </button>
      
      <p>Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Count
      </button>
    </div>
  );
}`}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-green-900/30":"bg-green-100"}`,children:[i.jsx("p",{children:i.jsx("strong",{children:"Common uses for useRef:"})}),i.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[i.jsx("li",{children:"📍 Access DOM elements (like focusing an input)"}),i.jsx("li",{children:"💾 Store values that don't need re-renders"}),i.jsx("li",{children:"⏱️ Keep previous values"}),i.jsx("li",{children:"🎬 Interact with third-party libraries"})]})]})]}),i.jsxs(V,{title:"Handling Multiple Inputs",icon:"🎪",theme:t,children:[i.jsx("p",{children:"When you have many inputs, use one state object!"}),i.jsx($,{theme:t,language:"jsx",code:`import { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    age: '',
    country: 'USA'
  });
  
  // One handler for all inputs!
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value  // Update the right field
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      
      <div>
        <label>Email:</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      
      <div>
        <label>Age:</label>
        <input
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
        />
      </div>
      
      <div>
        <label>Country:</label>
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
        >
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
        </select>
      </div>
      
      <button type="submit">Register 🚀</button>
      
      <div>
        <h3>Preview:</h3>
        <p>Username: {formData.username}</p>
        <p>Email: {formData.email}</p>
        <p>Age: {formData.age}</p>
        <p>Country: {formData.country}</p>
      </div>
    </form>
  );
}`}),i.jsxs("p",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-blue-900/30":"bg-blue-100"}`,children:[i.jsx("strong",{children:"Pro Tip:"})," Use the ",i.jsx("code",{className:"bg-black/20 px-1",children:"name"})," attribute to match your state keys. Then one handler can update any field! 🎯"]})]}),i.jsxs(V,{title:"Basic Form Validation",icon:"✅",theme:t,children:[i.jsx("p",{children:"Let's make sure users enter the right information!"}),i.jsx($,{theme:t,language:"jsx",code:`import { useState } from 'react';

function SignupForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });
  
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };
  
  const validate = () => {
    const newErrors = {};
    
    // Username validation
    if (!formData.username) {
      newErrors.username = 'Username is required!';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters!';
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required!';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters!';
    }
    
    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match!';
    }
    
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validate();
    
    if (Object.keys(newErrors).length === 0) {
      // No errors! Submit the form
      alert('Form submitted successfully! 🎉');
      console.log('Form Data:', formData);
    } else {
      // Show errors
      setErrors(newErrors);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          style={{ borderColor: errors.username ? 'red' : '' }}
        />
        {errors.username && (
          <p style={{ color: 'red' }}>❌ {errors.username}</p>
        )}
      </div>
      
      <div>
        <label>Password:</label>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          style={{ borderColor: errors.password ? 'red' : '' }}
        />
        {errors.password && (
          <p style={{ color: 'red' }}>❌ {errors.password}</p>
        )}
      </div>
      
      <div>
        <label>Confirm Password:</label>
        <input
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          style={{ borderColor: errors.confirmPassword ? 'red' : '' }}
        />
        {errors.confirmPassword && (
          <p style={{ color: 'red' }}>❌ {errors.confirmPassword}</p>
        )}
      </div>
      
      <button type="submit">Sign Up 🚀</button>
    </form>
  );
}`}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-yellow-900/30":"bg-yellow-100"}`,children:[i.jsx("p",{children:i.jsx("strong",{children:"Validation Checklist:"})}),i.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[i.jsx("li",{children:"✓ Required fields (not empty)"}),i.jsx("li",{children:"✓ Minimum/maximum length"}),i.jsx("li",{children:"✓ Email format"}),i.jsx("li",{children:"✓ Password strength"}),i.jsx("li",{children:"✓ Matching fields (password confirmation)"}),i.jsx("li",{children:"✓ Number ranges (age between 1-120)"})]})]}),i.jsxs("p",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-green-900/30":"bg-green-100"}`,children:[i.jsx("strong",{children:"Real-World Example:"})," Like a bouncer at a party! 🎉 They check your ID (validation) before letting you in. No ID? No entry!"]})]}),i.jsxs("div",{className:`p-6 rounded-xl mt-6 ${t==="dark"?"bg-purple-900/30":"bg-purple-100"}`,children:[i.jsx("h3",{className:"mb-3",children:"🎮 Complete Form Example with All Features!"}),i.jsx($,{theme:t,language:"jsx",code:`import { useState, useRef } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subscribe: false
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const nameInputRef = useRef(null);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };
  
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required!';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required!';
    } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid!';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required!';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message too short (min 10 chars)!';
    }
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      console.log('Submitted:', formData);
      // Reset form
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          message: '',
          subscribe: false
        });
        setSubmitted(false);
        nameInputRef.current.focus();
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };
  
  if (submitted) {
    return (
      <div className="success">
        <h2>✅ Thank you!</h2>
        <p>Your message has been sent!</p>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact Us 📧</h2>
      
      <div>
        <label>Name:</label>
        <input
          ref={nameInputRef}
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name..."
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      
      <div>
        <label>Email:</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      
      <div>
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message..."
          rows={5}
        />
        {errors.message && <p className="error">{errors.message}</p>}
        <small>{formData.message.length} characters</small>
      </div>
      
      <div>
        <label>
          <input
            name="subscribe"
            type="checkbox"
            checked={formData.subscribe}
            onChange={handleChange}
          />
          Subscribe to newsletter 📰
        </label>
      </div>
      
      <button type="submit">Send Message 🚀</button>
    </form>
  );
}`})]}),i.jsxs("div",{className:`mt-8 p-6 rounded-xl text-center ${t==="dark"?"bg-gradient-to-r from-green-900/40 to-blue-900/40 border border-green-500/30":"bg-gradient-to-r from-green-100 to-blue-100 border border-green-300"}`,children:[i.jsx("h3",{className:`mb-2 ${t==="dark"?"text-green-300":"text-green-900"}`,children:"🎉 Awesome Progress!"}),i.jsx("p",{className:t==="dark"?"text-gray-200":"text-gray-800",children:"You can now create forms, validate data, and use refs! Forms are everywhere in web development! Ready for Phase 6? Let's dive deep into Hooks! 🎣"})]})]})}function qk({theme:t}){return i.jsxs("div",{className:"max-w-5xl mx-auto mt-20 pb-12",children:[i.jsx("h1",{className:`text-center mb-8 ${t==="dark"?"text-white":"text-gray-900"}`,children:"🧠 Phase 6: Hooks (Core + Advanced)"}),i.jsxs(V,{title:"What are Hooks?",icon:"🎣",theme:t,children:[i.jsxs("p",{children:[i.jsx("strong",{children:"Hooks"}),' are special functions that let you "hook into" React features! They give your components superpowers! 🦸']}),i.jsx("p",{children:"Hooks let you use state and other React features without writing a class!"}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-purple-900/30":"bg-purple-100"}`,children:[i.jsx("p",{children:i.jsx("strong",{children:"Rules of Hooks:"})}),i.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[i.jsx("li",{children:"✅ Only call Hooks at the top level (not in loops, conditions, or nested functions)"}),i.jsx("li",{children:"✅ Only call Hooks from React function components or custom Hooks"}),i.jsx("li",{children:'✅ Hook names must start with "use" (useState, useEffect, useMyHook)'})]})]}),i.jsxs("p",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-blue-900/30":"bg-blue-100"}`,children:[i.jsx("strong",{children:"Real-World Example:"})," Hooks are like power-ups in a video game! 🎮 Each hook gives your component a new ability!"]})]}),i.jsxs(V,{title:"useState Hook",icon:"🔄",theme:t,children:[i.jsx("p",{children:"We already learned this one! It adds state to your component!"}),i.jsx($,{theme:t,language:"jsx",code:`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Alex');
  
  return (
    <div>
      <p>{name} clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <button onClick={() => setName('Sam')}>Change Name</button>
    </div>
  );
}`})]}),i.jsxs(V,{title:"useEffect Hook",icon:"⚡",theme:t,children:[i.jsxs("p",{children:[i.jsx("strong",{children:"useEffect"})," lets you perform side effects! Like fetching data, setting up timers, or changing the document title! 🎯"]}),i.jsx($,{theme:t,language:"jsx",code:`import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    // This runs after every render
    document.title = \`Time: \${seconds}s\`;
    
    // Set up interval
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
    
    // Cleanup function (runs when component unmounts)
    return () => {
      clearInterval(interval);
    };
  }, [seconds]); // Dependency array
  
  return <h1>Timer: {seconds} seconds ⏱️</h1>;
}`}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-green-900/30":"bg-green-100"}`,children:[i.jsx("p",{children:i.jsx("strong",{children:"Common uses:"})}),i.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[i.jsx("li",{children:"📡 Fetching data from an API"}),i.jsx("li",{children:"⏰ Setting up timers or intervals"}),i.jsx("li",{children:"📊 Updating the document title"}),i.jsx("li",{children:"🎧 Adding event listeners"}),i.jsx("li",{children:"💾 Saving to localStorage"})]})]})]}),i.jsxs(V,{title:"useEffect Dependency Array",icon:"📋",theme:t,children:[i.jsx("p",{children:"The dependency array tells useEffect when to run!"}),i.jsx($,{theme:t,language:"jsx",code:`import { useState, useEffect } from 'react';

function Examples() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  
  // No dependency array - runs after EVERY render
  useEffect(() => {
    console.log('Runs every render');
  });
  
  // Empty array [] - runs only ONCE (on mount)
  useEffect(() => {
    console.log('Runs only on mount');
  }, []);
  
  // With dependencies - runs when those values change
  useEffect(() => {
    console.log('Runs when count changes');
  }, [count]);
  
  // Multiple dependencies
  useEffect(() => {
    console.log('Runs when count OR name changes');
  }, [count, name]);
  
  return <div>...</div>;
}`}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-yellow-900/30":"bg-yellow-100"}`,children:[i.jsx("p",{children:i.jsx("strong",{children:"Remember:"})}),i.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[i.jsx("li",{children:"🔄 No array = runs every render"}),i.jsx("li",{children:"🎯 Empty [] = runs once on mount"}),i.jsx("li",{children:"📊 [value] = runs when value changes"})]})]})]}),i.jsxs(V,{title:"useContext Hook",icon:"🌐",theme:t,children:[i.jsxs("p",{children:[i.jsx("strong",{children:"useContext"})," lets you share data without passing props through every level! Like teleporting data! 🚀"]}),i.jsx($,{theme:t,language:"jsx",code:`import { createContext, useContext, useState } from 'react';

// 1. Create context
const ThemeContext = createContext();

// 2. Provider component
function App() {
  const [theme, setTheme] = useState('dark');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

// 3. Use context in any child component
function Toolbar() {
  return <Button />;
}

function Button() {
  // Access context without prop drilling!
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    <button
      style={{
        background: theme === 'dark' ? '#333' : '#fff',
        color: theme === 'dark' ? '#fff' : '#000'
      }}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      Current: {theme}
    </button>
  );
}`}),i.jsxs("p",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-blue-900/30":"bg-blue-100"}`,children:[i.jsx("strong",{children:"Real-World Example:"})," Like a radio station! 📻 The station broadcasts (Provider), and anyone with a radio (useContext) can tune in, no wires needed!"]})]}),i.jsxs(V,{title:"useMemo Hook",icon:"🧠",theme:t,children:[i.jsxs("p",{children:[i.jsx("strong",{children:"useMemo"})," remembers expensive calculations so you don't have to repeat them! It's like homework - do it once, remember the answer! 📝"]}),i.jsx($,{theme:t,language:"jsx",code:`import { useState, useMemo } from 'react';

function ExpensiveCalculation() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  
  // This only recalculates when count changes!
  const expensiveValue = useMemo(() => {
    console.log('Calculating...');
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += count;
    }
    return result;
  }, [count]); // Only re-run if count changes
  
  return (
    <div>
      <p>Result: {expensiveValue}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setTodos([...todos, 'New Todo'])}>
        Add Todo (won't recalculate!)
      </button>
    </div>
  );
}`})]}),i.jsxs(V,{title:"useCallback Hook",icon:"🔄",theme:t,children:[i.jsxs("p",{children:[i.jsx("strong",{children:"useCallback"})," remembers functions so they don't get recreated on every render!"]}),i.jsx($,{theme:t,language:"jsx",code:`import { useState, useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);
  
  // This function is only recreated if count changes
  const handleClick = useCallback(() => {
    console.log('Count:', count);
  }, [count]);
  
  return (
    <div>
      <Child onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>
      <button onClick={() => setOtherState(otherState + 1)}>
        Change Other State (Child won't re-render!)
      </button>
    </div>
  );
}

function Child({ onClick }) {
  console.log('Child rendered');
  return <button onClick={onClick}>Click Me</button>;
}`})]}),i.jsxs(V,{title:"useReducer Hook",icon:"🎛️",theme:t,children:[i.jsxs("p",{children:[i.jsx("strong",{children:"useReducer"})," is like useState but for complex state logic! It's like a state machine! 🤖"]}),i.jsx($,{theme:t,language:"jsx",code:`import { useReducer } from 'react';

// Reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>
        + Add
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        - Subtract
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>
        🔄 Reset
      </button>
    </div>
  );
}`}),i.jsxs("p",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-purple-900/30":"bg-purple-100"}`,children:[i.jsx("strong",{children:"When to use useReducer?"})," When you have complex state logic, multiple sub-values, or the next state depends on the previous one!"]})]}),i.jsxs(V,{title:"Custom Hooks",icon:"✨",theme:t,children:[i.jsx("p",{children:"You can create your own hooks! Custom hooks let you reuse stateful logic! 🎯"}),i.jsx($,{theme:t,language:"jsx",code:`import { useState, useEffect } from 'react';

// Custom hook for window size
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return size;
}

// Custom hook for local storage
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  
  return [value, setValue];
}

// Using custom hooks
function App() {
  const size = useWindowSize();
  const [name, setName] = useLocalStorage('name', '');
  
  return (
    <div>
      <p>Window: {size.width} x {size.height}</p>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name (saved in localStorage!)"
      />
    </div>
  );
}`}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-green-900/30":"bg-green-100"}`,children:[i.jsx("p",{children:i.jsx("strong",{children:"Popular Custom Hooks:"})}),i.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[i.jsx("li",{children:"🎣 useFetch - for API calls"}),i.jsx("li",{children:"📱 useMediaQuery - for responsive design"}),i.jsx("li",{children:"💾 useLocalStorage - for local storage"}),i.jsx("li",{children:"⏱️ useDebounce - for delayed updates"}),i.jsx("li",{children:"🎨 useToggle - for boolean states"})]})]})]}),i.jsxs("div",{className:`mt-8 p-6 rounded-xl text-center ${t==="dark"?"bg-gradient-to-r from-green-900/40 to-blue-900/40 border border-green-500/30":"bg-gradient-to-r from-green-100 to-blue-100 border border-green-300"}`,children:[i.jsx("h3",{className:`mb-2 ${t==="dark"?"text-green-300":"text-green-900"}`,children:"🎉 You're a Hooks Master!"}),i.jsx("p",{className:t==="dark"?"text-gray-200":"text-gray-800",children:"Hooks are the heart of modern React! You now have all the tools to build amazing apps! Ready for Phase 7? Let's learn Routing and build multi-page apps! 🧭"})]})]})}function Zk({theme:t}){return i.jsxs("div",{className:"max-w-5xl mx-auto mt-20 pb-12",children:[i.jsx("h1",{className:`text-center mb-8 ${t==="dark"?"text-white":"text-gray-900"}`,children:"🧭 Phase 7: Routing (React Router)"}),i.jsxs(V,{title:"What is React Router?",icon:"🗺️",theme:t,children:[i.jsxs("p",{children:[i.jsx("strong",{children:"React Router"})," lets you create different pages in your app without reloading! It's like having many rooms in a house! 🏠"]}),i.jsxs("p",{children:["Install it with: ",i.jsx("code",{className:"bg-black/20 px-2 py-1 rounded",children:"npm install react-router-dom"})]}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-purple-900/30":"bg-purple-100"}`,children:[i.jsx("p",{children:i.jsx("strong",{children:"Why routing?"})}),i.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[i.jsx("li",{children:"🏠 Different pages (Home, About, Contact)"}),i.jsx("li",{children:"📱 Shareable URLs (send link to specific page)"}),i.jsx("li",{children:"🔙 Back/Forward buttons work"}),i.jsx("li",{children:"⚡ No page reload - super fast!"})]})]})]}),i.jsxs(V,{title:"BrowserRouter & Routes",icon:"🌐",theme:t,children:[i.jsx("p",{children:"Let's create our first multi-page app!"}),i.jsx($,{theme:t,language:"jsx",code:`import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Page components
function Home() {
  return <h1>🏠 Home Page</h1>;
}

function About() {
  return <h1>ℹ️ About Page</h1>;
}

function Contact() {
  return <h1>📧 Contact Page</h1>;
}

// Main App
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

// Now you can visit:
// localhost:3000/ → Home
// localhost:3000/about → About
// localhost:3000/contact → Contact`}),i.jsxs("p",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-blue-900/30":"bg-blue-100"}`,children:[i.jsx("strong",{children:"Real-World Example:"})," Like a TV remote! 📺 Different buttons take you to different channels (pages)!"]})]}),i.jsxs(V,{title:"Link & NavLink",icon:"🔗",theme:t,children:[i.jsx("p",{children:"Use Link to navigate without page reload!"}),i.jsx($,{theme:t,language:"jsx",code:`import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      {/* Regular Link */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      
      {/* NavLink - adds 'active' class when on that page */}
      <NavLink 
        to="/contact"
        style={({ isActive }) => ({
          color: isActive ? 'red' : 'blue',
          fontWeight: isActive ? 'bold' : 'normal'
        })}
      >
        Contact
      </NavLink>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
    </BrowserRouter>
  );
}`})]}),i.jsxs(V,{title:"URL Parameters",icon:"🎯",theme:t,children:[i.jsx("p",{children:"Pass data through the URL!"}),i.jsx($,{theme:t,language:"jsx",code:`import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

// Component that reads URL parameter
function UserProfile() {
  const { username } = useParams();
  
  return (
    <div>
      <h1>Profile: {username}</h1>
      <p>Welcome to {username}'s page! 👋</p>
    </div>
  );
}

function ProductPage() {
  const { id } = useParams();
  
  return (
    <div>
      <h1>Product #{id}</h1>
      <p>Showing details for product {id}</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      {/* Links with parameters */}
      <nav>
        <Link to="/user/alex">Alex's Profile</Link>
        <Link to="/user/sam">Sam's Profile</Link>
        <Link to="/product/123">Product 123</Link>
        <Link to="/product/456">Product 456</Link>
      </nav>
      
      <Routes>
        {/* Route with parameter */}
        <Route path="/user/:username" element={<UserProfile />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}`})]}),i.jsxs(V,{title:"useNavigate Hook",icon:"🚀",theme:t,children:[i.jsx("p",{children:"Navigate programmatically (in code)!"}),i.jsx($,{theme:t,language:"jsx",code:`import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    // After login, go to dashboard
    navigate('/dashboard');
  };
  
  return (
    <form onSubmit={handleLogin}>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

function Dashboard() {
  const navigate = useNavigate();
  
  return (
    <div>
      <h1>Dashboard</h1>
      {/* Go back */}
      <button onClick={() => navigate(-1)}>
        ← Go Back
      </button>
      
      {/* Go to specific page */}
      <button onClick={() => navigate('/profile')}>
        View Profile
      </button>
      
      {/* Replace current page (can't go back) */}
      <button onClick={() => navigate('/logout', { replace: true })}>
        Logout
      </button>
    </div>
  );
}`})]}),i.jsxs(V,{title:"Nested Routing",icon:"📁",theme:t,children:[i.jsx("p",{children:"Create routes inside routes!"}),i.jsx($,{theme:t,language:"jsx",code:`import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

// Parent component with nested routes
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="/dashboard/profile">Profile</Link>
        <Link to="/dashboard/settings">Settings</Link>
        <Link to="/dashboard/stats">Stats</Link>
      </nav>
      
      {/* This is where child routes render */}
      <Outlet />
    </div>
  );
}

function Profile() {
  return <h2>👤 Profile Page</h2>;
}

function Settings() {
  return <h2>⚙️ Settings Page</h2>;
}

function Stats() {
  return <h2>📊 Stats Page</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        
        {/* Nested routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="stats" element={<Stats />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}`})]}),i.jsxs(V,{title:"Protected Routes",icon:"🔐",theme:t,children:[i.jsx("p",{children:"Make routes that only logged-in users can see!"}),i.jsx($,{theme:t,language:"jsx",code:`import { Navigate } from 'react-router-dom';
import { useState } from 'react';

// Protected Route Component
function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
  if (!isLoggedIn) {
    // Redirect to login if not logged in
    return <Navigate to="/login" replace />;
  }
  
  return children;
}

function Login() {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/dashboard');
  };
  
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

function Dashboard() {
  return <h1>🔒 Protected Dashboard</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        {/* Protected route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}`})]}),i.jsxs("div",{className:`p-6 rounded-xl mt-6 ${t==="dark"?"bg-purple-900/30":"bg-purple-100"}`,children:[i.jsx("h3",{className:"mb-3",children:"🎮 Complete Routing Example!"}),i.jsx($,{theme:t,language:"jsx",code:`import { BrowserRouter, Routes, Route, Link, useParams, Navigate } from 'react-router-dom';

// Pages
function Home() {
  return (
    <div>
      <h1>🏠 Home</h1>
      <p>Welcome to our app!</p>
    </div>
  );
}

function BlogList() {
  const posts = [
    { id: 1, title: 'First Post' },
    { id: 2, title: 'Second Post' },
    { id: 3, title: 'Third Post' }
  ];
  
  return (
    <div>
      <h1>📝 Blog Posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          <Link to={\`/blog/\${post.id}\`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
}

function BlogPost() {
  const { id } = useParams();
  return (
    <div>
      <h1>Post #{id}</h1>
      <p>This is blog post {id}</p>
      <Link to="/blog">← Back to all posts</Link>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found! 😢</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}

// Main App
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/blog">Blog</Link> | 
        <Link to="/about">About</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/about" element={<h1>ℹ️ About Us</h1>} />
        
        {/* 404 - Catch all unmatched routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}`})]}),i.jsxs("div",{className:`mt-8 p-6 rounded-xl text-center ${t==="dark"?"bg-gradient-to-r from-green-900/40 to-blue-900/40 border border-green-500/30":"bg-gradient-to-r from-green-100 to-blue-100 border border-green-300"}`,children:[i.jsx("h3",{className:`mb-2 ${t==="dark"?"text-green-300":"text-green-900"}`,children:"🎉 Navigation Master!"}),i.jsx("p",{className:t==="dark"?"text-gray-200":"text-gray-800",children:"You can now build multi-page applications! URLs, navigation, everything! Ready for Phase 8? Let's make things beautiful with Styling! 🎨"})]})]})}function eb({theme:t}){return i.jsxs("div",{className:"max-w-5xl mx-auto mt-20 pb-12",children:[i.jsx("h1",{className:`text-center mb-8 ${t==="dark"?"text-white":"text-gray-900"}`,children:"🎨 Phase 8: Styling in React"}),i.jsxs(V,{title:"CSS Files in React",icon:"📄",theme:t,children:[i.jsx("p",{children:"The traditional way - import CSS files!"}),i.jsx($,{theme:t,language:"jsx",code:`// Button.css
.button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
}

.button:hover {
  background-color: darkblue;
}

// Button.jsx
import './Button.css';

function Button() {
  return <button className="button">Click Me!</button>;
}`})]}),i.jsxs(V,{title:"Inline Styles",icon:"✨",theme:t,children:[i.jsx("p",{children:"Write styles directly in JSX using JavaScript objects!"}),i.jsx($,{theme:t,language:"jsx",code:`function StyledComponent() {
  const boxStyle = {
    backgroundColor: 'purple',
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center'
  };
  
  return (
    <div style={boxStyle}>
      <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>
        Hello! 👋
      </h1>
      <p>Inline styled component!</p>
    </div>
  );
}`}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-yellow-900/30":"bg-yellow-100"}`,children:[i.jsxs("p",{children:[i.jsx("strong",{children:"Note:"})," Use camelCase for property names!"]}),i.jsxs("ul",{className:"list-disc list-inside mt-2",children:[i.jsxs("li",{children:["CSS: ",i.jsx("code",{className:"bg-black/20 px-1",children:"background-color"})]}),i.jsxs("li",{children:["React: ",i.jsx("code",{className:"bg-black/20 px-1",children:"backgroundColor"})]})]})]})]}),i.jsxs(V,{title:"CSS Modules",icon:"📦",theme:t,children:[i.jsx("p",{children:"Scoped CSS that won't affect other components!"}),i.jsx($,{theme:t,language:"jsx",code:`// Button.module.css
.button {
  background-color: green;
  color: white;
  padding: 10px 20px;
}

.primary {
  background-color: blue;
}

.secondary {
  background-color: gray;
}

// Button.jsx
import styles from './Button.module.css';

function Button() {
  return (
    <div>
      <button className={styles.button}>Normal</button>
      <button className={styles.primary}>Primary</button>
      <button className={styles.secondary}>Secondary</button>
      
      {/* Multiple classes */}
      <button className={\`\${styles.button} \${styles.primary}\`}>
        Combined
      </button>
    </div>
  );
}`})]}),i.jsxs(V,{title:"Tailwind CSS",icon:"💨",theme:t,children:[i.jsx("p",{children:"Utility-first CSS framework - the modern way! This website uses it! 🚀"}),i.jsx($,{theme:t,language:"jsx",code:`function TailwindExample() {
  return (
    <div className="container mx-auto p-4">
      {/* Card */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">
          Tailwind Card 🎨
        </h1>
        <p className="text-gray-700 mb-4">
          Tailwind uses utility classes!
        </p>
        
        {/* Button */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click Me!
        </button>
      </div>
      
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <div className="bg-red-100 p-4 rounded">Box 1</div>
        <div className="bg-green-100 p-4 rounded">Box 2</div>
        <div className="bg-blue-100 p-4 rounded">Box 3</div>
      </div>
    </div>
  );
}`}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-green-900/30":"bg-green-100"}`,children:[i.jsx("p",{children:i.jsx("strong",{children:"Common Tailwind Classes:"})}),i.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[i.jsxs("li",{children:[i.jsx("code",{className:"bg-black/20 px-1",children:"p-4"})," - Padding"]}),i.jsxs("li",{children:[i.jsx("code",{className:"bg-black/20 px-1",children:"m-4"})," - Margin"]}),i.jsxs("li",{children:[i.jsx("code",{className:"bg-black/20 px-1",children:"bg-blue-500"})," - Background color"]}),i.jsxs("li",{children:[i.jsx("code",{className:"bg-black/20 px-1",children:"text-white"})," - Text color"]}),i.jsxs("li",{children:[i.jsx("code",{className:"bg-black/20 px-1",children:"rounded"})," - Border radius"]}),i.jsxs("li",{children:[i.jsx("code",{className:"bg-black/20 px-1",children:"shadow-lg"})," - Shadow"]})]})]})]}),i.jsxs(V,{title:"Material UI (MUI)",icon:"🎭",theme:t,children:[i.jsx("p",{children:"Pre-built beautiful components!"}),i.jsx($,{theme:t,language:"jsx",code:`import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function MUIExample() {
  return (
    <div>
      {/* Buttons */}
      <Button variant="contained" color="primary">
        Primary Button
      </Button>
      <Button variant="outlined" color="secondary">
        Secondary Button
      </Button>
      
      {/* Text Field */}
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
      />
      
      {/* Card */}
      <Card>
        <CardContent>
          <h2>Beautiful Card! 🎨</h2>
          <p>Material Design is awesome!</p>
        </CardContent>
      </Card>
    </div>
  );
}`})]}),i.jsxs("div",{className:`mt-8 p-6 rounded-xl text-center ${t==="dark"?"bg-gradient-to-r from-green-900/40 to-blue-900/40 border border-green-500/30":"bg-gradient-to-r from-green-100 to-blue-100 border border-green-300"}`,children:[i.jsx("h3",{className:`mb-2 ${t==="dark"?"text-green-300":"text-green-900"}`,children:"🎉 Styling Superstar!"}),i.jsx("p",{className:t==="dark"?"text-gray-200":"text-gray-800",children:"You know multiple ways to style React apps! Ready for Phase 9? Let's connect to the internet! 🌍"})]})]})}function tb({theme:t}){return i.jsxs("div",{className:"max-w-5xl mx-auto mt-20 pb-12",children:[i.jsx("h1",{className:`text-center mb-8 ${t==="dark"?"text-white":"text-gray-900"}`,children:"🌍 Phase 9: API Integration & Data Handling"}),i.jsxs(V,{title:"What is an API?",icon:"🔌",theme:t,children:[i.jsxs("p",{children:["An ",i.jsx("strong",{children:"API"})," (Application Programming Interface) is like a waiter at a restaurant! 🍽️"]}),i.jsx("p",{children:"You tell the waiter what you want (request), they go to the kitchen (server), and bring back your food (response)!"}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-purple-900/30":"bg-purple-100"}`,children:[i.jsx("p",{children:i.jsx("strong",{children:"Common APIs:"})}),i.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[i.jsx("li",{children:"🌤️ Weather API - Get weather data"}),i.jsx("li",{children:"😸 Cat Facts API - Random cat facts"}),i.jsx("li",{children:"🎬 Movie Database API - Movie information"}),i.jsx("li",{children:"🎮 Pokemon API - Pokemon data"})]})]})]}),i.jsxs(V,{title:"Fetch API",icon:"📡",theme:t,children:[i.jsx("p",{children:"The built-in way to get data from the internet!"}),i.jsx($,{theme:t,language:"jsx",code:`import { useState, useEffect } from 'react';

function CatFacts() {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Fetch data when component mounts
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())  // Convert to JSON
      .then(data => {
        setFact(data.fact);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);
  
  if (loading) {
    return <p>Loading cat fact... 🐱</p>;
  }
  
  return (
    <div>
      <h2>Random Cat Fact:</h2>
      <p>{fact}</p>
    </div>
  );
}`})]}),i.jsxs(V,{title:"Axios",icon:"🚀",theme:t,children:[i.jsx("p",{children:"A better way to make API calls! More features and easier to use!"}),i.jsxs("p",{children:["Install: ",i.jsx("code",{className:"bg-black/20 px-2 py-1 rounded",children:"npm install axios"})]}),i.jsx($,{theme:t,language:"jsx",code:`import { useState, useEffect } from 'react';
import axios from 'axios';

function PokemonInfo() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
      .then(response => {
        setPokemon(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);
  
  if (loading) return <p>Loading... ⏳</p>;
  if (error) return <p>Error: {error} ❌</p>;
  
  return (
    <div>
      <h1>{pokemon.name} ⚡</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
    </div>
  );
}`})]}),i.jsxs(V,{title:"HTTP Methods",icon:"📬",theme:t,children:[i.jsx("p",{children:"Different ways to talk to an API!"}),i.jsxs("div",{className:"grid md:grid-cols-2 gap-4 mt-4",children:[i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-green-900/30":"bg-green-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"GET - Read Data 📖"}),i.jsx($,{theme:t,language:"jsx",code:`// Get all users
axios.get('/api/users')
  .then(response => {
    console.log(response.data);
  });

// Get specific user
axios.get('/api/users/123')
  .then(response => {
    console.log(response.data);
  });`})]}),i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-blue-900/30":"bg-blue-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"POST - Create Data ➕"}),i.jsx($,{theme:t,language:"jsx",code:`// Create new user
axios.post('/api/users', {
  name: 'Alex',
  age: 10,
  email: 'alex@example.com'
})
.then(response => {
  console.log('Created!', response.data);
});`})]}),i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-yellow-900/30":"bg-yellow-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"PUT - Update Data ✏️"}),i.jsx($,{theme:t,language:"jsx",code:`// Update user
axios.put('/api/users/123', {
  name: 'Alex Updated',
  age: 11
})
.then(response => {
  console.log('Updated!', response.data);
});`})]}),i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-red-900/30":"bg-red-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"DELETE - Remove Data 🗑️"}),i.jsx($,{theme:t,language:"jsx",code:`// Delete user
axios.delete('/api/users/123')
  .then(response => {
    console.log('Deleted!');
  });`})]})]})]}),i.jsxs(V,{title:"Loading & Error States",icon:"⏳",theme:t,children:[i.jsx("p",{children:"Always show users what's happening!"}),i.jsx($,{theme:t,language:"jsx",code:`import { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);
  
  // Loading state
  if (loading) {
    return (
      <div>
        <p>Loading users... ⏳</p>
        <div className="spinner">🔄</div>
      </div>
    );
  }
  
  // Error state
  if (error) {
    return (
      <div>
        <p>❌ Error: {error}</p>
        <button onClick={() => window.location.reload()}>
          Try Again
        </button>
      </div>
    );
  }
  
  // Success state
  return (
    <div>
      <h1>Users ({users.length})</h1>
      {users.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}`})]}),i.jsxs(V,{title:"Complete CRUD Example",icon:"🎮",theme:t,children:[i.jsx("p",{children:"Create, Read, Update, Delete - all together!"}),i.jsx($,{theme:t,language:"jsx",code:`import { useState, useEffect } from 'react';
import axios from 'axios';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  
  // READ - Get all todos
  useEffect(() => {
    fetchTodos();
  }, []);
  
  const fetchTodos = () => {
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => {
        setTodos(response.data);
        setLoading(false);
      })
      .catch(error => console.error(error));
  };
  
  // CREATE - Add new todo
  const addTodo = () => {
    if (!input.trim()) return;
    
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: input,
      completed: false,
      userId: 1
    })
    .then(response => {
      setTodos([response.data, ...todos]);
      setInput('');
    });
  };
  
  // UPDATE - Toggle todo
  const toggleTodo = (id, completed) => {
    axios.put(\`https://jsonplaceholder.typicode.com/todos/\${id}\`, {
      completed: !completed
    })
    .then(() => {
      setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, completed: !completed } : todo
      ));
    });
  };
  
  // DELETE - Remove todo
  const deleteTodo = (id) => {
    axios.delete(\`https://jsonplaceholder.typicode.com/todos/\${id}\`)
      .then(() => {
        setTodos(todos.filter(todo => todo.id !== id));
      });
  };
  
  if (loading) return <p>Loading... ⏳</p>;
  
  return (
    <div>
      <h1>Todo List 📝</h1>
      
      {/* Add Todo */}
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="New todo..."
        />
        <button onClick={addTodo}>Add ➕</button>
      </div>
      
      {/* Todo List */}
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id, todo.completed)}
            />
            <span style={{
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}>
              {todo.title}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`})]}),i.jsxs("div",{className:`mt-8 p-6 rounded-xl text-center ${t==="dark"?"bg-gradient-to-r from-green-900/40 to-blue-900/40 border border-green-500/30":"bg-gradient-to-r from-green-100 to-blue-100 border border-green-300"}`,children:[i.jsx("h3",{className:`mb-2 ${t==="dark"?"text-green-300":"text-green-900"}`,children:"🎉 API Expert!"}),i.jsx("p",{className:t==="dark"?"text-gray-200":"text-gray-800",children:"You can now connect your React apps to the internet and work with real data! Ready for Phase 10? Let's learn State Management! 🧘"})]})]})}function nb({theme:t}){return i.jsxs("div",{className:"max-w-5xl mx-auto mt-20 pb-12",children:[i.jsx("h1",{className:`text-center mb-8 ${t==="dark"?"text-white":"text-gray-900"}`,children:"🧘 Phase 10: State Management"}),i.jsxs(V,{title:"Why State Management?",icon:"🤔",theme:t,children:[i.jsx("p",{children:"When your app grows, passing props through many components gets messy! State management helps organize everything! 🗂️"}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-purple-900/30":"bg-purple-100"}`,children:[i.jsx("p",{children:i.jsx("strong",{children:"Problems without state management:"})}),i.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[i.jsx("li",{children:"🎢 Prop drilling (passing props through many levels)"}),i.jsx("li",{children:"😵 Hard to track where data comes from"}),i.jsx("li",{children:"🔄 Same data duplicated in many places"}),i.jsx("li",{children:"🐛 Bugs when data gets out of sync"})]})]}),i.jsxs("p",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-blue-900/30":"bg-blue-100"}`,children:[i.jsx("strong",{children:"Real-World Example:"})," Like a school locker! 🏫 Instead of carrying all your books everywhere, you keep them in one place and grab what you need!"]})]}),i.jsxs(V,{title:"Context API",icon:"🌐",theme:t,children:[i.jsx("p",{children:"React's built-in solution for sharing state!"}),i.jsx($,{theme:t,language:"jsx",code:`import { createContext, useContext, useState } from 'react';

// 1. Create Context
const UserContext = createContext();

// 2. Provider Component
function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: 'Alex',
    age: 10,
    loggedIn: false
  });
  
  const login = () => setUser({ ...user, loggedIn: true });
  const logout = () => setUser({ ...user, loggedIn: false });
  
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// 3. Custom hook to use context
function useUser() {
  return useContext(UserContext);
}

// 4. Use in any component!
function Header() {
  const { user, logout } = useUser();
  
  return (
    <header>
      <h1>Welcome, {user.name}!</h1>
      {user.loggedIn && <button onClick={logout}>Logout</button>}
    </header>
  );
}

function LoginButton() {
  const { user, login } = useUser();
  
  if (user.loggedIn) return null;
  
  return <button onClick={login}>Login</button>;
}

// 5. Wrap app with provider
function App() {
  return (
    <UserProvider>
      <Header />
      <LoginButton />
    </UserProvider>
  );
}`})]}),i.jsxs(V,{title:"Redux Basics",icon:"🏪",theme:t,children:[i.jsxs("p",{children:[i.jsx("strong",{children:"Redux"})," is like a giant store for all your app's data! Popular for big applications! 🏢"]}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-green-900/30":"bg-green-100"}`,children:[i.jsx("p",{children:i.jsx("strong",{children:"Redux Concepts:"})}),i.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[i.jsxs("li",{children:["🏪 ",i.jsx("strong",{children:"Store:"})," Holds all your app's state"]}),i.jsxs("li",{children:["⚡ ",i.jsx("strong",{children:"Actions:"})," Describe what happened"]}),i.jsxs("li",{children:["🔧 ",i.jsx("strong",{children:"Reducers:"})," Functions that update state"]}),i.jsxs("li",{children:["📡 ",i.jsx("strong",{children:"Dispatch:"})," Send actions to the store"]})]})]})]}),i.jsxs(V,{title:"Redux Toolkit",icon:"🛠️",theme:t,children:[i.jsx("p",{children:"The modern, easier way to use Redux!"}),i.jsxs("p",{children:["Install: ",i.jsx("code",{className:"bg-black/20 px-2 py-1 rounded",children:"npm install @reduxjs/toolkit react-redux"})]}),i.jsx($,{theme:t,language:"jsx",code:`// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice (piece of state)
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Create store
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});

// index.js
import { Provider } from 'react-redux';
import { store } from './store';

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// Counter.jsx
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './store';

function Counter() {
  // Read from store
  const count = useSelector((state) => state.counter.value);
  
  // Get dispatch function
  const dispatch = useDispatch();
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>
        +1
      </button>
      <button onClick={() => dispatch(decrement())}>
        -1
      </button>
      <button onClick={() => dispatch(incrementByAmount(10))}>
        +10
      </button>
    </div>
  );
}`})]}),i.jsxs(V,{title:"Complete Redux Example",icon:"🎮",theme:t,children:[i.jsx("p",{children:"Let's build a todo app with Redux!"}),i.jsx($,{theme:t,language:"jsx",code:`// todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        completed: false
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.find(t => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      return state.filter(t => t.id !== action.payload);
    }
  }
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;

// store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer
  }
});

// TodoApp.jsx
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './todoSlice';

function TodoApp() {
  const [input, setInput] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  
  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };
  
  return (
    <div>
      <h1>Redux Todo List 📝</h1>
      
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            <span style={{
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}>
              {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              ❌
            </button>
          </li>
        ))}
      </ul>
      
      <p>Total: {todos.length} | Done: {todos.filter(t => t.completed).length}</p>
    </div>
  );
}`})]}),i.jsxs("div",{className:`mt-8 p-6 rounded-xl text-center ${t==="dark"?"bg-gradient-to-r from-green-900/40 to-blue-900/40 border border-green-500/30":"bg-gradient-to-r from-green-100 to-blue-100 border border-green-300"}`,children:[i.jsx("h3",{className:`mb-2 ${t==="dark"?"text-green-300":"text-green-900"}`,children:"🎉 State Management Pro!"}),i.jsx("p",{className:t==="dark"?"text-gray-200":"text-gray-800",children:"You can now manage state in big applications! Ready for Phase 11? Let's optimize performance! 🧼"})]})]})}function rb({theme:t}){return i.jsxs("div",{className:"max-w-5xl mx-auto mt-20 pb-12",children:[i.jsx("h1",{className:`text-center mb-8 ${t==="dark"?"text-white":"text-gray-900"}`,children:"🧼 Phase 11: Performance & Best Practices"}),i.jsxs(V,{title:"React.memo",icon:"🧠",theme:t,children:[i.jsxs("p",{children:[i.jsx("strong",{children:"React.memo"})," prevents unnecessary re-renders! It's like remembering the answer instead of recalculating! 📝"]}),i.jsx($,{theme:t,language:"jsx",code:`import { memo, useState } from 'react';

// Without memo - re-renders every time parent changes
function ExpensiveComponent({ name }) {
  console.log('Rendering ExpensiveComponent');
  // Imagine expensive calculations here...
  return <h2>Hello, {name}!</h2>;
}

// With memo - only re-renders when 'name' changes!
const MemoizedComponent = memo(function ExpensiveComponent({ name }) {
  console.log('Rendering MemoizedComponent');
  return <h2>Hello, {name}!</h2>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Alex');
  
  return (
    <div>
      <MemoizedComponent name={name} />
      {/* This button won't cause MemoizedComponent to re-render! */}
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      <button onClick={() => setName('Sam')}>
        Change Name (will re-render)
      </button>
    </div>
  );
}`})]}),i.jsxs(V,{title:"Code Splitting",icon:"✂️",theme:t,children:[i.jsx("p",{children:"Load code only when needed! Makes your app load faster! ⚡"}),i.jsx($,{theme:t,language:"jsx",code:`import { lazy, Suspense } from 'react';

// Regular import (loaded immediately)
// import HeavyComponent from './HeavyComponent';

// Lazy import (loaded only when needed)
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  const [show, setShow] = useState(false);
  
  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'} Heavy Component
      </button>
      
      {show && (
        <Suspense fallback={<div>Loading... ⏳</div>}>
          <HeavyComponent />
        </Suspense>
      )}
    </div>
  );
}`}),i.jsxs("p",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-blue-900/30":"bg-blue-100"}`,children:[i.jsx("strong",{children:"Real-World Example:"})," Like a library! 📚 You don't take all books home at once. You borrow one when you need it!"]})]}),i.jsxs(V,{title:"Lazy Loading Routes",icon:"🗺️",theme:t,children:[i.jsx("p",{children:"Load pages only when user visits them!"}),i.jsx($,{theme:t,language:"jsx",code:`import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading page... ⏳</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}`})]}),i.jsxs(V,{title:"Avoid Unnecessary Re-renders",icon:"🚫",theme:t,children:[i.jsx("p",{children:"Tips to make your app super fast!"}),i.jsxs("div",{className:"space-y-4 mt-4",children:[i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-green-900/30":"bg-green-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"✅ Move state down"}),i.jsx("p",{className:"mb-2",children:"Don't put state in parent if only child needs it!"}),i.jsx($,{theme:t,language:"jsx",code:`// ❌ Bad - counter in parent
function Parent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <ExpensiveComponent />  {/* Re-renders when count changes! */}
      <Counter count={count} setCount={setCount} />
    </div>
  );
}

// ✅ Good - counter in its own component
function Parent() {
  return (
    <div>
      <ExpensiveComponent />  {/* Never re-renders! */}
      <CounterWrapper />
    </div>
  );
}

function CounterWrapper() {
  const [count, setCount] = useState(0);
  return <Counter count={count} setCount={setCount} />;
}`})]}),i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-yellow-900/30":"bg-yellow-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"✅ Use useCallback for functions"}),i.jsx($,{theme:t,language:"jsx",code:`import { useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);
  
  // Function recreated every render
  const handleClick = () => {
    console.log('Clicked!');
  };
  
  // Function only created once
  const handleClickMemo = useCallback(() => {
    console.log('Clicked!');
  }, []);
  
  return <Child onClick={handleClickMemo} />;
}`})]})]})]}),i.jsx(V,{title:"Best Practices",icon:"⭐",theme:t,children:i.jsxs("div",{className:"space-y-3",children:[i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-purple-900/30":"bg-purple-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"📁 Folder Structure"}),i.jsx($,{theme:t,language:"text",code:`src/
├── components/       # Reusable components
│   ├── Button.jsx
│   └── Card.jsx
├── pages/           # Page components
│   ├── Home.jsx
│   └── About.jsx
├── hooks/           # Custom hooks
│   └── useFetch.js
├── utils/           # Helper functions
│   └── helpers.js
├── styles/          # CSS files
└── App.jsx`})]}),i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-blue-900/30":"bg-blue-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"📝 Naming Conventions"}),i.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[i.jsxs("li",{children:["Components: PascalCase → ",i.jsx("code",{className:"bg-black/20 px-1",children:"UserCard.jsx"})]}),i.jsxs("li",{children:["Functions: camelCase → ",i.jsx("code",{className:"bg-black/20 px-1",children:"handleClick"})]}),i.jsxs("li",{children:["Constants: UPPER_CASE → ",i.jsx("code",{className:"bg-black/20 px-1",children:"API_URL"})]}),i.jsxs("li",{children:["CSS files: kebab-case → ",i.jsx("code",{className:"bg-black/20 px-1",children:"user-card.css"})]})]})]}),i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-green-900/30":"bg-green-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"✨ Clean Code Tips"}),i.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[i.jsx("li",{children:"Keep components small (one responsibility)"}),i.jsx("li",{children:"Use meaningful names"}),i.jsx("li",{children:"Extract repeated code into custom hooks"}),i.jsx("li",{children:"Comment complex logic"}),i.jsx("li",{children:"Use destructuring for cleaner code"}),i.jsx("li",{children:"Avoid deeply nested components"})]})]})]})}),i.jsxs("div",{className:`mt-8 p-6 rounded-xl text-center ${t==="dark"?"bg-gradient-to-r from-green-900/40 to-blue-900/40 border border-green-500/30":"bg-gradient-to-r from-green-100 to-blue-100 border border-green-300"}`,children:[i.jsx("h3",{className:`mb-2 ${t==="dark"?"text-green-300":"text-green-900"}`,children:"🎉 Performance Expert!"}),i.jsx("p",{className:t==="dark"?"text-gray-200":"text-gray-800",children:"Your apps will be fast and clean! Ready for Phase 12? Let's learn Testing! 🧪"})]})]})}function sb({theme:t}){return i.jsxs("div",{className:"max-w-5xl mx-auto mt-20 pb-12",children:[i.jsx("h1",{className:`text-center mb-8 ${t==="dark"?"text-white":"text-gray-900"}`,children:"🧪 Phase 12: Testing"}),i.jsxs(V,{title:"Why Testing?",icon:"🤔",theme:t,children:[i.jsxs("p",{children:[i.jsx("strong",{children:"Testing"})," helps make sure your code works correctly and catches bugs before users do! 🐛"]}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-purple-900/30":"bg-purple-100"}`,children:[i.jsx("p",{children:i.jsx("strong",{children:"Benefits of testing:"})}),i.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[i.jsx("li",{children:"✅ Catch bugs early"}),i.jsx("li",{children:"✅ Confidence when changing code"}),i.jsx("li",{children:"✅ Documentation (tests show how code works)"}),i.jsx("li",{children:"✅ Saves time in the long run"})]})]}),i.jsxs("p",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-blue-900/30":"bg-blue-100"}`,children:[i.jsx("strong",{children:"Real-World Example:"})," Like checking your homework before turning it in! ✏️ Better to find mistakes yourself than have the teacher find them!"]})]}),i.jsxs(V,{title:"Jest",icon:"🃏",theme:t,children:[i.jsxs("p",{children:[i.jsx("strong",{children:"Jest"})," is a testing framework. It runs your tests and tells you if they pass or fail!"]}),i.jsx($,{theme:t,language:"jsx",code:`// math.js - Simple functions to test
export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// math.test.js - Tests for those functions
import { add, multiply } from './math';

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds 5 + 7 to equal 12', () => {
  expect(add(5, 7)).toBe(12);
});

test('multiplies 3 * 4 to equal 12', () => {
  expect(multiply(3, 4)).toBe(12);
});

// Run tests with: npm test`}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-green-900/30":"bg-green-100"}`,children:[i.jsx("p",{children:i.jsx("strong",{children:"Common Jest Matchers:"})}),i.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[i.jsxs("li",{children:[i.jsx("code",{className:"bg-black/20 px-1",children:"toBe(value)"})," - Exact equality"]}),i.jsxs("li",{children:[i.jsx("code",{className:"bg-black/20 px-1",children:"toEqual(value)"})," - Deep equality (for objects)"]}),i.jsxs("li",{children:[i.jsx("code",{className:"bg-black/20 px-1",children:"toBeTruthy()"})," - Is truthy"]}),i.jsxs("li",{children:[i.jsx("code",{className:"bg-black/20 px-1",children:"toContain(item)"})," - Array contains item"]})]})]})]}),i.jsxs(V,{title:"React Testing Library",icon:"⚛️",theme:t,children:[i.jsx("p",{children:"Test React components the way users use them!"}),i.jsx($,{theme:t,language:"jsx",code:`import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Component to test
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Test
test('renders greeting with name', () => {
  render(<Greeting name="Alex" />);
  
  // Check if text appears
  const heading = screen.getByText(/Hello, Alex!/i);
  expect(heading).toBeInTheDocument();
});

test('renders different name', () => {
  render(<Greeting name="Sam" />);
  expect(screen.getByText('Hello, Sam!')).toBeInTheDocument();
});`})]}),i.jsxs(V,{title:"Testing User Interactions",icon:"👆",theme:t,children:[i.jsx("p",{children:"Test clicks, typing, and other user actions!"}),i.jsx($,{theme:t,language:"jsx",code:`import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Counter Component
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

// Tests
test('starts at 0', () => {
  render(<Counter />);
  expect(screen.getByText('Count: 0')).toBeInTheDocument();
});

test('increments when button clicked', () => {
  render(<Counter />);
  
  const button = screen.getByText('Increment');
  
  // Click button
  fireEvent.click(button);
  
  // Check count increased
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
  
  // Click again
  fireEvent.click(button);
  expect(screen.getByText('Count: 2')).toBeInTheDocument();
});

// Testing input
test('updates input value when typing', async () => {
  render(<MyForm />);
  
  const input = screen.getByPlaceholderText('Enter name');
  
  // Type in input
  await userEvent.type(input, 'Alex');
  
  expect(input).toHaveValue('Alex');
});`})]}),i.jsxs(V,{title:"Snapshot Testing",icon:"📸",theme:t,children:[i.jsx("p",{children:'Take a "picture" of your component and check if it changes unexpectedly!'}),i.jsx($,{theme:t,language:"jsx",code:`import { render } from '@testing-library/react';

function Card({ title, description }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

test('matches snapshot', () => {
  const { container } = render(
    <Card title="Hello" description="This is a card" />
  );
  
  // Creates snapshot on first run
  // Compares to snapshot on future runs
  expect(container).toMatchSnapshot();
});

// If component changes, test will fail
// You can update snapshot if change is intentional`})]}),i.jsxs(V,{title:"Complete Testing Example",icon:"🎮",theme:t,children:[i.jsx("p",{children:"Let's test a todo component!"}),i.jsx($,{theme:t,language:"jsx",code:`// TodoList.jsx
import { useState } from 'react';

export function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input }]);
      setInput('');
    }
  };
  
  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };
  
  return (
    <div>
      <h1>Todo List</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add todo"
      />
      <button onClick={addTodo}>Add</button>
      
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      
      {todos.length === 0 && <p>No todos yet!</p>}
    </div>
  );
}

// TodoList.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { TodoList } from './TodoList';

test('renders empty todo list', () => {
  render(<TodoList />);
  expect(screen.getByText('No todos yet!')).toBeInTheDocument();
});

test('adds a todo', () => {
  render(<TodoList />);
  
  const input = screen.getByPlaceholderText('Add todo');
  const button = screen.getByText('Add');
  
  // Type and add todo
  fireEvent.change(input, { target: { value: 'Learn React' } });
  fireEvent.click(button);
  
  // Check if todo appears
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.queryByText('No todos yet!')).not.toBeInTheDocument();
});

test('deletes a todo', () => {
  render(<TodoList />);
  
  const input = screen.getByPlaceholderText('Add todo');
  const addButton = screen.getByText('Add');
  
  // Add todo
  fireEvent.change(input, { target: { value: 'Test todo' } });
  fireEvent.click(addButton);
  
  // Delete todo
  const deleteButton = screen.getByText('Delete');
  fireEvent.click(deleteButton);
  
  // Check if todo is gone
  expect(screen.queryByText('Test todo')).not.toBeInTheDocument();
  expect(screen.getByText('No todos yet!')).toBeInTheDocument();
});

test('does not add empty todos', () => {
  render(<TodoList />);
  
  const button = screen.getByText('Add');
  
  // Click without typing
  fireEvent.click(button);
  
  // Should still be empty
  expect(screen.getByText('No todos yet!')).toBeInTheDocument();
});`})]}),i.jsxs("div",{className:`mt-8 p-6 rounded-xl text-center ${t==="dark"?"bg-gradient-to-r from-green-900/40 to-blue-900/40 border border-green-500/30":"bg-gradient-to-r from-green-100 to-blue-100 border border-green-300"}`,children:[i.jsx("h3",{className:`mb-2 ${t==="dark"?"text-green-300":"text-green-900"}`,children:"🎉 Testing Champion!"}),i.jsx("p",{className:t==="dark"?"text-gray-200":"text-gray-800",children:"Your code is now reliable and bug-free! Ready for Phase 13? Let's deploy your app to the world! 🌐"})]})]})}function ib({theme:t}){return i.jsxs("div",{className:"max-w-5xl mx-auto mt-20 pb-12",children:[i.jsx("h1",{className:`text-center mb-8 ${t==="dark"?"text-white":"text-gray-900"}`,children:"🌐 Phase 13: Build & Deployment"}),i.jsxs(V,{title:"Production Build",icon:"📦",theme:t,children:[i.jsxs("p",{children:["Before deploying, create an optimized ",i.jsx("strong",{children:"production build"}),"! It makes your app super fast! ⚡"]}),i.jsx($,{theme:t,language:"bash",code:`# For Vite projects
npm run build

# For Create React App
npm run build

# This creates a 'dist' or 'build' folder with optimized files!`}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-purple-900/30":"bg-purple-100"}`,children:[i.jsx("p",{children:i.jsx("strong",{children:"What happens during build:"})}),i.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[i.jsx("li",{children:"🗜️ Code is minified (made smaller)"}),i.jsx("li",{children:"⚡ Optimized for speed"}),i.jsx("li",{children:"🔒 Dead code removed"}),i.jsx("li",{children:"📦 Everything bundled together"})]})]})]}),i.jsxs(V,{title:"Environment Variables",icon:"🔐",theme:t,children:[i.jsx("p",{children:"Store secrets and config safely!"}),i.jsx($,{theme:t,language:"jsx",code:`// .env file (in project root)
VITE_API_URL=https://api.example.com
VITE_API_KEY=your_secret_key_here

// In your React code
function App() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  
  // Use them safely!
  fetch(\`\${apiUrl}/data\`, {
    headers: {
      'Authorization': \`Bearer \${apiKey}\`
    }
  });
}

// For Create React App, use REACT_APP_ prefix:
// REACT_APP_API_URL=...
// const apiUrl = process.env.REACT_APP_API_URL;`}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-red-900/30":"bg-red-100"}`,children:[i.jsx("p",{children:i.jsx("strong",{children:"⚠️ Important:"})}),i.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[i.jsx("li",{children:"Never commit .env to Git!"}),i.jsx("li",{children:"Add .env to .gitignore"}),i.jsx("li",{children:"Create .env.example for team members"})]})]})]}),i.jsxs(V,{title:"Deploy on Vercel",icon:"▲",theme:t,children:[i.jsxs("p",{children:[i.jsx("strong",{children:"Vercel"})," is the easiest way to deploy React apps! Free and super fast! 🚀"]}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-blue-900/30":"bg-blue-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"Method 1: Using Website (Easiest!)"}),i.jsxs("ol",{className:"list-decimal list-inside space-y-2",children:[i.jsx("li",{children:"Push your code to GitHub"}),i.jsxs("li",{children:["Go to ",i.jsx("strong",{children:"vercel.com"})]}),i.jsx("li",{children:"Sign in with GitHub"}),i.jsx("li",{children:'Click "New Project"'}),i.jsx("li",{children:"Select your repository"}),i.jsx("li",{children:'Click "Deploy" 🎉'}),i.jsx("li",{children:"Your app is live!"})]})]}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-green-900/30":"bg-green-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"Method 2: Using CLI"}),i.jsx($,{theme:t,language:"bash",code:`# Install Vercel CLI
npm install -g vercel

# Deploy your app
vercel

# Follow the prompts, and you're done!`})]}),i.jsxs("p",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-purple-900/30":"bg-purple-100"}`,children:[i.jsx("strong",{children:"Benefits:"})," Automatic deployments, free SSL, custom domains, preview URLs for each commit!"]})]}),i.jsxs(V,{title:"Deploy on Netlify",icon:"🎯",theme:t,children:[i.jsx("p",{children:"Another awesome free hosting platform!"}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-purple-900/30":"bg-purple-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"Using Website:"}),i.jsxs("ol",{className:"list-decimal list-inside space-y-2",children:[i.jsx("li",{children:"Push code to GitHub"}),i.jsxs("li",{children:["Go to ",i.jsx("strong",{children:"netlify.com"})]}),i.jsx("li",{children:"Sign up/Sign in"}),i.jsx("li",{children:'Click "New site from Git"'}),i.jsx("li",{children:"Connect to GitHub"}),i.jsx("li",{children:"Select repository"}),i.jsxs("li",{children:["Build command: ",i.jsx("code",{className:"bg-black/20 px-2 py-1 rounded",children:"npm run build"})]}),i.jsxs("li",{children:["Publish directory: ",i.jsx("code",{className:"bg-black/20 px-2 py-1 rounded",children:"dist"})," or ",i.jsx("code",{className:"bg-black/20 px-2 py-1 rounded",children:"build"})]}),i.jsx("li",{children:'Click "Deploy site" 🎉'})]})]}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-green-900/30":"bg-green-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"Drag & Drop:"}),i.jsxs("ol",{className:"list-decimal list-inside space-y-2",children:[i.jsxs("li",{children:["Build your app: ",i.jsx("code",{className:"bg-black/20 px-1",children:"npm run build"})]}),i.jsx("li",{children:"Go to Netlify"}),i.jsx("li",{children:"Drag your build folder to Netlify"}),i.jsx("li",{children:"Done! 🎉"})]})]})]}),i.jsxs(V,{title:"GitHub Integration",icon:"🔗",theme:t,children:[i.jsx("p",{children:"Automatic deployments when you push code!"}),i.jsx($,{theme:t,language:"bash",code:`# 1. Create GitHub repository
# Go to github.com and create a new repo

# 2. Initialize Git in your project
git init
git add .
git commit -m "Initial commit"

# 3. Connect to GitHub
git remote add origin https://github.com/yourusername/your-repo.git
git branch -M main
git push -u origin main

# 4. Now when you connect Vercel/Netlify to GitHub:
# Every time you push code, it auto-deploys! 🚀

# Making changes:
git add .
git commit -m "Added new feature"
git push

# Your site automatically updates!`})]}),i.jsxs(V,{title:"Custom Domain",icon:"🌐",theme:t,children:[i.jsx("p",{children:"Use your own domain name!"}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-blue-900/30":"bg-blue-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"On Vercel:"}),i.jsxs("ol",{className:"list-decimal list-inside space-y-2",children:[i.jsx("li",{children:"Go to your project settings"}),i.jsx("li",{children:'Click "Domains"'}),i.jsx("li",{children:"Add your domain (e.g., myawesomesite.com)"}),i.jsx("li",{children:"Follow DNS setup instructions"}),i.jsx("li",{children:"Wait for DNS to update (can take 24 hours)"}),i.jsx("li",{children:"Your site is on your custom domain! 🎉"})]})]}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-green-900/30":"bg-green-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"On Netlify:"}),i.jsxs("ol",{className:"list-decimal list-inside space-y-2",children:[i.jsx("li",{children:'Go to "Domain settings"'}),i.jsx("li",{children:'Click "Add custom domain"'}),i.jsx("li",{children:"Enter your domain"}),i.jsx("li",{children:"Update DNS records at your domain provider"}),i.jsx("li",{children:"Netlify automatically provides free SSL! 🔒"})]})]})]}),i.jsx(V,{title:"Deployment Checklist",icon:"✅",theme:t,children:i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-purple-900/30":"bg-purple-100"}`,children:[i.jsx("p",{className:"mb-2",children:i.jsx("strong",{children:"Before deploying, make sure:"})}),i.jsxs("ul",{className:"space-y-2",children:[i.jsx("li",{children:"✅ App works locally"}),i.jsx("li",{children:"✅ All tests pass"}),i.jsxs("li",{children:["✅ Production build works: ",i.jsx("code",{className:"bg-black/20 px-1",children:"npm run build"})]}),i.jsx("li",{children:"✅ Environment variables are set"}),i.jsx("li",{children:"✅ .env is in .gitignore"}),i.jsx("li",{children:"✅ No console.log or debug code"}),i.jsx("li",{children:"✅ Images are optimized"}),i.jsx("li",{children:"✅ 404 page exists"}),i.jsx("li",{children:"✅ SEO meta tags added"}),i.jsx("li",{children:"✅ Favicon added"})]})]})}),i.jsxs("div",{className:`p-6 rounded-xl mt-6 ${t==="dark"?"bg-yellow-900/30":"bg-yellow-100"}`,children:[i.jsx("h3",{className:"mb-3",children:"🚀 Quick Deployment Guide"}),i.jsx($,{theme:t,language:"bash",code:`# Step 1: Build your app
npm run build

# Step 2: Test the build locally (optional)
npm run preview  # For Vite

# Step 3: Push to GitHub
git add .
git commit -m "Ready for deployment"
git push

# Step 4: Deploy
# Option A: Connect Vercel/Netlify to GitHub (auto-deploy)
# Option B: Use CLI
vercel  # or netlify deploy

# Your app is live! 🎉
# Share the link with friends and family!`})]}),i.jsxs("div",{className:`mt-8 p-6 rounded-xl text-center ${t==="dark"?"bg-gradient-to-r from-green-900/40 to-blue-900/40 border border-green-500/30":"bg-gradient-to-r from-green-100 to-blue-100 border border-green-300"}`,children:[i.jsx("h3",{className:`mb-2 ${t==="dark"?"text-green-300":"text-green-900"}`,children:"🎉 Deployment Master!"}),i.jsx("p",{className:t==="dark"?"text-gray-200":"text-gray-800",children:"Your apps are now live on the internet! Anyone can visit them! Ready for Phase 14? Let's build real projects! 💪"})]})]})}function ob({theme:t}){return i.jsxs("div",{className:"max-w-5xl mx-auto mt-20 pb-12",children:[i.jsx("h1",{className:`text-center mb-8 ${t==="dark"?"text-white":"text-gray-900"}`,children:"💪 Phase 14: Real-World Projects"}),i.jsxs("div",{className:`p-6 rounded-xl mb-8 text-center ${t==="dark"?"bg-gradient-to-r from-purple-900/60 to-pink-900/60 border border-purple-500/40":"bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-300"}`,children:[i.jsx("h2",{className:`mb-3 ${t==="dark"?"text-white":"text-gray-900"}`,children:"🎓 Time to Build Real Projects!"}),i.jsx("p",{className:t==="dark"?"text-purple-200":"text-purple-800",children:"You've learned everything! Now let's put it all together and build amazing projects! 🚀"})]}),i.jsxs(V,{title:"Project 1: CRUD Todo App",icon:"📝",theme:t,children:[i.jsxs("p",{children:[i.jsx("strong",{children:"What you'll build:"})," A complete todo application with create, read, update, and delete!"]}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-blue-900/30":"bg-blue-100"}`,children:[i.jsx("p",{children:i.jsx("strong",{children:"Features to include:"})}),i.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[i.jsx("li",{children:"➕ Add new todos"}),i.jsx("li",{children:"✅ Mark todos as complete"}),i.jsx("li",{children:"✏️ Edit existing todos"}),i.jsx("li",{children:"🗑️ Delete todos"}),i.jsx("li",{children:"🔍 Filter (All, Active, Completed)"}),i.jsx("li",{children:"💾 Save to localStorage"}),i.jsx("li",{children:"📊 Show statistics"})]})]}),i.jsx($,{theme:t,language:"jsx",code:`import { useState, useEffect } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');
  
  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('todos');
    if (saved) setTodos(JSON.parse(saved));
  }, []);
  
  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  
  const addTodo = () => {
    if (input.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: input, completed: false }
      ]);
      setInput('');
    }
  };
  
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  const startEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };
  
  const saveEdit = () => {
    setTodos(todos.map(todo =>
      todo.id === editId ? { ...todo, text: editText } : todo
    ));
    setEditId(null);
    setEditText('');
  };
  
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });
  
  return (
    <div className="todo-app">
      <h1>My Todo List 📝</h1>
      
      {/* Add Todo */}
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="What needs to be done?"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      
      {/* Filters */}
      <div className="filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
      
      {/* Todo List */}
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>
            {editId === todo.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={saveEdit}>Save</button>
                <button onClick={() => setEditId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span style={{
                  textDecoration: todo.completed ? 'line-through' : 'none'
                }}>
                  {todo.text}
                </span>
                <button onClick={() => startEdit(todo)}>✏️</button>
                <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
              </>
            )}
          </li>
        ))}
      </ul>
      
      {/* Stats */}
      <div className="stats">
        <p>Total: {todos.length}</p>
        <p>Active: {todos.filter(t => !t.completed).length}</p>
        <p>Completed: {todos.filter(t => t.completed).length}</p>
      </div>
    </div>
  );
}`})]}),i.jsxs(V,{title:"Project 2: Weather Dashboard",icon:"🌤️",theme:t,children:[i.jsxs("p",{children:[i.jsx("strong",{children:"What you'll build:"})," A weather app that shows current weather and forecast!"]}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-green-900/30":"bg-green-100"}`,children:[i.jsx("p",{children:i.jsx("strong",{children:"Features to include:"})}),i.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[i.jsx("li",{children:"🌍 Search by city"}),i.jsx("li",{children:"🌡️ Show temperature, humidity, wind"}),i.jsx("li",{children:"📅 5-day forecast"}),i.jsx("li",{children:"🎨 Weather icons"}),i.jsx("li",{children:"💾 Save favorite cities"}),i.jsx("li",{children:"🔄 Auto-refresh"})]})]}),i.jsxs("p",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-blue-900/30":"bg-blue-100"}`,children:[i.jsx("strong",{children:"API:"})," Use OpenWeatherMap API (free!) - openweathermap.org"]})]}),i.jsxs(V,{title:"Project 3: Movie Search App",icon:"🎬",theme:t,children:[i.jsxs("p",{children:[i.jsx("strong",{children:"What you'll build:"})," Search and discover movies!"]}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-purple-900/30":"bg-purple-100"}`,children:[i.jsx("p",{children:i.jsx("strong",{children:"Features to include:"})}),i.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[i.jsx("li",{children:"🔍 Search movies by title"}),i.jsx("li",{children:"🎭 View movie details (rating, description, cast)"}),i.jsx("li",{children:"⭐ Favorite movies list"}),i.jsx("li",{children:"🎯 Filter by genre"}),i.jsx("li",{children:"📱 Responsive design"}),i.jsx("li",{children:"🎨 Beautiful UI with posters"})]})]}),i.jsxs("p",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-yellow-900/30":"bg-yellow-100"}`,children:[i.jsx("strong",{children:"API:"})," Use OMDB API or TMDB API (both free!)"]})]}),i.jsxs(V,{title:"Project 4: E-commerce Shopping Cart",icon:"🛒",theme:t,children:[i.jsxs("p",{children:[i.jsx("strong",{children:"What you'll build:"})," A shopping cart with products!"]}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-pink-900/30":"bg-pink-100"}`,children:[i.jsx("p",{children:i.jsx("strong",{children:"Features to include:"})}),i.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[i.jsx("li",{children:"🏬 Product list with images"}),i.jsx("li",{children:"🛒 Add to cart"}),i.jsx("li",{children:"➕➖ Increase/decrease quantity"}),i.jsx("li",{children:"🗑️ Remove from cart"}),i.jsx("li",{children:"💰 Calculate total price"}),i.jsx("li",{children:"💾 Persist cart in localStorage"}),i.jsx("li",{children:"🎨 Beautiful product cards"})]})]})]}),i.jsxs(V,{title:"Project 5: Authentication App",icon:"🔐",theme:t,children:[i.jsxs("p",{children:[i.jsx("strong",{children:"What you'll build:"})," Login/Signup system with protected routes!"]}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-blue-900/30":"bg-blue-100"}`,children:[i.jsx("p",{children:i.jsx("strong",{children:"Features to include:"})}),i.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[i.jsx("li",{children:"📝 Signup form with validation"}),i.jsx("li",{children:"🔑 Login form"}),i.jsx("li",{children:"👤 User profile page"}),i.jsx("li",{children:"🚪 Logout functionality"}),i.jsx("li",{children:"🔒 Protected routes"}),i.jsx("li",{children:"💾 Context API for auth state"}),i.jsx("li",{children:"⏰ Session timeout"})]})]})]}),i.jsxs(V,{title:"Project 6: Portfolio Website",icon:"💼",theme:t,children:[i.jsxs("p",{children:[i.jsx("strong",{children:"What you'll build:"})," Your personal portfolio to showcase projects!"]}),i.jsxs("div",{className:`p-4 rounded-lg mt-4 ${t==="dark"?"bg-green-900/30":"bg-green-100"}`,children:[i.jsx("p",{children:i.jsx("strong",{children:"Features to include:"})}),i.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[i.jsx("li",{children:"🏠 Home page with intro"}),i.jsx("li",{children:"💼 Projects showcase"}),i.jsx("li",{children:"🎓 Skills section"}),i.jsx("li",{children:"📧 Contact form"}),i.jsx("li",{children:"🌙 Dark/Light mode toggle"}),i.jsx("li",{children:"📱 Fully responsive"}),i.jsx("li",{children:"✨ Smooth animations"}),i.jsx("li",{children:"🚀 Fast and optimized"})]})]})]}),i.jsx(V,{title:"Project Ideas List",icon:"💡",theme:t,children:i.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-purple-900/30":"bg-purple-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"Beginner Projects:"}),i.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[i.jsx("li",{children:"📝 Note-taking app"}),i.jsx("li",{children:"⏱️ Timer/Stopwatch"}),i.jsx("li",{children:"🧮 Calculator"}),i.jsx("li",{children:"🎲 Random quote generator"}),i.jsx("li",{children:"🎨 Color picker"}),i.jsx("li",{children:"📊 Quiz app"})]})]}),i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-blue-900/30":"bg-blue-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"Intermediate Projects:"}),i.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[i.jsx("li",{children:"💬 Chat application"}),i.jsx("li",{children:"📰 News aggregator"}),i.jsx("li",{children:"🎵 Music player"}),i.jsx("li",{children:"📷 Image gallery"}),i.jsx("li",{children:"🍕 Recipe finder"}),i.jsx("li",{children:"💪 Fitness tracker"})]})]}),i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-green-900/30":"bg-green-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"Advanced Projects:"}),i.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[i.jsx("li",{children:"📱 Social media clone"}),i.jsx("li",{children:"🎮 Game (Tic-tac-toe, Snake)"}),i.jsx("li",{children:"📊 Data visualization dashboard"}),i.jsx("li",{children:"🏨 Booking system"}),i.jsx("li",{children:"💼 Project management tool"}),i.jsx("li",{children:"🤖 AI chatbot interface"})]})]}),i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-yellow-900/30":"bg-yellow-100"}`,children:[i.jsx("h4",{className:"mb-2",children:"Fun Projects:"}),i.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[i.jsx("li",{children:"🎨 Drawing app"}),i.jsx("li",{children:"🎭 Meme generator"}),i.jsx("li",{children:"🎯 Typing speed test"}),i.jsx("li",{children:"🔮 Fortune teller"}),i.jsx("li",{children:"🎲 Dice roller"}),i.jsx("li",{children:"🌈 Gradient generator"})]})]})]})}),i.jsx(V,{title:"Building Tips",icon:"🛠️",theme:t,children:i.jsxs("div",{className:`p-4 rounded-lg ${t==="dark"?"bg-purple-900/30":"bg-purple-100"}`,children:[i.jsx("p",{className:"mb-2",children:i.jsx("strong",{children:"How to start a project:"})}),i.jsxs("ol",{className:"list-decimal list-inside space-y-2",children:[i.jsx("li",{children:"📋 Plan features on paper"}),i.jsx("li",{children:"🎨 Sketch the design"}),i.jsx("li",{children:"🗂️ Create component structure"}),i.jsx("li",{children:"💾 Decide on state management"}),i.jsx("li",{children:"🔌 Check if you need APIs"}),i.jsx("li",{children:"🚀 Start with basic version"}),i.jsx("li",{children:"✨ Add features one by one"}),i.jsx("li",{children:"🎨 Polish the UI last"}),i.jsx("li",{children:"🧪 Test everything"}),i.jsx("li",{children:"🌐 Deploy and share!"})]})]})}),i.jsxs("div",{className:`p-6 rounded-xl mt-6 ${t==="dark"?"bg-gradient-to-r from-purple-900/60 to-pink-900/60":"bg-gradient-to-r from-purple-100 to-pink-100"}`,children:[i.jsx("h3",{className:"mb-3",children:"🎯 Challenge Yourself!"}),i.jsx("p",{className:t==="dark"?"text-purple-200":"text-purple-800",children:"Try to build one project per week! Here's a roadmap:"}),i.jsxs("ul",{className:`list-disc list-inside mt-3 space-y-1 ${t==="dark"?"text-purple-200":"text-purple-800"}`,children:[i.jsx("li",{children:"Week 1: Todo App (learn CRUD)"}),i.jsx("li",{children:"Week 2: Weather App (learn API calls)"}),i.jsx("li",{children:"Week 3: Movie Search (improve UI skills)"}),i.jsx("li",{children:"Week 4: Shopping Cart (state management)"}),i.jsx("li",{children:"Week 5: Auth App (routing & protection)"}),i.jsx("li",{children:"Week 6: Portfolio (showcase everything!)"})]})]}),i.jsxs("div",{className:`mt-8 p-8 rounded-xl text-center ${t==="dark"?"bg-gradient-to-r from-green-900/60 to-blue-900/60 border-2 border-green-500/50":"bg-gradient-to-r from-green-100 to-blue-100 border-2 border-green-400"}`,children:[i.jsx("h2",{className:`mb-4 ${t==="dark"?"text-green-300":"text-green-900"}`,children:"🎉🎊 CONGRATULATIONS! 🎊🎉"}),i.jsx("p",{className:`mb-4 ${t==="dark"?"text-white":"text-gray-900"}`,children:"You've completed ALL 14 phases of React learning!"}),i.jsx("p",{className:`mb-6 ${t==="dark"?"text-gray-200":"text-gray-800"}`,children:"You're now a React developer! 🚀 You can build amazing web applications! Keep practicing, keep building, and never stop learning!"}),i.jsx("div",{className:"text-4xl mb-4",children:"🏆 🌟 ⭐ 💪 🎓 🚀"}),i.jsx("p",{className:t==="dark"?"text-purple-300":"text-purple-700",children:"Go build something amazing and share it with the world! 🌍"}),i.jsx("p",{className:`mt-4 ${t==="dark"?"text-blue-300":"text-blue-700"}`,children:"Remember: The best way to learn is by building! Start your first project today! 💻"})]})]})}function ab(){const[t,r]=C.useState("dark"),[o,l]=C.useState(!1);C.useEffect(()=>{const h=localStorage.getItem("theme");h&&r(h)},[]),C.useEffect(()=>{localStorage.setItem("theme",t),document.documentElement.setAttribute("data-theme",t)},[t]);const c=()=>{r(h=>h==="dark"?"light":"dark")};return i.jsx(Bx,{children:i.jsxs("div",{className:`min-h-screen transition-colors duration-300 ${t==="dark"?"bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900":"bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"}`,children:[i.jsx(mv,{theme:t,toggleTheme:c,menuOpen:o,setMenuOpen:l}),i.jsx("main",{className:`transition-all duration-300 ${o?"ml-64":"ml-0"} p-4 md:p-8`,children:i.jsxs(fx,{children:[i.jsx(Ye,{path:"/",element:i.jsx(Kk,{theme:t})}),i.jsx(Ye,{path:"/phase1",element:i.jsx(Gk,{theme:t})}),i.jsx(Ye,{path:"/phase2",element:i.jsx(Yk,{theme:t})}),i.jsx(Ye,{path:"/phase3",element:i.jsx(Xk,{theme:t})}),i.jsx(Ye,{path:"/phase4",element:i.jsx(Qk,{theme:t})}),i.jsx(Ye,{path:"/phase5",element:i.jsx(Jk,{theme:t})}),i.jsx(Ye,{path:"/phase6",element:i.jsx(qk,{theme:t})}),i.jsx(Ye,{path:"/phase7",element:i.jsx(Zk,{theme:t})}),i.jsx(Ye,{path:"/phase8",element:i.jsx(eb,{theme:t})}),i.jsx(Ye,{path:"/phase9",element:i.jsx(tb,{theme:t})}),i.jsx(Ye,{path:"/phase10",element:i.jsx(nb,{theme:t})}),i.jsx(Ye,{path:"/phase11",element:i.jsx(rb,{theme:t})}),i.jsx(Ye,{path:"/phase12",element:i.jsx(sb,{theme:t})}),i.jsx(Ye,{path:"/phase13",element:i.jsx(ib,{theme:t})}),i.jsx(Ye,{path:"/phase14",element:i.jsx(ob,{theme:t})})]})})]})})}gy.createRoot(document.getElementById("root")).render(i.jsx(ab,{}));
