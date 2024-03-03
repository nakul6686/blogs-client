import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
const Banner = React.lazy(()=>import('../../components/banner/Banner'))
const TopStories = React.lazy(()=> import('../../components/top-stories/Top-stories'));
const CategoryList = React.lazy(()=> import('../../components/categories/Category'))
function Home() {
  const [data, setData] = useState(null);
  const [allData, setAllData]= useState(null);
  useEffect(() => {
    getHomedata();
  }, []);
  function filterData(data) {
    const result = [];
    for (const category in data) {
        if (category !== "banner") {
            const items = data[category].slice(0, 2); // Get only two items from each category
            result.push(...items);
        }
    }
    setAllData(result)
}

  function getHomedata() {
    axiosInstance
      .get("/application/appData")
      .then((response) => {
        setData(response.data);
        filterData(response.data)
      })
      .catch((err) => console.log(err.response.data));
  }
  return (
    <div>
      {data && (
        <>
          <Banner bannerData={data.banner} />
          <TopStories topStories={allData} id="top-blogs"/>
          <CategoryList categoryData={data}/>
        </>
      )}
    </div>
  );
}

export default Home;
