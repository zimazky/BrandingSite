import Link from "next/link";

const Footer = () => {
  return (
    <footer id="contact" className="bg-white text-black py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          <div className="font-mono text-sm uppercase">
            <p>Обо мне</p>
            <p>Услуги</p>
            <p>Опыт работы</p>
          </div>
          <div className="text-center">
            <p className="font-mono text-lg">+7 (921) 9066606</p>
            <p className="font-mono text-lg">zimazky@gmail.com</p>
          </div>
          <div className="font-mono text-sm uppercase text-right">
            <p>Адрес:</p>
            <p>Санкт-Петербург, Россия</p>
          </div>
        </div>

        <div className="text-center my-20">
          <h2 className="font-sans text-6xl md:text-8xl lg:text-9xl font-bold uppercase">Зимацкий Андрей</h2>
        </div>

        <div className="flex justify-between font-mono text-xs uppercase">
          <p>Санкт-Петербург, Россия</p>
          <p>Development - RR</p>
          <p>&copy; All Right Reserved. 2024. @zimazky</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;