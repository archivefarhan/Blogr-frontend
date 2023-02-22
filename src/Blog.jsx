export function Blog() {
  return (
    <div className="w-screen h-auto min-h-screen">
      <p className="mt-20 text-center font-black text-4xl">Articles</p>
      <br />
      <div className="mt-20 grid grid-cols-3 auto-rows-auto p-3 gap-5 ml-20 mr-20">
        <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
          <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-sky-200 via-sky-600 to-sky-300"></span>

          <div class="sm:flex sm:justify-between sm:gap-4">
            <div>
              <h3 class="text-lg font-bold text-gray-900 sm:text-xl">Title</h3>

              <p class="mt-1 text-xs font-medium text-gray-600">By User</p>
            </div>
          </div>

          <dl class="mt-6 flex gap-4 sm:gap-6">
            <div class="flex flex-col-reverse">
              <a href="/post/:id" className="rounded-md bg-sky-400 text-white text-sm w-24 text-center">
                Read Article
              </a>
            </div>
            <br />
            <div class="flex flex-col-reverse">
              <dt class="text-sm font-medium text-gray-600">Published</dt>
              <dd class="text-xs text-gray-500">31st June, 2021</dd>
            </div>
          </dl>
        </div>
        <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
          <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-sky-200 via-sky-600 to-sky-300"></span>

          <div class="sm:flex sm:justify-between sm:gap-4">
            <div>
              <h3 class="text-lg font-bold text-gray-900 sm:text-xl">Title</h3>

              <p class="mt-1 text-xs font-medium text-gray-600">By User</p>
            </div>
          </div>

          <dl class="mt-6 flex gap-4 sm:gap-6">
            <div class="flex flex-col-reverse">
              <a href="/post/:id" className="rounded-md bg-sky-400 text-white text-sm w-24 text-center">
                Read Article
              </a>
            </div>
            <br />
            <div class="flex flex-col-reverse">
              <dt class="text-sm font-medium text-gray-600">Published</dt>
              <dd class="text-xs text-gray-500">31st June, 2021</dd>
            </div>
          </dl>
        </div>
        <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
          <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-sky-200 via-sky-600 to-sky-300"></span>

          <div class="sm:flex sm:justify-between sm:gap-4">
            <div>
              <h3 class="text-lg font-bold text-gray-900 sm:text-xl">Title</h3>

              <p class="mt-1 text-xs font-medium text-gray-600">By User</p>
            </div>
          </div>

          <dl class="mt-6 flex gap-4 sm:gap-6">
            <div class="flex flex-col-reverse">
              <a href="/post/:id" className="rounded-md bg-sky-400 text-white text-sm w-24 text-center">
                Read Article
              </a>
            </div>
            <br />
            <div class="flex flex-col-reverse">
              <dt class="text-sm font-medium text-gray-600">Published</dt>
              <dd class="text-xs text-gray-500">31st June, 2021</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
