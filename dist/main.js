(()=>{var n={89:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},248:n=>{"use strict";n.exports=function(n){return n[1]}},691:()=>{document.addEventListener("DOMContentLoaded",(function(){var n=document.getElementById("news-container"),e=document.getElementById("load-more-btn"),t=0;function o(n){return fetch(n).then((function(n){return n.json()}))}function r(e){var r=e.slice(t,t+10).map((function(n){return o("https://hacker-news.firebaseio.com/v0/item/".concat(n,".json"))}));Promise.all(r).then((function(e){e.forEach((function(e){var t=document.createElement("div");t.id="news-item",t.innerHTML='<h3 id="news-title">'.concat(e.title,'</h3>\n    <a id="anchor" href="').concat(e.url,'" target="_blank">Click here to read</a>\n    <p id="news-date">Date: ').concat(new Date(1e3*e.time).toLocaleString(),"</p>"),n.appendChild(t)}))})).catch((function(n){return console.error("Error fetching news:",n)}))}o("https://hacker-news.firebaseio.com/v0/newstories.json").then((function(n){r(n),t+=10,e.addEventListener("click",(function(){r(n),t+=10}))})).catch((function(n){return console.error("Error fetching news IDs:",n)}))}))},16:(n,e,t)=>{"use strict";t.d(e,{A:()=>c});var o=t(248),r=t.n(o),i=t(89),a=t.n(i)()(r());a.push([n.id,'* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 20px;\n}\nbody {\n    background-color: rgb(148, 178, 214);\n    color: black;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n#header {\n    background-color: rgb(8, 8, 138);\n    color: white;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 50px; /* Altezza fissa */\n    display: flex;\n    align-items: center;\n    justify-content: center;}\n#logo {\n    height: 80px;\n}\n#title-wrapper {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n#titleHeader {\n    font-family: "Courier Prime", monospace;\n    font-weight: 300;\n    font-style: normal;\n    font-size: 20px;\n    text-shadow: 2px 2px #000000;\n}\n#description {\n    text-align: center;\n    width: 75%;\n}\n#news {        \n    font-size: 30px;\n}\n#news-description {\n    font-family: "Courier Prime", monospace;\n    font-weight: 300;\n    font-style: normal;\n    font-style: normal;\n    font-size: 20px;\n}\n#news-container {\n    font-family: "Courier Prime", monospace;\n    font-weight: 300;\n    font-style: normal;\n    justify-content: center;\n    padding-top: 20px;\n    width: 75%;\n}\n.advanced {\n    padding-top: 20px;\n}\n#news-item {\n    background-color: rgba(255, 255, 255, 0.381);\n    border: solid 2px black;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    padding: 0;\n    margin-bottom: 20px;\n    font-size: 15px;\n    text-align: center;\n}\n#anchor {\n    font-family: "Courier Prime", monospace;\n    font-weight: 300;\n    font-style: normal;\n    background-color: rgb(148, 178, 214);\n    text-decoration: none;\n    color: black;\n    border: solid 2px black;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    padding: 5px;\n}\n#anchor:hover {\n    background-color: rgb(8, 8, 138);\n    color: white;\n}  \n#anchor:active {\n    background-color: rgb(158, 158, 158);\n    transition: 0.2s;\n} \n#news-date {\n    text-align: center;\n}\n#load-more-btn {\n    display: block;\n    margin: 0 auto;\n    margin-top: 5px;\n    margin-bottom: 5px;\n    width: 150px;\n    justify-content: center;\n    align-items: center;\n    float: center;\n    border: 2px solid black;\n    cursor: pointer;\n    padding: 20px;\n    text-align: center;\n    transition-duration: 0.5s;\n    background-color: rgb(146, 170, 207);\n\n}\n#load-more-btn:hover {\n    background-color: rgb(8, 8, 138);\n    color: white;\n}  \n#load-more-btn:active {\n    background-color: rgb(158, 158, 158);\n    transition: 0.2s;\n}  \n#footer {\n    background-color: rgb(8, 8, 138);\n    color: white;\n    font-size: 12px;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 30px; /* Altezza fissa */\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0 10px; /* Aggiunto padding per allineare il contenuto */\n}\n@media only screen and (min-width: 961px) {\n    body {\n        font-size: 2rem;\n    }\n   \n    #load-more-btn {\n        font-size: 1rem;\n    }\n\n    footer {\n        font-size: 1.5rem;\n    }\n\n    #news-container {\n        font-size: 1.5rem;\n        padding: 10px;\n    }\n  }\n  \n  /* tablet e telefoni */\n  @media only screen and (min-width: 481px) and (max-width: 960px) {\n    body, footer {\n        float: center;\n        justify-content: center;\n        text-align: center;\n        font-size: 1.25rem;\n        width: 100%;\n        height: 100%;\n    }\n    #news-container {\n        float: center;\n        justify-content: center;\n        text-align: center;\n        font-size: 1.25rem;\n        padding: 10px;\n    }\n  }\n\n  /*telefoni piccoli tipo iphone se*/\n@media only screen and (max-width: 480px) {\n    body, footer {\n        font-size: 90%;\n        width: 100%;\n        height: 85%;\n    }\n    #header {\n        background-color: rgb(8, 8, 138);\n        color: white;\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 50px; /* Altezza fissa */\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        padding: 0 10px; /* Aggiunto padding per allineare il contenuto */\n    }\n    #logo {\n        height: 80px; /* Ridotto l\'altezza del logo */\n    }\n    .title-wrapper {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        flex-grow: 1; /* Fai espandere il wrapper per riempire lo spazio rimanente */\n    }\n    #titleHeader {\n        margin: 0;\n        font-size: 14px; /* Ridotto il font size per adattarsi alla dimensione */\n    }\n    #news {        \n        font-size: 30px;\n    }\n    #news-description {\n        font-size: 20px;\n        padding: 0 10px;\n    }\n    #description {\n        width: 95%;\n        padding: 0 10px;\n    }\n    #news-container {\n        width: 95%;\n        padding: 0 10px;   \n    }\n}',""]);const c=a},72:n=>{"use strict";var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var f=t(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)e[f].references++,e[f].updater(u);else{var m=r(u,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=o(n,r),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},659:n=>{"use strict";var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{"use strict";var n=t(72),e=t.n(n),o=t(825),r=t.n(o),i=t(659),a=t.n(i),c=t(56),s=t.n(c),d=t(540),l=t.n(d),p=t(113),f=t.n(p),u=t(16),m={};m.styleTagTransform=f(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),e()(u.A,m),u.A&&u.A.locals&&u.A.locals,t(691)})()})();