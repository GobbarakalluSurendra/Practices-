#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd
import numpy as np
import time
import random
from sqlalchemy import create_engine
import logging


# In[2]:


logging.basicConfig(filename='streaming_heart_disease.log', level=logging.INFO, format='%(asctime)s - %(message)s')


# In[3]:


engine = create_engine('sqlite:///heart_disease_stream.db')


# In[4]:


feature_ranges = {
    "age": (29, 77),
    "trestbps": (94, 200),
    "chol": (126, 564),
    "thalach": (71, 202),
    "oldpeak": (0, 6.2)
}


# In[5]:


def generate_streaming_data():
    return {
        "age": random.randint(*feature_ranges["age"]),
        "trestbps": random.randint(*feature_ranges["trestbps"]),
        "chol": random.randint(*feature_ranges["chol"]),
        "thalach": random.randint(*feature_ranges["thalach"]),
        "oldpeak": round(random.uniform(*feature_ranges["oldpeak"]), 2)
    }


# In[6]:


def process_data(data):
    try:
        logging.info(f"Processing incoming data: {data}")

        df = pd.DataFrame([data])

        for col in ["age", "trestbps", "chol", "thalach", "oldpeak"]:
            min_val, max_val = feature_ranges[col]
            df[f'{col}_normalized'] = (df[col] - min_val) / (max_val - min_val) if min_val != max_val else 0

        df['chol_category'] = df['chol'].apply(lambda x: 'High' if x > 200 else 'Normal')
        df['oldpeak_log'] = df['oldpeak'].apply(lambda x: np.log(x) if x > 0 else 0)

        with engine.begin() as conn:
            df.to_sql('streaming_heart_disease', conn, if_exists='append', index=False)

        logging.info(f"Processed record stored in database: {df.to_dict(orient='records')}")
        print("Processed and stored:", df.to_dict(orient='records'))

    except Exception as e:
        logging.error(f"Data Processing Error: {e}")
        print(f"Error: {e}")


# In[ ]:


def stream_data_pipeline():
    print("Starting real-time heart disease data pipeline...\n")
    try:
        while True:
            new_data = generate_streaming_data()
            process_data(new_data)
            time.sleep(2)
    except KeyboardInterrupt:
        print("\nStreaming pipeline stopped.")
        logging.info("Streaming pipeline stopped.")

if __name__ == "__main__":
    stream_data_pipeline()


# In[ ]:




