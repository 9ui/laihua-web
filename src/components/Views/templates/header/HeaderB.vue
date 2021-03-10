<template>
  <header class="text-gray-600 bg-black body-font">
    <div class="container flex flex-col flex-wrap items-center py-5 mx-auto md:flex-row">
      <a class="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
        <img
          class="h-5 cursor-pointer w-30"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAAwCAMAAAAYYwcUAAACo1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+Hen5WAAAA4HRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyEiIyQmJygpKistLi8wMTIzNDU3ODo7PD0+P0BBQkNERUZHSEpLTE1OT1BRUlNUVVZXWFlaW11fYWNkZmdoaWtsbXByc3R1dnd4eXp8fX5/gIGCg4WGh4mKi4yNjo+QkZKTlJWWmJmam5yen6Cio6Slpqeoqqusra6vsLGytLW3uLm6u72+v8DBwsPExcfIycrLzM3P0NHS1NXX2Nrb3N3e3+Dh4uPk5ebn6Onq6+zt7u/w8fP09fb3+Pn6+/z9/ns/otcAAAclSURBVGje7Zr5XxRlHMdnOZYrRcgUCE1CBTVTUSRFxURLLbVUwsIrT7xATc00s8MzjzSRDgvyqiRROczCYzMj80CUFENZ9vlTema+8xwz88zOqMOr7SXfX/Z5vvPsZ5737jzP8/1+dyUUiNZbUu2M49JSYAOvK3LaAhy4FawNOJCBw2Niwh8r4EUILXIS+HyeYtqtsRycecuo5wdw/IlKoVFOr6xQ+mtRab5ii1s4nav5O2i7WNXc9B8Dl4HrW83Np6kDXbXEs4kcGWv04wcp/Qwyqz68zufSGNoeoGrG3ncWOCzfj71sD9jbkah9ZAZcQQdna4Fn8EKzGfAfLqJ52FngaH/rZI894KNUbbgZMP3q0eta4N28UD8G/AHVnBV4wG9TtZAbJsD/6B5/Cvwbp3M7mAFnUs2EFv/AOdqnslQGTuU9czTArhg/FmUL2NeFye0QA0ew0bM0wPG89iGJAl8PZprl/oHLDJcWSVP5boPTm1YFN3ScGDiBnw0PPJHXXs6At3OaCwINeAk3NOK2ELiXGfAGXnskAx7DaSb7Bx6QpbHt8i3ieE+mAKm/0Z6wDZyieCLhQrEQ+Dn9x0OAT/KbfTsK/HcYr3nGatMKw8svwrhpYW8H+7FUhl3gGvAshDnmCIEz2PBlPHAkf8hWSxR4H7y9EF6WWwHHX0Po91g9sLy9r20F4FXgqRwOu/49C+CFPPBQXvpjBvyaMij0Vrzy2tfyWHoR7+QlLi1wGp5JeagpcM0k2epQnfJa9QDAaYqjU8u7cOU7EfBgNnwmD7yEl55CgZtgPQ1DuSDjsTyHV9HFQoBjLyJ08xnzbQlALqFLhMcusBoS5aLTcCVPBJzKBHJ54BJeuisF/kZN7UkgsM4SOBjv1d5hHLALz9A3TnpA4OSsrDgr4A/BUYR88PzFtQiAw6/T8YM54KB6TrlWosBqbF6D6oKURrp1pJVYh3OPeAa8GA/ZID0o8BqEploBw9INvkm+O+knUaTVdV2NVwlSDoVwwL20mQMB9j4J76HrJegv69BytA+hY8EEOBPf7ZS7NYBvBNNdSX3+5omA5bOjR9qQFHJMAHCeIUBVgI/AmJm4uRSam23E0is9Hs8sFbj9cY+nppvUGsCfQn+NHA7C85dkAqwxAN7JK/enwLPZPdTbjXQ6H5aV3Tjbrkf1JL+3CTwW+qe5FPa0beAT2sxBBfYlQtB2F7ebo9UDygTYmN0akwdsYeS+7piYdgQ42ngOWwPfhvpRgo+LMQttA5/nhA9LBPgkDMlW3K9CZ5cJsDDZ08XS2KLJfaeqBA8NvB+6bymdYxKNI+0B8zFjAQXOhyEbFfcW6LzSCsBBSUlJl9HlJNmO2gWeAt2vlM59VfeCEDi8nQG4lMsxe1Dg7lQFG+wpUmSjGDhESQ9GT2K2hzzS8+W1mYM9E7OyQkTAD7Np3VMR20P+rCax7xmBO23FJ4v33N4cNw+8mukWSwT4Fxb6y6aWer5wZtN6VOBSoWq6EbiYvP8ID9ztCnE3JlPgd4SabwQGcJ5QFccJOmD3HSoQw4eWXVJyP6lqRnAb2SYj9LxQs8N9K+Ce+OkdSIDTcedZ54FbOos/x8164O5MoI8KvFypCN0oKchOyJj3EnnnNHTR5Ls5aAGcjKPXhhQC3BsXImoTHQcuM5ncKD3wCH3amQERi3L0+M6OoO8sRO+baE73D/wUPuK8o9kjPR4flGei/QBfVA7oW+iW8lpjD3iuyeRCG3TArL6OhqjAlcrAOtm1jdagpS/RCyaacS3+gCPkGGYBv4aXyhuG2xxYWACwAoZotWcls15qtVkHPM74DXtjSZC8l1UoQ+uvQnw60UPtglrKOO4H2PUZ9uzSbFqufdTlBHBf+fgbCu053OUF4Jpg/g33I8lGHuT46OsQNp+xJNDgI6vJ4JrrB3gFdpwI0+7SkVXIuGET4CSjhfsF5q1EW1qWLWq9FjibjUglwGdDlA39IPfYucrQKGhc4TR3SiwpEQPn4AVbm6A/lhKv4v1hghjYxGwBh93hLt9Vi4ejtMDp2roGpJPKvHIiOak81OA2/sR2DZ5yqdoMeCD+XaMxzXgOD8JVrcb+jgNnIl1tWVmMWuAUNqAjBfaO1yllNaHd0Jqv0RwIzgIT4ET8OPimiAKPXLmQ8rTTwKs189DWRQlwZzbAzcqYzXOD+I1nRhNCE/hKILGV4OwtBo6sZqVTfaS1Xl7bkXpgv7+nWQNXaMb/LAQOatb97qHWbX99M4qkFpNOySsCuuF3NZpV6phzImCXHGUfCBIDB8vpyR7XowBf2aKzrdrz0beNv1iPqqHRRPN86B8g/eaKzQX5hZu+h2yoHv43pIuqfPvBfUkEPB2fXD+2N4ulo3Gtx5PLZWlFRSulqMNmdqSyMvtx/49HG3Db35ba/pj2/wO+GYiWSmZXsMVpkwLbnP/78L+5d/QQnpL0dAAAAABJRU5ErkJggg=="
          alt=""
        />
      </a>
      <nav
        class="flex flex-wrap items-center justify-center text-base md:mr-auto md:ml-10 md:py-1 md:pl-4 dark:text-white"
      >
        <a class="mr-10 text-sm text-gray-300 cursor-pointer hover:text-white">工作台</a>
        <a
          class="relative inline-block mr-10 text-sm text-left text-gray-300 cursor-pointer hover:text-white"
        >
          <span @click="visible = true" @blur="visible = false" @mouseenter="visible = true"
            >产品</span
          >
          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-to-class="scale-100 opacity-100"
            enter-from-class="scale-95 opacity-0"
            leave-active-class="transition duration-75 ease-in"
            leave-to-class="scale-95 opacity-0"
            leave-from-class="scale-100 opacity-100"
          >
            <div
              v-show="visible"
              class="absolute w-56 mt-6 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg -right-24 ring-1 ring-black ring-opacity-5"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
              @mouseleave="visible = false"
            >
              <div class="py-1">
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  >Edit</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  >Duplicate</a
                >
              </div>
              <div class="py-1">
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  >Edit</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  >Duplicate</a
                >
              </div>
              <div class="py-1">
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  >Edit</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  >Duplicate</a
                >
              </div>
            </div>
          </transition>
        </a>
        <a class="mr-10 text-sm text-gray-300 cursor-pointer hover:text-white">发现</a>
        <a class="mr-10 text-sm text-gray-300 cursor-pointer hover:text-white">解决方案</a>
        <a class="mr-10 text-sm text-gray-300 cursor-pointer hover:text-white">会员定价</a>
        <a class="mr-10 text-sm text-gray-300 cursor-pointer hover:text-white">大赛</a>
        <a class="mr-10 text-sm text-gray-300 cursor-pointer hover:text-white">视频学院</a>
      </nav>
      <div class="inline-flex ml-5 lg:w-2/5 lg:justify-end lg:ml-0">
        <button
          class="inline-flex items-center px-5 py-2 mt-4 text-base bg-gray-100 border-0 focus:outline-none hover:bg-gray-200 rounded-3xl md:mt-0"
          >登录/注册
        </button>
      </div>
    </div>
  </header>
</template>
<script>
  import { defineComponent } from '@vue/composition-api';
  export default defineComponent({
    data() {
      return {
        visible: true,
      };
    },
    methods: {
      blur() {
        console.log('被执行了');
      },
    },
  });
</script>
