
import Link from "next/link";

const ExperiencePage = () => {
  return (
    <main className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto">
          <Link href="/#works" className="font-mono text-sm text-gray-400 hover:text-white transition-colors duration-300">
            &larr; Назад к опыту работы
          </Link>
          <div className="mt-8">
            <h1 className="font-sans text-4xl md:text-6xl font-bold uppercase">ООО «ИНТЕРФОРУМ»</h1>
            <p className="font-mono text-lg text-gray-400 mt-2">Системный администратор</p>
            <p className="font-mono text-sm text-gray-400">Октябрь 2010 – Декабрь 2016</p>
          </div>
          <div className="mt-16">
            <p className="font-mono text-base mb-6">
              Ключевые обязанности и достижения:
            </p>
            <ul className="font-mono text-sm space-y-4 list-disc list-inside">
              <li>ІТ-поддержка предприятий общественного питания, участие в открытии новых предприятий.</li>
              <li>Сопровождение и администрирование систем R-Keeper и StoreHouse.</li>
              <li>Разработка и поддержка системы обмена данными для распределенных баз данных R-Keeper.</li>
              <li>Разработка шаблонов отчетов (CrystalReports) и ПО (Delphi) для построения специализированных отчетов.</li>
              <li>Развертывание и обслуживание виртуальных серверов под систему IIKO на платформе VMware.</li>
              <li>Обслуживание серверов (AD, Citrix, MS SQL, 1C), локальных сетей и оргтехники.</li>
              <li>За время работы число точек общественного питания увеличилось с 4 до 42.</li>
              <li>Разработан и запущен внутрикорпоративный веб-сайт (JavaScript, HTML, CSS, PHP).</li>
              <li>Произведен полный переход всех предприятий на систему автоматизации IIKO.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ExperiencePage;
