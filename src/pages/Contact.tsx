
import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-school-blue text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            We'd love to hear from you. Reach out with any questions about admissions, curriculum, or general inquiries.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-school-light p-4 rounded-full inline-flex items-center justify-center mb-6">
                <Phone size={32} className="text-school-blue" />
              </div>
              <h3 className="text-xl font-bold text-school-blue mb-3">Call Us</h3>
              <p className="text-gray-600 mb-4">Have questions? Call us directly:</p>
              <a href="tel:9352906935" className="text-xl font-medium text-school-accent hover:underline">
                9352906935
              </a>
            </div>

            {/* Email */}
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-school-light p-4 rounded-full inline-flex items-center justify-center mb-6">
                <Mail size={32} className="text-school-blue" />
              </div>
              <h3 className="text-xl font-bold text-school-blue mb-3">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us an email with your inquiry:</p>
              <a href="mailto:TheAryanPublicAcademy@gmail.com" className="text-lg font-medium text-school-accent hover:underline break-words">
                TheAryanPublicAcademy@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-school-light p-4 rounded-full inline-flex items-center justify-center mb-6">
                <MapPin size={32} className="text-school-blue" />
              </div>
              <h3 className="text-xl font-bold text-school-blue mb-3">Visit Us</h3>
              <p className="text-gray-600 mb-4">Our school is located at:</p>
              <address className="not-italic text-school-dark font-medium">
                Bhagwati Nagar, A, Niwaru, <br />
                Lalchandpura Road, Jhotwara, <br />
                Jaipur
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="section-title">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Have a question or want to learn more about our school? Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-accent focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-accent focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-accent focus:border-transparent"
                    placeholder="Admission Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-accent focus:border-transparent"
                    placeholder="I would like to inquire about..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-school-blue text-white py-3 px-8 rounded-md font-semibold hover:bg-school-dark transition-colors inline-flex items-center"
                >
                  {isSubmitting ? (
                    <>
                      <span className="mr-2">Sending...</span>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map */}
            <div>
              <h2 className="section-title">Our Location</h2>
              <p className="text-gray-600 mb-8">
                Visit our campus to experience the vibrant learning environment at The Aryan Public Academy.
              </p>
              
              <div className="rounded-lg overflow-hidden shadow-md h-[450px] bg-gray-200">
                {/* Placeholder for Google Maps - In a real implementation, this would be replaced with an actual Google Maps embed */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.915294979991!2d75.7542!3d26.949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU2JzU2LjQiTiA3NcKwNDUnMTUuMSJF!5e0!3m2!1sen!2sin!4v1619099038279!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="School Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title-center">Frequently Asked Questions</h2>
            <p className="text-gray-600 mt-4">
              Find answers to commonly asked questions about our school.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-school-blue mb-3">What are the school hours?</h3>
                <p className="text-gray-600">
                  Our school hours are from 8:00 AM to 2:30 PM Monday through Friday. The school office is open from 7:30 AM to 4:00 PM on weekdays.
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-school-blue mb-3">How can I apply for admission?</h3>
                <p className="text-gray-600">
                  You can apply for admission by visiting our Admission page and following the application process outlined there. Alternatively, you can visit the school office to pick up an application form.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-school-blue mb-3">Do you offer transportation services?</h3>
                <p className="text-gray-600">
                  Yes, we provide transportation services to various areas in and around Jaipur. The routes and fees can be discussed with the administration office.
                </p>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-school-blue mb-3">What extracurricular activities do you offer?</h3>
                <p className="text-gray-600">
                  We offer a wide range of extracurricular activities including sports, music, dance, art, and various clubs to ensure the holistic development of our students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
