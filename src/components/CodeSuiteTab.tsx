import React, { useState } from "react";
import { PYTHON_CODE_SUITE } from "../data/pythonCode";
import { PythonFile } from "../types";
import { Code2, Copy, Check, FileText, FolderTree, Terminal, ShieldAlert, Download } from "lucide-react";

export const CodeSuiteTab: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<PythonFile>(PYTHON_CODE_SUITE[0]);
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedFile.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadFile = () => {
    const blob = new Blob([selectedFile.code], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = selectedFile.filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-xl text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 mb-1">
            <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs px-2.5 py-0.5 rounded-full font-mono font-medium">
              PRODUCTION READY
            </span>
            <span className="text-xs text-slate-400 font-mono">TensorFlow / OpenCV / Streamlit</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Complete Python Deliverables Suite</h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            File-by-file implementation satisfying the exact required ISRO Hackathon folder hierarchy and constraints.
          </p>
        </div>

        <div className="bg-slate-800 px-4 py-2.5 rounded-xl border border-slate-700 font-mono text-xs text-slate-300 self-stretch sm:self-auto flex items-center justify-center">
          <Terminal className="w-4 h-4 text-orange-400 mr-2" />
          <span>python train.py --epochs 50</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Tree Sidebar */}
        <div className="lg:col-span-3 space-y-6">
          
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-bold text-slate-900 text-sm flex items-center">
                <FolderTree className="w-4 h-4 mr-2 text-orange-500" /> Project Structure
              </h3>
              <span className="text-xs text-slate-500 font-mono">project/</span>
            </div>

            {/* Folder Mock hierarchy */}
            <div className="space-y-1 font-mono text-xs">
              
              <div className="text-slate-500 px-2 py-1 flex items-center">
                <span className="text-amber-500 mr-1.5">📁</span> dataset/
              </div>
              <div className="text-slate-400 pl-6 py-0.5 flex items-center">
                <span className="text-slate-300 mr-1.5">↳</span> infrared/ &amp; rgb/
              </div>

              <div className="text-slate-500 px-2 py-1 flex items-center mt-1">
                <span className="text-amber-500 mr-1.5">📁</span> outputs/
              </div>
              <div className="text-slate-400 pl-6 py-0.5 flex items-center">
                <span className="text-slate-300 mr-1.5">↳</span> best_unet_model.h5
              </div>

              <div className="pt-2 border-t border-slate-100 space-y-1 mt-2">
                {PYTHON_CODE_SUITE.map((file) => {
                  const isSelected = selectedFile.filename === file.filename;
                  return (
                    <button
                      key={file.filename}
                      onClick={() => setSelectedFile(file)}
                      className={`w-full text-left px-3 py-2 rounded-xl transition flex items-center justify-between ${
                        isSelected
                          ? "bg-slate-900 text-white font-semibold shadow-md shadow-slate-900/10"
                          : "text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <span className="flex items-center truncate">
                        <FileText className={`w-3.5 h-3.5 mr-2 ${isSelected ? "text-orange-400" : "text-slate-400"}`} />
                        <span>{file.filename}</span>
                      </span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded uppercase ${
                        isSelected ? "bg-slate-800 text-slate-300" : "bg-slate-200 text-slate-600"
                      }`}>
                        {file.category}
                      </span>
                    </button>
                  );
                })}
              </div>

            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-200 text-blue-900 text-xs leading-relaxed">
            <span className="font-bold block mb-1">🚀 Quick Execution Instructions:</span>
            To run the Streamlit dashboard locally:
            <code className="block bg-blue-100/80 p-2 rounded mt-1 font-mono text-[11px] text-blue-950 border border-blue-300/60">
              pip install -r requirements.txt<br/>
              streamlit run app.py
            </code>
          </div>

        </div>

        {/* Right Code Display */}
        <div className="lg:col-span-9 space-y-4">
          
          <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col h-[700px]">
            
            {/* Code Bar */}
            <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between flex-wrap gap-3">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-orange-400 font-mono font-bold text-sm">{selectedFile.path}</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-xs text-slate-400">{selectedFile.description}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handleDownloadFile}
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono transition border border-slate-700"
                >
                  <Download className="w-3.5 h-3.5 text-blue-400" />
                  <span>Download .py</span>
                </button>

                <button
                  onClick={handleCopy}
                  className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold transition shadow-md shadow-orange-500/20"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied to Clipboard!" : "Copy Full Code"}</span>
                </button>
              </div>
            </div>

            {/* Code Content */}
            <div className="flex-1 overflow-auto p-6 bg-slate-900 font-mono text-xs sm:text-sm text-slate-200 leading-relaxed scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
              <pre className="whitespace-pre">
                <code>{selectedFile.code}</code>
              </pre>
            </div>

            {/* Code Footer Status */}
            <div className="bg-slate-950 px-6 py-3 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between font-mono">
              <span>Encoding: UTF-8</span>
              <span>Lines: {selectedFile.code.split("\n").length}</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
