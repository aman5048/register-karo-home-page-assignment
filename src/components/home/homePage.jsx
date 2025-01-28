import { Blogs } from "../blogs/blogs";
import {
  About,
  Services,
  Introduction,
  TestimonialSlider,
  Footer,
  Contacts,
  Header,
  Steps,
  FrequentlyAskedQuestions,
  AppPromoSection,
} from "../common";
import Group from "../assets/Group-home.png";
import Star from "../assets/Vector-star.png";
import Oracle from "../assets/brands/oracle.png";
import Morpheus from "../assets/brands/Morpheus.png";
import Monday from "../assets/brands/monday.png";
import Samsung from "../assets/brands/samsung.png";
import Segment from "../assets/brands/segment.png";
import Brands from "../assets/brands/Content.png";

export const HomePage = () => {
  return (
    <>
      <Header></Header>
      <div className="m-0 p-0">
        <div className="bg-gradient-to-r from-orange-100 via-white to-blue-50">
          <div className="">
            {/* <!-- Header Section --> */}
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
              {/* <!-- Text Content --> */}
              <div className="w-full lg:w-1/2 text-center lg:text-left pr-4  pl-4 md:pl-16 lg:pl-24 py-8">
                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                  <img src={Star} alt="Google Rating" className="w-6 h-6" />
                  <span className="text-sm font-medium">Google Rating</span>
                  <span className="text-yellow-400">★★★★★</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                  Your trusted partner for compliance business needs
                </h1>
                <p className="text-base sm:text-lg text-gray-600 mb-6">
                  An online business compliance platform that helps
                  entrepreneurs and other individuals with various{" "}
                  <span className="font-semibold">registrations</span>,{" "}
                  <span className="font-semibold">tax filings</span>, and other{" "}
                  <span className="font-semibold">legal matters</span>.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start items-center space-x-8 mb-6">
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-gray-800">
                      4.5+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      Customer Rating
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-gray-800">
                      20,000+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      Clients
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-gray-800">
                      99.8%
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      Financial Stability
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center lg:justify-start items-center space-x-4">
                  <a
                    href="https://www.figma.com/design/BWtutOCqSUinQiqoSCDQ0c/Register-Karo-Home-Page-(Copy)?node-id=1-21315&t=kCoW5AFr4W59YMUw-0"
                    className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg hover:bg-blue-700"
                  >
                    Talk An Expert
                  </a>
                  <a
                    href="https://www.figma.com/design/BWtutOCqSUinQiqoSCDQ0c/Register-Karo-Home-Page-(Copy)?node-id=1-21315&t=kCoW5AFr4W59YMUw-0"
                    className="flex items-center text-blue-600 font-medium hover:underline"
                  >
                    <span>See how it works</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 sm:w-5 h-4 sm:h-5 ml-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* <!-- Image Content --> */}
              <div className="w-full lg:w-1/2 flex justify-center relative pt-4 md:pt-10 lg:pt-16 ">
                <img src={Group} alt="Illustration" className="max-w-full" />
                <div className="absolute top-1/4 right-0 flex flex-col space-y-4">
                  <button className="bg-white shadow-md px-4 sm:px-6 py-2 sm:py-3 rounder-l-full text-gray-800 hover:bg-gray-100">
                    Annual Compliance
                  </button>
                  <button className="bg-white shadow-md px-4 sm:px-6 py-2 sm:py-3 rounded-l-full text-gray-800 hover:bg-gray-100">
                    Payroll Services
                  </button>
                  <button className="bg-white shadow-md px-4 sm:px-6 py-2 sm:py-3 rounded-l-full text-gray-800 hover:bg-gray-100">
                    Company Formation
                  </button>
                  <button className="bg-white shadow-md px-4 sm:px-6 py-2 sm:py-3 rounded-l-full text-gray-800 hover:bg-gray-100">
                    Annual Compliance
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center my-8 md:my-12 lg:my-16">
          <div className="container text-center mb-8  ">
            <h2 className="text-3xl font-bold mb-4">
              Trusted By Over 100+ StartUps and FreeLance Business
            </h2>
          </div>
          <div className="flex items-center justify-center gap-4 ">
            <div>
              <img src={Oracle} alt="Oracle" />
            </div>
            <div>
              {" "}
              <img src={Morpheus} alt="Morpheus" />
            </div>
            <div>
              {" "}
              <img src={Morpheus} alt="Morpheus" />
            </div>
            <div>
              <img src={Monday} alt="Monday" />
            </div>
            <div>
              <img src={Samsung} alt="Samsung" />
            </div>
            <div>
              <img src={Segment} alt="segment" />
            </div>
          </div>
        </div>

        {/* service */}
        <Services></Services>
        {/* about */}
        <About></About>
        <Introduction></Introduction>
        <Steps></Steps>
        {/* blogs */}
        <div className="justify-center items-center justify-items-center">
          <Blogs></Blogs>
        </div>
        {/* TestimonialSlider */}
        <TestimonialSlider></TestimonialSlider>
        {/* Frequently Asked Questions */}
        <FrequentlyAskedQuestions></FrequentlyAskedQuestions>
        {/* App Promotion Section */}
        <AppPromoSection></AppPromoSection>
        <Contacts />
        <div className="h-inherit w-full">
          <img src={Brands} alt="Brands" />
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};
