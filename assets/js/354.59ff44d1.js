(self.webpackChunkebc_docs=self.webpackChunkebc_docs||[]).push([[354],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return f},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,f=u(e,["components","mdxType","originalType","parentName"]),s=c(n),p=o,v=s["".concat(l,".").concat(p)]||s[p]||d[p]||i;return n?r.createElement(v,a(a({ref:t},f),{},{components:n})):r.createElement(v,a({ref:t},f))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1334:function(){!function(){if("undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof HTMLElement){var e=!1;try{var t=document.createElement("div");t.addEventListener("focus",(function(e){e.preventDefault(),e.stopPropagation()}),!0),t.focus(Object.defineProperty({},"preventScroll",{get:function(){e=!0}}))}catch(n){}if(void 0===HTMLElement.prototype.nativeFocus&&!e){HTMLElement.prototype.nativeFocus=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(e){var t=window.scrollY||window.pageYOffset;this.nativeFocus(),e&&e.preventScroll&&setTimeout((function(){window.scroll(window.scrollX||window.pageXOffset,t)}),0)}}}}()},7435:function(){},1714:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});n(1334);var r=n(7294),o=n(3935),i=n(3969),a=n(2964),u=n(655),l=function(e){return e+"ms"},c=function(e){var t=e.height,n=e.innerHeight,r=e.innerWidth,o=e.isLoaded,i=e.isUnloading,a=e.left,c=e.originalTransform,f=e.top,d=e.transitionDuration,s=e.width,p=e.zoomMargin,v=l(d);if(!o||i){var m=(0,u.__spreadArrays)(["scale(1)","translate(0, 0)"],c?[c]:[]).join(" ");return{height:t,left:a,top:f,transform:m,WebkitTransform:m,transitionDuration:v,width:s}}var g=function(e){var t=e.height,n=e.innerHeight,r=e.innerWidth,o=e.width,i=e.zoomMargin,a=r/(o+i),u=n/(t+i);return Math.min(a,u)}({height:t,innerWidth:r,innerHeight:n,width:s,zoomMargin:p}),y=(r/2-(a+s/2))/g,w=(n/2-(f+t/2))/g,h=(0,u.__spreadArrays)(["scale("+g+")","translate("+y+"px, "+w+"px)"],c?[c]:[]).join(" ");return{height:t,left:a,top:f,transform:h,WebkitTransform:h,transitionDuration:v,width:s}},f={getBoundingClientRect:function(){return{height:0,left:0,top:0,width:0}},style:{transform:null}},d=(0,r.memo)((function(e){var t=e.children,n=e.closeText,u=void 0===n?"Unzoom Image":n,d=e.onUnload,s=e.onLoad,p=e.overlayBgColorEnd,v=void 0===p?"rgba(255, 255, 255, 0.95)":p,m=e.overlayBgColorStart,g=void 0===m?"rgba(255, 255, 255, 0)":m,y=e.parentRef,w=e.portalEl,h=void 0===w?document.body:w,b=e.scrollableEl,E=void 0===b?window:b,O=e.transitionDuration,C=void 0===O?300:O,j=e.zoomMargin,k=void 0===j?0:j,T=e.zoomZindex,z=void 0===T?2147483647:T,S=(0,r.useRef)(null),D=(0,r.useState)(0)[1],P=(0,r.useState)(!1),x=P[0],_=P[1],M=(0,r.useState)(!1),B=M[0],L=M[1],Z=(0,a.Z)(),H=Z.width,R=Z.height,U=(0,r.useCallback)((function(e){e.preventDefault(),L(!0)}),[]),W=(0,r.useCallback)((function(e){"Escape"!==e.key&&27!==e.keyCode||(e.stopPropagation(),L(!0))}),[]),F=(0,r.useCallback)((function(){D((function(e){return e+1})),B||L(!0)}),[B]);(0,i.Z)("keydown",W,document),(0,i.Z)("scroll",F,E),(0,r.useEffect)((function(){_(!0),s(),S.current&&S.current.focus({preventScroll:!0})}),[s]),(0,r.useEffect)((function(){var e=B?setTimeout(d,C):null;return function(){e&&clearTimeout(e)}}),[B,d,C]);var A=y.current||f,N=A.getBoundingClientRect(),I=N.height,X=N.left,Y=N.top,q=N.width,J=function(e){var t=e.isLoaded,n=e.isUnloading,r=e.overlayBgColorEnd,o=e.overlayBgColorStart,i=e.transitionDuration,a=e.zoomZindex,u={backgroundColor:o,transitionDuration:l(i),zIndex:a};return t&&!n&&(u.backgroundColor=r),u}({isLoaded:x,isUnloading:B,overlayBgColorEnd:v,overlayBgColorStart:g,transitionDuration:C,zoomZindex:z}),G=c({height:I,isLoaded:x,innerHeight:R,innerWidth:H,isUnloading:B,left:X,originalTransform:A.style.transform,top:Y,transitionDuration:C,width:q,zoomMargin:k});return(0,o.createPortal)(r.createElement("div",{"aria-modal":!0,"data-rmiz-overlay":!0,role:"dialog",style:J},r.createElement("div",{"data-rmiz-modal-content":!0,style:G},t),r.createElement("button",{"aria-label":u,"data-rmiz-btn-close":!0,onClick:U,ref:S})),h)})),s=(0,r.memo)((function(e){var t=e.children,n=e.closeText,o=void 0===n?"Unzoom image":n,i=e.overlayBgColorEnd,a=void 0===i?"rgba(255, 255, 255, 0.95)":i,u=e.overlayBgColorStart,l=void 0===u?"rgba(255, 255, 255, 0)":u,c=e.portalEl,f=e.openText,s=void 0===f?"Zoom image":f,p=e.scrollableEl,v=e.transitionDuration,m=void 0===v?300:v,g=e.wrapElement,y=void 0===g?"div":g,w=e.wrapStyle,h=e.zoomMargin,b=void 0===h?0:h,E=e.zoomZindex,O=void 0===E?2147483647:E,C=(0,r.useState)(!1),j=C[0],k=C[1],T=(0,r.useState)(!1),z=T[0],S=T[1],D=(0,r.useRef)(null),P=(0,r.useRef)(null),x=(0,r.useCallback)((function(e){j||(e.preventDefault(),k(!0))}),[j]),_=(0,r.useCallback)((function(){S(!0)}),[]),M=(0,r.useCallback)((function(){k(!1),S(!1),P.current&&P.current.focus({preventScroll:!0})}),[]),B=j&&z?"hidden":"visible";return r.createElement(r.StrictMode,null,r.createElement(y,{"data-rmiz-wrap":B,ref:D,style:w},t,r.createElement("button",{"aria-label":s,"data-rmiz-btn-open":!0,onClick:x,ref:P}),"undefined"!=typeof window&&j&&r.createElement(d,{closeText:o,onLoad:_,onUnload:M,overlayBgColorEnd:a,overlayBgColorStart:l,parentRef:D,portalEl:c,scrollableEl:p,transitionDuration:m,zoomMargin:b,zoomZindex:O},t)))}))},8387:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isNavigator=t.isBrowser=t.off=t.on=t.noop=void 0;t.noop=function(){},t.on=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.addEventListener&&e.addEventListener.apply(e,t)},t.off=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)},t.isBrowser="undefined"!=typeof window,t.isNavigator="undefined"!=typeof navigator},6713:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7294);t.default=function(e){r.useEffect(e,[])}},3969:function(e,t,n){"use strict";var r=n(7294),o=n(8387),i=o.isBrowser?window:null,a=function(e){return!!e.addEventListener},u=function(e){return!!e.on};t.Z=function(e,t,n,l){void 0===n&&(n=i),r.useEffect((function(){if(t&&n)return a(n)?o.on(n,e,t,l):u(n)&&n.on(e,t,l),function(){a(n)?o.off(n,e,t,l):u(n)&&n.off(e,t,l)}}),[e,t,n,JSON.stringify(l)])}},9050:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(655),o=n(7294),i=r.__importDefault(n(6258));t.default=function(e){var t=o.useRef(0),n=o.useState(e),r=n[0],a=n[1],u=o.useCallback((function(e){cancelAnimationFrame(t.current),t.current=requestAnimationFrame((function(){a(e)}))}),[]);return i.default((function(){cancelAnimationFrame(t.current)})),[r,u]}},6258:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(655),o=n(7294),i=r.__importDefault(n(6713));t.default=function(e){var t=o.useRef(e);t.current=e,i.default((function(){return function(){return t.current()}}))}},2964:function(e,t,n){"use strict";var r=n(655),o=n(7294),i=r.__importDefault(n(9050)),a=n(8387);t.Z=function(e,t){void 0===e&&(e=1/0),void 0===t&&(t=1/0);var n=i.default({width:a.isBrowser?window.innerWidth:e,height:a.isBrowser?window.innerHeight:t}),r=n[0],u=n[1];return o.useEffect((function(){if(a.isBrowser){var e=function(){u({width:window.innerWidth,height:window.innerHeight})};return a.on(window,"resize",e),function(){a.off(window,"resize",e)}}}),[]),r}}}]);