import React from 'react'
import '../../styles/payment-method.css'
import masterCard from '../../assets/images/master-card.jpg'
import payPol from '../../assets/images/paypal.jpg'

const PaymentMethod = () => {
  return (
    <>
    <div className="payment">
        <label htmlFor="" className='d-flex align-items-center gap-2'>
            <input type="radio" /> Transferecia Bancaria
        </label>
    </div>

    <div className="payment mt-3">
        <label htmlFor="" className='d-flex align-items-center gap-2'>
            <input type="radio" /> Pagamento de Check
        </label>
    </div>

    <div className='payment mt-3 d-flex align-items-center justify-content-between'>
        <label htmlFor="" className='d-flex align-items-center gap-2'>
            <input type="radio"  /> Master Card
            </label>

            <img src={masterCard} alt="" />
    </div>
    <div className='payment mt-3 d-flex align-items-center justify-content-between'>
        <label htmlFor="" className='d-flex align-items-center gap-2'>
            <input type="radio"  /> Paypal
            </label>

            <img src={payPol} alt="" />
    </div>
    <div className="payment text-end mt-5">
        <button>Reserve Agora!</button>
    </div>
    </>
  )
}

export default PaymentMethod