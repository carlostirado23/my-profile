import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const ProjectGallery = () => {
    const projects = [
        {
            id: 1,
            image: "/src/assets/images/foto1.png",
        },
        {
            id: 2,
            image: "/src/assets/images/foto2.jpg",
        },
        {
            id: 3,
            image: "/src/assets/images/foto3.jpg",
        },
        {
            id: 4,
            image: "/src/assets/images/foto4.jpg",
        },
        {
            id: 5,
            image: "/src/assets/images/foto5.jpg",
           
        },
        {
            id: 6,
            image: "/src/assets/images/foto6.jpg",
            
        },
        {
            id: 7,
            image: "/src/assets/images/foto13.jpg",
            
        },
        {
            id: 8,
            image: "/src/assets/images/foto7.jpg",
            
        },
        {
            id: 9,
            image: "/src/assets/images/foto8.jpg",
            
        },
        {
            id: 10,
            image: "/src/assets/images/foto9.jpg",
            
        },
        {
            id: 11,
            image: "/src/assets/images/foto10.jpg",
            
        },
        {
            id: 12,
            image: "/src/assets/images/foto11.jpg",
            
        },
        {
            id: 13,
            image: "/src/assets/images/foto12.jpg",
            
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="px-4 mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl animate-fade-in">
                        Galería
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600 animate-slide-in">
                        Explora algunas de mis fotografias
                    </p>
                </div>

                <div className="relative">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView="auto"
                        coverflowEffect={{
                            rotate: 45,
                            stretch: 0,
                            depth: 120,
                            modifier: 1.5,
                            slideShadows: true,
                        }}
                        navigation={{
                            nextEl: ".swiper-button-next-custom",
                            prevEl: ".swiper-button-prev-custom",
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                            el: ".swiper-pagination-custom",
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        loop={true}
                        speed={800}
                        className="gallery-swiper">
                        {projects.map((project) => (
                            <SwiperSlide key={project.id} className="swiper-slide-custom">
                                <div className="w-80 h-96 project-card-3d group">
                                    <div className="flex overflow-hidden flex-col w-full h-full bg-white rounded-xl shadow-lg transition-all duration-300 transform project-content hover:scale-105">
                                        <div className="relative w-full h-full">
                                            <img
                                                src={project.image}
                                                alt={`Proyecto ${project.id}`}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    <div className="flex absolute left-4 top-1/2 z-10 justify-center items-center w-12 h-12 text-gray-600 bg-white rounded-full shadow-lg transition-all duration-200 -translate-y-1/2 cursor-pointer swiper-button-prev-custom hover:text-blue-600 hover:bg-blue-50">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15 18L9 12L15 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <div className="flex absolute right-4 top-1/2 z-10 justify-center items-center w-12 h-12 text-gray-600 bg-white rounded-full shadow-lg transition-all duration-200 -translate-y-1/2 cursor-pointer swiper-button-next-custom hover:text-blue-600 hover:bg-blue-50">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9 18L15 12L9 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    {/* Custom Pagination */}
                    <div className="flex justify-center mt-8 swiper-pagination-custom"></div>
                </div>
            </div>
        </section>
    );
};

export default ProjectGallery;
