
const express = require('express')
const { addFeedback, deleteFeedback,updateFeedback,addComment} = require("./../controllers/controller");
// const { updateFeedback } = require("./../controllers/controller");
// const { addComment } = require("../controllers/controller")
const app = express();

const router = express.Router();

router.put('/addFeedback/:id', updateFeedback);
router.post('/addFeedback',addFeedback);
router.delete('/addFeedback/:id',deleteFeedback);
router.post('/addComment', addComment);

module.exports = router;