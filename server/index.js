const express = require("express");
const app = express();
const mongoose = require("mongoose");


require("dotenv/config");
const port = process.env.PORT;

// Listeninig on port 3001
app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Import routes
const basicDetailsRoute = require("./routes/basic-details");
// const educationDetailsRoute = require("./routes/education-details");
// const experienceDetailsRoute = require("./routes/experience-details");
// const projectDetailsRoute = require("./routes/project-details");
// const skillDetailsRoute = require("./routes/skill-details");
// const achievementDetailsRoute = require("./routes/achievement-details");
// const certificationDetailsRoute = require("./routes/certification-details");
// const interestDetailsRoute = require("./routes/interest-details");
// const languageDetailsRoute = require("./routes/language-details");
// const referenceDetailsRoute = require("./routes/reference-details");
// const resumeDetailsRoute = require("./routes/resume-details");


// Middleware
app.use(express.json());

// Route Middlewares
app.use("/basic-details", basicDetailsRoute);


mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
