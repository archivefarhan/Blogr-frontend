import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function BlogUpdatePage() {
  const [post, setPost] = useState({});
  const params = useParams();

  const handleShowPost = () => {
    axios.get(`http://localhost:3000/posts/${params.id}.json`).then((response) => {
      console.log(response.data);
      setPost(response.data);
    });
  };

  const handleUpdatePost = (event, successCallback) => {
    event.preventDefault();
    let formParams = new FormData(event.target);
    axios.patch(`http://localhost:3000/posts/${params.id}.json`, formParams).then((response) => {
      console.log(response);
      window.location.href = "/posts";
      successCallback();
    });
  };

  const handleDestoryPost = () => {
    axios.delete(`http://localhost:3000/posts/${params.id}.json`).then((response) => {
      window.location.href = "/posts";
    });
  };

  useEffect(handleShowPost, []);

  return (
    <div className="w-screen h-auto min-h-screen">
      <div className="mt-5 grid grid-cols-1 place-items-center mx-auto">
        <p className="mb-2 mt-20 font-black text-2xl">{post.title}</p>
        <img src={post.image} className="w-auto h-96 mt-4" />
        <p className="mt-10 text-center w-1/2">{post.body}</p>
      </div>

      <div>
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-white p-8 lg:col-span-3 lg:p-12">
              <form className="space-y-4" onSubmit={handleUpdatePost}>
                <div>
                  <label className="sr-only" for="title">
                    Title
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm focus-within:border-sky-400 focus-within:ring-1 focus-within:ring-sky-400"
                    defaultValue={post.title}
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
                    defaultValue={post.image}
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
                    defaultValue={post.body}
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
                    Update Blog
                  </button>
                </div>
              </form>
              <button
                onClick={handleDestoryPost}
                className="mt-4 inline-block w-full rounded-lg bg-red-800 px-5 py-3 font-medium text-white sm:w-auto"
              >
                Delete Blog
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
