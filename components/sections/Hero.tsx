"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import Button from "@/components/ui/Button";
import { personalInfo, cvFilePath } from "@/lib/data";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const handleScrollToWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden
        bg-slate-50 dark:bg-slate-950"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-200 dark:bg-blue-900/30
            rounded-full blur-3xl opacity-50"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-200 dark:bg-purple-900/30
            rounded-full blur-3xl opacity-50"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80
            bg-emerald-200 dark:bg-emerald-900/20 rounded-full blur-3xl opacity-30"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-slate-600 dark:text-slate-400 text-lg sm:text-xl mb-4"
          >
            Hello, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold
              text-slate-900 dark:text-white mb-4"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Role with gradient */}
          <motion.div variants={itemVariants} className="mb-6">
            <span
              className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold
                bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400
                dark:to-purple-400 bg-clip-text text-transparent"
            >
              {personalInfo.role}
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-400
              max-w-2xl mx-auto mb-8"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button size="lg" onClick={handleScrollToWork}>
              View Work
              <ArrowDown className="ml-2 w-5 h-5" />
            </Button>
            <a href={cvFilePath} download>
              <Button variant="outline" size="lg">
                Download CV
                <Download className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center gap-4">
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600
                dark:text-slate-400 hover:bg-blue-100 dark:hover:bg-blue-900/30
                hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600
                dark:text-slate-400 hover:bg-blue-100 dark:hover:bg-blue-900/30
                hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Email Me"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-slate-400 dark:border-slate-600
            flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-3 bg-slate-400 dark:bg-slate-600 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}