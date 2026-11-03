"use client"
import React, {useState} from 'react';
import Script from 'next/script';
import { initiate } from '@/actions/useractions';
import { useSession } from 'next-auth/react';

const PaymentPage = ({username}) => {
    const [Paymentform, setPaymentform] = useState({})

    const handleChange = (e) => {
        setPaymentform({...paymentform, [e.target.name]: e.target.value})
    }

    const pay = async (amount) => {
        //Get the order id
        let a = await initiate(amount, username, paymentform)
        let orderid = a.id
        var options = {
            "key": process.env.NEXT_PUBLIC_KEY_ID, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Get Me A Chai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, // This is a sample Order ID. Pass the 'id' obtained in the response of Step 1
            "callback_url": `${process.env.URL}/api/razorpay`,
            "prefill": { // We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000000000" // Provide the customer's phone number for better conversion rates
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }

        var rzp1 = new Razorpay(options);
        rzp1.open();
    }


    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
            <Script>
                {`
                var options = {
                    "key": "YOUR_KEY_ID", // Enter the Key ID generated from the Dashboard
                    "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                    "currency": "INR",
                    "name": "Acme Corp.", //your business name
                    "description": "Test Transaction",
                    "image": "https://example.com/your_logo",
                    "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the id obtained in the response of Step 1
                    "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
                    "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                        "name": "Gaurav Kumar", //your customer's name
                        "email": "gaurav.kumar@example.com",
                        "contact": "9999999999" //Provide the customer's phone number for better conversion rates
                    },
                    "notes": {
                        "address": "Razorpay Corporate Office"
                    },
                    "theme": {
                        "color": "#3399cc"
                    }
                };

                var rzp1 = new Razorpay(options);
                document.getElementById('rzp-button1').onclick = function(e) {
                    rzp1.open();
                    e.preventDefault();
                }
                `}
            </Script>

            <div className='cover w-full bg-red-50 relative'>
                <img className="object-cover w-full h-[350]" src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/15.gif?token-time=1712188800&token-hash=Yu2izk29wcmpgmXNNW0zpk5W_gwh0Ezu_2oO1XGDLpY%3D" alt='' />
                <div className='absolute -bottom-20 right-[46%] border-white border-2 rounded-full'>
                    <img width={150} height={150} className='rounded-full' src="https://i1.natgeo.com/n/548467d8-cf51-4551-9f58-68187a2dc45e/NationalGeographic_2572187_square.jpg" alt="" />
                </div>
            </div>
            <div className="info flex justify-center items-center my-24 flex-col gap-2 mb-32">
                <div className="font-bold text-lg">
                    @{username}
                </div>

                <div className="text-slate-400">
                    Creating Animated art for VTT's
                </div>

                <div className="text-slate-400">
                    9,719 members . 82 posts . $15,450/release
                </div>

                <div className="payment flex gap-3 w-[80%] mt-11">
                    <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-10">
                        {/* Show list of all the supporters as a leaderboard */}
                        <h2 className="text-2xl font-bold my-5">Supporters</h2>
                        <ul className="mx-5 text-lg">
                            <li className="my-4 flex gap-2 items-center">
                                <img width={33} src="avatar.gif" alt="user avatar" />
                                <span>
                                Shubham donated <span className='font-bold'>$30</span> with a message "I support you bro, Lots of 💖"
                                </span>
                            </li>
                            <li className="my-4 flex gap-2 items-center">
                                <img width={33} src="avatar.gif" alt="user avatar" />
                                <span>
                                Shubham donated <span className='font-bold'>$30</span> with a message "I support you bro, Lots of 💖"
                                </span>
                            </li>
                            <li className="my-4 flex gap-2 items-center">
                                <img width={33} src="avatar.gif" alt="user avatar" />
                                <span>
                                Shubham donated <span className='font-bold'>$30</span> with a message "I support you bro, Lots of 💖"
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10">
                        <h2 className="text-2xl font-bold my-5">Make a Payment</h2>
                        <div className="flex gap-2 flex-col">

                        <input onChange={handleChange} value={paymentform.name} name='name' type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Name"/>
                        <input onChange={handleChange} value={paymentform.message} name='message' type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Message"/>

                        <input onChange={handleChange} value={paymentform.amount} name='amount' type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Amount"/>
                        <button type="button" className="text-white bg-gradient-to-br from-purple-900 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Pay</button>

                        </div>

                        {/* Or choose from these amounts */}
                        <div className="flex gap-2 mt-5">
                            <button className="bg-slate-800 p-3 rounded-lg" onClick={()=> pay(10)}>Pay ₹10</button>
                            <button className="bg-slate-800 p-3 rounded-lg" onClick={()=> pay(20)}>Pay ₹20</button>
                            <button className="bg-slate-800 p-3 rounded-lg" onClick={()=> pay(30)}>Pay ₹30</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default PaymentPage;