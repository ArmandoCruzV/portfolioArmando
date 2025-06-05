(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function f_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Eu={exports:{}},Fo={},Tu={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function h_(){if(Lp)return ht;Lp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function _(I){return I===null||typeof I!="object"?null:(I=x&&I[x]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,R={};function y(I,se,De){this.props=I,this.context=se,this.refs=R,this.updater=De||S}y.prototype.isReactComponent={},y.prototype.setState=function(I,se){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,se,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function v(){}v.prototype=y.prototype;function U(I,se,De){this.props=I,this.context=se,this.refs=R,this.updater=De||S}var N=U.prototype=new v;N.constructor=U,w(N,y.prototype),N.isPureReactComponent=!0;var P=Array.isArray,G=Object.prototype.hasOwnProperty,O={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function j(I,se,De){var ie,me={},Ee=null,xe=null;if(se!=null)for(ie in se.ref!==void 0&&(xe=se.ref),se.key!==void 0&&(Ee=""+se.key),se)G.call(se,ie)&&!F.hasOwnProperty(ie)&&(me[ie]=se[ie]);var we=arguments.length-2;if(we===1)me.children=De;else if(1<we){for(var Xe=Array(we),Ge=0;Ge<we;Ge++)Xe[Ge]=arguments[Ge+2];me.children=Xe}if(I&&I.defaultProps)for(ie in we=I.defaultProps,we)me[ie]===void 0&&(me[ie]=we[ie]);return{$$typeof:s,type:I,key:Ee,ref:xe,props:me,_owner:O.current}}function b(I,se){return{$$typeof:s,type:I.type,key:se,ref:I.ref,props:I.props,_owner:I._owner}}function C(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function z(I){var se={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(De){return se[De]})}var q=/\/+/g;function Q(I,se){return typeof I=="object"&&I!==null&&I.key!=null?z(""+I.key):se.toString(36)}function ce(I,se,De,ie,me){var Ee=typeof I;(Ee==="undefined"||Ee==="boolean")&&(I=null);var xe=!1;if(I===null)xe=!0;else switch(Ee){case"string":case"number":xe=!0;break;case"object":switch(I.$$typeof){case s:case e:xe=!0}}if(xe)return xe=I,me=me(xe),I=ie===""?"."+Q(xe,0):ie,P(me)?(De="",I!=null&&(De=I.replace(q,"$&/")+"/"),ce(me,se,De,"",function(Ge){return Ge})):me!=null&&(C(me)&&(me=b(me,De+(!me.key||xe&&xe.key===me.key?"":(""+me.key).replace(q,"$&/")+"/")+I)),se.push(me)),1;if(xe=0,ie=ie===""?".":ie+":",P(I))for(var we=0;we<I.length;we++){Ee=I[we];var Xe=ie+Q(Ee,we);xe+=ce(Ee,se,De,Xe,me)}else if(Xe=_(I),typeof Xe=="function")for(I=Xe.call(I),we=0;!(Ee=I.next()).done;)Ee=Ee.value,Xe=ie+Q(Ee,we++),xe+=ce(Ee,se,De,Xe,me);else if(Ee==="object")throw se=String(I),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return xe}function de(I,se,De){if(I==null)return I;var ie=[],me=0;return ce(I,ie,"","",function(Ee){return se.call(De,Ee,me++)}),ie}function $(I){if(I._status===-1){var se=I._result;se=se(),se.then(function(De){(I._status===0||I._status===-1)&&(I._status=1,I._result=De)},function(De){(I._status===0||I._status===-1)&&(I._status=2,I._result=De)}),I._status===-1&&(I._status=0,I._result=se)}if(I._status===1)return I._result.default;throw I._result}var ne={current:null},H={transition:null},ue={ReactCurrentDispatcher:ne,ReactCurrentBatchConfig:H,ReactCurrentOwner:O};function ae(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:de,forEach:function(I,se,De){de(I,function(){se.apply(this,arguments)},De)},count:function(I){var se=0;return de(I,function(){se++}),se},toArray:function(I){return de(I,function(se){return se})||[]},only:function(I){if(!C(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},ht.Component=y,ht.Fragment=n,ht.Profiler=a,ht.PureComponent=U,ht.StrictMode=r,ht.Suspense=h,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,ht.act=ae,ht.cloneElement=function(I,se,De){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var ie=w({},I.props),me=I.key,Ee=I.ref,xe=I._owner;if(se!=null){if(se.ref!==void 0&&(Ee=se.ref,xe=O.current),se.key!==void 0&&(me=""+se.key),I.type&&I.type.defaultProps)var we=I.type.defaultProps;for(Xe in se)G.call(se,Xe)&&!F.hasOwnProperty(Xe)&&(ie[Xe]=se[Xe]===void 0&&we!==void 0?we[Xe]:se[Xe])}var Xe=arguments.length-2;if(Xe===1)ie.children=De;else if(1<Xe){we=Array(Xe);for(var Ge=0;Ge<Xe;Ge++)we[Ge]=arguments[Ge+2];ie.children=we}return{$$typeof:s,type:I.type,key:me,ref:Ee,props:ie,_owner:xe}},ht.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},ht.createElement=j,ht.createFactory=function(I){var se=j.bind(null,I);return se.type=I,se},ht.createRef=function(){return{current:null}},ht.forwardRef=function(I){return{$$typeof:f,render:I}},ht.isValidElement=C,ht.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:$}},ht.memo=function(I,se){return{$$typeof:m,type:I,compare:se===void 0?null:se}},ht.startTransition=function(I){var se=H.transition;H.transition={};try{I()}finally{H.transition=se}},ht.unstable_act=ae,ht.useCallback=function(I,se){return ne.current.useCallback(I,se)},ht.useContext=function(I){return ne.current.useContext(I)},ht.useDebugValue=function(){},ht.useDeferredValue=function(I){return ne.current.useDeferredValue(I)},ht.useEffect=function(I,se){return ne.current.useEffect(I,se)},ht.useId=function(){return ne.current.useId()},ht.useImperativeHandle=function(I,se,De){return ne.current.useImperativeHandle(I,se,De)},ht.useInsertionEffect=function(I,se){return ne.current.useInsertionEffect(I,se)},ht.useLayoutEffect=function(I,se){return ne.current.useLayoutEffect(I,se)},ht.useMemo=function(I,se){return ne.current.useMemo(I,se)},ht.useReducer=function(I,se,De){return ne.current.useReducer(I,se,De)},ht.useRef=function(I){return ne.current.useRef(I)},ht.useState=function(I){return ne.current.useState(I)},ht.useSyncExternalStore=function(I,se,De){return ne.current.useSyncExternalStore(I,se,De)},ht.useTransition=function(){return ne.current.useTransition()},ht.version="18.3.1",ht}var Dp;function Xd(){return Dp||(Dp=1,Tu.exports=h_()),Tu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Np;function p_(){if(Np)return Fo;Np=1;var s=Xd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,m){var g,x={},_=null,S=null;m!==void 0&&(_=""+m),h.key!==void 0&&(_=""+h.key),h.ref!==void 0&&(S=h.ref);for(g in h)r.call(h,g)&&!l.hasOwnProperty(g)&&(x[g]=h[g]);if(f&&f.defaultProps)for(g in h=f.defaultProps,h)x[g]===void 0&&(x[g]=h[g]);return{$$typeof:e,type:f,key:_,ref:S,props:x,_owner:a.current}}return Fo.Fragment=n,Fo.jsx=u,Fo.jsxs=u,Fo}var Ip;function m_(){return Ip||(Ip=1,Eu.exports=p_()),Eu.exports}var E=m_(),Ct=Xd();const ts=f_(Ct);var ol={},wu={exports:{}},Un={},Au={exports:{}},Cu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up;function g_(){return Up||(Up=1,function(s){function e(H,ue){var ae=H.length;H.push(ue);e:for(;0<ae;){var I=ae-1>>>1,se=H[I];if(0<a(se,ue))H[I]=ue,H[ae]=se,ae=I;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var ue=H[0],ae=H.pop();if(ae!==ue){H[0]=ae;e:for(var I=0,se=H.length,De=se>>>1;I<De;){var ie=2*(I+1)-1,me=H[ie],Ee=ie+1,xe=H[Ee];if(0>a(me,ae))Ee<se&&0>a(xe,me)?(H[I]=xe,H[Ee]=ae,I=Ee):(H[I]=me,H[ie]=ae,I=ie);else if(Ee<se&&0>a(xe,ae))H[I]=xe,H[Ee]=ae,I=Ee;else break e}}return ue}function a(H,ue){var ae=H.sortIndex-ue.sortIndex;return ae!==0?ae:H.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],m=[],g=1,x=null,_=3,S=!1,w=!1,R=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(H){for(var ue=n(m);ue!==null;){if(ue.callback===null)r(m);else if(ue.startTime<=H)r(m),ue.sortIndex=ue.expirationTime,e(h,ue);else break;ue=n(m)}}function P(H){if(R=!1,N(H),!w)if(n(h)!==null)w=!0,$(G);else{var ue=n(m);ue!==null&&ne(P,ue.startTime-H)}}function G(H,ue){w=!1,R&&(R=!1,v(j),j=-1),S=!0;var ae=_;try{for(N(ue),x=n(h);x!==null&&(!(x.expirationTime>ue)||H&&!z());){var I=x.callback;if(typeof I=="function"){x.callback=null,_=x.priorityLevel;var se=I(x.expirationTime<=ue);ue=s.unstable_now(),typeof se=="function"?x.callback=se:x===n(h)&&r(h),N(ue)}else r(h);x=n(h)}if(x!==null)var De=!0;else{var ie=n(m);ie!==null&&ne(P,ie.startTime-ue),De=!1}return De}finally{x=null,_=ae,S=!1}}var O=!1,F=null,j=-1,b=5,C=-1;function z(){return!(s.unstable_now()-C<b)}function q(){if(F!==null){var H=s.unstable_now();C=H;var ue=!0;try{ue=F(!0,H)}finally{ue?Q():(O=!1,F=null)}}else O=!1}var Q;if(typeof U=="function")Q=function(){U(q)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,de=ce.port2;ce.port1.onmessage=q,Q=function(){de.postMessage(null)}}else Q=function(){y(q,0)};function $(H){F=H,O||(O=!0,Q())}function ne(H,ue){j=y(function(){H(s.unstable_now())},ue)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_continueExecution=function(){w||S||(w=!0,$(G))},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(H){switch(_){case 1:case 2:case 3:var ue=3;break;default:ue=_}var ae=_;_=ue;try{return H()}finally{_=ae}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(H,ue){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ae=_;_=H;try{return ue()}finally{_=ae}},s.unstable_scheduleCallback=function(H,ue,ae){var I=s.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?I+ae:I):ae=I,H){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=ae+se,H={id:g++,callback:ue,priorityLevel:H,startTime:ae,expirationTime:se,sortIndex:-1},ae>I?(H.sortIndex=ae,e(m,H),n(h)===null&&H===n(m)&&(R?(v(j),j=-1):R=!0,ne(P,ae-I))):(H.sortIndex=se,e(h,H),w||S||(w=!0,$(G))),H},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(H){var ue=_;return function(){var ae=_;_=ue;try{return H.apply(this,arguments)}finally{_=ae}}}}(Cu)),Cu}var Fp;function __(){return Fp||(Fp=1,Au.exports=g_()),Au.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op;function v_(){if(Op)return Un;Op=1;var s=Xd(),e=__();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},x={};function _(t){return h.call(x,t)?!0:h.call(g,t)?!1:m.test(t)?x[t]=!0:(g[t]=!0,!1)}function S(t,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,o,c){if(i===null||typeof i>"u"||S(t,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(t,i,o,c,d,p,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new R(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new R(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new R(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new R(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new R(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new R(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new R(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new R(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new R(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function U(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,U);y[i]=new R(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,U);y[i]=new R(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,U);y[i]=new R(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new R(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new R(t,1,!1,t.toLowerCase(),null,!0,!0)});function N(t,i,o,c){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,d,c)&&(o=null),c||d===null?_(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):d.mustUseProperty?t[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,c=d.attributeNamespace,o===null?t.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,c?t.setAttributeNS(c,i,o):t.setAttribute(i,o))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),O=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),z=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),ne=Symbol.for("react.offscreen"),H=Symbol.iterator;function ue(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Object.assign,I;function se(t){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var De=!1;function ie(t,i){if(!t||De)return"";De=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(re){var c=re}Reflect.construct(t,[],i)}else{try{i.call()}catch(re){c=re}t.call(i.prototype)}else{try{throw Error()}catch(re){c=re}t()}}catch(re){if(re&&c&&typeof re.stack=="string"){for(var d=re.stack.split(`
`),p=c.stack.split(`
`),M=d.length-1,D=p.length-1;1<=M&&0<=D&&d[M]!==p[D];)D--;for(;1<=M&&0<=D;M--,D--)if(d[M]!==p[D]){if(M!==1||D!==1)do if(M--,D--,0>D||d[M]!==p[D]){var k=`
`+d[M].replace(" at new "," at ");return t.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",t.displayName)),k}while(1<=M&&0<=D);break}}}finally{De=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?se(t):""}function me(t){switch(t.tag){case 5:return se(t.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return t=ie(t.type,!1),t;case 11:return t=ie(t.type.render,!1),t;case 1:return t=ie(t.type,!0),t;default:return""}}function Ee(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case O:return"Portal";case b:return"Profiler";case j:return"StrictMode";case Q:return"Suspense";case ce:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z:return(t.displayName||"Context")+".Consumer";case C:return(t._context.displayName||"Context")+".Provider";case q:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case de:return i=t.displayName||null,i!==null?i:Ee(t.type)||"Memo";case $:i=t._payload,t=t._init;try{return Ee(t(i))}catch{}}return null}function xe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(i);case 8:return i===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function we(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xe(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ge(t){var i=Xe(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(M){c=""+M,p.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(M){c=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Dt(t){t._valueTracker||(t._valueTracker=Ge(t))}function Nt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return t&&(c=Xe(t)?t.checked?"true":"false":t.value),t=c,t!==o?(i.setValue(t),!0):!1}function ut(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function B(t,i){var o=i.checked;return ae({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function En(t,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=we(i.value!=null?i.value:o),t._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function mt(t,i){i=i.checked,i!=null&&N(t,"checked",i,!1)}function dt(t,i){mt(t,i);var o=we(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?At(t,i.type,o):i.hasOwnProperty("defaultValue")&&At(t,i.type,we(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ye(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function At(t,i,o){(i!=="number"||ut(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var je=Array.isArray;function L(t,i,o,c){if(t=t.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=i.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&c&&(t[o].defaultSelected=!0)}else{for(o=""+we(o),i=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,c&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function T(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return ae({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function te(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(je(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:we(o)}}function he(t,i){var o=we(i.value),c=we(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),c!=null&&(t.defaultValue=""+c)}function ve(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function fe(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ve(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?fe(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ae,Ze=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,d){MSApp.execUnsafeLocalFunction(function(){return t(i,o,c,d)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ae.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Ke(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var ye={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fe=["Webkit","ms","Moz","O"];Object.keys(ye).forEach(function(t){Fe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),ye[i]=ye[t]})});function et(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||ye.hasOwnProperty(t)&&ye[t]?(""+i).trim():i+"px"}function tt(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,d=et(o,i[o],c);o==="float"&&(o="cssFloat"),c?t.setProperty(o,d):t[o]=d}}var Oe=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ft(t,i){if(i){if(Oe[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function rt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wt=null;function W(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ce=null,le=null,pe=null;function Le(t){if(t=So(t)){if(typeof Ce!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Sa(i),Ce(t.stateNode,t.type,i))}}function be(t){le?pe?pe.push(t):pe=[t]:le=t}function st(){if(le){var t=le,i=pe;if(pe=le=null,Le(t),i)for(t=0;t<i.length;t++)Le(i[t])}}function Ut(t,i){return t(i)}function Zt(){}var yt=!1;function Pn(t,i,o){if(yt)return t(i,o);yt=!0;try{return Ut(t,i,o)}finally{yt=!1,(le!==null||pe!==null)&&(Zt(),st())}}function Tn(t,i){var o=t.stateNode;if(o===null)return null;var c=Sa(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var as=!1;if(f)try{var Xi={};Object.defineProperty(Xi,"passive",{get:function(){as=!0}}),window.addEventListener("test",Xi,Xi),window.removeEventListener("test",Xi,Xi)}catch{as=!1}function wi(t,i,o,c,d,p,M,D,k){var re=Array.prototype.slice.call(arguments,3);try{i.apply(o,re)}catch(_e){this.onError(_e)}}var Ai=!1,Rr=null,Pr=!1,Yi=null,Jo={onError:function(t){Ai=!0,Rr=t}};function ls(t,i,o,c,d,p,M,D,k){Ai=!1,Rr=null,wi.apply(Jo,arguments)}function ea(t,i,o,c,d,p,M,D,k){if(ls.apply(this,arguments),Ai){if(Ai){var re=Rr;Ai=!1,Rr=null}else throw Error(n(198));Pr||(Pr=!0,Yi=re)}}function hi(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function ta(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function na(t){if(hi(t)!==t)throw Error(n(188))}function Xl(t){var i=t.alternate;if(!i){if(i=hi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,c=i;;){var d=o.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===o)return na(d),t;if(p===c)return na(d),i;p=p.sibling}throw Error(n(188))}if(o.return!==c.return)o=d,c=p;else{for(var M=!1,D=d.child;D;){if(D===o){M=!0,o=d,c=p;break}if(D===c){M=!0,c=d,o=p;break}D=D.sibling}if(!M){for(D=p.child;D;){if(D===o){M=!0,o=p,c=d;break}if(D===c){M=!0,c=p,o=d;break}D=D.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==c)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function ia(t){return t=Xl(t),t!==null?ra(t):null}function ra(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ra(t);if(i!==null)return i;t=t.sibling}return null}var sa=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,X=e.unstable_shouldYield,oe=e.unstable_requestPaint,Z=e.unstable_now,Y=e.unstable_getCurrentPriorityLevel,Me=e.unstable_ImmediatePriority,Re=e.unstable_UserBlockingPriority,Ne=e.unstable_NormalPriority,ze=e.unstable_LowPriority,nt=e.unstable_IdlePriority,Je=null,Be=null;function vt(t){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(Je,t,void 0,(t.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:xt,Vt=Math.log,zt=Math.LN2;function xt(t){return t>>>=0,t===0?32:31-(Vt(t)/zt|0)|0}var qe=64,Gt=4194304;function gt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hn(t,i){var o=t.pendingLanes;if(o===0)return 0;var c=0,d=t.suspendedLanes,p=t.pingedLanes,M=o&268435455;if(M!==0){var D=M&~d;D!==0?c=gt(D):(p&=M,p!==0&&(c=gt(p)))}else M=o&~d,M!==0?c=gt(M):p!==0&&(c=gt(p));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=c;0<i;)o=31-at(i),d=1<<o,c|=t[o],i&=~d;return c}function qi(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wn(t,i){for(var o=t.suspendedLanes,c=t.pingedLanes,d=t.expirationTimes,p=t.pendingLanes;0<p;){var M=31-at(p),D=1<<M,k=d[M];k===-1?((D&o)===0||(D&c)!==0)&&(d[M]=qi(D,i)):k<=i&&(t.expiredLanes|=D),p&=~D}}function Ci(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Lt(){var t=qe;return qe<<=1,(qe&4194240)===0&&(qe=64),t}function pn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function nn(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-at(i),t[i]=o}function un(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<o;){var d=31-at(o),p=1<<d;i[d]=0,c[d]=-1,t[d]=-1,o&=~p}}function rn(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var c=31-at(o),d=1<<c;d&i|t[c]&i&&(t[c]|=i),o&=~d}}var St=0;function pi(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var uf,Yl,df,ff,hf,ql=!1,oa=[],Ki=null,Zi=null,Qi=null,ro=new Map,so=new Map,$i=[],I0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pf(t,i){switch(t){case"focusin":case"focusout":Ki=null;break;case"dragenter":case"dragleave":Zi=null;break;case"mouseover":case"mouseout":Qi=null;break;case"pointerover":case"pointerout":ro.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":so.delete(i.pointerId)}}function oo(t,i,o,c,d,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},i!==null&&(i=So(i),i!==null&&Yl(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function U0(t,i,o,c,d){switch(i){case"focusin":return Ki=oo(Ki,t,i,o,c,d),!0;case"dragenter":return Zi=oo(Zi,t,i,o,c,d),!0;case"mouseover":return Qi=oo(Qi,t,i,o,c,d),!0;case"pointerover":var p=d.pointerId;return ro.set(p,oo(ro.get(p)||null,t,i,o,c,d)),!0;case"gotpointercapture":return p=d.pointerId,so.set(p,oo(so.get(p)||null,t,i,o,c,d)),!0}return!1}function mf(t){var i=br(t.target);if(i!==null){var o=hi(i);if(o!==null){if(i=o.tag,i===13){if(i=ta(o),i!==null){t.blockedOn=i,hf(t.priority,function(){df(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function aa(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Zl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var c=new o.constructor(o.type,o);wt=c,o.target.dispatchEvent(c),wt=null}else return i=So(o),i!==null&&Yl(i),t.blockedOn=o,!1;i.shift()}return!0}function gf(t,i,o){aa(t)&&o.delete(i)}function F0(){ql=!1,Ki!==null&&aa(Ki)&&(Ki=null),Zi!==null&&aa(Zi)&&(Zi=null),Qi!==null&&aa(Qi)&&(Qi=null),ro.forEach(gf),so.forEach(gf)}function ao(t,i){t.blockedOn===i&&(t.blockedOn=null,ql||(ql=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,F0)))}function lo(t){function i(d){return ao(d,t)}if(0<oa.length){ao(oa[0],t);for(var o=1;o<oa.length;o++){var c=oa[o];c.blockedOn===t&&(c.blockedOn=null)}}for(Ki!==null&&ao(Ki,t),Zi!==null&&ao(Zi,t),Qi!==null&&ao(Qi,t),ro.forEach(i),so.forEach(i),o=0;o<$i.length;o++)c=$i[o],c.blockedOn===t&&(c.blockedOn=null);for(;0<$i.length&&(o=$i[0],o.blockedOn===null);)mf(o),o.blockedOn===null&&$i.shift()}var cs=P.ReactCurrentBatchConfig,la=!0;function O0(t,i,o,c){var d=St,p=cs.transition;cs.transition=null;try{St=1,Kl(t,i,o,c)}finally{St=d,cs.transition=p}}function z0(t,i,o,c){var d=St,p=cs.transition;cs.transition=null;try{St=4,Kl(t,i,o,c)}finally{St=d,cs.transition=p}}function Kl(t,i,o,c){if(la){var d=Zl(t,i,o,c);if(d===null)hc(t,i,c,ca,o),pf(t,c);else if(U0(d,t,i,o,c))c.stopPropagation();else if(pf(t,c),i&4&&-1<I0.indexOf(t)){for(;d!==null;){var p=So(d);if(p!==null&&uf(p),p=Zl(t,i,o,c),p===null&&hc(t,i,c,ca,o),p===d)break;d=p}d!==null&&c.stopPropagation()}else hc(t,i,c,null,o)}}var ca=null;function Zl(t,i,o,c){if(ca=null,t=W(c),t=br(t),t!==null)if(i=hi(t),i===null)t=null;else if(o=i.tag,o===13){if(t=ta(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ca=t,null}function _f(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y()){case Me:return 1;case Re:return 4;case Ne:case ze:return 16;case nt:return 536870912;default:return 16}default:return 16}}var Ji=null,Ql=null,ua=null;function vf(){if(ua)return ua;var t,i=Ql,o=i.length,c,d="value"in Ji?Ji.value:Ji.textContent,p=d.length;for(t=0;t<o&&i[t]===d[t];t++);var M=o-t;for(c=1;c<=M&&i[o-c]===d[p-c];c++);return ua=d.slice(t,1<c?1-c:void 0)}function da(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function fa(){return!0}function xf(){return!1}function Bn(t){function i(o,c,d,p,M){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(o=t[D],this[D]=o?o(p):p[D]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?fa:xf,this.isPropagationStopped=xf,this}return ae(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=fa)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=fa)},persist:function(){},isPersistent:fa}),i}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$l=Bn(us),co=ae({},us,{view:0,detail:0}),k0=Bn(co),Jl,ec,uo,ha=ae({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==uo&&(uo&&t.type==="mousemove"?(Jl=t.screenX-uo.screenX,ec=t.screenY-uo.screenY):ec=Jl=0,uo=t),Jl)},movementY:function(t){return"movementY"in t?t.movementY:ec}}),yf=Bn(ha),B0=ae({},ha,{dataTransfer:0}),H0=Bn(B0),V0=ae({},co,{relatedTarget:0}),tc=Bn(V0),G0=ae({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),j0=Bn(G0),W0=ae({},us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),X0=Bn(W0),Y0=ae({},us,{data:0}),Sf=Bn(Y0),q0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},K0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Z0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q0(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Z0[t])?!!i[t]:!1}function nc(){return Q0}var $0=ae({},co,{key:function(t){if(t.key){var i=q0[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=da(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?K0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nc,charCode:function(t){return t.type==="keypress"?da(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?da(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),J0=Bn($0),eg=ae({},ha,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mf=Bn(eg),tg=ae({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nc}),ng=Bn(tg),ig=ae({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),rg=Bn(ig),sg=ae({},ha,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),og=Bn(sg),ag=[9,13,27,32],ic=f&&"CompositionEvent"in window,fo=null;f&&"documentMode"in document&&(fo=document.documentMode);var lg=f&&"TextEvent"in window&&!fo,Ef=f&&(!ic||fo&&8<fo&&11>=fo),Tf=" ",wf=!1;function Af(t,i){switch(t){case"keyup":return ag.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ds=!1;function cg(t,i){switch(t){case"compositionend":return Cf(i);case"keypress":return i.which!==32?null:(wf=!0,Tf);case"textInput":return t=i.data,t===Tf&&wf?null:t;default:return null}}function ug(t,i){if(ds)return t==="compositionend"||!ic&&Af(t,i)?(t=vf(),ua=Ql=Ji=null,ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ef&&i.locale!=="ko"?null:i.data;default:return null}}var dg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!dg[t.type]:i==="textarea"}function Pf(t,i,o,c){be(c),i=va(i,"onChange"),0<i.length&&(o=new $l("onChange","change",null,o,c),t.push({event:o,listeners:i}))}var ho=null,po=null;function fg(t){Yf(t,0)}function pa(t){var i=gs(t);if(Nt(i))return t}function hg(t,i){if(t==="change")return i}var bf=!1;if(f){var rc;if(f){var sc="oninput"in document;if(!sc){var Lf=document.createElement("div");Lf.setAttribute("oninput","return;"),sc=typeof Lf.oninput=="function"}rc=sc}else rc=!1;bf=rc&&(!document.documentMode||9<document.documentMode)}function Df(){ho&&(ho.detachEvent("onpropertychange",Nf),po=ho=null)}function Nf(t){if(t.propertyName==="value"&&pa(po)){var i=[];Pf(i,po,t,W(t)),Pn(fg,i)}}function pg(t,i,o){t==="focusin"?(Df(),ho=i,po=o,ho.attachEvent("onpropertychange",Nf)):t==="focusout"&&Df()}function mg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pa(po)}function gg(t,i){if(t==="click")return pa(i)}function _g(t,i){if(t==="input"||t==="change")return pa(i)}function vg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ti=typeof Object.is=="function"?Object.is:vg;function mo(t,i){if(ti(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!h.call(i,d)||!ti(t[d],i[d]))return!1}return!0}function If(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Uf(t,i){var o=If(t);t=0;for(var c;o;){if(o.nodeType===3){if(c=t+o.textContent.length,t<=i&&c>=i)return{node:o,offset:i-t};t=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=If(o)}}function Ff(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Ff(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Of(){for(var t=window,i=ut();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=ut(t.document)}return i}function oc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function xg(t){var i=Of(),o=t.focusedElem,c=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Ff(o.ownerDocument.documentElement,o)){if(c!==null&&oc(o)){if(i=c.start,t=c.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=o.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!t.extend&&p>c&&(d=c,c=p,p=d),d=Uf(o,p);var M=Uf(o,c);d&&M&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),p>c?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var yg=f&&"documentMode"in document&&11>=document.documentMode,fs=null,ac=null,go=null,lc=!1;function zf(t,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;lc||fs==null||fs!==ut(c)||(c=fs,"selectionStart"in c&&oc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),go&&mo(go,c)||(go=c,c=va(ac,"onSelect"),0<c.length&&(i=new $l("onSelect","select",null,i,o),t.push({event:i,listeners:c}),i.target=fs)))}function ma(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var hs={animationend:ma("Animation","AnimationEnd"),animationiteration:ma("Animation","AnimationIteration"),animationstart:ma("Animation","AnimationStart"),transitionend:ma("Transition","TransitionEnd")},cc={},kf={};f&&(kf=document.createElement("div").style,"AnimationEvent"in window||(delete hs.animationend.animation,delete hs.animationiteration.animation,delete hs.animationstart.animation),"TransitionEvent"in window||delete hs.transitionend.transition);function ga(t){if(cc[t])return cc[t];if(!hs[t])return t;var i=hs[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in kf)return cc[t]=i[o];return t}var Bf=ga("animationend"),Hf=ga("animationiteration"),Vf=ga("animationstart"),Gf=ga("transitionend"),jf=new Map,Wf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(t,i){jf.set(t,i),l(i,[t])}for(var uc=0;uc<Wf.length;uc++){var dc=Wf[uc],Sg=dc.toLowerCase(),Mg=dc[0].toUpperCase()+dc.slice(1);er(Sg,"on"+Mg)}er(Bf,"onAnimationEnd"),er(Hf,"onAnimationIteration"),er(Vf,"onAnimationStart"),er("dblclick","onDoubleClick"),er("focusin","onFocus"),er("focusout","onBlur"),er(Gf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Eg=new Set("cancel close invalid load scroll toggle".split(" ").concat(_o));function Xf(t,i,o){var c=t.type||"unknown-event";t.currentTarget=o,ea(c,i,void 0,t),t.currentTarget=null}function Yf(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var c=t[o],d=c.event;c=c.listeners;e:{var p=void 0;if(i)for(var M=c.length-1;0<=M;M--){var D=c[M],k=D.instance,re=D.currentTarget;if(D=D.listener,k!==p&&d.isPropagationStopped())break e;Xf(d,D,re),p=k}else for(M=0;M<c.length;M++){if(D=c[M],k=D.instance,re=D.currentTarget,D=D.listener,k!==p&&d.isPropagationStopped())break e;Xf(d,D,re),p=k}}}if(Pr)throw t=Yi,Pr=!1,Yi=null,t}function Ft(t,i){var o=i[xc];o===void 0&&(o=i[xc]=new Set);var c=t+"__bubble";o.has(c)||(qf(i,t,2,!1),o.add(c))}function fc(t,i,o){var c=0;i&&(c|=4),qf(o,t,c,i)}var _a="_reactListening"+Math.random().toString(36).slice(2);function vo(t){if(!t[_a]){t[_a]=!0,r.forEach(function(o){o!=="selectionchange"&&(Eg.has(o)||fc(o,!1,t),fc(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[_a]||(i[_a]=!0,fc("selectionchange",!1,i))}}function qf(t,i,o,c){switch(_f(i)){case 1:var d=O0;break;case 4:d=z0;break;default:d=Kl}o=d.bind(null,i,o,t),d=void 0,!as||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?t.addEventListener(i,o,{capture:!0,passive:d}):t.addEventListener(i,o,!0):d!==void 0?t.addEventListener(i,o,{passive:d}):t.addEventListener(i,o,!1)}function hc(t,i,o,c,d){var p=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var M=c.tag;if(M===3||M===4){var D=c.stateNode.containerInfo;if(D===d||D.nodeType===8&&D.parentNode===d)break;if(M===4)for(M=c.return;M!==null;){var k=M.tag;if((k===3||k===4)&&(k=M.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;M=M.return}for(;D!==null;){if(M=br(D),M===null)return;if(k=M.tag,k===5||k===6){c=p=M;continue e}D=D.parentNode}}c=c.return}Pn(function(){var re=p,_e=W(o),Se=[];e:{var ge=jf.get(t);if(ge!==void 0){var Ie=$l,ke=t;switch(t){case"keypress":if(da(o)===0)break e;case"keydown":case"keyup":Ie=J0;break;case"focusin":ke="focus",Ie=tc;break;case"focusout":ke="blur",Ie=tc;break;case"beforeblur":case"afterblur":Ie=tc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=yf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=H0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=ng;break;case Bf:case Hf:case Vf:Ie=j0;break;case Gf:Ie=rg;break;case"scroll":Ie=k0;break;case"wheel":Ie=og;break;case"copy":case"cut":case"paste":Ie=X0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=Mf}var He=(i&4)!==0,Yt=!He&&t==="scroll",K=He?ge!==null?ge+"Capture":null:ge;He=[];for(var V=re,J;V!==null;){J=V;var Te=J.stateNode;if(J.tag===5&&Te!==null&&(J=Te,K!==null&&(Te=Tn(V,K),Te!=null&&He.push(xo(V,Te,J)))),Yt)break;V=V.return}0<He.length&&(ge=new Ie(ge,ke,null,o,_e),Se.push({event:ge,listeners:He}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",Ie=t==="mouseout"||t==="pointerout",ge&&o!==wt&&(ke=o.relatedTarget||o.fromElement)&&(br(ke)||ke[Ri]))break e;if((Ie||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ie?(ke=o.relatedTarget||o.toElement,Ie=re,ke=ke?br(ke):null,ke!==null&&(Yt=hi(ke),ke!==Yt||ke.tag!==5&&ke.tag!==6)&&(ke=null)):(Ie=null,ke=re),Ie!==ke)){if(He=yf,Te="onMouseLeave",K="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(He=Mf,Te="onPointerLeave",K="onPointerEnter",V="pointer"),Yt=Ie==null?ge:gs(Ie),J=ke==null?ge:gs(ke),ge=new He(Te,V+"leave",Ie,o,_e),ge.target=Yt,ge.relatedTarget=J,Te=null,br(_e)===re&&(He=new He(K,V+"enter",ke,o,_e),He.target=J,He.relatedTarget=Yt,Te=He),Yt=Te,Ie&&ke)t:{for(He=Ie,K=ke,V=0,J=He;J;J=ps(J))V++;for(J=0,Te=K;Te;Te=ps(Te))J++;for(;0<V-J;)He=ps(He),V--;for(;0<J-V;)K=ps(K),J--;for(;V--;){if(He===K||K!==null&&He===K.alternate)break t;He=ps(He),K=ps(K)}He=null}else He=null;Ie!==null&&Kf(Se,ge,Ie,He,!1),ke!==null&&Yt!==null&&Kf(Se,Yt,ke,He,!0)}}e:{if(ge=re?gs(re):window,Ie=ge.nodeName&&ge.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&ge.type==="file")var We=hg;else if(Rf(ge))if(bf)We=_g;else{We=mg;var Qe=pg}else(Ie=ge.nodeName)&&Ie.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(We=gg);if(We&&(We=We(t,re))){Pf(Se,We,o,_e);break e}Qe&&Qe(t,ge,re),t==="focusout"&&(Qe=ge._wrapperState)&&Qe.controlled&&ge.type==="number"&&At(ge,"number",ge.value)}switch(Qe=re?gs(re):window,t){case"focusin":(Rf(Qe)||Qe.contentEditable==="true")&&(fs=Qe,ac=re,go=null);break;case"focusout":go=ac=fs=null;break;case"mousedown":lc=!0;break;case"contextmenu":case"mouseup":case"dragend":lc=!1,zf(Se,o,_e);break;case"selectionchange":if(yg)break;case"keydown":case"keyup":zf(Se,o,_e)}var $e;if(ic)e:{switch(t){case"compositionstart":var it="onCompositionStart";break e;case"compositionend":it="onCompositionEnd";break e;case"compositionupdate":it="onCompositionUpdate";break e}it=void 0}else ds?Af(t,o)&&(it="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(it="onCompositionStart");it&&(Ef&&o.locale!=="ko"&&(ds||it!=="onCompositionStart"?it==="onCompositionEnd"&&ds&&($e=vf()):(Ji=_e,Ql="value"in Ji?Ji.value:Ji.textContent,ds=!0)),Qe=va(re,it),0<Qe.length&&(it=new Sf(it,t,null,o,_e),Se.push({event:it,listeners:Qe}),$e?it.data=$e:($e=Cf(o),$e!==null&&(it.data=$e)))),($e=lg?cg(t,o):ug(t,o))&&(re=va(re,"onBeforeInput"),0<re.length&&(_e=new Sf("onBeforeInput","beforeinput",null,o,_e),Se.push({event:_e,listeners:re}),_e.data=$e))}Yf(Se,i)})}function xo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function va(t,i){for(var o=i+"Capture",c=[];t!==null;){var d=t,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=Tn(t,o),p!=null&&c.unshift(xo(t,p,d)),p=Tn(t,i),p!=null&&c.push(xo(t,p,d))),t=t.return}return c}function ps(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Kf(t,i,o,c,d){for(var p=i._reactName,M=[];o!==null&&o!==c;){var D=o,k=D.alternate,re=D.stateNode;if(k!==null&&k===c)break;D.tag===5&&re!==null&&(D=re,d?(k=Tn(o,p),k!=null&&M.unshift(xo(o,k,D))):d||(k=Tn(o,p),k!=null&&M.push(xo(o,k,D)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var Tg=/\r\n?/g,wg=/\u0000|\uFFFD/g;function Zf(t){return(typeof t=="string"?t:""+t).replace(Tg,`
`).replace(wg,"")}function xa(t,i,o){if(i=Zf(i),Zf(t)!==i&&o)throw Error(n(425))}function ya(){}var pc=null,mc=null;function gc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var _c=typeof setTimeout=="function"?setTimeout:void 0,Ag=typeof clearTimeout=="function"?clearTimeout:void 0,Qf=typeof Promise=="function"?Promise:void 0,Cg=typeof queueMicrotask=="function"?queueMicrotask:typeof Qf<"u"?function(t){return Qf.resolve(null).then(t).catch(Rg)}:_c;function Rg(t){setTimeout(function(){throw t})}function vc(t,i){var o=i,c=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(c===0){t.removeChild(d),lo(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=d}while(o);lo(i)}function tr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function $f(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var ms=Math.random().toString(36).slice(2),mi="__reactFiber$"+ms,yo="__reactProps$"+ms,Ri="__reactContainer$"+ms,xc="__reactEvents$"+ms,Pg="__reactListeners$"+ms,bg="__reactHandles$"+ms;function br(t){var i=t[mi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Ri]||o[mi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=$f(t);t!==null;){if(o=t[mi])return o;t=$f(t)}return i}t=o,o=t.parentNode}return null}function So(t){return t=t[mi]||t[Ri],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Sa(t){return t[yo]||null}var yc=[],_s=-1;function nr(t){return{current:t}}function Ot(t){0>_s||(t.current=yc[_s],yc[_s]=null,_s--)}function It(t,i){_s++,yc[_s]=t.current,t.current=i}var ir={},mn=nr(ir),bn=nr(!1),Lr=ir;function vs(t,i){var o=t.type.contextTypes;if(!o)return ir;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in o)d[p]=i[p];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function Ln(t){return t=t.childContextTypes,t!=null}function Ma(){Ot(bn),Ot(mn)}function Jf(t,i,o){if(mn.current!==ir)throw Error(n(168));It(mn,i),It(bn,o)}function eh(t,i,o){var c=t.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(n(108,xe(t)||"Unknown",d));return ae({},o,c)}function Ea(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ir,Lr=mn.current,It(mn,t),It(bn,bn.current),!0}function th(t,i,o){var c=t.stateNode;if(!c)throw Error(n(169));o?(t=eh(t,i,Lr),c.__reactInternalMemoizedMergedChildContext=t,Ot(bn),Ot(mn),It(mn,t)):Ot(bn),It(bn,o)}var Pi=null,Ta=!1,Sc=!1;function nh(t){Pi===null?Pi=[t]:Pi.push(t)}function Lg(t){Ta=!0,nh(t)}function rr(){if(!Sc&&Pi!==null){Sc=!0;var t=0,i=St;try{var o=Pi;for(St=1;t<o.length;t++){var c=o[t];do c=c(!0);while(c!==null)}Pi=null,Ta=!1}catch(d){throw Pi!==null&&(Pi=Pi.slice(t+1)),sa(Me,rr),d}finally{St=i,Sc=!1}}return null}var xs=[],ys=0,wa=null,Aa=0,qn=[],Kn=0,Dr=null,bi=1,Li="";function Nr(t,i){xs[ys++]=Aa,xs[ys++]=wa,wa=t,Aa=i}function ih(t,i,o){qn[Kn++]=bi,qn[Kn++]=Li,qn[Kn++]=Dr,Dr=t;var c=bi;t=Li;var d=32-at(c)-1;c&=~(1<<d),o+=1;var p=32-at(i)+d;if(30<p){var M=d-d%5;p=(c&(1<<M)-1).toString(32),c>>=M,d-=M,bi=1<<32-at(i)+d|o<<d|c,Li=p+t}else bi=1<<p|o<<d|c,Li=t}function Mc(t){t.return!==null&&(Nr(t,1),ih(t,1,0))}function Ec(t){for(;t===wa;)wa=xs[--ys],xs[ys]=null,Aa=xs[--ys],xs[ys]=null;for(;t===Dr;)Dr=qn[--Kn],qn[Kn]=null,Li=qn[--Kn],qn[Kn]=null,bi=qn[--Kn],qn[Kn]=null}var Hn=null,Vn=null,kt=!1,ni=null;function rh(t,i){var o=Jn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function sh(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Hn=t,Vn=tr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Hn=t,Vn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Dr!==null?{id:bi,overflow:Li}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Jn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Hn=t,Vn=null,!0):!1;default:return!1}}function Tc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wc(t){if(kt){var i=Vn;if(i){var o=i;if(!sh(t,i)){if(Tc(t))throw Error(n(418));i=tr(o.nextSibling);var c=Hn;i&&sh(t,i)?rh(c,o):(t.flags=t.flags&-4097|2,kt=!1,Hn=t)}}else{if(Tc(t))throw Error(n(418));t.flags=t.flags&-4097|2,kt=!1,Hn=t}}}function oh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Hn=t}function Ca(t){if(t!==Hn)return!1;if(!kt)return oh(t),kt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!gc(t.type,t.memoizedProps)),i&&(i=Vn)){if(Tc(t))throw ah(),Error(n(418));for(;i;)rh(t,i),i=tr(i.nextSibling)}if(oh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Vn=tr(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Vn=null}}else Vn=Hn?tr(t.stateNode.nextSibling):null;return!0}function ah(){for(var t=Vn;t;)t=tr(t.nextSibling)}function Ss(){Vn=Hn=null,kt=!1}function Ac(t){ni===null?ni=[t]:ni.push(t)}var Dg=P.ReactCurrentBatchConfig;function Mo(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var c=o.stateNode}if(!c)throw Error(n(147,t));var d=c,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(M){var D=d.refs;M===null?delete D[p]:D[p]=M},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Ra(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function lh(t){var i=t._init;return i(t._payload)}function ch(t){function i(K,V){if(t){var J=K.deletions;J===null?(K.deletions=[V],K.flags|=16):J.push(V)}}function o(K,V){if(!t)return null;for(;V!==null;)i(K,V),V=V.sibling;return null}function c(K,V){for(K=new Map;V!==null;)V.key!==null?K.set(V.key,V):K.set(V.index,V),V=V.sibling;return K}function d(K,V){return K=fr(K,V),K.index=0,K.sibling=null,K}function p(K,V,J){return K.index=J,t?(J=K.alternate,J!==null?(J=J.index,J<V?(K.flags|=2,V):J):(K.flags|=2,V)):(K.flags|=1048576,V)}function M(K){return t&&K.alternate===null&&(K.flags|=2),K}function D(K,V,J,Te){return V===null||V.tag!==6?(V=_u(J,K.mode,Te),V.return=K,V):(V=d(V,J),V.return=K,V)}function k(K,V,J,Te){var We=J.type;return We===F?_e(K,V,J.props.children,Te,J.key):V!==null&&(V.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===$&&lh(We)===V.type)?(Te=d(V,J.props),Te.ref=Mo(K,V,J),Te.return=K,Te):(Te=$a(J.type,J.key,J.props,null,K.mode,Te),Te.ref=Mo(K,V,J),Te.return=K,Te)}function re(K,V,J,Te){return V===null||V.tag!==4||V.stateNode.containerInfo!==J.containerInfo||V.stateNode.implementation!==J.implementation?(V=vu(J,K.mode,Te),V.return=K,V):(V=d(V,J.children||[]),V.return=K,V)}function _e(K,V,J,Te,We){return V===null||V.tag!==7?(V=Hr(J,K.mode,Te,We),V.return=K,V):(V=d(V,J),V.return=K,V)}function Se(K,V,J){if(typeof V=="string"&&V!==""||typeof V=="number")return V=_u(""+V,K.mode,J),V.return=K,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case G:return J=$a(V.type,V.key,V.props,null,K.mode,J),J.ref=Mo(K,null,V),J.return=K,J;case O:return V=vu(V,K.mode,J),V.return=K,V;case $:var Te=V._init;return Se(K,Te(V._payload),J)}if(je(V)||ue(V))return V=Hr(V,K.mode,J,null),V.return=K,V;Ra(K,V)}return null}function ge(K,V,J,Te){var We=V!==null?V.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return We!==null?null:D(K,V,""+J,Te);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case G:return J.key===We?k(K,V,J,Te):null;case O:return J.key===We?re(K,V,J,Te):null;case $:return We=J._init,ge(K,V,We(J._payload),Te)}if(je(J)||ue(J))return We!==null?null:_e(K,V,J,Te,null);Ra(K,J)}return null}function Ie(K,V,J,Te,We){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return K=K.get(J)||null,D(V,K,""+Te,We);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case G:return K=K.get(Te.key===null?J:Te.key)||null,k(V,K,Te,We);case O:return K=K.get(Te.key===null?J:Te.key)||null,re(V,K,Te,We);case $:var Qe=Te._init;return Ie(K,V,J,Qe(Te._payload),We)}if(je(Te)||ue(Te))return K=K.get(J)||null,_e(V,K,Te,We,null);Ra(V,Te)}return null}function ke(K,V,J,Te){for(var We=null,Qe=null,$e=V,it=V=0,an=null;$e!==null&&it<J.length;it++){$e.index>it?(an=$e,$e=null):an=$e.sibling;var Et=ge(K,$e,J[it],Te);if(Et===null){$e===null&&($e=an);break}t&&$e&&Et.alternate===null&&i(K,$e),V=p(Et,V,it),Qe===null?We=Et:Qe.sibling=Et,Qe=Et,$e=an}if(it===J.length)return o(K,$e),kt&&Nr(K,it),We;if($e===null){for(;it<J.length;it++)$e=Se(K,J[it],Te),$e!==null&&(V=p($e,V,it),Qe===null?We=$e:Qe.sibling=$e,Qe=$e);return kt&&Nr(K,it),We}for($e=c(K,$e);it<J.length;it++)an=Ie($e,K,it,J[it],Te),an!==null&&(t&&an.alternate!==null&&$e.delete(an.key===null?it:an.key),V=p(an,V,it),Qe===null?We=an:Qe.sibling=an,Qe=an);return t&&$e.forEach(function(hr){return i(K,hr)}),kt&&Nr(K,it),We}function He(K,V,J,Te){var We=ue(J);if(typeof We!="function")throw Error(n(150));if(J=We.call(J),J==null)throw Error(n(151));for(var Qe=We=null,$e=V,it=V=0,an=null,Et=J.next();$e!==null&&!Et.done;it++,Et=J.next()){$e.index>it?(an=$e,$e=null):an=$e.sibling;var hr=ge(K,$e,Et.value,Te);if(hr===null){$e===null&&($e=an);break}t&&$e&&hr.alternate===null&&i(K,$e),V=p(hr,V,it),Qe===null?We=hr:Qe.sibling=hr,Qe=hr,$e=an}if(Et.done)return o(K,$e),kt&&Nr(K,it),We;if($e===null){for(;!Et.done;it++,Et=J.next())Et=Se(K,Et.value,Te),Et!==null&&(V=p(Et,V,it),Qe===null?We=Et:Qe.sibling=Et,Qe=Et);return kt&&Nr(K,it),We}for($e=c(K,$e);!Et.done;it++,Et=J.next())Et=Ie($e,K,it,Et.value,Te),Et!==null&&(t&&Et.alternate!==null&&$e.delete(Et.key===null?it:Et.key),V=p(Et,V,it),Qe===null?We=Et:Qe.sibling=Et,Qe=Et);return t&&$e.forEach(function(d_){return i(K,d_)}),kt&&Nr(K,it),We}function Yt(K,V,J,Te){if(typeof J=="object"&&J!==null&&J.type===F&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case G:e:{for(var We=J.key,Qe=V;Qe!==null;){if(Qe.key===We){if(We=J.type,We===F){if(Qe.tag===7){o(K,Qe.sibling),V=d(Qe,J.props.children),V.return=K,K=V;break e}}else if(Qe.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===$&&lh(We)===Qe.type){o(K,Qe.sibling),V=d(Qe,J.props),V.ref=Mo(K,Qe,J),V.return=K,K=V;break e}o(K,Qe);break}else i(K,Qe);Qe=Qe.sibling}J.type===F?(V=Hr(J.props.children,K.mode,Te,J.key),V.return=K,K=V):(Te=$a(J.type,J.key,J.props,null,K.mode,Te),Te.ref=Mo(K,V,J),Te.return=K,K=Te)}return M(K);case O:e:{for(Qe=J.key;V!==null;){if(V.key===Qe)if(V.tag===4&&V.stateNode.containerInfo===J.containerInfo&&V.stateNode.implementation===J.implementation){o(K,V.sibling),V=d(V,J.children||[]),V.return=K,K=V;break e}else{o(K,V);break}else i(K,V);V=V.sibling}V=vu(J,K.mode,Te),V.return=K,K=V}return M(K);case $:return Qe=J._init,Yt(K,V,Qe(J._payload),Te)}if(je(J))return ke(K,V,J,Te);if(ue(J))return He(K,V,J,Te);Ra(K,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,V!==null&&V.tag===6?(o(K,V.sibling),V=d(V,J),V.return=K,K=V):(o(K,V),V=_u(J,K.mode,Te),V.return=K,K=V),M(K)):o(K,V)}return Yt}var Ms=ch(!0),uh=ch(!1),Pa=nr(null),ba=null,Es=null,Cc=null;function Rc(){Cc=Es=ba=null}function Pc(t){var i=Pa.current;Ot(Pa),t._currentValue=i}function bc(t,i,o){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===o)break;t=t.return}}function Ts(t,i){ba=t,Cc=Es=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Dn=!0),t.firstContext=null)}function Zn(t){var i=t._currentValue;if(Cc!==t)if(t={context:t,memoizedValue:i,next:null},Es===null){if(ba===null)throw Error(n(308));Es=t,ba.dependencies={lanes:0,firstContext:t}}else Es=Es.next=t;return i}var Ir=null;function Lc(t){Ir===null?Ir=[t]:Ir.push(t)}function dh(t,i,o,c){var d=i.interleaved;return d===null?(o.next=o,Lc(i)):(o.next=d.next,d.next=o),i.interleaved=o,Di(t,c)}function Di(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var sr=!1;function Dc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ni(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function or(t,i,o){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(Mt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Di(t,o)}return d=c.interleaved,d===null?(i.next=i,Lc(c)):(i.next=d.next,d.next=i),c.interleaved=i,Di(t,o)}function La(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=t.pendingLanes,o|=c,i.lanes=o,rn(t,o)}}function hh(t,i){var o=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?d=p=M:p=p.next=M,o=o.next}while(o!==null);p===null?d=p=i:p=p.next=i}else d=p=i;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Da(t,i,o,c){var d=t.updateQueue;sr=!1;var p=d.firstBaseUpdate,M=d.lastBaseUpdate,D=d.shared.pending;if(D!==null){d.shared.pending=null;var k=D,re=k.next;k.next=null,M===null?p=re:M.next=re,M=k;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,D=_e.lastBaseUpdate,D!==M&&(D===null?_e.firstBaseUpdate=re:D.next=re,_e.lastBaseUpdate=k))}if(p!==null){var Se=d.baseState;M=0,_e=re=k=null,D=p;do{var ge=D.lane,Ie=D.eventTime;if((c&ge)===ge){_e!==null&&(_e=_e.next={eventTime:Ie,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var ke=t,He=D;switch(ge=i,Ie=o,He.tag){case 1:if(ke=He.payload,typeof ke=="function"){Se=ke.call(Ie,Se,ge);break e}Se=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=He.payload,ge=typeof ke=="function"?ke.call(Ie,Se,ge):ke,ge==null)break e;Se=ae({},Se,ge);break e;case 2:sr=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,ge=d.effects,ge===null?d.effects=[D]:ge.push(D))}else Ie={eventTime:Ie,lane:ge,tag:D.tag,payload:D.payload,callback:D.callback,next:null},_e===null?(re=_e=Ie,k=Se):_e=_e.next=Ie,M|=ge;if(D=D.next,D===null){if(D=d.shared.pending,D===null)break;ge=D,D=ge.next,ge.next=null,d.lastBaseUpdate=ge,d.shared.pending=null}}while(!0);if(_e===null&&(k=Se),d.baseState=k,d.firstBaseUpdate=re,d.lastBaseUpdate=_e,i=d.shared.interleaved,i!==null){d=i;do M|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Or|=M,t.lanes=M,t.memoizedState=Se}}function ph(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var c=t[i],d=c.callback;if(d!==null){if(c.callback=null,c=o,typeof d!="function")throw Error(n(191,d));d.call(c)}}}var Eo={},gi=nr(Eo),To=nr(Eo),wo=nr(Eo);function Ur(t){if(t===Eo)throw Error(n(174));return t}function Nc(t,i){switch(It(wo,i),It(To,t),It(gi,Eo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ve(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ve(i,t)}Ot(gi),It(gi,i)}function ws(){Ot(gi),Ot(To),Ot(wo)}function mh(t){Ur(wo.current);var i=Ur(gi.current),o=Ve(i,t.type);i!==o&&(It(To,t),It(gi,o))}function Ic(t){To.current===t&&(Ot(gi),Ot(To))}var Bt=nr(0);function Na(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Uc=[];function Fc(){for(var t=0;t<Uc.length;t++)Uc[t]._workInProgressVersionPrimary=null;Uc.length=0}var Ia=P.ReactCurrentDispatcher,Oc=P.ReactCurrentBatchConfig,Fr=0,Ht=null,Qt=null,sn=null,Ua=!1,Ao=!1,Co=0,Ng=0;function gn(){throw Error(n(321))}function zc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!ti(t[o],i[o]))return!1;return!0}function kc(t,i,o,c,d,p){if(Fr=p,Ht=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ia.current=t===null||t.memoizedState===null?Og:zg,t=o(c,d),Ao){p=0;do{if(Ao=!1,Co=0,25<=p)throw Error(n(301));p+=1,sn=Qt=null,i.updateQueue=null,Ia.current=kg,t=o(c,d)}while(Ao)}if(Ia.current=za,i=Qt!==null&&Qt.next!==null,Fr=0,sn=Qt=Ht=null,Ua=!1,i)throw Error(n(300));return t}function Bc(){var t=Co!==0;return Co=0,t}function _i(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Ht.memoizedState=sn=t:sn=sn.next=t,sn}function Qn(){if(Qt===null){var t=Ht.alternate;t=t!==null?t.memoizedState:null}else t=Qt.next;var i=sn===null?Ht.memoizedState:sn.next;if(i!==null)sn=i,Qt=t;else{if(t===null)throw Error(n(310));Qt=t,t={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},sn===null?Ht.memoizedState=sn=t:sn=sn.next=t}return sn}function Ro(t,i){return typeof i=="function"?i(t):i}function Hc(t){var i=Qn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var c=Qt,d=c.baseQueue,p=o.pending;if(p!==null){if(d!==null){var M=d.next;d.next=p.next,p.next=M}c.baseQueue=d=p,o.pending=null}if(d!==null){p=d.next,c=c.baseState;var D=M=null,k=null,re=p;do{var _e=re.lane;if((Fr&_e)===_e)k!==null&&(k=k.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),c=re.hasEagerState?re.eagerState:t(c,re.action);else{var Se={lane:_e,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};k===null?(D=k=Se,M=c):k=k.next=Se,Ht.lanes|=_e,Or|=_e}re=re.next}while(re!==null&&re!==p);k===null?M=c:k.next=D,ti(c,i.memoizedState)||(Dn=!0),i.memoizedState=c,i.baseState=M,i.baseQueue=k,o.lastRenderedState=c}if(t=o.interleaved,t!==null){d=t;do p=d.lane,Ht.lanes|=p,Or|=p,d=d.next;while(d!==t)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Vc(t){var i=Qn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var c=o.dispatch,d=o.pending,p=i.memoizedState;if(d!==null){o.pending=null;var M=d=d.next;do p=t(p,M.action),M=M.next;while(M!==d);ti(p,i.memoizedState)||(Dn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,c]}function gh(){}function _h(t,i){var o=Ht,c=Qn(),d=i(),p=!ti(c.memoizedState,d);if(p&&(c.memoizedState=d,Dn=!0),c=c.queue,Gc(yh.bind(null,o,c,t),[t]),c.getSnapshot!==i||p||sn!==null&&sn.memoizedState.tag&1){if(o.flags|=2048,Po(9,xh.bind(null,o,c,d,i),void 0,null),on===null)throw Error(n(349));(Fr&30)!==0||vh(o,i,d)}return d}function vh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function xh(t,i,o,c){i.value=o,i.getSnapshot=c,Sh(i)&&Mh(t)}function yh(t,i,o){return o(function(){Sh(i)&&Mh(t)})}function Sh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!ti(t,o)}catch{return!0}}function Mh(t){var i=Di(t,1);i!==null&&oi(i,t,1,-1)}function Eh(t){var i=_i();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:t},i.queue=t,t=t.dispatch=Fg.bind(null,Ht,t),[i.memoizedState,t]}function Po(t,i,o,c){return t={tag:t,create:i,destroy:o,deps:c,next:null},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(c=o.next,o.next=t,t.next=c,i.lastEffect=t)),t}function Th(){return Qn().memoizedState}function Fa(t,i,o,c){var d=_i();Ht.flags|=t,d.memoizedState=Po(1|i,o,void 0,c===void 0?null:c)}function Oa(t,i,o,c){var d=Qn();c=c===void 0?null:c;var p=void 0;if(Qt!==null){var M=Qt.memoizedState;if(p=M.destroy,c!==null&&zc(c,M.deps)){d.memoizedState=Po(i,o,p,c);return}}Ht.flags|=t,d.memoizedState=Po(1|i,o,p,c)}function wh(t,i){return Fa(8390656,8,t,i)}function Gc(t,i){return Oa(2048,8,t,i)}function Ah(t,i){return Oa(4,2,t,i)}function Ch(t,i){return Oa(4,4,t,i)}function Rh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Ph(t,i,o){return o=o!=null?o.concat([t]):null,Oa(4,4,Rh.bind(null,i,t),o)}function jc(){}function bh(t,i){var o=Qn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&zc(i,c[1])?c[0]:(o.memoizedState=[t,i],t)}function Lh(t,i){var o=Qn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&zc(i,c[1])?c[0]:(t=t(),o.memoizedState=[t,i],t)}function Dh(t,i,o){return(Fr&21)===0?(t.baseState&&(t.baseState=!1,Dn=!0),t.memoizedState=o):(ti(o,i)||(o=Lt(),Ht.lanes|=o,Or|=o,t.baseState=!0),i)}function Ig(t,i){var o=St;St=o!==0&&4>o?o:4,t(!0);var c=Oc.transition;Oc.transition={};try{t(!1),i()}finally{St=o,Oc.transition=c}}function Nh(){return Qn().memoizedState}function Ug(t,i,o){var c=ur(t);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},Ih(t))Uh(i,o);else if(o=dh(t,i,o,c),o!==null){var d=Cn();oi(o,t,c,d),Fh(o,i,c)}}function Fg(t,i,o){var c=ur(t),d={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(Ih(t))Uh(i,d);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var M=i.lastRenderedState,D=p(M,o);if(d.hasEagerState=!0,d.eagerState=D,ti(D,M)){var k=i.interleaved;k===null?(d.next=d,Lc(i)):(d.next=k.next,k.next=d),i.interleaved=d;return}}catch{}finally{}o=dh(t,i,d,c),o!==null&&(d=Cn(),oi(o,t,c,d),Fh(o,i,c))}}function Ih(t){var i=t.alternate;return t===Ht||i!==null&&i===Ht}function Uh(t,i){Ao=Ua=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Fh(t,i,o){if((o&4194240)!==0){var c=i.lanes;c&=t.pendingLanes,o|=c,i.lanes=o,rn(t,o)}}var za={readContext:Zn,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useInsertionEffect:gn,useLayoutEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useMutableSource:gn,useSyncExternalStore:gn,useId:gn,unstable_isNewReconciler:!1},Og={readContext:Zn,useCallback:function(t,i){return _i().memoizedState=[t,i===void 0?null:i],t},useContext:Zn,useEffect:wh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Fa(4194308,4,Rh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Fa(4194308,4,t,i)},useInsertionEffect:function(t,i){return Fa(4,2,t,i)},useMemo:function(t,i){var o=_i();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var c=_i();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},c.queue=t,t=t.dispatch=Ug.bind(null,Ht,t),[c.memoizedState,t]},useRef:function(t){var i=_i();return t={current:t},i.memoizedState=t},useState:Eh,useDebugValue:jc,useDeferredValue:function(t){return _i().memoizedState=t},useTransition:function(){var t=Eh(!1),i=t[0];return t=Ig.bind(null,t[1]),_i().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var c=Ht,d=_i();if(kt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),on===null)throw Error(n(349));(Fr&30)!==0||vh(c,i,o)}d.memoizedState=o;var p={value:o,getSnapshot:i};return d.queue=p,wh(yh.bind(null,c,p,t),[t]),c.flags|=2048,Po(9,xh.bind(null,c,p,o,i),void 0,null),o},useId:function(){var t=_i(),i=on.identifierPrefix;if(kt){var o=Li,c=bi;o=(c&~(1<<32-at(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=Co++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Ng++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},zg={readContext:Zn,useCallback:bh,useContext:Zn,useEffect:Gc,useImperativeHandle:Ph,useInsertionEffect:Ah,useLayoutEffect:Ch,useMemo:Lh,useReducer:Hc,useRef:Th,useState:function(){return Hc(Ro)},useDebugValue:jc,useDeferredValue:function(t){var i=Qn();return Dh(i,Qt.memoizedState,t)},useTransition:function(){var t=Hc(Ro)[0],i=Qn().memoizedState;return[t,i]},useMutableSource:gh,useSyncExternalStore:_h,useId:Nh,unstable_isNewReconciler:!1},kg={readContext:Zn,useCallback:bh,useContext:Zn,useEffect:Gc,useImperativeHandle:Ph,useInsertionEffect:Ah,useLayoutEffect:Ch,useMemo:Lh,useReducer:Vc,useRef:Th,useState:function(){return Vc(Ro)},useDebugValue:jc,useDeferredValue:function(t){var i=Qn();return Qt===null?i.memoizedState=t:Dh(i,Qt.memoizedState,t)},useTransition:function(){var t=Vc(Ro)[0],i=Qn().memoizedState;return[t,i]},useMutableSource:gh,useSyncExternalStore:_h,useId:Nh,unstable_isNewReconciler:!1};function ii(t,i){if(t&&t.defaultProps){i=ae({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Wc(t,i,o,c){i=t.memoizedState,o=o(c,i),o=o==null?i:ae({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var ka={isMounted:function(t){return(t=t._reactInternals)?hi(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var c=Cn(),d=ur(t),p=Ni(c,d);p.payload=i,o!=null&&(p.callback=o),i=or(t,p,d),i!==null&&(oi(i,t,d,c),La(i,t,d))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var c=Cn(),d=ur(t),p=Ni(c,d);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=or(t,p,d),i!==null&&(oi(i,t,d,c),La(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=Cn(),c=ur(t),d=Ni(o,c);d.tag=2,i!=null&&(d.callback=i),i=or(t,d,c),i!==null&&(oi(i,t,c,o),La(i,t,c))}};function Oh(t,i,o,c,d,p,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,p,M):i.prototype&&i.prototype.isPureReactComponent?!mo(o,c)||!mo(d,p):!0}function zh(t,i,o){var c=!1,d=ir,p=i.contextType;return typeof p=="object"&&p!==null?p=Zn(p):(d=Ln(i)?Lr:mn.current,c=i.contextTypes,p=(c=c!=null)?vs(t,d):ir),i=new i(o,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ka,t.stateNode=i,i._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=p),i}function kh(t,i,o,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==t&&ka.enqueueReplaceState(i,i.state,null)}function Xc(t,i,o,c){var d=t.stateNode;d.props=o,d.state=t.memoizedState,d.refs={},Dc(t);var p=i.contextType;typeof p=="object"&&p!==null?d.context=Zn(p):(p=Ln(i)?Lr:mn.current,d.context=vs(t,p)),d.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Wc(t,i,p,o),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&ka.enqueueReplaceState(d,d.state,null),Da(t,o,d,c),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function As(t,i){try{var o="",c=i;do o+=me(c),c=c.return;while(c);var d=o}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:d,digest:null}}function Yc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function qc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Bg=typeof WeakMap=="function"?WeakMap:Map;function Bh(t,i,o){o=Ni(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){Xa||(Xa=!0,cu=c),qc(t,i)},o}function Hh(t,i,o){o=Ni(-1,o),o.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;o.payload=function(){return c(d)},o.callback=function(){qc(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){qc(t,i),typeof c!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Vh(t,i,o){var c=t.pingCache;if(c===null){c=t.pingCache=new Bg;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(o)||(d.add(o),t=e_.bind(null,t,i,o),i.then(t,t))}function Gh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function jh(t,i,o,c,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ni(-1,1),i.tag=2,or(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var Hg=P.ReactCurrentOwner,Dn=!1;function An(t,i,o,c){i.child=t===null?uh(i,null,o,c):Ms(i,t.child,o,c)}function Wh(t,i,o,c,d){o=o.render;var p=i.ref;return Ts(i,d),c=kc(t,i,o,c,p,d),o=Bc(),t!==null&&!Dn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ii(t,i,d)):(kt&&o&&Mc(i),i.flags|=1,An(t,i,c,d),i.child)}function Xh(t,i,o,c,d){if(t===null){var p=o.type;return typeof p=="function"&&!gu(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,Yh(t,i,p,c,d)):(t=$a(o.type,null,c,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&d)===0){var M=p.memoizedProps;if(o=o.compare,o=o!==null?o:mo,o(M,c)&&t.ref===i.ref)return Ii(t,i,d)}return i.flags|=1,t=fr(p,c),t.ref=i.ref,t.return=i,i.child=t}function Yh(t,i,o,c,d){if(t!==null){var p=t.memoizedProps;if(mo(p,c)&&t.ref===i.ref)if(Dn=!1,i.pendingProps=c=p,(t.lanes&d)!==0)(t.flags&131072)!==0&&(Dn=!0);else return i.lanes=t.lanes,Ii(t,i,d)}return Kc(t,i,o,c,d)}function qh(t,i,o){var c=i.pendingProps,d=c.children,p=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(Rs,Gn),Gn|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,It(Rs,Gn),Gn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:o,It(Rs,Gn),Gn|=c}else p!==null?(c=p.baseLanes|o,i.memoizedState=null):c=o,It(Rs,Gn),Gn|=c;return An(t,i,d,o),i.child}function Kh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Kc(t,i,o,c,d){var p=Ln(o)?Lr:mn.current;return p=vs(i,p),Ts(i,d),o=kc(t,i,o,c,p,d),c=Bc(),t!==null&&!Dn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ii(t,i,d)):(kt&&c&&Mc(i),i.flags|=1,An(t,i,o,d),i.child)}function Zh(t,i,o,c,d){if(Ln(o)){var p=!0;Ea(i)}else p=!1;if(Ts(i,d),i.stateNode===null)Ha(t,i),zh(i,o,c),Xc(i,o,c,d),c=!0;else if(t===null){var M=i.stateNode,D=i.memoizedProps;M.props=D;var k=M.context,re=o.contextType;typeof re=="object"&&re!==null?re=Zn(re):(re=Ln(o)?Lr:mn.current,re=vs(i,re));var _e=o.getDerivedStateFromProps,Se=typeof _e=="function"||typeof M.getSnapshotBeforeUpdate=="function";Se||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==c||k!==re)&&kh(i,M,c,re),sr=!1;var ge=i.memoizedState;M.state=ge,Da(i,c,M,d),k=i.memoizedState,D!==c||ge!==k||bn.current||sr?(typeof _e=="function"&&(Wc(i,o,_e,c),k=i.memoizedState),(D=sr||Oh(i,o,D,c,ge,k,re))?(Se||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=k),M.props=c,M.state=k,M.context=re,c=D):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{M=i.stateNode,fh(t,i),D=i.memoizedProps,re=i.type===i.elementType?D:ii(i.type,D),M.props=re,Se=i.pendingProps,ge=M.context,k=o.contextType,typeof k=="object"&&k!==null?k=Zn(k):(k=Ln(o)?Lr:mn.current,k=vs(i,k));var Ie=o.getDerivedStateFromProps;(_e=typeof Ie=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==Se||ge!==k)&&kh(i,M,c,k),sr=!1,ge=i.memoizedState,M.state=ge,Da(i,c,M,d);var ke=i.memoizedState;D!==Se||ge!==ke||bn.current||sr?(typeof Ie=="function"&&(Wc(i,o,Ie,c),ke=i.memoizedState),(re=sr||Oh(i,o,re,c,ge,ke,k)||!1)?(_e||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(c,ke,k),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(c,ke,k)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ke),M.props=c,M.state=ke,M.context=k,c=re):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),c=!1)}return Zc(t,i,o,c,p,d)}function Zc(t,i,o,c,d,p){Kh(t,i);var M=(i.flags&128)!==0;if(!c&&!M)return d&&th(i,o,!1),Ii(t,i,p);c=i.stateNode,Hg.current=i;var D=M&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,t!==null&&M?(i.child=Ms(i,t.child,null,p),i.child=Ms(i,null,D,p)):An(t,i,D,p),i.memoizedState=c.state,d&&th(i,o,!0),i.child}function Qh(t){var i=t.stateNode;i.pendingContext?Jf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Jf(t,i.context,!1),Nc(t,i.containerInfo)}function $h(t,i,o,c,d){return Ss(),Ac(d),i.flags|=256,An(t,i,o,c),i.child}var Qc={dehydrated:null,treeContext:null,retryLane:0};function $c(t){return{baseLanes:t,cachePool:null,transitions:null}}function Jh(t,i,o){var c=i.pendingProps,d=Bt.current,p=!1,M=(i.flags&128)!==0,D;if((D=M)||(D=t!==null&&t.memoizedState===null?!1:(d&2)!==0),D?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),It(Bt,d&1),t===null)return wc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=c.children,t=c.fallback,p?(c=i.mode,p=i.child,M={mode:"hidden",children:M},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=M):p=Ja(M,c,0,null),t=Hr(t,c,o,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=$c(o),i.memoizedState=Qc,t):Jc(i,M));if(d=t.memoizedState,d!==null&&(D=d.dehydrated,D!==null))return Vg(t,i,M,c,D,d,o);if(p){p=c.fallback,M=i.mode,d=t.child,D=d.sibling;var k={mode:"hidden",children:c.children};return(M&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=k,i.deletions=null):(c=fr(d,k),c.subtreeFlags=d.subtreeFlags&14680064),D!==null?p=fr(D,p):(p=Hr(p,M,o,null),p.flags|=2),p.return=i,c.return=i,c.sibling=p,i.child=c,c=p,p=i.child,M=t.child.memoizedState,M=M===null?$c(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},p.memoizedState=M,p.childLanes=t.childLanes&~o,i.memoizedState=Qc,c}return p=t.child,t=p.sibling,c=fr(p,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=c,i.memoizedState=null,c}function Jc(t,i){return i=Ja({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ba(t,i,o,c){return c!==null&&Ac(c),Ms(i,t.child,null,o),t=Jc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Vg(t,i,o,c,d,p,M){if(o)return i.flags&256?(i.flags&=-257,c=Yc(Error(n(422))),Ba(t,i,M,c)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=c.fallback,d=i.mode,c=Ja({mode:"visible",children:c.children},d,0,null),p=Hr(p,d,M,null),p.flags|=2,c.return=i,p.return=i,c.sibling=p,i.child=c,(i.mode&1)!==0&&Ms(i,t.child,null,M),i.child.memoizedState=$c(M),i.memoizedState=Qc,p);if((i.mode&1)===0)return Ba(t,i,M,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var D=c.dgst;return c=D,p=Error(n(419)),c=Yc(p,c,void 0),Ba(t,i,M,c)}if(D=(M&t.childLanes)!==0,Dn||D){if(c=on,c!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|M))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Di(t,d),oi(c,t,d,-1))}return mu(),c=Yc(Error(n(421))),Ba(t,i,M,c)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=t_.bind(null,t),d._reactRetry=i,null):(t=p.treeContext,Vn=tr(d.nextSibling),Hn=i,kt=!0,ni=null,t!==null&&(qn[Kn++]=bi,qn[Kn++]=Li,qn[Kn++]=Dr,bi=t.id,Li=t.overflow,Dr=i),i=Jc(i,c.children),i.flags|=4096,i)}function ep(t,i,o){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),bc(t.return,i,o)}function eu(t,i,o,c,d){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=o,p.tailMode=d)}function tp(t,i,o){var c=i.pendingProps,d=c.revealOrder,p=c.tail;if(An(t,i,c.children,o),c=Bt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ep(t,o,i);else if(t.tag===19)ep(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(It(Bt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)t=o.alternate,t!==null&&Na(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),eu(i,!1,d,o,p);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Na(t)===null){i.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}eu(i,!0,o,null,p);break;case"together":eu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ha(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ii(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Or|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=fr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=fr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function Gg(t,i,o){switch(i.tag){case 3:Qh(i),Ss();break;case 5:mh(i);break;case 1:Ln(i.type)&&Ea(i);break;case 4:Nc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;It(Pa,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(It(Bt,Bt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Jh(t,i,o):(It(Bt,Bt.current&1),t=Ii(t,i,o),t!==null?t.sibling:null);It(Bt,Bt.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(t.flags&128)!==0){if(c)return tp(t,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),It(Bt,Bt.current),c)break;return null;case 22:case 23:return i.lanes=0,qh(t,i,o)}return Ii(t,i,o)}var np,tu,ip,rp;np=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},tu=function(){},ip=function(t,i,o,c){var d=t.memoizedProps;if(d!==c){t=i.stateNode,Ur(gi.current);var p=null;switch(o){case"input":d=B(t,d),c=B(t,c),p=[];break;case"select":d=ae({},d,{value:void 0}),c=ae({},c,{value:void 0}),p=[];break;case"textarea":d=T(t,d),c=T(t,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=ya)}ft(o,c);var M;o=null;for(re in d)if(!c.hasOwnProperty(re)&&d.hasOwnProperty(re)&&d[re]!=null)if(re==="style"){var D=d[re];for(M in D)D.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(a.hasOwnProperty(re)?p||(p=[]):(p=p||[]).push(re,null));for(re in c){var k=c[re];if(D=d!=null?d[re]:void 0,c.hasOwnProperty(re)&&k!==D&&(k!=null||D!=null))if(re==="style")if(D){for(M in D)!D.hasOwnProperty(M)||k&&k.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in k)k.hasOwnProperty(M)&&D[M]!==k[M]&&(o||(o={}),o[M]=k[M])}else o||(p||(p=[]),p.push(re,o)),o=k;else re==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,D=D?D.__html:void 0,k!=null&&D!==k&&(p=p||[]).push(re,k)):re==="children"?typeof k!="string"&&typeof k!="number"||(p=p||[]).push(re,""+k):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(a.hasOwnProperty(re)?(k!=null&&re==="onScroll"&&Ft("scroll",t),p||D===k||(p=[])):(p=p||[]).push(re,k))}o&&(p=p||[]).push("style",o);var re=p;(i.updateQueue=re)&&(i.flags|=4)}},rp=function(t,i,o,c){o!==c&&(i.flags|=4)};function bo(t,i){if(!kt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function _n(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,c=0;if(i)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=c,t.childLanes=o,i}function jg(t,i,o){var c=i.pendingProps;switch(Ec(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(i),null;case 1:return Ln(i.type)&&Ma(),_n(i),null;case 3:return c=i.stateNode,ws(),Ot(bn),Ot(mn),Fc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(Ca(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ni!==null&&(fu(ni),ni=null))),tu(t,i),_n(i),null;case 5:Ic(i);var d=Ur(wo.current);if(o=i.type,t!==null&&i.stateNode!=null)ip(t,i,o,c,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return _n(i),null}if(t=Ur(gi.current),Ca(i)){c=i.stateNode,o=i.type;var p=i.memoizedProps;switch(c[mi]=i,c[yo]=p,t=(i.mode&1)!==0,o){case"dialog":Ft("cancel",c),Ft("close",c);break;case"iframe":case"object":case"embed":Ft("load",c);break;case"video":case"audio":for(d=0;d<_o.length;d++)Ft(_o[d],c);break;case"source":Ft("error",c);break;case"img":case"image":case"link":Ft("error",c),Ft("load",c);break;case"details":Ft("toggle",c);break;case"input":En(c,p),Ft("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Ft("invalid",c);break;case"textarea":te(c,p),Ft("invalid",c)}ft(o,p),d=null;for(var M in p)if(p.hasOwnProperty(M)){var D=p[M];M==="children"?typeof D=="string"?c.textContent!==D&&(p.suppressHydrationWarning!==!0&&xa(c.textContent,D,t),d=["children",D]):typeof D=="number"&&c.textContent!==""+D&&(p.suppressHydrationWarning!==!0&&xa(c.textContent,D,t),d=["children",""+D]):a.hasOwnProperty(M)&&D!=null&&M==="onScroll"&&Ft("scroll",c)}switch(o){case"input":Dt(c),Ye(c,p,!0);break;case"textarea":Dt(c),ve(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=ya)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=fe(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=M.createElement(o,{is:c.is}):(t=M.createElement(o),o==="select"&&(M=t,c.multiple?M.multiple=!0:c.size&&(M.size=c.size))):t=M.createElementNS(t,o),t[mi]=i,t[yo]=c,np(t,i,!1,!1),i.stateNode=t;e:{switch(M=rt(o,c),o){case"dialog":Ft("cancel",t),Ft("close",t),d=c;break;case"iframe":case"object":case"embed":Ft("load",t),d=c;break;case"video":case"audio":for(d=0;d<_o.length;d++)Ft(_o[d],t);d=c;break;case"source":Ft("error",t),d=c;break;case"img":case"image":case"link":Ft("error",t),Ft("load",t),d=c;break;case"details":Ft("toggle",t),d=c;break;case"input":En(t,c),d=B(t,c),Ft("invalid",t);break;case"option":d=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},d=ae({},c,{value:void 0}),Ft("invalid",t);break;case"textarea":te(t,c),d=T(t,c),Ft("invalid",t);break;default:d=c}ft(o,d),D=d;for(p in D)if(D.hasOwnProperty(p)){var k=D[p];p==="style"?tt(t,k):p==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Ze(t,k)):p==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&Ke(t,k):typeof k=="number"&&Ke(t,""+k):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?k!=null&&p==="onScroll"&&Ft("scroll",t):k!=null&&N(t,p,k,M))}switch(o){case"input":Dt(t),Ye(t,c,!1);break;case"textarea":Dt(t),ve(t);break;case"option":c.value!=null&&t.setAttribute("value",""+we(c.value));break;case"select":t.multiple=!!c.multiple,p=c.value,p!=null?L(t,!!c.multiple,p,!1):c.defaultValue!=null&&L(t,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=ya)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return _n(i),null;case 6:if(t&&i.stateNode!=null)rp(t,i,t.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(o=Ur(wo.current),Ur(gi.current),Ca(i)){if(c=i.stateNode,o=i.memoizedProps,c[mi]=i,(p=c.nodeValue!==o)&&(t=Hn,t!==null))switch(t.tag){case 3:xa(c.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&xa(c.nodeValue,o,(t.mode&1)!==0)}p&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[mi]=i,i.stateNode=c}return _n(i),null;case 13:if(Ot(Bt),c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(kt&&Vn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)ah(),Ss(),i.flags|=98560,p=!1;else if(p=Ca(i),c!==null&&c.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[mi]=i}else Ss(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;_n(i),p=!1}else ni!==null&&(fu(ni),ni=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Bt.current&1)!==0?$t===0&&($t=3):mu())),i.updateQueue!==null&&(i.flags|=4),_n(i),null);case 4:return ws(),tu(t,i),t===null&&vo(i.stateNode.containerInfo),_n(i),null;case 10:return Pc(i.type._context),_n(i),null;case 17:return Ln(i.type)&&Ma(),_n(i),null;case 19:if(Ot(Bt),p=i.memoizedState,p===null)return _n(i),null;if(c=(i.flags&128)!==0,M=p.rendering,M===null)if(c)bo(p,!1);else{if($t!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=Na(t),M!==null){for(i.flags|=128,bo(p,!1),c=M.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)p=o,t=c,p.flags&=14680066,M=p.alternate,M===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=M.childLanes,p.lanes=M.lanes,p.child=M.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=M.memoizedProps,p.memoizedState=M.memoizedState,p.updateQueue=M.updateQueue,p.type=M.type,t=M.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return It(Bt,Bt.current&1|2),i.child}t=t.sibling}p.tail!==null&&Z()>Ps&&(i.flags|=128,c=!0,bo(p,!1),i.lanes=4194304)}else{if(!c)if(t=Na(M),t!==null){if(i.flags|=128,c=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),bo(p,!0),p.tail===null&&p.tailMode==="hidden"&&!M.alternate&&!kt)return _n(i),null}else 2*Z()-p.renderingStartTime>Ps&&o!==1073741824&&(i.flags|=128,c=!0,bo(p,!1),i.lanes=4194304);p.isBackwards?(M.sibling=i.child,i.child=M):(o=p.last,o!==null?o.sibling=M:i.child=M,p.last=M)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Z(),i.sibling=null,o=Bt.current,It(Bt,c?o&1|2:o&1),i):(_n(i),null);case 22:case 23:return pu(),c=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Gn&1073741824)!==0&&(_n(i),i.subtreeFlags&6&&(i.flags|=8192)):_n(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Wg(t,i){switch(Ec(i),i.tag){case 1:return Ln(i.type)&&Ma(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ws(),Ot(bn),Ot(mn),Fc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Ic(i),null;case 13:if(Ot(Bt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Ss()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ot(Bt),null;case 4:return ws(),null;case 10:return Pc(i.type._context),null;case 22:case 23:return pu(),null;case 24:return null;default:return null}}var Va=!1,vn=!1,Xg=typeof WeakSet=="function"?WeakSet:Set,Ue=null;function Cs(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){jt(t,i,c)}else o.current=null}function nu(t,i,o){try{o()}catch(c){jt(t,i,c)}}var sp=!1;function Yg(t,i){if(pc=la,t=Of(),oc(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var M=0,D=-1,k=-1,re=0,_e=0,Se=t,ge=null;t:for(;;){for(var Ie;Se!==o||d!==0&&Se.nodeType!==3||(D=M+d),Se!==p||c!==0&&Se.nodeType!==3||(k=M+c),Se.nodeType===3&&(M+=Se.nodeValue.length),(Ie=Se.firstChild)!==null;)ge=Se,Se=Ie;for(;;){if(Se===t)break t;if(ge===o&&++re===d&&(D=M),ge===p&&++_e===c&&(k=M),(Ie=Se.nextSibling)!==null)break;Se=ge,ge=Se.parentNode}Se=Ie}o=D===-1||k===-1?null:{start:D,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(mc={focusedElem:t,selectionRange:o},la=!1,Ue=i;Ue!==null;)if(i=Ue,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ue=t;else for(;Ue!==null;){i=Ue;try{var ke=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ke!==null){var He=ke.memoizedProps,Yt=ke.memoizedState,K=i.stateNode,V=K.getSnapshotBeforeUpdate(i.elementType===i.type?He:ii(i.type,He),Yt);K.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var J=i.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Te){jt(i,i.return,Te)}if(t=i.sibling,t!==null){t.return=i.return,Ue=t;break}Ue=i.return}return ke=sp,sp=!1,ke}function Lo(t,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&t)===t){var p=d.destroy;d.destroy=void 0,p!==void 0&&nu(i,o,p)}d=d.next}while(d!==c)}}function Ga(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function iu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function op(t){var i=t.alternate;i!==null&&(t.alternate=null,op(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[mi],delete i[yo],delete i[xc],delete i[Pg],delete i[bg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ap(t){return t.tag===5||t.tag===3||t.tag===4}function lp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ap(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ru(t,i,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ya));else if(c!==4&&(t=t.child,t!==null))for(ru(t,i,o),t=t.sibling;t!==null;)ru(t,i,o),t=t.sibling}function su(t,i,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(su(t,i,o),t=t.sibling;t!==null;)su(t,i,o),t=t.sibling}var dn=null,ri=!1;function ar(t,i,o){for(o=o.child;o!==null;)cp(t,i,o),o=o.sibling}function cp(t,i,o){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(Je,o)}catch{}switch(o.tag){case 5:vn||Cs(o,i);case 6:var c=dn,d=ri;dn=null,ar(t,i,o),dn=c,ri=d,dn!==null&&(ri?(t=dn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):dn.removeChild(o.stateNode));break;case 18:dn!==null&&(ri?(t=dn,o=o.stateNode,t.nodeType===8?vc(t.parentNode,o):t.nodeType===1&&vc(t,o),lo(t)):vc(dn,o.stateNode));break;case 4:c=dn,d=ri,dn=o.stateNode.containerInfo,ri=!0,ar(t,i,o),dn=c,ri=d;break;case 0:case 11:case 14:case 15:if(!vn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,M=p.destroy;p=p.tag,M!==void 0&&((p&2)!==0||(p&4)!==0)&&nu(o,i,M),d=d.next}while(d!==c)}ar(t,i,o);break;case 1:if(!vn&&(Cs(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(D){jt(o,i,D)}ar(t,i,o);break;case 21:ar(t,i,o);break;case 22:o.mode&1?(vn=(c=vn)||o.memoizedState!==null,ar(t,i,o),vn=c):ar(t,i,o);break;default:ar(t,i,o)}}function up(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new Xg),i.forEach(function(c){var d=n_.bind(null,t,c);o.has(c)||(o.add(c),c.then(d,d))})}}function si(t,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c];try{var p=t,M=i,D=M;e:for(;D!==null;){switch(D.tag){case 5:dn=D.stateNode,ri=!1;break e;case 3:dn=D.stateNode.containerInfo,ri=!0;break e;case 4:dn=D.stateNode.containerInfo,ri=!0;break e}D=D.return}if(dn===null)throw Error(n(160));cp(p,M,d),dn=null,ri=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(re){jt(d,i,re)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)dp(i,t),i=i.sibling}function dp(t,i){var o=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(si(i,t),vi(t),c&4){try{Lo(3,t,t.return),Ga(3,t)}catch(He){jt(t,t.return,He)}try{Lo(5,t,t.return)}catch(He){jt(t,t.return,He)}}break;case 1:si(i,t),vi(t),c&512&&o!==null&&Cs(o,o.return);break;case 5:if(si(i,t),vi(t),c&512&&o!==null&&Cs(o,o.return),t.flags&32){var d=t.stateNode;try{Ke(d,"")}catch(He){jt(t,t.return,He)}}if(c&4&&(d=t.stateNode,d!=null)){var p=t.memoizedProps,M=o!==null?o.memoizedProps:p,D=t.type,k=t.updateQueue;if(t.updateQueue=null,k!==null)try{D==="input"&&p.type==="radio"&&p.name!=null&&mt(d,p),rt(D,M);var re=rt(D,p);for(M=0;M<k.length;M+=2){var _e=k[M],Se=k[M+1];_e==="style"?tt(d,Se):_e==="dangerouslySetInnerHTML"?Ze(d,Se):_e==="children"?Ke(d,Se):N(d,_e,Se,re)}switch(D){case"input":dt(d,p);break;case"textarea":he(d,p);break;case"select":var ge=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Ie=p.value;Ie!=null?L(d,!!p.multiple,Ie,!1):ge!==!!p.multiple&&(p.defaultValue!=null?L(d,!!p.multiple,p.defaultValue,!0):L(d,!!p.multiple,p.multiple?[]:"",!1))}d[yo]=p}catch(He){jt(t,t.return,He)}}break;case 6:if(si(i,t),vi(t),c&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,p=t.memoizedProps;try{d.nodeValue=p}catch(He){jt(t,t.return,He)}}break;case 3:if(si(i,t),vi(t),c&4&&o!==null&&o.memoizedState.isDehydrated)try{lo(i.containerInfo)}catch(He){jt(t,t.return,He)}break;case 4:si(i,t),vi(t);break;case 13:si(i,t),vi(t),d=t.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(lu=Z())),c&4&&up(t);break;case 22:if(_e=o!==null&&o.memoizedState!==null,t.mode&1?(vn=(re=vn)||_e,si(i,t),vn=re):si(i,t),vi(t),c&8192){if(re=t.memoizedState!==null,(t.stateNode.isHidden=re)&&!_e&&(t.mode&1)!==0)for(Ue=t,_e=t.child;_e!==null;){for(Se=Ue=_e;Ue!==null;){switch(ge=Ue,Ie=ge.child,ge.tag){case 0:case 11:case 14:case 15:Lo(4,ge,ge.return);break;case 1:Cs(ge,ge.return);var ke=ge.stateNode;if(typeof ke.componentWillUnmount=="function"){c=ge,o=ge.return;try{i=c,ke.props=i.memoizedProps,ke.state=i.memoizedState,ke.componentWillUnmount()}catch(He){jt(c,o,He)}}break;case 5:Cs(ge,ge.return);break;case 22:if(ge.memoizedState!==null){pp(Se);continue}}Ie!==null?(Ie.return=ge,Ue=Ie):pp(Se)}_e=_e.sibling}e:for(_e=null,Se=t;;){if(Se.tag===5){if(_e===null){_e=Se;try{d=Se.stateNode,re?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(D=Se.stateNode,k=Se.memoizedProps.style,M=k!=null&&k.hasOwnProperty("display")?k.display:null,D.style.display=et("display",M))}catch(He){jt(t,t.return,He)}}}else if(Se.tag===6){if(_e===null)try{Se.stateNode.nodeValue=re?"":Se.memoizedProps}catch(He){jt(t,t.return,He)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===t)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===t)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===t)break e;_e===Se&&(_e=null),Se=Se.return}_e===Se&&(_e=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:si(i,t),vi(t),c&4&&up(t);break;case 21:break;default:si(i,t),vi(t)}}function vi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(ap(o)){var c=o;break e}o=o.return}throw Error(n(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Ke(d,""),c.flags&=-33);var p=lp(t);su(t,p,d);break;case 3:case 4:var M=c.stateNode.containerInfo,D=lp(t);ru(t,D,M);break;default:throw Error(n(161))}}catch(k){jt(t,t.return,k)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function qg(t,i,o){Ue=t,fp(t)}function fp(t,i,o){for(var c=(t.mode&1)!==0;Ue!==null;){var d=Ue,p=d.child;if(d.tag===22&&c){var M=d.memoizedState!==null||Va;if(!M){var D=d.alternate,k=D!==null&&D.memoizedState!==null||vn;D=Va;var re=vn;if(Va=M,(vn=k)&&!re)for(Ue=d;Ue!==null;)M=Ue,k=M.child,M.tag===22&&M.memoizedState!==null?mp(d):k!==null?(k.return=M,Ue=k):mp(d);for(;p!==null;)Ue=p,fp(p),p=p.sibling;Ue=d,Va=D,vn=re}hp(t)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,Ue=p):hp(t)}}function hp(t){for(;Ue!==null;){var i=Ue;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:vn||Ga(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!vn)if(o===null)c.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:ii(i.type,o.memoizedProps);c.componentDidUpdate(d,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&ph(i,p,c);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}ph(i,M,o)}break;case 5:var D=i.stateNode;if(o===null&&i.flags&4){o=D;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var re=i.alternate;if(re!==null){var _e=re.memoizedState;if(_e!==null){var Se=_e.dehydrated;Se!==null&&lo(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}vn||i.flags&512&&iu(i)}catch(ge){jt(i,i.return,ge)}}if(i===t){Ue=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ue=o;break}Ue=i.return}}function pp(t){for(;Ue!==null;){var i=Ue;if(i===t){Ue=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ue=o;break}Ue=i.return}}function mp(t){for(;Ue!==null;){var i=Ue;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ga(4,i)}catch(k){jt(i,o,k)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(k){jt(i,d,k)}}var p=i.return;try{iu(i)}catch(k){jt(i,p,k)}break;case 5:var M=i.return;try{iu(i)}catch(k){jt(i,M,k)}}}catch(k){jt(i,i.return,k)}if(i===t){Ue=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Ue=D;break}Ue=i.return}}var Kg=Math.ceil,ja=P.ReactCurrentDispatcher,ou=P.ReactCurrentOwner,$n=P.ReactCurrentBatchConfig,Mt=0,on=null,qt=null,fn=0,Gn=0,Rs=nr(0),$t=0,Do=null,Or=0,Wa=0,au=0,No=null,Nn=null,lu=0,Ps=1/0,Ui=null,Xa=!1,cu=null,lr=null,Ya=!1,cr=null,qa=0,Io=0,uu=null,Ka=-1,Za=0;function Cn(){return(Mt&6)!==0?Z():Ka!==-1?Ka:Ka=Z()}function ur(t){return(t.mode&1)===0?1:(Mt&2)!==0&&fn!==0?fn&-fn:Dg.transition!==null?(Za===0&&(Za=Lt()),Za):(t=St,t!==0||(t=window.event,t=t===void 0?16:_f(t.type)),t)}function oi(t,i,o,c){if(50<Io)throw Io=0,uu=null,Error(n(185));nn(t,o,c),((Mt&2)===0||t!==on)&&(t===on&&((Mt&2)===0&&(Wa|=o),$t===4&&dr(t,fn)),In(t,c),o===1&&Mt===0&&(i.mode&1)===0&&(Ps=Z()+500,Ta&&rr()))}function In(t,i){var o=t.callbackNode;wn(t,i);var c=hn(t,t===on?fn:0);if(c===0)o!==null&&A(o),t.callbackNode=null,t.callbackPriority=0;else if(i=c&-c,t.callbackPriority!==i){if(o!=null&&A(o),i===1)t.tag===0?Lg(_p.bind(null,t)):nh(_p.bind(null,t)),Cg(function(){(Mt&6)===0&&rr()}),o=null;else{switch(pi(c)){case 1:o=Me;break;case 4:o=Re;break;case 16:o=Ne;break;case 536870912:o=nt;break;default:o=Ne}o=wp(o,gp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function gp(t,i){if(Ka=-1,Za=0,(Mt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(bs()&&t.callbackNode!==o)return null;var c=hn(t,t===on?fn:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||i)i=Qa(t,c);else{i=c;var d=Mt;Mt|=2;var p=xp();(on!==t||fn!==i)&&(Ui=null,Ps=Z()+500,kr(t,i));do try{$g();break}catch(D){vp(t,D)}while(!0);Rc(),ja.current=p,Mt=d,qt!==null?i=0:(on=null,fn=0,i=$t)}if(i!==0){if(i===2&&(d=Ci(t),d!==0&&(c=d,i=du(t,d))),i===1)throw o=Do,kr(t,0),dr(t,c),In(t,Z()),o;if(i===6)dr(t,c);else{if(d=t.current.alternate,(c&30)===0&&!Zg(d)&&(i=Qa(t,c),i===2&&(p=Ci(t),p!==0&&(c=p,i=du(t,p))),i===1))throw o=Do,kr(t,0),dr(t,c),In(t,Z()),o;switch(t.finishedWork=d,t.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:Br(t,Nn,Ui);break;case 3:if(dr(t,c),(c&130023424)===c&&(i=lu+500-Z(),10<i)){if(hn(t,0)!==0)break;if(d=t.suspendedLanes,(d&c)!==c){Cn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=_c(Br.bind(null,t,Nn,Ui),i);break}Br(t,Nn,Ui);break;case 4:if(dr(t,c),(c&4194240)===c)break;for(i=t.eventTimes,d=-1;0<c;){var M=31-at(c);p=1<<M,M=i[M],M>d&&(d=M),c&=~p}if(c=d,c=Z()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Kg(c/1960))-c,10<c){t.timeoutHandle=_c(Br.bind(null,t,Nn,Ui),c);break}Br(t,Nn,Ui);break;case 5:Br(t,Nn,Ui);break;default:throw Error(n(329))}}}return In(t,Z()),t.callbackNode===o?gp.bind(null,t):null}function du(t,i){var o=No;return t.current.memoizedState.isDehydrated&&(kr(t,i).flags|=256),t=Qa(t,i),t!==2&&(i=Nn,Nn=o,i!==null&&fu(i)),t}function fu(t){Nn===null?Nn=t:Nn.push.apply(Nn,t)}function Zg(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var d=o[c],p=d.getSnapshot;d=d.value;try{if(!ti(p(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function dr(t,i){for(i&=~au,i&=~Wa,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-at(i),c=1<<o;t[o]=-1,i&=~c}}function _p(t){if((Mt&6)!==0)throw Error(n(327));bs();var i=hn(t,0);if((i&1)===0)return In(t,Z()),null;var o=Qa(t,i);if(t.tag!==0&&o===2){var c=Ci(t);c!==0&&(i=c,o=du(t,c))}if(o===1)throw o=Do,kr(t,0),dr(t,i),In(t,Z()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Br(t,Nn,Ui),In(t,Z()),null}function hu(t,i){var o=Mt;Mt|=1;try{return t(i)}finally{Mt=o,Mt===0&&(Ps=Z()+500,Ta&&rr())}}function zr(t){cr!==null&&cr.tag===0&&(Mt&6)===0&&bs();var i=Mt;Mt|=1;var o=$n.transition,c=St;try{if($n.transition=null,St=1,t)return t()}finally{St=c,$n.transition=o,Mt=i,(Mt&6)===0&&rr()}}function pu(){Gn=Rs.current,Ot(Rs)}function kr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Ag(o)),qt!==null)for(o=qt.return;o!==null;){var c=o;switch(Ec(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ma();break;case 3:ws(),Ot(bn),Ot(mn),Fc();break;case 5:Ic(c);break;case 4:ws();break;case 13:Ot(Bt);break;case 19:Ot(Bt);break;case 10:Pc(c.type._context);break;case 22:case 23:pu()}o=o.return}if(on=t,qt=t=fr(t.current,null),fn=Gn=i,$t=0,Do=null,au=Wa=Or=0,Nn=No=null,Ir!==null){for(i=0;i<Ir.length;i++)if(o=Ir[i],c=o.interleaved,c!==null){o.interleaved=null;var d=c.next,p=o.pending;if(p!==null){var M=p.next;p.next=d,c.next=M}o.pending=c}Ir=null}return t}function vp(t,i){do{var o=qt;try{if(Rc(),Ia.current=za,Ua){for(var c=Ht.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Ua=!1}if(Fr=0,sn=Qt=Ht=null,Ao=!1,Co=0,ou.current=null,o===null||o.return===null){$t=1,Do=i,qt=null;break}e:{var p=t,M=o.return,D=o,k=i;if(i=fn,D.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var re=k,_e=D,Se=_e.tag;if((_e.mode&1)===0&&(Se===0||Se===11||Se===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Ie=Gh(M);if(Ie!==null){Ie.flags&=-257,jh(Ie,M,D,p,i),Ie.mode&1&&Vh(p,re,i),i=Ie,k=re;var ke=i.updateQueue;if(ke===null){var He=new Set;He.add(k),i.updateQueue=He}else ke.add(k);break e}else{if((i&1)===0){Vh(p,re,i),mu();break e}k=Error(n(426))}}else if(kt&&D.mode&1){var Yt=Gh(M);if(Yt!==null){(Yt.flags&65536)===0&&(Yt.flags|=256),jh(Yt,M,D,p,i),Ac(As(k,D));break e}}p=k=As(k,D),$t!==4&&($t=2),No===null?No=[p]:No.push(p),p=M;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var K=Bh(p,k,i);hh(p,K);break e;case 1:D=k;var V=p.type,J=p.stateNode;if((p.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(lr===null||!lr.has(J)))){p.flags|=65536,i&=-i,p.lanes|=i;var Te=Hh(p,D,i);hh(p,Te);break e}}p=p.return}while(p!==null)}Sp(o)}catch(We){i=We,qt===o&&o!==null&&(qt=o=o.return);continue}break}while(!0)}function xp(){var t=ja.current;return ja.current=za,t===null?za:t}function mu(){($t===0||$t===3||$t===2)&&($t=4),on===null||(Or&268435455)===0&&(Wa&268435455)===0||dr(on,fn)}function Qa(t,i){var o=Mt;Mt|=2;var c=xp();(on!==t||fn!==i)&&(Ui=null,kr(t,i));do try{Qg();break}catch(d){vp(t,d)}while(!0);if(Rc(),Mt=o,ja.current=c,qt!==null)throw Error(n(261));return on=null,fn=0,$t}function Qg(){for(;qt!==null;)yp(qt)}function $g(){for(;qt!==null&&!X();)yp(qt)}function yp(t){var i=Tp(t.alternate,t,Gn);t.memoizedProps=t.pendingProps,i===null?Sp(t):qt=i,ou.current=null}function Sp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=jg(o,i,Gn),o!==null){qt=o;return}}else{if(o=Wg(o,i),o!==null){o.flags&=32767,qt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$t=6,qt=null;return}}if(i=i.sibling,i!==null){qt=i;return}qt=i=t}while(i!==null);$t===0&&($t=5)}function Br(t,i,o){var c=St,d=$n.transition;try{$n.transition=null,St=1,Jg(t,i,o,c)}finally{$n.transition=d,St=c}return null}function Jg(t,i,o,c){do bs();while(cr!==null);if((Mt&6)!==0)throw Error(n(327));o=t.finishedWork;var d=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(un(t,p),t===on&&(qt=on=null,fn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ya||(Ya=!0,wp(Ne,function(){return bs(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=$n.transition,$n.transition=null;var M=St;St=1;var D=Mt;Mt|=4,ou.current=null,Yg(t,o),dp(o,t),xg(mc),la=!!pc,mc=pc=null,t.current=o,qg(o),oe(),Mt=D,St=M,$n.transition=p}else t.current=o;if(Ya&&(Ya=!1,cr=t,qa=d),p=t.pendingLanes,p===0&&(lr=null),vt(o.stateNode),In(t,Z()),i!==null)for(c=t.onRecoverableError,o=0;o<i.length;o++)d=i[o],c(d.value,{componentStack:d.stack,digest:d.digest});if(Xa)throw Xa=!1,t=cu,cu=null,t;return(qa&1)!==0&&t.tag!==0&&bs(),p=t.pendingLanes,(p&1)!==0?t===uu?Io++:(Io=0,uu=t):Io=0,rr(),null}function bs(){if(cr!==null){var t=pi(qa),i=$n.transition,o=St;try{if($n.transition=null,St=16>t?16:t,cr===null)var c=!1;else{if(t=cr,cr=null,qa=0,(Mt&6)!==0)throw Error(n(331));var d=Mt;for(Mt|=4,Ue=t.current;Ue!==null;){var p=Ue,M=p.child;if((Ue.flags&16)!==0){var D=p.deletions;if(D!==null){for(var k=0;k<D.length;k++){var re=D[k];for(Ue=re;Ue!==null;){var _e=Ue;switch(_e.tag){case 0:case 11:case 15:Lo(8,_e,p)}var Se=_e.child;if(Se!==null)Se.return=_e,Ue=Se;else for(;Ue!==null;){_e=Ue;var ge=_e.sibling,Ie=_e.return;if(op(_e),_e===re){Ue=null;break}if(ge!==null){ge.return=Ie,Ue=ge;break}Ue=Ie}}}var ke=p.alternate;if(ke!==null){var He=ke.child;if(He!==null){ke.child=null;do{var Yt=He.sibling;He.sibling=null,He=Yt}while(He!==null)}}Ue=p}}if((p.subtreeFlags&2064)!==0&&M!==null)M.return=p,Ue=M;else e:for(;Ue!==null;){if(p=Ue,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Lo(9,p,p.return)}var K=p.sibling;if(K!==null){K.return=p.return,Ue=K;break e}Ue=p.return}}var V=t.current;for(Ue=V;Ue!==null;){M=Ue;var J=M.child;if((M.subtreeFlags&2064)!==0&&J!==null)J.return=M,Ue=J;else e:for(M=V;Ue!==null;){if(D=Ue,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:Ga(9,D)}}catch(We){jt(D,D.return,We)}if(D===M){Ue=null;break e}var Te=D.sibling;if(Te!==null){Te.return=D.return,Ue=Te;break e}Ue=D.return}}if(Mt=d,rr(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(Je,t)}catch{}c=!0}return c}finally{St=o,$n.transition=i}}return!1}function Mp(t,i,o){i=As(o,i),i=Bh(t,i,1),t=or(t,i,1),i=Cn(),t!==null&&(nn(t,1,i),In(t,i))}function jt(t,i,o){if(t.tag===3)Mp(t,t,o);else for(;i!==null;){if(i.tag===3){Mp(i,t,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(lr===null||!lr.has(c))){t=As(o,t),t=Hh(i,t,1),i=or(i,t,1),t=Cn(),i!==null&&(nn(i,1,t),In(i,t));break}}i=i.return}}function e_(t,i,o){var c=t.pingCache;c!==null&&c.delete(i),i=Cn(),t.pingedLanes|=t.suspendedLanes&o,on===t&&(fn&o)===o&&($t===4||$t===3&&(fn&130023424)===fn&&500>Z()-lu?kr(t,0):au|=o),In(t,i)}function Ep(t,i){i===0&&((t.mode&1)===0?i=1:(i=Gt,Gt<<=1,(Gt&130023424)===0&&(Gt=4194304)));var o=Cn();t=Di(t,i),t!==null&&(nn(t,i,o),In(t,o))}function t_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Ep(t,o)}function n_(t,i){var o=0;switch(t.tag){case 13:var c=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),Ep(t,o)}var Tp;Tp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||bn.current)Dn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Dn=!1,Gg(t,i,o);Dn=(t.flags&131072)!==0}else Dn=!1,kt&&(i.flags&1048576)!==0&&ih(i,Aa,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Ha(t,i),t=i.pendingProps;var d=vs(i,mn.current);Ts(i,o),d=kc(null,i,c,t,d,o);var p=Bc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Ln(c)?(p=!0,Ea(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Dc(i),d.updater=ka,i.stateNode=d,d._reactInternals=i,Xc(i,c,t,o),i=Zc(null,i,c,!0,p,o)):(i.tag=0,kt&&p&&Mc(i),An(null,i,d,o),i=i.child),i;case 16:c=i.elementType;e:{switch(Ha(t,i),t=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=r_(c),t=ii(c,t),d){case 0:i=Kc(null,i,c,t,o);break e;case 1:i=Zh(null,i,c,t,o);break e;case 11:i=Wh(null,i,c,t,o);break e;case 14:i=Xh(null,i,c,ii(c.type,t),o);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ii(c,d),Kc(t,i,c,d,o);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ii(c,d),Zh(t,i,c,d,o);case 3:e:{if(Qh(i),t===null)throw Error(n(387));c=i.pendingProps,p=i.memoizedState,d=p.element,fh(t,i),Da(i,c,null,o);var M=i.memoizedState;if(c=M.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=As(Error(n(423)),i),i=$h(t,i,c,o,d);break e}else if(c!==d){d=As(Error(n(424)),i),i=$h(t,i,c,o,d);break e}else for(Vn=tr(i.stateNode.containerInfo.firstChild),Hn=i,kt=!0,ni=null,o=uh(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ss(),c===d){i=Ii(t,i,o);break e}An(t,i,c,o)}i=i.child}return i;case 5:return mh(i),t===null&&wc(i),c=i.type,d=i.pendingProps,p=t!==null?t.memoizedProps:null,M=d.children,gc(c,d)?M=null:p!==null&&gc(c,p)&&(i.flags|=32),Kh(t,i),An(t,i,M,o),i.child;case 6:return t===null&&wc(i),null;case 13:return Jh(t,i,o);case 4:return Nc(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=Ms(i,null,c,o):An(t,i,c,o),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ii(c,d),Wh(t,i,c,d,o);case 7:return An(t,i,i.pendingProps,o),i.child;case 8:return An(t,i,i.pendingProps.children,o),i.child;case 12:return An(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,p=i.memoizedProps,M=d.value,It(Pa,c._currentValue),c._currentValue=M,p!==null)if(ti(p.value,M)){if(p.children===d.children&&!bn.current){i=Ii(t,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var D=p.dependencies;if(D!==null){M=p.child;for(var k=D.firstContext;k!==null;){if(k.context===c){if(p.tag===1){k=Ni(-1,o&-o),k.tag=2;var re=p.updateQueue;if(re!==null){re=re.shared;var _e=re.pending;_e===null?k.next=k:(k.next=_e.next,_e.next=k),re.pending=k}}p.lanes|=o,k=p.alternate,k!==null&&(k.lanes|=o),bc(p.return,o,i),D.lanes|=o;break}k=k.next}}else if(p.tag===10)M=p.type===i.type?null:p.child;else if(p.tag===18){if(M=p.return,M===null)throw Error(n(341));M.lanes|=o,D=M.alternate,D!==null&&(D.lanes|=o),bc(M,o,i),M=p.sibling}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===i){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}An(t,i,d.children,o),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Ts(i,o),d=Zn(d),c=c(d),i.flags|=1,An(t,i,c,o),i.child;case 14:return c=i.type,d=ii(c,i.pendingProps),d=ii(c.type,d),Xh(t,i,c,d,o);case 15:return Yh(t,i,i.type,i.pendingProps,o);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ii(c,d),Ha(t,i),i.tag=1,Ln(c)?(t=!0,Ea(i)):t=!1,Ts(i,o),zh(i,c,d),Xc(i,c,d,o),Zc(null,i,c,!0,t,o);case 19:return tp(t,i,o);case 22:return qh(t,i,o)}throw Error(n(156,i.tag))};function wp(t,i){return sa(t,i)}function i_(t,i,o,c){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(t,i,o,c){return new i_(t,i,o,c)}function gu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function r_(t){if(typeof t=="function")return gu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===q)return 11;if(t===de)return 14}return 2}function fr(t,i){var o=t.alternate;return o===null?(o=Jn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function $a(t,i,o,c,d,p){var M=2;if(c=t,typeof t=="function")gu(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case F:return Hr(o.children,d,p,i);case j:M=8,d|=8;break;case b:return t=Jn(12,o,i,d|2),t.elementType=b,t.lanes=p,t;case Q:return t=Jn(13,o,i,d),t.elementType=Q,t.lanes=p,t;case ce:return t=Jn(19,o,i,d),t.elementType=ce,t.lanes=p,t;case ne:return Ja(o,d,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:M=10;break e;case z:M=9;break e;case q:M=11;break e;case de:M=14;break e;case $:M=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Jn(M,o,i,d),i.elementType=t,i.type=c,i.lanes=p,i}function Hr(t,i,o,c){return t=Jn(7,t,c,i),t.lanes=o,t}function Ja(t,i,o,c){return t=Jn(22,t,c,i),t.elementType=ne,t.lanes=o,t.stateNode={isHidden:!1},t}function _u(t,i,o){return t=Jn(6,t,null,i),t.lanes=o,t}function vu(t,i,o){return i=Jn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function s_(t,i,o,c,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pn(0),this.expirationTimes=pn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pn(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function xu(t,i,o,c,d,p,M,D,k){return t=new s_(t,i,o,D,k),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Jn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dc(p),t}function o_(t,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:c==null?null:""+c,children:t,containerInfo:i,implementation:o}}function Ap(t){if(!t)return ir;t=t._reactInternals;e:{if(hi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Ln(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Ln(o))return eh(t,o,i)}return i}function Cp(t,i,o,c,d,p,M,D,k){return t=xu(o,c,!0,t,d,p,M,D,k),t.context=Ap(null),o=t.current,c=Cn(),d=ur(o),p=Ni(c,d),p.callback=i??null,or(o,p,d),t.current.lanes=d,nn(t,d,c),In(t,c),t}function el(t,i,o,c){var d=i.current,p=Cn(),M=ur(d);return o=Ap(o),i.context===null?i.context=o:i.pendingContext=o,i=Ni(p,M),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=or(d,i,M),t!==null&&(oi(t,d,M,p),La(t,d,M)),M}function tl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Rp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function yu(t,i){Rp(t,i),(t=t.alternate)&&Rp(t,i)}function a_(){return null}var Pp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Su(t){this._internalRoot=t}nl.prototype.render=Su.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));el(t,i,null,null)},nl.prototype.unmount=Su.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;zr(function(){el(null,t,null,null)}),i[Ri]=null}};function nl(t){this._internalRoot=t}nl.prototype.unstable_scheduleHydration=function(t){if(t){var i=ff();t={blockedOn:null,target:t,priority:i};for(var o=0;o<$i.length&&i!==0&&i<$i[o].priority;o++);$i.splice(o,0,t),o===0&&mf(t)}};function Mu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function il(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bp(){}function l_(t,i,o,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var re=tl(M);p.call(re)}}var M=Cp(i,c,t,0,null,!1,!1,"",bp);return t._reactRootContainer=M,t[Ri]=M.current,vo(t.nodeType===8?t.parentNode:t),zr(),M}for(;d=t.lastChild;)t.removeChild(d);if(typeof c=="function"){var D=c;c=function(){var re=tl(k);D.call(re)}}var k=xu(t,0,!1,null,null,!1,!1,"",bp);return t._reactRootContainer=k,t[Ri]=k.current,vo(t.nodeType===8?t.parentNode:t),zr(function(){el(i,k,o,c)}),k}function rl(t,i,o,c,d){var p=o._reactRootContainer;if(p){var M=p;if(typeof d=="function"){var D=d;d=function(){var k=tl(M);D.call(k)}}el(i,M,t,d)}else M=l_(o,i,t,d,c);return tl(M)}uf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=gt(i.pendingLanes);o!==0&&(rn(i,o|1),In(i,Z()),(Mt&6)===0&&(Ps=Z()+500,rr()))}break;case 13:zr(function(){var c=Di(t,1);if(c!==null){var d=Cn();oi(c,t,1,d)}}),yu(t,1)}},Yl=function(t){if(t.tag===13){var i=Di(t,134217728);if(i!==null){var o=Cn();oi(i,t,134217728,o)}yu(t,134217728)}},df=function(t){if(t.tag===13){var i=ur(t),o=Di(t,i);if(o!==null){var c=Cn();oi(o,t,i,c)}yu(t,i)}},ff=function(){return St},hf=function(t,i){var o=St;try{return St=t,i()}finally{St=o}},Ce=function(t,i,o){switch(i){case"input":if(dt(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==t&&c.form===t.form){var d=Sa(c);if(!d)throw Error(n(90));Nt(c),dt(c,d)}}}break;case"textarea":he(t,o);break;case"select":i=o.value,i!=null&&L(t,!!o.multiple,i,!1)}},Ut=hu,Zt=zr;var c_={usingClientEntryPoint:!1,Events:[So,gs,Sa,be,st,hu]},Uo={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},u_={bundleType:Uo.bundleType,version:Uo.version,rendererPackageName:Uo.rendererPackageName,rendererConfig:Uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ia(t),t===null?null:t.stateNode},findFiberByHostInstance:Uo.findFiberByHostInstance||a_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sl.isDisabled&&sl.supportsFiber)try{Je=sl.inject(u_),Be=sl}catch{}}return Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c_,Un.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mu(i))throw Error(n(200));return o_(t,i,null,o)},Un.createRoot=function(t,i){if(!Mu(t))throw Error(n(299));var o=!1,c="",d=Pp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=xu(t,1,!1,null,null,o,!1,c,d),t[Ri]=i.current,vo(t.nodeType===8?t.parentNode:t),new Su(i)},Un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=ia(i),t=t===null?null:t.stateNode,t},Un.flushSync=function(t){return zr(t)},Un.hydrate=function(t,i,o){if(!il(i))throw Error(n(200));return rl(null,t,i,!0,o)},Un.hydrateRoot=function(t,i,o){if(!Mu(t))throw Error(n(405));var c=o!=null&&o.hydratedSources||null,d=!1,p="",M=Pp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=Cp(i,null,t,1,o??null,d,!1,p,M),t[Ri]=i.current,vo(t),c)for(t=0;t<c.length;t++)o=c[t],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new nl(i)},Un.render=function(t,i,o){if(!il(i))throw Error(n(200));return rl(null,t,i,!1,o)},Un.unmountComponentAtNode=function(t){if(!il(t))throw Error(n(40));return t._reactRootContainer?(zr(function(){rl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ri]=null})}),!0):!1},Un.unstable_batchedUpdates=hu,Un.unstable_renderSubtreeIntoContainer=function(t,i,o,c){if(!il(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return rl(t,i,o,!1,c)},Un.version="18.3.1-next-f1338f8080-20240426",Un}var zp;function x_(){if(zp)return wu.exports;zp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),wu.exports=v_(),wu.exports}var kp;function y_(){if(kp)return ol;kp=1;var s=x_();return ol.createRoot=s.createRoot,ol.hydrateRoot=s.hydrateRoot,ol}var S_=y_(),Xm={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Bp=ts.createContext&&ts.createContext(Xm),M_=["attr","size","title"];function E_(s,e){if(s==null)return{};var n=T_(s,e),r,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(s);for(a=0;a<l.length;a++)r=l[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(s,r)&&(n[r]=s[r])}return n}function T_(s,e){if(s==null)return{};var n={};for(var r in s)if(Object.prototype.hasOwnProperty.call(s,r)){if(e.indexOf(r)>=0)continue;n[r]=s[r]}return n}function kl(){return kl=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(s[r]=n[r])}return s},kl.apply(this,arguments)}function Hp(s,e){var n=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(s,a).enumerable})),n.push.apply(n,r)}return n}function Bl(s){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Hp(Object(n),!0).forEach(function(r){w_(s,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(n)):Hp(Object(n)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(n,r))})}return s}function w_(s,e,n){return e=A_(e),e in s?Object.defineProperty(s,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):s[e]=n,s}function A_(s){var e=C_(s,"string");return typeof e=="symbol"?e:e+""}function C_(s,e){if(typeof s!="object"||!s)return s;var n=s[Symbol.toPrimitive];if(n!==void 0){var r=n.call(s,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}function Ym(s){return s&&s.map((e,n)=>ts.createElement(e.tag,Bl({key:n},e.attr),Ym(e.child)))}function bt(s){return e=>ts.createElement(R_,kl({attr:Bl({},s.attr)},e),Ym(s.child))}function R_(s){var e=n=>{var{attr:r,size:a,title:l}=s,u=E_(s,M_),f=a||n.size||"1em",h;return n.className&&(h=n.className),s.className&&(h=(h?h+" ":"")+s.className),ts.createElement("svg",kl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,u,{className:h,style:Bl(Bl({color:s.color||n.color},n.style),s.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),l&&ts.createElement("title",null,l),s.children)};return Bp!==void 0?ts.createElement(Bp.Consumer,null,n=>e(n)):e(Xm)}function P_(s){return bt({attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 2 7 L 2 25 L 30 25 L 30 7 L 2 7 z M 4 9 L 28 9 L 28 23 L 4 23 L 4 9 z M 6 11 L 6 21 L 9 21 C 10.654 21 12 19.654 12 18 L 12 14 C 12 12.346 10.654 11 9 11 L 6 11 z M 16 11 C 14.897 11 14 11.897 14 13 L 14 19 C 14 20.103 14.897 21 16 21 L 18 21 L 18 19 L 16 19 L 16 17 L 18 17 L 18 15 L 16 15 L 16 13 L 18 13 L 18 11 L 16 11 z M 19.691406 11 L 21.775391 20.025391 C 21.907391 20.595391 22.415 21 23 21 C 23.585 21 24.092609 20.595391 24.224609 20.025391 L 26.308594 11 L 24.255859 11 L 23 16.439453 L 21.744141 11 L 19.691406 11 z M 8 13 L 9 13 C 9.552 13 10 13.448 10 14 L 10 18 C 10 18.552 9.552 19 9 19 L 8 19 L 8 13 z"},child:[]}]})(s)}function b_(s){return bt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z"},child:[]}]})(s)}function qm(s){return bt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32 32v448h448V32zm240 348c0 43.61-25.76 64.87-63.05 64.87-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65 12 0 21.86-5.41 21.86-26.46V240h44zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56 17.44 0 27.57-7.72 27.57-19.75 0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45 0-31.57 24.05-54.63 61.64-54.63 26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18-12.33 0-20.15 7.82-20.15 18 0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16.01 37.9-29.76 57.64-69.76 57.64z"},child:[]}]})(s)}function L_(s){return bt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"},child:[]}]})(s)}const D_=()=>{const[s,e]=Ct.useState(!1),[n,r]=Ct.useState("about"),a=()=>{e(!s)},l=()=>{const u=window.scrollY+window.innerHeight/2,f=["about","skills","projects","courses","contacto"];for(let h=0;h<f.length;h++){const m=f[h],g=document.getElementById(m);if(g){const x=g.offsetTop,_=g.offsetHeight;if(u>=x&&u<x+_){r(m);break}}}};return Ct.useEffect(()=>(window.addEventListener("scroll",l,{passive:!0}),l(),()=>{window.removeEventListener("scroll",l)}),[]),E.jsxs("nav",{children:[E.jsx("div",{className:"logo",children:E.jsx("a",{href:"#about",children:E.jsx(P_,{className:"logo-icon"})})}),E.jsx("button",{className:"hamburger",onClick:a,children:E.jsx(L_,{className:`hamburger-icon ${s?"active":""}`})}),E.jsxs("ul",{className:`navbar ${s?"active":""}`,children:[E.jsx("button",{className:"hamburger",onClick:a,children:E.jsx(b_,{className:"hamburger-icon--active"})}),E.jsx("li",{children:E.jsx("a",{className:n==="about"?"active":"",href:"#about",children:"Me"})}),E.jsx("li",{children:E.jsx("a",{className:n==="skills"?"active":"",href:"#skills",children:"Skills"})}),E.jsx("li",{children:E.jsx("a",{className:n==="projects"?"active":"",href:"#projects",children:"Projects"})}),E.jsx("li",{children:E.jsx("a",{className:n==="courses"?"active":"",href:"#courses",children:"Courses"})}),E.jsx("li",{children:E.jsx("a",{className:n==="contacto"?"active":"",href:"#contacto",children:"ContactMe"})})]})]})},N_="/portfolioArmando/assets/onepiece-CFHS4xqT.jpg",Go=({children:s,className:e="",style:n,threshold:r=.5,x:a=50})=>{const l=Ct.useRef(null),[u,f]=Ct.useState(!1);return Ct.useEffect(()=>{const h=l.current;if(!h)return;const m=new IntersectionObserver(g=>{g.forEach(x=>{x.isIntersecting?f(!0):f(!1)})},{threshold:r});return m.observe(h),()=>m.disconnect()},[r]),E.jsxs(E.Fragment,{children:[E.jsx("style",{children:`
        .animate-box {
          opacity: 0;
          transform: translateX(${a}px);
        transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        will-change: opacity, transform;
        }
        .animate-box.visible {
          opacity: 1;
        transform: translateX(0);
        }
      `}),E.jsx("div",{ref:l,className:`animate-box ${u?"visible":""} ${e}`.trim(),style:n,children:s})]})},I_=()=>{const[s,e]=Ct.useState({x:0,y:0}),n=Ct.useRef(null);Ct.useEffect(()=>{const m=(_,S)=>{if(!n.current)return;const w=n.current.getBoundingClientRect(),R=Math.max(30,Math.min(_-w.left-120,w.width)),y=Math.max(100,Math.min(S-w.top,w.height));e({x:R,y})},g=_=>{m(_.clientX,_.clientY)},x=_=>{if(_.touches.length>0){const S=_.touches[0];m(S.clientX,S.clientY)}};return window.addEventListener("mousemove",g),window.addEventListener("touchmove",x),()=>{window.removeEventListener("mousemove",g),window.removeEventListener("touchmove",x)}},[]);const r={left:`${s.x}px`,top:`${s.y}px`},a=Ct.useRef(null),[l,u]=Ct.useState(!1),f=()=>{if(a.current){const m=a.current.clientHeight,g=a.current.getBoundingClientRect().bottom;window.scrollY+window.innerHeight<=g+m*1?u(!0):u(!1)}};Ct.useEffect(()=>(window.addEventListener("scroll",f),()=>{window.removeEventListener("scroll",f)}),[]);const h=l?"H1active":"H1inactive";return E.jsx("div",{id:"about",className:"about",children:E.jsxs("div",{className:"about-container",ref:a,children:[E.jsxs("div",{children:[E.jsx("div",{className:"img-profile--container",children:E.jsx("img",{src:N_,className:"img-profile",loading:"lazy"})}),E.jsx("div",{className:"h1-container",children:E.jsx("h1",{className:h,children:"Armando CV "})}),E.jsx(Go,{children:E.jsx("h3",{children:"Full-Stack"})}),E.jsxs("p",{children:["I am a passionate full-stack developer who enjoys tackling complex challenges that require both creativity and an analytical approach. My innate curiosity and desire to learn drive me to constantly explore new technologies and methodologies, allowing me to stay at the forefront of a constantly evolving field.",E.jsx("br",{}),E.jsx("br",{}),"I deeply value feedback as an essential tool for growth, both personally and professionally. I am always open to receiving constructive criticism, as I believe it is fundamental to refining my skills and ensuring that the products and solutions I develop not only meet but exceed my clients' expectations."]})]}),E.jsx("div",{ref:n,className:"tree",children:E.jsxs("div",{className:"body",style:r,children:[E.jsxs("div",{className:"head",children:[E.jsx("div",{className:"eyebrow"}),E.jsxs("div",{className:"eyes",children:[E.jsx("div",{className:"eye1",children:E.jsx("div",{className:"pupila",children:E.jsx("div",{className:"brillo"})})}),E.jsx("div",{className:"eye2",children:E.jsx("div",{className:"pupila",children:E.jsx("div",{className:"brillo"})})})]}),E.jsxs("div",{className:"beak",children:[E.jsx("div",{className:"beak-top"}),E.jsx("div",{className:"beak-down"})]})]}),E.jsxs("div",{className:"stomach-container",children:[E.jsx("div",{className:"wing-left"}),E.jsx("div",{className:"stomach"}),E.jsx("div",{className:"wing-right"})]}),E.jsxs("div",{className:"legs",children:[E.jsxs("div",{className:"leg-left",children:[E.jsx("div",{className:"leg-left-foot"}),E.jsx("div",{className:"left-foot"})]}),E.jsxs("div",{className:"leg-right",children:[E.jsx("div",{className:"leg-right-foot"}),E.jsx("div",{className:"right-foot"})]})]})]})})]})})};function U_(s){return bt({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M9.586 4l-6.586 6.586a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.18 .434l.145 -.068a2 2 0 0 0 1.089 -1.78v-2.586h7a2 2 0 0 0 2 -2v-4l-.005 -.15a2 2 0 0 0 -1.995 -1.85l-7 -.001v-2.585a2 2 0 0 0 -3.414 -1.414z"},child:[]}]})(s)}function F_(s){return bt({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.586h-6.999a2 2 0 0 0 -2 2v4l.005 .15a2 2 0 0 0 1.995 1.85l6.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z"},child:[]}]})(s)}function Vp(s){return bt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13 21c-1.427 -1.026 -3.59 -3.854 -4 -6c-.486 .77 -1.501 2 -2 2c-1.499 -.888 -.574 -3.973 0 -6c-1.596 -1.433 -2.468 -2.458 -2.5 -4c-3.35 -3.44 -.444 -5.27 2.5 -3h1c8.482 .5 6.421 8.07 9 11.5c2.295 .522 3.665 2.254 5 3.5c-2.086 -.2 -2.784 -.344 -3.5 0c.478 1.64 2.123 2.2 3.5 3"},child:[]},{tag:"path",attr:{d:"M9 7h.01"},child:[]}]})(s)}function al(s){return bt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 3v4a1 1 0 0 0 1 1h4"},child:[]},{tag:"path",attr:{d:"M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"},child:[]},{tag:"path",attr:{d:"M4 15h3v4.5a1.5 1.5 0 0 1 -3 0"},child:[]},{tag:"path",attr:{d:"M10 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75"},child:[]},{tag:"path",attr:{d:"M16 15l4 6"},child:[]},{tag:"path",attr:{d:"M16 21l4 -6"},child:[]}]})(s)}function Gp(s){return bt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"},child:[]},{tag:"path",attr:{d:"M14 3v4a1 1 0 0 0 1 1h4"},child:[]},{tag:"path",attr:{d:"M16 15l4 6"},child:[]},{tag:"path",attr:{d:"M16 21l4 -6"},child:[]},{tag:"path",attr:{d:"M10 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75"},child:[]},{tag:"path",attr:{d:"M4.5 15h3"},child:[]},{tag:"path",attr:{d:"M6 15v6"},child:[]}]})(s)}function qr(s){return bt({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"},child:[]}]})(s)}function O_(s){return bt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216.29 158.39H137C97 147.9 6.51 150.63 6.51 233.18c0 30.09 15 51.23 35 61-25.1 23-37 33.85-37 49.21 0 11 4.47 21.14 17.89 26.81C8.13 383.61 0 393.35 0 411.65c0 32.11 28.05 50.82 101.63 50.82 70.75 0 111.79-26.42 111.79-73.18 0-58.66-45.16-56.5-151.63-63l13.43-21.55c27.27 7.58 118.7 10 118.7-67.89 0-18.7-7.73-31.71-15-41.07l37.41-2.84zm-63.42 241.9c0 32.06-104.89 32.1-104.89 2.43 0-8.14 5.27-15 10.57-21.54 77.71 5.3 94.32 3.37 94.32 19.11zm-50.81-134.58c-52.8 0-50.46-71.16 1.2-71.16 49.54 0 50.82 71.16-1.2 71.16zm133.3 100.51v-32.1c26.75-3.66 27.24-2 27.24-11V203.61c0-8.5-2.05-7.38-27.24-16.26l4.47-32.92H324v168.71c0 6.51.4 7.32 6.51 8.14l20.73 2.84v32.1zm52.45-244.31c-23.17 0-36.59-13.43-36.59-36.61s13.42-35.77 36.59-35.77c23.58 0 37 12.62 37 35.77s-13.42 36.61-37 36.61zM512 350.46c-17.49 8.53-43.1 16.26-66.28 16.26-48.38 0-66.67-19.5-66.67-65.46V194.75c0-5.42 1.05-4.06-31.71-4.06V154.5c35.78-4.07 50-22 54.47-66.27h38.63c0 65.83-1.34 61.81 3.26 61.81H501v40.65h-60.56v97.15c0 6.92-4.92 51.41 60.57 26.84z"},child:[]}]})(s)}function Km(s){return bt({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(s)}function Zm(s){return bt({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"},child:[]}]})(s)}function bl(s){return bt({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"},child:[]}]})(s)}function z_(s){return bt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(s)}function k_(s){return bt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"},child:[]}]})(s)}function Kr(s){return bt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"},child:[]}]})(s)}function B_(s){return bt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"},child:[]}]})(s)}function H_(s){return bt({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm52.7 93c8.8-15.2 28.3-20.5 43.5-11.7 15.3 8.8 20.5 28.3 11.7 43.6-8.8 15.2-28.3 20.5-43.5 11.7-15.3-8.9-20.5-28.4-11.7-43.6zM87.4 287.9c-17.6 0-31.9-14.3-31.9-31.9 0-17.6 14.3-31.9 31.9-31.9 17.6 0 31.9 14.3 31.9 31.9 0 17.6-14.3 31.9-31.9 31.9zm28.1 3.1c22.3-17.9 22.4-51.9 0-69.9 8.6-32.8 29.1-60.7 56.5-79.1l23.7 39.6c-51.5 36.3-51.5 112.5 0 148.8L172 370c-27.4-18.3-47.8-46.3-56.5-79zm228.7 131.7c-15.3 8.8-34.7 3.6-43.5-11.7-8.8-15.3-3.6-34.8 11.7-43.6 15.2-8.8 34.7-3.6 43.5 11.7 8.8 15.3 3.6 34.8-11.7 43.6zm.3-69.5c-26.7-10.3-56.1 6.6-60.5 35-5.2 1.4-48.9 14.3-96.7-9.4l22.5-40.3c57 26.5 123.4-11.7 128.9-74.4l46.1.7c-2.3 34.5-17.3 65.5-40.3 88.4zm-5.9-105.3c-5.4-62-71.3-101.2-128.9-74.4l-22.5-40.3c47.9-23.7 91.5-10.8 96.7-9.4 4.4 28.3 33.8 45.3 60.5 35 23.1 22.9 38 53.9 40.2 88.5l-46 .6z"},child:[]}]})(s)}function V_(s){return bt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z"},child:[]}]})(s)}function G_(s){return bt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"},child:[]}]})(s)}function j_(s){return bt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.038,4.9l-7.577-4.498C13.009,0.134,12.505,0,12,0c-0.505,0-1.009,0.134-1.462,0.403L2.961,4.9 C2.057,5.437,1.5,6.429,1.5,7.503v8.995c0,1.073,0.557,2.066,1.462,2.603l7.577,4.497C10.991,23.866,11.495,24,12,24 c0.505,0,1.009-0.134,1.461-0.402l7.577-4.497c0.904-0.537,1.462-1.529,1.462-2.603V7.503C22.5,6.429,21.943,5.437,21.038,4.9z M15.17,18.946l0.013,0.646c0.001,0.078-0.05,0.167-0.111,0.198l-0.383,0.22c-0.061,0.031-0.111-0.007-0.112-0.085L14.57,19.29 c-0.328,0.136-0.66,0.169-0.872,0.084c-0.04-0.016-0.057-0.075-0.041-0.142l0.139-0.584c0.011-0.046,0.036-0.092,0.069-0.121 c0.012-0.011,0.024-0.02,0.036-0.026c0.022-0.011,0.043-0.014,0.062-0.006c0.229,0.077,0.521,0.041,0.802-0.101 c0.357-0.181,0.596-0.545,0.592-0.907c-0.003-0.328-0.181-0.465-0.613-0.468c-0.55,0.001-1.064-0.107-1.072-0.917 c-0.007-0.667,0.34-1.361,0.889-1.8l-0.007-0.652c-0.001-0.08,0.048-0.168,0.111-0.2l0.37-0.236 c0.061-0.031,0.111,0.007,0.112,0.087l0.006,0.653c0.273-0.109,0.511-0.138,0.726-0.088c0.047,0.012,0.067,0.076,0.048,0.151 l-0.144,0.578c-0.011,0.044-0.036,0.088-0.065,0.116c-0.012,0.012-0.025,0.021-0.038,0.028c-0.019,0.01-0.038,0.013-0.057,0.009 c-0.098-0.022-0.332-0.073-0.699,0.113c-0.385,0.195-0.52,0.53-0.517,0.778c0.003,0.297,0.155,0.387,0.681,0.396 c0.7,0.012,1.003,0.318,1.01,1.023C16.105,17.747,15.736,18.491,15.17,18.946z M19.143,17.859c0,0.06-0.008,0.116-0.058,0.145 l-1.916,1.164c-0.05,0.029-0.09,0.004-0.09-0.056v-0.494c0-0.06,0.037-0.093,0.087-0.122l1.887-1.129 c0.05-0.029,0.09-0.004,0.09,0.056V17.859z M20.459,6.797l-7.168,4.427c-0.894,0.523-1.553,1.109-1.553,2.187v8.833 c0,0.645,0.26,1.063,0.66,1.184c-0.131,0.023-0.264,0.039-0.398,0.039c-0.42,0-0.833-0.114-1.197-0.33L3.226,18.64 c-0.741-0.44-1.201-1.261-1.201-2.142V7.503c0-0.881,0.46-1.702,1.201-2.142l7.577-4.498c0.363-0.216,0.777-0.33,1.197-0.33 c0.419,0,0.833,0.114,1.197,0.33l7.577,4.498c0.624,0.371,1.046,1.013,1.164,1.732C21.686,6.557,21.12,6.411,20.459,6.797z"},child:[]}]})(s)}function W_(s){return bt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"},child:[]}]})(s)}function Qm(s){return bt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m23.693 10.7058-4.73-8.1844c-.4094-.7106-1.4166-1.2942-2.2402-1.2942H7.2725c-.819 0-1.8308.5836-2.2402 1.2942L.307 10.7058c-.4095.7106-.4095 1.873 0 2.5837l4.7252 8.189c.4094.7107 1.4166 1.2943 2.2402 1.2943h9.455c.819 0 1.826-.5836 2.2402-1.2942l4.7252-8.189c.4095-.7107.4095-1.8732 0-2.5838zM10.9763 5.7547c0-.5365.4377-.9742.9742-.9742s.9742.4377.9742.9742v5.8217c0 .5366-.4377.9742-.9742.9742s-.9742-.4376-.9742-.9742zm.9742 12.4294c-3.6427 0-6.6077-2.965-6.6077-6.6077.0047-2.0896.993-4.0521 2.6685-5.304a.8657.8657 0 0 1 1.2142.1788.8657.8657 0 0 1-.1788 1.2143c-2.1602 1.6048-2.612 4.6592-1.0072 6.8194 1.6049 2.1603 4.6593 2.612 6.8195 1.0072 1.2378-.9177 1.9673-2.372 1.9673-3.9157a4.8972 4.8972 0 0 0-1.9861-3.925c-.386-.2824-.466-.8284-.1836-1.2143.2824-.386.8283-.466 1.2143-.1835 1.6895 1.2471 2.6826 3.2238 2.6873 5.3228 0 3.6474-2.965 6.6077-6.6077 6.6077z"},child:[]}]})(s)}function X_(s){return bt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"},child:[]}]})(s)}function Y_(s){return bt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M11.995499,0 C10.9272763,2.61898783 10.2829772,4.33212022 9.09364861,6.87325951 C9.82285899,7.64621596 10.7179267,8.54636058 12.1714997,9.56299285 C10.6087581,8.91993273 9.54277553,8.27431817 8.74615646,7.60436135 C7.22404876,10.7804724 4.83934636,15.3047005 0,24 C3.8035621,21.8041428 6.75200705,20.4503725 9.49981901,19.9338097 C9.38183641,19.4263273 9.31474077,18.8773854 9.31929729,18.3046251 L9.32381903,18.1827747 C9.38418076,15.7459387 10.6518189,13.8720119 12.1534614,13.9992474 C13.6551031,14.1264836 14.8223099,16.2062608 14.7619552,18.6430989 C14.7506091,19.1016345 14.6988943,19.5427398 14.6085152,19.9518612 C17.3264906,20.483546 20.2434156,21.8338506 23.9955134,24 C23.2556658,22.6379048 22.5952972,21.4100753 21.9646676,20.2406911 C20.9713321,19.4707837 19.9352208,18.4687462 17.8217601,17.3839783 C19.2744348,17.7614433 20.3145182,18.1969375 21.1252451,18.6837145 C14.7134752,6.74608943 14.1942543,5.15982659 11.995499,0 L11.995499,0 Z"},child:[]}]})(s)}const q_=()=>{const s=[{id:1,element:E.jsxs("div",{className:"container-card-skills",children:[" ",E.jsx(Kr,{className:"react"})," ",E.jsx("div",{className:"title-skills",children:"React"})," "]})},{id:2,element:E.jsxs("div",{className:"container-card-skills",children:[" ",E.jsx(qr,{className:"css"})," ",E.jsx("div",{className:"title-skills",children:"CSS"})," "]})},{id:3,element:E.jsxs("div",{className:"container-card-skills",children:[E.jsx(Zm,{className:"html"})," ",E.jsx("div",{className:"title-skills",children:"HTML"})," "]})},{id:4,element:E.jsxs("div",{className:"container-card-skills",children:[E.jsx(qm,{className:"js"})," ",E.jsx("div",{className:"title-skills",children:"Javascript"})," "]})},{id:5,element:E.jsxs("div",{className:"container-card-skills",children:[E.jsx(Qm,{className:"springboot"})," ",E.jsx("div",{className:"title-skills",children:"Springboot"})," "]})},{id:6,element:E.jsxs("div",{className:"container-card-skills",children:[E.jsx(bl,{className:"java"})," ",E.jsx("div",{className:"title-skills",children:"Java"})," "]})},{id:7,element:E.jsxs("div",{className:"container-card-skills",children:[E.jsx(W_,{className:"mysql"})," ",E.jsx("div",{className:"title-skills",children:"MySQL"})," "]})},{id:8,element:E.jsxs("div",{className:"container-card-skills",children:[E.jsx(O_,{className:"git"})," ",E.jsx("div",{className:"title-skills",children:"Git"})," "]})},{id:9,element:E.jsxs("div",{className:"container-card-skills",children:[E.jsx(Km,{className:"github"})," ",E.jsx("div",{className:"title-skills",children:"Github"})," "]})},{id:10,element:E.jsxs("div",{className:"container-card-skills",children:[E.jsx(H_,{className:"ubuntu"})," ",E.jsx("div",{className:"title-skills",children:"Ubuntu"})," "]})},{id:11,element:E.jsxs("div",{className:"container-card-skills",children:[E.jsx(Y_,{className:"archlinux"})," ",E.jsx("div",{className:"title-skills",children:"ArchLinux"})," "]})},{id:12,element:E.jsxs("div",{className:"container-card-skills",children:[E.jsx(j_,{className:"bash"})," ",E.jsx("div",{className:"title-skills",children:"Bash"})," "]})},{id:13,element:E.jsxs("div",{className:"container-card-skills",children:[E.jsx(X_,{className:"ts"})," ",E.jsx("div",{className:"title-skills",children:"TypeScript"})," "]})}],e=[[{transform:"translateX(0px) scale(1)",transition:"transform 2s ease",zIndex:"4"},{transform:"translateX(100px) scale(0.8)",transition:"transform 2s ease",zIndex:"2",opacity:"0.8"},{transform:"translateX(200px) scale(0.6)",transition:"transform 2s ease",zIndex:"0",opacity:"0.6"},{transform:"translateX(-200px) scale(0.6)",transition:"transform 2s ease",zIndex:"0",opacity:"0.6"},{transform:"translateX(-100px) scale(0.8)",transition:"transform 2s ease",zIndex:"2",opacity:"0.8"}],[{transform:"translateX(-100px) scale(0.8)",transition:"transform 2s ease",zIndex:"2",opacity:"0.8"},{transform:"translateX(0px) scale(1)",transition:"transform 2s ease",zIndex:"4"},{transform:"translateX(100px) scale(0.8)",transition:"transform 2s ease",zIndex:"2",opacity:"0.8"},{transform:"translateX(200px) scale(0.6)",transition:"transform 2s ease",zIndex:"0",opacity:"0.6"},{transform:"translateX(-200px) scale(0.6)",transition:"transform 2s ease",zIndex:"0",opacity:"0.6"}],[{transform:"translateX(-200px) scale(0.6)",transition:"transform 2s ease",zIndex:"0",opacity:"0.6"},{transform:"translateX(-100px) scale(0.8)",transition:"transform 2s ease",zIndex:"2",opacity:"0.8"},{transform:"translateX(0px) scale(1)",transition:"transform 2s ease",zIndex:"4"},{transform:"translateX(100px) scale(0.8)",transition:"transform 2s ease",zIndex:"2",opacity:"0.8"},{transform:"translateX(200px) scale(0.6)",transition:"transform 2s ease",zIndex:"0",opacity:"0.6"}],[{transform:"translateX(100px) scale(0.8)",transition:"transform 2s ease",zIndex:"2",opacity:"0.8"},{transform:"translateX(200px) scale(0.6)",transition:"transform 2s ease",zIndex:"0",opacity:"0.6"},{transform:"translateX(-200px) scale(0.6)",transition:"transform 2s ease",zIndex:"0",opacity:"0.6"},{transform:"translateX(-100px) scale(0.8)",transition:"transform 2s ease",zIndex:"2",opacity:"0.8"},{transform:"translateX(0px) scale(1)",transition:"transform 2s ease",zIndex:"4"}],[{transform:"translateX(200px) scale(0.6)",transition:"transform 2s ease",zIndex:"0",opacity:"0.6"},{transform:"translateX(-200px) scale(0.6)",transition:"transform 2s ease",zIndex:"0",opacity:"0.6"},{transform:"translateX(-100px) scale(0.8)",transition:"transform 2s ease",zIndex:"2",opacity:"0.8"},{transform:"translateX(0px) scale(1)",transition:"transform 2s ease",zIndex:"4"},{transform:"translateX(100px) scale(0.8)",transition:"transform 2s ease",zIndex:"2",opacity:"0.8"}]],[n,r]=Ct.useState({1:e[0][0],2:e[1][0],3:e[2][0],4:e[3][0],5:e[4][0]}),[a,l]=Ct.useState(0);let u=!0;const f=()=>{if(u=!1,a<4){l(a+1);const _=a+1;r({1:e[0][_],2:e[1][_],3:e[2][_],4:e[3][_],5:e[4][_]})}else l(0),r({1:e[0][0],2:e[1][0],3:e[2][0],4:e[3][0],5:e[4][0]})},h=()=>{if(u=!1,a>0){l(a-1);const _=a-1;r({1:e[0][_],2:e[1][_],3:e[2][_],4:e[3][_],5:e[4][_]})}else l(4),r({1:e[0][4],2:e[1][4],3:e[2][4],4:e[3][4],5:e[4][4]})},m=()=>{if(a<4){l(a+1);const _=a+1;r({1:e[0][_],2:e[1][_],3:e[2][_],4:e[3][_],5:e[4][_]})}else l(0),r({1:e[0][0],2:e[1][0],3:e[2][0],4:e[3][0],5:e[4][0]})},[g,x]=Ct.useState(0);return Ct.useEffect(()=>{const _=setTimeout(()=>{u&&m(),x(S=>S+1)},2500);return()=>clearTimeout(_)},[g]),E.jsx("div",{id:"skills",className:"skills",children:E.jsxs("div",{className:"skills-container",children:[E.jsxs("div",{className:"skills-container-titles",children:[E.jsx(Go,{x:-50,children:E.jsxs("h1",{className:"skills-container-h1",children:[E.jsx("span",{className:"skills-container-h1--1",children:"S"}),E.jsx("span",{className:"skills-container-h1--2",children:"kills"})]})}),E.jsx("h2",{className:"skills-container-h2",children:"My skill set"}),E.jsx("h3",{className:"skills-container-h3",children:"Specialization in Full-Stack Development"})]}),E.jsx(U_,{onClick:h,className:"arrow-left"}),E.jsx(F_,{onClick:f,className:"arrow-right"}),E.jsx("div",{className:"skills-circle"}),E.jsx("div",{className:"skills-circle2"}),E.jsxs("div",{className:"skills-cards",children:[E.jsxs("div",{className:"card-0",style:n[3],children:[E.jsx("div",{className:"card-0--1",children:s[6].element}),E.jsx("div",{className:"card-0--2",children:s[7].element}),E.jsx("div",{className:"card-0--3",children:s[8].element})]}),E.jsxs("div",{className:"card-1",style:n[2],children:[E.jsx("div",{className:"card-1--1",children:s[3].element}),E.jsx("div",{className:"card-1--2",children:s[4].element}),E.jsx("div",{className:"card-1--3",children:s[5].element})]}),E.jsxs("div",{className:"card-2",style:n[1],children:[E.jsx("div",{className:"card-2--1",children:s[0].element}),E.jsx("div",{className:"card-2--2",children:s[1].element}),E.jsx("div",{className:"card-2--3",children:s[2].element})]}),E.jsxs("div",{className:"card-3",style:n[4],children:[E.jsx("div",{className:"card-3--1",children:s[9].element}),E.jsx("div",{className:"card-3--2",children:s[10].element}),E.jsx("div",{className:"card-3--3",children:s[11].element})]}),E.jsxs("div",{className:"card-4",style:n[5],children:[E.jsx("div",{className:"card-4--1",children:s[12].element}),E.jsx("div",{className:"card-4--2",children:s[1].element}),E.jsx("div",{className:"card-4--3",children:s[2].element})]})]})]})})};function K_(s){return bt({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M11.9996 4.85999C8.82628 4.85999 6.84294 6.44665 6.04961 9.61999C7.23961 8.03332 8.62794 7.43832 10.2146 7.83499C11.12 8.06109 11.7666 8.71757 12.4835 9.44545C13.6507 10.6295 15.0004 12 17.9496 12C21.1229 12 23.1063 10.4133 23.8996 7.23998C22.7096 8.82665 21.3213 9.42165 19.7346 9.02499C18.8292 8.79889 18.1827 8.1424 17.4657 7.41452C16.2995 6.23047 14.9498 4.85999 11.9996 4.85999ZM6.04961 12C2.87628 12 0.892943 13.5867 0.0996094 16.76C1.28961 15.1733 2.67794 14.5783 4.26461 14.975C5.17 15.2011 5.81657 15.8576 6.53354 16.5855C7.70073 17.7695 9.05039 19.14 11.9996 19.14C15.1729 19.14 17.1563 17.5533 17.9496 14.38C16.7596 15.9667 15.3713 16.5617 13.7846 16.165C12.8792 15.9389 12.2326 15.2824 11.5157 14.5545C10.3495 13.3705 8.99982 12 6.04961 12Z"},child:[]}]})(s)}function jp(s){return bt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.24 3H4.76A1.76 1.76 0 0 0 3 4.76v14.48A1.76 1.76 0 0 0 4.76 21h14.48A1.76 1.76 0 0 0 21 19.24V4.76A1.76 1.76 0 0 0 19.24 3zm-5.8 10h-2.25v6.44H9.4V13H7.15v-1.46h6.29zm5.8 5.28a1.71 1.71 0 0 1-.67.74 3 3 0 0 1-1 .39 5.81 5.81 0 0 1-1.2.12 7 7 0 0 1-1.23-.11 4.52 4.52 0 0 1-1-.33v-1.71l-.06-.06h.06v.07a3.41 3.41 0 0 0 1 .54 3.06 3.06 0 0 0 1.13.2 2.58 2.58 0 0 0 .6-.06 1.47 1.47 0 0 0 .42-.17.75.75 0 0 0 .25-.25.69.69 0 0 0-.06-.74 1.24 1.24 0 0 0-.35-.33 3.12 3.12 0 0 0-.53-.3l-.67-.28a3.57 3.57 0 0 1-1.37-1 2 2 0 0 1-.46-1.33 2.16 2.16 0 0 1 .24-1.06 2.09 2.09 0 0 1 .66-.71 2.88 2.88 0 0 1 1-.42 5.11 5.11 0 0 1 1.19-.13 7 7 0 0 1 1.09.07 4.53 4.53 0 0 1 .88.23v1.65a2.42 2.42 0 0 0-.42-.24 3.58 3.58 0 0 0-.49-.17 3 3 0 0 0-.49-.1 2.45 2.45 0 0 0-.46 0 2.29 2.29 0 0 0-.56.06 1.54 1.54 0 0 0-.43.16.78.78 0 0 0-.26.25.63.63 0 0 0-.09.33.62.62 0 0 0 .1.35 1.19 1.19 0 0 0 .3.29 2.15 2.15 0 0 0 .46.28l.63.28a6.56 6.56 0 0 1 .84.42 2.65 2.65 0 0 1 .64.49 1.79 1.79 0 0 1 .42.63 2.48 2.48 0 0 1 .14.85 2.68 2.68 0 0 1-.25 1.08z"},child:[]}]})(s)}const Z_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADsQAAA7EB9YPtSQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAA4DSURBVHic7Z17dFvFncc/kmzJVvxI/EhikxDnTULYmPAotEB7DrSnQNm2G1Joy9IcsoRtgbSl7Vnapd1l9+ymp5xySkofpEtoaTkUDHTbhEdpCXlAQyBOnMRxbCd24ii246csy5YsWY/+MXKrx5WlK+t5NZ9z5kgzuqM7mvlpZu7M9/4uSCQSiUQikYRiAh4A3gPGAL8M04Yx4ABwP2BMoL6zilrgCJmv1FwNhwN1mJOYkI2fjNBIjvYED5L5ytNK+IrKuk87OoW0g8DVU5Ha+lu5ctNTFM+5KH2lynKsTugcCk3z2M7T/8pmHG2vBycfAD6cxqKpRskA7EDJVOS2bRbMFQvSV6IcwOuDpp7IdI/NwtmtFwcnjQLlaSpWQugV0kqCI7LxIzEo1RpQUL4wPKks1WWZKVF+iiRfKFCboafpVQ49fR9Oa/e0x5krFnDlpu3UrL05qflfuEtp1Eodd/zGP+35l30/9PNcQ3UP0LjjX2M2HoBj+DyHdtyX9PyS5KLaABzD5+M/dsiS9PyS5CLnAHmO6jlAOP5vfy4krtv6oroveO2t0PgtN057ePiYnG6mzt8Yf0eW1cgeIM+RBpDnSAPIc2Y8B1A95ocTY8wPR64DJBfZA+Q5qg1Azd6AuTJibXzG+SXJRbUBXLlpe1yNaK5cyJWbtic9vyS5KA2oIYNapq+7s5Vo6wCnH46o0vROWlQi5wB5jpIB2IMjatbu8wWvTzndY4vYuxhNdVlmipIBtARHDj29WRpBGLaJyDSPzUL/y5vDk5vTUZ5kcz+ZF1NqJXxZZd1nBUaErj3TlZfr4RBQqLLus4ZahK4905WYq+EQUKO61rMMI0LX/i5iMpPpSs32MBqoqy+TQ//8RK5R/cGRlxp+H/JhR8eZkPi/Pfy1ZJwzlWjt96hCrgPkOdIA8hxpAJKoSP8A6sIgsA/YSBJ0FplG+geYWXgfqFBd61mC9A+QnHCQHB1ipX+A5IV/Vln3aUf6B4iCzzuJ09qDc/g8jiELTms3jiEL7nErTscY9tFRvBMj+F12fC47nrE+8HmVvsoKTCLmUQ7ABdgAJ9APdAdee4ELgWAJHJdy8t4/gNftwNbdgs1yHJulWbx2t+Ac6QG/P2PFAs4AJwOhDTiB2Km1T5NPNXmnCHKPW+k/uYf+E2/R1/I29p5W/P4oG/zZhwcxP9sP7AXeAYZn8oV5YQAjXU2cO/gifcf/hLXrCH7lrjoX8QHHgZ3Ay0CT2i9QbQCZ9g8QL5OOETr3PkPn29sZ7WlVnb/AAHW1ML8S5ldBTRXMnQO11TC3QgSDHmYVg7EQjAXivV4P5YEB1DYGPh+MO8HtAfekeO/1Qf+wCD0D0G+F3kG4MAi9Q9DVA57EbLQFeAp4FhiJJ4NqA9i5ZWHcCiFz5UJue+JcUvPHYtIxQuuux2h/cxueibGYx+t0sGoxXLYMVi8R71cthhUXi4bNBO5JaD8HLZ1wohNOdEBzB7R3xT0tsQHbgMeJYQiqV6yy2T+A5WADjb/8Ci77YNRjDHqoXwk3rIOProPrLofKLHPjZCyENUtFmMLvhwtDsOcw7DsMB45C8+mo+sRy4LvAvYjL+peinSvnlywB/H4fTb95iPY/PqH4uUEvGvyOT8D6G6FqdpoLmAR0OjEMff4TsOEmcEwIg9i5D/7/bWEQCsYwH2hA9ATfQswZQsg5/wBKHPn11zj15o8j0ivK4KtfgM3/JMZyrVCghzIzmAph4z/Cl24T84lnd8H2l8AaeaH4EGK4fyj8g5xcqgzmwrE/RjR+sQm2PghnX4Xv3autxg/GVAjlZtE7zK2Ab94Nh38Lj9wLRaaIw78OfDw8MecNoO31x0PiSxfAgV/Cwxuh1JyRIqWVAgOYgxq7xCx6vTd+Iq5iwtBeDzB85lBI/Hc/hLUrMlSYDGFSGMgvXQrP/ndE8lXhCTnnHyAc99iMFsI0jcIVY8RgmPM9QDifeQia2jJdivTimoxMaz4Ndz8SO6/m/AN0dsO1G2HrM2B3qM6ec0x6wBG0bzjmgB89B5+8H7p6Y+fXpH+ACTd850mouxUe3S6WW7WIaxJGnaKrvzAEj/0K1t0J//N/4HLH9x05vxkUj88gvR6uvQw2fFwsBuX6ZaHHC+MusYfw5gH4wx7Y/X7c+we6qJEAOW0Aiy4y09Udve+fWgq+/nKxOnhdPVTPSXUpZ44f0ZPtaYT9R+C9Y9MuBQOwqEZxGIhpAKNA6VQk2wUh4QbgalvPz5/r4H9/2krfoMJ93GHodLByEaxZBqvqxOXTJXUimDL0xB+XG1rPwsmzopGnNoROW+LbDJpXAf++Ce5bD6ZrIj6OaQDvAR+aitSsvTnucTsThBuAv3MDAOMODw2vnWdHwxneOTSoWtxj0MPFNVBbJVbZpraBa6rEEFJZLgykyAjFRVBYACVRtoPHnGKy5pwQ8xOXG4ZsYtzuHQzaFh6G7gGwXJj+n62ETid6tXs+LfYKzEWB9CsiD40aCXA/8KS602cPUwYQzKmzY7ywy8Lre3o5eHQYrze7h7V4MRh0XFNfySc/Op87b2hmmcJFUyIGYET0Apcnp5jpRckAgrHa3Pz53X72Hhzgg2PDNLWM4J7MDUmYsVBP/erZXPUPFXzsmmpu+sg8ZpcFRAvWBsU8iRgAiBtDdgLrZlDejBDLAMJxT/poahnhcLOVtjN22jrttHeOcbZ7PGM9hcGgo+6iWaxYUsLKJaWsXFzKujVzqF89G2NhlCv3JBsAiJ7gX4AvApcRNDHMZtQaQDTckz7O9Tjo7Z/g/AXxaul1MDzixmafjAi+QCcy7vD8rUcxGfWYi8Vqu0Gvo6y0gPLSwr+F2WVGKsqNLKwtZn51EQvmm6mdV8TCGnP0ho5GCgwgGiF/iyy4nz6kPMkygJwjQQPQ3F6ARB3SAPIcaQB5znR6ABNCVXoXsAaYpXTQ7Rs+rfac2rgI1wjRDKAWeBWoT2NZJBlAyQBMyMZPGN2S0Nl4tl+VKM0BNiMbP29Q6gHuCo5ku3+A8M2g4202LluZZbf6pBq/siuBY6diZ1XqAVYHR6645+dZ2/hKfOa+d2lqieu+SO3gjfRK39QGn/1G7KxKPUBJcCRbt4Gj0XlunGvX7+Z7W1bzwN3LKJ2V3rvf0j7me21g+Ls/KrsDnnwB/mu72HqOhSbXASZcXr7z2HHqrn+VR59ooafPmekipQbPIOhLQGegZ0DoH+tuFXrIeBofNOAfID5NoI5rL69kwy0LuONTC5lfXRQzT1bjs4Pfw7B9Frt299LwmoU39vamRxOYbf4BVGsCDTrqV83m+quruOGqaq67qorqisgb6bIOv5eBgQHeabSxr9HJ/vcHaTo5Mu2WdTyaQE35BwBo333ztJpAr9dPY7OVxmYrP9pxSmgCl5SyZkU5q5aVcenyMi5ZWsolS8swGTMzQrrcPlo7RmntsHGibZCTp+00n3bS1jmWDE1gCJrwDxCMsVDPlo3L2fS5xXFpAv1+aO2w09oRek+1waDj4loztXOLmVtlEq+VJmrmFjG/uojKOSZMRj1FJgPFJgOFhTpKzAXo9TrKS4VKR+gE/Iw5PExO+nG6vEy4vLjcPoasLi4MTNDbP0H/kIuefif9gxP09Dk41zuhWowSTRMYC034B1BilrmAjbfXsfH2uoQ0gV6vnzOWcc5YxpNSnlQQjyYwFprrAZRYXlfCIw+s4pEHVmlYE5jYA8rywgCCmVNuZMMtC9hwi1jf0IwmMEHyzgDCMRbquXptBVevDXXunXOawATJef8AqcJYqGfZohKWLSqJfXAOo8mVQEn8aM4/gEQdmvQPIIkfzd0enu0KnJQh7wuQJIKSAYSsicpHx2sbJQNoCY4cenqzNAINo7QO8GuCHET0Hn2dnVtyZzaeaU1gRlTBSdYE/gLxWJKcRGoCBfFqApUMwA18Cjg803JlgilN4NaftWIf92S6OKlHQRO49RnhK7FzetEVoEH/AMFUzDay5UvLuffOxdTOK07LOdM6BHgGwTBHaALbG/jF72Db8zAc2SGEFDFqJEeJuVAhNYEhaNsApCbw7yTqJzDXCKmBhPwE5pcmUNsGkDQ/gRrRBKbCR1C2EdNHkPQTGJoUNZKjqHISpV1NYPq8hGUbM/ISphlNYIIGIDWBUhMoUUJqAiV5gTSAPEcaQJ4jDSDPkQaQ58irgCSjBT+BkjxCCwYwFBw53mbLVDkyR/yawMHwBC0YQMjjw/NSE+juikiKogn8IDxBC3sBNwF/Ck4oMhky5icw7XiHwL4X/EIOFMNP4I3A7uAEQ1oKmVo6EXrFD08leLx+3vpLP08938nEhI8Vi0soLSnMXAlThbsLxg+A30vPADz+HHz+27Brv+JjZH+AUHyHoIUeAMTv+I9AiEBzmkDvCDiPMTzUx6590PBneOMv0z47eBvwdSBi31srBjDFesSPrY12QE5rAvvO8c7B0+z7YIT9R8Q4H+MJo93AFuCVaAdozQAAyoFvAA8Cs2MdnPWawNY+Tp4eorl9nLYuf7zSNivij/A44lnQUdGiAUxRBmwE7gHWqs2ca5rAAE3ADuBXxGj4fKMeeBQ4ilAQaSkcBf6TBIwctN0DRGMu4ubXK4CPANcBuTIr9CAa/F2gEdgDTO9MOQb5aADhFCGM4VJgObACWAksATJ17egGzgBtQDtwCjiBaPTYNzuoQBpAdAqAOmARMA+oAqoRPcjcwPsiYE7geDPigVsGxPwDxDjsBVzA1O1KVkQjDgD9gTCAWKbtA7qAs4h/u0QikUgkEklK+Cvq3cVIuHskzAAAAABJRU5ErkJggg==",Q_="/portfolioArmando/assets/landing-CYtM9v15.png",$_="/portfolioArmando/assets/commerce-DGylyr7l.png",J_="/portfolioArmando/assets/list-D73ShDT-.png",ev="/portfolioArmando/assets/data-server-Cc5DJ3VM.png",tv="/portfolioArmando/assets/java-C08rJjHl.png",nv="/portfolioArmando/assets/nodeImg-Ct7Syz1P.png",iv="/portfolioArmando/assets/encriptador-DdfVAk3f.png",rv="/portfolioArmando/assets/router-BuhsxHKE.png",sv="/portfolioArmando/assets/products-Mwg0waf4.png",ov="/portfolioArmando/assets/portafolio-iJjvtR1O.png";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yd="176",Ys={ROTATE:0,DOLLY:1,PAN:2},Ws={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},av=0,Wp=1,lv=2,$m=1,cv=2,Hi=3,Ar=0,zn=1,Vi=2,Tr=0,qs=1,Xp=2,Yp=3,qp=4,uv=5,Qr=100,dv=101,fv=102,hv=103,pv=104,mv=200,gv=201,_v=202,vv=203,sd=204,od=205,xv=206,yv=207,Sv=208,Mv=209,Ev=210,Tv=211,wv=212,Av=213,Cv=214,ad=0,ld=1,cd=2,Qs=3,ud=4,dd=5,fd=6,hd=7,Jm=0,Rv=1,Pv=2,wr=0,bv=1,Lv=2,Dv=3,Nv=4,Iv=5,Uv=6,Fv=7,e0=300,ns=301,$s=302,pd=303,md=304,Gl=306,gd=1e3,Jr=1001,_d=1002,fi=1003,Ov=1004,ll=1005,yi=1006,Ru=1007,es=1008,Mi=1009,t0=1010,n0=1011,jo=1012,qd=1013,is=1014,Gi=1015,Ko=1016,Kd=1017,Zd=1018,Wo=1020,i0=35902,r0=1021,s0=1022,di=1023,Xo=1026,Yo=1027,o0=1028,Qd=1029,a0=1030,$d=1031,Jd=1033,Ll=33776,Dl=33777,Nl=33778,Il=33779,vd=35840,xd=35841,yd=35842,Sd=35843,Md=36196,Ed=37492,Td=37496,wd=37808,Ad=37809,Cd=37810,Rd=37811,Pd=37812,bd=37813,Ld=37814,Dd=37815,Nd=37816,Id=37817,Ud=37818,Fd=37819,Od=37820,zd=37821,Ul=36492,kd=36494,Bd=36495,l0=36283,Hd=36284,Vd=36285,Gd=36286,zv=3200,kv=3201,c0=0,Bv=1,Sr="",Xn="srgb",Js="srgb-linear",Hl="linear",Rt="srgb",Ls=7680,Kp=519,Hv=512,Vv=513,Gv=514,u0=515,jv=516,Wv=517,Xv=518,Yv=519,Zp=35044,Qp="300 es",ji=2e3,Vl=2001;class os{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(n);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fl=Math.PI/180,jd=180/Math.PI;function Zo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(xn[s&255]+xn[s>>8&255]+xn[s>>16&255]+xn[s>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[n&63|128]+xn[n>>8&255]+"-"+xn[n>>16&255]+xn[n>>24&255]+xn[r&255]+xn[r>>8&255]+xn[r>>16&255]+xn[r>>24&255]).toLowerCase()}function pt(s,e,n){return Math.max(e,Math.min(n,s))}function qv(s,e){return(s%e+e)%e}function Pu(s,e,n){return(1-n)*s+n*e}function Oo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Fn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Kv={DEG2RAD:Fl};class ot{constructor(e=0,n=0){ot.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=pt(this.x,e.x,n.x),this.y=pt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=pt(this.x,e,n),this.y=pt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(pt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(pt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*a+e.x,this.y=l*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,n,r,a,l,u,f,h,m){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,u,f,h,m)}set(e,n,r,a,l,u,f,h,m){const g=this.elements;return g[0]=e,g[1]=a,g[2]=f,g[3]=n,g[4]=l,g[5]=h,g[6]=r,g[7]=u,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,u=r[0],f=r[3],h=r[6],m=r[1],g=r[4],x=r[7],_=r[2],S=r[5],w=r[8],R=a[0],y=a[3],v=a[6],U=a[1],N=a[4],P=a[7],G=a[2],O=a[5],F=a[8];return l[0]=u*R+f*U+h*G,l[3]=u*y+f*N+h*O,l[6]=u*v+f*P+h*F,l[1]=m*R+g*U+x*G,l[4]=m*y+g*N+x*O,l[7]=m*v+g*P+x*F,l[2]=_*R+S*U+w*G,l[5]=_*y+S*N+w*O,l[8]=_*v+S*P+w*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],h=e[6],m=e[7],g=e[8];return n*u*g-n*f*m-r*l*g+r*f*h+a*l*m-a*u*h}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],h=e[6],m=e[7],g=e[8],x=g*u-f*m,_=f*h-g*l,S=m*l-u*h,w=n*x+r*_+a*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=x*R,e[1]=(a*m-g*r)*R,e[2]=(f*r-a*u)*R,e[3]=_*R,e[4]=(g*n-a*h)*R,e[5]=(a*l-f*n)*R,e[6]=S*R,e[7]=(r*h-m*n)*R,e[8]=(u*n-r*l)*R,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,l,u,f){const h=Math.cos(l),m=Math.sin(l);return this.set(r*h,r*m,-r*(h*u+m*f)+u+e,-a*m,a*h,-a*(-m*u+h*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(bu.makeScale(e,n)),this}rotate(e){return this.premultiply(bu.makeRotation(-e)),this}translate(e,n){return this.premultiply(bu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bu=new lt;function d0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function qo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Zv(){const s=qo("canvas");return s.style.display="block",s}const $p={};function Ol(s){s in $p||($p[s]=!0,console.warn(s))}function Qv(s,e,n){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}function $v(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Jv(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Jp=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),em=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function e1(){const s={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(a,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Rt&&(a.r=Wi(a.r),a.g=Wi(a.g),a.b=Wi(a.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Rt&&(a.r=Ks(a.r),a.g=Ks(a.g),a.b=Ks(a.b))),a},fromWorkingColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},toWorkingColorSpace:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Sr?Hl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,u){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Js]:{primaries:e,whitePoint:r,transfer:Hl,toXYZ:Jp,fromXYZ:em,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Xn},outputColorSpaceConfig:{drawingBufferColorSpace:Xn}},[Xn]:{primaries:e,whitePoint:r,transfer:Rt,toXYZ:Jp,fromXYZ:em,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Xn}}}),s}const Tt=e1();function Wi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ks(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ds;class t1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ds===void 0&&(Ds=qo("canvas")),Ds.width=e.width,Ds.height=e.height;const a=Ds.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Ds}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=qo("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=Wi(l[u]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Wi(n[r]/255)*255):n[r]=Wi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let n1=0;class ef{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:n1++}),this.uuid=Zo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,f=a.length;u<f;u++)a[u].isDataTexture?l.push(Lu(a[u].image)):l.push(Lu(a[u]))}else l=Lu(a);r.url=l}return n||(e.images[this.uuid]=r),r}}function Lu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?t1.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let i1=0;class kn extends os{constructor(e=kn.DEFAULT_IMAGE,n=kn.DEFAULT_MAPPING,r=Jr,a=Jr,l=yi,u=es,f=di,h=Mi,m=kn.DEFAULT_ANISOTROPY,g=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:i1++}),this.uuid=Zo(),this.name="",this.source=new ef(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=h,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==e0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gd:e.x=e.x-Math.floor(e.x);break;case Jr:e.x=e.x<0?0:1;break;case _d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gd:e.y=e.y-Math.floor(e.y);break;case Jr:e.y=e.y<0?0:1;break;case _d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=e0;kn.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,n=0,r=0,a=1){Wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a+u[12]*l,this.y=u[1]*n+u[5]*r+u[9]*a+u[13]*l,this.z=u[2]*n+u[6]*r+u[10]*a+u[14]*l,this.w=u[3]*n+u[7]*r+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,l;const h=e.elements,m=h[0],g=h[4],x=h[8],_=h[1],S=h[5],w=h[9],R=h[2],y=h[6],v=h[10];if(Math.abs(g-_)<.01&&Math.abs(x-R)<.01&&Math.abs(w-y)<.01){if(Math.abs(g+_)<.1&&Math.abs(x+R)<.1&&Math.abs(w+y)<.1&&Math.abs(m+S+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const N=(m+1)/2,P=(S+1)/2,G=(v+1)/2,O=(g+_)/4,F=(x+R)/4,j=(w+y)/4;return N>P&&N>G?N<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(N),a=O/r,l=F/r):P>G?P<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(P),r=O/a,l=j/a):G<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(G),r=F/l,a=j/l),this.set(r,a,l,n),this}let U=Math.sqrt((y-w)*(y-w)+(x-R)*(x-R)+(_-g)*(_-g));return Math.abs(U)<.001&&(U=1),this.x=(y-w)/U,this.y=(x-R)/U,this.z=(_-g)/U,this.w=Math.acos((m+S+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=pt(this.x,e.x,n.x),this.y=pt(this.y,e.y,n.y),this.z=pt(this.z,e.z,n.z),this.w=pt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=pt(this.x,e,n),this.y=pt(this.y,e,n),this.z=pt(this.z,e,n),this.w=pt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(pt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class r1 extends os{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth?r.depth:1,this.scissor=new Wt(0,0,e,n),this.scissorTest=!1,this.viewport=new Wt(0,0,e,n);const a={width:e,height:n,depth:this.depth};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},r);const l=new kn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new ef(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rs extends r1{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class f0 extends kn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=fi,this.minFilter=fi,this.wrapR=Jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class s1 extends kn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=fi,this.minFilter=fi,this.wrapR=Jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ss{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,l,u,f){let h=r[a+0],m=r[a+1],g=r[a+2],x=r[a+3];const _=l[u+0],S=l[u+1],w=l[u+2],R=l[u+3];if(f===0){e[n+0]=h,e[n+1]=m,e[n+2]=g,e[n+3]=x;return}if(f===1){e[n+0]=_,e[n+1]=S,e[n+2]=w,e[n+3]=R;return}if(x!==R||h!==_||m!==S||g!==w){let y=1-f;const v=h*_+m*S+g*w+x*R,U=v>=0?1:-1,N=1-v*v;if(N>Number.EPSILON){const G=Math.sqrt(N),O=Math.atan2(G,v*U);y=Math.sin(y*O)/G,f=Math.sin(f*O)/G}const P=f*U;if(h=h*y+_*P,m=m*y+S*P,g=g*y+w*P,x=x*y+R*P,y===1-f){const G=1/Math.sqrt(h*h+m*m+g*g+x*x);h*=G,m*=G,g*=G,x*=G}}e[n]=h,e[n+1]=m,e[n+2]=g,e[n+3]=x}static multiplyQuaternionsFlat(e,n,r,a,l,u){const f=r[a],h=r[a+1],m=r[a+2],g=r[a+3],x=l[u],_=l[u+1],S=l[u+2],w=l[u+3];return e[n]=f*w+g*x+h*S-m*_,e[n+1]=h*w+g*_+m*x-f*S,e[n+2]=m*w+g*S+f*_-h*x,e[n+3]=g*w-f*x-h*_-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,m=f(r/2),g=f(a/2),x=f(l/2),_=h(r/2),S=h(a/2),w=h(l/2);switch(u){case"XYZ":this._x=_*g*x+m*S*w,this._y=m*S*x-_*g*w,this._z=m*g*w+_*S*x,this._w=m*g*x-_*S*w;break;case"YXZ":this._x=_*g*x+m*S*w,this._y=m*S*x-_*g*w,this._z=m*g*w-_*S*x,this._w=m*g*x+_*S*w;break;case"ZXY":this._x=_*g*x-m*S*w,this._y=m*S*x+_*g*w,this._z=m*g*w+_*S*x,this._w=m*g*x-_*S*w;break;case"ZYX":this._x=_*g*x-m*S*w,this._y=m*S*x+_*g*w,this._z=m*g*w-_*S*x,this._w=m*g*x+_*S*w;break;case"YZX":this._x=_*g*x+m*S*w,this._y=m*S*x+_*g*w,this._z=m*g*w-_*S*x,this._w=m*g*x-_*S*w;break;case"XZY":this._x=_*g*x-m*S*w,this._y=m*S*x-_*g*w,this._z=m*g*w+_*S*x,this._w=m*g*x+_*S*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],l=n[8],u=n[1],f=n[5],h=n[9],m=n[2],g=n[6],x=n[10],_=r+f+x;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(g-h)*S,this._y=(l-m)*S,this._z=(u-a)*S}else if(r>f&&r>x){const S=2*Math.sqrt(1+r-f-x);this._w=(g-h)/S,this._x=.25*S,this._y=(a+u)/S,this._z=(l+m)/S}else if(f>x){const S=2*Math.sqrt(1+f-r-x);this._w=(l-m)/S,this._x=(a+u)/S,this._y=.25*S,this._z=(h+g)/S}else{const S=2*Math.sqrt(1+x-r-f);this._w=(u-a)/S,this._x=(l+m)/S,this._y=(h+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,l=e._z,u=e._w,f=n._x,h=n._y,m=n._z,g=n._w;return this._x=r*g+u*f+a*m-l*h,this._y=a*g+u*h+l*f-r*m,this._z=l*g+u*m+r*h-a*f,this._w=u*g-r*f-a*h-l*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,u=this._w;let f=u*e._w+r*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=r,this._y=a,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-n;return this._w=S*u+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*l+n*this._z,this.normalize(),this}const m=Math.sqrt(h),g=Math.atan2(m,f),x=Math.sin((1-n)*g)/m,_=Math.sin(n*g)/m;return this._w=u*x+this._w*_,this._x=r*x+this._x*_,this._y=a*x+this._y*_,this._z=l*x+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,n=0,r=0){ee.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(tm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(tm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*a,this.y=l[1]*n+l[4]*r+l[7]*a,this.z=l[2]*n+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=e.elements,u=1/(l[3]*n+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*a+l[12])*u,this.y=(l[1]*n+l[5]*r+l[9]*a+l[13])*u,this.z=(l[2]*n+l[6]*r+l[10]*a+l[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,l=e.x,u=e.y,f=e.z,h=e.w,m=2*(u*a-f*r),g=2*(f*n-l*a),x=2*(l*r-u*n);return this.x=n+h*m+u*x-f*g,this.y=r+h*g+f*m-l*x,this.z=a+h*x+l*g-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*a,this.y=l[1]*n+l[5]*r+l[9]*a,this.z=l[2]*n+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=pt(this.x,e.x,n.x),this.y=pt(this.y,e.y,n.y),this.z=pt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=pt(this.x,e,n),this.y=pt(this.y,e,n),this.z=pt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(pt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,l=e.z,u=n.x,f=n.y,h=n.z;return this.x=a*h-l*f,this.y=l*u-r*h,this.z=r*f-a*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Du.copy(this).projectOnVector(e),this.sub(Du)}reflect(e){return this.sub(Du.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(pt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Du=new ee,tm=new ss;class Qo{constructor(e=new ee(1/0,1/0,1/0),n=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ai.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ai.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ai.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,ai):ai.fromBufferAttribute(l,u),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),cl.copy(r.boundingBox)),cl.applyMatrix4(e.matrixWorld),this.union(cl)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zo),ul.subVectors(this.max,zo),Ns.subVectors(e.a,zo),Is.subVectors(e.b,zo),Us.subVectors(e.c,zo),pr.subVectors(Is,Ns),mr.subVectors(Us,Is),Vr.subVectors(Ns,Us);let n=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-Vr.z,Vr.y,pr.z,0,-pr.x,mr.z,0,-mr.x,Vr.z,0,-Vr.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-Vr.y,Vr.x,0];return!Nu(n,Ns,Is,Us,ul)||(n=[1,0,0,0,1,0,0,0,1],!Nu(n,Ns,Is,Us,ul))?!1:(dl.crossVectors(pr,mr),n=[dl.x,dl.y,dl.z],Nu(n,Ns,Is,Us,ul))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fi=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],ai=new ee,cl=new Qo,Ns=new ee,Is=new ee,Us=new ee,pr=new ee,mr=new ee,Vr=new ee,zo=new ee,ul=new ee,dl=new ee,Gr=new ee;function Nu(s,e,n,r,a){for(let l=0,u=s.length-3;l<=u;l+=3){Gr.fromArray(s,l);const f=a.x*Math.abs(Gr.x)+a.y*Math.abs(Gr.y)+a.z*Math.abs(Gr.z),h=e.dot(Gr),m=n.dot(Gr),g=r.dot(Gr);if(Math.max(-Math.max(h,m,g),Math.min(h,m,g))>f)return!1}return!0}const o1=new Qo,ko=new ee,Iu=new ee;class tf{constructor(e=new ee,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):o1.setFromPoints(e).getCenter(r);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ko.subVectors(e,this.center);const n=ko.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(ko,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Iu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ko.copy(e.center).add(Iu)),this.expandByPoint(ko.copy(e.center).sub(Iu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Oi=new ee,Uu=new ee,fl=new ee,gr=new ee,Fu=new ee,hl=new ee,Ou=new ee;class h0{constructor(e=new ee,n=new ee(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Oi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,n),Oi.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Uu.copy(e).add(n).multiplyScalar(.5),fl.copy(n).sub(e).normalize(),gr.copy(this.origin).sub(Uu);const l=e.distanceTo(n)*.5,u=-this.direction.dot(fl),f=gr.dot(this.direction),h=-gr.dot(fl),m=gr.lengthSq(),g=Math.abs(1-u*u);let x,_,S,w;if(g>0)if(x=u*h-f,_=u*f-h,w=l*g,x>=0)if(_>=-w)if(_<=w){const R=1/g;x*=R,_*=R,S=x*(x+u*_+2*f)+_*(u*x+_+2*h)+m}else _=l,x=Math.max(0,-(u*_+f)),S=-x*x+_*(_+2*h)+m;else _=-l,x=Math.max(0,-(u*_+f)),S=-x*x+_*(_+2*h)+m;else _<=-w?(x=Math.max(0,-(-u*l+f)),_=x>0?-l:Math.min(Math.max(-l,-h),l),S=-x*x+_*(_+2*h)+m):_<=w?(x=0,_=Math.min(Math.max(-l,-h),l),S=_*(_+2*h)+m):(x=Math.max(0,-(u*l+f)),_=x>0?l:Math.min(Math.max(-l,-h),l),S=-x*x+_*(_+2*h)+m);else _=u>0?-l:l,x=Math.max(0,-(u*_+f)),S=-x*x+_*(_+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(Uu).addScaledVector(fl,_),S}intersectSphere(e,n){Oi.subVectors(e.center,this.origin);const r=Oi.dot(this.direction),a=Oi.dot(Oi)-r*r,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,l,u,f,h;const m=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,_=this.origin;return m>=0?(r=(e.min.x-_.x)*m,a=(e.max.x-_.x)*m):(r=(e.max.x-_.x)*m,a=(e.min.x-_.x)*m),g>=0?(l=(e.min.y-_.y)*g,u=(e.max.y-_.y)*g):(l=(e.max.y-_.y)*g,u=(e.min.y-_.y)*g),r>u||l>a||((l>r||isNaN(r))&&(r=l),(u<a||isNaN(a))&&(a=u),x>=0?(f=(e.min.z-_.z)*x,h=(e.max.z-_.z)*x):(f=(e.max.z-_.z)*x,h=(e.min.z-_.z)*x),r>h||f>a)||((f>r||r!==r)&&(r=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,n,r,a,l){Fu.subVectors(n,e),hl.subVectors(r,e),Ou.crossVectors(Fu,hl);let u=this.direction.dot(Ou),f;if(u>0){if(a)return null;f=1}else if(u<0)f=-1,u=-u;else return null;gr.subVectors(this.origin,e);const h=f*this.direction.dot(hl.crossVectors(gr,hl));if(h<0)return null;const m=f*this.direction.dot(Fu.cross(gr));if(m<0||h+m>u)return null;const g=-f*gr.dot(Ou);return g<0?null:this.at(g/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(e,n,r,a,l,u,f,h,m,g,x,_,S,w,R,y){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,u,f,h,m,g,x,_,S,w,R,y)}set(e,n,r,a,l,u,f,h,m,g,x,_,S,w,R,y){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=a,v[1]=l,v[5]=u,v[9]=f,v[13]=h,v[2]=m,v[6]=g,v[10]=x,v[14]=_,v[3]=S,v[7]=w,v[11]=R,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Fs.setFromMatrixColumn(e,0).length(),l=1/Fs.setFromMatrixColumn(e,1).length(),u=1/Fs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(a),m=Math.sin(a),g=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const _=u*g,S=u*x,w=f*g,R=f*x;n[0]=h*g,n[4]=-h*x,n[8]=m,n[1]=S+w*m,n[5]=_-R*m,n[9]=-f*h,n[2]=R-_*m,n[6]=w+S*m,n[10]=u*h}else if(e.order==="YXZ"){const _=h*g,S=h*x,w=m*g,R=m*x;n[0]=_+R*f,n[4]=w*f-S,n[8]=u*m,n[1]=u*x,n[5]=u*g,n[9]=-f,n[2]=S*f-w,n[6]=R+_*f,n[10]=u*h}else if(e.order==="ZXY"){const _=h*g,S=h*x,w=m*g,R=m*x;n[0]=_-R*f,n[4]=-u*x,n[8]=w+S*f,n[1]=S+w*f,n[5]=u*g,n[9]=R-_*f,n[2]=-u*m,n[6]=f,n[10]=u*h}else if(e.order==="ZYX"){const _=u*g,S=u*x,w=f*g,R=f*x;n[0]=h*g,n[4]=w*m-S,n[8]=_*m+R,n[1]=h*x,n[5]=R*m+_,n[9]=S*m-w,n[2]=-m,n[6]=f*h,n[10]=u*h}else if(e.order==="YZX"){const _=u*h,S=u*m,w=f*h,R=f*m;n[0]=h*g,n[4]=R-_*x,n[8]=w*x+S,n[1]=x,n[5]=u*g,n[9]=-f*g,n[2]=-m*g,n[6]=S*x+w,n[10]=_-R*x}else if(e.order==="XZY"){const _=u*h,S=u*m,w=f*h,R=f*m;n[0]=h*g,n[4]=-x,n[8]=m*g,n[1]=_*x+R,n[5]=u*g,n[9]=S*x-w,n[2]=w*x-S,n[6]=f*g,n[10]=R*x+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(a1,e,l1)}lookAt(e,n,r){const a=this.elements;return jn.subVectors(e,n),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),_r.crossVectors(r,jn),_r.lengthSq()===0&&(Math.abs(r.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),_r.crossVectors(r,jn)),_r.normalize(),pl.crossVectors(jn,_r),a[0]=_r.x,a[4]=pl.x,a[8]=jn.x,a[1]=_r.y,a[5]=pl.y,a[9]=jn.y,a[2]=_r.z,a[6]=pl.z,a[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,u=r[0],f=r[4],h=r[8],m=r[12],g=r[1],x=r[5],_=r[9],S=r[13],w=r[2],R=r[6],y=r[10],v=r[14],U=r[3],N=r[7],P=r[11],G=r[15],O=a[0],F=a[4],j=a[8],b=a[12],C=a[1],z=a[5],q=a[9],Q=a[13],ce=a[2],de=a[6],$=a[10],ne=a[14],H=a[3],ue=a[7],ae=a[11],I=a[15];return l[0]=u*O+f*C+h*ce+m*H,l[4]=u*F+f*z+h*de+m*ue,l[8]=u*j+f*q+h*$+m*ae,l[12]=u*b+f*Q+h*ne+m*I,l[1]=g*O+x*C+_*ce+S*H,l[5]=g*F+x*z+_*de+S*ue,l[9]=g*j+x*q+_*$+S*ae,l[13]=g*b+x*Q+_*ne+S*I,l[2]=w*O+R*C+y*ce+v*H,l[6]=w*F+R*z+y*de+v*ue,l[10]=w*j+R*q+y*$+v*ae,l[14]=w*b+R*Q+y*ne+v*I,l[3]=U*O+N*C+P*ce+G*H,l[7]=U*F+N*z+P*de+G*ue,l[11]=U*j+N*q+P*$+G*ae,l[15]=U*b+N*Q+P*ne+G*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],l=e[12],u=e[1],f=e[5],h=e[9],m=e[13],g=e[2],x=e[6],_=e[10],S=e[14],w=e[3],R=e[7],y=e[11],v=e[15];return w*(+l*h*x-a*m*x-l*f*_+r*m*_+a*f*S-r*h*S)+R*(+n*h*S-n*m*_+l*u*_-a*u*S+a*m*g-l*h*g)+y*(+n*m*x-n*f*S-l*u*x+r*u*S+l*f*g-r*m*g)+v*(-a*f*g-n*h*x+n*f*_+a*u*x-r*u*_+r*h*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],h=e[6],m=e[7],g=e[8],x=e[9],_=e[10],S=e[11],w=e[12],R=e[13],y=e[14],v=e[15],U=x*y*m-R*_*m+R*h*S-f*y*S-x*h*v+f*_*v,N=w*_*m-g*y*m-w*h*S+u*y*S+g*h*v-u*_*v,P=g*R*m-w*x*m+w*f*S-u*R*S-g*f*v+u*x*v,G=w*x*h-g*R*h-w*f*_+u*R*_+g*f*y-u*x*y,O=n*U+r*N+a*P+l*G;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/O;return e[0]=U*F,e[1]=(R*_*l-x*y*l-R*a*S+r*y*S+x*a*v-r*_*v)*F,e[2]=(f*y*l-R*h*l+R*a*m-r*y*m-f*a*v+r*h*v)*F,e[3]=(x*h*l-f*_*l-x*a*m+r*_*m+f*a*S-r*h*S)*F,e[4]=N*F,e[5]=(g*y*l-w*_*l+w*a*S-n*y*S-g*a*v+n*_*v)*F,e[6]=(w*h*l-u*y*l-w*a*m+n*y*m+u*a*v-n*h*v)*F,e[7]=(u*_*l-g*h*l+g*a*m-n*_*m-u*a*S+n*h*S)*F,e[8]=P*F,e[9]=(w*x*l-g*R*l-w*r*S+n*R*S+g*r*v-n*x*v)*F,e[10]=(u*R*l-w*f*l+w*r*m-n*R*m-u*r*v+n*f*v)*F,e[11]=(g*f*l-u*x*l-g*r*m+n*x*m+u*r*S-n*f*S)*F,e[12]=G*F,e[13]=(g*R*a-w*x*a+w*r*_-n*R*_-g*r*y+n*x*y)*F,e[14]=(w*f*a-u*R*a-w*r*h+n*R*h+u*r*y-n*f*y)*F,e[15]=(u*x*a-g*f*a+g*r*h-n*x*h-u*r*_+n*f*_)*F,this}scale(e){const n=this.elements,r=e.x,a=e.y,l=e.z;return n[0]*=r,n[4]*=a,n[8]*=l,n[1]*=r,n[5]*=a,n[9]*=l,n[2]*=r,n[6]*=a,n[10]*=l,n[3]*=r,n[7]*=a,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),l=1-r,u=e.x,f=e.y,h=e.z,m=l*u,g=l*f;return this.set(m*u+r,m*f-a*h,m*h+a*f,0,m*f+a*h,g*f+r,g*h-a*u,0,m*h-a*f,g*h+a*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,l,u){return this.set(1,r,l,0,e,1,u,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,l=n._x,u=n._y,f=n._z,h=n._w,m=l+l,g=u+u,x=f+f,_=l*m,S=l*g,w=l*x,R=u*g,y=u*x,v=f*x,U=h*m,N=h*g,P=h*x,G=r.x,O=r.y,F=r.z;return a[0]=(1-(R+v))*G,a[1]=(S+P)*G,a[2]=(w-N)*G,a[3]=0,a[4]=(S-P)*O,a[5]=(1-(_+v))*O,a[6]=(y+U)*O,a[7]=0,a[8]=(w+N)*F,a[9]=(y-U)*F,a[10]=(1-(_+R))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let l=Fs.set(a[0],a[1],a[2]).length();const u=Fs.set(a[4],a[5],a[6]).length(),f=Fs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],li.copy(this);const m=1/l,g=1/u,x=1/f;return li.elements[0]*=m,li.elements[1]*=m,li.elements[2]*=m,li.elements[4]*=g,li.elements[5]*=g,li.elements[6]*=g,li.elements[8]*=x,li.elements[9]*=x,li.elements[10]*=x,n.setFromRotationMatrix(li),r.x=l,r.y=u,r.z=f,this}makePerspective(e,n,r,a,l,u,f=ji){const h=this.elements,m=2*l/(n-e),g=2*l/(r-a),x=(n+e)/(n-e),_=(r+a)/(r-a);let S,w;if(f===ji)S=-(u+l)/(u-l),w=-2*u*l/(u-l);else if(f===Vl)S=-u/(u-l),w=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=x,h[12]=0,h[1]=0,h[5]=g,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,l,u,f=ji){const h=this.elements,m=1/(n-e),g=1/(r-a),x=1/(u-l),_=(n+e)*m,S=(r+a)*g;let w,R;if(f===ji)w=(u+l)*x,R=-2*x;else if(f===Vl)w=l*x,R=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-_,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=R,h[14]=-w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Fs=new ee,li=new Xt,a1=new ee(0,0,0),l1=new ee(1,1,1),_r=new ee,pl=new ee,jn=new ee,nm=new Xt,im=new ss;class Ei{constructor(e=0,n=0,r=0,a=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,l=a[0],u=a[4],f=a[8],h=a[1],m=a[5],g=a[9],x=a[2],_=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(pt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-pt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return nm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return im.setFromEuler(this),this.setFromQuaternion(im,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class p0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let c1=0;const rm=new ee,Os=new ss,zi=new Xt,ml=new ee,Bo=new ee,u1=new ee,d1=new ss,sm=new ee(1,0,0),om=new ee(0,1,0),am=new ee(0,0,1),lm={type:"added"},f1={type:"removed"},zs={type:"childadded",child:null},zu={type:"childremoved",child:null};class Sn extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=Zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const e=new ee,n=new Ei,r=new ss,a=new ee(1,1,1);function l(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Xt},normalMatrix:{value:new lt}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new p0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Os.setFromAxisAngle(e,n),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,n){return Os.setFromAxisAngle(e,n),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(sm,e)}rotateY(e){return this.rotateOnAxis(om,e)}rotateZ(e){return this.rotateOnAxis(am,e)}translateOnAxis(e,n){return rm.copy(e).applyQuaternion(this.quaternion),this.position.add(rm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(sm,e)}translateY(e){return this.translateOnAxis(om,e)}translateZ(e){return this.translateOnAxis(am,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?ml.copy(e):ml.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(Bo,ml,this.up):zi.lookAt(ml,Bo,this.up),this.quaternion.setFromRotationMatrix(zi),a&&(zi.extractRotation(a.matrixWorld),Os.setFromRotationMatrix(zi),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lm),zs.child=e,this.dispatchEvent(zs),zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(f1),zu.child=e,this.dispatchEvent(zu),zu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lm),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,u1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,d1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?{min:f.boundingBox.min.toArray(),max:f.boundingBox.max.toArray()}:void 0,boundingSphere:f.boundingSphere?{radius:f.boundingSphere.radius,center:f.boundingSphere.center.toArray()}:void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let m=0,g=h.length;m<g;m++){const x=h[m];l(e.shapes,x)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,m=this.material.length;h<m;h++)f.push(l(e.materials,this.material[h]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(l(e.animations,h))}}if(n){const f=u(e.geometries),h=u(e.materials),m=u(e.textures),g=u(e.images),x=u(e.shapes),_=u(e.skeletons),S=u(e.animations),w=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),_.length>0&&(r.skeletons=_),S.length>0&&(r.animations=S),w.length>0&&(r.nodes=w)}return r.object=a,r;function u(f){const h=[];for(const m in f){const g=f[m];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Sn.DEFAULT_UP=new ee(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new ee,ki=new ee,ku=new ee,Bi=new ee,ks=new ee,Bs=new ee,cm=new ee,Bu=new ee,Hu=new ee,Vu=new ee,Gu=new Wt,ju=new Wt,Wu=new Wt;class ui{constructor(e=new ee,n=new ee,r=new ee){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ci.subVectors(e,n),a.cross(ci);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,n,r,a,l){ci.subVectors(a,n),ki.subVectors(r,n),ku.subVectors(e,n);const u=ci.dot(ci),f=ci.dot(ki),h=ci.dot(ku),m=ki.dot(ki),g=ki.dot(ku),x=u*m-f*f;if(x===0)return l.set(0,0,0),null;const _=1/x,S=(m*h-f*g)*_,w=(u*g-f*h)*_;return l.set(1-S-w,w,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,n,r,a,l,u,f,h){return this.getBarycoord(e,n,r,a,Bi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Bi.x),h.addScaledVector(u,Bi.y),h.addScaledVector(f,Bi.z),h)}static getInterpolatedAttribute(e,n,r,a,l,u){return Gu.setScalar(0),ju.setScalar(0),Wu.setScalar(0),Gu.fromBufferAttribute(e,n),ju.fromBufferAttribute(e,r),Wu.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(Gu,l.x),u.addScaledVector(ju,l.y),u.addScaledVector(Wu,l.z),u}static isFrontFacing(e,n,r,a){return ci.subVectors(r,n),ki.subVectors(e,n),ci.cross(ki).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),ci.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ui.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,l){return ui.getInterpolation(e,this.a,this.b,this.c,n,r,a,l)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,l=this.c;let u,f;ks.subVectors(a,r),Bs.subVectors(l,r),Bu.subVectors(e,r);const h=ks.dot(Bu),m=Bs.dot(Bu);if(h<=0&&m<=0)return n.copy(r);Hu.subVectors(e,a);const g=ks.dot(Hu),x=Bs.dot(Hu);if(g>=0&&x<=g)return n.copy(a);const _=h*x-g*m;if(_<=0&&h>=0&&g<=0)return u=h/(h-g),n.copy(r).addScaledVector(ks,u);Vu.subVectors(e,l);const S=ks.dot(Vu),w=Bs.dot(Vu);if(w>=0&&S<=w)return n.copy(l);const R=S*m-h*w;if(R<=0&&m>=0&&w<=0)return f=m/(m-w),n.copy(r).addScaledVector(Bs,f);const y=g*w-S*x;if(y<=0&&x-g>=0&&S-w>=0)return cm.subVectors(l,a),f=(x-g)/(x-g+(S-w)),n.copy(a).addScaledVector(cm,f);const v=1/(y+R+_);return u=R*v,f=_*v,n.copy(r).addScaledVector(ks,u).addScaledVector(Bs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const m0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vr={h:0,s:0,l:0},gl={h:0,s:0,l:0};function Xu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class _t{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Tt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Tt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Tt.workingColorSpace){if(e=qv(e,1),n=pt(n,0,1),r=pt(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,u=2*r-l;this.r=Xu(u,l,e+1/3),this.g=Xu(u,l,e),this.b=Xu(u,l,e-1/3)}return Tt.toWorkingColorSpace(this,a),this}setStyle(e,n=Xn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],f=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Xn){const r=m0[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return Tt.fromWorkingColorSpace(yn.copy(this),e),Math.round(pt(yn.r*255,0,255))*65536+Math.round(pt(yn.g*255,0,255))*256+Math.round(pt(yn.b*255,0,255))}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Tt.workingColorSpace){Tt.fromWorkingColorSpace(yn.copy(this),n);const r=yn.r,a=yn.g,l=yn.b,u=Math.max(r,a,l),f=Math.min(r,a,l);let h,m;const g=(f+u)/2;if(f===u)h=0,m=0;else{const x=u-f;switch(m=g<=.5?x/(u+f):x/(2-u-f),u){case r:h=(a-l)/x+(a<l?6:0);break;case a:h=(l-r)/x+2;break;case l:h=(r-a)/x+4;break}h/=6}return e.h=h,e.s=m,e.l=g,e}getRGB(e,n=Tt.workingColorSpace){return Tt.fromWorkingColorSpace(yn.copy(this),n),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=Xn){Tt.fromWorkingColorSpace(yn.copy(this),e);const n=yn.r,r=yn.g,a=yn.b;return e!==Xn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(vr),this.setHSL(vr.h+e,vr.s+n,vr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(vr),e.getHSL(gl);const r=Pu(vr.h,gl.h,n),a=Pu(vr.s,gl.s,n),l=Pu(vr.l,gl.l,n);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*a,this.g=l[1]*n+l[4]*r+l[7]*a,this.b=l[2]*n+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new _t;_t.NAMES=m0;let h1=0;class no extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:h1++}),this.uuid=Zo(),this.name="",this.type="Material",this.blending=qs,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sd,this.blendDst=od,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(r.blending=this.blending),this.side!==Ar&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==sd&&(r.blendSrc=this.blendSrc),this.blendDst!==od&&(r.blendDst=this.blendDst),this.blendEquation!==Qr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(n){const l=a(e.textures),u=a(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class g0 extends no{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=Jm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new ee,_l=new ot;let p1=0;class Si{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:p1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Zp,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)_l.fromBufferAttribute(this,n),_l.applyMatrix3(e),this.setXY(n,_l.x,_l.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.applyMatrix3(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.applyMatrix4(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.applyNormalMatrix(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.transformDirection(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Oo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Fn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Oo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Oo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Oo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Oo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Fn(n,this.array),r=Fn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Fn(n,this.array),r=Fn(r,this.array),a=Fn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,l){return e*=this.itemSize,this.normalized&&(n=Fn(n,this.array),r=Fn(r,this.array),a=Fn(a,this.array),l=Fn(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zp&&(e.usage=this.usage),e}}class _0 extends Si{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class v0 extends Si{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Mn extends Si{constructor(e,n,r){super(new Float32Array(e),n,r)}}let m1=0;const ei=new Xt,Yu=new Sn,Hs=new ee,Wn=new Qo,Ho=new Qo,ln=new ee;class Ti extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:m1++}),this.uuid=Zo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(d0(e)?v0:_0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new lt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,n,r){return ei.makeTranslation(e,n,r),this.applyMatrix4(ei),this}scale(e,n,r){return ei.makeScale(e,n,r),this.applyMatrix4(ei),this}lookAt(e){return Yu.lookAt(e),Yu.updateMatrix(),this.applyMatrix4(Yu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Mn(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const l=e[a];n.setXYZ(a,l.x,l.y,l.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const l=n[r];Wn.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const r=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),n)for(let l=0,u=n.length;l<u;l++){const f=n[l];Ho.setFromBufferAttribute(f),this.morphTargetsRelative?(ln.addVectors(Wn.min,Ho.min),Wn.expandByPoint(ln),ln.addVectors(Wn.max,Ho.max),Wn.expandByPoint(ln)):(Wn.expandByPoint(Ho.min),Wn.expandByPoint(Ho.max))}Wn.getCenter(r);let a=0;for(let l=0,u=e.count;l<u;l++)ln.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(ln));if(n)for(let l=0,u=n.length;l<u;l++){const f=n[l],h=this.morphTargetsRelative;for(let m=0,g=f.count;m<g;m++)ln.fromBufferAttribute(f,m),h&&(Hs.fromBufferAttribute(e,m),ln.add(Hs)),a=Math.max(a,r.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let j=0;j<r.count;j++)f[j]=new ee,h[j]=new ee;const m=new ee,g=new ee,x=new ee,_=new ot,S=new ot,w=new ot,R=new ee,y=new ee;function v(j,b,C){m.fromBufferAttribute(r,j),g.fromBufferAttribute(r,b),x.fromBufferAttribute(r,C),_.fromBufferAttribute(l,j),S.fromBufferAttribute(l,b),w.fromBufferAttribute(l,C),g.sub(m),x.sub(m),S.sub(_),w.sub(_);const z=1/(S.x*w.y-w.x*S.y);isFinite(z)&&(R.copy(g).multiplyScalar(w.y).addScaledVector(x,-S.y).multiplyScalar(z),y.copy(x).multiplyScalar(S.x).addScaledVector(g,-w.x).multiplyScalar(z),f[j].add(R),f[b].add(R),f[C].add(R),h[j].add(y),h[b].add(y),h[C].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let j=0,b=U.length;j<b;++j){const C=U[j],z=C.start,q=C.count;for(let Q=z,ce=z+q;Q<ce;Q+=3)v(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const N=new ee,P=new ee,G=new ee,O=new ee;function F(j){G.fromBufferAttribute(a,j),O.copy(G);const b=f[j];N.copy(b),N.sub(G.multiplyScalar(G.dot(b))).normalize(),P.crossVectors(O,b);const z=P.dot(h[j])<0?-1:1;u.setXYZW(j,N.x,N.y,N.z,z)}for(let j=0,b=U.length;j<b;++j){const C=U[j],z=C.start,q=C.count;for(let Q=z,ce=z+q;Q<ce;Q+=3)F(e.getX(Q+0)),F(e.getX(Q+1)),F(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Si(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let _=0,S=r.count;_<S;_++)r.setXYZ(_,0,0,0);const a=new ee,l=new ee,u=new ee,f=new ee,h=new ee,m=new ee,g=new ee,x=new ee;if(e)for(let _=0,S=e.count;_<S;_+=3){const w=e.getX(_+0),R=e.getX(_+1),y=e.getX(_+2);a.fromBufferAttribute(n,w),l.fromBufferAttribute(n,R),u.fromBufferAttribute(n,y),g.subVectors(u,l),x.subVectors(a,l),g.cross(x),f.fromBufferAttribute(r,w),h.fromBufferAttribute(r,R),m.fromBufferAttribute(r,y),f.add(g),h.add(g),m.add(g),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(R,h.x,h.y,h.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let _=0,S=n.count;_<S;_+=3)a.fromBufferAttribute(n,_+0),l.fromBufferAttribute(n,_+1),u.fromBufferAttribute(n,_+2),g.subVectors(u,l),x.subVectors(a,l),g.cross(x),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)ln.fromBufferAttribute(e,n),ln.normalize(),e.setXYZ(n,ln.x,ln.y,ln.z)}toNonIndexed(){function e(f,h){const m=f.array,g=f.itemSize,x=f.normalized,_=new m.constructor(h.length*g);let S=0,w=0;for(let R=0,y=h.length;R<y;R++){f.isInterleavedBufferAttribute?S=h[R]*f.data.stride+f.offset:S=h[R]*g;for(let v=0;v<g;v++)_[w++]=m[S++]}return new Si(_,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ti,r=this.index.array,a=this.attributes;for(const f in a){const h=a[f],m=e(h,r);n.setAttribute(f,m)}const l=this.morphAttributes;for(const f in l){const h=[],m=l[f];for(let g=0,x=m.length;g<x;g++){const _=m[g],S=e(_,r);h.push(S)}n.morphAttributes[f]=h}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const m=u[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],g=[];for(let x=0,_=m.length;x<_;x++){const S=m[x];g.push(S.toJSON(e.data))}g.length>0&&(a[h]=g,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const m in a){const g=a[m];this.setAttribute(m,g.clone(n))}const l=e.morphAttributes;for(const m in l){const g=[],x=l[m];for(let _=0,S=x.length;_<S;_++)g.push(x[_].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,g=u.length;m<g;m++){const x=u[m];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const um=new Xt,jr=new h0,vl=new tf,dm=new ee,xl=new ee,yl=new ee,Sl=new ee,qu=new ee,Ml=new ee,fm=new ee,El=new ee;class cn extends Sn{constructor(e=new Ti,n=new g0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){Ml.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const g=f[h],x=l[h];g!==0&&(qu.fromBufferAttribute(x,e),u?Ml.addScaledVector(qu,g):Ml.addScaledVector(qu.sub(n),g))}n.add(Ml)}return n}raycast(e,n){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),vl.copy(r.boundingSphere),vl.applyMatrix4(l),jr.copy(e.ray).recast(e.near),!(vl.containsPoint(jr.origin)===!1&&(jr.intersectSphere(vl,dm)===null||jr.origin.distanceToSquared(dm)>(e.far-e.near)**2))&&(um.copy(l).invert(),jr.copy(e.ray).applyMatrix4(um),!(r.boundingBox!==null&&jr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,jr)))}_computeIntersections(e,n,r){let a;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,m=l.attributes.uv,g=l.attributes.uv1,x=l.attributes.normal,_=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(u))for(let w=0,R=_.length;w<R;w++){const y=_[w],v=u[y.materialIndex],U=Math.max(y.start,S.start),N=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let P=U,G=N;P<G;P+=3){const O=f.getX(P),F=f.getX(P+1),j=f.getX(P+2);a=Tl(this,v,e,r,m,g,x,O,F,j),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),R=Math.min(f.count,S.start+S.count);for(let y=w,v=R;y<v;y+=3){const U=f.getX(y),N=f.getX(y+1),P=f.getX(y+2);a=Tl(this,u,e,r,m,g,x,U,N,P),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(u))for(let w=0,R=_.length;w<R;w++){const y=_[w],v=u[y.materialIndex],U=Math.max(y.start,S.start),N=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let P=U,G=N;P<G;P+=3){const O=P,F=P+1,j=P+2;a=Tl(this,v,e,r,m,g,x,O,F,j),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),R=Math.min(h.count,S.start+S.count);for(let y=w,v=R;y<v;y+=3){const U=y,N=y+1,P=y+2;a=Tl(this,u,e,r,m,g,x,U,N,P),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function g1(s,e,n,r,a,l,u,f){let h;if(e.side===zn?h=r.intersectTriangle(u,l,a,!0,f):h=r.intersectTriangle(a,l,u,e.side===Ar,f),h===null)return null;El.copy(f),El.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(El);return m<n.near||m>n.far?null:{distance:m,point:El.clone(),object:s}}function Tl(s,e,n,r,a,l,u,f,h,m){s.getVertexPosition(f,xl),s.getVertexPosition(h,yl),s.getVertexPosition(m,Sl);const g=g1(s,e,n,r,xl,yl,Sl,fm);if(g){const x=new ee;ui.getBarycoord(fm,xl,yl,Sl,x),a&&(g.uv=ui.getInterpolatedAttribute(a,f,h,m,x,new ot)),l&&(g.uv1=ui.getInterpolatedAttribute(l,f,h,m,x,new ot)),u&&(g.normal=ui.getInterpolatedAttribute(u,f,h,m,x,new ee),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:f,b:h,c:m,normal:new ee,materialIndex:0};ui.getNormal(xl,yl,Sl,_.normal),g.face=_,g.barycoord=x}return g}class $o extends Ti{constructor(e=1,n=1,r=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:l,depthSegments:u};const f=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const h=[],m=[],g=[],x=[];let _=0,S=0;w("z","y","x",-1,-1,r,n,e,u,l,0),w("z","y","x",1,-1,r,n,-e,u,l,1),w("x","z","y",1,1,e,r,n,a,u,2),w("x","z","y",1,-1,e,r,-n,a,u,3),w("x","y","z",1,-1,e,n,r,a,l,4),w("x","y","z",-1,-1,e,n,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new Mn(m,3)),this.setAttribute("normal",new Mn(g,3)),this.setAttribute("uv",new Mn(x,2));function w(R,y,v,U,N,P,G,O,F,j,b){const C=P/F,z=G/j,q=P/2,Q=G/2,ce=O/2,de=F+1,$=j+1;let ne=0,H=0;const ue=new ee;for(let ae=0;ae<$;ae++){const I=ae*z-Q;for(let se=0;se<de;se++){const De=se*C-q;ue[R]=De*U,ue[y]=I*N,ue[v]=ce,m.push(ue.x,ue.y,ue.z),ue[R]=0,ue[y]=0,ue[v]=O>0?1:-1,g.push(ue.x,ue.y,ue.z),x.push(se/F),x.push(1-ae/j),ne+=1}}for(let ae=0;ae<j;ae++)for(let I=0;I<F;I++){const se=_+I+de*ae,De=_+I+de*(ae+1),ie=_+(I+1)+de*(ae+1),me=_+(I+1)+de*ae;h.push(se,De,me),h.push(De,ie,me),H+=6}f.addGroup(S,H,b),S+=H,_+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function eo(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function Rn(s){const e={};for(let n=0;n<s.length;n++){const r=eo(s[n]);for(const a in r)e[a]=r[a]}return e}function _1(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function x0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const v1={clone:eo,merge:Rn};var x1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,y1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cr extends no{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=x1,this.fragmentShader=y1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=eo(e.uniforms),this.uniformsGroups=_1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?n.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[a]={type:"m4",value:u.toArray()}:n.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class y0 extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=ji}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xr=new ee,hm=new ot,pm=new ot;class Yn extends y0{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=jd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jd*2*Math.atan(Math.tan(Fl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,n){return this.getViewBounds(e,hm,pm),n.subVectors(pm,hm)}setViewOffset(e,n,r,a,l,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Fl*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,m=u.fullHeight;l+=u.offsetX*a/h,n-=u.offsetY*r/m,a*=u.width/h,r*=u.height/m}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Vs=-90,Gs=1;class S1 extends Sn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Yn(Vs,Gs,e,n);a.layers=this.layers,this.add(a);const l=new Yn(Vs,Gs,e,n);l.layers=this.layers,this.add(l);const u=new Yn(Vs,Gs,e,n);u.layers=this.layers,this.add(u);const f=new Yn(Vs,Gs,e,n);f.layers=this.layers,this.add(f);const h=new Yn(Vs,Gs,e,n);h.layers=this.layers,this.add(h);const m=new Yn(Vs,Gs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,l,u,f,h]=n;for(const m of n)this.remove(m);if(e===ji)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Vl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,m,g]=this.children,x=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,l),e.setRenderTarget(r,1,a),e.render(n,u),e.setRenderTarget(r,2,a),e.render(n,f),e.setRenderTarget(r,3,a),e.render(n,h),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,a),e.render(n,g),e.setRenderTarget(x,_,S),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class nf extends kn{constructor(e=[],n=ns,r,a,l,u,f,h,m,g){super(e,n,r,a,l,u,f,h,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class M1 extends rs{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new nf(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:yi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new $o(5,5,5),l=new Cr({name:"CubemapFromEquirect",uniforms:eo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:zn,blending:Tr});l.uniforms.tEquirect.value=n;const u=new cn(a,l),f=n.minFilter;return n.minFilter===es&&(n.minFilter=yi),new S1(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,a);e.setRenderTarget(l)}}class Er extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const E1={type:"move"};class Ku{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Er,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Er,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Er,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,l=null,u=null;const f=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const R of e.hand.values()){const y=n.getJointPose(R,r),v=this._getHandJoint(m,R);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const g=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],_=g.position.distanceTo(x.position),S=.02,w=.005;m.inputState.pinching&&_>S+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&_<=S-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(E1)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Er;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class S0 extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Zu=new ee,T1=new ee,w1=new lt;class yr{constructor(e=new ee(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Zu.subVectors(r,n).cross(T1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Zu),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:n.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||w1.getNormalMatrix(e),a=this.coplanarPoint(Zu).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wr=new tf,wl=new ee;class rf{constructor(e=new yr,n=new yr,r=new yr,a=new yr,l=new yr,u=new yr){this.planes=[e,n,r,a,l,u]}set(e,n,r,a,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(a),f[4].copy(l),f[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=ji){const r=this.planes,a=e.elements,l=a[0],u=a[1],f=a[2],h=a[3],m=a[4],g=a[5],x=a[6],_=a[7],S=a[8],w=a[9],R=a[10],y=a[11],v=a[12],U=a[13],N=a[14],P=a[15];if(r[0].setComponents(h-l,_-m,y-S,P-v).normalize(),r[1].setComponents(h+l,_+m,y+S,P+v).normalize(),r[2].setComponents(h+u,_+g,y+w,P+U).normalize(),r[3].setComponents(h-u,_-g,y-w,P-U).normalize(),r[4].setComponents(h-f,_-x,y-R,P-N).normalize(),n===ji)r[5].setComponents(h+f,_+x,y+R,P+N).normalize();else if(n===Vl)r[5].setComponents(f,x,R,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(e){return Wr.center.set(0,0,0),Wr.radius=.7071067811865476,Wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(wl.x=a.normal.x>0?e.max.x:e.min.x,wl.y=a.normal.y>0?e.max.y:e.min.y,wl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(wl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class M0 extends kn{constructor(e,n,r=is,a,l,u,f=fi,h=fi,m,g=Xo){if(g!==Xo&&g!==Yo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,a,l,u,f,h,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ef(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class sf extends Ti{constructor(e=1,n=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:r,thetaLength:a},n=Math.max(3,n);const l=[],u=[],f=[],h=[],m=new ee,g=new ot;u.push(0,0,0),f.push(0,0,1),h.push(.5,.5);for(let x=0,_=3;x<=n;x++,_+=3){const S=r+x/n*a;m.x=e*Math.cos(S),m.y=e*Math.sin(S),u.push(m.x,m.y,m.z),f.push(0,0,1),g.x=(u[_]/e+1)/2,g.y=(u[_+1]/e+1)/2,h.push(g.x,g.y)}for(let x=1;x<=n;x++)l.push(x,x+1,0);this.setIndex(l),this.setAttribute("position",new Mn(u,3)),this.setAttribute("normal",new Mn(f,3)),this.setAttribute("uv",new Mn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sf(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class to extends Ti{constructor(e=1,n=1,r=1,a=32,l=1,u=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:a,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:h};const m=this;a=Math.floor(a),l=Math.floor(l);const g=[],x=[],_=[],S=[];let w=0;const R=[],y=r/2;let v=0;U(),u===!1&&(e>0&&N(!0),n>0&&N(!1)),this.setIndex(g),this.setAttribute("position",new Mn(x,3)),this.setAttribute("normal",new Mn(_,3)),this.setAttribute("uv",new Mn(S,2));function U(){const P=new ee,G=new ee;let O=0;const F=(n-e)/r;for(let j=0;j<=l;j++){const b=[],C=j/l,z=C*(n-e)+e;for(let q=0;q<=a;q++){const Q=q/a,ce=Q*h+f,de=Math.sin(ce),$=Math.cos(ce);G.x=z*de,G.y=-C*r+y,G.z=z*$,x.push(G.x,G.y,G.z),P.set(de,F,$).normalize(),_.push(P.x,P.y,P.z),S.push(Q,1-C),b.push(w++)}R.push(b)}for(let j=0;j<a;j++)for(let b=0;b<l;b++){const C=R[b][j],z=R[b+1][j],q=R[b+1][j+1],Q=R[b][j+1];(e>0||b!==0)&&(g.push(C,z,Q),O+=3),(n>0||b!==l-1)&&(g.push(z,q,Q),O+=3)}m.addGroup(v,O,0),v+=O}function N(P){const G=w,O=new ot,F=new ee;let j=0;const b=P===!0?e:n,C=P===!0?1:-1;for(let q=1;q<=a;q++)x.push(0,y*C,0),_.push(0,C,0),S.push(.5,.5),w++;const z=w;for(let q=0;q<=a;q++){const ce=q/a*h+f,de=Math.cos(ce),$=Math.sin(ce);F.x=b*$,F.y=y*C,F.z=b*de,x.push(F.x,F.y,F.z),_.push(0,C,0),O.x=de*.5+.5,O.y=$*.5*C+.5,S.push(O.x,O.y),w++}for(let q=0;q<a;q++){const Q=G+q,ce=z+q;P===!0?g.push(ce,ce+1,Q):g.push(ce+1,ce,Q),j+=3}m.addGroup(v,j,P===!0?1:2),v+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class of extends to{constructor(e=1,n=1,r=32,a=1,l=!1,u=0,f=Math.PI*2){super(0,e,n,r,a,l,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:r,heightSegments:a,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(e){return new of(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jl extends Ti{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const l=e/2,u=n/2,f=Math.floor(r),h=Math.floor(a),m=f+1,g=h+1,x=e/f,_=n/h,S=[],w=[],R=[],y=[];for(let v=0;v<g;v++){const U=v*_-u;for(let N=0;N<m;N++){const P=N*x-l;w.push(P,-U,0),R.push(0,0,1),y.push(N/f),y.push(1-v/h)}}for(let v=0;v<h;v++)for(let U=0;U<f;U++){const N=U+m*v,P=U+m*(v+1),G=U+1+m*(v+1),O=U+1+m*v;S.push(N,P,O),S.push(P,G,O)}this.setIndex(S),this.setAttribute("position",new Mn(w,3)),this.setAttribute("normal",new Mn(R,3)),this.setAttribute("uv",new Mn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Zs extends Ti{constructor(e=1,n=32,r=16,a=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:l,thetaStart:u,thetaLength:f},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const h=Math.min(u+f,Math.PI);let m=0;const g=[],x=new ee,_=new ee,S=[],w=[],R=[],y=[];for(let v=0;v<=r;v++){const U=[],N=v/r;let P=0;v===0&&u===0?P=.5/n:v===r&&h===Math.PI&&(P=-.5/n);for(let G=0;G<=n;G++){const O=G/n;x.x=-e*Math.cos(a+O*l)*Math.sin(u+N*f),x.y=e*Math.cos(u+N*f),x.z=e*Math.sin(a+O*l)*Math.sin(u+N*f),w.push(x.x,x.y,x.z),_.copy(x).normalize(),R.push(_.x,_.y,_.z),y.push(O+P,1-N),U.push(m++)}g.push(U)}for(let v=0;v<r;v++)for(let U=0;U<n;U++){const N=g[v][U+1],P=g[v][U],G=g[v+1][U],O=g[v+1][U+1];(v!==0||u>0)&&S.push(N,P,O),(v!==r-1||h<Math.PI)&&S.push(P,G,O)}this.setIndex(S),this.setAttribute("position",new Mn(w,3)),this.setAttribute("normal",new Mn(R,3)),this.setAttribute("uv",new Mn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class A1 extends no{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new _t(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Mr extends no{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=c0,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class C1 extends no{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class R1 extends no{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mm={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class P1{constructor(e,n,r){const a=this;let l=!1,u=0,f=0,h;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=r,this.itemStart=function(g){f++,l===!1&&a.onStart!==void 0&&a.onStart(g,u,f),l=!0},this.itemEnd=function(g){u++,a.onProgress!==void 0&&a.onProgress(g,u,f),u===f&&(l=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(g){a.onError!==void 0&&a.onError(g)},this.resolveURL=function(g){return h?h(g):g},this.setURLModifier=function(g){return h=g,this},this.addHandler=function(g,x){return m.push(g,x),this},this.removeHandler=function(g){const x=m.indexOf(g);return x!==-1&&m.splice(x,2),this},this.getHandler=function(g){for(let x=0,_=m.length;x<_;x+=2){const S=m[x],w=m[x+1];if(S.global&&(S.lastIndex=0),S.test(g))return w}return null}}}const b1=new P1;class af{constructor(e){this.manager=e!==void 0?e:b1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const r=this;return new Promise(function(a,l){r.load(e,a,n,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}af.DEFAULT_MATERIAL_NAME="__DEFAULT";class L1 extends af{constructor(e){super(e)}load(e,n,r,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=mm.get(e);if(u!==void 0)return l.manager.itemStart(e),setTimeout(function(){n&&n(u),l.manager.itemEnd(e)},0),u;const f=qo("img");function h(){g(),mm.add(e,this),n&&n(this),l.manager.itemEnd(e)}function m(x){g(),a&&a(x),l.manager.itemError(e),l.manager.itemEnd(e)}function g(){f.removeEventListener("load",h,!1),f.removeEventListener("error",m,!1)}return f.addEventListener("load",h,!1),f.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),l.manager.itemStart(e),f.src=e,f}}class D1 extends af{constructor(e){super(e)}load(e,n,r,a){const l=new nf;l.colorSpace=Xn;const u=new L1(this.manager);u.setCrossOrigin(this.crossOrigin),u.setPath(this.path);let f=0;function h(m){u.load(e[m],function(g){l.images[m]=g,f++,f===6&&(l.needsUpdate=!0,n&&n(l))},void 0,a)}for(let m=0;m<e.length;++m)h(m);return l}}class E0 extends Sn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Qu=new Xt,gm=new ee,_m=new ee;class N1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=Mi,this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rf,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;gm.setFromMatrixPosition(e.matrixWorld),n.position.copy(gm),_m.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(_m),n.updateMatrixWorld(),Qu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qu),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Qu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class T0 extends y0{constructor(e=-1,n=1,r=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class I1 extends N1{constructor(){super(new T0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class w0 extends E0{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Sn.DEFAULT_UP),this.updateMatrix(),this.target=new Sn,this.shadow=new I1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class A0 extends E0{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class U1 extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class vm{constructor(e=1,n=0,r=0){this.radius=e,this.phi=n,this.theta=r}set(e,n,r){return this.radius=e,this.phi=n,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=pt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,r){return this.radius=Math.sqrt(e*e+n*n+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(pt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class F1 extends os{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function xm(s,e,n,r){const a=O1(r);switch(n){case r0:return s*e;case o0:return s*e/a.components*a.byteLength;case Qd:return s*e/a.components*a.byteLength;case a0:return s*e*2/a.components*a.byteLength;case $d:return s*e*2/a.components*a.byteLength;case s0:return s*e*3/a.components*a.byteLength;case di:return s*e*4/a.components*a.byteLength;case Jd:return s*e*4/a.components*a.byteLength;case Ll:case Dl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Nl:case Il:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xd:case Sd:return Math.max(s,16)*Math.max(e,8)/4;case vd:case yd:return Math.max(s,8)*Math.max(e,8)/2;case Md:case Ed:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Td:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case bd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Dd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Nd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Id:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ud:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Fd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Od:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case zd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ul:case kd:case Bd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case l0:case Hd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Vd:case Gd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function O1(s){switch(s){case Mi:case t0:return{byteLength:1,components:1};case jo:case n0:case Ko:return{byteLength:2,components:1};case Kd:case Zd:return{byteLength:2,components:4};case is:case qd:case Gi:return{byteLength:4,components:1};case i0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function C0(){let s=null,e=!1,n=null,r=null;function a(l,u){n(l,u),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function z1(s){const e=new WeakMap;function n(f,h){const m=f.array,g=f.usage,x=m.byteLength,_=s.createBuffer();s.bindBuffer(h,_),s.bufferData(h,m,g),f.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:x}}function r(f,h,m){const g=h.array,x=h.updateRanges;if(s.bindBuffer(m,f),x.length===0)s.bufferSubData(m,0,g);else{x.sort((S,w)=>S.start-w.start);let _=0;for(let S=1;S<x.length;S++){const w=x[_],R=x[S];R.start<=w.start+w.count+1?w.count=Math.max(w.count,R.start+R.count-w.start):(++_,x[_]=R)}x.length=_+1;for(let S=0,w=x.length;S<w;S++){const R=x[S];s.bufferSubData(m,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,n(f,h));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,h),m.version=f.version}}return{get:a,remove:l,update:u}}var k1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,B1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,H1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,V1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,j1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,W1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,X1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Y1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,q1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,K1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Z1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Q1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$1=`#ifdef USE_IRIDESCENCE
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
#endif`,J1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ox=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ax=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,lx=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,ux=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,px=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mx="gl_FragColor = linearToOutputTexel( gl_FragColor );",gx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_x=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,vx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xx=`#ifdef USE_ENVMAP
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
#endif`,yx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sx=`#ifdef USE_ENVMAP
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
#endif`,Mx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ex=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ax=`#ifdef USE_GRADIENTMAP
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
}`,Cx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Px=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,Lx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Dx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ix=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ux=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ox=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,zx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$x=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ey=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ty=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ny=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,iy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ay=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ly=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,py=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,my=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_y=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Sy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,My=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,Ey=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ty=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ay=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cy=`#ifdef USE_SKINNING
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
#endif`,Ry=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Py=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,by=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ly=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ny=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Iy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Oy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ky=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,By=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Wy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Xy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Yy=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ky=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$y=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Jy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,t2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,i2=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,s2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,o2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,a2=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,c2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,d2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,h2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,g2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,_2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:k1,alphahash_pars_fragment:B1,alphamap_fragment:H1,alphamap_pars_fragment:V1,alphatest_fragment:G1,alphatest_pars_fragment:j1,aomap_fragment:W1,aomap_pars_fragment:X1,batching_pars_vertex:Y1,batching_vertex:q1,begin_vertex:K1,beginnormal_vertex:Z1,bsdfs:Q1,iridescence_fragment:$1,bumpmap_pars_fragment:J1,clipping_planes_fragment:ex,clipping_planes_pars_fragment:tx,clipping_planes_pars_vertex:nx,clipping_planes_vertex:ix,color_fragment:rx,color_pars_fragment:sx,color_pars_vertex:ox,color_vertex:ax,common:lx,cube_uv_reflection_fragment:cx,defaultnormal_vertex:ux,displacementmap_pars_vertex:dx,displacementmap_vertex:fx,emissivemap_fragment:hx,emissivemap_pars_fragment:px,colorspace_fragment:mx,colorspace_pars_fragment:gx,envmap_fragment:_x,envmap_common_pars_fragment:vx,envmap_pars_fragment:xx,envmap_pars_vertex:yx,envmap_physical_pars_fragment:Lx,envmap_vertex:Sx,fog_vertex:Mx,fog_pars_vertex:Ex,fog_fragment:Tx,fog_pars_fragment:wx,gradientmap_pars_fragment:Ax,lightmap_pars_fragment:Cx,lights_lambert_fragment:Rx,lights_lambert_pars_fragment:Px,lights_pars_begin:bx,lights_toon_fragment:Dx,lights_toon_pars_fragment:Nx,lights_phong_fragment:Ix,lights_phong_pars_fragment:Ux,lights_physical_fragment:Fx,lights_physical_pars_fragment:Ox,lights_fragment_begin:zx,lights_fragment_maps:kx,lights_fragment_end:Bx,logdepthbuf_fragment:Hx,logdepthbuf_pars_fragment:Vx,logdepthbuf_pars_vertex:Gx,logdepthbuf_vertex:jx,map_fragment:Wx,map_pars_fragment:Xx,map_particle_fragment:Yx,map_particle_pars_fragment:qx,metalnessmap_fragment:Kx,metalnessmap_pars_fragment:Zx,morphinstance_vertex:Qx,morphcolor_vertex:$x,morphnormal_vertex:Jx,morphtarget_pars_vertex:ey,morphtarget_vertex:ty,normal_fragment_begin:ny,normal_fragment_maps:iy,normal_pars_fragment:ry,normal_pars_vertex:sy,normal_vertex:oy,normalmap_pars_fragment:ay,clearcoat_normal_fragment_begin:ly,clearcoat_normal_fragment_maps:cy,clearcoat_pars_fragment:uy,iridescence_pars_fragment:dy,opaque_fragment:fy,packing:hy,premultiplied_alpha_fragment:py,project_vertex:my,dithering_fragment:gy,dithering_pars_fragment:_y,roughnessmap_fragment:vy,roughnessmap_pars_fragment:xy,shadowmap_pars_fragment:yy,shadowmap_pars_vertex:Sy,shadowmap_vertex:My,shadowmask_pars_fragment:Ey,skinbase_vertex:Ty,skinning_pars_vertex:wy,skinning_vertex:Ay,skinnormal_vertex:Cy,specularmap_fragment:Ry,specularmap_pars_fragment:Py,tonemapping_fragment:by,tonemapping_pars_fragment:Ly,transmission_fragment:Dy,transmission_pars_fragment:Ny,uv_pars_fragment:Iy,uv_pars_vertex:Uy,uv_vertex:Fy,worldpos_vertex:Oy,background_vert:zy,background_frag:ky,backgroundCube_vert:By,backgroundCube_frag:Hy,cube_vert:Vy,cube_frag:Gy,depth_vert:jy,depth_frag:Wy,distanceRGBA_vert:Xy,distanceRGBA_frag:Yy,equirect_vert:qy,equirect_frag:Ky,linedashed_vert:Zy,linedashed_frag:Qy,meshbasic_vert:$y,meshbasic_frag:Jy,meshlambert_vert:e2,meshlambert_frag:t2,meshmatcap_vert:n2,meshmatcap_frag:i2,meshnormal_vert:r2,meshnormal_frag:s2,meshphong_vert:o2,meshphong_frag:a2,meshphysical_vert:l2,meshphysical_frag:c2,meshtoon_vert:u2,meshtoon_frag:d2,points_vert:f2,points_frag:h2,shadow_vert:p2,shadow_frag:m2,sprite_vert:g2,sprite_frag:_2},Pe={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},xi={basic:{uniforms:Rn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Rn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new _t(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Rn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Rn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Rn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new _t(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Rn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Rn([Pe.points,Pe.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Rn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Rn([Pe.common,Pe.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Rn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Rn([Pe.sprite,Pe.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:Rn([Pe.common,Pe.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:Rn([Pe.lights,Pe.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};xi.physical={uniforms:Rn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Al={r:0,b:0,g:0},Xr=new Ei,v2=new Xt;function x2(s,e,n,r,a,l,u){const f=new _t(0);let h=l===!0?0:1,m,g,x=null,_=0,S=null;function w(N){let P=N.isScene===!0?N.background:null;return P&&P.isTexture&&(P=(N.backgroundBlurriness>0?n:e).get(P)),P}function R(N){let P=!1;const G=w(N);G===null?v(f,h):G&&G.isColor&&(v(G,1),P=!0);const O=s.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,u):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(N,P){const G=w(P);G&&(G.isCubeTexture||G.mapping===Gl)?(g===void 0&&(g=new cn(new $o(1,1,1),new Cr({name:"BackgroundCubeMaterial",uniforms:eo(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(O,F,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),Xr.copy(P.backgroundRotation),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),g.material.uniforms.envMap.value=G,g.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(v2.makeRotationFromEuler(Xr)),g.material.toneMapped=Tt.getTransfer(G.colorSpace)!==Rt,(x!==G||_!==G.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,x=G,_=G.version,S=s.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):G&&G.isTexture&&(m===void 0&&(m=new cn(new jl(2,2),new Cr({name:"BackgroundMaterial",uniforms:eo(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=G,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(G.colorSpace)!==Rt,G.matrixAutoUpdate===!0&&G.updateMatrix(),m.material.uniforms.uvTransform.value.copy(G.matrix),(x!==G||_!==G.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,x=G,_=G.version,S=s.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function v(N,P){N.getRGB(Al,x0(s)),r.buffers.color.setClear(Al.r,Al.g,Al.b,P,u)}function U(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(N,P=1){f.set(N),h=P,v(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(N){h=N,v(f,h)},render:R,addToRenderList:y,dispose:U}}function y2(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=_(null);let l=a,u=!1;function f(C,z,q,Q,ce){let de=!1;const $=x(Q,q,z);l!==$&&(l=$,m(l.object)),de=S(C,Q,q,ce),de&&w(C,Q,q,ce),ce!==null&&e.update(ce,s.ELEMENT_ARRAY_BUFFER),(de||u)&&(u=!1,P(C,z,q,Q),ce!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function h(){return s.createVertexArray()}function m(C){return s.bindVertexArray(C)}function g(C){return s.deleteVertexArray(C)}function x(C,z,q){const Q=q.wireframe===!0;let ce=r[C.id];ce===void 0&&(ce={},r[C.id]=ce);let de=ce[z.id];de===void 0&&(de={},ce[z.id]=de);let $=de[Q];return $===void 0&&($=_(h()),de[Q]=$),$}function _(C){const z=[],q=[],Q=[];for(let ce=0;ce<n;ce++)z[ce]=0,q[ce]=0,Q[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:q,attributeDivisors:Q,object:C,attributes:{},index:null}}function S(C,z,q,Q){const ce=l.attributes,de=z.attributes;let $=0;const ne=q.getAttributes();for(const H in ne)if(ne[H].location>=0){const ae=ce[H];let I=de[H];if(I===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(I=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(I=C.instanceColor)),ae===void 0||ae.attribute!==I||I&&ae.data!==I.data)return!0;$++}return l.attributesNum!==$||l.index!==Q}function w(C,z,q,Q){const ce={},de=z.attributes;let $=0;const ne=q.getAttributes();for(const H in ne)if(ne[H].location>=0){let ae=de[H];ae===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(ae=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(ae=C.instanceColor));const I={};I.attribute=ae,ae&&ae.data&&(I.data=ae.data),ce[H]=I,$++}l.attributes=ce,l.attributesNum=$,l.index=Q}function R(){const C=l.newAttributes;for(let z=0,q=C.length;z<q;z++)C[z]=0}function y(C){v(C,0)}function v(C,z){const q=l.newAttributes,Q=l.enabledAttributes,ce=l.attributeDivisors;q[C]=1,Q[C]===0&&(s.enableVertexAttribArray(C),Q[C]=1),ce[C]!==z&&(s.vertexAttribDivisor(C,z),ce[C]=z)}function U(){const C=l.newAttributes,z=l.enabledAttributes;for(let q=0,Q=z.length;q<Q;q++)z[q]!==C[q]&&(s.disableVertexAttribArray(q),z[q]=0)}function N(C,z,q,Q,ce,de,$){$===!0?s.vertexAttribIPointer(C,z,q,ce,de):s.vertexAttribPointer(C,z,q,Q,ce,de)}function P(C,z,q,Q){R();const ce=Q.attributes,de=q.getAttributes(),$=z.defaultAttributeValues;for(const ne in de){const H=de[ne];if(H.location>=0){let ue=ce[ne];if(ue===void 0&&(ne==="instanceMatrix"&&C.instanceMatrix&&(ue=C.instanceMatrix),ne==="instanceColor"&&C.instanceColor&&(ue=C.instanceColor)),ue!==void 0){const ae=ue.normalized,I=ue.itemSize,se=e.get(ue);if(se===void 0)continue;const De=se.buffer,ie=se.type,me=se.bytesPerElement,Ee=ie===s.INT||ie===s.UNSIGNED_INT||ue.gpuType===qd;if(ue.isInterleavedBufferAttribute){const xe=ue.data,we=xe.stride,Xe=ue.offset;if(xe.isInstancedInterleavedBuffer){for(let Ge=0;Ge<H.locationSize;Ge++)v(H.location+Ge,xe.meshPerAttribute);C.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ge=0;Ge<H.locationSize;Ge++)y(H.location+Ge);s.bindBuffer(s.ARRAY_BUFFER,De);for(let Ge=0;Ge<H.locationSize;Ge++)N(H.location+Ge,I/H.locationSize,ie,ae,we*me,(Xe+I/H.locationSize*Ge)*me,Ee)}else{if(ue.isInstancedBufferAttribute){for(let xe=0;xe<H.locationSize;xe++)v(H.location+xe,ue.meshPerAttribute);C.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let xe=0;xe<H.locationSize;xe++)y(H.location+xe);s.bindBuffer(s.ARRAY_BUFFER,De);for(let xe=0;xe<H.locationSize;xe++)N(H.location+xe,I/H.locationSize,ie,ae,I*me,I/H.locationSize*xe*me,Ee)}}else if($!==void 0){const ae=$[ne];if(ae!==void 0)switch(ae.length){case 2:s.vertexAttrib2fv(H.location,ae);break;case 3:s.vertexAttrib3fv(H.location,ae);break;case 4:s.vertexAttrib4fv(H.location,ae);break;default:s.vertexAttrib1fv(H.location,ae)}}}}U()}function G(){j();for(const C in r){const z=r[C];for(const q in z){const Q=z[q];for(const ce in Q)g(Q[ce].object),delete Q[ce];delete z[q]}delete r[C]}}function O(C){if(r[C.id]===void 0)return;const z=r[C.id];for(const q in z){const Q=z[q];for(const ce in Q)g(Q[ce].object),delete Q[ce];delete z[q]}delete r[C.id]}function F(C){for(const z in r){const q=r[z];if(q[C.id]===void 0)continue;const Q=q[C.id];for(const ce in Q)g(Q[ce].object),delete Q[ce];delete q[C.id]}}function j(){b(),u=!0,l!==a&&(l=a,m(l.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:j,resetDefaultState:b,dispose:G,releaseStatesOfGeometry:O,releaseStatesOfProgram:F,initAttributes:R,enableAttribute:y,disableUnusedAttributes:U}}function S2(s,e,n){let r;function a(m){r=m}function l(m,g){s.drawArrays(r,m,g),n.update(g,r,1)}function u(m,g,x){x!==0&&(s.drawArraysInstanced(r,m,g,x),n.update(g,r,x))}function f(m,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,x);let S=0;for(let w=0;w<x;w++)S+=g[w];n.update(S,r,1)}function h(m,g,x,_){if(x===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let w=0;w<m.length;w++)u(m[w],g[w],_[w]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,g,0,_,0,x);let w=0;for(let R=0;R<x;R++)w+=g[R]*_[R];n.update(w,r,1)}}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function M2(s,e,n,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(F){return!(F!==di&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const j=F===Ko&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Mi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Gi&&!j)}function h(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=h(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const x=n.logarithmicDepthBuffer===!0,_=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),G=w>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:x,reverseDepthBuffer:_,maxTextures:S,maxVertexTextures:w,maxTextureSize:R,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:U,maxVaryings:N,maxFragmentUniforms:P,vertexTextures:G,maxSamples:O}}function E2(s){const e=this;let n=null,r=0,a=!1,l=!1;const u=new yr,f=new lt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const S=x.length!==0||_||r!==0||a;return a=_,r=x.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,_){n=g(x,_,0)},this.setState=function(x,_,S){const w=x.clippingPlanes,R=x.clipIntersection,y=x.clipShadows,v=s.get(x);if(!a||w===null||w.length===0||l&&!y)l?g(null):m();else{const U=l?0:r,N=U*4;let P=v.clippingState||null;h.value=P,P=g(w,_,N,S);for(let G=0;G!==N;++G)P[G]=n[G];v.clippingState=P,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=U}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(x,_,S,w){const R=x!==null?x.length:0;let y=null;if(R!==0){if(y=h.value,w!==!0||y===null){const v=S+R*4,U=_.matrixWorldInverse;f.getNormalMatrix(U),(y===null||y.length<v)&&(y=new Float32Array(v));for(let N=0,P=S;N!==R;++N,P+=4)u.copy(x[N]).applyMatrix4(U,f),u.normal.toArray(y,P),y[P+3]=u.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}function T2(s){let e=new WeakMap;function n(u,f){return f===pd?u.mapping=ns:f===md&&(u.mapping=$s),u}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===pd||f===md)if(e.has(u)){const h=e.get(u).texture;return n(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const m=new M1(h.height);return m.fromEquirectangularTexture(s,u),e.set(u,m),u.addEventListener("dispose",a),n(m.texture,u.mapping)}else return null}}return u}function a(u){const f=u.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Xs=4,ym=[.125,.215,.35,.446,.526,.582],$r=20,$u=new T0,Sm=new _t;let Ju=null,ed=0,td=0,nd=!1;const Zr=(1+Math.sqrt(5))/2,js=1/Zr,Mm=[new ee(-Zr,js,0),new ee(Zr,js,0),new ee(-js,0,Zr),new ee(js,0,Zr),new ee(0,Zr,-js),new ee(0,Zr,js),new ee(-1,1,-1),new ee(1,1,-1),new ee(-1,1,1),new ee(1,1,1)],w2=new ee;class Em{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100,l={}){const{size:u=256,position:f=w2}=l;Ju=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,a,h,f),n>0&&this._blur(h,0,0,n),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Am(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ju,ed,td),this._renderer.xr.enabled=nd,e.scissorTest=!1,Cl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ns||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ju=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:Ko,format:di,colorSpace:Js,depthBuffer:!1},a=Tm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tm(e,n,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=A2(l)),this._blurMaterial=C2(l,e,n)}return a}_compileMaterial(e){const n=new cn(this._lodPlanes[0],e);this._renderer.compile(n,$u)}_sceneToCubeUV(e,n,r,a,l){const h=new Yn(90,1,n,r),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,S=x.toneMapping;x.getClearColor(Sm),x.toneMapping=wr,x.autoClear=!1;const w=new g0({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),R=new cn(new $o,w);let y=!1;const v=e.background;v?v.isColor&&(w.color.copy(v),e.background=null,y=!0):(w.color.copy(Sm),y=!0);for(let U=0;U<6;U++){const N=U%3;N===0?(h.up.set(0,m[U],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+g[U],l.y,l.z)):N===1?(h.up.set(0,0,m[U]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+g[U],l.z)):(h.up.set(0,m[U],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+g[U]));const P=this._cubeSize;Cl(a,N*P,U>2?P:0,P,P),x.setRenderTarget(a),y&&x.render(R,h),x.render(e,h)}R.geometry.dispose(),R.material.dispose(),x.toneMapping=S,x.autoClear=_,e.background=v}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===ns||e.mapping===$s;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Am()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wm());const l=a?this._cubemapMaterial:this._equirectMaterial,u=new cn(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Cl(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(u,$u)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Mm[(a-l-1)%Mm.length];this._blur(e,l-1,l,u,f)}n.autoClear=r}_blur(e,n,r,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,a,"latitudinal",l),this._halfBlur(u,e,r,r,a,"longitudinal",l)}_halfBlur(e,n,r,a,l,u,f){const h=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new cn(this._lodPlanes[a],m),_=m.uniforms,S=this._sizeLods[r]-1,w=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*$r-1),R=l/w,y=isFinite(l)?1+Math.floor(g*R):$r;y>$r&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${$r}`);const v=[];let U=0;for(let F=0;F<$r;++F){const j=F/R,b=Math.exp(-j*j/2);v.push(b),F===0?U+=b:F<y&&(U+=2*b)}for(let F=0;F<v.length;F++)v[F]=v[F]/U;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=v,_.latitudinal.value=u==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:N}=this;_.dTheta.value=w,_.mipInt.value=N-r;const P=this._sizeLods[a],G=3*P*(a>N-Xs?a-N+Xs:0),O=4*(this._cubeSize-P);Cl(n,G,O,3*P,2*P),h.setRenderTarget(n),h.render(x,$u)}}function A2(s){const e=[],n=[],r=[];let a=s;const l=s-Xs+1+ym.length;for(let u=0;u<l;u++){const f=Math.pow(2,a);n.push(f);let h=1/f;u>s-Xs?h=ym[u-s+Xs-1]:u===0&&(h=0),r.push(h);const m=1/(f-2),g=-m,x=1+m,_=[g,g,x,g,x,x,g,g,x,x,g,x],S=6,w=6,R=3,y=2,v=1,U=new Float32Array(R*w*S),N=new Float32Array(y*w*S),P=new Float32Array(v*w*S);for(let O=0;O<S;O++){const F=O%3*2/3-1,j=O>2?0:-1,b=[F,j,0,F+2/3,j,0,F+2/3,j+1,0,F,j,0,F+2/3,j+1,0,F,j+1,0];U.set(b,R*w*O),N.set(_,y*w*O);const C=[O,O,O,O,O,O];P.set(C,v*w*O)}const G=new Ti;G.setAttribute("position",new Si(U,R)),G.setAttribute("uv",new Si(N,y)),G.setAttribute("faceIndex",new Si(P,v)),e.push(G),a>Xs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Tm(s,e,n){const r=new rs(s,e,n);return r.texture.mapping=Gl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Cl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function C2(s,e,n){const r=new Float32Array($r),a=new ee(0,1,0);return new Cr({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:lf(),fragmentShader:`

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
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function wm(){return new Cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lf(),fragmentShader:`

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
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function Am(){return new Cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function lf(){return`

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
	`}function R2(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const h=f.mapping,m=h===pd||h===md,g=h===ns||h===$s;if(m||g){let x=e.get(f);const _=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return n===null&&(n=new Em(s)),x=m?n.fromEquirectangular(f,x):n.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),x.texture;if(x!==void 0)return x.texture;{const S=f.image;return m&&S&&S.height>0||g&&S&&a(S)?(n===null&&(n=new Em(s)),x=m?n.fromEquirectangular(f):n.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),f.addEventListener("dispose",l),x.texture):null}}}return f}function a(f){let h=0;const m=6;for(let g=0;g<m;g++)f[g]!==void 0&&h++;return h===m}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function P2(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Ol("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function b2(s,e,n,r){const a={},l=new WeakMap;function u(x){const _=x.target;_.index!==null&&e.remove(_.index);for(const w in _.attributes)e.remove(_.attributes[w]);_.removeEventListener("dispose",u),delete a[_.id];const S=l.get(_);S&&(e.remove(S),l.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function f(x,_){return a[_.id]===!0||(_.addEventListener("dispose",u),a[_.id]=!0,n.memory.geometries++),_}function h(x){const _=x.attributes;for(const S in _)e.update(_[S],s.ARRAY_BUFFER)}function m(x){const _=[],S=x.index,w=x.attributes.position;let R=0;if(S!==null){const U=S.array;R=S.version;for(let N=0,P=U.length;N<P;N+=3){const G=U[N+0],O=U[N+1],F=U[N+2];_.push(G,O,O,F,F,G)}}else if(w!==void 0){const U=w.array;R=w.version;for(let N=0,P=U.length/3-1;N<P;N+=3){const G=N+0,O=N+1,F=N+2;_.push(G,O,O,F,F,G)}}else return;const y=new(d0(_)?v0:_0)(_,1);y.version=R;const v=l.get(x);v&&e.remove(v),l.set(x,y)}function g(x){const _=l.get(x);if(_){const S=x.index;S!==null&&_.version<S.version&&m(x)}else m(x);return l.get(x)}return{get:f,update:h,getWireframeAttribute:g}}function L2(s,e,n){let r;function a(_){r=_}let l,u;function f(_){l=_.type,u=_.bytesPerElement}function h(_,S){s.drawElements(r,S,l,_*u),n.update(S,r,1)}function m(_,S,w){w!==0&&(s.drawElementsInstanced(r,S,l,_*u,w),n.update(S,r,w))}function g(_,S,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,_,0,w);let y=0;for(let v=0;v<w;v++)y+=S[v];n.update(y,r,1)}function x(_,S,w,R){if(w===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<_.length;v++)m(_[v]/u,S[v],R[v]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,l,_,0,R,0,w);let v=0;for(let U=0;U<w;U++)v+=S[U]*R[U];n.update(v,r,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function D2(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=f*(l/3);break;case s.LINES:n.lines+=f*(l/2);break;case s.LINE_STRIP:n.lines+=f*(l-1);break;case s.LINE_LOOP:n.lines+=f*l;break;case s.POINTS:n.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function N2(s,e,n){const r=new WeakMap,a=new Wt;function l(u,f,h){const m=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=g!==void 0?g.length:0;let _=r.get(f);if(_===void 0||_.count!==x){let C=function(){j.dispose(),r.delete(f),f.removeEventListener("dispose",C)};var S=C;_!==void 0&&_.texture.dispose();const w=f.morphAttributes.position!==void 0,R=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],U=f.morphAttributes.normal||[],N=f.morphAttributes.color||[];let P=0;w===!0&&(P=1),R===!0&&(P=2),y===!0&&(P=3);let G=f.attributes.position.count*P,O=1;G>e.maxTextureSize&&(O=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const F=new Float32Array(G*O*4*x),j=new f0(F,G,O,x);j.type=Gi,j.needsUpdate=!0;const b=P*4;for(let z=0;z<x;z++){const q=v[z],Q=U[z],ce=N[z],de=G*O*4*z;for(let $=0;$<q.count;$++){const ne=$*b;w===!0&&(a.fromBufferAttribute(q,$),F[de+ne+0]=a.x,F[de+ne+1]=a.y,F[de+ne+2]=a.z,F[de+ne+3]=0),R===!0&&(a.fromBufferAttribute(Q,$),F[de+ne+4]=a.x,F[de+ne+5]=a.y,F[de+ne+6]=a.z,F[de+ne+7]=0),y===!0&&(a.fromBufferAttribute(ce,$),F[de+ne+8]=a.x,F[de+ne+9]=a.y,F[de+ne+10]=a.z,F[de+ne+11]=ce.itemSize===4?a.w:1)}}_={count:x,texture:j,size:new ot(G,O)},r.set(f,_),f.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let w=0;for(let y=0;y<m.length;y++)w+=m[y];const R=f.morphTargetsRelative?1:1-w;h.getUniforms().setValue(s,"morphTargetBaseInfluence",R),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",_.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:l}}function I2(s,e,n,r){let a=new WeakMap;function l(h){const m=r.render.frame,g=h.geometry,x=e.get(h,g);if(a.get(x)!==m&&(e.update(x),a.set(x,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==m&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const _=h.skeleton;a.get(_)!==m&&(_.update(),a.set(_,m))}return x}function u(){a=new WeakMap}function f(h){const m=h.target;m.removeEventListener("dispose",f),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:l,dispose:u}}const R0=new kn,Cm=new M0(1,1),P0=new f0,b0=new s1,L0=new nf,Rm=[],Pm=[],bm=new Float32Array(16),Lm=new Float32Array(9),Dm=new Float32Array(4);function io(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let l=Rm[a];if(l===void 0&&(l=new Float32Array(a),Rm[a]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=n,s[u].toArray(l,f)}return l}function en(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function tn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Wl(s,e){let n=Pm[e];n===void 0&&(n=new Int32Array(e),Pm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function U2(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function F2(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;s.uniform2fv(this.addr,e),tn(n,e)}}function O2(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(en(n,e))return;s.uniform3fv(this.addr,e),tn(n,e)}}function z2(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;s.uniform4fv(this.addr,e),tn(n,e)}}function k2(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(en(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),tn(n,e)}else{if(en(n,r))return;Dm.set(r),s.uniformMatrix2fv(this.addr,!1,Dm),tn(n,r)}}function B2(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(en(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),tn(n,e)}else{if(en(n,r))return;Lm.set(r),s.uniformMatrix3fv(this.addr,!1,Lm),tn(n,r)}}function H2(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(en(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),tn(n,e)}else{if(en(n,r))return;bm.set(r),s.uniformMatrix4fv(this.addr,!1,bm),tn(n,r)}}function V2(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function G2(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;s.uniform2iv(this.addr,e),tn(n,e)}}function j2(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;s.uniform3iv(this.addr,e),tn(n,e)}}function W2(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;s.uniform4iv(this.addr,e),tn(n,e)}}function X2(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function Y2(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;s.uniform2uiv(this.addr,e),tn(n,e)}}function q2(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;s.uniform3uiv(this.addr,e),tn(n,e)}}function K2(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;s.uniform4uiv(this.addr,e),tn(n,e)}}function Z2(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(Cm.compareFunction=u0,l=Cm):l=R0,n.setTexture2D(e||l,a)}function Q2(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||b0,a)}function $2(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||L0,a)}function J2(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||P0,a)}function eS(s){switch(s){case 5126:return U2;case 35664:return F2;case 35665:return O2;case 35666:return z2;case 35674:return k2;case 35675:return B2;case 35676:return H2;case 5124:case 35670:return V2;case 35667:case 35671:return G2;case 35668:case 35672:return j2;case 35669:case 35673:return W2;case 5125:return X2;case 36294:return Y2;case 36295:return q2;case 36296:return K2;case 35678:case 36198:case 36298:case 36306:case 35682:return Z2;case 35679:case 36299:case 36307:return Q2;case 35680:case 36300:case 36308:case 36293:return $2;case 36289:case 36303:case 36311:case 36292:return J2}}function tS(s,e){s.uniform1fv(this.addr,e)}function nS(s,e){const n=io(e,this.size,2);s.uniform2fv(this.addr,n)}function iS(s,e){const n=io(e,this.size,3);s.uniform3fv(this.addr,n)}function rS(s,e){const n=io(e,this.size,4);s.uniform4fv(this.addr,n)}function sS(s,e){const n=io(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function oS(s,e){const n=io(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function aS(s,e){const n=io(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function lS(s,e){s.uniform1iv(this.addr,e)}function cS(s,e){s.uniform2iv(this.addr,e)}function uS(s,e){s.uniform3iv(this.addr,e)}function dS(s,e){s.uniform4iv(this.addr,e)}function fS(s,e){s.uniform1uiv(this.addr,e)}function hS(s,e){s.uniform2uiv(this.addr,e)}function pS(s,e){s.uniform3uiv(this.addr,e)}function mS(s,e){s.uniform4uiv(this.addr,e)}function gS(s,e,n){const r=this.cache,a=e.length,l=Wl(n,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==a;++u)n.setTexture2D(e[u]||R0,l[u])}function _S(s,e,n){const r=this.cache,a=e.length,l=Wl(n,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==a;++u)n.setTexture3D(e[u]||b0,l[u])}function vS(s,e,n){const r=this.cache,a=e.length,l=Wl(n,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==a;++u)n.setTextureCube(e[u]||L0,l[u])}function xS(s,e,n){const r=this.cache,a=e.length,l=Wl(n,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==a;++u)n.setTexture2DArray(e[u]||P0,l[u])}function yS(s){switch(s){case 5126:return tS;case 35664:return nS;case 35665:return iS;case 35666:return rS;case 35674:return sS;case 35675:return oS;case 35676:return aS;case 5124:case 35670:return lS;case 35667:case 35671:return cS;case 35668:case 35672:return uS;case 35669:case 35673:return dS;case 5125:return fS;case 36294:return hS;case 36295:return pS;case 36296:return mS;case 35678:case 36198:case 36298:case 36306:case 35682:return gS;case 35679:case 36299:case 36307:return _S;case 35680:case 36300:case 36308:case 36293:return vS;case 36289:case 36303:case 36311:case 36292:return xS}}class SS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=eS(n.type)}}class MS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=yS(n.type)}}class ES{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const f=a[l];f.setValue(e,n[f.id],r)}}}const id=/(\w+)(\])?(\[|\.)?/g;function Nm(s,e){s.seq.push(e),s.map[e.id]=e}function TS(s,e,n){const r=s.name,a=r.length;for(id.lastIndex=0;;){const l=id.exec(r),u=id.lastIndex;let f=l[1];const h=l[2]==="]",m=l[3];if(h&&(f=f|0),m===void 0||m==="["&&u+2===a){Nm(n,m===void 0?new SS(f,s,e):new MS(f,s,e));break}else{let x=n.map[f];x===void 0&&(x=new ES(f),Nm(n,x)),n=x}}}class zl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(n,a),u=e.getUniformLocation(n,l.name);TS(l,u,this)}}setValue(e,n,r,a){const l=this.map[n];l!==void 0&&l.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let l=0,u=n.length;l!==u;++l){const f=n[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in n&&r.push(u)}return r}}function Im(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const wS=37297;let AS=0;function CS(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let u=a;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return r.join(`
`)}const Um=new lt;function RS(s){Tt._getMatrix(Um,Tt.workingColorSpace,s);const e=`mat3( ${Um.elements.map(n=>n.toFixed(4))} )`;switch(Tt.getTransfer(s)){case Hl:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Fm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const u=parseInt(l[1]);return n.toUpperCase()+`

`+a+`

`+CS(s.getShaderSource(e),u)}else return a}function PS(s,e){const n=RS(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function bS(s,e){let n;switch(e){case bv:n="Linear";break;case Lv:n="Reinhard";break;case Dv:n="Cineon";break;case Nv:n="ACESFilmic";break;case Uv:n="AgX";break;case Fv:n="Neutral";break;case Iv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Rl=new ee;function LS(){Tt.getLuminanceCoefficients(Rl);const s=Rl.x.toFixed(4),e=Rl.y.toFixed(4),n=Rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function DS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function NS(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function IS(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),n[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return n}function Vo(s){return s!==""}function Om(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const US=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wd(s){return s.replace(US,OS)}const FS=new Map;function OS(s,e){let n=ct[e];if(n===void 0){const r=FS.get(e);if(r!==void 0)n=ct[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Wd(n)}const zS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function km(s){return s.replace(zS,kS)}function kS(s,e,n,r){let a="";for(let l=parseInt(e);l<parseInt(n);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Bm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function BS(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===$m?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===cv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Hi&&(e="SHADOWMAP_TYPE_VSM"),e}function HS(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ns:case $s:e="ENVMAP_TYPE_CUBE";break;case Gl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function VS(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case $s:e="ENVMAP_MODE_REFRACTION";break}return e}function GS(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Jm:e="ENVMAP_BLENDING_MULTIPLY";break;case Rv:e="ENVMAP_BLENDING_MIX";break;case Pv:e="ENVMAP_BLENDING_ADD";break}return e}function jS(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function WS(s,e,n,r){const a=s.getContext(),l=n.defines;let u=n.vertexShader,f=n.fragmentShader;const h=BS(n),m=HS(n),g=VS(n),x=GS(n),_=jS(n),S=DS(n),w=NS(l),R=a.createProgram();let y,v,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Vo).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Vo).join(`
`),v.length>0&&(v+=`
`)):(y=[Bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),v=[Bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==wr?"#define TONE_MAPPING":"",n.toneMapping!==wr?ct.tonemapping_pars_fragment:"",n.toneMapping!==wr?bS("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,PS("linearToOutputTexel",n.outputColorSpace),LS(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Vo).join(`
`)),u=Wd(u),u=Om(u,n),u=zm(u,n),f=Wd(f),f=Om(f,n),f=zm(f,n),u=km(u),f=km(f),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",n.glslVersion===Qp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Qp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=U+y+u,P=U+v+f,G=Im(a,a.VERTEX_SHADER,N),O=Im(a,a.FRAGMENT_SHADER,P);a.attachShader(R,G),a.attachShader(R,O),n.index0AttributeName!==void 0?a.bindAttribLocation(R,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R);function F(z){if(s.debug.checkShaderErrors){const q=a.getProgramInfoLog(R).trim(),Q=a.getShaderInfoLog(G).trim(),ce=a.getShaderInfoLog(O).trim();let de=!0,$=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1)if(de=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,R,G,O);else{const ne=Fm(a,G,"vertex"),H=Fm(a,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(R,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+q+`
`+ne+`
`+H)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(Q===""||ce==="")&&($=!1);$&&(z.diagnostics={runnable:de,programLog:q,vertexShader:{log:Q,prefix:y},fragmentShader:{log:ce,prefix:v}})}a.deleteShader(G),a.deleteShader(O),j=new zl(a,R),b=IS(a,R)}let j;this.getUniforms=function(){return j===void 0&&F(this),j};let b;this.getAttributes=function(){return b===void 0&&F(this),b};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(R,wS)),C},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=AS++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=G,this.fragmentShader=O,this}let XS=0;class YS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new qS(e),n.set(e,r)),r}}class qS{constructor(e){this.id=XS++,this.code=e,this.usedTimes=0}}function KS(s,e,n,r,a,l,u){const f=new p0,h=new YS,m=new Set,g=[],x=a.logarithmicDepthBuffer,_=a.vertexTextures;let S=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(b){return m.add(b),b===0?"uv":`uv${b}`}function y(b,C,z,q,Q){const ce=q.fog,de=Q.geometry,$=b.isMeshStandardMaterial?q.environment:null,ne=(b.isMeshStandardMaterial?n:e).get(b.envMap||$),H=ne&&ne.mapping===Gl?ne.image.height:null,ue=w[b.type];b.precision!==null&&(S=a.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const ae=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,I=ae!==void 0?ae.length:0;let se=0;de.morphAttributes.position!==void 0&&(se=1),de.morphAttributes.normal!==void 0&&(se=2),de.morphAttributes.color!==void 0&&(se=3);let De,ie,me,Ee;if(ue){const yt=xi[ue];De=yt.vertexShader,ie=yt.fragmentShader}else De=b.vertexShader,ie=b.fragmentShader,h.update(b),me=h.getVertexShaderID(b),Ee=h.getFragmentShaderID(b);const xe=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),Xe=Q.isInstancedMesh===!0,Ge=Q.isBatchedMesh===!0,Dt=!!b.map,Nt=!!b.matcap,ut=!!ne,B=!!b.aoMap,En=!!b.lightMap,mt=!!b.bumpMap,dt=!!b.normalMap,Ye=!!b.displacementMap,At=!!b.emissiveMap,je=!!b.metalnessMap,L=!!b.roughnessMap,T=b.anisotropy>0,te=b.clearcoat>0,he=b.dispersion>0,ve=b.iridescence>0,fe=b.sheen>0,Ve=b.transmission>0,Ae=T&&!!b.anisotropyMap,Ze=te&&!!b.clearcoatMap,Ke=te&&!!b.clearcoatNormalMap,ye=te&&!!b.clearcoatRoughnessMap,Fe=ve&&!!b.iridescenceMap,et=ve&&!!b.iridescenceThicknessMap,tt=fe&&!!b.sheenColorMap,Oe=fe&&!!b.sheenRoughnessMap,ft=!!b.specularMap,rt=!!b.specularColorMap,wt=!!b.specularIntensityMap,W=Ve&&!!b.transmissionMap,Ce=Ve&&!!b.thicknessMap,le=!!b.gradientMap,pe=!!b.alphaMap,Le=b.alphaTest>0,be=!!b.alphaHash,st=!!b.extensions;let Ut=wr;b.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Ut=s.toneMapping);const Zt={shaderID:ue,shaderType:b.type,shaderName:b.name,vertexShader:De,fragmentShader:ie,defines:b.defines,customVertexShaderID:me,customFragmentShaderID:Ee,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:Ge,batchingColor:Ge&&Q._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&Q.instanceColor!==null,instancingMorph:Xe&&Q.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:xe===null?s.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Js,alphaToCoverage:!!b.alphaToCoverage,map:Dt,matcap:Nt,envMap:ut,envMapMode:ut&&ne.mapping,envMapCubeUVHeight:H,aoMap:B,lightMap:En,bumpMap:mt,normalMap:dt,displacementMap:_&&Ye,emissiveMap:At,normalMapObjectSpace:dt&&b.normalMapType===Bv,normalMapTangentSpace:dt&&b.normalMapType===c0,metalnessMap:je,roughnessMap:L,anisotropy:T,anisotropyMap:Ae,clearcoat:te,clearcoatMap:Ze,clearcoatNormalMap:Ke,clearcoatRoughnessMap:ye,dispersion:he,iridescence:ve,iridescenceMap:Fe,iridescenceThicknessMap:et,sheen:fe,sheenColorMap:tt,sheenRoughnessMap:Oe,specularMap:ft,specularColorMap:rt,specularIntensityMap:wt,transmission:Ve,transmissionMap:W,thicknessMap:Ce,gradientMap:le,opaque:b.transparent===!1&&b.blending===qs&&b.alphaToCoverage===!1,alphaMap:pe,alphaTest:Le,alphaHash:be,combine:b.combine,mapUv:Dt&&R(b.map.channel),aoMapUv:B&&R(b.aoMap.channel),lightMapUv:En&&R(b.lightMap.channel),bumpMapUv:mt&&R(b.bumpMap.channel),normalMapUv:dt&&R(b.normalMap.channel),displacementMapUv:Ye&&R(b.displacementMap.channel),emissiveMapUv:At&&R(b.emissiveMap.channel),metalnessMapUv:je&&R(b.metalnessMap.channel),roughnessMapUv:L&&R(b.roughnessMap.channel),anisotropyMapUv:Ae&&R(b.anisotropyMap.channel),clearcoatMapUv:Ze&&R(b.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&R(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&R(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&R(b.iridescenceMap.channel),iridescenceThicknessMapUv:et&&R(b.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&R(b.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&R(b.sheenRoughnessMap.channel),specularMapUv:ft&&R(b.specularMap.channel),specularColorMapUv:rt&&R(b.specularColorMap.channel),specularIntensityMapUv:wt&&R(b.specularIntensityMap.channel),transmissionMapUv:W&&R(b.transmissionMap.channel),thicknessMapUv:Ce&&R(b.thicknessMap.channel),alphaMapUv:pe&&R(b.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(dt||T),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!de.attributes.uv&&(Dt||pe),fog:!!ce,useFog:b.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:we,skinning:Q.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:se,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Dt&&b.map.isVideoTexture===!0&&Tt.getTransfer(b.map.colorSpace)===Rt,decodeVideoTextureEmissive:At&&b.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(b.emissiveMap.colorSpace)===Rt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Vi,flipSided:b.side===zn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:st&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&b.extensions.multiDraw===!0||Ge)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Zt.vertexUv1s=m.has(1),Zt.vertexUv2s=m.has(2),Zt.vertexUv3s=m.has(3),m.clear(),Zt}function v(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const z in b.defines)C.push(z),C.push(b.defines[z]);return b.isRawShaderMaterial===!1&&(U(C,b),N(C,b),C.push(s.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function U(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.anisotropyMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.numLightProbes),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function N(b,C){f.disableAll(),C.supportsVertexTextures&&f.enable(0),C.instancing&&f.enable(1),C.instancingColor&&f.enable(2),C.instancingMorph&&f.enable(3),C.matcap&&f.enable(4),C.envMap&&f.enable(5),C.normalMapObjectSpace&&f.enable(6),C.normalMapTangentSpace&&f.enable(7),C.clearcoat&&f.enable(8),C.iridescence&&f.enable(9),C.alphaTest&&f.enable(10),C.vertexColors&&f.enable(11),C.vertexAlphas&&f.enable(12),C.vertexUv1s&&f.enable(13),C.vertexUv2s&&f.enable(14),C.vertexUv3s&&f.enable(15),C.vertexTangents&&f.enable(16),C.anisotropy&&f.enable(17),C.alphaHash&&f.enable(18),C.batching&&f.enable(19),C.dispersion&&f.enable(20),C.batchingColor&&f.enable(21),b.push(f.mask),f.disableAll(),C.fog&&f.enable(0),C.useFog&&f.enable(1),C.flatShading&&f.enable(2),C.logarithmicDepthBuffer&&f.enable(3),C.reverseDepthBuffer&&f.enable(4),C.skinning&&f.enable(5),C.morphTargets&&f.enable(6),C.morphNormals&&f.enable(7),C.morphColors&&f.enable(8),C.premultipliedAlpha&&f.enable(9),C.shadowMapEnabled&&f.enable(10),C.doubleSided&&f.enable(11),C.flipSided&&f.enable(12),C.useDepthPacking&&f.enable(13),C.dithering&&f.enable(14),C.transmission&&f.enable(15),C.sheen&&f.enable(16),C.opaque&&f.enable(17),C.pointsUvs&&f.enable(18),C.decodeVideoTexture&&f.enable(19),C.decodeVideoTextureEmissive&&f.enable(20),C.alphaToCoverage&&f.enable(21),b.push(f.mask)}function P(b){const C=w[b.type];let z;if(C){const q=xi[C];z=v1.clone(q.uniforms)}else z=b.uniforms;return z}function G(b,C){let z;for(let q=0,Q=g.length;q<Q;q++){const ce=g[q];if(ce.cacheKey===C){z=ce,++z.usedTimes;break}}return z===void 0&&(z=new WS(s,C,b,l),g.push(z)),z}function O(b){if(--b.usedTimes===0){const C=g.indexOf(b);g[C]=g[g.length-1],g.pop(),b.destroy()}}function F(b){h.remove(b)}function j(){h.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:P,acquireProgram:G,releaseProgram:O,releaseShaderCache:F,programs:g,dispose:j}}function ZS(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function a(u,f,h){s.get(u)[f]=h}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:l}}function QS(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Hm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Vm(){const s=[];let e=0;const n=[],r=[],a=[];function l(){e=0,n.length=0,r.length=0,a.length=0}function u(x,_,S,w,R,y){let v=s[e];return v===void 0?(v={id:x.id,object:x,geometry:_,material:S,groupOrder:w,renderOrder:x.renderOrder,z:R,group:y},s[e]=v):(v.id=x.id,v.object=x,v.geometry=_,v.material=S,v.groupOrder=w,v.renderOrder=x.renderOrder,v.z=R,v.group=y),e++,v}function f(x,_,S,w,R,y){const v=u(x,_,S,w,R,y);S.transmission>0?r.push(v):S.transparent===!0?a.push(v):n.push(v)}function h(x,_,S,w,R,y){const v=u(x,_,S,w,R,y);S.transmission>0?r.unshift(v):S.transparent===!0?a.unshift(v):n.unshift(v)}function m(x,_){n.length>1&&n.sort(x||QS),r.length>1&&r.sort(_||Hm),a.length>1&&a.sort(_||Hm)}function g(){for(let x=e,_=s.length;x<_;x++){const S=s[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:l,push:f,unshift:h,finish:g,sort:m}}function $S(){let s=new WeakMap;function e(r,a){const l=s.get(r);let u;return l===void 0?(u=new Vm,s.set(r,[u])):a>=l.length?(u=new Vm,l.push(u)):u=l[a],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function JS(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ee,color:new _t};break;case"SpotLight":n={position:new ee,direction:new ee,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ee,color:new _t,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ee,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":n={color:new _t,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return s[e.id]=n,n}}}function eM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let tM=0;function nM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function iM(s){const e=new JS,n=eM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ee);const a=new ee,l=new Xt,u=new Xt;function f(m){let g=0,x=0,_=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let S=0,w=0,R=0,y=0,v=0,U=0,N=0,P=0,G=0,O=0,F=0;m.sort(nM);for(let b=0,C=m.length;b<C;b++){const z=m[b],q=z.color,Q=z.intensity,ce=z.distance,de=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)g+=q.r*Q,x+=q.g*Q,_+=q.b*Q;else if(z.isLightProbe){for(let $=0;$<9;$++)r.probe[$].addScaledVector(z.sh.coefficients[$],Q);F++}else if(z.isDirectionalLight){const $=e.get(z);if($.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ne=z.shadow,H=n.get(z);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,r.directionalShadow[S]=H,r.directionalShadowMap[S]=de,r.directionalShadowMatrix[S]=z.shadow.matrix,U++}r.directional[S]=$,S++}else if(z.isSpotLight){const $=e.get(z);$.position.setFromMatrixPosition(z.matrixWorld),$.color.copy(q).multiplyScalar(Q),$.distance=ce,$.coneCos=Math.cos(z.angle),$.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),$.decay=z.decay,r.spot[R]=$;const ne=z.shadow;if(z.map&&(r.spotLightMap[G]=z.map,G++,ne.updateMatrices(z),z.castShadow&&O++),r.spotLightMatrix[R]=ne.matrix,z.castShadow){const H=n.get(z);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,r.spotShadow[R]=H,r.spotShadowMap[R]=de,P++}R++}else if(z.isRectAreaLight){const $=e.get(z);$.color.copy(q).multiplyScalar(Q),$.halfWidth.set(z.width*.5,0,0),$.halfHeight.set(0,z.height*.5,0),r.rectArea[y]=$,y++}else if(z.isPointLight){const $=e.get(z);if($.color.copy(z.color).multiplyScalar(z.intensity),$.distance=z.distance,$.decay=z.decay,z.castShadow){const ne=z.shadow,H=n.get(z);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,H.shadowCameraNear=ne.camera.near,H.shadowCameraFar=ne.camera.far,r.pointShadow[w]=H,r.pointShadowMap[w]=de,r.pointShadowMatrix[w]=z.shadow.matrix,N++}r.point[w]=$,w++}else if(z.isHemisphereLight){const $=e.get(z);$.skyColor.copy(z.color).multiplyScalar(Q),$.groundColor.copy(z.groundColor).multiplyScalar(Q),r.hemi[v]=$,v++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=_;const j=r.hash;(j.directionalLength!==S||j.pointLength!==w||j.spotLength!==R||j.rectAreaLength!==y||j.hemiLength!==v||j.numDirectionalShadows!==U||j.numPointShadows!==N||j.numSpotShadows!==P||j.numSpotMaps!==G||j.numLightProbes!==F)&&(r.directional.length=S,r.spot.length=R,r.rectArea.length=y,r.point.length=w,r.hemi.length=v,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=P+G-O,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=F,j.directionalLength=S,j.pointLength=w,j.spotLength=R,j.rectAreaLength=y,j.hemiLength=v,j.numDirectionalShadows=U,j.numPointShadows=N,j.numSpotShadows=P,j.numSpotMaps=G,j.numLightProbes=F,r.version=tM++)}function h(m,g){let x=0,_=0,S=0,w=0,R=0;const y=g.matrixWorldInverse;for(let v=0,U=m.length;v<U;v++){const N=m[v];if(N.isDirectionalLight){const P=r.directional[x];P.direction.setFromMatrixPosition(N.matrixWorld),a.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(y),x++}else if(N.isSpotLight){const P=r.spot[S];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(N.matrixWorld),a.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(y),S++}else if(N.isRectAreaLight){const P=r.rectArea[w];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(y),u.identity(),l.copy(N.matrixWorld),l.premultiply(y),u.extractRotation(l),P.halfWidth.set(N.width*.5,0,0),P.halfHeight.set(0,N.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),w++}else if(N.isPointLight){const P=r.point[_];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(y),_++}else if(N.isHemisphereLight){const P=r.hemi[R];P.direction.setFromMatrixPosition(N.matrixWorld),P.direction.transformDirection(y),R++}}}return{setup:f,setupView:h,state:r}}function Gm(s){const e=new iM(s),n=[],r=[];function a(g){m.camera=g,n.length=0,r.length=0}function l(g){n.push(g)}function u(g){r.push(g)}function f(){e.setup(n)}function h(g){e.setupView(n,g)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:u}}function rM(s){let e=new WeakMap;function n(a,l=0){const u=e.get(a);let f;return u===void 0?(f=new Gm(s),e.set(a,[f])):l>=u.length?(f=new Gm(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:n,dispose:r}}const sM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oM=`uniform sampler2D shadow_pass;
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
}`;function aM(s,e,n){let r=new rf;const a=new ot,l=new ot,u=new Wt,f=new C1({depthPacking:kv}),h=new R1,m={},g=n.maxTextureSize,x={[Ar]:zn,[zn]:Ar,[Vi]:Vi},_=new Cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:sM,fragmentShader:oM}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const w=new Ti;w.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new cn(w,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$m;let v=this.type;this.render=function(O,F,j){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;const b=s.getRenderTarget(),C=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),q=s.state;q.setBlending(Tr),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const Q=v!==Hi&&this.type===Hi,ce=v===Hi&&this.type!==Hi;for(let de=0,$=O.length;de<$;de++){const ne=O[de],H=ne.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);const ue=H.getFrameExtents();if(a.multiply(ue),l.copy(H.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(l.x=Math.floor(g/ue.x),a.x=l.x*ue.x,H.mapSize.x=l.x),a.y>g&&(l.y=Math.floor(g/ue.y),a.y=l.y*ue.y,H.mapSize.y=l.y)),H.map===null||Q===!0||ce===!0){const I=this.type!==Hi?{minFilter:fi,magFilter:fi}:{};H.map!==null&&H.map.dispose(),H.map=new rs(a.x,a.y,I),H.map.texture.name=ne.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const ae=H.getViewportCount();for(let I=0;I<ae;I++){const se=H.getViewport(I);u.set(l.x*se.x,l.y*se.y,l.x*se.z,l.y*se.w),q.viewport(u),H.updateMatrices(ne,I),r=H.getFrustum(),P(F,j,H.camera,ne,this.type)}H.isPointLightShadow!==!0&&this.type===Hi&&U(H,j),H.needsUpdate=!1}v=this.type,y.needsUpdate=!1,s.setRenderTarget(b,C,z)};function U(O,F){const j=e.update(R);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new rs(a.x,a.y)),_.uniforms.shadow_pass.value=O.map.texture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(F,null,j,_,R,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(F,null,j,S,R,null)}function N(O,F,j,b){let C=null;const z=j.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(z!==void 0)C=z;else if(C=j.isPointLight===!0?h:f,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const q=C.uuid,Q=F.uuid;let ce=m[q];ce===void 0&&(ce={},m[q]=ce);let de=ce[Q];de===void 0&&(de=C.clone(),ce[Q]=de,F.addEventListener("dispose",G)),C=de}if(C.visible=F.visible,C.wireframe=F.wireframe,b===Hi?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:x[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,j.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const q=s.properties.get(C);q.light=j}return C}function P(O,F,j,b,C){if(O.visible===!1)return;if(O.layers.test(F.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&C===Hi)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,O.matrixWorld);const Q=e.update(O),ce=O.material;if(Array.isArray(ce)){const de=Q.groups;for(let $=0,ne=de.length;$<ne;$++){const H=de[$],ue=ce[H.materialIndex];if(ue&&ue.visible){const ae=N(O,ue,b,C);O.onBeforeShadow(s,O,F,j,Q,ae,H),s.renderBufferDirect(j,null,Q,ae,O,H),O.onAfterShadow(s,O,F,j,Q,ae,H)}}}else if(ce.visible){const de=N(O,ce,b,C);O.onBeforeShadow(s,O,F,j,Q,de,null),s.renderBufferDirect(j,null,Q,de,O,null),O.onAfterShadow(s,O,F,j,Q,de,null)}}const q=O.children;for(let Q=0,ce=q.length;Q<ce;Q++)P(q[Q],F,j,b,C)}function G(O){O.target.removeEventListener("dispose",G);for(const j in m){const b=m[j],C=O.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}const lM={[ad]:ld,[cd]:fd,[ud]:hd,[Qs]:dd,[ld]:ad,[fd]:cd,[hd]:ud,[dd]:Qs};function cM(s,e){function n(){let W=!1;const Ce=new Wt;let le=null;const pe=new Wt(0,0,0,0);return{setMask:function(Le){le!==Le&&!W&&(s.colorMask(Le,Le,Le,Le),le=Le)},setLocked:function(Le){W=Le},setClear:function(Le,be,st,Ut,Zt){Zt===!0&&(Le*=Ut,be*=Ut,st*=Ut),Ce.set(Le,be,st,Ut),pe.equals(Ce)===!1&&(s.clearColor(Le,be,st,Ut),pe.copy(Ce))},reset:function(){W=!1,le=null,pe.set(-1,0,0,0)}}}function r(){let W=!1,Ce=!1,le=null,pe=null,Le=null;return{setReversed:function(be){if(Ce!==be){const st=e.get("EXT_clip_control");be?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT),Ce=be;const Ut=Le;Le=null,this.setClear(Ut)}},getReversed:function(){return Ce},setTest:function(be){be?xe(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(be){le!==be&&!W&&(s.depthMask(be),le=be)},setFunc:function(be){if(Ce&&(be=lM[be]),pe!==be){switch(be){case ad:s.depthFunc(s.NEVER);break;case ld:s.depthFunc(s.ALWAYS);break;case cd:s.depthFunc(s.LESS);break;case Qs:s.depthFunc(s.LEQUAL);break;case ud:s.depthFunc(s.EQUAL);break;case dd:s.depthFunc(s.GEQUAL);break;case fd:s.depthFunc(s.GREATER);break;case hd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=be}},setLocked:function(be){W=be},setClear:function(be){Le!==be&&(Ce&&(be=1-be),s.clearDepth(be),Le=be)},reset:function(){W=!1,le=null,pe=null,Le=null,Ce=!1}}}function a(){let W=!1,Ce=null,le=null,pe=null,Le=null,be=null,st=null,Ut=null,Zt=null;return{setTest:function(yt){W||(yt?xe(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(yt){Ce!==yt&&!W&&(s.stencilMask(yt),Ce=yt)},setFunc:function(yt,Pn,Tn){(le!==yt||pe!==Pn||Le!==Tn)&&(s.stencilFunc(yt,Pn,Tn),le=yt,pe=Pn,Le=Tn)},setOp:function(yt,Pn,Tn){(be!==yt||st!==Pn||Ut!==Tn)&&(s.stencilOp(yt,Pn,Tn),be=yt,st=Pn,Ut=Tn)},setLocked:function(yt){W=yt},setClear:function(yt){Zt!==yt&&(s.clearStencil(yt),Zt=yt)},reset:function(){W=!1,Ce=null,le=null,pe=null,Le=null,be=null,st=null,Ut=null,Zt=null}}}const l=new n,u=new r,f=new a,h=new WeakMap,m=new WeakMap;let g={},x={},_=new WeakMap,S=[],w=null,R=!1,y=null,v=null,U=null,N=null,P=null,G=null,O=null,F=new _t(0,0,0),j=0,b=!1,C=null,z=null,q=null,Q=null,ce=null;const de=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,ne=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(H)[1]),$=ne>=1):H.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),$=ne>=2);let ue=null,ae={};const I=s.getParameter(s.SCISSOR_BOX),se=s.getParameter(s.VIEWPORT),De=new Wt().fromArray(I),ie=new Wt().fromArray(se);function me(W,Ce,le,pe){const Le=new Uint8Array(4),be=s.createTexture();s.bindTexture(W,be),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let st=0;st<le;st++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,Le):s.texImage2D(Ce+st,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Le);return be}const Ee={};Ee[s.TEXTURE_2D]=me(s.TEXTURE_2D,s.TEXTURE_2D,1),Ee[s.TEXTURE_CUBE_MAP]=me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[s.TEXTURE_2D_ARRAY]=me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ee[s.TEXTURE_3D]=me(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),xe(s.DEPTH_TEST),u.setFunc(Qs),mt(!1),dt(Wp),xe(s.CULL_FACE),B(Tr);function xe(W){g[W]!==!0&&(s.enable(W),g[W]=!0)}function we(W){g[W]!==!1&&(s.disable(W),g[W]=!1)}function Xe(W,Ce){return x[W]!==Ce?(s.bindFramebuffer(W,Ce),x[W]=Ce,W===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Ce),W===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Ge(W,Ce){let le=S,pe=!1;if(W){le=_.get(Ce),le===void 0&&(le=[],_.set(Ce,le));const Le=W.textures;if(le.length!==Le.length||le[0]!==s.COLOR_ATTACHMENT0){for(let be=0,st=Le.length;be<st;be++)le[be]=s.COLOR_ATTACHMENT0+be;le.length=Le.length,pe=!0}}else le[0]!==s.BACK&&(le[0]=s.BACK,pe=!0);pe&&s.drawBuffers(le)}function Dt(W){return w!==W?(s.useProgram(W),w=W,!0):!1}const Nt={[Qr]:s.FUNC_ADD,[dv]:s.FUNC_SUBTRACT,[fv]:s.FUNC_REVERSE_SUBTRACT};Nt[hv]=s.MIN,Nt[pv]=s.MAX;const ut={[mv]:s.ZERO,[gv]:s.ONE,[_v]:s.SRC_COLOR,[sd]:s.SRC_ALPHA,[Ev]:s.SRC_ALPHA_SATURATE,[Sv]:s.DST_COLOR,[xv]:s.DST_ALPHA,[vv]:s.ONE_MINUS_SRC_COLOR,[od]:s.ONE_MINUS_SRC_ALPHA,[Mv]:s.ONE_MINUS_DST_COLOR,[yv]:s.ONE_MINUS_DST_ALPHA,[Tv]:s.CONSTANT_COLOR,[wv]:s.ONE_MINUS_CONSTANT_COLOR,[Av]:s.CONSTANT_ALPHA,[Cv]:s.ONE_MINUS_CONSTANT_ALPHA};function B(W,Ce,le,pe,Le,be,st,Ut,Zt,yt){if(W===Tr){R===!0&&(we(s.BLEND),R=!1);return}if(R===!1&&(xe(s.BLEND),R=!0),W!==uv){if(W!==y||yt!==b){if((v!==Qr||P!==Qr)&&(s.blendEquation(s.FUNC_ADD),v=Qr,P=Qr),yt)switch(W){case qs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xp:s.blendFunc(s.ONE,s.ONE);break;case Yp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case qs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Yp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}U=null,N=null,G=null,O=null,F.set(0,0,0),j=0,y=W,b=yt}return}Le=Le||Ce,be=be||le,st=st||pe,(Ce!==v||Le!==P)&&(s.blendEquationSeparate(Nt[Ce],Nt[Le]),v=Ce,P=Le),(le!==U||pe!==N||be!==G||st!==O)&&(s.blendFuncSeparate(ut[le],ut[pe],ut[be],ut[st]),U=le,N=pe,G=be,O=st),(Ut.equals(F)===!1||Zt!==j)&&(s.blendColor(Ut.r,Ut.g,Ut.b,Zt),F.copy(Ut),j=Zt),y=W,b=!1}function En(W,Ce){W.side===Vi?we(s.CULL_FACE):xe(s.CULL_FACE);let le=W.side===zn;Ce&&(le=!le),mt(le),W.blending===qs&&W.transparent===!1?B(Tr):B(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),l.setMask(W.colorWrite);const pe=W.stencilWrite;f.setTest(pe),pe&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),At(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function mt(W){C!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),C=W)}function dt(W){W!==av?(xe(s.CULL_FACE),W!==z&&(W===Wp?s.cullFace(s.BACK):W===lv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),z=W}function Ye(W){W!==q&&($&&s.lineWidth(W),q=W)}function At(W,Ce,le){W?(xe(s.POLYGON_OFFSET_FILL),(Q!==Ce||ce!==le)&&(s.polygonOffset(Ce,le),Q=Ce,ce=le)):we(s.POLYGON_OFFSET_FILL)}function je(W){W?xe(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function L(W){W===void 0&&(W=s.TEXTURE0+de-1),ue!==W&&(s.activeTexture(W),ue=W)}function T(W,Ce,le){le===void 0&&(ue===null?le=s.TEXTURE0+de-1:le=ue);let pe=ae[le];pe===void 0&&(pe={type:void 0,texture:void 0},ae[le]=pe),(pe.type!==W||pe.texture!==Ce)&&(ue!==le&&(s.activeTexture(le),ue=le),s.bindTexture(W,Ce||Ee[W]),pe.type=W,pe.texture=Ce)}function te(){const W=ae[ue];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function he(){try{s.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ve(){try{s.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{s.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ve(){try{s.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ae(){try{s.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ze(){try{s.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ke(){try{s.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ye(){try{s.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Fe(){try{s.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function et(){try{s.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function tt(W){De.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),De.copy(W))}function Oe(W){ie.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),ie.copy(W))}function ft(W,Ce){let le=m.get(Ce);le===void 0&&(le=new WeakMap,m.set(Ce,le));let pe=le.get(W);pe===void 0&&(pe=s.getUniformBlockIndex(Ce,W.name),le.set(W,pe))}function rt(W,Ce){const pe=m.get(Ce).get(W);h.get(Ce)!==pe&&(s.uniformBlockBinding(Ce,pe,W.__bindingPointIndex),h.set(Ce,pe))}function wt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},ue=null,ae={},x={},_=new WeakMap,S=[],w=null,R=!1,y=null,v=null,U=null,N=null,P=null,G=null,O=null,F=new _t(0,0,0),j=0,b=!1,C=null,z=null,q=null,Q=null,ce=null,De.set(0,0,s.canvas.width,s.canvas.height),ie.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:xe,disable:we,bindFramebuffer:Xe,drawBuffers:Ge,useProgram:Dt,setBlending:B,setMaterial:En,setFlipSided:mt,setCullFace:dt,setLineWidth:Ye,setPolygonOffset:At,setScissorTest:je,activeTexture:L,bindTexture:T,unbindTexture:te,compressedTexImage2D:he,compressedTexImage3D:ve,texImage2D:Fe,texImage3D:et,updateUBOMapping:ft,uniformBlockBinding:rt,texStorage2D:Ke,texStorage3D:ye,texSubImage2D:fe,texSubImage3D:Ve,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Ze,scissor:tt,viewport:Oe,reset:wt}}function uM(s,e,n,r,a,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ot,g=new WeakMap;let x;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(L,T){return S?new OffscreenCanvas(L,T):qo("canvas")}function R(L,T,te){let he=1;const ve=je(L);if((ve.width>te||ve.height>te)&&(he=te/Math.max(ve.width,ve.height)),he<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const fe=Math.floor(he*ve.width),Ve=Math.floor(he*ve.height);x===void 0&&(x=w(fe,Ve));const Ae=T?w(fe,Ve):x;return Ae.width=fe,Ae.height=Ve,Ae.getContext("2d").drawImage(L,0,0,fe,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+fe+"x"+Ve+")."),Ae}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),L;return L}function y(L){return L.generateMipmaps}function v(L){s.generateMipmap(L)}function U(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(L,T,te,he,ve=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let fe=T;if(T===s.RED&&(te===s.FLOAT&&(fe=s.R32F),te===s.HALF_FLOAT&&(fe=s.R16F),te===s.UNSIGNED_BYTE&&(fe=s.R8)),T===s.RED_INTEGER&&(te===s.UNSIGNED_BYTE&&(fe=s.R8UI),te===s.UNSIGNED_SHORT&&(fe=s.R16UI),te===s.UNSIGNED_INT&&(fe=s.R32UI),te===s.BYTE&&(fe=s.R8I),te===s.SHORT&&(fe=s.R16I),te===s.INT&&(fe=s.R32I)),T===s.RG&&(te===s.FLOAT&&(fe=s.RG32F),te===s.HALF_FLOAT&&(fe=s.RG16F),te===s.UNSIGNED_BYTE&&(fe=s.RG8)),T===s.RG_INTEGER&&(te===s.UNSIGNED_BYTE&&(fe=s.RG8UI),te===s.UNSIGNED_SHORT&&(fe=s.RG16UI),te===s.UNSIGNED_INT&&(fe=s.RG32UI),te===s.BYTE&&(fe=s.RG8I),te===s.SHORT&&(fe=s.RG16I),te===s.INT&&(fe=s.RG32I)),T===s.RGB_INTEGER&&(te===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),te===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),te===s.UNSIGNED_INT&&(fe=s.RGB32UI),te===s.BYTE&&(fe=s.RGB8I),te===s.SHORT&&(fe=s.RGB16I),te===s.INT&&(fe=s.RGB32I)),T===s.RGBA_INTEGER&&(te===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),te===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),te===s.UNSIGNED_INT&&(fe=s.RGBA32UI),te===s.BYTE&&(fe=s.RGBA8I),te===s.SHORT&&(fe=s.RGBA16I),te===s.INT&&(fe=s.RGBA32I)),T===s.RGB&&te===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),T===s.RGBA){const Ve=ve?Hl:Tt.getTransfer(he);te===s.FLOAT&&(fe=s.RGBA32F),te===s.HALF_FLOAT&&(fe=s.RGBA16F),te===s.UNSIGNED_BYTE&&(fe=Ve===Rt?s.SRGB8_ALPHA8:s.RGBA8),te===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),te===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function P(L,T){let te;return L?T===null||T===is||T===Wo?te=s.DEPTH24_STENCIL8:T===Gi?te=s.DEPTH32F_STENCIL8:T===jo&&(te=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===is||T===Wo?te=s.DEPTH_COMPONENT24:T===Gi?te=s.DEPTH_COMPONENT32F:T===jo&&(te=s.DEPTH_COMPONENT16),te}function G(L,T){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==fi&&L.minFilter!==yi?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function O(L){const T=L.target;T.removeEventListener("dispose",O),j(T),T.isVideoTexture&&g.delete(T)}function F(L){const T=L.target;T.removeEventListener("dispose",F),C(T)}function j(L){const T=r.get(L);if(T.__webglInit===void 0)return;const te=L.source,he=_.get(te);if(he){const ve=he[T.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&b(L),Object.keys(he).length===0&&_.delete(te)}r.remove(L)}function b(L){const T=r.get(L);s.deleteTexture(T.__webglTexture);const te=L.source,he=_.get(te);delete he[T.__cacheKey],u.memory.textures--}function C(L){const T=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(T.__webglFramebuffer[he]))for(let ve=0;ve<T.__webglFramebuffer[he].length;ve++)s.deleteFramebuffer(T.__webglFramebuffer[he][ve]);else s.deleteFramebuffer(T.__webglFramebuffer[he]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[he])}else{if(Array.isArray(T.__webglFramebuffer))for(let he=0;he<T.__webglFramebuffer.length;he++)s.deleteFramebuffer(T.__webglFramebuffer[he]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let he=0;he<T.__webglColorRenderbuffer.length;he++)T.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[he]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const te=L.textures;for(let he=0,ve=te.length;he<ve;he++){const fe=r.get(te[he]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),u.memory.textures--),r.remove(te[he])}r.remove(L)}let z=0;function q(){z=0}function Q(){const L=z;return L>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),z+=1,L}function ce(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function de(L,T){const te=r.get(L);if(L.isVideoTexture&&Ye(L),L.isRenderTargetTexture===!1&&L.version>0&&te.__version!==L.version){const he=L.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(te,L,T);return}}n.bindTexture(s.TEXTURE_2D,te.__webglTexture,s.TEXTURE0+T)}function $(L,T){const te=r.get(L);if(L.version>0&&te.__version!==L.version){ie(te,L,T);return}n.bindTexture(s.TEXTURE_2D_ARRAY,te.__webglTexture,s.TEXTURE0+T)}function ne(L,T){const te=r.get(L);if(L.version>0&&te.__version!==L.version){ie(te,L,T);return}n.bindTexture(s.TEXTURE_3D,te.__webglTexture,s.TEXTURE0+T)}function H(L,T){const te=r.get(L);if(L.version>0&&te.__version!==L.version){me(te,L,T);return}n.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture,s.TEXTURE0+T)}const ue={[gd]:s.REPEAT,[Jr]:s.CLAMP_TO_EDGE,[_d]:s.MIRRORED_REPEAT},ae={[fi]:s.NEAREST,[Ov]:s.NEAREST_MIPMAP_NEAREST,[ll]:s.NEAREST_MIPMAP_LINEAR,[yi]:s.LINEAR,[Ru]:s.LINEAR_MIPMAP_NEAREST,[es]:s.LINEAR_MIPMAP_LINEAR},I={[Hv]:s.NEVER,[Yv]:s.ALWAYS,[Vv]:s.LESS,[u0]:s.LEQUAL,[Gv]:s.EQUAL,[Xv]:s.GEQUAL,[jv]:s.GREATER,[Wv]:s.NOTEQUAL};function se(L,T){if(T.type===Gi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===yi||T.magFilter===Ru||T.magFilter===ll||T.magFilter===es||T.minFilter===yi||T.minFilter===Ru||T.minFilter===ll||T.minFilter===es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,ue[T.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,ue[T.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,ue[T.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,ae[T.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,ae[T.minFilter]),T.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,I[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===fi||T.minFilter!==ll&&T.minFilter!==es||T.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function De(L,T){let te=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",O));const he=T.source;let ve=_.get(he);ve===void 0&&(ve={},_.set(he,ve));const fe=ce(T);if(fe!==L.__cacheKey){ve[fe]===void 0&&(ve[fe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,te=!0),ve[fe].usedTimes++;const Ve=ve[L.__cacheKey];Ve!==void 0&&(ve[L.__cacheKey].usedTimes--,Ve.usedTimes===0&&b(T)),L.__cacheKey=fe,L.__webglTexture=ve[fe].texture}return te}function ie(L,T,te){let he=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(he=s.TEXTURE_3D);const ve=De(L,T),fe=T.source;n.bindTexture(he,L.__webglTexture,s.TEXTURE0+te);const Ve=r.get(fe);if(fe.version!==Ve.__version||ve===!0){n.activeTexture(s.TEXTURE0+te);const Ae=Tt.getPrimaries(Tt.workingColorSpace),Ze=T.colorSpace===Sr?null:Tt.getPrimaries(T.colorSpace),Ke=T.colorSpace===Sr||Ae===Ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let ye=R(T.image,!1,a.maxTextureSize);ye=At(T,ye);const Fe=l.convert(T.format,T.colorSpace),et=l.convert(T.type);let tt=N(T.internalFormat,Fe,et,T.colorSpace,T.isVideoTexture);se(he,T);let Oe;const ft=T.mipmaps,rt=T.isVideoTexture!==!0,wt=Ve.__version===void 0||ve===!0,W=fe.dataReady,Ce=G(T,ye);if(T.isDepthTexture)tt=P(T.format===Yo,T.type),wt&&(rt?n.texStorage2D(s.TEXTURE_2D,1,tt,ye.width,ye.height):n.texImage2D(s.TEXTURE_2D,0,tt,ye.width,ye.height,0,Fe,et,null));else if(T.isDataTexture)if(ft.length>0){rt&&wt&&n.texStorage2D(s.TEXTURE_2D,Ce,tt,ft[0].width,ft[0].height);for(let le=0,pe=ft.length;le<pe;le++)Oe=ft[le],rt?W&&n.texSubImage2D(s.TEXTURE_2D,le,0,0,Oe.width,Oe.height,Fe,et,Oe.data):n.texImage2D(s.TEXTURE_2D,le,tt,Oe.width,Oe.height,0,Fe,et,Oe.data);T.generateMipmaps=!1}else rt?(wt&&n.texStorage2D(s.TEXTURE_2D,Ce,tt,ye.width,ye.height),W&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,ye.width,ye.height,Fe,et,ye.data)):n.texImage2D(s.TEXTURE_2D,0,tt,ye.width,ye.height,0,Fe,et,ye.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){rt&&wt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,tt,ft[0].width,ft[0].height,ye.depth);for(let le=0,pe=ft.length;le<pe;le++)if(Oe=ft[le],T.format!==di)if(Fe!==null)if(rt){if(W)if(T.layerUpdates.size>0){const Le=xm(Oe.width,Oe.height,T.format,T.type);for(const be of T.layerUpdates){const st=Oe.data.subarray(be*Le/Oe.data.BYTES_PER_ELEMENT,(be+1)*Le/Oe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,be,Oe.width,Oe.height,1,Fe,st)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,0,Oe.width,Oe.height,ye.depth,Fe,Oe.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,le,tt,Oe.width,Oe.height,ye.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?W&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,0,Oe.width,Oe.height,ye.depth,Fe,et,Oe.data):n.texImage3D(s.TEXTURE_2D_ARRAY,le,tt,Oe.width,Oe.height,ye.depth,0,Fe,et,Oe.data)}else{rt&&wt&&n.texStorage2D(s.TEXTURE_2D,Ce,tt,ft[0].width,ft[0].height);for(let le=0,pe=ft.length;le<pe;le++)Oe=ft[le],T.format!==di?Fe!==null?rt?W&&n.compressedTexSubImage2D(s.TEXTURE_2D,le,0,0,Oe.width,Oe.height,Fe,Oe.data):n.compressedTexImage2D(s.TEXTURE_2D,le,tt,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?W&&n.texSubImage2D(s.TEXTURE_2D,le,0,0,Oe.width,Oe.height,Fe,et,Oe.data):n.texImage2D(s.TEXTURE_2D,le,tt,Oe.width,Oe.height,0,Fe,et,Oe.data)}else if(T.isDataArrayTexture)if(rt){if(wt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,tt,ye.width,ye.height,ye.depth),W)if(T.layerUpdates.size>0){const le=xm(ye.width,ye.height,T.format,T.type);for(const pe of T.layerUpdates){const Le=ye.data.subarray(pe*le/ye.data.BYTES_PER_ELEMENT,(pe+1)*le/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,ye.width,ye.height,1,Fe,et,Le)}T.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Fe,et,ye.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,tt,ye.width,ye.height,ye.depth,0,Fe,et,ye.data);else if(T.isData3DTexture)rt?(wt&&n.texStorage3D(s.TEXTURE_3D,Ce,tt,ye.width,ye.height,ye.depth),W&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Fe,et,ye.data)):n.texImage3D(s.TEXTURE_3D,0,tt,ye.width,ye.height,ye.depth,0,Fe,et,ye.data);else if(T.isFramebufferTexture){if(wt)if(rt)n.texStorage2D(s.TEXTURE_2D,Ce,tt,ye.width,ye.height);else{let le=ye.width,pe=ye.height;for(let Le=0;Le<Ce;Le++)n.texImage2D(s.TEXTURE_2D,Le,tt,le,pe,0,Fe,et,null),le>>=1,pe>>=1}}else if(ft.length>0){if(rt&&wt){const le=je(ft[0]);n.texStorage2D(s.TEXTURE_2D,Ce,tt,le.width,le.height)}for(let le=0,pe=ft.length;le<pe;le++)Oe=ft[le],rt?W&&n.texSubImage2D(s.TEXTURE_2D,le,0,0,Fe,et,Oe):n.texImage2D(s.TEXTURE_2D,le,tt,Fe,et,Oe);T.generateMipmaps=!1}else if(rt){if(wt){const le=je(ye);n.texStorage2D(s.TEXTURE_2D,Ce,tt,le.width,le.height)}W&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Fe,et,ye)}else n.texImage2D(s.TEXTURE_2D,0,tt,Fe,et,ye);y(T)&&v(he),Ve.__version=fe.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function me(L,T,te){if(T.image.length!==6)return;const he=De(L,T),ve=T.source;n.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+te);const fe=r.get(ve);if(ve.version!==fe.__version||he===!0){n.activeTexture(s.TEXTURE0+te);const Ve=Tt.getPrimaries(Tt.workingColorSpace),Ae=T.colorSpace===Sr?null:Tt.getPrimaries(T.colorSpace),Ze=T.colorSpace===Sr||Ve===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);const Ke=T.isCompressedTexture||T.image[0].isCompressedTexture,ye=T.image[0]&&T.image[0].isDataTexture,Fe=[];for(let pe=0;pe<6;pe++)!Ke&&!ye?Fe[pe]=R(T.image[pe],!0,a.maxCubemapSize):Fe[pe]=ye?T.image[pe].image:T.image[pe],Fe[pe]=At(T,Fe[pe]);const et=Fe[0],tt=l.convert(T.format,T.colorSpace),Oe=l.convert(T.type),ft=N(T.internalFormat,tt,Oe,T.colorSpace),rt=T.isVideoTexture!==!0,wt=fe.__version===void 0||he===!0,W=ve.dataReady;let Ce=G(T,et);se(s.TEXTURE_CUBE_MAP,T);let le;if(Ke){rt&&wt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,ft,et.width,et.height);for(let pe=0;pe<6;pe++){le=Fe[pe].mipmaps;for(let Le=0;Le<le.length;Le++){const be=le[Le];T.format!==di?tt!==null?rt?W&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,be.width,be.height,tt,be.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,ft,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,be.width,be.height,tt,Oe,be.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,ft,be.width,be.height,0,tt,Oe,be.data)}}}else{if(le=T.mipmaps,rt&&wt){le.length>0&&Ce++;const pe=je(Fe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,ft,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(ye){rt?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Fe[pe].width,Fe[pe].height,tt,Oe,Fe[pe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,Fe[pe].width,Fe[pe].height,0,tt,Oe,Fe[pe].data);for(let Le=0;Le<le.length;Le++){const st=le[Le].image[pe].image;rt?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,st.width,st.height,tt,Oe,st.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,ft,st.width,st.height,0,tt,Oe,st.data)}}else{rt?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,tt,Oe,Fe[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,tt,Oe,Fe[pe]);for(let Le=0;Le<le.length;Le++){const be=le[Le];rt?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,tt,Oe,be.image[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,ft,tt,Oe,be.image[pe])}}}y(T)&&v(s.TEXTURE_CUBE_MAP),fe.__version=ve.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Ee(L,T,te,he,ve,fe){const Ve=l.convert(te.format,te.colorSpace),Ae=l.convert(te.type),Ze=N(te.internalFormat,Ve,Ae,te.colorSpace),Ke=r.get(T),ye=r.get(te);if(ye.__renderTarget=T,!Ke.__hasExternalTextures){const Fe=Math.max(1,T.width>>fe),et=Math.max(1,T.height>>fe);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?n.texImage3D(ve,fe,Ze,Fe,et,T.depth,0,Ve,Ae,null):n.texImage2D(ve,fe,Ze,Fe,et,0,Ve,Ae,null)}n.bindFramebuffer(s.FRAMEBUFFER,L),dt(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,ve,ye.__webglTexture,0,mt(T)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,ve,ye.__webglTexture,fe),n.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(L,T,te){if(s.bindRenderbuffer(s.RENDERBUFFER,L),T.depthBuffer){const he=T.depthTexture,ve=he&&he.isDepthTexture?he.type:null,fe=P(T.stencilBuffer,ve),Ve=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=mt(T);dt(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,fe,T.width,T.height):te?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,fe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,fe,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ve,s.RENDERBUFFER,L)}else{const he=T.textures;for(let ve=0;ve<he.length;ve++){const fe=he[ve],Ve=l.convert(fe.format,fe.colorSpace),Ae=l.convert(fe.type),Ze=N(fe.internalFormat,Ve,Ae,fe.colorSpace),Ke=mt(T);te&&dt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,Ze,T.width,T.height):dt(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ke,Ze,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ze,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function we(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=r.get(T.depthTexture);he.__renderTarget=T,(!he.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),de(T.depthTexture,0);const ve=he.__webglTexture,fe=mt(T);if(T.depthTexture.format===Xo)dt(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0);else if(T.depthTexture.format===Yo)dt(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Xe(L){const T=r.get(L),te=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const he=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),he){const ve=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,he.removeEventListener("dispose",ve)};he.addEventListener("dispose",ve),T.__depthDisposeCallback=ve}T.__boundDepthTexture=he}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");const he=L.texture.mipmaps;he&&he.length>0?we(T.__webglFramebuffer[0],L):we(T.__webglFramebuffer,L)}else if(te){T.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[he]),T.__webglDepthbuffer[he]===void 0)T.__webglDepthbuffer[he]=s.createRenderbuffer(),xe(T.__webglDepthbuffer[he],L,!1);else{const ve=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,fe)}}else{const he=L.texture.mipmaps;if(he&&he.length>0?n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),xe(T.__webglDepthbuffer,L,!1);else{const ve=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,fe)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ge(L,T,te){const he=r.get(L);T!==void 0&&Ee(he.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),te!==void 0&&Xe(L)}function Dt(L){const T=L.texture,te=r.get(L),he=r.get(T);L.addEventListener("dispose",F);const ve=L.textures,fe=L.isWebGLCubeRenderTarget===!0,Ve=ve.length>1;if(Ve||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=T.version,u.memory.textures++),fe){te.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer[Ae]=[];for(let Ze=0;Ze<T.mipmaps.length;Ze++)te.__webglFramebuffer[Ae][Ze]=s.createFramebuffer()}else te.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer=[];for(let Ae=0;Ae<T.mipmaps.length;Ae++)te.__webglFramebuffer[Ae]=s.createFramebuffer()}else te.__webglFramebuffer=s.createFramebuffer();if(Ve)for(let Ae=0,Ze=ve.length;Ae<Ze;Ae++){const Ke=r.get(ve[Ae]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=s.createTexture(),u.memory.textures++)}if(L.samples>0&&dt(L)===!1){te.__webglMultisampledFramebuffer=s.createFramebuffer(),te.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ve.length;Ae++){const Ze=ve[Ae];te.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,te.__webglColorRenderbuffer[Ae]);const Ke=l.convert(Ze.format,Ze.colorSpace),ye=l.convert(Ze.type),Fe=N(Ze.internalFormat,Ke,ye,Ze.colorSpace,L.isXRRenderTarget===!0),et=mt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,et,Fe,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,te.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(te.__webglDepthRenderbuffer=s.createRenderbuffer(),xe(te.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){n.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),se(s.TEXTURE_CUBE_MAP,T);for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ze=0;Ze<T.mipmaps.length;Ze++)Ee(te.__webglFramebuffer[Ae][Ze],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ze);else Ee(te.__webglFramebuffer[Ae],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);y(T)&&v(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ve){for(let Ae=0,Ze=ve.length;Ae<Ze;Ae++){const Ke=ve[Ae],ye=r.get(Ke);n.bindTexture(s.TEXTURE_2D,ye.__webglTexture),se(s.TEXTURE_2D,Ke),Ee(te.__webglFramebuffer,L,Ke,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,0),y(Ke)&&v(s.TEXTURE_2D)}n.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ae=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ae,he.__webglTexture),se(Ae,T),T.mipmaps&&T.mipmaps.length>0)for(let Ze=0;Ze<T.mipmaps.length;Ze++)Ee(te.__webglFramebuffer[Ze],L,T,s.COLOR_ATTACHMENT0,Ae,Ze);else Ee(te.__webglFramebuffer,L,T,s.COLOR_ATTACHMENT0,Ae,0);y(T)&&v(Ae),n.unbindTexture()}L.depthBuffer&&Xe(L)}function Nt(L){const T=L.textures;for(let te=0,he=T.length;te<he;te++){const ve=T[te];if(y(ve)){const fe=U(L),Ve=r.get(ve).__webglTexture;n.bindTexture(fe,Ve),v(fe),n.unbindTexture()}}}const ut=[],B=[];function En(L){if(L.samples>0){if(dt(L)===!1){const T=L.textures,te=L.width,he=L.height;let ve=s.COLOR_BUFFER_BIT;const fe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ve=r.get(L),Ae=T.length>1;if(Ae)for(let Ke=0;Ke<T.length;Ke++)n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ke,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ke,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer);const Ze=L.texture.mipmaps;Ze&&Ze.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Ke=0;Ke<T.length;Ke++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ke]);const ye=r.get(T[Ke]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ye,0)}s.blitFramebuffer(0,0,te,he,0,0,te,he,ve,s.NEAREST),h===!0&&(ut.length=0,B.length=0,ut.push(s.COLOR_ATTACHMENT0+Ke),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ut.push(fe),B.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,B)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ut))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let Ke=0;Ke<T.length;Ke++){n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ke,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ke]);const ye=r.get(T[Ke]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ke,s.TEXTURE_2D,ye,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&h){const T=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function mt(L){return Math.min(a.maxSamples,L.samples)}function dt(L){const T=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ye(L){const T=u.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function At(L,T){const te=L.colorSpace,he=L.format,ve=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||te!==Js&&te!==Sr&&(Tt.getTransfer(te)===Rt?(he!==di||ve!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),T}function je(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=Q,this.resetTextureUnits=q,this.setTexture2D=de,this.setTexture2DArray=$,this.setTexture3D=ne,this.setTextureCube=H,this.rebindTextures=Ge,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=En,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=dt}function dM(s,e){function n(r,a=Sr){let l;const u=Tt.getTransfer(a);if(r===Mi)return s.UNSIGNED_BYTE;if(r===Kd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Zd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===i0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===t0)return s.BYTE;if(r===n0)return s.SHORT;if(r===jo)return s.UNSIGNED_SHORT;if(r===qd)return s.INT;if(r===is)return s.UNSIGNED_INT;if(r===Gi)return s.FLOAT;if(r===Ko)return s.HALF_FLOAT;if(r===r0)return s.ALPHA;if(r===s0)return s.RGB;if(r===di)return s.RGBA;if(r===Xo)return s.DEPTH_COMPONENT;if(r===Yo)return s.DEPTH_STENCIL;if(r===o0)return s.RED;if(r===Qd)return s.RED_INTEGER;if(r===a0)return s.RG;if(r===$d)return s.RG_INTEGER;if(r===Jd)return s.RGBA_INTEGER;if(r===Ll||r===Dl||r===Nl||r===Il)if(u===Rt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Ll)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Dl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Nl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Il)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Ll)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Dl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Nl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Il)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===vd||r===xd||r===yd||r===Sd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===vd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===yd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Sd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Md||r===Ed||r===Td)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Md||r===Ed)return u===Rt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Td)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===wd||r===Ad||r===Cd||r===Rd||r===Pd||r===bd||r===Ld||r===Dd||r===Nd||r===Id||r===Ud||r===Fd||r===Od||r===zd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===wd)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ad)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Cd)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Rd)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Pd)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===bd)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ld)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Dd)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Nd)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Id)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ud)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Fd)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Od)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===zd)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ul||r===kd||r===Bd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Ul)return u===Rt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===kd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Bd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===l0||r===Hd||r===Vd||r===Gd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Ul)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Hd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Vd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Gd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Wo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const fM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class pM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new kn,l=e.properties.get(a);l.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Cr({vertexShader:fM,fragmentShader:hM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new cn(new jl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mM extends os{constructor(e,n){super();const r=this;let a=null,l=1,u=null,f="local-floor",h=1,m=null,g=null,x=null,_=null,S=null,w=null;const R=new pM,y=n.getContextAttributes();let v=null,U=null;const N=[],P=[],G=new ot;let O=null;const F=new Yn;F.viewport=new Wt;const j=new Yn;j.viewport=new Wt;const b=[F,j],C=new U1;let z=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let me=N[ie];return me===void 0&&(me=new Ku,N[ie]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ie){let me=N[ie];return me===void 0&&(me=new Ku,N[ie]=me),me.getGripSpace()},this.getHand=function(ie){let me=N[ie];return me===void 0&&(me=new Ku,N[ie]=me),me.getHandSpace()};function Q(ie){const me=P.indexOf(ie.inputSource);if(me===-1)return;const Ee=N[me];Ee!==void 0&&(Ee.update(ie.inputSource,ie.frame,m||u),Ee.dispatchEvent({type:ie.type,data:ie.inputSource}))}function ce(){a.removeEventListener("select",Q),a.removeEventListener("selectstart",Q),a.removeEventListener("selectend",Q),a.removeEventListener("squeeze",Q),a.removeEventListener("squeezestart",Q),a.removeEventListener("squeezeend",Q),a.removeEventListener("end",ce),a.removeEventListener("inputsourceschange",de);for(let ie=0;ie<N.length;ie++){const me=P[ie];me!==null&&(P[ie]=null,N[ie].disconnect(me))}z=null,q=null,R.reset(),e.setRenderTarget(v),S=null,_=null,x=null,a=null,U=null,De.stop(),r.isPresenting=!1,e.setPixelRatio(O),e.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){l=ie,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){f=ie,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(ie){m=ie},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return x},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(ie){if(a=ie,a!==null){if(v=e.getRenderTarget(),a.addEventListener("select",Q),a.addEventListener("selectstart",Q),a.addEventListener("selectend",Q),a.addEventListener("squeeze",Q),a.addEventListener("squeezestart",Q),a.addEventListener("squeezeend",Q),a.addEventListener("end",ce),a.addEventListener("inputsourceschange",de),y.xrCompatible!==!0&&await n.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,xe=null,we=null;y.depth&&(we=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ee=y.stencil?Yo:Xo,xe=y.stencil?Wo:is);const Xe={colorFormat:n.RGBA8,depthFormat:we,scaleFactor:l};x=new XRWebGLBinding(a,n),_=x.createProjectionLayer(Xe),a.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),U=new rs(_.textureWidth,_.textureHeight,{format:di,type:Mi,depthTexture:new M0(_.textureWidth,_.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Ee={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,n,Ee),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new rs(S.framebufferWidth,S.framebufferHeight,{format:di,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(h),m=null,u=await a.requestReferenceSpace(f),De.setContext(a),De.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function de(ie){for(let me=0;me<ie.removed.length;me++){const Ee=ie.removed[me],xe=P.indexOf(Ee);xe>=0&&(P[xe]=null,N[xe].disconnect(Ee))}for(let me=0;me<ie.added.length;me++){const Ee=ie.added[me];let xe=P.indexOf(Ee);if(xe===-1){for(let Xe=0;Xe<N.length;Xe++)if(Xe>=P.length){P.push(Ee),xe=Xe;break}else if(P[Xe]===null){P[Xe]=Ee,xe=Xe;break}if(xe===-1)break}const we=N[xe];we&&we.connect(Ee)}}const $=new ee,ne=new ee;function H(ie,me,Ee){$.setFromMatrixPosition(me.matrixWorld),ne.setFromMatrixPosition(Ee.matrixWorld);const xe=$.distanceTo(ne),we=me.projectionMatrix.elements,Xe=Ee.projectionMatrix.elements,Ge=we[14]/(we[10]-1),Dt=we[14]/(we[10]+1),Nt=(we[9]+1)/we[5],ut=(we[9]-1)/we[5],B=(we[8]-1)/we[0],En=(Xe[8]+1)/Xe[0],mt=Ge*B,dt=Ge*En,Ye=xe/(-B+En),At=Ye*-B;if(me.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(At),ie.translateZ(Ye),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),we[10]===-1)ie.projectionMatrix.copy(me.projectionMatrix),ie.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const je=Ge+Ye,L=Dt+Ye,T=mt-At,te=dt+(xe-At),he=Nt*Dt/L*je,ve=ut*Dt/L*je;ie.projectionMatrix.makePerspective(T,te,he,ve,je,L),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function ue(ie,me){me===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(me.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(a===null)return;let me=ie.near,Ee=ie.far;R.texture!==null&&(R.depthNear>0&&(me=R.depthNear),R.depthFar>0&&(Ee=R.depthFar)),C.near=j.near=F.near=me,C.far=j.far=F.far=Ee,(z!==C.near||q!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),z=C.near,q=C.far),F.layers.mask=ie.layers.mask|2,j.layers.mask=ie.layers.mask|4,C.layers.mask=F.layers.mask|j.layers.mask;const xe=ie.parent,we=C.cameras;ue(C,xe);for(let Xe=0;Xe<we.length;Xe++)ue(we[Xe],xe);we.length===2?H(C,F,j):C.projectionMatrix.copy(F.projectionMatrix),ae(ie,C,xe)};function ae(ie,me,Ee){Ee===null?ie.matrix.copy(me.matrixWorld):(ie.matrix.copy(Ee.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(me.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(me.projectionMatrix),ie.projectionMatrixInverse.copy(me.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=jd*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(_===null&&S===null))return h},this.setFoveation=function(ie){h=ie,_!==null&&(_.fixedFoveation=ie),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ie)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(C)};let I=null;function se(ie,me){if(g=me.getViewerPose(m||u),w=me,g!==null){const Ee=g.views;S!==null&&(e.setRenderTargetFramebuffer(U,S.framebuffer),e.setRenderTarget(U));let xe=!1;Ee.length!==C.cameras.length&&(C.cameras.length=0,xe=!0);for(let Ge=0;Ge<Ee.length;Ge++){const Dt=Ee[Ge];let Nt=null;if(S!==null)Nt=S.getViewport(Dt);else{const B=x.getViewSubImage(_,Dt);Nt=B.viewport,Ge===0&&(e.setRenderTargetTextures(U,B.colorTexture,B.depthStencilTexture),e.setRenderTarget(U))}let ut=b[Ge];ut===void 0&&(ut=new Yn,ut.layers.enable(Ge),ut.viewport=new Wt,b[Ge]=ut),ut.matrix.fromArray(Dt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(Dt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),Ge===0&&(C.matrix.copy(ut.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),xe===!0&&C.cameras.push(ut)}const we=a.enabledFeatures;if(we&&we.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&x){const Ge=x.getDepthInformation(Ee[0]);Ge&&Ge.isValid&&Ge.texture&&R.init(e,Ge,a.renderState)}}for(let Ee=0;Ee<N.length;Ee++){const xe=P[Ee],we=N[Ee];xe!==null&&we!==void 0&&we.update(xe,me,m||u)}I&&I(ie,me),me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:me}),w=null}const De=new C0;De.setAnimationLoop(se),this.setAnimationLoop=function(ie){I=ie},this.dispose=function(){}}}const Yr=new Ei,gM=new Xt;function _M(s,e){function n(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,x0(s)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function a(y,v,U,N,P){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(y,v):v.isMeshToonMaterial?(l(y,v),x(y,v)):v.isMeshPhongMaterial?(l(y,v),g(y,v)):v.isMeshStandardMaterial?(l(y,v),_(y,v),v.isMeshPhysicalMaterial&&S(y,v,P)):v.isMeshMatcapMaterial?(l(y,v),w(y,v)):v.isMeshDepthMaterial?l(y,v):v.isMeshDistanceMaterial?(l(y,v),R(y,v)):v.isMeshNormalMaterial?l(y,v):v.isLineBasicMaterial?(u(y,v),v.isLineDashedMaterial&&f(y,v)):v.isPointsMaterial?h(y,v,U,N):v.isSpriteMaterial?m(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,n(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===zn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,n(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===zn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,n(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,n(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const U=e.get(v),N=U.envMap,P=U.envMapRotation;N&&(y.envMap.value=N,Yr.copy(P),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),y.envMapRotation.value.setFromMatrix4(gM.makeRotationFromEuler(Yr)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,y.aoMapTransform))}function u(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform))}function f(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function h(y,v,U,N){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*U,y.scale.value=N*.5,v.map&&(y.map.value=v.map,n(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function m(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function g(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function x(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function _(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function S(y,v,U){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===zn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,v){v.matcap&&(y.matcap.value=v.matcap)}function R(y,v){const U=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function vM(s,e,n,r){let a={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(U,N){const P=N.program;r.uniformBlockBinding(U,P)}function m(U,N){let P=a[U.id];P===void 0&&(w(U),P=g(U),a[U.id]=P,U.addEventListener("dispose",y));const G=N.program;r.updateUBOMapping(U,G);const O=e.render.frame;l[U.id]!==O&&(_(U),l[U.id]=O)}function g(U){const N=x();U.__bindingPointIndex=N;const P=s.createBuffer(),G=U.__size,O=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,G,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,P),P}function x(){for(let U=0;U<f;U++)if(u.indexOf(U)===-1)return u.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(U){const N=a[U.id],P=U.uniforms,G=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let O=0,F=P.length;O<F;O++){const j=Array.isArray(P[O])?P[O]:[P[O]];for(let b=0,C=j.length;b<C;b++){const z=j[b];if(S(z,O,b,G)===!0){const q=z.__offset,Q=Array.isArray(z.value)?z.value:[z.value];let ce=0;for(let de=0;de<Q.length;de++){const $=Q[de],ne=R($);typeof $=="number"||typeof $=="boolean"?(z.__data[0]=$,s.bufferSubData(s.UNIFORM_BUFFER,q+ce,z.__data)):$.isMatrix3?(z.__data[0]=$.elements[0],z.__data[1]=$.elements[1],z.__data[2]=$.elements[2],z.__data[3]=0,z.__data[4]=$.elements[3],z.__data[5]=$.elements[4],z.__data[6]=$.elements[5],z.__data[7]=0,z.__data[8]=$.elements[6],z.__data[9]=$.elements[7],z.__data[10]=$.elements[8],z.__data[11]=0):($.toArray(z.__data,ce),ce+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,q,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(U,N,P,G){const O=U.value,F=N+"_"+P;if(G[F]===void 0)return typeof O=="number"||typeof O=="boolean"?G[F]=O:G[F]=O.clone(),!0;{const j=G[F];if(typeof O=="number"||typeof O=="boolean"){if(j!==O)return G[F]=O,!0}else if(j.equals(O)===!1)return j.copy(O),!0}return!1}function w(U){const N=U.uniforms;let P=0;const G=16;for(let F=0,j=N.length;F<j;F++){const b=Array.isArray(N[F])?N[F]:[N[F]];for(let C=0,z=b.length;C<z;C++){const q=b[C],Q=Array.isArray(q.value)?q.value:[q.value];for(let ce=0,de=Q.length;ce<de;ce++){const $=Q[ce],ne=R($),H=P%G,ue=H%ne.boundary,ae=H+ue;P+=ue,ae!==0&&G-ae<ne.storage&&(P+=G-ae),q.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=P,P+=ne.storage}}}const O=P%G;return O>0&&(P+=G-O),U.__size=P,U.__cache={},this}function R(U){const N={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(N.boundary=4,N.storage=4):U.isVector2?(N.boundary=8,N.storage=8):U.isVector3||U.isColor?(N.boundary=16,N.storage=12):U.isVector4?(N.boundary=16,N.storage=16):U.isMatrix3?(N.boundary=48,N.storage=48):U.isMatrix4?(N.boundary=64,N.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),N}function y(U){const N=U.target;N.removeEventListener("dispose",y);const P=u.indexOf(N.__bindingPointIndex);u.splice(P,1),s.deleteBuffer(a[N.id]),delete a[N.id],delete l[N.id]}function v(){for(const U in a)s.deleteBuffer(a[U]);u=[],a={},l={}}return{bind:h,update:m,dispose:v}}class D0{constructor(e={}){const{canvas:n=Zv(),context:r=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=u;const w=new Uint32Array(4),R=new Int32Array(4);let y=null,v=null;const U=[],N=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let G=!1;this._outputColorSpace=Xn;let O=0,F=0,j=null,b=-1,C=null;const z=new Wt,q=new Wt;let Q=null;const ce=new _t(0);let de=0,$=n.width,ne=n.height,H=1,ue=null,ae=null;const I=new Wt(0,0,$,ne),se=new Wt(0,0,$,ne);let De=!1;const ie=new rf;let me=!1,Ee=!1;const xe=new Xt,we=new Xt,Xe=new ee,Ge=new Wt,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function ut(){return j===null?H:1}let B=r;function En(A,X){return n.getContext(A,X)}try{const A={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Yd}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",Le,!1),n.addEventListener("webglcontextcreationerror",be,!1),B===null){const X="webgl2";if(B=En(X,A),B===null)throw En(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let mt,dt,Ye,At,je,L,T,te,he,ve,fe,Ve,Ae,Ze,Ke,ye,Fe,et,tt,Oe,ft,rt,wt,W;function Ce(){mt=new P2(B),mt.init(),rt=new dM(B,mt),dt=new M2(B,mt,e,rt),Ye=new cM(B,mt),dt.reverseDepthBuffer&&_&&Ye.buffers.depth.setReversed(!0),At=new D2(B),je=new ZS,L=new uM(B,mt,Ye,je,dt,rt,At),T=new T2(P),te=new R2(P),he=new z1(B),wt=new y2(B,he),ve=new b2(B,he,At,wt),fe=new I2(B,ve,he,At),tt=new N2(B,dt,L),ye=new E2(je),Ve=new KS(P,T,te,mt,dt,wt,ye),Ae=new _M(P,je),Ze=new $S,Ke=new rM(mt),et=new x2(P,T,te,Ye,fe,S,h),Fe=new aM(P,fe,dt),W=new vM(B,At,dt,Ye),Oe=new S2(B,mt,At),ft=new L2(B,mt,At),At.programs=Ve.programs,P.capabilities=dt,P.extensions=mt,P.properties=je,P.renderLists=Ze,P.shadowMap=Fe,P.state=Ye,P.info=At}Ce();const le=new mM(P,B);this.xr=le,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=mt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=mt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize($,ne,!1))},this.getSize=function(A){return A.set($,ne)},this.setSize=function(A,X,oe=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=A,ne=X,n.width=Math.floor(A*H),n.height=Math.floor(X*H),oe===!0&&(n.style.width=A+"px",n.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set($*H,ne*H).floor()},this.setDrawingBufferSize=function(A,X,oe){$=A,ne=X,H=oe,n.width=Math.floor(A*oe),n.height=Math.floor(X*oe),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy(I)},this.setViewport=function(A,X,oe,Z){A.isVector4?I.set(A.x,A.y,A.z,A.w):I.set(A,X,oe,Z),Ye.viewport(z.copy(I).multiplyScalar(H).round())},this.getScissor=function(A){return A.copy(se)},this.setScissor=function(A,X,oe,Z){A.isVector4?se.set(A.x,A.y,A.z,A.w):se.set(A,X,oe,Z),Ye.scissor(q.copy(se).multiplyScalar(H).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(A){Ye.setScissorTest(De=A)},this.setOpaqueSort=function(A){ue=A},this.setTransparentSort=function(A){ae=A},this.getClearColor=function(A){return A.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,oe=!0){let Z=0;if(A){let Y=!1;if(j!==null){const Me=j.texture.format;Y=Me===Jd||Me===$d||Me===Qd}if(Y){const Me=j.texture.type,Re=Me===Mi||Me===is||Me===jo||Me===Wo||Me===Kd||Me===Zd,Ne=et.getClearColor(),ze=et.getClearAlpha(),nt=Ne.r,Je=Ne.g,Be=Ne.b;Re?(w[0]=nt,w[1]=Je,w[2]=Be,w[3]=ze,B.clearBufferuiv(B.COLOR,0,w)):(R[0]=nt,R[1]=Je,R[2]=Be,R[3]=ze,B.clearBufferiv(B.COLOR,0,R))}else Z|=B.COLOR_BUFFER_BIT}X&&(Z|=B.DEPTH_BUFFER_BIT),oe&&(Z|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",Le,!1),n.removeEventListener("webglcontextcreationerror",be,!1),et.dispose(),Ze.dispose(),Ke.dispose(),je.dispose(),T.dispose(),te.dispose(),fe.dispose(),wt.dispose(),W.dispose(),Ve.dispose(),le.dispose(),le.removeEventListener("sessionstart",as),le.removeEventListener("sessionend",Xi),wi.stop()};function pe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const A=At.autoReset,X=Fe.enabled,oe=Fe.autoUpdate,Z=Fe.needsUpdate,Y=Fe.type;Ce(),At.autoReset=A,Fe.enabled=X,Fe.autoUpdate=oe,Fe.needsUpdate=Z,Fe.type=Y}function be(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function st(A){const X=A.target;X.removeEventListener("dispose",st),Ut(X)}function Ut(A){Zt(A),je.remove(A)}function Zt(A){const X=je.get(A).programs;X!==void 0&&(X.forEach(function(oe){Ve.releaseProgram(oe)}),A.isShaderMaterial&&Ve.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,oe,Z,Y,Me){X===null&&(X=Dt);const Re=Y.isMesh&&Y.matrixWorld.determinant()<0,Ne=ta(A,X,oe,Z,Y);Ye.setMaterial(Z,Re);let ze=oe.index,nt=1;if(Z.wireframe===!0){if(ze=ve.getWireframeAttribute(oe),ze===void 0)return;nt=2}const Je=oe.drawRange,Be=oe.attributes.position;let vt=Je.start*nt,at=(Je.start+Je.count)*nt;Me!==null&&(vt=Math.max(vt,Me.start*nt),at=Math.min(at,(Me.start+Me.count)*nt)),ze!==null?(vt=Math.max(vt,0),at=Math.min(at,ze.count)):Be!=null&&(vt=Math.max(vt,0),at=Math.min(at,Be.count));const Vt=at-vt;if(Vt<0||Vt===1/0)return;wt.setup(Y,Z,Ne,oe,ze);let zt,xt=Oe;if(ze!==null&&(zt=he.get(ze),xt=ft,xt.setIndex(zt)),Y.isMesh)Z.wireframe===!0?(Ye.setLineWidth(Z.wireframeLinewidth*ut()),xt.setMode(B.LINES)):xt.setMode(B.TRIANGLES);else if(Y.isLine){let qe=Z.linewidth;qe===void 0&&(qe=1),Ye.setLineWidth(qe*ut()),Y.isLineSegments?xt.setMode(B.LINES):Y.isLineLoop?xt.setMode(B.LINE_LOOP):xt.setMode(B.LINE_STRIP)}else Y.isPoints?xt.setMode(B.POINTS):Y.isSprite&&xt.setMode(B.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Ol("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))xt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const qe=Y._multiDrawStarts,Gt=Y._multiDrawCounts,gt=Y._multiDrawCount,hn=ze?he.get(ze).bytesPerElement:1,qi=je.get(Z).currentProgram.getUniforms();for(let wn=0;wn<gt;wn++)qi.setValue(B,"_gl_DrawID",wn),xt.render(qe[wn]/hn,Gt[wn])}else if(Y.isInstancedMesh)xt.renderInstances(vt,Vt,Y.count);else if(oe.isInstancedBufferGeometry){const qe=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Gt=Math.min(oe.instanceCount,qe);xt.renderInstances(vt,Vt,Gt)}else xt.render(vt,Vt)};function yt(A,X,oe){A.transparent===!0&&A.side===Vi&&A.forceSinglePass===!1?(A.side=zn,A.needsUpdate=!0,ls(A,X,oe),A.side=Ar,A.needsUpdate=!0,ls(A,X,oe),A.side=Vi):ls(A,X,oe)}this.compile=function(A,X,oe=null){oe===null&&(oe=A),v=Ke.get(oe),v.init(X),N.push(v),oe.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),A!==oe&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),v.setupLights();const Z=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Me=Y.material;if(Me)if(Array.isArray(Me))for(let Re=0;Re<Me.length;Re++){const Ne=Me[Re];yt(Ne,oe,Y),Z.add(Ne)}else yt(Me,oe,Y),Z.add(Me)}),v=N.pop(),Z},this.compileAsync=function(A,X,oe=null){const Z=this.compile(A,X,oe);return new Promise(Y=>{function Me(){if(Z.forEach(function(Re){je.get(Re).currentProgram.isReady()&&Z.delete(Re)}),Z.size===0){Y(A);return}setTimeout(Me,10)}mt.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Pn=null;function Tn(A){Pn&&Pn(A)}function as(){wi.stop()}function Xi(){wi.start()}const wi=new C0;wi.setAnimationLoop(Tn),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(A){Pn=A,le.setAnimationLoop(A),A===null?wi.stop():wi.start()},le.addEventListener("sessionstart",as),le.addEventListener("sessionend",Xi),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(X),X=le.getCamera()),A.isScene===!0&&A.onBeforeRender(P,A,X,j),v=Ke.get(A,N.length),v.init(X),N.push(v),we.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ie.setFromProjectionMatrix(we),Ee=this.localClippingEnabled,me=ye.init(this.clippingPlanes,Ee),y=Ze.get(A,U.length),y.init(),U.push(y),le.enabled===!0&&le.isPresenting===!0){const Me=P.xr.getDepthSensingMesh();Me!==null&&Ai(Me,X,-1/0,P.sortObjects)}Ai(A,X,0,P.sortObjects),y.finish(),P.sortObjects===!0&&y.sort(ue,ae),Nt=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Nt&&et.addToRenderList(y,A),this.info.render.frame++,me===!0&&ye.beginShadows();const oe=v.state.shadowsArray;Fe.render(oe,A,X),me===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=y.opaque,Y=y.transmissive;if(v.setupLights(),X.isArrayCamera){const Me=X.cameras;if(Y.length>0)for(let Re=0,Ne=Me.length;Re<Ne;Re++){const ze=Me[Re];Pr(Z,Y,A,ze)}Nt&&et.render(A);for(let Re=0,Ne=Me.length;Re<Ne;Re++){const ze=Me[Re];Rr(y,A,ze,ze.viewport)}}else Y.length>0&&Pr(Z,Y,A,X),Nt&&et.render(A),Rr(y,A,X);j!==null&&F===0&&(L.updateMultisampleRenderTarget(j),L.updateRenderTargetMipmap(j)),A.isScene===!0&&A.onAfterRender(P,A,X),wt.resetDefaultState(),b=-1,C=null,N.pop(),N.length>0?(v=N[N.length-1],me===!0&&ye.setGlobalState(P.clippingPlanes,v.state.camera)):v=null,U.pop(),U.length>0?y=U[U.length-1]:y=null};function Ai(A,X,oe,Z){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)oe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ie.intersectsSprite(A)){Z&&Ge.setFromMatrixPosition(A.matrixWorld).applyMatrix4(we);const Re=fe.update(A),Ne=A.material;Ne.visible&&y.push(A,Re,Ne,oe,Ge.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ie.intersectsObject(A))){const Re=fe.update(A),Ne=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ge.copy(A.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ge.copy(Re.boundingSphere.center)),Ge.applyMatrix4(A.matrixWorld).applyMatrix4(we)),Array.isArray(Ne)){const ze=Re.groups;for(let nt=0,Je=ze.length;nt<Je;nt++){const Be=ze[nt],vt=Ne[Be.materialIndex];vt&&vt.visible&&y.push(A,Re,vt,oe,Ge.z,Be)}}else Ne.visible&&y.push(A,Re,Ne,oe,Ge.z,null)}}const Me=A.children;for(let Re=0,Ne=Me.length;Re<Ne;Re++)Ai(Me[Re],X,oe,Z)}function Rr(A,X,oe,Z){const Y=A.opaque,Me=A.transmissive,Re=A.transparent;v.setupLightsView(oe),me===!0&&ye.setGlobalState(P.clippingPlanes,oe),Z&&Ye.viewport(z.copy(Z)),Y.length>0&&Yi(Y,X,oe),Me.length>0&&Yi(Me,X,oe),Re.length>0&&Yi(Re,X,oe),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Pr(A,X,oe,Z){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[Z.id]===void 0&&(v.state.transmissionRenderTarget[Z.id]=new rs(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?Ko:Mi,minFilter:es,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const Me=v.state.transmissionRenderTarget[Z.id],Re=Z.viewport||z;Me.setSize(Re.z*P.transmissionResolutionScale,Re.w*P.transmissionResolutionScale);const Ne=P.getRenderTarget();P.setRenderTarget(Me),P.getClearColor(ce),de=P.getClearAlpha(),de<1&&P.setClearColor(16777215,.5),P.clear(),Nt&&et.render(oe);const ze=P.toneMapping;P.toneMapping=wr;const nt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),v.setupLightsView(Z),me===!0&&ye.setGlobalState(P.clippingPlanes,Z),Yi(A,oe,Z),L.updateMultisampleRenderTarget(Me),L.updateRenderTargetMipmap(Me),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Be=0,vt=X.length;Be<vt;Be++){const at=X[Be],Vt=at.object,zt=at.geometry,xt=at.material,qe=at.group;if(xt.side===Vi&&Vt.layers.test(Z.layers)){const Gt=xt.side;xt.side=zn,xt.needsUpdate=!0,Jo(Vt,oe,Z,zt,xt,qe),xt.side=Gt,xt.needsUpdate=!0,Je=!0}}Je===!0&&(L.updateMultisampleRenderTarget(Me),L.updateRenderTargetMipmap(Me))}P.setRenderTarget(Ne),P.setClearColor(ce,de),nt!==void 0&&(Z.viewport=nt),P.toneMapping=ze}function Yi(A,X,oe){const Z=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Me=A.length;Y<Me;Y++){const Re=A[Y],Ne=Re.object,ze=Re.geometry,nt=Re.group;let Je=Re.material;Je.allowOverride===!0&&Z!==null&&(Je=Z),Ne.layers.test(oe.layers)&&Jo(Ne,X,oe,ze,Je,nt)}}function Jo(A,X,oe,Z,Y,Me){A.onBeforeRender(P,X,oe,Z,Y,Me),A.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(P,X,oe,Z,A,Me),Y.transparent===!0&&Y.side===Vi&&Y.forceSinglePass===!1?(Y.side=zn,Y.needsUpdate=!0,P.renderBufferDirect(oe,X,Z,Y,A,Me),Y.side=Ar,Y.needsUpdate=!0,P.renderBufferDirect(oe,X,Z,Y,A,Me),Y.side=Vi):P.renderBufferDirect(oe,X,Z,Y,A,Me),A.onAfterRender(P,X,oe,Z,Y,Me)}function ls(A,X,oe){X.isScene!==!0&&(X=Dt);const Z=je.get(A),Y=v.state.lights,Me=v.state.shadowsArray,Re=Y.state.version,Ne=Ve.getParameters(A,Y.state,Me,X,oe),ze=Ve.getProgramCacheKey(Ne);let nt=Z.programs;Z.environment=A.isMeshStandardMaterial?X.environment:null,Z.fog=X.fog,Z.envMap=(A.isMeshStandardMaterial?te:T).get(A.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,nt===void 0&&(A.addEventListener("dispose",st),nt=new Map,Z.programs=nt);let Je=nt.get(ze);if(Je!==void 0){if(Z.currentProgram===Je&&Z.lightsStateVersion===Re)return hi(A,Ne),Je}else Ne.uniforms=Ve.getUniforms(A),A.onBeforeCompile(Ne,P),Je=Ve.acquireProgram(Ne,ze),nt.set(ze,Je),Z.uniforms=Ne.uniforms;const Be=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Be.clippingPlanes=ye.uniform),hi(A,Ne),Z.needsLights=Xl(A),Z.lightsStateVersion=Re,Z.needsLights&&(Be.ambientLightColor.value=Y.state.ambient,Be.lightProbe.value=Y.state.probe,Be.directionalLights.value=Y.state.directional,Be.directionalLightShadows.value=Y.state.directionalShadow,Be.spotLights.value=Y.state.spot,Be.spotLightShadows.value=Y.state.spotShadow,Be.rectAreaLights.value=Y.state.rectArea,Be.ltc_1.value=Y.state.rectAreaLTC1,Be.ltc_2.value=Y.state.rectAreaLTC2,Be.pointLights.value=Y.state.point,Be.pointLightShadows.value=Y.state.pointShadow,Be.hemisphereLights.value=Y.state.hemi,Be.directionalShadowMap.value=Y.state.directionalShadowMap,Be.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Be.spotShadowMap.value=Y.state.spotShadowMap,Be.spotLightMatrix.value=Y.state.spotLightMatrix,Be.spotLightMap.value=Y.state.spotLightMap,Be.pointShadowMap.value=Y.state.pointShadowMap,Be.pointShadowMatrix.value=Y.state.pointShadowMatrix),Z.currentProgram=Je,Z.uniformsList=null,Je}function ea(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=zl.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function hi(A,X){const oe=je.get(A);oe.outputColorSpace=X.outputColorSpace,oe.batching=X.batching,oe.batchingColor=X.batchingColor,oe.instancing=X.instancing,oe.instancingColor=X.instancingColor,oe.instancingMorph=X.instancingMorph,oe.skinning=X.skinning,oe.morphTargets=X.morphTargets,oe.morphNormals=X.morphNormals,oe.morphColors=X.morphColors,oe.morphTargetsCount=X.morphTargetsCount,oe.numClippingPlanes=X.numClippingPlanes,oe.numIntersection=X.numClipIntersection,oe.vertexAlphas=X.vertexAlphas,oe.vertexTangents=X.vertexTangents,oe.toneMapping=X.toneMapping}function ta(A,X,oe,Z,Y){X.isScene!==!0&&(X=Dt),L.resetTextureUnits();const Me=X.fog,Re=Z.isMeshStandardMaterial?X.environment:null,Ne=j===null?P.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Js,ze=(Z.isMeshStandardMaterial?te:T).get(Z.envMap||Re),nt=Z.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,Je=!!oe.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Be=!!oe.morphAttributes.position,vt=!!oe.morphAttributes.normal,at=!!oe.morphAttributes.color;let Vt=wr;Z.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Vt=P.toneMapping);const zt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,xt=zt!==void 0?zt.length:0,qe=je.get(Z),Gt=v.state.lights;if(me===!0&&(Ee===!0||A!==C)){const un=A===C&&Z.id===b;ye.setState(Z,A,un)}let gt=!1;Z.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Gt.state.version||qe.outputColorSpace!==Ne||Y.isBatchedMesh&&qe.batching===!1||!Y.isBatchedMesh&&qe.batching===!0||Y.isBatchedMesh&&qe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&qe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&qe.instancing===!1||!Y.isInstancedMesh&&qe.instancing===!0||Y.isSkinnedMesh&&qe.skinning===!1||!Y.isSkinnedMesh&&qe.skinning===!0||Y.isInstancedMesh&&qe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&qe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&qe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&qe.instancingMorph===!1&&Y.morphTexture!==null||qe.envMap!==ze||Z.fog===!0&&qe.fog!==Me||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==ye.numPlanes||qe.numIntersection!==ye.numIntersection)||qe.vertexAlphas!==nt||qe.vertexTangents!==Je||qe.morphTargets!==Be||qe.morphNormals!==vt||qe.morphColors!==at||qe.toneMapping!==Vt||qe.morphTargetsCount!==xt)&&(gt=!0):(gt=!0,qe.__version=Z.version);let hn=qe.currentProgram;gt===!0&&(hn=ls(Z,X,Y));let qi=!1,wn=!1,Ci=!1;const Lt=hn.getUniforms(),pn=qe.uniforms;if(Ye.useProgram(hn.program)&&(qi=!0,wn=!0,Ci=!0),Z.id!==b&&(b=Z.id,wn=!0),qi||C!==A){Ye.buffers.depth.getReversed()?(xe.copy(A.projectionMatrix),$v(xe),Jv(xe),Lt.setValue(B,"projectionMatrix",xe)):Lt.setValue(B,"projectionMatrix",A.projectionMatrix),Lt.setValue(B,"viewMatrix",A.matrixWorldInverse);const rn=Lt.map.cameraPosition;rn!==void 0&&rn.setValue(B,Xe.setFromMatrixPosition(A.matrixWorld)),dt.logarithmicDepthBuffer&&Lt.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Lt.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,wn=!0,Ci=!0)}if(Y.isSkinnedMesh){Lt.setOptional(B,Y,"bindMatrix"),Lt.setOptional(B,Y,"bindMatrixInverse");const un=Y.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Lt.setValue(B,"boneTexture",un.boneTexture,L))}Y.isBatchedMesh&&(Lt.setOptional(B,Y,"batchingTexture"),Lt.setValue(B,"batchingTexture",Y._matricesTexture,L),Lt.setOptional(B,Y,"batchingIdTexture"),Lt.setValue(B,"batchingIdTexture",Y._indirectTexture,L),Lt.setOptional(B,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Lt.setValue(B,"batchingColorTexture",Y._colorsTexture,L));const nn=oe.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&tt.update(Y,oe,hn),(wn||qe.receiveShadow!==Y.receiveShadow)&&(qe.receiveShadow=Y.receiveShadow,Lt.setValue(B,"receiveShadow",Y.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(pn.envMap.value=ze,pn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&X.environment!==null&&(pn.envMapIntensity.value=X.environmentIntensity),wn&&(Lt.setValue(B,"toneMappingExposure",P.toneMappingExposure),qe.needsLights&&na(pn,Ci),Me&&Z.fog===!0&&Ae.refreshFogUniforms(pn,Me),Ae.refreshMaterialUniforms(pn,Z,H,ne,v.state.transmissionRenderTarget[A.id]),zl.upload(B,ea(qe),pn,L)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(zl.upload(B,ea(qe),pn,L),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Lt.setValue(B,"center",Y.center),Lt.setValue(B,"modelViewMatrix",Y.modelViewMatrix),Lt.setValue(B,"normalMatrix",Y.normalMatrix),Lt.setValue(B,"modelMatrix",Y.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const un=Z.uniformsGroups;for(let rn=0,St=un.length;rn<St;rn++){const pi=un[rn];W.update(pi,hn),W.bind(pi,hn)}}return hn}function na(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function Xl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(A,X,oe){const Z=je.get(A);Z.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),je.get(A.texture).__webglTexture=X,je.get(A.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:oe,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const oe=je.get(A);oe.__webglFramebuffer=X,oe.__useDefaultFramebuffer=X===void 0};const ia=B.createFramebuffer();this.setRenderTarget=function(A,X=0,oe=0){j=A,O=X,F=oe;let Z=!0,Y=null,Me=!1,Re=!1;if(A){const ze=je.get(A);if(ze.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(B.FRAMEBUFFER,null),Z=!1;else if(ze.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(ze.__hasExternalTextures)L.rebindTextures(A,je.get(A.texture).__webglTexture,je.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Be=A.depthTexture;if(ze.__boundDepthTexture!==Be){if(Be!==null&&je.has(Be)&&(A.width!==Be.image.width||A.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const nt=A.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Re=!0);const Je=je.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Je[X])?Y=Je[X][oe]:Y=Je[X],Me=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?Y=je.get(A).__webglMultisampledFramebuffer:Array.isArray(Je)?Y=Je[oe]:Y=Je,z.copy(A.viewport),q.copy(A.scissor),Q=A.scissorTest}else z.copy(I).multiplyScalar(H).floor(),q.copy(se).multiplyScalar(H).floor(),Q=De;if(oe!==0&&(Y=ia),Ye.bindFramebuffer(B.FRAMEBUFFER,Y)&&Z&&Ye.drawBuffers(A,Y),Ye.viewport(z),Ye.scissor(q),Ye.setScissorTest(Q),Me){const ze=je.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,ze.__webglTexture,oe)}else if(Re){const ze=je.get(A.texture),nt=X;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,ze.__webglTexture,oe,nt)}else if(A!==null&&oe!==0){const ze=je.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ze.__webglTexture,oe)}b=-1},this.readRenderTargetPixels=function(A,X,oe,Z,Y,Me,Re){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=je.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne){Ye.bindFramebuffer(B.FRAMEBUFFER,Ne);try{const ze=A.texture,nt=ze.format,Je=ze.type;if(!dt.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-Z&&oe>=0&&oe<=A.height-Y&&B.readPixels(X,oe,Z,Y,rt.convert(nt),rt.convert(Je),Me)}finally{const ze=j!==null?je.get(j).__webglFramebuffer:null;Ye.bindFramebuffer(B.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(A,X,oe,Z,Y,Me,Re){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=je.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne)if(X>=0&&X<=A.width-Z&&oe>=0&&oe<=A.height-Y){Ye.bindFramebuffer(B.FRAMEBUFFER,Ne);const ze=A.texture,nt=ze.format,Je=ze.type;if(!dt.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Be=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Be),B.bufferData(B.PIXEL_PACK_BUFFER,Me.byteLength,B.STREAM_READ),B.readPixels(X,oe,Z,Y,rt.convert(nt),rt.convert(Je),0);const vt=j!==null?je.get(j).__webglFramebuffer:null;Ye.bindFramebuffer(B.FRAMEBUFFER,vt);const at=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Qv(B,at,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Be),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Me),B.deleteBuffer(Be),B.deleteSync(at),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,oe=0){const Z=Math.pow(2,-oe),Y=Math.floor(A.image.width*Z),Me=Math.floor(A.image.height*Z),Re=X!==null?X.x:0,Ne=X!==null?X.y:0;L.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,oe,0,0,Re,Ne,Y,Me),Ye.unbindTexture()};const ra=B.createFramebuffer(),sa=B.createFramebuffer();this.copyTextureToTexture=function(A,X,oe=null,Z=null,Y=0,Me=null){Me===null&&(Y!==0?(Ol("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=Y,Y=0):Me=0);let Re,Ne,ze,nt,Je,Be,vt,at,Vt;const zt=A.isCompressedTexture?A.mipmaps[Me]:A.image;if(oe!==null)Re=oe.max.x-oe.min.x,Ne=oe.max.y-oe.min.y,ze=oe.isBox3?oe.max.z-oe.min.z:1,nt=oe.min.x,Je=oe.min.y,Be=oe.isBox3?oe.min.z:0;else{const nn=Math.pow(2,-Y);Re=Math.floor(zt.width*nn),Ne=Math.floor(zt.height*nn),A.isDataArrayTexture?ze=zt.depth:A.isData3DTexture?ze=Math.floor(zt.depth*nn):ze=1,nt=0,Je=0,Be=0}Z!==null?(vt=Z.x,at=Z.y,Vt=Z.z):(vt=0,at=0,Vt=0);const xt=rt.convert(X.format),qe=rt.convert(X.type);let Gt;X.isData3DTexture?(L.setTexture3D(X,0),Gt=B.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(L.setTexture2DArray(X,0),Gt=B.TEXTURE_2D_ARRAY):(L.setTexture2D(X,0),Gt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const gt=B.getParameter(B.UNPACK_ROW_LENGTH),hn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),qi=B.getParameter(B.UNPACK_SKIP_PIXELS),wn=B.getParameter(B.UNPACK_SKIP_ROWS),Ci=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,zt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,zt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,nt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Je),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Be);const Lt=A.isDataArrayTexture||A.isData3DTexture,pn=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const nn=je.get(A),un=je.get(X),rn=je.get(nn.__renderTarget),St=je.get(un.__renderTarget);Ye.bindFramebuffer(B.READ_FRAMEBUFFER,rn.__webglFramebuffer),Ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let pi=0;pi<ze;pi++)Lt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,je.get(A).__webglTexture,Y,Be+pi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,je.get(X).__webglTexture,Me,Vt+pi)),B.blitFramebuffer(nt,Je,Re,Ne,vt,at,Re,Ne,B.DEPTH_BUFFER_BIT,B.NEAREST);Ye.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||je.has(A)){const nn=je.get(A),un=je.get(X);Ye.bindFramebuffer(B.READ_FRAMEBUFFER,ra),Ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,sa);for(let rn=0;rn<ze;rn++)Lt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,nn.__webglTexture,Y,Be+rn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,nn.__webglTexture,Y),pn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,un.__webglTexture,Me,Vt+rn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,un.__webglTexture,Me),Y!==0?B.blitFramebuffer(nt,Je,Re,Ne,vt,at,Re,Ne,B.COLOR_BUFFER_BIT,B.NEAREST):pn?B.copyTexSubImage3D(Gt,Me,vt,at,Vt+rn,nt,Je,Re,Ne):B.copyTexSubImage2D(Gt,Me,vt,at,nt,Je,Re,Ne);Ye.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else pn?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(Gt,Me,vt,at,Vt,Re,Ne,ze,xt,qe,zt.data):X.isCompressedArrayTexture?B.compressedTexSubImage3D(Gt,Me,vt,at,Vt,Re,Ne,ze,xt,zt.data):B.texSubImage3D(Gt,Me,vt,at,Vt,Re,Ne,ze,xt,qe,zt):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Me,vt,at,Re,Ne,xt,qe,zt.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Me,vt,at,zt.width,zt.height,xt,zt.data):B.texSubImage2D(B.TEXTURE_2D,Me,vt,at,Re,Ne,xt,qe,zt);B.pixelStorei(B.UNPACK_ROW_LENGTH,gt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,hn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,qi),B.pixelStorei(B.UNPACK_SKIP_ROWS,wn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ci),Me===0&&X.generateMipmaps&&B.generateMipmap(Gt),Ye.unbindTexture()},this.copyTextureToTexture3D=function(A,X,oe=null,Z=null,Y=0){return Ol('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,X,oe,Z,Y)},this.initRenderTarget=function(A){je.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),Ye.unbindTexture()},this.resetState=function(){O=0,F=0,j=null,Ye.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Tt._getUnpackColorSpace()}}const jm={type:"change"},cf={type:"start"},N0={type:"end"},Pl=new h0,Wm=new yr,xM=Math.cos(70*Kv.DEG2RAD),Jt=new ee,On=2*Math.PI,Pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},rd=1e-6;class yM extends F1{constructor(e,n=null){super(e,n),this.state=Pt.NONE,this.target=new ee,this.cursor=new ee,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ys.ROTATE,MIDDLE:Ys.DOLLY,RIGHT:Ys.PAN},this.touches={ONE:Ws.ROTATE,TWO:Ws.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new ee,this._lastQuaternion=new ss,this._lastTargetPosition=new ee,this._quat=new ss().setFromUnitVectors(e.up,new ee(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new vm,this._sphericalDelta=new vm,this._scale=1,this._panOffset=new ee,this._rotateStart=new ot,this._rotateEnd=new ot,this._rotateDelta=new ot,this._panStart=new ot,this._panEnd=new ot,this._panDelta=new ot,this._dollyStart=new ot,this._dollyEnd=new ot,this._dollyDelta=new ot,this._dollyDirection=new ee,this._mouse=new ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=MM.bind(this),this._onPointerDown=SM.bind(this),this._onPointerUp=EM.bind(this),this._onContextMenu=bM.bind(this),this._onMouseWheel=AM.bind(this),this._onKeyDown=CM.bind(this),this._onTouchStart=RM.bind(this),this._onTouchMove=PM.bind(this),this._onMouseDown=TM.bind(this),this._onMouseMove=wM.bind(this),this._interceptControlDown=LM.bind(this),this._interceptControlUp=DM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(jm),this.update(),this.state=Pt.NONE}update(e=null){const n=this.object.position;Jt.copy(n).sub(this.target),Jt.applyQuaternion(this._quat),this._spherical.setFromVector3(Jt),this.autoRotate&&this.state===Pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(r)&&isFinite(a)&&(r<-Math.PI?r+=On:r>Math.PI&&(r-=On),a<-Math.PI?a+=On:a>Math.PI&&(a-=On),r<=a?this._spherical.theta=Math.max(r,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+a)/2?Math.max(r,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(Jt.setFromSpherical(this._spherical),Jt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Jt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const f=Jt.length();u=this._clampDistance(f*this._scale);const h=f-u;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),l=!!h}else if(this.object.isOrthographicCamera){const f=new ee(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=h!==this.object.zoom;const m=new ee(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(f),this.object.updateMatrixWorld(),u=Jt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Pl.origin.copy(this.object.position),Pl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Pl.direction))<xM?this.object.lookAt(this.target):(Wm.setFromNormalAndCoplanarPoint(this.object.up,this.target),Pl.intersectPlane(Wm,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>rd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>rd||this._lastTargetPosition.distanceToSquared(this.target)>rd?(this.dispatchEvent(jm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?On/60*this.autoRotateSpeed*e:On/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Jt.setFromMatrixColumn(n,0),Jt.multiplyScalar(-e),this._panOffset.add(Jt)}_panUp(e,n){this.screenSpacePanning===!0?Jt.setFromMatrixColumn(n,1):(Jt.setFromMatrixColumn(n,0),Jt.crossVectors(this.object.up,Jt)),Jt.multiplyScalar(e),this._panOffset.add(Jt)}_pan(e,n){const r=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;Jt.copy(a).sub(this.target);let l=Jt.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*n*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),a=e-r.left,l=n-r.top,u=r.width,f=r.height;this._mouse.x=a/u*2-1,this._mouse.y=-(l/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(On*this._rotateDelta.x/n.clientHeight),this._rotateUp(On*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateStart.set(r,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._panStart.set(r,a)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),r=e.pageX-n.x,a=e.pageY-n.y,l=Math.sqrt(r*r+a*a);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),a=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(a,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(On*this._rotateDelta.x/n.clientHeight),this._rotateUp(On*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._panEnd.set(r,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),r=e.pageX-n.x,a=e.pageY-n.y,l=Math.sqrt(r*r+a*a);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+n.x)*.5,f=(e.pageY+n.y)*.5;this._updateZoomParameters(u,f)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new ot,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function SM(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function MM(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function EM(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(N0),this.state=Pt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function TM(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ys.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Pt.DOLLY;break;case Ys.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Pt.ROTATE}break;case Ys.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Pt.PAN}break;default:this.state=Pt.NONE}this.state!==Pt.NONE&&this.dispatchEvent(cf)}function wM(s){switch(this.state){case Pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function AM(s){this.enabled===!1||this.enableZoom===!1||this.state!==Pt.NONE||(s.preventDefault(),this.dispatchEvent(cf),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(N0))}function CM(s){this.enabled!==!1&&this._handleKeyDown(s)}function RM(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ws.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Pt.TOUCH_ROTATE;break;case Ws.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Pt.TOUCH_PAN;break;default:this.state=Pt.NONE}break;case 2:switch(this.touches.TWO){case Ws.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Pt.TOUCH_DOLLY_PAN;break;case Ws.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Pt.TOUCH_DOLLY_ROTATE;break;default:this.state=Pt.NONE}break;default:this.state=Pt.NONE}this.state!==Pt.NONE&&this.dispatchEvent(cf)}function PM(s){switch(this._trackPointer(s),this.state){case Pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Pt.NONE}}function bM(s){this.enabled!==!1&&s.preventDefault()}function LM(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function DM(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const NM=()=>{const s=Ct.useRef(null);Ct.useEffect(()=>{if(!s.current)return;const a=new S0;a.background=new _t(14742270);const l=350,u=600,f=new Yn(45,l/u,.1,100);f.position.set(0,1.5,7);const h=new D0({antialias:!0});h.setSize(l,u),h.shadowMap.enabled=!0,s.current.appendChild(h.domElement);const m=new yM(f,h.domElement);m.enableDamping=!0,m.dampingFactor=.1,m.minDistance=2,m.maxDistance=8,m.maxPolarAngle=Math.PI/1.8,m.enableZoom=!1;const g=new A0(16777215,.7);a.add(g);const x=new w0(16777215,.9);x.position.set(5,10,7),x.castShadow=!0,a.add(x);const _=new Er;a.add(_);function S(ne,H){const ue=new Zs(ne,32,32),ae=new Mr({color:H,roughness:.7,metalness:0}),I=new cn(ue,ae);return I.castShadow=!0,I}function w(ne,H,ue){const ae=new of(ne,H,32),I=new Mr({color:ue,roughness:.6,metalness:0}),se=new cn(ae,I);return se.castShadow=!0,se}function R(ne,H,ue,ae){const I=new to(ne,H,ue,32),se=new Mr({color:ae,roughness:.6,metalness:0}),De=new cn(I,se);return De.castShadow=!0,De}const y=S(1,0);y.position.y=0,_.add(y);const v=S(.8,16777215);v.position.set(0,-0,.3),_.add(v);const U=S(.6,0);U.position.set(0,1.1,.1),_.add(U);const N=S(.5,16777215);N.position.set(0,1.15,.3),_.add(N);const P=S(.12,16777215);P.position.set(-.18,1.3,.65),_.add(P);const G=S(.12,16777215);G.position.set(.18,1.3,.65),_.add(G);const O=S(.06,0);O.position.set(-.18,1.3,.75),_.add(O);const F=S(.06,0);F.position.set(.18,1.3,.75),_.add(F);const j=w(.12,.25,16753920);j.position.set(0,1.1,.85),j.rotation.x=Math.PI/2,_.add(j);const b=R(.15,.15,.1,16753920);b.position.set(-.5,-.9,.3),b.rotation.x=Math.PI/2,_.add(b);const C=R(.15,.15,.1,16753920);C.position.set(.5,-.9,.3),C.rotation.x=Math.PI/2,_.add(C);const z=S(.65,0);z.position.set(-.82,.2,0),z.scale.set(.4,1,.5),z.rotation.z=Math.PI/-6,_.add(z);const q=S(.65,0);q.position.set(.82,.2,0),q.scale.set(.4,1,.5),q.rotation.z=-Math.PI/-6,_.add(q);const Q=new sf(1.2,32),ce=new A1({opacity:.15}),de=new cn(Q,ce);de.rotation.x=-Math.PI/2,de.position.y=-1,de.receiveShadow=!0,a.add(de);const $=()=>{requestAnimationFrame($),_.rotation.y+=.01,m.update(),h.render(a,f)};return $(),()=>{m.dispose(),h.dispose(),a.clear(),s.current&&s.current.removeChild(h.domElement)}},[]);const[e,n]=Ct.useState({top:"0%",left:"60%"}),r=()=>{const a=window.innerWidth;a<=500?n({top:"0%",left:"-25%"}):a<=768?n({top:"0%",left:"0%"}):n({top:"0%",left:"60%"})};return Ct.useEffect(()=>(r(),window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}),[]),E.jsx("div",{ref:s,style:{maxWidth:"100vw",height:"400px",borderRadius:12,overflow:"hidden",display:"flex",justifyContent:"center",alignItems:"center",margin:"auto",touchAction:"none",userSelect:"none",zIndex:"0",position:"absolute",top:e.top,left:e.left,cursor:"grab"}})};function IM(){const[s,e]=Ct.useState(Array(5).fill(!1)),n=a=>{const l=[...s];l[a]=!l[a],e(l)},r=[{id:1,label:E.jsxs("div",{className:"container-img--card",children:[E.jsx("div",{className:"card-img",children:E.jsx("img",{src:sv,className:"products",loading:"lazy"})}),E.jsx("div",{className:"card-title-h3",children:"Product and Service"}),E.jsx("span",{className:"previousText",children:"This project is an interactive web application developed using TypeScript, React, and CSS..."}),E.jsxs("ul",{className:"icon-container--card",children:[E.jsxs("li",{children:[E.jsx(Gp,{className:"tsx-card"}),E.jsx("span",{className:"span-cards",children:"TSX"})]}),E.jsxs("li",{children:[E.jsx(jp,{className:"ts-card"}),E.jsx("span",{className:"span-cards",children:"TS"})]}),E.jsxs("li",{children:[E.jsx(qr,{className:"css-card"}),E.jsx("span",{className:"span-cards",children:"Css"})]}),E.jsxs("li",{children:[E.jsx(Kr,{className:"react-card"}),E.jsx("span",{className:"span-cards",children:"React"})]})]})]}),text:"This project is an interactive web application developed using TypeScript, React, and CSS, designed to provide a smooth and engaging user experience. The application focuses on showcasing a business and its products and services, allowing users to easily explore the available information.",url:"https://omarmantenimiento.netlify.app/"},{id:2,label:E.jsxs("div",{className:"container-img--card",children:[E.jsx("div",{className:"card-img",children:E.jsx("img",{src:ov,className:"portafolio",loading:"lazy"})}),E.jsx("div",{className:"card-title-h3",children:"Portfolio"}),E.jsx("span",{className:"previousText",children:"This project is a personal portfolio designed to showcase my skills and projects..."}),E.jsxs("ul",{className:"icon-container--card",children:[E.jsxs("li",{children:[E.jsx(Gp,{className:"tsx-card"}),E.jsx("span",{className:"span-cards",children:"TSX"})]}),E.jsxs("li",{children:[E.jsx(jp,{className:"ts-card"}),E.jsx("span",{className:"span-cards",children:"TS"})]}),E.jsxs("li",{children:[E.jsx(qr,{className:"css-card"}),E.jsx("span",{className:"span-cards",children:"Css"})]}),E.jsxs("li",{children:[E.jsx(Kr,{className:"react-card"}),E.jsx("span",{className:"span-cards",children:"React"})]})]})]}),text:"This project is a personal portfolio designed to showcase my skills and projects as a frontend developer. Built with TypeScript, React, and CSS, this portfolio not only highlights my technical abilities but also provides an engaging and seamless user experience.",url:"https://armandocruzv.github.io/portafolio/"},{id:3,label:E.jsxs("div",{className:"container-img--card",children:[E.jsx("div",{className:"card-img",children:E.jsx("img",{src:J_,className:"todo",loading:"lazy"})}),E.jsx("div",{className:"card-title-h3",children:"Todo-list"}),E.jsx("span",{className:"previousText",children:"This project focuses on developing a task list application..."}),E.jsxs("ul",{className:"icon-container--card",children:[E.jsxs("li",{children:[E.jsx(al,{className:"jsx-card"}),E.jsx("span",{className:"span-cards",children:"JSX"})]}),E.jsxs("li",{children:[E.jsx(Kr,{className:"react-card"}),E.jsx("span",{className:"span-cards",children:"React"})]}),E.jsxs("li",{children:[E.jsx(qr,{className:"css-card"}),E.jsx("span",{className:"span-cards",children:"Css"})]})]})]}),text:"This project focuses on developing a to-do list application using React.js. The application allows users to add new tasks, delete existing ones, and mark them as completed. It features an intuitive and responsive interface for managing daily tasks with ease.",url:"https://armandocruzv.github.io/todo_list/"},{id:4,label:E.jsxs("div",{className:"container-img--card",children:[E.jsx("div",{className:"card-img",children:E.jsx("img",{src:rv,className:"router",loading:"lazy"})}),E.jsx("div",{className:"card-title-h3",children:"React-router"}),E.jsx("span",{className:"previousText",children:"This project develops a blog using React.js and React Router DOM for smooth navigation..."}),E.jsxs("ul",{className:"icon-container--card",children:[E.jsxs("li",{children:[E.jsx(al,{className:"jsx-card"}),E.jsx("span",{className:"span-cards",children:"JSX"})]}),E.jsxs("li",{children:[E.jsx(qr,{className:"css-card"}),E.jsx("span",{className:"span-cards",children:"Css"})]}),E.jsxs("li",{children:[E.jsx(Kr,{className:"react-card"}),E.jsx("span",{className:"span-cards",children:"React"})]})]})]}),text:"This project involves developing a blog using React.js and React Router DOM for smooth navigation. Security measures are implemented with Node.js to handle endpoints, along with user authentication, roles, and permissions, ensuring that only authorized users can perform certain actions.",url:"https://armandocruzv.github.io/React-router-navegacion/"},{id:5,label:E.jsxs("div",{className:"container-img--card",children:[E.jsx("div",{className:"card-img",children:E.jsx("img",{src:iv,className:"encriptador"})}),E.jsx("div",{className:"card-title-h3",children:"Encryptor"}),E.jsx("span",{className:"previousText",children:"This project focuses on creating a web application for message encryption..."}),E.jsxs("ul",{className:"icon-container--card",children:[E.jsxs("li",{children:[E.jsx(qm,{className:"js-card"}),E.jsx("span",{className:"span-cards",children:"JS"})]}),E.jsxs("li",{children:[E.jsx(qr,{className:"css-card"}),E.jsx("span",{className:"span-cards",children:"Css"})]}),E.jsxs("li",{children:[E.jsx(Zm,{className:"html-card"}),E.jsx("span",{className:"span-cards",children:"HTML"})]})]})]}),text:"This project focuses on creating a web application for message encryption using HTML, CSS, and JavaScript. The application allows users to input a message and convert it into an encrypted format to ensure the privacy and confidentiality of the information.",url:"https://armandocruzv.github.io/encriptador/"},{id:6,label:E.jsxs("div",{className:"container-img--card",children:[E.jsx("div",{className:"card-img",children:E.jsx("img",{src:Q_,className:"landing",loading:"lazy"})}),E.jsx("div",{className:"card-title-h3",children:"Landing Page"}),E.jsx("span",{className:"previousText",children:"This project develops a web application for a blades and mills company..."}),E.jsxs("ul",{className:"icon-container--card",children:[E.jsxs("li",{children:[E.jsx(al,{className:"jsx-card"}),E.jsx("span",{className:"span-cards",children:"JSX"})]}),E.jsxs("li",{children:[E.jsx(qr,{className:"css-card"}),E.jsx("span",{className:"span-cards",children:"Css"})]}),E.jsxs("li",{children:[E.jsx(Kr,{className:"react-card"}),E.jsx("span",{className:"span-cards",children:"React"})]})]})]}),text:"This project involves developing a web application for a company specializing in blades and mills for the plastic industry, using React.js and React Router DOM. The application allows users to explore products, access detailed information, and contact the sales team, offering smooth navigation and a modern interface.",url:"https://elegant-sunshine-437c40.netlify.app/nosotros"},{label:E.jsxs("div",{className:"container-img--card",children:[E.jsx("div",{className:"card-img",children:E.jsx("img",{src:$_,className:"e-commerce",loading:"lazy"})}),E.jsx("div",{className:"card-title-h3",children:"E-commerce"}),E.jsx("span",{className:"previousText",children:"This project develops an online store (e-commerce) using React.js..."}),E.jsxs("ul",{className:"icon-container--card",children:[E.jsxs("li",{children:[E.jsx(al,{className:"jsx-card"}),E.jsx("span",{className:"span-cards",children:"JSX"})]}),E.jsxs("li",{children:[E.jsx(K_,{className:"tailwind-card"}),E.jsx("span",{className:"span-cards",children:"Tailwind"})]}),E.jsxs("li",{children:[E.jsx(Kr,{className:"react-card"}),E.jsx("span",{className:"span-cards",children:"React"})]})]})]}),text:"Este proyecto desarrolla una tienda en línea (e-commerce) utilizando React.js, que se conecta a una API de productos para mostrar y gestionar inventario. La aplicación permite a los usuarios explorar productos, agregar artículos al carrito y realizar compras, ofreciendo una experiencia de compra fluida y moderna.",url:"https://armandocruzv.github.io/react-shop/"},{id:7,label:E.jsxs("div",{className:"container-img--card",children:[E.jsx("div",{className:"card-img",children:E.jsx("img",{src:Z_,className:"crud",loading:"lazy"})}),E.jsx("div",{className:"card-title-h3",children:"CRUD(SpringBoot)"}),E.jsx("span",{className:"previousText",children:"This project involves the development of a CRUD application (Create, Read, Update, Delete)..."}),E.jsxs("ul",{className:"icon-container--card",children:[E.jsxs("li",{children:[E.jsx(bl,{className:"java-card"}),E.jsx("span",{className:"span-cards",children:"Java"})]}),E.jsxs("li",{children:[" ",E.jsx(Vp,{className:"mysql-card"}),E.jsx("span",{className:"span-cards",children:"MySQL"})]}),E.jsxs("li",{children:[E.jsx(Qm,{className:"springBoot"}),E.jsx("span",{className:"span-cards",children:"SpringBoot"})]})]})]}),text:"This project consists of developing a CRUD (Create, Read, Update, Delete) application using Java and Spring Boot. The application connects to a MySQL database, which was specifically designed and configured for this project.",url:"https://github.com/ArmandoCruzV/crudExample/tree/main/src/main/java/com/api/crudExample"},{id:8,label:E.jsxs("div",{className:"container-img--card",children:[E.jsx("div",{className:"card-img",children:E.jsx("img",{src:ev,className:"dataServer",loading:"lazy"})}),E.jsx("div",{className:"card-title-h3",children:"Java connection"}),E.jsx("span",{className:"previousText",children:"CRUD, using Java and direct SQL queries to interact with a MySQL database..."}),E.jsxs("ul",{className:"icon-container--card",children:[E.jsxs("li",{children:[E.jsx(bl,{className:"java-card"}),E.jsx("span",{className:"span-cards",children:"Java"})]}),E.jsxs("li",{children:[" ",E.jsx(Vp,{className:"mysql-card"}),E.jsx("span",{className:"span-cards",children:"MySQL"})]})]})]}),text:"This project focuses on developing a CRUD (Create, Read, Update, Delete) application using Java and direct SQL queries to interact with a MySQL database. The database was manually designed and created to meet the specific needs of the project.",url:"https://github.com/ArmandoCruzV/mensajes-app-java/tree/master/src/main/java"},{id:9,label:E.jsxs("div",{className:"container-img--card",children:[E.jsx("div",{className:"card-img",children:E.jsx("img",{src:tv,className:"dataServer",loading:"lazy"})}),E.jsx("div",{className:"card-title-h3",children:"Java project"}),E.jsx("span",{className:"previousText",children:"This project involves the development of a medical appointment management system using Java..."}),E.jsx("ul",{className:"icon-container--card",children:E.jsxs("li",{children:[E.jsx(bl,{className:"java-card"}),E.jsx("span",{className:"span-cards",children:"Java"})]})})]}),text:"This project involves the development of a medical appointment management system using Java. The goal is to facilitate the scheduling, tracking, and management of appointments between patients and healthcare professionals.",url:"https://github.com/ArmandoCruzV/MyMedicalAppointments/tree/main/src"},{id:10,label:E.jsxs("div",{className:"container-img--card",children:[E.jsx("div",{className:"card-img",children:E.jsx("img",{src:nv,className:"nodeImg",loading:"lazy"})}),E.jsx("div",{className:"card-title-h3",children:"Node project"}),E.jsx("span",{className:"previousText",children:"CRUD (Create, Read, Update, Delete) using Node.js and the Express framework..."}),E.jsxs("ul",{className:"icon-container--card",children:[E.jsxs("li",{children:[E.jsx(k_,{className:"node-card"}),E.jsx("span",{className:"span-cards",children:"NodeJS"})]}),E.jsxs("li",{children:[E.jsx(G_,{className:"express-card"}),E.jsx("span",{className:"span-cards",children:"Express"})]})]})]}),text:"This project focuses on developing a CRUD (Create, Read, Update, Delete) application using Node.js and the Express framework. The goal is to build a RESTful API that enables efficient data management through basic operations on a database.",url:"https://github.com/ArmandoCruzV/nodeProject"}];return E.jsxs("div",{id:"projects",className:"projects",children:[E.jsx(NM,{}),E.jsxs("div",{className:"portfolio-title--container",children:[E.jsx(Go,{x:-50,children:E.jsxs("div",{className:"portfolio-title",children:[E.jsx("span",{className:"portfolio-title-1",children:"P"}),E.jsx("span",{className:"portfolio-title-2",children:"rojects"})]})}),E.jsx("h2",{className:"portfolio-h2",children:"Recent projects"}),E.jsx("h3",{className:"portfolio-h3",children:"showcasing some of my best work"})]}),E.jsx("div",{className:"grid-container",children:Array.from({length:r.length}).map((a,l)=>E.jsx(Go,{children:E.jsxs("div",{className:"grid-item",children:[r[l].label,E.jsxs("div",{className:`description ${s[l]?"show":""}`,children:[E.jsx("button",{onClick:()=>n(l),className:"container-close",children:E.jsx(V_,{className:"close-project"})}),r[l].text]}),E.jsxs("div",{className:"card-buttons",children:[E.jsx("button",{onClick:()=>n(l),className:"btn-description",children:s[l]?"Hide Description":"Show Description"}),E.jsx("a",{className:"btn-sendPage",href:r[l].url,target:"_blank",children:"Go page"})]})]},r[l].id)},l))})]})}const UM="/portfolioArmando/assets/platzi-C4Esq5LC.png",FM="/portfolioArmando/assets/alura-BCM1g-cy.png",OM="/portfolioArmando/assets/1-CyD_Sj2U.png",zM="/portfolioArmando/assets/2-N1nprbYt.png",kM="/portfolioArmando/assets/3-KpuTc4ap.png",BM="/portfolioArmando/assets/4-DNvcN3Ox.png",HM="/portfolioArmando/assets/5-FxrxbDlw.png",VM="/portfolioArmando/assets/6-CEOI_o_O.png",GM="/portfolioArmando/assets/7-E6aDe4wd.png",jM="/portfolioArmando/assets/8-B3T7pKn0.png",WM="/portfolioArmando/assets/9-Cii9kLhj.png",XM="/portfolioArmando/assets/10-Cm562aE4.png",YM="/portfolioArmando/assets/11-C_TlT151.png",qM="/portfolioArmando/assets/12-DxSv3Ijx.png",KM="/portfolioArmando/assets/13-DxYGsD1H.png",ZM="/portfolioArmando/assets/14-BZkC9U-W.png",QM="/portfolioArmando/assets/15-CTIl9p0y.png",$M="/portfolioArmando/assets/16-2EF1XNal.png",JM="/portfolioArmando/assets/17-C1UxANoj.png",eE="/portfolioArmando/assets/18-HZzIr8tp.png",tE="/portfolioArmando/assets/19-DhuJgX5o.png",nE="/portfolioArmando/assets/20-D1xneBqx.png",iE="/portfolioArmando/assets/21-BJKO8Jw-.png",rE="/portfolioArmando/assets/22-D_zn9WqZ.png",sE="/portfolioArmando/assets/23-QYlD3oUI.png",oE="/portfolioArmando/assets/24-BF6QB4xf.png",aE="/portfolioArmando/assets/25-HWXS2NvE.png",lE="/portfolioArmando/assets/26-C7ojpZyP.png",cE="/portfolioArmando/assets/27-CXXBVUs2.png",uE="/portfolioArmando/assets/28-D1CXUgop.png",dE="/portfolioArmando/assets/29-Dhg_Hd1b.png",fE="/portfolioArmando/assets/30-Ba--jK5B.png",hE="/portfolioArmando/assets/31-BGbMBL1-.png",pE="/portfolioArmando/assets/32-CANI3tkA.png",mE="/portfolioArmando/assets/33-BByupkf7.png",gE="/portfolioArmando/assets/34-BET2KAIL.png",_E="/portfolioArmando/assets/35-DEtIfOPQ.png",vE="/portfolioArmando/assets/36-COOdtc8D.png",xE="/portfolioArmando/assets/37-D4oflFO3.png",yE="/portfolioArmando/assets/38-BGRIc9GX.png",SE="/portfolioArmando/assets/39-CSONtDPd.png",ME="/portfolioArmando/assets/40-DptVggRu.png",EE="/portfolioArmando/assets/41-BiOLfvT_.png",TE="/portfolioArmando/assets/42-Plv_ZEVO.png",wE="/portfolioArmando/assets/43-TLf_OufA.png",AE="/portfolioArmando/assets/44-rz3otPUx.png",CE="/portfolioArmando/assets/45-Bz1xN5y1.png",RE="/portfolioArmando/assets/46-BpXKzurW.png",PE="/portfolioArmando/assets/47-DcL6zrPu.png",bE="/portfolioArmando/assets/48-Bw4Hwgtf.png",LE="/portfolioArmando/assets/49-Bl76xxn1.png",DE="/portfolioArmando/assets/50-je5hfsgm.png",NE="/portfolioArmando/assets/51-CCqk4Re9.png",IE="/portfolioArmando/assets/52-BuWfthVH.png",UE="/portfolioArmando/assets/53-CkW9mI_j.png",FE="/portfolioArmando/assets/54-r1dnTd-8.png",OE="/portfolioArmando/assets/55-CebuWRR9.png",zE="/portfolioArmando/assets/56-FwZmA0gm.png",kE="/portfolioArmando/assets/57-rrOKFapd.png",BE="/portfolioArmando/assets/58-gyLOY4zp.png",HE="/portfolioArmando/assets/59-BABwXvIZ.png",VE="/portfolioArmando/assets/60-DTUR2php.png",GE="/portfolioArmando/assets/61-DthxIoTa.png",jE=()=>{const s=[OM,zM,kM,BM,HM,VM,GM,jM,WM,XM,YM,qM,KM,ZM,QM,$M,JM,eE,tE,nE,iE,rE,sE,oE,aE,lE,cE,uE,dE,fE,hE,pE,mE,gE,_E,vE,xE,yE,SE,ME,EE,TE,wE,AE,CE,RE,PE,bE,LE,DE,NE,IE,UE,FE,OE,zE,kE,BE,HE,VE,GE],[e,n]=Ct.useState(!1),[r,a]=Ct.useState(null),l=h=>{a(h),n(!0)},u=()=>{n(!1),a(null)},f=s.map((h,m)=>E.jsxs("div",{className:"course-card",children:[E.jsx("img",{src:h,className:"img-card",alt:`Course ${m+1}`,loading:"lazy"}),E.jsx("button",{className:"btn-course",onClick:()=>l(h),children:"Show Full-Size Image"})]},m));return E.jsxs(E.Fragment,{children:[f,e&&E.jsxs("div",{className:"modal",children:[E.jsx("span",{className:"close",onClick:u,children:"×"}),r&&E.jsx("img",{src:r,className:"img-card--full",alt:"Full Size",loading:"lazy"})]})]})},WE=()=>{const s=Ct.useRef(null),e=()=>{s.current&&s.current.scrollBy({left:-250,behavior:"smooth"})},n=()=>{s.current&&s.current.scrollBy({left:250,behavior:"smooth"})};let r;const a=()=>{if(s.current){const{scrollLeft:f,scrollWidth:h,clientWidth:m}=s.current;s.current.scrollBy({left:250,behavior:"smooth"}),f+m>=h&&setTimeout(()=>{s.current.scrollTo({left:0,behavior:"smooth"})},1e3)}},l=()=>{r=window.setInterval(a,3e3)},u=()=>{window.clearInterval(r)};return Ct.useEffect(()=>(l(),()=>u()),[]),E.jsxs("div",{children:[E.jsxs("div",{id:"courses",className:"courses",children:[E.jsxs("div",{className:"titles-courses",children:[E.jsx(Go,{x:50,children:E.jsxs("div",{className:"h1-courses",children:[E.jsx("span",{className:"h1-courses-1",children:"C"}),E.jsx("span",{className:"h1-courses-2",children:"ourses"})]})}),E.jsx("h2",{className:"skills-container-h2",children:"My Learning Journey"}),E.jsx("h3",{className:"skills-container-h3",children:"Courses I've completed to grow my skills"})]}),E.jsxs("div",{className:"btn-course--container",children:[E.jsx("button",{onClick:e,className:"buttonStyleLeft",children:"❮"}),E.jsx("button",{onClick:n,className:"buttonStyleRight",children:"❯"})]}),E.jsx("div",{className:"courses-card--container",ref:s,children:E.jsx(jE,{})})]}),E.jsxs("div",{className:"animated-div",children:[E.jsxs("a",{className:"platzi",href:"https://platzi.com/p/hao_2-d364/",target:"_blank",children:[E.jsx("h3",{className:"h3-platzi",children:"Platzi"}),E.jsx("div",{className:"top-platzi"}),E.jsx("div",{className:"bottom-platzi"}),E.jsx("div",{className:"left-platzi"}),E.jsx("div",{className:"right-platzi"}),E.jsx("img",{src:UM,alt:"Imagen 1",className:"image-platzi",loading:"lazy"})]}),E.jsxs("a",{className:"alura",href:"https://app.aluracursos.com/user/hao-2-d/fullCertificate/88f128d66f368013cc3fb3d4987fc2c1",target:"_blank",children:[E.jsx("h3",{className:"h3-alura",children:"Alura"}),E.jsx("div",{className:"top-alura"}),E.jsx("div",{className:"bottom-alura"}),E.jsx("div",{className:"left-alura"}),E.jsx("div",{className:"right-alura"}),E.jsx("img",{src:FM,alt:"Imagen 1",className:"image-alura",loading:"lazy"})]})]})]})},XE="/portfolioArmando/assets/luna-Dmq0fUqT.png",YE="/portfolioArmando/assets/tierra-JT5kZCMA.png",qE="/portfolioArmando/assets/astronauta-CxLXZm_1.png",KE=[{id:1,icon:E.jsx(B_,{className:"contactMe-tiktok"}),url:"https://www.tiktok.com/@haok2d"},{id:2,icon:E.jsx(z_,{className:"contactMe-linkedin"}),url:"https://www.linkedin.com/in/armando-cruz-2a5897236/"},{id:3,icon:E.jsx(Km,{className:"contactMe-github"}),url:"https://github.com/ArmandoCruzV"}],ZE=()=>E.jsxs("div",{id:"contacto",className:"parallax",children:[E.jsxs("div",{className:"background",children:[E.jsx("img",{src:XE,className:"luna",alt:"Planet 1",loading:"lazy"}),E.jsx("img",{src:YE,className:"planet",alt:"Planet 2",loading:"lazy"}),E.jsx("img",{src:qE,className:"astronaut",alt:"Astronaut",loading:"lazy"})]}),E.jsx("footer",{className:"footer",children:KE.map(s=>E.jsx("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",className:"link",children:s.icon},s.id))})]}),QE=()=>{const s=Ct.useRef(null);return Ct.useEffect(()=>{if(!s.current)return;const e=new S0,n=new Yn(60,window.innerWidth/window.innerHeight,.1,1e3);n.position.set(0,0,10);const r=new D0({antialias:!0,alpha:!0});r.setSize(window.innerWidth,window.innerHeight),s.current.appendChild(r.domElement);const a="https://threejs.org/examples/textures/cube/Bridge2/",l=".jpg",u=[a+"posx"+l,a+"negx"+l,a+"posy"+l,a+"negy"+l,a+"posz"+l,a+"negz"+l],f=new D1().load(u);f.encoding=void 0,f.mapping=ns,e.environment=f;const h=new Zs(1,32,32),m=new Mr({color:3751494,metalness:1,roughness:.15,envMap:f}),g=new cn(h,m),x=new to(2,2,.1,32),_=new Mr({color:5623039,metalness:1,roughness:.15,envMap:f}),S=new cn(x,_),w=new Er,R=new to(.05,.05,.7,12),y=new Mr({color:4521779,metalness:1,roughness:.1,emissive:new _t(4521779),emissiveIntensity:.9}),v=new cn(R,y);v.position.y=.9,v.position.x=-.1,v.rotation.z=Math.PI/1;const U=new Zs(.1,16,16),N=new Mr({color:3407735,metalness:1,roughness:.1,emissive:new _t(3407735),emissiveIntensity:1}),P=new cn(U,N);P.position.y=1.2,P.position.x=-.1,P.rotation.z=Math.PI/9,w.add(P);const G=new Er,O=new _t(65518),F=new Mr({color:O,emissive:O,emissiveIntensity:1}),j=new Zs(.13,12,12),b=12;for(let $=0;$<b;$++){const ne=$/b*2*Math.PI,H=new cn(j,F.clone());H.position.set(Math.cos(ne)*1.68,0,Math.sin(ne)*1.85),G.add(H)}const C=new A0(16777215,.4);e.add(C);const z=new w0(16777215,.8);z.position.set(5,10,7),e.add(z);const q=new Er;q.add(g),q.add(S),q.add(w),q.add(G),e.add(q);const Q=()=>{requestAnimationFrame(Q),q.rotation.y+=.04,r.render(e,n),r.setClearColor(0,0)};Q(),requestAnimationFrame(Q);const ce=()=>{const $=window.scrollY;if(document.documentElement.scrollHeight-window.innerHeight,$<=1e3)n.position.z=5-$*.001,q.position.y=2-$*.001,q.position.x=-3+$*.004,q.rotation.x=$*.001;else if($>1e3&&$<2e3){const ne=($-1e3)*.001;n.position.z=3.8+ne*8,q.position.y=ne*2,q.position.x=ne*-4,q.rotation.x=(ne+1.2)*-4}else if($>2e3&&$<4e3){const ne=($-2e3)*.001;n.position.z=3.8*8-ne*8,q.position.y=ne*-1.5,q.position.x=-4+ne,q.rotation.x=5+ne}else if($>4e3&&$<8e3){const ne=$*1e-4*6.5;n.position.z=3.8+ne,q.position.y=2-ne,q.position.x=5-ne,q.rotation.x=5-ne,console.log(3.8+ne)}else if($>8e3&&$<1e4){const ne=$*1e-4*3.5;n.position.z=3.8*2+ne,q.position.y=ne*-.5,q.position.x=ne*-.2,q.rotation.x=5-ne*1.5}else $>1e4&&(n.position.z=8+$*.001,q.position.y=-.25)};ce(),window.addEventListener("scroll",ce);const de=()=>{requestAnimationFrame(de),r.render(e,n)};return de(),()=>{var $;window.removeEventListener("scroll",ce),($=s.current)==null||$.removeChild(r.domElement),h.dispose(),m.dispose()}},[]),E.jsx("div",{ref:s,style:{width:"100vw",overflow:"hidden",position:"fixed",bottom:"0%",zIndex:1}})};function $E(){return E.jsxs(E.Fragment,{children:[E.jsx(D_,{}),E.jsx(QE,{}),E.jsx(I_,{}),E.jsx(q_,{}),E.jsx(IM,{}),E.jsx(WE,{}),E.jsx(ZE,{})]})}S_.createRoot(document.getElementById("root")).render(E.jsx(Ct.StrictMode,{children:E.jsx($E,{})}));
