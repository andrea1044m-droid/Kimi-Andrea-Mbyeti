/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LessonOne } from './components/LessonOne';
import { LessonTwo } from './components/LessonTwo';
import { LessonThree } from './components/LessonThree';
import { LessonFour } from './components/LessonFour';
import { LessonFive } from './components/LessonFive';
import { InteractiveModels } from './components/InteractiveModels';
import { QuizSection } from './components/QuizSection';
import { SummarySection } from './components/SummarySection';
import { BookOpen, Layers, ArrowRight, ArrowLeft, Atom, Sparkles, CheckCircle, ChevronUp, Flame, Scale } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('kryefaqja');
  const [activeLessonTab, setActiveLessonTab] = useState<'mesimi-1' | 'mesimi-2' | 'mesimi-3' | 'mesimi-4' | 'mesimi-5'>('mesimi-1');

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartLearning = () => {
    setActiveLessonTab('mesimi-1');
    scrollTo('mesimet');
  };

  const handleSelectSpecificLesson = (lessonId: string) => {
    if (['mesimi-1', 'mesimi-2', 'mesimi-3', 'mesimi-4', 'mesimi-5'].includes(lessonId)) {
      setActiveLessonTab(lessonId as any);
      scrollTo('mesimet');
    }
  };

  const handleExploreModels = () => {
    scrollTo('modele-interaktive');
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('kryefaqja');
  };

  interface LessonTabItem {
    id: 'mesimi-1' | 'mesimi-2' | 'mesimi-3' | 'mesimi-4' | 'mesimi-5';
    number: number;
    title: string;
    color: string;
    icon?: React.ComponentType<{ className?: string }>;
  }

  const lessonTabs: LessonTabItem[] = [
    { id: 'mesimi-1', number: 1, title: 'Struktura e atomit', color: 'blue' },
    { id: 'mesimi-2', number: 2, title: 'Më shumë për atomet', color: 'indigo' },
    { id: 'mesimi-3', number: 3, title: 'Shpërndarja elektronike', color: 'purple' },
    { id: 'mesimi-4', number: 4, title: 'Prirjet e Grupit 1A', color: 'amber', icon: Flame },
    { id: 'mesimi-5', number: 5, title: 'Elementet e tjera', color: 'emerald', icon: Scale },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Top Fixed / Sticky Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content Area */}
      <main className="grow">
        {/* Hero Section */}
        <Hero
          onStartLearning={handleStartLearning}
          onExploreModels={handleExploreModels}
          onSelectLesson={handleSelectSpecificLesson}
        />

        {/* Lessons Section */}
        <section id="mesimet" className="py-12 sm:py-16 border-t border-slate-200/80 bg-white/60 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700">
                <BookOpen className="w-3.5 h-3.5" /> Programi PEGI • Klasa 9
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                5 Mësimet Themelore të Kimisë
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Zgjidh mësimin që dëshiron të studiosh ose ndiqi me radhë hap pas hapi nga struktura e atomit te prirjet e tabelës periodike:
              </p>
            </div>

            {/* Responsive 5 Lesson Tabs Selector */}
            <div className="flex items-center justify-center">
              <div className="flex p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200/90 gap-1.5 max-w-5xl w-full flex-wrap sm:flex-nowrap shadow-2xs">
                {lessonTabs.map((tab) => {
                  const isSelected = activeLessonTab === tab.id;
                  const Icon = tab.icon;

                  let activeClass = 'bg-white text-slate-900 shadow-xs border border-slate-200/80';
                  let numBadgeClass = 'bg-slate-700 text-white';

                  if (tab.color === 'blue') {
                    if (isSelected) {
                      activeClass = 'bg-white text-blue-700 shadow-xs border border-blue-200/60 font-bold';
                      numBadgeClass = 'bg-blue-600 text-white';
                    }
                  } else if (tab.color === 'indigo') {
                    if (isSelected) {
                      activeClass = 'bg-white text-indigo-700 shadow-xs border border-indigo-200/60 font-bold';
                      numBadgeClass = 'bg-indigo-600 text-white';
                    }
                  } else if (tab.color === 'purple') {
                    if (isSelected) {
                      activeClass = 'bg-white text-purple-700 shadow-xs border border-purple-200/60 font-bold';
                      numBadgeClass = 'bg-purple-600 text-white';
                    }
                  } else if (tab.color === 'amber') {
                    if (isSelected) {
                      activeClass = 'bg-white text-amber-700 shadow-xs border border-amber-300 font-bold';
                      numBadgeClass = 'bg-amber-600 text-white';
                    }
                  } else if (tab.color === 'emerald') {
                    if (isSelected) {
                      activeClass = 'bg-white text-emerald-700 shadow-xs border border-emerald-300 font-bold';
                      numBadgeClass = 'bg-emerald-600 text-white';
                    }
                  }

                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveLessonTab(tab.id as any)}
                      className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs sm:text-sm transition-all cursor-pointer flex-1 min-w-[140px] ${
                        isSelected
                          ? activeClass
                          : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                      }`}
                    >
                      <span className={`w-5 h-5 rounded-full text-xs flex items-center justify-center font-mono font-bold shrink-0 ${numBadgeClass}`}>
                        {tab.number}
                      </span>
                      <span className="truncate">{tab.title}</span>
                      {Icon && <Icon className="w-3.5 h-3.5 shrink-0 opacity-70" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Lesson View */}
            <div className="pt-4">
              {activeLessonTab === 'mesimi-1' && <LessonOne />}
              {activeLessonTab === 'mesimi-2' && <LessonTwo />}
              {activeLessonTab === 'mesimi-3' && <LessonThree />}
              {activeLessonTab === 'mesimi-4' && <LessonFour />}
              {activeLessonTab === 'mesimi-5' && <LessonFive />}
            </div>

            {/* Bottom Lesson Navigation Footnote */}
            <div className="pt-6 border-t border-slate-200/80 flex items-center justify-between">
              {activeLessonTab !== 'mesimi-1' ? (
                <button
                  onClick={() => {
                    if (activeLessonTab === 'mesimi-2') setActiveLessonTab('mesimi-1');
                    if (activeLessonTab === 'mesimi-3') setActiveLessonTab('mesimi-2');
                    if (activeLessonTab === 'mesimi-4') setActiveLessonTab('mesimi-3');
                    if (activeLessonTab === 'mesimi-5') setActiveLessonTab('mesimi-4');
                    scrollTo('mesimet');
                  }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-all cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Kthehu te mësimi paraardhës</span>
                </button>
              ) : <div />}

              {activeLessonTab !== 'mesimi-5' ? (
                <button
                  onClick={() => {
                    if (activeLessonTab === 'mesimi-1') setActiveLessonTab('mesimi-2');
                    if (activeLessonTab === 'mesimi-2') setActiveLessonTab('mesimi-3');
                    if (activeLessonTab === 'mesimi-3') setActiveLessonTab('mesimi-4');
                    if (activeLessonTab === 'mesimi-4') setActiveLessonTab('mesimi-5');
                    scrollTo('mesimet');
                  }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all cursor-pointer"
                >
                  <span>Kalo te mësimi tjetër</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => scrollTo('modele-interaktive')}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-500/20 transition-all cursor-pointer"
                >
                  <span>Kalo te Modelet Interaktive</span>
                  <Layers className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Section 4: Interactive Models Lab */}
        <section className="py-12 sm:py-16 border-t border-slate-200/80 bg-slate-100/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <InteractiveModels />
          </div>
        </section>

        {/* Section 5: Interactive Quiz */}
        <section className="py-12 sm:py-16 border-t border-slate-200/80 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <QuizSection />
          </div>
        </section>

        {/* Section 6: Exam Summary & Flashcards */}
        <section className="py-12 sm:py-16 border-t border-slate-200/80 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SummarySection />
          </div>
        </section>
      </main>

      {/* Modern Educational Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800 text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-md shadow-blue-500/30">
                <Atom className="w-6 h-6 animate-spin-slow" />
              </div>
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h4 className="font-extrabold text-white text-base">
                    Bota e Atomeve – Kimia Klasa 9
                  </h4>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-gradient-to-r from-blue-600 to-indigo-600 text-white border border-blue-400/30 shadow-xs">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    Punoi Andrea Mbyeti
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Platformë arsimore dixhitale e përshtatur me 5 mësimet e para të programit PEGI
                </p>
              </div>
            </div>

            {/* Quick footer navigation */}
            <div className="flex items-center gap-4 text-xs font-semibold flex-wrap justify-center">
              <button onClick={() => scrollTo('kryefaqja')} className="hover:text-white transition-colors cursor-pointer">
                Kryefaqja
              </button>
              <button onClick={() => scrollTo('mesimet')} className="hover:text-white transition-colors cursor-pointer">
                Mësimet
              </button>
              <button onClick={() => scrollTo('modele-interaktive')} className="hover:text-white transition-colors cursor-pointer">
                Modele interaktive
              </button>
              <button onClick={() => scrollTo('kuiz')} className="hover:text-white transition-colors cursor-pointer">
                Kuiz
              </button>
              <button onClick={() => scrollTo('permbledhje')} className="hover:text-white transition-colors cursor-pointer">
                Përmbledhje
              </button>
            </div>

            {/* Back to top button */}
            <button
              onClick={handleScrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
            >
              <span>Në krye</span>
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 text-center sm:text-left">
            <p>
              Projekt shkollor në lëndën e Kimisë. <strong className="text-slate-200">Punoi Andrea Mbyeti</strong>.
            </p>
            <p className="font-mono text-[11px] text-slate-500">
              Tema 1: Struktura • Tema 2: Atomet & Izotopet • Tema 3: Shtresat • Tema 4: Grupi 1A • Tema 5: Elementet e tjera
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
