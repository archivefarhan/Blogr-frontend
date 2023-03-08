import blogr from "./assets/blogr.png";

export function Home() {
  return (
    <div className="w-screen h-auto min-h-screen">
      <img src={blogr} alt="logo" className="mx-auto mt-28" />
      <p className="text-9xl font-black text-center mt-10">BLOGR</p>
    </div>
  );
}
