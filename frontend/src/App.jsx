import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageShell from './components/layout/PageShell.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import EventsPage from './pages/EventsPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import TeamPage from './pages/TeamPage.jsx';
import JoinPage from './pages/JoinPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import StatusPage from './pages/StatusPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageShell />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/status" element={<StatusPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
