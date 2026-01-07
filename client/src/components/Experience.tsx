const Experience = () => {
  return (
    <section id="experience" className="bg-black text-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-sans text-6xl md:text-8xl font-bold uppercase mb-16">Опыт работы</h2>
        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h3 className="font-sans text-2xl font-bold uppercase">ООО «ИНТЕРФОРУМ»</h3>
              <p className="font-mono text-sm text-gray-400 mt-1">Системный администратор</p>
              <p className="font-mono text-sm text-gray-400">Октябрь 2010 – Декабрь 2016</p>
            </div>
            <div className="md:col-span-2">
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
      </div>
    </section>
  );
};

export default Experience;
