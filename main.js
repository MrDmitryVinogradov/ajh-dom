(()=>{var t={9662:(t,r,e)=>{var n=e(7854),o=e(614),i=e(6330),c=n.TypeError;t.exports=function(t){if(o(t))return t;throw c(i(t)+" is not a function")}},6077:(t,r,e)=>{var n=e(7854),o=e(614),i=n.String,c=n.TypeError;t.exports=function(t){if("object"==typeof t||o(t))return t;throw c("Can't set "+i(t)+" as a prototype")}},9670:(t,r,e)=>{var n=e(7854),o=e(111),i=n.String,c=n.TypeError;t.exports=function(t){if(o(t))return t;throw c(i(t)+" is not an object")}},8533:(t,r,e)=>{"use strict";var n=e(2092).forEach,o=e(9341)("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},8457:(t,r,e)=>{"use strict";var n=e(7854),o=e(9974),i=e(6916),c=e(7908),u=e(3411),a=e(7659),s=e(4411),f=e(6244),p=e(6135),l=e(8554),v=e(1246),y=n.Array;t.exports=function(t){var r=c(t),e=s(this),n=arguments.length,h=n>1?arguments[1]:void 0,d=void 0!==h;d&&(h=o(h,n>2?arguments[2]:void 0));var x,b,g,m,S,O,w=v(r),j=0;if(!w||this==y&&a(w))for(x=f(r),b=e?new this(x):y(x);x>j;j++)O=d?h(r[j],j):r[j],p(b,j,O);else for(S=(m=l(r,w)).next,b=e?new this:[];!(g=i(S,m)).done;j++)O=d?u(m,h,[g.value,j],!0):g.value,p(b,j,O);return b.length=j,b}},1318:(t,r,e)=>{var n=e(5656),o=e(1400),i=e(6244),c=function(t){return function(r,e,c){var u,a=n(r),s=i(a),f=o(c,s);if(t&&e!=e){for(;s>f;)if((u=a[f++])!=u)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===e)return t||f||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},2092:(t,r,e)=>{var n=e(9974),o=e(1702),i=e(8361),c=e(7908),u=e(6244),a=e(5417),s=o([].push),f=function(t){var r=1==t,e=2==t,o=3==t,f=4==t,p=6==t,l=7==t,v=5==t||p;return function(y,h,d,x){for(var b,g,m=c(y),S=i(m),O=n(h,d),w=u(S),j=0,E=x||a,L=r?E(y,w):e||l?E(y,0):void 0;w>j;j++)if((v||j in S)&&(g=O(b=S[j],j,m),t))if(r)L[j]=g;else if(g)switch(t){case 3:return!0;case 5:return b;case 6:return j;case 2:s(L,b)}else switch(t){case 4:return!1;case 7:s(L,b)}return p?-1:o||f?f:L}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},9341:(t,r,e)=>{"use strict";var n=e(7293);t.exports=function(t,r){var e=[][t];return!!e&&n((function(){e.call(null,r||function(){return 1},1)}))}},7475:(t,r,e)=>{var n=e(7854),o=e(3157),i=e(4411),c=e(111),u=e(5112)("species"),a=n.Array;t.exports=function(t){var r;return o(t)&&(r=t.constructor,(i(r)&&(r===a||o(r.prototype))||c(r)&&null===(r=r[u]))&&(r=void 0)),void 0===r?a:r}},5417:(t,r,e)=>{var n=e(7475);t.exports=function(t,r){return new(n(t))(0===r?0:r)}},3411:(t,r,e)=>{var n=e(9670),o=e(9212);t.exports=function(t,r,e,i){try{return i?r(n(e)[0],e[1]):r(e)}catch(r){o(t,"throw",r)}}},7072:(t,r,e)=>{var n=e(5112)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[n]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,r){if(!r&&!o)return!1;var e=!1;try{var i={};i[n]=function(){return{next:function(){return{done:e=!0}}}},t(i)}catch(t){}return e}},4326:(t,r,e)=>{var n=e(1702),o=n({}.toString),i=n("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:(t,r,e)=>{var n=e(7854),o=e(1694),i=e(614),c=e(4326),u=e(5112)("toStringTag"),a=n.Object,s="Arguments"==c(function(){return arguments}());t.exports=o?c:function(t){var r,e,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,r){try{return t[r]}catch(t){}}(r=a(t),u))?e:s?c(r):"Object"==(n=c(r))&&i(r.callee)?"Arguments":n}},9920:(t,r,e)=>{var n=e(2597),o=e(3887),i=e(1236),c=e(3070);t.exports=function(t,r,e){for(var u=o(r),a=c.f,s=i.f,f=0;f<u.length;f++){var p=u[f];n(t,p)||e&&n(e,p)||a(t,p,s(r,p))}}},8544:(t,r,e)=>{var n=e(7293);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},4994:(t,r,e)=>{"use strict";var n=e(3383).IteratorPrototype,o=e(30),i=e(9114),c=e(8003),u=e(7497),a=function(){return this};t.exports=function(t,r,e,s){var f=r+" Iterator";return t.prototype=o(n,{next:i(+!s,e)}),c(t,f,!1,!0),u[f]=a,t}},8880:(t,r,e)=>{var n=e(9781),o=e(3070),i=e(9114);t.exports=n?function(t,r,e){return o.f(t,r,i(1,e))}:function(t,r,e){return t[r]=e,t}},9114:t=>{t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},6135:(t,r,e)=>{"use strict";var n=e(4948),o=e(3070),i=e(9114);t.exports=function(t,r,e){var c=n(r);c in t?o.f(t,c,i(0,e)):t[c]=e}},654:(t,r,e)=>{"use strict";var n=e(2109),o=e(6916),i=e(1913),c=e(6530),u=e(614),a=e(4994),s=e(9518),f=e(7674),p=e(8003),l=e(8880),v=e(1320),y=e(5112),h=e(7497),d=e(3383),x=c.PROPER,b=c.CONFIGURABLE,g=d.IteratorPrototype,m=d.BUGGY_SAFARI_ITERATORS,S=y("iterator"),O="keys",w="values",j="entries",E=function(){return this};t.exports=function(t,r,e,c,y,d,L){a(e,r,c);var A,P,T,I=function(t){if(t===y&&R)return R;if(!m&&t in F)return F[t];switch(t){case O:case w:case j:return function(){return new e(this,t)}}return function(){return new e(this)}},_=r+" Iterator",k=!1,F=t.prototype,M=F[S]||F["@@iterator"]||y&&F[y],R=!m&&M||I(y),C="Array"==r&&F.entries||M;if(C&&(A=s(C.call(new t)))!==Object.prototype&&A.next&&(i||s(A)===g||(f?f(A,g):u(A[S])||v(A,S,E)),p(A,_,!0,!0),i&&(h[_]=E)),x&&y==w&&M&&M.name!==w&&(!i&&b?l(F,"name",w):(k=!0,R=function(){return o(M,this)})),y)if(P={values:I(w),keys:d?R:I(O),entries:I(j)},L)for(T in P)(m||k||!(T in F))&&v(F,T,P[T]);else n({target:r,proto:!0,forced:m||k},P);return i&&!L||F[S]===R||v(F,S,R,{name:y}),h[r]=R,P}},9781:(t,r,e)=>{var n=e(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,r,e)=>{var n=e(7854),o=e(111),i=n.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},8324:t=>{t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8509:(t,r,e)=>{var n=e(317)("span").classList,o=n&&n.constructor&&n.constructor.prototype;t.exports=o===Object.prototype?void 0:o},8113:(t,r,e)=>{var n=e(5005);t.exports=n("navigator","userAgent")||""},7392:(t,r,e)=>{var n,o,i=e(7854),c=e(8113),u=i.process,a=i.Deno,s=u&&u.versions||a&&a.version,f=s&&s.v8;f&&(o=(n=f.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&c&&(!(n=c.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=c.match(/Chrome\/(\d+)/))&&(o=+n[1]),t.exports=o},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,r,e)=>{var n=e(7854),o=e(1236).f,i=e(8880),c=e(1320),u=e(3505),a=e(9920),s=e(4705);t.exports=function(t,r){var e,f,p,l,v,y=t.target,h=t.global,d=t.stat;if(e=h?n:d?n[y]||u(y,{}):(n[y]||{}).prototype)for(f in r){if(l=r[f],p=t.noTargetGet?(v=o(e,f))&&v.value:e[f],!s(h?f:y+(d?".":"#")+f,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;a(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),c(e,f,l,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},9974:(t,r,e)=>{var n=e(1702),o=e(9662),i=e(4374),c=n(n.bind);t.exports=function(t,r){return o(t),void 0===r?t:i?c(t,r):function(){return t.apply(r,arguments)}}},4374:(t,r,e)=>{var n=e(7293);t.exports=!n((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:(t,r,e)=>{var n=e(4374),o=Function.prototype.call;t.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},6530:(t,r,e)=>{var n=e(9781),o=e(2597),i=Function.prototype,c=n&&Object.getOwnPropertyDescriptor,u=o(i,"name"),a=u&&"something"===function(){}.name,s=u&&(!n||n&&c(i,"name").configurable);t.exports={EXISTS:u,PROPER:a,CONFIGURABLE:s}},1702:(t,r,e)=>{var n=e(4374),o=Function.prototype,i=o.bind,c=o.call,u=n&&i.bind(c,c);t.exports=n?function(t){return t&&u(t)}:function(t){return t&&function(){return c.apply(t,arguments)}}},5005:(t,r,e)=>{var n=e(7854),o=e(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,r){return arguments.length<2?i(n[t]):n[t]&&n[t][r]}},1246:(t,r,e)=>{var n=e(648),o=e(8173),i=e(7497),c=e(5112)("iterator");t.exports=function(t){if(null!=t)return o(t,c)||o(t,"@@iterator")||i[n(t)]}},8554:(t,r,e)=>{var n=e(7854),o=e(6916),i=e(9662),c=e(9670),u=e(6330),a=e(1246),s=n.TypeError;t.exports=function(t,r){var e=arguments.length<2?a(t):r;if(i(e))return c(o(e,t));throw s(u(t)+" is not iterable")}},8173:(t,r,e)=>{var n=e(9662);t.exports=function(t,r){var e=t[r];return null==e?void 0:n(e)}},7854:(t,r,e)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},2597:(t,r,e)=>{var n=e(1702),o=e(7908),i=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,r){return i(o(t),r)}},3501:t=>{t.exports={}},490:(t,r,e)=>{var n=e(5005);t.exports=n("document","documentElement")},4664:(t,r,e)=>{var n=e(9781),o=e(7293),i=e(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:(t,r,e)=>{var n=e(7854),o=e(1702),i=e(7293),c=e(4326),u=n.Object,a=o("".split);t.exports=i((function(){return!u("z").propertyIsEnumerable(0)}))?function(t){return"String"==c(t)?a(t,""):u(t)}:u},2788:(t,r,e)=>{var n=e(1702),o=e(614),i=e(5465),c=n(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return c(t)}),t.exports=i.inspectSource},9909:(t,r,e)=>{var n,o,i,c=e(8536),u=e(7854),a=e(1702),s=e(111),f=e(8880),p=e(2597),l=e(5465),v=e(6200),y=e(3501),h="Object already initialized",d=u.TypeError,x=u.WeakMap;if(c||l.state){var b=l.state||(l.state=new x),g=a(b.get),m=a(b.has),S=a(b.set);n=function(t,r){if(m(b,t))throw new d(h);return r.facade=t,S(b,t,r),r},o=function(t){return g(b,t)||{}},i=function(t){return m(b,t)}}else{var O=v("state");y[O]=!0,n=function(t,r){if(p(t,O))throw new d(h);return r.facade=t,f(t,O,r),r},o=function(t){return p(t,O)?t[O]:{}},i=function(t){return p(t,O)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(r){var e;if(!s(r)||(e=o(r)).type!==t)throw d("Incompatible receiver, "+t+" required");return e}}}},7659:(t,r,e)=>{var n=e(5112),o=e(7497),i=n("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},3157:(t,r,e)=>{var n=e(4326);t.exports=Array.isArray||function(t){return"Array"==n(t)}},614:t=>{t.exports=function(t){return"function"==typeof t}},4411:(t,r,e)=>{var n=e(1702),o=e(7293),i=e(614),c=e(648),u=e(5005),a=e(2788),s=function(){},f=[],p=u("Reflect","construct"),l=/^\s*(?:class|function)\b/,v=n(l.exec),y=!l.exec(s),h=function(t){if(!i(t))return!1;try{return p(s,f,t),!0}catch(t){return!1}},d=function(t){if(!i(t))return!1;switch(c(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return y||!!v(l,a(t))}catch(t){return!0}};d.sham=!0,t.exports=!p||o((function(){var t;return h(h.call)||!h(Object)||!h((function(){t=!0}))||t}))?d:h},4705:(t,r,e)=>{var n=e(7293),o=e(614),i=/#|\.prototype\./,c=function(t,r){var e=a[u(t)];return e==f||e!=s&&(o(r)?n(r):!!r)},u=c.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=c.data={},s=c.NATIVE="N",f=c.POLYFILL="P";t.exports=c},111:(t,r,e)=>{var n=e(614);t.exports=function(t){return"object"==typeof t?null!==t:n(t)}},1913:t=>{t.exports=!1},2190:(t,r,e)=>{var n=e(7854),o=e(5005),i=e(614),c=e(7976),u=e(3307),a=n.Object;t.exports=u?function(t){return"symbol"==typeof t}:function(t){var r=o("Symbol");return i(r)&&c(r.prototype,a(t))}},9212:(t,r,e)=>{var n=e(6916),o=e(9670),i=e(8173);t.exports=function(t,r,e){var c,u;o(t);try{if(!(c=i(t,"return"))){if("throw"===r)throw e;return e}c=n(c,t)}catch(t){u=!0,c=t}if("throw"===r)throw e;if(u)throw c;return o(c),e}},3383:(t,r,e)=>{"use strict";var n,o,i,c=e(7293),u=e(614),a=e(30),s=e(9518),f=e(1320),p=e(5112),l=e(1913),v=p("iterator"),y=!1;[].keys&&("next"in(i=[].keys())?(o=s(s(i)))!==Object.prototype&&(n=o):y=!0),null==n||c((function(){var t={};return n[v].call(t)!==t}))?n={}:l&&(n=a(n)),u(n[v])||f(n,v,(function(){return this})),t.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:y}},7497:t=>{t.exports={}},6244:(t,r,e)=>{var n=e(7466);t.exports=function(t){return n(t.length)}},133:(t,r,e)=>{var n=e(7392),o=e(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:(t,r,e)=>{var n=e(7854),o=e(614),i=e(2788),c=n.WeakMap;t.exports=o(c)&&/native code/.test(i(c))},30:(t,r,e)=>{var n,o=e(9670),i=e(6048),c=e(748),u=e(3501),a=e(490),s=e(317),f=e(6200)("IE_PROTO"),p=function(){},l=function(t){return"<script>"+t+"<\/script>"},v=function(t){t.write(l("")),t.close();var r=t.parentWindow.Object;return t=null,r},y=function(){try{n=new ActiveXObject("htmlfile")}catch(t){}var t,r;y="undefined"!=typeof document?document.domain&&n?v(n):((r=s("iframe")).style.display="none",a.appendChild(r),r.src=String("javascript:"),(t=r.contentWindow.document).open(),t.write(l("document.F=Object")),t.close(),t.F):v(n);for(var e=c.length;e--;)delete y.prototype[c[e]];return y()};u[f]=!0,t.exports=Object.create||function(t,r){var e;return null!==t?(p.prototype=o(t),e=new p,p.prototype=null,e[f]=t):e=y(),void 0===r?e:i.f(e,r)}},6048:(t,r,e)=>{var n=e(9781),o=e(3353),i=e(3070),c=e(9670),u=e(5656),a=e(1956);r.f=n&&!o?Object.defineProperties:function(t,r){c(t);for(var e,n=u(r),o=a(r),s=o.length,f=0;s>f;)i.f(t,e=o[f++],n[e]);return t}},3070:(t,r,e)=>{var n=e(7854),o=e(9781),i=e(4664),c=e(3353),u=e(9670),a=e(4948),s=n.TypeError,f=Object.defineProperty,p=Object.getOwnPropertyDescriptor;r.f=o?c?function(t,r,e){if(u(t),r=a(r),u(e),"function"==typeof t&&"prototype"===r&&"value"in e&&"writable"in e&&!e.writable){var n=p(t,r);n&&n.writable&&(t[r]=e.value,e={configurable:"configurable"in e?e.configurable:n.configurable,enumerable:"enumerable"in e?e.enumerable:n.enumerable,writable:!1})}return f(t,r,e)}:f:function(t,r,e){if(u(t),r=a(r),u(e),i)try{return f(t,r,e)}catch(t){}if("get"in e||"set"in e)throw s("Accessors not supported");return"value"in e&&(t[r]=e.value),t}},1236:(t,r,e)=>{var n=e(9781),o=e(6916),i=e(5296),c=e(9114),u=e(5656),a=e(4948),s=e(2597),f=e(4664),p=Object.getOwnPropertyDescriptor;r.f=n?p:function(t,r){if(t=u(t),r=a(r),f)try{return p(t,r)}catch(t){}if(s(t,r))return c(!o(i.f,t,r),t[r])}},8006:(t,r,e)=>{var n=e(6324),o=e(748).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:(t,r)=>{r.f=Object.getOwnPropertySymbols},9518:(t,r,e)=>{var n=e(7854),o=e(2597),i=e(614),c=e(7908),u=e(6200),a=e(8544),s=u("IE_PROTO"),f=n.Object,p=f.prototype;t.exports=a?f.getPrototypeOf:function(t){var r=c(t);if(o(r,s))return r[s];var e=r.constructor;return i(e)&&r instanceof e?e.prototype:r instanceof f?p:null}},7976:(t,r,e)=>{var n=e(1702);t.exports=n({}.isPrototypeOf)},6324:(t,r,e)=>{var n=e(1702),o=e(2597),i=e(5656),c=e(1318).indexOf,u=e(3501),a=n([].push);t.exports=function(t,r){var e,n=i(t),s=0,f=[];for(e in n)!o(u,e)&&o(n,e)&&a(f,e);for(;r.length>s;)o(n,e=r[s++])&&(~c(f,e)||a(f,e));return f}},1956:(t,r,e)=>{var n=e(6324),o=e(748);t.exports=Object.keys||function(t){return n(t,o)}},5296:(t,r)=>{"use strict";var e={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!e.call({1:2},1);r.f=o?function(t){var r=n(this,t);return!!r&&r.enumerable}:e},7674:(t,r,e)=>{var n=e(1702),o=e(9670),i=e(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,e={};try{(t=n(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(e,[]),r=e instanceof Array}catch(t){}return function(e,n){return o(e),i(n),r?t(e,n):e.__proto__=n,e}}():void 0)},2140:(t,r,e)=>{var n=e(7854),o=e(6916),i=e(614),c=e(111),u=n.TypeError;t.exports=function(t,r){var e,n;if("string"===r&&i(e=t.toString)&&!c(n=o(e,t)))return n;if(i(e=t.valueOf)&&!c(n=o(e,t)))return n;if("string"!==r&&i(e=t.toString)&&!c(n=o(e,t)))return n;throw u("Can't convert object to primitive value")}},3887:(t,r,e)=>{var n=e(5005),o=e(1702),i=e(8006),c=e(5181),u=e(9670),a=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var r=i.f(u(t)),e=c.f;return e?a(r,e(t)):r}},1320:(t,r,e)=>{var n=e(7854),o=e(614),i=e(2597),c=e(8880),u=e(3505),a=e(2788),s=e(9909),f=e(6530).CONFIGURABLE,p=s.get,l=s.enforce,v=String(String).split("String");(t.exports=function(t,r,e,a){var s,p=!!a&&!!a.unsafe,y=!!a&&!!a.enumerable,h=!!a&&!!a.noTargetGet,d=a&&void 0!==a.name?a.name:r;o(e)&&("Symbol("===String(d).slice(0,7)&&(d="["+String(d).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(e,"name")||f&&e.name!==d)&&c(e,"name",d),(s=l(e)).source||(s.source=v.join("string"==typeof d?d:""))),t!==n?(p?!h&&t[r]&&(y=!0):delete t[r],y?t[r]=e:c(t,r,e)):y?t[r]=e:u(r,e)})(Function.prototype,"toString",(function(){return o(this)&&p(this).source||a(this)}))},4488:(t,r,e)=>{var n=e(7854).TypeError;t.exports=function(t){if(null==t)throw n("Can't call method on "+t);return t}},3505:(t,r,e)=>{var n=e(7854),o=Object.defineProperty;t.exports=function(t,r){try{o(n,t,{value:r,configurable:!0,writable:!0})}catch(e){n[t]=r}return r}},8003:(t,r,e)=>{var n=e(3070).f,o=e(2597),i=e(5112)("toStringTag");t.exports=function(t,r,e){t&&!e&&(t=t.prototype),t&&!o(t,i)&&n(t,i,{configurable:!0,value:r})}},6200:(t,r,e)=>{var n=e(2309),o=e(9711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:(t,r,e)=>{var n=e(7854),o=e(3505),i="__core-js_shared__",c=n[i]||o(i,{});t.exports=c},2309:(t,r,e)=>{var n=e(1913),o=e(5465);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.21.1",mode:n?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})},8710:(t,r,e)=>{var n=e(1702),o=e(9303),i=e(1340),c=e(4488),u=n("".charAt),a=n("".charCodeAt),s=n("".slice),f=function(t){return function(r,e){var n,f,p=i(c(r)),l=o(e),v=p.length;return l<0||l>=v?t?"":void 0:(n=a(p,l))<55296||n>56319||l+1===v||(f=a(p,l+1))<56320||f>57343?t?u(p,l):n:t?s(p,l,l+2):f-56320+(n-55296<<10)+65536}};t.exports={codeAt:f(!1),charAt:f(!0)}},1400:(t,r,e)=>{var n=e(9303),o=Math.max,i=Math.min;t.exports=function(t,r){var e=n(t);return e<0?o(e+r,0):i(e,r)}},5656:(t,r,e)=>{var n=e(8361),o=e(4488);t.exports=function(t){return n(o(t))}},9303:t=>{var r=Math.ceil,e=Math.floor;t.exports=function(t){var n=+t;return n!=n||0===n?0:(n>0?e:r)(n)}},7466:(t,r,e)=>{var n=e(9303),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:(t,r,e)=>{var n=e(7854),o=e(4488),i=n.Object;t.exports=function(t){return i(o(t))}},7593:(t,r,e)=>{var n=e(7854),o=e(6916),i=e(111),c=e(2190),u=e(8173),a=e(2140),s=e(5112),f=n.TypeError,p=s("toPrimitive");t.exports=function(t,r){if(!i(t)||c(t))return t;var e,n=u(t,p);if(n){if(void 0===r&&(r="default"),e=o(n,t,r),!i(e)||c(e))return e;throw f("Can't convert object to primitive value")}return void 0===r&&(r="number"),a(t,r)}},4948:(t,r,e)=>{var n=e(7593),o=e(2190);t.exports=function(t){var r=n(t,"string");return o(r)?r:r+""}},1694:(t,r,e)=>{var n={};n[e(5112)("toStringTag")]="z",t.exports="[object z]"===String(n)},1340:(t,r,e)=>{var n=e(7854),o=e(648),i=n.String;t.exports=function(t){if("Symbol"===o(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},6330:(t,r,e)=>{var n=e(7854).String;t.exports=function(t){try{return n(t)}catch(t){return"Object"}}},9711:(t,r,e)=>{var n=e(1702),o=0,i=Math.random(),c=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+c(++o+i,36)}},3307:(t,r,e)=>{var n=e(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:(t,r,e)=>{var n=e(9781),o=e(7293);t.exports=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:(t,r,e)=>{var n=e(7854),o=e(2309),i=e(2597),c=e(9711),u=e(133),a=e(3307),s=o("wks"),f=n.Symbol,p=f&&f.for,l=a?f:f&&f.withoutSetter||c;t.exports=function(t){if(!i(s,t)||!u&&"string"!=typeof s[t]){var r="Symbol."+t;u&&i(f,t)?s[t]=f[t]:s[t]=a&&p?p(r):l(r)}return s[t]}},9554:(t,r,e)=>{"use strict";var n=e(2109),o=e(8533);n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},1038:(t,r,e)=>{var n=e(2109),o=e(8457);n({target:"Array",stat:!0,forced:!e(7072)((function(t){Array.from(t)}))},{from:o})},8783:(t,r,e)=>{"use strict";var n=e(8710).charAt,o=e(1340),i=e(9909),c=e(654),u="String Iterator",a=i.set,s=i.getterFor(u);c(String,"String",(function(t){a(this,{type:u,string:o(t),index:0})}),(function(){var t,r=s(this),e=r.string,o=r.index;return o>=e.length?{value:void 0,done:!0}:(t=n(e,o),r.index+=t.length,{value:t,done:!1})}))},4747:(t,r,e)=>{var n=e(7854),o=e(8324),i=e(8509),c=e(8533),u=e(8880),a=function(t){if(t&&t.forEach!==c)try{u(t,"forEach",c)}catch(r){t.forEach=c}};for(var s in o)o[s]&&a(n[s]&&n[s].prototype);a(i)}},r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{}};return t[n](o,o.exports,e),o.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";e(9554),e(1038),e(8783),e(4747);for(var t=document.querySelector(".field"),r=0;r<16;r+=1){var n=document.createElement("div");n.id=r,n.classList.add("block"),t.appendChild(n)}var o=Array.from(document.querySelectorAll(".block"));setInterval((function(){var t=0;o.forEach((function(r){r.classList.contains("activeBlock")&&(r.classList.remove("activeBlock"),t=r.index)}));var r=Math.floor(15*Math.random());t!==r?o[r].classList.add("activeBlock"):o[0].classList.add("activeBlock")}),1e3)})()})();