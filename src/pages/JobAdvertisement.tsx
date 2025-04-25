import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, Clock } from 'lucide-react';
import PageTitle from '../components/PageTitle';
import ContentCard from '../components/ContentCard';

const JobAdvertisement: React.FC = () => {
  return (
    <div className="min-h-screen px-4 pt-24 pb-16">
      <div className="container max-w-4xl mx-auto">
        <PageTitle 
          title="Job Advertisement" 
          subtitle=""
        />
        
        <ContentCard>
          <div className="pb-6 mb-6 border-b border-purple-600/30">
            <div className="flex flex-col mb-4 md:flex-row md:items-center md:justify-between">
              <h2 className="mb-2 font-serif text-2xl text-gold-400 md:mb-0">
                Software QA Specialist (Microsoft Azure)
              </h2>
              <div className="px-4 py-1 text-sm rounded-full bg-purple-700/50 text-white/90">
                New Opportunity
              </div>
            </div>
            
            <div className="flex flex-wrap mb-6 text-sm gap-y-2 gap-x-4 text-white/70">
              <div className="flex items-center">
                <Briefcase size={16} className="mr-1 text-gold-400" />
                <span>iReply Back Office Services Inc.</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-1 text-gold-400" />
                <span>Work from Home</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1 text-gold-400" />
                <span>Full-Time · Permanent</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-1 text-gold-400" />
                <span>Posted: April 2025</span>
              </div>
            </div>

            <p className="mb-4 text-white/90">
              As a member of QA, you will work with the team responsible for front-end applications and play a significant role in the overall quality of the product and development process. You'll help test critical software and design and implement automated regression testing.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="mb-3 font-serif text-xl text-gold-400">Your Key Responsibilities:</h3>
            <ul className="space-y-2 list-disc list-inside text-white/90">
              <li>Work closely with the project team to understand User Story acceptance criteria and translate them into test cases.</li>
              <li>Review and analyze system requirements and technical specifications to design test iterations.</li>
              <li>Execute manual test cases, document bugs, and submit results.</li>
              <li>Assist developers with diagnosing issues and provide design feedback.</li>
              <li>Help improve QA standards, processes, and best practices.</li>
              <li>Contribute to defining product functional specs, performance criteria, and supported devices/browsers.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="mb-3 font-serif text-xl text-gold-400">Skills Required:</h3>
            <ul className="space-y-2 list-disc list-inside text-white/90">
              <li>Technology certificate or equivalent background</li>
              <li>3–5 years of experience in Quality Assurance</li>
              <li>ISTQB certification is a strong plus</li>
              <li>Experience with Microsoft Azure DevOps (Test Cases & Test Plans)</li>
              <li>Excellent analytical and troubleshooting skills</li>
              <li>Resourceful, self-reliant, and detail-oriented</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="mb-3 font-serif text-xl text-gold-400">Benefits:</h3>
            <ul className="space-y-2 list-disc list-inside text-white/90">
              <li>Competitive salary: PHP 75,000 – PHP 150,000/month</li>
              <li>13th month pay and overtime pay</li>
              <li>Health insurance</li>
              <li>Paid training and certification support</li>
              <li>Company Christmas gift</li>
              <li>Work-from-home setup</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="mb-3 font-serif text-xl text-gold-400">Schedule:</h3>
            <ul className="space-y-2 list-disc list-inside text-white/90">
              <li>8-hour shift</li>
              <li>Late shift, night shift, holidays</li>
              <li>Shift system and possible overtime</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="mb-3 font-serif text-xl text-gold-400">Experience & Certification:</h3>
            <ul className="space-y-2 list-disc list-inside text-white/90">
              <li>Azure DevOps: 3 years (Required)</li>
              <li>Jira Test Cases & Test Plans: 3 years (Required)</li>
              <li>ISTQB Certification (Required)</li>
            </ul>
          </div>
        </ContentCard>

        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="mb-4 text-white/70">
          
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default JobAdvertisement;
