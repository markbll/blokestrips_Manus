/* ============================================================
   CSV IMPORT PAGE
   Admin interface for importing packages via CSV
   ============================================================ */
import { useState, useRef } from "react";
import { parsePackageCSV, validatePackageData, EXAMPLE_CSV, CSV_HEADERS } from "@/lib/packageDataSchema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AlertCircle, CheckCircle, Download } from "lucide-react";

export default function CSVImport() {
  const [csvContent, setCsvContent] = useState("");
  const [importedPackages, setImportedPackages] = useState<any[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      setCsvContent(content);
      setErrors([]);
      setSuccess(false);
    };
    reader.readAsText(file);
  };

  const handleImport = () => {
    setErrors([]);
    setSuccess(false);
    setImportedPackages([]);

    if (!csvContent.trim()) {
      setErrors(["Please provide CSV content"]);
      return;
    }

    try {
      const packages = parsePackageCSV(csvContent);

      // Validate each package
      const validationErrors: string[] = [];
      packages.forEach((pkg, idx) => {
        const errors = validatePackageData(pkg);
        if (errors.length > 0) {
          validationErrors.push(`Row ${idx + 2}: ${errors.join(", ")}`);
        }
      });

      if (validationErrors.length > 0) {
        setErrors(validationErrors);
        return;
      }

      setImportedPackages(packages);
      setSuccess(true);
    } catch (error) {
      setErrors([error instanceof Error ? error.message : "Unknown error occurred"]);
    }
  };

  const downloadTemplate = () => {
    const element = document.createElement("a");
    element.setAttribute("href", "data:text/csv;charset=utf-8," + encodeURIComponent(EXAMPLE_CSV));
    element.setAttribute("download", "blokestrips-packages-template.csv");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-black text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        <section className="py-12 md:py-16">
          <div className="container max-w-2xl">
            <h1 className="font-black text-3xl md:text-4xl italic mb-2">CSV Import</h1>
            <p className="text-amber-500 font-bold mb-8">Bulk import packages from CSV</p>

            {/* Template Download */}
            <div className="bg-foreground/5 border border-foreground/10 p-6 rounded mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold mb-2">Get Started</h3>
                  <p className="text-sm text-foreground/70">Download the CSV template to see the required format</p>
                </div>
                <button
                  onClick={downloadTemplate}
                  className="flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-black font-bold transition"
                >
                  <Download className="w-4 h-4" />
                  Download Template
                </button>
              </div>
            </div>

            {/* File Upload */}
            <div className="mb-8">
              <label className="block text-sm font-bold mb-2">Upload CSV File</label>
              <input
                ref={fileInputRef}
                type="file"
                accept=".csv"
                onChange={handleFileUpload}
                className="w-full px-4 py-2 bg-foreground/5 border border-foreground/20 rounded text-sm"
              />
            </div>

            {/* CSV Content Editor */}
            <div className="mb-8">
              <label className="block text-sm font-bold mb-2">Or Paste CSV Content</label>
              <textarea
                value={csvContent}
                onChange={(e) => setCsvContent(e.target.value)}
                placeholder="Paste your CSV content here..."
                className="w-full h-64 px-4 py-2 bg-foreground/5 border border-foreground/20 rounded text-sm font-mono text-xs"
              />
            </div>

            {/* Import Button */}
            <button
              onClick={handleImport}
              className="w-full px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-bold transition uppercase tracking-wide mb-8"
            >
              Import Packages
            </button>

            {/* Errors */}
            {errors.length > 0 && (
              <div className="mb-8 p-4 bg-red-500/10 border border-red-500/30 rounded">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-red-500 mb-2">Import Errors</h3>
                    <ul className="space-y-1 text-sm text-foreground/80">
                      {errors.map((error, idx) => (
                        <li key={idx}>• {error}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Success */}
            {success && importedPackages.length > 0 && (
              <div className="mb-8 p-4 bg-green-500/10 border border-green-500/30 rounded">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-green-500 mb-2">Import Successful</h3>
                    <p className="text-sm text-foreground/80">
                      {importedPackages.length} packages ready to import
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Preview */}
            {importedPackages.length > 0 && (
              <div className="mb-8">
                <h3 className="font-bold mb-4">Preview ({importedPackages.length} packages)</h3>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {importedPackages.map((pkg, idx) => (
                    <div key={idx} className="p-4 bg-foreground/5 border border-foreground/10 rounded text-sm">
                      <div className="font-bold text-amber-500">{pkg.name}</div>
                      <div className="text-foreground/70 mt-1">
                        {pkg.location}, {pkg.state} • ${pkg.pricePerPerson} per person • {pkg.duration} nights
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CSV Headers Reference */}
            <div className="bg-foreground/5 border border-foreground/10 p-6 rounded">
              <h3 className="font-bold mb-4">Required CSV Headers</h3>
              <div className="grid grid-cols-2 gap-2 text-xs text-foreground/70">
                {CSV_HEADERS.map((header) => (
                  <div key={header} className="font-mono">
                    {header}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
