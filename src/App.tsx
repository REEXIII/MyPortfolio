import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import CoverPage from './pages/CoverPage';
import Introduction from './pages/Introduction';
import TableOfContents from './pages/TableOfContents';
import DebateVideo from './pages/DebateVideo';
import SelfAssessment from './pages/SelfAssessment';
import PeerAssessment from './pages/PeerAssessment';
import JobAdvertisement from './pages/JobAdvertisement';
import Resume from './pages/Resume';
import ApplicationLetter from './pages/ApplicationLetter';
import VideoIntroduction from './pages/VideoIntroduction';
import Conclusion from './pages/Conclusion';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CoverPage />} />
        <Route path="introduction" element={<Introduction />} />
        <Route path="table-of-contents" element={<TableOfContents />} />
        <Route path="debate-video" element={<DebateVideo />} />
        <Route path="self-assessment" element={<SelfAssessment />} />
        <Route path="peer-assessment" element={<PeerAssessment />} />
        <Route path="job-advertisement" element={<JobAdvertisement />} />
        <Route path="resume" element={<Resume />} />
        <Route path="application-letter" element={<ApplicationLetter />} />
        <Route path="video-introduction" element={<VideoIntroduction />} />
        <Route path="conclusion" element={<Conclusion />} />
      </Route>
    </Routes>
  );
}

export default App;