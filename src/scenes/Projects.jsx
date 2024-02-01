import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import student from "../assets/graduated.png"
import iot from "../assets/water-level.png"
import alexa from "../assets/icons8-alexa-480.png"

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title,content,src,githublink }) => {
  const overlayStyles = `absolute h-60 w-60 opacity-0 hover:opacity-90 transition duration-500
    bg-dark z-30 flex flex-col items-center text-center p-1 text-light-cream rounded-xl `;

  return (
    <motion.div variants={projectVariant} className="relative m-5 h-60 w-60  rounded-xl shadow-2xl">
      <div className={overlayStyles}>
        <p className="text-2xl  py-1 font-poppins">{title}</p>
        <p className="mt-7 text-sm">
         {content} <br/>
        </p>
      </div>
      <img className="m-14 h-32 w-32 rounded-xl" src={src} alt={title} />

    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-poppins font-semibold text-5xl">
            <span className="text-dark-cream">Pro</span>jects
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>

      </motion.div>

      {/* PROJECTS */}
      <div className="flex p-1 justify-center my-20">
        <motion.div
          className="sm:grid sm:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}

          <Project title="Water Level Monitoring System using IoT"
          content="The main purpose of the project is to monitor the usage rate of water and give report on it"
          src={iot}
          />

          <Project title="Student's Performance Prediction using AI"
          content="The main purpose of the project is to predict student's academic performance based on past results and other socio-economic factors "
          src={student}
          
          />

        <Project title="Gym Buddy - Amazon Alexa skill"
          content="The project invloves development of alexa skill for amazon echo device that will generate gym workout plan for users based on their fitness level and fitness goal "
          src={alexa}
          />

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
