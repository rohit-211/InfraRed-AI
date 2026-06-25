import React from "react";
import { ActiveTab } from "../types";
import { Satellite, Code2, Cpu, Presentation, BookOpen, ShieldCheck, BarChart3 } from "lucide-react";

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const navItems: { id: ActiveTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: "dashboard", label: "Interactive Dashboard", icon: <Satellite className="w-4 h-4" /> },
    { id: "analysis", label: "Detailed AI & Layman Analysis", icon: <BarChart3 className="w-4 h-4 text-orange-400" />, badge: "3 Graphs" },
    { id: "code", label: "Python Deliverables Suite", icon: <Code2 className="w-4 h-4" />, badge: "7 Files" },
    { id: "architecture", label: "U-Net Architecture & Flow", icon: <Cpu className="w-4 h-4" /> },
    { id: "slides", label: "Pitch Deck & Demo Script", icon: <Presentation className="w-4 h-4" />, badge: "12 Slides" },
    { id: "explainability", label: "Scientific Explainability", icon: <BookOpen className="w-4 h-4" /> },
  ];

  return (
    <header className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-tr from-orange-500 to-amber-500 p-2 rounded-xl shadow-md shadow-orange-500/20 flex items-center justify-center">
              <Satellite className="w-6 h-6 text-white animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold tracking-tight text-lg sm:text-xl bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                  ISRO Hackathon AI
                </span>
                <span className="bg-orange-500/20 text-orange-400 text-xs px-2 py-0.5 rounded-full font-mono border border-orange-500/30 font-medium">
                  NATIONAL LEVEL
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono hidden sm:block">
                Infrared Satellite Image Colorization & Enhancement System
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="hidden lg:flex items-center space-x-1.5 px-3 py-1 bg-slate-800/80 rounded-full border border-slate-700 text-xs text-emerald-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping mr-1"></span>
              GPU ENGINE READY
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex space-x-1 overflow-x-auto py-2 scrollbar-none border-t border-slate-800/80">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
                {item.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-800 text-slate-400 border border-slate-700"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
