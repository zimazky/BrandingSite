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
        <div className="flex justify-between items-start mb-16">
          <h2 className="font-sans text-6xl md:text-8xl font-bold uppercase">Services</h2>
          <div className="font-mono text-xs uppercase tracking-widest text-right">
            <p>DSGN/V4</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t border-l border-black">
          {services.map((service, index) => (
            <div key={index} className="p-8 border-b border-r border-black h-48">
              <p className="font-mono text-xs uppercase tracking-widest mb-4">{service.number}</p>
              <h3 className="font-mono text-lg uppercase tracking-widest">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
