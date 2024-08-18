const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve the form as the main landing page
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Customer Prediction</title>
        <style>
          body { font-family: Arial, sans-serif; }
          form { max-width: 600px; margin: auto; }
          input, button { display: block; width: 100%; padding: 10px; margin: 5px 0; }
        </style>
      </head>

      <body>
        <h1>Bank Customer Prediction</h1>

        <form action="/result" method="post">
            <label for="age">Age:</label>
            <input type="number" id="age" name="age" value="30" step="any" required><br>

            <label for="job_admin">Job Admin:</label>
            <input type="number" id="job_admin" name="job_admin" value="0" step="any" required><br>

            <label for="job_blue_collar">Job Blue Collar:</label>
            <input type="number" id="job_blue_collar" name="job_blue_collar" value="0" step="any" required><br>

            <label for="job_entrepreneur">Job Entrepreneur:</label>
            <input type="number" id="job_entrepreneur" name="job_entrepreneur" value="0" step="any" required><br>

            <label for="job_housemaid">Job Housemaid:</label>
            <input type="number" id="job_housemaid" name="job_housemaid" value="0" step="any" required><br>

            <label for="job_management">Job Management:</label>
            <input type="number" id="job_management" name="job_management" value="1" step="any" required><br>

            <label for="job_retired">Job Retired:</label>
            <input type="number" id="job_retired" name="job_retired" value="0" step="any" required><br>

            <label for="job_self_employed">Job Self Employed:</label>
            <input type="number" id="job_self_employed" name="job_self_employed" value="0" step="any" required><br>

            <label for="job_services">Job Services:</label>
            <input type="number" id="job_services" name="job_services" value="0" step="any" required><br>

            <label for="job_student">Job Student:</label>
            <input type="number" id="job_student" name="job_student" value="0" step="any" required><br>

            <label for="job_technician">Job Technician:</label>
            <input type="number" id="job_technician" name="job_technician" value="0" step="any" required><br>

            <label for="job_unemployed">Job Unemployed:</label>
            <input type="number" id="job_unemployed" name="job_unemployed" value="0" step="any" required><br>

            <label for="job_unknown">Job Unknown:</label>
            <input type="number" id="job_unknown" name="job_unknown" value="0" step="any" required><br>

            <label for="marital_divorced">Marital Divorced:</label>
            <input type="number" id="marital_divorced" name="marital_divorced" value="0" step="any" required><br>

            <label for="marital_married">Marital Married:</label>
            <input type="number" id="marital_married" name="marital_married" value="1" step="any" required><br>

            <label for="marital_single">Marital Single:</label>
            <input type="number" id="marital_single" name="marital_single" value="0" step="any" required><br>

            <label for="education">Education Level (0-3):</label>
            <input type="number" id="education" name="education" value="2" step="any" required><br>

            <label for="default_no">Default No:</label>
            <input type="number" id="default_no" name="default_no" value="1" step="any" required><br>

            <label for="default_yes">Default Yes:</label>
            <input type="number" id="default_yes" name="default_yes" value="0" step="any" required><br>

            <label for="balance">Balance:</label>
            <input type="number" id="balance" name="balance" value="1000" step="any" required><br>

            <label for="housing_no">Housing No:</label>
            <input type="number" id="housing_no" name="housing_no" value="0" step="any" required><br>

            <label for="housing_yes">Housing Yes:</label>
            <input type="number" id="housing_yes" name="housing_yes" value="1" step="any" required><br>

            <label for="loan_no">Loan No:</label>
            <input type="number" id="loan_no" name="loan_no" value="1" step="any" required><br>

            <label for="loan_yes">Loan Yes:</label>
            <input type="number" id="loan_yes" name="loan_yes" value="0" step="any" required><br>

            <label for="contact_cellular">Contact Cellular:</label>
            <input type="number" id="contact_cellular" name="contact_cellular" value="1" step="any" required><br>

            <label for="contact_telephone">Contact Telephone:</label>
            <input type="number" id="contact_telephone" name="contact_telephone" value="0" step="any" required><br>

            <label for="contact_unknown">Contact Unknown:</label>
            <input type="number" id="contact_unknown" name="contact_unknown" value="0" step="any" required><br>

            <label for="day">Day of the Month:</label>
            <input type="number" id="day" name="day" value="15" step="any" required><br>

            <label for="month">Month (1-12):</label>
            <input type="number" id="month" name="month" value="5" step="any" required><br>

            <label for="duration">Duration:</label>
            <input type="number" id="duration" name="duration" value="120" step="any" required><br>

            <label for="campaign">Campaign:</label>
            <input type="number" id="campaign" name="campaign" value="1" step="any" required><br>

            <label for="pdays">Pdays:</label>
            <input type="number" id="pdays" name="pdays" value="999" step="any" required><br>

            <label for="previous">Previous:</label>
            <input type="number" id="previous" name="previous" value="0" step="any" required><br>

            <label for="poutcome_failure">Poutcome Failure:</label>
            <input type="number" id="poutcome_failure" name="poutcome_failure" value="0" step="any" required><br>

            <label for="poutcome_other">Poutcome Other:</label>
            <input type="number" id="poutcome_other" name="poutcome_other" value="0" step="any" required><br>

            <label for="poutcome_success">Poutcome Success:</label>
            <input type="number" id="poutcome_success" name="poutcome_success" value="1" step="any" required><br>

            <label for="poutcome_unknown">Poutcome Unknown:</label>
            <input type="number" id="poutcome_unknown" name="poutcome_unknown" value="0" step="any" required><br>

            <button type="submit">Submit</button>
        </form>


      </body>
    </html>
  `);
});

// Handle form submissions and make requests to FastAPI
app.post('/result', async (req, res) => {
    // Log incoming request body
    console.log('Received POST request to \'http://predictor:8000/predict\' with body:', req.body);

    try {
        const response = await axios.post('http://predictor:8000/predict', req.body);
        res.send(`
        <html>
            <head><title>Prediction Result</title></head>
            <body>
            <h1>Prediction: ${response.data.prediction}</h1>
            <a href="/">Go Back</a>
            </body>
        </html>
        `);
    } catch (error) {
        console.error(`Unsuccessful POST req to \'http://predictor:8080/predict\': ${error}`)
        res.status(500).send(`Error making prediction: ${error}`);
    }
});

app.listen(port, () => {
  console.log(`Node.js app listening at http://localhost:${port}`);
});
