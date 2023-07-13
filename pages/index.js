'use client'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import BigCard from '@/components/common/inedx-card/big-card'
import ThinCard from '@/components/common/inedx-card/thin-card'
import ThinCardTilt from '@/components/common/inedx-card/thin-card-tilt'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import Link from 'next/link'
import ReactPlayer from 'react-player/lazy'
import { useEffect, useState } from 'react'
import Swiper from 'swiper'
import { FreeMode, Pagination } from 'swiper/modules'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [myVideo, setMyVideo] = useState('')
  useEffect(() => {
    setMyVideo(
      <ReactPlayer
        playing={true}
        volume={0}
        width="100%"
        height="100%"
        url="/used-img/pexels-danik-prihodko-7430096 (1080p).mp4"
        loop={true}
      ></ReactPlayer>
    )
  }, [])
  return (
    <>
      <Head>
        <title>Book書易</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="color-bg-7">
        <Navbar />
        {/* section1 */}
        <div className="container-fluid index-book-section">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>

          {/* <div className="index_index_hidden d-flex align-items-end pt-5 pb-4 mt-4 ">
            <BigCard />
            <ThinCard />
            <BigCard />
            <ThinCard />
            <BigCard />
            <ThinCard />
            <BigCard />
            <ThinCardTilt />
            <BigCard />
            <ThinCard />
            <BigCard />
            <ThinCard />
            <BigCard />
            <ThinCard />
            <BigCard />
            <ThinCardTilt />
          </div>
          <div className="index_index_hidden d-flex align-items-end pt-5 pb-4 mt-4">
            <BigCard />
            <ThinCard />
            <BigCard />
            <ThinCard />
            <BigCard />
            <ThinCard />
            <BigCard />
            <ThinCardTilt />
            <BigCard />
            <ThinCard />
            <BigCard />
            <ThinCard />
            <BigCard />
            <ThinCardTilt />
            <BigCard />
            <ThinCard />
          </div> */}
        </div>
        {/* section1---end */}
        {/* section2 */}
        <div className="d-flex justify-content-center ">
          <div className="index_index_mask ">
            <Link href="/used-book">
              <div className="index_index_circle">
                <div className="index_index_circle_text">
                  讓塵封的 <br />
                  書再次被翻閱
                </div>
                <div className="index_index_circle_text-sm">
                  關於二手書的二三事
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/* section2---end */}
        {/* section3 */}
        <div className=" container-fluid py-5 ">
          <div className="textp-40px color-tx-1 fw-bold text-center">
            熱門書評
          </div>
        </div>
        {/* section3---end */}
        {/* section4 */}
        <div className=" container-fluid py-5 ">
          <div className="textp-40px color-tx-1 fw-bold text-center">
            熱門作品
          </div>
        </div>
        {/* section4---end */}
        {/* section5 */}
        <div className=" container-fluid py-5 d-flex  ">
          <div className="index-index-video-container">
            <div className="index-index-video">
              {myVideo}
              <div className="index-index-video-card"></div>
              <div className="index-index-video-text d-flex flex-column justify-content-center align-items-center">
                <div className=" textp-40px">關於我們</div>
                <div>Book書易-延續書的意義</div>
                <div>
                  在Book思易，我們相信每本書都有其獨特的價值，我們專注於連結熱愛閱讀的人們。透過我們的網路二手書店平台，您可以輕鬆買賣書籍，更重要的是，我們提供交換服務，讓書本在閱讀愛好者之間流動。
                  我們的平台擁有多元的書籍種類，從文學到科學，從歷史到藝術，滿足您的閱讀喜好和求知慾望。無論您是尋找絕版書，尋覓舊時回憶，或者是與其他書迷分享閱讀的喜悅，Book思易與您攜手同行，延續書的意義。加入我們的書友社群，一同享受閱讀的奇妙旅程
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* section5---end */}

        <Footer />
      </div>
    </>
  )
}
