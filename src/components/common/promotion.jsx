import Phone from "../assets/Phone.png";

const AppPromoSection = () => {
  return (
    <section className=" py-12 flex-col items-center gap-6 realative">
      <div className="bg-blue-800 container mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between px-6 lg:px-12 py-8 lg:py-16">
        {/* Text Section */}
        <div className="max-w-lg">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Manage Your Services by your Mobile Phone
          </h2>
          <p className="text-base lg:text-lg text-blue-200 mb-6">
            Download our app to manage and track your services. Our app enables
            you to stay in touch with our experts and aids you in tracking your
            progress.
          </p>
          <h3 className="text-lg font-medium text-white mb-4">Get the App</h3>
          {/* App Store Buttons */}
          <div className="flex space-x-4">
            <a
              href="./"
              className="bg-white flex items-center justify-center px-4 py-2 rounded-md shadow hover:shadow-lg transform hover:scale-105 transition duration-200"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Apple_logo_black.svg"
                alt="Apple Store"
                className="w-6 h-6 mr-2"
              />
              <div className="text-left">
                <p className="text-xs text-gray-500">Get it on</p>
                <p className="text-sm font-medium text-black">App Store</p>
              </div>
            </a>
            <a
              href="./"
              className="bg-white flex items-center justify-center px-4 py-2 rounded-md shadow hover:shadow-lg transform hover:scale-105 transition duration-200"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="w-6 h-6 mr-2"
              />
              <div className="text-left">
                <p className="text-xs text-gray-500">Get it on</p>
                <p className="text-sm font-medium text-black">Google Play</p>
              </div>
            </a>
          </div>
        </div>
        <div>
          {/* Phone Image */}
          <img
            src={Phone}
            alt="Phone"
            style={{ right: "300px", top: "100px" }}
            className="absolute overlay w-1/5 hidden lg:block  max-w-md lg:max-w-lg"
          />
          <img
            src={Phone}
            alt="Phone"
            className="absolutes overlay w-1/5 hidden lg:block right-0 top-0 max-w-md lg:max-w-lg"
          />
        </div>
      </div>
      <div className="relative bottom-0  w-full h-full flex bg-white flex-col items-center justify-center gap-8 pt-10">
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="text-sm text-[#EB8D15]">WHY REGISTER KARO</p>
          <h3>Some Numbers Are Important</h3>
        </div>
        <div className="flex flex-row items-center justify-center gap-8 text-center">
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold ">1M+</p>
            <p className="text-lg font-semibold">CUSTOMERS</p>
          </div>
          <div>
            <p className="text-3xl font-bold ">12+</p>
            <p className="text-lg font-semibold">YEARS OF EXPERIENCE</p>
          </div>
          <div>
            <p className="text-3xl font-bold ">41+</p>
            <p className="text-lg font-semibold">R&D ENGENIERS</p>
          </div>
          <div>
            <p className="text-3xl font-bold ">78+</p>
            <p className="text-lg font-semibold">COUNTRIES</p>
          </div>
          <div>
            <p className="text-3xl font-bold ">3287+</p>
            <p className="text-lg font-semibold">PARTNERS</p>
          </div>
          <div>
            <p className="text-3xl font-bold ">41+</p>
            <p className="text-lg font-semibold">AWARDS RECEIVED</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AppPromoSection };
