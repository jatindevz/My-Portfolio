import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, MoveUpRight } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_u23g9if',
      'template_8z7w6bq',
      formRef.current,
      'DYnCEPGOk9OU644Qw'
    ).then(
      (result) => {
        alert("Message sent successfully!");
        formRef.current.reset();
      },
      (error) => {
        alert("Something went wrong. Please try again.");
      }
    );
  };

  return (
    <div className="min-h-screen pt-24 px-4 bg-gradient-to-b from-gray-50 to-purple-50 dark:from-gray-900 dark:to-purple-950 pb-10">
      <div className={`max-w-5xl mx-auto transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <div className="text-center py-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-950 dark:text-purple-200">
            Contact <span className="text-purple-600 dark:text-purple-400">Me</span>
          </h1>
          <div className="w-24 h-1 bg-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I'm open to opportunities, collaborations, or just a friendly chat. Feel free to reach out!
            </p>
            <ContactItem icon={<Mail className="w-5 h-5" />} text="jatin@example.com" />
            <ContactItem icon={<Phone className="w-5 h-5" />} text="+91 98765 43210" />
            <ContactItem icon={<MapPin className="w-5 h-5" />} text="Mumbai, India" />
          </div>

          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-1 text-sm font-medium text-purple-900 dark:text-white">Name</label>
              <input type="text" name="name" required className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none" placeholder="Your Name" />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-purple-900 dark:text-white">Email</label>
              <input type="email" name="email" required className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-purple-900 dark:text-white">Message</label>
              <textarea name="message" rows="4" required className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none" placeholder="Write your message..."></textarea>
            </div>
            <button type="submit" className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors shadow-md hover:shadow-lg">
              Send Message <MoveUpRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, text }) => (
  <div className="flex items-center space-x-4 text-purple-900 dark:text-purple-200">
    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-full">{icon}</div>
    <span className="text-base">{text}</span>
  </div>
);

export default Contact;
