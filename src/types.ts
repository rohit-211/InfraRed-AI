export type ActiveTab = "dashboard" | "analysis" | "code" | "architecture" | "slides" | "explainability";

export type EnhancementMethod = "none" | "hist_eq" | "clahe" | "sharpen" | "denoise_gaussian";

export interface SatellitePreset {
  id: string;
  title: string;
  category: "Agriculture" | "Disaster Management" | "Forest Fire" | "Weather Analysis" | "Land Cover" | "Defense";
  description: string;
  irImageUrl: string;
  gtRgbUrl: string;
}

export interface EvaluationMetrics {
  psnr: number; // Peak Signal-to-Noise Ratio (dB)
  ssim: number; // Structural Similarity Index [0, 1]
  mae: number;  // Mean Absolute Error
  mse: number;  // Mean Squared Error
}

export interface PythonFile {
  filename: string;
  path: string;
  category: "app" | "model" | "pipeline" | "config" | "docs";
  description: string;
  code: string;
}

export interface PitchSlide {
  slideNumber: number;
  title: string;
  subtitle: string;
  content: string[];
  keyMetricOrQuote?: string;
  judgesNotes: string;
}
