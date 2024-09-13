import logo from "../assets/white_logo.png";
import { faceCards } from "../constants";
const Team = () => {
  return (

  <div className="xl:container mx-auto px-6 md:px-10">
    <div className="mb-10 text-center col">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
            Our{" "}
            <span className="bg-gradient-to-r from-[#ff930f] to-[#fff95b] text-transparent bg-clip-text">
              TEAM
            </span>
          </h2>
    </div>
    <div className="mb-10 text-center col">
    <p className="text-xl dark:text-gray-300">
        We take pride in introducing our team to you. Have a look.
      </p>
      </div>
    
    <div className="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {faceCards.map((facecard, index) => (
        <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
        <img
          className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
          src={facecard.image}
          alt="person"
          loading="lazy"
          width="640"
          height="805"
        />
        <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
          <div>
            <h4 className="text-xl font-semibold dark:text-gray-700 text-white">{facecard.name}</h4>
            <span className="block text-sm text-gray-500">{facecard.title}</span>
          </div>
          <p className="mt-8 text-gray-300 dark:text-gray-600">
          {facecard.description}
          </p>
        </div>
        
      </div>
    ))}
      
    </div>
  </div>
    
  );
};

export default Team;
