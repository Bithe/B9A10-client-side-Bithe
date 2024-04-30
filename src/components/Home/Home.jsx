import { useContext, useEffect, useState } from "react";
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
import CraftCard from "../CraftCard/CraftCard";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const user = useContext(AuthContext);
  console.log(user);

  // const crafts = useLoaderData();
  const [crafts, setCrafts] = useState([]);
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    // Fetch crafts data
    axios
      .get("http://localhost:5000/crafts")
      .then((response) => {
        setCrafts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching crafts:", error);
      });

    // Fetch subcategory data
    axios
      .get("http://localhost:5000/subcategory")
      .then((response) => {
        setSubcategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching subcategories:", error);
      });
  }, []);

  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      {/* BANNER & CRAFT 6 CARDS */}
      <div className="container p-6 mx-auto space-y-6 sm:space-y-12  ">
        <Helmet>
          <title>ArtScape | Home</title>
        </Helmet>
        {/* BANNER */}
        <div className=" flex bg-white rounded-3xl  ">
          <div className="container slider slider-body ">
            <h1 className="heading text-black">Welcome to ArtScape Home</h1>
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
          {crafts.slice(0, 6).map((craft) => (
            <CraftCard key={craft._id} craft={craft}></CraftCard>
          ))}
        </div>
      </div>
      {/*  */}

      {/* SUBCATEGORY */}
        <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
          <div className="container p-6 mx-auto space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold">
                Our Painting and Drawing Category
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
              {subcategories.map((subcategory) => (
                <Link to={`/subcategory/${subcategory.subcategory_Name}`}
                  key={subcategory._id}
                  className="flex flex-col dark:bg-gray-50"
                >
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  >
                    <img
                      alt=""
                      className="object-cover w-full h-52 dark:bg-gray-500"
                      src={subcategory.photo}
                    />
                  </a>
                  <div className="flex flex-col flex-1 p-6">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      aria-label="Te nulla oportere reprimique his dolorum"
                    ></a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="text-xl font-bold tracking-wider uppercase hover:underline dark:text-violet-600"
                    >
                      {subcategory.subcategory_Name}
                    </a>
                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                      {subcategory.description}
                    </h3>
                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                      <span>June 1, 2020</span>
                      <span>2.1K views</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      {/* ANOTHER TWO SECTION */}
      <section className="bg-blue-600 container p-6 mx-auto space-y-6 sm:space-y-12 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-white font-bold text-5xl leading-tight mb-6">
                Each item in our shop is meticulously crafted by skilled
                artisans, ensuring top-notch quality and attention to detail.
              </h1>
              <p className="text-white text-xl mb-8">
                With our expedited shipping options, your order will be
                delivered to your doorstep in no time, so you can start enjoying
                your new treasures right away.
              </p>
              <a
                href="#"
                className="px-6 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-700 transition duration-200"
              >
                Shop now
              </a>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://i.ibb.co/m6wRfxB/shop.jpg"
                alt="Coffee beans"
                className="w-full rounded-lg shadow-lg"
              ></img>
            </div>
          </div>
        </div>
      </section>
      {/*  */}

      {/*  */}
      <section className="my-8 container p-6 mx-auto space-y-6 sm:space-y-12 ">
        <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12 ">
          <h1 className="text-4xl font-semibold leading-none text-center">
            What our customers are saying about us
          </h1>
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
          <div className="flex flex-col items-center mx-12 lg:mx-0">
            <div className="relative text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute top-0 left-0 w-8 h-8 dark:text-gray-300"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              <p className="px-6 py-1 text-lg italic">
                The landscape paintings featuring mountain views are captivating
                and evoke a sense of tranquility. The use of colors and textures
                brings the majestic beauty of mountains to life.
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-300"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </div>
            <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-600"></span>
            <p>Siri Kasper</p>
          </div>
          <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
            <div className="relative text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="absolute top-0 left-0 w-8 h-8 dark:text-gray-300"
              >
                <path
                  fill="currentColor"
                  d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"
                ></path>
                <path
                  fill="currentColor"
                  d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
                ></path>
              </svg>
              <p className="px-6 py-1 text-lg italic">
                The ink outline portraits showcase a bold and dynamic style,
                emphasizing the contours and features of the subjects with
                striking simplicity.
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-300"
              >
                <path
                  fill="currentColor"
                  d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
                ></path>
                <path
                  fill="currentColor"
                  d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
                ></path>
              </svg>
            </div>
            <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-600"></span>
            <p>Leroy Jenkins</p>
          </div>
        </div>
      </section>
      {/*  */}
    </section>
  );
};

export default Home;
