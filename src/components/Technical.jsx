import { TECHNICAL } from "../constants";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -200 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 200 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Technical = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        className="my-20 text-center text-4xl"
      >
        Technical Skills
      </motion.h1>
      <div>
        {TECHNICAL.map((technical, index) => (
          <motion.div
            key={index}
            variants={container}
            initial="hidden"
            whileInView="visible"
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            <div className="w-full max-w-xl lg:w-3/4">
              <motion.h6
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                className="mb-2 font-semibold text-2xl"
              >
                {technical.programming}
              </motion.h6>
              <motion.p
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                className="mb-4 text-neutral-400 text-1xl"
              >
                {technical.description}
              </motion.p>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                className="flex flex-wrap"
              >
                {technical.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-xl font-medium text-purple-800"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technical;
