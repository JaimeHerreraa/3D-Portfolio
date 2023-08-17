import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import Form from "./Form";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const sendEmail = (event) => {
    event.preventDefault();
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        {
          from_name: form.name,
          to_name: "Jaime",
          from_email: form.email,
          to_email: "jaimeherrera1224@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_API_KEY
      )
      .then(
        () => {
          setLoading(false);
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <Form
        formRef={formRef}
        loading={loading}
        handleChange={handleChange}
        form={form}
        sendEmail={sendEmail}
      />
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
