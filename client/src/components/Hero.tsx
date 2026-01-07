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
        <div className="mt-16 flex justify-center">
            <div className="flex items-end gap-x-8">
                <div className="font-mono text-sm uppercase">
                    <p>/ Automation Specialist</p>
                    <p>/ Software Development</p>
                    <p>/ C#/.NET</p>
                    <p>/ ASP.NET Core</p>
                    <p>/ WPF, Avalonia UI</p>
                    <p>/ Entity Framework Core</p>
                    <p>/ SQL MSSQL PostgreSQL</p>
                    <p>/ SignalR</p>
                    <p>/ Camunda BPM</p>
                    <p>/ Docker</p>
                    <p>/ Web Development</p>
                    <p>/ TypeScript/JavaScript HTML CSS</p>
                    <p>/ React Next.js</p>
                    <p>/ Python</p>
                    <p>/ Development with AI Tools</p>
                    <p>/ Gemini CLI</p>
                    <p>/ Claude Code</p>
                    <p>/ Github Copilot</p>
                    <p>/ Cursor</p>
                    <p>/ Qoder</p>
                </div>
  
                <div className="relative h-160 w-128">
                    <Image
                    src="/img/me.jpg"
                    alt="Зимацкий Андрей"
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
