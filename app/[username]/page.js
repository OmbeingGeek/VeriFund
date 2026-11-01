import React from 'react'

const Username = ({ params }) => {
    return (
        <>
            <div className='cover w-full bg-red-50 relative'>
                <img className="object-cover w-full h-[350]" src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/15.gif?token-time=1712188800&token-hash=Yu2izk29wcmpgmXNNW0zpk5W_gwh0Ezu_2oO1XGDLpY%3D" alt='' />
                <div className='absolute -bottom-20 right-[46%] border-white border-2 rounded-full'>
                    <img width={150} height={150} className='rounded-full' src="https://i1.natgeo.com/n/548467d8-cf51-4551-9f58-68187a2dc45e/NationalGeographic_2572187_square.jpg" alt="" />
                </div>
            </div>
            <div className="info flex justify-center items-center my-24 flex-col gap-2 mb-32">
                <div className="font-bold text-lg">
                    @{params.username}
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

                        <input type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Name"/>
                        <input type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Message"/>

                        <input type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Amount"/>
                        <button type="button" class="text-white bg-gradient-to-br from-purple-900 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Pay</button>

                        </div>

                        {/* Or choose from these amounts */}
                        <div className="flex gap-2 mt-5">
                            <button className="bg-slate-800 p-3 rounded-lg">Pay $10</button>
                            <button className="bg-slate-800 p-3 rounded-lg">Pay $20</button>
                            <button className="bg-slate-800 p-3 rounded-lg">Pay $30</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Username
