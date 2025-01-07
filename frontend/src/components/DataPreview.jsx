import React from "react";
import { Terminal } from "lucide-react";

const DataPreview = ({ csvData }) => {
  return (
    <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
      <div className="flex items-center gap-2 mb-4">
        <Terminal size={20} className="text-blue-500" />
        <h2 className="text-lg font-medium">Data Preview</h2>
      </div>
      <div className="bg-black/50 rounded-xl p-4 overflow-auto max-h-[200px]">
        {csvData && csvData.length > 0 ? (
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-400">
                {Object.keys(csvData[0]).map((header, i) => (
                  <th key={i} className="p-2 text-left">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {csvData.slice(1).map((row, i) => (
                <tr key={i} className="border-t border-white/10">
                  {Object.values(row).map((value, j) => (
                    <td key={j} className="p-2">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-gray-400 text-center py-8">
            No data available. Please upload a CSV or JSON file.
          </div>
        )}
      </div>
    </div>
  );
};

export default DataPreview;
