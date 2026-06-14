"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Briefcase } from "lucide-react";
import { experiences } from "@/lib/data";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="py-20 sm:py-32 bg-slate-50 dark:bg-slate-950"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
            Career Path
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Professional Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 transform sm:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-6"
              >
                {/* Timeline Dot */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-white dark:bg-slate-900 rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                  {/* Date Badge */}
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-3">
                    {exp.startDate} – {exp.endDate}
                  </span>

                  {/* Role & Company */}
                  <div className="flex items-start gap-3 mb-4">
                    {exp.logo && (
                      <div className="relative w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800">
                        <Image
                          src={exp.logo}
                          alt={exp.company}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mt-0.5">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span className="font-medium text-sm">{exp.company}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        {desc}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}