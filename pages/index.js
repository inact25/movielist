import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainLayout from "../Layouts/mainLayout";
import {Card, Col, Grid, Row} from "antd";
import MovieCard from "../components/movieCard";
import {Swiper, SwiperSlide} from "swiper/react";


export default function Home() {
    const {useBreakpoint} = Grid
    const {md, lg, xs} = useBreakpoint()
    return (
        <div>
            <MainLayout>
                <div className="title-bar"
                     style={{fontSize: md ? 24 : 18, fontWeight: 600, textAlign: "start", paddingBottom: "1rem"}}>
                    <span>Discovers</span>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 1.25,
                            spaceBetween: 50,
                        },
                        1440: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        1920: {
                            slidesPerView: 1.5,
                            spaceBetween: 20,
                        },
                        2560: {
                            slidesPerView: 6,
                            spaceBetween: 20,
                        },
                    }}
                    className="mySwiper"
                >
                    {[...new Array(12)].map((item, index) =>
                        <SwiperSlide key={index}>
                            <MovieCard cardHeight={500}/>
                        </SwiperSlide>
                    )}
                </Swiper>
                <div className="title-bar"
                     style={{
                         fontSize: md ? 24 : 18,
                         fontWeight: 600,
                         textAlign: "start",
                         paddingBottom: "1rem",
                         paddingTop: "2rem"
                     }}>
                    <span>Latest Film</span>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1440: {
                            slidesPerView: 2.5,
                            spaceBetween: 20,
                        },
                        2560: {
                            slidesPerView: 6,
                            spaceBetween: 20,
                        },
                    }}
                    className="mySwiper"
                >
                    {[...new Array(12)].map((item, index) =>
                        <SwiperSlide key={index}>
                            <MovieCard cardHeight={350}/>
                        </SwiperSlide>
                    )}
                </Swiper>

                <div className="title-bar"
                     style={{
                         fontSize: md ? 24 : 18,
                         fontWeight: 600,
                         textAlign: "start",
                         paddingBottom: "1rem",
                         paddingTop: "2rem"
                     }}>
                    <span>All Film</span>
                </div>
                <Row gutter={[24, 24]}>
                    {[...new Array(12)].map((item, index) =>
                        <Col xxl={4} xl={8} xs={24} md={12} key={index}>
                            <MovieCard cardHeight={md ? 350 : 300}/>
                        </Col>
                    )}
                </Row>
            </MainLayout>
        </div>
    )
}
