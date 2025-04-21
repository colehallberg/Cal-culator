from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import openai
import os

openai.api_key = os.getenv("OPENAI_API_KEY")

app = FastAPI()

# Allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/services/calculator")
async def calculate_calories(request: Request):
    data = await request.json()
    user_input = data.get("food_log")

    response = openai.Completion.create(
        model="gpt-3.5-turbo-instruct",
        prompt=f"You are a nutrition assistant. Given a plain text list of foods eaten by a person, estimate the total calories consumed based on common averages. Respond with ONLY the number of calories.\n{user_input}",
        max_tokens=50,
        temperature=0
    )

    calories = response.choices[0].text.strip()
    return {"calories": calories}
