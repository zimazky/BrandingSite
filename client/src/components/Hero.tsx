import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-white pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        <div className="relative">
          <h1 className="font-pt-sans-narrow text-[6vw] md:text-[5vw] lg:text-[5vw] font-bold leading-none uppercase text-black [word-spacing:-2vw]">
            Разработчик /<br/>Специалист по автоматизации
          </h1>

        </div>
        <div className="flex justify-center mt-16">
            <div className="w-128 h-160 relative overflow-hidden">
                <Image
                src="/img/me.jpg"
                alt="Зимацкий Андрей"
                layout="fill"
                objectFit="cover"
                />
            </div>
        </div>
        <div className="flex justify-between items-end mt-16">
          <div className="font-mono text-sm uppercase">
            <p>/ C#/.NET</p>
            <p>/ Python</p>
          </div>
          <div className="font-mono text-sm uppercase text-right">
            <p>Based in Saint-Petersburg</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
