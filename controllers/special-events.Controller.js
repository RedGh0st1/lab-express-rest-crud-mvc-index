const express = require("express")
const specialEvents = express.Router()
const specialEventsArray = require("../models/special-event.model")

// Get ROUTE for /specialEvent (app.use in app.js handles the entry point for the controller)
specialEvents.get("/", (req, res) => {
  res.json(specialEventsArray)
})

// Show Route
specialEvents.get("/:index", (req, res) => {
  const { index } = req.params
  res.json(specialEventsArray[index])
})

module.exports = specialEvents
