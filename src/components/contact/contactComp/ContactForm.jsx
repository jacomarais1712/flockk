import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      console.log({
        serviceid: serviceId,
        templateid: templateId,
        publickey: publicKey
      })

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        time: new Date(),
      };

      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');

      setFormData({
        name: '',
        email: '',
        message: ''
      });

    } catch (error) {
        console.error('Error sending email:', error);
        setSubmitStatus('error');
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form className="flex flex-col min-w-60 w-[693px] max-md:max-w-full max-sm:w-[290px]" onSubmit={handleSubmit}>
        <div className="w-full max-md:max-w-full">
          <div className="w-full max-md:max-w-full">
            <label className="text-sm tracking-wide leading-relaxed text-zinc-200 max-md:max-w-full">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your name"
              required
              disabled={isSubmitting}
              className="flex gap-2 items-center p-3 mt-2 w-full text-base tracking-wide border border-solid bg-neutral-950 border-white border-opacity-10 text-slate-500 max-md:max-w-full focus:outline-none focus:border-emerald-400 disabled:opacity-50 max-sm:max-w-100 max-sm:w-[240px]"
            />
          </div>
          <div className="mt-6 w-full max-md:max-w-full">
            <label className="text-sm tracking-wide leading-relaxed text-zinc-200 max-md:max-w-full">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your email address"
              required
              disabled={isSubmitting}
              className="flex gap-2 items-center p-3 mt-2 w-full text-base tracking-wide border border-solid bg-neutral-950 border-white border-opacity-10 text-slate-500 max-md:max-w-full focus:outline-none focus:border-emerald-400 disabled:opacity-50 max-sm:max-w-100 max-sm:w-[240px]"
            />
          </div>
          <div className="mt-6 w-full max-md:max-w-full">
            <label className="text-sm tracking-wide leading-relaxed text-zinc-200 max-md:max-w-full">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Type a message..."
              required
              disabled={isSubmitting}
              className="flex items-start px-3 pt-3 pb-36 mt-2 w-full text-base tracking-wide border border-solid bg-neutral-950 border-white border-opacity-10 min-h-[180px] text-slate-500 max-md:pb-24 max-md:max-w-full focus:outline-none focus:border-emerald-400 resize-none disabled:opacity-50 max-sm:max-w-100 max-sm:w-[240px]"
            />
          </div>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex gap-3 justify-center cursor-pointer items-center self-start py-1.5 pr-1.5 pl-3.5 mt-8 text-base font-bold tracking-wide rounded text-zinc-900 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed bg-[linear-gradient(180deg,#23F399_0%,#19E48B_100%)] hover:bg-emerald-100 hover:bg-none"
        >
          <span className="self-stretch my-auto">
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc640910198e5a365a6bd5ced61e410e27efbd78?placeholderIfAbsent=true&apiKey=917e8cc76bd54a7d91c30bd7f061bdf9"
            alt="Send icon"
            className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square fill-emerald-950"
          />
        </button>
      </form>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="mt-4 p-3 bg-green-900 border border-green-700 rounded text-green-200 max-sm:max-w-[240px]">
          Message sent successfully! Thank you for reaching out.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mt-4 p-3 bg-red-900 border border-red-700 rounded text-red-200 max-sm:max-w-[240px]">
          Failed to send message. Please try again later.
        </div>
      )}
    </div>
  );
};