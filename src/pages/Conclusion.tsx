import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import ContentCard from '../components/ContentCard';

const Conclusion: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <PageTitle 
          title="Conclusion" 
          subtitle="Reflections and future aspirations"
        />
        
        <ContentCard>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-white/90 mb-6 leading-relaxed">
              As I reflect on my academic journey and the development of this e-portfolio, I am struck by the profound growth that has occurred over the course of my studies. This portfolio represents not just a collection of assignments and projects, but a comprehensive narrative of my evolution as a computer science professional. Through coursework, collaborative projects, and independent exploration, I have built a strong foundation of technical knowledge while simultaneously developing the critical thinking and communication skills essential for success in the technology industry. The process of creating this e-portfolio has itself been valuable, prompting me to critically evaluate my work, identify strengths and areas for growth, and articulate my professional identity.
            </p>
            
            <p className="text-white/90 mb-6 leading-relaxed">
              Looking toward the future, I am excited to apply the skills and knowledge I have acquired to real-world challenges in the technology sector. My immediate goal is to secure a position as a Full Stack Developer where I can contribute to innovative projects while continuing to expand my technical expertise. In the longer term, I aspire to grow into roles with increasing responsibility, potentially in areas such as technical leadership or specialized development in emerging technologies. I am particularly interested in exploring how technology can be leveraged to address social and environmental challenges, and I hope to direct my career toward opportunities that align with this interest. Throughout my professional journey, I remain committed to continuous learning, adaptability, and ethical practice.
            </p>
            
            <p className="text-white/90 leading-relaxed">
              This e-portfolio will continue to evolve as I progress in my career, serving as both a documentation of past achievements and a platform for new professional milestones. I view it as a living document that will be regularly updated to reflect new skills, experiences, and accomplishments. As I transition from academia to industry, I carry with me not only the technical skills developed through my coursework, but also a deep appreciation for the collaborative nature of software development and the importance of user-centered design. I look forward to the challenges and opportunities that lie ahead, confident in my preparation and eager to make meaningful contributions to the field of computer science.
            </p>
          </div>
        </ContentCard>
        
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link 
            to="/table-of-contents"
            className="inline-flex items-center px-5 py-2 bg-purple-700 hover:bg-purple-600 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Table of Contents
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Conclusion;