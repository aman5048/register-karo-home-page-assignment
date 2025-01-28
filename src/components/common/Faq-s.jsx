import RightArrow from "../assets/Right-Arrow.png";

export const FrequentlyAskedQuestions = () => {
  const questions = [
    {
      id: 1,
      question: "What is your refund policy?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptate.",
    },
    {
      id: 2,
      question: "What is your refund policy?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptate.",
    },
    {
      id: 3,
      question: "What is your refund policy?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptate.",
    },
    {
      id: 4,
      question: "What is your refund policy?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptate.",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto gap-4 my-8">
      <div className="flex flex-col items-center justify-center w-full mx-auto">
        <p className="text-sm text-orange-500 font-semibold uppercase">FAQ</p>
        <h3 className="text-3xl font-bold text-gray-800">
          Frequently Asked Questions
        </h3>
      </div>
      <div className="container flex flex-col items-center justify-center w-full mx-auto px-4 md:px-18 lg:px-32">
        <ul className="flex flex-col items-center justify-center w-full mx-auto">
          {questions.map((question) => {
            return (
              <li
                key={question.id}
                className="flex flex-row mb-2 border-gray-400 w-full"
              >
                <div className="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                  <div className="flex-1 pl-1 md:mr-16 w-full">
                    <div className="font-medium dark:text-white">
                      {question.question}
                    </div>
                  </div>
                  <button className="flex justify-end w-24 text-right">
                    <svg
                      width="12"
                      fill="currentColor"
                      height="12"
                      className="text-gray-500 hover:text-gray-800 dark:hover:text-white dark:text-gray-200"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                    </svg>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <button className=" flex items-center gap-2 bg-[#1C4670] text-white px-6 py-2 rounded-lg">
          <p>Show More </p>
          <span>
            <img src={RightArrow} alt="Right Arrow" />
          </span>
        </button>
      </div>
    </div>
  );
};
