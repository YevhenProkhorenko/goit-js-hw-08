function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var i,o,r,a,u,f,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,r=o;return i=o=void 0,l=t,a=e.apply(r,n)}function O(e){return l=e,u=setTimeout(T,t),c?y(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=r}function T(){var e=g();if(j(e))return h(e);u=setTimeout(T,function(e){var n=t-(e-f);return s?d(n,r-(e-l)):n}(e))}function h(e){return u=void 0,v&&i?y(e):(i=o=void 0,a)}function w(){var e=g(),n=j(e);if(i=arguments,o=this,f=e,n){if(void 0===u)return O(f);if(s)return u=setTimeout(T,t),y(f)}return void 0===u&&(u=setTimeout(T,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,r=(s="maxWait"in n)?m(b(n.maxWait)||0,t):r,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=f=o=u=void 0},w.flush=function(){return void 0===u?a:h(g())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:i,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form"),O={};y.addEventListener("input",e(t)((function(e){O.email=e.target.email.value,O.message=e.target.message.value,localStorage.setItem("feedback-form-state",JSON.stringify(O))}),500)),y.addEventListener("submit",(function(e){e.preventDefault(),O.email=e.target.email.value,O.message=e.target.message.value,console.log(O),localStorage.removeItem("feedback-form-state"),y.reset()})),function(){let e=JSON.parse(localStorage.getItem("LOCALSTORAGE_KEY"));y.elements.email.value=e.email,y.elements.message.value=e.message}();
//# sourceMappingURL=03-feedback.31d478df.js.map
