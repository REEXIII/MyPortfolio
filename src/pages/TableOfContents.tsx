import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Video, Award, Briefcase, FileText, User } from 'lucide-react';
import PageTitle from '../components/PageTitle';

const contentSections = [
  {
    title: "Introduction",
    path: "/introduction",
    icon: <BookOpen className="w-6 h-6 text-gold-400" />,
    description: "An overview of my academic journey and portfolio"
  },
  {
    title: "Debate Video",
    path: "/debate-video",
    icon: <Video className="w-6 h-6 text-gold-400" />,
    description: "Recorded debate with analysis and reflections"
  },
  {
    title: "Self Assessment",
    path: "/self-assessment",
    icon: <Award className="w-6 h-6 text-gold-400" />,
    description: "Evaluation of personal skills and competencies"
  },
  {
    title: "Peer Assessment",
    path: "/peer-assessment",
    icon: <Award className="w-6 h-6 text-gold-400" />,
    description: "Feedback and evaluations from classmates"
  },
  {
    title: "Job Advertisement",
    path: "/job-advertisement",
    icon: <Briefcase className="w-6 h-6 text-gold-400" />,
    description: "Relevant job postings in my field"
  },
  {
    title: "Resume",
    path: "/resume",
    icon: <FileText className="w-6 h-6 text-gold-400" />,
    description: "Professional resume with skills and experience"
  },
  {
    title: "Application Letter",
    path: "/application-letter",
    icon: <FileText className="w-6 h-6 text-gold-400" />,
    description: "Sample cover letter for job applications"
  },
  {
    title: "Video Introduction",
    path: "/video-introduction",
    icon: <Video className="w-6 h-6 text-gold-400" />,
    description: "Personal introduction and interview responses"
  },
  {
    title: "Conclusion",
    path: "/conclusion",
    icon: <User className="w-6 h-6 text-gold-400" />,
    description: "Final thoughts and future aspirations"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const TableOfContents: React.FC = () => {
  return (
    <div className="min-h-screen px-4 pt-24 pb-16">
      <div className="container max-w-5xl mx-auto">
        <PageTitle 
          title="Table of Contents" 
          subtitle="Navigate through my portfolio"
        />
        
        <motion.div 
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {contentSections.map((section, index) => (
            <motion.div key={index} variants={item}>
              <Link 
                to={section.path} 
                className="block h-full"
              >
                <div className="h-full p-6 transition-all duration-300 transform border rounded-lg bg-purple-800/30 backdrop-blur-sm border-purple-600/30 hover:bg-purple-700/40 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="p-2 mr-3 rounded-full bg-purple-900/50">
                      {section.icon}
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-white">{section.title}</h3>
                  </div>
                  <p className="text-white/80">{section.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="mb-4 text-white/70">
            Explore the sections above to learn more about my academic work and professional development.
          </p>
          <Link 
            to="/"
            className="inline-flex items-center px-5 py-2 font-medium text-white transition-all duration-300 bg-purple-700 rounded-lg shadow-md hover:bg-purple-600 hover:shadow-lg"
          >
            Back to Cover Page
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default TableOfContents;