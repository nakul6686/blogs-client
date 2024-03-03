import{r as C,f as x,j as m,h as P,H as Rt,k as lt,c as F,g as Et,B as _t}from"./index-BzKFHMxR.js";const dt=C.forwardRef(({className:o,bsPrefix:i,as:t="div",...e},r)=>(i=x(i,"card-body"),m.jsx(t,{ref:r,className:P(o,i),...e})));dt.displayName="CardBody";const ut=dt,ht=C.forwardRef(({className:o,bsPrefix:i,as:t="div",...e},r)=>(i=x(i,"card-footer"),m.jsx(t,{ref:r,className:P(o,i),...e})));ht.displayName="CardFooter";const xt=ht,ct=C.forwardRef(({bsPrefix:o,className:i,as:t="div",...e},r)=>{const n=x(o,"card-header"),a=C.useMemo(()=>({cardHeaderBsPrefix:n}),[n]);return m.jsx(Rt.Provider,{value:a,children:m.jsx(t,{ref:r,...e,className:P(i,n)})})});ct.displayName="CardHeader";const Pt=ct,pt=C.forwardRef(({bsPrefix:o,className:i,variant:t,as:e="img",...r},n)=>{const a=x(o,"card-img");return m.jsx(e,{ref:n,className:P(t?`${a}-${t}`:a,i),...r})});pt.displayName="CardImg";const Ot=pt,ft=C.forwardRef(({className:o,bsPrefix:i,as:t="div",...e},r)=>(i=x(i,"card-img-overlay"),m.jsx(t,{ref:r,className:P(o,i),...e})));ft.displayName="CardImgOverlay";const Dt=ft,mt=C.forwardRef(({className:o,bsPrefix:i,as:t="a",...e},r)=>(i=x(i,"card-link"),m.jsx(t,{ref:r,className:P(o,i),...e})));mt.displayName="CardLink";const Lt=mt,At=lt("h6"),vt=C.forwardRef(({className:o,bsPrefix:i,as:t=At,...e},r)=>(i=x(i,"card-subtitle"),m.jsx(t,{ref:r,className:P(o,i),...e})));vt.displayName="CardSubtitle";const Wt=vt,gt=C.forwardRef(({className:o,bsPrefix:i,as:t="p",...e},r)=>(i=x(i,"card-text"),m.jsx(t,{ref:r,className:P(o,i),...e})));gt.displayName="CardText";const jt=gt,Nt=lt("h5"),St=C.forwardRef(({className:o,bsPrefix:i,as:t=Nt,...e},r)=>(i=x(i,"card-title"),m.jsx(t,{ref:r,className:P(o,i),...e})));St.displayName="CardTitle";const kt=St,yt=C.forwardRef(({bsPrefix:o,className:i,bg:t,text:e,border:r,body:n=!1,children:a,as:s="div",...l},d)=>{const u=x(o,"card");return m.jsx(s,{ref:d,...l,className:P(i,u,t&&`bg-${t}`,e&&`text-${e}`,r&&`border-${r}`),children:n?m.jsx(ut,{children:a}):a})});yt.displayName="Card";const k=Object.assign(yt,{Img:Ot,Title:kt,Subtitle:Wt,Body:ut,Link:Lt,Text:jt,Header:Pt,Footer:xt,ImgOverlay:Dt});var J={},q={},v={},X={};(function(o){function i(a,s,l){var d=s.slidesToShow,u=s.currentSlide;return l.length>2*d?a+2*d:u>=l.length?l.length+a:a}function t(a,s){if(s.length>2*a){for(var l={},d=s.length-2*a,u=s.length-d,c=d,h=0;h<u;h++)l[h]=c,c++;var p=s.length+u,f=p+s.slice(0,2*a).length,g=0;for(h=p;h<=f;h++)l[h]=g,g++;var b=p,I=0;for(h=u;h<b;h++)l[h]=I,I++;return l}l={};var M=3*s.length,S=0;for(h=0;h<M;h++)l[h]=S,++S===s.length&&(S=0);return l}function e(a,s){return s.length<a?s:s.length>2*a?s.slice(s.length-2*a,s.length).concat(s,s.slice(0,2*a)):s.concat(s,s)}function r(a,s){return s.length>2*a?2*a:s.length}function n(a,s,l){var d,u=a.currentSlide,c=a.slidesToShow,h=a.itemWidth,p=a.totalItems,f=0,g=0,b=u===0,I=s.length-(s.length-2*c);return s.length<c?(g=f=0,b=d=!1):s.length>2*c?((d=u>=I+s.length)&&(g=-h*(f=u-s.length)),b&&(g=-h*(f=I+(s.length-2*c)))):((d=u>=2*s.length)&&(g=-h*(f=u-s.length)),b&&(g=l.showDots?-h*(f=s.length):-h*(f=p/3))),{isReachingTheEnd:d,isReachingTheStart:b,nextSlide:f,nextPosition:g}}Object.defineProperty(o,"__esModule",{value:!0}),o.getOriginalCounterPart=i,o.getOriginalIndexLookupTableByClones=t,o.getClones=e,o.getInitialSlideInInfiniteMode=r,o.checkClonesPosition=n})(X);var A={};Object.defineProperty(A,"__esModule",{value:!0});function Vt(o,i,t,e){var r=0,n=e||t;return i&&n&&(r=o[n].partialVisibilityGutter||o[n].paritialVisibilityGutter),r}function $t(o,i){var t;return i[o]&&(t=(100/i[o].items).toFixed(1)),t}function Bt(o,i,t){return Math.round(t/(i+(o.centerMode?1:0)))}A.getPartialVisibilityGutter=Vt,A.getWidthFromDeviceType=$t,A.getItemClientSideWidth=Bt;var T={};Object.defineProperty(T,"__esModule",{value:!0});var K=A;function Q(o){var i=o.slidesToShow;return o.totalItems<i}function Ft(o,i){var t,e=o.domLoaded,r=o.slidesToShow,n=o.containerWidth,a=o.itemWidth,s=i.deviceType,l=i.responsive,d=i.ssr,u=i.partialVisbile,c=i.partialVisible,h=!!(e&&r&&n&&a);d&&s&&!h&&(t=K.getWidthFromDeviceType(s,l));var p=!!(d&&s&&!h&&t);return{shouldRenderOnSSR:p,flexBisis:t,domFullyLoaded:h,partialVisibilityGutter:K.getPartialVisibilityGutter(l,u||c,s,o.deviceType),shouldRenderAtAll:p||h}}function Gt(o,i){var t=i.currentSlide,e=i.slidesToShow;return t<=o&&o<t+e}function Tt(o,i,t){var e=t||o.transform;return!i.infinite&&o.currentSlide===0||Q(o)?e:e+o.itemWidth/2}function Xt(o){return!(0<o.currentSlide)}function wt(o){var i=o.currentSlide,t=o.totalItems;return!(i+o.slidesToShow<t)}function Ct(o,i,t,e){i===void 0&&(i=0);var r=o.currentSlide,n=o.slidesToShow,a=wt(o),s=!t.infinite&&a,l=e||o.transform;if(Q(o))return l;var d=l+r*i;return s?d+(o.containerWidth-(o.itemWidth-i)*n):d}function bt(o,i){return o.rtl?-1*i:i}function Ut(o,i,t){var e=i.partialVisbile,r=i.partialVisible,n=i.responsive,a=i.deviceType,s=i.centerMode,l=t||o.transform,d=K.getPartialVisibilityGutter(n,e||r,a,o.deviceType);return bt(i,r||e?Ct(o,d,i,t):s?Tt(o,i,t):l)}function Yt(o,i){var t=o.domLoaded,e=o.slidesToShow,r=o.containerWidth,n=o.itemWidth,a=i.deviceType,s=i.responsive,l=i.slidesToSlide||1,d=!!(t&&e&&r&&n);return i.ssr&&i.deviceType&&!d&&Object.keys(s).forEach(function(u){var c=s[u].slidesToSlide;a===u&&c&&(l=c)}),d&&Object.keys(s).forEach(function(u){var c=s[u],h=c.breakpoint,p=c.slidesToSlide,f=h.max,g=h.min;p&&window.innerWidth>=g&&window.innerWidth<=f&&(l=p)}),l}T.notEnoughChildren=Q,T.getInitialState=Ft,T.getIfSlideIsVisbile=Gt,T.getTransformForCenterMode=Tt,T.isInLeftEnd=Xt,T.isInRightEnd=wt,T.getTransformForPartialVsibile=Ct,T.parsePosition=bt,T.getTransform=Ut,T.getSlidesToSlide=Yt;var Z={};Object.defineProperty(Z,"__esModule",{value:!0});var zt=function(o,i,t){var e;return function(){var r=arguments;e||(o.apply(this,r),e=!0,typeof t=="function"&&t(!0),setTimeout(function(){e=!1,typeof t=="function"&&t(!1)},i))}};Z.default=zt;var It={};(function(o){function i(t,e){var r=e.partialVisbile,n=e.partialVisible,a=e.centerMode,s=e.ssr,l=e.responsive;if((r||n)&&a)throw new Error("center mode can not be used at the same time with partialVisible");if(!l)throw s?new Error("ssr mode need to be used in conjunction with responsive prop"):new Error("Responsive prop is needed for deciding the amount of items to show on the screen");if(l&&typeof l!="object")throw new Error("responsive prop must be an object")}Object.defineProperty(o,"__esModule",{value:!0}),o.default=i})(It);var tt={};Object.defineProperty(tt,"__esModule",{value:!0});var Ht=T;function Kt(o,i,t){t===void 0&&(t=0);var e,r,n=o.slidesToShow,a=o.currentSlide,s=o.itemWidth,l=o.totalItems,d=Ht.getSlidesToSlide(o,i),u=a+1+t+n+(0<t?0:d);return r=u<=l?-s*(e=a+t+(0<t?0:d)):l<u&&a!==l-n?-s*(e=l-n):e=void 0,{nextSlides:e,nextPosition:r}}tt.populateNextSlides=Kt;var et={};Object.defineProperty(et,"__esModule",{value:!0});var Jt=C,qt=T,Qt=T;function Zt(o,i,t){t===void 0&&(t=0);var e,r,n=o.currentSlide,a=o.itemWidth,s=o.slidesToShow,l=i.children,d=i.showDots,u=i.infinite,c=qt.getSlidesToSlide(o,i),h=n-t-(0<t?0:c),p=(Jt.Children.toArray(l).length-s)%c;return r=0<=h?(e=h,d&&!u&&0<p&&Qt.isInRightEnd(o)&&(e=n-p),-a*e):e=h<0&&n!==0?0:void 0,{nextSlides:e,nextPosition:r}}et.populatePreviousSlides=Zt;var Mt={};(function(o){function i(t,e,r,n,a,s){var l,d,u=t.itemWidth,c=t.slidesToShow,h=t.totalItems,p=t.currentSlide,f=e.infinite,g=!1,b=Math.round((r-n)/u),I=Math.round((n-r)/u),M=r<a;if(a<r&&b<=c){l="right";var S=Math.abs(-u*(h-c)),E=s-(n-a),R=p===h-c;(Math.abs(E)<=S||R&&f)&&(d=E,g=!0)}return M&&I<=c&&(l="left",((E=s+(a-n))<=0||p===0&&f)&&(g=!0,d=E)),{direction:l,nextPosition:d,canContinue:g}}Object.defineProperty(o,"__esModule",{value:!0}),o.populateSlidesOnMouseTouchMove=i})(Mt);Object.defineProperty(v,"__esModule",{value:!0});var V=X;v.getOriginalCounterPart=V.getOriginalCounterPart,v.getClones=V.getClones,v.checkClonesPosition=V.checkClonesPosition,v.getInitialSlideInInfiniteMode=V.getInitialSlideInInfiniteMode;var z=A;v.getWidthFromDeviceType=z.getWidthFromDeviceType,v.getPartialVisibilityGutter=z.getPartialVisibilityGutter,v.getItemClientSideWidth=z.getItemClientSideWidth;var O=T;v.getInitialState=O.getInitialState,v.getIfSlideIsVisbile=O.getIfSlideIsVisbile,v.getTransformForCenterMode=O.getTransformForCenterMode,v.getTransformForPartialVsibile=O.getTransformForPartialVsibile,v.isInLeftEnd=O.isInLeftEnd,v.isInRightEnd=O.isInRightEnd,v.notEnoughChildren=O.notEnoughChildren,v.getSlidesToSlide=O.getSlidesToSlide;var te=Z;v.throttle=te.default;var ee=It;v.throwError=ee.default;var ie=tt;v.populateNextSlides=ie.populateNextSlides;var oe=et;v.populatePreviousSlides=oe.populatePreviousSlides;var re=Mt;v.populateSlidesOnMouseTouchMove=re.populateSlidesOnMouseTouchMove;var U={},ne=F&&F.__extends||function(){var o=function(i,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var n in r)r.hasOwnProperty(n)&&(e[n]=r[n])})(i,t)};return function(i,t){function e(){this.constructor=i}o(i,t),i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}}();Object.defineProperty(U,"__esModule",{value:!0});var se=C;function ae(o){return"clientY"in o}U.isMouseMoveEvent=ae;var le=function(o){function i(){return o!==null&&o.apply(this,arguments)||this}return ne(i,o),i}(se.Component);U.default=le;var it={},ot={};Object.defineProperty(ot,"__esModule",{value:!0});var de=X,ue=T;function he(o,i,t,e){var r={},n=ue.getSlidesToSlide(i,t);return Array(o).fill(0).forEach(function(a,s){var l=de.getOriginalCounterPart(s,i,e);if(s===0)r[0]=l;else{var d=r[s-1]+n;r[s]=d}}),r}ot.getLookupTableForNextSlides=he;Object.defineProperty(it,"__esModule",{value:!0});var j=C,ce=X,pe=ot,nt=T,fe=function(o){var i=o.props,t=o.state,e=o.goToSlide,r=o.getState,n=i.showDots,a=i.customDot,s=i.dotListClass,l=i.infinite,d=i.children;if(!n||nt.notEnoughChildren(t))return null;var u,c=t.currentSlide,h=t.slidesToShow,p=nt.getSlidesToSlide(t,i),f=j.Children.toArray(d);u=l?Math.ceil(f.length/p):Math.ceil((f.length-h)/p)+1;var g=pe.getLookupTableForNextSlides(u,t,i,f),b=ce.getOriginalIndexLookupTableByClones(h,f),I=b[c];return j.createElement("ul",{className:"react-multi-carousel-dot-list "+s},Array(u).fill(0).map(function(M,S){var E,R;if(l){R=g[S];var L=b[R];E=I===L||L<=I&&I<L+p}else{var W=f.length-h,N=S*p;E=(R=W<N?W:N)===c||R<c&&c<R+p&&c<f.length-h}return a?j.cloneElement(a,{index:S,active:E,key:S,onClick:function(){return e(R)},carouselState:r()}):j.createElement("li",{"data-index":S,key:S,className:"react-multi-carousel-dot "+(E?"react-multi-carousel-dot--active":"")},j.createElement("button",{"aria-label":"Go to slide "+(S+1),onClick:function(){return e(R)}}))}))};it.default=fe;var Y={};Object.defineProperty(Y,"__esModule",{value:!0});var G=C,me=function(o){var i=o.customLeftArrow,t=o.getState,e=o.previous,r=o.disabled,n=o.rtl;if(i)return G.cloneElement(i,{onClick:function(){return e()},carouselState:t(),disabled:r,rtl:n});var a=n?"rtl":"";return G.createElement("button",{"aria-label":"Go to previous slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--left "+a,onClick:function(){return e()},type:"button",disabled:r})};Y.LeftArrow=me;var ve=function(o){var i=o.customRightArrow,t=o.getState,e=o.next,r=o.disabled,n=o.rtl;if(i)return G.cloneElement(i,{onClick:function(){return e()},carouselState:t(),disabled:r,rtl:n});var a=n?"rtl":"";return G.createElement("button",{"aria-label":"Go to next slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--right "+a,onClick:function(){return e()},type:"button",disabled:r})};Y.RightArrow=ve;var rt={};Object.defineProperty(rt,"__esModule",{value:!0});var $=C,H=v,ge=function(o){var i=o.props,t=o.state,e=o.goToSlide,r=o.clones,n=o.notEnoughChildren,a=t.itemWidth,s=i.children,l=i.infinite,d=i.itemClass,u=i.itemAriaLabel,c=i.partialVisbile,h=i.partialVisible,p=H.getInitialState(t,i),f=p.flexBisis,g=p.shouldRenderOnSSR,b=p.domFullyLoaded,I=p.partialVisibilityGutter;return p.shouldRenderAtAll?(c&&console.warn('WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'),$.createElement($.Fragment,null,(l?r:$.Children.toArray(s)).map(function(M,S){return $.createElement("li",{key:S,"data-index":S,onClick:function(){i.focusOnSelect&&e(S)},"aria-hidden":H.getIfSlideIsVisbile(S,t)?"false":"true","aria-label":u||(M.props.ariaLabel?M.props.ariaLabel:null),style:{flex:g?"1 0 "+f+"%":"auto",position:"relative",width:b?((c||h)&&I&&!n?a-I:a)+"px":"auto"},className:"react-multi-carousel-item "+(H.getIfSlideIsVisbile(S,t)?"react-multi-carousel-item--active":"")+" "+d},M)}))):null};rt.default=ge;var Se=F&&F.__extends||function(){var o=function(i,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var n in r)r.hasOwnProperty(n)&&(e[n]=r[n])})(i,t)};return function(i,t){function e(){this.constructor=i}o(i,t),i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}}();Object.defineProperty(q,"__esModule",{value:!0});var w=C,y=v,D=U,ye=it,st=Y,Te=rt,B=T,_=400,at="transform 400ms ease-in-out",we=function(o){function i(t){var e=o.call(this,t)||this;return e.containerRef=w.createRef(),e.listRef=w.createRef(),e.state={itemWidth:0,slidesToShow:0,currentSlide:0,totalItems:w.Children.count(t.children),deviceType:"",domLoaded:!1,transform:0,containerWidth:0},e.onResize=e.onResize.bind(e),e.handleDown=e.handleDown.bind(e),e.handleMove=e.handleMove.bind(e),e.handleOut=e.handleOut.bind(e),e.onKeyUp=e.onKeyUp.bind(e),e.handleEnter=e.handleEnter.bind(e),e.setIsInThrottle=e.setIsInThrottle.bind(e),e.next=y.throttle(e.next.bind(e),t.transitionDuration||_,e.setIsInThrottle),e.previous=y.throttle(e.previous.bind(e),t.transitionDuration||_,e.setIsInThrottle),e.goToSlide=y.throttle(e.goToSlide.bind(e),t.transitionDuration||_,e.setIsInThrottle),e.onMove=!1,e.initialX=0,e.lastX=0,e.isAnimationAllowed=!1,e.direction="",e.initialY=0,e.isInThrottle=!1,e.transformPlaceHolder=0,e}return Se(i,o),i.prototype.resetTotalItems=function(){var t=this,e=w.Children.count(this.props.children),r=y.notEnoughChildren(this.state)?0:Math.max(0,Math.min(this.state.currentSlide,e));this.setState({totalItems:e,currentSlide:r},function(){t.setContainerAndItemWidth(t.state.slidesToShow,!0)})},i.prototype.setIsInThrottle=function(t){t===void 0&&(t=!1),this.isInThrottle=t},i.prototype.setTransformDirectly=function(t,e){var r=this.props.additionalTransfrom;this.transformPlaceHolder=t;var n=B.getTransform(this.state,this.props,this.transformPlaceHolder);this.listRef&&this.listRef.current&&(this.setAnimationDirectly(e),this.listRef.current.style.transform="translate3d("+(n+r)+"px,0,0)")},i.prototype.setAnimationDirectly=function(t){this.listRef&&this.listRef.current&&(this.listRef.current.style.transition=t?this.props.customTransition||at:"none")},i.prototype.componentDidMount=function(){this.setState({domLoaded:!0}),this.setItemsToShow(),window.addEventListener("resize",this.onResize),this.onResize(!0),this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),this.props.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},i.prototype.setClones=function(t,e,r,n){var a=this;n===void 0&&(n=!1),this.isAnimationAllowed=!1;var s=w.Children.toArray(this.props.children),l=y.getInitialSlideInInfiniteMode(t||this.state.slidesToShow,s),d=y.getClones(this.state.slidesToShow,s),u=s.length<this.state.slidesToShow?0:this.state.currentSlide;this.setState({totalItems:d.length,currentSlide:r&&!n?u:l},function(){a.correctItemsPosition(e||a.state.itemWidth)})},i.prototype.setItemsToShow=function(t,e){var r=this,n=this.props.responsive;Object.keys(n).forEach(function(a){var s=n[a],l=s.breakpoint,d=s.items,u=l.max,c=l.min,h=[window.innerWidth];window.screen&&window.screen.width&&h.push(window.screen.width);var p=Math.min.apply(Math,h);c<=p&&p<=u&&(r.setState({slidesToShow:d,deviceType:a}),r.setContainerAndItemWidth(d,t,e))})},i.prototype.setContainerAndItemWidth=function(t,e,r){var n=this;if(this.containerRef&&this.containerRef.current){var a=this.containerRef.current.offsetWidth,s=y.getItemClientSideWidth(this.props,t,a);this.setState({containerWidth:a,itemWidth:s},function(){n.props.infinite&&n.setClones(t,s,e,r)}),e&&this.correctItemsPosition(s)}},i.prototype.correctItemsPosition=function(t,e,r){e&&(this.isAnimationAllowed=!0),!e&&this.isAnimationAllowed&&(this.isAnimationAllowed=!1);var n=this.state.totalItems<this.state.slidesToShow?0:-t*this.state.currentSlide;r&&this.setTransformDirectly(n,!0),this.setState({transform:n})},i.prototype.onResize=function(t){var e;e=!!this.props.infinite&&(typeof t!="boolean"||!t),this.setItemsToShow(e)},i.prototype.componentDidUpdate=function(t,e){var r=this,n=t.keyBoardControl,a=t.autoPlay,s=t.children,l=e.containerWidth,d=e.domLoaded,u=e.currentSlide;if(this.containerRef&&this.containerRef.current&&this.containerRef.current.offsetWidth!==l&&(this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),this.itemsToShowTimeout=setTimeout(function(){r.setItemsToShow(!0)},this.props.transitionDuration||_)),n&&!this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),!n&&this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),a&&!this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),a||!this.props.autoPlay||this.autoPlay||(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed)),s.length!==this.props.children.length?i.clonesTimeout=setTimeout(function(){r.props.infinite?r.setClones(r.state.slidesToShow,r.state.itemWidth,!0,!0):r.resetTotalItems()},this.props.transitionDuration||_):this.props.infinite&&this.state.currentSlide!==u&&this.correctClonesPosition({domLoaded:d}),this.transformPlaceHolder!==this.state.transform&&(this.transformPlaceHolder=this.state.transform),this.props.autoPlay&&this.props.rewind&&!this.props.infinite&&y.isInRightEnd(this.state)){var c=this.props.transitionDuration||_;i.isInThrottleTimeout=setTimeout(function(){r.setIsInThrottle(!1),r.resetAutoplayInterval(),r.goToSlide(0,void 0,!!r.props.rewindWithAnimation)},c+this.props.autoPlaySpeed)}},i.prototype.correctClonesPosition=function(t){var e=this,r=t.domLoaded,n=w.Children.toArray(this.props.children),a=y.checkClonesPosition(this.state,n,this.props),s=a.isReachingTheEnd,l=a.isReachingTheStart,d=a.nextSlide,u=a.nextPosition;this.state.domLoaded&&r&&(s||l)&&(this.isAnimationAllowed=!1,i.transformTimeout=setTimeout(function(){e.setState({transform:u,currentSlide:d})},this.props.transitionDuration||_))},i.prototype.next=function(t){var e=this;t===void 0&&(t=0);var r=this.props,n=r.afterChange,a=r.beforeChange;if(!y.notEnoughChildren(this.state)){var s=y.populateNextSlides(this.state,this.props,t),l=s.nextSlides,d=s.nextPosition,u=this.state.currentSlide;l!==void 0&&d!==void 0&&(typeof a=="function"&&a(l,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:d,currentSlide:l},function(){typeof n=="function"&&(i.afterChangeTimeout=setTimeout(function(){n(u,e.getState())},e.props.transitionDuration||_))}))}},i.prototype.previous=function(t){var e=this;t===void 0&&(t=0);var r=this.props,n=r.afterChange,a=r.beforeChange;if(!y.notEnoughChildren(this.state)){var s=y.populatePreviousSlides(this.state,this.props,t),l=s.nextSlides,d=s.nextPosition;if(l!==void 0&&d!==void 0){var u=this.state.currentSlide;typeof a=="function"&&a(l,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:d,currentSlide:l},function(){typeof n=="function"&&(i.afterChangeTimeout2=setTimeout(function(){n(u,e.getState())},e.props.transitionDuration||_))})}}},i.prototype.resetAutoplayInterval=function(){this.props.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},i.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize),this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),i.clonesTimeout&&clearTimeout(i.clonesTimeout),i.isInThrottleTimeout&&clearTimeout(i.isInThrottleTimeout),i.transformTimeout&&clearTimeout(i.transformTimeout),i.afterChangeTimeout&&clearTimeout(i.afterChangeTimeout),i.afterChangeTimeout2&&clearTimeout(i.afterChangeTimeout2),i.afterChangeTimeout3&&clearTimeout(i.afterChangeTimeout3)},i.prototype.resetMoveStatus=function(){this.onMove=!1,this.initialX=0,this.lastX=0,this.direction="",this.initialY=0},i.prototype.getCords=function(t){var e=t.clientX,r=t.clientY;return{clientX:B.parsePosition(this.props,e),clientY:B.parsePosition(this.props,r)}},i.prototype.handleDown=function(t){if(!(!D.isMouseMoveEvent(t)&&!this.props.swipeable||D.isMouseMoveEvent(t)&&!this.props.draggable||this.isInThrottle)){var e=this.getCords(D.isMouseMoveEvent(t)?t:t.touches[0]),r=e.clientX,n=e.clientY;this.onMove=!0,this.initialX=r,this.initialY=n,this.lastX=r,this.isAnimationAllowed=!1}},i.prototype.handleMove=function(t){if(!(!D.isMouseMoveEvent(t)&&!this.props.swipeable||D.isMouseMoveEvent(t)&&!this.props.draggable||y.notEnoughChildren(this.state))){var e=this.getCords(D.isMouseMoveEvent(t)?t:t.touches[0]),r=e.clientX,n=e.clientY,a=this.initialX-r,s=this.initialY-n;if(this.onMove){if(!(Math.abs(a)>Math.abs(s)))return;var l=y.populateSlidesOnMouseTouchMove(this.state,this.props,this.initialX,this.lastX,r,this.transformPlaceHolder),d=l.direction,u=l.nextPosition,c=l.canContinue;d&&(this.direction=d,c&&u!==void 0&&this.setTransformDirectly(u)),this.lastX=r}}},i.prototype.handleOut=function(t){this.props.autoPlay&&!this.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed));var e=t.type==="touchend"&&!this.props.swipeable,r=(t.type==="mouseleave"||t.type==="mouseup")&&!this.props.draggable;if(!e&&!r&&this.onMove){if(this.setAnimationDirectly(!0),this.direction==="right")if(this.initialX-this.lastX>=this.props.minimumTouchDrag){var n=Math.round((this.initialX-this.lastX)/this.state.itemWidth);this.next(n)}else this.correctItemsPosition(this.state.itemWidth,!0,!0);this.direction==="left"&&(this.lastX-this.initialX>this.props.minimumTouchDrag?(n=Math.round((this.lastX-this.initialX)/this.state.itemWidth),this.previous(n)):this.correctItemsPosition(this.state.itemWidth,!0,!0)),this.resetMoveStatus()}},i.prototype.isInViewport=function(t){var e=t.getBoundingClientRect(),r=e.top,n=r===void 0?0:r,a=e.left,s=a===void 0?0:a,l=e.bottom,d=l===void 0?0:l,u=e.right,c=u===void 0?0:u;return 0<=n&&0<=s&&d<=(window.innerHeight||document.documentElement.clientHeight)&&c<=(window.innerWidth||document.documentElement.clientWidth)},i.prototype.isChildOfCarousel=function(t){return!!(t instanceof Element&&this.listRef&&this.listRef.current)&&this.listRef.current.contains(t)},i.prototype.onKeyUp=function(t){var e=t.target;switch(t.keyCode){case 37:if(this.isChildOfCarousel(e))return this.previous();break;case 39:if(this.isChildOfCarousel(e))return this.next();break;case 9:if(this.isChildOfCarousel(e)&&e instanceof HTMLInputElement&&this.isInViewport(e))return this.next()}},i.prototype.handleEnter=function(t){D.isMouseMoveEvent(t)&&this.autoPlay&&this.props.autoPlay&&this.props.pauseOnHover&&(clearInterval(this.autoPlay),this.autoPlay=void 0)},i.prototype.goToSlide=function(t,e,r){var n=this;if(r===void 0&&(r=!0),!this.isInThrottle){var a=this.state.itemWidth,s=this.props,l=s.afterChange,d=s.beforeChange,u=this.state.currentSlide;typeof d!="function"||e&&(typeof e!="object"||e.skipBeforeChange)||d(t,this.getState()),this.isAnimationAllowed=r,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({currentSlide:t,transform:-a*t},function(){n.props.infinite&&n.correctClonesPosition({domLoaded:!0}),typeof l!="function"||e&&(typeof e!="object"||e.skipAfterChange)||(i.afterChangeTimeout3=setTimeout(function(){l(u,n.getState())},n.props.transitionDuration||_))})}},i.prototype.getState=function(){return this.state},i.prototype.renderLeftArrow=function(t){var e=this,r=this.props,n=r.customLeftArrow,a=r.rtl;return w.createElement(st.LeftArrow,{customLeftArrow:n,getState:function(){return e.getState()},previous:this.previous,disabled:t,rtl:a})},i.prototype.renderRightArrow=function(t){var e=this,r=this.props,n=r.customRightArrow,a=r.rtl;return w.createElement(st.RightArrow,{customRightArrow:n,getState:function(){return e.getState()},next:this.next,disabled:t,rtl:a})},i.prototype.renderButtonGroups=function(){var t=this,e=this.props.customButtonGroup;return e?w.cloneElement(e,{previous:function(){return t.previous()},next:function(){return t.next()},goToSlide:function(r,n){return t.goToSlide(r,n)},carouselState:this.getState()}):null},i.prototype.renderDotsList=function(){var t=this;return w.createElement(ye.default,{state:this.state,props:this.props,goToSlide:this.goToSlide,getState:function(){return t.getState()}})},i.prototype.renderCarouselItems=function(){var t=[];if(this.props.infinite){var e=w.Children.toArray(this.props.children);t=y.getClones(this.state.slidesToShow,e)}return w.createElement(Te.default,{clones:t,goToSlide:this.goToSlide,state:this.state,notEnoughChildren:y.notEnoughChildren(this.state),props:this.props})},i.prototype.render=function(){var t=this.props,e=t.deviceType,r=t.arrows,n=t.renderArrowsWhenDisabled,a=t.removeArrowOnDeviceType,s=t.infinite,l=t.containerClass,d=t.sliderClass,u=t.customTransition,c=t.additionalTransfrom,h=t.renderDotsOutside,p=t.renderButtonGroupOutside,f=t.className,g=t.rtl,b=y.getInitialState(this.state,this.props),I=b.shouldRenderOnSSR,M=b.shouldRenderAtAll,S=y.isInLeftEnd(this.state),E=y.isInRightEnd(this.state),R=r&&!(a&&(e&&-1<a.indexOf(e)||this.state.deviceType&&-1<a.indexOf(this.state.deviceType)))&&!y.notEnoughChildren(this.state)&&M,L=!s&&S,W=!s&&E,N=B.getTransform(this.state,this.props);return w.createElement(w.Fragment,null,w.createElement("div",{className:"react-multi-carousel-list "+l+" "+f,dir:g?"rtl":"ltr",ref:this.containerRef},w.createElement("ul",{ref:this.listRef,className:"react-multi-carousel-track "+d,style:{transition:this.isAnimationAllowed?u||at:"none",overflow:I?"hidden":"unset",transform:"translate3d("+(N+c)+"px,0,0)"},onMouseMove:this.handleMove,onMouseDown:this.handleDown,onMouseUp:this.handleOut,onMouseEnter:this.handleEnter,onMouseLeave:this.handleOut,onTouchStart:this.handleDown,onTouchMove:this.handleMove,onTouchEnd:this.handleOut},this.renderCarouselItems()),R&&(!L||n)&&this.renderLeftArrow(L),R&&(!W||n)&&this.renderRightArrow(W),M&&!p&&this.renderButtonGroups(),M&&!h&&this.renderDotsList()),M&&h&&this.renderDotsList(),M&&p&&this.renderButtonGroups())},i.defaultProps={slidesToSlide:1,infinite:!1,draggable:!0,swipeable:!0,arrows:!0,renderArrowsWhenDisabled:!1,containerClass:"",sliderClass:"",itemClass:"",keyBoardControl:!0,autoPlaySpeed:3e3,showDots:!1,renderDotsOutside:!1,renderButtonGroupOutside:!1,minimumTouchDrag:80,className:"",dotListClass:"",focusOnSelect:!1,centerMode:!1,additionalTransfrom:0,pauseOnHover:!0,shouldResetAutoplay:!0,rewind:!1,rtl:!1,rewindWithAnimation:!1},i}(w.Component);q.default=we;Object.defineProperty(J,"__esModule",{value:!0});var Ce=q;J.default=Ce.default;var be=J;const Ie=Et(be),Me={desktop:{breakpoint:{max:3e3,min:1024},items:3,slidesToSlide:1},tablet:{breakpoint:{max:1024,min:481},items:2,slidesToSlide:1},mobile:{breakpoint:{max:480,min:0},items:1,slidesToSlide:1}};function Ee({topStories:o}){return m.jsx("div",{className:"container mb-5",children:m.jsx("div",{className:"row",children:m.jsxs("div",{className:"col-sm-12",children:[m.jsxs("div",{className:"title text-center my-5",children:[m.jsx("h1",{className:"mb-10",children:"Here is Latest Stories from all categories"}),m.jsx("p",{className:"px-15",children:"Discover, Share, and Explore: Join our platform to contribute and enjoy a diverse array of blogs spanning Educative, Travel, News, and Sports categories"})]}),m.jsx(Ie,{swipeable:!0,draggable:!1,showDots:!1,responsive:Me,infinite:!0,autoPlay:!0,autoPlaySpeed:3e3,keyBoardControl:!0,customTransition:"all 0.5s ease-in-out",transitionDuration:100,containerClass:"carousel-container",removeArrowOnDeviceType:["tablet","mobile"],dotListClass:"custom-dot-list-style",itemClass:"carousel-item-padding-40-px",renderButtonGroupOutside:!0,children:o.length>0&&o.map(i=>m.jsxs(k,{children:[m.jsx("img",{src:i.image.url,className:"card-image"}),m.jsxs(k.Body,{children:[m.jsx(k.Title,{children:i.title}),m.jsx(k.Text,{dangerouslySetInnerHTML:{__html:i.desc}}),m.jsx(_t,{className:"readmore-btn",children:"Read More"})]})]},i._id))})]})})})}export{Ee as default};
