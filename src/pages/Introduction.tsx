import React from 'react';
import { motion } from 'framer-motion';
import PageTitle from '../components/PageTitle';
import ContentCard from '../components/ContentCard';

const Introduction: React.FC = () => {
  return (
    <div className="min-h-screen px-4 pt-24 pb-16">
      <div className="container max-w-4xl mx-auto">
        <PageTitle 
          title="Introduction" 
          subtitle="A Path in the Exploring the World of Communication"
        />
        
        <ContentCard>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="mb-6 leading-relaxed text-white/90">
            Good day, I am Trixie Mae C. Lim who is currently studying at Pilar College of Zamboanga City, Inc. I am currently taking Bachelor of Science in Information Teachnology as this spark my interest in the world of programming and how graphics are used in front-end designs. My aspiration in life is to be a lawyer, In a field of Cyberlaw which concerns the regulation and use of information technology of the netizens, I am an undergraduate who have experience to be an intern in a government work setting at DICT. 
            </p>
            
            <p className="mb-6 leading-relaxed text-white/90">
          
My communication skills does not have a well-build foundation. However, I intend to continue on growing and solidifying my communication skills. My strength mainly focuses on how I can convey information, express my ideas, and able to listen well. Also, I lack in thoughtfully using tone which could misinterpret my opinions and thoughts.
            </p>
            
            <p className="mb-6 leading-relaxed text-white/90">
            Communication in todays era are well developed, in such cases in academics, we are thought how to critically think and compose essays, poems, and even stories for us to be capable in writing. In professional settings, our communication plays a big impact  as it is significant to have a group of workers able to express their ideas and opinions. In personal life, communication plays like a bridge walking to the other side to understand and learn through the course of life.  </p>             
            
            <p className="mb-6 leading-relaxed text-white/90">
            One of the notable experience, It was during an activity were we were asked to create a campus map infographic. My groupmates and I, was unable to decide how our infographic should look like, as for some certain reason our ideas clashes each other. Despite of the conflict, we were able to hear each other base on their suggestion and opinions. At last, we were able to cooperate more as our ideas and expression were expressed and respected by one another. We were able to agree on a term so that everyone would be satisfied.    </p>
            
      
          </div>
        </ContentCard>
        
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a 
            href="/table-of-contents"
            className="inline-flex items-center px-5 py-2 font-medium text-white transition-all duration-300 bg-purple-700 rounded-lg shadow-md hover:bg-purple-600 hover:shadow-lg"
          >
            Explore Content
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Introduction;