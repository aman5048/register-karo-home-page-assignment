import React from "react";
import User from "../assets/user.png";
import Star from "../assets/Vector-star.png";
const testimonials = [
  {
    id: 1,
    name: "Chris",
    position: "President and CEO",
    company: "PrintReach",
    country: "USA",
    rating: 5,
    review:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: { User },
  },
  {
    id: 2,
    name: "Sarah",
    position: "Marketing Manager",
    company: "BrightFuture",
    country: "UK",
    rating: 4,
    review:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: { User },
  },
  {
    id: 3,
    name: "John",
    position: "CTO",
    company: "TechCorp",
    country: "Canada",
    rating: 5,
    review:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: { User },
  },
];

export const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-blue-900 text-white py-16 px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          What people say about us
        </h2>
        <div className="relative max-w-3xl mx-auto">
          {/* Testimonial Content */}
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8">
            <div className=" flex gap-2 mb-4 text-yellow-400">
              {Array(testimonials[currentIndex].rating)
                .fill(0)
                .map((_, i) => (
                  <img key={i} src={Star} alt="star" />
                ))}
            </div>
            <p className="text-gray-600 mb-6">
              {testimonials[currentIndex].review}
            </p>
            <div className="flex items-center gap-4">
              <img
                src={User}
                alt={testimonials[currentIndex].name}
                className="rounded-full w-16 h-16"
              />
              <div>
                <h3 className="font-bold">{testimonials[currentIndex].name}</h3>
                <p className="text-sm text-gray-500">
                  {testimonials[currentIndex].position},{" "}
                  {testimonials[currentIndex].company},{" "}
                  {testimonials[currentIndex].country}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-orange-500 text-white rounded-full p-2 hover:bg-orange-600"
          >
            <span className="material-icons">{"<"}</span>
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-orange-500 text-white rounded-full p-2 hover:bg-orange-600"
          >
            <span className="material-icons">{">"}</span>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-orange-500" : "bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};
