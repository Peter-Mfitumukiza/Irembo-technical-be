const router = require('express').Router();

const { sendRequestInfoByEmail } = require("../controllers/importRequest.controller");
const { validateImportRequest } = require("../validators/importRequest.validator");

router.post("/send-email", validateImportRequest, sendRequestInfoByEmail);


module.exports = router;