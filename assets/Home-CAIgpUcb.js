import{R as s,_ as r,r as n,j as a}from"./index-DDS4uE6D.js";import{a as f}from"./axiosInstance-tbaVc4i5.js";const g=s.lazy(()=>r(()=>import("./Banner-IGro17U9.js"),__vite__mapDeps([0,1,2,3]))),x=s.lazy(()=>r(()=>import("./Top-stories-C51LU-9U.js"),__vite__mapDeps([4,1,2,5]))),E=s.lazy(()=>r(()=>import("./Category-CzoN0l3X.js"),__vite__mapDeps([6,1,2])));function j(){var i;const[e,_]=n.useState(null),[o,u]=n.useState(null);n.useEffect(()=>{d()},[]);function p(t){const c=[];for(const l in t)if(l!=="banner"){const m=t[l].slice(0,2);c.push(...m)}u(c)}function d(){f.get("/application/appData").then(t=>{_(t.data),p(t.data)}).catch(t=>console.log(t))}return a.jsx("div",{children:e&&a.jsxs(a.Fragment,{children:[((i=e.banner)==null?void 0:i.length)>0&&a.jsx(g,{bannerData:e.banner}),(o==null?void 0:o.length)>0&&a.jsx(x,{topStories:o,id:"top-blogs"}),a.jsx(E,{categoryData:e})]})})}export{j as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Banner-IGro17U9.js","assets/index-DDS4uE6D.js","assets/index-CcROK8po.css","assets/Banner-UuBX1gm1.css","assets/Top-stories-C51LU-9U.js","assets/Top-stories-Dwj53-cv.css","assets/Category-CzoN0l3X.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
