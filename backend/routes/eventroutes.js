import express from "express";
import Event from "../models/Event.js";
import fs from "fs";
import path from "path";
import * as XLSX from "xlsx";

const router = express.Router();
const EXCEL_PATH = path.resolve("events.xlsx");

function appendEventToExcel(event) {
  try {
    let workbook;
    let worksheet;
    let data = [];

    const newRow = {
      ID: event._id ? event._id.toString() : "",
      Title: event.title || "",
      Date: event.date || "",
      Category: event.category || "General",
      Description: event.description || "",
      "Created By": event.createdBy || "",
      "Created At": event.createdAt ? event.createdAt.toString() : new Date().toISOString()
    };

    if (fs.existsSync(EXCEL_PATH)) {
      // Read existing workbook
      workbook = XLSX.readFile(EXCEL_PATH);
      const sheetName = workbook.SheetNames[0];
      worksheet = workbook.Sheets[sheetName];
      data = XLSX.utils.sheet_to_json(worksheet);
    } else {
      // Create new workbook
      workbook = XLSX.utils.book_new();
    }

    // Append the new row
    data.push(newRow);

    // Convert back to worksheet
    worksheet = XLSX.utils.json_to_sheet(data);

    // Format column widths for readability in Excel
    worksheet["!cols"] = [
      { wch: 25 }, // ID
      { wch: 30 }, // Title
      { wch: 15 }, // Date
      { wch: 15 }, // Category
      { wch: 50 }, // Description
      { wch: 25 }, // Created By
      { wch: 25 }  // Created At
    ];

    if (workbook.SheetNames.includes("Events")) {
      workbook.Sheets["Events"] = worksheet;
    } else {
      XLSX.utils.book_append_sheet(workbook, worksheet, "Events");
    }

    // Save
    XLSX.writeFile(workbook, EXCEL_PATH);
    console.log("📊 Excel sheet updated successfully at:", EXCEL_PATH);
  } catch (error) {
    console.error("❌ Excel writing error:", error);
  }
}

// Create Event
router.post("/", async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    
    // Storing in excel sheet too
    appendEventToExcel(event);

    res.json(event);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get All Events
router.get("/", async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

// Get My Events
router.get("/my/:user", async (req, res) => {
  const events = await Event.find({ createdBy: req.params.user });
  res.json(events);
});

export default router;