
const Hero = () => {
  return (
    <div className="bg-gradient-to-l from-gray-200 via-fuchsia-200 to-stone-100">
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
              Just Do It
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Elevate your performance with our latest collection of athletic
              wear and footwear.
            </p>
            <div className="space-x-4">
              <button className="bg-black text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition duration-300">
                Shop Men
              </button>
              <button className="bg-white text-black font-bold py-3 px-8 rounded-full border-2 border-black hover:bg-gray-100 transition duration-300 my-3">
                Shop Women
              </button>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <img
              src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/g1ljiszo4qhthfpluzbt/nike-joyride.jpg"
              alt="Featured Product"
              className="w-full h-auto object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
