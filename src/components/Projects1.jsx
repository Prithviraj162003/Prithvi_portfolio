import { PROJECTS } from "../constants";
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
      <br />
      <br />
      <br />
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              className="w-full lg:w-1/4"
              initial={{ x: -100, opacity: 0 }} 
              whileInView={{ x: 0, opacity: 1 }} 
              viewport={{ once: false }}   
              transition={{ duration: 1, ease: "easeOut", delay: index * 0.3 }}  
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              className="w-full max-w-xl lg:w-3/4"
              initial={{ x: 100, opacity: 0 }} 
              whileInView={{ x: 0, opacity: 1 }}    
              viewport={{ once: false }}   
              transition={{ duration: 1, ease: "easeOut", delay: index * 0.3 }}  
            >
              <h6 className="mb-2 font-semibold text-xl">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-xl font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
