import Image from "next/image";
import Link from "next/link";

const RecentWorks = () => {
  return (
    <section id="works" className="bg-black text-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-sans text-6xl md:text-8xl font-bold uppercase text-center mb-16">Опыт работы</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-white p-8">
            <h3 className="font-sans text-2xl font-bold uppercase">C#/.NET-разработчик</h3>
            <p className="font-mono text-sm mt-2">ООО "ЛАИП"</p>
            <p className="font-mono text-xs mt-1">Август 2022 - настоящее время</p>
          </div>
          <div className="border border-white p-8">
            <h3 className="font-sans text-2xl font-bold uppercase">Ведущий специалист по автоматизации</h3>
            <p className="font-mono text-sm mt-2">ООО «ФЕНИКС», Порт Бронка</p>
            <p className="font-mono text-xs mt-1">Апрель 2022 - Август 2022</p>
          </div>
          <div className="border border-white p-8">
            <h3 className="font-sans text-2xl font-bold uppercase">Специалист по автоматизации</h3>
            <p className="font-mono text-sm mt-2">ООО «ФЕНИКС», Порт Бронка</p>
            <p className="font-mono text-xs mt-1">Февраль 2017 - Апрель 2022</p>
          </div>
          <div className="border border-white p-8">
            <h3 className="font-sans text-2xl font-bold uppercase">Системный администратор</h3>
            <p className="font-mono text-sm mt-2">ООО «ИНТЕРФОРУМ»</p>
            <p className="font-mono text-xs mt-1">Октябрь 2010 - Декабрь 2016</p>
            <Link href="/experience" className="font-mono text-sm text-gray-400 hover:text-white transition-colors duration-300 mt-4 inline-block">
              Подробнее...
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;