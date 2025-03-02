import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Daftarkan plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const cardRefs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Pastikan elemen ada sebelum menjalankan animasi
    if (titleRef.current && subtitleRef.current && buttonRef.current && cardRefs.current.length > 0 && sectionRef.current) {
      // Animasi untuk judul
      gsap.from(titleRef.current, {
        opacity: 0,
        x: -100,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
      });

      // Animasi untuk subtitle
      gsap.from(subtitleRef.current, {
        opacity: 0,
        x: 100,
        duration: 1.5,
        delay: 0.5,
        ease: "bounce.out",
      });

      // Animasi untuk tombol
      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 1,
        ease: "back.out(1.7)",
      });

      // Animasi untuk card
      gsap.from(cardRefs.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardRefs.current[0],
          start: "top 80%",
        },
      });

      // Animasi untuk section tambahan
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 100,
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 text-white text-center p-6">
      <h1 ref={titleRef} className="text-5xl font-bold mb-4">
        Welcome to Website Belajar
      </h1>

      <p ref={subtitleRef} className="text-lg max-w-2xl mb-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quas ad
        blanditiis ut magnam eligendi dolorum rerum culpa veniam unde vitae
        facere perferendis corporis, veritatis neque nemo cumque distinctio qui.
      </p>

      <Link to="/about">
        <button
          ref={buttonRef}
          className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg transition duration-300 hover:bg-blue-100 hover:text-blue-700 transform hover:scale-105"
        >
          About
        </button>
      </Link>

      <section className="mt-12 w-full">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {[1, 2, 3, 4].map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="flex flex-col bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-xl font-bold mb-2">Card {item}</h2>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section ref={sectionRef} className="mt-20 w-full bg-white text-black py-12 px-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6">Tentang Kami</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Kami adalah platform belajar online yang menyediakan berbagai materi
          pembelajaran interaktif dan modern. Dengan dukungan teknologi terkini,
          kami membantu Anda mencapai tujuan belajar dengan lebih mudah dan
          menyenangkan.
        </p>
      </section>
    </div>
  );
}