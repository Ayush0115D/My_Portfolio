import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

// ------------------ Toast ------------------
const Toast = ({ type, text, onClose }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev > 0 ? prev - 1 : 0));
    }, 30);

    if (progress === 0) {
      clearInterval(interval);
      onClose();
    }

    return () => clearInterval(interval);
  }, [progress, onClose]);

  // ✅ Toast colors
  const bgColor =
    type === "success" ? "bg-green-50 border-green-400" : "bg-red-50 border-red-400";
  const iconBg = type === "success" ? "bg-green-500" : "bg-red-500";
  const textColor = type === "success" ? "text-green-700" : "text-red-700";
  const barColor = type === "success" ? "bg-green-500" : "bg-red-500";

  return (
    <div
      className={`fixed top-5 right-5 z-[9999] w-80 p-4 rounded-lg shadow-lg flex items-start gap-3 border animate-slideIn ${bgColor}`}
    >
      {/* Icon */}
      <div
        className={`flex-shrink-0 mt-1 w-7 h-7 rounded-full flex items-center justify-center ${iconBg} text-white font-bold`}
      >
        {type === "success" ? "✓" : "⚠"}
      </div>

      {/* Content */}
      <div className="flex-1">
        <p className={`font-medium ${textColor}`}>{text}</p>
        <div className="mt-2 w-full h-1 bg-gray-200 rounded">
          <div
            className={`h-1 rounded ${barColor}`}
            style={{ width: `${progress}%`, transition: "width 0.1s linear" }}
          />
        </div>
      </div>

      {/* Close Button */}
      <button
        className="ml-2 text-gray-400 hover:text-gray-700"
        onClick={onClose}
      >
        ✕
      </button>
    </div>
  );
};

// ------------------ Contact ------------------
const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setForm({ name: "", email: "", message: "" });
      setToast({ type: "success", text: "Email sent successfully!" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setToast({ type: "error", text: "Failed to send email. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding relative">
      {/* ✅ Toast Notification */}
      {toast && (
        <Toast
          type={toast.type}
          text={toast.text}
          onClose={() => setToast(null)}
        />
      )}

      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                {/* ✅ Hidden input to pass `time` */}
                <input
                  type="hidden"
                  name="time"
                  value={new Date().toLocaleString()}
                />

                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>

          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
