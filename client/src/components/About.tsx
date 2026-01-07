import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-sans text-6xl md:text-8xl font-bold uppercase mb-16">Обо мне</h2>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <p className="font-sans text-4xl md:text-5xl uppercase leading-tight">
            Опыт работы более 15 лет в IT
            </p>
          </div>
          <div className="lg:col-span-2 lg:text-right text-xs uppercase font-mono tracking-widest">
            <p>Для меня</p>
            <p className="mt-1">DEV/V1</p>
          </div>
        </div>

        <div className="mt-20 lg:mt-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col items-center text-center">
            <div className="w-64 h-80 relative border-2 border-white overflow-hidden mb-4">
               <Image
                src="/img/me.jpg"
                alt="Зимацкий Андрей"
                layout="fill"
                objectFit="cover"
                className="grayscale"
              />
            </div>
            <p className="font-mono uppercase tracking-widest">Привет!</p>
            <p className="font-mono uppercase tracking-widest">Я Зимацкий Андрей</p>
            <p className="font-mono text-xs mt-4 max-w-sm">
            Ведущий специалист по автоматизации с опытом работы в области информационных технологий, системной интеграции и разработки программного обеспечения. Обладаю опытом C#/.NET-разработчика и системного администратора.
            </p>
          </div>
          <div>
            <p className="font-sans text-4xl md:text-5xl uppercase leading-tight mb-8">
            Подход к работе
            </p>
            <div className="font-mono text-sm space-y-4">
              <p>
              Разработка и поддержка сложных систем, включая клиентские и серверные приложения. Умение разбираться в легаси-коде, проводить рефакторинг и документировать код.
              </p>
              <p>
              Опыт в поддержке и сопровождении информационных систем, подготовке технических заданий и обучении новых сотрудников. Глубокие знания в области системной интеграции, автоматизации технологических и бизнес-процессов, а также IT-консалтинга.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
