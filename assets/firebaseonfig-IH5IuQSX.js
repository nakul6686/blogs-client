import{r as Pe,f as on,j as Ue,h as yt,c as an,g as cn}from"./index-ClJoBKdF.js";import{m as ln}from"./Form-QjY9mpGH.js";const nt=1e3;function un(t,e,n){const r=(t-e)/(n-e)*100;return Math.round(r*nt)/nt}function rt({min:t,now:e,max:n,label:r,visuallyHidden:s,striped:i,animated:o,className:a,style:c,variant:l,bsPrefix:u,...m},_){return Ue.jsx("div",{ref:_,...m,role:"progressbar",className:yt(a,`${u}-bar`,{[`bg-${l}`]:l,[`${u}-bar-animated`]:o,[`${u}-bar-striped`]:o||i}),style:{width:`${un(e,t,n)}%`,...c},"aria-valuenow":e,"aria-valuemin":t,"aria-valuemax":n,children:s?Ue.jsx("span",{className:"visually-hidden",children:r}):r})}const Et=Pe.forwardRef(({isChild:t=!1,...e},n)=>{const r={min:0,max:100,animated:!1,visuallyHidden:!1,striped:!1,...e};if(r.bsPrefix=on(r.bsPrefix,"progress"),t)return rt(r,n);const{min:s,now:i,max:o,label:a,visuallyHidden:c,striped:l,animated:u,bsPrefix:m,variant:_,className:d,children:g,...C}=r;return Ue.jsx("div",{ref:n,...C,className:yt(d,m),children:g?ln(g,w=>Pe.cloneElement(w,{isChild:!0})):rt({min:s,now:i,max:o,label:a,visuallyHidden:c,striped:l,animated:u,bsPrefix:m,variant:_},n)})});Et.displayName="ProgressBar";const ti=Et;var wt={exports:{}};(function(t,e){(function(n,r){t.exports=r(Pe)})(an,n=>(()=>{var r={703:(a,c,l)=>{var u=l(414);function m(){}function _(){}_.resetWarningCache=m,a.exports=function(){function d(w,N,U,D,O,h){if(h!==u){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}function g(){return d}d.isRequired=d;var C={array:d,bigint:d,bool:d,func:d,number:d,object:d,string:d,symbol:d,any:d,arrayOf:g,element:d,elementType:d,instanceOf:g,node:d,objectOf:g,oneOf:g,oneOfType:g,shape:g,exact:g,checkPropTypes:_,resetWarningCache:m};return C.PropTypes=C,C}},697:(a,c,l)=>{a.exports=l(703)()},414:a=>{a.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},639:a=>{a.exports=n}},s={};function i(a){var c=s[a];if(c!==void 0)return c.exports;var l=s[a]={exports:{}};return r[a](l,l.exports,i),l.exports}i.n=a=>{var c=a&&a.__esModule?()=>a.default:()=>a;return i.d(c,{a:c}),c},i.d=(a,c)=>{for(var l in c)i.o(c,l)&&!i.o(a,l)&&Object.defineProperty(a,l,{enumerable:!0,get:c[l]})},i.o=(a,c)=>Object.prototype.hasOwnProperty.call(a,c),i.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})};var o={};return(()=>{i.r(o),i.d(o,{default:()=>O});var a=i(639),c=i.n(a),l=i(697),u=i.n(l);const m=function(h){var p=h.name.split(".");return p.length>1?p[p.length-1]:"none"};function _(h,p){return function(f){if(Array.isArray(f))return f}(h)||function(f,y){var E=f==null?null:typeof Symbol<"u"&&f[Symbol.iterator]||f["@@iterator"];if(E!=null){var K,V,B,L,$=[],Y=!0,ue=!1;try{if(B=(E=E.call(f)).next,y===0){if(Object(E)!==E)return;Y=!1}else for(;!(Y=(K=B.call(E)).done)&&($.push(K.value),$.length!==y);Y=!0);}catch(we){ue=!0,V=we}finally{try{if(!Y&&E.return!=null&&(L=E.return(),Object(L)!==L))return}finally{if(ue)throw V}}return $}}(h,p)||function(f,y){if(f){if(typeof f=="string")return d(f,y);var E=Object.prototype.toString.call(f).slice(8,-1);return E==="Object"&&f.constructor&&(E=f.constructor.name),E==="Map"||E==="Set"?Array.from(f):E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E)?d(f,y):void 0}}(h,p)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function d(h,p){(p==null||p>h.length)&&(p=h.length);for(var f=0,y=new Array(p);f<p;f++)y[f]=h[f];return y}var g=/^(application|audio|example|image|message|model|multipart|text|video|\*)\/[a-z0-9\.\+\*-]+$/,C=/\.[a-zA-Z0-9]*$/;const w=function(h,p){return!h||h.some(function(f){if(p.type&&f.match(g)){var y=_(p.type.split("/"),2),E=y[0],K=y[1],V=_(f.split("/"),2),B=V[0],L=V[1];if(B&&L&&(B==="*"&&L==="*"||B===E&&L==="*"||B===E&&L===K))return!0}else if(p.extension&&f.match(C)){var $=f.substr(1);return p.extension.toLowerCase()===$.toLowerCase()}return!1})};function N(){return N=Object.assign?Object.assign.bind():function(h){for(var p=1;p<arguments.length;p++){var f=arguments[p];for(var y in f)Object.prototype.hasOwnProperty.call(f,y)&&(h[y]=f[y])}return h},N.apply(this,arguments)}function U(h,p){(p==null||p>h.length)&&(p=h.length);for(var f=0,y=new Array(p);f<p;f++)y[f]=h[f];return y}var D=function(h){var p,f,y=h.accepts,E=h.children,K=h.className,V=h.clickable,B=h.dragActiveClassName,L=(h.dragActiveStyle,h.inputProps),$=h.multiple,Y=h.maxFiles,ue=h.maxFileSize,we=h.minFileSize,Zt=h.name,Qt=h.onChange,Xe=h.onDragEnter,Ke=h.onDragLeave,en=h.onError,tn=h.style,Ye=(0,a.useRef)(1),ve=(0,a.useRef)(),Te=(0,a.useRef)(),Je=(p=(0,a.useState)(!1),f=2,function(b){if(Array.isArray(b))return b}(p)||function(b,S){var A=b==null?null:typeof Symbol<"u"&&b[Symbol.iterator]||b["@@iterator"];if(A!=null){var J,Z,R,Re,Ie=[],de=!0,tt=!1;try{if(R=(A=A.call(b)).next,S===0){if(Object(A)!==A)return;de=!1}else for(;!(de=(J=R.call(A)).done)&&(Ie.push(J.value),Ie.length!==S);de=!0);}catch(sn){tt=!0,Z=sn}finally{try{if(!de&&A.return!=null&&(Re=A.return(),Object(Re)!==Re))return}finally{if(tt)throw Z}}return Ie}}(p,f)||function(b,S){if(b){if(typeof b=="string")return U(b,S);var A=Object.prototype.toString.call(b).slice(8,-1);return A==="Object"&&b.constructor&&(A=b.constructor.name),A==="Map"||A==="Set"?Array.from(b):A==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A)?U(b,S):void 0}}(p,f)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),nn=Je[0],Ze=Je[1],he=function(b,S){en(b,S)},rn=(0,a.useCallback)(function(b){b.preventDefault(),b.stopPropagation()},[]),Qe=function(b){var S=ve.current;B&&(S.className=S.className.replace(" ".concat(B),"")),typeof E=="function"&&Ze(!1),Ke&&Ke(b)},et=function(b){b.preventDefault(),Qe(b);var S,A=b.dataTransfer?b.dataTransfer.files:b.target.files;$===!1&&A.length>1&&(A=[A[0]]);for(var J=[],Z=0;Z<A.length;Z+=1){var R=A[Z];if(R.id="files-".concat(Ye.current),Ye.current+=1,R.extension=m(R),R.sizeReadable=(S=R.size)>=1e9?Math.ceil(S/1e9)+"GB":S>=1e6?Math.ceil(S/1e6)+"MB":S>=1e3?Math.ceil(S/1e3)+"KB":Math.ceil(S)+"B",R.type&&R.type.split("/")[0]==="image"?R.preview={type:"image",url:window.URL.createObjectURL(R)}:R.preview={type:"file"},J.length>=Y){he({code:4,message:"maximum file count reached"},R);break}if(R.size>ue){he({code:2,message:"".concat(R.name," is too large")},R);break}if(R.size<we){he({code:3,message:"".concat(R.name," is too small")},R);break}if(!w(y,R)){he({code:1,message:"".concat(R.name," is not a valid file type")},R);break}J.push(R)}Qt(J)};return c().createElement(c().Fragment,null,c().createElement("input",N({},L,{ref:Te,type:"file",accept:y?y.join():"",multiple:$,name:Zt,style:{display:"none"},onChange:et})),c().createElement("div",{ref:ve,className:K,onClick:V===!0?function(){Te.current.value=null,Te.current.click()}:null,onDrop:et,onDragOver:rn,onDragEnter:function(b){var S=ve.current;B&&!S.className.includes(B)&&(S.className="".concat(S.className," ").concat(B)),typeof E=="function"&&Ze(!0),Xe&&Xe(b)},onDragLeave:Qe,style:tn},typeof E=="function"?E(nn):E))};D.propTypes={accepts:u().array,children:u().oneOfType([u().func,u().arrayOf(u().node),u().node]),className:u().string,clickable:u().bool,dragActiveClassName:u().string,inputProps:u().object,multiple:u().bool,maxFiles:u().number,maxFileSize:u().number,minFileSize:u().number,name:u().string,onChange:u().func,onDragEnter:u().func,onDragLeave:u().func,onError:u().func,style:u().object},D.defaultProps={accepts:null,className:void 0,clickable:!0,dragActiveClassName:void 0,inputProps:{},multiple:!0,maxFiles:1/0,maxFileSize:1/0,minFileSize:0,name:"file",onChange:function(h){return console.log(h)},onDragEnter:void 0,onDragLeave:void 0,onError:function(h){return console.log("error code ".concat(h.code,": ").concat(h.message))}};const O=D})(),o})())})(wt);var hn=wt.exports;const ni=cn(hn);var st={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},dn=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Tt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,m=(i&3)<<4|a>>4;let _=(a&15)<<2|l>>6,d=l&63;c||(d=64,o||(_=64)),r.push(n[u],n[m],n[_],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vt(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dn(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||m==null)throw new fn;const _=i<<2|a>>4;if(r.push(_),l!==64){const d=a<<4&240|l>>2;if(r.push(d),m!==64){const g=l<<6&192|m;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pn=function(t){const e=vt(t);return Tt.encodeByteArray(e,!0)},me=function(t){return pn(t).replace(/\./g,"")},mn=function(t){try{return Tt.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=()=>_n().__FIREBASE_DEFAULTS__,bn=()=>{if(typeof process>"u"||typeof st>"u")return;const t=st.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yn=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&mn(t[1]);return e&&JSON.parse(e)},Rt=()=>{try{return gn()||bn()||yn()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},En=t=>{var e,n;return(n=(e=Rt())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},wn=t=>{const e=En(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},It=()=>{var t;return(t=Rt())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[me(JSON.stringify(n)),me(JSON.stringify(o)),""].join(".")}function Rn(){try{return typeof indexedDB=="object"}catch{return!1}}function In(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn="FirebaseError";class ne extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Sn,Object.setPrototypeOf(this,ne.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,St.prototype.create)}}class St{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Dn(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ne(s,a,r)}}function Dn(t,e){return t.replace(An,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const An=/\{\$([^}]+)}/g;function Be(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(it(i)&&it(o)){if(!Be(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function it(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(t){return t&&t._delegate?t._delegate:t}class oe{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new vn;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kn(e))try{this.getOrInitializeService({instanceIdentifier:q})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=q){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=q){return this.instances.has(e)}getOptions(e=q){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:On(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=q){return this.component?this.component.multipleInstances?e:q:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function On(t){return t===q?void 0:t}function kn(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Cn(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var v;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(v||(v={}));const Pn={debug:v.DEBUG,verbose:v.VERBOSE,info:v.INFO,warn:v.WARN,error:v.ERROR,silent:v.SILENT},Un=v.INFO,Bn={[v.DEBUG]:"log",[v.VERBOSE]:"log",[v.INFO]:"info",[v.WARN]:"warn",[v.ERROR]:"error"},xn=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Bn[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ln{constructor(e){this.name=e,this._logLevel=Un,this._logHandler=xn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in v))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Pn[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,v.DEBUG,...e),this._logHandler(this,v.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,v.VERBOSE,...e),this._logHandler(this,v.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,v.INFO,...e),this._logHandler(this,v.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,v.WARN,...e),this._logHandler(this,v.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,v.ERROR,...e),this._logHandler(this,v.ERROR,...e)}}const Mn=(t,e)=>e.some(n=>t instanceof n);let ot,at;function Fn(){return ot||(ot=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $n(){return at||(at=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dt=new WeakMap,xe=new WeakMap,At=new WeakMap,Se=new WeakMap,je=new WeakMap;function Hn(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(j(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Dt.set(n,t)}).catch(()=>{}),je.set(e,t),e}function jn(t){if(xe.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});xe.set(t,e)}let Le={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xe.get(t);if(e==="objectStoreNames")return t.objectStoreNames||At.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return j(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zn(t){Le=t(Le)}function Vn(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(De(this),e,...n);return At.set(r,e.sort?e.sort():[e]),j(r)}:$n().includes(t)?function(...e){return t.apply(De(this),e),j(Dt.get(this))}:function(...e){return j(t.apply(De(this),e))}}function qn(t){return typeof t=="function"?Vn(t):(t instanceof IDBTransaction&&jn(t),Mn(t,Fn())?new Proxy(t,Le):t)}function j(t){if(t instanceof IDBRequest)return Hn(t);if(Se.has(t))return Se.get(t);const e=qn(t);return e!==t&&(Se.set(t,e),je.set(e,t)),e}const De=t=>je.get(t);function Wn(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=j(o);return r&&o.addEventListener("upgradeneeded",c=>{r(j(o.result),c.oldVersion,c.newVersion,j(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Gn=["get","getKey","getAll","getAllKeys","count"],Xn=["put","add","delete","clear"],Ae=new Map;function ct(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ae.get(e))return Ae.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Xn.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Gn.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Ae.set(e,i),i}zn(t=>({...t,get:(e,n,r)=>ct(e,n)||t.get(e,n,r),has:(e,n)=>!!ct(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Yn(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Yn(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Me="@firebase/app",lt="0.9.27";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G=new Ln("@firebase/app"),Jn="@firebase/app-compat",Zn="@firebase/analytics-compat",Qn="@firebase/analytics",er="@firebase/app-check-compat",tr="@firebase/app-check",nr="@firebase/auth",rr="@firebase/auth-compat",sr="@firebase/database",ir="@firebase/database-compat",or="@firebase/functions",ar="@firebase/functions-compat",cr="@firebase/installations",lr="@firebase/installations-compat",ur="@firebase/messaging",hr="@firebase/messaging-compat",dr="@firebase/performance",fr="@firebase/performance-compat",pr="@firebase/remote-config",mr="@firebase/remote-config-compat",_r="@firebase/storage",gr="@firebase/storage-compat",br="@firebase/firestore",yr="@firebase/firestore-compat",Er="firebase",wr="10.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe="[DEFAULT]",vr={[Me]:"fire-core",[Jn]:"fire-core-compat",[Qn]:"fire-analytics",[Zn]:"fire-analytics-compat",[tr]:"fire-app-check",[er]:"fire-app-check-compat",[nr]:"fire-auth",[rr]:"fire-auth-compat",[sr]:"fire-rtdb",[ir]:"fire-rtdb-compat",[or]:"fire-fn",[ar]:"fire-fn-compat",[cr]:"fire-iid",[lr]:"fire-iid-compat",[ur]:"fire-fcm",[hr]:"fire-fcm-compat",[dr]:"fire-perf",[fr]:"fire-perf-compat",[pr]:"fire-rc",[mr]:"fire-rc-compat",[_r]:"fire-gcs",[gr]:"fire-gcs-compat",[br]:"fire-fst",[yr]:"fire-fst-compat","fire-js":"fire-js",[Er]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e=new Map,$e=new Map;function Tr(t,e){try{t.container.addComponent(e)}catch(n){G.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ge(t){const e=t.name;if($e.has(e))return G.debug(`There were multiple attempts to register component ${e}.`),!1;$e.set(e,t);for(const n of _e.values())Tr(n,t);return!0}function Rr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},z=new St("app","Firebase",Ir);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new oe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw z.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=wr;function Ct(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Fe,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw z.create("bad-app-name",{appName:String(s)});if(n||(n=It()),!n)throw z.create("no-options");const i=_e.get(s);if(i){if(Be(n,i.options)&&Be(r,i.config))return i;throw z.create("duplicate-app",{appName:s})}const o=new Nn(s);for(const c of $e.values())o.addComponent(c);const a=new Sr(n,r,o);return _e.set(s,a),a}function Ar(t=Fe){const e=_e.get(t);if(!e&&t===Fe&&It())return Ct();if(!e)throw z.create("no-app",{appName:t});return e}function te(t,e,n){var r;let s=(r=vr[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),G.warn(a.join(" "));return}ge(new oe(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr="firebase-heartbeat-database",Or=1,ae="firebase-heartbeat-store";let Ce=null;function Ot(){return Ce||(Ce=Wn(Cr,Or,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ae)}catch(n){console.warn(n)}}}}).catch(t=>{throw z.create("idb-open",{originalErrorMessage:t.message})})),Ce}async function kr(t){try{const n=(await Ot()).transaction(ae),r=await n.objectStore(ae).get(kt(t));return await n.done,r}catch(e){if(e instanceof ne)G.warn(e.message);else{const n=z.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});G.warn(n.message)}}}async function ut(t,e){try{const r=(await Ot()).transaction(ae,"readwrite");await r.objectStore(ae).put(e,kt(t)),await r.done}catch(n){if(n instanceof ne)G.warn(n.message);else{const r=z.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});G.warn(r.message)}}}function kt(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=1024,Pr=30*24*60*60*1e3;class Ur{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xr(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ht();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Pr}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ht(),{heartbeatsToSend:r,unsentEntries:s}=Br(this._heartbeatsCache.heartbeats),i=me(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ht(){return new Date().toISOString().substring(0,10)}function Br(t,e=Nr){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),dt(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),dt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rn()?In().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await kr(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ut(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ut(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function dt(t){return me(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(t){ge(new oe("platform-logger",e=>new Kn(e),"PRIVATE")),ge(new oe("heartbeat",e=>new Ur(e),"PRIVATE")),te(Me,lt,t),te(Me,lt,"esm2017"),te("fire-js","")}Lr("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt="firebasestorage.googleapis.com",Pt="storageBucket",Mr=2*60*1e3,Fr=10*60*1e3,$r=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I extends ne{constructor(e,n,r=0){super(Oe(e),`Firebase Storage: ${n} (${Oe(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,I.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Oe(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var T;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(T||(T={}));function Oe(t){return"storage/"+t}function ze(){const t="An unknown error occurred, please check the error payload for server response.";return new I(T.UNKNOWN,t)}function Hr(t){return new I(T.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function jr(t){return new I(T.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function zr(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new I(T.UNAUTHENTICATED,t)}function Vr(){return new I(T.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function qr(t){return new I(T.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Ut(){return new I(T.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Bt(){return new I(T.CANCELED,"User canceled the upload/download.")}function Wr(t){return new I(T.INVALID_URL,"Invalid URL '"+t+"'.")}function Gr(t){return new I(T.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Xr(){return new I(T.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Pt+"' property when initializing the app?")}function xt(){return new I(T.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Kr(){return new I(T.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function Yr(){return new I(T.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Jr(t){return new I(T.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function He(t){return new I(T.INVALID_ARGUMENT,t)}function Lt(){return new I(T.APP_DELETED,"The Firebase app was deleted.")}function Zr(t){return new I(T.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ie(t,e){return new I(T.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function se(t){throw new I(T.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=x.makeFromUrl(e,n)}catch{return new x(e,"")}if(r.path==="")return r;throw Gr(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(O){O.path_=decodeURIComponent(O.path)}const u="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",d=new RegExp(`^https?://${m}/${u}/b/${s}/o${_}`,"i"),g={bucket:1,path:3},C=n===Nt?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",N=new RegExp(`^https?://${C}/${s}/${w}`,"i"),D=[{regex:a,indices:c,postModify:i},{regex:d,indices:g,postModify:l},{regex:N,indices:{bucket:1,path:2},postModify:l}];for(let O=0;O<D.length;O++){const h=D[O],p=h.regex.exec(e);if(p){const f=p[h.indices.bucket];let y=p[h.indices.path];y||(y=""),r=new x(f,y),h.postModify(r);break}}if(r==null)throw Wr(e);return r}}class Qr{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...w){l||(l=!0,e.apply(null,w))}function m(w){s=setTimeout(()=>{s=null,t(d,c())},w)}function _(){i&&clearTimeout(i)}function d(w,...N){if(l){_();return}if(w){_(),u.call(null,w,...N);return}if(c()||o){_(),u.call(null,w,...N);return}r<64&&(r*=2);let D;a===1?(a=2,D=0):D=(r+Math.random())*1e3,m(D)}let g=!1;function C(w){g||(g=!0,_(),!l&&(s!==null?(w||(a=2),clearTimeout(s),m(0)):w||(a=1)))}return m(0),i=setTimeout(()=>{o=!0,C(!0)},n),C}function ts(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(t){return t!==void 0}function rs(t){return typeof t=="function"}function ss(t){return typeof t=="object"&&!Array.isArray(t)}function Ee(t){return typeof t=="string"||t instanceof String}function ft(t){return Ve()&&t instanceof Blob}function Ve(){return typeof Blob<"u"}function pt(t,e,n,r){if(r<e)throw He(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw He(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Mt(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(W||(W={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,n,r,s,i,o,a,c,l,u,m,_=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=m,this.retry=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,g)=>{this.resolve_=d,this.reject_=g,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new fe(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===W.NO_ERROR,c=i.getStatus();if(!a||Ft(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===W.ABORT;r(!1,new fe(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new fe(l,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());ns(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=ze();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Lt():Bt();o(c)}else{const c=Ut();o(c)}};this.canceled_?n(!1,new fe(!1,null,!0)):this.backoffId_=es(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ts(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class fe{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function os(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function as(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function cs(t,e){e&&(t["X-Firebase-GMPID"]=e)}function ls(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function us(t,e,n,r,s,i,o=!0){const a=Mt(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return cs(l,e),os(l,n),as(l,i),ls(l,r),new is(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function ds(...t){const e=hs();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Ve())return new Blob(t);throw new I(T.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function fs(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(t){if(typeof atob>"u")throw Jr("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ke{constructor(e,n){this.data=e,this.contentType=n||null}}function ms(t,e){switch(t){case M.RAW:return new ke($t(e));case M.BASE64:case M.BASE64URL:return new ke(Ht(t,e));case M.DATA_URL:return new ke(gs(e),bs(e))}throw ze()}function $t(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function _s(t){let e;try{e=decodeURIComponent(t)}catch{throw ie(M.DATA_URL,"Malformed data URL.")}return $t(e)}function Ht(t,e){switch(t){case M.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw ie(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case M.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw ie(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ps(e)}catch(s){throw s.message.includes("polyfill")?s:ie(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class jt{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ie(M.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=ys(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function gs(t){const e=new jt(t);return e.base64?Ht(M.BASE64,e.rest):_s(e.rest)}function bs(t){return new jt(t).contentType}function ys(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e,n){let r=0,s="";ft(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(ft(this.data_)){const r=this.data_,s=fs(r,e,n);return s===null?null:new H(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new H(r,!0)}}static getBlob(...e){if(Ve()){const n=e.map(r=>r instanceof H?r.data_:r);return new H(ds.apply(null,n))}else{const n=e.map(o=>Ee(o)?ms(M.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new H(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t){let e;try{e=JSON.parse(t)}catch{return null}return ss(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function ws(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Vt(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(t,e){return e}class k{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||vs}}let pe=null;function Ts(t){return!Ee(t)||t.length<2?t:Vt(t)}function qt(){if(pe)return pe;const t=[];t.push(new k("bucket")),t.push(new k("generation")),t.push(new k("metageneration")),t.push(new k("name","fullPath",!0));function e(i,o){return Ts(o)}const n=new k("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new k("size");return s.xform=r,t.push(s),t.push(new k("timeCreated")),t.push(new k("updated")),t.push(new k("md5Hash",null,!0)),t.push(new k("cacheControl",null,!0)),t.push(new k("contentDisposition",null,!0)),t.push(new k("contentEncoding",null,!0)),t.push(new k("contentLanguage",null,!0)),t.push(new k("contentType",null,!0)),t.push(new k("metadata","customMetadata",!0)),pe=t,pe}function Rs(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new x(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Is(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return Rs(r,t),r}function Wt(t,e,n){const r=zt(e);return r===null?null:Is(t,r,n)}function Ss(t,e,n,r){const s=zt(e);if(s===null||!Ee(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,m=t.fullPath,_="/b/"+o(u)+"/o/"+o(m),d=ce(_,n,r),g=Mt({alt:"media",token:l});return d+g})[0]}function Gt(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class re{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t){if(!t)throw ze()}function qe(t,e){function n(r,s){const i=Wt(t,s,e);return F(i!==null),i}return n}function Ds(t,e){function n(r,s){const i=Wt(t,s,e);return F(i!==null),Ss(i,s,t.host,t._protocol)}return n}function le(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=Vr():s=zr():n.getStatus()===402?s=jr(t.bucket):n.getStatus()===403?s=qr(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Xt(t){const e=le(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=Hr(t.path)),i.serverResponse=s.serverResponse,i}return n}function As(t,e,n){const r=e.fullServerUrl(),s=ce(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new re(s,i,qe(t,n),o);return a.errorHandler=Xt(e),a}function Cs(t,e,n){const r=e.fullServerUrl(),s=ce(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new re(s,i,Ds(t,n),o);return a.errorHandler=Xt(e),a}function Os(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Kt(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Os(null,e)),r}function ks(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let D="";for(let O=0;O<2;O++)D=D+Math.random().toString().slice(2);return D}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=Kt(e,r,s),u=Gt(l,n),m="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,_=`\r
--`+c+"--",d=H.getBlob(m,r,_);if(d===null)throw xt();const g={name:l.fullPath},C=ce(i,t.host,t._protocol),w="POST",N=t.maxUploadRetryTime,U=new re(C,w,qe(t,n),N);return U.urlParams=g,U.headers=o,U.body=d.uploadData(),U.errorHandler=le(e),U}class be{constructor(e,n,r,s){this.current=e,this.total=n,this.finalized=!!r,this.metadata=s||null}}function We(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{F(!1)}return F(!!n&&(e||["active"]).indexOf(n)!==-1),n}function Ns(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o=Kt(e,r,s),a={name:o.fullPath},c=ce(i,t.host,t._protocol),l="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},m=Gt(o,n),_=t.maxUploadRetryTime;function d(C){We(C);let w;try{w=C.getResponseHeader("X-Goog-Upload-URL")}catch{F(!1)}return F(Ee(w)),w}const g=new re(c,l,d,_);return g.urlParams=a,g.headers=u,g.body=m,g.errorHandler=le(e),g}function Ps(t,e,n,r){const s={"X-Goog-Upload-Command":"query"};function i(l){const u=We(l,["active","final"]);let m=null;try{m=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{F(!1)}m||F(!1);const _=Number(m);return F(!isNaN(_)),new be(_,r.size(),u==="final")}const o="POST",a=t.maxUploadRetryTime,c=new re(n,o,i,a);return c.headers=s,c.errorHandler=le(e),c}const mt=256*1024;function Us(t,e,n,r,s,i,o,a){const c=new be(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw Kr();const l=c.total-c.current;let u=l;s>0&&(u=Math.min(u,s));const m=c.current,_=m+u;let d="";u===0?d="finalize":l===u?d="upload, finalize":d="upload";const g={"X-Goog-Upload-Command":d,"X-Goog-Upload-Offset":`${c.current}`},C=r.slice(m,_);if(C===null)throw xt();function w(O,h){const p=We(O,["active","final"]),f=c.current+u,y=r.size();let E;return p==="final"?E=qe(e,i)(O,h):E=null,new be(f,y,p==="final",E)}const N="POST",U=e.maxUploadRetryTime,D=new re(n,N,w,U);return D.headers=g,D.body=C.uploadData(),D.progressCallback=a||null,D.errorHandler=le(t),D}const P={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Ne(t){switch(t){case"running":case"pausing":case"canceling":return P.RUNNING;case"paused":return P.PAUSED;case"success":return P.SUCCESS;case"canceled":return P.CANCELED;case"error":return P.ERROR;default:return P.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n,r){if(rs(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class xs{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=W.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=W.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=W.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw se("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw se("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw se("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw se("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw se("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Ls extends xs{initXhr(){this.xhr_.responseType="text"}}function ee(){return new Ls}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=qt(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(T.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(Ft(s.status,[]))if(i)s=Ut();else{this.sleepTime=Math.max(this.sleepTime*2,$r),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(T.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=Ns(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,ee,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const s=Ps(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,ee,n,r);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=mt*this._chunkMultiplier,n=new be(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=Us(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,ee,s,i,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){mt*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=As(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,ee,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=ks(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,ee,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Bt(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Ne(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,s){const i=new Bs(n||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Ne(this._state)){case P.SUCCESS:Q(this._resolve.bind(null,this.snapshot))();break;case P.CANCELED:case P.ERROR:const n=this._reject;Q(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Ne(this._state)){case P.RUNNING:case P.PAUSED:e.next&&Q(e.next.bind(e,this.snapshot))();break;case P.SUCCESS:e.complete&&Q(e.complete.bind(e))();break;case P.CANCELED:case P.ERROR:e.error&&Q(e.error.bind(e,this._error))();break;default:e.error&&Q(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,n){this._service=e,n instanceof x?this._location=n:this._location=x.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new X(e,n)}get root(){const e=new x(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Vt(this._location.path)}get storage(){return this._service}get parent(){const e=Es(this._location.path);if(e===null)return null;const n=new x(this._location.bucket,e);return new X(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Zr(e)}}function Fs(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new Ms(t,new H(e),n)}function $s(t){t._throwIfRoot("getDownloadURL");const e=Cs(t.storage,t._location,qt());return t.storage.makeRequestWithTokens(e,ee).then(n=>{if(n===null)throw Yr();return n})}function Hs(t,e){const n=ws(t._location.path,e),r=new x(t._location.bucket,n);return new X(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(t){return/^[A-Za-z]+:\/\//.test(t)}function zs(t,e){return new X(t,e)}function Yt(t,e){if(t instanceof Ge){const n=t;if(n._bucket==null)throw Xr();const r=new X(n,n._bucket);return e!=null?Yt(r,e):r}else return e!==void 0?Hs(t,e):t}function Vs(t,e){if(e&&js(e)){if(t instanceof Ge)return zs(t,e);throw He("To use ref(service, url), the first argument must be a Storage instance.")}else return Yt(t,e)}function _t(t,e){const n=e==null?void 0:e[Pt];return n==null?null:x.makeFromBucketSpec(n,t)}function qs(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Tn(s,t.app.options.projectId))}class Ge{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Nt,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Mr,this._maxUploadRetryTime=Fr,this._requests=new Set,s!=null?this._bucket=x.makeFromBucketSpec(s,this._host):this._bucket=_t(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=x.makeFromBucketSpec(this._url,e):this._bucket=_t(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){pt("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){pt("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new X(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new Qr(Lt());{const o=us(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const gt="@firebase/storage",bt="0.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="storage";function ri(t,e,n){return t=ye(t),Fs(t,e,n)}function si(t){return t=ye(t),$s(t)}function ii(t,e){return t=ye(t),Vs(t,e)}function Ws(t=Ar(),e){t=ye(t);const r=Rr(t,Jt).getImmediate({identifier:e}),s=wn("storage");return s&&Gs(r,...s),r}function Gs(t,e,n,r={}){qs(t,e,n,r)}function Xs(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Ge(n,r,s,e,Dr)}function Ks(){ge(new oe(Jt,Xs,"PUBLIC").setMultipleInstances(!0)),te(gt,bt,""),te(gt,bt,"esm2017")}Ks();var Ys="firebase",Js="10.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */te(Ys,Js,"app");const Zs=Ct({apiKey:"AIzaSyAzY5EG5wXkYtU5Dw2wnWKpKSd68Ne5mL8",authDomain:"blogs-790f3.firebaseapp.com",projectId:"blogs-790f3",storageBucket:"blogs-790f3.appspot.com",messagingSenderId:"981504677024",appId:"1:981504677024:web:8ee2172121d990b14225c5"}),oi=Ws(Zs);export{ni as F,ti as P,si as g,ii as r,oi as s,ri as u};
