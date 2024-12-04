const ContactForm = () => {
    const [formData, setFormData] = React.useState({
      name: "",
      email: "",
      message: "",
    });
    const [successMessage, setSuccessMessage] = React.useState("");
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setTimeout(() => {
        setSuccessMessage("Thank you for reaching out! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      }, 1000);
    };
  
    return (
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contact Me</h1>
          <p>I'd love to hear from you. Please fill out the form below.</p>
        </div>
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    );
  };
  
  ReactDOM.render(<ContactForm />, document.getElementById("contact-root"));
  