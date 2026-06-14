"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";
import { personalInfo, stats, education, certifications } from "@/lib/data";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="about"
      className="py-20 sm:py-32 bg-white dark:bg-slate-900"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Content Column */}
          <div>
            <motion.p
              variants={itemVariants}
              className="text-blue-600 dark:text-blue-400 font-medium mb-2"
            >
              About Me
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6"
            >
              Electrical Engineer & MEP Project Lead
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              {personalInfo.bio.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </motion.div>

            {/* Availability Badge */}
            {personalInfo.availableForWork && (
              <motion.div variants={itemVariants} className="mt-6">
                <span
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                    bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400
                    text-sm font-medium"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Available for opportunities
                </span>
              </motion.div>
            )}

            {/* Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="mt-10 grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Sidebar Column - Education & Certifications */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Education */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Education
                </h3>
              </div>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-blue-500 pl-4">
                    <p className="font-medium text-slate-900 dark:text-white">
                      {edu.degree}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {edu.institution}
                    </p>
                    <div className="flex gap-4 mt-1 text-xs text-slate-500 dark:text-slate-400">
                      <span>{edu.year}</span>
                      <span>•</span>
                      <span>{edu.grade}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Certifications
                </h3>
              </div>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                  >
                    <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Competencies */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Core Competencies
              </h3>
              <ul className="grid grid-cols-1 gap-2 text-sm text-slate-600 dark:text-slate-400">
                {[
                  "MEP Project Execution & Coordination",
                  "Electrical Project Engineering & Commissioning",
                  "HT/LT Power Distribution Systems",
                  "Preventive & Predictive Maintenance",
                  "Electrical Safety & Compliance Audits",
                  "Load Calculation, Cable Sizing & SLD Review",
                  "CAPEX Coordination & Vendor Management",
                  "SAP MM & Spare Planning",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}