import React from 'react';
import { motion } from 'framer-motion';
import PageTitle from '../components/PageTitle';
import ContentCard from '../components/ContentCard';

const SelfAssessment: React.FC = () => {
  const images = [
    'b.jpg', // Image 1
    'c.jpg'  // Image 2
  ];

  return (
    <div className="min-h-screen px-4 pt-24 pb-16">
      <div className="container max-w-6xl mx-auto">
        <PageTitle 
          title="Self Assessment" 
          subtitle="Evaluating my skills and competencies"
        />

        <motion.div 
          className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {images.map((imgSrc, index) => (
            <motion.div 
              key={index}
              className="overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <img 
                src={imgSrc} 
                alt={`Self Assessment ${index + 1}`}
                className="object-cover w-full h-[792px] max-h-[792px] transition-transform duration-500 transform hover:scale-105 rounded-lg"
              />
            </motion.div>
          ))}
        </motion.div>

        <ContentCard>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="mb-6 leading-relaxed text-white/90">
            My strongest performance is in the clarity and precision of my communication. I was able to speak clearly, and while my delivery is still improving, it has become more confident and effective. Additionally, my arguments are well-structured, with strong supporting examples and evidence that reinforce my points.
            </p>

            <p className="mb-6 leading-relaxed text-white/90">
            One area for improvement is maintaining consistent eye contact with the audience. I also need to work on standing still with a more confident and respectful posture. By doing so, I would appear more composed, which would help keep the audience focused on my message.  </p>

            <p className="leading-relaxed text-white/90">
              The strategy I would apply in the future is use fallacies that can be easily identified. Raise point of information especially when they are going away with the topic. Lastly, add more evidence to support the arguments so it will build even stronger.
            </p>
          </div>
        </ContentCard>
      </div>
    </div>
  );
};

export default SelfAssessment;
