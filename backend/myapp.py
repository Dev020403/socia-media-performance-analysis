from flask import Flask, request, jsonify
from flask_cors import CORS
import langflow
from langflow.load import run_flow_from_json

# Flask app setup
app = Flask(__name__)
CORS(app)  # Enables Cross-Origin Resource Sharing

# LangFlow configuration
TWEAKS = {
    "Prompt-HT0pR": {
        "template": "Your task is to answer user questions regarding the performance of different social media post types...",
        "question": "",
        "results": ""
    },
    "AstraDBToolComponent-JoeQ0": {
        "api_endpoint": "https://ea054b2b-58da-489d-b240-1ceac11e4ed6-us-east1.apps.astra.datastax.com",
        "collection_name": "mydata",
        "namespace": "default_keyspace",
        "number_of_results": 5,
        "projection_attributes": "*",
        "static_filters": {},
        "token": "ASTRA_DB_APPLICATION_TOKEN",  # Replace with actual token
        "tool_description": "Prompt for Database Tool to Perform Calculations...",
        "tool_name": "Social_DB",
        "tool_params": {}
    },
    "Agent-wSLpQ": {
        "add_current_date_tool": True,
        "agent_description": "A helpful assistant with access to the following tools...",
        "agent_llm": "Groq",
        "groq_api_key": "GROQ",  # Replace with actual API key
        "groq_api_base": "https://api.groq.com",
        "max_tokens": None,
        "temperature": 0.1,
        "n": None,
        "model_name": "llama-3.1-8b-instant"
    }
}

@app.route("/fetch-insights", methods=["POST"])
def fetch_insights():
    try:
        # Get user input from the request
        user_input = request.json.get("input_value", "")
        
        # Update tweaks with user input
        TWEAKS["Prompt-HT0pR"]["question"] = user_input
        
        # Run LangFlow
        flow_file_path = "path/to/your/flow/file.json"  # Update with the correct file path
        result = run_flow_from_json(flow=flow_file_path,
                                    session_id="",  # Optionally pass a valid session ID
                                    fallback_to_env_vars=True, 
                                    tweaks=TWEAKS)
        
        # Return the result as a JSON response
        return jsonify({"status": "success", "result": result})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
