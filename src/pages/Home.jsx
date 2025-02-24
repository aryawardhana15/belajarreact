import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center p-6">
      <h1 className="text-5xl font-bold mb-4">welcome to Website Belajar</h1>
      <p className="text-lg max-w-2xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quas ad
        blanditiis ut magnam eligendi dolorum rerum culpa veniam unde vitae
        facere perferendis corporis, veritatis neque nemo cumque distinctio qui.
      </p>
      <Link to="/about">
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg transition duration-300 hover:bg-blue-100">
          about
        </button>
      </Link>
      <section>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col  bg-white text-black p-6 rounded-lg shadow-lg">halo</div>
          <div className="flex flex-col  bg-white p-6 rounded-lg shadow-lg"></div>
          <div className="flex flex-col  bg-white p-6 rounded-lg shadow-lg"></div>
          <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg"></div>
        </div>
      </section>
      
    </div>
  );
}
// bagian yang belajar
// export const About = () => {
//   return (
//     <>
//       <section className='about py-16'>
//         <div className='container'>
//           <div className='heading text-center py-12 '>
//             <h1 className='text-3xl font-semibold text-black'> Kenapa harus Smile Kids </h1>
//             <span className='text-sm mt-2 block'>you don't have to struggle alone, you've got our assistance and help.</span>
//           </div>
//           <div className='grid grid-cols-4 gap-5 mt-5 md:grid-cols-2  '>
//           <AboutCard color='bg-[#2D69F0]'  title='Pengasuhan Berkualitas' desc="Membantu anak tumbuh dengan pengalaman belajar dengan lingkungan yang nyaman." /> 
//           <AboutCard color='bg-[#DD246E]'  title='Kegiatan Edukatif' desc="Menyediakan rencana kegiatan yang mendukung tumbuh dan kembang anak secara holistik." />
//           <AboutCard color='bg-[#8007E6]'  title='Fasilitas Nyaman' desc="Lingkungan yang aman dan nyaman untuk anak-anak belajar dan bermain." />
//           <AboutCard color='bg-[#0CAE74]'  title='Pendamping Profesional' desc="Guru dan pengasuh terlatih untuk memberikan perhatian penuh pada setiap anak." />
//           </div>
//         </div>
//       </section>
//       <AboutContent />
//     </>
//   )
// }

// export const AboutContent = (props) => {
//   return (
//     <div className={`box shadow-md p-5 py-8 rounded-md text-white  cursor-pointer transition ease-in-out delay-150 hover:-translate-y-4 duration-300 `}>
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-6">
//     <p className='text-sm'>{props.desc}</p>
//     </div>
//     </div>
//   )
// }
