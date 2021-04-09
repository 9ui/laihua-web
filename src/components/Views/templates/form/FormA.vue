<template>
  <div class="max-w-screen-lg mx-auto my-10">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">信息</h3>
          <p class="mt-1 text-sm text-gray-600"> 此信息将公开显示，因此请谨慎分享 </p>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 py-5 space-y-6 bg-white sm:p-6">
              <div class="grid grid-cols-3 gap-6">
                <div class="col-span-3 sm:col-span-2">
                  <label for="company_website" class="block text-sm font-medium text-gray-700">
                    网站
                  </label>
                  <div class="flex mt-1 rounded-md shadow-sm">
                    <span
                      class="inline-flex items-center px-3 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50"
                    >
                      http://
                    </span>
                    <input
                      id="company_website"
                      type="text"
                      name="company_website"
                      class="flex-1 block w-full border-gray-300 rounded-none focus:ring-indigo-500 focus:border-indigo-500 rounded-r-md sm:text-sm"
                      placeholder="www.example.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label for="about" class="block text-sm font-medium text-gray-700"> 关于 </label>
                <div class="mt-1">
                  <textarea
                    id="about"
                    name="about"
                    rows="3"
                    class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="you@example.com"
                  ></textarea>
                </div>
                <p class="mt-2 text-sm text-gray-500"> 您的个人资料的简短说明。 URL是超链接的 </p>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700"> Photo </label>
                <div class="flex items-center mt-1">
                  <span class="inline-block w-12 h-12 overflow-hidden bg-gray-100 rounded-full">
                    <svg
                      class="w-full h-full text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </span>
                  <button
                    type="button"
                    class="px-3 py-2 ml-5 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Change
                  </button>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700"> Cover photo </label>
                <div
                  class="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md"
                >
                  <div class="space-y-1 text-center">
                    <svg
                      class="w-12 h-12 mx-auto text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                      <label
                        for="file-upload"
                        class="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>上传文件</span>
                        <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                      </label>
                      <p class="pl-1">或拖放</p>
                    </div>
                    <p class="text-xs text-gray-500"> PNG, JPG, GIF up to 10MB </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
              <button
                type="submit"
                class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                保存
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="hidden sm:block" aria-hidden="true">
      <div class="py-5">
        <div class="border-t border-gray-200"></div>
      </div>
    </div>

    <div class="mt-10 sm:mt-0">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">个人信息</h3>
            <p class="mt-1 text-sm text-gray-600"> 使用您可以接收邮件的永久地址。 </p>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div class="overflow-hidden shadow sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-3">
                    <label for="first_name" class="block text-sm font-medium text-gray-700"
                      >姓</label
                    >
                    <input
                      id="first_name"
                      type="text"
                      name="first_name"
                      autocomplete="given-name"
                      class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label for="last_name" class="block text-sm font-medium text-gray-700"
                      >名</label
                    >
                    <input
                      id="last_name"
                      type="text"
                      name="last_name"
                      autocomplete="family-name"
                      class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-4">
                    <label for="email_address" class="block text-sm font-medium text-gray-700"
                      >邮箱</label
                    >
                    <input
                      id="email_address"
                      type="text"
                      name="email_address"
                      autocomplete="email"
                      class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label for="country" class="block text-sm font-medium text-gray-700"
                      >国家 / 地区</label
                    >
                    <select
                      id="country"
                      name="country"
                      autocomplete="country"
                      class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option>中国</option>
                      <option>伊朗</option>
                      <option>巴基斯坦</option>
                    </select>
                  </div>

                  <div class="col-span-6">
                    <label for="street_address" class="block text-sm font-medium text-gray-700"
                      >街道地址</label
                    >
                    <input
                      id="street_address"
                      type="text"
                      name="street_address"
                      autocomplete="street-address"
                      class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label for="city" class="block text-sm font-medium text-gray-700">城市</label>
                    <input
                      id="city"
                      type="text"
                      name="city"
                      class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label for="state" class="block text-sm font-medium text-gray-700"
                      >市 / 省</label
                    >
                    <input
                      id="state"
                      type="text"
                      name="state"
                      class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label for="postal_code" class="block text-sm font-medium text-gray-700"
                      >ZIP / Postal</label
                    >
                    <input
                      id="postal_code"
                      type="text"
                      name="postal_code"
                      autocomplete="postal-code"
                      class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                <button
                  type="submit"
                  class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  保存
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="hidden sm:block" aria-hidden="true">
      <div class="py-5">
        <div class="border-t border-gray-200"></div>
      </div>
    </div>

    <div class="mt-10 sm:mt-0">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">通知事项</h3>
            <p class="mt-1 text-sm text-gray-600"> 确定您要接收的通信以及如何接收 </p>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div class="overflow-hidden shadow sm:rounded-md">
              <div class="px-4 py-5 space-y-6 bg-white sm:p-6">
                <fieldset>
                  <legend class="text-base font-medium text-gray-900">通过邮箱</legend>
                  <div class="mt-4 space-y-4">
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input
                          id="comments"
                          name="comments"
                          type="checkbox"
                          class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="comments" class="font-medium text-gray-700">注释</label>
                        <p class="text-gray-500">当有人发表评论时得到通知</p>
                      </div>
                    </div>
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input
                          id="candidates"
                          name="candidates"
                          type="checkbox"
                          class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="candidates" class="font-medium text-gray-700">Candidates</label>
                        <p class="text-gray-500">在候选人申请工作时得到通知。</p>
                      </div>
                    </div>
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input
                          id="offers"
                          name="offers"
                          type="checkbox"
                          class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="offers" class="font-medium text-gray-700">Offers</label>
                        <p class="text-gray-500">在候选人接受或拒绝要约时得到通知。</p>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <fieldset>
                  <div>
                    <legend class="text-base font-medium text-gray-900">推送通知</legend>
                    <p class="text-sm text-gray-500">这些通过短信发送到您的手机</p>
                  </div>
                  <div class="mt-4 space-y-4">
                    <div class="flex items-center">
                      <input
                        id="push_everything"
                        name="push_notifications"
                        type="radio"
                        class="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                      />
                      <label
                        for="push_everything"
                        class="block ml-3 text-sm font-medium text-gray-700"
                      >
                        所有
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="push_email"
                        name="push_notifications"
                        type="radio"
                        class="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                      />
                      <label for="push_email" class="block ml-3 text-sm font-medium text-gray-700">
                        仅自己
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="push_nothing"
                        name="push_notifications"
                        type="radio"
                        class="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                      />
                      <label
                        for="push_nothing"
                        class="block ml-3 text-sm font-medium text-gray-700"
                      >
                        不推送
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                <button
                  type="submit"
                  class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  保存
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
