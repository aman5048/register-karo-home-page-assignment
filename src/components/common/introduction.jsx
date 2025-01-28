import ThumbNail from "../assets/Thumb-nail.png";
import Bulb from "../assets/introduction/bulb.png";
import Camping from "../assets/introduction/Camping.png";
import ClientLogo from "../assets/brands/Pagination.png";
export const Introduction = () => {
  return (
    <div>
      <section className="bg-[#1C4670] text-white py-16 px-8">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-content">
            <h2 className="text-3xl font-bold mb-4">Our Video Introductions</h2>
            <p className="text-gray-300 mb-6">
              Velit purus egestas tellus phasellus. Mattis eget sed faucibus
              magna vulputate pellentesque a diam tincidunt apis dui.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 text-white w-10 h-10 flex items-center justify-center rounded-full">
                  <span className="material-icons">
                    <img src={Bulb} alt="Bulb" />
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    Explore ideas together
                  </h3>
                  <p className="text-gray-300">
                    Engage audience segments and finally create actionable
                    insights. Amplify vertical integration.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 text-white w-10 h-10 flex items-center justify-center rounded-full">
                  <span className="material-icons">
                    <img src={Camping} alt="Camping" />
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    Bring those ideas to life
                  </h3>
                  <p className="text-gray-300">
                    Engage audience segments and finally create actionable
                    insights. Amplify vertical integration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Video Content */}
          <div className="video-content relative">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img src={ThumbNail} alt="Video Thumbnail" className="w-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-transparent w-16 h-16 rounded-full flex items-center justify-center shadow-lg"></button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col justify-center items-center gap-4 py-16">
        <div className="w-1/2 text-center mb-4 sm:w-full md:w-1/2">
          <h3 className="text-3xl font-bold">Our Happy Clients</h3>
        </div>
        <div className="w-1/2 text-center mb-4 sm:w-full md:w-1/2">
          <p>
            Professionally cultivate one-to-one customer service with robust
            ideas. Dynamically innovate resourceleveling customer service for
            state of the art customer service.
          </p>
        </div>
        <div>
          <img src={ClientLogo} alt="Clients logo" />
        </div>
        <div className="w-1/2 text-center mb-4 sm:w-full md:w-1/2 text-sm text-[#1C4670] font-semibold">
          <p>Show More</p>
        </div>
      </div>
    </div>
  );
};
