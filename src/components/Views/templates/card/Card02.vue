<template>
  <section class="box-border min-h-screen p-6 flex flex-col items-center justify-center">
    <div class="max-w-xs pb-6 rounded-b-xl shadow-lg">
      <header>
        <img
          class="rounded-t-xl"
          src="https://source.unsplash.com/164_6wVEHfI/500x400"
          alt="nike running shoes"
        />
      </header>

      <main class="px-3 py-5">
        <div class="flex mb-1">
          <span class="h-6 flex items-center sm:h-7 mr-2">
            <svg class="flex-shrink-0 h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div class="flex mb-1">
          <span class="h-6 flex items-center sm:h-7 mr-2">
            <svg class="flex-shrink-0 h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          <p>Vestibulum quis libero quam.</p>
        </div>

        <div class="flex">
          <span class="h-6 flex items-center sm:h-7 mr-2">
            <svg class="flex-shrink-0 h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          <p>Aenean sollicitudin nulla at massa mollis.</p>
        </div>
      </main>

      <footer class="flex justify-end mt-6 mr-6">
        <button
          class="
            transition-all
            transform
            uppercase
            text-lg
            font-bold
            text-white
            bg-red-600
            px-5
            py-3
            rounded
            focus:outline-none
            hover:bg-red-500 hover:scale-105
          "
          >Buy now</button
        >
      </footer>
    </div>
  </section>
</template>
