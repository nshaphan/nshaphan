(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{5552:function(e,t,r){"use strict";r.d(t,{Z:function(){return a},y:function(){return c}});r(7294);var n=r(1664),o=r(5893);function a(e){var t=e.posts;return(0,o.jsxs)("section",{className:"bg-white dark:bg-gray-800",children:[(0,o.jsx)("div",{className:"max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800",children:(0,o.jsx)("h1",{className:" text-5xl md:text-8xl font-bold py-10 text-center md:text-left",children:"Articles"})}),(0,o.jsx)("div",{className:"bg-[#F1F1F1] dark:bg-gray-900",children:(0,o.jsx)("div",{className:"max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-10 pb-40",children:null===t||void 0===t?void 0:t.map((function(e,t){return(0,o.jsx)(c,{post:e},t)}))})})]})}var c=function(e){var t=e.post;e.index;return(0,o.jsx)(n.default,{href:"/blog/"+t.slug,passHref:!0,className:"font-semibold group flex flex-row space-x-2 w-full items-center",children:(0,o.jsxs)("div",{className:"github-repo shadow hover:bg-gray-200 dark:hover:bg-gray-700 p-10 rounded-lg cursor-pointer",children:[(0,o.jsx)("h1",{className:"font-semibold text-xl dark:text-gray-200 text-gray-700",children:t.frontMatter.title}),(0,o.jsx)("p",{className:"text-base font-normal my-4 text-gray-500",children:t.frontMatter.description}),(0,o.jsx)("button",{type:"button",className:"hover:bg-gray-900 rounded-md px-2 py-1  hover:text-gray-50",children:"Read More"})]})})}},2167:function(e,t,r){"use strict";var n=r(3038);t.default=void 0;var o,a=(o=r(7294))&&o.__esModule?o:{default:o},c=r(1063),l=r(4651),s=r(7426);var i={};function u(e,t,r,n){if(e&&c.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;i[t+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,o=l.useRouter(),f=a.default.useMemo((function(){var t=c.resolveHref(o,e.href,!0),r=n(t,2),a=r[0],l=r[1];return{href:a,as:e.as?c.resolveHref(o,e.as):l||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,g=e.shallow,x=e.scroll,b=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var y=(t=a.default.Children.only(v))&&"object"===typeof t&&t.ref,m=s.useIntersection({rootMargin:"200px"}),w=n(m,2),j=w[0],_=w[1],N=a.default.useCallback((function(e){j(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,j]);a.default.useEffect((function(){var e=_&&r&&c.isLocalURL(d),t="undefined"!==typeof b?b:o&&o.locale,n=i[d+"%"+p+(t?"%"+t:"")];e&&!n&&u(o,d,p,{locale:t})}),[p,d,_,b,r,o]);var k={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,l,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),null==l&&n.indexOf("#")>=0&&(l=!1),t[o?"replace":"push"](r,n,{shallow:a,locale:s,scroll:l}))}(e,o,d,p,h,g,x,b)},onMouseEnter:function(e){c.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof b?b:o&&o.locale,M=o&&o.isLocaleDomain&&c.getDomainLocale(p,E,o&&o.locales,o&&o.domainLocales);k.href=M||c.addBasePath(c.addLocale(p,E,o&&o.defaultLocale))}return a.default.cloneElement(t,k)};t.default=f},7426:function(e,t,r){"use strict";var n=r(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!c,s=o.useRef(),i=o.useState(!1),u=n(i,2),f=u[0],d=u[1],p=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||f||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=l.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,c=n.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),l.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,f]);return o.useEffect((function(){if(!c&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=r(7294),a=r(3447),c="undefined"!==typeof IntersectionObserver;var l=new Map},2695:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return c},default:function(){return l}});var n=r(5552),o=(r(7294),r(4332)),a=r(5893),c=!0;function l(e){var t=e.posts;return(0,a.jsx)(o.Z,{title:"Blog - Shaphan",children:(0,a.jsx)(n.Z,{posts:t})})}},5809:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return r(2695)}])},1664:function(e,t,r){e.exports=r(2167)},1163:function(e,t,r){e.exports=r(4651)},4925:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,{Z:function(){return n}})}},function(e){e.O(0,[332,774,888,179],(function(){return t=5809,e(e.s=t);var t}));var t=e.O();_N_E=t}]);