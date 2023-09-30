import React from 'react'
import { useCart } from 'react-use-cart'
import Layout from '../Components/Layout/Layout';
// import axios from 'axios';
import { Link } from 'react-router-dom';

// Backend = "http://localhost:8000";

const CartPage = (props) => {
  const {items,isEmpty,totalUniqueItems,totalItems,cartTotal,updateItemQuantity,removeItem,emptyCart} = useCart();

  return (
    <Layout title={"E-shop Cart"}>
    <div>
        <section className='py-4 container'>
          <div className='row justify-content-center'>
            {isEmpty ? <h3 style={{textAlign:"center"}}>Your Cart is Empty!!!</h3> : ""}
            <h5 style={{textAlign:"right"}}> TotalItems:({totalItems}) </h5>
            <div className='col-12'>
              <h5>Cart ({totalUniqueItems})</h5>
              <table className='table table-light table-hover n-0'>
                <tbody>
                  {items.map((item,index)=>{
                    return(
                      <tr key={index}>
                      <td>
                        <img src={item.image} style={{height:"6rem"}} alt="error" />
                      </td>
                      <td style={{textAlign:"center",padding:"4%"}}>{item.name}</td>
                      <td style={{textAlign:"center",padding:"4%"}}>{item.price}</td>
                      <td style={{textAlign:"center",padding:"4%"}}> 
                        <button className='btn btn-info ms-2' onClick={()=>updateItemQuantity(item.id,item.quantity -1)}>-</button>&nbsp;
                        <b>{item.quantity}</b>
                        <button className='btn btn-info ms-2' onClick={()=>updateItemQuantity(item.id,item.quantity +1)}>+</button>&nbsp;
                        <button className='btn btn-danger ms-2' onClick={()=>removeItem(item.id)}>Remove Item</button>
                      </td>
                    </tr>
                    )
                })}
                </tbody>
              </table>
            </div>
            <div className='col-auto ms-auto'>
            <h2>Total Price: {cartTotal} </h2>
            </div>
            <div className='col-auto'>
              <button className='btn btn-danger m-2' onClick={()=>{emptyCart()}}>Clear Cart</button>
              <Link to="https://razorpay.me/@pabbushivaprasad"><button className='btn btn-primary m-2' >Checkout</button></Link>
              {/* onClick={{()=>{handlePayment()}}} */}
            </div>
          </div>
        </section>
    </div>
    </Layout>
  )
}


export default CartPage