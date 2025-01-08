from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import json

# Flask app setup
app = Flask(__name__)
CORS(app)

# LangFlow constants
BASE_API_URL = "https://api.langflow.astra.datastax.com"
LANGFLOW_ID = "c4ff22af-7de0-4546-a3a7-c8b01806a8a8"
FLOW_ID = "09c2e2df-dee0-471d-9ad7-cdb9050958dd"
APPLICATION_TOKEN = "AstraCS:qHaGIzYvaLsSOXKeUCzOhknZ:24f578c66631b0113226dfb80269131760493c0e512b07f9cf9998320d4e1c05"
TWEAKS = {
    "Prompt-HT0pR": {
        "template": "Your task is to answer user questions about social media engagement metrics, including calculating averages or insights for static images.",
        "question": "Can you compare a static image with a reel and a carousel in terms of engagement metrics?",
        "results": ""
    }
}

def run_flow(message, endpoint=FLOW_ID, tweaks=None):
    api_url = f"{BASE_API_URL}/lf/{LANGFLOW_ID}/api/v1/run/{endpoint}"
    payload = {
        "input_value": message,  # Send message directly as a string
        "output_type": "chat",
        "input_type": "chat"
    }
    headers = {
        "Authorization": f"Bearer {APPLICATION_TOKEN}",
        "Content-Type": "application/json"
    }
    if tweaks:
        payload["tweaks"] = tweaks

    print("Sending Payload:", payload)  # Debugging output
    response = requests.post(api_url, json=payload, headers=headers)
    return response.json()

@app.route('/process-chat', methods=['POST'])
def process_chat():
    try:
        data = request.json
        message = data.get('message', '')
        if not message:
            return jsonify({"error": "Message is required"}), 400

        # Log payload
        print("Payload:", message)

        response = run_flow(message, tweaks=TWEAKS)
        print("LangFlow Response:", response)

        return jsonify(response)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
