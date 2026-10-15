import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/quizData';
import { CheckCircle2, XCircle, RotateCcw, Award, ChevronRight, HelpCircle, Sparkles, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';

export const QuizSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const currentQuestion = QUIZ_QUESTIONS[currentIdx];
  const totalQuestions = QUIZ_QUESTIONS.length;

  const handleSelectOption = (optionIndex: number) => {
    if (selectedAnswers[currentIdx] !== undefined) return; // already answered

    const newAnswers = { ...selectedAnswers, [currentIdx]: optionIndex };
    setSelectedAnswers(newAnswers);
    setShowExplanation(true);

    const isCorrect = optionIndex === currentQuestion.correctIndex;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < totalQuestions - 1) {
      setCurrentIdx(currentIdx + 1);
      setShowExplanation(selectedAnswers[currentIdx + 1] !== undefined);
    } else {
      setIsCompleted(true);
      // Trigger confetti celebration if high score (>= 80%)
      const finalScore = score + (selectedAnswers[currentIdx] === currentQuestion.correctIndex ? 0 : 0);
      if (finalScore >= totalQuestions * 0.7) {
        try {
          confetti({
            particleCount: 120,
            spread: 70,
            origin: { y: 0.6 },
          });
        } catch {
          // ignore
        }
      }
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
      setShowExplanation(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedAnswers({});
    setShowExplanation(false);
    setIsCompleted(false);
    setScore(0);
  };

  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div id="kuiz" className="space-y-8 scroll-mt-24">
      {/* Quiz Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-600 text-white p-6 sm:p-8 rounded-3xl shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-xs border border-white/30">
              <Award className="w-4 h-4" />
              <span>Kuiz Vlerësues • 12 Pyetje</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Testo njohuritë e tua mbi Atomin!
            </h2>
            <p className="text-sm text-blue-100 max-w-xl">
              Përgjigju pyetjeve nga të 3 mësimet. Pas çdo përgjigjeje do të shohësh menjëherë nëse ke të drejtë bashkë me shpjegimin përkatës.
            </p>
          </div>

          <div className="bg-white/15 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20 flex flex-col items-center justify-center shrink-0">
            <span className="text-xs text-blue-100 font-medium">Pikët aktuale:</span>
            <span className="text-2xl font-black font-mono">
              {score} / {totalQuestions}
            </span>
          </div>
        </div>
      </div>

      {/* Main Quiz Box or Result Summary */}
      {!isCompleted ? (
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-md max-w-3xl mx-auto space-y-6">
          
          {/* Progress bar & Question Number */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500">
              <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700">
                {currentQuestion.lessonTag}
              </span>
              <span>
                Pyetja {currentIdx + 1} nga {totalQuestions}
              </span>
            </div>
            <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 rounded-full transition-all duration-300"
                style={{ width: `${((currentIdx + 1) / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Text */}
          <div className="py-2">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
              {currentQuestion.question}
            </h3>
          </div>

          {/* Options List */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedAnswers[currentIdx] === idx;
              const hasAnswered = selectedAnswers[currentIdx] !== undefined;
              const isCorrect = idx === currentQuestion.correctIndex;

              let btnStyle = 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800';

              if (hasAnswered) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold ring-1 ring-emerald-500';
                } else if (isSelected) {
                  btnStyle = 'bg-red-50 border-red-500 text-red-950 font-semibold ring-1 ring-red-500';
                } else {
                  btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={hasAnswered}
                  className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between gap-3 transition-all cursor-pointer ${btnStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-white border border-slate-300 flex items-center justify-center font-bold text-xs text-slate-600 shrink-0 font-mono shadow-2xs">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-sm sm:text-base">{option}</span>
                  </div>

                  {hasAnswered && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {hasAnswered && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-red-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box (shown after answering) */}
          {showExplanation && (
            <div
              className={`p-4 rounded-2xl border text-sm flex items-start gap-3 animate-fade-in ${
                selectedAnswers[currentIdx] === currentQuestion.correctIndex
                  ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900'
                  : 'bg-amber-50/90 border-amber-200 text-amber-900'
              }`}
            >
              <HelpCircle className="w-5 h-5 shrink-0 mt-0.5 text-blue-600" />
              <div>
                <span className="font-bold block mb-1">
                  {selectedAnswers[currentIdx] === currentQuestion.correctIndex
                    ? 'E saktë! Bravo!'
                    : 'Përgjigje e pasaktë! Ja shpjegimi shkencor:'}
                </span>
                <p className="leading-relaxed text-xs sm:text-sm">
                  {currentQuestion.explanation}
                </p>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              onClick={handlePrev}
              disabled={currentIdx === 0}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              Mëparshmja
            </button>

            <button
              onClick={handleNext}
              disabled={selectedAnswers[currentIdx] === undefined}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:pointer-events-none shadow-md shadow-blue-500/20 transition-all cursor-pointer"
            >
              <span>{currentIdx === totalQuestions - 1 ? 'Shiko Rezultatin' : 'Vazhdo'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Quiz Completed Screen */
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl max-w-2xl mx-auto text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-indigo-500/30">
            <Award className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              {percentage >= 80
                ? 'Shkëlqyeshëm! Notë e shkëlqyer!'
                : percentage >= 60
                ? 'Shumë mirë! Je në rrugë të mbarë!'
                : 'Mund të bësh edhe më mirë!'}
            </h3>
            <p className="text-sm text-slate-600">
              Ke përfunduar me sukses kuizin mbi 3 mësimet e para të kimisë.
            </p>
          </div>

          {/* Score Box */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 inline-block w-full max-w-sm">
            <div className="text-4xl font-black text-blue-600 font-mono">
              {score} / {totalQuestions}
            </div>
            <div className="text-sm font-bold text-slate-700 mt-1">
              Rezultati: {percentage}% pyetje të sakta
            </div>
            <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden mt-3">
              <div
                className={`h-full rounded-full ${
                  percentage >= 80 ? 'bg-emerald-500' : percentage >= 50 ? 'bg-blue-500' : 'bg-amber-500'
                }`}
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          {/* Action to repeat or review lessons */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={handleRestart}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/25 transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Provo përsëri kuizin</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
