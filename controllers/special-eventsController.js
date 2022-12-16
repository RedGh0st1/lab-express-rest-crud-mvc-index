const express = require("express")
const special = require.Router()
const specialEventsArray = require("../models/special-event.model")

// Get ROUTE for /bookmarks (app.use in app.js handles the entry point for the controller)
special.get("/", (req, res) => {
  res.json(specialEventsArray)
})

// Show ROUTE
special.get("/:index", (req, res) => {
  const { index } = req.params
  res.json(specialEventsArray[index])
})

module.exports = special
