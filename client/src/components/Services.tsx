const Services = () => {
  const services = [
    { number: "01-1", title: "Web Design" },
    { number: "01-2", title: "UX/UI Design" },
    { number: "01-3", title: "Creative Design" },
    { number: "01-4", title: "Product and App Design" },
    { number: "01-5", title: "Development" },
  ];

  return (
    <section id="services" className="bg-white text-black py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="font-sans text-6xl md:text-8xl font-bold uppercase mb-16 text-right">
          Мои услуги
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border-t-2 border-black pt-4">
            <h3 className="font-sans text-2xl font-bold uppercase">C#/.NET разработка</h3>
            <p className="font-mono text-sm mt-2">
              Разработка клиент-серверных приложений на платформе .NET, включая ASP.NET Core, EF Core, WPF и Avalonia.
            </p>
          </div>
          <div className="border-t-2 border-black pt-4">
            <h3 className="font-sans text-2xl font-bold uppercase">Веб-разработка</h3>
            <p className="font-mono text-sm mt-2">
              Создание и поддержка веб-приложений с использованием JavaScript, HTML, CSS, а также опыт работы с WASM.
            </p>
          </div>
          <div className="border-t-2 border-black pt-4">
            <h3 className="font-sans text-2xl font-bold uppercase">Базы данных и отчеты</h3>
            <p className="font-mono text-sm mt-2">
              Проектирование и работа с базами данных MS SQL и PostgreSQL, создание отчетов в JasperReports и FastReport.
            </p>
          </div>
          <div className="border-t-2 border-black pt-4">
            <h3 className="font-sans text-2xl font-bold uppercase">Системная интеграция</h3>
            <p className="font-mono text-sm mt-2">
              Опыт в системной интеграции, автоматизации технологических и бизнес-процессов, а также IT-консалтинг.
            </p>
          </div>
          <div className="border-t-2 border-black pt-4">
            <h3 className="font-sans text-2xl font-bold uppercase">Другие технологии</h3>
            <p className="font-mono text-sm mt-2">
              Владение Python, Git, Delphi и опыт администрирования систем.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
