import style from '@/components/blog/bread-crumbs.module.css'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'



export default function BreadCrumbs() {
    return (
        <>
            <div>
                <div className={`${style.chenbreadhole} text-body-tertiary pb-5`}>
                    <Link href="#" className={`text-body-tertiary text-decoration-none ${style.chenbreadhole}`}>首頁</Link>&#062;
                    <Link href="#" className={`text-body-tertiary text-decoration-none ${style.chenbreadhole}`}>部落格</Link>&#062;	
                    <Link href="#" className={`text-body-tertiary text-decoration-none ${style.chenbreadhole}`}>熱門</Link>
                </div>
            </div>
            <div className="d-flex">
                <div>
                    <Link href="#" className="text-black fs-5 pe-4 text-decoration-none">熱門</Link>
                </div>
                <div>
                    <Link href="#" className="text-black fs-5 text-decoration-none">最新</Link>
                </div>
            </div>
        </>
    )
}