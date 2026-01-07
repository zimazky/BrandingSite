import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-sans text-6xl md:text-8xl font-bold uppercase mb-16">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <p className="font-sans text-4xl md:text-5xl uppercase leading-tight">
              Design is not just decoration, but a tool for{" "}
              <span className="text-gray">influence and growth.</span>
            </p>
          </div>
          <div className="lg:col-span-2 lg:text-right text-xs uppercase font-mono tracking-widest">
            <p>For Me</p>
            <p className="mt-1">DSGN/V2</p>
          </div>
        </div>

        <div className="mt-20 lg:mt-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col items-center text-center">
            <div className="w-40 h-40 relative rounded-full overflow-hidden mb-4">
               <Image
                src="/../public/file.svg" // Placeholder image
                alt="Olha Lazareva"
                layout="fill"
                objectFit="cover"
                className="grayscale"
              />
            </div>
            <p className="font-mono uppercase tracking-widest">Hello!</p>
            <p className="font-mono uppercase tracking-widest">I'm Olha Lazareva</p>
            <p className="font-mono text-xs mt-4 max-w-sm">
              A senior UX/UI designer with over 7 years of experience in creating digital products for international companies.
            </p>
          </div>
          <div>
            <p className="font-sans text-4xl md:text-5xl uppercase leading-tight mb-8">
              It's not just a profession - it's a way of thinking.
            </p>
            <div className="font-mono text-sm space-y-4">
              <p>
                My work is part of my lifestyle. As a UX/UI designer, I am constantly observing the world: I notice how people interact with space, technology, objects.
              </p>
              <p>
                I value clarity, meaning, and functionality - both in design and in life. I am close to the idea of conscious minimalism: leaving only what makes sense and works for results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
