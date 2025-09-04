import { motion } from "framer-motion";
import { useGetHeroQuery } from "../api/heroApi";

const Hero = () => {
  const { data: heroData } = useGetHeroQuery();

  // Default content
  const defaultHeading = "Full Stack Engineer &";
  const defaultHighlightedText = "AI/ML Specialist";
  const defaultSubheading =
    "Junior software engineer with 1 year of experience in full-stack web development and AI/ML integration. I build modern applications using React, Node.js, and Python.";
  const defaultSupportingLine =
    "Passionate about turning complex problems into scalable, user-friendly digital products that deliver real business value.";

  return (
    <section className="bg-gradient-to-r from-[#1E293B] via-[#1E3344] to-[#0F3B3B] min-h-[calc(100vh-64px)] flex items-center justify-center text-center px-6">
      <div className="max-w-3xl">
        {/* Heading with gradient on part */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          {heroData?.heading ? heroData.heading : defaultHeading}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#10B981]">
            {heroData?.highlightedText
              ? heroData.highlightedText
              : defaultHighlightedText}
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-2xl text-gray-300 mb-4"
        >
          {heroData?.subheading ? heroData.subheading : defaultSubheading}
        </motion.h2>

        {/* Supporting Line */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-gray-400 mb-8"
        >
          {heroData?.supportingLine
            ? heroData.supportingLine
            : defaultSupportingLine}
        </motion.h3>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex justify-center gap-4"
        >
          <button className="px-6 py-3 font-medium rounded-lg shadow-lg text-white bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#10B981] hover:opacity-90 transition">
            View Projects
          </button>

          <button className="px-6 py-3 font-medium rounded-lg border border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white transition">
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
