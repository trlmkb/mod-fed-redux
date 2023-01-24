"use strict";(self.webpackChunknav=self.webpackChunknav||[]).push([[71],{71:(n,e,t)=>{t.r(e);var r=t(950),a=t.n(r),o=t(181),i=t.n(o),c=t(540);const s=function(){var n=(0,c.useStore)(),e=n.count,t=n.clear,r=a().useRef(null);a().useEffect((function(){null!==r.current&&0!==e&&r.current.classList.add("-animate")}),[e]);var o=function(){null!==r.current&&r.current.classList.remove("-animate")};return a().useEffect((function(){if(null!==r.current)return r.current.addEventListener("animationend",o),function(){r.current.removeEventListener("animationend",o)}}),[]),a().createElement("fieldset",{className:"header mf-wrap"},a().createElement("legend",null,a().createElement("span",{className:"mf"},"I am a ",a().createElement("strong",null,"Header")," component")),a().createElement("div",{className:"title"},a().createElement("span",null,"le"),"Shop"),a().createElement("div",{className:"cart"},a().createElement("div",{className:"cart-count",ref:r},e),a().createElement("button",{onClick:t,className:"button"},"abandon ",a().createElement("strong",null,"cart"))))};var l=t(379),d=t.n(l),f=t(795),u=t.n(f),m=t(569),p=t.n(m),h=t(565),g=t.n(h),v=t(216),b=t.n(v),x=t(589),w=t.n(x),y=t(238),E={};E.styleTagTransform=w(),E.setAttributes=g(),E.insert=p().bind(null,"head"),E.domAPI=u(),E.insertStyleElement=b(),d()(y.Z,E),y.Z&&y.Z.locals&&y.Z.locals;var k=function(){return a().createElement(c.StoreProvider,null,a().createElement("div",{className:"page"},a().createElement("fieldset",{className:"mf-wrap"},a().createElement("legend",null,a().createElement("span",{className:"mf"},"I am ",a().createElement("strong",null,"Nav")," microfrontend")),a().createElement(s,null),a().createElement("div",{className:"count-wrapper"},"This isn't the microfrontend you're looking for."))))};i().render(a().createElement(k,null),document.getElementById("app"))},238:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(81),a=t.n(r),o=t(645),i=t.n(o),c=t(637),s=i()(a());s.i(c.Z),s.push([n.id,"",""]);const l=s},637:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,'*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\nhtml,\nbody {\n  margin: 0;\n  height: 100vh;\n  background-color: #111;\n  color: #fff;\n}\n.page {\n  max-width: 120rem;\n  margin: 0 auto;\n}\n.main {\n  height: 100vh;\n  display: grid;\n  place-items: center;\n}\nhtml {\n  font-size: 62.5%;\n  box-sizing: border-box;\n}\nbody {\n  font: 1.6rem/1.5 Avenir Next, Proxima Nova, "Lucida Grande", Tahoma, Verdana,\n    sans-serif;\n  letter-spacing: -0.035em;\n}\n#app,\n.page {\n  min-height: 100vh;\n}\n.page {\n  display: flex;\n  flex-direction: column;\n  gap: 4rem;\n  padding: 4rem;\n  place-content: center;\n}\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 4rem 6rem;\n  color: #fff;\n}\n.mf-wrap:hover {\n  outline: 10px dashed cyan;\n}\n.mf-wrap:hover .mf-wrap:hover {\n  outline: 10px dashed yellow;\n}\n.mf-wrap .mf-wrap.header {\n  border-radius: 0;\n  margin: 0 calc(-4rem - 1px) 4rem;\n}\n.mf-wrap.header legend {\n}\n.mf-wrap.header legend .mf {\n  font-size: 1.8rem;\n}\n.mf-wrap.header legend .mf strong::before {\n  height: 4px;\n  bottom: 3px;\n}\n.highlight:hover {\n  position: relative;\n  --dash-height: 8px;\n  --dash-width: 24px;\n}\n.highlight:hover::after {\n  content: "";\n  pointer-events: none;\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  background: linear-gradient(90deg, #0ff 50%, transparent 50%),\n    linear-gradient(90deg, #0ff 50%, transparent 50%),\n    linear-gradient(0deg, #0ff 50%, transparent 50%),\n    linear-gradient(0deg, #0ff 50%, transparent 50%);\n  background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;\n  background-size: var(--dash-width) var(--dash-height),\n    var(--dash-width) var(--dash-height), var(--dash-height) var(--dash-width),\n    var(--dash-height) var(--dash-width);\n  background-position: 0% 0%, 100% 100%, 0% 100%, 100% 0px;\n  animation: dash 15s linear infinite;\n}\n.header .cart-count {\n  font-weight: 700;\n  font-size: 3.2rem;\n  line-height: 1.25;\n}\n.header .cart-count.-animate {\n  animation: count-flick 0.2s ease-out;\n}\n.title {\n  font-weight: 700;\n  font-size: 2.4rem;\n}\n.title span {\n  font-weight: 400;\n  color: #ff3454;\n  font-weight: 700;\n}\n.cart {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n}\n.mf-wrap {\n  position: relative;\n  display: flex;\n  margin: 0;\n  border-radius: 8px;\n  border: 1px solid #333;\n}\n.mf-inner {\n  display: flex;\n}\n.mf-wrap:not(.header) {\n  flex-direction: column;\n  padding: 4rem;\n}\n.mf-wrap legend {\n  padding: 2rem;\n  margin: 0 4rem;\n}\n.mf {\n  color: #8b8b8b;\n  font-size: 2.4rem;\n}\n.mf strong {\n  text-transform: uppercase;\n  letter-spacing: 0.35em;\n  color: #fff;\n  position: relative;\n  z-index: 1;\n}\n.mf strong::before {\n  content: "";\n  height: 6px;\n  width: 98%;\n  left: 4px;\n  bottom: 4px;\n  z-index: -1;\n  background: #ff3454;\n  position: absolute;\n}\n.button {\n  cursor: pointer;\n  font: inherit;\n  background: none;\n  border: 1px solid currentColor;\n  border-radius: 4px;\n  color: #404cfa;\n  font-size: 1.4rem;\n  line-height: 1.5;\n  font-weight: 500;\n  padding: 0.4rem 2.4rem;\n  height: 4.2rem;\n  text-decoration: none;\n  transition: all 0.2s ease-in-out;\n}\n.button:hover,\n.button:active,\n.button:focus {\n  background-color: #404cfa;\n  border-color: #404cfa;\n  color: #fff;\n  outline: 0;\n}\n.button--primary {\n  background-color: #404cfa;\n  border-color: #404cfa;\n  color: #fff;\n}\n.button--icon {\n  position: relative;\n  width: 4.2rem;\n  padding: 0.8rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50% / 50%;\n  aspect-ratio: 1;\n  max-width: 32rem;\n  background-color: #202020;\n  border: 0;\n  transition: all 300ms cubic-bezier(0.34, 1.56, 0.64, 1);\n  transform: rotate(-45deg);\n}\n.button--icon:hover {\n  transform: scale(0.9) rotate(-45deg);\n}\n.button--icon:active {\n  transform: scale(0.8) rotate(-45deg);\n  border-radius: 40% / 50%;\n  box-shadow: inset -4rem 4rem 0 #303acf, inset 4rem -4rem 0 #303acf;\n}\n.button--icon:active::after {\n  content: "";\n  width: 6rem;\n  height: 6rem;\n  border-radius: 50%;\n  position: absolute;\n  top: calc(50% - 3rem);\n  left: calc(50% - 3rem);\n  z-index: 1;\n  background-repeat: no-repeat;\n  background-image: radial-gradient(#fafafa 15%, transparent 20%),\n    radial-gradient(#fafafa 15%, transparent 0),\n    radial-gradient(#1e1e24 31%, transparent 0);\n  background-color: #39fbd9;\n  background-position: 40% -10%, 50% 110%, 50% 50%;\n  background-size: 40px 40px, 40px 40px, 60px 60px;\n}\n.button--icon:active svg {\n  background-color: #fff;\n  fill: transparent;\n  border-radius: 50%;\n}\n.button--primary:hover,\n.button--primary:focus {\n  background-color: #3440e2;\n  border-color: #3440e2;\n}\n.button strong {\n  font-weight: 900;\n}\n.count-wrapper {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 4rem;\n  padding: 4rem;\n  gap: 2rem;\n}\n.count-actions-wrap {\n  align-self: stretch;\n  text-align: right;\n  margin: 0 0 0 auto;\n  aspect-ratio: 1;\n}\n.count-actions-wrap .button {\n  width: 100%;\n  height: 100%;\n}\n.count {\n  flex: 1 1 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n}\n.count-text {\n  font-weight: 600;\n  font-size: 3.2rem;\n  writing-mode: vertical-lr;\n  transform: rotate(-180deg);\n}\n.count-number {\n  font-weight: 900;\n  font-size: 24vmin;\n  line-height: 1;\n  min-width: 2ch;\n  text-align: right;\n  color: #ff3454;\n}\n.plus {\n  width: 9.6rem;\n  height: 9.6rem;\n  fill: #fff;\n  transform: rotate(45deg);\n}\n.container {\n  max-width: 160rem;\n  margin: 0 auto;\n}\n@keyframes dash {\n  to {\n    background-position: 100% 0%, 0% 100%, 0% 0%, 100% 100%;\n  }\n}\n@keyframes count-flick {\n  0% {\n    /* opacity: 0; */\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.3);\n  }\n  75% {\n    transform: scale(0.9);\n  }\n  100% {\n    /* opacity: 1; */\n    transform: scale(1);\n  }\n}\n',""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=o[l]||0,f="".concat(l," ").concat(d);o[l]=d+1;var u=t(f),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var p=a(m,r);r.byIndex=c,e.splice(c,0,{identifier:f,updater:p,references:1})}i.push(f)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var c=t(o[i]);e[c].references--}for(var s=r(n,a),l=0;l<o.length;l++){var d=t(o[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}}]);