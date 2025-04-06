import React, { useRef } from 'react'
import { item } from '../interfaces/interfaces'
interface PropTypes {
    invoiceID: string,
    companyDetails: string,
    billingTo: string,
    items: item[],
    tax: number,
    discount: number,
    shippingTax: number,
    date: string,
    dueDate: string,
    calcAll: () => React.ReactNode
    
}
export default function InvoiceShowcase({invoiceID, companyDetails, billingTo, items, tax, discount, date, calcAll, shippingTax, dueDate} : PropTypes) {
    const componentRef= useRef<any>();
  return (
    <div className="w-[658px] h-[842px] flex flex-col justify-between bg-white pt-8 m-2 md:m-0 dark:text-black select-none" ref={componentRef}>
              <div className="px-4 xl:px-8">
                <div className="flex justify-between items-end px-4">
                  <h1 className="text-xl uppercase font-normal">Invoice</h1>
                </div>
                <div className="py-4 px-4">
                  #{invoiceID}
                </div>
                <div className="my-5 flex px-4">
                  <div className="w-[60%]">
                    <h1>{companyDetails.split(',')[0]}</h1>
                    {companyDetails.split(',').map((el, index) => <p key={index}>{index != 0 && el}</p>)}
                  </div>
                  <div className="w-[60%]">
                  <h1>{billingTo.split(',')[0]}</h1>
                  {billingTo.split(',').map((el, index) => <p key={index}>{index != 0 && el}</p>)}
                  </div>
                </div>
                <div className="mt-2 p-2 flex flex-col ">
                <div className="flex justify-between w-full font-normal bg-blue-700 p-2 text-white text-xs sm:text-sm md:text-md lg:text-lg">
                  <div className="w-[50%] ">
                    Deliverable
                  </div>
                  <div className="w-[15%] text-center ">
                    Rate
                  </div>
                  <div className="w-[15%] text-center">
                    Quantity
                  </div>
                  <div className="w-[20%] text-center">
                    Amount
                  </div>
                </div>
                {
                  items.map((item, index) => (
                    <div className="flex justify-between w-full" key={index}>
                      <div className="w-[50%] p-2 border-[1px] border-gray-200 border-t-0">
                        {item.name}
                      </div>
                      <div className="w-[15%] p-2 text-center border-[1px] border-gray-200 border-t-0">
                        {item.price}
                      </div>
                      <div className="w-[15%] p-2 text-center border-[1px] border-gray-200 border-t-0">
                        {item.quantity}
                      </div>
                      <div className="w-[20%]  p-2 text-center border-[1px] border-gray-200 border-t-0">
                        {item.amount}
                      </div>
                    </div>
                  ))
                }
                </div>
                <div className="w-full my-6">  
                  <div className="max-w-max ml-auto px-12">
                    <div className="flex gap-8 justify-between">
                      <p>Subtotal  </p> <p>{items.reduce((acc, item) => acc += item.amount, 0)}<span className="text-sm">egp</span></p>
                    </div>
                    {
                      tax !== 0 &&
                      <div className="flex gap-8 justify-between">
                        <p>Tax  </p> <p>{tax} <span className="text-sm">egp</span></p>
                      </div>
                    }
                    {
                      discount !== 0 &&
                      <div className="flex gap-8 justify-between">
                        <p>Discount  </p> <p>{discount} <span className="text-sm">egp</span></p>
                      </div>
                    }
                    {
                      shippingTax !== 0 &&
                      <div className="flex gap-8 justify-between">
                        <p>Shipping Tax  </p> <p>{shippingTax} <span className="text-sm">egp</span></p>
                      </div>
                    }
                  </div>
                </div>

              </div>

              <div className="text-black xl:p-4 flex justify-between">
                <div>
                  {
                    date &&
                    <div>
                      <p>Date Issued: {date}</p>
                    </div>
                  }
                  {
                    dueDate &&
                    <div>
                      <p>Due Date: {dueDate}</p>
                    </div>
                  }
                </div>
                <div className="px-4">
                  Total Amount 
                  <p className="text-2xl text-center">{calcAll()}<span className="text-sm">egp</span></p>
                </div>
              </div>
            </div>
  )
}
