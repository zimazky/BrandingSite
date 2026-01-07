import Link from "next/link";

const experiences = [
  {
    company: "ООО «ЛАИП»",
    role: "C#/.NET-разработчик",
    period: "Август 2022 – настоящее время",
    responsibilities: [
      "Разработка клиентской части приложений (.Net 8, Avalonia/WPF, WASM)",
      "Разработка серверной части приложений (ASP.net, EF Core, MSSQL, PostgreSQL)",
      "Разбор легаси-кода и перенос на новые фреймворки",
      "Рефакторинг кода",
      "Документирование кода",
    ],
  },
  {
    company: "ООО «ФЕНИКС», Порт Бронка",
    role: "Ведущий специалист по автоматизации",
    period: "Апрель 2022 – Август 2022",
    responsibilities: [
      "Поддержка и сопровождение информационных систем терминала.",
      "Подготовка ТЗ на доработку информационных систем.",
      "Обучение новых сотрудников отдела.",
    ],
  },
  {
    company: "ООО «ФЕНИКС», Порт Бронка",
    role: "Специалист по автоматизации",
    period: "Февраль 2017 – Апрель 2022",
    responsibilities: [
      "Сопровождение терминальной операционной системы SOLVO, 2-ой уровень поддержки.",
      "Разработка пользовательских отчетов (JasperReports), настройка скриптов и конвертеров (JavaScript, XML, XSLT, SQL) для автоматической рассылки и электронного обмена сообщениями в системе SOLVO.",
      "Участие в подготовке ТЗ на доработку корпоративной информационной системы предприятия и на интеграцию с внешними информационными системами.",
      "Участие в разработке модулей корпоративной информационной системы предприятия (HTML, CSS, JavaScript, Delphi).",
    ],
  },
  {
    company: "ООО «ИНТЕРФОРУМ»",
    role: "Системный администратор",
    period: "Октябрь 2010 – Декабрь 2016",
    responsibilities: [
      "ІТ-поддержка предприятий общественного питания, участие в открытии новых предприятий.",
      "Сопровождение и администрирование систем R-Keeper и StoreHouse.",
      "Разработка и поддержка системы обмена данными для распределенных баз данных R-Keeper.",
      "Разработка шаблонов отчетов (CrystalReports) и ПО (Delphi) для построения специализированных отчетов.",
      "Развертывание и обслуживание виртуальных серверов под систему IIKO на платформе VMware.",
      "Обслуживание серверов (AD, Citrix, MS SQL, 1C), локальных сетей и оргтехники.",
      "За время работы число точек общественного питания увеличилось с 4 до 42.",
      "Разработан и запущен внутрикорпоративный веб-сайт (JavaScript, HTML, CSS, PHP).",
      "Произведен полный переход всех предприятий на систему автоматизации IIKO.",
    ],
  },
];

const ExperiencePage = () => {
  return (
    <main className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto">
          <Link href="/#works" className="font-mono text-sm text-gray-400 hover:text-white transition-colors duration-300">
            &larr; Назад к опыту работы
          </Link>
          {experiences.map((exp, index) => (
            <div key={index} id={`job-${index}`} className="mt-8 pt-8">
              <h1 className="font-sans text-4xl md:text-6xl font-bold uppercase">{exp.company}</h1>
              <p className="font-mono text-lg text-gray-400 mt-2">{exp.role}</p>
              <p className="font-mono text-sm text-gray-400">{exp.period}</p>
              <div className="mt-16">
                <p className="font-mono text-base mb-6">
                  Ключевые обязанности и достижения:
                </p>
                <ul className="font-mono text-sm space-y-4 list-disc list-inside">
                  {exp.responsibilities.map((res, i) => (
                    <li key={i}>{res}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ExperiencePage;