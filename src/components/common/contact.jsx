export const Contacts = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#FF9900] to-[#0099CC]">
        <div className=" flex flex-col p-8 gap-4 md:p-12 lg:p-24 justify-center item-center text-center justify-item-center text-white">
          <p className="text-sm">Hello</p>
          <h2 className="font-bold text-3xl">
            Welcome To your New Digital Reality.Now.
          </h2>

          <form className="max-w-md mx-auto">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative w-full">
              <input
                type="search"
                id="default-search"
                className="block min-w-70 w-80  max-w-90 p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your Email"
              />
              <button
                type="submit"
                className="text-white absolute end-0 bottom-0 bg-[#FFA229] h-full rounded-r-lg px-3 "
              >
                Search
              </button>
            </div>
          </form>
          <div className="flex flex-col md:flex-row  justify-center gap-8 ">
            <div>
              <span>Instant Results</span>
            </div>
            <div>
              <span>User Friendly Interface</span>
            </div>
            <div>
              <span>Personalized Customisation</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
