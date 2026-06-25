import React, { useState } from "react";
import { ActiveTab } from "./types";
import { Navbar } from "./components/Navbar";
import { DashboardTab } from "./components/DashboardTab";
import { CodeSuiteTab } from "./components/CodeSuiteTab";
import { ArchitectureTab } from "./components/ArchitectureTab";
import { PitchDeckTab } from "./components/PitchDeckTab";
import { ExplainabilityTab } from "./components/ExplainabilityTab";

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("dashboard");

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-slate-900 selection:bg-orange-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Workspace Stage */}
      <main className="flex-1 pb-16">
        {activeTab === "dashboard" && <DashboardTab />}
        {activeTab === "code" && <CodeSuiteTab />}
        {activeTab === "architecture" && <ArchitectureTab />}
        {activeTab === "slides" && <PitchDeckTab />}
        {activeTab === "explainability" && <ExplainabilityTab />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-6 text-xs font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
            <span>ISRO HACKATHON SUBMISSION SUITE v2.5</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>TRACK: AI / COMPUTER VISION</span>
            <span>•</span>
            <span>PYTHON / TENSORFLOW / STREAMLIT</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

