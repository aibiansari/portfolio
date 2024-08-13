import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "sonner";

const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null); // Form reference

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        "service_4wk6tem",
        "template_5xfrjzm",
        event.target as HTMLFormElement,
        "2K0y90IOnZ3BYCtYL"
      );
      console.log("Email sent successfully:", result.text);
      toast.success("Email sent successfully!");

      // Reset form fields
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.log("Email sending error:", error);
      toast.error("Email sending error!");
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "w-[340px] p-3 text-neutral-500 dark:text-neutral-400 placeholder:dark:text-slate-600 bg-transparent border border-neutral-600 dark:border-slate-200 rounded-md shadow-sm";
  const labelClasses =
    "absolute -top-3 left-2 text-sm font-medium text-neutral-600 dark:text-slate-200 px-2 bg-slate-200 dark:bg-slate-950 transition-colors duration-500";

  return (
    <section id="contact" className="py-8">
      <form
        ref={formRef} // Attach ref to the form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        <div className="relative md:col-span-1">
          <label htmlFor="name" className={labelClasses}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            placeholder="Write your name"
            autoComplete="off"
            required
            className={inputClasses}
          />
        </div>
        <div className="relative md:col-span-1">
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            placeholder="Write your email"
            autoComplete="off"
            required
            className={inputClasses}
          />
        </div>
        <div className="relative mt-3 md:col-span-2">
          <label htmlFor="message" className={labelClasses}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message"
            autoComplete="off"
            rows={14}
            required
            className={`${inputClasses} md:w-[708px]`}
          ></textarea>
        </div>
        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className={`w-full md:w-48 py-2 px-6 rounded-md transition-colors duration-300 ${
              loading
                ? "bg-gray-600 text-gray-200 cursor-not-allowed"
                : "bg-indigo-600 text-white hover:bg-indigo-800"
            }`}
          >
            {loading ? "Please wait..." : "Send"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
