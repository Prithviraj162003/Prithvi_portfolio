import { ABOUT_TEXT } from "../constants";
import About1 from "../assets/About.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay: delay },
  },
});

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        variants={container(0)}
        initial="hidden"
        whileInView="visible"
        className="my-20 text-center text-4xl"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h1>

      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <motion.img
              variants={container(0.5)}
              initial="hidden"
              whileInView="visible"
              className="ml-0 w-80 h-80 rounded-2xl"
              src={About1}
              alt="About image"
              style={{ willChange: 'transform' }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <motion.p
              variants={container(1)}
              initial="hidden"
              whileInView="visible"
              className="my-2 max-w-xl py-6 text-xl mr-0"
            >
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
