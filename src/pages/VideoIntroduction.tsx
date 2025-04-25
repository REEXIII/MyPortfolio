import React from 'react';
import { motion } from 'framer-motion';
import PageTitle from '../components/PageTitle';
import ContentCard from '../components/ContentCard';

const VideoIntroduction: React.FC = () => {
  return (
    <div className="min-h-screen px-4 pt-24 pb-16">
      <div className="container max-w-4xl mx-auto">
        <PageTitle 
          title="Video Introduction" 
          subtitle="Click the video to watch"
        />
        
        <ContentCard>
          <div className="overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
            <a 
              href="https://www.youtube.com/watch?v=68T_yI7605I" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src="https://img.youtube.com/vi/68T_yI7605I/maxresdefault.jpg" 
                alt="Video Thumbnail" 
                className="object-cover w-full h-full rounded-lg" 
              />
            </a>
          </div>
        </ContentCard>
      </div>
    </div>
  );
};

export default VideoIntroduction;
