import { Router, type IRouter } from "express";
import { getUncachableGoogleSheetClient } from "../lib/google-sheets.js";

const router: IRouter = Router();

const SHEET_NAME = "NEW Ingestion sheet";

const COLUMN_ORDER = [
  "albumTitle",
  "albumVersion",
  "albumDisplayArtist",
  "upc",
  "catalogNumber",
  "primaryArtists",
  "featuringArtists",
  "releaseDate",
  "originalReleaseDate",
  "mainGenre",
  "mainSubgenre",
  "alternateGenre",
  "alternateSubgenre",
  "label",
  "cLineYear",
  "cLineName",
  "pLineYear",
  "pLineName",
  "parentalAdvisory",
  "recordingYear",
  "recordingLocation",
  "albumFormat",
  "numberOfVolumes",
  "territories",
  "excludedTerritories",
  "languageMetadata",
  "catalogTier",
  "trackTitle",
  "trackVersion",
  "isrc",
  "trackPrimaryArtists",
  "trackFeaturingArtists",
  "trackDisplayArtist",
  "volumeNumber",
  "trackMainGenre",
  "trackMainSubgenre",
  "trackAlternateGenre",
  "trackAlternateSubgenre",
  "trackLanguageMetadata",
  "audioLanguage",
  "lyrics",
  "availableSeparately",
  "trackParentalAdvisory",
  "previewStart",
  "previewLength",
  "trackRecordingYear",
  "trackRecordingLocation",
  "composers",
  "lyricists",
  "masteringEngineer",
  "producer",
  "programmer",
  "remixers",
  "vocals",
  "writer",
  "publisher",
  "trackSequence",
  "trackCatalogTier",
  "originalFileName",
  "movementTitle",
  "classicalKey",
  "classicalWork",
  "alwaysSendDisplayTitle",
  "movementNumber",
  "classicalCatalog",
  "contributingArtists",
  "performers",
  "softrRecordId",
];

let targetSpreadsheetId = "";

router.get("/ingestion/spreadsheet-id", (_req, res) => {
  res.json({
    spreadsheetId: targetSpreadsheetId,
    spreadsheetUrl: targetSpreadsheetId
      ? `https://docs.google.com/spreadsheets/d/${targetSpreadsheetId}/edit`
      : "",
  });
});

router.post("/ingestion/spreadsheet-id", (req, res) => {
  const { spreadsheetId } = req.body as { spreadsheetId: string };
  if (!spreadsheetId || typeof spreadsheetId !== "string") {
    res.status(400).json({ error: "spreadsheetId is required" });
    return;
  }
  targetSpreadsheetId = spreadsheetId.trim();
  res.json({
    spreadsheetId: targetSpreadsheetId,
    spreadsheetUrl: `https://docs.google.com/spreadsheets/d/${targetSpreadsheetId}/edit`,
  });
});

router.post("/ingestion/submit", async (req, res) => {
  try {
    if (!targetSpreadsheetId) {
      res.status(400).json({ error: "No target spreadsheet configured. Please set a spreadsheet ID first." });
      return;
    }

    const formData = req.body as Record<string, string>;
    const row = COLUMN_ORDER.map((key) => formData[key] ?? "");

    const sheets = await getUncachableGoogleSheetClient();
    await sheets.spreadsheets.values.append({
      spreadsheetId: targetSpreadsheetId,
      range: `'${SHEET_NAME}'!A1`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [row],
      },
    });

    res.json({
      success: true,
      spreadsheetId: targetSpreadsheetId,
      message: "Successfully submitted to Google Sheet",
    });
  } catch (err) {
    req.log.error({ err }, "Failed to submit ingestion form");
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ error: message });
  }
});

export default router;
