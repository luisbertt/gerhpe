const Contact = () => (
  <div id="contact" className="bg-black p-4 md:p-32 text-white">
    <div className="text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-center">Contact</h1>
      <p className="text-xl md:text-2xl text-gray-500 italic">
        Get in touch...
      </p>
    </div>
    <h4 className="md:text-4xl text-center mt-4">
      Send us an Email✉️ for Inquiries at
      <br />
      <b className="underline">
        <a href="mailto:info@gerhpe.com">Info@gerhpe.com</a>
      </b>
    </h4>
    <h4 className="md:text-4xl text-center mt-4">
      ...or Call Us at
      <br />
      <b className="underline">
        <a href="tel:2392977805">(239) 297-7805</a>
      </b>
    </h4>
  </div>
)

export default Contact
