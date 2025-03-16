import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaJava, FaJs, FaReact, FaDocker, FaAws, FaGitAlt, FaDatabase, FaCloud, FaHtml5, FaCss3Alt, FaLinux, FaWindows } from 'react-icons/fa';
import { SiC, SiDjango, SiFlask, SiExpress, SiMongodb, SiPostgresql, SiGooglecloud, SiKubernetes, SiGraphql, SiTypescript, SiSpringboot, SiMysql } from 'react-icons/si';

export function Skills() {
  const skills = [
    {
      category: 'Languages',
      icon: <FaDatabase className="w-6 h-6 text-blue-500" />,
      items: [
        { name: 'Python', icon: <FaPython className="text-yellow-500" /> },
        { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
        { name: 'C', icon: <SiC className="text-gray-600" /> },
        { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
        { name: 'Java', icon: <FaJava className="text-red-500" /> },
      ]
    },
    {
      category: 'Frameworks & Libraries',
      icon: <SiSpringboot className="w-6 h-6 text-green-500" />,
      items: [
        { name: 'React.js', icon: <FaReact className="text-blue-400" /> },
        { name: 'Django', icon: <SiDjango className="text-green-700" /> },
        { name: 'Flask', icon: <SiFlask className="text-gray-500" /> },
        { name: 'Express.js', icon: <SiExpress className="text-black" /> },
        { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500" /> },
      ]
    },
    {
      category: 'Databases',
      icon: <FaDatabase className="w-6 h-6 text-purple-500" />,
      items: [
        { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-700" /> },
        { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> },
      ]
    },
    {
      category: 'Cloud & DevOps',
      icon: <FaCloud className="w-6 h-6 text-blue-600" />,
      items: [
        { name: 'AWS', icon: <FaAws className="text-orange-500" /> },
        { name: 'Google Cloud', icon: <SiGooglecloud className="text-blue-400" /> },
        { name: 'Docker', icon: <FaDocker className="text-blue-500" /> },
        { name: 'Kubernetes', icon: <SiKubernetes className="text-blue-600" /> },
      ]
    },
    {
      category: 'Version Control & Tools',
      icon: <FaGitAlt className="w-6 h-6 text-red-500" />,
      items: [
        { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
        { name: 'GitHub', icon: <FaGitAlt className="text-black" /> },
        { name: 'GraphQL', icon: <SiGraphql className="text-pink-500" /> },
      ]
    },
    {
      category: 'Operating Systems',
      icon: <FaLinux className="w-6 h-6 text-black" />,
      items: [
        { name: 'Linux', icon: <FaLinux className="text-black" /> },
        { name: 'Windows', icon: <FaWindows className="text-blue-500" /> },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-8 animate-fadeIn"
            >
              <div className="flex items-center gap-3 mb-6">
                {skillGroup.icon}
                <h3 className="text-lg font-semibold">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span key={skillIndex} className="flex items-center gap-2 px-3 py-1 bg-primary/10 hover:bg-primary/20 transition-colors rounded-full text-sm">
                    {skill.icon} {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
