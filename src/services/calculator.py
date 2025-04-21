from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import openai
import os
from dotenv import load_dotenv  # Add this if you're using .env files

# To instantiate backend sever uvicorn src.services.calculator:app --reload --port 8000 in terminal

# Load environment variables
load_dotenv()  # Add this if you're using .env files

# Get API key
api_key = os.getenv("OPENAI_API_KEY")
if not api_key:
    raise ValueError("OPENAI_API_KEY environment variable not set")

# Initialize OpenAI client
client = openai.OpenAI(api_key=api_key)

app = FastAPI()

# CORS middleware - place this before any routes
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/services/calculator")
async def calculate_calories(request: Request):
    try:
        data = await request.json()
        user_input = data.get("food_log")
        
        if not user_input:
            raise HTTPException(status_code=400, detail="Missing food_log in request")
        
        # Updated OpenAI API call
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a nutrition assistant. Given a plain text list of foods eaten by a person, estimate the total calories consumed based on common averages. Output only number of calories with no additional explanation. If the input is a general question respond with Invalid Input"},
                {"role": "user", "content": user_input}
            ],
            max_tokens=50,
            temperature=0
        )
        
        # Extract response content from the updated API format
        calories = response.choices[0].message.content.strip()
        return {"calories": calories}
    
    except Exception as e:
        # Log the exception for debugging
        print(f"Error processing request: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")