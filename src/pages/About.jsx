import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Lorem ipsum dolor sit amet, consectetur </h1>
      <p className="text-lg max-w-3xl text-center">
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat dignissimos itaque molestias at labore cumque eaque corrupti consequuntur reiciendis blanditiis, illo minima, officiis temporibus autem optio! Totam ad sequi fugit!
      </p>
      <Link to="/">
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition duration-300 hover:bg-blue-700">
          Kembali ke Home
        </button>
      </Link>
    </div>
  );
}
