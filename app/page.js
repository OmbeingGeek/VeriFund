import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center text-white h-[44vh]">
      <div className="font-bold text-3xl">Fund me to resolve my issue</div>
      <p>A crowdfunding platform for People. Get funded by general public. Start Now!</p>
      <div>
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 m-5">Start Here</button>
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5">Read More</button>

      </div>
    </div>
  );
}
