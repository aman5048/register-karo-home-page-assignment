import React from "react";

const Steps = () => {
  const steps = [
    {
      id: 1,
      icon: "📝", // Use appropriate icons/images
      text: "Fill up Application Form",
      bgColor: "bg-red-400",
    },
    {
      id: 2,
      icon: "💳",
      text: "Make Online Payment",
      bgColor: "bg-green-400",
    },
    {
      id: 3,
      icon: "👨‍💻",
      text: "Executive will Process Application",
      bgColor: "bg-orange-400",
    },
    {
      id: 4,
      icon: "✉️",
      text: "Get Confirm Mail",
      bgColor: "bg-gray-400",
    },
  ];

  return (
    <div className="bg-[#FFA229] py-8">
      <div className="container mx-auto flex flex-wrap items-center justify-around gap-8 lg:flex-nowrap">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex flex-row items-center space-x-2 text-center "
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full ${step.bgColor} text-white text-xl`}
            >
              {step.icon}
            </div>
            <p className="text-sm font-medium text-black">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Steps };
