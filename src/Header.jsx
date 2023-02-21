import blogr from "./assets/blogr.png";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header aria-label="Site Header" class="bg-gray-50">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex-1 md:flex md:items-center md:gap-12">
            <a class="block" href="/">
              <span class="sr-only">Home</span>
              <img src={blogr} className="w-10 h-10" />
            </a>
          </div>

          <div class="md:flex md:items-center md:gap-12">
            <nav aria-label="Site Nav" class="hidden md:block">
              <ul class="flex items-center gap-6 text-sm">
                <li>
                  <a class="text-gray-500 transition hover:text-gray-500/75" href="/about">
                    About
                  </a>
                </li>

                <li>
                  <a class="text-gray-500 transition hover:text-gray-500/75" href="/blog">
                    Blog
                  </a>
                </li>
              </ul>
            </nav>

            {localStorage.jwt === undefined ? (
              <>
                <div class="flex items-center gap-4">
                  <div class="sm:flex sm:gap-4">
                    <a class="rounded-md bg-sky-600 px-5 py-2.5 text-sm font-medium text-white shadow" href="/login">
                      Login
                    </a>

                    <div class="hidden sm:flex">
                      <a class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-sky-600" href="/signup">
                        Register
                      </a>
                    </div>
                  </div>

                  <div class="block md:hidden">
                    <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <LogoutLink />
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
