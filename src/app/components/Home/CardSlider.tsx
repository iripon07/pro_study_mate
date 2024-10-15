// components/CardSlider.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const CardSlider = () => {
  const cards = [
    { id: 1, title: "Card 1", content: "This is card 1" },
    { id: 2, title: "Card 2", content: "This is card 2" },
    { id: 3, title: "Card 3", content: "This is card 3" },
    { id: 4, title: "Card 4", content: "This is card 4" },
    { id: 5, title: "Card 5", content: "This is card 5" },
    { id: 6, title: "Card 6", content: "This is card 6" },
    // Add more cards as necessary
  ];

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        slidesPerView={4} // Always show 4 cards on desktop
        loop={true} // Enable infinite loop
        autoplay={{
          delay: 2500, // Delay in ms between auto slides
          disableOnInteraction: false, // Continue autoplay even after user interaction
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="rounded-md bg-white p-4 shadow-md">
              <h2 className="font-bold">{card.title}</h2>
              <p>{card.content}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
