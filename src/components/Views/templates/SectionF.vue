<template>
  <section class="container mx-auto py-40">
    <div class="flex flex-wrap">
      <div class="pt-6 lg:pt-16 pb-6 w-full lg:w-1/2">
        <div class="max-w-md mx-auto">
          <div class="mb-6 lg:mb-20 w-full px-3 flex items-center justify-between"
            ><a class="text-3xl font-bold leading-none" href="#"
              ><img
                class="h-12"
                src="atis-assets/logo/atis/atis-mono-black.svg"
                alt=""
                width="auto" /></a
            ><a
              class="py-2 px-6 text-xs rounded-l-xl rounded-t-xl bg-green-100 hover:bg-green-200 text-green-600 font-bold transition duration-200"
              href="#"
              >Sign In</a
            ></div
          >
          <div>
            <div class="mb-6 px-3">
              <span class="text-gray-500">Sign Up</span>
              <h3 class="text-2xl font-bold">Create an account</h3>
            </div>
            <form action="">
              <div class="flex flex-wrap">
                <div class="mb-3 w-full lg:w-1/2 px-2">
                  <input
                    class="w-full p-4 text-xs bg-gray-50 outline-none rounded"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div class="mb-3 w-full lg:w-1/2 px-2">
                  <input
                    class="w-full p-4 text-xs bg-gray-50 outline-none rounded"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div class="mb-3 flex p-4 mx-2 bg-gray-50 rounded">
                <input
                  class="w-full text-xs bg-gray-50 outline-none"
                  type="email"
                  placeholder="name@email.com"
                />
                <svg
                  class="h-6 w-6 ml-4 my-auto text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  ></path>
                </svg>
              </div>
              <div class="mb-6 flex p-4 mx-2 bg-gray-50 rounded">
                <input
                  class="w-full text-xs bg-gray-50 outline-none"
                  type="password"
                  placeholder="Enter your password"
                />
                <button>
                  <svg
                    class="h-6 w-6 ml-4 my-auto text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="px-3 text-center">
                <button
                  class="mb-2 w-full py-4 bg-green-600 hover:bg-green-700 rounded text-sm font-bold text-gray-50 transition duration-200"
                  >Sign Up</button
                >
                <span class="text-gray-400 text-xs">
                  <span>Already have an account?</span>
                  <a class="text-green-600 hover:underline" href="#">Sign In</a>
                </span>
                <p class="mt-16 text-xs text-gray-400"
                  ><a class="underline hover:text-gray-500" href="#">Policy privacy</a> and
                  <a class="underline hover:text-gray-500" href="#">Terms of Use</a></p
                >
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="hidden lg:block relative w-full lg:w-1/2 bg-green-600">
        <div class="absolute bottom-0 inset-x-0 mx-auto mb-12 max-w-xl text-center z-10">
          <img
            class="lg:max-w-xl mx-auto"
            src="atis-assets/illustrations/pablo-coming-soon-dark-mono.png"
            alt=""
          />
          <h2 class="mb-2 text-2xl text-white font-bold"
            >So much more than a business analytics tool</h2
          >
          <div class="max-w-lg mx-auto">
            <p class="mb-6 text-gray-50 leading-loose"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl
              sodales egestas lobortis.</p
            >
          </div>
          <a
            class="inline-block py-2 px-6 leading-loose rounded-t-xl rounded-l-xl bg-white hover:bg-gray-500 text-gray-900 hover:text-white transition duration-200 font-bold"
            href="#"
            >Get Started</a
          >
          <div class="mt-12 flex justify-center space-x-3">
            <button class="p-1 bg-green-500 rounded-full"></button>
            <button class="p-1 bg-green-500 rounded-full"></button>
            <button class="p-1 bg-white rounded-full"></button>
            <button class="p-1 bg-green-500 rounded-full"></button>
          </div>
        </div>
      </div>
      <div class="lg:hidden bg-green-600 w-full">
        <div class="relative w-full">
          <img
            class="relative mx-auto max-w-sm mt-4 mb-4 block"
            src="atis-assets/illustrations/pablo-coming-soon-dark-mono.png"
            alt=""
          />
          <div class="flex justify-center space-x-3">
            <button class="p-1 bg-green-500 rounded-full"></button>
            <button class="p-1 bg-green-500 rounded-full"></button>
            <button class="p-1 bg-white rounded-full"></button>
            <button class="p-1 bg-green-500 rounded-full"></button>
          </div>
        </div>
        <div class="py-10 px-3 text-center z-10">
          <h2 class="mb-2 text-2xl text-white font-bold"
            >So much more than a business analytics tool</h2
          >
          <p class="mb-6 text-gray-50 leading-loose"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl
            sodales egestas lobortis.</p
          >
          <a
            class="py-2 px-6 rounded-t-xl rounded-l-xl l bg-white hover:bg-gray-500 text-gray-900 hover:text-white transition duration-200 font-bold"
            href="#"
            >Get Started</a
          >
        </div>
      </div>
    </div>
  </section>
</template>
