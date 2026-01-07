import Image from "next/image";
import Link from "next/link";

const RecentWorks = () => {
  return (
    <section id="works" className="bg-black text-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-sans text-6xl md:text-8xl font-bold uppercase text-center mb-16">Recent Works</h2>
        <div className="text-center">
          <div className="inline-block relative w-full max-w-4xl p-8 bg-gray-900">
            <Image
              src="/../public/window.svg" // Placeholder for project
              alt="London Fashion Week"
              width={1200}
              height={675}
              className="w-full"
            />
          </div>
          <div className="mt-4">
             <Link href="#" className="font-mono text-sm uppercase tracking-widest">[ View Case ]</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
