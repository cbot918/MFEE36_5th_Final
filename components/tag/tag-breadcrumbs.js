import style from '@/components/blog/bread-crumbs.module.css'
import Link from 'next/link'
import TagContent from './tag-content'

export default function TagBreadCrumbs() {
  return (
    <>
      <div className={`col-xl-7 px-xl-5 d-flex flex-column`}>
        <div className="row">
          <div
            className={`${style.chenbreadhole} ${style.bread} text-body-tertiary pb-5`}
          >
            <Link
              href="#"
              className={`text-body-tertiary text-decoration-none ${style.chenbreadhole}`}
            >
              首頁
            </Link>
            &#062;
            <Link
              href="#"
              className={`text-body-tertiary text-decoration-none ${style.chenbreadhole}`}
            >
              部落格
            </Link>
            &#062;
            <Link
              href="#"
              className={`text-body-tertiary text-decoration-none ${style.chenbreadhole}`}
            >
              熱門
            </Link>
          </div>
          <div className='row'>
                <div className={`d-flex justify-content-around pt-5 pb-5`}>
                    <span style={{cursor:"pointer"}} className='fs-4'>#愛情</span>
                    
                    <span style={{cursor:"pointer"}} className='fs-4'>#旅遊</span>                 
                </div>
            </div>
            <div className='row'>
                <div className={`d-flex justify-content-around pt-5 pb-5`}>
                    <span style={{cursor:"pointer"}} className='fs-4'>#生活</span>
                    
                    <span style={{cursor:"pointer"}} className='fs-4'>#工作</span>                 
                </div>
            </div>
            <div className='row'>
                <div className={`d-flex justify-content-around pt-5 pb-5`}>
                    <span style={{cursor:"pointer"}} className='fs-4'>#教育</span>
                    
                    <span style={{cursor:"pointer"}} className='fs-4'>#書</span>                 
                </div>
            </div>     
        </div>
      </div>
    </>
  )
}
