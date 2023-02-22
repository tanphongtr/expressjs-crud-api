const express = require('express');
const multer = require('multer');
const path = require('path');

var router = express.Router();

// Set up storage configuration for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Create multer middleware instance
const upload = multer({ storage: storage });

// Define route for file upload
router.post('/', upload.array('files', 3), function(req, res) {
  res.json({ message: 'Files uploaded successfully' });
});

module.exports = router;