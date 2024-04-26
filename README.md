# Customer behavior prediction model using Random Forest Algorithm
This repo aims to showcace an end-to-end pipeline of a Random Forest algorithm model to predict the behavior of a customer given a set of features such as age, profession, education, housing data, etc. The model is then deployed into a Streamlit application.

##  An end-to-end classification pipeline:
1. Dataset acquisition
2. Read and pre-process data
3. Feature engineering/encoding
4. Model training (Random Forest Algorithm)
5. Model deployment (local) on a Streamlit app

## Dataset
"Bank Marketing" (Moro,S., Rita,P., and Cortez,P.. (2012). Bank Marketing. UCI Machine Learning Repository. https://doi.org/10.24432/C5K306.)  

**Datset Info**:  
The data is related with direct marketing campaigns of a Portuguese banking institution. The marketing campaigns were based on phone calls. Often, more than one contact to the same client was required, in order to access if the product (bank term deposit) would be ('yes') or not ('no') subscribed. 

## Python Libraries:
- [scikit-learn](https://scikit-learn.org/stable/)
- [pandas](https://pandas.pydata.org/)
- [Streamlit](https://streamlit.io/)

## Math concepts
- Finding optimal number of bins for feature engineering:
    1. Sturges' Rule: Fit for data with small range i.e. 200 samples or less
    2. Freedman-Diaconis Rule: Fit for greater data range

## Bibliography
- Aurelien Geron. 2019. Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow: Concepts, Tools, and Techniques to Build Intelligent Systems (2nd. ed.). O'Reilly Media, Inc.

Author: Muhammad Naufal Al Ghifari
