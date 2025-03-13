from flask import Flask, request, jsonify
from flask_cors import CORS
import openai

app = Flask(__name__)
CORS(app)

# OpenAI API Key
openai.api_key = "YOUR_OPENAI_API_KEY"

@app.route("/recommend", methods=["GET"])
def recommend():
    weather = request.args.get("weather")
    occasion = request.args.get("occasion")
    age = request.args.get("age")

    prompt = f"Suggest fragrance, clothing, food, exercise, and diet for {age} years old person for {occasion} in {weather} weather."

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "system", "content": prompt}]
    )

    return jsonify(response["choices"][0]["message"]["content"])

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)
