import React from 'react';
import { motion } from 'framer-motion';
import PageTitle from '../components/PageTitle';
import ContentCard from '../components/ContentCard';

const DebateVideo: React.FC = () => {
  return (
    <div className="min-h-screen px-4 pt-24 pb-16">
      <div className="container max-w-4xl mx-auto">
        <PageTitle 
          title="Debate Video" 
          subtitle="Click the video to watch"
        />
        
      
        <ContentCard>
        <div className="mb-8 overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
            <a href="https://youtu.be/YacPWeLPMJ4" target="_blank" rel="noopener noreferrer">
              <img 
              src="https://img.youtube.com/vi/YacPWeLPMJ4/0.jpg" 
              alt="Video Thumbnail" 
              className="object-cover w-full h-full rounded-lg" 
              />
            </a>
            </div>
          
          <h2 className="mb-4 font-serif text-2xl text-gold-400">
            "The House Believes that the Increase Reliance in Emoji and Internet Slang is Damaging Formal Written Comnunication Skills."
          </h2>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="mb-6 leading-relaxed text-white/90">
            During the debate, I served as the Prime Minister of the Proposition side. My key arguments emphasized that formal writing is essential for accurately conveying information in a clear and well-structured manner. I also established a parameter by framing the discussion within an academic setting.  </p>
            
            <p className="mb-6 leading-relaxed text-white/90">
            Honestly, I wasn't able to prepare enough as I was dealing with many things at once. However, luckily the selected topic was one of the topics I was able to study and we were in the advantage side because of the topic that we are sided with. I had prepared the debate a night before the performance,  I had researched each topic that could be possible to land on us and tried to understand deeply the rules and fallacies.     </p>
            
            <p className="leading-relaxed text-white/90">
            One of the challenges I have encountered was speaking publicly. My hands and knees were trembling as I was speaking. I was trying to engage with the audience by trying to ask question. I was able to address the challenge by continually encouraging that it will only last 5 minutes.         </p>
         <p className="leading-relaxed text-white/90">I was able to learn about the instances of how we can really shape our self in the audience by building up Ethos and it also helped me think critically as there are limitless possibility of what they may counter to our arguments. It has also helped me with enhancing my communication skills as I am still lacking with the delivery and eye contact but at last we were able to finish the activity and gained knowledge and led us to enhance our skills. It also allowed me to view every perspective that I can counter or they mat counter.</p>
          </div>
        </ContentCard>
      </div>
    </div>
  );
};

export default DebateVideo;