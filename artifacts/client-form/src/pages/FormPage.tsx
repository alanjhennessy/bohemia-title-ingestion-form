import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Music,
  Mic2,
  Loader2,
  ArrowRight,
  Plus,
  Trash2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { submitIngestion, type IngestionFormData } from "@workspace/api-client-react";
import { ALBUM_FIELDS, TRACK_FIELDS, CLASSICAL_FIELDS } from "@/lib/field-config";
import { BeautifulInput } from "@/components/form/BeautifulInput";
import { BeautifulSelect } from "@/components/form/BeautifulSelect";
import { useToast } from "@/hooks/use-toast";

const MAX_TRACKS = 50;

type TrackEntry = Partial<Record<string, string>>;

type FormValues = {
  albumTitle?: string;
  albumVersion?: string;
  albumDisplayArtist?: string;
  upc?: string;
  catalogNumber?: string;
  primaryArtists?: string;
  featuringArtists?: string;
  releaseDate?: string;
  originalReleaseDate?: string;
  mainGenre?: string;
  mainSubgenre?: string;
  alternateGenre?: string;
  alternateSubgenre?: string;
  label?: string;
  cLineYear?: string;
  cLineName?: string;
  pLineYear?: string;
  pLineName?: string;
  parentalAdvisory?: string;
  recordingYear?: string;
  recordingLocation?: string;
  albumFormat?: string;
  numberOfVolumes?: string;
  territories?: string;
  excludedTerritories?: string;
  languageMetadata?: string;
  catalogTier?: string;
  tracks: TrackEntry[];
};

const emptyTrack = (): TrackEntry => ({ trackCatalogTier: "Mid" });

