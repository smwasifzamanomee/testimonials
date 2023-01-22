import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
const Testimonials = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
            Testimonials
          </h1>

          <div>
          <span className="inline-block w-[50px] h-[3px] bg-primary my-4"></span>
          </div>

          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            testimonials are evidence of customers talking about your product or
            service in their own words. At their best, they are authentic,
            descriptive, and specific so that future buyers can identify with
            the customer, the problem, and how they solved it.
          </p>

          <div className="flex mt-8 md:mt-0">
            <button
              title="left arrow"
              className="p-2 mx-3 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100"
            >
              {/* icon */}
              <AiOutlineLeft />
            </button>

            <button 
              title="right arrow"
              className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100"
            >
              {/* icon */}
              <AiOutlineRight />
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-4 gap-4">
          {/* 1st */}
          <div className="p-8 border rounded-lg dark:border-gray-700">
            <p className="leading-loose text-gray-500 dark:text-gray-400">
              “My traffic stream broke down in the middle of synchronisation and
              instead of my data i had a bunch of nonsense. Automatic backups
              didn't work- i was NOT happy. Until i met Tim from Support. Not
              only did he do a marvellous job calming me down, he also provided
              me with access to my backups within minutes of calling the support
              line. Never been happier with any of my partners! Cheers to”.
            </p>

            <div className="flex items-center mt-8 -mx-2">
              <img
                className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />

              <div className="mx-2">
                <h1 className="font-semibold text-gray-800 dark:text-white">
                  Robert
                </h1>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  CTO, Robert Consultency
                </span>
              </div>
            </div>
          </div>
          {/* 2nd */}
          <div className="p-8 bg-primary border border-transparent rounded-lg dark:bg-primary">
            <p className="leading-loose text-white">
              “I had but one encounter with the lovely staff over @cashmap. Time
              was pressing, so i might not have been the most exciting customer
              to talk to for Tim from Support. But he sure handled the situation
              incredibly well. I have no complaints. On the contrary: The
              response time to my initial message was impressive. Plus the
              technical understanding is beyond anything i ever witnessed.
              Serious tip of the hat.”
            </p>

            <div className="flex items-center mt-8 -mx-2">
              <img
                className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-blue-200"
                src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                alt=""
              />

              <div className="mx-2">
                <h1 className="font-semibold text-white">Jeny Doe</h1>
                <span className="text-sm text-blue-200">
                  CEO, Jeny Consultency
                </span>
              </div>
            </div>
          </div>
          {/* 3rd */}
          <div className="p-8 border rounded-lg dark:border-gray-700">
            <p className="leading-loose text-gray-500 dark:text-gray-400">
              “Now id say that i am not one to be easily impressed. But holy
              smokes did the people over make my day today. You better get a pay
              raise! I considered contacting the support back then or filing a
              report. But we all know how things go - i had other stuff to do.
              However i didn't notice that the automatic backup service had
              apparently been turned off in the process. So i was essentialy
              running on no security net at all. ”
            </p>

            <div className="flex items-center mt-8 -mx-2">
              <img
                className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div className="mx-2">
                <h1 className="font-semibold text-gray-800 dark:text-white">
                  Ema Watson{" "}
                </h1>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Marketing Manager at Stech
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;