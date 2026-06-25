import React, { useState } from "react";
import { PITCH_DECK_SLIDES, DEMO_SCRIPT_STEPS } from "../data/pitchDeck";
import { Presentation, ChevronLeft, ChevronRight, Mic, CheckCircle2, Quote, Sparkles, FileText, Award } from "lucide-react";

export const PitchDeckTab: React.FC = () => {
  const [activeSlideIdx, setActiveSlideIdx] = useState<number>(0);
  const [completedDemoSteps, setCompletedDemoSteps] = useState<number[]>([]);

  const currentSlide = PITCH_DECK_SLIDES[activeSlideIdx];

  const toggleDemoStep = (idx: number) => {
    if (completedDemoSteps.includes(idx)) {
      setCompletedDemoSteps(completedDemoSteps.filter((i) => i !== idx));
    } else {
      setCompletedDemoSteps([...completedDemoSteps, idx]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 shadow-xl text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 mb-1">
            <span className="bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs px-2.5 py-0.5 rounded-full font-mono font-semibold">
              HACKATHON DELIVERABLES
            </span>
            <span className="text-xs text-slate-400 font-mono">10–12 Presentation Slides</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Judges Presentation Deck &amp; Live Demo Script</h1>
          <p className="text-slate-300 text-xs sm:text-sm mt-1">
            Interactive pitch deck with speaker notes and live presentation checklist for national hackathon evaluation.
          </p>
        </div>

        <div className="flex items-center space-x-2 bg-slate-800 p-1.5 rounded-xl border border-slate-700">
          <button
            onClick={() => setActiveSlideIdx(Math.max(0, activeSlideIdx - 1))}
            disabled={activeSlideIdx === 0}
            className="p-2 hover:bg-slate-700 disabled:opacity-30 rounded-lg transition text-slate-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="font-mono text-xs px-3 font-bold text-orange-400">
            Slide {activeSlideIdx + 1} / {PITCH_DECK_SLIDES.length}
          </span>
          <button
            onClick={() => setActiveSlideIdx(Math.min(PITCH_DECK_SLIDES.length - 1, activeSlideIdx + 1))}
            disabled={activeSlideIdx === PITCH_DECK_SLIDES.length - 1}
            className="p-2 hover:bg-slate-700 disabled:opacity-30 rounded-lg transition text-slate-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Slide Thumbnails */}
        <div className="lg:col-span-3 space-y-4">
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-2 max-h-[620px] overflow-y-auto">
            <h3 className="text-xs font-bold font-mono uppercase text-slate-500 px-2 pb-1 border-b border-slate-100">
              Slide Navigator
            </h3>
            {PITCH_DECK_SLIDES.map((slide, idx) => {
              const isActive = idx === activeSlideIdx;
              return (
                <button
                  key={slide.slideNumber}
                  onClick={() => setActiveSlideIdx(idx)}
                  className={`w-full text-left p-3 rounded-xl transition flex items-start space-x-3 border ${
                    isActive
                      ? "bg-slate-900 text-white font-semibold shadow-md border-slate-900"
                      : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/80"
                  }`}
                >
                  <span className={`font-mono text-xs font-bold px-1.5 py-0.5 rounded ${
                    isActive ? "bg-orange-500 text-white" : "bg-slate-200 text-slate-700"
                  }`}>
                    {slide.slideNumber}
                  </span>
                  <div className="truncate flex-1">
                    <div className="text-xs truncate">{slide.title}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Center Main Slide Viewer */}
        <div className="lg:col-span-9 space-y-6">
          
          {/* Slide Stage */}
          <div className="bg-slate-950 rounded-3xl border-2 border-slate-800 p-8 sm:p-12 text-white shadow-2xl relative min-h-[420px] flex flex-col justify-between overflow-hidden">
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            {/* Slide Header */}
            <div className="space-y-2 relative z-10 border-b border-slate-800 pb-6">
              <div className="flex items-center justify-between font-mono text-xs text-orange-400">
                <span>ISRO HACKATHON SLIDE #{currentSlide.slideNumber}</span>
                <span className="bg-slate-900 px-3 py-1 rounded-full border border-slate-800 text-slate-300">
                  AI / ML TRACK
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                {currentSlide.title}
              </h2>
              <p className="text-slate-400 text-sm">{currentSlide.subtitle}</p>
            </div>

            {/* Slide Bullets */}
            <div className="py-8 relative z-10 space-y-4">
              {currentSlide.content.map((bullet, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-sm sm:text-base text-slate-200 leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></span>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            {/* Quote / Highlight Metric */}
            {currentSlide.keyMetricOrQuote && (
              <div className="bg-slate-900/90 rounded-2xl p-4 border border-orange-500/30 font-mono text-xs sm:text-sm text-orange-300 flex items-center space-x-3 relative z-10">
                <Quote className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="italic font-sans font-medium">"{currentSlide.keyMetricOrQuote}"</span>
              </div>
            )}

          </div>

          {/* Presenter Notes & Demo Script Area */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Judges Presentation Notes */}
            <div className="bg-amber-50/80 rounded-2xl p-6 border border-amber-200 space-y-3 shadow-sm">
              <div className="flex items-center space-x-2 text-amber-900 font-bold text-sm border-b border-amber-200/80 pb-2">
                <Mic className="w-4 h-4 text-amber-600 animate-pulse" />
                <span>Judges Presentation Speaker Notes</span>
              </div>
              <p className="text-xs sm:text-sm text-amber-950 leading-relaxed font-sans font-medium italic">
                "{currentSlide.judgesNotes}"
              </p>
            </div>

            {/* Live Hackathon Demo Script Checklist */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <div className="flex items-center space-x-2 text-slate-900 font-bold text-sm">
                  <Award className="w-4 h-4 text-orange-500" />
                  <span>Live Presentation Demo Script</span>
                </div>
                <span className="text-xs font-mono text-slate-500">
                  {completedDemoSteps.length}/{DEMO_SCRIPT_STEPS.length} Done
                </span>
              </div>

              <div className="space-y-2.5 max-h-[160px] overflow-y-auto pr-1">
                {DEMO_SCRIPT_STEPS.map((step, idx) => {
                  const isDone = completedDemoSteps.includes(idx);
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleDemoStep(idx)}
                      className={`flex items-start space-x-2.5 p-2 rounded-lg cursor-pointer text-xs select-none transition ${
                        isDone ? "bg-emerald-50 text-emerald-900 font-medium" : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isDone ? "text-emerald-600" : "text-slate-300"}`} />
                      <span className={isDone ? "line-through opacity-80" : ""}>{step}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
