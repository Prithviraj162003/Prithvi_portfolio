import { CONTACT } from "../constants";
import { motion } from 'framer-motion'; 

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <motion.p
          className="my-4 text-xl"
          initial={{ x: -200 }}  
          animate={{ x: 200 }} 
          transition={{
            x: {
              repeat: Infinity,        
              repeatType: "reverse",  
              duration: 4,            
              ease: "easeInOut"       
            }
          }}
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          className="my-4 text-red-600 text-xl"
          initial={{ x: 200 }}  
          animate={{ x: -200 }}
          transition={{
            x: {
              repeat: Infinity,        
              repeatType: "reverse",  
              duration: 4,             
              ease: "easeInOut"      
            }
          }}
        >
          {CONTACT.phoneNo}
        </motion.p>
        <h1 className="text-2xl text-green-500 ">Thank You for Viewing this Portfolio</h1>
        
        <a href="#" className="border-b"></a>
      </div>
    </div>
  );
};

export default Contact;
