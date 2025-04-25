import React from 'react';
import { motion } from 'framer-motion';
import PageTitle from '../components/PageTitle';
import ContentCard from '../components/ContentCard';

const PeerAssessment: React.FC = () => {
  const feedbackItems = [
    {
      image: "o.jpg", // Example paper image URL
      description: "Title: The House Believes that Traditional Media is Still More Credible than Social Media for News and Information."
    },
    {
      image: "p.jpg", // Example paper image URL
      description: "Title: The House Believes that Digital Activism is an Effective as Traditional Activism in Promoting Social Change "   },
    {
      image: "i.jpg", // Example paper image URL
      description: "Title: The House Believes that Countries Should Impose Stricter Regulation on ForeignMedia to Protect National Culture" },
    {
      image: "z.jpg", // Example paper image URL
      description: "Title: The House Believes that Modern Education Focuses Too Much on Grammar and Not Enough on Communication Skills" },
    
  ];

  return (
    <div className="min-h-screen px-4 pt-24 pb-16">
      <div className="container max-w-4xl mx-auto">
        <PageTitle 
          title="Peer Assessment" 
          subtitle="Feedbacks I gave to my peers"
        />
        
        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2">
          {feedbackItems.map((item, index) => (
            <motion.div 
              key={item.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <ContentCard delay={0.2 * index}>
                <div className="flex flex-col items-center gap-4">
                  <div className="overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src={item.image} 
                      alt={`Paper ${index + 1}`}
                      className="object-cover w-full h-64 transition-transform duration-500 transform hover:scale-105"
                    />
                  </div>
                  <p className="mt-4 text-white/90">{item.description}</p>
                </div>
              </ContentCard>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-8 text-center text-white/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p>These were the feedbacks I gave based on their performance during the debate.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default PeerAssessment;
