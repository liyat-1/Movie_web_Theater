/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';

const HomePage = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/auth');
  };

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-80">
        <nav className="px-1 py-0 absolute">
          <img src="/images/3.png" alt="logo" className="h-40" />
        </nav>
        <div className="flex justify-center py-5 ">
        <div className="flex flex-col items-center justify-center h-full ">
          <div className="w-full">
            <img src="/images/15.jpeg" alt="welcome" className="w-full  max-h-80 " />
          <div className="bg-gradient-to-r
           from-blue-500
            via-red-500
            to-gray-900 bg-opacity-90 w-full lg:max-w-2xl  mt-0 p-8 flex flex-col items-center">
            <h1 className="text-white text-4xl mb-8 font-semibold shadow-glow">
              Welcome to Theater
            </h1>
            <p className="text-white text-xl mb-8">
              Discover and watch all your desired movies for free.
            </p>
            <button
              onClick={handleGetStarted}
              className="bg-gradient-to-r
               from-red-600 via-red-700
                to-red-600
                 hover:from-gray-300
                 hover:via-orange-500 hover:to-gray-300 
                 hover:text-black
                 text-white shadow-sm font-bold py-2 px-4 
               mt-auto rounded  
               border  hover:border-white transition"
            >
              Get Started
            </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;