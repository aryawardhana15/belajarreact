import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center p-6">
      <h1 className="text-5xl font-bold mb-4">welcome to Website Belajar</h1>
      <p className="text-lg max-w-2xl">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quas ad blanditiis ut magnam eligendi dolorum rerum culpa veniam unde vitae facere perferendis corporis, veritatis neque nemo cumque distinctio qui.
      </p>
      <Link to="/about">
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg transition duration-300 hover:bg-blue-100">
          about
        </button>
      </Link>
    </div>
  );
}
