import Link from "next/link";

const works = [
  {
    title: "C#/.NET-разработчик",
    company: 'ООО "ЛАИП"',
    period: "Август 2022 - настоящее время",
  },
  {
    title: "Ведущий специалист по автоматизации",
    company: "ООО «ФЕНИКС», Порт Бронка",
    period: "Апрель 2022 - Август 2022",
  },
  {
    title: "Специалист по автоматизации",
    company: "ООО «ФЕНИКС», Порт Бронка",
    period: "Февраль 2017 - Апрель 2022",
  },
  {
    title: "Системный администратор",
    company: "ООО «ИНТЕРФОРУМ»",
    period: "Октябрь 2010 - Декабрь 2016",
  },
];

const RecentWorks = () => {
  return (
    <section id="works" className="bg-black text-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-sans text-6xl md:text-8xl font-bold uppercase text-center mb-16">Опыт работы</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {works.map((work, index) => (
            <div key={index} className="border border-white p-8">
              <h3 className="font-sans text-2xl font-bold uppercase">{work.title}</h3>
              <p className="font-mono text-sm mt-2">{work.company}</p>
              <p className="font-mono text-xs mt-1">{work.period}</p>
              <Link href={`/experience#job-${index}`} className="font-mono text-sm text-gray-400 hover:text-white transition-colors duration-300 mt-4 inline-block">
                Подробнее...
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;