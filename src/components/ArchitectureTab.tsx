import React from "react";
import { Cpu, ArrowRight, Layers, Database, Shield, Sparkles, CheckCircle, Network } from "lucide-react";

export const ArchitectureTab: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="bg-orange-500/10 text-orange-600 border border-orange-500/20 text-xs px-3 py-1 rounded-full font-mono font-semibold uppercase tracking-wider">
          System Blueprints &amp; Flowcharts
        </span>
        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
          U-Net Deep Learning Architecture &amp; Pipeline Flow
        </h1>
        <p className="text-slate-600 text-sm leading-relaxed">
          Detailed technical blueprints designed for hackathon technical evaluation and judges presentation.
        </p>
      </div>

      {/* 1. End-to-End Operational Workflow Diagram */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-6">
        <div className="flex items-center space-x-2 border-b border-slate-100 pb-4">
          <Network className="w-6 h-6 text-orange-500" />
          <h2 className="text-xl font-bold text-slate-900">End-to-End Operational Workflow</h2>
        </div>

        {/* Step Flowchart */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-stretch pt-2 font-mono">
          
          <div className="bg-slate-900 text-white p-4 rounded-2xl flex flex-col justify-between border border-slate-700 shadow-md">
            <span className="text-orange-400 text-xs font-bold block mb-2">STEP 1</span>
            <div>
              <div className="font-bold text-sm">Input Infrared</div>
              <p className="text-slate-400 text-[11px] mt-1">Paired Satellite Grayscale Capture</p>
            </div>
            <span className="text-[10px] bg-slate-800 px-2 py-1 rounded mt-3 text-slate-300 self-start">256×256×1</span>
          </div>

          <div className="hidden md:flex items-center justify-center text-slate-300">
            <ArrowRight className="w-6 h-6 text-orange-500" />
          </div>

          <div className="bg-blue-50 text-blue-950 p-4 rounded-2xl flex flex-col justify-between border border-blue-200 shadow-sm">
            <span className="text-blue-600 text-xs font-bold block mb-2">STEP 2</span>
            <div>
              <div className="font-bold text-sm">Enhancement</div>
              <p className="text-blue-700 text-[11px] mt-1">CLAHE &amp; Gaussian Spatial Blur</p>
            </div>
            <span className="text-[10px] bg-blue-200/80 text-blue-900 px-2 py-1 rounded mt-3 self-start">OpenCV</span>
          </div>

          <div className="hidden md:flex items-center justify-center text-slate-300">
            <ArrowRight className="w-6 h-6 text-orange-500" />
          </div>

          <div className="bg-orange-50 text-orange-950 p-4 rounded-2xl flex flex-col justify-between border border-orange-300 shadow-md ring-2 ring-orange-500/20">
            <span className="text-orange-600 text-xs font-bold block mb-2">STEP 3</span>
            <div>
              <div className="font-bold text-sm">U-Net AI</div>
              <p className="text-orange-800 text-[11px] mt-1">Deep Feature Synthesis &amp; Skip Conv</p>
            </div>
            <span className="text-[10px] bg-orange-500 text-white px-2 py-1 rounded mt-3 self-start">Keras</span>
          </div>

          <div className="hidden md:flex items-center justify-center text-slate-300">
            <ArrowRight className="w-6 h-6 text-orange-500" />
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-200 flex items-start space-x-4">
            <div className="bg-emerald-500 text-white p-2.5 rounded-xl font-bold font-mono text-xs">STEP 4</div>
            <div>
              <h4 className="font-bold text-emerald-950 text-sm">IEEE Quality Evaluation Metrics</h4>
              <p className="text-xs text-emerald-800 mt-1 leading-relaxed">
                Automated calculation of PSNR (&gt;28 dB threshold), SSIM structural index, Mean Absolute Error (MAE), and MSE against Ground Truth reference optical imagery.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 flex items-start space-x-4">
            <div className="bg-orange-500 text-white p-2.5 rounded-xl font-bold font-mono text-xs">STEP 5</div>
            <div>
              <h4 className="font-bold text-white text-sm">Streamlit Web Dashboard</h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Zero-latency interactive user interface for ISRO tactical ground operators featuring side-by-side multi-band sliders and PNG download reports.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Deep U-Net Architecture Diagram */}
      <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl text-white space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center space-x-3">
            <Cpu className="w-6 h-6 text-orange-500" />
            <h2 className="text-xl font-bold tracking-tight">Fully Convolutional U-Net Architecture Diagram</h2>
          </div>
          <span className="font-mono text-xs bg-slate-800 text-orange-400 px-3 py-1 rounded-full border border-slate-700">
            Tensor Shape: 256 × 256 × 3
          </span>
        </div>

        {/* Structural Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4 font-mono">
          
          {/* Encoder */}
          <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-700 pb-3">
              <span className="text-orange-400 font-bold text-sm">CONTRACTING PATH (ENCODER)</span>
              <span className="text-[10px] bg-slate-900 px-2 py-0.5 rounded text-slate-400">Downsampling</span>
            </div>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/80">
                <span className="text-white font-bold block mb-0.5">Block 1:</span>
                Conv2D(64, 3×3) → BatchNorm → ReLU → MaxPool(2×2)<br/>
                <span className="text-slate-500 text-[10px]">Output Shape: 128 × 128 × 64</span>
              </div>
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/80">
                <span className="text-white font-bold block mb-0.5">Block 2 &amp; 3:</span>
                Filters: 128 &amp; 256 | Repeated Conv + MaxPool<br/>
                <span className="text-slate-500 text-[10px]">Downsampled to: 32 × 32 × 256</span>
              </div>
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/80">
                <span className="text-white font-bold block mb-0.5">Block 4:</span>
                Conv2D(512, 3×3) → MaxPool(2×2)<br/>
                <span className="text-slate-500 text-[10px]">Features for Skip 4: 16 × 16 × 512</span>
              </div>
            </div>
          </div>

          {/* Bottleneck */}
          <div className="bg-gradient-to-b from-orange-950/40 via-slate-800 to-slate-800 rounded-2xl p-6 border border-orange-500/30 space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                <span className="text-amber-400 font-bold text-sm">DEEP BOTTLENECK</span>
                <span className="text-[10px] bg-orange-500 text-white px-2 py-0.5 rounded font-semibold">CORE</span>
              </div>
              <p className="text-xs text-slate-300 mt-4 leading-relaxed font-sans">
                Acts as the semantic anchor of the network. Captures global contextual relationships from the infrared input tensor prior to expansive synthesis.
              </p>
            </div>

            <div className="p-4 bg-slate-900 rounded-xl border border-orange-500/40 text-center space-y-2">
              <span className="text-orange-400 font-bold text-sm block">Conv2D(1024, 3×3)</span>
              <span className="text-xs text-slate-400 block">Batch Normalization + ReLU</span>
              <span className="text-[11px] bg-slate-950 px-2 py-1 rounded text-slate-200 inline-block">
                Spatial Shape: 16 × 16 × 1024
              </span>
            </div>

            <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-700 text-xs text-emerald-400 font-sans flex items-center">
              <Sparkles className="w-4 h-4 mr-2 flex-shrink-0 text-amber-400" />
              <span>Skip Connections bridge Encoder layers directly across to Decoder layers.</span>
            </div>
          </div>

          {/* Decoder */}
          <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-700 pb-3">
              <span className="text-blue-400 font-bold text-sm">EXPANSIVE PATH (DECODER)</span>
              <span className="text-[10px] bg-slate-900 px-2 py-0.5 rounded text-slate-400">Upsampling</span>
            </div>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/80">
                <span className="text-white font-bold block mb-0.5">UpBlock 1:</span>
                TransposeConv(512, 2×2) + Skip 4 Concat<br/>
                <span className="text-slate-500 text-[10px]">Recovered: 32 × 32 × 512</span>
              </div>
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/80">
                <span className="text-white font-bold block mb-0.5">UpBlock 2 &amp; 3:</span>
                Filters: 256 &amp; 128 + Skip Concat<br/>
                <span className="text-slate-500 text-[10px]">Spatial Resolution: 128 × 128 × 128</span>
              </div>
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/80">
                <span className="text-orange-400 font-bold block mb-0.5">Final Output Layer:</span>
                Conv2D(3, 1×1) with Sigmoid Activation<br/>
                <span className="text-white font-bold text-xs">Final Shape: 256 × 256 × 3 RGB</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Target ISRO Strategic Sectors Mapping */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-xl font-bold text-slate-900">7 Strategic ISRO Target Applications</h2>
          <p className="text-xs text-slate-500 mt-1">
            How our colorization and enhancement system directly supports national remote sensing satellite fleets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "1. Agriculture Monitoring", sat: "RESOURCESAT-2A", desc: "Translating NIR reflectance into crop health vigor maps and irrigation canal mapping." },
            { title: "2. Disaster Management", sat: "CARTOSAT-3", desc: "Rapid flood inundation boundary extraction and embankment breach identification." },
            { title: "3. Forest Fire Detection", sat: "INSAT-3D TIR", desc: "Highlighting Mid-Wave IR thermal hotspots in dense pine forests before canopy spread." },
            { title: "4. Weather Analysis", sat: "INSAT-3DR", desc: "Colorizing cyclonic eyewall cloud top freezing temperatures in crisp white contrast." },
            { title: "5. Land Cover Mapping", sat: "LISS-IV Sensor", desc: "Separating urban concrete heat islands from coastal wetlands and mangrove reserves." },
            { title: "6. Environmental Monitoring", sat: "EOS-06 (Oceansat)", desc: "Tracking glacial lake outburst flood (GLOF) risks and sediment runoff in estuaries." },
            { title: "7. Defense Surveillance", sat: "RISAT-2BR1 SAR", desc: "Reconnaissance of high-altitude airstrips, hangars, and border camouflage infrastructure." },
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-orange-400 transition space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                <span className="font-mono text-[10px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-medium">
                  {item.sat}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
