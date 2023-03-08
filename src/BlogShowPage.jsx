import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function BlogShowPage() {
  const [post, setPost] = useState({});
  const params = useParams();

  const handleShowPost = () => {
    axios.get(`http://localhost:3000/posts/${params.id}.json`).then((response) => {
      console.log(response.data);
      setPost(response.data);
    });
  };

  useEffect(handleShowPost, []);

  return (
    <div className="w-screen h-auto min-h-screen">
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div class="max-w-3xl">
            <h2 class="text-3xl text-center font-bold sm:text-4xl">{post.title}</h2>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <img alt="Party" src={post.image} class="absolute inset-0 h-full w-full object-cover" />
            </div>

            <div class="lg:py-16">
              <article class="space-y-4 text-gray-600">
                <p>{post.body}</p>
              </article>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-center w-1/2 mx-auto mt-5">
            <a
              class="relative font-medium text-sky-400 text-center before:absolute before:-bottom-1 before:h-0.5 before:w-1/2 before:origin-left before:scale-x-0 before:bg-sky-400 before:transition hover:before:scale-100"
              href={`/posts/${post.id}/edit`}
            >
              Edit
            </a>

            <a
              class="relative font-medium text-sky-400 text-center before:absolute before:-bottom-1 before:h-0.5 before:w-1/2 before:origin-right before:scale-x-0 before:bg-sky-400 before:transition hover:before:scale-100"
              href="/posts"
            >
              Back
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
