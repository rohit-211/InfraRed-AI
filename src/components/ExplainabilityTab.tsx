import React from "react";
import { BookOpen, EyeOff, Sliders, Cpu, Sparkles, Rocket, Globe, Shield, ArrowUpRight, CheckCircle2 } from "lucide-react";

export const ExplainabilityTab: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="bg-blue-500/10 text-blue-600 border border-blue-500/20 text-xs px-3 py-1 rounded-full font-mono font-semibold uppercase tracking-wider">
          Scientific Foundation &amp; Mission Alignment
        </span>
        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Scientific Explainability &amp; Future Scope Roadmap
        </h1>
        <p className="text-slate-600 text-sm leading-relaxed">
          Deep technical justification explaining why standard thermal imagery requires neural translation and how our U-Net bridges satellite telemetry with human perception.
        </p>
      </div>

      {/* 4 Core Scientific Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Pillar 1 */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-4 hover:border-slate-300 transition">
          <div className="bg-red-500/10 text-red-600 p-3 rounded-2xl w-fit flex items-center justify-center">
            <EyeOff className="w-6 h-6 text-red-500" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">1. Why Infrared Images are Difficult to Interpret</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Infrared sensors (such as INSAT-3D TIR or RESOURCESAT NIR) record electromagnetic intensity in a single monochrome band based on temperature and molecular absorption.
          </p>
          <ul className="space-y-2 text-xs text-slate-700 font-mono pt-2">
            <li className="flex items-start"><span className="text-red-500 mr-2">•</span>Human Biological Limit: The human eye can differentiate ~10 million distinct RGB colors, but only ~30 distinct shades of monochrome gray.</li>
            <li className="flex items-start"><span className="text-red-500 mr-2">•</span>Cognitive Fatigue: Looking at grayscale thermal maps during prolonged forest fire emergencies causes rapid perceptual blind spots.</li>
            <li className="flex items-start"><span className="text-red-500 mr-2">•</span>Ambiguous Boundaries: Cold clouds and snow top mountaintops share identical grayscale pixel intensity in standard thermal channels.</li>
          </ul>
        </div>

        {/* Pillar 2 */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-4 hover:border-slate-300 transition">
          <div className="bg-blue-500/10 text-blue-600 p-3 rounded-2xl w-fit flex items-center justify-center">
            <Sliders className="w-6 h-6 text-blue-500" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">2. How Adaptive Enhancement Boosts Visibility</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Raw satellite downlinks suffer from atmospheric scattering and thermal sensor grain. Preprocessing is mandatory prior to neural network colorization.
          </p>
          <ul className="space-y-2 text-xs text-slate-700 font-mono pt-2">
            <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>CLAHE Advantage: Global Histogram Equalization washes out cloud details. CLAHE operates on 8×8 grid tiles with a clip limit of 2.5, preventing noise over-amplification.</li>
            <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>Kernel Sharpening: A 3×3 Laplacian kernel accentuates road networks, airstrips, and irrigation banks.</li>
            <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>Gaussian Denoising: Smooths high-frequency thermal sensor flicker prior to feature extraction.</li>
          </ul>
        </div>

        {/* Pillar 3 */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-4 hover:border-slate-300 transition">
          <div className="bg-orange-500/10 text-orange-600 p-3 rounded-2xl w-fit flex items-center justify-center">
            <Cpu className="w-6 h-6 text-orange-500" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">3. How U-Net Performs Spectral Image Translation</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Originally invented for biomedical segmentation, U-Net excels at deterministic pixel-to-pixel image translation across spectral bands.
          </p>
          <ul className="space-y-2 text-xs text-slate-700 font-mono pt-2">
            <li className="flex items-start"><span className="text-orange-500 mr-2">•</span>Hierarchical Encoding: 4 contracting Conv2D blocks extract deep localized features while downsampling spatial dimensions.</li>
            <li className="flex items-start"><span className="text-orange-500 mr-2">•</span>The Skip Connection Highway: Concatenating unpooled encoder layers directly into decoder upsampling blocks restores fine 10-meter ground topography.</li>
            <li className="flex items-start"><span className="text-orange-500 mr-2">•</span>MAE Optimization: L1 Loss encourages sharp, vibrant median color prediction rather than blurry L2 quadratic averaging.</li>
          </ul>
        </div>

        {/* Pillar 4 */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-4 hover:border-slate-300 transition">
          <div className="bg-emerald-500/10 text-emerald-600 p-3 rounded-2xl w-fit flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-emerald-500" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">4. Advantages of AI-Based Colorization for ISRO</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Synthesizing trichromatic optical maps from single-band infrared downlinks unlocks massive operational efficiencies for ground stations.
          </p>
          <ul className="space-y-2 text-xs text-slate-700 font-mono pt-2">
            <li className="flex items-start"><span className="text-emerald-500 mr-2">•</span>Downlink Bandwidth Savings: Transmitting compressed 1-channel IR data from orbit and colorizing on ground stations saves up to 66% RF transmission bandwidth.</li>
            <li className="flex items-start"><span className="text-emerald-500 mr-2">•</span>All-Weather Reconnaissance: Optical satellites are blinded by night and clouds; IR colorization provides 24/7 continuous optical-like surveillance.</li>
            <li className="flex items-start"><span className="text-emerald-500 mr-2">•</span>Sub-Second Triage: Reduces tactical decision delay during sudden flood embankment breaches.</li>
          </ul>
        </div>

      </div>

      {/* Future Scope Roadmap Section */}
      <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl text-white space-y-8">
        <div className="flex items-center space-x-3 border-b border-slate-800 pb-6">
          <Rocket className="w-7 h-7 text-orange-500" />
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Future Scope &amp; Advanced Generative Roadmap</h2>
            <p className="text-xs text-slate-400">Next-generation scaling from U-Net hackathon prototype to orbital space infrastructure</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
          
          <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 space-y-3">
            <span className="text-orange-400 font-bold block text-sm">1. Pix2Pix GAN &amp; CycleGAN</span>
            <p className="text-slate-300 font-sans text-xs leading-relaxed">
              Upgrading U-Net with conditional adversarial discriminators (PatchGAN) to penalize non-photorealistic textures, generating even sharper foliage and urban concrete boundaries.
            </p>
          </div>

          <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 space-y-3">
            <span className="text-blue-400 font-bold block text-sm">2. Latent Diffusion Models</span>
            <p className="text-slate-300 font-sans text-xs leading-relaxed">
              Exploring conditional Latent Diffusion (ControlNet conditioned on thermal IR) for super-resolution 4K colorization of geostationary weather captures.
            </p>
          </div>

          <div className="bg-slate-800/80 p-6 rounded-2xl border border-orange-500/40 space-y-3 relative overflow-hidden ring-1 ring-orange-500/20">
            <div className="absolute top-0 right-0 bg-orange-500 text-white text-[9px] px-2 py-0.5 rounded-bl font-bold">
              ORBITAL EDGE
            </div>
            <span className="text-amber-400 font-bold block text-sm">3. Edge AI Satellite Deployment</span>
            <p className="text-slate-200 font-sans text-xs leading-relaxed">
              Quantizing TensorFlow Keras models to INT8 TFLite format to run directly onboard RISAT or CARTOSAT edge processors in Low Earth Orbit (LEO) prior to downlink.
            </p>
          </div>

          <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 space-y-3">
            <span className="text-emerald-400 font-bold block text-sm">4. Real-Time Video Loop Processing</span>
            <p className="text-slate-300 font-sans text-xs leading-relaxed">
              Extending tensor pipelines to colorize live 30 FPS geostationary INSAT weather satellite video feeds for National Weather Forecasting Centers.
            </p>
          </div>

          <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 space-y-3">
            <span className="text-indigo-400 font-bold block text-sm">5. Multi-Sensor Data Fusion</span>
            <p className="text-slate-300 font-sans text-xs leading-relaxed">
              Fusing Synthetic Aperture Radar (SAR) backscatter with Thermal TIR intensity to generate unified all-terrain defense intelligence overlays.
            </p>
          </div>

          <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 space-y-3">
            <span className="text-purple-400 font-bold block text-sm">6. Cloud Run Microservices</span>
            <p className="text-slate-300 font-sans text-xs leading-relaxed">
              Containerizing Streamlit and FastAPI inference servers inside auto-scaling Cloud Run instances for concurrent national disaster response access.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};
