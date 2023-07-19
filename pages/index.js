/* eslint-disable jsx-a11y/no-static-element-interactions */
'use client'
import Head from 'next/head'
import BigCard from '@/components/common/inedx-card/big-card'
import ThinCard from '@/components/common/inedx-card/thin-card'
import ThinCardTilt from '@/components/common/inedx-card/thin-card-tilt'
import NavBar1 from '@/components/common/navbar/NavBar'
import UnderNavbar from '@/components/common/navbar/Under_navbar'
import Footer from '@/components/common/footer/footer'
import Link from 'next/link'
import ReactPlayer from 'react-player/lazy'
import { useEffect, useState, useRef } from 'react'
import BlogHome from '@/components/blog/blog-home'
import BookHome from '@/components/book-review/book-home'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

export default function Home() {
  const refscrollLeftTOP = useRef(null)
  const refscrollLeftDown = useRef(null)
  //處理影片部分
  const [myVideo, setMyVideo] = useState('')
  useEffect(() => {
    setMyVideo(
      <ReactPlayer
        playing={true}
        volume={0}
        width="100%"
        height="100%"
        url="/used-img/5th_viedo.mp4"
        loop={true}
      ></ReactPlayer>
    )
  }, [])
  //監聽視窗大小
  const [windowWidth, setWindowWidth] = useState(null)
  const [windowhight, setwindowhight] = useState(null)
  const [slidesPerView_n, setslidesPerView_n] = useState(3)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // 我們在客戶端，window 物件可用
      setWindowWidth(window.innerWidth)
      setwindowhight(window.innerHeight)

      // 添加視窗大小變化的事件監聽器，以更新視窗寬度
      const handleResize = () => {
        setWindowWidth(window.innerWidth)
        setwindowhight(window.innerHeight)
      }
      window.addEventListener('resize', handleResize)

      //swiper RWD 個數

      if (windowWidth < 885) {
        setslidesPerView_n(1)
      } else if (windowWidth < 1350) {
        setslidesPerView_n(2)
      } else {
        setslidesPerView_n(3)
      }

      return () => {
        // 在元件卸載時清除事件監聽器
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [windowWidth])
  console.log(slidesPerView_n)

  //書本拉bar
  //是否執行
  const [isDown1, setIsDown1] = useState(false)
  const [isDown2, setIsDown2] = useState(false)
  //起始位置
  const [startX1, setStartX1] = useState('')
  const [startX2, setStartX2] = useState('')
  //要拉的距離
  const [scrollLeft1, setScrollLeft1] = useState('')
  const [scrollLeft2, setScrollLeft2] = useState('')
  const MouseDown = (e) => {
    setIsDown1(true)

    setStartX1(e.pageX) // if the slider has the margin left then we should correct it
    setScrollLeft1(refscrollLeftTOP.current.scrollLeft)

    console.log(startX1)
    console.log(refscrollLeftTOP.current.scrollLeft)
  }
  const Mouseleave = () => {
    setIsDown1(false)
  }
  const MouseUp = () => {
    setIsDown1(false)
  }
  const MouseMove = (e) => {
    if (!isDown1) return
    const walk = (e.pageX - startX1) * 2
    refscrollLeftTOP.current.scrollLeft = scrollLeft1 - walk
  }
  const MouseDown1 = (e) => {
    setIsDown2(true)

    setStartX2(e.pageX) // if the slider has the margin left then we should correct it

    setScrollLeft2(refscrollLeftDown.current.scrollLeft)

    console.log(startX2)
    console.log(refscrollLeftDown.current.scrollLeft)
  }
  const Mouseleave1 = () => {
    setIsDown2(false)
  }
  const MouseUp1 = () => {
    setIsDown2(false)
  }
  const MouseMove1 = (e) => {
    if (!isDown2) return
    const walk = (e.pageX - startX2) * 2

    refscrollLeftDown.current.scrollLeft = scrollLeft2 - walk
  }

  return (
    <>
      <Head>
        <title>Book書易</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="color-bg-7">
        <NavBar1 />
        {/* section1 */}
        <div className="container-fluid index-book-section mt-5 ">
          <div
            className="index_index_hidden d-flex align-items-end  pb-4 mt-4 "
            onMouseDown={(e) => MouseDown(e)}
            onMouseLeave={() => Mouseleave()}
            onMouseUp={() => MouseUp()}
            onMouseMove={(e) => MouseMove(e)}
            ref={refscrollLeftTOP}
          >
            {Array(20)
              .fill(1)
              .map((v, i) => {
                if (i % 5 === 0) {
                  return <ThinCardTilt key={i} />
                } else if (i % 3 === 0) {
                  return <ThinCard key={i} />
                } else {
                  return <BigCard key={i} />
                }
              })}
          </div>

          {windowWidth > 500 ? (
            <div
              className="index_index_hidden d-flex align-items-end  pb-4 mt-5 "
              onMouseDown={(e) => MouseDown1(e)}
              onMouseLeave={() => Mouseleave1()}
              onMouseUp={() => MouseUp1()}
              onMouseMove={(e) => MouseMove1(e)}
              ref={refscrollLeftDown}
            >
              {Array(20)
                .fill(1)
                .map((v, i) => {
                  if (i % 5 === 0) {
                    return <ThinCardTilt key={i} />
                  } else if (i % 3 === 0) {
                    return <ThinCard key={i} />
                  } else {
                    return <BigCard key={i} />
                  }
                })}
            </div>
          ) : (
            ''
          )}
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
        <div className=" container-fluid py-4 color-bg-6 ">
          <div className="textp-40px color-tx-1 fw-bold text-center my-5">
            熱門書評
            <div className="my-5">
              <Swiper
                slidesPerView={slidesPerView_n}
                spaceBetween={30}
                // pagination={{
                //   clickable: true,
                // }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <BookHome />
                </SwiperSlide>
                <SwiperSlide>
                  <BookHome />
                </SwiperSlide>
                <SwiperSlide>
                  <BookHome />
                </SwiperSlide>
                <SwiperSlide>
                  <BookHome />
                </SwiperSlide>
                <SwiperSlide>
                  <BookHome />
                </SwiperSlide>
                <SwiperSlide>
                  <BookHome />
                </SwiperSlide>
                <SwiperSlide>
                  <BookHome />
                </SwiperSlide>
                <SwiperSlide>
                  <BookHome />
                </SwiperSlide>
                <SwiperSlide>
                  <BookHome />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        {/* section3---end */}
        {/* section4 */}
        <div className=" container-fluid py-5 ">
          <div className="textp-40px color-tx-1 fw-bold text-center mb-5">
            熱門作品
          </div>
          <div className="pb-5">
            <Swiper
              slidesPerView={slidesPerView_n}
              spaceBetween={30}
              // pagination={{
              //   clickable: true,
              // }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <BlogHome />
              </SwiperSlide>
              <SwiperSlide>
                <BlogHome />
              </SwiperSlide>
              <SwiperSlide>
                <BlogHome />
              </SwiperSlide>
              <SwiperSlide>
                <BlogHome />
              </SwiperSlide>
              <SwiperSlide>
                <BlogHome />
              </SwiperSlide>
              <SwiperSlide>
                <BlogHome />
              </SwiperSlide>
              <SwiperSlide>
                <BlogHome />
              </SwiperSlide>
              <SwiperSlide>
                <BlogHome />
              </SwiperSlide>
              <SwiperSlide>
                <BlogHome />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        {/* section4---end */}
        {/* section5 */}
        <div
          className=" textp-40px color-tx-1 fw-bold text-center index-index-aboutUs "
          id="aboutUs"
        >
          關於我們
        </div>
        <div className=" container-fluid py-5 d-flex  ">
          <div className="index-index-video-container">
            <div className="index-index-video">
              {myVideo}
              <div className="index-index-video-card">
                <div className=" d-flex flex-column justify-content-center align-items-center px-3 ">
                  <div className=" textp-28px my-2 fw-bold color-tx-7 index-index-video-text-md letter-spacing ">
                    Book書易-延續書的意義
                  </div>
                  <div className=" textp-20px pt-3 index-index-video-text-sm color-tx-7 letter-spacing  ">
                    在Book書易，我們相信每本書都有其獨特的價值，我們專注於連結熱愛閱讀的人們。透過我們的網路二手書店平台，您可以輕鬆買賣書籍，更重要的是，我們提供交換服務，讓書本在閱讀愛好者之間流動。
                    我們的平台擁有多元的書籍種類，從文學到科學，從歷史到藝術，滿足您的閱讀喜好和求知慾望。無論您是尋找絕版書，尋覓舊時回憶，或者是與其他書迷分享閱讀的喜悅，Book書易與您攜手同行，延續書的意義。加入我們的書友社群，一同享受閱讀的奇妙旅程。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* section5---end */}
        {/*補高度*/}
        <div className="used_index_botton"></div>
        <div className="used_rwd_botton"></div>
        <UnderNavbar />
        {windowWidth > 400 ? <Footer /> : ''}
        {/* <Footer /> */}
      </div>
    </>
  )
}
