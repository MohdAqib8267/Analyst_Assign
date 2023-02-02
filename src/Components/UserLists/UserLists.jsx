import "./UserLists.css";
import UserInfo from "../UserInfo/UserInfo";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const UserLists = () => {
  const [data, setData] = useState([]);
  const [slides, setSlides] = useState([]);

  const getData = async () => {
    const responce = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await responce.json();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   if (data.length === 0) return;
  //   const rows = [];
  //   for (let i = 0; i < data.length; i += 3) {
  //     rows.push(data.slice(i, i + 3));
  //   }
  //   setSlides(rows);
  // }, [data]);

  return (
    <div className="UserLists">
      {data.map((data, key) => {
        return (
          <div className="row" key={key}>
            <UserInfo data={data} />
          </div>
        );
      })}
    </div>
  );
};

export default UserLists;
