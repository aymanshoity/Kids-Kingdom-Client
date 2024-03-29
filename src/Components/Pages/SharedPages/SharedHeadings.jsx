

import { motion } from "framer-motion";

const SharedHeadings = ({heading}) => {
    return (
        <div className="w-3/12  mx-auto flex flex-col items-center">
            
            <motion.h1
                    className="light-theme text-4xl mb-5  text-center text-black  border-b-4 border-black font-bold"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >{heading}</motion.h1>
            
            

        </div>
    );
};

export default SharedHeadings;