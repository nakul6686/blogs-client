import{r as o,f as y,j as e,h as m,i as ce,A as Ee,k as De,l as Ie,m as Fe,n as te,o as ze,p as _e,q as ae,M as He,s as Oe,F as re,t as Ue,v as Le,w as We,x as Ke,e as Ve,a as Ye,u as qe,b as Ge,y as le,z as Je,C as Qe,B as ne}from"./index-BCqIWwzA.js";import{a as G}from"./axiosInstance-tbaVc4i5.js";import{F as Xe}from"./Form-qG4HZMHW.js";const de=o.forwardRef(({bsPrefix:s,bg:t="primary",pill:c=!1,text:r,className:d,as:n="span",...v},g)=>{const x=y(s,"badge");return e.jsx(n,{ref:g,...v,className:m(d,x,c&&"rounded-pill",r&&`text-${r}`,t&&`bg-${t}`)})});de.displayName="Badge";const Ze=de;var L;function oe(s){if((!L&&L!==0||s)&&ce){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),L=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return L}const ie=o.forwardRef(({className:s,bsPrefix:t,as:c="div",...r},d)=>(t=y(t,"modal-body"),e.jsx(c,{ref:d,className:m(s,t),...r})));ie.displayName="ModalBody";const Pe=ie,me=o.forwardRef(({bsPrefix:s,className:t,contentClassName:c,centered:r,size:d,fullscreen:n,children:v,scrollable:g,...x},f)=>{s=y(s,"modal");const p=`${s}-dialog`,N=typeof n=="string"?`${s}-fullscreen-${n}`:`${s}-fullscreen`;return e.jsx("div",{...x,ref:f,className:m(p,t,d&&`${s}-${d}`,r&&`${p}-centered`,g&&`${p}-scrollable`,n&&N),children:e.jsx("div",{className:m(`${s}-content`,c),children:v})})});me.displayName="ModalDialog";const ue=me,he=o.forwardRef(({className:s,bsPrefix:t,as:c="div",...r},d)=>(t=y(t,"modal-footer"),e.jsx(c,{ref:d,className:m(s,t),...r})));he.displayName="ModalFooter";const es=he,ge=o.forwardRef(({bsPrefix:s,className:t,closeLabel:c="Close",closeButton:r=!1,...d},n)=>(s=y(s,"modal-header"),e.jsx(Ee,{ref:n,...d,className:m(t,s),closeLabel:c,closeButton:r})));ge.displayName="ModalHeader";const ss=ge,ts=De("h4"),xe=o.forwardRef(({className:s,bsPrefix:t,as:c=ts,...r},d)=>(t=y(t,"modal-title"),e.jsx(c,{ref:d,className:m(s,t),...r})));xe.displayName="ModalTitle";const as=xe;function ls(s){return e.jsx(re,{...s,timeout:null})}function ns(s){return e.jsx(re,{...s,timeout:null})}const fe=o.forwardRef(({bsPrefix:s,className:t,style:c,dialogClassName:r,contentClassName:d,children:n,dialogAs:v=ue,"data-bs-theme":g,"aria-labelledby":x,"aria-describedby":f,"aria-label":p,show:N=!1,animation:u=!0,backdrop:j=!0,keyboard:K=!0,onEscapeKeyDown:D,onShow:b,onHide:w,container:I,autoFocus:F=!0,enforceFocus:z=!0,restoreFocus:_=!0,restoreFocusOptions:H,onEntered:O,onExit:S,onExiting:U,onEnter:$,onEntering:B,onExited:R,backdropClassName:k,manager:T,...l},i)=>{const[C,h]=o.useState({}),[pe,J]=o.useState(!1),V=o.useRef(!1),Y=o.useRef(!1),A=o.useRef(null),[E,Ne]=Ie(),je=Fe(i,Ne),Q=te(w),ye=ze();s=y(s,"modal");const ve=o.useMemo(()=>({onHide:Q}),[Q]);function X(){return T||Ue({isRTL:ye})}function Z(a){if(!ce)return;const M=X().getScrollbarWidth()>0,se=a.scrollHeight>We(a).documentElement.clientHeight;h({paddingRight:M&&!se?oe():void 0,paddingLeft:!M&&se?oe():void 0})}const q=te(()=>{E&&Z(E.dialog)});_e(()=>{ae(window,"resize",q),A.current==null||A.current()});const be=()=>{V.current=!0},we=a=>{V.current&&E&&a.target===E.dialog&&(Y.current=!0),V.current=!1},P=()=>{J(!0),A.current=Ke(E.dialog,()=>{J(!1)})},Ce=a=>{a.target===a.currentTarget&&P()},Me=a=>{if(j==="static"){Ce(a);return}if(Y.current||a.target!==a.currentTarget){Y.current=!1;return}w==null||w()},Se=a=>{K?D==null||D(a):(a.preventDefault(),j==="static"&&P())},$e=(a,M)=>{a&&Z(a),$==null||$(a,M)},Be=a=>{A.current==null||A.current(),S==null||S(a)},Re=(a,M)=>{B==null||B(a,M),Le(window,"resize",q)},ke=a=>{a&&(a.style.display=""),R==null||R(a),ae(window,"resize",q)},Te=o.useCallback(a=>e.jsx("div",{...a,className:m(`${s}-backdrop`,k,!u&&"show")}),[u,k,s]),ee={...c,...C};ee.display="block";const Ae=a=>e.jsx("div",{role:"dialog",...a,style:ee,className:m(t,s,pe&&`${s}-static`,!u&&"show"),onClick:j?Me:void 0,onMouseUp:we,"data-bs-theme":g,"aria-label":p,"aria-labelledby":x,"aria-describedby":f,children:e.jsx(v,{...l,onMouseDown:be,className:r,contentClassName:d,children:n})});return e.jsx(He.Provider,{value:ve,children:e.jsx(Oe,{show:N,ref:je,backdrop:j,container:I,keyboard:!0,autoFocus:F,enforceFocus:z,restoreFocus:_,restoreFocusOptions:H,onEscapeKeyDown:Se,onShow:b,onHide:w,onEnter:$e,onEntering:Re,onEntered:O,onExit:Be,onExiting:U,onExited:ke,manager:X(),transition:u?ls:void 0,backdropTransition:u?ns:void 0,renderBackdrop:Te,renderDialog:Ae})})});fe.displayName="Modal";const W=Object.assign(fe,{Body:Pe,Header:ss,Title:as,Footer:es,Dialog:ue,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150});function ds(){var I,F,z,_,H,O,S,U,$,B,R,k,T;const[s,t]=o.useState(null),[c,r]=o.useState(""),d=Ve(),{user:n,handleUser:v}=Ye(),[g,x]=o.useState(1),f=qe(),[p,N]=o.useState(!1),u=Ge();o.useEffect(()=>{const l=d.id;G.get(`blog/getbyId/${l}`).then(i=>t(i.data)).catch(i=>console.log(i))},[g]);const j=(l,i)=>{const C=new Date(l);let h=null;return i?h={day:"numeric",month:"long",year:"numeric",hour:"numeric",minute:"numeric",hour12:!0}:h={day:"numeric",month:"long",year:"numeric"},C.toLocaleDateString("en-US",h)},K=l=>{r(l.target.value)},D=()=>{G.post("comments/create",{text:c,blog:s._id,user:n._id}).then(l=>{console.log(l),x(i=>i+1),r(""),u("success","Comment has been added.")}).catch(l=>console.log(err))},b=l=>{f(`/blog-search/${l}`)},w=()=>{G.delete(`blog/delete/${n._id}/${s._id}`).then(l=>{f("/blog-search"),u("success","Blog and associated comments has been successfully deleted."),console.log(l)}).catch(l=>console.log(l))};return e.jsxs(e.Fragment,{children:[e.jsx("section",{className:"top-section-area section-gap",role:"top banner",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row justify-content-between align-items-center d-flex",children:e.jsx("div",{className:"col-lg-8 top-left",children:e.jsx("h1",{className:"text-white mb-20",children:"Blog Details"})})})})}),s?e.jsx("section",{className:"main-detils my-5",role:"Main blog details",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-sm-12 col-md-8 col-lg-8",children:[e.jsx("img",{className:"w-100",src:s.image.url,alt:"Blog Image",style:{maxHeight:"490px"},loading:"lazy"}),e.jsx("h3",{className:"blog-title mt-3",children:s.title}),e.jsxs("div",{className:"d-flex align-items-center",style:{gap:"10px"},children:[e.jsx("p",{className:"category-text mb-0",children:"Category:"}),e.jsx(Ze,{bg:"success",pill:!0,children:s.category})]}),e.jsxs("div",{className:"d-lg-flex justify-content-between mt-3",children:[e.jsxs("p",{className:"user-profile d-flex align-items-center mb-0",children:[(F=(I=s==null?void 0:s.user)==null?void 0:I.userImage)!=null&&F.url?e.jsx("img",{src:(_=(z=s==null?void 0:s.user)==null?void 0:z.userImage)==null?void 0:_.url,alt:"",className:"user-img",loading:"lazy"}):e.jsx("img",{src:le,alt:"",className:"user-img",loading:"lazy"}),e.jsx("p",{className:"user-name mb-0 ms-2",style:{lineHeight:2},children:(H=s==null?void 0:s.user)==null?void 0:H.userName})]}),e.jsxs("p",{className:"date-added d-flex align-items-center mb-0",children:[e.jsx(Je,{})," ",e.jsx("span",{className:"ms-2",children:j(s==null?void 0:s.createdAt,!1)})]})]}),e.jsx("div",{className:"blog-desc mt-3",dangerouslySetInnerHTML:{__html:s.desc}}),((O=s==null?void 0:s.user)==null?void 0:O._id)===(n==null?void 0:n._id)&&e.jsxs("div",{className:"actions d-flex",children:[e.jsx("button",{className:"btn btn-warning btn-sm",onClick:()=>f(`/blog-create/${s._id}`),children:"Edit"}),e.jsx("button",{className:"btn btn-outline-danger btn-sm ms-2",onClick:()=>N(!0),children:"Delete"})]}),e.jsx("div",{className:"bottom-wrapper",children:e.jsx("div",{className:"row",children:e.jsxs("div",{className:"col-lg-12 single-b-wrap col-md-12 d-flex align-items-center",children:[e.jsx(Qe,{style:{color:"#8490ff x"}})," ",e.jsx("span",{className:"ms-2 comment-text",children:s.comments.length>9?`${(S=s.comments)==null?void 0:S.length} people commented on this post.`:((U=s.comments)==null?void 0:U.length)===0?"No comments yet.":(($=s.comments)==null?void 0:$.length)===1?((B=s.comments[0])==null?void 0:B.user._id)===(n==null?void 0:n._id)?"You commented on this post.":`${(k=(R=s.comments[0])==null?void 0:R.user)==null?void 0:k.userName} commented on this.`:`0${(T=s.comments)==null?void 0:T.length} people commented on this post.`})]})})}),e.jsx("section",{className:"comment-sec-area pt-80",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row flex-column",children:[e.jsx("h5",{className:"text-uppercase pb-3",children:s.comments.length>9?`${s.comments.length} Comments`:s.comments.length===0?"No comments yet.":`0${s.comments.length} Comments`}),e.jsxs("div",{className:"d-flex w-100 mb-4 position-relative",children:[e.jsx(Xe.Control,{type:"text",id:"addcomment","aria-describedby":"comment text",placeholder:"Add your thoughts here...",disabled:!n,onChange:K,value:c}),e.jsx("button",{disabled:!n||c==="",className:"btn btn-primary",style:{textWrap:"nowrap",marginLeft:"5px"},onClick:D,children:"Add Comment"})]}),e.jsx("div",{className:"comment-list",children:s.comments.map((l,i)=>{var C,h;return e.jsx("div",{className:"single-comment justify-content-between d-flex",children:e.jsxs("div",{className:"user justify-content-between d-flex",children:[e.jsx("div",{className:"thumb",children:(C=l.user.userImage)!=null&&C.url?e.jsx("img",{src:(h=l.user.userImage)==null?void 0:h.url,alt:"",loading:"lazy"}):e.jsx("img",{src:le,alt:"",loading:"lazy"})}),e.jsxs("div",{className:"desc",children:[e.jsx("h5",{children:e.jsx("p",{className:"mb-0",children:l.user.userName})}),e.jsx("p",{className:"date mb-0",children:j(l.createdAt,!0)}),e.jsx("p",{className:"comment",children:l.text})]})]})},i)})})]})})})]}),e.jsx("div",{className:"col-sm-12 col-md-4 col-lg-4",children:e.jsxs("ul",{className:"categories list-none",children:[e.jsx("h3",{className:"title",children:"Other Categories"}),e.jsx("li",{className:"cat-list",role:"button",onClick:()=>b("Educative"),children:"Educative"}),e.jsx("li",{className:"cat-list",role:"button",onClick:()=>b("News"),children:"News"}),e.jsx("li",{className:"cat-list",role:"button",onClick:()=>b("Travel"),children:"Travel"}),e.jsx("li",{className:"cat-list",role:"button",onClick:()=>b("Sports"),children:"Sports"})]})})]})})}):s!==null&&e.jsx("p",{className:"d-flex justify-content-center pt-200  fw-bold",style:{fontSize:"30px"},children:"Opps! The post you are looking for is not found"}),e.jsxs(W,{size:"sm",show:p,onHide:()=>N(!1),"aria-labelledby":"example-modal-sizes-title-sm",centered:!0,children:[e.jsx(W.Header,{closeButton:!0,children:e.jsx("p",{className:"mb-0",children:"Delete Blog"})}),e.jsx(W.Body,{children:e.jsx("p",{className:"text-sm",children:"Are you sure to delete?"})}),e.jsxs(W.Footer,{className:"text-center",children:[e.jsx(ne,{className:"",size:"sm",variant:"secondary",onClick:()=>N(!1),children:"NO"}),e.jsx(ne,{className:"",size:"sm",variant:"danger",onClick:w,children:"YES"})]})]})]})}export{ds as default};
