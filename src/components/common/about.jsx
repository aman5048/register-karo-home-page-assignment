import Group from "../assets/about-img/about-group-img.png";
import Vector from "../assets/about-img/about-Vector-img.png";
import symbol1 from "../assets/about-img/Symbol-1.png";
import symbol2 from "../assets/about-img/Symbol-2.png";
import symbol3 from "../assets/about-img/Symbol-3.png";
import symbol4 from "../assets/about-img/Symbol-4.png";
import symbol5 from "../assets/about-img/Symbol-5.png";

export const About = () => {
  return (
    <>
      <section className="py-16 md:py-24 lg :py-32 pl-4 md:pl-16 lg:pl-24">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-content pr-4 order-2 md:order-2 lg:order-1 xl:order-1 md:pr-8 ">
            <p className="text-sm text-orange-500 font-semibold uppercase mb-2">
              Welcome to RegisterKaro.in
            </p>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              About <span className="text-orange-500">Register Karo</span>
            </h2>
            <p className="text-gray-600 mb-4">
              We have been using Intelegencia as our DevOps vendor for our field
              service applications over the last couple of years and I’m
              extremely pleased with their performance, ability to execute, and
              willingness to adapt in our ever-changing environment. Perry is an
              outstanding leader who is fanatical about customer satisfaction.
              He has built a solid team which has consistently delivered on
              projects thereby exceeding everyone’s expectations.
            </p>
            <p className="text-gray-600 mb-6">
              I would strongly recommend their services to any organization that
              is looking for solid, reliable, and predictable outcomes.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2">
              Learn More <span className="material-icons">arrow_forward</span>
            </button>
          </div>

          {/* Image Content */}
          <div className="image-content flex justify-center order-1 md:order-1 lg:order-2 xl:order-2">
            <img
              src={Group}
              alt="Team at Register Karo"
              className="rounded-xl shadow-lg w-full mr-4"
            />
            <div className=" bottom-0 right-0">
              <img src={Vector} alt="about vector style" />
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-2 md:mx-12 px-4 py-8 md:py-16">
        <div className="col-span-2  p-4">
          <p className="text-[#EB8D15]">WHY REGISTERKARO.IN</p>
          <h3 className="font-bold text-2xl">Why Choose Register Karo</h3>
          <p>
            It is with consistent services and results that build trust with the
            people and that in turn help us to serve the business better.
          </p>
        </div>
        <div className="justify-center items-center p-4 rounded-lg bg-[#FCDDEC]">
          <div className="justify-items-center">
            <img src={symbol1} alt="symbol1" />
          </div>
          <div className="p-4 mt-2 justify-items-center text-center ">
            <h4 className="font-bold text-xl">Confidential & Safe</h4>
            <p className=" text-gray-600">
              All your private information is safe with us
            </p>
          </div>
        </div>
        <div className="justify-center items-center p-4 rounded-lg bg-[#F1FBF3]">
          <div className=" justify-items-center">
            <img src={symbol2} alt="symbol2" />
          </div>
          <div className="p-4 mt-2 justify-items-center text-center">
            <h4 className="font-bold text-xl">Confidential & Safe</h4>
            <p className=" text-gray-600">
              All your private information is safe with us
            </p>
          </div>
        </div>
        <div className="hidden sm:hidden md:hidden lg:visible"></div>
        <div className="justify-center items-center p-4 rounded-lg bg-[#EDF3FF]">
          <div className="justify-items-center">
            <img src={symbol3} alt="symbol3" />
          </div>
          <div className="p-4 mt-2 justify-items-center text-center">
            <h4 className="font-bold text-xl">Confidential & Safe</h4>
            <p className=" text-gray-600">
              All your private information is safe with us
            </p>
          </div>
        </div>
        <div className="justify-center items-center p-4 rounded-lg bg-[#FBF1FB]">
          <div className="justify-items-center">
            <img src={symbol4} alt="symbol4" />
          </div>
          <div className="p-4 mt-2 justify-items-center text-center">
            <h4 className="font-bold text-xl">Confidential & Safe</h4>
            <p className=" text-gray-600">
              All your private information is safe with us
            </p>
          </div>
        </div>
        <div className="justify-center items-center p-4 rounded-lg bg-[#27AE600A]">
          <div className="justify-items-center">
            <img className="w-8" src={symbol5} alt="symbol5" />
          </div>
          <div className="p-4 mt-2 justify-items-center text-center">
            <h4 className="font-bold text-xl">Confidential & Safe</h4>
            <p className=" text-gray-600">
              All your private information is safe with us
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
