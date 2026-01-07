import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-white pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="relative">
          <h1 className="font-sans text-[10vw] md:text-[12vw] lg:text-[10rem] font-bold leading-none uppercase text-black">
            Creative
            <br />
            Designer
          </h1>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 md:w-1/4">
            <Image
              src="/../public/file.svg" // Placeholder image
              alt="Olha Lazareva"
              width={400}
              height={600}
              className="grayscale"
            />
          </div>
        </div>
        <div className="flex justify-between items-end mt-16">
          <div className="font-mono text-sm uppercase">
            <p>/ Art Direction</p>
            <p>/ Web Design (UX/UI)</p>
            <p>/ Web Development</p>
          </div>
          <div className="font-mono text-sm uppercase text-right">
            <p>Based in Ukraine</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
