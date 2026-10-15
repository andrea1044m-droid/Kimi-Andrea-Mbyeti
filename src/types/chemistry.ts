export interface ElementInfo {
  atomicNumber: number; // Z
  symbol: string;
  nameSq: string; // Albanian name
  nameLatin: string;
  massNumber: number; // A (most common isotope)
  neutrons: number; // A - Z
  shells: number[]; // e.g. [2, 8, 1]
  category: 'Jometal' | 'Gaz fisnik' | 'Metal alkalin' | 'Metal alkaline-tokësor' | 'Metaloid' | 'Halogjen' | 'Metal i zakonshëm';
  period: number;
  group: string;
  stateSq: 'Gaz' | 'I lëngët' | 'I ngurtë';
  descriptionSq: string;
  applicationSq: string;
  isotopes: {
    symbolWithA: string;
    neutrons: number;
    abundance: string;
    note: string;
  }[];
}

export interface SubatomicParticleInfo {
  name: string;
  symbol: string;
  charge: string;
  chargeValue: number; // +1, 0, -1
  massRel: string;
  location: string;
  color: string;
  borderClass: string;
  bgClass: string;
  descriptionSq: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  lessonTag: string; // 'Mësimi 1', 'Mësimi 2', 'Mësimi 3'
}

export interface Flashcard {
  id: number;
  category: string;
  question: string;
  answer: string;
  tip?: string;
}
