import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
// import ResidentialCard from "../ResidentialCard/ResidentialCard";

// SWIPER FOR BANNER
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import slide_image_1 from "../../assets/image/slide_image_1.jpg";
import slide_image_2 from "../../assets/image/slide_image_2.jpg";
import slide_image_3 from "../../assets/image/slide_image_3.jpg";
import slide_image_4 from "../../assets/image/slide_image_4.jpg";
import slide_image_5 from "../../assets/image/slide_image_5.jpg";
import slide_image_6 from "../../assets/image/slide_image_6.jpg";
import "./swiperstyle.css";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import CraftCard from "../CraftCard/CraftCard";

const Home = () => {
  const user = useContext(AuthContext);
  console.log(user);

  const crafts = useLoaderData();


  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container p-6 mx-auto space-y-6 sm:space-y-12  ">
        <Helmet>
          <title>ArtScape | Home</title>
        </Helmet>
        {/* BANNER */}
        <div className=" flex bg-[#dddbf7] rounded-3xl  ">
          <div className="container slider slider-body ">
            <h1 className="heading">Welcome to ArtScape Home</h1>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="swiper_container"
            >
              <SwiperSlide>
                <img src={slide_image_1} alt="slide_image" />
              </SwiperSlide>

              <SwiperSlide>
                <img src={slide_image_2} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide_image_3} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide_image_4} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide_image_5} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide_image_6} alt="slide_image" />
              </SwiperSlide>

              <div className="slider-controler  gap-20 ">
                <div className="swiper-button-prev slider-arrow bg-[#3388b5]">
                  <ion-icon name="arrow-back-outline"></ion-icon>
                </div>

                <div className="swiper-button-next slider-arrow bg-[#3388b5]">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
        </div>

        {/*  */}

        {/* CARDS */}
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
          {crafts.map((craft) => (
            <CraftCard key={craft._id} craft={craft}
            ></CraftCard>
          ))}
        </div>
      
      </div>
    </section>
  );
};

export default Home;
