import {useEffect, useState} from 'react'
import s from "@/components/Cart_component/orderhistory/orderlist.module.css"
import Orderdetail from './orderdetail'
import Orderman from './orderman';

export default function orderlist() {
  const [openedDetailIndex, setOpenedDetailIndex] = useState(null);
  const [openedOrderIndex, setOpenedOrderIndex] = useState(null);
  const [data,setData] = useState([])
  const [data1,setData1] = useState([])

  const opendetailhandle = (index) => {
    if (openedDetailIndex === index) {
      setOpenedDetailIndex(null);
    } else {
      setOpenedDetailIndex(index);
      setOpenedOrderIndex(null);
    }
  };

  const openorderhandle = (index) => {
    if (openedOrderIndex === index) {
      setOpenedOrderIndex(null);
    } else {
      setOpenedOrderIndex(index);
      setOpenedDetailIndex(null);
    }
  };

    useEffect(() => {
      fetch(`${process.env.API_SERVER}/cart/order`)
        .then((r) => r.json())
        .then((result) => {
          setData(result);
        });
    }, []);
    const handleSelectOrder = (orderid) => {
      console.log(orderid);
      fetch(`${process.env.API_SERVER}/cart/orderdetail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ orderid }),
      })
      .then((r) => r.json())
      .then((result)=>{
      console.log(result);
        setData1(result);
      })
    }
    
  return (
    <div className={s.listcontain}>
       <div className={s.listrow}>
       {data.map((v,i)=>{
        return(
            <div key={i}>
                <div className={s.listcol} >
                      <div className={s.listnum}><h3>訂單編號</h3><h3>{v.order_id}</h3></div>
                      <div className={s.listdivct}>
                        <div>
                            <div className={s.listdiv}>
                                <h4>訂單日期</h4>
                            </div>
                            <div className={s.listdiv}>
                                <h4>訂單總金額</h4>
                              
                            </div>
                            <div className={s.listdiv}>
                                <h4>知音幣使用</h4>
                                
                            </div>
                            <div className={s.listdiv}>
                                <h4>折價卷使用</h4>
                              
                            </div>
                            <div className={s.listdiv}>
                                <h4>訂單狀態</h4>
                              
                            </div>
                        </div>
                        <div>
                            <div className={s.listdiv}>
                                <h5>{v.createAt}</h5>
                            </div>
                            <div className={s.listdiv}>
                                <h3>${v.total_price}元</h3>
                            </div>
                            <div className={s.listdiv}>
                                <h4>${v.use_token}元</h4>
                            </div>
                            <div className={s.listdiv}>
                                <h4>{v.use_coupon}折</h4>
                            </div>
                            <div className={s.listtext}>
                                <h4>訂單成立</h4>
                            </div>
                        </div>
                      </div>
                    <div className={s.orderbtn}><div onClick={() => { handleSelectOrder(v.order_id); opendetailhandle(i); }} className={s.orderbtntext}>商品細節</div></div>
                    <div className={s.orderbtn}><div onClick={() => { handleSelectOrder(v.order_id); openorderhandle(i); }} className={s.orderbtntext}>寄件資料</div></div>
                </div>
                <div className={s.detaillocation}>
                {openedDetailIndex === i && <Orderdetail data1={data1} />}
                {openedOrderIndex === i && <Orderman data1={data1} />}
                </div>
          </div>
        )
       })}
       </div>
    </div>
  )
}