import React, { useState,useEffect } from 'react';
import style from '@/components/common/button/button5.module.css';

export default function Button5({blog_sid}) {
  const [isAddedToFavorites, setIsAddedToFavorites] = useState(false)
  const [memberData, setMemberData] = useState([]);

  useEffect(() => {
    // 從本地儲存空間獲取會員資料
    const storedMemberData = localStorage.getItem('auth')

    if (storedMemberData) {
      const parsedMemberData = JSON.parse(storedMemberData)
      setMemberData(parsedMemberData)
    }
  }, [])

  const user = memberData.member_id

  useEffect(() => {
    // 頁面載入後，設置追蹤狀態
    const storedlLikeStatus = localStorage.getItem(`like_${blog_sid}`);
    if (storedlLikeStatus) {
      setIsAddedToFavorites(JSON.parse(storedlLikeStatus));
    }
  }, [blog_sid])

  const handleButtonClick2 = () => {
    const requestData = { blog_sid: blog_sid, user: user };

    if (isAddedToFavorites) {
      fetch(`http://localhost:3055/blog/deletelike/${blog_sid}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      })
        .then((response) => response.json())
        .then((data) => {
          setIsAddedToFavorites(false);
          // 刪除追蹤後，同時也刪除本地儲存中的狀態
          localStorage.removeItem(`follow_${blog_sid}`)
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      fetch(`http://localhost:3055/blog/like/${blog_sid}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      })
        .then((response) => response.json())
        .then((data) => {
          setIsAddedToFavorites(true)
          // 追蹤後，同時保存狀態到本地儲存
          localStorage.setItem(`like_${blog_sid}`, JSON.stringify(true))
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    }
  }

  return (
    <>
      <button 
      className={`${style.chenbutton3}`} 
      onClick={handleButtonClick2}>
        {isAddedToFavorites ? '取 消 最 愛' : '加 到 最 愛'}
      </button>
    </>
  )
}