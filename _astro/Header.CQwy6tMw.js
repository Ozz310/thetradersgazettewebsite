import{r as c}from"./index.CVf8TyFT.js";var l={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=c,h=Symbol.for("react.element"),f=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,u=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function x(s,e,t){var o,n={},i=null,d=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(d=e.ref);for(o in e)p.call(e,o)&&!g.hasOwnProperty(o)&&(n[o]=e[o]);if(s&&s.defaultProps)for(o in e=s.defaultProps,e)n[o]===void 0&&(n[o]=e[o]);return{$$typeof:h,type:s,key:i,ref:d,props:n,_owner:u.current}}a.Fragment=f;a.jsx=x;a.jsxs=x;l.exports=a;var r=l.exports;const y=[{name:"Home",href:"/"},{name:"Blog",href:"/blog"},{name:"Features",href:"/features"}],b=({name:s,href:e,isActive:t})=>r.jsx("a",{href:e,className:`
            text-sm font-medium transition-colors duration-200 
            ${t?"text-tg-gold border-b-2 border-tg-gold":"text-gray-300 hover:text-white hover:border-b-2 hover:border-gray-500"}
            py-1 px-3
        `,children:s}),_=()=>{const s=typeof window<"u"?window.location.pathname:"/",e=t=>s===t||t==="/"&&s==="/index.html";return r.jsx("header",{className:"bg-tg-dark border-b border-tg-gray/50 shadow-lg sticky top-0 z-50",children:r.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center space-x-2",children:[r.jsxs("span",{className:"text-xl font-extrabold text-tg-gold tracking-wider",children:["T",r.jsx("span",{className:"text-gray-100",children:"'G"})]}),r.jsx("h1",{className:"text-sm text-gray-400 font-light hidden sm:block",children:"The Trader's Gazette"})]}),r.jsx("nav",{className:"hidden md:flex space-x-8",children:y.map(t=>r.jsx(b,{name:t.name,href:t.href,isActive:e(t.href)},t.href))}),r.jsxs("div",{className:"flex items-center space-x-3",children:[r.jsx("a",{href:"/auth/login",className:"text-sm font-semibold text-gray-300 hover:text-white transition-colors duration-200 py-1 px-3 hidden sm:block",children:"Login"}),r.jsx("a",{href:"/auth/register",className:`
                            bg-tg-gold text-gray-900 font-bold text-sm 
                            py-1.5 px-4 rounded-md shadow-md 
                            hover:bg-yellow-500 transition-all duration-300
                            whitespace-nowrap
                        `,children:"Register"})]})]})})};export{_ as default};
