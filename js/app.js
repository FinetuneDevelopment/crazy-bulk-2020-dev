!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){var r=n(1),o=n(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),l=[];function i(e){for(var t=-1,n=0;n<l.length;n++)if(l[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],s=t.base?a[0]+t.base:a[0],c=n[s]||0,u="".concat(s," ").concat(c);n[s]=c+1;var d=i(u),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(l[d].references++,l[d].updater(f)):l.push({identifier:u,updater:b(f,t),references:1}),r.push(u)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var l=a(e.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var a=document.createTextNode(o),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(a,l[t]):e.appendChild(a)}}function p(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,v=0;function b(e,t){var n,r,o;if(t.singleton){var a=v++;n=h||(h=c(t)),r=f.bind(null,n,a,!1),o=f.bind(null,n,a,!0)}else n=c(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=i(n[r]);l[o].references--}for(var a=s(e,t),c=0;c<n.length;c++){var u=i(n[c]);0===l[u].references&&(l[u].updater(),l.splice(u,1))}n=a}}}},function(e,t,n){},function(e,t){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(Element.prototype.matches.call(t,e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null})},function(e,t){function n(e,t){this.dialogEl=e,this.overlayEl=t,this.focusedElBeforeOpen;var n=this.dialogEl.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]');this.focusableEls=Array.prototype.slice.call(n),this.firstFocusableEl=this.focusableEls[0],this.lastFocusableEl=this.focusableEls[this.focusableEls.length-1],this.close()}n.prototype.open=function(e){var t=this,n=e.target.closest('[data-js="dialog-open"]'),r=n.getAttribute("data-contentid"),o=n.getAttribute("data-heading");r&&o&&t._swapContent(r,o),this.dialogEl.removeAttribute("aria-hidden"),this.overlayEl.removeAttribute("aria-hidden"),this.focusedElBeforeOpen=document.activeElement,this.dialogEl.addEventListener("keydown",(function(e){t._handleKeyDown(e)})),this.overlayEl.addEventListener("click",(function(){t.close()})),this.firstFocusableEl.focus()},n.prototype.close=function(){this.dialogEl.setAttribute("aria-hidden",!0),this.overlayEl.setAttribute("aria-hidden",!0),this.focusedElBeforeOpen&&this.focusedElBeforeOpen.focus()},n.prototype.rebuildFocus=function(){var e=this.dialogEl.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]');this.focusableEls=Array.prototype.slice.call(e),this.firstFocusableEl=this.focusableEls[0],this.lastFocusableEl=this.focusableEls[this.focusableEls.length-1]},n.prototype._handleKeyDown=function(e){var t=this;switch(e.keyCode){case 9:if(1===t.focusableEls.length){e.preventDefault();break}e.shiftKey?document.activeElement===t.firstFocusableEl&&(e.preventDefault(),t.lastFocusableEl.focus()):document.activeElement===t.lastFocusableEl&&(e.preventDefault(),t.firstFocusableEl.focus());break;case 27:t.close()}},n.prototype.addEventListeners=function(e,t){var n=this;r.addEventListener("click",(function(e){e.target.getAttribute("data-js")&&n.close()}));for(var o=document.querySelectorAll(e),a=0;a<o.length;a++)o[a].addEventListener("click",(function(e){n.open(e)}));for(var l=document.querySelectorAll(t),i=0;i<l.length;i++)l[i].addEventListener("click",(function(){n.close()}))},n.prototype._swapContent=function(e,t){var n=document.querySelector("#"+e),r=document.querySelector("#dialog-content"),o=document.querySelector("#dialog-title");if(n&&r&&o&&t.length>0){var a=n.cloneNode(!0);a.removeAttribute("hidden"),a.setAttribute("id",a.getAttribute("id")+1);for(var l=a.querySelectorAll("[id]"),i=0;i<l.length;i++)l[i].setAttribute("id",l[i].getAttribute("id")+"1");for(var s=a.querySelectorAll("label[for]"),c=0;c<s.length;c++)s[c].setAttribute("for",s[c].getAttribute("for")+"1");o.innerHTML=t,r.innerHTML="",r.appendChild(a),this.rebuildFocus()}};var r=document.querySelector('[data-js="dialog"]'),o=document.querySelector('[data-js="dialog-overlay"]'),a=document.querySelector('[data-js="dialog-open"]'),l=document.querySelector('[data-js="dialog-close"]');r&&o&&a&&l&&new n(r,o).addEventListeners('[data-js="dialog-open"]','[data-js="dialog-close"]')},function(e,t,n){"use strict";n.r(t);n(0),n(3);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n(4);(new function(){var e={init:function(){document.addEventListener("click",(function(t){if(!e.isChild(t.target,"tooltip")){var n=document.querySelectorAll(".tooltip");if(n.length)for(var r=0;r<n.length;r++){var o=n[r].querySelector("input");if(o.checked){var a=new Event("change");o.checked=!1,o.dispatchEvent(a)}}}}),!1)},isChild:function(t,n){return"object"!==r(t.className)&&t.className.split(" ").indexOf(n)>=0||"HTML"!==t.tagName&&(t.parentNode&&e.isChild(t.parentNode,n))}};return e}).init(),(new function(){var e={init:function(){var e=document.querySelectorAll('[target="_blank"]');if(e.length)for(var t=0;t<e.length;t++){var n=e[t],r=n.getAttribute("rel");r?(-1===r.indexOf("noopener")&&(r+=" noopener",n.setAttribute("rel",r)),-1===r.indexOf("noreferrer")&&(r+=" noreferrer",n.setAttribute("rel",r))):n.setAttribute("rel","noopener noreferrer")}document.body&&document.body.classList.add("js")}};return e}).init(),(new function(){var e={init:function(){if(document.querySelectorAll(".tooltip"))for(var t=document.querySelectorAll('[data-js="tooltip"]'),n=function(n){var r=t[n],o=r.querySelector('input[type="checkbox"]'),a=r.querySelector(".details"),l=o.getAttribute("id");a.setAttribute("id",l+"-details"),o.setAttribute("aria-controls",l+"-details");var i=t[n].querySelectorAll(".details input, .details a, .details button");e.ariaUpdate(r),o.addEventListener("change",(function(){e.ariaUpdate(r)}));for(var s=0;s<i.length;s++)i[s].addEventListener("focus",(function(){var e=new Event("change");o.checked=!0,o.dispatchEvent(e)}),!0),i[s].addEventListener("blur",(function(){var e=new Event("change");o.checked=!1,o.dispatchEvent(e)}),!0)},r=0;r<t.length;r++)n(r)},ariaUpdate:function(e){var t=e.querySelector('input[type="checkbox"]');t.checked?t.setAttribute("aria-expanded","true"):t.setAttribute("aria-expanded","false")}};return e}).init(),(new function(){var e={init:function(){var e=document.querySelectorAll("output[for]");if(e)for(var t=function(t){var n=e[t],r=n.getAttribute("for");if(document.getElementById(r)){var o=document.getElementById(r);n.innerHTML=o.value,o.addEventListener("change",(function(){n.innerHTML=o.value}))}},n=0;n<e.length;n+=1)t(n)}};return e}).init(),(new function(){var e={},t=document.querySelectorAll('label[data-js="label-toggle"]');return e.init=function(){if(t.length){this.expandedStatus();for(var n=0;n<t.length;n++){var r=t[n],o=document.getElementById(r.getAttribute("for"));r.addEventListener("click",e.deselectRadio,!0),o.addEventListener("change",e.expandedStatus,!0)}}},e.deselectRadio=function(e){var t=document.getElementById(this.getAttribute("for"));if(!0===t.checked){t.checked=!1,e.preventDefault();var n=new Event("change");t.dispatchEvent(n)}},e.expandedStatus=function(){if(t.length)for(var e=0;e<t.length;e++){var n=t[e],r=n.getAttribute("for");!0===document.getElementById(r).checked?n.setAttribute("aria-expanded",!0):n.setAttribute("aria-expanded",!1),n.setAttribute("aria-controls",r)}},e}).init(),(new function(){var e={init:function(){var e=document.querySelectorAll('[data-js="share-links"] a'),t=document.location,n=document.title.split("|")[0].trim();if(e.length>0)for(var r=0;r<e.length;r++){var o=e[r],a=o.getAttribute("href");"https://twitter.com/intent/tweet"===a?o.setAttribute("href",a+"?url="+encodeURIComponent(t)+"&text="+encodeURIComponent(n)+"&via=phen_q"):"https://www.facebook.com/sharer/sharer.php"===a?o.setAttribute("href",a+"?u="+encodeURIComponent(t)+"&title="+encodeURIComponent(n)):"https://www.linkedin.com/sharing/share-offsite/"===a&&o.setAttribute("href",a+"?url="+encodeURIComponent(t))}}};return e}).init(),(new function(){var e={init:function(){var e=document.querySelector('[data-js="sticky-sm"]');if(e&&"IntersectionObserver"in window){new IntersectionObserver((function(t){t[0].isIntersecting&&e.classList.add("sticky-sm")}),{threshold:1}).observe(e)}}};return e}).init(),(new function(){var e={},t=document.querySelectorAll('[data-js="block-scroll"]');return e.init=function(){if(t.length){for(var n=0;n<t.length;n++){var r=t[n];if("pips"===r.getAttribute("data-nav")){var o=document.createElement("p"),a="";o.classList.add("text-center"),o.classList.add("flush"),o.setAttribute("data-js","pips");for(var l=r.querySelectorAll('[data-js="block-scroll-item"]').length,i=0;i<l;i++)a+='<button type="button" data-target="'+i+'" class="btn block-scroll__pip"><span class="sr-only">Show slide '+i+"</span></button>";o.innerHTML=a,r.insertAdjacentElement("afterend",o),o.addEventListener("click",e.slideTo,!0)}else if("progress"===r.getAttribute("data-nav")){var s=r.querySelectorAll('[data-js="block-scroll-item"]').length,c=document.createElement("div");c.setAttribute("data-js","progress"),c.innerHTML='<div class="row caption"><p class="offset-lg-2 col-4 col-lg-2 flush"><button type="button" class="text-uppercase btn text-yellow" data-js="progress-back" disabled><span class="shape sh-chev-left"></span> Back</button></p><p class="col-4 text-center text-uppercase flush" data-js="step">Step 1 of '+s+'</p><p class="col-4 col-lg-2 flush text-right"><button type="reset" class="btn text-uppercase text-yellow" title="Reset the form and start again" data-js="progress-reset">Exit <span class="shape sh-close"></span></button></p></div><div class="row justify-content-center"><p class="col-lg-8"><progress value="1" max="'+s+'"></progress></p></div>',r.insertAdjacentElement("beforebegin",c),c.addEventListener("click",this.clickTriage)}else{var u=document.createElement("p");u.classList.add("scroll-control"),u.classList.add("hidden"),u.setAttribute("data-js","scroll-control"),u.innerHTML='<button class="btn btn-secondary btn-inline" type="button" data-js="previous" title="Scroll left"><span class="ic-small"><span class="shape sh-chev-left"></span></span></button> <button class="btn btn-secondary btn-inline" type="button" data-js="next" title="Scroll right"><span class="ic-small"><span class="shape sh-chev-right"></span></span></button>',r.insertAdjacentElement("beforebegin",u);var d=r.previousElementSibling.querySelector('[data-js="previous"]'),f=r.previousElementSibling.querySelector('[data-js="next"]');d.addEventListener("click",this.previousItem,!1),f.addEventListener("click",this.nextItem,!1)}r.setAttribute("data-active","true"),r.style.scrollBehavior="smooth",r.addEventListener("click",this.clickTriage)}window.addEventListener("resize",this.scrollCheck),this.scrollCheck()}},e.scrollCheck=function(){if(t.length)for(var e=0;e<t.length;e++){var n=t[e];if("pips"===n.getAttribute("data-nav")||"progress"===n.getAttribute("data-nav"));else{var r=n.previousElementSibling;n.scrollWidth>n.clientWidth?r.classList.remove("hidden"):r.classList.add("hidden")}}},e.previousItem=function(t){var n,r,o,a=t.target;if(null!=a.closest('[data-js="block-scroll"]')?n=a.closest('[data-js="block-scroll"]'):null!=a.closest('[data-js="scroll-control"]')?n=a.closest('[data-js="scroll-control"]').nextElementSibling:null!=a.closest('[data-js="progress"]')&&(n=a.closest('[data-js="progress"]').nextElementSibling),null!=n){var l=n.querySelectorAll('[data-js="block-scroll-item"]');o=l.length;for(var i=[],s=0;s<o;s++)i[s]=l[s].offsetLeft;for(var c=i.length-1;c>=0;c--){if(c>0&&i[c]-n.scrollLeft<10){n.scrollLeft=i[c-1],r=c-1,e.progressUpdate(t,r,o);break}if(i[c]<n.scrollLeft){n.scrollLeft=i[c],r=c,e.progressUpdate(t,r,o);break}}}},e.nextItem=function(t){var n,r,o,a=t.target;if(null!=a.closest('[data-js="block-scroll"]')?n=a.closest('[data-js="block-scroll"]'):null!=a.closest('[data-js="scroll-control"]')&&(n=a.closest('[data-js="scroll-control"]').nextElementSibling),null!=n){var l=n.querySelectorAll('[data-js="block-scroll-item"]');o=l.length;for(var i,s=[],c=0;c<o;c++)s[c]=l[c].offsetLeft;i=s.length;for(var u=0;u<i;u++)if(s[u]>n.scrollLeft){if(u<i&&s[u]-n.scrollLeft<10){n.scrollLeft=s[u+1],r=u+1,e.progressUpdate(t,r,o);break}if(s[u]>n.scrollLeft){n.scrollLeft=s[u],r=u,e.progressUpdate(t,r,o);break}}}},e.slideTo=function(t,n){var r,o=t.target,a=o.getAttribute("data-target");if(null!=o.closest('[data-js="pips"]')?r=o.closest('[data-js="pips"]').previousElementSibling:null!=o.closest('[data-js="progress"]')&&(r=o.closest('[data-js="progress"]').nextElementSibling),null!=r){for(var l=r.querySelectorAll('[data-js="block-scroll-item"]'),i=[],s=0;s<l.length;s++)i[s]=l[s].offsetLeft;null!=n?(r.scrollLeft=i[n],e.progressUpdate(t,0,i.length)):(r.scrollLeft=i[a],e.progressUpdate(t,a,i.length))}},e.progressUpdate=function(e,t,n){var r,o=e.target;if(null==t&&(t=0),null==n&&(n=1),null!==o.closest('[data-js="block-scroll"]')?r=o.closest('[data-js="block-scroll"]').previousElementSibling:null!==o.closest('[data-js="progress"]')&&(r=o.closest('[data-js="progress"]')).nextElementSibling,null!=r){var a=r.querySelector('[data-js="progress-back"]');r.querySelector('[data-js="step"]').innerHTML="Step "+(t+1)+" of "+n,r.querySelector("progress").setAttribute("value",t+1),t>0&&null!=a?a.removeAttribute("disabled"):null!=a&&a.setAttribute("disabled","disabled")}},e.clickTriage=function(t){var n=t.target;"progress-forward"===n.getAttribute("data-js")?e.nextItem(t):"progress-back"===n.getAttribute("data-js")?e.previousItem(t):"progress-reset"===n.getAttribute("data-js")&&e.slideTo(t,0)},e}).init(),(new function(){var e={init:function(){var t=document.querySelector('[data-js="nav-main"]');null!=t&&(t.addEventListener("mouseover",(function(t){e.ariaUpdate(t,!0)}),!0),t.addEventListener("focus",(function(t){e.ariaUpdate(t,!0)}),!0),t.addEventListener("mouseout",(function(t){e.ariaUpdate(t,!1)}),!0),t.addEventListener("blur",(function(t){e.ariaUpdate(t,!1)}),!0))},ariaUpdate:function(e,t){var n,r,o=e.target.classList.contains("parent"),a=e.target.closest(".level-2");null===a&&(a=!1),(a||o)&&(a?n=(r=a).parentElement.querySelector(".parent"):o&&(r=(n=e.target).closest("li").querySelector(".level-2")),n.setAttribute("aria-expanded",t),n.setAttribute("aria-haspopup",!0),r.setAttribute("role","menu"),r.setAttribute("aria-label",n.textContent))}};return e}).init(),(new function(){var e={init:function(){window.addEventListener("resize",this.gridMeasure),this.gridMeasure()},gridMeasure:function(){var e=document.querySelectorAll("[data-offgrid-sm]");if(e.length&&!window.document.documentMode&&window.matchMedia("(max-width: 768px)").matches)for(var t=0;t<e.length;t++){var n=e[t],r=n.getAttribute("data-offgrid-sm"),o=n.getBoundingClientRect().x;"left"===r?n.style.marginLeft=-1*o+"px":"right"===r&&(n.style.marginRight=-1*(o-1)+"px")}else for(var a=0;a<e.length;a++)e[a].style.marginRight=0}};return e}).init(),(new function(){var e={init:function(){for(var t=document.querySelectorAll('[data-js="toggle"]'),n=0;n<t.length;n++)t[n].addEventListener("change",e.ariaUpdate,!0)},ariaUpdate:function(e){var t=e.target;t.setAttribute("aria-expanded",e.target.checked),t.setAttribute("aria-haspopup",!0),window.dispatchEvent(new Event("resize"))}};return e}).init()}]);