# Use an official Python runtime as a parent image
FROM python:3.11-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements.txt file to the container
COPY requirements.txt .

# Install any necessary dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application code to the container
COPY App/ App/
COPY Models/ Models/
COPY Data/ Data/

# Expose the port on which FastAPI will run
EXPOSE 8000

# Command to run the FastAPI app using uvicorn
CMD ["uvicorn", "App.main:app", "--host", "0.0.0.0", "--port", "8000"]