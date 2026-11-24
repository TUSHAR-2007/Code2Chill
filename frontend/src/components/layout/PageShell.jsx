import React from 'react';
import { Outlet } from 'react-router-dom';
import SiteHeader from './SiteHeader.jsx';
import SiteFooter from './SiteFooter.jsx';

export default function PageShell() {
  return (
    <div className="min-h-screen flex flex-col bg-[#090B0D] text-[#F1F3E9]">
      <SiteHeader />
      <main className="flex-1 w-full py-8 md:py-12">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
