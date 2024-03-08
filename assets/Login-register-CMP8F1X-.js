import{r as l,u as G,a as U,b as Y,j as e,L as z,B as S}from"./index-B8m1YsOm.js";import{F as s}from"./Form-30H8TVl8.js";import{F as T,P as J,r as O,s as $,u as A,g as M}from"./firebaseonfig-dM-wMRd5.js";import{a as P}from"./axiosInstance-tbaVc4i5.js";const F={userEmail:"",userPassword:"",userName:"",userNumber:"",userImage:null},L={email:"",password:""};function W(){const[g,p]=l.useState(!0),[I,x]=l.useState(!1),[E,b]=l.useState(!1),j=l.useRef(null),f=l.useRef(null),[i,N]=l.useState(L),[t,h]=l.useState(F),[c,y]=l.useState(-1),w=G(),{handleUser:C}=U(),k=Y(),[o,R]=l.useState({}),v=a=>{N({...i,[a.target.name]:a.target.value})},V=a=>{a.preventDefault(),a.currentTarget.checkValidity()===!1?(a.stopPropagation(),x(!0)):P.post("auth/user/login",{userEmail:i.email,userPassword:i.password}).then(n=>{C(n.data),localStorage.setItem("userData",JSON.stringify(n.data)),N(L),f.current.reset(),w("/blogs-client/"),x(!1)}).catch(n=>{var r,d;R({error:!0,message:(d=(r=n==null?void 0:n.response)==null?void 0:r.data)==null?void 0:d.message})})},m=a=>{h({...t,[a.target.name]:a.target.value})},D=a=>{const u=O($,`/Users/${a[0].name}`),n=A(u,a[0]);n.on("state_changed",r=>{const d=Math.round(r.bytesTransferred/r.totalBytes*100);y(d)},r=>console.log(r),()=>{M(n.snapshot.ref).then(r=>{h({...t,userImage:{type:a[0].type,size:a[0].size,name:a[0].name,url:r}}),y(-1),console.log(r)})})},q=(a,u)=>{console.log("error code "+a.code+": "+a.message)},B=async a=>{if(a.preventDefault(),a.currentTarget.checkValidity()===!1)a.stopPropagation(),b(!0);else{const n={userName:t.userName,userEmail:t.userEmail,userNumber:t.userNumber,userPassword:t.userPassword};t.userImage&&(n.userImage=t.userImage),P.post("auth/user/register",n).then(r=>{k("success","User has been successfully registered."),C(r.data),localStorage.setItem("userData",JSON.stringify(r.data)),h(F),b(!1),j.current.reset(),w("/blogs-client/")}).catch(r=>{console.log(r.response.data)})}};return e.jsx("div",{className:"Login-container conatainer d-flex align-items-center justify-content-center h-100 position-relative",children:e.jsxs("div",{className:"Login-wrapper w-50",children:[e.jsx("h1",{className:"text-center login-logo",children:"VBlogs"}),g?e.jsx("h2",{className:"text-center mb-4",children:"Sign in to your account"}):e.jsx("h2",{className:"text-center mb-4",children:"Set up your account"}),g?e.jsxs(s,{noValidate:!0,validated:I,onSubmit:V,ref:f,children:[e.jsxs(s.Group,{className:"mb-4",controlId:"user-email",children:[e.jsx(s.Label,{children:"Email address"}),e.jsx(s.Control,{type:"email",placeholder:"Enter Your Email",name:"email",required:!0,onChange:v,value:i.email}),e.jsx(s.Control.Feedback,{type:"invalid",children:"Please enter valid email."})]}),e.jsxs(s.Group,{className:"mb-4",controlId:"user-password",children:[e.jsxs(s.Label,{className:"d-flex justify-content-between",children:[e.jsx("span",{children:"Password"})," ",e.jsx("span",{children:e.jsx(z,{to:"#",children:"Forgot Password"})})]}),e.jsx(s.Control,{type:"password",placeholder:"Enter Your Password",required:!0,minLength:6,max:20,name:"password",onChange:v,value:i.password}),e.jsx(s.Control.Feedback,{type:"invalid",children:"Password should contain min 6 and max 20 Chars."})]}),(o==null?void 0:o.error)&&e.jsx("p",{className:"text-small text-danger mt-0 mb-0",children:o==null?void 0:o.message}),e.jsx(S,{className:"btn signin-btn",type:"submit",children:"Login"})]}):e.jsxs(s,{noValidate:!0,validated:E,onSubmit:B,ref:j,children:[e.jsxs(s.Group,{className:"mb-4",controlId:"user-name",children:[e.jsx(s.Label,{children:"Full Name"}),e.jsx(s.Control,{type:"text",placeholder:"Enter Your name",name:"userName",required:!0,value:t.userName,onChange:m,minLength:6,maxLength:20}),e.jsx(s.Control.Feedback,{type:"invalid",children:"Name should be min 6 chars. long."})]}),e.jsxs(s.Group,{className:"mb-4",controlId:"user-email",children:[e.jsx(s.Label,{children:"Email address"}),e.jsx(s.Control,{type:"email",placeholder:"Enter Your Email",name:"userEmail",required:!0,value:t.userEmail,onChange:m}),e.jsx(s.Control.Feedback,{type:"invalid",children:"Please enter valid email."})]}),e.jsxs(s.Group,{className:"mb-4",controlId:"user-email",children:[e.jsx(s.Label,{children:"Phone number"}),e.jsx(s.Control,{type:"number",placeholder:"Enter Your number",name:"userNumber",required:!0,value:t.userNumber,onChange:m,pattern:"[0-9]{1,10}"}),e.jsx(s.Control.Feedback,{type:"invalid",children:"Please enter valid number."})]}),e.jsxs(s.Group,{className:"mb-4",controlId:"user-password",children:[e.jsxs(s.Label,{className:"d-flex justify-content-between",children:[e.jsx("span",{children:"Password"})," "]}),e.jsx(s.Control,{type:"password",placeholder:"Enter Your Password",required:!0,minLength:6,max:20,name:"userPassword",value:t.userPassword,onChange:m}),e.jsx(s.Control.Feedback,{type:"invalid",children:"Password should contain min 6 and max 20 Chars."})]}),e.jsxs("div",{className:"files mb-3",children:[e.jsx(T,{className:"files-dropzone",onChange:D,onError:q,accepts:["image/png","image/jpeg"],multiple:!1,maxFileSize:1e7,minFileSize:0,clickable:!0,name:"userImage"}),c>=0&&c<101&&e.jsx(J,{className:"mt-3",now:c,label:`${c}%`})]}),e.jsx(S,{className:"btn signin-btn",type:"submit",children:"Register"})]}),g?e.jsxs("p",{className:"mt-5 d-flex justify-content-evenly",children:["Not a member?",e.jsx("span",{role:"button",className:"signin-up",onClick:()=>p(!1),children:"Sign up here."})]}):e.jsxs("p",{className:"mt-5 d-flex justify-content-evenly",children:["Already a member?",e.jsx("span",{role:"button",className:"signin-up",onClick:()=>p(!0),children:"Sign In"})]})]})})}export{W as default};