export default function FormPage() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitProgress, setSubmitProgress] = useState({ current: 0, total: 0 });
  const [albumExpanded, setAlbumExpanded] = useState(true);
  const [expandedTracks, setExpandedTracks] = useState<Set<number>>(new Set([0]));

  const { register, handleSubmit, reset, watch, control } = useForm<FormValues>({
    defaultValues: { catalogTier: "Mid", tracks: [emptyTrack()] },
  });

  const { fields: trackFields, append: addTrack, remove: removeTrack } = useFieldArray({
    control,
    name: "tracks",
  });

  const trackValues = watch("tracks");

  const toggleTrack = (index: number) => {
    setExpandedTracks((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const handleAddTrack = () => {
    if (trackFields.length >= MAX_TRACKS) return;
    const newIndex = trackFields.length;
    addTrack(emptyTrack());
    setExpandedTracks((prev) => new Set([...prev, newIndex]));
  };

  const handleRemoveTrack = (index: number) => {
    removeTrack(index);
    setExpandedTracks((prev) => {
      const next = new Set<number>();
      prev.forEach((i) => {
        if (i < index) next.add(i);
        else if (i > index) next.add(i - 1);
      });
      return next;
    });
  };

  const onSubmit = async (data: FormValues) => {
    const { tracks, ...albumRaw } = data;

    const albumData = Object.fromEntries(
      Object.entries(albumRaw).filter(([, v]) => v !== "" && v != null)
    ) as Partial<IngestionFormData>;

    if (!tracks || tracks.length === 0) {
      toast({ title: "No tracks", description: "Please add at least one track.", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    setSubmitProgress({ current: 0, total: tracks.length });

    try {
      for (let i = 0; i < tracks.length; i++) {
        const trackData = Object.fromEntries(
          Object.entries(tracks[i] ?? {}).filter(([, v]) => v !== "" && v != null)
        ) as Partial<IngestionFormData>;

        await submitIngestion({ data: { ...albumData, ...trackData } as IngestionFormData });
        setSubmitProgress({ current: i + 1, total: tracks.length });
      }

      setIsSubmitted(true);
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error: unknown) {
      const msg =
        (error as { error?: string })?.error ??
        "An unexpected error occurred while saving to Google Sheets.";
      toast({ title: "Submission Failed", description: msg, variant: "destructive" });
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    reset({ catalogTier: "Mid", tracks: [emptyTrack()] });
    setIsSubmitted(false);
    setAlbumExpanded(true);
    setExpandedTracks(new Set([0]));
    setSubmitProgress({ current: 0, total: 0 });
  };

  const getTrackLabel = (index: number) => {
    const seq = trackValues?.[index]?.trackSequence;
    const title = trackValues?.[index]?.trackTitle;
    const num = seq ? `Track ${seq}` : `Track ${index + 1}`;
    return title ? `${num} — ${title}` : num;
  };

  return (
    <main className="min-h-screen pb-24">
      {/* Hero */}
      <div className="relative h-[220px] w-full overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-pink-500 flex items-center justify-center">
        <div className="absolute text-[180px] text-white/10 select-none pointer-events-none font-bold leading-none -rotate-12 translate-y-4">
          ♪
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight font-display"
          >
            New Title Ingestion
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-white/80 font-medium max-w-2xl mx-auto"
          >
            Submit your release metadata
          </motion.p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            /* ── Success screen ── */
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
                {submitProgress.total === 1
                  ? "Your track metadata has been successfully appended to the Google Sheet."
                  : `${submitProgress.total} tracks have been successfully appended to the Google Sheet.`}
              </p>
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold bg-gradient-to-r from-violet-500 to-pink-500 text-white hover:opacity-90 transition-all hover:-translate-y-0.5 hover:shadow-xl shadow-lg active:translate-y-0"
              >
                Submit Another Release <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          ) : (
            /* ── Form ── */
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-8"
            >
              {/* ── Album Information ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`bg-card rounded-3xl overflow-hidden shadow-lg border-2 transition-colors duration-300 ${
                  albumExpanded ? "border-violet-300 shadow-sm shadow-violet-100/50" : "border-gray-200 shadow-black/5"
                }`}
              >
                <div
                  className={`p-6 md:p-8 flex items-center gap-4 cursor-pointer select-none transition-colors ${
                    albumExpanded ? "bg-violet-50" : "hover:bg-gray-50"
                  }`}
                  onClick={() => setAlbumExpanded((v) => !v)}
                >
                  <div className={`p-3 rounded-2xl ${albumExpanded ? "bg-gradient-to-br from-violet-500 to-pink-500 text-white shadow-md" : "bg-gray-100 text-gray-500"}`}>
                    <Music className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground">Album Information</h3>
                    <p className="text-sm text-muted-foreground font-medium mt-1">
                      {ALBUM_FIELDS.length} fields
                    </p>
                  </div>
                  {albumExpanded ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>

                <AnimatePresence>
                  {albumExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-border"
                    >
                      <div className="p-6 md:p-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                          {ALBUM_FIELDS.map((field) =>
                            field.type === "select" && field.options ? (
                              <BeautifulSelect
                                key={field.id}
                                label={field.label}
                                options={field.options}
                                placeholder={field.placeholder}
                                colSpan={field.colSpan}
                                {...register(field.id as keyof Omit<FormValues, "tracks">)}
                              />
                            ) : (
                              <BeautifulInput
                                key={field.id}
                                label={field.label}
                                type={field.type}
                                placeholder={field.placeholder || `Enter ${field.label.toLowerCase()}`}
                                colSpan={field.colSpan}
                                {...register(field.id as keyof Omit<FormValues, "tracks">)}
                              />
                            )
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* ── Track Details ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-4"
              >
                {/* Section header row */}
                <div className="flex items-center justify-between px-1">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-violet-500 to-pink-500 text-white shadow-md">
                      <Mic2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Track Details</h3>
                      <p className="text-sm text-muted-foreground font-medium">
                        {trackFields.length} of {MAX_TRACKS} tracks &middot; {TRACK_FIELDS.length + CLASSICAL_FIELDS.length} fields each
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleAddTrack}
                    disabled={trackFields.length >= MAX_TRACKS}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-md shadow-violet-200 hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none transition-all duration-200"
                  >
                    <Plus className="w-4 h-4" />
                    Add Track
                  </button>
                </div>

                {/* Track accordion list */}
                <div className="space-y-3">
                  {trackFields.map((field, index) => {
                    const isExpanded = expandedTracks.has(index);
                    const seqDisplay = trackValues?.[index]?.trackSequence || String(index + 1);

                    return (
                      <motion.div
                        key={field.id}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`bg-card rounded-2xl overflow-hidden shadow-md border-2 transition-colors duration-300 ${
                          isExpanded ? "border-violet-300 shadow-sm shadow-violet-100/50" : "border-gray-200 shadow-black/5"
                        }`}
                      >
                        {/* Card header */}
                        <div
                          className={`px-6 py-4 flex items-center gap-3 cursor-pointer select-none transition-colors ${
                            isExpanded ? "bg-violet-50" : "hover:bg-gray-50"
                          }`}
                          onClick={() => toggleTrack(index)}
                        >
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                              isExpanded
                                ? "bg-gradient-to-br from-violet-500 to-pink-500 text-white shadow-md"
                                : "bg-gray-100 text-gray-500"
                            }`}
                          >
                            {seqDisplay}
                          </div>
                          <span className="flex-1 font-semibold text-foreground truncate">
                            {getTrackLabel(index)}
                          </span>
                          <div className="flex items-center gap-2">
                            {trackFields.length > 1 && (
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleRemoveTrack(index);
                                }}
                                className="p-1.5 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                                title="Remove track"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                            {isExpanded ? (
                              <ChevronUp className="w-5 h-5 text-muted-foreground" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-muted-foreground" />
                            )}
                          </div>
                        </div>

                        {/* Expanded track fields */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="border-t border-border"
                            >
                              <div className="p-6 md:p-8 space-y-10">
                                {/* Track fields group */}
                                <div>
                                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
                                    Track Info
                                  </p>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                                    {TRACK_FIELDS.map((f) =>
                                      f.type === "select" && f.options ? (
                                        <BeautifulSelect
                                          key={f.id}
                                          label={f.label}
                                          options={f.options}
                                          colSpan={f.colSpan}
                                          {...register(`tracks.${index}.${f.id}` as `tracks.${number}.${string}`)}
                                        />
                                      ) : (
                                        <BeautifulInput
                                          key={f.id}
                                          label={f.label}
                                          type={f.type}
                                          placeholder={f.placeholder || `Enter ${f.label.toLowerCase()}`}
                                          colSpan={f.colSpan}
                                          {...register(`tracks.${index}.${f.id}` as `tracks.${number}.${string}`)}
                                        />
                                      )
                                    )}
                                  </div>
                                </div>

                                {/* Classical & Additional group */}
                                <div>
                                  <div className="flex items-center gap-4 mb-6">
                                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-violet-200 to-violet-200" />
                                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 whitespace-nowrap">
                                      Classical &amp; Additional
                                    </p>
                                    <div className="flex-1 h-px bg-gradient-to-r from-violet-200 via-violet-200 to-transparent" />
                                  </div>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                                    {CLASSICAL_FIELDS.map((f) => (
                                      <BeautifulInput
                                        key={f.id}
                                        label={f.label}
                                        type={f.type}
                                        placeholder={f.placeholder || `Enter ${f.label.toLowerCase()}`}
                                        colSpan={f.colSpan}
                                        {...register(`tracks.${index}.${f.id}` as `tracks.${number}.${string}`)}
                                      />
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Add another track footer button */}
                {trackFields.length < MAX_TRACKS && (
                  <button
                    type="button"
                    onClick={handleAddTrack}
                    className="w-full py-3 rounded-3xl border-2 border-dashed border-violet-300 text-sm font-semibold text-violet-500 hover:bg-violet-50 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Add another track ({trackFields.length}/{MAX_TRACKS})
                  </button>
                )}
              </motion.div>

              {/* FAQ Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white border-2 border-violet-200 rounded-3xl p-8"
              >
                <h3 className="font-display font-bold text-xl text-gray-900 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Entering multiple names?</p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Please separate multiple entries with a pipe ( | ) symbol.<br />
                      <span className="font-mono text-violet-600 text-xs bg-violet-50 px-2 py-0.5 rounded-full mt-1 inline-block">
                        Jack Black | James Brown | John Brady
                      </span>
                    </p>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">What to enter if I don't know?</p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Only enter the information you know for sure — we'll do the rest.
                    </p>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Any further questions?</p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Contact{" "}
                      <a
                        href="mailto:alan@bohemiarecords.ie"
                        className="text-violet-600 font-semibold hover:text-pink-500 transition-colors"
                      >
                        alan@bohemiarecords.ie
                      </a>
                      {" "}with any questions or to notify of any error adjustments to your submissions.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Submit button */}
              <div className="flex justify-end pt-4 pb-12">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-3 px-12 py-4 rounded-full font-bold text-lg bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-xl shadow-pink-500/20 hover:shadow-2xl hover:shadow-pink-500/30 hover:opacity-95 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none transition-all duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      {submitProgress.total > 1
                        ? `Submitting track ${submitProgress.current + 1} of ${submitProgress.total}…`
                        : "Processing…"}
                    </>
                  ) : (
                    <>
                      Submit {trackFields.length > 1 ? `${trackFields.length} Tracks` : "Metadata"}
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
