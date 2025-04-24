import { useState } from "react";
import "./FAQSection.css";

const faqs = [
  {
    question: "How can I contact or get in touch with Double S Enterprises?",
    answer:
      "Yes, you can contact us via directly messaging us on our WhatsApp or sending us a quick and simple email.",
  },
  {
    question: "What services does Double S Enterprises offer?",
    answer:
      "We offer a wide range of services including event management, corporate planning, and custom solutions.",
  },
  {
    question: "Where is Double S Enterprises located?",
    answer:
      "We are based in India and operate nationwide with several satellite offices.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <button
            onClick={() => toggleFAQ(index)}
            className={`faq-question ${openIndex === index ? "active" : ""}`}
          >
            <span>{faq.question}</span>
            <span className="faq-icon">{openIndex === index ? "▾" : "▸"}</span>
          </button>
          {openIndex === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
