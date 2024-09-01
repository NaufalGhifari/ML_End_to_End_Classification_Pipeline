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
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Customer Prediction</title>
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body>
        <div class="container mt-5">
            <h1 class="mb-4">Bank Customer Prediction</h1>
            <form action="/result" method="post">
                <div class="row g-3">
                    <div class="col-md-6">
                        <label for="age" class="form-label">Age:</label>
                        <input type="number" class="form-control" id="age" name="age" value="30" required>
                    </div>
                    <div class="col-md-6">
                        <label for="job" class="form-label">Job:</label>
                        <select class="form-select" id="job" name="job" required>
                            <option value="admin">Admin</option>
                            <option value="blue_collar">Blue Collar</option>
                            <option value="entrepreneur">Entrepreneur</option>
                            <option value="housemaid">Housemaid</option>
                            <option value="management" selected>Management</option>
                            <option value="retired">Retired</option>
                            <option value="self_employed">Self Employed</option>
                            <option value="services">Services</option>
                            <option value="student">Student</option>
                            <option value="technician">Technician</option>
                            <option value="unemployed">Unemployed</option>
                            <option value="unknown">Unknown</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label for="marital" class="form-label">Marital Status:</label>
                        <select class="form-select" id="marital" name="marital" required>
                            <option value="divorced">Divorced</option>
                            <option value="married" selected>Married</option>
                            <option value="single">Single</option>
                        </select>
                    </div>

                    <div class="col-md-6">
                        <label for="education" class="form-label">Education Level:</label>
                        <select class="form-select" id="education" name="education" required>
                            <option value="0">Unknown</option>
                            <option value="1">Primary</option>
                            <option value="2" selected>Secondary</option>
                            <option value="3">Tertiary</option>
                        </select>
                    </div>

                    <div class="col-md-6">
                    <label for="default" class="form-label">Has Credit in Default:</label>
                    <select class="form-select" id="default" name="default" required>
                        <option value="no" selected>No</option>
                        <option value="yes">Yes</option>
                    </select>
                    </div>
                    <div class="col-md-6">
                        <label for="balance" class="form-label">Balance:</label>
                        <input type="number" class="form-control" id="balance" name="balance" value="1000" required>
                    </div>
                    <div class="col-md-6">
                        <label for="housing" class="form-label">Has Housing Loan:</label>
                        <select class="form-select" id="housing" name="housing" required>
                            <option value="no">No</option>
                            <option value="yes" selected>Yes</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label for="loan" class="form-label">Has Personal Loan:</label>
                        <select class="form-select" id="loan" name="loan" required>
                            <option value="no" selected>No</option>
                            <option value="yes">Yes</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label for="contact" class="form-label">Contact Method:</label>
                        <select class="form-select" id="contact" name="contact" required>
                            <option value="cellular" selected>Cellular</option>
                            <option value="telephone">Telephone</option>
                            <option value="unknown">Unknown</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label for="day" class="form-label">Day of the Month:</label>
                        <input type="number" class="form-control" id="day" name="day" value="15" min="1" max="31" required>
                    </div>
                    <div class="col-md-6">
                        <label for="month" class="form-label">Month:</label>
                        <select class="form-select" id="month" name="month" required>
                            <option value="1">January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5" selected>May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">August</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>
                    </div>

                    <div class="col-md-6">
                        <label for="duration" class="form-label">Duration (seconds):</label>
                        <input type="number" class="form-control" id="duration" name="duration" value="120" required>
                    </div>

                    <div class="col-md-6">
                        <label for="campaign" class="form-label">Number of Contacts:</label>
                        <input type="number" class="form-control" id="campaign" name="campaign" value="1" required>
                    </div>

                    <div class="col-md-6">
                        <label for="pdays" class="form-label">Days Since Last Contact:</label>
                        <input type="number" class="form-control" id="pdays" name="pdays" value="999" required>
                    </div>

                    <div class="col-md-6">
                        <label for="previous" class="form-label">Previous Contacts:</label>
                        <input type="number" class="form-control" id="previous" name="previous" value="0" required>
                    </div>

                    <div class="col-md-6">
                        <label for="poutcome" class="form-label">Outcome of Previous Campaign:</label>
                        <select class="form-select" id="poutcome" name="poutcome" required>
                            <option value="failure">Failure</option>
                            <option value="other">Other</option>
                            <option value="success" selected>Success</option>
                            <option value="unknown">Unknown</option>
                        </select>
                    </div>


                    


                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>

        <!-- Bootstrap JS and Popper.js -->
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"></script>
    </body>
    </html>
  `);
});

// Handle form submissions and make requests to FastAPI
app.post('/result', async (req, res) => {
    // Log incoming request body
    console.log('Received POST request to \'http://predictor:8000/predict\' with body:', req.body);
    
    // ===============================================================================
    let processedData = {};

    // Process age field
    processedData.age = parseFloat(req.body.age);

    // Process job field
    const jobFields = ['admin', 'blue_collar', 'entrepreneur', 'housemaid', 'management', 'retired', 'self_employed', 'services', 'student', 'technician', 'unemployed', 'unknown'];
    jobFields.forEach(job => {
        processedData[`job_${job}`] = req.body.job === job ? 1 : 0;
    });

    // Process marital status
    ['divorced', 'married', 'single'].forEach(status => {
        processedData[`marital_${status}`] = req.body.marital === status ? 1 : 0;
    });

    // Process education
    processedData.education = parseFloat(req.body.education);

    // Process default fields
    ['default'].forEach(field => {
        processedData[`${field}_no`] = req.body[field] === 'no' ? 1 : 0;
        processedData[`${field}_yes`] = req.body[field] === 'yes' ? 1 : 0;
    });

    // Process balance field
    processedData.balance = parseFloat(req.body.balance);

    // Process housing and loan fields
    ['housing', 'loan'].forEach(field => {
      processedData[`${field}_no`] = req.body[field] === 'no' ? 1 : 0;
      processedData[`${field}_yes`] = req.body[field] === 'yes' ? 1 : 0;
    });

    // Process contact method
    ['cellular', 'telephone', 'unknown'].forEach(method => {
        processedData[`contact_${method}`] = req.body.contact === method ? 1 : 0;
    });

    // Process day field
    processedData.day = parseFloat(req.body.day);

    // Process month field
    processedData.month = parseFloat(req.body.month);

    // Process duration field
    processedData.duration = parseFloat(req.body.duration);

    // Process campaign field
    processedData.campaign = parseFloat(req.body.campaign);

    // Process pdays field
    processedData.pdays = parseFloat(req.body.pdays);

    // Process previous field
    processedData.previous = parseFloat(req.body.previous);

    // Process poutcome
    ['failure', 'other', 'success', 'unknown'].forEach(outcome => {
        processedData[`poutcome_${outcome}`] = req.body.poutcome === outcome ? 1 : 0;
    });

    // convert all atrributes to str to conform to expected format
    for (const key in processedData) {    
      processedData[key] = String(processedData[key]);
    }

    console.log('Processed data:', processedData);
    // ===============================================================================
    try {
        const response = await axios.post('http://predictor:8000/predict', processedData);
        res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Prediction Result</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
        </head>
        <body>
            <div class="container mt-5">
                <h1 class="mb-4">Prediction Result</h1>
                <div class="alert alert-info">
                    <h4 class="alert-heading">Prediction:</h4>
                    <p class="mb-0">${response.data.prediction}</p>
                </div>
                <a href="/" class="btn btn-primary">Go Back</a>
            </div>
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
