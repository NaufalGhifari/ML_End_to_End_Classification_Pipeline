from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import logging

# Init FastAPI app
app = FastAPI()

# load model
model = joblib.load('Models/BankMarketing_randomForest_n100.joblib')

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Define input schema
class CustomerDataInput(BaseModel):
    age: str
    job_admin: str
    job_blue_collar: str
    job_entrepreneur: str
    job_housemaid: str
    job_management: str
    job_retired: str
    job_self_employed: str
    job_services: str
    job_student: str
    job_technician: str
    job_unemployed: str
    job_unknown: str
    marital_divorced: str
    marital_married: str
    marital_single: str
    education: str
    default_no: str
    default_yes: str
    balance: str
    housing_no: str
    housing_yes: str
    loan_no: str
    loan_yes: str
    contact_cellular: str
    contact_telephone: str
    contact_unknown: str
    day: str
    month: str
    duration: str
    campaign: str
    pdays: str
    previous: str
    poutcome_failure: str
    poutcome_other: str
    poutcome_success: str
    poutcome_unknown: str

# Define a prediction route
@app.post("/predict")
async def predict(customer_data: CustomerDataInput):
    #data = [list(customer_data.dict().values())]
    data = [[float(value) for value in customer_data.dict().values()]]

    logger.info(f"/nDEBUG customer_data: {customer_data}")
    
    prediction = model.predict(data)
    logger.info(f"/nDEBUG prediction result: {prediction}/n")

    return {"prediction": prediction[0]}