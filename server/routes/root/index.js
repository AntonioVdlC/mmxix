const express = require("express");
const router = express.Router();

const notImplemented = require("../../handlers/not-implemented");

const get = require("./get");

router.get("/", get);
router.post("/", notImplemented);
router.put("/", notImplemented);
router.patch("/", notImplemented);
router.delete("/", notImplemented);

module.exports = router;
