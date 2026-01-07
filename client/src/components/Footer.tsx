import Link from "next/link";

const Footer = () => {
  return (
    <footer id="contact" className="bg-white text-black py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          <div className="font-mono text-sm uppercase">
            <p>About Me</p>
            <p>Services</p>
            <p>Works</p>
          </div>
          <div className="text-center">
            <p className="font-mono text-lg">+38 096 468 31 71</p>
            <p className="font-mono text-lg">olha.lazarieva.0304@gmail.com</p>
            <div className="flex justify-center space-x-4 mt-2">
              <Link href="#" className="font-mono text-sm uppercase">Instagram ↗</Link>
              <Link href="#" className="font-mono text-sm uppercase">Telegram ↗</Link>
              <Link href="#" className="font-mono text-sm uppercase">Facebook ↗</Link>
            </div>
          </div>
          <div className="font-mono text-sm uppercase text-right">
            <p>Address:</p>
            <p>14 Bohdana Khmelnytskoho Street</p>
            <p>Kyiv, Ukraine</p>
          </div>
        </div>

        <div className="text-center my-20">
          <h2 className="font-sans text-6xl md:text-8xl lg:text-9xl font-bold uppercase">Olha Lazareva</h2>
        </div>

        <div className="flex justify-between font-mono text-xs uppercase">
          <p>Kyiv, Ukraine (GMT+3) 10:15</p>
          <p>Development - RR</p>
          <p>&copy; All Right Reserved. 2024. @olhalazarieva</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;