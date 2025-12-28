/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // correct import
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import styles from "./youtube-vdos-style/youtube-vdos.module.css";

export default function CommentSlider() {
  const comments = [
    {
      name: "John Doe",
      text: "I had an amazing experience with this company. The team was professional, responsive, and delivered exactly what I needed. Highly recommended for anyone looking for top-quality service.",
    },
    {
      name: "Alice Smith",
      text: "Working with them was a delight! Every step of the project was smooth and transparent. They understood my requirements perfectly and exceeded my expectations.",
    },
    {
      name: "Bob Johnson",
      text: "Absolutely fantastic! The quality of work was outstanding and the communication was excellent throughout the project. I would definitely hire them again for future projects.",
    },
    {
      name: "Mary Williams",
      text: "I am extremely satisfied with the services. They went above and beyond to make sure everything was perfect. The attention to detail and dedication is unmatched.",
    },
    {
      name: "David Brown",
      text: "The team delivered an exceptional project on time. They were professional, skilled, and extremely helpful. I am very happy with the results and highly recommend them.",
    },
  ];

  return (
    <div className={styles.commentSliderContainer}>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        navigation={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: false,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        slidesPerGroup={1}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1, slidesPerGroup: 1 }, // mobile
          640: { slidesPerView: 2, slidesPerGroup: 1 }, // tablet
          1024: { slidesPerView: 3, slidesPerGroup: 1 }, // desktop
        }}
      >
        {comments.map((c, i) => (
          <SwiperSlide key={i}>
            <div className={styles.commentBox}>
              <p>"{c.text}"</p>
              <h5>- {c.name}</h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
