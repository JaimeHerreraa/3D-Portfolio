import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../style";
import { useForm } from "react-hook-form";

function Form({ formRef, loading, handleChange, form, sendEmail }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
    >
      <p className={styles.sectionSubText}>Get in touch</p>
      <h3 className={styles.sectionHeadText}>Contact</h3>

      <form
        ref={formRef}
        onSubmit={handleSubmit(sendEmail)}
        className="mt-12 flex flex-col gap-8"
      >
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Name</span>
          {errors.name?.type === "required" && (
            <span className="text-red-500 font-medium mb-4">
              Complete this field
            </span>
          )}
          <input
            type="text"
            name="name"
            {...register("name", { required: true })}
            onChange={handleChange}
            value={form.name}
            placeholder="What's your name?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Email</span>
          <input
            type="email"
            name="email"
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            onChange={handleChange}
            value={form.email}
            placeholder="What's your Email?"
            required
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Message</span>
          <textarea
            rows="7"
            name="message"
            {...register("message", { required: true, maxLength: 300 })}
            onChange={handleChange}
            type="text"
            value={form.message}
            placeholder="What do you want to say?"
            required
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          />
        </label>

        <button
          type="submit"
          className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </motion.div>
  );
}

export default Form;
