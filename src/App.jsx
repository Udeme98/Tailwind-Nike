export default function App() {
  document.addEventListener("DOMContentLoaded", () => {
    const toggleDark = document.getElementById("toggleDark");
    toggleDark.addEventListener("click", function () {
      if (document.documentElement.classList.includes("dark")) {
        document.documentElement.classList.removes("dark");
      } else {
        document.documentElement.classList.add("dark");
      }
      alert("click");
    });
  });

  return (
    <div className="m-4 border-solid border-slate-300 border p-4 rounded-lg shadow-md dark:bg-black">
      <h1 className="text-2xl mb-3 text-slate-700">Title</h1>
      <p className="text-slate-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quia
        officia vitae eos eveniet veniam molestias voluptatem voluptas, fugit
        dignissimos sequi ut! Amet recusandae veniam magnam, laborum at
        praesentium provident.
      </p>

      <button
        id="toggleDark"
        onclick="document.body.classList.toggle('dark')"
        className="bg-blue-300 my-5 px-4 py-2 rounded-md text-sm text-slate-600"
      >
        Toggle Darkmode
      </button>
    </div>
  );
}
