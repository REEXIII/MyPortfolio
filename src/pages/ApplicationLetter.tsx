import React from 'react';
import { motion } from 'framer-motion';
import PageTitle from '../components/PageTitle';
import ContentCard from '../components/ContentCard';

const ApplicationLetter: React.FC = () => {
  return (
    <div className="min-h-screen px-4 pt-24 pb-16">
      <div className="container max-w-4xl mx-auto">
        <PageTitle 
          title="Application Letter" 
          subtitle="Cover letter for job application"
        />
        
        <div className="flex justify-end mb-4">
          <motion.a 
            href="#" 
            className="inline-flex items-center px-4 py-2 text-white transition-all duration-300 bg-purple-700 rounded-lg hover:bg-purple-600"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Download PDF
          </motion.a>
        </div>
        
        <ContentCard>
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="mb-6 text-right">
              <p className="text-white/90">April 15, 2028</p>
            </div>
            
            <div className="mb-6">
              <p className="text-white/90">Trixie Mae C. Lim</p>
              <p className="text-white/90">Tumaga Porcentro, Zamboanga City, Philippines.</p>
              <p className="text-white/90">7000</p>

            </div>
            <div className="mb-6">
              <p className="text-white/90">Ms. Aileen Judan-Jiao</p>
              <p className="text-white/90">President & Country General Manager</p>
              <p className="text-white/90">IBM Philippines</p>
              <p className="text-white/90">2nd-4th Floors IBM Plaza</p>
              <p className="text-white/90">8 Eastwood Avenue</p>
              <p className="text-white/90">Eastwood City Cyberpark</p>
              <p className="text-white/90">E. Rodriguez - Jr. Avenue</p>
              <p className="text-white/90">1110 Libis - Quezon City, Philippines</p>
            </div>
            
            
            <div className="mb-6">
              <p className="text-white/90">Dear Ms. Judan-Jiao,</p>
            </div>
            
            <p className="mb-4 text-white/90">
            It’s a pleasure connecting with you. It is with deep appreciation and respect that I reach out to you today to express my sincere interest in joining in and contributing to the IBM Philippines success as part of the Back-end Developer entry level. My words bear great consideration, as this company has been a frontrunner and pioneer in the Technological Advancement in the industry. My admiration for the company's journey in the industry continues to be exceptional under your expertise and insightful leadership. You have had an extraordinary experience, as the first-ever Filipina CGM and then subsequently spearheading the complete digital transformation alongside emphasis on inclusion, diversity, and leadership development for the region.

            </p>
            
            <p className="mb-4 text-white/90">
            At present, my background in Information Technology has a strong focus on development. As I am focusing on learning different programming languages and strengthening my coding  proficiency. It has been widely recognized that IBM seeks to maintain relevance in competencies with the rapid evolving technology in the world. I have always looked for chances to widen my competencies, including learning new programming languages and mastering Java. This would enable me to support IBM ambitions, improving the company's practices and culture in the Philippines. The possibility of working together to actualize IBM Philippines’ growth strategies is an opportunity I would greatly appreciate.

            </p>
            
            <p className="mb-4 text-white/90">
            I sincerely show my gratitude for your valuable time and consideration. I hope to be able to explain how my experiences and skill set can fulfill your role expectations at IBM. I am available for an interview anytime at your convenience. I am looking forward to the opportunity and to discuss further.
            </p>
            
            
            <div className="mt-6">
              <p className="text-white/90">Sincerely,</p>
              <p className="mt-4 text-white/90">Trixie Mae C. Lim
              </p>
              <p className="text-white/90">limtrixiemaec@gmail.com</p>
              <p className="text-white/90">(0936)-273-1189</p>
            </div>
          </div>
        </ContentCard>
      </div>
    </div>
  );
};

export default ApplicationLetter;