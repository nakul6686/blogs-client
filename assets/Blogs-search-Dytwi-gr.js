import{r as P,E as B,G,g as se,u as ie,e as ne,a as re,j as o,z as le}from"./index-C23z5N7v.js";import{a as oe}from"./axiosInstance-D6M-7RPN.js";var z={},ue=V;function V(c,f){if(!(this instanceof V))return new V(c,f);this.per_page=c||25,this.length=f||10}V.prototype.build=function(c,f){var a=Math.ceil(c/this.per_page);c=parseInt(c,10),f=parseInt(f,10)||1,f<1&&(f=1),f>a&&(f=a);var m=Math.max(1,f-Math.floor(this.length/2)),d=Math.min(a,f+Math.floor(this.length/2));d-m+1<this.length&&(f<a/2?d=Math.min(a,d+(this.length-(d-m))):m=Math.max(1,m-(this.length-(d-m)))),d-m+1>this.length&&(f>a/2?m++:d--);var h=this.per_page*(f-1);h<0&&(h=0);var v=this.per_page*f-1;return v<0&&(v=0),v>Math.max(c-1,0)&&(v=Math.max(c-1,0)),{total_pages:a,pages:Math.min(d-m+1,a),current_page:f,first_page:m,last_page:d,previous_page:f-1,next_page:f+1,has_previous_page:f>1,has_next_page:f<a,total_results:c,results:Math.min(v-h+1,c),first_result:h,last_result:v}};var H={};(function(c){Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var f=v(P),a=d(B),m=d(G);function d(s){return s&&s.__esModule?s:{default:s}}function h(){if(typeof WeakMap!="function")return null;var s=new WeakMap;return h=function(){return s},s}function v(s){if(s&&s.__esModule)return s;if(s===null||_(s)!=="object"&&typeof s!="function")return{default:s};var r=h();if(r&&r.has(s))return r.get(s);var e={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in s)if(Object.prototype.hasOwnProperty.call(s,i)){var u=t?Object.getOwnPropertyDescriptor(s,i):null;u&&(u.get||u.set)?Object.defineProperty(e,i,u):e[i]=s[i]}return e.default=s,r&&r.set(s,e),e}function _(s){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_=function(e){return typeof e}:_=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(s)}function A(s,r){if(!(s instanceof r))throw new TypeError("Cannot call a class as a function")}function C(s,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(s,t.key,t)}}function D(s,r,e){return r&&C(s.prototype,r),e&&C(s,e),s}function j(s,r){return r&&(_(r)==="object"||typeof r=="function")?r:k(s)}function k(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function N(s){return N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},N(s)}function E(s,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(r&&r.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),r&&b(s,r)}function b(s,r){return b=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t},b(s,r)}function O(s,r,e){return r in s?Object.defineProperty(s,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):s[r]=e,s}var y=function(s){E(r,s);function r(){return A(this,r),j(this,N(r).apply(this,arguments))}return D(r,[{key:"handleClick",value:function(t){var i=this.props,u=i.isDisabled,n=i.pageNumber;t.preventDefault(),!u&&this.props.onClick(n)}},{key:"render",value:function(){var t,i=this.props,u=i.pageText;i.pageNumber;var n=i.activeClass,p=i.itemClass,l=i.linkClass,x=i.activeLinkClass,T=i.disabledClass,S=i.isActive,F=i.isDisabled,W=i.href,$=i.ariaLabel,L=(0,m.default)(p,(t={},O(t,n,S),O(t,T,F),t)),U=(0,m.default)(l,O({},x,S));return f.default.createElement("li",{className:L,onClick:this.handleClick.bind(this)},f.default.createElement("a",{className:U,href:W,"aria-label":$},u))}}]),r}(f.Component);c.default=y,O(y,"propTypes",{pageText:a.default.oneOfType([a.default.string,a.default.element]),pageNumber:a.default.number.isRequired,onClick:a.default.func.isRequired,isActive:a.default.bool.isRequired,isDisabled:a.default.bool,activeClass:a.default.string,activeLinkClass:a.default.string,itemClass:a.default.string,linkClass:a.default.string,disabledClass:a.default.string,href:a.default.string}),O(y,"defaultProps",{activeClass:"active",disabledClass:"disabled",itemClass:void 0,linkClass:void 0,activeLinkCLass:void 0,isActive:!1,isDisabled:!1,href:"#"})})(H);(function(c){Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var f=A(P),a=v(B),m=v(ue),d=v(H),h=v(G);function v(e){return e&&e.__esModule?e:{default:e}}function _(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return _=function(){return e},e}function A(e){if(e&&e.__esModule)return e;if(e===null||C(e)!=="object"&&typeof e!="function")return{default:e};var t=_();if(t&&t.has(e))return t.get(e);var i={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var p=u?Object.getOwnPropertyDescriptor(e,n):null;p&&(p.get||p.set)?Object.defineProperty(i,n,p):i[n]=e[n]}return i.default=e,t&&t.set(e,i),i}function C(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?C=function(i){return typeof i}:C=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},C(e)}function D(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var i=0;i<t.length;i++){var u=t[i];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(e,u.key,u)}}function k(e,t,i){return t&&j(e.prototype,t),i&&j(e,i),e}function N(e,t){return t&&(C(t)==="object"||typeof t=="function")?t:E(e)}function E(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(i){return i.__proto__||Object.getPrototypeOf(i)},b(e)}function O(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}function y(e,t){return y=Object.setPrototypeOf||function(u,n){return u.__proto__=n,u},y(e,t)}function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var r=function(e){O(t,e);function t(){return D(this,t),N(this,b(t).apply(this,arguments))}return k(t,[{key:"isFirstPageVisible",value:function(u){var n=this.props,p=n.hideDisabled;n.hideNavigation;var l=n.hideFirstLastPages;return!(l||p&&!u)}},{key:"isPrevPageVisible",value:function(u){var n=this.props,p=n.hideDisabled,l=n.hideNavigation;return!(l||p&&!u)}},{key:"isNextPageVisible",value:function(u){var n=this.props,p=n.hideDisabled,l=n.hideNavigation;return!(l||p&&!u)}},{key:"isLastPageVisible",value:function(u){var n=this.props,p=n.hideDisabled;n.hideNavigation;var l=n.hideFirstLastPages;return!(l||p&&!u)}},{key:"buildPages",value:function(){var u=[],n=this.props,p=n.itemsCountPerPage,l=n.pageRangeDisplayed,x=n.activePage,T=n.prevPageText,S=n.nextPageText,F=n.firstPageText,W=n.lastPageText,$=n.totalItemsCount,L=n.onChange,U=n.activeClass,R=n.itemClass,J=n.itemClassFirst,K=n.itemClassPrev,Q=n.itemClassNext,X=n.itemClassLast,Y=n.activeLinkClass,I=n.disabledClass;n.hideDisabled,n.hideNavigation;var M=n.linkClass,Z=n.linkClassFirst,ee=n.linkClassPrev,te=n.linkClassNext,ae=n.linkClassLast;n.hideFirstLastPages;for(var q=n.getPageUrl,g=new m.default(p,l).build($,x),w=g.first_page;w<=g.last_page;w++)u.push(f.default.createElement(d.default,{isActive:w===x,key:w,href:q(w),pageNumber:w,pageText:w+"",onClick:L,itemClass:R,linkClass:M,activeClass:U,activeLinkClass:Y,ariaLabel:"Go to page number ".concat(w)}));return this.isPrevPageVisible(g.has_previous_page)&&u.unshift(f.default.createElement(d.default,{key:"prev"+g.previous_page,href:q(g.previous_page),pageNumber:g.previous_page,onClick:L,pageText:T,isDisabled:!g.has_previous_page,itemClass:(0,h.default)(R,K),linkClass:(0,h.default)(M,ee),disabledClass:I,ariaLabel:"Go to previous page"})),this.isFirstPageVisible(g.has_previous_page)&&u.unshift(f.default.createElement(d.default,{key:"first",href:q(1),pageNumber:1,onClick:L,pageText:F,isDisabled:!g.has_previous_page,itemClass:(0,h.default)(R,J),linkClass:(0,h.default)(M,Z),disabledClass:I,ariaLabel:"Go to first page"})),this.isNextPageVisible(g.has_next_page)&&u.push(f.default.createElement(d.default,{key:"next"+g.next_page,href:q(g.next_page),pageNumber:g.next_page,onClick:L,pageText:S,isDisabled:!g.has_next_page,itemClass:(0,h.default)(R,Q),linkClass:(0,h.default)(M,te),disabledClass:I,ariaLabel:"Go to next page"})),this.isLastPageVisible(g.has_next_page)&&u.push(f.default.createElement(d.default,{key:"last",href:q(g.total_pages),pageNumber:g.total_pages,onClick:L,pageText:W,isDisabled:g.current_page===g.total_pages,itemClass:(0,h.default)(R,X),linkClass:(0,h.default)(M,ae),disabledClass:I,ariaLabel:"Go to last page"})),u}},{key:"render",value:function(){var u=this.buildPages();return f.default.createElement("ul",{className:this.props.innerClass},u)}}]),t}(f.default.Component);c.default=r,s(r,"propTypes",{totalItemsCount:a.default.number.isRequired,onChange:a.default.func.isRequired,activePage:a.default.number,itemsCountPerPage:a.default.number,pageRangeDisplayed:a.default.number,prevPageText:a.default.oneOfType([a.default.string,a.default.element]),nextPageText:a.default.oneOfType([a.default.string,a.default.element]),lastPageText:a.default.oneOfType([a.default.string,a.default.element]),firstPageText:a.default.oneOfType([a.default.string,a.default.element]),disabledClass:a.default.string,hideDisabled:a.default.bool,hideNavigation:a.default.bool,innerClass:a.default.string,itemClass:a.default.string,itemClassFirst:a.default.string,itemClassPrev:a.default.string,itemClassNext:a.default.string,itemClassLast:a.default.string,linkClass:a.default.string,activeClass:a.default.string,activeLinkClass:a.default.string,linkClassFirst:a.default.string,linkClassPrev:a.default.string,linkClassNext:a.default.string,linkClassLast:a.default.string,hideFirstLastPages:a.default.bool,getPageUrl:a.default.func}),s(r,"defaultProps",{itemsCountPerPage:10,pageRangeDisplayed:5,activePage:1,prevPageText:"⟨",firstPageText:"«",nextPageText:"⟩",lastPageText:"»",innerClass:"pagination",itemClass:void 0,linkClass:void 0,activeLinkClass:void 0,hideFirstLastPages:!1,getPageUrl:function(t){return"#"}})})(z);const fe=se(z);function pe(){var n,p;const[c,f]=P.useState([]),a=ie(),m=ne(),[d,h]=P.useState("All");P.useState(1);const[v,_]=P.useState(10),[A,C]=P.useState(!1),[D,j]=P.useState(!1),{user:k}=re(),[N,E]=P.useState(null),[b,O]=P.useState(1);P.useEffect(()=>{C(!0);const l={page:b,searchText:N,limit:v};d!=="All"&&(l.category=d),D&&k&&(l.user=k==null?void 0:k._id),oe.get("blog",{params:l}).then(x=>{f(x.data),C(!1)}).catch(x=>{C(!1),console.log(console.err)})},[d,D,N,b]);const y=l=>{h(l.target.value),m.category=l.target.value},s=l=>{a(`/blog-details/${l}`)},t=((l,x)=>{let T;return function(...S){const F=this;clearTimeout(T),T=setTimeout(()=>{l.apply(F,S)},x)}})(l=>{E(l.target.value)},2e3),i=l=>{const x=new Date(l);let T=null;return T={month:"long",day:"numeric"},x.toLocaleDateString("en-US",T)},u=l=>{O(l)};return o.jsx("section",{role:"all blogs",className:"allblogs-wraper py-5",children:o.jsx("div",{className:"container",children:o.jsxs("div",{className:"row",children:[o.jsxs("div",{className:"col-sm-3",style:{boxShadow:"4px 3px 5px -2px rgba(0,0,0,0.2)"},children:[o.jsx("input",{type:"text",id:"site-search",name:"name-search",placeholder:"Search blog title...",value:N,onChange:l=>t(l)}),o.jsxs("ul",{className:"filters",children:[o.jsx("p",{className:"mb-0",children:"Search by category"}),o.jsxs("li",{className:"category-filters",children:[o.jsx("input",{type:"radio",id:"all",name:"filter",value:"All",checked:d==="All",onChange:y}),o.jsx("label",{htmlFor:"all",children:" All Categories"})]}),o.jsxs("li",{className:"category-filters",children:[o.jsx("input",{type:"radio",id:"educative",name:"filter",value:"Educative",checked:d==="Educative",onChange:y}),o.jsx("label",{htmlFor:"educative",children:" Educative"})]}),o.jsxs("li",{className:"category-filters",children:[o.jsx("input",{type:"radio",id:"news",name:"filter",value:"News",checked:d==="News",onChange:y}),o.jsx("label",{htmlFor:"news",children:" News"})]}),o.jsxs("li",{className:"category-filters",children:[o.jsx("input",{type:"radio",id:"travel",name:"filter",value:"Travel",checked:d==="Travel",onChange:y}),o.jsx("label",{htmlFor:"travel",children:" Travel"})]}),o.jsxs("li",{className:"category-filters",children:[o.jsx("input",{type:"radio",id:"sports",name:"filter",value:"Sports",checked:d==="Sports",onChange:y}),o.jsx("label",{htmlFor:"sports",children:" Sports"})]})]}),k&&o.jsx("ul",{className:"filters border-top py-3",children:o.jsxs("li",{className:"category-filters",children:[o.jsx("input",{type:"checkbox",id:"onlyme",name:"onlyme",value:"Onlyme",checked:D,onChange:()=>j(l=>!l)}),o.jsx("label",{htmlFor:"onlyme",children:" Only added by me."})]})})]}),o.jsx("div",{className:"col-sm-9",children:o.jsxs("div",{className:"post-lists",children:[o.jsx("div",{className:"loader"}),((n=c==null?void 0:c.blogs)==null?void 0:n.length)>0?c.blogs.map(l=>o.jsxs("div",{className:"single-list flex-row d-flex",children:[o.jsxs("div",{className:"thumb",children:[o.jsx("div",{className:"date",children:o.jsx("span",{children:i(l==null?void 0:l.createdAt)})}),o.jsx("img",{className:"left-img",src:l.image.url,alt:"",loading:"lazy"})]}),o.jsxs("div",{className:"detail",children:[o.jsx("h4",{className:"pb-20 mb-0",onClick:()=>s(l._id),role:"button",children:l.title}),o.jsx("p",{className:"htmlin",dangerouslySetInnerHTML:{__html:l.desc}}),o.jsxs("p",{className:"footer pt-20 d-flex align-items-center",children:[o.jsx(le,{}),l.comments>0?o.jsxs("p",{className:"ms-2 mb-0",children:[l.comments<10?`0${l.comments}`:l.comments," ","Comments"]}):o.jsx("p",{className:"ms-2 mb-0",children:"No comments yet."})]})]})]},l._id)):o.jsx("p",{className:"text-center",children:"No Blogs found in given criteria."}),((p=c==null?void 0:c.blogs)==null?void 0:p.length)!==0&&o.jsx(fe,{activePage:b,itemsCountPerPage:10,totalItemsCount:c.totalBlogs,pageRangeDisplayed:5,onChange:u})]})})]})})})}export{pe as default};
