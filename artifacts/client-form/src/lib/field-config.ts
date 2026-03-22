export interface FieldConfig {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  colSpan?: 1 | 2 | 3;
}

export const ALBUM_FIELDS: FieldConfig[] = [
  { id: "albumTitle", label: "Album Title", type: "text", colSpan: 2 },
  { id: "albumVersion", label: "Album Version", type: "text", placeholder: "e.g., Deluxe Edition" },
  { id: "albumDisplayArtist", label: "Album Display Artist", type: "text", colSpan: 2 },
  { id: "upc", label: "UPC", type: "text" },
  { id: "catalogNumber", label: "Catalog Number", type: "text" },
  { id: "primaryArtists", label: "Primary Artists", type: "text", colSpan: 2 },
  { id: "featuringArtists", label: "Featuring Artists", type: "text", colSpan: 2 },
  { id: "releaseDate", label: "Release Date", type: "date" },
  { id: "originalReleaseDate", label: "Original Release Date", type: "date" },
  { id: "mainGenre", label: "Main Genre", type: "text" },
  { id: "mainSubgenre", label: "Main Subgenre", type: "text" },
  { id: "alternateGenre", label: "Alternate Genre", type: "text" },
  { id: "alternateSubgenre", label: "Alternate Subgenre", type: "text" },
  { id: "label", label: "Label", type: "text", colSpan: 2 },
  { id: "cLineYear", label: "C-Line Year", type: "number", placeholder: "YYYY" },
  { id: "cLineName", label: "C-Line Name", type: "text", colSpan: 2 },
  { id: "pLineYear", label: "P-Line Year", type: "number", placeholder: "YYYY" },
  { id: "pLineName", label: "P-Line Name", type: "text", colSpan: 2 },
  { id: "parentalAdvisory", label: "Parental Advisory", type: "text" },
  { id: "recordingYear", label: "Recording Year", type: "number", placeholder: "YYYY" },
  { id: "recordingLocation", label: "Recording Location", type: "text", colSpan: 2 },
  { id: "albumFormat", label: "Album Format", type: "text" },
  { id: "numberOfVolumes", label: "Number of Volumes", type: "number" },
  { id: "territories", label: "Territories", type: "text", colSpan: 2 },
  { id: "excludedTerritories", label: "Excluded Territories", type: "text", colSpan: 2 },
  { id: "languageMetadata", label: "Language (Metadata)", type: "text" },
  { id: "catalogTier", label: "Catalog Tier", type: "text" },
];

export const TRACK_FIELDS: FieldConfig[] = [
  { id: "trackTitle", label: "Track Title", type: "text", colSpan: 2 },
  { id: "trackVersion", label: "Track Version", type: "text" },
  { id: "isrc", label: "ISRC", type: "text" },
  { id: "trackPrimaryArtists", label: "Track Primary Artists", type: "text", colSpan: 2 },
  { id: "trackFeaturingArtists", label: "Track Featuring Artists", type: "text", colSpan: 2 },
  { id: "trackDisplayArtist", label: "Track Display Artist", type: "text", colSpan: 2 },
  { id: "volumeNumber", label: "Volume Number", type: "number" },
  { id: "trackMainGenre", label: "Track Main Genre", type: "text" },
  { id: "trackMainSubgenre", label: "Track Main Subgenre", type: "text" },
  { id: "trackAlternateGenre", label: "Track Alternate Genre", type: "text" },
  { id: "trackAlternateSubgenre", label: "Track Alternate Subgenre", type: "text" },
  { id: "trackLanguageMetadata", label: "Track Language (Metadata)", type: "text" },
  { id: "audioLanguage", label: "Audio Language", type: "text" },
  { id: "lyrics", label: "Lyrics", type: "text", colSpan: 3 },
  { id: "availableSeparately", label: "Available Separately", type: "text" },
  { id: "trackParentalAdvisory", label: "Track Parental Advisory", type: "text" },
  { id: "previewStart", label: "Preview Start", type: "text", placeholder: "00:00" },
  { id: "previewLength", label: "Preview Length", type: "text", placeholder: "00:30" },
  { id: "trackRecordingYear", label: "Track Recording Year", type: "number", placeholder: "YYYY" },
  { id: "trackRecordingLocation", label: "Track Recording Location", type: "text", colSpan: 2 },
  { id: "composers", label: "Composers", type: "text", colSpan: 3 },
  { id: "lyricists", label: "Lyricists", type: "text", colSpan: 2 },
  { id: "masteringEngineer", label: "Mastering Engineer", type: "text" },
  { id: "producer", label: "Producer", type: "text", colSpan: 2 },
  { id: "programmer", label: "Programmer", type: "text" },
  { id: "remixers", label: "Remixers", type: "text" },
  { id: "vocals", label: "Vocals", type: "text" },
  { id: "writer", label: "Writer", type: "text", colSpan: 2 },
  { id: "publisher", label: "Publisher", type: "text", colSpan: 2 },
  { id: "trackSequence", label: "Track Sequence", type: "number" },
  { id: "trackCatalogTier", label: "Track Catalog Tier", type: "text" },
  { id: "originalFileName", label: "Original File Name", type: "text", colSpan: 2 },
];

export const CLASSICAL_FIELDS: FieldConfig[] = [
  { id: "movementTitle", label: "Movement Title", type: "text", colSpan: 2 },
  { id: "classicalKey", label: "Classical Key", type: "text" },
  { id: "classicalWork", label: "Classical Work", type: "text", colSpan: 2 },
  { id: "alwaysSendDisplayTitle", label: "Always Send Display Title", type: "text" },
  { id: "movementNumber", label: "Movement Number", type: "number" },
  { id: "classicalCatalog", label: "Classical Catalog", type: "text" },
  { id: "contributingArtists", label: "Contributing Artists", type: "text", colSpan: 2 },
  { id: "performers", label: "Performers", type: "text", colSpan: 2 },
];
