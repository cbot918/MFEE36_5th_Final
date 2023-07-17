import React from 'react'
import cart from "@/assets/Nav_Image/cart.svg"
import book from "@/assets/Nav_Image/book.svg"
import home from "@/assets/Nav_Image/home.svg"
import member from "@/assets/Nav_Image/member.svg"
import pen from "@/assets/Nav_Image/pen.svg"
import styles from "@/components/common/navbar/UNavbar.module.css"
import Image from 'next/image'
import Link from 'next/link'

export default function UnderNavbar() {
  const icon = [home,cart,book,pen,member]
  return (
    <div className={styles.totaldiv}>
      <div className={styles.containdiv}>
          <Link href={"/"} className={styles.rowdiv}>
            <div> <Image src={home} width={30} height={25} alt='icon'/></div>
            <p>首頁</p>
          </Link>
          <Link href={"/"} className={styles.rowdiv}>
            <div><Image src={cart} width={30} height={25} alt='icon'/></div>
            <p>購物車</p>
          </Link>
          <div  className={styles.bookcontain}>
            <Link href={"/"} className={styles.bookdiv}>
              <div><Image src={book} width={30} height={25} alt='icon'/></div>
              <p>商城</p>
            </Link>
          </div>
          <Link href={"/"} className={styles.rowdiv}>
            <div><Image src={pen} width={30} height={25} alt='icon'/></div>
            <p>部落格</p>
            </Link>
          <Link href={"/"} className={styles.rowdiv}>
            <div><Image src={member} width={30} height={25} alt='icon'/></div>
            <p>會員</p>
            </Link>
      </div>
    </div>
  )
}
