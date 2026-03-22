import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Music, Mic2, LayoutList, Loader2, ArrowRight } from "lucide-react";
import { useSubmitIngestion, type IngestionFormData } from "@workspace/api-client-react";
import { ALBUM_FIELDS, TRACK_FIELDS, CLASSICAL_FIELDS } from "@/lib/field-config";
import { BeautifulInput } from "@/components/form/BeautifulInput";
import { useToast } from "@/hooks/use-toast";

const formSections = [
  { id: "album", title: "Album Information", icon: DiscIcon, fields: ALBUM_FIELDS },
  { id: "track", title: "Track Details", icon: Mic2, fields: TRACK_FIELDS },
  { id: "classical", title: "Classical & Additional", icon: LayoutList, fields: CLASSICAL_FIELDS },
];

function DiscIcon(props: any) {
  return <Music {...props} />;
}

export default function FormPage() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState(formSections[0].id);

  const { register, handleSubmit, reset } = useForm<IngestionFormData>();

  const { mutate, isPending } = useSubmitIngestion({
    mutation: {
      onSuccess: () => {
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
      onError: (error) => {
        toast({
          title: "Submission Failed",
          description: error.error || "An unexpected error occurred while saving to Google Sheets.",
          variant: "destructive",
        });
      },
    },
  });

  const onSubmit = (data: IngestionFormData) => {
    // Filter out empty strings before sending to keep payload clean
    const cleanedData = Object.fromEntries(
      Object.entries(data).filter(([_, v]) => v !== "" && v != null)
    ) as IngestionFormData;
    
    mutate({ data: cleanedData });
  };

  const handleReset = () => {
    reset();
    setIsSubmitted(false);
    setActiveSection(formSections[0].id);
  };

  return (
    <main className="min-h-screen pb-24">
      {/* Premium Hero Area */}
      <div className="relative h-[240px] w-full overflow-hidden bg-slate-900 flex items-center justify-center">
        <div className="absolute inset-0 opacity-40 mix-blend-screen">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
            alt="Abstract background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            New Title Ingestion
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-slate-300 font-medium max-w-2xl mx-auto"
          >
            Submit your release metadata
          </motion.p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-card rounded-3xl p-8 md:p-16 shadow-2xl shadow-black/5 border border-border text-center"
            >
              <div className="mx-auto w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8 shadow-inner">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Ingestion Successful!</h2>
              <p className="text-lg text-muted-foreground max-w-md mx-auto mb-10">
                Your release metadata has been successfully processed and appended to the master Google Sheet catalog.
              </p>
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-foreground text-background hover:bg-foreground/90 transition-all hover:-translate-y-0.5 hover:shadow-xl shadow-lg active:translate-y-0"
              >
                Submit Another Release <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-8"
            >
              {formSections.map((section, index) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                
                return (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-card rounded-3xl overflow-hidden shadow-lg border transition-colors duration-300 ${
                      isActive ? "border-primary/30 shadow-primary/5" : "border-border shadow-black/5"
                    }`}
                  >
                    <div 
                      className={`p-6 md:p-8 flex items-center gap-4 cursor-pointer select-none transition-colors ${
                        isActive ? "bg-primary/5" : "hover:bg-muted/50"
                      }`}
                      onClick={() => setActiveSection(section.id)}
                    >
                      <div className={`p-3 rounded-2xl ${isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{section.title}</h3>
                        <p className="text-sm text-muted-foreground font-medium mt-1">
                          {section.fields.length} fields
                        </p>
                      </div>
                    </div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="border-t border-border"
                        >
                          <div className="p-6 md:p-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                              {section.fields.map((field) => (
                                <BeautifulInput
                                  key={field.id}
                                  label={field.label}
                                  type={field.type}
                                  placeholder={field.placeholder || `Enter ${field.label.toLowerCase()}`}
                                  colSpan={field.colSpan}
                                  {...register(field.id as keyof IngestionFormData)}
                                />
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}

              <div className="flex justify-end pt-4 pb-12">
                <button
                  type="submit"
                  disabled={isPending}
                  className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-2xl font-bold text-lg bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none transition-all duration-200"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Submit Metadata
                      <ArrowRight className="w-6 h-6" />
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
