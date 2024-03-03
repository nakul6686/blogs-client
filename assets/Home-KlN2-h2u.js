import{R as s,_ as r,r as n,j as a}from"./index-D1fxyqd6.js";import{a as f}from"./axiosInstance-D6M-7RPN.js";const g=s.lazy(()=>r(()=>import("./Banner-HaZHGICD.js"),__vite__mapDeps([0,1,2,3]))),x=s.lazy(()=>r(()=>import("./Top-stories-CuX_3t_p.js"),__vite__mapDeps([4,1,2,5]))),E=s.lazy(()=>r(()=>import("./Category-CQ09PbJc.js"),__vite__mapDeps([6,1,2])));function j(){var i;const[e,_]=n.useState(null),[o,p]=n.useState(null);n.useEffect(()=>{d()},[]);function u(t){const c=[];for(const l in t)if(l!=="banner"){const m=t[l].slice(0,2);c.push(...m)}p(c)}function d(){f.get("/application/appData").then(t=>{_(t.data),u(t.data)}).catch(t=>console.log(t.response.data))}return a.jsx("div",{children:e&&a.jsxs(a.Fragment,{children:[((i=e.banner)==null?void 0:i.length)>0&&a.jsx(g,{bannerData:e.banner}),(o==null?void 0:o.length)>0&&a.jsx(x,{topStories:o,id:"top-blogs"}),a.jsx(E,{categoryData:e})]})})}export{j as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Banner-HaZHGICD.js","assets/index-D1fxyqd6.js","assets/index-CLEZIKVZ.css","assets/Banner-C8LvsSMj.css","assets/Top-stories-CuX_3t_p.js","assets/Top-stories-D6s_XAVK.css","assets/Category-CQ09PbJc.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
