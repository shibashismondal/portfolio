"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, FolderOpen } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { projects } from "@/lib/data";
import type { Project } from "@/lib/types";

type Tab = "mep" | "maintenance";

const tabs: { label: string; value: Tab }[] = [
  { label: "MEP", value: "mep" },
  { label: "Maintenance", value: "maintenance" },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<Tab>("mep");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = projects.filter((p) => p.category === activeTab);
  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-20 sm:py-32 bg-white dark:bg-slate-900"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Featured Projects
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center gap-2 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200
                ${
                  activeTab === tab.value
                    ? "bg-blue-600 text-white dark:bg-blue-500 shadow-lg shadow-blue-500/25"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          layout
          className="grid md:grid-cols-2 gap-6 mb-8"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
            >
              <ProjectCard project={project} featured />
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Other Projects
            </h3>
            <motion.div
              layout
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  layout
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <FolderOpen className="w-12 h-12 mx-auto text-slate-400 mb-4" />
            <p className="text-slate-500 dark:text-slate-400">
              No projects in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <Card className={`h-full flex flex-col overflow-hidden group ${featured ? "md:flex-row" : ""}`}>
      {/* Project Image Placeholder */}
      <div className={`${featured ? "md:w-2/5" : "aspect-video"} bg-slate-200 dark:bg-slate-700 relative overflow-hidden flex-shrink-0`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-slate-400 dark:text-slate-500 text-sm px-4 text-center">
            {project.title}
          </span>
        </div>
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded">
            {project.category.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={`p-6 flex flex-col flex-grow ${featured ? "md:w-3/5" : ""}`}>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
          {project.tags.length > 4 && (
            <Badge>+{project.tags.length - 4}</Badge>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}