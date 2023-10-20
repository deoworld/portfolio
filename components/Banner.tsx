import { motion } from "framer-motion";

const OverlayBanner = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black  bg-opacity-70 text-textGreen text-center flex justify-center items-center z-50">
      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold border border-textGreen rounded-lg p-6">
        🚧🛠️ Website Undergoing Reconstruction 👷🏗️
      </h1>
    </div>
  );
};

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:pz-10 xl:px-4"
    >
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Hi, I am
      </motion.h3>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Daniel Oriazowan.{" "}
        <span className="text-textDark mt-2 lgl:mt-4">
          I build awesome things for the web.
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        With an illustrious journey spanning two decades, my fervor for web
        development has been the driving force behind my career. From my early
        days as a computer instructor to my current standing as a seasoned web
        developer, I've honed my craft meticulously. My journey commenced in
        2005, took a hiatus, and resurged with newfound vigor in 2017.
        <br />
        <br />
        Armed with 4+ years of expertise in React, complemented by a decade of
        immersion in JavaScript, I've cultivated a strong foundation in both
        front-end and back-end development. My proficiency extends to crafting
        enchanting web applications, known for their user-friendliness and
        exceptional responsiveness.
        <br />
        <br />
        In the dynamic realm of React, I orchestrate digital masterpieces that
        captivate audiences, and I invite you to be part of this compelling web
        development odyssey.{" "}
        <a href="">
          <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
            Learn More
            <span className="absolute w-full h-[1px] bg-textGreen  left-0 bottom-1  -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </a>
      </motion.p>
      <motion.button
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
      >
        Check out my Projects
      </motion.button>
      <OverlayBanner />
    </section>
  );
};

export default Banner;
