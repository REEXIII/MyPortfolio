import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Download } from 'lucide-react';
import PageTitle from '../components/PageTitle';
import ContentCard from '../components/ContentCard';

const Resume: React.FC = () => {
  return (
    <div className="min-h-screen px-4 pt-24 pb-16">
      <div className="container max-w-4xl mx-auto">
        <PageTitle 
          title="Resume" 
          subtitle="Professional experience and qualifications"
        />
        
        <div className="flex justify-end mb-4">
          <motion.a 
            href="https://docs.google.com/document/d/1XII97nK8zJFyJRllLUgAISq2j6WLy5ZXUD-4jSbufcw/edit?usp=sharing" 
            className="inline-flex items-center px-4 py-2 text-white transition-all duration-300 bg-purple-700 rounded-lg hover:bg-purple-600"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Download size={16} className="mr-2" />
            Download PDF
          </motion.a>
        </div>
        
        <ContentCard>
          <div className="p-6 mb-6 -mx-6 -mt-6 border-b rounded-t-lg bg-purple-900/40 border-purple-600/30">
            <h2 className="mb-2 font-serif text-3xl text-white">Trixie Mae C. Lim</h2>
            <h3 className="mb-4 text-xl text-gold-400">Programmer</h3>
            
            <div className="grid grid-cols-1 gap-3 text-sm md:grid-cols-2 text-white/80">
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-gold-400" />
                <span>limtrixiemaec@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-gold-400" />
                <span>(0936)-273-1189</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-gold-400" />
                <span>Zamboanga City, Philippines</span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="pb-2 mb-3 font-serif text-xl border-b text-gold-400 border-purple-600/30">Objective</h3>
            <p className="text-white/90">
              I aim to expand my horizons and gain knowledge to apply my capabilities to projects. I am looking for a chance to work and put my efforts to good use in my field, so that it will further enhance and help me grow in my career.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="pb-2 mb-3 font-serif text-xl border-b text-gold-400 border-purple-600/30">Education</h3>
            <div className="mb-4">
              <div className="flex flex-col mb-1 md:flex-row md:justify-between md:items-start">
                <h4 className="text-lg font-medium text-white">Bachelor of Science in Information Technology</h4>
                <span className="text-sm text-purple-300">2027 - 2028</span>
              </div>
              <p className="mb-1 text-gold-400">Pilar College of Zamboanga City, Inc.</p>
              <p className="text-sm text-white/80">GPA: 3.0/4.0</p>
              <p className="mt-2 text-white/90">
                Relevant coursework: Data Structures and Algorithms, Database Systems, Web Development, Mobile App Development, Human-Computer Interaction, Artificial Intelligence, Software Engineering
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="pb-2 mb-3 font-serif text-xl border-b text-gold-400 border-purple-600/30">Experience</h3>

            <div className="mb-6">
              <div className="flex flex-col mb-1 md:flex-row md:justify-between md:items-start">
                <h4 className="text-lg font-medium text-white">Department of Information and Communications Technology Internship</h4>
                <span className="text-sm text-purple-300">Dec 11, 2023 – Dec 22, 2023</span>
              </div>
              <p className="mb-3 text-gold-400">DICT Building, Corcuerra Extension, Port Area, Zamboanga City.</p>

              <ul className="space-y-2 list-disc list-inside text-white/90">
                <li><strong>Technical Team:</strong></li>
                <li>Performed troubleshooting and hardware repairs of STARLINK satellite systems, as well as their routine maintenance.</li>
                <li>Contributed to the completion of assembling complex technical products which aided in the execution of various technical projects.</li>
              </ul>

              <ul className="mt-4 space-y-2 list-disc list-inside text-white/90">
                <li><strong>Admin Team:</strong></li>
                <li>Administered files and ensured documents were correctly stored which facilitated the smooth running of all administrative operations.</li>
                <li>Helped maintain, organize and keep significant company documents which contributed to the team performing more efficiently.</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col mb-1 md:flex-row md:justify-between md:items-start">
                <h4 className="text-lg font-medium text-white">Computer Shop Internship</h4>
                <span className="text-sm text-purple-300">May 2018 – June 2018</span>
              </div>
              <p className="mb-3 text-gold-400">Culianan, Zamboanga City</p>
              <ul className="space-y-2 list-disc list-inside text-white/90">
                <li>Coordinated daily operations of the computer shop, including openings and closures.</li>
                <li>Carried out basic troubleshooting and repairs on computers and hardware.</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="pb-2 mb-3 font-serif text-xl border-b text-gold-400 border-purple-600/30">Certification</h3>
            <ul className="space-y-2 list-disc list-inside text-white/90">
              <li>Completed 80-hour work experience at DICT</li>
              <li>Certificate of Participation in Google I/O Extended 2024 Zamboanga Peninsula</li>
              <li>Certificate of Recognition in Web Development Using Laravel</li>
              <li>Certificate of Recognition in OS Fundamentals, Troubleshooting, Virtualization, and real-world application</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="pb-2 mb-3 font-serif text-xl border-b text-gold-400 border-purple-600/30">Technologies</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <h4 className="mb-2 font-medium text-white">Hard Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Technical Support',
                    'Product Assembly',
                    'Computer Systems Maintenance',
                    'Basic Networking',
                    'Paperwork Management',
                    'Software Proficiency',
                    'Basic Programming (Java, C++, HTML, CSS)',
                    'Customer Support'
                  ].map((skill, index) => (
                    <span key={index} className="px-3 py-1 text-sm rounded-full bg-purple-800/50 text-white/90">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-2 font-medium text-white">Soft Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Problem Solving',
                    'Communication',
                    'Adaptability',
                    'Teamwork',
                    'Attention to Detail',
                    'Customer Service'
                  ].map((skill, index) => (
                    <span key={index} className="px-3 py-1 text-sm rounded-full bg-purple-800/50 text-white/90">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-2 font-medium text-white">Other Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {['Graphic Design', 'Video Editing', 'Data Entry'].map((skill, index) => (
                    <span key={index} className="px-3 py-1 text-sm rounded-full bg-purple-800/50 text-white/90">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-2 font-medium text-white">Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {['Troubleshooting', 'Gaming', 'Photography', 'Videography'].map((skill, index) => (
                    <span key={index} className="px-3 py-1 text-sm rounded-full bg-purple-800/50 text-white/90">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ContentCard>
      </div>
    </div>
  );
};

export default Resume;
