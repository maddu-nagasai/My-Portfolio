import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, FaJs, FaHtml5, FaCss3Alt, FaJava, FaDatabase, FaCloud, FaGitAlt, FaLinux, FaWindows, FaAws, FaDocker, FaReact 
} from 'react-icons/fa';
import { 
  SiTypescript, SiC, SiSpringboot, SiDjango, SiFlask, SiExpress, SiMongodb, SiPostgresql, SiMysql, SiGooglecloud, SiKubernetes, SiGraphql 
} from 'react-icons/si';

type Skill = {
  name: string;
  icon: React.ReactNode;
  category: string;
};

const skillsData: Skill[] = [
  { name: 'Python', icon: <FaPython className="text-yellow-500 text-4xl" />, category: 'Languages' },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-4xl" />, category: 'Languages' },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-600 text-4xl" />, category: 'Languages' },
  { name: 'C', icon: <SiC className="text-gray-600 text-4xl" />, category: 'Languages' },
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500 text-4xl" />, category: 'Languages' },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-600 text-4xl" />, category: 'Languages' },
  { name: 'Java', icon: <FaJava className="text-red-500 text-4xl" />, category: 'Languages' },
  { name: 'React.js', icon: <FaReact className="text-blue-400 text-4xl" />, category: 'Frameworks & Libraries' },
  { name: 'Django', icon: <SiDjango className="text-green-700 text-4xl" />, category: 'Frameworks & Libraries' },
  { name: 'Flask', icon: <SiFlask className="text-gray-500 text-4xl" />, category: 'Frameworks & Libraries' },
  { name: 'Express.js', icon: <SiExpress className="text-yellow-500 text-4xl" />, category: 'Frameworks & Libraries' },
  { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500 text-4xl" />, category: 'Frameworks & Libraries' },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500 text-4xl" />, category: 'Databases' },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-700 text-4xl" />, category: 'Databases' },
  { name: 'MySQL', icon: <SiMysql className="text-blue-500 text-4xl" />, category: 'Databases' },
  { name: 'AWS', icon: <FaAws className="text-orange-500 text-4xl" />, category: 'Cloud & DevOps' },
  { name: 'Google Cloud', icon: <SiGooglecloud className="text-blue-400 text-4xl" />, category: 'Cloud & DevOps' },
  { name: 'Docker', icon: <FaDocker className="text-blue-500 text-4xl" />, category: 'Cloud & DevOps' },
  { name: 'Kubernetes', icon: <SiKubernetes className="text-blue-600 text-4xl" />, category: 'Cloud & DevOps' },
  { name: 'Git', icon: <FaGitAlt className="text-orange-600 text-4xl" />, category: 'Version Control & Tools' },
  { name: 'GraphQL', icon: <SiGraphql className="text-pink-500 text-4xl" />, category: 'Version Control & Tools' },
  { name: 'Linux', icon: <FaLinux className="text-gray-400 text-4xl" />, category: 'Operating Systems' },
  { name: 'Windows', icon: <FaWindows className="text-blue-500 text-4xl" />, category: 'Operating Systems' }
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  const categories = [
    { id: 'all', name: 'All Skills', icon: <FaDatabase className="text-blue-500 text-2xl" /> },
    { id: 'Languages', name: 'Languages', icon: <FaPython className="text-yellow-500 text-2xl" /> },
    { id: 'Frameworks & Libraries', name: 'Frameworks & Libraries', icon: <SiSpringboot className="text-green-500 text-2xl" /> },
    { id: 'Databases', name: 'Databases', icon: <FaDatabase className="text-purple-500 text-2xl" /> },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', icon: <FaCloud className="text-blue-600 text-2xl" /> },
    { id: 'Version Control & Tools', name: 'Version Control & Tools', icon: <FaGitAlt className="text-red-500 text-2xl" /> },
    { id: 'Operating Systems', name: 'Operating Systems', icon: <FaLinux className="text-black text-2xl" /> }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">My technical toolkit and expertise</p>
        </div>

        <div className="flex justify-center mb-10 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 p-2">
          <div className="flex flex-nowrap gap-1">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id ? 'bg-foreground text-background' : 'bg-muted/50 hover:bg-muted'
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </div>

        <motion.div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-5 max-w-5xl mx-auto p-2" layout>
          {filteredSkills.map(skill => (
            <motion.div 
              key={skill.name} 
              className="p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-700 hover:via-black-700 hover:to-black-700 hover:text-white"
            >
              <div className="mb-4 p-3 rounded-lg w-fit mx-auto">
                {skill.icon}
              </div>
              <h3 className="text-center font-medium">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
