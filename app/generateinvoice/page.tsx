"use client"
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Button } from "@/components/ui/button";;
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import Navbar from "../components/Navbar";
import { Textarea } from "@/components/ui/textarea"
import { CgAdd } from "react-icons/cg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


interface item {
  name: string,
  price: number,
  quantity: number,
  amount: number
}
interface Action {
  type: 'setInvoiceID' | 'setCompanyDetails' | 'setBillingTo';

  
}
interface State {
  invoiceID: string,
  companyDetails: string,
  billingTo: string,
}
function reducer(state: State, action : any) {
  switch(action.type) {
    case "setInvoiceID": 
      return {...state, invoiceID: action.payload}
  }
}
const inititalState = {
  invoiceID: "",
    companyDetails: "",
    billingTo: ""
}

const GeneratePDF = () => {
  const [invoiceID, setInvoiceID] = useState<string>("")
  const [companyDetails, setCompanyDetails] = useState<string>("Example Company, somewhere in some city")
  const [date, setDate] = useState<string>("")
  const [dueDate, setDueDate] = useState<string>("")
  const [billingTo, setBillingTo] = useState<string>("Example Company, somewhere in some city")
  const [items, setItems] = useState<item[]>([])
  const [newItemTitle, setNewItemTitle] = useState<string>("")
  const [newItemPrice, setNewItemPrice] = useState<number>()
  const [newItemQuantity, setNewItemQuantity] = useState<number>()
  const [tax, setTax] = useState<number>(0)
  const [discount, setDiscount] = useState<number>(0)
  const [shippingTax, setShippingTax] = useState<number>(0)
  const [note, setNote] = useState<string>("")
  const componentRef= useRef<any>();


  const calcAll = () => {
    const all = items.reduce((acc, item) => acc += item.amount, 0) + tax + shippingTax - discount;
    return all;
  }
  const generatePDF = () => {
    const doc = new jsPDF();
  
    // Adding header
    doc.setFontSize(16);
    doc.text('INVOICE', 14, 20);
    doc.setFontSize(12);
    doc.text(`#${invoiceID}`, 14, 30);
    
    // Adding sender and recipient
    doc.setFontSize(12);
    doc.text(companyDetails.split(',')[0], 14, 50);
    doc.text(companyDetails.split(',').map((el, index) => (index !== 0 ? el : "")), 14, 55);
    doc.text(billingTo.split(',')[0], 120, 50);
    doc.text(billingTo.split(',').map((el, index) => (index !== 0 ? el : "")), 120, 55);
  
    // Adding table
    autoTable(doc,{
      startY: 70,
      head: [['Deliverable', 'Rate', 'Qty', 'Amount']],
      body: items.map((el) => (
        [el.name, el.price.toString(), el.quantity.toString(), el.amount.toString()]
      )),
      theme: 'grid',
      headStyles: { fillColor: [29,78,216] },
      styles: { fontSize: 12, cellPadding: 3, overflow: 'linebreak', valign: 'middle' }
    });
  
    // Adding summary
    let finalY = (doc as any).lastAutoTable.finalY;
    doc.text('SubTotal', 140, finalY + 10);
    doc.text(calcAll().toString(), 180, finalY + 10, { align: 'right' });
    doc.text('Tax', 140, finalY + 20);
    doc.text(tax.toString(), 180, finalY + 20, { align: 'right' });
    doc.text('Discount', 140, finalY + 30);
    doc.text(discount.toString(), 180, finalY + 30, { align: 'right' });
    doc.text('Shipping Tax', 140, finalY + 40);
    doc.text(shippingTax.toString(), 180, finalY + 40, { align: 'right' });

  
    // Adding footer
    doc.text('Total amount', 153, finalY + 190);
    doc.setFontSize(16);
    doc.text(`${calcAll().toString()} egp`, 180, finalY + 200, { align: 'right' });
  
    // Adding invoice details
    doc.setFontSize(12);
    date && doc.text(`Date Issued: ${date}`, 14, finalY + 190);
    dueDate && doc.text(`Due Date: ${dueDate}`, 14, finalY + 200);
    
  
    // Adding notes
    // doc.text('NOTES', 14, finalY + 120);
    // doc.text('Pay within 15 days. Thank you for your business.', 14, finalY + 130);
  
    // Save the PDF
    doc.save('invoice.pdf');
  };
  const handleAddItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(newItemPrice && newItemQuantity)
    {
      setItems([...items, {name: newItemTitle, price: newItemPrice, quantity: newItemQuantity, amount: newItemPrice * newItemQuantity}]);
    }
    setNewItemTitle("");
    setNewItemPrice(0);
    setNewItemQuantity(0)
  }
  return (
    <main className="w-full  flex flex-col bg-[#F7F9FD] dark:bg-[#121212]" >
      <Navbar/>
      {/* <div className="flex-1 min-h-[5rem] border-b-2 w-full" >
        template
      </div> */}
      <div className="flex flex-col xl:flex-row w-full h-full min-h-screen">
          <motion.div initial={{x: 0,  opacity: 0}} animate={{x: 0, opacity: 1}} transition={{ease:"easeInOut", duration: 0.25}} className="xl:w-[50%] border-r-2 border-gray-400/20 ">
            <form className="px-4 mt-4" >
              <div className="flex  gap-2">
                {/* <div className="flex-col gap-1 w-full">
                  <label>Logo</label>
                  <Input type="text" className="my-2"/>
                </div>   */}
                <div className="flex-col gap-1 w-full">
                  <label>Invoice ID</label>
                  <Input type="text" className="my-2" onChange={(e) => setInvoiceID(e.target.value)} value={invoiceID}/>
                </div>  
              </div>
              <div className="flex mt-4 gap-2">
                <div className="flex-col gap-1 w-full">
                  <label>Your Company Details</label>
                  <Textarea className="border-2 rounded-lg w-full p-2 my-2" onChange={(e) => setCompanyDetails(e.target.value)} value={companyDetails}/>

                </div>  

                <div className="flex-col gap-1 w-full">
                  <label>Billing To</label>
                  <Textarea className="border-2 rounded-lg w-full p-2 my-2" onChange={(e) => setBillingTo(e.target.value)} value={billingTo}/>
                </div>  
              </div>
              
              <div className="flex mt-4 gap-2">
                <div className="flex-col gap-1 w-full">
                  <label>Date Issued:</label>
                  <Input type="date" className="border-2 rounded-lg w-full p-2 my-2" onChange={(e) => setDate(e.target.value)}/>

                </div>  

                <div className="flex-col gap-1 w-full">
                  <label>Due Date:</label>
                  <Input  type="date" className="border-2 rounded-lg w-full p-2 my-2" onChange={(e) => setDueDate(e.target.value)} value={dueDate}/>
                </div>  

              </div>

              <div className="flex mt-4 gap-2">
                <div className="flex-col gap-1 w-full">
                  <label>Tax:</label>
                  <Input type="number" className="border-2 rounded-lg w-full p-2 my-2" onChange={(e) => setTax(Number(e.target.value))} value={tax}/>

                </div>  

                <div className="flex-col gap-1 w-full">
                  <label>Discount:</label>
                  <Input type="number" className="border-2 rounded-lg w-full p-2 my-2" onChange={(e) => setDiscount(Number(e.target.value))} value={discount}/>
                </div>  

              </div>
              <div className="flex mt-4 gap-2">
                <div className="flex-col gap-1 w-full">
                  <label>Shipping Tax:</label>
                  <Input type="number" className="border-2 rounded-lg w-full p-2 my-2" onChange={(e) => setShippingTax(Number(e.target.value))} value={shippingTax}/>

                </div>  

              </div>
              <div className="flex-col gap-1 w-full">
                <label>Note:</label>
                <Textarea className="border-2 rounded-lg w-full p-2 my-2" onChange={(e) => setNote(e.target.value)} value={note}/>
              </div>  

              <div className="bg-[#f3f3f3] dark:bg-black rounded-lg mt-4 p-2 flex flex-col gap-2">
                <div className="flex justify-between w-full">
                  <div className="w-[50%]">
                    Item
                  </div>
                  <div className="w-[10%]">
                    Rate
                  </div>
                  <div className="w-[5%]">
                    Qty
                  </div>
                  <div className="w-[20%]">
                    Amount
                  </div>
                </div>
                {
                  items.map((item, index) => (
                    <div className="flex justify-between w-full" key={index}>
                      <div className="w-[50%] p-2 bg-white dark:bg-[#121212] rounded-lg">
                        {item.name}
                      </div>
                      <div className="w-[10%]  p-2 bg-white rounded-lg dark:bg-[#121212] text-center">
                        {item.price}
                      </div>
                      <div className="w-[8%] p-2 bg-white rounded-lg  dark:bg-[#121212] text-center">
                        {item.quantity}
                      </div>
                      <div className="w-[20%]  p-2 bg-white rounded-lg  dark:bg-[#121212] text-center">
                        {item.amount}
                      </div>
                    </div>
                  ))
                }

                <Dialog>
                  <DialogTrigger>
                      <div className="text-center max-w-max mx-auto pt-4 cursor-pointer">
                        <div className="bg-blue-600 rounded-full p-2 max-w-max mx-auto">
                          <CgAdd className="text-white text-2xl"/>
                        </div>  
                        Add Items
                      </div>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="pb-3">Enter item info</DialogTitle>
                      <DialogDescription>
                        <form onSubmit={handleAddItem} className="flex flex-col gap-2">
                          <label htmlFor="title">item title</label>
                          <Input type="text" id="title" onChange={(e) => setNewItemTitle(e.target.value)} value={newItemTitle}/>
                          <label htmlFor="price">item price</label>
                          <Input type="number" id="price" onChange={(e) => setNewItemPrice(Number(e.target.value))} value={newItemPrice}/>
                          <label htmlFor="quantity">item quantity</label>
                          <Input type="number" id="quantity" onChange={(e) => setNewItemQuantity(Number(e.target.value))} value={newItemQuantity}/>
                          <Button type="submit">Submit</Button>
                        </form>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
                
              </div>

              
            </form>
            <div className="px-4 w-full mt-12">
              <div className="max-w-max flex gap-3 mx-auto lg:mx-0 my-4 lg:ml-auto">
                <Button onClick={() => generatePDF()} className="">Submit & Download</Button>
              </div>
            </div>
          </motion.div>
        <div className="w-full min-h-full bg-[#f4f4f4] dark:bg-[#121212] xl:p-8 py-12 ">
         <div className="w-full h-full flex justify-center">
            <div className="w-[658px] h-[842px] flex flex-col justify-between bg-white pt-8 dark:text-black select-none" ref={componentRef}>
              <div className="px-4 xl:px-8">
                <div className="flex justify-between items-end px-4">
                  <h1 className="text-xl uppercase">Invoice</h1>
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
                <div className="flex justify-between w-full font-bold bg-blue-700 p-2 text-white text-xs sm:text-sm md:text-md lg:text-lg">
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
                
          </div>
        </div>
      </div>
    </main>
  )
}

export default GeneratePDF
