import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col gap-4 items-center text-white h-[44vh]">
        <div className="font-bold text-5xl gap-2 flex justify-center items-center">Fund me to resolve my issue <span><Image src="/spinCoin.gif" width={88} height={88} unoptimized alt="" /></span></div>
        <p>A crowdfunding platform for People. Get funded by general public. Start Now!</p>
        <div>
          {/* button ui is taken from flowbite */}
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 m-5">Start Here</button>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5">Read More</button>

        </div>
      </div>
      <div className="bg-white h-1 opacity-15"></div>

      <div className="text-white container mx-auto pb-32 pt-14">
        <h2 className="text-3xl font-bold text-center mb-14">
          Your Fans can buy you a Chai
        </h2>

        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <Image
              className="bg-slate-400 rounded-full p-2 text-black border-red-500"
              width={88}
              height={88}
              unoptimized
              src="/man.gif"
              alt=""
            />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">Your fans are available to help you</p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <Image
              className="bg-slate-400 rounded-full p-2 text-black"
              width={88}
              height={88}
              unoptimized
              src="/coin.gif"
              alt=""
            />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">Your fans are available to help you</p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <Image
              className="bg-slate-400 rounded-full p-2 text-black"
              width={88}
              height={88}
              unoptimized
              src="/group.gif"
              alt=""
            />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">Your fans are available to help you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-15"></div>

      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-center mb-14">
          Learn More About Us
        </h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/voF1plqqZJA?si=nUD7O31MQsLY8XMg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  
      </div>
    </>
  );
}
