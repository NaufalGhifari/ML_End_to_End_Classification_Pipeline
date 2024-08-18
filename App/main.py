from fastapi import FastAPI
from pydantic import BaseModel
import joblib

# Init FastAPI app
app = FastAPI()

# load model
model = joblib.load('Models/BankMarketing_randomForest_n100.joblib')

# Define input schema
class CustomerDataInput(BaseModel):
    age: float
    job_admin: float
    job_blue_collar: float
    job_entrepreneur: float
    job_housemaid: float
    job_management: float
    job_retired: float
    job_self_employed: float
    job_services: float
    job_student: float
    job_technician: float
    job_unemployed: float
    job_unknown: float
    marital_divorced: float
    marital_married: float
    marital_single: float
    education: float
    default_no: float
    default_yes: float
    balance: float
    housing_no: float
    housing_yes: float
    loan_no: float
    loan_yes: float
    contact_cellular: float
    contact_telephone: float
    contact_unknown: float
    day: float
    month: float
    duration: float
    campaign: float
    pdays: float
    previous: float
    poutcome_failure: float
    poutcome_other: float
    poutcome_success: float
    poutcome_unknown: float

# Define a prediction route
@app.post("/predict")
async def predict(customer_data: CustomerDataInput):
    data = [list(customer_data.dict().values())]
    prediction = model.predict(data)
    return {"prediction": prediction[0]}