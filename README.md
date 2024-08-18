# Customer behavior prediction model using Random Forest Algorithm
This repo aims to showcace an end-to-end pipeline of a Random Forest algorithm model to predict the behavior of a customer given a set of features such as age, profession, education, housing data, etc. The model is then deployed with FastAPI and served through a web application which provides easy and intuitive access.

## Running Docker containers  
### 1.A. Build backend container  
```docker build -t customer_predict .```  

### 1.B. Run backend container  
```docker run -d -p 8000:8000 customer_predict```  

### 2. Building and starting frontend container  
First, change directory to 'node-web-app' with ```cd node-web-app```, then:  
```docker-compose up```

##  An end-to-end classification pipeline:
1. Dataset acquisition
2. Read and pre-process data
3. Feature engineering/encoding
4. Model training (Random Forest Algorithm)
5. Dockerised model deployment using FastAPI
6. Web App frontend using Node (To-do)

## Dataset
"Bank Marketing" (Moro,S., Rita,P., and Cortez,P.. (2012). Bank Marketing. UCI Machine Learning Repository. https://doi.org/10.24432/C5K306.)  

**Datset Info**:  
The data is related with direct marketing campaigns of a Portuguese banking institution. The marketing campaigns were based on phone calls. Often, more than one contact to the same client was required, in order to access if the product (bank term deposit) would be ('yes') or not ('no') subscribed. 

## Tech stack and libraries:
- [Scikit-learn](https://scikit-learn.org/stable/)
- [Pandas](https://pandas.pydata.org/)
- [Matplotlib](https://matplotlib.org/)
- [Uvicorn](https://www.uvicorn.org/)
- [FastAPI](https://fastapi.tiangolo.com/)
- [Joblib](https://joblib.readthedocs.io/en/stable/)

## Math concepts
- Finding optimal number of bins for feature engineering:
    1. Sturges' Rule: Fit for data with small range i.e. 200 samples or less
    2. Freedman-Diaconis Rule: Fit for greater data range

## Bibliography
- Aurelien Geron. 2019. Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow: Concepts, Tools, and Techniques to Build Intelligent Systems (2nd. ed.). O'Reilly Media, Inc.

Author: Muhammad Naufal Al Ghifari
