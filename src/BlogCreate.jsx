import axios from "axios";
import { useState } from "react";

export function BlogCreate() {
  const [errors, setErrors] = useState([]);

  const handleCreatePost = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/posts.json", params)
      .then((response) => {
        window.location.href = "/posts";
      })
      .catch((error) => {
        setErrors(error.response.data.errors ? error.response.data.errors : ["Must Login!"]);
      });
  };
  return (
    <div className="w-screen h-auto min-h-screen">
      <p className="mt-20 text-center font-bold text-3xl">New Post</p>
      <div>
        <ul className="text-center mt-5">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-white p-8 lg:col-span-3 lg:p-12">
              <form className="space-y-4" onSubmit={handleCreatePost}>
                <div>
                  <label className="sr-only" for="title">
                    Title
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm focus-within:border-sky-400 focus-within:ring-1 focus-within:ring-sky-400"
                    placeholder="Title"
                    type="text"
                    id="title"
                    name="title"
                  />
                </div>

                <div>
                  <label className="sr-only" for="image">
                    Image Url
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm focus-within:border-sky-400 focus-within:ring-1 focus-within:ring-sky-400"
                    placeholder="Image Url"
                    type="text"
                    id="image"
                    name="image"
                  />
                </div>

                <div>
                  <label className="sr-only" for="body">
                    Body
                  </label>

                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm focus-within:border-sky-400 focus-within:ring-1 focus-within:ring-sky-400"
                    placeholder="Body"
                    rows="8"
                    id="body"
                    name="body"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-sky-400 px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Post Blog
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
