<template>
  <div class="min-h-screen bg-gray-300 max-w-full flex justify-center items-center">
    <div class="bg-white p-6 rounded-xl shadow-xl">
      <h3 class="text-lg font-semibold relative">
        Share file
        <button
          class="w-7 h-7 border rounded-full text-gray-500 flex items-center justify-center absolute top-0 right-0 hover:bg-gray-500 hover:text-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg> </button
      ></h3>
      <form class="my-4" action="#">
        <label for="email">Share with team members</label>
        <input
          id="email"
          class="border rounded w-full p-2 mt-1"
          placeholder="Enter an email or name"
          type="email"
        />
      </form>
      <div class="flex justify-between text-sm mt-8 mb-4">
        <p>Anyone with the link <strong>can view</strong> this file.</p>
        <a class="text-purple-500 underline inline-block ml-auto" href="#">Create link</a>
      </div>
      <button
        class="bg-purple-500 text-white text-sm px-6 py-2 rounded-3xl mt-4 hover:bg-purple-700"
        >Share file</button
      >
    </div>
  </div>
</template>
