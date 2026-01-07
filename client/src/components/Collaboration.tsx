const Collaboration = () => {
  return (
    <section className="bg-white text-black py-20 lg:py-32 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-sm uppercase tracking-widest mb-4">Let's start the conversation</p>
        <h2 className="font-sans text-6xl md:text-8xl lg:text-9xl font-bold uppercase">Great Design</h2>
        <p className="font-mono text-sm uppercase tracking-widest my-4">starts with</p>
        <h2 className="font-sans text-6xl md:text-8xl lg:text-9xl font-bold uppercase">Great Collaboration</h2>

        <form className="mt-16 max-w-xl mx-auto text-left">
          <div className="mb-8">
            <label htmlFor="name" className="block font-mono text-xs uppercase tracking-widest mb-2">Your Name*</label>
            <input type="text" id="name" className="w-full bg-transparent border-b border-black focus:outline-none py-2"/>
          </div>
          <div className="mb-8">
            <label htmlFor="email" className="block font-mono text-xs uppercase tracking-widest mb-2">Your Email*</label>
            <input type="email" id="email" className="w-full bg-transparent border-b border-black focus:outline-none py-2"/>
          </div>
          <div className="mb-8">
            <label htmlFor="message" className="block font-mono text-xs uppercase tracking-widest mb-2">How can I help you</label>
            <input type="text" id="message" className="w-full bg-transparent border-b border-black focus:outline-none py-2"/>
          </div>
          <div className="text-center mt-12">
            <button type="submit" className="font-mono text-sm uppercase tracking-widest">
              Discuss the project &gt;
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Collaboration;
