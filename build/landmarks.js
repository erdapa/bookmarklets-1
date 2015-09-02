!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var r=n(3),a=o(r),i=n(2),l=n(4);!function(){function e(e){var t=e.tagName.toLowerCase(),n=l.getAttributeValue(e,"role");return n.length?t+' [role="'+n+'"]':t}function t(t,n){var o=e(t),r=l.getAccessibleName(t)||n.label;return"ELEMENT: "+o+"\nACC. NAME: "+r}var n=[{selector:'aside:not([role]), [role="complementary"]',color:"brown",label:"complementary"},{selector:'body > footer, [role="contentinfo"]',color:"olive",label:"contentinfo"},{selector:'[role="application"]',color:"teal",label:"application"},{selector:'nav, [role="navigation"]',color:"green",label:"navigation"},{selector:'body > header, [role="banner"]',color:"gray",label:"banner"},{selector:'[role="search"]',color:"purple",label:"search"},{selector:'main, [role="main"]',color:"navy",label:"main"}],o=n.map(function(e){return"<li>"+e.selector+"</li>"}).join(""),r={msgTitle:"Landmarks",msgText:"No elements with ARIA Landmark roles found: <ul>"+o+"</ul>",targetList:n,cssClass:i.landmarksCss,getInfo:t,dndFlag:!0},s=new a["default"]("a11yLandmarks",r);s.run()}()},function(e,t){"use strict";function n(){var e,t="undefined"==typeof window.pageXOffset?(((e=document.documentElement)||(e=document.body.parentNode))&&"number"==typeof e.ScrollLeft?e:document.body).ScrollLeft:window.pageXOffset,n="undefined"==typeof window.pageYOffset?(((e=document.documentElement)||(e=document.body.parentNode))&&"number"==typeof e.ScrollTop?e:document.body).ScrollTop:window.pageYOffset;return{x:t,y:n}}function o(e,t,o){function r(t){t||(t=window.event);var o=n();e.style.left=t.clientX+o.x-c+"px",e.style.top=t.clientY+o.y-f+"px",e.style.cursor="move",t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}function a(t){t||(t=window.event),e.style.cursor="grab",e.style.cursor="-moz-grab",e.style.cursor="-webkit-grab",document.removeEventListener?(document.removeEventListener("mouseup",a,!0),document.removeEventListener("mousemove",r,!0)):document.detachEvent&&(e.detachEvent("onlosecapture",a),e.detachEvent("onmouseup",a),e.detachEvent("onmousemove",r),e.releaseCapture()),t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}var i=n(),l=o.clientX+i.x,s=o.clientY+i.y,u=e.offsetLeft,d=e.offsetTop,c=l-u,f=s-d;t&&t(e),document.addEventListener?(document.addEventListener("mousemove",r,!0),document.addEventListener("mouseup",a,!0)):document.attachEvent&&(e.setCapture(),e.attachEvent("onmousemove",r),e.attachEvent("onmouseup",a),e.attachEvent("onlosecapture",a)),o.stopPropagation?o.stopPropagation():o.cancelBubble=!0,o.preventDefault?o.preventDefault():o.returnValue=!1}function r(e,t){for(var n=0,o=e.firstChild;o;)o.nodeType===Node.ELEMENT_NODE&&t.indexOf(o.tagName)>-1&&(n+=1),o=o.nextElementSibling;return n}Object.defineProperty(t,"__esModule",{value:!0}),t.getScrollOffsets=n,t.drag=o,t.countChildrenWithTagNames=r},function(e,t,n){"use strict";function o(e){function t(e){for(var t=!0;t;){var n=e;if(o=r=a=i=l=void 0,t=!1,n.nodeType===Node.DOCUMENT_NODE)return!0;var o=window.getComputedStyle(n,null),r=o.getPropertyValue("display"),a=o.getPropertyValue("visibility"),i=n.getAttribute("hidden"),l=n.getAttribute("aria-hidden");if("none"===r||"hidden"===a||null!==i||"true"===l)return!1;e=n.parentNode,t=!0}}return t(e)}function r(e){var t=e.targetList,n=e.cssClass,r=e.getInfo,a=e.dndFlag,l=0;return t.forEach(function(e){var t=document.querySelectorAll(e.selector);Array.prototype.forEach.call(t,function(t){var s,u;o(t)&&(s=t.getBoundingClientRect(),u=i.createOverlay(e,s,n),a&&i.addDragAndDrop(u),r&&(u.title=r(t,e)),document.body.appendChild(u),l+=1)})}),l}function a(e){var t="div."+e,n=document.querySelectorAll(t);Array.prototype.forEach.call(n,function(e){document.body.removeChild(e)})}Object.defineProperty(t,"__esModule",{value:!0}),t.addNodes=r,t.removeNodes=a;var i=n(6),l="a11yGfdXALm0";t.formsCss=l;var s="a11yGfdXALm1";t.headingsCss=s;var u="a11yGfdXALm2";t.imagesCss=u;var d="a11yGfdXALm3";t.landmarksCss=d;var c="a11yGfdXALm4";t.listsCss=c},function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(2),l=n(5),s=o(l),u=function(){var e=function(t,n){var o=this;return r(this,e),"object"==typeof window[t]?window[t]:(this.cssClass=n.cssClass,this.msgTitle=n.msgTitle,this.msgText=n.msgText,this.params=n,this.show=!1,window.addEventListener("resize",function(e){i.removeNodes(o.cssClass),s.resize(),o.show=!1}),void(window[t]=this))};return a(e,[{key:"run",value:function(){s.hide(),this.show=!this.show,this.show?0===i.addNodes(this.params)&&(s.show(this.msgTitle,this.msgText),this.show=!1):i.removeNodes(this.cssClass)}}]),e}();t["default"]=u,e.exports=t["default"]},function(e,t){"use strict";function n(e){var t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;return e.replace(t,"").replace(/\s+/g," ")}function o(e){var t;return null===e?"":(t=s(e),t?t:e.title?n(e.title):"")}function r(e,t){var n,r,a,i,l=e.getAttribute(t),s=[];if(l&&l.length)for(n=l.split(" "),r=0;r<n.length;r++)a=document.getElementById(n[r]),i=o(a),i.length&&s.push(i);return s.length?s.join(" "):""}function a(e,t){var o=e.getAttribute(t);return null===o?"":n(o)}function i(e){var t;return t=r(e,"aria-labelledby"),t.length?t:(t=a(e,"aria-label"),t.length?t:"")}function l(e){var t;return t=i(e),t.length?t:(t=a(e,"title"),t.length?t:"")}function s(e){function t(e,o){var r,i,l;switch(e.nodeType){case Node.ELEMENT_NODE:r=e.tagName.toLowerCase(),"img"===r||"area"===r?(i=a(e,"alt"),i.length&&o.push(i)):e.hasChildNodes()&&Array.prototype.forEach.call(e.childNodes,function(e){t(e,o)});break;case Node.TEXT_NODE:l=n(e.textContent),l.length&&o.push(l)}return o}var o;return o=t(e,[]),o.length?o.join(" "):""}Object.defineProperty(t,"__esModule",{value:!0}),t.getAttributeValue=a,t.getAccessibleNameAria=i,t.getAccessibleName=l,t.getElementText=s},function(e,t,n){"use strict";function o(e){var t=window.innerWidth/3.2,n=window.innerWidth/2-t/2,o=u.getScrollOffsets();e.style.width=t+"px",e.style.left=o.x+n+"px",e.style.top=o.y+30+"px"}function r(e){var t=document.createElement("div"),n=document.createElement("button");return t.className="oaa-message-dialog",o(t),n.onclick=e,t.appendChild(n),document.body.appendChild(t),t}function a(e){e&&document.body.removeChild(e)}function i(e,t){var n,o;window[d]||(window[d]=r(l)),n=document.createElement("h2"),n.innerHTML=e,window[d].appendChild(n),o=document.createElement("div"),o.innerHTML=t,window[d].appendChild(o)}function l(){window[d]&&(a(window[d]),delete window[d])}function s(){window[d]&&o(window[d])}Object.defineProperty(t,"__esModule",{value:!0}),t.show=i,t.hide=l,t.resize=s;var u=n(1),d="a11yMessageDialog"},function(e,t,n){"use strict";function o(e,t,n){var o=document.createElement("div"),r=a.getScrollOffsets(),l="background-color: "+e.color,s=34,u=27;return o.setAttribute("class",[n,"oaa-element-overlay"].join(" ")),o.startLeft=t.left+r.x+"px",o.startTop=t.top+r.y+"px",o.style.left=o.startLeft,o.style.top=o.startTop,o.style.width=Math.max(t.width,s)+"px",o.style.height=Math.max(t.height,u)+"px",o.style.borderColor=e.color,o.style.zIndex=i,o.innerHTML='<div style="'+l+'">'+e.label+"</div>",o}function r(e){function t(e){var t=100;e.style.zIndex=i+=t}function n(e){e.style.left=e.startLeft,e.style.top=e.startTop}var o=e.firstChild;o.onmousedown=function(e){a.drag(this.parentNode,t,e)},o.ondblclick=function(e){n(this.parentNode)}}Object.defineProperty(t,"__esModule",{value:!0}),t.createOverlay=o,t.addDragAndDrop=r;var a=n(1),i=1e5}]);