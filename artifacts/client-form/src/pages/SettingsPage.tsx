import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Database, Save, ExternalLink, Loader2, AlertCircle } from "lucide-react";
import { useGetSpreadsheetId, useSetSpreadsheetId } from "@workspace/api-client-react";
import { useQueryClient } from "@tanstack/react-query";
import { BeautifulInput } from "@/components/form/BeautifulInput";
import { useToast } from "@/hooks/use-toast";

export default function SettingsPage() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [sheetId, setSheetId] = useState("");

  const { data: sheetInfo, isLoading, isError } = useGetSpreadsheetId();

  const { mutate, isPending } = useSetSpreadsheetId({
    mutation: {
      onSuccess: () => {
        toast({
          title: "Settings Updated",
          description: "Target spreadsheet ID has been successfully saved.",
        });
        queryClient.invalidateQueries({ queryKey: ["/api/ingestion/spreadsheet-id"] });
      },
      onError: (error: any) => {
        toast({
          title: "Update Failed",
          description: error.message || "Failed to update spreadsheet ID.",
          variant: "destructive",
        });
      },
    }
  });

  useEffect(() => {
    if (sheetInfo?.spreadsheetId) {
      setSheetId(sheetInfo.spreadsheetId);
    }
  }, [sheetInfo]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sheetId.trim()) return;
    mutate({ data: { spreadsheetId: sheetId.trim() } });
  };

  const sheetUrl = sheetId.trim()
    ? `https://docs.google.com/spreadsheets/d/${sheetId.trim()}/edit`
    : null;

  return (
    <main className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 font-display">System Settings</h1>
          <p className="mt-2 text-gray-500 font-medium">
            Configure the integration endpoints for the ingestion portal.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl p-8 shadow-sm border-2 border-violet-300 shadow-violet-100/50"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-pink-500 text-white flex items-center justify-center shadow-md">
              <Database className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Google Sheets Destination</h2>
              <p className="text-sm text-gray-500 font-medium">Where submitted metadata is appended</p>
            </div>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-violet-500" />
            </div>
          ) : isError ? (
            <div className="bg-red-50 text-red-600 p-4 rounded-2xl flex items-start gap-3 border border-red-200">
              <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-bold">Failed to load settings</h4>
                <p className="text-sm opacity-90">Could not retrieve the current spreadsheet ID from the server.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSave} className="space-y-6">
              <div className="space-y-4">
                <BeautifulInput
                  label="Target Spreadsheet ID"
                  value={sheetId}
                  onChange={(e) => setSheetId(e.target.value)}
                  placeholder="e.g., 1YATcJWEyhmZQbXglU6WcjvybKDpCOOJzCbYIIdpXIN8"
                  required
                />

                <div className="bg-gray-50 rounded-2xl p-4 text-sm font-medium text-gray-500 border border-gray-200">
                  <span className="text-gray-900 font-bold">Note:</span> The Spreadsheet ID is the long string of characters found in the URL of your Google Sheet.
                  <br className="mb-2" />
                  <code className="text-xs">docs.google.com/spreadsheets/d/<span className="text-violet-600 font-bold">SPREADSHEET_ID</span>/edit</code>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <button
                  type="submit"
                  disabled={isPending || sheetId === sheetInfo?.spreadsheetId || !sheetId.trim()}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-md shadow-violet-200 hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none transition-all duration-200"
                >
                  {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                  Save Configuration
                </button>

                {sheetUrl && (
                  <a
                    href={sheetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold border-2 border-violet-300 text-violet-600 hover:bg-violet-50 transition-colors"
                  >
                    Open Sheet
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </main>
  );
}
