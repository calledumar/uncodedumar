import { useState } from "react";
import { Send } from "lucide-react";

interface FormData {
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    phone: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ email: "", phone: "", message: "" });
        setFocusedField("");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-16 bg-black font-inter">
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
              Sorry, there was an error sending your message. Please try again.
            </div>
          )}

          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField("")}
              className="w-full px-0 py-4 text-lg bg-transparent border-0 border-b-2 border-gray-300 focus:border-gray-900 focus:outline-none transition-all duration-300 placeholder-transparent peer text-white"
              placeholder="Email Address"
              required
            />
            <label
              className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                focusedField === "email" || formData.email
                  ? "-top-6 text-sm text-[#ed3411]"
                  : "top-4 text-lg text-[#ed3411]"
              }`}
            >
              Email Address
            </label>
          </div>

          {/* Phone Input */}
          <div className="relative">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              onFocus={() => setFocusedField("phone")}
              onBlur={() => setFocusedField("")}
              className="w-full px-0 py-4 text-lg bg-transparent border-0 border-b-2 border-gray-300 focus:border-gray-900 focus:outline-none transition-all duration-300 placeholder-transparent peer text-white"
              placeholder="Phone Number"
              required
            />
            <label
              className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                focusedField === "phone" || formData.phone
                  ? "-top-6 text-sm text-[#ed3411]"
                  : "top-4 text-lg text-[#ed3411]"
              }`}
            >
              Phone Number
            </label>
          </div>

          {/* Message Textarea */}
          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField("")}
              rows={4}
              className="w-full px-0 py-4 text-lg bg-transparent border-0 border-b-2 border-gray-300 focus:border-gray-900 focus:outline-none transition-all duration-300 placeholder-transparent peer resize-none text-white"
              placeholder="Your Message"
              required
            />
            <label
              className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                focusedField === "message" || formData.message
                  ? "-top-6 text-sm text-[#ed3411]"
                  : "top-4 text-lg text-[#ed3411]"
              }`}
            >
              Your Message
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-8 flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-transparent hover:bg-[#ed3411] text-amber-900 font-semibold hover:text-white py-2 px-4 border border-[#ed3411] hover:border-transparent rounded disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? "Sending..." : "Under Construction No msg sent"}
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>

              {/* Hover animation background */}
              <div className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
