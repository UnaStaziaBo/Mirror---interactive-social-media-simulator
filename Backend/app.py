import json
import os
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app) #permission for React to make requests here

DATA_FILE = os.path.join(os.path.dirname(__file__), 'responses.json')

def load_responsens():
    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        return json.load(f)

@app.route('/api/reaction', methods=['POST'])
def get_reaction():
    data = request.get_json()

    if not data or 'tag' not in data:
        return jsonify({"error": "Missing 'tag' in request body"}), 400
    user_tag = data['tag']
    responsens_db = load_responsens()

    if user_tag in responsens_db:
        return jsonify(responsens_db[user_tag]), 200
    else:
        return jsonify({
            "bot_reaction": "Ok.",
            "mood_impact": 0,
            "community_impact": 0,
            "explanation": "The person you're talking to doesn't know how to reply.",
        }), 200
if __name__ == '__main__':
    app.run(debug=True, port=5000)